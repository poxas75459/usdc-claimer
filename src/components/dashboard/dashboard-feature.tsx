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
    "e1hM2i2hT99TXuW8hETuB1pdBZ1RhNovSF8ZdPWPguxAJpQp92pd4me6Es2oACArsZwVAn9aLM9wfg1aBZfncF1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22XhQxaXozJtq5Na2XZcxVTFfjecSDtJargCDhCw9pSUo41DCK5PawzjK4RWkBUQVpyy9Mbb93yUirysQH3ifutV",
  "key1": "4VxEc7AP1PmGT1aQf61TrU8kLg6krD6L9nGExXQ8fYysiEhDDrkiYx1pGDJti8HcfwGRbx7DwSy4sGUVtcitrdyu",
  "key2": "45M7rynmzBd2GgwGVVcWVFiiyQzFFruz93zpT9GTUC1GkxTUPdJk2JveCDGxGHJwPF15316YPonJP4dro9AKWRni",
  "key3": "24pmvdCKCyR4v5xrRPG2JLcKpu2qAfSLx2Ym7eVjdwcQ3339dKv8fPfmbF8Xp5sfY5toP34kk92HX1xiwfgBM3S7",
  "key4": "3UL7cr3WZKFvkmNdx8MU45pVYgKSzjvNBHbaqbG22qEuN8EoRDWVKJtw3kFTZieSwaMS2tyq4Vf4g2GUB4DGuwGE",
  "key5": "2iTHruawsNgmtSNz2xFx6zcvLjTvC6H9npAq6uTW1p8jw9eF77Z6CQJptptwUNvSoMjYZJ2ZepRs9dC5P2ticYoL",
  "key6": "2wE77PNYVCJpkzVEcd34pzNpxobmYNbpawJHHkZfeRRTVQAQ3rgELVJoShHvVwSeMDAUEDmMi9doWL2SPVTj2MRH",
  "key7": "2ygkyaAtX9ESXhwiksV3svv25oSwYSMS3XovkRQgnjLLyB99aViXnsFTqRuudBnHLYEoSgiSCTTbGzhd5tJjFdc1",
  "key8": "4duhiwMwT36ZcZkpeoYGca5P4kqexfH2avJXURKYGxjiFbVzywT4YvFNB5ouQb3JbrDDpR6RszZW35e75tQN8zXm",
  "key9": "31q7oSNCHFcrX2S5mY6FTc5LgkC3va8DJt8GWn82dGt9sta1uTcgNMtNQ4JVBaqXsXWhtWS6S8iYnB3pT6oqzKzG",
  "key10": "GLx3jYQZmiDH1NFXE9wNbwqpLLL4qGNrUs98ELWmsfdZY4pdt6tYd2xjNGW9bJnrNY8B9yfpw1oZCVXHUq3gkVo",
  "key11": "5GotpveT8JkEWRcG9JN9WcYTA2HXbkkHrMsihm2eTabEcNJL1UunfR2saEiHTE2Yz43ZKnHgW4iSmx9a4Hu31kEm",
  "key12": "N8JAqxhP14HHWhaNTMBvbqm9S7qzc66JDBYUmzhc6tHpwYnKyVezqhWsdXgxmDxFmxFWan9eTf3Ypa8df4VzmSo",
  "key13": "uz6A87QvPg19A9DKwv1Aunv8R1YsJgtdAvFsF7464qofzHjt2cp5Zg66yrp9pwYMkjr8RW3wuNThgYASakC7mpR",
  "key14": "38yFUgBvUZidXSVioJcYhtQuXAPaTxp4zH3wR5w2qV5VGkR3PgqZjEb3xjSgQP6VT2x3aUafKguBkiQXd4SaTBvw",
  "key15": "3cj6CsoPjP14GMWea9zXYn56D5MKbKwuzy3zVKjRa22htjtPr2Yu6CQTpShHJvcU4anbkUBPUVY9Nxx7n564Dhed",
  "key16": "5yN8Fysj9T7abpPZc7ACKvcDCavEE6V7QwSApP7RBXN3Liz18FpfSkA9bpDrUAd6zaAdAWHQzSnwrM9UUhVEeejw",
  "key17": "53Lcnbg5QWMr3ztJPibWXHBX5ovMBz3z9tZoqUnXxg3GrhxrHizgP9eLKbVwJv8KwAoZo5UL3kN2ZkdScsk3c8xL",
  "key18": "36XAT3K52oxKn9bzRgFnqEDxcMiNbq17H4JBPJE4YqLqprrHQw6s6GSyB642CvZixvxNNfzc8Zg2vivkbwhf8C6Y",
  "key19": "5Yp2bTuTZSbe2EjRwCRfnvyDEh7C3wQz9KQymT39gTojuXjPDyFuKmMmszQ7Yk16tJFWo2j6igKzoeeprcVkTNH8",
  "key20": "5dcZyJXKvtDmBBdZB5tWh25bfvFHnxoAnXayWgRDLNpgBHwR4q429JMEwhZgmK3dbY9jcohiuJA5KGXG3yh7Ge7L",
  "key21": "4RmPQhMLDuC3eXUFQZxfk3aihnDSP4ybMt4n1zS1zBgRQtUVSgbdMtuA8eAemY4aVmiXiNXejDcJRKVRBd93ckDr",
  "key22": "26vMvb8jdYVjmTgs2fu8b6b6kMPfv5iuLACEknSgAXvwmdFvsUMbD2CLN3DVRNitdCkS7VngyAG4eeX7yUXKQnJC",
  "key23": "5ZK7XvHWhaN4N5tBsDTCjyYe9qF8FZub9gBnV8ro9ZUSyFXZMkC94SdCeS9KCmG9PBKv89E4Lh8YWB2WDFrmvqYN",
  "key24": "3rJY7yroBeLDK6fkpz2M6kZR7SVJQARTLpcKYkSoLeW7sCy9RXWS7rYM8N2rduq5aKxVN153mrBntaKgkvBQJYYq",
  "key25": "HTJTsLECdNLcqEqYib8vZTAvYaHtqes5TqmfZWKGwQuXhCyPih8epwZCAsbE8Ex3J2uN2XidqapeqB7CxiMdTa2",
  "key26": "4fz6kX1uRAomvQykEww4yt366oUnPeXXJcPAnhXKtSjLbRiiaVWJuokyuaV8qKPUgJkfgwFpsGfrhg6nDo455c1a",
  "key27": "67NH8TrZz2EvN5QMucaNniqkry5GxpApxvCPbtq5gntD5YonusN7gAyaCqQCAXu7JcTUCRZKz3NrZB1kZpQdroqk",
  "key28": "3tYuihPvK5Sd7kGKnuHQQcJ2Rkj8UK99opuddcscCB6J2A1CV1KYn1ynYKrwsJVUMxyKpMcJPmuqyJo83ZqjDiuA",
  "key29": "5KkXUN4c1bfVxrtAqrVjGyGyhavRgibLXRkxhg1PDfajBkuWrnHb4HRpfZnGeGngpAAmDS55RPzYz5cQoXdzTjXB",
  "key30": "5dqAwpQK5fCv2GKaYqQMtQ91W9MV1CUAw6XPaHrVWEqp4X8JVcySeKuEs8FGqnmvVWsPLeeuY4UmtFMSKKkxmJWR",
  "key31": "5oeie2xY37smPumtYoZsXk1eGkbxNF3t2He9gu8zpk5QHrR81X3WGdJHAS8cTLrmiYdJNpj4EcwLauLzcMcLnMmj",
  "key32": "3uyzpKbrvVtQk1SWpuoAUjVcue8EGjRerjyiMeq1ioiTaQfGGi2moXWruKuxUYY8tenTL12qToeiCFoPuyLYNFa8",
  "key33": "XLr4RQfso1STkbRL3Ekx1yULStMHGjVT9gRT31dNGE6Uq56Qtvm5tikYujvjY54HRtoeoahDxVcaCUvyx9NEEK1",
  "key34": "2ux9hKXrx6y2g6vA4wTm5HxNyYPkRYu8gnwcATftaJV7YfdpuMgQjMKvTg19tGXq6QQNCTiXjxKpgtwqcRE4M8Be",
  "key35": "iSB3ZTNk6f9yUciPpmDyf3vM4tZa3PqB1X2rHm5fKxuRwMve7Qpkxftt6R1whowJ6hGaqksgvheMPrRaCSFWAv6",
  "key36": "xmBsytW3ZCpu6gUaEhPkpKhUzapyqjYSFjxyXpiJVAMgAyYuzXa1QsUKNqk6Y3P8KRJ4qUE8xEcYaE7N8TSQf7o",
  "key37": "4UhyVkcpb9FantXUH7ZpSygBbGda4isGd34nHm41xAnNevzykefeW8HAdwZ1Wm5im72UGJerEATSY2vxHKbZPQxX",
  "key38": "2jQxN74WZavXdRU2PegKjSd3sTVpsovo5AUD8J174xX6EmRwuvxZGewuWWMfrZcgbG5rQdxbQHxqzyHZmrbFgT2K",
  "key39": "5dYNgwAnHnshY7R3zJWTgpsyWPsnVeriBfgBZSXsCsS5FrV7PiHJ8rHXRSn6Z92XGMZhLjPLijAbsuKn5PyaUjAK",
  "key40": "55hjX64HDpPrdFQcaMwYwJvEmbZe9Z8g4dDEv54bnbDkWDUeBMq4zjsjiyuQvUZ79KVFAxTemHpsrCrQ3kzy3Lr9",
  "key41": "4mbKHD3QAHriAFhEWi2YscF7apDkkBtRP581FuHMcqa6DZPc1aLUmp5wexNqSLz2m711HUjkSK9rojAdaDyAg2Ro",
  "key42": "y7wpgS7SAHrW4B46gvZ5d5ah2C2VW6yPwBcqgVr9wedcYe2qYotFk7B88MusX7JsDVKA9z7MGUyqNkjU6agP7Pc",
  "key43": "hVkrirQNBWDEBFWeU2YAkbTUfPopHxKW8Fp2ikVdk9U8s7njsqpmeQuq7GMoj2AzdFRBi2FyYJbbbqKs4mEmR7P"
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
