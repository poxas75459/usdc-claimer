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
    "3stjMxtkD43QisE744R9Mu6rhoWcQ37ZBDxHa55ZdspJ3hmJNUCjpR3y4Lr7k9hSqZNYT1kqQrUq22J8V7YVR6ch"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CcyuF1EvRRLt3VxAYQM83Bf45Sg9jFZzTYT3JaLQUjpYo44Q2W9TTGTxZ8sAvmSrH4esD1D67133hyY5jGh7P7V",
  "key1": "Rns8C7fco7vYu7YXegGFx7nJPGNTGaDsYR5VxBVBAUkpb5UqaWp2LW5KfPjLn99W2ubf19fPpRYi9fQQAg6goZ4",
  "key2": "UYuidyU7oA8Xezy7gE5eyPfrFt8TP47tX5kup5hWaCX4CsQqmsgzLBcPyhrZ8XSw1vydcWEpYQJaw69yo74hTJP",
  "key3": "2po6CNbL5839ZJwyJErVXWzKxRzJNPvndcUbRCQfg6g98pQudUugAJrgGdYcz3c9LecWPT96tqE2uXgz6SRfVWyK",
  "key4": "RGQKjBsdsUn3PqAjfnkhYGRj1qkwJbaa9gAYoWpGJjXyjAw16PsChKvjuQUe1XxEWzBdg9qGRaWhrjeeSnDomYB",
  "key5": "5BDPSQ8rmdNczyZUFzkA1PsgbJ59tiQaMsGinb76JNzw8zefJRqWtaFR2eBAiaB4aPdYeBaSfGQ5Ryta6H3Gwoce",
  "key6": "41dbJUHtcf3jXeRNSnZ7h2NK2qwWJiaenfVLgek48qc6YHkC4ocHnd6jD9feTxJAPpR6uR8akHSHzfo8phty7pxa",
  "key7": "4V4cX1ix3Au1hgXHUuDH3hVdAFA5jJQRVsfzMaeo45iYxAjvo92z1LfRoDU5fSkLiBFu68MvfhrGf7asW3idDpR8",
  "key8": "3Bb9sdHK6BLmk6sfevwGvtaAhHt8VA1cRDSWP8TTpfLvcGXEFftSd5ZUyDmrCj4yJrLYKkoNEFuaJ7U9jZDzUKgA",
  "key9": "5hqbYiQV94kNGRpkgcJ23zZWmcLPapiDM4bz5gCQ4vBLc58gXiK7WU9Rr9SH6RJr24Mn8TFRzRH6MKeUQMPqvVmV",
  "key10": "232Rm1E8yREbuQVx7wAyMXHA2oZ5gfV2xcXxA4FYkPd8sfXrg8iVgGzDHLno6AXPTSQP82jkMAH1iivW4yUD8sKY",
  "key11": "4VmrUUC672d1zW7wBT15sZALnDwne1j8VEspfZTQhMXwavBEmPwvKdc417Y22KiJYrWPGRJUudv9eYoZq2gdv3Vf",
  "key12": "2pn1kU5TJnioppNJqo1Fksyte8VZyKEHJRsRWCbmY2hVwD5pXiDNNuhaebpH7cb3CTMz8urWh9JGy4Ad23sWfuGt",
  "key13": "4Z8Yahx8ijTi6GXn85DdBAaB2aDowgbqUc6sTYSUrqfvRuzdSCRWcGgs8jFpi1N2tTX6Azmp2oq3sfvZBVWfovuF",
  "key14": "37BFjf2LKBXQaQueoUuYt8QkFCHX8k9x5ZYizfUf7BnfgChQt1sf2z9CzpxJzCq8XdbMiGEeCKbFsRFvXCgjhtPP",
  "key15": "5TUfHfgVY7Tu1aYJzjGVStPbkEJvhnkutSMxgdz8ga4DQB2JfMnY6u6DeWpdpxBm4xbdEzRz6MaJnpe3jqB5nrgC",
  "key16": "2jsJ7SozKwgkxo4tvEysDpcaD1esK4ouqyxHBK2LUiEdPRnE7YR1dRQPwi8My3YoecFDQp3f9WZcMghqNnimAzPj",
  "key17": "2Fsu4EpwBT3eQq9etuxWbPzavuxVWtqTnyPtFQQ2iBzkwJSt11B71fFb3mEdEqsVm7xCSK6nSjrHeHe6YQ1sHJVK",
  "key18": "5KeqDWdLhDmtHsPPTWLKDPZkztELV3n2HyDdgPpeUeBymB222ukMBnMi3J5wFp2Z2Lbhb9jM4m1Te9nmQVowtJkx",
  "key19": "5R78RBYtVh93K3x1GQQTCc3oMvwMXtwcpcmr8EdJ3MdDpFSi5mR9JDbUKWBnjbsd8qrnTQLDBYDzhWxFUB92WQi8",
  "key20": "5KjskrWhz44PwChktfaLKWBVXUqMBZ94UT8uE16dj4Sez2Kn9XXYycTX3wEhhBnnJs1khN89c9kxv5WZ4ZSRFaLc",
  "key21": "4dYGaKVLeBQLmxzzfVKKYedL2MEAVXopeCGsN1HuVobpMu2negBaWqExW8pMPjGVKzQ6gtiCq35vbLfSstxJ4fBj",
  "key22": "2GXtWG9dw9r9QFhPhvy1Kh6KvPczT6Tww7C4XtCs5NbS4ewXx4ed6Ub3ma28QhfHKoqTXqCwSzXgXwyAcPTtzsYi",
  "key23": "5dZpUereQ2xFiTkbkhUdt1dVeL3ifAKb5LHaQ4Fiy7ZQZNQLhfH2h2pzezph3VUa152Jf3ZdyNZTowXEGuQyx3gE",
  "key24": "4zw3eUhPGj8Ys7H2Amvt7Auma19uJ4rXvRQknhTkKggrFPStvXQwbydJTvT5ex5NyLFuScaNaYZv38aRkihxUYiE",
  "key25": "5LbxrGK3NU6L4734pCe4dJJ7bP5bDzsMhKimB8MWxESdBA7oMRHdUecLg1LsmLokw3XJCjdK165eerGmXoAhVsqN",
  "key26": "5UfSwztvdYB1MVyMRPgTYgDECMVaXo9dcu8zT9tmjQDeKnGJRsZ1R78U3MArkhAmoZpUrbMrPFhbX5tgeu7UtWgZ",
  "key27": "4YKQ9rhFJZZ7kaZnGzJrE2U5NysVw3XZ3BpknjBUciYCzTxeP46ojnuDebuuh4HwQM92WSAEE7urUapFXdrqQgQe"
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
