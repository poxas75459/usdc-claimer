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
    "3WpZjsHkoy6Ae89N7VZZ3iJPTyXzy6bomiHoUZjCh4ad7vJLBRjJxaLNuCjgeAZWMyKGPmqGM9Lp4dEDNS24rXLZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MNqquFfVGfqPytTKsLhvceMyMntPiMjH3QzJvue1QMm5HAaAh93hdV1NzBw7RZX7Qhyj9nCM5mUqvm1rDMuiL5D",
  "key1": "qmTgMKNkuRLtSEX4VmWVK4gKDaHVLHjpKfbQKC8wd4JiaWuv8cVoUD7YZZ9wXfGUCBcNKD3nC1pexUbAHXqLJm1",
  "key2": "FWCnBLcxfzhY54t9HLkNdtLX9NSeuZJLoNS8uDTXdqn6VHoMr4MMs53NjqMPGVgv4WZd5kP8UYcEs3ZQHo2r3f1",
  "key3": "expi3E3CCJZymw38jWQTJUnrsYXwwnP58x1JG3gRp8gpHjex9g6QNL47DX4qoNmoAWvQapwwj4ohe52RpbNwFTX",
  "key4": "3hBr1xzd6f9nqFqLCXv1NtZU9VPM5SUa68Jzb4S9umwyfNpVw8bbDkZuQkMiqT8iHwJCx45uQP9kygKCf3sGgb8F",
  "key5": "4ALmgjhKnZDNA895XsNE7LsaLQ6dWAqZV6j5GcunPHDnKfQp5fhwYRojC8HwqdZedCegGzbCXu55Y6yNjy8VkViK",
  "key6": "2PiHqULQeyXJ7hfCxPXFR1vpvZPvMpGrHAkm9Faq6tAjqw3j2Mba3DkM2y12CbpDBpMAeqsgRc2vyx9v7DqUytf3",
  "key7": "FAiMnv8Z9hpEA7qvsVgMrCpDADrixVWgVyXXnEpM9XcEXC28vw6JUmGGtH5u1AsMwXuHDnNFRUrsLmfWg1fYzth",
  "key8": "3A7Fj4CXX8fhskPTwiQZnoAGv28RQT7sJMphGXmgfyTjTLtuFF79SuoY2xn3QAZkRi86sBbXAx78wkhcRgkD6Lyy",
  "key9": "4qdRR2jRDB9hMQZ6fbVx3C49VwKow8tsks4igWWWor6kwQjs1bceibEgUJJJVzvrs9dPQPPFS2ASTBD9Pard4tAZ",
  "key10": "3vLLGC2CgexB39Tt5XuDSwMi5qov4rnR215fek1zYufXpCzZ4SxBbxRWpLU68wepyjDuVADvxzgvE1a8pGEdaKwp",
  "key11": "2EhASFqnFPibyiR1EwBEYfoZoSH9TCsfGzvfWgxNtSzGabTYXY6ZVUocKJi8PWA7qQC1BBVWwQJzgbjDmTgpkHnf",
  "key12": "64b1khk6czmxKVWumCBtBGs2PBu8GsK5xEs5AUSBNsxvzQmdhrfEMg382hBCAmpWaScts6eTD7g3iDgwhFXcAqSH",
  "key13": "27bT2bWdqN5Q5ov6zMnNUoNKNWJhBSSjdoFZw2E9D2urtmtXPB5zigWaQjCQPzmCgY1zQDme94WSTy4hEvHxoWEa",
  "key14": "66QRyeBpeo8mH8T3mQDzEzM71G7cr2nyakb9ZMqkGewELawL3c2PqSm88NH6cDaWjFjejHG61U3HP1qCZ1aaqjNr",
  "key15": "5KmcdR1FbS5K6PrbjwUWEK2rSHDUYgvmdbRjodLEtLwLv23FbSkbFjcP6RmQ71ZbkQ9hSb4UvRBB6y5mVvbFe7SV",
  "key16": "3NvMbTzLV1ESs3u3aPeAKCthDj4JrrxAFqbAimBhuoGdWtLsoocjQipNykdNqwrpAo4h5MugpjN9hujEaSELEkXT",
  "key17": "5Eg9eJxjrKdqZPRztobN1XQxYigEGKhB7ByUWGee8f2a6D5FvceVctoMYn4tuFtrWWczquutYdg7qWD1NKFqacfF",
  "key18": "VBRzdaRjJkmZhYAUEaVqqSxWH2x3G2vhJUEbsLCe29ghV3Ubd3GxJ48PSdJLvkkAWs9WsXZh5pT5yiDMExJQ4hy",
  "key19": "4XesB4z7Vd8sgX1kMDVL3XisNro122ZzjoQkyzDb3RLxjeBGhtgNkTAR6ugaEhT8WeJfUqTDKdm8ZX3X1QJFP3Ly",
  "key20": "4p7qTQ6W4NzeMKV6kbLK5yCGPtkAfomL9KE5uJzoq5CXEt89FLWbFGdoMioucsLGTW8vMTZRyHY1PrU9swEHPBZY",
  "key21": "3iAgveTN9Z5vFJjN1sEx9jRGCZ4LygmTuEyw1imnZLrT8fQrqjer5ULjZnak5aKfn9kkQ96TSYDRGaRBQ6ZAFWop",
  "key22": "4RKMYDRBF96Y6YCAzxBndUUSxHq7jvmT2oQs8E9FS1L3tUhXdG8E8gnnCST4paDRjdpiw8QV4eFj6MeRJXFgBdpE",
  "key23": "zXqVUs6VbsFTYjrtQbHvDY8HZAj7EiwBEa9m8nVxYmNmoHjBLmsRr4VnyU4JZgHfSBhJywZmYM2kLHK3Tw3yBRn",
  "key24": "3W3R4r4LJHHmR9HscCUfhmuRar6ok3tLvT65cQuQN7ZGMRGEExSkDmBGcC8R4CiJCuBAZwoyBjzwRg1ymFUovgK5",
  "key25": "26uM4wXLncvCts6WJwdC5dsrwhujcuxFady534gxsuMnj1Q4Fgs6KDhTGFy2thPGAijPXy4rhuARx4PeqTjPjFZD",
  "key26": "StsXYUekGddZhLatakzXiyhRe42DJAT5PwfrNJLV9TLmVPE6JUSNtV6eW1pNZxb8ww66cTaQPmpt7Ardhe98o67",
  "key27": "5waRhL3VYaR1J6iDhYucR1g7cvaCRdxbohdYc41eUUsZ8RUrgxweiTJPg3d6YjGsPrAcmai6qVyo8GpSaAYeL2a2",
  "key28": "5hw4jex8NEyPzKjgSfnDBwNTLCRXR6dUdjy4zTP2ELhuJcGL9pxZVT6W3bYCwekEvQfBLmtiZET1JsdxBCS7VXU5",
  "key29": "4LhtK6HbEzspuFsCWV9gjvostnffZPnE5RU1YbkKBfxG1cWWmTfx6nQgMaEjEz6nC49mAi5uFbramhZRegaCskSm",
  "key30": "2s3wJFBdmHWL2spCf2K8nj8gMQfZzBLqwzXsRb44UCEnt9X9rqaeNGrcMHteGbqtQpUtafWNHjuX1hVHT9JHHxbJ"
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
