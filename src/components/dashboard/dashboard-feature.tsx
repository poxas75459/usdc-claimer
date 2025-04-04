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
    "2Uw5ZLjJctJNrrgvxXVFjc7fL2E7sDrpfLmT6TqPRkU4FyZARrWyw3KPECZKNS6q18Vq2KTUJTUWYsexSDaFuZ7C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58ZPjYQpGKYYz9ri1biw7nLPQVndc1RaYbzKMgCMQ2YZuaFc99k7dVQWt3C5LrYbJNxkxHansmifWRBAwpYrzedQ",
  "key1": "3RmcReaCHbwRqggwAASJSj7V8tYYkDZYA5ay7VBBypjyQfYJcfTJaEoYfCiwGG9QweFFWeqW8tAW5WgH3f6zvF4x",
  "key2": "VLW1jkoegPDRxuMHWBsX4bPu1b7WxNrpaNCGk3HEUttrWLzk3YiR249YkUTTo64f6FWzUUMBnf52qdg629ReGYh",
  "key3": "5mWK1XNrQ5BHYFku8RqGQaToG6ZhkU7FmqRLcY5EGwbqgVW1rhMEKVHeYpoMpLFeZ9tHEYX1Ktw8mp3aiu5xMaKv",
  "key4": "23LRevst6DthhDbk7zX2Z6a774qSQucnyQv7qBdLn7ETQUr3xyEeDb5ttViJ5CX7dW4W6zJZUB9he9NmBBaRts4W",
  "key5": "BmGi4FsufC7snPUqxra1Jgc7HxcHfxiDQf4exLmTxT83UVP3hsFeCeuE9XQamCe6d3bot53oJWK4ai7hphKqZht",
  "key6": "4boa6fzVM2Cc72SmVm9HEfgkWx1L5PkSd5XEnr7ZcCXdfk1tPxyLX19bEDyMLCgsjFXFKjEowp4ho3mH5pu127nc",
  "key7": "3j8dQvVbaXMCsbcdhiuozVFNwGj5aomTk3xBeDuFMnyhkV3wnU1WZhDppyNH7MCbAvnw6ktnyzpDTcXU7Vw22zBe",
  "key8": "5viwCdsafQUGWNrdbLGZo9nJNQWgAAeP4TLX19sAWXofeBSfcCZduYNg7cBJVvZjmW3XsJ5EUMCRZmCNvAG99FFa",
  "key9": "3rJxo6ojjfq5kv8473a2UnHLJFG28MYHtqBjKQYhNJnjiJxU5Z1iLN8spoU1LNUFdsJCeRyT82zPTFke3xYEvXm5",
  "key10": "7zfEjprXFS1hkhqWgMPvbSb1ge4AGgRyUxwj9x1fRQy4owTxBoNS333dNn5pTMvKpFCb1hpBaxhUsYsXJQ4yWs9",
  "key11": "r1J9DFwCxCqPKgGLHiEL9ELspfnYerdVGrafHDe2yKQ9Pjg1qXf8fumhh8X8ZyjNtNLzHa4wRSg9w8C45HVg6Ya",
  "key12": "3zWwDEg79PUh5TqBS5RNmGLHSjuD2tt9soB2iEe3JKaMXEugJ6jcoohGHn96i9h7wny3f2A7PPsN3CBqYGSSSupw",
  "key13": "4RBbSBATWbYQeviSXWYQfTrVfTZ94F4dqhV4uW7YnDxnWspT8gyysba5dDi6axZfBCDmeKwz5hgQyjgMdSLApEKZ",
  "key14": "43kReGBYSmCUoW4EUwSzVrJoAPULJZZw2y1cj1htmDKbwYFBbmMCtxb9JgmsdupJ3msJHzeZLzoNtPQNKrr6Bw7p",
  "key15": "3Q2TWTZ5UuJnQbQ4ymEFge8bYWwFMA2JzxUuymA8CFuFpa9xsq7639An5F7fHMEjf5ifZVKHubNiSJQVXSgM4x1B",
  "key16": "3AsdzBCVr1TdYk27BEsekpbiBx53REbVvqLWv9keA7FpEVy1DTbaeN5UkZjEwGnaC1WyiQdAPJ1zyYxPvFxHFQu5",
  "key17": "VPhq79mTdQr8Ab4URKTQG4apvsdMhGQSgsdqUNFD22fB6HdimXUfUnmfjUDu4HHP1bRUreFSU2Z85EHYp6cgBmi",
  "key18": "4zSZdsiyQadNMfYYeRLzvLqep3EjenH8tmUGBmFRFshhxVt2MR3pJnrXkpC8CYtbJtFRsxLyZk2ZuxWS23uHKPfo",
  "key19": "7V4tvGdimC9W4xBDf3j1tDKz8783SR7TsxSMWcGnrGP32ewHmVjt6yVtebKVKHoFH54zVqKPvoVUVR1txWopaTz",
  "key20": "4XPd4vZH4W5bhUwiJDMNw4jS5bxuLByZ2BcdyauJQ7MwJW6QWzAppp7EUPKxj82WHCrFwRTQZjGyhvHzGVGgHC5y",
  "key21": "UskDTZYU6NoqbBJLYESFouvF5Q4fyboUt6pdo4GK8pGZ6N6tn1ANaQDrEr4EL2qTuj4S2m84GpZHhtKwxnD1dBR",
  "key22": "5f15U4jc1byVevoJCuKKZZBtnVEeHLYNUV9RL2Y7MJGBjRfiwuoQ5qm4NxFnBAeRz7PUsE1YjWDazg6z8kki6Ai6",
  "key23": "3LLmYebybQVcsmYfWexFGhE4RbCLNJ8ddt8ZkQR8s7v4zpDtNFhU7BgYSM6MpKpvxZwsNyRJfv7bszBx259xNRN6",
  "key24": "3PqYbq2oZMxKxu1cv32gwcyzKJsELu7BJLn6A8d6FJAdz24U919gdkSY8WkXxExxAzQxyKZDMeXMqSkGRFnF3RLi",
  "key25": "3RTRbbANJjnpL1iT53F2EFenCaCoshFoJLhmZiPzr8Kn9RqiFEwv1aVx745CcWtiHfF3dqrB1sDfMjWbhAL8okFe",
  "key26": "5P38TSC4srBhu7d3Zwh3d4b7JjqeebqaStKVHagTchqfqFgHtWEbZ33BbT262KZgrCvDmpsrGWntxZb421p3Fteg",
  "key27": "3oqSQBKH3VVBTiZKSgvTgVkYnjBNunb9TieJGECkcZEccZGtjLir22M2QXZzCLpe96z9UmcosP4Fk18P5tgaqXui",
  "key28": "52u4Pm63poeeS5NJZG4aECqUNCmf28kshd3jdYorYJNPBvGhF9vhrwvAq3Mqo4cazK2BF2YsiaTM4HXw8C6Q9PaL"
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
