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
    "3Xx3gbFyYZoZBHwFH36T4sz2aspCB2dGGQ8fL2KtDK7Tr2AobxGTSMirCBhG5MTQHCc1p91ou7wzCUjitPaKWEoi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SAdoDBZN51UtqbxDKs7VrksbejmTng8phrZ4Yn2NKUyBCt8ySaC9o54SGvAp5VRCEtuDQHQDdSpEinY8yJR7FQG",
  "key1": "5vVXzrckT13bf5PEXiVZc9QzxiRZxvVDvpd7xtoAXTJEut3GZRTphMSDTecifmWFz7KFHcegnxuJjp6nxdUs26fR",
  "key2": "5ytBF22fcMxFaie9L8f5oTDNfqQ6E91TCK8kzY16TqKtUxob5ELGgrVWX9nE1u2cySR582wkNV21id4hNQkEDwAw",
  "key3": "4X1KCvpSXZnWFMs468UMQam4q3Bn634W1XW6xWmHxM6krT5BgrHwyQ9tZqJEfxaQHAaJHwSx7cPpwtUsQGhdyPAE",
  "key4": "2FWwBxfXqMNk8XCg4VtQ9EtPSXpcRoxnVEWAZ6D9dzhbQWXPyVon1wvbwdoZADofLN43MhKvkzfmHaUALtVNgBHh",
  "key5": "45ykf68Le2C84PdZ8mZNQAtJMz3xwS5GboiSJANQSS8Bs8ZMwZEz49UYoXPrwzxk9WugLzyXDHR3SKoQoWbyFoTD",
  "key6": "kkuHaUusRyHBdyAfY6XtjUHp8A1SJSvJPxkB6oUhaso2c1p64kGuru4A9TY2xc6YwdwJ2Hj49bFURLcQ4YCZpoz",
  "key7": "5NUdCC1ir9BemfBc4LrX8bp9QuryKXuDEM86yJPut91AJqde3ZXGLzsmnZ64DYrYxMXq7TxespfbwDnVbnbnigGX",
  "key8": "4My6zjV7ZsaRxtJeALGFZomHUGKBQXTRQxjs4XEPGNZroqgwJaxxLPf8z58x8BjFUKG75Dff1XBu63kzM9Sfod3m",
  "key9": "3RQReX7Tw3wL9FQ7KcMLzhitFBRY5CGAFpLU9Kg15ZiW5AWQfoDroqdq4VorDtQGwvRjmxiGgMdZ3xueajy331EY",
  "key10": "51aib3uVdk3fVyzyfwsMVFQFwvof1qvcLzqP1NUZzDcbjfjnW3JtRgKxk2VA2cWHWuvgf6UhDzGTRkdJa1zgdce8",
  "key11": "2aBrggQr53g6EnMCMuQ81TXSk417Ux16GTUPdwz5PFWvWWG9BtKbKsZeRcHKcN8LW83qJd2qnuooKGFZMAQbs9Dg",
  "key12": "EJTDEzAxRUAb2VQ9BKztkBEueGfujaPQJUeVH55ZV714genXTdMQSVhkvpsaaRBfAUCuBfoMNUukSyxAk5djhwF",
  "key13": "5guYxRN7q4pYUbvq5mrcy3N6oPRP1wyhcqz8W3R5UkRFcB8zNVoYbLhG8Z1ZeNSb1xGBAguipUZbDjRFh1dYwi8Y",
  "key14": "294gBF9JKpoPaY3T6izmPhoG2Q2nS9c7GUf3qyNSE5zCQpYV2qabBF3jH2oQDL1xVJiK3WgCYRF695CZPVgsBdrb",
  "key15": "q5VaBkztT8aMxren4jdmNzc3AivHoBxC8p51jzLE3dfGNBj4ybZJQ5nGhPoWUyppryqid2L9KHJZc59SMmHcihS",
  "key16": "5SCytGMPUMb1MZu5LSQm4y8odfe83QGNiiZhmTU21HJsA6yVau2h5ZSFdzoiGscc45c85GP5KDxpmvx1LDwQHk5s",
  "key17": "5PpZAmMz72BGEUb1q3LLp49HjprGgL2vgQ749RxCDQH1RY2jAAfJoGMWcTvvgcowomxuYp3SKPxkdAi8g4hFWj3Q",
  "key18": "H2MwVhzR6y6Rjc5Z3zFuweC1RDLQtwudYaum8qSffRNWeW2ipw5YRhfH4KeXtNEcDQgoQs6rDpGsdeXPyoHdm5j",
  "key19": "3PPW2J2KMpNz3cKqn4qiMHLfajQYapG7qKnSWqgKf4NzNMYP36H1W3B7sDtASrX9ntRun7yMiZojHgbYjJHRFN5Z",
  "key20": "FL5BcKZU4j2tQCbBhArSisJ4BchKfd8DkYUjqiEQAtEe5JhZS3h4hXZfTSRfpHRK9o68ZhyzpCzk5Dk9qKNGeEm",
  "key21": "3vB1iyLwSSv4Qv9Xg6nirT4KkN1GseQcRQBUw7264cYUY5uiEjuyFJaF7LQBGahY3GBD7cFn6mFZfHziqJ3gFRVZ",
  "key22": "2GmzGPJzvSt6Jpq2t3cjiYWsFBB4tn3jTPgYvNFbbzKPbuqXePWadTSir79e9g87C3rqrCupZFwCngseCZttZHot",
  "key23": "k5fZ3yuRTrWSDMoqBDaQvoty1V5jFYss5YJRJDD5xcVAy8MS6VijR75qQN9XMYsxjSu8qDkFG37syiVttiuwLtP",
  "key24": "4YzCZWNxhJ8auZYyZ56TWDCEEXeLGa7qoBhxCvVMxJNLCScyKeQ51f86HrgwJ8TfR3H4HU4i7UiDWaGapmrePBps",
  "key25": "5xqD7RiPvbQRRhDtkXTa8DRuvXAbCZinknmHZYU62F4DzNjUaBfAr6Ds1Fg7wgPfN3QtLf1Dnb4yWb2uKCDghqy",
  "key26": "4do6evPKNG1eUXfE3NMZJtki9nBa7W7ErArZwRueP5tzqcehXz45Kugb9h6ETRd4SJsCbZztB3cMhVTx6u7QQeBZ",
  "key27": "5PdJ3zoxMMQwU1LE3Wwxmae86T5mNJG6bFjHtYRS9gjZ5Lp8v2gaULTczmWoHgHroqQ1r77oWENhxUEhQPgEcsnL",
  "key28": "3zeYzTAgZpE2quQqzjZnpyBELuDQ7AQ7obiUHYCM3VzWX7E5KKatxha8yxyjCkCBCXWMto1MsyLzj9bfxiBuraw7",
  "key29": "2YKLCoiMFHPar7SbDm7gaGJxPJLDiRko8Q42FKKdQrSHTBtUbUSzDxsnEAioAbvYu57HraU9do9YyJgTP549ZRDa",
  "key30": "4vBAwLPeXM65ThckTNoqq7GU8ffZGuuz95kYjLvT3VS9S4hxTxr4DfDtxy7XmsfNEtkxi9QHRNSbR3oN3ztbYQpn"
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
