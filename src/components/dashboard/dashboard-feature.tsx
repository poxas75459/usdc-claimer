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
    "5DrMFKwsfe5QMJUNQ7PQwwZkcS7sYztRVR4e2dLQJVhsH5Sx5hMH2dgMecpGgFnMMngBZRSPtEkgoemmuyFGoM95"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RUzNSmHCbWzSNuB91mbyEWax6SG5bMqF3dfUKZDEMUqsKNKHbPT5FJbQe8igyCSTcSkwAqhHvMoyTZDy2AqWSky",
  "key1": "VEacwSNMJV3rTmmNTitapS3seKuDRFDW4azQmuNnTmU4ZR3Pu9ySvX39zNneEsW8S44sU7mrCKDqRsgukuJV51K",
  "key2": "3FDFjpYUbrC4iVojUX8M8qNcTcC3Vr2s7fDdTPjZQHu4Ys6qiWqp17oVvyir7YWaBiFE1SsEJ1QNswXGGruq3ZF8",
  "key3": "3rfCo38zyn1cC5bwe1tBgW3yyEQqzGv87b2QYCqeMae4bFVBuEZ51YDfgCCVp2fpiJZ2SFm49PgkfKQAeuvaooJi",
  "key4": "4R44gststgrq3Sdz9vEbSxThGqwSZWnWBjxsr6VNH8Xjj7ax4i4ZkMrr6BSfneoTo7eUiYawoNpGjBZJHeNhiAMW",
  "key5": "CcdrPJfC6rhuMn97ZcoXEFCApyyD3ejgdeUBC6E3ocnCTL7WiEJsTepQfHA7xGFTCJqrnxU9pYFjxVin1mMxHve",
  "key6": "26e84jQbqut96RZPbAAF1WFfokZLfNntXQXQphvVNcSRM2UPQf5eJYebzWizvm56gvRFyLq9GnuNDMCpwJWGe2Ek",
  "key7": "3XPxyUaYqu4XR42xChKrJ7n94Np5SeHS7oaKiNHNoNasY64ptrh4Zi4kPegu7oud1iuKtwnDU1VAs3vJdRsVbHHN",
  "key8": "BvLvobwWRGZnCA81hAYAtmHB9o3s2uCXQuHhbb3TaT2fUZMfo5ajCYRwYq55CQUr23fZCJ3F5oBcajcWzBiFCT9",
  "key9": "33csiXPER95b9cAuPGQfx5oepCihTcq7H12i7nrfS2AjkG1vYvYpFLeWTaFmhHmZn6witP9ouMdgyp9HBijbygKh",
  "key10": "5CZtzEZGizkoKRePhB4tRCxAhQdiucGAnypAPa6ADDhkrjjwkuJURw1Q3hce7wEBxZUV5CDxd2BtmDDQYWyYwoK3",
  "key11": "4qZbJGNQpvQoZ5sNXH326wHYka6eMoExc79gCSnd6h6uzPYsJNU5NJrHDiYHDhTV3Sim5CvX3YkS33g5H2bdUJpk",
  "key12": "txCcjMs5xZadGHVBsnrKH4pEBHzhfbtH8JRp3L6Z8VPB3rACo9yPfUH3paEAhFNKSNrx5zzJsJU1JL6D2Qbizo4",
  "key13": "55VQntPW8GmnQmnW68EJwnRDNNwyJFweFq1Eu1EdmvhbTtxW6oxRDyXX1rxU2VVeYBEeuAaB1jfaPAM1uw1GRrFS",
  "key14": "FDXGqdNd3o8fbw8kuQsM54FdCKKEK9FeLTrw6G1pLWBsyG1Jb4fkeNhKE8kupqJSBhw2tq8LUN7dzTbPWNk6Kcf",
  "key15": "5Nt529uYqJWPjnCRHzEJNy1weTi6qDeaWnWVrgFcQGGtjmM84zpBXS4X8ykhwvvFh8anz2mS6a54fpz2PuDqbWvz",
  "key16": "2pPK74CBMtmFvBnXEk9ezvtZJxejnqXvMzMBCJgvZQJ2q1RkG4ctqtdYvduit9XDYoL6irFFN2fA9nNvbREJ2Vcp",
  "key17": "64epKQLhZ9f9SH4BHCsmkZM1KhH3HQYiYGZryXGoVZtYJQi6YHkYwAKEvdGvg72XvPgdd3pLKkdxgYzruQTvwk1Q",
  "key18": "57cxeBb56Bc9oDabRC4tzvdKKXtuu1iQX2yUA3xhzsQ99KLAvVA4yLAK9D6BKzauqrPicCNCVU9Dgar34oocHRSc",
  "key19": "2hL15wkbgRxeoFeUyGPzE1ny58etXsS4bC1iGc3BiosWeUE1zYdS61BDKyCtu4ghjUA98tebgC29qgPXYrmZJJc5",
  "key20": "ivKtsDaymZC2yhkztjVA6LtxW6k7L6mNXPjw8wGxRLsybtHHpSZKDCcXWF7ZbudihwnNXQSe5L3DyYyqYEGWUL9",
  "key21": "TjCFVfjMRVa9Va1raEtmDJ8Y9R9W1unefSZWGWogHNPrN53zRJnvLJ7jQCWEiMsQytHsrxhqhUcd36ypYynmqQF",
  "key22": "55XQqQ127hrUj2EgyrZyB2gARuhopENwUWtz4GkmQv7ND3VcuEA9YUBqisri6Mnh4BiwRHhtRuMxn158XKT1w4hH",
  "key23": "4TXHZsi4n1aQfrxMn6WzKVKUgmctkcTdZjfyQi7R1ysjKDy7LjD1HksW6MD4JS3NRp8Tp36YJsscnsV311vBvzED",
  "key24": "2Ci8XRwnG44ZZDUTzuF7g7ZK9MWrH5fpEULc9ezCut3jJsnHbZPqPBeUYoUVHKfydVATzMfa1W4wFRS96rNBVSS3"
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
