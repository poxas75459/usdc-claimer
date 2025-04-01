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
    "qtPfuiuDPMHmeexDbfcFZNekjptAxUBqghNxzALR5hZeEthEo9r8reNd11Q1n73xdao5ntEeRv9i7aqEAmL8rdj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HHxeNQcZPaHFQ4fRVLeGAdhLzQpuoK2Ex5GwPfLT7WAXeFrSB3ZpoNDmAhrmCiaM7pVHDkL5obkShJkE9iwNKjE",
  "key1": "odUWFGGqRmhDvkXpvxxrkeqC9SPC4EnM89iWoy9uNANm3Kr1QGb9GoFoPX2UvTz5pqiBqoj4ZA8wben4G6ZaHME",
  "key2": "5XpC8iiuS5ceY72fZLoVL4AMSfAc6KtuJaeKkqPz3qNTAxEtoH7wQR27aqgpoQhKtqypkyJJTh6AEUGQudJEJL2k",
  "key3": "5AgJckZvUAvLRBzHt3xqbQxnAXxC82Fz2FSbbmLbg1v9cuB71jW8mJTxWSyzzjTeXtkYBh6PpN586VvGS2Yj5zCg",
  "key4": "37m2w54y9wAw5tATvxSjydnTQQukS9cFZnBu6fNqyWLkS8WpEPfobF8z6FtKdM4nVPDryVzfZSq7E5hZ3FXfL4Rt",
  "key5": "2K3a1RqQFJTA7FQDC151NKkbyggvsJaixYJ9F1eiVLyD4NazxJ2CU2iTrBYmzP8vp5t3wj7Yk19onVVivHFDc5oK",
  "key6": "3yXXzwfuGy8PHJ2G5jrH6qBBWK2qvX5zQCe5oLYXxkMPN3Lq8BHiskHqz7qc5R79Y8DEZBKVjaF2ztwrhAJ9jtd9",
  "key7": "3vg8EZuNmv4rgxzMRQv1X2bhJ4d3XHA6btRJ2LkUmm6q6aeTof4cNiSzF7J1Lcu83nekUhpxLPoouSxTfxHGf5yL",
  "key8": "5x7unTeNb2x3YB4JNYCTBKWB6T3Yvmowpi4RHSPeVKGncMeYXX9JQF4XiKmpur3tCqgrCAfUVipAzcSTnzYnKNUX",
  "key9": "DRQae6uk7WAVmQSWRwMTXDXmrQcNvrjFkDeNPJ8FTHCPKfeLShtgpQxM7CEnQCfPaLLU1TrmL4ajwmfdXo9c6ba",
  "key10": "59drWehf5jTSMi88VcftMWLPf9Tcf7GFoxxt3CyXjB5f376GxEdoaye8Bv5cJUQTPboN4Qo2t5ZzTv1tPcz6SbYa",
  "key11": "k6atW58x8wdp8bhPw4nKusqrsanEorc1dsSRzCMSNQo9MEg9DgymU7x662aPo72h3QPeBjK1VVhkfkxN4ctwp8Q",
  "key12": "3bLBZf1415SXC3bDMxLvjtBue5f4SjnKneqDGaw9pdYM4KeG2uaco1bdhqdmEfVHjkeeH1VMPiYZBWdTdcLV66wy",
  "key13": "A9gnsdqdEnjPwXPoEKs4ELb8BJU85BCctZg8DfLKF6rJRkQvAVULkA77MfLCAMpHiVRo5xvrdVhpnsun3guL34k",
  "key14": "4eUYVPANeof7GoEeAaJJuGdH1wuC2NGRAz5xoragfKW7uD8r53m37wSMvQGg92k2YgiZAT2hybe85WMzjFJMPpbv",
  "key15": "R9qi4GEmVhLNHVZftntPmQj9a2g3jE4xVDpaXEAPmb3BHS2mzG3YjRCyYrSZKyKj7HRdb1EixeLrkB6gtM9rB2d",
  "key16": "FTr5P5qv18DHkiyyHvoARwfWVmf78V3EYKyLSoxfNeyd9tWE9zddcL4ZLSVCGgdeAVnucXthhPPgDMUo6SQaMWD",
  "key17": "5yKDJjRx7eXPXtUVmuvVZzW7K5pTnUqTGcY3oqDt1iC3VTjoRTZEwdXCjm91FJwhpZfJeepCzPgbX7HJLjk4KYuW",
  "key18": "3R8QEgjKdjFKaGcK6s1VwQhtvoEon5dQot4va8p6AQschGi86woAnsMLEQSLyHzqDkxPZH75qYc6hMAf9cwypiGk",
  "key19": "t8uU65xX8qXRMZaUMgJe7Ty4DVtMWFQvgL6hvvpr5v8S27GTAHYxdF2eZ341NMGeB2UmrpgsWSBWm8ZtMkoJLFj",
  "key20": "2x8jQe3neL6WzaUh3Z6bhRzTmJTFVuWefRvXdb2SZESfty3LgTEsuWwQ4w7WezNsj8fb4eVwH6Um8bhbZJuK3DHE",
  "key21": "21WZoYi7Lt6NZBHomem8urFVeeR3hxBopQZ1xPkFNifShcvRfRJ76rFP736EHevwjkKU2HJsmyrgCJ323xVT1KkB",
  "key22": "23qtorJT3ipiLMdtFsMKa3rfYzpUoo2L1pfj3J2WEVeooC8aEPtbLpn2ixguruyMcfrg4tWQp5sD6PHEGE9P2Pcd",
  "key23": "5uSqiEjp5T5bxJwBHu2sLzscBRDa4uBpJVnarSXD5hSturhY3EALUZCVPDejHyx23fpk2TcFxEuoD6At5EwYDLnm",
  "key24": "2x11PvX5b6vU5tuZufrkVNmeAE4D4EQ3q74mcVfnNVFXyRCi3o6yan3u7SNkd1ESivojuGiF4M8Sv2rsD2QE41nu",
  "key25": "5Kg3ttbLBQ8MbeE7ipbp5gx1oMwY3szQaevjFAA4khH6iaK3NpLcTNtcebQswUMJjvzsPUJ6PxkMcahu87mC7JnX",
  "key26": "3UNoZshhbDF4wKjASkYA58tbciZGmKHKV9NoTv6rPA1nEdZTtJezkDxpiLrK7SRfSCK59oY1F2dmXdWdyzTt7pkh",
  "key27": "35JpSbYDdgRCmuyuGEuVpNd5Yk9rD4fEoTi7KHzF15W6fbpoNDmf88cMHzJZDN9ioHyp6sGYyB9xAA3sSy8aMopy"
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
