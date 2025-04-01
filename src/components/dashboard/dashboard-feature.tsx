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
    "2St91XuNMZTfAUCBYKMwGo6AZik1mbh9tncwf1yy97eAEHj8BJchKmuaE2M28uQ8SisxQ8eGna9vAJycN5jxtvzJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pA8GPBmjA1TqvuaeLwsY6rebRfrcCNzigz542GDu1HVu4KMcFYBWMb2BRUzx3uvDf8ZbF1ePoJjSfuzwPy2wpWW",
  "key1": "4A4gkCXisrfdJFMmYCrW2uGEgyooVzk8s9aCeo6PVRw928DXXczPdPZLDngKo1LG4RgZxeDxXXcBdQwfUcFaEcJg",
  "key2": "4fgZjJ3yENmvtz3pqwbfA48CfeXYfuuyTz6pVLkFwLxVL95csxZsHLGcDnfcSiCi9XSMw7e6hMbFG5N7TkAwqM6H",
  "key3": "5i5E4u9m9h832ZbivUEj8uFDV5V9AbWL6ptXZPang5aia3i4F79CxyWxe3qUTHRkMKTD7pfV5iqRt9ikDxryGonB",
  "key4": "5HaWmLTEHd6XEfirvxn7UNSTFjjgXYHPs6mnSNqoZAowYRZSXBcTkzQpvLVg5Lnt78B3zbX8Wik96F3XWHWnSWNg",
  "key5": "3eHktReZrJjz5dVGouKVJwov5fxaNtAD3TjmKV6dLmggxcuKftDDav5q5JbdBhA1zXduRY7dC3xW5K1PuoUVgAxb",
  "key6": "5vtD9yKN9RVZ7UWQjjTGKLmW6YPHtECmN5vfUf1XW2jdUKKokSSD8CqbBhUmjJn6cCc4i6Zd39bbe1DyuG4X5SkM",
  "key7": "5wfrZaeRuKkXpRUA4XxJguaepY6BZCtCBoNrvxKSyu9VrgEeSKFfYPNRGs9Exek8CxrKUD6dkKPXZxQPTKhzQBbk",
  "key8": "5JT7AV9ktWAhopJDyMC1UKqxmwDvvciQaJV8MFPAFRMHJh991t4jCFTbfQtCmT8cxArBy2Fe8FX1byrxo4EDf5qZ",
  "key9": "6VKTZDUpGmJKhn9i9CQZdmbAhJU2ge5NWrVLuT1x7YBeDvFWaWkYmmHmYf9kQnnjZsGmn6sCxiFcrz1kZqz4vmv",
  "key10": "2stcoYrLvPffY7QHiwizwFuHWfds9J76VjoaSeWKvAG6MMAU1hxKWLpbHPsQ9N3S3oDRmdtCbgcgNEMfKNLKHC8S",
  "key11": "4v6tHcifAeFpJK6RfnnGrSaBDwfiWnK9dQ3W3tPoRG9xDWEnWjFzNJRFGovtNLePxS1HMZCYaYaatrekPFeAcya6",
  "key12": "Uj6nFjQK85L6pXLtsf5aFhQZHJtoHdP43xtB2VoJjMdCX8FkpPpwbKVaTpQhEZJi4v9QpzB2WkAiUJcUXoHw7LZ",
  "key13": "5hT5cUwuMWTGiJ6HDyeiVi9Du5mZi67b3LvxUv69vzqXWU5oCB97LhYyRKAoButUoPM8cD64443WPqCk5yUEnP6A",
  "key14": "2X4VUUa6e887gfQDFRVFfNnrybxDQ6cZqUpkkUzbpHXNgZ99MCznW6ySG4cxim9hb4SVL9tYdfsxrCZ1DvQiUJQg",
  "key15": "CbFBaxJaqc5wiKKaKdviccGdm3Z7Bpj1aUmkFd63EzkdUcq8TbeFQ9ZK43j3pXqJHjMZdhy7NwQjYfjnrt2FyiZ",
  "key16": "5w6C2HFaCJ2pQsiAma4uVNugoGreVCUSx5x9LEqGGH3XtRanpENhCMkh25mcYmpcAG8EtMpG2e7zBx8D6kwjLU59",
  "key17": "3QVvQNJBEczL1GxjQ3EmmYtGRDPmES9Ez3LoSxyZk6Jk8MRnzrdhZny1prhPjbzGP65u3HFui42FHNte2NTbw4pw",
  "key18": "35qGFH7XWgPJa8XVcJ18YJY6BEmrPPPwJEbf2TCKjqYuRXz1DPYeQATnGtnQBFKExpxo2uJTGSyFTC9EEgomne4H",
  "key19": "2i4GvYmCiGVzQaMZhdajUsDXTZr6x3jcEDySgujWCP1Phyz5KUiVC6WVnpoQGD691rRpemej5ersEvCQ89rgMGhc",
  "key20": "4ZgP8vnLiQdBkfi1Lezfvd86tHzjftihB5aFz2TLfF7ahd3WizJdZEqXoTbqEBFwtTb49qtB4FP2T792jeJ1pSum",
  "key21": "3iYDBqirYgsnrDtgkhW8hm68AHZ8mx9bGVzkePRuTM1FrBUka8MngxCZbpPGe5Xh9599dXWXBydeGsNatCCYH51d",
  "key22": "3SWjiz7xHw6oWAWuM3sso5HJ4odDU9EKnpya1kC9ebMSExBAkGEJJKKYNvv9b57pGSPPKANqHwWs4gEG8KMQ6mDz",
  "key23": "oFfEwwodxazCn23rXCTLRVdodN5zPr3PkHz4kTTaWrvWNUG1DxZ7izZzD4PXFDrGJjxLRwQWGds3y8NUBKAwne3",
  "key24": "3Zs5qNqNMmLpCYkYxYduRt4TMAHLyFrvGqh2HtUXceFtN4dFRWTUNZ2g7aJWkaChRn3ARPC3Hu9r2KmhFtWF4U9o",
  "key25": "29ip7cxaCUuoPwVWhpsJX7JfBiZ2ZjLdSYZT4iyxkNT5XN38NQBrc61kvwZ4dkCerfijSwofLtxyigKR4zenebM6",
  "key26": "4eGnWAH4Vm2KeFTJdHPp1Nw21seUzJ99kPLHzMi61D9qNpugDMQnsYbJ9Aaqd7iX3PupP81SQmMMUArcHJLNoQNo",
  "key27": "mRivG9BfkDWd6m1aizWfPUjWDR22WTCTevXrgZvVoLMP41ymYGPvvu4fQR5mwVo3pwGLVG3THrP8yN5xC83uqVo",
  "key28": "3kgXhyiNCqcSMmMSdbdRYuXShLVZpeUjVyDaixaF6cBH4YwFh7tY24HsXAjvL1GWYWT9MJ1oD9z7h9Byo2gNhhXT",
  "key29": "3jHKsVfJgFmZ4rqFictSwkXk97GWxDrqXZpKYuUrSULJNk9xtgdpg3Akei7NYmTbm5dLE5JSBWa4inGyQhoonV2L",
  "key30": "3eMWpo7JnQWRvRHYwqQEY9XNCXTjSSh2qw7VWRk7WszYEe8rw7DRSpGrnbBULAVL9YanCd9tG74VSW2FKdrf6sED",
  "key31": "n633gjgbxD946wnQycn7kD7qCjLRcZa2dQFTsMbHEaarWT59QsR4GR2TnoNRPsHncvDc3YGtnSMhFgSHeJVx1rJ",
  "key32": "3ka67NK1vAfAZfDf9hb6Jvn81Dc5xked488Ssb6VZ9grdTX5LEJ6H5xwRJVcMjgJRwTedqsmgWdaQkQz9bpuDxGi",
  "key33": "2HdbNFEsi9rfQemeHizDyCMUxyKyQ2uJCssQK8TWj6KJRVS14GVjboeBkVKyShjLc1pvWAijxmbZGFyuUzDWJWxA",
  "key34": "5yRAd2LoR27xjCTPsfetJpgPkkejSUZazhZXS1r1xViLLCjk1ZosNScVWXNqxG71rjbNjPLYDKZNVCHg4bVynA5f",
  "key35": "aaJ2cHs9D1cXDRCiCfVJu8xaqYFDG7gerwynYznoA52WuEanq4BT72WbydTfniJWb5jmegabgYR2xwetm36VBSu",
  "key36": "3cgaUKyiuXrvonmxnjLEiD7P2mqcwjv2JbTzL6sqc7M7xLG3WfZG5jyAVSzoociGx7TWpMsXoCYZbtuCtitz78ha"
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
