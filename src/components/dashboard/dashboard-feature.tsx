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
    "4vpx3VN8V9vnV1LpWJ1E1V3owiT8ctrLinRpwBrJem7tFneYQQyJHUthxgkiZsnSJhqXHqCtzRznK3RBoY515oCP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QayDrkxPMTPdnXuh4WRYftZ2rMNyC6YGF2sDjdgocejSPfGdD2iZjAohs7KGCi1ReXUzw7ffmspfrSUNT38Unnf",
  "key1": "3n3DqryCd2nZySPvAq9UnPK7oPTBhVZgcDxoteUzmi1gRi3D5UnAFuGYG8WH4i9HpkykNDJrwAhFtBBA977nmNyv",
  "key2": "32k3d5MMH4cbzvTEWZvarJ5u32QaHs1F1A4aHH87thoRjmg4RvfZC8g2ckNJy1PEwG8m9gLY7DonnUkFBwYeZnKS",
  "key3": "ArmqocoG9BXkF9pQRDrBtAG9dQkPcEC9f9TkMBuGSQXrKnna1sdXbfPG5PJe4YdwRiMNqFyNvcWpgUxWVUrJT8T",
  "key4": "3VQgw5M4qpcap2z3MKy9NtYiEgEcFgyfJuweMWYK15At1nQrPUMa3oZdSC2a2dqezmayocBoHKkUarXnEXt4vV1m",
  "key5": "WUozYT5YY6M2gtD9E5CHga6oRMwzsxHvuAkLnTyJ3w8B7zuyb7WuXi1jD527rrrfXEFb4ktmJ5cTedSaMt8Y9ff",
  "key6": "jJQkdFRCGpAoTxGYz6TJuTnb54mLFgzxvQFinkn64VRphCmUSSgnMMykprz68xzGFJ3TAFZU946yjny1xwnDizK",
  "key7": "4vifYx6XyM1Mc28S8p7onrwBo9GWiJMUzcoTmMG9MHgXSaNBpCZCWy6SFvg6vkoP4XPdnfAEAV1vDqzhHdJrxBCw",
  "key8": "5onh1SQYMeogQJXpMgcujRSUw9NHzF9YMemg2Zb7WUDHoRHUftT3TiXFw7p46f9YLHEtRzQCr4GFRGrbFHdRJGAc",
  "key9": "3XjjTfx4ERre795qorYE4czrdGC4cwCdwp3vtGQi39RHj9Kri6R2288eUAZs3vBsHzt4jFcSsh85WuPypquXbZyQ",
  "key10": "2HgeNjZaa9Ro5zjdTFpr8VYiyd8B6PFKvgXuho8ec1QWC6EZ7k3xXckDmgkR6MsAx4hb2o1mb1NLeL89d9o55CxX",
  "key11": "5yRxmTnWpTk2TJq1BanzLRY46ykN6sZQk9fFVomspRonjNcZpJB2bH4ov7DpS7ueMBuWWgxZfdzthvcyMfQKT3E5",
  "key12": "RUBNGTwQDKvDpwbAr8nPWGS66KGNC9HtxyqAzrr5XYDF5o4GXw9LYWffBr9hngCahU41e3nNhh4qnNJuttXvski",
  "key13": "3o722Xv2snHwJ2x6pY1FoCub7weM6hgqgbctwZBiv8oqyiuSZh8EvSQQVUw8TaZKUURZyhgKPN5SHADvvoA7Dbyh",
  "key14": "2gE1J3kZuVZJppcZrX6jsquw2egCibUuBqU4Z89sqmo8BmVGtnZvTxdGkAx819V8pgzkwJXLANqvnrii31qAeU1",
  "key15": "3jCLQwxQsnWFRVLQK13aA9ca2gvwiGfo5tAM9fpggG4S3cAEbGJXAQ7GLTSCiHpxmwiMQZEf3Tx5ABuD9ZbG74Rk",
  "key16": "3LMj2pwp9vnPH63mwgCKqbtMjaJ6YXs55WprhnrVJQbVH1PnSKKpDGhZAoqVaLtwfp5cvY6DY7NhQ7zFtBJzEUkx",
  "key17": "4gP5k2gz6wTXkDrKAWqxSXY1RCRFzLsLbWzovSp6btLpQoi3ywE57scGFoXbvx9nhgJX4MDgmAMxTa6BcvxZYD9B",
  "key18": "QqkBDvgcuP4kkx3Yrybrq8v5LAsSkoCVh9dM5SqjuFdYVgL7qUrZZVyiRz15PETpNGUNk6ssjbRE7tZcPs8jix5",
  "key19": "UdmMvyLuXWUPMEYZcRNxm4cux89HZYcMe9jcTwRFtqgVDiRHFPf49qPWA3PXp9DhvDgruGADz5T3RBvs7ZfGo1x",
  "key20": "9SmPfrDWnQ4Yjf5pG9CViYYyn1Fq8yPo6E7gwQn4qeXnxDzwe4STYXagVNoyR4XbVaNJGi3iUEPXKC7zCwHfXyM",
  "key21": "3sm3qZYDDHyUKKZfnYRZrHSmmmqSzXjk9d7HfUBq9oA4cLfUpkcLNBNfYpezGLP7rr78pxRCnYsAGhzyRZ796K6w",
  "key22": "3yhRhLr3hBn2fntUEQR8Tngy3u8ryrNwXs9LX7ngPJ4xky5uT4FJ52bJQUr55nhggRowGyb8DALZgycWDZdoutDd",
  "key23": "2a1p8iUHTWb6SzDkoSVXujwJTmN4kBK4mFt2tgw9P6H7ii8EyRKt9VnJ4AgrcG4FtahRU9hwugBkj8VeWEpHwpp6",
  "key24": "57ntuwz9oTAg5MLGgDDEC1d9tgKYVyDdz85X7mD9xMwGGKgLA5Ck9vjYFWpuBj71uwN8DMuxHjWsuz8XD4KxaBwr",
  "key25": "W95Wavs7f6Qmb3mym5AhkNLCwvPd2M4sfaa3quueQxxWMx7ncurJRoUhc72rBNAQE6xc2SbrX3HpY48TackUJZ6",
  "key26": "3NWtSgwhVxNMnFEpRjK4aTCGGABVmSomLyVdjxG93sZmummbaKvgoqPXN7ZrLBFXZiMET4bRPaLt1ARboJ7BM8or",
  "key27": "ZYYNybUxXKJdzaxCKsmtLaroBM9rt1A2bK9pYpkTPTswD9sYFNASGAGBW88JXbiBZZrGukeFXnvKiz8r6akuEtW",
  "key28": "24pphVrnj16wid7MruwAECKWzatMe9y6bEwFffcRtFEZehbBrSJeHUWYnXDV5QoLC1W5svfmU7X7jiFeBiXRPCx8",
  "key29": "o9PNaLUPtb6KsvWUnq61sxa6F99URmRN9rt62dCagfdTMdya8QkTR3bJn4ow3qVUzUzjbBBX3jUqCnkiAsZQsEP",
  "key30": "5j6nqAyovvGJhJCjvJ9T9Qx1nLBPeoqBcVNRcJ2svrqmv5RhdPaaVcHoZULXVEWdwF7h8GebsNwL1DYM1eKfKKhG",
  "key31": "3GwDonhsJR3EtaCTGnkoRS8aAEiVLnvYmWd3dwDXWHnCoRbpQQVaFi3wgD19RAzjceNcPoga1Ma3SYKSNSCmVdY8",
  "key32": "3754YeCy4DVp2pZcnWNzrbcoeNzV43pxyjWbxBcpgfNU75MHodxQy8dExamcBgLrBYmasYDbrob68myRqW5FrLV3"
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
