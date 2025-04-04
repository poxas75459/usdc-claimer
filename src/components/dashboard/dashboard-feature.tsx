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
    "5dFsNGNcMBd64kbsP2FEwcbH7hkhEqJNRAdHPmtW99Pc1AaxUMQWSsL26u2hWTMNqRB1cKGSujue5dCQzVTdaQqk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XwnJqQuD1cKPhv2WFUDz4SBQdSP6WRPdPH63WzTfqCyiMN3LDtiG9uguGk98JszzcFyqqxv719Due7vQ2uRbMzj",
  "key1": "5BUUiYb27qDrgLRpxSqa78EuEXcfTe8dqKhqBxjpJ7TTx3cfvYD9V1vbmFpmDBNkX4qaCG4RBLNFtgxCfcXQuFZ",
  "key2": "49ddAUu2mt1AE25UVjmT1nBxTiiDMyntzHABmsWeDF11xGuLySLkk3pcGaTwSYBv7qGVcjvJGr7atobHhXcrWPf8",
  "key3": "5BQAAgdALga8u9eUXgUTGPetg9NfkKdoC6gaeXsurvFs3yogVhNQmPJv3NWccpG9X3NaFwHhC3x7zhFePS1zeVoz",
  "key4": "5Xh7LqbmeFMTq3GJUisSupcfM3b1hjr11tPceiobRqukJmLL5pFqXN66rC7ENeHJPbhsrDRHUYJkHmcrhDvdTRef",
  "key5": "4ZukDoh3963CTEgaius3vtf2pkoJjDe4ZNMC77C9tghvS73y7F9HkRRwtn8uXFXgFeskegVczbfMAp4bWWmbNZW5",
  "key6": "4Bjx3o4vssW4UgYxZAzvegQY9xn4mgkaDqVCYQJgYic5E2FPnJvQUnds4kDmQ8Sx1jQrU6gvBPpc66QfgqxxGHjA",
  "key7": "2oTRh29FAuofj8Y2N3PeXTbWd6qsXmb59yJz61iVgNsSdUQNoEKtJgkM1keT8pAaCd1XvCfTmd7NXjBJjsQWSabP",
  "key8": "58UpEBt2cCtkDVYyvRBVQFgLoBoDJ11ssCr8fpBup81H8LxLrkk7GXKJiQsvFReySwmTM24rkyz5upVDH9PULR2D",
  "key9": "pkPyrHF14EXhzgaqa6cv2CJGhpRyCuANUBdFtVXe1DYHaf3JbJSzrZuKJsX72Guau3jhYf5ZRZiWkxhuCXTyD4p",
  "key10": "pxYBXNh5jF4m8seNEZEtFYU1BRsjBqbqYeqwt53BpYqeshfoceatAg944xZJ28xDEfVkMNUDdFDAen6efaomzMx",
  "key11": "2MXPM34vwsk1d5bZLrQfrSqYCfdzY6YY5RTWAwAxdMjvFjapjzLmCtTL5dGCMZx5tNV92UppVAxsvxscoV69QgvM",
  "key12": "tuUG6iKZNpeuytRgWqE1RFzGswtEb2tsC1TeGsbe1HiU6zPgGK7RkNDWhniGM4EMRXXadANsNXooBkN7XGepbX3",
  "key13": "ZyTSZoSY33ViF9t8YLztxnkC6rFWyzV6j3eJtzPAXNsJw7RrckCASd5v5HWHPiyFpgE3MS3oF7K6b3MVugFf92e",
  "key14": "4Yf9ZG6CFXBqoYvdX44WGcbnAm77gXjxZ5woUTZRdMsq8VYof38kHUVpnvhYTJApTRyrQAVbEpGF6VEchDHHM6g3",
  "key15": "658BBQuWshL1HUx8JAt3GQZ1sw1WnWaYKesk4p9eKNyEkRp3FXyzdAst9j3yUGJ3cZuyqySJd3LaLEDRFLioVDnZ",
  "key16": "5rqJ2e67kBFfSz1kfuZxw5ins5HiDgXi2WcThwB9CYkA4PGboAXzADD95GSZrAerrtgvqcpUcTyiDS2cCHXWnTXi",
  "key17": "5CqvFJGqa8XykQxAYDYbmkR8naNd8Exy9Nb2J2f6p3efRnUDtbxoLpwSbGd2FJuJ9CyYyLZsVHma7xqqHQ4Pf5Ju",
  "key18": "4U2QiHUezDDd7ijwunVXuk6sn38446uWrx2PifTd3VRdqF4pzcBBU3NP2sdLwXjCYMXpw2BR7of6aigZLp8ZjAKS",
  "key19": "5VL4xxiCjVjuu9Bf3nrDVSczTGVrRBFVkDmmY3k3kAQkQu6PhEmK5jEsYunVr23K6iMCJWHoRdv7R2rFKCUipSZh",
  "key20": "KSuk4hjtGrF61vNPaKS2XKANN4BFtgmgpPxkWvVpPFiY5m7dxgJQumxpirn5JmqgrYhSgnEtAHGqG5oYgTqZKxy",
  "key21": "65HYLxMgpdL9zBytPZAwgyj4ojjtL5tnLAEqLC64DAfgKAJ9nPyfCwunwqQ9uXMrbASWWqnkD5iZWxtkH3SBwqu8",
  "key22": "2zJkVv9sGHXtpJhjHsDXeZRz71TuAgMQNaDtF9bSJ5iLsrkEb2qmTN5S2kcdzC2G6b83J32wZwhhj996nnQZsb87",
  "key23": "54nMSUVPjQz6jDED8iXyK3d5Mb9VDDFLxqGz7dyVyZtQQRzwtKjPy2nmsyTGaxTqmZnnVmsZajeuT1vVnw37UxUr",
  "key24": "665WJzA2vtk8qfECZuRg4QaPo2GepRNRVyZiTygpnkVHXdpZRqTa9X5QKZTHwbJ7MpccBy7TomWcKno1KaoAJVLr",
  "key25": "5vBPLNaBS5TWbfp7YgLJZfAAzKL4Vm224RXZg3T7Mw2vwR4MrY9qMcAZEtFAL5zSXFXp1SdfMCjXvm3UASUfYim5",
  "key26": "4B7XMrgMUbtbXs9N2psdSth2gDbF8Pd3rhrmeKbiVSz7ZDFomdLUbPJJMTGAWo9QAC7sjNyzjykF36kBAcPNHACk",
  "key27": "2VcwCxF5tfYu3xQbRqjfFBpYFaa9A4MKtZQnPLwgqL2pXRpDoLLZkyZXR1Ei8HVfHWiaHSNUKkkgABauyNrwThgg",
  "key28": "39rtg6JH4zXQo8SjFpQFmgZUupEJLYpsmvNhBU72h3pZrpLXrqwvYQ66ZXkDM9XYwRqDmVCddraNL3KqZteS3wNk",
  "key29": "3wJKnnFpbyYVLBQuKCXHS3pjPf2T9BBXbGqeUqqU2XEvxf9epHDJKQMqjnT6Bs4XcnpFyA5Kkmm53N3EwXYVThgv",
  "key30": "3s7fX2B9hJSsmyhiDyyQhroR84mqUMegXzHw7RZmTdia1ngkWtJPXtEMve6r9U7re99kk7JYsvLerb2GC8gXeN9m",
  "key31": "5CfBk5WP1aLMBpFEmTeWeRgfeTUUJxngqMP8cDaZ9TL7LN6rapgbqekoywQKmN8wFJNpBiCqjmHTpVfxnVpca355"
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
