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
    "5gyincMZBHmqpUxFvKrikEniRbkLfK5fRbBtwpaKeZBLqZx7kmmRQqpqm67QMkZmabHU2WWod1uMVTGrqeAEfnQM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VsWuzXWBomPEsjh98R6aGU2xbazXKYo2SKvpHwQWp6GMZuS6HiJrBTMTAVGYXGdAK4wx8ks6pWusJ64kKLsMZAH",
  "key1": "4cot3AaALFiUGphnXkP1rtf2ADGXtRmmQmWJ6mZSsjrsAVHTaSS8wMwC2rZna7tHaVsyjHWssVP3cQQaRDmCsHvU",
  "key2": "5382TJyPmQa6bFVkoY38Fz52Scn8W79vQyLv52yfy1HPwmsSGXMctQU8FbfDHpFxD5GKMvrG5ovMXHFBziAnpSYD",
  "key3": "2mFVugD87vtbyD7FoB4pwsZkx2Z6aBcGy3GRQBqAaswkm8JcsagPZq4qtqDaTGMXWtcim9638LLuxmaGW2XxJrgP",
  "key4": "5RS7tqjc29MBo65yQ8mPM2xmjp7E1q4irbL5HUVq66oP5fQM9Q4fBcThuMTeLSRqe98AxQQvwtYHqvGHJoNHRJVZ",
  "key5": "5bsqAMhVfsEhzgpZ8eXDcGJegEGP45Z1yjrGT4FwHcc2YPzkFeuu2F4mJKPVWihtpDR1hRpMcUuDXCMFpRsrYQnP",
  "key6": "64qMaTVg7BGoMxaVuqps3T7VUfWTt1CVppzdo6aGJPCBq4bfFYxLLpTYAq4w9Yki8TsJngUtzLi6Ef5h1sGpZq4h",
  "key7": "3xuNAi25LnR2gRQjUcC8FMFS3yfjv5rivspvfVEySfAVwGGufLswCjWmDZNk8ev2CDWa233c3k3gf1dtZBKrU3wS",
  "key8": "3Ph7uP4NW5JuFoa15koefK8ArWzXYV9rD4QjcM4oYfKQdDo7nAHyhPbYXca9kaizAMUS4fak1oV3CtdxSF8SbpLg",
  "key9": "4PSAe4t3XDJhc7SmvFYX5PduHfzTUQ56YRGpFPyG9zJ2U3g4WSwNFmQKMCxEuB4uKbKn3A3g8eE35RHmYK2fwKR4",
  "key10": "4KbwQ7F7zdyLUD9C5LzxfWVP8nVfm98xVmzU76oDEFNZyC1azzGyLm64hbrDubx4m8QzqdL5KpXGfw77mrqBj5Pj",
  "key11": "3ERXNsTDX24n56ZryzY8x5h3JCkScnfXYMpvdXrBLhXFVZZE5LxnE7T8b6G6UMVTChqW6jRQBfc5ai9piWvgmjSp",
  "key12": "4jgob9QN8sga74P2UeHjeRbttvqo88rkWzcbo4iXX16jt3MuEhpyLYH2yTEWF6FFzA7CgkDMfXuif3Jn9KrZ5U6K",
  "key13": "2CWVRT2oyU3VoVphbiedHQL6iHZNVpLHPALdUcZFLTJvZk4Sm7GbycfuynjBsdLDnD4FcgjLu4sZjvvj2A8dar4L",
  "key14": "5LvoB4g8Nzr4eRoQ3Mc86kNThd7FzrRzpv8ZGqHrMUD3F3Ewt1WxmzCJywf77xfCnhG1FhkMoWqmv1UxwzGSj1Zq",
  "key15": "5NKxSANt3xkS2MzWbfQn1jpTW2MCNHNVA3vPYmTAgQ2zvBxR4kLywHYp9bqCpQmCvvPqdUa12HJNa1BbfEcTv7g9",
  "key16": "3jo7ffDEvpHTGaF2pcJyADBphssLgKMAsMCMdk5FGnz1q5SYbw9FvyK9WPDtbhuyqJe9ZxfD4apYHmWYPSktq5yE",
  "key17": "3rT8oFkjFregWk7xTkKaRgojZ7rirtm1xRTVzqrB48TorP1h5mZ1nGA5SnJQM6LA7RjAC3KFksXHcGMQgqmztUP4",
  "key18": "4DPBfaECqHnK2d8X7MFFVJUWpjiM9X6Ge6LCYcDSjPkLfP26rxbajNDSsZE4EEMdpoiQ3eivhYURsjLtiA9un88c",
  "key19": "28bcVegyUv46knLBKQtFEWixTnXqSsD4K1a9vhbVJiJF9SSiv9Y24zbS15QjtyPs9oS35h4bgkvYavJTyxs4wobG",
  "key20": "3GNfuKwLt3mQRMMgFb6xAFY8TUrc9sqshWJeoJjCfWWr17r1DDCTeFH1zGwWGs8sRwKBpsAsoZdoaVG8Pf5fMr8F",
  "key21": "4iCsgW5a1j2BdCjmYNNGqnYcA6ht1g4p4vJzTVF889U5jiDeQA8dF7yoaUCqPiRi6YdpiRm43xiA8CowND5qREve",
  "key22": "7LDNMFJTEvdoCkiNhrG6xiviYCw6NrrdD8YfRL2jUzCyhoMS6xEJNxhqgF92Jon9SAfvWwkqmnBhzSk4wYnyqvk",
  "key23": "3fiPpKEc6jYSvhcHe61LYvd9jh7ULuoZTXCXi3jk7r2zdAQznRqjJJCRa5vvSXb9qWrjuqs9vYLkCh5qvBZ99a4p",
  "key24": "4uSG1vsr3FGtWWzzb8FcxeCGzjubjLe54BefGbsZFaWV9jtyp33qujeuXtco1wBbD1JH9EtTWCv56QKaiV8QgdXJ"
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
