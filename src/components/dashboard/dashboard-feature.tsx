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
    "24ZhdhxjxZTyRTA5CBMH9W7CnWUrhqZx9EM6RsELv7qCcXx4ATjFeVx6tLnNCLP9dSijzZjhYiV6B59mhRTffZ3Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ujZyRdwjh5x1B5s8tNPbjJpd2SzJU2cn9c9Po1xa8fQVbJWUZgev5LiMdsDmBNNu96qvvZCJ6dPjRcez9SQUqBu",
  "key1": "5WHFmXJ4WwHgnEroFEUDaraoV32ihUxNTRsbCpmfE9s4E8rN7yDfCczHfoLwrKXV1zx2YN5NML16LX3aEY242r7Z",
  "key2": "4RE39kK53E5USknsMA9xKRyfW8F8kZrhT7ipn4bmGVDBRtXNSHUXpgDsyg1LBY8TDqKZhpMrmdhfdDgGyGD7qzYy",
  "key3": "4RF81gkU6Gc4fGsovooQvD5s46tAC2m55nbudW5yLyR9PjjCrqisaxBiK3rrLYfCEP68GibCPjoXgJA999rBNa4F",
  "key4": "2fz7NPnQm9SCFrY7XmaQfnKmB9uNj7CbQXsKV2p9VEF4fu2bsGyMuNmmmWgHDPcD4b7LEgqKZZ7K4D297pzJs1kz",
  "key5": "339GWqoYF5DK2BTHyEmMH5CTEGj6V1vmiPypf8DQtnhUb2QptmoDczVbsRR1V2y6CEX61gUuQDpxV5xYMGgsW1kY",
  "key6": "5Q9uasJBzVebtBkVzmYZy64dYb8cbi1tEHQYwotWYAmehDbnm7UTo9ivNi3NNzofZ5bKrowbA1y8FdxqjhrVEY8r",
  "key7": "5j8u3kZgCSZsvTfgHuXuAwZUZt3TJff1yG1wa1qJo2vSNy4L58jH9z7tzs7ztUa9Aa6q9oaYkDA92ytLAJ5nfMN1",
  "key8": "3g1PC8FXu5VMkuZq2QNb74oSMdPiNj8k64k3ng1YfvrY9xHD559B4cMtv553FjEznWc4jLFGWW5vGvxQzM4tsUQq",
  "key9": "5gxitcgzFfzxRtg8ZuFK5Bvtijo2VDtMS7VCMpa43e8i97Rf1onEeNpmBUSVhraBMszY6tRgNV2SJe88xbPBAnLA",
  "key10": "3yLjXNtEoPNAyNxajJfQ8MHGTrogbaVQ9ju4bDj8cLRWvNTuZ5fW7jwotb1KukPthBz5H844JVUVuW4Wv3sEMa5V",
  "key11": "57NapY8A78nhKq487ssw25CXt3F6eDHKkdTTD3FRdJ96NWJPJes5XGaNvSBrd9JioQNE6wBW4mRbQjHGBDrAj8f5",
  "key12": "49otXRebwc9QTVrjL9jmCM28P917LYffzwbSPT1nyG5wa2GJVbBBsdfa4a2fnGbzPLmmRwFzEe7FscSky2wnkyzw",
  "key13": "xK3JCR7wXxCE6336gP8jiEUHfvw7wqqXzFhLXLPDX6EYLjxavcaV4kEPU1WrTzsyXcDPaSkWzBjgBVvnzDZ4VDo",
  "key14": "3yogHx1r1pVkSpbrcDsSBHPu2JxG6mpprwabPV1FKocNQ8sfcxdCKRaoLm66Zip5zVEizawa9aTbRDppFpeVqCx7",
  "key15": "3JM9PDvkMaiUdrf1bcjNLQkjh5rz2t8BHQoii49JKWnSyEEtYaorURTTZ8dcsSJLUzDbHCDiXfkxm2dAKKsEtN7Z",
  "key16": "2kgL8QugMExtQ6EvUTH7VEnJ4EqCgqFmjd4vUhmqRfiVp3qk3XdDcCRiCvdHePpXYYEdQZoKRsYRF3R48cvqCVm6",
  "key17": "3aSCHTTAffteouL1SwDTLu9PPc5sYCtVzKkJNDBK62d3ZeVsiL4nHE3kbG2hFAr3Rno7My2tV1nfyzHYiAkRVSTn",
  "key18": "5cwtrZ8cAE1wxhair57zyZmfsQi94XSNsrJFcedRp8LsfJ29pcQ8pseuUyP2VMiHSCA9Cg3Jk4xWbr7mXaPxzaMs",
  "key19": "zVYQyNM2ZUyCZr7A6yGmpv2Co2C5VjLwcuuELFyvL93Zao8jeEE8nhrs1StExjq5TtknohdaGbZ6GdbU5sTAnT4",
  "key20": "3hnKRhjpjJYwxnvnEPDZo3GkEvoKVqAsDcbLwfTR3uLL4CZHyZg5xk9dQBnuAHqkQ1szrgLkd1mPrUdUufC5qpoe",
  "key21": "9RGKbt2nvVJXT9HCw1VF1UCsh97Fpo8VQ53DbCGwbtSYeSHxMHjdXMMfFcw8A3zuMzoUBdyB2oCtPk83DShJzTY",
  "key22": "2CFRoiKRr2pLpmQRQrPbbKGchsJqaDJpV6DR7a8MhgS1DvBJTYQfHzs3TUnpye39wKm5qbQKWbtMQUqTd6Qzgi2Z",
  "key23": "4xuzcSDVMyPEZXnD6oHquwKjggDJNTd2rGu7zcsFYYR9hodFeGf6kf7cLBPLgPHswTBCk5hVRiFkbv3KJgVjL357",
  "key24": "2MgwEw3eyxoRkYB3gsRA6LW9EdSjWZ5Jod531aZzUSTiUmHQACZFPQhjCa9jvoEz4kMFymFqBUjHKNnGTJE12rSE",
  "key25": "LcxebXZQvj1US8vXVmPtXizfzCiYYYH9xTNmGq7r9ps2iLk7Ya2B4JkfLMkeNXxVQ6vnSZ5gACp9P4Uuu6TPgkD",
  "key26": "5RAzqQUCKuTUhuVNJeS3AwcLvmFRKLnm4evTZo7M1YPWXwSxbV6tHQ5dyZgMzxs5hfoZrssCHCnvFV2nKw21z7HA",
  "key27": "wT1LR31Ff9GeCZmC5zgZ3oitFg8ysyfKFj3cLE1ZRX75tRQNhyfk7Cp98LWxRWZMf3X3mU3eibzN4PQMCckieWC",
  "key28": "5Ctk8yqdN6wHXuiAxPjeRFTP1RKJLbsrcn8Uv8oWrjxcLiRzPeZvDksTEWZwecYijcVir4UQZdaAbbB73AVybDCq",
  "key29": "4DD8LnyS1N2KWFaZs65KgbgBX36D3hbXaCurram4xyvmpkVJ1PzQcGSHTktaJW3wRGQpf9tPFWgJvX1PGsdyqCad",
  "key30": "2MuNiGxX5g2mKSAoHM5Br9fdDCUda4tVFFr5HxWQtYJ3acdYDJTTA1RMXhyn9Mmheq61GRq1y25ve7fy1W24GRRe",
  "key31": "39AgNd7esWwqbKtzvd7EHXxhevB7FfhMJ77PR7hge7pHCBGtn75vCBbfxHjF3zyURzFbJnRQTu8CSEp5msPJRGHX",
  "key32": "4CSRkwWHLJ5fxDJRCVGTzcUgZybRjdEsPpJYr9x2BgB7HHestP1rvQWMxEBiYvBstDcspJps4xggN9cwNmey1Jk4",
  "key33": "2gKHBSkNggSM7t8ZuZWQ1gsrXPdoM5QFAn3kxvMGK4ncGf79JUYQnYRmQeq8Hqw9AAxmdyku1KKD8hrbMFbBDfzB"
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
