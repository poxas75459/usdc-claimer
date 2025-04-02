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
    "DekiqvSg3iiTDnibMHTYnvzZfZmAgWJFzprVEGECJ39J2LqgW9aiaPAuRN6cJxiXMyGzrZnQvAyuKtz2PihYEi6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2T9BWbL7jL97aDGq3RZRoYhAB7HHDNGuqR1XtaS66RNdssg73ZJg1UG5hnzidYn8qRE6Z1zZZNf84PfxfWjQHJFQ",
  "key1": "5aTFSqbMv5cMYkPvxoaschn6nZrmHjEF6bkpvBUPXb93FCSxCJvLHLwLKqvXJFaJatqUPfHYQQaRFVW4hjs4rw7f",
  "key2": "3rDLPB92VqFpMiLFiPJXkBdiUHntk3XcaqkU3WinvzpXA3CZtEhFQCZrSBpZvpR8RHHzQor49aAtQSdxNxkt2wcj",
  "key3": "UWzTghxSyjf389m5bpnSLGr8az5bNgvDUFGqoKiQr9Xh3sVUgaoiMgSefbqKVbT2XwsrvmGVe6iKrxAuSJmyBWL",
  "key4": "4H1LbqfsWvhoV2KCi3sP9DertbukXCnJP6bTWQzAtTmcT1uA16KEmkyVkTNePvZ53kNQdm6dqpBeew891qs4LUTv",
  "key5": "2m4o16E62twBFSc4Nvtd2RJR3sL3CcGsmi2cmjxeGuEuEsxbkzAeo8n4KTgcNxTbh8eGDmMjEyYoBdVZYgNp6Skk",
  "key6": "37Ki61sUAFncxFkzamfrZCakkyChtYtUeie5W3F9Gj6s2YZWxdtEz1LQw2otcnnaGcuPdhyp6uNLxaA4vUm1V6od",
  "key7": "yF9ytFBGe8TSj9NKoTQTxiaivKnz9sGm8xHATKTxfbAzp25mMuf3ugSLgX3JDqZCqRUxzFjFVf7oKDp2m8J8nRh",
  "key8": "4r2QP32PMR6FfjPfoo7wLLmD8KsWq5uRoJVJoFs3KbEgh2LM8KZ4xkEE1RnqavBBFXZiitJATogwKyCHUGP7nSxt",
  "key9": "ykdTdJqqGoH6GXAA81C7nNZtzJX1UVwACjmjzYitVqi86b7yHvsVW1Jg94tD3VAJy5jJCPJr22Aqk6iW81C4gaP",
  "key10": "4N6zJUC9H11pRk5peLqPsXMsba4p1bXiBih3aWNaRDN1VSpUsfchE2yhjPTb62ysjh7zDdqRjSn7XgaDHWMF7NaN",
  "key11": "igEvCR8QvQ2YUbtZ3CD5nkZxBekSz7S3796dU5xYc7GETW16b2DbWf1adbF3bjL6EPUpxtkJPXctSQuHnLgAt6p",
  "key12": "AkUyc8CzfwD3jND7YcXDc1AWnpRtzchKQTGZTHNnp8v9yE3b54f2JMXJbjCAuTBFQkgMTjjyXnwuCAniQ9LA99p",
  "key13": "4aAqgBwXvBTmLySaLKTYNABfEiHzZXRhShrx6dujTBX1YQ2UB4DGzshWo6YoyMXB1VD4gzJHhEYkFcWDkAojXnPs",
  "key14": "4ynnHVAbdykaPJkhvFjfM1ziqvqG6xfVZ6xgsHsDY3CMegy2ZAb6quenY3GpRUDtBNjH1hoUYujJwdfShwvc7xWj",
  "key15": "52A8xAPozdRRPHVZmhpks2kMyCkABn2xpToXX8XExRtrA6LmbcijLDnNdzyensK18pZvWdX1CCCHELZgq1ZKoxbM",
  "key16": "gMz1NyuwSnVBW21EmvjjfLmizBV16yL1j69ZQgci5NMF88dMegrW3c9J39G9u6Xur9SMCw2SV2jqK1NziynatYG",
  "key17": "23jrKD5S7da6QfR2tTcmjgWdhnTuxcQLQ6BU2XCJ9d2fCTfm1NpKqv6Z9dKkY1ZMBt6cUd9RvBJSvsnVQmnhKCHz",
  "key18": "pJBXWn45E4tdYxqtNCKx57ZdKqdhxFh1cewHW8qY1vLHb3Tra7JWznLcnBR7sWBGL68u7j23nhzPHkxLpb1zFTt",
  "key19": "5C1Sw6bxzoyMQbcnJHc1NRhmcrJWU7Uk38WZYZQXnDGpc2qppQe2hPdSP7nA1vhQNZ6G2B8YR9S1dRwXBGtdbEHe",
  "key20": "2gw6AFNmrBb8v7sGPuJsf47xtXoZWwGTs42CeLGyvPGLiNKjzGh5xwcoeUin75TKtSjfaMfgmtyfKdLB2SUR6QAy",
  "key21": "3VtibBzeXZFxnPzNAFBQX6yeLHtMSCnAmjqQkGDJJcme6ju4xfqAktBjeS6jBHaU3Doum4VMtPssuZGJvtjckF7Y",
  "key22": "pNfPpo9pPvSGVdXfskj3PsfYzt8WicNREmtNcRYxSFKdio4svLdoFPszxP2uMCZdgtaN7ijnPRFrAq9E3whPNyt",
  "key23": "65oydo4pcYDDumMi5FzVGeGHnQMazApTwpkZVVEuS4v6v43EFuvf5t333bZjtpr5PTBXwaq1sYmA4oL1Ze1c5ZhV",
  "key24": "SCagR3H66Z6qVB622HBkM1Fm7LCc7bkcZ41CsHdkXDUMKpx4vyKRucipCrax3eoNyNVMh5bciXcrmVVzKsUX9E8",
  "key25": "4YdD3ks5rsW9b4rLEpcyZ6MWesJmfXCrrDsh7oCjdcTSTCm3jzew4nytrQ67yP9vS4Gs4AMam82UUcd6ewmaBKKH",
  "key26": "53nBCAsiCznWy5qPnkWnRpXqAaMzb4Kf7rP6bGsMUzcCAwaZiPDB4EHLxgbvWzBbLZ7PhBD4kATTqdTwsq6y2bgX",
  "key27": "3WCBJnX8ok1kikKxwjsDbFGXmozoex3fTGmYDWTL159cMW3mYoJDNzppykBNy46er1MVXF3LCHuYm6cwBuLod9nU",
  "key28": "wYMKGwpZrzJwJAbaXy4VzXACJyQcdnQawdFjubwKhtiptNxXRvuWgudYPH9AMCezhCp5ETc8ApsghuXaSijprzZ",
  "key29": "3LMxqsZEd2nJ4m1B16m4HzJ2jLE1XWABRGJRqa1uCBsLqqrRxe9npUrFNHVosAX7cdHzfFzVKAMz8x6LqAac47f3",
  "key30": "2xQVkECRCGEckYCm47zmRHt1B1hsLhvyC4RasQk3YkvUQQcPfyuive57xzrVZcf9CxWxR3DGNnNXPumpDhuasU3M",
  "key31": "2EnE82bJZvnFgnE9ZRTmX73nVhag8Xx6qyiqgwUt4ebRLgQQFSQCkscT6qox7Z7mp8jMSMBCLRJSQgZxR7hJSaYD",
  "key32": "3tv3MnQTKg1HAfzqLEVxchKBbGx4ccmKHJbRYv8MH1Btii3yE3ZSJ14TbCd95riKKUAf77mfBNzeD7zKwBNLc5eh",
  "key33": "2s5Jkkq1R66gWJ3teqWjDRaigELKqeGJL7VKc9n8XN7dQTXQjbEtWR4GcqQxuUrvZzPC83S5X5mpj7pRyXmt923W",
  "key34": "3Hq8mbZaz15UZ59sfSvHP3WAt9WPAvPMompAYAjtFyLHgA98fFsyL4TaTzXdRj2gNLyppJGeVsSxYpCpzEDJHwCP",
  "key35": "3WJoxRs7bm9GGqMipxuybVXoatn3jiGwBxmnGP3zk9T9bb1Tudj8DnsU4vjGK84hJWhbSBkRRpys9S5wKefktvy4",
  "key36": "4kR4FVTGqGH1bhzqakC418xCdBRYoKCmTyNJD2NcFAwVZwSgixJCCep3ZdSGNUHsEEJ8hfqmBgNqXWNHajGqt6MY",
  "key37": "FhqsmuzTUTbq9mLr8Wc3X4kUV15vQtEvpjnNmWeg6KJw7oDc54McLxExNudRpairSDRkXqzRULvw21YiowoatR2",
  "key38": "2wz5ji5H68ihYQiZoijLrKSCwtiBD194BxQkW2DbBm8zfkkrKRB6gv2N6A23t7BXdMGWm7qmX24sRYtqU3sR11B8",
  "key39": "KpavdsJcYHQmwmkJE7CvS7VBiW4bSpXu1zbChEJ3UyaiiRaqq5h51JUuhV6grABSS2JUWYSq4U1J4LsEVv9cEL4",
  "key40": "3aoZZVgvwqkt9XuyJXAKGf7nd9C1r7KJRFgnrnksBpMxXaj9WntT7DjLLwEtRtsJVCGzcb7W8ysQiA68mqjniACz",
  "key41": "2prtxPALnnWky8hdgKCLfonrMTASH3Ay86XV4sPA2FoBM7yZStQyFgQHiF6chWViDbkX5E5JXYnaE2QVBnmQ7Kae",
  "key42": "2E3vZWzPsDRXWD28ppXLYwpZ6kHcokKiEogFFUhzwoH2PS16WTeTqutmpkZwJWGMzNtDKjgk1ejNC7923PeaM4Pu",
  "key43": "22WRsBW9wfi8rxiNfk1hpxC1HaUC165yreoHQ594Ja4cCZVftYKMJaa3xc3MG4FvJR89ffKJrC58sV361pS3NVoU",
  "key44": "5HB1gRjZuM1VNgT6xK9o4n4nNX2JYEmzRZxVyF7QZSbwzhi2FtB1VJBpqfc6PCSihV8S7eQKMruSpGNdiYjknL6D",
  "key45": "EvyJKwS4eaaRKKWBrqaH9MPT9yJQGYWecTHtGJQHS1q4GJPfdtvv3MUwZGCANNYoqhCrrTG1VByNjPNvXf7sHfq",
  "key46": "4JUe3UhZwCyd7E5vmjsPKMxpa8htJcat4Sa9ARFrnXi9RFdUGpSeC1u8dpa9P9zn5F4sYUAtoJBJW63P9N1CRbnD",
  "key47": "48YFPBQw1E56iLMfLPDqGtp2SWqrQCfj7PxqbR8sEiKxW8eCFV3sLWPQMsVsghZ1eJ3AEt3KrhD5x6j7SfPyvcXu",
  "key48": "2eTNyuyscNxvG44MyjxrwGrnbdypvQHzsj9gQm8QecaudYJW7GyH2a5P9ufSJUUjMGvr1NQfqtuCn4xZ1urnDyFh"
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
