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
    "27uXp7DoEcVSesn3JtZdde6QSquPGpQqLtQa6xrRYiGdsdDedtV6tMmmTjME92nibu9doSmW7saL62eSgkdT6JDA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3C9fnhiX6Z8nqiWS7ctSoKqVaqBAw4wLJ6Aq1e2bie73zEdQfDoWZYNhEnQuuhtypJ43KhXVeF9A8k8tiwHZXUJ4",
  "key1": "3XPSc3JvkP4BjeDLvmsb9YeMLoaiXHzKb6GjeJFaqvLguuVwczkE3RwacMWn8DDiBJrAELvEVcYxcjtNfUv3iGbb",
  "key2": "2mCPQW3stDUohavSD3QLmoaP93QJC1EqyfBceZQJcvBHPfEFY9HTeK8GmY1dko8XkcMG1CT4J3jXirigxx6HfGMC",
  "key3": "4W9m4PFSEjcbSAtWDsY5ifaYZDPVD378cQMMywb7XS3astF1szbUNvGqTRsS9JGhdjmP5pPfREcWUy5FnpWZvpAu",
  "key4": "5SUW2rkM9csBnFCzYuRpcUS4P7r9bsBHHMgJm9VuJE1NRFUvfGXiLFEnvbbhpoz5jidvQKN8E2eYUBwstSJEZgqJ",
  "key5": "4rQmFCXR9UVfG3s7u2upP5v4WGXn6z7B7boetZeWXKGNfPN92YTdNk5QiQe8qumZAHxVe1Qy7f8hSNcubj6Fd27K",
  "key6": "2z2avQ1m9BUuJTzipegaZ8GR6o9VCGAAC3hzMD9pR2qCJZozg56wfF3dvzxSyEFRAgprDVAz6Hh1azRrCdgRJpnk",
  "key7": "2V96qeUUgYA5q1Mf9uEgFreb5L9pd6cxAQg8sdqssT4dweNLB6wfQCJhYHKbyCPfJLFsf8TSTGuWCns3sR4d1jus",
  "key8": "36vsEu3ArqKoEr6uq8qaoRGNR8Cn1WKecztxqjpHbitnEirMdmRv2iRWUVg1rPe5bbr2tj2XdcvVdqzFfhFrp4x2",
  "key9": "2eESPR9rbNBvecE7aZEXLi3PWajkKydGuMQodTcjwFUUviyU6R1eQH9zBz4gXir685LpP2a36RRBbZqfB8LVFdEA",
  "key10": "mfbs69GYTg9YC4hxy8GGeZnUsqkxw2E1afGMBAJMx9qKqXFCsZXDGHxXwCY1UtpEToN3NUt4tE6Q1kcg6g1FYh3",
  "key11": "PJubUwjsRQQdLcGa4L6vDLKjYSsBDzFxCjaFBPPwB8sGvLBVieuuQ4BXYX6FpPgJ7szwBJqr2yjqmSxrsm2s6qV",
  "key12": "4FSB5fjd7CbmqC9fUL78gqdjSaRroLDQghFFjzZnhe8tZJcmrhJ3QX7TzK1q9oEDt6q6Ayajzz7eyKJMHXbwyyt5",
  "key13": "5nrPhzVP4FAM8qeMLF6D4Uc5jebQ5EAdmmtJr51WWJXyE4EWBk6KWTy3kc6EqNsReQs5q45gdVwDkdJA4ZwnFtcb",
  "key14": "VoaE9oqPWXkx9VgFg9zB9TUugX5W9pq6c3wGLpKfVgxFd4qaiyieUMA5V373jk6rNr3n788Nwu919b1QbiH3nqo",
  "key15": "3zqyVKHCQCiXA1GWBQsapTJ7EsUiiHsWg8XjXdmKS9TfX2K8PchModxYx93skCgRD5NpYdjxy2J9Zu8QKhGutE3t",
  "key16": "5SyMAWVfxV1LjS4NGa1egkS3uyCDa4BWADEjdPcETx4AfEH7H91WadKPk1i96LygqweGeQQ3kJH1cAjHR26DdmVZ",
  "key17": "31W7akGY2PpcReT36LN4PQaGPrr51HC6G3qAVsGA3guU7dLwmzJmnM6Jfiv82ZVzMmB5wbxZbRRggbmB94jH8Spc",
  "key18": "2PfHJFakHzmUJ2QnsYMXJ8r9PeRjwTrzzYKqCCwfMJ7Wtj74LAPsauzBhQjbAkkT2ShvasK8p4ikpQn3Rc6n6J3",
  "key19": "3P9S7h2qudkd7RYS6C1SFYrsQMvJgsj9dhrudAMUsvX69gas12iZTSLujoDPERYfYH3vchehAskwVqAgYunKXjR6",
  "key20": "2g1CgLsNRKKvcbSEaHeiXv7k9ZRefaznGxtHrKRXVUGSwR4TDPDeCG51WQECgWNXphtGP3EFX6cfUj1pPRQ5A9Ja",
  "key21": "2HjvHgRxRxgcL1QbzgZZR5d99hVCehpsZRfzcgYUF5SNFGXtfYJbVPtjbeZew39Wvf6HscWpgZHHyshVMipVG6aL",
  "key22": "35qTQrhuQ1HE3CMzKmrkQXZVZjKWBMyH4fTMeSN2YjjioR2pdYSJxT3CPxZZkunfiGNaCUTnvbFLLoLr4xVBRqou",
  "key23": "5Eqj7oCmYj5BDffLYC3zHqBAC6ondcyHFPx3XG1A87Zpg47Hhry41At6wc3zcMLSaW6o7dFetztNLpekUyMPvVzE",
  "key24": "5f9ZHzFQEmY2BwL9nYxo4kYDXhJCwTX43ouYAD8yEEEYVYnDC9cv4Fhq4DqX9omUgAirYeaZpmECjs1oQcT4ozvP",
  "key25": "21mwjbXg1u21r78Epoif7XpS1M9NV8iuqujMjdA9qGK5T6tyJ23KdGbNAqeYFjwhuqo4axvZXPRRFyhAoVYKxybm",
  "key26": "5dQ966cTtkQ9tPpcsSVnautTpsR3CsGViM9kuqmhRuHUuztoqyLQDZkK5pYqruE2BBnBBegS291kt8rtibRmbnED",
  "key27": "65M1EP32RGHNDEtsUHgxwUHiBzYxL12Pi1Yf52gRjhV8JPdEjkJxrJZWquF2VVoNmEK7qCeDyDcVFzYzsWsbM56i",
  "key28": "4kuSciF2TKhfNWjN5p5XarxhTHDQ2EhnHSTc6dMJWd7WfkT5bqjALJD9rujBKbb857n6miVnh8RweHTHTrerXFjz",
  "key29": "35vFanaLHwT1uzgGpPvexQZPeV58MPc12RZL6jKxeWnesUGvaq7CM3LgrWvEV5gAqY8n99ELPXAurphdpNV41jai",
  "key30": "2JxYGJjQUskNGrA8C8iRhFY38WYLYYKdDJ4bgETQc3ehPLPHHJ4J3AJDTj7dXL1EVdwfcu4nMuK5qNSchQheSdt6",
  "key31": "4nZ8XkWjFvv4ZKWscbFfyY8sQpDG9TYd6nE4i73xbKnvSBkZX7TbYu5Y4SybSLeFAMvkLDKbawzdn85h43PpdBH",
  "key32": "5PkhNXQ223eJ2wYXGW3jKUvMEBYRkU6LpKeSKXEfcqFCSKpBxrMPJVefWB9vCceRLxrP3SZRDBH6LfMgbR6UKjLV",
  "key33": "42Mr5oHNCDjyuRntJDLa4ciJDy4iqDaohudjX5LH1zU4DXnF3BLWhYvXoj7HJptRYCF49NqWFJnsvpLJMHLHkxBf",
  "key34": "3kjh9HpUFqMgJ58rcifGcfUN7v4uzwdTfm4RXFCSAXDHoa9sEx9FqHJv57C5k71qxy2N4HzbDNMgbAaD7iCecZST",
  "key35": "57uhrdKNmBjPdZxyXAAyxFzYaopqzS3VbXQvUzbVDmirEunPt9TurvpovYJcft1n1SZ6VzCbeQgJyphshFerocjW",
  "key36": "WEjwPdD1p9KKXD3TYqQeciRBL4u5HDSsL4m1wj6TpjXfdKMYXzQV9oMsGfHRqyQNEjHXo1Wz4YSLBmXe51KxYwn",
  "key37": "moV2PT9u2ifCAMaBpu5ZPWFbuCM2p2cuTp6URQgfSbaU9m56g7q283Bh5kDRXzuMufSrtzFC1M8mTcR1cpCqE8R",
  "key38": "4v2WKr1PaJCKKwWUgLvnDGbmaySRSiz9kN3enLzFd9jqe3WseNBhbi1jmofGp8MCf7HoPujg9tLMTTYt51dXwkEn",
  "key39": "UUsBBzAWFp68kc4ykZjJgcNC1PZ5GQMzGzA3evmgGkbKL6LfvzsgDs4xV3AcjJK6DAAgJrHpUWqtkLpFZv2wcM1",
  "key40": "8iT45HNLGYFXN92cQY8VmNWDrm5o8VZHdHSgzRCF75hQxtYsvGNDd3aFsDFV3j8QMErqvbDMVMyVU2Yyfe2Tkx5",
  "key41": "4DrGnzs7E5iJtE161XRvv33DAGz55yuELZViVQYppSj8DBR6PQ4couKNZujWCZ9qy3v1ry9k2LLdVDWsZfWqWiyg",
  "key42": "58z8E2Xet2Ax34SCGPMokxvn5fyJTfKXHT2vMRqo5CbZ88BgUnbTVoMcYJA9Qr17XMFpbEV1qqWF9JYuyJBefUhW",
  "key43": "447EMFZH2Lkud3c1Y5psxjdSbpA8Noy77izADfoMCLvC28Lyy38JJXWgRPb4HmzdntvL1nPWuMNDfWCPbRhJE82R",
  "key44": "bEmCb1a6JdeW23ZUeEmEGq4iD14oWWP1EA3Wcr2YZB6LU7HQtLDekeZNFvyvJv34spy3bJRMXHUYEx7KagaeaE3",
  "key45": "3JWXz5ZN9opK4KzVNmV2evXgoeWh1fkstjitxrPhXZREgsumThvBSShyAcbVjdbsFzDoh9r6y2S4VBkWaVV6ME1A"
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
