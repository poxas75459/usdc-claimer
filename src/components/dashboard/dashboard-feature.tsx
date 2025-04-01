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
    "5Gr62mRnniQ5m9qHjTrMw4BozxRAcQqnnNxRn2FuJab4ydN9ufefhrXXyMoGgWgjwP2ghecsvW5nJSRJUoCmuoDU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fvWHsyih5qfYS89xYMyDN2xi1ecxuMYkLvaj7AhaeyBDPTb1XjmFYL7DefXLGMgLdtYmocbaHdTEX2STa39L9CB",
  "key1": "2jiY9UyBQ785zNRPFoQ3aNPQYGH6L9yYWHnaHvLzwxQsjmYG9bNsN9Nvmif2oHh29My27pTVTegWm8Q9Y3t9AiML",
  "key2": "3eaeonUw2TWvgnkrb6Cjc67YGPRoRDKG8b1whBT1G4v9XGA69WEdZ6SbiT3qW5SC5cHSL3qgW59ezR7pDwFMrMqx",
  "key3": "3cNs9eZwL2KP6RALZkHtayrZ53sugwVdfMv9eBpJbibC8MkexAgzJArZX7DhhbXXJW46N8c1sJL5huz8bGBHUQTZ",
  "key4": "5tQwHBPeDRNAqkAA8DF8QBejxGwsuepJXCpE8AgKjT3xpsjzhJFzmh28g89uKBAoZKbUESfJMqLZxkSFtwdK2PBq",
  "key5": "3DcafZjcNbejqMMpwqkU6H2pbVMPCbGhcAh6buFjAMjGjgq87CZKchEkrUtiiLjXFKN5JuAMa93T2b6wxXfZ5Du9",
  "key6": "VBkUZTwo9FZQaW8eCfwFRAs8G6qZvfFaenq6NPTrFHjNjsgZMn2GaDRENTiR2L9fhBxxQ94usAATaKwXyg2AUc2",
  "key7": "3dccj3BBssgc5zMgF8S7G3SMSKSkpAqjkVoFTHYfjg6VCNWDfAABYWMFoxQbZtZ8HHdgDgigHGEWFS345o65QHve",
  "key8": "2vJ8uL1xupkAQ7bELpRfE5rEy5ykc6i54sWxpFSMpzA1C69zQrhTQ9JraD7PkymvR4umuPsiWakxwV1jpomPcFnY",
  "key9": "wgALdJu9TkGMAVZ43utscJGKntsL2tSDFaBKDQGVR2BuTQQQpSGkA3QSiWYD1C4cj2CeWFhLAn2LwhQinNky3B5",
  "key10": "364tBj193qiGKzgpVJb5y8TGVqhkW1iCJtwKknPt6vbFc5wEEWq1A8mFpVV3PNBzGFnHQQ6QhgQGuAJdxjB1UhXg",
  "key11": "2QBYPsFdNK3RYD92LKbH6u4cdFLC5URV7BP5ZjSQFJkc7m2juAHw5yk3tWEMqLEDbAv1YLT1cFa5oHp8kHWqJ2Ha",
  "key12": "23zNPnhvxdsM6xuTajJwmvagnwSZqG5397qDgVRPFLBmKSexFimAUcitNcyhx4MrkPgadrs5u2CoQp3jARqqAjDM",
  "key13": "2gKbhp6WtgPJgrBRi6CxAiQWr8Moa4jq7jFJCLQiFFANBgVhXcqgX3h5UMZz7B2ZJRVjXuTVYPdsdE1JZpTdzxBB",
  "key14": "3MH84oe1qKHKY5yZdXRhJFHx81bsJNjGKExGxMBNYcDzosxmkc7RsAFWz2kaXQDa6CkVheT1SxSq9xuEZyHaeru8",
  "key15": "2nYm9jkRAzSRk1HEaHzTwmVBkYW5iPberU7oPPCUa9whHFKKdXD7q1L7ofrkkgZx2T38a7KYUdhYKN9CvrZKr7k3",
  "key16": "txrwAzpCs8ywie946Ly9Xt41667pPYD72oRsVzAmYEUpU4NEvMDwCVacJmczcAVMQgfVkynmcpCYCt4AUJzvNof",
  "key17": "cbRDwcGiaFXGTJPAZRN5r893kd3FGYtwNXozdN9k47K26MHWMhAdaX4sxUQosrsNMpwd93YEt4j6zrtoERkGtCH",
  "key18": "XEyn1ZwoG4BVH5Vk8vztv6Tn8Lx5sRRAToK1y1mrYSLLXsznX5dSPBVxoni7fPk6q5LFT5XSd4W1vdW5arLyGjT",
  "key19": "3Ypu3tSC3BkiYHsCb18bhV2ffg5RkNNR6znDt2hwU2knJgrXoBgAFoQP6sA4nNuqeRwzPkxUFwJRxZ6JRoKE9aVq",
  "key20": "44syAq9N5aaEuiE6a7a28n4ANWTsR7YGUqDqWcHXxmM9Ku1UaMkAEKEeudn5P7ApZqSf7m3rdcKX19QGzK5fZsdD",
  "key21": "aeMzLm3HN4NCvu23Nne4iuqepdUYBMM4AaHEqXWz65NT3NorPnDejUCrWnFJi8ENJq8jwhz7VNRohPq4yyZBhDS",
  "key22": "5Y5SwNiitWJa8hozxD5GKkdM76DrGo3g1HdyA5WWWzGtpX43JE7nuFh42uxJjnDHBqXULCvwucBA3kTNNnWDxDGm",
  "key23": "5RKu5moPgJXRbsDq1aVmbNhNdakmTczwAuS8NxNQEcZ6YhW81sEWJwcnSfhngj2jqvv4jcbn4M96Y3PkixhCBzhZ",
  "key24": "3EujAWcsyvprNGMuw6ShBMcRK2MzKtKmZom677nPAi73Fjzr1crHJvPsYtpobWpYeTdoZDbALXQGAb926PNx3UG5",
  "key25": "5qsFFhNUi1wuu4fYiXQ9VSYp6EHH9bbPsojrVnrnmYCNNrXTqGzR9eRLRGZ9XQEsNWg3ozY9wLhTDaeinKWeMr2v",
  "key26": "4o5ax42nDeaSdkZS2KnkphWFu7hjhLMNVUrynEjo7389yoTqMQ5pEyGYwXNG12zuE51M2Zd1SFM8HLHRwHP6eqBA",
  "key27": "5mRrx32odXB94q4MYKwH1umLd54MKWGo87Stf27ht2Wkrcupej97kQJaLfL4czxAmiBwH6Zj6UtubJoqcWf5pgYC",
  "key28": "4DrrZgjA2ZBE3PAJyYJwPg3HhMCYWJsNxmH6KxfRzzeg8KzgmeeuQhRKvkbcgrx1mnmJpeTkj6C6hLHwg8EZjc5P",
  "key29": "3fY2J1KnHMauDFEMmzEw6nJBzfsGFvWF7WyyRiiCZqdeFLuNYbAz7WZr4qu5xaRgQ4BZSD5cQAtuoqWPp33Bqx8w",
  "key30": "2FeWzA7HpjNLfHz35QBWdhtbzCf5G6KYMq2RoSPbB7x9qX5VoDCToZJbu3T44sM19DSbrFVyzLQTAgNQ6M1rQa8v",
  "key31": "3qNP2BYZa9b9Lg75CWAG12xVLRJKLiQk9awP93kitmiaTsQ3xFyhbJFsRVZZsQr4Y7nQ2kNzvj4ttU2mrfBDj3pY"
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
