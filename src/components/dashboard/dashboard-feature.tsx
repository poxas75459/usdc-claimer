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
    "3k5ymuLkQtT8pdDUJVCkEHNRQvwniG98XzHzUdBKruS9LBxnb9E5kvaQbn3Yku7PLobM3g4GL91VjwQjTsko8ohE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PxYNiwXS58jaRgLAD11sdksH7vRPNbP1F9uSGTvaKAcT15rQDKJmjWTcwZ4S8GithGUHBYr7azU6p8wF5uuf8C5",
  "key1": "5pFdi4uQB38W6kNEVYxvPt8BipLESELTishBNcVxfAEKeGfqtn7k8mc8bPZWif29h82uSh8ciAQYu8T5LGv6E1fP",
  "key2": "3XBhLBnnMr84WbgZx1FXmRDW76Siq9Bhg8yGb2kcXLiPQK8vRwU7ntiB1Ln3n4tJQ9axsRSTp5RFmmX5XYNKvXu8",
  "key3": "4RCHn6yxgzxH7mDrz23jg8xHnn2c2AfqVyzbGS4aEALZ4apUxSH1uJpwDBxqmWnxNjSbEr3LdV71UfdNYZBrsMFa",
  "key4": "1qTuYhGQbDcNoWg3QHMqp1pasEQwSHdoX9X3nggHuYpPgRfbZHjfBxGmuB4HFdvwBNs2KLbHVBibg4bH17GYUqu",
  "key5": "4MLkMXWPAmDjMnfirQr9sMaLBM3PiqKWQ1aDHjYDmwU8mKXSbRwnRG6wtf2PRkd7zpmiWuhaZZwoRdoKNwFwv7vw",
  "key6": "4DDhwkjiVmQwiqJ2ht8awuvJo7Kt2hLah83dX4G5TWnpbL8QibXBbDoQWwNgtckJJVXiX9JU1xPNG7zgdnok8Yqs",
  "key7": "4JuujGhpbKKz2VAmfuVLcc6y1PzPgbCCmngi5Fz2XPGSNyQSNxm6jUZ3k1nL873PAYcbZcPupiGujjjce3Lo16vR",
  "key8": "5n3pxWwCsw9xZxw66SuejQsN3w7kib8LMQKeJ6U9J9dKPcskTGMkuzzxwZgoVCrJGEFqXypiQnNhp92r1GzNUF4T",
  "key9": "4gETvMQVN8Z3Y3rEcFbx999PEDXE5JMWAh1PHK7dGWFGTUHKzsxe42V1AafgueuufyPLnceWLUANYaneE9KGqTEM",
  "key10": "3FTXSidzmLn2z7TNRFfz3iLG1GRpxnQry18Uz1j3ojKwmEpz2YSDuccpFPTNBXkscWNp8Ku6ESA8JxzPtbofiShz",
  "key11": "5nwFfnuAsGqrAx1c4ddpSjiwSi5srSwWg6XGP4HbYPUW4niLXmS7CgbXH47sWigmRVr6iwkP52hcemxnEqdNtNUi",
  "key12": "5YpxizHbNju8SLjkX6PGde2yhaA8eMTESsjBNf4Wq3DqJRbfEnnVdU8PfawdPfVmmzbCTzD1Q1ysvUGLyCyLXog2",
  "key13": "2kDKwaivUjwiXBvD6f1DJeWSHaFqr4w7iq1y1iEZ9oeFJRJGW7Lk5zATqNZZMCE4eRsX74WJtYuJ7ofvpm93JX7Z",
  "key14": "2gwbo97P22onxH9Xxvwo2yJx3pUTirVqrchsRAi36jy9dpnyusHbZhNCRkR5pswFE5WfgabuiNjCMxTwj36cenkL",
  "key15": "2VEC4gHjbWMCSbiCd6dcbrW41jDkKXFU13fbT7xpktrTwJybAkD3urSQhirdaQcnq7x6Ssvttbi1CjUdJqUpQP3j",
  "key16": "4B7SK4aqMXHAk7dRTo4QavTDMm9RAFttahJgXQ2Tac1oM1Ea7htmVqkiojizHEX1JoSg6fCw3vKnGimhJdT5ebju",
  "key17": "22gdwEZiBuTwdaqebVYcaZyqmppJdEqVERsJduoXFvAu1z6Jom4o9DKsuPHWfDsqM9YF9bg17eHU6FtS8RC1bSTK",
  "key18": "3XYfrHBm5u594F3nRimdfnMVe9LTDkX9XvbLiN2XCYaHxnzFGBdTDXW7zEfcNsUAUcyH8jNYY29wrBjhZXGSNQrW",
  "key19": "Q74UNmv443v372XsUAnv8c66TxHmpWAHn7h3XZ3dVpNPjEE4UiBCTge7v37b3v4Dte9YzhHV72m2ojUJyMnJdYb",
  "key20": "4yGSUZHhZCZQx54MPmxU4vezNj6rLbgphRTxgkQv5Y2PACgTzh8oXFfZ6iLRUTKvVzbFdxyv5JWPcpQn94qQZH4S",
  "key21": "4R3BLgcMoQuPedLiBctoVSoCQodHRGVuBzRWat8UKxQRuKB2wgnxxpVdWYcAvfxf2zexdMxDGmwET9xh6FCCBx6u",
  "key22": "4ktynpJYQgxeZKrHSVAQE1wQhh2KqkLAUD21uinsWjBR7sGNLJ6g6GDf5GpUbmTXdhsYTw8qpmH1jYyHqYJeqoqh",
  "key23": "2kqvyfe3myd7H2fXXJLhPCBfPUTV9aEfiaVdUuHHX1yfX4F3sxdvDh5yhWkTWDDaQRxQQdUkPEQyAiPrTHXvJUDy",
  "key24": "3aZNRkvLs5mgARRcv7KKVSaKMEGdvV7uSWq5pmNKvfL4wiFEtJSwQ4Y8ZJq6r14N24LXGm7UAoVG74vV6XcnVDYg",
  "key25": "5Nvkb8MvBSQVS4FvM8QykZC1ycUuLW71WwauzYmrLtt1xgEv2r6pERxHXzjC9kKcDJeG1SyDxuegTRMMLwQjPECN",
  "key26": "4GPhkCYdcHnKJ1wZvGu6VDqVhmxmNT8C4jCL66fK47G5t4wiatqNqDF7yeFey3g2mVZD1ix7kqe5wQhfpjCkM1b4",
  "key27": "7YSdFcUDWGHvZTmdQ5hqqNs3FofabRiSArMpDMQQBKJN3NWT91m4zgb8Cg4Xwm1VL1X33mejUGC3uLphpfThdPx",
  "key28": "4S92FsCXHEfW9CwQbbxmu1yQvyYUwXmEctwV6TgTLCxeh9XXVsVDCT3NHNwm5BA4VxAwb3yC92ydZ7hoQ8CB4mKY",
  "key29": "5Qx9CZoccWR3XrFsxRsCW2eRfT4HW2CWgrnZkcFM5cBsEQNQ1FAufcxRYhAGnRuUv4CjX79Drz4Ras8YponpwJbK",
  "key30": "5rbxuufNs8CthCsH8TJpY6sS1TBRSmF82wFSNZ3aj7aQgUyr8C49fHzaNGbzmvoP7n15diAyTMd25G6fZAKUUKcB",
  "key31": "2wnt13RJuw1pfR9doYJnx69XNh9aVVrXCHovUvsDH4yd6Yf54ZQgEsHxrvWok6hAVDzreoh2aCFxdMdwVkYfE1Sm",
  "key32": "42HUkTofUtxN5VfFzYMbDbc2kUXaDpbHkRRckXy9aY4o2e2N1QpjhExQA4M9czrH68xscpPz1DnZ4HxufBrwYiwo",
  "key33": "54dZMXezLWfvKwK5XMPbfVT3toraaL7cvWRQ2Kcf8ZT6ep6wNC4SDvUaKHZZFMfxcp2aB5nVV7XLe68Gg12mD1Wn",
  "key34": "3JkavGBP7ggjrZEwAVAW4rSnR7Ns3ypwjCJUemP9rgxCRvo29B8dX2FJrNpb7NAG8bjFm4q5t5PLy8BoCJqFHv1h",
  "key35": "3tNZJF9dXDMEKvmp5AGn39ovr6UQtREvr9gDcDrPYc2G5c8L4NF3HJfBdKT36rVxRyqxizFjC4ccqrgY5eXGB8B6"
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
