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
    "4U3XfmYhVmX8QR3kpeXKX9TMgqfaWD1qZAFxNTNCsEFxoe9qxUn5JgLYo9dbGJgfA7f8QBXydmmfywtmPVft5iDy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "U5sUZwAC3p6i4hUybuxar7BbzDqJEhp6mJjpBmXg4fkf29p19v7CGFobTS1w248VSYUWSbHvUa1S2aq7bLWpAaP",
  "key1": "61QPH1wdUMucze9oByCx8xouytdTodjBAjfqBeZv8siGWT5ebDB24Sub6fULw8Kv95b8e3N3Ucx79a2y6wKVEGNr",
  "key2": "5gdYB2AhoS1ibyreupupkkSUAck9SKiHsNKCUQuZmfFpMTRd3DpafTeckvjbGVmETvLuqFo7N627qn21ZVruML1t",
  "key3": "3ASRWzYLC6Yo9RL5S7s3FigPWTxTziTR1BG2Z7cqXJXnMBdfL4LX9jgUenqfiUgsDoUhBfg425rq9h4REYWVTSep",
  "key4": "54UagRjCbyxS3vr3VzgCBGYXevGQbifKrvQTdtdVG8tfJ7w1UJ5S99JuS2AkGNs7LRXbvD9FTsUwmreJdMuAPt53",
  "key5": "xFmyNusPP9fhcgCqkEkSiPnCsSNv6CUJ6NUNCbbX6gU4GspgBDPd4WsSD5jNn22pZCj3AcUAAsPcSc82iHw9kFj",
  "key6": "2noXZCJ5qYiNFVJiUzPhTbm6S7jqDwde1SP1wSaA22VgJX3VuwWBzoz9WL3hNaW4sMeGfzFehKb5Rm5m2QX51Ja5",
  "key7": "3giFHyH2Yuvbmwb61Z2LCPKFLRYat5VJNrcRHwP299AjTXrNp8XPTLFRCsTiaeRnEFE2pZK5ejvuxVriWvqUjzao",
  "key8": "xB93rfexvRQVR1T1dheQD6e4CTuTc8LV6gmemrSuou9tAxz7W62gRXu8mCoQkDDJNt2ZmzZLgyWAnAnj8kkCcCs",
  "key9": "4wYdC8BW4HE5HN1GCpw7XUwmu14LyfpbaUpJ38EthiPhww3U1VwU2iiN51pgd5SoJgPQ4B2mnCak8Dzpk9CBAi9L",
  "key10": "5jBSKMfpyTa3NrZxC3vVXn3yUo3MhWUJWXRA5Zh5xPGot7vk8UKaBoJvWU1ewQp7g1QoqbYEeC37GsmittXYdf2X",
  "key11": "ZV9G4QFp6BhXXGgnVmU5cK6k3TKmPHpspUpF3mk9oGYgNg85DZnN57Scoe3dpPUZvxcPW7JU8nj9vEUS5CCoiNY",
  "key12": "459kLMPm2pWsgA3MUnfHQmqMMjf8LiMNv6rW8zXAqJY7GGb531ag2jT9tdKayxyzC37KwusMM3BKNcmymmtvMXmV",
  "key13": "4zdJkJDqmEvVAH9QLVCdKDtL1LSAJG3LxmUYQc2wD5wNdfRPU3sD4aDQk9SLVpMWYcBCFsS8UaepgaPvwBZdnq2p",
  "key14": "5YnKqCWPGdZXStPWZhb5AQ185DYWpeS9EamZcEZJeDDFHWcBNvHGSEnEfP5AtWwwGMW48dt88LYyeYSvAyq5JvkQ",
  "key15": "4xbYgUS9HhqDWJBo7iFJcv5K6rrmGK96huSxhvE2cc5obM8BHrrDW9yxyTLRvQCZtLB6pXBXfoggFDAbpyZvSj8R",
  "key16": "k9cmTJJ9tqXK1Zu7SuzmKxDmaLqCRqguWP1Pcrwsh5y4JWfmzrK5tE7BbMfTNcAHqTDKEFRGyyqpQZdzRyrfToU",
  "key17": "4hTzx2i1TQ9bE6Sz95csNdYXCEAUsQ1KZfZdpNgUYBcbqWEgM19Pvy8tg6FWiVUpZNE1vT6Ms4y7nhXhjfobwXzS",
  "key18": "4DYmYbVdRUV1qBjhaEcqAN8iS52xAqzDWjzr7i3RTii148oJKpxixWTeNid8qi2AHBoE2d3ESEG1S3stYPsvMiu2",
  "key19": "5cTKxMQGfuLKvPFH2WGp5C6nPsBmS7yQPaDKkeW8MUiqnE2c6PveFiiNiiQCxoB93wMVqxsGy6bEFrsWZCvRwP4U",
  "key20": "5PSME38Nv9xkcLxAitYznXED5PuGsJXmbf78bqwyP8x7qrffAnwU6gQ1ErycVi8eFt1KepwbKMPGHYV3K5XFRBN6",
  "key21": "PReEBSz5szprbEh7XeGJKcj4dEXcmDNGTR7Zm8iV7aE3J6Dj5mG41616rm3Sif1Fy7DmZKitPEyuTE6okuPxw2R",
  "key22": "4taDwAs8DKyEYMjm7YkgkAKG5uZnMVBWg3KpYMV7JXH4EvXHGcRNZ9X5swcxTxu3iFRbEjAFVx51NDUnMCmQtLKi",
  "key23": "yV5RGAEAi4R5YFZLpJ9uabcKk4i7wrimAkWUPGZJWDUGy8cAu9heRxYGRZFSqXDsrnDqY7NjyjZ1Ya28UgJu1Ro",
  "key24": "SxAuWvy1EemRftyNN5VwF4Ua8e44MLMW4j5dd1QUe87fD5sUEiZocT5uwZWRxBhCLsxGfbt5pndWFWMeg8Ci1nu",
  "key25": "5k4q4T9sLw6byaNGijk6T2BgtLb8iLphmMsvE621VnxoVprNBqs9TjnWrPQBGGrM95GfStpc6QSD4ndYRJ5iRoVg",
  "key26": "tr7GRMvkhmLUVve6n3ocBL7avGKcofijrwUAA9U2iKBcTMB8bkEqQbY8wAy3GfCguxXNpp2afcavQVonCdbGy2L",
  "key27": "2c7QsjMrr16EgJa5iB22vW97731tF7XxjJvxPCiAuMHzZ1cbCLiKjocAVd1NwArJremf7miPxKL3rcrLzo7ggtEP",
  "key28": "377g8r87dMP2d7hswh45aGX5ngoJmh94ajDF9gHnF4vRNmYWbkbctBbkCLzvXyw6guCRhP94NnYLXrvFkrNDpWSC",
  "key29": "2WSo6DKg4tYXmt1KWdcAXgm6mtAtCnmB3cvRY54sqnQCSgdeTRxEJwuzhQrPVLTGZmcBLmPUJKFcNN1JXsQMafUo",
  "key30": "56TkyL8NjRcuSQ7iujwyHd3f7HgCgyNVmeUfG2sZES29dwfibXMHFUxXBGncrX2qhk3T3QFh3RcLY9jtDuubFafW",
  "key31": "3EKnQDnJKADz2fhyP7jD89mG6qABjJHdH1EXepnB7pcRDrQqCc5JaEFumN1WgGcQ9y7RkF4fdzkG51opSQarpNvT",
  "key32": "4oeBvgebyQwrFmd425SoBwVJrAg4MUEq5B9gD54x97sjMcHLNjY6JZvcNMJedjCD3n81vnnUwKzyLc6XPSP2wgzG",
  "key33": "521uUq9DictsAtkx57SMHRcCL1RgS5ccbLYyWkXH5rmjJ8JPavphXoS1pvBBkJVTGgqHPxCTEnN5UnfBggEHsS5U",
  "key34": "8WKfWkVjgZQGCRvGaFEstVEWr7YymtvmdvcJkRhED8g2Gjg8VfcJZLwRK61xmg3PcbjSH4oihmAdRuFAkjDwGJD",
  "key35": "5Uw359PfYtqM1eEKLyFyKoJcjhgjTiRmWmqCMhuDrcNzrTJ9ki5RFghNAEWtPYCQ4ytJX3ikRLora5vJcE8CtYh5",
  "key36": "3JnwdPvfsRh274uLrtteD7njPSDamZPUTi5yS9ir53ekezqZHJdzwZaST24BvGzaxkLwKxfvZUxdtW4U8Ry8PPLH",
  "key37": "5jBgA2UHov4RqjT8Ht8bFcfc6DSNpKabcT1fFa9cotUgNjKTxFc2NG5tTLxNJ6mutYSnHm76ke1NdrBQiRW76Y8V",
  "key38": "4KiYgYyiCqrdwnAueGAAkJZ97Hk2AVKWQFL6Yhi3hnvZbD99NwkdY2oT5yVUbNuUsyHbNJon5AyBKYPoaEmQichB",
  "key39": "3Lt91xcPW4FR4HWd91yH22Kjd7EpJ63MyP6aiwggBq1XcuucB5mQFMR5MhfHbQGVC37Hof5DUtWnwxZcsfDyYVJC",
  "key40": "5Zk3SKEyS6ykAyjTiNPXcHHaehhnAj1nU7c9x3q1wkX9WnyHKcmDbmuYdGHLVj3QpSSTgPQY3NVTWKamaaBfPFiV",
  "key41": "46DuNExBcSGPt2gPudcD91D8qt3i5isQWfXNcA7upSUf87ntp61sK7g9c2mdxcscvYRvzzAmjwn2gCQ8T1GevnVX",
  "key42": "4Ac44TRyCEdCuCbnE6invEjJbBhy1TDoUaU8rKtQGcUgEhrX4pNJ5feRboNwaXLXjq5fj731ndH9YBWGaRvdnVWm",
  "key43": "2YZHk1iY1ZtYRc4ibAshv7HFv5CR48y86XSQTsoRhqGSXgKU7nFHQA5ECFexU96UikuhuVkRZe1oJzktbvNjt3AJ",
  "key44": "3cB2BJTjXj3xsZEd8JR8SijgaN6gBJenDQsvHM4EoNGWiXy31KJesRxoFPnrX4uX9dzDzXazdoHRqT8v38aGz685",
  "key45": "5v6rtFSyj1AjK77cA7o62rRKaaLtWssHYDqHAyB8uKJpfsGq44WNPKFXepK9SPkQiyjAf45ifjTHzJWpXDsa2mkc",
  "key46": "4aNEH1DWrqK8RRg8h89uqwAV1H7hfZ69nL29N9jTF4KaSKiftLgS8LqQqSQmBtetsxQbidNeFona8q1YS1KQ68S4",
  "key47": "3mEBYJFqnGtNWfUQu7p1D5LCiG6vzDfFkGGvrLAPGaS7WfN71qB3r3dwawZq6Ui3qYccjXX5oho8mLM4T2VXdCrx"
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
