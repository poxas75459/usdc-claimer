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
    "3fmM6PaYM3e2XoCDHiJqumEmDYhE2gYi5PmCMPUy7VL4QsXDVeWcV8kCKgFoaTaUTKuAHwt4CMJ9GppBKB3Ymwm1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yeB6Euo4eYQACDp9FWRNH6gk33N89noUHesm2L6UQ497pAB4PjXNuADYevkdRYMheP991KfDzKvUpPigcUFGxLc",
  "key1": "K68BJFmV3bTpgCdk5oEngTSVCnAFT3orjJzUAHhi6ncbaW8W8ekR3mrGdZWL4tTg1pLtnqRXkrenpQNniuLLJtZ",
  "key2": "2iHVu51Mb5VzaAG4xf8Ugqqabk99criJkmisxNtZk5t771expYNzb9WJ4UFVpS7d9K5nyWQDbbZAAg4CP1YMeehm",
  "key3": "45HWxxAz4cbH5YvNumt1JHwjQtyMX6KGo2LGvseFqZQNa5XByU4gzkypPMtt5PhFycARN8v411mbkrxbF3xGwNzy",
  "key4": "esSLu7Yhi8skHq1SzVqU9ZKro9fA3wKuBdGYTGrGnwKmwpqpkKvKSTFfYQd5m7cLiv29TscMA3tNv8TjG54ErdR",
  "key5": "27rVK2tADa9Bxc4TVxoLsR9c8zcDC1ndnQwzwhfSbsTTZ7VyBE4puyhqBeK4dZwPDXHkE8sHXYU4MgY5YKr74TUw",
  "key6": "87B3t9Mzn1mzxApTtahw44gmWHLkYchvPGR52DWLrfB3kroB3Ef8JGn8w41WtQt3Cnr5Ki4F4p2K4WJ45RqC7si",
  "key7": "AmYA9aP5BAHfh3RsDyTUanNFtk7Eb4uuSgg75qQg54Fbve85jxxhYNJX65PTe2aUrRcsirZ8uXQ47wJA7YLE4x6",
  "key8": "2Ur6QYZ7ocyVcTYyAbsQsWQJSnYxnhsf2XuG7gZSxZhDzUc4DeWjayobdZrsVFnLz2wVhEr9eGB3QNxkeyrn4XUT",
  "key9": "3ZCEtqtTYvP7iTmTWZUZxn2CPP19YENgANJnS2FmSpTvPBczVcsKZkFB6GctcsC1beK1nQbbyG6J3JdjB9AsxQFW",
  "key10": "3gV7LbsAM7Ch7daYzgvB3N6Gi8UCCX9B7ix2NNprznJnK2ctWhdYvbPKpCQeWbBTCw8dVJ1h6NUUxmusaCndqjda",
  "key11": "2w46qsDzRGMaaWAkW6RrdV43ZafVNkoGxgFxTmcF2TTieqrwdJcYpSPWptjiBZ9eRJYE7CEZEkHZLe3XnniwoFPv",
  "key12": "2NtG324Dz2Smqerb5JB5rsJay7Jz47Py1MgHosFzFiHW4kz4oQnPppsZGVQc9ht8tJhrQzMmaUBmXEhu7rLpvwpQ",
  "key13": "63JrpgAoRptrHeee2B1JjGreM8T2NMKGgfJCxVRgEqFEjv6LbtttqFepUmLQy3ffSBbsXMzke19b27iU2kbkRPyT",
  "key14": "5zthhcr71DgeUbtKJTh6C3JHNKsyMgUHBzTLES3Sr7zAgiGaSABrtCbfnkdgCmEgN6JT8PyA2LQfQQqFeg7MLy7e",
  "key15": "5ayDw4yUWEFy98jbs334H7q8kMaYe7VhH12c7EgRFrCM8j7JcWFdBdpcqa6QzXQkLxNrZwLPDsHTPvPdhZ1wT3eu",
  "key16": "44GbqDUyPTD3cWUiVrfkvAhsnRhPa4oDWaDfDfMjGr64dtSZuUdADewVddSrAa36ukJCUD952gBjQhU5At75iYrk",
  "key17": "2URmjU5mtcv4Wh46zhqsxppYwrYmhokT1m3rTaL6NyuGTY966sve6kAMXx8tVsVu5DzKSRnWGqPJdJyVEG9uHhGR",
  "key18": "3dnzsaYyt6bSsGKGdES9iNBGs3w8EaSG6wMm5GcRsKDoQWUvqv5ii7qn9U1hXTvyjBq8pnmBqnLCxfsrx2SzM4KC",
  "key19": "3kBjYF7BgHw2UDbcuwhyNVZjfeLcCEHES8MQHcvuE8KQoHSFh5Bd4F3V32RCd7SMkUmh2AjqYPW6LputXNwev6SA",
  "key20": "3D1rV8z9mepzcACYidmF19QARHFv9H8W8zAph7ASZhu9rng2F9moQhoXpqkQv2ZNaJGB9VykFkBqWpPDwyx5ECt2",
  "key21": "CJHUcrBZ6NyNYK8iZsur9pUaXjnhQvJoYcC4wLYbrBd55neiv2kckUAJaDj3MQk7Ki5VDxi4jUkK46RZKDnHoYU",
  "key22": "2AmdPQP7Nc42UsFs3N4WCDWjdGkfivQahoDz1TGz8U7Pv4Fyp8ZKZkBUeMBLSDAsYFxANgdkDUMJhvW9gdRZYKWv",
  "key23": "bVVLRRmeVwWr3Y4C3Ar9uHP4ntgANsUKmd2zcX3ZbFAWNPppYQB3tAjMrfN6j4MN1hG2gfPJqCRdZpEL9AcPhxj",
  "key24": "3ZQY8KNVgyY2Xfj9ZzTo8vLpu2G2p5SWbvKWdtHdfjXcrV5iuSVPnisnhTqYdpBxNDZJbvaHtAdJNtFyYzzxkVjT",
  "key25": "2DcP9aE2PBXMfa2ir6dbTKE8UenJezHT2ZH4Gg61AeqPeTnTN6Bybs6u5TMpf1ZUoFMx2GCdx5uTEDNYSuvYcqic",
  "key26": "3NLfhaTR6YHRRXH7c9uayEzDtEcxvK87wqA6yn5oWzEZ6aRXq678zpodAYF2fmYqbhHf7afjDMByoPnyTPrJxV8Q",
  "key27": "5Hqzui39Hrwm3hHcFvjSaKuCx16D4bmjaoSxTJsFE5xcMuR7ocTRyNdHbgMhwdPsMe2dfaPhcsuxb8udbf5NaTFF",
  "key28": "4Rn8i1V3M1J65hZZHFcBenUmTE7Pg2wcQqaYUXDARmhMCcdc3fSb1fXhC7trZyWBnZVuPqMDraroERUnfv8LQrPj",
  "key29": "2K32rhVmJnMTWpamV3jM21hPfLVxwH32ypzqZ7QUyWcJzNGB6czxzdpM4jnZfZhe49D7sNQZuYtgKQVC9XTuPRGK",
  "key30": "LQQZUXZGYcjuab3hup8hDrf1wjcAwYe4QRwCEuTEG1PfqLDjvvcUWEpMZ3cfNyWqFC8Hx5LexuySvSU6KxKXWa7",
  "key31": "4tYnDGZmVAYv4ajqcXvTm2ZL8dQQqBUzk4GUo1mJmWVmw3yWcdKVNw3J34eoWFSKpgj2mr5RmSG3Pnde8oWzxRjc",
  "key32": "2Du2EPoKWych3XbAsV3qHWTyB5JP96kQ5YzJ58sSgAxZMiKK5stoU5eNtAYXJPKyT3SANbbpKRfxVfDBbDHKFa1g",
  "key33": "2QzWyd2pqCmTwTccVWWdShavWhRNvKtbQqLg8WNVBDqejwCse49Lu3v6iapdNY2FS8xnfriQJ4ASyP5B616rNA5M"
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
