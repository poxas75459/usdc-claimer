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
    "tDaeyivXmvNY6vW39akDxA1VbbhvibQJ6xMGnLwbMT4SCmpB1f9en98pBGs2J2aVQMRMYZisauGR5s5XPPFSkb1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wgskj1uPZ8nLPJv29TigfwYSni4QQ3wiioL4n2BDiEkriXS4Zm45uhCj7YALwP3URVmYiF7mKi4m8z2vd9kNGd2",
  "key1": "4V3gttynK4KAmGzEcH91YtbnPzGgiHBrpMFiJNQ3xCcXjP7S716sowQ8gyiDWv77Uw2VsvkMqwMZircLKxgBxx1h",
  "key2": "36MKZBQ79UgT9TryjsFUwdHQ2BQBieVKemzd1R9EwYb5481AwiAb3D8qu3WDtQQhoYFi6jxbWwmagtQ379GE1HKm",
  "key3": "2i29D67wWUt7caLPYeSVMiHDgUH3gSmbVm3uXkZEYKMfMqbWaTdkN8c56Bn2kgEdDhABPz53XtjTtKH7eZKQcq88",
  "key4": "5rNbs54XueTjkkJxujyjSzkSq45CjDNWci46HjSEYgLMhPzaDLiXfsuavL8MEy3ghsG2Fgb6e9nvcdUJZqqmLxdf",
  "key5": "2UhvAphahaPcz3CS8jZNMVcR6pS76wLhkwjqFpHBzpkBh1t7c1sahzPJzfbNoBRcBuA21jjUdYzKYjiz36XgxkAF",
  "key6": "5enbPuHvNVbdFB2HTckbzU1SZBFxCKANkUS9XaoTrsZu89xYJ8kbGoSG7JtAMvKcQZ2LnyQWVhLa43DqnKWGvjxj",
  "key7": "sFdETVneL4GfGNLaqmpVNmxDBDAPLdAuafcSJBQKik1kW3dMWm3VeoTdbU9uV9Avw6SfVbruWQi1L2Mw8WsDPmw",
  "key8": "3tAqeRjTu1qkEu7xwPyvb5iHnyjH9QTgaV6E8jM4kY9taJa9CAL9g4Xr5EALZsVsEPvJEyECoRaLGBcMqhgDC5wn",
  "key9": "2HyMFeV9Gzd5FKfc34J8GUiUA4hZBYNgNUqjzTL8sWshevKmAVNFmKrCAFKLbJkVtgiUgrpwK54pzvHwtJfvV5Mz",
  "key10": "2owSxB9C9hYmspCfNJXjxL4iowEnxan5QwijGdS7nTCWdxoBAbKyiHSRasvgLAt9FZRxQMvpLn1ar2QjQiS1XXzT",
  "key11": "5VLomFnGVWKJjvvwKvVtUwFdcETbHNJSKoTumGpEYgrwh5k5JSWrfPP2cB4P4Cci9UYSv7iKXJsfrpSq7e2Drs2u",
  "key12": "3KaJJpUcvzuzTro8biUavKpZicdXLuT7JdnJPg7FT8n5fUVL4AtSYiZgK6diDUE4nyeVw33mnyi82Z59TGvkfWwj",
  "key13": "5CFaqLGX6XmmAKGYz68J4wQwXigBRYMToj1cMitPnGgXASTuBbEnxHUiwR2Yjgtsn7nxXfH9LCSZ4ewXo3aG7d2t",
  "key14": "2fovq2dankyqhoggKo9HPmCxU2UGcNXWZBSH5THaKx35nBFJW2sZpKSMSaJ56CppP1TFQaJuwkhdotN4X8LkvMVi",
  "key15": "49ejHxKfF2L4ezJi57GTf6uYL5X8RBG2Q8Uo3fFp3yzzKTs6S7ZTupMkKPbNu2TMSTJ8i8aN5AhGGjYHxLQVfFx2",
  "key16": "4Fyj8qBAUtw8Gccb18K3j3MiYsdddjEkQn8uy2iSh6zk58x69R9neXGFw63ugRLehSeRbki6p9VzHMFHNCxCbM6i",
  "key17": "3LqTNPf7ASxF4WmAsnyau8PxyKd9RzQZQ32fEmzLYo8viZ8ayNg1oxYER43KVGoycLEommh9LB6WeWdmBVGeY7DJ",
  "key18": "3ZgiVJrB8HLR968SUoSxPuNq7zoE4r8HaRMaF6DYEZd1DkXARs7EUPLG88abTmH9fBQKbX3qYEPe2dVBW77XuYK1",
  "key19": "5sN6267y4u9rDwMMM3SttWEE8zq5j7pTfSC3L7UQtvQwfz1ia7oszKAgpK2FwMNjTkwWUyBoojZNXhjYhYxhV8h4",
  "key20": "32hEU75WMvPa9RjWng2oFXB7T8eZzAL5BJhF4uDvEFuBJ3ThUq8GY8XbvDd3WXWkKiv42qLiHhi2JgsDB5YMXBEk",
  "key21": "3yaNA9jD9v6UH7ssb93RjGxEMJ6PcNP1EazgnwP3zBT2mYxTZeGWVrZnYFMjCTam4XcphcunLRgcHv6UDBbjPL27",
  "key22": "4hWT3n1rBVVn885goas5FgN3JozKhNw5zTY8bT4EACyLhUV9KMfwuxCctNLe5vCueHw8r3gBeFL426XrC1SKSWPp",
  "key23": "4iNoNPjC61BHHN6kJrFMp6SJNdfJv9F672SxhBgjXd3aM4H82B3x9t5Rkpn4LNH6JdW6wzzgtzKkumGf8kv2ezxM",
  "key24": "p1muQCKpDgomcHWtzT6m3RCpUWTrb4LkHGp1Wh61Kp8DGpBzAhEShgBEER3SmDohcP7pqoYtnEBPC9T7H3xSR51",
  "key25": "2bbgM8fLrZsNsu7D3eRGqazfx3iYTY7PnD741XbBjxU5dSwMiUcyW6ytokQKo74XUQK2QkSU3pUw3rcXZB4z5pZ6",
  "key26": "MDXuRNtEwCW7Rqp26ePAjNGSyx8nziW9MTR9HU1MifFTn8xeDP6i3knRQsTrL29EqfJGP6n8NJMF4Uq5VNEasPt",
  "key27": "5KS8Po8yLQBJhDWDVrD74ip4nSy98jAEf7TiPiP67GuQvR7soZJTbTMMNiRJipis1ZpUZFHLgNP8zjNPGjUoMrun",
  "key28": "5FhyxtHeKfkMW2AeRDwX55p6L7Hgr9LS91W2FW8F88VJQU5GVQc2Cp82GCjiUisSWSViECCkS6awMEVeGiXdCbFq",
  "key29": "4mGXET6fca3AzHaTC5p4WTwNDSTjXF6bi2g5qV18esNkcKfrztEznAjf3sopPuKL1MLEo4oxNSaZ2wxdNczifRQk",
  "key30": "2xncDYT6TUeD7CzTm2W65V5AXaztcqLrd8KyukCyKDPXFYVLsVx8cKD3ZNQoo7VLJ4kgKVojvk5NoHDvuscVfKim",
  "key31": "4c1uPrLa67x93BgeGWywiMA92MMDEjULQ2hAWWqUSgH7CXG9uZmKESXqyJmQfErNcDSQMqaBrSVZuFfjBY31Mf6B",
  "key32": "4fqJSUrCY2oqWhmmeSos6g876FxNm3rLLG5fybiKGLuwNRywhKpBcp1DUoFPV4FrnqZNFKzqAJGL5jpXuWPQTDbJ",
  "key33": "3MERPEHhCrWSeBhgmPzRQCr2an9B7Z7iZd1R4FLQvhXoU8cEMQmLPhVN7Jgxvh12efF1E41JH1DEGiLAfQdyvw1j"
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
