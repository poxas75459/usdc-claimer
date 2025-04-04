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
    "2BQYujgCBQtfP5BQeSthGVSvBapmBU76df6AUWgnjKE1RmafhWbeYikQk1Xn6vz2T8satiF9EW6nrujiBmVtwFHR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59ihMqoqXJnxC3R6YxGteAfC1wix7UdeqgAvUhcWGYD3pG7fQUNp1cXwATkSU7BvoCvKk3wYRxtpgLNRGDMAiCY5",
  "key1": "rVq3dtk9iYg6wE6T2jdtCH39oPRr4U3BHwJaft1CV4pxQndScKCg3QyoEQfgtrHiytTYTNS4q5qrrNFV6CJy5wm",
  "key2": "4nkLKxWecRGEESkbf8kQxELBfnA4HSExufHRMo1uNJXYMjGnUjV5SrvSbRrUa5r62mWcj7U4Togf7UZZuPicrvvd",
  "key3": "vhD4d6JzZw2Js3qudJDjcyJ5vseCZ43jeKaydQ2kJBRcW1vw3vaRC5WWKdnnf74SurPs8EeVgBnKQkvdSEXg2a4",
  "key4": "3dNKLRfigBEyWcKi6LJwMMo3hTvAnPZ1HbqEJxo7vkYouRv8VsJyHFtubq2xvicmgHDUAvfxeYYr5kmFt19aKnEe",
  "key5": "FMPPZsVmPfjFAGPpWvFJUM2c46Dq5RcZKWf2MPe66PKM4r38ZkTE65ZzjLCHr5yL5WfSbg9XYruhmgDGbgX8zqy",
  "key6": "2YB2otEs2bS4Bq5NoBLmu5Ht1o6BiWi6J2bDr36d7mNH8Q97E1vkydsPL2wn5QeUY4GBk2cyLapBBj3fdTW75giK",
  "key7": "4CUD6Nnv32ag6rr8Nb7iyGvGtYzeF9vg7wvwNDBpPN1f9HLe7sRPdX6Sc7JxZMjH8TKVmeLetzJCqwcrEoh3tQQh",
  "key8": "zfxKipcUHBRTUrPNCW5UcJ85pCcVL2CKruzwJZ73pHa1ikesqApUWHw2QkW4X8RczbXZwxqRqErLrixcdN1W6vn",
  "key9": "5bPudnooKxF5pCpR7B3qySSuGVarXPLyrXohTxGVJFyNntM5V7n594Zm1tVUoU9LgjLcwUVhJ4PjCJRMouf3VW9t",
  "key10": "3Aguvjp5uGxBHjRwyUNRhfcWej85EyfUsJvQtoavj2yBsngLp1iuTsyHTAdnRrWGVV3RLLrqjqEv9KssN6qKzugJ",
  "key11": "4EASAUz6xFo54JoqjhJw8GuruM1f3bEQfeVXm2ojQRh6M3XxEf59SuQUKugUqzQrubxpumfkYWL18314wmhq2VhU",
  "key12": "ZF6hodSC66oYNLJRg8TZQyAUg2pWdjcdRg6wfBkULi6UNYfvyP75dw3rGUf7NoLnRSagrdytyv37VbH95Wjmxtr",
  "key13": "41L7gJ11Ta6AzTza2GCzL2pC5JXKCzAW4PnCvTV7YdQSwzo6mYhGDWX4Dz4qQa5zXAYwfaZ2jQYU9dq9bnhb1L9d",
  "key14": "2avCmUV6LYUwSr9MFLLHTTjBx2v6vXd41dj6qbJC2unPhTUtTue54QneBqHYncVz5V9MBE2zBoyadLfvVDdbYfV2",
  "key15": "c4Bi5NZBP8bsHMCLg1rLaBqWNSRqGmUhDrMBCQX2utMjgLjLsUD39EyZHoABxX93kzNtr8EjMQZa8Uhv9EKpUXi",
  "key16": "5eeQskS69aYuYvaqoRsq9bGSfX7dS9chUmeim4YFEF1yPc8Cx5KQkncgR4PoWL6hBaEwfUkAEh6xNCrCaXChiyaY",
  "key17": "2CtUDHhrseCyBTBuAHy2Fd59prmH9m2jDyHzrYVCrMPP9XgBHRr7kuHvRDPXaUBcEHmnaJ9PkixTSWfGM5a8VnZ7",
  "key18": "3koXcJsqVbiUJG4ZKY9RLkyURM7P7hTMy6ZDeb5GLhStXfNCAG2r6tkpBDFXbU7VwwiG5RgobaqYyBoyNq7H8yQJ",
  "key19": "64DzNFvLEtEdY6Boxw3BBy5ZPxTjCgKfCUMuVxjhvzGS5c1MLURNRvW3E6gnLCugf3GNYvkB617qa3e9MQhtuwcZ",
  "key20": "5wcq5ZwuBUqJshaNRzTajPEd8GDUvAXjGgs6zjroEeSSh4AVAMJTvipwWnDUu3GQjyMnsj99hkjbcTRqJuiF4Ahm",
  "key21": "tTQ295PgfwPiEvHXDfVmAunegeuVDWDoapRJ7TiUhgooko3yLYiXS1EcJszexxJXhUFxZaV4YUZU4UN6NbiqWm6",
  "key22": "z31RWhGv4ygNcYNPZmR1H3h1xB1a6fRViNo3yXnFR3cPGB3mG5ssEuD1pguXkG3PGQzHS7Nm8cG9LxrGG5aM8yG",
  "key23": "2sFKbNo1MLi8pcmq9yw2qukwSCS2aR53sqgMJh1rwQsEE3wdziAcKbTyfqaJrUaa5nkNwkhw88yXAB5wTiaHEZqD",
  "key24": "2SQ4KDQq7V6LRSW46LaFEoJUmXTHYugWN53ksf6HCEM7NTHSHEvTAKXKT3c7FHmU4Xjjia7botxmrvhbzLKWwbnP",
  "key25": "4XL7phnio7eWB8cxWwuDhzRuHBRJGhgZTQ5hK5tpWcVPiuzdWCqsp7SsAbd8XhQuNbD1duBwyG4NzVnpXjKMeraK",
  "key26": "4Skq93MHjsQiLhNXw34cpDnn8TyaAFQPCArrNWvsRwQXx64TUiSrV9FMbwisgbCuknXayjq1d4JMDXvj9JWMnp1J",
  "key27": "23NzkTQWXnr4SoVWdwwcbdFXt1VWPUK4ush1hdpdCR7SUL9pdBE9BGnDd9WMrfVxahHoPeuhXqqfsGwDACHuhzgL",
  "key28": "5HauKSRSAAUrbnCkpwy2dEULDaX5n8HGnbTz7eQMhuMPYouRKmg5QA9VVpUC2Ci3eKzZ4x6C4iZD4Z1R3NCGQR4m",
  "key29": "3aivoDG9aV2J8x8uCPeZALEV3jaA9ctWuDEPntxFQ9x1VgF98yzSzjmkozTCEQRmZXeNFpaUS47jxSTW2jsYadgF",
  "key30": "PsHg7ULaG34yqudBAZR68eGaLRWFh49jnKhvcmpiynrXLbZ21PnBqxRE2kTrVnczoF6QN3gEyp83ngrxz5zh6wb",
  "key31": "4xQh9KxiizogcKuBRTeY1bQNuQieZCx3hg8H12sDNr27XiD1V1DHT9JeUt5SJ3k7nX7PbppmJqFgT6Hkwsz28Uyx",
  "key32": "2UwVGgFDQfHwgcUMkW5E7Q96vBrGn2wenaeVcRJWA81WNEo1eHZTbnmch1rkLyXaqgUCNUwFxsfXHLreMmJxq2ep",
  "key33": "dJtSYSg3vdStWwDRmVyr5WwUTrgZN4L1p1eebAqu5XedFwD6DvDrTjHnaC5e446Rmz3MCZCad9qbYrjMvcY884p",
  "key34": "6oFphuB5LDG2V1gUGAJraMc9GLhftob8bM4igChMUnLh4PWrkQczTwzHtevH1EzHHBYNjtjo3w9Y6RsTg5KLMVe",
  "key35": "wmNbeSQmBNfcGr95CvyBmNsJLvGCcC2trFgK7VM5Bk2qPNaGdubYnehTCtKrWG8yPQXiz4AfCf7U2qNkT1MdHmN",
  "key36": "2YjV5m3NCnopXWT6Y5D4riF2MPP8WNv2r6jVNEcf7T1DH8HtasNqNtJtqMQvAHMi2arxqfbhpDB7EXZq6neEzrh6",
  "key37": "2DU5CwfVVmS72T8zAqWoRFMn5Ao5EYdRGS8vUXZY31R7rAQfNrwJ2G1K1asg3n2AqnHPSZ1Qcragfzr5DXb8wgnh",
  "key38": "2bxwrufNvLMHBAy6F66ntzjwW1KKYurAQpgysNa8HUa74eJBjSx1Y4HMfmfHAD4hFU6jbhJMViKVpvrkVFP7ZB5e",
  "key39": "awiHhAx5FnrMPM6ibk4TvCGf3E4jZrTdSo7TQa533QCSkugFuLABijHXPa4uHaZ9XYw8hbkA5oJbY35QDNxqGdp",
  "key40": "2PitS7iEfoHCkYAZnkjaL2rgL5DevUMdiQrdxwo7W2ZjReMqVDxxaX43JEPtC1FCuHEZxCQE52Ux9KRML9RRYv1V"
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
