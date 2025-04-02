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
    "2o31WDXCaodfy3Hw5k6GBuirsDw2M5sqEQo8KWjSpNLaszP7i6JuUKHYeYEW8odny1Yqz5aJYkLTTYzJMCF7xgJ1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HMdan87SyVAiDDCxZtShTba2YS4iFmqNBAGvTaBSTXUqKbZ9yUv6v12nLcRSdbiinVFMJJSiGWTd5znTfBK7JZY",
  "key1": "5P7zMrCueLsUAcbf4V58hZubavuvpFho5mENob7LfcQjKzMZCJT4fh8fsaGST8SmQXvvqXjFqY5zxxjbQghWSRZA",
  "key2": "316eazqqAX5RyJkbddUsYjZCJQLeS2z7ayvZd66jJ3hs4nAYpja8ehMxTPku4awwHU48Futxipm7cRCrHEgd4AuU",
  "key3": "61ZFbtqBUMZKQ4TFv6si94cK83edQq9zRN3HUGzMFXPq6Ycuu5Uu7m83KSoyKcnZwGpEhPBkroW9vKBkQ4UJb5B5",
  "key4": "4vPMvLoq2LuY8F7BJAgmPVZJpuaoKTRJqqWc7wBeP9vsyrUN8T1JTJw6LhzP2oAM3QR8s1AqGWyrdPZpc8CRDX2Z",
  "key5": "ZkpCzAnC5bQR6zvGYTztFbG3AumFrWTd544WHjTMUV3hVN1z7oFEac6VQRvtn6Xfv4vzn4xjnmZSkosQy9Z4JQm",
  "key6": "3NhpKA57XJUTzpgRC67G68qFmGaXbBrm4sAiyoHkwybT5eLqigkws3AwWDduPYuX5AW1CGPNSU2Gt4ecS1VNA5P6",
  "key7": "5WiUiXhndzQU9c5fPE3p32XgEuKztq9xoW2zqADjhNn5RzJ5csbYA4JeHEF7QsGPKPWg9FeTnw8s9KsUNtbPBZfj",
  "key8": "5yUtDn5BT19LV7jHJGXR2oTBs2CcwHbkUhvzA4oLYCaEuek6BjmBYbDTx4sL98tqsjk8cGpXAkWq6B3d7bcB5apH",
  "key9": "3R7NXfmkfBagLBheJuUwSGPnAPUxzdjMsq2stPrsFy9CCQrSw4oGVAUNYzgMqKigLLFLH5jydhRQnmRe658foEY6",
  "key10": "Gkz1S9w7zGDxVESD9Hrsp46E4nXrx6gKbHNBEvEJz1b6Piv8TvFpGvkU7nY7FPQaheM9Qsv4QBiuJS48DKRtupG",
  "key11": "5ZZV8CLgy1FEpjWYdEfKQCgz2nvW59LKYpSp5bDMtVNgsPZkS1QUjrPo1ACkuz7oXYQiHP3nCeaRZnk2Pf9bVftq",
  "key12": "28bYTGpkqZwdxJtd5YTvZSQPLXe9FT1BM4qpRwD9xFet3z6rZAhXXKDYP6ui1wsdYsQiHCVVd9e6VvbipMUSmJTE",
  "key13": "4ShUTiyTpoyUCSpTurS7Cw3Qv4PySE9CU6pA7ShERqyLBzFjM1BADyNpwDfotZaAvbZ5w8vCNgghv9Hs7nHQXNrY",
  "key14": "5emnPBiiCtitNu3orMmv2gszUocQEEYT5Y6d2ohuwBph9owNL6dBKYtc2mvqFCt5MaGS5EhksudQ4B2euNLMt9Rg",
  "key15": "3Be9B2ip8AsQkJpYyMf7rfG9CR4xfXvroJj6KeNnpXCoCYYa4r3XXM22iLm3QVNMyTZSTfXBQrL35wxMuCb3abbu",
  "key16": "3H6XmAnaXQYfVVWhmtnAt2C6ThP6yRy6fKpXSKWGa2fQvaXUe5LTJv6f7PRw9m8fe44dYBRk4Y2jnbqb2yzbFA8G",
  "key17": "2zFSCMcm6DcRLuYzzkoRzqp1yUqMmbMFebFdRiZyAvRVHcaJ5TFxpXsxUrAJXHiBwcDQ7nR1orZZuem4eknqjoeZ",
  "key18": "4AfA6AzJyx9n9x7s6Hi85EmEVx4by57n2dSJRUWNdDvb4tzSsi5jLv3WjAkrywENUk3NU13bVAJKqxzU6ZwMpnGv",
  "key19": "2saMvibAFwPu9PdJwMjqrhMToEbpVPU3V5pfQdwTzE4QdJ5rcT6jraCpiMzM1JTfdsdqPyAEaPArirQtKLJ2q7ic",
  "key20": "5s8TTJyX59FNyJgez9SFiQKjARhBEutwi7LTtFFv2AWJW7nLsc1gUqD5koKRNAZrnASebSvdWpqooTn5Sc5KWoSL",
  "key21": "2bdj5rs6k8fadxAuzZ4VrE8eyL1S5Zb3H3wPmfNnhni38EKiaJXXSVzNTXRSUFr2mh2BrLbYA8njCAVUho1WCMRw",
  "key22": "5Viq2NEwu4fP7Jbk4GqiXoa4Hp8LyUvTP76BFqDVcUpE1bkSrqnzzQ5uRwzLDQi2LZ8DCCmysL1MqdNWxH84BSFH",
  "key23": "f2hcqURootbCETKsELtVV81jzuZKdJbTwjdZEjYHNQeeSNPcFrJr55P4FQs1BEePCBxjYZn9nCza2A3bePTRutn",
  "key24": "4kBqCyLUGP9r9PKnfTBpi3j9oiZrRVkWqkoEk8jTp3bbdSPso1Ui3BbRXDNEYXU4ejc1rgw3NuMY337E87CfMwr1",
  "key25": "5a5QHJjPnUSArMWYCPfxZXUMAYg2Ha2VnDzFWLd79wKi5tta4NhtDS5zqsPS4d3od7XfiffFNdmyMdSEAUumEm6b",
  "key26": "56ReFGAHxiLotnNdbAroMJHXsECJCo3xw2UXsGeuuJn2EEa9kRsbwJBd9pRqiBtJi56w996RjY4aXvQNxE9qaR8p",
  "key27": "jXbJjwuWguRDkU28h5HN5mpbKtZmK3nYA6QiMma76oPob4w4xe9h6qSDJJhYZjeaD4TpnNiKsckqzdMhRvJR9pn",
  "key28": "2Amv97RiupVTzZd1PUGRsVP9c37euWGg7WHqRVWLFLreiNGzRyaBgvZYyLTsLweVBjWnh7UJ4cxLLod7LpTa2qv",
  "key29": "2yBvuw8zV2T7qNYbAKoBa3csqUkq8Vmkknf4vRP4PrV7Q2ebhymvUJqhV8une76BLM8i5qHNgsz93k2TgKpW7aeP",
  "key30": "34cyCyJRh3cC2rMznFqCfnu2JRhZB5dbpDooKSfDF5T71GrfcdM8mJLUoTxNdGoAZxt6pHvKNAHxXqWPyTEjrouX",
  "key31": "5xEY3FhgAYZ8EPXBjFz6TJQuUSfHXio8x3LqiwitN7tRgtkVk2F95H7oA3MPceCaCXG1PRMvWAnCqQ4dvheLWhw",
  "key32": "3LbVsfzRQkjpVsnH5aXPaASkJN3AWrwqHAqgZ6WHwo81K3rHNFSFiDMznKsPmLJXquNkX9HzaPJqBouitTLYsG7A",
  "key33": "39VtzF8CEcYhHq914oDDjsH1EumgL8HREN3owLWywzVq89kavU9s4LaLvywXAaKP1pDC1MJ1dPGzLiqu1msKDiKg",
  "key34": "n6wfgFr8qP77CvWWCs8PAS3paMeUSEUfKyVqFsHcENLjronD4G4jqSzndAk93eDQUkXSteEWFqDy75tg6gcWZ6U",
  "key35": "N3DpXCwqarwSjjMEbyy4BWBBJifMbF84U1VcDUnrQBWC622QRguBz98mRiCNaix5NZu8UDfXZwjf6upGDTcBsBh",
  "key36": "3C93P2UEyTHroivy8w1MUuDjWv9vET78Eaiz5PWmtgi8NKkBF1637aa8KDwkJyugL9x2bcvsbcxi3LXRJ1gLQycV",
  "key37": "262xUz3f26TBbAE98wZ8kYKWPCjaw7CkCTiLQU7Vc6ayteCfaSUFRYdwNEoN8ABBDqGqjCVxr99b7pUE63yvbpEn",
  "key38": "58Sbr7NAYfFycErsH7NgZsULN7GZcZecB5X2tBsMDP5prFodyJ35HhVkXUNZaaYuAcsXdPjx5uAwvkthWeEPvG3o",
  "key39": "4oVep6Ur1MAPUrRevoQacUwrAXjC6xs6QYdoVjFxbvRAGSx7aV28BWBAR14JhH5ANy651zZEZTgb2EmE4cQEZCEp",
  "key40": "3MfbYvTc3cvjPauC7ejRESXeZ8ceYXUnxwgMoVWSVFuvWMUQ6XNj3c7PLWDhaUGeG43Ubxd7bhnDqJbjnoifUjuh",
  "key41": "98QikHwcQjT2G9MfwK5KQe3WUgAfzwKAcSstM2JTq1R7Bw6b1QG8D4G9bMb9T4qHHEipievnYnCzewqHB7XKsBp",
  "key42": "2SUzDgHS8xoMBeUit9aKLzL9eA5ZSyx9AErRgoPEUAYgf9uZqsD4wTdhZQEoCLMFa8oe6Wnyw5fsKepRHEJhcDRZ",
  "key43": "42ZpQdHVXCXnzj3o2bVf1c5GFZiAZTxsPyQ2SfU7SxffcLAg8H8MPyANSnA3f5MTq6G1U3ZR8t9C83rm99Kz6QPG",
  "key44": "5VoVbggMNQLPF3sGNdW5T1oB41NiqkWDcDXUT2tQ13sYBwF49TT2TPc14BFy2oyzBzRwfqaqY6yNqcM1GFDH9T5z",
  "key45": "4sakAKqgLKmbyHZQ9NEbTSLU9MBuaWn4KXkLrCio6jE8F4GGsLocgHAySev6F3GGqePRjfBKYLk4kwuv8FurWVfW",
  "key46": "46MSf5bErPtHUs43jtmLaLheE81VhBLuFzkFFcx4LhDjRbqikSrvGSsvpCEcWZuF14v3o7NU91BKYWNtT1Vu8Cm5",
  "key47": "2FMkzKnnLJs56e3eBro4uUWvHKQ1xS28d4zTKdX6aqAjgJXYyA1rxgBMZQArBwKaqjbYfwYEW2T9wrxEXKA8uRhj"
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
