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
    "473x1Nc33MwLD4E4xEGDBjb3CD1HwxRetYaLd6aWUmjkv4L29EJrbveMSE2bdZKx9FHUtx6j9NYuA6nvapRQ6ksb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "b8mjeWm9J6kAJHp4acxaZfrhbBYURjA9m24J8pkfUXE1WB5cEy7sm8K9bjGiqEds9d1ygHN6PXjCrv2WME4rxMW",
  "key1": "5isKe9qh1cmeg3z9jCKzycDvf5VuDs9MY48492n9RWGTzt8W2Nw4KgPSRqTTD6mF7frXM9DaeAmUvpuD43igp6La",
  "key2": "51YfcVGM1p83XA9dM69fjhytnMzNpAx25FvA8equsfDYJDyasCx3AsyMiCVhv2pCy4JVj6F1eGsLFuswjPGmu2YG",
  "key3": "4zAggbrav4XsTiKoPvYaHytU9DhDZt5SZoD6dwkvFLtRRxwkyk9FawmKewA2UvfF4hwzan4uEBSVTzt53EAKy1z7",
  "key4": "e3UQzWFWX7rT2CvBx6x8p1EXXHZi4U4DCuSQximiGHDmkjWRTdmbTQtGFEtNdLEEaUBJg27G4RmaRumMeSdnv9r",
  "key5": "3HBTK5TZ7ZFxoNw1xjq787Kuwm6E2UdzfGUaLqT1ty664tc3R73cSZLDJE8HG9a4jDd5sNnVtKXCM3RHJTiXWGY8",
  "key6": "2zhCDu7s4Sqv1e6zvoHDgMZAP2J9EfzQTMCcGH1SbgwKyFfNhpRmP8Sv6pCsux3GMViBspuphQZeC7dE1xxjrpL4",
  "key7": "5u1TBG8imPfB491gugmiAEbaqpTzMyDkoeZKRuRVf6Tpc6JuDes8gu7BFA5U3zmfVHTFQFBHEWBMbGtycvJpER3K",
  "key8": "4Emyec6bdmfbUXjgx3GzcC7XuZhqVEvTfwLwy41j5aTJrSJaLcaGQu2upqmr9C5NP9Sd6tEzbmsCTS7qTTAN1spK",
  "key9": "VvtRAiBd3uL8dXaQaQ8CefcA4bU3dFeWCyFipe8MQn1xHtFo6DgEN1YjTfJ3CEZkEKEKpLFFwhmUoh29qQ6dJPR",
  "key10": "2skcc1RXDZHorvDcCsJ8BygmYvdDsX2DkcMa3xSbHKBB4TXNjkVeK6xtMF3LyzQ1gjJXvb2Xu98m2J3fbPbXfuj8",
  "key11": "2umxAsDP3haRajkt86HCKEBKUbpggNv2PBSKcJtvsuJwykZHPcPoxE4fDocZhqRZeFP8gwGbPndyRY2tTAT4MJLY",
  "key12": "2WXVZEwyA9TbGgYLmTUSQ13EUZAB2kvHz3EsU2742h45yTKaXcdc7qgedVpkDzUPh3P3YoFWn9nHcU7RsVmZcivy",
  "key13": "61X9Qs6G3xdQQUkmKmQhFijeUbzeT4DiWTpv9RM5jHgXXuikzrWiLeKwYwKxSdDiGYwe6hS2gUBHoW2xoexiyNkR",
  "key14": "2Syr9zSCQWRdj3MAY9daCQ9LBSYigevaEr7GrSPsog3JqUmH7nuPeYZXbANG632vQ5bB9yKFRA7Qi46kCJjEyWQn",
  "key15": "wPS8d1n72NGZdH3FTF7HLPkptyvrs3eketwA22nnmHhjix24V6EQw1i1QTSZjDwfiDona4hy4MjPNeU5ZUvEU8B",
  "key16": "3UYmYEUoQQhNeBRdKEhDr6qwvtzYoFgMAQqpHXZuKi4fzbtCGbbbECfCxYHsrqFJhP2GmiDwqKpXY1owMEsAWNoK",
  "key17": "5rqXWhCR9ytLjrGPy6FxcE4cCbWJDH9Wr6p7FpPnZMbvrbFAFLdYACxoGALNy8n9ufd87Ei5Rby5EfTpFxvPTN9t",
  "key18": "HwzgPQgtrs9QAS6n1KcA2VmZRFetGPoN5r2752W2nRxXGe7R53hgzj9uGd9bw7xJB4b8dvD2mPYw1w4gDbL2ssp",
  "key19": "39aep8GMMejkfjcMNhGR5KeJbnzyyqvzEfBFcShG1QXTJqj7YAv6UKsTvVvPihwqf5DMACdTpCH1xfBCQiVLNUEK",
  "key20": "3xvaDCdN6tEJ8v8B8sLq8fCuiSKdTc887XkKFRMgEM7ftRnWKfqGgy6yeJnWJkAuPAe7ZBq3j2xnmUgipKyQ9nHG",
  "key21": "5pyNwEbZYJg6TUHkzjyXGYENdH2MCJBJ6pxa3Fa97AEhgYYkYMt9zj5GQ1DaEG1GznQsunNZFsgNhwo5LFgef5rr",
  "key22": "2pXLgHt16UMa8SnLrsUeuBZwWWJsWwtiB7muwmcnvponVqwRdeG5uhcSTgG4UJWj5BU8Le3n3XKV57VxDrMwKw3L",
  "key23": "gWzghAwDdSmpzkGpjggeoM7V4k8fbj8BQtmmJY72noBfMSgfbDeKQhutqDhtQYyDCPdbBtirHy5dqk4vbuRPsCR",
  "key24": "61xB2ciRjDRmQscXRZuKBQrr8DM7hL9N1vy2dchGAVhdB8eEmHqGC97a6S179aUSkr5BZod3HpP9kjWNGjD6mEZf",
  "key25": "2W11fMVBdP3vu57r5QXNo9a1fQsiX6WSvRLDKRxd7rRk729tvyi5qGPPGW7ZCn7v6KYFE6YEYxZyXAYYbvof5AEx",
  "key26": "4PyTEUV78Ezn4HHiJv6k3YQi8BRS37FMYFxv9qxkei6WPtq8aGozSHnrgoLEL9xKE1VBP1SnN4vXXdbTj76bLFTJ",
  "key27": "4RuzpjY3tknbLoW4WfLjXG5jPTugzwxPP1t7HzyUDRecPXVoYvo9FvsmKwHchCuZGsCKESeS79fonP8HLjkJgKPA",
  "key28": "4vRFJZNmeWYPFJgfceihVjyHhVG44JFFvgwY33PRNkCyo2rSLxTQ45WYCXYvAVxQc8F4SPXZmZYcW4RPTLAb1GAQ"
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
