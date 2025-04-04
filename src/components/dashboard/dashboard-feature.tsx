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
    "55YKF9WDEwuCU9APRuKXVJDJjTatNxxWsTsDctBMAhFuz78du1deD62kJHM5TdwoCQpu3YBXRQHrfrsDFdewvZwi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29va964DhYrA5J7iJek4ft96bBbNbQ8ggeoRt3hh4AeY1YXArEdMbCf2D9FdxQkUCF6LuydLBGcaxSp2mZcmCu3H",
  "key1": "8zywMiTd5kFPwjbhs571nqyHJygBvmBqqftaZroxMpQGyERTPc7bs6NUJSuPvxufAdsPF8aESwA5xjpH5aQ1ACu",
  "key2": "JjYkmbLzUr5QMKQG4oUjNeAYcagF8TbW2M1GPtU4UdD7HGBZGsyc1Zy87P3Dd545fJpycNC3ZLziXj5G6sE5YgQ",
  "key3": "s7i5h5X5PQWq5LbqUyMttfUq57ugzS8MCKLgzQfCqDZjd9kMzPxwWvAs7HaDrxdA1GVjv96Rv2tehuYDWK5EGSJ",
  "key4": "PLjhWsArgnGrvu3HNTUakP2RhyVWVLEwhM93KJsDSpu2X4nMFZcs5yMo3kot7eTCPZ43iNuSYx3sNYAj6m8jzdk",
  "key5": "2NJbdXM8nBY6mdR9E68VeARB7o5p5sadhTYXfFKQevujm5EcYQmNtg1EF4oSr76dHg2KLgxn9xt4tf3Q9r85ri4y",
  "key6": "4kmdWWABn3RXaHQpcgKoyf7SgPivoiYmpxk16kVd2ShjgsTaCEMZRbv9iPmZzXxkB272PEd42Kc47ivLCKCEs15D",
  "key7": "34kDY8ygvWaUy32Q2BckRC23f6zpuGKqVJC7FpshaugfN4ytEmFwLM8nCiyPWSwSiyFtVYjXWNtHRW8JFPNhTcMk",
  "key8": "2ZDrdnos5Cia7Xc2TgrkGoaFxRziRApm3QdvyjdkHRdvkPkbWLZYxmQi73RMNHuee2FyMivGZoErDqPPRC4gkgS6",
  "key9": "5aq7rjF1hiVFrRsh5Pq6qic4Gw984qrGc6rXmj8GBPnqDoMs3inwi6efLw2XDAzf6mTDyZbYont251gv8hBk584F",
  "key10": "4j5ZUny6pvimXAsaCjPCcFkmWBBec6RsgWu8SVTyoWjM2wMGHt7WP494NDKwdp4jd8iwX5XriPxGy8SAiTuggfGK",
  "key11": "5pW1iucNPzKXtDAvQZyR9qbzH5wBdjcyzNHocoso3V95ujpxJ8KhPEa2u9SHphVTJCA2unN2SafXTxoYwFV1Szeg",
  "key12": "26FwRaAGWJuarnyKgVh4rPbCoPWvuHPAAif8pYF37x188Hm5cD4znVDGdP15caDZPo3ow7BXzf7fmgqNYZxmeg7x",
  "key13": "JevLV8eydifoKWtZRFVzcR7YstNSmnvTrbcohZzfpYc9EHvAG29UyFnMDMMG7ZqAXDo1YC4QuBzCzD3d8RLHKBV",
  "key14": "ckwiyLL9WCwUBBKTsVqquz3Wd4pqV3yGaQjqZCUHfbpbdqRKVrY9FamEqhyGYSwd33Y9nktAdtg6cwKYq3X4Urp",
  "key15": "4xKYj19ZCy7GLZ4PY82MDTwV4V8ZKXBoPkfoTronWpg9G7TNozsowonc2zYu9cxjK8Hho3Zwwj66pKkxeqpA9fFz",
  "key16": "3L2tPWc9ZcsMEbyTBCsRnyZCwybobDiF2AtbZ4KrpFRYGn8CK43ZKaqmf1NndHRFRGZmiaXnXY1AQ8oXZYsCUNB3",
  "key17": "4Vryixk1dYC9rvr5h4C6TqaWRZaJ7rw27i9c5SKqPqEHzS5nR2TpHmJomqjDt4KHNqVwitrzT77FqcgbPA6aHjRD",
  "key18": "DKE4dp6yrCZpNYZd5WLsM8pN5m5rRcMnJaT6mJiwY5UHNpJQkfyKuRPxbfmXANpP3oKTNBw6vzEA3nGJLWgSj9Q",
  "key19": "3Aq7rN6XwbLhrUVNnQgoZMemnAqhgCXpY42QetZi2q63os6WY9HBup6wosxQB6KVsvUYgP8eMULkq3fJfA2Mqauq",
  "key20": "Z6UZVyP3nvbXpaQyDHhth41BtTYY5KDWQ4gnf45CC1EUkLiXeB32ba7oW8kSiBfXa9eojWRnRjdE9MhVzVouwhA",
  "key21": "5H2CMocxZRtAEqHenN3cT92EYpn8c19NaDng8nJpwKNjB5xSnyGA56n1rMyjj5ELUq1Tboms1zwhn4DHhK1NNYkf",
  "key22": "VnDycGa7QU1msQL4s93cGZt7oGoJo7U83b1cMbRNojMEy6onxmEVuomRRRxLhaVUHPACo4erE8U8Em2Kvmw8p2J",
  "key23": "kjhuHedjF666m88VyUjb4bm1mX9yy8qrjHtG8cxDEgi6xKzWraRXCu6E7TQHgWUjuXp2VHAyb3Eoda2eoWNhvk2",
  "key24": "2zDb6Eifa9CoAgHGLFdaY9V2Ny2eqMddxzsyadpXsiD4gwtMGFR4DLBZfs19FGisLUwbFW3RCHp7HicVLQDQSCHa",
  "key25": "47of1QqKRRo4HqUiHdeUbtcK34rknn3GUF5A79EEUoJhfCovZ4qnxVC4ksJxy4tDEPJuyavKDchSoYrJmsdktRsX",
  "key26": "4Yke4j9RZ6vpkwkhid2nS3HxU82HUjkrKXDrVTHyAZDwrrvSkZpvmYcDJUrDB9LDyjQjmveMEE7FNsn69zkjCrsT",
  "key27": "2eudvrTGyHZA51AmUoM9iYRAYG2DDXPCGMhAGDmrMhvMRz2px2bpLudTjsLDn9aEW1BV95bhtsZSTVqvVmE53mC9",
  "key28": "5bToyeA4BSAGY4nzz73ouoeRopEyEFwCpUG4o4W9i9NEa1TAVQKc59tSbVJ4kQ7Ps33mvroqvTUHRUeYzxeaWbCP",
  "key29": "2v2mGDECyZqhUwZoSdzmhwFGtFbUDtZkF2ycNLvMJDSG2DNBCmDtsGNxvLremJ6X9Tf1osnQUm6kVGG6Ds1ouCVe"
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
