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
    "4LtiVuPCPqMAvPUCd2pmSn1LgpGFDyyAfR3CE7A3M4cBtvQWbfKst7ATL3ggcYzkM2poUxJkb6mgD1uZnjkanYsZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RPha8xZGFRLS1vBrBCSYkL8XJhrN26AnhZkip7wP44ktmZBSaqNqMyotHwrQ5CtiZrDqYaVs67JWQEJyYgzTeEd",
  "key1": "5DVP5kLSv1177xo2ScNdQLxhQaivedB6ZTaC3ridewfsJe8E7cUmTfmWi3xn419teEwZxFeEiyhKxFK5Hg4ewaY9",
  "key2": "5tqd48b2BE7fQ4u58Xo3FEyP5Qy351V84Z5nYjF7Fx6EQKy6SxaEUXcegi2NeJxm3VNdZoJpL67D3HNPu3mHzpFQ",
  "key3": "2jxbyer55bWEakrPE7w9yftTmoCetDUQ38FFe9WPEtAn8diCp8EyN8TyVcLhtiVFoigq5A8sokP3hvBdyMDKX3rN",
  "key4": "2kec98Ct2TXWpKDKQjavy5YFbShECvtef3sC4xxKrcChxbx74PwJvkYCdHqdcvDVN2xBQhuzagdkSWLePBht7Hrp",
  "key5": "51ZAEQgW2D3t6TiGrcGMhN6XaiftHSR8CxiW494DQGhSrNHDdmzyeWftHh1VjS3224T3kSqX3UzQvwnAEZ72uYdX",
  "key6": "5HTWBMuosua9P2aGeC5K3Ae6F39aunCQjUbG8jPdcR217dm54K81WEJxDdjtiz74yFu9K7FfPGmzXXiD5mdtbY5K",
  "key7": "2WCMeM7kAikPU86jJGjC7ZiJBgCfa33bHqsvhc8nVQoAZfRJAADEz3kS4NGLuL1bUyRwx5Yv2KsehZgr36v3hP2o",
  "key8": "52njTzuD9rYXGtLGt36MADS9ZoAGgduzcaW6WFTxmoQWtq5495JccKF8aT5dxB4ENE5jBQ2Jm7WKeeZj5FGQj4P9",
  "key9": "3X89fSA8xFPdocKNV4adrQ2eGWUT2naVvsNCNXuCKeXCKwVbQwpiwMc7NZhBcUEuyzzMAXnr9CXMPqZ6n6E37pZ3",
  "key10": "2UUQLEUGntm7umt14nkMNPLDgyRXBEE2Sn3TKK64GN3MwtCs9XVwoyhiLJ8WiwopFxDcWDFD2rcRq91mjpAYyZS4",
  "key11": "5VgXfhdKghhu2NyofVCYMRA8qCWKSEKF14nSQmXCydRMu2QPpYr9EqAruxKhtUCyuBoiM8Dmk9T8YuLujAMkMgwz",
  "key12": "3X9aXuUFxwKCeKEs2BRLFkdEP4L65g6Yh4FoSENvFkPTEj9oYK5R3bQfV3SkeCJPWRg8SomAKDT3VyaMGSSHtRQG",
  "key13": "28M8Hbg1ZdC6pmqrMVdU16BMrm5gqxwYe4QptJNfJ25YV47n1vJPnAZCdQ8Vu9c2XUvi8b5dXVj4jiSZJ5xHFhJx",
  "key14": "33ja3muVRGDv4KM4M6gUfDBtk6r6trhE5KecfBCb5EGXUT8F4sU8BkUX21hyFUhKkYvTGW4UNY3m7NFLoQjf8LHs",
  "key15": "3QFby1jtyuo7uZXwj6aqiJWtV9ezycCXZVom1FT7BcjdGypXyvNFJeA6tUFQJWPCdayzEVU3xJgZxLq2nAXrfPGi",
  "key16": "4CL68LKSVLHF8L8ouG9nyP695CxWfT6H8q5eFeJKKCEf3BjVBpJq1T85Q9vSL7NEubhTP4VVxFoyACP9or51nNX3",
  "key17": "3KCEsodoQ9xnpxmso7EbfJU1BzTyTR7MdVnvr7yHkQpH3XBeDEAWiD2G5rSmJ79ssSoTmQpqFYxrfm4gKTx8DrSS",
  "key18": "4yypsurPAWe1AG1t9Um2qg94x5wH3qTckEqHUCi94kp8H4AmDDgW6m4DZ1YGd76vtmscAtQt9NoZyYQPE5cvWEaR",
  "key19": "YBEN6T5jbyGoMLyUJKUiZ6WcgWo2FG2EbbAaQkSigMMFFHMYZqm8jyHVmkAafdaEMKifMkNBC8HKaCMyXdgHFwd",
  "key20": "4MiwCdKyKiRQwKftCsV95eL6xVWiqfGC45ns385zcpd7hv57Mmp3GYh6h8JocZWF2rswZiLFdiXCVcigsdVJCB3g",
  "key21": "58CdJMXKUdxupaVB5i3FwWWA7RRLS8u92JFYpUdHuX3tboSMvtpdNNizX2HsM1th5FfCgtxmRxRrkEoLQdNVR3fZ",
  "key22": "2GKo1MppbYnY5TtQhfgxxnicBzRpNgr5BNMahVu62LQ8iDrdLqgRcvnk2BCtJeStWSuMbPTw9rSiEmFMa8SAkBX",
  "key23": "4suvHKfnH6dSzCBHLgis6wEvwY51Me8arbdfkywz4cHXavsxoZ8wxGAoBfmfh7rnUgziHndem4CBupGJA21q89UN",
  "key24": "5QSv4jSQQpJFo14Y8pdTcFYV9cFh9GHBuKFzVrVnvrc65B7AGyCWijSrPzNo5o5h3WQN6CpkppkuwqYpvhMGjfcq",
  "key25": "5JpZmVKkH8RKPLMqECe6HsGKYC3bekYPA3MoGu4E4ge54KCvmFCm3w2Pwh4t6eYshfLDxu6p2Z39iPE3gUJz3MVH",
  "key26": "4RyfBWKWjWA17qEPh63f8CnoUw7nkpF6XrFTqxKVEoPE76zZh7depVj83sy9X4jrRwcEk8muryGywYWag7VamUr5",
  "key27": "3ouHNzNBnughWKZz9cqHxJwBsqR9UWJitMm6UBZsi3zmDThkuKr9eWVB3iyAZnmUJ8oxvRqpZUszVgfX4zBWMTr8",
  "key28": "MMvDjSiH39MkRq9j2MDNKSv1jqTf9gf1Da2gVQzckWAEmgkXJnViCkZEp3oR8GRhCtuFkxyPRnBcAGTXcbZefNd",
  "key29": "3vFJKZMZ5aNuqMPcUmyzMVoUbkYx21RcGAkBa463WKUvGWARwveC3R4UXgf1RW4RacW3vZ44YezkHaAeZG3QBD7P",
  "key30": "3ASUggm42hKcK8iC3mre5gPxBedbLGzksy32kUWUjvHcysUvoCzLZmch8fMS3WrjwhqDBrvpVkvpaoG21NRA8d9e",
  "key31": "29mfxFQdKqrz62Unkz7AFTnNP5PhbFQq86soT252svjotjYaxEDaF5fyr98oTPqt5KJKP73SfezgrYNU7szU2Pz2",
  "key32": "2ikKsPDU2mrdtmJMV7ScCEF59x8NrfbAyQqsxf8EBfrid6AsJnZuJwxX6BhKeBAxeCWSavKEGfhsjyHoSxn5wh82",
  "key33": "nUQzgsEkKeEY8vrtzfBzLGB4zJ7ea2asEwx7X7MipQHSbqiqy9B3mG2JG2n6SsM6Fi4gAV77Ebmuyc71FkFFomX",
  "key34": "3wJifY71tbdsysxCregWxgbykHPJ5HaEkhHazLF7TKvJFZKKoBUuvXZ6xd8WEaxw7RnHNjtTzt1cGo6FtDw9uZeH",
  "key35": "2mxviGuA2nqw9msfik88fpZY6ZwSGE8mStSaAdKMUsm7k23nE7pzEyV2BWwwYuLMVVHQJ48oYq6uyzQMiVgFGkMu",
  "key36": "5iqpeb1AoSzFCSVhZCEeWZsr8HkLSd68BnZqcEugi6yZm1u4eSN2oTzFRuNmcUqTiA6aWdgztp4i4EDZNnAGzk6a",
  "key37": "4gAd61MUqfK89NssLkeEFbMUCbAURiaabdUyxPHYwo1S3RSZr2JuBZpFpAyfXFnPMMceFXj9Z3HpPbLZCBeHPUcw",
  "key38": "52nFK7garj6xP42PcuPu7cQy7nUsfn7ad7uPQZjYKKFm4fJJyGE4kSoLcWPiswoBDFQMSn928wqzEHHkeSEzYWPg",
  "key39": "2JsNH5S5xDqry5skZGAC6FCocbWiBaPx3kyzRzw6Y56kEwmidbafHCJ2LovXT7WksQPh63MgZoUspsT8n7BmEEUd",
  "key40": "Pqaow8jYUdQvVDkGdvBen1ZiwBJcQVtW49gd94hDFjHED8hnwSPNwXfTBqvdj1xKBPZbDhbWifyyQf3di2Xihzb",
  "key41": "2oiQQF11A8Xiz8AxbYvFK6Us3fUts5xwJ1sKJ78pa8s3cursjdG2Tnt6YVrE7DobS8w6bZxVeUxErKfEs6BRxDgF",
  "key42": "5VqoxdHRPtfpyGyxQ3XyZhpJCXah8pQefNAkrms53aw5ef3CwZszoyGN6VJAer7TkPxYYRfQfzhmG8Y77U3oNrRH"
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
