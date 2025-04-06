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
    "3ELJf8Z67qS31ncLH9WBEtWayqmLq23shEHeDEK4Yk1FTrB17BsmPNZMpos16831SsLzNayUmvy1CYWETefdSo1F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WAN6twLTqt56iugtQomVSgQyAQFxmV1qXeFQW3v1y5V4LehuvuTp8e4Zh9mAG2PgRjKt27KwEeBQTB48i11B2QS",
  "key1": "3JM6mnTHKJANZimZuSmct1Z8pRbvLo9pgu71mrpeeXqRd65ghQzX4TzANkoA2vK7zq5N6Kh3SsnHLe5V7RWwe8EG",
  "key2": "5Thc7uiDL81AaPm8iD2jja9cqzaAGrcFbFuYgoHqvN5HX3KPpRSJrhDN6mAcvvVMJqcnZJgJ9zzSYYS4KtWGdzB5",
  "key3": "xDsuKvkcY2AtgMoXDGmYfqurypejzmSASdkkBUCGpZsHuk53RbMo1vhmqp73ooorDJ1oYxsVo55CTmPPqubCV3p",
  "key4": "26Cptxix25PACk8PNcvhxk8yt5yfx6n3D5nwimqJN5ELecYT7fZq5j63VUTcnMRKaM3N9ZZkriyB3TDFGmGXqNs1",
  "key5": "2P6saBhiZ75g5qETnhskudpEsubNGgJDE8frcXR7vsExAENhNVMynNiQ3kiRRWGENXiBgRn9DmHohkXvp9WyXKjd",
  "key6": "4DbEGJbExoS1vUbyTS5tfykeRTjn79yBLur7i3VkimiY32M2uKcJ89kiEs1fmNvHabwngmtzWwHQtrGKMX8QVfGh",
  "key7": "gLowNKnFDSNMBCXPxWCDfAzJLKBHccM2yzNG4u2eMFeqYQT1L95B3jKPZZJSyM3Pw53Lqr1cWjQG6iGgWWjTC9h",
  "key8": "5PE8bg57dBbwTEu7s8ijiS7GcdBETM8TBuP5NMd85uu3Bbvxsu7QeM3EgJCDxZYiM5C9W6nLmL4i6xafKTrR3GWP",
  "key9": "3sdURFmREJRwTycqQuG6GJXsYDJXCQCqibuZjQ6YPERJNL7Z251FhuPsembHB16CR3NvLCuwQEa6hzzFtWaeQww9",
  "key10": "ndFUNFRvfNU5Vf2LaGpX8YGUrqWaF9nnoT8PN8NeUqpPLE2yzAb1KgExNi1DgpJ5xs1JBpreoEpfTa54nmSvS5m",
  "key11": "5LG61F9rKR4H7263ML7BDjDh5CuCjpZWoHducz9c2NtYVoZG3K3jLr1hMWR9gtY8iNaUuiHtt34Fpsixp5jt5ofC",
  "key12": "43DFwypjhWi1jJW7xbc5XJoBabfU1DsjVHSig6CAzqzSA1DXMFLQWERMQQgdLiYJAysS9aV4dxLLPMhv7MrbYJYS",
  "key13": "QoonokwfXQ5A6kT8JoGmkwQn5RLacbAhQMf1MDNowqfAm7hdQyFstyRQYhs4mEMDeR75c3VutLab52JzM7FiVZk",
  "key14": "LKcyiKDakRQHQjZWNRJoGLnGQMYXZZ4UtAjFu8XG8pRGvir1D9aJcxsmPVgvAbxZdJhhCwL5HVSHxkriwKfDAA4",
  "key15": "3J7biGwifkYWa98n8UYTHJfLUkd1WxcsiiPXekpG2MHzRHvppq4nNsvvUh8HQGoVfaHyjkzEP3Swa8G6i7CMVce6",
  "key16": "27AFS1g1C53oKsZnJKPhB1q3zza8JKckS5jQwZwDr8k3s5YZX7rgabrfGaKLDHNBqX1NvQWxy5MCbZ27RQMAtDQt",
  "key17": "3nK2uTKhitYSAb7yjgdFWMWGjyLBWVBbH28i4aX83QAZVxkmNjoC2MSYCmqQf5rwYUsuchAkzCkwbXxaPqE2AUj3",
  "key18": "dPkfEcxCmnvh4anktEkaukRu6swsMXEpatt72mCYZ5TncNSY8pxhWWQNWRUFSJVV1m7aULcdcETmzfihoyhZyz2",
  "key19": "5uTeRg6KNXFcu7WAPzFEh4R3nnXdosft99a5cM9g8jvFcQtwC44gGvc1Qc3qwhXeWFBLXSZSgUm3VEHt1FzVpodm",
  "key20": "54XRAe1DZX9oM5Y7PtTU41JHMaczAHKTCD3Ky2Lwr1FnBTcc9Q741GfUjukXdqaKAfpCUT6ezGmauwcS7HLtcHLs",
  "key21": "4sjbd5V3Fq6f12S9KFgRTJrWTsXQCJqhd5Gh33t7mnnjPj73QMwesFEc9kNA3ENgcM9nnRAXf2Up6Dtwhgk9G1e7",
  "key22": "5GFWsspaZzuPiW6fv66syAMZqHQjFBK6gwVdfjCcrXQ9y8LumEmPvBrkbvmQGvF8KnJqDavcKrpWrDkgqAm7awtv",
  "key23": "2TWv1vQBAMXkEcU77wuXX9YcPqKaVNjThHDDSMrQhJ1STJg7xCt6Bc3UnCmefEfXXtVR8UT24hEPgnhJZNeq9jaQ",
  "key24": "2MbYMn2Y3StyNYsz94uR2d8Fyb14oWPhF4ichXVJdoJjCKy6HvuqBikiGURbDrMF7GcxkYBHGz7AoVvN8spyPmfH",
  "key25": "34gNcvoRAg78reZrLwVA8rMZRYkiPa3uLUSu1FCcTMaPyLwscLdaHnRpxvLp5AHvFbxEHAKjqasYtyCpf1H6ncbB",
  "key26": "2iwcE7gWQTwDHdp1yVnJqMdgnPNNotpAebR26G6QQBdxJo8QrW2qV5AQCyUBReECSX9Wa2CurhpeHHDuRFE5dL1P",
  "key27": "3fTvcjS8f8R1j7cjzw5TJgTKDNNJaQU8g3dUkR6d5fYJE8LRT7nPLQqxPZj5GEUVgm4hETNgRLYeNagAhFJej2gG",
  "key28": "4ViALhNPXg9yYKhkqVNMnrGfAwttPgbJjwzKjwD12baLMwjnoJWqCtHe143mGFbx3jZPcpKVhn8dA5nijzZrfDwX",
  "key29": "5ckD28cNbU3zKV4dyPs7zGGs9yRJhbgMSJXRB4rqxBQx4Ku2c2de3cBGwe9ef9UAWY4pS8Y4iF7LBbSaccx7DgDS",
  "key30": "4KNtNKtZ96actH6obbZLYtGkstfZNWJWKAoEnX9gNgGh7q3KvszbEMSvaFMTDbGAWekskaySrGpgKSnm81Cz9U8J",
  "key31": "kRCrQ4C8ujj9o8UZ7wD2yQ8QeEo65GTFC4nKg87hfhFF6G8YzBeFSeeatU8MbvHH3s9iYUsszirDFcBE9vLBSYh",
  "key32": "kShGzSXsAj1jyfG4dWcZzRNziqVWGiH5aWhZG2s5KKbyJ8iTjJ3WhwZqLmNo99TZbdTogXTfPorJ9mebgQe5BBb",
  "key33": "2Yp5ZP6gcbwDKnHYR5qFjvmSWtA1mfPsE2V24kd73XR8dBvv5VQCP2oGDF4hojw3oRj4ANEkYS1w7iGeDXbPC6xQ",
  "key34": "3aTMajxaayKVNpN1S6Yd5p1XBuMbRX5oWNAmGfiiii3mw6XGNAcWaskRSg13aabNpUi6C7HEc4EHa6zUEh53tNiw",
  "key35": "3U8xHp7XYmq3iXJdSuxcFVtx1cTEPixhyhkYBPfDTHyM8kvKyAFRPypxjsXu1YRNLivLuPJaHXz5omRZk7XxCnep",
  "key36": "EghMtZL8dtwhQUoKiXtfBYBEn2JYonvAzBM7c7i4kfvVW9CSRSU1pR6pwQVGVEbfpfWi6t5Dg8ykiTT6vLcNFve",
  "key37": "P3DXcNKFfTjdCtQwqpienHAg1FyD6w1BZn3GKhj3ZiRPES5ssaQmqgUJDUVzWPucqrRpv6xeHCkfdiJXDXxQzFN",
  "key38": "5YQ8HtXGkNpNFst9zHKM2r6hLJePbs93korSvaPi1mzVwaVdV6L5dgycbAUsUE5ph4fqk613e8jqjctNQrMD4gko",
  "key39": "4t2jnhzLDE2g7ppYGRXeATCESoRdENwsEgQrjRxF7uLQcEB4TrPLycVWpisZXV1BTSdz6vpqwM9PJhTUfvaY3gjZ"
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
