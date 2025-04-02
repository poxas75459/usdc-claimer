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
    "TtoAHa6WtDPpGN3mFC6ZBAnZegKMvjTAj8VWYJKPi8qJiYHru9rCb5qkokYECfFLJF8xUYE5SmXjf16WsmPbCZ4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bcUnEVCjsac2y7vcYn8AawL8wrDnFtcCbu1CtxRDXKdwUyjyQxp9e5xXeK6pCboRHJSmQfPE1xiaDCAyX76T9dq",
  "key1": "7x9pZyTf3uDgoHLbAdLYm9gd2vyWjHkMmWiCwNaXb6MHnnfvWY3EqPgwVKm9m6nzGMZ1fxTc9sPHC3r8y2Vdbum",
  "key2": "3K1tGznGn8r5QCjcz59sBoL3RcNeRveStzSY5vkpkhmxau23KQaskgTe5PyFED6BfZECFgHXyWv4L7yVcrcxU8eV",
  "key3": "3rixzqTKES8x7HQ8cgfkLnGqFb81SPHypVDeu1GpgWzbhi1kWLVUtkcRP2Gd5d9MHaMWZtoqMAgSH5arzfG9yHYZ",
  "key4": "TNRv2TbLrLVyqbjbDDVWy8ENHKHgeVZGQGWRcG7tQg7nk7oPN6Wi1ncEBjNfawvBnUZXtn2yTKQiFJtwiHWpK26",
  "key5": "2EXzvmHmdVT7fykfHYD99Cg136Toh1KHRUGJkHaQE73mF7xzJMmS2SWcNHcBZowMsqAABmnPkGjzM8pj2xuo25zq",
  "key6": "3QR83xUAoRvPZrL8LBiULtMB4qSSbqe6EFNpULrbyYfWgPk78n5HzLGw5UduXun549MywgQQJgMSKVbvH729ahN2",
  "key7": "2zktnGnXWmBJbUf6zYYWT4SjoNt7BM6Dx8yTKXHAPMzxCZN8CAL5bRCVnjEpg8ujT6iiSUNh5ue1FuzfapELwTPx",
  "key8": "MdUoTnysRiBizFcAAzmA3CLZ7wixYRqrWTssBaU4t9fS3txhfJzzATm1ApCcy8BcW81onKLA1NvhygQUVGoc5rh",
  "key9": "2nN4aKXfgJcPSHHpR5apjo5G95wWJqdHVTEFJcQQo78ywhj3SjCxjS4GPjnyHaTZuKEgu8eTWbp4UJcMFMpzcZ3B",
  "key10": "5oMmhuDixmrgTTxAoY12Upge5CEU2bkiCFrZJ1Nve1638Hea4bAmjC8V4NxK8mj11PwHN5zXL1psddxF3dc6YURD",
  "key11": "2d5x8AzmS2J4Cz4RVyXrH3mMinWhN5km7ho5umuyncff4z4FqYvU6rkzHcUgkJSRUFfFM5uWw2jNcFNARf2Y59u9",
  "key12": "5EmPRasSDhU9V2exfNwvHL8smUzw6cDG2VEt3XdTsDxL7Xqskn5zjxNr7QnYssKLGfFkmkCxGkqifz69H67CeLRb",
  "key13": "qM3TKpdc6ftruULMH3a6QPoPYJ6GFmeWWUbk5tTRVVFrHAxqeictYL9wPKb2be5q7SATRpwNXw21R3S4m4aeV9j",
  "key14": "3XuvaLQyv58A5FW8AxRGdc9bRHnSAJnJVd8cz8adjTfN635TS3qQFAr8PLEkaqNMyiLPdsyMYZFoTTN33Myj8ZS8",
  "key15": "2RgkmJtfLGPCapKU88tLuKWu82Qyks7hakioWTm7xo8ZFBRJDtZ2Y1nKWqzYXg4gxhQrHF6R1k8tGgkqo5NBk6uF",
  "key16": "66oniZ64kMc8TCgcaM2P1ecH1RKRSozsDsoJbpFmXna3pd3wFptwp268SQZZjEzqMt3xJKA5wTwpFzeQCuH3mD5j",
  "key17": "3SRfYjF1GSj3ewur9VUMKwSqvFJLCH6aiMDBix3Vb8XGwuJTrVpe5m4fy72BajHFjiFxDii7MfLRbKGRQZD44Hsw",
  "key18": "g7s56D5kYJfmwPcyQLs3cZVctupDpsnQDpGcQbgizfYUErUa9rdUNfTRypXJSaFjVxM3S1HEsAr6m6yf59ra9Xf",
  "key19": "2WBnM1KUzyrR2KQ6ngHUmd6Wnc4TB4pf733tzjYktE3cMpx5SgcQmHgjf2c1ug4L63YUARoCHuizd2wS9WimJoJz",
  "key20": "4KvszBNneQnCjQ6my82E9iDBBpAUFA6RWQyXr2YjSjpZEg3gLWxJTC76F766BnnYabUKrVxarf3tA5W9GucZyNfs",
  "key21": "2mGkwFEpbkC7S4AL1Mppm7h4E7nXsuSG5BZLqQ79ZVowdz7sz7WDUG9qX8wsBDwh5GJ8Q9uT66cDsiBFJdm1xrEo",
  "key22": "668A3qDbzGqZxPf7kg1eewjtPNgEWqptY2jft6Jn4V97PpWy3payXtycqVgTN2YcAep3MNDGJtci4qNZTfozosuf",
  "key23": "5dPXvX5uEDGcmnr1r1Gq939DMWBxK7VWtD9ftBXaJBQ2TPXiCPx4sYGroZuXA1ggs4K2hMG4ztmxqBAdpgs73pZA",
  "key24": "2JmuQBq4mREqc3BYahHDT5KbnbNKf9aSExN3GBfKzrg7UPjfJde1BhQhs2SUvDBErtRAd8N5RWM7htT2FdHjt1PJ",
  "key25": "3bBHFN6ypWcoyoxuSBeD7G9HkxUhYqF6V8Efqm86Kha8HjiKrPG9PBW5X7ghAsK1useAtUbTMeAc4mhgxJVSpuLy",
  "key26": "57Fb7hLAnRaJ7XGgiQm1tAz63L9mBpYNpjddxtAbr6Co3qtHHwxc9zyGzkQyXGMffyVYV11Mbxgu99X2xfGNRE6H"
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
