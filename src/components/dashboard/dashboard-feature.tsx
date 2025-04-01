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
    "42Dz1Nirv3NPN18oxFVZ77smZyMQJ2KH6b1A4NrJZoF9DR9n9dq4HXKdydRrZWj3uowBfW56oQYhyHjsWT9jymgY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3U4KX7gaqLowRxLC6LW7kR5xcmCaB56LVgieEUeTLto8xNBbSRHCgHPiUkHMGiFygSA8uTDMmoYDqXEmzdYfHiYt",
  "key1": "HN2e3ZQ7bDknFao53TBznLdFGuejujwUEiqLorQoeu1iGC7B9B97GEDurKLagPd8E2gxNnBE52dD8jHVCD6PDFt",
  "key2": "494u7DAKsp9HiS9AKM7YxSqWk1eohocCwzkZKwDDtgvNKAg3cV6koYimNpfGDD7wuwtz8ytZsiHdEpmrk1pFeJss",
  "key3": "52QpjfvwKKnXp1baYDRuXdgvD5GLJwVrAyieyvFriYo4rZ4hwD8gC5f3wB7jLCTtpsWSyCxSyU7vHFtv9SCdUT26",
  "key4": "2G86vSPwwE2uEZ52bdghPyKpXY4xU4uHxZVuKEHrcQ3QD9cJSLaz1Dxho6VkPou3ogrEhNXFVA2M9EX1MX1gBovj",
  "key5": "4yxRp2boyjouk5rjti1N4iSxDrarHR6HsqhTV5YgkxwPmUYSME27g5wpy8NYECsUQN8iEzQmqeyRX5wKt7SyfrS8",
  "key6": "5NtFPRhodAojvQrBMPFjw7tejx2GdC6Fv2hnmwiYFYVy29yhQZRSRRmxNj6t3EarX7HSuDds9hj6X7AVVrMSiWkQ",
  "key7": "7c1Y7Fq5HKDSBpm1z6WMLeYHpxppEgJ3XvPzR3r2ThXAwKNX1VcuGcVDKxjQauUJ9sYdLZsE9RD7Vr3ZMeaaDjj",
  "key8": "5cg6z4thzTVvw2CEeGcJ5SKU5dsbneiyqwbqWspdotXc9V23KTVNfiK93vUUnj13Y2fRYo8dturvmhNHWZ6F4MHr",
  "key9": "3X6XxzfuTXzxZoQu2AZw5SSdAWXHiD7GYQ8TY8huZDxyVvijNcJBVmwyyJYBG8cxoQu1J3MLSgtWmYsLDt2xoCdN",
  "key10": "56ShaS8SswQfmgcwJ6zMGWNePybKPihwsDffH8uwxpMFSyGswV4iQToK2sAHCPKD2szjaiiHSqib76W8Rjruw95N",
  "key11": "BsJDD2Zycr7BL1pZygvPJYWP7UcecnvvwztqVdJWvXa3rmbtSAUYJpZJzYAkLUpMforUUHRxverutgADxUY8dv4",
  "key12": "4VzYPonFUchDSaac2Tw9UU7FrWD5zRU5b7mLQCfjzM6bFRgjwArWaDosRVqCcqozXM6BvQg3751jPVrGCiW31NfC",
  "key13": "88AVPPM6n2L7WnnAk9fhh6jMX74SJoRdna4SXszWwbWvLDnuY8NHLbzXU36rbfQfs51D3mapFY2gdaz5bR6nAbC",
  "key14": "35qaskFDhBfTwQBNPi8AeLbxvSF9j3KhyKhRhLf3W63NFgQPMXua4xTmUqmYY41f6P6uHBLe88n2YLDq3PN5tPAj",
  "key15": "4U3Mj5TvzV9TqRT8j6HwNCj6N1Pw6Zx3iKPHNet11CLim74WaSqJtp8B8hRgoNRiLbDYRZyJdA87qJyK6kHsTZvL",
  "key16": "4t8oQAtb8hEkLSmUQgUwHMqaSU3yLXJHr6upKokkDEvgngsacAa3Xwu3Zep9vWPKxzLErRrh9VLrLSPSVLnSGCp",
  "key17": "LykthUudzf6MPAWpc2qHPAcaKzGqAqHPeqpLxsYsx8ogyaNoi1GkHGRDFwhmKqWYnHWJMJffiUutpyxy6n2VWYX",
  "key18": "fSjhVDq8xsF9UvVYWctTbWJLbZaxGyzuAuqcpMWydGrAoZeGeXJiWD5LWPyhyDfKX28bTfahmCLnKAc2x6JVivN",
  "key19": "37Nm1hmwP8RYnKQuP1pn1Wj6MFNKuhZ5NazMMNeFMSfcPizRmMCDtqZksHnsEAn45PbzQMHgubyrSMYKDk8CVAVT",
  "key20": "5vDc3PbJWbTCPVGzJAEweN42fvtY2R6G9qFrBj5jcu5QAnvggVLPHL6kjevShYtYCgB5P87Nw4ovYkz9wvoS276e",
  "key21": "4jfYgtMwR1AdSy5Vr8b7bF3TK97KTzCevK1JjPgWcZhf6Vhi8mNQkAfyk446WSgbS3U432hR5PxvxnKR6wFCV9wk",
  "key22": "29Voc6wxrztX7z8haxSUD74q4pz46d4YeM6TxHQneQ5JaRo6ZtF7zenn4LcqdLgofErGSv3AJMuaNHj6Y9F5Sejt",
  "key23": "2gX1KcNepUmXH6wqXdh4R8GN4UeDQRshLL2aC3MCuHASEZ7uKgMhUYjVTNvx2agco6JgvD4cyLyr3RdZ7kke6beM",
  "key24": "3ni4DKDD9mcewsC9HUYCM4pjfJ3NXyGKkG4WqbEDe9gcsPEPXi6njyx9MpJmgGwunfgte3KyH7msmuEAx9w1zzh2",
  "key25": "5mrS4cMMs87QcEBuojyRDbqGv7JGEsV5DY4xt2pnJ8vaSKnZEVHbxPtk1stFAVfArzdrzLqWAYN7y7Tdk4A13dHD",
  "key26": "ffwrmNq4rUpgB4oyoQ8ozbFrESdfzGmatHuBBv8foMTKdHnjfuHY3JfvXkEsuxBE6BPNQrom2cxQF3wpGF8sQE5",
  "key27": "4gkEmcsdVKpWCRGJuoh8R1EQeCZHA9bwVvK3JLT1k3jydWfbffxRzDmwiPSdvKGHrmKkqYUrntjA3vov3S9F8tW7",
  "key28": "28uEhcg6WnsibCBGaASj3HPRoCk3jGRBoZmavX1vBNLKX7tpRD5DC98SdweGZwhjCAaPsQfWnvSqnbJjerEQLMeH",
  "key29": "3WcjXvuUisNw1Pe8ccJttdJGWYVta84baoX4g7CDnRrHWrWpp4QmZCpjvMdmBEc76SqJxAC7sBSiMvXqFmSSQFyz",
  "key30": "35Eq1mZog8PJC2M1hmV1GGRtXZ5wuLAbtGs9QivWd7Jn9sRBG2MC742Rj2X7CmgCyGLb3T1V9MViGaJJJYxjD1qV",
  "key31": "5o9V1PHV9qf1bDFMReQGUiDYJjRhiCAnw2AGmMB5CtJtNXYRZTSVH5xNucq5aPyDJ8Hfm5dyut6nPZPiN6k6qJTd"
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
