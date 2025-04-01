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
    "aBy53UxNWMEgeRDDahLW24LWb8e6jJspKAv6z1pd7AYQd6V42yLatJ9rwv31qoKErA5MABhir7v7T8gTDWMzL8R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Z8HJADTBbexWdWJ7iGRNufmCvx8ccNY915vxJ93R6kwHVJZC3n4qV3pbjSFNVeXf2y3fWmDCVYSiqoBhHMJRGZo",
  "key1": "572DgU9sDB3i3KxcgDSyLWP4qMRKjWUN2XzkpRREuUYpN5uNTV76cKwuQZPdstUhbtShvPGGCBKG1eAUqupxkRrA",
  "key2": "4du5vBftko1navHGVbSRhApAhZ3RZbGZiaRn1365JHq4zKXRzeKHUSsJUw8YVKZ1FDGvnUGCxq9bHYyh1ZDMYusa",
  "key3": "2vuZXsPDWqxL34kkCgQ4DUgW8b6kgCfXmVmUryhg56fqtiVFEzBBKZD6NXnYoiQ5ezvCVvvmeWSEdXgWzApKiL17",
  "key4": "3SGpspr98QSkuPXCMcm4k6tCxyM71f8xNwvjZ36fLPBpyM668Q5gc7gghRHptZupD9g6Wg6scoA7L81YVDU55Yzr",
  "key5": "4GzGM7jp4wzrxnTpvQEVVzxFVZyhQrReTRrts4jMAewdXRf4q5PbjG1pjufPaXRmRZCT1iA9hKyegFdDFm8dBjnd",
  "key6": "4EmpRLnqsoo25khs3kYcgVEKVEaGEiwmcpF4TWDpwjYyxSm6roihhSmL5EKY1CAyKiF4FmUxjkTJ29nPUutUk7sP",
  "key7": "2TggqXZBhx3eaXPBEy6X5TCGMFRax35sSSL5uHRBszRbpkeCrip3eoEyE2VJPcNAxoQwyGmhHMKXLZ2CBnKse5GH",
  "key8": "4g9sHU68qcxbqDkmSLawNE6SzgMeAqnvKvBiErgWWtXTLhRhGc2qMHnHhBXNiNsKosBhSH8ypwd1ZamFc9Vcfb6t",
  "key9": "24LaDFrB7MMz8Y9RYtFJ6mdU4UzHm2x8Z6RQjNJDE7HV3zu8nbf24BzVtFDF7A8XA7hQFz7KK7N1fSpW36J6NK9y",
  "key10": "9i1Lpx46pQeuzE53at4K8nwLG4GcRXzNCzNRjipVb5niSDqyWmkya4y8CEwbEmJfNS8BFK6xEXgsUoNfiN3LXZy",
  "key11": "3u78GgJmMs5UUbB6JqNA2VSJxnSDJL6m56X6K2RYfDzVRES5WNWTFgiEp6zA8x6ChafxEjRJU1hiB79o4SGTzkZR",
  "key12": "4eHGx14Fn9ef1Wm1fmD6JNbJnpV7irFXok2TJjjMc3ZsAFuz8f96C9rXtPaoFz137HWxswEZ5eYX2GekJMpGx2Qj",
  "key13": "WWsH4NxSyhghk4Fdg8CzjQ9uPXwEkAa4c8HGFbaYnW1JMpTPmt2s5dcdbkCGFVfTTFgoHiWdhbST6FsFq4J9QiM",
  "key14": "4B5j349FMcQbeRL9SBJiRtQpBp1Dwwy45fwF7tfK7xuuPP4kv7hmkz5ZScdE3G12Wh5WFmN5MyX6xzTqaeu65PVT",
  "key15": "3VsD1na5oCRHTS9CyDVJ7d62qxJ9Z6yd6LXQ4rDRvjJCLJwe7SKwdsM8usYX9iCfcKHULPHhepihu9wk1NeuPWPw",
  "key16": "2GGm8iV66mtQpAXncLQqggByeGYkGQhL6EvGJVcNb7HjYu6CZRKNHsV4pcoQLt9km6APSHs43CmERBcyRyTRrBPR",
  "key17": "588k6kYbB4ZSxhLDpgEzzXFGBc7BMPVbgbDnWLiiQHEUQNPApb5T9ptF5rRuZMLRvvB8vbUEUnTQHJnqiNRD8oKe",
  "key18": "3GYTXP6RJenUwywELAEqttbkPddiiPwjPiwn9wBhqEsFkp1BiJbPAAqNscSSJ1fTFaKFopPRLRznndrXnvVHvbAQ",
  "key19": "2EnUu52tWVs8H7fGktmj6WR8MfCxtSphTbzqVC5kjcRTZwfFwb6TAf2bayPVoNFiNs9dQr5TjzSFRXVxPNYa2xVw",
  "key20": "bTtKBETVdkmfAxUiwT8xShjwFrXUeLR1Hsnt59mQjctHMU31cnzTRUXBxNVVehGhcic8PCBmRidTUyqbToFPtLF",
  "key21": "2kiSkr85nBkHP8Hy6pkBSny44gq1P1y17LzewRC8wLgmDT8rN5aXK1gy966MSRyQ9gUcKbcLvbx55f1KMmjEncqk",
  "key22": "zRt1YsRNnH52nb8G7L9m4vmqDEevqy85yTMABxz1oHcHf963PZCAB7KhYqioS8XLjGDTmhrn7JxidSpFe8AMJwV",
  "key23": "28Qk6hm3TMfdtaGRGkZETgN8pJZFU1mzQhihNjMisSqf4miNZHYtpEZuyNja8cGM7Gv8whU4eyvZYFBTsTNxis6f",
  "key24": "4csZTj4AX3BsLhKLJWPGTmyQC2nhNhbF4hU3KHFUqGqj59ZLY5dJ4MbKXVLhcbsy5thqNvm5byiDzF3pTbK4iRz3",
  "key25": "JsHnrBdbVqrgCgXpc2k2Yu1nKAi9saY8EFqYvfqonMgNkfJCjYdUScEVCAdFnDtaj3EdFx4yoosKd2A6dVSJTBG",
  "key26": "3wTSe77oQNX7CXCk6LFjphMUeHaraZvAfnJTwYXaLPB4wAXW4Jpqv6n4XmDHuwVdaEH2sxZNPMeHAw16JnKGkL2c",
  "key27": "3S6vpjy3wCfj5paqQkjDg7b6FFAodBNMwQCzogSMn423DbbvDY9fxLDBpZdYZDZcHEUkefwBtprnazx32zyhSqoG",
  "key28": "vkdMDSyLByp5cnTZSVkmk6vGQVeJH42ZCYFPp91otZ5faxbhwuqTABA3jGKZ1HhzYvnRQRopJsGc7mdNHpu6fLw",
  "key29": "2cmFXAhUFa18vQ9o8UrwDAHLaz72AcgD1gUdxoQhGB33ubxmSmU517U33H7PXAfBwYtGQ7VeARSi8jfEqdY4RY2g",
  "key30": "StMM4FE24TQJbhNwFc9fYv5c9nUiQe4DwRBERZMSmMS2d68x8VpbwQMxUo9okpX5NcX38adWS8eELCyjJG3j7sM",
  "key31": "4imDv5DUduk42GhJxprcRXjhHfEA7tZNZz9snf65QezJSQrmruNfrVLqj3BaR9j472FrUC6jiWtbxRh2G3wYpJae",
  "key32": "4RvUggnQMpv8cJJDtW9tAMECiXbyewNGCTePebbZsRs6qWemeSjVunT8DCxbseH8MP6iYQCNpMUV4oEzocdRhLz5",
  "key33": "7wRSPBr6PTKjCjYPhUAU838mzmE8wDg7ZUMWpHW6To254JtXzoDK3vjaQWpZGGjoSjQGVnstPVhDYFaagT4vL7k",
  "key34": "4tm8WiXoXhD9Tvt4nhaZJWyZ19Ch2o2HSMGPSE4WGDJVbkoneg2MXe8oreoevJ5uwrEobqyhsnVWsKg7XpNQUocG",
  "key35": "5Nfifg6HEU2tytbwiLEHb9k4x1fD2vP36mqrajf3oS8rqAZZKJNGkMqCrHDiXhqsuncE8DzAuDqZmZa5mozn6E2i",
  "key36": "39t7wQmv6iWksmBDPa96mLq23JNY7ANk2zWkaTu429wNPcxho1wiZBGBM55QFQGsSsCXuuN8w8WgLJieVwfF725G",
  "key37": "4FmPvv9ZQZiWb7omCVsTA9ZRkRh6Dcqfthsrm97zFEkzjq7KRkH7S3RDd4kdUsXxq9mVDqefbYQg2JV2j4kWpMAo",
  "key38": "cSVvLQASGCeqBbWpGdLTmZerrFvdc82nc9LGWrEDRFEqHTryHHE52f2C9TA5kkfve7JKn7Hp9Si7t6Gt3eeFe18",
  "key39": "5pQaErYBnoRNzvdb6fGB66LNpJFpaLc93PR7be9QFmt5V1TFJej9nGuL3Z3ehBK53hEzn7HDrrDkcoCrDp63m4ew",
  "key40": "2ivqQzwRsJ4Utjp9vKs4YNayE1Rh1eRgU6im2kG5sM5p4JNqogfthzRBpGE67mc2hNPUcdeBqFRBBBXX6kd5ye3X",
  "key41": "4cX47WEJVtGEcpU5KSNaUXVfPzWXnSBTKA8BAn2SxoLqH1R9yYLHWLicQKxG4qnU2PPjrrtWF53PaiaZ5xJbWcRT",
  "key42": "27hk6irhUu6aiL92EDT1FSKZuMo6STkyygLTz4SY8KjjSw9goi6UHnYjspUPDNozoemcebPcq5cmsGiRyEt6AswE",
  "key43": "6HSTSs6aDuQL6q1mZvCrmeXDuPbXDGtQxxiRreb8MbHYXPQAoeQzHhWodEuLjsSdqdXFGF6eaywFMcqEtXNcFu4",
  "key44": "45k9hyX54SzcN9Az8H1kU3oUoWNL6UfL3dQhEUpjMN9p39L8Ni4XLePXKDEFa2rdjRPn6Vk8STpmmqZu2nHojGaX",
  "key45": "5aN9YB9uVbvbPrm8JSunbE3piJ2rFJ2LnPFYM9AX8D5zJHWRogZnG9gQ3hbepxKbKDTwqFEkhqesysko6nSeQ8VN",
  "key46": "4jgPbnpmftQhv3QNWnik9pE1sijJ9ZhEAXxvu3698fd8SAWLzkkeMcwTtSydXwXvVPf67SV16WqpFfj4FSfkb8fE",
  "key47": "218hQ4R44xWYm12Mb3PhBA7egBpdDvj27avuWtaCKH9YsCinsqQSqhkZoaFQVDB548zfwWRHSKfRh5eywDvjM9gb"
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
