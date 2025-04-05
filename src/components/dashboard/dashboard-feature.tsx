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
    "38nV5EHCpojDE1jABvc9TinV8T85rJsZFhLcirFFWhht1upSZRWXt4vAce7PbQq97pcUfE32mDyTcDwEvSE3G8xz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xu5JdVfBR7XNizL5KEqJqpyLrfmpX7Y8BtN94Q6T5aEpYzDhfxR2YR1Zx13bkKiMbdTYsS45yf6WjQMiARdX5dz",
  "key1": "4DNvKN9q1KJmWdEwTgQZYgVkbRw4ra6FBAkEH8aaRGDLD6mWKmuHiF4bCDRPzTudiTLdqrSxyNECSkhimhZGBdbz",
  "key2": "579ADkuw6VUYLEL5BFNjN4JNGa3Zqam7fRiCYmt2xPsEio9CmJSqWydPgw13whztU2KY83mm4Zakr4DeZYjiUR8H",
  "key3": "5935rDqRpdrSxMaDdctiXZVLLbSnBuP41ucMbz3iqFCUi2DGdUEGbUHTvKu17Vxed82ATmJNjHZFuwdkwBJPS1RZ",
  "key4": "3PHNcuxqrJDWJqrMyyuh3udnQkuYcmp7SQgYPwfcHai5nrFZ4xDBe5Ytr4DLPWChbEWhmPtPhmYues3bPxvVFowW",
  "key5": "4NEKtwiKequ4pyhxozLFiQYDhnu2HoUZSqeXYoUr86jBAyHdkSxbrgTou1xGnuZtr669ykNcYjJ9RwBKvs8GNF3i",
  "key6": "t1U5UhzyH3kCL5Vzau31Am3ozDENgUUfjL53S1n1yaPSMBWqL9zRC2vEc9RxbrrpNsDEjjprnBAeeyyUMhiQQdE",
  "key7": "34VSoYqzgceKGjJKsQevuxYsn2SxCFVeEW7KfFLWSnvuWLwGduoH8MiRK9fx7nSv1pi49dg3dn9KuMMJxHaNQCvu",
  "key8": "2A868USuNfnSeHfipaNCKT5wwj9BE4zWxLhjuFYHkar4pN3xnRacDcyttDRk3HyqUZKCgCeNMsvDYox8kRiHGUFd",
  "key9": "5nLuA1PDqYGczpszuua2vbbjqPAMHCQ7WbrNDSFVBuPzJD1yVu3jPwHfSuRScdg84ReEYZsvMJ8dxNVon4z14qo",
  "key10": "3WjpRzpmfFQcgSGqrp3ntUKpF6fKXSbgiUJobngqEJQKY2DvvpUhi1ZHx8HCcfmQc7dCcm7z4kPdRdnutf5Sy3Tk",
  "key11": "uAJCmNrbRXYrT9soqHtzs1yaCMBRogUmB7en3kzGM3iWu4Xky3mLLQJjY91cC4imQ3PNarTz8iXVhasFRqDtraR",
  "key12": "3miNVpmCVWoa5NZrjBiURyYdsT8PRMF4XCJQq8GgoXBJ9LKkVTcHHeQpduRuNh1fgDyqPkG2ehJPWGZGViPK7vyZ",
  "key13": "611HJ6jPYjjQFQgRxMWvvMymWQSE9nXQcZHaMBFF48z5jSkGBP43TNosWR2pt4gaoREp8vVKFPUyBqTLBjihk4cc",
  "key14": "52ycAWQLXX46CJJAMzMj6HkRA86sWTshEDUtyB9aSYEWsuQqtb7D6uoFbDVStPAVVs67pWHD5kZKshmbYXuiCUQA",
  "key15": "5fnHpSJuSJt4NCUzeRwb94NKztEcQXGA1sB2nhoSnhXPxMi2EkqGVNT7KwujQWpzBQz6Tv1ePnUzs169d5dFjuTn",
  "key16": "ZKmw3mfUvXwt3KjLZWb6xb5PfUqkRFy5eh4bFPruNaXH625RKiKLGyaZzVaGHG6sebniRS9Jwk7ZUesg4Rmnfdm",
  "key17": "4TFZiiMzP9i8TeWjxx9QcJvhvA6KRWUoqKgdXgyRfakKTw7tpFNtza75wzoLUZmwdcqokzcS2bxdgXUaksStcRE1",
  "key18": "41tok33hegKeq1hGbJ6qWwSXdgLYxjCH6K4Y9SZnQFew4mwvmCiYSiYFYoW36fv42K71dorja54JUiAav7vRzFSd",
  "key19": "4ZazHcDHmaFqH3qa7wUzfpWdoxxas9uq9HBa33bFVaur3D3NcY9cQt3J819KLYxJ1Wkb6ahTLgxcEMiW48Uwvj9Q",
  "key20": "4qKcY2etFBBaiJ5XYvkjk81orpKUpvawYhk5nzvS7xRQRYfTpafr2gwW8jRMxQstWAvDM8wUvoq9xzTeNsfHC6n7",
  "key21": "652JUqNDJ9PdzKWpHxQBRmE8oggha93ZmHoygzUz6mG2Pq46if9aD8xgZAqeAaWpBVec9qkBfxTHjbjqp1ZdtdYs",
  "key22": "eoEBRFCF5gE4d5MiFrbiqQiSBUdPjFxY2eTkksNLTD5wQR8Co9P3k1yc9L6gwKSwsCdUWDDQ4gu9MgmHjQaj9tj",
  "key23": "2484uedn2yFHfvpBEYTyuoetFsKvNKNwx6x87pj3yzhcVEPayhA5vFxg8PMo9twnNohTpBKQTgeb5hZ4Zba4K5HZ",
  "key24": "5YJYy6PvbnuumU5157BZY8QK2SXXVghGYJdYdHR2kwHgZisR59T4DzkUNEnkkVVfeA9hWGrkXejnxJVyBSPQCW6z",
  "key25": "49WmPVhybjQRm5dLKwA5DVzgR4rpG2qu7zQwGHUMyTVQhKQa7BA7nJVsACTBr42qqePcFKcs6pYktmMqz3esFT2P",
  "key26": "5yKUzehhGhLqHq1fvbXHkjVNEAAnUqrgnqJCxBbt8CBPXPCCCBnx2n6535rFZKnkKj2ejhSwsuezRnjWP8P3nVtv"
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
