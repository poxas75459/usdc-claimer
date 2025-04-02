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
    "4awCkKCLYEupk8NsYBrn1S8RA4Q3eZ1UqKSiETxYWxL9pK4XGUcANcDCDR14h9DmkErydFaDLh61G3cj6NBoquL8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26RAtQANVUAxKfWPUvkxRWmLd2teZxPU9WwtRCcC7bMP95CQwWg45XA51gdXQyop9shbu3sWXEGjEQoHxBugvHDn",
  "key1": "kSDn8sNGCChQLNwZgBd5fdUkbKoERbLW8z5MjiG4jcGFSRFyD9Vam6UwJ2Jb7RLJWkz8eLC55jMSVAyWQUJrf7c",
  "key2": "5owhZ67QFcEYMGPZPf3nwGgTKfLJ7AtPHJs9Dhjm31xjLroJhVDvMRCyUyJ6FxjKz3XWerCqeoGNRmEDagpkWMov",
  "key3": "4u6Ejkv92956Z65x44UQ7GSPXXB6Qa2QjJdwRMCM3aMucC5eWZk3TY4FqUm5wWEAXE7aPL79htcWR3TjKhk9xMFC",
  "key4": "5am4Vwf7JGRSQFURddp38evkoi1S5NBhpcyyxS1CeQqqsRmiDmQpkbEHUiHZRju6ahEZodTcuzigEswduTbw3Rm4",
  "key5": "2LHjEpNuuaNzJxMz8U5mBRw5TCkzreRphN9SRrq2q7KqwAcX8khAJvdUsurPj47rkaqduAEPKRLGvGyFGmkaTSXL",
  "key6": "5449wdQhwheWw3EH5pbMdqeSvmnEgjfP2HZW1xDq6EYZsTJv4UH7B1a8toPCv7KitC6kzb4gEK6T7xESDsWYQNtm",
  "key7": "2sy1pXEyPqj7MNLog2BCSiGHepnz5xDv5h77bsPft3jx8KfzC5vuq1RptwxPWSDnnuXoHjLXVV5DgFHNxP4KaXhg",
  "key8": "8M7JzB4ewj7jqwigrBv2iVCgUotUEhJ7ZqnWNSXdLEmSD4UjRdx2A6VFk4cG7NXTszu4kbRiBqfKsnLyNeiKZwS",
  "key9": "5k2s5sFyXJYeLZWrgLFv4kS9R7NtwjZi7ZZuwcPBAzZWfJfHXHBh83iy2a9aGqnwQZxmvvDguiaWgUSQYhrBQYTk",
  "key10": "63Bg6x4ztSjgNMPqzUPX2Jg4GavYtim49gCAPBhyPnPu5fujLXqVpFaqTEM3W6eNHShugqmU7kHEJVKD4dPPhXyY",
  "key11": "4ANnqHVxU69QLHh9tiPrDrT9qdys16L3x1gs2o7MMaiSdiqdvq9tT4A22DWXtHV8HWVFwA5uDf6rFTSyUGBuLChS",
  "key12": "5azuydAjBi6jAaodwo5VVQpTQukqArXFgPCaGgdniDupwhTcqV4YWpAk8dKoYmpWqrFLHsX4LT32q3iufdYAEBff",
  "key13": "51518njoB75dmuJ8fqtaNq4rpZNPXDCM787pCatU52eBjgBjGtDBFX9X4KNSxsrQzAP8urTHDTomjk6nfj7SVHu3",
  "key14": "ogizh8Vnzv42SvX1FTYwwKqSZYwTPaw2nGf1RjBj9GNhAVAnRzwS5ZnFcdjfBX47ELew6hKoRxZ9umxE6e2TKA4",
  "key15": "3pHfjiZrgekb7Ut7XuV4kEVr3ycJmKnKJjTNAYmeQPBuvqRho2pDdgZVfc8HeZCgSvRNDf7GNdKV55tpZ8quWDEM",
  "key16": "2Jt4FUWKdb4GgFH2xEUjX62MnM1Ts2t8JoYj5Lvm95sjijxf4W8aAsigSYTD7C7PtURH2jNyUZmVoyh6dG2SGXXz",
  "key17": "5BBZYrcGJJkhQBgAu16tBxxcPtxdcMhzf8Esq8xK69WUpGtJLAZLNWeJH8aZdX89Lf9AbuvsddjoZTe12ZHUgNwh",
  "key18": "57fahh6CjezpsUfdMW49ex7cVMpCeBkMVGdGaLvTCZdRQvd8sZ5hwrdMFMZ8xE83UgYjXN1Ua2ZmEfsP81oZsptV",
  "key19": "3MgiSk9zmFHqxNMATCGafWwMk4GRajcNNavak5T4phFNBVmRrutiRzESpGZkCnPDQEnebHMzas3etuneXYECWLYG",
  "key20": "5CE6CFVxgBSyMJvE39PAL5qVVYUGJ3okaWtHSTkFCD2iKGDj5eY1cdjfuWqPRqJ8EjpvJheJEgKczHMTiciNdgke",
  "key21": "44CVKygbpQtseMcL5deSR228uu6FPUf7jEhWFdNXZyMwURAaP4etajc1xuagVdz1KKNJHHJprDUwLwcKVgitySf3",
  "key22": "yJtPMBySSADeACkfGHaye1UDYZaLb9woJCVcfm6fkhDdKmCkgJGZQB369EqHbzQTZPknfbKcQJYiQzydfYYgHn8",
  "key23": "4BmZXiY9SeSd7wtQ4sQDk7dR7SiJyjGAgvwea5ZS8i7DjnCnXP2TLZFokh4XZYFfpfvyp5wVic5xX5pmSKG4CFoL",
  "key24": "576M8nhhSeNmfRVV6LMyf4c54o3QbwEEN7AcsxQdMF3vmZuYxhE6UArhZdJwyCwr5kWuhYkWQg7PmhzYj5CHvaov",
  "key25": "f1Ad8KiGfm4tWvpNM7EaSgcot9mVcf46WZigryALVYyRVqt7d1RzKtpCahUAV1QcDekkRi13Zgy47DGTd3KhtuE",
  "key26": "54shu9zsdaJ8NUyN2BcNYhJRUs3CMjdbG7V7SUVR757eE27v3ZzzCLqfva685A3z1dVTnjmgBYLhMNcXZqWS83NV",
  "key27": "2cjPJaaSEU3w8LPr1PCmMNEPj9QhRWWwmcahiSycKxCLV9dg9WQiVVKBHHZ5Q9xG7Q52wrNcL6F1wEqVWymNMscW",
  "key28": "4dcdK2ne2mz9FbrmGAZVbvgU856CBRPV9krShCvJmHx8QHnLKaAnkiYcoSsWWyZuaJejtuPqadxMSeCcFXPYwK93",
  "key29": "4yfJ7UYPQzdfHw8GcbnwzEA6tuN1w2ysWXWagUJnbYwfxubbr4Z839FdoPBtokiHyuZFZhPVYyevMbjAE9pUgrd6",
  "key30": "5ggbowxhWWnxNAVs7yYvySZTHCPxn6tSRDygoFQ8dp9YQq9UBeDWQMZFXQLA2YKjb94xK29qhJGHE5eeo7oAv9AK",
  "key31": "bHPDpEXbyuWAkJAN3EtjswjjQGNmuLNBHefhnrWVb4CSxaqfNw1vgLMhQBdq7q452bBvgDantQQiC3cmsPsUFcX",
  "key32": "4pf5haSnBtA3EzjnhqhorX3hhY8sEMf8oUcKwg7NXp3D4ZBZrwuWJpd2WGj3oqFzH2jZjkUFLpES5ZdFZHobVbFJ",
  "key33": "3YABcuY4tDTCpMjQ7hYaENsxuxgtDyL5zx7kBgQon4NLx4pXBWpV8PM6QVhEMUTcQMazQPuii49aYBYcovDXt2Ce",
  "key34": "3LjpFQsSokqc6SzN4Pm9yfd6MLGZ78Coccyw26oAPNXvHAt4zsU6e2qmNPgXV6eH8DNdSttJxXZeUPubgSSwLsPZ",
  "key35": "Rat5uBshc42LzGjKMrXBC1TBx6bK7xMSfz8mvE9WUBhY7cd5dZ3u2kW6N3PqYM1RrEwQXtfjgBcgUiHf29gAjqW",
  "key36": "2EEZDjrffAv5s1JoJCBTkXozQYLMnqmQiop416qQY2GLTwG4hcAYKyVweeVwbaezZ95Dmy8Ev9uXzcBwHZsnyhvC",
  "key37": "5jrH14CX5BCPWKJuDc8ZzVa5YKzYM6iB6ReChpkH6LpzerZC2CubBYoPrSzuVng6DoauVd1pJQt1WmrFsSeiiBnv",
  "key38": "3aQpAfm5FvGcouYY1zVGRCjcVFMsKYa1zYH2uGHVuYrqWMPnzdQKPmioZjbbMMDL8yWT9pegNRM2AoxW6FEsaXNC",
  "key39": "jDgLCocCYQX24TApZo6eKvASSw8FoEp8PrV7ZGfBnhsppwv677QMvycPUVSuF2izMKdfaSERHmGup6bPQMRpbKc",
  "key40": "54FYHYHma3cwoUJT3TMwuzb6FEyg49nhHVVtuNbAwKnpVUWNYAwMi1moHuH6JU67j49Zx6cxwccgtgWTerm37sBU",
  "key41": "4YbwgZ9eUgsLSCxPHorHp1HYv3aNrhfFaxPUh4yJpkJSZn7mpznNDMSDkwpzrzRDgVjRebq4Bn7DTLCdoSmghDhr",
  "key42": "3wBJhyQGLjGyqpnUzndocEMZS4t5Q7NEq5HD5KAwpaWM95ysgt2S8dfodTU2QKLrWxvVEh94NPh5Csv6CPmTFeSa",
  "key43": "Y9SfJ6fvuget2jC8j5cNVnXpE8QnBxt7bZiiyxUQ54qdWZN4t73PFyjgJDwxppCbJ6ATCm3YBpzLPji2tQdPAy2",
  "key44": "3aLNSH3vh88NU8y4V6ExNEojKWFckqqe5S3SS2oJqPxwj6r15yR79gAotXSeqsMM1x2aAeLfU4CyY6jdArfri6Z2",
  "key45": "4dQ2bGqbEsTsE1FYPie8RpMeaQzF9sPtxBw3vnpmxvPVsGGYXYktzkZ6PQtjZBKJxXh5WTWuPjEGW6sSwZudpeas",
  "key46": "58x2QcT5a4Sve8ZsHrN5AoPk3hEj6B6wwDg9SAidPZdfp7za7gddWVPMSMkHH89uEh5Y6oxW6DjXFQvrV5qGjXaq",
  "key47": "2qxhQy14o4CeuS6nsCbtD4AKssUaocaZkLgFU7hTW2yjdAG9QwfR9h6SfTA5rRyt33mKG8oUrk6Z9syUj82KFuao",
  "key48": "3ee9DyWBoENta5CxENo9AKdWMatD2h1VrsRmWfwwq694CbRBUETghycBuNx6YVfbUHkcC8QJCbMh6Wa42L54B6WP"
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
