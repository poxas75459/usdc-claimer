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
    "4aNHYo81Nq37YBe9fcvwSBK6989ucA7Qquf67gEHfR83EtCJjefDgJQhgwnw4jLz67vnzQAkHkcrdNiv6kStwE9i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Rp3UFgEP4Yit4xwfe9ATvtSk6Cbc7d4CFC4kVTJTStcDPF8tjd7CorG1u51ZwK24MV3RaRvKzXAbUDcAXyXG9ur",
  "key1": "54rjbRPm4ufgyRt2EBNwwwMfSfLBLzYYwAhN8HWC1gEvmJTGkQme7pnzTzKhX8n7jhHij9uJTS6gmPteZoK2ygTH",
  "key2": "4ewL1gKe86dx3uopZHLcnzpD7P8M4cCLW9ou8Qnhqoiksusxh7V5BVHGiffLNkW8NepywXGxFFbLNeytfVoTypFp",
  "key3": "64MEWkpnYy1iGr7bQfAHViQHzJi1vxoAX9wEG7aTwW3BnyvdiXDzCwnHbs5edtBhB1mHgpgPzGWwxXY1b8jCLm2N",
  "key4": "5qVMwpX8cTDD858cUGt7QNfGaBNhdWZkY1LEsrqQR9apy4m58EKPA8ppCE7exyzgjkMziTqVspXpMQmYpYot1YeD",
  "key5": "3vFjS6UPy9nQymmS3priEZ6gXyBumqdcuNCEtigLuiH2Vsef87XbqpRCJ7FfM4sSEAeDrPAxhoNCY7FnKsSZWAgH",
  "key6": "4BhVDRqqh9p6DE8dz5FNWSKJqxhDcf57Zrb638NstrH2i2YZrYJkVg713rby2sbjkFwve8u5xSCe9NFLcUWHvo9d",
  "key7": "3ftLCJ1fWca6ysadrhfz7F17w75XwktVUhkMuZBWbbDnmkj92NFznzskLFAJP9dEDUG6dyXdbamiBZzToWnBS4Ah",
  "key8": "JeeUnd1u6mMaLgDXjkYmKoQVbFzbekg4auScmUaXzekpanx3YhGMHHvwU7WAos8KDePrFwu3vTrtgTASbvrevWu",
  "key9": "55fHnyu9csn3TuMs5zVA1PoQAUhMoQCxk9uHEBqrDVWXBtmjn9gCTayuZE7r3csJMwd8Bo2BMSSX3WXg3dz44Usm",
  "key10": "617LpbGyYN9oTvzXDRwuRWcspFNA36T76N4zagE2gCHqUGs1uvqUGaizXBDY5GdEhFrJBYufXjsBTyJJAiagCBku",
  "key11": "66uF8Shi4NAsfoWzYhyKT11UMLq6hDu8JReU2k5sKEqutLGy44fkUShfbbMvC6nbVgb2QUANtCpojBKcDimJq5eZ",
  "key12": "5LGjbSsnquVs9Pf8jamwJghRXSPgj4yqLEtfiq118XGztJ4UFaF9undEi2EmrAitbMtDHPgvmqY1ruq31hGQezvn",
  "key13": "268jJBeCjyABbcWT4Ee9vHa8wH2Y6NEEQdTgjQxnxPL8UDV6rWU3kkeBFvM88iqhXL1K7U43e2Vk8VN3DMqYnA99",
  "key14": "5EgUMUrbah5tWULARCZggpgvMpBZSYMyDPz4ci8CKPFRSYibgVneSpr4SgpN48EkfSGxHTY88FYJ3vBULkpd66FR",
  "key15": "63a3XhCMJ3Af21vWA7Zksq1JwKBiEr5C7o3QpPdFzTndoyKn13qcWwwQA4kgdyEPoWwvZzqdxPUjqHZqzk55mHWT",
  "key16": "4ipweRkwQHG98qedHCdberiXVj9zHfcmd78vXfBfKoG3EmweWmE5bMmXDHqGRGjwvUaPre63AeG7vhQkGRtc3HcQ",
  "key17": "5U4fee7f5EXtDmDGf9wzNj3gxsSJinVsesSkwJH6NvpNUjSTQZAxYDwzJdctZTM384nXZKmRFqEfeH4dTQshVazY",
  "key18": "2UxZ7cvR9A3BV3u6haANFPPUU1GZjv8A59f7wFTBFetZY1DbxQspS2vRJrWFyb2YUoerLWuxQe26rVec2eXBUoVw",
  "key19": "5yqHG6phgps7Er1zXaFWeuuttdvzybF4b9ZUwSUKQQDczqSC3T85TT7bVFiai9pHXUaJg1szEaqoBtNEgDXd2Cq5",
  "key20": "3aX5pvGKuPk2ML8F8szeZsqKeMeKszQm9QCcVNqPcJ9Bh7srJjxTFfwrb5dqqCrah5zq7EbCsPxTtCsQygYv8Tq7",
  "key21": "5JpaKjgrqQT6BtRFGW7BkD78XX3F28KCPdUGbNihebmzXfy8JmrC86YNv8WxRngN5WaWTRPYWUcG2iTZgH98z2Ek",
  "key22": "4SUZYy9oWnh4CBKU19b4xXtk9TQgg2MWRB2BfkE7qgU6sgoqcZFFo92Q4tUuFFQoRqTpDwyaimAccQgQcb6o8gNw",
  "key23": "3CRByj3pRwJH9aWjefNWDBsWpKUur6BUEEkSZ9gAGveNLWM8MFzweuvWP1GKcgqQjBLrUUoTv3z4BVCcnrAUkCdZ",
  "key24": "2hLCTtDmbTA4n9Mx8kR5cDsv6QYgZw6bv7U33fSdm9Spua6M2K8i4HNFydZb1z53eZ5PTKotWbUEemt2wZUYhqz2",
  "key25": "2RxpZM3m5XeBqdfrWzz3egfmBe6998hf78FmKrGwEvYELeUQoAuAYbNWWqVQyU4CEZTnCadxurhMwUCzKYxnpHLu",
  "key26": "3CbhCXCTddRinNMpLVUb1EuLRcbPi89fotWLVMhhHjc8BEXARWAMF5rGiwqmTe1cyXbSmtPDap1juCzBjuQhQYXX",
  "key27": "1SWHHEFLTzWmGhF4s4TRhUYhUodvnk5PJfmnATksK4g8V5jsnERHih7YfB44VnQEWCo5HbScRMQuLQ7xDRCQEPy",
  "key28": "4j59oVwJFdiozQxHWNU2uyziLBrduokuNrohxZYaw7ZEn3RDH8pwhdV5gY6Ez8dxQNYjVruR9ZaWEjnYNb65eDYW",
  "key29": "5W7yBMoPzW28fUoUfpxPL315zi7mm3CvmQCF4sw7y5mWAoF2drWJkNnRUufFuGoyTAaWgyJqXTTAMMyxQc1djHX1",
  "key30": "2rQxhbLptBptneEaXvkXf9X62js9cwRg44NiuUhinJqpLu8LwjHtCy4YrPKdo24gwEVWa2fzZNy5U47inoXPexoT",
  "key31": "2GfyK7yg4GcysMxwKSjk2GFRFdW75onpE3SSRa6dEDSAeeZo8TfeXhescfGPznUL2A5ZabzSytjbSAiYpdQyZcgt",
  "key32": "5cKhFu52YYKEZuFwFZFozaaU2rZfeCMSedqxxEKFJBAfHzCPqcsjA1j9UyMTfJqAgnGQmg1GkUQCp2HFRNePgR6E",
  "key33": "5YUK5ZjrB3CLHVg35NcKF9Uh4veUGv8HgBXMobZ3TtDQG9xVWm9oi3FEFLgC3N6gwLrdBw9Mr7D1kBgA97LZZ1PV",
  "key34": "7s8pgNRePgoev6zz97jSve4Ws7LAgVhKzLV2nQ2mzTjQzuVgULoisJCUNpgLXK3nN58VGoAspk7fcAmYKZ4yK3Z",
  "key35": "2r1W8R7FksjFvYBzcBC8AcRmsQwyRWMnPTpndR9Fy5uCu9XR2DriZ2RQVhbBozpXmGpsVcRARNofqntxMi4kheu6",
  "key36": "4EEeRdzbhxujNYbUa773V42MHER59xt7tB5v1pWhnqCJayynRnHvzZHKapVtMqhZDqkmnmjcAPQWG6njeiQxudgb",
  "key37": "XFoBgmzYMZN4s2vX1S23V3VoXizKJ7MiKV4o5rP3n1CEf4AUhdNiDDRw2VXuDcB5fur4XbS7TmyPhVqonrWHLH4",
  "key38": "4HagD1vJBC46GF4VAJDAC19yYm1HXGjBqwiFj4N1MgHdYSuvG1hRAJNbnuaagjoJgRCssPAHhSQHszqk8UQ5htYn"
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
