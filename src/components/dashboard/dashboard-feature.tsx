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
    "Bjm9eoscMW6NmrA9erHwMUdRDs8weBtCvQsuvZPJovzyhTuakjXZiMadJsUESPDWhxGvSdvnuFgwu9doA6xB9sD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ghT6QC8dAf9YkwSJeQe6ikMhDJeuTedVdXS1b61vBTKGi8r5vEAHRSwMfLYrVRrEvBat3UA7CiLEmczibz4Avpx",
  "key1": "5iZLZwAW5wxoomEan6SgGQehXUuXLvR5RtW9YrFAqkvHfhxojmSAn4Btg1SuvZxhQrYqP25GomcMP3e7ii9z7QrM",
  "key2": "2AivBjMJLbtZt3kNjg41yfBfsmavGXQFTYBMtcZQj35qRoE4uphQKMtwTJURp8eXFEbtZaA2BJNenbwhGKs1R7yD",
  "key3": "ihC5pqQtmYK4HFnrnV1oMcDqhJ6LbkUUeu1GFAMp4JkdSHWid26LMF7bSyur9uGZLwf3JyBXLy9iaaNzVb1JUGC",
  "key4": "356XeneBLZdqwNRoVzbcwwx4W9UhNjnGTKE2TKjF7BeD31oo6iEvttKcQDhVRRoJUR9v9W6qUEz89nER1mF6JtVA",
  "key5": "4GrwJrNZRuQktZf4sdUWPgC9U2zkb1onvW36d67dfUKmUoAhwPfksbhXd5X7ZurApZZhRsz8aZezMyNJ6LDU6Zwt",
  "key6": "APSWK3VdAeeTsxiCffdV1eK3FkNzJWEiAyBvM7AUoV4A8coe4PSoQXb5DRQRUy1HTjYuxJhcAF47UMUkBobo88t",
  "key7": "4khVZz5by8zyumsAwroc9Uf13PLvb7DY6fmLqeYRKa4G1qCmXFmLQc1E5wNCSrcpx6DMT9D4FTggDMq4mSV47Lba",
  "key8": "56mKywE83SgaSjwS88zQY9VevYLdN6WfLFUtWXqioeYifr9LJCEa3s7P3d8qRL11v5B6RienNLConmgCem5fZtvf",
  "key9": "5hzBoN4XhcUwGgrJKAz8NuSAePrpHrNnNVWJ3z7dPyKaZLxu46qMsEUmzevHkYpa2xEiHQambMEFARxuWu9TXjwL",
  "key10": "4VmHyXuq5gToGqqv8fWiQ8tQLcvG6vLCmbs45crEaHrDgfWqTgX73UX6eXqJ4y4snfxZ8JGATc9W4ZBZcvZa5SqH",
  "key11": "58BG4u2VDbjuf9TQeFdK41fth7CkyijbYfADpSTi8QzQuuJ35qcyhGJ2ympo7JftcoktmyqPS5eFeamsrMf4uvkx",
  "key12": "52XV1Prz116cQ1VQogEB5vXkkgDKNeLadJSZh9gP1n47V3rkGnBEhDz4z1Gh2tFwMRvmUDDPY1jgXwSar2qwFBpm",
  "key13": "28CmihVaVDKcEvDeUNbub4okXjy8vpfn8DBznjPS5vLQYMLsC8CT38FJS2fkMRfM1rGPpvN87L6dcbXDYvfXZrPx",
  "key14": "DPT6qDfAN13YtDoVMNyr7Gw9nTnXqHSRstfKzX5yKoqxK8NsEE1wuPnNd7YWHsg6s9xLVi6M2AGFG4jcfEyREkk",
  "key15": "61JQncfFtgptUac5cMK9uRw93TwJQdtapThLvyuo4Kbhvhksgrz8F98qpojNdPyZFH2edwMBzapeut7Qrv7LnF2D",
  "key16": "gUrBYu6G7sgPCSYbe48zNMYkLzdkvm9Vg8P7PgJ9xA9jiTkRForgsFeZFUSLPJVqvV9izbSmfxnRhonMsYYxuUD",
  "key17": "2PXvxvtvsWSMBmDptZsmNXjHS2QgtEpPEkqw8aPw2Y33tQ8VtaQWrxz9fUcK7YbX8spYPNQrL7Vc2pUuarf2Ravk",
  "key18": "3A6hKtkR2jX3E9qW5mcg2Waz3JDHZKoVhpyyf4FiVk8FKBMcMZifzzG32a5cNruTJmoYkDLcc9HhM6btUvXumLTS",
  "key19": "3U91LkKeEXeoHGXiDYxNRyN9Ek2Cm7nTqJwmx6E7MJ791RVtEeKxR5qNMyAk72MtabRJw47gUtKP91ZDkuVr8qrC",
  "key20": "4TA1dBPR1G2weTY1wf43KFrqRmXXshqQ7JqHoimSno68cz1HXgP6U7SHt2FAwBJVWLJtwbCWpKVvXMSZPpGSGUvF",
  "key21": "nPf3cQAZf81wKYFhyjrLyRsXj1zgPzqrgPHm1mAVfyffhqbGvnkqXFiQBi1xaF6sxNm4JYzzD6WbobEQNrN4ob1",
  "key22": "51SpQexArpdxcTrBj6F1ie6PtAWygs3iDJvSmdK3WJCPzcmGtTR2oCfkzaVCM51EmcFk5kRGE5vj8GFPtdVkDdaG",
  "key23": "5abnZv4GeLYmDTQNEbiJphDjD48bn3pyXrFJk37x2TGGxWWAa2Ws1LjobVvsiFwb1zocnsf7f1GYgHe8eqngL3JU",
  "key24": "3F1cCu47ui1LK9XE9aTuxCWy9QXyMZfeLxTWJ7BE2S1KMWfGYRsiKSuiKyvei87Gr7pB3pMAEvvsB6odUUWRxMqJ",
  "key25": "3RZdCr1gJnKiCgZyWQfgyaryzhmFnf2hb5Mx1s2jzHLYYHv5s1Hhr3wpqAQJdeZ5UFZqEk2WACPtxrz9Bvs8Eb8t",
  "key26": "pC548pi4aPouMjKTAewh7PuMMjvZE4AMhF4qzUiVSd6wbYMbnoYNkbNzxfizDykpamttaLu2PH6Z4HHHkZ5MoNv",
  "key27": "3huPKbLyKjuo8z5HtChRE7iSZJNc8XF3Xq6ic2Ss92F21VU79tjXPYcYkSKtre7Rd4DhgWKqVuHXkWo3kkGAHvDZ",
  "key28": "4N3yckULoVjdScc4HpbjSPgsANPHHUUtX9P9HF1QFdrudrxuLT6Yy63aDNYpGiEB3MKrbxP23sNQxkrdoGJwKiJi",
  "key29": "SzQiosAfVecWtdAjmXBXLuZuAPtk2JfjUfXuGRfXcBuA26SuornLF26ywi2aPZcs3rXixBBwC22XVj2kNwMBZPt",
  "key30": "2m53Zr8hyRSo6SqYZnF5wUsG5yQEFsXM8noL3xQqzXqtCnPnhyN2X75yhrvntLYLyUHnnpviFciL533NoLFbwhKf",
  "key31": "p3eCtJ4MRQybWcX6XhjrS9fVzt37GWTCMJENimTdy5tbwbE9en15z72a4UKMDWpJQHffsGk3A9qsUjdLbTRvGSR",
  "key32": "2MGfKyCBvo5MuSCuwLhkGRSyoJZrdtkSjh2cAC2x7f9FHm4S86Htpauy2KojCZRoRVohaj793emF9NY5Qto7ComL",
  "key33": "3z8acEPszwqjuVyKcrtgsrxcX5Nu6XWk3Mi7zkKyAdyoYHEYWYvDxro2VKvEvLZzcq81AiCo3ZheXoUjuECh57MM",
  "key34": "5zxCJ6QVmywZpsJkCfaiz7QdrfZjQFytSL12RufPHrWJaFkfhacMNQg3qoLTp1jmkzyCKz95X1LyUjn1hfGSU8e6",
  "key35": "3Sm31YAA5w76qZQwMVdoMm5hoyUGSP8NJ8XA6xpaPgWAs5dwK8NDrj5Ao7wtgdksZZJuezMGzEhHpZ7dEArmG9Et",
  "key36": "3ETkwczwV6JUtwxYfvQ8dcZDcpstQs7EZBCsHo26cpyKhgWjVUPNDEKgEmDhnoxK8fRpvTg3FBhR5UKmVUP6d9uR",
  "key37": "4UrgvSL9rdbpPznr8SadsezCErLm9T1GWQqjRJ431GiokkDZnGAyVARFCnMRxE4awYdHjY9rhQfv2bnVR5nf26tD",
  "key38": "2ZyhmqmDxRTq6wWFq96LNMgJLE5TLMDH5aGiDFQPx78JVsACyLyBhM1oerp4wyYdTFbd36gg3gb9jAQaJ1KpsAWD",
  "key39": "39Ex6oUQMZYYKSQr3r2FFzt3GyeVJPvG7wQatSXRAhrDYUvGecLvHGKfQN1TTrPbm6QEysEARKmXuhQDtLR97CZd",
  "key40": "4PFJxtBuwnLAeDtgjZ6Bo2YUWafELunsVgx1CyYLgRZCw3yXzfGgyo9h24xqYdJfa4gfbVpSZg2NMdoJvZbLXuWZ",
  "key41": "4UWg4eLx4xxT8rnac28bCE7nnSfxJeNPtBU2JcQBpbG95KLRGkJJ9XXtK5T7qr3QRtjVwWvAffTU2VBgzy6g7Qid"
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
