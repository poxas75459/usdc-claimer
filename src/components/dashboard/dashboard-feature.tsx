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
    "9wfqfTJ6UbLYmZnYg3JswN4tBsevPEK7iPFiMdMovUVtCCNJxH6r1KpinfUHzP71ZubZCDoUqN2P5FaPNQ7TYN8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qgmXCVZQ8tokkteUjsvAcQo35oGLKdF9njVWyg1PcwdfTheqP1yyJnuHF2YSmqHqS4hLdfzRJ79LMrvMdUCrBfH",
  "key1": "4B6TKZYaipe2t9XPyb9UGAY4PJmJc2Nz9x54sGgZvTex2VqxGVSnnBNZvYksQXLS9gt2pu53F2EeZyPwPRNaBUN1",
  "key2": "2EB9ju33gtjQt9aXbtXVkM7sLt551Dr3ZFURD6JV2VhuykGnSZbvV2y3be1QtQq1hfZXhmd7SD8tAexk4mxUZZhh",
  "key3": "JLxV7gGAk9xzaTvb9HCZ2jdxH6tgwghL9M67jgk6g7e153JAFn5eutpRR5NgkqTTWSwJATZ57nnfyhz4GYdSkH9",
  "key4": "3o5B4j9M1qDpgwGSrh38uDrmxUf23KFR7GCo6iTq6SALLL9GLTV5yQJHEwQYCEccnzVenriPKXvDGr6fzeNDBbCq",
  "key5": "4NCdeQMns8uZaY4PCkAopngDYjHwx4tr2HmGycpHF7Mj8PpQ4C7bKf38xQHs4MBcQCvPsxdGxHWeEGaohaxVHhrp",
  "key6": "JTydwy2ZM6Gio2nS1fmZF5EiJCTagEbaSfwxrFWfn7pnywMtPpcvhKKDYvknWPJpsjsrNXKxEZGsqkE1FEtwa6g",
  "key7": "5fXXKosBPW5c6dwEYtpaf6Q6jMGkNor2jHbWkBrJLoYm9w6DimZyfCoCLGyTPM7Z41Bhha9a84pyRRaj1C2nQFCg",
  "key8": "JE2CLFUf4vf3B2pyvLvseU1rX1Ui1nJBKdb7Qj7bgjQC72i45i38PFbEKAhwMa56DcdghNUHUnUUr5uk4vkxhwG",
  "key9": "4VSenjwRu7e7hQAdHU39KjTE2eFVuRKxfpVcb2TiK2jBNXKf554wsKbgyCSvVBftFx2bSyWsN2DR15p58tivzU3v",
  "key10": "33CBZqKeew7mcDwRAvdTzAJF5F6argtFuVb8LTRnmAfinguQ6T2NF7RkYjozTKmBtReWHU9gQy5b5LTdstMW1HkZ",
  "key11": "gsBE3iUSFFEFFnJyaSrvbwtAEoAQzndmjg2xUZRb7Zc2dQnWiei2V4no4hmt8k6s7SR3nqveUqm7H2hCn6XN8EM",
  "key12": "3qnbV7TqDDLVDbfGUsQrUo7kcGJHvoVUJmR35DqMpRZV374688QWpAS739xQ4JcpskpBFqRAmuzJFAvjw2RcwuxH",
  "key13": "3HGaECC4mPkEeSxZvHCnJdjP7pvNUJjKK8FbVMTRHsHafGzN83Hxy3xtkaT76hsVigwYCyFiJL9SGLpwUG1gDSWm",
  "key14": "4ZzYtMpxjHqVGXnXMre2jyVsqxECxALsvdZyDd78ZS3ktYnexzW3EvRJ6unAtmQA1KnS1piAr91b5ZzrVt3cW9RF",
  "key15": "5pEp1AtfW4L8g58REKHruY819Y3HPRSMVGd9hHf6WCWrW5VfouEWKp7rxASr2ME8VFnRZiiEwD6iSqZFQWbe3XXF",
  "key16": "4fkDZ7rRWzwfYsGpmxrUKh3rLPVK8WjSjTP6koojV5b1RkWC1RkyEbeQ73oA3ZyZrDyygYdrzGGWCC4ZTwbhQtxp",
  "key17": "41eQmAmSXDvmcao8qVGNaXoaqF2xJ6cYxpN8xhoBSMWaBYPK7Jch58zRLwukD68wWnk999Ec5HTp8YhwnjVh5cJM",
  "key18": "3htKG89FzChf1MqNHkf3fh3peihYksyRWagK9W55xQyZUTFhonFcA5zH3oFyxHnP8qM9oYSTVB3XWzFvKoFHsHEE",
  "key19": "VDoJW5ns1UiUg1TdRyx6qFxiULWoBXo2MukBx71CJU8vsUHAsKEWPsd9cXoESV2gnPEwvpDVDcGGX6bHcZ139xk",
  "key20": "61DLrDYHsJcCc6UNjtx3vW6mU8HNqHeiNGKSjgUzMQNAqy8wkZAibXwH9X55ZrdVksFBfok7BLaXyCpnnytniPUW",
  "key21": "3tzJL4cjbJX4fpvgxTmTi45HwQUyUDzdGeu5z6hywxLK1N5W9jHd3xMB6E53KKKtzDnoXsLf7TzfBsDDVfwmQKsx",
  "key22": "5Q4VSWgYnD2LuyWBEMWMgfx9hoekwowXxGd7snS4s7zZn3J3xa5GuwYMhYdFHgZDBiYKrdQ2SFJGmLSinZHes64R",
  "key23": "4pRDS2p6xfz8ZwWkYvPvhBgjtZiXdkWs2hzo6yFCo4KpKYDRShqqmTFZTqtQKdkJmjNoVM9xDnsr9kFE69VaG43g",
  "key24": "2fohThRJDMgQVRngARX4RUJ2i6qDg7QdDp1gErH3v2S5mevZeJCCTZhJ3LJ9ZTnc7kdChmjuXtsKwZSRTimFhcxi",
  "key25": "3EQmwyWTtojMiRE1aV8Qe5WtjxWVXJ7ivzecyEEL3jcD9eRLnxPQTRPmBnvDMZi22aXVkDr7Hg7q3hc7hMLBewtA",
  "key26": "58CmspWtPgHCUZsY2KSdW1tTP8vTv64WjtgKDxQCH6gPsCJqWirMeyPWzS1CT5k6t7t8e2zEYjBbD594zqEhp9Ro",
  "key27": "4Wk8ZnGw4dk1QTJFiWGv7bFS4Pd7aUt6UCJZCnXfSzEaujrsmdz941ZNzVDw93KnAmZT7bgZPoeR9GWQeYroAsiy",
  "key28": "4oNSWzLNychX1vLuhrxCUHYYp7ykMGdcBFEaPr38RyAWDM4xjQN7uz9NWHAjBibMjdJEHPrg2iKyoy7MxpjyY1pz",
  "key29": "542s4aVjxiiJ9aCpwKYNx2wTUdMkpbcXu2Dyw6NVMZUixU4yrvFSmXq4iCEmMk9JqZ6Bx9gnjYSvCEs8GynfKsHr",
  "key30": "62mB7xhXReXiecWEaBEiMAiC3FWAoM4q8tkWd1cHrdv37cTtSbkYkXycL8rM4EZpB9LA9WyEVWuei5AwJNJLywUz"
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
