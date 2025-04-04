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
    "2JxiH7xfa7BMuPk96zJDagnW8HWYAa5yNR2CoSzQEg49CCbnk5Z9MeCVvPG9f3XV3YjghLMbxZcU2ethbwePqWma"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JnPZny84aUuJzrwPKSpsR7sCdmA2aoyyKcuYHxmpMLMBMLWquSYTpJX9jdkWVKknHNSBzNhcNHrKtfT96fQuS7w",
  "key1": "5xsHb7MTk6xAoUhd5YsnHYoJEV91oHsZytsfmbRWoFadjhpJkL9JcrN1dySF7ukgKLmUg7o6KxSqcHbbfbF1hLKz",
  "key2": "4KafDiRDf5P79ui1QLKEZBmwaxC3MXCKVZ8cyyXKgBmDHFvwjhkn4U1bwm9vt9cqMC7n9hoi6zcyLV7Ej8xeu952",
  "key3": "2krnfbwNQfDArEZMnMVXRwvaWcpow6RTKAeNSi5T45ZyArr75uTpT1jYDCvaLvNKDQ8TWJHk3yzsuRkt2XjrmaYn",
  "key4": "Ttw1eba7ioC3zuCdr2wTYqCVn9iNrsGXkqgMam2ZpXzJP6dEch7Wenef3jAEXPwYevMXgtBat9xC7PgdgyGRkfc",
  "key5": "4C4KMgMrmPGtpyVFxdWMPBSBeZJbzC59qngT5ccTpDzwPpsV7YYzaYw5VyrEGZG6U62skgqRrjqbMVAFUUGEgiyc",
  "key6": "5SiuVCqkbTRRuHp2qRyMRecDxJfhrYSrW7dkRUy3uyHozQgFkVMnJiXGaBNRVSb4VK57srim4XXtyEqu6k9LfwS3",
  "key7": "4ZxGiKMm2JT4smZgc89Sg4eT4E1zegux8fYHUzMvWK2huREmoWyJvU5juDY5PdWS5Lv98ppgdCdpRSzCyK3uHYD9",
  "key8": "nsZ8PccjNe2Ys9ryEJYtZHxG4HsxiuqLi4FCYfMymw6zoT9vwJd1JQgoZqqSvpnDfjJPHqtySbi1BuSDSDFD9Lr",
  "key9": "2vNXd23dPFHdqm3YqvmBi4hYxRQUGB18rxmH8VbyFu1q2jpbzYw3BdqFRxPm1GSnHg2hbL3a4CunoUrvaQx8v2dH",
  "key10": "3UsxoM4Wk5zMkmf1RRHu9Fsvt18cuXWdH1y6sy7L4BGQPE4uJHFmMkWmE7bruY3bUdJxp1Us2vWzAMtgGJN7pGfp",
  "key11": "uujhmHaSvfK4Gz8cAho9d8JMBhrfafq1tHBWHUY39b2ZQbdX6So8xTxCK4e2KwjADUJZY98G6jPRSUPiDUBqJBz",
  "key12": "3L5YA9HumiEDuk8RnNJafbBB1mrVkn8j9zX2yL5ptf4gfBH86PY2LJLCZgLJ5igXYGKar4gYBAryB3hvX1xvw4jS",
  "key13": "5mZyfEFWSqQhYHWrhGFtNdPh5FwpSNMdakFX9eZfcyKp1up1LrBjKfTF4VQssiR4yuo6o6EY2vtFuFvi8DeH5L2L",
  "key14": "4ETpGLBAmcECJEyYFW47cHo9bKRsA6mchXZrCJayFCM8ngmGa287kfwe6uV3bPQoXfEjtk8Q2gD2BC4YWFYjntVa",
  "key15": "3XRhfnrYW2MRXYjSQPL7vxdJKG2cn5kQ99Eu4b28Tr5QLv6nYzh8JNuMoK3mY5uPy3Y2w6Co5nAB52y36N9kdehh",
  "key16": "2jaTnYNhx1JorxRMAswiKFcKkYaC6W6CDnHKFrP44jrKDhBgPhPBW5Y6WRSTGQvHxXokfLkYJ4uV4f3RHiPGRDAS",
  "key17": "vXnYcaKY8rfBJByvA8orygz98Bw574qSryA7Cv6miXkh4MEuQNafApKDcqv5LkUF4nYM6t38v8ePGqUtcrnYCDt",
  "key18": "59EUrKKAsa2TcY85qszTFSVH4Dm1EgwZkR7R53Qdo6mYcwnhUD8XZtxDp1NbA6axADqm19aTpQ5bTMAqDpGvn9mq",
  "key19": "jC8G69JST1iSztAQW5Wq6ST1CLfQLwbkmFkmZXgrMfHZmSH39fao1GxskVH9pNP1NYtpLgMFdSf9FZY2U4L67bZ",
  "key20": "bPRy22d5tKLQYE7D1jNE96vPoc4Z1kvrHA9N2ZgxeUzLsFYRzbPTQMioogRyn47ybFdCbsDYxzCkzZrFtgxYoHu",
  "key21": "4FjAxAxqKPfNd1q27zGzQhTMvVyGMUkPeVo9spyd4UxCQBf3bEqLvqh5xPaAtVtDeVUZAq21VWj4euCxrLxFebJS",
  "key22": "2Fw9T5u8ZZ7APAoFbzcxDENNqm7k46zqV1ZTQQFfdrN9idWEJKMDhL8U6zvbtfZ1ksznBbqjZ91DS4nkVWZ5iDuj",
  "key23": "2PzditV1qKiKkkDfVaCjF85vVpXkhRc2haMNoLej6opB8R4H3vKBB6Q1v5RVfTYSudu3wVbGSC42mbxjHS2kk4Wt",
  "key24": "5NqXUHVzFkb6gu1HeMwxjtqVYW7oYdoUmATtCdckN4KHPqcBNam6B3pYxWAwPeyBs8b6oSAgATr365zQ4AVeMsdF",
  "key25": "3RXCUAymZYtNQEYCNGE9gNYBa9SpTb68VFpGrQdUpDvUT3wMQSp85d43MayJCLmEaT4cYFEnRRWHoMhxjah3ccDG",
  "key26": "5VN8iRRU5AMVUq229Ew2BCLR9juKwjUhLXgFrGn2EZ4qzLdZDfg4vwBc6aCSR8k97pRszzcyiMTJD7W2HWk7iLw9",
  "key27": "3hgQfj3amSmSzrsqLQXxV3B8gtLkyVUxXhLR3trQTD38QssGPQNdo1PDKTEFPHEgyrJqsC7oxPpU7Qs7ZTGKuD1i",
  "key28": "4NC2pkxKHymszu454FnekzDvpABNuXwzV6U8buF7Ua5VhKGHbQnZ6ofN7X8RBmnsHksGH7hAPzpPgkGfnGnPJ198",
  "key29": "4AAuEZ6QGCf3rK5VGwUNXUoqUGsPkQL9C7dULwsVXhTY5vYnmSXSjrueXB2dYDhmrei3mo4LFuhqwR7AiiuuDzbt",
  "key30": "2UymYnaN7LVJ8ZAF4hutgyAFBAcjSEgKRfhQn82FWMjj1UJd9ScL6rKyrJpmHPjLQbKPuekW29A83t9Hxv4YcFbb",
  "key31": "2WSqr4kDjsafkxfKd5SUUw156P2pNJQ42uqD3hTJW1JB1WCMzqjZD3LU9K2St2zm1ezDC8ayznWMt8AiDb3pnXB3",
  "key32": "2aS1spjTKG47e7zBQGBxwz3MW1xvZz4XeJejDsT94vZ9vfujYQdz2vTGvUyy7vtkVLe1gx1VRh9Wm1ZxsBAs8AcS",
  "key33": "4hQwLhJE5q9rfRc4dqVPRy3aQK8diHtxaMQcz1EMS1zohAcbpYhSXMGjDwzJbBsbSsCZPy8D4FkPdn6vFkSVtoEV",
  "key34": "3iFFWNehtuXfPR2npKAwFxm63Bm6Sotdf2HbUdkYHsBrqP1XqBabZxGdd2nkq3hnbezufuWEmJojoZD6FvsfFsgj",
  "key35": "3w2eatd6BKBJtgmyG2edXmmhxghqNZpjFFKjru5bxHNoPWu2rqoiUtVW4YRf5cbT1FE4FVrQ2v6aV1gebWuqsMJS",
  "key36": "5i5AmjMSp7wBZoAVH1DXDoo28T72rQ1tSoU9DiAMUDMKu6KqsPVFQ6ARYAtr8SictfLs6rDH3gUp1eGr7YxyDbMm",
  "key37": "5shYhDBr3NAK4PKCbPGfrW4hfe3866ghJdy3z6cTKiyS5qoJ3T7k2FxoLNhjXQP4B1TvcDgVtPgXiS2wbGKfzfoG",
  "key38": "3vfJm7hPUAdw2z5stjMXZQuXtxdEKVFZvZc6EeiS15rrq9ma8Dfr36bE4T7H38mMocXV8P2XWvhxFngstbwvyUpP",
  "key39": "2PYUATYgjHAFLyj4Vzn4FpZLnRTS46tpnmeLgn3ekWo98Ugmn3XeuJiSZoNe1wLyvazbfnZCtGjKs9Ztn1HKCiwA",
  "key40": "4nnscGPp14P3K5xW7GTJqRQF2Mzp5M9TjgT89QvrBf7kW9e4gdc95La87DSG61bhMmGAZJHKQBTt54BYUTH1T6pC",
  "key41": "2ed2hYTbZqR3sLBzeCZLpg1guCayrYygTtX1qgY3FCRXYnXBJsv41NWfxwVY4dCAQD8rGuFVFJwDs14H9M2Ho1zv",
  "key42": "5Wx88yQHyL7vDrYjJUrGsDPTchGk4vxJbDdGRWiZWqwjeNLDPcntc3dancYmT372G2YvE65XyfYyigJconSYzVAp"
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
