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
    "54QUvHNBFZh4b3CJoawQC2n83vPoYBU9hmrYms4z8w2mdx19RuPK2BJRTgYhHFGFd8YLxbeUq3RMpEHTYT4HGxPT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ybAPVin8BXLv1vW4huFF2FJZbfF9vMsBFp68EM73tsTtudyomsNQWYWiNcJpJpqDYK8BWEqecWUC6q468fmLNxF",
  "key1": "3pXanvjdTvnCQZHwH1x2W6sgHsz6TXtbt8KeqiykvdYHxHDA9TF54eLKp38kHsg5kAqrRGVEhFyxXzszvT9W9Vw5",
  "key2": "22ErNkG6nia4iAGVL3fLSgentrxdzn5UNRc2x2JyyzDpRgUfJSJFYssqt5HT2wZDGSLeJaSZyy9qphrrm2EnKRy1",
  "key3": "2Pi1mcFZuV7j456RAtXEkc3XEMtJGAcoWP3VJU762dnPhcXjhHVbmv79y6gAncKiwA2LJ2v9PJ4qHGfqfxtbnAgq",
  "key4": "HKernd5UFM9BDgm2dVDjSZxgRGSoZSSVpea7nJtbvdqMFnxhUMPRMg4DdkFpR5cCLCAzyran9gcCPAfto9p2UXw",
  "key5": "RjiPCfAEUsPSNm3j13K3mGPgvQbRtR9ZgHdTdBgDostZR6jye7kaHpWvn4Ro2hRDLxzV9LiiPFPrwxDYiT9zaLp",
  "key6": "2LKSvmNq2d1Nh4jRzap8GATFNLD76tbW5GucvW9KJTfipRZmLAZ943RERaP86JfJmUp9ny74rPJd2EcvxwKPRjtK",
  "key7": "hF1gmpoNRvgWXUDsWcumCQ75Tckt9vr8NVZ9fBucf5r4HgyVq9L3kv6FV9GGoNT6WMYAvVwZ2EK7aixXJjzwMsH",
  "key8": "2vQmVLRDL4uBGbkFjS3t4Zvx9HHDp2CpyFZNvUDozUU6s7azxtWYdc7fzH1SbX4ugkjxtXpfzMdN2xh9957i32iy",
  "key9": "2BZF4UWsN1vnPmairu6RQx5KtHPMa5VGCr3PPnMdiq2K4dwLyZWk37wwmdY6U1xidTXSnTAhTjM3bqSTWzR9gH43",
  "key10": "bbBCYqy8fZpkxKq6RbQrv1s9r4JFrpg1m45y3V9RQK8J9Ej1kUeS1BiHGJ7tEbvLRUTpYiHUr1M7MX7N72BD1eS",
  "key11": "2DRDfaBjiBUUVRP7ahCEMjCJ5SNZuUWvpFe8TipDHJwStKeXmGPrUZRUiSd9EcHZ6ENyKA9EGdHZYg6xeK1NAHD2",
  "key12": "2k5SwtKRDTBh12nUD5cHPPDyZhyqEFRpUUKXAcjyG8dPrVGfKgtHpURFVZikZwU4SaNpusjRvVYyNaw6We3mSVo5",
  "key13": "jMwWbRaVd7kdE3bqWVn3fgdj8sd8RhBDTuAtdCBeun4vaGE2gYG55F6pwuE9aEbxXhCqL5XV5CE2KTGY5Jw6KXw",
  "key14": "1tRmu8gAbTSQyPZAiJ7p8XkavKPEW1xM2xfJf76JKCZi5fPXxk9szKmtb7WCuwY4mFEyS1EuVtHC3VqVqT1gW53",
  "key15": "61J2Hrmo9DEz3eKnzxLb3APm8nsdWyNoQQciJpof2Yvw82eYcHqFKLTdxXyPJ7agzWihh9o42tJTNZBsZWeBjQyp",
  "key16": "2vm7tnYzq6orYC8GznZifHs2vVhjs6nBYYcWCUEz6wvDF7FJnTgw5UMxqQPCB3CC2bZ9Vot7hPFCLjmXHmVSNvtJ",
  "key17": "5Zdo4PxCvhxcv884Zb7r6zK2eDfiNFKg8ZobLnRypevmqjsnjwrAb3nV4E9TUGS57XWRjWHrEktzsFZVi1WiweoQ",
  "key18": "2GvXg9VTTCMGm7Kp5NJhVTJAp5zNAP4kJ4h1G1PkfGFo3LRLuWtxM9rLevmKVQMdit89QAEv3fY5MBVdQNvGCAMT",
  "key19": "2xVUksyfBkUgQ4n8kdpM9z2aqv1T2GNdEEaFsHbrKSSnmRfRVn2nZZRGz5pPLZETenCUWQZgNWF7WU3ZvB8A4txe",
  "key20": "5tUmzk6X3bJHGtV3FK46ZjF7xPyc2ru2WrVdtq5t1GhJL1VsmieD6qrmPhxhR51LDiiWac8nNw29yBBBeQVGERaQ",
  "key21": "3iFVi8Dq3k3u3qRefwCva9zgPmTPALBz6aYu9guU7XXvPeivwE2tBGCjZGPtywyNPA7pm9w9Bc3xisZVo6oAQSRt",
  "key22": "2cQKgxSu11AwAcEbaZ181Y3UE23QaEaEQyeV1D7P24JN4AmCG2H2PK3taj37Sbho4iN28uqnm1abBqrVhaed8AzE",
  "key23": "fMAtgH7DqikqFqxNnN2rG7qXZbzGktr627E9YCR5Kniow3FqwV4TaVo1r4rHPY4tSFbQsQU16NqvvdVNWH7akNh",
  "key24": "462HrHgN9CEfhCP2sWdJixZMofVPFwz2Ureie7X89NRi1G3cNoMqKq9f2GCet9JveafNiCzdkf6yRuAWgk7Fj5hN",
  "key25": "4wxGiti8YXhYdqtJHZiKmSzYb95suUkycCTEC1VZKBvwovuk4gw8SuPrHCJiXTvtARHKmi11WmGAyKsQayTBycED",
  "key26": "3LwQGZ9jy769hRdMMAzRjiv13B4PKFogXeWygPoEnaSsKfxK1sAbHbVnqok2Tq7y8bndCtzDrMet8RpFBEhGJhAj",
  "key27": "2ZVHrhR3RALw4baUEt5KwsvYtum6CUs5MApxmTsZY89xAURRHcTXBpn75AeZmAXdysqHYt34ht6doxcwLFARFksT",
  "key28": "3xueGqcRfcJpDJetLdyajrfHPqzYAkNjHZuHQk374F57oDfAQWRMKBB6vLH34JnqZmB9u36fkEiSj6jH42tR3hH7"
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
