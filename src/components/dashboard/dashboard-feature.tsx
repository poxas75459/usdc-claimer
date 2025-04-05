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
    "5FLE4XLaARc6SuQwWK467Jnv3HRQqBaHdabFifEHJjETon5TXA87Q8yyBwCqXqD21qmMcY8Zd4SH2NEDDMPwp2Xt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ze5uqUSykPDSzsAzS8XJc3wQ2qf5v7jsRzsioJEfV38wpA8bQsdfwFmPujFmDmEqXGcJfunKL5Q1ifHa6PdvWUa",
  "key1": "48yBeyM8oDYRrJS5ZSuoDeKqonSA8TH59D7jQ3KtDFNYfyiKYQmwCz6EwtMbHkusnY14hntwZRCE3wymqmhjUNio",
  "key2": "TFtRvgMjQc3Zo6Q9z6rUooWMJrisUAfA4KwM1xWHvQSv1mxJvhbkAS9h8hWKPwjCUnQNiEACVEkexCcDrbWSmGg",
  "key3": "3Q9QZyRmrut9LFrVbUaAEtx8Q5rLfoJRDugvqXkPoq71ioZb1ieucaTMgZTpsdJLh2seVf4hKhNg3oqLrcekjFqJ",
  "key4": "5AE7bag86EB8oV1cSiqbUhPidYrUs4TmVtrMynZyPv62mpqE2evXHvoEeQepuRcJoWkmwQjHbt4NrH5NaE7pdEFT",
  "key5": "SWgQqRNqT32FdBpn9Y5LsGrctFPqnshBsSpfMfrzgW8LpQbrKpVQdAKVctdGprtkAJSJwkeXCNxJXJCWtH9b3UQ",
  "key6": "61yr4627TDwhG81gNCWPurBS69bjXoYFG6eAjYU3rbNdD9PmXxdfQks5mVUES3CSjEM7wC5qeNSuzBc8zdAMSFYG",
  "key7": "KVzKwyvcB4voqFJe3Qyo2ecQLXTuLmposgP2uNuo8sez2hycQg4xfp55ny8JMLgUcSdMLuzA81vCLiuEjsTW4qx",
  "key8": "ZKChPwFYisActZqNgAE1RdQCNCMjFRrCsnUzmUJJzJnd61rqj2FgQKM6u53ecy8zfkumrP3pkJqMf1G5Vy7i9En",
  "key9": "5KVK57Njy6K99iTMWTXUAVuixAVR4S9d5bzuSS7y1ZeP5ZDfvHGMhcjRXbidqPK2g411iQ4K3VjGoWJuWpsGUPhQ",
  "key10": "ECs2judBLwfgvSocfqCgjFLykmaS3bfHVAnbwCKWh9R23UxQjeUegC5xEBPF9qy8ppuEQxhprjBhoVFigXCde8p",
  "key11": "7AesnDHkfJGXx689ynxQBR2xvPCDbST2wgDJjVNmuVJCpYArqCGZAFEvfj4RJSx6yfSDjyR4Wgm8fHofuUBT63h",
  "key12": "2wS5W616n9dZQJoyzuUhkQGBbMB2KHvruNzzqjZfJb3AsVB8rPUu1V5HtxPSscGDxSpQpvuE5S7xQCTeza3qDTEE",
  "key13": "5BxncyRxcPuamLGfgbYVaczHM7C6GtZTuzVWkSM5BkgBa8DdnjKrsytf4A8eyPKD7qnY8QSPEVK1DKXVBRabrpmf",
  "key14": "4H7bV4SAu6x7YLcFG9hYNctP5oLHq1JYqVMTTt5CixMm3kMHWoQWgri9WVNUgP2etG6svQatotm2Zw8tkHpjUdy1",
  "key15": "dK3Bds1kGggxmMguob6fxFPnUskajmx7vqdN7SD3praFqs6Cn86cHyw18UjxLxsDQs97FUuyuiJ1pGLQrfRH4YX",
  "key16": "3ucadUzX8NQzCbsVvUroz6n6cUhpL3SYJZdRmHGbUKbCDHzKucqMqBZhcdk2Xvvbj9fL3orQ2RFwENj2jB8BP6dw",
  "key17": "JQXt6A7VVaWftSsux1W7amcTKyweK6aJNY1KYZVEoZKzSCzYD6RoFfRnwQHvr3xTHoTgPxJLsKwNe8SHNYhzhwc",
  "key18": "2FwnCKcawUgTJ7Y9vqCr7NkrXUum4RP2wW8moyT1YPKUM4MPPWJUXbjiUr8f9C9t1Ub1UXMV86hk1fu7nsZ6XnkV",
  "key19": "NNpbHSaZExWYo6oU5eiLRTreB2LYHbphusHao6AzUwi15n2J5Zq9GZn9aZLYMAfo58AD4uKKMRzkASYrLiS72yL",
  "key20": "5YVFRKKS313jqiy3HTcR6XhwTnC5jbKAvvpkVQCyaXwdjJnc51kvfcVYYnYoeaJykCoGt3ymbTRKi4uwkeqUgb71",
  "key21": "2hhH8zy1LonKXLVq5hEK1YQhDBEPnRz1zFXYLFg1TrgC8mt9sjPjiANBvJH8tsmkFp62eeSbqMxmCQmBT2ejn82t",
  "key22": "65DqPUr8NwJdcxrZVpdbQGF6BfDYimoUo9uvsBwivUJoUFTwgDyzGzFSGup5Fzae1fXNtCLeZCkWaz9VGNQAoGLg",
  "key23": "3xQK8AiX9xeaxqEPN5JaHfjuGNasJLZPUPVtkXkZHP5c7A3rXiU9VxGu7zfpHJzBRN3zmAcxrpkmkKaGKXG4ostP",
  "key24": "2reRARtdW6U9qXbAU3RynEZgJun9jSfJKrUHjwyeGG2mAn3Qq7XxqjJ3oArq4LsoubiiRjHLGgtYhbCaZX1tQv98",
  "key25": "21yisXM9HsaaFZfqjqTocYigSk8pNhhd37mzQUU6dTQgrEZbxt92s6cCFsg77Nb3tbd4JKDqzomvJ9pFMqqreS6S",
  "key26": "2G1dZNgFva9TsDeDMvMSVxXcFGeMQ2aKTwxV1kPCSN11TB45whtoobNie1TzkLokrncmfAamACnrt28HPDxeUWYZ",
  "key27": "5sRczUjrbvp2ewsAyDgaCa9mtB8oCR3TS8LH3eSXpe3Jgi5GmjTaoP2LxnJahefuzFQ3mWsH9pcvUagM9yUedcN4",
  "key28": "5BnwrWqrz5oq8HyQJGre3LjDtFqWx5Gxh6nqo4Eqq9QSrDxe96YqNmUYGVtL5iVTHawQ9RLRatvX44b1Z71sZEUi",
  "key29": "3B8413zwajSdLBhyG1jnGUVKZ2EsdKYYc3rMg1g9XiZyy7LeNHW2apZAvHM4qAKohSkjBre6s5K9xAs1hhJoNX1C",
  "key30": "7ieWNQYJQJRiQVEGmgMZX2zRaFjHGxRNY1bAfJkiPbgwtaaEkk9Qh3YdkM2KqUReFsdYHWx8dRt7p9XD3MawdeD",
  "key31": "2nWHi7VQxxFN68RV5s5K2t9t6AhDEV1zBFHLnGdnEBpwAR2ZJxtLM5xaLcKZwBJBfBYcBPTTTM9hK3wzhivDz68z",
  "key32": "erGzsXnrU3WwrWpm8z6rZFjvVyr1hnBkwmTDH4YhRuCDJUbb9TGkYJTJavdwRoFkRBXyicNB6wYPdgz8UEEGyXM",
  "key33": "3KoAxMN3emSnMFcSxY3rzWhArsxNpupFKnhismeu6zwSFpFP5Kv3iCH6aXWt5pRHrEB3AyazwY9CPurDkX14A6cr",
  "key34": "MkuxzWNCd7EdDU4NRXar6sXv3H5TDZDG74DUMBuhTbraDoAHtGtQytmovvMRQey5yKjq1KjeZ18SW1tD1NZre9h",
  "key35": "3XM3DDPoS1nLg3hoaDi2HcMHYrKrL6yBnkj1XcNZVrxaNzHS6zZLvxzhjHcGNm537DJzuPtH5FTwMc93JTJJ2CHp",
  "key36": "48oW5xvo2uRmNiwXXoCoBf4x9n5cSJuQ4seYQPrfuyYqKsExtpRUkzKw3R4goys7MD4vgdBb4ARZUDjqnh5hYBYz",
  "key37": "2rgyqYn3ZpmZZYoUEowAXTdKqjmveVVPMBcmfAexWmiSJvYZeR3PzFv8jf9tEUqs3QJ6azHBXJNG1SBWizQCET51",
  "key38": "2NouVqXDqPTKynFwDoVKbeStr1pb3zaUbfeDSrH62mYj5TcrxF5bhU8xQTJVPdTHERzuUzphwcHK2kt9vhqTnezj",
  "key39": "ou1iqkjbfKdVMdjBqUfpRBzsNYsvbsztGF2KYnhYeGGnZrnZh5tAQ3FmeWPr5zkrQPCNKYbTzhESLJtxKwywJPm",
  "key40": "3YWWtdjR7Spy52J1htFSnKbTpf1aEFB31UN6pvWvmdELd1mnP3GtRoK5p1CibdJuHjmSUbcNqMyeDc5YBsgzYxLe",
  "key41": "3WuaSYEBPuZN3MDmvnF75J5sHihg714HVcQVwMncdrQFwvbQDwoeGUquDahjho2jiLFs46uhzHwM2YUEmtnwGuKC"
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
