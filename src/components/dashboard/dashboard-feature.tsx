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
    "2wFGUHoMvYjtdt4TwAmRHGE62zGFGzToopBSNbNdymTdoft2JoGbK3ecZzr7gQBuCAbZdZbFYHcabcAEtCZoo6qN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZAVrzjgyq77G7Q7Bc3NJ3zCoLTVdX3xgJNRRS9XQcPUyoVFToe8B9q5G97jFRVTxrGWPLeXroH7DU5ex3d3xKDa",
  "key1": "3SYcqt2LSrEMmRrMKozh1dMUnePYREDWAo31eLB5gSAoUBhZBTq88PfGhgisKNXahpaGkEy2cs2Bey6gVgB492CF",
  "key2": "45rt1zs3gvGP571kyA1APb7M1NpxDD5uYmdCDdR7uLE2UDg3eXpbLgxYRSe2fCn8CUoZUnKAjpDxRibRjS73u4CP",
  "key3": "4kpQZhFm9JV72NkcMQ8QSq81MCWpKc6MDZ2NA6F8SSjK6ePS8UsS2GfCj5R5RZYmDJDPseqP8qKv9Px5eV3XGX6Q",
  "key4": "4PCB2mP3q36f5SP31TTcy4McXdxS9efq3vKUcRUpMWapkcJuSrETqS3HR3zdnkxQwJ5pjz6c2hXgVS23Nz26UnK1",
  "key5": "xfGp88aiDqxMiNnCKiZeDoSTYfbqyS5khzpoQ8wq9WtJ6hommBotRAtquotiN5XC18pCJGy5KbweEw7LGcAo96Q",
  "key6": "yhZuvfyfsmHFL6NESkCVouRcp5gwcrRjtwDc3aNgjNHsX4dudr8J6vg31Q52atczoEz7WzHH5RMp2VRM9VQnsBj",
  "key7": "36pXzXyn2XAaPJNxj3dFtMXUovsPogiq7WB8oFr9BtspDwd5M499u9ttUWuRq5VySRJ6wtfQYe2K6G1kdnPNpG3X",
  "key8": "5zuD8HEyXcK1tbZKMZdmCwig85jpknPHnkCiUw4E8Y7JtLQvsLaG92un7YjY5J72J5xEZUe7VsGdzsVShUKpzJiW",
  "key9": "4FTYW15VPL1BVC2dhozQQet6mR4ECe9o3sPWKD7F74vehLjPbEfC8MqoL3cMUvTGshXJT462fWjYEpH1AHYkXTzS",
  "key10": "5JGuvMU6epubREiHMg58DjQjsNpHcpgmGMuCoxhH5C3NwZ5uKoUXRXmUNYDhwGGuPVPDF4n9E8hPbmAwJsxMRKzW",
  "key11": "SAHWCjSG4kH8czvTfVdiUUE8VFDSmgxxgVw8fCEYfk2kSjyCWuH8PHfyVjJG32B1vBhfofc8kuVF21RVpr3Dk3h",
  "key12": "3HpMrW8nd2gmsJCT8qEF9cBU6tiJWjuMAr7oLkxDRFLo66PD9wNNgD1zyitZAkpCdUYWM7P9dRAd7HvUNd3SG1T6",
  "key13": "4iPSgbAYRhFdBkBis8jfaU6MRwx4QTmmBZz8Hctxye7WRi6XoTaSwehTwcptVxaRGMWoBT91DtPeZvec6iEpCiBj",
  "key14": "3mTiYctD254EA1sYZRM1SPmyUuW1t3cQLemQd68u4q7jiZj7LeQPpUh8nkBxXg4RXpExxiUY2WAMKdcvDk5itNaF",
  "key15": "36xrKPBiNu8GFfLErWvjx4zbdVQECne8ubqVhjGf7F4xiW9gkea9EhuQvspv5QEfL3GvEX8hRFHtV8akh8PeDAbn",
  "key16": "s82nTg6HTKCszCNTzB5oEqoSniwFeHWKTxHwrPNyZrQuGZnGDJFoC8LhdHzvxCvp3hCMwoyAEtdPLg62BnNP2zQ",
  "key17": "3fbagqLaPuDKauYFM6QqSQ7pTF9hr68P4pjp4BHCcHuxmPfwbAK87XWwoqbg13iA5XWoCiZce38bwBUeJ6cZbV6T",
  "key18": "2dSRHHb6Uo41rhV29w1pCLcDJuno4rLrFpBk81xRbgkFPAHe3zW45e9Qxytrw74M4JNuiZbvfFjy2k7A112Htwkt",
  "key19": "U4cAuZrqKrgq9rVoavRhjbqSt3Q345wW217A3nNfng1FdRaFfCL4LAmfQrvKaSAm4opvLwYvMUzPAML5Ydx46zh",
  "key20": "5eutF492VtWAP5vg2rrBQG4FfqxDGchVqgvDnJBdJB86gFrwG43SksyfqzTN9zsamTjPr7TneirA9MAu7zf8rQiF",
  "key21": "3DRFsZostZtPJF98XrTDX43YqG119iDxWktdEcnq988uZsxbFrWTKurNrwLNiHknzVWJopTSNgGs1qnoYzpjjUje",
  "key22": "5iqEoGV2rniHGLThxYi61b8vTs4Gea8aW6UsxjB1EHWAVXwXWMuvvXoUVEUGsHWhU7zYBip12uiFXmciKVHWq3Cd",
  "key23": "5j6JzjxvtbPJUZg43fHzsYHjxDBz4Pxa2vyA9rGP5GVWSfxbgLyQ1XSPUdW84oNK7Lh7xfAC75zJXwkHu3tzSrkj",
  "key24": "438G2ySaDn7LDJMpAYBgHy7M2UaRskZ4uiRDyBiWCHcg5BpgzTqEphZ9LY3eDijHgTw3yAPfqk9WpqSBAyX2V1ts",
  "key25": "4DFmYxzCQabMCZy5iQ6hrWwqan2rvpZeEBQtTpXKhXSfxBT94JXqcdW4VEXCvEehXEiVAKEZEYAMfDrE8Gi58SX2",
  "key26": "Mokv6bhbDwCsXyTiNC21Y1fZY44S3F68yjE4RoHXcyWe5Z7YF8AqZ85C32UfwrZ9YeDrg8FDouay6b2VLU54bS2",
  "key27": "3TQYKRkbr5bVxMdbjZ7oN4vu421DwmFVBqKUwEacV712QgSjDdHZ5ymeHq1asXNM7XHDEPTAE3ChdneCcQyKjuhE",
  "key28": "4APQ7SQbmLdNJRWQbGd1eeKxEYJ83RfTfPuqey1bicu8LCXP2UiQZckJ5cqqbXajmd8ZBo7ktzeHhUxZZnQwbtmX",
  "key29": "42zqbbLC8rfP8hYjLL1KDeExD5sGRPGPDJVJq9Vn17ZkdtaaN6uaXtWMj5Vdb4tx6SapgvT2inTApnQFmaBRXBWp"
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
