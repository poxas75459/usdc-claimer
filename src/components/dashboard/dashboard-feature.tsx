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
    "2Y4Ac7my17rF3oCHGjuMzUnUgJvBAB3PBXo44NsT6REnwqogzFZKg3PUoUFivattny113jdctGpaDwoMvURk173g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "672WfveyciZVTHBkK6QaUF7LbKab863MecEj2XBqf2xLZcefpymy5BHvUKnZdEtAADyYyYydUEetE1wi7sJDhBVq",
  "key1": "5JHfHaeDitx3NQkWP8FHYQeGCE1nWBXLUB8mopX9a52T75Ff6TuhfmWHydx84AgvWgFZBCJpyfQT3AvHZpPb8h8D",
  "key2": "412WM4n7FVhUaMFEtPG2xQT6SsMwDTCvQRLNCxUKCWsc2KTH2gHQY7PR1YqpZdz2FUpV9EfhyL2ZY9JGkCLpyzH6",
  "key3": "4v8XdeQXF6FAkhJsrSxYRF4fsg3Po5TqmetasJ9MFF715FfKQPcNp1nSEFDNYxC4aNvVgtMkpHAoqDF7fbWj232R",
  "key4": "RSdAWs79fqPNzDHVBiMTWgfHneMQPefYLFycVcbuUQMzdvcF8y1ZGDzgrrQsyR3871wCeXFasrqnjSgJccjwmkV",
  "key5": "57o8r6hVrXcqAgBaNMMignby34humGVAkDLRcMmqZrdtfTmWuRew4bf4GC4V3iVg2oy57r7zf1ADTgLduScPek7e",
  "key6": "2Kmss65iSvBXRF6iB8ScTuAwZZpzwicNCy57NPe5rEkoRAU6ffiHtbkWNDZ9SMfDeZZ6DpaWKYiRovVtbG17Vxxx",
  "key7": "4iqSmEaz4hBcWTiBsz1RrpoiSvzga4CwgsuvxEmoJywzSgoppDZeoEiM43K3hDQmyKGYWVkjbNZwA28Yerpfa8uX",
  "key8": "4BuDW9ByG2juKxiNMk2s6iZCzzjUYbSMcWtTK5AYk3E2STNmaNrzyCqo7RJtBpyfgrxSRc5vqA2haay2GwPbC6EM",
  "key9": "38xpYjqYQR3AjNNybiWFa9bqmQLpp29B6Pn2deLsHQoT2cYovwkvT5CoAmvtknFeRed1uba3pS3UccK1XHDu3pPB",
  "key10": "5oBbzHNVqgeZusu3JYsTRXWMQ8GmabyiYxQcFHsa5fGFoaWd7xiPEAgc9fq26svtydzZfh5xSeSyMjhFayeyQ1MK",
  "key11": "4XnED6df8mwMPrKCG7g7YoHKC4Wy62TndH9u27zDGRjWxcadbyDEREvq8YB7cHCbqVwUW48U16mM3ynpYqF8o5Eu",
  "key12": "nmioxBDAj4R1CDUL2bBDiJBrNeKL5Xos9RCyVYPfxhhwHzi1xTNVSYQarWFqzCGSL7zvdqpBxX3VrTJnoedkMS5",
  "key13": "5Cag5o3U6g9z82LVx6PojBUPdgYvBZvtarpYCeHQ88dqdmntLM82aEyaxUhCQuZi27USzCxqfQR1UgW9wVApnhYb",
  "key14": "2yK1ZCJf8xBxg1T2pGmaApnxhwwR6sTwfrKRhovB4SkPLi8nSmdzCpiUaVN1FpXE5mUUnzaKtfDP3w38zYSGaGXQ",
  "key15": "55LX5ac9mNDqiPwz9bNty4ppo9c6VjJwjRr3WaQrXhroFWUcSoY6KWSxz9vaWm8gmmi8s85etsto4Zg3URs6yjdW",
  "key16": "4B81qYo32a1WUJBEmruf367YYoxhU7XohLPfGoH5X2bpLwTuT446Tn8cAy73kQz3C8nVtvqo9NaKQZtSUBAt2wzg",
  "key17": "4YtEEPJMgHxrfPzWRns2YN9GPAS7aPdf9sJMnBnw56NBaonxa4qsGg4tH9KjAtNrYkqGSNmLv69hBs7shPX99Rz3",
  "key18": "27u1xuomwDZVgLvrMRXVCh5e4EjFZ27CyMD8b4DhG6mWLa99pzd56BG1WpbL1MYipsLDQw23LA1HMitVMGGe461j",
  "key19": "2L6L8qZ59cM2utQ1LQJG95mKeyfeH6y6KaU1Lua653ZbCwoXkb8bMFLZjCiq9Zkz2PrPtJenfGNvzGhAw9xZ25aA",
  "key20": "4ykg8SYxPZ4GqHhCDBYc9m3dFQDHy2zxq5U8PSebtx2vn3zTpQTRtEQHkmcdsqVzh2zguViHf2HgvrkYLixsJCYN",
  "key21": "4ofmWe3qSgtH4QDZPQ7CgYechTfxpz7G7VuP5cZVqBqbDMeEN7CJJTZdu6rZhPu8V8bToFzHsMLbxN5NZBK2xAAJ",
  "key22": "VkgdWSRAdvUWiGmeTEtDFypekWLouXj9MCMCe9jBa4mdcsX1e5dvU1Pf3m1DppgX6Z5anF1t9Rpdp9jS1BtpGns",
  "key23": "4LkAx8EHHMEvF2NUhXGeWnLo45WqSX4cqcdFYNXfDz3ZuLP1ELCXrRRQLGZpB8btyL17QgAsZzhx5sZGExdmUshj",
  "key24": "2zG6biXRoyyLqFPiAcCNywgb1AcNMcrE6ifUQg2VgsEs8cyZ8TrN8eNhFGUwh5MdGMZukR27YUDouNBTzR9nvN4E",
  "key25": "2Tu795yEPCmaiM45ZjbJE2Vydvb8LexyXtZ3ck1osdJa3uinXrMJR3jBoLVRJtFunm53JW4uzLie4fcr8opfJvBc",
  "key26": "2rijYUH1JXoegqUxsFRVDQoKGYgRnaawv4EvSbW8Q8ADi1bUnvENXqJGSqHPDX8DFoKDCAxmr3EaLdUwYrEMtQBG",
  "key27": "3doWZiHx8iHnucRUHB1dzsvcpotEDMS9kE6fBw4c62VjQoqnMc2x5vv85wbE4dWSqm2RBY8Sps2HYH9r2pLUTAKt",
  "key28": "1qzFxHD8n3eG3LSfGhFoMoizU1YuWQgsrmcH14KtMXJ1ZGUoECbXHj17d7Vvgspak3Epo6YbrVM6GWWYrZdPTGe",
  "key29": "3HjvkVGAr8fxopnG3MXgoNvNZM65FZFAYJnMBHRrB7em1u1ELkzNBCkW2NT6d9KtgyzN7yjD6aYTP4qB9MLVbi5B",
  "key30": "4F8L9C83Y8diJeVZqmxk4qUZtoEXoNjGHBbd6kEWvPpfkMvVGzoHQk6iZBftHBqYUxPxpSpXQUPBAn1pqg8L7824",
  "key31": "9KcdVkhWLwzSpfY253zBtAwbbdCCNbX3GVfERr4ukXgFqcv9T9gbP8BSFyymUHfkwwBYZyyC8bsPG72JngZaPHC",
  "key32": "2MyGhFfG4vbzSrNuY2MTni25mzbPpkYq1EgUwsYJKcCxZporLBzbTXwWcNnh8ftdjck3hfQzkDR4Xzt1A2SkS37i",
  "key33": "4jRbYC4GLaD6Liv8DZDFfWEbTRcs9JqSdQeqNSjajqPHKLDwh6sK3p6qChbQMJrqdjeFdX7xSEFMSGEvVuKKuivS"
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
