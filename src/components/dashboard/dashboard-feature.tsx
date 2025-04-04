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
    "dxCT1otEFofZLoJR6ZSDQEoDv3hmWcQdzq63EGxxjrGX3CdUeChwQ9pXrL6PZo2wdVbYjWueiToHdNXT16hbaey"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ByifWTLTRdh9eizMcKHxcFUgbTyavziS7sDno1rVyPfz5rNg8y6amrNoKMS1ZHHDskJMYHZ34bYtfbJfdQakjH7",
  "key1": "5KCj96LyZxAK99YmXjKnEoAgmVAf9nidjAjsh6zDfNgDrEzX8dV1johUqMFPVMBXSatVgmDAQfmhWJ4QznxGqdC7",
  "key2": "3yv4fBJkMm56JLWp1CNmoqfZGPoSUUjChF6Ytf4VEawg3pajGjC63aLm3njx5Ka2U86Rrn9orV4xVJZxbGMjf5ER",
  "key3": "4ytvVqKtizs755iRRYPJ9bt2TfpH5jBwFfVHpPQsgyiVU1heQ5TENiP1xXTr56NZGZMDCQz75hRnAcd3F4gXyfqJ",
  "key4": "3qVvzT7KNF17H9nhUGnCHCMbwkpwRr2HNuYtdNjbh9GZNWACYcX1gzEEMgnotNMdsCueJL22VeteNKcXqST8cszL",
  "key5": "3G2KVX3dZwghi5oiC7k5sYRXuWD6TSU2SZeFxA16HKNy7NQ16kSSmERetV33QMdHe6gTaTF95Z86A1hhghU2LotH",
  "key6": "5JZJzo8kmA28enPu3KGzb2H1hXgZ1D9852sKyXszhVjJhWAS5H9H5hD8y7Z6QxhMEWd1Sw4qCdKN6HHBTS8t8rxS",
  "key7": "2EW42KLRiJXULpYUaD2oEmrtguhi8yTkNe6ksKjocNhwyq1iEpY1zVFHdynoGpeaMPGFqbnRCU13oyrtRv6H3q6G",
  "key8": "4pCEp7fAXbUbhDhsxzcHnUpASPt7LDqK6xWMG1kmLCBvHDhdKkULjNHvawBHNuZKaUXLM329sq5c3hnhQqkTW3XK",
  "key9": "3XcXV3hkiX6M9ki99G56TCThJeDmTkAQFWZbqFVXwGyzV8V6vV7ZtWXQEVFsoBpN7Ht82CxErWkPDMqyT1KVs4cq",
  "key10": "44fQeeZbYiGcGZhK7jLkVRxZNmXKW29x6hrTvap1nHm4384AD4KusiDfyQdLMcsY4LWuTop4FWzj9HPjbRASdAtH",
  "key11": "5ppmCEuey4VBTRofWkKyf9Gw5FRm5P9ttsHJBHDJUuuJUu1yedBCUy3ZJNecSE2hs29NdK5xREMhydLubCZkvCYU",
  "key12": "2oyMx9vTMvjC35xq3ntBHhy5ZHbKPyUndjoZob7U5aVwidn4eKbxWrUBCqNo1WnNwraDAFi4LWyE72bTKkJfyxTY",
  "key13": "2KLP7dQKHnonrzhCrnhcZvsBguRoAKsjghCi9oLCcpSXZRzZapRmQEJAvc3GLJTEp96gdUX97rAYWFq95UDAqruo",
  "key14": "4dzXS6P2qJSH9wXEBMfQC89L78Fn9tVUXUtt5pzdyxauR6fttTRYEbpYug7oYhHrBEi1c6JFYEkeHngrNtGtkFhd",
  "key15": "4pEaB36tX8LWdjKucM5FZJZePKXUXALBwqexCFZYFp5eCpCLqbj9QGajKaQHmrZtCRdPH19yKFVy48uw2hZMbnUb",
  "key16": "5i6HLVhjxL43RppVX152FM2PuiwypMd1sJCLGqM5ZcT3G3cXx6wqYSZewrKXWUetHyxr7gGbK3jQSMaRCLcyPFox",
  "key17": "GpGtvDEAJPHi2XUWetXyQrP6FgSTn8qsJ173fwsZ7A6EYMSSV7YSgmFPr64gf9bUHTD6stFtKfZT9XvJ3TXJzGA",
  "key18": "dfLpxQ5iHMQRhZvJKkPFUzWpYZsCmkmQE9VQDXV2ciaqhoRnC5Q74FfnYn9my463oRgjeMVRP1Q2cSiBqthnAzo",
  "key19": "2Md5PwCntNRa3VxpZ7H895SGq1gzyDhfy9p6xnNoFTcndvFwuYBi4LKuq6sDtL3xpZKK3QTVuT8x1mgDNMizTZv2",
  "key20": "4eLMBEtC5hvUAeH4LtNAgSQ9sY9Tx39xBDMEqgVoaCfQXrhWHDFXNkhFZJyMyp8tava8fGGo5vFxVbAAwq4UvgDT",
  "key21": "5foW3zujcgzyUtqe3uUKryRmVq3jB1aR5UZKLRua7XLR4PLSmGDHYBsYJGjnM6CWqT2EaCYiio8S3DkfWAppH2Z8",
  "key22": "3x8PtSRA4KYCve7bhmXwydHmHbjz9WbtbcVTdw2mLJ9LahBxtHsbsPnrQETnh2ygkDocPJesfAdkNKqPbcdRF4Cs",
  "key23": "47E7SbhB6yLARN9PKonPQBQ8Wk2w5j9cmXp6gbfduDArevDb1M1F8Nthu94KsLrt2QtfiPM1jRgTHYYxeV9pNatG",
  "key24": "3ALq87Umpo6eBetmgrqhE9Puo2KqZRqrBLWkxZZmULaDUib3uhBaJCRafBxSNcUbjkEQ8hjuzLARzj84PnsvS9iP",
  "key25": "iaPZSaWf6sUSSpS2G8HLnWeU3HPzFtYKhSYB3bkfPjJaMdHdCpoEbQxmYNKF1bE7CY3nNfi4f35Mmka3xaRZMjb",
  "key26": "4iSEabTLs5f5MumtaZrGUKcEhGKjmHfX1jp4LKtCaSqLxeeYnZrcLVgPrTdFHdC4PLoYb7D5NfRJSBg8FEcKYsFh",
  "key27": "5A3sdGhtgQ6QiP7DBb2eKMqubDjPCDHciDuj6isoLeiaDGKNVRWCYri4bFAcJfEu5AvoiGL9rGewpNPCabB1ogMo",
  "key28": "4tbPJesTkMDGpAePSNeg6M6JgdKFHYXupmH7JY8iWtbWTMHFV3bzi32TKeZLMZyCKXWQ5HojLZEJgzuuwBwEGoq1",
  "key29": "42Ah6tmLTDPDwBojEQsQ3xJChJAXSH9pDySh6fEVWRwjyvzW8wYG3Vkn6LKCHTAXgVv8xCWy7zXmfT9R9Z4miTYF",
  "key30": "5Xr1wMbDTRPpADmBnyHtEkmrZ7rPV1U9sJMortgNjWARnfxr744dHXaqrqzGoEAYjvgZ6XymHpAWwz53eSTBCSnQ",
  "key31": "2AGfQCVsd1rz5Z4Lf8vf63UvsrZmGLzjCgbFXHoR3A2LWJjs46GMDmADf6utbsHP4pT68asFxcJy5hxsx4bVRHWn",
  "key32": "33TRYhL1hsvpvdWAyMg5YvMeZUJyamezp3Aq7egNqjXBN11QYUB49moUgTKfANPG9MchmGXnG7UHb7sXM78KcAA5",
  "key33": "aDMN9PbARjtt8PX9rHmqSEt9ZcenjZcdLCwA6YGWMZu4FVaKoRqYAvadDF7LBodaU7z92Ry9YNqvGsiueMGdDhr",
  "key34": "2Kqh7buE7f3QJn2y4jtef34AMxmrA7bR7BqaiQXtbWfB8TDYaXHMKADGkTscNsxhw4G65r2itHgkgZXGUygfF5Sc",
  "key35": "49Xvj5wWCAGg118pPD7yBsT6qaSkbB4uqSS5pdDYwRQ4fWJrkG924JwMTtfhzR3yUrEGfVubpcJw7JJQh7Qc6jFy",
  "key36": "2vGsqatQYeFPRU8ABfq81U6BddPA47R3bFUAZaWdjjGq4BcLe9mVPb1nbPkjQ3ZTCcGajFckwLy4uMv564DVyN5K",
  "key37": "3qv7wZt9dwH29ku12b6639CLwezyxDUNgoFL1rSHAG2ZjferDt45d6fjRedckJtJpp5MfjxE6q4HS99iDJ5AdYnF",
  "key38": "3pMY8VUVzxH7cNqoVjXHmfezfSZ7vHXduqwDHz3orf64d6xtgq6EHV3wToRA75cdqT1V1tWiUc8bFZ2JzkbhVk8v",
  "key39": "GQP5YtP2RYZKXW2cw2S76pQzZGd3EaFiAN4DGeYr9uutp9XifjzvRgsvsZ2ebjLY2waAbQu8kJwr8bq2Jod1uPA",
  "key40": "kCBw5aKypxueDwuRH5ZNkAb7eTkP7xPuNrE7V21FfNSVaQUM8FLiP5dzfS6pKBzPawwVyumUBzZN21mFQs42zsE",
  "key41": "4XpDUPEtq3W9eMMcMmBZJREctA1fQvci3qKQAKfgukXfXMWfgmYisR7xBYa3Cn4GfHQKwWUvoNkUo1DWDNMzUmJk",
  "key42": "vwsDqSP3kTiyazuD726d4jZo8q6bqb4MhnVKKBk8DK5KnCs3DBCxajpWojz4hJrx1NmbwfPcG5E6PVkHoehnxux",
  "key43": "2T78PCnJEtfT5wpByGygo6LawW1WrvFtQpzPos1sx9iLcjqRC3qEzrvdLdFToyVSqoCeFuaMSHa9LbZ8E6aV2hfd",
  "key44": "5fwU4aoEb7wvGmTuWWvasvHGMiqeH1vtvCGsJHGEjNLpKaS6Rp7K4bqxrHdXmiynrkWfkBjzmx57wi7AhyPbD5zf",
  "key45": "3FPgxgUFZVdumXrkBBVcUEiP2EoZjxiyNwHK1YSSHr76ehoDyG1uwipqxPbXtf9v4TdcTifnuxZ1zfUoUBcNk8Xd",
  "key46": "66ZcGPgtERY6mCTrBovpXDumcbYohVcVSQi56P7J2PDzE1XUuR9QZjHHqHHX6w6u3KUU6ENpHXw7HXx68qHWVDc4",
  "key47": "2wfM6w8GdYCWrF7DaDmkWoMeFarfyZtDQJ4FZ3BP8gPzNmrgcxsia6RyrfGmQCzzAQN8F7X3KQBCf9o5Ap3JNdPJ",
  "key48": "3PRhFdr3AJ2PpGQe52D7MuMMvk3GYv6pjKPzA9HBG6yeVJep6huHXNLmCvS1TqRV92Fjwy8ExsmQ2TdtWF2bdmYs",
  "key49": "4BGpKqhciz19ESwDaz4ASm6F5sTnErBJgsL8TZgCrGdfcVZEVfUtHpeyDegpuHLgoJ3cY8Qo66SVWrMZW1CsRtQp"
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
