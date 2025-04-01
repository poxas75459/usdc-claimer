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
    "3SyHUHkZpMSpd6rucoT7C8Gqj1zcxQT7WLBzRZiGbwAfFiMkTWGr5G9Yrqauc1FeW5jijDsHcgCyQtdgEzHgWjKM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Y9Tixhx8bT6wdVjuoU87SASTxkVZvKPLESFztnoCM9VNuMinpAdoQpYpen4CnCUi6Edj27Xf2bVSPpxUNmyFXGq",
  "key1": "5zu4ErPbjM7fEEW2jHDciiaYXuwNwVpUx4AHKp1xYNuyHG3WH7fghM4YJiErrwGHioQMznuzJ86jAc5ubpDomuBT",
  "key2": "41fToSCUtKravMduQoa1xYMRoHytLvqkxn4wsTKUSHNxEjpduH83nMDP4SAnVVsDUdgHCffH8BGU2TqyVhPT6FsE",
  "key3": "4t65NUYdiDvuqpS6RNxKVy73Xuwt2VRStbrGE3P8ekuZqdxaS8XHrp2QXSCRTVLu2e1waifFVwtwf1fJ3AfafbVd",
  "key4": "5FaXetDvYUyuNH2nJ7QPnq1CpHd8Wj9brFgwpBrx6HfBaHVfeHAWbjLGVQexdNWWSs8icB8BLN3U6KtUsm5Mxnkm",
  "key5": "3Y3ZpR27rm5hx5Kisph3BB3zEjdnEsGfirKRWjWMYsJnu59qsaBEQtwqNRmpmDDYaULMVJVCgo4Pvhyg5HasZ9CK",
  "key6": "3otys95yDQi862JnEX21p8qyb6qh55ke91JvNc1fLAhiKEoUne3gpfxKiAAQTzysWo4kjD6kALq13K1fReCK3Z7c",
  "key7": "463VzzW6XRinSMjcmEGQUbQGrEH4enLKSE1imf6cSD2MFr1knrw5C9buwu1TKUEzyemiy3WVmsvdE7id43zazH6q",
  "key8": "4mkyC1x5yoGq4iXSdJYKVj22PLyMZUBTPcQM7c3BFhVX24CngQbPs9JbwDR3KNdxVFX28uwbnynMAmT1a9VMCzkX",
  "key9": "5uhwVZMSWuFLShFsCYneo5182q23iUqS3vW2GvrCuMT1gF44sdxb9pm9QkHvatZFMHk7w9XJp5QN6K8sqVjNGeUT",
  "key10": "3iqB7oanPuby9XXnKwToCvv1DSFNyP8WavcuMQwk44HqxDevrLyQxdFmzjiVcwjBdRCZXuAs3Vx2VysSpExyojNo",
  "key11": "35bsHkA5BH8DidvRMvog5pLj4G4hmeQxEZVf88MhtzMtEXJqQePw9FWR9m9cjN51DD2TZtrEyjJRoMwwXnpwvohJ",
  "key12": "4932QSCViNwyw6AxAC5shjCThdnpHT8yCe3zkez7QqWEJdxHYzyB78Pm38Mi3NZSD6yw8WgU4FbTeHmkj1q8YSbJ",
  "key13": "EE9fpgJm99QvxtPFg3iKWQJgCHfeCr9MsBcjG3okxuJvPxZ6HSn6HsFhw79BcSZBzpnj3U94B3V7zoKXgcfUg9Q",
  "key14": "5whkwcxgwfxZt6tPtKgvvvqfzFFUpoR9MwXZ2BPG3RBGNPzUWGrqQafvwJ8UeaUTDiZpAATeBVPgAB9YrA9UQ48R",
  "key15": "Jrn6c3p5YUMSkrXBj6UHutHkyyGbNHr6qqod57hUvLZte6cfMQGprw61fsD2UfQKmttNZJpJGJ3DUvkBUxqDbid",
  "key16": "pzfvnZ2WGGr4RKCi4fWzXZ7KVFmYYATdWxydDkuvWCA89MBfr5YP6V7UgTZanYWxCvRWMHZTA9vLYXud4FMVgkn",
  "key17": "2heVQZUuVdasdKrZ9dB19BRamKnwU3p6nf1vvpDQ63ufZDmkrBHUUU4Gt6fZc8yxRWjyWw7SDqcgR6PQ5hDMwjcR",
  "key18": "3PX8wvHvYzBy85LXqjafKcDrS5zogrS9v5iWt8xDxn3Q3NHmeCC7TLyqRLTKriXXPqCNweBh3jjDbYo3UCsxtqvY",
  "key19": "5UPsYUTw2o28UwyLKfqB18BoiCMxozsgTixs5ikECEk4vmf2C9oaW52sHTPX7JKCkomPra6eLRMgPXNZFNdL4cJX",
  "key20": "3qhJuaGtxaka631sKn6pRrgtvW6k61BffCiH9BzkJosBFUFgj2NvWTX9U6tA4ndqsBweWp9zr23GxfiVbGC3BiUS",
  "key21": "3WA4LKowxyXjM8hYbN2JMsF1kXJXog8WzhwF7weuG25Bhx7iDrqkz2VZsS5uzPeivadCu7gU9qadiw6XRvaTr8sX",
  "key22": "2zG4errfadJZubQdR4qF2QRSMLpKFXYx69HD18dVw7Me64cEVW4Q5ffDHfgKc8QeJaJbfB8wtjib5QhbuzcoL9tx",
  "key23": "3ixk68qrfcHWQnqVu3WR9uK6KZ24Ds7SN51KdKThgmeXThTEUqMZSA5ioY1eeXo7eQFzsrNXKEpRZExSXhvoRysB",
  "key24": "22Nb6QFhVxnS6LLc1B8yJe8C8ULuBsDHrQ2FAEHji9b2FYYZDxvqxvGVbYCE5FcijqDLKuBGKh6qPdMbcSxM1msn",
  "key25": "WM3ewBXiKesGVSwR2GsuGCqXcv4jjJqfmXg2Jt6rxFEdmaJn5Yng3xHCo2xGz14XbiLfwHBgftF4qBkr32jaHEt",
  "key26": "4WtHqKyH7RhqgbcU2oEGn2tkrSQoFEMY8NjuFgVPS2bkdmRJvhN9UUHT2dCw6kgHB6brCWbiqETEjiUzH1DiQ5gN",
  "key27": "4WhrCstF8Lu6jvXg5YcjqgdB82WQUzfmfMTcxuTbGoXc9pJPY1zeHBnqTMK6Dd1mVHQze3qgpcDSZXfSRQ5TqHVu",
  "key28": "wEx24BKLpq7T69AmEGJX3iGm4wiRHWh9EktuDu8tLdBTXsNhNYZgp6q1mG8casnCN7qT7MSqCkqMZdERhjQSpC9",
  "key29": "2pNtqHN8QFVEoJhCyXVJ9d4sCEFiDMFNRTaj3h2iFgmh322dCir3WvqU3ThZBnG91NAJxooWKRhanfA7KQjxEzXQ",
  "key30": "ZQYfmRwytx65MAAoDh4DwiD3m7m4YKmLRFr1mo5cwpoyMMWssv4cjuCtfh62Q5JvtAMqSCZkryzS9tjjyRDvN7M",
  "key31": "q7JFYEBxb9ZwwYpuYHyYWtxKnwT4nsWGoPePAKwmWbRNW4gLTsprNttm1h5LF18iMo9xYLgSN4MLGRyehPMr3NJ",
  "key32": "5T2TVJtbdu9HJBg8u4KT6DvMncPbmmAFB3ccYCqic2KpuFvEAVV5diHKteYGF1XsjP7RrqkvpY5wvk7AZy5SYvD9",
  "key33": "2vaaVjtsRcLCVMvXo7uRgUZSQwR7qHH8aatiWCNcfuqZgRwsihhSeuKkuh2znkvTeS4BTjCp4KW7rBi8r25BoJDQ",
  "key34": "SGhd2P3oz2LRn2pRWABPDvzemEr5iY3NLBfmLt36N2ea5QdaFE4pfkfEL3EndqqcXmGkgVbMWG32mwG95ZsRkrC",
  "key35": "5kDkiYYZZGDhLnER6CuugaAubnm3aRzyTKyX8T4WFKGtG42YZ753VLjynabXXvTbXfBraBYixE2g9zPSVLS8X5XJ",
  "key36": "2PGLVpHKTwTaVPRUsGeLk6mS2pkoKBGBRMMKZxm7sQDZKK1eJjAx7HjeE8PLeM7SBbdVDMSHWgKdq9mz4uscYYw7"
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
