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
    "6S7Zub5EpGPD4Ap6vNMBPHfNBjsSFiQUaEdojNoKjdqEY9VnNcnLZe5JjsayvdfiBKgAKvFcbtyfyE4HdKYV3jY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hxcrdxCiX5V4t5kpzLHis2nubwEkKTZEcBwEfYWhYfvkHwrfC9K1sHj8uEyZSLdzQRcPPhSb4mW8NjthDnofk2z",
  "key1": "2eQMV3aC6ZhGNbUr2NGRRvuaH4bniefz3P1ytJpDx2pTcyrc82F48gzVwqvydDG5vGRQjnHLEt26dgg2tHpU8KXN",
  "key2": "5jES7LVJwAW9mKRfvagtPjgyrnshsjyavoKw2nENQ6bmuK3xQwFjtVrjMjzhNBzKSYEJzwKg9X8pu65qdbNn95dU",
  "key3": "614kCKK42iSdmz5yvTHFLzdK7v8nBfBTEfmom3xCpYmTjQgrfEngPoispsLyEovR1Tje555pjvSbGAvTvFWAMRoY",
  "key4": "2B7FdSeqLEXAJidBxvRLRRknjiEzCaSxM198tE8UN49mW47zMDn3pjW7BG2RBTLsvAT3giHAHVfC5keNkKEuEeG2",
  "key5": "3e8bw9QkJdd4xGKaN4KrWjuVWQpgomTKXMtabvvtpeduPX4YPK79y5SHihXEHrfqVDbccVSnY98h3s5bAubiqcJf",
  "key6": "2Z7NQQj7g8aj1sSTmA2XqQbecKNQMVqdF3NSihwcPRpLMYxA2Y6ks4ywQuC7pqfKAyYy9J9VXehDnsGwNQmKtcKF",
  "key7": "4PbXGS3tGFPf5zawDFGqzoJZY185w1sZ6EdK1rC33ing2CRw6VqyDm3q1xS5YSuNwGkQbHuVTtEDuMn59TMPq3ZT",
  "key8": "3DxVnmBf65wzJSHi1DqeZyGzNQWTVKvB831kmMDJyvRURQ6bhL1dtaBn6wYoJczyJp2woqDGvnxbYjz2M19LUBcd",
  "key9": "4K22ycjYHEUz4LZyfd3WdRFg6fGAVHRvYzAdGCx4p7cKeSieVDJbvpXNr2XHBoBKZciGP8Js1W2q7Ai4hv9cKn5s",
  "key10": "3gdvDo9btjXUSQ3k2tffLkMWQGe99QXepvBuHp4E2xn1EjxuGeBBJjzviRHSPhSZCsgXkyukq9TkeyaJu4iqKfcR",
  "key11": "qbNRQ294sNGpKiEprfcwTxF3CtuV2p2qkkrPp3pmTephgyb7zFTmz5hzxMrqv4sd34XkjorFjfvBxj7zhnCYRMy",
  "key12": "5BNrvxjFTqHbUHgVNKbudkJAA1rWLi9Wn3TsWEvuLWg5Cv7RTcPonLXwduXT4B3WbBYMV4d2Z4BQBtZTzkHozvzi",
  "key13": "22GjvqGybtnUNx5GgeK1UnY4NpS3DdKhRy9LwzXWmrDERoYhucNZHMo1wFCUkwfhAFDT72C5XLTK2KP9aKo3jNDo",
  "key14": "5rFiSRX38MBk1YaESqNp8YjracCTLg5F4xS3AdqXYS9J6ghJ1nZt8xWWd92ZGTM9FgDgZC5cc5eXdp6CtsVuMgYT",
  "key15": "4YXLwAcWkAToR4TZiFWQuMW2oh2GNaRxcNPBMPY2ddyaVfWSSnk8pEKX9ybmo2qomYce6qpLosVsg5itBAsuuN5V",
  "key16": "3ooreHwEEVaoZdgYRuXFLj8jqjGgC9C1zvw848ad4yVYE6NAkq5rr7Q6e7HWfPywNhR5cFto2amNRWg5x4S2jQhS",
  "key17": "4SL9QDeTCFTaCWfNmDbjkNnM8kqeKiG2KpKYdi4wLRWKJBCaQeTykh1zVXayTfiRf3kSAprtSzhs81XRURxhrV1S",
  "key18": "4M4Bygz2BZyJyTctX2zqzCY1m1CDny8QD5Dby5b6wR9WuJd52G9inBfdZbQjt5KXZCVQK6QRPbtNkjoRqyatvBaJ",
  "key19": "3yBM28rhdsdhPisFT7ns8d5pLBjcMAHFHBBwPt4Et5xHdv3r8fKYCaRM3BwSW2DAQ5Ac8PrPAPX8zATvKGj7owB7",
  "key20": "4mb1M4912SS4BRfNPjnV1eX9cAQZTXT9B7RX9YJG1V7WvCAzVa1QC2fpVC6JSWaQiwunhhma2N8K4rYD84tT8i2K",
  "key21": "4cZaeR9nwppAbpYTUsGoYZ3dUVsb3RxedUmW6aBak7jCdatTbh8CfcunG5LreaNo79Go5v1VwPMzuaD5MHuF4QBV",
  "key22": "3zHFCdbgF8nEY2oTCthFLGKybLRwuDbvaMTniqgRY63z1D5b93iKQsR6Z58tZHS41voyeRyJGUKYoHciFtrcsy8E",
  "key23": "5JXtWUsUSdNLSTj8R3yF6j8pMny1yKkDeusZ3KBszWcau3XThMw9kGE9uK3XvtMonWo8zx4au95si963ZSEovx2F",
  "key24": "61kj8QQiGfRVF5Rid4oNExsTtJAfDpJPx83apwYCPyCDGf7jbTgkTYn5dmMDq6yKA7ARu9xhyYiXLni2D2W9vECb",
  "key25": "2q81rpGYKzQaxBajdGDpzFpj27a9qU4Nm9WR9cMUvcLHZPkkoPck8ZZeEyNoLppToCTF6Zd7NQ9Gm2wmxhP1BRzM",
  "key26": "Gdx58yXnZk5EYGwfpGJM5Z7ojK48Qd9nduue23Wc3ATGMh728K1XnzBQFVeotet7LxF8RFaZ14rfR6WFdNSxsNw",
  "key27": "Wgbg7yyrD7Asg56BAecmEXa3rz3mrRf88nJJ1QAC8s1975rZiRyZbeNkZ7DAkoeBisSeYUoaz6zzGqMEUSCZgTD",
  "key28": "2KN4AnqbuAwAQYGAix32GgR4nzWfsHVJmdKRcfijaW2XZrZEE3bsJPe96TriudGjDKbapMWtsfRCYXHmKQNXZREs",
  "key29": "4ry5U36GfhgbuWUEFnKurTt3ypEcX4P9BUhiqWpgXxsgwVPKh6ZUEVDgtweLSY2SKRszeeGWfzh1cQ6RLUGKbpSK",
  "key30": "2th85c7QXYn7qs7Te51zJsExuS87Mu7UG24NAP8KodTV9r4Jt3TWY7ANDukafTFbzLT3Hgk7rBGyaYjy3aQHaXUz",
  "key31": "44JjuuumebAgJXve1mXjuMB5wpwwrzvBLXEeZBM7BFuKr7ZySxLPzuzgErY8PaBXpA53Z6eCs3LsEMgfCdxr9oa6",
  "key32": "5Qp3LWtJyyxMfJC1hVTDPoGtkR3PBp8PJFRoa79FS9diRPzEd8tsBJiCqtbiS2KKmZxhAWSVwQYRxqNRjbeE5F8q",
  "key33": "5fBEymPfq5pFtqzVHznyU8e46smT36zGHvwmGcs8phSEFMv9bz7oowXTZ7rRnHnJCq3eqH2d9BtDpKWiWiYu1T1C",
  "key34": "1ociZpB6vMdtoT2A8phksSZFmczQMmbVTgzGw8VmNEMmiLAvyoN8EzQCN93efsFh8xK97DiWWfutY6FmcQJw9pv",
  "key35": "4yEFcKhJAwiJNFor6FtG2aFi7tjfGXyU2aWcQ7QjTxSRhB3ZxLtBpiMFgRPzgaemnhvV7sFzsvqJf2hJv9cePT1d",
  "key36": "5s9wKFGfYrzpw1CFCgKXicENe7iTkGdrnFSz39sk4jeEX1s54L6gredghkZ9CRCLp5xcv8aQV2uzJvENSqa5y7BT",
  "key37": "55CJbcjA3qLSz13GRazbeXTRvhEqQtmE4GQW1HBCsQMQne61m9L8JrZEZGMa17nECez9vYj12DESHXipuc5cSCmp",
  "key38": "ZuxhQLYY13d12qUGP2izmxep4NgPnPMQTQ4T6nVF3Ugytw9TArFfva3KPy2TvNu3mxEX1GK72XP1gaGHq476v7s",
  "key39": "jRqDj5x7tNw8twBtfY7oQUmsqD74okdo4ATVvpCnHcbGrcij5o4sAXcDD59JfZ6rV3S2YFFP9uD8WwwjkcS7mzo",
  "key40": "44rZCK42mvgZaLjGF56AXn4XZ7WaNRFmZoohmWzxujhx6xfg3oyMC6RzPJjzbW7DUCMsfc5bJ8UXnm4EEGaMUw5U",
  "key41": "5tyeu9tVJhAhgYeKH6WhbzpHc88cyXxf6KQhGBoTjbYJaDowmAi64SJoGSBU4pVB5Pp52DjaV7dHZDyBqHTC8ycD",
  "key42": "4V6Y2Kw7Z9W5ykQYUMDvgYT8fDUjsn7X8oV3koHdLey6hdz3Tpw3W3QsvNuamZ4oYvde5FwkRZQgHBiYJ2PNAaxm",
  "key43": "21rt5PoBVH82N7WnDL9w5w1viN9uY2SeLhKy8t9ThS6hSzYvA3baFGotp9vhhFUrdshcNmcqXUMSds8W4nnxHdeS"
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
