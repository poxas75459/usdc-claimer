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
    "rXPWjpSeD4ZyWsDEVT7ufRx8BrPCpqLybJ4PzbfjWU2VyEynPsjEpvyxmEZkGE2YoL3mAhMbko4KupPsiLGf1zw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Y6c4ZLmSpiQzFmnwPVQvUEm8HNTPGPNwjpb499Yy6Mgfjyv9Huw4rdPrWPj3pkTNSMfEBzMChpjcMLcSRFFgf3K",
  "key1": "4QipRxeyFbKJJ7rGAdweayR2dE6yUgyV65yVjzVUJDoNC63aJXA591Pfqdw79drhip85jkKAwuHE8vmBNuVkdUtX",
  "key2": "5NCktgQdFdhmFF4nRcDKpnB7HhN22pqaBegFd5CyF5gGQE1Y55oDQpVd4Wj5qBCodufDh8edz3HbakHCDwXxoFfp",
  "key3": "2AdDo1Em1s8PkaRwqE8fgGAcaXuRi76YekD1AF9YcPGJiVJpz9vGaquYpVgZFQaLHYk7YsdatR9iy75B66mV2sSu",
  "key4": "2WzTByuVAzjV6FvYtUW5oNfiy9FwscFB5R65RfjqcoMm8xPWSt275wP3vM4QF3pUtTDQcVhLvNm2eQyNgmFLSHWh",
  "key5": "FMNJucwHyAmceewKYt86WXWuMszVKft57P3qqvxxXfgbGGg3wzUQ25NT4sMrZEk2LmmuT3Kcan8Ksy4NbP3z5PG",
  "key6": "3GmrKQqfdY2bc3J68cqZXZCLZpuHZQqdGAJC4Frn6QCgZzN92schzjSAGaY5K6VA54fvExqEPhrRUteVFbyRcRa3",
  "key7": "V7oxY75Z6tVP2WG7RcMskVm1id79onYNYtWytZWi4UK5oL3F17aERVbA6ds749hRpmDuGJkMR1F7kzKhvNtvzni",
  "key8": "3mbyhGkPeMHXHSFuMKdHzJC37TDBqJ891WCwWEcEGJMMVKQ5CNhYoLGSjXUqZ7mvNfe6vTp2fVg2Muu6rLYBEgLA",
  "key9": "5z8nTyNhsgJbuSPm5VRGMw8nN5TJw4qLAC7uifpGPkXPnZWrDjGSkRAhUX11j3e9ZUkTwTC8rBArx5V3nEBYZCn",
  "key10": "6317KAgVjdjodhZFNHtsWs7zGfrWGQT46VinKuopkWZMDU98YztNLxHsYGuKb9XdtbVbmPmGj3wk3T77uLsmXzJe",
  "key11": "2hud1zG3fnDy8iL6xMi32AmeTLwh1ishwE4ZN9aGxEQMwo7Qqax77MLszF5tvjHJNCdoa6w22u1i1QmHVBQWS3zR",
  "key12": "4avaJmFmMTTNQKw7aiLMRHJWVJeiQwsZDtu5yY65FhPzDdNnXUT1M9aQFTRjbTUjf9cD64Fp4wkGhEHhwPkXLw8X",
  "key13": "5TaQv43vJrf9D7gLjBCe8Nv99DY9BJWojcYw9P2zUyYdNJt9zv66cdVhbKXWcSE3zWEAwvTLSJeRHE5gZZG792Ay",
  "key14": "2UCc7EGymhTSWmCSPDdBi5oMvYP5x4NWyZ2hTUsAAFcDRYMxQVRKx4ZfBhhPFiRARKqk5eXKBTXcqvjCDwwK1pZz",
  "key15": "5MX3QyVo8zSyy2avAEjhAEqVz9WmgawAaHdJWQjscZWRovzvLL4MnPUN4ncBYDQ92414UdRrmHXDWTA4dKHpmh6M",
  "key16": "24TVJQDKY82iGryY9aP5hhNhac4wn7xdMzBgsjWGsGFosinC6ovSKvLd3gER9LKdjzFkennAbp8kbksWwUfSQXBK",
  "key17": "2kPExwwQEoYXqyMKDn8K3fPHN9DwS7rcz1sCGqb93TBf5XQZnf8kfNAPGcTNa1WhwhgRjxF9v8XQLnpWQyWjEGWs",
  "key18": "KKkt5yoosiRGufEyhZVQiyjwRJBAfLuEpcr54BUoNtpNQLnjJoWzVBE92mfW8jKq6jiPNdCG3VkqTWWMx8SsQ8X",
  "key19": "2SdxsAWphcsKB2EBzTJGUFseetWF6iNW5Mb7nw77NFyxSUVLXDh4RjTEWQGywFADBuqirE2w67Jh6fJVxkMZfBB2",
  "key20": "4SZhsDpZyhJHUdN9BHvbaLMZFFMMNKmVpf3K8SwtNUakMCqLce5gcjSfNYthhkwNA8v2fZXf4DstmkWFhEbVKg9G",
  "key21": "3JRhBkz4ZknTQ12CqrRj8mozktEfNW5coJ4redoe9Dmoi5xZjAiR19pmwK7AoNFqwxSKpyGY9vqVbB6FGczDphoS",
  "key22": "4ambMAHZt7ieKu63WNEEx6AwjZGCCuDvP9BN1QAdSbgC7vuxEfBqKjXsKvF5TG1PGV7NyFtb2wc8AENNnawvWSiS",
  "key23": "2LcqQvmQzbKm9uwJdXNP2WPUojzYztL9JxBXcEu1nRWjJtLyTwKqWyffMYz6zNHnvH5MSTDGuch2mTbAhYw6rAf6",
  "key24": "YktBT5APuScQSzP9yVEXvRHVg5D68xJ6SPFZYbCP9pF1ysEtmwHHdp9yU94gDF6jKXDstr2jHi63N2uZ2AU3cEc",
  "key25": "GdNaKpvrFQoWxAaGyfhBw3A4YQSCyodKDUB6bVUr211nEiNKQntJHqCzPiiYyMmtqo24oR7mSDSZfzHt9sffdVG",
  "key26": "3fSpHdUumvXSMGcSphrSw7XpDGyLw9bcWpWCLz3vnETYvNm8mWp1hY4mmV6BK95VWDpei2snLuksCUe1qN8ZE3ow",
  "key27": "ZGHpKVrmhpWMW7XfUG96vorYRGW7Jd2RrFn4kT7ws6TSrMAwc3AYV9fhzXYeg6jNjczb4SPqSxUKbGtdXNhzrfi",
  "key28": "9Uf5E2nTbKmDsy8pzwQJrDkUaHYw5576Lt5hJ1ZYo1vNZDYRdpt42XpadPPy2Ls5rGgWPFmMHY4pXArqG1AwZjk",
  "key29": "3DVWDU3a75qnDMoR6P7snSP4raC4NiH3gWnkAcmj4XMTWM41sbFqgCNAYT3RmwgKAEH9nWFBjTWQmCy3v2osn6ay",
  "key30": "2KXFcmB3w7p79N6BgJDt6TDitMQHeHgaxwz29VtWxaDg2iUSc2ytWTm9GR13KxWN7b1Q89RdMrvwrv5XqK6soZX7",
  "key31": "2oLnviwSywbEaLPmeFGH1Zrtj1dbvsPEx9LU2wEZti5ps71LeRAQKSQmLjmWD7tAMmxDekf93UXkKfze7PrNTW9P",
  "key32": "2gdZ9L6ocNpUSjXqBYRQ6LmJhEA84gMGrXuEc8eeF6wyzfsENyaqf12rv86S2XWoUev8xEFdvRqyhR91tKky76VF"
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
