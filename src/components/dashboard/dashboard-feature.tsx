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
    "3ZGpb3Y1Yc9voyMYpkQMjXjG6zvevk7n3VTtPLCMwNqwSjxqczf2gQof7Saj8QVtqdZtDA2AjQJxfQDBWp8aut4i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Cpq8kVDPNMAYrJ9Hsjh6K42YTC2FFxBKvagGv99Wt2oigJLy8S1ccPzYUJiTGdpsHeGhASgJoA2KL6KFoTg4bVk",
  "key1": "3c45jPvwCYVoSCiE1m99LawFtaQ9KWMJDPwfuzFn8h1LfHA9GbMHtwLaoKMTu3jwmh8DzEeuF7zBoaMBZ3wUNd4Q",
  "key2": "316DvnDBALwbv34CTeeaskRnvsHvUtwHBiN6iYuoQwiqtKxQnEZ6BisyiB1UatjwgoLZC5soUSsGBjgDq4UNheNp",
  "key3": "5dN6YMRYP9BMNtJseGDydfeAUbtuGatwVr9HQdJMGLPiGeZYY6J5HKdqeEdxxJHAGAmZkU2hmLPmKsXLdduon3MK",
  "key4": "5PVprqWgmLAuuGyW725Eb3L2eLsKoooRQPDn241nn8epbydkydQYPG3BCkC9zY58RXPwRuWRS1mzQEvmHGzT9FB8",
  "key5": "28ASQykZZ6r6UXqDqPx1RWE8tg3pg4VnUnet6cRGUJFgaeBZgtxVNZu9uVKNtQAe7h61dJW2pNaSbRVj5WKJep8n",
  "key6": "4mgjuQwsA4fNVb6QtBmczQKBJm8diuo3EeVG1FFqi3jtHkkrXSK1chbcoRT3aUNXMMmaLP1BysibyBVmVRgSTEjy",
  "key7": "2Bc9pRTzJPkDPKccMC9QkcEDzZAkCNrxgqZjRC9mSifCY2EV4dKym63L1iVBFHWS3xRxT6cafTU1L3B6y8yYnxPr",
  "key8": "5NsBqvTgAKMFbkJ18tV5AUqbvsAHwZRYZKo3PPNt4cygN39TPF7Lk2yFAniD6CTCrqpP6ZKGqeXLjacARNUbhc5t",
  "key9": "YGXanaDD5b74xM17niY3vjLwAD1ghMPUK7BoSLvz9b76CcBAqN3zq44rhNT6uCYGEwrrdPWp8itM2VobEXViJud",
  "key10": "433fbHxY5b9c4W1KzQPSebQ1ZbykUnWhnEhVLrR22MwCUsfrmfiY4Au2ZknX8DUGGrxNtnHTJDsbyGz5MZBLtLqg",
  "key11": "jMqvyPX38zb1fA9PWZrTagUA8GoGKX7STApz9LjhL78JmWuRT3BmbP6DAT3RDk8T77FcuckSn8YG7mvRomWASh5",
  "key12": "c5E8ut3ZnDSH1iZFrz5BZUrv7wHJ3HQAKDt7PamPutiKbXXG6dCxXFMRjwCMU2s4Nb6AVRWgMXrfHYyonsLmRNY",
  "key13": "2Ho1Np7fTvg6FBv4UwcDWoMNxc2EvZ1M3Jt39t8Mm4jeiPJfM1wq9UhVFrzT3C32U3NrtwQLNCvSpUZR9mDdJbuJ",
  "key14": "StMRZAPSjsP3qKbzPUNmr6WigJb5Y3ovoFZXVhBFcZ6mEKMjDesZEzBS8Soc57gkg2bBeCttxvCbEZsN7mNw4KS",
  "key15": "3BuXWeXVyTq8eAkUd8u56JZnFax3Qq8kqgeSegRPBLoMzcfr89WgQMicXWTYkAeLJRYvZbdHZMNrPP5YVxG3wkHX",
  "key16": "25stSmhjBrhFVxGQHGJRCS8ZxZngCDuxitazCaAV62oih1K99YD1aWMsNUZEZHx7Q96zJsP9swcTRr4NrBJkzHFH",
  "key17": "2c5TBWHgQnVUon6yVMYUaNuFpndWk4q6nAUNuF2ey5a2f236s5JVxohzYVaX6KWk7Y86vnHEHruRBdzZ9i1H5ccC",
  "key18": "kX3zHo1zJ13TQRFQFzye76E7mYouvcRychpaF4Nik1M4a25zUfJYd59dTJSQT3peiwiMa7BZTk3Tiab59w7VYQu",
  "key19": "YzXRcBGSDEVX6DujRxeabwMbfqu9LCxqi3kQUp2pL5yU5iXWHhuCP1sBSoCS3TkGi7yBN8iHwLkSySuu1MGbibY",
  "key20": "diTfZbSvXqsQCgZg53TXwYxYUkHaMXjXryMtPVvs7GQCYHgQWs6QZ2UaWVkbuSMYZCSioKR4mpdMp1ak3bGQa84",
  "key21": "dnbnCAQf13226zXcahY1wgq9XpFD4Ytw5E4HcSc2Sgjn7v98MKdKmMwKtX79Jk76McmLGJMy7jb2PeYWSLi9nZ1",
  "key22": "5nuiyS7ZaguBQuXe8coBWwjSVQnK919Z5bHT1Xra2i1LpQw8iZZV5qhWDKX1wWPUBT5HUu9T1AVPaGqiXTPoBzHe",
  "key23": "2YN3Ba7k94M7YtVXdzWC5VAtAHDzjcFhYxkmuLB4tivN6hJi8arxTT1BtBtu6CXN3xvHxSUEJL4zK1rD3u3xSet2",
  "key24": "65AM5uy4F8vQwWEedaR5cJehV7oXLp4sAz5DE5y26xBqZ8LtZJkrAb1FD1tA4dzRiGGAMtbtgrDgD6F7PxsmNpgE",
  "key25": "5SromQJuFq6tzNdDaVrovrm1hWDmuyfW7fX5hF1PA22JhpXiSarMc4aMwBWCSuquQm67TvuGk15XirUzkQ9voRyt",
  "key26": "5DSQuSLSYvhascCLFzkKGFRL7cmjS4RqjvTS5GgvwibcG8d3aEqi9PcQi8UB2CAW7as5FSVVVtfS9tmE5RBEdmmG"
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
