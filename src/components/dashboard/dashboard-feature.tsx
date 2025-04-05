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
    "2EmtPJ8pU8cr4HxX6QSfdPuFNQ9eBbCCDJQRLR2PtSsei53FAHvS8oG7PTyh4bD6BuBMbme88pCs1WxNdZ45SNbo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hXYqtUdWEpBT9xkjAZRAkdaM4XAmR7jr2862rFFSzxBXGnCPgUVB5TUATWrSoFet8fGomrZy97vSHbzbj8gy1mu",
  "key1": "3wvayZDaTNR432RdFX1dXS8LMqiWkPX1G5KtfQkysFmLX4FTVcRiRJdRkQkhC5PaJA4Daas4L31GafzpdSfgZw1P",
  "key2": "KLHwJtwDWTU6BD4EJ8dy195DEHmWmcAraG55pjH2aztASyho6X7buHGAfg1ZNhoapyXBuHYEWabDnS12kG4LWKe",
  "key3": "5BTSUqFYqavbbEViQubPnC8WRnp5vurwmgrWazDKKY7RJx1qJuTn36FpaqnrvbtnqiPoJtxHE1GRPBxZ8XRDd4vS",
  "key4": "kzou2LQdoeCP3R7D8gdWB9cQFnS6uz11DTR1hrhUfEXAoS1Vx5dni7imimbpijAmUp82wTBe9efa8ZEr7UJQueJ",
  "key5": "XADZ7GdVj6RKqK7ApngK2QvsZgvgNtfDCJen4imNnDt7dAKFYHuSMpWjMQ9DsgXLNdzWaM94suxRdzyxnLLEbyX",
  "key6": "2xA8vWfhY2SC1GW1xYhxd66wAUy8sdEbkqWqAAs6SdAaM1kGRMxqz4keuNgS8wbmsuniycnvB7QJwAJ1sJdCXUVe",
  "key7": "Msv1obpUFVcT2hQs3rhQoyha35UzUCPdRkgJmdoX23ZtMvdgRzRGKHoSFc8TWwZVq99ZgSGYKYywe7g1uXqEsaw",
  "key8": "2Qbt12WoqeghoFrAUQj1hGLBXZP9PDYmGCQksSNoizuRBabk1iV7cXN1YzyVsSetfQKK6TimVr41q6fUfkzjjHuh",
  "key9": "4CX4fShdMgiKpYooKSRMZBcBYPasXH25fsN1AqFQb4tWMiWeE4mPgua8TCEaKqvY2oghEKGZgoZti9bb6Mg6we3e",
  "key10": "4b6VM6PWa2bE7tWEL3X9VnQXH4uLobVo8jbPndxEW3kLc3t6bR7CEC4EEjx53VDyHwdMa5BftmMfdL4KZrUEd1or",
  "key11": "2UKWeXiDJuvYo13rwnX4CHkd5yRZNrTSnQXzhFVeohrDJDi1bqnGy77W4uV6Lwovfn7SoprRr4Zw6XiJJY4CJnMS",
  "key12": "5Bp7qYMzkFGtEeSxgWsqxpvx21B8UW57qwDpgh3ZpzRaby6rbuSpsyrFwPBVCr7m49LerEbymstfnYj1tVxHTtsQ",
  "key13": "3zsCMvoE3u4hsGeN6d9nEKRAUWkRLWtbkBvHDTu9RSBX1WcDkdg4iEKpJKZZvaxkwzTS3Wp6eLwUQkfgujrceC9P",
  "key14": "VrdziBzoHZ2BxuVStcSq3f4yKiUB5QWS7K9WB6XXXCUzAqaHfGG2izM2mAPKuLGZfJF1VQBUu6Mm8njEZskvhoM",
  "key15": "2jZHZwBh6d71vEvpJKL1xABzpkNhz5p5wzKHEZjKutJNHEkneJAWfmECF51NsMiK84qqTwG7UXW72yX5YqEtTjxt",
  "key16": "Tkya3x7HSJwGiBYeSUFB87Ujn9ZbybDpF89syjfEGVo9MfdSpp86PLEey1Ta1M1xmXQMsrWLku1yiKVHkvrkAjE",
  "key17": "PfgQvadsmr4272m96nxBUp9D6MPGyLxHPoKGkJwLvrPpeerPaE96NKrbFfURALLLBDBV4aPTeo5hDsMWRQkaUuM",
  "key18": "3tPVGUXzcQAbBVXhYd7khSKAYDBC1ZLVs7Ep74RzweTdq7fn8HoVSjf3KDKVMNMv52VaqBRNNF1S8CpfE6LiT4cX",
  "key19": "5eWq4f1V5bGnsFr87mL4tzfQhTw2WmiHurjWfzwnLxnpAreVDX4EbkMD9fVGscHeeBXqbBQ7ceqqAgXbeVXa8vvv",
  "key20": "5JMs138Z62ZdsbQiyiLuwoa2t7vy2XxyUxU6TcT3A1TwcwBvTAxTwkbRRVTi7eFHw8VkJe23R6ZazXovLBwSHyy1",
  "key21": "4WGu5YbedcFKfzRayr2p7q9W9cokHh3CaTcdxJLgAuvtXwedhsAB7ZLQbh4XBhzh7nEwAqNNY3aZkAbYvGDSeDyn",
  "key22": "2vcEBW7uyLEgZN7B37AwNHJU2UVnaRrnK6pe3dPrPYiVypXLxL2jGMZwz371PboZ6JgHK6CVuBzFGf6NDogRLtK",
  "key23": "5sxFGbZzs7cCTwCiB9mzYKvTLdrBqvtpkvMBDjJyp5kJ7rWaCVnDpvhckCCcHL2a7rQjxhWkGG6k15qpQ2PERR8L",
  "key24": "dZrRkT9Bg73brEF658i6hBWfzgMAArfybMjHhiVjXH5gdMqSssrGfhJhwZdmHYGKA6p1phWfeWrBw7tTaoWcC2g",
  "key25": "ExJRP9nES7Yvt6D5N4Js5cDEQ4nj6m4sVbqJUEKMcDPzF7d7ANgzaFwZfLEMzwFzN4kGarojLPHwuMyWcpfaw7S",
  "key26": "61yEAeJRmD5rV2KDvRqLT2vo8xzz9k33q7MJLdT8BT9b4pgr3h2kcD3YJ8tgnwLW92tKUc8QJNhuqufj4njMqgnD",
  "key27": "32gzCXhXe26N1PYQmdnYX9SL2pdFNqoTncUUJGf56Ujx9fkrtvExRUQySGTrZndW4aRtFiL6sPWYWSPpSnHZhezz"
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
