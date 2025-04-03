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
    "5xkJL3uEDwqsJjRrVaukCxYSWCXFaPKebdYY28masGhBXtoEfeX6yLStaH5bB8gmiDE5n7pa67Km57WQWxK9v5Sr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bWjkm2uSz7w4am7iM5ovCbeSEShpFY25u5Q5QttYtbijz26edaGPxTZ32Qrfxu2o1cQmvVcatGi6DrzbFJKZjVz",
  "key1": "591vLMENN4RVLsQAjotuw51eyQur6rkdWeDxggXV16t8bpXH66uEmXmi2KgbjP9FPeiuocJ72LTXwZ7r9Vr3y2w3",
  "key2": "3z6UpXUbS1DgiFSSifwFgpaaGakL21pRYjJW57rjWdkbecApVn8qXY1ofzi3o2nBzTmbpQCZfAhtU2qTu6sMCF6z",
  "key3": "4pBkKhYfU9yRefHv59eQoXzEnk9PGE2mSQQGYYjMU81VoV1Gugu7zUpVcL6WH9mv8NuzEowmkDQk9urbh1ke8d2v",
  "key4": "2RSH4xJpeR4DGy48jnwaCxZ6CQKd1EMo6hXUPH1baG1ztV6EFEiK27KzcV8UgTzcfEsapXvXubn39mQskGf54GMN",
  "key5": "2Jzt8RBZ65fBhRRbSCsJKQXHasyAtXmRJPiANt8XyMwtXpBdn8ZYaft7cPCVESpux4uYWRbfNBQxubyb9d9ALkgv",
  "key6": "4ePrsRz62SEndHnfr6Fue1y7y2QcEm2cHVQwEfrg7QSiLLha9yJb1xv21oGhz74uBtJM8XYSxn2un4qk4igdaebr",
  "key7": "32wDy11tiCHZa42TatNxmNYqvQHeu7Bu9M6fRLAwTTd84nVWnm4nez3GJ7ZhxvzPWZANaSjLv5Xoq7wFmx4tkDg4",
  "key8": "3LaiJ4YhQ4PMKmq4sfCRiNYuyyBhHaJh1B8dRTE6gdYgfa532mXuWq4C7yNt8EFGAYJ2sjUkn2Em3NsUskVp8xLd",
  "key9": "3GstohCpAmE4f3AKBHUr2u8gi2vPaBpxPNyxWiAwkSeEnE4QtFebcsfzVwyttRRX6xWZB672KQqCmxZyUWqatwY3",
  "key10": "3637otxvBr8FvhUYhjXX6i8wC3YC8DRnCMusNtevwb82YMFc2jDSZMdMAqDMpk3PbjPuGvGxXxweUPchrGAXFNPP",
  "key11": "4pbuyxvEowy7mden9Pf8vjPhCkwXARsMUWGAtMU9NdKGN8fRzwxf9GcLveWJEicUbcG19Mqv4RHL9qoHDjJLeVXi",
  "key12": "2cxijmrEKNJshzof5ohSKN8yK9e3ZvCndU844ScDX7KEJYKowCDrU9qXHDVy2KBGbjFaoFiLhGtZQcSnZF3SVcHP",
  "key13": "4ryLfWzQDj7SGXAug2Qpx4KYm1VNVuUSNPrURbbWwLABYtEXEreq5VkCyeoxe9ityyo7pRa4jjmY956aq8BB5Ysd",
  "key14": "5zt4wn7wfsjHbbwVMPJCKLCcC2SSdBUSbshQbf2M1oFp8TZSeXaiHTQgnxkcjneKmX8LerGYCEhfz5GLheuppMs1",
  "key15": "4PJCu4X5rDqL3qSozbL8sy9Zj8uHFwJjs73MXB1AA2JrbPZmsdBhH9iCTWW56GhzPk9XiECF6rsBjDQju3p6tr7o",
  "key16": "25bLJVHMjrf8Vdzqr2fT54YG6DjcLMxBJKSreQbzv1bM7vbD7MihrcNcg59h36d4cbpvo2C7e9k54wRax7ZfJSeR",
  "key17": "4RLGfj8QjAkBpDN6wEAAgu9xf6PvBT7o9ru318GX8iut4CKd7sPYbQvSeXZnmVyRRM2Nk5DXtu5RZjgVWTYr4pBS",
  "key18": "4sFVcz6XdsYpLGsGSzLot8t3vUaqf8wScr5hv5DtcUzaazL6ppTHM4rv9cjfiy9ozutkt5W7ZCDkC9f77piPR6Cc",
  "key19": "54orrmWPkmjz5xm6TKg55pKc3thuMGJueMhphAyrCFTePqzSXHd91DBrH8s8wSt6YzvPqMrtAkFkEe92kW1z71WX",
  "key20": "cXWa3ervWqwT39LHFS4LKJmEkXdYDdM5mZLp6UPMpUXNufB1JHp652vUtLDDs5epbe2MkGjiF2p7hSqGZomAGhW",
  "key21": "2Sb3igiiBjBCFfpExieD8PW1FGxbLufnLMU3hssWZ39jSvrTYPXjXczoa3Y3sZToT1UHyWmK6AbAxTFwvoutNjeC",
  "key22": "5WhiUUnWLy3onAunrYZyM7BH9c1yLxLHYhNgZ4g765NBRS9T2r5KcmqhJU2iwvYZ6vSg2aMvcDd3CNrxLupYUpUX",
  "key23": "fxfnPbE6o6SAvH3uVsBSjZ7MkaGGgRcvExBNbxYRKf7DUPdhSazsSYddGFGoDSesomibkcPT8fjTYm1EHBEispT",
  "key24": "2pEznP6ZQ6gafUzDBmqYnfi7ryqMvD6vfzLLejVZeZtMXFd6zTrJJmnziZKPhZqLDXC7FDYzUWgbnnws7SASnZv",
  "key25": "35sJ6xYqZ4YeZNitQ3mhoHb2DwRDramTv4yADnQUXfYwLXKmn5JUUr7ViB4GptZBX3aXv5rC7TF6MSWK7dwVZUj6",
  "key26": "4xm3KyfKHDdsLGwUK2fq6njFBVH63PQv7MdrQUfFV33o4pzhfCtqPcpQcJ7BzGxKpiSxXJ9uk6zJbJWREzafj9y4",
  "key27": "UbWbP1dvLtzBmc1UFSR8AvSCSiWRXv8CVp1k1MLq856WfMGJHhwDCsPLysTnESgxmPKUc4irq4Qwoy9iss9iuTu",
  "key28": "2mJGgbMxqvavKRz6TwFiEYLYPn6GRQZ2YuJnGvct9gGbYJnmwYfB7vGXybyFAFvMp19e8M7yhqePXgEawz84x7p8",
  "key29": "3LsbYp7a24ZNgTANbymb8sox2ogoTwXKj2xYdiZyPae8yS13MBt7PiQk8dhbSWDnyqtCh9GYLGDyTRq3R1zEEhSX",
  "key30": "2Eq5WEMteiYxZsYf3bKBed7NpkGJYRk19tVQWHCm4fCDTVvsgPWTY8m88C9h2T2mSxyS83L26cnsRQt1ajxhcc7y",
  "key31": "2ynGAjcGHNaapUpRZS3d95GtczKFTe5YhHMSDbEurRRXrcdKKf2ZEioLJFvefQxErVZuFePcQLUushMZ9V6FQ6r1",
  "key32": "Ew2GL3upM6ARDPaHeNggzHBG19RAbqDEdTVNE7dcgpbvDJjscfcMc4bFPw9xpWESeLmCJaZGY38eX92qE6ZFTsi",
  "key33": "3rCqhmpFYwTPcPpNTAs2mWWR1vWn27FdeQURdRTogBRCDZM4gQSuqAbfhF1yFdB1qGrCjhyb4tcP8weWeMSyd9we",
  "key34": "4NL3wSTq23byFBDcxYzC4PnfmpPXpG45EJaxBBnx1TiVNLDLx5RCsiceM5MBGcGENNYm5WPyESQo6kBpd4USwh4k",
  "key35": "xsT2qvU3hdBrRu1KfYtXDZGgLdwfguvM2tBQeLQLe1sYgqumbPxidQG1xCoGfqZe2x7tPs71aYWFb83mff5Sosr"
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
