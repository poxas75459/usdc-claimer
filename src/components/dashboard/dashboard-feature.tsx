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
    "2aWnJwD1JHFPH4r2TLtooDTbuCMuAFuTgxLrPZkWhQoL2FWeWywsefPFgXLa92smonCF7Z3xUSpVnyXNn7gRZBb3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zBa89p9axvUS8LupaDWDXtTnBr6CqLJjCMBvBztD7Qb6RSW2onJnqmCwpzfZNPV11tgzoANKgpxdvMaaorhEGkS",
  "key1": "2D2ErRDq2VCWQh2Xk4RQZWvWRCC1dHSuXZttYZJUR7LJJLNRM4SGNNLq9P6LJsZToVTZx9973Em76J1KhmQn8iML",
  "key2": "2T9yHKGqai4YhejukYCNztVz5GyPhJEr4aEvtfUMaFTMzmN8RspoYxJZFpWDtFCsWxd1tjDbAiDPbBHVA3wJMCcq",
  "key3": "3wk2iXhUoVFd7BeiSetVKFRX8T8XyDtKfp9mDELFDz2d2FYeVJeGBwAekxjCoP6YwmMpbUrjAZU9R87EKvEarY4",
  "key4": "4zPUcCXvz8HkNZEqTYjmgLC11qg8TJTduqj6Yo3TjJz4nzpzzFWaS9NCjLZsaeGakRmmB7e8GzYXCEeVjwrSrjp4",
  "key5": "2FWgmDLaF3hdzaTRmFGqAP6XBfTv5CFtPokdBekYeaVd1AXZwy5M5Su1rKoVGFotAckQbRXbAHNqFJk1smvLiZqA",
  "key6": "3Ai1uicraQg1gDY9oikQW3gCKUuXCF9VEdzvtafMxnkrai6Dc4cM8iBUbu9sTRdjwzbe72ZTWPoHkmwfgjb3LkiV",
  "key7": "45pbJG8ZHVp5BBGinQHzZTQryq787UKmCNd56V1U6YEtuR3cHgFZaEDuVnsJwA9cira3o4j88T3byzDgmeUNhSq4",
  "key8": "447jowg6qcPLHH8VkxAzVo1vQbPq8tPTKKCEo2EussQZDipEZChB6gPzBZwTyrcBj8yZSSDBcrShTgWZWktng4nq",
  "key9": "4SrUe5n7PuAFhuni8RsvAd6myRiKUFTeivsXoa5pSLaYxVxLXAgji2GxXVHcQtwi1R94JUYNNgcMVy5Wgakm27BF",
  "key10": "2vFWpdHHVFdmh1y5AG4dCtUzcRUX5KqoPxQz5gpf9STCcGDBibKP22kLuqxc4Aq9o2xLBEFP3ZxESWF17UqMmniH",
  "key11": "63F5gwhMmjJZ4t9d8HFWxzn62ZVsAHpzUvW5t2kbZ6GBC4Mg7AnPR7biJuYmZmECbr2wyYJmRXzYkYBQofaAetLD",
  "key12": "4nbpv6br4TKjtXyXT3V6MmkTKGk4khQ8LM5MB8wMa85SqyrrJ6tVw44nKqFsVLRmHfAZJZcrgkWAX9ZuuP4tXnDk",
  "key13": "5L3dSiPvRsi3zaqmbSuRQiKbQ3Hjn4FGM1wY5xg2KVftckGxdH4fCx9qzFZSfD5i8zimscijGM5ZrYDKQd5ECLuZ",
  "key14": "5rvRKt1CfAhc5GgYMdPv9s7XJnXj987bc6Khw4ay8ycsJ6rCEYr3wzYVBXtNwsSVSufDxHSMNTAu496sCC26o3Cb",
  "key15": "5fvAw7zf7Po1YLriKkp9FZVAAJSQMTFi74HJtjGUyKFBmm9RxFjkDcbtXWvi9b9bj1oZU2Ea9LbXTz3qa6hnjuB8",
  "key16": "2hcN1hwWdsRDcyJk9AYaGWvdMvxE1hz5WJ5ATZ8dfBckUAVqHNX7sE7R36WcXgUuFwv9aP6t1GQT5sXpJXMsC6jN",
  "key17": "3FSGhpAvgMVjbXTDxf7q5EPdGUJxTPbr9Yqx78kdNvXJ6VaHVsFqtikFSmo1dSu3CiFH76kG2HVjSwYes6tZCu7F",
  "key18": "2i3HL4ioDaqHNQGkNh8DJhKbw1C7QoajcRAuPrBe2oUpK4e1ecyJ7LyKQJzh8KbnrniQb97fbjU6Rnxgsme59gCR",
  "key19": "TkszTAKQcZg6jE9h1VbvhihMeeMtvmkEeXVbVo91vJyxekNca4CMpkV36ViA1bhoaZuhTnBFTKCNtt1sLpy92eq",
  "key20": "2ZBq6cMmvXe4RRnxDqQ3t7MtT5fc6My5jcqjZhvZsTPYU4YCo7ooh4Kw3McAY9XNKcWb2o7BJkBpHYvJSMLJW5AB",
  "key21": "3Fd3VyUbUsaJEHYfYoiYbFifM3VSkLxSbypD6DNLanYAGi6ABbXr86zVW3GhGJk2p3PJY1xYxVTMCnsaF3Q1vrxr",
  "key22": "UcksqHe8DDby116VYxvFa4M3suRRdDfJVE7o16m93MaaVxj5T9haCybFkHAnxttCZUdCMTvM5aZD2t7sRMWrcar",
  "key23": "5icuGJhyYy5Rr1YmMG5vpBaCYB2wQF6QAKQvNRRSt33qNNFvqke685WCSm27XfrtTAYq6SHxGDEYudHvNzydq3xx",
  "key24": "5JRh9oVAsYQooT9aHaawND7JKwmzSjjMm74XMLRNLkpSgUS2uqJMXMafj8CCSYmRgtoN477RsUPGAVGCNxpDKJsx",
  "key25": "4Sc81RoZo6s2BNP4dYPHD4REniQ9MbWrQhDEV2RQ1ixsEcb9kMeX4yvvwTZG7A2ckfXhLVsikA6ms6VPwVYdWw3Z",
  "key26": "5kae2h664XBktDGzLD4Q85oG6pqcW7ZV1jogY527WmPomDSTZComUUrqrSefMx9cxQVmPqrJMj6UUTPkDL5ybxAK",
  "key27": "3Qh6LyjrpiWg1CKn9YSfBY39LGYVPMLpXfHYeDdZNH5s5rfAbkgsjdLSdxaNDg4iR3LMZw42rWprGVwGhzkjDecb",
  "key28": "jGjYYTnGpJRCo2vRLkPD9rHuateRaU1ZzDHJVF9c7NXqpVk7NrJzwtJeLC3pLysdMNqCrVjp5XDyTj6ZKFKfgue",
  "key29": "41ovwea66Qh9FqUq8FusVZxDJ2MiDVMZ29UB5okBeMcVtYXFJGbBGGH1CHcwTF1otNkk32tMJiDCNVzkssPpZoca",
  "key30": "6ucFqWpmSfixVdLCEkeynCGbR5dRZnvKXj71cbBNvf6fWrsaDqskGBt977rpcyjkRaByqnFaRMYcJqMA6xfM6fa",
  "key31": "5bcvKMDXHCsncbWk5oLFUnbzmSaoQeAkuNrx2opcfMAaoU6HmETLfBWh7VQ9mnK5CSuCWvyTA6bgUMnS55Pq8FGt",
  "key32": "3wDEWY4RzbWc3HWwTL4vTYb49fMG53PmZHpb9r7zBdEhHVx1epJXnrgHsK4JHjsqd2rFFAXJKcovTvmYoGbiXqVh"
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
