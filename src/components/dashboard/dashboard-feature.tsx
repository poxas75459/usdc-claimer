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
    "4A3kcs1cSTRPvnRApuj2vNKhkYqs3y5JeGZiuqQG116HXBrG6bofWA8GsAbYfHcv2Ta9pCqanVVJXVQi3AZmFvY4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1uPmTq6TF8rDpuynf4JfEyfQo7muHsR8xHffTW5ov4uG7rPrGGZjcxraTkjHepCP1KJM5cTmvYiJ38E796aaRQU",
  "key1": "21CywYGeVM8gUDmxg7BiXAZq76DsnXRhVFhNX2M5yBVK8DKHhKHoC1ofjFPuKTouKRqGsPfgMNKLWDgG1A4H1gXt",
  "key2": "2kCjH7Tr1RrCFxiPLu5dgirER7PQDySH2vaGBtBdQHSqQykGLGUiuJuhAsG5cs3em8Aqo8UfuvALoShQhQpu5yai",
  "key3": "4qec1zngWhL9H4qcz87sfHMYXo4k5qQxrWHaFgZnUA5oN7e7PU6zZiADt4yasPbignJ4wbjVjeBjyiFsRA8sRYEA",
  "key4": "23cyC7mZNyeZPmV1aqudJcCigfUm6E8BFnHQrXGPSA2h3Cv6MnXuEfXPA1wQdHByFLr8aBPGnQBGF67yiWJcMKNB",
  "key5": "PmkSC84c84UZFFakQsvaPpiZdUiHdTvThK48jXfqBipBCt5Zrb6v2VrKVHYoBurCjEWPryJ223R5YdSQTmJ2M6T",
  "key6": "5v9NQ3RgWmsrzDwe2j9MaXscdujtkC6MaHiTGsQLtzbUAdXkhuchUfZpSQ7o7ccmPGxDCAPVbauRAqckkDxDtKVb",
  "key7": "5pe6ELJzQM4xfU3DgLkXTXZGhToun7SU9s74wk4EXgM3Wz5MspiSYWcetw1qe94kgXt4AMR7gsWpc5kAbnqaeEvN",
  "key8": "yWuDKrMUqoo4KV2aooMLrZ5Kj6P1kMCDUQxjqRXj4t9KyreuABCknwQyX15qiq1oiz84Xmf2vvYGTuAu1H7p4SR",
  "key9": "S9fbJbNbgGKN2L5VFoiwuGhuDMHdWHEygZMmnuaPirtEe6kjDRBewxcsJyMxpQFZSxc2Eyr197RXe3KgcufUNRk",
  "key10": "P7KWXy8KHrSV1QQPfsSipNP4HKnaoNrmEVe82FBoYAryKZovPsrx56kXpk2bHtpBzRM9poZmt1RTpKmnjSCLAgF",
  "key11": "5wVLJ4u4FZDGQFoEXfENoQDbpMqteax2Gb8xgNXctrEugBszwqSLzq8UpZJzG9YiZYQW4SF4BuZU5HGDhsEECXhM",
  "key12": "GEAjD75U22fsFNvTYrG8Mxtjddc51sFAd4GtaRDToTVqAanwEKCpF247ta3gG92aQ7ue8G2WrBJ3YZxHt5rMmxr",
  "key13": "5sdVcUWt5qJ3FFrM842SqByUXQrQ4sy4X3vftEUXsMUtj3Rg5jpvBwzJZAqXasK8iukix9sry8zFrJ9YFzQv6DFh",
  "key14": "2ghwsnDK8XmkdaeXpoTrVkskskvGnntbp8k4EotW8hRPvBMwLA9Z9aAcvsYqUGX7fGG4vosmNeBk7zY8GEopxpT3",
  "key15": "63eR3ivoWhro34K2GzwgL2JW1pCz2w144oW9Wd8v6WDfYPrEp9qumV1EUyFrWdjygpfrVpqmSvHfEaKMLPNqdwCp",
  "key16": "2XVN5mBgCD7fXh9D3P2QpX6GrYoDcCeyVQtQEhuhRaKe2VR6F2mW5ujyx3RGV39S3eNuHQ4LjyGszEyDpPTHSCTk",
  "key17": "3rBPeGWJphzpQsT2Hv9Cp7mdpYY4vfPVQCxFSo6UkVZdBEHK82RtyRPHAZAG2VyimNMPZFcSTj4vAiAFWcLLxQLv",
  "key18": "YJxnD9seow1m8quo5fEtbfKCpaxyhxphDizqqcuKMCfs3dhHVqQCoZD7ZPfWev8Hm9XLLCbpwPo2cC8JaGpbxDX",
  "key19": "3koTA8F9KJismovBDiuWChdb7iDxtZ5Yo1fsJo3fJ2yLBM7aaKC2VdruZKd9r5vnkm8eCAdvmCBTHDMbQd9jsxdB",
  "key20": "3h8ivLKRafsoY211AJv6LZmn1iwo2aBww4QGMd354T7vbkZAWoDfHPJjPmhaSvdVXTCcZxHCL4JECbQUA9EY49AA",
  "key21": "3PtxZ1RZSvVpLmNZuFP8mnt4LK63iY6Mp1A4n3zKSExm4b2MRsAVPWE187foode9zUdMaVhCmEeoynck15vdMma2",
  "key22": "5WFU4uWvEXWWpp8Zg7osW5vH4m1NFx3YsJ8rNGY8g7kswR8Ktsci3nmE2NgaUnwBpXV8duKsab9UvGN3N6TNQbfL",
  "key23": "4jdMXSL2qPQjGDHmsHAsZmyud1ENHwHN6LDb7NnxPdHL4zqViB4urDhcX3T4gwzfVegUwcKZkuTwJJ36ULPdshy7",
  "key24": "rjC9TzaCcib2dVJsrymSzipoiPhaVkrxHxHec39ZQ5czt8N2KNGxwiJgEDVMsQHr4bPamET4tKC4Q7H3wuA3zv3",
  "key25": "2evexvi8esa6xxMwFCXwfKdz5GcfDFehy7sfcq4A6njPPJRHJyJncHonBwC4Tw3ogkKnHHQwsuauCF1dWfRfv9Na",
  "key26": "5dLCkQVfcV2eq3coif7MvDpGsDPn4NFgybpQQe6pY8EW7F64iLWzysMgVwBk6WAZsmoeCjMz9sGQdragbQ5GBKiL",
  "key27": "FRFBLYPsVUUCbbp4YLNs6VT3wYnkPB1SBqfKWtumWm5UXeVQBH9qFknEo3KcKz4WKag6grtSyUZexhpXcSpmma7",
  "key28": "2LqfRXrWVvT8jjmtPmRCC516qkMR1wLDQ1T5CbXEtsJvNjbrLtSo9RimeFd2L2CKNRbjWr5C6MADjTHRoWoAJ8P6",
  "key29": "9EUKzxfAK8fYWfkqhfnujNyC3jEE3bKVmZmHb1scgHhCAe3z3ZeFsKzCkNz5uQWR5YADwBysqrGD8GBFqsQPggP",
  "key30": "5DwLgZ3z9m4DvTJhfqV4xRLp4Wei4VTnN6Xk63W37xG7f6SWovJpdfGC8pvJLSbcAJjarhtb5Fv4q3RRtrQUTak1",
  "key31": "2EzNyKfxYmS5hjHs463gKPJ5N9hLy8BF87J2vXbMRqRmotqxsA3K5Kz9dKBJ42d1uX1ULjo6g7KTX6L1TH4reVza",
  "key32": "3N499A2kNBJfJjdvxCTWih1S4189GLZvWfZ2cCmnZuwXNsfrgrLHmC6kBFTZ2T8NZXMbSUAn472bS3WjqwXwuxy9",
  "key33": "61fB6aXjaPugNjpndgy1rD6X71tvzDjvzUthgPTj7EP7wRdCKdey88RY9QNFh6f6cUntbKQfbcKPpKwT18P4Sbx4",
  "key34": "4Q2GyiNira5m7DVFi9EHAjmyLiNzecppaASurS4YFiVfNCx5Z7US5PGzQVT1c6cBHN1obVHhfhBwkKRvLDafafYR",
  "key35": "4gMxDFyKH5VWYagKKNdmDApUd57TATET4LdGs8xMZrqzvsZUpJEBWLpZtMxKLDHsLu7Y5dj25GpuENjXFfhscPbQ",
  "key36": "kpMJLmjVQkE3NxroRHNuWK2MvscATDGg9pVGemaTb2mZz7WTTWBKNA6K8ZTmrVaTGMLsZG8qJfaBwYVyz9sfQeT",
  "key37": "4gEybShT1qRyhHeLeSuEFAbRMZ7taQ5ugM7c8WKE7bWUiQ3KmTcRmPaUPgi7jcXnqJUR99kxEjwYtdDnhJd8VNwN",
  "key38": "218GqgM1KffDQz5jUqYWFyBzDH3UZypAxS9y7FW6MQcFg55FVaEiiHVet5Bi8rJkb68pDpnwP1fnhu3UXZNodiKF",
  "key39": "2yk2Zhvriko7EeBdUmHvYD1s8482smkotfXLV99o7LazcM2SyqxgSArHXtc65y5YQh6GbGAFaDq3qBddGe1ZM8ma",
  "key40": "56uhWVHm6HUWmQpxaCvPHym5NCRPSuTW55jrU9DtYv5R4871AutjGwKjszx3gFQ9Jy7e7r9wA2WtxpCL7D6bh9qH",
  "key41": "4RRyeGKCdnnzKLE7hLDetTMpnNJaaFP2xTTvATn1XASpsZ72TARbN9WnkhJQgNRi5XabBgzzRfDm9K4zgtZEpSsu",
  "key42": "5yT5VHANxC3qSrezyqQccmFfVXXc5Rg2Umig8FYSdgYSp5XpBxRp2VH7HZpxrNZz97V7acjwpNgFiySTBy8NsitM"
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
