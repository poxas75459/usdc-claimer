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
    "v8ZwnsmxQuMTStgzoVbNj6VSKE1SonKpB6xYWQKDrM7P7tjkxgQwj6nJeNKC5K1PBx5tfoazqzE4yFkgviFXaan"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PB69qX8XpdSeEk8S7r6KgByQKDoTFg9PCtyf6p5wjt1MvzSbVZJCHTjpEYS955kMXidk6ZW6WRVoX5hHrEQKTwz",
  "key1": "2PkrHzTdxgc6B8kEcrEThDV4cqUTmbr12SitddminzV8M8wp44Cgq4rE1bhYHk2iAytaWNDYVyhNvwTC5BPJsjzg",
  "key2": "4i7bV256cky4BkiJKLkiUF966MJG7RjbxaZCj43CVPEvZZohYoypHPVHrq3FPQxZPoaffvT95HHHarWUEJ4RthDM",
  "key3": "2gQwjXuJGNjefHGbvNifZ3JYcVDuxftDFcwWgVoSU8pfAZ2FVGcSDBiVt8T3utK47eFPYaSX76q21Yr6MgPhXFT2",
  "key4": "4rUtjtRFxXhxKULHkYWNwAJEUzyDCpFuQCAktfRJrjuxBJkHnWHmQhUxJxVRmkChktFNEv9h4Xv8QWFZG1Pdd7pJ",
  "key5": "4fLwrjW8JMCN1P1SnNTDRhjG5JE9rgfJdqXWfDcypmV2BRE5SbboV7Dq6GS1U64ybyv39XX86KWDQqn37hrNa2cA",
  "key6": "4p6hRYENcMFAU83KRzEAKrNp27eciwSKhR73TpNgLUsYMsaXgq9MHwLVcvsAcGFzxiwX2kdJ8Paj6iVSyn2uDmMg",
  "key7": "311nAxSXB21JkniSoaBTvdzAZxQkdqD9GREMJRZfvZe4zCqTheXh28qTmpyDE6WLbrk1dTWvG1qyAWK1h5tNfXZz",
  "key8": "57GiYZeEPSxwMFjFQG5wt4i7iAqZeq2yHJXznHDNhjktfhq9WoVWqH31cXQwYWMesyPKrDKSAjxojYEFmsjYgXxh",
  "key9": "33ewZU4tY4Z8bgoNzoYLTfmPsioPrLJPdMXqEnPQUMmd6qWn9rmrET4hZehZ9UCDwWKv8VgBV7zqUpTCFbvUjUYT",
  "key10": "3YkyvRcuMcC1aGggPZCM9Z6XRAQ3X79gM2AoNGqoGR39qTREj6HFSgMeZ4AARw5UxYoceCwhMr5yKyiiaxbK2BCC",
  "key11": "uujXkH9bj1pWSS9YdEWHrcjGeCnDotZEKV2kMiyGW7uETpN7fqBP7oDxLW523xHdD7zb3hmu8hpV4tPD6JYESVj",
  "key12": "4JBMugkF2nizCZ9waYYAxoBr1oXZAbZBtQyBnTcZXPobWc5BXnBiXfhB69dnQCh4rzP6aJddVTDgma5PS4r9QMRS",
  "key13": "5boYHasyJLKzxebevKx52E569AwEbhN8KD8kn8BwSgz2hmEzMa8iUTShwPsXwFRE7jhFRE96xMnT3wNkiFRCsy1m",
  "key14": "4NJfsFJaBLLVVmXCER5zDUakV1425dM4PpL7z8aS6FcqrvHD2uLWRWzFRGRSWbJQk9S1MTJ3qtoJpQos5jjbfkD4",
  "key15": "LfYSdj5jj34mvuLwtMyKrLZKKRoWnu7N4RyGKEk4bdBZfS9ZdjGyLmGENGWcbmYgpqoJuzHv4iKTyRZ3amcyD5n",
  "key16": "2BpCNuy2jyGgbF8dT9Ur17fxZ9JZzr8FYL52phy5EktLmfXn2SYajrfS9uWKWwT9RDi8CUibGpTMkr4rLapWjTsM",
  "key17": "2Y6NvHFo9FXTjtPkW1sV5jLLzmbKGcPhfFDZibcTyi9HzaQp4F2vQFAZEJYPW888ruEtab9pFrcbimnWgdELRdhk",
  "key18": "2CoCauL6H6Lja1nde9P2NayZvYy6MwyihCVApr2SctmVKwXFLLu7MNaeQfZcnVuWrDDMF35EdEphcgYBZzbVwZGE",
  "key19": "3NNghGnEid5UR44pbATyfxc5cvMW9xSXXfSs7GbDQbvEf4LigP24NvtDLYUmh4PFUYPiVvHVbeNdxY68xLdQ2XT",
  "key20": "4QCDNHfRcKxja9tQeFbqVnNpkPj9HS8UY4PPxSuHwnnTfFNhRdiLWZWCeDpktnKTkwo8Ld8dDYYA3i3DyL3Uf3MQ",
  "key21": "3pwHBqPL8ZueKfmJCEtEAQJNgSkFSSaLJyMHDWAv5oBUSA269LKQCPkRn4hgMWeLBMsdLeaYFNQwqKZtahjP5zD3",
  "key22": "2zfWLx6198gPrwgkiwPrnFVEQEg9RzwSWBPXe46kWaUka5AGY5uGhgwBmndnWdJqCJt9KxVCghcvtcef4uHrJUun",
  "key23": "3Vo4oDNdQ48q9d178kYAAU2f7ZPy4y8jB9x9nipz5kKJUbgVXeoWF8cuHFg694zF5D6aLQLPNKK3HhzYuTbZQ4D1",
  "key24": "zTF2QhqC9SL1KfJJNf39mJLmZjzJjN8utcxWn7vG6BARA4aenZSsjrssrYJtRAt9ShwioCuU49xsCPF46WASCLb",
  "key25": "3ENo4inc7DR7nRsPSUPd9HrNuLyBY8rzMNSbJ6vmo3tNUrYhyWqFm2Nyy41M5eE2J6TbhxWRxdVbQtuR5BXumb7u",
  "key26": "4o3orxCEQ4NMDB4DK95HorgooGmBcjpt4m8NmZEH3rvgzR9q3KpNTC6vTJ8ZD7yhHwtQymgwQYnkVxqipu5G2d5M",
  "key27": "5SnLiMPWp95w5YLA5mgfnkvPqzWBqk87nC138hHEwLb6pi7EWM8Xyin3MA1bodcB7PaBdzzUeBtA2vmcbQYNJSpd",
  "key28": "5phvUxpBdkcpQDu3K2gCMUuyFpFMoo4jXAzrtR83D3q9Hg2A9c5bEdoGBLjtX6CUBxmoVD4EDGG6Ah3KadXbNv22",
  "key29": "3wEXfo4zRkjxeokpGjAebHhhU7ghMDaeEG4FxuwtgkEbETRCAPykVUabFchLJZNmuhHqQ9VMFjED83S6HtbUb1mY",
  "key30": "5EkKLiaotvSQbo7ZGQA2fYH4piSbv6Lysv8vjBgBefBgjmNWoxb8RSFunSenYRHf4nSDHHKL1MXmzWixxYAs3WRJ",
  "key31": "34hrkeVddwT59Md5mDxiPHB4XxWHbbkrZyZqjqEbcJjXmwdy6MMMkYQCzFtnFfNV8CebzLWnVUpdhiC5rxwz1ssH",
  "key32": "5zf1u3pLbGe4YRu1kq2uwTtqeMkgrVpvuBTMK4UNUWaMRv9DGVbkK112ZCT93fkFZKHtrdtPRNCWiqVNDKXFHbVS",
  "key33": "3tGdiW5xnW7gYEevb4bbwAKygyk8sg1F4LeBkkSk9QANrNV67khf64c5iuaqs4LjWek4oukWutsV34z9nLWZf1Wu",
  "key34": "2hezcdFq7Vf6Zn15BYDQBEDegVKfUuxSXpSGEYRebH5X8zFpAGkJyEPie3wbVnD3mG3wFbUU8pPaewyvpiPN5BWQ",
  "key35": "57AmMatSJ1USnzb82zK7eHPBXPNbSbiGMa1nR4QopvqiZERNmGuYiecNJPRfTBjB99F8MftnoWy5APC48xNxqLuo",
  "key36": "kZCGxq59iMGjfRjsGAhK3e6SFvYPkCreDcScStLFxK97WQk6WewRG2UQcbESpL5Nr6DXzjB7x69aQpKcpqaZKBJ"
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
