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
    "2453y8WCNE6eRRRxPRcb6AbxovmwaWZrq6koUquwFRnbv9JkXJBcWwPxXMikMym86wWmGDtk8nEDAPJXKHMa3dt1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CXrGoMjEzdw89GckyChuVAXMmSCbLEdsL66CLAzQVcTjf7Qx4PD2qiwfFsbddtMuZDwLpqf5ZTTqWaNFsDjsaYU",
  "key1": "4aGV7VafBgpKp7cfJzD7zHwPiLDSxD7unTHyWcbzzXVkT8bxtVucQbSFhAWvqg3iu9rqww7tDCsCsrmfPWxdSEa2",
  "key2": "5KtQzoQLsJ1qCCKHNCBZPL5Hqt3rxUtWQJSvVdPv9PMRbREszmQyzKbrvepmV2nKBVH8qPMcwwFcA2cNsz9GkYMH",
  "key3": "5zWJwdBEKqJasUXqAczhYAtvRhZvtUCr82zXtfs8ttdm86jeMzxtpxUkzXgo5jvt9rA4n1ziNsAh3MejGcU1MiaP",
  "key4": "4QDG8f47vmTpdwG6GnbtdUnvLnHfZsJhJzBwcSmxpAJhqZejJphp4jqqmFCtYwS4RPc8P6N8kuKzEBCFqXV5kEmp",
  "key5": "5qqfKw15na9yPwNLpLdAtKaM9A9tX57Nf5vvHNnA2pfmYuBPTqMa9goxaYkEdf5DgsPFxuY9jQ4r4XdzZXn8WUvy",
  "key6": "4NHLBYVMEGCfBxUnBmhj6K4E2LodN2yd3VdZhiADy6nYKqR7c59bUhtB7Kd9rq5YU36brnpoCPfJooQPJw1qqWn1",
  "key7": "3CinSS1gdgHrNEsKunfnAgdLvLX6H1GRDEpvLbwrDPyoeCVqn71BGgnMbLhvvhs1EpoV3vzGT9UU3ptWCS5xwwsF",
  "key8": "3Pu2BxKb7PuhLru4TAVtwtHyiPAnV9ahBjZQUUsK5wrSgY8ioMxGq2LiuRnCCgVLkwRq9pGrtgPE1T1nJtXKfhTR",
  "key9": "2FCgUU2znXPQkdD8dSwKGWgQnfDUPM1u3vtcdGYuJf73BPEvDnAjn5hwcMqNza6KdPn3dNNj68tr6UqTSjeXDmz2",
  "key10": "2ywFzrGk153agMdWqFwcV9aUsPhQddcTxULresmSfVtkAazP27i69e4iJ1WGivsUmaGyJ3Evdgm9zmWf8h3VsarT",
  "key11": "5LDFvv9NqDRym5a2w2VDUoBX6XquT5sTLXr72TZ4bAsfGq8n15JYb4bZLsE6RNQw9degTo3hh5QDuyYcch71PD68",
  "key12": "41Kwweh6ipqh2cfgt7kP8qtktUy5YxTTBitzuB1QR2kFwP5ENWrvZ8pMa9aR9vWk3HCoyALwToXxjpLR4GS4FiyB",
  "key13": "2XytyyNWYMsz54Fbm5w4sBKyCnxPX16mxGN1bCi9pHeJiLgzTsYWumKDuzxhXQvCDouSoXgLEYLkrvrLFYURQUjE",
  "key14": "5BMTuTgzQTRYcN9caF7MMzTBKwLcpD86Kte1dyBmXhBs8eLMRatft8zmc4Nro1rn5xRwZWHP6sGcPFaPmvafqrvG",
  "key15": "4bYXFvMCdcjaqJ42TPAdNK44wFqGB9C3G1buBVtc326fsLyq13JzQtRg4JhqB4zkbDwrffVepQjQo4MbTimgKtBj",
  "key16": "2LnferhvQMY7Cyqo88rdXf7BzEbqTqnoGY4vbw2rqJ2yAdGn1akqWGBcuJqffXbgjBcqTAL9Q1D6oMwdXYvWccB1",
  "key17": "3BDEPhHmSZSVRSXwKqUtmWw37qNeZStUnrgbMssx1sXpi9h7q2cSWWmef2DaXf1E31YP7T4ADxPVxPQBxWxoUYvu",
  "key18": "3HnteZHrjs7jecBiP3YdghwM6s3KbdPCtMPZKHRarG2y9hmuyD4zJEf5nqaV3g3NEMfiS1T7JBq6E4YwWQi9yJAg",
  "key19": "53F7L8TVA5QTCBrFmcuLnk9NYXXF6Yv995GmBsTXEDxb6dJBgGXtgBYm59gf78pMSzbJ9D4LMckB3rN2VbQf2Wjz",
  "key20": "3sskNPJQZUhHk5AkWGQBs25i3f5FbL1cahkntPqb3L4osKwxqWHUL5cnWwiP3a2GSdJCgGvXGzFsRFKydEYjf6M1",
  "key21": "4g26NhmYTDrE8UMoPyUc6YnVk7tXRWAKFCM8nYUwVnqpvJv9i7dX3yG853xumt1iWaFkBPHKc9aRm88ZoktjgRBD",
  "key22": "5BtBEYcJbbhUuuWjvH4LJ3NdPJEBWporBixEf97N8hNRcF9NFvq36XV7BEgwTrXC1SJjJURCmMv6g9nqH6iSc7Cf",
  "key23": "2t7ZU81LfAaPdXJa6Ls76JMBC78MayZNZFFBpG3pKgxfhpHF5cxawwC1tC2uqpSR9AWXE5ojcjJCcJ8bCDBEkJ8g",
  "key24": "NwU4g2vrNXHZXJVcwAt4ZG86aQdMkTBk9Jk9iporVdvcnLKK9yYzYagZhdK8rZpoSEhLYUHq1kz3GuwQprvYUA2",
  "key25": "4zhJoyVHxKLLgNZcguMayyJaDmHZkvzefeB3ytSfBcKGwicLEBBuqU5mvfX5GVpQKUQpBQKnLSfXoAoH8V4ovEzB",
  "key26": "3mbrZTmewrT8gTEK8LiimcK5XwqbqWdhc4TYrcH3BnWMPVg7r5YbqtpZ2kSPEg4bKKGWGdJokn8GQ3PJvFxAj69E",
  "key27": "3ujLbsfE8EbsesK4GPsneChGRcQUkZ2VpbsgW69579u4qC4FEg3iANbRoyuHbFWwBGD26kRoa95HfBMzThmQkCMz",
  "key28": "3GzxheDcAQpturM2XzZNcFiWbhxSoc811jUkWyzdtL8AYY5Qje6rb9jG6Xvkkt47KC5HHSnjKvVCjBV34KiG79hj",
  "key29": "5Q6YWLyJywXHVBw3dVw4VexMGAyjCucCJU8rwtkM4F11itRvCaHfrMPNuRVw31dYChD1AnXhDzmgdHSo5wfB4Gyh",
  "key30": "ALwjpzuzvbEEZez5QJNNK6Sx1FtVpd4NZm1Pw9AE4RBckdnW4dMWPyyP9EdFDo4DgDAMy7HLunKqyKisjTJrvfP",
  "key31": "3WQEpsH25QKcFEmXu1cPCzvW9iG7e1zC9vnjhxwEXQc6DZp3ptqo5wAUqE7xBWjpHTYUts1kd5Xzjhf8gLjjYfkj",
  "key32": "tvRzz1WzDcFWE3dVaoPDUaDfFhwf7zcBizD8ks3NKVZfpaVMq81r7TuCVBgAHGmXzKFYkfa7CsQhEKt1K648v4P"
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
