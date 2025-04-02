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
    "5pMuKjcYVfB8PQB4nepDRfNZYc2n7hFFEFBm82ynQc7d2f5zTMXEhnLi8W1ryvok81vTW6mBNjnW6CJRGGL6rLS7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oH7viHx7xYHyh29eNf3XtmhyEUwvbdJCoXNwtT164y5mxdqJuPc9R3qx29eMtu1eVgDzbwgqW57M8SDtkT2rfeg",
  "key1": "zdjK1w4WDCfgmwxM7qBxGoNXAVgKWwVG7WGHJA7abbWA9RsonVynrZAJUZgefhJExfjximfCDx1PezVQLE37nNy",
  "key2": "44zEnMrnjk2mqg9HoLgHb5NCAt3CLeHYppyH9educS9hGPs8rWBGSfShTyVCJs1wQSHvjFePAowtS7LkJ3Xg1ZmT",
  "key3": "3NYEmxwwggZUUVV8vWVA94ba9QVTgwRsKLgfE9BdJrJJscumqQQGfqAoYvcCfw42Q5xB6si6rL3vrvqc42L6VimV",
  "key4": "4PQM47BxsmGNSbfduRXnSb7E5sjZiC4ECTJbWuBtt1AXJipehMhucwXQRkV9cRLW1KTAm2PbJgYUiuJvRRHpjy99",
  "key5": "2orXVCHYQS5ckPiwedk3v2vZ9rFSF4ZZDY9xx7CcZ5JPL15gmdBUhwvQvje1xrTuEshApM5uupFRTmUy96dQJj8m",
  "key6": "5DNCKPVjZNmTzw3UK8ScuCr6mLFQcvqcpCDa6BneiW3VmaYkYSptbQ1ee2EcqnJeipgq9buL82jkXoTT26QuofVS",
  "key7": "rDKSdMvJcFvJMt3Ho2rtNAkfVfAGKuR15WwdSW6hBwyNrtd2mvnFjunaZwCTsaTLAhL3Zf8GacDbHbpGeZ65AUC",
  "key8": "E27NH74ePj2UgDNHJsQL6LuZ3mvviWLeoXkdwveL9xrcNLS22krX38n2BwFAofNjAtZUid5TipFMxGw3NjTdsoG",
  "key9": "Yhxs4s4fSAgiYQtGzwPWR3aVFzkg3hdyYJ87cyVVwe9EzAUqeotoEyPYYeYbtuwjZTpH559mkQTGEHLVcutZvPc",
  "key10": "3AWeD1JeK9LZPMntmiYEg7UNZktnV1kHVLCvaBuuNGZ4FYQS947zp4BbpcW1MpVg1ftYkfStSbTq1k2ymRwqUu5f",
  "key11": "2RAtzGDQEgXQLaTCNYoysCwsfbmuLtj8UNtP8ZNXgdZL82ghA2MvXf4TTMNvs21uZvBFw7nDnbWQNK5Y4HevSxZN",
  "key12": "1mjgUa3YscLAzrEPBGaXZFPDvh8oz3UcxjUqQ5sECv24ThwJQpViktJdMSxjJpa1PxGi6kDfHLugCgX64qpxy4F",
  "key13": "51CVLMXBqMDATdm5wwzRKsmw3WhqgwwijPs5xMQicAdTYH4t8qnPNtALyNoHifnA8o2gSHbkaCBrtnentn6KBmWV",
  "key14": "SPDEqX1M5Cn71UF96iSuXB16thdM8haYo2ft7n1sgC3Fu1BVR4Db4F869c395s3zh9JPxgXRP8yQWhJAXqSmmt8",
  "key15": "2sWG2czHEUvu1f55GdLdHRTrFbLmMQmcoM4ugy6oTCutBThpzxwSq4s4QVy6gZouEnoERN7ksDWrD3yRDcCcWtZM",
  "key16": "4XAnz7k8URSrYvXen6t55m38y3y6aqGMcctKdz5d3wnYXmPfMW3YQxa6qbujdKQmcGzV5EgB9DyDCcjPU4ZRzRks",
  "key17": "2Ew4EHdh5p1Hsm6qkgrWd2QTUtLJCWVKUcA9KbAYDua7c8CWzMRQn9QP5o1yqnyDBdSNLMBtgSa8RBYZLywwp6zH",
  "key18": "2mrvjaGMWaRxf11uAW9qScaHwaETBBeFKnXo4fP7X3eBs9xBmc6RMuo15unuMdAC6Q9ye4HQF93tLxoEYL4Vdv6P",
  "key19": "21rLMkTcazLwnTEa6fHrGzLeq7RxVpWMrsfLbHUQPk1hMtYhHyovUppybBV3Jt9BKdjdaFoHwVEckxFSH4waAaJT",
  "key20": "WLZyAEMQ4QqhzjjU6LL7xjnvGtauLEyK8vKfuN2xpX61zT34CXRK6z1TT4pULmvMda4o53DSxuYpq5BmgNRRsyk",
  "key21": "4zotZbHiSuYDfuLsQy8NRQ2YX574gX5EyexsqzHWCY4p415dcsVLdW45XyrRZBDLuzMC9yAFEktXyBf1LKY3WHQG",
  "key22": "2cnr5xGRdcFNGwyiuytG1u2kswEDSPaWQtfuEmr7tPApGYq9K8tn5h87vwoxYAtjKxdMiK6V46b7cDA1PUhXFTva",
  "key23": "4mqux5RG2KQxHwuki8ZzHUyjaEFC7Le6z65q8xUiLsBr7dqoqi2khix26SnvDtq9FupAjjS21sbhoZGX4T7aCAUj",
  "key24": "4e4t6Zond3VSvjjK8vHPayEDpAX7jTQ3mmxNoJeKAeHuJUKEyX4Dr8ykRG9t6gg98h8q9K4efoYFJB3oWEfUd1AG",
  "key25": "4u6Npu7X6UsvQNKJP2iXRXoR2PgLDijHR294unNsfagMisrghrUuaCjFfBgQVeWr2az59XNnMABmNTrJnywKU5nU",
  "key26": "3Wh75e5V4fgQpeX4JdZvVNdnj7tBwRqCPWAwUWwLGZ56eEktSYYiYPbEqNSmbMkMdTEtTmqWc7FotcCSGsa63ZjL",
  "key27": "5sVwxzHnKYeEiTtd4Z1mz2FMv5taLCE57rhySMQdimKsef8AkdjtbtetZZ9fpodATpg6S8dKREswJ5furrTzPnk4",
  "key28": "5D5QwXLCBEtYNE3y6s1yy1kw6DQSQ5j9Mq4BCqFDfwgJte23vRjVSNnCU7r3n1m6Jkv2tCkzVAuShz5nuH5ZBRam",
  "key29": "41qBf52M3R2vydJwrFtNBmNtpbrNjso4CMF5JXyHuHzSSBYBEthk3Z97TYQeMk3dRh6Z9hdVFfwUvyESKT5kzTec",
  "key30": "4cEbEozguKes3PB8k2mpSNAQEdftLSXxosr14bK7tAADBhDpwf6yq2iZhBhfRAmBFYC5kQt8TeDtBSmzgP3TFEVX",
  "key31": "p8NJcEyL4TXTMCQwDjM7DMFFNmRT2fEvafomB1Q53jB1Gc5nPppaGgPKETSKennDM9ktrcp2FoHR1YszEMcJEib",
  "key32": "2f9A74g7DASnKTSNyFpHXpBxc8SRWZz5DBxEKo6hLZgnuA1DGiYKZi7Jj2ju9uktHf5XD1VnqmJst2xs6PimgeBk",
  "key33": "3t6FfKGBN2Q25jYiqUjiwdqLY7DoZuAGPyei98U4THZCFeNNxtFYKRZZbgPv2BNtqacYmvH9RKksXhGrioAS9rj2",
  "key34": "3PLxhyRsgGKQNxtafMTYUTUbvoTguUeMGh9ARojjgBsrosVHkMnwFdVGtP35Jjbck6D5nSsGTKDTP4C3pgYebfNg",
  "key35": "4VHCS1FkUi9NxUQnnu3wyabkTdu9GxbGnRiBVwEt9DQg4JUr8ZgJfekmhhhm27ewUxonm9uqibijgGKCMjTuYEe5",
  "key36": "3qbDFMdwMnx7LwvL4dWeSduJKr3ajVujpojbUyJTFzGjPaRRYu2fhdoo2cRNSPiwshDTswiZtGDVzQZrVaCMQieR"
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
