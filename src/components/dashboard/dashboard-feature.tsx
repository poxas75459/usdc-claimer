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
    "5SwKXtp1MFYYM3zRJcnghQG9RmvbeUg9aKuYGxdGKsHMRoWiF9WDSXgr6BpaicXcXW9nyZ3x8vGd1LwBjjCxAcZH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AjXMNH7T6BMv9RkC8A4Us59Kv8ghbDLboFfndjESaCGMrcnmxtS8Da9FhiP7dPzh48fdnKVNTXZpDobRJc3Pgye",
  "key1": "49SeNt2deUuc9h88KT7P4g7ZfQsARoPAFm74z1c1Qd25teaPvxwpuDVfN1sAvckhKGdH7VK8cQCWyTyoCwtf9hcq",
  "key2": "5pkF5RUwJasxaRcV8Ec9CuQTcNYa67GN8pp3EPbhHJaAQBP2mgsaWkCGChwWjD9JGTcQFWo1sPoW8sjZPqv4FhZj",
  "key3": "51zd4bDhCux4jFufJLJoXP31XmLQEdsJo88yTAem2Cw81sTBi9EeQYhQT6LuRabL1gqFLrhh95398SreYGz6wDoT",
  "key4": "Aw5jqZQoBcJYMQpZFEFkKtzjmYfnJXZkMQWt7xkGDFSUQ9rFXJ7PEfTeXcDKYyvSKmfcb9YPaFeVGApkUB8B1WY",
  "key5": "s4scyc1dLuY2p1L94DtgArJHo1LHCpu1M1fu3EcQSMJgoa9BPtrzL16xh1CGWa9ipKWqJdQVtgZrsYgiBuxS976",
  "key6": "4zKAJ6N5VPKNyeDSHhVwMcK7X8DaHmCjXEqW6StyF3eYuTWxA9e6Tnoqdy7WdWKQn6rzMe4ZPzEqe4HNXeP86W9A",
  "key7": "5p37kobnViHVFFwHCWJM1sLHbGZobfhB51kH3MZeKpJbmyHxWqTaikf72etfyUAz42srxTXYkeAY9kpyF8xd7sdm",
  "key8": "jnVpWWqXq3tyZyJ29wvaHwNV1JAYjh8Tca1xhgoWagfxcgp5Bfskwy3pMres2HieT9KEp4j4zzaco5iWSRMFov5",
  "key9": "5Ls7RgdkS6yCwspf1VZ5q8cNLV4DUe1Dgr9cytvBg5VyMNC6MNkwetjM3keh3T5rUm3ijwDDnBiX8ymgJ6s2BTEn",
  "key10": "67Cxs2LiFKK8SPfw7hrMsm4quNrEiXNGDaadQNzZFiX7rvuNbRjzTQUbREGPD34vSeXwuRupZQTmhH5LXWipZPQb",
  "key11": "4zWuR1X8hm8CuGH4ZMcWyqK85Hcn58P9vNn49UebctH7m5ngtTrcjzzWaEUyrdHcn3X7fmectTbnTB8nkA3z6Cfz",
  "key12": "2cT4sFHMP54TGvSoypMvoiKdeB1f3nMhFgtb7wGe1i8WRH2Q59YNjTm17usfpLM1Ux4mqPp4HdvjwUGkVSbm8rKo",
  "key13": "2GLSUD5TKdMR8H5wVp6CGSGZDeqVprvSbczAnVBcM5mxBDNr8Tp4x1wLbmdQ68MEHbKvxxQMiBG2gumAzs9BinTE",
  "key14": "rdW4juteqUjdboW2TqugY1D6bKVDVxbTMvZNQMnjE7hi8j35LBmV9RyWysBM8YQJpALDgjNmVgzaREBhqdLbgUP",
  "key15": "3sbXFxqTYMUbdziDLygHJrNMf6p8qQUzmwNYK6ijvEH9P3QyY2auGcVt1hWBZRRJzEk39KLnD2rpaJ4r76qBavES",
  "key16": "64t74ysHEaUsDCWKjUov6feYcvtR3VVL1ysThQLLxxziySwQ5NW6HhiscMxVpfd8PQB5Krbb4qnimFvGQBThcSkD",
  "key17": "4pguAZWt4RVi3DKJJNeodyivrUzxb9f213g4BLxKVdxiNmmdTaiWUacP2KCh4Km69yFEJKtqH12yS5eha6fkVTx5",
  "key18": "4W4wMKMg7JGoccLNZy6qSjUaXvxUwVSN2TMp5C4em515izqQhLhSLNAC6hHT8UWXxtb2kHffG9eKYoSDkbMHLjuR",
  "key19": "4PqrHjnpd4mMSBaA9be4z7EfQn8cahrASosmCakgfuT1wDo5cCtgxxwhbuBWFT59UUASf6ofFoCnozKNAMBBx6eF",
  "key20": "5ie1bH3maFEKnCF4DcCmsojUEPy6kCTPt5TsBEUeySUGfEqNkac1DBRASPfr4L2aJRZyRnvEigacMjyjBNLkSvbU",
  "key21": "52868LjYuQQoso8oToXLuYBqQZojSN82Cc7LEiwYh6goSkZEAQMx7NdFSiV66cEHRqvPVAUpR2MnxuCFfzuKJyWp",
  "key22": "2fGtFwcwPuZkdCAdQcNBvYQQBXjq1QSrjSSCLwZwyHscavBXsbdvs8qq22K55W86RRSEE2qA1c9XMu4CvyXpzhAs",
  "key23": "57tHHNjPeMfp2fLDQXY7r7uEnEGdPpmvHWUSgbtn5BPW4kFjiTw7jJ5MBgESzaFhVTG1NUqyj5NwoxtdKswXBRdE",
  "key24": "tCKfXF387z4sgsPL8YzrR63ARCPti3Nwxz2cYj3EMkveDrmEXpMveZtNSFzZxJScya3ur8omURujk7TPvKMhE14",
  "key25": "2KMRvuXL4R9PyFFPZQ2iEJx6G6PLGYrd7ZnCuuaDnWxMnTpKU4fu3ErPUF5YHcVJzpDRHFHm4YtF8pEG56oYwVLJ",
  "key26": "4grLQsN7BKAVtmwLyFD7exncycoFtt84mgtEep6LhQB2zQWMqnFxn5GGi9Uy5BfYZoVQ1bam2gMpcVWJfyGthfqu",
  "key27": "33NWJV5PkYV9Fus9woYoTZ9rfpwfJjUN3qvF8yZ95E9GYtdZz64Gbr3DZKApQyPfReHxZuFP2Hucctm8wrn4BZsP",
  "key28": "39CoVmX7zehoLvW53w5YhuCURWzU7xP53WBRXupTSf6dDg2bdbvcwV7Cwi2tcQGSWtrGGA5z9QkWP5bNsxK4tFtJ",
  "key29": "2hRX4D9FZgCVyKsohtoVu7FfwXnt6X9ZJEyWUqUDPiBFphVjjVVJuhdqhDVMGsdipry7bxc5xfh4DTY3SqUdmvQf",
  "key30": "XazNVMpqHkSApAtqmikAtNesLH4ShvQdtdeWufB5fAweRxopoEMGkVNBJuvVYNLkNostumncoXQiZ5qChiHGRUU",
  "key31": "27XJwXdHsa2atvduQDuBZGExa51tmTCs8fHyjGzERHrdZgEdVnnJ1ek4r7dvHXPRjAUzTwQ7ttMigk5ZMGAkzmAn",
  "key32": "2XLbnzFo8ZaQuKu6nFbdsYWCMHHidoe7jhEED1MNFnSC5viy4Kx4gqwsutyiaM2B7qbNrLJTLNgVUkP7St11ACu9",
  "key33": "5CtXrMd7bRqimq46qtKcfX7cLbwDFZVzqW6hy7xFSrfjEEGbw4yfQXh7zVgVYaE8im4rpomx3mGaRjrHGrw1f96j"
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
