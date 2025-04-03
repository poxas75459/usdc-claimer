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
    "2kgNeX6pSQqazYcmNdrrQuDGRo56ofkEWPdrX1uh7kVWd87ihT4qG7NmXyBQCt88X7rPMbMH4AvFcMcMRTwytDYL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "69qM6rBzkJD1aqz41uTuNoRQ7q1ppEHZ1RV9gsTyUTnnhkydNJfcBLTu48dxBEEbN1qS4tam565SRrCZU7SHx5N",
  "key1": "2Q52NY8hkdodXr2X3AiwDUYPneX7RiGcinu3ATCfqRtp835xds5ietXkbzQiFdNygcTBh7FVF9EPpBVshBnBkWsx",
  "key2": "PEGtPoauUUf8Hf3Qy9yiaaWXPJm5uFdZxLNvas6u6R4yAbhmUyshURemXYuuAM3c4RA5SKL2S4G7D5PGWsEAHbb",
  "key3": "43addqati4Wv6QNt8kVForoRk2Eu3HHLU7VXiumrzbQHWqQuugkEP5L9nGaQD1W19c3NwBCezqn2pBRBLwdXsXTQ",
  "key4": "3hej3ANwEZKNV9koe4fhmdmST6HYd4aFeAuGYPJCwxrRuWWA7iYpDgp5MpNzwCCfgpn7XJWjx9Krjysm3heQqW2",
  "key5": "3C1RoRVBCy1CaGSx45uPvnT32WdsubAfsD3bjA5K2WmfuSakCCKU9kyysPvK12Twy3L2UiJvFVGvUuUtoD3bF3Gk",
  "key6": "4QNffBei7i4rggJuZJZqCGrwSX9ci476UZDBHqbcEs4tStovVJqTkxXtEVCLm5zGxqARLDDgQ4vrC4SZypqdp76W",
  "key7": "5jpJ8hH48yFpYwzVqaXxLw4N2kRL5UdZ1mw2TLf5cu5HKQVuv3iBKLkmVA8X5dCCAuoKVVoGrU1jmTtDAe8xxBPQ",
  "key8": "X8JvcF39zmxW8dLgBWdewSuUWfPdjnGtbGfRajho1zw3uChBrBkxm9f2d1CPxuxt9GzvseappFTRK9rD44EDRei",
  "key9": "33q2cUA9Xb2PaGQfQb7hXoEqbEDtidYX2gYWQ3SfH65eirqQ2kbZq6zc1GH5TtW6eJi9Cd5MtiU6hnpcgwu8iV6a",
  "key10": "42VfQL37WY8ZJVaBAgRZTa7WWvi2R4qTfSbmhh5Yu31xf4DwX8b5kgaNsqvdndh8YUp3TPRoUspEVdUSodrcVdtq",
  "key11": "53nj39GzRWiMbfaQDEybqxvtrYFrqEboHNsrGGsw6arpCrPYTnESp8hmrgfCrCijHibzTZDohaLtAE8P1u8v5VEx",
  "key12": "5PX9jNnBjZ8eaSWDcZ9VhxoKPXcNfNYRRUYpYXcofU38sUgQJZ6k3FQT16Y5HtiJfoxq2dWgfYkoySdGsUKMrqHz",
  "key13": "EaxAW8hXCgjb9y7Qh11vmMHmsYraKxRrCkpJUGNuqQTN4dmWJnFy4mYi85oS2RR5y6K1z35Uwfe4YqXkkveaTWL",
  "key14": "2oo4t5oehCcJA5ndSdq2CzCxZVTRpQmrYQBoGeyGtXLUHVC5x4rzZsVSWCnBTPvDoNRiK3quiFa9Y4sXmTKWBHVK",
  "key15": "WwLUFzYXib5jkj6d49Amx9qf1jB8Fa5qFLQB45ApZj689HpruKjbpnHwLwwtRiHJmneMCYJJz3mNXwqTJyhnLbD",
  "key16": "3djRLF9X3viAmgefv1cUsRyh4bgY57iaF9Xd1kh35uSDn1Tn791YohudKbebH6CudnofFViSD27hWpkAvGUe5Ctr",
  "key17": "TnSxFNQGu9TptemgHDaq7skGfJBc71xDFiG9JMbZ34aqSNMGkDXiJnRaKJLT3RXYnoiJVMs1dzdomWNwkZN1pu2",
  "key18": "3fm8KGadrQRK3x6HGJ6wdp55JRDUVtD2sNTnB8BwA7gL5ZCJk41jdwqSyBM4abAqQdhrWJVyY2qX7Tj2DLyjzmXJ",
  "key19": "2SZhUjUVUHhvesEVrDphw1WkSbxG4cmgvdAan7wwiLu6b7M815Lsp1yqUF8jocqs3HMirUUYVd8rmWuzvGPrdwGo",
  "key20": "5wXYiKfYcC4xtsHSDvvbDYp8sLdpJmBaSzAFfsbUrRZD4aMRp2vErEmUbXCmq6ZASJaKe235Updx5RRKmxabckiC",
  "key21": "2HoR87e7RBhyeMi3SgqfytyNn9ekPJh6NoizVFu2fu4pfuyzqsdii4pcQ7EDsm9YhiGwz3bNBXcKjXK8SJb3qppY",
  "key22": "3jfUwQj6JwjE8Vn3FRkU1ihF7SS2Kp97NanJcDYbE1DWGVCiz6zmxjQw3qHPj7y82Anj3BY42vYHfM1hjXrihqJL",
  "key23": "2WYCoDNhQUZyQb1wvoX7asaSVCjcbt6XSBjggXySuQjauSvaJviFci5sbSWeS1Ej1iHdTxC48DngynJnZGQyUDeq",
  "key24": "2wGTQpvXugLiXCtVbQBcNteNZCr3M19orYZJE35EmejwfB7cx5e3vPDyjSfKj7AXHmRJ3nKkB2eHKKkgtq2NXzWG",
  "key25": "3ttnfpbPRg6LN8RYyM4yeFniAnmfnb8nBGfmbk1rQPufe1eyKv3Ypnub1JLx2GVH98dVm7VcsPPhrsJoaY2X8FAv"
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
