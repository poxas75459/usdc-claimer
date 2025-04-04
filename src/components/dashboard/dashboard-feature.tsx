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
    "2WgwuXycde4TpPgdm63Uwhw6vHxHvjfjAzj7bQ2BjAd52Wbe1FxegvSiHc4FdMn8SdVJS374JQFYB59czPRSduFf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4at4Y4jGwM7tEJfMQ9GJxPY6Kh2FTdq6RNUqGi91qFcWWvyXzU4zZWoZE2EVQxMzQqgwks9YAKFZrDnvMAXTmu1J",
  "key1": "5xT1RxEko7VHgVovz9f662V4R351StGkysrcJ4fPnsksVFJF62aC9uxajj3Gp3oxmwdvwLdHJtHVR7fUiS5y2swd",
  "key2": "5eTxFZMR3xVcnVU2U1NbnmtVDWXi7hZ1pM7KvPyHMpcsWfJhmRVXonns1ZBAsPo3s6CeqdEhsHZpz5DrkQK26wVR",
  "key3": "2TEfwddzDPmVQmeTm9fWhjfAUjSa4q2PWxBoJPikpWnUKvK8ngXwvvGSD6surpMuwbwnSGwC4nnK4qjCsGasCG3c",
  "key4": "4GUZshkzQcSEbWihSc1WEctURnvr7rYaWaFoFR9v23yY4p962RK3ns4fBLkqzswoo9jqA4J2Rbz3AYL2meYkhuxb",
  "key5": "4y793bHDtFwv41Z1dprjuw3mB44w1qQNwrB4NwxY4KAC5XiBdNGjUo9eTQoCyCs7SP6wVZSazoNS1KnJR437ctaV",
  "key6": "5A9AxSQDX9q3rJ2us62yvptdE5V3cDpcSREtdN5q96ZRU73x3Mo6Xn2jpyQpzYvfDEHxC4SsP49ioxZQS38hSSfm",
  "key7": "3kNHHQPb1Tow3pVEc7ydGeAAGBoG6iMERtoLTUiwUy55dpE1hNE5PPdbxwRPBKJfzxxHxMNu22X2wAwwf8s7oDwx",
  "key8": "3Pd19vczykd5nGnVJWo2bwwk6UN4XvttSg91JcYgQyiTvbShtyhd4KEiN1j2QtSt2Xk68w2CxVVswVDZZW5kQX3x",
  "key9": "3DNtxo6nT18gerZqZ9rrDbXNPRMYXeSGdv1gg5o5bjMYFbNHUaFJaaTMizBpNrEN7sSgGamsq5PvvvT3wcKQZywX",
  "key10": "3UHY8hVA3ZoUXT45MsptqMRxq1DHdNPGTtugZdkXgvbwd6Dgu4oEgcKTL2c78EDMDuWwY515bNntoJd36ozAKoS",
  "key11": "5YMGGrpsyVEJ5wcegX6adwh3FtGRn9GVtAuFymMxWrzbSbVncHYCHgPPyEGKXNDj6EbzrcGmMyFNmDXKP4Ux9F6G",
  "key12": "4pDFfTrUN31Mkm2bxspWJ6obdjPGGR6k4P16V6poNdJ6fsDMnmMsv4Y5oGL8dYHLrQ9ApZwXQJ9adykNAjWde2rd",
  "key13": "Hi7DEgKHoNRSwwt4DZ37M1iX9H3JgUcKK37AgngawbxJgRsz1nZy6Yks3VmyXXGpwsoUtQkYgRgh3hsAuKLhWha",
  "key14": "376a21m7a4ExunJ8tJbgNiPXw5RoyGuxiiuVe4XTGsdeaDsg8NswcVccHdXcUWibSGk6SWs5iB4vrZe4h8BiKmb5",
  "key15": "2pD5YTSsNqXnHiZqMMtaJbazuxdmrKh76FCgs7LLjBY6hjeSFok9dZ1z1F4szcmTNQB6zXykE8CH8VN83PvfmNcj",
  "key16": "62uRikaHkwag1tttE8ahJS9APt7t1uPjmk7k5napCjnc8KVz1pNjBTrxj8Z9DU766JYQoA8WdjNZA4yz51yAyqk5",
  "key17": "e5s1QMktKPBoUQ9bXeeWS6mveaztX8A3vhb5vxr74QJMDQfvhsxnY1LEccPorQze73bdsHGstgnigFnyFWQfqgo",
  "key18": "35DgJ4Z4JFo4Jokt4DK6bXEgs9yfxvKfGrCmKZFWfb1xgduehxCxuwF6kq4Rx4x2EKe3gn9Lttu58hEFNzGTG3b1",
  "key19": "3DRVqRs6xXkaGLB45JTpPfhacHjgLYKp67j9UVzFcUUh3ucWjg4VUDGUZENnn5DnFSLiaEc4ZvLUdErQLTWmN14B",
  "key20": "2emmBurtCaxzu4PDovS1UHsWX9geXuwoRA69jye8aSaj3b9NM3dFt5s7bocQttyqwDTteH1MpxsypSaUHCuJ5oNe",
  "key21": "5oyo6KQ5snf6uURPHi5mVn8ZH78uk6gvv1cZmxbv8js48qWZobQLpQVGESUqb9Jay2H5o1o7VwYE54WAAD5AUFmb",
  "key22": "5dr56kQJGrJBwmfGD2LXZh44vy6NryhmvdZ589rAgrB3S36TE2djhQb8cAt9KNMSYkqNFofphNL96wX2CWY8Fms6",
  "key23": "4qBzRGyHSAnEF1Sgmy9J6msMZSzKJsRcvVDFUYLCPaDYPqHeCUyVccrritwwsjan7V1gmJBtD4HtP7BxdWGixDqD",
  "key24": "5EmXuvCJU1xDMyi7PYAXMZLqFWgU4c2MbhAVFVMaUNViY6eduhGeCDx3JfKq78T1vr1amvn1o6tUGtpmq8dyYnAQ",
  "key25": "5Jpj5jCVu7cPuPiSDvgBjuiU53Ky48Jo4iBVhTqsN3mG42sTwPrGnT6iSdxJZ1NoGVPwvsYWcFhhQD9f8DraAJhq",
  "key26": "3yPorqYHVPQi7Tm7jHDqqcnziD28jVsFPMBpQymKtymbPEXbAgMoZyNVXRRRoATWhEUUiDqaaJCuE4H43RJ2xKUK",
  "key27": "aUNjDQnkaSyLYFhZRufeV24rwXxAj4NDG39YDJxX6krnFvK6jeD78bB7Lyn7C1YPcu9GwgUtgZEcYyBgUoFvGLq",
  "key28": "4PhQa5yFhrKycySMkeSavahzDrS71Egc1URutCXWj5sucfus4KVrwSdQ9wGcTxg73Dgss1m3QEJfdBEUoyPQQdXK",
  "key29": "3XetdMZesWBXXa1UWP4pRDPiHKU8UgmpQUtuFCmsxFaZLRUiAA77Z2jicHQ7vWWp5Qc6Sugva5zFTk9QjvRQXKNK",
  "key30": "NBrXaSS8w2E438NFG4F8fzjVMMpapZJTc7GPLJSW7fNaP3mLF1SaQCekrPwAPUNH19R6YVGsXEeizwoRtsyum59",
  "key31": "3w5baLFDiyhHVaxPXVTs17Lmp7HePqS5TDzmMT8mE1kj32a8eQqBX2DrEAKR5meMhEY3xT137rH1dTx2bRVYSqM2",
  "key32": "4LywqYLaU7bvmRiBv3k4DY1CHKbyHxJBQFiu36sDc4pTYgNhbcgPWqjG1GZ9t24a5q83pF8hSkfuUGqdGZe6hKUo",
  "key33": "5Bf5WvdpzV9gY2X4BXr7kPGKk83BJK9bZeZTTXiXzk15DuqV3ygLgBtmpEHNU8iwdJuiC3pdYWpLkaJLcqqZmj6k",
  "key34": "28fm5MDC3zAiHwwsAtDUydm3bEdxeUy5q5E57aDu7m2Ai2TbsFWv94TKTdyRnvBen1GmU8961TSeVoUD5s1j9ZoZ",
  "key35": "4UN3bQYpPdZ5YZrnB5F5uQnTtsgC5fF99juSPcKu2nJ7EhUrKWr2EtzjBZ2fgobYiiT8DypF69AnGLpbsdLYxKJS",
  "key36": "4j3ygoBcW7tWVEFNeLZHJ4mf12JsdC1APtffHcswDTnzaxTUMUCCFqG37FHgenGa4XU1cwpCe5jbG74w6irBkdZG",
  "key37": "2Qcyg7qDUiJqJTUEATkhanySfQGeoaB4jG7hra4PTkuA7ZUNB8PCLndUzwxVLW9w6fdnRtwH3diPEXJfq3ia6Rxd",
  "key38": "4YTNEuHX7xKP7n7XTc3xV1E117B6dxPRCGcvnsMVyyCynyVfNvMk7L1sjdioreZYSPqH3GeVE3DjHSsngytD7Gt5",
  "key39": "CLe24EoeJa4SoZRYzwwDkETx7T3nZnTH56yNnPk8LKjrGpwaBiu8ZTm2GHTaVe4WPcbGGJGH8QcCnauqbgGYM51",
  "key40": "5sCjp8eHcBj6mgvvPz4bQCxc7WyAUwH3hsLLUCTkrRc2ZiKcPuPBuu64opKHoCpEo1ZQZmJoURVZjSj1BkWm5E9h",
  "key41": "5piqYv1WDNqrXtE751xfgLGQU2YTo3Spf4L83A6ALJm6JdowMPobHLEoCT3YJkniDRQsrGG27Yyoznp6NYTgghyC",
  "key42": "4KfNCsf5Qa93adUcovhgRmbRjFgeUpSMSZaVVwQzR3XS6gb2JYtnR7NPKiVJ4VQYekzQunQ6FaRXdg1WKDUBiAvZ",
  "key43": "5ejdm4e3inakfxn1MFZGL9y6wbd5tNwuzBQL3xTAFV6CBdvv84nx3bEF5wwcwSyzeAtXBVPgarW5fKnjTL4Ks1xb",
  "key44": "3tdjezxVGCzVzt7idNWL24j7AAMEMc9keCcJ8cpQsx8ZszyLGpgyGS7YAjKdL962bK25vAiKHoY8JQHDZnH5i81o"
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
