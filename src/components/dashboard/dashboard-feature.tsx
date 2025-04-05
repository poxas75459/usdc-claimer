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
    "4n1k7DxoiKCX62zotJbSMMgYzxkpzkiPniqx8XP3iPmssyqpBxaqKwMH1nyCTJnFRyqsaGQ67Vpa3ne1jHApVMG4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DmHxrHpvT4SHH7BbhjRzV9AgVyc4i3Fy3mFazGQb8kAAv9uiDcYg231v1EqyTT75Auuu6EsE5PHv44wCc44cyCb",
  "key1": "37iiRSs1atvPtEbNTZmkMRZAUkMp91J8agkzPDgAWexyK5XYVy66BYCDAt5HqnVGUrEsZnmgfezwyn9RyQsDmpwk",
  "key2": "2JFQzyzNqtoFgifvdsy4Cyiv7sPG4JNLsTAt88neMMKhaHdRYfusnMVXnu2wd99oVmpniVKkSEnma9iAxC8K1wea",
  "key3": "3UyZj5HcD64MQd5GVXSz1XarU9zq2NH7TXDEbr4PBfiG8bvv4e7vxPeXBz3EBV1ubsxV2HQ9nq9wqN379gVxBGw3",
  "key4": "5gprQU3d2dd71QdTtRkEcjN6siWXi8LZyBuhLzWutETxxHvLoDDod7AXh2k6qGViM5a9coAaLoMLTk93pxXvU9gd",
  "key5": "3foZNKSWeTJDyak31yxNeqApZA95KpbwvrZyV8sD7KqfwHMJENoHqxJatGP2FTRKQ7RhmrhFAnupNoTsq61iEvYw",
  "key6": "3TTFjWRJAKyGB3QhQ1aJ4mdAieZDnhRoRVTWVTxymf72JjttMKRJFa472YCLfNBpTXomAY2xAP1VxqvnUKz6Rsps",
  "key7": "2MfBqoS8A4ugnv2FHxTiR2ojV5FBMALXvenndvu5fXxWymytJEJ11JJ4RYoKrGoSRmAkJ3RhTByKrdKrpUuWPbQf",
  "key8": "2d1KEqrSnkL7dBaE5fectFYbmURrhPaibfbSHdPw9PY5rD5CoVgysREjEVpPcQVDP3KPkwRok8LPQSGAwSWxb8cF",
  "key9": "25vd8vNL7dERK5FT9eErLeChbMyzqPiAwU2bhn1F1aLiW4rgPVzTghPwvnbfcyyAE3snoHsuJX6iJsiB9NiA12Kt",
  "key10": "32eZG6NqGBjYYDZx1r1fEsLiXt7tsQWr5J47Z9oUYqhSrTtXMujU6S9j8n8SJd9dJKgaRrDFwKni4tTbPyNQD4em",
  "key11": "2UNHR2TWSAivmgSXfePPyM4imDgwH81TBm7S2XJZqrcpq5LfoJNqS5xyYdhF6C2pNZaLdrhgDBLtUeXkepwbKcuK",
  "key12": "5H1VFhxvwxBbdrce19yR6xt6v6m6k5FVn4c9CCfksyKTStUERGZismijJvcoMG9WCyEsvxKqUrNaaNDgVYEuYLQT",
  "key13": "3i2GCpcNWyXjPJyjR3zMtRF72rkZMFwzv8Uy4SgbF46NZe9TMPPMVX6v19Cb63kQ3rCe7XoeMBVTWrV6Sxa5qi9y",
  "key14": "5agjjdHSqpkLuwS9jSwnsPnxfJG9xLx6KKCybW9LGPXckxchyB6FwMNDsqCiuq89CiU6wnGoqFDaCWwwbyKmFnqc",
  "key15": "2zPDK6QRnqkPPk79iZ9kmWsYVHsLZW6xy8wmFRV2ZGeWr9iZMe4iJsM9mNsPi8SsBpJKHimrpVG8pYee7thonhGw",
  "key16": "3FQ219W4o7wiAxtPa7yicYQtW5wfuN5etuNoz6hz8bigVgr99asJbfiSCpWuJa7DsJEoukGRH83rs5rjA8roVDFq",
  "key17": "2i38dzyhnLadHZxPsW9Ni7i2fuHDrnymcBxjxYuhCKRbCB9Ks95i56RjTevxNTV27pHrUASktHPymDeHd5fN6Bk1",
  "key18": "t9Tmi7RAoqQXdJCFWmGVHqTEu6KX9BC49p4RgzbVcCAXmSr4BP7RKYyu7sz6AzHfv55e5kkZosvniZcx7PvLUoh",
  "key19": "249Xs1LdLZ4sw43xG7MhdRmS8iuW34kWf62R3tsY7whgsfTx1WQbN1NwGo2tktaE273cSe3aFB2omvN8Tu41Fqin",
  "key20": "XhXc2CLT3GN9uqp6vtovsV9TzW9dtKvTSzZ7eBynGfUwDdBf93FAXpGTHVa8vN5zeNRBLY5krtms92qXgtP374j",
  "key21": "3oBipC7guwE8pNuju5PFuqgyuYtb7HxAmMMRY26eLqcZUHxFq1jRU7LMrfmdk79LD7iFMfXRWLYW7furwbSm2bPA",
  "key22": "56ZsScNvACTx6jVEGkxwZjQGpk5pRJTg6kdBfkTaxY3LznrcvCKBJD1XWcBbFBdbgp4CNkcrCXXWETgxCSQJdNaH",
  "key23": "5NQaHDs4J94NaEh6VPycxWHdqponrS1wQLmpq9VZjPvu1LhywFF5tLxJs3BJ9wCjDoie8chAhDk1N2kDCTcanYFj",
  "key24": "36z95Gw2bebgVfMTqBewG7iXNtVwKqGmKNHgKnAeZVCPtn6teiSPxKhBKFiYBUF1uznuSqQxuhqkLEjEEiFBoAVK",
  "key25": "3CXk2We83Fk8hkGXyDsGdv26xZjYYHzMnbDDiQLu2s6tVMVU7yiEpcqVPWrBPXj2NW8fHmgTgpC6p2jSXMmo2X2",
  "key26": "2cFeX1raLizyoMqMJV9RTtWzrWXp4xyeHVmDCFzdZJBKZr3tTCTjh4yGgajUGtV816GHKMYRewMNT2o9JhMBx7KN",
  "key27": "4DJVr8kpoJEjHCN4qHRUtmmGZrcjhkci2gK3hs8CngPG6whr4cf9AahEe91XFE6xbrLNgXYR85ZdS6j2iMowcgBy",
  "key28": "483v31FUaNhL8MFAwxe8M7GEw6kUP8kzvKytqtMB2Kzz4iqDTSt27YFae2ogX576byjHRwoQ2tyvKsUkkQS59vFY",
  "key29": "3RtdYX4HLsrY8KZbm12PZQH2NnwHGz6G8GjPvtaUTwqpQBQuZQvPMm13TEbcf75XgsMB5hWqcADdMWvNpwjBe7mA",
  "key30": "5wgF49JXnh1RHmTb4QNy2aMRT2Hq867Fw5Dw3JNqHVzVMQRiNWFPFJV8wUNrPrjCcZ41YheYwSHSQNZXjfb1mauz",
  "key31": "4pB2XaFKbAJiSShWXrqsWMfZ5pFBCsson7zJpvU7qWjcXGp9mwiTCBkER5KVGpVVfb7c72XhoojEaw34fX9sBciW",
  "key32": "Si8ErLUYXoume76Sj8Qk8usjb29xb2gWuirVxTA8nG2JxVGB7n4tVhDgpaCotzPxf1zA784p3x3VjPitXbZzkK6",
  "key33": "2SDQF9tbAydTzjz758ryM2k6e8CzuRkfizHGnjQsNmuyfTaYiZwvS3Vx7F2meYwiBh8Ck7jewMQpdnj2mjasVoFF",
  "key34": "5H6YCD5X2aHTs3LkxbYaNLo7ye1CPgeucuHaGpiqUz1MCBpA8LRqMuArXpX1Rd8WbGSioyLAo5Ch9SBbP2Skar3H",
  "key35": "CUKGeqWqtKEKfgqGzLqPsFQDbYm7AvRzJydLJbcQpNcdzR8U5paPsLSQx4ZXgJgDNcsZiCzgwB4yBbgs6qaTFZb",
  "key36": "5HYfgTk74T9VAgRyAAP52wgct9LYSeY6Ad3WH7pL3162EApkbaykXWGZpTk8EahYz7vDfM6GUdBfbGN2tbs6CPtk",
  "key37": "52FZWe1Uqr8MJAjqPSucoywmgho35e6TsCQvCAhj8TwnZHNN7Zgqo9Hgb5Q64p3WWVZbWiUXfJata3FJdwAB77LQ"
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
