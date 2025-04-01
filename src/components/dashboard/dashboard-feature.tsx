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
    "3aQCEYcYTqHRap5YKDL6qsXyYmEkyMv38sJwatbYMixMzqhKHM6Wk9inJYHhqYDpwrzDkEjkbpAFygaPQP9y82Cs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UZTZGmDbVp6PN1XkheSiGvTAcQ5ABbc8YzwFwD5AyiLgu6ccnkNSLGV97NaNDgBaEHLhkN2AjkhFUEnm2QHcQi5",
  "key1": "53KWDqsJRnbiGWQ8euZ7xTN55owgxDQGJ9pNauJ9g1L2PKYPpGfdg7wuuj5c8Y58y3JxrUX3rnDnmu7pT33T7kv8",
  "key2": "55iPqBuAxrnemnjfedFSriDugURhR2HesEfTnANGKkGiAo3CvRsbMe9DwXVLQUJWBgJjcN1axCvsWGeQtvQGwBC4",
  "key3": "3kQmw62Lvbuhb7Xv6jmK8nKQwzmoaAArUMMKk65FYDPS1zDs4aXcgpaxgNVZfsxd88VgY5ctp4y14ew6VFq9wizt",
  "key4": "5LM4hYdovwJ9fD9rPrg9roDhq9ZSofZwka3sSTNXr39x9Xuw9W8mrBVE1qtLqwJsbGXqwX4KXyPVkVs2xssNguS",
  "key5": "5jhtL65VdF16Vhstp28AQsRFECmbWiFwL9WBZFvq2L3YMAaxZnibPuQmDe64nRTbg3t9K4k1Jkj85L5PAJFEWhYB",
  "key6": "w3bhpMH4xXWDVkBsFvXt4EnesrQCJ2nwz5LN8EPgBeCShy2Z3hBHVdMKJWzfpMykDiZS1Hju9KhqTttKUwDaKqw",
  "key7": "2deuKQu5mY12SeW82fDkBWY2qS7W6u6iJuLJx7E42Yhbd8zKxAy7QwN6VvKVJ2efEUmh51iLawBnVw2xwdt1LuBn",
  "key8": "5TQS7iHRHRu9aBDbSLyQ8fkwkq4cK1b3N5eXumFr6qrypQMcizbns16SdGZMGrjBKBbnnS4NMK9CwnJvGDBNtKAR",
  "key9": "2oPYqvLPsD4MAfngPDqsvwPWsxgkgnLzqydvpgnuyPRxgfwr8RphyDopAcYgAdowbbx9Zk5zs9zaqao43DafphCz",
  "key10": "4XUv17ry9jiGPsreEt8NWz4QTLJ8XjrktGRU9pKbLgvg9RAyfRecAWCrd8sUZwuWhxAUWe7ZbtnA7fwAkbbDiN85",
  "key11": "2Fb9KR8SzXraNXdHneQLdZtfW7LGnYed69FCz1BVRJS6vNZNF9nw4idYkr9pmRxxvyYimPmzXmwM6z3TxM7k5C7r",
  "key12": "GiKwttGf1TtYVYUyCvJGsMVyRo31BNuFhU83NdQCMuTuyfsRpT45dgdTyuxKjJTW6VZ5wV1pBU6DKKaJ7UbwvWP",
  "key13": "2pcfy9tnLgZ7yxcgc28X57jALSbBxdkrLECknehEXEeMFETBQwfiVWkb8raFGNMBCC3XA444bSpNFzepi2tXKjGL",
  "key14": "3eTqyRdLV9dCvnm7EEWzpyWjZm89K782Y1cG7pLRWqgq4asBWePbQ5FydoBuaYBzv6A26te9yJobW69jnsYiJExo",
  "key15": "jN2V7yUZLyg4ehzkHm2i9iFFc9GELK9GPxUa7D2PSAp2SRXugXUAQuUsJnmpqAFuKazeErHs6ggAL1Tg1t6ZEcb",
  "key16": "41q43oFwdesfB5BpZweUeHBtpYTQhdim2xx3RBw47p4QDmxy1tFeXCrCX6nBvjXvyxtzbUAcWftxdp7S6DKjRMTj",
  "key17": "62rWHAiq438LXt2KgPfvSViwPYqkNibHb7vEwSgebWpfR5yvw7bmhvZjwYUV4NsnWorgYKbNK2MdhJ68BMArz4QQ",
  "key18": "4VNFbhAY2gPyyrHKbr57YSu27DkpTvDuViyEZkkVQQY3n2phedz2ssYXvuq4GrFWsbQ4e4pMA7oCWYrNxqDp2Tjp",
  "key19": "48AwVr8J1RTkavmw2C9XRHxFPLYVuPL23Jip2PzgW9NgsQS13xhfWnSuvTCWrXnjwTHoq8NCpakeUgV6sRsWVvnQ",
  "key20": "3PfQ5yiwt76eoS9M3fsy5PenzW1sjeJ8QTiRTDRzfYPMWSKUfG1EQpc4LnB2xHbjRtVv6R7L2bSmyWtFCywqkqRn",
  "key21": "24qd3JvGir49WRhZ6oiyxgFMvqLkXhmDTczLRa9wqxWeToTGYaNshauf42QMUTpjyL7taYS9aQomKbKvTB5VxKDt",
  "key22": "4LjveawQDFcu1SKKZHvsaFRBzVrsKZYy8YDYgjrPyd5NSGcrVkfQE5zGuu5KSbej3EbfZJJ89TsN4fHZksf6XCB7",
  "key23": "5HiLSqtBDS535LtDE23sUoJ1VzYjBCxMQVpRkH7FKQZpAUCY99PYA4EuME42B9gJgQQm5fkNKgLVYBmN1GdZQsAi",
  "key24": "67SEUXJQxcqWaCf6brFF81JJ9JJa2eoiSNb6VvuxiWy8vg8eshvumRAgjVDf7HKFUx8xbCj1L7Y9W2pfgNccHS9H",
  "key25": "4xkd56YdietVEAQzwKMhQanHRSHzhWobgTtMqDGuWkkSNBEDsistKFtppmQkykRbZqG2YNKquJMw2drRYDsvcnvU",
  "key26": "39Q9y215cgZTBna8LoUijNtPcnP7C1u7k1sSyhYpKiykpp6XgStnqzJvKBG1eSiGQeCXmqJXABtbkYkwcVw2KQMc",
  "key27": "4KSsVC6PNvZBgq29iQGmxzty6MVBeofnFFmK6QSeRkK2Guwrc9iZSQuscSjxYQuCv7E1Va7MQ3VHFS2UfnJEAggW",
  "key28": "2aHxcbU2LwmW1EP4FzPNgeC1FQyB5FQkgNDWMtZjYz5Tzqq9EMo2pFtBLqP24ztEjH3MyJdwCPQXWD4LNri9Yyyg",
  "key29": "C4JnK3MJtn9xpW2DAsayVrsz9Fy22fqFojwPyUdKhW2X35DvpmdV36FJfZNsF9MvQ4nE8PMH6jS2rUTnd5ygJs2",
  "key30": "2GJ31917jjrCxKJMM2VTh6TuASH1qT8ytZkhKB9K9NQ9HezPTp3co1Cd7dHuxk5Y1o8AB78zsA5mWVdmi7dMyK1g",
  "key31": "2w9aBydnQP8pS7j6UwByTGpy68Xc1UNpug6xXpnzRKpURtiargN78aMWr7MSPLabHjrckQyosyDPFS5zd41XChQM",
  "key32": "meJ3sBtvUaqjmr8ZqgrCXXMCn16MxashcizZjQanrvxyTJMVXhix6ERf4d33QdeTXMhhafCSMwV6P9t3gHHFhys",
  "key33": "5Lce5DnNDoVsPrzjbkZf49FWv38AjAH5pzrApRYfbwETPKZ1wkS9PuHc6eGrEiKWmY6DCLAUrjgbQYUeB2Kyq6dM",
  "key34": "3CLjTWkd52xMH71af2cHzmykhjkLUcYjzCJTeRVLuj7LbVWgA6p9oY83naKGXs5theky9aLVXpc1xjq7wKTw7m5t",
  "key35": "4j5HELh53WEubiDXnxy2WaJ3H6jDKnYe8BPEwZME3DZFPXEuLVkmQrxwGxsPrGY8joXCtuXQzsiTjwacGghxWwAS",
  "key36": "3x7DyjEb2d17nozHDGDnepMkNfTtPM79pWwGcakFYHo4kPCFDQqfRp2SwHYkNG5kUV6nti2h12Cz1BT71CeahJof",
  "key37": "5fhLkDxmWFpfERS1Q8HG4W29JHvVttqNgZu17CrTwwr247NX19F3xaQJyusY72mA6rFqdH5B4Y9e95Acp1NaWay1",
  "key38": "3P5Ko6BVrMJzfxXcrhQRhF6r9QLSHHmwrHmT4ARpxnR4eopHFLhBtXDZShCany1Z2NixmVNXqgv58p25hcSiSECV",
  "key39": "3WKhy5Uigm3LTyNgqAt6ogNgLQy9GvxuVyGxr1BYkESCfXT4c9dYVtdGYCHg1C5h4DSdx7DJypRk8ngwrq9n9d9K",
  "key40": "2xgHCoy8DcJq4UepS5tXFhkPwXM3KcY6akDLQuuqy7khUHSzYBL7eJVDkLmXASLM39fGq4QevQ4dm9qWSWCKKxrf",
  "key41": "ZThaxxhENA3zE6Qom2K4jEGBSSsN6P5kNMCtGgmDxyNTo4vwqNGHUvzdNXueDo8U5BDSDAG2tff477BXdLTeZ3F"
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
