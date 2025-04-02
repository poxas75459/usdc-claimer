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
    "5kuL4Bs3Mw72V3hoTXyyu9ZVDExDR6v5ZPQH9A6BbUBPt5tAov1jtXBb5N6zBSLDLfkD13F9pG6mLz2CAwbsqJKA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FPvYq3PCian3k4we9hhFAQfNKuzKBTJC94K4nv6ZYbMNcniaMUFrFpc62iFBNhwDcB6yJoutYHHukxiB2nKeY3x",
  "key1": "3hrMKXtUweEGRLJRnBxjJ8hxmcafD3BdLuSSoMUxH4gq5BUwcbcfQjhRndgMF67Cgbzs15pfZrTQW4zGfdUBwfpR",
  "key2": "4M3qrictByERQyT5qnTNTkNTsscxUUj2hzANai9CuBx6TVAjBq4LrqLkDAfHRnkb3BgNbavGM4Xkt1WpDhwhz8PS",
  "key3": "46t2pqyTG6heLisbzTA9JJERztZF9Lc2eD1u79rmJ3pePoCMtsBG4dd9mYgpKfmBasZvTtZhhsAjDixezRXLTtFr",
  "key4": "3uzMrg2Y6SrSmcxec4GZhQeVFw9ZEULBsgzonGMzguDsdPoNJ7Yo2FEStn9Et3uCG4xXaA8f2NLpNEXHdETnPBWQ",
  "key5": "2vmBhz8HbN9S9GnfpmfLBaic4Vf16u1awp6j5n6xtUSJNKhrbtvnCc9HEKJQrr6GsiLwGo7eAW61RewpAWFJTo1t",
  "key6": "2mfWYdXUfUobgoWtn8ntGGU3hKwyEnCDfsBV1wBPjdDzz6bA3x88oGDiKmJDbSamWnnoDkp2qeYpXDLoh3F5131n",
  "key7": "2htcKtjRpK3b7RwJ6HGCVa17oymuY6gGHNTRbVGVheSLmaBhN6gFj3b9kEssXFemv92pu8vb7jmMhdogcRCVu3Qh",
  "key8": "8kw7gc4YLyzwUykkbtgVPoe847xrbu75Ee5X2EVLqRtank2HBZGaVcccGXdkWwZaFgpQdzjCoLT5aRaZNbxe4zx",
  "key9": "3UyJ9fex4n6o1oWDf6C1xwrTDndPiFn6CBaYH66Dxgc4Qm37KH4fsyS3ViRmdhsMWJyuj1uG19g86JhpviN3khtk",
  "key10": "4dozvj3BaVr8GK2mzdGtFVSTueTkNPE1j2BHx1aKPDPfEGNBssbL4ZcrD1mRKpQEj4GWZJc2J2GasNVRgFS35msv",
  "key11": "5AHA6bezBHKeRkXw9Wo1sGpAUovDTqWQnSxVUojeudwKXTRGgKhs9bkvasZekQohZQHFptyTSmP53JoEy3ByW1Xf",
  "key12": "iPVo9DzZWJwPFL6Dp23kyDQ5Z7uE2VJcPspww5oJ8M1YWnDswm6ZMmjj4hcvcxFYaYgM9d7rPYRhL8NAkXqCBpG",
  "key13": "3VuKUoCHJ6AJL4gDx9kwfzUxLsc3kEGFPGRcx7prqQEDbnUNncTw3NSZkgxFCzDqEpiny5FqKB432Y4Q4o7wQNN5",
  "key14": "LAskfYbtxBxNpPSJbNJ791ki3JNHGdN4H9mjqn6YQdxsrowRRN56CPrm8TiKmYq2KkEDaHTiCHtt6r9bGsLgPjL",
  "key15": "4BRMsUXU41Zr6JPU9taeKQfPegVAxUjdYH7wPJ7z3B8X1MA4WYhc9dVfJyAPtEjEFwqp1McpkVhChyzkQ9QFDpKf",
  "key16": "3wWNZ1h6KjdUqTWcxcgwjJVmf1WXkJxtqgyPLwSsL3b5WHDHDsTX6kJ8y1Hx1d7g425SFKeRHZWohfd64t6sS4fB",
  "key17": "4BXLbrotWL3Tmpr1k3m2Upy9BNbVASmbdyd9554k8jz13v1nnNap13tn2DNEgTANRLcmycQqqdWq6K1WbVBaa2Wd",
  "key18": "iQTscKHNJvpKEXYeptN36YpEvDPUra3ZS56KwCYhRLMwRSkRuCaHwN9M6grq3TKrbDggeT61rxQDDUYgLyNHbQn",
  "key19": "5HhsBwKKS7xSsXakrspxsE6W4N3MsCSRqsrZSt2DQWQDKbDMsCLYVktQ3mvKxMhj1ZYJZJUrZGmk1aqdmgrrDxzf",
  "key20": "4CGGgW7SoKx7oDdCgegWMa7wAYcAZW5oV34WhcQvnAGnfCSg4eGHMdhkHcPPojCSSEzRmaVcLiYM6HJGjZFBAkEu",
  "key21": "dTNfiN6SXWvU95L6UBNoFtQBj1KLEvJcyiU2G9j7HcvdwTby6KDr1CHtoLZrfUK1L87peLEAGpxe4T5LStkR7Ae",
  "key22": "27CrKXSC5Pe842h1actchgJKcAnF9MBBoHoSd3WzcUp278oSfGUp7oUgEf6FvisWhgegxiFnhyqnQ3BaFR3jZg4T",
  "key23": "pMaLWZNsHEzJdeZN3vAZjRyiPV6XK19KKNXDLsxWwSdxFjqufPDMxxj2VmBHwZg8kMvVcVbzMULPJ4fjNRngBLa",
  "key24": "4b3uHiaJiA8wGoYpvpqdE5FPL5LP6mkj6LMcrpHArV9S692PmWpaEW3fWpmEAuQzAL6yGks63SmZTzBeD5yLbZYJ",
  "key25": "2Nbk2vP6pHpsRTy5NgyvGPYZs5rCxhMMHNTM6393HEoWrapBAaYiCa4FVBFsnDNHRrYUty6NpdBeSprRYnQs8C5y",
  "key26": "26erHdVB5UuBPobXD136GoUCgsVNWfatytnz5C68br6KcE7B9bzAsEZDRLHczoQRSVqQJw2x6sKnMZBuueu8QFgY",
  "key27": "JhL9uFUmcqqPf1L1e22cQS6Yr3HfFyWjLnftRLiRUNhzogCDh41Eh8LcxANeYsY5XWDMcMFfqysXBzApqMrs3vA",
  "key28": "dEBUegck9xdVtsABfDfV7iRYzbN8mvAfKh5U5wSp3RHFG2Tp24Na65qRdhoJQCmGxzcs38kLbD3VtCtivTEXcyb",
  "key29": "4wf5g3ezQVkHzzbWsPsWf7QfHtZXsfM6TGQoqbEB6xkxzGj32SkG46RrdMFW6kgdwsY46QZLZjpiEbAb4r9emWXB",
  "key30": "52HuUmpXb3Y5iBkPmZMmijHU9f8x3VXZHKuPUcGrW5vJDKpsDbfC9ekA75G8uRbA1CMUoZ5F2UtNMLgCn82xrdPZ",
  "key31": "5wxPqvJvP6FCmyEoLnQr7rfvQmt9nSDp9PZmpGy76iDycm7Ydw8X4RraGofX9vnWbVuecM47ifuQdqRGLNhT5Xm1",
  "key32": "KZEFtphmJ3Quz1eyr9YXPeYtA4166ruWWqBtv2BxEsTk6ZbdUp1mAPZuV33qzjj6kc5BbJFKsk4RwSKnCBZ7d3s",
  "key33": "5g5qFDewaiRYcQUv8u1PrqJphNL6UKZsHjchKLTrkGq4sQFwT6yxqUxbkxyABRhGdqs4fRt9TutAH34Jyi7XE3nk",
  "key34": "z4g7BAWAFd7yc44Hdax3ZWRnRngKG6o2YGVJZMr2f3tShsV9cvzhTqfJykbKDfJg4Ku5v3MWBRZAQ6tVBxoU58m",
  "key35": "4NmSsCLzd7QF9eGQEVsj6rUr8qqDXW7o9S5NbYuytXHapP41cVFjiVYcNvVsu9Vo5DZPNjEsHc1RVv3VBLQXvMim",
  "key36": "2hj4MnNZH4KPdEeTq6EQwdMwWmnPDPrv2gRe7Yy9VNRdyvHEUxf1zAffbWTAzNNC6WPQCcZK9uBy6Bw6UCxZUmq3",
  "key37": "29Tr7rUEdUuc3V73Q8Uj18zjMneau6Hty97j8TKQvuEavpzE6cKpHmGitoQ6xCmT7gRBKHeEsTVcLCq1VMaNQM2M",
  "key38": "4MHzqB4aj95egc1MFMxfruaJDrhaRdLgvpwxE3nuCkgq5MNKB1XTJ7V2JA9nW1YAbegKEEv889XTf1VuCCpQeRDr",
  "key39": "5grZHGmHUBkB3Ckf4X5ZwNTKU6rHctvU5oMAcSDn66MsKHhR9s3q3fbmog14jg18qbajRXSM2sqhVYbPFLKBuEjy",
  "key40": "NySxBq3sJ1M3qnxmHgX3ux6xHrjPSwGsXn9ffZCpvXG8GMhbPPit5rnaNzaq1PXoUHFBkSuEjweiNvCeQj7inaS",
  "key41": "tJMoAXHdGspuXuaEJombd5rLPVN2bhbitL9AAQicwLNWAXAukeJq1P5qausipsD7XKwPQEwZtVwJ4zGc1kAiVAf",
  "key42": "5G8r3ra61PZsgZoofLsQb43obxz7RALApWdswqGP4n5bNE43MWA558HNmQU2ny5fTJAVig6Fk3KDVZjYncpaQg1r",
  "key43": "AWapApfgskp9Sr4fid5RKhSYPLdVwtfQjZk73U6jLx56qPGV441CrLtg9FodD4VkPoQfD2pN8CdhCpiMF5LgnzR"
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
