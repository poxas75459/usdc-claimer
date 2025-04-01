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
    "3WyYMMcRTzG5bwAEFYuRqDynjZTXBCKGzzvA3i6uMcZ1qkXkPbbNiFNV3gyxPgHVTWZCo3qSfZ4fGLUmF3DncYjL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4h4f4i8ysUMh8m1nfq8ziNFT85yjgfZgny2gvWt9CBi9ghEWKbS9HykLFeYYejS5tyuJtvxL3TWuzfycjo1AFAYX",
  "key1": "3RNuRWHdEoPjYjDT1QddS3gB13RvA9bF1UksHtx5ZJcycZ4g4bHDwSv4TVneEq2ZaLYk2TaCgFSGJxixaqSpYja5",
  "key2": "5XLRLGwDPJz11rCa6kJpA5KYsFNHcg5zcirPBBUm1htpYv2GJfjtMxEPXXdu8N2xT3GbmQjfQuBKMGzgvKv4aLYQ",
  "key3": "56ygfu7e58rGB419YMLnhyGDxzvJZxMM15TTtjHjdtDP5YkDZDrqGt64N7cRNG2uZHcqzizeJU8AoEwJaJHFDNrY",
  "key4": "3tm7aQCzwuteDFzdUQjem5Rp7fhCKWhsqWMeUjLJUUWGdiDKepj9WJTu5ADjxjWxfmShXo9uWhwZGP6nRFQeQHaj",
  "key5": "5jy2MwsSNagFKADU222JUm6dFiZ5tNWGYxX69m5ycbsFsyYATyjzZT72xnLMUCzNueoVJfDPJEv7GkNP3FufzAj2",
  "key6": "4MrkWHHFAdjwA5ghEhz32w86bveYUabt27RRzmpHji6xeGnm1hr6hPtmLMKniT7CcGAsV11yKPPuGfGqP2gJjURe",
  "key7": "FyCtLGxDRyvrXN2nDsBVTkyqUuj5oSwXQKkRgBs1piL9oEZskTeJWjJugx4TowrKVx5BQL1KzpEfcezVXgQ4qJ3",
  "key8": "5BLCvaH7fEphu8hhmE1bKWPdkUBfFAJYATbrARxFkSSPoBwcDMYh7AVcwvvXxh8vJqHgcFx3reVnDmnWPt8m6RcH",
  "key9": "5epx7EhfzmWvV76kYeQrMjkxQjtyYQ9sg2FzFF2nzmBDyguAAY2JDfGRaMeiZEfM9EyuhXNwzLxSWUEVtKwoD7Pr",
  "key10": "32cmLxTfJCCs7WLKJCbGS4f3pziwgRToDKN6G9UemsR7hjMvA1mrrV5CU8TU3urhwyBVDfT9rPAmLk17fBE3VHdV",
  "key11": "5LJqHQi1ZvJZtgWkCnLCZV3f3XfuJiPcveTqLd2M4iY51qcPuz3yMK5DMr297y7HT6V8EQQNi9A9Sa7zrtgVLWZf",
  "key12": "3H63jY6XSHFsaUnksNATz3ybuD1NeFSNf1Hgush7Lvu3dUn3GxkeeLwMAG26Gm9SRHDoNy1UvD8FwVjdDHCeQ9iS",
  "key13": "3nAapq5ThBTQLAAJrF8qbQiiAuQ1xshBAeZX9T8TWbe33Z1BZrokgBEcJEG2nXiRb5tnPYGdnpR2wRHhj9kihrVc",
  "key14": "26vvAR2QvzjW2nVm5hoEHYmaQiYqKzHMBrttkHxwj5iikJZ3ncxGteEaoKwnmoC2vykmk1qaZEtFVSgZg6czrVef",
  "key15": "HA5QJh7c5fqneZ3HhoYhyDhEWf5sqtdHFSfs5q1fF5Urf2hiLihRMVpfm8BTVHBEB3p3RBUGf8DPFFHDdaGesWn",
  "key16": "5ipkaPFjv2fgw69KxnApCCYEbad94MtnmjTFS2e4BqrPzTtEWyNiBC6BPKcdvMQpMeGbZ5kAC8ENBkYZARvAdYfy",
  "key17": "41r3wdV98S6ZiGr5nHLiuXx8AgEjdD8U1UN4VYrNjFbw2KTLTXFr4XqfPoWv5reReUHuJJy54sqXnPz9TsBRsCf6",
  "key18": "3Sc78VatiPB4yLr77CJeRhN2E9jn4JxFH7hJsAcu18UAYhywYVkKnnrwif2AoWG77qZiJMJvQdexkFux1TbyG2mV",
  "key19": "jvSxpDqTka3J8SNqUYFwwMPYGBR8McUYQFcsAjxxCRC1sjxT3LiJig13M1XxG3v5hnze7tGTnCY7yki4F7UUJ9d",
  "key20": "ZSrftzZzXSJ4VUbAwGu9UJzR64vwVCsQXx4cbTTJ7N8zn5KNJzB22h8M8uC74qzs435zrPTwjENjy1Mg6u6oYXZ",
  "key21": "5JdhesUSmKY886F7BqKJ7cpmpDR1m4dgXvqMnwdztzwMg6BzBNYzfcH4ZENwfDw3aKb6ATHYayDTLSdP7vVCFEsc",
  "key22": "3H11zPHaUQNWHWa6tWurtaYDkkHGoawJKpYEoMbNuEbDntVBMY1ZgSuHGBqAMkKcyQrrPeXidHXpQWDpKSQ9SY4N",
  "key23": "5b65JaMV8BTeV4UEpj4ETyi8VwEw54tRoq4pz3h9Ux3HEZUMxHGYRKvZ59eTWHBFhBHntoLnJw6c3QMvbfq9RQk8",
  "key24": "5S3aH52L59umGRH2bKFcqqespnbBaAbWWsaKWYq1kt82k6cP2aPjLE7WNYqWrC33khXishRy5uhUbF8M9muLzuJA",
  "key25": "4k9Br61GwcejxwF6Uj42n8BdgPgBj1sPFfF3Q1dr7N9aqvtnPQf8Se43qfdgtdqWqkxwKzToyCJoe48LiFZFDh7R",
  "key26": "2sqURsSHwXsodtSnHsmWybAc38HVvPChJvo9fy2q6mr8P6bxnQLji7hzPDtZwbuMEot427PREMZRBbyx8oPL7awM",
  "key27": "5R9HFDPdoTQCTxUq8Q3T91QNSwguV7SznuxvoQfTZ5D5FQGVsRbXw7LBTEkPBp6nLDhF8y6yuLxNybNGPQoobV15",
  "key28": "GyX7MTknvvibaP9DddjRSv76gZGVYXsaMapiimrHvvjt1QywMnAsHmGVsQQRU3XE7CDkYEFi3kbaVWBg99sf6cA",
  "key29": "2iGrxxCMfbkjEnoTTkkhhfeSoAwDLss3CfcAjdbsBrvbuUBvMhVccT6cdXP7FgHpuUzgYDoWwozTk9VnZNDeftE",
  "key30": "3qfeKoyEaeFcZGZXdH5NNpJjPrpe1JY8UiquFAJrSroFBvpamxytZdJCtQz9wBHYjKsh4C1FwCUgXXmZJCbt1AA",
  "key31": "5MatRtGeXWgJKiKCP37NQ3PT5osE5YPatRC9s1zyrjuKgTTKiYqkeHr873Xi2LDjZhgq639rpMt8KF5BrDypUpCo",
  "key32": "2BzRcrvSzxHxTTbk3tmFuVeQfKFL9QkYrDB3qSA259d3yZkz85Vuc6oUArKJE9L2EU4CKCokCuXcgVn4ywNBWpZ1",
  "key33": "2NzSpx6QVbm7YHceARnbVMdjwu8nBD2EM2ReiaiRN247v3St2ndTezr16E9nAukWFLTEH4R8XhU2ri3YGy9T4Qtb",
  "key34": "66J72h9xjJFE9h8vtQqaBdzv52we716YgoPshY46tSXY61VhKfThGgjRBJTJwW65xRsYqiQx5nEheRXcfEXzUKzH",
  "key35": "2q8n55vTDFJ5oLZfDEVu2cB8Z7GxT3RigoZx1zn3YRSPsPK9GUdM5x82i95JrsupDvVsvrwd2powxEAaqF81M3oi",
  "key36": "22YPBeMskbMR8dCnraDt9mHZNusQK7iPTDFHR2b3DyyTUabyxo4KHjFpHs44pErwhKBrzKQmadvSjM95RifuCSsK",
  "key37": "437y5s7HZbVm1p4G77k2mNkgPcJWFhbxMxVD8VQnhnGTyjAwHBv2heKjGPbAqoQbxr35D3PJH1oidp97eGqtFs9v",
  "key38": "3whXnyJyZ8WFstWMG5udzNkePPNMxAVg88rTR7V6ynukC1H7k1fcKiHV9rbx9w2affB1BQWnP1FkQEaSLumzGC2"
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
