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
    "3Mhx88PTpXMTaKuB9jHYf1RMXZkhx4zXPYcE19fd2ATEbcWdyARLT3WVEgWWboXeq77LLmuLApBvuPCA7H7ANUqc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QTGBtYJVj9Z8UYwZNAgUE9bSQbYeommtHLCrQydU84b7SbqzNaJNMbXjLNW499QDi9ESg3EdfTKsfzgGz7CBJop",
  "key1": "4rSUDjw7ytQBL8KWpCZ7uHXbY8cG1DtUPPLYJhjzvHBLKMmvCuGkn8ZLjZodsTJm1vKuRiLAsx2HVsQUzyoQk9Se",
  "key2": "64FZNo91BGzBuviKVDjkrVWa99Qi1KtqvaDgf66NDh7Pf66hBxq56kVTifDBMfgPvF6nurZqBH4BLCxWg2esnhFv",
  "key3": "odc1N2QTbYTHtqPEzpkbHxKSYcGwYgJXivnMnkPgrfMcfnupXZLMDvCnYG4hWrXRoZMXh39EXDgxhYEqihcoyj3",
  "key4": "48jBurcVAdY7CAda6TiZ9MBst9KS5i3rExaqFQo6oqdACJnu3JBDp6FajtoBCQCzpQh7aUuUGmmKkNU92oeFQv3t",
  "key5": "SnARAM97V3rW5xfVBabg9b989x4L8BHcfsxuopBeuKizg2T9BnMwJ721UTjjVuMf4wYS9J2nsEFMw3eaupYTfQy",
  "key6": "2CtKanWfVUasXHaeytePVdRCpdC4NzzuHLZ1jhVHM7HscB7hcWoqPVhKZvpiGSqsVfRyJsrnE13hDm83d5LbfQhq",
  "key7": "2HRcRggajquLTpLsF9Cod2FTJCSyaeG7GpfhtYBCQgpn8rL7bdxE9QvqDMs4aVsWTDXynWYHXdkN4ZDCQZA2Fzxq",
  "key8": "37RxD4NQoUDryaNmYvcVXdT63ysEociP27eZ3S9jRqWfjZ8fWDp4G1PwdGvXAmhdrWAe2XCLbXyKKJVV5nxEqGxp",
  "key9": "2gAnhuGmaisLwP4o3Wk3isFZyLAK3RmrsNrD1Bw8BG42RmffnQH2rPaB8QWaWH2PKoKMdhaFPCqpt6qPBmxVy6Dp",
  "key10": "i6trVNqtdMdPh69c3QQi9U6n1pe34B2PbEP815VgB2hkAWj6ZqGTpv2h3ezbdFpVpA8snWEXAykrdiU5oAQrmyv",
  "key11": "5ABSSXRR15n2HThwvbMMjJRKQQ7DGjgkAzBbYxG9EnQhtvo2JMKikaKJdDA8rcuHHmA9NFbr8LPhAYNN19H9BPc5",
  "key12": "Bob3mHcJgC1hr9tGEbzZLGuqAsZKBZUU2c12LisYrtPNqXiSX2w2dLcTYyue7JMonS2pJohZsh9Vo7BwUTmUKbr",
  "key13": "4LCghZaiKLgaJjUymWJcSyuRmr3xnQJ5RJvGp5Rds3a2CpeiNkhMHwuwtdSRZqx76Z7Y8W31FKteJJm6VCBZFE3P",
  "key14": "5pbDpctJeLiKmvtn8UkMQvHHjhuze7D1PdCj4fqGyRkWmvUbNCWpfwsSZdJSWHMLYDP6YMh7xUg4HoE63fJvErc6",
  "key15": "4zhTCYkRy8jAX64KaUkHgX4nmvUDixmvtMgK3mtcN9DanPS4a8ug97i8FB7bUgrxCpasFAEvHLTUU3XQmy9sRFM4",
  "key16": "4dVGVGsZBNmp7E5ZDAMwzCZd92hbUN2u7k2yVAwQrBA2K7bDeGCjyvPV7bqTVb24VjB3HijE7XkXFs9tBUXBN4z2",
  "key17": "4NQap3GYECizVNgwfBv29CkzqsYCBNyu2nBsBEHyLonPXtorBfjxYVhqk82uF6bvHTS3mzsUVpNdi5wt7HJmS8st",
  "key18": "5Lyq9cZVvUrcBiupYLBLrTJXih1HMu2Vk6Bprp42JNyWAhRvC1ADNACSKzmtbPJSXae9NGv3eVE7mcMAPwmwfKED",
  "key19": "HwJwCi7D8fYwnxEY7zUrvsWFYmFvXuAR63wAM76p5SuhPpMVVFkLra5N9oJsH2wyKhgKf5U9h1kGwStqoyzbYEk",
  "key20": "GiLHBgrbBABKyVBBKHkHowg9XcwecXmH6VWPzkDeT4AJEwmwefa1Q5LbYoka9ZEG7PssdZWdxZrQ3sSuSdxRbWX",
  "key21": "c5UKVSvCcsubbKoSSRcNwe8n2Xv7ziYMPnbMe5swkRPuVwHcWHFSJf7gUuCP4P8DcAKef5514L3BAqERBLH4fSK",
  "key22": "4qJzAs2AoxKgYsjBJGMo1FfwMw8sqNe2R61TrpgjVWuTBiYqJiiD9VQDwyYc8rMrRp1Lvix5NWwRnbAzMjWXUqV2",
  "key23": "4f6RAPpiWP82Tka526nxns6fys6sG3AyEMnLbtBXyTSXpfmYWSomjcBcMrgJtVfirN74rRoG7u8c6HWPBweEWYNd",
  "key24": "2nfiHqiwPJyFGBU7xw9uUAJd3sERr4K9nLSNe8uMf3qyRfnb2PSPnRFcaTwtfajoLACSFFrAp3zeqzqTinVEZfSy",
  "key25": "3n9Dm5e5yjjvdyMXyVkizJuRGD19kRYVsvZJgZsceT2U236gk5HfvbnhcbzutheiAdVEq8vy4gAyknEmynQpHeEc",
  "key26": "STVEvedLBZoDauZQ2XvVbpPKGDsPx1hMwbjk18qaJ5ZhTnKDwVCexytQ2AG9gAPR6ggkJZtoJoyLpK5pvKb559T",
  "key27": "KcPDJB7J1JPjuRucAWV7d1Z88jmecrcH9KwJrU7LMrRKKZ9soyLANkHfTKjcKk72VUgK6JnCnD8CEnP1a3EG8uG",
  "key28": "3kFyBkq6A7jqCBLMfgAyxu4ZFDDkZDc17dMojg9yrNfRvUQ7b1q3v19X6FyNM6JTy85QYDe26RR4MwLGkimKfn57"
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
