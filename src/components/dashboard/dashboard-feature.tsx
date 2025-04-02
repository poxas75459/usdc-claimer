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
    "YNeN11ygwF84qZVBmmYeVAZtdUqzJZVEQaW58ewZJxBdfpCVQHjdLjJrpR5RvRfCuBsQV8LYnesnYjVSG7AtyJH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rajRdsiHi2e4LeDsNwiChddVq635d85frNyRpZEycBKRT9JheMYXmSka73ARYqaaTiGoAVcEKZa8yi8Ag39WYsy",
  "key1": "3ngZP2SeqyYN2UZy4Px2iu99ef5nF1x6eqrHGC4ek3EGHAHMNchYpSwdrCpXFUAByB2VbreJLUkwStgrGT6PoYYv",
  "key2": "5ZfRcByryQSBXRLuxfrhMNKEqiiAEbWxYozmaTP9JMmjHXG6P2z3eGjq5Mwnk4RFp6dx3ziQPjQbYkzqr9mVmTaN",
  "key3": "eZhVRa7nyCehX1frFKneVAK4zyEiZFzFtV5eWmceC1Lj9BVpaGWXQ3vD81ZorXk4us3CkLQgoi5NmWyWcCYMGr1",
  "key4": "2FnoyaHR8PJW3RePz4JW7x1tNkftrsxQDoEPoDNBD8PQQud4FkSugpKsX8KSZFoscuPnJdh48cfC3MYTc6vbmXZ5",
  "key5": "CAf34WFJJU4ZNv22fLJej8MJzvS4aJY3TqTMGxYMgVxpGVjxy2cj9fV63oLH4j25SLksWQ6CvaS5Ae4HfEubd8U",
  "key6": "5Sv2V4RNVbREuMJz7NV4oTgsNEwvMck79KgTd2ieJU55QEqRqQmm6kUMFozebmWKgtHKUxsMKzWkDuHay5RBu3Ax",
  "key7": "5aARQXr8EsZN5AD4EJbvAvBHgFxnmwCgYgmWTH2u2eCp6vwbP4rA4ccL4TcnfeNUCyPCaY5ETaXjUSuchrDFbKET",
  "key8": "2xeuKATC5A2Sjun8rnSjMbmu5rJJQPLhHz27PqQvxCt3NyxjoHpPiQohSjuyrgiVBfmTF1a1R8rFUoVBNHkqkVaR",
  "key9": "5XdcHZo7htTo3a6vd4G4HsZSXdWZsmmmVFvLVNxKKyR7kbzy7SM4JcpYMNzjfvagGwzkHmce33NMsfNj4cZB6vSB",
  "key10": "59MhJ8ecDDVh9ekPE9nibX4i4mStdt8AR9Kb8htoRkLUoN1YSUJjQDUQFKaoE395kb5NVmD7SyWrQUz9WUeTcjoc",
  "key11": "42EiphYeByBVoqjWqhDJ7b8ck4zqp7mVUZwZMa7nduGoc1bC2tLQvYaf9bDer5WA6q7YL6koKuaW4YgiGX4KUjay",
  "key12": "nUHBVsQihtRteTuW7v4wP3YBGmE4zn2V57ykaqbcp9pvGpBeejrSDjwAWJefqNfAVLRmtfYq6CraBFxSgQwCXSF",
  "key13": "u9aqhrb1qkyKqXv8SiMf9Nr9z5NH7Ujs79QFpjRjyCwic5uSVzXHWLwdTfmAtqFkoqZc8WcacY4ZcGZwGymT2Qm",
  "key14": "UdTibr76j7PHgqitBPesbgowqauHTQ4ANDtWh7QHVrk3iT2TFujfxm1iktE77UcmRyZbEHJdnoMqHdBDYZMXN9E",
  "key15": "ySpHH6iWD9xdRUQp6zUWNDkL8KPQmxmfDnTpKZYCjvg72Awj8YzCXzm8RigTpTFjsWraJ6Z15j9TFhbhXJKvdQA",
  "key16": "4LTYMwV6BwWb6zFePN1RfhFm6EA5afwzj8S1SikFUhi4jwumJWMcCE6NTfqW2bMyNkME2JsPAKH1GM4jZH5tewq8",
  "key17": "3Z6gDVhJkQ1z5mj8G4pCaqPpXg287xF8kk8LoggJ4Ld4gSNZC1aHz9ihYTCjp4TcQD7v88g7PzzDLQESqjhnxKVA",
  "key18": "5EAmXqpwJeQUyRdci95ZAsqjYu6oBjngRm9FeE2csasJYENWVfwrqzz8oXo5MHwfKdyXtp1VbikNwj2phTUUG31u",
  "key19": "3pbvkHXAB9Rjmo7WGYerauHB7LGGtf5iycvseZfwd7mMHmLuWoEY8y8hzZaE4Rr3tjYRHp21LeFCF8mTxVmM8np9",
  "key20": "3K5Enivi9YptqZbE1Lgwf1NwdtNs8Ptg4DqroSnxtGedpCK5c8v7MnfgRdRjFspde79DnUbBdZWZKDYs6rFsdmau",
  "key21": "5ov9HBzRvb3fhBDahD9DAwjwdNJSSnRFbHwr4WzdBvRG74aDfGb53SN2JrYevcb4bJFu5tKiuGTdis5zBjXBMKNQ",
  "key22": "5Gm9hTGj4VxB6V82b1SDDZQcRodxhBDnuorxhcCBnGkzY3Q6ejcNcwhUfarp7n4SFdGqUWLJYHdDwPYmVY21qHA3",
  "key23": "5LKGfupi1nHBmfeuDZCjniUiQApyU4dM3XhzEa7hJMwaGv6ihXo8XaAQutGR1QmhHas7EQyZynemURJRZ6Ki7NqR",
  "key24": "26xJvLGPW7c8g1JLQEV66AnLqvJXrCVWEAhBw1sZWntPrBLw18DDahvSCDvCzfcGRdm3zzwhDr97s31QgEm95dde",
  "key25": "fTwngYujj5cQbAKHCNRuuNdyoM6RRutry37SEVeCSLgwi56fDVU146xwWVv2hdToBbHpkDVEfp7HWfryssufMpW",
  "key26": "2d9z5obCByndFNQxxhfsK1u51YgzFcLBxnnKiHCFLPMmMHdTfEUGQMVZ3AA1xUTesh9Td2jmkBf5GgEH3ALqiSkL",
  "key27": "35f6fMUs9zqjJAwjfomoQ8wybwF1NNp4zAiz8jATAm3bQia2ZCWD9kkWBPsx2VjtbR3ojiPkie8i67DMLYYpewcw",
  "key28": "3hRxRNefpokiFkG9JUn6cF9mzFPwusXEzaNJ2TXDiukR9dg2eTLjtoW6Mqsss3n47qMEtHPKxzvPMvwzPJdzXapD",
  "key29": "3tdksgGLqMPEDN3r72b8NHS9EjnECRoetAoUMyHZpmg1PUDHH6xcnjMXx1KF58vv3S6EUq2tG8ACUwMYBTiNLkSF",
  "key30": "3fQPgaUf7CojceAzKBfzeXHrXxdLjxa2mm2YM5qiDU2EyHGS4mqgwpcj6a5eSDzhFR3NqQLr9Z9GqvXwRS9gh4Ab",
  "key31": "2ZBvUV1n9M6TWoLERhuWboM4tVtfoAJNpmgjaJiPkRA49bQvtjmLjkGeJZz4Rk4zDEC2kNEaW6eASKvRRS1Skb2C",
  "key32": "U83jyrgW9U6DzdvrHZ4a3bPziiQG8wCrXx7Fq4p3QYYrHQwwbSzPY7o3iC8EjLxrHbRko951uHESEH7g1WmLSPt",
  "key33": "2rLu3NDuN3mQJBshme5Tnb6XEVdJm8X3GZqtkWFpK6koC1KYTNy1REgxJFz3Hu47ktURYYDbF52LHFJFZsGZi2Yj",
  "key34": "3DTaiDWZf6auAFcR8A95seGAxL4EAeRe2TYCfyY49YtKeT3FihCNKkoCzgX826JyFtbQB63TwSHRRSxgE9mo6nVK",
  "key35": "4BPNGrAbWAXiZBCyaKSpDQLrhguWwrnqXT4uhvCP4H5sWZXZ6YnZz1LYZrT6piHdxQ1YL1QNnSn35HqcgTxRcmNi",
  "key36": "21ZgMbN9TvHryU5D8nSakFowoHb1JnC2iJy2B3gf2rKG7RmG76RuHsAVQBr9iqY3Lj4say1ib1pwpDZ6hruZn8nX",
  "key37": "4GbrnkHAJKGGQoYMjZcfo5k9qMnp4SYTkrMuJtQSVsKG11B8yRjgGTCLcvDoMvSrsYhSPz2dVnnHc92otu9Wg2oB",
  "key38": "2r9UtraTGyNcAZPoNKmnsw2fvRvKKCW6pNWkWuFsrREyWeFkQF4CQyocPzsTeRMdiUZWXAqGinbo3riTdyEX6bKb"
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
