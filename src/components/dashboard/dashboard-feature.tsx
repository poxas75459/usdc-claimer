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
    "5EstptTcXx3GHha23hc7HzwnhFwgs41BKr23G1zA9RVSHJQhZY4Xzs5tWAZzmk1sEnPencjYa5Y8TKuQ2SrweUJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3t8yqtn7TeqS5cPwBzQYyfPWxXLAxWwX3qv8ZXZjbd5nYSGCH36RBGXnCL6A6m3PGfDwQfQQMebDKHDnUxPwGzgV",
  "key1": "37EntizoVbALcSsfGbchDsbNGSAJeBFE1uLxo8JQUFMogJejyELuKRfTAY1PpwZoneKUtrLapGqX71AWFqjeUumA",
  "key2": "56FppsWk2XpqF64UXLpndUeCneCcWXEeHHMrRQ9PM16n1zdr5MVjdjpQQeegXHyV9xXPJyYYbR8gTpxRYdkRXJQi",
  "key3": "4o1aCsKsy3tVVknnBdaADG1jRnhV328CbCvxH819YPjtbNejJAY88XLjA7siodBqBM1n5bc4H5NcU7HtwTDcNd6w",
  "key4": "3ftMQH5oujTz4ExYQDcX2dTvvCvEBnZJCfYzJhZwVpqJsZj2vkB3S7TDtsJ9hWeorZdhbjoELWMUaHJKqLZwyAa",
  "key5": "3t8udPr8GDSvayoiAogcu92pJa2Zp9JbiFQMjtfuYgLBeN2VK3gGeEdshA4scymX3sg68YdSUq6t69p26p5eEQvj",
  "key6": "2T7BMRQzQ6xAxDDfmneGsx9oWy7jZfVEtGn9MpcqiytkoErKS7dztVnjh2B6wRqMaU3VSG2wSHoPrZhumQ9947xB",
  "key7": "37Gimk2aDnfMNGrc7NfUKHkYvJRMn3hJRtJ9JSunLoz6NEwKEyf6Nk5bYMRW9AB5DstdrF4WE9AdxS5PRoiGsGVn",
  "key8": "3pJ39NoU4QBjAF83Xo6UuXmC13L82GrX5JucQvA64cE3oZcBdSH4DNuUyrSPLoRU8SxjJPmiYdMgd66wc9GatCH1",
  "key9": "MB2gUC5PQ31frvM2c1aSn5m93wjVtVeNBHag44WqZsGAbwiE5D4CNiqABoPK1FjQGEcCVbp6QuBzXHHTCk96TED",
  "key10": "2AYMRhFg23zuhFGMfxvqZeNmdvbWfpRyHwXXBFCLeurFnLK34GRnv4v1n7RAVcrTENSh76WGMNiVUB5cfo4rsU26",
  "key11": "4GshCUjDwiqy4KzhmTjxuDgKwxBm2Qfqo7cGPCW8Qi5VQac3kUHzsseLd25Drr6YaFHP6ifq1fkhnmnvxoQfm2a1",
  "key12": "5PbzxYQLFz5av49HWaezq2pTpLyavTR7U8nhmKaiGLkZLovhMKP3kUt5Ld9dT1CfaYxht1Mt9GgBXhwDKA4ZNzmR",
  "key13": "3qrv6Bf6AVVGLG7hr5WHvJwr3yhX69GxpgZXCLL8ZnyL3m11SwhSRCPpJcdduEb2Bx6Gcbr659FsQhGyNVRdeiTR",
  "key14": "2LVZ1R1Pg5L8TMzr69xUbFwexP9LQ6t6KRM5YFmS9VagJSreaC8FYM6q7rSv17p7yXJj3UdPBZzaHxuZAfMTggXZ",
  "key15": "2TRawVvnTj9fT4PDiMmVCPjkF1s1LvebcxspS4NBiuUbcg7MqbYUXYBBgGxL6jnq1ijYGAExm81xRnSMw29u86nf",
  "key16": "3RKx9pAiCJawjXJromhwxyKyrg7msYMy331mjF8TDmSVDJoAdGiX9z7mDcYLbcmxZzDqmGzjja7mkYSDj1v22xDY",
  "key17": "2eqLWPDBGSpAw8mbKZ4V4rqXePEimN353CUjkFuY8CgepMYxSBGgDoinxqmFAaAtgXcyuAov4zooWyd1LjLSj7xg",
  "key18": "5w4gP3VtP5QzgSBLv8rj8MrfkdCYj1B43LY1HuMMCPs648nBWxuHdriyRYaDq7N9YXoHaoyDAHWipaMunsozcjJC",
  "key19": "A6V8gsAEVVt6ycbRkL2Nr1ZqrHNouLKGt3Q4zx6jA1qDhfAk4uz14AcBTKkNPZQjXr6mrGA9cfVirpAbzFRDmVG",
  "key20": "5KjCUNjHYpLm279ZUhyunA6tTmNhfyy4vzTsi6cMQYqCrQSZaWVZArtLyywB4d7DbXAAVCtLrTFnBBYceriBk8ee",
  "key21": "LymCRoqjZEjL4uab2EEQa6uvfibQKGDxwzun582DJF1cD4j6PPTFP2QVovTFrj5955Gdh37EPuSPfWrisH94a1g",
  "key22": "5hBeFv9tUDbevSuzDMfYV5wZGHSaVURBiaQ5L4KWDoNqifWXXN5h43tGRWtom5mK9XUVmEuPCwxHmKroxfXjgb1s",
  "key23": "4pw2V5nNyqiaqwq9jf8fpTqHxLzvoRcrw92mFjnM2kcQJy5L7zSfPAjPKaS8Qn5V4RRm7aLPUjTreS6pP4sN51Zp",
  "key24": "53Lin16BzSnwkqKMPmvKaLYaykTPYm5TBPu1whggzZWd8UAdkhnobxmQsCyhMfsRu5pBq7rhfsaj5AnFTWK4HUEw",
  "key25": "4xVGp48BDXwR9XUk72C1Bv2wmn6H65aaUtmwNwRCbNjorHi21RxPMKM8DfwFjCGPhhi1m9LkGeZcm7QKhKF4jS9c",
  "key26": "64KrUSKKuGsGL4DkC4VxvBsBrzpjX69i1D2AW9fp3r2Jir99dy6uQ8JGQcndjTeDZ9Zqv5gajfQMMHF3vP2ZRcrg",
  "key27": "iW1cFb8P2tf4dcro8zpXULmJ5QnBPDkcnD56NbAi9URdU6HyGPdDHVby7aDaYd7yQzS7KSpLskRwYxTJ8jM668e",
  "key28": "3bCatFV1aT4toBd7AQvv9M9gJNH7HE5yTq6T7D4yUxdYwnTGCcFR8mNWpRi2T5Va67RpGTfvhx9Ft5s8PdzjR5Zx",
  "key29": "3fmepwVWcMyMgXeNmxqAR7hwLbrPwiRz5nmaerjLTXksPsWZCLPSv4DvD8fEBx4SUdFnKhkt453eUFnzw8XRDV59",
  "key30": "4E1p1QaGWKM5qwgdQ9CdNymFXRuYA5zHawUDWNAvQgvdgaBmLxRyXHEWuwbEGUNhJ5uQw7Lu3HqfUVrKqWkSWd4p",
  "key31": "9izFasCEg4r9jM19bYJ2pxr3x74NudeZmDXrwKgbRvJrznf2GtP8zoBW5yHPYmpkqBxHEajweDR5AVY3y4pv9YN",
  "key32": "GmhBpAVPdotkeza1TPU7aXiPD3ERoFCboSY848oJqoRrTJUkRe71bSZ2SjHM5RTAPDmL8sVjvzBRApCiKWJK5t8"
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
