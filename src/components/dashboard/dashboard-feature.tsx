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
    "hyReK2w544Cnyd7wubFkE5DzeoJyjnX9V4dPMaZRgu28xnQoZJMUULbwEyT1879qfhmN2j1uXZyLdFUKbpw4JHA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44opbhzgPNs9wtJ1zLUBWJXg6RC2qeAnHN6jeqQJcgyMQrEW7mWiQnY1V5gmW6x55j1brdXD1ktS7oEhvLYxvE7s",
  "key1": "2RtYoGRgrfXMGHWJG3KcQzmnfNqpRej5UNUQidDH2A9W7X9L8u1emxE7Ng8SQYJqVieV9artVGYiJYtewi61rJj1",
  "key2": "4Y6XDnSfrMrgyNhvDcK1esSWJFbSYGhNDMyAcTQhZyLqfYDe9XMGKw4BiEZ6qS8y4GLb4BcUM7D77oURd4SmS9Pw",
  "key3": "qrEmpzkYGeyHXAMCnutUkLAQ5VqkBEdZURe9QzD18Sf5dKg7zyXMjGH4kxYJDEaeQS4YHQT4rDgbLBE134T9kFH",
  "key4": "35ArS86yi6iMbgJqR33bRaVwd9HQ9wZANWa9jbHQ6E6XNHme4b6zbyqYReok9WopPY1fGrdPombdNK8iH4ugdN1y",
  "key5": "Dhpa5vvu5pt63RvDNvRZG3myUpf3VoedyLESNHmVxe3tu2tpkv6nMgR7RbegxPz6BTWe6rdFifZg21khuaRBF8G",
  "key6": "2RYiCT9gNjmR8vJwPzWU2SvKsBUo7eF656DuCLd7US1iPsw61vxyww8V2pKqRi9QHTcfR4J8hVQpPDvCh3wESkNc",
  "key7": "FVTJQTBu7dAQPi3QDWjYNhkd32oYW8iiDQd1VpDxa2Zd6c6WSCs8MtuE8td4k9GrwCMvEXT7ShZ5BZMYGj43dgx",
  "key8": "deSSnJKRoGK77eYXUnmJBmvZzzYnRVYmBubytohc6ZoPkA7hi39a7iqfXHYao5BxuvgCdBrUL7FeYYySwfzBQod",
  "key9": "28XUEGTY8kdoCuH4WueMib15UcVvJZ5vbYz8ospoVg8NYECzrkY8Fd1cSZ8ZYtGMBYSHKhPdXkmYw1U4S6Pm52w5",
  "key10": "RA8hKgVPWyscZ99xCsiowEzLT6zfyU7pfnVcXeW197Kv2bgZJcySJ64Urcc6YFueXnCUsi8yACmXpzcxVMZNWen",
  "key11": "2eGeGAisx5Z586bYfkybxzkXJTmTpnEmhAGDRYx9idz4QHNFTRqq9Xts3tSjgfCbdNEyxRk19sMPbERNJyboUy9G",
  "key12": "2Task4H8PSpqEb4eef3aZ4Ui9dk6w6gyrXWhHZHCQuk77jySYLBubXUwM6Z4h2CDW4sCSD4ABszA2sZzcuLAbY7H",
  "key13": "4mvAmsxaAexZC1WdytHiT4Eqf46rnMkTXTvf2qykPh2n6JVQtn5Edtjag9q5NViEVhySig62A33pH9NZG1WZaNKd",
  "key14": "3SFsmae6scNWWQZGvEebqt9qPgKnP1nrADMEkuMZ7rBnkkEQZfGw1kMA5qrXG8oWmqrRuTPxdUebsQKGENcPX1ki",
  "key15": "fYTVFTtQHxn9WtQnLXMrqAHgDey9Xog6nHkoGaJjC2L1syETygwpVQN7DW9P9ht6ii7DTPz99aijbKUcF1bKHUi",
  "key16": "3iDG5P7wFWQNsg9uQ8boKE8Lz4UQTqgAkDHCtH8tDnxzuWJyZchNwdJm1iRMaeSvZunz1BMPVJHHqiiMbtHSQsPY",
  "key17": "gVFygKHRMsiqQF2xSLj5VvZmWB1sRrLETpUDZvYcu89uqLM4JsTtpphqWkyUyToayinWLzZQVuo1ZJwxZQwadiA",
  "key18": "4XChfEf9XU6MVjwS76JtYBrXeytE7PAFqrcUyjhFSpbxhA9wELMESksB6w7jWx2pAcZFjLtRJ1hkdprWWLev2nWr",
  "key19": "4dgRTPqoCW7vNJsai5UGZxjjcvKi7gbenofJE58MiDzuTXZu7zgJRhWsitwxXdhXtBPt3ndiYLHeyj75gTeSKHq4",
  "key20": "3EvEuRUTHJtjSgNjStDbT7uHPS8fwZCG19AT18Gdqgq9URFALUPH3TmtC8ndMirSXQEk5JhgDPysQVrKChTY5EqF",
  "key21": "5DqGEjJptkdvZeSrS7kdeCEDSmUYMD8XaU3EqFci6qj4SSivEphaW4Nj63MnSwFKQ9fcv4BoaULJieRbWQUtzHY4",
  "key22": "3CvNtiWvsWkC5LV5SUExQjNcHatYpftk2ShvGqeWKHDATXNQRmn8ZAMnpH3JGqwkWokwsLHv2Gz4cCD6nDCrJR6f",
  "key23": "4WrTNJbG1ggnvusCRkykBVdcrdVh6kMGWC6xdeMMEThRcvpWbnYtyqGTEQc9fbBj9n1bJXymRGdPhtp1FTMsZg6Z",
  "key24": "28omTFHW97bTxhBogbEzrvRhvjyHx75ebHv9aziGNN6ZUcSTNyB23VVFZ3Vez82GeD8U2zRA1u58GyCt6qT4qNX6",
  "key25": "54jhZt4o2tQr6U6Ro2qAcG6Nm2PrEAaCC2ovA8ysgerGHBKUh9AdZLKv9fbdPFkFVcqbNa9zQxdzBoEddmrSTVja",
  "key26": "4ao2NySsB8Y1fYiSp2nCqkWuoeuZXgbLiSS47x8whAMwS7FRonNjNpYdzn3Gep3FZ9ui9WUjwfTx95J3wbQryxu3"
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
