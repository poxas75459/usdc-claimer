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
    "52VGmTfb8CfvPt7ebRu5d9dNrFMYom5Wd6WGx1McHXLhadqVb8gxjai8sGGhbU7iHemME3MuQnCNFPyV2qxWz1Pd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tHbdW1qrqFZsK7GP6ikRCZ1GqkK6dZPEsBxuodsJhkWV1d7SMijVvahC24Z7RYMzv55kMjm6TjPGjmc12q4wV7Z",
  "key1": "3x37RyRrmkmEUeKeTX8wsB9VPG2cmzaa5XxS1sLskoscLU63vbtDpoSup1xvAU5kqVDmfd76LxZYALmEY7yqm7ce",
  "key2": "9KhC3WXx2WTQD5AdGw6yjkp96AzGha5JZpyaMFCN3Ntx1MtaUwrh1UWf56Bk74CvoDBsGhHrzqZ3TcxteQstASq",
  "key3": "3yLqNaVFbDGGe2FFjQ6gmNv8Sn6skBSPrFja6EVjTEn1noCP5RAksUdFb5ctAeA7Vf1HgX7M3QhBoVeVyqn2EbC3",
  "key4": "3mEwYGSm8P3nPGdrPoigYjE1BtGFcPidgYZGB2n5cgDERdRVSDnChfCxvEYf8dGL6bZXXwwdYfY1K1wy2J7RPcoD",
  "key5": "2gqeqW1He4uPtMnmUakj7AiUspGng4j3Pjp8TCTrWzwkyRskc8PoQGUNTJa6m4A8AhUaymW8Lx35jr95bxjwVfVW",
  "key6": "5kvok5gPTjUYtDqDHP5Hbrbk2FuePwAituNqU4zxh6hFgZni2VaKGHsc5L9iirwoavkqrnwywvgHRX8h8xon9yxR",
  "key7": "3LQd85aSVdceEKtftmQShvnwTMZp4VFRyiMbpkiC78mCrns2fyY2U68A3Z3y4Ryqh3oBd3JLFTHNuD4gkxNTVTnj",
  "key8": "5CohDfVp8tYDzwq81zq3UW557J9cPSz9FKK7tqPa4Kh5MnaQDd1QAfmC81ATW7U6aGQsWyKEskuAZbdKWr9v8ft6",
  "key9": "5G1HLrVAJJMuP3qHVA4B9mWvQFSaM6zGVz365rabU5QXsZgCLKASXcu6zwXDvSUkg42CNBjq3UohojQFjjMWX2hj",
  "key10": "5g6UaHRZUpKMw6i7z5C7KbcjAmtQ64ZyZWK5yRzXY1qBjshmcWS2GMzM99E9LugQMyTZrJYCG5CTeGwUj5MonZiH",
  "key11": "4uXTX9bVWzawpZ9Ysziq2NVU9cHuYvtxtCXBxT2vhasea5QxVq8YeNEphyn6LpGyZmooxiMF68DTYPNAquib2B8y",
  "key12": "3iJGVQJQbK2PjaZcNHnC27EbXQv84PfBycPTWAGm2aTdo2W5dNx8UzhaJrn3e1KKAq3PT4XVEVjrnbxzaQGd4Pos",
  "key13": "3vj4Sixpzx4gBBuwpcoGc2naC4cQxEbh7tZk9vtLZ9Bye2MoBT7meLHRUkr5jz5tu9vNEUKwQcVBnuqjhmJBctfC",
  "key14": "3aoBqWofrsGdn6LFt2MP2xWhwEhTWUbT5SqnEWx9T5fWyxQU5hDz6jyaHcPrYvvyd4bBv3bHPLjMfJMo3wrhjxcg",
  "key15": "cM8Yq3D4tbgRogATPqEAyYTn9YcJFBVw6SokgzFCEv4Xky9zPmK9ghnHBsSBm2uNg9CLvRhPwxofLuKwYdcVnd6",
  "key16": "3ApJm2xTjQNkFjEEhuwu56JPvLPgMBYR1ZtGcWqdkFhJThbwkMeJUHatJuwMiXUUpSkRqhfNcfGwq97Uhh7KDQLH",
  "key17": "o7FQwowb9NrYYDeopQZ8NFHUqT4oZwTotDrNy58beY4B3RtfvZ4VT2Dedbf2uN23TbA6MoDASEXxW1HSME2vWDQ",
  "key18": "482aER3et18wJ9f7MQ82yU8NmZD2zCPhJWPW9QeZFq69SkYkgQJ59yHtaTqUuXmRzFrk5SjRjtCnLFqHnEUqqVe8",
  "key19": "3j49VF6UN2sWE99hs8djGMJXMU6QUDtNmJWjnFbAKCuJTgmKWSkP7dqLsJYM54Q9BLfrf6miC1ATE4saP4cqFLT5",
  "key20": "3U1NkfnECeghrVEp4p47MhuSASPvYpfMa5r4QUjQa7VuTD1YkqLM9XUnjWcGWTh1ApuvNTzXKWfmMEfLdRjqxdYp",
  "key21": "21TMB67GPXzfPYr7VdeN6oqoqcV78Za1BpiNtyWC8i8sdj4fxZfzt9QTJsBTQMm2CBAGz4vTDMKRaCxuataKCnj9",
  "key22": "5oJNMJC2TWp8KkpzS3AVEKpsTy4fEPf3gmY1c8pFVDniHqLqnj6ArGzBk6PunM3XEWYw5KWMLR2i9p2mkwAPJ4FQ",
  "key23": "3aETdKTEG8M8PnzmhK6eR4Aqt3L6ZAAXfwqdUDob4Axs8i9t5SMAgK6KuTEzHaYRRwHjtv1HZPJ93yxDrFzjTMQ2",
  "key24": "3XCcYcf57uNDxKDoUT6LCFcdb1cY8NGXt6UNWXZ9nukZiXUubpp4pxSkQpawmSZ7yABsDWxwbbVPZfXDE9eUSBze",
  "key25": "2az8QMfmuSD86CzzRyxWvuSQT1zye9Kq4rLGS1Ge5yMytMg2CAz4hZ2ejHc5rCYpkY56eUc7MAp6ySP3xQQzkiqA",
  "key26": "4p62feNVJQEnzJZZTPpbtkQitseZquEroJ8JiVR1i6u1Mbqeerj8cZryVTFyXiNboJQ7PeHVpDdEBQqcYWqRJXKT",
  "key27": "2wGXdJhuQMKZGpV3EZdJiMhN6Tvd2pzXJajuwbwqjXU3wh51yNB8N11uXKvSkPDeLaf5CzC4wj6EV19gVJBbazZL",
  "key28": "4JiBPL2Q3Z6CME3JLXifbUhppdNsZgT6WuvRcRjQtZ6WEQ6ththUQKYGZf9yW9M5u3ZgzSpnWxg27V2eZDzDNRuG",
  "key29": "4TLdRPMNPHtnDtMCmk3j1NToxxXU5WZZHP2xc7pN7nZyB7rj8Y22S2EhSrbHQ1NeBR2jYTqdRGp4WRUdD6JLp7oX",
  "key30": "4YCHwfCELyQHu8wDL6navGwqCwFVE1bsWQTaMfGMCsFFfm8boVuaFdWhXk2UMuKQaWkEBmLFsK8vwmp4FgAGcwsB",
  "key31": "35vfh3qncZCmRtmsDW4MWf3QJ9tBXkXK18HASw2nWFTqkici8zj7UtNcWfYpkFkeYLAnXwx1urM1bELVHq3Ri2Kx",
  "key32": "4qnrYUM9SzWkv3nW3vPBRatEQpWViiNvf5Gjw5wPpGZmQx44tZoKGy4fHWTmHRp8dJfRrpaf5itRzoWaThupNFRP",
  "key33": "Wek8J7dTtWMuUgDykvKfrAB1CyFcrDMB8fa8MXLBHsxGy23BdLDesoYtguZhvwcDWyD1U9ThacSZeXDd5wwXWpM",
  "key34": "2hUWU19AYvRWTSKNqM6nhwLUPzKSBzKXVpmfgXH9qVj8fE9B1EZcps5AvjV75TxxGMRjHoMYsKvFpS3TAeQEsWBj",
  "key35": "2YUecwDwABkZKdJRNZsJPmLP5UKUParr7u2XkYTzzMkQjPn4mKTovWE4AvspJoCM9deNXeqbWBHVt6FQKDQSBnUc",
  "key36": "4rLf1wyq8PPfVpqkiAHANBNVzsVF2Jcu7Aztf9GQfPdD2NQExUQP6dEu2kFVMfFLS5ZQGhaTw65HTG9MjYqtcMLp",
  "key37": "38Sqqa22Q9qyMEhuKzYJbCFdNhHRiLSPWk4sGFd8wQaHraUqyHNVv6soZuY2XjXFsUtR9NEKrZRTogx69bnPgJ2z",
  "key38": "5MfHR8rmhtM1LAGUPkHQeXUqwspRCcxERz98ccGSf3t6raz1MMM5Z4zFmNfb4We4ThoKZYCVeGbaBJsBVqkstQvZ"
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
