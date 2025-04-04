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
    "2h1TZNzf3Be5sLi9tUWvMdaZqGDAW43QH29tD2ZicCYMyHTjvDaZmxe1vGKzLWyU3qQzFm5y3Yfke6LRF6SU9h1o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "424rs2sBd6NdntiJ6AQeTPdnbPYHqutFHEDKTGwyHdXzxaJy6txYgtQDdBWQ8zd59pr646QE2B75wudENt7Louga",
  "key1": "2SkERbdApRUdW9uMp7pGfiEoHj8xRF968uuQdxgPxd78NrLdLTgC6DoV2AKEHXpScDN8t8s4HSm3UADrEsgpyTjK",
  "key2": "v6zpz97RdFSN5t5YQXJZ86uJ8RYYpQS8idA9wwi7ufC8Ykr9Jkui7seVznsdE1U8x2L435s3UZwQ7bRyCtqdMtz",
  "key3": "BciiMuR99qVVSMejwbBPscUkcn2pa1Q7ha7gvvbzmLCUF3tn4y6oHsqt14VcEmFFdgpWNWWFkdb6BtoDvvaWz1x",
  "key4": "4JBKseGomN1FmcTEbfWMX3f9xhZtXawzoCoS2s2gysqVo73imacCGuT5JjjxCLyTu7Q6qUXX6T7cD2GovWWqgWa6",
  "key5": "26QQB5m4zyS2P1VojUZghMuyuhqRTaYkdmzi9kr23PWszeNgpmu73BTqmuVuy3a8wigVCnDWDBiBTzLT3Y4XLZqM",
  "key6": "5ZrgtTZ9B54NquLRWabTWt7sYCHiW2ZJQnK7yzULS1U2b1KL4t8F44YD3cebUzMVnXzKPqFSK89mj2gqh17tYkoF",
  "key7": "2cjBdvv16ZLVRfCWkKdC1wbAFTd8C5xgPiy12WcwcBaPnq1vsF6HZcArteGTKgT5nWcqrgHTK275eekhgJbqnJLh",
  "key8": "2Ygv2McQEGT9en3DySLr92poswtL9NDvBqTNW7LkHfbXyE5KTt4a7iK5gQbYUZGk3ZiXYgSyL4BJ5HH1RcdABBq1",
  "key9": "4brf1oB1ABAPggxSJcsNwzJ9D3tu8KM7avSDJimjY2Wd4zbuRMTafMED7sNwpBUYJV9oSPQvWVupTfvCHuHyXHE",
  "key10": "26aj6k4Kv7LH6A2wdSecGxRc1Bs6X8c1tH3YmfVoTxDjJEDTwrAYefxt5eMp5p6Meutzm9QnWa8VPPPvzXx2Dm5N",
  "key11": "2aPYbPfv3ys8aniKoiCwkuFXh2B8Z6RfhZptHybU78bsLVgZW54BxPfvyUuqg8pZBLurXgg4vYWDaHPqLqc1gFEA",
  "key12": "599xd6B7NUhgz6MiiaH4nUkZZ93iCTUTCU9Pg8wAA4wsrdmfN1i9cUJWDTqi1sZWd3PeY6X6WnZQ3VFCgeoji4z7",
  "key13": "2bMj6CBuZHA8EPTRF9N9czt1iYgXJcixigWEHk9ExF6oxVNqk4znuLzwjdkFzu8koiNfbA4Zk2nHDZ6muQdjUmjz",
  "key14": "4TV6q4aky5S8WcCby5Z6LUtwgGtZYmD34ZPYrBDTbLXbbeQv2APNUAKyPWU2PjbExS8HEBopsEST9TrXTGfxoFC7",
  "key15": "3Z3k9GMH9RdA7SHuGWWW9Jetb5sjtW1SnQnWAFyx3dzVGGgMfZ7A3SeTJj3sT3Piaamsa5vcqeW4x3H6ntuAL1eR",
  "key16": "3xqwXVzS5WccDEv35f6PrHTQv9YjeoFoUYCaPZugn2HgViYNdVWsurUXj9xkQ4wf715tY4jb1BgEtp4Dx8pANCfd",
  "key17": "3bWJ7ceG5g4nw18i3uAg1Ge8zjLWrCqq5BrRwhPCqMQNAKTLPNg6GNSY6ukvVZa2CZD7JNXyQiojQryWNJasRc2k",
  "key18": "bhhtaft8scetfiJU9ra3PMWJZeEGKwLeUUxhEoRw7VKMQcuimRTHVuVV9CAthQxLtWKKqshznbzYey7yvc63DB7",
  "key19": "5YstpyAgwEhejG3f1x1Y2QGET7pSkakBpja8b5JnUkzu2LUWMvE31DGxMmbZvJZZ7vihm2Z8iSLPGvyMpZSfgs5y",
  "key20": "2gqmSRG1WBgi21vxfhsz4oDSoqEFWMzHCJ2CpDfaKk73M7Y9SWwg54p6LDVGyFMgkasZK2o3dC52mTYtB96TBhze",
  "key21": "4RyQU8k4V8dMfoKVDxiiLGjroYiJWPtpH8Sg1Gm3EgBRK2B8TFYqL5cRqg1THMakE5FHF5MrvbLrtWyw6pCnb4vh",
  "key22": "5BGq56mZoXu6n1xeq4YWTmZ68BHW39nfLWSE5i4CnUEfmb9HBpn9XgmRsmmFy6TsX8gbXu7QEQ4gJbMCxJHBbpKC",
  "key23": "5WbGYbpYYUND9EiLYKaDXJxWbs58K7uiEmmMxfKkYPjr6pTUipNNH31aKEv6QJdo8cr2DqTkhvdVs4TeM3rYZMAs",
  "key24": "4PtCBwQcZediiVYgBM6wD9QuWCoVwzzbYnGqNRnsqW4PNSATRvuNa7UJ2rG3D3HxLBdqDcZJg2agLn7qWXtE4HhG",
  "key25": "4CWHZP1CjqQHjt6EHJmQsh9nBQ5Ub2ZDMuiZ6TzxZd496bMRd8BxgH4LeftNWfwUw7a1vxgJBSD9zk9vTbiEHPsM",
  "key26": "4ggdaQZbG2RqYc3ikRfxtznUQUBvv1AnDYkTviz3THzhSjbhVHL2JUp79i2kbQDyggnEtvweyRgxriFAFrcmvsMs",
  "key27": "386U6VPtBRnc93bghCE5UFVdXYacxkcsELpAtpeAmQxXJg65UoKvmNcdnkgtu8KAcQjEPR1nxisvt4hHGfxihs73",
  "key28": "4HnCFZSgfUFdnyEtURf6YgW7gs4PUNWQk9vLoM53G8aRHEGSqXyLorFZZnz6mw5GpFRJszHb74UMCikw3Jnza2zm",
  "key29": "5SBjA6kSbX1SJNx3MhtMBw3iQfD8JWZv9v6ZBNFJ34rFSsQ3KJQVQDChXchG6ssRgZpK8JGjd3MgiFTE71G4Sbce",
  "key30": "aMvQ3NbdBQfoSrpHRK4RReUBrCRcokBHXzg667jmoU3k7wKsz1d8n5sX2TihF96S2XnKwoTyspDnKto4XncNnLy",
  "key31": "3ZH7ZxcygwucStj3nZ6xnJgxrxzM4r6zW33Vj31SaK9t3nW5Yo7PoZYg5L5ohV1H4LTu6XqWi2oqsMLF8Vwod2aL",
  "key32": "4BUmU6wJ3JKV9HbikS6Wqc4XYoLMFLiNFYPBtkG16FRKDCSBiSR7uYs61qiwerZpbm2pwao3pRSpGMPxm6JvMuJr",
  "key33": "2oKy3wzrvpSGnqHKZfonoeJ4fK4ve7YRGuQc87QowsbKxNvg2H5hdCJA2k2AjmBX9ZRkGWeP7aWzZwAwJZKboBw9",
  "key34": "M8DEXsBEgbbGAG1imoQ8CKajFvjXmuxbvurzEb1LnD9tTjfYG2nmFFkbisicFmrS1uCY5KSuDvGynj6TcYHLYVh",
  "key35": "2xaZhj2EZvYSktpC6L4N37vbDC28kQ31DzXAibAYM1R5w6GugFFXF3kehjHqwjbUHWNtontVGarKVLY7LtJn1X31",
  "key36": "igHV69Y3gqoZMrdn8iBcqhegHisj8JXuDS44ZsDvKP2Kmtunfw5fPHRT6eDE6xnAbjN6UvaCXvsk3ju3EjaBaBT",
  "key37": "29Lza8V6qLpvoyHTUgnEZiSVTBWUxYtVRmKH1JMpEtenWGEnFRoGsAzhweRkWv9XEbLKmShsFTwF3zcarwEZVuoK",
  "key38": "3Q4jLRfFfSbQ93TjXJgFJyyCgifHEaZUSKYm7R1GY7uodN4UiwkBgXVYL9U9X1awuiqEHSvNFN4K5Hy3YQen76Xj",
  "key39": "2kgHCTy1TDJziYSzpFVLHmQCsY9vtJ9FWwkkVXnunMBFGZZKsu1w3DB8UQr4JF2MyPz5niuZYS4KujKKT4juHC7b",
  "key40": "3jEAcF7LMMkyvyDsvM3d3ZjnS1zaWK7RGiLPN5nEbvW1cJL8MZLT1tCVKkyhXk5dnFrcn8TtBVVLUziBgSfgpMeG",
  "key41": "59ZAwJsY7CTPQyLNLcNi2gHYJrVVTNhwzvteosGBESwEhZggBxghxt2vXbKgn46iXXp9PTCfqY71EMJCj4MUEMwW",
  "key42": "4dYe4suWhCQsF6Td8fpzjwjpo6huBHv83sXNhDG3nuKJMZquRqMR4AMTcUf532wA3cezGdMbHKQFfuJf49J4PSjm",
  "key43": "shB523LZ8xXkw57mGVA6BUtkezkoARt1tYCS7g3bC5WaQRZDjH58vXdBbPyMMj8Ss56U2CnR8cji4aNAgAGRqh3"
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
