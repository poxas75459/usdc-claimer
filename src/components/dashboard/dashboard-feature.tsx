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
    "2nDSGn1CwXodRXtsJA1TWdkiaefK35fzuoPGXUefh1sYoiUyhn3z3cWevka7dPZpeqPoxWrroWkY7yKHffCo94M5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Bn8ESEdb1VGmqdNqijXbDmope4xM82ycWhVtbDt2G7hn5Z51okXZchxUfEHpRXjKG6Fbz3oNBuVQCrb5WjJYbNL",
  "key1": "T1TKuaejiyNdMxXWNNfjCBUmdUHGxxVJdgBAyM9k5vknZmi1eyebYYG1WL1zGo3cu4wodTLjU6ghg9VMmeZJk8i",
  "key2": "2VP8GWGA53YZXU3NuvK6LfeWR5LMoQqkLNFuazphKnxSRMcHPSJFsUTx7uywu6ab7PNHZtagCWSttydHApM2aQTD",
  "key3": "29jw3uPnwpcFtCP6xm44ymcJ8dV8oe8Lxd6iK7XUSvDBfarLBgZsyokAcsBKcMqy9A9n2WLPXKmLj44ZbdJCXBAV",
  "key4": "3oQqvUWoGnW8ZqJo3MjrKLjfFZbEusbu7wGmcuTpyU3X9p6p2puTW9Zh16ngAZPN47uWyRQqjTT6bxCFwntfXrgC",
  "key5": "3cywj2sxjbJSp3aW2uqDaMKaEQbfv3jMcA5QcBzndRpMjX8Pqm672Lhq6vmxnrEGiZWPddrCdDyLuY8Fm5rkvwE9",
  "key6": "3AZJSd5ZZmLViqAWPequykWBWtRa5jy6f8gccAJ5H21oH6uzwrguUiU1sY9nvU4grRYHBDfA9iWELzFBbTFex4CP",
  "key7": "5y1XY5NdaXbu5HhcDtKvjtEHygiXLktCdfNiajrQgSP78kC5U7bYfLhGK8thuz93DPvqUaiNFgYCkRCdbWHpAhGg",
  "key8": "5Ytd2QKXBSdNwjxyD6MVVvUTKmFi6nKxDxy22VyRoVpzmP6MWX95CLk4QNnv4tZGNVRiMb2ah2v9xhpZmMzJw6PM",
  "key9": "2gaxoQjmWWCoCvBA4yBXeqBTDtnskBynAgtSvAoxrfn4Y5cbsZmZbUHXags1JjEw5nrV5aq8ekvfcYCZdKK67qut",
  "key10": "2fA6mKUn7VDs8m83AGmwbmAM3Ls82PJnQvUJxrvob4B8UUCtcQz27sK8jD2XLaT7aLmjVwfTp5fpaJCcaXVaohsB",
  "key11": "4FqqR8ecw2LrvWLjLYAGdsBUDbwnHKBN7PGBAUhKe8Zs5AbJbZ2dcW6Sc6Zq2VZiZAvAfTW8Ldhn8dDpBAfs7TDE",
  "key12": "4vteSpUbCthYm9zye7QGoFe47ezr6hoQnAFj8Ywit1PFDuYknrVfw3UjDfqjnLKei2V134VqhWgnVdC8JMCdUrom",
  "key13": "2k7QKa66L6mC5DoDDCaqnovaGyWydME7ENooL1CP5qx4NsrsZQgyc4GuAk48eUQZsCDYmt4ECkV9NJJW5s8voC4F",
  "key14": "5BKVzMwPAUJf9Bfx9vvAuwCy7zkW9ya4hmf9EyxSUZbg1LbsMoyBtgBqpE57uWWyx7SM4URenjSfukfPzghjyJtY",
  "key15": "2eYEocozUaco9Q2PZWCKkH8zjzFkNKYWqvXw6dbJxrNg4UpSZhD28pJm4FatJnQyPRm6j3YH78kSM2ZQbkUMwYnf",
  "key16": "rKnWa8siysRLqpkf29gDKG1YyQVRhfAMZaZeBngCLTZcDLqN3eWoRvmKCkiJ5ZKmS3oC6bwHfMohy5NQU3pW8mw",
  "key17": "5wxjmAdDa7v4Fqe3jnfEs8FJqhWWuGUpDrVs8WyZnm412Lq8hi5RuAi5AWekPPprXXrXbXHhosBdCVSmipNqB1cj",
  "key18": "2JK5sgQbCogNgbTHtTyDgdjc8AoRWLk2LbMJDqSfBwqfiD4EQqm6DuGRZcR58vwXCrBk7K37c6ShHAaDpZcGgjKA",
  "key19": "63TNgPLF1ysodvYACfkurKJWtGtrREGnySWkicwXcrrPQT2T4FQZ1cp8d6boqtt4NvgnJJh4Cr22HmYmDiE4ZQud",
  "key20": "4dUoGNEmsAqD6NMJMQ9rrcYt94RmqiToJ7TTcCSTHhquoV5rwRYH85PDdJaTLbmeMKyVoxV6iK8VVz7zdoxc2nEA",
  "key21": "TsTkLmFv1U8iM8G4tzASAjiTGzqDvKdZDa1VRR2idnTCEdvbb1hckDJwkQrQFa51Qhp7HZSgveex5GyYdRHWMNG",
  "key22": "3yRDPzd4AzDfV48kR4zReUAm1m2XoiknGw2zogHX6U5dJXbXzgN9SKLDmivYVgppv1STviWStATDPh6DcupW4Su4",
  "key23": "3m4wYKoqkHdYx6akyRU83RmAqNr3kYmXcJ9Uu7uYTxF3SpRpye33wpkBsxS79YJF7enCE6V4vpqLwQMqZe1EqGfj",
  "key24": "5VFh3DZ77SBMVfeMczsubGaKNVvxyXSLSGVotkif9XxGVRuFLK8Ptb4Qc39amqWpv8XijTcJxCXsVxH4UfLPdXiy",
  "key25": "3FAfn3FSGCqSVQwrFNLGagVSgop8atxYm8VTH18YgStR1hvehYpMwnLuBd9WaVqewdrCotXCp4NB4HiLXvDd6ndM",
  "key26": "4Jk7HR1HtNaHSyjgic7bBFtLBT4g9auqpzXW7zoe8DiW1USPxmVDahPP4uS1qPhVSzB83SCBiM6tBuzKJUNAZ45k",
  "key27": "2EtyKbwySeEf6FayDbiup1gTu6US26B8uLGomfUhtJDg2QnBcgABDnPnARJHta4XKJKvQP1kAzNgpDKLG7Qf5sB5",
  "key28": "4djnny7eTTVa3X2m2fSPjCNzSjqrB1wtEmvmCCwe4iDK2UJ9tM3A6nF76VAgTms3EtJrXVJ2Xgyej5tcW1A5EYyK"
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
