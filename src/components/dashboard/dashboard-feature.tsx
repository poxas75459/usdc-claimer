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
    "3jutneSjGs2exFQD9XjcwdrVYgUcCrKD2dcf8WVsw6UJ4hRSxjubTnH7KdzvPzRBbuC4kVq7cN76d4ecqPrJ7JqC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LPX2BfdmnDckBM1fcR6Pg4wQXJSA1qKLxkzBwkcSmw5VHZeffdvjZ4wUYbEZVxQMcMKsF1fTFuag2jJJjLw84L7",
  "key1": "5BFAFwidU6aqwVZ19Uqt7djskiBzfb8rurw5hECBZp9DbyNUZvdXDAquGC61kPsiYqU4HQuWj5bZJ7K1t3JQFtK7",
  "key2": "3cviJpGTu9NLsRzy8B3m5uwHSGnPdZ3zYpQxLV6w78E8fLp8oxkVNMWdVMpJmMWaWHxyPVCSfchJR7btpxbenPF1",
  "key3": "4NXWoq6EhtrSuaW1XMT24ghJdquqte4s9RFGMDEmkxULauYqcfuGg3Ms7pZXJkqMotJChFU2F5LmAxd3619H3KUi",
  "key4": "7Hdmy8QnzBdRWFdGgnzJ8bGtpamMaUrqUYQEquwgjq64HHkKHLX2mfrr77nG2WsMXNxMNntvoPoaMSYL1Grz1JQ",
  "key5": "xDsNVLjXU6pmAsdV7u6yHUHyFhZju4YBRGrduJN9mztvuWwYxYLL8dFBUShZuET4zWCepkML8bTGuZY3MMMz97v",
  "key6": "54TAAdtbgRWWAHYwhUMeWk3vBAtzEckJy42onPo8GTwTkfutaQ2w8bjz5YKiuwRmmJpBLT5ipuMT6awdjQrcmkQ2",
  "key7": "3ug6dBuMGQu9x72hQ1Mcib5hjSnHKeGj5R7vomLPHoXyMhTGrSxeY3yE4Mc3TaRd3FnKvroEEUbooZexHaXby1KF",
  "key8": "2t2goEsKdUHD5mmWntcToe7XUujjgJ59erFgT3J5z1B2otCCetRyBgnEp3X4yKWzUUbxUynany6nRoBh2A4iqM9s",
  "key9": "yKWGfLN5H6mDooVsXMdESDYfTCimahwWoJ1X3usjhvp4PnR4XdK27r6ac13vPUqwdmueR2KJ3dwHmnYs81uTPXH",
  "key10": "3Y5SdWDXfhihTk5SoyHbRsTppKcgtWwKEMUS63y5fYN7J7yd4A5pqhH5xDWQtspp29vdxjYP6X3VFRg7pRM17WEE",
  "key11": "4DFPPgjPgux6Tf4QuMBgb83Wh1u216BKe5o188ifwqC2x4BoAmJS8rN2T9z35ptjwrWZ9FfN9fG4tnYA8gfxdZE4",
  "key12": "2z646L6mePNezSdeYtojEucUcDmRLqdouPB3AKeFh73qqbJJKkXGTwk173vYyxbVYMF4kpR14QHbwrejzsnyLtD4",
  "key13": "3KqVbWm2B2qJN48k3ydHhiz5aieEn7HhUny9RyCmv47D76UHr6JxQZYsCBhngDbk15ZeVBGSKpcpD4rxqQCe9mvt",
  "key14": "4uDXdKNSFwAifFBRTkmCV5aWeWiUzqaZbGJsEoomjLQfoGKLPqbgUYYu1sjiFgETPhVh3ApYU893PdQF5RZiZR5E",
  "key15": "4oXpjn1ouwUx17W6eY1VQyeRFqwEochyWBkCKmzqy1vaYXxadgh2Y2uojm4NJat8yehLVDrpoVxCUYA7fC6Rw1n5",
  "key16": "2siKYxcTBad3SVkUBbYTjd4EaHMzGYqF6ANM2y7zcjf9sXTg31F8k9xMg288uUbWeeetVqTj35amwcwG3AAkRYP3",
  "key17": "4MqeEY6gQM5FJ39j2G9DmwFVySdAPFhj3LBkLm1jjRwMVyRJtLaoi4WVquoWAVxxAAufvt31YXACukk6fMrc5jzf",
  "key18": "2jYgPTFfrqASVGHxaVnbVKiZ2NdP6sufzpXRRrrjMJEWL7SMAKt5yt8bbiYPGRnm5vmHdwapXZEos7XKGWXRCL3v",
  "key19": "8ZGs3LwUeFbMMeYwpWx1NajSCRoo6dkpCcbJmk5yiGxSc5NaYQF7vj4whWgLzeaRMcPpgDHXyQTmkEcz7WfPHNf",
  "key20": "2wyT2Dqfbr8QpukkYF1FVHwCtHuawZef4KyS4Dpuc8su2Y25AVadaYXyZUgd9MjKKCkavRVSkuEcYDddx8qtTv9E",
  "key21": "Xcw5VPRxhbsRS9muemaqXJyXv3XeNWZ9t3DJPQ3nE1PrM29S67gzEji2WNgrs4jWeJdWKFAACs8oc2QS5brfKVk",
  "key22": "3bbZtT6jwe5CkuDLt6J9UMBUtbt73zLZmkHP7TcoCs6yrxrZFxkuNYXtNXd835irHGH7Tc9Uv8zFrWwB93LwancB",
  "key23": "5TW4FXrgv38sGuX4hQZUJAH2LyeYLV6ysVYGmnpkiGyKwyjy1QEAYh9sneZYkEXyBpnybLbAGF1KdC6MBnQPghSd",
  "key24": "4fQ1mWbV6ojotQWfx7LbrrEUJ5Ludu4sESQNx9qHfJJ2EEm9NUQujRYMNqn3WyZvcaSGwvwoavVRkwzTa5PpwyZQ",
  "key25": "sZcTiNchyg8yXjDLAxf9RmFfA71LXCyKP9XHJHnbDro9iSFMPQW32qYwLG4vzTqE9sVL3Nj9o1Lo5THibRnC6xF",
  "key26": "22NLhnFxrP5ZCKMs75h3tNwzELvqQccpKVa5oknaCCDJmia18T8zw1QpWiRgyrm2haZbQR9A1B32PokFMDPUt8M2",
  "key27": "4bTXVVfC1Se7kXdkA3H6ktByTDBqVA2yZHByDEYpWD46BGYSeuZVgC2r5SbWh47hRNoLPhCpBQF8yUy93avQqser",
  "key28": "5FMtJronHaBYr5tmzWcHXCGAqGd2TqTnnQ414U46suf4Giq9WQb7jvNTiZwgCcrLc6Vi6ck5SP1BkczfM8xDg2wb",
  "key29": "2Xm9Du4ak5rAgGCG8S8USm4kW1nE3NJfJq28ejJ84AdLasHn4M7EwGm3P58FSisJtHiEvSuaUg11MPBzFsjnjgeo",
  "key30": "uVUCKWZpH1mvUGCujeiWLLYqdRCg15B66MnNzSeQT1HbvmpKUAWcoD6TG9W1h1sTsKzgtxdFkgfBr9cNtEsvkU6",
  "key31": "4DeL8m3qsQLekUHiwxib2bzXeqgvCb5gdEgWaTvnS596H6C94a1KvzfyWu35VBmy8yzcG2m9mKv2f2RSAsxgTjgH",
  "key32": "4tBEjoFXoR11sD7evzgzmgbkDbuNmC14ZgZs9YWCv2LCsftT4TdU3C8GRMnXVdkHyL5nEH7aA5A8S2r8ukpvrU22",
  "key33": "22XWJLxXJGvNXzaXD3H93VyHrSLdbQgiarCcEMJEgDJARvxBBhrC1HNfyMbZfrs7qddq6hnC6vucjnMKgjsECHbk",
  "key34": "LUhEUBJUsAyZysL2UwxSc61BG9CAioiVkqYDfBNYJsKN76na47TaGbvz7BSLettpX6DmGWQRa341Yui98LWMw4r",
  "key35": "nqEuTRDG2BDaubSQHFtF7cc9N3meegSAvGPEJDUubkZu9eKwJXk2wGXrocxAdabz8vJjXp5yc5HNv1NCia3B44i",
  "key36": "5PAsWPpZin8YtCgRHpQEteTdkuuaUaJ82FNFTL6JKToi7MBdMgirtDxoBm4guoMe9uLSTN7V1aZWsXe3go6hmRRi",
  "key37": "wAZSoJzcBCUDP1crxCT8sP742T7s3YFh3VU3i2R4um4FFnGkeXY3djpVge4ZioCGJNhQFLkxPdhXY9zFd5stfGA",
  "key38": "5p5oujhGsfgYZ6RWKesLyPDisxJGQSwKGhRYmngXVWtfqkNLKpf2t7naKLD7GAePQL15gLktZ6xssL739iCJgtS",
  "key39": "PZqcZViHywSRLjdZh2TByRu8EmAg2uTgMKagKfq4k2uZnFBeuXT63x5TXZcMfyZ8S1x9PU4UGH9vRxUUP7umawY"
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
