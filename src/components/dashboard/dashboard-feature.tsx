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
    "2yRHMkgM1xBk8zQFbQGNLaf5dMtPpEJEbJxa6AZyRoLKQy3gjbi7Z649atfpAPzF748kAToLASbrr87yLguDPFPY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aaXgfyuBsbgq193RS2GBCzmduDa8xiREkJJMK2tobNjQDwcF24q8u9gZjkZuHPhRJpMYWSPVwYEuCPGAKjcZjTB",
  "key1": "46jT9DV6hq7mLCtHff7n7cB5FG3SjLZi3Hj6yqwRXVow8PSsturCfJjXJWfBdstSEZDerijJxKeAwDvAraxXpFTu",
  "key2": "5rWgyqXgSzpeYafzHxTMKBBCJYUTEhbKpwoNCkFbJr2k654LNCM3fACUSFCEm4rdvrWpBgjSyYKQc9nnwnGU3gj3",
  "key3": "4m3kJnWoxu5qFWVNF8dge8i8dWGiBAttvcJMz1vbUddKFdxu3TXJXuqarhkwqv5DkwTTMXDa6ipwTEXkhwgvDntf",
  "key4": "3JoZ6TKj59JAPBQJhrt9oP4NW7XdAmCTBQQj991frH2TcWRB5yD5Dob7aZdZGuWd1BAT7mKCDJ7VRpohWQunytqx",
  "key5": "5s2QEwXLgn3G4igH45ycgixXdmLM4kiJMDz78co49u9cYtpKxbDgDmdncEUiSi15NAvpKbioQhY67B3vS1x9c359",
  "key6": "3Rwyk4Z15htg6jLhMiRXzdiycAqP1Puq2Cp8ruCAWe33YjM2Ke4s17VxpkAqvBBosKaDUWRHW8NTVZacfKtC9S5C",
  "key7": "2dycsEtgMWZLD7C1gW2kun5Eyb8WxSVHgKsn7vFABcn5WtpZxzXPRAonMVxnwTd9EkhFQygdqhZx2nAgVvFVw7Zv",
  "key8": "4yLtTTPQrNrPhaBsiaWMuvt7Z2GVEBBUYiKb1JnqcE2FpqSuVBHxp29aJM6wPBZgQT9LiPhrf1ahL3xtwY33Lku1",
  "key9": "3U4WuhtG6eCtPhLXvc19pmJ2HFjnc9wz66PT3ZZPeysPnyUXZup7n9RGUvnPz3QSHdYZ5fTEYgrXnhtysuFJcTah",
  "key10": "3vfxYuxBKbyfLTJUjuqMWzy5hrzsybyQn5hkupb1V9AwKHtb4GF8eDosvkFcH21e1qvPLFCXP1QziLcgWeWWcAkf",
  "key11": "3Axn5ReesAcBeSLP5UmmJ6rCn2NGMT1WTYwL7BgUvXfiuLEKn6WrnbGkwzja39kWKKjTDbFTLijtCWHbryoWcsh9",
  "key12": "2Xy5ophEtPjAgz3Q6d74L8icXvzrVsL64iU5NLk8S4LsVnFeJxr7fiBRnhitrdjbTs4bk1kFYeY6JsT786qHsvBm",
  "key13": "3BQR6XgUqBfCTB97GdY8T52g1CzGEViGai8aHe7yjJnE3z2R9rT5mmBFeBr22TMhDckEBJQcaUJhYPqu339DFsze",
  "key14": "4Gj1bU3tMD3WaGNzoivqmVuZR9MnyB1NAUDWgXkRj4TGWcHxV8rYqv3NRJr8DaChZAYuMQVUkhunX6b6nVBLLkQ8",
  "key15": "XA6i8J3wPrvsCzZVXFyfriuUxfjmbx5Gv6iFNRqEih51zatgsmUR4kfhJtDLREDkCoTa4uqAbhXQfjVjnBpRUbH",
  "key16": "3kgdmUct7YBro3VYYH9Vy7MztgNtzeaJh95mdtVuzBACYeryyMuU3oJ2Xhs6oVfkQcvkzr5PrHuzPuXYntTy4iTG",
  "key17": "3ZmmcLcur7KM7cz7v1sz9J6XMiFMyf7vAhM7VW3WDBYuothRi4NxRab442Q83iZwkKSCGB2DEKZeuK6X2T96BhBL",
  "key18": "uajFyWLnzZB4nxauYwBxVADu2EpyPzQyswfkhfbhnUAxaNhJeVhjeEc8nzKjKxq4dRU7xUZtSLDjehUNUjDDdU4",
  "key19": "4ofFk2yoVCqpJW4hRbxszxnvYNZCsA9MKdygotjRYswmWY2HqXtsGZv674ene1ar4qmrQkyQt7Qbg7CkpTo6DtXi",
  "key20": "2FQBaVo8BmuL8zJpLv8bMXLGCPS9VGQv8DZNq11WzgJ3vhbBFshocfVKQoHvRmpvNMi29QYiwPjwVe7GJyKb9g7i",
  "key21": "4yNEySYTSXjocH7QjX28fmvpUf7LygWW2CdVfQL39c5PQF3qBRREpcrAsRSsN9uRgj6vKFsbnAbwpfGo13PzypFz",
  "key22": "qkoMWTxvfSrUpz9187EM1cdUhKnvvz1T6Gft3bhQQ8vo4amTTyimDYmsLC1p4qpD49MiLTQENeVjFnc1YhmuAAt",
  "key23": "4Zfz4R4x23Rum9GZxGx4pcA1FH3VRDGZ1biPKHzVaDB7cMq5HmsHgZQUmcFa3eSuj8bAiiJTYnqs9qHqSK4KPaw2",
  "key24": "4ME37aSqh9yvKe478hGbsWbGG1rbB38vfGHVFbuYsfE8XJ9udF6CUqWSEHZCwzsLRN1WpfS8sCFYrKHDTmNrBFrA",
  "key25": "GiT7AkwbaDXZBVCiQtc6qSTPesbRK8J6vg37HK1zHD2sCaaDTBrwRfHAu6ZwhNVX7mW3XxVSUaDPZxeqtWaUT2D",
  "key26": "5XuA3Z5xXZNvtyhpiFjpfJciVYo1ihNAJRK19UzpZW9W4rkZYn4QApAPtB6avqfgZtXHk3hWmXDxb849oiNEBPbJ",
  "key27": "26hUfxa8QciFnfaRh1NfsMfV9bGEmhjjSFj2g3RjtadqKX84wGGWfFayGh8XUvWi6vuF7TyLksaeiRUPa1TQVhfM",
  "key28": "2dUHVF2ZnT5MiJtcrvMk6uxGXdU9dzPHN7HzKg29sHRGCp73YHvtXSPF4vH4DBJk776jzQMX9v1U1iEwRdeHo5VA",
  "key29": "47MCz58fk9NnUiVvcuLqQvGsnLCYHxsbyxi6mMHPuh9Hg72YtfL1fuBPkBMxqgsTaX8G2a6QS6YRkG7DviRKRKiw",
  "key30": "xqFmtxpikPHTo1BmVwzfjGKZoHxjunUNnELQtT2ivJKBbL6XevWeMhUtytKhT7Woeou7wnm8ygde8cyPjfQKLUR",
  "key31": "4iDvM6TwqfbxLeUCQYHDh6P3uw9tsyPVkLP9X1dUpiz5BxMP9AySJ7qFxnf6JvVPiW5BcrHPRc8eCGZfsjWBzeNB",
  "key32": "4KW4rsjcV3eKaEKHnLLsB1J6JoFyR4pK67UvzCcC6FcrL3KHxjra32c9vghMs6h4HnbhEE1CEU7RvB3Us7QWJgq",
  "key33": "51HJhfHMAoRanRtRtLyrfo9g2xPC3eLpYfhWR4euPfHyCLjpThJmRAXogNj4RJUZq6B349UYPsFcwGWHCZFycZt9",
  "key34": "YM52xPUJL7yDc2JxdcM2QpFc4L6qULPSp1ASNGqNCmhCYSUSGtkJLj1cLpbGNUbUBBXmVL3LJqLESk4smKVmM2d",
  "key35": "2cRF69j1mqh8RjJsPxHXLiNaoPm5VjS6vLsFahTiWGu9ZjzYCWAPD1YDvy8fm8YDp2W4VFRVVT1zLf8n6c4qS9kf"
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
