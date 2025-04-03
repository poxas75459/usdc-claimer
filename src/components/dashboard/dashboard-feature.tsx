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
    "wrRQzJFkk2XKBKWMSKk7Ji1fA6cvzzX7F89Q6YQ33XjXnaJT4dUfYZwb9YAUy1XcfaXgrh1Gw1LSLT1Anwfxv6j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nspvB6FSu78mH272tG4XoQHfwJ9fU3c9d7cUDFus7yiBddFxGfMU8ppggDQ9sjBgFQhrYBcCDweuAWpTEDtPS1G",
  "key1": "4mCMTcWXg5f2mPPeu16n37p9AdocxGLAkZZhiCQCx8UWpTEi3Sb3ynduKstN2e6ZQTdThYDWktkjmw2M5evXzrL6",
  "key2": "3RmJdZ9L1w1ZJfgWgv1Su5AgjjNCzfdYhjTw1o5nCDGWGNPrq7VsQ72TQzppAK5BXo9TVEwnKddJkY78wjDLTppD",
  "key3": "5NbVLWYLnwqekN1ejysr4MdRrEqsuX2xMR25eeGPaf2izto9mMe9QuJoBS2rjdBt1mkUsoUpkYTn1NNDZkWJiVtN",
  "key4": "4DhYPsbEgb1bXSvby7XpJqFb7csiDLtpB13gAg4MHWcapMRCoLonqQiXqaNFNM8RKgXF2SrTYhJsBkNTdcvMpGzh",
  "key5": "1N86HdmnNaoMhLEwLAwe4oFGoVKgXYNZrsZyeErQmcgXGKQv3JrtS53UuHAhCQSdWGsuhJ4ZLwR9AuDDAD7tMNo",
  "key6": "3NYFyNE8K9uDtpyRPyXf1HBGuJeQUL3kaAjbNo197DEN5VHwVRBAYZ9kURaxHFQGnksnfbBMbuB1K3imhY6ay4qV",
  "key7": "2d7H22apySUsNp938Uxbeh5mVWfsxGpJjExNWK3EnMh321udLjA4gMFwNHa819NmfcwCXyJFYLoCyZVbifQdNLc",
  "key8": "uU3w2goRLmwSYLXuFGQvnQ3WaWnXLvf5kuzTDHe826AmhqENEbw4ztQdUbxvvqDcFFJH1VQsYcs74g127FYhicY",
  "key9": "4VGyjEF58gxPB9WK3m6nSBKjpYG2DqdzKow9d1bbsDxzqT3v6jdyuYU7JzCq6npNpcaZYGNvrjyqyrF7iSMVrm3Q",
  "key10": "4xWQdTsYaUNk4tZLaTjwNRAUdxuWem5VyaLXtKu2pXSr2efRj2vUD4aYRY8Aw2U113EAn7jKSrgmdRc5Mz63xc4k",
  "key11": "2HZKtwzJVo5svyQTnd8SYxUHjbiZryzyKvwwPob7HqTkMpn1s9skwcSUKSrjQgntLMQShEc9vpiJ1oFv6pfd7scV",
  "key12": "4ZPbwwJJC2DrB4jBovPYyFGXPGFfVH5eo1dSwDJoQu1bjoHydjBdodx98VFLdK9iYxAJXN8C5f8zqtu3nz3FR8Vr",
  "key13": "xazeWNKKK6SarbViXbPRNRJbg9e3YYypfuwTtTBTXdrrXzq71rEG2fYEzayCssocnt7G9o4UA317euuBj2RMzEu",
  "key14": "FzCPutvxApYe3F4Ly7YKtRy3ZS5pRneLmeWB3dswf1mYUir4CNV6w7YyC8k4s6PiyYwon4Rt16sRnRWWQpPxh9E",
  "key15": "4DJxZ5yVcT1fGKYqqstFCU7BoKJ8ZSDY7DpgTbgRoYLzezBKnaHjabp8L4bL1r9oJ2weF8n1zBbAXnJQ49yuQt3A",
  "key16": "16jtZcnwvMk7ZXukvZ7c7QcRbiUCoAAdhYA8gXscSpVhHbr6Vv6dT5yP3DYVzZDigi3mbitCkLLiyqHsGnSVoVj",
  "key17": "2Dq6sYtHknneMCnxyh2tmRQM4PeaL6YaGubPGfAJ8deTHWPTFfQbMmS8szmZhnLV6yNfPVAatpiCrmHHGv6QB2fC",
  "key18": "6597sDaBrAc9YDtB4CoTdp7AZxPkt46hCcXSdBF6Q3X4zTbVttX6Xh8TLn5Rp1reYx1JeGC6VG2bgmfqecvVpw1L",
  "key19": "5mZDHi1LEQ42kK9zPXuut1qF5jYrATYPtvCf47kZP1Mgse9WoCffUwPohwoon6nJSSfchs4uAE21Yra4KmqpjQte",
  "key20": "5kEybtNHtc4M1UxnDNGxAEwPpUWiBaBD45CQ4YqcBxoVxu5bpYbVbAcWRyCnD7t9fME8JQPhrT6H3MWjoVoDTvMH",
  "key21": "5D7exqZUq6kFSTgDfmiucEaaDGStVRdx8LQWMFNTExu182fucReR4PuYVG79qyDKht5DMWETCNUF9uc7S3adqz9s",
  "key22": "61sFc7izAVrdiDwSKbGFcKzLUZVQ9dwrr4yihaPe3PsakKNzVHJw5nYXtz6JaEwb74KeEwmQEqamyhAbjTzDrbVJ",
  "key23": "4Rybst7GwzBTr6U4Yko1GkFQ4hRnS6rUqTmiFe3A7TaJtjUqYWqspbQf8ugDJznDt5mYPGjoUdzuGxope1JxsLb9",
  "key24": "2Ja3MqWTTSLFf4Cw6xVQLtepbewZr2QzV9eh7x8Wc3iTTtgu8ay67oK9c4uSLcUsnYLHnqLD4aWLgLHrAVcSU19B",
  "key25": "uc9xZYZqUApLva3Wtpo4u1LDnPADo8aYF1VSnP2pH3LUzpRkfsMxDN2kKtjLUj4ZDSCTfcwybz3RP7zA9hQydk1",
  "key26": "4RP9pv5xBS4mS3wZbWfkoJcXzt4wyFmjLvAZAPciJhEvt8d4hi8LuTFkadczUrPcxpriDPnJnYLDYhu2KrwrDemu",
  "key27": "5kFBCgfusU7pHBvFXHiCb4oR6iWw5FzgV5xVQH1BLbN4YtETuNRe35msTeJq8ZAcGGkkozyPbsPhmbintWoohyce",
  "key28": "41tkoRzaQGTHWQdLsQX4ckMq7LUsveTsdNNhE37orh6UfcM8qBayEYe9peiouit3xiCcz9SgJ6MzY4B5ZCaSgdSP",
  "key29": "2EcZqZbzSxQP8i72iQ67xhdRpfvAghn1H3x93BwdUb9SES4TMG4nnHwmkTaKSF2epZqwqmJPRG4C4j2PMuySfpym",
  "key30": "5g64vNotzWP8WWfKQ1PXs33dJBy64RQysKCEtehGWkPS6AG3pKAxnPxWirJMHvAAu3sCgG5WDFHgtcSvxbKaBKYB",
  "key31": "4XQxeZ4PAwaQqytSWkMc2PvwvhjWETy7GRueyZC4rZRHGqMb4gyUeD3pR3CrsrkcyCmfyJVaJM4NHCf4KbSBsNci",
  "key32": "56NizfvDd7BpvrvSLGF4D3RFqrBYAeEbbwzZfjSQWZmPN8bYFJMUc9AA1tbiqTtAF1oUT7Avwr8CdFJyzsQKCuoU",
  "key33": "53K1Rg3mnanN1qhbLG7W2E9YY3kbBsMvaEm4y2TmUYuFQeVvELZhHywDtPSe3cNpSiGDw2bB5YGwMmW9pJVGwqCY",
  "key34": "2P47Vh9TxH19fCjF8T1hVvFpj5cvXkyEvz46VYmRECHjeBuzSWitjKW99G9JCR7BxQaoExTjVUXX7wCu6F6tYBLG",
  "key35": "4pAEJjn8neu38LtATCrvu9KhtWCKgPy11fUnMn3d1cFtDi54cW1qpsdtYARrF4hNRLDoWQZSy1QQnDqX2VDTXtvg",
  "key36": "2btpKYNYjGHv2kTNQidtkNYX8tCQqa2ZHyGjVJG9T49wUF5cGHEAojy6VJcSaRKJ1dXCoXDA2biXXpp7BGUBH9cv",
  "key37": "4kkfGmu1H7C2fsH8nU64R6TgKEeACuLKSUaQE6mZ83BK3Kqt1Bvty8aHAUQqtmkQswhuDq7HfLeyjoqcQw8Az29g",
  "key38": "2S5knwj7Z2K6JeUwqCFcjwMzQchMZ8SGvHzEgXwiFQrhChMcSiVMSomZXdxv5L5JU3SskSpEBjSQig5A2Da9meGv",
  "key39": "2ghBXz4kq8MT6gPPfnjAtCraMzhdzmSu6LpyrD4ewqWHHywY4Pd7RK9Jz6WhR5Kw8LW5Dz2YNX3KBWoozhETR7wS",
  "key40": "5YXJMevGFSbjfAdGk11KFfTjb92rGVnsxrUFS5duQt9nqHdR5Y1Rfc1cPcZzGZ9ENBuvL6R53mZnfBF44WCuDpv4",
  "key41": "3GZBx1jFHkYwPQswN5HmcbdPvmncNwAyxvUS5zZT6UUbwTiehupUWSTo4eamayNxvyn7sxwxV6swAyNjp2FM3aAK",
  "key42": "4azibB2v7sPLzCrYH46CXzGgRQuRECXXjf6FvabCDmhqFjwNa8HygeFp5Ug9Wf7avbqJJBfXLHtEpgDRZYwKZvKd",
  "key43": "35GVbuHMdfFKV7HTc3QCTeTE96ftQT2fKZyiXF5hgL1uxHysmUhWJUuLY1nHnipbGYWzXYakVBajcHq3VotemwZJ",
  "key44": "5x758bteYBDS1S68UBJm9UU2CQ5k2RnUsCVCVERTLrMAGpGmpqgeJ1BeGWhv11bZLutttAAkGgBPFguhTeZphBea",
  "key45": "3Thg7mxVUa2EfKF2EBqdujWjFiNGJKwHqMoQjNta66arjqW6osePvGAKtqvX7sE9FBe8CKY5E5guyJuMneSKNQvw",
  "key46": "JXM484ECebm2yhXGsE1ia5qUVD58aeN3qKsJUtoAcPCBqDWFQLAnSCdXExM9cnT7P4EmxVQEVoaDAAArV1oUiyC",
  "key47": "4w4q8EZrFZSj1ZTmxCBDK5uEMZFYFsPGFWK9NtgkwF2k9uGxvqGg2PhZB7SMSgWmmUFbGdXyHx83m9HL1v1JRnny"
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
