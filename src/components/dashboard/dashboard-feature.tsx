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
    "2JKnB1JhGh5r52bk3cm7X5xwwiChZyA4raw9ruMT5zV3JtxKGDNM4S5XcTzXJuAKpcU1dj6didAYzrMeeSWWeGZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PT9PKi3mSqYQF6R8dtXiVwwTj8akRFgSD5iuVxvbKPx2bLhR5mQ8cfhquXQtWENv4AcwAjTU61MaPEoC7nVH4CP",
  "key1": "2QdQtuzATMxzgCJpEQM2ay64x4ayGv7msqJLRpRDxPWbvX4C9PArDJUhX4hyDBDL3EmcyQ8BhFfQbzXgcgDcZaUh",
  "key2": "nyvBvHbFDo5dtjXNJD4q7LnfezCKeGPExa6MvDb8w5Tago4UnCypJYXTuoep8qJf9gZAB6E7jQJCwaTfUbgRuZF",
  "key3": "3kc1sKdZsdKKBeMkcBYy458jJ5nxkuYng9DJjurkRY1wc3oS1Q7Ds7zVBs33VaM9AgXbCcpbzvWiwDNhDWWfFQop",
  "key4": "8Bj24gqnXpVeFcHqYweY446HkC4mtE948qxsVSh8ie1iP8cu6m2Q7DSDgw9BKZQyqn16CMv8Gk93GoasDig2tan",
  "key5": "3Y5XNv159bAMtR52io2zo5vN9rBZpnd9FHWQv6CHfrLX3ejWj5VRGkQ54ajnzBAxJ8EoJB162Qst9k4wRK7VuC1o",
  "key6": "a34BhvYj33kCRJZz4siyuzzJxWj5t7ms2jqihq3Badty2mfNTmxnGyUZfp9hxMo5u1t7vFNr1BtsrhthrpFDnof",
  "key7": "5NwZcXwnW6omp4yRzDYJbtg6j9JPHmncuZ7geYSrC5JzizHSo2YVQFTPgE1KUtUYavy7WbxTWZVnANudxFCtTyqR",
  "key8": "xR2pBEXZFFxm23keQGgjPGckA2DjCWhA183zaMHc5rYjR7V83TvhfcLT6QKpaiCNgpE4c1zS3HZtnu6UWXRRS1q",
  "key9": "618gBdRw37RbqqxSdBH4SYgfeEtcwh9DHDRRfmG6vVwzEH4a469m4VSfnzCCxDv2M6XJxFBzB7ATjyNhYk6CddQh",
  "key10": "5BYG5rzh4JE1AgYJzDz8edSGYSJowzdpGZU8KaiKVSuBRgu9bpn4rjN25A6ybPyKxNYXgL5agNYY9EiCv55hDtr",
  "key11": "2HqVQx3niD6vNBqnQic7FXnrtCoHUpLVAz89QEULxXTu5aJFyDnYLTESp3bxzj4NdqPMGTPdHQocEErL8Y4q3YxP",
  "key12": "59tAbviNmYDpgQvbhD1f13RBh5S9bdvDGtfJESsuZX4etDTZrv7r8RvVgJPatuy8eEA8SHwbxpE8NJrxFDoWT69F",
  "key13": "3MffkbMP9uq5pmtcXBbqKjzg528DgbT1jSahFMQZ8rf4H4sn8uuhAu2HvR4sfpjSUEcSLnWah5LunxLi1BX9uZg8",
  "key14": "2GxN894Aba1Vo8eAgZHLhdUkFYDTnwMpJoxVfxf7JsfCknq8dLiqyB6HTvv8npaqLxWK4EwNePMBpzQZUsjs5XVY",
  "key15": "2Bp4cW6o2JrnSEoYxKaWazEUA8hkeEAQ96A2jpc7GbhWK6HBkZFbNca17BewCqLoRMDvrgap52r4jux8c4ic9sPc",
  "key16": "3vk7WpSwrr1pDiEabfwGeh9ZJBQXv2YR7bZKDkeQiNZVtGjaTLjM1Zvc3UG7pMjJZRsRPqENVJeHWoYgMNzd7VVa",
  "key17": "254aMQ6K6djN6EJsQvx2R9fR7xbkgYDYYZqjye6fr9rbad1ceH8AAXx9Gd6sLaQuF5WSN69Ps2SbLS6rt3eCwK4i",
  "key18": "3wWWcduAgPc9MgHviXe2m8ZVpVqKA5WtNPfJ9E9SEPBKXwgGDcsZeWPNFcTwuKR2yfPXyUxnCkMMXqmb3B5SNAF7",
  "key19": "4r3rR17RwHHgXQW3MRbd1itom7pURKZuxVC3R63LzUMfZidzYHSHeWHRzS2BdqUd7Tzfh4Q9WDqUy2AKqiRzEGFQ",
  "key20": "5gWY4azBexPvUweepJcZ92scUpxzjFbTdADMk8kpccg6v3txMrPLqnDxGE2sNdUqEZVj1qHYwwNYDox4HvCtdpUh",
  "key21": "8NKCxGEFG5nhZt76NjVNPtnHKj29Kj8n3DHtDH7vd9wifYpBC3tiX8EJxAeoCunNYKowMkgyBq2yGRJ3ienJwoT",
  "key22": "5tuYKvtK9pmDt3NxjEqsuCdDUqzdLa6Ghf8qmpQjdUNS61DQN7hUiUv4JsKUSfScrkbEJ1yfUGSxW4KXnTPPiABZ",
  "key23": "4ZTamgUQQaYKeY2uiqzvA1VXzDgH5Y6j7VFivpKeQu4eb2pBSHWkHVVxwc9QWKTT5UEh4qKAeG1PGuTjWLgBFKmx",
  "key24": "5iRgp8nT434XRqcY35SpkajydVe6TD1Qz1Dm2a7jRdfUiZPiKSyjmJBxz7yrfFtGfZUbJcW4ziZNu5yjkXcwFBHC",
  "key25": "3GkMQbtKS9MuFXvT9kwUi3u3qv73rrjCd3VQyqTqo4pfWiPhMzkHkQ3fgNUNGYjQNJarZpjL4LF5vt1EpgoCxvfA",
  "key26": "5RSztKECFZhLAR1uReDKmVYE6CrJxKgPCrfgGnXnx6Y6yk8mbPu5fcy2kJudepko8dmzrfSdtNpyP5hgaBohrfar",
  "key27": "2RdE7G2eSDoqGHe1LyQBGbcxwjx4UcUsxCtYiqJsHXoeNZRs7mEYaampizxvA6g43dktCPLYVUANFSW1cRrhTfRs",
  "key28": "3ZmzztL2iPJuz7PKPmocgGk2pwyAyM1qXNYWHBMbbL49QRTf53d9NRMSg8YWPVm5sL3MUBNygWVAY194BRs2FsXQ",
  "key29": "2GSFQ8TdUsfNHAvx8xYS7aC7aTNvbvNMmQMLvhWbFKCezTDSDJcV16MX7EX97rYHGvwAkpcj85KgPtc1bKeqDoVQ",
  "key30": "5jg5SqTahdNoi8yJUfSFFjiVBCND15Y4eRjT4XRVPDmUq7Zuuorto6tHiqFbsba3JfT7AuGJfPJaPBDeZRoS55Jn",
  "key31": "Uf2b4Evt7o3UDvLsNjghFPM9UYi3GHLpjaxwCmm7ofqQ9vvpny6WQ9ELqo2hwWoypURCD66ATYhjZcVP79vyK7u",
  "key32": "4aDRf2ssZgFyXpfsJo9VjaL8wMKH5juU3kPSM9ttCfgP5G9F7aBiR8BQCTffghAB6FMJCVrEpiVFYe2qW9sMGMVk",
  "key33": "5YbUkMtrYgrnVkQNL7qUzAnzEYJa9Ahr5zB4czzrKhTPWUpetfa9Ln5543khPk8s8NVNzZjzR3NwG5susbZsKyLw",
  "key34": "2RsK1yXDzeAjTouUdHUXio4HutoJLcZuPAK2fr12MF1jps7nCvVhBF8dWZZjjpxiHUdFHtCoE6rmHF9FL8LNzi5a",
  "key35": "3yKZTiKeCgzGTUZzYtdptsznGupqsjDUtuDSjrvdByEY2vQiqnkaDWhhQ2kmNy3zqDavy8sPmH2hQxkF4WWp5nFp"
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
