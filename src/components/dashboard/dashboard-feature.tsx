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
    "4XAF2ToLjhVLgGXxe7CWjU9wiWZFzRVm7aGPus2Myq2aYVF5SmSCyMpwYezuqHhWvv9LkkawRN8Z8ybmZRxfzSfB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57hcdAiHynS9XRuj449YdsPo3jjSTe8V8S9zkiBUGnmfJmsf471QAJH8MKSxpvtk5iCqsygb3WLbt73JPDBUiMGw",
  "key1": "31fWPWeHrhpbyVKGr6W8HEDTzkG6Y2wnGtutU2aZZ6KtvCgabDrKNB85mGoGf9Cd42ZXxrBdJYpCkLesKWhUeTTj",
  "key2": "4hnSJzqVtmHiorPHSVb1ynXtSgTLqt4AnmfpCrGHCTbSrMRHsa69KQbfK3N8AwSxPSFk1XxkHbuVH5Dbzv5FZzQM",
  "key3": "2Fs21BuUCghwDBhh4VMLmMxZXuKvh8gwXusHvsoJGtKf8ofSDyTSFBt5ExXCrEe1a87ahs2ZRNETkfqzFE8ZeQ1U",
  "key4": "3YZUQ9Nq9dbdcKNzs9T3GkgdrJC3ZWMzUwAv1FvkD2MA3rBGUJ39gzGsBbzkYLKrXRZ63y6vrUBFG9mPj5WEZRHh",
  "key5": "67W2z46ZkVuPBjFyXwmU7PB69TwZt2bnB4XaYMTQnPG7bYtTjGDprMt2yMuSnsSGhiLbsXhDJaJx7FGoQNmPkCQu",
  "key6": "5SxCqCgf5QqPYG5dmkv6UA4D2fRggqB8tw4NGXKWCbsqswiPFSmghBHzaUdHmK5eVwAbvZ3iqjUzrH16PFSfdqem",
  "key7": "4WFwDgLyMBnFQcTvFpHMasQRdoMepHC7iaMBpXjBpgaytxFLQxsfFTeboZaKeQV2ZaLLoGjAKMu4zevWFzguUFB5",
  "key8": "3nu2LsVsMMQa2EtvqvwbfYm5DtpeRiPj497DPFFabtZnXyk4hNJxCDTu4Ps2e95g3YCnhuXihsRewptBULoThkV6",
  "key9": "47ih5jowEamLWja9AQZwEiDXCK4UYR2JW4q9xfMgiP4iTh2yNiwouvcoe39RREL8TvhqCEg19mTemjHe6dJkj4i7",
  "key10": "4R5w8BEDqyb7ZqDMBTHMczcjHmKGktKhnYzv9JLpFKzs5wtPHBgjqFXBjSWihPK8LN8UhLsJiBT2SpvwKtj5nzvZ",
  "key11": "59KqzsxxoBtLCgWUpG9vQMJSaKqsq9bwwXsXGaQjX3dthhFo4cqfEjbNwfaaph5kfgu4tB98VGyKAKxftCjdH69a",
  "key12": "2PHB6S4yzS8bRTW2i9zChFyjkgXbt2JJjrkHtgMAodvGoGktpX5tU3146AP4jNWu6KZq4Zk1ts6roL74TyHSZyid",
  "key13": "5ENxSyJ8nAw2iU9atYS7RoAng4wxtQogmt8TrFedeCNxSS2HzJnSwcxdoBTCFRSn3ycT6fYzPzcwKpnxYxBZXWHz",
  "key14": "KyTP1Zaj79w14he9bdbbgqM1hNuZYjG2QApaiXw7gbFaDsM2Ftatdar9bcMCvt7PzCsKeio5MEr2DSw2sY2ubwJ",
  "key15": "5wCFY3H1qVmEp2Hgniaf2nZoW2CYzNnxsTNVdxsm9FuEunx2wv4TiMLrDJs41xbHQpazQ6jrzzgPSU27ST1svcMZ",
  "key16": "4SWFA5AQ5sNRp6WsLfehoUk1zcnCzvS1zc7FvC7QAPCsXobeLgY9u7ZoJrEGw56CqiZmvtXNPmC59jM4it6Wf9F",
  "key17": "47yqrxaZW8z6SV9jMvryasR9CqLzbhEY8b4Vfc6yKAC6kjGK3PK1eugzPD4atBb7xLE4rbUBuishKE2rWTFAKRMx",
  "key18": "5k2tJsumbxuxcrQRio23F3RGnxLcrXaCTHXirHmVwHY5MgCXaWAKmBwm5uzNkWoG3fdoTYcWHTad5a1uqGth2pYh",
  "key19": "3yFA1mQ4MVo47Y1ViYwh7zq2PYskmhG9Hp9NZ7Wgp2rhqbX34w9Hdz8JDsF7BEC51irwdSWenCJvXnFpmdbtUSLT",
  "key20": "5nN54qwgtUsD25zeZAbZHJHszutrSyr5rGJ2rCCkA5N4ALqzucuaUKWxZbsL6aardHaSgVuLbEYrffRUQ1VLzD3t",
  "key21": "2NtqyDkEpzAENp3nAfqhm8xVZPeebq9Aqt43AviDSQcdUznovd5UfeNCvFnqxSSvw9WnBxvmytHcoZQdNRy3W4L9",
  "key22": "mYLatdkkUN5ujQAczhvHmUuHYkMUx1wSABoweJajZTSGuvA2eSQ3c3tL2WW6P1SbMLdLcDLoNdcriWue166djjP",
  "key23": "2oN65vHXkG4VXLsXZmq8dbW6AAoBhbcpuSWv4mSMiohwQ9AuKdxhf4ziWMpFkTgifFHzoooypqDFQ7SEgqFgatsP",
  "key24": "2KdzZEfzkHUMNVC854MigLsMEmst6E8195NeFxXpDJQMSq3wBTRf3CXdsrep45Tvnc98B4xKcTRfVbXZEoDVfwtq",
  "key25": "3g1XnCuWDMq32UxJ9wXTyCqNqJh8gb8HyamZ2qvgJmEtzx81QSLhMTFSMzANyZzyVX7bQZYwuPBLXiBY4Kqc5Ku3",
  "key26": "4soDrs3u2j9KuRxBgt4sVg6Tquqa4ogqvwrS1ZfoSshjAKuQXcvHSvfQq3ND35nyZupeAWqkKocmvtBQyVwwFm2u",
  "key27": "4DqwAHYyMq14wievHMJ37Bd6yVYsqq24ksiKoBHoUs7Gocg1Edp8AUEueKNGZXcvWxnWhU2N4rUnnQ1fDVfqAEji",
  "key28": "FQWySGd882HopmJGsP3fcxs69BySmgvvJAPrDduq7tH7AKVimcmH5YuQjUCqvSKbrxUafuzPc7NaDZUHQJubh8J",
  "key29": "4yTaD3oyty4sjus2CPWzncoMMh7owRds3qi12ceG56rAhAF8dNRzmswgwwLKkQagpxNjf5tReGGvgGDq5b9vf6VX",
  "key30": "3AhBdc1nzfcc12gfSCnjPvUb5q9X43xqWKyj8VxygqFqzgYwBqEUduE7Aby21u2bKmzNPvRTuwfSa867bgfPfsgZ",
  "key31": "2YjY4Qaqf7BQZiDwXrAGPdmQPuDBGCWwQLfMAWj9UJ7vbTySRigoTwHRXdCTjLAPyky2qUXw7AC2NJ8ugMi4W3Zg",
  "key32": "4caqsfj23GPsT92FGr5mY68n7G5znHmSSNkoqAziepQXh5A6pePx74w73h9dPGWspoBAgoKQHZH6JexZB3vWPZb",
  "key33": "93nbUJaEYPPveT3Q84wfzTZPRs7t2yjYkugxKH3M1boJaopQVjJumNEqCz8HxaWgQs1hCbayL9xc3nXCWq1DDbg",
  "key34": "hBMrYPaVX2Y8R8Q43r74MiPhqLRobYzYR6NdYNQ3ZU2zdCSXoEhtoc1U5ACtiAhuzwSWN1XQwhC125dYvbrjqax",
  "key35": "5QCxXHngDkohMhxUwHRkWERUeCHG9bDQP562FVSmZxX2gKBZHYHyCb9rNSp9pEtmPRDFq5eqe4KgrgbaQciYKBb4",
  "key36": "4dZqkH2s1heNzPTGdePXFu2rj93UhKH9inZGQLEYcd5n1Fo6JHotx2kpAKHAAtZTm1SnNvcvwaQoMEe5VGb1LXjF",
  "key37": "XgxRjncXSYE9aisd2EuQ9seTzaeEgP4HbEXDxJwovPLa6HY29M3KMNVi8CBiLeDEjuoj8fcShhbp9ijFAikqB8T"
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
