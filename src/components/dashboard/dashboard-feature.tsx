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
    "JXx1QPuvQV2XJVUJXZ4F4eLzYSaV2zmPakJU7cWuXNb6PWM8UsCtNbfTk9E2ncFvhL6bHDEBMBirvHQ9M6daw1e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SWbq6M6gFRZBW6SqJZxG1a8oNd3mqRHivPhtSPL7LDeVTg5QSU6edGjqp6yRZqn6RMNiMshDTWZmoF6oxK388a7",
  "key1": "5HDDkhu6LU114AUmB9HvoV1ndS72Qz5c3GrDxb6btknt5SNmeajsVqHfGpEn55TNkjyiFoQtJ87SV2BTSsuHJbxu",
  "key2": "5wvYBKWJHFowRMyx4wabWYAc6SCXTAmaBpjbeB1GdLsRfVeHUSKmsMngdFFm21pUD8MWsYLGVBLoMVaeh5cURTYD",
  "key3": "zLXAqWqdJLrbRghjyoAxhQZEphagfnRhQ2AFAibDeZWe5jPSr11hKs7i1dcK1WQwBAskMevUZC9rsPxscNxYS75",
  "key4": "vEbWLBh4TpbVU8KHdSoELW4YqwXfAdd7bG8E2M6HVc4LMgRatRxhj37G6hPaAk2PbXsm95DZMtc5SGaZkHNu2Ks",
  "key5": "2pEJ7dj1rpKhp4b8uuXBqLLEsM1c5hmJQnid3bPxa4DP2FExoe94TDiY9mwbEigMvTqvA1abPL2TqBFCwX4PvXTz",
  "key6": "4tJeSmXcmgQHwHgf95m3FzkVJJ2SMJQzfx6JdML97gBKhCjLphtBKLkA9A9QtW6nCDFCRnoG83sm1tCqGtoDaTHW",
  "key7": "44Qf2rDzk5127S5eT1RMYhvZUD6rETo8GFfbf6bvqoEZBsMWQeyifmt6a5Tj9j87azdmij9AxufmwsDeBFDKETGz",
  "key8": "4p6DwpDGC4cBkDjtxLbFTA112YM3tTU8TdXaGT6CKoEdrvsYnzTDfE6bAUCbtj4TBWpN8K9zgcBG5H1Qkpumm8W8",
  "key9": "4STEPcRSYhNKqjYeGPQ6zjLH2GKgGp7gssWniWXttXjEh8NqfD2n4rm3qdKdKZbYdh5SMjXZrmoJgTWgiVTeAEwV",
  "key10": "38dmsr8ZuNNHVLTv8vhd7JXyDLucxjczexYKfBZqxsK8ZgLv3hTAUxy5jPcPTKDQMRhgn6J8wn5qNvePDBEwB96r",
  "key11": "2NZRgK9fnhtcNQU22vDpVndbsHnq3xagTnApRNie7J55dFS7CDgwh5zzqoymecxq46SfpfmDXV2cTNWAB4KpJToF",
  "key12": "2z9RpzG3kZdbLDkM8wA9Kqyk57h7p3d3mNCPHbWQGGhpYqz8L8o78DydCekmjAm7GVz7PNvixoEZb1x9vzgsAm5i",
  "key13": "3ZRwWnHkHcYwNtmYLTE5cZpeFPVTBtCfsKwqLqAzT6cf8YVS9wzCXEvDyJc7ZRMEueFXAfcPF9TQoAe26eCZPdby",
  "key14": "ZaW21Qgakr38zKFZaxxN9mhALhLVxHCXvQkkB1z1R22GyYRJNRyjwZr9vfL7XT1fCeJtRr98MBKoEaiq9789FBr",
  "key15": "ZgwqJXZL8wHdthPmKdrRAWiosfEgwXLND6Zecc65vBcQL9tbKVppk2j3yZGJ87vGEM51UMyB5dwBewxYYhPGznX",
  "key16": "5xnaWPnxyxCgJBFuFY12gYf6pJKjgY9iiFwjjuXcmRFfuvwiUQbBuR8javCZq9LifZ2vZew3WjCbePW8Fa8abusy",
  "key17": "2mbprokbA2ARfAbsU72PzE17jX5eGiESJPZJtjunNxZMhFTuHFvfuujaSUcaRAHqLrCYbDh19LQtFUuTufMPB9gv",
  "key18": "2pZP75MHcZ6g25wmuXfXFtVH2ARMtTgU2Jikr7aA5SsE5Q6qi8pCfwchbUEmwLg4wX6tVJD4GGidfyzwSEYGFtRD",
  "key19": "4RsCLp2UDh9fmCfLMsWYdGhPvftbiAeXcACKYEif89R3aZJAQcpeXjmX2ET1gyWd8qUnEU71UUykGhWdZdpwgX3s",
  "key20": "4XhQ7cYFV7Cq3oYJuf7tJ58ecYGxgrKepsZSQSMr2uEbp6vinvh6VK6AimSARrVTZ2dXX75FJrZYn14E5NSpb8Ps",
  "key21": "5BTcSYDnFbscW2uy14ms3DoPhVCivwKMGYMVxyN9ZpS9wHrM1UAPUT6TRkt14u1JNJbxN4LuwGK1irmqgFAWvR7V",
  "key22": "3kbMbTrYVNehwhwc7eF8nPSDWtroWxUEndo1GASanJ4yguzwWcTHDdC9FhToReFLbUHKqPKurquz7X4cBKDFPbbL",
  "key23": "2cTNZ1b2o4pVWCSBnycN9Q1oQULD7mBxyK8c2feaqFnyZbvxrzbEoV418wjM4TULZxnN71yjQM5BvSXeW2pCa9wD",
  "key24": "67kfy5jWyRKCkTXvzBiWBZxqH3NMtad5ddHqJJZwM8p7NAUi8H2tiFgTp7RMmhTRdS5MjmqsiezLHYNMGCTtt3ur",
  "key25": "266kcBDQmrKs2GscJEUaxvxSKCfXADYFDvKR4U5hWvBERZ9kY4g2G7KKwJ5oJqMyXJV4xne8KrwvDFwMAJxutQj1",
  "key26": "Dmc2exJbGW6hpZyxpdxTAkPzMLufoAwkyM6BC4o4u7pHj4QvHHsnbBAYn9R31HGp4qNYV6iaDDxW3JCXGoyodRH",
  "key27": "2pao69MraL5QJKdKivWspffUk5EUL6yh7r5Y7MpagoR3LNJJwzNETdvK2vJPFVB4HX1R9Xkdbu9xbKLu7hKaTa5t",
  "key28": "5QnwZzdZRCrhT6CYi5nBBtdhfW9ccv9hgJVgDYYZyW8TrRf2vmo359mewgyg5mDdH9Z1p5F11obdFxHca3nTje8P",
  "key29": "emsTTLNhcNVbQZBaodzLYgR4TmU9V5RmPQvoWBKq5VPSvsTdmRGARFmtGn1jk4kFMjnxLgLzmyovUxrxrtCuPyv",
  "key30": "5hJegJYnNR7XmkN9zFzBGU1WrqNR2gdBeJDfWcF6EtgkTrcrr4vDcCFkMqeRiaMfTPLkEPhv7vCiVH8dEXqxjRzH",
  "key31": "mdKtoSooDc4bFtxT7HXJWnvbe9iv8f9JpQLTM3SbE9Biengdc1L2DLeHdNM5XUfpY9vHDnQiSoRfzXvGTVRkhAx",
  "key32": "3aLBCJ9ei5YWnZ2S2APMbXpD96GPpSwvhhQqXdQkk6UAz9EKUZhSVe6pNQCYvbVrhw8jTtGWLE4FrjDaSUMywbha",
  "key33": "XKtfi99FvtgJezcK1z9jXo2nSkuFMBFnKTXDduknZm9bN8gFjxq9ckqZpUu87KpMV4uSwum41Zn8VmEs9x7xGa9",
  "key34": "3NeKrCeuJU3a8geizcBtj14Qg6hUCuvG11bV4wGzKTRLxgcy4PqKiTw8pePKpuPyb9mQw1zT1q37ttWaLkqhG6mR"
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
