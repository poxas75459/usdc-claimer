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
    "3UGruZzta8udbbHDuybQcXBXTDePskoMME4ZhVBZRzN44qJYnQR42ztcxWUXUEed3ZmYEF64im6JTXeJRx4ZEbqD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21rPydXAGgp7Bnggd44pAaqtfNm4DL6zu4inbMj3hfjHKkyQcDWetgAVWAC6pc7yhoeAKYoYgsRbM9CP6x3mdrNp",
  "key1": "3uBC9U9WQgfw9KfXgM35BfaP6EVRAZY5sAjPx8eh5qegnbGP2zyqKJhuqQB2PAsA8dhWUd1N5MEd6aP3x3eHVbQ1",
  "key2": "5eeQoUqdAt9hrbtZU8RDpAnrbQqeaDi5BrmcrNPw66pkpER8esUWLs6TbnvV9TrawuTBAghYPrFmA8F2mRLZgA6U",
  "key3": "5J9AtdGibVfszdmUWQmwdYocGVsBtsU34JeBC34d1mtDHQpte3PXjoYQAq5swacQ7AHn4YHEmvjLCXjvocyzuQv3",
  "key4": "2C1kA9wLBTSk1W45848wkvN2QpSfofCv5viFVLUen8WQ57KdFGBuRFsZYCEdQnRwCZQ3HERn7cViJuDTnLxqVZ17",
  "key5": "5DU6Y2ovRPfKJ4gzEvkGHsXhEmpv65yUSMHeyxoLB9BavpodKk9KkmBCAshvVgxVpAuo2xRRrRXb465FdBeF5gwr",
  "key6": "5vhfgqinHz71U2KZPBE2Wtn5qSLwHLcGaLmFaNg8dKZ65PgH6XfkPP6DApGtxFQVeGzFJyDhvffRGQXWjmJFfqru",
  "key7": "ehxuKDnjVo35AEKmfdFXrj7aCaqxQF4Zr61c2D1GpF5QF9scKiWajfMdv6mKGhwpiYNTjD1k1njr2BFyMufq8Jz",
  "key8": "jF22vTTQa3noTwK3JwZcZS4UGyq86mRBsdA4RY3ZNSwmcfGHGedJM27RuuYzoQiwiDfCSMATfAbrjWEoLPDE2Xi",
  "key9": "4mdPzDY3rZZ8Sb4HLoWLhK8GJzjtb3yBcGCrLMRL3vLW7w158UJDDnXKzxamC5tLdqNDAk9TxczySaJdgTPxYUs7",
  "key10": "3A6bWujAYJCmZZ2i7A3xXUetMbNfB5ZR8sxBtDTfJ8i4QqwdwQMd1WGEfrTTa8namF9g144nVHb1QDP9smgZSA2R",
  "key11": "4hhpNeVmrP2xxkrdNH1b2WdBsf8SLRW52U5iZeeYGqYJTRDyrMdm92ZqudVs5VmyGuJ75zAGYcE9TZJCULGgiLYY",
  "key12": "3rHU5EkvyRro189fXZM6UiDuf2Jt29uZghwCKjw7BXcbV56YDB6z3aywbRekkcQ5H2bT2fUyzjBzxSZTtd9PKRE5",
  "key13": "5qPcRooWManQ2AxA1vGNcvhmHjP3NiXYb6uH6c5zp97sK2KGZxpXHiQXWkj8xLeV6oHkhhMHKkppsw4cGsRbZc8H",
  "key14": "47pFMVySYGNzmraJ6mfhsmjGGKzN7kG6WrLG6AsAGRe7hLmqjEFfxhyze8r328uwKp32B3AX3H8ebWRkh3VgK2Rb",
  "key15": "1BNmBPd2TKKkiJZAPSGXZPWoEXc29VadoTuRfPikmah3nBWxf22twMFBboczrKD7NK5qX41LiKW5rvPwiaQuB4C",
  "key16": "k14JyM2jsgzqnpeNdZDciZq669L8WGHvF6mvgkW7eTbmthN4ZEQALSarFJNPKgWuYFc2Ww66seLrBrUYDtfBqk1",
  "key17": "up1MsBJKrt4gey1zJ8mXjyTMcGBsMCbEiFLz8GJG8EHx8kpFbR9cwGRJVjgWnbiN38dqzLhbt5gr66PX7AN9TmQ",
  "key18": "4ghCTRBvY158WTFVmNk4cPXiQWc2WuZsuYywqFa5CqS2pG2duv9BnJsSrsX3aD1f1fUxJ51tqVpXStab7SJB7cAL",
  "key19": "9vjeqj4upzBo7oM4htjBgsAWdwGLEHxpTM8phuJw7kaDi2GgU1wdGm2Cu2MSYDUoZdZKa9QDtcPkxBJBSaiAwFp",
  "key20": "3XBAjryMDoqkwkH5byMxRc7epFnf48vXViH2tkhGKFKLDVUxssfmVpNx6resnLuk43TqHzX33NveWM9zVoDtK4r1",
  "key21": "cdaVP27gT2bJBbk19MPNXUWojrV7y9Dc2FUkT37HWxzV688LcrtEZkBeaoKnj2GV8PufjJL3hjyHnZeoT8CndAd",
  "key22": "3zb9VC9Rp3QtzEeaCxbW7ninptJ8QDAfjaMZ9a38qvcZ9x4cpJWt7DwX7oJv6E8mG4PvQR3iUnJz6fEthBqUPMru",
  "key23": "2RAgoRf7iydEfk4B2Nr7T9kwACiMRD1K1YB16nqsznqZ32EoJhzkk7zUqWZFpXmwHVx8AefisWfqx679KThAgyZA",
  "key24": "2ZWNJKRkLDyE5CUftiezUqjc5SX8aFNehDdeUz5QJSZTuuho9rEtnRfGLYeWafjxjz5uSVGBfBvKE434AxLXSrod",
  "key25": "5QhNzxA7Gakjkt8egTFWpdxXt4rjmGP54JMpuDMfPygvLRsktMedGnk8wS8sSRsCgZuXjbMy8XCG5opxinFKzzk7",
  "key26": "3gCgTXA8V7bBerhPEUawST7KT6Wx1WqQKyfcXEADq97frztPNkjrxvJSAjYjUsFNsLJa1ncA1YCrhdrx5LuPcCE7",
  "key27": "4an2TpouLqpqEEQ6LXEkfJyF4MZQGLv7qjaVXmEsbs72CCX2eb2UgKx2VZBXVxWtcPmdHopsWQPjMb5dyfP4hVwL",
  "key28": "43jFULj8tLBepTzf4LpWcUa3umAhZKWWD6ko2SXGjCWJqzosFkdtaYfWcFiDzZWmxQ6u8ttBLoeG1N5K8cS5Ap98",
  "key29": "58PnxTdee5iWZtwc15bnNbRcjyByejxHjvYM1JhxRacjT4o2tSHJJmR9TgLNF2m6fPaVnadbSevWLPfTf6f3JHKH",
  "key30": "2MxwFpBEu1UD1Y7kNnNRCx14dFVN499b3z5X3gZ3wetSUxPaaD87ksmmHFCgDKpiRWnvSck9EN28m9SMhQ6P6oqL",
  "key31": "W8vAgnb3vvCZomYMHKfs9mzyoEVgDo7aX7o6UsyTyjsee5E7NTu4wYuSamPMrdpYkhQPyLUqWxQei6yxmw52aaL",
  "key32": "C4oirdUWMsUJG3fb3q2H26CQduXCjgi2ztiQrGYhbBZw6JJUkv3erJENuDwkagXW3x4N7sgAWKfUp3uon4uHovs",
  "key33": "4VjBJYkajfZcupyZ1CRP2Hk81q9AqMSMxFUoLD4To2vZfV5JcuwLmUCLSBBh2tU1Hr3UTJbouKTAjg2cCcf6mrb8",
  "key34": "2KY6rhb2HRm1VGQeMietzt7yHTbwNrN3rw2tA7kG5iwz5WahgwN8NNWZCeswHbCphArC9kCadGDosd44FYQp54Hz",
  "key35": "qwms1cx6woCWjr6SABLPPQ16cy4hCb7qAdC5Tq2ef3GByyLs2CncaEugqJsCSHWAr8Tp7SnTMLdgryhPXd4JU9M",
  "key36": "3yAUhoQXHVp6gFU8wHCpgK4TDEqeZap7Wm1vMzhBqvcF31gyodvwj3pmQzXmzqXKPAAPPhvcAnoUqqbxLqRz3KDx",
  "key37": "23ZYKgJsR9tdrSWJ3PXYcaTUocN5jupkqek4fWGY9YjwGEXorn7qmCrpr1Q8VryMvEf6jyyG9k3yaWA7qvecApMU",
  "key38": "ng9mUAgEPPpFUPoKhStQJh3KhACujT1CR8PZfRhqSbqFmkJ4WvoKd6cZWze92QMj4KLpHntwB5YXmesEQJTqN7A",
  "key39": "53FZEX5qv6PAn1SSyHbRGzFLtsbBQVb6WrUahRHMa7yeVipuP5P5Do34LGketkjcqb1GGC2xyzXCwKk9JTaHAiYu",
  "key40": "5fsUKCngxZ6t6xan7xtRZeaboCyiXS3To1Kow3MUE5N1V8yTCXYVormqFP9chNfxMSaUx4oAQAwCJo16RWZ4QxcP",
  "key41": "3V6y1dU1HvYHxhrjdvZDbVjizuH8yt6khcruC7ny91UbSGrjChgXjrraJ68wUNshWjx4wari5YvgWZApm3tcYVbm",
  "key42": "2iTirYcBJCVDGv26XUo1AT6gAqJSkDc8Lzer75KoDw1A4Mt1NHySojmCqPGd2aA3WZXT6mDZvAyBwtpQGrJGRaHw",
  "key43": "3kdASumvn8fH2URfEmzQEe2jGy5mjBtA5Q2jH4i6AKK2ANeT2uMEM2avnznzQBLy9n5KUx4gnEExnBKD7RADomfH",
  "key44": "a4W8pWjJr1LU2y63WdZeXt7ELngqwGuYceckRFxRX7TTDs9v16757djcsit6kyPiM2UWecf4p6Tix7jS21oDWb2",
  "key45": "3rumm3f1yh3miu9xGKdEaoD6hyJwAPyKNvUQYMPGk6M7sfVnt3kFQQcTtJjza2GqqrenziZAMoDUhP1MLdCRExZf",
  "key46": "4vxwvqEcuAHMB65Y73FKpuYE3pkFkompxfDvJJxUBGrCK3p3iKEpwug1ov6XRJHmdmTxaizP7imSknPcMYog8ryf",
  "key47": "2MUFHUy8Xujrb9gLDXqzcerWHiL1WArpncynZ2ogPgiFLFC4DCVdSTZrVLH62Yt88BnDWFw8ybRYRArDrN2JpVdB",
  "key48": "2m5ifienvL2XGvKWuRzoKhhFM958VPLdtXuTbnVrU3FppHYyfrq1zLijmWUU27qmGDwGCYmd9pUSq8JShHguBtEv"
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
