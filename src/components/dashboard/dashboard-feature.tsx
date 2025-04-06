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
    "38ZM9dR6voTrF5jGyV4kvHLEgqsZJAPKcQvEygBVAREUMiNQTZ9dxc9HMBdJb9BbRoqqjGUXP1DPTC7Z3hqXkke5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rsNHEbTCq3NLDm7amsG1RKgRVy6R6skJywaskzbnijrwUJUtQTjumWrcHTgsTNcZDSoQm9mZTweUxH2SmWGh5x8",
  "key1": "22yDSc8TNUuqJUNWS3pHFMynZBPTsYPAsDFrC9stHfAcphR4wcE7dZoEVeRJN6CbSQsbvE9gojQSAkXjnQoPQoW1",
  "key2": "4eEy5G7kj4mNchR1BJVE5B3d2HfrdwfymgbHvzsakPfhc9hZqK8p2vWrrruMSKyJvZMoiR6PXrHTXP7BWmkAn4SD",
  "key3": "4a17LeH1FwhvVCYw2ndSxDsmo7818W4Vrrpge2kWSVyzrx8CauDTqpwpWukGxj8G4vXykLBA3w2hT81c8FE5QmmB",
  "key4": "3eCG91wnbbf8VnXFPPTRaNKowFiH7rXw1VgGThTtwHDCBrfQiq7aZ8V5gqVgyJsirbkTi3iLkbFKTzPHoqABPQ36",
  "key5": "3nCYkptN9NTszTmd2fzZYvxyKBwMMeF6md5TxzFfXVUqsv8ezXZG3qZGxjeedZ4x81T8SqyuJsba9RrVuPzks3m3",
  "key6": "rra1ZCeRvXZ51AADrjxdobteZAtrbATc2m9eFevrGHSUgu7gam6rvNStQQAvSA3NfGsaop1W41sW9sXZDv8L4bc",
  "key7": "4JEjdikfdFbQMd2eHbWWcwreRH8EcmmJeGMQ9dFY1ebPRDdhGrmagambUJAYEdzzRSPcGkRQ6jXjpkzrxieWNeP3",
  "key8": "36w7sdz8e4XqvWqEuXoHUTM4AY52kPai7NGBFrvAey2CHvCQjWevSKXscib6AirvWU8aD9tfYwnrNNp3E1MjTCWC",
  "key9": "5NS5dQS2qnLP4mhBZeG1a8SqUtdtHz8Jvoqg6vZKbgAA75Cq8Ejor369kTgeyV8TqTJtusWyhuq8CoeyFdDEeC8a",
  "key10": "4mVjUWhMNrMhEBQjhLZsNBuJuT5SmP75eAnFy26L4TKxKre2p15Ps7ddCgwM4q2vwNWL28XaVFYvSXrE2pu9meET",
  "key11": "upW2i8QsCWCwn7dQbCaUeXoC5q4hwafQwt3WLG4iv6C7NcoX1LFd8J7uRdBnysJB84JQEh5SV4YGMzidSvtxw8s",
  "key12": "34FAij2hshpiFfe224qjyWiXMdzdFie1qV3L39GXR5C6cBRyoXepctpW6U2YK65fp9EU3EjMpvpUB3i91agZpFCj",
  "key13": "2FFLQ7hTnMyKaG2FZPbp9PS9FcdhFL2o5HK2FKKysFCLHuz49zTJo1VzCUNNrUtRbPCSHcxt26VpERjLLPGvikLT",
  "key14": "5NC2faQM63ZPJg94peaBRG74SszNNz2w5E4kAG66rsyvsHuswKFKMojBDzeh6tGLsq82jbBMCJCNFhf1WxXbYhRW",
  "key15": "5tvmwGkCJFLWe3wbLuUv65kwuYgQiaeXhoxV61kipYH4RxWvPQEHoGfjGReLLpG7SrSuKTDN8SD4akJ1PoAiNrpD",
  "key16": "21ALBhwUrXGSCvpDmb59jxQkWAvbuPsJSD4Hx2qtj7UR7me1p3XHx3kf8vKAjXGgE67XgpXuJRXeiZCTT2pTDnij",
  "key17": "4Lc6FMoqQwFkTenjKoSUxwK4AWx9yrA2PRJSvPptyjucjPLeePUsXCB9ksMavWY6Xn7kCXi6YYc8ZzSsEadpitg7",
  "key18": "5NJuasVgFxxmb95v5Wzr617n4Mhwu4Yu6mTmaoUXBVN3VCedtRrD2Nc7kPjnbhpfhpi2TZsebvdaqLTngToZmA4E",
  "key19": "4i1avWDvF87jS1H4Z8GLPQCPJMYhHBREZ7JxchHGBQrVNv4E9qjviXXz4o4mBAL4GGCGp2ewc1bXQ48CpqFeEVGB",
  "key20": "2P27rvEqbQXdymiX5cUQRfoDcaXX8m3diiLxv18VQymNEaZfytVyy7ovhHeXsr2pkoQk5EKwQHjLG5qhhnAiPemE",
  "key21": "3x3swvMEr9XkKz1XXaeCjZoxkdBGLQrJLxtwLy4hktjMBF6TfGNte4HibPP2MFzSeKVeekrPnuP8FBMHCwgren4m",
  "key22": "54kfFYXwPApkcZWFbDjNi1h6b4zTUziwnAGm2iiCZVUkCFyGvsMgyZNuXimxeY9zgHgkzSaNvDVbH7ofhkdpFhGE",
  "key23": "2xmWjRiqi5LpKGUBdx4ANjR8z63FEtG7YsWoxjzij7uEPL3u8ZmSDq52MxoFvMKGYcPFRr8zHBMShyrKQD6KX86y",
  "key24": "39uBuyn24PsMF1nUcRf9yC2v9h9tfdrDHT8wBJt3CXcs4tq6CnjQW9EzQGjJJ16VQ6JbSdxHdvuSqe8taZ5n6SWU",
  "key25": "5GwXXEHZddHdsSRoPtNNUTwvfBbBfeZicKWYoWNKuN8kED27dVZMwfKq8uQM3DKqNeYAEGsR4gvKAfsn7xatob9o",
  "key26": "REFmoBF65H2wdUQ6VAgxvfDr1auzhwxsWa215MCYpSmstAAyFc58isu8rESNWA6ZYLuvgrN26Nks5Z1poL1stf3",
  "key27": "3dZiUYqUmpBvWpv6VoYad9yD5rTVfVKwKyKsg8GTJ1cjihaVafuqZRqHU4Ffjn2qjaGCVTFF1z1JcF37G6kFvjcb",
  "key28": "5FiTPHrE1ff4V4i1CVTJwZwnAMmBdS2SqmvyxDPTT4j4qP7bKAFnuwo6ZmNPvpTynn3tSQ7eiDwvmwMKGMByjqjb",
  "key29": "2LEGhtGiJrTD877LXiiDr9yMtG7qjDfdyqk8xbUMqSBLGZ7ReZTFV1ieXaqfNnqdQbDEEYNCGwCRjkpoGyS2qnLj",
  "key30": "2tgAzSakDsL6cyvQmNpnf5wsyNZfa2NGgHYbjxiMTRvKzJZuX4XmNNie5ALy9FR6vBjyp1H2JhqdzuYwTkvXresL",
  "key31": "5mWHL7JNq54NpFNLcg88renKQB7ZMFGbnwfo62X1VwkRSJYp4KtjSwYVq7qGPpgdmF5YGKfQQqgNCNvWrsczJdm3",
  "key32": "66TYMEc8PUxk5LkJ8ebVmmFMsrtgqXE5WLY1TqT5EdunTGxE48f7obajCpCFKyi8UbVTZU5eXnH6UAicd2KdJFnK",
  "key33": "4QpYSiZUZXzSYt2xcVjCpskAUZwG35riVrhF8v669LJ6KYdxJVBLjWvcMc8XPAfb94Rfb4TNMZR9u8aK4m2JKaBd",
  "key34": "5MwNAryDdX9MuEBbcHDJY5g6mjGvSxWDUUY2dSAkc8yaQ4U715hAMoDCLvocFumADwnJEoZK2kzNQtpu3jC9dbU6",
  "key35": "34qwFtbDdERjgVpGAgYmAx83EcjRk6mq6v8ddEokpYFZPuZ5p4VzfdZ3KEgvJHLS7EJjRaFjPozutzhaNWDSizeg",
  "key36": "2p6Npnf6iP8SKonnvQ7vjGv7yHn9yvTYAT9qMttk48MqkAYBbF852J3ZNBHtP2Yef1bubEE6dKqGMKd9CAh9Jvz2",
  "key37": "28p1KUzTkw1eworGYm7jxqyX8nPwwgzMUBJT1gdb98YvKxJNpqb2GgAvkKJprrvVRJfJA8tB5Bsomz5jc5K4KvqM",
  "key38": "4kuTrozmoG6bejK72eRLLQ9c1SY9h4WvTcvftmaHUkx1YcMurDQbrfb6bn3HGWnpjxjhXcqNjgs15o1gXhtK8iM",
  "key39": "5GWktgct2JnSjxSBusuEkgN6qiQWSKPSu957S2AUGNSAbvpWcd8D4X9mAT5iVgDGvpbHrnuqeEm4oes4wuAXFRdY",
  "key40": "BkwT6BjwFafw9F4SxCEUstE5QEAFykXTCwUaMywf1CtzKtzwyqd9rTCTyiKccNsAXyHwhZ85uX8eaf5dAojxQKv",
  "key41": "5WdaU5YevTSkWUSELmZ6HrtGXsMMauGfvWzKgQzGe1w599i6vZximn8mmXur6RyMz8ZHK3Fdg4PYvFPnRAUyBk8N",
  "key42": "27KKSEk7GCEwnyhi79MutKpuawgyceGpTMWr2nC4m2eF8w9Fo5pVY5jQUAGarTn3GtmPobHsXjHzM711Ab7SdUBm",
  "key43": "2o9csoYMMqq3FmFoX4mUKRYTnvFhRK5WdsoN9nN34HFZD9zWU1M8bNdMYwiCMmQYDLM8uBtppG1rfmUZdmWXJgk1",
  "key44": "NqpnrSTAFPgJDH6nDtHsEeB2KZ5er1YHQWqJUHMguye42AfSfjuKPDmUwvKoLnjmjqjwdCEZzDMmqFVrMKUxt23",
  "key45": "cQgMzWqxzNwCYoNLjyn5RXWb2jPxYLJMg8XbAK2kK64Za6dsUu8obibbv8yot12fjdU1Zi5PL2NJWEJyC1A5AeW",
  "key46": "29aupN9n9C6ZuQkXZ2Tf2sA4YiXAH3JNYLPykQHH9bjNJB778MZaP4t3XBVkPK2CLFueGMgbKE1VLUcxXmXwvwXB"
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
