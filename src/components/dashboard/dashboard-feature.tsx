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
    "2gZFKZK1RLwXXUqYByQdceHPj7GBXEE5jXcgZHKjcMAZrTrHJwcQRq6a9FwKSKVhnjV5kDBPhND8t3F6bMr693NL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33SRGbFh7byNnnXWoK4sjG2yMBg7aLP6K9wSHj9DPMWwZYV3S6kiu75eJ7VpUWgVEHiU9mi9t14UPzknDzNqJpS",
  "key1": "5sW2Ru41RNSpF5yTstWDMuioQgLbJWeEJstHTciLCAkH1Z6x5nswZymg67VeqWREJRKiiRXuoJ1FRXAaW65FyGoj",
  "key2": "4v86ESsgFWcNZwQDQ1DZNAWeckeNT5CWPX7G4MWpbTjxeRmjof47fChthUKge4ZYqxssYu34qLqKMTeo9AabTNi1",
  "key3": "5eYCAHb5kSSH6kidurq4Z7GvtCiREJYLEdt3gtTZh62QTo7jQnt46AZ4js36YFzJc2vpBzdMCbtby9ar6yMMpBPe",
  "key4": "58mffCsWHeuLnYq2gpXqJzZ33VUCWduarrBiYzYWhS63fwUM8C6Cd6WqprL7xQfDLuFbSGm6bTUrXLyJvDocJvkv",
  "key5": "6a9MSvT1cJfrpMZFGttphsJCFTFeMAViR2t7W241rW5cCGQcQfUW3V1zsEwsKvFY2AnErKNZq9DgUzrcNAjhADz",
  "key6": "5VaoQWGFvpi7SHajQ2mRbRQNnKB4exsESA5BuuTYXGu1dsuUkTaCbSzsAT3e7FJUzTBJVcHqi9J4hoJpvFHq2ESy",
  "key7": "25p15ECxpCLXL7NTjc2tTwqP7YioeGa9Mxf4qsUAYoLdD89532gDF931fTKHPKkmYoy5eBJ9oMjo44vuWu4qd4fW",
  "key8": "3DrJ7KjT2vQt2xK1wjjEQLU3eR1P31hN7U78vgEEDjmcbVUzqNmkodBncJBbBwDdbYEQVDz74GZrBmTZGzeSFt8R",
  "key9": "uwo8mSPFMDyQkqfex3jTaYshgV3AyxUwqMFcWhiMA2wXUQdaSDfhSvn7FmA1x5LqAfcyvutr37rYorLfmxgd8tB",
  "key10": "3qvRa7Q87Tmzor2bxtazehHBAFpip5GPZ8Hhd2E6vpyRjE4HkuoCyhT6PiAtdCigSVD346eYGDzsqc5MFdw6SxXH",
  "key11": "op4WWdrpSfi2sZRuTCpS3z6jgnT5JmoXvxXauBZAfLfmfxThRmSZnwEjJUXoGy4qdRZLbJz9KwddWtiQEGGKSM7",
  "key12": "2sofKBkjsDXh587TEdKMYf1ZdB2LuaHgvLrAaoaFs4PLJTdJ9LwkuZbz6BK3qfjSsXTRzezNq4PmtBS5tdhCiHPX",
  "key13": "5vRUDVCPdLLVyjxeoYxRGJ9rAAiqdKknr8XACjYk2bwMBZzsNUtYyKTje2Wh7uXeWGSrepu97Q9RJnL3a7xnVA3H",
  "key14": "3xWtSxT8BeaDfQeZ2u6JBTiDVvyLjT2qBiZZNtSQqLoQryyZWMTy7LvSMGsWPXRKyFJuy4XsETYGqNRgcF1pCQ7R",
  "key15": "4UcjcBWHH4FStPkF6S3xeDWgUzae1PxqU9zVHPh1dXEPy5tzMh7hgNm8t5rpRsBUsyBXJxt844xMXsjACFgTJTj5",
  "key16": "4Jqa9paHrnadLTBAfHSJRbeC9ZiVtnm9LKGCkEqtnSTq8guqq51CzcdcSMSAJhwGGGvwWwKBkUAiXJv3GZurtbyS",
  "key17": "4AnzYb92Lu1Yr6Q2bU1adwPHhcoDePV1n7MaNd8mPv3tySv6G8uvDmn5HvY5fzMJduBYFnJxC4qaP2Z8Rb4PXmww",
  "key18": "5TT6LDrvTKMEF7agtCaVVw6NPKYFLnR7whuoCnQo9P9ebv4wjsjf8yb4oDWzZGnMLXKE7EVxhRwDLTss7hY3yHVY",
  "key19": "HLmSHmAeu5YUA8ZysjsEFj9sLkBufA6rFqnQm2dEGAzYVDKFbmuqUVM6TE26mDXckhBpXUrWuJLAtnWppkBkuwq",
  "key20": "4obCmqc5YphSwPPeMioJ6epeTcw4noLWptbVqQUZHx3e26DL3MyXswiBSoAxHQJQXTCAMYaLVDgzTgrMp41gT1i6",
  "key21": "3jdat2Cj69NuvNhdfkdVwGTBjfYNNQe7thAS79wV8CBrXtdp62NWYZ25aGDJuFJ7YDwwgzFtmUw4rTekw4LLKfSP",
  "key22": "7PY2kAX3e8cbFHgKfJvTeeTEgg2ibbLad8B9yEj8Su3vaREJbWaCsmymJEf2rjQM1SYE2eZTjsMDa6P614znbkh",
  "key23": "4cipHeFUjJNsG7NGnCkysZ8sajzoHqvAZxYmZrNV2cTHVCfNRnXu5KBENEnTYTG2SNPsLTkzYLqUWkN7NAu5Z1M8",
  "key24": "5ftduxCToenqYihEd11Gf6DpCiqCcYYyBiytEePvpa2bWSpDBmMRQQUdUvpnvPXfJNrifFvukGJzjzSwx4WkqX3m",
  "key25": "5CGFALYKpeQogH8yNHhUtcfzZKQ7UH1my2pUBdEKHjuX7De8imB4ZuqGeqqrUktrqzHveDFG8yPC7qBtVmeP45GH",
  "key26": "2eL8BxQzCRxpJ2VMW2gVQCRTBEbVzwFbitAZfPxHPQmNU3ps3ke3P3YoAxtudYd5pQQ1JBHwdBvqUmFyG3mjkE7L",
  "key27": "4DCoYG9VdtVBCx2MMNnM5mBPDR6Mgrs4gsYUS8u42DuyPL27KHTK7iKp51mF6ZBPoFfgnYkHjM3r3ULga27oT8K2",
  "key28": "5ZRrtT6eGMU8MvDNK6xw81jNm34drv5xmSbAJTrxBgv5nXUV8bHYmaQDbUUqUPAjLT75enKX82f5xFGKYQsLsusv",
  "key29": "5AG2sE3tYNPRnCeLr2Kt8PQMFxw1MiECQdpe3CcHVHMze9cCyuPRfri5jUBH3Rb1jXevJgmVSfN5XtPPQrsnRZEK",
  "key30": "4myD1ow4VHqW2B5v4VNtx8NNYvrLFfnZpLK1hEQPi9ZhBBNUAvwvQvF7VpY3fMYgzZb2D59FYAdjMHCTM3QBm6F2"
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
