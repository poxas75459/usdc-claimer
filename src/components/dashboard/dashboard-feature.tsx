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
    "HSWTRUyRbkyzZGYV5TY1BvytqwBVS8TRyfAgK1uum5AARJ5WUcPHoWLgGg8UynPfWe9aHEd5oWDxmxYRwaJoCWN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dy5p3rgJzbtuUJfgw3SLCh1tNjTi54wbW64nS5yyKkcpEu8iUDfB5e1CFoDqgfJ6LqnpV8E3PvXRhCGAmqGhaQR",
  "key1": "DotVwnAWttTQ4ed3Ga2vXyJmoMMsnsW4FUgmSzL3C6egt55EjFbtASqykjZ15v6F43R7HaPVYRuCxxpp6Tz2e96",
  "key2": "3bcfrdfxEKoRg4MBQonr1uXsQmxxJrny22BuGmQGUBK9zdqJzRa3U1eJ3HZTEvnvFHPjua7MGfAtdqceWgLw97ch",
  "key3": "5iKvtsnKDdKsaXZrggmpJVkUVu2C6QxG7v5QLqwCfZ6yk9efYLZVSCD8N5AB2pH6maDBMPSoA8yqzUweaSMVgMxX",
  "key4": "3WNjFnKH6RS9EZD3uhX5PnuoUcN3HCUAHNDdeFaum3HxdvoAp48yC7NsdRhRjNhPjBsBVTSZohr26T4kdV2PC8Kv",
  "key5": "56G8u4skbgUhv2k9HfApoCsdswpB57wuqEvP32Fporqzrm2C3AdbZ7BKJvdge993K4N86jcPiZTgXX9BAYQrDJCH",
  "key6": "4V5bTFPdVezPiNfUyWjnaCFsk1C7a1JZY2BXhypEU4GAX6wMTx9ggBoGvRxiPU2YKQ8WMMuA4qjCV9ZoLi1jsLTg",
  "key7": "2Vecntreij4VrtPN36eC3CF6MpKxvM21VKZo4THrzaPe5BvRncRfT1bbk8btFPr3b85CNHe1ZbXoyXmZk9xNkE8c",
  "key8": "5tgpRi21vBL7ife8dcxaLNVwM3KSeWvRr41qEFhUkw4j5fYxwn5TVCm5qaLMUAL7xN65DUWY6PTA2HSvBuNRU3kT",
  "key9": "zLMzRPgquwryWS46WjcVg8yagzDhi3DAxy12pxTJafjK21TyH6m9zCbC4xkDUuvYzDdehd75imnSdAG9a5vVKre",
  "key10": "fvkU9nSXRQcvEZRrgjQtgnMZq7GQUk2xEX1Ug44pz9Gve394cCiZ7HjVS1zXGqfZ6U74C4BAZJYzeP2VZR5kA6c",
  "key11": "2ZZmjMTXm1d716kwvqoc6uHhxNgb855bXCwVjjKKf4GaA1nGB7P2T7K3Hw1tnahUzow8Hy9yzvz525Tnc15b3WUs",
  "key12": "3X8GhVo87tAsNwWzayDYGkK4zcHrD2TogRdRQv7hxmnycwnv2enPMkU32yAJb2wJkNBvBScfknJAGi3WRvnNmnma",
  "key13": "5jFHh7Q7474jdJHTwLJSWLtZ8x9Ps5C1cCD71apYbwmhds8ARarpjfuES3vCZxR53UvprUK4PPLN317NPN5TDCbG",
  "key14": "675WiuLXN5tH2nkDYtm7kHR4Vy7BMzvBhWsqQo6fxw2KdgvQsvkUJV27CsYUXzvMDs85c8jTs9e9iXBEjMNPgzsb",
  "key15": "o4gb3k4wiDp6yNsVbQkDYtpyaQm7748sZvH7WVSfXxVW9YDivjuAuNVu7Qo3mDzQr3ihoiSTRtYTPmgoQ9K6Vzq",
  "key16": "49KjGTBhGWDNHHFU4iJ45uXncp8p7BPnzYnL951cwDEfH4nCRKZ5VM6U1bejaSmYHcfS9GfDgdkGFkD3ePBgkAMB",
  "key17": "5rken95WeeVPRvdSdiWPRuHvT6T9Q6Hq2PUM98xpbXdSc79yXVY28w9efZsZof1RZPRSkDEeVANugJdwg3DDKvyr",
  "key18": "5JrHq7LhzNjusc6na8tpYu7K59Y7YnyUWQXURYNbqS3QF5uqYRQ414x7Trsv5DtQo2P7oTqpkaMvxfCwZet5sra",
  "key19": "51t1zwxPuhwDbDBjyR1A2SDZDd72fcp1u8JvFYAy2aeX29nLKd5djooyFt3WbMcFm52xW2JNQTMQvTNrEdYSDy6w",
  "key20": "27M83guVAhyat1oArkgkxetvqkX3Tc7DQJ1qDAm1toyg1HNUamM6tafzqiRmbgWQrogdpCxZZ4pxRXywwqkkotX5",
  "key21": "2etazhQg9VgXuFN34HNL5LjvB69xL3U1h18QVymbfQV69EkApQAfDSetsZiJcwb1FhpHsdA1isWGAX6NyGJXLqX6",
  "key22": "5Ekhddkz5o5i3YVkvJbLHP9mSUykREXK6zPF29tbVKsrp1ey3oaFygmv8PCnuVE8P18SwCKWfxm1jKAay9WR5wsm",
  "key23": "52CTx8hpvFWdGFf8a4jiaW96cmw7Yd9GESSvvArmYEyrnubiqE9f1NKoaKTwqrHzjTQTJhQdaaFpDuhjTN1X7M2i",
  "key24": "3CtZM2cYerj28CSAyxv8rU1bXCF8JaFJs65roFp2SUvBWMGe6KAqC1vppzGB6WnKcyvaNjj1dBJFDrRD9cYR7rV9",
  "key25": "3dJ5xMco71dBWdhm7wXedfbHUPZ4N8CBxLbYp6QFFyquSA3nuSjvLvMameS5BjiqaBHNREDYdp289yvj2Z4JvUce",
  "key26": "2cHce4XeSBHQW5kLu44ehYvxGpqWyNBRt1Aobi396xxXB1PZqbLrTvTFsFMdhb12Tgcsi3m87cTKARj5hATMYV2W",
  "key27": "U56NzHHg4LkZK9tUKvF9Y8Ab4r7mSs5XMdK96fn6AKSPMoyKtWu9bjCGunnoXBLmnAgpM3ruggztvSVhgjDNBjT",
  "key28": "3QwrfZg2YQp11ZYAxvDrgbs6fDgi53TMdVLbo4r43Jd2Lvr5Ap9t5A1ifrFFMLw4Tmh7ZueJEuQ9nUawVuvDpWHr",
  "key29": "znvdjkfPzCokhKdTQFF9obym4nqgK4Q56N82VJmnpm4ABN4n1WXjnCN9xXDn9CLnjUWJqLwT1v4F46jmLQAgkhe",
  "key30": "2SZ3TT1AVQ7mV5458YWFsDyQ4YK4tWfgeHCT1wpvFGTSBRddRFrbLDqXsUngUW5vqrWwBcwVBQxkmZNhAB8Y7S8G",
  "key31": "3QxVLCzUGT45gbHefRu3eMyzgdYHGpaGTUR9DaG6qyqfg9JEXpcwFT9MFUdDf5YqiLxcnEbz4xeGv1EHzPvMnqiB",
  "key32": "4b2kbnix4yz1Z9aCWtEZbjKNrcKgfunLDMsgi3SoztfB6WpTXVNhxi8X7tgddZkGgroVaU5PEwrAvCqaH5GcFVVY",
  "key33": "3pUbrdUw62HjmBxvgKMNcfQAU3Y4UNS2vcmB96isEFi5R8DY4cpzNMPWPDXL2W6HzpkqH6gvBP68GeNCKhs1D11k",
  "key34": "sSNLH8g81WUazaorEWHhQFB5JnkFb4f2puDka4s9YGuDzfuRiGXoV3XZ2SsuFjinBZBgkia2j7A3ZKiwej4Rugp",
  "key35": "2xTnUKo4LXfqm8YcrUY6kJmasRc4dJHJum9BERQ9CEMWRA8opFWmkyM1TUwSdhH9kjor7J3kw17H5qUsTTLzfLF2",
  "key36": "3VbxXwwjkBreX9NE2Lx15Ya3o2WPWoMthYdrpj4o2GMwwtQWYrUH1A9imiZjnzRjNXiKeBRFV3zKRQkXjFwqT4fF",
  "key37": "3zfBzdMNraxqPAzfsKbKdpvfFSjZdcx4e7ZQXwBb1Vf9ExrbCdPGa5MGZFWDbYzpFacS7rwKGZmU9pPt5NP2SyJm",
  "key38": "2mNn1PEvQcGSiMUr357v1J51tspH4WradCLeqB8ts1X5KYqGpFViE7xdAwkGTvdcU2gbhcYq5kWbsWXjLFXQwULd",
  "key39": "bfU4GqnYu9SRQRFXdaAhFB21y2vu3riAejtonUFwtwuPgRp1Z1Wd5N1AYXmyZGgQFSr3R6DvXaLq5Rv6iE2euzs"
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
