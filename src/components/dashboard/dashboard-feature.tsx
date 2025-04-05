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
    "5iL79ccg11HWZ2oeLDD7Knqz8jozMHMjkStW7NfUMNFLtFXnkR4yecU3MhR3zW3iHUmcjnEtRCBsz6NxPjF2ZWjG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41NCwdtNNRGtvTYreWE5kjjnXk7F9hoibfWhq3ZrC7HGvMypa6bYQy7YQc8R3myTJA2M5HZsLdM5XpmQ1xTL9Qhg",
  "key1": "216KvDEgp2DGuhsjCKYG6mYEYjiGKRU8pxjuJYn4nBxGgBam4EC19uxp9CG53jnrmbqDjVusA1YK2pj5QxFEA8jy",
  "key2": "AU7sTGjqvd5peDYWuthvsL1KzVuAR6KULSdVLPYbPbQCoELmg5g64USHaQBrWnqW1PTKZRt3L2aymiPUbspsNXe",
  "key3": "2SAZjAKhqihs8NMdVFZ19EgnuQvX3DrHriFxMfsidzuN38kDVGh3yG8WjbqNHSx5CFLJKHMARt6u2k3CV57JNdLc",
  "key4": "38DcCBA9jDv6xSpagAwAuSJx38Jqtetii2zmmAUVongKJKcVmZ8tf1mhzffi7CpTntG51V16qvFEHGRuxREeD6Kx",
  "key5": "5VtPSPZkMgWaHBpPLNn7kAij2T6ZXUDkSARMeLSFLSqLYsdpBvBF5M36rd1mVP5bvtgR7JFzBcr1BpoQh3bF945a",
  "key6": "5fev5SVmDtrcy3h9RitKkJiR9XWL3EnFCcM1UH6fKYSzGzJq9QhDgfrjQDuzgm7dLBS48J6quqQ9baReHBBR1aJt",
  "key7": "2oAFxP6nKkJSBnuFR3ZZaw8iVKrJyabnq13CN5N6BREvYaL64TSwJHW4WLmYRYG3J2csqbVwr4YPaEVzrdeGLwG7",
  "key8": "4xQp2PvjVqgyJkbgmcNMXih6tc79hNdq84i1z1JMYQUnCgqJJhYjgp2EMKx6qnfFmCz9BHT2XotUyjATTuGSFz8h",
  "key9": "54RzGWeBd8Y6injEKttqEk9G4d7P2prRA2oGyrbVGK5PiHCvk65hxQ6iDu4vAZ8y9uUEWAdEATBH9FQsRXnphidq",
  "key10": "2sgyUAW7MUkdgNnxvJgpNSLPYiqWuqVsagaWxEFDr3hASAZWnfKASC6WeYDYctiRzLRFYzKdMV1RzYV46Gfos4H9",
  "key11": "CpGdZyzG2zMhBSDAABHSybZSAWcXLYwmAesSeBQf31wQG5UYwRm66mhPA3Y7gDvTX28T3JaFySzF4aCRRb8Z4m5",
  "key12": "4pxYZ5kpQdSLoKsHefwTh4VauBVb9Lwv7jHfs18jxXRjzEp4HQjTHyjGJkiDm3pHm7pNisxKWckYkGQEmxgZjsfJ",
  "key13": "2VAKuhzo4MQ2yoAZB8qzzUpzQ6A7GsguRBTPs2SfPHWAonNYUdGeDCA6LYxjTAEdB38f86PiMvxscF1UfzrEfsZR",
  "key14": "4koSsSSrSmtsRmQPAGUgGyBLpuBiX42d7RRvJuucLoqf73tEw4rVi4mKuLrs2pJKqyctC57bwMWsuA6iMYWURCQK",
  "key15": "26DBFbApm7pJQ2uhv1xH6u78K3pS5BCi79h1b576KgnsJRjeost5D2ShRvoAh3Fvyzx2r3sT1zWgJBzo4ZqZu6NX",
  "key16": "48sz9ozEa97P9Hmk1uFfGyHa4NVYLmTT4oNnUrWaNWB62wh3baSHEj2JmbidM44s84ccVUpJ8wTYLdb974BrAxzq",
  "key17": "3PBDpVPgYMezWVaatfrtUjm24kdjsTRRaf39dw9TQ59URhaTZHaXNTzbcrapYvb5CAUr2GjgLiPxj3K9tvMNWfSC",
  "key18": "42cUVkjd2NSqgV7M6eug9noJac4spQJSSdDTXNBi1Env5VixuEDYN3cT78YRZrV1c8Uhhh3WphJmwFaXSA6VLQ7L",
  "key19": "5qahh83JwkFMpjEMpVbSsaaT8qso5FdRRrfzMUucXUPC52QT3E3WcDRYyhp4aF3hbv9CaXur4oXpPPL4fV2cmi8G",
  "key20": "5RANL5ZKutdcq6kRuKaj3ceQDUXYm81fiZy95nk3rvAvrdSeN2XaKYfuhmmWdfKxNB5yQRJXeJAqYaxkAh4CVCjS",
  "key21": "43Bcx9hZoJkKL7U8RCANAZyWfQyBHwY4tpsuG1r3jJfHiwgfEMDNvbxfk3pbhT3afvgkvkvedE5qeoFWUfdumxzh",
  "key22": "5D7ECkPrDpyZ1T5X4izKSRCRjvmARiJmYKYmJ8hzuE4kX6mfe6sULhRvKVU2VBT1iT3xsYDF6ZJGDZyhR8Fso7QY",
  "key23": "3aSQvhMDv3mSoWMVXawQcLtrwCVuCD5CnJkCqEHDERSPpXew3mQ4rJShoViY2T1VXaR9CSWFqPbvBq9pFvgzBFZ1",
  "key24": "2oLDHyWC7EsRaG95Soxp3WxhRedt1THYzMbgTKf8H61Zq5drxx7EFQ4QCvZV3XyCGi7KH9gyDPsy6sBVykfJg52y",
  "key25": "M2WdHC3gURF6c25NATjAFiREu8vcCX6Q5qwhSM8ijMMW3UHx3Sfg8JcYFvswpu3Jn1oZae7Prz3Df3Dw4kye5g6",
  "key26": "2A2XWfh3Ji6XKioq7m1SiK1RjrEw3FvaFfz2MbCr94PG3MLn6Hpjt977XcDbzXWBXGAery74fPHy5QwTBySc8FM2",
  "key27": "55YJkNYS4iZiavANCc18Yhv5ubyFETQcMjm6ppP5WtY1291gWk2TuYxiw7uZytYw9PYF3ty8oRoQ4TfrVdNqQmAd",
  "key28": "2nvcfJLe6qpziVv7EziZAeLrcgbd2H7F94DPsmbYJFnUEUXspEk4yxXX3g15N9oQeHdWjwtin965yoK6gmBZ6LMt",
  "key29": "WCAr755iLU33dAzajH3YJjyvrpAQpg8cVXV3yexiYneYYbwB5dLvw7duKPhqUkZn1C38mHS6y2e29mFbZ6hfEhR",
  "key30": "3CRPz9sv4H7sBxdysihvMRugt9rPscFmqfCFAe6nt8w98vwNSihaAvuFW9rcTLFzX4hb3gN2nzXvXfY2XWHUodWD",
  "key31": "3uCpYV4RASdtyGGYcKzX5ojNxo41cdvGXvcGqcTvvAmR98JwCsEPdQhmQKQ4DyFdEGtKANpNK1QQPvhnsFJTPVwq",
  "key32": "24QvqUw6qYQLsgRW3tniaegzJB3LXxxicjhkZr8bMsFou7R8SWSfiX11X5BMRh1RsGeHKzsqs3q9fMtiBPtWXdYM",
  "key33": "A1t9geEoSQArGHkTmfUXGgjvsRUj6ZgbwUDRiuSFyVCpEr5UCQem3NQfYWxk8V34TQmrXAX13po8Y3YmpevucGd",
  "key34": "3o4rHwJwfuM1dcd9rdzdzsuPF7hta4nMthxzUKDt2LbogmN9JAewVaDBBbBjx6tn41ETND9hnZ7K4aiiSB8RiTTP"
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
