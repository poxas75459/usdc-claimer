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
    "VXcTuU3zHKU77u7t4tXHpMXTWLsTKKUrJcjoa8uTmmED7wx9rmx5oHAsCGFfn6Uaof52udBRdzaWnQu4JfUUwty"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "phYbs6x75GzsT6mTm4DqrHc18ATSk6AmjZkXkwHc6T7HygKwuLt8EKyU6xtSzHWMPgkyrwJ4YCM3cvtmKQKUyx6",
  "key1": "3GuwvNpqRDuR9fdVQongaJwZiLCRFDkkCGiDr4y2joi5jneLLkWfsFtX3cxFKRJqGDggJW7H5taxoWboij1qq4Xi",
  "key2": "CyEgWs9tYT8hkkrxrAowLjJUGPz1hd67fxGxchnjznQakzyiK2YyaxynzrxMWk61YQAvmtJPyBFHuY3j5Zb9ghF",
  "key3": "3MMp9gTnKhVy74cAk2AF3EEprANfCjga3AKR58qreCUzedWW16wF93HhTKCRjZExGryqdaeoFsKsoGQ3nzy1PnNZ",
  "key4": "27nkobFQ2ZUnHJ75VbKkoVeXAj7PegVpVud6XgC7NoQvBYsGFCkY4Zbc7SzLD78wf6zBhorUFcpSdMgHbWHjgHVJ",
  "key5": "3afQqS135bfpDigYibiWqC9sGvRQQT7PTgaMrtpY4AhwqzcfKucqsEBoiEC7BsQVfpbhhwkHPdz9yTjQrCyt8j37",
  "key6": "2UA8XXGCatqe1iUojkaAxRSznBmsnH4SbGUkkewH18i69jdmLieaSRfaCtRog1o2ZSm5s4Wt8SRecfvp1Cp32xfS",
  "key7": "LU6rKKTVR5xd8LaepnpwGXcAeSk1sTQxPg649qsH5LaSDTa5FgnhKoMmimivUDHvaHxKGG1tjn9Qe9UnajVRMHH",
  "key8": "45FydfVbk8yZnV4AteFJCk9qQN8DeGh9vzeuvWyskazLf9R5xfCRQVzZmB4hRZ6hcvwZ1io5TxpPid8T3B2UEsc6",
  "key9": "rg9mBQttHANoJB5jGBWk3jq2D3GZo22oSkvvtLdronAWmzL7H3L7Pk3WZdtNVFAZWEV6qHANaEhdxts5wUUwu6V",
  "key10": "4PaVLMBDisVz6SqfL4dYzjSdXJCwRtopUQ7oszBEdoo9GF6oxPhh4aA4VVK9aZbQ9mE6Jmsx27u942CPeSBp7DMs",
  "key11": "CwZLAPehAwnnRtUQYKBbNr2A9JvAmJzof4DozArZexrL7JtAGbN8diqJB9GMf9kLGrRWs5YQdH56Pnt41EMJiNb",
  "key12": "6HLTC4GdASoUDh1H955Jvv3QQAobmUywFjJUmGJAp6ZGjv2NgEUggE9FZ97friWVK6By3hiXqAcK4pUVuuDYmCp",
  "key13": "47bcJzqMQodP4SZrkFTETperDkWV5dqHCve48MdPy7FzGRMJ8VgUWHuUfzR7hRFfe3jNinHt8daxF2tjiBn5xBcb",
  "key14": "5L1ph13huaDtSgysasczdnhuNvnZxUFt56MmCAsKyxYcWx5YdDr7SoPk327s9tXeEexuPgjyXDqQ9yKMiqiWiM7Q",
  "key15": "4vM4PoAzTJva3CCNGV5JFFjBtnU2jYtBnQAtfgiX77ia8V6XBUL5LaFNMQRvrym6R6Ad1CHPiCgqgXZrbpFN8h4H",
  "key16": "3nB4aXHoEcA1SbKUx5sPfc8FFbDuqi9F8FHtr892h3i6ABpZwFEM8PFvXS9cYc8nLNMrgACi28eFiKtx7ZQnZoMo",
  "key17": "ga1ES3dmEV7EfSuf1yksDYv5HVmHBcFNQdELbJSG7zutUK3dobUEqQUb7p3dygEumM2WqeH9jjhbdAeApynn6DU",
  "key18": "5yLcXV7oWoaRB7E2enT5Jm2htRgDPzHiNKGKEdvnb44kwaT8bwmHFsxA19HxiAH673Yojw24L1FuNdSxgU8vqno9",
  "key19": "4ofiGsUCHoTHq3A4dM5GfqZZs5MWKTpHoB5uPueg1Y6hAMrj4qzHWL7hyfuHT6cUC8GHXKt4KSEG5fh7B42CRH4d",
  "key20": "5FZdwuGN4PkVsHm2LD3jz8YvptDeMWaRX79KiEPq5R9ha2aav8hTSzS3kvck5xmwSwjKf9XMr1f4M8rmYsSAJJRs",
  "key21": "ho4nXZ9Bz5JzrRaAJHesXx5mUnwLu8doU84MY8sKYz8kk4FkHHBycnP75VsPRzM3hGEkZKNtoCHkauijHvfkZSm",
  "key22": "5AWiTy5VGYcskA6xZt9TVfBgmZndgK1ck4FTpLT5BTPhX2C2XLVM6pN29nwDS4VJWNzLZK2KAXY57Q9EHxiMjREK",
  "key23": "2m2nEVvY5XjGjdxC4ahsrSPk95dTiwDZW1dBdQcTZ18UsXqs2pNqo3qP4Z182TWxnn2u4KDsdEmanRqqkudFwyQc",
  "key24": "3ssjFCLMsHrKEVMeAFYkSpqAmmEwekX4C3nYp3hXf4rZxKg7nWepA4cuvptMNrmU9b2BBZ9C6Jt15vZyL3eYDyzx",
  "key25": "3yzpvmNQd5Zh1CsJnqygbMLz9BKcKQtXyzw3kQinJyKThnwNeqrLCpEgFmuZao3tLLNbPv1iTXmcxwpJbMmKicyE",
  "key26": "k1woxUPHAyyLJaJ9yHSxPf9Mhg6RBzBYG3m8pvhJuEno5dAouhxzvER4FGiHmbk8yZq8seWJd5sfpS7HNNtwNtV",
  "key27": "4KDr4aU9wkNqZLKsjUx4xduSS5xRii8X62JGfbAt8kqTahXbCWMo5tESy5byENEjoGttykjotqD1SKoDYFn35f88",
  "key28": "LhRCVbpX7SWmJD19jLUynqpkUGxwLmfNq79HYvthSDff1eUdWJnTu8cydPBtGhupF1ULyVybW6jgxi7QkUHN4fy",
  "key29": "VPmfz2Wcqaz7hgfE1NGHAGhZd4GkRK45tmZTtGkD2rd8bGJNHkDruQGo7MtXBig1rCrMTwyceETN5sGYHYn4dRr",
  "key30": "5y9ubHYMY4ogGcqSygdaVGrfaCHaJbCPAmxMudvbwqRKLFWnqoHB1E6NmFjGt7x5niunWXnH4uoXK5ANkGD3JMUx",
  "key31": "41GxF2YMiqk3MAKEE71inrPHbY27ggQ6BeoCnMTEMzGDPbbqNg7YVxVB49NQmBsCiQbVkXpYNvDSfmNg27m8XVWj",
  "key32": "LF35S5RxxtC4uiX62ckGoPovGf1dNWV7uvf8Zesu8nwppdBH7nKeiHgkemvbscwePbcjsLEPNMW9Lt5NuG9be4X",
  "key33": "4C9yVnZXRTipQq1CZfA7JXjGcn2r9LBwQaxNarxvLRtBfh26k5w5KsFrKC9XdjyRuVV7gqme3Pmy7ujLA1emFEpm",
  "key34": "3bP69W7yQU3ttC6raJt1kwXeH7JpfAam6rvf1R6n7ouzUijqJdDd6EJSqQCouFkuUHSjjj6vd1FssTDKsJFi9G6R",
  "key35": "m4Lw8w8HiLja3jjLT9j4T9uZASpHoa7tGR5fYrKoQBBLpRP7atMEHMqfRjQuzgQkDYqyXKLxCcs3Cs1E6FvpbzZ",
  "key36": "3MY6zRV6djz14uqnQavk1uworZXuYVhVYawLvkYFy511f2HMEscbmf6nhmQPkbiUZpeTvPi2eHcF27uDMvyB7Mnb",
  "key37": "5fBrAuhMx6R3ak66vbGX4SMGfTSypthWvPGiGrzx2i2v2hfnpuvTNBBPGpkC7ohWhE2LqyY2kswbZaaLZs2KUkua",
  "key38": "214TJfjNxgxaNTKhJnYJbCm7jzyTDPznRj4eKJV6i2kEM2fVVf4xon6J8qiytqyExBrqMMJ7msk4UtgMsV8WVM4s",
  "key39": "7a5WA8TdfrbmnfAHYN9B349T8ipW642GwgzFRes8ksCeosJxK9VAvtTyC7uYUEcyTLVJgpZxnZA7x1mojQNnyAf",
  "key40": "5MnRvEeqy75Kj6rvwbhMvw2KgyF7Wna2FEchreLhtbrs6JpmynaBwR2nNj93985k8XKVu3ELEyeYZp2HecpcDHJg",
  "key41": "4FM47JEamFhxnWd5kKGLKDuUYejaftGYQGqc7tgSh146dtTtkJH8XmWLWsvuYNeJN41A1Mb7gcAsexNYiaihkYkv",
  "key42": "32aFpjZHgJa39VAXGK1EDnDp1m3TEy5dLEXi1oP54eShvcwQ7oB9Pb63yAULXjcr5GsATEemY315ZnjGNQX6iw8U",
  "key43": "5vNMDLoNEYKFXkp3b62bqczJy3SDcH4VChEYGz7xMzGzmvRbGp93Hbf3MzFwVrGq62AcAngZN3Afy54m9YnAK8yL"
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
