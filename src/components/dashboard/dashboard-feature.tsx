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
    "3ZizeX5c2G5GjqvU8A9ZBSAHTE3wyD8nmFn5a6epA6CtgWQkFaGU1u74rb2KRioZqFAAC1LcdoAKzsZP7d1EBbGf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TSwamMThtPLKM5vGU834o1xJku9d31PUbaPCvnULvrnd1JFHTf4JXukdPNx1uHKBszePaN8vBeksV9pfwLFhsVk",
  "key1": "5QjJDDBzqVnx5dkj47ppm5h5TPU6yyrz1mP9iNUnSWkqb9Fnk5pzUUvP8w24LW6ifrJn6fDTr7r8ETrfpuTVxmtN",
  "key2": "2FAzQkUCB8SmUtMzeGRDd6xHehM1bcNVUD5wbDycFmGN4FzWn6peDcLgw1MVoMY5ghERyc9uicwKbaW3WVHZjXCc",
  "key3": "32AfT1bp7yiarGB2UN8dLBjhs6XJxyBKqBHTBrhs68EsKG4gpqbHjSW6S6wUxYhxbwaHJQ2Focy5zJ2czyhWBJm8",
  "key4": "jsV7bQdRvzxM81EKKH2fE64zxZ1pnRUEDWRsb3rH1tXRACZyzYjjUUyuiS9CiaTzcTNRxJn78HSph6Yw9CPRWpd",
  "key5": "2pvFFiBhT2T7cyzToTccZvCWGUthEmiSDgK1gA8j9rhTNQU8EjvyDGmxi7ddfh5LQnrHYjywbx2beZVdfBnqH2a7",
  "key6": "9vq3Ej97eWoG4Pv4iHw7aRPxmRNXu6QEAk9yqkAf1qpRjZgbxQVnGy8PmSEMi4H4hwdE7TkFkgFuPpAxPC7pJLk",
  "key7": "47uTvgRU5mUgHLvdttwLSvkFkUJ7ETDhni2N1UYDCSwgjgr2oWzryPdSnPhVNo9ShgmFoKbe3TBd9MuuQajrRz6N",
  "key8": "divDkJdQnPBGdetLFiLuhm6nX44RGgC4bX93j7mE995QjjyzrkRNYqVXFD5shtWk2VhpTDicRffKYuWbketcgmu",
  "key9": "2sToBhThLa1y2hZGHxRyAnv8DFz1A1uKXp5wUTBeJyECJqjgiw5PK6d9i9raCK5EwfnuU1hcXk3WNRaKBUm3ic4S",
  "key10": "qurX2mGCQXVQG4hLj8rsJBiN75vsNMbYCiif6CU87mmudxZF7MccZshJKtLmUS33JikK6pQMMVsB7bTYQpu1K6h",
  "key11": "4eXFXUiyhnqf1MLNiofsBfVypvHK2cECFWSfEPibTCvFnxagK9Z63QLE4seAUVGLJYvRfdnshFzYm4EeWppqydJH",
  "key12": "1KhCfrDgAN7i1FEyEmMQMJ62J17LKeNUeWpGokVoDVet78aJ93Aa8ctdWmE1jAUztiZMxk8MqFGHLFJ8HNdgDHr",
  "key13": "4NbgAnyiFHyxxXdSYn5jfC9Z45oLccStzURkowwGTt8YMvUZoYfP1cB93JYedr4fv3o15di8W1DcKBGG3ZwBtcYs",
  "key14": "5y77RSaUXjunoYiCza7wttwomKDNiwarhdYsEmuvJq97awhadiKCuNCKeJUFrjtf9NjUsUc5WcVTb1JnquhHAJQC",
  "key15": "3LePbnhyxhz48vzYYFSjjYBSMpu3j1jrTDHhh3qriyJbLJY3zFwQqb9Ua5KYyfL8ZeqsQWs5MFf2kdUM5tfXdmiw",
  "key16": "4YhWRs9Ep6bs5CJ3i3PPpFzCDPNRcrx6PjBbv7iBSaEeSM1NSMW2i1HzCF4cQmb6xnzAtrs6oQSEx84DJHKteaHA",
  "key17": "4teLw5e5HEHkgWanxekkkpTpwWp835qYJPJadKJhQ9DxrAiNSUKh5nwAUyiAjUN3QkqPP4Z56vPNTZScoagCLi6M",
  "key18": "3cyrzwzpUapEfrPZDw5q7GS9UjG5UofKiiaNrvm5FH3N1rBHBvBgsrDbGTBdBCbdvVEMPtFiiWW2TqJduCxiBtni",
  "key19": "ZS2xhHMafMgGt1rGTEucrux3XJULpNyfGDwXMazy1PBg9Uywp73kxEM7JYiPjBCxXLzm3W4WJVswcwJRU9wJcAe",
  "key20": "5Fg6A2zsAb3ymfYQR4FRKD8PTGwLP9T9cgLfPijWXgEpREHxKYXBp85MybELquKKT5UAQNrFbVtamGgmkNr9Sn2s",
  "key21": "9NSMpn4XYMnUFg9ByaU28kYmm3dz6j5yMtM6VKyZXfm7WPp9gJRDMrFi8dc54BRCfkX6pQWVTfAntRoELCoLLgx",
  "key22": "H4Y1GmWdmCjwx1tq39eCxttRi9ZCnrSdJ7JBYDa8xqesoVCjRC6LaKFLFmicfkQhsdLT4HULTd1C7JFrQLZ9c65",
  "key23": "29pNxwSAAiVbPBKuvmRWV817hEmAcQfNbqW6RAcFtJjjnknMP2Tm1usKibcYi3o6s36iAVqAe3dFJar29pGK1WFW",
  "key24": "5tUKXv4uitegGrEUP7L3q3PtM73eH5jn15mzdP1UTUENGiL3bV4awfMf24GDuAT3UERDHm5tQjeWh5HsbaBbgDwk",
  "key25": "2uH9ad3MrDB1SP6sbdr8jjLXpfm6yCfx1cbSoinAMt2Vmh1RyXHsxb59zW7j2xmmqEqMGKvRcpXRw9o2BDU5M7qH",
  "key26": "2Kfe1mDkrJsfL55AfjPDAFUX391fgqpu2dcXRoMvjQZSH15WVyCnk9k3RWk1jYVjmYFzF7Q6GELmmrty4ygzh1vB",
  "key27": "4SuqwRtsCPxJcFxm6x6V2zKvGjYaRs44xyjXYkJ7fqbM9tstLy2ckvTqsAvbePYo9hnbp3oYsQDKHbcfBBvHkTHC",
  "key28": "38GE1V8yt8pHCaEYM5FBbYJHHgFooTgMvih8627sBnm7aEEGBetZurEE5E8m8UXo3Vb8z5ES4RSUhxVVQBkFwzUX",
  "key29": "3Gg1xF9bg22Mv7oiU9gGspowHphEs4feut6xmEdcfWYZvZdvTECeMQuSQz2cxKDr4xzjFZUivqPDRDVvpdHVa4Y1",
  "key30": "4aVZmF7Uxp3iusxAG4jXkUaHmtvoFGUgH5wANHjBYHahD2u13HgBTL2WRokXzjtYHoEvu9LX3uTf1yDQMrdG62fS"
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
