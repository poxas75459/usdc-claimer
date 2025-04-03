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
    "esQZ8tD6jp7HwfNJWBLBDbs9isex7ZnMDjzKSyAztXxDrFPBdtU2FiyGYvA21xPkaihos26Xz4HXx7KifT68zcQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51Wf5H2nnNHFVQPSMDBap69nAM5JVAg7WTooT8dqbJFL5wcWsjkpZ5wF58tSZitQj9MbmmVWRyTahrcm7Shbxq6Q",
  "key1": "4avGCwByzjdWHj8zfZa5tarpoGW9cU6asNaPRDUUbbfPD5aH1QXYDzzHYXJb24rDyED8StLbNGqbHo6adKopzZre",
  "key2": "3jFRYmdmgrXDsUeTf3Yf2txctPSbgHttraaVm8AXukHv6iAtnU6WgqwYzaVjCUjHB6D97jwN3f5h4K1BZvhtFF36",
  "key3": "5BFBpS99UHzZytahE1afAVmYaUdCMASefdCNzBX1h8WLVN9nAR4TmP1uJYCUPxAQGtGKotBfdgmeGFYidGosp9K6",
  "key4": "3PyJoHNJ44Uy5nEh1ogq2q9E55eKAksikTGQHMKBzrw1jPTJg4eVLdpdBmNxWYnL7eneYbMYqeDmdfAbA7hYbFQT",
  "key5": "3rkVw7PMr3rSistaaFZfwpgtCeoqctpS8oyH2nMnRq1N1x6FufJxyvMo7iy5BigmSGAPSiT1uVZyv2JdQ9xQemfS",
  "key6": "3GEDJCgERmARKFiBC6fKZ7qD7pWBKNUGLKPevfWDM7y55BLtCgaR3rQ5dH1up7NAEkWq5KpaycaM2thovonNDyvP",
  "key7": "2HPaMccnsQ23jJCDyXLqhDNs5vvzeoYfb6XvET5T9sGrHTC5TabjZgfzjAzb3YitZdHxMtSoh3McpvemVeKpmJYD",
  "key8": "3usfP1a6dJo99YEcwVHvQqHfU434biKjD41eS6dPRLS5SaWQC3e2xounfYr9A1jCJMmvemTTQqmGy7QSkkTMECUt",
  "key9": "55NDgYucaugfAYcTiS2jwErT3XKCdihKWVnvoPttgWMLpU6ybT3WMo7ot11nGSNRhKnghtMW65gSkSVkzwLbHh3z",
  "key10": "4WvXktSgxYviCSL9S8aQ2kpuRhXeFUPCZqmcTH5PYhmV8U9gPPFh26f3cUhS1kota3hCPNNnYJauMgQWbQTENr8H",
  "key11": "5mVoMgqtaDnbsY5MS4xtxJXCMkzcTtdgPP4zem8fqW5o53mTn7oUjdRthYr6x5Uy2xdfhoWmGygmSdNpNB4d1thH",
  "key12": "4mCrzm11A8yPo6PZK4xAtsXjE73SV8HhEZaogoCqBJE1JSPkQ7FFUa22CTKvneKprrcPykbsvob7XSQX2uWBgpeQ",
  "key13": "3f1LsB3AUMr6iYd45d1g1zowuZhR8iUsMD7r5ux4c3TmPBmJ6RV6fLR7f9D7feguq57B82S4g7mqUGU16ZoC6UmF",
  "key14": "4wG9N92a6yu2hGb5bfi4LUKqzLzUF6PAKkrLUdLDQxvLPxVVPBR4fBKXBmY5REE543P4MVRcFYovEnJS7ctqCJxW",
  "key15": "k7iD7KCqenjXwXTwwRSYLBLJJqgduZDMGMhAzsUwzPCVDSqYTLb3tXo8bBzZEomuWLheW9CBsY9cVctzqFTpDze",
  "key16": "5TmqcRmUBQGEPYNXfkSwbKABJLXbmw6Dm6TuU6PcCPubh9wMH6FAvMwBq8h4zTYeadh92yjyc55Gr1vwgU4GMcHp",
  "key17": "3Jw29uHCkTop3zLw5K9XBQ3Zd3eJrrTPBhMiZu2zfm7J7qg9Ge5paLcEhAYRm4fcsvpJUmp68GmQHk6yrAuJWAQL",
  "key18": "3Rtzygc7VJ1Jfu24t64aB53iMGpiF9hTwkVZMq3EVmhzKke8fgNnmU7oJbcn6aFfVNQ7FYdnugwXdnMMEBKp6zpT",
  "key19": "4wd1Y6dK4G7tKrDhB5uQYtVTuAVN2vkGq7ns1xXQvtXKdZFxdCpRzPyLY9krNACkKHACovdQ5G7NQ95h9cDA3J3w",
  "key20": "nKMq5A6MY5aUGvk9DJxVi1vNFtt1pzPZGh6HREekfqZTbwxoWEVnc2R9igkH3SNfTrSP5ndQeGHdwvYuwbpBL8z",
  "key21": "4HZqxaxYWvZpwWsBbyTyA9wgXTfkTJYQF5vs1oqAxExEqG9iRgxHY424w8MtG2edEipEHhs1kNiwrPpM94hmgDyM",
  "key22": "2EC71dhXKu3Vk5vJYwTbat7LY1sj9XFfJ37kJQnD3h7qx9rVFTvmATdAKUNrCkgkCAimsQn9DDTCBowZEH272oMG",
  "key23": "5WLGMeS1GownPBvz4hD8KLVDFioLAoZixLbuZARgKnuuaQuH76DUB2MaqJzrVvzpVX1HFnbuDXWxo3HEiPpVyVXK",
  "key24": "55FsJunCpFLsKzUXocCNqszjsfqJrRHtp7AATLUMs6DSEoWBBpRH6PTc9afMG8AJssnvkoXgRxoE9ZZVMhG1Qg13",
  "key25": "2VuVMfRqiu7VWYtXwS1fcJFzpEinGwHAya1S9B7eFP62QC1Yh8piF7iFVS8kQwuM4keYb8hkPX6Ccbc4RorKsGiE",
  "key26": "5KzaYhu6JEf6QFXUo78iTmS7ADnrGJci5CLFmLqGw5BtLb1nsunCuHKiaT6HvXYPqtthY2aaxtU6cS5PS7EhPC5i",
  "key27": "2AMP7sNKFyEru54YeGvr3bsRcoR92gaXSqSjDV1dAUdgm68LRy24SB6mY9tsrisrxDKAwHYVkdv2cLwivwBemnbU",
  "key28": "emRuVdZVfH6WfgyFTPFptjdDZ2438kU9QKdgdDqTbXLJpohVWqeNN1KA3Wp89tnqUpNyRQc1DzXaM6z2Hb2YhnD",
  "key29": "256c5uwbrzi1kedpqWckiY6B1cScVpasRbeeXpcrg1Jjcj1cPvSrVxT668XngGaf5ac5sXyADYnQx2aqYRWGPFLn",
  "key30": "4TyCvD8YpR6nzutqDPmT3vWHehJsZruYSApPX7tLJauD7m8yULksBzP1RXDfdjXTkWG3t4qT73KmqSX7NwSNFhip",
  "key31": "36GyUNrTjod4JoXnaMGE45zxw2hsmgatihDvQXQBdMprmGGbZZMVnx1zZ4AECLyxpnSij7QFyRez1CUUQwqmYtdv",
  "key32": "4p9F7MsHorZfrJ8996g7BKdHmr9urTmLmwrfNvYdzN1QqxCdEeSMxJkr71xQxi3N6WbX6xRHzioY1To2GJVVZkvD",
  "key33": "5EvKDCxqFysPK4MNViWJ4Af9niV19iCXuNV9SQKMpbWi2Z14eNbUVAupTJLi1sECuoqRHnBmgPHVDRLtht115QLZ",
  "key34": "5tj9L96ZNfcoZbn944vu56cKWbkHCbnaU481MEVHf2kLnzmJdBtuqydPAC7XwjBqPhzRAg7SB35McENQP1G9LaSj"
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
