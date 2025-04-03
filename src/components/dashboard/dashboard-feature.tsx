/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "5zaXwtXmjXFedHE6ZpsobLnEB2ery8BkvaoK6J2fdHt3QyFfeMSx7q6fUZ9fr33YhRmHKWZSCCJ26foLjPt3KPCh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zQwwS4s1fCGCbnNmVJxX4gTke1G2SPSRkWH8s6ARd8MhQtchCmRaNhCPbbUQdKoYdnr1dBtEZQQ5uoSg8sqAons",
  "key1": "3ESgLUd45imkKxaqmyRxgN1QAV5gHaEJgHMcwyV8gZzb4VUvKWHeUoAShmYvJTj7CnKvswmH5QqAZC6DLJTDuqX4",
  "key2": "2iWZD18Hh57wY1dB41A6gU6MDNK5HCnLsqLeUignWoxAERP7QK6rjFC1q34z63rTbvFJTLweLAnPYpVWUoR4gZXc",
  "key3": "3RaA6w7hZNoRYyVMb3EvMqjxhWBdQp4sPZaApixzx2z4tmFv7Fqvqi35nepD9ohmpH8k6GhDzuKBH7ZxmWsFr8tt",
  "key4": "3oHrxpRGzzRZdDeoXEyJuT8CtwSMWgA1UPxUypB1pJPMcdTYXnz9Jtmu2moAu39DpepHp94yCCM3dCFrL6rcoiFT",
  "key5": "2HJ1Lg3n9DVM5SZH28X68nGYvkzd4jMeQUKkUhwdoXbnQMYd8iABMNqUtcDMkNFwserRAj2R2ReHNm2G7ZeYZBGy",
  "key6": "5FJjVrFxTgyRqV55Q5j9oxoGzUdhmWXKMkL8wELW7tc31hRF5TJVqb8UPMopWaPY7GQQMZn88A4mD6N2X2brLEpM",
  "key7": "3DhAfaXYgtbhzgCkzC9vykX4eaECZrpF9NhX72dFYMpTVgb7y8AipkgnRVm1QtziQ2Jr8HydfCvZgK6EQEysSetD",
  "key8": "4rkUX2J7gUy9e6N7msd8oNi9Gh6q72z6vFRss4hjGkvtG3v6mSaTaMihWgWRafiL1xu8a7JxLzeKrRg9WynUMvib",
  "key9": "3W1XCovYTU34sfuBzorBZ2j9VCMptfscUpqEGU4wv9JfdcGMo9ku7LtdccuNFnnmpsbcaQxuaEZX3XbxzoZDppAD",
  "key10": "EhhwB6NMxmURTkZg2iAPvHzk1MexzxafdvZhiXwYDrfc4gpd2LENKVncsRGLL8UHrfsMDpNL2G2mxj9TVABvEVy",
  "key11": "2o8AP7iQpM4orLi7ZwaonPEGw8rh1vM3iExJkuCFpXgAakQeBL7B2YF7wCrupymm9iEPEAnXQM13gz18N38Qx2M4",
  "key12": "4AT5VC37pg9ycBhUcESN7iNA5AqT8jeSr9wUranAGo7m2KDagMEs8SbsqeRLrJJSCbtCbVXBQ295cvQ6JGqZykJG",
  "key13": "2KUvn6ckeKQNbxM4dVDdaC953aHNahLMh3Rq5NBmvz93nkuekoNqGiiWm4NPF9NxYeJVhBrmcP5ioRE1XE89CD9W",
  "key14": "rf7WajqCHGtK1GoBEaPS7N9shhsLRLfWoq1KwjoWmNHSPPzT4GcMd5Gq5SbcQ8gjf15v9t75caGFdNQjCFemXR9",
  "key15": "5tr1B3phoYzr76ziGyRxnPKGJLAzj6unS46J38z42hPkv7pLB9k7PisuWCP3hfAJCVhrpkpTNeZJq18suXMgpBgJ",
  "key16": "2L6a2SyvSZg5fn9HE4iXcrGdydKK4TsURHCK2UBfYQMavGAdjJHF32t4WbNZgXTNZvmEpQAWsK77JXh7e5Xdv2pM",
  "key17": "2rGeTTNRmYvk4koXKUJNCa9NMGEo3ngsqz5M84nHfDrGyDLWCLvXyhcr88K3cqtjF6nEbiDLKuL3koboi99UqiLU",
  "key18": "2QVZFpN7sEtoLHZikZwJMjfSAex5KfnrB3smJNc5KX4Twq7KNCRLxZpgak36KEwSZvhi4Rpvd7Z5vQSaMEfERrbo",
  "key19": "36iW7CRN4mouAufcy1NmZ32fsxtYBHBhPPaT2hvvomPirSjA56ph82rV8KyCBbxCEpkBPEgqt3bVAnZDqkFzjkvS",
  "key20": "2zF589YyTWCBHgwrM9USwCnUc95yjoDDq6eE7ZpDGP6BP6EWTBRRXgCZfVmTwNweJiuha3SPwm4tvFBzpLRC6iSP",
  "key21": "2xifzm75MSQsj3s5y41GQgYWcJAEWnMaqqT8nimXz5vmemMJkDoX9peZfyeMUtKuTiKcC39aojx8UUVSXd8ZJ2HJ",
  "key22": "iDPjvoFbfD4Ycyg3cu8A27TVG7T2T5ffdkYMV9HRtaSajP4ayNqsxzxeLRtpekQSqT7Pk7p65Ezdde93tvcfZ61",
  "key23": "25NcZv84S5H8wGEvgWW5zA9b2BKJJRpHTEHAY7CvWzLXmN5N3PCUEGpJ8z9oXtnhYn5Cv6kAYTMmMDJ4PbDheRPF",
  "key24": "5BZshxLtsJjEH7NirA7kwcYGHKRmsRwnjKaDvF8F5hHye7q7swUsfH8VNZ3gueztUJetQFqQUUjxZbtpMsiyz3ks",
  "key25": "cqaFUzWp7GrE1UjFTTjWMovkAgnucjDDfgagrm4yeBmbEi9TGphsb2Q8PN1NzTGswWRKoe5wdAYtX3qCUDPwxwA",
  "key26": "2SrUtL2q3bmYtamX1VpTGvTGx5RpKNtXHw1FGV81z5w1VSyM1aZStjVWcTLpTBXq7niuvk4J9UpHHyihQGHNTdot",
  "key27": "2cdkrSkHL6zUovQJ96Hy7REg3DmBDgok7eU8zCZa8ZyyEvBczVeuf5N28yZfK8Qvt6e1sJQrUqehn6G3cPcCCYhy",
  "key28": "JojrUvzn87TSo3urP1xJYsy8UnLL6ripGbojDbBtz5psZZDD7keSDQmwPJAZEJc3ZfjscY6eFoFsVd6bF2FJfyW",
  "key29": "2F8f4frFQnfdACaLpxkbXDwRzGF8DRekSZb7pGmJ97G4NA1V5We1L2eC31JAxRFizUFt2mMp1hBwgrY7wPS9KhN6",
  "key30": "5jfbmAusUgc1izrQ1cP7ngaD7UKiVP6PXjnhhUzTQWAxhacq2usBVGfGEArbgG3MPb9KSkVeXaug4LaAoM6TU136",
  "key31": "5BMRK7hrBRqcWv6tZ1AknKTcqmYKzAbjecS7ir6dZCHjeERhgFrq5QAnA48UbsFRyEQPCHy1en9N1SNk8kNYMNMe",
  "key32": "2Q8SEQQDCBVppagkNwB6nju4V2yf89GrnRnFwjfTjKnQVDHGuzk6PxxVJiSUDjJuNdHoCwjysEsP1ipZt6JfDZ2w",
  "key33": "48Qp1AjM6GDuhTKvPKdZ1DSDXvzmeuUgUJcotuB6LTintTqEq978v2cu7mxm5qykt15U97drT43NgSgG7H1AuGJq",
  "key34": "5Rf3UNwCNDk2SSCKvWTzxryRPsTT4CbSVTN2TWnGDqR8qT4DJkjoDT4tiR6iJhWETKjU4GFNmjohEiNcANrjTL4D",
  "key35": "597A2SMBUQTvC2hccVR9apCnTADALbffC5JjBhUPsZqJddydf7c93HgiXqKEeLHC2LcrYBak3xjBmjMeY5jzgvoJ",
  "key36": "3jDkDhpTb6bkmc4gGCWMP6tSEXKRGNMLmKds9db24NRufJufTCJE578PkkE7JJbKrkW8Qcm4B11dNRJmLzfYwZgB",
  "key37": "EHtkRvaJS4WsrsAd4n8JRT8NvyPuxgRwkofx7ycxa6jTMVpidJgMPEHCPScm4WBojuroko9pZBaKKPviTrNj914",
  "key38": "2qc3EJxeabWck2AZewrRZBgYvkHWVvmgUhpGcm4aUcfxvFi8SkikkfneoKRaxd27Qwb3DgtbG2WAQccjCy4k3Prz",
  "key39": "3eWfgBjWJ98ufBgER2KnuYZU7bf6zuiwJqVEFftpmPbNhoanmp7m4AsDmwxc8gyjssNSFrGUTm1X4cGeMU4BXmWF"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
