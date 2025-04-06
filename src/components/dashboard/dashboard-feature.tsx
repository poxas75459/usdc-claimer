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
    "5oTKomXcozWcZ3V2bb6pEP4JenS19AU4nwbGXABCbRY8XU698ZEXNwfSYsLRvebP4oi3Y1ZqvJhSsjvyaioF3nLr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sax1q3pwJUx9k3qGmdMDFGWvhG8GrDLUZhNQ95LLBemDxt7bCUiG2ADVdJtaicaxdRqw4ANu9HSXLhL1mnuvqEV",
  "key1": "3YDXntgHfSEgdvRZLtz87aodAc3ADXFkErPNKEHmFrfeqBJZoFn2PoXbCHwLN3Ge7UNhMvL6v1NZh3BSsk9GcbGM",
  "key2": "Mmpbzm9ceWrzgpTgFyz1xQ7jUDDfrU3MKeTwZQaytwPLxC7AnNt5ZCcAdgmcs7ben1du9UNdyKPCEzsJqBS7597",
  "key3": "UvHJnTzKETZw88u6wq7sMcrdnPHDT5pexaWSprLoRVaZcnb6F7Qy5Zf7QswfiCMZkhk3VZoDtSvxAKuN6QnnwSM",
  "key4": "3a9Q1an8sZX52axTuYaxrgpdbGVKmjSfmAfA77CmaoCcpKQhcftyMqxdiwTbF8CdGzYCg528Y3Vrc4QooKxoajVG",
  "key5": "1dq8x6AsTYnmA9X2CZjRn4QcGggFaZV67ndFfhwaZUBCrdLghjCM3rBQvriMwVDJTGBqvBWmM3Lzngd3AL3Frcx",
  "key6": "2EqbDHPwvsPCkkaEg2Wcr3xpQvdyeUxgfzekq3XYxKxJ3DWruixbHfQ9pPS4GsuJ1d5zbQtZ78UVVEni9ngHnE14",
  "key7": "41WQQLEh4vnjsxVegGFASULeE3FEkpTYN27Y8KixycaobK742qLVLDUSpunmUK7xmHaCKg2qv4Y4ZD1AGt8yxhfQ",
  "key8": "4ayL6ziho7qbfguCzsgEF8XSTCCRzBz5a9Ajskg2iQXZvLtBShjSG4qfvyg6NGWpDJuQxWeB9vaB85kixTNSdWFZ",
  "key9": "3wZ3c87YZUTbFqBrhfwYYcNJHzKDvfThDZtBEFZ2RYYi3Zca3vB4jiVLCJHkJh2BdCfGC4i12FskbzARdCQdHMQA",
  "key10": "56SqSBEs7NdSasYf3JDMMi8dwMSfuPcdLhsBWKsHBydiS5Eux3mrawnQXNKDBvzWYs9NsXmHuZSK3WSxRcsJcJfY",
  "key11": "2DGxbeEKs1FqkWZWbbrowrbGj1eU2CwV1uSxyZK1MiVcC7foueAcppdYSLQqM55aZzkCBMfAC3DjkVm9KRxpDVbj",
  "key12": "4ZCacZJ2Z25ABsKARPtnvFLfx7KWHkkewXvA54mTZnBCB5ZJNijRfM1GXQvceB9Rb511NYgqk89owBFn6HeoXZRo",
  "key13": "4Xy6X1FVBD8uPPrFWyeZrrUG4X6LLMrYFEZs93z2fG895SePqE89SdFT9kAmT6RKEVfZbWndqK1FdDd4v2CPMZND",
  "key14": "2RUcxHkNtC3hXCver5wWKxg4sgDHHGJLbb7Sk1zkUuBiMPDuStrAqsYDGL2CvJBvkz3zmSCinR3t53MttMPHRgt4",
  "key15": "4BYZwTPiA27jUPUXQQTsjztjFVcVGkuvZQjbDxrsiUBoKsTKeLwvUPdBHeVyy854PgSxDb53JeHXF7nKzfGqJoMJ",
  "key16": "5PFkixYKu7wRHEBeiSq4uXbcJGNseEdHHSQnGpmdNWDjLKnbgqrnm8SXSMQEToWhnq2zZDpPqQNQJFis4paCmzh",
  "key17": "3khH5BVfc1UctBUUReLd4tMcPorSjanemfcwfTLWtfMh71ph7JgDfAmpH5Ltog86ozUTNGxQTMcqHov9GXjospPR",
  "key18": "4G1yYrSN7ZJkYfpWMo6ugna86wh2od8FRoUD4bJf6Z74tcygcuf7L14VgZRfEACGqaygVvzxFNuUs15TwuUX6fbu",
  "key19": "3dK7AXDj1KvwSGmZ5FYvsy7p5ANYtjY9veGwoqosyFWLKZpE7ajWC6vH7TT9spQZdfnmzsWvF1yuH1ZE6i2mz5kt",
  "key20": "4hzfZW9ENDQacfs9NYoN9YHZWukJVJP2P3EocWnCZaMj886GcfEJL1Hv1bFgSGU1Pn3BrxSKCcfWkuRgAZab26eE",
  "key21": "5rtTWLxRBvfwo6pF22jvLqbLwrXoiWwPu85G4MJpNvDKR3T2HmZNMrp7SvTE4PyKLxhNHxg4LmynHsbwhCkWT6xk",
  "key22": "3EDwbfXHaUbdJfwjgapSF5qSV2ChkGdyHugpK4xnYw9J883swhwX6WPw7BJKjs5599fnMrvYGTMjVeKzKNtUYC3e",
  "key23": "soG83uyFE1Jz5EGTL97LanosQE28Y3yJGXGcmWdcxDoaqo8ziFKmxYYHk9ZpUzNzzw4XM9z3fqizQZcRN62LiUd",
  "key24": "3zoTbtB7YuiaQW3DFLsLMX9Yc7xP7m5tXRpKJ84q8buHZsp2MosMcoeZ4fH81JGNzURTTMiWhyX27tCA2v1e5jQa",
  "key25": "5wcn1f241gVXLTjbwmRREjXNNVAsz5tdZxkXFNvJPtNan4WZCckCtMWDiygrjZ6ncQNG2nSP3BXBGf2sCGN6pNCp",
  "key26": "4cpCtWaAGXPkNR2CgzZv4pcZbMUp32Nh4VniVbDMMjZohVerWq3BfBNipfDu9LnbFb1bBR9oHtdQMsBduM5WvGzy",
  "key27": "4bZpCv8ndLdBvfJYnJ54NqwwrFX72KiVMdXXR9iJv2eZCYaUJL1oGckaRY7d3xD7CKZHUM3pAw2a7ukUN9rDL7Va",
  "key28": "CUAFGHRhtFjKerLYFZiXRqjMSkhj1s6pE4gQ2pdT9kHN4hcLx4VRoNiYUGyBt6GZFDFx1uAEFWRhWKaYHm4EhZW",
  "key29": "2nHPRxWD5uBRTCi2yuPtRteaD3hkqNADB2GSXqGabwYN8st2GppZKjSmJwh9LXFPLoCZwcE4UhdtfNX44yz1K3V6",
  "key30": "2HWwHrgKGcgfMiZTqzwEWLzVrTVabwPhmRdgy9aciLsuWe2G7MMzU32aVzoVyQrNAtLjqAQxgjPW7ao8mhvwu5MW",
  "key31": "xzmM8wDXb7dQXnnCFEKsPnQX1Ci6hUPGjjQ4T8rmYe4wdXRtCaDjv6P6gjDUcKVfqfbSu897eFYHyrFsrATbFfe",
  "key32": "fofBrTzNT9CFQU3NcxwvU3Q5NT9gALMjjz75ehiLMKHJ3d1dWeTMpVWashAFtRP4WNTg3sTdgPT4QeJ4ZwF4bhC",
  "key33": "3Xg5TqPwRHxXfCq7kWLn2RAjmVHp1ZobqjaHe5Xk9ZVeTxCvKWkwKM3vDGgQ4rZ7Vmn1UUETqj7ejb885DaGPmGp",
  "key34": "3qrhFpnDsLy7uzSnZQWHz7L3BAoPM3mK4KnFEJTUmw9F2nTrtLPEnsNwX9iVb27dgHwtiDHV9uo1j2RoxSWri3rm",
  "key35": "4jSaHdFmAoU7Mmg2cuLUFAWBfvefLS8g5Uh3X3bE4vHcmyaNTeXfZaPbWzJB8uYxYMy1WL66knsHr7gCQ1zNUWuo",
  "key36": "4DaFvNsTj1ptdscjJfQBWXmiarnskuBWsrXt1c7sbhax8e3WhB3Bfc993zczGkVFd2Z5EQvseE1HpYXkJRkVzDTE"
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
