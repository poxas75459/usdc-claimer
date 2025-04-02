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
    "47Kbg9PYTyVr6W9ymxCHeGFku3YDfC5UkvY55wg524wdHESuwCya3EfFm6MqmNz9FG4WT2L99hZdR87ZPqj31CFn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XMpmo2vXLhWWgMyBpJ43TEX1JEg4rbhogRgrZXNvBV8DSV7rfG9spvS1w4XEce2dP5ey9QuYLG1mjyuknYEnC7Y",
  "key1": "GVgvQwJwVFMXwGEpuFc5EtwRjkEJHvZFgNZ6HefUHQ7ssykZPbu3uujg61Hnvp7uLgAZzMek2rnKSTvgjcLQGyu",
  "key2": "4Xy91c2cKPSV2L7XdLoARnCL7Vgpbhhizyq5r7h9Dbd5KUoFfx7tjZVzK7yFKKz8nfHsFiTLtJi1X2kMNrTwEfbn",
  "key3": "4c8K7qQAskepe1jbScAHkZEeN4hHu1cL4KkUUaPwmWy9ZXuEYUTSa1yfqRTQGng2wTdCTSMZr6sLQQ9GFE1owKtH",
  "key4": "5hQzS7RoSGn8XAJAtKXbn7kuQ4BGGkh9jwajsi9UAYnW2vgY5x8kwgfYc5DbtBaQ68vHj2pSbhcPtCbkPBs7UqMJ",
  "key5": "2AKNyzTP3JhYazQHWCp4XNzxDxJvPqitBusaVe25BZnX7Uw99qoUorSBZNi61wYJBt8M1ExPSD7P41CQQLHTjSZd",
  "key6": "3BBhyru85bYY2oBfDNFPgBuJPaBmVmpGDi7NhyEBTosrsFVgh77HijyFVunhbUspcoDzYMPSagZhnQVkvB2Hfiap",
  "key7": "5AvuswdCPJhmD8Nn5AhScihNEqRxknwwuQn1hFXqnXrnLD6ZWdn1Rqc6qdhjJHeuZzJDRuFHogLVNHNXu3z5y9t9",
  "key8": "3JBfrVvG2CXSsQW9oYyM2TuhrRqFZVJ2aKKPwycdeTCtaGe43DDkDqtPokTE66TLCCFX3EAXz3csfb6hbpiHS7Mi",
  "key9": "2cdWMcVPivFWqx2AUNYewJXgXVXNkuKkZwKcNJm74MsuKv9iHpnyPyzFv2X1ouEdegwx5XKFU3whkxheY4f4m8ay",
  "key10": "mv5qMLgKXnMLAzb4qMMqzsLUpNqVU6DfBLf1oMe4Gt6AmthMC8H64kei71f8azhrZ7RZHXcfhiHiikBDh5PkFBr",
  "key11": "3wUTP5EPpFKXNfqVi9Qecb65CD9VrQ7XkfHPvZJVbY3jMDsg4kLYcigigUV5LXrP8Ekqxk9893CyqhWt4JV4nT5k",
  "key12": "52BtnzqudGZVDCbgqHJ2oVtHZ7EMVXCSEj9k8NpeSpm7VBpjfG75bwPYrQWcvR737FWSG7r2aLov5GCekmumXo5r",
  "key13": "4vDq6EbP7jBc3stsJyB63puh58wfSXBixCDhHts4jPyWPBrkg9x7upGkK5MX6Nzo4mcgkbaaWYb9aUXgFpNs2hWw",
  "key14": "522VfJVQJXPgVj5i7xuMBnv8RcyJbFzQVuo5iGhqRx5z9dQwyysRdhKgjjmyMPjNvari14aeX3KcEZtxpVemdand",
  "key15": "3XLpi5YeqixJn8Jvt1Mgibk9Nt5cQbKtsBgHJ6khdw2kJf49GZUnBi9VpzVQMdet1ZvkTZMpBXaoKrSH2G1w1Sgm",
  "key16": "5MMqPT4kVR9VgBjFxfUBnekCxd4PMEGDZsRCqKcktpRmfWnBtZ2yBaYrtCE7cPLfhZiRtZ84p5RqEoY9Me6v4vF4",
  "key17": "4ApGrr4zU3f3JkcyZ4SA7DSnEL7qHikDGC6ef92myvbKhw2FCYuCwh59LNGJpYV9sdQdFz5psre57zPzsvnBUo2U",
  "key18": "4VqimZZ6XJ2REyQNfFGzd5akHPvMbVEnJWJVvjy8disRCxpLhX5fArdeHExjCvuqn6aGcKWbgmNYimrrmGuS4gK4",
  "key19": "37JbUWP19ECPSN5A2s91gAKypSuwMCv9a1qeV7NcdD2DYutktGA3uxPTFq96mzUQ7AV45ZaZRdKZgYi4iVCMYN47",
  "key20": "eyRD5SAtDyMYo7NcsJUrZUmcSauyx8aiMMmWYtdoYsiPRqk9iVqv73a7s9w5ftV9ANwkVxkeDpkRrc6pWHCMJ7x",
  "key21": "c9RqsXqtBGN5yB1m13CFXTzsTFynitzTJH5g2R6qDWPPnX7HHQkztZ6dQSuDDTnWrhQ1PBfpvv24zRhjfT8S3zT",
  "key22": "zALRdBHsV9gMXYK2mTkqhBXpTidBjsBRtot8JzXv6w5xNAPNFCie9K9WcfPCoE4BUGaxH32eV1zEnjWjDVPfpBa",
  "key23": "raHYBUMZhMz6SL612jjpSje1RF9EqNnBNCUpfUojeuyUoYfXnaJtGAhzpxZEuttuCTPHf8cKvzqjEN91evqBHH7",
  "key24": "4CYipeSPbQ4W9vAq82arVRGNRsCAVRPYnLus7Lxg3fceGYJuDnFbc1RqUrcCa9coR3empNZNCDQZ2BdrNBXu249j",
  "key25": "aFydE4o29tSRD2UdWSBzvcuW8beGSyDZnL6Fnp1hAdwjs2jEuJsnanFQTWjnHjikvhshHbwfzgvXn5PqnQ8f8Df",
  "key26": "2szGN2wpq5V6s6pSt3o1JwFFabrr1q4CXgydJszKpemZ7V9r3DeDpJsZqSyJH1ZoVnnxqKj8V66woWTKhA4D2fmT",
  "key27": "2RPrrP1uMFGosfW9Fo17FgT1HHZHrFvTSdyNQT5GjZvPC7pbFMjGNMoCZ3Co6YDjSeboZsLuShFs8Ryv1j9c4rnj",
  "key28": "2Pc5EedBUFizcxA6ZbqUGq8FvDZxw9qjrLFcJzKMckCrwaRx6DqoHa4JFCNRYV6C7CXyPqz3xZKyC6YZRN8M2buJ",
  "key29": "Mv6DZMrkqKbMzaaUw2YsmMSDNA6Yn9rETBnXxtBC8zx7Z88NMnDF4fzTuP5NN5s284ZUGmB5cK2G1xBRhnJXBHv",
  "key30": "5zFgByq7F24N91DYgYHLRbKB84cJ7BuqPvbcSE7vQeT884cbFqw9nBJFCgCRFyF8nMzudoqRHapAR91JgVjTZ7UU",
  "key31": "f6heb6syLXLkxQ6MH99kFvqEmjcFKvVTVveU5b4VJugQNzHf3Xe3paFd1jrXD5BpidpvBxt1uLp8sUBjEL4M1fU",
  "key32": "62PUtcurjkLQpmArnmE5GQvDz3z81wX41FfqGEGYJxznBetdNFr3dBuMvGauCfQfkF1F8Wp3SQL1rnwoKvdegy18",
  "key33": "C4SyN8YTpR6fFgZ3c7m99K3JiAo3KbRVFnhP8FJ568bzDkUgFEjkrrBkGsZHoNAGSU2Lgk6mUB3LQFNPSdedvjo",
  "key34": "3duGMAPoJ8LbC1DGC2ujmV2PFcc6p2nHBNceWc36C2ebxhZotrBo1RctK2xokAcrL3osTUt4MuQu1NtCEQFFci9i",
  "key35": "dgmDj7tDB5k1rDqTKc5pCJZRjpFV9B1s1sJzTk4LYYznTkSm7L5pcsWJhs7T67Z18dMV32e7RSQ86wxFW2tWqjW",
  "key36": "AeAyebTNDK9t8pBACypU5fMhK7aoEDbeSc91NT5h7YqScVC5R5m4CL6H6SBY1ZxogugxQb5fNp7J4phrB1fNX54",
  "key37": "4jNwYB7q7EaPqsbvFnb7vArdZQaZ7LbPq5DoXWjGdwzpCEh23cDUrEywUeZpxxC8rknsLGgJ7CgbziR7fo2itma",
  "key38": "wRz9rgiPfArKB3pjHdX9cbCra4iZcJeKzUvExvFmuZ7fdZqJdfgisA4CyAWaHr4ENY9xdh6bsapzcwRvFFzJ7Mu",
  "key39": "4vbQ4eQgvPyvMNLnjEq2zijDhNUEaX2XKBJ8KucUb5AKsrGhKm44iykmgEN2gMDJe441kzh2pWRxshwc93Dm6D1y",
  "key40": "5KZzFDLEoUNBQEi4HH1eW9i2wHzcWaBhziftEUBpg3HRfp9xvq1ZfzhqLyiubQrPGUT9xDYwWVEY9U8VmY337zi3"
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
