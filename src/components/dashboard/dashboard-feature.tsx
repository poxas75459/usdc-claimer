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
    "2sZKLz978pdcZvih8FBeSxdafhanBVG8SKDKeewwcqs8vyFnApTZACArRmaXmKMscMQyPZR7Ck7utYP87TFTngbv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32BgCoHW6GChGekwgAJyjo3H4RPdV8JRhiiTfNh4SYRxRdPzJkhwEs5ac3Zi72hNd39q4d7N6U8EqhCTdNXLyWpR",
  "key1": "2YS6gwbfZHj7V7jA19nmdMJZJ1XvHAuwyVPxCptVps5ZeiPAmdkEmYzxUgQRMXM5RMe1SEBZA7xRoddBVq1w5Chr",
  "key2": "5NXupTRwC54ZQwC5uBdBNeUXv5VS8EmRSGHmf1sj5oFWPwkc7yaUsL1NvnKuxpc4hVaHEKVReXv532Sxx3m6X5SW",
  "key3": "221oq7KEZdevdnBSQLrK4DZ7hdnVty4YBjTqf6QDqiKdt2ffJDiJexVyriMeqqpZnkPVkSP5vy2asWutPVMUMY2i",
  "key4": "3rD8sJDBevuBwm6zkdduoshRmxBxNo5euLCq1b9qqijkARHNfYy3dey9gRDHvcWphmbTcC3Tu7RSAk1t6VKZmRnH",
  "key5": "xgPHCe5PxD9Utv8BmgNMqZmj7pJBZSHb5G7pAx2D2pf4JVhNdteXnfzAJQqfUEue1VBa2EAjstvjYLJfScgfZe3",
  "key6": "mvaPDkfzzhsyXRGfUYQgnXZJyW2hBzprxHDmQoiZuARX2Xgo3iWdAJxbnPoFiSW4ANxpM2qmwEkZbnVsfJFtN88",
  "key7": "3AGjVbxjS5Tx7m9weMo765LN2dcfABxc3CoyjYBhRpzn71mksjV7JnRNpfgmULfULZQXKeJXeerJHLDNqKBEk6qj",
  "key8": "3YCJXxDuY1Qsq9WaGaJcvyLUbgoZtxrogwDWHmnhzPPsauQfuNo1MDN5wS776AqRDUHMrfnioRpemwU4p8u4DKBY",
  "key9": "4dqNKZvFnvhtRWuqGKmc4yLsWwTwyh4ZrfQvHR9FuZ9ZkbRri9MTFBGDSAL4ygbDN5zseLtAshk4gjeyahQoTPu2",
  "key10": "5qwgSvHYqcuocJG9kCxM3NqaTcRMTp4J7wi5ZY3v69BncSQS853JRhV8dZQ8peQYaHiTZVx15gP4AZZD7Rc6ct47",
  "key11": "WrSTr7Std4RRHZ1N7AJ6jCMnFpNfYmRe5VQScZsA7xAYyGRUeHmNccTrGAbGTQ3gwUV31PLCrDX6YkAbAD7AFFE",
  "key12": "5o2kdMhcng2k1Aii8cpAGXJ5UVe7HvxhSW1QoEXWVKHSPVCQVh6art8KXUdWN79hfHErGuJBkQqCv7sCD6ESdfDa",
  "key13": "4eVwuVdfkJqVXv3CziFtJLPPQSMmuPb5NMZUxduX68jPK8Cxxn1ARX2M8kvoDJUTPLH4JEdUNihbmvmDkxR6db1v",
  "key14": "ScfmwVLn9QXEy1cTXLbJBWr5r6AKTVuJSntq9zjAuT5n3nPSpX3fcm8SDESYofJaZYu6xkaZ8D4jczoJwinoPbz",
  "key15": "23A1TiiWv1YZbaxqqeH54FWACRmoURdnwt8fCLP6m8FEZuPwU9YA8g3evaMnVAVFUfbxBea34ZaG4q5cDjbgtLzW",
  "key16": "3hYbw73tnVM6CTf8nMVRCXFRTN7fhgAw2VjAnEDxLdSMjtza7BajyR8aAFwTHnEcvE8YGUjBYcBRpbeAmTjvL5HY",
  "key17": "4hwfYLjmb7HRuy5E42TGhMrpBFxG2eL7HoN3WoGp5iPBZbjFUskg2siJJMPKRqGA65T1freZPY7B9khG1M73TKC8",
  "key18": "4wzGzLfCc5A7NJEiicvSGzJesKz8dLdVQBQ54wPTQFi7cwA5aGoKKwGuP8jtv9WLLgv2UjX8CMADCFb8KSR7zEkE",
  "key19": "AWVb23R1em34kBcSCNpNLhN27NHyRTjiypsaK9tdyUJo8MH3HiDBPBvFwJGdnNim4USW9JFTmGQaRhuGzQ8Sg5Z",
  "key20": "4H3JnMnDtV1gTSdF52rRAE3TWo6PjXuEhQDweuyU5PkGzzEcrKQWFmpQQZboxnpaXVCnE37KMq8ej7pYKRbUQyqk",
  "key21": "3Y2ysYrYsFBSRg8fRrAJ674rSRe424wCR66ZpNXSgTkmAgtUvAtT9FcfesF2biBD1ADrs42UsLodhp2i9YNHkQMj",
  "key22": "4nSXDZhXfVrhDpaPVB7XTbM6jz8xN8f8NS75oTj6zP9kakTbAPZp551j9EKbj3c9F3EREx1fvZGELweZuhA43CvV",
  "key23": "2dVPHiFgZzkSCaf2RK7CxPoj6gMqqdS1PsWpYiiipW6Xnm2UKwDaHhiNHLdEm9bHRQKXB8tX93FQJ1Lc8BM1qWCb",
  "key24": "22tV92ALACnairme8Y7gTXWzu1FZkshiBxWqZYmX815iRNQ8tvsE8iQ5f4kPJGzJFmQsPa62XvccHxU4QVS61yWa",
  "key25": "Jb8v2dscjHG79oAh2JBVagpHkz6JvAPvydYDr1FzWDkVVhxdYSyHp1KFHXpYWsW1ENCVQK7hurf58FvspQZ2qn1",
  "key26": "2Ze7YNx6abgZ25dCpXsaN3JJJt2g2ZDiWunQ8Qzo1NZaZ8X6ewD9a6RzSt84Ttv8KBEUfwboRW6as9qCmtZ7kbVn",
  "key27": "4xsr9aigMehtQ1iTQnBEs8LALVsQNJxX93Nb4gaoo7sunzqRMnf4JEAK4tS4YnmvHPBTfmPZDUBC2oK65eBXze2b",
  "key28": "3MCtFbDN8muqaS6jC47GqoBFYtabNq3eNTkNprhv1WFm2GGHQNNyyHTX3xXjYJ12RkuVs169BQ7AMpUn8MQvpysQ",
  "key29": "3bddAFE51mAcREnhkqcE27FqnpmszipkPJdTX7DEceaWQewoeukSzYQFmQyvAMse5GdmVdJcMzKDq6zohpPKg8oZ",
  "key30": "4soRLTKCRfJKDStwSPbiqHHuNLSBJrYXn2yXJwhPNNL474JqXKwKx6kQ5y1xfjPqB9TqLTd7a4L5GASiytwcsof4",
  "key31": "3EMeftRPuQ5HQPCte2Eid75WY5eM9yfseArrswUBzRGgnYg5d34BjtPa9DFWeEfwgAsBsBTcgZfLeZqLdqFsvvV",
  "key32": "3jeVvxAzVN9xHmYo3KVov7Nv5onZANF62ztHCwP1aGsfdRtE189Gk6o6PtJbh9CK2bUwGCFRt1USa33UGqQLoitA",
  "key33": "4AKbYDHdMqDKvyfhz8w7s1tLCB4JCjugLhB7B4gD1Wyfb4eWhzZSHcr719TAh3GRB4evihMwbqqafpM8Kz3qox4X",
  "key34": "5cVgAh4pgV6fqkFUDB8at3pVo8VLRULfGiry8RoYNZrWkgiW6XDbJW6sLrozvEX1q1jSv8JkgRehdaJfQbUGvHNs",
  "key35": "4ErGQqXZxpxgxgMuzEJjJBp1YLNSsyCEXiKGRGD8D83TjHNHbWQ1M9rMEpowcwpDn8fAC4PEeTv5tchG7r5PzCKT",
  "key36": "4hRhddeZNSAkH7A3fXsVyUg9VtxiCThm63mjvqt8dnQxfUgCwW9QABm2r2F6jec2b3mFG62rCxLn5U32194PZpuc",
  "key37": "YELZVcNuZ3S8FRN3k4wcBw56o1yPr3bUhejNP2abBtxDZ2wmZxVM1jfx1BhGh5CTKR1wq2JEebjxTJ6PWQTZuw8",
  "key38": "5n4EzGmqYiFzRwcc5bXgyyc6iFqxUqEnpbX8xrvKe7JJ6sRgt62HiBFy2ZvXCqSKdTA4M45zP9z3TvcovQGak19Z",
  "key39": "4rrQhRL3RaAzgusitqTpHVQHTR3Xpx237sxk3MGpGNRyz9firpuuB3yw89gnm21weU9K87UcbG7TaUSLPcLvBqEg",
  "key40": "4WHazHpnKHh8tt4Spsp9eyhBc8YPqSGfUzNVnRcdZ6QqSDntgA2Qky5u9kbVsAuKVA2yCoEeM33ZbSP2mwuKwKkP",
  "key41": "YY6fnLKZPuNhhoSJqSy3vQGXNbZe2kQXKxBscqQLvDwo4WqbdDz99B9MMZRx7KzSZei9KgN6aAa5kZtiBKU3CEJ",
  "key42": "5kxAqfqKcskcxyxVGq7idJzv6tycUbAjKTnbSw5Texy9NmqHWVQNxZViqTtJ3rA9XMjYiU82hPXwzc5m7UVdFcy2",
  "key43": "39bRMegz1NufJQj1dsDymH1a8gLDxAqi1Ja243XSqEx1AqGrRNaGN91BDVfsNUm7uouQCGFHsXCrHZDDpnXFd6dK",
  "key44": "3XNPApehNGgJoYX8dec8mVwPpuVvL7Pr7So6N2UK3t44jF151nCFETJWctJFdRo6ckHXv1DpNGXx1ESax1k91P4T",
  "key45": "5aVtYNAuwN1wezjJrkJjLTD3BYMx7BdwuF5L9dkC2fYQyuFRXsmTqGduBrYD3dpBPFdjrewWAidzYRpFx71GSHcR",
  "key46": "ooB3ALeogSJEQdHqNkdCxfeT6Q5eSYw1Buh73p2HTPE1JdVwohZGvPmNHbjsnHCdiCnRCnKSBusBSaLUEf5BVN6",
  "key47": "3gabEpWpPdUJDUG4DVxrd2pH9vAa2mbbDFH1AX7UECtowsw6F6a57GoEp8983B4RKde3cMsYXDd1ZnF9uwhTaDu3",
  "key48": "5UHCvJPKQGQsMqafphz3QM5LrBCnLj4WYpWnb3WpBNVjTiBuaTmHViDtXmn4VnEJkV6nSjM25HXGef6uaW22udXs"
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
