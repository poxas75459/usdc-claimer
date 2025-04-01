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
    "2zi34pSFet9GknPVtn6QCU4F2KA5CmYF63QseAJWyDsf9zZPqU2TN2CDnkhRruj9e2tQb6z5b1rHZU7FD8uk9cgM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qjaPCGMcadFAPp1V355FFbc2XevdZb1ayfNebauxSaqwA8X3Le9BiQAs5oMsy5fSwCAsQSKwH9aawuJCR2VUQNX",
  "key1": "4isJzQPgtxqaKsDWnEExQJzwo8AM4kJ6zeFGqR7nSDJ1azj4Kwvwwgnj9Wfi6JsxKPdeM1d9KNvAQZbHrR9424pU",
  "key2": "5easDLWtQnLVQXNyHHtaEeUn8AGrZjmMLNCZ5KYWwCDC4wVZiGuMbLLvuWrp6P83gq6HYBgF9dVVUwREV5x6ZimZ",
  "key3": "3AP7Vei9PeFbAuaNySW8Uag2ersSVuF6Rc4Ka3LybNvEpSBkXD1JSkJrJCJAm2aNVBaKUXn3JBtVuPtyeNLCxNzA",
  "key4": "3WgCVgBMwi1fF64sDPQMcsJRaT3zHXrVWC6gTtcqkYzStH1oU4PV2oH4ChRUvQXwC9CnX9pyAy4BPC1ZsDqzfbDb",
  "key5": "29LfgCMXQGWJQu5JWZXgrTdXJm4BamBtxtsjP15FSASnw8JwUdB7C3Hn2yuoDezQuNrc8aeigmENArm8QbHtQ6NF",
  "key6": "ZtU5QmkrcprhsYRHo8jFaxFU65EasaMf6m9SQKzehip4W4yzSatWo5sWbtzGNdDBPvucgXLXEVR3ZPhBzkHgY5z",
  "key7": "3jjtnCFj4h37XHnd1GbaPfdabeqX8csBESAGGEZ7mvLCDDpu6BmBgn9Le6KBtXHLqYUemgqSdM6AdbWDUhGZHXf6",
  "key8": "5wyz73TmfXXZCUeZTbLm6sY2b8ZMb5sUyJWH6YV2yrDnb3KmeLkax3gStXVLh56H25RLjf5fC3CQtH92AJMsYQen",
  "key9": "25SBd6MdzPH2882Pyf3qvn8azm23Mft2xAcZPgZrAEBfjKqUvPnWcqzxpPbdMJu3raXUQyuQMP8bbdnUJ5hV7Wbv",
  "key10": "3anB2nwjCL859X23GAb1qvgUSUPar3Kv2bAW2mfwigg8HLgza7Zs6T3EALTdoeNK6sFA41TpYwPC6TfasAJbe6bP",
  "key11": "3E98VdT7SB1fLaxBDYvBqD5goLsGJGM55U4USHtmchGJqoh4cCVnzc665v52E27bc2B1KpKS5hKXXZqu5cokU69Q",
  "key12": "5FNR82RQgMAd2UUuJa1sNv4y6BbArLyyrWWj9KMwuthJ6CmPJragY1A8rRjMLQuTQLinKhhGKaeF1RAcAQZ9FUMb",
  "key13": "3XX5qRPM8U4JbVkcvy8hxqdGLRQDmZzu2huU7Q3SfCdszBXGkfYA8ueJguKRGKQ7x5mzjEnBXVN6qFHBTPbGtCWK",
  "key14": "4ppNar4rAfbkJV15GaqzuHLkBNTsDAWjPCzRpdrsJmiJ4PL2qMyfrWhFzMb9YLfssrHuzFtXEWqshCAiwhE8tqx3",
  "key15": "sLDnBBAdiKLowdPoECMher52WBipVbmJPE4X95n4kWK1XdMgDAPAy9VigXPPNZLBfz7xADpADCHUY6gFtgUNBvR",
  "key16": "5BRhDgTu86RH2MUFK5bcUj7NRjsPphUBJRaqQNr8zazhwgtWfRuU82t3DbM6gfPyKzgbhKJbPFGjqoWm23Q3iKbv",
  "key17": "2sbV52vTVBVjRC9ah7tRGKJAQuX8D9TGPs1AFG6jujesaLJfG5SXqz1CGv64ysVP677hGemXxgZAUtyJqPSfYq9",
  "key18": "4gX4v4Z378uLKu3JBodXkBLmaKP9KGzH2iciED4hKPMKqEtYfqtKZVDhferoK79Ee43kf4iyy1JfshdmdgUiaBYF",
  "key19": "3HprXT8ticNHLXBq9ecgPoQfirs3qHrD2iFXCyn6nGYMhpPBEVAHxmLDtiLcsG1WGn3YvPVu8E3KJHzqjYk4XhHK",
  "key20": "5viymC2MV2wpwmbdTrfo4B2m4g3zCdRZGmyiLimkCDM2Y8NyDFth9UGS6Ur8bAQXGr1G5TmQumPEjab1jZDV4iXn",
  "key21": "5XAnqFYLH4SFL6rwVkmTQAru5enL8RkZESSQNBny4xpHo7Kcwa6fentWNXpvJwYUgGw88ZhEsuZm59A6QzcHwxfb",
  "key22": "AWLDbnnWqmErNLBz9btpkqZp5ZYV7sdoG8bACm33NaRphYFGERqjf1SpZ8NSeBkN8uMebzwQzVk3uzb1ghwRhe4",
  "key23": "2KmyjRqDDtttfm6HCHVnWmYtJhxSVf9V1CuBS44xuu5vdYAKo1ybQhrNi77tNzbMxKueWkKWsEYr4XAi2u9MZYbe",
  "key24": "2hgKYqXvFK1DS5JkonXXmGpX6FHazUfVYntcSvx6nzDuhxHG59E8R6hKiAnSdr9DJ23csd5waysabsJzzXkqkvCE",
  "key25": "2kFvgijKJmzGsCQY6sPxp4mDDM21uXN3jWt1aFhyat74X3F2hke15W3N1mMcRkzcewq8eBHxJMMyWRVw6snSne1A",
  "key26": "4DJnvCcUF8Vzns1R2jTjSSYNWFVdKMGJco5aTXAWQVReySRGyfetNwUXVFs9HbVpdkqajUVhiYAHytsYEhvHDEpk",
  "key27": "2gAwmtNBoVVPMGgUeDvW1okYXPyMzQXDRhLeWKzDHNZAcM4j36aHtLufDV8vNQaYkUp5pdYPusZHy34ToF9dCLMP",
  "key28": "sodJRYHpdZNL3hiPgxioY4bafxdSHka82z7qa7wbxDMWGDqcXvKPLGKAXcrePBRsgrSgYmr23VfezEwCcFVKHML",
  "key29": "VveTivJUEsGjaDhECXy4jBZUDtPEUK7VGBMLdeMyG6my6SsXhKBqa658eboWtANGmrrvEDaKzM1hmC7A8sTFC7Q",
  "key30": "2zmhMo5vHAJJaeKRk8Ecjdh5ZujmBG7fBhB7cjBPnGttNhhmi1kHjNjMxH86EUmhJiAfbaAy4soToe9vknGLUEbs",
  "key31": "GLcaeesrWvGcYV6Q4wydktPF1PwWDygR4DUKrV4j7xwT4uLxHzLwoWPbYkgwhFuPjCy5NV1f7jLh9EdtjZuxwtj",
  "key32": "63TkrtFW66An22Hrxop7HMYmmGGCrfVCr5umAX19nZWCcmJHD1e3XfqpUYMVh5NY431gDRRPjq1kgQexiwxht9Dj"
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
