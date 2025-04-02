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
    "gR4ZBsVMeWUsK1RPks9ETDEC9Kwy1DAbN7E3rhebWVMekqfHCCuX558NeLvySqLTkEWhSngc9FbndnRaPJZszhL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5B1oZt2WSq5qeHsZjvQedhpU5R1HE9oPFFdX4sUeppMsGgshxuPHMDssgcCPhteVR898hnKi8D2q6uDWMjvMh6mk",
  "key1": "5pGBWP9dxBFkCqhYNBaEbkT2aE4G9r4uc3LN8VU9q2zkYwJaUZftqytmYoAUbDZiuLzYJ99EXimTb1qw1vC9Fg5F",
  "key2": "zLAtuGZVdMQYDDAE7ydYbbwJS89Wi77ifF1CrsLjD8gCKThP8E6i6SWjHAfydxWWtZNomNCwXMsks212hm7ZzEE",
  "key3": "zw7XHZ8DF5e8KzPwUX9Z1jKFFjwNR7jbwVN7BQG2p7cowwbqo3DsmGx6m79hF2Po8h36z1oycUQmp9S464QKCA6",
  "key4": "331TTiWXn4fbKWMuMidbGQM5qEAiWMDMyGJ5vNwqjhpU5BSnBS9D4Swc8Bb1LZfY6Rp5VkQzFEW1LFWkNknDBsiP",
  "key5": "2NKchX9pad5dnGJWWFhw7bNzqTMVZWMu8LBpzg6ax7VE2M5yrSgwTSD8sMG8rFHQjihqzKt4rmmzc3uFESMmL5Pu",
  "key6": "3o3eC4bdLdgSzjYYWmZUEzgpnuZ2T8fameFTSzhAksZtPkQX1tVTSxPXDYQzn6CfeVdrgFJDoQvSgyfLuKKDBdfR",
  "key7": "2Tt15XaHLzMHNe9sy6hCDncMZ9LRvd1GzexAfPKpUTbvrMUaNKZtM4q8mVdWgo8LSqa8EwFjh2CWnUxCXGTdkisd",
  "key8": "31eJJqBXgsvkvnDTL5phWf4efjwTHp1kVr9ArnEjYnHS46AByV3R82RrJMAUbfhWbrwwQrfM8fnYmjepLbpiECp1",
  "key9": "51fzh18osoQvdvhXAuYRv9PpDyJMdiV5Qi88vQk7n52vShVtbmqwiSyjajqzZyvCfk9nNgwo2uu7WAB3p4Km5Cyq",
  "key10": "4hmBSyhDMKd4LaYj9QrkSRifZTLoUavrkKegTB91JdE6RJ4G2ReoFYWmMes1yYqgWUfgpjXmnyJoKrPUpKfx1Hka",
  "key11": "3hAz7WtLokSE3rNMYMd3XtevqW9ZPtvhjZHcw1QPNedmwFj7acnfauyKnFBu2ffLGEVmJQY1oanQpEoUu4dwdPxc",
  "key12": "5N4NDsdwQkW8LSda51ZD3iDdd2KCbJmgeDrEKeri7JAEKvBsqkzD6cacr3g4DEsGofoM9K9WUpzRH3XwKWnH1GsA",
  "key13": "48wvkUktFc551W7fWMB5jkR9XxTJH3mzQwF33YSLJfeKehyPCCUfAhoqgGKAT5fWD8unCsVcoYnWbFiWEx8WrA6j",
  "key14": "2wQSe61SVg4WTZdkg9dp8LSaK9tGXYzNDKTHkBzh1ddygokq75J7aFbZWhjan28PKwWdyd89LyRzZD3hN1ZKCdXJ",
  "key15": "4yk5ToTDtjnqwBZnSdnXCq5nehPJhSL9tee1Ezjo7R6Mt1cDw8ihdrfrBNRXEkeAZaC1JzKDSErb9AeydQ11GLhY",
  "key16": "q1bduiv7NWJikdbfbins2YidNbA2Vfk4Ght9SLpHvCSNxyQsg7LYYj4DDUXMzRDe1ifowztKzjDRuNJ6HLMrs5T",
  "key17": "5CSXU66h7gHNBov31vJ7JWKo2SXEbgpbopdCgJ5fY8cyeitpGPVzeWwFFwdqabMLHKwR2u9HBK17mkbDMJM5xbbX",
  "key18": "3y65pvq3L71wPq5ALWt68vSeyBbKa8KfvMtJDcMMmFTMYDw9rH87fZ6mLC3jQrn2Nu4vutzpzv7YG9GNyqvKi8jD",
  "key19": "5dnQK93n8zH8mTQyi1zDxhuZwf5gEHtxrVuDhrcNXw7ve1rgv7otGQQhSDaw3qWb3HLERJRS1Swu6PJvXEcNHRSA",
  "key20": "8uAUas58eygq9pbG1pvsXd5LxZaKVNCZuYAqiZmfrdYTVK8rTaEnMAc7jPt9VCeRT79R4gwAu9jDTy5wjDPAvcb",
  "key21": "4B9ikp4z7qoSnWdYsXXbuXyXEYkv2zVi7nS7NeXyRzFsYBvceXQyYxdUN6Ukjq8Pt3u7WYuY5dCQwdBHKBPPHeKK",
  "key22": "3KeUDpcuFxSykeAVs9wjDJbs4XaY6b3XYVqmxrimnoUbbE5g7PfR21rqf4gvijURTYgDSJfSdBbxu3fjwSWrJ4mm",
  "key23": "3kZ1HMmvcM2op1E8u2iTTSsFjiWhutMy1Tiy6rn1DPatiVTKX2fh9pxCC5LQnrEidvXLFrme92XTFJ2y7CdyVyd",
  "key24": "5W348Lv8iS8JzbyvcVsy9X9A5fmpqoNYGyWdKpUUebEQYfia5ww2p8Xtv2SQQLjQzywRcEjqKDVEezohqPsYNj9Y",
  "key25": "49yzVZnqTosm61QwQABdEa6hzFU88KwtAyu4XDKAKJdTqdVjscnpDYheGLgpiWXMSSVzVe2YSUFqNpAJFJfmGfWa",
  "key26": "54Vimh8bZF6Gi2uMQFjv3JEBBfyho7vpMYV1sPN98VRmoVw5PtR1sZxrZ6vcXgAPaLjL1BvacxZvHqMGC6eFxzLi",
  "key27": "63XTodYrqgmAGwbV6igGdcDQa6e7AVM7RCQnv8ohkJuTASWxwQ24gZLqqa3zeRMkCXoBtToNhBiJ3FmzYpNYM2WW",
  "key28": "3ZLkchh4U4qUWQkp91kdrojxRmoW9Q1aJqM4jLUgquiCiYN5fSwH3qRrJDSbQ4YfQMztywFht2FnKSLcY4DD8iks",
  "key29": "57aREqw6Sev5bzef355f5mqJdeBYPfAYRkLHrq2vWTNDK5KyACMbCmhnzzcW7mFzegmBwZCFcuJCkdXSsyPBgJ1y"
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
