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
    "39SVbc3Xetjqs8jid1gXvsNhXtFkqFCY7gJzmdrkh8BhpRdCpWNuPVoyW5L2h7TJAJoPm7Yrs3u6e6qqHFbysk43"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Boz3mu7WcjDxxjVoepMSCYmpadcJXdB43LNoetCXWXsvu7uxtbJT9JpShCpEbtGwjzLaZsZuEp2XknYFGce4WTP",
  "key1": "522bdeBXNzq1KzUGm9urjZY3igRyY7mGTgjiabFWbxXRnNabVExsaQ7GHPWSowBrPmoMAkXP61rQLSHWjA9tVVNh",
  "key2": "3LnaNWbLZFEXrJihHhVSmG7B94p9E92Jzn5oZF3YJQ9HMf7QvaBhdRkCEY2zop6dqDuVM7kBPrYex7VgqxLjkuL5",
  "key3": "2Ym7M7o9Lm6vgxSkyskqshb1GyqNRs9UnTaXkWKM55pTcQ4EmX1qgoYifdcoUymeD4w7MS1Pu1yHZeUJ5NBzsime",
  "key4": "5SzauSLxvrkjKVuRh7PbQRA5mi5Zw8ydjwSgDXSWf9knfraZRTaEgPtYwcZW9FFoe7n5wwLZUubFtrmQhtSgifHi",
  "key5": "52m6gVrNJkgFdfKs4hdquQWyEeENPGBamYLw2ZMqpX6Uprx7DfSVc66kGJaTMdPkMgYBPCVVHbveArBBvBTPbN3D",
  "key6": "4YAtcm4E79csapBda4qUm7Nhqwdxe4Z6Fx3UKDpdMNrVTXRU4EEJkPkNxUgmeNRaynDSzSQDzLodp5j9KVrepEtt",
  "key7": "2BpUpSBkfJoznQSAr6dgVqK61CjR8dWVa7e3EsfPsi9TdwxVZVEZCQkSA7CvtZuiSdE4XLELBoZ3v9cF4mJ8wfZw",
  "key8": "mTWwCSYWpDSWSLVZtjpMiczRWUErcTXjidmN9kqGUSEjUQ4E8sAP3kX5ABvM8tJP5zp1yYXAgd5ihQCFvECBSfw",
  "key9": "m6TBhLboCsb37Vopp7BqAYjPZh8LRVziPrVoV4ZMRr6dfDXigumTLgc7qWqgMZkT2TWiX7gP4rzRHXHdYpqhN1z",
  "key10": "4dpxXzRow8P2WL21W5Vd2qAVLDecUVQVcqpKLWseD9ZK8FSzbxN9KDN6C3jqzgJCtvPpScG3wWTtR3JGqT8n7VbV",
  "key11": "2WvkyKKeYYscfnrPESCyU8idFX2pqmEHnyu46YmutueAGCcWckcvP1sKtqYy7tBHjVymZTd7mFhFCcrZ4w7FZaod",
  "key12": "4xZ5JoHQbXng4tyuwPjTwNeqZR6WANtUgAY1EdAiDEAVacZZcAR3QR5DaEGpwewhWum7LWV95Vrsa4NSNRUEqaT5",
  "key13": "5nn3niUCsUUvnrahJucZRXsbYZd3xoVsfFnBCoBqqhjcbJeT5JSibjviMdt64z4Va6YpPx6DcWAEL8ke5Ki3cPx4",
  "key14": "3jFuuHC33XHwMASTZo7nAhFM5Xfwa7Tith4R3jFnC8Rk9wozUThPuCweZuG55USbF3QJA9HPPLYxH4xKUPmVXeZ7",
  "key15": "4wqyLhuKpTowUv9T37jTSP8r2quprgJm9jviwZrNiHEYSoj54TPBrxbFdSDffngpRSqpogoyaCCxzKNtk1yjYCns",
  "key16": "2hFkqUPbyTkyUU8f2AVTWyfNBiSuqjFNfeN1xciVfWM234iQeWJ9dhhaBNEL8b5Usy7tQ8i82vyZaXwHcsSePJYJ",
  "key17": "3VfMKsbS5vqaBbWn2HfTvoKKp9Z5jUwCPsQTYndJ1zvHkYurVHoTSG6frqemg2fyGRRenxEdKtySTA4XeCytWX5F",
  "key18": "2a7YrHyEeAhAhSQmYRzP8QSeeAYPVzywathG88W5dewRz4qNQBFL8xvT6QvR23TFbQehjF31C4yKsn1YpiPMnaS",
  "key19": "2PXbuDNzuWkn1BPabFsBVKwntP3gZB4ddVMkJ8Abejx6GqRcg7uXaN7XreE1q8TUj2JBEkL3ujr2s2qeUsh2vCbE",
  "key20": "5MiAh9kdbGfM37ByqS2aJce49yKFDpr3xFKD9hid5FQVaTnpWomUGUSV4dn8PonR4r6kMoKfUZQzaYG7GFRtqqDA",
  "key21": "gXVBRMeyu3ytjq5rrhfSRbjpAHjQSHHJ7zkxhrSHXE8Xkf88sT4fPnF1UWKboLCCUTZGSzvdp5pNXg1GXtqeVb5",
  "key22": "4T8qxXfMhZgBKEyoN1WBVkgsfrNEqBXwbqdV8CtkvfcrEoJRBzY5KtGcF8HYSY1xka6w62zY3WKMnyQm7ratBZuv",
  "key23": "5Pswb5ixFvceqivVL8iiGj6DLFMBVbKe9ypUfitFZfBZvxbMfHvGgNMdfvx2DHZCcFE3kGszUjUWvKBty8cwrCh",
  "key24": "4zYV4LVxwY5tNdZJiCCze63LFhk3agpcF4bi8Mw8CJKfTfNw2v1mwHB8zLEAZS9KvsGpxmruDggTFJW6cixgb4fy",
  "key25": "58KYf1pfjxW3f2DHjWkw8V4twEgnf2EmBYdTx7ChJeKmqZjbS4rsvn1CGjUVoSVQ3UqaVNn98urLC6PDnh588Lzf",
  "key26": "5PSPXN5SGdbpVapiqzEsAYyroLcFuBL3gTz9XsnHmto1Npc7bvR64oPmMrqzBYZwf5wWXKnm4fc2zgadSP8sE1UW",
  "key27": "4YnCG8JFWACd7PYAJiYZENK528CuZJZ3peBBSuSG5XT4vAfzAHax9NWqxrnk5kNJorwmLxmthLQMoaUQhwmWXqtE",
  "key28": "ugDNHAFMgTPveXFppseKoAsWeuFXwwhUxHqqu9VNk6RpKrYQnWkSHuJSpPjDFKBMut2fRoT7HYfQgzmbEagCYRS",
  "key29": "2oCJ8fUyCUQNYYwentUCFK5fJmJ5QhgyE6qYW579b1izmYwMSVid8MW9wP37fLHCDGzixvVRhGuMbaLFY1dzCk3V",
  "key30": "2MVj7bRdFitk9jU5GNCnoL8dhRfNaa2pFE1r6ykmxjcrGWsA5B4aPRPHmp8Q9w28jS4EGuXNTZXC6yUHgLSRZDdr",
  "key31": "4Jvkep5jweoZQyiKwKUrrU4rPN4tuuT19KJNLNdcPtyRkFxbn47YA3xzzTFFtC7SutpWr8JuSW19apRXtRit8jvY",
  "key32": "4DEgiQ2Bu5WyAyAaGNn4mZLSBGRW839DYLnbWEFStxVGTG76LxkZKM1fTwCNbhuW4SJAGoGsDxqSVVYmZjdBFN3W",
  "key33": "2jK3bnnNg4oHThyHNeu9qJBoJaVGuuD8vBHy3h25LwbGAVbBJYT8vE5AhqjVdiiDVkg8Ci3S1Gbc8QJPHAnU6hBt",
  "key34": "5uPHMepmAQKufw8t6Dy2aEtL6yLzEdDtFUFGxFhJJhCC5Ld8RFvnFjcSYcK5FGVRR8s4VBaLczskZdEto2WVkcZc"
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
