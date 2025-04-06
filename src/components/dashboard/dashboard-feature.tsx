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
    "3MBE6tRfmQNDqU7apQnXZyNLkKk15s1puFWq46rPKqPHgd43hTvGmuhaShkeJcJu89snVEL6R9BT2gu7bYnH3mmh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yFjhkJuFXiFGhY9dux6PiN3RF7QqWHU3j9erKhXj3zZYaQZnLwnakvN8sDELG3jbHJtqxanRxD5wtTyLSKhNnDx",
  "key1": "54Vq43bNXc4Rfu8pQMEpZ9TZfmeSJEJq7h9z5SBundrfPLrjfq7wesDobGxRmEREuT8jyCZQ2tsQK1qg5MZqoesw",
  "key2": "54jr9FhWNYxf8Z2dLPUkcuQN8Mb8HiTDUMV7XNSrruAzrknMSNdiECFLK45joXBXDRfm6LzdSc6Dq2HD6Nc9LwAx",
  "key3": "4Lt7Fp4E9yWDumG9WyPgKiF5H2ekY86mg6GK5b4pKcx2PAbWJwb1FvafhHWR1MV74mesU7UE1g55E2w3efbTPqHv",
  "key4": "zwGjAySZsMcimGHYLeWRTVPYFdyh6bAaQ7v4NTq3ewxxvkgKfCC1uc6NU5ipJJgbrucvyVhtKYG3hgnyHV8uXkH",
  "key5": "2jnqDxeqqSVKzM5VbVGfnbv3jXKAYmXNMzBAGU9AKbuFM4hm2JDUdAJJMbTXKCCAE2SBV7FANoiKFJcBcNuP9Gh3",
  "key6": "5oUuGTfB9iNppQsgdpkfFr4EZjG5n63fDcN1ksypZpovsx94KUYLeX3gT7vNyUWWs5LP8gpUwAXqSnSmEvZ56L7P",
  "key7": "5MAAAuhBFKfMaVPTTNhtgeQh17y2cfoWhc3GKKXyfsfZghnyuFFRP9jBTek8e2mFrjCqBsTgxARgrbA4x3uTw3N5",
  "key8": "62pcPhqtAFXKpPUTwe3kVVCKrQRiDLHiXNstjD2pziKtUvzDzxnXs5YvnJiA8o9n6qBQ8Zs8sRU4GbosvzSZTsmZ",
  "key9": "4NszcKuw6ij5JDjBiETH7iWEJFgfx8SXzTZUd8qusSQrWoKnSbo7NxYp2bwFJBCwdo5Y1xsC4JRu7Wh2TCAxqJwA",
  "key10": "4KLtaSUe58yG1Q7pssYG74obwnAfeyjtfXRZhWwxLj5qZ6XUDuddwG6E1jyjUM4Q834yxyXcbSFQSriyRpJmgRLv",
  "key11": "uhcreNAPXB1BGeLbnqtweGyqCDJpascVaM7wMnfs1bJChf8Gp3n42FZj5i8hbSjT5dJmSavynRxtkjswQBzvXp9",
  "key12": "4XRC1UgXoG9v8qqy4VEPxAqgXPXLjtQKFjLXLkA6ochzJg9ZT4icRAT1FFtWk78MjMhZn68eUD7f5d35wzfoUcsY",
  "key13": "E3XbhCx62JPr7y9kpUxdAu2Kc4KpxBLEqFTQuevDfStsHNd3L93LskBZffhxjHK51w9Df4jx8fYtVqUUMsYhkR6",
  "key14": "5KtuerixnZMwo8vq4w1y6GHmbm5tGhxe8PeVmZ2dm3gFsgmoJUXqkeYXWJJQPtCW3nTCE3EikPW8TGgSVRSE34Ly",
  "key15": "dxFKXXNGXoU2d2Q9yFzewcUsqbBhr8Ts3Enydn7pt8MTixVAzvNRSCUhL37M8uZRLLjir7mcDEnJN2xXaQUzaCW",
  "key16": "2du95Y6xG5TRX2B7wAm3DZqAqFfDQewudsG5XPjP1JSNG1MDpsibRiusmuvNihn7YtSkCsyMpTyb6hZoLvZYNkwX",
  "key17": "5yaSyLJeJQ94ERLYxnGJD8wqE3CxxiMo8qHn8RmSvKc7PTSuazT9boS1FirZYPjfojfvn5SkREUST8hkBrraq5Yu",
  "key18": "2rRxD9eM8ELx9nKGkRJjELss8Qps6KgcYsaarD6yLqySot3P4e1z9zFafzGn2YNyK9HjNZSeG6eaYcGApSvszD51",
  "key19": "fhHnMdMDbEByWrkYn9y8K4WCHW8nAmCZKeJMc7LdR1K5oZAafMyFteiSNd2Y6KpdWveFqLUtkTum1twVvMb7geS",
  "key20": "84sDvGGGMNiAFTT63h88cSD6p5wMQnrgcrvYSW9HzAmvB981Fwr8XL7gPLUZ1cJRUjHMTjLwtHruoPDXgTVnys1",
  "key21": "4aDTEZgi61ptTK54DuJnRt36JEZoTUVpayrCBNbJwbi68wxjECwYmVb5JAZKrJaapaAQUew3jg3KDD7JP1zzGaCi",
  "key22": "3Xsyh4JqKzRdrRCYFGPwdGFt38rT9JdiGEYWtwJhH6KHUyaiVvNzVR8msNpmr3cmMyP15b8WHLm6J1gWrKPm2gZL",
  "key23": "3THz6gRMBKibJpNVoQNXanXzGBxwghj8aKWC2HmmPkd6VQApm3upgkRG6tZHJJrp7eohVr33krjqmnuZPdH7P4r9",
  "key24": "PRQx4gQ7yBkzqyumyWm1dugKYQCGKqkF1jExinYQFxMc1HihnmxjdGnJVgueh2U7X9ypAwYLCCcS8ETDj48BR5y",
  "key25": "ztU9VqnUfxLHQVz8c9jsz189L9YwVohM5peeprHZLS1EXu4wS7FGj9HXaVLYtwePCsDz8Le9zyGD7jHSc9GFWGd",
  "key26": "36bUYBziCeBmDxuT6Sud5D3hMCuiLX5e5yAzoRf8RXK11EpPqrz7oENVneie8saYiQWaFGnbE596ViL2LDbgZwB1",
  "key27": "4E35YAfGr8u8fHMDG69ArUHmbAPyJUQyDfUfuxvrzocw2WBPFKVSU1b2B9nHB4PZFW3DrGLnwjed8QtqVJwZsdQk",
  "key28": "25Bttws6pefnioSocecNdpecNLmgqLo7JzmjPYxBNgkYUH9dfZ18vMkbXjEZ1TXXiSmufMx4SnnKMybvTQCUBQgV",
  "key29": "3dQy2Mk5LpqzsmfV3gFZHK1fig1QkFE5kB9pPK62nY1VZVtxbWj6sszV1uvpY7EvNdXHgWVpnc1fJY9exCJ5KGU5",
  "key30": "4KPQGReR3Yqup2YY3wQzLb7YYgrH3KvPnHU8CF9xbvzB7DBaub2vz59GfTzCYXs64oAAa6MV4KpkcKeUm62NVr2J",
  "key31": "2rNJQ4bUmBo9tK3WBh4XyzzmgonxTNXvRML3i8XVkArsyxJT5Yc84Pe6sWnkLmxKZPLRkpnr1jpjoJYbd9jLyQRM",
  "key32": "2F9ay2W3nGZUE5gLuqjooEuRXvsfx5jLEHtq278SXbMAhuPUGk7xnuUsqBLg5yKPHHJxSczHzC8z645HtpJxzFAi",
  "key33": "3bFTLrpx1WWmYZeimfUEAQDKFxrgbYCqF3DqxyvkZ5XVFUWcUqXvfTdc1vBKJUpMJs6cdLXKYk1rxXgozyDJGNd",
  "key34": "4fwAyuKHTG4rDHBDx3K4axgL25Hz2wzqJCq1tLvF9U5UttahiMCspM9fRbeajdJuAP6Va8W4ynjqNUPn53kG2D7i",
  "key35": "25dKLG9R9ozG6J72W3Y7WwYx8eMCg8rLteXyjXTWkZskFgfGxFAW8ifHTkASJGDuszQDoefEjgqKYdvL4ADQ23LY",
  "key36": "3YskhRDZN1WRhH7R2jnSbJZZ6NtTXjDWHRHR7baC4RtLMy4PoreQE13agxAgQTi82dkFVuMCt2SFk6FuGfKfXS7W",
  "key37": "4ZZNiDpVDkDUmVEfDGjycPfFiPvQjpMkZCuwp39Gnyx1bZRP59DcCiUxySV1RMqumudC8wR2GkB4kn5GTFVSgsNa",
  "key38": "2LqJhYGAMGtCVDd3gEbyVsTskMXRLyCgK68hrMReoADx7GnSUEMNcow944PZJ48gbgoxwj2Y9t1qaGBHVKkEjvX",
  "key39": "tVJS5PY2gAVidy1nU9ZHvskyXuZzLSRDPtidFuro7yyt4AtKg6t4cnrxP7qxzyfkKLVVkGu3699rfYig1FYvw37",
  "key40": "2zgnDXY9gpqAk8JB5BuQsHtS39mf8jRWEax4nbwx5onnxRyiurBkLZ2WcLs8EfzJpCJgm77emxsqAWVVB7AZRW5h",
  "key41": "25GF8jHeRg4XUxodNxa7x7hBpUHBsi7KjQCknATg3ojc6zNpJbQZ4NEjVaikCYTJfpphh2SxeiyUdf7K76pKce1R",
  "key42": "58i2WgMgxcMAyn4hFsDbYJUehqk48A19L8Mh324DYL4tCznYGkYvUTKHFt9aDnCznivZVQ2PZbcd5FhoPFsLtee3",
  "key43": "2oHCiQ9uYFzW2rMnkS2wZzNWvZEy5w9fsfYXZzeD9AskfuH4KVDdvoJTZh83mjhiHXr4iYx5foW7M6V1ehwepEZh",
  "key44": "2M79cLUfoQyGHBQM2mwe4ecdBhzsL4yLqj3SbfJLqPz1mtcHPTEFZz41hqtcB2JqvAbpH918Gp3wZyELp6JuwB82",
  "key45": "4oeNtSpYdUeG9GRn1uNgkqoCuCKvBJxYUrbeXWBuWmotB2yJjUJzL6Nn6mgj4LgNzG2e7bYgp73ToEQffYkAbNs3",
  "key46": "4Ve9wUsN3TjjDeg8Xr4No2WagXSabA2RNAgoQz6rr2bTHCxVd29KcnfN6HnmhnezWBtJpiDachdu9GMMgzjY9dzQ",
  "key47": "2i4K5REpX7kc635W7w2TkxJjxs1PR6RLuGmMVMUTRuW5dHnQMKX8tPdb73UddwqWpb9z2gcudYGPzXuuKweZLvBS",
  "key48": "4s6uTqm8pmfh3v534xLqNwWwUgQzEhyQXpvLWkjBaHZ8xiucohHFeTsexujqsRLWPrFnFyfkMKxf3T3afAtdGmBM"
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
