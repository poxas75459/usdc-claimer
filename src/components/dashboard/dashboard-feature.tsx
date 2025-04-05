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
    "282BDkbEbAqmeRDf4vkd8oy1xrYd5EWWTjYo66svgF6Vkiz393VBKydwvZq63diJFeYHXwHGUWUy4M9XKZMcduUM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ptnKwurnKfZWeygGqPiS7oUbTDPKHSMujnf6AE7Nwz5erDRrpkPsUibCo3ndDBx3DbLb9Z8paeygxjYHn2YnrUX",
  "key1": "2a3NTcP2MKQFSxBwr7gGF8aVresrh9LcZxSnndLV69Hois5vU8oUCTyqcAxFBKXXYdYeZwFhaDxSppbkoWAMd6Pj",
  "key2": "f6Ch8VN85uwmgeNTGhjsvshRT7hEPzWDYP9WtAAtH5JvZ8TgPhkNmkY5RdXhmP1A9PxwyYboZT69jo9zh2U1UTp",
  "key3": "2jkKadZPLuDyUrRDf5wq4BocpJ4EZ9KtpfmmKec53xvfDaraYn6aNdAtJ88pNT23tnoiie3mArfdYvgpjTCPFuor",
  "key4": "5N5YFXWNqTGnFLz88g1uv2Cz8KsbDnaFHCU3kUku9K9cX3jRqQpPvPv7z3qULpGK1q7oZV9BCDux1HgbBjEyB9C5",
  "key5": "4ciKnruogKsjstm49zNmemiAah5YgCFWGariMqkvjcVGG3jFgu2YYjMxTAedi2WRLD3q6mWy2NDvWRhqXEQ6gtQ3",
  "key6": "Q5Cn1WYYMwkwzKF4E33cVXXbE6DMBqekACJZBaqquCbjJbVBBovopH2ViEby9c4PMoxY37XoJwe1y79bLCjYTjH",
  "key7": "QuD8kdCHjWzX3Efyr3BsYjWVtrmTgkhma78wotXCofJdQJWNTMvw3kypAfZ5mRSGF91fWaNqTw4fBfyHDmmVqEd",
  "key8": "sfqPwh8UPJ4eWtqirTjJDyyx2ZrfZ4aRt8JgECubJyAzMv49pE7owRxWckdZWmbtoE6AQWf4N1kd1ZPLWvpPVUE",
  "key9": "46kbsJzNtMux6fDFs2dcBCGAyrmKHd8ZGXsxYeqaRmuwvoE7Ue6SbvGHk5He1FGUz1jqUibcXUNsiHttkjjiYymL",
  "key10": "3pANDqmuEumgPrEGivKxUGHcQCbFRD3kGStiAf12KeGYADwyEwvU1jw99pJBRqjXhbci6A8eg7ktLSVh12nLhK4i",
  "key11": "5fEgrZMUdz1TmZvQdCem5YuT2MYZ8itv4ZLuXhgDrAkPJC87Dr11GYv2fzsvUEFBVpesURUMZySq2xxAa4VwZBvi",
  "key12": "4VY1UDiSsCdDXXsxNi7LcDnCUTEoS6Kdzje5jRTnvY23zHDetJpdpfQ2ZBbiccSA2JhWu1kCfkG6QrZic4TZeqDK",
  "key13": "5BvGmJ9i8ppTm3AUmViUV793MYGJUPvYWuFAiTfHsEdeMtWWmV1G56D2xXGT6U6q3KMWFdErhzXxE1GUUQB9jMWB",
  "key14": "2nuYfp95wRKm6beLQzm3Cr2M6xZqhUxpZjTyxePSp2JrJYzcxyXqnYHGwd82NgAWm73SVeQbG5eWYa6g45cJZUW9",
  "key15": "5UDjaLTWiaf2Lx1vKw95BKrWVtQS43UW4oKi5HCZW7JyD6QDedferNeqdVVH2xnQGBRfgb5DrGzRqmRpuivdSqsS",
  "key16": "4Gzkq8tWhLbKvsfu14n7L9q5szzBAkqCfTCna9pQfhDNbUBrT82dp5DqwJuuotZ6XUtzg6UkFuDSnxm494wMFi1b",
  "key17": "DkNpY3zPyuZgruGtVNC2YWoQPjT5NoAFhtEJyFmjT2Zmkz6h2MH1JjGekA9GE2UZ5U1D8DWvh1xYbk64A65TMZE",
  "key18": "4PJMPu43DV3HEbENv52FkjHTH8EE9xwetLw66iWijdz339xhnfQSbmK59e7Jk68VdKeGBMRsQC6hZzoQgSpqPQLb",
  "key19": "3aYnZCCVSdh17gLKxvg888aMSJQU8j57M6tw3itu9wWxEZujcYhZT2Dhi92zqBJyY9zMbiYY9yorf6Cp1F32JLq5",
  "key20": "QEWPYiXjPWGnzHehzUJJJZqqC1pEqL5CWcoC4JcwX3fYU1R5ZN67RgDygXMDoVXGbyYquSoHwcLfrCLcTeW8uW1",
  "key21": "2nbjC5A5aQJNmyykZbSMaTeHoX4oj1WHQgQydhf95CJ91gkzMDs6NSLVSnC7Lwpf8hAKjpwL5gZyheMiXW7rsFym",
  "key22": "635KtpKQwYnDAw8w6kgojgSJiFyTN8pKdZ9e9fJm8KuVMz9Rt9mdJ9Lc7ugPU8omf9LAjowviH44184vj1X4GAi7",
  "key23": "5FTHG6brc9br3SrEXnYFndrjQMvFY2gSxRqAyofEsRDWauKnvQWM8RiSAHjujzKij25mPp4GaJv5kRDf9bjuMxve",
  "key24": "2fZf1tbymSmGQid5LfeyKd1WhPUTJbPzhBJ7hcQsLHGnQHRHb8hfe3KmJYJivwmafSKS4JmUYPNLKag25fm9ipwr",
  "key25": "2BVBFjNRR5bkNu3ffYiG7cvFbDgkQfcFevCmS9rcNzPFz2GC2Un62LF7CxDkb5qKrmmAmPazh9DHEdX7frkUZuhJ",
  "key26": "5wLj8QB7vkHpfQCypmz9kdvrgvpEAsQ1hjnqSh3u2D86YENZ7fZNSfJq85h9x3haBTTJBb8RPoLkZ2Hpg2od6iJa",
  "key27": "2R4DoWYMokKLZGZ1KEWT1Kv1Jobw2fBgvqVQevsifRs87YaNMWPRqnx3dWdCbfp7dHzuHD7nv7wQPd7Zd1UXVrKk",
  "key28": "385N4bkSMHVPgR1BeBpkhVJ5eNRctXyBaicHWsnzWN7tnEDFzhbL2XrYJA724xM8rVdQyLKy1dYALA2yAganF3Xp",
  "key29": "5Qx1o92dhbdQZQi5ke9R2vtY5ap1CNqTiyM22UrSiYJYZoyuzebsnM4AuMRQYmDSMoFBhVENTNkWf61PgYHyoc3D",
  "key30": "2eW3LqZdFKNNk1MQjQ5KfwjV1BhB6dfXJPjVmGmBza3npG2wHeX83DpJhBUn5vjVLfZ9HaMiJAdyvRmoNFMv3Cog",
  "key31": "xSyB81hHR6KHXGMjwnfBJv1DdGu7oadTDTXF7SSnZcV99WXvdmX7z2k9fRmaKDpJ74cbzTEY3SHww38etFjDYnH",
  "key32": "23mywrMoKJpacW66Wke4BxZxc1nf7nejnAjPP3pm4oMUEuHwzi9m1XcimjRa6Wuz2H6AKMW9hz9spCbMz2anAEuU",
  "key33": "fi9jX6HwH9gKUcX1xzwvrVZmgPw2eb9N5UBR53igyzF9iD8gLroAtPt7c9XWWpd9gUTxobVyVKwf9yi3fRvWBeF",
  "key34": "2CsgGxwYrvjmEwujJnGzx4XN7CvicqvLML6h4WGY8T2skZYe5L8Q7tf2XrD9foidJKabK8fedYDq6UWtqZseoJPo",
  "key35": "5xztTQfS8bevH5G4ntNcr9wya1Lh9n1T9H34EtiLGA5crJgnE54Z9QeNaBUU7dipFi5cMiRvfsaWEsvxBTsjq41P",
  "key36": "2xxgkqQUkWtWhoRLzN187tWwYUxn4GQRgkxHZgng62GbYSzVDHtLtHA5JvKBRJ83WJ8kaHj4zUpzGqVAXYx7X5to",
  "key37": "gMv795YEXq9V63pDbBAxzHxVL4HFQ8bbDfTFVvWXKnDicaCVpaCYNgxF5T63ze311q6b96gUGvfYt1Pm52tyyuV"
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
