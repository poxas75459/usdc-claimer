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
    "2ehrUKCGJRZYKDEXTeo6ETg4gQza6YomTuZRZVgfdVjvFvyYvUkbhH73gLQ5PtAqnC9NeJxU1pchNJ6W8x8XNjcn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44onNLSta5yT3e2d3CG88b7jN5DGEx4aJwbEcGjtHzuRv16bvu4kyw94B4L9uv6uJDNuXYa13MTa4xLDMXfXbgzH",
  "key1": "33bVKd6ZSEkUKj3Yc8U1izgmr8jfePuHASbbzCEpZvgejC7VBHYw6a1uCLb8noKmXXYvmmF1zjL7gfwMeZVdDTD4",
  "key2": "3UrgvPbTVUQUYn3N4G9miFjZjwJz4AcebdUDT3EbHdWLWecykWvTFQeePqHwKdnh7XqxmTX4LgA4HLkeEFt7PtD9",
  "key3": "3fkmqxzdiD8gqY3cCpN3WwHSr9WUb1ygVWaGiuwbKjdto8jMQHk9b2G94gkgvy661fWdQJFLbxLLe1V3KwKQMC7U",
  "key4": "3eQbrxVm7P7NG5ivmroeUameX4rKzJ6nb3xDMnBm6n6k7CudjnqjRSd13EQZuawWafBtMBMf8hSzG1p1uENnhSsR",
  "key5": "3WAsUNvYF33J2Q5nvj8Pk4tiWgJb14EkA6NrjxBdqyZ3EoTAP2kmcnac5MPeeE8b17dBYR1rQzucZMAjtoiZ9GD",
  "key6": "5mryAnz65dNLxiCkcdVXf6fXi7pbpMrKPtncnoACcK5EonHieVQ5ekZmuQ4rtha7pW4SF1rbES6ngLuTmidRKxoZ",
  "key7": "FN9bZQ2UA9xHw783G9tPttkYZi7tLTbmU7CNrUGEeufdZ4yW9oEMWAMGetzu4Aug1JgsX9mwY6FC5vjxCXdSpyM",
  "key8": "4tTFDX7FPgKHntbBTR91nhFBbxoMXSX7FU9DY8oHSMzjxctxe4miLqBzNZVJjaijW7LPiU5SWHfWDnVNp9w2KCaC",
  "key9": "2sft63as1VDhGv6hbUfGp8SwEr6nJSPAZcLfEqrF7BrJUMPrhaGSAN1niV4bBpVfNETv4QvN93swr9vGVAeSZ67p",
  "key10": "3aALFZiJsTu8WtB4HMcUs42tPHiHzG4aoJndmaAJEqmiqLYaRf3JxBaHdK3QJAxTsTWvQ9LU4SB81vLBBZ6axBwH",
  "key11": "5YrMKSqfLZ94zhR5Xc54b3a7vJW852VuZKtVGGd5oVNaFdem4msHLBaktb5eAkbi6WqHiioFfHGb135RGpGLrY9S",
  "key12": "mGEKnZeaTwjNF5R73YSd31DF5kGfR6dYkRe9GwizJ65yiT4zwrEqpE9JGwuaCb7T5jMttqkx3JFjeMaMpHP8y5k",
  "key13": "3AnJEc36ND7Cd8eH3dhxv44f14rzaC9vvLePrMeZbJ32RTZ9SR3KkakXWWimRX5h6c63z4zPzbZuxhoA1K8u8n15",
  "key14": "5s1X3mEZLk8xcbTjSfYrxcSUr32pyptjmQ8phjwv2H5oGjXxWgxe25fnHrhorVsTeUCkKXFhD8kA5HJy1H7FBuid",
  "key15": "3SB62RmSZBMzXxUR8wd4f2SXKR14i4UkQcfHMiygEzf5FD6W7CaVY2qGKacnn6rPWGrvN4yRzpLHwDiXLbixFnNP",
  "key16": "56jh728JPrwbHMpJZ9zj7ez5JbgAyVNxCFzGNEbBeP4LYoRLcbeCULoJ1UjeTYKkUwBiRRrzvwULjAUkeoSmAeG2",
  "key17": "4a2EWNoFwCMdhfCWsYDutEghua8pZ7E2uvc9KstdK7J63aN9DSJBbVYSzuySrhuWCf7QXkcVU1BgUaCbEMntTQJE",
  "key18": "2ECrLPJnLtMEzXd3uTQiogBPe8bapqma4FopxCdPMXw8k7aTBj4FYv2dSibucjpfuhpThadBJuy5CszTAFwgLDHF",
  "key19": "Rvk9pjQkSQMqoVD83btyPgTPTpt6AWb3zqVVsxkywt4ZBcyEMFLsYtTXQYjXQ624MBqLebDWNgZCJQA1Dup6Asu",
  "key20": "3NBekKwJkMAor6ARvVgowvHrJfHuKmQSFVGsEefHTAPFTw5EkPkeJWdSqK6dqsB7r8hEpNDDHjZdbbpy4tDU4E6t",
  "key21": "5SjTFx2RfMkovrgpLxES86ikttaTVC8cmJ1Ji6imWmbMrqZjGijmSjWmLHXDqWViToWMBS9VmDvLhGgVE1GE7Boi",
  "key22": "4T7zittiPS2gXA5U4Zb9wpHzcHJMJtMNshde3sSzVE7SxZBHLaySqu9Q87SmCui1K31Phc6z1eU7LSkE3g1UiLQs",
  "key23": "1eAs99UjKb4wkKRWvZTMdtG62nTqcEPku3sswEZRDeE5uB7mdsgPuqL9NA3q8s5wDX9rf3EJBUX2us7FrN5X79R",
  "key24": "4yeHibpLno3U7CCJv6bHiRzHVLttbxBvwnfWMVRHkt8PyQattwhidmyd24FtkcPZi8eR1wCV64wwgn33dJUWU47W",
  "key25": "4mzYzzvHsfbUzfrdAPWmF2JUF4ofjg3nhDPVicySdLfodtz2ExoQ4vzhXdMnkFdMtQyRSBwMBWAQ63U7MReZ5k5L",
  "key26": "28gDDU4tkHKm9yGTSrU1S4PKfMRUD6jbGmZPY5r82VFBCcAZvxvGHBhTSy9YmUP4RHCvz8uy4PPKxxTgvfyFQ71g",
  "key27": "311LGBwJJUoj5fZQL9Rm3LWwUuhtAAAzymksVqxCsDMsHLNyqVkZ1SEjfkAwPwqZmDAMMYmoGLbPRY5HS6MqavA4",
  "key28": "496gAZhwxhyQXMvp7GQPBjzQ5fWkNMAMecNZ4t27nesQjg3C9izXFnLdqTXZHq4jUY8LLXyXUG3MegA7MmrV9JZ4",
  "key29": "43Cjbv7aXkUWWWNF5yv4xh6sjJDVTrdp7KzfykiiKJvu5MR1WF5LguJBPfgDV6R5k9D1HYnk6rk6yWnzFxcCcbk6",
  "key30": "52unjFLhjsxUtd81RPxyMQnctnzjSs7n2neXiU7WPjmmorKwgZg1ZPg5VtDZdZkcmEJS17Ptd7pmQL2z9mg3KZNs",
  "key31": "ZTKvodDZVKzTE1WGdARMju52vR9L7khQC1EPhWaAkDZQj9iKvN1zhUpEdghP9BptFfEaLFiHAM3AwYixhwA2uDz",
  "key32": "4vNveaRV6hycFSXqPjJmc1Rpugv9TrSUMeavXrd4k62P6Mx3re6xZHtjo79kuW1EpiUwmxY5mN3ChSQ5SpLgaWd6",
  "key33": "7SYXU7KJtsLYoq3RAXBss4SHyMb1dRKhCeGetfJsNtNNihdU58MHtedyiPbJ3VSxfhmp6aT47wmNYznDYBE5zqc",
  "key34": "3VksY4RWQ3x9NcX8zycKDxSguTBdhYoyYzk37L1cMAJ9uDbwvSKXrUMpYxm1H7pg9vhYKhfSReNmFHN9CVguXuRz",
  "key35": "2U1bvZsf3VmLcJowjBmpC6Yf5jn6t4A6rr9uVzHcSN8BG4FPDhNPhj4nLeqf3bUZFQxR2YvtyZj69eJwbc8q6b5b",
  "key36": "2kG2PZ756TjbkHHPySNvkW9pzCadCir1jpevzJEZktgiaNX46BNgWyXHPUoS1XZ7wzK1hArC4NQY5UEpPuPzwr1F"
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
