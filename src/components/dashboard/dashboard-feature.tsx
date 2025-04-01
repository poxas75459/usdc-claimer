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
    "5Lb7uSoGxJdhiwvcSJMq1NA6Db8Nj3Tcc5udxN63tLiZyvXEdyhLAT8nCg6EBku4juZ4SN2K3uqyQUuHZR7Xavnh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WnztdwhTLbe8zeK7KK4bPAETTwgnWr4gi4yBLvJaKDC8uyuiDPsyne88xkK5Dkh6YSCEVnWETBPCXoXvPbfZrPP",
  "key1": "jXJqesXR4VmL1UcN2FfXDoD1gTdLWCSN8xKgVk3TVkUaSXYkhHaS45dKDDaWTCExUULY7TTWnsVyweJY81uKch6",
  "key2": "53RHcCjY4paZkejyqaxyVghf7NgcixQ3SsM8fkigbB1u7VePQr9BUFEX7bK8Sa5AsJJwxYTNF8b3Un7A2cHLcD6p",
  "key3": "3uWGkYXDEgvHezNMFaGpSMpYYtRVKCBtwzigQGk6i9P9GxkUG9N2qp8AYLro8ZbeyvteGBQQRLRwHXfaZw4n21z4",
  "key4": "5dUTYJ8G7zchr65oMSMaa8Mex2JnCdgBDbbLvqaNAFm88NcaRNh9fmk6A5voT4ifAqCjCezzFDQBPdc9bJKaMS2k",
  "key5": "4KtdzP7ZVXgWqHdcYuGUuDNh133te9jwC2B8XaCHpYgchjTEaibyTVwh3BDRNZyBkpBJresQyBH9HKTZRCLU9ozR",
  "key6": "3XBFxTh5o2wDkDQsoU1LdJfFALfQgqUZiG8QGBsWNKZ6A2Q4JNvVaHQMMPHxvigQzq5uttok784hRc36YDztY9dk",
  "key7": "cndaj1vyeaLfo7xyjxUqGq3Q4RonMc1BTEZ8BydumEMuzUtFFoaijqSFhaDQm9wTq322Dbhp6RapyfDvmpQjD44",
  "key8": "5aw8nP6xxUZVys5RHdwuXp2g7myvg4PGx9Tnx1zToeVMe3R1XJw5m1Kh6TjkZuTWojsyU6dQE4YfTY7doZzfCFZA",
  "key9": "3kq6b5bR5zkzJBrB7NRtD1GsGj34e2xmMwPWBfUdjTmehNdEpFdYc3xQPiyJiW71xhvzZRHeVEW4UaDeiDFPxHRc",
  "key10": "d1JdhFW7ihfRffqC9WgN376k5ucvXAu3tUfqsm3CKxe37WLEicKBukyQYtg7rgwpZQAXWAgSidGMzdT43N4j188",
  "key11": "3RM1cDtwYLTojcdUWhixVPBXpsfsDXDeiAHDNEY8RXXZEtviNQhMmxXvSLtBqCqf5s4UxXMPe9iN17QVBPo1QNoT",
  "key12": "75daCHKZU8SfxSCttZd7AXhLLAUGeHKsmfadoZvZkKTMHjMLvGf3iiFwxDFEjmnuLPBm3q3yPq6CMnKtxcTemBP",
  "key13": "5JRh3N72RczvvvwXHmiaPCeazkx94YWkrz3AQFngZTygasqJWJxTvCutXfFwvsor3pahMaaJunztD7Wt48xysPNn",
  "key14": "3DmCSdzxGigvb9K8Xp6MGuNsxJZr9AUPLr6WwBpBbUbgWiNyKVcVd3vZnnYRTntgoLbnSSWGtFLc8u5aBSndpV4T",
  "key15": "5EB8kCUCTUmCmkJhzJpqThZs3h41NugMAJUZFDaRv8xSoh1bK3kNRF6z29ebDmQkhEH7QvtnycZHbYcChq5kAGdQ",
  "key16": "4SnsQ1fWgDiYYnCTQfPszt2b8mJsahaPYGW13upMYPx5RtMNYPkvTEg8xQmJGbtwcgVfAcNd1rZhk5TdKfM1osy5",
  "key17": "5uQ2a7W9zo5gFR1c2CTKXkG1U2Q3Wq4s8E5HeghQ7y8nhREsx17hH5DN32v22M1VbeqjH7XYiCbGHBVD4FhjntzN",
  "key18": "4a42ykqqn4pcGKteZLCn1N5NDkV2WRwD8QvQGoKmYtMBbqdEfJCBLscLA11ajNmYFSYsVSY8gTji47Q68o4CSq34",
  "key19": "49sLYZbUDAcW3ueJYgGyHRpnchfopMDnZ8yuWYD6yXV7QKEUyVsKYV4BcqvVtU9uDJbsPTB7VFHpkmsdNEkkVFdJ",
  "key20": "4TNYivSzaRXuw1ryBXXfvLwVikRpeYH5ytNd4Uidpz14VQyvPNcSf7Mur5NDNd1PHPBAaxuJaaCiZmzqn9MBAdpa",
  "key21": "5YrThaFtUsThYW4y5jaFSU7DwTEuspU4TVrXoCkapNEAwLk8UMCyaQuobMaX3naTuPq1BLdn2iLPYjNadVTMd1o1",
  "key22": "36soa1eVBm4wkpquh1fCuK9uprjgbmuQJMdF32pFV6K5MAVLwkiBRARbYcv1vKFj15vBE3dDPCSDiBGgE2eRqvUM",
  "key23": "5Lyum8rvz3eFcuTmUceH2PZR7DxqPf8CopN947vNdKw4aFqW2QV8G2QcPahxDjvsot4YymYUgUQRkGMy2SnWgkMS",
  "key24": "5GVqoWUEkAjZ1EVB6G8uZnz7d6SJsmcfCEQcPu98N3gRaHuCBXbYBFA4TQPG6hAYUfvHowCJL5gujtGmTXKbe6V1",
  "key25": "2vMfrgTS65R2BZh16ZfAeavUBj6nGD63d5BxhsiuUq9968g6siorhi4AxCZMtUvY439eTSEMFCAgfjXFyzkZmpxM",
  "key26": "619iM8iF93rKXgB1TgoZPenJT5VSTu9vKaGehamDQGn4K7MrHCuB3cyMP9vhxWupZtYpnynht6EUTBBmugQwZGvg",
  "key27": "2VbozTyXBfdStgV5PZXc1zJVmNWZa57mT9UcUCnPrRtEYqFPDhaFzr2vbcMDfQGhVFpKhiCJ3HoaF4EuGUiMHo4g",
  "key28": "29R723SqydMxU5ox1hc5TbSsQu7wVnmCXpjx97jJojhCvqsZBNq4n3vnujgLmzvbXrkNFAEp37Uhf9JzCuYvUP6G",
  "key29": "4e5KJ5g2Dw4xGitPVPRnjCw58eYy5fBXmyW9neuY3Ww8cxetUotSgjTka6Tb6HHfhXn5afcpAJvLsMe2C7cybEUa",
  "key30": "5SYJY5fJoDQt3nqzB3k4c6xgsLCVGW9tK6WVvoQ5BfNSBK4xioQvnx1A5nb6UYgoPoqZCm5pXriF8TbRLjn8enja",
  "key31": "3xLHUMb344AxVePoNp32PLeduZJ5KcZL1JKAFZZG3ZFDq22J8Hj7DsrjcjNvtMWcXB13PGdLMkquNcUHGMGZ1xNq",
  "key32": "55DCN8MjUg7hRxDqA9G8QovSqRpNkswDg5RNbURXUgEYHDDqk6qtYjfodrFJTGBdCj593G8PguP5VYJyRttGNznx",
  "key33": "4g4r6urswPBqn3LskDZH4axGvJDkiPVdKhhBGbjUT5XrgmG4huZTb6TsnDtY4DvxDbdWTkmQYgA42fhW1yAAKhE4",
  "key34": "46JqkXhXK54iLsrVWTybfBKvZ7eXtBCMTPckMxMFQCSWnynm3bHcX1QRg1uA7j3NfhhZS9jqcbygJgLaiJDQ4kwU",
  "key35": "5xvZvTVBtF5c4P7VoHyAexmqufoZVRRjVevn5KyuFXnNf8f8pd6x66cjLpQHj7JymFCN9awWk5TvroDFr49tiviu",
  "key36": "51g1jMFBpRfdFzLXDTXgNKyV2JyBCSdQ3k3qYNYDcpiSrgXvcsg2MafiHpa7FLwaFw9GUNj8154HqLBH9nyMrone",
  "key37": "3yrWiKA1YxF6xZjJ2VkQfXwcsFDHEurrJ5EEuc3dFmUFJLYLzfBhiMyiDsuV2DJoK3DnvmkTDoTFNqE4gS2Ho3Tm",
  "key38": "5T4Uo9NpSyj3uSCz4gCjAezBJPuY3Spb7pEeL1AW6yUjfGxHUxNYGxhFaLkbmnd1BAj66Apmodz75JZHju1Lqe9n",
  "key39": "5N71Kj8L7ejrE52ADM3Zjphz7c2TnqnAf7PBe9qWqL7Szod44uQcUmsHQWLmaDvwzdyUqLvZLYwP2DBFwnTjHpzF",
  "key40": "WQ8RD5sFQfZx4orDNdhcfeNGwQgvZboSSbzkyS7eRYxnWZ9j6RcNwb4rLdrdBPCQRctEbTVBMvT2AuVB7NejQk6"
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
