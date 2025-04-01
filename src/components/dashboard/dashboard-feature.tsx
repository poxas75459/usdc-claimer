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
    "2598C5pRbkYKWzzdkSeyAct6tioY8ed91MzeiBkvBjmDv5is5Dr2aigG7ra7ixdKPHwSfubzf18gsQeaioZf2vtB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36JWibSF1qRYAzdfkSdqGzSFhh16ZmHZX6qcD8G8fnwUaBcaNeVmGoYy1a1QZAtjsnw27byD62wePrGXrZAG7D2A",
  "key1": "3z4WAe9mk6LU8TLRWydkrpY5FxXXEaxEDxUsVJ4s1Ag6moeNBMBo3xT3uZtiJcNKA5h35N82cW8AhJ6TToswFDDe",
  "key2": "4puZwRrbQMDUvmk6Hi874QpeS7Tux4G3GCRCeKj3V6WcLZ7Sq94TQ2JKntMPGj6xVEHbQeWg7HjnCyB7DkVo2x9G",
  "key3": "2eTxqrmXu95LpmgZeRyJi6e5ok7NCKAaBVMkqNE8zVqMM794HMk3XUKqaw9ki1Q2USFPyqC3RDEd4qobcn6eqUW3",
  "key4": "2ndcf3LGMtU4tyaHGi74uMHo1b6bbvNaBXjEJxXeqprDMaqUif62kK4gERVji5R4dCKxrYKveM4UiRmswjFQPJjB",
  "key5": "41N2QvoFtdiKDxAQkjjYPFNQ7GarQ8eNgAPoqnDyJBKjPVBxHUCpucA1t8sgCUrVuK65LwW3m1hhgWiUH973cJ3U",
  "key6": "4uvpy6Zhs3SBNtUuLyXABBNnHXuj5agpbKreFqBEJNtLsAFkRVYPz3ygDxow81B1iWhBq5YyjZk2LF7vvwWRryuU",
  "key7": "47iEb6hTwGZ36g5zKFSmDRiwcUTWQPYffC9QQLZtRPeCCV85Rx7rjppuieAU471XbpwPDpwyHhc4BW1Xhc1PHaDX",
  "key8": "2TRfbimMjVXdX2Y8KEVZpJtAipCJj8H5cHdsLRMbXGQHdzCWjL3UDyMdMKgD7SawL19xsuPux9KrCypg9oWXGw3N",
  "key9": "3keZQ3ogo7CvbQg3n5muU8eQvED9xJ8g88QK5yoBJUetCmPCTQSki55smLxNsPDCUUY57emUvRYXB6dMEJ1kmTfp",
  "key10": "FPfQx5GvTid1QC6PDG1CN5G4x4g5mZkEjWp5bTfL8oEqsZsxGgLE32fhtR5GjDc27c4SrGbCt5fXQRQocxCgYsh",
  "key11": "4y4ZA9Ef5WiHuBdc5zU4XiwUeGgTyWEpP4SWwtibVVwMLEhqTUJnmuz9yyivRYTDVaztzn1EgPyp5PaTwjgHzR5R",
  "key12": "3hgctEyVgwWermh9F7W8ZzrS3SdvKYXLGABt24CDdwxia9FwFUi1WWZkDqa7CiToM3V4QKRrty4joqZaBc5jiSj5",
  "key13": "3za1JAb7YCc1aGirN7Ty9zYwsfQdKE142gXF5XUpsc8TLYcKbX7iKSZzfnadkD4xQsHhxRnGVqLQZjbfqrt2LW4d",
  "key14": "2ENopSj9YGj4Njjyw4YoFYrT9gpwcXbUBK8As2GRntRcA99kaYdAbczLRFFtowoCcsmLa7MM5yvv547fxKTMSUEk",
  "key15": "5o44hUw9W2PgYhbjZZi4kwHFdmMbxi6nphbTTpdoc9aNBBiK2FxEAXcWdncqLz6EfuwRatReMy3ni8wqULMKTrpv",
  "key16": "2vqeTZ3Nqwq8HRdwwhaJtfSmtUMAYQPfSShc3WCSq51X1M1ajfLyUfdH2qyLC8HDJmazjsLniu7PzQiFX66w3XYB",
  "key17": "iLVvWupGyiLv6uEwYjPMTNMiT9ozCcLB5cZDwjBFTveajndwthGuuSoeHfLM5fduhyPPKXEjw7F7WYG3FqWLA1r",
  "key18": "2G9W65pVtL9yKHNamzeijSn1BPyCePf3ySpYwC6Crd9RgkMqwxTjk8YBbhe53QM8gRU5D4rKJT8H5yamUfBHt1J7",
  "key19": "2VWzQqTHZmTLCzfd1pL5LdFouETbnY3gKU9VQ19dG4anz6KMdjZFScE44zKqNECFe44CdJ2wwZhR24y5VnoY1xja",
  "key20": "2AEYeuznF9cBzqY1KMV6kmovtrbMWurY1z4SthfvbBenwsyx8BafzUqmKgJByKAxppSfqL6yxS7BM9iNoZCVFqPb",
  "key21": "3X8FWMdu3KV25Bwz9kN2BrtcWCQzR7jKWv7Bj5HnKFaDXxN39h5dhLnAQ1d4jqfyKZFcstFjmsD2f3CcyYAbgBTE",
  "key22": "2PSUwNp5MmoFwKNn6qyS4Hsbx93D6w8S3hrBLyV4RAz35bxGJ3T868iZt8d3m3S9XNQHwBssWqUef5WCbDzfvCjy",
  "key23": "55Mr6SqPLNWUsVk6zXj7AejXWUPiWc5thfLAJecHA198DM9KsFEMR3BaETAotX45Lq1K2nKyfaZyFqNvLxwSPGDL",
  "key24": "2SKtQTnm7fxcc6R731dAVUnbjFPk6TqbBgd69dixn1DJw36HV36BoPNpSKk3kiGwCTRJehZU3LLyfJXSmZPRT2pt",
  "key25": "2J5AAkrLSJtUNJQSF6wPxd7NhLvrjGP4YmMnLq6KoiB7j1ELdRtHEh8ZUQBA9DQ61HmPuPtqdiwrrcBm1kPY9ohm",
  "key26": "28jogXNWXyaBhBGz6McTbtZrS5N4erMgxe1h66miJw2Y7GsqHHtJEsZuvMtsZd8RchJNPEJEhbAkhNJca7BhuFKP",
  "key27": "2BjxPCfPKxKKT9cHq4kogPhVE65wY7QYy1ZsRdbAE5XXGmEJ9vzbVBzSU3HgSPRYZCFGbQj9pau9ZPGMa8HV4RwE",
  "key28": "4wdyqAzrqRJ2kGyxv9DwcUXweS7nuP4fiF22ndeVqBBU1pAnMeuJ55aebyr4VALhZnrxoNUr8MJRotdh8asVGLA",
  "key29": "4yf9wUGUsf6fVKucaGxqFv2pQHgnAZJZaT1CAWF1P5Lukdw7rp7AVYUSoVa6ZFDWrWoFKAeS5wLSXiA4PYgxuLpB",
  "key30": "2nUTe5imQka7rYREQ92w6P6QdfGQa2QJVUjHfXhuYE7A37BPAZvJypDtr4Tn9PWDmrfcRz6kBEE6SEQFBYhQixZH",
  "key31": "ibYH3KRp8KXFEJ5fbkUiu34a1fYLyxUcbn2mn97orLj6H91X4ZwQjDzqEV5Acnohq8t9miNCUnNJv4cqgzcrv9c",
  "key32": "juwjYttH529ny7pEAv2t4PQPd1heWxM3Qgds49w89wqT7iLh1GsTvd7MRmaEjpPXbeDkJFE5pGfU82PZfQjgt6W",
  "key33": "isAtMskoNHGthG61b9UtRroc5cQXrUT6nduM9SXCrKgJYEtk9QuaEN1RGxp9jp34kkaXGa7tvmSb5JZ5Q7PjsnR",
  "key34": "2CrQSiMD1StNLgaW1PVjmEZ53HmzNeuagvj9rYkmHNSF1KFk9yHioMuEJY4PB8q8bL9Vfw8AaodjVcM5pnvQbkqC",
  "key35": "ghZvuuSnJymiQVBpnSgg81diag6Xxf6vx7hrk2uisNiGG2NqpmcBxKXBcWak4Y6JcqN7PT6Zeym3MHEhP8guywN",
  "key36": "4RmQykxfuYBmC8VTRcLEYWzFzENxxFtdwBZskBhKPdnP8u7CrcXtnd8ACoJay8E7zrHVRAWDdi8Kw8xyeFUneYdm",
  "key37": "55Lve2AtejtwnXcjVtco1PNfRTS6DzQygV7NPpC2UytndEDWmjkHypyJKsL4Fv2EMGNbPwnB5X6FKGgRTRr7TLwa",
  "key38": "WTBrdhzKStKRk8BoW2SwqpV9itQgVqqBmVU7tAbXEEcxveyFJ1ejjGB78Ud7Zxy8qRMiNbhu2pzT2hNTkRf5LkA",
  "key39": "2FoCSaGdHpj7tXAuvK2Vn8A6UZLfjmoKnGQgn7X5oYNnkU7VhEScSD3zZ1ENd9QEYjHyA1NhakWnjAgKhvFyexoH",
  "key40": "5ofDWEsomfXg4Ud2THXaKBhfzHtHiHZcGYYMp1oHd5yHj4PLU1Ym3YsAkD3kwoMCfkd6fVMNkP6oL1VtvjDSkmja",
  "key41": "4xtk9R2rC211GJdm7oaHfHxqDTv7pU1KuuSHMr2NxZxKSLmKM3Ym4HrnVz7e7rjJpW3KesV62dygTiH2zTnhv9Y2",
  "key42": "3aSd2fnbByuFMH7kdUXyXiw7DqPw7eo2jJjxecAmrJYf9sxPwYpPnCu81isjWXCCTbc8Q5guFfNUUhJJ8DUVMdMD"
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
