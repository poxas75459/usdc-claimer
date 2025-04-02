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
    "EfYfGB5XgHdi6m3ta19PsnewDYXnzwjowPWZHyKTp3BWPYcdFZMmeW1bD8LhZ3gTvX39RU2eq4dyayTB8GcFXWP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3y3mcC8dv61TutJAgnVHijqxHdcFJpNuA3uXGYVA1aqBrS1zkaGcogWktvHFVj9oCLHABgQYCRivGvCP5K2EuG7A",
  "key1": "2MLuL8uqsGiN4u9cbthkFAJkXZtyyhaS17pYoSoKpCpEnZJaHnhdwhoLqrQCbxXR8MHgRNcmMyPSNnCBtjNUGiDR",
  "key2": "23Tfj1jaUkQJJts2y7XofBk4k8ferTpMJ3qo1RRSJ6DVqUXr2twTyA9oFCu3iESbKQWwHRQ7chvkxP7epRJps7zi",
  "key3": "2mWXmaFuKnFQaErXw8xEWF59xfKHT3uGwE5i4XMsFMr3YoZ2YUQfnHr3UJT6xFLZWXehRqsgi9eEFEwdHhzbxAyx",
  "key4": "67pBprTbf8WFxhouttVkrR1xwNBP13T8RYxeVTkmfArqupy1WtVwGoQ3kqNjs6CrpRWMSwmh9j8PcByjD3MEYYvv",
  "key5": "3aQkfHXgEZwAXZawQtTCVG4xmN2bgq59s571noa4yDauRqLfDTQRXGNTB4nwHzBZ1jpCfSV7a2jkpp5mYHBy3KKZ",
  "key6": "348yGf8Nxidjwgr7Zr5KvPFzA2e7Yp5FvVAsL4wcSjvUim4UJB4ZCGT5waq224H81XFY23TLtnGxtv5e96ybWWti",
  "key7": "2cXUHCNjiwVMqobTKmVcwyWxLyBL2i73wiB2pLmTzPmJ27Qx3cUgoBBm9P3avt1cNNpTXoLL5ZH2xPcMdEChLNTw",
  "key8": "2VULCkXCe6Gsj4YaNUF713DPxkhb8hy3YmwAXcGJsfeaTRgZrECqe75W5F6ftUoKMmWZYHQvhSMiEw1xob4X38Qy",
  "key9": "5R87fj28LJcUsFZa64vpwCxBy18A2Tpkd3Y7pnMnvqvmmznjPmJdZgExRZEi7h8hWzwzA1n9x9osy64z6EwyzcZK",
  "key10": "3NrST3pWUvvp5BxmZa4Eya4cXEg4WZDevBH7PFPwgyUWK93udFJ9gArgdDFerDbQnSpn9hcadnjFL9dp4cy5sy9K",
  "key11": "4pMmFygCT2Fm89mhKytjmEe9doozJgT893r9wVwt37Bo4qoN9E24LvULzQPwciwHdMraj5fjDqbCgaJAor9XXv5r",
  "key12": "5qzTTQmWXtUBeLoRqR9UYzw2w9dtzBuWSRqM9egwjvmZ59GPpCzRaiAyGfSzYMr7B1L2S6Q4AVbJSgerq4tQ2aA3",
  "key13": "546caruNSNnkpp14WaaykWA1xAtdkj6ittWq78nWgEPYhNBZYmweVRgpmptKZ6YYvi9KHu8FwwJTT8dSfnrkq2pZ",
  "key14": "3E7EgLEKza8zLfqqwxzXGEfiQdmdgsnrKPnBxFcKxGtoQwPNua1SURxbkdyYtVTiNFZSwfpSqpCzxhJpMqGmzToW",
  "key15": "2jrWTw2rimhXnCSzWjEArV26xveDp2TMpHSyXrV26gGwi5GyV9z415Z2DyiBWYo6KzEDJQKp9RYC2eNwuLVK9rNc",
  "key16": "dA9tmLyv41h37q518FyPKR6F431ydPGYKDhtKCSaiNq3od1pQYAkobmqZhw6Z92wSmHVxYctaL9gQJR2dT5jJ9g",
  "key17": "48obAek7pb5yQMjVdg7hjz7R83RSdwhYXsNstW848qK7YFsTHQG2gbyd7Fk7N3m4LP9xtaU4UynVUkt5N7heF3F8",
  "key18": "5xbZbRdUvEGDkTUDbmoFmXVj7hqrtN54gEsNf11EtnPc2iQSUkSAQ8JzpG7tFUm4CunSQdnTBZVi67iQdGtWR4Y6",
  "key19": "2Jo36RSKPuwdKNcWgtLnaL64UwKuCYYxqcaM9va1tA4bhCwyXJfYKStkwcF1jefmSvToGUvMcRgJgFwKSuiAwz6k",
  "key20": "yVKqkcqAie7YqZ187sjHdsA6n3vbU9dfGB6wRrrNh61PVXeKu8PiGgbh2taeK49b1ccrgpv3tR2AnvT5ucLDJMQ",
  "key21": "62sjcJHvp18tDZhU1ep5c8TCe3NztQZd4cDhsdUcp5j8cC67D8c21pQiqqUwczjVT38FLeL8yBJcm1SJxwPHF1zv",
  "key22": "57VBDrz56RaGJ9K3iqRAwNVXMHsaaAg8vpwVbuyaZC8JubtrsQRPfHqzdkXJWgy7XCcjKd3QqVASRfxHSxJHmss7",
  "key23": "2GT8pCku7w1jGWzL7BkbNL5JdBJ1RXCXTBwuJdKXcAozR1S4J4JZuAFguc5sZb9c2w19V4WwXyteHM7kWJ8Sp4s6",
  "key24": "31MxVjBG7s7k4SnAre4dW4SboAegaSnQCUPaxJHXZ7jGxH1pXQRB89RBF6v2DMjLnpZfyHJ6h4dD4K1cNRacmhGP",
  "key25": "3Ppz3NJ8cbKEoFbMDePNekWXLUKAeSfWbFoSLSdDCxGwumwiNFeyhmAucp9Q5oTeWNhUyoKtx5M7MJq73QvCoNyK",
  "key26": "2Je6PZjRMAdiiD9Redu3k4NzaDxjDaGmhfdA7TXRP3j2DnpkUUTKj9KQAXkxySpBdkwsQg58xZBzAYEBr32zAynU",
  "key27": "JLnfN4wjm2W3cJ7tpPbZqLFPr8jkMUKuLsG3zGnwvH1AQ6xLmJjZkwg4PpYdcmaKA1yAMWZz51pkUoPFWtxLJMm",
  "key28": "2pCFxdXScJfmg5r3WFh9sP859DwV76HxaCFxMi21zdrf5yYdtRwQtqj59Geh29on9ZqydkZzF6NJ6YVhX5PZJ1tv",
  "key29": "3p6wnrfqj4v4R6WkMXjqJd1Be6wMV3JkDZ6nkC2BHtVQLWeDj3QHcDeEHp8UQb67rvyKH3CvhtBer79bJY31tC4",
  "key30": "62dssv8CtLqVnkJ5vkSV2zA9uNtNY7LYdyUKD3WCzgUS9y8cPHRuKBeichwmz9bo7MbaL687g8p5qt9JfNJDRuDy",
  "key31": "5wCmYd6haHaHi42JHo5LtheRp8rdvQjcHUgjd3sktM5qdSQa9RkExKAVkJ7nqo7RH3PvD7ZvkbehMkmgqe8nR4Dr",
  "key32": "5VLHhsyeVuMzYCGdoaGGCfQCCx343ei3XmQpZKyXd3tyr5CWjfe4VgLQYce2TXhVhMjE2HLfQLiV6jUzefZqSKDp"
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
