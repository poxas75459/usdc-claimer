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
    "RyYRkFSgbXTjUec9dzUqD4eAEdLyZ4FAZdwYoDAS49CoFms8inogKZBed5PpVA6PiCRZatZuXcd1Mdi5NpfoESW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Pq15tcF9arNGnYU5NU9jVyDMmvANW5teUKpYaskaKbco3vrqNExHdkR9gJU73bRUwL9NV855gzXRb6khM5FkdE5",
  "key1": "2KtUnjb7vUZVXB87bghqhzUn2umT5bCj6a1Y6RQB85Jk9tEPcj3hjHpH8RwuJUxhUU9eQYnka5KBAmdNdpqFmPqD",
  "key2": "4XEAyArWrzTA6iYzi9gDic4E1z9efR5LVVhu61UHDEaKv2CBZdKSNZSaY6WLbnTQtPK19RHasgd6aNmnqpNixqq3",
  "key3": "2Pvh4gNvbScrs9Bj7PLjmWnhgz3JGit5W2YN48Jr5Cw6fQ4YiBZRwNJuAcyNsQkv2sX4vXmtoYNnibmgxd8Ykmmj",
  "key4": "3dtxE1YkfjUQ6TBBQyEkCVcGaq7Tkr88QxxZGcqQxDF6iyVog9ZXTZdwdSsdgv1zd59csdbVDhcNXrptcvRTXXoR",
  "key5": "3uQ27DPcFSGiMPfgAV85E92RujFgzTJLknH8yApMNQvKcRUx8D1bXaeKTvWkJZTFAVSQTUZppVC8i26RinrUmPKZ",
  "key6": "4H2CczpH4Yshrt2knrndi4vz5ZpMDd4F7RVoUdopmQHP7SZk1uWhndzyMtsBDoWfbMjMAhLbC4VdSRf9ym4Q88fW",
  "key7": "4FMH2nrJDCGiUiBcn7FRK9jMTBSRp1ULoyMRPiuL8utcqA7kJ82NFpTZHxxiWEeFriDS4aM6oLRkk8cnnp21d8sQ",
  "key8": "34uDMqVCUXM3sz9RhPccsgXwuWQJjQr9tRXhRFN6MvezaEp5Pe6CMMAjGUzK2s5DYhW6mB2e4sSka3zw4PsUjAZt",
  "key9": "AMwrz4MvejfkxFABmxfEX85AV4AE3B3tZc16dgezh5dV32YUoyjk9hn4b7jGhnjaEUmzQT5dVDhyFGvWTKa9J4H",
  "key10": "H2JoCw3NB1tnRfswoFT2LWHe4wU6fpwFkbpodcFKWoomy1TdW9JnBybjasRAwAexGrRApKDNNM1pJPwXgNyJgvZ",
  "key11": "QM3vbdjxuf9tKioUmaPzMQTjqaddWbvHXJnj14Hh6raNL3LeZ5ShDThWbMbANXG97Ms3PijMyPNJPTw5VNqwzty",
  "key12": "3YnEGY8EzQvZhfZe9T8wZYcw9iwC2y3aNK8aWxgT7e8c4cgw6dvLLWx1KuEWfR484d8DsgZPipLDV6tFvRhimJHY",
  "key13": "2f3tDmTi1SA8uoevpTS5TQ8cvPkpfaKVMmDbqjJU9egZBbuhiAJmyE1HrZQBRTVXuH6ygsYULLRkgV3xCPTEvUko",
  "key14": "4DnSWMXXghqyZaUuAKaUtgFhbdZY2XGASG7ANJT367pQyd9FR7kgKtB2gqrygGULbh1LNQbDxQU7NVaxFeWXPnKq",
  "key15": "5rgKZEPdZGEoc6JZh4hfuVARv6hcrHjzbzocFj3WV6qidajMWnL6fyqSqbxMhN8ug6Rbxs1U489ELUaApJibbiEb",
  "key16": "52hnRwWBnyj5fdSenGq4jGBUCWSWypwcZz5vaZRTwmj4sCD1V9EWP93P1M7JFK8sQwh1eHU4cHbKmm6FqkHmStVM",
  "key17": "34DBvJtreNbnwUKz9XV7pPALMi9RnmHTnyR6h5qMGekgSHS9fmTTBjWgiJC1eFUVVgdWYPk7ejg3XbateVSBNXvD",
  "key18": "2pcTayHqtR5b2cqmitsmtxn9R4ievRg2H4NmpUNwLDko4ihWxDNmQsxMWd56kMpPPcFHHS1ZPyTAXhdG7NFWShbP",
  "key19": "5AJ7Vr2aKh7Wz2Hq2tQs7r5rsRzCgFvjpKGv332z3xRDfYiwGZHAmfNXsMmWcCSVAyMyHvKjA1gf45JCJYX6RdBp",
  "key20": "kGhjeN465VnNSAjusacQDVxG7xEH4JZ5vQ3tf49TAfbM68Qcdmh8fYYSXk5yZZfjRrC5iM2YWWAqh2ruMcmnEUp",
  "key21": "2FinKFANaRyUn9NaLxyzYoyGyzuCehXNYNkHAienLkWuBPb99dAjY9YDZva6vFrYAeHMGPra8Amp3QoemuciLMx8",
  "key22": "2cHX66obcCDXgFAMcRTPTypLeMA58EyaND2ziqNbGvVerAwDjZBEpbPoewDmQQTEkKzGQNdba85GTc299C4TMsVR",
  "key23": "MwivTHRnjzW7jrMAWaMaUSjJGupJez1TQ9LNjZrP42eBeV1udw65DEsmeqWtEZd4TLfgJ843qsUcJRzW9jYnpHh",
  "key24": "4etsGSDiBqHszTUJisRHJFjbYzv1Z7wzbFPvPXeTR3W9Y2j21qV5C2EQb3njhcxkrL5haZKeYDGsSZNZ8wb6X8Lv",
  "key25": "3KEGoPxcLfoZgS9o9fe3UHwgwSXufhzNJ2YTV8j2on4jd6qBEECGeCrQz6msc3AjwmDMcUhcx7NSAqTXFq9QR9q1",
  "key26": "5JPVADqEfeBGCNwG8a2XJL5HxWnuyZt5aNbuf3yPvwEZgUgUJfaG3Kg82EuWujervbBdNYzs3v9fVB56YFvLUkfM",
  "key27": "3jhftX8bZh7MM7yztwmY8zHnnsgHoLKvD88XTSBe5CtZKjQoYMbmqQXeJsSWnEyxyr3byy2oRJ3T87d5LiRErKnM",
  "key28": "3ckWPGZVX4GN1WU4f3YhnUS5X3iH96SKDnx7Cbhc7yBwDR6cHT1CEJ6ayDwdU52SyuM8r4VYnmioPnbZVJCiV9Fm",
  "key29": "2X3bhVmjWRvrdwJVquwn9aKdTddYKzstzLqANCYnh6ydxHv5GVsRJCwTc17ZipUb29nTsZNTeYCuibL9B5UK3viL",
  "key30": "5ymT3kByY3kAGfyZrDMwdGBvBG48xpwPguRqVukswuUPwHKeWQYYmH8MXowqtwhmpUZx19Txv59oK9sScHKCckVY",
  "key31": "kTsxkwRVadNVKta1RJjjC2WHFSGCP3uFokTmPH76jJrSEJ4CKEreKu29ZxQxMYJ3DMVtg9iBTHbzuCdy1TLbnCD",
  "key32": "3zDbXazrugB6U5zLGyXVZDB9bEHrtuaZwwGFyEvNqRKfeY4gcd6psT9Qmih3xTYR9yTKgjT1tpEvZrX4RUR1sRjQ",
  "key33": "5UpfxFySKt2c7Z45935f2vhHFy8rJYBcx7Hzst8UebUgEwXhzKiFpm3wGoEypWw1o7XfZgRyvPSa5NjywdEFKMR",
  "key34": "3uuWVWDYwesL5YexPwNpVPuRd7CPohsJddhpWKrGMCd1WAFbRiQEmQ5Ca6ZWamiaMq1H6b9Qruz2tzVXh1X65AAA",
  "key35": "4sKbxwG4VHwCvXzaPynpVgGkM12R6j9r7dJcaCB6BVTS2wPWtgUjKA5BG9mSpycXvjKRtMXV9zfoZ2bGnjQAjAnA",
  "key36": "2UWo177pYbBtHHU2fgAeWV9CNk1mKBekSC8iSd8QYdApLkSV3Visq77UUwq6171ptf9txe9N3gJ7kmSAM14Zsxky"
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
