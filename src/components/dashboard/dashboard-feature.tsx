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
    "2ctorrEXB79HtqfatRwd4TzTcwL1AzTL4vjyijPAR4SkZzdL5moxvmMAxbNx8qZzMrf47v1hEfEYzJgUXVXp86g9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fcZhhfCxJq1VtrGpzyabM9QUDqYGGT1n5gWUfsZqymmdTQqhbJzNsLGttVLwpXRU49Y6hJJCaRYgdXVUY7VyFHc",
  "key1": "3R4Xy5cp9xSETFXzn7J6hdjQjUdkENSF7A4rkxXskJMpxAXLg4YRRZLB4TMBCTWCgTCzgsVheVPwtVtGaLaLJyfK",
  "key2": "2cyZUA8Bxy8VE7Ygkw5M59TRa3eakjDLxHXg6Vkw7giUZLYbnrDbSga6rcs9pnRo38LZ4GSEKoYdWFhnAWACnKZC",
  "key3": "4XDvGvskctMtkGiKCN1RGYd4nTdXGioBWsJpdCPixrRiQfuojEXPxH7HfU4Kogdn7mUBPPa5MgoAcdt25bC2sjbQ",
  "key4": "5h5C47VbnfhAE44BCQg1E5A1zEb5bB4AVHiRuBc9Fk5e6YmzqAEgrr5xT4Jqfo8uQ7FTr2JgRY9SEggdECtiV9wY",
  "key5": "2g9N3eHFUa3oNxeDQvtyfZDditHRBddohDHvJD4mSFMWDXyMFjtNKi5KNACRJT1fE4juSoE4ErADQXKgQ5BBMYEy",
  "key6": "5UPdXZm74JD4h8oLnfFYukadZno33Pa5Z2X7X4msz24ZAUjgvsVfn6nEJEn9WDLFE1BWW6S2FqGmkRyo3gJNr7MN",
  "key7": "4SoPqRwq4MEwW5eTxm9gsuY5wKZZojNLF9168d4WYUZ9a4t7AEGekia1itokVfGCnEprx8wcxZMw7p6n4kksqPDW",
  "key8": "1FP89YNWjw6JMxrQhhkhDKJk442SgSMNd7jGyNtLvzczH68mpwgAV4o3idaoas8FSJMxKnvRPm5b6skBmepkb2E",
  "key9": "2cKQxUynBGy457Nz65jsWSQihoN8vMKbwRAs7z8zr1uhMN6vrwNE935iBNQbzERHb42gqNHCAUaKdc1iktHY1AcG",
  "key10": "R9uLpzDfqRcSnFue6KGwVzhoGprn7oAuXfsjVmVVK9ZNrR2EMPuj4hhckpumyJiFVTUzxCjDPT8c7xZ7yYD3Wjf",
  "key11": "4stQRqGBCwNVtAs2JcZs3Fnn7uEDeBhkvpNtEPAKgmFpJBMPMzNyoN7XsTiF5pDdXN2ZefxhjQLw33SpHqAM5ZLH",
  "key12": "5bGiCaGAdBxoVevZ4UCfYbqzfTXjV3JygFem2aFUEDcnJRMxqm9hFMbVgBz8AMoR7XC3zjvh8zLRpTRePda4KZbK",
  "key13": "NCwNouFFK6PGXxNKo4CBmaHMSTPNGZ5enHgwT1SvBzJQQnghGjXK65eobGi7HMwbJnc58wFPguotwKG5DG7CtMy",
  "key14": "4mPYY7pMwYY84JeuMGgTfvTqR1vNdUsvAyidGnoVanb7G1B4fXgiiYbaYpVRCHgHeLz8RsnW4ADXF18zHiFQAsyW",
  "key15": "3qj19oLiXDB24ZkjM9K4zoJY4pNJ9h1SLNMvBKNP9vWhoaVxdm5jHRCxCEXYNHbSH4SPnjeuu5HfCA7gsY62tvQW",
  "key16": "27YPbv9veFSaTLWF3eP4VVUbxUWEnXCNtNon7e1yba5hLCDeQAfUyngr8NrXVW7xfa8n67M1n4xtRgyASkQt9z6A",
  "key17": "5Pbw3eEU7G3e4hPtXarxkFBraMmqCUjtAziKEpFj3wZwTQZxBDtCEkknw5BNY3urhUX58d2M47aEdu4yc6Svx9n5",
  "key18": "3rZKjF779CBsh7QB5xzJrKjHAUUZsJVsePzHUMgePZGrfCDqZa7DMyv5Fr6GY42LykzGRjw4Be3Crc2teyzdg4pG",
  "key19": "3iCzDMnQTxTh2vyMmxKHDF8vZWYL67ptxqWovMpzpwRqKRQLLUYeBGM3jpR1tLpQtWF5SE11svDWk8x13fY616jG",
  "key20": "2c7DqeATwjXCJw8cuws66FajG2dB2Tf1rYXseE27jLGyD6ozzWeedUNQNXEPRCjMSAW6LwAxxXoTFh8z7oaGLHha",
  "key21": "4qMNB4sJLQACtX2aDmZzAUWHzWmmCwG4R8tuHSUWXCYpitpzfuKwAApGoTS5aeQ5ZTd4892WvwfjSxkh3UbUEc9G",
  "key22": "3CyCsZX8to2vMQ9YuGJbr9ZuMzwYdGLRxzPDXTo2JqGJBJbc45xcBwg32eVveoqVz8oN922unn2St3nqChAokpMv",
  "key23": "3zMayxN5P9rKMcK2kGU3LhBVeP6NSvETJff9wEqMXjbutLsmeDSnumfpm1ugoGUiYU5VDvej5tChcRZXUgzWS6z1",
  "key24": "3w6Swcjsk2MgvruywXJjihzwfSxKft91zPxLzsiBSYcTKuRpfQXMCkdp2ZdqmebBEMWAgEhWkrsD2EadoQskQpRD",
  "key25": "59rKkCyWyKku9rnN6gdyYuY6QNS5w6cU4b9twmrxGiVaZm3nWm2s2zisWeYQokZkX3D4MrZyDsYw72YT8jR1gvaK",
  "key26": "mJWNX5833cMs2k9p5CdTp8qospgTNF2AcH1ryA9LhXn37uoHhubtjbVWuVR3LGbYDpuPmpq9rXd7ZzV54KUHHjX",
  "key27": "3tAns7p6bi3FxrPyd7Rp3GeTaWUhmAAeuP94mf7MP25VVQK1ZD8aE2c2iPLLJreHfHW67QPuz1J6Hd9bPxxRNZHU",
  "key28": "qcFPgAjmzoHMpNVdJepohG7Mvg5W9TmoAEWSuQhSAT8Qrb2qLJzxsN4tEySedFtF62sdRJriDG743LZ1MLtW3qR",
  "key29": "29pJkMDv41o6zcp4Vetvp9GhDDbViNCrQcm3towoXeZDkdE3TRnVyqPx977TdbtrZ39nv9mVn8Nno86iyDKXvasP",
  "key30": "5yQrw4CsRb4Y9uKfn7xvyE1j8jxF8zoaz2natQ8B8hEo4gBf63ovL63gsycqkpdzRM8tKFevNhD1utW8RucJNEJS",
  "key31": "5vasWSTxGwuWrXgTXu3Y1n8CYPmPyo1TJNjhZ3LYobwG2dgnvRkYaRVDDzVSfcewnExxy4sdiAD6bycoBVTcNpq9",
  "key32": "39r5pUMdFjxBJCaMjLxChwh2rKegvymnif7qQqoBs44DALf1131c8taid4hbURWzQ8kULEzLhZ9RFHZWuZ2QvYD3",
  "key33": "sU7kFaHqc56GPsySB68DUfzzVk3ADPN34vUS5WgY6LoL5i1r71743FgKuxKqcY2N3DdC8V6EH91LXo9D1voKDZc",
  "key34": "3ar9ZDcAex4Pf6AjjiiRjspbSZaY4RBHk3nmMe8uME7nETkw8CaGqUnTc2K6Gp42wZaAdEDuSQzVGDFpiks1kAAb",
  "key35": "4UCV31CxH8GZCXsnGQCDLeeaMwZxfdPUSiDbVa9ecwrrJiUFahArcDLQbEXyQN9vrgN4eyofKkPZ4XfEKPBS7m7G",
  "key36": "5svyHeaGBN3RrmH3mxYVDkr15vcjMdsbVXpwacFtYRtq1qSPYuXSDcGPZ8MChtADCaF6Y5nAtHXGyPsuqpwKfPsx",
  "key37": "vMtgY8URYVoAuxZVg9jwUWeq52Lju9EqbSzH1pGVVQ6gVE4dJmpjkWJ94wWQUzxnJvXYKYrCai3SKdEeMaJMXUQ",
  "key38": "3onGhUM6CRv5azYYGRLBVPBCgVDttQW55Qcam8r3i1jTuXqmiuNGPXadXd2DXLKdcxUcbX5a4zTYP1dcgyUCuSTa",
  "key39": "5TtrgEH5Pf2AdiXn8vkH3RLW12cu6Ts699Dj3jRC9TfLsSViPqdxWFe6Rv3nBUEAFjiRNnyxY8JKEDomMg7ZX1p7",
  "key40": "2DBLU6jQ6QMPGuA7BtK8i12nxKWDTXAffiiMAbyYZmQSHBKuJxmemvhK3MpPdZvM9k1GBoRSLEhyBXKXNNEafL3o",
  "key41": "2crG7HqVVd6KHVzsj9hPCoyMrLhJPYTNXy55UnmmCHoWEMPcwoeUHuBK5Va6YbF52YqdTaviQnwQ5aYT8eNtYBxa",
  "key42": "3PBmGZNqQ3sCi5z15pqH8q3KdWBSxxkFFvDb2x6wpwnMZEPo7rwrwiQDTCDtuRWhjfKeYWFdpcNuVZS8AUyGCdpv",
  "key43": "4xBJzeFjgyiHEf1hpSTrpPwTLXo2P5rULyUPKPTKhmfHVzB1QWLfeemM3cqcQznprBYiXpwqjPZ7ggXMdYcqA25C",
  "key44": "4kc9FoKc1UxrMJWuG8baWvfTQbZybyDgVbvXc7YtU2j9Up9e41jxzbTHBBVde24Mfj1SRAPGADP54XiufssCBgKn",
  "key45": "kW3EpGZz3MCeyKBg9eey5PAG5wEva4odDiK9Prbqu2XnssrX6psXrDhtGtyVRtk9uJ5anSgJkZqvxBS8172zF9q",
  "key46": "5RVVKvvTG9ARsvTBV5FsgUKQhtr4siP4deqLQsiauNFoYGnaa4uerqTNREZELcQbfZnnPXripzSUPX13ALQVythj"
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
