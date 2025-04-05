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
    "2wsqv8c7GikVX2Hm3Nd2fH9EUHGiS2MSGMbUomrjBZYKrtGneeN1E17kyTxKBHEs86MjsSzytLJvhu1rCoACb8JQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55mSmFQu2cPLFj1vRXosrQJzec3Uyei9WF1SXxGYjYhGowPTwE27r9ZqfKFfECmqgJBW79uyCGJtbEMSfWf73znD",
  "key1": "re9i4naEvQNAnzaCUTf7tZJRVtBydkMY26cUKXqBmTYdYLJ7P2AA69HtV41rdVZHCgtVF2wQDyCfjtNPE7MEXy6",
  "key2": "3eGQhvr47E1MqubvBHiPLYXCKfzuZvYa91y7E9qjMKzZoZBJ4rRLPc2N5qa8YhgpFKF48UXjA3KVHEUDif9FGAbo",
  "key3": "2fy2gaY4Y4EpbpaRLiKqxTMdrjdNwiSb74bFqMSFHVk2KZMFM21dktC2kJ9Ctg5yW7eJz2w1BXpggMbPq1DqNzud",
  "key4": "2pVBKLujR5Zjn5zdoUVZgHrMECqqr9FB7iXwkLk7oUNHUQkGp4RLamgi3QHWAuMcuqa75MVpUysTuJFjdoxB7gQ9",
  "key5": "4eXsfAgpwCf2yMJqc5YtCpQGxVe4JELxmKbtmGY6ufFhYomrnHW6stjpscZtsjoiqoty5i3F5ux31PjwBguQFiAg",
  "key6": "3BS83A6MZsNkZJ6NmdKcX86iVfKpbj22w8xFx4uWETC8TdfjWdTv6vyMwyVwYqv1KujNepF8gjYwZvmGE2wZZbrz",
  "key7": "27uFzFF8QoJ6gDaPNT2qnyfQX49mBfEETbYE4YBeKjhXZkuF1A9nW6Jv94xooVZGtRvAN46DJuAaaWFQeqHXuP4y",
  "key8": "4ALbahxjZatqoqgMZcvFPPqx4aF13EH8swPmRTMNdfvw4ZW77Wo6TZ5umu15KSUfMsR7j8MZJ4cg6uC5g3Pt7oSs",
  "key9": "3cDgcrdCTqtDXRtmaRHiKW8ir5kx4xqZfnJ5xeqxKoJTjc3FaaKDcpK8EaGyD9CoddWCBYp25PtpcfbzJtb8SETo",
  "key10": "2LCZMY15TKQiUmzdZYKkkaKJAiJzeeGexUVsKgWcgrjUmTGU1dXUsf8b3NdewWd11f7dJoXHj38zhRhsUth5idAE",
  "key11": "3NSDVZDtRXWhRoQRD5U9TjYPBWQ42dzWBLUunaNZ33n5DrjT7rjbHfUFjvG3UUSoEMvVK6VVWwj7xU6N7dpHsqR2",
  "key12": "5zp4Jaz2qwnK1aHDkULDTV6FCayekne33sFcfLK5ARbTSCvYMoykLwvdaGgK9hzo11wZtXpFoqg315ZxGttuGQuf",
  "key13": "2tCKkjhFYcCooEa3VhYmpvDvJEj5xBgAP2Ny5jWzfKFY3ZUsNbPLT9YPA7iBLrFkGAtLk4n9jViMpz1mpEXAzUCm",
  "key14": "3BB9qVwdZVQNpQSHouTNrQ9Tvc4bTkXaM49yFoQGFT3npdL9Cr4u4SgBKodBF3jDTERT26bgrWrLEaGBN77Be6mT",
  "key15": "2a8GH44hcJz4GVxpdh5XhvYVZyZrWB3ctSisCqetvoq3XTErvMVgbPEi7QrCS4jvxuFPGRv83F1czXuELfnUqBDA",
  "key16": "5NsGcyB77jk8pKEBv1dk1YaoSSN6nUCQNVpXKwQKuybBAGJE4WQXrGexgisaFGBhfxhmHEiH1FrnW5RWtAa4nmYT",
  "key17": "3HMLvg3b9gVApp5zDNqNPo9DTVDpJeC9mrAWWGSHT9SeDi9jEgAPDmgzHARLhhJ8fyRnmyvUo2vAFbQwyYyhFNY8",
  "key18": "9AM8jTYAuYZUDPRSoaBM4Za5TSKDfajRenPAweN4S8zSDKGt92Sb82dcpeFSJfGG9ffBa4ybeAmNczDEZRJQMar",
  "key19": "471dcWdeUKDuGXHoiTByLLybxW4JHwV55sxYXsnnN3h1Q2MNKyFd2eLc6X9Fooe2U1xzjXWFi9ZeohSRaH2WxaUT",
  "key20": "28Zq82MrCS2k4n5N55gqsBx9e1YbynHsqrJHp9j4u2yissgPKcnp7PjsKPxwpjdSmLNmTCfbVKZv4PkfQ6Q5izBi",
  "key21": "DthZdM2iEGWwUWZV65XcdhA9F2iKFtL5JCogHXuiTEXjeFTwQYMrttTFSw6PNqtgPTAvGoH5MSVNiCGtPJRAT7K",
  "key22": "5b5A5Y3kYisWtMvdbu3HGsdPUXpMimsqm1cuTmcfY2NR7KRrF4cHvmL9QHzAmfHrV27ugpKW71wynunLyii3aPzF",
  "key23": "2tmb6jAjt223jXHQbmaf98EYbaaXWa4JJ3KFK6M2XLEdahkk5SsFeCEDFsTbnrQuC1BBezw95wxy1BJjwM2guhVG",
  "key24": "5GzUZHAhPS9fhh5nDmSwjwotKMic7uesJcSo7mQJupoYdwQR5HMkPruHnAPT5uqmzRNfuv7CDwyxHcKVBeG1k4z2",
  "key25": "4EeJ79yiaBZkv9hobyJkwSh7HTTkRUJsc45Z8pRndtFAPdzUAw1N33h2V2xm2HY33tEo5Shjz4qAW67heKpVEcUq",
  "key26": "3Uxtjbzdz5B12ZD6UCYoBYSq6gryi7GL9bg9r22Q1WAy7yRgk3TXnYw6jiX3iEFx5WFg7RfAUegXLqeVW7o4GSGK",
  "key27": "2EHYuEmAA63csK1pZrwKEXPgRZomgSjx8yFEArTGcTGoWm5mAhpPo7osct2YZ6RaBoeeo7iWvBf2YPj4hbNthADf",
  "key28": "4yFs5LJmgAbyBsTLFWSeYgePmAmuJfvnHV7H5rXhvXQ8ghnn9x1eqzNQAEzJEFSocZMCYafQttMrxJbPHAjNrYHZ",
  "key29": "fuFsPKydm2JwxhB6o3BE5w9CrkPFyvPzRPPFMPN7ubxq5MWT1PYcnxQ6D17KY6uZFwzuJxGsEb4aj87YUzr4EKA",
  "key30": "4xeqSwmcEf3HcFjoyqzSJexiJMnoo3vmVTx1uc1skxXsAXo1dGKJHo8V5yCR2eFDwoBoyjQRdSr4PVEmCeqos1Lg",
  "key31": "4U73FhsVvMRjvmT3VCrYMw1jCugcmWbpK6jcBWnMfJm7vxdiyXWoJ8k2kRWQN3rdJg5hr89euw1R313iao8UVFV",
  "key32": "3XRqx8b87o2rGTWfuHW4nuNYboeNLKgNSjQKe5Wx9xzALL9CWiByQHymUq2qKzjKtRxKZy8FVTpXw2L8gEodTGU4",
  "key33": "4xkpiJJQA8cqL3FGrETus7Kx1xCywCxi9KmHu8RnScMrwKdNvW9oew4VkGyACc2CNFy2D55pRaFa7iJ4ZBvZN3Ty",
  "key34": "3D7NadqpQ4j3zPLNhytBKwS8bFusFb5kdzJFRd1qq6dspNPZ6gfW3QfuDdyorL3cT8dUBvYBPTjWsVE3ga3WzLfn",
  "key35": "Me2h9BukvDX8YxgkhEZU9XcpeBUEBHxRWzwfiiWF3EGLMyMPWHn182LKxbu2YsHvEtJa1rUAgNxnc6GBWtXoeJq",
  "key36": "cti7QDusjn9AJRkQwAqDSFTLKKPP81yJxmKJMt2SpUHcoyASHQDXE1yMypCKkzB5GaKAL3HGwyMYqcZiEUcrJ9y",
  "key37": "5hzp2GsmGJq8QJaoFP43d5cqmsswWYZ4QnW2mL64LyynLL5pJ9PqSmW7gqtZPd9DFXJKUZyyEbbPCZw5EhtTcnXZ",
  "key38": "3rgvXXXTiNCdhm1ykVrCQB6u1Mf2Cp2tmoWzhy4eLuM5cB1DbfSLKh2zzaq18FWL8SYp1Pdz2kDiu4m6dqAHgpzD",
  "key39": "17XuKxM4tr2PkoXSTpxaq62XRYcsxuP8Ay4Wv64C9L6pVkWcXYKTkqoh9MUhtUknyxFB1SsFVvq2h4X8P2CREuq",
  "key40": "3HBGztGLvAwBn9jvXPwdaUow2giwZKtKtStxAtd9SjnNyig6XaesgzQo5MCkvuhEkmgrwDqnxdf1DjqodCJsa7NB",
  "key41": "3zFDfbEY5tpmxMyL6J5hKxqjLa6XqcgaGKhGX7EcHpXz4mEU4MkdZBop3vGfg62tSGJc7eBoK19pDHMuWBZTbz2K",
  "key42": "5Q4qBMGb3qPz33HER1eYb1KR4tT1eroSnUzjP9mJefyRG5j5tJDdPQMB2Wt7JEdATMLGoRdwpc7Tndzt67yLg8eZ",
  "key43": "Rq69hk1mDp763QwR85ufnNaRXQGzGncCTswXk4UAWECiN1iJ3PuA9nZjcEhZmTYVnXcSyGdMtfDYUmq3RM51pNt",
  "key44": "3PPJ44PxRcFAsGxggVUoN8tbHVeWt5fZ2Qk3S3deDCwE6Nmghez17HS5Pdx1JZnH1smcMPefM4VHZv7B93cPBNAQ",
  "key45": "9A8unfsTFLNVivfeYAMLkEqWRQTdWGHWwqahdBAEPmXN7Tas5NKoSkULTL24KqjzkLiaZQyiqu93B2ydPVyzt9e",
  "key46": "4q21Zm7aJ3aMfe1qqLge7h8o6DYYvGN3j7FjnkkLnn9phZ6YugWYPK8ZA9Nvp3LTC2UP5vJPWM9aH3rypN1iFx3c",
  "key47": "3Wu2wpvvHvEpNqR3QXwndYAqNViigkiyRTBK72aVbN8AHf6oKauNZhP4Z2vY8JBbSiEZh4c4dFW9KU8nLpLAr7gi"
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
