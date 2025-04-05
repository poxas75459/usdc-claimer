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
    "5mocc3gA2aSHo7WPxsvFNkMkK5aFJCrLeE7LVk8352crazj9HpZjxG6WLT2Jq3uZK9DkiXfdTn9kzvtbiYZkXSi7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41qh8RC2x541T3qvN2zqd9nz27MvMcHUZtWMgjEz4pjqGJERqQfPFergAajsPC477hqSbbZicb6iGqL8EmFiMrXL",
  "key1": "4cPQWD2Kf4NDTfzAkv5hxqWSKJAJd5yTiTYpeFGUmZAENHVnG1SresDxf69XA1hXrfZrSMZfPXxkDdiBo6GfthoH",
  "key2": "3yTNZ6kt4ZnFuF1278vj88mDHSQuND46Y99QnXfNe1gtobk25fLfgeumXhvSDfMvLSYwGXUtukxDSHFUCHpqQiz5",
  "key3": "3c6aZ88JEqwiLxvU8Wukf8qXEbPSGHHkhN1zjgSFk4AaRJYTg7e955MULYu9KrqroSjeufDAHuZp9nhL5BGDT7k9",
  "key4": "5AsnbadnByssw9gYTuZyYTj5GGRTzzaLx1TGmiJjw4gfcJbh8Q6eotzcZk6gKpkUfatwwxVx7ZnHMgCFFJ4nLmHg",
  "key5": "4k1miNZVSPv9455gAeYDahKXdKM1kdeqHUF92nVnq3Qfbnj4n6kRiUD92KVodPQ8PBoNkGLjX1FWaqpUcwdW4asV",
  "key6": "8kJBTRkQcFZYAeobgQmsVEqymBBbfUdXA72TsU5PEBGe4P1H9wSHX1m1NgYmiZaa2w1QZBfMj3vx1qhJqB2SB2c",
  "key7": "28yLQbCDcSkJ23fgCU98Bns4ivYWpyNeHStDWhFE3H8RKyaqapa9sVaspizYo3UaQ3TWaxMApNdjJFJ85VbuxGDN",
  "key8": "5RWwSotR28j8xJjVWEDuhnrG2u6Dcv3XxEs91xPRLBQRcXeoKnYGdUMXs4tJUFaQgu5MLoZf8fx2WvkKZ2XZKuqB",
  "key9": "5wH36AYycCBMizdDhmviRX1eSsYXAcBdGyvEYYpnws33PDhqaQQgqH61jMSRncDAi9M9sASmMf2BNuucdfww3yp3",
  "key10": "3qQUWDwbUpvqAp464H3X2q332DSgFTHm81fn2Kz8AiTVYAJWjrHbhrxLDNTLTE8gFywntSZQHR4gS4ff8gmFboYo",
  "key11": "4Y5kLB41qzKu3YpaAhEFhSQoLNxsGbQu8mJMqPnXLEsfSNANvSP8YUfxF9nMsUMR1t77f3vuHPuYECXYd8PqS4bD",
  "key12": "2NZiehMfrbp2nwNx2SWv875A97KW9uKkQWzVPbjcF8D4cPxmSg79uA2t6RPsb7nL5u2Hn7esqyWaph7s6NmJ9QBJ",
  "key13": "4ikRZJ6YEsJye77GrssTvxCjyoWiPFxWnLx2GEiavQxGFQAGsBQdftJxHTwHyX8BFvoHEWsdstWSKmKPj3iPJkCe",
  "key14": "5MzBTdM5zruUUEAjemPfzLB4hc8YeyXVnB3hfpxriZk99T8xDEaHnRqjudbrPb2xu5GL6b3XZkh1G89SJ7HLoWLR",
  "key15": "43YtR1kTTujeLHWDppgwjM2im1LfPdXm69pMJWnjHY1dHKcWfurvAw5G6UHFyXiNNokfLgRAcR8VcTgEMwL8sY5d",
  "key16": "Vd5JpsuXaJEwhLJNDrX2N56at46mbee9JhyDYHfESXeyKKD7xhk9yKBMpipHFw3QQBuNnJSsx5DRdg6sGH2eVkp",
  "key17": "3N7TYhTfYhZJLM4NJ5EUzLyC41vCmukmtqSDFS45TVPVDTLYBd3sgfyc1Sq1CMV2EEsnd1Q378hKhN687RcECJJc",
  "key18": "3JVLxC7uaqP9FVSdjANMuWHsXcuVfUBQ5tw7bu3UWEDcuThrAPb3Znb8YiVtetN3exdgecqS6ZAgFUSTWWkxGeut",
  "key19": "AxcWtQsLFVV5hSKtoPe1ihPE95nWznYMb8cPr3SyZqfHTktRFFsHvsR2PPWJGNodGgpD4yP1um6QUQTwYiA81wE",
  "key20": "u2EnUxzhaLznn3CY2UkMffBxDfsgZst7knK3BBbvRDRbuMZ846KJ1QM9mZLcs8KNMFNPJCdJNNFnB5Qtwsetv7F",
  "key21": "2pKt5omNbRyKQgzX3kpEX4ogjJK4eNwHV7Kx6RCpbzPwTSXzNJB4m8VjGcEwdScdEwFFBL2gSggFKqqv234vXXcC",
  "key22": "hzk5XMhYTiib2xJ8Sa2wDbfXK6XCkRkHdVxXQCmxs2Pz5SQbUMNt9pa1HrsKDFRQJgvpY27eitzzTGNMcCho5yY",
  "key23": "ihmvrLQP2KWcuRwsREt9PaTZq7V2mVa6p1bni6x79HbG5hL37isKhy3KXoadK33xSm6TGVoDwyvPGgo72YxZyvn",
  "key24": "9tdJAC8ceuMMDws2c3eAfpt8jETP8GU45zoJ1q1Dbrv2ToUtoP2APasFuFeM8HgZuVW5YVvW3BsUYyTQxwnZdmt",
  "key25": "2xqwZoZS9VoVp7guSBMVJSvimu4po1eXgijGP6Vs211vkz9f2HExvtycBMQhNL56HKW8saVyqWHyGtvyofNMM78v",
  "key26": "5qzF7fAjddCTyu1WXd4NP575KjjZES4ZMTUNajus2reQPPrvRj53bLsNmBGQqn6T3Q5AmbkJc3hbVSFTr6z8VF5y",
  "key27": "5D8hUcke34CEMcZ5yh5tvRbuw1efngWKhyCbAh9gkkNkrnq2EhUmUnM5RaFHXJiCaZM2tkgYj6BZuHZsEw5d2Tey",
  "key28": "61r81fhN5ZvKcHxvasgCVpakSdmDKE9Z4CRwG67XWPkhSrxtwM6ijDmkGp9RQcuizXjwETGYiw8Tu2JbQjyWdXYJ",
  "key29": "5SoUWcJjU4NgvEoNKgv51FcBMg2Qr8qtQW2uGQyyhjE6JLTb9SYie5fYzp7i6oC2RMAvSxQ6LzmJjH4dJZDAPvwb",
  "key30": "5iJJk9HsvJiwMhtzx5ENXXALWNcdwspuehFMZkCqY4GZatX7LWhUbZWLagj2hD2K6RzvxBtGxp3igVcvHGSejj4E",
  "key31": "2fXtrT7YSKkx8ccpZsrRGhgExy9Vmvzy6X3i5XEGYmvXvYucRkzuaCJPcAzmrbS88xin8cK88zRCs6EgLN6KhwBQ",
  "key32": "2w5d7VCHXsyDNV6chMqBz1NEzvDsQkhEL5K477dNUJYKkvsEk4aE75BsoGmF3bv8za7AgBLgUCCNGoWj7MbkGu9X"
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
