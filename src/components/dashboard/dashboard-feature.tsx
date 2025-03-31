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
    "58HFc2Ae1GWw6YmGFsyJ6SFtsGzw2xytVTiFCPftNTYnf2DEPKYURmZX2YPXfSLD3p64YtMifxbrw2uC1CEubfs3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JoNQn6FWctagX9xctCeEmw21F9Y9onZoRC9tx7nhtpfrKrQdbC4LxVgTa7ChAw1ybSM8B8APHE8p3A3wxHrumPq",
  "key1": "3iutfY6vYjqxs6h6R4T6jZP8DBcDF5EZDqRNBEZtWa7EvcMzD3soeSnhD7oi5k5W7fMLqRXpNw7YABSUtbmoGfMx",
  "key2": "6744qjdLUVczV11L87c7HfLfqzyNroErpvAFe3JFXsY2TcqdwB2yePiy7RhJ9fffso53ZyyF5K1uy7uiyBpm3GrP",
  "key3": "4HW8jd5xPnCRzNQBBtehM81jua8ojVMDsX3BtUJxBcGJsPBghLbSU34U5dBJSizcHvKUCXB6XZFPcvPeyEijU4Rd",
  "key4": "2N7NLHKN1JA9boxvUuZGkHRpwiphfTCNxzd3rXj7QLpUvynL2HaRumBKMj9UuqtKbnj5agiiejqT4SwbnWQ2yy1t",
  "key5": "2WGLTbhbzPQGaYL1s9pT2X1Vg5cBrj3sSLiqcnnqg3QQhTCZNyDSAoGsB6dNWktG1UAxr1ruS2Wh5CumoP3rEVwQ",
  "key6": "5Lif5sRoZPfe7jKUt5eDZ1wMigYeNUqTkJdXyKX11MqHRm3dSBnupNSxt8k9i8q6gZtxH1EnbdaMkRYQR4SfaLpd",
  "key7": "34rctqUsLDMbpSMAg5Rup6CPRQvm7uj5dpEbH8fjvU8cHKZycAJNbvp4e5qCCUtHGryLnT12AmyTUwL2ugtqMx7z",
  "key8": "w8bZFyNd17niY7WHQPWM6ZBPuC1aZyUrLBRXAesugzB5NK8hoHrjLJpd5NzJtdbVVFZtJuy3SXoGKhUCK6WRpV2",
  "key9": "5KMVqdLLUEHkN6GkARP4WaiCbjYCzGoeXovBshf6U4xjk6L9CzNgmumHYQAJpyg6UpZfUwF6HCE1fGUTDphLF4YJ",
  "key10": "3yqTPDYagJYJH9Q6puAK4yvau5VjcgewUvUE6LvzdDFBE26rKdf6dtXzxqiSXaAAyL87jfEmxDm9JJ5XBnAZWP3Z",
  "key11": "346vxLgjE6jcy8gh3NG433B9hVmqrH8k5jPqAJho2cNftvD4ritCpxmry4mritv9DF4J65S5X8jvqYbvS61Hqkue",
  "key12": "46CcHUqEXXigshMW5SptG5oniCsq7DE4ZPkRuVGbRBLMEYoEYdtK8YWxViYrYZjuMHFqq2WDWM2UV4916y1vnnU9",
  "key13": "2xTZJtoztGoammRNFHW5ajhx5xWxYiu2eaxe3Btoujv8E9rEECmurjdZqbGeotecPyzsdbpRwiPR5LjsfR5buPh5",
  "key14": "5ThHQdcXSYfqiquNsSU99PVS5jSJSp8iGu7rbrUSHEW63rPWyqvKTfev6jHY6oitMsEhHNAJbSSo1UBNqhFi3jgS",
  "key15": "4s1iN6hf56umDk7f5jyEeBY4YqBmQqj5CFbNLgbonvB2XyXCaipm5jwrtmaKLaUPoKv8EnrfYxAWKUs5hRUrtNZw",
  "key16": "2qyvMNiswBnYzyNfySYzaAfsUDL91U8NeSVWLHW9NvARodDdFqHNw6KAQ8hiHtDNbwbzTGtHNLvc2jcTcSv8NEz9",
  "key17": "5jfj9FMJ3pBC1Fmd6WPwJ1WCJGetBmkBtPds7qTGpruTM1fvdXpJf74xneUs85hwpuoRF5jYbjk3ocxeJ4LnDofZ",
  "key18": "2XTLSM9q4CbwJLXE72vNnoEBe5HALA8aKM4RjUabz3Fs3XupV71RJ6Kj3PABnHJnKtXrw7MekZPb9sHBb3tQGEfy",
  "key19": "3LScuXvwBemvyRbHvCzUPEF32s7Rhdx9XDtjYNKZZdpN8fq3BrQiLrCT5PpGU3Gxj5fVDwYb6PzQmTnyYYc4T67j",
  "key20": "31PcyQcf1UMMZspXpEkZrY1bGueCmq1CoQGX4wd1YX4hrmp7zLFKSUfaYdb9nNi1FkFMMAZhNZWjqxmxd9YXMCGG",
  "key21": "4btePE4CkVagYfnQoeWkPcKfF4ZczBXaBnmWZhmPsXXjzYRgRPbjjtZwUskuc7SH4b6efUhRuvDdU5JwjufpJJte",
  "key22": "4PPUnBEV4Nx6HGP9trTCzDTWKgZfUQyC1U9ndt9Gcw3SdZNy8HxfMNdcodiGS252rti5RwkSeX7r6Jf5NzPnVnxv",
  "key23": "4RLLHryrvikeANein5Fv8MAmtPikzaGJtg2YJtys2pVnPfwWJpqUT4Tx8VmRinXjEM61oKRraqoAx25xJdzS8Tsg",
  "key24": "2qspDqbFSwnkMydXnq3SqGK1tu5nHbCabKvSpitr95yhWeJohuzFmeDL4kXRHv24Ke7qp9ZSKb7CsvBHS1S1YHYo",
  "key25": "qYWBthR8xXR6Z7YECRNmV3n3C2qhr8hUSTedykayXwJNhDZVdXwk2k9GBvtETYnitoXqQ2vGAnd9WMaStaDYk9a",
  "key26": "44EJdPLuuxJF6p4nbfJARuboURz3HTPrCKUBC61haoGkQ5QJVZAenWjjmx9vmUxBN3C3ytcMFvMhZmQZsPHGpU1A",
  "key27": "4giPmtUnquvTPqbgvRtvDqpBv7wJRZBpnqv8ayHhWP4grHckByDKrSbbAjJ5X8LqfQjNBKQHXHdxKkiyqceeyZ1F",
  "key28": "4QpEt1FzmsrHqE3hFxBFk1wHTDBCRQT2nANHRE1vdf2znKeANQT7kLd5AGMJUFyec2f8eRcFzXAWoMFQNm79T1SC",
  "key29": "2wDJa6AVgyPsMtFXQfbRpR3UVjAoPiwhcEVTFiqASzTrVu8Gx1fbSFhUMGgvzqG4YnQ6b3gQHodHfpyszonA2kiT",
  "key30": "5y9uMwK7z3YB4X9xhf8YsA9ZXYX9t1pr1kJmLQxdqPenbK82x4dudnuxeeJD1vzEDc8wYrgjQhSaa4ppyQPybvhe",
  "key31": "3xBSoehZdupQrvNqqwzqGC4TuSFsVh6Aj3dxkseRbv2rKxR6pcpEe5bAY3VS3N1NToZDv6fQ1A1tkBBMnN8QZNgG",
  "key32": "4UHgAxCsfNKRyUT8WH81VoWH2WzwfEgsr5k3ZJJMaPmrQ1LXxLoTPjHsgy3D7xQdMxQoFpSiy8dNR1YXnNGCxPbb",
  "key33": "3vyFkRw3kz5G8RQFu97gHABa6zrgHvNeuT7Qz2mncYM9uWGVnVxTsCh7ozPYDs6A9e94DC5T7YdkicjswkycGX6J",
  "key34": "2f5CgWa4GbrQ1SvYEponegwAC8LXvFVP2dQYjLjAJ9KtND9oa7FVnVP1Sv6BTZWJSqiPTPHyEg83zBhf26RRcQg5",
  "key35": "Ez7NKJLciuVAR8NZ9w8PsKt2sjfh6cQMy6yS3oGjaKsrKomVLvQQoidaBAQhUhyFGoz6kaWFHWtyWJohdryeWcE",
  "key36": "5BYsiWxJbmegHtVqWH8iTsiZnJwsc6nDZEf2WdXzFXCQdHFbsgovdSqDBzSWvRQUwqvSUmDkTLDrmYCtdFLRkg5S",
  "key37": "523qdiY8Q6iQUqAdbAHLTa63E23QVQkeuUi7ijjA9rw769dAy451e8m1tafLeEdpo5UjqsEYbTuffTxEqgj2KYZe",
  "key38": "MQvU6LwX6iK9kJrEztjgyoD5R9VNWb5LxH4jxgqeRhragYWUXZ8VSCdsBNEa1Z6uBkHFiHPenb6R9KSkU6owyXh"
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
