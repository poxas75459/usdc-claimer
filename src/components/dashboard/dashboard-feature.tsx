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
    "61kLEobsjJbyz5fnrdeKxP9MwnPWjw6ViJTvMDFWqBACS1WKte5VkWgK92qjtVnotwrfLFfuPG6qrucvn6YBjuHt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CT5XK4Rtojr2JEPpxaYpYD1o7278osgrZVUSCQ6rqEgEbEo2cYcDFchaysZ8XjCRzQHiG1D1tcDJ91Jzs7qQA5j",
  "key1": "4aCUrp3egKWNUDLHvjtWwUryDAyqFtK1dD75Rp3qWgZSXvmHC9MGcrDi6u2nbbGPXFhaWEsWvcubzCigj2xPbkvq",
  "key2": "4BpNivDpuyiiQhjws5fw3yqdLXPAQfisDDbKWXZqPJQB2kYjTr8g3jiHVVetsp9yVJGX7nqYmCb46FR1hJD5UcwQ",
  "key3": "2PaHJAmxRzPyf3dVkpGLkY6a97Nq4wMqTG3mxMwEGb21jhuGAtPCRYJ93KZV9KGWXryyqwv69XGinARNPZJ1F489",
  "key4": "ChPg9AkxfcwxJnPjgPaNxKKQqFyeu1m4crfpGDtJzKQizLGWHVWvy9zUNDcL4p3sbSage4bcrJwGEnpQBemwLqE",
  "key5": "4RCASi63JLvMRP6fJ6EVjww5Doa7tqSkeYRUT6W5ejsDxufvqLPrSeUwJkEWhkw5kKf93rm7SKGyJ93oKuhG8Mrh",
  "key6": "4rECMGFWDcMEHm8sjgScSYkjLwxcZcZWFW8Vgv3n9RhLyrKNWMnPCAehUgGQQcwq7wZErTDUk1Nadsj8MpmjaEJG",
  "key7": "5DkdCfhNrzEYF11FXf8QydhS36nQvhxoy7hDpwBnqtyFdXAY2cJAJEmFEHU15Tj6G1nKhFy8SRsowSirRobmZ9X4",
  "key8": "5pErBUwsAJwxoA2Xv71mtQibBCKGVdmnCTPaK26yGZdeJLBSYt8qtRQ5vKPLpVSXmZ3o5Av4viHfgPCbAqEVM9Lc",
  "key9": "2ZLpnGYAtAvr1369NfJkZjFiU2fKwHPHHVwRkYMWDgrV8NwujKGaazBCixrzpzpsAfKZPk6U3udqHr9xcz7x5LVS",
  "key10": "R9rk3VnJmgXAAjv4TScovctYErvzFf54yE8Rm27C7XNEQyWVV33hMQwLbJwvZVBjLXgfMXvUU8ZVp5k1vaHgr25",
  "key11": "5E4QfvSEdic2EXrxSGhRFp6ZErGSYFxE9egDZExkzJrT6NUTEEuFqqcw1xYeYXr8HKeE4h2hS5L3nRmA3za15Yeg",
  "key12": "62d2yySaP4cEBPyDfsbhDY5haEg71AuT6pCuNAZrJFRZzzQDG8RvDGQBsg6iKLaPh4SJMbPWkzRLktArS9RYS1QV",
  "key13": "4WGcGd2C96fvtPghwWPYgDc2tDWYZhPjRQq6AEu8kuDhLzcUBJ9rXrWNMzcoQbaFqLUAAo23bHqR9NzRqHq7Wcov",
  "key14": "4tRCZiLAZbms1vTJ8Kvzse6d67s32kcbJJv6TZKCt9omQ6YiL6qQ9Q32XCa1r5EAL2WsmyvkvQt5tPW5GKvwSTqx",
  "key15": "3KUm77bj3SJZb3x9Fyo7oZV5skX7T1mivxwC29Z1FgQdKVUT7vksD5ZYLkWj7KXV16ee6ZbKYkEDcLcVSaRkKPAr",
  "key16": "4xTu56oMfVWboNFCQnmeRSQBgWJEMsPDByp8fBCsaYV8MUENbTZs9V1QMQdNENGRxY7zu3WZFUMQyMBVZ8RVTwjM",
  "key17": "2B1WxhrZhiXtaeWiX3aYB3odQabspW6KV1R5nrfHwsqRTRSBZ73qRV3ty2ddx5EYJs7RntggYzaABTfR6N2Fz6HD",
  "key18": "3QoDJP6TurRZ4HeFdEWtmTTvvJUWCo7RicDtRfPnWRZCENpeb6w46xg19nqucs5gjgqzQi27HirEaPv4SJePFM4i",
  "key19": "4HdceuTnCLxjjFsPCx9uodArb1KnyKBbnCvUJ2eZDuAcACUJdNoZcuT54JsQEoR4pE2DFLjMvC6xSn8FKViHUSh7",
  "key20": "2NDyqfUxFFT1GoZyWjjAEd5z2DcBB6PiqQ2Xx7rE9bfVLDy6mkvKqkFSFKi2toyKHMN4hKxxW6FRgH2esYNmLKEH",
  "key21": "2GNdvHaEvPAANsE35NKat5drPum52oiJX4bTq76xppxM8zWQDWia4yBkT1YQvU28A35SPahzPRNJNbLPz6pLUU9S",
  "key22": "QjDN5j85jnyoeG2t2KFFyg8UjB4poDh4chuTsA71WSE848DccUTpD8sdNCNQYaAy94MW73mDLPBVqicCnzeV8Z7",
  "key23": "ML2i1cbmvZCyfG2AgXbVDesXkDCaVXzFpdr2id7YFaNPWcfjKYA2Z76WTf1SMczYJ7pE8KBv3KS1rzPZ88FnzxY",
  "key24": "2pP3E4a7xsChRiqW99MMnZwG1adm3mi66XRuVDA9JSPEetuww5Hm6TBvHnKrNSYqYGFKRLG6GgbqVMQViXjcHz93",
  "key25": "5FokhYYNsjE6vEz79Md7hxjpahxoif6CTyJmu8z9Su1g3jHCo1jbxLatS8UtwJkabBXK7zG6WJTRjRhmKS4B1wBS",
  "key26": "2GMhxZyW2KKzeZpYwYAM1TbsgBtjCq46Wu16PiRRTUEByowCzmp4szkNRGJb5fCTWkUtAS2aZ87FgmQzJLCcZHSP",
  "key27": "28s53M13vRo7TPArnjAiWf51kqJ5EwpfrPGLnfo6bgo4yYSLdT6Zu2KFMyUrnhXGJHhUCALcpxodgcttfXftCRhN",
  "key28": "3qkvAA7fFQNu12mkGruMZDzJEALNRHWKAAFzyi6VhHiJuUpM8NxWvvYw4cugDQ235c4r7Ux9SRsTy7NmFQTqfqYa",
  "key29": "5mnZd6xmTP3TD7aXcqBzMacW97WrXCyrZ8JfHUPp38AoNkra3EpUgDFq54tBxdJGJo4ceMFuYjexGQZ7T4cLM5J7",
  "key30": "2o26Dz1JWUiyWehTZgbuHJtUaBfkae27fpFMSn1i8iz7kAaYaCjGrArUnRnggyNb1ETrMNjxbB5G4PLTvPbgkW4u",
  "key31": "53Fb2yCgYaV3Z3pGAG2YrWhix7LUScSoYNc76Hg8futXq5MnwK8EsaSaU3MvWmERTgNPADUxturePuMLWYAXZGzS",
  "key32": "6HCordzhQ3x9VDr1KXt8soH9Kaa5jgtkijcW8vpA44ksDNks1cH1jJAqsoApybX3SGMZeggKFCzq1NBmDYnNSFc",
  "key33": "3HezeYZYjXKiuCNMEXHZrU6b4cxqzkmRcyYZqtiJweXXxpU7JrUTt5ez9kjh71nH2323bpCiira9Nxy7Gxg8QcvM"
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
