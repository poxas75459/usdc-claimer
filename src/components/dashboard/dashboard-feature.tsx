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
    "2RpKWKq37roPE8onv6FwppGV7kHUC9Miq6dBdw9CQoyJ9Mi9NA2kraccaDmyW5kGdwETE3P44ehJpRZ9LQob5LTS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AHyEVsstSgcEFbGkG5xuA417VS2kCESZesx9nG9ZKZZALPeqky1ZM8SkUT2iR4J1KYY3Au8DJbsiWPdNukVzCcG",
  "key1": "5M2yUXFezykY2RefgcWPeX71ajF5eX9XPxnGBDvf9WtAauEX6wdvJKU2wDpTidb4L4onr6rZ3FNwvJNTPaKrhFJw",
  "key2": "oB9iRzvTThFu3pWxJv88LoB8pNpbAYyssT2K8ZrzfV5fGw6mwEEUcgVxppP4u5tEbHm5NRRPvt7k1XwRxy73uUm",
  "key3": "2yFj1CCAr9rHdUcW4dCPHu8nfa6S64VBcqEC2sc5UX9gEmwQLCbfn3QarLBsy3MEGa64CY7K7VbNtjSd3EB8BKwm",
  "key4": "5noZSa6J2Xjys38DrgxwmCeyXzYVzyqdx8yafZeZEVyjj7fFuFNSy8YGoFyo3eRDwioWH9xyKncHD1r5URRoQfnL",
  "key5": "4yr94YqGMHgCpfX21RsPGBxirGuHceyFeWpkXk3tquP3pvZmMAk3xFKESGeMh6tadh5o8GUP1rmjZX6HkUXkgFP1",
  "key6": "3UGhiLAd9s5EqxLmvzckjLDGerKDsmAczdRUmHyy39yn9KAEExp1Xyh8CF3hgGbyguYRUDBacJpp27MWqbwxwanh",
  "key7": "2Zm4jhvYZfjnzXFVv2Pw2E6p45zx8ionS2fEcQG4dcEab9y4SXbuRHXZWpA1AdGDdpMWbQ4uK7zebfz5R3akxNTc",
  "key8": "4DYzdS8yuke4HDE332YkFaqPgUUovYbvg2e1yyK3afwwdRSvKrW6gm9tX7T1SmK77h6AsHAiroHWu496HBt3V3eC",
  "key9": "33fRH3AQfTQ3QPEHfCyNexi6wb33TjD5x5kSAs5BsXpmbuauH1BKeLcSB9h5aRo8ZLJR8ya6fYJHsWvjq9mb8iWu",
  "key10": "qJGt8sz9KtdqrLVr9NnnH6i5DsG24i6LqTB4qSbdket3Y4gPgTtESe7o9J2KMUyw7EAhKqipmQXsL1qbHGh31oT",
  "key11": "4tZPJ2JY12ktUYXoBfEvDAQD1Z42xWq1VSC7CzJLsSLQvGsB9fb7SEev1fQfoZoBsLwFYTwuGSRtHCAxTfiXXt9V",
  "key12": "2TPPiFggDvZ69G2X7mz9ZKNDx6HibAKinyNtcDkyPkDaEugBr2WDwAKoan7wUu9oDsAXHneDHZeSr4Q7TuEd6UqZ",
  "key13": "2egdhaZULaRcwk2aFMZgRUnfwtMYB9x5FAAJXvbRZbD69kek1SUgCB2i8fXdJei1WVjSFDVJAspNchUb37xofciE",
  "key14": "nyNb1pNL5tbxAPJvcTydHPUqCpmXdmPnnvxvR4L3fbWhGaJRjhPPbH7a6wQa26DkRvBti89mDTw6dUm7uhaWBU4",
  "key15": "4JcSeJJBLTyzkKFwdgwnDL32zq4bcidbtXmp2aZfa3RBSS976VTKdTgaaiZoYYBCJjoD4c5ViL3T2RfwomxrWCfn",
  "key16": "49tVgeqFXpLfXkh1ThXubyqftwPsfTiM5tfbEfxSHfzhECiEa3BjPPhRcstwJt6j8KA8cLVJUHGQVAaiMDqFgrs8",
  "key17": "htZ2ZSqHTrSQ3D59ekTbAXKPmjeNQqq44Pkj2CXBFdH76R5vdvd2qpDpNoLPE5U6CeAr3EijcfEPr4Tzx5aHfdE",
  "key18": "67PGoRo1qRGgvVPRXGyzMXFy3Ysxn23NmUZZQWpQ9sxd8vtCRqLeJ5W6P3CQsEYGvLzXH7AJNE3kxE5iKtYzaLo8",
  "key19": "26QXZT8w6mDTpZuwd1QcjxsajJDTqRy64KB1oMJbs4yHjBtDH3zyr8oep2vvjnp3JHWBzLyBygm2bXcjqCJHboCo",
  "key20": "xoDu3hRwX7AFNHf47xBBHqJeo9t1EbxXtzNxjMeY3hiG95APiX3RFhGMjfuAxnKSqFbDnCDRgpAXzxqcjQLA36D",
  "key21": "5P5Ve8gVmmNRUbB9wDoYXPJjJ6VYC5iHJ6hPmJ2h1fEB6exhw6Vy5XEwvF3rYjH8hjQsNWEf9KLpvMukumkaWbdV",
  "key22": "311EprkrfuQT91noxBPntUbRf5dWTvXMCFCcfZ2uq4YvFDbyJPdYeam4M5cz48KtQzRa93SC3MM9HaD37vtiRPqY",
  "key23": "5yTem5sLMRsQSGQGsYugZVZ4SSqstsdoRRDnP88NmZU74nWTM55YsaqaCg2jBxYvxhvZDK6y6Nna4gTTHUzbcWSY",
  "key24": "5k5rd1bLrkBrVd5xps4ne8pzVYzNyqWnxet2f2eKut6aEKq6bijT11KG8KY2aauNsttDgcMCndsrwm1akuSPAXzz",
  "key25": "5YhRoSfxkHS83SmytU4ZBRC9P6NroEEQcS5f8m7s7wQov8j2YHUUetHykP1u6VNzEWSnhDp1oahYZire8tL6aMFb",
  "key26": "qZUbymKEZpdgSvGSV6cHaK8cDGQd4AFVytuxPyjcr3AK3LtiQ4BhtJ6KE5eaj1eaEUWkRfJYpbH5GLTPBNSC1Z5",
  "key27": "5wniEgkNcytPCp7drxhqpvL8nQeanWYdLsKD5xH5hqkerxCzAFJPuMuoWtBejQEPxJ1H1e6gaEMEak4y8X1n7VRY",
  "key28": "2EDg4gR4dhZERk4kLzecK2eScyLXqGhpCZZ7xi5G7VMFDUaGviRgw9aY6rhQfhRsLb7PqikHsAetKe3xTSu3qKx2",
  "key29": "61d2A6Ysy22Ry646YXQA9bSJX28eHjsNiRZZuBuvitLsGo67ap825PP95ontNBbJ5ZNjRJYJ3rYCJP1AWa7iNcDP"
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
