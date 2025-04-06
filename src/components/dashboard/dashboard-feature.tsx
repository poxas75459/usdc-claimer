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
    "3sErMYU1A77241Dyv1m54MYDgFu38aDnvaXQYpP1ip3TKaEjuLTEcuY9Fe6yXXusXmsAAqSrXKBYvZLPQ5ANe14M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fHgYRqQnWHtrxk1uyTuuPmeNuH7MvBJ3XXMVHjYoBxsRq2vJswMcJZ6jA2We4PMuqKn8RL7iwQ47e8KQbg3tKtx",
  "key1": "5M6J9s8j3XgV1JMsgCVD7Yqdh9b9RSmwu5PkRohq2zGWmQGK3e6Grpod7FFpRFPR1b5V2uUi1tBP88dP8FdJxadb",
  "key2": "5X3qzuRR2prinLzdFTQMh5X7PaJbyQD2gocYTf7KYXMXhptFamAVEsvNFHYuEfVAkgd38RJN8j4SupgE28fjB9cr",
  "key3": "2ppSwVmhM8ugyi1iZ1xTh5P5S1uRJKiz4h5tL2r3i7q4mVRaFbJksv3s2C4E8zDrdT2E3qdfhgPLJWHV15SSJxE4",
  "key4": "etFHehLHwsdVcthx4wVsiuWDox57334hwXcdBtje6aTAGcPL5uB8WWUwUG2uF7cV3L9qWi4qjuQAHWh4gbnhe4m",
  "key5": "4HomsAp3RWKSxCDJ7ccwCxLuKZVtovJ2CUxgjbXQSmVXnS7g6LD8PiCjUCUegjgQUwoErpmq2T8imcuwry1U37UL",
  "key6": "4uUGEnZD746ZDhDyu8P7TsaGT1J7Tk3PmVYENbYo5ZuDcPNWmess3akptpDfs2QG2HdgXNWKsZFHeRV37b77XxN4",
  "key7": "4Lz3CpLjrGMSuN1GKBzNWjPgrDzWDfgS6sTTyfKmdmv7S483bYvtt8c43evXynqKZWb7t917t4GEfbbh1MJhqRxt",
  "key8": "2h6r2BHyJwL8ii8bmnesxp4G2jJiUsYxREvPyQdodhxjNFfkb496QtPB5bZiWHzhRtq4naVmAY6z1RHcypxHaGwW",
  "key9": "2CfNaVwH8PqU7cde177WJEmNXqVuhDKADUYSL3kDFjn7hxemTM4xjAEokfj791XeSzgZGoneDT7K9T5k8cmDAyGw",
  "key10": "rDNVwRm9Cwo5xTdQxumNK85SVfmkRHCaN8kDRtaWSnfigPCastsx2jScVVCEpBrAVQVCJw89qcBRD9foenHNoec",
  "key11": "4JWy2eQ9uiEA2cg7bQa9wfCSXXhWmi8PWJ8JJ4JN2t8NLbTCBK1AzTDQWSnPiNufrjERwmTNwiEH352gv27rz8zi",
  "key12": "5uMhCKUTuV22Lz5eNDt89S7eKSgM4HpdSMcAtbNKon5gjnFRbKw2LvEBBRuAZbdRX8mGxceVZjdaqv4rUVeZiUBW",
  "key13": "5Ta95T45ZBKbsDYEd72BayAFXBzHeE14ag1ULXivxkuytDH1vHanbPBTNCEBdmiUJ6b9NPFFj6oxvELV7USTGJUM",
  "key14": "3vHWtRAeqfM97XXGyyjkCeT93aCppy8sYz8Zw4ouxMoktLK2niDrsTPZphFZJ8DXBHMEhkTnEENcKfgCjxTWSMyg",
  "key15": "AMjf5krtFUNsczZ16hPxN9JxX9wXo2omf2znZRwByb1Fe6cMaJyv1J2oCc41Qki1k2KNEmfcXW4dt81hLCasY69",
  "key16": "7Wx8CWn5cGh1GUW1WXtii6khsUnW78dskaFJ5eMCBfXceAzuwv3nr58A1HjxJkeEnRzzKjd677tur2PiVGRrXFK",
  "key17": "5xXFWuTAEsWa5aVnE5YGoNaJxqLUNaY1mgTsAb3GdZXVL4SBXQyUMEVDPixGfnu5s5Fc91SVxDT69RQTc5hgBmTN",
  "key18": "5HCVc7ZmP31EHTYymisjn1cmqsPu5U2q8RVvVo5q88n5MV5U6dRHy5M1GMJEQnmwR6GtczzeLxpBcGUAR5tDxQ17",
  "key19": "4LKj5gbMxDoknL435oUkiVXzoN26mXDjQ15C9HvECA3UKAdvgJtpDoN9jUqgJ5XVxvZDGTcH3fBhmogvCeF9SYqZ",
  "key20": "3U7YdUXiX2MYFUxfnRZjQ9xdvfeKmyWqafH3qMEN6Vhn9bxgvSAhh4DFLY6cDveBdRNJ7vAjB47Y7JjB3bhQxkJF",
  "key21": "3RE3ZZcw3BWhhdGLs8KVWpFZGZqtQNEvqyFkbYYSsaUxuGskVXpVHXxKo4S2AJbhh536ehzTFpbqrL7wRRnij5tV",
  "key22": "5JSrGTqhpQbhYP92iF9d5NQzpE9nX4mMjn3dmTCndguiuLrFcSVXwZkk8eJU38sCWB1a9yKbcKQfwTnDbWPyHn7m",
  "key23": "3fJG3rDWVdNNKj1p6Z3tKTgohM44pePg4FZdfcL8nAcWvjhzmdwYqxXqE1gQ99J5PZwwJRHqctHoGEk7rJXzesn4",
  "key24": "5jVhHoFupXs8mBpzPPY2N3RVFpvieJVTqj8Z9ykLRGBL9fGwAhdEDhbZYt1kR8pbd37oUXbVt3J4hWuW6VdZp4Wy",
  "key25": "2XR7oF7xFCQMLXbDepdPgfaGC47Cz6yfiMNofRc5cJRUoYFDMgXCVX7eNEgT4uUKboSpABp4uRx5E4TyW9EV56Aw",
  "key26": "4EoMViorEX8SxwS6pBn4Tqbvje37te1zaFMTpoWvVWhDfjrmYW1E5nbuU1JVQqdWncFmSSnUUsLR83Spyig9XE5F",
  "key27": "RwRdGLYe3VeuLtoVx6Wk128XrsxSWz1XAYETTeAkUCAiurM35rLg8yppvF4oX9CFPN8m5gDzoQXCB6kq5gfg51f",
  "key28": "5RcmtcfuuKhp2xk5NAS5CHMvn6t298EA9uPSS4H9NcVGbCGm1hTeU9XhDb3TWdhs17r1vYWNKDHBiAWymgCaEb4J",
  "key29": "5x5Z6oX1iisurQbr7dmZE2DbnHBdYjKtZP7BaFj6fxraaHHHzB33UKURxmCMiJyWQHChghimY9cPuYcEjdeUQHSZ",
  "key30": "2BCDWvwXpNyvJeXTPst7EtsnS667HfcXSYYrNVQtsnogREaj2CyVSShGh2CpPanLhLNqPgDvMbgSzUZKwWmk1Sss",
  "key31": "q9mUxekL5zc2KLgTDSctf28BYe2moQ1yxvugUijwAqaSTgCtduPvRbhXirMSzDRPtoeySdxyt7Dewdty5mAKebN",
  "key32": "4KMyQ13oH7wKX1cukd9zbrbVXX4Pbu3Cf4wCGs4Go296CUHCKyguqY6Ay5J5hTNUDyA6SHcEVfFaSSKLaiBourE9",
  "key33": "61cJRSCwCxjfzx1eKnALBKQQu2bCRozMDS8oVgQAPrFDRXDmRq1ekG7HuZQHrWWHL2MJpzdZdGWjcumAFk6MSsyh",
  "key34": "32D3oFUib5b5GVqAxrYxLrkZtnTdUZeLYNYXKMoPn3BAYJE18fRsTX9Ry6NfSD5f5BV4RWRF5dxD9VjAJEJyh2g1",
  "key35": "HwETTaKDS1wj4Ta6M4G4X4UruYoPyr7JGizrK4Mi5siYjBxQNiNmp1bQY9VEAJCM7n1berXc4FdVJE8zjhpnKwp",
  "key36": "24Kfu5QNLgZLfZuDXMs2dvAxgCoTFY7Ucu7DooGNMdBw9GzsUahMg5yEPMTwFXTWk5RvNxYUbdgKKV4386Q9kmWS",
  "key37": "527hAW1oh6EWkZHHhehsKF65hzbYtRbvLZgdQvjB8EkuaFWdkWAsYphzAetL9TH8CpiH8ADsAu8GHrrLEf6vCwc8",
  "key38": "2AsUYk8NuULMeo4xBC7ZfPTjibXwHsMgBxJhqUnBEW4QotbvRzB4jcTSQaVgFmnZrEKvtMAoDLtijmcgrzpFKskk"
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
