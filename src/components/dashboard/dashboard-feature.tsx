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
    "4MPwriozHYroR1yjK5sZ9PFNFhHhCfMhMWhd76uRVd4iSuzD8DtauhgRybkXNc5udzp43FpyefkqNDy14pyX3MM2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xkkpzayKNcPJTk6EqULQ6XNbswqrJ79zjPpAzKtLskpRfjKq4vWezoKYk1JCWqTvRfCqiU36pGt66UeQPoYd82T",
  "key1": "fWb5XqfuYQAdiaGXVyz262pUus1tH6QK4PjTYJLQmHa6M3A9vcVkP52dgXxp9aBJPRwnNEtDgZwqSpmWPRoFnq5",
  "key2": "32JnXUrAHuV37a2cmtjVW5p6mm7WD4hf7tztSHjJ71ke1DgTxDWVMzuxdGpUnrca1BnTnfDZjAxGR5h9xsrCGZKm",
  "key3": "4hSfJw5jxf5qPFggrH6c1ZeaBue5DUYM4jAjPbNkHpHgi174XHTnhtocpMkzB3sYMeWTHFEYGa714PeVEaxEsUmJ",
  "key4": "4jStUQxgpnUt67L1Em1RV4hfp4DuEcyC1ktE8zUjPQ6JRdYChm8BhGfGUV7G2mLF3cMr21WXvE69BHYYp2D8ggvB",
  "key5": "YjvephaV3KCaNN7YPndDACiKWEcSofK2DK7Wh8MbfVLQ4rtjqkLRFpzgxnSnbq1H6zdnEjLd1EfDqaiQyTyzgdX",
  "key6": "38ZWp3v4Qr3uhiAYfYXQ2pL4LfaR1rF1wRQJux6BUB9PDKiJ4UZhvan2D5FNpsuWKvBHdgLdqitsdP6fpd9SgHW3",
  "key7": "3GdtDqtEvbNkg7cByQ6rVYgHCXENBjymzk4ZHmZ7uETJgFbkmfyBii6kS3dyMj741wrekrkxdTZmt9TYh52xvhWe",
  "key8": "4VLor71Rob7KvPddfzWAXNu75zMvVQRj1GCuB1woGNkzKmxCELhxd27X4WxBpoz9kNv3YB6Lsa9cUMjnC5Kp5xJT",
  "key9": "4T7kDdvdLiYUFkKrinNpWHy3p1YGKgt5vXkv8J8EkXECt5sjGanZ9UMwDak9WywmqzhPFoC64xVRcEmqptkiEmUy",
  "key10": "5TqFnM5V4t92TRyP5fd9jzF1FQQC4wSiSHDNvNRayscCqc3dWQNTE5BvMCepAG5Yp3eVAzmrDMymr63PompUosH1",
  "key11": "496kp5MapFKAHtbVRChwKJyoUtPLupufCr7eaWR38TmTZFy1mf22FxUEbDd5bL2rPDHzDn3Am8wJGKTuUCAQTTE",
  "key12": "4XkLaHKGQTKow7w6AzxrcCKw8P66uF9KNTPqLmxU1qX7ouPPXFrWfG3Li86jboR5qQG5wMxLhTrheyETSCTH1zE9",
  "key13": "4juCCoD3tzy8JDMu8bGy8YQsVWi1Y8gKWvuoEE8SKLGEFB4DdpbdzrnrdkmcjpQukVYzvkA1TmSQVi2AbGmS9RVH",
  "key14": "5FwqGxL2K6BFonhVHqMB3tqcZNWWGzexsuuPHdj7gYcNf6xmSnwrCxsxNePKj2bUzu7d12gxEJNX5vPGu9DnXMSz",
  "key15": "22HQTnLEg21cVtGozW8dPwoX9Dag1AU8Qdr2xggALZtbVoWNMqq6n2wKdE2Lx4jSsTndNQZeJAE6gMG1Exrp9DQ9",
  "key16": "BWGUV58qt8DNo8aWqjDV1ai9Ri3o6Tq18SNnJfdTUKkjquwYhyxL7EjNu4WsuDydUELZzYgBd4ujuAZPEhPXTgc",
  "key17": "3bix1QYtCNKC18aWXhG4HjKZkENCJnRNvPmGfdeChPwCNsbfxainaACb7VnYwQfhXoMFsgBo5vAn7GFPnhKaP85V",
  "key18": "57Y5LftVdHq3F1qKCGACg4jj7XAq4dypdTvFN5BpZRmra1vYZj67Fc9CcUJ1xXbPgZ4xBHMfzaHsL7Rsn47ALLKP",
  "key19": "26MUEzfUyFi8VgQGXyp2XezeCyhb4ED6ygGu5WfxrM18od9gfzhegd9Ehy6QxwmgSfsiGKoTKeNECSQGsaPmZ26N",
  "key20": "3aytohE3HGFWrAoYZohQHMMkoqCGDWWnuztv8MU8oEqnGCKG6MEpnWee1C1UNEn684A2u6hqFQ3j1cwvNnfv27zH",
  "key21": "3csCw7Hs4E1GQg9qFcqnKa9tNMLkjtxvGNFKZkGuUmKA2V2zkD4yih5Ew3vXwuB7bWyUKRxL63Kw8rb7ue4NeqQ1",
  "key22": "3khsyVDcH4xR5HdyBVga94ovwjRADgPKWrHY4adro7iFnz9s3RT6ZFyhEiVxi4G6icu1seFuRVsTVzjA4CK83ysm",
  "key23": "27dB7rRRiLQWgMAfpwW9BstvgqLy7uCd8nV9YuHKscq8JZ3jkxBrwMtMQnrQ2JXRww24ERjk3huhuqHKLBoHmLif",
  "key24": "3oCaDXaVwYWYZjze1gEnPzji4D1PHtjQNvbV3KCAtd2KvmAFMaWXiYX31GBGEC7TatxzpCBnQ6oQRiSfNJGEvbmN",
  "key25": "5cTMk92eYa6qCj4gru37c5TkQyGEMJixVc1L5uNUDHWGCZhiRSdCrPD6PfcXAvXuFPFaR3kUuzboFCThJaEu5tWX",
  "key26": "Uqu5VBdBXesRDVEnhMziAHEz1BSYWtCw2cZXbDU3nuQUB8XQxgt9WLoo1D7yNYyNp2wf6Egw8htwE1wY5gk1VAU",
  "key27": "5FBe52J9ReF1ZbZB9uq2phfUqTPkWRJtijFdWYoftpNFGjmD1xKyZNZvMWvTi3cyLx1XueKqazpaaT5Uq4i8FTz",
  "key28": "5pTWzQv7yLJUg8zuvaourLTuLX9ZVhHCBsP6rKnv2qcuoQzQAVuuBPnPAvw8CP8sAEnzS4Ba6WwMiSUaorFY8w6e",
  "key29": "2BGU2iUdmZ31LK8Voia3QbRJxXNwX77ZfAFUfJUSjUDMcTQxTmJcyR8Y4DUNtoeLEe8APcwNwZgTeZh87WH1gPLM",
  "key30": "fbxaYvPLtT2j3SJXynktym1vsNYUQCDxkz5boW21iMLH151mx7XPtPnjT4xxwy9nL6TyzLxWmuWPsNLH5qid3Uz",
  "key31": "fKcaa7auF7AF1cDe5fQc3XLgeXS6oFH8ydULAaPA9So6dvQ8BAAHTPny3Bu7vaw9Z3hPZiK4tuGi1SbuqGxT44E",
  "key32": "3FiCryZfuSkq75Y3LyNh1RBZAUtfHcBowDLGUEH6Pzwe2hrNxN5LZ4dfFQtPK7BknAxG63SuoRMRzWN5pLQX854W",
  "key33": "fnYqqiFY7uXj4PKc17vvUq2SgbonAb4RGH3jMbfpvQ7kjg3ahrFjARSLGcqiy4TMNTeFUTPYqpWT8KaQMqFvMeZ",
  "key34": "3eBQq3ZzjURF1Tp5ifANcVJSqTYgy8AsuwGMHccWP6ksPk4bfhYUUeZDdvRyKxGyjTXZNcfuGjsx4aphJjgzVQSX",
  "key35": "ire63w7Sc8KEDiMUDonQa69FQtP8rBnnrKF7RfdckSZtXE4FVugZkyu1ycjRMjRE17MiTgds5Y47Cxg6LcVTmC4",
  "key36": "3H7dysjeBKWna7MGfG8zXGFEdeLRaDJmgaP7HaMTVBiMLX1irjKdhS6KJYSwDWPFTKp8TF5i6GHuhPiBiwYo9yFP"
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
