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
    "3jkmKJnbyMxRVwFEjAvQC4FecSNaSErUiZPzhf8ULpKvkoGvYAuWNn7HXnp72NTveidABiRivUAuLB544qpPr5at"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34nLvdFb9SV5bdEBCLNPecfXpx9VULc7AkP6QKrPkFdLF5LQEmBKAx3uoHv3DWmyT8iMPmue3kn82knYvq6M85gv",
  "key1": "3LXhisTNhRpmmtCq9VVh96gdw1DM95NeEpdfFX2R6sZaMauJ1DjuLsr86ProSdaNmTHWGPYvp3BjJ8Lwm1CGJSDc",
  "key2": "53akxnuFyipUTQmQdnvUsNv5eWTWFZS6wMq6H1vsvpCKPcL3Kuwwk7RmRQKyPLD3PauYkLtCLyJ8ezGPAtpAG4Hc",
  "key3": "51AYmbotKtBfHJw5VnsdkLpBPZ8HYWwNfEHD23JYZCsnjR2NSPgnAiEznsUcEZD3sW1y41e9UtVYdpa36TtFB2Nv",
  "key4": "mP6CAcCucnJo5M78rwB8f27W9g9uifk7Ggmojiv9N8C8axefqNCoHqJv4WEybTFb3uFhPkJrHeksYpUcd8YLDwU",
  "key5": "3WBZfCsUSNSifxb5ZuwWzW3B1D4paupqLpQMij6mY25tfhmZR2STA7vYJbaEQmhu2Po2vmekxCc4Z1gQg7v2fGcx",
  "key6": "3tjmV89Ta8fwuWqxf7znFAqHiT5KnyCQoBi1fnUxZXB3TmUwZf6hTjYoB26i93KgHqMiZUvwUdzFzforV3YaowxC",
  "key7": "KY7zBjSW2TyPcgR52eAedjDpDSTLq8sFfhE8nMd7juMLAHaCbqc2bpe5Ee3bjwW1ogyX9G4msJJd6DWwp5p9zQ3",
  "key8": "1kXffkTHFU14tp3htMTy67KLDgz9NrwMbSfgGteQPGn2mB6WLXQhanQH1U5tdcDSscdUqQNbacFTbjvqxGJCQMF",
  "key9": "wkeoLjQY4SB97VTJnihnTVm9uKBhn218jCMUMwRc876Tkukcvbe1sWeqKJ7zEa2XnZqFp9a2VUb2mzQiZgVJNP3",
  "key10": "3PTSdWScEpmLHz7uK94buNoZpgforpPJMpq5v14HnCVSZrg9ws7zY2b2fjN5t7xpLDmfMWt2RcbBfvkJ662zthFC",
  "key11": "4ZcqTGt7824j9eQcCukbsai5UhrGWvFug7T9rwGYY6ttWCGsmdu4mGehEohT9yFrTnjpT77X9wfr5ZgkYXLXBwns",
  "key12": "4J7odjMfBVN2iasTe5joFEwT3roGyAn2XfNDhUkayuENpbvSArzAicGyGKXtcoj8sNwnicriEVEdQYEfCaQ3gMZP",
  "key13": "4UzDCp97MYMVe1w4PrFMpCGJfFxWFgj89FKpLBM8kWn1PfEYcjXtX8iZk4p8aUmpDcWp1qPJT5DNP7uEWJeKzDv",
  "key14": "2Urcw96NMBDbTyrsJCnuMVjhcVQhqBm6sMGsfzpmMjuPvfwGttLKQNAgCMhGf78RqNNUrnxsZtUoTVRD6zKfH43z",
  "key15": "5Qs9tzAuBguUNPmgyE5AEKFnb4vQoigtVGnJeYQoybxrfjxo2SmgTLti3iidCfTwUcuFK31k7K8t5fFYMcYnCrd6",
  "key16": "5fet25wyALScpnitf15NPYazRAxSVkBzFt7MqWLMrVwat2HAb7HHR8o3YEHthdq31F6pVUrt4yvusrkqCkXJ4CWn",
  "key17": "xLgrsbFp5UN4iP9qcuxpQTXWvqjPUvZzCXyhWuhVviEqAUXJtgbcmQXUB2vMfrLkwP3ZAbC5uBJER7WWtD6L8sJ",
  "key18": "2TCKZXvVQ4mF5dFsM1YYDEd2ZTDUMLp9aukASRZERFWBEu9AbKLW5b7mWuWDmGSUH4kNezE1WXrfywVAy7LBiCR4",
  "key19": "2He9ggXWA5mFZcButAwKYBNBtLNsYZsLkeKV2k7m7t67a3k8uaK6ExTfgkAhgaJASZypno9wGosiJNE4TzJNCiqA",
  "key20": "YzW7dVW2PqhCaVE4A59XxckWNjjJLr5HSj7zVGKGGjitqo4wZxKr96AAkKQDcQ4vg96M2V6wSjBbypZ3QUdVWgp",
  "key21": "FqeCLeciBsEz11Tq24a25wLVdbRNMGueXgtMgtqofcPoeTkR7Df3NwnAHnajsULWpJbsJ3cCg7Sa1mHN6NpReD3",
  "key22": "5bSLxC3zCLJWNuwJPzWNrRTQePpUfbJRKaSBhtWSAJUqpggBrTfWU8NGQ9bTYieE2y6Svi1zJpC4y8tAvFCUBDgX",
  "key23": "9ncDwqP9BmFQgzXgExBm8ytDRKRTGQ2oRwisjhmUYMZcJw6n66x5sub1ztoQckprQUrUDZqcVaNnoy3iQ1XNLWD",
  "key24": "Yxy2tGm1saqW54xREXAs5fSsaXsA3SvuHxc5xL1cmCcraPJyoeehQyQBeT4WkutYgu6CE61RaVMmxnbLQdB2aK4",
  "key25": "3SASskb4AyG7NvQeooHMfgqTufHbHaj52ifXCURYqs9UEYSdVJgKFFN5Tu2y7BKQBnP7o5qgcJke28RFDtMYEsjf",
  "key26": "2hMLEfT1sSnQ53mPs3oxaqKwXGHPsDv9CSVxTU5bkjgSRUpUUBXAG8b23PvHoQhh9x3rssb1S4cQFnKJPJrRjF7q",
  "key27": "5qZo3qMc4UdN8fXoc1vqJzs6ejFicVzDzhQm5PdkqJU8n4xHDAfNoUydGQEWbkJM7sUJSwP91SmZMEX9gaWvKBxH",
  "key28": "2pNY9a8Vm99HVrcoqMWKVf391z59vktumFojJehqNSxrFiT4GtXUz8KtuevteFL9uQVRfADmLoU34A8UduxAuMvM",
  "key29": "4RLMNFRkDG8ZHECBTEVvPtNYkvsX6B1hbikKhWzpZ8G7VYyjpaCiDZFpks5KSSuVmZNKsnC5EnRYgJ4acCeqVQ3",
  "key30": "2rYh4sh6mNCkYBybvjkjbf71ahGJMxp9Kxmknf51oegh6mNhgB5ygYKGAvDSWnsGhGDL2sq54XvFFnAtjm9vZ6t7",
  "key31": "24EcyrtWD29NLqp2gedh8qRqEm1HSnGJQRHFLazsU4i9RDxrN44bZrMSrtRrxzG4GXEFTT1sHBMDjsXJZaVwz4Ad",
  "key32": "5wM4oVXag8jf4GEEqEW74xKdgzE45BmXam9kTsMzRWcS1wc4CginVAwVi49bRcJ8H1M9mqVpdebUBuZi5JK2TU5z",
  "key33": "5fL4FjAq3RSGeQLfwrHVePfCugzbJnAb2KStcfJDLHcbhn6TjMmjsZPYHjDZqzijDqZho4uaTZBu41gKfwxkuogB",
  "key34": "5MydvP2YY2vfL3AHc8YVK6imZKLD6LsfHDqcSxm7cBpxdmVko3MFzRrpmhvgruHkWeuB7Z53zm4sZSvNjrDm4mBC",
  "key35": "5JPEKnBJsFJE5G6s29yj6PYqkFMh14wDKzUstLAxEo6BBU28fDNN9SSpc6XKh9kgVKhCAdRMVX1QbBKvRfZgtEZH",
  "key36": "5ggWXBV92ew3t69owUU3vx32ERsEz9HDitkirmnoHyVJ2QFi4EpvEdvav7gpG9fvLYowomdbsemsZKTZkLJaJx8f",
  "key37": "3bduLrGctnLquVDFBW9KNkU7hjwfLGe1Xe31fz6paPxgW4KrrmQXidb56jFrApQpyz4J42bnMoMB2A9mPQm7nffs",
  "key38": "2fqqcsfwisWNnULoBJWWjzrE2GM4M48kiDYwdq47zaE19zWMm1WfUtZBzCUTk69w6CSLwhpobNSGSWcVZvz5Ps81",
  "key39": "3CMGue6HUPJaghENToPc1gYtkX5MsPERzxFa2jCNYJ85gxQvfTWDyfTRqTwxCjKV1EXaNBdzooNgwdEwB8qvH9nM",
  "key40": "5zPP2kVpR3HTMadxBY5j4M7cDtXAPUqqAUPdQcr3CWgT8vduKBq3PfRafCHjYU3XABWxvG5EE95o2KcHeEAjX5pG",
  "key41": "5agn129CtDdJaZnkG24c4e81QxgpJYBjxmfTk97AmAxYhRMxsoyPDS8HpBmCZf18pHydbm7TY6Rz4MbN1SaAf8J8",
  "key42": "2Qvdp3nMsppkShn8g3sLCgVV6zMKP7FzXSfo466SP7ct8fYnNq9Zh1Dz6Xp2nrmsAJtcGbMtUhA8eYMSnsCUuwuB",
  "key43": "t4wZ3AjPQKL64SUnjNTHFJD3aKV5Q2bQfYEF7AEWkbXGwSbGsVVgz31nkosG1MjGvj5yS8cp8oJBw8xn3E71nrm",
  "key44": "5GCQjzraf9CV3XFsgPqpduR1L1AP5CqWkE8ZMt4HciCALFR1vcXyfPcg1jRyYgaunAocKrCmm2797vHzk1kLbP1P"
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
