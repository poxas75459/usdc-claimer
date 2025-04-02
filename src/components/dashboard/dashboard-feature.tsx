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
    "2mQxrq9BLGbNgwzAsou1xfCv3KdYveUXGThCgkmnVxfyC1wtaXwmxSSHU5y5oVqNEcJ6nuoZAzcETciY6AptR44X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2L5gDUJRVZFG5dK3nG1bCcnuoLhMwhx9wq2AyaceSvoTPDaNdAqdvp1fngHQ41BaXZtmL3s5pSh3pNmBBoyyXYoR",
  "key1": "2cMBmyySSzk67H9f4XzS8D6svH5WmWrKxpRSj3LyNb4aWhvX4etDCeC7tNe6xrArgxoSjMTKPv8FF7eKwouZBsF8",
  "key2": "5fGpnuxUNTJ5TCK552eTHmF2exkXc6SLsHvLnbwsc5Q94NQfJS68b42VpBKYCPMdxxHHsZQyhamVZUNf1Pg8xE9",
  "key3": "35AE2sB2huiVHncz2dE1fr3EVuqgtxPDVCPQFvpm22BXK691MEnBiGRrSzE94nbcFGFVBoYV4hZ5AAdDXbCAEeAi",
  "key4": "3d6vk2qgLgDZg1ZnFj9rxfMxFnERFvZA2vUC8Q3D8KcsneCo6LnWyh1WfSpKwibCmHMr6NSxLexcmjBq32e8C7AF",
  "key5": "2MTCwanvHHA6bF4w38FWirxtX469eJufsDzs7c5fhp8d3W4dULAkBns6dASHUSp7iomW3PK1dHr7cKkzf32vuaqn",
  "key6": "4pye57LXkC5BjqQcHjDFE2US4x4Pz58ujuoKAfFYDLBAN4c3tVg1jLHPMek2Mb2D2DbdeRRPtcDWTNM7ZG8TVkrA",
  "key7": "9gvFJsRhXX6NwQkNtjWRmv8RG45TajnohG9XByJoF98ZXhcUS5mwVpP7ybpWDwXZ4hJXZ8J5UhKwH5zmwD6APfM",
  "key8": "4PLo97NWHse7RL9C5E9Mt5ohv5VQzxYtfvFA2ZJPQ4eoVQv7idVEcAEthRsMJHbuURUQXcP9zLdbpEQ5y2optDQN",
  "key9": "6B9fzMn7TT6r1PFT7XJS1akNu485Kb5ZCQSdTe7KwYDpY6CoKXe7YxMG3kmJnMxQY82M8okJSsYrcGsSMMZRnWm",
  "key10": "5Yab1uLvieXiAanC7r4TDmziBfB1eHCrzyYo5zzkEJTZgcY3vPoTcxPd9NUAZBrD54wz4B4NrMvZGqEsNb73zqUz",
  "key11": "442wE5yBSWtBdKHmxYF41AP5TrTnem5k743smQWTBNyuvzVcKfkdS7p5VAfhHW2covphkS7HNpvYsNpFcuHNULh5",
  "key12": "3RPTJAWAn64SHwD1mA4HT8b2UdK73XuRiH2HmosLztnrx9Ep93L7Aj52cvXmmanyLchLPVwpmHv39ZuQJ2arcPhC",
  "key13": "4vDNoqxa6dj5WrErcpyp8uYaMQN7sf5WWqrS73DKWGpwrwTW2pcrYtB1catnr9gFYGXn4BZdMUA2QnhbgGjmwzv4",
  "key14": "2oVSQnq2oZbgiUiySk6Wst9Ms42bEhjg4ZQ9GFVCqcPkZc9Xxr29uewAefu1RKm3xqN7CUmad2yW3WcZ8DALenEa",
  "key15": "GQnerTdYyK61hKeGfgbazF7hpYL4mDm6H6dcUHEigsaWnZyy3RE9QbjPz3V3ndMrJ6Snctkq3PMvNh8m2G7eMZa",
  "key16": "2RGfKm3WShk2uFUBkH9QeAt6ZTgrq6zbhfmGD1BEKQWve5RksxUaqtU3XF2FBhkCzkeMYQX3zrcibhe12Du91EUt",
  "key17": "2ejejo6ew8Qi4vwTaiG19QNsgwzTLZtDqiyjMf7FJ9TxeuspSg3F1s3bqGaqEqoTLZf1QQcHeBjcqpHnWqRMhM6X",
  "key18": "23rFpx81k91jucf8k9brqgdJuwoBAu6Lc53Wt7YDMTZ8xcPAb9tP77JKQDzGKQueEcJDT8wttDNbddneVUA1tFvf",
  "key19": "3mXfzc4izEzM4s68RBXGn3vb74GnYPGgVMnku5GrL6BzFeHh19m2NRZhSYj33Caat86sUFVjZK6T4eauY86Jy49g",
  "key20": "4MWFkbA8hYFwHQcDJ6StpqP8euJrYRVar5VfJtyekBwouag9PsAGh4Xvjbkg3pgWxbER6ujdsYB28VeYkUnv8UmY",
  "key21": "65cD9ePuzjDo2oRTz135vE8FaVuNNC5turv4u5na9EEbsBPBMQrpHbJ6shFHihKC1osdBgw4uZKFeT1ESDargPx5",
  "key22": "5Y65jGjjbYnhQSXTPga53cCsdBkjo6vvhY948GzqgQWv7bWFnHoUMLgnsWXJUjdy8y2kLTkRxp8M9w1UVfRRuA8s",
  "key23": "3Bitf7Rpo1Bg14E8KabessDnjvXHNPLECQYjj99P2WYstoYheb7foDp7Df7H6GNPrpCwC2vk45gQyo4bTUd79sJL",
  "key24": "3CgMG3BHo1NeYbm9tLQMvkSHKQRMTkMvspGyMsHWbWE47iqwMPZMFCtutAovfVk8B85x9hj58AKbp3JZ1GsGUmjf",
  "key25": "4FSbGSCPpQG9DZtVTqRpMhq7bdSCsedyJzL1QnckHXwFH7LHL8zJMjRnzNQ7K8AEPQ7qFrjwULziyBKUVVzBekiT",
  "key26": "3efYjkt8pEF2XcNvFb5LVjm9NSMhqxtuzJAivJoWHGZpLyMxGEff7dY6RG9Hw47nMh3eqbSZjhQz4pgdzi7Kbkud",
  "key27": "5ssuMGMtqn3QTzBuabGPSGdTfUysu3YH7oqvZXaWKHohieRWG57k3X9PHorJJ5x31pMwFc2cyjq7H5sqgYnqgUUv",
  "key28": "4PJTYwFQccCpUtA6oK4hyDDNksyWcGPCnfmJg4WDd4NxykZWLuZLiUYK1fLj4F6QN3pCmQ9xHc5a6QZEB945FDSY",
  "key29": "AxpBFi1u6eNR3Lbdk1HjGJaiZgDKvsUg1wY22MaZE8ZUCud8j7k9TtjUFurJtCon1FYYNQr8VeFD59wsEX6mbfa",
  "key30": "5ScdxxGzpdyHXKMfLtBFmNjdeUkw7mef29aJLWCg9aK4unkcSfX8Wnc4ErVEG626C1cj6VVaoRqA5wVcQRgFdJdQ",
  "key31": "aiM1amvv2RFF7P3PPsfZQT8YJU19sqE8YRFq59GS5jzp7D9BySAj5HSnPu8vXwax4GAVZRxCmJUbjNrdaTzbWyS",
  "key32": "355t8vrzPFRXhAjt9FBhRXy5JoxPpNWd7k61ynCnuNk1Je6Xw3Bs2yuzv1yyxabjmsYWqYewfsoKZ3hE3m76eLPz",
  "key33": "6gZh1yLiiAL94LrQoZz4YxdBemMCLmZN2T7LTTSgKUC3cND5kuasfgrs8y9TuXrp3qq93As6WdoCqrRhafYGRvt",
  "key34": "3sj5SdMkSHxvTLBerhfpheMvn6psexexSLTijHCoUYRNA8UstfcxvghZ8SEdqkD7XdihgpBeg1eftshWbNs5mn5j",
  "key35": "nLVqvShzmPatcVNKNtmkiBLFovwtQQ9BnPV8zpcMb3jzSpdph5VBnEpwC5w3ejZL7GAxsugSSf9AN9gJWFZwD2P",
  "key36": "3CaYehNwFeHvEy6XSJm6UgvtVFextpMfTWWEYeZRZQG7gfzmmx33gx85z9eDEaZE3abu29YFBKayUNxND13Jmhfa",
  "key37": "QHaDqkhhzsesdLmhmRGnST9PN89HAcibrQ7iovRUvdyn41SvFhw3XPboytZqwALaNYjYjaYEtNoNp2JiQVBnbMk",
  "key38": "5kTZcjZoAAieqgWHQfb9Zv1CDZqpPraHBiRPVuXe8QZaYeSxBxBSTi8JdnRNBkeQ9W7uVkwSJ4qdRE4UcSxs4b5F",
  "key39": "3dhvmHZmm5sg1QHVmUqmFZfkCAWRYW2m3Bw4PW9rWjoEB7kM4waKqHg55WyqeZzdKB6R56su5PQR5ZkkiRwjMoVr",
  "key40": "4fmVtBbA9UGmbRibax9e31CmD9CYqyKjUtR1MHHfAXw7WNZGDuMBbkdPDuWEozixxvmeNWZFAhdC8vQrqtLE5j2p",
  "key41": "4tbcK9C33GrtjdRw6kJdMGBSNABcmTUfNiuQnaDBXNDRoV583Rv9npXw8NWQTYiG2krQnvYsq1d4vaKZsXfkakgW",
  "key42": "4ZYgguVtvyC4LRwjDwNjqHDGLEUXDcWh4kwKcGdfGYRaycH4bSDZG83yKKxVceiQEXeUc3pCcjXWSf4kABX1BhfJ",
  "key43": "ZAfP4wJQmZ7WDzpg71hNXm2bhGbti5NNZM7asGqvLEFEV5uSzA1RyamJBh3bMedsogLpBLNs5meJRycfa3CT9m2",
  "key44": "42dk2mC3r83QDnjkX6sebV1rv1YiqyKVJGEkZa2dLJ77Gb7v6ULT3G5sqpNNaXWndHt1hFXzqXL7tLWB9nJ9ZqWx",
  "key45": "32hCiVRU1nLPQ3YqhWPHQiSwCEcR6pEDWsogT4ouzApJvF6VuSeBfbzyTNSzkhDnQ73snPmEjqWKMUHCsfhti96A",
  "key46": "6352hxJex4KeajN29wc59nob6ESMWmXQj3FicnRcHn3GQEZGcFBYdvdF53katKKxQooA9zKZuTihMwWcyjHffGiR",
  "key47": "3m7j7TgDSCf5mbtoS9nBGSDpKYv3PwcXPvimXvTQjjsGSEmQ6t4Apedxu1B5qGX72aP5jDvtzJvjgBNnXKnt5sBm",
  "key48": "67YBGogowZjSSWAiSNMjLStHzir8SzEqj8ioTWmWxiyzqtz8rPJjWr5p6a1YRafJpHf8umB3enWB4gSc6ZxYcE3d"
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
