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
    "31DbtKcahMKuYkqkwFGPTXGhuz9KUv4CrmyHRUoWuE8xUPzgN1wNsy2LuPSe1FpkMGrJHFn1pyXwEcUHf3WiFo4w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hdV32bkqDofs1CYHDKMfQQnPd7aLcV1369xH8uT9ZdUytMwKYhAgdzHWbrGtrMihYgF8KFFKgG3QhTTYZ7QGERv",
  "key1": "5FcsmbAEwUAnRc3rNvFMKYLTBFGK6AZnWkF1jNPYCDUCpq82AfvuA5Q2p13xhEYtQ5jrS77GMoqSJUKBCnag6qRx",
  "key2": "y2B9PneeQ8Uo9W3RBcDhSHBGQiCY7fkHbqAQo29Jc7FnWJTTLW2ssa3Q2BEW44Zt9n3Gbho33kRsmVHLxwXNsoc",
  "key3": "3p9KxJFKQdmD8f181UhND3uuBQef2d1mp56SPuPNz4RkTiPtuk6RVxhagSCCazPbXTo1mdojcChY63fZr3qE1niC",
  "key4": "2uA5wTFBA6pj2hb3nkByNoGFHgbiSLyrtiNAmMSTuUd5jdWDSrtErBcDeHAr8uXy6AGYacDjxoMMNyUc4afhX4LL",
  "key5": "4PETdeFbcSAbw4JjmhfxZCMDiJTy115bM7zHXDMPXrB2aKHmLRLWEGuWrTwBPQDd4EQhdmwkXKpojHQvt3eAS96U",
  "key6": "2XTPB8M66UoaZoLcQ18ZE4Eqc2fDrybeLRYpp3VUs32vbjeXWaqecW5WWhMgsB9tq7AXge12nEcAbp65fc9AY6kd",
  "key7": "aPu7Hcuisf74kimVf7s2t5cx9WD8A7pDKXHHrfce2ixXj3ujERV7XRTkQ6J8TJJQg2jKk8ZaxhGKMAdGe1VPKkN",
  "key8": "47JDQ37Hj24L4Jc5JKyQWoUGEjLoadcbiDffdgSHJKYyti3fpjkdmS8Zfa9KQBpX6KM5D6aNhREJuNTPdwokAWZs",
  "key9": "5FhA4xUbyTgxjMJ5cgLqrn8K1z64P6eQcryRCKFqCZhYTUSztFXgnUtagZgkMgtASsZ6H4NPsTgK1fkGsvA2rL4Z",
  "key10": "2m9SZuRPXmc4PUo9eacZg77GuboDDQhxqh64yk8udAAeYajPGkzcnrfWgf8wPHgPfsiWQYJPH9MHkT6c9HnhkDJ5",
  "key11": "5nhgqSzqrgxY9wJnCioHRrTZbegSUoTpNMrE5TyKeFQnT6B2vesmQtQXPtWYWz2ogYfBazz8XbuodYvRocMzXCHW",
  "key12": "4dpPUTZ5nHHunKqPhTFrth8aZdDR65aC725xRm1d5BLh8TjSdZuapjMtNq9jRC8esGUcqbNDfFZJuGgJmGj6VfEw",
  "key13": "2kW4Yp6CFhuAJELGMg6tdPcQGo6FiWvLngfbQpJZaBZQZ56643HMn6zXCumh7wfwB81N2Za3TqBZiWujfEhbdeMv",
  "key14": "2gon7YigdbucJmXJ4gNQW5GDqqsgrxVtzxVjKnnJ8eQCqsud3ugD3naYSvSdDtqtbLNSrF63UZhsLYSufmrKXeDm",
  "key15": "1CNqp41LLCvpnHDTw6jR6cPe826YWuoubDn5KSawZz7sZg7ZMo4GRnw9HY9TaArFBFRUC6hcc2cowsaFasgAiW4",
  "key16": "2QUDtZhkoHFDk8pznFGN8HU6qhTHMYrUnqn3JsdCi6DdxifURPStnZQ8dfKFmzUKzMBjWLfkwRaSoMhRSw3xC8vZ",
  "key17": "5vx3K28dPxh5y3oDdw3bfeayv2jpGRPtJGvgwdgy8pK26nR4krfGneBPDHGPiLw3XwGUyMX9yp5f7TCM58qLVaga",
  "key18": "kmXPWArMEvDB4sHjwg6Vbq2seNk2HVv6jzVWzKdPo4y5Won4S5GcCndjBfb6HnvFdhgR1pm5Kgq2x9jmfjZpANj",
  "key19": "5qhCShtURR8AJaLwYQB9kVCqgXJVgEUeUjnaQe3Xdd7yZAAdZX3HcVD3av1D4tcseb6eZWHvkmb1QoY6ab9MghZt",
  "key20": "4f2Hyk1nDecGA6xqNKg4PqjUk1VmD96i7D5FRtQSgWAHvqNcnU8mCskopQheXbXE95zcDZUg9PAxt3k2fTkawiCH",
  "key21": "656FB4FpCqNa81JnyQNk41FVj3AK4uzMNwiaARGZXXdYUqsigK19Q2whJ8Ykqfhp7NTBLSeXvHYG8QWFTnjHDeT4",
  "key22": "9RAmSPFSKjw5jbgca57Vwt31FChmrek4LY2PYbvyMyZNpnussiF9PcWxeYHsfxrzmhG4D33PgXNeh372njNgUCP",
  "key23": "3hUDUv77RTJsSxEqZqxxWRs46WTMokFwGrzXJ1jyXy5VcBd77M1dYgThANTcJzRRs31bA9LNuGE6VZrTZxfoXSev",
  "key24": "32LFvKJjzrV2Y4Td566MNDZrmLZAAjsnutQht7RB9W1DGqf8iTeGeM3CW1Pz1fuLw14Sq1rpEDXJTbgWZq8F6hx2",
  "key25": "3pembd5KcrxBz18wTPq46SZcTYJ1jAWYYoFFULbSXe7d1RXoJnwKdu7eYiRQJduNPYwt7Xjsa3Qnii6V4ySyWjPU",
  "key26": "5rmuRyb33Yunqq4WzPLhCq2bXybaR9GaSeXzNNoXL13jdn6LJMQBC9N72wwEZps2S36wJjpvfd81zVtLQHFNvUQi",
  "key27": "4UCJnfoAjucwQwEugpY6dUfrePQG5TcPuDWviF8je9PkUJF5gCx1c5RpxFAWr1PhDSNMwXNenVxFPndQCo3dcMeU",
  "key28": "4AqTJcXMPf2VWwaaf63KL8AGjENHJLkmWLRVyQbYVrGq4K9PFZdjkLzeaEA7cpaW5hFLKievXoUfoEMThBeGTCzv",
  "key29": "2WCK4akcVLDYShtxtq4gn19sHEt3fgUHVAVH2qVw6JuDwiC989cxiCHrm9JNHmqk9awmatPaRs3TDANqyp9d1vEA",
  "key30": "hestJGhJCeS8yaVTS6eEdErfyWn5ht2P6LR9XSD9n8aRJR6Se52ikjrML3bDd6MGoSWJFgr9r5X47AJyBj5VqZV",
  "key31": "4UPMUFe3RpXkL6fvw6ntXisM4LCh44iYywCNZc57wY8QGDqTYvA4XPEmp17ejfhsU2HxcCyaNmrZjoEKDLJ552jU",
  "key32": "2a7nT1PyWT375DBEyfS8Xive2EmrWbLG4oc6H2eLHc2tDxdqYB3Y44Ba7v8rEbaaCMar6cWhoe5FhwaEgZUEeE12",
  "key33": "A3qQFpcwAB31SxN7ym4g1qmCSCcrFi6ieohg6U2KeqTPqTB1VtmH2RAvga6ZyWQfo4SQyT19tEtj1UbHLvik5Y6",
  "key34": "5tnG7NCMvQ1he66L8FvC1tWpT5AXR9esFEkACVtrKFb8ZJYqbPo1hwSm93zKRsk3sDoDg9AGArVeC1zUspjySPyZ"
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
