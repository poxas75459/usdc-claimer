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
    "2Nxjzwwz5qUKTnnqbhN35Vo79nC47ucqW16CM5ZeAPcaStHB2hfJpH2pNE92FeSbqoktwJAcBZimrBG8gvpszCUJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YGva9UxEZkdQB9T2772oy21gjHi68Lo7A3Xmcs8X1QnQMYWGAXwwLgvQUmttEN72uTwVW6g27Y8dSv5rhF2FPEE",
  "key1": "5NWr3wuW8DgoiBqAjvbJdqpkEaxcgdYf9MZ1h1akTPknyKPADGywJQRRg8koHVML7AvHoHEbZ6tLGtDwSRTnwKFS",
  "key2": "BuyNpPqezWb1w7jaKhFMxG7gWepgmiGEnqqnWQeWeA6BQdAZwSDPb4Tehx32r694p2ixkFrfUdW9NA8RB7JRbpB",
  "key3": "5mi3MYfAjFDtFpuoE2WqX23VHkVQafL4QpzWH5AemDffa8HrukpXs47keqeyq1Rn2xXYxDscT2KZp7QqbwgHLK3H",
  "key4": "4j89DPM7zLpQikgAv8TiFZGAt5LaTWLFGS5moGZQTP5DLPqmLFzEF9W5vPt1eWVQSBMpEc1KsHsxKHPpiZ9aCr7d",
  "key5": "2NoudHZQb8ENtqRU9QogwcYLtoyYgEu2MkdQEjpHG6o6KXtxSno64GY9crhiBsnS5SSwesfE4EL3ohvMSX95PecM",
  "key6": "tt8mYKkg4hpgRKffRpgtGxdnfhHcHtATQcLogQVgBhG2LcgMhGgrkNnpQB5yHLGnro9tK8RZZgbYoCFvHV1jhVC",
  "key7": "hR4afy2ss6j3i7MdBAeoPxcCcRzaDeo3trdnwR7yVCJF7q6YVqfDEtBAcz47PyDkzbiK2Y7PMw9PvptKzraCYyX",
  "key8": "2TqfinhangywpDj2sCrwXCQABfv2Q2LycuGkCxLC8tFAUwfUPLXvpan5e3YCLCeGSpdzCE6C9N5YzANJpY5z7HXi",
  "key9": "3HThfkt2cnqtu9VfwthpZfUZa86HSz4Ru3xuo6WkReJB6P1FKYUuCpn3D74S4rJf2JFuqqWVqDA2GKe5WwnHobSX",
  "key10": "3mHwSgAJbi5sqRg9s9mi7uWM4T7NCX98h4pN32cJUfafLxj5HHSinAHGTFPS8cnetH97nkZWYwrRqbxiEPnzpf3k",
  "key11": "2k4x4Ez9iDWVtzmCqcqJjk1GmQ8yau28ViwqusraSJbgjHxronnoxPKA8Nwdp4ZkNAB3CcXHT3bwL8Zv4gKzFPzG",
  "key12": "fkfJ2gzxDP8LABbtLf9eTJRHeQ32ofDMR7FZTYWUyfkqLQt5aBZ7s5VZCeEva38ZNG6bihXbsbkL22R5mLVZuaf",
  "key13": "5ZKxvRZsnnUtApQYtkcBAWz4U1VxYYvkhWRUqoxkULoPVEVLddskk2s7Ya55PyKo5sMHRR3Ht3HcnsBscCaVQdq1",
  "key14": "2bS6QRJPbN8ajxE7c1skDR3wXMbacV77eaLC2EoTVghDxSz3pq9bQSXmVVtvxGUkaBtwVNd99N942Z3tYB6DWsXX",
  "key15": "3d6m7f75sRCrUnnoc55fsXMNYfkAUwr96cqHoETVDPvTZfDkMtYnpuFtWapcH6tG7g5ypwexxuKX9X1gaFnXw91X",
  "key16": "4XUFfZawi3fJTNhWTqTf7Z6BsMSY195H61W1puUh5q1p1w31wMshvjaqWR6wDop2mqgqJU7VMCwNSWwZx3aAF3Ee",
  "key17": "4KiNy9ZFktp7UrZF12dobvvVsstcewJ1KY83QQD3tys1TpfgutjrRm7ZbXUsbHPsGGgVdwdDd2yvXBR244mznEWw",
  "key18": "4UxqUhdjZayTFxU8Sy3yjbynnKC9DM9yzEE2LfSxqnT1iUzUt4tvnksCcjhzeJ2sAAYZ6dE7dEPowyADzxbw4FrY",
  "key19": "3x8FXZsUaDgPC4F4x3h4eMxtV7QvreswF2i21UdZVrLAuCoDdSZnwnc6Dbc9Jk4S42aFBLiKxippyKTD2L8tm9Hh",
  "key20": "2i1vpCMCR4pkQBERmSBVjg5ngNuw5BnUeJt8TGwxixqbmKigt9GPSd5qbEeQ6BSD29mzCJC3aBgEkAH5m7VQ9X3V",
  "key21": "3MidpFLotaUdVFw9onmU8uSsMbeM8XP9nDRFmSyUQanJyd3tBWCtnzWiWrmtwQrdY4d4eDNM8zJ7pD9sKVgK55kw",
  "key22": "28A6ohTRVfSwij3Y2YGmQk4RcJ8mjyeyEeFgJfo8tTFMnPLTuVHFzBRgxMJF154q5e4VApziLAkhNmE3Fo7NkrXH",
  "key23": "23Jphg4YPkEdzHNC5m9D33upuyaMuMkkAkMC2Cbv4UVYJMnUns4UbktZJsBgDamX3UnAaJCD4qnaAPJskDGQvKmk",
  "key24": "5UXizw4j6wfh5yhYxK5yHvbBj6kJ2MFKp5TmpReQHGkPrUQokGeMJBMGdMwZD3XA1a3ahHwnVz7NhgsupDCYrUv8",
  "key25": "3pM6h9SvzePzk3bFBi989Skc6GodmVfahrjnQHPvBFvvcLWhRxPdLv7nYv5uYu9uL1GS9T8ZGCJtWodSUuZVMymA",
  "key26": "4cDxW9VxKhKVYsHjaGCE8mWckkYC9TUGxTPFjjGE9T8E2nHVbGbghqh68ToCXWQ2aqTZw4JXeKtaCG3kZVLvsx9c",
  "key27": "2gZ4pcnQAxFVuH2A7DejcFJM6GaNpRQvPKZjquD7QNKTbkFCPR4Z8Z2tGYjKniWvpdnatziUFyfyXYN9xK2sbbn8",
  "key28": "5w1tVT8nZ6Gq9LgSfCMBr9z1XvwQYRuKn8UwoGfdu6qgoN1KSyofpBqR1ya184DAiPTP7p6jDNrguaqKJF1DzvmR",
  "key29": "5sXBomJr6Zui2GA64X55jFZMF5ozvVmxpoYGHDFXExuPsRXj5svXuRBPoeQqesXdt3Cpt9EhDiD9PJEVXmMqhoeh"
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
