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
    "3WDXzuYS9Bs7dwtn26hePkkcoNH66MtG9AfRKrBDTqxDWETewLSfK5ZYZCy2CTnyNNSFiW2W1Zb58sipqe1bWJ6e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TzVhNDdhyivLyubnH2qetED4GiRjbnCFy5sYQ9kDT9rEcpp8W7JwYgHXKuj9xrY7f14ar5bkHnhqM9B4BQ6rGqP",
  "key1": "3dqDYjmWCJLNDrpzdHbFpmrqpbkhjzUybcii4Y1pEyZM76haNtm8uQiLHUy9cwfLpRmx7YmLPzD1cgLjuH35ta53",
  "key2": "2ubZmQ9sjU5jBkfe8o5FDKrchYCBJ9qVdzZo3UZtP2xEr4HEfYfHcF6riuuHMNfeXTwP6pvLofbdPfBSKgRY98EZ",
  "key3": "31SZSAFR1xSraoQap1VEcHDSoXeeTcDk9MkH4Tn5yBfqQob5nWmUynVivzBJaTpDRHZrZrcFYjMTRjpnYw5TTMPq",
  "key4": "grAJnBENPR1ge2ghxeStZuUPN2MLnyWJGoFYRAFahragtsxa1wR54hQKUstGbNsZs5tbR34bfaSzzHSwBm9rqei",
  "key5": "3BmJbPxr9LUHx29Mh9P3xJmkmr4DLriX6CHZgUpRgQqco812s3sGG2kDXy3C9x3h4yBpiM2Q9XjkYFtbvxNwSyHK",
  "key6": "5iS56PBboR9DJMMiT28u1vpTsFZ3DWSyyCUZmuxce5jvuRyBg5T8RkV8R1UaZCtwhM7eXvwFjsf1hgFKaUb22v7D",
  "key7": "3LNdMkE98bCbRnkRHGK2ywsdVinqdFHEiavDuti3qpNQbf3czoMW4rx6WffnpYx9o164EaECAkXs7csytPWshH9w",
  "key8": "gUmejXqAHtNeuv6pNuHHumQctnHv6By8FMM2r4tFpKLKwNmbTLTnZNXdaNWSo39HX9fDXrEBw7nuR5Dd4NaC25G",
  "key9": "9m8Pqv2pQhgkuNQtQctrGKHTpFyNxE5UzBYbW6q4dkPWRmjL1Td9BThpGTED4JPKULVEFRSBC8S5qfd9x2RDxv1",
  "key10": "gMh7ut7YPDkv4MJ16fLPujFGC323Bhum9HPCUUsee9AU548sQ9MewCFdcAyPRZimfHcuKVZjtf82QeMyKwonbKb",
  "key11": "2cLGMhEVY7VSxrj5tybPDyuWSwtiERyNBRwbDAZ1Sx89FEMdhYca9Gx8Zk1Q1UUuMKnXTNisxYexa8fTFPmT15jw",
  "key12": "3e43cM9xH55VV92J5JqBLwoaqMwMBgCRtSPi27xbEZ2cdpKL51cEDhFtgbeinhrzEytuPGcKtSKmjViaXYcADK51",
  "key13": "5fWA1Us9oZyQ3Jqd5dcdmiH9tQE4uRTJK5rvKLjnj86YxLhMRyG28iyWKb27tEbztXLEr2V7vAj327m61HsbKRWf",
  "key14": "2KJgMtkS4BUzo4YG8VZnUqbafoJrcPqvF5dFuevLeukqCdRfUEwxasQ75WvTSEX6qrvNbxZxLffdEyiS3FYTrXjL",
  "key15": "3DqebVewbK1CL3rvrW7Z3H6kbJM7o3CCo9uuYLQmaWwSHJcu272Pn7qW6gP7EibBzrqsVW64g5VtN1q8gDyirkLX",
  "key16": "3ytCgUYq5gfJDFy3UYtRheGRWmZZJSErLXS9vnJRP22PGsMzqTK8bnG4aCAYsga7NbF2dE3oDBJVRqAXbmuBjDmb",
  "key17": "5erkU8oaT79VJE6e1JbA3NGdiNsoYks8F4qvVbAKEBrgbah9eVCoMuC83sSbeenm46gADKiSExkdke5wzZybJKqo",
  "key18": "vfx2gYLgconVWfVbY24z7q877ySDYhVAKjNgztyVsj1sFdZLsdnySf15msMKW5TgximYTUgsZ35nrgsixSZqQHY",
  "key19": "657shPzv5PRHzdiBMmPvRSFqnETCrPeFL42jhtzY7F8TCjq1bcGvrNVTnHVCR38nxikAE3gbKEd84T27DzQaF126",
  "key20": "5PBm1FFs4WgT37xs719iC6wkx2USNvLngjs4MT4gHtwYbgJRtTcfF9LTcjXhXPnLYVFBLhdSwyamC8JGo1tjwqfU",
  "key21": "5CNPoSFfAfHwzWLXxV17yYToKGKHjB5uTgVpQe2FXRXnsYCa9m9iyF46GcZ2Sj6PLEsmXiPP5KqpgtbCAYPKZmnu",
  "key22": "4qjBTofWJsmb9j2bqijyRVT7iY3mVWdNrMcsnf9CvTWf8Rb3pG12HFH8kTAYdtzwARYU4FkJbe9c41agruTPVA81",
  "key23": "3dLZgDHnujQG3ZQdDhDofn7FkhdxuuZZse4LxoiGspfPZnCNVxbpWpxBC7fhmSCRZXLHRZkmEN21GPc43UgFrdGs",
  "key24": "57gv9dc8ev55aZT1UPGhnxe8kEPrZnmxYbudtwDC2HmL9hwW2XHN6MGgSk9WDUroqDLXxRJ8DTZFHSvpcJanfEGw",
  "key25": "4JkioF5ysAqQ4oDDMvSrLm6s5cjMzk2MLuKw7GQUVEEYbwoNorLGtAE6ieU2nSb8hr3bVVwtG4wL4nHUmqYsDsS6",
  "key26": "2aLEH9h5dLpSt4kwxz2zA3N8F2WTJYJdBSm16jA189byVm8uvGQ42tWXzL97kQZpRQcPAkZCNQ1CYY93nmxVwDnY",
  "key27": "2q7jZf5GrBUxKnQUPqr4xLn9pdf4ZMAHxZemuie8UPmK4Fk3D8qTRqzRHjEddkxDDzQCKBsGHmwDo5Gb8iNJEiyy",
  "key28": "AG1weNiXw1Q1L6ejqVyt5SwY9NkXeBJvZF2wu5yiPtWCG1woVkqeqid5S9zzPkooiYw6qzDoLM1Ca9mCCAcirbp",
  "key29": "38nB8haLqSo2DXpmJRLjA5FCmKv1Q3PCRNAoEcHEhLkAmw7RPdsB4mv6AcNU9kxrnBrSVFZHAr2vCvfE3w6CXtjy",
  "key30": "rBxKEJBVzWKqo8ebFAZprfR35ruARtpacsWLtQzYT3VrV3ngPLDuX5uDQfdMoGPrMqcWbPaEcyHgPZaWQBAQNuc",
  "key31": "c6esxFnMDqGnPDpFhgRrK2pcAzWhkxAD2UZ2sFL2oGUaPizBa61Q2F2TLxDecqdd1Q6gs4QNjpbbb4EZAFbtKyR",
  "key32": "4h42UYAwr6pd58vSjyvxDGM8WapkfN3nNg4tJBGgku6Qo9hPqM1MLKAGuGgDY5Bx3VwsFvrwGVZX3s7yQKgKvitm",
  "key33": "5K9ppErwpBouNxHWcT26tfCSLa5xLqsK7d9ayUEZMXyBzQp8vmFQSEC2vpu7y2TLYCJN6c5yN8KVVZanGBNW4aaD",
  "key34": "5hEpcAajW9D916qkQouMAUnuu58Uei3FvycJvsqvZ2oNhHLEjEVnWJriU4mUGkBU8w2uJ1DW28SvNRHucJEuhM9s",
  "key35": "pepnP8AjoY1Xp8UcydBZvLaUhFHnap5taDyUwg2osTLVrBZfiwx91jqwtfUrqmVCcL9JGKY5j8uqdow6BVAw3Mh",
  "key36": "21EHpeGhxeTtPqSaSJR79cVcm182umFB3KCTi4kc5U7f8hymPAEVDoke5Lyg3SZrXCpVF5t49FUvLaZoLPPxnfqk"
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
