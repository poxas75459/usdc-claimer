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
    "5oAyL7LPH9PdJGXorYRsQgPFDahA1YYJ91XCA5S8HFkzko3t2EEvsReftxrHTRtpDKNnfzb6cqHvGeWtesBqtc58"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22E6rdk7bi46Zu5JuShLLMfHBNNucj33C8jh7Hjgi6m43tbZjmfVt2A4RDQT37DdVyD9LqMf5Lz14gx65jgZcVBz",
  "key1": "65qm8C71GKHVgBrwdVo3ogZNi2vZpNidNhAGr4yTK5EHf7zaYCGBQRtiYFfPguqC8w5UDtfLgom8JuDZm9FWBk7n",
  "key2": "2evkxAfv8Y3Hy7jFPQsrFLQDdJAgsYeDU5TNRkYaUepttsSn8M7qxQ8NpQ8SX2GJSjvh9pGha3jGjbgh7UgGzwsC",
  "key3": "2Ev1dDoviyT8UMLqan5AtvpV5jVDJV55pDkWQ1K2u8YLJjYx7Kr43mAF4o586bE1ASbJ3UMbsWo1hAXXms5M42jR",
  "key4": "46CRusgVVseFF8cXW8j52rqkF7RY7fNS7NCqayfKu98WgdqKcyem4jGozabGEHmLNo5eiJsVmTu6KVmzh7yaKVJU",
  "key5": "4QUfgci1BoLyPKn8CbUjpyMdE6zxKRZX1WjZQg6c3uJQadzDaqZPU9dNSwuHfiXUdnU9PnRcpkwpo98dR1AreQge",
  "key6": "4fXqsPnjg8KYMx6UcXmH8Wdyq8yKafj3pyVETz5xtXvfNtyAz6Jo8aEzBepebas6htvXSHseQBFxw9pgPfnCNC6p",
  "key7": "3NMAebsypbks9v1mfAhsYqBAPFCnpWZ44JNiiWBW5cHAcrrEchkMdjMJbZpSkeZMKCuboMXHunvTrYwzWzz3rAJm",
  "key8": "5F7Cid9hqtS22iLevcDtdByY16ocAaoXwHcHir6zYFtGannBvSiaYZTC5Dn2jZohEqNpENjgPHadyovfW2LZCPkS",
  "key9": "pSEWFqEPhrkEVhEdE9M55hcJ5CTX5L6TSpMVjKMsmAmVuE8uhYEimt6L9Za7TaDUUzfC4pwiuxB8onXNgu9eWWE",
  "key10": "aQkvFMxXjQtZPbsi8d9YP1unKe1pdjDGEGocEKNv5EmztG4gubycmvcyfAMcyJjiNhXuSyMhLSDPMdY1Hvgoik5",
  "key11": "5oav6BZVUpsx8n2ZtkLwTp5qMPBUKb3PHZJonPA48Ep9ZvwS1A7e4pXHnPV27jakLLdbT9PpZgVvqWnWHLCVF5w3",
  "key12": "4DbAnZuYpaujXJHm53uMaoiTN2DhrsSo63ahuFm1NRFPPZSQhnXRVQYv3ZCrTJELqJEnXf3UT8VfAv5LZ2Cb8aR8",
  "key13": "5Qf297536JXgUPVC8ac21fXApWXFjTgwyRsFaCgixvGjf6aFrkttr7K287KLdqNYZd57xLZAp1jpyiTmmPrKaXSR",
  "key14": "4oe5Wg9kQuwEGtVBUmkqvPk1TXZvSZwF63iG115TFfYeTLHbEYSf1DcGvmnYKfxKhvdVPauqYXNFq1NZziSeNBhX",
  "key15": "2Fghu9bgeos3EkpJFki6QC47ipqjUK71ShgZVVo2ZkpUg39YxtMZ4VLyywybiC1z1tSMLraVYbuakwXSUkRKpfb",
  "key16": "HzGovWUnfB7HYmXfyHdUQ83YNB9WeR8kyJaDQNho2BRrjsXXgXxqpJEFoa731wFmWDCQTdCsXvC2zyUmJ1L3sd7",
  "key17": "5RaRjC8ZX5aXhhUq2s2DUGUp4X9oCjSVgKGkHSDFboTggtNg2nC6mDDknVPavSERKy2ggxC1WqoS3JenEPg4Pcj7",
  "key18": "62FhWaoJGbaM84bps3BhECmmeF59eYRigsmM5a849VW9g2cdBNqenaX5nJBFzzRTxVgkQEAXGnqxnjqRkGE7Djkh",
  "key19": "5bSsjHoPArPNUT3kz3WqydLqeMYJ6DKmnenQvcZiQFNnY7V6ZnrTGNeQKGSKeBoymPpCtqStQQZB4HGq9Z1a6eeY",
  "key20": "5LWdNeQHaFKZJxsWBBrPhKP7xVVajm9NmJG32j8eCbbsbUfrFDi2LfhADrBLMVAFc3fAbLUFLyxdJSWnCSwSgqcJ",
  "key21": "RvGFvSGLsiYfkDtTm93MaqAALUe4PNFLDffM21sXRRaq6xQqt7aghakg1CE2dvviTWsVQgS5wRjjA2741HEU9CP",
  "key22": "5LVL5G8xk3JUVMiNHK21eYetFQRHPyQ8QNavUH3u6c23ifNTFErKfnho42dZ51PWGQfayHqfdHB84jucCaNPm3qS",
  "key23": "nFQ1ur1hUM92Ae55tczXdhiNw8E5nNvqYabCm5rcqX9gq1PkZoTewjCE1txm6VQWYYQKw9edzZ1XzXGTF6KAPqB",
  "key24": "Y65TgV4cKtEQqku2xdL6t6fqY9S3v1AKjTngFZ5GLHiTvNqadzXQsQQJbQd2AdqnxBTFdh28Ax4YQV74ZKJcakZ",
  "key25": "5pmGstmKSrJm1PGqAUyGWmzdZsdL5JFCqA8hjAziZUgsYz3WcFMcphTNsp2Dd13VEnkRsNDshd6CzYuZ8JrKECxD",
  "key26": "583exEVpprQptcYoi2BKBuMz5X75QRKNSE3xaGcNHEZYzhqUMsf7KMMqEUr35faJMMzk2VM4PbBpjBDYK3SF8w6w",
  "key27": "36ussT35RdchJ5nYtu2zZXQvyaVfaM2S5N4pLQnsYaMnSYKZUHYFcoPnwdHxRDVfHXGm3KA9MVK3hZuJvmLKHbHw",
  "key28": "2QNwxwz5Qm8KMjezE7kQBTHUC2uk7RTfkEy6GfnAEaNtJnGZQKZaexWJ8Pe8SH1TtzDEUVH2GamZV9LZ6MgVq87B",
  "key29": "28CQYXVeKRVCaYMRSK81fVLY8qR4Y6vKTe8c2hoQ2qiHyMqjfdRVzkZ2DgbEMSMyyxo9zjsMELfM8fB9vWTET1Jm",
  "key30": "3zCHs5c7ULcNUrNMMZEUv7Co5ueioBEgtC5FeVSiA9wHnLmrqvQY5f7ciSmZwsN7xJH5EdV7GamArhwH7YD9M4tS",
  "key31": "5Cvx6Z2nNAWFN3JUPZQZZEJzaN7gSss3uasUwiiaBhDDsHrfWbGnCniD94S92hpuMEZxHmCDNvJutPgWC4XvmsMy",
  "key32": "64DhtFYHEQs9pTg6aadcu9ZsX3FrpdoDzESaTHALgm1MkuqsUzo4Ww7toAW792bNDQzXMgyGQbZkbmUSTpP8JqWU",
  "key33": "3m882z1RuXTQ9H76xA1rRigKsmGkoaFtRjKaYDCF91rvWywyWgPrJTDeRNUwMXhdGmm6gEUckmT1aKL9mSgEyHrL",
  "key34": "5ZXLFwWdZbZjhrHBBobGedaSQcihVXSbRg3NLb8VcWL6QM8V7vTPEnWqYLyngcsS3gdnPuMYBZoT6ZMEHuAXTMwn",
  "key35": "4qm3r4u7N8gX2NSf9tU4wK8JaUBzc3mCh6ghQgr7Ya7468XTFQXbLDhns3ddeEhd1yDeE93E6Z6KJUaz3JruviAh",
  "key36": "2veGdQnamrbR5anucPLX1ktWxAgDSEGCXoRXz4KXnJ3FgF3zTKvLfNFuEw3y5339pu367ejcDNmuBsE9GjKkHDd4",
  "key37": "4SWa4EkR1bfZCZTf6mr4sDit9DDzGvJ7zECdizNVqV3z6YjNFTZpDgVz9wgPsTLkKQtJJ5K6NjPGTi6hVqbeLS5o",
  "key38": "2HPsvC3NDWJAGSoKVFdERWXN2TP29W1j4kTyNWFGYG47H9JCJa7Jd3kKP39QbhaEpctXMoF2ztEFU7138hs6Dfbo",
  "key39": "4E9gVJoMiwh93wEwubUmhrSdDRtKiM1XEBiAhy9K37cegZdaQTWa7obKQyn95ZM2ZRnqpEj1ieNLki6zsARvaUTQ",
  "key40": "518nvDTp93LNshvYmqaQsM9F6fujbdf3nRFkr2jZNxS1WrcUdUjyttYg7SiPdmLBT31VSxZaU8EEPakAspZjJy6N",
  "key41": "4SJtMEiFJZJJsbH74dHdbDTqVUiCowo4aQjLHGFHcPNjUw1BnYSbp4zznnXf6YAynKrK8KFzs4UESxgeAdSpANYM",
  "key42": "5CWeN4ENfqGGJ6WdbiLTnbPG1mJr7u41XuMUJZwZshZHipovX1cz5mwXaucndokKvFkQCgu9ZTsZBqbNfUgzBjYD",
  "key43": "4MpV4t9vfmzqZMsZZjgdwnL7WQjnKdUJhYoygJCNcQ2JyYpdSma3o9hjZqFTbWDu8muyXg9ahaDU3MwrChxgxAq3",
  "key44": "2TCHunfNpQ1NiyQh2Hq9UDh6wQTU8TArneDRRiS73pNsQ1yb4jtxngWbS5t3Ay3MvMicByD3ptiMttURiy5bZTfW",
  "key45": "3KmGAF8dhYiHur9LutnvFCAQnsyn26SdX2ncNYCwKzAMtxvb1agvfXVagstEPt2dx2jZGD1RK8gaQCafbUCLRucQ",
  "key46": "2KpXUgfxf4v3FHcJytjhsDcpmzR9TM1CBADrvmXPSpMn39QZ5zErwMiWTifpvwfQaPhxYxgqX8UMLLz8y9VEQVqo",
  "key47": "3YYU7DauwHzJBEvHqPpcGPD1Dnas7xNRGyUFBAwgogTiF6VBe9hzsYViVVSYr96q7n53aBNmTbqD1HCPEQm5gt9r",
  "key48": "3vfrVjHDqeYRySHgxZhv8v8y64GTFqm9QZuQrCJSPa6qhRVYspaasWtY8GgwgAAjjgJqLAHn278fyGzFPLgbjzWx",
  "key49": "5JkSkH6Cd1kMYe7449g6JL7VUGJkEWRiV1bgYD9ABbEG7qNfAWZQJDSPjrj6B2uAd99LH6QrVWD1m1x8p95X8kZj"
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
