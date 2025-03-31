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
    "oc9RLgkY1Gc1HDXAGZNj5hBQhxtE2pF1DWkHfUfwBNVBhAsLdDHRZCkHViGUwKkWjfu4qMkYALxftqRJuhwmh33"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iyt7S4aTCxS1DBvoPFAkrJ4yC15TwBkmrxfRiZkuPDmaB7PBQFxJkwzZrsi8Eu7rBY5kYoCDPDt3GwkdFrwUnwP",
  "key1": "3bGy7KKQ85gdrnUd9xQ35QgnFCf4MNUMq4goQcWwC6irDawp1RvTe9AYJVYY1iXzuZberCbSiB35KAPN3eKtdRjU",
  "key2": "PZphXgKgsXqygkuqsLVJZhmDJwvWzd1oMNjAZqTVvYtJGRQkmvpwB4j8ChhPqGp9jMJx2Mvd1Avu6Gg4G99SSrt",
  "key3": "3MUBRLPCFYDKBW8FNaa8wGuDKPj6ii7xLRCPcGuG4ShRBRyehZwvMDgjfu9BehKnFhMsr52HbRmnc9MX2Vn8Nvp7",
  "key4": "4jSfxL6XwUSYqbCeeyYLcEbD5xyu2bNjjePVaFAbi4bR1RWshzp2SZxu2tdmAGeteoewuUX15JqKMdPiDJyHKdRM",
  "key5": "4JcHseekvtcobwqTnCdRKhbSLmKcB6pPmTRYpQBapFkBPMHjtrpZkeo9BBgPP2zdXQZXSuJnUqU8ct59qYuTdgu8",
  "key6": "27bsqfUYnA7GERwQHKF9r64rxv99yPoEmE6rEAjw3S7J524emBSyrfzkfsx9cS6XGSqEdVanxG8miP8x8AgpzXdC",
  "key7": "xR57e7D94QUWiHqMMfxpdx7548ZBPh8xM2kiUpukBQLhuN3uRB12r4d4yjJKJq3GJTmCWHPSsZwEjJh6gjSRwyw",
  "key8": "2pntJd7j5vbRcWLMwSdZTdVLAXbAYdt8qFWdP9emM6i7m5tQRUA3pd461RKKqm8faKqcVu1NhtBhoGhH95Xgr7qd",
  "key9": "3ppVrNTrtgKScbRayE7dxUuozKoSmAnrHkZKCXr4PQ4cQx3wvoKXMaCVorabAqGaEvBBuHFbxJqupsWRZX4LqGz2",
  "key10": "4oX9RLUGvGsKuxxXyXcPdHk1vSRT1Q8WgC6N3fkngnUSt3gzmWwGjx3B6cxGptnuTXfQnrYpF6FqdA8w4jK5NcKn",
  "key11": "4rt3sCkPiwXiHb2Kf2WbPLQTNazBin2bKPcMpC2ME4UEaNNP7985cuULPkEC8JyCagFDEacmm9vVoq9S9n89fkZ",
  "key12": "bdriKbwyENJHjWCp5CuYyrbnxqZcX15ZuySnRLDgdx6KBGLSromLBJxpQgBUqHEzXcEZvszd5rAYvCA36igadsW",
  "key13": "5VCD68XMzT9xaCEwYFSqryUgg2YndwrA9zKr8GXvk3DrLau597xP4LinwWNGwFeQPjvbKrCNH5hPjzg1V9i6fyth",
  "key14": "5qAtW1mBphxqhN8yEv5LZyCDficxyU8cQ7kzMrKXwt3yNJEY9i7DoQsuS3ss1k1WeZ4x4EoVu8vUjM7upXjBYZat",
  "key15": "25eg3Mm3WKu2wjkvjzSkQe11x4oPBDj4ZjvF3CmnZfz15FxpeHGRQjSgybpSxJ6NWzMqBgkHbwP8sQwP6i4rHKFB",
  "key16": "2edfVYh6TCimRaihX5hCQHHBtZ8dXwM9CAQUDWLnxPxh6reh9f5XRVATj38q2mQS85wHbzL2tYKSRkWR5rZmvDe",
  "key17": "5S5pQy3GrGEGLcHtCHGSAMc7bJp2zLuqf437DXTLVtYinrQ9PEh7aPE7ukWwvshYNZYbzESA6qzbHS6VHG26BASV",
  "key18": "2eikmCQDHaQssEThSNhUZDsyhUVBMZ4mcPcDcEgT8XLUu2Efx8iR9nhbF13XGZycrpwyJ4cXD5y5V3dBbjFQNCQ9",
  "key19": "67onwwPYz8zo8ByhnW7jhQV1ZckdQktidrwfL1gkX9QSKGePpxdGxGEfEyWgD741PAuLnmocUj9zfsKnpDA5P9UE",
  "key20": "9HXohvnDRST7CyNsJg9HAq43tK5tp27TZqYKhyDKfjRbv4JaMcDSAzcpZLoByCwJ8UPHtFu3oQJe9dDPcFkMos5",
  "key21": "3CGKP3RE98mgdpbhGeqnDEbZmcoDuNjSZjNeEzeL3vScHngwzDsPKN1vJpk2Dfsx6rCAf556DGPM4qa6aLqvc6ob",
  "key22": "46VrnCeDwCg7FcKoEFbBDq39EZVBs8cDsnqtmw2b2ESrJyMExopVd6sZoHbtivuhM9cK8jkzSCw2iVKPEkKEA5nK",
  "key23": "jvSo3RXDXrLjCx9sfs65hgWJ7siRkL2psSnhw3eUvpiZKjP2k9U5Le4B61wHmeuNw8JX38PTcTwXPFFSjUSKZnm",
  "key24": "2ZecEMSXwnedticTSZ6Js2h1EphiJ8pbUeM4PtbTsmPUjc3LKVsC2uQfBJ7XKr1q5kMbhFJdMJbNTHE6XjC9B8br",
  "key25": "2znBwcuNiJCipfbvpW5d9jnhZgK4z6MPmqeND9kzuCJdyvDgfd59vvHCP4uK5wrpFMJQuDcF31osEpLVnSW7XDye",
  "key26": "44hhwpku1VUfVaDSHszmsVCD5wY1p2j33N6G53b94gEo1mefiWx76aCB674f6DeQjqka5hPKCvLPRz7m7GbCwVox",
  "key27": "5RrQdAxQ96NYdCh56A7oHsGegY85Ry51jAiunY1y6nAKduPzZY9WqQf4XSaCkARpgzFKepdvd3h8LmscLAEtekh2",
  "key28": "4fXvC9e43YJq4mqiFmke4P5UgpXKPYDECU76FNWsWLSSA65ouNcXdGNXcZ2LfJLeYKBKea648b3t6NPnT5tc8veX",
  "key29": "44YfRNd2wBfH5SPftU9fQ713CvDp5n4H4bjYiQtpB2GtvBYoZBpZBSiHVmCMbaRRuM6QXhYNtGhwM7LYswvhn7zJ",
  "key30": "5JCufESG9FN4mf3dmrLxN3kmT4AiHyLmK1EbdUhK27Juc3haUcMtPgSm6pDLrMpk6EZHYr53nVrJPUnXTDXbT9fc",
  "key31": "meb7YJxkfHK4oPnBiYdaMYik6zDBZJjuU87Y1ayVcAZnnGYAMkMxbA7kNwpriVVdT5nqWEsEJ2SmLjp6yEnMwBq",
  "key32": "3dCxr3kot7aJH9HYVjo6Nsqh88jAJ6ZjCz5RUzD1MSAc1ayzELmD5DgNa258Sq11sGZudjD7VugkJxBhjwRcawtX",
  "key33": "23uuSyUyD2PzvDS4AQHWKAwdfXKdgVGHur3pZnTy4yqiqD5tuMit7gQy1mP5N2Z4QuRqGxQmjHYUEgzAVcGz1LiV",
  "key34": "rxfmCbunx1PNEZybnacgb4u9KKsbDGT21AFNJs9hdpeBNAphu7Mpwsi2XtqiqDZLTnBzwQfvSbX15c8mfJeuD2v",
  "key35": "29eLQcVj8WJgEMNeF4jqqifGQQN1U8TUPoqmSzJzLKsUssrwcQUHYLRR9mVKWn8uZeJ6f73AeVRg9bffqkXYAXqF",
  "key36": "4NvhNvimPRcpaBhnvEPt2FFrhEeVMnF13tjzScFgU8XM1HidkksveEYwD9D1sHyDFGg9uYsArWCVsy3DDdWbeoF9",
  "key37": "54Gqf5HKNsu4PmvAJjseut2a5SfEKWTW2rBGBxbDSqrLTpa8vq6KaZft1gXkD7VQBQExPSQaVXATbuF8UxC1ojRR",
  "key38": "3J4cD6Ndh2qyNQSzmny3vSbUcMmUmNnquZ8KFGxJgr5QioJgJdUWMKCV7ufhwEM6jfq49wUyKyePgx4m4v2UoESg",
  "key39": "554RQ95ufhK4JcS6U6TVySFjgPwDvfz67DfP92Z5aJRhw6bwajDM5zvhQnPTSc3nA5E1BxzSwaVh2zmSUwD4SwpQ",
  "key40": "5Ks2r77PB9TTf5LXHAGEfugJHinrZXmQnDxWYJMRpVUEzwdkpScbLrAyY8HNL32A68TKUsLxhGwMxe7QdWTieNZZ",
  "key41": "5ekySbjvDkNeLGwURq42RwVmnmV63aLVLi25XjfkR4YX1RF4x3s2Pf2VvAgZcPthwY6Dg4eXwvSf9UQnZZnKVgZV",
  "key42": "3A8gzQ7pUXQeo4XmEmsHEfroRnofSmNwCXmgB8vAxJZbLk7XVkL85vrGUFe5rwWcxUZsuD3DmeBBGfTxkUf368kg",
  "key43": "4CTSzvy6829z2ZtKsATQW3VDJGcwLwaUnyMFTsxgE7pgEZ87syJKVEndgEpdw2AmF68USGJSxkybDeFkgq6URHro",
  "key44": "L1KeaSiqkW7Fe8mqvwHXMWAzNJ9gJLcQFE8mXveT4kXUy5QDmUdDKkeZwjoc2MBik7MirmKH1aQ2ZTf8Ns8izfi",
  "key45": "2Env9bmSAeQbtC8Z6biZ24gN99P4LNrLJTkHU3kY6LuF9ZzXHPgDq89m94z4bW9BxLDHUSh5T5VhQTo4mmjj6W3d",
  "key46": "3FAJhSyYYX2uY7q1Je7KE4yjKmKNZiRY7BULXLkRTSdcghvagpdfoiuZCzUSBMdhoio3kcHde4KkX7SofWKeNrqW"
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
