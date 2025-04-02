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
    "5K3X7J3pQ5Qz9ztDS4JPmBYmFcdfeCjrfbJseaeKDytXs5GHA8UJvUUVmBx3wRCksQy3Ep1y9Rvc6rzyBLAwzZyQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ePT1hniwk78imVyJwDLogE5HjDiYjRTGvhiUD4yxMB52mmUZ9WZutBJmP799UqCZbT2cEnM1hFXtyBk2odSXMao",
  "key1": "2MvYpvNZm8CvUsaGB6zw6EGNMNkgPhGmANGzYMZRGA17CMbiYnJtc8ey99DVcnGGUEzkJfgY9Kn3xUuySAzBKeYb",
  "key2": "4ap5Pu16G8iPttBVLouorwUKsZ6TMjUJSPZdEvbi99GEEEU9ZDwnmGYgmYnxTgLkWgMG13ak6gJ4tncdFsMyhNaD",
  "key3": "36t9VxKEVWEjzSoLUpiRpMskLQBrr6Lmuoj1LuVdGLi7w9c38fVL5VZiXxJayQ3USFXNB7C85eQqMjeSKsMf2hjq",
  "key4": "4XphokfJ6bJGXDBheXwoRndykMEguqY3z5jZQDkc6pdu3mE82SKL5tnJUqtjyTGtfXQEsiNTAtStewCKmBRhrFwa",
  "key5": "5R92fdRrTLGu8zgoP2bzc48ygR7HBdZAESaKW3TrnpFQRNRDdcLeiat5C1Lc5VA2Vkkc5YK2StqvNd9PT8gx5ZEf",
  "key6": "25WfqEHsRwzC18eAmGD56rD1My3p7WAeQS2iozS4QAQFK9W3DG2LKPuWsQhdnHConLxZtSjmkzGpKU3nfU26h3Dv",
  "key7": "2GeaZq2EY7soF8D15eQQrUJEQFUamHqyZugH6SRQSuzCsPesjF2zov9Hm9i9aKCbuFsanFLaJRmw4dSFHHbguqiu",
  "key8": "3JRaXH1yBKceAJv6iMiZarGo51UsJ9h5yyRVqPJtxuXF23WPwqfCvfcYQLVZ9s73W2tQoQEJweBTtfek52sfkojz",
  "key9": "2exfdykUgk4R7EAA9uZLpHRFC7oam9JnGHq6M8g7G3wxncrdn8hGBJchs3rf5K2RWtbXhC3TC4evkDU2stAotpxo",
  "key10": "635pQ9QzWTAttRCMW2RHZZi2LfTRNpmT6PbgsS1nkVKs2X54BFdKSoiTjVtGH6m5ao67Ufw6Z6mcvZQwY76xwFsN",
  "key11": "3RBXrrYsHAkjW1Qmf5WsUgmb7AqpvC8MXzWz4YxiCaYJSPbPy5dhGJ8XNSUmExFGXjYeaJ6foEoEvmWCgqNxP516",
  "key12": "XhwZgFDgeuSjcJ3Wms5ReNHuhqGyyf6vzowcvH81x9AhMVJuXymaeZPrwA3mBbZf5Z2QwnfRy8TwZJEL3LYN2HT",
  "key13": "5ddSwnMBm7oyNBoQuVKjXHL2bhq6bhijLx561YhX7R4cqC6EAHFurtUtKYFfpeqmNKDequAJyp5tJ9fEab3N4Zo3",
  "key14": "ZWhUdJxKEsXs5gZhzqA9Ng4Wq3aPph4tVE2LA6wJNLeVcfjsh13Uby8cf4KwTP1iTWjJn1AXYnTu95fuQZjuAi7",
  "key15": "26eth9m14Dmki7hoP2E4Pk32c2ER9z2r2YvUCVDcRt2e9tq6BkXFL4LfqXVKti662Ry4KbGNNX6rAorgHuyb4HVc",
  "key16": "3fLMpMh7LC2XXk3Jf71sz5M6hXQdr8FsTA9TSKApgvHa4cKHt5TrUSsBRZfm7dcX7agsmcJiXVNsicg3f47noyvQ",
  "key17": "5f4V7LUZNKtByKpqWU72D6WCY4FU1TNNX4qEc3QK8w9CA7Q2NNGha5kAUCtbTn77r2v13CqPUPggpo3y4BrC6DyB",
  "key18": "2tbTWrYXnWzVw87dUNyizhJqdVCVwdCkZ3cQPJjYnjrTMoqRNdRdKhNs6wDUZgtu1seexA4xPnJiAzAgjRsXPBGm",
  "key19": "2f2JytsXUp7x4D8g1uaLFBtdA7MqmuH2HetE9WSuUwBzcNaPRShrfACahSfNdAGCrEHB4ScebQfYc9dmbU4SDZpb",
  "key20": "GDbfzmZ8biESJCjQujYwbqSNHKJA63CGyas6Meh5PSq8BaRvkJ96vRYfs6vkchq6G9rzU67DWY2WSeyhi7ZDyme",
  "key21": "2w4UiqTBXdZEoCtmr7a57iwPWUSDdgtz2yuk4xpvXCnJC7PzLcoEa7FBxHADcxLkBEinYHpNMYXGGNKKymPtE7mL",
  "key22": "65BkuRkVq7ZpXX4vP6NHYTYgBwRRJ1m1QJCAy18Gc32HmDZFyHVzr7Xb6VhFespujHxRGNL6WhdV1ZvEtRz56p9g",
  "key23": "2zG8wDCssW9KeSd5Y1TPibWDcVVTSwb6EGdUfr6YjKcAQikiAuwDs7wcynqST7T6HsAqSSzZfj1dUmtSTpByg4Az",
  "key24": "vp5EuTKuCY1W1Uwv3nBYTrWLft9a48v7EcPnAhaTdfw3myTgA14zq8q7j99xnY5TwTUQsCk1qdRuKuiiboCe2DK",
  "key25": "4j9R8gCdiCv5pnUWySSDrBNMkvMA1nDJyCfHM9DQibmLZRdForZMizJFAZ8gpoQFAsVUedqx4KH3Ud5UboPW4irc",
  "key26": "2XYMJs6tzatoWwPQeKo14JX2cwLqUZoEqPDpAyodgvvasFZVnjLdwQrzGDEJTM297oTee4Rg2Bh7eVJuuEuzBs1B",
  "key27": "35da3T6UNHUyzRr5RTnpPF62Ea1ABzBFMEZAy6BBnUKAsPmNxUVFLnQVpaG1S9cdPx38gZxgYWnduexbDPVyi2hN",
  "key28": "5T2GXxMWgv9X7nUrZHTcaTr3M1nB427DXASRZcVwWnWkYDpcpyjbBYarh65iewEkW4Gv1sC3MnqJM7DzaLs15hGf",
  "key29": "2nQyCezJ8jzJB2ZshrtPNzKYeaRbPbod5A6K859EQDXoq8TBmsZcCzMBZVTNUASnxXE2KCa7xxn99atf8kse4L96",
  "key30": "4fSfMHQsqph6Da9s2c1MRCkeyRhpSNvYZGem4uqjbiWTy3Y8XSyYzL1gkUG1UU96neCXk5GHBuaSSPmWhWFwC1QU",
  "key31": "3d2VE6SXfhEUSpSDkfMWfB87rci9jGj4XP6rzZUA49LTQ1UnFoXN8hccBmJ1b6fkY151SgEHZc1XtBzv6iseE7qR",
  "key32": "3Y5muzK7oPV3sAr5qRH8rBh6iXV3r1zUid2rKkoDbXgLped4kxW1rs1SxEY1SCWZjLE7xGceiCAbCg6CoeRiBcLA",
  "key33": "2aVAUv7Qi1ER3ii19RzF16tpyqRawKioSsaRfUrPzuXJphjTDTGT7cDoCiLxDWLHkc1n43D8pjdRmZigiFST65ca",
  "key34": "dG2vCP5cWCLn2LGYeXjESoG4SAzV9sVvhTeEAMzvK43Z9Dk8uBNN2pXZ3tNMNgj8Rp7CeTC3ohAdQoiLVEHMSFV",
  "key35": "54ESGfZ9UUNRgy3PQDJbnueA5ZQUzr7f5Q1no7JADkGVw7KV9jmsPHtCtzaDUjJP6VzpBf46ZVTm4mVnjpKtWkN4",
  "key36": "2ZBm4hSCa3X67k5zQqTY1w7TGpfXutzHtNErcWeRYwqJ5WqUF3Fk2w4GC96Xk2BEkYwJTx13aEqvNDu3VRAEEqBh",
  "key37": "384huHB838M4EN5zFbSZ8bob4gm7DyXiYPUEBSNAM6dBQkLVtbFUAXgcfixVFYeZVzja3Q4LMER89yASWMRiYz4C",
  "key38": "5BqaHAP6934S9wXoUBBkEtdzYh9MUDxb72yNZrnVuuCyudMWmr2BFH7Thqw7zDWvddfoSmNDtzmPd2xjovvPE8zs",
  "key39": "34qTRnfqU33UqJNHgPBzN9cShJ1S1Y2KZByDSHcCNx8PAKaJ5NvqZt6Q3xJoBy1Erf7pTdHMMrwarWJfK5pv6juX",
  "key40": "56fADzsNfqgi627SX2gnC9FpTHfz4i5onbrLRNEXfMfGSotejXssKWoSKYe5hnLKvaEJtC5qCpkHQCi7CSGN89FK",
  "key41": "4RoGP4NjaAruohtXhQvc62U9jctPNrWyZFbUEkyidcJBXoeN4JHtpYMu3WCYjcvJLJvH44QdMDhMmzHWEEvdVxNX"
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
