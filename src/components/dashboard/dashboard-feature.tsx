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
    "Pu6JSX8FvNS5ybXqw5Ze9m6ZtHU5MCmkQnj5CyVYBkygdoXMtJyFF5qrE9VtddpNvKrkY7bjCFpwRLzF3mSv3k8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VAB6odZ6R6ECqr5kpYbJWzEzRC8ARapEAyjczbxrhya7yrvpumziv8fh45HqiwqXfWzWnMPBBXux25cTb2fvtHp",
  "key1": "3MPSAWY1qDoCyZ1xVhwhcibdtgEFotv1dnDDRQmSctnZfWeqMVci9eWAQaEAG2URdTa4vewhZvCry72ESug4hL9u",
  "key2": "522hVPHrHbHX4AuYMMSzgakzbrkJQvAcbCFe1xvE8iWNG86QZNQivfeNGS817R17yr9ZyRNthfDT2DdbvJ6zFY6N",
  "key3": "2q5aLfYhcKEbhoNiJ7S8FdwrJMWTY6XTLZXJcqXvhUVNH8mSqunteNHRu1BgrkKqJFbgygaQoqKprPdveGogr1fM",
  "key4": "3UxyM6o6TKL2RBqh3Red9sUmZ779tRwqQyY4aNkYayZrkEc38BVoN6ctvf6oxmC1yxDiXRufYhCpvysXNumazQrF",
  "key5": "5UkBftC1Gd12NytxVGK5iPGP9Nxhq9TGVuHKojsCPKdTQmEXeSnsY3v7TVXJ88qEx9UVdtpDxdAg5M4NjQbQJaVb",
  "key6": "5tJPAypskwVv6zhKvFG2z4KLbkrY9iv5b1vv2zXdBWUdti2E5qGvWTYJVZbVu2LYbrAiYr4nNHr3HfqMbPBKEfgH",
  "key7": "2wd6Qy3j4eXcuib1qHpRy6qA4KXsCAKJS1h4a8T22HDxAJUZQtvwbpFnuCGxxG2Vx5ap4B2515odsYiCvs8GF2zW",
  "key8": "JfwdU2d9tmVKxxozWvAFL9oEYgURZQtyVrspuP3bkEexR7uHfjeFHC1T6JjrZZCyyLZ1wthGrRjMvWp8ju1zYVm",
  "key9": "2f3xP922X5QDfVzu2dAU1GWWT5wYBdDGdnpEmy6BaX3au12oYM2KhiksTd2JW9tTf5MA7SgGodqVo8Tr1TAxBWpo",
  "key10": "314WSwGBXGNtji5BP7g4fGDbvPLVrdhb6yKtRPAkbGYNDxF6P8Wg7vy1dSaeiCgAqj1yekqMHpSP61PScSgQeGGS",
  "key11": "3Qh25Gz6eELffT8bDgY4C3k3kGZQRK6zXPxrPbTJWnS44TPeGezs2u1eJJW2yHqWe3L6Q5rLkCWPRQjH3kHAent8",
  "key12": "VPn2ZtjrTpuoZFnxnorFPDb6ePT2PqnUrGzJUH5fsyn6c2VRf98sK7RbZTjELHaLzzZVrmPGhZ7PvNSifGuP1kh",
  "key13": "4QVRFJXYCycbmNAQJHFyHh9Zy5NofppeRVL312HmRb28mzvKfAgWr9BYqzTQc4A4QRV7vekFxiFVYjBaWUV5uc9P",
  "key14": "5hU38yienUrnSuT6UT3ZW4dRffzsvPkianVB5K7hCNU1Xhmhj82NCdYcZCDagACkPzx4iBH7UzcP3rmkytperet9",
  "key15": "2rUdhrseTP8wQsa8AMPc3F74FybaD9bWdo3XLVUPQMcV3cbCTwe5bzLtzNcm59KdVzPXJPLdVvpFnUyKRtnVmc2o",
  "key16": "5Xe1FDvTSLsVZxvxqk9Z4iYPvnoY5DX9LQ1yw5rThXX2rMJ9Ty4p3NfcJHXqsq7pGY5cN6zpTUBSWHcayektaJui",
  "key17": "2oFLWQBbR7BBYvAoigyCbAqGcxsDeTymNy7h3fQquzzsgu5SXTRagMr6fVsNSRUpQPEqYYw7GpPfNNP5hsP7RyKa",
  "key18": "ivYu9QkMouC7oBe6Unucq8mEgayvu5JcjG4FpVwPru1ysoBTKSxqzcC9QsPsbtUdqmrr6t6GfZSwXtmVU5kefnP",
  "key19": "2CtiAD4XZmAtfKSKbrkFpTqGUS5LsKmtiYL8vTy1R2DSJiwYwGae5SMjzqZ5gYHyXgpmpKzusHQmQSanWmPw9B6H",
  "key20": "4cJpqDM3Pr3rvgMuYZ5PgwwvzXbQu9YVUUH3mK5BSAZqgzrj7wvAbQh5PJistvxjWY1wfkmRNfumepDa8zi3cace",
  "key21": "tBF48SfPkYisnZjaCUpGEaTRTtSA6RMfi49pUsUeiVt4JKpgUaUwWN1J6nn27AAwmPRy5DeynTQSnuWEKb23tio",
  "key22": "gyijFtQDRg5RVZntGowGYCydvvYyQQeyPETszjEvuxuAagZcc2tuiTwSc37BEx8n2DpXH2rPi4Yzc7zQWKG7Mud",
  "key23": "5wny5UZxgWau12eag62jV7PDRgf8ToDA4MXMFmsJyXdfRbLGQWJfB8QE3kuY8dZHJ3QSdWNCUH8B2vAQ8Jt1zrUu",
  "key24": "4o2ee2dqkiP4G8wQuXA2QxA81PDR3kD9xR9Fo9i8qKhvQxKHKyaqyPdnUhrPGEWK26FX5pPXiEge5jE8riXRtVTV",
  "key25": "2N9DjtCfnWpPNPpLMk8qR6pur34PGAbzwUYgaqxPY42xJMbfjaG5fUtXiMCwvw7pL4FReoYNqbNgNawim5fxi6s6",
  "key26": "3sSP8NKX4LY9cAW7dJMA4SxyK6hc959xXmzUwQueTfQ7yn84WTSprj1FVY8mf9ar9WgERmQ1rqJu4953yYzfNxC3",
  "key27": "37vccy3f1V5sq9mQJGg2QPJ9GyqUs3yVpYX5erHcS9aS75RQcBhqNj9u9c7idhCLtV4Chudpb9tL9z3ykJPwyX5a",
  "key28": "4ACWP5U1dH5pZ4QVEafvXKpusKiSebAG2KA4JDUUNKsnC92LnZMotADmWjBZJDeuey9Srvapnt9txbBaP1c3vgtv",
  "key29": "67aeJrBZ86STQnfQiQpaVq8sii96G7uUo36HL1mLx2sKT2mHR7S4oPffF3E5AcMvcc8FMEepGpXMfoSV7Hv6C7Rw",
  "key30": "JCDeCieXpGbBpq2x8iGSY2gjkQMZQjuMWFfg2ewe3ukT5ALcjDL5Z6xQFuKMQFSSq8Dfw62EPy1wkSndhjnReRH",
  "key31": "4oHBJbCaMk1bJu4MTLA4weDiFxG4m8pA7f2xyCHRjou14Z7CJCVHnNsze6NympW5YUBSwKb8BgM648KsYDiTygGe",
  "key32": "2KuRTfkBJdCtnqFCXXbMYGBHhhEj88J6N8KmHumbtxdLQZx9tfhnP7ZmAsMi4Ee8uw2LCxchWAzkwyvMMmsfvavi",
  "key33": "2EUgP1DBPhJtuWVskHiAckXcP6FhRcYdtACDcw9pYgBVWqWpEa4ygAUSb5HXjqZpCKWDJABy1sTwbrrSJC1q8EXQ",
  "key34": "2exdtFUwqRLcZXDnZ7BMwDNK2eVLNv6xF5YfBUNXeRAzFTBnSY61n4sYXStW1LiF1tKMTgu8nHVGBGt1AwYwxtCp",
  "key35": "Deuk8n3B1LwbVnF7MvzbqHvFwm8K6EVnC3HsdVRw5uEpbrVAWGBNZvKaU4ML2ey8WoF4q253WYMET61EPc3vYiH",
  "key36": "4MPjNGfMDY6PT7w2bgRhf8pD5ep1fxHV9qXvFbGGxq5ggZu1EUTQvkZEkpqJqzjfSxwgLfNzzepETo9LFepJDpmf",
  "key37": "3eBWEYdVupB1BMPxchL856mZnXExGAW2DspRXU91Z61WiPn3zvv1R6tANEpEegcsag35USkCu9PsyPYCmU8xHE68",
  "key38": "56Az1nmmGhWbdRXmsfFrZPz8NfDUB5A9EYC4or3ESHvGjH59rkxFJpXTxAVi9bULkbKrkJ7r44iE89xzC4P6sB28",
  "key39": "5F7LXgWoULgdmSD1Q2jxEjniHJnzL3qSnqBFUEqGi66PP9wkwvrbZMSyt6SUQuao9CCdrZPf46SXiPnJhS6cHeq2",
  "key40": "5Br8SBGtJyzcsyWqVWPJTs8fW4prezCxFbCuYQxjhZjn5SbD3ptxrpcmn4nTGW2Jz5cv2VQfN8V3N8FD5eE3cufF",
  "key41": "55cNoQcwr2QhT2p8X95rPa6v33Fq3tSTd9hxE7Ct7H2hdbevQHnq47Fo2B1Bc8xMjGxGhCzynNAcx7C7CibAdCxF",
  "key42": "3iunXLHPk7LMzd6uu4obNNHk1huXMvBFd6DHmFytqm1fW38x6YpkzAvuSFt9wdhsxvG2ZdULre5Mi9YTcj4pQMBv",
  "key43": "5DTXbsWtMn6wqxYjNRRXYynuwyenj99pKXDdTog1Tc5VAUnZHVDthbPX1Xs7cDqj75MeCAYqVaUw8rtUJVq3MmQi"
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
