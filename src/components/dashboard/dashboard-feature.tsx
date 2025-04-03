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
    "R1EuSsdhBAtNU986Vg8YpVedBpiGZdJ2MKE7xurNZ248dx7nV9Dyi8iy2WXaxMVE8CAac5ch97h4XJw4KdU1d2c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3riBWmUF1jLoH8bWi99LC8bxDcMfeR7SXLbjrJtypuvC4LesiBi3ZzoNJfpGZWLCLxd6SfnX7Vu1BvYGU8xAfd8N",
  "key1": "5MPFCFPjwwD5hKd2XPPZyYpC6LM6vWE3yCGYYeA62ajpxBWxS9xSE9zYS16KQLMoL6wiUQgRsaU2zgJ7BjuZCqCt",
  "key2": "zv6i9ttFPbvvRcSQuznPWrymLWAuRrq3rd2v6g8aebW66n49okdkfXWoXE8H3AjJmRM7okzE6yUwHoQVxECPGo9",
  "key3": "WAt7ry2dcEczv7ufzWd4vt3fZZD7z9xUe6FSm5gRnu3juLWRKfWsmFSVogxg9JwY95C1kLqzz7Pn6LZYrcjrFMP",
  "key4": "g61DjndFQcUNRWnLaV17oxZUxfV4iunh5ULPKsvBgUJiJtZAi2JNfCnzLqBB3isqt7hA7XAb4crW8UK1Gfe13c3",
  "key5": "4KCWFqHuU4S1dJiSWMHM2KeP2iT7YVZKb2pMA9GF16tZgpP1odmVFbxDZmnPgCd6hASNnTW4kTGhUsm4siLyQqFT",
  "key6": "2t3qpu19ndhz2HtmS4J8z3mvVeyptV57xPeDkfjcSF5jxpc451vcWxHSsmwxuHjfgXKsB6LULDD8AbqahSk2sSo7",
  "key7": "28gBCRnfa6fjwGkPmV7jcQ3jK2Amxd4kZ7QacTfEToX8JHatJGwQYPDf1bHp1M82yjLBoQvoaPj2s28ARdGFKMZt",
  "key8": "4nsf1xrtNaUuhLXaiwJBwrymrMEdV7iWpak4p3uc26HGwLYvGhLsEQGxc6oLdFMtU7LW6HjCd2WS6pWs2Uxf1iGY",
  "key9": "3Qfciccbu1YUhvNT92KPMsJn6ee8ftSLYZKQtTqK9gN9DkusTgBs81YmCme3mmRVdUXF3EhX3FCfPvTHMAC8LXiK",
  "key10": "5onkkhDfc9c5DWNNNToAXJwfL9fsmLaWXrjcdLMETLvgbmFEcci7B3DjDfGQiumLDi22F6bVce9UEcVxxtkheMLT",
  "key11": "2Q7Gse55aPemG6GFchbToNNYmJRas8MrSKTnDBiLkBtXT5eK29YNJvkwz6fF7zPs1vGi2t9Z8SkR2G8Fv9kDiuKE",
  "key12": "2c86qeoAKMpv9HRzBixfg1VR6nSCycETQn4mCyB7XoRX2bhujpSchq7MDuNmEFfGPKY81dJnS3M3e8iWMK8uYjZP",
  "key13": "4LDytNMJSQ6wWHm6WxWq97ygpxY7ScTb8U96zJmWzCU6MGB7TJZ8ZBMGHqB8Sbw1icWwTs83MQiLGNMYanJ381JB",
  "key14": "5VP5YCY5B3whBtGfNa87ymbfo6bS4UswMTHL3x3r1JXFtpeXC41JSJNjcbsJT8bpbDftYag5NBm2UmGQSVW6o7xM",
  "key15": "5tPtDaJSqrvHSLPCv133FrxAixxKh9D6XzdJHYwMEDaR2sjYCE1K17nqKhkkdZP7DLd7MfkqKoXN3hK4EEaf5Loi",
  "key16": "2X72CiCRwv7eCGtyB3gg4FBYuAho3KVewjYKz9m8FsWjG7PqawsrNRG75ZcnDtWe1CTMBoYWky6KGXNf4Go1EzeH",
  "key17": "2ec2pwgVerTY7R1Go9b8N6nxzAPLBHsb36n9PiLZfkAdLeatCC99JfWudErvQJP4DEJQ1r2ipD7DcZJwU2zu1TMo",
  "key18": "uWXLPb1w9oYSYgBhCfEekhq6TLt1NWKBTapSmzqErbTYTxEKjaB8Tw6oQ9rFBgJQGd2DkGJtZF6ibzQkyjdTJPN",
  "key19": "4G3dcpTnobT5trXinrAN6cFcWS4V25abAsCF2LSqAscxqeSLonZFReP1J8ASCDYb2qmCAoFj9Wt5Lcao2uQ3DThh",
  "key20": "5fXWijGLq8D8ZmRqXHkcmoyoHCw8RCppWZYxf8Z9J6n6gy475BE9tnEBcs4N7NMiKRri29cx8cXU9iXuuQWheQWA",
  "key21": "26siyGdYGrUok6Ew5k6kzzZttHvtWQHumQhWDhyQ7zea6VF9Nh4YCuGEGSLiVnq2s5pnB8Wx5KLPwyBBxDs71SKv",
  "key22": "735wkrQ3Vn2tCaJFbrkUw8oBGAYdyYgj9WFqri7M1yuArFUbp9XhE7xoWdhXTtgJdyVQ3c4B1iy8qtSwkjentck",
  "key23": "5Ce3xiE8EbiCyj2ZVJCTZQbqHwScJgVqX5LE5PeAHegQWv8dBYtbWLPQooBpSXSu5tRDJu8jpSgUdCqB9Ac6D9nM",
  "key24": "4nsKYdgGuaJoq55UnWU2rmo5PYrPRx3xBsJnNYs9DK2UWgTVhA5mHiTj9sEcVhUMWyEaCMh4fyLurd5hxZR2BERP",
  "key25": "5P5gCbfGC6UpuFq5QcTwhzABLW6Z3Punm8kvPzxb8uaCmN39zittSEtU4WLLtfTHeXPvgUo1KZur4aFuGqQcbk2D",
  "key26": "1JWWKMaiQ68dHaDb3bh68V54xPZu6xvHJ1b9ykX1aVhRqjQ8qapmFYUvhbt3NVpTr8Bg9ZRGEEBJRc8n1q9nQnw",
  "key27": "41HPeXV3dG9oNDv1KAPR7Q3LEabPHQELMbcTmyb91uDCpFQp4Eboqbj7waV2Z2SVtqzp658xY5cshxbKLZ2CkFpa",
  "key28": "5JXdWTrExyfvRhTdX2m5g6BxhvywZoFDMT3PcwCE88aZ1aJHyZ5M5LQSEna3AK1GPEGUQeSfLvjnVNXLqfz3NSpf",
  "key29": "2v26WxSFXue4KAbRC4NpjGjZDjjDKv4HTm2rV8DHuRjyt7CDoDNjBE7qfuaBFGtVLpDs44Umjf4FzFG38n3vrtCQ",
  "key30": "5zHDvfJhyBxGRPDjMthzw6W9Tia3nJKVUZ7WaHBoctfUV5vUTmPVzqteWA9dK93CdKd5es4MSEwRLE5koXvLNK1F",
  "key31": "xMD3BxNLhoUb5ZNmt3W9T43SVdNPqVfbiF6mr7HSvBuKRJBPXU2TVBgVFvhcgdxJMm2PGCG3WK8pjmhQQ8CLxUG",
  "key32": "2M5bifbGtKLEk87enmtoiNyxrEKZt2hsZ7biXooHZVLcEMVPCVvDLZjWBH47F5KQvXWXQSSoeKZwN1VLoZXik8on",
  "key33": "3paF9btCpXaBbHtTJfFwRCuVCbpStkFhVGz14i8z66gux6TFfLhHjkbjoWNwcqriEim28oounC3vYp5emjKG7uLa",
  "key34": "4ZddzD5qYnFWG34PzB68ZSwMUU39V3isEPhDCB5CanzhdxwxopS2C7NqyHFUVWUr22jMS7EyzK13rn8VGQ2dkKp6",
  "key35": "3XMHCVLcfS5WLXGj8pLmYHJsGG8j6waVFeW4mYFyPv55yTSisGJ7Rpt2i9PaQ2rM9GCM9HrQ8nZz5PMdMRqh9W24",
  "key36": "4jNX4rQvQeA11UQUp2cbwrfi4iFBrXstb27h7JMRLW5D5c9A1tbitXEPCL3k9myCX4bb3YqQNQJsSVy8qGUGQjtF",
  "key37": "48xNEGeZRtLCcfcmmvu7xCg7ryvimng5tFnuL6yMaeCFqGs121XWy6UyrSofAeNG8oDrDhiP3jPkd6rYYXaBN5jw",
  "key38": "2wuZGDAASu4282CcWJKXZi6VtMRpLWua3Ph9rreX4TD3VcAKemqJCEBUXWcCvn5kAK8fbPhkrkKTHWBQGQiPZcKq",
  "key39": "bGrWrzc7L3TuQ8NfRrS4TAr8gb6MygMpMCWix5tuDNvNvHoKwbGsJ9HVjve9dtsXwQxdPHGwKRrUSzbi7mbZ2E6",
  "key40": "3meLTifk428jys3nbJLi33GvnJW7u5QE9txMvPkgdFBGmyfE5YLydwRXH1wYPyj7A3Y14HSHhaD9LmpiWGm3gQVS",
  "key41": "245DaChHWfkY5LhyRiouAEtD6i1zTBEq8bpaQUTLhcSHzMYMFoztfuyffVmxjrMtU3VpqFy3bMrMRhCytyBBvUjv"
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
