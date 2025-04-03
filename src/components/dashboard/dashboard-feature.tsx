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
    "4GYeeLQfwwZsbxzaB31FJnnKrznPcxqjmhqQHa7uSHbQh2GVVE76zuwxJG49wT2ZjDiLSXpTQY4tagi46WVcVnb6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "V6LJUfB4E6uN1sW4R9N1rcQg8ArLRH4vzyBSyYDaLy3xVYTZywCJQ3KCgDWRbjzf2858x9YAa9AyetY7mRp7VZ5",
  "key1": "VtMt2LnCjFzhPw864Cb7GeUSsbGvb4GLYD15PmPB5kGTqZzWBkPkg5bAv26hhMD78iYKFERTUd3owXtTG2diwZk",
  "key2": "2qrn9ubA5i4ecfKZfs4F9v7ffN3cJ6BTj7rjnj3UFFpky8Sag6fNmDB6qYkeGmvdxzBd6LMXU2M4GZR24R9ByWsv",
  "key3": "3Emi9N95KNV4hgFYmcrcCUEbxogu5gdg819wiVwZZv9ZKvQsrPv6N3kFX2w6z87nvb7RmcD8fgPwsCvvqxtgp135",
  "key4": "3E5wPhL2Y1jgosMzaeVt7nZwZoatQBXwYNH4DM1EgthKz2JVytw9BmqfWJHMdwnwTgsJdGzPAarvdajv6v4ELxmk",
  "key5": "3M4aEMxAd69cbLdRRTnYbGZcft1G9fRBNqxDDXey1mzMeyrxMZEXFbZLmXJYskiYuVXpb4z8gM2aty81zQUmM5LG",
  "key6": "3WigLkJPvbT5SxR7RHpSe3YtTjpcFcHmkYeVFYDCtWGVzLSTanALdx12AMiPUTJW3P3AxzcpS9rAkTXhCP8zTj5f",
  "key7": "5tnwzf3CGaij2Hg1s3tC4zwMn94nxRLeY9hRZDcbFaUZNt1bfPVJvJwesqNoUktfKDhss69X4xrGwEftYyyZjeTw",
  "key8": "mPC9zRPyyrxA31z6r4ijrMQWiJknCretGvN7keGMpn6EftTUsf9W4busQSQtZGCK2pBGaoGBpgWGJXxhdqtBCSA",
  "key9": "3QHvemXv9D2gXEmnYg3wD1tWK2nkTdFzWLzXumnuHYri1XgXga7i79YZKtcX9razf4nxRedbSpEZtqKYsyDFMDer",
  "key10": "46gMFz6X3gonzARFgDbQqmxEzJwq84JWxTsr1pWhvbHmfJZCKEDdMefZHgrjpmuVcasxKtXwuESCGFzAAdV6HgyQ",
  "key11": "5k9eqbdkntvT3tPZGLJWMAAtYcWg4tUX2gbr5fMsUXNwcjbzFLD3drAZYJ751W4Bj7HT86vyKKmYSo1yHMnDAoK8",
  "key12": "4J6kRT2fmbdgG3FUhWGkUJDN3uvcvb3UH1cVuoVYumutiGfcW4FzFB2a8TaSXvWDNb5KkQiNB9U7hwfRHEt8gEiZ",
  "key13": "5F8up4kJARF7qmb61QRq3XDF8UWsJrbY4jJFFxKh8dZQYAU32DTA3GQuRAHxwy2o6XPU1qrw6r3MvQfjkRHik8Kh",
  "key14": "2iYQc2BGuyfcSemTrRPg93cvCFXdsdnEQqxkrdvcETNZjMYg7C7ARtyfRrTuhowCeatmRWkazNYvcrgdS8kXzfQQ",
  "key15": "443mtZNwStH3oiEZA14jsoS5Q7pCxnBSE1kva4kyJgYct4RkE5JmYe2BmBchUDCRyeYznyKmTzfvjaqbJQhWTWFx",
  "key16": "4e2bUBMYdJNavgpBXoPPafVGrgZKYZBjM5N6vpme8WcjjgLyw9oPNJC9DBqe3EfCHAEgZ2j37dmfzijpHschiTap",
  "key17": "5QXimxsDgmgeU2HM5GTBs3ibHhFeYNcon8Pmu3HTyvUkoC4mJUNHMgornB3Drioxvb6EXZfCT6xiYJeyvbHcRK3F",
  "key18": "386BADKbJpoB898iF5JnanEKhnQunK8QQxea3X8MmrRxpZENHTvwrox9wASXWKsb7sHwxeEvzkuc8vJhX34ieukd",
  "key19": "4gyfaTCtNsAWgqhygRhzJp82UdqHRXQLLeK2RBsKxT4hsSmL5ryshDgYA1niQ9Aj99pSvoaRGbAurWdRcchXpDWc",
  "key20": "4KNdN6QucbFJa6FaHownQXFznHpJQuisYWRE4wN3boYwmQvcNTY8NWNTWRMfooU9xziLmrDD2C9HXginSQdschnF",
  "key21": "bCiGMsTv9raGxWZNbnoLCwPENMooaLDP3jwpxZb4ZCXou7jrRyLKvGP5neRukTWSWTbdq178eqqErsU77RurH8w",
  "key22": "3s7NvS1Et5fEXEBGouyr2qc9MmSyP3NzAuL4uPMNtoV5MYydjToEuacwFKc1cU6cSAya4nAA7R1eKUa6yXiN3bVQ",
  "key23": "3oD4rabdjFf4QAmYDJCFXvqLnKjeqGJ91botHRsnF9wXZRyic56HCun3zeEChPkr9eZr7XYnmCRQno2X63CactLh",
  "key24": "4AVqgkVXUBUPPr7Rg8GcLznMTWGnpJUUkhejrLsxK912wpRBrPM5H5xQmtFrxi75vg4fzTjRZsZbmPG2LSCmNcek",
  "key25": "bsnbAQ3ZRJyZShpWymQ9XMN4FnYXj7s4drvgARyXnyEe46XDNQiD6fwedSoEM67U1qRNosGPQHfpR7offe8Mz79",
  "key26": "3YwrtS8u7oG2c1Bf32ScZLKpZoTGooQjAD7dDTZCnY9fZf7zWCo8scwm35iE2SNdVV2iZjKGHs3NvQaEZPzdEGiT"
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
