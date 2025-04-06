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
    "3d1xidaV374knm5W7mB9fwzE6q7ruGwSrwjurDHbHCgem2Sp44zftzBkY6BvCHqSQ8c2SPFLLXXnYTjCDgDYcpq3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YfJxpGRpotwx8NczD62N7BWoDfwyhFCmbWzd63RsySHfubr9BE29H238QA59th2MT6b6cx3wtKth4FK8sGRvCNi",
  "key1": "3evy4VXxosXbvhLunH48tK1npTtsh5uvxs7SBiE4nHGh7v6qjRHEEiXXficUNTW3uUSQwyKYytTTautpGgrkYW3s",
  "key2": "3hMMWFjRRrY32S2U1MQzBQ8FjWa7gWf5fhdkXx6tuRFcYCPEwpfyh5r4KEwNiWnUNkSVKxrC3ra4ewKQpKoZ4i2h",
  "key3": "5LaeXcahNYd6GU5NDZ6XwZyhwsVz3DFVEjBseQwQRVDySiUMVhn5z2UMEBkWPz77wzL5yBoFwM4VMMGrk6XWZn8S",
  "key4": "2C2JnLxCoLTgUr3tifbr3QqhRN5qQoQLzCmp9iB1Wc3DBqzRiNiixwpLxKQfGAFDtSRCxaURX2zaXiVrJRNEkMQN",
  "key5": "F4xWz73SqeTpwhy29jBZDKW9LVfTWMSjGCPquCcG4VGdYtBML8enPxgEoG8xJFGVH4Pa26tJpwCP1isqcuoxRYy",
  "key6": "4KoMBcRQxFa7BwzwmAhwiXCg7yQP3HEJYXNsCurevkrdZ4szrLaWoxQnr4fKihU5YfkH2wgWKuB598VA6uzG8eMZ",
  "key7": "W1eGyxCi4AJ5EGeJUcZijiB2LmZpoCLYyCAzaPgUVGCgnuxqtF3ZqMZtjWYrsVcJxP2nweiMutaQxvNXb6UYKEQ",
  "key8": "5aYAnFSu84QL4CiSrpHFuBdxJbdsJbGg3shXjwN5tK4GSaMHmv4YxS7pVsQa8TCGB4q76AuoW9bxn94SDrjPk6Zz",
  "key9": "5CozRDLX6NTtBWPe7SNWgeNSBfMTfCPW6XKBxkokcXgssBjQ6jbCpSHF1cxQBNvdpYHPqThwRTxj5bXaxYarNgMn",
  "key10": "5NHgobEN8UN2ts8tsYAb52w3wL8UpHju2TBZaDSjoddDhKH1Ncn1USgiP1WqpVepzgy4eK8ADLFsswKS8UwPuj1k",
  "key11": "2xkSULhey4otGAr2ZvfpQvAh1zq76EAK1L49wW5kwRC4crdRNP8MFLfo9Z4ANSpu37ApG6P8YrNzqMBoVgg3UGYZ",
  "key12": "2mBCb7V6Hb9WbjEoM2Cf7roHwUgodWpkmwVaNGiQLvqu2ANRXedCeJkMHUAqifiqqqUwWAaQRu8yAdvdiXQMYow7",
  "key13": "5K1E83AB9isvEtbydziYEBgTQ6hbNUSmFgBXp7dVPrHqHJuMKxESiDj792VH4cfed73ux3fGBC2v4cQc1bKTTaMU",
  "key14": "56dZHdGyTHSNB1LWjZ9FiFJo5fivLfy5J3JZGBAk73MEwXV6ikx8MYBkdqmtejxns9mnRLSnKwyYMVgBWQu5uG6f",
  "key15": "4f3d1AVZkFTWyAN1e1xAKnTJjBGM9JLpa1DvTMAnhZ4pBpVBwmgqmyaLAn92mBF6mYT8X6zCFxeyWn2pXz1Kv9cs",
  "key16": "bwnbeTCxSxRkP9HjfkSkm181oZvL1m61ZQpzsTf3GbZAtjnWeDUAHEEu5rDvQKjMN7SG6FTQdudBmgvUAhuZ6x9",
  "key17": "4z1sB7PQe96S4fBaQoDdKJoJFmvkHUaMCJpSpAYg9zPesAxVG6xdyGp5dF7jEJUgSpwSp9UgSYdnwmwzPXpA9BDb",
  "key18": "3gYMvsJPvJGpiqWTJacAM6ewLpHEmE66pAX5nr4ng1aA2LgT79aE4utCexMRZSTDV3QJg81BjeKsoXaprEsqrsBG",
  "key19": "3M5GVbGkRMQrNgRXEHfMS3pyLkx5Zggd14sP4C3dpgFx7xyT8smv2RdhDKQ6gaYiZYYUvUAiRLibQxn57F8pLvVp",
  "key20": "3Bx1dUqFW38UtZLrXPWjNUTyRLoHc7uaP3oqLdZSo3EaLbPiDMcsXA7QTQtYc91zvJc4GbRZA7k6Ds6nGFauXuij",
  "key21": "4Bobu2a7Pazqzv66iSGcD8SpSrQABUF7tdhbtwQyBN15wQwK5w8uSAx6m3NPUAHNYae77rdrAPwwwhT9bLsqmGBJ",
  "key22": "23jwucDujNCdbKBc5fmWw3E3qSauy3qo7Bc9V8bDjcDTckJbyiswwCSPSREbguQHRKu3rj3PfcYebJpWmoXbdb9Q",
  "key23": "2tf1rxrv6DsdemjfMRh1awnYR7r2xmdUhKjTBRAjT5wWzNiCRxZGknpkpWLzQPGxV7LEofLoLSKmbTWbBTrawaM2",
  "key24": "5PBPbsAnnP1H2S5uUqZfmPaqsWELiPGzqv2fvTTEfDjZsmrER3BnwXHgRgpYZ3t9rv8p3bVr185Cc4B3mihuMoVZ",
  "key25": "3BLY9Q6nDW6bCQ6RzqFN2mJpUsWs1vSMN7rJhEHnHZpjVcripYSv5tTEvYwp7Wapg35t5sNNmYu1kKMaV67iqEmq",
  "key26": "CLijgAs3YivsRsHPJdKcUxaZzvKPx6LZ6Sd8UcGor3QY6GWLQq2zEDG1HXdtHwQuFKehnrWLmwbthxv4W8RyZNs",
  "key27": "57vtSUeqQAnrJHvdRQyE8yQpwT5F54XQ2udW8vaAp6PnDsEgj2Ma3BaazHeL1PjfMo2aRwbSAPj9G5i5WUeaiBQV",
  "key28": "4qauqmea8GQUWHn2sHPZFXBbsQCNyKQBsi5vZM1XUD1EVj1CNsaabfuXq4YPmfDkUeQTh919XBedZLh2bgtz4JxB",
  "key29": "2M8jcsYw8E6c8DzA8Lc88zfDRpuKMnGBNTgDkKcXUdu7KCqu9PvazK2zJrmR6YBeLxQ2Qhyt4M3WqxMWLedULgU3",
  "key30": "2A8PUgB1xXZn7CLf7cpKZVqdFpvtEc4UsJR7AzQcfLmtLiZZHs7q5mhDEEaTi2CxoEiKSrboMWtnV8G8mrQeAJqH",
  "key31": "2BvFk1h5XB9oNi1rQFKbRDYLwf72YJnCN5ARTcn289CGjbBJsMqeq2CH1pE7yWFmwmS2rrudPczMwyfhH4hzoKPe",
  "key32": "28rfgWMEstKsQisapKBWgXGS9f2TVFDZ5uNCvo3w77be8pcRQFaff9VASBadrSs4UkqUKKPyfig9TvJfDZnFtnuc",
  "key33": "4H66PwsKBfU7wvXvEd14FmfXGC2Vv5Nyo3REcwzA9F6cZfkvWw2WyVMbaEyMohARvQV7QDJ4nVMPRMrxRAuCKKbw",
  "key34": "xDeZZVDbq3WpdndTonqSytE593UJrnahnvDozQ6PmA6WDnXqFxnQ3HmS1CTY6QwJCU4DmAa1FrebkgeNRdTivns",
  "key35": "H5zBxbgCZmx6iVvnWLJtQJaC3zPrskkp9e4zdgcTY7sALSrGtk4NQQTYoaT6v4KUaDUniA79mTQPWKjvsgbAqdE",
  "key36": "2N1QENoy8ah4MfGEWjhxEWw5FzHaRgnaiXxUYCrmN2yh9gMxbh6QBAteNi4PMUq2WDL25hJpz3VfCVaJMzPMCvEf",
  "key37": "Tw5UKqgRgkDnX71CMHZYe8SFPd9LfmhS5JvWdUAF9Ch7ZbbyJsdLL5qWjmxeZFfa268dEKcQQDApEEU6yKyFWbA",
  "key38": "53brLC54Gc8qaeWPHxvjxkej2enkbffyMsRJet9f5YxwqdqVErcxWicw1VjCurW6CPyD24cCHPJhWtSjCB7FvbAh",
  "key39": "2CXpfKtwb3ngCggHqyWgTpa5MgRBcCDX7Jg9TVuQYAqzuSKrw7hoAotDb77uj8RsMmzXRxCyTjGowpuDrcWFKqve"
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
