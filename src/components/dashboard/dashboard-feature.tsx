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
    "396GBMDczrJjjTHNrUbHfaPqg5DbPCNFvrhAtotVPCJ3DXujsPNkTk2xVgJUdJhnh5sc3tp8mxaEAQ3Mq38s5YeP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "g5XspZeRhNCoiswPDXyzczsHch7GA56KstfsFZz8kfDARQnKwi5N2tcgievUpmQZ8FKTJP327WAMg4PF1CkviEq",
  "key1": "3TWJbACBhpPBu1cfwxA2ZQQvbWmy2Y8GfT45ivTtnQoqMDWn4RwdbibWcmXRgWBGesfJzx5VJ3R2xdKZYw1TDnG7",
  "key2": "4P7z8eaz3aGpY9cwrB4mV1uP2jyn3FswKcBMNVLA7HV64JH1cA88aSWZ2otCtM6NPWEamriqnkZHrBkKv654JFjX",
  "key3": "4wgYLPauShGoRMMy1BeXRTR7KAH4kYH4Ev8cjZ5tQHD2yxSXkkJFtpJKTr9hYp4M7pQHuhpoVGGK3WmK3MTpxyXH",
  "key4": "4moZJMMEM61sxGNzwNdtG7eatv7HkUWAbsbX5TcJnDBfn5xPmv6BDTMUGTnFDb8i6JiCEbgfJxwM2w5CGrSK9CCn",
  "key5": "2v4zfUSo1obegf7ZWY4Jx93rrgMnQJDgKvGBXqYMd1yLWJwKpoPqfC35WPmufyJKtP7es3WkKRxU1Df9zsjDhew3",
  "key6": "LTbzTeoMyp9nYYBfocWS2JFLmCao7eayXLr2Zvidhyx47gqKCTkVGR74RsQexppXvHBFGi9BjA5CZLRtLXz5YQF",
  "key7": "5qtDxSBdgYgxznpgDSQat3P3cifRa96YQpkwsDYe6W5nEP1YBLikfVFiVnr6utrkiQRaqMAm9eus9EpsqHAZQA7f",
  "key8": "Bj4wchHtmfmU19nLCM9tTYKBTuDrs6gyqNZUtRCpLt1M3ZEFVzrT53pGTg3dPzMSYg3t4qVBkgRV32urkPaczTu",
  "key9": "5gMeCDxubRrPH161s1DEUHgHxEGDtNeYwWxVioebxY21wFYpx4kCfR1vdLdVn1Mpkaq9vYvbKabU2SfaqdYrMSNd",
  "key10": "5kNoRDj7Ae7iNJUTuUNrvn1nZSY8rAChHVEBRDjADszDxp9xUrh9RML35uhC5NfiHc9TypSKnRdo9Zn71LY9GgdC",
  "key11": "27Tj8drNJfhAga2LDva48foQRjGFEMT3mdmRz5F4J5rxeAy9eowgHiuyseubpMy8NfnnWUZowBVceiWfQBuPyb4z",
  "key12": "33fq6PfrZaPWkDtkAfn2vh34buJaYNiDDhPGY2pNTag42oEhuhY1v4QZfCVktmw1BHYccF1JjrgQUet32MSEVVgP",
  "key13": "2NfdQ2VzcUAytF6sgWFoanpVFFLfF6nvzPaFfL35zXNotyhxPkPFqnkBfdWubMywnHia5ryxojefj9kETE7uFiqm",
  "key14": "2qre8LWyyXb3DoMNS8ZgKXoa2TEEMSuFACSJ3Cw427Fkz4eMhcqFRys8snD9EyDxkmHu5HNzhNdu7CtwGbcNWJho",
  "key15": "5HYJWhXSTRVWSAbnRqL1UMXHqyXon2bVaocPbZLDgj3RKz9fgFB8BcF1kK9QxPQRCRvY1hG5ZeLUpA8FNRUmGift",
  "key16": "Fft4J5tB4zY7GLd9ic64hZn4YZrm7BWcpTdBQxT7YagwydtvtSHXpgX7z6ARnSQXpc5cMDsA8FxSUDHtZEvpj9X",
  "key17": "2q6JCNExZEJeV3KUmRhruhdwhrwwBDquFtDQsF5wvr4eEZRhRKpNYwfbZCHkgLAd2f1KM6g7c15zhpUM68N5QsJA",
  "key18": "3bWHFguxUsuTW2w1LkCXRTtsSE86CZgkoDCBxPacVqv4pQVcTL7xqVck2txesHL5UnfJwXTJpsmRB8mSZcHRs7zo",
  "key19": "2PYwcPiqU752u3spEPmCNCanUUJZoHxaHgtmsZV8URNyyCCAcRkQaBQwEExtBW8hbATXsgpKZx7gnb4MddJRfpXz",
  "key20": "HVLdZr8YFhJ6Wx2Y6QW39PXSuYJAvQqPrbZid5vnkkgpAjFoNLodacyBreRPhnR9TkE5KwrC1jvQYqz9bixTPgc",
  "key21": "2K6g14KbjnVMCbT9wVehb2S4NC35GWeh8kqufBSzBrhsAJpWRs7B7wWLA8Nt8qzVCHkrNXpt6Mcqqx7SgMWeNbGq",
  "key22": "2F7SEqnTicGoRgsXLALTxSqh4BfdZgJrqrY51XCL5TtzLnzBtpgtteyUUE98rswNGEhmN2EBtp4jWijhiW7JvNgK",
  "key23": "5nxajZwy1M5iS8YFLuUr6nfy7ppBZqmFpvz5yocgdd6dngF4PAezjS51WfYJLehTGAUSGcK49cE415SXVy4rMsey",
  "key24": "2Eqo4n5iLpeYR3xriBfFyxfKGSKj6gZQrVdGN6FpN5tJiGBxiQ1r2BjZBPCf63FWGJJzgXo7W15k1Za79uoeN731",
  "key25": "27t61WcJdwe4R8bWEvXS5qKXzaNJxa4VLN5Hn5iMuaJbWsbvL1JVjzJsyr7qbi5hbdVBtDZFQ8CrBY4Y8PTurEyF",
  "key26": "5c9gkBacHMkJEcqWxLtf6UQcPY5gXV8asybinqe7B8ukgpwNgavfCSMHRSfbmmqDcSdK3yDZpZYjQ7oScJ4KEf5C",
  "key27": "5FyY5dCbUJbYrf3BX83PcjzN2bhjUowusSnSqn211XxPjG1rn5qJNUS9SvWUMMRdGm4649LmLwWyb2Yf4HzfTSna",
  "key28": "5rzzR51jQqCWe94rbDJzpzt9fEoGiLPCtMaVMoHDfcoHpDTAaaGdsDgAWKvVP2iuqEKNT7UHcbYYtTR4v2jyt8wF",
  "key29": "2TajZ2GJckte6d1vqXfzjDJ1Cyoite7ERPHZ1gRe9p5qKVsAY15M1ya6QeX2T5bXDk7f7Drxo52yVT38fdtSxqWf",
  "key30": "4JP8FzTBHCzYQ6tsbvQPWpYqevJVEDoUhryJ3UJKpxu2j5WQLtoo7pKLat4cvo1RjDrH7W6jruo51TwXheGvqjie",
  "key31": "55KVNXLQqj6ebEHTtzg9pR1SDSLJGScowBnAp5VxDkmurzyK5uHWgRYumfxjgiR7mmswmJq2pHzUNnv7tCr2GiYS",
  "key32": "2mQiPTjrGfmjsiiVNgyRzdoVGFXr8MYXYrKbns3Lz9UAdR9VjZFVuGru8ggLZqyH1ytHGm7d3XDsuFN2PF5khdAC",
  "key33": "g9Jb2LKw2JdTa8dk7kvcBAUnWgkTpZTX8ASt3mHrizTqCvdJccHJVquvz67mEJ6GHALhJbGRW75iM5XJAhz3Jgq",
  "key34": "43eQ9KyWisdHRsUmud9A3HBAW4EHqJQdDK7bfgBgFwTbp85xywWmaTAzWTH27bNgKmFQYksaNR332GeiTmyGFRNH",
  "key35": "4tPMCMgiH8yca76fdsDXMQnjStoEVHfSLabQ6H3bfouvrpgsmEyGxaj7kz6uoMAtgvtEuhhMfb94LHtVeFBmXPN3",
  "key36": "4p8VPcCSVCoX5ex2LzsnQQUyCJBKVR63PaSmvMCHyzSW2ojeJSsucaTykB4MHzGwRzLFrjrQfC7bZWbdJux3A44K",
  "key37": "4RPqBTjfcVtnKdqEzN5fbHN7cFvJA3nwLffAWXhbuyatbCmcGqoowp3uLaLuzDgVvFLoLXYweYkHS71F9x7zHudY"
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
