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
    "4GDL6sBmHkKf6MmBFqgqPRsWeGTmreBjQD2DK7VyxBVZSKUUP1R5Giv3LoL8jbRdvAf5KdR6Ajhd4kLUrxQ619wD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zvLrMKAJ2neW7jefwKsymzhyRLEEuQQY3biBP67Y7BNd4jUU6WEzHnsGuevr2en2bQtuPDaRqoB7K1ELfqHNUzY",
  "key1": "3282AVWyHWnJHrDG5rYVoD7S6krG6AMBVs42KP9PbckmJZNW5EH6V6agjEfYCeWyMEJxDgQotS6HDn3Nh964xgku",
  "key2": "3y6hbzSkhBdUJ2oABXzMwEWT6rH4JBARsWMPgfhkLMzxsCUfotbVSUuzLgUUX3tpthFsrrXVTRY4e7yeWUZZdkT8",
  "key3": "5MueML9iwZZLG24D8tsyYkZqDJ1RQQ8wYTiDRHWXu2EstKmgDxyuhxoTB298D2grkRsc8eNe1X7DykVJnRwMu6k3",
  "key4": "4eq2u5Ki18m387BDGjW6sn5LsdFtLJw9GEw53eDGhY5GUzvutZw3LmYDLTnakBDdExoAFBSrVCiMBmiZPvj47LYg",
  "key5": "ZGgFiHNSjJNMQnMZDSSuTXo23kpLYxnY844dBikAA2AXprTQqEwFCbpzgQ9ZKMj7p3AnesFLXZcBdCRE8vrWGoj",
  "key6": "4n585j2QhpwxEnUsuhNrMfLW4fJdwv74RGJrMojvubwVB2iP8DhN3DrJdEXjRARzgK1kF5wUrtJyKTYrN5SgdzqA",
  "key7": "5a1eWMiuwvjZdAeLVm2D4KGe1qux3rvde5feS9UDnMvJtwHfMCVYTUS4n2UmwdayErf34Cc3qejk4qq1UxFJkgQn",
  "key8": "4kErJr31zsziydWEuWyCw3Ds9VgsMzbvwxfRemGmNFuVrvAUvKPpisvmokHPDzKhYpSKbvvJouekEG8txvikdVBQ",
  "key9": "oATvs7oXbmDKn8rjAzEfgHwP3RBti7NVXmjF6orrAo9SVK6LnEcrgq3A7KuwJQQanf4r48V94g2d25PiL46tdtE",
  "key10": "5EZDBaZssyxjGL9nSC7PHEuCpjZDqB4oPyMdF2ULtPCaAJBDCbJVM7F4bpPWXahfy3aKNSZP7qqiNrznbsfc5jTm",
  "key11": "5dNLW8Z3ouAf5QMQDHk9h45awQxzEcnN5RsYLFRjQ3H3fjqicePrXmmpaxKLipcp6wbgk2wUq3VHpFTq77f7tqxr",
  "key12": "3hi8UUNGf8cvLL5pdE8GWwsqSaznU3NXMjPhKhTuxo46ua5ifRzqoV7ZBQRdxBSFKURF3qdoSh138C11C22ZG116",
  "key13": "3rtUU9jy8FCkaNVWfvWcRk6mmcJiwmUgeyG5WQ3h9gYYbTfieaDggPNxXLgWiJYFRx14NHDRFK56oj39UQWbtU64",
  "key14": "SzUaBTbBcsCu1chm2HJST2XHcLqus1MppyqGYup8XnTtSFAynLCQHbntmD65GMXeyu3Y4SFgW32emr46DAxWRRE",
  "key15": "2NBjfBhrMmrHPqK5Hcy8xVd4Tdso5uTrR2EqNSHgCjVDeZb4cVPnZdGYNGcFC5SExT2Fa6W5dTPHcaRkLoNrEUcb",
  "key16": "t7UbSTYmppnuzN81fDfQgq48UFraduDWRjF7E6ofpKMbYnRx7zYMDnKDCdnsuoGmeJsk2R8kWWSnoQ2mSVuSDGM",
  "key17": "QzBSH3yhjP1RE7zSaFzMDXgR3uRN8vi5FWidXEojE8znW1cq1b16QGFDz5zVV25WmRCEppp3Q4A7QxXM9tBoKo9",
  "key18": "3Sed9zyuKJaQFk1pxmq65g42FJFod92zyWWPNEgQANGSEdeKcwniqNJBEYC6rAB1GRTeBh9xmV4smJJMd1y2sVGZ",
  "key19": "5QdivqcBg789ZzFihiS9fjbfNS1S61Y6r9acjTyjA9URLdKytShreqHmcpUs6nP8PDu1aHcdpoCdBPyKL7KKwxs4",
  "key20": "xAJn7MHvodvrpxoPfwt4s9n7SPxCchXT92EgHoKxx3pumE1eR1qBCw5ERcx6jX5sMgq37psPyhneqSpe9KGrQzD",
  "key21": "3knvrpANNjcBet37sYc3948zWEyFEA8pB2pNzsXoaNiay9RT7kX2VRYTFUmnd5uPE4hXjyaLroGS2aREw2GauvY5",
  "key22": "5jwiR5Zxs7hTybbdDvqxFA42XdpSHeLFEuDDqZV6uar4QQgVuS39JioTo8DmYJiHH95cmkd6Gy45ckBk3Z7hFFfa",
  "key23": "4VNDWNjRQHQMs8dnrqdT33gJp9YDnCADd3jvdMxuLQk3Dye91kXGJmTQCGy6r2u7kxsrN2NzZteBQWfQzjwsiuXx",
  "key24": "2JA2MLDkbJiVyGymF2wuVREMDdqBXgySmKmTgTedAFpg7THXZTwy9QUAAP35Yh42ETvdEeL3kFGhHUNXXvAz99yB",
  "key25": "5H3XkWbCEu2vaHa5YiQCvKcKWjEJKJ1rYaS2nLhHS3QynB8J1YJAcC3f9gWeqh4kiHvxSGUy7tyuF6z3w2Y8ykaE",
  "key26": "THbEqqLmvoqrRiMsqMMpeoakq3yTxscNSBed6vAQ5UM4bCNHn8Z39KTfHFj3LxFhdxN7M6EhT6Tz6sMwUHuBTWX",
  "key27": "1gYsnVp1SR6NiUtUDzwBohaUE4c5qrnUYMocY7T8AvVttS3u4NCm7BtsVhSa8n5B9S5Azi7gRKS7ndBJ3KjjPva",
  "key28": "5sBUxtRhM5J9m1c2oPrjXc6LnxLEXYpBpWgBiak7n9PDAYEZbLW9dfkw3ohKje9YaugQcXPpKr36gQ7wDEm7s4Ex",
  "key29": "3JVdUkynGu93VhYbDAJgTpx7MzN4n9vmNKS131YdTg62YA2HMyaqFs8TTwtMD2jbG7m7SqtCz6Mg4nUXjrwKmtt8",
  "key30": "4ZHgbPGLSxQqKMXokdGwrVJ6HdGFC36BiemjjCBc1GWFTCmoN8RQDhR7sb1gLnU1NNTRAMM6SeXAx7mwhstZKind",
  "key31": "2qK5eEqzYNV6MawhqG8mffGH8g7aZv7Dovso2JyPqN88d7ws7XHms4U6B9EsvXAy7ih1HzGdjLGGGq83xdz24QN1",
  "key32": "VcmTPocjUBttSWWbkqyt67BXb461m2hC8pujtn2M2z9fwYV7dViExabKs71Cs9Jyg8C8ZKefuGuRn9BSQMbSVFR",
  "key33": "5KvGp7wVrfBZhJBhKYEdqYBCErj8h5RRTx3EEAn5weBEuTTTDNceYT3byhMqA88mpRtZSeDcz1myL5BBTbZvVZF3",
  "key34": "3oHWyAheUZAKaNemGzEwnzh4ny8J2AJfp3SJ7MvHaD4pedEEmgeFW55BLYiFWi7sf4aY7qvsHiazcrMows1v1Xzu",
  "key35": "EA9TuzmkvD2Ue3fMNJz3GrepPX4PM4Xgj2rCiRR16YHJdQ13ReJdZjCVcsEoKds5G6wQip9hv6XxUKX75mPsrwD",
  "key36": "5tqbKWiz8mfmmBRMZcVz7ffqvxTekKR5qLCaSg9NnwoUsCeoSsPa14KJ3dyzHEsNrp3HyhzVb8yjnrMDnqdeW4Eo",
  "key37": "nzdUZqPbs9C3gjYe4H8UG8GzPsGw8G1SSntLtYFSTkB9Saf3gLr1ZmX9zF3fiMHBtKNpDZa8yEf9BsjZQQAbVv2",
  "key38": "ZYq4xSEeSqQ2w9r1v6Prkv1b9oCrxFyDnSFF2iUJAN1VqeeN6hfE6M2CZwTcQz5rYA17auPCjYos2qWYUrk6Jp5",
  "key39": "3MRmfYimhnxNjJRydmUgZtBaM1kZrHtqALwxEiLN4qLqiyCeh7Ptty42qBophgmVzYG2Jr1T3QYt6N74v6dktf3G",
  "key40": "3netT3MJ2dtjEKmnnt1uF1fQdHTEPfsZPi198NwrAFn4g4PkEqu5LjAYxe8ZpDG5LZK3uayJ8CskrxzHRyAnDQ9z",
  "key41": "FLLjVZBoMEvfUrjzpp8NMBFmp2a1PnKwP74x67wLMKinhfhPCSRoSzdPR17qUPGFcLYPySegX13dsW4Jkr6RiSs"
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
