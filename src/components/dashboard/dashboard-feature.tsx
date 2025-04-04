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
    "3i5yqEoTHvqcMdVuiciYgaob9Wugeq54GPhAwP7NHMgHtEpRJRjtZWFPyJggkYHMkQU9Jp2kpPbHsMDPYCaDzMYF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "828E7Lxpqm3wBk5NHuP6b36HPSVyVDVg4Q1ZW4B1ammobC8Q5546n9HJpQ1KSMhvJcVRzWzrGayfLsueVY294LV",
  "key1": "3F3zgFrwsFkBATvwNZZWvR7LQYD7BwzrhmmU1u4wuNU3bJW7HFsJjtJELbEueX8kKb4Gu8caUz1Qw3T7zrzzU7CQ",
  "key2": "2U8FN2WUnenVRHN9CXHQuE7LgHQq7qzo8YMxrZD5Ze4LLgwcTVcTD9rsZ9THZGxa9QfpEMk2v2v7bKHQCBS6H7CJ",
  "key3": "5GvDYRH9c2p85pJXXGcpnW4bTSXYBMK7QXqHcLWH4PNEELt6uXLDLrff6dTK4RiYWjA3y7719M84njhaVpgVfBeu",
  "key4": "o4yWRG3y5gkfhcWxcX6gJdyjipUuBb76juj58CrzMmBK5EtsrEZwU8ziS9vXR4crKHHgMdc2T2drN1NM5FU4EsS",
  "key5": "3y4E4Fnpkz9LNECVq8Uo4eUZcBkLfkaheT8FD9Qv2UgWxDxAznF78EGzTrgkftt9gHq67QfSiuwoA29ZFyAaFG9P",
  "key6": "26jpCyLoHbRSRUQ4WLKqmfz38rYe6dPcRmcTBEGNLHtzcDjaRG6MCoaYvVpGHBoDtVbmjvGDrHBK3acppziELnMm",
  "key7": "Qqr97nwtFBoBzyUkSvw13Vso6mneDUzzyGvpJDXjqmfqTcPPNTbWoKVLPJXijQHfjacAKJMpni3EBdNiUu9CuwH",
  "key8": "4cK6e5pRw6fNAB4Sfonpjtm3haBGqFbS9szpQaAFzax3gFPzSb2UzL4LiCy4TFHko9oHodAoFJyWoYhCg6BSiyZU",
  "key9": "5Jv7iZXzmMoN17xEqcuynn9jSCB43UHYqBBJQz1kA1CHarrmiHnR44gTx4Hsuz3YyqyDoaeBE227ZTgEJ2G9cvPp",
  "key10": "4SNNTJeBdRgWMs2BSfmdSG3oUt8HaSW5gASBxKdxcQWqwb1NFraQPmxbupSENnHhScUZSS18e3DdrDn7Zi1vCnDs",
  "key11": "3RrroubnxpJAo6UNitPpSFSUnxUCFZ4UDFe6FodxGCbEnWib7BpdpWd5JS9BjZagKFFu9t9Xye4Afv75dqYpZgdM",
  "key12": "33LjJwvCqXf5Hpxmj1JSUpdRVGkCKxB7SCyLzoAtpRNv8DZFisJsAYp1g7Fhq55VsPpvB5XG5H7SL5ajcXWN3WVV",
  "key13": "38ZkCpWwHDHxXKcmoWdPnGvbiUi6doSrWhY3vjVvPcLSRgPqo3SdbGrrv7dp4nwnMeUZYGW9k79X7RuvjXEaDjnu",
  "key14": "2dCiEPuW7QC128cdukE5EteNFzJoGX197UgxpCD1PT9CEsJ5CVfmjEDYbnUuUXrYyhhqxPP9XQjm3QHoe29x72gU",
  "key15": "4fKishLbhVxoY4euyrA8FZhF9JwWdNukEbdBydq9pVt8JE3hWw86Ecow83R1dTrk5oKD9R3AHH9KpXFokjhsAaDg",
  "key16": "2phEdLSCayxcRJCTQgZjadqYkb3xRpnTe1gfaGctHwZYzQ9AtSh4kATnvxEbHvBn9fXiHKwVTuE113GfxL4sgfkN",
  "key17": "5VXcdgWAZCKviB9W1tDK1sCr8xerMQr6qN1yRA5A9nwvKLEExLJx2d4pt8ihkx9NPkHXA5yDuss9jrmg3fsu6cNF",
  "key18": "3L1VtDAgmvxuoFGWRG5VbW3bXoywEeyfnJbZ5JgpQk46UYNGw8BwZwWBzf6JozFnnRjux6XfpYo3Eb7bEPNfoGV1",
  "key19": "2VFMeYApMVkssYmTZd3Yb1wxPFfdCfXxZw9ZBXxn4c9piXTDUwnEdwCdsAFNN3w3hUb685pKyM6rBpmtfyuHDD1u",
  "key20": "35KtU3yfnom6qYRqbZH8AmfPdq8UiwLAjdzkwXAa85x8fytwFdQnpowKvusjqnXfWHvsiPDxKkFm1FQ13s8GDrBv",
  "key21": "3FaBniZcvEQUzSmPtBzjqx1a4SDiMSPsdTvFKPAxjSAJ8yf4TDieqrtPSRLt22Vkc1cb2gLgZH3HpB8FTMBF638s",
  "key22": "5trMNWiF5toC3XFZsTZE2HrhmPjcW4w7eVU7D7raqjvHhT24mm15DrP7tivdoxD2tE85S6FCHxRCeF5iWwSX43La",
  "key23": "2WrdQ4N1V33wxFbaHHphpF2KiCcf8VkEM5mi9qtU4UAXMX3L5ryGXmjrozXja5t54mRWgekErQq2fxi8yFAYxNok",
  "key24": "316kmnrcFeEfnvgW3JVD2qUMWQMSRofFMpXF7gfURWHCyVkMzGt53zqWRPf3pNgKqk6duWavwbb3Yc8ZxKQPfATv",
  "key25": "zgnFer5wFNMk7MW2t48nGDF4Z14CbNUj9svkUt3YgEkXfdeePNKKupgMRMvqauh9cijAna6f12hA8Ciq127aND7",
  "key26": "2iyqmaYDKYZxE8y3fsXrvVp7J3U87ihyPSkQA2UuT7zUsermbEoocFuXqNC4reZvY9z4cbdBeQirmE2v4eHGXbmo",
  "key27": "584eDKT121hAu6ZDW19JhtkKmin7iiHqYd26jwryEhRjuJwotQDqihUhb8fgjmATKWEu5cYAPv2nHiGFjXhjJpgy",
  "key28": "2Hbiz6XTJMJiCXfjcJPvGAMXrRtcdqdHk4yHsVGSq8WdoqyuPpp8cr5HUmpaWyKpQVYaeb8TByvoiMEhBMh1qfwk",
  "key29": "4K2bMvCjUkF3784hSxWWqaXdStETTeHXUGvcM5JALRvhKvEa8NsLeMivRpnLHyjFGEgLJWHY34zmmVLTKQ9ckrWp",
  "key30": "2b3VaZgZKfurWA8pMyK9wQUnr5vAAZbkWVTrD58jg1UWzSF2UqNgKuMuDjFNtGJDJjyXgtex58yUFxxjLvEs6JeL",
  "key31": "29gSaLsUe8DN1LuqYRXEysoYJy4LUS6Nw5VFPfJ7JDBfzhnxtjDorb1f6anpi4FzCk4cfQ69rV91R4Wd1wwkBnWV",
  "key32": "2gfsdF4Ht6EXNyYftJRFMPUmzi3qwWq8xJ93XiSWk2ZKsx2p3sMa8JFuZZnZeHm6gLhqTHbkWe1EQ1DriTgFQuYy",
  "key33": "21yRL4A8akq5peP1Bg73BpdgQqBVpEwWTrRsjSUxhWyHsrN11ZyuSzJzmdfLafyZzWK3rcUcpqL9osptcbzWHtHS",
  "key34": "5MRsisN2fhJujXT5dzF8KUMJLtXdV4rtSvkZSvtnAbVJ24BqDjNuhTJ2txZYeQeu1sAH1oeQ8Cwiexx3fW1cteCe"
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
