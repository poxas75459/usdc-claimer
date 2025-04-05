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
    "J8TSpuVpnHE7Drm5zMfHfyLDXRHFA9d5mFV5XfHfHqB7rCv6YWdy3apdzXJR67xY1QKBWfxmbpZEMwhSqDk1MNp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dbXRhT6JKmhaMoEDc54ApVVMm4KGZbNkThKdbx3X5B4gJXpNPUuGx971fyPJ1EYjMUf2NuKwYmUMGwcCYaG164J",
  "key1": "STfZ2cnisA92CiueSLEd5S9iAHv6k9H4LB9GYTy3MK8g9sTExg4kmT5TYthUhXbg3Pfo9z4r17Wj1umfZZuMe66",
  "key2": "MLRaWiXhojEgWYijDskjUe8Hnh1tktLxWGB4ApY9x4Zc1VuKLDRyjYMwyt9areQpxUFoKx3EHVLbWNCQAWgUNyg",
  "key3": "XPkbQvgQbnWBMvgreAJ59QsVzhPRAbSVmbLHBRTk3P1bQKCLMS1AnrvPLoRPcMRdc6hD5bZchNZXFpbKxRuFaUY",
  "key4": "3WrW9bm4Kz9yfKvdQCp3cFpWm6uEpEhNDKikGFNNKukJrDuixQjR6fW8y5rk9w3ALNHXjASKUX5ojWARmUZxTik5",
  "key5": "4qfsdqrgB2uoxjuPqQCWJHmyT89dwC5AB5iif9VDE4cfzPVrqYFcRPsw7wfEEqiq6zFQ3uNykA3UaHHBVMCkcDD1",
  "key6": "zsbQcGS3QMsedfniZ9mJ3JUHeyv8rzNfxrUZffcyeACJJkFL8D5vDTKCmmFfCghnKuusurAkoNMXQhMb8sEAfU2",
  "key7": "2AEEmojNiinE9JcHLhzVX2Rqvt4XivmmtHSoHeRYzdW2dhxKbWJLHTM7xdYdxTuzWXEAhaY1dh5cScrAbexyA4mD",
  "key8": "2suF8T1U5U2dsdmEpVBo57rPHrmFZ54axDr5yNajEikQkMQj1VVxHd3BUCHZMg5i5G1ZHnEKnt9WNALRCy8xfa2q",
  "key9": "4gqQ7MEYNLC6cg4Gc3TEXVPre5J5tV5oiQSAwfGstAiiU6turS6dpUJ6jtnoxzHCYNvY7siucUKRPnSnWzwYH97k",
  "key10": "21CYnnFoHQicwZ6J75oauJnhTJNmP3hom48b9YU6quQPKFE7KaCoVR9v1VZnqGHZiszKavvVDKWa19jGusEcjvRc",
  "key11": "2roWcosTVfZRfGX8ckm4tgm993mdyK6u92bJNLnc9fs6SzCw3S6UK7aVKLKbqQK6KUrG6TXmradJ6EvgobfAZEEa",
  "key12": "2L2Xhkffu2QqSqwjgMtVLfvvy5KMf6grEWrpmtYsfF1xL8V8bZ2fQ4kwuJzxHzy5jKua2qS1sKpwtniTxiHF1ojQ",
  "key13": "59aCrdsHXtv8TDo3PqYdxfZGsBsDdKmn9HdmwvXCSfYvTaqvjzVgyvHgQAVPPHF2KMJAF9ZQGbdEYpk7ZX2b5fcW",
  "key14": "3KiLRjTRUKXeG6SbF3pF3CkLSUxKe5mqywc88wAFMv12W5XJGx9SWTH1KcpXqMBf8RZ7Ftbgv665DJSohmU2VmzH",
  "key15": "2BM1nFYvs6MtHbLUtZZVAh6DHkuuBoU4vbuzGytkjogsHWc4MUQ9LuHNxaDWpSKbJR3BeDQZd2cUC8KjEGH9LFtt",
  "key16": "2c7wB4ThV8YecgpNke5Z8AvbRqGyiB6hVJiPo9FNBbYZwt4kwzDSdNtQFphfrmbaZtCnD9fM1WzpMjTemu2iB8pB",
  "key17": "5mQD8Z4m3tfbbRBPiroQu1hbrrS1jfYXPJVapPEWLymDW4VGbGPxSvFuaornj2XPJadZzFzkFBtmhnetmxNsWsXa",
  "key18": "PrDTVA5zLg5y8BBFfRb7f5ah2KQSKMcLPb4Lpk9m5upNsLtVEmxvKr65Y5cm62dGdD6wCGgwY2aSVFCfJwRzYyo",
  "key19": "2xgTjBrwabQN7ELfsFvQ4bPmygqQXjP1r7DgQvZURrScwQ77tSRaAWvFK6sN9ccNcT9g7LKv97iVXNzSvPMQ5T4c",
  "key20": "2D9fAnu3MPF7VeiaUHgLUB97DWoG4KLthDforpncU9iwwNJKT84hf1EFZt3P5Ejiqs1wk5GZepBXhWocgUj6DThx",
  "key21": "3HXifL1UhCPC8ERTyzNByic1fpXt9JwbpTHAcKW8Nec7Vdsj4czrLqiU5LyDBTqeyZLRydt6VAMezpHAPna2wcgC",
  "key22": "kPFbYWGSLmsTk2nqqLWxRwBh6xvgyLFgx1atTBfQWkz78TrsEKVNbe9PhYQNYATi4eRuFtXqQj6cK6g17sRzGEB",
  "key23": "2P3tV1occ5BozLtP4jXQajvAtunq9tdNpRoL7HuTv1VySiUfRZx8rvQgkSpatTAM5SRBaAUkhD24eU85CS76FjGE",
  "key24": "4YwinK59fJ44SJoBkFZyGmaHw3p961bi4yvekP9dRATBrHZkqv5TraiYQWYcP5zwAWUZy3ZiVSuxN6xSNYgH25Gr",
  "key25": "45WwsygUudeiZuzwArHpdoJuS5F7dCyrEsWAerJqLgJHKeZJKhMwNxmgDKtLPENhP9cC6S7NVCTUvBvVwFoaN56c",
  "key26": "43BjA1W74riG5sfuTJxin7UC2KkHdr1QbYsAn6imZQaTuXThsTdMQdsBoUg5MeNqcD8smwUT6BMkZ9d2qj7vsLQ7",
  "key27": "3ddETJSMAhbJpvQ2cMKVogodFSjvDfZCLjrPQYNT39XEVVe8xYEdSze3uVdHiVZ9b2K7VLdmHL4t2oLjxtXJMNRA",
  "key28": "2b5GjBo73oKPzhJLRLEdw1iUbRxBUsRirhYwV52LjcmxLKVEvkFBQSZSkVNWJynHM7RfodY9sX4K6HzH5NKddaHn",
  "key29": "45N4GC5RFqZCEve3iWTTiojSLASQ2Dns3bw52Uud2Ba4UnBFbZc1jepqQAc3LUrqGhFhCkqBaxkzDykgfuz9eEMw",
  "key30": "KHk2Pa1EE5cVzp1XsaCSucqUWkp3k1eNhfFUgKXVypZqNYX1VAagQHm45fuJ24rLznrobYgmXpXNa3yPrP1cFqk",
  "key31": "2SQ3LRs6XgdmrZ1iatbwuRGG9U3qKPMDWYW7qMWyGunyBYxA1uKKsDh6jKE2U5KDDb165Q3w3g83VFY8RDB9WyxY",
  "key32": "47vkU6cFEm4knZvQn27QbjJfWAcje97EzBxs9kLVYARqRjN8nW4PBbruj8FXKShdt162D2yUJqxr7ZDPL7CmgLLQ",
  "key33": "4EQNdzQZLxY7o6yRze46NYtwTbPaMd9WsD75NwDnV4twjWyiwUdE77RAKB7b5WtV9qt6iULJAwBDHQ9oP46xY7sK",
  "key34": "4udRkMQzgWAP6UtLk9YqUpAgd9Sf39Zo9dQxGvD84GD4DkjYzQrCc5T7gMEgGuHhAwbBLPPN6NxoGYyCgC9UaPrw",
  "key35": "XR4kt8foEJp1xxLuKBb5T42raYHcgssbGYQdBykpwXeXwnsuP5hNjML2H4NC4jizo8ohpQXj1xn4DKiiZFnWivs",
  "key36": "4sYusUXDjnvkeQ5WZ4hCP2qQwGDRH7XJSfoJA9FG9VwRH2koFv3HS9bDBJoqHCzvTecrQDZrEKUziDXGsiyBgHU5",
  "key37": "3ac1Q6x7Kmv36dC2M6RetUFCd5TZ2ZjsCNFFcqa1rYVpRaRxLidUQR1XnxqwzRXgD9N3FUjYLTWY7HcaUyVp49XT",
  "key38": "5WzdTUUMvVfJUfVVeHWovANq91Lrzps1DVX1rj1omxfh6Rsrmp7Eiyu9fUbXFxHcu2U6oRFr9NwZbt3bzXdKxM3y",
  "key39": "5ZrktbJm3PgEdHGQTjNAg5AA474PijtZZmNahTvsE4insyvdYZcBnaNd7VoindeAsjDyjJFxy6wvaTh6g5cKJLG7",
  "key40": "3Lkw1bUqRLdeDBZcFSB6k3y8NYdHfLaAgjVSjCqupykFv8r2476Uu7XR9A6gyY3ZTVAE9qYAA3DiqJNeKcdnZGYQ",
  "key41": "44ayZnPZjWFashUdTygeNVWVHzULzHaNALYe7KsxAd8XTd5VQ61B5H9zygYhMVwkE3Jruwh7RY98VWFCC2U2fytZ",
  "key42": "36ybKVk4wjipDbNWRyhQ1rJsk384ash2EvyTpfVJC7k9MNWKY8Yvw5EAcG3uQT9V7m8rP8yirHYdyhebYZVQgKmr",
  "key43": "KakiTZkT9XP4riifvDp2KMmqQLvdhZRnWqPZR5MPTY1hAVrUmRZSnKMcnKKTtN8FPJiU1nNFhE5TUwiyNmfzzLn",
  "key44": "HWWhbrkW6Qz9E4My7Su1BWxyVvmBiYcFEGFYixwnGgwvTYx7pRqTFDVNJEXU54PH6AykZzw9Ddxxn1hbGKgi5DH",
  "key45": "4UJMRZo275GbMkEz6mii6n1ZJGsJPcE8zZZe3KJqgxGzbfR9Mr7CYU7bDHqUugBN5xg7uRYAx9717inS6i8TEc7b",
  "key46": "n9bE5QxW33LFatXdDLK4VgnNBzx36nxaQQGyqXgwbVXMmFfncTaLZRML6RsvFw16a5X2zzd5pdk3gDnCTsZC8iC",
  "key47": "3Gj6z4RKnxEnKPVkxG1DPAkC7RdKc9LWEvwwxNFktefvrb6BJFShuicZi2tBucKms1o4M6iP48shkdmhjNnxdvML",
  "key48": "3FxcUCnTiYkcwG9gFd3dsd5zuT1R2vgBPRJahYZxzH16f9a1G2Ce4BuA9c53H8htADCYo8Gi34LsKsaeJavd9n8",
  "key49": "3rU9cQn4fg7VqQkSYgiLJqzZy6LvBxuRc1h5bgfNkeJpJhyTwuohncV9C8L6Uczo99u5cCQBU6fhTUHRFp1t3kub"
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
