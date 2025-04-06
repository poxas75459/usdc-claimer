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
    "27ykmr86C5s56PxyD9ZQYEAC1qXhKYdFmBYrahqB9XFKyex97FQYMijjQq2RkCD8r8HpjQ1okhHEKNYKjyok8w2H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5b7D4X94C81CCKaHhwZyHxdTfXSzPhUJ3ZZLRKAGSeYyx1NGbyUxWrv5M8EYwJR6z4EC8p95oqiZvqc9xvXqzbpa",
  "key1": "5Hh4N9dMt53oWjCrKfRv32DgrnpACqHrZPqmb14dvZjFX3DWQm4eBHMGJ3kdE2owBbXjrt8NaiYbsjNFsASrraL9",
  "key2": "3yDKqK91hFmgSFLYpoJ8CFqaZGs9vxCcBhL6hi7DLF275Bebyg27kXJ7nggeiKqpfSCjpa3hEWqX7RTTvoRQY41Q",
  "key3": "3vBCGF9ySEiWpah8voL7qCSyb7Z6nHCSjTMmqr6X5Fj3hgVxzQeXPo43hAuBxofCxkzb2kaob2HLFtZbJzfmMuz4",
  "key4": "4gTHg1sdqD6F3wTyy9YyNSUy9ZAHCSYmnQb5UCNgzsBsvrYFfYNgjHxKbDsDE4tonRpvCpitFR9GZhTnbJin8mUX",
  "key5": "3XKYPvgEPrndnTvj9X3ioZxDQQxrB6yM5SNxgqs5BPnYo8ccefHpHsi2izjTBCPzRovtN7ak2w7mmjCF1ZzR8Q2d",
  "key6": "4Czj5uLAFitHv99wQJFRpwkdvgFne5fTZcahjUwwe6etQymnBZBrYrALANrw7xArxP2krN7Wwa7jrUcpPbm6gWBe",
  "key7": "5S2DeVwnKwJv5dMRKsWUt6Wsehtd422qoPhMRYi6EnxsKvh16NLVzfCX6HsXmPgAiTSgcEnNKHX3MZtAFCzWerqD",
  "key8": "33jPY2MGyJ1aB7xWJ88PGmoUPv3K3nh5cFnN3fbUpLct5YYhAt9xoL7dzAWciNQn1mChNzcCZUtHRG18TkUa6YBG",
  "key9": "2cpUA1woKsx1zJkfwxh51ucUVkS8dMeVqbtAL9PtjsPywfsaTmDnDkRLtV9QazdAXeYPMFzTvgnTmUXn4BP5dza",
  "key10": "4UwY2NKSUHJgHZFfkxsWrUHjsKf2VofASXbaU5DeB5uV1sRmY6yeGy1f95Ke5pBXPA6DMfqU6oSUd11KKBxUbu3X",
  "key11": "4H52vKZ5dNT6eAaaqh1DCHvXAscVkRa4W2FmpzjZDnQGHferJkU2AevYuvE7DJMBeuHzXqS8gXyJeDfEj2dTZAA8",
  "key12": "61AjEaRJ1QDAtFCTs9JdvahNh3MvbrzUd6KL43RLNt54ZdvCabncU27ZZDHVqaQDbHUWnJdJjGf9cZdaKLa7SwCj",
  "key13": "3cETsYtAuRTFxN8THCV2dGzg3itFwGAgBaH2eBr43pjgzytS56AbNdRYu2gHqYrdz8XGwQzCeY2HhK7TxeShNsep",
  "key14": "4F9xRirqva86D5CdYzSC5rJMguMrbji3bNk9H5CbRZAS7MLG7cCqSXDbTKMc9v6duoiEqQv4eJZqta27BYxbU13M",
  "key15": "4NYfp2Y6zKnoT7ewRF7YSNxaYYWLMvBkD6c7ac9dEdpXi8QBPo6eH3tS7xtLhRj4x6dXiE72kDZAncXLp5DRcki9",
  "key16": "4GrGEetY52cX6PYkRuMwNvFZDv9cTtuAsXfoU3PSqhctYVoh3Z9NB539y7AofTEZ3vWMP2pFjyGWmWUV1R48dUdM",
  "key17": "3DopZiPBabUM34UYS23aPnBHnX7AgwKB9jsLJuU7HerrdWJiWtQzmibD8eXYAueooWreSXDt91VixkfdW7t4A5vU",
  "key18": "5PgFeZcNmPiBmSgzWF2BpoVLmRjSkhvwZURG3CWLu1yNhi9ej7WSp1acReQkkuX8C4MUXm29AnK3sjc7NqKKLhyv",
  "key19": "sVfLoV31CKUy4SoLwV5MDD6GrhmaBUVf4QY8yrWzQQ6iRMgGRMjfESWEwbfYB3WDreaRAtkrizijiVy3Y5Xh9PE",
  "key20": "3Z8g5xHnzh8pY7Bdsrrci9LqE79umLHNXbc8ECpGWwys6kiJYEDeTdh9XRNJjLb7TAHkf3mPR4rQqQjyQiTNFkuG",
  "key21": "hxuMUrhFNj2mRNzFy2g7DQ6iT1y619MyY6QqygQZj32FmiHv7L2Vnnv6YJ87MTvyQwidcV6A8uniuwHLQkJpchG",
  "key22": "2fJPgzbW8cVWF8BWfHZGoMwXpKEq9SRmQhyD5B2n4dg2NoPN8khxVYS6CTAj2p4uTzx1ifesPrzMZCutStQJad4c",
  "key23": "bAp4692H4QaMuLKNBcQLmga8J7Cf8HtW7tRNZ7w1zqXXAhSvZWZqNrEn2MDXM828rUcSijQzjrgTcEXmnad2Kvf",
  "key24": "5jPhcW8ZC3c3eHg6q7SPRM71v4PcVM3Dzyv5T5pAaaxJGMnsd2aYYysZSTbBraq6A7vGS8PxJefxos1HhHrqq5BM",
  "key25": "3DLzS92cqwTBEPufUFKX6bWYhQkQdmtmEAo9vLt48rVG2C6EJtF7suPTk9n9d8vHKM3sTJt1qfUhLVUcvZ28E5RV",
  "key26": "3fgnYC6CXRJtSJD74a2PWbFR5mpnQbDYPEDJroXStv2pqUU8vdP1GvKpfcuoS7ZFjrQs3nxz5GjK9bLDo2v2tH75",
  "key27": "46V13dgr2JJ9z91rsAWrXP5gvGMTmjiaLotB7VStJkqm5sXz5bbF7uFGJfPzDjbbydvh3VmHSjdUmVto7jib5KCS",
  "key28": "5Q1tPcbR9MAKsiYGs3DYk8T9gfWJtFaVX8au9VGaeubo4MY9CMDx9oFye163aAuHjKQqD1J2btv4Lt5LdzDFA8cT",
  "key29": "3JEnD1HFLkU7AsTaTt6V2r3mN72zY84vBbyCB9pJkwb9BH91njaKhgXRXoU8RwfhwjonGh1mrsC1YrMPoosAKBA1",
  "key30": "NvCCN9rbU94rubaryL1kgSR3MF1CsVyZBbg5YTqinmTUf4LUnX73WyR9dgucCkJLowohMtobq1X4DkSQWXM6jL4",
  "key31": "2c4CH1uEVrv47HSg9pgcKtD5wAqCpo2qUtyg6KfK71NT84peBt7jsDtSZMLGj3vraU4qRwEGbK2CJTajzrvSBsZ",
  "key32": "cW8XcUE1PhnsJhqtZ5AcpXMq2aXYKb5FfJrmBwj75bxMp5zFpWmJ6XUAu5tk3cmt4hb2rpwPRBnsnP3gnJpBUCd",
  "key33": "3HrJ7JHw9vFa6AKnjEvG3FRjHj2kTqUjBWbMgnqVf5tm4hB5P927i6qy7aQoVkxxrsvhC1hMfKY5kiSoPwc1KjK9",
  "key34": "4kP4VUHREgt6Fc8eqSUoSvY8ffbfogC7syE9Dpgdpsrn1XnavsEtp9j2YMHJi8utLCxrzJacwzfbAtgsaqzFwX6P",
  "key35": "473snQFAhgPxHJkfbGDojYF4ErEprveXc9kzxdvssienogvwQYPt5wqLTVYta9wwtsrrpQWAP2gUtGfb5NaQSnBi",
  "key36": "gcppBQPvU19ucc5234QNZ95vngUobfVobdjaJWvXLEtcks2jPWpoR83eizEUJ6S4ieraJYe5TBBMVxxKc3fFADc",
  "key37": "5HsuzdP21CkMvoay5hcGabSNAaML6KA31vdyUhiMon8gDiDvP4z8aNuS5hg7dqSQ8JePTAxXQ59yobm6ydh4QMJv",
  "key38": "3Ntfg5zHTG6F1n5jwRZ9wvVf6sDc3cWHa2x6uFhyRjnZZevpHXbLnxt87NQf9i8gxSAwoyHDr41xyTSr9pMe8W2D",
  "key39": "2rKtUUzS6TzdeoS8Y5w4HTJ1DaCSmLRmBw2fpd4ZH9wFykoYPwaepggFh97DSSqEzuW3szFkCdwgHM9R3YPgWmfw"
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
