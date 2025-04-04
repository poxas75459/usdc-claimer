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
    "3sdX154tbVh31ZSVhBYksTghhfxiWw4nmoeooCz2MDCt8poyDcHEH34nCwcKfsoB4CAZndQY5pgJPf3CC8R77XZq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5owaBtX2AxRgt8YFkRD51qKrzqWZzjHPzfCUuURShr7xfKVEtdvrkqecYv4Lqvwt2jHoB9woPm2ppP8zjJRh4Q5Z",
  "key1": "24nF9QJZXKQbhx9ereaGaSfehNYSYYCG5imaqV3e325NNjoehzB9v66StkLRDMxabQMVyRMnwW8V1BHGM6tx8Wkb",
  "key2": "4GZisgWgqnsyhD16CSnrBeuGqZ9gviTjNb569dxVgkTshpRp1MwGrRNNtMGg5o4hnnhvodom8nnA5G981T1K6mS4",
  "key3": "3Ts4nDKWkZEgHDWdcBSAisumFV2tDXwB9X2d24ANE39WK53eS2kwSzVmrJiEUoYbyLd7T9JNsB4qngoQHj4nmisw",
  "key4": "VwrKhi1pp1N2pzFoyqKqRcETMPJf5dEvYLi14o35SYQunc5dC96cpotSkPDi8sjLuDMyXVAMTH2BQfvtF4U9V8k",
  "key5": "DNsatRMshsgey7rBPtWZQ8SkczRQLLdcLuAvr9cpssNKNGGz15dwZLdADrTKkgzcEvNkpE6HRTYFHNcms4jNzPp",
  "key6": "qMTYrPVpuS3Yeg1R6UEJvNQG7fJRJjMuiXeaHJHM8u56HaS66u29PMyAfcv3jdhJ8yF8do4A8DTQ5hWiYiCCuVq",
  "key7": "3vgnWJn2cUhLF9rhfycNiqn7wHf839ytL3ck3KKLFE6h8AXwFvJDyj9u48wqiDZFewcEtc4hJ7VRNeHNFF6h84Am",
  "key8": "5ipvSJemH8uWTfkpLLQMm4d6C8QaJnFfqojHmPb6fe11pfE7jzBfCwCVgw4XQNruWxsLoyH2y7jCXk3paFv8tjzQ",
  "key9": "2ACBvqqQzKVVR8suPU48wBSPmiqa4Hza2PKs7Lmv8e31fgzyNqCjQn2cbWWMvFEcvVsU7A3DUrXqE7oZXKKZ2nFf",
  "key10": "3uRJPntPFaLQNAG5w23xUcLKz2mY4aXHrNKWmWJivrbponLhxHdgZVQEo7NXHdcJ47sLMH1a4LkMsxSVeX8UNGU",
  "key11": "5VmGJgEiMiCfon4eCvwwq8XqfX2Aa1RsLbbmUxjHp6WBi9reTBtuRMPNg18bHb5gS21SAiykJBp1rTjtzWa4xJju",
  "key12": "2qmiR6KYSVdyNgn9xrrPG482ZK7DjBVuBKD3jeatvUS33oagMeSDVZvKxoxPpKqvVVcZDJR9o3u4PrH3PvcJP74N",
  "key13": "2g63RtXD13XcqAXnNPrtXaquh4sf1btPCwiVu3JoWZHTmhSDZg1iGWo3i4FMUp8PsiyFvrGv387oDLdftEybKsXF",
  "key14": "5nUxpniMbteapkC5c8knRWjWm8bzKeFjecHx2S8fNY2i8pqfGdgngvD4zMgH9XphqxG8sf7uA61bkFBsjq87YK3J",
  "key15": "4St2hoGJ9jGwFbgY5xhqYpKizmrGa7onG6GjSzpvBtuG9a7SLxATYmCSNqoQnAsVdqHtW4w3fFjBCiqyspuqu4sE",
  "key16": "4LFVKSrn5EGpGwN2ACnJTaZ5xGiQ8k66JSCHdtPEZDq3qD5EGquLbmD59a7JsYUQaYn3FjbcNS5QJNrzEi5Dhwet",
  "key17": "2MqPeUDRMc71VLDX1aLbSR9qNS2bg7nx18ePEdRs4exU9phLgGDaCvjbcDD1Hk6QjtNMET6EwxZAmESsomdMVA49",
  "key18": "2psyBapLocvQGWreiWHa2q7QYu6YevVQikZBJEniayMSxaRBn5AhNyktPFJu8y74z59UV5UosXpWkRTDJvz2NvwM",
  "key19": "4ro9FxJWn362uNYTLdZED59sqek8LPqjN5eLCXRo564ckuUvdGb5nyH9NZHp8BreYeTyuMzAasR7iLxBAcPvNNMa",
  "key20": "2yDgnrqFzSganvdYoTvGckabRZUbHnu9xyoqkUWsjnuBXQ3dG6J7DUb8yCPcheRc27u6QM1MjjmnP9Zg7E4p5uSX",
  "key21": "39Qafe7iw7ooCXK3dPFs3R9WjN9HyAXZ1x4iuWKoqxTyvjNsfpdSUrLaE1PwmryvySwCXBWTVuGzPbZyFQ8VC9tM",
  "key22": "VzLRDsfUrhWR9YCJKcNS7u5ZU6Zk8e1Mck7qpkP8V8oEgVsgbEFb8gnSjVRkKAgas3JJQn6yg1JhDpTLY6k8zsD",
  "key23": "2zqRMJrV9e1spvJ5A4pJaGK6xbQxsdA4BPUFK9DmijiBvK8HHriS4426x6FX8X9QSyQzZ7BekhQHei7JxTtKDkhx",
  "key24": "8YZYzJDiHYfCcvdvg9E951dquNuNsf3JW8hwUCSkMhYW58Lr8u2S8jtLyPf8H5DfvrwWhmUYry1wyApbS2kE17K",
  "key25": "5vdQCmKuU7aj86EVkJrw5fmi2t1LppztKaap8SNVYB4jFf2KJoXsgAt35kVgWQC3cFgZwJ3cjazudzpHDuJipCSy",
  "key26": "4A1PRaNxoToDs2nDXtwkuofatv7bQqwoFfcGLtfxy9KTKx5Qt8EtkUPfGUYRMFk42q465AdN6s821pkYCHuKMYbF",
  "key27": "3Dp6tsZGABVaf1nMkaqbqf5cqx3k3tDx12qdLXUdovrsT9D4NgUwVjXwa1sC5a4Nn2SwuASVQi2anB5Tv51ebH9r",
  "key28": "3RvvNsKipDkMqEdrpMGA2uNufmravZpFUQM8tje6978MeDLEXhfqk3GJMqz2XmYZuZBM7RefWXJUnKCGSk6jvKig",
  "key29": "5UtngeZzm5GVLUnF6NHMAjGWRGkVQTed5i1LVocSyDHyGda9eCaTD1R2zArVCRpD5eoDmuTPG5UWSfZiPNxke9Np",
  "key30": "2Y8RFVioVfBcWChczyiVoH4N1T5ed5AL4LgX44cB5hd63ApR9Tpgb2k8nAVWPhn8KNUeTEPgHQe4NydXQrrwoanG",
  "key31": "3NfJDKCEUHSXT1bsEfUv5zkbsqtBgMoCDdhtAaYACRNBg3Kdzj345tccqi91YfU7jBwm6zNkvPw5EemtmobbPS77",
  "key32": "2DHoW7E6fTRENK9PBMX7oSnsXeU8LZG6evw4mXgm5RJwQKcvnz7cU5wGFDgWbKubVbVy7eKLCDgZiisxpY48KctS",
  "key33": "3fvAPRRGJ9cWhKm2HRma1A8H5CgbcRpmKKtHGEV38V9Q8bMkf68ArrJgeaxpreHC5rpSwPZxVxWoxGDM5r2YrZvc",
  "key34": "z5WiGQJzrvdb7hiQhPtHzD5qrL7zs4bdK723Cp4sez3dSA7X4trp9UQaXpfDZHNAyNR5WxrgKH4SKTRVE1yJrWa",
  "key35": "Jx5sDCPzP7pk8VLRSPpcofxTKySZqgTjxG5WN1rs5QKDmzGdpKWoWqp3F2QXXz8bZyhVzdZ7iZ1a2BPtEssuhzx"
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
