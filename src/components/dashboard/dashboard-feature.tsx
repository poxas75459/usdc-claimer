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
    "3dgUdDLH2rUiVgbuUeWPYvvzUBBKgwmmRLAQFGweaHcfQkJV93pYfCLpSkkWs3LFCSB1SjehYymFYKaZbWenLQKf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MsVeeqsGCHa7sVvAGa1aasLtkMX9TVmqbq3syf4VjjeU1vUdTfc4TQGYeRF4smmyJySccWRi7URfx9qLbjVgfBw",
  "key1": "3jgjVSAoNZnx4KmHTPAX9dC7Lzf9ouKd5a9gYCzehvVF9VTNdkjfEaSiEdVDeY4kKBYBMtk8mAwyWQiZsMFyqCkH",
  "key2": "4Q6U6u9Nqx91Fn4nXPti5MkL5rwHgky9ojFMtChbn2vLhygbqVuJs97ZhLwCVCmBkA3hfSzrzJBkKLfKuemFVZ8T",
  "key3": "iKxh5T89o3Rm5d5tNTa96ZqptugmtFgDteawMZ4jrZfuiFALmpwdkchq5eGVr9enXSC9ejtRFMES18cgEtgnD6o",
  "key4": "2eAec4NJwkmTcsEdQzXxgD91hccMBQgBTzHXeGhGUywsmVG6kzwJd6YRWHvDyFNJZqMH2N4ssUpGAML9g6YW32nU",
  "key5": "2Go1GukdZR2J1vZmSS5EfMqQYwut8CJT4AjwXs3Q4jaF1qxKsujG2TnR7FSgEqWN1EBQrW7s2GmPyqniUorXiaLT",
  "key6": "5UN6MJc853w52ESro6GuTHSQMuKfzVQME1P7SYsTfQAy1Vtw9BcEazTs1AkEGEbMkxx1RJNTTfpLPJr932PFdymF",
  "key7": "24FBsVR9jg2u8FBpDHsMuKrVvkayeJMSH415FynW3ftk8FYCzPneJzgxHZPi33tyMn9QUpqUGUaCUF3PPxc4nWAZ",
  "key8": "5i8qT1svmytMUY9qTDjNPgoiH66xbUUC7bcdpKYuKtLBgsJj5iwtdsMj4QN3LvZrU7GS1ApTXpzwBSj38DUc73rF",
  "key9": "4USM4iTRVqB9hQvgZfe61wP5wUsyfMcYZkXapRM4VckCxKzKifGqT1VABQsgEKBQUJHswh57YNoKVkG7pj2iLcyP",
  "key10": "h7iuHsmmbyUhGWNAXBk4ebRzJ2rr8uyr4uidTyYwz1RC41A2Zd1BNzjqKkvP5jiLGsRZc7UnknPiumGEEhQ11em",
  "key11": "5dsLPvmjwsiARwFYgTuzwpoxpuBW6wFzHuDPa3WQPocmPU9biCjBwuf7g2cbWULy6ADy8VKdLQJfKn9nT81jBQzP",
  "key12": "3np7hWLvedYb3vF6XsQdZZDeejgbtT2LJ2JD7WW7cjSqhLbrF5WP1fsNGSNUwsjmtdJzEZBejN8KX5oj5Mh79JiL",
  "key13": "4wN8SmcShvpikyNKQ9AegnvXcQbqVbSVk8wC5K29XpBHZSLAvXCfdwPGitK5AyKi49LWzSG9KPY15NzU43gkw2jL",
  "key14": "4JYFt1Sih37BgjUDBPMwf3ycA3s6WJVJs7A5ThJ6Z1wGciuzW9FDxptwuDGDmbBxf6GnguZ9potteMtg7JoRmw7t",
  "key15": "2VpXA1a72F74V54ZuzrxiwLyL7DA6B2ddBzuQ658rpbR88ToePaQQJ6oAQhUYnhWbjuekGc7itHLzbKuhHoXDkBF",
  "key16": "5n2MHTJB7VNLjScBhXe8t6afDbAZYcujrRsddLYVoH2JK3dskytwBPnu5Y2SrpRk5YMzYGoxmZUBa7o6VQoixyVN",
  "key17": "2xSHWAWKj5ciAXEGZWgp2d5YxxyVTBpPwdki34Z5PKPeq3ZUjWcaWvCu4bUUWN5BkxMfLCvTEYA9WLz8tPgDwn5H",
  "key18": "3gEA9TnbDvM9pDXYYd5ZkxMDjPYJJeSafo6c3jL5vE8hLjGNgJBy5oSJU9FjFd2tEwTFHTFBKxj1Gbi4jHX2iCty",
  "key19": "2v3xLkVz2FBkBEaHJGV1f6WpbQs5x1ivnwQ8dD4mvFLL9X6arpSc2LEe1bFfzBohjgDQ93qm3RLsBT6kUG2zHUqC",
  "key20": "53i6GdZSEtXuFUS6pNLY4K78JFs3anQCP6UymjryQ13Jof33z7nDvBVP6Ua4SPiLD2rEm4LYUP832Rdm79Q313JB",
  "key21": "SdA3pevUgYmLaaMnNAmejhvDnGVT2jbRLPR1WPJiGLJ4nyq2qLTXvTKs5YXrrsXAw5DaXU9dgEXKJ3sjVF4yS9V",
  "key22": "5LDYHZ6hWqEdKEGtzA9YpjU7KaNNeY5tqmbmPHKcq5smsevMzNjc11aFfQZBneNTse1fWL166vQ5HMWjM2GedZaS",
  "key23": "4FAX41pLY4XAck642xdcXcadBdc6UMV18iV7x45hCLNgS4pf1EWrCvtVjQ1fhaEXK9mhzfDSMAtk9n8xNkBFT65c",
  "key24": "9oTbKrg3uCjY3hPV1khGx1mV8wjtwEK9H73oPVEddFmnVZhY1ZG4STqcb4JayiigaZhTBsN15dnw8HVY9aN1rWh",
  "key25": "4jrMTggzTGdG7G2QMiwWmNLLbGY6GnUuy26u3PhhP7HoNuuozk7E7T2jwd4fmPTCCCG81869THKCicoSR1JCM6PT",
  "key26": "3C7ooV9ccntAaQLpQB1KNU1m38buGBvfT99MCKU2jnw5AGZVjTyh6DDDjvp9Lw5Wbe8GNvY2VimTY4hxU2kevuot",
  "key27": "364KnGKAf6wymuGZjAxNCMGnrANi5HjPQRejgkeWqesQUKsWgj5jGxw6CBF618CrKSzz2NwtjSz8zCV1zDHSV3Lg",
  "key28": "42CSZJgRJL3h6AhGsyynHhu8sQ1iFpB5gmUuqrzECb2xpBXbXWF6gsimZ9t6kksryAiduWd1HoAF4XaKMjjwnjpT",
  "key29": "443zPSAfRECL2aq5vUya52PPJ9om6fPU5NR2KrBERK8KmeGLyJRiuBQktn7hQQVG5eXpvp5rC4rv7384vEyfD9Xc",
  "key30": "3Fj5PR3cchojMUDifjFLoB7FNZztckinkXy8p91rSuTuyLRadJx3UgkDrGLANKwERwkuUs6tk43xaSSzLp2bh3PA",
  "key31": "2PtWb1TsMzhTMkzxrXTQmfJoS75jEJ6GHBRxkPwr8NNaen5tJQiQvsWJo5A3XRNowNHgemzfErguYjCZVuUHDtPZ",
  "key32": "3PsnaV42Ge7rqUCbGyB2tmCLeZnJtxAWYfNKcfp9V3VWCBPqp3HeARMAK3aAPy2xTNAaBnXTRbe5VzgqPcdQ5Ycu"
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
