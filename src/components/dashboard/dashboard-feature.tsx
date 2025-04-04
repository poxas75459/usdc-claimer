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
    "3a2TgyABDsUKh6362YViEEFouVG7XEEW9kNUoQZLNxWDNQEFGnEUkuNvgWvUfNFsTCuJFXre4cTzGC18GEuyW1f3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "x1De6DdLKLyJjcUbJTHDB5RgmmPmezAy46SMtg8eAGb2n7ezLfBmjpiRDktwiZTkXVEYX2VCXu92SmVpmWYafH4",
  "key1": "5bH4xJZ5gWRCdQK8t8qAxtGWurMhYs7cbCuSkyashYfNzewJsDu1mW8coN2BpW9DA9K86JtALmijgoRkNwb2cewm",
  "key2": "4txwa7cbPCS5nnRhBF3jgiCfaEji3w6wzpAJo7PckvAu8mhi1WsP3GQLDmTFWGoRCbkyi92Q9fgem8Kj9tAKzsPb",
  "key3": "3tMbNdTLNbKAnCYejnxWw2LXACuo5nLypB77Y5yzStyCX81reWuUNgCt8WNLZwKbnSvKcjS7UEZUjfrWF72GQNTV",
  "key4": "5Az2yYZwZhB2avoaF9YNY6vQt3WffWuWJchjM7KhWEMQa4dK3aBfYbq7nUgYcxbJE7yEnnX6wxVv9yNBwjX8gwsn",
  "key5": "paUbYQ7MmPt4vYCNRR893Cyq6yaDTGKfEkY1uboofASYLCgSMRM1cS39hftxa2nFPaMSFGi9XMo6Y1toxQThoVg",
  "key6": "3ZZAtWh44BuX6xqij6No8YcpWh6oeFoqoo3iW8WnxkjMtnGgFukZuFDTjMusgeG9XUgzLUmxjJmKWiPKLnYMVG24",
  "key7": "5fM3rg12RxtYiouBTFQEjKuncfS4GHJjd9P985NMA3MmV6zNxZz3LLmK1WEWzYsmeUz3LELiBxwGDtjoYPx4ob4d",
  "key8": "5iJvTxt81uhCAyyZ4T39ydo9dp4mABDWuC2WycciCpEk4aPC76C54pWYnVfohAxZU4tw2zPX5rsRCfADtdGxsrxi",
  "key9": "2BBMQFDRjK68MDPJvibmevXCVA8oKKyB7Bhdu63o2r5gexq4JGZGvtPSFhaeb9zXno4YndECBdjmCH2BsNntiauD",
  "key10": "V98o9zHxL1acHGHzycaZaxZ4RcYkDpqTznrLDzmFPoW5eAK7vsai4y5SZGG3Sa5mBod6hRBtoicAQkj1hNoHG2h",
  "key11": "5RVXVB9Hm3abR46DsXsXKpNSBcP2AxwtDxh3bTmfpDP4h9JEU5m7YxzYiNECKJnSVE21H3pmi846WVxLjyJy8yvV",
  "key12": "5sswws7FUr4PfTr9B8UmdQmCEVvHdAT7hymbB3b3ghP91mmA2mVXbsZ9h1GSHUjKhPfvqHW89rtzDsKhk4okp3NS",
  "key13": "26fGUbsUu4dXtdvH3tpdE9eEBtYSWsJGz9ASG79ob3BVVPC9uSyvv6vAh4M6SHiXktX3PBqLXVzGntVmPEWG6Rai",
  "key14": "3JPZtC1Gm394cYqXJKVfu6fF2wehcoFCsgVq41TBqvrA8MJBxT7P8kSaT4669cKwSy7e5uFxSrCqfYgZ42pBu5zh",
  "key15": "4LSpgsQJMBufutqPVqS1zoun3aVCYb4YnvVh8FmZoreE3QHGNJWe5mfyWu51TYjwsDR9J1XV4GZVkr35y6q6xbFL",
  "key16": "3pu6GtgCEA3S5KHxj9DnoVDLEg3wtTjG9hQQjHxhfx35GpnuJFheYQ9j1b82ceEruNfr6CimmN51YV7L6pmP76tK",
  "key17": "3zq3TSinhKT4f829JSVKCMtTNTjLrYBkZaMCYPCnW8Q2zRzSfE2zsSuKu1wZWHg3hxXahWAwM885f6FEEn7nZQN3",
  "key18": "QJyBqxgnVQJrD72nneKgYmSHL279HkkkbTvPEjwu3CojMTNXeMy925H3ooj8c1p26KVuxctBunwnispE1Ta5zZX",
  "key19": "4R21ESHrK6kkaXuCHDmi1kN51Sa4ReNJApB5GfoGwAyzMYETzkR5BNxGghuZiaFoCMBvjV7xiAJcRC6Mt21nSTE1",
  "key20": "2woZnoYMEjwRCqB5QaPBkCsk1epi2EqvHpfRjTng3HiAw8Smwu9aG53SfSYK5k4sTqSGnLCMF3yXJStE1ukNrmaS",
  "key21": "4WamqLgvEKzsT6s1M7JYFtW9oaucLHZiYC5A4vontBnbbGrtJg2WfGCLA9ZJxBH2wMMxvc1zjJM6cis1DcvLWdr3",
  "key22": "2KecXBWfu6QTNMKeZ6UoBiTxWsWpUVwD1y5rp1KeFYKiNx7W2nnyP3Asg2z7RyrRW7rXcpP781szpjihFuBtiAVS",
  "key23": "56nQnWV5ZXVtjTc8cYsZNnuEMGEqKawp7j4Tf7XR4J7CdJ5z1UUrMbDBB8ZnR7Yx57NwEhbnQeuMqCjQXqrVBTdt",
  "key24": "5JshPrxpWwdeZhQsfidh2VqZ2EQsJEUWdomzpZKkPbV3gm2L3urEYMPCf9SmeEbVGimeFWGnfsLQ6tzLgvMBebpu",
  "key25": "3rZLofgNtSunsJjFw2DhVEn18ZGjNyEfZUugweWLZ9EeBr6eAjoJwzc3ztcmqaTkjVSCyGss21gtmFDdNo1abCWY",
  "key26": "35N4sTPHGCNVggNRYBPv2Ym62qukFDj18FHkduWCgsb12WCvimVrVo1VzDgQSF6Zq3hCRGL4Y6jJNFX9mWradhxT",
  "key27": "4Xkf24retEoLfrKK6eEDb4EoMN3tcz51BJtWsYoApgYRRCtC76fJgnVa6rvNZnzidMavDd7wbgEVwZMP1hb29cXF",
  "key28": "5F6gC9KgFa8ih1vDLvp1Xki1A7RVjqpJ5NiALtLV18BvtagpsfzMdG1uMcf85xfFKEkvaNhgHEXCZLAE2VGzuyeK",
  "key29": "a2h56pyeQihqtkRCmD7fAtVQ6Jz2KbcwhUdPHSFdQi7Dm35JXnfqxHHhitjU36cCzwdWYoxD4yFuGSviLrkLwe7",
  "key30": "5fYZ2X29sP6H2w1N6kkz4ihxsdQwhvMbU95vYj9yVdpjwvfnJ29m8uZW5LA8w8jgzqun6k6r8NDebWGXQxktzL5j",
  "key31": "2krmMfzVxmWUxzV2KtuiT9kaW1EUhyvdoCzrWxQv5hoCqM7h97rdipyPuumBqPLFDpKU6YcSuC9QGpNpjLS5E9or",
  "key32": "41U4sFdEpAijgUCziku3ZYV3wDdCF5ndpqHd6W89cxWrKYrreFAPX4d6mDBZb8nSkHFVfNt7fBsaanqVoXwP1ipL",
  "key33": "2BnDesVoNAFsP9DNQRSukJpxujEY4ExnNTqD2PrQ9i6Hk1rWaSWDcz4o3JQmfqq5KbFL8FrtNxNjrkx5dTJQiyDF",
  "key34": "N8Zeq3tGnG16NjCPnXw8wq6EyC6Z9citpQFvj4m8TfugK4SS75phhwZzM75VrQnp98XP1pRz2WnUzCRDqN1MUmq"
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
