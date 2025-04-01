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
    "2hGRePrYc7iXbVZ5wL55BqvFKoBL9xnXkB4DcYhCeHJ2KBDYPWztApXaFspaioSpsboRZoJDUyYGGLsBMViZmsvR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3toKrEJdxymrPY7uAWvdVcSyY8p2aeFgwc66ZMwVAqymMYZR7DzRVGV9UBiaKqj3T9NV5xCDRPsL8hpqy37VwwPe",
  "key1": "XAzmTyn4tZ7twPTb9M8mUM4kjhSZMp9jwtYPQCde2JrghYgMndWqSomjKcnhHc2Hh2Fz2wyqd6ZW7LHFRWHc3Pv",
  "key2": "Tux8UUmhD6LdDEdHqMcRxBzWUT5bRFUKKFdB93P77J5GV1hnZ7zpnMKCiBTjZfUxbSrCdhSBML6XRPeShLrbN1Z",
  "key3": "3Tu7ZAgw3dheTLxEjFuYGQrEm2w8vrWji1hBJJwMDMm43q56R1fqAgonPvu481dtcSvFskEAQAhxQBsroFHaWPG6",
  "key4": "4FEtHKEewtNxcfTUdHA3cCAMzbtv8NeUZoNGzvkeRdMUSAFoG3kFupCzkvXCnWZcj1U9sEPPEhoFw4KS1uLmP6We",
  "key5": "eiWcACDnHvv4EcYUG4esxEPTAC2Sy1y2gHTbz95SLQPdhL2J7uqJuHAFyD7QzWBvLWBJHyiUTwMTNXu6SJnLYWc",
  "key6": "5BZzXN1DjzrHgBxkDFq4em2ERtpCNZrxbZ2KZgUNKr4VMuRQhJLbwZCtjbwXSy8vsb2ZDCpqEaJGrjPSgzYrM5AW",
  "key7": "2XGQNRBkMw8rj1LhpvnJaGNdjGZiXgCRGyVzmVWBbJv4twkL3NtPRE7GRsvzG1gpaRZP7BcPRRHVjb7y8TREu2C8",
  "key8": "541UZ5xF32bVrzk6X9doEE1j3oZQWPzizHLaWX8SKkbPS2zqM7Eejj1tFNCkrZnB4N7PzZYDHz6bchvz7Bftoz9j",
  "key9": "44jxLtjLotJDFj3bYWUpJan2E6cjSdWFkGoncXy3sSp7JemE82484RLK7gG3gViDoKBhMdpwzF5J3216QKX7DoJt",
  "key10": "6QZM6RF8c1GVg6CkneH4HUCQYmDjYxdTm6fAQJJ24x8AzF993ptQPiHQCg9ya1UPAawcaT9Yk5PfQ5EtEzvS59o",
  "key11": "4GGsYYczzXfKhxTr1xqm4h6qD27EztLRpfMi2cpYexvPe8bwB2rfrmnZWVx2k262CvrjWa48iVXzNmeESKF224Nu",
  "key12": "21wvqDt2eJcXhvWV95nurm7UQZGDUvBmugLKCyEgwYm3Xu2JaNokhuaDNUVcvhkGbdaYE4fyhEuGfeqp3RWs6Bhu",
  "key13": "YY2bEC7dgthXr7KKp4wDaxjhw7yhgCmM27YwUN7zBKC5CSPX3MdZ32etB6UoiMQ6jfx2MYQW8trErFnLCgRhoqD",
  "key14": "4QmGRaHF3z8QkSQJe8KFuRiUAHB8GzE2kzSPYA8YuUMKxhBLgNFuqh5uS6aZh7FMVsVtYDuLNsxQBdJc3JaooNVD",
  "key15": "4xi5B6pXqfLxQ5ALdvts2eEf1zx38sYqt5WM8bsqvKidGSDwQjDMaNoBPXVHX6yUdCYRpQ8T3Sh2eL5pCjAmsAah",
  "key16": "3npzBzBJ5ymmYDN2SSmgrDXVEVbCN7dScuX2b3gXXp4r51Kjk5iZdzZPb8PeoQKEuQtdVc2CNdjsHVVMUUxQsZMc",
  "key17": "3jJapXTePjNMFmjqQ9DosfTXrKayzEcsvvZA1Tx5tzKtuFH5SuvfhE7uYUB8StVM6GR8dGCCK4w84Pht4pJnBfvA",
  "key18": "jNuoBQ6ZVnx7gZpq6XmV73N41oDiewmdFbqswrpaY4bcfRGZqSSBQux3CBnjJUa1fEzeBmwXtf1sXdMKSgtY1aA",
  "key19": "2ethSmRqjbrasjRZDBMJBrF1vAAfUhv9iBvC1YovC9gxveC6YVxpS5cRfi3XFLVRGLLS97Txbx5LKD98vNjmN31e",
  "key20": "5qMkmEpjKo8u724vNRj85uYU5UKMhxzD9ibdYAx3PA2CVbHdug6rJGndC7jF5yhSbrWwheVW5EKypP9CgJfcts9r",
  "key21": "526KE7xosuzug7yz8xQ781ZVmeyjeytTBEfis8kShGEpTPbxy8WC14UNDcFJNBcW8ofqgXTLP9g2wixXyxcoNzhB",
  "key22": "3JwsmmvG55CMmnb896VyfPKXixS7CsaLCK4P5rwmhxkrZ5XgXqYn77QoQpdjpziF3qrYsJV7NvQyqRuhLsy2uevv",
  "key23": "3nRVAW3cNjpDKvfEyVbhbesMrXymu5wwy2DStKTXAVKhu6NqMMGxCrLaLLJfqRg5Dw46p1EquFcZEPt3rKQdJGG9",
  "key24": "2qvqWqrFgeNLqNLURcswQCpf3zTMbkpjGcf2BThcsiag3DCJ5ZLsEgWLPCMqvaNjELvnJJYEiYC9hqzeNJMdSA86",
  "key25": "2TMmq6EQtjJexjDmyAD4mBeSbqRB1V1cKXGW2g8d9drdM8bTMmktVteru4TCm7ZS7KtdqGUop9iXLERaobddPJBd",
  "key26": "5BVkSqyvgWjp6BdyhV7dsKQv35N5sJ54i6iPeyQMeVNBtk3cdmc8K2Jmab4SnaA9Q8JMNbzy1BhGwt7QBowfVyvL",
  "key27": "5pL4aXpHb7qj1E9ZoTVoNgxgH8iDVaYxxri6k2nHGChZWqQpFNVqZoQbxAxdPtFpwghj3oQXN3wxQRbnZoaaSgkj",
  "key28": "3MmStabNfwwAFvrFXr8jsy4Yignw9vDr5J4NAgqX7Rk8zJ3kEag8x6xpXNMy33HErGAsm21ACNKJAVbsKrTYn2hZ",
  "key29": "addVWZpKR7MP3LibygxRXGAU8CnzZscwG5Af9YbWo3vvdEGEMNpn7zrwChSJP46GwNXa1pSM2DFB6KXt4RLEpxq",
  "key30": "2Fk3QGBmuPJ6uUNiVLjV4Azc3wFq5fJxSYDnZgpXeEnGMhT7aCZBLyFU6agGuEkYsujCARhQBvYALYEFPvauLsBn",
  "key31": "5K11ST187kUWCU5bFcDeGwGruGwWzv8dPDxRujgaEeXCKEr34q75nMHNZ4maeRArrmKGhtqr7xYjEfmXpM5p53hr",
  "key32": "4vwQ5TvkCdearNR5uo3ibowbvxQT2hjUE8c2Ce4qu13fwVUxXdSYQQtx6spN2HDLcQtebKSDHu7ysMNDgLjhtSye",
  "key33": "27xC15qnYJc9KGh7o5ma8PEgUq3bQNNiNJZge3CmkGvhm54p8b58HqM1dwG47q2RBg5eLcZ9DzmLiKVFEDjn3wR6",
  "key34": "24aqZiauGLpsexvaKVeZSy2FcEZagY9SJ2qmQgs5gJDaMQdoRjh6aHbizx7vHqexspfXM9mKqdzGhvSvns5SmSJe",
  "key35": "5GN82tUBEugpVVUNDbVbFSLkFugqcDiCM4rGDBSBrFdXzc78xK9bhijRogiAgkoegRBUrsxhjF5birQNjNfruTbb",
  "key36": "3xMwDfZWpmNjZZRhJbFw3YgwthA39aLQnwSUKAarTtrmVLqen6EuQrdfmEK6EmUiTKsvF4Z3B65ipYWvxQacbagw",
  "key37": "3DQqGjqbP9bwu2S34Y5oyQmwjET5RWzUY3tZ7Vw3u2m9iab9S5rBRsFhpaNfPDhWaBAeDCAr3BemahD6prMbNoKx",
  "key38": "9pkH6Du7vCmuZ3hHkpg9gLZ2JDoDNG7DJj6FCCnX2hxWL8gYVSX3s8gMq3AXGPn3LoJ92vAsVEY6TdVnwyiwDTP",
  "key39": "4Qi2e1nw7awBrAgpj3Vjqt4PC1m64ZtdpiuLcQwKbvUBYHxETEBj1hvqNou1UCVQvy6CtLsxBN4PrcxmTC34oHq3",
  "key40": "4gZB2ALPaoDZocsJ4CNFdvSTQHiDhnRyx1jF4h5WTWTPK5iuXb1ovwUfD3UTpNzUJsyH6ypiuB9Z8ahgZDGYAjfn",
  "key41": "41M112bwJiMkiT7NEbGFfwYRN8DN1MuXcxWZz6qWDrHwtSsTJV3oV6KaL1KxUbPhs7AswG3puLE7tBCzJQb4KZSu",
  "key42": "4eGmp7C33wz9KwuDGM41VmcLGw4rVvjwNW7mNyLRKmcmp7DQEJ99GGWKowgjtCFrWvmtmezY3Yg3qGQrjeBa7NVs",
  "key43": "5HYBPwEMLJz9LG1o3HxHBDDoAMbBsKTE1zazVStqHvKVi741cJk1WoMrj7y4pnsycUE8eu6muzhonUwTpURJuU7C",
  "key44": "4UpwhctHdePNceYh8Uvg1AgjULsP8Q4QjHguJbgHbtZ4KgpBVp9jXtMJ9w5Bhm6kYovsk7nxexCzqQHvgN89XNVt",
  "key45": "3iuBwQg3qMhAwru85S5H2cMVtN71aujGiJ7L1nQzjRsRTy8Q2KYz3RgXbxgJfp5frFvb3AbNEwVWBBnPmXv19BVW",
  "key46": "5n2Kyxi3iHojasm42i8dBTVRfw3rQMqkZgMnQPwtiN48ghozkfcZkGFhhVQyKU7f4o57AaGN7JdPdpekMScTWtwF",
  "key47": "3z5KDW3sPbmgCsWpMdG33gGY8Rxc838dBVNvj5ZTLdF5QcNkbncqunPKUPGQ6cRunMqMzC22GQWRQi9chmtorDSt",
  "key48": "13qKM24GZaH3YcdRCh3fyXaS8RcpdHNR7Bq5kudJ1kqgnsN7zg4G6zgkK3MULsWUd6Lt75vRayppbKzvmNCCr95"
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
