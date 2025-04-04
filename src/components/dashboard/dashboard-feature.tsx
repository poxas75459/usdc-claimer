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
    "51ieUMgPQvMoXNW5WZsiR3Ew4YG5rdJ31rQWau2vvx7aSCAnThgy6G5Zgf6K26GR7VaQHof676y8Udv6bYjNPYha"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BBbd5aQZSMQ34mx5rrgVjD5p2vF2jPeaAF6fgKDB4TM5WEMv8saZXAoRTbWBEQHxNbJSjAwKx3FMjBkkBZnVpXW",
  "key1": "4s9a8Q2G3Yfy6YR3gTAyrrR8XPU9kEbwqZYGbdPLSjoP76L8Vir4gHUCuhpVYAweWSZtgZPrVVpSnLDjo7Bckceq",
  "key2": "3xLVmpEcV5kBpWta8neANdsrUd11EDx5E2ksNwk9BWhvcaPHFNFhnLn5UjPRTjvvfvUopwvkYSfGJKixFEdPC1Gb",
  "key3": "2vAPK3WcdgLA4PqPxA2zAvhD7J8EcL9Q35HLx1RnngZ4AmyT4qmMXHP8yR8a31mjU6cUZrMcoT9uFud2r1xSrDj",
  "key4": "34KBHwNstsXsA1jiy3ShXjpkvAyTtU2zuRx9mvekiKuPMW9oD3MCGWcv51WhYyJZAWAePsDPZzBggrmkyxrhmQZ7",
  "key5": "65HowereGwHdfR4WaAkzyjrJH5hNsJdJxZ4icYd3TqYo9F1gr8gFDSb75F5ArpwJW3WQgrnd4CnmzttuAxnnUc7Z",
  "key6": "5gvuZJ9Nh9dxgPpLACuvEytYJKKV6b7pYtxPX9VP3cDURGvjymUVQHFUV8ZbiyAGM95W9EkyeT5TBU8RS8fRfZ9v",
  "key7": "3sVksPuuqyuU1D5SDX7qWG6AWkhKhdRS9ryEVoJWNcNhiNtKsDy9jLJjhreVUHnQnMLAPXHnLG7f9sPc5gpeouSb",
  "key8": "2UQb5expjWwxG91NYhgUgtWD4hpYm2FoZ6KmJEQeU8riCyqgZB4LzHL1DN8uoMFS3uziyjkTWE35S3ACsZFScH9w",
  "key9": "4xZuCjW8SkGUTBQSsTiU7URRy1xWjz9fm5jGzCvnrz8L74rgKg7gyfXXuGoqQ2D6geRs43HoSv3dfVdcDQhr6hXW",
  "key10": "5sW9pMeDTjjC9bvsnLvravZsc9y6Fv9oweHdA4ehzF5LRMMGADCqxhczw5WVqJjE3tidBpv5Jed93tHmhfijXFHw",
  "key11": "5GoasZDwmoceFMujkmHyvf64PYk36obrN24RL1eYmzSnLyakD2UEUrYbJYjCzpD2cauf9WGt7g6FC8gbQrsANgdi",
  "key12": "38TKotp5XyyawTbjwKkozHLpJzJgWsTez5HEKRtwUmst3RUjBi8ji448ueST1HJ2Y88fDmZTPBzhG8CQZpuk1jk9",
  "key13": "H7AX4Q2K5UyPvckhYxytCkpBr9BnAVFxZxLTxsyyEGK2JvT7ctckxpqVSWjDrp4xKG3QXwGfDz1ZJyHQoVKdZTH",
  "key14": "9yHubN7JWFu4r1Hmb4XqSJJaWMuJtmegZCV7qp4bCj2PvETMBShNjdjMPDYvNmqB9TqJPDThH3gR16UDJcmp4Hf",
  "key15": "4etdr7dDrr9CUSFfyz28ACLd2ad71uqkkAHPdS56QHTZHtqcHfaSr71JFGNPpn1AY6TAqLw9fWbMXrxc7NV36rMc",
  "key16": "2jozg6Dk4prkEbhcX8GAH2TfjvD2v6EhLSL6EtqU81tTZ2TzZnxKEmMCcxRQQBUgPUhf28bppHB4WwXLnoD7h54c",
  "key17": "LL8VXo3H7EZ1mYFVHgcDqLuRuPNNRnpDXfCzeWDxc9tG5i9QSYs775CdBff6ui5ptG8zc7hChMyPRjGVGDzvTnr",
  "key18": "4EPdc4qSc7pKuTbMZzqrH5bfxZaR7fFbWtFny7bLsEodx2DrC9ynACndSCoEhuGuReprez4uGihc2DLnCFtm72oP",
  "key19": "5HGE2gxSUhMKaNMJo8D1k1hddgrUWGTcYtcCYpSPw3VaaVBoTVyvaPQjASmP2qBC4bko13yvFpjkHQXWx4RMB7aX",
  "key20": "4fZgCb5Fi21gRD3iEVskS3SRXBAbDpzE3b3zqy8vneHQ9bBxFPrc1pNThNgQnFoxFkX8W7Q1f45682o8JJKQgr7a",
  "key21": "3ewXDw9Pp4AzQhsymDatbum79m3ib85RW9hnZ9MJC45UyeV56a4wUgPYGZEWKsmBMWPqvdEfHJhjLi79QKWUwLsT",
  "key22": "Y1RoATMbchAQxb8XgA66xtJo9zLvCSnzKu53JP4gab1k9rcPcBgSG29cxymuE6WgPiJfqAasDZxx1GjduXLk7Yj",
  "key23": "2WiHywyg7AZRNhxTxEvhbWWqH4fiMgqZGc2oPxn6VaLFDvNXLjoDuFqCaPwMcVnWLgxFopp2ExGN1XB73TcDQzzN",
  "key24": "tvSjmAnGvgrHFJ35XHvzYwuCqxUbuySX9E1MFQqd59qQqCDpp5tJqZzwHMmqxjYmZ14WQq8PMNa1kPt7voeeRqG",
  "key25": "5QiHL6eocNtbkEMU5LZFsQJoVYLc8jXYc2vdUxQzN5PfNPpcYdLPBSqDph83ej3FL8PqH88a79R4YqMVDKRKc6Kf",
  "key26": "5cU9MLNwxv4SFGaSXsB1yJWtMFya9D18WBaff9hwCtp5ZW3sPWxWSDZksvCWftA2HvjduueZG1mtWKq7VUWMUYDs",
  "key27": "66zuDxY6LzT18TH39EqRaysfuN4zyfaSxqrwVA4NtpjJRU4csjTjjuHybeChtxL78ocuTBivbh1as2eujLK46DY8",
  "key28": "8EBJauroCd4kLKRLLtNvMvxz3UudyZCgazYaDgBCRGsLD7YWqrdtcvnE5rgyvdzGdKHwY7U1P2o4pBEjQNHsWVq",
  "key29": "Hj3gPmaQqbFHPC5zXmihFrrRmze8tZhpQfrio5KwHCckhZSCrXd4AJFW5Lq9kWBKF7yhgn6sP5Hmhc3oWgRQwYJ",
  "key30": "2jJKjDocagqhuGKGsoTsjKca4d6tWiAFGKW8Qdbwymns6Y3wBTNLvL9GSib3L5npmhDxTQAYN6LDg9Q2R783mwRf",
  "key31": "4BRyJdPzf78jQF8upW8TpPEzKQ8d75CbBaFe1f3cVfS8ixWNKgHJ3b4dH66Nmpjygpp4kvZK4Ptz6WqkuQWne6wf",
  "key32": "2xntxtDSyWKXBSxBUK4GbDXWGqVgHmZovJVUsqBJo4zZDX4A8TdD8QNkTtawMfmJsFz9CDJa1FoVXcifFkwrcC9b",
  "key33": "2jhYYPNqjqviMjnvc6Ka5QmARJQA5uakFYBHuTg8XB1qhZzcW4tpwJaXn8zJTj3sySArepvPWY3sE421zHytoHVf",
  "key34": "5JHu5ZRaX9soRux9uyifciYNf8FYv592zHQpZ17LsopG8wqsqdAuaJJiRoad7oNRtfQQK6Cp4yEPqwgRK8QrpNPT",
  "key35": "2qtFb6seHfz1iBBbYEePrGHVhwvLQxQa8KWPAMEWj93A4uqeUp12L8cfHvyCEfvEtE4cgXm1Er5zGXFcee64Sno3",
  "key36": "3eLGVp5UTc6fbGYTohmiULcRidXJL3WdTqMwjGvZrwcHoH3B4WosBW25wvAMFyk2VBhVawiaqe4tcy6rSnf4d9sM"
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
