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
    "4mnAf7TpUDforJzusPSnU5zFbDGoDjhVjNDEbDj8M85kgEfGZXgCa16m6cpxoyeHNtLCq2UwhDeRSrDLQcFfSBLG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3K9FLoxV1jwkcG6ZL3gFd6dzunzzBQRN7bwnYPvh8FiBGfXX5X7tvJczLHddrN4HHh4SLyySEwQAXz5dmrFGebzg",
  "key1": "kEAc81WiWT4sofG79eR8C6MLakL9fgFnQ32EHDKYsB1vo8sednsvjBDtFJp1m9B6aQ8JyyHNLFETjGX7uBPBpkR",
  "key2": "4ekNd6Z4nk8vv2yMAzU64BpueyEs5zb2CnE524W5fHcuxUAmT1LFVvMMgjZJKkEC6AGoMouSnZBkdeWSFaM8Vdq8",
  "key3": "KUsgMuq73SAmNxVyaBskpvT8SbXnGimXauvd77ZWuxZoNPYRtXHdVRheotWB1QWVpD7rToABsAWAQCuSh5RabsW",
  "key4": "UKbzr1ZdPKmGv7qmiQvwqdtaAQnSBaVfbLeGE4mLzJ4keW4cqNBVDMuzBVZxgiNMVL2wgTZqzrbwqtMEfVtN6dV",
  "key5": "3WQT1Hp7K1sKHbfjtdv3BUj6xtHtQeiAWjPQSpB6f69ZCPd8A4cNqoSMR226af3eNFA1r3A7hwFXiYCKEYUjknkn",
  "key6": "5xnAonQ5ZuByA6JpF1cF5UVZeHtMdBbCTspxAwWw1E8u1xugst5hEQg3KUyZijqynb5uy5hAzYX9E42SXpUxZt19",
  "key7": "4bbeugoTqP3EAEQUrfTSeCHPDRcAEtADFebRimDyeNUh96V4aEUgRZfeQzv1cB6abe98pPSooBh3TNoqBmnLn31a",
  "key8": "43JVywYjyZoD1miVM5oeTuqGy3WXtVRGprSHYCzbAwZdTcWfZLQw3Sgw9N46uYCRMgEnX4YaFe3JsYdLBqADksff",
  "key9": "4ifEuhqdLcWenjsHKbpdRtvkDEZouxswhEm41yAvZ4CdwXHEGXbnnt3Zo9RcpNvTVpQJXoQzBySa1WUnCS85Rr1M",
  "key10": "5rfFtQedwpJkWSmwDwq35DFqSML79G2AXkPenFisCDxh46mg7qkgXqnF14DbN1AN6Y7pcAcT3qPpEpa97WHTVpRY",
  "key11": "32L8eBe4fzN7YGSYDaeMAT7gHUaAERKKnBH3HFdycLv3GwUFtZuyW4ZfgkbX3eJVATcLjF2CWdYSb9vP6J1puRT4",
  "key12": "3meo1M35u2YBX4bNodMzvGhwzZhaV685UsQNw3Crmq4F3LGUpqgfsohKWbqb5ZfQJfvQoiN63YZYUZ9QFS8QFzg5",
  "key13": "3qbrmg5dUGqmrbPjd4SciFcTwVPznDjKHhLqJxkTDZX9FkxxTeVAcXkPRT8yUSVj6LBV99c1Z98M9uRwkkRmUerT",
  "key14": "37FTQ5QNGz5i8nYQ6qGsgd5KxVLFP2wq5juWpBwBmhf2pp1dEaJ3MVqgBBJSmQdiJRmYJbKDME73tbkEonP9yhVJ",
  "key15": "5HytiSYnfchVEjonDK2Jd4Tzx9oioMXWqgmnenv4TVs3zYBkYE9kaXQDvDaFcWYSDWuX1mVbFEfJwMGFpTxdFKsS",
  "key16": "47b6h1SoVdPuBwM4DJyxqJm1GxsiWAvxnZH3AMtvxkYqXUvz2y43NJHCCD7EagMEvNZYjA5GT124CBdkj6DHt2Xo",
  "key17": "bABkmAncm9Ygvp3C2AFpd8htE7cP6X5zgbwZCtFDsJokdedUcuXMoNGn9C6hz9yZ7KriqFB1QrRFtfs8vbKhBuw",
  "key18": "38v1NgGbGe4uU7MHgaPtfAh21K9hMFmEHJeo3yKFmSsrorbNpHtrznWmx87cCuE7g2EEECv7dRKiNKeSBv9rqrC3",
  "key19": "386iprWV9eVaJJxWLKMdHy6VzbkLWx9L9PV964Q6buw9zJcfmmt7pX4YmnvVd5kd337Mi956eqnNczS1C17hmrRS",
  "key20": "5fsEj62FYwRsUVK92iSXMgDpm2DJUNHj2dCQamxxwWvnEmtDUAFKioUEURjWTqPKEWtA1DXELqJyrXLG1yqoNXn",
  "key21": "mxaLFueVUxE97DLgZvSJ5nQYaf4Ekso4537Tdw5Cap9K6dt8YEW4J8P85EXxmZGuXWjTJvJtWjt6SVG88mdTY5G",
  "key22": "5ZZXE5RF3DxTQpT2iUyY1nmBNbR8V1nPta8F4zyq2bWhuWxvk7EwxoSEwaXrsGgxedjenii8Mdg2roBTaW4hYrQs",
  "key23": "NEksYyGYvz43mzahLJb1cPQczWNJPozVxcsMmETfcBBUh57vcwdosAXriXx8XEerSzNoxh6bu3WsVm7KKQP6ZkJ",
  "key24": "evmFAXsH1CMV5JHQEL1w52gcZ6D3XFrnMpeAcVL1pCtk5fFdvpngfxJ9RMUVVWKpSnQXP56HvEnG14TK7cde4FG",
  "key25": "3ZMz8197PYJgcnQNVSFCKfhafSaJHdMexLB9CPdd3M5C8MvYdZt2rsCfjoWkjevSFe7jd8zCgGFHeCsK9KGQ3zEY",
  "key26": "36oKxE6WWPrZKuX6aHg8NSqhpNcSXprnfgQN8MBPFYMZ8xPQTQqGK4jfJaHeb3bjSEfwkdY38d8ch3Ugd191ptWJ",
  "key27": "21EZRkwvTSLwVen312rUsuwZEQPA8nCnYPt26wNQxtnN2KM215FKznUp4c3dx6JJQ7cJNTL2eTY1cMRf414D6URY",
  "key28": "45MQSm1J9q2dfJTtpFTRB5PNrQcpE8BypuFzvxAt438hsLLcVh2pniPNfjtYw9fYKinYgLMTxavpHnViBssEY4Ft",
  "key29": "XxXAHjJEKNUr6YQRGLiMxeXNstFSET5isS66eG55QLzSTYDknBcq6ehjQLyNFdjqHeGfX6Q3brpe1vUZY959p5E",
  "key30": "46AtRpBWja6E7MbHPYCwMZ8GbLFpAo55UJJfqUrEJGgzHw9GaGrowqbu4US1vxBP9RE8rgHvVzR13RAWmDvb5j2V",
  "key31": "3GRZQEdg3m62v2XkfxojiTR8Srv4hHSx2fbuceVV2fAPaGA7ddrq4kKW92QcRLcvTdJaACW3T2HVZV2nmn3Npf9m",
  "key32": "PuhZ3w9mciK5M5Z4RHkthsQGujYytojY7TEwCqu29gHMJevpRUb6g5M3F1Ln96p3aTMHhNMeK9nvLkHQR6NcksA",
  "key33": "3zGvW5e2HsVYYb6ydjYrFhgg26EBLgQboxD1DHawEwdPe1RwWGNrp3Az9akuWYCtyjWHFjoUBwkTWFtpHZzu83Hb",
  "key34": "3LzwYmEwc926iPu81g9LiyTbwLrVpgtDx1mqpA3VEyvQHWEBt73yzME6u9qkQMnzmTrckgg9Uf8ffVAY1Q6N1RSX",
  "key35": "4KyvVPnV3zsVsewvqbS2tticFQeLXsXve2XfMbEKg4CC2vtwi3bWVTRgEaS59DJrWGuGgJTZXdFjXJqFqeBiYoL1"
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
