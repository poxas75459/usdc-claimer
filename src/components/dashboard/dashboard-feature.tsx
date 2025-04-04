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
    "4ao4f1gKSnu7QWkYb8fYLhweXH44J9rviujDr89usAQo82FhXoetLkAZ3A6oW3Uz2zUNnbeBenuEQuLt5PmpMj4k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YXV8rAGmPdDq3DSVZgSb7ai2CSftFpSFcsWiNbbjcs4BThSVmPW81QVo1Ek1L5wDFWyjBywNMCGA4EZYYFCbiVH",
  "key1": "t7Kw3TEbK9VPQWbmaAXBTvF7P68HQcWJZEdxcYp3rJxWKpCz3t3sVehLtvgPgxi6yAHHRcCsU8A6JGdnXktbpsL",
  "key2": "4WpunfSL4VU3yJ1PxcNmcwLq3XsbyvuUa5EcTKjPQ7UGUCyxPBLckSYEKRzRMta8haJHB1JAsLA2dbqob7YaJBRb",
  "key3": "2TpH6EiMWQfcM55YDUzFmzJLWDopsGH2NB9nm8xGpHgFB79cFBtvmwtZUEb1m6tDHjDUit7uEN9FxrswRJwDuHWF",
  "key4": "5GdfdUimtSb6tUZYgs3oxNiDKoheHFLrFhsnnrYYXp7iZSGRrfoQ4MvZnD6r8J2NokHZ5ngMAJXHsdgFq36WXce4",
  "key5": "5dMVbzWpkH9Z8h8zBtFe19eCPm75YsUbR88dTRA1AdofzfF6dAE3viCm3pBPS1owsrG2k1hzZUZP81tnxwkjMrC2",
  "key6": "4iEWwm2i7fctZp96axsc7FjGM1ah2Xm541s8rcXY7jKnm1pQYVw76V45HfgsoCg7GwhGBpWGtCjFkCTtXDdDC4MD",
  "key7": "e1beDAeKn6ag3gSnALz1ZH2zf96RrF5jZVMZoKX3YZfyzcE7KJANEhZqL2k1fkCfdkeEuK8sQ5J3VYKewr7fRKq",
  "key8": "3zRbmoBstxqesKPk51XRpeFDwD9kA7eBJaexnFuTxfatKFHWUXVStf7V54bSNapg1qAdzrTW5P7zwzmxizDMtvyn",
  "key9": "2LxJKSGt1QbjiUPoYDrkJmJm2oJpnjVBoxn9xbQ8u7D8sHh7NdRYrrVsEFHdfh4Zk7WJbuYg54xTjYHd5tfzCjPr",
  "key10": "4434t3kEdV4seppcUNF183e68W5HwaExpKAdZ7DktKs3BiE4z3m9nN1e6WJe5u9Sxqkv4MbuxMm6kFvQWs6E8jMc",
  "key11": "3moijYtnYn8WdfdYisFLZFW74usj3vYreRqRYZe7SEDJge9SF7SFWNN61bi1CRjso88xzuHQiBv3FHxgSDKq4uom",
  "key12": "53391gUjHwrTbV4Ca9RZE6vbuZYUeAddEd3pdokNevEcmMkU1yRdkE6P1Atr1dxwuJZW13CwLxyp4GCsKZRmq1bv",
  "key13": "RDEyRLwWvyY9dstC3TqTTbbxBsFrQEbPj8TQ2R3KjwZTqMpcHrD7BLhj9Cscy3GDFmzHYCVhTnpCdEMuqCXnCEU",
  "key14": "2vo951SBvu1BhzxHjHfk1BRmk5ygaZjL33znAkKg2fpAiAHkcP8GNAAn4avLwj1gYqLjfQcjGmQsUkCrWSPLSfSY",
  "key15": "2en3fVBrxKPFYcz879qKu62LJ3yV5CVyvPcYiK9qDvGwBSuFFAoCmSQhehSbvtKtvkketUgAzf7co3a7hS461ywp",
  "key16": "4q7EqptRbCaGcH7PmkJfgZ3T2gB5tst3A69iAnye8p1BQrGqZda3kSm9qgh4adNCJAtkpeP2A21HSjDzpW9pMDWS",
  "key17": "3eGQMUcCTvj9QLCXyiATXR85Bt8DjGxoxBKsQ8dUXwm7Gp3sP5Ueq5xpN7N8Ac4tCzDiLZ17Jyfq4kmMsSAGQ2Wm",
  "key18": "3pqXJfEgC1FuZvDAAqwz4m5entRUPnHAtYuhJmC4AsJNim8NYKZtVXD6Rx6C85M8BV6umqCsojaQVxiUwqMfJ3vf",
  "key19": "2YwFkc9cZZEoDhA512LPLCsdg1Yhy67vCw1gk8cM5umB7FPiSCNC3U2F1HXchmfxogbhD2NHgtySshPD5E4KxZ8K",
  "key20": "252dGLaZW5DsYfzf8maqZF1pgH2ozTBbVQxkenQwCZWHpSVnybuWkZ38Ev6YhW66iVYq1ijrRdpZbyZYYaLbzmoo",
  "key21": "5jF79eDKnS5duG6rxDVrBhVFiTs8XyxAGdUPaVSBPu1CNmAyMuAcwzmepuKe8oPDkfj6zXgeM91M4MC7Ej8AfEds",
  "key22": "3iVeQpGpGjtpnhBePTUdqJX9BM7ckn5oY1gTkEHP7HbT4chXNR6byKPV9ggrGns5mHGzYdd9KdRpvNWV9Na5oLsF",
  "key23": "3cnSa78zTZNPpDmPRnSUa5DwMDxNFQtA6ot4wrbPCpfNxcpw8wmiE5CbhhSxPigNj3aYg9oN7SRDEW4xF7AWw7oX",
  "key24": "5vkccV9DNcnN3ra8pAUX5wWvxe9xAdoSGrN5V9UNkHeqfyd6RKsKaTnx7jyLm4pcvJdpYypTqRQcVYPCf9U679um",
  "key25": "MqZSQCC6cUr89SEZDw9M1trF3caKqepgiHWmRAQKgWavTUVS783nBRQUkQf8XuQiUp7RD5hGCj8bViW2zDUPHbF",
  "key26": "2nn71bQNRMg5MLqBZHM9PAZ6t9XNCdDmHMajD7wWtBg6vRjkJ9LUiGqU8vjCxJVU5495cvDtJCJ9nNf6vkGieZZq",
  "key27": "4zRM65FCz8vERebvFQgnd9e96FDMzQz2rV2sM1nCZX57qMFqCTziZryuQmuhBRUtj6KF8hV8g47mRFZVpQBfcCTN",
  "key28": "3wuQNWK6K3qcFU9uw6nGJCjZ98Ncy1o3sNyd2iXUxiiGZUii9cgmDxzoEKQe2g2CsYvVadroKq32Nq7iNg1Q9p6R",
  "key29": "3G3WSZA77Y9yU9UTUP6qaJpA6enriiiFFBB8C7rrjAy5o4EeVVCMgsMqHF7HgChmebX6LhnhLTzGcN1GwrACvryN",
  "key30": "5C3cmBFpBNvciAexFWJCZ1fX9UKG7v7HZFCfM6KkzDPqGMrHckpni2XVVLDRHwDJcNEGSLgVUGNtsF7xbM3uSrL2",
  "key31": "cEJFU3sxXM9NBB573xkv7YA81RzBRoinKZkDkv32GfXn5R4RU5cqwHVWuPGV6TSx5PiNrUr4azuFPc72VtbfSwE",
  "key32": "2zubiPw9DSQzM9VbNTjkd2L75gTQNHVkHyDDYsQqHz8rbkMRsrJSTdvi4yE6pKtLoTT2Uojo11VcAap2CUneyAZF",
  "key33": "5CZJ2YWCk67SSfPrzH8zejMwM8QdGmffuVTpZ1un8HCTsgAoo6DBg42BFZ8PH61XJu5drZQJbm4SfzcjCRTZ4LX4",
  "key34": "64D4tVJoy66smFmbMc451KR2GxsoxXF6ySYSH597ECB4vzyz8NVxoEctftA6W5aWCYA8uQRizDDgcyvfDuJZ8FfB"
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
