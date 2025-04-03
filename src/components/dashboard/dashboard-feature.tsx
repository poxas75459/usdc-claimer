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
    "3LXkb6FkL2GScwnskPnT3FJUbR4UCCN9HBi24efQxtajarhEtDose92G2S6XWXrjmDCHhr7YLcJjsmuK5oFUPfY4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kR5mcXGhaNkwXR1Lxt618bd6iKWvZq9Z5zFnZaZ5hmmBz59iFYWtXS7TCBVcUS5eaxiGszFZKuMsVgCJw7UKmbC",
  "key1": "3yS7omkFjUnWm3jutKpgdTXZa3BQL2rKpBrSdwEgcV5rb8N93cmoaZLXcyCAYd2dhUdUCBt8FBvFTU7PhBtcSjHb",
  "key2": "idPhVc6vC34XDNTY54UxraBHrN3AzfRJAU1kQDuiuT3rnQxJ32zyuVmw8pFcaV8bvDNGqXfZWQ2BUfBWWDMwCDT",
  "key3": "3bqDM53w3937Jw9hChRDAnQYMHUKSjxchdKRcWfcbYLxMNai8Q1jqkdZyh33jUqvSsTLy7DGWSQjCxwaPdJri1AY",
  "key4": "61AZf4fVWaZDj2tpwQA2jC3FaHFvKkdbt3DAb4BFmXG4WLvDf5jZsLW2g211VuKNwqHMKhaDm2BBWE2zTxDLrkad",
  "key5": "HN1ZSkz7e6FkXHd1A2oh63zcsazvQmweXEnb7i5b3FW6mrWw3N8fzCp8e9dZJsHupVrjbW54em7Hi9hHHHUpzHg",
  "key6": "49mix3RKAbS8rVyBmFQVvnaVJUxT1gUchNCD9TmUD4hkRze4LjXfiFjfa5S7xYBHdc8J2PntDMYD7R57vWsHmGcR",
  "key7": "5L6Bzr6Hs7r4HKFE8eWoby2dX2SjFJUTa78dDjYQPNmsY4UUum97ztSk8x7itS3qfj4pbn4pVcZen8cXcZepJL3L",
  "key8": "2DLMBsSZnci94YGVa1hbVWPo4Gq7mYA4izN2PUZ7XqYijPfJnbwoqRvLct7dFEvGt2JTRJhRXB9WSsuPrnDFd5TL",
  "key9": "gMDL1Ri3owquiP9GdXCA7ei3da5x4SYji64TPsmqhAG1VXvJk5Y4b6FHnPPQY528euTswx17fYCQfmZMzpqvyZn",
  "key10": "4hwdUNcrSKP6Xmz8wjRrTdCxgSr1cKng6ABqfyUNWXetsRhC2tfLYpxy5XWw6owHTV4QTbvPBMdxcRDmeJFWQq4m",
  "key11": "T6hkTzw9G3MGn7WSR5zdoqCNrrFB6SMn85HthexKGHVYUkqe1QjZVhruhboBHWQiDehXBXUYngroEzM4az5EjZT",
  "key12": "FyQWacbwbDn3GESrjCPFyodztrTV9yWu3apQ6gJ74Mspjm69SiX8qRMqDPwbeyiYDy7krCauJaccxCfdwvBG3Ks",
  "key13": "aZ5MNCf2VJF555sgJmPiTkSb5PXUhRTLjUfyPXNaJW3hHgbULSbFgbHyB4J8RK1jzRQ3xPuZV8ViMgde2dqqtnK",
  "key14": "21Dsnx2m5CpRf8RJGqxhW4qKtbKsmFzWUi1kQHoT9oB4Ux1SvJPmBdnjzLYnSDtogAaptXQmdJxBwUJ6Me1eFwir",
  "key15": "5isPTXBXi7EhmaaDXdJUy2zn5hboBFeQnheWezYD75CbDunLrkeGLMfubUf1Am3exGLFcXmGY9qtfjd3vjJ6MmCe",
  "key16": "2HggTcBV49HYhN5e1HtFwM38wSKEMH2tZAWspPSTo4pTBdWoFcVHdXEdfgzVRP47jGZcMwqgkKoU96ukZjkYHQQm",
  "key17": "2TbRs7bhxt8QeGuVjoygiyZTzst2nyobBPXns8Ltv98mYaQvPqtiHQSThjjNQYe2LvcMfttuGqyqiMdFmGYxJtCE",
  "key18": "39pwc7qK8qbSREut5cdfMSeYzCp3ZydsdStC11LJaSgXdvZbJqeb48Gwh7hVazmNgnV7ua6265CcEx582Mx2v3NZ",
  "key19": "5H2ifqkVvoyCPLKHahAqe8e2bUhZKnT6HqBM3Pr7qJkPZTc3kgEfnQswuvhGC75BJCBPpTnxAP1LbS1fZjbCTtSZ",
  "key20": "4RqLDbMKWDUw94XR7nFz5Nniqdt8xkLZPJaWZRMJwrsRDDWGNhQZ5x5yuuzyYvuBupBvQsw9kDW81teFRvT4QgbQ",
  "key21": "3dCFC2mrUnGsVPCamJkQx5t6s4jVgkjhxxMFhZDQ9c1eSYNDjB5wP54aPBg7vuYbpXpW6ChE2Y8EwDHG9i9n4ma5",
  "key22": "FivVCmwyFKaSMvjHnCYFJ9HXd3WbaDdjxdw9A6iRU4PNkiyCEDHGBSADp9snRpCZANgXWdjtV1Ge9w6s65t8EYF",
  "key23": "tRxc1s9iU1TExkNDcZkdHTxvbXzAgdA8wq67SgEgLq4AnB1afK7E6eopVnA8XsjddAf8vmrE6A45bByA7VeX52P",
  "key24": "5SwUb8XjcVPxiYRbERA6wvURLcSCzGqt8g4qCJgHjXWKvcL1uDszMFs59Ay3vQUdcbLDjj9SLPFa44e1QRodgwUW",
  "key25": "4avn3qSiZUzg3CzyiMZ1n8F5QPx2bKdtpLVzmexhwKWXzUYrkCwm2yMYgCKTVNEgjgEp7oPRukgxHSifAwvLxtrq",
  "key26": "3oVxT672NRNfBXHMQtYRBuxZMFJeF3i6Ygdg6THJy2L8RSVmYAy3iy1PGeBzWv5GdMYVWpronxu1mUiaG5TVoPpF",
  "key27": "279wa5Go1SPzBrGWfYYuCZem6NGmk4gJbb6CwXqtuy7W3AmfGqXQWmhPHL2X8g6WsLCQJ3AJAdwhv2MGq1F7GmkL",
  "key28": "2qR8yBXf9r8uRs7gD5wueY92vpaNr8F9vSpBZaMiWWnr4Rm7BJDqoxGJ8c9cUgjYazi3NrdTkwUc8PRneRUr3A3s",
  "key29": "42SYJ5qNm7zQ2Un4fdzuXJXsZ2mYxCXSairLKehc2vkRQG4hu6mm5WyaBVrRppFL9XznjZGnYZN3kKvHeWoksxqF",
  "key30": "2xn7627yAX9MLBDDsMwvqoqZePqGEiXR6wi46xN1mxJRmWVEV2dxVYHTGbXYUCCr8cKnVADCZvLEs5YFFSQN3Q4s"
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
