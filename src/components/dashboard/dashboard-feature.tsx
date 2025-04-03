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
    "3MWtZcSjz2FuAhKsddFntnjZSh93oGX2d3iJ3YojPs1HdngL6gh3jd2sbJDX1CMRk6rgjoM368ccaVCDnfis1LBZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "z1HNLgDpvFhkBi8WM6Q3vvGbeBwCVppBE3AKf6fB7QUpAgaPT8shjvNs9FfQ2bFkjkdwyxpeywiMCnbmthJFeQP",
  "key1": "2jKaU48Z3VfF4pi9LTvoEKp2zajYDsG8jNfUp4yN5xaf9NK6DxA5spL1e3vjJTRaKXyjGxAYBEK1rGcDWQzChWu8",
  "key2": "ZHJo7NvXWec3thRUj6aBFG7HwX6f7AVpD3JLqoM6kWftDYw2yepBbZLwWmMAxrYufGDtpMEyTNCGrtjU5LrrUdQ",
  "key3": "3j3S9tMwBhX4QSriQs76BFnAsoKe9dfZsnk4Xpus5HN8XGuruKeMEnZywdY2H9WGXqw44BvjWBtPGveytnifbibs",
  "key4": "1B9Lq4wbMxQ66HoyXQhnetMEKPPpu9ypuBujUjyPZEfQLxXAeu4mSKG3n9gRJfYpLq5Sw9rQwHvxMi5V2McWqE2",
  "key5": "3wGToKFmeusxYieJmdUdhCKu1wfUMhatRZBs88gojJGUoSkexb3CTCXCZLR6mxL1pdS1YEUS3AWjuWbAWYD1qBoH",
  "key6": "3fwiVNXC4gBUQbvk4Vwww4fTBiFfvPTdabbY8RME2456E6Lm6YTUCL1kowaNtyiNSmQ78btWtkCNXWJRo1C4SHCB",
  "key7": "5Mss4F8jtiKcDt5Bg9XwcuqXwhztVYrVaJRquWw159sv4BCY2MrG9rA5ddpkrWyJFSWUBfDkG7y7BWLLJLwfxJ1K",
  "key8": "2A9Fj6prY1fdQYzq1bZ5UyWcpU9kJ6hXHnioNnaAhXWDiRTd9wJfjQQV11djY1xEUzoHP1yGFRXHu1WDQPxQzfP9",
  "key9": "5meB8TNDbCTX2ts2wsXJr1FC1BA5segri23ZdGgfRGnumfFPkP7pVzeBUt9mTah4MXFMqD56TURCNtQHn25s8zSf",
  "key10": "4csv9PHRECLsoAEG6BjqQmD7835bV2LDxBxsLpayztsc9LGXqNuzbybAoD9w82mLULE5wzi9FywwtbJ7gX6wu6Lx",
  "key11": "nMCZ5omY6n888uFpaD6PbaBM2RziZ8rAGnwqqFPQuNgr8b1LkUUCLMavru3ZWnwcyoDLKeht4Tf9MdHpAWY3Mzh",
  "key12": "23GtjU42qzy5qRMMqaRcSXZforTzokZVF9dJUzeRYjTxm9dtj42YhnsGuvcPFMz6ovG5FHf7LVVDtiAKgFm1bx1k",
  "key13": "4xbuzuK5Q7Nu2m4QEGaecatCFkRoRaX9rBgNzXdrnxvPAMzF9VdMrsvJL5Fv8xFRc3tgzaNCgu3cAbQhc5rSy56P",
  "key14": "41bm5kTRGM6ZFk3gLmX8q5haBbnkPuJU1BR8sSmZXCgfG2vfikt3HxHirisMfFyoAxhtJ1ir29zvwRdtHarKirWP",
  "key15": "einFRJGSMyTbjD45hQwA51xJgV25NQUX83s59hpjf1BxYwx9nphnuyDt56vjoB6MfjXC6CrgKLqvvSfcnKWHHPm",
  "key16": "2QMAFfRPPUusbZVrq1LNoSADVXACVfgbKhK952uUL5oVRNAk2MwVe64txFHJYypDza7AhejJfG5Y8DpnFGPRHDFr",
  "key17": "5TaGXbrPtFnHpjQaKq3usw1WetFnG9htFHPhyjJHMDqsy9PhjFnzUjuUSCMwaqDgQnoCSTRLb7cgz3p3Nhu67fyu",
  "key18": "9iHjTyUnD29n2nHWrgHHjSCTVZXt6VFLoGKN7qYQSBUYfnigyVbinaswDx7gfJiKPCA3H6Z6xtSGX3xkcmQNfW4",
  "key19": "4xNRvYKadS4Zu8RyD5PZ7WmSenGmWuz8JZJXoCbwQzoNZXtSW8i9Nkzh64Zib43p44GkeuAoPhQhMz2LmwY7r3ys",
  "key20": "4VPoMsqKWvFWC3zprnEKM1CwSkzxcjKrMSUvHiDSVnoMYMV6p3w9QF92wxU2sDF2sBrJ8bNdjLVEPF3Eue1T2Cmk",
  "key21": "3Qc3k6r7h9YW3gxzncpmLnBuks6BgUcWGHYS9TTKLrHgwppc7L9stfF6vtFCGsP1DxdXRvyc2iqP2eZARxmGrMje",
  "key22": "5nXtfUjfcmVRj7csH95kXjFqfr4Q3xeYtfWiPNCLCRfxxfAUoiHxDJsoaRGzZcJpDvuk4QJHYLhPdV9pKorpQsbB",
  "key23": "2YVb2o4xxqJq3wVEUNZBEvXMKGwmJgTom6gnCQrn3Fz5uCGRhy775wdiEFLhbeBEnDeomh9KgjvdXWooPxL9j4ZD",
  "key24": "2BN5cCURS6ksqMiLd29kM9g2Zcyh8gc9zAWUyRGSfXFXyeBHSTVWbTTpcHwcFwFzFmyUdk7vjiFuR5npzwhnE25B",
  "key25": "52pbCJFavpfiHewf2ZPBjJ1xwusmw66kxVhgkShd9746gQ77XNUucFUHbfHEeh63Y3hoopNjEsS8rmmZqQJzMcgj",
  "key26": "4nuo6xoee5PyrdL34ENw8zayxDkmcwdyu66ktaxRZM9JQMsnEhX9ud5WHBosKZFzpzSwYDfgPxZJsCHk5pkC2Y7g",
  "key27": "4asPHNV5NELKM3erv9QvyrEayavduaDMcBgnpuiTX5GDfCuFPqrTuvjasqCu7bjJREkLu25MnTLDvpB9aG6t3pAP",
  "key28": "2uTGZW41J53d4LDdGYMYFtTcpE5HkYDweHUAqL4yKxWJ2N9BZKxa5NfbtMTLuLjj1JYbv9QcBmPes5WUBfGV9g3N",
  "key29": "4hWREEvWFGaA8tTa4HrE5BxqPEqGNvBbaTDWb7kLV8r6XQGJva3XcZKQayq9m379Z4AVEEjk7m2QJy8h9G4pS3Lc",
  "key30": "5SNYDhGkuFNj4MLbnDomhoT3tbyqMFpAVQzyKg8wXUSLEdSZ9SUtYErrPJyNMZgzAFEFZPetuRc8r9HgN1kTy7zg",
  "key31": "3hcDN9QFLCgLGrYU19RFGPDh9BX3GumAJdj1RqqqketqsKv6J2qCn6ignd6rEhWkhfFzm7fvpfzRsnotgN1BSBGC",
  "key32": "2EiYjv23hmXaSgiqxFXerenRd1Y1mYFwgxTgAcfX91yTQi2sGfzTKuKNQMABcn3eBJL1nq1A7wWiQRGDA5UudhnY",
  "key33": "3V9Xv6yG2KP36a79Q7Yv2y6shSXwkya6GdHZzfsf9c4bZmuogStarqqwcovn9NMVp4ejLPU2Ew3sH1RbuG6XBzaW",
  "key34": "2erjdfEdyjSvGqCWw26CMKcTU66iddcyvfQNjNS12fPARL5DBvmxymDK8g5uNvEkisjD6uJ8QPL75UW3boYzUndw",
  "key35": "2zuJxJyMTpCw27quUWfnDguCrCJLwehCEHj574og5jJ6C4EDGStRpmxyF8KASWNTbtCE2PBTWit2UDUTuiAbcmAZ",
  "key36": "5c9DLkWyDZjYB9GoCwgtCHi8oBLPJTZN2fEo5gn7GkRYUF5rxJ6by6uzw5Kwf5bvY7ahfhiwhVDc9Gfd8AbNqFxi",
  "key37": "2fzbfNceAt3vJV59m2Sa9f6hdS3W5naar64eb7nbKZRM8z1w3ERstbHTka8eP8gsw257Phn2UvPajemhZGWryq5s",
  "key38": "5dxnKw3qunNaGz213RjrdiptSKLHpZ7XJYznTugbCToR29FoyvY8YV8ZPKCHTVuUcGjQuRtanesE43tY5c8hHX33"
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
