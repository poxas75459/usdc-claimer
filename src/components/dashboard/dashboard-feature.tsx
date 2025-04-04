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
    "4XTh2azfwpGN9ryusg1TxrKkjsZSvPrjTiHYK9Ni3Ywx4kYbEKLrru6aXJmjBUFM55HV68Kv2SqA7p6fU7c4ymZb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GMnwHMQDgXLWtnUXWLLbe9qXwmwfiUYZUMMwxvbKNSw7fyeLao5CoGhknk6kLr8kqQRjTSAfcEo6hRqYhbaoYFi",
  "key1": "3ZXvs4YtF1Syx5PDj3yZ3sk2BSG4gfG7hyf9FckCcrKZAEDjawCAbD1HwXNTnRqtuLaVsGzZz5yqjajnuNbtxa25",
  "key2": "4NduhZUznzQy8vJiKTKAULZ1tPCMALhaxFGfmexhbhoQvYKAdwNrXoFq6rx41sC6wSwtBvrEwq33rFwuPj4Nx1aM",
  "key3": "4YkPxDZ7rbQYHyW2qJJsSaSt6syzJkxgHYi95mE43M5rbZzscq6CrvYxr2PYUMSnQS2VE8MNY5A8h7qf9ZGQhkjq",
  "key4": "4RVRd1LCCnyk59d3duipsN7rA49HWcQzaSN1RYPwEyyeBmRqzN9EK8jbBFPYi823z5fEgWb9R6PWqQMMy7VuMEZa",
  "key5": "4HpkDSizMCZJeRQmAWomke9MzcLh8qaq1P3aFFza7qPu84TUizHkdGAXhgXVXZAVhDDhGNMET85F8nZdr6Zqs47y",
  "key6": "7PQ3XtqykwfQP5aTtRnjYZNCpJu5fhpySpf9z2YHSTiV4DJqFzXkeP3vv4cfsiR5gtBAHF5uYm5cJi8CXvXetCi",
  "key7": "5HgUPEpoKLvqSLozwrf5BYm2yWd7fx2L1htao4dEWFwv9EriaWfGyCLEycXJKaB5ZCE5zS6ZDP2ysDXbyNt2btpS",
  "key8": "4cudGPFgNE1SkL4XGAUrLcGhjfocpyKhvWak9DbR8abAw12pVMZrfnHLocnWHnAJSX2QoYF2Ms1LEAR47NFxMTcc",
  "key9": "21KbkvByQYajeyc1pi8kwGJWETKCbunmtR1YjKSPewfyV9Q8LraQC188XcwmhBF1Q1o2tKEwtTDFUtNs1LMie7x4",
  "key10": "ZZQY53TiEp6Wa7pnQ4wyUbJ65CQYj9hVsibvKJfpnSA5Xu7hxg3fwfeJpFzdeuQFKfQ6u4WfpGre8DEdv1Qj1vP",
  "key11": "3FmcAw2YDytEvwNjC6jK52oX1KfkbRiiQehUwBwp3R74mrJ6ycmbzFbEFWfQToU1rfPrSoGwfwHjtJL2bUZ52Rf5",
  "key12": "2hEaei5Za854WCXyaUf3GGgcW86Mki5W1iSjMFALtdZPVD4DwzxAKvPUnk2V897CSGcEZmpYzZvojBXhs5j5C7Hu",
  "key13": "3jwndPjvvzSdGNqthZnfHhA68ntkmXaWPsvketBGvvhWcPDR3jc4AjAT4xjR2bCnFBBtG3JdYcsurfbsKzPYjM1M",
  "key14": "4BBepzSVacuDeasSmLYAPemXLMhrzFwKxFC7mrF5R823Uw5Nj7FzicdiRnU4V8ipHk38KbQBLFgf4ureSE17fCwL",
  "key15": "3wbubtL6HsCC5ejzpkSdb9FHMYAw35VxVJ2naFoqbNpmbZPwz1jE7PH9ciwdSL2FudAmkkYvwh5NghZegdNLXeYF",
  "key16": "4Gr4CyePZ4YMBjBD6PTeSFU2WGaC6QJp5Ccgk82yWg1vkAH93Tdb9U6AooQjPFDe7X3cM7igHBzYyrqcAWrAmtRd",
  "key17": "4TrRtoVXcNss5dt8SzwbaqHn2h7m69aEpBjjRViYt4URhJNTsmWhZ6w1TEDSXWigij131KXPwdw5QzDCXW9Xkofw",
  "key18": "5ws5vC9bCi8xrU8GML1qw5CJBsVvL24Ss8r51uwWrfTGf7qd4tGVP9AEw4r4mR2U2FLjyn5MYTPUBFdQeXaMF4iE",
  "key19": "21wxeGLUDUf2PgE4wKiB3igfCjWHAj8FHBvSjk7JWeU6nvP9tFyFQwqUCn5h8vzXbFR6nP1U6N9jGHKkgaCMgrJE",
  "key20": "5mpzwp8oT9WgF6K6aRKy4Ueg1otGvFWdU1jFuza3XQmNktHijDZy6ZswjpQk2axsnpN46i8jZ3RLpLvBra36rWcG",
  "key21": "B3vp25iJ3xB1WjNLHJGXUnAFj6KEfRKbRLzy521zEPnZyDnNrsRA3whCZazigQhux2VmEJzXo5MAUxCzwSxCyV6",
  "key22": "3CtcdJ1aqNkjYanZR1Q9xau1oTqFsUS5eky7vSvpCxpZvhXtvG5fvAkbT2FEXK3K4bxSJcKjVnVYuDGg1pfHexrm",
  "key23": "66N2RAhi9YzCkBWgGtfahMWs5AKc9zZ1dNggNKP2p8RPWkEAGidhc4QgsKUMyUfbPFTvdjNcAeJYkVXQ7FBuSAWK",
  "key24": "2Y2SthmSfPyhVeoyAUvZW3v1picUdmQj5NTG9vnWMavTuidK9qg72jvUtmVNmLayRfaPtzwKqB6VSnrxXyq4H5hn",
  "key25": "3fv7w4aCTbj75ceyKDHYZaQFE4JPL85QFkCFLP1BLjpRs35GenLBLyvgPE1Xv91sDZ2txV9ymw9ZUW14wNCcqaft",
  "key26": "3xdeD1gzj2Gq2xuLmVbw6EWxhM1nSN7vtfEyC6qxgd9r9kaiZumJM6ukugvWxhvi7vCdQLfq96gHceP4JNqTgeDA",
  "key27": "5mLBu484M3x4zrA2RG5e6mypJNC9ebo2ycF6qKEMxqQDBGNxSEjWwcjJ8Rd6yshHLo5qsJ8zKqdopVpnJG7xrsMt",
  "key28": "4bGrvNqsUAUjPUgqcJzGKFETGd1DypdNzSCsf9XXVQv4nwizHqfp2omPvUXFq7WJhy9fSDKiQeq7xEMVUc7Vew6p",
  "key29": "xWbe2KPRyLp3SzCVQ7oZwQSy3jT8w8Q1r1NKoCL9dUWLUekoGbHYpJ7cQRA3vns5aUuQxRAFSUYGbGDxCNJV9Wf",
  "key30": "Wq7JaCtbsY6exHZPyvhLcMTaJqFnJExqcLRhVeCtUyKcmokM74MWxKFKCVqfT4sKiGukJrh6sr6KQJWfKkZyjAA",
  "key31": "2neGCYhCCQs3jhXpuPKVAJfDnUkFWfUSmGHtCuoiNdM8kd1h5e3MHCyTFExM8JtyXQxEwV1cEQWTxSJym4WLoxjc",
  "key32": "4a3y4hkKoWkARTbd3mWedLrq3vbNzJ4NFABjhzqHvk4d6LwCELgmNnuvs57wirbVbmLCjiWW2kLKhsqYqJQJu16h",
  "key33": "5X4LLyuZQZGiM4uhsy7bJ67Tro6Jxs9c3mv31vL6nn9PRBj4FamcirJJztnuxPCgJUfzpwrde6NdVzAKvaAYQoqD"
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
