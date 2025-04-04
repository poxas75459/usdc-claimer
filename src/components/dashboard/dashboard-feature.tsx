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
    "HVWozAZSd6cFV4NJHBxVsiv56Acd2dTDJGnc5WWxWeyQTzbjBCG2h3ZDxWggTwCJGMYtAaxkpHVdixMf3qQVS5H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eUcKvxCVBsqbqoQVHea5GJen2UzXe6HDuMtv9Zwmf48mL3aHu1NMrq9dgJYMJLYcSL8EU1mkQR4iHqh2PYKDTVD",
  "key1": "5b2GMBSJAJQP673YJCBXwJyBwGYELerpcE2fs2X77zfvZNxeov9eMMRzfy2NcHSsUFUm9AQGQ7vEnC1VxYGrNjUf",
  "key2": "339UpuyStfWAcLyqZpyZmr6hwra3BH55TZkVKGp8ADoHLPeFLMWFY7UYXCKWhRKwcbTR5PD8TZTTPBXSvafmP1jR",
  "key3": "mPipu9KwXXCRxNdT1Uy4D6YPfYf4Ft6FvLNKpPLg5a39RTcs8cZVaoqpb87jz9LHvFPr1wm6d1gbWNrPTtz6nE8",
  "key4": "4dfgdDvuVFKg97QtC3DfCDXcfaYA1AUZ9pcm4kXwdGY2Tt5nR9DNiDAuCr3aMrwyouNT33RDAP1bZDwEmyu7GNUQ",
  "key5": "ErfcG9tysemZ53BjSGncJHd7aN4eYoaVMQcwqfyvz3cktawcgh4pDmF1SvUFkRBpAPeLQ9hJhnCaLJbvU1Xiwke",
  "key6": "3hgPx72RdCmmdcKBryxuCgHbJ5W8qGk8pFPdj8trHYCS5gp9EkyjyjymrkDtmbxKbEGFutgDWbJindM8Bqr1wLbr",
  "key7": "4RML9g2foQd8wtvvwiuAMvHJjuPSPyPFJ3vNJ9jprUKBugZ6QphFr4VqyZg9oc4e45HFW4EKiVJFZYnKejmisVFA",
  "key8": "pvmNjadBSSctbooCdPHCVCo69bHCXZnLjaiBjJzfLw7n6jLiHjFGLgWrKTDDYr1kuA6AWSFnPZ8Gujk57rPo1T1",
  "key9": "Qm6euGXBK2YmUtvSnXtLG33h15eKR1nSboKkuVy7Q4vNWGn2vyzMSrE7d3xxYjzdrxW4ZEMJoS6YAEy1LR4WCt9",
  "key10": "18C74JacgaEYfB6MvkQVBqG78eRnaBKjSdKJqAaEsPpbcLUb6fLKA6wuwAhTNAjBJexgoSJqn1f9kA12patPAQ2",
  "key11": "TNTxQWmXDr7DtPZkSWxmvXxs93R7NGP9zNMd6W5Zrc9mnNJqKgFu5RP3c46RNamFPp3w5teJGDguHErnMFsJCKg",
  "key12": "7ddbB5Ydf7VyFonnMtrXCYTZSCLvqDeBrameFqRUnUmM6jQLm3Q5CAwoNDnV17FBntoVbqGEQrnFy9pb6e6ZeoY",
  "key13": "4e4NkJnAD5qt39AoxX4TFAe27zRNyi9FW83M5AGsbf8fysEMEzV5xUoCG1xhnWHA1L3fqqSPnLvczcRGGSP1bKRE",
  "key14": "yjaFUMY4a1J2E1s7tj7UCumRNP7TKL8EfDcoxPbK79HpHpPnX6r191kNU1P7rsix9WRSBEjxzqjNyy1xwP6CCS9",
  "key15": "pamVwaQZNY8mHTqfJC5M6cL8zzAxKeoxHUMYQaVJKf6QzquBxWwKJ8CGufovrDLfjcf2Q55zvnLt2ydZHmsSXuj",
  "key16": "57obMcTUY9BJKmztoLPyjyaRFnQGidtUKbBZ6cYR6gBp42JStNDe995SVSqiSwC2i5vmDRQQXSP395AxAfHJFVD6",
  "key17": "4f7g4oYyCQsLUwzAccoQa5vxPrwky8VnVDiumdRTbVep1bNwnaZvxzEKf8kVqqZ1LDfnhEQPv1pjVyEuCynJhpe9",
  "key18": "5JSpGzGiFmJhgpiuzKSHhetWNmVfXGZtNhCyJA6TZtSdizM7HphepS4t8nfhBJHZ1TJihhMb2JJ8eZrsnTaqT3Cj",
  "key19": "2TyAwuaYi1zUYUKvKifMX5cyvW1UK5TVFrtkv7gBAMEajfKyQckPaCE2sPvTACzSmLh6zV7mafL3noDa1UW6Uo2B",
  "key20": "46yATrfuRhnCBY4V5BJJX6zzUD4iYSXFnbsQfcewKe7TN7crF1V2JtdNDr218WjcUsfguMVG12snjDnpFrNm4yZ9",
  "key21": "5MZFVPD5c6T5VCAMvnyLrxvLzrwWdAM8f5kkqcrx4kUbFQEvVqFidNz8cqSJRueH12oUcyHV5eoqNc4bRmY4NPZz",
  "key22": "32ozCtu6fpK1uCHTxhYwGMpf4q7Md99a2zh4HSxAG2Z3wceLDfo758ZJJVNRRwoQchEAhJpK7zg8HJs1TeEUcEYm",
  "key23": "LXPNS1nkGA71xeS24sc4vhfP1fsxcY6CQkj6zpUYo2Fe7RrmnFwyHAyNzV9fK3Pe7LU86MDhFLRzgjhLn4rBnWC",
  "key24": "5epTHBXyxfwiEbMsztwEujVAVtMvLvyAMdDrX2ABXsNqe5z4seNUsYLynoSb7XL6YL2q7ueWizFonP17c7F1VrKr",
  "key25": "2BDBXArvByqjnj1pSqbXzKsc5Z3QVa3xEDdZYT8NiTFd353Pm3z9zvWBivLxRFUsZ173LwbDue3a313QXk6AcnFD",
  "key26": "4HBxgUt7MNdk8JXP4nT56o5YYC4eeK9YFceUCbX5eJL55p76e6ewxHpJTSpuePeoMwhWEFFnLYmDFejfK5GD9Xcy",
  "key27": "49iRZxr5wEtnsWsgWbXCMAaijW43AcNjcQNWPQ1WCzbLutDJepbANTDJkPTbCcLsUn9b3rbEifZ6t3v9ez2gUrrq",
  "key28": "DT8FgEe6Voc1WkTkSUwj6nRccsFKCYxkUAZ3N8LBYe9CjCpnzMc51gq9yXcM4Z752uGfLQfy6GBChWC1yLLHZn5",
  "key29": "3iZLCkkTJ5udc8p6GYkHknqmsXA3qpBw1Eoa8k6FqrjoJvChF67pmKBh7XFJTgzFnfwZBKaN5tLUczV72PwpGiz6",
  "key30": "9yTCQe3EGMHRB9p34XKPPpQrt2st3sjT8PSt1QeQgvCSuwQbbT7gAy8DTvCMBfqHzLW4LTfWQeduK5mjuo35X7x",
  "key31": "44XwxWmi4drZ3knCNqiAYAgPSn3i3P6i28wtiMmsMZERG6hHho87bgTcsA3BEzCy6vEcFhkGuVP9F4N2P6nNJNuE",
  "key32": "3eWzmrcxV31Lnn5XGjv3jQxY93Yg31AZopfns8nHctrDFaVwvgueQuUpM8zHv4FURbSRzRtZu8H7kpoYtJyVeRiP",
  "key33": "ss8Tgyqdp2WqZrzEXoQ4hFkkAKcoohBRgv3qGsYNaiU7XgyThubevZcgjtuWBUFkURKubnTDLh7QCzU2yEVSYF7",
  "key34": "45M62kFwdBVWCQxSjBUhmLcTa2n2zVYmnV6dv9d59nmzKkWPXSbPvHDWjPH6C6gUuGPGsYSjsodiMfjiJiVoJs5f",
  "key35": "3DMjtqxcEz5tQBdXFHGZpbhvaVNCDdPv7jUXstnNTuxFfbR2vuznntbatYCMU4ZKMqevKrvnbuaF9JMAtdj9HGv4",
  "key36": "4SS7zCmrfgEeC1gcRqVht5oVHe5xDvAA8wc3u5fbcm4C5jDScEQgXcp58xPN63Xg2PCPqCF9cPMMvJ7zAkGcP2Zp",
  "key37": "34DMeePvrFAL1wfEk6JSSpseqdhzch7MdWydjk69J7c8fLnuqFW9sEQZFRDY8udRvEf7XJqZRPSTozMfWyJHVjLQ",
  "key38": "DEdj2UFiq6BLhB5EipfChHsjMcmGKfGav6f9BSsTLEcCtxZns1ztW6kLm73ewGTaFRjgPiXJ7zDF5MAMvLj7ARj",
  "key39": "3FACnV3YZfWaBUgU5Tk1uqnruEJFakVNgiyM7sQYs969GNvL8JvvmN8au1gsob7QPSdnQuHoPSj7pN5zr6AWV3iz",
  "key40": "4TmAHc55KkA6N5pKp6LczEWB5oghuhzb1yLE8FCc9Tsqp33hdLAmu3DYv6q1odbqoUE6Y3fXQ3AvkbTAT3NNT45a",
  "key41": "5JceAy3gpE5LLZBhea3fsasUd4bqoDoSBfKziiy8kc8JyopkR2QY4DKgBLaHDuHcATidu7BZRfsbkYXNMzWdkazc",
  "key42": "4TeW64F1ip32senNpnD6oALUHH62BLe5AQ9L3d6CiLKSadVfJ868C46FmwxCNKpXoM7fh1ctGd58ytb5d4uBh7Ty",
  "key43": "Ui7stXxxPvFk5zZaAiHXyWpoUWWGUHLWTieNqTzt1Vp6jFvmauNgLW7RzFcDnGYdWokEES7ZsCBZHdbFUn4k7DT",
  "key44": "uo7VzjXDnd7gGfKHxHY6szxuBPzhWS2ujRsr542n6RMXb6ysGwEx585VvRRnbnLF7iYDPxENdBx9rotRtQmwESb",
  "key45": "3DqwiZJsvy1WL442FnvcecPsYMaE743VNK1D2cYsjkEURsHruKngQbzSNu7iJS3mK7R73eJwuztL4VLNemgEpSW7"
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
