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
    "28r2Nh91RkxP4VfE9o9WKvWs2vRrhmudRE3sQodkEDcSakWGRmA7YtnJWPpWQkpr1NqEUM8e9iGipwLCmrGGhpa8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xkUwviH4RdEfb2879obR2LgPz8kseVmX5xBSHomgUFBa4MTMaSR4oq71X9NAgRFfQMFWjC1UsTxKpLdwkbewj5D",
  "key1": "2FVAgT7jdu9upfn9h2wTYqv1QkNmnNzEBgBLPkDHpUMxuoeBnianQoSmTBfkhzm4DXofUZzWBTDviryvTP2ivwXA",
  "key2": "4RErgxu3rk6iZ2Arzewk7xFz2bEJSazq7tZraVHwUjeBuAJ1y3rU9iWXrsFjGwuewHkKVBGbJkNLVYAjwYuGc5hj",
  "key3": "5Z2JbV7nsP6P7ezUgVV8J9KcrWeSMyw8bbdg5KDnX7AZQ1ARrNuyau4GjrA5Cn6PmkQ13iMfkyeSnMZiv99vzXQu",
  "key4": "6MGKH3KAXzD9EpAKdYzPh9f9eaozhdXzMVCBjLh1hHq3BsBxM56VffAuJKXojHbDDw9RZxBkdN3h6FSW7foEzoN",
  "key5": "47BESh4wLPGJ9V9EdzqLqYH6up6efkA9PHQR5aDjVvcWcFwHLCPKtE3oqWyL3qyw9db2aR5Q23MWRcXhVEKhHCLr",
  "key6": "2taXaojUohQNW5MJjpLQjw8adjM7y7xwQCEvT1yrEDTrZ1PNSn9K87Dzm2PxMmFsAK7xNYHQxoLDsrjsgo457MUj",
  "key7": "5jjDhxsf6b8GrjMk2KMeJMeT7xUCQuhYVub1kYY42jrCDJXF83wpkyqgkSxX3sk32wpCiFicyS1swdRCXxnRViSa",
  "key8": "3qz7iYAfX7x7MmpKi5YKacuzmGBv1zsDWDhKZ4ZcoLQXDWm9xD1FGaG19pXiTSYE1MmAN8tvmSF9MuWc6MhxKiHC",
  "key9": "5BUGo7tBDBeJZMqB97E37NfuFVWvDRQeY6msDVotnhYtpZy9x9AFGZREXQgCSowqVboaVfVBVuPeamF5zxnQiKja",
  "key10": "3gGxRSjTcZvmbxwrjUPRWLeY5erGYDcfkR8YJ4d5NQZCUWsWEJn7MNuqm5gBe9Fsp2AYpVarsHQW2AukDP186Kt5",
  "key11": "4gPVtMzTENuhE8URgcFHCbun8bJuGfoCvdZJLRHe3ZnL1SoCeSyfFq8eLBnZQDDHdTjz2vMGjiwzSuxHoHmqBNd8",
  "key12": "2odyV41wC15jfViXfeq8i8QjMc9xjYuv77VeE7L5r9P4W8xLy9NfkyV1dCgaSX4Yccgh5xNud9XqoJeiUce4JgdA",
  "key13": "4nhsWdXLKJuHMSbX4ydFaLJamYkgAPny55kdCrWN4q9beUuy1ioYxjGjhwE2aNDiTs66mpPaUU1yW82argamF6m1",
  "key14": "2sEACtaMroTf3RBJPGbzaMP1mzrjqNum9a2hst6hLJYRaGoHbEAS3hPALgcFXFtQzjKskeQYf8EqhXCphmdM7KMx",
  "key15": "2bXAgdAaV9bH5rWpS9PGwhzYritMEJF9WK8kSAaPfVfWqpp4cEdH3EVBM3jM2iar4cYZJwHr5fmF9xiaXDb8QiZ5",
  "key16": "5Z9RaPi7ZsuXh2o45zAYP71HVPJUVCZyy1jyP7ezdnUiDhW7zMeyMnJ7TR6M5vYjUyjKS5Aa1cYkbuYchRfCHXwM",
  "key17": "5PkCgEFDrDKEJUYQD2AZPYt1cLkAWSmVYBEhbo7FpTHvawUnyCy8wxVxCKMdxSdgcJVRczpy1ifB5UDnDsJfEa8y",
  "key18": "4b57uyZ4taE9FzJmPqYmudNngvw8yCEBss8iGfjWqdvbjx7La7Uay2VFREceEmCiAX4aozSeTnFvfUzcyhBVwS19",
  "key19": "52AHfkqUgd6Cx7Zwm1i5H5CdPT3ERH1q7usMfmiHuAimRcmEquntgzfgJqWFHF2G1t57Jf4VUvL5HJ5fb9c66yHa",
  "key20": "4Vzmz7H4nu6DPfKjsUeTtLYy3zTS8Kmg6ia1Kt8KgMPMAqvLbtRZ434WatRkwxagPDby3kJBj8ivRjrzHaYGt1YS",
  "key21": "27A6cTW6mc9UQPYcrJTp8wa38RtKsnVZeekRmVfUVJzGRmy6TmxQ3oJjrecm8g46zUth2cexS1DsmSkfRiS8h47g",
  "key22": "zxuk5t9mLxBz2B13qX15LvXdQ7UipXRQHPDYfmwpgWUgYMZmY28DgCDJTjvibgsHB9b6dpgLxuTsdKAibwSFaNP",
  "key23": "4WD9fhgTx6SEthUAjg2XHH76NRnDF4wxsio1sPrhXKxTVhT7bqD4DpvXFvRQXxfFZ25qjgLR3TVZXRgyhyUDDkh6",
  "key24": "3EmefX27NLw7nVyskTscn7E3CuYWKnVKmPhdKuWMk6Wr7oPrzrVgRQD9REb3a82Lmg9pBSfTP4c2Q6gN3X6ED5ig",
  "key25": "3g39Wjbwoza4orE2p2F8MaHzodVGS22kKCkykyd4zb4cCgbxqKcem3L8LpnZwJRzrHNSj1A7q3cZST6fwkwR8VQk",
  "key26": "39gjXq6yMUrfNjrjdGhcH1C4HAXgUeMMHJk6pzmuR8cRuMmE6xh29wDzgAHiRYHNACY2q6o9atgm782D34YXFqRs",
  "key27": "Qyvj778VdwfDTzrh11mpNaMfh4pkauYXTKuHeopuC8GfQSJsEVbUuhBS81aaSx1NVFsSc228XQgKHU8hJpTAk9n",
  "key28": "5h93MZqQWkH4CEZP3PjYxJ8pxSEgn8c8pLzyfjfdsJU6Fv33VwQ8L2u9MhsBaduacVTqKazgq1Ri5tZtVjnbwh6u",
  "key29": "2cE78jzk3tGcTwsoqm6nqdiVMW4CuCHFmSaCZwM3dAD8QttaRfgcfccC7LiqR7dEDFq68EQ99uTJPb4n6wNq3otC",
  "key30": "3mHE99ymVr5Utr2wMmoLajgFUrEre3mAcYh6h42TmdEEk9iRLE9auVoCJc8TeuoAiXSnxJxvghG4HpsgKoEXqjSS",
  "key31": "4g1XvPnncyuUsg9NQY3nkAmh8kXyaZoAtgDv5WfUSeS5YTaF7nDk4eroiLNyh9XUPzMss9bPs8oMewMtgkMFKEFn",
  "key32": "4yTDqut6nYkSzwRzv4oHbp2ZnQDRsPHKogrqN6M3vKxZJp2YenuzcqLTMmePLtJaNsUdGTKsiJcaYA3jazYsjz1H",
  "key33": "494y4GW2pRkVFKHmMQXxq79VjjuDCpzXyXJD3g9d2MMbmWh6x1WWSNSkisXcMJQ2s9Vfej5QqnPhpzaxu4pcUaDV",
  "key34": "4XLfx3Hrdf4cTYRdPqboofTUFxVNwZCeqELiMExAAJcRF5M8ktBKNXtvwdSzySTWuSdv9FaPGjmAzpkdVVp5kTFx",
  "key35": "3fapM4gCEHFHefapuruPxrh6VVvHbQsfLKKa5sLTU9ndFWT3LEemgygn7GffG1MsZEL9goJxc1SyLXdM3TTSXwn7",
  "key36": "qRxkQmKeCt4UiJ9UwbawVHNoDEFH2TFd4gkegKJ4V1WacNuw8ij4Ktzh5eo8Fa8yphwX4Pv5atMA4pEG9z5KZMH",
  "key37": "51CopTpBgfUfDBVQLRTR77Y4Tz8vD5NLTs1BxU147g3JkDHvabLXCjeyikVzayBncaDDTNYbXamYN6CBMzCXfhqm",
  "key38": "46uAZsU9e6PCUo4skARu5Fcs35qzm9oHq9h1SkjRDXLdBHPkQTunCNfnUB8T8n5xYt45qcw47nCkJUJzv1dsj6xQ",
  "key39": "8smFtWYbrrcDUXuZ927LRHZzT2GDFWdxmM9VKUavGN8V5cftcMjEQPRNogsn6VW4PJZ8euff8mQdBBLbGw2ee4B",
  "key40": "2ucMfdpe9Xiv9r79wcffVwAxVry46bs7mmPmUaLLmNY4yS3z8Xij1L62KMLT3LLRhwp2ZxeM7aCmbMQrFLXHKS1Y",
  "key41": "3qjoXEqGq1CvE47AXHMhyue9FkSGvt1QKbhc4aALwmgPZDqhXb6cGKYskdeME6zXuz8zsZ4LocCd8i1Vn6yQMa8f",
  "key42": "6jeHyWzXUCzqnKkbySufw8wYpH5wTFVoq29AxVHpg8gqgrTSZQYrmSSEtB4NPLF8q6KshayuNNnKqaTJ5RUyZyi",
  "key43": "3oiAJsBRS5XixGrwjAkbs3UMC5wT9zbYTe7heDPo9WNSdvWLDRznX9X5pzBf4WR5H4wYtbJ1HZ5TXgWJKT67Rccw",
  "key44": "3KzmH8RvcrAhUQ15CZK21nm14MKUtyVjynRTGqWV5UwM2Vrtb4UcnG4fWMfps9c7GyavRKyg1yCubMGWaRyyGmGj"
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
