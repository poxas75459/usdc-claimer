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
    "2VhmzMj7arcSKNkf8BsDxxgHadA7HxPpCFf3RkJBAkZBboZT3boyZFzmQTPwRvWjcAXDobxJYazomUqxDD8R7SX9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49YT9Asfhw3V1YWuT34FDLvnEp6RGpgRSbFaBeacYMM8Vq19bjH7DBGacQu2mqRSsDfvihTwxdmopSR3BkNkNV9P",
  "key1": "2Ahkt51vQpTDYvpd9NZFHTY4vLWJ1FgMXyPifmxep5szU7KoTqjiXnVD3ErLUiwqoPdjyNX8FSGqshLKr3W9LAwM",
  "key2": "3DvZbqhPfMVZHgAEWgGhs9EpeDyYoyezbZus1RuY7QQbhVpZzhSzD1zqhiC4m9NyczB2zU8yexTgvFBi8DSXXJ1V",
  "key3": "4enRZxJ6fSJZLagtDtQEKpnE75JDbdCnGw7oGbFtvjUrKoAK4sW76E1MaPGHMM9Mtg45ShBRmVyHCYzHH49SUjmB",
  "key4": "5GAWZre58kqtDbNDHAgBvpBLUWUn7ffj5w4mPpw2vuvBAaqFPVH9hostmXsU3VSks2F3Dz4UATndMXzeaUmqeCu4",
  "key5": "3J3oawrLPxfG37Da3Edxu5udb5rbuB6CXpCH6qdts2baC4vVeNqoC4U2trweps7bxzJnwTEi8st8APYAKtEqAjv1",
  "key6": "ekVR4aRQTcKXQpNvCto9NZkELEXMwDb4T4vn61VhfrdyKGwBs8M5QZJE5h5vEg4cipaQHsE7H4muLLk68Y7Goic",
  "key7": "2HzPzYRpenUYkDmw3zKH7GvWGcHKMHPHz9DGpB297uY1ckMJsUUZ9WMLfuDMRgJuf8tTrNYiwLiWH1X6RAXT4h8M",
  "key8": "aNH9dAEoWSGvQSF8SdW7n6Rg95SkVKe5cnUfTQcJonNZb8osd8H4muSHdWM6YZFbS8nAsQTmXXVp2ziFejFjUiF",
  "key9": "4qBatuPjPEfhuCctxS1jwANkWgSt3WMahBSSnfpnshTZEDfA79iNxXvb3ZPPgKvSVjciFrDs6VRCWbdVvpjfkQod",
  "key10": "2yBet8cr7J3VmMM5BSYywQybTR7Ub3eMzab5U5jAM7qLyf3XGvCaTuFSSVV5cx7zgTnndFiquRyJZqDdMEHzCx48",
  "key11": "4QK8rGF3ZVSu8J5fr8vQ1vrTGxTq9EVr8sytk8R8maDecZHkP62zKnbKKBhip1rgFpERA5LhhRs2CmgSC6vC2s6c",
  "key12": "5mtKMMTAsv3Jpxjq7vNB7M3v4iQDanfknJaTHTtF4GM3qT6dd5A1TG3QAHPPpFakLpMND2wfNV9aQQWgrdQUzeZV",
  "key13": "5FFiiUTYwH7vmbrtTASQj5zAQA8woGi3Q3HYdTnV3b23vqSK4rmfTYRA6DKvTjVwDvQ1Q3zvNDrY8CgvgYYFw13h",
  "key14": "5FcRqLfdywX928BShLDKwQ3Tq3rynq14Vq15Vor5ULmMsCW3hk7EEBpS8EjUVNMowzFByMZyLP36m6hRnBG6ap4M",
  "key15": "5igbWFzeVPdv2MJMxai9KabWmaNz9xcHaBqvm3UHhGptAe7uZFcDaU2DfmuuoYW5XnDpD9NuqKATkCDA6b2W92m4",
  "key16": "3Hvi5ozDb3B9JnGXJ5P7Dyg7f3AZEgMLMemkSouy79nRfYEQRWbv7FNV8p29ctNxScPMaEiHjB5Ni3wv5A9WQ9rB",
  "key17": "5yb4pqXzVLysZLAxcSuWzQCjBjSNDx7WMQ2YXghDDMvYSETZrxVN4KdkqkyjPNUTo3yzonAWScEEz1mn8v7mgaDS",
  "key18": "3BgX99WRzfwQ5X5xm7f8qxhGEatC1qUBDncieUaYbz8MTewfNqFCmx7fX67ckf65AQ8aCJywLcm9uCrWh6iV2zAw",
  "key19": "2tmKsYK4vJ8mhspqJsLJEEiJaTnU9xiTAC8i27ManTHCbjaDpfF76GhJKU21pZAfgqK6pJUeQZ6g4axMndNdgpQj",
  "key20": "2jLNV5a7niMkAxZ1uWDFutrNP1QZEiXF7R1aWtaxay6j4pAKwx2Hx6BvD8wNRZu5AJ8bjqUThKVnfcs7cXXiYuFx",
  "key21": "4PXod7TWrYoPpb3Zori3J1qrGjkLpCse6Bqqg6ebUHLL9w4egDgcLvct84f51C9M1Ujr4AA5QML6xkNxuxxYAJ3b",
  "key22": "2wzDuDFo2u4CEPBkWvTAXGsLh3gWkvu5qKMryLgXgFcSWPQS35mBGi9defEpmqi2kSMAPYYuYzuAWdZKYW1iB2hr",
  "key23": "5r2cPjUh4a864rzxobw1XenwuBr4LFDuE1tP7iA4TUGTPUYiYvmV8akhmiQua3f7cqmyhc9DmYYXV7N71BCxafDQ",
  "key24": "5qPidrCmzwCZ1eedkhSTEtePGtx1YmurQ6xQhkE55EbajsUjaTgnZYWyctudrce2D6yhXe4pbpB8fFqodsBvA3kS",
  "key25": "2z1nYqLF6pjN3FoBf78cLGpAzwpqoBC1tWE24tV9j1xTPkfTE4rukRi5pNsYctm8bGhe83BYCuTpzAVpjow1TCEM",
  "key26": "3qccCJg5f6wWY1sFHmDrXnV5FQ8v4cJE9YxNCAWgppMEtZjTeCAGJt3qS3mtZjJpP82EyJFRN7fTZgnsrMC5n1ji",
  "key27": "47xiD12FAscPxhipeiv7eqE7wwiuYWGKevKZ5WqY1X3Gouj1eCehQ4K7C8AJJbzmkwbpLE5ZEQaikoNRs9KaRZnD",
  "key28": "AdPMpmdJUzCPStzrVftjbuEAnpSzqrEiQhSsULsMDBKEb6ABor7HyLpNVCu31rB4U3zvxn8J8mAmrbBRv6qVSPR",
  "key29": "2k8wbVoSCCZGxcuazc1YKYprPGS6jT6ZSTK4BzirPVWm2cxAJuTEjnYoKN3JcuqfDWi91wyeVPGsYnoMvWbfsFkm",
  "key30": "3bi2s7AAt61SaD1yzboQSRRzyJTzemTzgYpbWkmbECQSjPqdPYx1d2ToVatdSA8Hq72LmuzdcWvTmMzyT5YAuewg",
  "key31": "23axShWxtkXyhqfh4Haid6n6YpTeR8MPNW7CdSdr4t53PbpMauoVofXZGdYa2Sg4jZvBo78V7viCy89i58SLCCHX",
  "key32": "5N6u39BSikdpRRQrixMAGg1Y59ENPMCSEonm8RkGbygyc9yguKnhiUEqD9LGkjRUSfG2cUeskNoQS28cUGZvNDtz",
  "key33": "RAeUcd1KedVfT1ra7VVNpipmCv2Bo8R2yeuanwmyBEYtuniTezAmi5yRCu6wAYLCaQWW1sZjUstsHtbcuRCG5zK",
  "key34": "3xY3ixr36Zm2iVkrFXJLmsNakPLjS5xDv636F36Wr2H1DN6xMyYjRdjDCfskELgHNB55Bni1EWnnsuJzzfG2hpDp",
  "key35": "LmuuXjGvdwgDvoZrJaTAd9xvbjXtjySEe8jSkAwyFSaEszLj1WiMhMQXZYDuCNK8gLbaphnLicDYjrreLs3cgPt",
  "key36": "3iUyQL1jzhWSJmJDUtqFFfC1nnQWmW8rwPgkauKB7c6koWLhYkZnt9qgCDwsEKLv5FZ2JnDVmYCJ6L1Xtjp9ZaPT",
  "key37": "G34hMGxnaGhihrRzmaERpLfDrDaN78yGiMqq2nmehH9PLUmxdA8rDoeqiUmeZ4NKNxThbsg72iFFb24iSogTVpU",
  "key38": "5Yricmm9HW48wAssmJKhEnDDNiSAqo78Xwu7uYnrKQZDQDzu8QT4AVHGpE5KoyrUwswrPtp521FMfJpM12GrMbSQ",
  "key39": "5vqb5erviNW4FpZVM9LEsYzbN4s2HJaDn7WmQLPtZh15rnzEFiVCsWMyhSPLM93x8MEf2LL3W4E1HfmSSmMPruCt",
  "key40": "2CChua7raPenVkbkhzUnnVkN92NFL2GbUQBkjJdz2JngtU4zW71YRi56YUrgcairNCcWJCvfHwgQqtBvERbbDStw",
  "key41": "5rpHyP7Uh79cWPMAxGvvr7boaUyDNnJ4KTjSo71tuAPwq1144KY6WmTPgtfob7rgyybFemUwqY2pGnz3Fv5JSexp",
  "key42": "3r5Ex1J3ST6RSB2Fc7j7r2kM4SVUqp3KAgL4fZCcXkfdD9iq6zhPY4uZTiNd9ALus1Q8fXd2w4Cfbn4F4Px9xnhR",
  "key43": "4RazzJpVdyJgDs9TazEF4EPkv6vY1J27xJHHBnE1bAasnukAm8Pudw4kUXC62dV8vdpk2VVxv6Fp4N6KF5NFgcAK",
  "key44": "2EBJ8kL2kVKBuC7zDfpqN6c5bGhCat27UCUUZsosVcAeB8NqPr1AANyQHSt7dMwA9Vrykz5gv4hqFFaHQme6YXwY",
  "key45": "3Ky3xc5QvrvNppujtFTYiqjEi6M4GLJQzHrQKgxwVdENbXefU7dcpLfcbtrjiBdseXW2EuvHmobg32frJkhKcNhq"
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
