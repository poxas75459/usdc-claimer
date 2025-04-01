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
    "3idVTYKtbhCknHz9nVQTgPYwB3vhF8NZcg7yGT3hv7sEHXLT6YcUMtUx1LMpM8pwsPVJ3bvpSDgbapqcefyZv7uc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56z2mJncrd8NQUCCSjKrhr3XD8ufZR8mmDmbZCPcEceVRR6CnU1BCDRvcH5X3U4uE5AmFbWLckimZvh8YmMZdAhC",
  "key1": "5AGozLc8Rpd55piQaaCwdfC3Xak16SNw8Sk2pEBjuZ2dTGNy626yKu2wLmzsCoVwnTPBnPsdiD5nkta7ZRr7d8EG",
  "key2": "3xA2G2yfRbSzz144zVgM36mtYvxgYzH7VmMi6b6zW758phyz94zjYDrZTtPgGQivijfeRBHCt97GFPT1YJeLcnD8",
  "key3": "46qWRdj3LNj4881YwFrY1TD3bkmkDTQ9uGxWkU6WpxUuqALcUZQxL8NzgyGUiY7pHHAhnXU2aaQ1TVczZJzyL75R",
  "key4": "3gDt4zXFLUPo2r8DZ69wikKPvebcg6ZbbEL2iFKjWqKPZaeg5U5c5Gw8M9pHb4P8pURuDot4yCc25EzDd9TVs6Hw",
  "key5": "4jiwwgM8QNKB9An4NiDhNwvHfSdxkvrdAmxrSZGdvP4QAmvHTX3NahNyuCDpr8ezVinNNaFhfNRFBpMh1DJYQrGP",
  "key6": "2G8LvHozrk6nfk2dyseDUXXn5R9USq6UeoZyJXSXNSma8DhiAi3nkxtQZm6JbbjxPcBnwXnV8goXuAazuXGq5Pvh",
  "key7": "PQ7H3UuKQNEnxpsjkw7gSY2ULMYY7X6ogc77oXitgXAFsLUF4Fc3s3S6zvwFydRR6SoK6sF9hrdZn9rCBgbW5dx",
  "key8": "4rXJChxXNRA93dFaopzev4xxuJgGS3wBDAkvMEtwgMmainFKm37oVgpc84T4xs3W1pCYrFkJ7DNqanD1xB2mC75P",
  "key9": "2mr6bmMta4XBMa4yXDLZ41JgSbg723CFT6bKB2U1d9CaNCTcKVKLa7VzAVqgBUHpU4g2zDkFwyanDtCnfCe3BQdL",
  "key10": "h3QeSZpxRJPQPdyqKZa1DuXpeBEMKFX2TUGMznw6u1yD9ryzTWqazs8drr8uojJCLz5sPPUzvyv96gGFdGgR4Z8",
  "key11": "37wNNjsovJgxUVsEwcbgMdovq1svwAvdGzNQDykdv9jeWmjPWrek9FddyQo74bXvXpwFgGoAyVSihWqTH9T98F1u",
  "key12": "QfGEokS2R5ozmu7FTykg1fMdZKqbgMDCPQ9j4818zurQFvJFtjsE8w8WViXEj5q2DYdF8wE35butxcXecBPZ221",
  "key13": "5gaaTRAjR9tVRpQggMEDLqssPTUanJu8HCT2zyXpZCiNknK1xeJ2H2mH9913pEJbAB3FdRgYEggxChckeeZUJZJQ",
  "key14": "i9kmTweMN4Zo1G68JNk7TES8muTyjPoMXwsSmoH2LhrUYPYiDeMNdbV1ZQUSbWFcmQb4L6aYzyQDprHrmGc5MTb",
  "key15": "WdyeX4EH7EHBiZd45eQDBbYrnryNrscyFvqph4es5UD6phY7iJ52iy68N9BujcmhW3ZyijxHAMJzVbvE4UAnkkQ",
  "key16": "54bJGKJUtQCTWdBYDPgTN44Gc8e49ijW1dLJGSHJH5ePo6iQxjZeKo69Cuf2cMSgETZnUiwhnfmaf8V1aYKuiVQn",
  "key17": "5j4cgFaGoBMfPm39TvT3seUSrfTM8Tzx2GF5KmKunsvFU8FJ49rKnZUPQxhbwNwhokYRPGMnvA3fijtt9t9R5KeL",
  "key18": "2cnner5rBqveX8ztLwqFrWAhqMiepxyKLcVRhr9ijDVXyJZYtLsLnCNpS7PGYPrVFYxb1tDmjLERHasPSYL8ZKbe",
  "key19": "3NfKYCSCcY39nejqmia1JtFCxiMq6CHAM4p79mSdLrvZ1HTCzX143WHYZHCzVp3uDpHktQTE7TfsysbSxmurwx1q",
  "key20": "2YGEv7uw3DNwZxQqDvuzhHxYNsyJ71Tz4EAtGYfqicRnfHKsFiQNn3ukgQPYtYETEX8NTorHD7cjmyJXASX2X9NM",
  "key21": "3yVQkJ9oG56zHWdxtP3iQPT1hpEcLA5gi4wtSAmDpEWakdEKcETzcEAdxKtXAKnZjXLGbuGz5ECSFBbnW12Ty16W",
  "key22": "2chDBiqtRUw21DRoypygnvdEYoVgRT1sAiGKyS8hCUWkqqef2xoHgsXb7WeKv8Lu8R2LUf1jCXRkHHxqKzRLivX6",
  "key23": "3NB7PtKiAF6KtGSTRG4P1VrtUkSHzFS3tkfFswPbrNJqt8VeSMi6GzRSnTMciHrpg4zgPT5XHfYyDmpp2CgecGKP",
  "key24": "2znpEm2Fe5J6ySF2cs4P5M2a2J5cC7cyvi8cehVin6mdUBmCsTMMTTnao7BsXwvTNFKq8BAG5h3u6Vf5eD2oKcR8",
  "key25": "FksCKzUpy4hgjFRQ2oHZ2RU2wXFs2GwusAWNsxXfuqdgodqQufPasL3c3srruBhcretnmEw61XdvzwL9maUyXE6",
  "key26": "bB5p3zccTSFZBZw9kXEreZNM5yDojibFMfwiSQ8fhvnSwPxNjaTrWJg2XesR32mYm5gcVHphwD4Y6F8rbHccg6N",
  "key27": "4NKQzgQgMZqCyiaSrzi3PNGvm5rohUMZjGpEmjyhfpXjwYoJq33sgFuqsFQ7AQJiDJXS7q5Jaa7FQata7FFEk8aD",
  "key28": "296uuFmyDtnvfep1sWTowEQbWK1rE6JQnY9nAXxGEDwRddLZrFKerepLwb2yVjxU1MASesbghNJGWG2h3pLPRZLV",
  "key29": "skphx3ZUoRYNgkZMxaC1viQPaK2SGkeyiTMvbWV84P5A5fYD7oDHia8sykfDuU4m1Sx9xoftxUtkoAkiyuvRgJs",
  "key30": "3rr9auzB68bv71zN4Q93dCYriY8rx3ArREWTzE326grgCc28Cq91JZXALs1DMcBT2Avd7k5ZzEbdPqZVBVTSuS9y",
  "key31": "5P1153ccU7Jp4wyP6RC2AkyDEtdwnidqDBdwYkhXLecp6zfYopFZotAVhBV8Tma6Fb9R75Rtbhp4HWDipEcuKEJ3",
  "key32": "53KyaiJs3LsmDADVveKuWvxTV6qLssfVrv9WnAPJBPR8rbwwngokpw2T5rAcVbNGNJxhk8797jJ5WdrSkNRLW4kw",
  "key33": "5DzE6MMrNKz8wP4FpC9vmV6uTMtHoGc8F138buNeQ5aHyTu8J8jY6whuxcKHz2x35H5kBx14bLoQu6nBtSzeAgDj",
  "key34": "4wTYPv2NzPYzdQSdU89LNAZrEFqNETpHsjGwBSjHnHPubJeb12eztjgsRYnwWjycPEpQUgh4ChbG7S6AX7Y7TMbn",
  "key35": "43oKqt2cM76oemgU11LA85xMQ4xUozPmEEq6N8hMmJUpwDTTZo2WNf3uesSASAD2d4TQjzgt9iJMjzSepZ4HnMrF",
  "key36": "2vih11W9bdVCHpWX2bW23WG4uJMjCF8CUhjHRcCkk7yXGvBTVvq4ZsSxs9GNBi9QbMU7VPVDP6tqvxksEd7SgXd7",
  "key37": "5kwtPM5fK7t4wVV4fzWxfweSKfumwA1LWCd8EYQtTRcwy9VLKJhUUrC4BcmnFiSUndzAqA6D3oLp8hiV6x7JQVQQ",
  "key38": "2j2Ce69jGeCQW53MJtma5d9DFXp2j2GRahYvmoj4HPfRzwAk41nLL4shDr4LR8MrhFZaLqB97m4sLGJ1Jyn9P5dM"
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
