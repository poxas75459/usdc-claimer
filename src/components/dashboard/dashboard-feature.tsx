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
    "2JCojPvHgFxNQD5pTpEktQc3JoLYhMuBa46FhzZaxwdtJ9VuF88WfGZ6foYKabQP3SknSFZJFfu5ME4jfszgfTy8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YnLSACYDRYnEtwhn1HWw5hVnnMS9BMBAWfJKXZGTAjpnarXKthK5wHcJhyVujSt7zzaEaKxwDUBnehMyBwnfbX1",
  "key1": "3Qcs85uQUeoDudv8SBHtmt3cEzVeavWW417ZF7KBVbsA8RzcqycR6LozZKeNtUkUMwGrsbptvHcYz2Vma2xJ7ZDP",
  "key2": "5ShMgVZteMiBDTNQJ2JRMRN9wMLgi7rVtv6WAejacmbi1yu26QCWGvYFktKUaDQepNZhWmUZg4a7mELXjqLsygpC",
  "key3": "Hw33TS2GFXiS2sUoojeNV7H8uu3eR7Adq71bF1YQGZqtGRqQNC2LEDLbuHWHzfW645Lc14GvnjAq3ovg2H4DDzz",
  "key4": "5jWEY3CCuFn3Li1uENtGZrbxeynun5RJzLZ1vZpMMzytdgYNk35Jf1EapzYji1qgC8DnAnZVGzXEiKmUMGwtkJQL",
  "key5": "5c3aa8wiQfswguwqf5umZh2rrgiVdh6mZXyXK23HfBYerNa7sKZoGRNW7isCe6ijHC3b9TGGWVPJsSdzdts6CD4W",
  "key6": "4VpGnTMACHutHKCctVC3WB75YCibXgwntB8nwjm6BJesToWgmYrKU3cQieFzMUEV5QMqKvL8hhE2MgU1jsyt2dZ6",
  "key7": "c1bJ8gsFH1JtYVGVb7HhHkfkBw13XpkXkDzQFMo4nEBgzMXAFTUkhNcUgLZb4vLFs61chYbnfDgPJDDR9kp996p",
  "key8": "3PuQm3h8Qgsm5w7g4kkqJLJHNxbEurb4HdPYr7CNhd5isMMCU5aCExLdH8nP4Si4RoChT7zTfZdYzqkQu3nvEdhN",
  "key9": "2vjFyvvCvVT6qNrV7PJacomKhdRRJQcfqAwTxnarX9w8SNcKb25CtGsDoSLnrSMoDoU4iVtarVRwb5XJE3p1wcsE",
  "key10": "3MPsXifTvFcnp2mP2J6TFmPD53QHT5b45QEMhJDM9rL8zvNNoYT5DiFVWVDB7JTxw5JmjJDikWuNWteQnGwxdi4Q",
  "key11": "59ugcguDAthHCgWsoGjm69KtrY4ywDVqgzTEHzkELGKgiLPfvBeZju7xzVd5v3KuAdLwbzaFjtuAyEsLcfcz5KUG",
  "key12": "3h2sXRXhUJwysrV9C5qAPNBwt9Y2gEVZpe6ikMFAweX32VR524aNmuYgqxWeha68DVhBEBEdH5i7wpYhciJNnWvo",
  "key13": "5FF87iDksR2aCNDacsmE5rnsXj9xzrEUejPiGrnkgaWBnXNzgnT5MA1on4RrzR2TwtDRmUPVY9sXRJbWpNYK5Dif",
  "key14": "3zCekCvJNRiTQhnvrr3LXCzufpC5wAZeofmkw8cLt8bojbtywR8M51CmbypxGrRy1koGmuKYHT2nH8ZjwbJAZCVQ",
  "key15": "28LaMgx5NRvJYXbx7Q5twao6weeb6aW9W3vMJ4GsQeSviV7byNg4UdVAGmPFSbUoTFamg6nKR5ddaCfYi8oyrxfD",
  "key16": "4DqkXmykMvhexbuiwW1FyPUd3hTLS7mcSEvxHs5wh5N226nHUqHCsRJa6oDr2t1DfxqQ3AyaZNkebx6QbHv2AwtB",
  "key17": "2MhL2rv31VByP8kdNLw7HVVsNcbHDkAd7gVi3yp6CR57TFnBH3HQTkxeVrGj1gjZzp7K6mFT4QEpgEnQrgmQYAzH",
  "key18": "3kSKnguiqsz3DtzYHYEFxwJiw1B9TQDgWLrWp5MZVtZJvLaHv5kbLMg8Qc7KYTzbToPbPa8BfavNaMganya8FmF",
  "key19": "5KF5YhQqidAJ3iZDWVMymRK5gVxhesS4vYkFzF3dMSv64xv5oT9y9Rk5js9uWCFjpD5NPiXXQ99eFJCqMdTcQAUy",
  "key20": "47VPLumynZ3K7LTPrEi5Ve8RdkmjhsqrvHAyCDMa7DTpLXXb7bUUsaNLgQWe3UjcPdWWha8qSmknnsurarJAnLd3",
  "key21": "4NgAHbsoNQG8Ry1knYY3oMEz5iZEfJT3M9JjfrPDHQDpbw8WcmcfigM26pgaobbdawLbz1tuKfhsQXHXz3fGFvqK",
  "key22": "3qvUy2TQRKbRt7P61RcgVwUnmmQ8jmFk3TqYVbzssF7jLG25vk6sBQDVYsQtYyNU3pHecWxpE3Zy5EzxLrbeUZMC",
  "key23": "3hdN8N2Zia2QrqBjf7tdmsXTMsftpUfjCKzhpXGW5u6xWSJR8iCrax7gGBzQqco7XeMf7n4udtaNEfQBjZKh7Fq3",
  "key24": "4tmZvgzzrFFs61kYdXs78R9XydzFvHmA7UALrBa17StzmoARPKLpPwc1t4j5LuaYr4AT3HQi4pQoWtXc5pfoNC3e",
  "key25": "38ZTXMi1gayHKHtG9o2vVn43jmU4o9pHCus8Ppkd4wvgYJP7Gx3kfXSCJn4beEMdqKnzJjR4aiSitFnm69F8K1jK"
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
