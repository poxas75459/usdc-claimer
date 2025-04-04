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
    "4As8DY373FjJXnjHiT2J6CYKJhX1bQ3Dk21vEVsTCx368rKpaABGzxECWeqGc5eACLZpP6b23pEmNXJdMWWaiHLR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gD97iiRBJAnDTsQY3WtEUf83VjHtJuMwyhJigA25P6UysSizpnpfHKYxtTALpB1sQwqfEx4homwHtU91eWeFJUg",
  "key1": "42qumMc2BtZVp7gVGFujMdH2pSG4ZThU7qQzXboKVGLQavj3AiqZbboKZVpadEB7thKDczdAxmB5ENtbMqfgZmbc",
  "key2": "3sfJC5CKSYhK1bLQkhZcHmfS63Ux3oDtmQ98CuD5BcgrKHLva11CbPDmwhHbZrQbXsQukzEpbvUhoP9obWfUy3d1",
  "key3": "46VxzaSRtaVJxLnHoZHsdhM9WKK3hUdgvNSv4mAwpTo4sKM8pMGS4dYpuLLx7bkxvZtWtoBAcw5qZQsesSnqw5Y5",
  "key4": "xCCG71Xj753rr8MQhLLMugHfnRekrKjEVJFCgir6ziaHS6D3JPFLr6mK9PTwww8P7iRmdPUuuefJ7TL5X9VywWh",
  "key5": "4Q5BBXVuCSwJwdbTCZwbVAAUkJfbJrsVrott2NjCuNsvxj78DtG7BGRHQKC6nnmcMpASYCKRejKB9qR2Ug287TEE",
  "key6": "4PavFsY3ypsTv652CvZ5DotNUSyS8rzWF8jCCtx91F7wV8cCDnhvoTQfoAUHbB7f37wB6kv5gvvmyT9xDgpRhuTe",
  "key7": "31bvAE859ZZ2fViCdXCntcuHL1vefESbizRfqyvtmTsEWDVXjNgroyegUvoZNA5ByUW3wiu7X6QpWhHyh1PT9WAN",
  "key8": "3VexbWF4u1zTuLniaZWcZGe3b637tjbY9wNgxS6XcSeUZuBTxxwfo7CfxM67Pk1vbF6kZus9XZbLQw7PcSHtddZY",
  "key9": "5D2YyG9tp7mfVjHEn84FuAHu41W79xz4f8qwYL4xdNUAbLPahZ5EfpqydxMBgLainoV9QcdJX8zYbusCpbe2s39h",
  "key10": "2emkWYcizbYVio835HqCwJcQu13QgsQ6LPycABaFhR3PHjLzr6G5gDcgdQxJbUKzk6FLyLpaNGvYAiF3uWT5Km8f",
  "key11": "wEdB5paGowGVLmqQjMKuz82nn7meN8RfvTQsmD2r3VeAZkqpAKko7yLgcZX65vrkm431bumgL6v8cjKYErCL2VV",
  "key12": "3Bp8LayYzxNXVXuMX5aF14WdVbyhSdSHVVQirrXSe3UBZJxqkJ2rdDELH1gdccS4KFqRiSbYeuYYiCo61f3fFZRe",
  "key13": "3xmuVKMnfAW7cQ53a8EVffpv4EkpNoWQAhvt5feQ48oQMgGc9Fm2mrZmPviqJAq3wiNGr47s8t8tTRLMnQXZjbAs",
  "key14": "8xH5BDtRrDAGn55oKbRFXceqPnYgjKAywZL2KrtFPmfLyKHKTPi39HnvAJLCcKnT5Mbi7NNZVxKLwxGu5EpVKa9",
  "key15": "3ZJzXfTd6NFghAYMUZB5FxZkqoPeaVML7pojrwrZsJ3pJx2fF5CY12nXNGkQ4R6ezrZXZKcw7BAd1uPkX22QL8ow",
  "key16": "5u9xig9Y9TmfuHsoCyRoe4An3YRi478i43UpjXZ4moEkr9rE8tS51hV45pCa8h1FBnm66LeQ5TxUHtKj83q5L9o1",
  "key17": "5H9prZYCQkFMPWpGK8rVcrYoQyXeVFRDcVyLqGsn12FXX5vVDRAN8tKmfWdzEpseVWie2MupFkknpusYNkUYCDmi",
  "key18": "5gwq9y2SuycxYptk6hSqufLgFHTNzzgp92Kx2DduvTYW4wSETHCLRaXT5ThYu1NifrtSdYjEM9hsJzXee4EhgBG3",
  "key19": "vwtsoMxx2fHn4ZXNfMmh2tcE2ZquUEzGrGP8U71To9YYzkDtFEV13XJjx59FTnJdE2uqQizuCC2mWA5hkiMD5SY",
  "key20": "67LuKKbeAV7KBU81yJ2QWNq5r8fU4nGJa3rWnaSYT2sm3Tt415jcsBqLxUNG6rptqpW8DYUJ5Z2rPdqss9tUrFmD",
  "key21": "5rjtBi4eCR89cJ74611jazzR7XXKptBssA5v5BVm3LbKVuq3yU5EudpiwTVRUcFUJUjjKe1KJjDZwSUTkPmE7a3",
  "key22": "37ECQEQjMQCnMEm4LdDH8saJWwQKtgJfhTqZTuQLnB3gK5RTRdZakfCBknDRKRYqsNhwBbPomvDJr67e5FNEWG66",
  "key23": "52Hgck7vS2Hxn3LAdY9DTpZe1T2rjkWaPwdqeie7KCEwesviLa6xBjWPw4m6KiVcc72hizVrMbnqLdwik2KJvDjg",
  "key24": "2BXY8YnUKQhHHQPLysQGi7ryKQW6tXvpdy1HJhCBZEViYe5zTnQGnfJy2tdtGRp5Y7gseMcK2fSfDJwrmtiqmVLP",
  "key25": "4wWBuJYvq5WgryYqUh7u5MfKDK2c9MdKick9533Wr3mGXT7hgm379qgHBaW8xNvSFfKbiuK69vUWqNmecD847G7Z",
  "key26": "3MrRnTMze8X2jsaS25RfFVcAmnZAbUr4g92G4jQXo1qPM4X1zN6et2aRWtPZzB5ykfpHU1VKDjMofTkweH5Tzjfy",
  "key27": "3jSxCnqsvai5FMSxo67gsYXauKMEdarYboj5VRaGWFeMsSKVQPPhFdyyNHua8EBT9FdE78o4Y47hkUov6HqDk1sQ",
  "key28": "3LvLLzoAj12hhSZymPScKKwfnYgNYThakHxu7eGigGeeUHADEPs2CLUv8DaZLHEfp8EJ8prrsUA1mQvhUu1xAi3h",
  "key29": "3aAApwDkx4mDfsK6ZckGQ6vZrg3VQi3AxatsfwjXuX6CwyvNWTmVXQBCHKhB4LPPRKUHrTRJJBUG7mLHLwPCTsYL",
  "key30": "h7Nisn7LrBqL5vc28Svhcwpq1wqzstYnhmgpbMVRdRkZimH445F71tnEMJaoGiz4ERwmZCaw1VzubcTBwJ2UAo3",
  "key31": "29M7RZNXyAxTAJc1q6auPwemgbBxWtHSri9iTxt9XkGuGqsbmcRJphoRsvwoUKD69xWK5Sxyv4NEgsLKsBEYLGcb",
  "key32": "4ffSPTZQbAsu9x419txtKFKAZ3z1B7zXKvxAevJ9XTSFC3xDEjaCy6qFRmUCz1KxmkS8KWddcpxDd4U7scRtAhXJ",
  "key33": "3cgimDtkmnDiP8dyLKiexvF6rRSS7R97xiHTJ2Q3zjtPc413pTe9gEsPHxggFgR1Lr8q6FVE4fbwpRjWtLUhR891",
  "key34": "5qMV9XB4Asha6KsWJvXCZjY2sCQUDzyjUQiYU29aextmyrfw2Ye3MmKBdnQ44rvtviAbcpjXjHAoLEAHAwcnrzSe",
  "key35": "66eGJ41D6sNRu81kwKd6vYTc2W3nM82sJymmA9s5ebo5jQnFXaT2xz2S5DZVKQQymFr3Z71hGN2rqiF342kvsA4X"
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
