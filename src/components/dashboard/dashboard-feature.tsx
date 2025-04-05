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
    "3Mruhnn8wVb1ngWezfuY8vRLCaaqCjVUcryPWy5S3Zf4pf9tqZ5QW2cGKNRcx5J3yguA1m7wXcRPMi1HHFqp4FAf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PF1SYkq27fhhi3cLz8W3xs2ntuD3oKnicDWs2kVJswiGHxMzqfhszxC8kUwMu9HYVr5ojuhEqPGbqhic1dazp3A",
  "key1": "5x1oxGsySWZsnYUgj68Hb9UvkVTjW3k8JK6ewmvPmMDsV9hXDsbeyVRH569E8QooyhejxSozd3F22e7CEbcJgwZ3",
  "key2": "4XVLxQNeFcDj88LaB5krjZUnGcXrXQpJp1DFuKRuNFMbs2oKVha7WmQ9vjLpgLWE2FNwLpfNDU4nDCv3PGTmtXKZ",
  "key3": "5ZNcji5Lztie21UXBhjHeyx9KMQCHJTM66YhkVzPkPrDtkb55pUtG5yVocNq5T33qXTEsLowYLuhskrXJJHxBqU",
  "key4": "4Hv7S3LfMJgpPgboiKpGGWqZFfyq4pAaJfwB6yVpeZBUEheLiXmd3qW3p78jknMwksEbLrqLFPfqNWgA1hGvXTaW",
  "key5": "5S6h5c1dkLkMNN1bgXc7EuhDMMW5b63VrY4ie6ic8CCUkb91bdaMHEmLupWsrvfTy7wgxsveTf6UUT4xJYrYpt5i",
  "key6": "58QSSo6gk7yMkGS8Ldk3WUxeaMr8skYJvkHhb6Qt1pjCoptr3bvLZvPip7tFSfPbUEAcMqpdUCNXSCXfcMPhbwbn",
  "key7": "4SSFCsrAi2qFgNfewWVvVdHhQJrzUsB4PWjet1J4sZBpGW7UXbCDLzy5SLNgBkPkSjZTBfZMDuHSpEfTUZykppML",
  "key8": "5EaA7waczjZLKQAyJJ2m6yF1JYJfVqYh3zGs5KTdb2zhBFcZo7gGmVJuPNatKn48QqMuh5q3tHgXHUjhC8wHwDWu",
  "key9": "ZTfpbrfGBpLD1Jmtt4tQQbrCJ1TU3NDcTvjnr3qpcdtBPzBhiuKPWnb4hsKmLntfLsWzMPNMpBqMTAUUF1u7NTM",
  "key10": "3tjpPXx3SoUnofbertGNLyKwoyYbcmkAhEWvxkgtDQLUpT7joC5gNUvahzoFiDM5fM3obGv489SEYQwbfRfhmgqG",
  "key11": "35XZZ9qSX2RsPrp98LYe6JqAsnoGB5uH6h8LExDwhRMiVpTUsTr2cXumpwjn7DECbeFzkUSyqNg95Sjsjafe6mi5",
  "key12": "2GcxpTadZFSi6sjRN1C1pEkMnmL8ziFLFuf2NASNmLFzSPhKvUovXKJhbkSzSRZEnCMzCvgM4yCcwgqJuJcd5b6w",
  "key13": "3eEMS8ho8K7oeg2YaBmJ48vgh55Dp5CRebDvvwqVFWKqHg6wdvayqxoHZGzVY9bSyerEzXx61oUizBL9dV7d5btF",
  "key14": "4jyceG6Xtf9Eq7jgdzTfjTeLZuujmb5w5TXJpviMFnBFRrTq31nEm1D44G2NWmNAip3dNKW5rUN8A7AD5HwVgtfF",
  "key15": "3Poh6FzRbrn2x5hRjfArJu9ktFXbor5Dznmg5Nw5936jSZzXHtkM5KdspW9X8AEPyTc5nGQ9ZVFqUnLx7xgszq5z",
  "key16": "5Lu3RRFXAZf9Lf2SCgfeG2GKvC1WcG289uH6xX7Qhj2pgpd4UnokYCncv5yHFj1Pr6ixiErfkFEA42tRPQSFtdhG",
  "key17": "26YMkjStD5oyG24hBnnQnrvUJStV4HFj3e8JNQ8JJBGxaRn1JAK4JCrSbR4dPajpMJqn4oZ4mpB5bTE6z7TWNV4m",
  "key18": "4YyWHEj6hZa65i4xEZmrossAVfgzKB7cHCQ3YU8he5qR1m2qVZUKCQPiJXJAhqVoy43uN9x8KTXSW5PYr3txpxuG",
  "key19": "35JjeQMUwsanivXc9duR8ugHJiD6ppjF2xG9fhiwNLyMb6VSXjoB6ZBhCiiVfSYUaHhZJ9aT54t1736ZF9hpPxHi",
  "key20": "2bnd4EDPX1WadQMHUzuCPp6XDNAt6mFFpyEhSQDkP9mqgP7pnBwyq42c4fJxwH3WErTqhYg7XGG1BrYqzzEz5yc",
  "key21": "4qfa1sPq2najCYUpinu1Ny9ZmR18g3nxSoFZiZUFHc7V8gPMDKyRPeTLWyRxLbgEkTv52bQhxTJrjeLgvYqe2zR3",
  "key22": "51LqcAkaUYptq5HkR6rc7r7qtrenSZXRBK9pea3XCa38Bgm8THtoYaR3TZcCxjTk3B7axngQxih4JzrY2P8DczAt",
  "key23": "4T7S2b68oJJhwjf3yWDV51qMyhAGBQTk1CDJA3FN2Pb4knfUzKEZECoXjqQQmAoFNPpRfdsa54noc9konNm2ViZT",
  "key24": "5MGAgpHDAeHiMdyLpmL7qTLN8TBM8EZWo87k2hv9gYu8N1KHHESAG7kLPYJDiFz3EUTNLvfqspdVchNV2kdewufg",
  "key25": "4wfZ9DaZ85B8X2u2g1jH8aozqsmjM8EsNn6E5d9erPi42raEpN6DM7qAXDTuM8ArJNm2hC9AcG3kdkjux2vAgHBu",
  "key26": "2ZScFWGSXSq4EwN4aUbdCTLQHmwnUCLcimyLNWb1vAbW19HjU5xmCHmf26fANdUGBmczBuoW2epaM8QQqD2bNDf1",
  "key27": "4LyNkbDwhFqV4f3aZ8zWCButzgJ4V2j5ozKfQpquKuwWtLbBwmeutnjSeyNDitNr6cx6jZzjWGGYWxieoSDJDuUP",
  "key28": "2nQ8soKNkzibk56UPr2hSVVmskHvKSwq1Bp7aWrqMLbiAQpGTtTszFYG4UkHGog7T81EzMgYrDKCyTmA9nmyDhTs",
  "key29": "5iiEeaw1V4Wa3eg8N9WXvQAGuKHz8iiXUtsrovhGKkj3gH7ZEUpjCycMRUsVb8QmsuorJt3su3Upx3EafGvYpRAe",
  "key30": "YRhP6BYLmE7nnk7TbZfHXKx38D5xestFtMqjxcfmeX8nP5r4wg9jJisxZ5YcYhZm4RBMCS5SprDUvvY1QXRsqjb",
  "key31": "2aXzNujL4BSBLc5sASCFDYMSy9FASg1MzbBKc33rA52j58NuZAwvyHBsWV6Tc9DZ59XPYo9UX9vmkpVs5n8wK1f1",
  "key32": "sAxQoAZgrGCYqLT5pu8G6UrzDPg3EjXtDgok1FeHBZQkSbDTubZQ1TrVCcJMu9LAPbuPMJjWGK4WvZoa8bEptdC",
  "key33": "3SzNRiL6g7CWVTpyPHF5qs9iVt3p29Chfe8fCUzmJii2Xp8MeXuQR8YNpgKuJJ9aascL1FJUUhEVMezci5ghKP4N"
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
