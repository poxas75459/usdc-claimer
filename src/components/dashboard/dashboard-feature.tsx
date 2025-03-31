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
    "4y9VptDaxmdH8qd7LRw2ahakY7pwFP16yWhjzcXtfjh6vPAqE4NQxKJqmz2FZFGpabZgp4FQKmgRGCh3SP2G4rnh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RX75hBEQFWZcpZNAZYNrd6xy6BenWaX5JHKj4FvR8iLbNQqdXqCjRrTQi3qWZUKtbrYLXGFNy9YDHhaigSYijde",
  "key1": "4LsdqcYuJuiATcRoPqm6fYPVPpCTGaRuvTt9ccrao1PgCpHfvj4qzLtUpx24mL5xkLUoTSP15Zya14PoETkrsT4X",
  "key2": "5d7QTnqPgT4pPb7HgHSpKmzWkBwp7JxKfSNxpvFSwqPqnmLY7NReNUDTbDx9CPxRfbBvxXKr6K1m9ZMLmn6tRRBb",
  "key3": "2EzAZtbRg6cyGTstrFvMnU5FJcqKAZLpZE6eYydMcdEZY5LoQtawZ8ogYrkus1TZxNiRRGoCEi5SdcpVD8h34yaY",
  "key4": "f2WcF8dEoqnKL4GvTxiQAkdB2y5SKUVayTCRZGsU1zXjGJaRh7m5fDxbBt1VtQYTRnvLQYn8B3hAt2pm2YypGaV",
  "key5": "3TiBoVvJwTBCNbaVFKg9iJnDcLei75rzQtYczKgRN7Tf9G7dcbXGvu698Swkau3jXLawQWeFtoiGbpKmCZ2iDPnb",
  "key6": "Wweaz21RecxHAo96PhXmCghUV4KLZWYv2zKcBewvJWhS64iXJ9HrHU9Vm1GnZHQLE9GSb1CrSG2Ly5jZ1KLyRi8",
  "key7": "5cMi81kxs9buFXrXpyDh1JhXsyrNozGi3NHYeDgsNwMSVbZav2B3kM8Wu1jt9NEwvhh3ukT2ppnYMyW47hA3zQHE",
  "key8": "4MrUSSMhov77KWyyV2NwGszigLbXyqTMedJzmvdZwUsxNEmpBD8X35EzEEjjj2BJ6NY5UKLnWfYCTDAY92D3xQes",
  "key9": "fkZHycCYhnPdv758CbCJceNdPrbsZJXrGrtTggkoey2YfAsJqZ5YEAP7YWacaT3v8w4KspimP8Hw7xBw1peBvpZ",
  "key10": "29dJTezCGDS2yB5WVgT2vL2trsRj6yntGqJ2EdUq9S2wqLBEEJwtUBGY3EKaAhRz8mceKhqucEadbniuKpkBLjuE",
  "key11": "3qSGAJ7aAqhw3TCNC6UyxRLWftLppRgm5YKU17A9sHrib8qmnyA7AZm2SCm9ZPAX49cxGc3EvjktMkmvXdFBBSrj",
  "key12": "4aTLP7Kbqcb4ezK6i8ekcr87bLgoPytckT3LZBGfsMBntHFXwkP5NSD3g5L2botR9f5Fem1CwpEzhubNNxzxh3Xz",
  "key13": "5w21theaHNzyoXycdY71Ry3yST8HEN4n8boQBhXfEeTFhmRCst6bEafNC4b8iGPHXLJnqMkwHyMqAwKRysAMMqro",
  "key14": "5P73ZMHVVjBX7MTUYsPMk24bof3hX3vM89BKie6TzrjQyb81R19y4xFydjWW5jtTA4MPMaVGAorWe8dzcGrmxgXQ",
  "key15": "3gpcwCgfjJFjtXkfqjKRZvzLJ3bsvS51xAB9AgvdiowAqGMrp7H2C5mQgsoFdyDnbBEoBfJZCLEdiGWPhqhq6mLr",
  "key16": "5bLPUrPFKT9wEdk7otn5xWucsPkX3qgAvdy1nWta568rN1PSkYwrrz3tpaqo5yw9mUUJJhJHMYvNnMY9zvvVDpNR",
  "key17": "L9C15aemYec42KfBvTd2CMfvxPnWbPLw1bm1YXrv9MoPzFt9Tp8V3XNV313ScrMmiHFxm2M9VM9gJNPrWtQaHff",
  "key18": "4VLcXxh2C46Njk9Tdo9CDDz5NVFCJejSiT3mANiPB93Y2hL5Vvynmmh51BGeiV5J5ijuCXg3sQeYMoHjsJPTw1xV",
  "key19": "LnYCCUKkyztEAtJ77f1iNAG9yNQhhGMh2BqpwjmtzAcQWcrUiDPcR48xDdFEdney6Hjk9BrLm3WFYyG43b1yYDG",
  "key20": "23SYzjP9MvXLMSKWbAmDmGTXDZjPeD4XfnXKZ1vu86pd5wUtPAFV9e3jnabhpLTDBR6RzA2UyufaaE9uU5kxixi5",
  "key21": "5umUtr58K7SizNyxVNHTorvW5YEoFy9DjnwfL7PnryLj6xjX5GHnDzBZsuWAZHVRwqrAUwVLoxWDtdvgyrvRqa4f",
  "key22": "F4jQtqTxKoY2csR49AeYUcGeQPb5FowuKnk5nCY8Ubd5n3tJ7D4zRGsa5cXn4Cr7QLToMzpC6yYDg6tKw3Y2uTy",
  "key23": "so7NK8t2w9bzkSGg8dc3d7TZj663K5ypXGHteXQtTMhT4zJAC7AsLofBg5oYotrFsFmd22ZAHYXn36K5rBU2dUe",
  "key24": "iboSXiZPE92bLLXuZkDjYbJN13S6k2LStAKxjpbu6PCeGwAdBBfkQtjPDkmbiCKK2aJqNc2jrLn4jxB5KhUo4bK",
  "key25": "FJTXfxf6UjzdGHYGv6RdAmtPQCsT2h3Hdpq5rZmxAQTdvQJaXagQuTdEP3L7M4QpfNEDeqkQkFaDY6jbp8vjCG2",
  "key26": "eAHXwUHCPb79AJrEgCdzS2pdikgPuYSiZwrLgEZ6bTCmbCwMCd5PcxSLKLAbkZa8F6T9CxyvxZmJsnbBUfWspKR",
  "key27": "4iJHQdywKSYFDxu1wksaXk4emaYp3gazs2G86tkWYrRAegSQdS3yKVvF73Ghyw6kWorzULb2xbxFbskWfKqMK4iq",
  "key28": "3QZbAp38bSFnvZumd3iy3HpaSLGZa3nr5ytfVTZEr9xegQMHCpJSttDUd87yaunAc9hVAhyevunt4Xsnrrqbvzgt",
  "key29": "4NsSMQFf6CnzwrYPyy3rZVzHSA5JxFfx2WiWVWaTdPqKke6hFiDG6ZT3GMBCmKG6BD43mitvTwyth1B45yai3jVh",
  "key30": "C5yiqPmF5C4ZHjaMXf2FKFsThRvQgRVUUfEFEsRWXd2GjZNvtF7yiHvYsvs8g3bbw3FXtzLAy1JMzbQT9L2afEw",
  "key31": "3LEFkgmB4MSmkrwziXw3ZvZN6a19UViZzgfBNf8hYbBwUp4GJ8UreJf58acqHiS7wUB53d7keAqSbRSuYKoe442L",
  "key32": "4hHvxHN6y81GVAaDggiDnBYcegWrs1dRbBtTbpJZvoL89tha8NbuEP9yj1oz8ULaawxtddwYGGBAR7JQ3wpgzg4K",
  "key33": "oZeyiSaXoqarfUL7Q3rHg6tmr3cNfp6QvP6bFVzZ85vqLcDqpvKyvqYi7jKoX5LRaNrFCem9U6nAMt13SwdQpkA",
  "key34": "5ijxmqyjzmYdaUcxJPPjZmzBWvWkr47ca6KiqCx5ztzibQUbKo2p22vbfm9mV2Eihmf77FcySyER4HnfSRfm1dn8",
  "key35": "22QGDtK54jZQek6VTP1nX4SfSGyvuJwnGM4aSsfdXPsrwLz6vBgca7nCTNQfViWv3dbVabe8gcdh2uz2S6Niv3W3",
  "key36": "314v7nRim64MpaLBL8Xsn1BKC6cvv73sX4Swssrwb8iAUK9NFDxU9TDqp5ijeKp4RwL4hHJkH9rerU6J7GzLscR",
  "key37": "4yh3HQp8MG6v9GfDkRzfyx2pbHcMH5zjx2JbB27dpExE5xXJX4schhfNUC8KpEpMJVFPg3qa3c1wD3byGozbjZU9",
  "key38": "2Hp2uEWQzKoS8Pg7X7d5N8aTiDKuBN248GKHsFuHN8qSGj6nvMG9X5fbFk1J916rZff6nLjNchGrMfe8z1Cry5U9",
  "key39": "3Tvc3KbVz3VHgTDJ1xNorQCppJtWJBKVChmm4C7WdM7dihugQstnjmC5fapu7nA2fWhhdNFrhUqJrLo4ZfUyrD9x",
  "key40": "5NHbqky4bTJGEfpkTwgMk2akpe1yhDsKKpucmL1j5SK6xrxhQu3uWSv4Wz2jb4r3ZeFTLipzCVNatusoBBpMpU2s",
  "key41": "RHvutWNWw3KkCEtNVPY16W8m4D6JeQcM83F4yTrR2QowLv4ThAK6eDbtFauM5rKnNgxwGouNNKdJyXo3rr1LXFG",
  "key42": "3PeNTCxz34QRitSa5GBs9ssHDgXjpabVsH8jNefFSgGLPkZTNvxi46U4aZwpN6kqov6ajYvpZxhRBVziZuPUo4BK",
  "key43": "zSHYhVQvfRkJXn9TfPw6FZZxWSgneXwiE3vGPUy1Yuh68iqY8Eh7JxTfpT791MjPJ1V45AD8nigkhbDfF5k9b1S",
  "key44": "5UZ3p7r5x86EsCnHJbfvbZEFarDWRyDtxPdgmfJJxT7fWgHZcJiB5QZS6XYjcFVq22mwpgV98P8mHJBEx5UVQMYt",
  "key45": "2qgSwxTeNWLMcUhyLYwvrm116BxcueABBjg6ZQ6nbE1pQjJMDaMQYt2tGVxKhSxwKtnaqX3VYH4cNchpFRV2hWpN",
  "key46": "5h1SeU7Qo394qfPrnC1Q1HaD9T5ZDeyPJq7YbcykLfaSADoqmCqAmnnptczAJ7knAbgNRr9BCo3ZB8euA25GUStC",
  "key47": "4yJczNdRTB2UDDjzcmvmodfnc9TTnS1agbrqTKnkdwWxLp6QT6ZFZYat7nPnLTU4obQEfL3iZp2Q7635JMw9DoPj"
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
