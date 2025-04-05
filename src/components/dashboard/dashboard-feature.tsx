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
    "4UQNPbqHajapv1PaKAHxQVv6oagvVbdXvgLeyKJ5cgmDZY8tmGPgoGymvXrqZN1qVpFUpqVGjNySyT8zteTgEk7H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9HujszhquHLzkYYMskahXjyyZaMZzdwwU1GWHmPc1rmcaqPssVWRq8LnKcuKiMMhRHX4CAqNrrYCfMhVvoXQB4f",
  "key1": "Kt1ueR9Vn5tZgUELHv2FGVwoTFcevPZXPhgYc8CMgaDwivRMPrGPRoPf6wsEQPfYtreZhVWN9fEL8DtX2tU3ehS",
  "key2": "39AFzMozovcLS8D9WEfCittwUWkjB8KEGdkdqxJGjWWWkiaD2SrngABXsUKx3cTAy5VGLBPAjw4U8tRy4bdy3u7e",
  "key3": "5Rxb9eSn7HTAYkgBMCjAwaAmkQkw457dQf5K1kBt2Rk4sJ1NabszbEneJi1LmiAyNgefGdTiBA59xxYU5NDFmFY1",
  "key4": "4YT5EAb5vS5iWqHsf1HzGApr4h3Xv5xsFa7wrrXDHCG34zqorDjcZfwRHa9csCxaX2r8DUH8a8Pr4nLbjTnePagE",
  "key5": "5AqNyQVRZNY5LX2h9fM6xvKraVGrgP5D2i6qvUnJEwvmrMsUjYnZvKQS2TELfWBPmB8cWMSsRU6UbmBY6h9XTSrG",
  "key6": "wdbj7EstTYrmN75NrYxMgnMw481KEzxqa5E88WWL9qK2frn4rTi25j3pp3qovhdKDv32pZJja4pc6WA5SogFYwQ",
  "key7": "KBh5erDVwedo6VmmWnue5gr6f5tuP2i9nV3yK2QLLChBrAfUmw5a4aG85ZvWkyPe5Nnz7LRCkuAzcRmj3SjLt2z",
  "key8": "419AnREd4zuPHFTwVBkaabjZvVqevJobMN8VeMeWX1HNQFpGV2Je3ZchXGhDWJhrqJpQzTaHbSGthpSAQA7VF9SC",
  "key9": "LXSDVFNyZZ4c22aoncy4jtTBnfR5pbyZYdSYpwqEWjvCgJRXhRkyqCtc5wsyiCT6ZFVbsZqDcWjXQRWoeKVhpaj",
  "key10": "4hN1an7YLyks2PDrZE7NQHLDnPgioL7bzWMgaAieLAPEqRv2qaWQ2gCRswTZqnjRxwkiDTTHBzZiJ8qfy1FGF74J",
  "key11": "QBJnTZL7oDCZpKYygCn5kXTRB9xBU8qkQqrx3fjD9xwpwPsTsJHvm4PHbNri9EqfSqxdzLJ6ALV4arhUKurXjXx",
  "key12": "563WiJQkkVCkT3DGFT3v2qZgEcyHuGEDTq2ayKip1VV5hvMC8kXHLJsZ9NrmynfS1Cn2yAaWH64frK4cpwhjnRH1",
  "key13": "2sVhWD7jeZ1PWq1fzwMbMXSviTQAUnVi4zzR6NPeAp137coUBnMCe1GG9EagcQ1jGCsKJMAzkQ9RvGoBTcQ3PBB8",
  "key14": "1yuW4auyNR3BCtMYZB48x7TrR6RDC92G32xu6f62PBb8QeAPLD3Qux962rtbE44rcJigJQAJCQZ2MNSbkU2dTNT",
  "key15": "7RCkpgXvvpCWGqoN239zTDB91ZCJQq5vPo99Qj68XEiQp4tzLpox7ce39GykVTKLUkgBMeCrXSU6pwXAokwjGFz",
  "key16": "5F1dCmVYxQCGvYJsEDqABQqy7SJ5jfTfQKtfXgjqgkbVbX2qQxNWAKQmdK5scpFouQcuYVcF7rMcMqQ1PoVZHxPX",
  "key17": "4qpXe9wFgMGJN45Dhd8qSSQEfGaWHxwYs8sDsQYAgLy4v6ku2QkLp53755aNdNdTauq71EFf5KNkbeVzLpQEjDpp",
  "key18": "46hedKB1Y3YTq52drTx98tL3vPWqVbouCaGNkkGciBQzPuwdHVkMn5eNBg6tAr8i2vnhAabCGzah2d6qhKXFxuFt",
  "key19": "jUZvwZQUeYLHYjRSua5mqXBiKLVkyBmMZE5vjQWhBrSMsj7wxpQuL71xJTVdboiAsutTyg5U8okLKQXcnMntF3u",
  "key20": "642JfM44SW6D1KE7o7wJpTuesxwb2nDmuYv3Nzom9vCf98h4Vwo4jLhgZUep37ZLPphFaCUt9T9AXqycAYwL3u2W",
  "key21": "YuD9vpxBFWfigEVKEYBQqLyM3BxiNeWEYu7JwH9jRpv7ZRFTZt3MgLVWJ6cRV7NySW4yZNEUrfYteyNpxUQ47aF",
  "key22": "3Txquc66Uw7b6JeWqx7cGBCuTXFXmemDF8syH5xsLn4JpoERUV2g1RWyYN1oBWBBHqtmrm4m6YC1ctje9HdEzmPb",
  "key23": "uYG8RRx1CbGA31AdjQF3Uf84N1EbwMHGjvsi6XgFk8QtVj1FipL3Wdsju2UgqhHETV9MnJrtxfm6U4fXbLTKUeP",
  "key24": "5oR3hEbRnXZgppbKsi3qEytzHTPVmtecitWKiJEoWmmhkZ9x3yqeb16SLqShL4XMZP6c9k2EA2tFHcAmqVNQXHtm",
  "key25": "2pzQWfyNo9QFP1jM6rvB9wtdUcwGFtdrN83gKhsf54A4SAtTdhcLP3Ar8Bf2wBNhZ7QHvWPzs5DVDxG8UQk1T7MT",
  "key26": "5oBQy83SHTfUheWgPhpJfiAdfqVQ7TpHvzDbk4KZk21WGM2snqgxBHdFfXWEQVnbnSK8j7fYXCg61ApLp2ERkBdz",
  "key27": "2QGNcJXezWejNhQbjxUXfAN7NbTuZ3rVZQXBQ8zuWJAbnP1GSQ8Af6UUJ4jk8cNFDU8BPTrfnaPjxydAoZHrFEkG",
  "key28": "5NWEWGDRJqYcV4TyKouXRtSw2pkvj8DW6jtFLiGpw6jHJTyuD6zqHNqKAFo9JSTfNYsFo7qoJWi8jKp5uHjwRFof",
  "key29": "YENF3zfjXJXVX5HFsTfRy1LikpLYp8NWLPEN64sw5evCkPEA3RFYKqtzGVhV6VoAjVw1vqiUfbY3XbJbqQNepzE",
  "key30": "WEvX3dwCMVqTx9eUwaJar3gzjS2aHvUXxTYD4uBrzCQh81K1YJdZJh5vfBVfYbihKz8E7c7vYbFEwpHABZrmZPg",
  "key31": "5PM1YpjtCRvJERMwary72zEj4C9M2kQDJvH4xgy5oS8gMqBT2HLurZ1HT7MdqW8hqZW7Z2dbeBKxWR9R78UeY56C",
  "key32": "9FqANwnKJPn4mMpkLSU6L7jYZz6yxk4nQjeJYkzMLWQjRgHxBsT71yyNTufmfuWeDefUXTEPM7ZQSixBZQQJGd8",
  "key33": "5xK4E1rdT8E7TyjgJE93keuwz32fUNtxFZj6rfyZQcxDEWe2nWTfUvpmhMDNamQmBQnBdqRaXSuNLzonxf2HWuWK"
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
