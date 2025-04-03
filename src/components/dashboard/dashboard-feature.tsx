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
    "5hnMdW64Vj418FWCHi3v36binZdVyiyqTAj9gJQAyyi48h9mWNq4okzCstXWNjThANysvqNFn3H6XBfXG2yfa5CD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AbLwbXiogS8AXUdoNTYtsGFd7kLHJDtmb9YHWjKkDCWNGNRozASRzESMSR4CrjbCNpuHA2u9HqFS6dcqTKKD9DF",
  "key1": "5WRNkvrimqEujBvPHxMtJjJdGfuiEjmRd8nKnH3qXr8UhEWqHqFmpVMpA7DgRAkt8Ymyf2MhtFMT6EszbdsjnkSW",
  "key2": "SnmKeNaQqyRKxHhvVjTQ8S77earWW8eZV7sMxg1ihQLYURzDBLKnrWjEYv4PF4G8PznxsirzjDCSxJrQ57oNCyY",
  "key3": "4nM3YyMqmTE3rkp9y6twwUoW1GvrpD2VtdbPEZXQEbS6ySuQYKD7VRLHmCte1fQX8AaGMXUpWBax6VjkFsAyfcUk",
  "key4": "iQyyCY8wts8QzTTUXz1aG3GqG8Bz2eNAy2oG3y4B1EecKR8ugmrzMWgpkAmxSYZVPi8MscSnvDRwt3FnwM3HcFQ",
  "key5": "53TeU9gJLNF1J6N9wrBkCtw454o6TYRZxeREZ5Hq5gEYJtWMn4Euj7CTMvfSyhUTzybCvqbTwMBGqoUQgs8YJ6ob",
  "key6": "of2z2wYBeca31UqgkHrQ1rtFT6Ni1gEAuUoVCVue3jJn5SXFaM2Kpt1bKLyZ9Nbkm2nq37ZjriVvQDnghxNDrde",
  "key7": "4DtZeKBqdpTwZ7etRWALQWR3f2HSZgMVaKJnghXkx9iW2eCWjGbVo28q97n4iJ7aE9GkJYAwzX88Dghacwgo7Mpq",
  "key8": "2U2zTSqkefUYszRKVpvofzbzHVCmV9tb5HXNQxqxBz6M1YPYCWSJdRgZFnsBNz7yCbTQTSsqR9cjTVbuWhzmBMHm",
  "key9": "4F73ZirXvSAM6oHkXB8yJWxw7dPnmhbj8oH2RBxYxREwKMh9kEGLSJ36Q4P6EdSMi9ELUSXT67kds7Tvc4XVX4Sh",
  "key10": "5iyhxpAtWNP2ZMxNXqn9A9SsweLcdvjK6jC7qacNY9xztk2sNQBsvZ4UvVzfvi7w3hsZfVTp41pLKPMWsBBa9KNt",
  "key11": "4LNvUJ5sZi2mpxLZjN34oQuHnrHvefkGuYRfoHyubtsL8t7BnEXNzn1yb9vomksA3TZFT9Ribg9whErP4iWGd9ma",
  "key12": "3NU3mhHggdsDpNZH1VzQm4FeEfmavJY9SeKPfF8QTArrPkS6RMaZNRYdtfsMDxbDHjsNexx1gjbPyT75ASMLqjmm",
  "key13": "4PpHBvjfqLRQne5R3FPQ8DZF5r8afStPYFvkDxSJEgQZhu33YXKugbTK6RyrfqbZJMNL8sgZRc9QsbhRqndYDHPX",
  "key14": "2M5W5uTeNpgfPCQFLcntggmrnrY1XeTcAxg8ciTYvyurMDs8Nq8uioavrzJASddPopznxZDR67YR8pcq3f3LL2Uk",
  "key15": "4VH3g9pCAHse9gq4ZqkGFEwazY1WJStW6e6YC8mMG1EQDtk4u3dREwRGgLxPhaBZU127VXUq7VHZ8GV3xXwWkHvT",
  "key16": "mwT9FkZFVV4aMWhbLRo6iiMWFjSbpSrLauVu8w6cTJYJxUxt1Jg1GqzAZm2Hb7r7Bh3iax39e8s7xD2yJeCQwqW",
  "key17": "2ySxk4QNWB2FPKUGzo7p5azbTaqpBdTDXppeRPQamKnX1e4noM5yVQkY8jCFa5Liq7u62c7c3o7bu1VnEzZSikyx",
  "key18": "4wjFZRrbc1rwnkzfzfRjcBEDMpj6ExRjbc7dSZCpia6VSDHAmRexiwwj9eU6wQDjm55UDVmvByHZXXWfcED7pvNy",
  "key19": "4fqWnLRgpanBqJqoHkyRoiuXb5QECbbrrP3pFXx4tou3jyJ6E3kRV2ux4g2rjdhfngSGpDDhSWajHJB4TW4uMDJH",
  "key20": "2F7Gna9rvkpw8hhDwn7AcSXfsB2JHkbHqJxCV9zZzRgG5qp2ZYAg5BnbzVRXjCAHzrGfaWaUobDXKksnPTwgAt1X",
  "key21": "49dBJxrihAxVm5h4b2HvPVG5A1gR7Ao8sFMPVcEcTwuiHaVihEvAj9T4sepCQzRh4oPFuQouuVVvVeKxuMg13ywd",
  "key22": "2vECQP45PGJHfFWV4JSNzvxtbtDJVGF8YnCXWJEzdNRNiQV1CkQfHn3s34MbQnHoK8CJX9EGKar73zSB87UEKPeb",
  "key23": "3ikrhrwh6SpwQN9Rky59ESpKkH6kQMLjg4hAsWbubwE3JHtQJ9mLvui8FsHkjut9B6T9ChJHSogoPd88UJ2DB6i6",
  "key24": "63NokEyh7HpVsDELHyAw2pd61aJYki4xjoW9CqoGgJWfD4SiQnTjNUuDV9XwhanEHWrStnm2Grktie33yqHr7DpS",
  "key25": "HzYzkwF4N4XY9BMk9dhdTWFBGje59t6TwtESdXpYdsccbZj2cMqrMzcbqrUh8wcoTExcbwZznEE7UqG4hqP4QqZ",
  "key26": "4pt4UvrZMcDG23mn2MqMdtZXFokKnW2urDgWbGtUrsgxminXmH1SfnCPTcn2rkfJcYk9gqJd5g1db7k7YLmnhjDP",
  "key27": "2APfh1QvG57vts2amt7Ce6HrcJarp4U4TziWjmtYz8adr9KAy2oMu351dcTJcrLk4TmuPSgteXnm2rQcvX6PiQHK",
  "key28": "4rrnBaPfEV1jzR5KzkWpkLdtJnK92iFnBUX3BaiReXxvK9V7z3NppAFKz3yJ6ufT1UveMmDC26SvRgVVJX26cLNZ",
  "key29": "3v7FryuEFAoKbJCurVZjoYcyKXSmSQJBBW72uK6YkNwq5ZVkGYgzoEp6RhHmF7WRXGWqegNKGn7ao2LmZwQcq6FS",
  "key30": "2Lzqepk5pJu5G9hCKJ5o5Qa11u7tPC91dxB55appJuaNgvNuKxzBwRHstmLpLGETGvhKDyzCTqAHzSXhwaMivPaa",
  "key31": "BkZF9sBaHT2s1bFFeaMywKG7dTYhJ2jvERhficTEjjD24VtDRLQe9YLNGWTnCqkgpR2EFD1cyRBi28cKfqpHFG8",
  "key32": "4krxgSgwTp1WRETozFTT3GEJrVNagzcB73BHmhheRRQBzvexZhLJ6HGexqzw1Sg5VaeXoSYR74RhnPnXEN6TGByL",
  "key33": "2ToyjR2UN3vMG2yWBq4nqasDfTj3Tp4A8znfoBh3fkUMzK5MUDUBbs3Na6eYSgJTHW9jtLkKpLGk9uHTWfwEQmsc",
  "key34": "swBWB2jD2uSj14ViJK9UeAtfbzcTd72aiHntzLXuFntQc7P91nBjys3bSjZEz4ZWpAGNTJptMoTp3ZTLtMeMxLX",
  "key35": "LYHJLCRnLmeumhezQK7n5EruMKCdANsDgVThigu1R8xg4RQN6GcXs61xzbNj2w3Wut4yYpuCZqQQtxWBfkakk3S",
  "key36": "4H2sBorgfRS3gKaU1WX8485HDfMWmdjy9ZxjZBknuJ49HkE2RSGLX3NX6v5UkArxZNbSsMJjr1GcFv8MaaFnenFy",
  "key37": "66Gq6xkecb2cqYKbnPivqKzPikAb3hkrhhJLLAnR6doZycg4oQbe2nen3doYMV3WbEZqxdxWeBX6VdRos6hxpTMz",
  "key38": "5eJwDH5GwLpBNmnm1fQn3CLBJe1ykwoGwaEKagVnqKUBm9E57xfyfSezWPgL92o4WZqcH7AywMhWLGgiqRwZfy53",
  "key39": "pLABdbwHrcJbvv3zQzc6LZHyC1AGTdNm7NcNPjFu3PXWrvr5A6NsXqCfRiuxDyoKLugi1vcAnqxSFvqEv8A4ytU",
  "key40": "hMyXFxCpsHhdpv8o5dRveScA8G83sz9WjxUbkkbSxdeYr3PF7oy5PhQXadmiLF1mjpsmfGaGDwvmdtEmZnpxXr1",
  "key41": "2wNgLSkRxejbhn923hYxcFjsf8XRUJChq6TvKzuFuvqZCWsBw76Ntx1H2e969La5u788kjt2g39shhf5N689Q9DA",
  "key42": "X5bVm1VQtWWHCDErXQP3J9DQYnrkmASfdDpgijdYpRRXnuAoNEfH49BP1thKVAKCYhTKrhaLBV2GcPYsJFGQYoy",
  "key43": "cG6mJYYHtbLKombVuYhZCatczP4gaicUQz5mWJJQNHnEqsBBqTH8rFjzgyjYVYEhsRDEuDmxkQ2kDEBNxEJC8p7",
  "key44": "2sDk4wSUcnxEvKrn1dsogkY44qyqt3pbfv15ZbtswW3QKUd8KN43EZJ8iPej6UvfrHWuiAeUbv8yTEBiZAc6vBaA",
  "key45": "29nAj8yRhRe9v7eP8C6J2tYUnQh1wWTQFbJBRnCKSwhRYR5Ns3XQDz9rLzaT3pimebBxzSZ24YJxJX4Nf9Abf784"
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
