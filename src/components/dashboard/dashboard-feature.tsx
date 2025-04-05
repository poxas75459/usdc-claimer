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
    "5R8U3jyd1SXiHSydme6DaJRw4wKxf1ag5Qpwuxc9DgmVKy3NX3rUgAx5AMar8g4iMS9hF7mD4Dq959HXGqFaCH7p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CkGELFx33FTzX2PtapkYERYzWrfseZawKAttGARGuXkLzLAobgKX8vrbA1AkaYgx87ezVZnGkbLBjipVpjn82oP",
  "key1": "3y71HMcAzUTH47PT7F34UjcZbf3gsoGNCD579KSexot9vWhTeRvQe78bAD4trf2uFabRBNj5PX4o2DeYVgcyFfUj",
  "key2": "5A5kbVyqwddaU2gayCG9oiUKcL3xXjjtMTH5J7Bw1SiMfhaYRb8oXYZ1wEyWzjTJ6sb7QaPx6M5vsntVb5Kg7qkN",
  "key3": "2FCWFM2fXD84PQfkWiKJDE4CogB7uKVuFHbG5aChKxjUAU15o5dNQ9VMwyfPY3ad6wgDEM8Tj7LZzyQsXyQGeJU3",
  "key4": "5HnsfCPaipBPq6nLHZ24t973fSMFLoxyfSxJ9WLNTh7GUWb3YdqLwckRQ6x2HtJNhzSQ7skiBPR2Bnm7rAM6RBvE",
  "key5": "2Mu778mzzv9fdncS8HRpsz3a5wRtAmJuFrbV9PTMWdG9Bg5AJMiin6LpsYQTFqVrinD5BQzu8exVMCmi8K6jPfRC",
  "key6": "aVE6Nab6GDSdaA5b96eyL3YZEGYZZTS6FC7jWm1bhYYXmzojKM8SrwUNnbCsPsgm3dZPqHghMgUe7SdGYmgSfAg",
  "key7": "4fH12wMM4Tz64U25bq6Vv4U7bpZkHCeLSrfYqehJsxc1xeYvNQb665xcgpWFj49AxaAEQTBYvRwwvdAxV8AzqUL3",
  "key8": "bbpUX8AnaLsLLEYPjQYqPmsPdxVX6bt4fF2NzP5FnDrfxv7sq5FyfuuzzQKGGGPVTiN9dK57Bgm1F4xgmhjG2oT",
  "key9": "4516WYJrKw833nrN2dXrW73T74ENVUGcPgyj58dZMS6mq3Bjgre96vbAUj2nfHdAyLg8RzLyWqhjy4PTb9U1XTYp",
  "key10": "5FBSkeGbsM31UpbtcnT1r2qAfqei4dydw2RKuWB4cULwb1Qn5TzBUiqXDciibVXoKsfg15tt1h8RWtRZcbsD1tPi",
  "key11": "66nEvqKTuV5w6KZcqXFemMGq5HijC3SJd5kTPejNA1gT1WUBqeJq9LRGnEtdn7ehGixcZNHi5ey3Mqa7YFdcKUhy",
  "key12": "2i4suwMSWV8h6LvBs7HeGRzNdVyzM5e6LrfFX2UDWCTvhMZSAH8zJ1LostSuCLgLR1u7R6kMJ8urA1zmnL45AC9G",
  "key13": "2dXZyoLjqWNgbqJwNg6GcBSchnzuN5jS6faJ9HMcRi45UXWPmcR8QVD4TZJbF9JCUQqK2dzmMLDeQCiwREod6JrA",
  "key14": "KqfgR1uXUBirtSPYADEDJs7CH6LQEAaRUdeCjFReyfujUgdrFCd4vfjRxtXb55FRcdnwS7BwEnJKHJPKpgvNcJu",
  "key15": "2dzXWvukgea1jwa2haEgzETvFUbgpPnC1c6UaXou2y5BL7GwZtjPp6V3wqTBbeEGTTze64pn9CsAMExkRGL3QW3P",
  "key16": "57EwRR1sK6dWUBMUwFVNC5uCcm72FVxzo1Ne6CmtrRzbmTPivYfhN9FHcyYqJyLdxkj1QfKV2vJ2vi6sVvkWxMVf",
  "key17": "5nHP4c3APuMgUBtGpoKcbvTNYQNvZWk4HfHhpcRCn4PHCzf9eXCj8D7bmLR8Kc72bdjUHm8pRQY9spNV6bo7zE4E",
  "key18": "j1DLpHugd56KBfCMbox4BMzfcxQE37Gke2a3P6aLWoFMbM7FAsGyiyUxUWQhkqcVfjduto8aD1JAzqbQoNyCsxM",
  "key19": "4Dc2UtgdmUGo6rXDmYsyvYgLdry3WaNsi3zqEqA4SVfZ3ifmGJAu8mbhKSrvDP2zsM356hGXWPSJ9aWNzmDHDkKZ",
  "key20": "3LvwmiufxQhDHBrDuvnJwikw1ebAPGhqJufDDxp5EuxmtbBU3THJEQFkr5x9Dp1hA7xh3CxijBbaSmP4Uzn5nKj8",
  "key21": "43R5nzy6a7zjEhkgzKSbo8euVA8KwdqbFyohnfWrNxakRZyg3HoQbT4hVFAHjc2FySZfgASRkp5CKzH9ud2byYkq",
  "key22": "2ML7p8SH9oiT1NGja1a4LGP9iV3VX4hyiyHpaN7Tdnka77C7ZGFcZYiRD3tismJpRsb7dew5FYeAqVKBZcz1Bka4",
  "key23": "2pMp1nQKzSdyAMuU8hjWUcMApXwKYZwRFiM62jMV954afP8ubRP9f1bqzVXmypXMnCVeUHhnEuBEmrLcp3ALAJK6",
  "key24": "2qKzPkacEX3vNjtFnxPDEPZ2WxdffLsy8GqoyJn1YL1QRdUE7SvK5jt9T23eM52J4Lzogv1xWsAgHps23F6zgq9z",
  "key25": "41t4qwaFQaanRHdyvTLhD4nm6DNbmPJcvjmLVkoQMNXJE4twGt72PGkuzCZ88Z9gbHYyazfRpdawAhAf1x9dFeTG",
  "key26": "4qUPPX8S2N8eDw75nDiV7Raq924qVviBfSeUH4X3rj2thNJuxwbdwx53igYRPZY3yTtLx86GXwXuR7nC3274aueH",
  "key27": "2K5WT5nMwwqqck6oH65Qank6G6n86c7r25WK9KpHkFGCcnLVHMvw5zYbKXCAimpRskwKoTSJw6qNom9gnv37odix",
  "key28": "5Kb7UoWHDjgX2oKyYZepCdRoNoGeFHyZN4SAgdsTksXm8ngSQJuSkQNGTNqit8kqYA4ZsHLhdsW6Z2571tFf8h8p",
  "key29": "4YvHrteYZJm6zEXf2KVDiJ2eJojQprJFVrUNR22AMMBFWpQ8XRWW9xeAQSguGCBuk8bqC9comh5zpVnRbqFV8bbk",
  "key30": "3QcLufqVUrxr4Gf7me8t8dgbb8v2QbgeT66WzoDhtc7zKtQdBZ8sAziKRm1xqs6Ap1yjw5WB1zWXZcrvCYPypu49",
  "key31": "RbB5Ex7goSFdTy1zMTLgJ8mFRkGwkDypCNPkQ1Wa2oQMDcyk6zRA7Qp9nLpp22Bwb52PVE6ZEjb6kQV6uS1UiZd",
  "key32": "4mV5bFnwvq1aL9pVXwf8Hgp8CQz4bC62UX6KysPWRtBErKiXcrrb4QMbhJBR21r3qjjVhvjmxn6XmEwosoEbLH9s",
  "key33": "9sNecfBRvQEUF4Jokf1STgCGVa7NbSVFknpWgYVDpX9VDgctJiFSCicBVZfz6ct1JeBhYouMNB8PQNP59ZF5tu8"
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
