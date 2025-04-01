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
    "GiYFt7ipCyNWcNxEj5pDebnG2L5rhcT5fYAhs3yF27xrDJkxrFXBuivphk8c6my8fhq4kLiGhEGhxP5sQdXxgnN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JKiuGCjrJts2ndbFGwLY5zcWDUXkbUF7RP5iqhF7VKheLzcge5ZzmJb6TkCm5FmTqCrJFBPxF9azutSGtgE9ghC",
  "key1": "4P1F8oTgdAaLDRwv8YHSquW2ZfGFjw4kaPseJaNRg6fHtqhsmPd3ZLCybuaBKNzGYm7Y7yZk5jVpD57uRqeUtV7Q",
  "key2": "2u9kNHKQtm3fQ9jHzvjNqzXFBJCKMMQqMCiwE78uBeQznJPtUKjdYdVqYAA1A47y95GQ753SY5X1HjAFTn7TKSm7",
  "key3": "4d6icSP1KQX2UYtDcmpkka3hvBmqeXfY38JtqZQ3jrKgowmZHpsVefzf1wDMdGqCR8SESzjARS3W4H9Uw4Jaj5w9",
  "key4": "4aa6aQjjc1ntFYatxuyEAKEB9WujNst1too5uThf1n4eLMUQcsRpLsv7W5E3UtU59MBciz2Q8znrzfouS261YBV7",
  "key5": "53sLkdfmmrhSsbQwt7DfoMR2zJkEiTYLmAUZszqmy4t3bfJtyyodLA6bKaTvpmMDRbjEf2QB8G7e1pbNrpok6FbA",
  "key6": "4uZfuyoR2Jz3Bu2qZkF4Ny4yK4k7sZKZ8CECe3NJMxZnuUN9XeAKtrH74ESyenHo1vCVzZ6yVLmDa4Eii1JMfcbU",
  "key7": "2AoUWpccB3881U1UUdbiMf18kPGLy7RcARdUNzRQ6aN1vq2V3AfhxRVmj3GhHmoKFJHYh53ptvwS5MvE2FzkYXqQ",
  "key8": "2V98QuH5hqJBH4cezwGMsgDsvfwYUD86QimVEn2Yw7ZAT15kmSHjuWLfYfD6KEMYsDQhnKf4iiqHCekgWaytZQaS",
  "key9": "2dNNvuAibMo2nss6tsE9XHHJBHuHKKLaEzZXb6d7CvEY2K1Y7PF4afEEW2CiAR4hDBpEJA1jsxhr2RpHQrcNVMak",
  "key10": "2buRm59qntNgJHWUKzgXV1Pboc4HUNHDENjJNzctns8j4RWSd6HznZ1Ws8jEYwwEyvf2kxGwX7bApaN43v9GmMxo",
  "key11": "4WpXrcJkcqMeoeTiYz5aSSW4ABHb1p7rABLrkLYArhpoJskxtqC6rBjW93XqtfkeGHk2vzouKNBzJ6pA8yu6SB4u",
  "key12": "2wzrxLrPuFQUipbZ52MSdJoFr4TBQerCG3Ew7cuQ8BCG5fSLbfaZdv9nRW6nKCBaPhHkLtJ9WDizHWuR1FrQM9ra",
  "key13": "2SuDjHzpqX6o9eF4Ee4Ltp3swnzimxwDxnTssYTc71nZBtgnJcA2Ynt2udj3ZYCPc9i9WCUfxYgdDieUJ9WCbGjQ",
  "key14": "2kEnskAudTopYjFRepvaHzGxL2uLgkFAzNurujBxUf69X6nm9LNaYiYkGVnAcrckoP65JeGtcnK6ojwmeNi8CptX",
  "key15": "5P4JovmNENMaSpF13YU8VCdXmVXdZ7zWNf1YNfz2PiJKNDUagFn778545pkRjFbpUTiBw1MAYS4WP7664dGpgnaT",
  "key16": "4YtthXfTbKjuyErabxkC6GLpqJai6gkk7kB3sE81eiN7DnZC6QBTiayE5CFnttLbFdFfyPcMuxLH5Y1jNRE3qZoe",
  "key17": "2azsiLvGRsYJUEEFyRkh2LH4kRG5kWAePkKbfBjqNayjfVC9urjGp2kNv5jMNqupGVvQ6ntnTQEnG6q2SvxDXruX",
  "key18": "4j4Zpwhdra3eJnoFGCUYXPqyb4AxRrjCEiNH7Jx1dwp7oHWcFgqkWodjXfpwqkHdcd3WxJKv5KoRu7buKsojoYMh",
  "key19": "5z47Jq63AtPmaptTKAnPQp3xYdMLweZAPkYXrSjp4aLQpc9CsqiF7jcmBmpXiBHc3zP2kWgECk1UKrn5LSMRoMUM",
  "key20": "cZYZRZcanBzo61gqHWvFu22Jcxax7G7jiNSXbHdZkXzbCr1ZfdfcMBBhgC1aHotezyuCECQY1WjYG91VDWn8h3a",
  "key21": "USTFWuu67MzGW9zLE6YKtYHVvNSu4TkKLPXWTcqpMD2jQvqAkQ4wyMpchGvQjtdhSEQbBpvTSCMdoh48aZWRhpB",
  "key22": "55PXWz73J2XXBTs1PiPKmohPP8ZJvREW3pKKowmGz67McnRhJ88dZAtjg7kBqhJ4npXYNa8iLNfggLWebemtjsBr",
  "key23": "2KDwWR9K71dX7NvENY5M7i9sT6RzrWdyDTEZYuR9oiVNsUfFbfa1VZ8eBJzRgod3yTh81UcCzEaBQeirjc46cp21",
  "key24": "3buZbiYyrFGZUYT5HmG7QStHeGZs3TBqw7tLS82QqfZbstzXGRXpwsi3aiGoyKA63okoPr88dSnXCp9i962NkvS6",
  "key25": "3CLdxQNaN6HDe4JbHQjWNi8sYWJSro8Mvcq5BaKWicrEDRSU3WaV3QKz5gw75dMzPks3bZAkz2ipQ2gyM9vBr8g3",
  "key26": "4mSbzi7NYYX434BwUP1m2kja4fzvM1oiGVvSVjJQNodqJmmefxuzYQQr3x63MiCKDQw3nvD1ynPyYt73RSVdGZYK",
  "key27": "3CppY5puLY4zyZSWGLP3vX4KimqTYMEnawrxBD2uLnxtbkHQeez92CgKvfViUUshDvvdpyXFttS4FJ72HUzB1A2o",
  "key28": "ujny264xnrLXnPDbxV9rFA646q8SyBo2gPM1AtWpzt3nLYz79asYsgWquCyCfnX26kArJKhZRXTCd1eVSy2r5g6",
  "key29": "63J8a8VY3uonnFaTzXvzkqsHB6QSTyiwWSTH3Y8H1K1xfKyYxfmLKJ47c76defP5ujUdiVZGubo7NushWWqWSGAp",
  "key30": "4XorE8UzkGke4KcsB6fzNqBc5xgfEsxVeZJav5SCRrrMJ3qbyboWC8mu9nLj3UZZP2rWzeLUUBdBcmEPtLzPLR2N",
  "key31": "5qB7kaJmi8n5LhXU1ZXcbPkEZCjs5637TYF9GgY3UCGN5zFPNJsmd2fBgGEoRYqeRhGdMJ3M9efGpfPZjSdw2156",
  "key32": "37ZDRxkTJM7BiCbGG27wyBtEEv9hoP32nxQrCA88mGPNetVd8SoSUfAEkgM4FAnV77eCC3tDscwpxmUqhFqvbky5",
  "key33": "4W4AcMtTFGWmgj1SsA6wEs9sWo4Mnvm99jseqQ5HaNBpx9jVFxgBjanMEBMzgxbKjqudiLAAf4fUGnJwSmR8UP8B",
  "key34": "4PME744g46ysMmS8jJWxZPK4ksP8JHtWCbBUXzL4PGfMxZt1KXNgLoWPz2agsjhJSH2d7B7CkFoeBdpPf1fUAFYL",
  "key35": "67nsixa7Yjx54bTnVVUGAFD3JHKDqgazkVC6dsxJLLeXCbrMFmhPRiGaEa8xvuuqmw459bsKMk9fkd7qh8XMXa7",
  "key36": "4xwvzzTBYC55hp6FqfGuQxgVeVRqqNGVyyEJNnRqG8ggW5ReU34STnmk3BEhwNAPFhftiKibiYfvXzYKxVSARAKW",
  "key37": "3awxhYK6iWKgZW5tCyatjFwyfc1htZaE16Rz2XePTCBkBzP3qJAfPnsSREXX5p8kL11ycJv7U3f8PceTKNciEbYi",
  "key38": "2THoGqJT9vQDUCLrhCNEBy2NcMdaEn8LjBG9XXPw7sPSrDMwvtmvdS5BTyWgTvW9VJepes4tSf3r7bnFEFLFTusT",
  "key39": "3am6xMJ6xQuayF27Aob4quygqxQe488vu2km7aaUzPNbJK626X1iMQfUSkTZbeLb6FW7VxdBnmsXZ37XYs1Sm7Gm",
  "key40": "5ErgvvpRKRp1n4y2XUyUREiMbBS2mimtTpGyiMw3WnctHsoKoyymL1afsEh1sFZSMxkcMQig6e7afucGJ2zFz8a4",
  "key41": "3LPucfj2996ws6KrRWx5QkFF1teGtZuHqM3qnpooCwUkzJpaEkohNNjUKNohs2zfYEdDbCUJtKaYL4KgvikRYiQw"
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
