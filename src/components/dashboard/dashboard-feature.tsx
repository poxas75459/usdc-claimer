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
    "3HUFTMLpeafCQgicpESxGLJYUcurBJ8FzNm5VPe1Ef7q3oiZKtjAfbXThaxLz2Rtepo5TVk9UJLTeF2fSgx69orn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41ocsqN1tae7gDLifHxMS6x6bNUqU2L2P6WYdCBd2h5ZBbcAUpi8XbsYRy8Ka2Mc8W7Mgx5eSzPt6QZpgZNLLsqa",
  "key1": "5fU13ug6qJ4AN6zJuQ5epXhNGYLnB7pBLpTfVTmC6AX7kNBB1qJN2Lh4y2oypxMMyLBSYru7mVYZc25asTAZ4VMr",
  "key2": "oHb622RjSh1cJvbqJ8BDfr7BKkHigUfU7NizthahdfuJn9BLJSjVNieFxHSidf4j6AnYCWDoXTRVTp5A2cpATJD",
  "key3": "62zauGskgDdCa8Umr3S9dci44Jrw7BT5XXvdFiRASZVng4wmHYTFaZ2KM8cjMqxet7WzPFQ4ciLohm1M6ZV6dzke",
  "key4": "3tkX6roA5pwFyphkcyydqys22uhmMh9JSiA1c9pphv4NZhqADFn9sEDfEW75trsmENChaqvQVP7GuyYbB1pPknTY",
  "key5": "Tp6KqeZUJgJC3YB4MTXPCBhYbjNVydFAA5kV6C9k8yNX1PurhvFKgKnXxKnxmdxLRmEzQbPqQpLGRzgJifA8NWp",
  "key6": "65VPDuebXWE3pPMXXjEZbXhxhQrVrYLYJKMkaLxahMgg3Z4wMqTVRcA3BAbVPs1R8nv9NSUMio2WcnxbGPJvo1UC",
  "key7": "4FNGe1Q3FF2kmVQAEcJwhmXntybG1PjajivMAv3aEpD9GnhbeTpWPQXAJhXQRY5oHixJg7dJrwaXYHyMHdR3MQFH",
  "key8": "pyobRgtCGJtz4y3mtxWPzAwTUSnhb5A4aNKE1TBem4w91VMxk3gshTcSvTfGz1Zyg5rbYZqHuM3eMZe5toeAAm5",
  "key9": "3SkZgdvcCLW1MhoxdA1aVfsEYejAJSvxrVoGU7S4FRoSwXYTDWCqfcEu3NZTbV5iom2RiHK3pV5JTxv5CZXPUebo",
  "key10": "45HPWM4LAGkH234gdvFYhanphyA6vVcE67jkM1FTdPPJrenQduARTwzPKrX2yZMJE3uYiRHUMQeqiBKdFfzXfwUM",
  "key11": "Z7zKftNeQ8wZGuXe4zw6RigcbBV1raBiZD1yBZE8PmxHJHnDN6u55yBSSFZNZTRUq1fD3zXjFcUjLVNcWCQfMqp",
  "key12": "7vpfr9nkUBmrbDF1GwAamB9c5oGHtHVEPtacnbMrSfdS2hAe9KcsB4rEV7FKj9Zq5d58n9JGQKDfjUAbsKeurY8",
  "key13": "4VSDzDUE6mcQa472LZGUyqCkxehWeRi1hJ7mxc9PAUwVTd55DJWK9wbf32DTJVoyzDTJg9qjkfoz5zif3vccfbkX",
  "key14": "5cWMMTQETUc4q13L3789KqqbwLCAvdYuKZnGtJ2ck6grNpXamSUdsbkZKkRLUY8BnmHC2g5KM9T2QhbctR7kfMwM",
  "key15": "2RVJ8pn8ktvYkPJfdBfDc9S3gNkE45UCKZYECt4wMUnaTnGWzjMbSg51KmSH5b36W1oogxMYpK8i5FKL9n8iMaX3",
  "key16": "5CP3RKS3qSt6ZWyP3wfU9A2pz5NpridCWECZ1GHLcF1NZnr2LXKPcmkDJidRCZPCBuZenHPYsN4D6zFGgVCaqHqA",
  "key17": "cA5x6cGnuDuDNsQcqDykUQCT8AKGwfjRpzkUCdPusih6BHXsGaEBdRFmrHLJxoohL4Wq7GrjdcwbBevuatv5sG6",
  "key18": "4jnQ6S7tiXggiamF3xTn8RmuKUfeiiPRoxPfqhY6DwxMGJrBJ4gRgFQZQf5Lg7y3S9pE8eXKoHLhkYGqK9PjGFtq",
  "key19": "52ijxTwCSjrKysZdCKpuaPG9JRc29oKiLYLwnfTSsdzRt6QahD5GHMz97x5ESHu5BP3eZoVfz3ZvQUjjzq8Zr1CA",
  "key20": "2UkKZasADQmcC2iGJSUEDxKZmEzGHXyoqAjKHEF7Vn9bb48nFWY892XvZbTxDG8zcCZbi4PnocsxYLoKL2hU8nMw",
  "key21": "BgZ8grGpbvzcGMkNxdQYH2DzGT5ToPkowy4XuA8iMkXywuZT8mj9K9wMC2tBe49fNuGCWss97M3VfpGfkgpRpfH",
  "key22": "51ScEjh99nQPSdrK7RmGFvTjWXG5Rho9SUvi8KNEzXzZyPmjTMDu2dzULvSkUziiUjzidv6uP5sFvjX9vJSAVdSS",
  "key23": "2273y3sToMMr67SMBUmobpi7kXAfw4n8Kmkex3GyV5sqoKerEHqZ4sfwHmw3ENVagLpRZ6j5FchjLn5gAceFr7H2",
  "key24": "qodkPGpGRzoxCzqrKZLQ1PLDgnyF1gWkKXmHaUNNx7aDcx5BybrhC27enFJZJGLJCL7vUs29R6PdxhD891jYChr",
  "key25": "29Vd4jdewmiPZFtf9FGARgCnBR3qrrBmuh9tQ7UwBfycHj5nWhzEx7NSCTCbAqz2i6Z89sUi5HPU5oG1zdJFTu3y",
  "key26": "2pJMQRgaFs6nbRZH3AWYsfU47x83YB5TUMRsrn8FbuAJVr2V6ARKSbSunwVyCRtYrGPvzj5poQF5J23kaKSnYeTy",
  "key27": "5gZJ7H8Htk53qihTnuJmUb8kbj5JsXXtV5FmUYqPqQ2Z7z4VGo25C6tbG4YdBK3s9SDHgoaK5G9YVQDoRsf8A129",
  "key28": "5nk6KB45XjuW9hcTA1fL72GWRKy5SHLQXAzx7U1P9szWDVr5voF42WwnY9ErW89oD7vy9LppjgD7qzHMZZ2n8hKV",
  "key29": "4wRsPZeMLQ2BagTWmEaJamjFiUc1WTPvxf5t5VbKQM1hSKBCVHmG5QTPjJtKmufw2ATGX9J63jhv8BPmZMzcRQvC",
  "key30": "4pPnHWiScmTzcgGdencKnbRshzTmQtrQzHcd3Z69vGKUAqYiajD2bMht4cqa9pXMfkVAxTutoHVpfMckcm5XJSz3",
  "key31": "39aUKb1yqbRwaw2aRnMfTFrRGiJtmyzrT7uKPq2c4SCxKShe71eoYQ5LB3JGhe56GeG6c3CZh7TFiqJnRmKZ1Mj2",
  "key32": "43ZWCzoCeeD8Sq9v7K3CgRVJ1K73eaivXwXd5BFXrx4Qkqko3tWxG5Pb3FpHUKTUC472TJVQ5jUuZeSpndpJh4QB",
  "key33": "4DbjSfJe8T9yZCKupxKBt9KEDYc779B2cX8KvM3PQNpmBHquhyMPw3Fb5BD2RbHUxNjE7iZYs6yA3Eq1btutVRzc",
  "key34": "31E2PeUf9gta5oE1VMbRCt6RS15hYDErVbTqHDaGes8AnUurQDkvhFKyfQVKNxeze72466EMrqSu6msgyJyvhBG7",
  "key35": "4K3DE7pQZL4zHTQbz1roqjPUVHFr5gLqeck7XHSsNv3cDyMiGkvjFyY3THyQFM3a7DbfNr5q3hfiXnFppHPp7xuR",
  "key36": "3JoFeSV9fFg62wSWxuPGdWPfnWmmhmVntYhckvZeqtUNwRJmoAEiJKvF4M9WkaH2up5GbvAjAjwyEVW6Nv5TEHuS",
  "key37": "2yWqzmuUC1zkXK8CoWNr6jP8V5ybyG3FHUyvj9b6ATuPHouYdUdGTXAZq1hkDMPUJtCg38hMbucZXT9M7pPCBMCY",
  "key38": "5QCZiTkyexThFbcakv6GxmB3TJ1W2yT3JHpPU4hTSxYm8vVthGFXugWkVqeGU3GiydGkd6Ao3i76YzfSmbFPgieS",
  "key39": "5xkQfvLbtr7D7Pwz2npJLG5puHEiM5yoDHWCwm8KwzFyo9HZJS3PUAG8tyWUHKupHPWJu5rjqMb3BkFJXsNTwAUv",
  "key40": "55CKUWhsGutEDdKFyouAC9wrzRjTEtgfLKu837ym3tCTi8ekLjEGKZ9P92PYimsLvaQW8UpReHAZkXaabrkdr3sZ"
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
