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
    "AhNWzNWx4b4j3R9wyyKDCyHKTem4zNyUkm61EFQTKtTZ7yrhnRrDuC1hKheFPzQ2XXp3h18L9zAMdTsujfsTSMP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "okgUy8DSmAtjyX6JGzYRQE9EUwkL7t1JGczTy9mDLgi2r4sv428Mkf53fyyKJPaAywoGw3SuheWneVC2KtHhNBp",
  "key1": "5pDPQgtkJaeJygGSsUznXd4ZzJGT5s88fa97CV3FNrCnMEPAFrCpQ8yLCQ8WUvzTDhi5BgDnWEXbdzqcJ1CAvdFT",
  "key2": "2mcXnfqUc2E5aZwyjPZFcktAbvw9qfyGcWH7ARJDwsCsr6qra2YHoXuizv1TNEiSxyvPuRoPdZQKjDDEVhRQdeuj",
  "key3": "3PmyptyHu9qocT6xjvKxgeup8xNMkwQ67P4Nc8LTzQzQctzxYrp7devaqpa2SejH3jhLBQ8a5vUq87qGqdpNcB5G",
  "key4": "4gnCv4syc9cMKGtEViscKsfxNjTdXBgGNo4S3EcemREBD6SAk2TXsWHz2amytGgJEWtXUggiGh6SZLQf9oEa7PSM",
  "key5": "NQPMLhZKkwGFvEBa3xBUJhQuTkR27aKWK6Nv2y9TKzpc17nT4prhR7riWPXNGGxbFiEmt5jUCAbaNppYzz2GWzo",
  "key6": "3DVbxYX67WpzaaiKRnM5yP6QKJs2x4bCa5NNFduFvJGHJbD95sXNN254LZy8VpBy1TqRVCfdmwN5wxCkhQGcZJDs",
  "key7": "5boXo8zNx5xDhvASWZHLcmG6rPhegREsMoFvTbxBHZ1Z8LXQULuhrTnFokC1LEAHp6MGstYMswKQzC2QRARptzvx",
  "key8": "656Kg4TFUeCXnqX58SL65sHu7QEmJbGU3p13wxvZmv2mcyN8UYzVn4uAhugjHkreuzUJd1MwEv3QFkoxeqkbK8V8",
  "key9": "48TtwVbHCJmBpyviFBEzSNoXdNTVAN55iE6NzXH7iYgfRpLYfuVvvfXvTcGAjAQnxS1SEz9bjJVqHXE9ghBPwcVT",
  "key10": "qqvz4QphKwXnqDKQNWQEt6w8Jfybogxc92Kbd2bGHvCp9LEtcKFPRu9dEvqDSbq9Wc8oZCzbAVvANKBbyfAmHWZ",
  "key11": "5gBgf6G1yER1rWGuBJ1i7u5jUPVPZrLr2bNZhXjhitPwhAdygbx2GL4hypr1s8T2Bd9yUZyBCbm1pM4FkndhUwum",
  "key12": "4B6FPpLSDFhbH5PvLmc6FYd8AhEBE486SPtjJ7oCRm5tDpt2zfjR5seiFoAMazyyg6nCa2URDhw7Cgt34ZpRfmAF",
  "key13": "5y6m7oRNaK9umEdu55uvrHxBAjBfsFH2qLihqAXsqx5cheEAUrjN82tPZ1D4jys9JbyBn8JX3DvohaT2aTyzt56o",
  "key14": "4GXMJm3c28e8cGAVehQbTJbh7RQNQTV3ztasDuVdyUXQPKkwbwWhKSFRfeVigLMTcWBcwfWA23FoUiXFHN5i5Zom",
  "key15": "5LhV6C6w1xVTZ7s444gtHwEYttyENczH8nBymEdCCmMrAhaTXYaADKHgxyibM6oJgbpcdizgNhgL52kjMa6kkfRV",
  "key16": "2b7agoBfhoSgti1oCgQ34ynHe3BXR8D2EPURs5tbYiuTTnGfQSupTMiM2YTcnaSNz5mWr48sVFcPGBSbK9XV25cy",
  "key17": "RGmLk39UHFkgTTupu6ZSJYboA3WFHJotCe2zVtkREiMwrXp17iuiG7hfryqZmox5pN6QZaeJY1i44tQXuKVepfG",
  "key18": "YGdGag6Z6JPuTEthTbZ83cqSu8MBvyzWkLFBnnAjmxV2KakGYrg6vJKgq5kMJL1ffJhQM11x7AfJ14L9ejZc8KV",
  "key19": "2tzWPZcVR39qYAa3ffJTNCe8WKStHqUxtP6cqj9w8ckGFK8594pf8fqGx1yZWGVJGSrb9no4Xd6kiXTrW8SGPmz6",
  "key20": "3awerGyWVF13Jvfe6CJeiN8G9wC56a753iev8f9mBfwFc7qMsTGVZpTfa3jJwQ4dukBG3nXNZsq8kBqjwKTqSZuF",
  "key21": "36UUycsq2ygrTTJx2ETXaWypomT6UC9c7EB93bFgad11wuBrQNKnBDGVarLrrKouC9UxNZNLeUycQm25H3n3eSCj",
  "key22": "3VX55AjKE5DXjq3QW3dFUigkJSQDAQ15oP8gyLMqSr1uK5U31a36fM23hD3JhwDcYqMw1kXXoDhGj2Co7eyDxzF3",
  "key23": "5QSLkjZneov245x7GBoFNh2AAZJ8cpnGmCZYDCv7SAEKLS7U3KZ9WAVYdYNQ4JgW176fK41NtvZr7RGTifShUWgr",
  "key24": "5QeaGJFAECYyWPBXBWLQMy7xa88YLg4CDr6aF2dhgM9FNhttPSbyz9CA5BdeW8bXaqPJMipUSVskG1mAkKft1Q3e",
  "key25": "4Wo4HQxfBos3qqa9XEQV2m2Hk83ZuBh3SMkY5wSLLgWyjNZ2M5KW6aG6tdFS1mEWMupcU9QVBFddZeDv8mc71tBa",
  "key26": "61UCRzDV3geCCSXXUrnQ6QdLDzbwAXwr4KMvojRhm1nWec9yKQoC1iMqV8WBeyigAnjc3AQMamWDBxhgqQno8zy",
  "key27": "5SGzYYSoHDjcjZYRHMfYxNKK2eQbdXvuurWqcZ5RCwxjudp8XVNid1DenJ2MtB1MwebQa2JAQJ6F1WFQ6QYVSRwm",
  "key28": "2NDUyA8fwTBne73AVWPrrYYS9FqC6bgQVT1wCwAsktHXyoRCQmUiwedmB7qjmuKEAfr9aXsf1FcqGSsfp67gNuVp",
  "key29": "4r16KCAfx4XMhWcuwwV5F9xPF3NxXdBpjzyHdwiapVjqvwPdTFdVwFAECFBuARE9yeXVeKAdWj8de9VeznMFEwmM",
  "key30": "VycHVybwBCDLnDER8WTvQCh9pCkFeLUkmbHGHwJXDM17DSyFBLHzoeXJRx8UZtktj5TRMf3AgwmKZ7En2JFzLoa",
  "key31": "2G7YiYrJ8Rrnj6MEkNv2VnNrTj9YbSkmsPRcjAS5mkP8MGVUUSEGcNqKHppnoZd9jQ3ML145gWugaGQMGy9W9p39",
  "key32": "5dZnuECk2ihqiybVrLXDvQonfWfHWpUy4SCTJba4Mi9gaYGHpKyBkPpypXuQ4qAcYjeYQif9tuSxfwdZkT8jALUd",
  "key33": "5wspHjJDR818kCng1Z72mvWkfE4nNpZhqzCfYt5LAiJBxvmJQ4TCdE4NucfQqZ9b4vBNv2vSFQSpDbGHK9dMGdVz",
  "key34": "LmYgbEP9xJSSMcV2HrJgphB6QYhJqN9Va6f693fp8y2Q5Q4Tr1Xt7FyAnrAY8qCcmnt1hgmukDafna82ZGVXnbq",
  "key35": "5ELDEF6jV47n5BXhMyhdhJvFuVNmcNsKeajAJnXkwr8i7guYHy5WjWymq5DYGFkgK4TSo3urNZB1Y9xcn8jqY2dF",
  "key36": "5WYrh2iGQvyw9i5GBzgsw6VkEpAVbbTwAsf5qAS7bxiALJfykCDwD1uhYaM4t3ScFvN8eTjgRD7PVy2cZbXwDXuP"
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
