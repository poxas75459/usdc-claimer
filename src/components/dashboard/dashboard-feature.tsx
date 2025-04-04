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
    "5ycmvaG63LCkuR8eP1gnFomT94X2DVRTUokbZVsVsLttd47kw7HPg6BtcaihnwyqWAaRhZQWq7DiQRDYwXEXeTUW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ie4E7fESZEvZnHimBAP3tkCyp7jUcdb6VbUKrYp5Go7jDb111tob5piP1ou4FpRbAFzjJdzX778B5oEorS2zkVM",
  "key1": "27U8GmbmVPni8p9jHN3Y4Zd7tVbwRkWCF9qSwNnzoTJf8KPC8CoVcqQBV2vUbVVHDu1pZyt4fzxPQWwAEAc1VVYn",
  "key2": "2gc6g2gEEMAx79NUo6yJst1Uy1gGJqjdGPjehEER7A8fLMxFacREyc39etErsmyQsBpTt5WrLeYDDE47aBQmUnLF",
  "key3": "4mcTQaHpQKeH6gdU7fF6LhVFLuANNjdsLwiX4cqEa9wbMFhZcNNEn7xXp3rEAcUyqtxmB2pM4PUM38XZDcRYebPp",
  "key4": "ZvkS1pikUUcfPFBjr82Amg9kHazSLvL8cGvf3z8vFKPTPyZKBZGn38CrpJvX4e3nEQNaCKCXAdanRTqytmiYU6a",
  "key5": "MMzD9ydBaR2NDzFcF48X4czkoMqbt4s6fv8YsDdhFGGCZ4GFBpHhzsCEvJHZfqCNw6okkDi6yfRVH2TYwARm5yu",
  "key6": "4nuuWDnbNcQa4UMvgLv5QzTsJZQ2br91TyxBzybeY4RWfBLgSA1NuS5iKfJBB8mTS4SHP1pKt2EuXZJCBapjTZ31",
  "key7": "8EZ22Sc4cKdTUXERihozJPzXfwXt5mGb8aqMGTcMhSiGdeZoyyoqBdqjpauhNg28Pit7Ed4VyBwxFP2oGmkDKya",
  "key8": "2Zms8aHBs8LNPqirygjYGssDYTvoRT2RjAFvoEzXLoceJKLQPuiMuYkQopFVx1uPMnvHE9Qg3PW27bWkidEdJYdt",
  "key9": "3gMWj7C2TpfASCfiti28eJdDM9xqWmXxtsBiQQxdtStjhcXLxvAwbxsnHEfCNyK5yPnVmjPrsmxn4N1GboP3Tk4",
  "key10": "BHQe14gaQYAJMzwVhma8QdksWUbMdAQVP4Jrf5gyivWghC41h8WpwQN3yLvVWnrDBLDKvjqfjaEMUbSJsQMRbSc",
  "key11": "22PxgG5mTHWntCJTy7qV5XYh2bKTuzQiimEbuuvnG8hzTJdjA2LQB1xcqw6ySEQ3HNB86i5zcjAixy6cxv6WvMo3",
  "key12": "tL8agq3YvhZ3DBnvvc7kSNRfdMQCnjTs6bPvR5LK7jSGuTTTjmJfR9ZNpeFi3K67tz1zmy8FM4ZxCh96FgS2Kfg",
  "key13": "5A3RCgY1DPYftxskuB7PxzUzUDywis2wHkZ9M2Pmjg86oHcpvTBbNg4VWGS8nUsMnsY6aapsDXb8w4s3jQRBRwoA",
  "key14": "2EETLfjZEPX49aTuepLTxfpDkHcKy46TczLtgJCe9AoHTjAEWBezqPhyRJcCTTNsGWxzk4tgzBFDJicmqbFPTUYv",
  "key15": "48KPatAFmF4rdGUJMJ6csamXVhy75NdrusRyyVpXn9Xqznit8p67GFpVFc8N2mRMeNkHa6xdhrB8y8w8kYHM9zh5",
  "key16": "5SG3epXtiDmvUbWb1QMZGV35myUFGnu2ybZLX654VRTU97dcQog5gzwocRxT2qMRr6r3zYMNhGpQf8Z67x5ahYTg",
  "key17": "4dpohRdb5dbzi9yw38G2XcEFaoL1rusueounFM9JyskBKagHjFG9hzVhxxgtnhczSnKLdQJ1mHgdeHv8xXK3Uiq5",
  "key18": "sfQptgFAWHjT2d8j6E2X5YBxWgVd9R4pueWD4bLqvY51zK15pbtvW8fZJJJoUiYCN4SaArfKANoRzSq2R3QZj65",
  "key19": "33enbDXZsUUJr4vJNWLFHWNcZe5c6vnqNx5kBu1BmDQpZBrU3vkQxDzHHZAPXGBzeVsjLWqr9CDD34iYcSQExW9U",
  "key20": "2ykFcgtLAB3JazxxwQDF4rSfkLFncZDQkiRpD17F4fQH9DAhUAGmTVdCZss5BtyNi4DwsoFKooc7d6i3DqqDq4pB",
  "key21": "4NiR86jAtQu77iGYBpksYXdWf715Sy7kfFSUbXAMXvKYmHRVgWp4avU2wNADGFHgXwZqNXca2Y8UZiLUyj9gyYZ4",
  "key22": "3M6jhmnoSSJhB1C3SyaJasJnhBAusu6oMwRC6Py7U8a1n2KAzMNXQcdPphC5aAWBAxwcGNdbqH72mjZc6y6dvZ2H",
  "key23": "292ufPmWMhayshEydrnMpPmCiDf7v1DHfyqJz7ua7R9y9B1xUYQbA9VR6HysDRmv2L4jyVedGDGLQdZDi6HnsKDW",
  "key24": "5BeAhH3hwNCqBzCFrarEXQ5GEnHyDc7C2jJ9MXpjY8XARm1CkYLz3WEeVAgwp3rytoQmjeeDyHaikRsYEvWqpsNm",
  "key25": "3e9MbwdscfqEnKSKrfs2eciy2mbQeGJu8SArXfYAoggD6CuMA9oYM38rKYsYYcdLUVUEHt6yPMDLSapyMvnScGcJ",
  "key26": "3uVVULmFLYwB7mUtDM2M6XhY47pb2z7M2EBkyWG7J4za5P753bqSydNHGavzsE61AT765qdCyhvERnXYWtmqtc1T",
  "key27": "bA1SM8qhyh22zKYNYVbYj4zHwPrHb6HBPjcrFKsLpDCVLHsfTQMTKGj4iG4WBZ59WuFAq5Hisb71j3RDPvzqFRR",
  "key28": "5WKxyJKHAFGzhRejVZerPD15x55hbKm2bsG5dCFBqzXFyVx9SLXA2M8KrQqsbn5xtAUc37dezq7N52ogqeDWFLTC",
  "key29": "2HehU9A5SC7EQYvm5xBx7hxNQHzJvwi3D9E6RmWMnpDHGUnWPrP9kZWhecVu9a3D8BytG5rztiNSTY8V3PtjL7Th",
  "key30": "fGF9eBWm4hAnejGMN1Y59vNZucEYP4rJvUkDTY8fYDWePwPBpqzCyY7Km2qmuymFL8SngU7E42BfC817FJbJ4WX",
  "key31": "3NjvgizGUpR1mchSMwKuQDyMM2oHQJZu3gY9aFBu8J3gzXxW9aVUf1QQts9CT2DbYsnjsEg8hj26gosx44nHF6hr",
  "key32": "26bnqAMvWQNsiCivYCWHEuA8jc5A1ZsV8VPGhqUPRGHX8QWZHVXGwkQfmYJRFAGftTwzCDBXdCTmQYwVu5nhXHSR",
  "key33": "2A6MgNCig8fw3yV4S8nCiWpERbVk1vdd5357NoSa3UktEpknP2SpAE4TT8yrrriZUgnWzzzwaZ9YqHWP6P3d42B4",
  "key34": "5t8uAQmcLXBsubW8WVCQBkHtTXqpy9LKVQvtvbZQF52gML2crTiUY4T1puEYpqwC45T5Ef92tpDyo587KCYHT7sL",
  "key35": "3MPrPaqa4cEn8DpRfe2gi52B37vofQqKNzDC9dPc9qNu7JQ681F5SaE9wbwJ63QnTPg9RRfcrKCxLnQV3vi3bjGL",
  "key36": "KzAyJWrFsWFQxpac7hhqRWZ1aRJcCBBtLGKF67qn24JWjhNvekXVYbN4cZRZDYSNkZ2N3t8wmHvmdnY5mJZhRYj",
  "key37": "2bZrbVcrA6S9F23JkYb5JBnbaqvWxogmpAsgZ5bmJvn2D8MQQZdJm54N8c8HLm7QdVhc6Th7gre8oQUrGRFpP3gn",
  "key38": "4yotZ363mxruDHm1ZYycmbbtTn7716ZC9LSDL4EKa9bQsX534TZfxbdCbWggcA1U2aC8e2SQd6banv3jQTE29jJV",
  "key39": "3PAxGaXH9yw3VAqhM8kgUd9BN2z5W27L7BqKbVRnjVqGP8e23i6ceybAEZ8CiWoHitr1FHgsAwn9G37rc8xuMjY9",
  "key40": "4BnVMzCrPmh13o7ckcgDr7NCrJNJ4ubE88fzRXQWwS9YvmuPnyK6WQ7AF5hhxeok1A1BrdH2K4vStK9mp5v9uf39",
  "key41": "5PfeCcNenwVeFELkeoQps4g5SiC9f6pAtRR5dNpJ2394Wivb8PjVE5e5uTrRukxEw5ft1YQ5obXs2FjN5bqrFSUp",
  "key42": "36hAiSBCEG62giDLHuHeXRRT1z3KCx2NKoAT1SECc4BdJ4RoC8SBpvpWHhDL9LbN8FXN2nwGgyVRSchaBFHQbyxP",
  "key43": "UAae3tqkeXcbFAeGPuTgAUX6o2GbdbxNhLTufgfYxo9ELgri2EftmyWFJERDpvtw1ajobxZZ3D1HQrQ85rMriaQ",
  "key44": "3NjkHvtFfKcgGHYRzZRnm9sBH2qnG7xYDXNiEAanzztvTg8vimT7knJ8LXv2KAfSPNmWQmsQeT7gEHtLkcpSV5dh",
  "key45": "pXrPRppGWKgDpdSLiCTQC8YDGcdCtmLHXi4z7qyr7gh6y9i4UX7rZrFPFc5riyrFV3xwXmp4KxQkW6WSKt6kS7b"
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
