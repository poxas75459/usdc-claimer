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
    "GvYia6R5rRQ2zyQVdHhEGMsgY1frZypAXbims5ZzPJGgPadNmmLBvsNKszfNhpQyh1yHFSYdQwsq3tP3AQd642F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44wDz39ozxkBw1jNvXURKjgVuU3guZ9J2NTiFdeom35Sfa6QGm8UdNegpVgfZ8PbmQVR3wxDUZ1NpDa7J8SrEDVV",
  "key1": "2TqGru3AV7ErRvkHAdsdZRxGGpvHPLeZMsBFQa3n8Erg8Vs2rapV142kzjw6iWgTtktwS7qk2kvFTWpyESvUa3Dw",
  "key2": "3yJSZzGmbp3mo5Wesh9YK6Q92ftdYGWDAM6R7y9YiZ6kAGH6HiEDPKBnkoz7CZ17k6xz6emfwT6H7C4nTpuDFzqJ",
  "key3": "3tZB97uue4i7omG3ckkNseJq6uVhn3Q56rG8sCiVDo229SRvGWsXBdh81fj2PK4TbMZqJrJcpoczJJF9Qkrd4Ck8",
  "key4": "4q3zZwGJx2ZK2fbhYFnEFcwd3qipHH78pHYGpkYyA4VEMAdBRUMvdW5x7c5KAKicaavE1G7gGuX8zkyNu15s16k1",
  "key5": "23iNHZNhbaCJhMtE3sGoaJ4Aq9PhvbUv55hyCuRX9BkhbB4m8x1ekG28nTmAiDnAA5ncpW78ocw9iVHm3ffD2GLZ",
  "key6": "3fcxeEo4sAQxo9LZ51w7qRM4PdCWnVZb9GTRnGUrQzv72QKtaLa4e4nVoD5hPWWFbUmLDUGoV4pd8ua7ACSAYF2G",
  "key7": "499R3sDgT6sCCPFiiZutn3C7TfRc5PcnaJ3JdBpjgHZ3TNf2CDhLfWHfuxjE4og54MsWwpHE1c7P1NKiAU9M5UFv",
  "key8": "iTA4f4gcTDqP1RGVjXdF2ceuzbSQ8yJXDcZyfxkmwd8Dz1FXDgGFzx2b55cFZDqJngi8sFTXFKEAsGmjtU3Nx7u",
  "key9": "5fYdwcK2SBZWeZKvj6MLgArTJTzNYUZUkzWhH2cP7ZAvoaMV5usSdMNrkY9pfWWXW294xp7CjJyob6r8egm94PAZ",
  "key10": "HgnoCgvy6Ywn6GPsMgswseRBZ1TDWvcTcfhaENdQBSMkXMFfTgBCBETapCBEyBber27M29uTkXUUierZL2v9nnh",
  "key11": "3UN8gHXinA2cCrDxMKsAYuDD9HcgxbbTGn66GkmxNo4Eteqj46jxt27fcGvyBnKYx6RmNhgpLagSELynaK7myoqo",
  "key12": "2xmo2bkfGcZDN83W7azpdFo8xRCkrqqbD9B1Cokw3WtVQsEFVb89nobi1Svus676dygtbwcy55YonbJT9bLXqmP6",
  "key13": "2dyQjt1pfQ3VffrZdRdNuFEFjPa1r6L6mBv4V6RLcLbhcr8xR53whjATWH48SJdqgH4eP6433NfR4jP9jeMAqB45",
  "key14": "2n4nVv9qs5JRnjuKQCJgnmuESUncoYAfgS6RoQusQtTkcJtMdFrRzQCXqkUBkjAuu96WHouKAG6wdvYGuBLR6A3B",
  "key15": "2F8GckjPcQQtPKHMF4RBpmBq9ghqigQYkT5yZ6kYo3sP92snPy6UhmS8367YyjqVgz5CyYBR4iAHAheE5CdDXYWR",
  "key16": "21vMtNXBsrW2Lrf9823SvsAhXd31v8Lef1sZRPEoB5oEnTvxq2kV7R5Xgaq8GZ1iSDmdZkbAabtnCzZSeA6XAP97",
  "key17": "4C4SejRKHt8Lrd2BJ2r4dhxwLqMKJP5SkmErwKQb8e2fJmvSxPWiXyxwPxG1B1oeponQn8UdfcKqsc84a3uZjBij",
  "key18": "3sTvDvvuzRNxcC546Un8JUg1Lqwint51bNthsgpVAbaqz3ddqrubqWsQWXCL2TfB1yWUf6iwmw9AB3u7T18S2Khd",
  "key19": "46WU6ZyCYBFzcSUzcBfcpyJgkKyWwsdXno52vjkjMtomjQNX7fqcyARDuNpdrQ2TuvAfoqTdhm3vjeGiKGY7QBxV",
  "key20": "pA9N3CC3Aafib8tfZWRqSnDrZmuGWjMJ4ZoXF7j5XerejeeeqRZV1EDM7Gxi4T7Q8wKpsgwsQH8WrEzF6K5qeFL",
  "key21": "4vkF5VU35h4AmkL8zPXVqUCeiDvF2yqrLZT1iSSEC1rCqoLxpN7qLas48WRVXrkqrNe7a6pLK2FZ8Qdkf4cNHFc",
  "key22": "3ncVd4UeA3iCvU91p2WtifZ92quk6tLn7pJ7SEsMczL8hHFDaTpDyqL5wxnVTiq8J9MWURQWm1uRtAVDQc1Qr8oP",
  "key23": "55mZ3ncJHb8mCK2QqQ7hC1TLVMAn3iRtuVZHVwC9nJqg21b2DRNZA7ai1nUfakk5FVmvTGzvXeEH3hSRGWW8SYJf",
  "key24": "2aHZJmYWSBaMjKoaRLLBPBWuWWtn4irtKPn1xovqCwqim3ziAMD2NJ6fVCmkbuqxxioUznP8ExmkgsGLnsciAtCj",
  "key25": "3j1ZipjVzkb8QJmCe3njtFFyn3Tbuy734W7pJaPt9VYYehMxWmt4yAqEvXi6QFRioPxR9o27Uqz2XJNvUy4naRTM",
  "key26": "2VKPGuXcc4bfgu1spTuHis2iQaHVsybxKdmsdaXbS4SSecfVfo7JRtv9GPKKxFEsztq51QU54RBcmFKXSV7gyppw",
  "key27": "57WcMNYTYAEAg5nxMRfUdc8iMr8RfkbiqtMZoer82zC51tTZXsopG5c7GkAcoPx4djt5LZAzTmCUKgekLSkBuVqc",
  "key28": "58J6HmmVas5zjX9nEZddgwvQ1cTbTVH1PMsfC8LyLs2qTFpetDuhNixN6Y5E556dgJs9QMrHJN91qRKbnHt7Mdv4",
  "key29": "5e1mNCCBb1miNqDBeBuYpyTAbX7VE1SywoYoGHJDnxA8dRXuPKd9RhERiHjEAuBC9ATAtCv17S6ctzpjXQ2ud7wE",
  "key30": "5b7Roargiwis4tGSAqgU3expboZ4ySF1oPnqronQrbqJWdzyiiCaesA5nae6xZPHhsj9YMoQPjqvVeKbZJ6Y4wmj",
  "key31": "52YrfxeUzh7t8W2wM6QmpjVGCmtX8A5ya2LDesiUUhTgy6TJW2LVcgip5vmD3MGQbrK3Lh3AjZ4uyuY3VabaeynU",
  "key32": "3jYacZ3z1sTPtUbTMXHUphNTP54NTeTaq7L6UwwRRb9rAFBftWFeVGbEwSBhWUH1enKqr7WicLuFMJgF4GyPQJSW",
  "key33": "2wrBM4gm2ALAyyZmxDX4cUXHJQ1uL9BfEsetXsarMNrNWhanagSdmgLoAcd5897wPayeBwBy1SReKyf4xF83aR6A",
  "key34": "4Se8s7fFJhB3Cxv46WzgfDYAVwaiGzkFtiNDr4N9mKznhbtFNtdn1Gbbi9yM66ZpRgauop43SU3LjQjatPpuyCsu",
  "key35": "23MpRt8Rawy5jPuiJ7gC5VmsyRDymN98zsmWpngZMVDxGuuDpa28y14P76XgEUnMiNpyTqM5LdBA9jC1WCQKTj9t",
  "key36": "2AcK3t8TpqSK6anYXtXS4MUvQwjc4SHiKz3rVTi47vuyP7aiwAEcbZu1TbC2qM4TZBxa48nq1mjznfwyVTyNhVB7",
  "key37": "37J4aiHeKtvV8Kg1tLKjY1AioT8SKrxLWPujVWVWuhrb7uD6v4nAZ2KtmGcneu7t4oCWAWCDR9Ehxh2HJpKF1rYM",
  "key38": "5D6exVGiHtct81G5MfWzbaK5C1gfPb3vbVS4dJZTDDBqUUf2XsRr6ZD8k2DP4zR9GKwCSyXc7qRSCdxD4ouczfWX",
  "key39": "5oULWhErRsV1D4CKvGyxdXZ998bBmS1sDsvRRyTsuM27rdCCy16L9JSUKD7pxMGBh9tXjiGzsj6JhzV96RmKkRKy",
  "key40": "5FyqQ8dzZPA3JyCpawz77D5mRqAQwJ2bQ8EQR4zs27cQcXTFSbSxxJs7r6NkBFepBu4XW6D8tYYqz1ZZu8sq2PMj",
  "key41": "38FsP5Yfr7K5xUfiqRsmcbrbheNPwZQmQReAi6x2BHCsApL4t1wJyUXqVUhQZzPyrmHodj1qeYRVqqYhanSNE26U",
  "key42": "2hU5Jf9Q2GeHUmgD6woJWpeeH6vSqy2TNaEdRuNsqnsaW61M8GkHuxhAmwuBnFFhfER9ei7W1SuQA1NXRrRKTdqo",
  "key43": "dVM6U8KLdB2a11y456eLnuFsSHL8PBzetNF3eH8xaQjTo7Jbpo12A8qn45DLMTpj6o6woq6vSxpa2Ep8YG1nWp3",
  "key44": "2bv7nD94FJnAyLPn1EpvrRCJkU5SHkXQrGz6BWWLxmHWjobxBkNtPdmdtNQvJt9rfsYnDvxv4QPbxn7aSyT7SbiR"
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
