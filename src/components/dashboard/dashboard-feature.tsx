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
    "Uyv5fHZqLYcgJwfmvcJ51pJSjf9neU339Ait3B2nu9hGZh61NKDLEArNqLxTE2PfW2J7bYPTwsmvNuzyqZ3stHz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qKya3iFKTEc64gCtkq9YRNA9djtNKUKSCWffoZLcdEKPsRbTPGNNvCycg91pzZX7WmYhgjdBxFtUrH8fcnVEDaK",
  "key1": "s9raacBDeqMXNu8uSvsHvJabXQT8k6Nm6rh7eEGBYu9SeSnqjcEB3YnKn4PB93XhddLGH3P84K7QhUvYECDMcpH",
  "key2": "3Y638NHhjwsLHzeSY5ZcixpEU1Tc9J94D1CgFYpcS5JXQVnNFMBHYJAJZWD6K9hwXXviJkxkieeMja26oPw82cXL",
  "key3": "jmY1hz2XTiDJ7hFnuLELGP177XDB3MF9e4C5ZA9GoHCn9J796eRU51xzJkZTvm3PeyJ3ojpBSSb1QBUWf7TPrnW",
  "key4": "3LC7xUoUX9Prm6ABuQ28WSvnhHhxUkEdFCkE3qzfjCCeb2q6qvF2D5uJ3ervfkzVLqM6RzCY4a3vjxhMyfjVZFRX",
  "key5": "5FT2W2on6r7gzxsCRX8Zjic9gjmd2BYeY1qjXWqgHedtEPoooLVsq8hQg38LY9qDYhsxA7oZnxgVoYLfMLrxmoEL",
  "key6": "2g8eGc3Gy12eZNLmgPr7q1BLczDpBy17zw7ozcmEADpmUWHfHZX7c85MutCsHxzxkUeivD138w6JyyXkPKEFiQr1",
  "key7": "5vH5N1W47tJjMdjoM38Yx9whqV9v2qr56ByFwVDtPaVyUUL7hwYREoos1K2oT1s8Npx8GfcoaUhZto6WEBijCEzK",
  "key8": "5WaMUrHNaB552Fkpk5gfdwLqRCuSXusAca7xRj4spTjGFLYFHYewDvLmEecDocYmqsa8i2pyEGqNyB7Q8sKkizHW",
  "key9": "3q7MVWLkdmtm2i8HiUyK5CkJhKg8V7qEqx6tJyoPHVA7Yw1thAWSnozV3MhvWvs3LFLRq9YjkWFTWpMwZ52fsTPx",
  "key10": "v3GTZB1fkvQsSJcGz5TdwALnXeY7H8krKAfcsSuoJ8WQHqZig6Q8cnaa4sdcrq6tCznPFVhYtV11T7AqX8ym3mP",
  "key11": "5JXqDa8GWR2cobX3xxg1oAuYZWeW77DxyTh8Y59iVdpUEPJwCT9r1hT7oZfHWZAo1g441f1JV5KKaSiLbdUybgg",
  "key12": "9ztTVEsFYC83chK3GWtxankuiyfpLWqjsovhUXo29bsofZXePGNtyTBHCHYfecBFjRG5h8LNU5HdKv9xa8wdndj",
  "key13": "NLyP1mzyUBe8gPm7SsXM8cFPZqRTzbQSsyKQPsjdaJPgyBEbXJtsuiiQ8LNm7UKgVZaupiydEMwfXsA34o7tnPh",
  "key14": "4kyocRHogWpCpsBSyuJXsUL62DcpFpafnCjW2tF9uAi6AHKBBgQWiPLJTfZnV9CjnzeLwmJr6fHNbvH4e3HdK4ZV",
  "key15": "31We4qvwHE46xw4yX2gxUfyaPp6C4XFrP78jHNewTn1B66HhksjdXBiWFsTJc23XGniAFfPTdQTG43UENB9dEMyd",
  "key16": "4hYnym3tmCjE3KCm7h2qqHKKriLULs35mnX4JPMh3sWMNCtd9kdktUW4Rxps3dhFSeSnrQUV3XurjQqjNA8PGMJP",
  "key17": "61fqT4dASMYWV94JfbKSPeyEZhigSbES1J7SHJj85WsdhTRFTfAc1FkqSYWtScA5UQHFnB88WfD6L9Wq5uqDdDLn",
  "key18": "43vaRaL1MxbXTuaxsvYaZp9YfWaNtvyFp3rBGTGK7HNJbJRnXDTz5uvjjhNcSVntZzAM4nwod6EigVu1uFdkAFog",
  "key19": "3g2Nn2fPF59LRe7v7epttwRQjbbgU4mBbiEAoHZhWUp7Yx1s2FVGQrou5SmrFUBPVVTvHKCdZg95RS7RUeTSyGnU",
  "key20": "5hBZjzq5TuRRbbbqKRWU7nuNqrjbSPaHrt1W1NpvRTFwZ74aDfzMF2C6xfGmbf7ZmsTLD9yYb5bz8yscGwmRmCpG",
  "key21": "5GDT4uwtGya5j9WT95RM1iwMfp3VpfNEz6thpREkD5bm7VmV6itW5jWZhMCVdpTLh3aWz7F8FactXYQdS55qp2x1",
  "key22": "3sxvUJE3wxNvRFxyEUkJYxbrJr3PoW8poqi3PZ57ZUX1NRVwR1CaiXKP3dSnJ8w3q5FXkass653NzAKHz5UPpzLe",
  "key23": "2anDUwLkUibUSXPC3Xk2gjuU1N15f4ZnPgof7Rwi6ehSXhR2Y51ES5QfjGoLLNgmdKdZwftCGwJDq5vLcWU877kv",
  "key24": "numXQEtBpyWLT5xZyBXJT1XPFWTZzWLMiurQva1599pKpByudUbnFzbvm4FL3SUmVQZYELZ51asSQ8bdLBcjrQD",
  "key25": "2iuryaQdxKvHCb9ehDTXcw9xCJ9zEhUoAa7LniPfUog3GMpSKSSVL8Zkjid9qpovtEdcDWB5p2R7oGpgmNS1jvGg",
  "key26": "57iVnngDsFcAbd79BHDtWmEbvP3DRfwGT1VGS2MNBsGuaFiaChsKcoTAKSmzB8tGvxBzmdscdcWV3BGr8BicY4Rg",
  "key27": "zxVXszp24rhhaUA6gwFZpe3GriARvZhdYt4c3dmn3Wn95rP3z5Q1BJQ3aKqRDP882BgMBP8XVmi3qJQXr4NGiYS",
  "key28": "4WAw5KVAbsJp7MxrpCaeSBmx1ytzZHaAeB7fq44FdVfToensvtFQkjwB5GS7r3j3iboqYrUCSqjuj6qBWw6LJFGe",
  "key29": "4bpjjrfjY2zA7Lhr2c59sPTQzFoAxd4hDhs9K2Mv8PoV9VBjiWPtDyeNDkw2Ud6istr4mge6QM7tcv28F6m7aUww",
  "key30": "2giP68fWLExHdes9Bh5YoQpqa4Z6413fb2cudBbPcV4a97iadae8udRK2ffB6jLyTZiYYzSZo51ctvfJ7y9wrajX",
  "key31": "3KNSNbMVssZihGFaHvtpPoSq2gM8sp9XKqRa8MLpeoNeWS98as4D1paAygRdbmTHXdVYG2yST9x66FNaAaBGAsrv",
  "key32": "5rGMtCP1AMLJJziTZkuWjKh1osF1zkrpFQdKwNr9LgqtfyTvsMYcsamKBVUdS3LaNi2zuncg1rkm66rEFnHh9QgB",
  "key33": "fEXRiPLQKbRSXFCcz7bPwck6XPLKumzgMXsJf79tg4npfcRyPKcwUihZhNhKqe5Ysw78nWGfxjVGKt27fq9pyvU",
  "key34": "31wm8PVt2z8TkZUCNuEkk8B9UfR7vZ8kCU3sH3JL7CkRJTsqqxCcCHDDGoS7FnFFhqNNS9YXsyGX9p6BnWeJs5Nq"
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
