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
    "5zRjJmgUmocCpMBgyqLmxHBeze686iJVy5jeT5y3XfLatkgUPThYazDcgDPGyzauAsUjevsgG2oe3BSdGxxmRxGr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aFEZA4h93vwKkQwCMTnajpDaKpQV29RqZhi7wtoB4rTMYii2pDc1ZrAYjJhokdtGqbH53V2G9mPjpQyGq2ZwB7i",
  "key1": "TTBhBtUdvebqoCBVGThdeXVvjbYeFqDVrf3TQkG8uVFu4Mx2pFVVnGot1GvbGeXmE5zjZMT7x6VgK2f6XPgzYLq",
  "key2": "22szgTEqMWHVuuNZNwshVXh2poFAtV3AY8BWCNTGCd8P4Pq8x7pewRWcXvx2t1i5qzLKGL3ak2B9UmVGzc9ETtm7",
  "key3": "3nXzNzmcCoz7PEUdJiaC4zDXqLU1Z47SkigJdQ7nM4tz54qY7G9DBKn5wDT5yLz48mdyfjXB93NJRRncPdgACjoE",
  "key4": "4cSt3uAnMDmtn4M8KgcVmQvvSR7WEsXMSZ9zrPGC2qCTgJwWMyxYuums81D49VPsAwChhLj5hccg6aYMin4dRLTB",
  "key5": "PnQe7aM8W9YkmMAhMggW8Uuq1MFoQbocU6tT5wV7pcxfuQbPYk7bdZUtTYAjMhvSNf4LppFaLTxPsWZK4dLy1cS",
  "key6": "5VNXi6AZnjwJgjLYs1dGchtjMxVgVjGReAfjRrnCRhPwbm3Q2gaCJ67tUhDrva1Lsh3jkNyUwXJ9hgaz3ko1uwjW",
  "key7": "3hyiA94eyMWJGW8WujEGVHAVhbyPs1mQaA48ni4TqDerGjVadct28H2hRU8j5U4ek4MLRtpq4x6ynjB5X7hurok4",
  "key8": "5TTd32x9kAbfuT54kztxppzv1zUT7RJtdKSFKtph2Z78LKhxLz5YtKqu5J61LxKxPp6znX5BeVApNRomcefEuuPS",
  "key9": "5b6bhV5neA6oYJRVd8xrKoVXKAxcrX3wrgaajgMc2Gq7ot1FwLvh1gV9LvY5UfiifYfFgGRTxfaWQwKWPWUPX7fB",
  "key10": "3DAYpawC2pcNQsqfT9QRubXWpFkeGid65R4yG1bfW31woQudif9TRx7AtTf5G4sVxR6zhMQFSfip2v2p2YPz6z2Z",
  "key11": "5B1ZWtEMr4qPEKesjmuvTP14WTH4KYzT1PHcSuN7CXv7PjwF6xX3vXQGTB99dkskupuc5nRiF1L7kMQzsTpMJivY",
  "key12": "32C1stff3XUy3zGeZnjpgG9o9xhd242jYh9EzaPE3sJcZDkf6aiompGrkxtZCUcevutDg8Dj5rFjFCggdKsnpc8g",
  "key13": "2SpNkv3uQEWgSNoWFdFFSCj4yAah74pp3kgW86U4ZtHQVSBakfNxXmR5JbWURmhEyMbtKrDvoEod9Kk7KSiw5C5x",
  "key14": "3vvzWdH4T5MBrWJpady4JCPWgsCsuvBhHTt3d4xVU7EajaCcnYVW3HQ79Xnc7zQRMCGqMrQEyvtQ84GXi9NqCNpA",
  "key15": "2RemnKr1CcskSx8VduyDaduSWgjWPerRafE7KYCDnPRzaZCpSsw5eo794rZ5QaJCi26qUukxZ2EwCYQTEFdkYKpV",
  "key16": "h9B8iugdLnisFoPPuKYws4oZR9ae2sZk18PSEcyT4ECSF6GSY5nMdUzi67j54EEpHrGszXw19LnGgNVHn1pJrzF",
  "key17": "2pRkhijojS2VHJDd71rc5FBErM3DeSbC9L7x6QzQuNVUWLGwbxe5dgdt1qyVqUzmLRxrP9w8YzqfpQD5cDraynJc",
  "key18": "4nvH4QwRTkvWxURdySkyThbezF4syEY3TaHyhRgKNTKeLkh5mZ89ygcjkYKBQ3PYQAvjPJ3HiUP3HWH3y3AEaskW",
  "key19": "48qojjx8MtKNYDqzuUMXfyMvXq3uqDepMXV3sq3cYuW5qzGUwC454wuwqWXv83G5UpoiYAWC2qbbd6JqcpCUULEs",
  "key20": "5kr1aa9v3KhW41kK1RUUDfUQHXgivMq9kKdNVwPvCNAAmvhYf1rxaGgUbyEtFdirQnqr5HWZNxjKQGxAsqQR9xeo",
  "key21": "49xB6F9MDNXoTBZLrqoEU1UjG3HHoEQYPeEawp5SuysQywLo7N59UfMYdgLakyBj66YMnRCLBvkx81uuK1TmFfj1",
  "key22": "JFjtz3yhXrL7Mwg29fvRKg262cfJrHAWtxPodt1HDMWp9QiKNYVwrsEEcuaZQdzauNQBmnAcirVejCMGaWUKw6L",
  "key23": "3cz3NnaKoPadMUUGTiRUSvSjYAoxZ9CpoUERAYmJWbr9WTt6Urk1ouWvJ5phVCR4ainDoeg5nQ9PpTZrAnRq3ZHp",
  "key24": "84Mwzfz3KEfUdcFVdENPXkyZaVUYME1pb3gFstHTHEGU63Vvm7tF4W4ajo9vX6U4ceYgdGxg2SxmcKs4fauuEEv",
  "key25": "2oPeLPhAnPD2YbutWCNJausSvzcuwRx5piC3maFz37Neqr3GnfLofdYDnvjDXRJ8vYqvXfhDdjhNXcYTYnjskP3z",
  "key26": "4ni5Yjh3ZJ3SwjV2CzdN9MK5p1DHkWDfmvfipReKk7j4sAK7dpx59cjHxz1x7sga4Lcxg2G2jHqe9ge6NvLoRcuX",
  "key27": "4bPkB54FaALBD3fxYddpFz4KRBToLNBUQSrts7J3bRsVBXfQUSKzTP5Vr2zYQnPTCAAbMhR1EzukrvUL9AdydjDe",
  "key28": "F1S2WLLxyrDskVHUVpFV38bgD6kMjibHytY93supvFMhg5q8z6JFLvsepEhfXK4yy66wtWHYG2FNENJoo5CAZK4",
  "key29": "62VAYvVEmQCohvQb8QmWd6YCtjqYG355AfDrrJ5CPiw1JEgUsDgC4t8rTku4uhEZfJ7vjDH7Lo8mEJZQRdT4Wjec",
  "key30": "4Nsj2Hxi7wXHqnKpGRwST7QAGgDb5AXitEBx6Y63SHk1UgUJ5wsEeEEALbR8W7Rs76qiaNG2iDhpNeAki3KiwGyZ",
  "key31": "2qJGpGCrcPzXAd2NQLVgJwqrBXR4DhsanoemZUKwbZHTzzRdNX64hvADE1bB27jaDFEsGhuddjT4odxTzjhkuBgT",
  "key32": "5ZhRV2dwYHrjBxNhWsKud6EVCGA2wiiegx6sZtd9d8nfd2rxqKqtQPEm4xoFbjn87nCrabvwfUK8dfmn4sVK5voS",
  "key33": "4er4WopXsnHtvmLU3wTAJu7RX3fvo9HFxpDZP7iwF4kivvyxZESF81woAmRWDPQ9b2LVzrS4dRiikGJe3Y4KDfRu",
  "key34": "rDvWqTMDMZUBtqmTtTCzeonkpjUbUuiP1SHUgb6JvyEPuDZtYfHGqCaGhYUKkLydQVN3sGLdF8iKRmqY1vuXvHR",
  "key35": "22fjrnqyGr5Efy42KV4Ccg2JuFSW7vPwnhYQVJocnMuLdwdqzVfiqpmgwHjYPkfZWrhM54Wopg9gPDUBQYVVVhqU",
  "key36": "URAei3SxviKQcVzLdZkBKrYrB8V7xhuTgdR3CnQXyYnsEKxb4yzq5XjW3nrdS4DbYsU7ovWQMngFPnKapPF8bbV",
  "key37": "3yh3qdnMJQ82gyN7tWAiHagDqPZss1RHuV3ehG1swgWg28D7KitXPTHxZdaZFVStUTgVtUWiUekpsC4CmA97s1xY",
  "key38": "3tsPq1cnLizPWogFq579XawomFAXyef61YuYsLhgSCwhQkDMKG2C1tpKa5t471imnD4kLhUjyr4cakPc4fHHqhw6",
  "key39": "5S9o6aDKaJV7bGapdBwXkj8M7rUVbtkqFcs9MmJRfbvB5qXLQYNJwAzJQjzwLDCxThvaSCh35wiEwYr8wqLvdiRM",
  "key40": "5W7qDF7eFfGbhG1D5DwQVuG4ux921vHC1JsESFjFfXmD6LT3unB6oKA7k2Tp8pHtYxZUzMSAWeNZJM5EzgddmzjM",
  "key41": "3CabrMw2dZC2XaJe1npvvXzL5mW1RqMrLH5iqgFpcrrPzLis1yfUz58pAZjr3N39iqX85Auu7SAZAL3P3GxuPDQ",
  "key42": "658MRYbL9amAFPhsXBUgduMi7Kg3BU3X2ynw1WTCbgwEb41xZt1Tr3yrsAC5vfM5uqnXAyvQGbtzHGybjCBPCQwM",
  "key43": "4hbNXNDr4dyyVVtJNwe3gv5MxxoA19mwTxbR493mCbU29bdBxmiBeMBbLwbQqmY9u5hBnQPJAFHscAirunbZpaWg",
  "key44": "thn2o2pYk1isT9dMw1WEtJpg9KsAQFbrUUjK3ihZ5mvSUPxF3ZYfxc9SfroTHFNgermq8CcrwHMgKF2Zah3DfYe",
  "key45": "4nGrsWin8mFehA1n23TrdNTx53SrkVrjG6j8pdvgu9GdYbzrbZWAVMz2XKQDR1K1aNzeuELQwzy8tvzATfLyNAJT",
  "key46": "67na7jVm18aKBxdzPJhHeGMkQjowq1GMXGeyNEb2EwsWwnQQP4ifkFSBAv9v7Rf3hUNL3ZLMUqcnyxLVfxruUnuM",
  "key47": "4qN6rzgoCF3jn3PYJv6e2CF4Qju5qmWx6ynBnqJfFyB5bxqPoGtsfgde7kcS7Xs9WtQ9z7sLGrnme6ZCYeeW1Pee"
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
