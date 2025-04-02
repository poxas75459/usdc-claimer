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
    "3AqKxv2bQQHe9wUxmTvNZM7x5Tbjok9gxzuXmHqAnAEseP5VXvogyD7Hx77C8URKZsaCQtuQFr8rfEsc9TnaUAXB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vKcisnMyBYCiL24zW4m78GU86DBbXPE8kakHG7Qnv3DUuWreCRCjmU97yCD47fhESHZ3eN2dWmqsXama9Zjhn7i",
  "key1": "2dWi8uqiVdmoMsPRugtz4nyhgar6SVaTWcqynkYYt2xeK8VBQTNj9sU7hXWcaQfxcN768hGoUxNia5BXnquBRxmy",
  "key2": "2CLFWxMm1uabPvp8hqmPZyEc9XJcV2u8i4rjXpMFL2HQZZZzdpcxg85jBNvf6C5ywwTE1i3sD4dLuc3vGBxX7hPU",
  "key3": "4MzHkT54nqb8G3tsCMZYG7N4NDDwoJxR9RsxJt4tDVvmZZUQe8sDiV4ivJbd5DP6AayjmkoLhmM5qniESBSLNkbx",
  "key4": "4Z5xpMh68Zbb4AUtX9bvPCLfq26eu11ayn4bbXpQA44JNHJ9QeDaN1WRKeoC256jUe66dFGHmjTXhMRVaJSFCcrt",
  "key5": "2fGAuMbq9W7jKeY4dEbBpgoCCDRzrpa2vR1491XjyzQ62PQNj8eMpKR4ewdwEmJztnrWfemfh8hJ8QojfDjizdeX",
  "key6": "3ktXD5hqguU3dxgXRTmg4NaG8QTzkLRQg6WePkBNVKf1oLy3t1FrVYwTzRd8khwp7tKjdo18GCaB6PQFNoj2LxmM",
  "key7": "4DGS4HNzsjxyeL7Z2xSQWwEBonxsHzaSLD6ev5PsBmYPe3SaDxGx6vjqeWe9LmbtjRhcoLmhMCobUiKyW43bDByB",
  "key8": "5ZSKdQuK9RmV6xrHGV4eq9pcQJX16voDtbyERaGfhQBSUveQqTp8jLfKHoumQMuCfgBpNsz3duxDdoZohaUCyi3F",
  "key9": "4sscrMLN91A2LzmrzskHdGwUp4sj7uUY3NFStZwiuML9MoXBjvjb9DuGxroeEXRWEcN8MPJ1mFsACeY4fw6kXfUf",
  "key10": "3z6RufmPGEyRsshMXQEGLaYQndEjiuS5TyVfZx8Hy3gHnwgKuaUfmQbwhWb7WKgrY3eq2CcFrC7s5U1Qysufn2t4",
  "key11": "4GJEwe2wL2LMSrZ6c5PJ4gNMHyrTkHSZVYnG3goNAuhuWofPcZvwfLnWzfDZ8o3sWJyY4RmestuEoFw62DjVtku5",
  "key12": "2LdtTmwsKW9ZHSfko6BkVGfxEjEPFz7xVW6GSLwRLaZLjxTf3uJnzHD1FLce2mPfhUEzFtoUcUEeWT5MDvatnYiy",
  "key13": "5VVcdcCY2zD4K2urg3A9FGHLtTbpPnoVTZFgQXSiKpDehFm6pRjW9nJv4oRsMttoymbAAKg1bFtL7hQ67T3f9hQ9",
  "key14": "42UTy9VUaqDawHdFaqntbTrtifAedbLmtqoq5k4w2k7osLnpo3M7N7EED4YFyjpGmuVn1FF33uSozPrg7LV6n24r",
  "key15": "3toG8FbMzph1rr5zLNkU2jigTdLKjY8u9rwrX9Xjw1wmjuTfWXr8tiinRVBxCeCozAQA3GqcttTAeCJZ6xuZQjeH",
  "key16": "1qneX46MUbS1UpfeDaha9jxPqA6yYnm53whBRNxonP7i4JTncSpcSK1DunJ2sCbbT4iBFzoaw5pnmTLp8fvCX2M",
  "key17": "5Z4Lo1a3n2RifadGxi7Zcf5GCraDsK5WHvFJ6s3naiq8xwmSzdG5AYtSpBBtcMcdBvotirDHzqyVzHBR3wsxVn6p",
  "key18": "5wLxsojoVP49TrxU4vWVYNKPbfRm2p6PvvmZyKTSaFrKgUJ9mADLq5ZRiapCAfSLKMV6fELJwBc9pQ6goMeBzmw9",
  "key19": "hWEUSuwjyW8whMfdffJ3vu4vs53Cth23H325Xqc2t3Hxw5Unf9LsG9MDSWgrdh9vRxwU2vgajs111Zerf5cUM6M",
  "key20": "563snyZsPn3bBy8hrbg2jBrWYx9hD1a1CKLrWxQqjwkyMNGBR6kwYqBVH99zMeuG8t9bYGnLbb7JrkLkUyGgRMG5",
  "key21": "37iv3UTjMZtyZPY7spSt3R9B3d24nq6gKHpMqBpBpHzGeSSZdAjiCZWPgxSKobUVT89jB7VBasumhtqH6k1uSGTe",
  "key22": "4mfua1nNU9CGeaQkd12P32r8dNwu5615ztSvYgL1M6eCeWwhBBGPzYgMdn6gvf3u8MRscgHbuguxyRNTiBd3bqYW",
  "key23": "FDZTLroh6RRJLC2H2Q5mbN4oDk4c9cNFRe6Rv3fBHNPwSCc3tEDabLXi1iLQLQo7RijKr2AiLpuyjuoE2jrbFbE",
  "key24": "3ovpJXBLX87pKtPm3VjyWfrwBXWrYAjpGDCBfT9TiKS759zpmRPiNvpvDwNxyTnyUGgiYio5LzZajV1QUWbZ1Sa9",
  "key25": "wAb2xLZFy1AKYvVoPGe74DaeHkF7dzc4mcwmd3ichQ9GvXzu2Jsy2Ko7FD5fhayNvSVyd5mFHtdHQt1ndtU3NAN",
  "key26": "2x67jXcayHAbu8qFU9m3aqtAfYcHrMwCdE1kq1mSgtWaDXBrjSWf6uY6S3BHGXcBjK42i5DCvbFomhojnL4z27L3",
  "key27": "2kSoqgRsAmERRwqF1PsJ75PAMpgJZJakwVfmNxcrK1tPn3gr4DCf14cUm4vQwS4VrD3e7rjmqXdPWttQ29Xhfuke",
  "key28": "3eFReAqKd9JpLfaDBtPJi9vcfVTdAzgVHSy1EEj2TravxacY5nsYmgN3n2HRVhcXiBYw8ZeMPa2d7UBCzqmjw4e9",
  "key29": "5BSufJnSoXRmH1RUJjRxcgThEVwzPMqcC9D5RvayEi9TCctYHpVTwmLSH6vExjzKUo6LfDyPBPBg9p3ENgP6GeGc",
  "key30": "M9sPfJeDi45JDmcpm7K1WsLiRnFQMGTSx9LzDdtEU1pbsGuzk2XnkStk43RJr7FX3BS4qMf2rzzJtqspzfLWrKe",
  "key31": "4ynsN9Sxc3ewcu5NY4286hdtDPFZX6dWtYDmUXoWx9c4qCVQELyCcid7wDuNFf8zx6eFybqiZPiGgUoLdhfzfdXw",
  "key32": "1QsBzNMCxLKHF2PdV3c5sEx1YqA8MBELp7oq6JvMCeFCprJ9hSFzo1FrmjHnNeP5CAU8PrgmxhUp3ADgqhaXiox",
  "key33": "628PLyC5qq2CgZrFV3TXVKYM1g4kJmo1xtoZkEPdsCrpvUkX7F7cBydvX8y7LfdDtTQviFJDaqfwpwCe9QVPS8wa",
  "key34": "2GMgFDZW1Zz3pRMELjLhV1kRaoyBcgzsGmzYuzZHnGfeaYCYKeXaupe7UQqZ3Vk2pdSVKoVEx3GDTrPU1KS14ZE6",
  "key35": "u8jAStqLrD8TE47g35hzUCtoAcfV3jTss7ZbPEW3XvfYns7KEFYpRtJ8cg6U1X8VJXc6GoC5kYHnq1PFHCnsgdq",
  "key36": "muR1xrupFZBdxsSUBcXzsodjVbSZJmhJLixkVStTYZGCBWg2iywr55dqmNBKXYVhorkVZn6BcnjA1FSbEJQxWFe",
  "key37": "2ApPUDHURGe8ZjEYXaAPb35dWPrtJ2UGmTYYkaXibUKmv1ynvobULvZsxnFyCKwqZRDnHSiadSwKVTKeFy2rTsvF",
  "key38": "2L54p9TnSXwQsDCQozCFPZKxwGoYdPSqPFKHK2DzuZYtMAhVofNSwXd2wmQNAqTMJqWH9K2t6s48hff2koB3Ebaz",
  "key39": "3awsUYWxjLMaiXRnz45czPx7B95xpCJtvY9MpYsTEmeoZBUSAKYLC2phpJjqZvR2um3xi45ScGLwFdy9pbXaFFih",
  "key40": "4m9619Ga6eGtGj1FfCKGJ24WyQ2fDwddek6k2L29n9xeZFn8md2c2Wako8qPbGMcHwomwcf6ibXeyzi6wxVhMN1f",
  "key41": "5fdMWrGEip12cHKuQ5WQoe5pyAYHkYXo45gbn3YqqSTCBGVaJUDCrANBq65ASUXTWgzDJgBFzk5t4uKgPnEv8B5M",
  "key42": "5zRCyEs8h5P5hc4ARxU4bnQRXqtJYzeYx2erVfq3qfPG3yK4njHiV9a7PYhCQH4BRNXdVkNLxqCmVUufpnuH68pu",
  "key43": "qwjTBvmf5Zj28kTNDe8ZEzLWLahXzDSeCkiHFwsXw8CDdC1TgmABYH2HtV6oTEhiqxHY136a4xW7Vh4F554PjZo",
  "key44": "3SXzDVVCEmPXLB7R6R835eVmu8HZifpP68Pq9m7ZJqZAySTmLWqNoB7JBH34SsJtZLGYL3FuFojPK6e4XzGXDvee",
  "key45": "2uucq6ayCW6zFzb22hdQapnD2o8HBqRngpPNPZEtfDwemeGjWWz9Mbv8V4btHiYjwXtBRYiQMGuWBVmp9HXiKMgC",
  "key46": "x7bwHDEKumtF4wgRkmHFjd9BfwWkVzQcx3HAn2frCZQ8VPNnfnY9Yu7Md7Av6qXpjCGJPsNc7tWXtKNj9WTrhDt",
  "key47": "2g7BXhz82H1vK6RNqmLbLQExKGTaUW5jxgQ9zCmqs3qPQMcvzgT33HQh9CK1HckFuCPUkooYXcYnMx596zxPPYzW"
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
