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
    "TFiKa3E5yYQhTLGQ1UvQb47mtFVLerFUQG6Tv9TczQ1DznGMn7ZuTuUZegSqKHZoqFLicDCjMN8bizEcKR1BXdy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zCXDL6DE52jpTmh9RanQWcoHrnTPfD2beUgks7zVfYC7AVq9QNcSYY3MckP9D1m4xwBWYkUQ8Hs68ppf17tDCD1",
  "key1": "fGqZaMAgUtNY8EdSZy78kKAt2QMtDDenT3oUPyP38o5re1XBCoVQboEEK1DEG1e4U2mUe5HCi6mHjJztmbemLrv",
  "key2": "4C1GP7M157c5RauYcBJuZzn6hnvyFaxuWZGXx4pf2jvG8RFDQJtovsETP4fDL48grnhPSbmuGSiNgu7EgV58oa8P",
  "key3": "4rrnAHHQEKU8LW6JA2vUzuXHssU7iFnK3ggVeNV3F2ni61osKv8dnkH7wXbjtyvEFrxWpKwD1nzAYGRLSC29um5",
  "key4": "4y53SYtgpMqjcr3zmQac9Ew17NzuyeHkHLfPdNB6cUw7Xmhcvjo9kZFiJcfmNKYpNVo5FFJGnvXKNuTUCXpQznvh",
  "key5": "5xJuuru85idh6KzEqnrfEgvFvDGBBDkqaUyN3L8zPstexruR6KjuAGFR3SpWfqoghLmA4Z63Gi8mqLWinnUSTvBJ",
  "key6": "2StMKvmP2FiKL3T1giWRfxBTCoVMJgCxPpwyydFuDhG9gd6CLZ4XGqYcnuJBopcLPwky9n5ZCkhpY2ZPyZ9Ut4gJ",
  "key7": "2MifpieReCeNmQieyrSXbW8NdnccWxdL5kZbQRm8FTf1u6oRBRUwWYuTxqDBbyqrYyTWdMqwwdYAZQdjVqn1493J",
  "key8": "5eWt2ZczQw35wtQhyvkD4b5pUohYPGuLzym98KSsCgupxECU8WrszAoAe6WD1WjqrnvffLCEDmACBHD7cqcAx3KC",
  "key9": "3eiFrXVGrXyi6bXvhYcx4XArV45gEbkpXKc9zugKRQH2v5mHzQrTttHewmbohaRvZytvHs5uRZEtsN55bnHHxVZX",
  "key10": "3e6M2CJByEXEjexfkh5TdxFUXar2VZJY38RVduTgpjQrLhZHem3oCnWjTB7sJ19AmNK4X8z4KmuwKAPAkSBTrg6T",
  "key11": "3rpDzu8oq2GvW18sDBL7gFSq5c4Bs6hfpMjJecYb87NPWmZ1Wh8r1kQhWbRWdJd7GjGM7dSK1oW77SrQeHN2t29B",
  "key12": "3xTgZLMkiHBQgofwDwyGxerXNhjNz7oxA6FWTf4YLj2NHTGZNsQmyYPSdUT4RcWso92Yr3YLVTawYeFVXp3AQGK6",
  "key13": "2oorJnrRttgLTfUWHu577CbrhmtfpZiec6NCVwPKsbpJHYAWBdRrtxzqTcGyWwbfobkwdx6Xnuc2vZjihh7rEd1q",
  "key14": "3FnNCXg3Ebdk2NKhH54QpCjAvjvxYuNJ1Lq612SaGtdkW7PpKvzwiZ9jBU2u3SLh3jSRq4iqiSmoKLKVp5whizZG",
  "key15": "3YNjvMccK9TXQ1csrKFZKNAXRS2Ur8VMr9JdWEHd47tdNZJnZYqUArVds7b5G27qHDYwGQHCeuS8ZFeFWYdL92Gy",
  "key16": "516Yu2TetTX9DahkbuXTKnHqKJtHRip7aLny7vx731RjtkaJBTFPcQesqgJMebnpGRPjHR8FmKpKGAybK9wZ37nw",
  "key17": "5AXiNAebGrnE3kbPvjEmKvyPzaEaTQjepmdx4pfjHLF7pjhGGKiEXh9mACuLUknUty6tzzfKFc3cNJ5PE6vgVtHr",
  "key18": "2esmv7t5dJCoGGFYHo5PZVrh5LCY6b8KJiEk1ffJgHvgDT3g8yP9AG8xYYSZNXnGMUvDoLNbsPnCMcsrFWCP6ERU",
  "key19": "2ckywvN5KKhnE7pLksr2pRovDEwUmtDrf5EqxPny8fugfg1aDW8GU5254G6WgULUtvs9GF1h4TUFtUbcFMW8Bj6A",
  "key20": "3RzZe9KE1q8FwtDWsCbCP2cqpXu2ifKWKbgA1qyAhWxXymwp8urXa4RUtN4M3VEMAPSQWbvvGuxZ23jJ6iQ8S4ZJ",
  "key21": "2xgg7eLdmdJbUX4k6M8jxP8mgWZdj61VeXfVBxhQwGCkHHkasr7293ieA7AWm7HxRf3Ttwgr95wu6eimKnV96yxi",
  "key22": "36KL8nACN5T4jh3Mne4jRrZ9JaiAcYazbw9mfp4GwRtoNwV356EJRUGGJmudgiFijkxfEySXkg6CfrBztCEa2zw7",
  "key23": "4SdQKsK4pVojx97yGhiPsQb2Ab1CwY8CC1qcYE3G4j2mKm87uq3GsUiJjEPhPQQJEouMqPhXMXjUt3VdA3q5hxF7",
  "key24": "ApiKxZ1sb2tVzVx7MDZuP3duLk3U4jx8ev3jeppB7kjUX2N9tRvSrAPbHqTaqL9LVjw3nFadB9kadrYhmrTsf6V",
  "key25": "3njf1e9wr3RLEqC5n8cPesbqYrbUxYKjwYFHVtpmMTvq1EyS6w8VzRP8u9NGfJAyHCDyBdT1Ez29CUhajnoDV9do",
  "key26": "5wkRHiVU3WN9QVMLiUDGNrRe9tS2LwaPDXPQR5ztiCCTBcr6PP4AAhu7CCuKd3u4r5Xp2hMAmEr6sxLPYpuceBRf",
  "key27": "2QXSA1M4kighx61ogpkeUN4LxthyWwELMxjG3LAeuzy583y2rXSM55WQERjfcpmiBzndr2FE8JUFx3Qp4sjmdG3W",
  "key28": "AmveXPLDGvc4JiXbMYvsAsyktEuhcEt3kH1jvRKeZu6RxYv8YpArcbai734EvCZvWUgEsKrTFnCvG9G6St777Am",
  "key29": "478ez1RaUn2poyScfLk9hB3StsWutoRtRShiaK8Puc5AFnVTpziQDY9d7cpZvVdQvhFj9JP6vz89EK4Kd9hxAhLp",
  "key30": "2tSqiTMNbTTu4SktXd7hv15mjwFZhzmfJfPoU4utM5iCxbdDLVXNtBUeuRfnWBPbRa8HQLwZtpk4sjFBRYbBcBzX",
  "key31": "3nBxhEEQo5DsgWJnkUVSMvweGPBpFA5syV6ftMTigbDSFYtm8akto9Jz56KMSRX2qeunwZbnUKZ4TVafJ3ewMxqx",
  "key32": "5R3siKs7kfiAmZxoeypQjFi83dyW8a6avUG1BdZuxituyCL6wr7HdYkfwbL4ZoYnjjNdEqeCVJnG5unB4a89QUUH",
  "key33": "26MsHrKt7mwLJYkMexqXLgrJNCvV3zX8fdgqff6VBjPgqnK5jpJjNcT3CDTkZ39bGJ9BB5s2e6bLP7R83FUq1znu",
  "key34": "3Xkw5A1ouk8Cv1iFF59NY5j5PykR3J8VvptukCpjhaLzehozEHRKcQ99sXEF4YKvXZQDeSdBjnU3Gn5rJqzDRkd3",
  "key35": "4GhX4g3udip6G6bHMQkNnc6S1fmtLjgNPaazAdqwMRNqKrqPLUgrHvVhSogxWw963QsZJ5BxBJLXwqEmVH136oMV",
  "key36": "5keVpt8ra821pTAeb3riCsykmqxcq7fsMiCQevL2fvonFQi8hKVhkLzpkn8K99h6f6VK1WDE6FbToDyUkvSLHRB4",
  "key37": "ggUSvUxsVcZpAL7jcgBBNXW81thft4QFyVxkLjAq72p3VZ9acZn9MyUKiuZ3VdvVPVqvsdt4nU6gg9wfjjg9Uya",
  "key38": "25JezpbL31nA8zHH18oQHjsKz52SPzNthYk3ire2DPARL5vHAKQX9FpNB4e1cRzKdvw7gFRGq8L9e3fnZ8MC5efS"
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
