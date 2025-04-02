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
    "wXn9jwf5Ze9FSGYkusAw5BrUBZ4J3eovEJV63a1sxscittNX3zqAwdkB47CuswkyvaaXSp2Kx7xW7LT82MAxucN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "v2EatEhH7zXdCDq15tiwAKm4mHAsSKMyyfNXbDsh1HvY4UZuVCrwHNtrrnQxCfmeVJZLZMhs3tbu4ANiJFgV38m",
  "key1": "3KYw1u4jMH73ZGpEF3m8cBcwjahao4oL6QP6AiUg7d7BeymEaNj8YnV9xAWbGN4ALwRMt4z1CqqMm86CXbwoepWD",
  "key2": "5SQWLxt3wZsuUCxta1zzYiTXYexnXMSNUSkhKQeT3DmSJcoznJxqSSDNmN4xeR8ZhA5nWiw171JSumCfDRJaapAp",
  "key3": "4kH1NCw3sZa6nDP5LdyesBZqBuRGyhGEGTnKD4Yw9TdG9k9JfXExQZoD5JUbNtqxvUPckwAtkKJ2StF2KtJMypJ2",
  "key4": "53hC9gQsGJz85EwmpftHE8XmDFwMdEziUtviWu1qNpgTANZZF69AAmxBKZvmCRZyULYEMAZxiZNMjyLfFfnH6dex",
  "key5": "3Kq9R8jwTgnR9HGFd67kTVYW4JHMsufwSXddJMHec2335T5NjX3U6hksFEgF6rY9mPRFEZ7BMQGwBqPjepSK66CR",
  "key6": "3oVxPkxVsvPjFhdVJ3MvvMiEfSg5xiov9JQ8WzuxmprBPQvzHaaH3FjuPyjTKyBgBuCN7B7hirxe3YYuEuVmeTBK",
  "key7": "5qjRJnrZDbRWAjFEK2UguMRzLBuGs3qC1eAggzqUQEhVZm2xeWgSD9W9seo5dg561FCZit5jdPpXxVAZmSTBsTHy",
  "key8": "xibsLKt9jFpKSmDTacPyfExiyKTDLagXKJSpvNPMgg6rMKMWLzh2rHArgHy8rXcnBHvdCci6snH3gomRBiVHYrU",
  "key9": "5g9pmxndKRu5Pg8VuKEY1Y9ceYBKbeRSemooXYNW9jrfCybPT4uSxghQLqxoaY7VgWZpp4HhYR8ZvpvqexiUVzgo",
  "key10": "416oaAKBLbxTdrhT6ifPa9tdquNHfxEiFRN8DHMBjv8CcbBZ4JHgsZctXjLkNikoyDvxszj68edagrEQAMynfbHA",
  "key11": "asfCGX3bxKQTKC6UAf1MJ4aGWvAktPD96Fw6fbP3ESwHdUFf5MxhfADzSqgDUDMuXhe5D3PTMwcf7HqZWoE8knq",
  "key12": "4Kd5baXrqFdu8mh7EX3Za3YmgjFFrztfj1Ht8VnrVCzeL8hArBZuphLZRWtVGH8kKkjzSwf4e8BpqCh4GiLq1zTk",
  "key13": "4VQ2gyRPyFaNyPrwCFrudRhNYpH5FqZD2WmFyGsTMKXoAKQSXi8GotE3hdqZHaU28kDjcHYYCSQwd6x4BXGMenMi",
  "key14": "5c9Gvzd9G5mWAJpiPVTYWDQPRoHXxM88V9Tn5KnzD2aM8DCeyYLf17KXTNkWwnqfFggVCKR9zAXvasdu9WgFAeym",
  "key15": "3PVsSncKTBnoZKjSsKZRbDEJSYsg2DWx65B8uLyahLzW3mvxkNcpFL54wEi167L4mAX8ueEzEVCotCjhvT3syhs5",
  "key16": "4JSqgiyy6C2LRk88Dq4WiyCWyWSi2cd9GeddfTqiRAf3DJKGX9TsrrMa1gSjdvNBc4pTEczYbsUPHC18hiF5QZLF",
  "key17": "426LVkyGT6YGP3zyeDD9CHvifjhtu2iyEozQR5toz8zY1vTDFMGaR3bptGecVZ9uPSQwRD9uqoNvjjkvjgSSVeoy",
  "key18": "2LXKussvujLaaNufonAgeiirfxVQz4PBs4m2Z7T5hgcnEQfNLpyvrwoMuR8sGxd21dkQNr9ypXXyTWdvfVPwumMy",
  "key19": "2hsy1o44dqybicn4FMuZdkeiHgt2iae6BWtPacNZGRfHa4iUbfViKeucFFxr4Ys4CnCEwNEPnAsr2RYKGR98vwRv",
  "key20": "2oGbXuCB14wLgEWjGqD19NunqTm8sHxUVTS8DBcaTVSWZRL4txufWEBmSTm65jnEntJ5v4weHZa3UddivCYbinGB",
  "key21": "5YUAdqzgjBiBkAEbvTewLNdPfSB6pTbPQZ5hPdZiFKx2bKLPu1b3csFVEu8UHeRDELTJbZERtJtooFjp1SvLmYRM",
  "key22": "5wYdyVFWqZJ2GsoQus3s5YVSVfFwm7napPZgh86CNDUbLnuTkMyiZT3jAhyKvRBiSrcjtozbhhKoYq6wSaLaNEHf",
  "key23": "N98w3wYmDEm7HDA8iMimZKDjDmapFyfjyYZDi4Ne6rHrzoZuW4LCRMY9CZ2QtybG9qHaD5BRGzV2JuUiQuoGrrj",
  "key24": "4KEaNMLsn7DD1hRYsH18CaGNRT5VV2KeVFzfEUvVNbPyrxMd4bZZoCuWS9UutYWSbBTfAjzWrqZUJgjb9DcvF5JN",
  "key25": "37293Asg8Kr3j7ZGsfFTCpTTZqXiJhUgzHh1ZYPJiEKTwP7DurEwpsGJTu2GY5FgT2ktugVM9NhEtZmtRcAZCEUy"
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
