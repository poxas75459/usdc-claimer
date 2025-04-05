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
    "4LygwyZseKYKbR6B57F5ZueayPFiytfHYwXgZUPaVehFQuhSKpvC9wHNYLyQmKnJoY87YRVLekKTjNQyTro8tEJV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZfmYfTybsMNrBVEhJBqrBbjkKC8mJqB5b3Vo8LJSkXGgkC6givCmb5XZLh5uQtWTcJTUpR7ah8YaTxzDMp3dH6b",
  "key1": "56LEUGDQ4156vC1NvirpkjZESh4DB5PtqELWdHZYGsS2KaR7B6aRs2aT3nSm8Cnj2CCyjjckAb8N2NbFJy3RbGYe",
  "key2": "3YzLhRhmcmwW4LsCVmgZKKJqGpA1hWyAUbqUoKRDgVfhjPPeA87KqMwvoDek1d6rA9qoUx1MPGppkKqstkixoQSM",
  "key3": "vQv9J7AcLHhCZ5mhMsHgkjGPHf57pVhhP1HqZrDoidvchujsQG8wcpwd4d4SJVChYTf8KXtTiYiqxw1McaZaY8i",
  "key4": "NgBwQaa7Zn81TEmCnAR3zvDJt3QcyLWfsXdKa1HeZotAS7oWCZThrcHRrpVqWhANvMZB5k7xZH8Txkd1pCSP1vK",
  "key5": "4rhHhMMDcPZBRLMg4KL8RAZyQJhBc6Ve5nc7UHQQP75t5AHfXk9JSAugoUv4asLFL4V8EzPvvnXzrJr6xvS8vtAf",
  "key6": "38oXV7FjXDFYzTaHT9HXyKgkCyvAvupipQZNHm3PPBYTKdAJawvr5Too4kipkKH4yjkVHDxGiEYD43SYbhQ6uGLS",
  "key7": "5fVEZLXS8yKvLEQLiCZcH3k6jtuJdHGrBqgX1Ub8teWQqUWv43VMqTdF1VRs3V81tooC2XcBwhenVfcBHAvcTPed",
  "key8": "2i6mV8oN2QpFtzfsYQrmhvzJvf9Tz6qbGaEwZg6wXVtMXqUi6GQSUCijGffXHuYsyn9PJcZn9xtqUvqK2EUvhv4K",
  "key9": "2XHEVU6Aw6MmmW1hcWp9EjSekM1DAfQZz5XzWwwCkMWnU5LQ9LYPEqz1k4BrL3b6eFa6u8dWufRTozBGaLLL2EmX",
  "key10": "5sNQKWDKPujiKqzQ4ssupdC3VG3PT4PUhcrGXL65Qq6xdY2BhaVGLzkVdj9brS7U4ne9jwFGtbtt761PhKL9yY3Q",
  "key11": "4Pez1YTDNfnvTjoVeYmG42nw8CqBqofXUX2YEqC8TUgCnbix9mfN19gLx7qJbXoyyH1Raw4Ygsrd1WUWSEGSdJHE",
  "key12": "62ViEb547xd8SMLbTQqaBx9C15YJe37QKaF9HWQRhewEmdEm1XxyPuUFj1pj2tDS9WrRr8DeBLMD7FeEt5NQCh8t",
  "key13": "5HVXUDVw3VJGXqcAtsHFAQbDCXAMJgZGCtGw35R4BVfvQvdPCyv6Hsc4q6yHRrwpGrjjtgeYa7XgYNsn4wNU8UEH",
  "key14": "5BYEAJuUiteFVBeFfcWnB6VDPVdQaSo11B3vwY5RqNF4c6dZM9sfSCCL27BBDEss9F6QaL9xgo5YtJhq2UERSSCK",
  "key15": "5vBB1P65HwAsBPLHYpcXwRXdfmQs1Rs4MJQopu2ZasFJBL5KUwhQKHUZCJjKi39PwEZcANmvsngaiMhKxNWtCjWv",
  "key16": "5wkiJPytwLxrncmM7KDuAyr6KM4MoAMHM8M5qNER7sUCUKFkftaPMh4hw2Kw2nfr6NavD68qxKG57c8crWZdMRCR",
  "key17": "eAB2iojsm6Z8AEmP3Ah1R1kf7RweLfUGLffG6d442Rim5Sv9PQVttmGSMSrxNcojtjmDz6K2z8iwQt26og8NBPH",
  "key18": "4CU8LWiEdAXdEyJVfRiTUNq54W4MymwqEeeyHeJnw9tZToWs2KwpxszPMTQSfU6sLXh3P8FnE4jocA4jDXo8aBFe",
  "key19": "4EwJ1voDWVEAE2AGJTzTCxeXtngG7PP6TRS1KCV7Ggch5TwYv74htgW3EKpprPG2p5LsLg5FsnnXnNHcrEshwHUJ",
  "key20": "soG51Cxh9qYeQkWyeVFMgYzTtDcXv97GhRZ4Qjka72MpkB33KnXETp49CuqQBgHw2ZXR7qyc4xDX8kyMpMKSES7",
  "key21": "5aBpwJk7PQNhmN4u7pwbsns26UC5e5XemHxeU5n5FjVtnpf8uhzZJmTfy6uyk7navbPCu3yo16YFqdjrrRyC3UQk",
  "key22": "36Poe2YAgP1ErLAUkpCenCkuJT5J6KXGntDX5a99TrSLY1VdBoEyPmJm3T2yNzLvntvt2kLqbM4sDQUY65Sm3o8z",
  "key23": "2FsNmaZ1hF4EDBxPvWfojEVTW9BA25kE6MJd28FhHDeDsknKNzAuVPrap5hL82PYZC398GXrNdf2D57pTisRzd6o",
  "key24": "2HoS2KZy4JHhsV19BPh8YhbxrKfh9bSroCzvsPtBW5svHKhJTyMpai45sTMxgvYBK93FynWfRpiAh4Cm9ZpLF2gF",
  "key25": "2oUDzwazC8PtzsuWcM81bdZi2re1LPNufTbZjXpoZwD52w2xJN8q2HkNXZqbvMkfVwNofCc5pHv2QJWXXoq6GWtd",
  "key26": "2kkhEJoSFwGMHQfj6yDvjm4a2NQ5drye8P11vn864toh5vSXTR2iDdVLtvZgf1zaz8d3Ybz9TrPJ4inZQ4AMexn3",
  "key27": "2QVGbTwipYTtv3f12sZCz7fZvzMw9kLMnNN1qrfdhjfV9Nx3sm9KC14PPLj6iwRdpX8uaTyqTCHPqau4cjCaeXNN",
  "key28": "5Jc7J2apk9TGL5sjzWcpNX8MGT2iJzCYRwekyXJxQwz4BBbWDcw5RozbVFVcNBEQMH26oCowYgP3QAeTGfdhqxYf",
  "key29": "3pqYLy3HEfped4oEDQaewvRVrm4mqzrWT4wrnsKUVfcS5dWNCTg3DkGzzu6X6Rs4rxDEcxvhbfwpWYVsAadpHPzB",
  "key30": "3UCjs3zky5eSN2zPX5vFapX5JEH7yFd6nxtKsJuUAySuk9Tmryg9wUEKb6iqWxNM68nD1JwyxBsyEGG9wd8MbawN",
  "key31": "k1t71rfWcrqtiFjnY4cnfcFcHriU5Kp3n4hGb6jbEvuwQshePXE5qHEau8eFKdL6Z4yEGEvoohvqbvo5DeyVTjM",
  "key32": "5dKii81u2hBMGeFZK5MjhPLgixJg1RM3VcAcJtyjso1dezSFCt4oA9zZkVNA2gpDUx7aePcsD7dsQiFsYwsXNxpo",
  "key33": "4Xg2pT2ydJZ4CtTnr3rJUbkQhzN4JpSzxvLJzP3QA235XU88tAo8VdL4wBQXrTPXtq8Q34RwP64cmsKbi3WLYCbC",
  "key34": "4DeT2Kj4sH7RtPEJ5YpHWsE2syXT2N6No4LNoQ3ErQs2oyGVxxa5DaSZo3fjdrgFtGR91Y34XrvvPDn8S78dnxdD"
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
