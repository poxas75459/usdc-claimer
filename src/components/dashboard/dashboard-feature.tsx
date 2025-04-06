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
    "4p593aKWv8HFW3jYtgZkpU3764RvWdN69ptz7RLz3DGNyenedK5KMUKsNGxmmFGLiMyPhZSPMpsGXKqX8xaS33nz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "V2X31jwmKWjQgAXFqvBfsgbq2uq7Vw4Cf3r2rNJjhL8Gm4Ah6JComyXiHJjDCCq6Li2sjCEsm8xi7rgK5VmZKri",
  "key1": "zukwY4S6AYxsFe1TYj2Gxo4SnEAgDohhMqDWVUsCMXi7147keDLstbgLJP2uYpyJNSM8gJ9B2TER1VhjYeoeHTJ",
  "key2": "2ohZoTH9M68CEYiaSKZncXAd44b8bcyHi4rXpkZZeju6e4QQ2KECMzdFXKQ116R7KN47TmPZw6eh4D6aD6mm69bB",
  "key3": "2xUWkJT1b36jfBhzG91vFaHmBVqtLybkp32uedP1tegztiRRpx2sdvEEv3ax55Ji6TERLZ3ttBkj7UJgN3ywkGrU",
  "key4": "yF1U73PieRuzc45sk6VLzCZqqFfiMBcxFjHGG97huX3kpat4UJsdAxY5cTrPuthXbhfHbUvH3ATB1Cgh2aeDPoW",
  "key5": "3VzfiB6BnPJ3FD4Do1tpuQQVwgc8PN3u6wWGNiGBKZXw6SKmafRSkTsKT2MQqPKXYrvRbDS6ampQJ9GtjAPHsbeG",
  "key6": "2fjsGmm2VFwZqbpbymkg5Sjo93fv2YTKqrFeJ9Pp3Ysnnbu8ECZKZsLeZ6DoqQjhMH7nnLFrLK6mngh4QAZ8RecW",
  "key7": "PKR43cEKvpCTpNXGgmdUQ4YPXRXkkkcjjqqo2o3AjJpZHchmq16uqQ9wGxwx3VQwwWu2hEW2i9erbmmXzSrsdg7",
  "key8": "4Z2UJ3sHXQy3MaEyBDamxBZTUpMj5FsSscCnS7msjMTcophDPoEKc6JxMktqLDVqFm6rJn3WU1KYzScV5goC3hKr",
  "key9": "678PtNTJdzHqnYi4qHmBoMWmPhA7vpXMAAs6tYLrVqWTstnxDEdrezoduaV1FxfyZQZ25S6rDczjzYV82fEXRKZU",
  "key10": "4z3aNFcaLrYZfbMDSRwtaRxmEUqBqtGRKNCwCAvgoHjYRBCjC5XHn6QmgfhuiPSGFmMDeJGxppmiRrLQJ84Rx1oB",
  "key11": "3YxAfxJZ4KLjnQQzNeuiucPAn4QGEZdebjeqYM1xAazsF6PtBG2aut9Ds28gQLQLddEBFhXeH3cdmKdd6FxLHVAJ",
  "key12": "24dDGLwsefRq8KhkRXsmfokMDMgvQSurmVLMweQYAyR2VCA4w8Mj2g41AydPtoUJjduXpbEkAVZ44UdpPyduwWGj",
  "key13": "2Kf2oTdpmaBjGqyHTC6ccuCWK9zWzfx47NqtcZ9tN66Z5NfyhutGHWB5nwUCKaQZPSeadX65rhKU3MaBxyBBDBVz",
  "key14": "49VLXrV4FPEsP5orpUeAiv8wcCeesktPjHPSbvuCNuSGEe1HwL25u5nfgHQukktkHoRShzr4DrdWeC2wv3zSVPJj",
  "key15": "3hFWTUzv64gpsVhmZ9atDbG8DjwgFbxiJmbFe8rjrqr6KiVaXKURy25u54hG6uEtvJuZbX2WwARzZxcq7nfHSrT8",
  "key16": "XgAQHBv6mjHt1nMxgRixvwPEcw7jVaJqJwZPBNftKdTYBNWpzK1f3akH5Vc4jPVQbMxa297sR72SDH4iuQCaCB1",
  "key17": "5VSTMr1ssdMf76QeoH1yVN9Ug3f373o4R1wPk7UeGi7HRD5vC8hhZRsw7d3rXAz5k6x48oBfLN4Q1DUwMiGYd3qB",
  "key18": "vkoSBfMPa5P2UWutSohNVT32upfpQTFqgd7ZjbFYzUojqYeXf5bFX921LfokVLWzyT9KSZ5fjDqtWTB2Ctnejpe",
  "key19": "5PgaxTzpXLHXvFy3aVhtn7S1fjxsEdcCGXegAM5RMUKhqUj4k6Hr1G1wqDM29i1ayobGx6wTK9meGtdvZHsTQijf",
  "key20": "2ioJbbDm6zX9YgTjWJibT2TCqLmFw1Qi7gf7hgPFNWhKMhJczXBfdFWdmUPqzGvG9QQWqrpXMHvNdvhtwx1fdXTp",
  "key21": "333yMspaY64WYufGSB2LDygH1JkuJvxWm4pe4dRsfMkGYkRx8Fwx9yatVyq8wsySmLBFdA9qviapjQLos9WTeBAM",
  "key22": "2fseu7AjgVfmzFwxDx7qLqq3zEpLBAtjL4jXjM5sJ3mKgaaTURE5vansUzUGNhzLeMEzTN2sWy9CAcaS3cb7jAuv",
  "key23": "C1tohCptFEVoZb9KShyKCWqB8eHX7bPsXcPEJR7t4HbNFpMMiM9jYJNPxPDgtGgS94B8x9P86jSTq5xhzhPFkdj",
  "key24": "z6DNX8zCSbaHJ2J6GfujbFh9BD2fTv9HCXAaZ5YfrYTh5BwqMWbUftUoWXVaWSjHMonNNFQ95pt6kBP2xHwuSbe"
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
