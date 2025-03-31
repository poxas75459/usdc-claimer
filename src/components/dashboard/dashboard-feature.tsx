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
    "5naaKZTNjDhHGtW5XCAXkb18Vta2R5rusK91xftua1Wzy3RioQCa12ZBiLn4Bee6p7EBjaWC7kGkzSXBMLACvDmv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "621c8sRpjA33PDDkY8ZqM1bFB1cXsxYez8B6tP2q47tDNmqtt1P1fZ5g1M2yBBCZ6PuDdcd2hCGauKm4UXi6ZNip",
  "key1": "5TbkETkpMAxzGHt9WkyoGtKSnWAP7pakfYLqbUbeCgdx2AYtWL2cGpqg172xy85AGHk5RAJLncDAfckXnSXTkkEB",
  "key2": "3KCNMKQtT8gLnms6x25nxhxsj5LWLwm6UhCJ1U9iAjc3mRxsu1NraFkqXLC5U2PZssSgQdN9MydTCt12u35kByiT",
  "key3": "5f9TQWAzTEVDbGVPVzgUzCAGZ7ZFyzBnk5g4aaCFG53QN6kMdjBGoQsqEsnUzjAeiLULQ5PDYSyeTqMoW9jFTYW5",
  "key4": "puMm2EtJDFitMqz9UsjxPX4GnRTFbo5Az4wKPAJu7EXHCFKbSWQ6YZSkhrHrvdHwuP66ipc69Xtwj24pb5ZJMFn",
  "key5": "2NbK2yAfPFsyFkUBKqhndkoQuh1hnHdSWBfYJWGMrcUN4XoiwPy4UkqF7v19ZEAvQid6AYxMDRrvVnfAXFjqZVc1",
  "key6": "5fCLou5noK23cvq6oLNx1og3gpfVTVN4vC2Tgz8GG46CsQqDCaxiSWNSjSARE3FecR2RHdhkWgXyXaFABtE64gsL",
  "key7": "5BtKNFVBNMyghpEhAyuVRfyMW6vh2GeVjoTtiWSVMxD7KdJSBTJ3Pr7KWRveb925QfiLQNGd73Pv8jzQxLaGFi4i",
  "key8": "dwaWHZEBSbJ5KQZ92uCC1Qk3J9KeNSj6Vij5zCGXtdiecoPGL4upMeVh7PwkyXuCnx7ZdxdwRoi53x8ueSsrg3p",
  "key9": "3GDKupjMWiU4hbm3U2WgJWqSbS9yDmEAAGrJM9eUXL3KHcyEFSP6VNLt3UqHD6Nt1Gt5eVWP44j8j7FRbUBvAwKK",
  "key10": "4EYboQF33EwfxHeiREvKRKtpPUdZyCV1Su5rruQKfNviL1N4dMfRMTFpPLReWYXNGMy54Xxd4VrsJewE7eUn3h5J",
  "key11": "kzgS2cZuhnVtwK3DMrE1dA7EZoLM9RWzfHFaogvihUvA8jao76YwdUyAah7pdgK8D174t4raGYepGgQaTYXaGcn",
  "key12": "5QPfHXGBCNFR523bEB1Quf2xmM3eMHu4BTkLcpwRcho8i2T8DWqVRb5psEa5wXaTzrLpkipsamvN8FKFaQViVLWL",
  "key13": "2wpCZFQ7Q9dUjNbwycggdYbLExURomh3LQFNut55QmFbeX8RSYwDKrSif7cenjYkYd5KAP1X2shx8CQ4yxurSdZt",
  "key14": "5mpAzDjJsypaDrHY4kHrXUoSFFHsB7V6JUtf2upNCbdPYmguNrcGbANC5PSTwEapB9FCUCRJrJwsQwcygpR9617c",
  "key15": "3T467pHVhgfc2EB4tqmHA4HgDfdf8FLhv3CbuPGKfPVzozeeUdbdNpDTR6sdeDKGyJAsaJ8hWe5qavsovqnXYgDU",
  "key16": "42uC91QxFSLiRQGHTN1j244FezgxR42tozvQZUvKb2thmVEsY8uRezkq593FmkftouZFz5V8k8GJLutNcQfJJDum",
  "key17": "3GCJttYwYENZqiE3hVFPNHMzjJ239RFytrBfYfm62Y6p5WwkNKbRAZee4K7SkQp6Lvpqu8tvhattyDc89zzaDbEQ",
  "key18": "41RogPwpPeuUvWr1fkEydyJ72QaYNq9aYbqEnUcFx8RBvzkHG6CjLfjKC1Az2qvsWCY1LEuaVQQ7NkVbJErKLmHM",
  "key19": "3HyHfFco5aGU2x5vfeSTzK7fPYaYCjj3fv9eit5MXJiCAEMc4WZnw7sgxMeNGE5aAJotMAmSMWzZtgwr49rJHocb",
  "key20": "SVPx22HXfFLKqUnMBauF9T4sWKq6WFSjn1VfWZmHwtZXN5NUv6RB5GNoXKdE326D15S7mjhrPRFAjQ4oc9Ko43d",
  "key21": "4gTxrLgNubsjoXXvqBPmwpbNLDJ19xqHaLvbKPVsjfTart4TP5qTN4vbdK8Ab31kxSRTG8JRjQ1LdAsLATV4B8CT",
  "key22": "586e3sUwxnCDz3VA3R8HCmoFyKRyUTte1pxAhc1Ba5559WwVdZKwg4FCyZPKbZiWJbzc7KPMgSTuU1T1qFzxyhPw",
  "key23": "3CLxr4u3Tjotr4MMXJDLipLsjb6USqqVp2tbR1uW6ckodsB1e3TpMDHWpVFnAtxarGom6DBxtRCW7MJbuVonuR21",
  "key24": "i5ZvVCfwdmYKL619DbT51t4zy7Q2ZkUfGxbMSqWCxhgC9fVSu3KEQ6fnAuD1riaoTA7ay5xTEXevX1zjuGFUHGw",
  "key25": "Z4v87q2qpdJXU4gyDiphfgve2PB7swg7hYfP1iS2dSzGz6ZXaY2aoUpyudFU8CRSFZCBF24L6CNJNYW9MyZ7T1N",
  "key26": "4KfXEhcdFHzJBiaZDSyJBbMfQm6urXtvEAQcFY5PdPPVhvFM6w3VQ66tkZvgkYNixfYfsJYATYdR9dRJVdLiFGw8",
  "key27": "2FFwr6KCpr67ebsNkNdciQTG2VYLbw4bqgiXWU8e7mVq44CtdPZ6EJg3ZsBvjsLPGxTihQ2VKacw8tx8eaazP3c",
  "key28": "5ghr73MnCdekgzekjRe7L7fVgGt3gvMkiS12dZXwCqnuj5oxfBURCgoMUuKemW1doEY6HvUBTtiU41RNZ8jSL9Rk",
  "key29": "j8zgDLBKHSLQVmXffgo3txso1DYcLpcx6B2G3VCVMu3J2iUXGqtRkosqqW7JztfbdMT1NnmhB6bt9ZErGc2BXdE",
  "key30": "3Kg9JYyZz19BQZNcXE36MAyGW9bBdRivNdsjxcdDMdsWwSsZHZiBKsZHwAphXBUotShk7YVrVx72HSFTXfYc4qRw",
  "key31": "s7T62qiqGLHRDBJNGucJNdApfYuzTyLxxisHuL3feXKQ94zz1QQhJajRPydRrfK314wYcoaLoecNc7PozcjmJpw",
  "key32": "3UCArhnvwES1My7up9sS15mAcE8x8Fq67yBZsfEfqedDGjR6MaC5EWpVJiQoUJYL4sGNnCfWHv8eqtPud6QZEGbx",
  "key33": "U7SuyCYAQU2c21w8h4KoZz1eD58YLgxkGL5KexMuC22ZvxTV6EQFTwq4zr8GiiqFAxkquWXZfquXq7eUZ4w8J9t",
  "key34": "5pY5vFBH8njdhYLJWpvoZd2AWkGaZvCnmLQJtrDwZmE2sx5NdVbmFuFG4jx3YEkL1xuymESmdJ8TTBF2uzUTdXSz",
  "key35": "4NYrNpoY55bkHTW9FezHVnbMAnqToG2VFKXhCFCcfBCrZLVkGcg7g3EJQsxrQ7LF8wGx1kn9YhqRRrJS7W2mcbHo",
  "key36": "2onNHBW3i2H6UUjAZ7kR1bwcrd6NiDHyXLe7iHrRxN7WF4Vpgm9Yx7qyNVqCgi6BGbi74apgSoq8JkPbLyuQwkcA",
  "key37": "3YocSan7hVpYa86rVVN2cpc6SWLLqdyD31K5UZVLigx87feR5cDhKLcqKXBVCHoNKFKRrgDf5szy37NybU3esj1",
  "key38": "4dhQnE4hMfSC9xZXxzfRuvBpS3G4zpYsXbxJppNL1hqhWqUENy3sk3D5aXUM3i6hsF8DPcWm61y7U8bXDWQ5uiip"
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
