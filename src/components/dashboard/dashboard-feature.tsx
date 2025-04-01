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
    "3tpu9Giri9fqvrBUN9PKX7UHbGy3r3NKj8BvGiQknLUbFXN36yjSkLoyYTBMnz7zCxCRinGPj18AM7sB6gzLau2Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WwKU9hjo67bCqJcT7gC6MCczDWTwEqWp8F3ZnmMddYda3wwqhrqm6FcSEf36YL6C4LucwUPzskwbCSMvnomNRfR",
  "key1": "3rhGWELJibRvP9boKiwkCNZG7zBRUDyTuQM7LaaHSn9o2AeL8p6NDBnXJydHy4eTCjEKdyoqLCqfN7auAnWeBV1s",
  "key2": "4zsiAAgAeaLGVjoiSsPREmWSZkPfMfuX9Ne9p41eMco1CNNQiZP9cTaDtGmW2FtMtx7FrWuFvvqpumpbm34UJJ5X",
  "key3": "4XivyJ6ALQZik5fNfxR9MjDkvbycoJV3HsMUo9akjCPcNmRmeU8bTcmDVwwvsWmSBev7PXw5k8kjk9Tk3eShwYQT",
  "key4": "tYeUkRr3TbqUF9F39LfBE9ToARYZtDvWmqAjuaAcZDFr2ke3CZcEj7P2JkaDLMaJoAuh4xhYzV9tV4Z8wuW7WbS",
  "key5": "3B6Tkm39JA135EmfKq291YfpuB5hKjAZJ89cTcsjyf2CEKikLv95sC723kyq9JftFvX7EAedUypP8WKozKBHkQ6u",
  "key6": "5ABmrof4y8XrFyuZBqDm2iGmqt13bGWS4MkifuZ6AyvsZf89t5cKyHS4GxHHndx98XQ2Vtf1kMms8TnXWKfYTzLc",
  "key7": "DiJW1ot78gbAzhj233iKpa1gz3PQnwpt7T1k4rQjXz9c1RXCTgNiLBayr1fKzEHAg6RNXHigyu7VctedqwPUCve",
  "key8": "5oohbT4BuXvoL8TWCuGuGdM9kvwajFdM1UMhLg3ncZo6HFbMgLhVi1zTG6fgqJMESa5eSHAMhB14FX6gAQFmnbUK",
  "key9": "22Vyc4fFxmvmkSEH1o6zp96L32Qb7WNmd8Xa3w3EQsfBEdFwCNKz41MEWEqV27J7Z6rizS5ZjcTpPU5gdXTEXMsw",
  "key10": "4DR6K8mex7fxvhKUNXvsXYdFG184ECQ52Lhkxk1qUd2MkXEKV4UeqqGy9rRFSYBhDYee9zpg3oWXmGptGomcPbXg",
  "key11": "Xz9QfXvLRmKPjm1fitRKifhzc79f4Addxf9GsrdWa9fhAyBiSKzUTpNC2ZejH9jRkmpU2Brx5uZzwEU4VcX7XXu",
  "key12": "2oQR45Uwsc5JSSLCDKtUhgETWi55qoPU4vEHd9F6tRiqBEA6Nwr9avZn5sB8QuqEvDXuXp6giG5i35mPirofXXKv",
  "key13": "5Kg6b2vewH2RHpZ2G9pgHKo4buYqaGmEfL7tE6VkVvm7GPazEopDvscMZz1i4JTiwbGsMGHZPbu42ZyS9QNxxnRj",
  "key14": "5ieXf33PVLJnrkQa7hh3gQfG5oKRRUbNpaersYyBwFpKe2uXEexCjQ9dAU1AaA4whSEN26Wd2H7fTYkDvhqHyhn8",
  "key15": "3mpRW9MNZvmEY7kepAPJ3zCtkswLiu8r6uupxD29StfnxabnCgg2zHu25SxZkw28UbTj78HZnWYibByu41HoemD2",
  "key16": "5ZnVqpHjeh9z53tTrqpCkkUfthtrCjFrqEqo96npmCnXwfqStkpRusEnrmxRun1oTZrADoAExdeBvNwCidzQ5RTc",
  "key17": "5XVZoM8Wm2bsm1npbtNC8qZTgXapohhz4nywzsHUZ7Ci84uGPFZsNHcZr8DqW5tTGAiEKerQ2NmZkvBnKGh2UXLH",
  "key18": "1Bufc5kn1EnvNEi7WKx2suP5x2RLvS1MwLTy33xnmydC94YqYVMWoyuDMdZ5wFvmqTp27DKiYq1793wiyodZQtm",
  "key19": "5pRq6TYdVFBjspmsm3afp8jjrThJHKR49oGsGStwf5VnCfTBpPWQMYKD116WmVPzgHbCudYx26CthAjX4YEbotcW",
  "key20": "3iJndwMBcRqB2Z1wpZkR93Lsdqz2bBdUTdqauS48pKafjLLQSenHZqt6DBiorm9ho6FJxLPzBMM8yycrgpnuUEL2",
  "key21": "5LqiDGf2DmT6Mt6fMcydm5iScr9m51156WANPWTg9wegoWmNSfU2k6twdGriHasMTzQXF6FtcJQfjQ3W1uUxuJPh",
  "key22": "4aEcWLz9ieN6PpZTa3HJ2DVEngfeLzTECgqAriSnkwFZDS1T48dSyCXDym3rMgCUKZCHbUJsMuYcpWz6DCEMSd5G",
  "key23": "5LwVRvu5oxtXTz7ruF74anf1Eyv2u9yZaRUiEybQLbp4wENZxiS5o1yjU3F23cVqSs5A6BTLTMFsAskPDjGLdtjp",
  "key24": "st9kk39Sq6uyfLpKqCcAVHNfifembA9ncnsqnMp1tTH1FtsrmFmRhue47ZQV6XCTfS7iuQZ4h9wqCC3nSZWdMFN",
  "key25": "4tRoFV8kek6mge7J1evzApaSx3BocAX4hbXWvvJwsUEKNsHZxUsy1raRTbknKvtLtvZ17Br5PSMX5y1pM8XKNEqr",
  "key26": "4AVUdACqZjWmNYHX5f7W2F7FEQN8Wvxs4RPssZV8Ji1yAHkv3AmHX4ddHdHxK6BHoxfXEXGizNL7xBpq9DnqK91y",
  "key27": "46pRVKruUAGXbm6YhkgrGfz8DnBJQKUzviL1TZJ8ajoYrPVrFEWqBx95jRpJfeEaGujdYKVhEcKot6vYeC9m77x4",
  "key28": "3pALVsih9PWur7KDEQuuYbGe6G5gZCN3m6rf7ed2hJZ275pGAW8GzeRHnnJTnSNZZu24jqW1kvxezBMWMjWWCfTJ"
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
