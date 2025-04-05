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
    "3Jmp9w1RVtjFRVX1xE8unFPcucWK3Es3EQhn8c6qqdzq3PSp89rgNQ2ReczYZrSWKba2eUUsdKv3MGo8tY27fwfe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WUNZR3YJPGu5eRGHiwcFwLPratcgxnAXWy8n7AscojX1wgZYNA3UMy4kGjCDBVmUNqw99hRKEpGVBM9CYhYL228",
  "key1": "2CEcmk4v97ueR92APidtQArR8oiB7XrEUDNLJSZhd28aSGT2f73Ayua7njd6hRZa4utzY2kQ5tFMc8XZknGFwMLp",
  "key2": "3AkwRyHLuKMi6wpyypSgAAjCUXFoYwFJ4xZH4GgWx54akJABpNSHQc1S2xTa35xsN1Vd87whoucTJLBn488poNhN",
  "key3": "3mXdErKv2eAM8ufDvbVVZ76UdYrdwoqaTYXBJG8EP8oBS8A7jNjxbSvCZndcvYoi3a6DJCiYDfwPs3MKz1Y9feXY",
  "key4": "2p99HFu319jqVdcuzB2PaZinrUK1uvmVYR3MJWU1w8X2oduYBX25wps1EBCfbeJgouZWDEeu6FHxmbSUd6n3hfDG",
  "key5": "5CP7d2vgEL3WqjatXmenfWXP66twAL4QkX4FUXz6dp4VoWF9aw4HHKUyjWXdAk18DHduVq6pgy2F3jz2iDdL1AW2",
  "key6": "nhGXMYZsAXK7DVDTrvr5idpWiZHhuYpNjxTGJAWQdCrC4S1yjG4RhcEnWstaFSHLUoeD63RNpEULgioGLhEeAgt",
  "key7": "4Ddv76GSYsFdcALAqLqDKiTpfMRdfP9j9SMq5SLKZ2H2q5QogC22BkPRyDvdBvEJwQwJqRFVxcDBBX9RtN6vDkvU",
  "key8": "2Teb2C91C5pwmEbVvMmxpwz6VBePUbMQf7gnzJgrgqPYvnZhAuo6gtCgCVk5FYu4aSkjdAtKdbiLhGsoQtpbBqUs",
  "key9": "3PX42AFteSejRGWsTDuGsPtYgDhgZLQxNQXASvCj7FN8A3ds2YruDPtLKvBphFeGUAd4dHEUMc9FWMJvxktyDKg6",
  "key10": "58eq6KWSFkxtbQNjGw4GeEyHTFhiztbTbXK1npB5kNiv8Dp3xQGEET8JTuZ1d7VxDGh5JMfneJotJFncgpxcvcz2",
  "key11": "5pto6rv4VWsQGerxgTsZHwqvAuu22k4j9XtEVwHtR4uT4Yt9mpPrnVp2Rs9kg54GT81CxkCnwsj66d6sUokmgqYm",
  "key12": "4wxGyVnZP5nscR9osoGgmfctsWSDTdNfKcGoXzu8CDscnfJgsTKPeXWcUP44TTq5bGKmKbFmBX343irzji1CH8Z5",
  "key13": "4RK6KQmgvXqX6Gd8KRqwpp4zhNveTdSyqFWteUmrUnv4KkGuV7mCwkwjHGaTfZVAGwvyc3Y6LzopByjiENFXJSyU",
  "key14": "d5c7s9va9uUQk9EoL3DUF48Vz3nuackXujCnwF7Hh834fWW28dQ53Sy8b39eoeBuMj6Uv9BvNwLPtJWo8UDiiEf",
  "key15": "4DEqK63NhTenDyCBPaHVkikdAJnAYHXwfPqGuhFrxcxFAZJSbuuhBvoQEQzGx4j5MDWVE56q3jcyaRAWZTDBzqNj",
  "key16": "21GR3GvDUPNczkhSUrLrPRdSPHqhXugmmykwcgKqJ8ntQjM4s9zJkVLt5AkjjxheWrjpF4J3ramdu98k6qBjBBiD",
  "key17": "3V1hyfpCm1MDYRLjqhiggi3VNZmp2EAzXW1QJbwwza15wkeQLEBRSxHe9N4H4Zo2rSbns2SKxBfuyQ94W1mUFGWQ",
  "key18": "uz4Be2knBNg7AMzw6G537F7crPi6axKgVaphPKw54gNUHhqRbHPfdAxYaS12knQEesGuCdsse8AwZKDTE1ttbXn",
  "key19": "S6rp5Dp2xRh2zhSrXFwkhCCZfePUqHMw2EJyt5z8NwoWchkCaf9S33sXcqyvW2xsMJt1ZHM72owGNuV5QqY9o3X",
  "key20": "4X7E65WzK2mYWAavvcjh8c2z5FpWjzeFeyVAqvgqcbXZokuRX9uuLLt4sjEKh8zG9BrAurdH9HAkhU3zb8w5Jax8",
  "key21": "4si7gXzqBF43X48ZnZRaYAftuyuFqFeAyBiGbefs3Wj4MEd5Wm5SkdTTsyc1JMhZFxThVvMnc44WFRueGQ8vUmd2",
  "key22": "2WrRYafey5CWHxzBgmieBoSvx7gL5c51UCSbEywFqJkkUpPgZpWuPEjZEiYrF2GPfAARGhUdpjjGzFVvnvSASSfW",
  "key23": "63vrSpKMsKTnYcWjaDDbVVXj1dbgfxn9hogZQ52FhqdFUVaHQatsY9bsNWSYudxvRUKd7wXrB9e8uWHZupPVgNDV",
  "key24": "LKd18hxnFVe1WD9SeaqXLn8TcjTs26qc9559cMxDdvsKT2dspHMJL3oXoYxKQGNjg5mfJ3zS4gVipEJpBdorj1o",
  "key25": "2QJA8bz7vMkjCX1gi5NusXFN94BKj6n4d2yzEPtnHju8EQNDYyq1XTzm8H8KnokfxG5P8TQ3FUL9d2P1sxTL7nSJ",
  "key26": "4mHnwDtEzoJLtaD8N5XDLwXxAEWi61LGEVJ8ziiobJc3TpMp76NKVf4TXmQamAM7E1PiB85V6ULm5jFFqGgsuuv1",
  "key27": "63W3vxf3kRX6SLQQSThgc4xdEQ36FkWuJwFLg2YqKcKTgt3cXfYhKEjWKygJikyDqhvZSAGdeqd5aoF92HgevvW5",
  "key28": "5uK7Tr87yDah33VWizAqGKv3oogFDmX8ACg5LeHKGJrWi5C3LRP1BqgjuMdk2ydusSC7psHJ82B4dV4X6vP64Eha",
  "key29": "5HmckMriZpgbATtTAPA5BMF2ENDRHaHVpDAZ8S3smN6wayBUyuEC14Y2cN5PyUXEeZHayr1umtKZJN3KYhDCY8gd",
  "key30": "4qYxqopn6NASimKwWMqQ1ENCVFpHMFJwbQVWwgN7WnA1VGEWWi3FVZ7GBxaGuFjN6cBLfk4yiL1U2zqT4tgTK6C8",
  "key31": "ssQ1nxd6cmwUNEFmRNCAoyFPUX8tnrjHED6GCiYMd8KZhGoBk6FotCE2CM3tmGeYFBJkxnF7njJt6yp1U7PUsrw",
  "key32": "45sCuZQUXLwhqNNoeHbnV16FzDFjF3hDX3S4P3UVnabeDpma344yxbPi383SzRjKfo8ZJeH2djhfv1TAedUV8ghf",
  "key33": "3t3UJ3HAJy2PDthfHJqcYNXtgbD9RCXvGUTGHrMJdpaV3x4MFZ6zvWu44GA9cGf8muVBBjcCVwkZQVXyAB8HfYmv",
  "key34": "4KDYfrqz9WF9iA9Eh9ufraJEPzafPD1LAWq8TyUzHawHrHp2vSurhSDhRvmtbK1n7g6komQVssmMQeBNn9wfYyjf",
  "key35": "2LPuaj2vATRKt8gqCXp1JDvKum4oGiGkSh2LaSuS2RXZ9sSNMiznWQG46rdFGesU2g7wvjbTvjeU1L84YFrcFW1f",
  "key36": "47bAS9wAax3ymqQkbDz5nB2cTgzpnBZ1ptjhHDHRTn9PKQGRni6tfbLirbvPZuqs9EvKaig3fsg44KCctmDZhwNc"
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
