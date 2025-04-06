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
    "22LUQXBEuPpmj9LemNG3EX1ggBCQ9rBnoYLMQzpiY1BBrHrzwDVSA6VQ5CY2TE1ckGvLf45nYtHf96iPe1tu4UAL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4u112vwVZ6Bch5fe2XdnqXqjcEeAY7GeNujVeWRAiFKe6c8JkTfULMmBtZUfqbXLRU6hrUKttbMD2fcDfANaGQ3e",
  "key1": "53cxAhRUyGEmqTnYA12wS4dj94DxNYYX6RWKpNNCZ7oaqufVKjq9tHbH36Q3WtL2koEbLBB7M8SAJDVk4PHZ51cN",
  "key2": "2n7kcg5wj9DZozH1M4S2CYRqjXsEiCdATRhFUfkeXUUtwu359Qia2XpaWVosGQECUCb67nPARLEUiovfJECCKSQ4",
  "key3": "3mVsCpUgWY7NStkwjDbmyvGr3yremT9qBW5kT8JkiKJpEwjYNdTdWuo2vvEmdZMdRed8U1oHm1eXkUAkCHC895Lz",
  "key4": "3AuDGu13pd16eoYZ1v4QiYWZsSSz5twmwpF32aDvGimKWYg5vx5ZDvKUyPTesazPyWLpojGmf4soPXhe4fq9ZvEv",
  "key5": "HxcHX7qFrj6FD6h4d8UbMTgDcDxiVoXJV1ZACsXPfVygBBivrKYkJzGcaChnBM9zNuyGMc8yBoSBqwumVY7eEVN",
  "key6": "641BbV4AotsxgvmzfAgparWUgm1f39wCePpwFHPX245gX59gMWFkCUcFR3xH1zmJDnyi3izogezWgv6iQTC1dZL",
  "key7": "5jYLLSJrTvtkTq3qaij87k7Nu8S4QqEchMfuH9V1AvQWKe9ATpEYcyBBsjxsPGhCrMyCMBtY2cEhXejPoyuLpT3R",
  "key8": "3GxtvAdPxsziuBzoZAC5gfuR2D4v6YPxjecr9dPro3w1k4nVgo6DDcQmYEpbEf4NRwvkZ5FAwCfYDhJxwHxgtPRc",
  "key9": "4SZ7kQdi3aTvYVxVPbYfpT9aXqKdyPtDePnNDSPisvrvMVqrrYicZgBvG7XexX3nQ2FUWhfyCQWrHFvrjEqDfo4B",
  "key10": "izMo6q94tMZs79wYTW1rSQSjFkgchXfSBj3zuyh3RhkxPKyt2GhDGYkKFxe7emjts9u6ESFj6gGVgGwjffBExAZ",
  "key11": "4Pn5yLn24iHzWgms6qojNrvzcof5ZZuMnFfAcd5z1i29V6AGpY1mV5h1CRUy1omv6NaZdmPia7FzqDhh2Fxw2N4a",
  "key12": "H9zmEKaRs8joiyGTEdqyj6TwXnmTkhVsS13qoonmHu4SCgNkdeiEVoRqDUh79EXXBNdM2TLasS9HbUTxp5Ksbfk",
  "key13": "3uFqm1TXQ4Nk5LYJTKY4YqCDNHvJKFK3FkRydP1YeFjrFfQxgxk5rhhCrZqDKzg6gRgWtnS47fHWFf2xh56De9FR",
  "key14": "5ibLYpqci4CSQqC936wUnh5ykjaBfwxnZLPrCYMYTJmVPQa7PCVeE7j5TwgcThEKJ9pKpKAw2Qd25pyC5d5pXkLv",
  "key15": "33EVhyfNFyVeoqsJiwyjBKFNt2CV441FXkjXCwEDKsuQgaRx5LbNwBfQqsVJQ7tRvVzyBJuex3EbBwXtDvHBkUXK",
  "key16": "5bYdY81dkUWRPtWeLZaMQcZm6jBmsuwHkZ8n3LhUyHh8rrZdiEKa1K5RpxUv3C6MPfpXHQvyqSseQNirRpudEQFx",
  "key17": "2NYyXozii6uTaLPxqt6JMbUpkbgiQ116UR1phLJKHwLNgtSwqFBTNs6uiLZiN88QRNminxBvT58dvBENSRprNV3s",
  "key18": "4xS1qLQD1EcWeC419ZHYPG5V2bkcqatTwQmbumLQy2wdqdkNS4mmbfeZVmdVZ4FwdUvuVcui1KGUWGy6eMtofLNr",
  "key19": "2RJ4gB9NK8VBcguyJqUT5LZ8qk6r6DF49WYZCNGKRFA8P95DLqwmGWuFiZUbb3rBho3ifd4dXBgjW14QJAV8BQPj",
  "key20": "wfUgf78ZS8k83q5E4XXdFWtbsnKTqC9uCuQywcD5nmBgthkrqT259PmBE4HAfhVmY8csEA5zmEFbaMMJezLjwBm",
  "key21": "2PPF7cqnGmZRMmPiYdZ4H1est45QKouuu8wXqnQTRWe6W1FGto2W8mnP1fE3yqomCTjvUtB8v7APpWNkFxTq9zDA",
  "key22": "5ep5SmzV6ghuND6ukBdHmTVFpbwXkdkhxNNJgkoM5pTdwk5jHBHGBt6MpW8FL6J1qTyoZ6WpjzG7pa4nZzUEWGRB",
  "key23": "XucEyD2BGSC99q7jnATbewQ4jgrab9cTRK6jZCgTB6ao8o8HJxefSaDg4KWVoixHxHyWVjBQ9F5WbvB8ctfNZ7H",
  "key24": "5nb2MLttfqXjFuEnQUGtTWEGhVD9UcosiMFVRsvadf67jr55BkdXJztNAqfwuEKkVci3GouNJNF6qoKE4jPLdho4",
  "key25": "5UhKaHq1Cw54LqbotfeyxuyF557Aah1Ba4tMXEqVNvXQLWqnSajKdGVFWybMTtiJBJtGVDFHvSPFxAZvkixFGT4d",
  "key26": "3thgdYqgU5YwMRnCJSughQTqQDYAJQp9mrhvwmBwbNoif3vUaDsZJhqCHV5TB2uUuQpPVstv1nJdUhQRYBE9JAqJ",
  "key27": "5uacmxbTAumSVkyjJ5ze22nJwZ7a4qPhGQZWsd991qH8vVbvVFqhhKY1c3rHPkQ6sx8x63vEMa3iGD9mYv5sWhzn",
  "key28": "hJjwwuq23ibpmJ1CV6SSM4oCVQhFMM52tS552Z8mg3Ato3RNEYsbPVkprhX7uR255ePiN3cX4gz6yKux5QV8Nkc",
  "key29": "37cYTp3Q7hTU9RnXBQT56AMY4Mx1HT2MuTEbrGGGg3QJDAd8on5MjRcz8NephqaXbi5TD7pcLrLrmBWNzJfmJx4R",
  "key30": "5NHYC6MFUV7mXS14SJFwLTgiZzQkAXE2NG3cZYfgaajgbN7NkSqZJ2b5RQsQNccF8dJRguThohBpTpo1ujWUzSmv",
  "key31": "3JTxKzmdMNVpS7adJshyUKWZVt6easkJiMgsUES3ELoZ2TfHxFzfqLWB2cKHyL8imEbzbbDRzGhm4gBeUBHi7NX9",
  "key32": "RAvfuCTGm4FfbZ6SyKEqvsy1jifZwbNdmJ81MragH5Q5AsTBLSz1FVCJpTuuSW1w9AAoK2418QCCBi7bmGzEJ6G",
  "key33": "41fwZVyct1F7edHv94MqouhbgMyiMNoaDrFjofeJ9oJFJVeMz7hau4cem7XjKdsmLe8QWVXeW5txxFwoifpGs6P3",
  "key34": "5gCx4NCmbcuH2HfFJ3MyrHKNdNsfzEsNqQiUeJLCmGX3Vd6PDXv1Mt5PAKsdMyd7bqv5ycRkLXznVWsWyDmuJZqj",
  "key35": "4Cc1cJmZxrZ1Nk1vmsXWAqd9fT4pyDrBGkwywj5MHA8jK4HFdPdKqTDRiGmg3wmdSBDebtPX3GMABi4PkwSDahqi",
  "key36": "3qNyAeyau9dxRqVjUvnR4vhHdCRUQNQ5p4SdWkynFyQcxEiApAPHKiyzVApUFj3q8bouRwwGArb1kRXnZokWxBJw",
  "key37": "bTNCz6PK3oizbe6HzeTeCqdwR1Ftmff7cENVdLJ5msPnptU8SUjNKy8G8pWHdRs4VfRRgkxb4bio1PcR4yPT8x5",
  "key38": "66nbd36oEkB4VBt6xGfaQdFiJVLvpSZTFBZiu9d5WyqSUtV5gaKEZtx4gPBwXNb4AnKgJpBxTdjyeZKLwW1yVkfZ",
  "key39": "rXPZdknPhEAXmRmpzXGzv7uHw3E9RSdzRBv1uPEBtyaaU51m2EqF4cnqT9v4H2qgfEHoDjGnx22veNewrHCLZKf"
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
