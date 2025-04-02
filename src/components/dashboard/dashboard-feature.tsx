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
    "2ZHpUt8eAWoBhHNhkqgds6pG3g3Nn5CLPRdXA6bUZV5zEujt6BRvnzSBbPc17e8GE4UJoaeMdWWHDsMdvuKtHDGQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RfXkc7VAPy9SSejmFnaUgZZanzJHrLtjBacds4YpzwpHxs6vz93yB9NUvAgJ44sm8XX3cc5D7WyTdAoXNSLHRpi",
  "key1": "2oZZSs9kks2enQLRCMgGJTo1wbznRrzqmZzurAKCxvfce8ABhp6qPJr1tcHMLG4JYxUyxx1H5QDnQq4AymR3tPiV",
  "key2": "5z6k1gwgzaqkSc8rNt31f8qxm6BL1dJaCR9oC3WKZNnrihZdGdghQUkexXiXGt5WHB548Dg8SZLGfoyJZC7i4emp",
  "key3": "4HKNsJ3URznSH4PpZMXFvLLsY2TEn5ZKbPochfWhnVMY9nELyMaHNc65ThsQdYGoXyd3TwSuPK2jvQrxibxSETxE",
  "key4": "RsZHJSCr4ZDtoAGVXKQQVtNMo7e8viHxwWQXgYVKasKRUz5PSUVLmAtvMaMUkdeT8CgBPhqpFGDbVQ9MTcj9vV2",
  "key5": "2h42woGGByPsepNxR55q18KKGhijgYSt5CJtiX9cL2xTThsRXZkBnNpJt4kh2AqmrZPRLt3s9oJV6HQtFQFfXknV",
  "key6": "5LaKYN1ix3vo95DSV55osMkL7QsCayJMgNKNYt6Kja7jPWDqYo8tXKbcbyLUEjk7CdmmYEsea2AasTPp9LwpdsDK",
  "key7": "3omjk6S9gHeFjYuVi3rPudFjTAWYhxNCvBNSpKA2cyH14PJ9wQLN8js9x7e6JkJQqLXXu96ZJGBvAtoa8jsZcKKi",
  "key8": "346Aa3ZJZvmx5S7zA24inoPaaMPigTkY13JbBs762cR6gd1gvf9yn9XbKnHs7iWtKaa725RLqyVggPNJHqmaCwck",
  "key9": "26qnWg9u76GXZHK9y5pKDVBxgjBK2BvYneByyA1HT5mdgdYbCRw1YybDkz5aMSavnja2hJZNSdYzupVtb9pcPYXA",
  "key10": "LJTtEfdLDodKQkyFmeujhrqkd4WEQSk36rEFHApJXrCESpZS1x3B1qyn2Wheq6PjqGZFeasj1pn9umoEbtUDbG5",
  "key11": "4xShZDyxb73L5c7iBEGzv1KHejhrQ2B1LQUZgBVYWLhGhfWqkfQnnKn5Nk8xRdXDDnXpEncuBBZwgRTGRtL6BgYA",
  "key12": "pVjr8P6VaP4NCJSHnYTNersCoBatkykYMLak4nx3PyhyhyDa8dqNm9KZSTDYy5qQAuKkVcWLWQ5rdjMPteqGz44",
  "key13": "vYoZZs3yE4wqKp34GwcBTUepxMPBR1BCnrMAAXzhkGhYiq2SpZGMA58cruL5EFzGeCnTTxN2U9b65aXDWytdNpA",
  "key14": "t2DKs1XFCcwLYn6jgZH8869F9iL68K2UnhRbfQVEr6L6b1ERkeTAEKdMke1KY8FmzW1N1jztHfVVrJQw8pwhb5J",
  "key15": "2CtN2gr7jZwmyTi34xo5jyn3pCKHRWwjxTW8jYvdbYGadeEkcVAK97Jf7SJGUdwQ3xCF1ugEjzdreNWujeDZdXBw",
  "key16": "KMCC1RnPXJbrWgWemkMB2EcnudFzHfBr9fwivYoT37krbAHQ2TVBE4wnJkVSbYjDaYYek3z2btE4QBGRKQSV14M",
  "key17": "3eTYdxTkR3iGGFfJzvxr6va3Mqip1gnhqZteX9RJeDkvg8TTLCrNwCShTTiP1zroy3gEbWJbrpndWvFJQFtnLCuM",
  "key18": "5HkknhcbYzPg3Kx58TBKxLiupCFozm116YGEAvqRcZqdweREAkiDYL4ftzL6R35fxoeSPyKofurAqeg2inmWWqhQ",
  "key19": "4DxuENjzQ57AxExtRRdDqdVcicMdZkAeL6BctW9KeiQLRqNcYR7vTzMEnkWVLQAkRVyU6prdb9A6mUvWs8hq38Er",
  "key20": "2PRGagps8tdDQhdqbpruwC9oYM13SmprnvwHgCE9BQv4h5cQJKaRVj96BKGSxGwGFw2mGpkPrrbQQgeAqQ1nDFX1",
  "key21": "55GVboUw7ZgwVHZC21NS583kiqipux4zDrKAqvJZfJWV6HHPiqLEyqv7v9XMBc1rj6rqsLh8FHWmEb3ZoYthZ92j",
  "key22": "65utja8wXwJZLufEstJ8kebSfjcugjC7pztSw722N7wDu7i3B8JEi8vj5VMHXpPA1dcaeN6nYGv3x4ewdNy8f5Ca",
  "key23": "4VqNHRQMJr8YyViA8yn2yjWe2NA46LVjnJvztZnG8DwAUbuUVW1xA8EwbrijrGUwYF2SdMZCRmSMYAt9ense64Yv",
  "key24": "5WoN7ZYbfs9Hwx8SVdTMFRFgemmPHtMybP1URgkf1oQJg1wFwpcA18pnS2ewjgTHsCoHE3wcd7mwnVh6fWu7MXcH",
  "key25": "3Qj6fZm2yZBmqBCFQXmtaAy42dmjoowNmFVJTRQr9iow4vxVmCxx4oki69b65hnPHZqA3UMKAYh4D2atQSDaw3wa",
  "key26": "66LwGnGjFoUHfZaXf1Wx5nF2EVBEtKL3idLrzzexFZkyrRkfKduwcJZMzKi8cUebbQpkEAATscxMnonGoXJWHFJ9",
  "key27": "avReY3q5G3a2dp2ezQwth1T86tu1C1St8LRFpg8gNUuk8z3FWs3nsqh8FY25Cqu11PX8BZpHe9284vEoj9VzkgK",
  "key28": "4tauU79jSK5HpSfPxk5zT1P2VHqWDc16sjtfX2Lk9EdXV7z4tJM726CMvLquSZzAW9NQtRSnreNNaj1G4b6vao3n",
  "key29": "52LwZ7fP57mjqjAvc9Qsd9smDdMSShJ9quNph3inRbuve5WBDy4nZqSch4WPVBP3ktKBQ2meqvfaQG5oZSec3yiU",
  "key30": "4SGAjhvPULWJURa2wZLqpfZEXCrxWKNcira96WtYf3ZdcKJ1AxA2MVUdHsLJjj73M4bu6fR4rzuk84oonCLMNxbC",
  "key31": "a28UpUKcvSn75TCSSUxyr96p5VKDwggLuh3yhTKhsTaNiLfuhhQ8J3SDtyHF8ze6ZgbUuAcb4UoBJxZgikGTdef",
  "key32": "4vxNXfER65BWYCyg3Fk3sMCLyzbPr98FfYjZ6qeUW7JXJPhgsvmu2Y1Hsd9LuBz9apGow1zmKFCud15oHQNduxqK",
  "key33": "GKAzxB2ZY5Q2pxhBa9FRM5uM2cdP4xEutRLvTsgkt7jch3Bac1KQZvCyXc2PDfaTNK6UzxDfseVdbFfod3zot1t",
  "key34": "5y4QvD1AvsobDy6dynHoupycSP8UXhJPD7FxwCi9AFRv2QbDfXUTae9g2MCeWB2fYLqc12k6HsFaiimxAKdU3wZJ"
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
