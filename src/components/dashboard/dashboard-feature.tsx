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
    "3xATPozvg66zX194q6mPmMcb7iCWBqTbJATRX6DbgvUw4rsrnyBukFESd8tux2PBpD62gKPFKWjBznFp8n54XxyH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2r8Kc16X3FuvaPTHuYgyz9WxCHCJT95UMd5bBvDFwZjhWZdUo6VbVPZ4myViFJtxADfymS5osSjHrsZjj1NyPKXp",
  "key1": "3mQfZ4XUPt6YYS71efzKt4tk8mSM5jh5WmQzhVGbJsAuCqsdYUqvNVuH7FBoAbXKeUbdFnDvXpTxJCsDuyeXdfDz",
  "key2": "2ihM8YvvrWUhSD9rZpsSwnNxcQE2KtHgbrp4aBAd8Jc1Zho3xePt7ymha9zwVBqCEfF3TJZSmF8R2C94m3R3aZ59",
  "key3": "4hutnpAgRxfCj5cZUDHCur5FWExYKMmurQ3WG6juTzqFtkzCbCnAfLDNct5oTCpk3ShJJRhKcDXCVTQEXi8kibzP",
  "key4": "5xDsXaMozfNSBaUkpBnMqfFDzynERFMJuScA2QHDACdxAfiP3WYXgMic6VcnuuZWAPvdkeeLruVbh3hy63B6icgh",
  "key5": "3ajXnoF1NkeB17WQKFo2FQ9z4Sh6v5CJDLw2xBdGcabo6haFiWJte4H7PQtZpFxb91fzcRQ8JocTE6wF5BE9HiZM",
  "key6": "66XAV5ESkCFQbBghkPrzT7Q2jhT2Ya7HKqpmFRa133aAFMgraDRdVzUtaH1Kq52KoRTRsUtcdFQzpAX1ToQDPqjK",
  "key7": "TLuRmqZuLJjy8rmc3MporAUQ2DX8Cx6wXyLmhYXVwqW1DdCTTtrsk5REkTSagbKM6ofZhS6dxPPUvjBAR69xk4C",
  "key8": "2UTwczbNJwAPddgBe45ZPB889XiGCgyJnnjvjtwgJw9dJjZ9BYWVLh69k5GjLxuzzyFtn11NJLwtRrT6CRvYBtbT",
  "key9": "4k5zSJcesxLHB3ttG8jhHEQootiXW4gVXZWT1cq4sgqpGrDDLUovsc2bzmjDeMiM1VEFT3CpFAmxkHxQZnmzuE1q",
  "key10": "4rQqdaZBX9q6oU6Xb6nULErn1MH4GVzfaLmgm3nJCM2pZcCutFmubPBQuBnapS8P7PdBuQY4FxiEpJkyFmDv1o2v",
  "key11": "AGVzqjUtuy3PSpkarddSNPASLugDmXhNnorx9XuphKPExsDkv8oSYFrXEuQ3sHtkWT3YeDu5W4BvuTNrxZgf8tp",
  "key12": "bx3ZEisUGRWU9uWz5z9zBUgEwcv9p7ES8hEWssuyrwuJ7Z8Xg1u4FaT13d1vWU8CZHGaoGMxZDdbsfvuu797PZc",
  "key13": "5RQNVHMbpEQB7sYCjqCB3vi4uFQDJcmLG8LXsxV1vFo1b3PufkaxgnwGPioDyEYm6cRpor6BR3LLkpSmK5UqAgJW",
  "key14": "4teoWZFvJnJ1fbfwQfwCkeKCFx2mdXhY5MjxRWM4zZsES8E8QRgYDNVinXjZxvKkEpZKritWog8wzBCSSUZ5r4T4",
  "key15": "hvDKo7FP3FR1Aj8Yu2kF19whgfFz6aX9rQUXcEjsi6UYkp1PrRhmhp8B26tYyrEHV82wYokVeHJZrPqKMRZSKAr",
  "key16": "2PV4cLyAjHq9tHBjihmT2yKL5wYHVUNFxtDmEUR1VNsdCSsfWcdLRTieKoTEQWGqrsnuBCK9tQZNxzmR4UM63WPk",
  "key17": "3kxuobAshxQ9dfu8FaQBRq7jv7pazVdVw8znZg9oqbLoBw2w8sYh589jucLe5PDxbhG2GaRN34a9RJKmr7wo2dWk",
  "key18": "3YmqiGXaWJdDyxgXaQ9viu4p5AETMdzj7SHt7adrdiCfpEyC4F3CjNZinpypWx9gebjq7ghtkUmdL7bgAxsutnDk",
  "key19": "2Q2yhR6Noixx2aNT39LZxXyyoqHVKSfPzYNi49bHz5ULQNLyJFmc6Nh5RA5VpPFLfdeYKcPfkYAd2Ef8AWrJ25n4",
  "key20": "3pLv3rHoQeQdxw17BfZzqzMAd5dTeXKtRtw1yYHC48KSNtZoBXixotxx464rtJs36GnqBVRUrFvH8tYKo8Yygefw",
  "key21": "2Jm7J4pDiNUq1ABftxEMkUKkxQyvpTab4cfAH45LY8m3EhkiT4XoLV6DH55s79AZz5ragz3KTL4UxhmZwx3X7gMy",
  "key22": "2hr8tACprMFqoHP9GKLWGeWgj8FS19pH9QTLhyL6RX2M128UXZiZBZpXWvYgrAzKHYZaSKDU25fwXHuxLmHTAbNr",
  "key23": "2rgwqkL4siyU4X1q4DFvgZnd8HrDF7KrtvtTopd1fCJtrCZnaxN7qCLVPuzw6zLYSK2go5zPW1Ktrnesf7W1PPr8",
  "key24": "r74PoeKz4cVHLFTddypUoxrocihPNciYidpZf3KekoyB3nookyT32tm8A82awAzVUz3Acc6gws8sPKhu73DUNk4",
  "key25": "2BBATSxK5mVCgCt8aCEaAuuJ8biSjeZeHNzhmdSjZ66dtmjZbwGsm4gzgHeSaBhZQ4Yv6qhJhdQoBb91rRmVZFKm",
  "key26": "5VNcVBisc2Ysan5mof5TGtnV9u8NeXFweMY35GAbFpTUMAFF41TJAhFa4XcdkcGHDTseWN6JZ2x9oZQGdJ5LArGB",
  "key27": "511doq81tnkkTJB6d6mRREhDjik5hjqNphucxoNxx5S7v3cnGxnATvPRWZYE1nWGkfTJkvj5fCifbdQAX6d1yv6q",
  "key28": "4yvdnGRDw1qKv1jbS8qqwU6nKgWhdr7YDknrUTaAA3bNPy3uu2YNJY4cP1sCNuytWx9FjaavxBw2bjoCz7VQp4zj",
  "key29": "5zh4yHz6FrVNsCJBrGoiqqfobsam4mAojSt7D6qZwUpACQay3Zqhg88znpbDT463PHFCpp3GYtctzYNR21X7k9zU",
  "key30": "5HEUTApSDsTSQh9BiDA9bmEcTnGXM9RorizWk1GW8kQgxEzHtf4rBhx2bQMJLZM7GqrekHrkmAhUVRuji67oZeDQ",
  "key31": "5okmfCER4L24Bn1Riy2RJkpHuYHbmSLrWqc71thwkBqpT75tiPaL1FJHXfPY1GCmgHKib3zW2k3RwAPF9CjJ3Azk",
  "key32": "5576ny41Jj1VHQv7Kc2beqnUawspcLrNoPq23vTGF7k46Uyedh4TEj7JMgakUGFAfrvBwMWfncsTh5KBjgV7SPn4",
  "key33": "ZQ39Y486nfdMrA5FTgjByoTYCeqy6gt3Wwp9tEx45edqCDFBy543PsuoQURtZ26mKfYq2H5ztK9htMFqKjKypoa",
  "key34": "4fQyB6aA4hQuDydjrqoyTN93qpPWqwELXEpLEdZyiBjxvBQE2DfWKoczLStrxfswHtqZuFHREkxxgq7J56TZERH1",
  "key35": "45tekBjNSyfJEPLVQ6a6p8bJ1CRitVrf9Sp4MwrdpiouJhHBSDZEKE5bJq7Q8HsYfmygaHtt9PGuUe7WnESobyiG",
  "key36": "5VDYSntf1iY6YxdAryWd3kCP9XZwEat7xMtBsahUrbCWoy8qi5EiBTKB9mKuxi4rKe4bsPpT5SNvaf7CEHZKZ3N8",
  "key37": "2XAaiQgrtbkmUWYw64p6ifPPUHRdrB5eUwmQuXRCTArDQYfJEuXgF9Lddhj9yA22WFVZBhPK2pbA1MqZ7wAc4XzR",
  "key38": "63xzHjXWRbaeGio98RgNoyCovqUPSApYWx3bGpvXSrVBUjLxdeoSAmcTd5bhpfp16aZT8BxeX75DRqiFeZWTB6C4",
  "key39": "35MMH2xhwnho3bY45jjuZRG5S5nJV8K9D4mGQgeRaRBjzkogUCoMBo9dmsi7afpJKQJFnmabj7cqVvR58uRVMzQ"
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
