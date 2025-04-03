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
    "63acA4Hx7Zm8vUr42tRqGWWhRph71UavJqLfmqquUfcCMG1nSKeXCZPar3dBNc9PuHwQAXYAgjXWCTVkgRF8ZFcz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wMJ9DxSxEbAyBETgohUAs14sxkva6s29XUt6aZBNLFhpbRmS9ZLtVf4gEgz37Zso1B2TNh1LKKCcWie3sYENAJd",
  "key1": "3opDwmbHGzn5HEqN8Yxo6yq7BHN2ySUF74Y7mkZdkU69eRgyRvfb7mDyMbLKmrLAbDFjHbbHJzD3ZyUE5ge2NMu2",
  "key2": "2swqj6NWuuoKA9nftKxh9xYrd7ZosjkA8S4CC52fndtGQh7vu7hkSiaQDeDToXvmWhqzF8s9b6wTubbswD68NcRP",
  "key3": "2j1VTxToGrpmyfLqvAZZjtpC97y8cYvSUpQSxXTeqMKyhCwmjEubRi6eh4gqm8U9qhm4D5Pm59vtJD4VH83SWosX",
  "key4": "wReE45szzMD81G4rotMJVoyCB3QNs3T7dZ8eBHB5TRdfJwfaYdGQ9o3RJ8avPkW3zxdrvYv8nReX9ujAPq2eZDp",
  "key5": "TJsiM43nvdy2WhzpSFbUk1hdYiSbt447sXjf2UADkafb7iiBLnprTDfb6ogWc9Xfm7Vm4P5NdP23wE7EW4YhS4j",
  "key6": "4ZGvQ6AwbHbC7LyBs9RNeQxjQrpdZLT9wgmpHxsXHka8EbH5LVkipySWC8Wnd4B2ygW2H91gerL4Ca71dpKCYeSc",
  "key7": "39XD3cSYEyWHCTY7u5ssysE8DedbTzdLzjz2axEJR9Cp9RVfAdFXjfQo8HzgBRLccuwpju6cY4jW9gL5C93ZXE1n",
  "key8": "4DcQz3e1zFAzCarzaQ6S4WoRQc7YZ1j8BJHvCbvpHfvkah69bJtUBYbrMC5DnY6NBQWmZPKx8zPC5MwegyLUXqW9",
  "key9": "4ZQjomCWfESFAow91F3roebWMtJqdY4DkzkFTPtMLhQA7vaPGHzCnBVexRPHmjQxv2FDDfzX8LFexv4KiNDw5YAz",
  "key10": "5arPo1RMMZpivow9D5Mxo5Xz7QNzasCq21XFVattRTfcZTycm5GwDY1ULdmLJxDUpMuph45mfvkZw9evtWQ4sf4b",
  "key11": "FwLMMBfni83YU6kre9LQJA2TVPCDfkMvmCoJ2fv8XsefM32ppmuZ5unCMDsh1PSeet8U1dTyW5sqYUZNhwjUPZX",
  "key12": "wxRGVa8vHbEoTmcJgrVtVxMvExkuoLHKoaeXYn9eCUVSgSg6o1uRx2fC4PyQGSh5Dbs4AazLHS2ZA87WmGh3kcT",
  "key13": "2y5duUTUqMjV2py3vZXDCvp88EYGGQmBw62wUn6E7xqMmviuHcyR4qXh1D8KGqjPG4ZJwwFdi77rcjyNMkRDYWZx",
  "key14": "3KSZmRsQbpighLoSdWPiabsexy5X2WifoBeJUvdzTFkMPDdYUvmqEw3eQwZKDyiVKFzZVuGUsyfr5hVaYGF1EANq",
  "key15": "3UezPpJWUUUP1iMUSvva5DJ6iPhKMYVcXdCGySnQZNjLe2pzkN9ixQf57d7M6NKdgRhKPNX12sS2CQmDdqPcyj2u",
  "key16": "3PUqs8RjVFKn2eT7dcMFkMeXXSgMTGmgmK38AW8rabaJqH8x8gfbYtyq7MQXhB9v7ELCthfoZWUwsVyrCBPup3Ti",
  "key17": "3fiSRcWL7QZTjVtrrkFBZQU5eXeBcWik9pxfhnMBdDiojHg9NVtL8zaa8T4nTZGr2FPzdLB5GcQy9A2zxW6k58VR",
  "key18": "3cRbWALnyk186jTWC2SzS944iov52pDwukNgSCLivJ6t6MWpLmHgxFMCroyJYMCTYvCC4vS9JTiadu3z5Dw6C5Gx",
  "key19": "BBoAfLCb14dsvY3Db9yVT6hD3R1zimHovQagtPfi2YhCEKKeFBd1vMaKAcHvkwEPnpVZ77RvPqr3sinVPLaKKJs",
  "key20": "5kwJXAw6R4LrPazs5KpiwsroCpzoVADxonSpLcjkx7xx34F36q8WCSorSPUhZkAcnMYww2BiFoGrnkczc6VAQmLm",
  "key21": "2w3aHeWRTjTbjURERnzkE2SaUvmN9gstcLN8q4qkwsowdTr4VnfLkQAh2GzcMnVE7Bxb1FHy1srJd6f51kVmCMSD",
  "key22": "4EidFwojwEQx2mKBRHyK2mDqrzZqsH2fdC5Q6HqaYCZkgbrXeVzJpW5KwqHdP8WAE7JHQMfoHXtTsxyBoxmYLaxd",
  "key23": "fMu1QVd5j55XH4FquiFFmrdCpbLtkmMj4mUoqx4pVFBLXUBZn9pUwwrei8dQxLe6f6uqz5DmpGinDS5SW8tcjVw",
  "key24": "5g2cyjvYiwahsRHWoquo1i9p4zFk9gpQ3oYVuoSzTvjNGeRveXchfk1qT7kr57UgTaGqeLaooC9MK1tjE5rsQomj",
  "key25": "4T9AXG3hpe4ve6guVY3rUQJECg8iB8wQGBLWngb5gee7nJLu6bvnPQ2uWaLkcmGqZjr7fsmH2wrYPb5SiVp8C6Bq",
  "key26": "5wmNccSoHhZh94NxmKd4sVK9y7WPwktxLCRzdK5vtWHtZKTN1QbRU3tzsKvsS79BmLDB4TbyUozpx3vgTMXPX3Vf",
  "key27": "3mRFxggGuzePKgRAUtXTTJAK2yM84XPPrhBPQudFBygygQEJmLQSE1DGmXUxkf2fsE6ZcGobmKq3atW7r9QjAfph",
  "key28": "4ooBxx46vwwqP1pjMXRm1nTurV2HAhbxhwoGY3tdpTWmLa4citbBHQurjFRRkxxTyenBYwX7wQHAy418K987zDg6",
  "key29": "s5LzLaWXFWPu38kReNur9xmTELY3kF8rhwPZSNYWxTU63RB9BF4A1ffx84K2NFjRFs3pRunE9vVn8fwW6WKFYfb",
  "key30": "2zEBhBdUPXMSGWxUsuYcVTxuRWp2Dpm87De6azLMzdbdFLC4edQTCSnSZ82Lfpcawy1JicsNEw8yTLgNRe9WFW1Q",
  "key31": "3cjipxXbBqxLjiEoWAo9QEMTuVW9iwZX3bX4auEd3QP6qjCpb26f5eRU8ee1A4H3gBaoQtyKU8NVreDyUH3sB4iD",
  "key32": "4JKFfwG9NkqGcTQ2fw9V24ybvex5s9J97mMM7Qq5PWN2UR4ZKzrpNo2AU3B8GYUvCzRNMrPLPxFqTjeLvNhmpVUU",
  "key33": "464uji6STd99RC3VBNeb1pQ5mefrYPvYFS3zP646kZKZbCqFHDHzbB9keg26Mf1PPBYZ1oeF3JoG73mtJr479Mrw",
  "key34": "5yXm4F9FtjuQ6tzHBGix7C55CMhVUWfjeRigzDuwV2FFdDqRZ5H5nBbFBFm4y2zJrUtTeNttSh9Sn5oPc7tnERRm",
  "key35": "5mGbkwjd7iBHWJSkERPN2LYZfKegRGXstmtv27fQwuv6dCbE94QkEzpfjn7zKdPbi6uMDdZeTLiMYd6NSi1CmXbC",
  "key36": "495Z49fqurGkUPTptmMawjFhMh9wBR9EZy6w1Y5a1YCPDQtLPrAPh99Xz84U3bscXCVeJadGUfFmtS43osijmtNQ",
  "key37": "5PtqtBKxXJVNh8LCy1Hj8XvbSQSB7usysFR1YLigNS3gt9WpPiTroKcbphegSqCbetH2jKJksXpzHTsq1szY2kUd",
  "key38": "4Bx1rJkjPMAXUi6dtPEEAJWcXbFhFgkekGCYE64ydmySaqe2qMSUUrfap57jzoLKEHrEQGk7U1qnm3wvG1zqdGhb",
  "key39": "5vWUYh8WXeZn1dGMbVat7Xy8B6sGVGPg6ahWLoEgf2HMyg84ihNaKZYLFxmc7WxEMewNKMd4WE3ursgF2ZpzgjWN",
  "key40": "mfx5PNHetsCNVE1CXZionZcpvcdTfffDucZRRSyTk1gtn1jURsDCNvBR8SpJ7QUH7PPKEg5KHfeDaHWuJJ8LReb",
  "key41": "3PtKzqffiw2oY1UVgJG9ZUEjxH94Hh2abtQsrEjJZj1q8oTu1o3GqYnPcZYz4vc8z8k76zpVk4zU6LdP5q8BZyvj",
  "key42": "xbaaTb8FcYVNLGLEHh1AN8r3cwRwxB132dZznNtKF3B5NuyHQGdnDPsjBjdAwKZf29QvEdbAqQ6jbc2EDYEJkHB",
  "key43": "3AxHEfxuiByVjChpMEbpRfanj3xQQ4xFbBGFd1vM42ygDKtrzX6KyLhmcrATS3wBvckVSjzh73T8SeP4nNQEshPw",
  "key44": "xiqAxVSiUF6VQsmqjVMXfaFGz8iKrRFoPAK3wWardKZs3SBjbZPFVuo4Z4CiLNcm5DefsAwoLkneAcrCDMqGkSY",
  "key45": "5fTHnpmYaSXfho6f5LoZAUUfA7g4o62fLjGiVVvHqyYkhXP35qdx4ZQvUHxiFXjgyFyP9Jkx7wrSwhwFpBZrgAz1",
  "key46": "5VCtx2CxkmsThNjXS6XKhHo8866RRrbnr6juMecPLxwETQizCTJA9efaYp5ngrKMjtsPq2anJi5bsqtkwqkC8Xqq",
  "key47": "2pRHa3kbGgCPkKXK8obmdsDdYtDh7nTMhsCS6HWqr1Cxfz3YPvNxi6ztBB8tsHcd9ibmraMc9s6GdtmN6SCv6CMb",
  "key48": "58iMgncrKsY1UP4cgmNqM5b1LAGjzGSMfVARydaP9DBLtL2phtgqsGXrcCEw2Z8nurb74mmUGjwwF3D5VEiSiLw1",
  "key49": "4inu1Nriz8k9TcyMKJyNqbZrHnCA9yKdvH3CtTQPkfwRcWo7riZDNNPDexVTqHbEEzLi5FTdNuvhygcNgF9S7HtR"
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
