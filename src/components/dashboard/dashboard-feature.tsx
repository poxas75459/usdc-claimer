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
    "4wRZgyYHuAfFSwbUX5qPAjpY5N4t5GNfDZT7RMMG8Te8PGZaB8vN4AAACbQ26a597KqrmRUFAUMmoqcXmjrdpKk8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wAhazqMfvpJBRyW6oDgADGuAkTmxC57p36pFEv5KR7uzQUR6rEqFkPDBatFMu4KyMpAoK45KQrivzw8kUmpkTfA",
  "key1": "4Nwas5Z9xuADqmbeF1X78R7gqHoaa2AJFrJbxfJ6CVmcGM16kufS3zSbtZgEHne2jaBqTZPpPjKYpfGTka3Ynh2H",
  "key2": "zW3ZN8h1azcHzeCtaZAwbrgwgNtAGaHxSAH1AysLKJHwLrRVYcKPi1cnwdC3jRPoMqpXT4JPpnVSDoMg7VpkDuN",
  "key3": "3XzUFqrowYiPRWiUUxu5yE1hp3roHc4APMwaR3fMVjrzyhegvXcPZP8DrvBH5C8r3WrDYMjgnjupiuEnG6snXxVq",
  "key4": "5T4jxrrrxT4swZDytZgNANzwMPjv2yZguN7kQKsnN5tUANxbK5jidFDdTqCM36hJJg6vFRFe1b62qYZVKvTLRjvE",
  "key5": "Q948mqCPoJDuhBqS5WpUna2PyLxakPEC54kcE95Y4MjtLFqstiymW7ysv3egZPfzTKatxVLq6kAxPVCiNjpetRY",
  "key6": "r2B3oMiaL3qb9B55cLdPZwYeeQtmBs4o2bhycnX6Jphct5hFnDP279FTWWsv7LNEkxYKF1o1FKgxCJPVVfzFpNE",
  "key7": "52qqiwPD6xRKHhUXUFvVwH8cNGhaJkQUsAsWNfyic1gzYFVRpDxZgBUyL7WyMrKsYJhmmiFEoYqsk53T457xZM1E",
  "key8": "2WPQciWswRW7vCizWtygXjvNnEzdRJSobGLuosqYLUrkHzhkwTfgFYJdodXWfqnUnP86BMzTuy1DtREctFjYKb7m",
  "key9": "4KYTT5So9nxadZx1UoiBgHnfezV6qtdZqFPB9dAm1gHcutPnyM5FuVPtVg4Japg7wNgZeLQGLGg3iuNLBfX6XgzK",
  "key10": "2FSqzZzvRVpkkPBRp6N9giPvJYzLiZYMP4yc3WcSVDFzGXtc2GhV9iBdPSWKVEDPsqYRhuq1TcDhADcMvcnb2GU5",
  "key11": "VQigtcXBJsuuP6h8bmBEvTh2CiLK7ocVqjeNQCAEGydZoSBo31kAmBfvKM8Bhporx5stXzuLcgnvzry7wY9U4S3",
  "key12": "jfQ9XJiMyCdFUSGxsWREVjzpCdHy3m2hYWFAfGv2JG6bJibYM8UsuvdfBuQDEUXATYyKhybed5ofu4jGsHiEqPq",
  "key13": "3GGw2WSa1tAkPxKiMZpJsVx8WZbXfY537PvaToc7tzjb1yK9yKtoSgXYsQigyDg6jUQrNdprZpBLiprWJ7i5WcfT",
  "key14": "3oKh5iLyccxfkDHP9Mq9aCGZzuCTTJXZxG8K1GzGsxsXjZzkrajpPZfq5rKUSMfp5ckAq1vtf6ZKJvoidneqmxer",
  "key15": "3cjduJ1pD2U2wHxVF9vRnNRZqc3f4X2dZVFXJez4rpJvqfska3xsaCvEVuWM9WEQLZ8cvmpBHbCYhnCKXayC5gGp",
  "key16": "4TU3ohAJFv1nriNLUwuEQrGPStWAE53FbTP1DZtTCghqKSqcCaW9gnpvScje6BRuA9eAmpHdRohFE2LnRBTDuZ6m",
  "key17": "5U4L2E7vqLNwFUfxR2KrLKFqo5xr3MdsnbiaJsbW9uTybRnw7Vjj4rQqo29j6ySJziED9QFTJHzmFKTVaQPJ8sEz",
  "key18": "5guhGydZVSznQopGtpZAChb6EZyeXCqWL5TK1ruP3BYk4T3XPYqTDWqSpeLZR4EcWfzvS6PuNhB6iX8Sk1DTzu3V",
  "key19": "2C4curSkZMN4JEmYusZfud9dsVfuvfEHJMdbJSw37z7gye5bsrRvwYUwjVrw8HEXMxQVkyp1n4wjQZnDxi8ZJ9Kt",
  "key20": "5xFQ2UBqZwoNeWNzcJUZEibZLAG4JQiP1gLYarajWRhESGkt3GNXTHXztLUkhf5tpF2kFvEgqZoNHcEQT9VGcU3A",
  "key21": "5CgdffxWRwGER7a4gaLKEio78oFwGBJtDNAqqwCDoCt3EW5sXzW45a3vSYJM69ZfcC3m4Kza5d7h1Ubbi2ivfa46",
  "key22": "4oFXCGw9AUXdK8hRLT9kaPLhE5V8QGse2zxhk8a7DV4MT7bC1V4K86UBaF7UUNssfpJyRGN8CTWmZFNoypQ6jQrw",
  "key23": "WwzbzdehNREyn4bCQUXasXaWbHj5TWApFE22DQxVzDDwCDsvdU7rpyi3hx96q1jZREEV6fRvr2csZdmDBLiv7PG",
  "key24": "5RdGHoFympLPYUhxEsgWjKTe22ZMp2DwKi6J2mopewybX4oezy18cq8PchE3DMkmC6K93XxHmEKbkxziEjDFo6kA",
  "key25": "1f2QgXQ1VWM1gmy6abLwdvZCtFSMUK6pRy5iMQwYKrQWiu9HmbhZ3kcACJQ1fQU8n7nanXXrrV8ETusFfu6Dabk",
  "key26": "3PEHCHSZx7pWUxVh48FfZ8ibj8xEcCtQtVix6sbBqEzgun67g4JteddXcp8G3Z6K54zzfTUfVEG3UXyaeaDSz7cN",
  "key27": "43xengXwsh3saUYRkWCgeiEak44Cxc2Y4bzKkrFF767Tk7iaNj5Dh6r9B585KEhyMymDjHnqjPtqXXGsn4Wus38F",
  "key28": "5VeVfrJp1P5yTNNGHsDix24tWWeZmdy2KWNWf3nGAFRbEpfg7rdRH46QzSuYrwQHgBZMVRJzVMbinnYnRCwg4xej",
  "key29": "5stjaskivnGmSP6FGdrbZLtb84JhS1C55ZAs71xgmaYGH9uNqvdhrdMBCHKH6yz9xJCQGTgFtVTEUbptzjroeRCN",
  "key30": "1W8QEJzWXTuMiyHyqRX8zAKRWXmz225fVNQdHmLNNGiu8qtnk7ZNLPStxmzWKCxKcEDLy2Ph1Rv7G6ZkLW4KREr",
  "key31": "3iguoFrdAeDKzQipSttakHSDfcFnnfdCbiUFMvHYd3wZgEgBQejWTMzYYAUfyPZhu9F7TV6sbw7bPeg5VJkFhLq6",
  "key32": "2poAHchVtspEX6dgt4zg89491EPyBFmv12rqnK1ug4UJ8hLXsSS83WhokApR9Rgx9mUBb6v44QmxQeM7wv1HrBch",
  "key33": "V1V4m46hMWU6mWBb8tghPKw72qfsa1RbpnsyCmf3tR4MqAp9dVBdu6ikMY1arXAoSMRfprvqWMGXy1YxxMdK58A",
  "key34": "5qavzJ6iuKj2MUvtj7sqEiAqGtZGemSjNPwLLPC9dAgp9DjwCsHVwiETvVCcLwPnJsZRbpEHXC5ZfmTWT1BMQLj8",
  "key35": "5VhmUXomaqoaDSHh99tAMGkQoU244crNsnMzu5YYia5Pp4cHzM2h5K237WCLr88dLPp1D15bU1oeg7jrayfkPx82",
  "key36": "3w7WrLvAyR7yPyXGPGBXBCe6F3vPq4kYJNHDc6BBPW8tMf9nkdXUDnhcdDUCLnzjjm2F4oogJUQJm7LyKqmXxgZA",
  "key37": "2Z5ELVQswBMUngfmZkvGoucBnjk5KcRaZEVAvXrr6dgKem483MuC8HeNTPRsN5LuhooMEaCYpJyKdXbzxPE7w4L5",
  "key38": "5jtB1TGLBzgQjWNtVkLHwp83TgxU6J9wk7FAgz2p9yecLkaQRWXkGn2zv1eLPtKVfC3Z61GTdpsPzm7b7E6roS42",
  "key39": "23fJpTyS2A3nwUgJzkLA2BEKozSWWgCpYdi4CKTQSgSigDpP8uCQFXpYAvC1rB96HuFrAg68yXiUb2Sw1TMieh9G",
  "key40": "3Q7h341C4my3y59dGADSVX35UK9otvKKeUu4aBUf4C81RGXwpmb6UwZj3Tvix6kdC7ziDSrgxRrsSrw2cXMPfNpL",
  "key41": "3WyZ15qWXPaEQB5hi92Ty5f3Ykd2BgoSQ9DJPGGAHw5N291F4qM6PM9UWZH1ztmwf29oeUm7Zm21nftQbYBqs7ah",
  "key42": "3GFv9PvzDJTy2VMsBcHMSMVTCMwpUhEjgAKo2ykPV2oHqgRB1gUKML13aVDpYVNP79AdZTaqPVFfPa15QMeiB4AX",
  "key43": "5rUkRSayvUSBhJircEbL9Fbq6c2CANjxn8zjM8deAUU6eFhwiVEsXec1ufsktTAxBkFdSXdzvAyVNHBoRNMD7TCm",
  "key44": "2WEzmcUibKqqtjCWrN3h71Nsb36bTB5PBt6k8o6Y9ND2oF2GZwQUgEkpqBpmW6hH6LviVj1fZVhSD1dVgC8yQeJM",
  "key45": "VMGTC5WJ46Aeu3gZRYhPSKGiR7mHXnkhGe3i84jYDrHAgrkuQ5njiyFZmNxpMRkamgXceVp63DWRKkfsdGJ1ENq"
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
