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
    "2rGth2fVWuxpirw7yUF1Z371cwPoWkasThphyYjnTEVLVMA2tXo2MsBw2ER7dD1LmbaRGJCTc5vmiwJBLf3LgwAK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57ZxEtygief2xq8HZ1E5agnJogCacUEvUpthiTjfwGE2mxrjwk9i8pS66nGpe38V19BdrRaDBWeDcE2aNMhBzAiG",
  "key1": "3kzWCJXsVPLeFXsACLajwZRe2RV2b6FqXcE8AGHeKLPET4RXK1XPQRQy9btf1pN6T6Lskjcip4rY9dLtAjWcRz2a",
  "key2": "wHdeMJKiJPH8vGKwQAjat4jxJXxNaWc1zCxz2ZF66MFyNNw6y8VTcf46u1vQcCHGrdxV7vQiok7UAX3N6ghFKiY",
  "key3": "5U6NnmpwQAWvwLBVpEXTUR7hu59BQyKqgAi1EKxBE6PfpBma2drPoPWbKPzFGtGd5QYurcD7nK92DpPfvNJAytPW",
  "key4": "5qQgB2FCmYMT7s6bobyhrpaYHfwhTyNAexd7oFcnmPVonunuwNxLCHNkMoNKW57w1uC6ntp8FCaer2dEEGtZc3gi",
  "key5": "2sr4D3iWDaEqYTAMTQs7aejcVdVPJh4C3r2W3y8ehjEKbC2Lyo2vwbUCQtwGwCKjGszcF9QAKmrvUhC6jxavs5ir",
  "key6": "4TnDrymvtAW663NfAKWMntLj35uihpw719WnDn2ivFP2VqYoAH3pAAkdkjH8dToq9S7A5ozo3DcMWmJY8jBYjuTc",
  "key7": "362HhQVjA8C7Au6k62d9x5AX3cGHXrkYpPNwai8SaNeWE1xXBvKcwsr7kLYQWTxMx4k8ZPaJucwWaoRDnqzzDPAM",
  "key8": "58XgqcqqpjEojD3qhucEFRbiQVNjZJ3h51HF4fWMeWxNKKoUkCvH76omJ5cQKYUR6qr1EJMRe3PryCYasCNu6BFQ",
  "key9": "2GttLvrgKPJaBNpJPVZ8Q2qqujnYbKufpcSt7LZXKBciwnXjXD4dwUa383R6Nb49cKj6Aipg3fUHSLje1XccnjYN",
  "key10": "xmtVq3Rtm91iDQUgU6FG5WKCr4R5r9oZdKyMZPne5eYUCH3Z7Z8n5RiY9UueSDPgBuCV91WdxVzaFTD9PQMuVon",
  "key11": "2GLrsJF7YLtrPM29PS9bwzSoDPHPL6aDrgzSj5sHPU995CgS5NnDLMdViNM5QdbXjiB9L3deCrGnL5KfvwDdEYwP",
  "key12": "442zhcZHBgy1v8WauKt8jEKmG2ESDrkjdU1Zjqimp5horprwgdjuXJDApr1PeJ559iu4DvRfEm1QaiVeXTHCijmh",
  "key13": "PwLgY3vY7KLV6n6DDJXNF5hvQTZSEWajx7sXqWda6EXZ7wJzJHMrPMtjZEBs2ocvAmJiRbjzg9czXiuhuWW7BRh",
  "key14": "327U824rp8TTZ7TjYfsCGdAL9M754Vz8X8migUShKp6qrfoWxMf4ReBtMV96f6hc6yu94qbbqRxrphpRNX2Pe6Wu",
  "key15": "mNRNmzv1YFUcFYascNkMzwg8K4QuFdmXZTa6Ce4apgoYq5J99K95ex3cUmWrLdbjiGBGoFP5uLDpuhnSyBTrZNE",
  "key16": "2g3cztM8JVTAAvCiQJJeVEoxWm44vFciaoqnkLKGxXFZnZjS3ToutA1uWnb1cLyDbLSBZyXHfgTZGaneKiRFVrfS",
  "key17": "Y798vxLeZMS2ZG2to2bTgRGFma6rzZWT1gyUE5LonZqorcScwvXiHsT3tPRmmJ2C2FdF9sw3Jgev49MfekVqofb",
  "key18": "3hZageShVtha2jK2J4R9mQNV4Q9fVvRfqAm9GTHYCyZ8pVktHwzEmqVW33Ddmy6ZR8cAkNnrYAK8pukBaKkGkJ64",
  "key19": "ixo4sCUiPBeb9axnfgt1EaCQ49X1kwthe5p1JBrsSaWWybHULvy9FKnPfwGoa97EtDhms79iiBPyMfqdu3q3C24",
  "key20": "4QtFv9wUDoVrGM8uegLHWKFwatnvSmLpBLr6Ev4gKEtRPhoVmfhVe2oYvcdTm3Y2WywoB2hBghU5KkkpixkViYyU",
  "key21": "4JVJ7UmRMqhDt1EJ9VVLewEGuPBBEL1FDK5Q7EvjqdhXWAL3MN7nPiFUQdW7EyPKtzu8LrZBCUMKT85NMaqHsNBu",
  "key22": "L2URj8XMSzuNMVJcrk55N33Sqrt3Y33wALNXM5mNK3H9S19ccMcKR5XH7L2tekN4zy3tiW33vzkmnvEVmEZGu2d",
  "key23": "WcwKTd7U1n92a6wjhbQ4M25TN1rLbnFUNqNuR4LBwPnKcCYJCt8eDgMHDhudpWJn3SiVowXqFv8FuQmc7osNwT3",
  "key24": "F2eeLKxeFPMRVub5CJs3E2kvvUPe46kTBuy8qBDRNHeHwuJbc2CC3A2NgDgPDLWUJbqPKqvqSbgQN4i3uWYWaVb",
  "key25": "2w6GMJmhgUecp3w47HKeeQZVeotExdkF2uGX5FNHyAzd5Kh7m8UV21UQAwcd3cZj3L5s8MbboDYTbyjkyvGityDa",
  "key26": "4gXbJVia2jPh225WEGYokptzRadwETaZRD2MtvSsH9qFNeW8nKqRnTSqeDVB1cfqYpVA9MbExiYwBrCpWFVqqp6",
  "key27": "3LXNZpdZEFa7q3fHDUt8ccmyW8VyMR76J8tTVtg5BSX4aHP6rquVG4XFuyX6211cWpprsZCotroEDohat7moTM9p",
  "key28": "3FTXcUSMt2jiyv89ZXuStHfrLzL8FLV6rZnE2M83MmqFX4C6MiGJ56C7fTrn2WDkofL5cxup8egLeHc4AzyqFQD7",
  "key29": "G3nckHp4Uqe5UWCnLx1EPP9yX9DrfAATQ9JJmoViPgquAE2TEMYd3Tbf51M6QrB5AXCDbFhLfgaSTueWxoE7m4m",
  "key30": "4tTH4RCP94n4KbPSKUJoqEp8mSqYvrKfGyVwk8akzgrKw29nDWuHMg366UPAf6pScWzCNUpisjes6ycu81Ln52T3",
  "key31": "4FB63HP79HjrX4JCNkfGNua6QRVDeFdyMoJysbgtXqnyYGDt5CfHgmy8wBLXWH4vzmEQqwVMqiEt5VBX3jikic23",
  "key32": "4Tez6YL3NZ2hK9qW1MGSo25n9cHpz8iJhLEJRHjdFEb3t4h1AraQNq3dwW31rcARsE7ov8xeJPRFTgJYfc1Gv6K5",
  "key33": "4skzCGUxnZXnSo3FfCkkdwy6XW9cnnuZJ28fhcKLuY3cW7HuyrRmRZgxanwL4PmeZENrfYEBraFQCQzdaTG6bVkc",
  "key34": "4gESBR7xcTv4ci7ESnsTGNhCRYGBEFrxK89Pew4M2icZqnPNvF7KZbabmQEn4zgwqn6MJ2mWH7pckGsxr2Tbyb4C",
  "key35": "46LnHwMBYUjiUZQc4a8TnaunDUc8vVN8EMF3e7oTPT7L4KEu39ZYnQMhunGgfxrCkUMHdVdtjd88WWQdbefwuaqi",
  "key36": "Vu1cSwhBxTi3d3ghJ6VQP6N8gPeXNN3zPEFnYDP8ivAqkk9rwfX2GY6L1NqLBGMYiFFGdccFDQPEF6bnoLGJNUU",
  "key37": "62X9GX3y2SwdDetwHnjJPXpm8c4sqYU8ePvq1CiX5S1AiNC125L4pkMJxbgmisjHtJZt4kUYG9Z9owDDo37G7BMM",
  "key38": "5SLPgMPjA7WfstJ7R7i6dBpLV9ytsHEWFw4PRgoR8AUa9TUucu8P9PEBKDvMNB6ZmF4WnfuXMjVp3EqpM5ZGEKJ8",
  "key39": "2UDujqFeqh2wXZzQpLoUF5hGBdGTpFDmyaUPBzA5JVNxYvkHzm6LJqoJbQ3WEtd9V3zyeXJgcCrxyZa891c5x1fh",
  "key40": "5ncKE8u4P7ihALaEtYcDEUshz5ExPDZ7UNsaJtkYx8kFd3dBd5HWx6rc9cUCSkQTbaPLCvMrVgpGLJqR73Gu9L6Q",
  "key41": "zPUvYmyTWwrTsUL1hmheTBzgBLegRKnS59xJzTD2GGx8379dh2LWuuHQtxSv9rh4mbHBXpVJsDosauBiB6GMxdu",
  "key42": "3f3PrbG2DtUKXE9LLEkbqjKuww2XtVNn83HVT5XB18NZMvTbkr5sXy54z6GGnzN4uKC2rx1Zi9ZUJTU7VMc2Bw5F",
  "key43": "7Q22avvMU6HZ2pprvBw83hPS5XxW836Lu8afboCKk1g9w6sNg5BimZ6ioQGcT79HVyqHWU9LVwFhavZLjvTLKgV",
  "key44": "63qdtDeQh1wSRbuX4eRSgxQikDB2npGbF5rqk7GJ4jRhLXSYMKYBSkSzKdpSqMYLRnUC1Bpo68uWustdjQnCfEuy",
  "key45": "dc2vHkHAHUrXuhGDa7LWShJYvyzxpPwzKqE5h2aYjtbQY96u5NhaLUvNVyr4ow7vFiBKZKAHw6J3n5STfpdDqWx",
  "key46": "2xUJ6prNaZGzA45nG56rBargMkvtTtyakrugGf56XtzHvnppjgJAuLiyqm8nnXqTJxWLkjgvywNTLD466KYjuKbK",
  "key47": "ihBDgszuBn8WjDkxVKoiwbKAPYJqDygqAQ3tbgKSuofVbGKPHwEM9neVN23p7NpEWpg5iKydPUv46Vm4CNdrwt8"
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
