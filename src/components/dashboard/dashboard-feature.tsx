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
    "5htZ1Dmo8ayTeKSVKVQiT4v7ck6t6FNc3pNyjwP4YU6KCc2eijamzrSnWwPvpipCyjy2W53th8thRkACRfX8YRso"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4n6dpgj6yQKpFhcNHkCFUffh4rgKseH5exup1yHVn8LJGcZGWB4QqSyECedHqCohnMbwcFPL7Kok1FJ6rAt6YWjG",
  "key1": "9QvSSmzhf8Yuyfq8XdVEwZKVDckwWJiae2UaP4HmhbVKptEJiihWXfo8dfCEQMkcfhBQbLbPVDhbB2rK4YV7KEm",
  "key2": "5G2jXGRd5hcnuXfWBhHgiTJ8B1ZJNU2giY97EcjwH7pVXwX6VBVc932N4UveJcxBbZ48GBVJ33JpusP5NHH3cTg5",
  "key3": "4oPLuQr77fwk1TcdKd6crXquTnqbyjqorJrWgYDie6iNQ5e4PzXyQCRSiaz3H8Me4a52aKswsKVgCLnK7K9dGoiL",
  "key4": "44RWD6dCi2VzBG2wdc8SckRxNWAv6hHFm6e7yhk1yYxizjQzSRhcgSKcs1tPqVneetfEko3SymWrjEdUMzjudSmi",
  "key5": "3tP8Ldy9YKN74adJfBvZZNmzdLwGyughUe6p6FePH8hgZrjWhrdcZpc3efWh4zvd15J3aUc3VsToRvvtRjVQYpzh",
  "key6": "4k7QZX68ZPGfg7vt9dhuGYCgGCAQYJ2vKxV4FKJRrstgZ3bfZjGfxWuPpNtJ769NgUudgLcp962GSUG69EW79Gt2",
  "key7": "3jKau5RVrVayUTTyQVksJhySL63ZFNrWGNicEQxkQ7RbVyipquawMG7z7ESyB1pCrDe8izPSf9XsqzuQHqdhy5A1",
  "key8": "4eJhHmQNj8YudpXuSw38RL4Q1w7sBUXVvCKXa792fhvRKt1uxEjsrNpNdE6mChgYvKfBgeGMUDigTw7DpD5hmsc2",
  "key9": "5CvRzPuwiuZYkRyP9mGrubvCDA4xQ1zJEw5H41MkDG3zk52FgigZhJUrAHfgCY45YXYHkrvFG7HSm8Z6gZJkCRcj",
  "key10": "267RAUxZ9tok26r5DwVSRLh4hFe3qPko3ZeZymu2DnCuyHCsWyZafCfv3iHnuY926axE12p7F33UN5bkJkN8L6KR",
  "key11": "CaWiLFTXuaFY8L99MZ4GYUoWj8BMMw64aXNyEFxm6HMxAudCmZBoE6afgEorSxebxaGFumJNwFFyPgd44uNtnDq",
  "key12": "57yYVw5A7wVo8BKwYh5AGRMiheKRYbh5qJLaMc9pXLNUi2dV2jPKvKFnJ6QdHXaFMsQJZr49rUorJ3MB6xwezEY1",
  "key13": "5D3HhSMR8G9QgFiTCat4W1CPG3vtpoHYumJrNPNSc9bD4cnfUAkz2FDWv8NF1LNxcyUFhKEnGece6qMgUtYvo3mS",
  "key14": "2p8hqsApspubVbaMfWpJmkN44LMwe1Q49K6AdadJvmjzmN3wi7DUGGWWxBKWqWBKEusz2YyuNFERPVW8HeNaUtPy",
  "key15": "3UB5xFrSyizUVyVW7D313CVEbd5gbAGW98pE9SPHyKrzQ35RdhqRZEYX7pWZYLWsG7E4Ze6VEqXc1Nv3ob4xzzpM",
  "key16": "3xRdJgyYfjVfNPM5TUiGYNtwnkGccnzAGxXdo2cxtKUBs2WH4p7Xqid8kwfNzLsJVrqJRLD2Z12jzewdokxZkJQT",
  "key17": "xFPnsNRrNtpURKxpi4CainEUT78enxjykiozvMDGbmCBkFY1wdDBvoN7rcdWQBXRohBumvraxJVArrSLfsNQhP4",
  "key18": "2raQAxaMXkD4741qgqaqfZsEonGLNzKpafb6DXyVyM9Qy8mGRR1X2vyovaQdmziEFfbBvCXcnKEXtmjmaSyWDZ6q",
  "key19": "53M9YhjR3NENTe2SkxZS6ZKRBVUo7WjVmbNz3hzLasXwnfPjdUVFGu4CXDyBEPf9S3j1BdMVMpKMgSFJEnLXzvdP",
  "key20": "2sT6HNdAjGpSM15uHYdFtJm4cYEh31wBjFYe448wmDEHZmYpEVuT2dfQJ7iScnGbizoufTFPUnz3ZYRCxvUMBmz",
  "key21": "1Af7AkPXC18Dm5QdLMGpcvUCfwgQzoYGKiwJEAzRmtCjeQqABpMMePwM7GgjwL3nqAexqNkZxbezpCM6nfx2ZwT",
  "key22": "4MLSfynYDqv19EPJhHrrUqj5cGqt2rTwXJJwjNBdXMXeiDTW4oLeZK7PCpmj2Q3qkovzLJ72CCZ3csguHspwYfck",
  "key23": "2b2yNG6x577Tm6ToVHfhouhdAB29NDtU1tcNQUk1kq73KCJgdVLKThP1FSb3pZvbBFDgZataShbpDZYbEu7UoUVm",
  "key24": "5pNSEaAbC75u5YGccPC9JADFFWn27iskCc4vFJWCpLkeQH7vP9ZFG1weDeKWJErNA2oXLaPLyedUoNNRbsfLAhbe",
  "key25": "22XA7zfVuRhJYrrxZdBiE6ETLk8VzCkJRVCoS7LX9co6HHYNPvn3Hqm8piA5DpcMz5ppksB14QF6qpi4iHa1pCK6",
  "key26": "2t9XywFs8568JfVCW4RcBj8DVAYShoJZkz3Re8Eetp7C5MD2jxn7EsiuTiQ9RiVt2UrJbLXbDYq2BEzWZqDT1Aao"
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
