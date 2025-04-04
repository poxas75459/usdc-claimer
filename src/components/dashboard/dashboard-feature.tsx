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
    "2yGYAp2XtXfRRYtKyqFRJMigbNzh4xjis613BTr4NxaSQFcjsxzUxL6FtJjyNKiZiqhDjk3gK9LL1S5Hvj2MnLMm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "517TLAsLxuKk1Pi8ZcBkH9pfuTgJAUEt283Tk5aoVotZP68aWGnnWVTKQFQUxzxqFJZ1CngA2SsbRSDQrnLNJJ6s",
  "key1": "3eb9WCSWk2KRDjN2ozKE8kbmBb2x4AxAjFRUguNy753m2QDPwNK5SEirvrseATdYGUUcrQocucsHAvqCaG5V2dYD",
  "key2": "4Kqa1it9XcXvd7PdmVmqkd5BbQUh9E9Wf1mxwNDD86kLAnYjNoCwuxwqFzczE2Fedeyf9aUWypAnkztbQTsDwR3Q",
  "key3": "4msQXtdtrsbQLt2MTy2wip9dEqYFhoPSiskk7xGyUGBgRmqBM9NR1VSbGYM3vBJWF12tzvhqgzq5iRAUC4aL8RUf",
  "key4": "3NbWyDVezgVuR2JCH8VfNVqooDdienRr7YgEq3xvqxGct3krEJoEQqzSJ2M1hraA7SZjtiMPiVY9iuSDcmtbae9k",
  "key5": "4paF69Zuyrj4kQ8VWExSC4EKdsMeYfm4UEKGM4s2sWjeCSQyY6jfmXvRu5zNJBKkaQPC1W8hBs84emRJidQCbuC",
  "key6": "5z7dHG8aifSZ1CR7Yb6ZcJ4M3FRPRB9NzJYzKxzN6FCwd7pGifsjeBZRg3uxu3gFQUr5xTP24r11qo2SzaBE9wX1",
  "key7": "3PhCDQDe9edfKFeKCSB8X9qJbmByLzHn5gTRzm9wTHHPQ7a2fZ83oWA6fS8HqpMDrz67z66SyQKGPs8hYN1dpjsK",
  "key8": "5LP7UcSvjhnepypAAEU1e95JppkhUPbrj4mHx4XMibzwRAcQ7n7rVpo4hZTFgwzB6WmkGLBvdTCHzeNbSUsy9tn2",
  "key9": "64mgEqGVxqGCXhUre3kY1JEVuZcGSRz14hj4xNEui1cvjQcfQsF6Ydj1GA1EzYYtf2c7GSv3DbMWiHvkjchu62KW",
  "key10": "5XLV8LmB4tqDMESE9QiF8x58szgiEZRyuYasRJGD86NTUY3gNDfZDHvutdD25qgTbUNqARSrEFXRnf7vu8c9Kryh",
  "key11": "oBcfDZHC5z4vZRgtpoPXySVpeY9BUVQdW7ZZSaRsy5C7bWd7VpgYYpUnqjp9DuRiyBkYS73brUN8LLU74LcirnU",
  "key12": "33vqQuHhNcMavxocKUKDw1ugLobEhaTBx4xXFknwH7Y135HgPT4oeLPoEhiEURkNPKgRubvHwM9HBKhkp89Uho7g",
  "key13": "2YmhdLBWoDn7mBuEXwTq9XNqDFNQ1pBzEk9Bq4SRXZXSVWZnXpZR2jBV7Y2RP6TYpynN2eZJThhHSpUm71jANNCS",
  "key14": "4g1kFz7tyhhnPWVDSrgY4XMJBQzZmpeGvP9xk7LiziioyhkZxA1rwpcusxy4R21cZCbBFPv1sYCP811qgbUcbNv8",
  "key15": "eCRVcNoe9jMR6L9HNMGwKtRWVCx6woiC8tkPM1fZvWkbDwtrEh9gJUUNTVUgGvsfhZSETCgBz6Uq5zsLYUCt3hA",
  "key16": "5N9e5Ckbkc9vx7yQQSct5rq75PeKjmS4sewvmaB7sWLAQ73bB5VnS1hJ5zarfgo5bUze7rX1ae2LsykPRK2vYP1s",
  "key17": "u8ZW97pThNNRpAsbcJHe79b6YsPq7v6Xfkcu7Y5qruuuesiK1Jb6Jwy9U6abvXXkbPQtpvYnbFGXygu7F8TDz3M",
  "key18": "5TpLL14GtYgRdHmjuwVvKvxWjbtNwvkdmYFPpSFY6BUbg4Yos3SE5w5TzrmgFisC7A3gjuUXDS8bp2ekSb6jVr1i",
  "key19": "36ewp4ETrfwS3HRTUirnMvYhcnKpnTeTq3BvqtwyDCg2wxpiFbBBLvG56BDgXFS4b9aAxYMgHxWNNnX8fMdscZFS",
  "key20": "2zden7WFmK1VgntNyiwVpqdref9vJL1o29prwWANTTeoJ2dA6Z9HBV57T6BdY7oyaRBG48pFeXh5m5qEtrZAf3jr",
  "key21": "4Kjt7DNsNQwhA7VziGqvvxn1GWU81ywF8noHMLE4kjkvrjRKsq52uVDzwUivMGCBqVkMxuDgdoicn56GFnwVwp68",
  "key22": "3uFnzstQ4rnRmDNdGFxsJac3opWrkp6pjxtJad1Pj3jwuYREMX2cotTEBUoGY2TpDvhogkNXbCSyQAgowcSt1gJ8",
  "key23": "3iyZS3THJxDwXUqaZyF4XEnDV5rKcTzFzVDTA4HtyZ5sJq9BykaD4RMFRnwzdWugqnwZ3WF2rs2J3CEhuqSUZK6H",
  "key24": "3KvvJksPimPaNaNAmk5WanehvLNJQZUE1X4bbMzQApbPRfJDey3dyoDDBB1izCzZGTtLMket4BtdWBgDJ5kr3HNa",
  "key25": "5DE26ebAR7rxNmRENtfxNEf5cxb7kbdR6BNdQwsRtC7bViLAtmB3arBqRHToQ1tm13DpwVAPHugJ4bADDiSdhC29",
  "key26": "4Xz4h3GrUXNwRn14FHFEVLHkz1ZoSDHApfo4xpD6x8oXgekGFi6nAwaqbZ62Y3QruTMHJfWTY7ypJ3xj7RkA5q3Y",
  "key27": "53UPvERBa6jQzXBWHQd8PtiWXzrsbM2QtxpkTDxLAD6Y68tqnX6J2Y8EsrPr9bUpXVsmmFFZFeJjwAiTFop8qoM9",
  "key28": "EhanFHinXnDY6hY1UtQVkfkJ8fnvgMdCxvZANNKNfgG6zyQAp4JCZtQ9GE491dh1TjE5749hSGFhXmNZ6PZn5Mg",
  "key29": "2NJzoGaJ1NJrQumCxanCVGtFGZ4fNg6ibn7cwS4wFPGXAdvgZPveY82wZnU933axeMSp18UWjLc898BU3aneTBMm",
  "key30": "4yh7XqAhrG9UuudY4vnRB77fwRj73QpS5Co3BfP3dJQRAxPP1Bc9FZ6xkSzbVewy6e2vsW3is7U1HEHfeh859juM"
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
