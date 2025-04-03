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
    "u3DvLr1KcFcGAVGrUHDu8nspjv9MQGojvsgMfBHtB3LaN2kgw28QGonSEX6xukDo6NrzScifXvDF5j6eBnuXFQo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dBAaCRsiy5xhxyLVNuKQtAHBhnGtUeRMpkcKUh9VTyvSPdBuxiE1TyoDeaftpkCtTFN1KCAvZ9bAYkgRdwaZ7Yx",
  "key1": "5bxubgMj1vXTnSRiEh74ZmDvMJAJ9FFjeVYtVUUfiJbHkfnR6r7Uy3138ePBareXRjsbatMexYCRzRZKYmQDF51E",
  "key2": "5bxk46tSg5k697iyC99nThm31zMYtaqUzMZE7HkKt1unjrUpntndiqKw5E4jCxQrsJASqdjy1iMDXAGQLCCtAv5f",
  "key3": "3DemithRZQuDP8EdA72DhUB9R78TXqnGWJbFU6rKyqrBaY8d8CFfFiGw5EvXtwZC4Wi7KbMeTZgEjqAmjsjGnnUa",
  "key4": "2oJ394ZxvKSeWysnqa9e8o9YoEN8oJt1ZgxPpYHK5aewaokhdUHQbyDuPvj9KRsxL78A5A3peDKCxFmL4pMdWZZC",
  "key5": "3tvCRWieWBy6jAutoTZM5St17aPqP8GuNKFk7q46cuSXdPqVTvzom3aWrasF8ZTiZmSZxbsyv3eq9GDfbhpbURvn",
  "key6": "4EhB76vFqFKoY4ixprjGHLoVodkfyJtU2CVhjJ7Ayxxke7KeQGFu4e2qgTyvRygAF34RjWWUbxEGvMZRnZV8JxP4",
  "key7": "2j218VYBxvyTgteMrX8P21sdaoc4JGgAnS8W5bPXXZUXft4kxEjFLhuyx8gDQbs8rCrUC5aprWm1C96dzAzWWJsB",
  "key8": "5KmhXFHZeYa6e5K8t4Rip4owAAPvit5Qs2e5aRzxZoyhyiK4U7dn11TWPVt3E7Cnje1iMgwmtPjnAxjPyouSwmJ5",
  "key9": "8T4JAEFzrmDUq9gQRTJFSQMGQTKVBQxEvkzKNWhz8HGs1vi8zT5xWQbXWVz2N8ffVQWmeiyWfXxXJ9BfnfbRhkV",
  "key10": "3m7UoHqZv7y7KupGbxm8wpFuh6Rp2ncPhEcAa2y1A4iqkHY1MVxcTGbigpNMRyRq6tfDUCU12JCoGfYnmvs57YHm",
  "key11": "Heydu6d9FYPz3iotwnP5HE7EtHvxmFFoGR7GCtAxPN7cp8VTmweEjGdHuCQ3oB4o8YthB1bLa9Wap9CFJkdvRMa",
  "key12": "4WJ9ctYqhxUC5QT3mBW1ztMsSJUUWs2kMuvUcpyZ4yp9X2RxC9RSLBqxjNExaZDmyDumPw9F4n31Xgh8gv3Fx5ux",
  "key13": "5uWrdBGqMcu8xsL7rEN5hn3DD4YD9trRuDfD1WdnAQq9qYy2aVwfK2EZhzUHpUwcgBWqC5h173dYrBN4t6JShCP8",
  "key14": "55qnyGejspEfBEg3ixTiyqUwx2y5J3Mgv3Hx9Cg4KiKegXqXyT2c5FHw2wtpDNp93FB5xw5HrGWDtDGw9gkSuvML",
  "key15": "3hEvyDGbEmR5fKKuH2ZEw2Q4jSM8dRs4nxue7uFRJETD5YjCFJBNQR7RnfhvtdwJU8qi49yaXzSciQphVreJdxJ1",
  "key16": "3fmm4ocYEobxpa15ijw6AJDAU89Jc3bB9CSVRrAQvksTFJhwAfBQ39Q5DajiMCRVuQ6JBuWXVsRT4WDjUKiXcSo3",
  "key17": "5CGtnu18bYkSQ2eBtzRJ3YuHc6TSGmrAUiM4vsuV4EKLNXEpQdKqoCkgWQPTKFMLvpRCjKc6nDcDUqbg7W26rtyA",
  "key18": "4MtTEKrEXnW9mZfgxV5NoqJ3Hbsgnh3AMKLZmPHGQy9Nm1JNEzYjyEjSN8vam6n8SXcy3fQSgszKE6xU1iqB8zpH",
  "key19": "3eTBPthk5JoUmzNzAhkJYEJT49FyCVoRwQofcQyFsyJ6qV9Z9bESNsdj9aqHNeZkQm6XeKECDQDqGqT6TbftSPht",
  "key20": "3Rz1oURaVsdfZd1HaeHV2VPHV5P5Eg1aNbQt13bT662yyTbutZdteeAfznvqDFuVHmyUy7nZPiX4eFX2tV9aFTva",
  "key21": "5x2VGHhY3kz4Y9A2n1LkePoE5qJQvkSf1SGNSBUgcD8wmbc7FEgfpnswZS5t9LE4EUn9Wp6Vyv61YEccBtHvRDX5",
  "key22": "MrHUsee15rThj14R6NsoRECdhyv79qWoULfqEKoWSa7vzy2wZJwsRBzMz9MDrKpA2o82jz3V5QAFw28smpSSYF1",
  "key23": "421SKNXGAFqTAEU9BfFshiHmjdDcNtW6QVqvmtyWGLb2QxcritQ77VNCu8oKCpfBxtkpy8YFFHSALZCVLqAYyMUw",
  "key24": "4VekQVHo5qSU2FDrSNBa2jpjBgEMRKC58vPcwjtaMv64Fhy5JvHJMunZBLZ7DJbwJNdw2egayBACAc78q8KB5xx",
  "key25": "acbdvdQoMDnyxypwm4G3xW5w4utsVWa5gFJf2Y1LyJzppjcnrABR5Jjqeqs4rXmdyPNG1P1aV15FHgohxbcb3Fi",
  "key26": "452N8QUragHkrQ4vTmJbWEauZecMSe3jvKPo3KVCk9ue4vLkWegtk2w1iQnbDSP1g5ELzUqgyLAaqgFF9XaLJnnr",
  "key27": "aqCRaFbRyMEY6E9BtD5mZPkPS32N7Kg8xj6ibWhP1aXo95XfwNXb7mm3FP5Yu5wGUH54DPiCyKi9LKuCWj9SBXY",
  "key28": "5Ab3Jm6XRXwXE5fACSQxaVJsVb9BcVsSEtx7pgKKBGsDBxvLsdD2RTuLoUa5coCAyKdZhoMRcirBdUGLFuVbxPc9",
  "key29": "5MgBrMmDJDp6w6rjccamefwfEtEra2JzGH3Br15tcfo5UkRTYxpxX7YiKQtUxWg7YMJWvZdCD4DtCANqraJzkBpj",
  "key30": "5K8F3LRrrPnoVe2Gt6Popkq96F6kLGKDWVCQAsMj5B8Q2F7qNhKSQC927Z4h2uY61xzT4Zwvkf3LkUL4SpHLMFKi",
  "key31": "4ovrDyjgCj1w1vsBVRiTMG8FL6bguQqZdiVnGk7whahJoRVDiCBKazaNVmRYU4FnEUBgft7KnACxhBvcZJ6MJdDL",
  "key32": "p5cTMMZic3VnNMe99d3ETZeTzcmb79W4hJ8J6xZxiwwrWVzuVYJBGS8iCMdiYMwRxQovCzSddmAxp9JYKV1TF4X",
  "key33": "2MxDqEcW4pQBA8cJc6bfWRzbdaAbjuCpDdQttVY1rTUctu1pW48F9TjC7Xk9V8KofTtbx8s5NuLcDStTvAMB1Mdr",
  "key34": "5vTRXC2gYWa63kH5vLrtvRbSi46D37QD3FuogCYgr6js37CvKptXR1a4BccUkAesAC1ovxETk7sRNWfHj4bga4zz",
  "key35": "3c9E7XKUms7Qmu9rrnbXWBEwvRmfFLBqXqo6kQRqSWFWwd7NsPtkhnKoch7MkUzgBXGXD2si9rf1nxnBDXC41R1Z",
  "key36": "3ZFmC8zHyU7zuMoSoUG2gW56i1BX4G7h7wLpE5dRHNZ7SUcDWVgPkbHtJm76JYcDTMGQweRVHwHuZqBgdCjafXWS",
  "key37": "AGVNkDM1ujKVzsA3L1Q7Q6GFADTtxXMU6MTnBdtzkAhbQNNFuVv4cYcRwT8WxJ5QZcxSyUMofVrj9Tp6zCxkpQK",
  "key38": "5tfeTXZwMZJy48hFxM2E5hLPGhrKLZN5WKdLzJCZ62z2Yft6ra8gh9y5xoxJq6FsDxyGfkfeYqvW4tiABMudEA2N",
  "key39": "nFEGZMT2CYFXK3dY76gyPjAfgxrsgCZcvLNW8B8mPhehzJJpqfvDSpZy7nsiL2nNztKDsDEhnmdc7nPhZ6q7uRK",
  "key40": "4A7V4BBebByi5ZCMPw6DUEGTY8TUQM25SE3FZ9SYy9S5jnK52hYWLoWwsrtbk8cwPs5aRBdbuxysjv1JBsDH1Xbm",
  "key41": "2tcG9LLnYmBymtcAKGTdMjQHgPvGkrU1zHx56qg565gWH2RqtAsd368BR36pDFxWEok1fBMnGbsgU6PnW3m1riLC",
  "key42": "2PSVQN3SnvWgQYpXPRGabzvZedCRe56KEL6pPNMN4ihcewsQB8XUYLqVPDGjnaHhdiZy8GXYzPwSLaMdNoKwdwK",
  "key43": "3nQZKj5tCU4ujLdRKwqkxSXA5RaJsbaRJUhHE6dG1xLB2MSejKkgmUqEoNExLveMhNgXqPshSEgDi4XJKTiBHPCC",
  "key44": "3cZHqqDpXUwHFfxcqZwfmHro7AfRtzza2TtgjKx19PvLriq6hYacJbT3X9k5o172Xm2tzkHVbdE9pdMPubvjMLnV",
  "key45": "44inZxDUac687fdB9vkmzpQCbess5xBBzjosqCVWCvmx857U1YYtdn1ohWcHmkLf4ftGi76rmcTPFmt9tawoQP3j",
  "key46": "4z5PWXGgJqvpbVRoBAy4nRtUSDvDfULpVQuhvcQRGS5b9CqYcqSLnTSm87AnNMLSzbgLDLYkctK7Ka3WwKhBQH9"
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
