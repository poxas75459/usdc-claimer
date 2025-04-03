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
    "5imapg52GgnQkJbWwfXEAXh4X92TuEK5E8pa61QD7GDS2zLTovi8gRB7P4maDvnfdXy91eHNwKnoJo5Mfs7yL4eu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25JP24KWAYZUPN81fJDgwQsJY46qcEJXJTcR7Zj3xPhfhUWDSEw4pD6nJikiwbTVvVUtc1DmZNGKY691xi2hiZpL",
  "key1": "57hK3rixdK6WWszLfFu3hDv31HoLqf7YavS4Pmip2t2Pz8BJomBQYq51YMqJqMggRZbcfNHT52HRhhBgmxiK9BqH",
  "key2": "5za8LHMkV3NikWHXNPK92VW9Aj2RHo5Qagha5PSEd7udqy1TUGgo5ZdnUYDRwh9St5aVu791dXxkDWhF1KA8MyM6",
  "key3": "4xW4T3HWynWbxwNAq15Eu8wvLAKrsxatezfvef4qr69vp5CRLctfVNE2LBchaFFJdYb4BR34tidkZfDTaXjq9oSQ",
  "key4": "2NWRhL1Nwjh9E3AVxK8PSw23Mqo9gPiqK64YGhVHUMqHiJUHGkyX9H94wVZveBqhc5JjFrSeMUCZRNb3Qic2ex8M",
  "key5": "2cxP9xKNkrEsXmAz1SYpDgSwpP2Ck16GUWcCSoaYSkFGhtrpxp4DhyLVKfPi4GcRmVJHWF78PKU5dDogJNYhipqy",
  "key6": "4Jtk8MehJHoCHh1YePCRRqnSK8DAWRscZbwoPmFQ7d2i9FhYFq8Sf7WWrR4xFHbzBDbZwhqHT3SVoQ3ihXTrDoRE",
  "key7": "2APpWdxpGWnqHJeAwh78kXRDYHGpdkB8FUGGEA4HKoGpgK4XJDuFa11A67spgrMBAbQ6SCR4P1jdA7NBvG1QPB4b",
  "key8": "3PieRjzXeZHd6tc7cjDvQas2FUG2f2rVQL5yBGrZsqnUCe13U1HZMszSuj2MQ3Sbo14Uk9HCs6bA7dVemFEoSDBk",
  "key9": "5FoD4hpGfN9pzLC91Ljg11xiwvB1Nixjc5rNPB6jL6wq4zvwzKeeeJJZHpLSKKiq1niAtYbQuR8ScsDwPx4bri7T",
  "key10": "2GaowWdFB9E6ccPCchFyvPY3QTDAtmEFshtzLncEn6ANpdyMWhmUjdkzahZ2Rd4Xhh9h6hSsc1xhcQm3kFk3Tazq",
  "key11": "3EVtvrU6ZCTTRxbcHZWyXfEPwF1GmjBRd3kPHxdzaPRu6n7DeY5kMMBzx2gPxBu64kH7yjkMSCewTwb4rwVGhuUf",
  "key12": "5ccd5SB9uByZjwHZSTyx8vX6UkBrLu1h6wfXwkLULNBVXBWkByewgRdNtYyU2gSJJ88UQz3DDoYUg826sx5KnTXn",
  "key13": "42fANeF3BDYDAHmRavSWgFEwUzrGk8SZLs4aQct2NsvYbiwaESqHSfdQKV9DDvRfBvnVS6XpVzo2Q9okws3mddWs",
  "key14": "3ZceqUqDXX7MGPR4La2aggT4xpAGgSrAK94TxMhXyFKqippJ641jzRNAmiFAZbGRdQ9tP5VrPGEgQLEqMgEHzmgp",
  "key15": "2HuWXfnz4VT4TUwwdy32mkyx9oiL5r1v8Q1pzSCtGmXKs4PKyj9b4iRkoegUCn1jPKKJL94MbvvWeYAbkHLS7aQf",
  "key16": "5Lb5Ton6ZSLYxj7sFXsGJFgo2BnwmvZYK3Bxo1WC1jRYtPcVZocXeDvJC9amxYgjyE1PAqB5qVmYWNgbK9c629Mh",
  "key17": "5VcmiagpTuCg5CRC9Qvy8DMVoCtopAea78LSXk89t94Zzz33d4AYEPY2nN8uXa7oyiWkiLzNDSn4oPHykAB182ei",
  "key18": "4EMYvPu3s3XwHQsGjF7wWvHtHk8JVkichscsFv8apDY9SPh3wS7h59KPk6PWJEGUPrS6pDw5BUWjzNhJZsXUvofd",
  "key19": "5Hw2bfy9ne1k49D9hvhB7yJ1SqM97dxML9c9SndXeQ1QLmrhv6UyE8GJqNr3kFqyiEf2Dd5JCKsNhFAW9ZiEasjp",
  "key20": "5XfsbgevLgy2GXHVZ9nR6ZUVyYXZwYzwztZuAXCnRhi7Ao4J2GD3FtyLXUxjzZb3e9x7BBCErCjqCA8C4V9RjMog",
  "key21": "4wVAbGQ8q3Jh4jNb7L5qMQBHALWWdHwogwWkv6YujZzw4wtqKfXzWJ47B6cW2E7DFYa9ntudejwKRw9kb9ym2wXD",
  "key22": "57y4Fu1583HLS8rG4p1rQfLLXeQEA3JHqHvsyLjB9FEo9HDqapMD22EJuqKcWFMV2poTKzN3DRKMoGr4fHLpZvvE",
  "key23": "255B7PzTufwxwHQD6ocXy3z7RcqsqmNSVRg2ug3k4URK1z7A7RC8R1J6TjKmTuqjQjmFK9uvEpwNbJahFhVaHy8Z",
  "key24": "NPzz8bv7sP5FW9b291bKuG652FzrkepWBZbgBBYB5JWj3Y6jCcsvwbjXQqvCwDtrMS4BnUZ9sKEjhUsaXNLuBWJ",
  "key25": "4tLh56ZaaVbzZtViwAtrtxforaLdRJ5ci7H6khUwj5hGuVNt19ueSMkg9LtDxL48ddzHrdQQKkQLNxnA4ghhQjpc",
  "key26": "etppFkSA8nrEw7PzTyEfQwD8zyJdShWBwyxaDXfQwTb9M651fepXvWtCW5yCqhdcVogQtaz3PzPipfqGWhdR51g"
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
