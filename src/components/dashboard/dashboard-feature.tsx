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
    "3qr2Rwe4ww2Am9JffcWT4TYkiDQx182hEmr5eh1kVTnAfFk94WZw7DQnEXCxoZYLVR6tiJv68Jgpa3pc1yDXaYxG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PtGHpoojj3jPLHtfYTwirDmBrWoCkjxU7Mt8DhM6KPBJEUotW5m9bGAGkSRHhjrT452os19YvwVRHbLgCktYX4C",
  "key1": "4FRXr9p4SHHbbiq65MXvxXsoJszrKQgZHMdhCks9Skf8h1wVWofUbfDddrwActeoFXhFT5nkwrNZFrUNj3qmTT4Q",
  "key2": "58fnY8xi39L4DcJBrF4bJgxQVXAtapRLt1CzFxBTXVfsBss2DRJbB78KbexSQiT44bSEpXXgkdfkkhSPjSoHu717",
  "key3": "24YXTnmHwr72n8ws2BP4dNvyZotjmJZxw4oVJYmug7dYGp5ft1DJsGfZMA6rhEBMffyQJzPhertgG5gZQwojMSUb",
  "key4": "4UuPE41fYoZXW8naha1YHJNJexUoPmYm7nCD9k2YGisyJJ2wUqEjEBp2uU3g9QPG9gkZYhXoanbtRmsxDh6suBod",
  "key5": "3QmXo2tDmVhe7X5jwcXGZnuhe19V8or1rmY17WMeBafmCor3MCdAQhe2xajXCZHx6qvSTvYdxwq45fWJJ1qm6dpR",
  "key6": "3M6dvdXDZrwPQs1PUdcbPd433f5ReiE3s9hw6tjsPP1ixRi68Z1iiZ8GmqCo5ThMeFLFEbbiKK7YDJGDLdAZfNDz",
  "key7": "TQwBFpbAmTrBgxu9fP8tN33j8Nciik6apA1DDDMHHYsc6nA4vrogR4UdfTYiFa8ujKKofTTx4XquCPEbV9MCwPG",
  "key8": "5RJNDjNHBeEpFokUUGseLPm4J64uZKAk7PtR6vwgvDr6UCYbEXuhg8uYVPi5xBfdJCMvsoHje5DbYLAZrCe2N1RK",
  "key9": "4QXs5kkXX6nBQTPWcEbUy9hZP4wcSXmeEN5Za8CRfa3MrgwYsDcY5res7DsSzzJP2efYaZLWHSr8GqnoFzsBxWj5",
  "key10": "4zUcukkW3Jbb8GMszWPQTEmjcv2PQR7i8t7horvfTiHASegCLVvwE4mQwATfmnyhuYatE64VYXdWAMahngPkCp7J",
  "key11": "2sDy7YqTXb9JEtFFr874aTEDj6fLqyPdqDogJ5UKjRcSnVfE4RxPD5oVzPUBN8VsLjarfxCQCmF23XfjskRrkWRG",
  "key12": "3ZaLPGFnYyDvpvpgLTfMzSMaRtbyKQhhhnH36Exnkx91cu4p2Xdd8cTTbG8M67d6haMsHs5ME4uc238Z6Ag8eioW",
  "key13": "2YtPmoWmiWAWHMqbiWDfyChbDPBryAnh4rMNjM22YZ7HpgnYPetU53z8NkYkpKpPoSMoFx57Po3bz6MNjFXZFBm5",
  "key14": "5zzVNLy3BcniCVMT2ySyTWiSWz6XYvSVcPZzqosFMqE6ytX36vuKyfiQY8kfneMoiAEuSXDVxMR1kHngDxhyYfLn",
  "key15": "ZotYpgvipEx6XrhbCVZVBfWE9VbbADqqnqjB9DGTFvVVUxgSxsCezVzUjDbvidcerR6Hb5zPG3dnqNDXptiJUjp",
  "key16": "4Q5TeQmRxcBLVxp5V3Wbu7ewZWo8SuGFiFrx2pAFjUGG2Ffv5CCkfiRFKD6fV5CpGnmuzdZ7v6fjjM35QLzkpyku",
  "key17": "2sqVvzy3vQmMFLAC2iLpkA8jxoyKHjTUcZcsJ5EfAyYxCGg7bSpSLwwcuvbrbomHCD5wDGVEwcSUj4FPWSfSwBsv",
  "key18": "2eunZmLRTSF5EXceAB8vvaBDppHchCkZEczUTdNo2RhPyPWrEH1qxZHpWd7NQMxJXxUgyfeLP8gFFtJcaAf2AoqQ",
  "key19": "tAfFxoSxd4fLc4TR8HTqXg3CGo1U7ZBtkD7yUDk3EVfboDS3ikMTJEcUo2GtjT5rLZR5AVsYe3M3DhJssaiPTwD",
  "key20": "5PRJEJknn6Vn5pEsXLzUdEuuiTWaXdHbxFtQmRfdPUrojF8cuKmSYRs6mPnxSHEKpSmVJEEpyABd58R7JpUdzr3q",
  "key21": "3qZ8znDSyrrpn2FVHXhUMRAsEVfprm1Uhg4VE1ysEtm1zGd6vpdjgUwxV2vsWMGXfbEhNEX8ixXmUQxeqkJsfdcq",
  "key22": "3yYfcrmVkJjHEVM6f1yih2uqR7Y7SuVrs65SD1F4D8Dz9A9S9gJh2aojHx5v7KwQ3QDsLwRX56tz47FRStABVdE9",
  "key23": "4kZuToC8obZXit6BH2qMPVufj4eTuaQSydH5zvknbVdWrs6jUWBPkYj7qPAFjcTec8Xna9c3ewy8FDubJLs3xvjo",
  "key24": "2GiZwCLVPJQb1jT5hYe541h2Wfb9kUwgn6Hksn7hhbHmRKt5e7Knf5Bqsm4HtqRbMZCAksaJ6uYyVyx7W3pVaf24",
  "key25": "4WSG8g4LudRKHsDAyURzRtBKYfCfiZXkHNyt6LmUL69yxKqCMMqvgKXgyawgmSqpP2MCNYfrAmngTcqx8YEmWyFk",
  "key26": "WTAiDSy8FGKGharcqwKhX1R6SHUhdskpKSxQscYpeGveBq8eG1vkaViYTNU6q4wHccKXjETBscaBvxoHqJWpT47",
  "key27": "3sJCveWctTdhFNs9kX8gYawa5M748xMipUf9NV6zBkQjcXp9XKJtF22aoyCVydG7iwqoXjrqQKwS4zWbRQx4aaQj",
  "key28": "Ddi48FxdMjfnbpUmBuv3Lyo2JL4Xcdzx6sky3XuinrpfNZFPAYQwMxiRCytbEcGNmpcqULfEpibzgwuw74cEiSk",
  "key29": "3o6YZ67WSmWYBnhBYEzSjFquvXH8pzQ5i8KDZHEzTm6Qe4JWhHFKXccSaLYJfgWrUVkbS3kNf3musk9ZLw8D441P",
  "key30": "ZprNhBw44envh1xCfpcmo6Yc42DJyotbkE4fDMf3WqPCyy465VWvq8qn3qMWsGS9dEY7BVYq7tPftRGeEK4uc3M",
  "key31": "Rjokjj9hB4TSu9dQ8zVs5juqUc2RrwxEEmVLrgf5Ep6vn2XP8UdZseb6333zdx6485mLE5BmjNHcJw88FMCpmPF",
  "key32": "qqDFMYWnHtr54SZFZgwmx5fM9LihpPn5HsSKeAtH2pPqHp5WsEeZ5GEh1GEUhi8Ut12cNZbf535AV2od1ZV15xk",
  "key33": "hz5K3Xxma3La7tfagaTXSEF95eHUZDjCc3jJK2vjvRzHBHjJgCnLuJLQc7rMkVC3DUUwsfrTsj5BtbHXJwTcbKn",
  "key34": "3BLbxNjBLnuosYr9AAJfr1TGehg7cNGZmRUb3tLKWsDSoRsadWAYHXy1CFnZLRqYXejWLRDBuvSNNu6AEzwa28FX",
  "key35": "2Whgtna7ecka5DAhkcRM6fMbhhprTtQ72LYQMpzd5w3vLMcAZYR8ivD3LY3TxDnJfwz4Z5KudodoBhPRmXV2ABow",
  "key36": "62cuz1dxtt7XosRCp2Uu3TX5HcCLcXcAvcWZbNjepqo7QMmnvxSDWZj4McU9BRDYjs1Cw8J7dyYdQ5EBXMhWKaUY",
  "key37": "R42M588myYh9YcBifwryhh6x5dQGDyS1kd5c3up8MJyDte2xxoTLFvX5GvUgrbc2k5JZF4tZLi5DqSMz4iEBaez",
  "key38": "3h9xGdo1xchay8BchuQh6CTv2KheE4goSDjSqbo43GYRVqxF3nZB7hDerA56sscHRmqNhdRKaaksVbXMFfmSvQYX",
  "key39": "2C2RWoTcp5H5BADcpRkFzdyKsddr8vmMkAKDB55gswJFpfSHvMsPhDHqUz21J9GgT7dKwsqhdUnGEJATgjRFV1Rg",
  "key40": "28rPFSo6H4Xbb3NHGaQvom18oKRFUJtRRuFtyyvZJE2MaKNsoDKfVvFC7WcAzbjLZtSJCTXdrEXQcSNFuXiPtYDG"
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
