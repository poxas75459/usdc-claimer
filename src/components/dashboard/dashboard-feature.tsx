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
    "2hkrNRdg6U54or6TQeWyv9P79kTK9XApssiMscqBdoPkkKAKsXSURyV6cMakHdYPZ4Ukx3ejmSz3ji9UV8fpmdAb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "an9AKSvrc7mdveXBBpZ9a6ZgVS8nncRx3q31LPn8PMC8sZpPo5uRwHpLwzRLT55PatG5iUP54fD9x7EvVdy2AKc",
  "key1": "JRCNSJKY4yDcha8yuPvXoaoUarbFxwFacTuroHCG2eNYxQFFXh2cvLTD8t4yXJ5wqzKVc3tqwXLbswnuzSFwfpB",
  "key2": "pi33ezknLumzX1jFU55ksgqVTEV3f2T61VGvk31PJJk8XBQVo1fgJc1Q8r9wXnDsj1rrYxoyzXt7VALRSDreS5f",
  "key3": "3efKdX8joKQeV4FwMr3XFr9Rv1q6m1P4vKbUiFHTCEzY7eAxmwzTLnFkXmLx7eVi3YrwThtMYHtRaBuqZCcCjoij",
  "key4": "5WCcD7sZ3RCBJFRDGtjvzfbiHFXif8jzpj3uLB29MXe46KCvdtufkEeyLYHkz5JF2o38EmUuu7vaaC5NRqzDT2Cj",
  "key5": "4gUpLz2Uyqi9cSTnqGZ54876KRAXNrB5qbFJPaek1LbDdFFPphT1Fmt5XMPFVT5WajcWJ6bqwtjpYWx8SF8AMNZu",
  "key6": "r38qRyU5by53inQm6Scmtt2e2Du6RfrLZjqpcWHPrieeSnnjhUCm9tiD3KMiFiAvqyG2tW65yr8L2NZdiefAi2u",
  "key7": "3Ek4m2ZbWpok5tzEcRTbKcUeU2Uuq9rETHZwWLxjvrFTGJ7n9DDyEvghTYFSKXvggHDLAhspbccwDoc66BQv2S8S",
  "key8": "5Ef6vkQuWCbV7EFtH8hTwrnPZZh57mhtK4BxFG5jxBpkVsF7aXAUFE5raiedgtqfaji7Sqp8786qA4zLrZUenSib",
  "key9": "3QNekp5ZT5EiG4bmUY1hjYsTwzptoxr2kmU2RPn8mqNACRjBuMSf872hRgSGqVCGhbzsvFWzQdRD44wi41riefFv",
  "key10": "3EAy3bNFHupU2ZqdJhWRnKMKsdWsLH6ZpG2zrwYTvPnZ5A8vqVpLbezC38CkjXogfS3t2UGcAFFDnL64YXR4pLSH",
  "key11": "4bNfgMr2PhXG8TybL8HYWUUVSKs6ToXgCvjCMzPkx6HJpMUCJy51D2SSRKxsHPTtGUvwpQjuXDCaowdBmU2k9fmn",
  "key12": "5PJi3pbzA4PkF2k61dbWju8tN6VG6opz1Hh6F8gCSGUTX6Z2qAQVcVACFuYgYkuFnXyojii51cJ2ZS2VvQLETDRC",
  "key13": "k8PFCY3KNEmutzyhkLNEZ8GdiDUnZgpb5XVAmHrPzMFNCJ7tWSk2njLiXxijJuu383HsEkqN5BN9BGxhMsP6uh3",
  "key14": "2TSmcJjyEJN7QUenhRkMbCyCs2AMG6qQqmMf46NNUXHsCdrYmoxvuYN2tAFvdUKYyeL5cafJ1zvwdHmPJVPXdeAi",
  "key15": "3aGR7Yu6EUbJqGQoJ8WFwADR7cB7SwsYkXTUebxaBN9UH8i9DRzdr1iVxBtLXMUzAoTk2dqtb78KT1yWBcPjafpf",
  "key16": "53BpRbuXXNtBDoXRD8WajGZ5vm9bo1JDbVDTdpMFUL8Pi9JtqZrLoYGJJtH2ANKmE3Lk8YExqtSx8htEvAmc8Fup",
  "key17": "5Ck4PLpCn7rXV318ib8gen3E73BKEhWBMGS2eYYS5ip6wFtHUMs4MHbSJk1qXUYNDMuWViM7R9LXux5Lhd1DxRrN",
  "key18": "22k2xrFCvVTncQZM5DPN6aBRRdqcefyw6xLtp6um89w4QsbNoFfWtzqVCbfVBzwBAjGaqx1KxA5Q9Y6QZ1ngSZD1",
  "key19": "5HPSMtC2T4axqNLVAyWH7kH1Kwc5tT3C47LbvFdNiHY9kXnEQYR4XAdfr7X3JZ3noX1L4sw3DpbRfozhUzAi42Ed",
  "key20": "JqaamacaqVrVAqeSsB7x2fPqZH6TWyaop6r66jPmxfcQR71WWrpCpALHaHnmPgwxoVGYQaKWueNgFbQsoJtnw3G",
  "key21": "59kc2DayqgWqkM6M4SqU94K9wL8ecfxezScjv1iTfuH5CdmN2v1ckkcJGnuUDSFj4tJHVs8xgbtHNeF3Kirz3dmL",
  "key22": "2FgSVf4brcwvGupW8zZzH8BkiGm3u8ptQJVEQDZgbh9UVih9NNrBAtuzqXB3N7bz9KfmC4dGFf3V3Q21WgoRikfK",
  "key23": "3YEmZsA4phohxEgDAGHVt947QvaFqHggp1nwPdXeWbRDrTvWwjLRMbEa6tJJ9KCNPVSngyETH9Exr3SKsvq9A4ZB",
  "key24": "2Cd5eRWPWFtpqNc4cnaHNt2HBq8zcgznDresQzSMdx9hcr3rNCAjqioGuhaRpNG8wTd6wxWxBNgrv5c683QVbPt8",
  "key25": "5hWYF3BCeAJ7oQH6h4HpNQ1NkeE27A3PnwWGjwanEF2LUabDabxjuR6RMZqpyFe1X6RgCKpk5m6PxbnBMAmnt5ZQ",
  "key26": "4GvTrjgPfy9XUWxWQ7tJJMCCTtmQ6J2PCAYKBbQt3rFPCcve7s42xm77gS7KhkciPynAgNu8d51HwSTGe965LWXG",
  "key27": "4dvgFp2WKu3qNGsSYU82fghFK8ZNPvA5jNFnCna7YGRKwSrAss9XkxKP7qYGpEjTa46i9NQmkRz5JBuX5zKVjFUU",
  "key28": "5bEuaB3v9zJP4g9mEEBuvNTk8Pb28UApc6NRHBaQWrysgxAn3zM6YUiua3RHufYLH63o78AVwzjFgWnAitgfnSWL",
  "key29": "XDjRth4hb4J1xdP9ZbzgDt4o8VEtY2FxXwd8WtzDU15swrJMW6wURYJJDWpidNRyEZodwS7RwQUovJ2HBatZ7Zb",
  "key30": "3D1xVp4GBSCRbAmKMmwDa27CbJxPxko1TFft3ZqNF5yBM2fcftWdkJt2ZNqPLK6GZ5HKSujZXdX3EAEUS2PMW95V",
  "key31": "4a6EdEToP2T4ok4QYhYmZVwHRYkYDHbFt8Pn5JhadmFA9LpBkEYFB32g3UB67c9Hd3iD77XMy11WjWRsBPVP4PiZ",
  "key32": "p2mhbjKFEPF8GK315ovh4meQmyYXCru1QQ19BjmHvqca8CAXLNSKpAAuUdWb1q7rxpZo943Ef5KjNxYhauvL8k7",
  "key33": "25EzsjbRzSybkvwwYPpAERZg5V1yocPzxhXNXhienekf7redJAK9Fj6uz47Cu3JhcavDkkB9iRk89eBRGA5u5J6h",
  "key34": "4bJaXHs1w4P1ydfCBZAqLL3rtCXYHTKdQNUxxro8YzHRgGKftJhUqZiXHcR4k1x2oYCcoymN6mp3VGz7ZDpggKCt",
  "key35": "4owq9Pu63KG6xBtX1dxxZhGKwK4Ta4uAVXCgsfYJYUvQwsv1TwgQCHaqD7mJhAwsrdyRy4jZLARK3oMBcctZzy8T",
  "key36": "3H9mdKEmCTz4NHvqvwD75D5iwdJMtRGpGxroq3uTTHyxVMr1GfqnNNtBM7ppX3GDnXuGDTTuixHfQDjEGSz6FRoE",
  "key37": "rNVwggYVwatd4tgmAjV2gWCwfYb3U3xTdtfbCRaBeo9voDAjMhsqrneNABPorCTsgEMb8AB2DHm4U5ns5n8uii6",
  "key38": "5VTW7drPQnCTkTEm7jXB1fyycHmtzSBk3pYJXZWevAFFWZhPK5PB5rP2kAP8JBLKB1no5dVDDGxJNpySkeApvJUF",
  "key39": "4TRHGVNhwk2qqxPFfZEjiY7d3q8tfSo5bHVUa843dkvtiofVVxB1mehQShrfMYh1aNNwuAyWC6SENzL7Nfp9PonY",
  "key40": "2TMMhjAkHC7T9C9QAhXkFaf2wQ1TubE9EdEF7v6YNtimg1kvBtE7WW7G6ZFCiiQ4zQpdLre1Lea49WBtSArW7hZ6",
  "key41": "4JmPbz7uotj7asBNJ5JjwqdiBbn837X7Yh4x7bgoxUJf4CfuBzi5FREV3Mag1KWojyE4dhv6gJcNDM29R7MNX2nQ"
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
