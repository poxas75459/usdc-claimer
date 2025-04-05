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
    "4FM2cFhPdwsNvBPRs7P5rZBZdFMT45VbqFK5W4uiBe3jHej5CVbqi3YcLhDKUx5e3R3rfMNUMUXhszm5YgQjuPmq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27Kr7N1fQPniFLDR5aEPenYykjV9aDkAFBKZuGLVV9yAbh7gN5r5asAgYfcCbNVm3bDKZXYKqWgm11MEvJLxWrrw",
  "key1": "5w6kSDQGEbZaYqhQV7cregxaAwV4oq6ZqVnZTTexEroWH9Zzqjwc15b3qKbMVbJyADcBUSsYDAUxdGJb7gUGsAnh",
  "key2": "4Tamma8UgvvVhwmb5bzBkN6v3wJmYRT3GeiHzupsdibGFaqn4bjvGkW1zh8x4jDbvdhUtbnn6VAc1YJ6WREkqkXk",
  "key3": "792N3d7ozfPpBUJNPsZuSJffZRbxZTch6hNArSEQg8qTUbXpGQ1V4XEKyruhSFyA9jDabH3KbPgRQP8adeAinaZ",
  "key4": "5MwzgTtCD8QFePbn3cZNRmZ8ZdDVd73nLYTXXmnQEiGs4beiuV2bLc23jq4Cp2LXScABDr5otx5FNcKq4dTrBX8L",
  "key5": "9qejYJZ99GaoKmVwxYxEQjYYA33Y57eTk7H4EGsfnPTr66QdE3JyAEM8GSV4FpcbieGrvhsa4iwg8FVMNZHMG8g",
  "key6": "5sfG11khXpAvn37CdUbnTzaX1PUEyf3ktUoW8kzG13wQsWYdLDHkseQEcWRaG6XpyyZ6oKd8AeuhcmVEWMaChTsm",
  "key7": "Ep7U61HgAqdkE48iTEHsqQAxXntPGifJvRHHaWuGKrBq5ytbFb2A1tPYuTbjVNhuYC1rC78SNj9TwPyRsH5Q9Zt",
  "key8": "28KWRBUU2JmYWXqBmQazr3qj4HyesCkDqaGCPNuqm5mQTNG3RPy3xpiZVoGvZutYnhuwb72RbJF9ZSQxFsScA9mh",
  "key9": "2XksRsiiZEjLcQXHqigpRjjcu7UcDqS6YwLzktSeqd2bQGfZv3BjVmevaQChGZ2tmAkHDDDp23LQZxFwPw8aus5j",
  "key10": "4roWDkYPscwouMuiRv2d9QA2nSjJMMN1yVJR3zJXy3SSfEAdNsYqGPMCSM9fnatk8wcqKA7FASZpQXkj3gYa8V7",
  "key11": "2njWnJkJi3YUxHGks5Dhb2utV8Z3zWjcKhiR4dHi2Djmxg6YAaDJKFhwZ3Lqm8eFAfNaxUu8gHefUNXtztgGNKHf",
  "key12": "46mR7muJL8hWGTPTc7Z1bD1ENGUXiFDM7i4t1bHW88kq6K1f88cXzif6u4fDoazK2bKnEN6kpzRz8HqJVJDRsp5F",
  "key13": "2oD8CvFsbNWiHQSvbhiSUPdNazgtBQphWYfbGdaeEoMt3vjUL33nhHQQu7cnum1YWkTZ56TwLfLWAzz7u3CTJBdp",
  "key14": "3qfwVtt35k8eneVZc9y6Mi6AAsZFj7ZEiTNaw9eiwt5oUh4HfKYJQx4K5qnP7ZvtG2jWaS5ttLcJiZZQsvPHMGF2",
  "key15": "3jbqwprc8rgdciphth7PiNo17YN9brWJtg4DkUmZK5u8KDmvB2K5i8ZLqjY3DwFFk1SNe1zh829XzZkacftA2jbB",
  "key16": "56HE3Ybbz7L9WHeNewELEmqGTkjnFJuKXPQofkuWNRvv9TC8X6ZkgxRJF411SJNm3odVYkf3MWCc8R2mS4hwr6op",
  "key17": "5vyDsina5Rr4vqbXDWkkW7oyuSZT4jUjPwha62nWuFM3yn6HCxtr3CqcZ1prrPQ2z4eqgimiPt6kLzfk3VXmiC18",
  "key18": "2Upqi8v7hvUKB71MnwHFEWKsXj3oiDSxEnh6DWQUmsSBEMo934ARdnqvhTKVyEJoQmpEQFfVRvs4gJTrAX4QPUVr",
  "key19": "2mh3CihdSnU5dPMd8M632xgRAoPuLPLU3vAdXUBAJzksAoD9sWa9XYuqkKuYvHXbVfDFj7dBkD1owrLgFitxSjhN",
  "key20": "pqEvgtWHE32EuaD7UQx6kGcaDw9CPM8RMfjLbcuWeaxoKn1VzcP49urgPqqsFdXgnepumzGBbmXzq6JLsSkyvf1",
  "key21": "2hdk2BpTj3ifsnqcbvxGqQx4oLkaP4ud61PgW4iVxEzrWRou2T4FBvAotQHB65Wpdknwa9DtRWd3J6wUbLuFjBBM",
  "key22": "53ZnFexXpWBTEqvh7tjhUpFB7YCNHYSEPGW4zAnsh123xoANRSWtPA6G5U4zDFTLm2AbZ7eXC1FkRPGUvCE5LAxU",
  "key23": "59t9pP1vA1pEuNeg1Jur7KMQHRxHieEDpvQD9Z9KHvSNNKLDkGtzgftPhuFubCZdroWwsuMpxm896tYyiapC7nAh",
  "key24": "4Pn3NaUUU62LaqKcp88UuuhDvkLWtovFQbVLtnTsEHoWJcEzSu1kHB5UikVZJCNpjHK98L2k68cCbJ3VMNejtitC",
  "key25": "2nKiJagf9CfdZV4ohM9qZJw736cWqRTiXnzX2drMDjLETVypskbVpxSXFH6fXxBnzfw4x16fwtAzxUtqG6Cm3RUk",
  "key26": "5SScA1Dqfa5EpcRokH87mbLgVwWvQzGwVCANj8TpxVJkS1nkC67DBFf75gHsiLk7T3bwFPhUABL7gMozXexFdZWS",
  "key27": "2Z5pQy5LcaQQLwCU22WiS9YyonvDyW3E7iTmuxXsUgSFyWwsP1qTShospC55yYdKxUBAq1wJTuQ7ucTJpqzziKe2",
  "key28": "4pz8kvBBStTtpNA1q4NsBVqgJHehaBZoFJ7fxV2G4jGndcNyXGy7zRwrCgSbr5SyHD3uUNcQygAozZDG2LhPwhpv",
  "key29": "5uvkenfX9z4xYf3CY7keX5ZkKkgvVdSV96wz5Q8fW1uEAAeia5h4g7TBvm5YFEx2w1XSe3qiqWcNbFZZjPUnbu8H",
  "key30": "2ZqFEr2BkEwprBdQjaZjqEozkgrQcvXQJDL3HQ7pg5W6RjpLjDUCuZTpdNpm3qZyfAdfarzTPHvFaNeYUvDFq5Yh",
  "key31": "3cw78zYSg9A3qJDycqxkeP9zwCi9kCve5vbdcR7mP9Z9wSnF6M9uRA6GTjnbTRKHgoGtzMTk7hfzkHeAUHc8uTfK",
  "key32": "yGb8urMiQzu4r14BmV2G2rexkev8m7CosvzGo2FbDEUvFycxhQ8UX1LTtbcQpzixQRcPZJzDXsB2NUn815fjLZQ",
  "key33": "DHspoi1A9m6JWiaP1WDXpcCV6c2bjzD5Bw5feuse4oR1LEj2cZchecnQbvekPxnwyiGepxUqCT8qfL4dQHkdybZ",
  "key34": "2NouSrF9yQMaPyMsj5dZrs3mwTmwsXDqUXdoKjwSDjMc8unm3ZDoNr3mxsCj98NTRr92Jiz6JCoKaD3PtKY3s2TT",
  "key35": "2YGGGScJgEhkZa1BpJvksvCSDN4XNQfVkh5BpzB7AL8tZbuBhsFmmv4thiVPgxq1LKreKtGJG8D2ay53xwq1ZHLq",
  "key36": "4Kt3pSYutRqEbDobZfHh8oiUvcW51mHSPdCFoYsAfUFHztFbpMoqnjb1MaR4vpuU2RcUkF4PUnWi3XS6PyjM3rWb",
  "key37": "5EJREEQaav5Rm69u26TUAZguNpuiNgHtJJcDh7DpbhXgciFv2DA8n8GRGgeNLuu9iy1E5dTh874suPPfTmaGV3cc",
  "key38": "2Ddp7usxs7dxxVfPN1A9vtK3iPTKMgcANLnYcUz31ogsvEvJiX66uu7xKYVwFogUQSxC5yNwLdeiAw1MNTaYEcac",
  "key39": "2zZnCzett6amEWVZ7BWnEoaryUP4MPjVAjGJNKEfGnhAqdNJkdXpk3FSUML1wuZ87FYu7Zb3cr4hxYQ43XJ1EWZL",
  "key40": "4QAYEL7Fzr7KY4bWZMLd3FUVham2G1JgGRToGL6mZj2gCGPtmn19njskaUwXgUt7PRoWYFxXWth5zWf83ageY3y8",
  "key41": "2tpJnxcnkEknbP7WCrXR1Ay5zGKXReFAotdFCNrZGBi6a7fNc43aZxejgcbVnUSEXtiQTz1vGrpYzW3vE6aED7gx"
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
