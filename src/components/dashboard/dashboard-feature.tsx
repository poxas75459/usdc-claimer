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
    "2T8rzMHv1uvNtBMgPHnBWsAzgNNtcnHRXqxpBtwJM4ubqBoZwqsjzYvS7pSnCx4Q9KqwErSjNgr2ECt6BwFC494k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "665RdBKiK9UYwN9PqNcLnvpX7KAbbv7vQvRZwk9nRf8zdjtAD3MqLCgXmEyv63CH4Wc3fFJ4sjVQqCPbFSciJmnK",
  "key1": "aT8StQ4BLxDiC5zn3AjtcqWX5dGwnsXEyxewoBQMxwitwuG7VfEHduCMD2zm5bniVsQxdy8VboiLgCPFUzYoZwg",
  "key2": "5snyTjzG9yKqoKoJgVC61XMveHPjg5s3nm9Nsnhdi3PgP2qP2WgRtyacGPACnjX71GgYLjg3QCxNzt35Qi7kt69e",
  "key3": "4ytr4V671V32ouEZtgY4LyUdCjp3ruPBjvbQSyfLMghQqJEAzHbAQZgLq3F1pqPfGb74xiAh5Hi2RL26wkCokXnd",
  "key4": "teY4WLkewAvSUbesTg7QyDhKUrDuxLH8A9wPzMHrQYVNkHuUuq4E39V4z4aCCASsjyw1gFGm6Uha9anB39uTq65",
  "key5": "t8HeBCHYoKEGiYTtBML5TAhNP3Ae1YTv1ZHRwQHKHF2hvuLNV7FKe29zzTFj4qzjmEGxgAedzAiYkt1TXSmhy58",
  "key6": "3str5PAUZv5kMAPeiXAp3GzcUCE2THBsRsmWQt2To483XQh9owQRkEJNWqiCVRV8cDotwb1CmUq8F5aTJSNttghH",
  "key7": "29kEDEJBWdkZMprv8UWUSCVh1PVTzJvTKg71Vt2zjkC1aQyMWunUV2L75VG1KPJSsW9uLoVzTEgT9Cs8gX8C4J93",
  "key8": "rhETHd6zR8HuCCheqVfbuZyvofBFSVAc8KjwFdUqr3Vqf5oe4vHksjAdHijQKCWpjSDTneDWsGtULTvsf7aa64q",
  "key9": "2X2uskRaaQwZ3dsPjHaHu6KVkBEQv22cLL4dZh9kG1Sq2zKQwSFgu8bKpnr8GQujDebqq4WF8bGgbEvMDD8RMWnm",
  "key10": "38FmKDba3J2i86W5bTsewbCK4ggSxnZJF68vzRmX924u8enPwv99eq3fPrtqQrYu8LJqiB6iJSeHWBTs2Ri4Jueb",
  "key11": "3GEogpcBgtp1FnyaYxq6txS4DU9iQnBSoyU4DUW3QsmsfUbmwrGs2RrDfWkWH3kwp1MzXENnSqQDd1UFPMCGHehM",
  "key12": "5XUfkm2iEwbWL6hswk3TCmPST1rhGiCbDRvBdykYSn3hHCzXZDNiiYanKNffv1TFQkd9J4NBguM3oa1ZbLyLsvoN",
  "key13": "3kQRdsoGD9gdHfioJpw4VsUnpxMo46Nk7mmWo1eeVzm39TopgGvQkR7pXmusfkYGcj5dqbomQB3pWDTZxzvBFgoW",
  "key14": "2DHMTkShMWCnFm8ipz8KwvCf5AuqiktUmGcCYbN1yEMBveuVkezZCQZbVU4Mo398ZsUFyVVsknfiQFA57W9EKQFp",
  "key15": "5BXgG7MxCvBXioxBDY7E55Ybb5YawbDPCQg3HxKkF14CayfMXLgRLN7ejbtCZBSBu3K4f8C13Ce3v9MwFaQxMxnU",
  "key16": "5izPSr6vwGgNt1jp22VAXoTpi72stunUg9HMeCuQx8ag2duH2BY5byWX8ssQVUojW4ArAkcY3HbTEkDDLkCsgD1X",
  "key17": "3yvAbWVA2xVDg2tMN66vjKfatAZrb3ikquvqiHpdBF62jiCHJLzVFcvbCQQHnkYQN43JgaJuS8SarQ8bh7FAD13R",
  "key18": "5g6iSGcJ9Eg15D75zPA1krV1VdzfmkHUo4QicvMJix9oe49tsHeewLBnbLGumCvT4i5YUPfPc9aHUS4WpMU2QCjX",
  "key19": "3sxhWHg6QCWd1CqUxCbiXaxbzGfiDu1jXU24BgrNfXqUFbwaX89Fbz1cpUGRPrYRAvqNA8pAErTgM1YJMo9jNEjP",
  "key20": "UzEsQk3yNU8yTFmX9YRz58gDY77RoYjWEpFF4bqjgjacKBGXEZtg2gtCYwsgFGYn4BA8WBygVr4tk4SA2z5Kdro",
  "key21": "2uoDS9ZQsztrBgWgUMqt2gwmXMs9XHYQcYPUngigqxicUt4P1e7EC2oe1hhebs45tYvrkPVWhyx2mJyyv1dD2ReB",
  "key22": "2uDetD8xynFznQiB9NxzMa3qmvZN3CrZ9RFTgk4jyF1Jca5PCXAKwf4JVkx4zouo6pV1iNkcGZbMVmJndrSL4CqU",
  "key23": "vLr6k6m8u7MgHqqjZgHRpq563gh8MHjThw2VDnYjtnubmggXfu9mXu8LBxmbuNsg5AeMnkbrzrkYD9poMv93PLM",
  "key24": "5uy1pvt8BPkzXcZgZg8kXVoAfU2MQCZkes2BPwnbdDsWTE2sdYpP3Sa1RB9AxDeEV1stsgJ7GAMwZcMZgigUNXNy",
  "key25": "2zGXB98o2uQDbMvsZKqFyhnD6CiDbuwTgR78SobbxBJaQGkrfqfBN7pvRs3zNDDcS48HD3a48DtKNAT8HHuRfeJa",
  "key26": "WkuEgxkhnWJ2xLSPykpsQWcW1xPyPRgTAte45yw8fAAnP9B8BajBvikdGNGMxZLBMiJz6XF6PbrfZYBNHuv6Wok",
  "key27": "4b5rGND7fAre5dZ3qdVRcixeZ754ve8azFXiadZzQwqK8B1dbij6PFpUEJz6sG6F4yMUfo2Gz636quZtQ2zm1PiX",
  "key28": "dwnzhM2b6JpwJHaLMg4iMEcudBb4AcAMZBEnpcK3D2auc9Pa5ce39pLJTotFVSZjirfxfgKVaY4FdmiA8NBXyyb",
  "key29": "4iDKn48SWTsJP7Ex7aPmeYe4Z3ikg7ggtKKE4BFiHuUxRepfdkAwtfgUQ7YJeHJJCJSPjTPyTXvuFykhwu9eJteu",
  "key30": "3jdA9r4QNFfr6DMm2amZbVbX3svKB11SmqfpF3CsBzQqCdQompnpsuAwcrRmpWZceQjC3ZKMrekMohb3j79bwVtr",
  "key31": "4njp8orUK7wcqXjYCSSkAjWR7pV1fAFcyWiqARgYrT8aQBZ1NFJXh6JRXKUYNn4Cz2mkyMYZ7NSi4NYLc6FA1xk9",
  "key32": "51mzRq6kzveDxB2D9nMTyXNmGFcABqTJvV315mipkE3fdB71MZmKXqm2cCmj4TL4Ejig64gpZMY6yCF2v4QX6Voi",
  "key33": "35s7LgEaesMvFr6FTfqRZp3TRzPb6HLFu8UxtkU9C5MK6tUxqGECRwZKtxbv4Fm83FjJRQMvdtuZfmjHvNNdZq9s",
  "key34": "DUtE2bZaQigA3Ge6AfxNy3TxQWiT5cpcERdZfLeYEEMaUJdtBHTTuJE1wbfNfYCvVqDVPLnN2rADYWKafX8P4uG",
  "key35": "3f4cAwWxmAiTwHc6PTZvtwwA1AGBtZzoTneb3qw5eydNvk5xR3YdsnqjMGoGdZMVZ6rb1x5LQd5KKD8Myg378nLc",
  "key36": "4ki8aMTJa88ABwP5qDxx1rU6wfxSWL16tyUTj7gaU4cZwmDZqKb6W2b72r1Ww1whKDoHWmUVBr5jpx8K6ciNEkzw",
  "key37": "38aUC3GjaAs2Sjp3dX2hmr32kAPJqCDNzstrqcibA2HNPm49SrSU3xd3Zek6wAzF1Acq1Y6JrAB3DLnYqx8t9wcD"
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
