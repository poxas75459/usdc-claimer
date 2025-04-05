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
    "3XQQcW7jsXpzcU3fo9uYw8swKxREKLD7RkzMTGMrca7JKGT8h3JP5i7cW5yNruC4ouU9iVdWVyZoz84VB9vhFGzU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ydH1ZnfJVgRGxeECGaazpCgrLXqXd5LJHVDUf3mfRzuxnrmSd5FzqDDJ2ZkJJbVNAzbKTSq2gG64g123KQxTDXR",
  "key1": "3SXubGL6KXtZoh6szsuxqTubCCcsqoKkZRis8JXxcP5rUWSM3d8z6WF8WTwU1RL4bSCLq4bZbGRj3aJzDb5WZ9YF",
  "key2": "3XPecF8Xh2ncteFwjdpEAWP9yn1PmZikiHsHW7y6vmKPiJ1bCJ5cEiMDyn2ccu4Hbcg1z6GTyLnrVheoA8E2NvpS",
  "key3": "3dpxHMxAqAjGKd9JXe3cEcma9zkkhiJQAyLzHwub38s1njMENDvJLYNrW1rdbrjpQFuRRrFoCfB6Rrg4BHC9oW6V",
  "key4": "XMZR4AQ6UCutMKDZwZWkXj9iJ4Tj6jvn3vc4VFJaqKoyPh4gJhkJwpHbCREfPAb15zid6oNfsUkUFZaKq4oVKSj",
  "key5": "K9f7uR65LCaX3wVhuj7jtMrwyhTjKsgFcQ9j65wa3Ca8xiq7oFX5oUHaZXEFXFyU77Vn5fApLTZK3PAvSf22ykT",
  "key6": "24JNp9UMoPPvSXEbmqKPqE782k1KZEevs1GyFjPvrb8LtiNRUtvwPQhQd91WsYHvcTdCPnBaGwKMxw8R13A3KsK2",
  "key7": "5ZY3JD3UkL57nyEZbu7R2sg2ou2WeDqCsEJd54YzMmNnhnPutdJU6agoDLiPjD2o2L7Moh6QvnvLpz5YWRoKFRhc",
  "key8": "5kVzb8Smt7GpJDo4sA8o2KWwLsVrwT2eZvtJqNsP6Yd94DQqL9Y7kLuJ1LiiR4QH1jraYSCZKWucUco21R7e89o8",
  "key9": "QEpbtud9BL9YnxQUBrSaB1pQqfjE6miz3VhoujphRb2CHCAK8fMG787xC1XjAH7RinanujvfiCC6Khgkp7obREB",
  "key10": "WHXtxx19gc4LG474hVD2t9a2uMzSFoeS9K1JQqusKfXGUUcqSjLedZiYb5uviuquj1XqRo5UjQjmdiFNhStPZqW",
  "key11": "4sS72ZBEeM5gVFaJCX71bcReqEgMGNjvcMYDPHSXHVXR2sFky6MspAvFiXv58d2MkG5fbBFQhqum5q333YXYAnVZ",
  "key12": "3xi3RWpp6BGEzGUfu3zuRrEnRb1evZ86jqzPE3cnt8XkV2jmm56xdoKcFQB3XfQQxh1P192RoGEUEZ3NN8BTnJ15",
  "key13": "4VwUFSZdrYwxPSNwykUNKVY4EhdTUDbfzSa8S2SzrsZppQuVhaUFgivdGCabEVTgwTS1g1WUyRuvoKuz5tBrjz2c",
  "key14": "2fthMDyRnLquQQhpprUYDSpvwQL5yxxTx3T3J83waU8AD3vqcTmnBA6RcGNGnzKwQuhNGNgRfGjVa6Vxznc3SqTr",
  "key15": "5CYLiBD2vnwiEBZzARksJuZrX7DCsWqjMwn1xmFvdst5176akc7ygdEok9qBbW6chNJDbPEStx7612n53XgYcyN8",
  "key16": "34ECD7mUqhhHz94mJKX2FGh8GuougFdEt2eCazEqDVAGqnLNk8GAQTCHKkdwDKz2tgkPdJNqWQKfArYt7x57iMDr",
  "key17": "kKs9cBZaLFCjUvkyJansMi3YkMT9opYNrXbAsZ9wxQGxjbh9G2TzwW1rwkKadMPJXwJZSz43vLEB4o9Q4t9iX2q",
  "key18": "2VpVBvv6BWW82Ev53m3eEdbjBTwmBSdAH7PfPgGvydx8cSJTkN3rgxy2MK5prEB8PzC1nGf92bAdv8qJNeD2yBT1",
  "key19": "5kPv3SKyWBT5Gh5KscgEdwqN3Qd81ovwrTEwfVM4i35vYDGfdkvQALHPDnFRpPPrgFJeYxfbPZw6scry1tGiX61A",
  "key20": "7cxoHVBB5Uzs1cX38cwcgPBjWBKGhk3E1VcHG3Gyo7sxvDJjq9Eho31wcQhqssDjeLnnW6Ad9KAsAFzKRXtjWkX",
  "key21": "UynFZUs3DojGYqU6cs9oi5KzsM5evrDuQNkaGMxSXM3TUqmkVcUFhEcvN5f3a9tcG4iC2T5ZGZWDFwz9KKRMBok",
  "key22": "3P4xPc2Lx8d48EL1PQo63NLG3xTX2VGyHHXdq1ANx4gqL9UCDNyWbqC4duxea4EQNDdRjJHvhoEFqp1mEoXokFRL",
  "key23": "41vZrc7Y84DresbUbMyuCELeDrt661Y9Zr8gg2wLn5YmosuDKbw6XYe42cLA5dHs9CT6JbcJBf9EJSB2pwsQ8vWh",
  "key24": "3BVog1gGdK4eLEcctCirR7zSmrVZjjHLr42qrSCDXZdPUmCC7WqC7jnAjLbhy7HDHB6Y6FHtab66HujCP2qWxGg5",
  "key25": "3mWZ9epoX7hU8p1UbBwYSTBqwv3bUSRtwaAk5Ac3Jd2ALGmkBf8bMNDUvGLxwTA8ieoBmf3RS5VtUHWPmQFDvoHU",
  "key26": "29T8WvyBeeoka83AUJoQYBRQF9ruUrBQ1bVpLLiVY8wZi67aXKASANpdwJLjwrQLv4jqUQCCfBxMPNTUbtFyXA53",
  "key27": "5Tvkpjk9fcNP4ehXdZjpqh2iqWaPvUY2fEx3uH3L6ZTaWATCDWk7hKsW1ZYXpXgJYP33zyx7qa9b8mZdXYbN8yba",
  "key28": "3ruCC4dJ8UXWN4vwdXoAQoPsu7R3JuuhAo6U6KzwpmhsZ75eerX9PqPptt8zSoFApQfsyP8qw24p1LaKuDCNWbt",
  "key29": "5UbBqcdAQKzGZCavFVHAKWtaktk4Twxfzbbqh73ceG75Fy5rU9tQCLFHb1aYc9DdSgGSt5DfGuCzpGmqyfsLNr6u",
  "key30": "JeHBWqUNQBSJszHVDdN7MDyENBAkxSWHybo42tXLjDvwtm4q73iGZos6EurmSjRYNANgMoSF9QEJGiR88f8KoCW",
  "key31": "42uNooSLenub1JviAS8Xgec98U3jF7swNGyhDttsQAEDTaM3atgynexCP3kuBpTDcnNh3LZPu1Ad8Ff3boVJCroA",
  "key32": "5KJBovNYoQkmKy8miVb1eykw4WXkA6Qram8DRAjDBphreue63MAKgUDLQsim9pJkxKtfudR7ySQmdbZyhX2W57dE",
  "key33": "MaHHrMZ3L2QxNkWWfopXQ9twkjvJzFbkVpxkcyUr1Dm1C3gRjdL5XBVfa5NiBLretbEdPQfh2qWQfJTaC7d5JJa",
  "key34": "4HeEqTTX4u3TCmnXU9xSiVPdjqUb7S5AN4PFyWQ1S6VjATdjkgqbfbJvDKaYcHofNGByDKD7Ehh3veLHX6DV9kxD",
  "key35": "nzGP7fGb5hSvEXvXiBwMSn43kjsefuzmuHwjzGdsYp1m3tR3TeBB4SNihgxwiAnBKS8Rb4oNW76ySJYy6zVcoNh",
  "key36": "fZ3X8r2FVCvsD7LCpaL4pC1twsZX2JgNRwthyWS85mspvtBe6FJ6W5BJT7QgCZN6xaNzdNZqEqCQTzTBycCHhjf",
  "key37": "2DwHgB8WcV1dYoUZdCBoT3H5Ft7QXvWDUV5x45gUPQbFnQBPBGQEMV5z6EEGevJMJgTbTattEtGwWtfyqStgsQTV",
  "key38": "wUePBSdqRNduhwYUcBtGPH5KuW9vzMB3iKm9bVV1o1bv5tR5uJvvEevajhtMPTQQajqrw9Wq7GkfH8ZtHQp8ctw",
  "key39": "3JeeTqqr3QBxjfrqhHfqM9AXB6GoBGVzxiPLEgPKCFwzEq3ccyDZBJY3GSnpPtUt6gER8wGKWpCwCKtWKLCPWsjL",
  "key40": "62MAdAbpm7c1RYcCrw8ZgHRpSoAtkimTfWPVrwg7X2KZPdkbf41ciPCSt4u8acARg4xFxEd5eKcKDWo71uNyZGJG",
  "key41": "YxB4R48MiY6aWuVrNjN7pfntN6tYQdjPS8mmcy22Vjon5QXjPo6sxhTLtgqVSGdsgcHjmzFDWCpiQnS2R8GgFCD",
  "key42": "2ZSnKe11jFPK9fT14JnQ6fUossQriNQuUBvjv2k8vQ754BtMiSCZAkg1ns7jQC1U2JZXSGttTBcWbN1naovXfvKj",
  "key43": "54pvHA8QtT1enwUb2XiesqsdwLTsM7LWfSM9xXfTLNGoTsG3fhcFYCT58b2adYhFKwMCowdFHGvinpZwmKdyPj9h",
  "key44": "4b2BoFEBDMQC6TqR6umujtVrfZNSEYQwiGrJ3SZYDMPFppKvZpZdaPk5oavbgig6ZnhcchGGHY19tVjbEWP8bv4B",
  "key45": "5Z1pg2uN4zfVXdVmoSUNvR2rJrX5JVxNtCXQnvVEuW1M824QWEQfR28GheUeoZNFqse88fMipFF1Z7VmrHweV21o",
  "key46": "3UzHKGMgCMs9BFV1bJkpupm76ienYxZA5oC5RkitSSL4vf4xxSrDqAGdSBtUQQ4FvDGZn4jZ2FVj7DERd4qcn3dP"
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
