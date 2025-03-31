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
    "2nRhfuvj4mS7gZL3uv3N3W623Evej7GEEP1ft4ZH99PrknyL3bQvwxxkw7KGJfHD3v6ABjRuaw132y1d1M4gnW5L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46nSFsN3gQqYhFm9cdZfJZe25sfdSzEWbjEhkVtnrc1J2DoXD4fMznsGXJkTifTKgppbB6tczVYjkf55Y2f3KuxU",
  "key1": "5NagicfrBKnhxHqEy4ZnebXqFxpZfe7AhRZWWPifiJGDB6aoSf8BMvTawmAFUcUNQ9seLjix88QdyfZUm3SZR2DZ",
  "key2": "2U13x2DrAR4xwehofcKeGAB6HvJyqEzy48LP5PE4VefbwAJ4s3RFgLCM2RtmEeuLL9TjL99uirPacPLZyLacWsTh",
  "key3": "4ZQFw5CrConuq9Q933J3Kvyz1gDTt5QeKLPycgJbzsvftJs34TcosdWV8XKftXUkofgef7CR8jyXPjCFbgiMTygt",
  "key4": "4AFbLoURLt7ZWcKT21fEKzKc2rdCNBazSu6D1k7MyGx6cwkvaJgaCnpuuJS8XRqx1WB1JRuwAS8oWNA7DoDppYNB",
  "key5": "5jzi1nJpxfAjR2emQvXU9gjnvZArYuaWc6XEas49DjGehb6UfurHcsF9vwtBiyQcquarPSsyjKzt938pWRhGc29q",
  "key6": "2gHX7LVQ719RDYi2UfQpr3s3dnfTX1ADHRpEaNXjWDV1h3oHFsjGpx2K2J5CMgNuRVMe5WDsB7Cy4B9RByiee6Sx",
  "key7": "KUR1M8B9vLzMYEdwQi3rp2ustj6LtZY5Z7iRcmM4Uk7cNsHkTzuj2nsdrmm8BZa91gnvbcb5Kengt5wCFB2e5Xc",
  "key8": "2MYpj69vb5fYSdxhK1B29n1HwcmpwGUhGYfXRfuahgERbso2ZbnnutePBhKh7azzJRS6juZU6K9aRBuaqLfXe1rn",
  "key9": "7Dftx2x4MfFHSahWWrk2G8aa2JJSoHwQX47idQVBdYfVnFcLMYeGEboi8s4DbmWfENJaE8pVLKmZiELPJW2RHir",
  "key10": "2XgCAtYTbQrhc7GBMMy82BXiy3oJkunvDQZ9Yd37BexEvCditmjs4JjkkQoVcBscLGYrwy8HrMHwzMv2eG4V9QQW",
  "key11": "a1JWQpoMUA9FoPKBeGjjzmXGSpo7WyJo7yT2Z2AZGi5jihcy6oBUkVymRbyC6P8iXYECRCDtZ5KRdUkanoyQZpz",
  "key12": "4rhQTf2ucpeCiM4ckPQxmb5o5UJNRQHJHL5Hyi6aLEKxPZT1vpzEWKqDBL8TrS3PG5X5ecdhLHWmMVvUi1n81fyq",
  "key13": "2yf26L1xNmWWC1Y6U9ZZVwgqvSYhfircRRYhvbRtRzcFicpQcqdCTRtU3fyVdKackLbSSCMtzZrPpXs2z4EsFkzR",
  "key14": "3VUwamEdBcX9WvKX9RYX44kahfP3xb1495xju9TKLLbjHVHxJFzxJqk8TEjLPieGs5Zn9SqbkWdBu26WpwUR71Vn",
  "key15": "N4j3CXChi9HmwJnonaKswPKPDfD6rrG3PPWh17gd9jyWo2Ug5SBqJm7HAxRERXKZTQVp2zEcuiQ7nTM6SW8zb4X",
  "key16": "5igwyvivdDAtx3fBm23MF2eivVSjEmC26uEKXFxGMK9yQhHmFNtSC2tz3soG8mJT7v1FxE2spYViaNsTYLzotgRw",
  "key17": "4xPVfFepV22DFvoB3TrbU9zDpenXQGFXfMZfcE5g7kK8S6gtXggbsj8qFbb96tq4DmsydoPqKZnQ4x5Gz3T9gstK",
  "key18": "2qg3zajTvXhE7iPwPEhx2nGZDgyD3U24CsmtXs7mRSPHEcdjciuNS4s1KXs88XfGLRHvTWtQs9KjUd3JycQY3cxd",
  "key19": "367AqqXLYzR2KG2nftwW5p9Kf5PhWm2xYaswbCqBpUGqL72S28shabnm598mt7YbuVr2Dx2RXtQ4AvtoWuvdL3sF",
  "key20": "2mwZiWkE5vquLNr2VTH6rkw9g2yQUrNAGZQg2KdBXMupGKekijQJa4DXsbmxAZTv4y5VUP2k8iH6LGwj3hxf3hVA",
  "key21": "3a1J59BijGoeAgXZGukeyMVsBNjFNRMdzzjeUcxWfoTpaJVadXe2mkkBQeq5D9XzfnKXott3UAYtVsK6cm2GKwPi",
  "key22": "2pDTTxHa4y1f1wAn8fc8e2W2RTnxYoYteWnSrR2tx73rApjnqsxKcr2aeGCDvMzeoK4Yu5R1JBBycWtZFydWdJVP",
  "key23": "3CaQErNnwvk1JqhD1NGu6f92CpdFmPk42b6W2MwGWXJveU9SDNj7GJSpFNGi4TYoiHFchj2Us5F31vRCL9ARq5iH",
  "key24": "4XczfayMSpsTi2sesVzJfKnswTz7aDv2SrRY5KqXCmb1aZMVVFaUjXApxUmY97VSfkRYoT7KwFF2ry7WkhTVFAuC",
  "key25": "CmvwgQuquZFcuq9Nq6Nfj9Cw2Bme3HtwMJXvaYyjM2c9whzPz7MZruyEX8yKMuCmJdpjjah2e7Xu293dtndtXur",
  "key26": "28686ZkS1JZNW6aT1pN8Srd67MDwimy7qtUQFT28PfqezFE8paQKQxnjVvmU9QZi8RnpUr97ubVLxGDpGF6hcgYQ",
  "key27": "4nt6uh6aUZbJUwb9MiWaVP5KTU78qsDAwh5v2FTJW54UiGmqveCtbH6uCBLFjNaPcmfmSw46xvKydmdHWB11uugP",
  "key28": "QmCwNSBV8qmUcncbEFzage3mWK7CGnzyU64ZwbhsijS4k1FjA64xZaGF7k4rNinBBSv6smCc2TgQbdThWsfPPCx",
  "key29": "64tiRXmx5f1KPprxKRm9yKSoPywHZL9LWAWD9hQ6QMMtdRMneG45Fn2KkFUoxT2HwiDwEqanjK5n9xemeudWFePc",
  "key30": "3cRpjjchhgpUEWWhF2B295s8CHFfcVKX6qnqvTjHLMHtSM2pzBq9dZP5zgm82A7LQxvtQ8aRosdVyH8ZKPqcawDB",
  "key31": "xpLHxWGss47QuvkRr7o7P1UgdrQjSmeRpPmbo5XhXZt9ePgyizC55Tqw8vCDRWh86ZseVbGkEmhHK5hKXTkAGFh",
  "key32": "3Jnu73WaYrKyzpHH8d2zSv7GnQdSLUJaWcjKLkfXEZq55z5AGxDG1DxnaZ1zPZts3Ce9mZsDMoEqkMXEGRfdgCbQ"
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
