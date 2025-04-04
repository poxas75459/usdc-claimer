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
    "5tPt4ZR5wG31NzQRmAMpFpxroNiYPsJAtDDZtnUjfuqMquv7ydnm3p7npa8dub4cNMMAo7pxhTVJGFga7TCJ1MQy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gXnRtRjGqmSgSaA3ufEYR7YSQqFKtE9rutejPGLtZCV4SgWCsu2RnjGyXzS2j41YmmgDwPPcV67SVXjgWAmD5p4",
  "key1": "DJ2j5p1PHMwPpGehuVjndiecWcwX4JxwiXMZXfT2VRUHMpARnbnRFqWfBTQCKU1L8k4S6iWaQzDC2MvLaE8AgQP",
  "key2": "2XNNPXWtEAoFykJpeNJsW673R2qakZ7ZtPSiQ69svduk9Dkyio2BzXB3ZzwtsNtcS7GpuDiuckZXAmwsDe9wgexp",
  "key3": "xgrgaSKnjtHZxgD6Ay1ZyM3kuzGfyr5ncdnU4bcrrJpeKKUSTkkbJutEtCJ9oriYeemZCi9Akvb2nepukPfafcV",
  "key4": "24Javv4nadzaV7n5spUYfnwDJuCEGMWrvXEzdxRbmfsPNggzqT38VkYLL6EV6mpVJ9hfU94U9rimthR3F26oBoYv",
  "key5": "zsafrLfx4n4dW6sjng6drqCqL1gWtdZY8n2kjaxEZyHLKMBFkxSCKsgRbULwSPRUrwK8K5jT8NMfSckcfTFhqtg",
  "key6": "5pxZa1mq3ccjzGF1dzJf2kx1YCAHg6PQQm4orXYeAgBZUY7HCsujPFBKTMbvXhym7yGCaeTqx4m24GQtipdbAm4z",
  "key7": "5Pt38oiVYcGrgrSbUbVZFtALdAB6xDUErtKkfwyAt4VobqCVfGvt2CRzDvUj7StuC9Mr13a2nLEn7TmpLUPiHcBs",
  "key8": "umwGroRDUPpRUpX8LyeqnRGrkVLksEa1kwpuz4Mwwo2gscBHU8uvgFYngGQFHGB552udm4tDa9CKXAfwha7Azwr",
  "key9": "2uPVZxWcsVgduifSR8NYLS7HpSSCWCQdcZxwrm6D2Whan8QwRTFYjUNmyKh1H9BfJFzAu8WcJBShdntJBVRm3VYn",
  "key10": "2V9quiwozR98fNgrRBPwfUfaL61TmAHcHhvSGmb6A8XjBbMLJzVWMApd1XpFAaVh2kbM6bSUDG9kY5isNTbr9ecf",
  "key11": "4er9jEXTymLaMLiffNPzEpmbwraWobM7BrNfUBhBSh6ktDXMAjZrcPAa5vigxiDXfLGx7Qt2LX5dbf6tPiKidbLS",
  "key12": "3SwSgm3k8CFUGTGw7xPPPLMKyZEAt4ugcksbfNdcUVfU7LH8LUoF2iimD6R4xGce1hPA4xpeCJ3HeckNNBzQcNXG",
  "key13": "4Jrs9oPhY5a5wnwLZZemHeKYd4SWp42r8mXP97tGrW1i2UqzmYitQtkwSoFErU3avU1tnyZD2R9YN1yYG2P6YBHq",
  "key14": "4tRB28jjCLYcgSrUXrVuFNh6qBGsds1coLxNYaxMPf1jqjbh8h1EFrE3LembCbWP24WcJQDuKsfm9vB86qLZSenG",
  "key15": "2mXpLuupgzUJL4YTbBVKCizpuBG2YQ1QBRaKx9VRf16QVWtWtar3g29QffLdEheBFkwRD2CGnAJbZjMo61yUZh64",
  "key16": "UTwBfT3KzTDqWAuw14gTdARNtF3d6HwzimU3p1AhH9fspKURnd3G7WqLbXtZLFfVmeuFj1Gp4MjstxHuzCmAK3q",
  "key17": "3udKBqdgawz7mJsyY4D1eQgEpvvk28Umfbdh2MpiGAXtLKvH8BWkBTRi73L6oZ6cJbbihTJWKkzbpStbHSJBv4gn",
  "key18": "5K9MWonaNmnWyZPzTUzfJ61xNutH8Fm7LRD1xd5LwBinPUxyeRcTYYobKDt6UrmTCp2f6RHVPz9P5ZfAGRkRUeoJ",
  "key19": "4Hs4rpaCuYq7RivoBSppVHiP3Epoodu9bR8fnsVinMUDvT1MPWHBTzLupbz9YZwgefQGgeaaD2DyigQrvgvLpC3h",
  "key20": "64Q8pQ6syXJEg28wV9mQ6SfkjQoRE6a8w8h8DJWat4rU1NCLyEhDoykTuQiov4ct8QQGE3gdzfc6RGKnPMXRg5zD",
  "key21": "3ECu9sUgnyLkrYrDe4U9v9eXbi6quyiNjbmDjRPzCAFm3yBrHeodS3m7GJcms4RZPotm1ApXi1mqq1VovNXR1iwj",
  "key22": "35N1sENoPAPsh4M3f1SPLgh8bMr5RdmHsfwLutYLeLNaWp1Lf8Upfwdnn8K2mY5P8BW5hNvEgv8vxF2Fqw7znjmF",
  "key23": "2byjmrLZwyHMhjp4UZ6j4qCZ7XFPeuuwJ8LAaW3VGTFQSyAQzcAgKhu8KXSeHcKqBVQnJ5rD533mfdXxBHVNfTAj",
  "key24": "fX9ExuFVT49KudQW63DU6pmHvb5d9HTbb2KVSfaBHiQ5nhsQ84u6wAoZaDAPWrwdXo4a6U2xLZCkntS323g3NQc",
  "key25": "i9Nu6AxqrTfNR5KbNukVCc3gCu8buxjHpwkH8ZWCzAUwvvnRBvfohCwct9czvVSYaxjE7rYpXn5SRohBt26UKL1",
  "key26": "2x1URhRMvrLU7XZAeoYZYPvAEjDpn9tKTWhct3hNDnFzTQiP3hHK5yZd6Qf6dxsbfk3SMPz3cCLsw9UKeRGn3QWL",
  "key27": "2FEuhCdUprPpAc1s6Zp3xBn8EiS98kxeFCL2M6BD8nD1Q2oWDT7YLb1PRHsfeMKLeAsqh4P2vTHe3RfLPc1pw3DB",
  "key28": "28ywjjLhM65pWfDE1fN7qjXZNNoKTaxReYKvqnFDXGV1fRrpQj9mEwSwae7StPQV3MyfwwSq9vCzk33gr45SHEvm",
  "key29": "2iAeRztTqa6GbWsPk7ETkrAjwNSJxym2uHGbBb7pz6GNsrGV7UQ9sXABLZJX3mPT2P9FQfwrBjdkiNHH8Q6Qeq9R",
  "key30": "coy7HqYyLUhTXt8rKHuoaL6JBKdoAKLaeMCU55wvm6mzkE3qPkzX9YdvNgJq1Knhd2ogtTJ2sU52j6JntiKUruo",
  "key31": "E6Y3oSXo9tjv8g3XAk1JpQaQnU9RRrz3Laxnmy2GoqMAqA9oRg86Z51xTBMvbgSSBgckhghcyv3t17WmUmGZ76a",
  "key32": "35tP8We94vwH9aBK2s45XxmpATYT8US6sVV7J7Nf7dG3nTdqZmYVZAd6sCaSCymh2WfgX13XnwCTXRFBAWsghipu",
  "key33": "5aQcxVY8DDZG1AAR9bmy2THuEKM321T6UNEAffK5aeTbsqnXWPY1jAQy2JKz3pvEqtLSjNJv6tBgW42ywDBoZhbV",
  "key34": "ybPbCQ4U9QWLDpFC6dCkSRPF2ngfiGsJgonBc49aUvw3FoDST4EsSmsqJz11UULjMiotJfh413keJKx1A21HWGK",
  "key35": "4ANtBFybQg8KC8eptgxZow4qzdqCxbLGLvPFsKngsEyAzhWCdkG1qWakq6TfXj5Gtpk6QHmzRZCZo91Gw4gq2eiR",
  "key36": "2fsEuKyFFymUA5f2T6Wq6ghU2fpizysZYqsbCUFoASd4Kh4FLnGqPjDFv2RfeHDVLd3VrFxjgkL16WBfPzh9QbK3",
  "key37": "mrnwpEVXpwMmYqJaLLz4ivJ8r1KVV5ntcTnBB45NvNVJLLZWgw7C8FR9Rg8wtdhsaoHD9m8CZJ2m2wL1C2z2dpf",
  "key38": "35Yu1ZFzZ6YEZqtFHLaZ3JVNw6x5wyX8iKmbfyNo63SDAKwMfaQfUvp12B69ChJyhZAev2w1418gKQTWzVYR9kg5",
  "key39": "3vRrSLWd2w3wRQ1LrdgyTo4K3MnQrdqktmzxUx2Yp9RB3HSsjbJCzDkZRfsymkCiqdFFUCfjsXFV4Sy2WrFcwkW4",
  "key40": "2ZcC5NTKSNe9cEbKhFqkX6EG6AbBJLr4wmt7e9ux9KvV1XawUfyA4BxWjc8bZ1kVxthcobeAzUszpDXFQberdf6U"
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
