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
    "C2vheR3qAFHpy7xdwKNXSn9impf5mf3BhqbqLXLRj9qAuUpJPK1MR8Rx1PcT9ASaRLeaFfnNmLXnEGtzxDxf7mp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NzQhZowm9cW65tCDvKYcz3tue4pp8ZQNU2KBLxXuSAm44dHqAmBSYwp8DQLa5F9qqWPXfVU4nECXyZuvMFEZDL8",
  "key1": "5srYrW3x4ziPJqr2R8owjh1Cgi1UvsR9L2JoHuN3t8cbQ9rqVtdnvbkLoN8PAGCq1UnooMrGWRsHgx93EQ5sMTj1",
  "key2": "3erS3TUFciWQLKvLJWS9PRbU7e55HSf241s4b9CGr96odGfKCA1dbua9v29naUNiCgweSFfgRaWCN4y9LZfM5FzH",
  "key3": "53QnTENs2Yc1MkMGSmpgGbJNL52EitZeajCG3ogWuL7jGDewJbDZ3aTAo75M9EfhmHDdmexGwpoQtvd1UgrPzWXd",
  "key4": "Cd2iqxxk5jXFDZvqVY4YsE2D6x6w6mHhMTAeSGuiNR4CxWUHhnorV8npJeu8wGBEtV1DGzLfhLwpxvbH7LqNTqX",
  "key5": "3py8UvWofhwc94ZhC8kuzcyVVGA2ud2QYW16Fv2Mu3m76vUpj3nqoSr8USa7CGZYTQ4C68ZEi9VZKBQfADFDPXc3",
  "key6": "4kQTtjqAqtBL19utRMD7nNQjQzQxS43csZdyUbYFsjqmaeqDXuf48eEkwrMKvsNn2dF2HMVbHhKMXapEmd1YPfsW",
  "key7": "5921axkBodMWvYJsqtHriRb73s4kun5U29CuqxTHnGWkwxkANP7asb3wCR3WXprkJKYpR4Xs2UxqCLPVC5HzNrvi",
  "key8": "2YgyTvCTE4BqWWwvDqJ2J8sXovs1RhmzKViJZh3aoZ897NytvvBLkewictKo6jJABnF4Xo8bpry5yG8UMU6vs1Vv",
  "key9": "291EZZGE4irZWs3CiDZC3VmMw4x3Re2VN32KDtdTuGr5N9ajLiDot9xwiem4uMz2mRzmZjqT6GbZHrQ92UG9uUHY",
  "key10": "5SHajZhMsPHBxMo95c5ECy6vbQukpQJRMwKwgLkHwi4spDLwHC2wzSSyjECZ45wRHTL1h2taSBGyryMphyH3vBH5",
  "key11": "hFQrSA83fc3JYEPA4pCiYbUByNagKSVvmk3QumsdoRjxGVSHqexbo36Y4fe8DbgyewuCLUbmkA1TW5S1iYhSEKv",
  "key12": "3UgKAK7twKrUWPZmTUWVxYHTmJectNypjgXG9P5XDtWLHxV54R1x2D17RJ1NNJcS9oLUXgp5D3xcZpK2DKWU3DsB",
  "key13": "Ryxt6FUhxiSTy1zYtwxYH6sZsTunURhvSFr8appBnQ1F4DexwdMq3F7QEnbv9tXvkguCdy66TsirrSkQcK6vase",
  "key14": "3TovWcV8ZcvW66YQv8nbARMdNAy9Yyvd7rgYFdW38F8WDVcn2TEtPEepR19u46nDuP2dFWVWaBnywk7g555RLfKV",
  "key15": "5jCt4h5rmV6qvsUwBdBufTCwigizf59ZLV3B2YvUYmpFQGcXCkQtUcj38urZ4XgStguQxhcNert4ziK3QNv3JRQK",
  "key16": "3JJDAYRoQMCjZCcVJbhoA144jDuatA62HexBjtPyTrb39qLNEvW56kpBsXTL7e9heRBZ8CYfvX4bVfsugoA7ggNP",
  "key17": "3ggy8SMrfNfzyTXWbkcazSNF9aF8PpgGRLu21ujYiBKCy8ahXSE3a4R8gim8Z2B8jKBKPcjbZKrErdNy4sfgfkim",
  "key18": "2n6LtmP4s4VPSf5uRV3ji17Rx1N52o8aJ6BytDRHvEN9sdNjew2QRWP4pbK6LRVyk8okEeTmzmmWLooABPqVV3cp",
  "key19": "5rXEE64P21qKVVyy3UtJgQb8F9ST7WiihrFW57WbCGVqETwMuisTXPhutrywAaMDP1CH9Ku49CN4qhZbgbiKu2iG",
  "key20": "2rw1hw3r5AcaQ3YjCcbDHxDTA96Hu5Z8xcxFxmowS44cWyZk8ApHfgH7EWKhofJ8VTmuzMK6uZ1919zvGcedp6Mg",
  "key21": "4mEyABzn2iofaumHNVxeBJwUozLaFa3RfjZ4VGtBjG8aoxt7pQfW38xfGiCSyKzZ6BjgoXvr3dAsmeJ8kYrBM1Mw",
  "key22": "82CEjk9jncoVgnueJMRr4HiScUuEXH2bpx6fDbqqLhn3EVRvAyHtg9eugxAwN2b5GA5yyvxRs7AirVcDBcJFdWL",
  "key23": "2eJmDXE925coRFRmuCjaNmSttJeEMcD7tyqiARBGdLvvHzzAG3D4jVHvg3XuWu21D7AYRBy4smDxDDDztS1Ut2oM",
  "key24": "iCLT79CEz7JvRY8hUcAKaQJaaGpgZd37JQHsVza8eFwogPod23dNH7CVLCEp558q3osZjpmZ5LpSKnhqDvn4CPi",
  "key25": "21y1P3jQs7nQWBiytFBfWC2xyBFuRXPjx33ZGVVPDCTGx2x8ibryHJB8rMJg4tQ3n3xRNpLQrY326E3chCvHYguk",
  "key26": "44ZtiSZX9e11HxCEeNAEZiCLKHQ34KdYnnychBL4P6Kck88skXvkt75x6YMW7wEQhBn1Uqgw6PFXd6FpJipBPGCy",
  "key27": "Zb6YMgPBAFvzkYDhiCgjSynBKbDULVWsm75cpK3EkDvTcWpp2McjHXyaNGCWdnmbSpVutMFzaDX4y2gNX9t4Bj6",
  "key28": "55UeNHDXb77Lt8BrBk7vv7nefKXBHMyE58DUQkqeHvFHKco7x1rtwfrMxgQXAhM4wmHDk6M8QB1LsRDYNEJL8euy",
  "key29": "2XCtH3FsiTgXhaUVgJnwPdhXbgucNRpYwBzGnzMZvxFTYVBJNEj3kpMswUg8iSyomwkT6AL9D1KQ9L3hoXcgGRBS",
  "key30": "wNqCh5EWWUTFFrXRxbMbGWVHB66uEnuxA2brtH47eARdx8fWeWfhEQgyWPFaBUPysfgTidK6TdKz25CbDv8wSEe",
  "key31": "61mNJjFvwE27A1p5QBL31ocotvY6Ls8NV1z9QgTpbhRDtW9V14LmwzXXCx4hvaSDcz6qkMp7aE5m4v5zqfrefEb9",
  "key32": "4TZF547M4786LBW86wbjQPSnVzBMQ3pjnKZKKoHv3M7tfqvZcbj7r64BYupEbSqrFZibrAa9oHGBEa6Fvbu4Vtxr",
  "key33": "4AJNtK1QU6uMtHQfHiTcvCoaSy7DsFBWtPdq1Uo1UPhJig78bcqSiyGA4uq5umSgEgCtJHpHAo2Qj9RzVkCYZkY5",
  "key34": "hw3unFXLweqMwmdh9uGfP6q49jL6oGtFVtFsJvWNSEEdSVrG8SyJvyehRci5eQxAcHTWhrXn8A5s7NNZHLZqCnQ",
  "key35": "2F991uTzjuXZ2vigDBpAyTtDfydMmFaMFsKZTZUvuZW96zfCZBqcmnorxm8u6UHaYcrFGmAP1wcn1CZFuUHdw4w"
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
