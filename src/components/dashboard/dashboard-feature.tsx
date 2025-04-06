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
    "5ZGYHqfjC4ztrXKub3ko6AMYS5uV21LoZFiKdTAog4FYf8MA43sfMw9Zb3EJwV1GLptDbyx66EW28RiXNVuM4rCC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cGPTsyzjapjaTEXGv2eUy5DKY7EjBcHDp2AQf6LoeLcZT4GV1RSLU4eh4PwBCCVRAfbCiBxc2JteeJeqrWt5nhT",
  "key1": "edDCC1z4AH52XSnk3WJc7ryk9PbWhSgAg6r3Hsb6ZYzRFksQuPn4enGju5tunLKTGJqEVH2yvYC5ygAnMs6fu1L",
  "key2": "35pq38v8JYcuVqUvZr3MLJvzQKPaBeaSw46vHHRX9PbBdFFBtnpj2NmaypANGSX46qvzaFoRe9sZacoCfPm7Ajhb",
  "key3": "51sR4y6uMuutexRU3Xt45Eoqh9NeySbgw482SnPucDMhjTDsrZ2HH5oNfAmiNHvbP1qrdxyeyG9P3F6YVsJQRT4A",
  "key4": "3MFjib1raF8Kp4RTSJ5yCNJdD26yfbdWXdEZEN8bX9eHXgTfDiHBEogbqy1c2TpUCDRnHEK91UoUVZwwcURQMGcS",
  "key5": "2de4AeLw7uibUEBjme4NCZ3HqX2U2LQv8mck73PF1wtV53mF7gZT2SEn24gPn6KTfQ5nt51UoXZw593QRvTbAMRN",
  "key6": "5eLzYPELSFACMrkMqFXsQvhpruELR8uoZgcXCqdUekLP2RPzDBNXqQAZXN5bTBrxZ4nWf7xXwFCd6PMrZmdfDwVB",
  "key7": "2L45GVBw5DgHaY22FrPUBPEHGfy7DLTYQovLRNwnHSvc4o29QfBhuDe5pzfsaiH77p3zLEesE6FLNqPH3DyBvix5",
  "key8": "4iMoKGTyquvZTrXgaUvXMCnVgKTWJkVsa8gbjaAyGL69yRKBEa3me684kHsz3ufW3FtCDRzTJUtudcTTanSVryJE",
  "key9": "3EjgYmTfPosoNHC3b1ZdaijcJqjQwUQDbXuCXRxytkSSTdFE6tqpr2Bzif4jCLbuVUSMptKZtBcyiJXcwUPajpZP",
  "key10": "3ZvFyGC4HY7MQiBd4zj51TtVZdaTq39sXsuDxZKxH9QdQXWuToDgHJRJVE77p72fXcz5sQV45C2Xb9bVQ7Z9fSf1",
  "key11": "4YrsZ7AzdJukfBeQ7tJDwDEduKXne1cAsMoe1RDkZY2qPoZWvGbe93FDnDcP8wJw46Ca5hpDbsgfhQpT8LHCDrRG",
  "key12": "2Mgxu5YrTo8Fe1ujUKeDU5eGUrSpaAgmBJBwLFEMNxnW4ExR4Lq49rPwusw49iRqLnnrqnoBE8VdC7u4TKp5Ut6A",
  "key13": "4GqjsppuPxTQoDJxPtkZ5XvEjd3KQh1LzWoqEGMU4BhfpUDhv8xPwijmy2qgTj9iyPFuzd1dCSywqivRuWEfLEcU",
  "key14": "HBfGFTxuKw6rwyoZQqSfneYyBuFVMSaTHWGCwwac1zHFqh1ysCt8SYmkbs7nECGmcEBJW3od7qegaWs2xofKK63",
  "key15": "TmMT3yKXjsrNo6AXE5KrnaiERQGguUgeQ2t8gJSDG1AdhNf86PzZZWUqw6PciS1Se7rUMgeuN9uXwz8k3611thb",
  "key16": "3jy53fp4H3K9KVXhhKuyamvSP9MNYnacnKvsPhjSGoaLCDTrH8F4pRLWSzAk7yDWLUrgHyNYiMpeerzofXoVysXa",
  "key17": "2UXLYQLY6LVVFvj6MNqxAaz1D45rCCdEX5fTvJzT3kwf1DRmMGuJrtX6BPHPfjWStZU1PBDAKBDp9LEQieSyCY7s",
  "key18": "5kx3Czi756tUCagZSYMbVRH485uWWhyge5VZFKFNw7Lf49sgrbtas8zNDy5hqycWKCaPBrXBAdVMyt7aKe6itzsW",
  "key19": "3jye63nQdJbtsAvafwwGVM63PpaBJEvtqDEpfiaSfH72Z1hPh3kJi1QxKCgMfLhg5MVCaDhYwR9VfoMwFTmkY8cJ",
  "key20": "3ppw1rjpxVY7GWqTuYeNtygq6Ze9ktDMCMzZ8jdGpRaLMzhfKgrL2h2ErXGSrYKk24bD3QDkB3JewStS7LFjWz7N",
  "key21": "5J9U8Bbb4k2SB7Bs4pAqJXo99wQDVEhwPnHsjg1znSTZy77tfyXxZJdg5VZeyQ69XUd6avuv1sAP1FPGP7T77mSE",
  "key22": "KirE1GevmxNCPEpUMRtqTFxorwAC3RHnW5gEn4dK99bFKqy4CNuAN9pfaAApeYsTq6m7ASYLH8sTyAvcsHfGcZi",
  "key23": "5r2SykXKz9fr6wTMgfkh8QzpwakSUT4FKFCjPnaPKocM2WMFaGQe8TchDiuAae2H6qSbpXZCKWNq6BW6PhhYFd2E",
  "key24": "2G738GbuAw4CvU6P4b2kz2HXLmHrFL5sbYnTQwbcvowjd8NLX3izBitRDy68eDCjzSPaW35by1KQpuu7imawZzuj",
  "key25": "2gPhy9Zgquwerepw7k9fQceekWz493ZdXVKBYsNb37zvsWutFasDeFfP4uuHHAXYuWq4MY2zoM4pTFwZ6NKAJyoJ"
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
