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
    "2aevpFuresoa13xQHbDUs4VUcthUosVDjrGX7Jyynu5tfUo6W2LUWHcvVc9PMmuaYHprfUYLfmZJYfJLJoRiUXK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PBXpXWxoK8QypTesj6c8GJR9RWTeqikpxE3pQQyTXGx3RC3b9VDmu8NzFk3PjgbNui2XoNgH2a65N184ix1LGZ7",
  "key1": "52tPZwRwrLZbaCeHhrSsKWuxPYA8upax1ynYqi7bBcZGg4UQzXy29satYEdZuKQ5sR49FTggomFZx7LbJM15CLSm",
  "key2": "jJpq2ckyRn1G1wDpSoaxqMQQM6tMTgU5sXCMHQfmpD89y6zM2yq4nEXVTJdkQGjD5KZUKhk78vKtTEiPHDDn81A",
  "key3": "59zQwAfgmgqNZbj4L5jqcTAe24UNKdaZmYKMf46KuNwiMj1a47xLSfrqgeGoao5B1jKRFXTbdZt1UmqijiNEURsk",
  "key4": "vKK7CnN26m1Rm8vGzyjCk1h1jFStikWDWq5YzK2VtkMtadBMh7ovVCoJW9pBmWZuxwayUHdkVqdNJjeM7WLxEGm",
  "key5": "71uwY4Ch8gTuso3H9AmCCgA2B5qZeX8SPcrbCRh2a2ZBxkjbVgaqxgoQc6FFiSn2zY4HoiRykULZhuKRq2gx8sg",
  "key6": "LZuE4nYpGm1ZwHZFKQstor3ojoSzoV2DAG4eos38HK5rd1o79rKdmLp6zFNhAzMmsF5TCCVeZpeB18HPfqXXEHN",
  "key7": "sx26ii6sJBQFy21bYiq55HS5JmswmLSqGfESPrG4GbUSpMFicWm7FqLPCU3fFAHz4eHpoJuT67SUb26PxKxh9Pf",
  "key8": "5NmjineweoxypXUsMECGCAKCNPbHoZEM4L1GeAtPUpMeeW76WTbkbQ2oSSgxwWBgirTPns4ceGpBCoCFYPzKbuPx",
  "key9": "2Tdk2of4xZApjdQgQ3BZX7tFeqpiJ7wwusAZ4JJfEkj7YhQ7jAZaNtcU1q9hRxKNspYqD1fKe72W1wD5Zf8BdFoE",
  "key10": "3dxB4x8z5RrQryw2txyomNjnowgyPjuN1hDXUmbQ9pBq3nhb4MHDFPuZ3y3ugUP1occVRzgJgqtx7PPqsNicNBYE",
  "key11": "3FF9EBhRQXqvQy44xr3quRA9SAK8oSuDExKUuaVRFSwvfSPPfkzq3wiLy4sqwPyxjf4shp26Cx9oWA5a1j6uL5aq",
  "key12": "5LNBUGh9biZ3HJ5Dzcw4L6DHTes8eCgifzeGdMsiYhLM9GKPWBafpxL1JyhQC61gsQiQ6HhZdaVeixoirKU66gXB",
  "key13": "5SK4T2zYuhbMNTYzrmFxRBmMASxwz71jtMVpxxXUCc57V4YoKwcE1o9KX8m6FBdSM6BC5dVVCa3TL3JEnLhC6VMy",
  "key14": "4tm5dbN27ofButKsTVzsFxfUvtWTgTi6ijVm7h2Z6RmtXhY3Aeswj8mqPnadVE8uNM5tx5Mv2KdSJ1yMLrkjvtgm",
  "key15": "5uc9HBrZY6xZBdS6uMQuCaukgrz44xSpMG5DqAzT8wmAVXQ1RQkdNfpWKR46Qpj18LrWAqXEapLsibCbzkVs5F29",
  "key16": "4BTB3Djcpi4JKUXrb8KKtVwyiDABMYA4hLxcs1XtrHfXt4TZzQyPM4Lq2NQQmCLBESzdN1giuUuULK4gkcVfC1Qr",
  "key17": "3jcbsZhD9cC5FhYQ8BcEL94SQ2r9dH87BCy8YomSpRMmNv4ri1RvghjRCTbABVXKiVadn7VRQwPRFRRWRQvfMc6E",
  "key18": "2BmhnUeYLH7MXBuDMrjAJyroEMceiZi2ebpXBycRHVf2BssvVhrV99Xh8FfTUQFtQMn6AUPZSpT25mK2EKirJ81w",
  "key19": "3zuDUk2a8wa1YGwihMbwWk5ohKBEyzf4bork8btvSxgiNhARQyyQgUp1RPY8BkKHfAYTU8hgnc6cJNphEzKRK4sD",
  "key20": "3pybe4gVCc44Asz4G9SpEboY9WYe5CCk9d6gaeTvqFAnkuqzidBCwmUNThMbekYsHCktzWfUNPzm781qNyvkzhha",
  "key21": "GqPbcNot8ZXwPgjRp4fnNUCBThsvVfcnbVK1QDTcmEHLsXxc2kavdGkj6ZTJ8Z9m4WBLXJurpHgN6JDRFrcyhFt",
  "key22": "WhaHqjrQnj51jYrAqfFNzC7zPreDrkHCm7aotedmPnJCgzoVufb71ovuz5qNzxURrPBy8vu8VFTH8e5NVtV1kCT",
  "key23": "3qPZfhskMaWGBLaN372NaWm4pDdzVm1HzWLivaFNFVwKNPxytC4nP2FqZsKhq2S8n1de4Xo427xTG9RJiU15gK7z",
  "key24": "4LfVkgSRTUCr8PCfvcRU9QJK4KoCjMyzqGBkCgJWEKs1Jfdkxt92yzph3BeqmpWDMe4XTpZSMm4HNUqujJdzdaMA",
  "key25": "uZhYneJu4qFdFQjkk7t9UqmWmgp2h4Dryeamw4fsWBvRRBNNTNL5FNzxXTGjYaDGLBY6fuqUYu5mCdjEwBAgC5q",
  "key26": "37gu1NDgmmvkuGVq8fiJgoaHwhonUotuHweNbV37CoHqtU6rnRzXWhGUfbvHd8Zp6LJniBvXNoNTgezCD7vAF8yB",
  "key27": "64pzd28CuSh8M199W9jjsZnkMw7oDdAnABkeZey7eWnpaF2mpoSCDnp7FH9XepimYQ3mcgWNo6Rv9t8i3NxbRmFg",
  "key28": "5AA8grS1mw2NekBjrzC4taqENA8vjwCNaZDMNxRu7tBm7bVsjH6eGEnuvds6eT1PG5zu3zBDdT5XNiBso1tLL9GD",
  "key29": "3FTMMWVqw18MDViuQDzQaeHymvBL62yLFRKTeGgMT4zRHDUruE3gYSQLiopxiNrW2JMfxbeGyKunuYqawXy2T7Uo",
  "key30": "2ewxzXCuewcj6Z1ptuM9faq1vwk1VzjPej8fwUqmZsVWQhV4zPoBGxoL6JugT9WSfjCD2CuGcgg31DHR5EK26qmp",
  "key31": "4UgBkYVvVR5nHWhTAxpfyw7qCzkC7PkZ6RcfDUm6GbsAeDckZZYm4NjKj1eMv9X6SsAnmS6pF7Yq9DPW582XjJ1U"
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
