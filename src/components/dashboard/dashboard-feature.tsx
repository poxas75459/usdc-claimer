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
    "2pwhup2RpTbXeTyKVYwD2gtPubAhTQpqQBNjRRHPFQ1M3C5sUG7oGVcfA7u1mPgF3ZSERF7iHgCyzkgdNksZEDMD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NbaAAQaXcUdietFptNMRJS4oLifhoKbzcVDeEovvJAL3kZjQsNqSSpxQKvJnhb6Ev5SNZC9namt3Sa4HZyYiAsZ",
  "key1": "4rqMSNXyGNaN8cR91xxmBedGtxhQHn8CZMLhnmi7Bb8khQrFKsHrWGrRNccj1tGPv5Cbtp2hkwfwTdYVci1CoNws",
  "key2": "5Ge47xoJw6mda9Ho6MnMMPmLkcd1gpP9tfjFCVm5E8Qbira4x3ooWPcjed6FRd5weFAjiANJxGy4VBwoajVJvqB6",
  "key3": "3m3642hLiUejG679BLweJVxU5kh8HmvnBJHXYxh4qsM41RJtZD8iMjHufdH4tyLuMJCpee3fW6b1zfx1yPaPixR",
  "key4": "esfZ5Jsg1v4Fdju7MpNCbtjfRkwtYwtJag4pH6VDWgdL41dGmxCyEc3XtNWHfNNAo9zMmbxSGbiQdx9zMTZtk3T",
  "key5": "3EBeumPXkZDqs2u98R71sRiJfapwzPNFmvkgvSTewdxxUmJ8pH9aGd1QnVomhScRJVzLwYaQsXeL7omkVre4nGR8",
  "key6": "aeXAkeeVVSZCfNhb1yWDZ3gbpxVFsfDqE7g1hEHBNYQ94SbYYYkJyUmStrVGvQbM1A2ea5ZAkX5BM5vSnLpemQE",
  "key7": "3WQxAHtavZCkHH1rYjJiCunVJ9Gx9hrGvskSgLZdLmFF5FNvQ5cr6cLRz1n27pTVhDaS3M2GW8c52VMbWyunKVM6",
  "key8": "5xguyfjhuM2SzZvduK6S1fWn7tvA2JEpgnjGXS6inouY9MEzsBCUgyi4Xy4BaDbJH9jyDHX4vTWF7Q9WGy42bHLT",
  "key9": "3G9U7No5JyWzZ8fPXvMqPVn3QANgXoVBGEE76m8VPDfqHejwQTXkpUFQTNbs32XXwHF1wAw9oPt4QUm7NY2Jecd6",
  "key10": "2uPz1Yt5CjVvfpEKsz4oB4gpbx7Bt1G3BhQnfY28jieN95NsU2KsvtcT2fBJokVKAChGucgJcS5zqDes8kaeB5u7",
  "key11": "2SoM3gWWkzbLUcWVnMLzqgxS6BQDy6jzmn2n7vhNPWENWaGNoQkRinfpmwFS4SUtfXjptbFUAehDZud5VbS4koQh",
  "key12": "3vqrRJDNPnmeimnmXs4CKLCvJZBFtSskkNE1T2WNQH7F4HfmAmTPA8dgJQLi4XbmUTZ8aDVhCXZKYy3cMnvPSUUN",
  "key13": "5A9MgahBZY1VV9ALgEFekj2v5UJeLmyt8ACBMbaqZkRyrMjyoTahkZFyd5cBC88g6JTTxm6p3A15jMMCRFv64oj8",
  "key14": "2oN6y9Hnf3znm7Qza53jrJrMvkh2qX553ZpxQ9KNqfahEJ25PHizuTXHRkggsjeZwDyU5LBnptQmN6LPo8eernZP",
  "key15": "4J8daTQEKwNDELPXdiZpjFFfMvFPBnuoSi8mBtV7vxWUZwoesTKYSbd4oyw6oPtwbYn6yFc6L8sajtcvS9e2EW9o",
  "key16": "yey8vD5ooHogWtHTzFf5eeCXwrpJdGwwBUJGRKyYbBUkHVNxdazyKSBDMTfommsH2iGAowaXvWSxBqPvhdBi5gg",
  "key17": "5otkXsrsFqh7rHmtmsaSaFFNDVkFSV5s42bPZNPibAiZPdEnTjaAuqYz4YQcf8XfseVxLgph5WwqLD4o53btf6o7",
  "key18": "4xEzfhN8p7TH8xseQv8gAqrewRmErug85Y746Lm8BD6DjHQPg8YMBaZd5FFe2TB6WzLJxZ4hUWXG8PJwJ2dXAFyy",
  "key19": "2FwjD9RaVVgTTSNhU9jhbPyhWJkrXmidHe5XwXVZTXW38uGkNiPd9YNApGsgZ7cvZ9oGyTtdjrv6SwRQbcbKHEph",
  "key20": "4jC6Q8FXu7MWCTMed9cdH9DwpHpc4oiGV15rbuyX9dYCwcyG6hrZFDYfZmvbPK8Vfh8TQxudwpyxC51YP2bQoakS",
  "key21": "fsQVCxbcrQ92LySEAAxqqAMmYhzo9movchgtBRNA6KVpnrEL9e19vGjiwPzby4gCWpUDgMhQAUQtto25sgVfeXV",
  "key22": "4u8d31Vt2K2Lc5tye9V52Juy3snpRGNYCnJsaCoz5CmJkLvBGxPFxtLQk4epvsBeCN4on8XSvUBaqekVCBnuWtov",
  "key23": "3NY2zx2cDRaPCbmqoWBrH17RZNpeKQzULFWaMgA95j7Pa33Zyy1ptciyeDeRccTQirN5Ptm8LsNpijzoUkuLN839",
  "key24": "337Wbi2146cwi91iESobtQCPSqxm8DvgfZJTf7T6Gtdv3p1cBJUkQLf9cdwazcPaN317W3xyWe3Wsmz6uSaZjauD",
  "key25": "4sqLEDmGug9GGWJa9KqaTsZ6Y1S1P7xbXhLP2vJb5ThuHUxxUqQZrScegPSudyrVfmcFAJBmEN8ZYKWyou3cKUJ3",
  "key26": "CaZNKaS7c8bAk85PiTbzuZmkCfWUcfLZeGEaVyG1Bu9HP18z7en3cZhjknLP9PQw1wMS7iBYZesoos6rSry72sr",
  "key27": "2HyByZTTpf2TNxJW2tr2rb2wBSLGzkLKfHyajcBXiXwfhUxM2ecHdwNZNnGYn5fUteNXo4bcMX3seKUmTnbP5ZZ5",
  "key28": "4trk6V19pvwBazDGgoApeFd9z4HQcLWFata8bDvzYswgEeLBrrHX4Fteet8MmooxjNpbqmTCtKeGF8YJ8c3P1qKo",
  "key29": "2rpMshNMNujSgUDs77czfwiMFDxm2yhcxakZELcUDrtvgFChBa7jtqzD8CZaT4rAbpzfM2sVf8uusBcPmLougoTe",
  "key30": "2bHyMvGNZQ9yJuqC2bbnN3csrKyP5tUR2DeL7WAK6RPn26E1Ny1DKAvAWkrMj5odjy37vRpJG369V6crPs7a9Vcs",
  "key31": "52b8xHBbDpJgXWi5gD76c2MpwerKWztR9d7DAok34Z28m9zcMDuKtiVD3h9tZs67bf3Gu7vrWmiJtvH5UgghB5US",
  "key32": "23PDhmMBAQ8hxST57bvS1YFfa8J3WxUechS9MBDifDsFdjmSZgeZKAdEUyFFRaR1FP8Tj2acHwZv8LopxcNHkWyy",
  "key33": "2SJ1ixZ9ULUBKnCYB4d1SmRH24vwqBT1WvvRchhyGuhntA5Bvv9QA4cKt2hnE6aBM9wHCVu5dq13boe4q9gFX4nW",
  "key34": "2yfcrn5v9YskUZbhdXWoA8oNsbT6wbsir8fsEf9k9wt8APh3r9sZKNkj58US2MXHUibbcRkF6LLrGL3FFrrFJDyz",
  "key35": "3zKCadpwFsWybBovkeJifP2rnDA3hbq6gjhGNzb5LLsCV3pg3pXWeFesYWAiJ6FEM8CwN6ZbF8Wwvny2xx9pejkk",
  "key36": "45MDbnyAmoeg4Sc9tduSgV6KRecQ7mDa8pBDqC4L6Z91TLAj2T2JJfFM9b3CaD5VPs44jdmU78UUeWjNmP1gBPmm",
  "key37": "4sedWQzwoAqNqtRC82uKeUpiT5SAxvgvDjC3ChtjU6QvYxdpiBqANPLtE63Pc9YDptA4bsUxxCQGqCJavpryFYpH",
  "key38": "3q9M7ycXFUWs17XDkGsFW5QQfh6tmDX5eNTL77PUD4MctmAvc5Bp7AJnbCCmUknjsLdZko5yWkjNBrwQiDCHwwrh",
  "key39": "3dUkD9ZZxGUpxVVUd126mznQrdAmEk35iwryw5x59Eg2UnL8P6gLwDocc3rqzntFoT2Vk2MZUXxTvndo5SS6A649",
  "key40": "31XCWontGGMHrTD7WBYucgmWW7QwP8qwxQwaPQFLSZbtuqFuhTTStbwEhMFqXu3oPWj7fTkgjAD79XasB4T7J6nX",
  "key41": "4BbnxmqMm4nFkaNAktZNQL6WsV9F5BT8atofD2Tnjkofei4aw3LbnqAgBfEVw1YEvhkcKk7PVNeKigVPFPtdnqKL",
  "key42": "M3FggDCbastEKZcGm159SAJpLEVqP76DcfD8eKkC8cAeAch2srkyBvYGdWLEJaNYRyKGtNVvU1S9J4BbDdpPMb4",
  "key43": "3Ngu8MxFQaSUxzivq3YTgc8awLxkpCPsi7XxpnMhT6SVY2G7erE2zqZX5rAAE688WWSmx31Gd1Re233dCaUhGbEJ",
  "key44": "Jqtwaem6CQBzUwgcZnnGgFC29B7ME8DuNsWjjXLQpQppYCE5PwV9vJ7XsbQbtKto22qaZN8ZZsXVAGHdKLoH5Fv"
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
