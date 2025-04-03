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
    "5Lc4Xmtz5Gbvh86Ltukurs757HDpGd8wHbEKMvbCcwphnc2QwTWmr7XpJij6hsj6LwSRiYga4a7GL4bcTP93tngG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3o4TY52tJ7egsrbRbfkFYMyL6r8KrZ6cisnqdqYz547ZdyrGAap3oVh6NXWapnvSTvtxkXGjcxhDpJfJZre82xja",
  "key1": "31Bsfg1Yoee6RxFp4sAGmX1X2VoSLnmYEfb3AxxtjhsZSgDSe4HTWnyvV2qpaAwSDARHNcnQZLxGkX4uwbwZvEK2",
  "key2": "5qVTmPuzHJV8RXqp1HqWaYzfEfFGg7RdrD23xB2wKmurpFmb2egyUmg5cnE3RgcELXzQ3QB2VsKFiEWuMtwcwNnZ",
  "key3": "5GbGQjEmMnbFn7wWPTKvqC3cLeZV12KdHa1df9SZKrNwPx83jeWF8gGMHPNgdxHwE6mbEfeuXit5JAskb3rTpJae",
  "key4": "4wcWNKdqHeqye2ArsYKoF1b9fe4ErFCf9CWtfq3ZbMCZKRMaTYL8p71hQsGTTE9xie7SSonnkSfoUubkapPJrzao",
  "key5": "3HiRSGLZiatpJ9qwRRwAWnLQGczVZyiWSn5StJPmL1c4mXKzis9DQekooFUYpzV7QBiPHtqZN4Ctuu8xC6yWbFiU",
  "key6": "5u3a7x4bnUgSnXMHhxqkcs4sgS7AsQHpjMACL6XzgHJ1KCgxmaUXUwhZhDUA17RA2GkNrca1EJCdKdTuF17TwV1s",
  "key7": "43hC8siKMTKxpauoVHDbVn5JRBHYvkrZoegsST3oiT4jbeA7y9Nnxr48iTMvFZe2tUgDpfT2DcA8SgVgzsSMvdnm",
  "key8": "2wiAb1nFDsZiSKTEa1zYAWjxuuJQAJCqaMv4X39DzeDRTGCUnLLMhyeEZFJs5y4rJbeQut2mArEZqJK7p4FaDdpA",
  "key9": "2vdZsooSPJJzbaaPqHdBMACfyReuXG8Y64HxmHcaEHKxQJ8WpmB4T8AXGMayFg5Yv7EMJnLq4jB2ZJA7meQ3oReT",
  "key10": "2VQAsNWL26mfcTQiJMZqdaAiVdiF8yx5iEDc1bXUHAZugSa8KZNrMc92stSvsJCVaiLFeVQwA94YmL1dMQ6QxCq7",
  "key11": "2cEtTAT2XbD4Yrd6e17UZDtu6PfAs9GG5za8Y1aaajwq58wrgytXo69Y2b2jvAVHyMC3TN5QjdqMd3AvqEDFtidA",
  "key12": "5wEUjYq1J9c8Zh3gzxGxLG4XWXGP4qDbkkTCg1AmqJsnyAANtr3wTWnrHVgLxmFRAAetnCXRBivQPcg2tyDrj3M",
  "key13": "2m5yhwTkZVFATYs9vVNJj31RviAe5mrTKPATM6iGCa7CPZBNkSYyGSEZ8v6KHDoDWqhUjHUuBd6Z1vypszGhuKk4",
  "key14": "3Jey4vFpu3YEm3eKsbFgJR5mz2ZMadDa4ZLLpQ8imLGbYMR96iGMQmWyCQefpM4wPZK4JxjqNQp9e43Fz8qDz31",
  "key15": "4sWNGcfjVhVGsHR6HjDkynBshPzhBh6aCaA1jELTp44hGRdwn5DjsxoB23r7n8x1uJvwPXAJ3UBLHrS7gSDh5rRL",
  "key16": "46fqf5oJCvFYqNxTG5ctEwVdngCQfqB5bkCJazcxns7Wd4oPctTNzq4Hoy5PWwzSyjSkrV7VQc7D7VdvqosiRCor",
  "key17": "2sxSs1sK1dwkpnzerShHfpePiPn4xKzxh1U4PW7WGUt1P2mKC7YyCZ8Uw5s1Q2EriKESX7a85Rj9KuMy2rzQzYA2",
  "key18": "7TFfFdtLkJPkQs2qPuaA1wwKh8ELstM8oQKeeUK6JYQboCB7XnvtsbqU6dkVHDd9E2V18UN7DdfEZcHDYZ8KDGC",
  "key19": "2beVWzn2r4RV5PhFX3ef6YrXndQeFrjuQFHNnZaP8kVMREhFyyC3yGsYqFbZffGhQ16r11xPEkuZXrm91fZ4wRfT",
  "key20": "3qYkaeW3E3ZHjoERrxqsMq7KaKA532psoMCxnfbqCFpwRwtJ5Fjihe7abnmov6CJbqv2v4cxRii1KpEUTsabkdz3",
  "key21": "4wyPaVVezVUZwXRwbf1aoUSWTGZGXChvTJ21Cnw1sAp19qyq3iHjXyEvTH96fWxfStSM4fk9k1fSN9RhvwmkMHLr",
  "key22": "4PKG3iFacrLM8G8Zpugz6RjkqCyXGzBXXYGQxG6FaKdRauZPDojtf4yLV1BgdJucuzfckNrHKK3psvfvu8DaEPDB",
  "key23": "3UBzjoUerBCQUtwCus84EPAn2ubhBzoWRCZBPdh7KAjv5ApWY6it7P6FDvyUr5zSV6uwJwJYd9na5Hd8Hh1dXhvC",
  "key24": "4qZrH63b5Lq6UajwB8tQxzmpqZF7o6REtfzX6UpYjsAd1k9JsDRNs5zm8t4yZ8XAu44u1eYEb8DNX1tXgQQL78s2",
  "key25": "54hwHAznc7ixwtbu5FpcqphbVxFGNcXQfkPoDNAV96GCABW1pKyT8uUNT7JNR79LHt7XxzN1B4FHK9KZEaE67vCK",
  "key26": "2AcYNZGLALrfacGNeeKKMUDsje919Rgmf5H8JG8UxtN9wPVCbhmHUhuYuMvoP2G8mMzMQ1CZVfBX2ckJyntvGhQz",
  "key27": "4hz8dmQ3PEFWwjCGVsCSF7EiVTA5Z7zGQrgoQiBhhRDhj8vhrk554rbQikkpWdAZ6XmkKL3zKqTTCFZmaWRCotSX",
  "key28": "2z3vebgP4DLLt31mGnTwRu3AmtCP3vuJmGHeAPK8XabYk9F9EXhYnz41Y5c4GjGmVamiMRCKC6qUuQbfc2GZKVuB",
  "key29": "2pw7QD5225AMevvcP4orKr2X1rCRHscRf1h6h9BQaHCCzz4eJ4TWv6djaAoLUaqeMTngVz6AqEF6dRrg88rh32Lo",
  "key30": "5PgrFDmstHqK72f6uQ52uHjF4i5LLCupeoKXHNZoscfGjD4pMTh4zbgLJz5VvXYsYzFS1m6aWJeWdqmwtxrN7KdK",
  "key31": "5Zr9b86NYLsRyHZpeUkHAX2itqXyTqQnTrjqnTwAY3e6TxTWuxjyYCnsSJBiocXMT5QaudRP5FHwhVHbt93TNiLV"
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
