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
    "4KZwcjJMZL5XXFojPffndHc8cZyDKLouaJMu5Gb3zdeEfrPHVTHw2v2yjsKEgDCbMdrBjBTGbcqmDUSZLwj8eQd8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hG6DSo1FJjRreX4etW7pCcNkT6DgSJvwkbJudUmEPceXRHhYb2r2TpeGRdKREdzVEXM8iNdZjBHfWfeGGx69qNn",
  "key1": "4H4DW1HkS2SZrsVYsrF32VSot8mUMPFcNJ8KgpnB1H7VLg8hpMQNb3Jvy4cmgcTQYWF4cvf6GEgLkDgEZKG8vVxZ",
  "key2": "38CnLaYxLZ9cNzqqTPzf8HgV98qyDnRgVpc3Xm957To6uMiM8rApKTvZ492vdZi7CupVyTYhJoLpCqazCocg4z36",
  "key3": "4tKE9quJ9Sx3JeK6QDHXUmmiXhES1d7x3xry83fpnQnTuk7LB35CSJ8mcG21mtNXoRawPDtNeDn9486RURaN5oJQ",
  "key4": "4nfXfrqBmes6mf2VZtjJ8JtQDMuP2C1pkhVZynkVKfng7Rds8GRCFqDtCNtKetdFpvgrkN6ypkFSJWRQqBH9vkju",
  "key5": "4WPUb7ghjSMHMcpu7f64q9HkLRAwoXCKbaTwai6hss5TCHHDzsBcRKWESaakmJawaPw5D8Tr2Nn67AiNb86CYv1q",
  "key6": "5WH1x5JGuCmiJR9m5p73DmqrJECXAU547BpwJ6QQsEa5Tih9RXeYeCQ7CKtjmAbMf2vTeKE5tuhXAxPbsDHyBP6B",
  "key7": "38JzE17Yza69ZHEmJNN1dPXTZfoHj6EWACMz8s3AyKfyZDmBsCc59G6sfbcFrTBPKsVUWYFUoRK4esD7Jpw6XRYV",
  "key8": "2JX5rjGZjWCfbG7bA4oS4BH5U5sF6s4MwUeYwQR8jCAWCDqhKdEY2fJY2yP9UUVQ2DGsvggPe3iurxEcW23L7jJR",
  "key9": "4yhf9gpFdyLxNG4RLbzLoEq5GF53f1TzejuXUxDtJaXKcciKKc6VMqyAxfdLzxbg4ijEYmSVuSP8A3Y7VtgwUdgk",
  "key10": "5jCAJxprpmZpoHhohyckn1h5CJ17WXs5qYDKsN8dUfqMZn7UrmgoKcLnCgAq3XWWJ8zMTQ1msC67j6vLL8tAG3zY",
  "key11": "53qUkE9zYFdqegRrfmZazwKG8BbDrLeXbjpU4Mcv38f1s6kGQ2bgkxTe6zGDsWQuLXi6tHwNne15X7iVgcAwRjwP",
  "key12": "56Xo7VJdc5YgokTfPyaSQhPhUkQr613MdQPanVYXCCPwNwv6TCTP4N6YaztT25Uw3XFoeLxCLGfYcRkdF4FTvPgH",
  "key13": "CSydqKkLHSuJCkypcpxnEzoKaSke5SCqAFhV9GiMDwsBZc1evhtQmhTTRaiR2Rvr7cZhRAcwPgcuDUissbk7gXa",
  "key14": "5ifemF41Fen1GwZtDxCGTVXhMJRtiByYMQUtqLKkMuQiZ9i3HgG3sg2EpzYwQMpJMfLn8NeUcoi9bCyJsBEuUW5K",
  "key15": "5JLu4Ashgw168zvtNYj54CB7duEqXVbensZv3byw2shd1oEsjHNpnyUx5b8W8tL3NKSdJ1DcfrfeECxqqGr4ByHj",
  "key16": "2tTp1vAsm5JViEprouquope3Q3NAM9n7vUzDUdVgyXXr7rfaEhUB5S9etBtN2fzvZbYHownkwPNzZxP7V56Qac8Q",
  "key17": "2C5Hdot4wuvGPH2xkeRfCs7vncQiHL7a4bTKm6emaoSANCukesjWuAhcQaDmAbhH7skXwojAdBKjEtFQS1r7vboR",
  "key18": "WuhcmBQpoGmvdw9wUJTUWDVtp1juWTH1ohGmermVSjni91mHQoPAouZGEA7t7jabqAT3oUEUjEY4isvZmMQxtYK",
  "key19": "2wiAE1KtrZZaGJgJs9BQMbuabWH3JUPuXnYbvDedftyR8orM7hmdahi6wYqDq4661VtYfBbyFqUNQnV3ZYFqvKvx",
  "key20": "NxmZeMDke2Co1yhJ2x6R3h1fkVHVe3jDCfrrCSHm93BDkUKUARnXxt28Y9gaLedndcQUZywfeHNP3mWCLpvwWxj",
  "key21": "4cyXxgp2CCZHfvsGxkSfyRUHY45mP822rFLnDvkPD5K6YLhnpbhRYE7U4WeV38aoSFDyEKYVVL6iyLKDGyroCdR3",
  "key22": "35afhyy4xM5A7xgDm17hthDRQGVVZfoZjpd1fL3fdVPioBzobNCkou7qBpRzhkys9cx2EgtNcE1SnUS47bAwu8HX",
  "key23": "44fqGHs3gCkN78VuZQN6mW5LKzEwYPrKUKnv2KZtWf7BekVg9z5G5gJUV9domgDKkvavR7uaUiQTtnn13S8UeZE1",
  "key24": "UMWqppKS9Pz8DiVyfXDiqcs73oJ4tpJhStWjfh2915abba3o4UoYFYUMUYRpbcf73xUwd5ej7e8XvoVBqpsCpjA",
  "key25": "DQCZvgUhXfiPKZYV3BetE2xofY9z5Lepz4fTrDRoAixvbHREhcBTKdnqJabjUe2y1LT7rLTccTo2YRLKH73yNYt",
  "key26": "4VtjDZ3MavHx5bnTuLYchsFPLtknSibLZb4r1vZove5ebwkkpB6CTyTuWrz2qxDRdP8QqfcQcrfQG9Hm65ccRS3b",
  "key27": "5nFej1XNbncLuRQ1y8MQyJx2jSsqM89TN1PoqWuyTy37GbaMRx5NkLq3RL4dCG3TiNxRk1PteManvQBvnv5bodPc",
  "key28": "49WhXJAvr6x56scwFvvTpd4YFMiuAmFSeZT69zmpH95p3e6TrooBzTg4iVcyGAdmqbdt7M5QMt7Dji7d1di5YB7d",
  "key29": "5CDrgThkyPyqwtJnBDtM7u1Ayv3orw48WQb44RBVS3XoHzX8xYmtPATBXi3bX6orNVdvuHntaNHY28VAgV721dW6",
  "key30": "57QBAqirDj2VPacN5yGreqR9MLsKAL4xydqXkSFUUcL8aTTYs5yBbzp1Hr15bwHZytYsvvJ8bviN1iLmgMJHRYk6",
  "key31": "5oqHcvevVjCZhb4fQPh9YXCVrGTPM8zahaaup5CsMKy4gkgGCJQ3D5x2qo3u4EFcdMcxBRhDyDhM9sShPaFyogNA",
  "key32": "3HWzCzovKKDPLMDi6QaRoNxAGR75b28LWTAn2e5fAoZME1ybNN4G7Nj4xTLGeHEFG9x8mgLiVhQQRdpdVgZsaMXF",
  "key33": "39ue7bYX7C7phiqkcT1B6N5AnBMaRPgaBhv8F9apBvU9kbX2SprKFhAegaWHyHCc5Ggk1bkQsK8RiQgf7JtPQvNu",
  "key34": "3A4ZrRyYPUkYcKivc4fRnActfFwZPLoHZcQBvmpCuzNQdkPdNzciNDHqpKpTSyZFVdG6wquANrynEPwGq7mrFEH4",
  "key35": "3TdACJV1bXigc19Mk9sYzsejpETcjF8Fd4BVmzK4m9mEv5BqELhsN3aFMTtudFiQgQrEDfA1vUSdi4UjFBvuaUeB",
  "key36": "4gMHvqXBuFLM7WTFAZhJqPgn5RBR3GaiAjBMmnmqxifSQhkC3EV2NBsJHhBbywHRzUZQahMKVjCe8HY29eKnHVsZ",
  "key37": "HJnDfdFCtcXkopQcEchi5S8Z5SKXRFhqVrfiYG3VCduEBqeaNkYhv2nvvn7PYPE2QsXHZZoCdsmby8CMoVWZuz1",
  "key38": "5nWZfLk7CZxjMv1q72m9Ayepo5JwWa4PFRkxbB8MiuQesdMLpzbrhcd4drvDFj1j1obUX26cgcdN7QF5yzpJM7EV",
  "key39": "3TAEqa89XX5pyG6At3MqCY4fp6eorHXwcd74GWHGsSL9YY6aei2Zrgd9TgcAsqYR6ASRPtMGxj2biQUtN9uW5yfy",
  "key40": "64ZkHG2dEo6xA3Y6Vo25EFjNPbMbSvhWKd2th9k8WA9CoHPBJ2SMoczM2qaA1Qinwtsq4nMdE4QciNoFDPgMZ1Pz",
  "key41": "qXcaHcE5dJC6W55tDu29UVwiN6aYYB1aBE9X3XBwscqqatKMaBaKBC8cUNL9KNXx9mfqLDprADpw4ZJJBNg4xk4",
  "key42": "5URE7XuNLcoM6PJ2PU8B4ixMyp3wRSsd3gfRT71bMoNNWBGii9ohh64M6CDo1c8ethoTRjpYpStWRigjNw7GZ7vQ",
  "key43": "31LxWxYAaF6WujNxHrsHzHU93pbrYzm8DE7ANKGJtCX4YkM81JfDoRU2mgJLYfRFKQr9x4a8ghDZJp1SuMGuSnAF",
  "key44": "3x9zqgKRxcLk4EtkZT1cbsTcZzAsynHWPBHSSisQWrVKQFcZRdNhcT8uYVQ9YBpYdRudRbtmE3STAF2HdmfsGKBR",
  "key45": "2p5r3JGtKpjTi4xaW2APa8hcBQE1xQ7gKWcyNnUsK3oCJWBHxUs3C1PFJDw6Ykz79oUgkcpiz6gfHtb4yFEjgKRb",
  "key46": "4wBW5HpAHFckAdiG1zdbGRcEJcdtXrVcjk7RCgxx1YsSnDYh4MoBWPyXsoz69Y8iEjYuMWkjeHuUyq8f6TbDsDoH"
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
