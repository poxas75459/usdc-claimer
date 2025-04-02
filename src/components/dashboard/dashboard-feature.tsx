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
    "TBvyYBX3D1AbxgL1GYjuKQJjD7uwA41SNVpNSTB6WA46ha54zXaucxiZ8ZRCa33KTvkLBZbnT73Z4pbodQZbPxu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2j28VySXp7ksvWR2hAPsPTM5fMfW4a8u3K1U5U2gzjNynf7TVtRmJtBih6FVPa2Sw7pado4BL6BzWFRSxjamf3Ld",
  "key1": "5md3uf4PW4Hbdgn89hAvo7pV1cBnXzNCxD4RomZWXh1fpeucGoAMbbmiisvMuYk4fHhXomrnTNEWyMXMcuBcEr5w",
  "key2": "5wta9tkGkHT8gntBJ71ERifhK5ofD9HSDkT3YQtPaF48AqjcTC3imVc17JGVfaXm2PAC7TwGYDKtgnyrm8SnunvC",
  "key3": "3YuQZkp6WTH7uF6Taia1aZPCm1XRocKDU6tnNw5UXpLHToG3osve2MTPU7oVTh99XvtjXcQzetCwNpVcbVf7Rfuh",
  "key4": "5PhBpLrgg7oFScfNNPTfL9yiWCFgXnrmHGtsLS99s5f54k6JZy8RncUYkCbM9ctqWx6GUJhhA3fT4PzFDgG2eSBk",
  "key5": "5DFWHoyxgYXtubqiUCcP4RU33tDBKia5utcWjG4cPnFEmJkBcxGfhq2XdKAeVDve1USUYHKKnRoh1XSCwdYELRR8",
  "key6": "3VR3VZqSZ5grkRPitW8Ue6wAeVKbNPGPAn8Kr7sx2LazpqcfJEjxph2zxzx27ntQ7JfG58xTiyEoooN6UudTNqY9",
  "key7": "5tSDkEKn2EcjQpavhDBab8QRKNpGSCFf36SqmHZ8aGUTZ1NdVA9ztR5mNN3i92AB9RWMiTVdp6fBcDY4QQCbpUJP",
  "key8": "5tF6WYmApdusj83UxjxSRHq23LR3ntgEBoHTpeXJcCSR6AWCDsPLc6h3AzaUYHgGxLo1f7Jzji2PFrDdCppec8tR",
  "key9": "21wYshV1o1a997d8GpExNtwrggpH6FgvRPQAJZCW3RJtV9WxZthmAEEzsXjFWXzYH5e9QgQNStwQAa8ED5v5uUEt",
  "key10": "63bySjHza4feWKFiWbPzxcqoW15XJbgekrj4pGvszpAemtTJ7gJUY1kvHgHEhr2TePd5rHa6u3MzQVJxuGMq67Ny",
  "key11": "Yj1CFKvbHdkTGcK1PGQWU1k4fgapnT7YUDrHo9w1eW2rkJ2Ngu7trSAEF9RxZ5B3d131JwDKa3GBf8EzsyFVEf4",
  "key12": "3zmHAnbSwenXmve3t5wGZDFQfiu1DRC8QYzFcnTWtqWe2Qdi6LuDPV7kLgJDoQ9ajye1cCKycAVzKm32hAeuZhcq",
  "key13": "3SSzfLjRcjQUi42Pkyq1NLqDMnHp4JbyEi5d1xiSjCHUhrHpVGuUWzn8fD3KDCSbBXuJgwEMcsyuwYYuPt51DP9W",
  "key14": "4yTe2i9o13yRDapANWTS8vUewsFwGa11awCP9PrQiu26RDtKNTpA6HxeZP9BZ9s8YXRgJSL4D4R1J684QXyvC1QD",
  "key15": "BtLFm1qPb5XRHQnmjniyVBVmKDKupTcHa2izzwYizo2Mb5MpqkamuMiiA2yLt8GLF22Bx4YGLBsZka4TFNhSB3h",
  "key16": "2mGy4xwvnmgKiTFjmh5mBjXZ29qefBEAR9ToPCMTFb8oDRNKsT622c4FoWKZwNAxTjXYeayLcceTUvjv2ekwTYGJ",
  "key17": "63vezBKbFcgQfjWL12TACb8CBbe6jquyg2e7KrvjYyPCg94b9wdruSjTrhoS8G5HRigiqPtYXgdE3YoGEqjrVy1p",
  "key18": "37frMwDLgx3yZxwifqvs2Urhy3Di3RPkgPjAvrxNUfkoPJqFsb9E5vAR1tsjXjE9VYPYYfo1nrtrjARb8i26PB87",
  "key19": "4ujmxrwiYzzENZskNEz8e83dpvUags1gH8hdDYKA46KpSZkDoKCGSeEtNPnsnmuqKJCoiuCYFsabZYgM1ijPhfcj",
  "key20": "2DHGU857gXoAg5xzxAjh1dCCC12rTnjUwV7GpvaRa1Mk8ucNkaU77YoXBQtq1mcSYCSCtw2rHyipQce8MAE5tk4f",
  "key21": "4Z8yXQ9Wu8pDkGe7c1TVuEZmRzTXumZDf6KLSQ5ZCq5sRST7GrByLJPMY3Gng6tMsq5WYuMAnnjWDe1rvbkffa2c",
  "key22": "vK4Mcnc3qTQxX5ckkficM7m599NY8pEZzVx8dZMdrevJJ18P8fQ1Fmj9B6XWATaaWKp8fMCo1fFiKHupPZtKFMr",
  "key23": "2K25bb25rdpZ5Ab7Xig9jHeRdJzhFKffi6PssZ7iJ4VDxqjY4fvuqQyffTb3yx5xBA5w4veAENjDde2gd2iyNjMZ",
  "key24": "hwXPG9YmuqTjfCgjHa3cVdtX6QdMRRPhN7iHSMb9jjyyLqrYqiT9BenvSYqdS9tBgY9xqhTb86EKCs6K36EU4em",
  "key25": "4qWDLGC9dEPq1LqyBydDdEUjGQ4g3h86tfGSTGgvSoAkEzYtU2j87FxPxWnHji3EjaHpucZiyFGqL7Q9keNAF3wg"
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
