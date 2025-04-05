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
    "78RZZENgKmFkiQ2sWR2FSvx5BzXyn2LERetThMVK35cBij79rND3NjqQkvwVxWrfSrcsQMXRkuHFCd68xwBezN1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WsmD26WLroEQGkknXiorwhX72vKi7rBEqC1MM4yFVmZWHNQVWzWdsoRDcqM5ow94298EUqR5LkNvQgw5Dtim7kw",
  "key1": "45Wf21Z3odnb6oc5ehu9vq3hHC7ZuZv38MAQfDW2kjWVeNvi3xphTceyiPboLvb5iU97ogUAHCATm1WBdguPev8E",
  "key2": "5oUQt9gqsC1yk1Ber3zfwdcpxUhEQXvLWFtRj8PTqxya5xJhDS5C78fofinxshFzgRysWGEnXpfbmXF3Y21kxABn",
  "key3": "4yicd5pvvMEomzXmPho7fXwTrMmSuei9imUEf9Qu7YRjQ4LT2WBqz4UUsPsT7XQxHua6wq75sDSRR8etVqBfeBTU",
  "key4": "5ukjctttTaeP8BvCCFNKF9ZvAkfbjuZvMdJacCBYeqjdXUdxKYWtMkRT9zZXQeCtwQrfvkpd712KbczbLx4hkCg6",
  "key5": "4TA6ZqDebJQLQREd2jEQGtxE6eWQGfAVVUxX5Dd34D2K6TF7rNHsXoaGMNShvVU6gz5CobNUjqEf9GBjdhDrTziQ",
  "key6": "2inguudL68AzmiqeDoYg6FmdPNN2NfYW4pJeoNY6FFTq6e36Kw7Fx5onTDKLFsxiQc7aBtzxFf3B18cKcdnw3iSB",
  "key7": "oHJJPGJCUbVvfcxb16o2CeUrfeNBHsj9MVw73aFWr8ye65h3tKQhWVDnrzMwGvDeJScAQDaY4zCeJMXvX9YRFRq",
  "key8": "53qwhaMy2DUAoF9exXoeqGiY4sMjZW7kDr5hzrT5bG7SiVjmfVhmRaDuNf6bv1m9AgU53t3b7ZXgnaRYx6N6bnf",
  "key9": "4p4ujggViqigPBjUNCBrrvdjPSbJCigVdNXmpMDPnqWh45SkZ6EuBxtxrW8vuMx4W8JyafskLY64B8p6BeoLUUgY",
  "key10": "3JWSNhHWtv6eqmsJGScw6fvqWCJC8Xm2egThuwT24DfNsGh8yaxcbeJMNAvPNj2gtjQLpgLiwSHw5J6ikCi8Cxt5",
  "key11": "3CyDaTPmk1hKqJsfyRgbsFejGiXTc2yAGK4yGzbQyvhL8TyFeYdZWLwyjE1sTddzruMgYCYfbddxfrww52fBMnwA",
  "key12": "2esY9cKV8Qd2GuCCvxiHYt5WEVg1KnFbLnx3yhCvadzBBj3qcXSTK8WAYbtmdG8pnqkwiALgsDAe7HhmyersWx3M",
  "key13": "5sfus2ydNBuhQ6diEpssX4VmiMiG26GGR7kwGV5knGHUK3JPB2sVCmCQjxR7KdMugFuevquEXZcDk53u7JuC5u8w",
  "key14": "3e2rSxKELomfG5CrGuYmBdf84YiazkXbt8xBg6m3hAqsfG1zmEjwqoeznyzE1B1scvL3NL3bMBkE2WZaTFPih9gh",
  "key15": "5FLmT9CvHDKDYkSsGYvBkEBBgKcJ3gaWzCsrMcmM5domhh1P8goZVKbBJyKmW3hJRYBtuq1cQYZ7bvViHX5fj8po",
  "key16": "2psQYYBm3bYAHVZhamUTNNtjTAmytkVy1cFgmp2uEPN2HvB9mx2pi1CDgp26yuk12DCHM7yiuMQBdzHSG7zy9arf",
  "key17": "3iQBShuThrqrmrB9nSJ4yirTDvmr3719Qvf2ivGCXcfYGWPiN7kBVGHD3vQ32WMCK4cDUcJYmVsEXLadM86LVc3B",
  "key18": "2UBXuJD4kSdeBtvn8LjrYmrhgkcFsTJTBUTaek8ofGUCgiMU4Qx49BnFzrUve3J5uZsAqqRa9N8xdFfFfm3UYbgg",
  "key19": "FjL3cDXVKGYXb9LyR7RuTMb2taHDeX5rksaa26QfosUshxZm88LepdGzkn2BcBgWTtkJjasCivUGDZUvvKNSXPL",
  "key20": "5tdppQmEDXgGfysiWLiBq3qk5VGEewdTu39RkGjrTDWpCeTYux2NcpoHAVi9Kp3GpeLDzfEgzqWdmUvLLAbUKdr",
  "key21": "5LSP5yRugt9L1jFDBCCQSBwAiGuXNsLMEFTLCfF84LWwvK78QpcfKJsHye3CzvKCoiHG3KXJRU88PnbXZtATtr9d",
  "key22": "2UYLot2avEBfbdnKh8Mri6TAt6S5YU68KgTYtKFWHZLqghB7BbkH63fDN5nanRMgSzSJDWbmS8VTmQ7TE1gfpofN",
  "key23": "3abZRNJcFDqA9KLxMnpyxxmgFE3u3LR5tsAEWWAFNXQgxr5gvgtXdtqFPAaCppFMr1ui31hh6uQqkfZzrpgbP5Hm",
  "key24": "4QUK7sHJBY7WCpPTnwua8s3f4Pyr9Auz3o48TPgrE4jQR5DqxwMywfCgZzHLj3GuSVcADXs8Kxy3vxxkcn5Zsdug",
  "key25": "3QErB1HiNciXmFXPsXdSnCMCZaCAwXE9o57eepKNz4RC5TPYfQ5UQL9nzCEVhV9SCkCpjYz4wR4CnGBPvC8UUAMQ",
  "key26": "2VEiC9JtaMJGF6ePLALStWBP2QzEmkwzmbGsV4wxyqPZhf4VorbHrHE7FEkohntJiNy4zG1LEN8WXSNw6UWhF7zP",
  "key27": "5hBUiGGsj1qmxjG613FiKWspShsF1z7s47aWoyzfVMn77PgizeE531SmJFeJtjiEiGZCXLUg2Xyf6joG9hRnB6vK",
  "key28": "4vV7ekSETtboDmmJfHrmTiP7NyCxE441Fce84LpAZ5rJao2TsnFdufPVtTLxKbkoTmouaZUoQgSG1Ym2fZuQy7hY",
  "key29": "4Hzch9ZzSayGWFYtmaGDtwi7WvumBoo6aiXDPbsVVkSvAybCEEvV1F9mgg78wynbyo2DBbUFt7uSPj3zqYVPWJAd",
  "key30": "37WPbgJaPopAeLoxyX33dfaPQ6P6VCwK1W3SAhSdRQe43C8YvmV8ir72HWCpy25pwXxNb8rAwyGs52c18b11WSJP",
  "key31": "364DinDLjVbaKYRKZNwiKmLTDLBsy4RDJ1iJiHx9n9ZE9T39gJQQbGcCkivqNapGEkYFbaTyZTdJvk9486zhdRYU",
  "key32": "55ejFKH1L5ZaX3bdDTMb7zmtBHxT5o18fNk3Mbbj2Gz6PwCChuHw7Yj3w5gMcLg56rztwHmdeZgNeMnSESjG7VaP",
  "key33": "4JdaPyp2MvVtwcc2Rf3EV84zSoZB7h9Vu4QjDFmxrJszKMTFBJKkHGxib51Yi3xdwFVHahrGhWtK3DrCrMNag7r7",
  "key34": "TiFNwR34sPd9XioRoSzGgFNpmtFSeUMmSWrhAAxGv3ree55U4boN8hAAQKQhFesP5428X32Z1e3QHrtgGwWnpej",
  "key35": "mgJXWqCVxbUf6jHgfTxcaeaxYJrfTa1cXWSXv5gWLSnNz3mWcuv6ypnN79uRz9ozyHRQTfsF1GVkz5fSUdxzVbq",
  "key36": "64YrkVLrSckG95UAofNTtxUpuNRZdBPybUSw6iJb1b1pWZZCqmRqrxDAQq6sb9v6DMyXbWNrZQB4CksT6NLxoSfM"
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
