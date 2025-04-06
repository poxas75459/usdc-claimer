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
    "37R7gr6Ji6QtcUKMPX6s9RQoUqauAMJQz9rEiDMmMpr2BYKv3K2WDHnkMSH4zkC1eLvPLMbzgYrvXcxRUwQ14nZ7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yooF8YvjMQkiat6EsB9KPKXiBknjNXgrYo3RrxQwp39Q5dLSkfMwDGh6VoHrYkzngktVXYrfsMMDiKxcK4oqWMm",
  "key1": "5BgYreenetxq8EsF2U6XAvxtMrnDFTSuFXev5b4CvopwfHLhwHSZ3zpiZTJ2tJQyUjVYsX3yQ8GRyyEePYenJfbE",
  "key2": "36k4KppFALC9c9gqQ8mFxJ7bL2odF7pYXARFQjeBkxHTD9e8VM9BNhg27Rs7uENJyyeXhmb634ibiEjuDzjmw4Ki",
  "key3": "5Kjo48SVeKKvrg4vxfauP8CZNWvBgcu6qG97XzZTZtXif2aV4xoxdsRzzBbkLXCMkNqmC79vNiNwxkdX9L3yZhw7",
  "key4": "4vUsuWYuhpRrWRA9EpfKLYfErHaCpJJqXH5FMG9MaX1QNahGkcFeks5vm6FPRur6DQvRAHhnmTNyU4BxYouWXbgC",
  "key5": "EVPu2oDVx6h83jY3Z6qvZQrkLN53jvwUBny4fwvem3DC3oHjbSNPkekVyXznDWFyvTVm4uBazm6tBGG2bauoQP4",
  "key6": "2TYKTRvfTWGJjtwZorrFZvventLubm1uorBDinxDgVunKqFmdtt7VEFyd5WpnuRSoXGJqnbp5KFzCnHXofxCHjhf",
  "key7": "5hkGwH6b7KJvSekR2M64GU56JBhCSYSjnPQkRNyPZ2KKj4Wi7zJXsEYxTWFZooT3gnPHe4uxdNZ8YpsZKuirAPZD",
  "key8": "2J7BNw3nfEDZed2BAs5LYM9vokseFofJ2m6JowScjvWVny3QV2bVUDHiFEZT7Hr8frQonRmN3cgh3GNQ7zEDptnm",
  "key9": "E1GvgE3u5iuAGeMCKzRvwfyp3JqGe9jWiB7F8eBMVPMvQoxJHWh7tAbgDUCAhvTJZ4kLFVNNt4uCT6vPtLfBkKk",
  "key10": "vXo3ZG1pwmKaf7YRzmRNFDna9gv5RCcCJ6PPETeRi6sf5faTgEmTZQjb8cH3C4JMMDsrc1NToFbSb4PvVFMc5fc",
  "key11": "3zaz9EoZLcA2MKbANQHDAteiKW5QpoCbWS5gdaVFUxPMPw4B6YQNJBt5mxir1DPvFcDZjNrwR8xPi73JePWwecy6",
  "key12": "4HKX3smu2QykhCRv5gHo1jgf7GWiGaYargWYnw8rvmiSEiS8c9oXYQucSGWjK3rhZjcgWXZ8x8QKFBsF6ChW6eNW",
  "key13": "xrKJw6ho9efoaWJPqx3arKAQ8oLwuY3fRvpG37r6ibXgJaFkxQXmsgkCS4zPY2AF6tgGzUGsbEZVTRFbBbG8Uhh",
  "key14": "54Ni2jR6duanMdqXBj53NR795pGSrt2rMhToJtGVYFMDvDQCu54p2ehBV3G8fobXdFShErAnvbVKmyGWhPffu6y",
  "key15": "2NZN6pXqa7sL5YcaCQgKyF2p9FKqxi7PmXG42baSRTa7Bvgchn77BJVY7iERRTBTMwrDCX93z69CceL1J4ugfLhw",
  "key16": "48XwRT8e9FqTR3snWNbETKJ6ucNVX6rWz26AgY2nX8wLS6Wv47qcTZUC45o4eDedX9FZQMK2A8MjnxyTsP7KknjX",
  "key17": "2ewjVEJKvvqp4VCy9jriJT7B195qf2ze3hfKdvgxeRu5ygAD8rbGuLcYRXV2JD4KSRJw87gBnAnh9ubiBJurZM8x",
  "key18": "4ssRbKtkcu8qvSxVkxNy7WSVgtLaPdqnvphDDxrZXGcsTK8RpGRkW37w1GWSLGzHUA3Z6jRZpGCKcx597MBBsQMA",
  "key19": "PrgT9AUpDW6oZbHSveXAXmKstQYAbztggPdCsNeskWVQAKvr2v9EUJg56zdmTKednGZkNy6EwdJEkzVowccZfMU",
  "key20": "3L3f8Z6unXcXinWL1JLWnQwW136mxG3sCsMdARDaE4ePFfMJDt43rh1oF715Z2g5sCHf5na3ieUNV9Pxj1nBX35D",
  "key21": "3emsZjQFk7Us8uVhZDdx37uMG8TpisRMoSFzwUHtLocYUXpVeiZfwPvC2vCK67YxoSsqn55uepAwdmDyPqWfn1zA",
  "key22": "3Mt1wuRzWXkVxK1GVA7Ahg469aFAacDdQp8Zu2MVR65w4cug2Kr2cT7ZWB6QLeDZ5ELav7v7wmMwtdrKG1WkxEGY",
  "key23": "UEMoiyYnHV8TmJGEQyaMbHmUDVf15VevC9HxSszDuUWvKx3M9947G4VuXP8tJjx1tA3ugPYmHPdBDhEH9Dfk2t2",
  "key24": "nkiPPo67vcwSCh4tkAwhtpBWaVdB4Q91idwXMsKB26gNdKrERctZihbA8mqexXN8JR1yd8KiK91rSCQQ6FXU3e4",
  "key25": "2rP85G4bSq3ntgWDaob4vsdxCV19RzDbLhEHB3hTRBrFHfDL7riZZWwSFdSt6SDMeqfQRLnZFsis159pyqGPL65d",
  "key26": "2XLjZ86UgdiumMZk9S5sjYYkUStzeu2b2AqE4oQ6VmHf1LZXv2mkcFTjPv5Hv8iLvBVpy9tEKsfuAU4WTh9Yj25W",
  "key27": "f5BEy9ibxtfP3KTGegQ2Xk9Daikvb46JFWAQqQRbatEzkBqV1m8mt58fELiaspMmoV4or7P9KyFhYLM9yJWAanS",
  "key28": "66jHxqpQ1BPpVCK9Y6pzKYiF1ey9ahaf1h34PvkzLMQ9uswnVZZJ57HNgGMex1U9Rjbtu8FxrBy2TNa9nWK5ftdk",
  "key29": "5oBjLQTpYsN4yTXWN2mjLc6oJidz27nxu5aBKxb1sBPhtnTY9P9Kbsea2fSxDiCQWjMoskCQ7hhSqwxpytN8EnRr",
  "key30": "4fYQvZ1psXzGqnBjFkPcW2p41ygFn3sTQ4RbyajTjqr5zHx8QfM5C81y1ZyTpotZZ2bRY5kXdhvTCBTTxssdwcqe",
  "key31": "5VNxFmSgUEdNTp2DQCj1NcXgTFHu8vivUs2cqQK9PVqTnUaFVJ1LeCquCFUzCEBVcBKkLiNQ4QgPypQh6QrjGiRj"
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
