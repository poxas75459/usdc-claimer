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
    "2gAVwmifmJEVES5eHN6qyxkGb2u2v7Ckfxjq1RwxzsFnb5HQ9H9y2GMgPmCyCcJiECvQqdN5WXRtUQ916ESpGoBF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66hS6pZM7NQCtjEz9oVnZ1QvNhqtHuEJhXD4rsb1GH6Jnmbhritgq4DptWnjVnCSmfqRtRdPGZ12epatv7PQvpQS",
  "key1": "353mmmMwHW6XKdu753u651uMH2tsuNhszaWbU1Hjq5eT9BL7yqjpQKcugwrbiQYpY5SCzEKgnkqHUbwFNoPadbXt",
  "key2": "35tKuiWUwhnZLydVSrer1BMndtPf84gmjBeY6HF84u4rrywe9Cg4M4a4Fv9KsqFxxj9aQAs6i6bBNgLnb79tjVb3",
  "key3": "4c6gMDHWDRaVvFB7KRHfPD8vUg6uktDK5oA2oHUZuPt2xgMovymq3LcJB7R2W21i7rn16QRrU6vN5fN279JEUPwM",
  "key4": "8hT3YYGwm7p3RprzNH4p7X94dmrqRkQcqNZ7PNbBhe3qu5HUsvtRifboQvEgcPUZTJZ5dD8fRPbAe5fS2dsMwGx",
  "key5": "2W4PuCrPgdxUrqDBg5MK8c48Uz2zFN3b2ePpXkTBMLHD6uzTJjDTBw22rSDkZ2byZ8jLLakBszVCcG32C5FYd14q",
  "key6": "kszu3ur22FqPmaN3rYL166oLemqNCnKFhXp1AJbdG8kky4pEKBasTb6ivU8vdNkXq5g1cmmGXdnqNuMFxLMW52N",
  "key7": "CD1thpWe7hA5GAmKCsZ3b2rE94Ly3GDBGte6cpZv4ytGYwi4cgCRXFAujtz2wjUqmz4pcmB6GvB53g61es5cTFh",
  "key8": "2pX8reNgeZLhD5TktTr9quNHpWpp9DqXvBwzFd1f2ZoPEcvty8HruVYbXp8sLQSEGp3exA8WaYdom7PdGoUkuC5m",
  "key9": "5REHr35h1i27akWPWYS1LxVXJSwaWvQ88qTxZbaYd4uBBhrxsyUhqKwegLf4Z4fANgqvepBwU2X8EFLtMg2GFrt3",
  "key10": "5DY7Y3Yb8TXAxe3UoAyzhtvLNMGN3bfQ1aDKAhLZYv5AqnpBVWJ1fWoaDqhXLN6W7RxPnb6qyXiXNtdr7hCyxgMX",
  "key11": "3xeyK3iRHnt6mv4sGc4n4JR3eUG82QgNdTpbyiz9Z9ye9aU64Vd1CG82X4vKeDJVWyuycnU1wJEUbXzHKAs5f8Mc",
  "key12": "5daeTPtMRLgd14iSavysVAuQSvN3kYzjkQ5ZL9zAuE1xC7cDm9JAGos9sjz57RgRSNKY6DsTx8YD8T3qMjeoYjo7",
  "key13": "42E9hEsEk1uuPqbvBZhAsvdQbHQrLe28g53aANMzRRTLsyW34N6Y7KPKDfz8QRQ9mSwHpwCfg2bikwgX8VJPE2Gh",
  "key14": "4f4a2YfhTaD5VYjGNbeWyucFqJKAfUPvE2tTCHba4K9Njs6pUcDTvSu9xBdgbUtKQuzxNqKSBnKjqkYbdHLgs5HW",
  "key15": "2QU3a8Bhv22YbB6f4qhwANkuacjPMoif2UuyidFsPeA8J6jz7EkZqRCdbbM7UEyiJqbaokdRbBecbVeQF6AcsPgs",
  "key16": "5LuVo6e5eSnMZ2RxwztQKhik3a3e3eDbqY814LR3Lv728J7VycbYGWefpBj7QiHW625PtaS6uoQSwXBPFbbLhhLd",
  "key17": "5hKSMp9JRfsYLJC5L27jjfSSDeheeojtr62va5uFrsE2Bj3WxLGXp1Q8mbPXTQwa2FjZedfehGvPtoYL2nmyfrRe",
  "key18": "32rEsA3bruQFui7EoBLgFUmjxjZY24QoZpWoHoDSixB1rVddBqVR9roXu7bQi1dsLoFDRas84wun4S8Cr5U2UYeq",
  "key19": "qTFSGPYJcTYYKHLgh6M6rxTMDXzTbxjUntC83jQuHJtSpfbM2wbjwv2AJwWRR6FbuHnDeNNMBpypNmRHnnN1hB2",
  "key20": "4tT15rX7yodot3vteviaZMUk5uLazsinALyLBjaN5n5vzX4GucskCmoQChxaqimmHPmbsST9ytAZEmeEZMLfkBGJ",
  "key21": "4EGDHNFYWFKwtaiwMj4zvd8BipWLJ5oJjo51DwmFPqZ8mGmvEvo2CFo1dxtp5bXSFtXgVMnf124i4VHp1eV46DeH",
  "key22": "3oMZ7pKMX6iXeV4hS5annVGt7vR8otTVC8tGDH8twzjvAvQqkeSj5VU2nnnYm3ug4kFefnzYwN47DbVv3zHgtBqv",
  "key23": "58L2cyri2J3wK1sqBuBcUp5ziTBgmZke9VrLaWbYN5zHsi4547F4SRBJcZn2hnEsTMHH7PGhDY4Svmq3QrwuGUq3",
  "key24": "259kpe2TcxNCxQZHTxkLQUAxF1cjNYzCHiKc6XXuWaWBf4LnZNkJRGgBGojYN6Vnm3iGeiGbHhxis9d7WEYDkGwu",
  "key25": "zFdgAShVZcpkviQD3tZURa1H5WWAMuKzXXbToUe6XLyGM8nK8NKBpnHRApBw6AzrHd9GQ97XG1z1ZRorbgHiEEU",
  "key26": "5yXVXMAdPQva8wkrzEyWwUReXCN5WZetqHiAsdqGyzSq8ipSE6Cvp2BRwaeJjn5zFsz2m89LRniCfj4CdBYNV65J",
  "key27": "2Gw721B5NFbBPouci4fdf4DM1asjPmgUjSyGpXDgJwWDh6Z6Afv52U4hfiq9xcEoSw1Nq61wAV61zrGwJGGXgCgS",
  "key28": "3CkQmNLWb2sBm2Di5eqY5qekG3cUAwAZ7vEBynb6ae6RJJ82EdG4Dhvw4jSEUyKyMRZiK1t1bTNxZw1Xu228ZLQx",
  "key29": "2cthM6HwDnKHcucWnJLznB5znYKoiJWUTzhfGHjr7tf2iKNcW9E17QrdzGvqpBwuWinYK4RkqUMR1vxNfRR5ycFG",
  "key30": "4fdRE8hgAdga8zXwnzkhfMctVzV7F1s4B2JYkDBuZoy7gbLqLBY3P2CMGa4NdHcJovR6KzXQojQBV8bdaJBF962X",
  "key31": "3jRJ6RNDUNb4WbjuHF1sKLkfYcvYVkPvfDCBbw7LqnJEpcnc64cKjK4573121Gmz8wBS58pTc8tmMZbGQ3pJobqg"
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
