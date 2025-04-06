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
    "4ZCtaq2NNHKpehCtuSVCU6jKR3EXDkJQeEQ1xcQpar2VAxX4Hk8oxuTMmHWwMNvu6dZmiDoc74mZTLydD1XUy5p8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BJuK7sn4r9be5cCAJMEt9QkP7uxi5JXc83AnEZWLNBLuMAghWwu7cefYgtqaXRDV7zjcBLuoVeA2ijEBT8yRciC",
  "key1": "sRYgPxC5gEpDpuSns9pf53s8CKNTfzYuCBhFqW6Jw4WSPQHcqupUUejQejgY9z9wH42SErTEgUihWyvRatY9vPw",
  "key2": "heaTDrLjHuXtaDLE4XoWdpX26bXVqgtSZgrCb7Nr7MWvMfc7AfRnLBLC1vSffuV9aRqrKtuQDZbgByhHcbBAZhV",
  "key3": "3g9vsC5Fnd9ePMh9wgrqkVx5xEkwaE677LzJx8CKsPjVESTGJqMceKYafuRdd4c5B7RTpFRvPbt7zSdXvehDzsxv",
  "key4": "i8C2ntHFamheEjYqBkLrCCSVNzYVgRFwXj9hdpgz43ZUNTSpokF4XQYdZeNuWvoKriE93FwBfxntyvsy62Kjf5S",
  "key5": "3Vhs7vgqV7cZdEDea9RqYVgbKXaERt5adbuajQ8t5Jt2H6uMxzF4f2xpE2TN88aKgGzRnQPrKX38BNZYJDeUxHt2",
  "key6": "5kYm5wi64xisJApnPeBWcG7GQ2Znk91Ebsnbs9qzAuVu3ZtY6HtrzmL81U4eX3hDjwYzdwiJ53B5KwRJgcjJH6Jk",
  "key7": "4FAWYe3647PzYEuqPoi848AY8UCs46xeBhrcPfF2W5WDCvJ6awXsuYxGfu4YwihvFSqmng12ZpKAT8BuZmZtZDwA",
  "key8": "46ksQwHsEgjiuQLUGf3QZa17rqqSnLToHPHbbWpE5xGLXVWyxgxiLoTA5hYrjBsUZuwiNYhrdJgYmYN6DH9si8v6",
  "key9": "4efKDx7xc6ppVtDVHsX9MVc3P3G9j8PDKs3FPrPGqnugDRojijttqXhWHQqf1QxQfyWFozxar4TfAzPyQqX7FwkT",
  "key10": "3hGSvMjjGwQghqNPj5aS1DDNCnURGosaazb7n1eGXC6YBT3KG8Ut4nuZ9Bv8Sga179mp1NrH6MBxEPirR3X1qsT5",
  "key11": "5y6fAJgCwQCpdu4b5PoU4w2PeeaJuApHwCBkemqDMQQxzwbZAjpJ1PXpXWDJtKxFpghBc7Jzea8u6W3d8L9jFxTf",
  "key12": "2LMbVDiVbwXXFEdxbqBMNEkFS8rNVRTauUyx8zmSoj6oa9wnqPdWh9RkxJA6hQwrtrbpzxDKyThPBS3EYmQDGFPW",
  "key13": "21uYUmhK8kTDE7AijoQJf1nAAjpiWE1SBQHXUafYpm1knv4L9duye7bK5tJtZywwoaYxcA3XYi6Ffc9SjSaJka8K",
  "key14": "4NEKdTfhErnTPJKZVG7T5aeYRof8xaQyaknhxgVxK1RoB17aSn4onYgMUForhJQpXHkkqrTgG96rXiJVc9JBgxDN",
  "key15": "4kvzLHjwk5G3z4RAvw4ZfcHdBnmp5XvqMFmEKgyu3BBjJi7GetSSWtANtZrDiBiMWsPsKAGeoFTA897uvwXt31C3",
  "key16": "5gu9F2qRVkc7ATrUq2mRhrkwED7qVX45t1h8AtpYPAz2Ss7puqUQSenAc6BmjTd5KsQRabFvfgWB2BzcV2JSm632",
  "key17": "2dShMmqJQ84LVM5z8j6tGFnnKkMZ9n2Y5fBZfs6Gvc5AfG1FmW9jqX4rocZACXKeifi7arPakm1HaXvyfPjPU7RC",
  "key18": "21LY3t9BNEofNCx3EfwBXZPmuMsAm2NiCUeTJp4PQGiN74iVbLEZD3hgBgpAYtaDiwoVyq7dFCmCTKUKDpUaaGwg",
  "key19": "2HXpz51ikBck8wJLPM2AnYGQpapV6qkxPZyyvT2mbZ9XBQS4tnM8CPjoMCkMkhB1UFP3eBSUAUAz5BoKB1E3kHTT",
  "key20": "3fW2p24BEbRdCy77ZytNPE6vGRtyd7ghXPpXg7gbSVFMmNKxVjQgtNuJLGyp3xHypouRrjy5T2aZeoiK1GENheqx",
  "key21": "2kaNfTSiC2PcjsK4ifwDydpJjDgEJfjNmvGgcHMt3QbquRQHkmrCkVtLo4nmQBxX5xm3Tpm6BFY5JqXt7h71GAVz",
  "key22": "4ghFL1TVvBCb2tHo7PKLkbzo6CdoAYr6zQeh41ErXXrWRPqRXtju3GmjJ6toCpC2EGb8cb6eTEWqJvPHpVJcUTPK",
  "key23": "7gLurQ8WKaWRg4gwsuijbY567qm4FTyxfhv2tjF2oEMWGut4vBR8z3JixH6L9AZvZK3AbNF9oMyVvoKdwUDrQQa",
  "key24": "2mC1DHx3dp5DGdA3VHB5nbCj18kxujEwEX4MNT3SDhsDQtygPhATuyNFKa8m3p7ME2BUreuPpsjCQ8FrZv7QAcJL",
  "key25": "3fJnx8WD9FLmNskgdpAQfhqHrKb3MLdqXJjzAEpyq1i6EBWnnQvjQ47xitcu2wvxdjrH67FmWbLkKxvDJNH3TwvH",
  "key26": "NLqN2j8VjE4PCUZDhnFR2XZ5ESHrt8CiHRv1cYLX2HsHVQUnFh7vCjJ93GH9ipCoZ2y37sh62U2Tcj2geFySrPD",
  "key27": "22AR7QPjezWPeeWFw4dmdZKLReGBmjfLPrZbvsRg9pWTRhF1HYPJK9ZaDkMuP9Saq8yLoFXNPy4RDBz48V3PuaUN",
  "key28": "42KMZuyJ7Dqdb3kTcpT17pQzd8VY4T9kBwF1tUZV8u9s1fRBCyxg7GYPhTx4W8H9A7iKCWrs9WiRL3ogc5tQMo2Y",
  "key29": "3eg9JVdP8CRx5BTKiRkEjWUDgYy3gNGgM8JGPsQYPgocE312eBy8ckwSkwA9g8J4oaKUZvuMGmo7dm7ajV4BgxaE",
  "key30": "39xc17Gc74sZb86woi8EDfQxjDi1v9Uv9utmVmDb2WdKNpzXc2k4x7zvFP2zjpRN5AKp86jFNhPBXzaxAQRB9etb",
  "key31": "5DQCVW1u9ckAVv1UEBo4DNAERNrMJwYg6A3GAyC4E8RX2zNy8dEmi4mebXdTnzc32V92UcV6hKA4CgRSYh5ubj8X",
  "key32": "4QfAvuEW1MRDWt7iPntrx43n7fx6sCbSVfxeXgdeRN2bsHzLe2oPVW2NLi2ZrpZNVYXu4kXS7EFVi9ZgTzF9Ypcc",
  "key33": "5EqbzpJwjqdWKS4HPpeXMvLd7W1j77ShD6YvD2LpdmoTay69kps6s83V6GjX7ymggy8d7ZsXuxpi8zk5iTZg9a67",
  "key34": "3c3RoU9GUfvKpa9C3V4RjUUi6ctW6VNcZsujvBq6dLWCeSGmTrbCEuRM9GEDhgZkQQG3D3Qd6sTKWQ4k8SnWeCzK",
  "key35": "5pgfh4LPCDEhiot5E4kjcNECiJJMHxRerPBjKFxWBv2uHryXX7zC9Gwi8S46TUPh3zKXwEovxXsmkiEqQcPfd9vk",
  "key36": "5pvEnjoYoHVypxbr9mmgEJK3xcCZkrCA88jbKf3KPp8xV6gfz76xYm2t9UvYCZMf9mZpANCSfehY1uVZLsHou7qi",
  "key37": "61qWZwAfBtVu3hDuvcGF6ki9DoX4hoGK5vhtkiRNzHLKFRkr4gZrAVaXgwUYFuh5p5npi4AgssvXujrAQxeCa9pU",
  "key38": "3VxB1WNRqGEEumz3xTAcHATsBRV144neDWEVX33eFQMGa4D8Vf6ePwQgdHbNQTaTQczkCzCEpvSPPf55j223yBK8",
  "key39": "jzeuA6ULcJNfRr7iiVVvM38YFgsAgYKZiNtf658b7SrGrCe9e3fffCkK9RkUTG3sRdEPfj8Z2jpGqvdeA1ie1T4",
  "key40": "3jDTL8QqrgDkFEakbNyJJtcuUPr5yLUY9Mwo5v9okJng48VPDGPmQ4r2M13gt1DNFg1ZGoEKPoi8P9b4Q2NcsxqM",
  "key41": "rAwW81wUYB3664dASyuPKBgqs4wkw9FEVrn5BPFH7GrS1M6qprbh9wq8oEpoCzmgqwXgnBL8PFs9puHty78VDx6",
  "key42": "5WaqtJkb78qStPeo5rECuidxaWM1bjZjkPgQdzGpib3kmCHkYwfsnxnEn3yiggsmEtgcR7XW9g2jLYg3gNJH29mN"
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
