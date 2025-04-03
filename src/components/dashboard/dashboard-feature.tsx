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
    "4xytSXGdxiKtKiXKXJCJ6bjwpRgGXt1XczfHLMFvFiSiF7Rx9JGi2wCE8kAa4u5rtbV5q6qoc5DsPCNG56a9bCUk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KxQd7rUxx3CiRvFq6Nnn5NeeQ5xX7e2oXpnraKWodanFUY3RLw7sae9ieJSFWo7ZKKcvcjqTAQLcQAt8cYfbEMR",
  "key1": "4NhGmkTQNbegBcC9LVkssNauK1Yoqck7e3fqvSgcaxKjfMdEtDRSwmNuwpwPH4KZSib1CavUsNQjgaNeKTaQZwr3",
  "key2": "NJCciCbuv7URgVMQd2EHoetY8pxug1fZX8u8vagRcZyyysZFoc29cWUNUPH9FiiBUVFQn2EYbHXXZMB3uwwjzF8",
  "key3": "21Ns1W5qgZEdius8hoLhtJyYghgnkdM9dfM8pfid552NxRFAyj95GCbzFfn6Xxbq8b8NAjFHN17sKaWxYu2SPH5S",
  "key4": "nRe8C64chsgydsR5LfhCkmVvMiGyVRUigRmteYUZ5mVCaukf2jmJSjmU1BcogRuVaT1DQRh34orM3DucKYiTHuJ",
  "key5": "2NRocoJpGKbwNFaBhA2DExuHfaErX6ujuVW6NuU3FQbFCFqVidQFoYSMCSyQGmGxhb3n3pswvwDwzP3WL7v33HUC",
  "key6": "4Gpf4oe33sPdynxiMXQ1ASJXcTNsUevUfRSMgiH5QtsrmCVTxSNuMKDo9XaPxjGCJzp8wwSnPguTWj3XTyJzB38s",
  "key7": "4DbUKDWarHiSiFZu2PCcyNdpNtKRX3QDXvp7fPjHKeYGGEdE2smvTnoM8DEMQmSTVfEBsxDB3om1H1ZB4EZm7MfG",
  "key8": "2e24PCvbteH4FPsHmhUh1tLyC7gVTgRXYVgTo7EJtoqKcj1AiLmT2HYspEATrLmAdmpowctbGLNgLScGfPMcsrd8",
  "key9": "5UjMGwguw71V8yLoqJYts6rmYaARaV5jG7BkRrZGwMyc1s1fQXSfDxZTDHMHqqTnW8kbvuSdBuAtckW11DVBFShC",
  "key10": "4prMsMaYXmq5TKYqaxG6pimZ7E8Pr9ar8FroRth2MyCP9AxPv8DCJFNs3G6fb1T6v5MjFpUWK6WJWZybouWszjZB",
  "key11": "3M97nkK8aFu52m5hBBszddDxCVYu98bx7xK7tQ5yUfebkaGHgavqrm9DZ2dBJWDZNV1L6GzDf9p6Rmn7K9DoT7w7",
  "key12": "4deycNExRBa92F2vSRyWDH14eo3A2uEmoCB3b8MrqgJgjiWvWPpiZUbrQYWXPw5vAVX3btv5XJJfR3bvnV4bWxZQ",
  "key13": "5btjMezNaoa5XVs5M5rUDA7skbTZGqswu9od6hhuZrxrs5vpJGrD6q1JwVJHvwPYvYhmQNh4Vcou5V9BVAEMmEn1",
  "key14": "2rfHaUKBodJRGVHWg9GQqiac86E7gwb8L6HshxFNwtNHkSVnHabBS57MXVFCRrhZLUnJ4p1WmzJx3UVDJbgW9HTV",
  "key15": "5c4TqhFA9jEkq71yoQEsJzgMCVr4tGoJz81YeXRqy2JDbskGyZBdhJumjK75BSFr8oi7mYFq6Gw8uBd8qMkXg8za",
  "key16": "2EvMgFZrEHKMiy7QjSFPdM3xdutQeAVBaqWJE8SKJ1zE8BySaRJ3TDfLvWdEXVTnWrPLNyRKVNYgtD3e56kKMrMk",
  "key17": "5zFWogAeDPqY9yGFQvF5zvyXmCu2cFgBW7UJrQAi7M5CmbLi3edfJsLM6EuDdUXM4Yy8Lja6SK79uwWKyuzAchx5",
  "key18": "5znzsCsCDyzvCGskBRtH7RnmvMzsPVVdiAKX1icCSX5ns5EnshpB9JSJ9DXRh8Lg5Jjw28VB42wxYYAU6EEKwhD6",
  "key19": "RiqGZ8a2KfhmwSwCdLia25ygeYQr5HV6tJ2rs42ScwpS2wGNSC2r9Le7LE4dQvSHpeJRCGmcDMx99PQVkZR4NWf",
  "key20": "2Mtg6HW9eenjtVB27MkqAHDwJtteCqrekoECydmGnottXbX1WR5LKC78oZ4k9EfH2PbuB23DgvwGD33V8TugDkoi",
  "key21": "34D3hVr825viJckBJpke999a7gU7CvEmEAGpRBbvbLvcoGGYkfkUijGmbD3zoJUCauWEmaM3kbfAPLAgC9pZ5s4G",
  "key22": "3AY2UFYQqZcLaQgrCAFsjzhT9QVZF3BKnjrv5DWfaVQnzR7n53vbtCcLwHdYHHLvxSEq4B95zibBKyEV5a3zPTwX",
  "key23": "q3fnq4bSH8Cw4yEWf9aw4kC9CPXbtFKVNeQuMtTDw4afkRqvwMf52UppNchZj38mxmqiy85Q6CGRnwkPf2xrwxL",
  "key24": "3QRmgk6dV8aDU3oSGUzAHTq3obGsredrAmxpoa4asi7ktHV2t5vaM4geQwYBdhAjwrATqjPVyH7Fsm3hSiFEoyCR",
  "key25": "4rybWcRum29RYA4EGG6hKB2GobyvcmsqzwgsvQdSSBRR3rWZEKTSXxRj4kcHzyRWYp3bRi6cEt2qswBcQ54r1K7Y"
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
