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
    "4C4PWcuNoc4Yixms455VpAzsmVVkp7ezH2Uanv5hHFE8iEXHvT98chwVVpKFrPCuVgkn9AS7gJBEqVwgaZqcLGp4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TEV95eqkWe4CunwczYC6RKzmBEKrkFC5hjh8Bgs81smJ8KSStRXiNXKadFRmDPxpXEBHoHWqdEuydi7K59HBzhm",
  "key1": "5aomXcQdFjBhFzkgamwrmaNTwUSzZApeRVaQykc2WBH9fv7Va2aDvYj7DoJfAsi6mHptfDLf38nFq348Zq1TwCwE",
  "key2": "4ksj1AUyrNfy8hC7W3BdHD7UHAvKtFvF9ZkXiGxuZHrFBJ2fQovUeEFKq6aRbLn9h6EDc9aXpS7cnGS32ruRytUs",
  "key3": "2UB87LQ83JEjQDBHSCmscYHyJr4yimXL34AnUMkjWCdea3q1YtRaGSapWBdY1M1tKyksi3atqpo9mcXDHSk2VLvi",
  "key4": "TAdoomvVgEuhi4DfEuFvNZNJ3x7j6bPHUPv7gxxvZUeeicTEuJw3pEj2Ea6va1McnLwH6dS7HQGmGcj93Y8XEGn",
  "key5": "3TT2BDk8qQ88Wg6U26iqTe1CtzLDENamFChW9Gh25D5pwcRRuXxbyBaWVxs87V94c9QbypZLr431mxXTn7zGf8mH",
  "key6": "57EoukAuDgNeMxRoQXubMBWQWpJwpBciS7KhCebhWibMwhteSVs5NqTbd67b1Xdsv6qTWkjaXnqprD62foQWQMin",
  "key7": "2hSse79f7Cfk9PAUijFftuLWmJkqEuvvPAHTnNNdgbcsiBXyswuM7jtc1dD3jaxAW5QWQ8dXYeAHeogtwbq5fPuS",
  "key8": "Lpr4N7vfvn1stgBKLV5kNqT8dd7b5XWPGtVV52edA93CYT4PM5mpk1RBPhRvC51Z2XUqq5d86M7mJTC29QQdnDg",
  "key9": "26LC2qppKdBtHQ2Rfrhx8xWGQZ912LgyFBr61VbcURGquacnvC14usGCxbiPEcWhGqTyjTGXNmsq6GX7pyjqDw2m",
  "key10": "s5cX5KrSpazJCm1VBdiAvhACSC5HtJyxfRiRbAmWYpqK3N4enD9MsfYJZ7HiyiLSCck4eqc76LfWAJ18kNV6rcN",
  "key11": "2YYzEhW5H8QPWd5pBBajmUKCWkccLLSiktDhNHtEgaJjYBAKFNgShm5DD84fWQUKooxaskhusroJmGaoQnR86hiC",
  "key12": "4UPqbLHsPVBgTp9hEQXDa58vqg9cKp47iJw8WoG2AxkQA8kNfxTDxBjZsmsRfHYu91YgUZKAPYgqmi5ep7rb9gsH",
  "key13": "33TT3rK4tYQs81SKDCAb28eYTwMrLgiiviTZbAxiVXvDN6BoytjWFFRRdXZgmzGxToLwGfnFhNFytfWAoqQ63HJJ",
  "key14": "2gtS8Kc5QTXBVANDFmq6McUYTdtzxBQbhc2o6N5xG8gG6jSGbNW6s39iPjw1rrgWpMXeTCuRugzHf7VPLzzyprUm",
  "key15": "HPjxG9QzntZCaKX6Vu3wtVu7jbHxferhNxnnLdvmU7bvNc3aXVWYjXDmQbf7hbpYWSXMsvWMKg9jwArrAeX9wzx",
  "key16": "3JB4MYeS9A6SbCmZ3gG6ciCesquW2NFw6tyGq2Cusx9bLTwjkvPk833zir55BBBkWVtJZYpYEfXuckLv9DfC8Nja",
  "key17": "5nzcFB7x2vYpA9sV7grBzW9RRCaQFY2f6DkoEZuedJbJoQofaBpEzy33VwNX7oa1ZeGAvwg43XysSurg9idGPEgD",
  "key18": "2wGu4aDWuhFy4b95BgrnuryRRozxrgZCBHTsDvZ381Rg26bzhvrGSUDfFYh51idagJMwtzoj6BXcAa2ctm7DMbHH",
  "key19": "5sC4HubU4LLUoDfSm5Wj9Bb5FdU5FX8yduH1FE7JYNkV5eAcjq6Z3CWBnVSG7terYGLM6ugf1QTPYECM7T2NTUGX",
  "key20": "a3y2i5hUyE9rijtNBjQ9jtZhHSc4YtTX5cH5N8Bnnf31H2kySfm5XRL3zjvFxJ8EYr4KfKtLtytSoJTLLgSJ4eK",
  "key21": "46MjeNmmvxyFLm1MZ7aHb2PjzH9XArk8VpoVG3DtZ4J1XrKTSd3NBhbdQa73zS5xm2TXrkZPdP6NFAPdHr9jU7eu",
  "key22": "4H2AE5ZR3pLFAnfXd6gdroLWgFe1DDpSZKbZCCx7QW5o6TDz8HEQ6QY2EviNXYJSRfcwYAqVWUQh97my6uNWyPQJ",
  "key23": "4PcZGeHXJqs7av5FN9yrUeByswrxi3YaSnL4XMBn2J8zs69BgihbEJpRvyR7HTkce7GG4h974h7Q894FqL36UEhd",
  "key24": "VF5BU5MWxwAFh7UX98cpVEGUxGqDtzSUKfZ4wB2bPEcxHZQntd2P2EQAjRJWfUxykBjW5LkHSK6DQJNq1tr9LKH",
  "key25": "sMfcz1djx9sLLCGk8CFZKnr8V93Pz9SLeXrWfBCC6o5qLMthWmmKozVjanrHYjWV625qHh6tkDsPfxmoGk6SPep",
  "key26": "3s9VDqWBsKovbNMGsmJ1pLgcgBdvvrRQCUKeEk8b3NihvfxT1WiwmwULVbyj3WT2rPx5sZHKFpqJZsZASPd7ZtyC",
  "key27": "3REhFA54of2K7Y4hxmCSxdhb1Ehtwgd9eqN8DQiG378GruoZycfbyZ2hUGaANxY9xCKayiDurdXqiGcgLvLoLHcn",
  "key28": "tYeBGQBrvEJPSVZhrGQBpgvKF9FpTsj8S4XBqnnVBWy3p89Hbqvgf67dnVe6p6DzKaFzaeqDouEKS1wQ9LwcuYt",
  "key29": "5VJkUQt7snB7a97zZrjS4WQkQndAsBFcHShg9HgAsVbuQRBKqkDaYXjPN5rKnH9BHHXVkrQMy1dSbviH8adKh1v5",
  "key30": "2qF26QUCDUCQtMocecNHy1ZG1yWS5aYPUfX5ZmcnNE6i5YBjuxy6BxBjWsQpQYzMLqbJNBWUxJDB6Dn692HfAw17",
  "key31": "2rhHxEPfrv9WJbWVhLQgNFqbqt6KnkSzKXregezZfWGxxrx83aS5pDt282AsTdJPX9objK8G6tiVYNHwEtRqoUj5",
  "key32": "4uAJaeTNgcin79mBg3ZHDritqCRFa2xY97xLS7L6SCJNgMSZsofumqKeNGb94vjYcBtwmAZ8r8heHpP1HvVgqwGf",
  "key33": "5drJHHe3MLsNZxriuj3tfVcc32v9cib32HoQFz3hg5zXZ3Nk9izjFd3aNDmSk7NWVTHExDUMBDBnJNRAmELwFXpj",
  "key34": "2gRs6LBFVkMvbhtwDdfma7GcDrRTAwXE353nm467oSpZQTNCanFMsmHEUBtK1PbtvTD6mBnsEvPZHzC2dn9UzkJg",
  "key35": "jkx3uEU2jhBipt2LwNKScTcHvmZFp7vyHJPtiZmDfUkx5JEAwJsG5FJB11qWQDb84t1yFRU5SpSq9g3J7wSoJsA",
  "key36": "4fjf4qbLtFRj5bxPhi8pNdQnErroaAcPNfPjCGLk5fzGyLY1frcTnE4SRujJDZ4pdSvHu1rRQMU7EgGdgXVD4nBf",
  "key37": "3ZRreX1ibZtprzKsxHYC4gjSpo46tifKFTLx7J3KZmk6xd4zKgF2XzcVWFNspLejBWdUCBarb2gGGSQSAPYhQyVT"
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
