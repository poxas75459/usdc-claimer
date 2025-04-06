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
    "5f7gFT2zThG6wxH8mL69w9FXTziXeWJL17jooYnhjCN6GjyucdiHzxWtRFSvsU57zGNADoopjy1uAeNckyooijk2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oWJrvWXT1hVWY2eGEB2KDcJXw4ua7vzN7sVLrVUzddGpNjuxx5o5qq8XPBBJqXUKLAD2c8EgXf12JqpUEZtvJVq",
  "key1": "35ohGhsnMCL15QaRNEEFVpjU4aKCBmqHgKBzyCF7j2t2AbUh6mcV7CLvjTv16CGuWGdvh7FKP3dH8mdiCUbvNKWG",
  "key2": "23nDrbYmWiEFThTkXrLVcjw4jxa2Qk51fjkzpvsevrkBdnq9McdkTMQzim27GJpN7QVW3sCFqWEt5DcLazLcqSgu",
  "key3": "5a5gDJ3JLR93hJYkmdaum3QmbqY32uEQR6KvEZaqUBaFaKVyEmdtxvE5vdGU6unsFYiLSYTdTWSRUuxACPpV21RF",
  "key4": "GZn2DS5ckQmdzLkBghAM2NKubGHA68SWzCq65kyKYtSHsmZBYDGrmSFW2EWkm2QkjqVp3m37bwPymu7GA8meQYA",
  "key5": "3dLQbnqrjQRGM7oupYegwWMvzHhi2iyYmAHPioEeUctYFegqHsgCWaVRPUwui9di8Bnkrmo7hKcUAGRwrgEcaVHc",
  "key6": "2RMQjN6GPDZzhNwyXC8q7Wufu1pG2SeeuVHEryunwiXxyi6LQuG1vheyy5JEoHs3KuSMyZKHwm9KDJrxr4QUtnHa",
  "key7": "2Xh4wYuSC5MCxhHzyTdxGsSjxbdbnEFghiSzg2nSnwFNXzP7v4DPhrgzSvaauhVd5Q3GBDkijtoyNnVVosguSL2r",
  "key8": "5qyF7tNj8BFFU47FZqK8o2mTeAcrGQvvwKeWCGXBmXLxhX6W2MFaoYSUSNQLhQtqYUxGsYcjga9ei2NffUYYhLbj",
  "key9": "36xgohx6rGTNbStxhiExrw9PA3nwmXuRwstfLKP7E2AvrgfGXfu26wkr2yC3FADR691fQuvpnMTyuATytwotsxK3",
  "key10": "A65GfBKXxxjLGt7r6YjFSP9ayMw3FhumugKX23Q1mFhZxcPkjz5xyF984ncF6ofupNLE6MWMe1w9ePEPxvAnwLp",
  "key11": "4pa6NyrnovqZBzAyY3FaBvNQHYJSUraTLAnzgd9xt3qLsYNRszgwRp6gKd8xfr6g4LMwY4Ge9bk1F6EYf2KHuGrY",
  "key12": "3uXBTm9nsLkCQ76RwbPmEFn9hBG8AUpivPP5H1o5eVMHLKyLD5KXkdsX211NJJEvTmJrS5222U3dm6CDvzHhpvde",
  "key13": "5Nfy8wUzoaDNEtXE3qK2i4XXD7Ynsqj1KyuqhdrSx27gkTeSKfeweFb15LwioejmDvsr9azz83C5Rt6a91k99hZM",
  "key14": "2ZaVpnwtmXpT9PsdeTiWK4agRmS63pYsHT8Sr1UVNUvREHLsGc5MvDEbyj7vk9Je8oduf1ouLR5vDFsUrBdAGQ4n",
  "key15": "YnoQkyZGm7GWHvjfGjPs11omZyQdxNWJQA3BMicBG9AzGno4WDMRqPmo4b12DLBr5EF4tLj3rbk94B5HzozHMyq",
  "key16": "18cSomGWWxhqHAm7M7zsEapmykYc8afuzXTsZsxvVA3tjhcUR3fCP2hmGVwzdLsr7bYYmu5HHvW1s3rFZrSpdWb",
  "key17": "64raj5FBP6qXFNHMFitruxKYHKrwfz6bdrZGTJqdawf24s4xKKKCuFSxZ6VNtFnZqVoCeY7aa22EPDbNzFJASByT",
  "key18": "49bUghq3QwzWf13pKyvup3gxrumZwqUs6uXHTxSqZ7kWqhw2HL6jntV8V1y7x6cuL3hFBG9HT1euvodqia7tuTpn",
  "key19": "23vjggY6eoarVYcYkoWgA8fYqTLrGCGp46AYrQpRSgQhPhLVjLwMnxVPisWgg8iB72Hf8JUx5dQHVPWwtMgLsq7P",
  "key20": "5rf7XBWevP99a8qS9ck1ofFU4iC1jA5wqoJBNHACAief9DsWFKnwJWRp6ufF7WKsuepTB8ghU12sZ1PQdZ3BQQcV",
  "key21": "5pAD51VBnojPrpRaey28ERSb3X8cEkQbUqmRAGRiLS84PytD7A6dUG5JxPLYrJJJoo5KFFyMFizUgEA3ax5sbLUp",
  "key22": "2Kp8ufwWSRsGcGMaraVhKMYDHRoCutL1rZYuLzSA2hLF85HdMKWipUY7crJVqQboco7mpeUcq3zrdPfPAiK2au9T",
  "key23": "MqsBJuRSh4FYYh7GtRmxr4MoLSFusGmroXs3h8bWNUDMVi5c53rZcYQZVWgTarGGK4HsdoCbZ1trJN6RtKfDkRh",
  "key24": "4xo7ay3TXmCSh4tnr2n4Fuug39uJbHeeFQHk4hTG8rT527Da58QrRFsy6mYrFnFRfDzwkQ6ZH88RM6FryKch2Pfi",
  "key25": "Ydz6PLX9RB9RGMoCCywWKVxGLq3jAZpMAyu99aLKxNSJEDSzHQRaXqaSHCv9RBGqcfDKbbEY2RXdv2dCwELFuFq",
  "key26": "x4SMWRogJ1XFvdU84XY8KFtZasJmLDWQjzLkF288whjDcARkFaryAgu93TVWpAYQXzZv5jEywjg87jEgoQPxDmf",
  "key27": "4gphhwrKiXgSMNhAwLGq2K4TLKGEszg6CGC9DWHpap77JRzNLg9UXkJKLmVJFpDRT351Yg9Ei29mxNkZXrkv3smz",
  "key28": "4jktP23CHJjTLRzXh7gsF7jmr3WghyVTHxTqbSt4L7CQbkXAZpy43W5vCfH9PzqjEV3cajgfjyeUZXmDutUGx87v",
  "key29": "3FSypkmGoMkqxLMFiBGcvgHWdgnLSviP9XdEqspELBd3tDbfRYu8VX5ujTShq9UREBvjFJrtj5prvrYQKoXXDqA4",
  "key30": "2FbXmrCan5jDQNZzjecgBNcgPLp7bsTncwtvdCDjhk6jwwvs7aSdGhkZvJQajWL6LpSME8XjJjqViq3cwi7S3a4V",
  "key31": "3itkaEUFsk3nEfZUUKUyDGWK3oHCWNV6p9wY4ktHAUwXWRaTSoQuuKThc31zLurktL9F5robDZFrTy5i8kUCy7SG"
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
