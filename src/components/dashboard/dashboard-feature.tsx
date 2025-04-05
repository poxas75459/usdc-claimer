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
    "3q4Rn4aoBejXL5qbDQzCswKW66t3CH8gS5qcA6gnNYBZQaN44gHFpQJ6vkELH8kzRCXgjJqkujZv483hVfnESWeB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pWNN13zxdQbwdd2YHyp3889H8jEb4s66eKhgSTqGbymTWhnCKP9rMDLYoFCBi8xMTs6VZhShmwx877iDVA54yPG",
  "key1": "2phcXiwWRo1CL5XvJBnKPBpWPHLwQoXY3mk4MV6yxkSqDvUGDJVu1wK6JZbiznoTyLHaU6bxZxjwposeGUqQMwVf",
  "key2": "4rLq4umcVLjorFZJaJ3GTY3bQeEJ7sLi4qJjiqhtY8pMyiKib7BaGGh9cWjHnjUt14M8wYBzzNevBP5sWYKaoRev",
  "key3": "3atCdDFrisyzZgpYVmvjeDRZjyPjGLEVGojPb2dvAf2XEHcSmas7Cbq9moGG6ZZjWDyHZdH7nMSF6HDBACS4B6NZ",
  "key4": "2FaFLHuWFNvyNqyXb7QH9SpfcvGsJkpa3RsZdqDgc15d4HwqkwdCqABkVQEDLHpcds9XNi8X4iqyw1e7UGPAdKhb",
  "key5": "5HuWtrszfs9H2W7WC5ejTe6oHqrfYJFF4ZnQCCx5g9rRr7DV5jeqW2ZrKaSfMSvJhgDc8JWvM8iGQswqCcbcRsGz",
  "key6": "3QyofXQwXxdtewpZny4ejSskQmpVd2DdzB9zyTTPFGCWbynSHgkq97sYskDnwzrf4E5xjMkJ55HL8gdPoEY6GupR",
  "key7": "CqCDNbrGxZ6MAUEmTcDwaRALTw7wz8nPhKznSFhcN8GPEYUPZnnhS3gJfgT77kUoRuEYsoiu5YT2gLJgKK3z2jq",
  "key8": "5t79UZUfcgy7QAWGG5JnGUxRPaDKpXumFLGPpL35FUk8PRGbsR8RLRjqoT7WtUV1hPcYGpoG4wAu3DzXz3cuv46f",
  "key9": "5n9TgKXxaHR4m1yuepVwwrpCGPdokTHBvmHLcGW1FeCG7fD4LJrWUJqvW7zWomhGDMWENE5ZQDWmkE7T8aHYhHkn",
  "key10": "3vgws4XjxkqZEzBeeYWwtpisKhh58PUTS3Znv5gTondnptkpLzj2ESEqzfDyUHSe8ry46NvrwcM1L1MWPbMqguLW",
  "key11": "g91QKmnkTq3rMP7fXk1EErmhnbrYTkyTfdU8AbJF5GCBcuVs6BTt8ocD66vqVecQVBLq8igL3uebeb6BdgArqBB",
  "key12": "3JXY9nW8KkqRH7SrFZVFDYimc4MbPV9S4vPwNpkS4rv7iRigSkm6yS3DpvdieNGjYN1pr7RqTR7Lmpg7e2ad2Dps",
  "key13": "2gpXwa4imQyZBk44DhyK4o4VKU26MCvdX7YpGbALw8xq6yfBJZ59DHpf87s1EuEGv4xk3tMSaaJwCKRj7VrKyhoo",
  "key14": "sg5R9Vxoty9PvcNHDuuWCz331MkR1K3Q9dePAC1WZiD8SLERXrZPQLNBxg5U7bRW5fPKLm5NRy87ixugV6yD15J",
  "key15": "5p4AzpYWyWYU8rxUiZnxSSZb9Engjtkx1fo5FEWBNQibk93s6BJQwZXCTXFZWd1STymHAP9y4UCWWVaS8tByDgew",
  "key16": "61bvyYhV4WVhATBNGtSVES7oLdAHWLXSPpioQEJPpTR2UaGdJcmCzWZvrkzdU9fStBMTm7rCzHrzh9Txg4uWavTz",
  "key17": "2K2yZxizhYpahmaF33HSncgoyUU8F8Kenr4nnKVJhDQo6cKEWm9vZVET4Hpxa97XPkqHB3UmDcfeY5rRdTQK5tDz",
  "key18": "5iVBX1xQaQqYZdG2Aht1y7DMYsZWx5W4M5QXZ9sfmnFZcHBPc2Hy2wwXGemyG6rTBSwmKJTQx5JVqQFVM8qAsitk",
  "key19": "5Gmvw9Lw44H3GA659MQ8e7EkQQZHaa7QFKYLvs8bdeVS6rMco7UYbZw48i35vq2fYRLxMrNfpBM4zeeS7dDuLzMv",
  "key20": "5fnELfNXESPc4ju12MFaSidhpNrVzZQNbjo5XHN5sTkTcGo1jXELYiVURSr5zz2ptUAMXnW9bWMAEnfCxLjuMhNB",
  "key21": "24DpspT3HARBpUXhgXD2dzxAPuVTQwBqJWgP3cKxzayU7272y3vfmNfWW2DxeQi1pZusrHtjuCyUBymUsYpcsC1w",
  "key22": "2eCAzVhoGmBEWbfwLbeJxC3YW7UP1FY4snzq6ssRzpNuVpQ8w2rpu1DuhCjspDQjNe73YgVbrW9muceaZyt52ibn",
  "key23": "3rzfyLMChXHyfSwa9fZWcqpeZ7DHmQosPq1Yzjhw8v215LPswAkTiUwiuMw3xBW26fBsUG5Dauc4qDfcQeoYwWy5",
  "key24": "3eyWVvML7n2o6kEpxsYzELvTnZTK5c1RUGdMHYNaEZav8JMNJ1LDm2tNg11nD18HpDnUrW9tzwZDPt8dex1FiUpK",
  "key25": "4LAikhMUGGyzzm5QN3f9XgM6TmAgbQ2KTmcBNQk5PUzhxXTfix6QvBJ34wj3s6exu2h3mer8RgGyPfcage9YTknT",
  "key26": "4qBJUyiSmYawftc6AJhDdCc5gRfg2nmm35JH7GAdJQoFwPshxRFp9QFyTPSGsDzEm3GdcC56mLLfjZn9MZqPG6JM",
  "key27": "mGehfj9qH3ATp5x5mFYEYegMr5KiP6yuFjxBQTdmBdgi54zHCMNkEcYiP9eePNDT6CdagirHqXZxE5cArGy9x4C",
  "key28": "3n1taeuba2pYtPSj7nVb5QJCMCLpZGjLjpyBhBqUe4fLonVPy46YqSDbP5c7i1fNo1jdgXKFt35X1LQYv6yJ3Trn",
  "key29": "4qrbpCuaquYX8wkgsu4ecLjRBJHpcrrm6ZL5Hg4MRp58wcyuvFtTJtAm2duFVTQ9tJjCTWKu5uqyV8bQfyDm3iYb",
  "key30": "3ziZxckEqUmwdQTyqVQVfQhQM9VQvKyJwvYYkAMWjmxfMFnwhmMVPp12WjgFRBXAbiQF8n9pMtqiWMNHf5wbTXms",
  "key31": "3PjJ8UAWS5Z8MMfykavNdeoBsck2ZKEyx99DF8tC3Sko5Fn2yLNEEy3xKmg1VQMYKisg5QFogLLUQre6poHSE9S5",
  "key32": "2H72EwGCz6JGNnvk35TvJTvCHXX1mrx4f1b7FV96bkfNkohgR46e52QWZEmT1gAHa1Hd7FJJdyWjaLM2jQiLn4ov",
  "key33": "XMSmnudBM2fMizGiv866UPPBjsGxbBiVd9BNftRStRZAAuJ4VFqCdrf3bbZmejKYkWV1xGQF93CSafwuKsTkX97",
  "key34": "3uteQd7jkx5vbiZhyBdNL3YcBjJpCrUAUwpKsesLvzrHzBY7D1d8ktAcmFixEMwcc9ivj8H5FFKWk7ZmnYu6xRnG",
  "key35": "5ziZ5nN1SV1GNJKNpCBT13w1owwQTN6mybciZF6a8AKRiMitUr6D7roxrhu4cJ8NULK68NcrmJp55jNo4HfzX8L8",
  "key36": "3ZNRxmoUSoa8QNYsayg9rb78wgA3cbV137geewn11mnnRwEP1XPrzAHbrV711UEfVemmJeXbhtu92WgPoVpTty9U",
  "key37": "3YKqXBNo7BJLKVHi9MSUK3GJN4ktZCVoTG6LFnhMYVStLMHKQ1pNh4f3NjmxwPpTHQey775fDkfvKT383sZ6bbNR",
  "key38": "2jeYXb76rpKuSEVwYPap5goN2nVhpLvjnK123M7fThPQNxaJ6NCaei8vni5znKHxFNbp3w4q4hQawrLgfz83tXrU",
  "key39": "3vf5fwjVFqai18SJpJAurv6TyF1BdU8wqCApV9vmrTUq6S1QjaFdUXa1DxERD8WU7Ji8GvJVGPTv8qbwG6yrZcud",
  "key40": "625SmE3bg9tjnkJdUwegXkV9YCjT8W17M6gnGZuh8uxzgrfqqWne95zJ7Y1ammmeMArVwNzwxA2fSFDUYf9x9oJW",
  "key41": "3Zz87L9Enip6nNNdkCELnJ1fwTEbp8B28qnWB9n1eGVESe9jyof9phLGaiENkWxyC4nnWPweC8SANQCzn1E4qLMa"
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
