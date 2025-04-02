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
    "428VpwqrRSL5cmMaPzGU27GuCshCnGKsApnefvCzLmvqMLyaXVtHtePK9qCfcU2CSrf6wgTWXmQenmNF5hKLyjd6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WMHAcQth7jSczDLkBkKi5f93Jv6QkuYwk9f5QYBjXyfuzqSP9cFRqNmQtWwz5dv9e3ucEYrT8XjP9RLKX9jMXd",
  "key1": "4qKnrHskAkhLZao4TDLnqNVCT8F2D1TEhQuEun6ZYirwm1pAdGZfcTwMwgWdHvpbZRb1UuZPrNCwFAt1jE9KjBR4",
  "key2": "4svCWyQgeodrNJ8HPxcsrtDgfaWfksMaY5mee5K16dDo25ajAhpYUQ5TtbbWxh3gLUAhzREQeLs6zopftLH2A6sz",
  "key3": "4aaA1DqGW76wC2e5CiM7wocpCf9627dimjji1zjfhYcWr4B2sM3FC72GycsNwtHjaqsufHwh1EdNm8USgHDD3xm8",
  "key4": "2mf3a7nuv4h9JBwxGJ6mK7s4jToh3JTpPHhwwCWUmtBWsHBJCAb2XrfhdLtDrFN4QS47Mpn4fKhRTK7qJEt6AMi5",
  "key5": "2CCdTYrAdpGeH8HkRBznnU18174opgY3ubojvUmxuXBDUR7ezSQfLTC94TmRQ6osSuX2CQorriEHmPRsxSTVZtcU",
  "key6": "2EMRuFiB12vorjT1XJ5UNZPd1KrQp4YYhiKZTTroysd6DyE5NL4QVxAQoRta3TJeU8s1NVtTqJshRZrHYzD9S5SM",
  "key7": "5bkMkJ78eXWFvvKvBq4RydGQKAye2zFASsGCmBt38Laj8kWPvixo6odbxeM8S7uePjybW9QsmEvaaUJnQq4QbQ99",
  "key8": "q1TtQJbo51NDcEYteKbosYFzUCLggWUgkANfksKYxxgGUoeA7W3YoPSC2sAqvjqLT1ipbp5ErLY7sRYcxHtuCw6",
  "key9": "5o4roe7A3vUJHgtfzJr1dzTEUEimRR4GtJPsuTVRkcxUdM7G7rQsb2VngQwwKtGAEkWd5Hbj3M9owjea79qZ2DeZ",
  "key10": "4jbNYog9x31eXBNwajaxWvwCQsp3MJXY7bP3fYUDwVPh5kPAAH3es65jEVvpzjUEJXgfpQp5W3Egepf9DQUUeK5k",
  "key11": "pWqdvdNvoDjD5hZTqkkZWXeqVwgJNc2KAWWQYERTGfNfLXQukVRnu7P128ffkHQPBuMDTmeWXEonqeZL49NHwdD",
  "key12": "vBfTB5wGTytyHz8KgV1iALnMYqDVhHFLSFWGP6Hr8NB8BaXKikVmPo8Mf336gU1xt5oiShFaQiFMDq22UQeJLRu",
  "key13": "3rFtBLuZzWbNmzRMaEXW8dJamvNezKcsvrQ7z16zenXiCuqfZQUinxHrbAvMg1g2G2dSYwwkHCm4sjskbw31rCXJ",
  "key14": "y8PrcXQb24L84fiqrpmLLpHe3uzArxHnCwMudomW5AuPc3EFT3JSYDHuBZGsTehpoMWjKRfreJC1ThjqT8D7R5d",
  "key15": "R3TNJ1md1oMxBHWqTUeJrkSXyfkccHoDq8GNCU5EynURWmtZYHrxcdx2b5hxcAqkg1QWWdQimjSJRDeTnCxkTgb",
  "key16": "4xYmoojvMLppFA4V7GZhuG2xYVKsJQXdzZfKxVLzWwNEext4KGxebvAaoZCBLkssJZGznypZrkzQNUpQ3GPAqpDy",
  "key17": "5W2n5sdERbctpB6z8YSnr6YHGb4XivYaSXMLDJHgdS3QPGxKTXnDT2XG4fupkRdmgrVFSNgsGmJftThM8B9bT8oZ",
  "key18": "2tj65fGSh5yRCCMU1vJHXr17TqThW9SdRt2i1aZD8qMP9wy7H2NfPTyqkWNCzeP1yvtMScevVhpiZfWLYFY4LdK7",
  "key19": "zNtG9VJPKhYhciiA4sbhznkn5az5SgBnTmFwfwh5mTGbaBDqSfb5fZK8XMkycQmPpvgaxhWrEQhQ6yRA3BdFJ4d",
  "key20": "n7fdERWBj2opefdWpzCsorneNE6FpUUie8QY9fqM6jjKDXyJJAs3iEtW5mP8VJJGJuP2HCcRyDJhsV9fKWEQ9zL",
  "key21": "KtRSGncZiTQJDL9e82Wj17XupNU8FRfW48apdtoqD9qsfxKrZLc5pCGf8g1evrz8uUgrS5BNkbMw8hPX28LeQuQ",
  "key22": "4hAWSdYtfN1wc9aWfT3ZTpcNwpGvHvetDBsvpD7nmdockzf5AbSd1MTfioWAL28ge5fcsDtDnodDsSzgWzCTu1Su",
  "key23": "3T7ekUHz5PVgLtwq1zSEvENFQYsSKCiYNoA53HqKPSYcyXtAFyCo25q8XeyFxytw8QyrRh6e3dFyjNdGsYFai4jQ",
  "key24": "4bBtDhkjM21HBnJ7DZtXMN3cP37N2MfdYB8yGGK9FfrpVDjrBes6RVtp7HXwbYacB45AkpzhfGcDE581Sr5vLnpj",
  "key25": "5D4wob1tyt5RLmr8nUWAXFPDYgmJoqAeC1QXMseAyvLSj2Z856YwMCZ7UuNuCdMzdnyTJDpg5QH24RcPKhcmrnpx",
  "key26": "37qVLhksUA2qKQUepnSkkViQo53Rgqt5NkCUCqjCWRnMLeoeS1pheuU2rp3ydv1nBhtoP9ZTQpWnD2ga4rdRjUu",
  "key27": "2MSRXK49naPjhHaZrtxmmNH8eb1RbHtuhyjRbQesoPP77LpEEbnWbC69KbQ5Qt5LN17uYvGEtSyvXk9LspcwunbD",
  "key28": "5RndnP2VuYciKVkfGpyz542AobU1WMA7WFZttHmYvnbekyGW3y1vrrg6SD54nia9PvbrrgbmV8R5tJaAFrMdwN7e",
  "key29": "2bSJJiDo4ygAXys1eYouCdeEVyx6VmJdYTL1JKgy3wHxpsDXSkeBqEH2EAbm3eFo9bUVj6zg1TqaBu7Y7Z7Gp8DW",
  "key30": "5bMLPcvL8FTkiMye6ANdKMUDgd186Xgde55VBhxLXPFBmK9TzPGsP1iJiVJmm4xRBiJRpdaVsEiuidK66Fv2JaHH",
  "key31": "5BLShffGYKm5iRHDi6JVX8VAeBrjVZtkSqELs9RkjpNbHvheBW9AiTePxwhoKE3cMSJFFQYM4DAuvbCYAB7Ei3AS",
  "key32": "4t3ihDB8vHeaxbUpeezqGhFr1Lbf6a65s7WwqFvENGfh7bBKD3s1LF9p7KPdYCTzUnDyHDBejbQaaGvWdgokdTsU",
  "key33": "58BYjGibbeTxTcu3HnH9dPBi9Ezgmv78aU8EjXYpA69oogQ5kLyo98CKYrfE6bxBsFBMSKVvQKoxpjVM2cQcCqz7",
  "key34": "VeWsWr44iMYhH3zzjMrUkX67698Bnereva8WXKHX9uDGgDbwZQ3NpkCnkpwM5VoF4K5nkxLbAXCzn3awxX4wnPb",
  "key35": "4xbxwxgBZWofTc25y735bWqJUX8CHfHT52YF6PHpjsCDPdrZJ2QpTQHc3JVr64ZNr2K7yUuNZNfsQyQjP4aMKUr7",
  "key36": "3kQmKpM96UTqA3xtcRwDvmQarHhUbkvZXQjV6qA2hXupUh7YjqXKwn8xCXyd9Y6VFHnMyW2AEg1jJAwbaMTAsd6r",
  "key37": "4q9syRszzugE7zwpqmPXKkNuBffbWjTt4tZDjZ7CDb9KweUHBVVaM4u3tJ3uHbwooKZZDc8mUekVY6vpk7Pvt6Mi",
  "key38": "2j8DwhjREEK7feWAbpipq3x7pgwzBzKVfWbth975pRCLaFfBhbr9sgEnieBo1RpDjTJKxwa1w6argCjYjdUfCdtS",
  "key39": "2nRYEyW3rb7hBAt7oFQ1oR9BA4Ypt35BqU3bwHxD47EvjMptagug7zYoLzQcbQrNAabKhkTnVvyrhnw8qqpuH1w9",
  "key40": "kk5fVP7JE88a7oMYrdm6jwzCeWv3ifjfUsWeSBkjouuwWPU1SEEV5Kj6dsjBi2byCi8ksQaK85K6xQDwBLEwGSV"
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
