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
    "3gErA8icKDCJ6pY3QwdPibUZJLhq8fkMfv6ZLjjvHokaAdH4T4jv78koL6VJd3TN5Mhp8ecqM4EAeV5kaVSt3bk1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52goDknVajkUE6gNiAC6br3HZDSbuej1vPfJptFfyfoc8fNe1pD9hH7NcSyWznLFhHgkuyTUiHqeSEJP6EZrVzR8",
  "key1": "4E2tfUKVs5qQp74Ca8yic6bu7EBM3oifMZjgeTEhdJX93sa4cmv6Qks8N7RA3BC3aHzdQmxqb9WECARQgxscNCxf",
  "key2": "4wQnSdEFHWZAN3RirhJAnFvAxURF8ZTVgK2DahUojgQ3hK3vm8NAPenqrtEwgoMzeFbKDAjJGC9qJ2ZLn65UnoAp",
  "key3": "3SpmZNeYAioU6aHkGxYZb7dodjsdJfr8t76rLNCZjoRdXbTg69DDVxtUzgzYUST3nHadNXZi5bcjnjxoyQxtFndJ",
  "key4": "3Rhh1Xa1BfWuejV1e2KX6WksVJuU9HgDmAC95tcJTrYatLRWtdi76qLBfgeFdDqm4gFJikAos6Cf9UKSaeiq1kcQ",
  "key5": "31kJVNPQhmWoCkxgsaPFnkAAy6rGwCm7D4qTybsKep924mkLoUTSuaCYdEFo3YkHfd2zGD9e1LqgJEq8GqcMjFyg",
  "key6": "kjqEh8Hsk7MZ4UZN6ojYKhrexHPt7tu6M3vYYHrdH9uA8KHkvY9HgDJgkn2V73bx9Xs5i8jRRDHmYHBGZjefbFa",
  "key7": "47AZAfTmoffvj93FU66LqT2iJziHbijR7soyokRspc5oUiDsycKEh86huYNRrcVL9tPnfHkfQF2bN9KCTFzbnmB5",
  "key8": "4caPCbCmqeZKCYnrZ3LMMBnHB1c3E7VH9mazbEonxCmv9DvGB6EVCMg8Ebqpc23BXwGMHMw4ZJSjMGA4E6cQGi3s",
  "key9": "2Vm8xKed1o6inFaWZcqDJSj9qQDXs6BoSQy3tUa4jST7Zqjkt8j9E4sQ2QcEhXwtqmHdC4b4quf2ki5EMjXX8SHU",
  "key10": "5j5uTcSo5corV9W7w5DmUn7Mmj74irUq7FVFqFhM7SWp9AMD4UbHNoDXtpebEAm4vhWiEmXviskaaNE7aDMjnpNh",
  "key11": "41U7QAG5hHrmnoVsQUMTaQNXT8FpZGQNqDmk4mECRguhxKtYw269StpdQ7zixrqjhQUQDNcJGygK8DMKEnkpeZjk",
  "key12": "3YFyE2aGdLCH41QzWhqKLSUxGkD7HVTZWdWq78RfcHePEo2r1rwZqethn7n5SkcfeJbRwTPG9TtKZPjuLybfEaMf",
  "key13": "3dHst8ig35rPaH6nfk3CuZnQ8Q56izjpetN2tUVFkD6U8jB3UN4qFA6pzdDSXyEo2KAd7YoNRPR3CA5z4XWvprsV",
  "key14": "52LwfqcEStfj5eudjtG84dDtMa1FSi2jkgtfgRE2QfTL1tWZPHD7NMXJnasxc8UNT3835kAvoPQb6DhZSgx8K1a9",
  "key15": "51UWPMrbKNy3dEUMTDP7Q73rS6CBSuNS5A7wCkqH14oM1R8sPVSVee1Be5zDNtp9tXY6tLudkbDAqYfjPjChsoHK",
  "key16": "3oUDGC86pU1GD6FDaGtc8F24S2oZFWGek45FnmYSCQYbSzZyZbE1gmKmUp6rYd2pg5iYAora54vTpDW9bPaF46Ud",
  "key17": "2rCHgMeUgwv4oMV6f9hDP8ZSXFtMsQLFS4LjfvfyoYSahDjErppFGrk8b5Tqhg5M3XvqtmMnZMU52VWv6BoTbyFv",
  "key18": "4CjiKymzwyMwHpf6seWwjJuSdofQp4of5aREpP7uvFDPQWaycbkHcFKPxPzBZ6M7j9cSsfwM9rfjRcLfMFwVR7dN",
  "key19": "5WRS22GEaXN1H2GeJQV3VM3grdkaB8b4GKtByWuDUAy5b9yrmmR3hhzTzR1AAsVPp1K8bqrHxWrwH946DCCCCCy1",
  "key20": "5jub5G7jPqdwmEDNKouDCzinonDKUCbDG8JLA1NmbZczwLtWuiYZoDnzHMUgU1J6KqigvAMzgiHuJb7r48zQx2TZ",
  "key21": "5JgJCZDDwHs5iFzWkj7hdpW7sCxxXqqweeJFkdMvTW23HfGPQBR1rYYSEAJcgTcL9G9nPqgDBjP88N32rL4MF7j",
  "key22": "2WbQKwmjocq5SC9QshpAd26sdMeNWAf94UusXprbPzue55zjXVwJDbCqRbTjwmPtxjjG32gZege2Cv4SVGwC9XV",
  "key23": "2QawDRTduXGppAimKnvVPremMoD26PPQ5yiHBMqcvC6TH4aAsASrrGHgXs6n6ZLhSHEzHoeoifhaQNMfkF3B2int",
  "key24": "2H2kYPr3m6ZU9uSDYPF1nJo75RLPm8bxue3N38eHTV5WZB8EYKwcBf75Qw33UqBi7mpH9zPTe2WBV3wumzsThUon",
  "key25": "52NvAAKtaLigb4W8LhNhnPM2Zo6c9NPiR8foPFCdnJvtJQpHEguzwxVVvAtxVrK7J3TbPu38cQ618aTDwYybtLDj"
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
