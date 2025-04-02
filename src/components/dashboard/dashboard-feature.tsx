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
    "4yALN5vKopydsnAyYWgJTQXyEGLhFphtmWua5mK8LQafWEacPAqavcWZ6188i1sUxKGc1n7czQ4Cu7iWRBRBnujV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eUV8jTbjt3TbyvMnCo3Zz5Qkf2ZuphzKYnQDgbqSTQLXX1BbZvK7BL1r47Y394gT7hUcjGVpTrZrxtDEmCAjnWW",
  "key1": "2ka1K6RmksZR5bC7AfN8jWaMfvMWHQymDeFN23DgHyxToLR7sR9VUXzrtCdHwmTAhX9VURWYPcZYttrKkBLXvT77",
  "key2": "WBCJyTrfFKqxp8dgAZKy8APk4KbPs6E26s5Zmc1CTumfZHJMGpKWG8wrEAcvWWb5MLabAXVjDqG2cMqAw8esvqe",
  "key3": "4PfPvx2cJju9CBgsZ5v4Q12GdtDGxdGmAEg5jnDsHM5nqrj1Dh5RUxqn59YPiTuyos8cAuofMBsb6D6QQM7ZEp9f",
  "key4": "4Jgmx27os33ubxaNkeRdGQVsYTk62aNKnnXo2Y4snZMLsmx87ZzL2zjaYCkf2DARhUtCAD7HLNWxcorsUxV5UjdC",
  "key5": "5TZ7wasLuso2MdKtcpvCeUVBdjdvDFrqj8DuEDA7UTwd4myVcU2nhxEptcUL9Y2cPmZYWrskZ27hPRzvZPg7UcQz",
  "key6": "qyCnCNzVDWbRe9wrHgbdDhTaxTHcCNhi1oMLy3dqDU58Wx3JfwHN6NdLG9w1EmFmQdaqhMhPiTNtmRRCwY5XqHA",
  "key7": "4TKj8438U839J8WcuEhwgsFV6mXu5bwjBW6b92Q5bFqznowyyQSHrRpGJtMgwqNQCtpDJ9GmFmw14Zx9rZxvAE5g",
  "key8": "4gaBBAfagT2ih8DYygXYT5feu1Q7rCDUjQ8SS9v9gksx14b3qWK4eM5guV4zHytcnQXVAtkWgvWnKvoVuy7v5Kny",
  "key9": "3QewEZV55SFGHVUoRGf5SFRCq3o1fJo8uFwZxu4Z2aL6Lj9rBvseWNspUcn6Mmc1qYMdcwSSRDs5Zdg1sY8gcGrA",
  "key10": "42nF7w3mLUgPWazt4DWBhKNtAUxK7ESCojcS22HGFuiDYwooUyqbUoGfwacKu3ti1e93tvK7vQDuv3hz7qiJVfSL",
  "key11": "4rAHFBc4JRNC5aHef7G7WzC1pb6t2mKhaKqQS7UZvmgNDN1fuBvnNbs8N5egPrhNLddS8vaPD9QAx2JbZh6oVCPw",
  "key12": "3n2d3iAkruYj8txdUHsZmaB8WkWehfNEv7uQcq5WTaqs6nNDixGCwNUwEJANrCZwWJiyYb4TWbod3r89P4NrhUhj",
  "key13": "64jo5wf9GA8Ti5JhMh2EZ8htovXP4JxeGxqyfQze8r6fTXuvr7fH2KDu3MLrVugqViLM2HZuB4cuqKpYjHohAMeP",
  "key14": "4aG1ai5ZpDPkhBeL2kFoff7K2U6W6D94M9sCcX5Uok6wNCnsMT6Eh19WWoFEZJZEhGWLUM7yfFq7fUe51AVNG9YM",
  "key15": "4YaziVqTJcmSek7BWzXKbNYWGQVNLtAy6ddpEgxx9zDn1vispPZceBYotCR5ivUSZZQryVtZQRD1GxSFvGwA8oF",
  "key16": "42GZMR5W1z2Xjp3hpKDsawvBZwnMrAbXmBLwRABnWinqkvPnYvK4hRfUtEu1gYeYroNFqTD3msTrBY7dewWwTNPz",
  "key17": "4TpzwyfqRG8tAMFhMr9zjsrJxw6c6VWZPRZVYx1H7TZ7MzfXMhSEWRtbCUTBnDJcfqC6NUpKPNpguYBXVmaAvs41",
  "key18": "5CidHsJcKFFTGyjsNVTQHAnNXfNJVfJq4SiFiCrYNpR4J9f4w7vy3Xh77QZzfYdUttqecQdPidxp9kS1TiaTg2FW",
  "key19": "5kfKCyyfRAGcnHz5ooxGVGFNxSbJPMDTJdswGUR7SUaBkjDiQpbmXjTcY9tTg7cCZ2WyBEQaX9wBGVGSe6WND1at",
  "key20": "52XgN5HqKdUkzbwKEMK31LWs7h7qh32wAPKuvDxx4XAwNNMYLRBiVPvjFUse4p6BnPATuxf58V5tLwjqRN8zDHhd",
  "key21": "28E3XuYayWAFvjXB1TWcigy6s7Hvm3LXe4HQZCJzoHEPLpuQweAYcukC7cJVmmuA1QcdYCK7FBZCHmNKEcmvD2Lh",
  "key22": "t51eVKXK82JR28AjU6rCpCuhiH9NFJS6toXop1DZAb1BpAhf8nwSBbCcY11J3pmjURPU4uxEf5wsab2FmTHZ52k",
  "key23": "4fQgvMNJS6SjCDfGk9sAi6okqpNck3eJEd9kMYsKTNppBm9JkYSJEd7XP4hk6di9DEb4hMcmhP1fMXeTHx74xRdz",
  "key24": "64exUs68mCTLbDmoiLkCyXm9V28n8Pef2eFBg9Wou3U69Ssgwc7PJcfhjbTS5ncdJYDkeYQhU9XGexKQdF3nQkuX",
  "key25": "5kA6hez2FbaWMPoinEf7MQHPs6PZfEJjRHBqeaVUJQhh22BjvkrLsNt5vbAHLCA98VLCyZMpYBViV8z1x49AyvJY",
  "key26": "Rh5yio745Fvy5rBdQqBmw9Lb4ezYZUhnWv5gfb1bZDii551WQ9BYZ8vqiTB8oGLjCi1it4NiytaZjDm6uSUXnTd",
  "key27": "5ybNAD85c7MTY9wJ6JCBLPcF8c3iNsvM9a9PWHoFCE1bRGzF4QdJrsT5UR2rDYqX6Vi9FiqfFYNo5eY9oStiHbhm",
  "key28": "SY1bRsZPsGCyP9qB2gmQayeLJ6zVGDoxCCEDf1Y18DCFrqS5xym2pc6bTst4v5L9TfkYbHpL9cU7dW4mRscDZVe",
  "key29": "snX33Vpn4Ln46hyzqq1afHvtTvTCKtUsknGcWdx7mHcoFnaZkEr6c4MTpH9XR5YwXyZWrfpro8C4PkrRJLjTWRw",
  "key30": "4hgRUyyLfcfJNMtYcE64p1suTL7tiwdd9bpqDj1zMhaVaqR1zVmwtEXoAe78gFazxUASX2d7JAbAMMQhvECCosMs",
  "key31": "2LxuENmfpDXeVLqKiYGfQTpQV1bQV6NDuPwDnAJgNAF3dRQtJk6vPqWT4SwpWSjyxWvxVWZFLVYu1sv7gJ2PqvPA",
  "key32": "39Fdb5v7VD5NiS9EuSxvEd65ZGt3v1JxJ6d8QNU4TKKcNeToVGZgpnjtbEokmkamxZ6miMqKw98QFfGjbcBFKQoC",
  "key33": "5wXd1BLcgFL63AvDnWzdFAphu5pk7RGbBgKWsCnQ6WDEWc1zoFJ8YdBtSE9QeYJSQobmBF8tkNma1BkjQeBAao2o",
  "key34": "5Q6A67HJaYxnHMhKK4rvzU9qBa3XnGRjbznFt9Vs59bXpCfg7iT82imMaVErC3dLSipn6w45vwsSeAD4JKSjdXwd",
  "key35": "34MW862N8oKYdDvaRXZgnfvbkmiE8hyHRbxHHp9sDMNiNcWbvzAxnBfRh42ejYQB6Teb3uaoTotXPSgYBbqUBVza",
  "key36": "5eV5dpKqRucAAvcsyUjY7NXKe3YNSM6CfQhsZAmpuDAxK6hJQUB52D9GUYwEXHYHYCgQvXP2opg8G1oX3SKqJgqS",
  "key37": "3EMa11EjBFHtYQM8S3y3jeAtyifN52EpouMtLjwdXu4gJs78qDrq6aZwBKYEJoUPTZe6Vq1d5HhjU4A7VY6iQ3yJ",
  "key38": "2Xb1yNaFVUrsAF9mbU3DpMa9mqRwGPpLms6YAZZybR6No6HirZb8vMzsp5Ar51Pt8dwMUp7wd44V1ZCnHSqo5HP6",
  "key39": "5HwdfMdQxsLDzjFZ3mvRaigLsfWnCnRY5RRWp9RxoFM4d3PStcH41i4Hxyt2qiGrozhusQqacGEaadntPBMbvMXv"
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
