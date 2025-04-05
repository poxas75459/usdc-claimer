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
    "4akeju2GVXZdthLerqWNh4X9B5qMftKJAZb8hAThFbMUGjJHh7pudZZZYCfY6zDiSSzL3esBU3RXGeGxKeEbgxVn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jNPsrT3yKMBv22NwaTyEeJpF44sPiTJsgHd6Y7BBXZw7mCGf98BgNWCaC86HP8V8RGNumEZ3NuLBwZKQNYdqhRc",
  "key1": "3VmnLtVfYN7LWYeaoDEdEEq9ghrsayZYeKQYm2kCgsF6EXLX7vVuATJsE8VXCTc9WgBjJoQfi1dTcpKGc2gwqVdm",
  "key2": "4si9K1wrtMzt5KvaXKZfFmPt67oLWAkudRJq5dLoiQyWcpasgpWqGj91CQh8U2RytT2otpX2zH8YMb8zLkZsdJhX",
  "key3": "42taVjFY94RQbM21morEDqKhcbyQgShgWhHwL145wgq664TDEJ4ZhqoWwi9K2Dy1byietuJe3PV8uA2mnPTBb5on",
  "key4": "23s1ERowg6yqfkWyFvsmyWFj4yFzUzfdasu1crGf9mXztqMs6gcadjD5AB4WrbDmRbFMuRo4dqjp6iL7Wk6hAqEC",
  "key5": "2Fq6Q2tmzYRavJn6fyXWazBVUHj2TZw1ZNKQjtLzgmXqeYo9YDebPZYA69AzkEjzGqnrXN5U2FmuXHdHhfAM7tti",
  "key6": "5c6jjBebTzvaVdkHh7eoR7cGqypbWPN1FS6AaBgffuKQu8VQ58HN5HkvRV3cLDRv6SG6kv8TkfdonQU9MYsKXAXm",
  "key7": "3j8H82drVZg56QR9Q6ZkhJiYbeoBng8nGr1j6iv5stY9oKjVDMqh6QFaJR4C51pGSBMBY78yCszhiqvJ5jEWBBFM",
  "key8": "2fyu2dKE7Fe8EWW5QtkaRNRm9WX6GGsADrnEQ2gyuW3M9VPTqEqXG3BwVNJ3kR4iH1EDbC4asEzYJaccWwKtcoJk",
  "key9": "3T9L5vzfuNWQWwTBEoTr9DXgibU7Z4EVHUhQB93GwjGSgYonaxTkArcVtBZy7qzAz2mhvqMkRjLg8y593V3wGwpj",
  "key10": "GdqvA5FWXvHkGDo8vknwZcFoWXnivfpd55JCzWGYdpfbZ9ZCEB4hjmrSZN3As1srZCfa5tU4CmAyRqkL1bSwkBs",
  "key11": "42TM6SngMDTn6PJNgAuhQAKg5EqcpFy3mnhiCkjRZtR4hMSpkWagjvVNGGx9d4tKBjWqzcqREvcPiXUepfLdRw39",
  "key12": "3N7nft3Ubdj2qpxnmsfPdbqdBdsx4SvQpnDhBBLQySeGN7vdncuPp9NAiMJjTGuySwXJp5D43UpfQTBj26wed9yu",
  "key13": "2gpJRChxTGPC1uVwtUuxahPHpQ89DAgHLPhrgyAGP8Kf3LzzD6Q4tjzSQ4BSeeFcTWUCX4jgk2fW1YeQZPYa24v9",
  "key14": "56xoyyLHJSF8tLoggRBtGQRQbaKm86M2m2Pb2g9iYBa1uu1CsmbvzdmksLzQ41mfMYCTbnSrcMa1ZLWvJTsx1uqX",
  "key15": "5geEbqbWDGLmGWTjduj6j64fJe45yg74h2PbNhNjj4WGSCRHayH37k5uumAj7x8WJFs6bQ3CLACwQeuHasURksXW",
  "key16": "4kErHZFT6UK5CAk575rz2JBrWTpE7kMNi7xzoqRffy9TQcBL1uButzK3BdsE6f87PU9DswPFftpcj2TWiq23BMuy",
  "key17": "3SrnMvLTN4M3NBxQfWQcaDmAWwJwidDdtSkyVTnqYPwzGhsrQormJNwvuKSCSkUJ2K7waQpjq54U7beAJGYZ4mRy",
  "key18": "2cywYDATBTz9UFcBBiMLnvecM3QULuvwogJoW1aQCn2sCzffpwCRTaypSCoHprLPjXUZ4ScWM5jDtieYCzEYVByL",
  "key19": "2TWQeSM6dsUa5wZxHELvHYWDPZwKDFgo1EBu4MKnF7wiaysgp9fevn9sxjfGcHEZcNToaHiwQBdNRKAR3pxUGzKR",
  "key20": "3WABxy8B9zBSAaDLXAGmAYWxvc8dNWUDb6sP493QMzBKtwu6DeCTZDL5VtopL8njm4MjZbh9aH25V4wQULBn8U7q",
  "key21": "4rUqJAmq6M7Re3WUa99SFC8MFo61W3aRYN3NaQbvKz6iunzjGbj7Je7CzjTRN9uWPHE3ZBQnZ39bZDJWZvjDRxLA",
  "key22": "2EGRnaUPuk7FdVdTYxSVY8iFM4FfsV4cajWfvP21dJXNRMyQ1PJnX1RQ8Y1jTxWYkm75DzqUVKWU81VLqusMZy9x",
  "key23": "53XMfjw9djzKuYYbBC1W7TfSxUrhttJwEgrpZtojL8gK6LCmzAUWS6mSCpk762mCmCR9kVPbV6jZUE5ggpzzE67M",
  "key24": "415uSa9MuF2NQ2Pe5PdeTtbEYJQURD9UnUTiyYvY7S1eePDVbMNyXKbWK32UsqTV9L5TBkANrmYbYitPfUeevqqf",
  "key25": "TyyDj6BM7kEYixn2rjnDoJq72yDVXpwB7vzYZxVd6yz7kjASLG24JmzryYx41mhcSMF5XWTFKFZfqafJb8xjqxR",
  "key26": "2HA2TJW26D52jUrVFckfKKwwEVnm7NMoqrCoB4EU6FpcRYZXH7f6Fq9T2X82ggYmHJh4T3J67PxEYviAL6cdY5ZC",
  "key27": "53xRSnAJUW2JdYZWdyPApMQhwkCUP4QUAyBKgbX6tPseKoVTz8cMBo6me9fXZ3Lra4qXiGagN5ZTYSJXC7xrEzTo",
  "key28": "6JkCV7epvksQy2i6wb6Z9MRxYcRBeqZh9Z2DNZd1e5RERhwgdF62Wa62RJkRr9gMQ7ytyvGpWPoDxkM7NkKVHQD",
  "key29": "5CNnp8YsrjFSu12gZjBo57Jh4mFpT4vub6EJH8Drb5nkNr9csJTYJwHUaRcWyuz6iY9xXZjN6aZQXakFX1JU3gVN",
  "key30": "2YbSRH2Mf6jzi83DQsxxAVED4optbbaDHk8i37YWBAHNN4AsgCndgnVdBpuxV1NAa67yQNbtAVNnxkVhbabrwyPv",
  "key31": "3rp7zaZPFbdxpbfH338GuuoeQNC6t79vDREc8HobkschTzkAn7ZMEmV58Ss5w91dDQyfhCEL65JhsmijPH1j9U9W",
  "key32": "3EhxUGXptGgASU3XLNxr665eaeWxghGrHFJ7STYr96nPcfHzioTRCHrbR8vxNA1NAFiezePYNWU8JXhphWYpdHoT",
  "key33": "JceuxzYYEr9DVVZqJWAmYS4bBPYsyqNAVP9sruVXpDUye4TGody3usjwFF5CktxFjinEp7MKpxPgXKrZitX6bYu",
  "key34": "3UE5XXyLnRgP616CStkMe6kM7RA98E3ES2kgk9smVfWS4X43bTx7x2yMLGQYsr7oAHC8XYuEt1kXbdx8iu6dFunc",
  "key35": "2knzsMQ8v9fFDuib4duyARvcxTNJopWjKCusP4Z7d1GB4wyuVouw5ewH31Y1jN7F2xELPPNpBr6vk5goJLkhWrzD",
  "key36": "2M77VLho3p8Bimo5uMd48Uko5Sv8kEUPT6YpMgftpmj5nFuzFLwqK7d88W67FZBAPsnzq4sAYAsAUkAg2JEbiJWo",
  "key37": "2SAi4MthgAN8kzSBDZSgWPr4T9KzyDsh45MmaSg2sAkrRyzT26v6DwxXQjEZofTSXiDKbaPo4Dr2LVz3wJAF7YzD",
  "key38": "5r8B7VfJLCyKwRmLLUYF6eoNv2hNZN4i5R9YSW1e9TBAa4uDuD9Y3jWFsSCxzdWncwEeg1nks8hKggwynN5DvKNL",
  "key39": "3ypiV4yig62S252ukLMW974gWnooiawbTtZZ3goq9PvWhGZRB6cRAXtqVEy5Zw5a8WvQb6Mbp6ZyjfW4JJUYErNx",
  "key40": "3KfQDcc1fMdPmaSjJEmFfYSHDAASTJJQMGSpukRBCdF26gmjk2N49UcaiG4ajhywysFmA7Rwy2QbdjuzRnaFnPvw",
  "key41": "Vy18fn4KcKxKkUz4dSYP5wMkT4L4LraeEhcnzbY9GotLVq3C58dZZBpjajHCuMhCK5CWP1h7MAA957MAofT3xyE",
  "key42": "Xak14u7bUFRJDmFkyeXd4h5i6t4HddT4ts4b6hJX6HYqYe2frprqsQmJZ5HSADWm6Xqf6xZWrgevm5UwSF5CYkq"
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
