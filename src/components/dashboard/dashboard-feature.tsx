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
    "4AyhnUmXamapRtChPMtJxKRPQWartoKnn2u43s1bGX8RhiUscTe1vTh3X9RC95c3tMz6St22gjQC9ZbPjw7jhC9z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "o8HD49oKDFFr8SqZVuGtK82xmZjDR5J5w2LkPz7GhV41CBkzAqc61vd9maex468tcEQtKVw1GGD3ephE3doTTFB",
  "key1": "2rAaZ3WWu8StPBPeJvVLDhri3hsPibfhWsJYjrF1wCUBsrA1dKgMrXP2j4qKTppq9AQrRR5Ns6vpbwWj837JuXwZ",
  "key2": "5rtRL37GGCUSKMeHTjczo9zDdKapcv8L1CLbjkaB35CeaEt83joajU68bCRWmqgLwmC6zK1f3PX6XjTZVCDk9zW6",
  "key3": "49tZFBcbdixUomzitpu8cUvVNP8jAPWANwsMEvwuNEfBdWe4aUVdSouai1Jj5WDrxGW1qEGaFjcY6HS2Mt9vEyzd",
  "key4": "2RFfRMYppWU9xzHLyrMx5kQWa8XrnYvWcrftTELUmz2T5gCoSgMRzgzzqNfseXMzq5m6mhFKgWdyxqAApB3RMycQ",
  "key5": "oRkXbt7gLSkCNHxKpRUUL47zWusZmaf3N6utTmnZVPXrEmwwPMU8kJ2fTQZ2QGW1cRzL9JGJEqusBRnGAUEXL8A",
  "key6": "2rJE5tXsV2SdVCqr24r99GhNP4Ctx9d5HNAdAa2zdxBrcApqCGPXjABAaJG2BuzaGxhYZn9oXE15RGyeKj5W2cwA",
  "key7": "3EGRCzeDNmFqvrxsLFRvMWBMAHTNd8uQkdn2GCCUPkxJnjgrK2xooS8WRwU5YCk7ag36ift7wCt8DgYvkJWtxkri",
  "key8": "2RySfTPRfQBBr2icQhGQnnjkKTNQ7igVQJMYXMasrzVVYGs5DqmeGuCCGRtWr2tnUy9uMF8cDPznB48jzpEmVDRR",
  "key9": "5AqZ35U47gjKbsWg1syu6JScjik9rRytzoey5yrz9U7MwfBhJ2jyCCSSbyZmp82nCyadJxg6pBabvBMi7uvZHU9m",
  "key10": "3V6Fjzgh5UXYiixwL1R3kyq9YWqLKDt8sJPmDtE2UkcBdB9SBCLF7qgnmXg4vVunYQtetuMXFwuHMjbjTGDfi9BG",
  "key11": "5Ke74Q1wrzVArVAt7eVQgnGLVsZ4DXkaJx8oQ7eEkvWrfRcSiBqdd2L6ZjXGaSrdYcMBmncKPByd5Txwa9oZfpL7",
  "key12": "2Zi13DvYRR5qvMkhDN31fFvEtikGAyFixRtXDRpQcmXQSP5HEEhj4csSFaer44fnVG7pwJcNRVPZoN81djPeY7KQ",
  "key13": "3SDbXfXaEtS85idyzfN8ucCF5H2i43oToKmdtaoAK9p2bSvuGmnKgNs2QywFi1mNdsVCV7cfYVNn5fA8ahEwYHM8",
  "key14": "4LuoAVCW277yJh3c4iCoj6id4JeFYeiw4pbg2fEwz7qfdVtXiWHpdCJWF3UQFXqxy3FTePSj4PHY1p6WQKtC39ZB",
  "key15": "ehkGp4889JBXTFRBAtuAdxBM83BHfCTGNhVXLjS4uA7VqoBG2pVWc8sLbJRfUij7sTswvnFDQ4hRcC9Hp9ZgwMd",
  "key16": "cacexmqREAkw26cbBa6ZMrLnN7Vvk7HuYAMAAKkEXgKogexHf95ZWzpiTYqXFZCxbrNpjJMQ2yEZsW5HqiXafdR",
  "key17": "3iY6Xjx6VCnGMzuS3PZVgFcttvs2ZNshz2X31LcvjehroBowLZGrQ3xXXLCQYbQG2bFXEQWvNB6wzh78bv8nyWk9",
  "key18": "2yeTVvHLhCpAt2CbnFbS3HuxNFLmHn7dAdcWPMLbrfJsMJe9EPbuKzTbSET6YDwThHaiqce5WfM79EvW7vCAqhf7",
  "key19": "4uBjubHeNuEPLLxXSqtswdhXQkBne2oEFC3Z2UaiogbXsEgNe7ja4PmPG1ft79D6Yx8cCEvqf5eZUjjiKB6e7Nth",
  "key20": "5is11zHjTaZNeyGv5UuL9kdzTL4wcFoG5ntR9Rbxn2sKRDiaTA9MxYEfMw289QZ8V58BYL9uH1hzYE6fkPd8HxrB",
  "key21": "3nxvuUYWPXeEDNvn4cP1ARzwqARHkWo3b4NXs8uTBuGpEYNeJwPUEXhYsGtSbCa5N4AN2skp72wPZC25zQdWCRCF",
  "key22": "4ddncGfc313ckVGb4Mcsprfvh86VFYzwysA5PQMStxUY4c3JKCszGq6ahKCZszTHzba1cCRsynx99DYjyKamzZqY",
  "key23": "4oxpwwVWA5F9keVXVzDsc22cnXSFFtxKfQHXs2vX7exvdPDrGNMVE26QRBJdLYVTUJH6WJmx7dEWDkkvgq8p8vhK",
  "key24": "4ufo1tMQ4pGTaK7i2sfWwFWGWwbWvY27YxdY5fWXmHTvTtQBiL3UeTt2GVHh4Ynz1n8PpQ2AasqkLk1iyh9QXSPC",
  "key25": "2NY42B3L36qbk5NN9yPZ3VQNzaYuZgzzRMjQhm5X7qQrAFuw2ygvZau8YVGaQxou4aqT9R4aUaP8WRjGZhKsLiBA",
  "key26": "JNBNz3N8PsLk84RK7dejV38emNa79aSbYpNkpqbY8DBPm8JfWY6H7MBXbaM8CTZK23dQvbJm8kEsLwAAjJ5goqV",
  "key27": "4UUNEhsKgCvQmwB5fgAapvhhPvhuEb3AaQjhSAHGEnmjV7uzJuCh9b5yJdrWwnFSyWU1h1i3AUzsRTDqmkELNZhV",
  "key28": "4KYShp9Gv2MjdKpDxHUHFtjkUKiT8X1Ng1LqPNkZZPUJAy6yDyZwidMv17C82aDMjsGPUBRphFZFxWguhySo5oGD",
  "key29": "3fk5zuGHyGg4zFrVUecGHc619GbWkBcArfSvg7mGR9ieC2bC7CYzHziAk3Kx6qLmwnmi9uyYf1AKN9RBcwaftqaH",
  "key30": "3peDQi3rQYNUQF8fxBafC3GV4STMxGuvGE594dGfCkc4ovVkjbxNSQFXoZRYCrR7cdq6dgnERFMZDemaqpKc7t4y",
  "key31": "4am69WvTyFJ8MaqrSH3fVD1LF6EXExeGVaCGH3pyEkoMXEgEJRFutFPHPujr9UMH2AuRvqUGRe7DWx87ZSsrz8sA",
  "key32": "3ET5yM6cyxuTSuhcW5wePFnTZdtdYmvWmhc2HnH1hDsnMLX8rKZWahCEwzStjGGr8hNisa36GGxkmKDjo4pmvfS8"
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
