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
    "63W89TtzxyjSN7LG9papYkZTLHsqTkhft3TFF7dxw31zKUgSnchubx8TF26HMFBXPCjRPevXXr5m5xR7gRdCTctH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fUxrNoVxju7QfFAvx95sPB1LNCNzhHdaeQLyMJjopj9aVzCeNoxvJjSjXysDyPUEYKbs5LNsaugkqfs8MZxaTVC",
  "key1": "3uJR2X1iGfv8iKMfsupAYNzrsW1YavcGJBJwnRKqichJVCisXwUWZzLwBgzz1SCuvu6GKhkNX742sVRJSvXRwiJm",
  "key2": "3t1S8UdqoECb3J9EzV44NzEMNN1YPGybfB4TFUKoV2Yw8RcPSZJsQNbTkpfQintMRvxzSGqdoKJsv4bk9gCQBwTW",
  "key3": "2VYtCiay1dAP6h2kzVTY5PWnHVZZ2hbnSppjoFVqZpofFbeT2cNS6hWdkJ6SJ3eUtfXnCZdugKHbCb1Rn5tbHSbS",
  "key4": "47mfpVADdyar9tV9brZRWes18GEp1YrYfQQqtV3kdDbAuqhuYS21oScUDEZ4oEooBeMsm78nAUfYWBRJK28ArVxc",
  "key5": "213qFZgxJHH2zovmCUZVaoZRsJNSMb6Xr4TFafU1n8PgKr25FtnUNzgZmGLHyeQPQda5TXg3CoxJukTYHz2DZX1r",
  "key6": "46HxuQWMuKkUT2YoeFRcDPQvYGrfEy5HkVbsJgjRM9PBKRMfg9jZq6wCWFe3PBef1QmaCR4wa4r7WQ9EyJTFbAaj",
  "key7": "2kBSoaErf3kc4YUNupzFrGMeVGGcBG2gguyZ9PV8R78GshNa8WrVHAJt78FrAbFLmP1ueS41k6fPRM58JjqTByUz",
  "key8": "6dDpZ6VEfKpc11rEgfEaYs7M8ZWjtEGxMcxBNpPUDieTmrXtDQBUkKG5UtwkcF4e9iUDtmapFiGai55KCqffYdo",
  "key9": "C33J38Kdr5oFXocmKvScuuiw6swV3rejUJM5dPw8bu4nM9ZhTvzc8xxefiq8dPUs53qS3WqeGAGdBhSTMBFKEQv",
  "key10": "5B5rBHXnQRbwGZW5Tj1S7wsXg7zxYG3AbM1BEGqLk5ZpHk927kdioSgXJpcvU27knmCHrQ3epYknoGbLZMYr6mdd",
  "key11": "3SRRVJJjnFwWjbt98ec4X9VM3ZyXHcEeGwPYkhX33ojokojc3Zsoi23j2cT22ZnVXJheQ43sCAeb9Je5gTRgQNrm",
  "key12": "5JoQtwEPWhbbfLbHmKTrAMn71LP4nDh4xwJRo8ifgHi5WYkjf8Nh5krHoqWHUzVVKXY5LnLL3kqy3Sj2BHbBSCsF",
  "key13": "4hPmKNj5PSAVtiqDeT6a3AVjXqNnWNxfaUysbvgusmhoFnoqX2r6czKMLERBbTYxnQNAfzLNUrbfuKhicUk62ska",
  "key14": "3MHEnAH73CtaUeX1P4M1bRS9mSkzR869QYsJ3beJU2A6vbokNTLgYRLdBri39zoM2bmCMwmK2PHEVcyPKWWQtQ2J",
  "key15": "33AKtmpZLwbmMgnQVn1oYefrrmY99YgV2FHw3K4kfQzAM1dt6H4AR2w4MFM9GFRgSTbtUS9ik6Yuv6cCR97GyyiL",
  "key16": "3g7u75xS8nf8NaxerYUr2zH4sUf6jV7AHYQPWJHVf1QKgVyRBCy3yxseRUKnL6h5myVnppQMG7GALwR8BDcRN4Cp",
  "key17": "54dcYMFfqtYNooP5gqDtiv9tr4LGkWTm6gpWnLGf72rQTjcDYxKoZPUe2tczMCBUfkXoyVXoXo74iRRt2Nz22XpM",
  "key18": "3sYNriQu3FswrSJ4DgqPJ6DFC9jVMFc6v6PqGBYtn9xFcsx8eBfGvqKhwv9zpkuh5FLXspwQRM19ypHrBEXdpZCN",
  "key19": "5SdnBXgGH7agySjgxJqeBgkM4nfzzaNsiJnD6ays7KoumMWuwSXgSkk3Z6X6sZraN6f17Ny8hx58Nh3o8mk1uHdh",
  "key20": "4cxRGCEsojD2hRXnKRRBMbv9oi1GA1u4irXR1ywu6dxtnD56SDLYNFEHjkMKmFDWnwspQR63PjfqRnp1X2aiVLf3",
  "key21": "4aCRoyfV32r5rtvy388o2oiAXENyGiMrR3jW62aN1uLo3vxsSdZ5EpCzYEfb57i4cHphe83dKjLqASgKpqTH77N3",
  "key22": "a66D96qxag4DJ8YqSeKcXYd97Q5NGNHTbrUy9KjrKVFcSW5ycLMWxB4gjBFrkcyYJx9YWWmv1vphXATzvSdeMVn",
  "key23": "4ka9ULc94XeaUFUqzLqbugcTHnsV3k4cPngCYrMa5QYMyxxQDjx4iVTZV8gQxivLDWaSrQc7JFwKwBY4ET6Byxqs",
  "key24": "4Uat3eCVH3m53Sk19ZSMLHdB5jzUJJBBEKfbiAxK2nxB53ToKmQYscDCUKJ7fSQkRAb2BtLVeveREJqSVDyzDwsb",
  "key25": "26vrDAwr12YmXUp3o414VXzNzfCyLnNBaeZNJ8aZufVFvwGvCJxb5mCAiynAXHa7KpPpDtAMoNYKzqvbuK4iDAFG",
  "key26": "3JsMjTuySm4LVBjPnfm3bNEzgftbTu5xxJTyxoJgtHZpeWhavdYJKW2iWD3MKB4XY57qt9TYdPGWDhKqY3hb6H8i",
  "key27": "4iH5Z5HV7NB6vxCmBnLmxDmAQDNx7wxErNgpBPficK6dMiUryEJ1HDpjdJ32Jm8KHJZY6p6NAbtN8MqUosavb2iT",
  "key28": "cUSLvDSZfYEqjVRThPFwfWfq2aX6jQS4spJKbqkehVrwHt2FrDQmBzpyqAr8PbUTjrs2BBPupEn3xJTVJugXmo2",
  "key29": "Z5XdfZfQ4HCBnfvVmLLk76XcGkJ1kYQtEqM4pBnD5bRFEfKvgQKanRHQLtUYAG1wZJfUx9VCg7A41qGy4AZP6FG",
  "key30": "4ZU7e9t9nR1fbEH8eDGmvbBqznJgSC8sNknCnvutCN2UqFF4PWLjhub4X7qK4JjjHFK8CZm9yNk3GBPBysSSCYj7",
  "key31": "61nMf2m8QwsLSthQZuReZE5jTZGckjR9oshNqab9NUa9dBvt1SosPD1CsBT5fYmBTMiGWXR2BK19WzZtBiNDDqoj",
  "key32": "5ALR8QW8Pgs5EeCFXuaonwhUgUGY74auKzMWBfmPDGGcRZ45ctWU75DvspqqqbcjnerhtTvXcg4VUjAHQA3g43YM",
  "key33": "2DufJPMC7qgqAfiz4uwLGzEhsVX7PpCLpwF8N95RZQkTcyAhhyTqsXrLxdMpWMq3Ni1HEFsqd1SYv98hEQWuiuip",
  "key34": "WV6njNQ5xKq9f3KuR95t3MPixoCXC7eGZZdLdycLKVdzzQbRguHr2Vskh8CWYtMz1SF8trsqL2UNbYHnpr9bs4b"
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
