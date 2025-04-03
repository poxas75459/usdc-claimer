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
    "3kipynPQe92aX2KWtjzmQ45Cmo57ngp9SpaVoLEtDjmZmXC3QTTfgR5V9KHxxwfUaoafcZmPNbEnyNFkiq6J3jR2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2e8SoC7zQPrvqjDMi5MTv4DbGiooV9g23zHRRKptnhvUGmkq628j9wFhepWFwFGzT9XVjD1m7Zk8NHhWEh1RuktT",
  "key1": "23fcLM8KRb7ufKW9kJb39d6zzYsXq1rUWYYSvKEa48nSn2iuWFXsTKeB8qPyyYmb3mZC7cRMMYSwhGEfBFdxrBxV",
  "key2": "2efiMCAoEoxtegJABFBaYgdwqM7aASejrTtb53BJ1KMzmr52n9rdu8N8tLFypTvcFDt8SXa2c2R9xaEWewzzzPjA",
  "key3": "4gHqn5KuKnoLAtkE7VUmAZLHXZLhAbCzjXa5vpY3rubJwfWsvjLqHPDMxBzeUg1FxvnBBdkYVhb8bGLWUfRxYBZQ",
  "key4": "NtWtAUbTZ7dWPQPCLiLQVoazPng4RmERV2a8jbzxxdrrUY8CrpGkphcYhgsehZ9hmXUMfwtmGgMHZvQEDyUSfiL",
  "key5": "2foorqZu1KY7oAe9oTeQSm4CyDu6gB1mfJCU743CB1RrsBen79YixriVGGSurU78p4dd5mGYHLoAaugF9dpFAhex",
  "key6": "3sT6DG3F4TgSDYyKroa47EE6w4RmfQbwL6uuYxGXjc3cV9jqutJfkFRSKjmjAwQYNFFJtq3fXacMdfPqKKzsMUJP",
  "key7": "2ryKYd83Mgg2vGet1JoYGW1J14RijhywoStTp5ycvKTbVSahotKpyv172DkZ7eHTQ8S2nqEzLgpEw5BGxUFYQuCq",
  "key8": "4WH5KHx49PnGmDxaYLKa2jAQjmxdAoBqCGAV8pnn4GETuGtuSwbCgaHNt4bLh2zsHRdUitdAFUBKButr4XZTadqh",
  "key9": "3RVQcG3Nh8Jo6vrdw7BCJCbFXFUS3Rt3cyM5NqNeUtuMENy921WUpUGXnZFTvaBhUcZCbsqvzeLMsZhNXfBnmi39",
  "key10": "54uXM1XSWsHsU8unzM4YUFjbYmmR4p9LQRFsG1YbnfcaKWTji7noQ6He9dmnCdXFh85qSXLMC2gfLUv6DaRnN6gu",
  "key11": "4irmsPVcnvAB24goqQLGMjvdiL5BHUsuYQZyd6RZAXPnXFJfjKxmf9EfBSxFattpUniteHNLfoXwWAe55sVxqTda",
  "key12": "KRNbr7LkknnKi249vVpwAKEGFLMvYsZPFqs8YsFtdikoLVS2jWiZcFHRUZ7UUaZiNoVqAnyu6VcryWDDY1AYAnK",
  "key13": "2jtXQDeNU6XbjsSXXTvxmeuHbEABcrwf6HsTwkZBiUQLL7iPv2L4bJ2KK7dwJkUtwAkfTtSEzcug26srSYVZc7ML",
  "key14": "25bbzx3hRkiubpbBcCwBn48tNNEbrfkiEs18nSg35j8fJb8PrnmwbHGahn9pMbbGmhkLCQE9NnUJhkgucx99uwLi",
  "key15": "5vaknhB7xUJR5qWnTgcAs6L1jAMsVfSFW3vxvkuMxhkENvtc3EonLZUGKPJENj4saohCjdDE9jKa4qVPatChLjdw",
  "key16": "3jYNwKZfmw5sCLzctaRfE6cbgx8Ve7puCroej9tD5SE2mxQN2FbAZ5gMHe8VCF714py5BJ81hwHtbi8YkQzZKAdA",
  "key17": "4MphHx9SMt2EwnLTG6qvNWGdA2QDJYLtTu8GGtp7HpeuV5h8TnauMpzJX1WxxRKGKkD6ANihsxucRpdcDmujYqqB",
  "key18": "2KdZppD5jiAH7fFGxH12nX8u2gr9V5xQGmxXmyWm264VWNHSuYe9V3PbWvqx2zdC8jwM3scaGwymaddZz7AaGtvJ",
  "key19": "2zofDe6udB3LHxMUw52DKvSAAvSEmycCV9qqtk112ChB8wHhpudUxK85aNKbYRLT71jZ3bHNuFkc6RVzzr1BRTNM",
  "key20": "4giqBSFhrfwtYoSbgJXsued6xFwjMV3yzRPuVW9ajGCazWxmtTFkbWEpRg6wAHotRdWFmAW9VLJMF6sg9z4AqmUN",
  "key21": "5Au7k9PWadwTwHPoXAUq1ZqRrfaMUTJ8N58jYDABnCB4voKo8S4ypUJVXhUNbGnKNSjDLvtUN44sP4W1fkeG1C4M",
  "key22": "27pdBRMATjG6R82MvF1v3hTaopwvUUPd3K9StwXgLGuNFLt82b19AjGgVzbk7Dj8dYrZc3UiQQCq2UFLqd412phi",
  "key23": "v59gTGZCk9TWgJLq4pEFHjf2DVL3iL2jXSjfoujDEgQfYCxP6GrmdEubPRsWagmVBkpubJ1Yy4FNZnSN7xwo1cF",
  "key24": "pVgms9ZZoAHx9QCX7QmLehL3E8sP6eRZ1NzaYU5jJtHGjrKQgy13Ey7Xxx7HWuZNRG7BHGAY1RBhwftvpbCdfiF",
  "key25": "2jbRw7HLcmWpnZdDbcD4LSG5saSqtbyVRKZbqC5ftpcB9iExCzwW1vQwKnSy1JGi7WysiPK4v84RLfFeHcNjByqx",
  "key26": "tzZQT7aDdpwvg1xHozS2zdeE7MigXfRRvP1hnxmCQYJAhb7mLib6Zzv4tnJ3qoS3MhfUH1BkXRByryCu63oyJxF",
  "key27": "4YKTwxqDpScMhLwuHx3REWFDjnuPd18hmmvBv3hguCcgN7ZV4wVuVYMsD1SuWyGMkHaCVd358Xviohusn3aNoMoP",
  "key28": "5oFyK2UfFd8v48XpBZT8T6wyAmzCvip5Dqajjb3CCyVbRG2CneoECtoQbtYpbs5DFz4wBxs3diESmiqeH1W9EiVX",
  "key29": "5JkNN14GQLpLDt2E5EV1ymiiZA9FUXNHJ2wE7NFp26JNQofQG1HPEZ6MSrY9Hr53V3xDCCAzjJfDzDAcbR4DPZDy",
  "key30": "4vndDrtZ8yFjSzq2epJMnfBmR2cngqoYA5EMhx5Tu5DJ2etCXVnLp38e1EF89JCBRAD5CqJ7orEAkRKtskxppWAu",
  "key31": "WC7DiuPzXZDyZsNC3Xvm7Bn8Vo4eKHGPhtbFhkUY6LDFM1XZa7QMqXMFa32YjAAgwaojjj1j7f3eJKBSme9Zow5",
  "key32": "58EUyigTeqTsNxJYyEueyE7sYYCGTvtrAhfcApkgwJZxsWq3VVFqrqsiavFkKcXPXb6yBkvJvcTZ9ix5xFC38K4X",
  "key33": "R9CgJJGcJeRt1ofpayygSkLft9mUjJJa1HrzJgy6Uy6EeN1LktFzFJqJaQSTUcCg16ZApgtJrbyH8UisXSPB9u7",
  "key34": "3nz7aZsVDterzFwhbJdXMGUJWsGCESmrQb6SAaMeGijRKRvqEd7tkV3QN2LDmc7s38fxjixDNmXosXjDuj3B11gJ",
  "key35": "2Jahe3fYCafxpoy6tpqgv45acB1vNtWJUu99aReWCxcRimSx82RZZPBwhsxbhjXhYgZC7EBhTEye3MuuDR12JxHy",
  "key36": "48iyFBdoShz1BdtAcYGwEMqZroop48sgFYjcZKaJWwsY8oPErAgHZRwcEjPtiQwjkYxhAjnipCpPev3ntKdzYkgP",
  "key37": "2uw7cNLmAU817otkjr5gP3D7TzQKJEi88Nq6mhiwcV18KtUGPe9tUm4KWRe1C71L1MkUB1FkyemPhKsp75vDKBtX",
  "key38": "5txc4LWFto2d31L9Xi9muLbsZhicApF24kL2mhX7dj9ZuW9tk2Bzob1pjaQiY2gzPPHaYxbZFbb42tMYQ2F6bgGh",
  "key39": "ZPayynmscp98iVRr4zEHxo7qJ1vQ1jJskfT9K9Z6QhpfFnGsNAWQPDxjrTgP65QtPyBbFYbjetHyo3wrfPwy2V5",
  "key40": "4GLEthr8WBmtpo6gwRBhKiWo6iaKCemPZE5ULzm2R8KUwnB7qZyNL8hB1GEJruBcs9MHp37z5duq1JFhdCEaN4rg",
  "key41": "roHKipDmRJPZcoP6zjFWdP9bQkpAwUJr3pU9yP9WuZoh1itopSUYwicBQjNDFhAPVsaBet7f2BSN1L1t9yveQRq",
  "key42": "5HttYQAcgXwsH2gF1Aog5HxTmKKCK3K15NjZLYnyshgHeuikq8zHh1QVLUVCxF1cC9DaJJfmF88H3jAxPRhzDNz6",
  "key43": "4fuSseP1vYxphQq4cAKyRxZN1PrK1Awm2PWe8xvqaVPDy9WaYwTfxmZ6PQoZj4shyFZitM9YXV8EE3drYWUi7J9a"
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
