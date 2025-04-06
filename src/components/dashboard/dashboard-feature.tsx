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
    "67pMcdRF3wzFkUwzHovjgxeK5XxpYHAWyjvABxXJPjkrbYEBsUYxE35zMQCNs1B91SEJ5jAezFRufqBh19WEJUd9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oq9JXdRGag9tfDYbZumeDBPfVPounyhLecBCroRSK1ADTpqpNV6PZV2LFsrkkEdsRR8hmV84YRca8g7ZY6VHGKJ",
  "key1": "29RpbpL1xo9ATw5kY8BzorJw6Eaey3goXDA3vRAWXECgehkH6GJA9f1CmWauqU1broXNcCoE4fevSvHgKQV2Z2Bu",
  "key2": "3QF3gyhZFZsg4g1sArVAwpJxM6miFoFjzY8KmsUmqVBkkhDyTx5okKsKf4aFtA2t3JWkeoAqfBmoif4KbdRpgKoW",
  "key3": "3x7SWEX9sHg6d4pZPUzvCRRWWs3eNCfoDGAaGzRtN4W9QRPTVYBXTi5E7LnQuvVnkLEtS7WvUNrErFEqVaKCv2pU",
  "key4": "2PuZWcMm9Q64hq68EZXDfmRKKmBvzeM3TicNch9VbdPQAjcQhXJMB1ckmEJPXeoZnq7UUNj9TfZCriXyher1GSrK",
  "key5": "3xBTxdMR6rtRJnJtbt2XJqZxZFbvsc7J7KBN1XkQcjvaK7CJCYCj98WrDwWXEjjhj8M3oDriigF6wgn44xXK23jH",
  "key6": "4RZe6smoBfk3BzRWfXfo4VXocUuWUBiV5Pnmkkg1xrz5Up7n5a1GfVD7PFdJbBcURtAxukkxLh699ixSRCW8myuT",
  "key7": "5PPsXa5fvkQit8QfBZX51mWnCR52D5S8bHV93jxWA7fvdcfLDEkmtyDUGL5M1kWLDVod3CPnGKw9P7mQa2MBvSz1",
  "key8": "4F8fsQr2tbfonGbG8XwcUGdmVmBQhx2LJVr6p3ePBcca3uM1gHAJ5X6xja8UzSRBPB1Lci55mJKnzxGQ4Z6WrjMc",
  "key9": "48m4a7rTNNtKNsUX3S8zNr7a1LAyMmZLteEFWB5rWGm5L2GZCg7ZZgnAeMhZQDthgfe9wz8HZM7Hzhfy6Ux2puUg",
  "key10": "38rqS6UL5d4YSEghkHjuCrvMSJhx1raBjVy3AGz9YwFCxeEYWbknejiASjYP5xY8fdCSMWo6znJTJyMffvvRZVZ1",
  "key11": "4BTLNCwv8HTMozHwbd8LBGqXSdJ7CkjDMXkZRjr8tTit26rBbt4SEzWh8MPPJCDhNShQWeAyARi88heo6WF6qJxy",
  "key12": "2zyxLpvHeeMtKPVjDqkjozDdYMev38DwjoxZmTHefG6ZmrRdt9Z14bBsFs1PD8RfCfVE7LY7JMUAFzESrBEXDAVo",
  "key13": "43yMLG3cWNnfSmBzzWRKoJ3smx4grnySfJAyiMqaf2gQVfv2dD1sJs13Lpv68SRJNeg9EbbKnKSCrs7ZTHtvQ8zT",
  "key14": "3ejU8oPf9y5UU8CptRuUrZscKRv4PpC1B2GzCxLeywyb7drn4S6U11ZW3aX6NdCu5h8oWeYhM373FZfrL3ic7uxr",
  "key15": "n6v3ph3xoHsHpXSVh9xkCPAZa39ynV3s3tKGUNdNUdKR5oHy4d8gv9feG6Vyxb5w7dHH8anHSQSCBHTqZFatyyM",
  "key16": "37qWzN9K3jM8MsKniCEmEVS8T7fb8rK1Hd4AoZThKuhwGAbwxMUjRi2WpFPiw4EeirL1BCDBtVVe2Q8YJkDS9Sbc",
  "key17": "3ySUWb5QWDxyqMDgSqJh313t5ogb3WcNwqwE52RCJBgsuudxv677y3ACrV7dkH8unTWhyt11kEoGkfABPbDPquuh",
  "key18": "2srdUuLKQv8rADgLicppmkatAdgt3gf8e92Ds1x6j3wAAUHLPWqBicoXwVPGiN8xTcfuQ8VbGCHZQeGBi3PEr4dn",
  "key19": "37gqyTGHjswJMkAJLGGnjRoj38qEerdEpMwHafN2W6QViFfP8qD8AC7eHTPAn31UFFLChkFeuDcUHRa12QGjjP6X",
  "key20": "4izGsCHnAjToK5A35hQJgkAd2KGXCS1uxC2Pf2SQNXRo8hohkPxNCEWAp1ePBW5dBxzXkLrueAToQwQEZBpqjEVY",
  "key21": "2iiVTAs8pNE8KvsPgC8ZngP1gSWiJnA2ZdejvBMF5s6A26HVk6o1ePHGz7dAhT7h8J2WuSwi1mx9bETCEYA3FSrd",
  "key22": "3pHZrcz47Wh7GxGMe6CrEVQyStDCMp3hrUvhxiZMtS4udkroojgB4oxUAyJeEYP2DB46UTKrigZaA14weDUvfJ68",
  "key23": "3aJzh2PH64u2348EzsLBiEyBK9WSYB6HCXZ3Q4sQDrtyopvQT1Xj7Zv2jbbhYKWusbgTCbLj1ZYMtdpbNNWA5eWT",
  "key24": "2kbE9HfXTrCRoxx26fh7DHME5nHVMZNj3KY4YiY6xpWyXWJCS44upR2r3KqWoTJ6g65FmJSK5uKGPUDpwotFGBtY",
  "key25": "4Lk6wvhcKZVLMJqxn8yQbYL4qnyWM2Ht2FrhewFDUD6KCD7wygmm4dob6k2NotxA1CpS9aXZAik1RDFQvaHPjtoA",
  "key26": "2VaBE85yjXr3T7u5NATwMH6xoyQ1U3fR2dM72zjkpKp5fyNihbyw2mo2YbwvQieTtkddk88ogpLRE45gm7681bh1",
  "key27": "4vjZW1dTAV5dU6KccKevmKGuRi13rDBCwrNCfdDnpaP57RRYZ84tvNd6EKR6sYajQHHh4MiEpho21r5doAFkS2qX",
  "key28": "5JRX1pwvhnHgCYt4Q2E13dwuVJjMjh93YJDyF2xL7bE7SH716ivGyZLwnfQYesMQT5y3srxNmPDAdkzGQZd1qG71",
  "key29": "66URPNn9CLYxyB4bhvbTw3Ddr3BxLJG5mT7c29H3SSW3221NZ5ccxC751JWawtbj1BbBea4dGBG2ig9UJW5JU2vW",
  "key30": "4NfnvF3cjMcAhxLHMPRe57dHsrFVaRKMmtEJcpwDx2NnuLd9fRoPMH4PgGnhnZUgM8J4F2qoeSttjXSFz9RUJTM6",
  "key31": "2qodF8k8A7Xm7n3azz7kSEDNQJLeZnN9ke1f5YTJUsnDjysiAaBKeaDkyZSWxhswojWbqWMVpsd3iXaSJjECNSe2",
  "key32": "352fGKBJ2rnUjiajxEnrz46XuJZGbMqvB5y4FKG5QPvAo6T2phCJ2ZWMsbhdSK2AVrzGu9ccfYFu4q5JGxdBZLee",
  "key33": "4Dodh2Xt1ZJoP69Vid3fq1bEUSYgwR4NZvWTFSLK94RD8FX448b3WkLEWT6NRmUbd6nseLEkAWDXz8r4Fe5X9YuJ",
  "key34": "uoSRhyVrmTxpViW6h6JWFDaxMgbPFfEYnfyEJUcB2WkLb6USZbSCjVSFc7WdeKwARgKCNyZ8dsezzxW17XtzbxW",
  "key35": "5EJWbmoycx5kko2fbhJ5v6MbjVN1P9h3aXaHvXJVuzy4ZZZbzq3f14z9DX4Wf3mz7NBAHffTmLiN78goamYkG8BH",
  "key36": "ksE929TqgxMh51bqYfHq8MDqyzoxrDUkv1TKCPLKXwgwGUBE7VUYTVu6Mdpbgm8smEYFcW76xpRQSVBAqU1igUC",
  "key37": "5svoUTfc2SoX6Xx1oYSG4DgBgXdXHRN4EtN3SFoLGpPgKKENsxZCxcahDGWuYM21W1CycWc131pLDyE4d7oveB78",
  "key38": "HdCKC4JVwgvV6V47hduHnV66c7Y35Uvy8cv6Knm8naMMpxaxTfE6bvgBHiCXBDnpBv84JtiU54REVRwDx2uPxv9",
  "key39": "38HgPMiNqSwjuy28SVU69AofGL5mZSLXYmdMPNWo9kroQCr6VbqW35iQ7giX4vU8o1kHxEFdZtTukZq6BM7eQTy4",
  "key40": "pbB2dsUer5CML66qqBThyqjPVABKkSyjP7qmu4RidR5kbet35xMdk9Nhk35Es4VzyYPCn1uLssU9D1odyyzWb8C",
  "key41": "4eu2Y4HXaA2LtKdev1CeRgB5nArqVX7czAzge15NNCiXvpRUKiiZ5pgUPCiC4UiWdn75B2mcmNrvWhSLmsMk7g7A"
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
