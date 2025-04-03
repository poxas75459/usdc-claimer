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
    "26MGWRevkpqe3dWUfFcrXoaMhjKvvPtSbJJG66J6bHUT1eZqhKnTKpv8FcnygFTp3VQC4hKiknxRvEfvRAq1f5JV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5R8HyHvDPKjCGmtjdDkH7hK5pzUSAiCskCX3XG65ewxrz8zo7i6czzJvYJ1cdZZuqMw4Do7eATQ3CvvFc1JS7bdG",
  "key1": "EfNYC8QXzorbLBBTgx4wsqCgLiGqe6iJ46g4y5jHxW2dteGDN4Twn9rKPRGfF9bQtNtoaWPMudoYdZpFAohkTxv",
  "key2": "4sQkcfPmf6dTsmdKaLHfwFJ17n98bK6HAqoimPNch7vWPs1ntXH6rXwCwgg78h6JM3ddNrF9W65Y66dCRZ6h37oq",
  "key3": "2MCWMLA1zSs8sDBPXMRp1n26cxeqFbnjf9DXHsoCoKAfchra9uoWBxhHCCqAW8969WrzhSrvGzqoK6AYre1ydiGN",
  "key4": "WKsPcdLMMQpVuf2z8QMRsPJqqfx4qc25JLhLYpqMykHevp1rYcZvJZb4VXXwEeVExE4tmF7vvDJG1nr1kdBtnZ4",
  "key5": "2dhPzLSAKXPiAWkytazfBLdUKrhQYTTEdxNK1x27UxgiCXcMJJ7uPJ5ZFXv2fCS4YBJnRkvQDcdKS3ZnZTpVmByC",
  "key6": "5SieaGWNa1uhAHMXZGhq429WdZ8CcUXEz3hmm5nx5iAzFYfiVji3711kgtvCQwXahMhytEnqVGEiBFB5SSvEN8U9",
  "key7": "hLJYpurYLXZcVeaTzHQWbBJiiS99QiaPv3YYe4mVayTE2UPQtyd4EcRKGaNr992ZY5E5QCtEhcqwU7Jo2GagHCj",
  "key8": "5rqmn95rMUyLiRHVpNv49Je5tGfAuzV9ViF2AwSRyPUyutVCMah8zM8Bx1UFy6nzM9vP4Y3m1WG2qqgjtBLBEhta",
  "key9": "3Xhqsi68mZoAjBC1umSgfGTpgSd3rLmSE2Bb8uRW9PqSi2TEGR8j6EwGet5coPygE4j2PfPHbsMZ5N4joJ2huNTU",
  "key10": "38jBiTYYSUTQYGmJ6tFxeXJgiuf8xJnDdbDKLmrR1Q4hKHPkK1S4zaSrtEugYF4wxwo75XtRYMA3sN5aHGMokjko",
  "key11": "2HEbwBcNwUkPzUKWiRftjNNn2qTgMskK1RNnZ8pvEaHqMFtWN1Q3v6KPKuPfoUDnoHF49iMQmem3LyCyJaC6Hfw1",
  "key12": "4mJxmTFRE44nA2pEwdxtaa18WJfb6ZPcuLbyeuxt9DKGRLN5KQLSdiatTqHTmyeURtMAQrDoCE48XhPBpnB4EWrr",
  "key13": "5mWY66bmQxDtH2SX3DMvSr6fsEpNVQ6aFZrANDnYYunitPusnXghpQaYuCemvnHMi6Dm78v5xJwbqqqcBLomRVB8",
  "key14": "3Sv3koQJpAg6d8bcwF8LuN9TVsWX6p34L5HK9tfBHdfYQsdbQyVHG9vsMVKziyhLW4xTmUq9n4GNjn6BaLH6rfW6",
  "key15": "fYzbSR6YzpqxKZAAG3B2Ph7Lm3HorFkcGzEd8j9vcGu8HBMwF4kx3NEvmJ2BBofCUKGL1KFAh2WSCutop5ksXhW",
  "key16": "87aCaprNMZjzRx4KNoPCCLcQ4AsyDzZMdbP5psDHthrJuVtHRmLXH6MC6EZupWvmwj18Vd7T8wRBCKNwMR6XZjB",
  "key17": "2MEzmsNbuGZXp1rYRNuSNDxjiSvtDVGeAhEdssZiRn76xJJiJbWdbyRGRSM2sfwFsUqmghS8mtPagY5xvwWxB1ff",
  "key18": "2r61Rw6VMgChjtDRc9PFCRq9iAZL7BPXeJY4eY8PioASxRR5KE7qekMAc2NUKzRLoq2vEjzbWyJDJCUfa79chAX5",
  "key19": "2ad6F5XQv1GdJJv2M5HYfUb4KKYHjR4TC4ztK8MucrcZvRqnZ23oRn9HrwQRM7iaHWjTV4CZgXCs3Zt61Hpa4S3S",
  "key20": "5q8dJkhWJmmBsWVeu9Y1tsmFKgMvuNHS9uTTg84VnqPABbrEfkV5HErxXjnMXsxkcEgPUc8TZjvpsj4VJEMffKCV",
  "key21": "5PCUhkPMAjLvWZNfxrFQe99VvgWKbrddyP9B5XYpkGhYeVgeX31fKqDR6Azq3FqMWkPtqRSPSKhQcUmB3AjDtRkm",
  "key22": "3SK6rnZpRAkx6uRESNoQvTEGeZowti7V7JPRwsjK2DjvkFHQwYGbAxorxboeK6TpZJRT8Di2Q2pzkyEpW4Mzkm4A",
  "key23": "3fd9Z1dm6HF7mAPY8qJrmmfw2DyiSZ2BeB3Z2x6Ln1JfsQBTeErqE5eKstVDssVksN1dqb279eLLWpVAGSXgvTPj",
  "key24": "3x5cR2SBZv6gYbWQRWcHKqDcpT68GHu9S9LXmZ6LmtWVXCHTggR4Eg2rUmhZ67XumA2CGhtsYV2F8ZLp8uLeWtKS",
  "key25": "28tKM9nUfyPXMWVQjtkiDDQ9JgSErZJTXUrbhKrPYWGVoL75mKiVVtd8qWK55qq9tEU7EMFtwyZUraFYftDNrzeh",
  "key26": "2bjGJfzwLUGu3ZpB6wZtJpaA6hr4HX7EQn1UeyGBzn2hQnFcPqXqvLKCDEidniZApvT64YKH5XDSKRHjJ8vqmHV2",
  "key27": "2iUGhGsKbdPvk6xKcnGtiUda6ozfDwRkmxdcHaw5TY8sAFWxo3AQhHFazEoMSFFBfetqmyAHzveREaLx26Gqfy8w",
  "key28": "3fmec6gfJMFCU8Pn6nVUFQeypspNicj5WSWf99D7H4UFxH2QdKrJLPTU7KytZHonZiwNwemtnQ9fh3J9KMUyHY4W"
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
