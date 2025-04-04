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
    "RtpZeTXtXTERAf3e3f56B73oL1h11iZqbTsEgMceGNTXXgD4azRecEn9FDdL6kDmuK2BQLUVsZMCp7nkr5fVm5M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Zy5Aw2g8GqKT2Bix3atQHyXHrnXvwnEF4XFiRhvXMV7gd3GPPscY7yW5q3eBTf4nHiJ4kptc4jvujDVCLWHUSM8",
  "key1": "49DXQmgAhHbDMyJAsTrow1UMpiTQYePdtVNckqBtYo8oa6q7yg2bYk344A6GFjZ7zaHYBS94eqWvoSFRTKZVH5SK",
  "key2": "NSY3B6kJUbZ7D2BT3Gu5WMaGQV1uCY5o7jRC9SzMHHpc8AYDpwmSLAqkhy9dMqCJvmH5SY5wPqmft2ZEyAfCMgt",
  "key3": "4uCChZujiwhWXLYqWKw5LXrnxbZuiYMvKrrPUKj2MoPGn43qK6STMpyBaWXbbNXYVRNkptx7sGye5Y1oxF9vvUYb",
  "key4": "3mfMFXWYkdZiTnna3VngWxgF13A5yvqy6yioq8Vp1kz7jvK92esXC3cqo2fWp6TF69zczZUz5c6DZx5sm4eo3BgV",
  "key5": "5PBmMfbtTnKd696indMh1FuGwLkeuya42nF4nnqVc4sb7yVCR8x37Fjjcyyw61uCy1fYixMjavs3mjDLFmMjNFnu",
  "key6": "WBZW33Xdgeq6umbeDcDVQ33kTDBoZjpRF8nTh7JAXBhPmHensdJjdPe5CB3xADo8VJh9GyfwSv5GjpjRBgEfTBH",
  "key7": "3NMNkTpdEiUnhrvXDgNPjmqBoLSTHdKCiwyMSYz1xmAjpNPoyhsMitnUBFJrZchbpdqxsJRzo8XcFVmYfSfeZ1Yw",
  "key8": "4D5XS4edbE1eLXFD8kokuLJ5pMJJzxTi37xxtXUQYXPGBSFHf9hcyNcw6wjpLeX7Uh7pWKHuRDvcdB37TF2a4ief",
  "key9": "iokDeqcquhVjAqdUPTGFhhE7yoLHUJCs7KWTXGcggVqwYxx6P4oKWAfFdQ5DD7ju5B2vjV6KKoxvQYZjuNkMfTS",
  "key10": "63ScdRyh7eDGJXTUMugNnxMYWrrcyRsMQeMw8Cjqa5q5wYPXcTemK6bGe4n49wDgTvyxzj6Z35j9K477jLjo4agb",
  "key11": "vhgkyZoj92wG8XNwLHouRbutUz92k3voYPVxxBQMjNRJKW2Kb2WG8SyeT9cAYAPmRDjHqYuFa2v7dFD3mFK6VQ4",
  "key12": "2Ce3rZQntzFaN2M3EzTJbhw3BQtP19trguZu3CB2scTKEt913D9anh2hmnpgXPmXc4nvDkG5HjSvwesHP1d7Q8Rv",
  "key13": "36cTWZAXNkEfVdrEuRZc8TvGprZTZwzCxrHKk3MuKr3mUjwm74e91LvoBRXyX91oGU9Wh9AwpgTnLSRkbVobDbq7",
  "key14": "p55USvQ9F1C2JTP2rf1sQw6dfd5KjbikSC3Cifk7wN8oExeRFqrU7k5DtgWqdtDjX8aD6DLHdZ9aUqu4t3tP5AQ",
  "key15": "2CJZ8uVFHKKTRMpv4CpXo6ru5AXUWppEfkBqpdHiPJrdRCPXA2mH1ddorNcKS2v45f3wxAS9nBhsCQFtVycLGMkB",
  "key16": "2oMdXz6KyLLBdRUkH5uqXLNk5yk2uJ3hWkXzE32kgB1bCwKwzVRUY1erkDFrPdMX9CufzPgtsBjXJCgy5bYeYF1x",
  "key17": "5ovnATxj3NUYRwLnpgeTmhrHmuS1BaUUZJyZSp6hcCpGxJz2CakH8guLvuwwHH5hzY4fDhL8g3yh9vj2jKkF7msq",
  "key18": "2fvmTt2zW34KPwbw8Uv9ntK4UB2nfqaDgFejdgCTyHhFc7pGrXkCexiQu5XbLsXT5Wcnqu6XK6Q9FJ4ndRBTmpiy",
  "key19": "67kuMjFtQUTjUqMHax46kJVP2k8oGAH8Ur1eAH7hdtpGBkXxcdibXNoa29kwpiavk7GbZLZDctfJftBaDWRaYMjq",
  "key20": "3Q81hoFbyDF49pVWfkEKAZv5UWZ27EAZWnyAhriqegy3qDTFndvGKNNcVoaqu93d3s8GcQ2YStm3NLnj7iZGEay5",
  "key21": "X8CYEkY77R59uRrRszceS5MGb1CBWgHc8KtFPc5X4Z8eFjzYTR4ZjHytzcAYLq2Fb4WgzF6uj7bKYwhkytXjio8",
  "key22": "3E7mqqRgNBCz7gKqVditGjQrbcwET5XxJcPuFB8nQTca6JgmLXHDdtsUWv6WBNzJSroTpHNnQSbEGKcp4rYxouCV",
  "key23": "acQed3DUbQxGM48Y7HUdBzXidpQdWh1QS3MVUKk456ep5v6K4ZbCAH7XaTyYV9XrKEpRuxivWeJnaLVGaWPtJWv",
  "key24": "5Sqe3u5KmM665y5aQeQLF6t946ZH8AXqSP26tGyQYgJQt5RGZd1uume2AbWKY1yXt3fTdSrFU1aomjf8iiNkD45e",
  "key25": "54PSSm5EtTTrT8FDUVnEnfeVeCwGutjhu5MkmRv8kMaovvMf3G32ysF1WueZJjRzjzXDSHaYzYV5GY5y73c7ypP6",
  "key26": "3SD8T9enpbaH8C18GgWh3jvT5sfnJXRH5MWeAgGSvT8MDyWm7s249DRwJtzV3bTBHLZXcvUqtU33UPxy1eqa2qZi",
  "key27": "4H54CMdB9swLv3CJjV61FyENyo39XpDbAXYvb3TG1Hsm27w5FKq9DqdSYvcv7kBZ3XjmsttB2vHxFv9FmdQsQgyC",
  "key28": "56Jm3FDdYRfa1h2RC1bsiaPd6JCUpVFQBP3fVsGrHj9Bgi9xgL3YWGDhAqzrzbKqJXXHKRMXXXVuCvW6oGMovuZB",
  "key29": "59T86jC5jKiNy4hHvGQkTxGP14Xt7S3jVxDcB6EqosEWeFWV7VFt3dMTuiKJ44s5VhBR6YSohUeqNoDS3oiAXdL2",
  "key30": "2Euynxg9uyGBadwRcCzwRnGoZgBuvmbFRZdgKBw6VY1DVyH3tngij5EASRuQAYseFobRePBCuW7cyRAsh9C1rTmg",
  "key31": "RvQvhn7tZLYaRVw4XbEPZmTKZcGd1PYbGJaSVTmiijvcA7QekqJ6DsCVfZy2Q2Ve57w6hj8E2MqpqeFhQh2cvqQ",
  "key32": "5ZfLrHe1y1jfZcQBmqKfXNdo7DK9ZKo4qxoPTgGXcLvg7xcTgC5TCRUcKnptmNcBSJKSGm1Tdm8pMe7j5GuESNH4",
  "key33": "5FDHooNio4g8FCFuL3VoWrt3Wy4jw9Gh8emALRKvm4WPGecdAbTCucxG8tsGhesXUW7uHHvmkRndGvg12bNTb7xw",
  "key34": "5HceJeXVS9D991Vewwr5vBrfRiZrHefT1RU2MdkfMQoiPh134kVBJxvuaCDDLr1yYxYbxfR7F3voVzEY4gbPRrVw",
  "key35": "3FFHUykzSBWxJZ9esvZu1j37mFPf58WumkVDC5pSAyNm9LCcSDmvPkSE4jkF8MU2jVmkragudFff1rBQUwAKKQw",
  "key36": "26n1Cbmv64z2iL1g98wiqPx4x9hvCSFoCJBXrdFUHMZqeD22YYotZajSZ42see9npZNnNSng9btSKu6tHRFBedzj",
  "key37": "3WN1VDFWEFNGmbq2WHDYQReWZAmQU8ey6Vq3qUrDV89yrNRmA8fD8n7TCxDHj7zPxzDnQVJiyPo6K211EY4J3DpF",
  "key38": "3MrhQFKEVFF8F8Vf3fDi5TzJ7xhMNye5YMaTnFHR7npPmSPweAHW7a8SnwwGCA6HcA9ZNYq2QxTTy7PnnWArTmyh",
  "key39": "2yahcFEagL8RhEps6N1pBeWFpSQSw7HQrbrBmEzLZ9RDPdK1CWxWvwdvo5nnBXkC827xHaBWZBQVU4k56qwb1nJc",
  "key40": "3Wpy7oqijTNYJQHsxENRr1HMqj9KS7jHp5GBjsN9Eu5DBVWJGMNdyKLZ6odHBGGsmFgkVZ5UcanejYZPx6h5HwUU"
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
