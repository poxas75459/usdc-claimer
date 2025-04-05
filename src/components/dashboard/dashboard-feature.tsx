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
    "3TRVDntV6AWW2BT5DbreMwLSqwceqAmSXhgrnXLX3nLhoTijBRiNbTPPfp7pXiyCAV8xWa9LLUZwXoznWaWNYX7z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jVAqfvBEqfyxPTKmd6H8zJmrcBMu2zdSn6pcfzEkyKVUawuNRMteWpkNM16DeQqZPVXgrSMcW1paNU78JSLe7BA",
  "key1": "35oF7SYZnVws3TKMdM342txoMC8DKDeoV2Mb8uEnHqM6YLw5xNsuG3L2iz3of1VEgWph9Mfuet3pVX7aQGrZrFkv",
  "key2": "2mRpNq4VBnVMVSGeN4CGXbbeEZcuUzeQJ49a3YU9EP2dV8xHn5fBqH1QoyjVARkUnWLZfNJmdsderPnDGhmVwFoE",
  "key3": "XJNAkuczVDQRMBcoa9bE2cY9EoHf5diEbS98VLh7fMjcwiB4vELiMEUYi4BpwdiBJDtQhHKNfh4fbWmbEqApxGr",
  "key4": "4jv9VfVnjBf5hKdBYViofXkYZS8XZEEU8gpkhSQhdMBuJQoCvZHsY6Wi3M9gVzRbFV2P5Arfdaz5SN64s1HmATtQ",
  "key5": "4oYY5GvkSjqETq3XMaXaBtWfWgfGFWhtz8RBvaDGVvUtePY5hFU3PcvR1CKVVwZsK4j39rzHRZvuUD3pdcR8GCt5",
  "key6": "w5DgNVaiFHGhoHfEpMYTcK7B1zsm4PeLnr2q9pU3WtgZJ1Fnx5Sj3YLGF4Rr7HmL7wMvgD1Aj8cTmLQ8fcVuWCM",
  "key7": "28BoSSwxHACZY97PS2UxdYA8z8fYXGcUyesWFT2e92qKQNpoLt2mdSh2jGAVFgR5MCMLo4jp1dHWPeBQ5M9Lmzis",
  "key8": "3ZVAJzBbZ8wXAQPAyfFdKsTbaCaKnC5FCat8rwX3AXezCAi8qE7zkDKuwhg3GwLyBQcrJmQhker7MfhFtAD96WkA",
  "key9": "5kvdYmenhtVZumQFD2Wh6DtMNtYSADoUvJYmSzYdyZXee56YVTSiTHTws4s145rUWikc4m8a6v2YcL95wZFkKeXB",
  "key10": "2GLVzXxDWfHZpkb9dLRQL8pf2YPgZRNWi7foZKri3rTXy3wWVLu1kMXENdVteHjTmLLLVzJ15HBoYWJxnYJnZawP",
  "key11": "5qkFnuLnsCYSRPuJXohhihQsuhGTAi9V5K4H4hVb2BJYN2HGWh5qtwB4aizQ3vBdP6UfFMYqhdvNbt9FaWxJHgFt",
  "key12": "5PHhmKwqaiqHMmYs3y7PcHg52M47oC6f2Zp2X5F7rVumtFBZYU44QLdRFr2KxaDyeU66xU3fKo4YFbE9BageHwG7",
  "key13": "48W5tZTNNRvvK2DEBFTbDcRNzfPsER3iUvmEEybYYTqSPtm1dMebbNmYwYSFjUfSoXHvbeMZka8WKUuE96aUmnTY",
  "key14": "4YY3wXrv6czw2y55BLHw6ERw8mTRTxWHXSddPoLzFaz3xbitmPmcecTUH56ooUkvqhaeWUN4R9c51XYWnWqXTVnE",
  "key15": "3VYVV8FUdbWVognLdUS6bz7EEVq23Q7j7XDpXiVzbmJiiS9GrCsosYX4e8SJb7vgemtz85opSzHY8NyLP4AUh58",
  "key16": "56ZJzZFA72XRsJmBoW84naMJHBgNmyQhAgVXML2TJYsxDDQL2FhrYqQNjY498EWoZczpk1V6zzK58RiRFDRpMrZZ",
  "key17": "4twoY3e6dPx7puDTqBtkxWSzXDs5LRrZdnqcdUrUu9VKPeb8bmCkRXfc72m2JoNybV6ijNMYcw57A9fHVKb4knsk",
  "key18": "4eKhSttor73jUUgbLvtYmS8uYxA4rGrFMEjquCd5KcCHwgYmuzkji8gAM9xjGZe6wKtEBn1XNfaDkxfFVDdcKo86",
  "key19": "3cw8pbwM5pB7Sm2JhGDGxpBcbFhjq1nc882UYA8TuBq2zeiCY4UgikF2eKZYR5hyBszPbDXyyAPnmaNKajW9qdQo",
  "key20": "4eikn3uwLzSMZVGBGKDtiHbigpwzCuMp52nJzDKG2wMngEKyKfMg3b4up2wBiobGAT6u9vCEAo7Dv9EJXfRz4a9B",
  "key21": "RFRPBr6QnecHLN9W9NNDyrhpxBrFChJqGcFyh88eVsg5LcPzsHpaR8pVbTvR3DQYxfL1EW3QSoLy8HP7DCtbbVK",
  "key22": "55EptC3DMbV93KWqt2JygdXpZkoG5JhJCkBp7uCVpM4V6FGVCbN3cLHztAWex5VEYvuUsygdLxxJCskFNr6PgmTa",
  "key23": "5rjeRQMm67h571BR27GntngR6CPDmyk6zTxFUQr8CvfBnNLnXzJLSQuh88SNsrcGmPVuMGuckEDFnQCPvLFf16MF",
  "key24": "rLSRG6GjTFx4jTv9jmtXNE9yrZsbKnyCX864Gm3CJB2KEx27HgtQKF4K9zeetCMgDLYT7MMNDJjb1eAjxwxCM4N",
  "key25": "5FPJzKErX8Uv9XcdPwuxNW8tCpGCQhjup7rHiaktWew53EX1n4UnqsAkzb44hchEAiNxfkCDyLkk6yJgZwqZnXjb",
  "key26": "5wzCZgos8xeZMScS2ZXfmWGfrFdrX7nzg9AUMXztdGigbhkPQb32fxgLQ53W69NXzzvD4L9ntxt5z5oQhEVHbBpt",
  "key27": "4Z6rV9h9miLkk7Xj1qxswuVqQRrTDvs4XYLzra3nbhmZqAYeu1bG6ALtLSjHh3HEHYJnb6Ete5phzHJaPmtuFNYe",
  "key28": "X6q8duUVbXvSeX6PNBaRYzVVo2YHxLEB3vtxa4BbzhC7GW6Q9LgLJQtf9XKR96QkgBQRw62WXtUS4Y9HNzNr4Kx",
  "key29": "5Kyd8dEjbMFxun1sC5G1xd3a2JCEyShzMycugQpT72m6GmrjEx4c11LooS34h4CnmBtEiKTD1GyQkHjvfKVh3QX9",
  "key30": "3yaerVREJ3ht3qoufWBwbAL3ddhwg2Vc7G8BHG8eD72RUB3XJMz1L3UUKHkovinkVYJgmZhpXP5WZViSqfPMDcTp"
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
