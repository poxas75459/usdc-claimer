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
    "4KRJu1Ekg1XiK8Y1oK4FygofrnXCXzedcHFAcVymR8ZxRY6MV6eaw3SPnRXnvHUypt5weDbBbQdWSCYNJNB7nFky"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cuy4DwHhyYC4CHvgedVgrMXzij2U5wb6aKc33yEJKojQHWnMuaWBHLNydpbFE3SWagtf4kz7yuAPrhdfxXT3RpS",
  "key1": "3YhYKkeeKcWbphBU7xAcddxgpJeCp3RosRgKnPrjbU7kvmPmnGXe4HrTXenqbKkSZYsBxDy2WFSotHJXQ5cZu3my",
  "key2": "5SUVL2toeq2ShEEHrCodWysUKtVay1tJjGArJYF3XQ7HGEcNPYgA1oH4S9jFwpBVJv8hrD9JDMYxp74EHhSDSY3Z",
  "key3": "4zzUojvcPi3xR8RvhhvTRGbwXa1AnMTbMrzsNKgQW8fSPkyFvu9w359YEsgVuhyjPoBbcaJwFTJAa8QqpRYNSuMd",
  "key4": "3DJaNJaujV1zSQCyTfCENGVimqczSD47jd725m6dP9Xu1txRCak1mKXA3fZtMw99BvVgN266mWfVDVahAaDhFcaj",
  "key5": "4n6o8FaZr7mqkncUcfxCP2v1FxW66H9H9QsqVqvTgbY34Ea6UYLcZs9jQbXtb7c6B4uM3YQTFj6kCyaiRzJ8VQ5S",
  "key6": "i5hw7w4iJxY77PEBnB4onvoHMRMgVZGEDjzvuHpLRjzbV7ZKYM8PhwmqE7M2gtWJxhV67WGWBTHiNL7VsEfvMxS",
  "key7": "3Czrx4SfJy7VLXNAqAiX6VJhcuYXv978zKmcSCy9e3dnuASbviMddqmHv4tswxcbt3zjVxSsq4ht4pUcx28ESL7E",
  "key8": "4UvUGFV69UN55Z8Jn6QhkXANMeZLAd4CPKDVXJ9MMKbhUwmpTDthUXjdfkNtmMA4hGYHqepsP7x2uR2mjikoUQ7a",
  "key9": "24FDnJtA5spc8LStKgcR9ywVokj72cxTE8u7iathSzkd7W6tJiMKCeBCb7kLZi4bawnyR8JRKuvQ3M1w1jGDqRfC",
  "key10": "bzQiExEP57dMiPLTA44G7hyGBysMRZ749Beyu55Ec6o9VW8SNWwnKYwq5VgYNqWFXMq8mPPSW8fRB6rtobuNXvm",
  "key11": "5kpZxJnpkrzThgskL3CJE3PsL9F7CKeP9Y4sSzAkEbwChRQgXzBG4fbjdCgTXMwTDSQD4QroANdDLXKFoFEiTgAS",
  "key12": "3CG7HoZMiEsBzQBPYoq24TgDZNSPWaR7E1Zxa1k6JHdEbQRRsjmjYhG5Q2qE7gQ3mwiRawQrUKpiCdVhncu4hG7X",
  "key13": "5MTCPUwwcivNjwMAnA43zJD4GrXPUKqLgCDCbEVDRhaGosjF5L4eyLWQHPXHbcuUWmJYgB3S7LSe3DUjHomQmHtL",
  "key14": "5RZiB7egJ4vfyGEY3v4QUuDDtgJX2bvqYGENUgSQ2LW7RTfu33jDYdvRpa8Jp5xKqsjGXjbBhAfM2NVxcdJEhB8n",
  "key15": "5H71TezgRngxHwEGvLny5Ypha3Ha1RzwwH6YBR6fSRgPmhz6y3DffNn2HdQvfneSgFLvwd9qbNcLLtC8MBfNYkga",
  "key16": "5EnwAv1kyi4GeXSuGSKDLDRdyg3fRRT6151LSSUh661Y4GFt36oPVSsS9CPMzdcRNUG95tjMd15DZE6NHdzY2vw4",
  "key17": "2bsJk9JUKxrEoHW2EMm2gGyN4SAX3Xq6QrDi5EjEheU3ghHr9BZATj9qpvyZvs8sn5TedZjue5eX5ZDbiTiTtYuN",
  "key18": "JatjYfqnyxm3ESK9RGUxFNnE2iDbHXZi8Y5wGvmfVxceRmRS65uWZDcvt9xafnQbcapEPNRBTgMjpoiEtWEb4ge",
  "key19": "4HNvWxhE53P4L9A2jKX25vUksCwyL5GfRKeTVJmxYXhrEAQ64ZzqrerDTn1dms1eAQK8ZVvLyZ3bEqZKDe86RcJB",
  "key20": "5wCkUkVPaJUBTeEHx2W2N5fbDLPGzn5DopERhFak8cy9i3myS17PzSHAxCF74P744PYHGXKF4ku2VukyrYonivFA",
  "key21": "3Hwi14pvPsYjBG3soVCdjiLu8rESm5EGPN1bxiuJeeBuE26midMXPUvZ3AqzqBmqQ53k7n64LUNgNLphr4mNDXmz",
  "key22": "5FoPTvc7rjAEDvfbJzD834iUGFubF2BFCeToUPfu26Uei3LT9vr6ZkY65TKvGxh6Qrbhng1X5eHTMsinyh1aZHyr",
  "key23": "4gDMptKjnHcPeFA8yXTDNkMyQ3XszxcE2MhyUCABpstkpE3PQ7oiZ2YQT9veMzgR4icmtqRt2WDTVZHL1wGmKMAL",
  "key24": "5tVjt1cE6fTdoviwZVHgRWYtkHYGSrGhQLVAmBbsKDNQEtEiFm4ioNPNQEz8RDZ3UqRpq9umCxvDcrHkL5Gnautc",
  "key25": "2YxVtrYBFi9syGdhNCMQ1dwTnNnzuvyCcQJ3xNuAxLwgg5gMX1qnpTTRNtEpLbeuMUzAb7mQbVokVJg91dfinmT1",
  "key26": "Q4MxpDuyad3cd3bmS1KPW5gr8isczpVqSpF26QYp1miBubfuNbq34L5PBFaMGHwsi3gkvcPiquJvdKhTFgZJajA",
  "key27": "5V3HoDJgCsok4G1psuFXfLbVt3E7w8wvM3GusqtXaw7bP4vhMUHmR2pXP9rDx95t3BYsobxEfVrrHaCJWEtsGvMJ",
  "key28": "25XLnnnBBGrmrMDZrtfDkUKhwfYPbLYzvRP1xwJ3TjRMBK7cNXMSxXcfyPwDB33RDmoHdTAXP6ix996dT4WVsvGf",
  "key29": "3BRvjAvEJMfPnhAyrtT6Cj5jnTn6aGmvXKJW4rredwJy6m2C12VFYCeBpK2qdtHX2SwRdxep3ZpuVBdok9MLPSqL",
  "key30": "46RjfxiXUp1Kbbth58anc29h7GCPNZUT5Wr7YLMNAc9bn9cYpXyvE7yJYth7n4aeGXrbNXjDzopuJcxtd9xtQfig",
  "key31": "4NyNVED6MSWcbra1k4pHeSTaS2GFrfDREYwsB2DbrSKs3m8b9payoCe3yV5Vgbk2sJwi9Hkem1DtwnWiZWrh324L",
  "key32": "bz6SmWKyc17tN3RJwk6ZugGbvzUapnWQn9cv22H6opmdMhHw33iggMuesEQBQ276ofpXYtKaou8EHqxLTCiG2P8",
  "key33": "5cr23ARSWcLnEcJjqFQjMVkLdougkuSGCc9rkA8wfaB7ekHsioEdDS1Rvutq33DZssHUX3QMhXeNKR9YiZpmUJsr",
  "key34": "3Pmkzodxtqk47xsemFxML7tVTQm1c6HQM8e1j35qrsrH1sUFWaMKQvVBqNHRZZWdhykmnEMNUYvLTJ9GWTBb4Sn6",
  "key35": "2vUF2gVUebsktgN5kfk9mh2yPjXZLQpEGuaTu3zFQDnpNrvqkiWchhLcUmKDrF1EAcQpmVLZscJrC82Q57JwokHd",
  "key36": "XPUUDvAtcGpiLdJzj4AZJRWuSyPezs83fC1GcF6a6RNuuHPwDPdaysc5Em6H2nrm9xatZfR3e2pcC5UAarvUp2v"
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
