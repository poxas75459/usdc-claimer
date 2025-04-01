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
    "5bgGJqRk6qJ6DuKWPo1Ks6Tsa3vEbg7KLEygb1eyMS6uqFp1kBdu297panLSPTBSX166pE8hDNspeiK73eXVVcBh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4v7NXGcKeHsiBfGXtjDuUgiWpAiapTL6FpU7aZk9JEP1g1ua15tsFVq2Q7EYMJHsjyFqT8K9AGRUFyTCgAW56GEH",
  "key1": "5TTUoMgNzLK66hCTuWQrCdQH2vRx6SR9vB6uXbFxeRwQxb34bQKissf9CK1FqfXf3jb5UdQN4B5KhogZJbWuh32P",
  "key2": "2HGthYiWHSNuFV4wj1viLsPW2xjDRDFGRdDL6wHt7oPJac2SDBjQR2A4r6WCXdZnFnhNjtR5i1GD6gtNYfg2vKyT",
  "key3": "4qicxZwvdNqTRctGUCRZ57yFj3d99k4XbSxxbVcUfx6PVfRTR15bM6g8E455FBZpM3MJRLvt54BLdNbEgP1zZbJ6",
  "key4": "62TELzT1VZc6m7vqyAEFJZ9sZhdgAHX3Qhf7AfWbMG4DNhSRF2NAbs3GXgiC2uphuq1fcGyH34s7PNfkgp3V3Yzg",
  "key5": "4p9E67DNuhtQC8rLafxE3DMQgfiJJdVhBoRXjtHw6A8T1WaxZEjqhz1pkCsv1BACbTH2PHRs6ba11i7NNtQ1oScL",
  "key6": "nn5gFu5eKV1TrA3HmeELMk9HpfVjruSTjmtpmZYqV3nmF3Rw7ELNeSRULvBP6m523yTjQThNx377DVzPTxdqUyK",
  "key7": "4U3mXnAKT1oYa5KLyFYmbD99GNYqJ9w2xhi2fzQSY7uCx6w67Xo4ayP3gYzMkRCyiHEnJJ24CoKV1v7GgKZtRDSg",
  "key8": "2XZ7wzhZmkz8UCwq2YTko2s1r8ArtRp2BmrYhL45udkVeWdX93epVbJih9GqFgMRWhyLnJ4TPRAezGNbaLmZMKwL",
  "key9": "3adjEofuxJSNctRpeyQtw1V4knecwxEjdKgqRB1EMe9mwTZC6SAAyHnUGSWxws4mTLoA3Sd3uD1aAV7g4Uj9VF97",
  "key10": "4GVmVM1q6Dyubgt8fAtom5RqssCo1AWLraxzSRmf1wY6ajSZiAktpRDDBsPq3NZjTuT5GXFm27YcLFRz8nKqYMsc",
  "key11": "61AaGq5vRqdfpUpf6gQayHVL8oCQ55G8iVBHiYpzzRPyRS1gt8RBppxyU1SHhEJ9pefLhjjefXEL1MWr4pM6z47a",
  "key12": "33jgikMN1c6n455wjMt21xeFMRCCG4T6QnM5MtuYMJGHRKCRp4KoBsaD7vZLqthMKKaoW15DndmNXFuesdLTuW6a",
  "key13": "4qJun7RSVionJK12pXEAudCUynU5j7eKv6n8okPFDPzpGyPNUiiwqHCmtJvHYwHXm2KqWs69KsBTnMugmrvF5XAB",
  "key14": "Z2vJY4BxeaoErUXk9rL8EgMuic46PSuaWmspxZgftPWXU6PEHyXH1wnuppaDj2dcv4MbXPfRZWJbuMH4efV7oqs",
  "key15": "27Bev3e7y7B17HTbDi165XPhjY3UUUAj8guVft4MWKMzUeipdn52mWubW6bg656ZCHSbFpewK3NqbTZjUMd5wJdW",
  "key16": "2YMKf65Mh8dESA2DwnmP2sypwZnDFX8CxPpWkZZ1biLcDHddRRTRFvcANF1fAZFTFoSC1ebi1pECzVvH7NV1PKyi",
  "key17": "5GVcGYdtXYxRyfN13aqgbq7fjMjRK8JmQs3Bj9CCkoSntSvie47nj6Mn2wJPwwAk2Gihx3AVLZWLkevBnUXnQcta",
  "key18": "4YeqJjXoVAvX81RS41dZjGJd5WxToxFkq3MhBSyvXCEADMFtnR6K4DCX3AkUXyHSRFAXKHGNnSzKshi8Uck84ycZ",
  "key19": "44epNeXf5KEsfdCHmwhqUKkNgQahr3qonypUPj5M82zoyGwuc7uzMP3P9GsVMSreN2h8et3AjrU97s3J842rwARb",
  "key20": "65ebf5MpT1NRGzUtiUgsrzX5vmZud8vJhhP8UWYSP37JHpNBE2pp4ThKaFUdmxtT8d5fFf3Lm2jGjwxfEgz1PiUA",
  "key21": "bfJbXvZ8jVf24FnbYE6grVevmZ1qG1UJ2ySQzS4tcNQUo4TcjpfYCGuvVMMFXEXFESDBV8Lk5ZzJfE1SSyvKjtp",
  "key22": "63omtQZZBLAq1RroZkKPZLyfU4km6hoDBwjcy53NQL8waD2SDHJgeC4vSyd214Cgo5VRAKv61QrZoSLGqYjN6F1P",
  "key23": "2XnwHWjmJQdtpP3eMSujf5WXn5BQE4yxk4uryQmX9GXgi1r17CjeZNTKk6TpfsGgA4o8f6CR934Qn8ezveWgTjy5",
  "key24": "2r9uYBAHE6Mz2r4sSLwoWz5pV79esdLv4bw3YSHXw3xt4CtyLsFYiSzhz7y1ri3A5Mrdxgt7nxBNnisHAiVd9Zuo",
  "key25": "3YMe1CQrdqFS6CERdu8qu9ashrJrX9w5r16uaXMdTJr1QoeFszVNk9aWrAZaPaC6tQfSMUjbT6R3ddEfaLCyLBkz",
  "key26": "EjfNXGnbHofQziYLskANghHMq2pp3amgxvwYi81wNFMbfnfHsN34wHxfxadgvLis4x1gU1VQcFPSdwxYpUifBxt",
  "key27": "YnBCFNvA3boxHfuWgpfg1Wzr3u8Hj5XfXGW1TWbs5zMT1oe1kXXnL1JKxgbmY38Gb7Ymm8CvkHGYQzVyQ4Jr5ry",
  "key28": "2K5RaDKHfpCMoJjd3SiLn3qL58YfJq6v6WbaabVWbGSVG6ojo58iiBExYmYesAwDgbXmgJbwWGXQN2tZ3qJoyD8J",
  "key29": "3SWoASkzY3rMY52unbcwp85mkKqwcP2x5ZszSws8cXe1djzfHBiQooffSxM6ByNKjx8ouXjFoGfopj72azn5HPDY",
  "key30": "3Y5yk6Jw517xQJomy85mzRwhkGtuQgPVtTs2nBwnCdTNbE6vWcCtfBuLxjrx48AjxbtY5Re8bfkKUfQ8pCLT1Woh",
  "key31": "Vg8hwnjemMCMGiErj584cCvnUZVNgdEwoaanywn6QkJgVMQQn7PdCAmqyUtbZeq94ci7HahovwrEUib1cn7hTDK",
  "key32": "5cPEmoL2CPaUYf3fWpdXvxVzDBZ9vbnaC7KpkphmNfjBZUQ6jvgWTepJjY4AXB8xaqq9QV5RvEVcTn7sy55ZXTKs",
  "key33": "4i59D5CcVY359xQvqzmm1S6wyq6fYy2ZPR7pGsDMG4ZNhF4KFR9bXPJjGvsFwHVPFy5DQXVF2pbrrAwY7t7MeuNg",
  "key34": "3hUY1hNfLavSZ8sT46QVakNd8ZTrUc88BdEp54PpUeNjt8xP8Scos6imnwPt2A8zqSYq8NoKaL5QGvt7VmCyYTNp"
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
