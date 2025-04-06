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
    "61b6cKXNyZgET9R9Q1cyQ9vPayP5Gza2Q5kJp938LqXUAxg69ooCfAEvD7daNf24UQqLrAdTPFzEa9RwjTHFbkNV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Xa6qDZqkXP7YPF5CuH1GV3yoJ9wZ4Ph7A5L2znX6CGt7RPit5KNGdumYUxStypK9JDvRUSBnQ3KfPG5YLvmAiRB",
  "key1": "fVkuSCxmwF2s563rQohkpFUa8eUaqRodaefWbSJFeoV77TkyoRxnEZ4iEcqk1UV7vqUxZrWFpHwXqGHSeKff3ST",
  "key2": "TtW1mZdvqCMdyYvozpHVJg8hAERJEC9PozSV6RYmn7ptLVcbVqXX27qZr6YoCoSKXt4VnVVhrkDMegZcoHKRPkk",
  "key3": "2oBqPAddEGMBUU2zD3Hb9WvjXQfppBN6Fn5jBwZhf1UJUEEASredA5XDgNrVRK4wzFdFLqgdt5Ls7TQkc9cWrkrn",
  "key4": "22oxb2UszaTRjpXay14b1S9YgueCBeNMstkHWBBorEEgWgeoYDHx7qbyHiPhFPVVJAqiDW3iSUFTS9fGnYLfkyu2",
  "key5": "35z34eAZnjuwmN8ML2gB6KfngYtkpHFwG8ieQngdGLSGx8j8nFMWn8RmSQs61aAAAUAkuPVDfz76FxJgek51Z6d6",
  "key6": "4tGAmm32645NWLuCdnQHQsSoFdzMqwqeVeWR3cuDwGT2PGN8zBk4qKQJ62bsfB8u8RNsTTfsYE3WvD17ftWqTw7w",
  "key7": "33fSXJNZXCmhTqu5ceE5AtvahLF3Azt53YqHy4ZwRcD8u4UqzhePvjvSvFc6EuQc5QPvtqt4vXTbe7EVL3XAWeUS",
  "key8": "3jmmyoBQwpkQt3WfEEQYMPoxc1P5CGPYvZpG3kaPwnQHmk9Dx5wkmQoPmTyH6BwZmXAd1qF6rRUKvZjueizMCXKt",
  "key9": "3EQT7LCafA7aVaG8Nd6qNLgtcDwcecbmATWiUPWrtNoB8HWVkkfUjhnGZwmprA42Bj2cLmLwLEY3KziEVSTmE3iY",
  "key10": "5p6gSycuzVHiqkVCY9vFiKC8V6j6w2FBEgRE3WnmeoCtCgJWZWV6qd5sKeJSUFaHU5sMDgYevmuGqrYirDbKWoVK",
  "key11": "LdBeYoKhgtP5LsVBvdiNDAivCWNXkf26K8Y1sCr87L5X2HHc3VWxFQoiRqvq8eYYbEdprworBNy2zZJDBp1AUX5",
  "key12": "5LPPetkzf6cRchYrHyFPpxhHFWrqVJ7ywtAFqFzaBiY32uqf7JPc2o7EJTJL8S7sokmGTcL43jZbJmXUcBxcJr57",
  "key13": "csmNw8aumStBt75o1D6DCqwvvWxFVtzua3c4ocbkZoEHBxw2G7egjJFGAHTng4RajGK8Dxspg1VPh2zs5Gfa3hx",
  "key14": "37TXaoQxrET1NqEE9FPqis8K17h4kS1zMgrWg9xTqog19hT5y26pSuovAxsFDqbXEZ3SHsy16yciKZhvksy2gUbx",
  "key15": "qttr41TSq2gYm6tJyzPxDBxfVeJXRwXyhRANfH8egBVCbkyehyfKCj85mjEv65yiS5mrHkw9kAL6iQnfFdGHLbb",
  "key16": "59tf4uw1sQpo9T5GdWu84r5nFchTbYPhJ3m47qpLXFgSo33mbjJ145CLSc4nHdVg2zHFgv6RtyseN3dSUbHo8KWv",
  "key17": "4FmUNKrXgybkibHkNcmykxpDhkDmBYuJkp4SqCdPdnge8btZayUdMJVqPtD6sRcidcJNJvASNcsRUjLKwXCbp74f",
  "key18": "t6AbTU5rd6tMvJyqxH7zqSETpJ8SgeGD3E5wcpGqnYosW1gt2dDdDWgTGMVxvPoppV29H2LweuSy2RvTW92rg6D",
  "key19": "2X1efEprRySvpgzdypCP2xjHcuEiiSBwFpZxpYWy2myBk75snf8Y1tkF2btfwhWGYm31Uc48xo7HLTtErmTvXh7g",
  "key20": "4ZpABXKKiZe5XQEjRQqHwC9FGeA4nvLWwtA3GAJQjZ5Z1ha592yfbuXSd8JhExCqYZnuTZiaSikxaRPd9XthWEFZ",
  "key21": "5dMiSaygdhybV1hRb2nzzEKZnRNiqjZz6TXkLJMsTnSvM61FwuZTGoFBJazSAQaUxAkPnXjj8Rx51TGDu2Wg2FwG",
  "key22": "4EwFv4iK8tsfK32i3d2hT4e36zJNb5GrMwUbX1ucfHVkAJczs47V36tpyNYHtS1bTS8zYcwDZLAvZe18TVaBV1pM",
  "key23": "3TK1Mk5Vq5eBsjz6YW16cQFpy51zNmgLkL6UrK1nwYa7aE9UrVGiBMhmuTLxBBmKhscgYg5FXtfwrsPvsXeJwYNY",
  "key24": "5tz97MBuB8dx2rrLx2t7n1EM5Rormcmb73DwXQs2d7PtEVkCAF62eRBNndyZocuaPFKz5sLnaDY6FLXvmiWdVFsM",
  "key25": "3jgZPbzFP9Jk4DiEJA6fL1PRQLkc8qNigRjqu6kY8VwmrHkAkDT3i8Me2UEiFop2oxtSrqekPPxLa33ho6ed6NTm",
  "key26": "2C76jnxz73ZrB4pNCUzBKvHajaRjMKJrefJVTnmX5CDWpMSTG3w9eZBMxnzUsv8RkNzmpwMq6EYAQ6vL4TDM6oJj",
  "key27": "5DSj9r2FKFFmYnH1Yrmw71vFhq4jvrtV4v6cRP9kpzJXJtwVZFKLLjk2yLU8NvHWZWEoLe8ey9SELNiC3br58fPk",
  "key28": "59QFVkoqqoy2iw93QNsfyvF5ubjhketwNALYLPxDS7hJBYDssrdhB1JdWe6QS9Takv9PHuTKNhAuUULRrtn1kmup",
  "key29": "3n1jmuGNdiMsfDZL2TFPE3WUg1C3mRWppcH15dXgwHRZ2R9jxfPbPc84vLzY1CdXF4671iheskHrANfCuvNJk6y5",
  "key30": "3h1dqNhNY27avyQEn3LbHipPbNigDNHf9HLf4kJ9rzjAitmT1mzHjNWcMoNUP3nQ8cMQDSjE94vKHZNwDapHuZn2",
  "key31": "2qVTAnTMcbGKS684MrmzW35CTFc7F7NbYWdgR4bzwdoB4vcpCkRT9Kyxjm1hEzdqJXxUVP8zyUL3f3VkUMEJyfvk"
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
