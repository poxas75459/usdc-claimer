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
    "5AFxUfkUXu9d2RKrPJ7QpKBHZW7dwoqCr2VmRCfVQpkv6yQjVedJXEYp6aDU4n7nxy7DaQ9fVeFK9MuL7UZ6xajm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Sj3nnSQePARi4yibnsfECbqxrLmS4qGSRzHJw3gqc1fS2wmJZB7TjvtkTLLjKDrQR4uwYNCmEm6PigqUt1XNRyb",
  "key1": "s96aHyiQBy3uh6gNuVGg5BBv8ChuQ5ZjRhbzX2NQ9kSuAJLoFMW4vEQjhC8JzUN1jJkhC2WyAepVWwiQQFACK8j",
  "key2": "2jRzz3eqakcLufgUzH6TpjzGBkq88u4HV7HW8qUituu4koftXwgT8B56WcRbDSJcvbimtUWGs3d1J9gcB6Z3zqjd",
  "key3": "4hvrNrnvav27o3TjmpJkJsRb5VdJaCQzsV2LyrDiLd83mrMv5kDPRTMvAxSSdic2qSWRM9XuSUU3CSucqR36mptY",
  "key4": "n3fnfBzX4QqoK4PLE8qXP79jGJi7j5zVAuUJDPhJqXAdB3K9RwtzKCf4wzuiUrjdaTLTaAVgVSd5j38Lk5j1ue5",
  "key5": "3qB5TnNRgWk6sTux9b7gxa2Trf5a2Ttk3m69fGuPYC2YG42n24i3ZKEiZMF6542D9zAngyrbj5CbnZJ5Hghanfo1",
  "key6": "236N4bCq7ioHNtXj6zjzhwAxnG6U5g9wZu8yMHSwfDVhw3QHmGnwpVDVaFt7m43sWtXR5j8evdFhW6DtGjxMqvGC",
  "key7": "3RrbgzTzwyhGuRWXGHt9ZPAkfGHJgwUKy93SXsWFWi8cJ6VgVFKsvpnaVGYbtVFTy7vBDmg76cw99Qmv6vgpeL3o",
  "key8": "yfgpGy3z8TR88un3PfUPSNBKbwnT3ouP2y2jvze4cn4BvRw8DeJTZ7QUwudbBDk6Nnf9yuskoYgJ3DYP7QTgQmY",
  "key9": "3wNNTvpNqxo5ZQGmBakVjoGLYRzcSaLF73EoqvqbDTM4EuXgsE9KnvvCpAyKWSAdQHLJs4k49VWwcxiEqVumSLz6",
  "key10": "bkLxuJRDKnWjnedEr4nqADpiD8t2fYKMmRM2q4LuVh8cqcqnX6dfJ71T4G6LUad6VHjze7GEqsQC1ypqvFX6x8t",
  "key11": "3myLpREijuLRt5kVoUbdbhjjMC6jaaqsza9HjcDtrEF7ZE4upuaNjvkmDVSDf3ATzJ3TbHLi42SKzvTXW5gNU3oQ",
  "key12": "657cA3ukF26AVBCZLF8yss1zbAYMCJFHBCVhCQk4MRkKs8EuJstjVrNtNAfi6ZZ7hyb6z6fMw2PsipUL1Nfsmy5o",
  "key13": "5E8xeRoaRKEMU9Qyr3vKRTUEWKxPxFtTTJrEjU4Uj6QxWtiAQUD1gYUxERESJGpesjgmBZSYi6hTEv9cNQyHN9fX",
  "key14": "46HXwcsSa79o7wrHFJMvDpRdMt7CRyhJwCtzbsKWxAzX8VSgatgwUvHNQW4ordJSp9S7Nc3aRizidemzR659vi1B",
  "key15": "5mPL9NE1i31z7GGihFk8GRTKQ4BqiU6xSvePYa3WVJ8wbBgu4D3XgC8bkBhVFm5JeHESTVhsckeLmebv5F4o7mFH",
  "key16": "5Hrgdzw81rhhzdubtASCNKFg2Krgsw1s55n5exWGigw1CLkYP2KgPZw7x4Vr6peqBZcFnKXNQwpTTBUc3o2AmMeM",
  "key17": "2Ddb2oRHLjAT5rot1JwrRLxYEAfV7nhe4fVoHz6N7z5gYiqD5AJZoZcUYHV33mpVL1SjGvuQ7agm2x7z4XWh4FoM",
  "key18": "2JXrwHcjfvQTn1SbtHbDGiiUaBQWMHE5PA3V7iEJuBavs3NuhYUSYYcygZkHsN5xVyunykkt5BK8ZLeP2ffSqso8",
  "key19": "4k1ras6R4vS4PqRRG9qpXxs9E1F8sfUdzm72Fn81X7A8jsstUYVY28rmN26nr9usB85LGmGP4cv1kseoFKWqrab2",
  "key20": "4Rk4ibtU1vCva5bnh6JKCidTNkAboQd1JhsGLbyjvAwcefVTTiFTQFGjpZxbX7bu4rckLc69Ski4C5fS6yn7ZDu1",
  "key21": "4xehEd44ht7bLhXU6dZgX9zNkz6MX62jjQ9Dt8zsNmb89gLTfmPGqhiaXYgLZoBPq2BV7issgKL2TU82yREuLM6F",
  "key22": "4yGNkcVZk1RKNiuvhEQ98e3CeDeu2zdUVQ8pBcQBvUk9qBbMZ6iJo93wKz6XA5L7HSJKjmYPnxmoXy3Tp33Ay8uy",
  "key23": "5EuJKYRGTgpBxAh7ZQPus8bkC1Y2waGJ2NkJH4mTLZod1i9e2EjkebkEA5ZWFibQobbQFQNSEWQs9kTvcwoSTgSx",
  "key24": "UodJHP9mSgZCRGkRmmKmeoAkzWcnD75SmV4EDBd5p2fpVtqALmFrQ3ezd6zdZeRQPAy96ZiR17izVRApafoReci",
  "key25": "3uKfCbZ2dgUu4hvxAUsZhZbZqdeJ79gztym9uC3B6Y7tryu1yYC2SSj1EjTdLioW2toxxN2LML4Ro2TZygF8WJC1"
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
