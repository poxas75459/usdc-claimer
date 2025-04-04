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
    "QsTNP3xgfSZrPKUR5uKicQP6n6dd4CMga7hDxop6urXSUg1KEdsixtP6NYwd6AbsYPJDeLocf16LbP4KTAK6SKh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VcvGFudLjoSJnBj1Ku2dh7zm7x4gK1FtyA6e7c6nVE24uWjHr51zt4Cku9gpKKDLqSqdmqQXd6xG8XcrzFy9dX7",
  "key1": "3wPdG9DZWGFPNG61cJCFRLspiF26fasrTcDTwsRW7jYcFAGBQZXJwrB5b2Zbdrg1h3DPMUEm6PsoKqoBovMzVhxk",
  "key2": "3jegqGzFkdeDVpRWB2mFtTViiD28fkmEAGjJfgqfFXUgVYV3JdvALL85eoMHwQcz5NV2zecFx2LE7fmN31KWRstk",
  "key3": "3DC8Sf4LjRt8EnBh5ZjBAGvZXbFh2pEXtqRWfTP6M6bJe7C1aAaewJ9Z13weXgEtoD1G9nqfE1XHstoqauBEshtp",
  "key4": "5oZtkgPWBBqy4SoKUuS74t9ohq3hZzzJH9QNvvkPapnioZAyM3mg9R8EZ7gqG1hZMnELGXgHuLVYcHzFbBPsnN9F",
  "key5": "5wrArJ71ND8vuPdBtTxKbjoazhgDchwzFoFBCxqKb6SC7QWHPSHeuwAyPLEwM6gbm3KBJJAvd3hvMy11e9bXf24Z",
  "key6": "8GeDNQZksQqwNmJFo5VQTVLwvGX3qN2BuDFTXr6CZLEj6KnEnQ7gNzDFvtBVPx8ZByE8UDDUccoP1D1c7ACuHeE",
  "key7": "5MQjWVQmpAvHaUSXk9LSne2EUJyBU8tthEk31fVSWymnr9sNTbEQmPViRv4y7RkioMk929GEHX6kefJhpb5mxEzL",
  "key8": "LZktP85QaFAVxiAhHGiXRzJnHqsXYkTJDpL7Ui9aQsvNm7UwW1kQXp7zejrRiku6UeXeFGswmx8D5DN9xt3ia6J",
  "key9": "5gpzYbdb1mQma7RyBfpnYodbuTkzq79UxD6ScKKgzD29PcYBoAQ14vnWMcdWphTtprYNRBQJ3nd27Mu4MzVLGv3m",
  "key10": "43eW87e6WRjtfqKECEuKKh3QZ7ScVW1z4rXxDJoxZaLmE5JB9T59TvhS1VtQdBGSBTRDcaVoetSuxA8xMrZS2T4",
  "key11": "35aeQdCpie9TE93RH3UhNoXod56dF1kQfxN6PujD1kHjkmgqX1txtsQ1ydRngAkkYErUm62EqpSjdVRFJ1krLYyC",
  "key12": "5B1eDydb6cjT3YDMeK9z76jjcHsvPh8taaeJLjhdH2EyH6DFSx6fSqMSDbzhASDpyR6cNvdnqTiZ5xAZE2pFHjPe",
  "key13": "2UQkJec1keTaVNDmq88Xcf3ujDFsS3NT7hc8zWKvRF8t9phppB26e8VPagfDtuktuxavHttEik2g127gssn91ASr",
  "key14": "2St4CzVYxAebjUAdTum7YpXv2uAKXJQuGCJmuC1uqB1hwR3dLHkCFVDCj2NGd6vrehdx2uUuANTXKDQ8r5uxV1oz",
  "key15": "2AFViYunoAG1hy2qfTe7AKeU78AQQccPkeM4LE5xoqGkmrjXWKK4gL5SN5gNgFGngRY5pz8bhtcA7ge6QNHi8cSS",
  "key16": "5TZKxa9Bx4phRWuicG1W58pWfoFHmxXWn2RucBgNgJ8gtPx2cKLytM2kTwhJvqqwh3iwDaGo3cqUoucD8RhMEL5S",
  "key17": "2gszd53TY5K8GisnzGB57eMgptCbhBUpEh1PG9iExFUNomigNxmxa5ZjHPRaqvPUWJRtnCiXEztGqM9DC9iPjFN6",
  "key18": "2eTJSZubK1FrCJDW8j77kXoHiE7Dy2orfSDHxeyTrxzdthYBfDBJLS6dKRFFjKAcVNuUCame7tPREqHF9uuCXFaG",
  "key19": "5PYvbgs3rDFHmTg7SEJYcRiFSBXamVCuFAFD39hcioNJdKeWNchwTWvyvsUeHjcfxXCSsoJiwWT3DamWgGkyW3AY",
  "key20": "GoHw7DUqUwtH1kDZvbWPe2XcFtsrWFoGiqVnRMWvKstHZt3ySrMubGFJzsajjjQUjAbTvPSgfYfrJTmNmMEfCnA",
  "key21": "2ReZDD1ZouAwy2UNEW5eLYCBpdyNCYGnJAZRGSDQa5bHnHtnbP1QXRpumjyPzpGhDcSn2wKkxsUMYrKy28roSJF6",
  "key22": "3UcVRQPBj2xwjz1RNkiBbUXBFcoV9AZLrb27SqQNSGj9vfoBpWNjGyTkHf3YbhZ8d7EZ3jKuCQpLWa7KX4WK5A2c",
  "key23": "3ozVq6MH4ez5JfZhUSBSmHZQPbs9o1njDarFfKxVatdiVzmrK9insMD4gB7XW53SrvYQN85vrxQTP3K4Z8NUe9WB",
  "key24": "2LgxkaemwEHyWaxbWBSYBWJoDAUbD64QaNwbsCUqkNowvNw5WUPKiB9T2PXFQSrXN4GwFmMUCBi9Tv625X2PRDbK",
  "key25": "5Vhky48vLYA1F8ZEqopuXWuHKYPaTSpQ3bPyrNe8D1u5pv7fQ5AqZVZudtQg9YtjsfkGBu6b5KkxQix1jD5epLFs",
  "key26": "67HzAEBHFbtrXvqH5BH7CJeUFVCvukGKhZzxqigt1kn96uDQEgVq87hEMcctHM9k5eATbnVzdFaTDS767cmEeACm",
  "key27": "5TrsJkHpqSCDqqKwFufHfzYHgmG1QbFWEtXYQPLAZDoje1qvM39EUVvwe8D5Na1FF87rsXK7toyTeDH771meHe6N",
  "key28": "4y35pa6VJR74vA2YuvFCdwyPUAWjuJfA4d3c4H893CApzP7iXRGuFbdFHQJtYKRwnieisTrt7nRMc1aEF8hhpn4K",
  "key29": "kGZV4KfnouE1ZsmNsLDc5XFAYTLkDTZqiosDvhazfj2mkzex1539nf9ZsicQee6MaP6cRgkEPamCu3WUWsTjCT1",
  "key30": "3eUMRnbxXns1846s49UnxRCDUJjynKCvoHLrFp89cv7E3BfC4mGt57jmkYHQPTdoMzkcDS8GGdBmEi5dxnmiya1V",
  "key31": "3gqGgAas7ij2U4rE857iktcTGtPGzWrWP6UsXE2u1qDkJriv9xG4F3ND39W4dfXNiKHHEZiQL1wneufSDDGBefQW",
  "key32": "eGfyu8CFS2VyWntJvFmMnDm8cbrhDecQ5RvTJ3GrfJHjV9Gim13V8xauRnGzhaSdvuLM3nQfzzCNSnGbAyAad6c",
  "key33": "3z65ojstQJvHRhFrtZSHnvJqx2GVY2JJk6sbCQ6njAbRwVn1DpRrcva9e7QknqGhq2Jdz2KCp7qJPhkj1cPdxQjd",
  "key34": "5Cj7ytyNa5CCPsRgEbmJbjLnakfjMY3DEQWiJAB1TQ7Q6kXaG2Z1G2twQ83T2sUG9JdWKvyVFaEwUzp3HRoK9V2p",
  "key35": "bZ6VAk4Xs2PjnJqTkKxyy179YihaYbWDLXZtpqFVoERg6FeL1PUA3QYvKeehL4tpXqMf4aJfcbp5eZ6d7uTp5Cc",
  "key36": "4BPmk9ZxyuMbPbog5S7W9Do8jnTXKKRajUnX4XHECR5Ue1pB9yMkahonQB7gH3ooB5iRcqEHWFhKwuuNnV9TApMD",
  "key37": "3Dpn2PJ4iASRB7aogppp4dzfWCAt5gkdR7CLHLXABDW77xQpYPabtowMKajnSZL89Eu2ZfmcYXTGfjFrFEoZcb9w",
  "key38": "4rvmbSh91VgUzErA2sBWG3sG31HvVigLuB7QY6qKtduoCeJXQMZFQHLACG5gkVit7KiFJwkTNgk6UoLpQn6i7nbA",
  "key39": "2eE8JrBvZsESC46664vePFJHArcBfaePEF5KRGc241UzikkwyAZqgzwf2Eitx2AszjA2iCWA4CDhL4hqMNSioehh",
  "key40": "2RpTQzGUsadxNsrMMAzcthcW9kYmhYirYzpTjo9me4VExAqLLC2gkQcaaNnXqM8hp5BcnQTzxcQUvfvjdMchNKu8",
  "key41": "A3wrSXyGckq44SqHZcRah3NrRKNtxX7pf2PRwpbjRPoeiPVqQfomiFeQHgGsMjkUR7gcZ56wAzwK7JV49i8YdPD",
  "key42": "MQCrHNmp2BepYgStVSGeYjXJfgefcgQLpfoDtHJz3Xb5V9H7bgEn8kFmf3s2yrChqFFmy9uFtTohZG5yyLEqR3Q",
  "key43": "2L5t2zWwwDTt4rcVjMDzZcbPYHFCHLh6A8F75grdcfeCmjpSGPcYTKLi5tcJe1M3p3rWv5DYrzvy78WoK2cSgJK1",
  "key44": "5WWzQ3o8BRN5Sw1Af26VLLRxCyn81RUAZ4MRsLJXX9RNgdMSHuztvwBVtxshkSp75jDajTpnD18pySB8riGzrnfX",
  "key45": "3cMqZ1X9rsoracFJ8wNM1DaWUzM9V1hzjKQWMrpRFwRNrwZysNDNoxUPT73T5gza1p1Wi89UTVtphAA8RRkVHYuM",
  "key46": "M6Z1fYGCq7iS6Ugx8Zqg27FXc6PAdmSnbmVhnvSH5o2vKkdCMkVhbT3wrP6KuzBJ9GwbzZx3xtw3JSoPBgL8KWA",
  "key47": "h1expXzEhg4CjoH2UATuitCeEM7iwhHZwo6ccuCJSgDkyvEH3FWquQSimD7wLVsmSQRezeyb5ddR5ydNG7C8WNg",
  "key48": "34kws2ndnZX4A2AUFWohb8Y9xjemRBKvAYHk7aUwxoXD8MxkRaPAngE9AHzZ7mXudTfsGJ6rChuvb6DstSEbHtBZ",
  "key49": "5nNxB3pEB8HRz8truaXc8ZwGxnBGwwbPW55XQoZynPeBQQCDZLfx2a3bWw71GxmZrhZG956KVESV1ZxDi9pwYtUZ"
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
