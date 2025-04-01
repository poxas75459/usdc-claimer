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
    "4D6Bfj3b36Chio9J3jjn7abH9qwoafDiTixSnBagPDHyhGG2LMe2xspKCrSS1BeZLiwXKMGR5HTYuFeRxBdcN1xd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eFBhLY3eV9umdFG48UxRpkDEj3zr6MDWnzMgDHmNPYDuamNrpwiS3HNMckZ1ot8yk7mbKfhQ3mtWhL9wnTd6HDv",
  "key1": "5bZEeXFapL4Z7QPrUkgZeB3FmQStRwKbMQQMxTbLamup8zGmXR8pmMAQ685dbYE1GkJmFHE3ypjwLrvmqssPACiz",
  "key2": "8KsJVdqyAp8RU23JReLGNuUSakHWeTCczdwURxbDH9v7BivTzVVjuxh6jwStxTBQoJxyxM5TmUJB6Lj6YXcDAGZ",
  "key3": "Bub1ofLTRcpB2uCipeRT8VqgsAc7nAsfWqbCWhiGxVwNvesGmCjdrvrRUKiZWF7boDBgHt8xe8fHRFdPCpVdwgw",
  "key4": "2xCrSeh3dtW7mP62f2ecEnD5ebcnFNKJEoghUMed2tqmpLj8PZDhMtRcqJBo2qBbDADJp6scMKbz24pRhwh8Asxv",
  "key5": "Cdhgbf9umm8JwXhyaXVCy5WYP3XjJJBQ9mp9cvpJzpWgnRee7vFc2g32A7B5HCgXEx6qd7Vp9QXBag1dLZckacd",
  "key6": "4ZB9TSVXZjDkdhMGktPRwHBmu7m4mWncgtSPn4P4F96iTeiSVvh2NuhkFm1iuXgZDsqhfZPMfa5yAWzTCv1tTFck",
  "key7": "59Jw2SbqpPM3ftZKpDXTsYis68wh2gAD7JCcY2otCR6R3risv1DsWd6kjpbqD7aXCc4J7hYp7JfiJ1ERaZwRHwtG",
  "key8": "3WDkERizbmfQ2aDPwB1Kqv6nkNDRwNbnycJ1AUFNaJNi7nKJACoAqRRwsqxKanLq3rMPPZ9RwWpu63uD94C3f9Js",
  "key9": "4y9wwXsgWFLtsMJv4haRAi1rqLSaoyVhB5LYPUskS6cbu8qxp7NbjjKMiabWKRrRbsGdxXzi1dHZirhYskuQfpfW",
  "key10": "5CiKEhdc5acTqJnJZ3pg1Z9ZAHBXxxCSF9xnmGXVmkZDovv6b5fLm3GNkD9FDonLGqmeVBDKS68NmpwFrqTyPshL",
  "key11": "Ze16wzNKc5eHtxqUt55RWABhwnYPvACmyy5QFrWKBXSZr6RFSTuHSAgmjkW1j1ApTQRc7ybyA3oVnjHGYmE8qYx",
  "key12": "3HaePvZzqBaZnZCSGgwdpWap6PY6Aor5x2j1mQXLyzn9VE58u7b2EpHfcESxcuveqrfy1Wr3JnYEKbbKGH4AEVWi",
  "key13": "swbtFXWJuonD82YcECCKv1tjEPt7989r5kFA5NtpUWcqCS7jsTUbp39Ey8DQRHmdXayBx6G4uksoYq3RDrQuy6u",
  "key14": "PXLRZAVgN7SEoQryxTn9osfFUMm3YSJY9zZXtfT8iQWXs3W6cFuYFdXKHgEgh7R4DCLc9BGsmQ7ZNKeND3i9cqa",
  "key15": "GQZp9WbHXcLCA2HdE7UMgg2DddS5p4S21fuaCckuokbToudYhmjyMPAV3G3TM5FaycJDFtVcgegLeLCNeYmoGHg",
  "key16": "df7aiMrf7UbSWfdQsRgYG8S9UR7WrNVSrdQhe8v1kqWCMp8FBRjRyZ7DnUAjtwetiaXeYfiNaGJqVWWBNjwwdEc",
  "key17": "jbBUHy4QMP3GfcUkMhk3Cx6VZ8ubZqUMBMSKMpccZRGR1vDW1qS2wDk2sPyTzH5EfNqNfU85jjFE7UuztwNvfgd",
  "key18": "2Ln2k995UycEuqXs8QrSB7Ch8ntajFKPSbEjfA9VpGk5iC7nHnHFUGZXgBKXTzSerfktuwEsrwC6Q9XZPRn8hJLU",
  "key19": "6JyqXCzUhLv9eWVwKVDyZea8wjdMpgSCAijXQtWUk57VJtKzEXRAjddVWeEWnXmxyzMZNK6Yoq1rJBiBYiokG6a",
  "key20": "2SDsY76Wxw43ymPJTvwzyUrEuZSLKHAbByFwN1oV7zawCLeFqEufGaAERt1X5C9dHiMkSTUVnoJBDs57iVYWQQB5",
  "key21": "GXxH2hXw5LhpTNSUqYW6MPTdxgSyzkgieccLZ8kYYW6UY1sPQfh9C8SUWhWmYTBfFXD2W5fcxA3eRFXGRAqLZRY",
  "key22": "5p5zuDCzUvtBoM96gWnXh4Thk1uxtYCDGJeG8MSUe7PpdwrTjR71TfPtNz2niN5ihWhsQe4RWF3tvhufwrNgp2wW",
  "key23": "3RLAZrYJ9S73ovGZsrwiBUfzzdMNWWH4fBWPPnAPx2yqk3tHPuavNoZu67zmLxihvoRCfgMT8U246d2d2YcnUUF8",
  "key24": "3zedWgdFz9XqZdvv6oT7ygpYMsV71qw2RFB59AhitA8ub2J5WopHJx7ztfnBtuk5P6UJfqmXojg39JdtCLcm7dEU",
  "key25": "2ZwhCq5djkNqLnkSR9F3PJz5iYfYww9Wnv31F4Fz2Ahm3bQX5BDyYF4Ego9TjM2rGJ45V3RiDugbmpe5wTgnSWyB",
  "key26": "65YKKz7hF9dHNCSPkRjzBCDeUYdmggPEfLh5StYdg9wyJ8WD4VNCovmpWG2feFRkzfxzhNx2czDwbTb1d1woswyY",
  "key27": "3mKrY156r63xbPsQwyYLzmYcbcaNmAf6con5vTQdoXeohHTXcAdZdAu2gvmQJQHk2M65gWLrRuQZUe6Wz2TtPSQ8",
  "key28": "2oBgbCR1Zzepz6AsQ95rV7V9Hq9GfqCwJHngRXmsgcei5gE4ezoHLM64tZU9BxEqSPLCDjMSEFTkmVcXEv18CxKS",
  "key29": "57ppPzPAew8mRaZtsd2Af2FysoAAQz7h8j6k3qxhJ4T1dsEp69MspYnR1hhKzA5Qa5V2wRia12p5VkcPMV8SYYM7",
  "key30": "3WPiM3KgZCKJX6CNkqV3d95dt4YQCQib5y287RDXdnKdF4oYRM7xyVhKLSH2ajiFdCEcXg1uYgd88Z18YvBs38LV",
  "key31": "3jszVEVgvxMEsEvULvinwagXmRUqDYLY42Nrt6qEjdZzKG4CiVM2cQXd4P5EL9neXEsvVHKw6QYY1wiQ63svDyw1"
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
