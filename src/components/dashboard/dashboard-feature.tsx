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
    "4QpCHtJX5KRookcs484pyfb4heT5KcWBXFGaB8CGvEFyrU8xDSaXyo6bap67DRiscGcHWx2iq7vD9CBrNpuTh3nF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43rWDSC3enUBnr4qF5YMfRPV2rCdkEjLLZXdeH7Dfoo4P2YDozVxzDjUcTuwyMWHFUGz4ZNwSx8afACaE6c35xcX",
  "key1": "4gm462GA7VxJwVk6838TEBMAzhW8z6YCtsL6hWByBc3QEjC93TMS3hY6DvukBMvfKGqFHLxRXMooxSJLuDweHnJ6",
  "key2": "6uwG3CT3JSefxrk47yzS3R8Gno8maq9TN1Uxu6bpD5bJecnkAgNTFdAmP7pqDUBdPuENGGYw7T4A7zUhwe2hvLc",
  "key3": "cmK6e7jJh7rM8ZuwVD3g3WSsQTKX7fJ19JKGZ1fm3imYtxUQJH7CfP4gJtPkHLwC7Mvd6egnKLyZP7YNZcteTRx",
  "key4": "59EpNBxnnmKiVgytdwDs35gUZj3Kma6QE1PUU16oWDimcMB664pT2UjoR3Cq16hhcddbJwfL1iNfFckxZUCAxn6q",
  "key5": "3uvxekm4u8njrAbHdtsbr5DfqCHGcH1BjmvMH9z5aeoFph3G2EkwDTnQ47JwJU4Hc9Ypyjn2PmULmEP7oLg6r96Z",
  "key6": "QLfSrdgSPQ8Zq8FR2LEGQHxU4VAMhH5QXAtXq4FsconB1jBg1X9wsRtSGfAKDyn6EDJ3eFnPPznKdq9Ud7gS27V",
  "key7": "4d8fLXGA6fH34HBiMDB31Cig1FPVk6TA9AmFPDRc7Xw2cvGuk31e1TuZTKyoCdcDvr6abBmFhU1WSpBLCNJM87mv",
  "key8": "5r1tFuxe1voAheskcax5ATm4Hb1kA55LDXQKEtcyTNe1ueUW5vsApZKPPXs8VLmrjYunnaPTAjWdQPfK7A2kopcN",
  "key9": "62nXEFAt1jMuvt53R7SDDAS4yPtjkxta3DunhZWRKtDx3qt9RUuS8pRdfhm3ozbxwNPHDdzvQrPX9AspmkT8cVzJ",
  "key10": "4wzfmrXEWFs7a9ZUQdoLC18xdYrtx2fzSzgmjJcBASFoQS2YJRuGhzhGQmmW4ptHit5mK1W2imsqFEpfFpKivAk4",
  "key11": "4coHhSy99jZLEh6qUBWiYoDiCA6V143txe9A4Btp4qKrDSvubTR5ZxRQNudJbokwutaxyc35sBHSgDhEFtFpbUvi",
  "key12": "rd4vr8bKeehcZSGZCB2raRNA4Rj8K2KvyuYop5mUZmL2UF47VQ77bTME3GacFv9NqrPfEAsbPGMXHJdCtzbSpNx",
  "key13": "24DbACBXqfBDCyuin4uhnGcuDSPSE8ACZDxVVP1RXHCWetRcAkBKH2gobnLswPVz6BFMnfFAk2kj7UvAyZjzSbuM",
  "key14": "3qA3pJxfBx9HayT7AU1drmTbrDv8BwJhkoitAsEsciaGVwRU12QWCuuCczCp2f5aCMXDyoTcn9Dpf1xNnXWmeTQe",
  "key15": "4CEUWQBukeJXjdvFBdv4Fq6M3xbB2qHuurx4oq5eVpsBsjqfuYGawEYpU7pjFwcEjHtMTeAuEXuSp7GtwQ9eMh7i",
  "key16": "3p6z9Y1zBu24p2kNqh1JQ982EZpxWcVPdTWFrmuoAxDwvKoUecDqNKdS9p6rJwoQTiedMszATLwuuubPjFFUuxo1",
  "key17": "594BbYNParkQNNvSAEzRmHRLif8LjADk7s8BHp9CFU7TUzSEc1p8DT75wKBALRvEU554xwRyobkv9tcjx3mAWAjc",
  "key18": "2t5YDkRPCkSzWvfUduxRTbTNogzXPKHfavovQpHiKo2JDe6qk7pazEnYCDtEm3wCCUGgYVB6PbpyUUkvPNBMe2Mu",
  "key19": "4zDZEhworT1L6ZJc9xZv9FcMmiZqZq2SNVBw6schcHHTEjgdGbHjdvzPxcPngTuiLvMSac1u6WTr2vu3uWKCww2B",
  "key20": "5gQ2F1Uk6Rbx4L3G9n4nXRfR8MMzrxowRFH2huENsb4CXnQJ4pwJqCsA8cd2xfkvRrtDPRNrZxEMyVEK4vrnNDQP",
  "key21": "62TgML7uL15DjbxGbt2hNtRDuonrETyMHHSt1RmNeJTBzCGtLJpRJHNLiHCqRMGLbomYKHLZD6UAzQuKMfonf2bJ",
  "key22": "5yGjY9wQdTTWYvVa1VzpapixBpMpy8yksQgSjnB9rJqB7zW7EzCDCfp8xcdpwEdHBGM84tSq5bperng9C9tm8Tdh",
  "key23": "2Zby1m97PU6UsPrcbc53gUsYqdVMCy3KC2VNULKx8yeefFHGAopGapj1p3rVbEnSUfBkRqZHsk3pgpcb9S6G77Md",
  "key24": "3Lg4wVoM9cb5L7P3rKHtSLjkEx2SLjv2Xo9BMtRfomDSvJpFoVADjSyDMCSR1S5iLXiM7kyaGLKwsx2ZgYBQWT5B",
  "key25": "3PGMEw35z2LTCPD84tyM4RZqkZFb1Sj6f955cdf17ZcoWoeaHq2EP5LHSWRfTad6iJ2dMqFZpkD4ZiDZNDbvqfK1",
  "key26": "2zidGJvP3ACKSXoZjrcrRtCLd5dBsCkLH5fk4B91gJAj529Yw2bQ9uWSUGh3eCFj3JJrHyNAsvnpjG2A8rvPrf4u",
  "key27": "3AxcxqDQ6yDqXJwwcpBWpZQZMiGA4VtCgzYMrE9fdfzHTHGxXxDRTkr9UAyinUSfXQFhrVKxDuM1DJNpAewALEBj",
  "key28": "24XCJaKdx2EukfZrisashHg4vNzknzi7GZTB6wLQt9DCp9RzZ9TnCHisu3gUaRmGqi4rL59qH7YN8x1rUnZ43qPH",
  "key29": "5abV1egmvTpxXg1zBVjLtkgxKG8JRvowCqLAXKMJE6CfY6CcKZbizSe1fUZ8ZG33yeZQ8U5agAxdbeww4qWPm9iQ",
  "key30": "3oyNnSKNHhQ1qMaN2vJKLMjEpMpRpTohTf6uRce8mPow9XkFpYXHWF7oNcLoUHYiT1YPriTvZyvMEjNSfqGBFQmW",
  "key31": "2SyDLPun16KFioN1PdrrSodiHoap1LF2UWQA2ymxqnEczjUkttDkBKovffuiiZw8Ds9FqnVckpUeo8KQmKWYa6Ra",
  "key32": "DMxpwccGiMGLaUCXeD4MqZzBMcPGYswJ6GQW92qvcVqPBxdo8gNtSUGiEFWhYKhXh1PwWcLq2fqcPyuvW8JBLxz",
  "key33": "52SzmFvLTUVp4W3JkYqNcq9HeUX9VfZNxqDZMV4iWYzLxSNCiSsz9LASDR97hinu5iPVhEAWpuDHfAkjW9DCq6tc",
  "key34": "9s6ainJFACLtP4bvYHxtUGEHf7WW3pDKCx7MUyPxNv7VnfvGytwMFfB4aLvemMNj9Wb4LiqLUmSogBK4VWdrjX4",
  "key35": "2yMhJj76BzFPoG4WZtgGc8w2kUFdpFKCFAugDPk3mVtBLS72T9XKYrqnhW5srdECCXFUiXEbxMyMAQJurxxCoB2X",
  "key36": "2m3c29hK7TdDCH2iCST1W1QF4KKj71fpYfZ1xLp5Ud2ypsZdfRGAi2JfGz8sJNibYFxwHiQzVDmnoD7MHaodZ44x",
  "key37": "4zH9rV7W4mm4cX57pWxpgT9DkrA4ZfaJP9cM6CCRReogezfVmPM5vpCTq2TPNGSPi8tHDh8jGp3ChK8SSDZkGD9q",
  "key38": "64ABpNvrc1qnwn8gHnp792EHKXo85o4Ab5qN7vn5rjwrYUtzLxFUTn4Q9kQ6rWeVptU7KrG1YWsAB1LhrCpTgDby",
  "key39": "66oqW2LN4T7vATTY99D1zS3o6UiiPCDAud3ueoM9PNn7gmtpu5tqv3kAYGYpH68sAxPxMKWCDcSwBEd9Xbaxazip",
  "key40": "5fHxahnFyFE4tJHfvYTtA7Rd1E1SoTamPN37D8evbJY7XaTmmqZbNxhCVGuErcGQZ2Y3DpP37fyUjihvmG96MUFn",
  "key41": "DPT65uPKNc9bkHAGvBnYQKZq91e4EGvBkS96xMWvftSkMXFL43DDDPnmvAqK892thWKo1LdfpCMCjQHboVFAhG5",
  "key42": "avCjtzsTPDWmKGskLpCjC1YJPq1HkcvPZjsQmQEz4ByMTAnMZekai3aMkLRDvnWCX4xC9cHZbea8zURmVWrSs6E",
  "key43": "67LgnbJfVrdQ65Dsh8KvfHzCFGb7BsjcZEf3XBigakdazTEvHSoNg3AjAxBJoSsyDatgvmv9jBqBZNSbFb9AK7R7",
  "key44": "Fo56Yq6Ug6JY8SLyHBHW4BcgTz1uMkxMxq2WGg8iyxJhmtLXGCh9jGW9an9uxTvaJTJEZ1kRouDMN8mtfpjgXNE",
  "key45": "2VaNtVwHeHFWcVeMtpvUh4sZmbbSiZGc2mGLUwiQLwrJ4pA7LCsccyPhuQYTRmvKsFUuh6HBz2fmbcUWsU4frdRE",
  "key46": "53CtkPyVczYNzyTbZFNzPkDueSX3k4NMadNxvkRWhcFHJpMKqWMQg3C16mbenSfPT6JdqeAbrgYqFEe2jBa5Fhmy",
  "key47": "34Y7sToQGCYAM1AXPAeDobo8N6DQbUeaZ2fsduppyb6u33T81YQy5j1BUK266M29YLWuTWu3GnJaM8QdVfPDyDMh",
  "key48": "3BBRraKdxyxKUoXmxR6fsHUBas3n7n4XfkpcCdqK5mP2c1rRTNqfegZ2RPtN7U7xuuAMfMj11uE3vvAXzm5bmum3",
  "key49": "3ixLz9ps2T1EWNEXaEVSAZc4tHuGzwp33NFyh6TMACwwtHsdu1pSxBw2jV691BEuUpqdySYKeKsFv3rrgiba9YTW"
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
