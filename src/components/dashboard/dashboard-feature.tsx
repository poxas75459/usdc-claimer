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
    "2YZExFqqgfvSZVzaRFrKAcU9Liiv7JeATLSTGy9wvUr9ejuKrM53btHFSJP44j9zpNDDPseXiABYteZML2u6oCP2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8nUQHHTRKrGcrMUvDd2vtpGHzP5Lee7f6hU2qbgA1bAzUGg2K4SumV9wtnB6yidPHBkajGcFJqjmby5FWzdLBTm",
  "key1": "3yVDfPfbKdp6VadxmyP1nqRwatstTkSDxrU9zQ7JNGksjwnpCsQRFcJsfYbZrJ3kY4Zw1KGox8QdP69a3CQZZUr4",
  "key2": "4aw5JmiGbNWTMSGaTijQ77e3TuP9uCBD4sSnWkdCTCzjAfhQqHswWrryHwrPDoysUpYGsYAqvUDgnjhy4cSUNNnE",
  "key3": "4oEA3YxaE5LeCAidmhC6ZDV6PUris9MVNGShpEfExTumuDfLQY4a4qs1WRHqQ7Znf7wrsXjsgfuCGkdrGPcpChMp",
  "key4": "3XBcJYdS4W4GRK1zaw7vmLiTvKqFtG3UFHRoPRVXQWAA28F9sBSA1TirT7D4z8khGgzGdJNbRRvFGhgd4dmZ8KLF",
  "key5": "2m9mVMZnEuRh2EvcbNLDvXEYyKsgufD8yocZiF4d2iScyKsDSSMvFZKhmMnngNAqGJSsHHNFQPvSW1or6QngPzYb",
  "key6": "3efteqcy4JKekUfTWcEiCyq8R7D7GDG8JzToAD7jFqDeEFmeEm1pWLX5iZs45kNVrk3QuRR2J5YWptCNyrE9EK7T",
  "key7": "wJWpY4kkWtXUrkxfxp7NnRv8tQ5d57Qio9aHj8kMXFQVYF4zkRUeGop1Q1WgR3uvEFCsxjtM3KTQWc4ajGwnXUm",
  "key8": "2sHzEMrQAcvCtfHDGbsiXnmStEmug2ejG87WTijdW18MCN8w7Ah3AjYN6Ltm2vcummyuq8hkFnSJFWrGjMrj7W2U",
  "key9": "4Utwmtn6C5R2Fs67paFnJ9Dxu4qZgH3XuNTftKbN3KHYyRBzidiFGdMEiddCuyd46D7gSJcrAwuVWtvwULAfsbYt",
  "key10": "5qcgfxFtrkhrD1PJVtQRQJ9s9f1AKKxJ6Pyme1GZPgv2NU6vBjjNcZQaMjuy8StPwvHUoY9gZyTwVPX54kvwvUov",
  "key11": "3ExfeBnzewUfctCCGnZoV8fUxCyj3aPWL3Z9YQPwBgZSRsa1NAYHotsY4SebUSH6NKrwsGue3EwcWv97kwPBzHWz",
  "key12": "Jo5swvhi2crEWchMdvxZZq3AQHimTZ4WUaktR4rPndQkujwF12P62CeMcgPuh3XjDCsoWowj23Mw5QUeGeQnJWC",
  "key13": "5u8Ag9DnVstqm4DvywrETH8t6GuVVZGELWJ7RsnYqpuRGCx9yExT1ZwTHeDnskmMRaxG8caHc8oai5FjB6f1u6EG",
  "key14": "4BhMDM8KLwkRH6ZapFwfU3yR7g8PLpuV9yoo3mSsD9pJ25PpGTHLrSfNnX9MMcCRBvwvujhL5ws8VLmUeAWQHpdg",
  "key15": "2n3AGCRuWnc5134CxXHgHGhVb698161dENZ8GjKyCAymrDQcWv1ujw8WHf4SrZp3DqierTWmZEHur4jMEcypT62e",
  "key16": "2xnRxRNWCkQSdYm8ELF8zLWtfnVYyvDRRGB6fz2sGQVkEXqtD7aq3X43LyKdbUcApCAC1vZ5aVAUVs87PAqDxU3J",
  "key17": "4CbgUZfZyQ9ZTsBaq4zHN4FfqM7QNdCFmyrU96JrJLfTpbLFHQ9GQkyddYYgbrEXNhutCAdRwdnrDVLpKTXLvCWA",
  "key18": "3C2bwgCM91CArtvKynxHRzdwcrnzjHChskBdGyAMoZBHq618SFJ34K15KkqPuahnUCEzJzsq3A5BsEcyjKujATEk",
  "key19": "5tuDw9AT8CozxNfk4TR6szshHdUKt51UCA6KxFZ1vUUyjvXykjSPSUFJC1mHDJi6qVK9EEvN4FYwyhgXWTKN3cum",
  "key20": "2PSgB1JDjmBosycQNr5pbwNygQFPyFyrLzsuGbK9o6m1wdPqo3tjZR9jAdEQihgNAUWk1gsJaxhFuEDZFYfBBYt3",
  "key21": "2ajwZrsKjvgWx7NcCxy1PE3Ckf28yBgMyb9YW6i8gCHzt2C3N5L3YBe9MMctpXJ4AbX3CSLai2bgz3Eb3Y7W4rVe",
  "key22": "y2Ss9LqtbGrhq6qup4KpV6eT36Pjjz2fsrMiW6eEeyLb2Ey5bQYjLXGXWJz8WJ8EmWvoLFFYBCjroyedTKGjkLP",
  "key23": "2ZStBdE3hET2VJSkjCSRjpEnP1bRse2rSPUapoGaKi8eUtccaeEMy1ue4sJfcoWZbVeQ6e2e6BVGKtoZTSFJgk5X",
  "key24": "3Zd5R1YrCYkt5bD4o51rA4uhAcxMkZMQyWWYsDGz6nGAPgHyoALAw8JkeQk8MRqnYbnVeFMBssrXFD7obLbvPbB6",
  "key25": "cR9EZ7cTAmdSts91BZLTxaQ2vyeVXee3sAmZWbsxqSeWFEiMXAAxwBX17HPCVSyefL53KNWbzCHHx7YfogaosBC",
  "key26": "41CA9i8XqZayWmNLUQkmj9D9GWBupg5hz6D42nUVNM2QHB152EiUhW4LYCqZ2bfo9PhECaPkjs4vT2ecqUtcN4FU",
  "key27": "4bV97j9LJ2FZ62eNQ4iPZNzhxpy6B5u3VMa6kC5v1vnuAkECc1HiwYXkbiZtpmvkMnNXMxp7A6sQ7BTj1huQzgJT",
  "key28": "iu4nTWr1CHP1ixd7hvZMjWa85Kagy1H7brALcfGjriVFQfJKH9iprf8pfpGAbnAbw5iqBvwnFdJoZn4rkT96PUS",
  "key29": "5c1ecE8rLPUUS1sd5hEwscBnatQk8SUAg3sQRPXnAVY4L5ehw6q6r9PvHkHtSra9psyPmQXKsnBEAhQL8CRTBSMX",
  "key30": "4th51YJYCdjYqbENKjWH7kD32pvj1b1MkWhLgAFM2GJPXHBbWWtba7eS2eshTCqA3qujf5mht7gfFjHKQvy9JUnk",
  "key31": "aNTzvxCLJ3tMCv1QAJyThpFs6SjJPrt4P49RFujsG8Xpw8p5iFtugw1XTAvJPFZr2U5J2c7G3ggTkL7BtxFvups",
  "key32": "5dVbtbt8B3h6VtuxAjzUhuYdL7xCdqXois1RAfL7QCyxQ3xFSswU3Fmy4vZRQ5K51r89mnNG1ykaxVcigYpMgqo4",
  "key33": "bxfZieRwXqz4UogmTf2bbkTeQHciBkMB22RVivPJ4SXVVNex9CuLsiCJbAR7UJhnfNyuz5gAXuQU9akyVp9VUzY",
  "key34": "4bqCfwHu9PRHWXhx2dRG23FFzKJP1hLb4NAP8FYhq1mbom25m3fJjtDwLrev9z2VvoHGonzvytW2Dmexxc99Qq7h",
  "key35": "3szM7DDdV3SFUYDKQBTqbNZX91V93PL6UsFYxC84Y9nWx6F63Rn7C7bitkLvHiyiLEsS38gtRREyca13J6dcbxeo",
  "key36": "ate5L2iXeYZ3PoXJ7hZoy93dyb9J2Cn9X3LqVho89mHcK1poz7pT63c83iXt1DmxG8W3TjG5J596XiXDCUzZ6mP",
  "key37": "5xGdrkAESRi8Ww2u6pLutKjpRLrKy1PmRBAe2JnjYYutxNx4rWW6jg7AyDB15SLoRsE1GoURJq488DrSz72ocBHN",
  "key38": "2JAPhJ7Y5wawvc73pz7V89dUjix1A272u6gisTgq8uWz3cZmqVWhwffz31BRUCapQiXbSCaeNxJez224wBzcQkF4"
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
