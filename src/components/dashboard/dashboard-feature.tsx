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
    "3UUsKQL5hEeBfFRZGkEShZeeYomoPD9CqSAaVq3UUkR9wRPXLg1ym6vEGEJdMTNuFXTACZwCcqgQx6qb34Jpp8CW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qqdvTAPwNxvthpGLhM3kihXG6NwHkaQEw8Qbejaoof4XMWW972AgKbfH7ctf783RxtBdDm4UVZMbbe8FVPS5Bwc",
  "key1": "RHPVN9hky73fk3NYrbdLP1CSxJVeDwUAxftvr9gqPduEYkMTaYW4jaT1f78dNYWUQntkwvrSvqeMzcdCuafEPCu",
  "key2": "FxGJ72KtPznJFaaX2xtLmBPCuZe5thaFVbHAMTiYhwjVAiBRaDzfqHGLASKqePx52SoCt6fKqjeUBmN9qMM5MYE",
  "key3": "WppshubmrcSq2fEp7qrnNWqyfVcUxHLh7riLgkFhqeBdtxjdBnDChjmtKRTR2R61DveUqiU6vwREmxBW4xKTJHy",
  "key4": "5J4Lz2ZQpFF2kvbLyc4Eb356HT1kswTXHaMNjAA1RT5fYEuJzxnBjrXLU64gn5CYcTwiS935KB294jLgV4owJe29",
  "key5": "5HTQX8539hHoiXhWdRqPekLT3PThJPjTwUthPXSBfFtiVy9v32VEWCmKytbYZC2bPtzipdhrDRewDq6sxvqNhgSQ",
  "key6": "37xScjbxaufGe3qgMf15x9oz4jihB1SfqJ61AKzphGqK7vYRH5GJXU38wJDZwXoNAeUw88tUE5pHuSf7kiTKQBCp",
  "key7": "4gi1CugnnmfwemjWeDao51WrggdeiwcNRVb9SsNMGmbcCTsbhFnHekmQGcHMEMRJKC2jnWYh3JajubVdK17HRyRj",
  "key8": "22p9cmxCpfkqcqmLnAQuZUszs7raKJwixFqXoVVEEsK8T4cR6pUP8b6tKTAzKEarszseosPHYoWAhzAkNvdUhpTy",
  "key9": "233imMFYz7nST8GGZp5BSHQCcAuXuiDUFStoGHcx2M8ApGSe51hE7XLPrDGMJCjp82AVB7vz5E1VgKUExWWawxTw",
  "key10": "2m3EWoDAfmPTGaukiucgBjLDaPpFRj631ZFdpspfXTbKx6NeWopwMJ6U8U41GqS1C1DwLFoS2YFencDDF8KLjNEH",
  "key11": "4UrCKA7Pcr1iWDHh8MCwK8SXXvNaiWehwxVb3LUMF5EjjdN9LXPuLfgGVpXpFupoQuxztu6szZE5WMc9EnZ9Fgfe",
  "key12": "3Rv1sumqaGrKfcEnhi21pLJkNbPt7REiuNavzo17yLTbeRLTkBDqswWwNoY6mEqbXfEcX9Hob1RW1hKiDFjD4Nqo",
  "key13": "3X1sjontpdzQLjiTkDpyGssXEvQBHx2uUToVhtM66e2E7XdrAUbFJT96eooMSQpWNoZK4PuPiMuwVkyuryNS3kSZ",
  "key14": "FZhHvQypMBMLRd61sa8KHPxd6x8zLyq569TWdFCB2jSkzk9FoJtvWvLYGKEj4Dnf2kg1y6ZEqn8CbRVCr6DBGEM",
  "key15": "2iur1NEPpqiHfSKEUrCBxdZadJdDoKwGuFwbVBzZiuniaZY6LT7YdqadAHJTcHjWfbBv6QHCWPWDD9xpycvJvz5t",
  "key16": "5ESTVvF4LkvkuxyBwgHqrSddc5wjQZyLhqAGd2dbui4kfAKD2M7jP7FmxXLbb1KDBFao8DJhDD4UXmXkVvGkgCGz",
  "key17": "4k2K5W4KAWmM33WRbJrknnjvUcfNFr2PrHsRuLxL6FiUZ7YjswkHSGSw4xo1Wh5HfJcFsHLFMurhDnLfSvMjpJyT",
  "key18": "2FJLxdravoNwsERR9YmSsW9SpRSJRVDfjZW4zvwtDtaXMy1JR8AYKu5iuR4qTJgEZ4Jq2RQdkV83dcS7PHSRTKcE",
  "key19": "4EKQ314wXPiP2hyjHDQ8oqrnFJGmr2Dv1PgZ9nqaUsC1GhzzwRboKhXZMoG7T64Q5LgQHDx1HKfPF2v4r2pKNFfZ",
  "key20": "4i6vHnzBRXAnRyCGJNTHd4CZ9jM1aRm6FN3Q9FupAjrtKP7CmmN6kLCsboTxz74Rs4YpxLNrFRsS2Xsh9zGn4ALW",
  "key21": "2qToekbLBxSwj2iJ8hpAfx951XS7uMN7RgPAEVNfYbCdf7qKRb1Te7z39rrFfxhdyaHhsdfE9Nk7Z3miVSz9zbvB",
  "key22": "2qBZvKmC3NRvvLhcDWKMynXz4DGZMubToM5Yhvq6mu7WyH9hUuJYuWS5bX6Qu8JBLnj5JcBjBdNYwfyEjUmdTyq9",
  "key23": "544QYHLE3WZmKSB1CPtqZAnFV7v2Gqh87yUFiDq58owwQBv1HxLhGGb7enSAYZHCrKmrP17Jy5Sk8kLwvizbsKjS",
  "key24": "374vurbAhNqcFDJX1XTDFXLeG2EJzV64KHdKpG1cQ7Qut93MpbFXqZcE7ZT6uuGaZmnAVTGDnivck289fkCFtBzz",
  "key25": "3ZGdQiPWEfMueBoqAXk131m21w6DSnVvj6wi9m24gZYSnWpZkAdhFTyWwr3DpZZikM3SkFDn9uYojBwvj4WEEQGX",
  "key26": "5Yw1N8vW1FwiMcawWonwGUJzPs4DqWhAszNB7Vqjzx5nbQttW49LjE4LsbCVPX6DAbSWZaLxm34FJVizEXv9gRqP",
  "key27": "CiHD9s2pmw2D1UJU6ko19eTyWCwyhZxRRDuqfUvCbvxDzmiZZ24VT5kEz7XfdQRvAw6cNVGTrtgV4gXPSzAoGNM",
  "key28": "3ckemsoQzbAnUyGmXy81dY4NLvRwCoXnaXLg6gmR6VHp4rAuNkg4E3SfRxytWy47ioKZGhN6QQ6m17y9KoE5u9r6",
  "key29": "3m4H8xjHvhPoEaXhNKKYRpP3CfurBUrzQPbjSj5wFgLgjr3rq28pfTsbR4sgms9pZxvvuon4GgGPpQoVaha5YxVB",
  "key30": "5PEWwKStAoWZa7mUkXh8D6LLWa3HiK2ZmAqR4bSLnHFngh1SAYaXW83eZ1fm1D6bLXaDCrKRXFEjvEwR8yzqEwRp"
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
