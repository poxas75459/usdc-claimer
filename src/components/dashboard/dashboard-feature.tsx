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
    "2C9rZ5ZHrwTtYvTyV9qbgp6eEkCnqozL2K3GuyveXyWnFxPGfeACWGdxJum3dRNM4xMd2cLDjoFaxKyGmHtmncVy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5asGYhYWFK2HjPv8yXhPBXCLXmYi9ugUABcBvrN4NG2hEeBEFpLgS3VyzuprsPJLbhLvRfb1oKs7NdwMMhpzYsP3",
  "key1": "zJ3nMtzneRK2V6jE4XSfbdTH2xTcvfwnYBmn4oYvoQyR6UKZGoVBSjp45xhtcAyyWcCoacJ1yWgXa7vP3Xae8xY",
  "key2": "4y8jb2dZsGTtdGxi9X1bFkExg5vWrrwp3PDPxqgvcAipSdz3KhMcqmzxrh5EhA1tmdcWULDsRP1fFhNuMLVoDydU",
  "key3": "XZsw5AVxpPeYJwb1AyFqgtVW11YaiHt1aSGBoowtUKs7Zka8iB9jhWaDpsE3odwdTac7SNVZbKWYahbgHFDhdfQ",
  "key4": "cM89QSZD3Unmsn65F1GDSz89SAv7tR4PQiKXbzxJ1EjY39PcQhnEUGVrXKYN6Akzwig7w7CjFzE8BxNUYN7NQDL",
  "key5": "2PjhPQfoiCgJjYV3xWPvhP9q9W8D8c8vetfduibq5xUxMq5EmBaAiRCLGcTTjpeXkCnfmfrXCg6xfTFE9BhHc2fQ",
  "key6": "5hkwchYFGsnHXgDVuPmCbbbPjZgFYUQsK5WY9xCMMy8EgX4rbRpec6GBmUGgSCx7XxG1YbJvchA75QdivSmygTbg",
  "key7": "hkaCfzMrK9acbj5CCsPYmJY2ATg4c8VU6uaypnnpSvAixJM82zt4JR1Wvj3YUAcbRu3PNZDotzLF43e19pPoykr",
  "key8": "5dpm94A3T5TXJV99N3mkpJPhFqTf2KNEdLLL6iMmVUcw9Vk8sGUt1RY4iM5eY3nRtKHYzpK8vTZPmTYEWpnodmvJ",
  "key9": "4YjjFgbjEhRMiBqvLzoRTQhjqZAAdBoEqTAMFTyTWXNds4TSgQQUcmZdAg4Cmnv8mnZygsADT6Dy3NN7tNh73bNs",
  "key10": "2RrC5ViYAjwgni2xY29k5WCbRpNP8wL16J4ZmBZM7UUzqdJUn4iovqVp5HaKvm7BWs3wsUou1Uy63RVTSFNSZeb2",
  "key11": "2qdnKZT6hheo5jPPufpkhkrooFVP3fb4sJSwAFAGfDZfeijwVAE2ao5taZ8Z9yiRRe9w6snXwXbvL7jSEmHiAqG8",
  "key12": "5hVb239G26SCCqCddB1WjdVounuQcnuuoZtHFhZ3sfpzzFan4saDMRXx69LVWFphtxc2rUk2ZsCYEwe2aMWYFszD",
  "key13": "2dUKfR2UpjtzAbdHVwYNq1YVS4pL2vLVCCRD4DQ7D1vRJYhjwFwCy5LUaq1ppPQTCKPSpD7LctJt9mjSzqbvcykQ",
  "key14": "4jZN8fSAZR29jVxvThtHUpwwvhDypYQVfZoDQxb8AqkGFYP2C6tBPJ87LZrRgz18mAqarJeraNVWCgc1vsRawy6s",
  "key15": "2BWZRjrBWufRVZ9Ai2V1EXtWv4rn7aaPtCN1E1HL6rfHzHgE9jsXSBo7Zz6yzNT93jLftunK86gg1YBXuRYqtEao",
  "key16": "4E5reU243Qzu53qdooH98ukoiTM8LxvT1vJdrF4NCq2QDA1ZpEnXmjuWf1TzESEf53EqGbpy43fjCqoxDFjZVenB",
  "key17": "59URwQUDVDXLj4aZ6SdyC12RLmEg54qbxW1Yw5aHE2FnHiikbrzSg89L5D1FZinBGptj5ozwPV3TM9aQS919Ko3Z",
  "key18": "z5o27XFJj72PDwHfeNQmEVkjmmSNT63vtWo38hWnqLdcCVAgfRy2mJoLgqrUFNnPyNJyFH3pHozXQhZv6KuvY8v",
  "key19": "3WDGoRS69pDW7VDe2AyYxs7Ufjj5eVyGWzUZFvioGB6As6qWLvx8ZLw4KioddJW4mJDcyPQgu3ZSsFKGdCrcsXrL",
  "key20": "43AeUaZmZDLJnT2tgoGF9AP5SaZNrvoYqFUdp2Tgk6dRSWESSpGSeHGGddkRh66R5MqHBTqx1RAocQy1C3AV8AmQ",
  "key21": "3N1f8DWn6yajBGLh2thnPKyPs3qyMshsLpW4qdA2TFN65XocSWkDAskrrcepK6ZTyt9rrFH1XuB68wLJLNTeotje",
  "key22": "3wt3s3aVrKqkfsBGh5UEWQepFDygXFP89UT2GhsXhCbFLGDhgmDfxpmNDBbBq8cmfVyBjwXiPqLiFBRcb1YBh1p3",
  "key23": "3Jb65CriApfZFncj9y8QSAacHpkfEBAUYmkxYRMPvNCQCJv7CCD13bMzr5bioyApXTm7RuPk8o9RdesMFYunP8Y3",
  "key24": "31JVZ2x3LnwTfLwECfarZmzBbsmFqotzhxjmKNxosjP7zoUQJa1p3MuKQXUqFjp8GxmvumC5RDw4D9bEazwCgcTx",
  "key25": "5emZCyMNnWKRca4FvAsof9RyHeoVeWPxjUsLGFBWXnqGmPkrEnXQdkuL3ZxcrJuc4MucZtitfuofVjqUu4Z1enGK",
  "key26": "4ngRSMWHhRAXkwQVwRgCLh32egpWKVAC1KiH272qR5N9tAT6h1arkXJncN7xzKj7AuCPUxumfJw5FoWQLSsq1dFQ",
  "key27": "5z2FPvbs8wfVuoJ29unZbDtkNntXCvUMSUEaFuD4bLXzUQ3iA3adWKegt99sTF19T141Yq92gzSWB7pvh9Yw7K56",
  "key28": "2Mc27KarcuoC26WiuQcrY83PLiRJRy9DssXGk2dPgjVEjrcPf85qvt3jHTZup44eTr7ff1XJsz5WBPDMxc6aA4BM",
  "key29": "2BoEzWRxJHBp9VComJCS219FAPqGLq6qGkvfEupw7CtZtv94ohAKhnE4DrZBfrKPgU7rVnJuWnmF5dUGVcgXmvU",
  "key30": "5ksK92XeMS2Tt16Z1L5uXEyqdBhoZqdwJsxayvwQjXhjAsurwgjmqXLQMoV2Jjp9c1cC8h3U2Qo3UxxquJXD7pfM",
  "key31": "49GpUVXugH5FVHpDYbpSrXAcraAjrREM1sDKYeszHEwNdTV3nRRauDhooyjZqnR7M6JCuhuLJJgVNUXB4FMDgxxo",
  "key32": "Kfw6bCfkMHpCvKdwbAQ1EUcxfZZzP6Nkm1c62gywcfMjhj55g9ziKz5pRWjSqs8dqGtTC3easKP9EJVpJfu1z73",
  "key33": "2zaAQGnTuJ89K5mDdfUv5eJMZ1prRJPv1S3v6wTCHUF99ufrca7BG9e6jtP2Vyw9LFEuFMYtHC4wR927VFGmLzF4",
  "key34": "29hDBq6gKUk4mZwTtDENLwHJeKUSjuy6wEZ7G5RzptHneZiQMCmbKNrTjJkdPgFZ8Y6fuaCRVzDNp9fsv9b5WgtZ",
  "key35": "52bFvhF8Vng3hqEQbunjSTdbS7UsCGANTFE4QVpteom87o8wAP2g9p5H8XW8gdzeSwygb3zP9eXtvbuZUovuo6Jc",
  "key36": "3osB8LjX6er7QzNoZew97BK2Fn2CsHPqeg9QptbCJfCBe2P2kGe7F4YJ8hiZyFXEKTcZjrTi3Eth7TLE5GeG6X5j",
  "key37": "2FxyPWL8b8RYRbbMtEYmVATWQYJkZ2FDdpcCLCzUds5PANZh3TboisgTSewX8J3TiZdvSsMm6mzxKXMwLypUifPd",
  "key38": "3oAH8bEzYHA3tDbnp2dTSUyF1hdoqp4W7TknSmjcesVqeepGHPTso8GXBVVuth3K8vnsptpSyLBjrC5EEScVxfb2",
  "key39": "29d9k5mrBbzerEfYR6TrAzTXrNChWMHS9JEbDXgtX19MHYiqNTHYZVXbSuTGVY6oDQ84PnBbZF427iWsu12PNXW6",
  "key40": "2Y4aPBUJAsVJXL6gu7C47AbnreeV5Y8zuJYLmW78SvqCXVyKupE3x3yWeHVrAoVYStqWMTqFC6xdZjzgs6eQuFze",
  "key41": "3o2v5PmcP1suQ3cd3FaRTTvwiCc94p3hWRUpaHZtckfFRSimU7mV3wU2PEyt7ArkbUKAjw7RUBSAcWodbjdTwyjz"
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
