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
    "4258SjzKytZ1Ui534S2ZGRctWrizTzzj4Jdy7bWtbUvMathyNmLZgQyXFUrVrJygx5pGUVNMj53VasoHKaA1PPvj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VPz2WDtHR2tDocRAtZc3cHXADqJDQpAYxfM8UbazZ4MmSFpWtLJnNH3WPA6KmFT8M45Vgd8odfjLVsCT1bwcP73",
  "key1": "2JVaCP9PeZeT96ti6NBrtiMDaqqC5e3i89XR1SNbCiSTpMHW2rYkGRg7oepTeytb1crtqA1Ynwf9hoBbso7CFs86",
  "key2": "2D2XTohFWdRe4ZL1oKJ7SKFzRXAPGkRQUbF1rdYCg924Yfvy9sPZBHkiyw3YJ7UVwHGv95Rt8i5HFfdyw7RMACtc",
  "key3": "3VDhUXLTMyGyDfmz1DNukTTFeh4nyEZk5XCwSdxVLUHEFUnpQqVeRQ7ZmE7LBTnd1YU3aZC5mUQ37PVAQaSXuwNH",
  "key4": "3BCpvdSadnQjYUyJJPgn4rRe3itcwMM7YykNeZCmTqwcMBU24F9aXqCCpXV33DSiGBWNNEKingPuQgQu5rAUZdTo",
  "key5": "5zaTACqBQe9eN3WbFvUuqQVpQ4dEBqvMc148TAVqFEuoXq9WvqKfZwkuUMBSsHhkX2StCm7ewwEWAwTJqePaDZsh",
  "key6": "3Vu87PebKaP5qBHS7J2KXdB8c8H29Zj1a6gBczok3LurkzDJZiFqDhXzFKQuC1qFkFaJDsfarKcgvLupNkZeCrqo",
  "key7": "nmgdVdZ6N791vrBhDPACZDM1yfB8ynYimFf49fSetCy1VdZHMW6uvWoQDuUJdd77rZpZdFwv4KR3FMuYgBLB4DD",
  "key8": "22SRMJTe482sWk68esQUya8oW2iRKdGAcvNtJf69Yma1M1bkJa1FuNLxMifG5A2UEcBMFA1iGCjkGSWg9EAwFv9x",
  "key9": "3rS6wPVPtdTQayEePpMDgpcru7F1d7BwFB8bSUJQBqRET4tYMUn8T1bhLXikTc4hoNeitdcB4avBtZAL7nj5grDf",
  "key10": "4K3BpQXVuBiXticNCL5rnia6qLpHG8fixsHvk7hFNVXYeUThjE4VVr8t3Z7TDqm91JnFA7DcAYMVfosGSKGxo4YD",
  "key11": "JjCuJFWHEsZV9Mj7813wr6bpCftDyWvw1TvfRReQTk8pFkriTeP2rRhwbCcS3rLKt5k3kodcTvaaQUx9tQta8is",
  "key12": "3fnDTR6YmJoc7k5rqWvWQ3hitAs9kHnTYVzgvh87ydkHem2EdT2hXsw1qVYvLSuYhR6XN3QgSyLUBKgf78CLdn5N",
  "key13": "51v3tJL9qTBW6cAaJgPdb29fcowrC4h9UFRMkE1TN2RQticFLZdo9ZW5HsTvetS99GejihSLaBUXdPVVHnRWojzu",
  "key14": "5KEG9PSDKATnNu43feE68m92yBeET8Wa7rmzVsQdcaBydv9TccEhUzm6PczeF86Gkv1GeM6jWyB8JALpu35ZK6Aj",
  "key15": "YHb7gonFcc1XnF1NLwXKmp3P6kCR5XyCSc5mHeGCuoMSaGaBHADPrLH6PoUjCBT2ab4LdDxat86MDyPE28SJwMG",
  "key16": "24CvKWfuFYrdFvwEEAHAP8uJZSdBrZu85HT4BQmbPs43PSGTtJ84W4Tr4W3uhTcUjLAUh1YjStV4bhTD358xuSSE",
  "key17": "C7jQ8TZefbounhqXQvRxsW3FAJUe9QKPZw5gzBB9V5ythD95wk9TL74zmukm5KzeCUdvBwZP6e2415fhcSHqAAd",
  "key18": "3LnuHWFqmySPpS1C5B41pEdpoZBb1EX4RA5MDyzp51qQs6hGSRRXYYjGHFMFQioCxCd16KzKAmv6hsnUy1ABWjfa",
  "key19": "5vRJUHWnAMfMcaebw66pEgKvdcNH9stbHByQUQmqFZL6Mr4eD2gZsGa4iSjWAx5DRG7vMZiMmJywSbKdWtwCLhyr",
  "key20": "D71arZATzcAF4hVMnSfEjzQQCyxnuJ2dMc3BPAcFnL1DUctCnF9QvG6WgkYwbMsgYCviddeDsUfX4GaLcXBoCMw",
  "key21": "dRwBF1jMC6oaaoXaSBwBnaGBFgbtikqLhqyTovZbVBekVvwJVQJiQwHdZt2jqDFXswdguGvVoFaWRvojL8522ex",
  "key22": "3yr6GS5D9nGvTjcAhFk4GKSYjWLt5W1WakBxuF6McoWwGnSiJL36YnSN9CaWieabwsJoyggbt7Gxge4tRYdG4kK5",
  "key23": "26AjZ2NY7NfbLn4Kr3mFhZhRYjFJsKGmgDLo2dse2w31VKXYfjwd9eH3kPup9GyqNLaoiq6drDNd9f9RKPyRpx4F",
  "key24": "4hX7tkjCMqksqsKLadfJTuCzoAgdeq9xz8z4wiSojrk8QP3s2T8uQma9mgb6J58iDbEZEw7cD637Jp7hs5SrkkeY",
  "key25": "3ijdTr3G5G4wfY23235Np6yKh1iajmDU3tT9BdTfMFcrSZErJ8S6KmaPpwVrYA16YruGJQgkASRfkjzYxC38bfkN",
  "key26": "56fnHZcox3hAvh4mnTKXpqGRffgxBppqyPEzw2Mos8ijkPULL4zEMHMzkXYqGbvgJBQhbRMUmZmXXgTPCogEz4eA",
  "key27": "2GCjDRcpdewejifF1NMvJ1dQtk5QZwoVZxaREMq1GYNSRLEKkcMhoAEaVTiLNDyXsrGK5nCyzSCKDw2xuDAyDyA7",
  "key28": "3w1rjnDMYM6pWe2LHahmFemswkaMJRXPwF461NXtwe66ZcXyXTTUEUG7i4sm8p2ZLTMNBfV5hu4PseprpeX8QeDC",
  "key29": "5qYr31oFbReYRCbt6NS4TXzmEqJRsDCydNa8Nk3bsEbifnxEL7dh27HynY5xMgxtzFGXnoDKmHdzcYrJutqtCfkH",
  "key30": "4gkZgZY8Ez7nsYNWmXzeD57uigtPESkombbLmbccZmt4GCd1TatYK3h2cKaAMxh4DvBoN1PC1JDGpuxSSuWJSzeA",
  "key31": "3AgGVfb6akQbz7QkdX6so3p1TVQQ2xpU6Vyt3ANruxqSX8hmeWQt4R7N5rSoKc2iMpVsCF2s1FhAuGXDqqqVyKaM",
  "key32": "2C259zGCE8w9jeQcznCgY521w2cLteLiQJDvCxaMGtJ6fpm8BvXHE2CpWV75g3qeGwL2NARLfq4rPVeXLzLUTHgo",
  "key33": "3XyVqozPdgWJVj1LBFc9PinJFmEty82KNqqJVw6cV9PDptccwRnGJBzGoem8rZqn91xraG25VuGBu1qRJEACnLog",
  "key34": "2rEo3yW3ABcJrbNHgJKPtPCtxRzYRSk1oWdmxRxqiCxa47JcLu8DbiUpBW8wqubM1zaBrMdTrwkRLdV2V3t635no",
  "key35": "3y1PuzDRyD3546atSmQ1ogsyEVXncrcwpubZn7w8fnf2c9aPpBJGB7CQHBKgALeC5pQRCep6tyAVnDgGVPR3wcUg",
  "key36": "5xsmeyBaD4jfNhfPouVdQb43Mjo7ZfUjUuW5apciJAhGa1hUSFASxcBdZVQuegjB9yuTSu5Zgd6mD77HLstQwysN",
  "key37": "5VdghzY4bAMR7Q34NAZLP2UxizytRdDGQ9q8gwXFVJrWeqSQNLHvqjtmLcK2oJk6EX8xTGi3FLjSXfveYYW13h1S",
  "key38": "3JzJYjd4Ls48wZ6b18mVAkRZcuqN1nVRFMaKKrL6XKm38d1bQnmR8mrGuNn8SQrUKkPb44JFLMqPAxBRYYHg5TX3",
  "key39": "4DP3aHqx4nyhg35yBfZg5xjeDaN3LFen1sHRu8a7spVRcmvBjWC6ALQjyQ1Zd2GumWjx74ci8ACL48FwTTmUYtFc",
  "key40": "5koCxUNk3y1zWuUmbKfeNTs2e1vP5HGVjJFrtzVzKiyvFdB2FAUvmEGZPHsqse2aXVvjEi49TJgcVQwbihj7veie",
  "key41": "4LhCYrXF9dM6rXauYvuNmVXq25Uyj1SLFh3YkMfSjHd7XetLmnQ8tBG4Dr25P76FvY69mmzikmbJKvX8w6DpMrry",
  "key42": "4BEzWxmxAcVKvdEWVJnQKFyuQSj8WYrLcyoagTKe6wnxp6TQM3cfKBWcoMdkEidRf7dJKqPbVVhQyQqdKop6MQnb"
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
