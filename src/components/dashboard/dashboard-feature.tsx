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
    "qFxonMQ1uM8D2euRiWZ5QbbrPb8THoPAXvN5mM2KVTykRJEUGf8cNRYgGAzuxthJdwvQ8WWntkXoWYnXnBtJ6A5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29hULf1LbNhk2c18pyNMVHnMvhw5HwaxZmhUwGvHAHcPs4Wz7Hvaigy3N5WQhvgVPJohTBiE7xtJTMFhbi7X6C4i",
  "key1": "29cfJyippEVpMziircew7xxn4kyLEivZjAw5Srom1jU3aE29v9YKYpjRHaWd1pBTzr1j9roBJR2xBpZvCumuQHbW",
  "key2": "3886K7X4EPXyQSioTwqDGrSfQa8YajmTUkAs9uH9XeonzJV2cYmrh45od1TUcGAxCEExAfJYuqdgRXu9EPP4CbHD",
  "key3": "32pvEQ3ESWfU84FTW4mtHdLkty2XQQmcxrmTuBiUNm4pDS2QkzLWSYAf8Hzda4TEM93Ahkm7UMnBKbSK7SbwSS9c",
  "key4": "2QGHpv7kNPEJfRA7xpHRVb9WMZVYqR2rkwHxESZSVTwMS56x34rpWGoorxfAYoHTzJr6bt55pF4MbPkX4UpbYGBo",
  "key5": "4Mq6Hp82zmS31cWPZsejwSybv7oyAhraRZACiM8LkKe59ik7tD59GYhX8bRY3et1xpSTW7BmcwMfkjjwD3jbLAQy",
  "key6": "1NNf5h5WuESykNxT2MKCxYg1xXLCPtArWFvSSrZNPzXmcE2g31Ha3PvWMaz9zBRKdiiVMhhigyWkN2ELUrQPSoa",
  "key7": "5LUS7ioHYn7Rdxde2QDoZP79AWoevrDMgXFtnaswgrucqcBdFeGW61tiivnUhmgHvduAKSQkksV8ioNDE7AbQHHB",
  "key8": "3gsgeZZsVDJYZjZTbkyMDZDfWAKS3T3eC9RG4cZyd5QLjh6z6PmsCrrcpsm2brqKzWTmFUReBqMDeGK4yHYbRaaF",
  "key9": "31nT8NzYbjLJzNos9MUxcqN5D6Y6XjNnbYPxjXwfpBZd1vT5eRBgv3SxYqEx5bU2JVBcuHZFdn2sLZsc4a8HPzBo",
  "key10": "5jMVdMC2PNPUyEa139dTFBuSUsjimD7TnjrqiMQgZ5YzHrVWngtJsNbov4u93xke64P2e7tMtoarYw97BNArx2Wd",
  "key11": "uYAAyeDuJRBxsZf1PLgMaEXW54eGiqGWkd9XoGKk3ufMNGPo7rebF3LgZvVCBnJznJpRT5i5a3pxMdFsh56BA3d",
  "key12": "4cEWMZf1MvtQtBNtj894GGavjACgE3fwTBGi1mDAhVD3JnwRf8VHuU3UVJJg62Sz4pB3k645MnVxLg9CTTk1rCZ6",
  "key13": "3NvHuckd6u8AsxKUeQLmfVsgFkq5tZ78AgBifBppjRzj2qv7B16tPda8dhFqA26za5jDe443H4ryMfUi5qGrtQgX",
  "key14": "2DHUWV594wg1XGQvXySCMh3MVZxfbArqYrWn1KPDzUX3KURqqKoKUSfzELkcKXC6s2SvG5hPRoqKWr5utjfZ5wDG",
  "key15": "446BZ2ZCMknt5pMsrtpmGkz24ACB4FuqqGA3BbeCSfm3i4PUbU5ftWuZWTay66TU2DCFXcQz49mGrTXmwZ4Czw64",
  "key16": "gHED2Ps8J62p3s2sc7c3AxuBAVWNSDi8mNryBwHma8AdFwj3SC6TieAVHSMdTyWxffkKJF6SEk6qDmNZRamB24M",
  "key17": "5Yxsz8eMVowqgpEBhb5J7VCmgiBfVJo8TWoP7uayHtiFF1PQrizNeEqzWNqr59JBrDifASKnUPktbSE4oFCDYLXZ",
  "key18": "yfUZiYzwpxUsN2Vd2euFyQrFvwtDn6MHnaqHGEt75xTVGvX69dyxsFQHfbwkwKeYxEBRyxnpog9dMQHnaVbqmGA",
  "key19": "3ppgaqSP2mgVB9kYJ9n82XZrbhbk9p7vy2Ujymmr8JAQFBVMKgKqVKk9TKEZd7u9qwtakg8GhikM6eXm8Yfhhtdg",
  "key20": "4EX8TjdbhByAA4xXgdM8iT6nqW5aR7D2Y7rRdrgoZzerFe8QfjghVXYHDJUrYpKZWVTMor69pALrKrRQkM7A3Vhq",
  "key21": "28qJTCoh46nLeRX7coPsuSDEeN5UUwpBZQSJBunekJLDQHCw4gpgTSkceVX9s1aZi5tnB2ZhKDGEmU3fHWtPLFf7",
  "key22": "W5QxhhnU4CPJLR6b2PNjfbnuA6fALVDX1QHStbiAUW6ENZgTff1pHTtmDQ9Lfm4NpKN71eYxp4Q9XRykFu66dtp",
  "key23": "4EDA4DzWNooJ5oinyXzMDU9uXmVEqGS2uHc3yZcz615hKFLmGYpBNmFYFZVFR4qFjZ7xQ6GUhr9ckVzQPh43dnSa",
  "key24": "4FowzV6pGCCXh4T2bgB66HUMCnJCWf1CUjyWVdvausXbDATxxn2UdTc2j742MUJRKhk7WCYHHkg1XNnqHTrZRrdo",
  "key25": "5Wyx4t2zu9bQ8KShFq2LrMY4MkNiCp2Ux94WdMLZd2W3KhJtJHD2xv5SbxpPGyLzVqcT81C8EGusZYLUp3iLxqGF",
  "key26": "Wpx6kjQ9J4QZZ3127pkJUhFPoPVMDYshP7RLZzhb8gJ2RXeb9QB8eQk78QvnBN7zfm6npNmrFU7UkFuqK5bMw8X",
  "key27": "2JVhYxkNGPszjFcHCxkWNv8UYK7EyzwC8reLsY4bU3uT5yf2tk2GrzsQX4UXz5mJGRAi2j84AA1KtQwXxk9nR8ed",
  "key28": "2SSyNPTvYLa215DCK6b6WURVks1crGJdNzjhw85cwUBpDAZzNDKJEqcutrutKGCrbwMFwunqaNGjkeSoc6eoynw",
  "key29": "3xvmyY8r9EuFKD9s8q2GysRbmhLVMSktbaQEEeR5MhcjhFw3pWBdd4RBzRUCpQuKMaeK12CC2QWfZS8o4G4pwxFg",
  "key30": "4F1Z4tiqaaV3MKWvdREsZmUcg8zqoHVWMjf33i4jH3AcdJD2x13r5S26eXEHHArMtJYbqzMPNQabDeJrHsbCtNbx",
  "key31": "3mGd4je8GEw3T977eG3FuBmL27475fCuWkzZEZXz91Aer3eZi6ojebC8zjsC6ogZYeDvdzHX2CnRYaEhCocu1wGJ",
  "key32": "4aZERiaePFtenhF5svfoQkmDaDG27SHfEy4jFXNWLvZpwMwzzC2ciXAeEHQjdNQeJiwfaJbFjqiPQ6rdKiQ6Qdre",
  "key33": "4L4j44iTiGShSDiuifTh4yGTRgvqZuJo672zqPeyZVvrUwNggh43VnLkCQGnLntr38GKrgLiPivwzXLMso4ki5xw",
  "key34": "3z9bfuBaja9RLuEuWW3re4w26NZABbfmoqmUoeD3ddBRYg1wunbaHFBUjkwMddn3txWiVeYYoeZw2eAiJ4chzmbU",
  "key35": "2bowfTN1j83RJGcQByeuMmL3bkPMmFxdpKDQVn3tZoHpoQeuaybZpCzsW4J5Hss498JPnuy7yvixZYPRNFpyuUrA",
  "key36": "2gTi6MCXjbcU1fWmEJq3hmMA2KXwqG1bxT5Dsriv2moNJVjEtnnjbaPkoQDQxQKbC7b9B5Qp5AWNgXzDeDpGjwVw"
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
