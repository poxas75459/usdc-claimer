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
    "3cGJdVwaraxc9ZPc9azrZmK1hesiQmWasEnLTVwencC1i5W41sVNGSf6d9FRtEsVu2oYbJyGsQiA372qkF87oYyp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pkubG6vMDS5bgLDij6CDUWZHiDqbUdUsCwBnYt4ZVTZQtvXwnRCpTyvHysVthQ9b8rNKrdJvZ13d5nUVY3rZcw7",
  "key1": "2jyijJhJ9PdkkwevDr4QHC5iWNFxgFrszGsJj8ZET5nTcuksvt6ZWaoaF3D4qwHZquzFQTwvxxHgs1bQB7WsdFcq",
  "key2": "44WZENyE6LewxefMbPZ3M2TTGtSzFq2JsEvRGvkte7u4SKUvz7tJmN6cPLgg4rqBzWL4gHhF12gy6ghKr1Y3dmaE",
  "key3": "ypJ7oNY7mrbYbUp2FdRNBpeLKpesRgXTS5Zp71ZD5UnBbNrzYUunHD6siX5fJ1rnWmXzXoa472vg368r5MggkWh",
  "key4": "PPbGY32BvB1WYk6o77zghfkXA2aUkNMdfFhXBXRDkQrKwacn9oSRvgisUR5XSZR55JkHPVVisHAFKMQtpB3VHVQ",
  "key5": "4QUAQGzWtg9uiu4ZNL985b89ddN6gTRpUfNXWrP6E5SqaySRYRijr1JvZAaxRLVnrPEEineasuuSvjAA5mzMbmx9",
  "key6": "4zBx5gCN5Qc1qQjUYcJgNqwFRYzc1Dmqg3A99ZZn58sJmwiX4cSgE2VQK5UxMcMKtAi17wvJ6PRP21M6mPE8vJum",
  "key7": "pME2UvUHE2ZrtAS5T1k1DQfddc1jzfqustDZfLHVVX9JjKhGmLXDJCuPe6qN6mb6yJGyszaNgx6nDdsUDc6SPr7",
  "key8": "34VUH8g3TdQJDR3YguMjhB7yNbeWVGLoRypy474tqbNF3LYCBVBRdUsxaDr78a1cq61u84wbV5YPpf4hwbRMyVSY",
  "key9": "24SETgp5u7pRBhD7E4aPAQEpfXTRJ357uLAXmPmhGprdESdvV3RtozHV7HxwoQHnPJpHQEv1enoGKUhtd764w3u5",
  "key10": "4jvWniLmENby7fdw6HgHLyufN4xmYZuwqvhtC7j9kmUoyTWBWGbXqCisq5rL7wu7XcnTctWjBPRDVLT3tqKQ9yj1",
  "key11": "3mRiRDChsfeYoQzz9vRTfqKKWMivWmumVasQE4FWSHZVdB2vu655xXauCV32vhowvL7ncoUXUFKA4VYj6CkuaNKu",
  "key12": "4g9VXCk82mbMfgnXWMgJwge9osyew8C5KFBRBnTEh7amgegqNRXJgku4jQPUhue4n7rowWtCj6JtjhWjRxivBT8F",
  "key13": "5K8JfkAyXMxGNiPA9PZ9ZwG4AQ94juz4hM8Ysw87ZaWew8YcFZ9yCp2gv2PtcbhF39qMF8Xjq49yHTkGoJzTDeKg",
  "key14": "3Aj5GkRLbGoPwVYGBsPkqRvfnvVdsFRGKeKKMjyekmxiHKAkn3UYic6XbutaeX61jSqdhB6jksKUi6qs6rsTFRSQ",
  "key15": "4XR5Br2VF8TpPnDuZBZjSy6TYc2Bn1tx8qpDn6UdcL4EKyrxkfyZKuzi41ZsqR7vJ4a59QFdHLcu2anvgHZsdXoN",
  "key16": "5fsAhHz4BiprH4BgJ8EhJUS1K6auRCnpsmXJV7dcz3o63nDrDqPgWegKFnixDLHXrLgrKAoiEAFFJ9S1VvnLF8wo",
  "key17": "4EVG3tXms9LgVGhDwVAiM8Z2LshG2CmfyU7Kevyp6gnrHesyDEjGTqLL6pdHXVUiAYGN6LrNQ2ywhqj1N1FJgybU",
  "key18": "3YMeo7Z8Sc5naZV3xR4GkMz3yhLjNP5zMg6UTPTG71Az9urS95jSj9edffqVCviLaZLM3A4iokybKhtdfMV87iyT",
  "key19": "5QkTiHn8cHWD8oPWB1bRP58ToqnNxdCQCCpJ2LeJGQfjaog43uXqGg8v82ugFnqRth9oM8oLF8aZsbmbYBz1sGi2",
  "key20": "4tUvSQctYEvvzQpFM1utBphxMY72xtagVt1ZgYv5cc1QchdDFavmTcxL4Nm9un5C5wWG4nJnGbNPKrJfxHfSE25c",
  "key21": "hvySAWwJKjXQRzb6U3CMW7DZZCa99gatqP9Be4iDQzTxM8sHqGB8jg4xVSkcE5EkrAZAMAdszjXTum39ccbVQxA",
  "key22": "61N5ygwK6uM7E7rmSn5BqggBuw8SENVXmSLSCyQqjGb1v9rgSAP2NGBjVk5MXB99WcFhHey2MhpKknVg7uASotPe",
  "key23": "3wgRYNZyBnZ8JBWNUx5v4ZWrJf7qosouC1uTG2i3R7Yku4hQHny3UwWjxPNWYJKMPZgueY6CiSANagUmcymB6pRd",
  "key24": "4D12c5Un8npTdASuxcsHtESGywyqymxf9SVV83TS8TrHxgyPHaegyAgEH6yR6Jb3D18AfDqunr8WLcDzeQbv3vAu",
  "key25": "3xRHUESLqYCYmf8Nfq3jeyGDEbWyJi2M7XQdzgzyK2DBrMyhoURyJNiD9nt6TVWtLr5i87d6ngAuh8TqoU2rVhme",
  "key26": "257A1iFyY43N35qcryQN4Z5Hf9c8RAM3gHqKD2o3YgjJoTjMDL4baWMdnXUyKtxE2vjx1CvuzBSzSuPPKLmzvfNZ",
  "key27": "2WjpyqK3RbVCcAyQdkTpZNTRK4tyczHs5QcChbMuKojMXwHdvWeDC199UTd8yx6wEYwT6Rcu4g2KWpVU2agKKUhg",
  "key28": "5aZ122yEUhVXCjkLtwGhy8rFqMBJ2gcYxM2dLyYMeit7qQ5r6KEphvDAigRowT32pkAnQFrkWp7cxRykzPgzWcgh"
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
