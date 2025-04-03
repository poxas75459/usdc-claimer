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
    "2qonz2jm5aXgonnJVDPeZjnaf9PcKLBTPX3braCthQDFrr6Vp48kix9ozEqqsEnVbY8V54W66k8u6a398dCuEbNy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3x9BfbFo43twddbiZLa7U5Fq5oTaYH2eRkZnFiQtigg3HAzzs1dD72w4qSs4i351RTFbeY7DrfCRdbPASHNzbaUh",
  "key1": "3atNFMHJTqx9gWzzVf6fayMjMvpJ2SR2haQWUTPASd5Fp3oCnDeLfYdfxmctaMtyowquRbg9uSNjVpnE9S4uzXsL",
  "key2": "5HjVK8xovondJ2NqFAkkkszdanuU3VSnNuEJfRZncuLBw6cd45UbP4GNc2JimkdFK1vHGUgTiys8D5orv2suZrym",
  "key3": "W8c5FYwTjKbVf62WX6vK3SZRbgrdjPMAvdiccqwqwzKsHPSiV2LW55dVcyYrAaV4mrVSr1PaGa843qi8azUzd3e",
  "key4": "2dieZtFnS55uCXGukWWdXE3tHy2xxxrGCYJ4qH8zskQj9hcBvABNUJ5d9CNXgZcN1gYnrbW7aMuzSozWA5NFWW8q",
  "key5": "2PbyNEwXjZZS7LKN7ZiLpdAo4KMhuVEt3sVaPm1xuNhmkWK6H5HEDNnFboQZ4UPgd9TkW4EG4mfXWysKbg5BmmQb",
  "key6": "4ntzXNMC9KgzMEumkQNZND3oWZDQsDez9JkKJawu5LVoEBXhwNtzAeZcg9o8jADb66FvwsvVS7cJgChmWx4y73eg",
  "key7": "2fdjNmxjT84zwxjWdxMw25f4Arx13QX2AVW78pcGMsKszNx1mPkuMzRPGD5VH1gYCLC8YFVeKBonoi1pxbQTikhA",
  "key8": "2Er7umxmL5QS9VhEGjyQm8iJKecqKop79HBNfLkmSRyDU8Ns4YEftQyvyQwnLUL7EAYGkusAEsuSy3wgjZ1M2KzY",
  "key9": "5fmCDgtB6Lnt7rv5Wh1qXW2Fsodznm7YZ5bGwhQ4QhQ5vkeh5qs4nMVMyKfkFEGzBv1R5qNEig7KEaVBTFNnrwNs",
  "key10": "3hyEEWnTn18hi81quTi1Ava5y7Kd74bKJv1Fu6AQZ3MUBM9JMC9viLDHCZFQ4PH9bWhj6cSaBgkBJkpRtZFMjSJ8",
  "key11": "2ajE5tgmYQfq4aaBzhVZ1cn1roWioVavGWSYJ6i8YXq29W3cc7WfM3qH3Pc5ZYnLv6fmsAWGCWiXET5CrME9Sqr6",
  "key12": "3t8WHSjhPQGMN1yA1mK2U3xyNiknswEm2erW6PRBBE5R8nsVc3ij84ZNTnJCWnboo45TYD1PVjzWvyJWokADMWQj",
  "key13": "5SNK1cHRATxEMCrpmkLCZ8dtv837jJt1by4JWRKW8goktQFFp6YX7oxn6SgnP9avNwRyPk41B7S8dHqiRTJeq3Bq",
  "key14": "2jGu9S7JaCyS3Y6AxFXPFTKqP4oidwqCCRfebSRxsdxUdZXEAosdXf7ZhN69iFtAgMujDYRvoPWe5qT6o2KdeWTW",
  "key15": "61ghMuzZ3YkDsWT4CrFtucmVz6uMnST9NePXw6R9mYJrwgmvBEEKaD4DPYvFUNM6jBtFzr75Gfjv7DXvESrKCzHi",
  "key16": "59VZGimBBhSbGusruPYrVqvzFvRajhUXNU4hteHzzmJPBuQ9PUg5Ym1WwuizRLgXukiethh4HafjmtXoWkddHemh",
  "key17": "38U1C9JDZ3z6UPMHDLqkef6qjunSFNLaYsAsu8J8R7kNUu9KSXs5Ddgo5FFVHMrXRzZjpuvuDpvA2j76HGSWTVUE",
  "key18": "Wmg2FUWaKpC1K2N4BAwih2mHsjhM7koPToucDuixVVyYHSvvEcp9jV2BQVW9svU4RMHVSAjGDqUEN8XYDT4S3W4",
  "key19": "4oj2TRZiZo4EbfT3wJo4fHZeF5Lm4MoNRczvC5w9Bc3Auy9ewfdMJc3f6hYctZWG5vdDXZicEbPCWg96gcWUPrPT",
  "key20": "3DQzTQ4AVttmaSgGrL9WpwFMmz84HCRGYV51Y6Kkqk9LhGJMAGHjk5cXsi1v46YCr3unEGwtH7ixTEDLiZGvNtwK",
  "key21": "J4uJSQZH2Q5ydXuYVMusTfKoCvjx2P4iMRwtDTwKrDhCExo7sbKkQbZhnukSmZarwY7PqKfzSWPuMinoehwkzgc",
  "key22": "4H8okUy8p7AtFgTZBrt5aE2Cjqtkpo2kbmj9zb1XQeJmis3bXjpX57EciENwdsiDM4UjzfzuRANdeCphN2Bh3wvA",
  "key23": "366tDywnjGWc3h8wYEVNLzkcm28Lqg7MTxYwgvUVasb5K9tKCHGHPwGkCenigUspVisueSx1RSY9fZ9dW687SNbg",
  "key24": "4pWcz64jGw52aczDLUW7ir2aUJWfdeZudt55qgpvnHaZ3xUZ5hyz1BmGe42z3EYipLLPTTaKRhgxiVW2dmwBU6JP",
  "key25": "RdQko6KsWksZ1XhRyq5YUNE5oVLaBPJgmbkY2SUuYCR5gEMVb2Vj6aa49cZUF9hBhTAv1swEoU8n4sWe3XRrZHK",
  "key26": "52a75Dtx4sHtUW1ZPE1B88Mm6FGwDFoRphhoPAaunU2pyrGXJFANdb6nq1KBPmPgjxLVQh6aZEewrwtVJyZcpqRz",
  "key27": "5SFbZY43ND4whvvigt4dDG2mRZcWUbcYX2shPi4kqfKDRj96vakykDVcbUc7d3XgsFmY11WBXQRpZf1y88Pb1CMV",
  "key28": "C5axcq5nTUjpstH24U9ATB5jrG8SF7pFsqArxvHyJ3GccDVjN1yD68ZWHKYmXgsFDkZ1Ez9PhHK7daFiW74714y",
  "key29": "2oJa3RpgfE5rqWjt1rcYqWutxAZXVfmxnhSLYvzEhmtHiAvexhXuwJBenYGajSwCb6f2JgRYwXmGii2cCXTmdr98",
  "key30": "SySSbu1V6ihVb3iXpKvWdDkSXCae3jifL11e2Pd2TYBzutEkhHmNSUrwRobZMg4GJX4zuBXoDzynRhFv5dTT3yb",
  "key31": "5k87Yo7b1YavXppng6JAczZZyNqWZMeL96Ng1JFU8atMdrhcKevKrEH7djX9emr6x5NCjonigfZWyzN7Sa1pXKAn",
  "key32": "2CV5H2WaVCXDCiG3yq6U3vvU2YyKEFL1nmdHvZq5U26GU9YFW3foQrX9SsuCikYJhG8dEgkNZgp6Eh6xTagL7FqC",
  "key33": "3WvprmBEoKKFG47nUw3Nms8oQDdtXYKdhzhvf5UZC8gVasqivgDfVz9Ni2hSWPmdd1V7tZARU8Azik3Pjz98e3Uy",
  "key34": "4hZRTAWt8bPNUNRTKDfReJrqXyjTxsewuznRYayWwiFuFNxkqfJj1tzS1KXPStAkxW1WFs4W9Zx1yZii91ZnbGZL",
  "key35": "31ENu94AzgN3ZDDxvyfq6BbKHoz4NVSB31kaGJrTZpXiRF6WpxosQGv5D49YxjM563kM1usLACgriFxa8REy9utX",
  "key36": "4f8KCrrrBkNq5JBUYwP34cvDEYqt52pRW89raFuTqNX697TDZJsGa7nsEPwJvvs9vuBBCKv44CWiTD1e5uv1DY3D",
  "key37": "2z1kxvocMLQEuBmpdAo8S8HPEkxNhano8575ySK3w2v13k6M3eBuHcsiCpPLGMEXAbvzipWW2WqvTDnns3B9UNp7",
  "key38": "2i7mnLrwkY4WiZ2uabQdhUVwmc9DQm9tiQvLfiryAHPkta15U9WJWPQi6x8VsTx8BBcjXdRd9UnBPfQtz6adh3d6",
  "key39": "2UU2Vmk9qcFGHmhhySFhdzNRQeu4QxNdm76iEoTdnJmc3fa1Vt9oddDpxFCyZUjQMMFEeLThCZrPcrFTMi9KNvkv"
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
