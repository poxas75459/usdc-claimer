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
    "26WSX6n5LRxENSDjfz77D2i8AsgMZjyF6einzGuVKonjkoiQTqJ6kak1ZLiXPZexkg4jqm372c4pT6H7cJFri3GQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xnNHeeY3nxs7KKXAwNxtYZntcy4zik33GWVP3sTLDsT6g99w5Sf28BABHNKLdckQuvNgdLr5sDBvp1TSyjUvbXU",
  "key1": "4QB3sYzEzrNAB5nKygu3VUNEcNck8KcmVUwLzPbhKvK4qMb46JvgW9hfbH43Y2kCdjgZvbiUNK5cEbYawE1HG6QG",
  "key2": "BZ8B1XQLFQKH545BWqBn4XZ2NX4rMkKNwAoQL27wC6iyNMZBQdkW5P5gXwDKw89LA5VxTY4ysv2K2vsZeQPkohc",
  "key3": "23PGNE9kV8GPD8cFYg7mCKXaZgT2twgNpPmWCBccLzp33HVnu7txNFbLfaBWcLBjupDWoFP3MU3JvWBKxiGvLDqd",
  "key4": "5LhPQnCSa7PgKrTHaGu3uzwZjF2BXJEnh12wWZ95Pmn82vxD7jfogdhpNQaAYSTyCrSvNBDmhhuZUFDpxDNSiQiX",
  "key5": "5xVpxvL6XbfDQVaoF6Kyk9GjZzRNKtszSUkip1U9WQx9WKFdvj6p4jnzCFfToQYKVr8xWJgMoPvVeQPC95er54hS",
  "key6": "2DGxZxgGeM28P9qHyRvLHTjrN4722ogjZh82QabMV6uPTMDB55SLdkATyCBYbCZVskbFkAcQ8drMCK2kAhDEWF5M",
  "key7": "5MZSTDSWcXi4ynxx3opxqRQ4VdiACj2KvP67E5cL9eFF9fKfHeghqqunLz5bCSzq1tTEDurHjQJDa8Luu2xAchQn",
  "key8": "2pb7phNXYpthhrrYtDas5YdeMEkVhPn9zwWZfSTawLfRYzC4JA1LiDCybR6EmtpFuTk91ALTEeDc4o1uxSXtvT5V",
  "key9": "5oJxvDhrtUFynfqBtk3PJvqfiqrjmJhGiSb1AfT3H1wyUuYoPWUY9jHyc3Z4nKb5RkJgmWH3ejHfG9QHtsEmXeC4",
  "key10": "2cf7JMpEoeV3UxC7GjqS5XaQSUriPvJuH5dKJdPRqPaQ4mUYuw9a73mAF4CyuSoAQ5x5bcK3kd5S9umcdUPqnuTi",
  "key11": "2E6Z5BKMDqR2MpK9GVBiv8ow3c87UQtQEpKMeasFVHH2yXHZbLNwyGasauc5r9X293wCQm7NwVWH1xbUPJEodqxd",
  "key12": "5Fpa6wieSYyLCdBUXise6pCdv5jEF4NfAZZKNfiQiyYw1uJTkfKH1CGJVy4YLfEsSnrfYTg5nKGohz1jaqYapkU6",
  "key13": "5rjdKVJUKc6frCfCSxrffjHF69JvFDKkfyKUiWsih9yjNHhtcAVJEY68Jd4EPgeaQFeigjttNsrgQJxZAdE8FVox",
  "key14": "3FxeLh8okd4vSGeq3LZGw81rwGvttrwBPGXmRtJD5EzuZ4a9igK8ZNZ8GSU7XvqGjqMS7xfKFsFDVyfqU9SiaY1W",
  "key15": "f2YJDUTzTEKRNhYF2xd5Zsuq9uoqqQA5SLvTM6vdUsTvzAeMBkC7XWNE3jdYbnyx7LKuurT9SworVT6N7iDMBhS",
  "key16": "uvw7LyTjwP6RftbbQAy8ZehsAixZWg1QAQyRfohUmyVWW7BdZ1vofL9hXHXxmwksAZgJ6tMuATxTXkSo7ETwY16",
  "key17": "5d5GbmhMBXmtMt6n3xW6JY1ewzPB2HZNACf7PpRpywLhXwEBog3qJKfJ12jgEoGwx4Hjk8xFsracZk6TQ9UWgUPn",
  "key18": "3B9odABH5Y6ggbJv69asgq3kTHtLtT6khcQxjumjZePYxYtA9oMZ1aQRyW1T3EmmaxADPHv4bBCRAkpymxvbf9CC",
  "key19": "49ETrxTeTGEBxiwUWAa84REVurJTcM3QAiMwEFuw3zPXeaZkhd9CtfScKBygzCbAesEpGqyM9hqppU927PnF8GEh",
  "key20": "2RbV1vogX3sjJyuAV1zQQQAmAfpj1FuUMdVrWaQiUw2YRxnpgWnGPviijT6ULsvp8fHxzxcmqtmqsxWD75Lb6GWV",
  "key21": "5wqgosRp5dwyrGi7oTNqAmENs27ZY9Q4ZLnrfcurFn5QHEq6Y53SAgehV2hWPUGKb4Qe595AkP5Ste8jWp8hheAn",
  "key22": "2SZodXwg8oshGcJrWqyAZF1LDERFUPwFaRAe6pWSomUA1qH6jLMEDVfVNv3YUtHcmKzwK4z6P4oq7g5xMMBSXGRz",
  "key23": "4ynnC9EBW1DZ1TVtDr3v9ddDgHs7ybTvZkMk5FwH2pJVqTJ9tcjXtDVLe2ekxqHp3J1zXfin35Xgm25LZGwGq8Ph",
  "key24": "3EKrfnJddh7Mh2bq6aYemE8GxPmLTn55pobqhYQu4PyL9tzseh3egoary2hikNQsPvhBc6dJgZ9UmRZWYruKFoka",
  "key25": "AGhNi9BgLHiu88uhdYASVAvavpAMCsKygiLk1X9y8Abxx7cXQuGwSRpLr3Lxwt7XtrjccUjRwXzaABjsGcc97oj",
  "key26": "dB4y9ZGFfGm42VtJuf1cAQyQxTf2tLBhh9bbriCkETYCcafLfb9QBmnfriRrnajVVQsy7FnenmnZGRDyrsPKDMa",
  "key27": "3ZuzPiMEwHR1qWy94UTF4KhENQ3wXr5qspx2qbXCfDwXG7GkYn3a48L8q3ApF7kZG4MeMNhGgHeZis8FDZRM46fZ",
  "key28": "2kwfHD1QTsJdNqAzZHksRZHhKTpqqBzowaaN55dTpmTk4PNmpCvkqHw115jF6iohnFD1SYAG5UwCEDeyVcdmm47N",
  "key29": "5korGS2cE7dZuYo7A7eVztjA8XfixZdSRuFMQA1Ng6fQnDS3s9zeE9bnCLfw1DPSXfH4p3vp4ndLQ7fLaVwj9oXS",
  "key30": "39mj1tLxKxTSa3iQnJQssgnZhB4261Bp1S4wuTF4QUFfCQ8GUQDNLQ6XKWHEs4jMvBjkuJQnzZxZvTQYKHiJ2DLo",
  "key31": "5S4z1rRSh2FCnEs8r8Km5RQcmgUysgpmyWFJaYvKQGotTXmPrbwaempS4rYqRQyZ1gqyFRrb7pDc1rTwd57yprzc",
  "key32": "mDWWeHJxbbndSCkX72Gk6nKsSCqznntypqReqkMHoE1wL4vZFvseUto5E9CedDQWb6GUiF6JQUzhFLgmqAZYNow",
  "key33": "377E7GMmXUujtfAaWDzSs23c5ynnoE8vNxcC8YmLAqW7YRuxPVZBWbhJqq8pmuh8yxSEjsEFEurFx7Pb9KiPZTnn",
  "key34": "4JGjejJdbARkNVqnBD2VHoDMdDPGLkqrEFuTiTrPzR2mGymo9TEKkocaijL8KGCTc152BBgsfX3BPRrZhJinzqir",
  "key35": "N7eFb7nei4srH9y53DovU1n4h7XoDN7qXhBer3fegFK8SMjVpXdHPEeSqiQW3Tzw2uhm3QP7qMninoEVASnkHtM",
  "key36": "vADyNVh18EZQ4QAHkGXno7GkxgXT9ophBCwDwHBNhdYjduHuZSiu5XCdsNVgUm5DrzVb811CvTejunNvH8BgqQx",
  "key37": "3DStW3Vy43ve9yaLgkBXzSHkNmTyiN71VDVC7ARGaCxVa64YxEmJ2M6JsLoXFpayE8jugddfo1WhQnN4uFzQR9DR",
  "key38": "usj3q775AoJxPE7mzH8pibdKNq4D55WTz3Amo3C572gFAQKau8vA6YBD5nWLKf6vrQRi1g8vjNTJfxnL3bazp8U",
  "key39": "4kYfiFSVGfSzj3bQDaw2kgij2woLAaGPEbu3ytxwajQW6T5RLBkBiUTdq9mnVayBdqcMUJ3tzuFkhwvjXvT6ebgB",
  "key40": "645CipU6gvTYvSAkye6TS9n4mGNsTFXNqRgp16vjL2efuFPjYGgbniVXma2S4YMy7xM8jpyBxTk7RKck41WFkXrg",
  "key41": "QAY9rVXHRpEwrg8CGWmcMekaukXY8hdGG6c4a46iQ2MJnnAPhuDKa4PxPgKYGGkstTDt5K2WDpqXHxT1iiXVGJi",
  "key42": "i5uSXF6nPZtbAmMuP9cFBYNDpHM4aUXVLKzR2uupR5DDRvpe8iqA4QjWEFk3tL9E85GWz72BRTtBfLZYcNA2Y4Z",
  "key43": "5YjuMaAPUNAWHuQxRyyAvADPRsm6i6v7BvYBBbcm14RX4Jsz7tHzZL5BT7AcGRDSHpF1Byi9NzKbdBkyebnWCrcj",
  "key44": "5bVJTrSJ56DtRi2knPpTGvZy9BzXwQVixUvx5svz5J6LHCwTHN8nSape4BRLPd2rhp6GXqvitzhHSRp3yr7o2Xt8",
  "key45": "5UoVU7FKmWdrbYqAkgg9ZCwu1V8Pf2H6YWAQCGueB8aRb6xWzbhgNDdbBbNjuEZ3uNkbpx4yT2SLDV3KVT4Xdzm6",
  "key46": "2cY4HaeJsHXxesuTR4FQUJ7GVN9QoQe7gYnEkEaFCYhPXo8ht6jLAdyfZ2uy4Tvp4a9opX3JKzHHpYSpr5mqFp7X",
  "key47": "5ojkTpsitMFyFhQH7LdogfGEzdzVRedxytkcKojcpnK7Zv2UmAQ1ABDXRsVG4iptNrPFstPZX5eydcj5iLA7gWAi"
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
