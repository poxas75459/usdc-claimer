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
    "4dZtGF5tJ4oGs39SDCLdzzFJbh9TM7n61Dc93b1QCtR5xHFryUHAUeZQfMXyd2R2QpbiBVqkudDASh6fGdkMQ3sf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3f3GziiVaevireRgnTR8stmXh4KxVi23vvNhJaLTA1VcUvtV6ZoohFCxJDaQY9p6oUx6W4VFroeXRXZgTdBFEXmj",
  "key1": "5ZoEdj9P9iVTpdf594SLjg2Sn2Q9XPCCyhfoTaJsSjbk84dmk3j6QEd9GGaG44WqQEx5BhCrCz21gEm8mxnsmEHf",
  "key2": "453qR8qB2FvjYpq73AXpqEN24fuycARu2uHjmpSdeCPnRHnmZfjg65tSTy6xWAjsXtrDcSS3VdEMfW1btNbRFuhR",
  "key3": "3sGR9ufSDsMEUmYFRStZdyemdknimBNK5zs6j9QhoKjjuf1Mt9XEeLYNMKziTer3ugzWXYmZGgvwJhwYj8NRXfd3",
  "key4": "5RYMbZu8koXxbz8RTZhfu2gQXg3R3WoA1cuYk2SpJV5UnEvxoBmne5shFZfLwYXJxKw1hewEkk42wvUoCWg6VfhP",
  "key5": "HbFENU3WgiCKeV1hRaMBKkgMry26QNvgRF5gCaH9bHWgGmMFXFfz4nFhLEmiyc4pFrQpQZUMYku1jrZAbpRqchp",
  "key6": "PJELvW7JMQ2jtUoEg1gJSKd5atToz43Sf7a27WSFbMNQrcugKsPMb9bbs5jQoC1VmYGRUZaRSWak78uS8MwT4b9",
  "key7": "4Sk5bMqR73uqrEYCKUGB2XXqoMwwKZ9A2t5jfPc5p2tqFGhYA2eFssAQHn7K75F6HKaimCjsRsmeEji9bXF9Fzbw",
  "key8": "2bDKK9hgvb2wSiu6dKGWddLHibpG7mtdBY73gRSvM6F9wn1NH843qMevTCwn8zvMTePPkqep5XtZWttE1NogXtcr",
  "key9": "4viBckHnd3uJm1GH28zEYySnGu6rQEv778kmC9iuuBQ8EPsk8bCdWjTrwUVaimBvWvJLZGZZ5BsCxoZsbrpW1Fe2",
  "key10": "3zMJQUuuDEpfSdV3Uw7rPzbbw6tJ2QqRP7KRweYWXpENj8creJZMLG78cvuq9XozLfCEcTpMBfTvtZ7aZNB8Kr7u",
  "key11": "5hxXFFgkDiCwT2z1L7LBH2wWUqqogYFNNEvr6xqSFdkJNkD7RPQGhFbgN3753YGHipNYdzaVmu9isgU7yDawjAfk",
  "key12": "gtZcBPKM1YgC2BkZCcqZtvzrn5fx1JLqP5sKvwsRSVL7h8rGh9HjwKQoxPYXVp6M567xUs89wFxF2hJRDMRkmxd",
  "key13": "4azgXyikVmAFBDCpTERDwa4RX7UjhJtcUjZVFEemGo3YQFsoXeL23gHFjwwg6JuyLqqB8CZ6LebFgXBztASRGFtq",
  "key14": "2kd3GA6P3Zk3fKpFEUVbCxDikYYkCjYTho4wGKnovdjX7hNjvjLSP6eaL1hYbNt12GHGmHnUbW6VweRcLvxCNX3M",
  "key15": "JEoabnvsJQRtJFeyBeDQC6HWPDnmvxQx4ekvsZ9CfG8BBhmTctbiSZ4JLL9KY6coqGHNr7mB7nWKgeyk3Wt5AXU",
  "key16": "vZx1rZtF3F5PCdPEMcPfESQgbg8bugAKf5yPNUeWXfNgevpiHmbozHJ1XYyRSoFzStbg6xRSPpRKzA7YpwpAW7T",
  "key17": "3zncUQDbFakecDqXetvaw8oFZAK2r6eEtJsmRdwDBx6VdT2b7SWAxVxjscukYfYd82ib32PF8mK3me9TTEoy5Dy3",
  "key18": "29nQcMdk4riv4ei46xg9mnHvq1gGDUySJckTXEz3CsbcUnpeEwXPhGsN8roeVzjfifgBrkFBSe8wTPQpvpxBrvGZ",
  "key19": "59R4yBkkSEaQWZQiFYEk13tuSggqRJxEqYCB67HCh6snSEquCKkzdLdbYpHZohLu7xUVBXSkCvcimr2iG1uJf8Bm",
  "key20": "4itLugAujNMTa5sqoUu7Vsp14i63wEQHJmf1GEudRAziZXUbLpMqWTDvdAGX2GQ4kK34qB96shdj4CoDBgQXcXmL",
  "key21": "2NfkNfvLAbaGXSZDTFMsKgze4wTzqyLzfyaQQsHUrDetesfq1HZ8r83JwCbMgQ6p7kNyrSumyVfaVEfwwXhrc19E",
  "key22": "38y5StQSiWTVND6ovvpUk1nLZFJ4EBUWvqmrYfLntUTeixwBfAyagViKbm2hBvzaQXZP34pjmMkvHCfa1XS1c8nQ",
  "key23": "3Hxo4zsWirGCaueaa9yorigyppcdCxWXRfr4sRkS1FwDvP9mB7TuzUuafBF14qXi1NHGgmUw5KrTLye9XrMrJk9V",
  "key24": "3awkQnQbo8pVfGCXVc3SEftZ2ge6ocBwK2RYhETgkhqMZdcSvbYvSxeLYGqvHCUQvqXnRkfndPxjxDgMTARfqtja",
  "key25": "2WFaRrsmMUrSxmpKyAoF7tsaVnjQBEeCyEwLPXLyvYY6rsErBkPTkh6916CTSHsbnBJYr5r4ycgGtgnntvjeExfZ",
  "key26": "BANYNRnK49KoL9QoFSGGRw8V9mGVYjvrqKSkcZjtyffFxwQLdSva3A61wtZEU8De9yqphygxcvaADy4bMTrqSWm",
  "key27": "3jeoirS8FkLUAxVBNK3wCeyKturxZ5bHvscbph4sv2cpbKkcwfHJSJmRTL6t9xdcF5eJ1oWBR9NabpQjzngwbWit",
  "key28": "3J21H7WrWMacne1jsfSRtpcfAghR68CxUUnLq41QdoKDicrecsmXZJ8HrPYFhiNT2JmS5c331Wkk9LhrxZ2E2sFo",
  "key29": "43rS1h53WCpxuK6pTPg33wvg9n5jXP4WfgwCg9R9c2sXjW9CbJQD8Swg9q2zdxdWiAq4rLGqNr4jfWL8n14MP19o",
  "key30": "5aR3RdLrLzxm6PhbjnDeo9sw7EHzdPCcBmxTf6sS5up6PfPdLkp6nwAC5ycTznRj5hQTFCm294NtPNx73YrgJPip",
  "key31": "3Ddmkvep18pVLw6ZpyDKFZYoGyh5VcBomjaqqvf2UNs8JtheVYePEoeRfTjdxBgCSHBy4vBPsesxA9as82z9fFqX",
  "key32": "qeA3goariHBQf1eodu9MZoYhWPnat5q2JtN8gwJHzC4pgcoBKeVNGiYHxAMEE4KwebBzgjVkXKVGqbPu52CKMqa",
  "key33": "f9R9BWMUrH9kgGp1c1p7nfMXNiKKG3T3i49SxRPtAQKdAhFKY9GXSY4AWwgCpK96kEvi6FukzrGD4NSyvBKDZM8",
  "key34": "4hcS2c7VB6SDNDYcGPxtq2eKwEm9Po9V9FtGpVy7KsbgenvgcE7MbpwD1TAv2R96xdKqJFRURaJ2jFn53ygxSv3f",
  "key35": "3Jj7URuUJUpS1K8QCSwmAqfri8q8cu88w2tXC8KdDAMsNARmeqZvULPg8ezaWStvXqYFFBZxBoQS5MSUJvJqbfFm",
  "key36": "3jgc1VgAJLW2M2pi1bDUJtJMGiyZHj4JYRTbWPbbNCK4SgmxVpva9q9BPAY9WULB6L8cJ3uXzjGe6x1brvrpWiDw",
  "key37": "242r6NHKFWDVAmTW9XTStWzRDKBFrk2kgzSreoPZQ9ozGuQuBKqARnpDDhueBHvrQAnnz4tsMW4Ajwmot7ctCU97",
  "key38": "2JyQTiTwMzDH14TCrSAA7U4mpk7YQU8L18nxhfFamC1E5UahnCgu38J1QEBVGwFUK3i11JZzyW4oYFK7FSP6SKvj",
  "key39": "eG1JBzbr3MT6gBzMdp4vffBsBXMNPbHPrqnTFTceCmkrJ8dcVg6LVmHo39NcFykTL5YDrpivVFd8HpQYeHvTDfp",
  "key40": "3oXPrGuhLA48mM98euhMfpvbVRMRzhkNmzWCiQ4jkpppv4cGccPzQZY7eM6mLDgPKE44qHM5k2MkYFy9GDM9sJUH",
  "key41": "3XKwG84jPwUFqXYF3Z3h5gRsz96qJEwXsX857m54f3s6QFegnFugEL2TBTFVCxhvi3EeTqKaYnaQfgDkaEhMaAVG",
  "key42": "2jS4qqHMfsX8pGsTQj5Gfd2nQkY3eYyExfw7UdKEEHj7d5f9CXq6WKSrHm1nuyYbedgC9EGy4HcZztGiXfoKdhUx",
  "key43": "kiJpDBxCLRtLqG8h4JNvYfwCBDCRrecHLyei8knAcJAg6FTG8jV71TB1iYcAwuoaoQ9sHsceboR3TKBjdL6cnnN",
  "key44": "4xxfRBNhCuYVLVA7kWMmAFW6iuizqZLAJJnEWf29WAXWc18awiGp64sVzLAE3BokSeDYBW1557uSP6uxU2PB4qb8",
  "key45": "2Funi7x4iWPTBxcPpuTuXExbTEJkG9C8HSy2XQxmofCBqQ2c5seoGKUiHdpayB5adB9KQKJ9c2tsc2VXBjYMhHEv"
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
