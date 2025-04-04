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
    "5NbStLHUBh7AspxjhvogpkpesqMQbJuJpruTfG2TtTpshFzXoM5udtp3QwcN1aFd4VRepXehNaxepcp5R9CYDDsC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4McRK7UPsVKrcgT9QPAvniixAvKACj1br9gssQw3ANXyY6j9q84N2Tb1x4QtC7CMnzZwPFiau6PkKdWwQZLKsxwh",
  "key1": "5p8D3MoKZamUNPexNgYEATnBVdA4iBLektug2tBvEMfh8FvcqPX4BSnKudabcfYeimRjTJPzx8bQ84XioPthdZKM",
  "key2": "3kN4VAhajD7DerJHT7VMF7RtLDUe76E3i6FKAekDZr1v5GoSYsEAXUYsuGNTjRASMsyf32M4o4jGAd9QVWh981g4",
  "key3": "2NnuUQQSGrp1Lns84zfbZ9bZ33jgfRQ7CBtAUEMRSGiGifHsdpcH3zQhQkmBeBdKS4Tjyeq6YK2CnNjgkTababfM",
  "key4": "4PBAreQxA77EgjyRFk98GPp3ub23iwh44oPzsf4UXiR1uwvMnaXrXv4CgM4MtNcPpXKweGRSobbB63xMa2ZNNt5T",
  "key5": "2zF3r7LmBVCYiGYYrpkVkMcT8KArPspr5ohBYEkgsB2XyZNs4BCnMi9wXGEb5FDN3UvxHpZi1CiUauPvDjSQPZe2",
  "key6": "5xbYnhh8jtE7xpCWwC56tdze1D38Mpp2n4xfHWoTcV2ejBNC3Yx5RoRyTei3yM4PefNfjk5N4XoTNmoeBmkYnVfu",
  "key7": "38QgSWTdR2D771vGJ1A6YUGbfqDfrp6xkWFABf5SrD7H1GFLBhAhjwvj4ChjpSRLB6yzW27X8DJ9RMdzjt9ctnob",
  "key8": "DB6pAJDWGQJjEs8MP7AcZgLmizuhp72GMMGoijV26Dm657EDtiX2GJbwoJGFrmEArWpKogqaTsXyDS8Uw6Lgq2g",
  "key9": "47GzcES6DiG5qwvdmXuSAbTiyneCxXUgG3XuW3y55yGv82y7ULx9tsx3t58dTi1frcqgBYZ5Dgs6rcQURF2nqkjk",
  "key10": "SfNaXFuVHWdrub77suhXhpp4oa4qmr1FWHvMeLzPUK6jAnK1rmqbLAemX582w8wHUqTwQ1V6ZQAHveCj3SLHSTf",
  "key11": "3J6e2t6o9bZV9HHT74EcXwGDWxiJt6ypKQxZ6oFDUMY2nFquhG9C4SaL9kGskiVjrEvpndJ7pGTbrg1WRKXhtz6a",
  "key12": "5BwSJfyYbbDzU7PLLJLPhy4t5n3FNpRf722NfK3DYapDnVv983wihGpWv1erFKWmNhQArArFbo7sJ5cUrXKHfzNJ",
  "key13": "3pMmLDMYrsZZKffRuqE54RMW6zqc2PeaijcEEW7btUziB3FHrnMmQCjamc488wqg3aGuP8GESJodGqcpoYV7vtjr",
  "key14": "3hJ48HL1juEvHLjh1s77SPAWPsD44fBVKg6t6SNgmne27cEhE2gQkhKynfMq9dJzyRnJkcpwDA5zfEAfv1Hevxk3",
  "key15": "u3Y8tQZxYQ7ZFaj3UkGHXrHnq4Xw799ovTczGo71W5Vyx6wLFzwqDiraamQmeh3GDWDTadavCgpzeuwphnQ8HYu",
  "key16": "58j2VfWo3MSAYgFrqivLsg9GcMBW8TUgfAes7K7hsMeiihqc1pxwAZf1Kx57WYmaAyzci6N3VsddpHL2JRCufunS",
  "key17": "mc9q1EQEbZ2buaeECDmMXrxBZRgqDy3wiAxVuSaYb3YuudfbLqEPUL4W7zLqJuhtnUqVMWzwBacqnYt2r465LpG",
  "key18": "t62ExHnJhk8VDfZvuh6m1CVa6ourFGCBGPGrAPBRKFCrgpsvdvDYjGGCR15Nx762fNzZrqJ9uoveakdszf5aURP",
  "key19": "3VjcSLRSgdpktRMUvhiEfVciEUQKehSpEDxzRfdQPi5jmSNAbc545Z2ug2ZA1UEVgYf9yU3PogW1DhCSyQcFgs45",
  "key20": "3JVQhLJdnoJg342Tv98P6t8DxmawGhLD6iEabYytjeR7mogvZGXTszMNv5saZjr5Sjsgs7xiTUBu3e7ZKyWWhfHf",
  "key21": "4GMoYtd9YaEkhEnaJ3fxK2w3AoEpQ9dXcSTdojg3dsG4uxQGc5uNxJis2Vnydj3VaqwkQAp1GAZKWs2s6nB6nfCd",
  "key22": "2Fud9hdkvspyS9RfZXUFGB7XmYGKr5jc5WZJhFsUir4qSamH7j4yNjQu5b1KUQetfkSy5nvXnNz8iEbyKaAVi2sw",
  "key23": "2EQhdPtM8Cr3YhdC5YDvP151itnbg9gToc4iZtYPrWDsaZAxKgi9bNmyURUWpVho5KTELBhgxUZT94QNQU1hys3c",
  "key24": "Ejx5VEMhrCqKEm7FHkLBd2eCeqw6N5BjbqBhM4HaTd4uSpu57csHZHWfmfAFVyq3wnMhrazRTUpj9yK1f1JSuKq",
  "key25": "5wnYyEbKnvARA3ZAyBeha6X4Zi7SsajHNDMsf7SJ7oAz5rDHhpW4oDjaSr9497nopmmgmB15F8YukcdS539y2omR",
  "key26": "MjmMV5Z8L2J3iszhzbZnKxWWFra1YAGJQ9btV5kNLp8NQUXDReuAPmSXDgCTWPPRzY9bQ6Veg67hhW1b7gZD9oc",
  "key27": "2ynDrnSS8uBPyYnXxEMMYWNS3i2hxFQ3Ya4M3ttVKSFxwhMgTH4tvBUWiPkfnC2mi1rBRdq12kq1sxjUdfuLy9zf",
  "key28": "ZaaRvnTrb3d3KdX5GA9vfj51hrXHQnPmNvbn7gc1f3Fxn5emdWjDGxZXRSiHJFz1EBC6rpY9dZgpnPRQ3xokP1P",
  "key29": "jJk2rptU5uVY49nHz9rCBfPx3qArHaX47u4kn7JB1DcrqhzFYAMMf8DcZb8zR4HQvwDBRQjZa7vf3HCTJf5P4Hy",
  "key30": "5aYteDFEqY2jsdeCFHNdvGqCPwsGwwL9znDs5QBS8JLgwcJWrsoh4Z5QUZhb3rnuWMZoEuFcquc3rqxdVGhVLhCp",
  "key31": "4J2DyqRja9XgJAVC3jrPrqtdbterR4gR8zenHLcLEy1Hz9uLUo3bVT3JZDaV42i4wY86t5X4nujpbQy1f3DnyNtr",
  "key32": "2c2FbpBCYcJ6sJF29jXa6wDL81N8X7h79isU62Dr7yRehtXiEi95nnGCmxD9yvDN7dSzCrWLzZq92rvjbB8qyKGe",
  "key33": "vhoaLG2egSbnDEwjMopHK55pciBH3LtZ2xWqgkQWiDPu1zL7Mp85uLwMNuF2vrpMB29uWuDKzQ468gPXaRiobck",
  "key34": "2utUnS8zKA8EnvXK5kizktXNkJHAty27pT2E7ptJmJFRD1gwDsDu2nSpLXMK4nuYt8U1VaLpBoEeWdfFL22uzEmK",
  "key35": "pwZnST1uULdCUqjp6TQnNVjABagGTEGTT7aCikXAagnnkBuRoXeornZoi48FTKbmETRpeDr68CEDjw5vTC9G4nf",
  "key36": "3iu8qqUzYn4sEquPJrjvYCam8UzvujzyYBkZDeAyy6ima3UZLjcd9k2spy2g97jjbhTDbQZuYYVrDqVBk6qYQdHP",
  "key37": "9hEMRo7yjfQo6fHoohAMLRpEG8GQBaY7HcEGx9ngsW3y6uXb4GFh4GgGX6sB9beGVJE7CtLX56xRVa2u37zm193",
  "key38": "4TeYTk8jg25stiW5KE2uQwMym9wVfUX7jayjttcSNx45b1FEpPuHwammBqUqKEQNpyvNayBeD97iyddX7AYYZWrL",
  "key39": "4FzoeY3DxrPRqqgh5qJ85aFFxvuZ7wXikH2Fov8HMdd8iAgoJZK4sVYcffEk87HRvkyoTWsgZFv2c8ohPGpCQj5s",
  "key40": "2w5AXAVHZDHuta2oMDd1URAeTin8WCByJW1vJCJWuhkToyH4RzBvRKRmrgZJ2apLPMKa43bKEiebcipCFRn7hiLg",
  "key41": "29PJMtxKKmf4eA2ah7Rd1NzXwt9LQYuTKTXJsQS41LhvT8PzA1h1f1H9McDWZCE2gXse44meqsvo5d4QSNSSazWz",
  "key42": "PYecorPtpF4pHXFqWJxSXkxhUJvRmaTdLNbYS6Qia5GiFGQs6cwtrG9uiaaB9ZDBYpHGdDMCKKYURVYzSLwyGmu"
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
