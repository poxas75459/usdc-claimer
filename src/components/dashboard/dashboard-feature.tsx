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
    "5ESYdsWhiuqxBhpcZ3iTjVFLzvxgiSJfFmbLyRHMDHezxyWvj4ymvCN2aVGFQ6vkJGvTJ5Hy8wLFdSE5mJmorLbM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yVcTbF6QDWz7bUTRsGKoqveTccRQ5fJTr7bemtndZ9S5nvukj6KmgAnpDEoEZEiSYDXs6D5rHcmZXouzJYCGxND",
  "key1": "Bq3qxkhQLPS2tGCCbAJYh7a3AH4NffxivPrArGVrvqMcyKR4aJ4syaG3ww4sG9sQtLVnVZn6aLTFbkx8eMgYziK",
  "key2": "5d6Lzvu8Y8adXWk4YqE4wGAGHKVRBhfRSHh6YAzwZrhSm6EQThhM5GB9nKgEBP3QaNJV4e8eKAhuB5wfJYGAPWtM",
  "key3": "4asfnnscwg32aXXGRCoXjrGMCixPin5TQLmNArGEDiGMy2BnKV8FgAVXazB4uH4UWjoDzsWPjyMwGEGeXfQivYuN",
  "key4": "eLNUEGWq9MX2jhXwPV4VSswodfS5QV7jNdsNK8iDFWoeUBRVc1tUysnXWFWTYteKNMnYj7TBRTFnoyao4gFiDek",
  "key5": "nakQVTbdsyDwhFCktE8U4QEW6Ppvq9XymbzrwiRj2BvXkf7tsBTu57rMaoToNScVwJxNL1CHRNWZPqfYTH6pnD9",
  "key6": "ZsPEKZ753eSybk9Kpyy7Lc9XCXtJTe4aFQewg8pjBLKqHvsF546Pgtg21GMLz8xbsHND1iiEyByxkRqeufmMXiM",
  "key7": "4YDiPffJ833Cvr7QDRsSsgdjrGwgyMNmNng6mFUoVXcAtxJETmeh7KaFWEiFUGonXrzUHkhfhnnE882QXS7YZCQf",
  "key8": "2wNG8iuNjDsBtt8hLhELkrae78SqyHGPYNk4ciQjik9GfTNaAmzUxaKgbZwX5KsMJgLDbhdHctGGZsnEVqTRNMX9",
  "key9": "5BcHWgk26Pj5AHt43gAmQPZNG34RjNipQv4G7CsC4a4RN972R787hc7wKu85rbxSNaUYt7cpaEuJLJ1cS6Q21L8m",
  "key10": "pYNcWmdLTTTqkey9oSWPZ8QWwjrH4pyaaQVstVmcgnyD17J4U3MoKC7KBDCME3TjtTrvWuVGJSCxoQGM59TTE1n",
  "key11": "5kzxao3TFh5b1yrKmpBC82iUGnT4huSh3nYSnHB36LCMFsYvKgnucpHcWaLy1g3USCbBE139Bubi8Yqds9putBSH",
  "key12": "QC5poZvuUtAzH1Ccyn7CzXguqAWiHZV7SwWXkDCb5zC92MH32ZZbjoxH9pdmPNxh1YEjieNLBY4Dq9YUXwZcwX3",
  "key13": "2uB6KiRkBWwDkCCwgsn2WhXj2DcAHDUtakei3biLSVZg3zWd2FYjbrdjnT76oyPuAPpiJ4n2gUuFpQPVAx7wQNQe",
  "key14": "4vaGa7SBCRVDXAv9jVFVysBn7hYoHpBm3vnMrVq6He7yGkWTYpGWGWjGefhDC79J8kqaSN6epMf6fBQNbJoLa2Lm",
  "key15": "5T2UPbBDYfhrFVGpkBghXrsikBb9vNfQjebXcK29QEtfX5TFtWsdC2LqcPBdM7ZxsLBM5gM4HZMoueATUkJFqQuL",
  "key16": "2n4dS1ByTaN7xv9spJWPkhYsWPSAphCKAE83G1JvL6DCHpBejsCt9ojFQzUPH2NYSHC7fb828SwAW1dDcVKiBtWz",
  "key17": "3Ftpskss62F9yU4nfw74UykLbPt9NNk3KHxzC7og6N4riHr3gJoyiPfv2CgK6cfR1XPZfFT8x3iPixpEA1D4X6mP",
  "key18": "38CnjC5rKCufHvKKCQNvUA34ZPFk6aji1MdFVmVNqReWo7g1BsAUj8Jpa79oYV8nJs9nDEkwQwY3x2jamBhMS5AG",
  "key19": "2rvKMnX2QjYmJVbZkyPFi21xAKULAtzjcoQntzxkDA4LZbmoKiKJfEb7NZ4qe81JkPAq95VEcPQZbr1AQxKaaCmQ",
  "key20": "33FcFCR2UmjJf4yhs2wgUVNPs4VZUd4dsArcFeeqFHwxLpDDvbiX15ayoViG7J4uxzrwJtLbF2HSy9wnXfWiLhcq",
  "key21": "XAeP8twAhe6JKVxMXnTSN4SYD3puMwHZyHrmMiLdk2ZqjdZ3CQeB1rJnP97sdj5MfRhMgJhzqu1rMHx4EsacqDj",
  "key22": "2Js2zRXHHWESTM6PrKf4sSnZzzvWRqah4AYs9CWExJfJ99hfEL4rP4nYEBkTUFDpfwHsvUs4Qpu7cU5AJztEdxuk",
  "key23": "634QvKTnyr7z2wUx2pzmys4ErnuhX5Cm3aJoyysjf8A1UAA9f8axxdjcca2RxBnBBfiXV9X7ubwRXbKWZsfZLkVj",
  "key24": "T3PYGaKMjH9bFKhHWF8RGpPqVYbdVCXczpSgXo6Jdr3QwWFP3jy8qXevNsLGUqBvnZ8fnFNh4Bm2YGnpphfUZYc",
  "key25": "2ppjM7zyFmxjLaTehZTgP1sxL3QWeSsZFu5dhZhjBYaSDBr2B1cNUWnSxpba1dwSzX2X5iwpn3hvFXCWjWPyEj5s",
  "key26": "pGmhBqNSdukv5ZkUzimjnKAv9ZG4L2no3a54E63LnVeeJ92i6RQfF1u4uaUKugQPMNfyyPb7gZzAQaaKKfwnU4T",
  "key27": "4JpKkZYiY6rTeDBr4QeXyNUtxQUtP4YJezDoX8mwVgtRX43F7dgwkiSjhFKoNjoXU7dZQ78bUtxrLoNAdcDT17fn",
  "key28": "3prXBBPLMVFhtw4KTqyyCZNpnt4KSMqvyrFgzBgkeS5rh8NsBGhJgHV64UJoZT2iYwQXTPs2QeAicMukGcXUf7CW",
  "key29": "2WH37xNNVrc1ZM6eBnCo2sGBqfugF1GYnMTkvRjNxSkPzZSRzncy2sCkREtW9F1SM8du6njPvxA9MhjszUMUTimx",
  "key30": "r1ML3GoJZ5faUyzFLfieU8vmdj5LNJKdqxAPobQCjHk7UtSFF3mkzHqZwoHtxu6BtZoVEjUvNnHmDqFzK5YBxoi",
  "key31": "3VFEQbr1yLJr51Vn3qYn2RiU5fWxdCDqCe1kgK46ZGXun5obZvcc6R25B9A8uwyD5B9UX1KnAsZBk4JiPkVmU9Ci",
  "key32": "41NMmxcr7kwPxDWurmA86sUyczBQSL9AgqDyRRhkYZL1LY2UetaEYfMxKD56uSbNnvFpCoXRcdhFfcMDo9mHjmr4",
  "key33": "612vRbELzqDzqKaoxrbEhZhkvGucwwx2xmbhSCmuesg6xsYshfFKoUA1Xy7Rvfock16QuGxEFP132q6aqzgSxmNp",
  "key34": "4TVxzgnBdy4qYpAduQho9YSHbPp97gPxMtCUiFPA8cDx7QS1pKMSAZEmrr7jr9752JAydamepkScAoC2CYP8k9Sf"
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
