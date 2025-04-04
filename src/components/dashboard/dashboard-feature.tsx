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
    "5tLnKww4rDjTQKDM9tcPJWHbo9CVCkASvCybiu6XuqYcruWL37JaQifd2pfb4n9qZ2mMCNeSZZhtuMTiSxeDyr2n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CJ8nePvaQDiJNdjxg3CauPhDWEh7tjcVxem5LHFwJ5h6uGJWxrseYVzQwK9Q8kPGAfqACCmMaDgeQp7Pet9Ye7c",
  "key1": "UU8UBgWnZkQXbgVB8otes98eF1NBoeC5nEKENmzmVdMQ8omDiLexpLq5Ccv5e6Pafo5YmB6CSYVjqhsYHMJhZsb",
  "key2": "5UU7g7gkmVhxpkh74LhPWTRwVwn6VXJaYB4EPxaErUVWtdkELe5xgmTGdU6SRoExY9Lwb84VVzi245HdizMNTrkN",
  "key3": "urB3WFN7DMe3LSJ7TU6PKxTJwXjrD7X5SxofNktRRqetRr5jiwNbycytW7STb7KTGAND9ZzzCaLxtj1Ps51sDYh",
  "key4": "hkQhDKACgQeuzRX5FsbMn62DJ91GZVUz5DDQket1GUbJugah36aRKbwaUzSmviR2uDSsvJeh6UcLEwBfL9Zgmg3",
  "key5": "49SZgBPNcwuQJkr96yaaGLnp2T1yEcv8g3iweQc58iehHDuiyG5AQ8j7sjzLeD3FyER9Xtw15WSf25X8XKppfTei",
  "key6": "3z2tBR2ZiT5YBnJn8rwqNaXDJ2mGcUGe5xNPAbUJgU6QhmhE9Wacpm1yAVkdefTAE1RgUcWExxFusZSdnfTyDEn4",
  "key7": "xBX17wwiCj8Bmm2puWEmAZPNB7QPR5kyVx74pkvzWgRbL5qZEtUU7PDU6FeMTgLMnFStgPbMrHs2P9To9iUfSQc",
  "key8": "5BmuMQjAn5WNJE3LXWaiNxVLSMSYAiYvxU5dnphjiBhmDGAXi2GrENwcoaKuseFgSUc4Xf1GJUvsHQdMAvFSmZ2i",
  "key9": "3JcKZnmoNeb5EBf47Eq79dUdT5ApQjQQ6z6fY89eMsCsSk9sVJQqYy7UcaaE1ntAWsyyombLjJPqDufwgpKbKQtj",
  "key10": "2KAmGKHXVXj6ubbV4VZwymPiuvCsYw2GsvQLqyBidous3xPp1tKBxPFHFwdz3A8ee6az2L4ib5XAZw6jQwVyMD8P",
  "key11": "2kgF7MoSeQPy4pRKruV9VJLrHTzRRfp7sya36Fidgvpw2hjhvQkAtTFCAsaWSS99y4X9PQRnQVrSL7VbmHvT5bG7",
  "key12": "44A16qM7xfRQWEfpcA1EjdRHezndkZfxkec8n6rs9RWQwaYYwneJnqLiTW8nGuLxffzNewaXcP4CgcJYap9r67JS",
  "key13": "o4htQLFzLKvX8LUxuxXPSyxKF4oj4veQJHiDz6cMDoTd3bQujtVpKx3uFWJEUUdckDcyBXsN4aUE8djCM3uzYMs",
  "key14": "2w75MXx7diKPtHKm8iLknPThfZjqw3w7xZmrJ4y4RjUxSBncxNe6ftC6FkVdJnt9oH7peP3qVsFqqAnLoFpku9dh",
  "key15": "5o4RKsRwMYj5ZSwFjXkbbnkNYKAEXVwMoGBzEbA1Rk5GdVcTo8NbagHRwFvkRSst5fCHukhb36LcbtR1CrR8XK5c",
  "key16": "5mwzT6sZEtiyb7a3TcRTtKScHBoCPtdcUta818Whc1tP25PFhfJViiJsS2T1VjidPhZdo8fFQLg1yBHxPyyDyuML",
  "key17": "3cD55HxerdMWuWF5D58bWStDFzDiB2JdbehmuG76Bw4dwq4cc72WJNkvWfKh2JoXf1cm83ZwSVLmosUm1rSQiGT8",
  "key18": "u2j9UUmLYKegZqRbmmVtHAzmGp551z2M1bxzHEGQxmkkf5FmhhzgFt6eKFwE8ouC4wrRTy3Gn7M6n5SeEnTdScq",
  "key19": "2ALA7fpYWq8t2nJopScnBDaMbG14SmsJVYSpcoAzB3uNBvmokF3awsJbcncr3M5QXXwk8awKmRi9zfQswSvEAZiK",
  "key20": "5JGcRTJdZBb6ivTa5bA6XWUSVXChup23xzBJrg2ZqfyYPRnd3sHsipP1tjd8AhWEChKdeBbsPrGgVLfmpBtye7bR",
  "key21": "6fxas9MUowo2LqpHekbyEq2rz8qqEVeCuUvD8oB9vBm1pU4NSFkYKZ4XRoBK8wxw7KK6wdJTrQqYY1beVBLFBex",
  "key22": "3Wfy7o7ov6zmHTF3KfKNqingFXaSd4XSnYqCnjWxSgozhsvE6QUmtJcWDJ5SiVNcL82jq94ovmkyUGkgiAjmP9QD",
  "key23": "61ABhC1JqtrCBAihmSJJz9LgJBpLffm1wvGFcZXW42KqQh8ugNH79zyHZwXzfcmbXHwmXoKYDS6ALaE5ffC46Yvk",
  "key24": "5xsCDZkhKL9i8uj6ssRDG8YWD4Y4ThZg7hWPdGX1cdxPfzrVNuzc7pJNcAkCTeUwxymtRKFKeQxhTZAyjMjS4WET"
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
