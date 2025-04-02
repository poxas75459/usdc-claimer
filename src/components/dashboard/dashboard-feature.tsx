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
    "4dW6BEDjG1QGdWPPhcuDRDf2PmABguUPvnYeShkZ7MYbTbDLKRPvbZ1Thc1LHdEzt9z7mKPQhjjv4iGhS4xsgLpS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VtnzDBnXginjZrAQnPuYwyPvL3Zshqiy8jXL1prCmzXrzATiWN263UnzZuWWFnALYbRFaqM8sTi6EyWMpz8v83C",
  "key1": "kgP2eLCu44SoF4faTxKLeaJzaojqCUqsoQ5H5yNLJHhw3wQNvM8oUsBBypubSjHU2TjfoVkPLUtrbk7PKW38UFZ",
  "key2": "65iciX3F4RcsxfvLu6cGCCcZWoxcuh3YvgTbzdRSDuXzGYMEh1tUxg2djSUMo3Xy6Q114ku4mJi1gPv2sMc68HKd",
  "key3": "4WEQ4TGHmvi1NPFkN9kXLweG4BkWxiv9FiTEjBc61eNW6WGbp8AY28maLTd3dqN8WCZi2vuiSQCNpXxmvKbVuS3W",
  "key4": "5Ppav97JUcrVxc2pe5bvtB6vMN2UGfbG8CB471RGv3r2MAjoxq5hmDhquPGpjrEAThduQt4xMNzRP9NY2sqbqRGL",
  "key5": "aS6uVadcnD32SSqkPGs3JvimDawEKZsiqRCq99bRCt1S79FrAhE2ommrRHozhYBhLyVuuP6DK4tRyCNpPiyftPf",
  "key6": "Z5VcCN922bScTJDgzRtQzRQ4E9gMBYTSjsDHMhJ7XPGMG6CM5X4FXJXg3ix5KiwJnTe6XQR36j1Asco5XCVp39f",
  "key7": "49Fub5Dw8Q13aUq56YFoPa2qhP8K1fn5ZkF9wX9Vx2AvBUwtH5NTanCAdhC4x9WJs8kS6UKpvZHTNza8qWUW5gEo",
  "key8": "4jY6ibT9YTNnHQ9LUPMXo2xsnaVJN3jvUKNraQ4YpsYDxoTCBxetLqCVNCejAZAiiXpEKvihwWYWkhCSu6peeZv9",
  "key9": "FVi9aNFGjpqwUxoG5onTrowFUFRR4DgkJm6oepzdbHYtc4GGcPaf9ywVWo2NiavGuDdQbf298pdUkuW1y2JbDC1",
  "key10": "5k8CpFsm6C4torURw6XqfgkK3svnVidwq5oQ4ycmTR89dRYnskH5D9GTf5BnrGP7i2k4QFg8uhpLcvA1ShJsfXiC",
  "key11": "258z1gn8R2CYoD7hFex98QcPQ1GLNUeSRELkn61tgPtuhpn4JdqJYhtaopkbXY11evNcL4UF4zJFV7dXZodpTDjr",
  "key12": "2EDLBWaotPb5r6829iRmsivXk9gicoRMdsux1yY4gz2hjUyt1z5eQux9maUmasaswoyNtbsJbpNpftVTzK28NJJr",
  "key13": "2nMQ6PqYxVtMsxuQTpzmsn5YqeQEzYwcZ7chCtZDrC9c989m2yAfTy3qy3rJj6FCkY85NiRyUACwGqejqukkU6WQ",
  "key14": "3TLXG89gUkvN9NDfQLxrLnst2DFheLawZcA568m9Fzj6zuVGBRmkhCdAsEmHnMpRGByUYg4UgQbzz7T8SvcHYyeC",
  "key15": "3LNnKDXMj8Uu8bYA6CSVWVHMgQu49FWJayves3f7JJt3WqpsasrGJro9odkm9LzNZSroE4eDJzYxGcfthFGKrBFS",
  "key16": "Lw4ukXPkDXvQPvFaDM9tpYKz8peqSuNdawWVnzk5A7mZ7944T7PH418yZzuKUASh9uFVBeUF9GYPr8Jijzm3qrd",
  "key17": "5YVcJocg1AiQVU619xH4mNzhQoTrp7s2b63gAxDQcmQmtcjp9CMuwhqhqUf5NBhbZE9hKYRwZSj61iTMK18AnwGL",
  "key18": "D33vBcorWifSVegX8sjKWd83LjSHKviE7fCTx4DnHqKsrS1DsSui3JmQCGJXic8JFWEYAZq72rGgQ9TXq7NGvk8",
  "key19": "4vMna5YGM8qhG26vdD8o66oPGvAbcNikR8V5Qs5h4jZ24L4mHEF9dsLNP4a2xqD2E8TB144MeLMtkgmzviAmjSns",
  "key20": "4V1XVMhLXa1uQnJykmVnFi3oNwszaFfbJ6XYrJi6HRGHwksgj25YoRPraiXnCCso27C8ECJpXCeRibcwEqAqBeo9",
  "key21": "xuDaUSCxeWAzBRB4GHYPzzXzpZiFeE9oQTSNAqoPNJqxx85ChqYeKEpUCWMoUhnzRPjYpoKcA7yps2MESxSTNK1",
  "key22": "XuXyfdcmt8fHsQFrJ1UfdqtH3Te5ibdNRfuM9eLzvxcrcYSHBFRzGkbb9rLLgf9CFbdL61TSZKyvBwp15owJifB",
  "key23": "4v5tqLzVsVKNpXxsHnesdxw3iPjzvjp8gGqkpo6iEugZJxrVBfHxy2zb4F459Q2LAyRS9br6hCKJHULkXJkBEZYb",
  "key24": "4ZGVdSTGLj6paU9QLqjhJuZwRR52AznHiDuqYdbJNGvV2XoaJiAZQ4Xq6BgCWui2xS2GuupB91SNLBbXewHNYCes",
  "key25": "5cECBShntgHucUPpmWJw8vB1H44FgLNEEckHXPT69fHAd4UPy7vKK2swzmcwcVXwBfJv6QxiCaVRE4zrsGZpNecK",
  "key26": "23yVBuibtc8HcD1BNkxWcLsFndMRJarZQtpF4EfJVAwGjAYqtD7FZDPLaTqDYcXVDiwCDt7CQnuZJGNGWYVQXMuT",
  "key27": "9R7yFWREvDH1BYHMw99eAQfJEyBJy6T7toRnrX5W58A3LQSyhgtw4wYfuywyVERiwynETQuoCmpoDviDm1bqJ45",
  "key28": "3jhTJEfUgYDqzETteeo27gSEZKhpd6PsAa33sABYGvNpbHdHtXNT9UAHPauyosV5kzS1Gew2YJTs2o2KYbZVNLB7",
  "key29": "TFuSB59xBypeMrXA44r7cSzF5MuC7KwiinTrX8wSWTnKm4qnyLuCVuJLiN8p1StvLFBnMSSeu5PkmCxh6j7dXtU",
  "key30": "3Ga2HT21bb6p41j8LucgvjHRMDcrDtBvbQsfH6YjujfbErdRsbqsKKRVaP9SrUe4LCkyEvb2tKLxmKguPjzPo5pn",
  "key31": "5qs6Z1X5nmfow8JyeTrMEn1ufCqfRPkQtTc1aqGEPn6cQf2JpAiXXp1tEsrSAvPEoP567XwHCGFAJjwhrEcSqSG7",
  "key32": "PphGU6sC5oqekjricxvjUEp2PCy8KPY22aCZGAWpomvBevXjChK4m3Wjxm7Sx3FMXG6KEoEf8bZPYxhN5M2dNMH",
  "key33": "pgjnWzJUSzr25TuyzvcFCCc4GGc8zNg2WsLpjL5cucyJfThSVuTvSQoDBNXyvwiwtYw1WZ4E7M2EHDCmo1d5Q4E",
  "key34": "2TCnpfPZzEshdZD2P7khadeMwCjUMv89xBXXZ3eP3ZPq3xbMqic5psep6kxiScygaYum5KRtyFYTPtqi7CCjeamN",
  "key35": "C6F4V6C1ffNWvKmxwJ2jZVQYrRZZWkL4z34PjL6ft6qko48hokUjxvEiHjyqASAxs8XH4LRvYpjePAEGDE5K55b",
  "key36": "4uTsGasa1UuUfgA4rhGirzE7Zx618p3XP3ZV16QSUgNRQUgTxv5DL5gnesHZDtg8uPqaACMB8js1Wv4P4VjAcCP2"
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
