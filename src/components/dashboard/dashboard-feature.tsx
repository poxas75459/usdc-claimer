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
    "1BQqzoMaKy1sjXKpUcNSEgczvJXVXAVx5zwGq7BxhyvnCEYhfXkg4BFBNnEYW47aDzxP4MRCuzjAiVPVDTmKu1K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yxK2mxmtbVkytGjdT21N3wcSwLMi46XpmCv3Gm82CPKoTBhcEq5EPQawWV79myk3iqcBebA6EA1t9ngVkt9tDcw",
  "key1": "5esUtkLFLgKJbqtqmDNjAQowvJF8GkSjMdGq87QtE7KfdMdhyAiwkLLERNy9BCcg3o8f64cMS4myoztr9F5ES2XK",
  "key2": "5DncFmsYMPhCRFzY9G3iRy2mAh2wABQeSXRufASXRUv2DtYLTrDAVrWooFnQugWgxqvBToUVYFLcwZd8DT4xSFmH",
  "key3": "63kC3HweFTQNmGom6mXAZ6oiAC2po5bxAikZo4gt8Amv8WFNuUqMXUkG8DK6HHLvgnk97itDzXyjGvWLVv5oY6VV",
  "key4": "Ba4pj8ppMLJTHpcKxq2LV7Yu6SHB22sWSwCGsZtAC46dSqL5C2Zqc5r3SMt8SK5DH2G44bHAcj7dH549a2SVRum",
  "key5": "3r9uivrf4TT4AXvHGLYg69wzYig5KoUtn2EFASAWn7j8CfpsaG1FLB3EgLWWk55mz77L5T4RS9UD1XjEbqq3JQah",
  "key6": "57xctx7BHSGTmNHTC4RUkt5A2w7zYHRmieNo5yLBTe4RRsaatwMkASo9VNbaNGyG5FNyWteacGdHjBPhEAyKCUn6",
  "key7": "3t7pWpPeBnD2h2atDynkYRKYzbeS6MAUP4erNHVq5LzFsnef6P2vSgtp91NnpeuVaq6bciFTXNnvZ9zMpfDABy8c",
  "key8": "5cqwd9ioBt9H6r38Y1R9c3rDmE9TZax8uaXehSvg9tb3Kv4VJ7Kxryvmq8jENLM3s5PFmhKK2N7oqUSJB5sQPtQ6",
  "key9": "3Yu4mjtwwvecdmbov17u1enbuJQQt9ECMZHzZMnxBTJhLUEVEKfcH9wadBppo3FkMC25NWMy5Lw1EG8x1JrtF6Dv",
  "key10": "3tfzKs8D7a2j6UrNZeiUGBhG2fdzwUhY5EKV4u5SBwMXguwXybooweA8NVhXAmpRowpMWNb2URpYGeWwbkBTeZQA",
  "key11": "4FxLZEsbj6QgG4u88wmtXsyM2TsyVJ34CUwKfoHD93HiXT7GsYiDEvHJMeUs5Qn5Kh54a3Y3oPeZCf7vS4VsQEF3",
  "key12": "o3NN5VcRbY3cfuWYzkA3XRgC5ge4Tj8FG7d7zdhmtwMTxo3gyxS2ofH1DN8gYtgHKsZaPZ6VzK4A6Dm9ELKFo1Q",
  "key13": "4Py2K83bYjQbhDH1EYtueNxzn2A7up5JE5RDHnTLmGfWHPuZTVWRqEoX3NP7SUR3zbP7ruXmw58Byf1G5NccyqG6",
  "key14": "238j4cG62wNnEXDFktdrXQHXtCFjYSrD97MPzYxR8ADuR5PvdmqYWsGxcNywf7CXMRXqrGGHygHE2cLYabKHoRR9",
  "key15": "ucp5E4gJmsTmArir18S5eieCGdNQnMw1pvMos6mN1cLDN2NxmsCi1LDPnbjivwJcnmDK154BgDxWR6diaYDq7DY",
  "key16": "5QD5D58xdGVag79HnbQSQ7tJozzLQqagpGhzpGmXSQtcSBctGmApRx4K74Ryxwn5f3vRYm7dn5GWrXUPveGaBqkG",
  "key17": "R21u5axjfq4mHQ4RRpSD1dGCrmMpfefLMtDHFakeH3XRPGg67YtQb5EGzgDcp3ip7mdiNM3QTf6i4DwAGcSmzYA",
  "key18": "4kC4aGZDwGoEohaPyw1n71vykyNBU8bZdDECZXyW81GaLBRSS1TocopkTj2RaG8ALyDqxsYkM6WjUoog6teezn7T",
  "key19": "4jeKLCVBjtCE9KfiuXe2C6p9VaTK1VHmdghYpZnUA5i48ktq1hFsBQ7DBpEvTiHwtBJHKupzSBXm6pD5dPAcTDBJ",
  "key20": "LxxWLWAj3NVuVMX8CsQYBhprFdwKp9xfiKwirWaQ6YpmGJdWD9mRVE4TpmpcgHTovJsWumhRp4Awd6DYxDijjQ3",
  "key21": "5fjZzPJJsZM9Vdzb58Q2YgH7GzejybphHXbF5qfveGaKAtVGqB9qh3sgvRsntX8bRHMxBhhM8UCubL5miRzF26Gd",
  "key22": "5PWRxrHnPoF2Z9yjGfvx5HSAuZWwWLuBggs4su372Wv6bVi6JwhF6ARHPncK9GrKhiJhGFycSnk1mPVVga2bL4hu",
  "key23": "51HKfddQWSY7ypGvUmFkFgMvd1LtNMPTcnFZ7VtZMqDhwkD5HEAu3q2h4ZEEHdQ3R9po2sXP8HPD53DzrqGiRVBt",
  "key24": "NroEsBzT3skyHWZgcA1QaVX9uTQp1yCpT7swU6xd9Kgc3oeLvAwjCZA7d92vYWf9v7CmjT6CEGmEQv4CzF8tQT2",
  "key25": "3UfF61eeSCAgS9kTmcNR4HukTDnUzGm7sTy6novuaKuwA3E5P71fJKUoPWRw8rJwtc5J9KU2RVfDRLV1DTXn43Kf",
  "key26": "2r6kJEGJcLuxtC8MgRB1pMkg81SAinmKCER4a4DmAdyHA58MXjGmj9rWBukM1VEtW3NntqeSVqig8DYgVKh5osaq",
  "key27": "4TrJfPDU3NfyVUnubKJBVGcVV5dkUKE4G3RHFWwayz57cZ1Nyc8SxMBgM9Kt6kjccVdYjSHs1K6kKhZnarEcjCJy",
  "key28": "3CpwCzRpWW6XiiAHJXa4wifpqR5CPDqxJUWTygnV9NyrMvJgmCGsE6aC1b2UBS8v18xKvwPkcriNcbrotEe3v5PG",
  "key29": "27aSvTG4G8wHeXF95BpuFf63CgXLcgnUZCeJrp2aSH64mMH8gTni7nJ2G7o4ep6hyy12v7QBJpwejEiJso4ph5v7",
  "key30": "2HP48ZnRG9KXUYdDDqPETu5z5fJ7zpyFfEdnmBcTSi83CWuJbbXKQuyHUdDjxJPaeL4RwHazNiA6vAp2Ls33jbZG",
  "key31": "kkNMSBtwYskRyYUijHEMEmeeXzeTWCMkv81PKp9bjmi6Cf9nGhkwanUseWTPRAA9VRku34aYSr4VPDX8wx5Du8y",
  "key32": "3biDUnoGWXwfrmZESnb4Xz97D59PXWD23fYR3WZyvLLjukzFZy1MDE898FtcWSGDf155SzKyiQkuqHzEr3f1KJPy",
  "key33": "37WGU2zW4G84zYYpPW5ZJaEBHTSQjEpKBYUJKZYar83V8seBaXZutU1iBcvfZomQr8BojomYX9NjCuSDLmp23v8z",
  "key34": "uvBPUrnqQEEeNBgGtpDj8UMNALcLDBznrFL4ScNSWHamKLgsyQpUJDoxB8jXcWZ8uyy6pchV8L7Y3h4NTvbGp2k",
  "key35": "4qztbmX6KR6nVLU9RVCJbi22eXCotcboHUQjTgxqCLhj9cvE91YGpCf39dH5YQA3sWR2MyzPXAHtxFYcwn1kAEMx"
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
