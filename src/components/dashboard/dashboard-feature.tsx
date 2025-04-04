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
    "3XoTY19B9GAL24768X5fivPGbaB47gMzaFyxLCx96JKFWfCohmC9g1cDQxXw98GBXdprptYLQVQGAwnsG7vrNR86"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45dm6FyD1TuZ3KX6dFyt16j2MCPD9KTfXMarrsQnvmuv6bMfPhastAc2XzjtG9EGvdtiMft3VJihB9RGMFCBUsiS",
  "key1": "3oaSFZbqoouP3yL53Q32wU4uQTi6vn7UYzyaEfxa3J8g7VZVpV9aV2NHpvW9YcMtta5hTKAL1TqGLAeajxYEGffV",
  "key2": "3HK4opNHA6R2V5iAjh52cMJAmRPWuF5F23qe3bmrf4BP7ntVt3J2ysNMLKTRwv9UuWd9WmMuWzcDRiJL9tF9Bvi1",
  "key3": "5EkzdnXxXUzhNpzstzfQjz5XJ9619QbzLMGSfGpngk2XsckcSDhSpcoa8BSKFKAfZetuadnFqNHePfnNhtvmMQS6",
  "key4": "2re6b3NPeJX4webLtTpZjhBcubNwLctn8RxCnEg7JkiosUka78Ge4fS6AtTFC27f1cfQea4CWQaW6S7csaUHHqjr",
  "key5": "2PmDU9Xq19Pz9Dd5TpsDmK5ayuARMC1sjKML1xH5kzWpzunbVjt6FuJ5hLNvYzvKxAy3m7t6MeEiTMURMKjeiYp5",
  "key6": "3fHeQXHVMfyzj3geeBFhn8b6xk9CDkNTErFYFqB42911rDso9zcj5XHaMRLiC7gZWGzgw4mZc51VmDbZuBWVWsMi",
  "key7": "2yNZs3CbRLmQVkWVqLV9merDy8fU7zFmX8Q4b6mGpEfFuMb5cMjvVE8ML6BD8wusBY1wghFy5jC1EfudAfTk8Pvq",
  "key8": "5UADZWRp4YQquGuCK3ULssBaXKVhkN9Nvkk4wTB7xAaCew8F7sDA89psWSe1vtxjBWmfjkucA32GnAt1YGWeGJtW",
  "key9": "5gzKQTLXd2wcnEZr8igWmDcumE3vBYTabB2uPjTyWZkfqQve3yAmfRSpb5BLWhWaGM8LiaJy5oNdRG7U4t9aHmw3",
  "key10": "54oG6uWUVdtATBYszVpnKaKiu9HbpdvQPQmZ1YBXBht281h5EMmwhrnvUjazrpXBqDwFyoUhCh5cRbXjXwWNtKja",
  "key11": "5Bd7tbtvKbNf6vZSw2iQNTignFBip9HPdusyZZJbarpE1vaiWbdiVqR6Uz5Fa1zCHsPrbw2qPFaE7XRzcudvbn7w",
  "key12": "4X14eYcRkh1d8tHMj6mTMANs4EQG5Ur8mD1yh7To7g2nKkoeHa9429SjGCkGgZqLWau1qmP3Q9WupoCtDkfKVYNi",
  "key13": "3PMe9MNKngmJsKvwHvCRXKGRDhkun2QosLnyuqd9B5ZNxpLTUNrMt1eschuVazLSmpfDup9QrwDwchr9oRBoBwHt",
  "key14": "38zFgHJNndYpuck6UfdYnrGLW5Bjo4F8QVfHA3iX5bBgyYsSrp96oSywvYsqCye5hAzTPprFt8JfS9WY3DEVnaS7",
  "key15": "9zPKXMKStzhpagzvhrFRBuo5qKuQGhmJfMBpBfetcC7hiczsMg9yQgysj3R8iDS6mGgb1aWmcRXVfmfmLEsvN9y",
  "key16": "5MaRw7dBDvHacHUSo7xENsW8AGjvR2CXuSiHQXW6QdBrBoSQukRZ8kj36GvKFV2Daaphcz9xUq72WUMjxZjm6bKG",
  "key17": "2iFXKHhcB1dD1pVwhURJGgmfnKdjGhjVseEent4jiJMqbr1wgHCnA219VJRumZELtfHKUonVAYoc6ziEUPW9ospe",
  "key18": "3gr75v5r75s6QPSRLrUJvqEA6iHkADfrdKYsivmabXYr3evKvPtn78mJKD3oBC1jLSNmEnFZZtUCtDffdtVuz5te",
  "key19": "2WFTvv6WAhgeUqixb26HsyW1S7zF7w6UzefjVCZ8B4CHsiL2zLKUCwaRrV42bEsEJ7DpF63m7yP9QFatRkBjdhFu",
  "key20": "BXu4Mf6EkkhUChU1jbz7AKMDVtK8whBtML93FP9XYxAVia1FkrXCF9iP9hYPcHZofqQ1iArP24FTDnr9aNLicou",
  "key21": "33PLjbw6HyWiU4y7MtDmHn1KUdiqBHmtanPMMh1N3YpaT7FuSAPH42fW9Tsajfq7m69RN4iAigxqPqJXV1dVCFQr",
  "key22": "hKYvYMVUhemtB7XXoziB4oCFXK8pFsrNwt1asNe7jaXZrez4PsGxSoZjgLwiQRqVEW4e6abEcEfX3gzCfEMErqa",
  "key23": "5JYj5U1g31HqRFBaWgMG7ySZq8hHcmKrZSuye9pWntSHhKy297rL4JHUUUpmovSQnLY9Urve7X1GW59SABtfza9T",
  "key24": "4xfRihknjL5mBiwZ4brsoByMs4vEarsfT2pDzymNvj9qeSUYnUuoYvUfup8Jv3u4HpB749rw64abXy7GNZdR4Tbq",
  "key25": "dY1QErTzVHrMgEoyJrW8vyhgoAsTpQZgTKLNr9XkzTGGNgTMeY43sCFkvZXt9zy5sykKYpjrHryqtcesYccmt3m",
  "key26": "3aWQ3UaaaYb4UqxExyG1xbzKP5JT3c572bJTZj4xRtrSszb2gNPqJp8H8Ndgncv7DwkHQQfhgWz5todsF8VyxSRt",
  "key27": "4fLibemXcJ1cToSnmNon7VzWJHAhav5Mv4ToJ6btMpEgkXpToWJRZfRjxmWFw7uuUknsFFwPUB4eag9kTG1D5GWX",
  "key28": "3rFzJ8CTWdsSx993jVeXyBeeXHBQ99UAQFQfBTrgzWHUwKgchxPcjTqmHvKYmuwy3VhZVDikWzSSmbSjij5reUYM",
  "key29": "5EDSYq8x734Vu4a3zRjgMSHcvLz39qyA2QRUWqVwWj47vcEBbc9KiGf4qecAEBBS9mbSDfEH2swUVt5qPbQiHiNK",
  "key30": "59Ugio7DWuNQ2qXbQAMskwERUtrjMJNkXEz8epfnUoMJoENjNYGCtwt3bQFngAVqTu33Dhp28dodfWoy2D1FRGPc",
  "key31": "2159Hkhb4FdPgG1h8thJk5JDRBo4TdwmgCsztgTeuBXV2tvp6gbEkYC13Z8dEcYWjaotZDX1dMhvYRzcpfmxwp4L",
  "key32": "2Syv3qVU9jvJxTrDTw5gTb1vPQAwSSwHXPrri76u3vGY6zoZcKKhD1KdZ5rJx613HspwNucMjfjqa6dd4ssJ4W16",
  "key33": "5H55StQkAF9iBxDiEuU4H3rRPUsod3bkHbUDf74NRGZvzxqGHDQk1tE9VN25k6jAhrJdiEFcZPSEDXYCVR823Af6",
  "key34": "5mQzSc4r3hDqZfVbLwx75pTZ96P1BSM1BUM7ZrohSyXEnyxdT3mUohEJuxYxJN4mtpzN5c8FV37UKw84SEtk8YAX",
  "key35": "oHRb8sMhQHCSZbvkctj2emYkBMuKasATEqDvf53nUpvFUhpHAcYyhdC2vJLn9eef2UXMA4FF62nttPrPiYY44F6",
  "key36": "4NJfbRWmEPFyBhmZgd2syHDfQkFGtWjxWA7JBtsgjbppmP7PrjRmB2S3jMr5RxTyXVu5f1cYMgNrw39WMXKSRdm2"
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
