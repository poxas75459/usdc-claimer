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
    "4h94BWuqNvnDWHRUFupZktTySszbN6aboqUcBhBTgABmLXEG5RbeUdP2RFCxSxd6JQ3Zph5EhdfJQLZzHMhZ7emV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ayCUpp8fM7utvJZS8EMaWscZoqZiV96KK6pBod8SdFeEkh38sD2gmbDZ8kH4K5hkGcH5xgD3wa2ZkqMfGd1BGts",
  "key1": "3jiZbqTBs5Zpf76z1P6kv48AHuYvR9TiajHGsrAfHWZ5dP3wqpgi2nxMKBvBwwkYSUm2jwMgUkyLu7EwM1rFLoe1",
  "key2": "Af3QFkdLWYDDSQz1gWY9WVTVHQp3trxWCJ67nc1HDWu4nrNG4sBmknLZpvyLhBCvuusU3XW8pRsMieUaKjhZ93e",
  "key3": "26uWF6pAgi7TCV8LZYzQ6ABSEqcv25iayBihJuhacBGQLd9vCnZUZWQsCuxaR9hTLVvALUqmpN1ndzv1LGLHmbZP",
  "key4": "4MYsQ3eXa3dNygpQyoxhgVa1TjfNDkEZthf9XTUt8EzpqLDC7ig2dqruCfc8u8jRfADMJcV7J2xtQ6vJFr6ww24o",
  "key5": "wD8z2Lco6imtwginvCQ3o56yAEaFistPQzgP9Epne1nrDwfHFtuR6dUe1eY5Ht2vAs1ZTxr9LcRpyYbD4oq6c6W",
  "key6": "3VmLieJMMq22GCB5Ck4CZV87X8PnFAYTpMN6ewyWrwCHU2hyPyQ4GWQ8cDQm4ggKeiDdeC4q7eENcztXx328VCa5",
  "key7": "2va8vLDHotcBQke1C2XzHmknSi2571Th89Zi5kXTmyUoDRuSTCTqM3V8MthyDZ1LjRXUWRv25w5xPDF7fT2895TL",
  "key8": "2YxVaSkgcXNfo2Q5vyM8TMMYo3EzMwX2XAgE3dWzTQd4vfMmzE6P9jPHh64nyKfSADn7FDZp4KedCPv9tSHvZH9Q",
  "key9": "3sxdHntCig4QUmKj85LSVjE5wJ1WEpWWKEVuFjcCbG6effES4dyxywaSHN1thEaNjXPPzpnfxRnXMvCvEqKdbc7f",
  "key10": "2zQJRvJ2kYT8f3doFEprD1XJcyvSY5yV6v8eTsSshSnXJEM6nSk6ytSJ3Do9MCmkGs5HKYNhP6NpiC47wnprt4e2",
  "key11": "py9yXF8KorDgJWyxBgbwcTdGx6CJgqUaVSciQxS19PWgKQBX28khZLLo3W8Nwxsvy2suyL12UKmfZHD3H2XNSSt",
  "key12": "5toD2WcDa6J7s4bfrACz5c4VuCD8X8KCL89XkM1KAcozptkDpYpKm22KRLfAd6CzGUgkHrkR1dRLfnZkYf2B52Mp",
  "key13": "59sL18trzdAsUN6CECisgBv6RFgHasdZwwmGpcc7aCq4m8AvDWzQEUSAj3JFH7LNwtabYrCK6NP7fbSxQcntmyZX",
  "key14": "2Ph13fip9SeyccSnmYqHj7JXWU8TgzXGf7ReP3ZpYwPq6NrUbxakiHGe3Qsrh8biyimXpRtREHtQZf2KuPp2GT2n",
  "key15": "32VQDkJBZfUiNdDeDv1wKpKzmiRPhMw9EFe8WuigemTXx3dwhZkbhDkj5exiQHNyrjHaf3CGHYJ7MxwnxJSBn7V2",
  "key16": "5Ksocogtdc7SCMvJVfe7n5GcfBRrzJS5mutAiGbyeMeRnNpggXzoNmmhVk3tEF2akfAhETW42EMsYWEtcQd6G3u3",
  "key17": "5G5NZriF89zfq4L5yueNc6WwiyfmzedSUUnYHGyaVpF5kcLWCeUBQBRZyYzrKY1RGBqrcoHVSZPp2NEiW73pJFWp",
  "key18": "3njQuu9bg7KkWfacm1TTwaqPTC84yeMPgBM59Ksmuo1krqe3f6VwU4Bo7wyvJ9SyQBzqYDTz4QyLZHpuFkCEWXEe",
  "key19": "5R5q4awinqvv5rgMipGx1eMgYY34ZozTSCv9DNHzZ7QzrGxwM1A7nejtgmDq9EX16PEhcbKB3kLTcyCmJ3BqftHp",
  "key20": "4ydn9mjadspSb14Cno42cR2zUJPEDMW8dfqKVPVbcHCS4EbLq285wKiGkBzuUzyMaSKXZsXo7kesUuZD61tU1Qw8",
  "key21": "5duFbwYzypxSBsEZ8cbMBUgkKz4xowByeomyY45VoMHtBwr429DwojeLjeqj27kGXeNCgxhRZAGhVPVv62c2WyWo",
  "key22": "2VFRKPjDWysnDdu719SvPovNiFvHJVau29TyiEGeahkvNcNC4wkQvu2dsUb55mxiG6uscj2ecbrSs39HYUZ8KJts",
  "key23": "3JD1GzUL58NWLbX7P9kDmkN7RVEgHJDtzX623XNGFimU33QYvUdWFGa24BmhRTioszqD48XBgUNfQJr4eW3aneeb",
  "key24": "XuUqEHUcXeJwaN93NyN28dzaAj7TxLrmJXmKkQzPMEQSEed7sJw7bnCbaYnQ381BScgX7A9oUjrykPavH76CSpm",
  "key25": "3oGrgoFmRnPGyapYj8WjhKXgwEYQn3PG6ztjuZrr672MQwbTuL6KsJ7MKpYECnUBxyKxHq5Lkh77cH57MtJBdYZd",
  "key26": "4KHy73MiKJMUhGPxV7C7ChKebuAFY7GC3Jo7noYWbWEpcNHbZYCzKeQxFrcnnkety5GymwCa7oCGyJt1ngZ19dmZ",
  "key27": "MVJduvAV6Uoo7mXqgcGg5RAiE3ZgTgCYRZxVVyugwNgxPGnXK9jNYAZZD4JSFuCL8L2Fw5wrDyXS7jDNpFidmsg",
  "key28": "44rsMSeYbkRU6nSdVed7aUafhWvQMFygruGBYS4s5xwmW7nnwgSsca7GCZnT5CykJuKLcjaJKxfkwooS9FZjmiyk",
  "key29": "2rSvSW1CfRj3FCbFzRdv9mrbGXMzEESdsRV9XeevhwzmFaX4csLqxeYHkjwNERPWBg1sVdsNYZtq7ja4dY4i4YK6",
  "key30": "4j9ePmAqoeFf685ksMNnPKfz1o5c3cf8ScovC9JjnC7JbBmcBa2MuDDrGzSoeNQW3ojenLWZf7WykZ5S9ntDgKNL",
  "key31": "2o2DpPkM4bzdobDZKKRQyNvH6j6e9tf3Jafa9wMRuxoFXYjT7EQDj5nAktDoNV2F3PMBjVsoJ2gX1ZtT8cPZtTcQ",
  "key32": "4Mqozms2MH9ibY1DDTVjTcCmFspyd2vCLYo6zXEPwzsqcWTTxJiigdbkQSyXzUSRAeyFrZZtbf23yJLNX1HGdms6"
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
