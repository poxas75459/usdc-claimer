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
    "PRDTm9txk6qr9mdNGBgoucuLsezc2qGbUu78wSGVN77B8FHQdBYoFyC7QL9VJDU7f6XRXdufkfsGh2H6MYaXXFK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zASX79QE4FuGKv7N4jncYUBGLtFGLnJRRdnBFZEq2BuReeT7UmBxVfy1wJzVGX3kpP79M4ArhM88FPeD7ot9sLJ",
  "key1": "2dKDiZxR7jSGs11ediTbHwX5eo89XnjWtbmgiBUshDPpD4MR4quLV568nb7aHA8xZwERpYuiksBoHhLYfDi4tAS4",
  "key2": "R65w8CWhVnQyCjRJP5Xho4MgYUcAAgmrAHqkhXSkPZwnaKzV1vAotMU8na1pRYRiBPd8x6m627sWvznt5Yuwxxh",
  "key3": "REvoLtit2YUoPDaNuRHV4xTmtqAejXBNZqDP8pPpJKHjKrTZPZPRvEwTiCM9Ut915SuZDxQEohSTBerfS2L8Pcf",
  "key4": "3TujYcmmt8MgC1SH7tLZF4ThfnoPtDqWD4nacGaxweViAXiQ4Z2RkPujfydvkck9fk6u5DiCxN8Aw1MaWRUrmKFS",
  "key5": "3kZDriFZCYibxPPWBXrfucz17UKy4GifSspXyyzofUAc51T3DruxzhoTU6Sfc7uM5LZEpYenPaWpPmhXYpaPKQRB",
  "key6": "3BPTH76iHRNeUarJ3ZqPU4vvfp2kdsBHDDZX4yTr46QeuBDyJfryqJYjRXSTFk4Uqsdd2CJLTUFbi6Ets6bDhzUe",
  "key7": "R31tQCQT4XeSjNzgonqpV9KmihNj8KxiAxwvghyNJrDzMwcvJbD4fi7HUf4Xq8uR1iUji7QjwimHrUaz4FfyP1R",
  "key8": "swsKTYG94oZMDM5kS4nX8APQQAss35qLjqQZ6mL6WV2juUDGPWvKzUX9AhbRczbQNppGFPkXfMs3zMtQZ4SQdpX",
  "key9": "4Vp8X8WSbQzAR4pairQjwyeu9KN2rvmrMvAbQ4XBso5jRfXtGu6vjyKjDmASQGjoSYY8d8qSzY9aG46fmA9goJKu",
  "key10": "zSNMzeQh79rLLJqiUwCW33L2gDhkK6bHCN9z3mUCVPKUrTuwYtfvtV6xyi331idyU2gZC1sy3qQ8dFZFEJiqKDx",
  "key11": "5fqtzSNyDmZ5prTZJjT5eiJqGJHyvYUwgaLPZ9dEQeFX22Sig21S8HRzWYjHLu8x45LRR48XBXJRJT86U7FXExQn",
  "key12": "36gnbStkK1V5ERS69BDDpWa4yUGSo38KimRmvzmwAwa62n93oFGSMQjXtTbUuocRqSscPc7EGb5a9geNnhkKGxEM",
  "key13": "3y2Nx3GExCnJTKBa91kSH5uuG9c5hckTpme9pr6TNrfrPL7AKt9kV46s1GE1ise3LxLQCjdYMWJVgGmFfwn6W5Ms",
  "key14": "2NQnLrDQh7A4vLmsXxvUDCmgNnFJn8KV3vknywbVh3yZVS1iyVf8cnUEqANL91bHv7xV3hVUSxevpwosKLmiSBr3",
  "key15": "4MsewzL6n7FVaE6CrFw1mFvmwPZY6TsUEvYd71s4zz5htTbut6uSMFeC7fdouViLrQLWwdNh7719ZSUSV2sm2yVq",
  "key16": "338fGqBPgcr9XMA6XvrZANvA67f918zhfdvLy5yaM7VmVLfKyoYVtAfFc75rS8RjVhx1q8pAUxdVbNmMkmEVRs1i",
  "key17": "XsUkSq26gvvsiHBUkwyaqneLUpWBpTSfoZyh7PgQUkJypR9NezNERbAfXebXr9YtyP9b3CEqP1zKcNZtbNvFj1z",
  "key18": "5cNmYEjLwBc7eboQPWVWc1W1EvwysGwcatiB72321pZUsbQCaM1jZK5vG7swLvGcYBdVcp9GqKqZGXSuKCHUP94i",
  "key19": "3quRPkyrcBhwtGnQy5AoQ6HqNV1Y2Pbh76YHfDZ8GtQrdDm66yZdTZNuLBTktGNwgwvkHWFwyYnY22vJFaZzoRSe",
  "key20": "21B3Vry18DmEYQYpSJDhZ1Bpr19btHHdmcnck8GWGA1sfKsRcZF9PocCTihoCajQTUCNrap8nfgibi8uwAmXLXox",
  "key21": "62pDdXStj985pzag8FVmua3xemSmDmfwHfVf24h4C3Yaz13BqnvE3WfGpk8TCb4Lv6EG5SRT2bfKRtQKMSLvJNBW",
  "key22": "5emmF5srVRUTdr4KgfBGKdJCevqyGcqEnBNi2iC4uMuyDG2aZWVcAFfvXQSBq8r5mbjhf3S6SutmefocfY5FrLWo",
  "key23": "3xuCL5FqWk49BCs6rE64f6yqVRFxCMMzS77BYCA1vhrrPoxMXp76KZwKXNnmBcbnTNPniQTRwXwr5iiX5DmEi8a6",
  "key24": "2kVWvGPhaR9hfvUMi4My9vE8ARY2hMs14ZoU5ZjBeLt3xAEpriyyn3YMvMpDzm4vc2Ro2XP4eNzpqyGTm6Aixw9",
  "key25": "4wJju4SdGDrd8uYjDFGgYNQENZ3B4JpxoZoLc6EBTU2mEK9RWaxrS7BvhRK57ftRCJzyERXgeDjxDYvwxe6tzCaf",
  "key26": "xPw8kB9rT618sMcsYaQg9PCBbD5q9j2HfhcRAKj1sE6HesY5mLpJsr5T3ozfUtfomxWuQSmMqWxZTsEvhkeqXq4",
  "key27": "5BfoC5F5Ro9ZMjqG5udBtfiHuLEffgRBi55hXgAUCyBKTFuJSGoPZL5kxmYpv16Xo12SB1ynuCpF7mzxZhJc2Sff",
  "key28": "5KUb6s4AKYiq6gziShP9pHqSVZmCdLa3wh7QJymsfAxybbrNa4SgDTo3gDb8Ji1zUavFuxWHDE2KienSDPABucND"
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
