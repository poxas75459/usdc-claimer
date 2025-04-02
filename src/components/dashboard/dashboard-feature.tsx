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
    "5QkFnQ4hVYfnG8A82yGQjNYofVyqurguzfvgggZbtvBkLyCaUgysQ4FH84H39dw5fhHCzDFomcN5mHh8vRyRnoLh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2p9r1QPLxwAaBrUkHBuNfdMFmyt5FDc8QgoeKA6qTtjrZQsQwkeLsmc6yFzhza5ZUASvUJHXNgKD3ZKLgWfEWGCL",
  "key1": "63R9CSsTXgZEHSfr52UAQo5VShima3CjJ9KZix7nVMbeASMAKmUAZq4CrVwp1oi4o3h3RF13ujgYAmkx6KfuugqL",
  "key2": "3kaD5rS9KQ6VWQZRoVbkDZk4G49nNsnb5wSQH4ZZAtQ6CksMavvJeDNKJDpunWCz3YXMnqnohMNbwmFeeENa3KQZ",
  "key3": "4Bbad73qPnHc3qmJhbFMm31wFYZ6ao7qWpDaRpf6XHJsHA39REpLQa3RhMN9jPC4iBXawKs2aDpkL7Ddysd97UK9",
  "key4": "66bZBHGiaWxEpR7bDLan6UHxUT734wqXUWnerdMMrHStzw42bb9kgnsUfUccTsyFTarkX9PfpJVUrimiYs5nYi18",
  "key5": "2RuVDXfFaCrpSnhdw85Suk7seQtbZz2ucZiSv9dop1CWBS5C3k2CnnsdbL9jzLsUr6WSoNEdQ1DoUUYkFv8dRT4Z",
  "key6": "2npwGFHeDx7HB5o8sRgupx1j1wmmJLBLcKx6vrVg1cnFqZDE2GsYHtyt9GTdmTDrtadYTV979s4D8Huzg8goc6KN",
  "key7": "4BWHFdiXShKL1hEb6q7XzZngtTeurpjJeF1rwiZPivCagSh1r9jyyuEZuTfaujHMNUvAaTuZSv3Cvq4Yh48oPRZa",
  "key8": "4U7xJPjscd4r8Ydh9qzCn4RikTWZrWCV9jcnSF7MGLHt42NYnGcVZj7HKDp158MxxAC8H4btphKyQ1i3kd114TLY",
  "key9": "23MLCkppkabtYHFKeMiYxL5ygqbrn8Yxa3dhYn336DNSJaKhLXZNbzdm9WTxBQR8j9bV3NQZSdE7UyMzEuvd84rZ",
  "key10": "q7aAaYkDC5gQPQosL494rrbCSfD3gMNdhqfbYw6x9K6PRBVvSy7oejZRfEk9LjWsjuXCVtK1SwqwJikAQRRZs3p",
  "key11": "41tYU3pgMK4RAWqVBe5d1iT5yLsKuC3XxMvpnvvXswGkqhRJx8qAZ4RGwyRW495w2iqu689srR56qBrQowq2Euys",
  "key12": "FwaxmzzzzhHSMBvtjnnna3KsGLY4AYaPcRvfvBe4xvKvVfGpK3J5yX6WS9f2Pa4fprzk4q6jo5vgJrAm9U9m7Cg",
  "key13": "41W5VqGBbU4pm9BtRz1Rxu2LJMiKDNUU2ZwFXuewcAcUpeRaZVu4KT874F8WFwbnX8iTrSwZ7NxZw46ZdmaSU97P",
  "key14": "2X4dYUmpX3K22coX3qBu7x1CYUZ7BdzYotfzpL5vXWLy5McRnKkk3xdZGHrxaGanNJDQeLw5m2k5CDGYWwvt3b2x",
  "key15": "3WEYCaB5CWxivXGrYmNiBMihVSU21ZsHjD3ESSzrDEWYMtcGeR2AQF97HNwhAtAAKaNTV6kN9NWY7pKSeViE8dH2",
  "key16": "5dzZ9Au11h12GryYXFeNwu1XpGpJGNoNsfruZuzMYhgCJoDwAACoKMhJqBk59NksGyk7U8mTH3kW9SZDgXJkePyz",
  "key17": "36vHxkSntt5qDceciJsnyXNw1aTAxUM7fZYYWwzE4pKvv3robQiXDehWjkayCrHVxiSsvAEhijZxTcfZdtjrDd5p",
  "key18": "5NkQpUL4FoL7rCPDcAR9GuPTGpS9nxzXEvDQDVdCVzeW4Qh4QVFgQQfCe8bjT4ZRWZxnf8n6oCPRWHVNm55erDog",
  "key19": "4rWHvofvXs6nnMqibS2PcG4A8AaUJ9SBpvCgniUvHkUe2HU9o7cEADWoDNxMsmi2Jk9T31rzu9VCJ9yXryYGd3Lg",
  "key20": "4DmSuSxKN172xwCHcRp9uTVqt1FEcjXHy5VtWVG4KXxwPpPgAsYq1dRCopknsLrgYo7Hrpw9c2u3xmhPtPJpd5Uk",
  "key21": "3Rr4ysopfSBsadTjrbssf4hg8FE4FySxvbxmvf9XB7egbmG3jBYLhYnwVEc5bSchcqh2WqdWoiuTYidiekkfD3F9",
  "key22": "hj4XLxKVhWDPSaxQk7HVNic112eMj5DadTc46Px7AJa4pr1Y4JXnqtkY3WxDvSFVi2RbbxbKnhgUgmngyir9vrw",
  "key23": "CjoyXiKyhk7cmG4zwiChS8FGfzznzsdzWvjev5U4VCztpAVXrSvRX8Rj9pds4577rZwSUEUaB1M9pj6PtgVKNmy",
  "key24": "3zuGJWZWS3ff8XQtKsyfcHkQreiW7LFBzbJo7W69hNLdTGmigxvCjMCbd63XDNjrEHXXzVvezCYQrE1rDryXJQDN",
  "key25": "58DZ8mVuiAE4SQwDESuANpn6NLTfHndEAYkqzJcEadrKFgxhPwHjyx9D65K3MeRkdTSwYqYMLAFk4hx62XVrmktc",
  "key26": "mDPubdT4pFBk7B1QjgZyQtMzVXaPubX82Hhro6gD8j1fqyuwoHhGuMph3HisSb6vQoH9L6n3nZoGJp13jXfDUmc",
  "key27": "3nw6Jwas6VQSZFgauorJYEjTteEp9PGTrTJbzNyBja3V8Xz5CHRYGPY3L1C1tf1DYaYc5zLQYc2n2THfDrXefJbs",
  "key28": "RUahBkAs7yPRiRnPQ1a48oGTGbmia2ECUrS762LY9rrYepVsHUUefsHT8ocPwT7fqDG5NgdiYZdXPuYs4RU7Tup",
  "key29": "4VUvxhcVur3GASzTDziyFWHRjzDfd1sTH4d9PibXuwoSCF2FmDx8ztAYf35xzGua9LEWxZdDZ5sQuNtoJkg3KX3a",
  "key30": "2hjrPADrTA4qJZ7CiCCQQqsb6WVc54yWc3BGgRKyNG2iRm99JzjqtC7nW1NQaEtYQAq4YKh4EvhxMHH1yQGxrmfk",
  "key31": "3zGoa7KvUxUAFto17TkY1xjgbf1d84XBrJt2Da7Y9Hdhmd5Ej4UogSXRyj7jjVnrLk1YFKv7sRMmJKETY57m64LB",
  "key32": "4w2xy6f3onMGYgfvK85TiQyj3vsChS4ZH1WkunWuPtrvXB4rDZiLT1K2ULmhXSr4RpQJwR47jEKv34HZidrvB8sn",
  "key33": "2edPYq821o1ZzKqjdZsafVYw5hARUzRMWPKHdrVjZaL6J1bveDNdbdtzAW5HWbs89vK83uCeh3mpfiPM94i5jbk3",
  "key34": "2WAwq7iPdWsyLpBck12rpjQtLt1oeHrar5JY1GFH79K4z5B4J1SQ3DTDVa8v3kGryu8ZB4kRcGnuGN39P36ZbhRb",
  "key35": "5PBQ3CsstkL5oRWYVG3DMFnPSeAFZxP1P1k4e29bBZa1FGzDqQmHDEwDAP6CHZwLHqoWgrHwmgb4vGKrSRzZNtRh",
  "key36": "2Ye1WV8hgtxnizNBKM2CxbF1wkGcw4mw6qfvbRX2GxsTuo99XjbKSKanQifiJnt1eSo22R7zV5QZ2qJ5xwBvZQpi",
  "key37": "n9zaWpLu9MW4M8rtLAwLeqX6qfbo9h1JWFcNJb1fHuAyfk5nSvQ2NVxYTqfJ4rvt35VxFDj8ktyo2mjpiiJpy1c",
  "key38": "R5iFZFQzGsUJwNtnH2kNaBLGCftA8z3FeqxQEfb9B6qMjpZmqDCa7aB9KchUzjRwHFJ4n7ipQ5hf15ScSMWruxg",
  "key39": "2VU2a2roMfnQBTUt5uh4RKSgnVRDe2xPxCzsKQaptUg96HBgT7syQeg7P19CmEH6NifEKE4125okVdh1oxxPc8er",
  "key40": "5SHjSKAx6E8UpYNeFtCsdXtKfJ2rTdx4i7W6A29Q8hHeQWQGayfokHhPmusPw4VEsQmr5Uqo6ZKrCijSiYT5uCza",
  "key41": "5PCE9jZwBwfDRkZzKgVj64DiCE8DWmWEh27393wpvWZnXsePMbYFsgYoqtsUH1tpeJco9C3hsfdknJZSUsnnU1yu",
  "key42": "2QhCcBD6JA1hfGf9Xs3XC5eGX1c4Fhep9enaEbLXKPsPVrqKVLwLMaVpaAg4RiRFYwfowHLrAMJHMeiQtYaVHv24",
  "key43": "46D6Zg1Yz6SBDPQMzfh8soJtJmKgSgovTXREdrXDSS7VRHopKxP4jxm2FHuVBVc5a5K7zgofmCWPGf3eQh8Nsx2R",
  "key44": "p5c38Po28aTuJaveDLaJWShdib2JJbnaZkNWwJUvoQrTvYBcEFJVs3fK7UgwXWizisVrGSWc2oXx7Z2wxYLjKk3",
  "key45": "33CWn9UXPCVyEMHxi6Dkfp2aoVU46VUhfdw7EKzbs5v5ooRPxEjPpqk3EUYer94WUsw2Y6h1YYoMchUzfK1tozX1",
  "key46": "61mjkMBKD5Tbviz3VD3PkZ2marPaSUkYv2K31A8msFheNnjfPVdpjZr2kWJrvwZybYZq2xekKMEb1FpuZgmYPgNH",
  "key47": "63XzuYhb8ssAmunMmNUBAA5jEUPNCafsAJSfp8D2V49Af23KXKQ73BrK69KafXyPFzgudJZSr2zznutXjht61B3v"
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
