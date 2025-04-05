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
    "4zNMfjUoxJufwZzgb7ZotBUEhNDbGu6LFwERwkVaV4Gxt7Zb2Ssxvj8YSY8UAKy5kJggp1RSr9ziuzpi18Sri1D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JP23a4ZgAeiVcbcTWpDzB3hZKvAESnvJ9sSJAYzRoZeKZVLyTms2azDE36Mm9drWcXb8tUQi4vJXETzF8YJnLDW",
  "key1": "9iKqM6XhK3GjJuK5P2x4FysenQD3RvRjq2QFitjc6FXyVMgSfYFBsASsjomdHCwa4j53xd97qNUgDAd1tV5Ltv6",
  "key2": "2ZyC2oPvuVP5YUYf62mzQ9H4bR3dkUFBh3c4Wo7CaHAJDo5CpZ1Vj5FcwVZckwkXqTfJgwUJdEQikkzHUeHoDnj9",
  "key3": "3V9Vo1MUzMDCFTP5TmqyKTbjzDDKAz8nzvWYzUuJfqJuz936c7wm3dM1ehP8dUd8zkmDQ92weUZjKY9xqDjXdoDH",
  "key4": "31uJfFyrMXBpeYoFZPhp6fz2qgqmiRj7vLDh7Tczae17AobEhsC61K6KbGHRj9cfpqLjZUqbWUpo58sE23Lh83eL",
  "key5": "4RRAZ7ZKqgecHtUBizewtb9766ACwAaGtMZtjCeN65A7EsqPGpBef7R9AJafwjB3iVsByUSf5DkEnUVNebP8EArd",
  "key6": "5eMHmVsHLfsjjChtjv9JLfrJuiVhRgA2ky57boyMsvxk8oK9CsFA67MgiqjPQiZF3G1ZMBKrrfqCR2tGVQQWbk9y",
  "key7": "2rik53uENErhp1KrUMZevucFQZzb7nHxm2JTdZZVLhjm5btUSpo38M4ictQmAx3q3JmYSQGyC98eEo5KoZgWmLRf",
  "key8": "5p94VtgyFVzy8zd4yaz1GWjd3AWKYm59gqyfvaAq5YeDtWorwfZdqFLezZZefjcLwuM1aYygrsQjDwxJ6XESXk8G",
  "key9": "2WQsXBQg34tFbquKRrVEdGp59WKCEE21rALxoLUYDNKpxJU6d4qfUQixdNVAk22iiidD8GBAX1bjrbVj4GrFPwhf",
  "key10": "5vRaknzxtTyUy4xAiAVpH864i35wkoBDREAoW46pCQCHADcqmMN5XY284PE6xFAmwr17a8kKLZo69NoyaP1VG7wY",
  "key11": "5mAyWY5gLLf7Naqyfy8jqTFndwBHu2qeGUa3MQ8dszZGMkdSJ8PLTrRAS5NDVfzFZSE9XnwrSSyhwfnsYNdqVfT4",
  "key12": "2Xkpy5jYASPMKJBUoeME74FU8GE18uS6hCrK3eEHh5QLRMJ4nixsZskaUoEt3HugcqCEaJarQR7Wf7yVAeb873PN",
  "key13": "9ZpQ3XrA7754Q11mgWAPnpQpZ8WrgmMy1S4Wo878MnxyTNfcD6VFmxTYT4RXcJDRXwZpdoY5XgYTRtt2UuV7uLP",
  "key14": "Ltz58DNR89ns5dQcbjPDYTbNwTvasfZvRa24PkbQum2FhGvjJQH9V8YGeTiQxb5CECJ18vvbwv7ir1vWUoP631H",
  "key15": "5ZnLNrzNTkftryEmuPvxFp5qVrn2tt5RqjvscYyoq2SzKnR7Mi5TNNonDEjaHQves2naQwUkNERwb3iHVGzbgoCo",
  "key16": "Fboogtwn5NAUBDPGiGMc8Np1yaeQBfbk6BfAb7MQJcGkcYoiauGaLmzsLCEvFCqrDDwnXZTR7XsdNQPY6Un5i4V",
  "key17": "5nDBWFRHvFvpJpe6niHawRHHdbRq6AdQj9HmjC1A245TknRwRYiAx6tCZhPdAXueB89NhMMbytxoWh3ftP5sCkfb",
  "key18": "3VEzSNTG7bXSyvWz42W9XgVHXXdN3cnUHuAKmBVz5jQ5aMRh8rZeWqKnYu2PthS4UN17txjzh2XBDvEW4381jjVW",
  "key19": "5hFuCfZRXrgWA7G2br2gFHSHZnW3gZyFMmRneBe4Zufdr1EGVXQ7bWFrP6DqyGF5jR3rScN8rfuqgDUKnpuqnSxu",
  "key20": "4hbJo6TR1JmQMggQefdp5FFTmrMHKmxcHDLhbuDiLakxiu48ierrYyNRhwVtNHWKsmMo75pyNhCWQ9EQ3JCkJMTX",
  "key21": "4zuErzX93fw4S5FsbKa5UfkT7mNjSF7WB3huneXqPEy8nroEHfeXcde8FEYNSwd1M2H6Wyj2XCkTLxoaPtQBbmKE",
  "key22": "3YRh9kAnAXLkThhedJy3ZSjgYQ6KgTgXvMGTXo2keH2oShVpB2Kccg5EPyJq6rD862H9eNGzwaxP1fUPSBhV9E76",
  "key23": "5dd7Yk3eZUWdAmFs1XCVBY3MSFBnzJrazf1MugQp1FZVYvAJ8ScvJMQWa1MexB3nJBsLA7K7r23aVeBpMMv2jnPY",
  "key24": "2WSCD4v61KR4hSAWxDUhuQjuSpGeuKXFQFD2UKWUNNrQmGpwpHGiDhFFAkVLzBF4RtDyGX39PMW1uu3z83DV32xu",
  "key25": "4W8yMuNMegPdCAJ5R8F5mV74kKKeDfiWo2ojovSURkX6qaSA9vpoE9L7o9Kh4R7a7tVWcRcHaiLRW86GT3BtmF2g",
  "key26": "4zXVKbHem5Y3Xuc9NdYdtN5XjonGSFYVyJNHtV4aAqz497yPjhCEeoe8DfwsyU4pqZHuwrPVkMxhdKMAVoD8sWkT",
  "key27": "2EBnenF4wvNNcmcuxUAKMQsSpA8dt8yshnAWFBhF4TCWfwxfGqiL16RBTq9qsFKrG56MHVMDH7usr54VmoDUfxSu",
  "key28": "pHPCDTrkzS7ERMYpdsATuizJTvA7CWiznRsvrkjKgfY6K8mRvejpfZAEctNmSfNn7VEdFoyBTYm4RcA4XpFeWjj",
  "key29": "J1vnMSTfypcPazrQn3W3WtvkMoxC1YDckfdmFLNBQ67sKihefRZ4P7BkQtS6z46SK2eqEpna65WPTdPWpx9jnNx",
  "key30": "2X1z6xT338QQYcn2YUTHgQcwZP2wwHizGT2nopzeQHpkhiBizE4NU236ZzYjVVNFKJsP8QYchr1apsf5wDku9uSW",
  "key31": "5Hy79UsGHhGtJBs4A6dBLPvLVuKxn3gkAfSVhGP8JbFSLMRh6v6CsSFxFeUzbbmcYnJ5HPqGn441xQZUGqbQMv7J",
  "key32": "5X6CaWa5YtR3S7ubZ4VffsRvnQhFTiJcUdwd77NBmYNz2bokQTiAub9jE95X3KC2GQ5GdmLNEaXENvXgZb4H7RLF",
  "key33": "sAshG4vXB7dzr56gFnrKbjcPSMuSwrLKCWx97Wox48v1Gt3pehzVBoMvD2pTd43XVZAK8U4KZCE7USy4Caupg35",
  "key34": "2caxSder6yz13ymLoNcgepnjKkLEuvMnf4PwQS5nu78BgGx6k6GjjehcY2y6c48Anti7ufHZbC3oWPhxZsFAAbCp",
  "key35": "2hD3RmrjVDs2icgCaXP3ctrGSErtJS7BwzM44CLWWoLSfGmhVGAHK6FCQUz6EW8dqf32XD6vQ1NnykiioUhujV5s",
  "key36": "2JDG56DybRmL6Ws1gabMLot1wvotJe71QKbUn4QrtSSAYhkC3kGgtnnvxvxctSRdnmczU1rz4nXTFwVDuTdnUMkv",
  "key37": "2fwAjJqi4XoM7ZkyZnY1DNBqoV7kNErvJ7GJP51BwfFYkSC25fRdjFJ6S8CihTzNxvoWJQgUmA66TZn6WRp8pEXB",
  "key38": "RdToWo4o4aogth78oqYtUCtCaCiFH43cBrYt3dVoYcJmZsE8vfvyoBmxTo9knKdNc7jtnUEjc4fd5DYyYqwBXun",
  "key39": "5VBVRsvxNgxaaomM1X3mBmDgW64D9718njH8WXmUjoCRQmNWWumFyCQVGk2g2pUz4Vkqxe3K9C3BcuRi2Zt6aFop"
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
