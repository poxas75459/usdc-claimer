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
    "3Q4Cm5GUjGoJpowpAttiQS53R8Uij7EVgGV7EibrDn5Fi1uUGQxUyf592CVBucYw9B1WJ81ubTqWxSKFgt3ecun6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Yvia1eiTLXVnTzod2LBEQt7obdaz3LtNR5EpniS4XNcR7Jitrshw4QsuQbq7GoVaNJkn6khvHWbZCj4deAqx1c3",
  "key1": "2LEW3bscLbupfpVZRwyUpzMoUj1gSm6x9qZjzQjzzJF9ZZcFMi1HziZkWvKbMFhS5mxSjMRD4n4zoLbvz3HpB1P5",
  "key2": "2LQn1NZPhi7bxv7mfNPw9yxVXWjnXKbFFCE2HGcVswPuHYWCJnb3V3oMUq13w9ga9fppXTnx5myJaoFJ71zeFCrA",
  "key3": "4zSBKqLTeKfMmGtEH2p3aWfDu8ZcADuN7t2neU2MEXBzxkDzthbosLhYLN1vTkiXc8gv3rQtSharZxzNSqfwE8i9",
  "key4": "3BJvyqU95f3jJHkHZV7ADEjAxsnZFkx9xAnnaoi8kjvgFeB4CgN2beaAVpEhMkiyumE1dZCGmoeVBwCPS5WhuG5r",
  "key5": "3VJvr7JukxZXk6D3FDCwMQCrwwMvUgxmoVVUUzZD4tVHh1RPD1EsHedTp6ZsKBEMSShgNH5A7wQLr9czVtnU5zLL",
  "key6": "J1KTVEx3fgDiwtmgjT4kheBhfxV82iopNRYb6rvHEZ54Uho1UZ3RjHw1jeJGydvHM4pDMfEaan5YVCuyhNobvhL",
  "key7": "5CvnizdzZXaFj42exdaA75df7qMDegEzkJ1LH81s7ezQA43esDrfCTnimnzBnXxPPptCyzzgaavrz5hCfwy7P3xt",
  "key8": "f8Pkt78jjxUiLLpZc3raK3woU1mN28oKpWsavm8Ax45g8aXwGg1iodGSdoDEZe2MBP3JmbPnEtHGxRiBbL4yZew",
  "key9": "4TEeN6Ni1NvwBQYXZQv3oX3hkWocgLRsQmRP5q2bApppiNb8hVyPPUvfSZyWskaLucd5VNaa3PL2wTHiQWpkyBno",
  "key10": "284DaG2qMVGQifiHb3oW3i94ex8kmVB4TT24TPLe19mpn6t6KTm298DLXHtj2cmqE2gR4BXex4xwwCFac3rfbR5L",
  "key11": "QumHmk5v2zRjAxuYKfxFP7Hye9n5Nvm4KzSkFmwedFv8C8Z8GbVzVYFgDwbSoZiNwMKiwZkJy4fW33qPB1Juizg",
  "key12": "4ed7VtLLTca3g1ZafKotq4hgRUBWmHob7CGXvbRUoUi9YpKoaskvpNjZtP3isS9FEAKhQHjLA9Ta2nmFVDnLwKp6",
  "key13": "22yZm2F7c4tLcESSfV6XEHojHwqwzA89zxw1x4fD9VyMH5oW1ngYKNgtYwA6V8PPmRjxznVWyf474KWMG4hpXEhn",
  "key14": "2vj8ZBXgSpGrx3YNG4fiW8abDrgjH1DAE2XrdCicigeNS1uzvgrdimaa98D26JQ9fyPxGmTwPgJ7uWnK4xWwDjip",
  "key15": "5GxQTEvMVq7br9TWkN9F3LBmeALT34E3GKZhpyxftk5RquzxTCauKCzWr8WCHuJ414kC3oqeYnLPiHqhyT5RMAkr",
  "key16": "4cEX4UhAPx8DhD5LQsYcFVRrMBeUxicgFoSDGuojpapwWXpRz38doouxoYaKKtEQKuHFsieE3Fv6vugRkzgqdmfF",
  "key17": "5gnTQM7RYPBF5LJktxmC6vLjcznPStWx4G3Arme26GKfPafaLr5spRY46mkTVi6sTXDydMeN2QYbybNtXefaPwzS",
  "key18": "56C92cgePov3oB7M9xvJygVaYPoP9S3qdBf9KLtmRCufJmXrKkiU9rQPRNf8yQCMxfpdDRvpdXwVSrjszW4YgrZg",
  "key19": "2QQiqz67MzSkXMWVhdm9Vhso6Y9VCksYU1jCFMTCN5NqWHeGTwCrJVy2KLxVCeUGMLRXTdPGGhrjP3AZVmAJqeo8",
  "key20": "5kumwnaKSrqPxhN3wL6WuG1XoZoBAUXxhgBFiF7v3dQ4VAKTuM9C9eEAgsHYBsgBeLoNcVnL2AigwnzPL7Xpa3DS",
  "key21": "2tQaecCxLJGpR3fWdFAuAjqwGZsnsHaMsU1nskiuT8DH5EUtpf9sYVDAgMmrTg2eSkFDFbAuLNmi5LX7zziZeRLS",
  "key22": "2aZBXtneoUKzAvnpKB6krsNrPsEEyvVzTyrF4FFCFUzvsEMWKFjU95ipUSdSKpC3jLrRNx5UW5X7YVvf2mnTmjYR",
  "key23": "3gpumHwKGBsVpLqMNdXzwTp8GNDYjEPcQfsrvgoVW8oT8rXfqd5MtpbCSNBGLVhh7K9meDRXfGz4bSHxMZ7LQieQ",
  "key24": "ouQ5PEwAbLgFvFTqKuG5McvxiEyC6BCKCKAqKzva3tvN3CB9cNmf6m8ouRMxkbtnSk6dZU6S9frGe7hSV8cEtYh",
  "key25": "5r7ZKkmQYwm3NG5UBMVzzZURg1JkCR8Xenu3DWNhjHydBKY8pE7x7YbvxcnJ5AD5cWw8ohLdSbCHz8WxF34ZmhoU",
  "key26": "45xJcbiaDj2uMh2jcMrV6A4ABwVCv4D3GerLpZ26CCqPkP9Utu6zmGhFhS7hj4nciwF7E5ASyhJVjcpFzC6av4Ue",
  "key27": "3eBuXFtQse5Fh3DNnDWreQg1agX6W6UghrtKtpWgzBhfbNWLx7G1BA6Qw6SaPuRL8Qc81pAFBPvSg6igb8p877tT",
  "key28": "R9QKZ2eJFnbDvfa62LxcYNdG4aYvQGZU9HoXVj6JwVUoY55xatWUR1GzLBBg1hLe7pD8jH3gczDUKUNWY1agfvW",
  "key29": "5cH7aaxHn4qiie9p6s9nThayoXS97UEYBBDJZim2HY8EZbBMRP4WmLA6fcgDPjiYBCJGKnRPnVNcKw89dJtYdumr",
  "key30": "55g1z8CEsoJih1fVtuW8Ex7ZunHcefqwgpcz9aoSHSyvwXGakLghbzUCc2gHCdvs2VsSCXzDS5xnpNwvwRU61YCF",
  "key31": "39WgrGiU9THa61S77Dk4STUYMhUgooQpPs3QAmfAGr9rov5H8XSXp2Do6DkUQR4xso3JBg9xSL375AQrFU6pjqPi",
  "key32": "4mB7joehxmZZZ1jxyCX1Hz7GZUAjUQzRNDvkeKT9zF5vojFph3ZZeG1ch6z72yFjpsSYGu69xeYAkFx8bqUAJB6x",
  "key33": "3x4Fh8n6AbyDk9sG1fuXKZZEtarWc2ttY8vHZBaAJ5fTvwU2YybNFzPNBLgm3Hz1YmMeuZb3H2JKkgE2ZyqimswE"
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
