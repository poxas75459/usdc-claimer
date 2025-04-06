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
    "zmmJm9WvSN9oqNQ2eNU1fLAsAU82fbUGTRfNdDLqQkYbmfefr62iMNEaaZagZjJYtq4nwTCABb6deH7TXNGSwTN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Yku52xnQRg6RZQsoutCUKSxdpenCaVHFYvEmnDEYUxyhJkGCXr9e24hqFTNZH6VNNLnBYrkEcrPr1hA3i218162",
  "key1": "3S6QpXZ8zCmnfjQHH1ey4bqPMhfom3sVYzdLNNStyiHWAjaN5xmvdbWPSP8u5GbCSCkd34SHw3PvHErDNJ1Kar6T",
  "key2": "2ijsxbsqp7w4vurUGMru8nc59pcoWx4FeZ6m2UcW2SNjLiERgkZV7y5PR8uqe2iVSUNGMcCfgaV2BgD3tETqf6bn",
  "key3": "5VrWgaRKduUWcF1BpsfmSh6rpxLVQGC2kQMqbfz8tzwaRVP6h4duQd968wv2BssZTGaNJBj7vBbjSWVWEfRxjzvd",
  "key4": "2QkPWriP8XhwXjGFymyAW7eDkxwQEQ51i8WmBvgCDqGsMWMywbShNvKcCNyQoFbC2ftxzi6Rn7oi7UbcLGhkLuTQ",
  "key5": "5oxp85aE2pUf9bP4oNFw6AuTVLwx4p7ufpzSriY96KojP97uqbN2zTQQnTogRdeg3oJaAYN5tPQbJV5o6kfEzuaa",
  "key6": "24yQXWoVU31pUN9txzHpm52w8fTRD99tZ7xBeNXSDSLRZMQDxDtX3gfEUmkc1UE8bByeam69SGub92x8bi531MDn",
  "key7": "Xe3t8DB7S3jZk7KBEr2k4FV1eCKKBbtm3RnJXpnmydYSvgETpo2asRWAVXKBPdy36uYscDKM6pEnW5XST9E9Y9z",
  "key8": "618JmLhAYCDMD9DNJrgTRY1UFjH4PoJWfHG8LPHixSMme3CmfeeUcLh9PDrXecL3zrHQSQv6KNAdEKeGZYaGuoYE",
  "key9": "2Ah6M7beYft6d8zfcXaMNYgJUQ75BZeb12XPCa8TS9ZPsfUQgt2aeP8YxVLTvgLYnjph5aCw6SeZAMzhwCv1Viw",
  "key10": "3k92QBgyV2g6s19gs17eMDV3zT3Y2o7q5rWYkgCV3vAwY14MeMmUQM1xbBZC3a7ic4kCGxWrRsQcwEQNbcCvfmGU",
  "key11": "2TvmqunCsTQchsdavib5HjVP1icZq3HPU4EG1viN2LX41EJNGPTbAdVFscNoB4WCodAqTzk54nSjtBto3MpNd6qc",
  "key12": "S253CVprYDAq3KuywimHbuSXgC82hY6rer2cJdKQkyGMpeM1scvjToWfJ2iCktFSNxx7guUSVyQuS4DabjGfFyH",
  "key13": "3fBraGkwn9bJUi8Tq4wx51iso1SAA14vjmAhzvzzWnRtRDrGbSjuuV7skJjVLeqXxP2xaEbSwUnikGACxxuJZSDU",
  "key14": "59RUzm8pjQDgNynNk5XqmX4RGt9iuWZyzkrVJPx5yoTKiojxQVdY8JXkteMonFLCYF5Jt7hDM9g3BLHvWWuqujdg",
  "key15": "qW2i5gaUAjbFzyLvUc1Yz1wGVkCG6s6B9wvXvRuNKegfFisp4B6YtMSy3PKruX2wjzQw7fSXoN84dbAicEPwvxV",
  "key16": "tyjnwxc7DY4LcxQZrZYMNvczfnTdzDMAeebV8Tix26XvkXWM3HbT7oX18svaLnNpjrEcWmRPWvtWczQWBRjGBBy",
  "key17": "2Lv9LZzzWmsdT5Hfn1u95H2oYPpnwAEn5zn5N4iVHkVhPAgRpQTjHxoAKfvF9qB4VzU6bDWyMa4GZUyUvQksiGWo",
  "key18": "2vZziCw1TpkQ9tKiuFiorSZba9GpKfy3aMZ1PUHoYqs9KexcZajsP1VxEtu8xgRZJsSw3bM5mYDiCeXQGpW5BLft",
  "key19": "7FMuc7ttXz4BEVC3ZiyqRGsoVi5KgTkPvApEn1Exay2eYTBuyriuuujt11z6CBaFYs8t39YaTmaxhLwzcunrWQu",
  "key20": "2QcR2E9Dddexz1RRKUCUorpvh33o1sAsNLpywJkgUnMeUTVhkspzpZ6xXeF2dvPYnA8xbdtuEsgPiRV5Lw37EPUp",
  "key21": "3L1NJGh8qrTuZy9bGhJXFhBjPxv3iNvREq7yoe39upYg6hDmX7f3oTvy2K2HL9F6EK6j3M45T3QyCj3CJ7WbkCtx",
  "key22": "5vMuWxX5pguTH8nYoUb9dJicMQrsmdQpnVZhLfKPKkxZR889DCHsZbkZiufay1jTQYW6QVJtf9Uvi5hm6jMLGjNQ",
  "key23": "2oA5BxysrjQEEsPgviwYgpcxVLVq32ydihwtXqw37G74JgmyWu4bex8JT3ZWqpGtakrn9stUCRrm6t6GieQJP6Fn",
  "key24": "zmoM2hytGBXYWub3awVpMfyje7biXvYEuTDL4SEPnPynH13LFWNVFMKSrE7xzz9e2VSUgPZWuvjbuE7uFquPHfr",
  "key25": "3uEbEau6wDcdBUQoY2GCDS4qy6Dc4AfVBLF3J3kD8gUQhBs6d1qGphESfP2x3gegBkc85BUMNc5EscxCTSKMB9wG",
  "key26": "5GbSUW7seuk6A8Gcp1qcH2fv784oqix9gGfaBPLPyyg7ah4eaiGGU1XXfkXkwKm7D4iwMfd1dhYbzg7VQQcbS5Lb",
  "key27": "6Xf2PZYMoc7i5D1uz8p9SxCP8EGmy8kiuFTKP1jfM8q76J3tMQkm9N8AJnKn8E9Fg7sNo43y2t38u835aGXH5sf",
  "key28": "4YEyKnDFiBUn6JRyXvsfbjfiRsRSEYb3NQb6yPdZD9BSrdW1voJkN9QtdoLggUcXYbZeLWLF7h2VSoYXtG3PjSf9",
  "key29": "38whCkTC2Q8rCHW9bFEnaQvVndoqQrwMPC9RiZFfnqqpRMsq87YiRP7tBR84TzpJJZRi2ixiyBjGzko4rUBtmq3f",
  "key30": "2XTKKVHZdm93ibRaWepke1NtMK7WptxiunAJrNsfiduoG1qrUiZ1DiHsmw3VADMVsANncrF5giM2XxCR1Xi8ww3p",
  "key31": "2PfS5dk1ERA1nS7cceQwYjAiYwiFiVBu3rTgm7XDcoV5UeoJrFYQuM9QvRmnrqTFUkXLbvz8VypdeBp6wncv5GNc",
  "key32": "4JRuVo4A3cUj8nX9WnmyUVCqVAcz89S6xminF6cMw4inxjfctm3U52ego7wndakPm8gV18CXhohmzsCHFn79zbVb",
  "key33": "2mv1wTUCeC73Bmb7CTj3xY2jiQPEeQVREeVHNYt27sZtgSZcB4zRaDMQFxu7FVbR5yCM7esxePYR3y424D9yu78Y",
  "key34": "5bQpPG3PwX9MbiQH2jYgDxEoFFzatdrr9oe2QE6eyuNZNVVPA8hLZv9iHxnq83yny7LQArXQTRkr7chFEo5czX9z",
  "key35": "uevyyfcNqAKHa6H9oKFRE9cSuCMivikupSop8zo6sCaUtXDqvGCzEQQAsGxxzP2kyodM3SUdkevLRrPdszQNfoY",
  "key36": "5kjCBP59XwDuFXdbGjqzrtp2BRcbHW8Jhkw6zb1CYPPdgxgh7qDgyPLxjiBgCAR6EV6y4HBNPZsriCL5aSGqxD89",
  "key37": "LzXvYkjMxSgW81MF371k9NpxXNHWQmCTYtF1ZNRJRVTMb4RhaMbS5JT4dtWLnJ18aahoAQcqhP6yuuLeEs1zSpv",
  "key38": "5jJEGsRPA1uhMYGhnes8zkiY3KPJ5osRxz3b2pGrJh6Hu3rWq6uvjMbmJeX9bJb1zEhBXyixnLv1Tb2qxMdjnjck",
  "key39": "2boxnsQULeHkzra2Gyw2icE6TuMWk1SkEnkq9txCiga58gxR21LudRmwXPkc3upwpNK3MF7sTQwU8CRMN12vx2Z3"
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
