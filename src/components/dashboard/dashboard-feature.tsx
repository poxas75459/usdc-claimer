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
    "k3QqMS3vgAQhZSuJnqi2kzfdW834yDiD6iiYx936sqS5hSbHugGsPnuhmZGgp41pvhU5b2AAJ1yw639nifeHB2W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qmrZePYbccH6ozSjGPYMCBDwoE1gh4oSb4cuhFoD2pxNykATWiY9exJZeg6T5vxroFLm9Gsz6GxSphRqgadtQME",
  "key1": "3TP2aLPAP94ZWrC87MfkafqbsTP1TJYr8rXKsrYCfTHtY5usPpFHw7eEL2QRz1utr8dPXBy3NETKyYg4s8V3ezWu",
  "key2": "3ABktLgZZkZMjWGuTCwAxgHuNKeRoo3712uBxse4N2FxFmdPBGrCqNEshTDLe94mXPMoPwZQxFhBbizU42gX6ciy",
  "key3": "4FRG93mP4yiC1XYzHYVwMcta8m6DWatvtY6JKarWGsCc8NBc2ksX1qU5nzgfzpFzSRMXp3PTxiz5Ya4uYC8buLFF",
  "key4": "3vkunccsrhYH1tSR2ruHspj3hbnmGNoh7bG5paDvyCGXCym96v12WRwnnvSfVtBxie9k5YgAYSUxPN9YUgdS5Ljd",
  "key5": "4G4UwgZ2dAvTaL7swVu9toVmvhLhPs5fFStVb2uw2ycmWPVxdHPy5mpvweGH4dhym1AD1WSKnF5HE9F4BAbwS5ku",
  "key6": "2kkB9AKMCX66JxXRDTwYWQzWfLqc7p1QtcTMB1E5moPANPNkvdYj98nELXs8tyQZvNq3hSQw8grTQqMGicaK538P",
  "key7": "3j4i6VtksMoKP99oWCqpGNc4o2ZnJ7gBz3Fcbe6HAYbKihQ6xHyuguEK8UowjQiVqq2Zwa1tG8hPLWbRoxRmwfaU",
  "key8": "vgsDShZQFgtGbPSjvyacYPCM8WjDR9HNSHaqpEoDCANSTtFGa66TJiBT2Wq62JGXx4qkPmU35HQwEhsQyvzKtqx",
  "key9": "3tjm7JAtGmJqLZGmZruYHVKntGVcsS1qfvbffXsFF3xzqm2DCVdx4qeUnzKLJ3YjjTCgyok1p8BeFXoKTY5uPAnJ",
  "key10": "3w4PFd4dzCyTgDcMTVhACsZyLfDfM8tkTYbSh1LwBvkRzezLAGwK7UYUZWuvNFomZT82kuREjce5xpL5CzcgEZQy",
  "key11": "vhwLRxqnfenDUCYHJRkhccmUubUSiDQqM1V7VBvnmf42RV2fRDpWyY1aVU9VgQAQ6JCjbtWt1GT5iuG7mLw5xMR",
  "key12": "4u3A3B6F7pbTiKkoXGpARqUrCrFmHUXMyAh4Z11GCYBs6mzcqzjwAwxgqr2my7ReHSzZJnVpn5GuUA4qJZzTNTSc",
  "key13": "2rJmvf1FPZ8TQVkN2vmvDrELvBuNLgrxyQYJPmkMsGaXogR3A2m2Z2dSziXh2J1FPV8MM8MxGsVRqPZoWC9Pni9e",
  "key14": "5qbdVajK3dtVMBtCypdkot4tmdQyDKPLwAqt8aisjqqmMJxvFcPpQcg9yNBjqTf5SprM3122xNYaac2zhmJ9cke7",
  "key15": "4kZPtWE8MUDCVV8qhuuyNUpwumD8GdzuE5KhWDiXdVoGzm9FYTK8sLqVGKvtzdDFe9Rm2NGH6r6e2cC8sCPcXjws",
  "key16": "TpkurFXa23Vy3YENh2iPUaq2u1oPCE7JyX5pHStq1eazpwJQj4163ftjw46s2weckhVxKkrksWpKdckBYCt6Sxb",
  "key17": "5iE6k1YjKVNUfzvv2ZQv3H3JNzxqYRZfsqtRMwufTy5VtjEv2auu4H5uQvVszg7599ajcdTrFdXKnAgCu1QPpvac",
  "key18": "3iAHC3PQk5YrnPbveptxnR3Zc2XycXzk54YCYW3Nxj3RKTukPEpT7qBtJQXNDKS75ZYR8cGEQZgQv48HhqKUnNTF",
  "key19": "4cc3mPmW6LND1xnzykZZPMGsykkz2FDnDCxMVSUdptv1SnuoFuE9XDhxEz3n7SyqbXT9biQTrUhXc1bVYB4ihAsk",
  "key20": "3kVU866ZBMRbr2nAZACZKPRghiDetjdnCx9prq7e62JoQ7qmQMUpq41yo62bNjTg37bExTY89FVAVwYdRpU4Gef1",
  "key21": "33NxZTfpipEDqJRpWLb2WArXzkxJPLV6fVySLDJEdw2VRUod7gzrdVs5VmkJtrnFng3m6BkJK8i882CfzaCSt4Ph",
  "key22": "5LgdcWaZzr6F11daFkmRCLrtK5c1Pz1rXzRAjQ24c6wjJQmkhDJa1N9pxbvEYvRjtw7N2hVUXM3AbhB5Ziicg37z",
  "key23": "58WAtNq2NuHGBnouq7kCCBAAJpmaywsjcRahEXRyoFCZLTtEvhyqsYN6wtWK2yz2wDSJe7F5otN56y4iZbhT2wAz",
  "key24": "5zuEq3Jn4NWjgddu1HkMug2yqyNQd58JAktw1X751HxnR7GFdGvKad5eM6dcw49LXfiT1kht7dPt7yfk9czN3z1G",
  "key25": "GMuD5nAHHBJA7uaTLoNUw1GmkGwRnKFpZTGTC7VHjY93mj5JTX1QkUmdPAtUwCcHydCJ6jwkvChBH9A91YsvVZo",
  "key26": "53rd5WUQfXVEBKoaBZ6LqSZ5nfFE5t8hv8EBBGE57z2q1q4HZ6NW9BiruTeoQB1RV5tgwamshvBqW5LP2pqbgyCE",
  "key27": "2bbJ98FGgh1gPnn3meyHZmxtH1no9dvjwUAY3fTBkaXs2A3GXW2aui8NVYAEz2gi5xf1WkeBA3XozdiDFwiSPSBP",
  "key28": "4xWVBRyVQEQTm5RCNvLaLS2hMNxSPn3AGmqjjB3MBX5Xs6nzVWX8Dvra6ZoZeQZ7kFh8DuJaaWD6Yhydp6DA1Ysz",
  "key29": "XC3j5JZ3oL7B3Q4FpMS79wjqak4b9YVoPGDAH21bGUHmWGRHd1Rxn28KQwQ3ZBt6ACpfzo48XFJAmWPk81xkXEi",
  "key30": "2S7Lv4We2XNScus6xNSoXZBeEpMM9odMYP8iQq57rANQE6TFQuhEzAVyYTfjTDJtm1uvg3vYoK6XZnJGBC3yS4qR",
  "key31": "4mnJjwDMjEfVT1FweCftbb8CYUQyBqtr3qoR9MchuEqykJwurZV8iyWJnroukWHgbxLcEuQfJHqiuvsYyF88bK5i",
  "key32": "4zdjBFDBVvvawKmfp2iTKztVpWzhE9TGXsAog7H6LE49WzRpcAyXvBE41uPkEZuxYKyL4xUZJ94f48MQFWSF35fq",
  "key33": "eQvbDsWJK8aq9QgaFM9XgAwcN5rvqq715NSscaNAZ8U4ZJsa1fQg2Zs6VoobGmZRKDi6amnvoG73szRZfrK4ryg",
  "key34": "37Cmhb3rrY4Jon4FsX4qG6yoyx9J6Z6qCcnqxKnSP4Pgd5XaMQrs43hsesdysFbAm7JEynH9gVDRtjZR1UH73xH",
  "key35": "3ncTbsgWcF7wcH6LABYHBEVs6ZpvaqhggvEPfdXoPgWnNCAiTMY78xiNsAzCz5DnwnVG7fSZdUWqsDeqQzNHVXWo",
  "key36": "4LgwzK9SC2PQzKWXfjoibX8LsBdMa83uwsgBeHbdbcvpvTS5bwHYMEtouezDmTeimUEtewLcer896csRkvtpENiB",
  "key37": "5jxM7mXVD8fgzz7oZaY7usxbzxtTPs2JqPndPktzHTarWibVR9cBZdeTTgawAYpVBNJQLaf9GG4DV5dySvshGBJM",
  "key38": "2BNPfdi55MxNn3W9SSQv1M5oxWCfhbXbmvcXXFnndptv1WdumvBGN9h3bmAdFwxbsSc2HBunzPt1E1av6CjLXTRn",
  "key39": "5aJ1k26nf2ca1qRZzfSziwXm8M1ueN6QVWpboKuSaDM6dLyAvyN8rZUSpPcKQG6vvL6xyQ68zKzSqJeKoATNCsas",
  "key40": "dM6G6VUf9fos8dCBgZQuY17o6TKzCVoroG9tZ3uyGsp5dtGKsGH6FdfznnYfgHvvS6S1tt1h6wvapTBnvthWQ2W",
  "key41": "23vPC6PruscMXNwFB8meP2J28U1N6u167uNfZFE4SXdkdMhE3KDKvZajBFGS8qYJKD5HCZT9fgAiPaLJuR3bYBCJ"
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
