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
    "2jhfHhatpEb8n9WSDwDmpVEiq7wiJrCPwggwEgFec8qb84tzDFSQj5Y7tYWp7FUvSzZXFkC68t2evidsebtTWXL1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WhrS5mq9iW5Dwi13SGaMKBEUYZ85vJr25ETLomH6phAtsp7DMas51k3XfPvkB9a8DanXT1o7L3Gv9PV8MKdLcxF",
  "key1": "S1mgW7YoTYqCww19tJXQ6dUXmNPkvu5zBsVQxiWRmZ1sFLh6YWV2YWY8H5PcoJgdLSKNff9B3ZcHK3Kf65TB7Rk",
  "key2": "2rmTdcbncHaB7tcgoW433GfzaN99mks1HKa158VjqMi4dMJZxXQwcoqPvSGkaPnXj7KJRhASZcjzD2HFAyLgeak3",
  "key3": "4kNVTU945kiHtehhizdyyf1vHWbXGVcBR1NKaxaeAamrmjHZDkPaSudDdJzMRgzFiNmHhrc2cPACNWRQ75brHK4p",
  "key4": "5y16YxMCPzGcw3ZB93x2mmJVLdAZAsoc1LHkJs3NZiA4pxyS3YhL4YxUFKaD5R1vKiEXkTzZX5A26NpEhLvhHBHu",
  "key5": "3pytxwNqGNMSggLsH3aD2sESkBX9MWwGmD9fNJhohD9yYSUVPT1gAgEDUHHBkUR8kasHegbAHZaYbnEeq3BTNaiC",
  "key6": "3YAoJnyWGMmWXxrLGVPE5QbiTeKkBBuLeM73Qfc1JAgY1gtkB53hQ8F1sR4sbw4NGkikcuNs45SNxcuwvdTsjTeJ",
  "key7": "5No2KoKjH82xK12hovabZy97VFG13jNYKpHQat99wQzHuWooa3gLSLi4dxuP1fVShWkUkkGTGDDVVDNyi7QzRcRr",
  "key8": "Cc33crrcDrQXMHXBvFaWXebCHZR8wzgdt4E1DGEJoNdfeV8XTDorrc86c49DDjUY3aDCawZEaviYDbASdTCut1u",
  "key9": "5q7N5XPaQ24A6PEwJsjk2cviKCMg4LPDeDpbYH1U5PTRHMAaEeS39bYeCjt7Yyd6u6LQSE7EzaX7Q8hB4z6QDSPJ",
  "key10": "2YU7T4SB7dto43mGPikHj5CvuhYWwahoBGzvRuBDQMd6WJLtCBsg49W6bC9fh6t1kJTCwcZLpJT3kTMs3fEqyzN1",
  "key11": "3AGeFZqhDGNoGx9cKtemDk3e6Sc3NLupmVMAy6S5VJCZ2hRGhYfByN41c9MveELt9fGnvkNT4vCCbn2Wv1EKTJ1N",
  "key12": "3cerabMTRjjbpoanPJ1VPHf5i4swYAJwEXW7cHQ7m25b4rrBQY8vtNMnv7geXV6K7yM56S2TLKY6XYxpcZeDnJ7t",
  "key13": "4TXuK5QTAGhSSE2ioEUxn8Vr6MqYPn3ZX1pB7gko1dqVTDhhMh1xEwQ7CAtQ89nPi75sEnCpLzSWzKa2ypQeeogp",
  "key14": "5Gi3pYE65pgscD7jkTQtFgHfHLo5EY7fHUxMDEN8MzoPj975LtfydWpJnq82FhzqHdvb9ZhbF7KDSFeUyptVaDed",
  "key15": "BLh8uoxVjpAHyNDu7LkoAH13K98pZSA8P4zZxKuAY636feveFtwArrSTMUaNQK18nBotNWaD83NfDNSL3pq6WLb",
  "key16": "2e6Eed3rc5VMLuHjtXJEpZU5buHNY2249H8FphGCRqsMGf8SqCRRqg1hQZHToJF9RhcYD2ZZUSAEACCrTWdSpqTM",
  "key17": "4RUwhz24aGTCAdwD3mX7Lqx5fNZ7vWFMycqdKf6XDYuYa4mAgC6B7pPFmUPSy6VfsXcUJ5ubZQZXNLe4oY5hbgJJ",
  "key18": "66qia9YmhkuRMEAtZMjWMYiogncUCiw5QExA4L9Rd7Xa1m9rJ8rUDyENfrun7cExKu85SDmp4Tpu5w6x3sTHZQ1n",
  "key19": "XhCVc6wb8UjDdM8foXj9UznZg8xZR9qY4bsnxg5eCbiBCqBBJfCorhGE1ewjQxFRqcQgQWVoPec1ErVyxey9sZk",
  "key20": "2VnL1q6cM1uukSnZBMzgeHaPAMHUNaPqaSrZt8K17KcdQ7SEyBxENxaMobgb6vW4ZQhtyhavGBdFunk1CaL9u6pK",
  "key21": "4R8ki4AYFW5S95c9UGzU8etZFRhFqGsjeaGKJyo6uuqyFgJtXiJCpMjhqv5kZMDntAihAopcYRf1hRY9ZKgTxbGR",
  "key22": "4oLwLF1Pwrq88e7EF9inqDwMArYkcST2QBL2pLiggQ7voKt69dmGgQWmM6FWh1SqBiKhZ85DhUJi5Vc9NZt7qCph",
  "key23": "3SSB4whDsnq2odarctWq2v96aMGD2MwrPVtmvu4Eey32sKK464oHziwoSiwqyU4wUhJSjgD7h2U7sBNkxvJczFFf",
  "key24": "BXrNPsVx2nku1EYzNWffxRtThg8vm4zKSVBURMchz9AU5CjY3BsP27im8fJvxknVvGPHvNZkBaaBTe4C5zqd85y",
  "key25": "4ug3xFmQYqP6so6RX5nA1r46Df8q7pdpf1uVCNyoFi8QZxq17hwRCfnMs3SpzQ9uWZQTxBYpd8PbUkWLnpH2CPXd",
  "key26": "2vbgXambMNy1HTY9bXCfbbZsQ4qGw8ZFfChGmmvBVQEft7V7CU2nHS3iEUAXsFhHXo8XHLmoXJnqdv9n2eyTEf53",
  "key27": "4EwpezVbvvmZ5KxxbVetbm2BT67vWdhqxVbeiw9LeMhgtWwCkMuvubCVniuidZ4zdYqXyf3VNctFMQ4GtgRLsfRS",
  "key28": "YvbXb1KaHDypdVHvwcfMZ2SLvxdin9zcG6giDBdLNFcSX5qD6NyaG7ydkUAChbDHeG1NrzFXupBRBoJCh4qPLfX",
  "key29": "AoVfbESTZJPGfvmcbb3WB7ryDBb2TDixCwecMfiMUszxJHomQr9GbgAr1uBAh8rJ28ejHFJFA8DqirWFnECGPxN",
  "key30": "56x8onJrmDsDKMKKK54Sw8ypkhdYHwvPWg7MiDKfmy3fvfqc4ahDZuGkm7ZmFASordMpxykTg7jvY19FjAo73Ebe",
  "key31": "5LkJfFe75QRVG7DN9biuiiRkYf6UvxQ73gKG93ZXZavo9VzbdFHtgf5LJReyMeLGNZTtXSp3KcUEcLuk6nE2dx9K",
  "key32": "9R4FCRmwuXBywsNdp4HjXz2t1uZU3UHCkjHoh1fFyp28gntxerNrUNC8TLnUYUxpV5YGshcjucTFFEC5yfEQkXk",
  "key33": "4nYZDddTPyLyjG5PYN9hUpH4AHbGAHGAvRx698XPc5jRJwX3DgKqXMpUubTZa9pf3XMhn4Au8gsFriRCzBXFw2t6",
  "key34": "f2fvXTb1G9RcYVzMU5Sr2mob4BztWjCHMRDukaYMb2z1PBJNPb5AKCkSogq9iw6aPcyAseabhsX4Q4ssTE2jE18",
  "key35": "3KJdoAkFzwDo2rC51siycY7413aSfXCr8zb5AK1Kj77cG4w7JbfTqVfSMDMmeRfjFndgGrNjECRxBZ5c1QJx9GUW",
  "key36": "5Zu8mk41xoutsM6T5HnRde1TRSxhdXvbGhDUnDe4SEuu1M3B2W3WikXrvocfqgwuDE5MzaY3vMZiqycN8Y5VZwwT",
  "key37": "4SsamWUDEXUAmA8zsZNLNvygL4Gs7H3wX2h8GBfwS1WSv2XHKWvbFcjCoqY3douBQ4D6Mrmu4Q4iZEs5poMozoG4",
  "key38": "3N4XzZeMgjEct3toLFuLAtkDXeMU6c1hS569r6VgGNkk7zVBg16uJvhuK4pbhLuRB41h9gA2KQn3RHaD8Zyr38BB",
  "key39": "2HyM4etf7ej8Xwdis1AX2d5Aii7uVobQJxmFtSBjHLTvpfRrzBEYRKNHnQFaoE48UvBo2jMEnXD5Bvze5TKmgZyH",
  "key40": "2Qg2rRkqMeW8QLg1dYJ42Q3WkCu88RJajJiKvSrLTC1u62w45jrBfZbrk8Prg6YE4J47UZFCpzBy9CNzEAKYpcmW",
  "key41": "2zbD8EJktDJumWVN4weq4VvfeCvtjDZRaE3jQdJ1N7DgUaC3zzvw7rAhowhAEu55tS7krZbkbdrmbeWhEdVEGRXr"
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
