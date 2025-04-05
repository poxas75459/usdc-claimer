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
    "3TBAKxJR9dVdLEeZAhTJQzR6UsKKAgyAntLD85waw7bUWD1zaofnnEsgHGDZcZUFj4VhrbfgSJJCjuxxpd5cXeH1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YZH3gGA7T6yt9JNxi3XLxPdmbokX6RcdH4xYGn5LPzKbZG18kQrx2wYbrJNJ5KFAgztxjGsadrDnZ3vTuSR1TCk",
  "key1": "48KaBUWbpSYVMNV83yDpmr7MmRcSohoh9gC74oZH7eJzcXK5kN4rX2PwX5HzXYcr9G5Sccgq2ZjQkPZRgGxYDvF4",
  "key2": "qG8zgiNnnVMVwjgz2emEYdVXz2uja8dXzQs3GWjmHF5hNdQScBJEMorsexyBUwXJ3XdyCLNNDYcoiZcA51MrajM",
  "key3": "2WbE4rf5nTbafBfiqaT1B3WYAQViLnafCsuiW46fGbTuoxuQEytDLCMn6txvvUHt2DZTdkeJBzEEhR16QeDaFc3c",
  "key4": "3VGJx2Ha53X9MQNxduqWFivqThmr5Vn3ZWGdeHagAe1gy2StrfkgoDJTPLzVk6ahttYQubER37rGosEex5xeCbXZ",
  "key5": "32uj75V8teFMVtMVA8vxdsKEtgivVuMSi9YAyiXuYqWm2xemP29ar8hJoh8FYoqYqTUET1dQe1PYpXSASpKK2uAK",
  "key6": "4uwPQ5coc5UuNPrSKfcQ2wmGHxUs2sbTxtsQBEEvmXaiHxsUt7XbVLpwg3MNVYkq3GQw5EMVKEXmqyEkSfqeiftY",
  "key7": "SCns6jBDxWPEzfbL2Stv7BH9TP8NqF5sjNywv2VXkwDNazaJvJcHRQqqTEjSeQRKPiYqkErP1PsJvaX5rkZnEiX",
  "key8": "2UWsd9hd2td4TwZtjQZT4BjJfbkeT4EtFFXTpq9qHPQvmLvCU2FJZ74BvoBtsAU1NPAeYeqkBa1j7WvXkRXoqxD6",
  "key9": "4GnPHp7YRQa83ErpjNQXcnSkzKwMYyRrts4ZFySrCroixVM7onhgecTzQsbVbUp4gA2D3gG1dypJ9L39Leiydj2K",
  "key10": "3MVxTwTcV8BD8oVdVqmZRV2qMQzEvegTbzubzLHzUv9y5JB1224DSDmmhLn9jcWwAGJZYTrVVFy4VNFSwdW38tKP",
  "key11": "51V9sh8UMfH2qSirHsseixhDn6RXgHtFeBwXik6NQfjSvvT9ZCgdbNkPZGfsGdZmsnjQahYK9nBgp2DRnfjTNCNJ",
  "key12": "c97yTG7d5x3FNpTUrfaxqEBeXg83X8jeRoHVsXsJVanmoQ332jQZnZCZMJPxshfJSVb9BCpXhYXqhqQSnrHexV4",
  "key13": "ee82wBEw9ddFcW7LtmBsmQGchHYp8X4DbnJmaEhu1aHWiBDeDAgwJ597b2XPwDeayo7sjAU74RrKKWJCFA5424N",
  "key14": "41uZNhSyXcghKnjkmQSyYWQ9EqFqbXuAntn1LjkUqmt4jkzfGmseEFZ4wub6XntuuWfFEByZ6S7Gba7gyEWvv5Ar",
  "key15": "58AgsxUcYTRZHfJfYh6Ri2C9qiK7cXxJhaGFWFPxJuGtmQJBb5VUVLN8g2TsjdRFuqqSn1HLDpjJUr6R9j1kfvLr",
  "key16": "y8am1uXprs81vs5peZkCm7D5Ng8HQF9zLF62Cyff6ynKEGqYu86eg5yi7tMpn8vx7dFeerXpdp3k7qnX2t7vcQG",
  "key17": "4eUPQSFZyDkWuZ8nMgvWR8Z8BTNmwfDTgorMhN42cTs5v13AF3SYxXW7Ucba5kutVBjpaLPQyXBijxdEZhev9ftH",
  "key18": "5ZggotW3mxzp5vaVq58G9Rrd9QJnCB2vBWJ6UFbZsJGur6SDgNCo6iU8keLuwRjRkYsAoBa9fwX78FXXaze2V52Q",
  "key19": "4LgYrkwm3kw4V722ih9KMqryKycVkpBxfJoQEUXEEqmBhoZisHNbemE2DL2Y8wSr9b3XuvAr4pVTWbf8JwbqVKTX",
  "key20": "5EY8pNdvQiWU1fenJP3BbGoGyy1R9eEpPgA7H4Et2jZAPVVmba97hJTEkxqUU1ThGphDhm3UtAJqvMnsnyxERKz3",
  "key21": "7uDakdUAJWjd3RZguXnkps5e9Bx9Q6ThsAxLZo5eztD7deiFTU7qZdSDgrcECHHp4pbKzWnBthZXbkhoTysQTMA",
  "key22": "4eJsZAUQEca1bGFnAg8A2MthDQ3tLCtUUw5GW3yrA7T8byFMtod9E5nbtedM9oma16RyqL7BvanJv4jnPid8vQhs",
  "key23": "3vDYTEDh9FhTTgF1r7GYDy7p9fKsdr3BtJBjx6QTRzgB3dVtPa1xeDxmziwbQ186LjsKuvqiwoNuHEF5zSdUmjoA",
  "key24": "4JRPTL4kvGE6vYt9T8Aw7bTJn8nQYtd483HxhtPCCQeHPD8Qw3jsTmB2R8g58S6Aiq5sRx8eWMEagreb6uPTUYki",
  "key25": "4xJ9baWCFTUFa9HRfDt4yp5wcAEZ38xLGKa1EHXf2bMZJVzT9DU1HBtgCaN95uUBRqHxt6KujwcFxaaPVzfWYzBo",
  "key26": "3foMai4S4ATM4JavcP3Li6MJpkmjdEtcv6sbmp14prGPF8QsnCDNJRpmdzYju98Jw6t8JZTAe47NAtuxYBs6opw5",
  "key27": "3HJoHQJj453gqu5sGe8pHPbwoq7tY9b78ZDWdg3PJnMXZGFfHKF2KwSgWYZqh545bhYmq64tCTdpzfhuBaKRMWrb",
  "key28": "2vBYQxWEpnw9PucToGksP63o5RuKDTnmcNZHLCnJ3UorAJTt7cBDGrtz11Khk8gR9fqEybhHxueUi2KVQ9ZGD2L8",
  "key29": "5t2744uA9DD8bjSnje4urn6ubU2SVm928RFPwkAY5dm9Y5Vrz6insdSn73L4Lr4NxthGFzNsXnw9ecReMGSLjeVp",
  "key30": "4mGTruYj3CkyCxoSCNGL9VcA3zAShJpvtYDZ39hKUPNdU5jwydw7usXJrjaCCvUS77JgkpUPSYHoTC3jucCksCwj",
  "key31": "29FTanRn9T1RrtuuGzMCEnrwT9ZcRRdHqNyj7rWotJxrB3g3pahQ1em9h5EKMQRaM7zBo7u9bFCGYE8Uo9CwZSWJ",
  "key32": "4dDM6FfW578vxH6VPBPzuKiVH9hdxKqDM6hU13RnMsph2kP6MFJCgP4JL3Vzwsh6apbwd8SHBctBXnSGsywjJbx3",
  "key33": "5rD5qFCJnAE8wwDbARkGecpEXt1MN5GwWjWTF4CMMj1M6Pp5SiLTvLrkKNronwkgHhQ41gveRE6gQE4aDsvTPqD8",
  "key34": "p2cFXNpTfCZagp47SFqAW5P8QARiQHSwWCAghqvLnGWTMTmZ9F75U9JevDrcZaTEwJXRxTSFev2ZbsDe39dgfUF",
  "key35": "39fPNkkBLCdze7WnbNLVjkyarBfuW42jM3BWfgjb8QodrjMh1xZP1g2NUhqZKPEBVGxWGNWkihgURiaZ4BcRrSmv",
  "key36": "5m95jpwUsk6mRKETwEk8XGmZFTTRBQnLc4puanKDRmYQ8iY7SSHHFjYGYLcHx3rjhQs1LVTXLa3kubYs3Mhopprt",
  "key37": "M21bBDiEBan82b91EioUaw3a9whEo6BpgRcnW7fbx81PBCZbJkWssnq1mmGVuiYD3R5Hz5gEyaqCup4JPGQP4qo",
  "key38": "V3f8pQBGQeneZRe6FbTJFeFLDjhFmv5UZb1be2QuhLPXpi5GzMt1MSvMThWh8CJZ9YQU2bK8yNdHR4SDHWedvio",
  "key39": "5EbSbDUiZXV5iahT4Htk1BHfMKGd5H6qeKiLHJbnUsBCvRvXKq779JdgqjCSPyvomW7Y8zHRZ8FHCdenLvFj1t3D",
  "key40": "3vm4LHrkF3pcKjXKsDCnfCzCxz9uyJBhPaPsCyqaQKqy2Q55EHXwBSBoZtpfmhQvvQLJDmaJrHbptkBTYK8szgmF"
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
