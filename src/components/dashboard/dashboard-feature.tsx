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
    "4CNsvKZRbRNQvdrdDkkANBHdvjtgFq8smDd815dwCCoawS4dJjqjej2mvRXnGtMHTL41oWpK9sY6QGoVWr7XgGze"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JQ9aWvomHihPEHtrvmDdZLjdzZ3AKdJTx5xYDvzoXnwueJWL7f6VhirCJ5A8oaEqm2UbF1TtVTAA3itK1tC286w",
  "key1": "4EZ8oDWUW3zECiTYF99gp8anAiaYGrc6cP8KKt7Di3LA3mscV8v3Tf6n28ukUNvAHrd8jCGN8BtCWSazeT5jLKbv",
  "key2": "51S18FNZ2AHzZysUv5RAvFfTyc5RgZA3ThekYoLZuQuiFLqhg8SFyBRBwmxuzHpJgpYo7H8CVdAUd2LBkLesKTW",
  "key3": "2dFVYDRYUewBdJuFHpCDrpDXhYicUxUYrF7bdtdPzktJ2VKgemtPh8JQzEqRMU99XiDNtvY8HSHPCdpfm9GrDgxs",
  "key4": "5nhxnjWULewCVBLTtspnv36TRyLqKKwUZRgKd6ynjmHyj7wVnn4xxUMfWAVhETY4vZ3HtVArtxaZo9P7MQBZxvxA",
  "key5": "MqEDPopgiL5td7BzSMDDhMtKzuAefJDM9QDcnDXTmRpsGpU4Wu5tGLswpFKBqS6akZK3TMaXwZf28LfVzg8Qqw3",
  "key6": "3bC4vzWQo3a6JBMrCZXSRoz3QqYLxkcusPAmuphrqzuZFuccvqnAbePcBNgCmv8wA2XvUroU53DCj7ePXCEKPC47",
  "key7": "2FpYZzwmeernqEPEXRbkiKHHfkGUEyGZaMhkpZFpnD27Wb6VcoBSKzWTxiZtbQQ1LvwX4T2ZTnT6LkzU26pfrr89",
  "key8": "5sQvwsnkXt24xQYSbm6xaTMcMpMzHsbk4bxrz9PL8L7EzhQJtGbSkEcrhMWyw6PCQav4jQQTivikTSi5zANNoyUY",
  "key9": "2szAeUS8EcsrHgc5KmZT58tAsup2kaSupMqkbdoGbzn5H9CwdhRDDTwwbM8sRCTJ3wUbUpnexEnSFSNGWH9kUjnN",
  "key10": "3TpFbvyCbma8qjbgLhER53o9iRF5tMkoKN6h4bP3nZJ6q7TcT76wFMU8whk7irMnnucnhTeKq8P1McwkMUDVq12b",
  "key11": "cekfmrbZac2z6XGj8MGVy87FQvVDogWwwHspeDDBXiZkgvcTBw87ZKf56gWNGMRxpUoGPf47q9YUdjmaDgXR21r",
  "key12": "3WM6opgoAeVqAsdJCt4ZWEect5UWyfLt4xsrniz7BWKrZLBkLPXmWjXX4sHMLzbQQ5Fu1SjhvvrPqpLspTLt1oLn",
  "key13": "4cMhHfezjWxZXVUHMeMX5kv7mtXu9EcXyAXj3LXT5V8sYwUrT7W5w3RN8GWvu5WB2yTxZ9HftFZXqK14Ag1J6izX",
  "key14": "4uGAH4i2xk8uMu6KcBGU2fje9WqRLgqtyLpqaBhXeP6LECtr4tYcgStP98SoRtHfKAM1vb9Xxg7R8YVtSdWobSDn",
  "key15": "3wkzYvd8do9XzichjMG9Q4v6EEJM8otiLeddYAnoWib8K8oGbknRzXZCT67cpP1UQVCJ8WFv82XRBVSAZensFhxH",
  "key16": "3HU2dS1T8Qz1NbVUjZwJs1xHxEGUQyKvZHL21tmcohdSAFTSz4NtJqZThBXYtY5f1YQrRibtC5ZCN4w8bxtMqqAn",
  "key17": "28c8uARwa8VHbXvNmExyKQdneDVgzLHaYgo7dJt7cKRWbdjF7gyauZyKYgmorno8bdh39xZW487ADm8EbDHov7B2",
  "key18": "KHEuxRoJmF3Zu8sPRjBmaagdxMnAsCcSvjD6njipe4fggLfvt56XUwTQHecDZr4xdUXjZ9ANFRN2UR2ZcJtqPUr",
  "key19": "4LQ3u7Ercnnhimv37UMoH7FEExgLc5RRr4tAzTUdSsjXL4NAL6yHNMHHHURJhTzWsuoK2QFc6BU4bUr6dCjSQZjP",
  "key20": "LkGHZ1Q79AYEcniBQqG9BR4SkDdoVH3SiJtPBZ5eYT8fBrhznkbT8Ruqq3FbyCJN91Fr6LfX6dHkS13pAZ1QdUq",
  "key21": "21fth7s8Sz44rRk9ZFARmEMPuDifqe7rSSx6KStK5V2Z3nADggsyxBffFMfxJCDwTbhnz4NiinuFQF99QeRLLRGY",
  "key22": "2RaJg7bfu6mBZEa5zL949XUMJkzSCB4R76hwvvmooGHruXC3jxiqSjUBTxAZmqPDmHethja93JhWJGegBt6YwTCU",
  "key23": "wRPqynaWbrkMYuyK3FP8MqHfHjcksH54nanJ7qrVPjZzQtURGuT2tBuETeHT42TEiYW3QFX2djCL3LQRPs64dbT",
  "key24": "3B8RAuy9iGDooeBVMCg4MQCc6jqurJtKDdd457kBGYxoyTEX1jiFTEhAn2ermj3raoYPKax7xDrcC52ja7ko35dw",
  "key25": "3QYSnw8dHAWWamcXSJNAg2bZExeVPbanC2DjjoM62mx2HcWWbbUdG6sHkgFwdRDzyyjH3H64R6xqkdR7StpT1m5j"
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
