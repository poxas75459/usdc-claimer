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
    "4c9pgZ4oYZM6Huvjt153zchKZPe2g2WFGEa7a2tEbtx8ZjD9MrChx1R5a9gJT5sbRcdatpwYmZqurEv3Gj6XLXrK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BUs4W2a1TaA7tHSvJ2Zr1QQ6AEJFStRmvce8jr6SzMERdhWWrgHtc2JpSeanH2qXmSTHkZGSRR3q1rve2rhAb7V",
  "key1": "4JAnnn9xuyAdApJ6iMBBztvyTZiQqHrsxESYG7d64QG97BaL1Hpe5eZfwwZwXvV6SZh4Lc8421LQgM2E2bAwy292",
  "key2": "KbtfMMNznkyNkppwPJB7vDwb78AUQ4c8vB5GHCLQZaesHPc7rNdf72HgNXZnhBWQj5je5yEPyRn9r2MKHFiEwAp",
  "key3": "3px9GCjxKiVVhVB1KzakBbcxHRr4rnm8L1ZyycZn7vCAMtEBjBuZrBUq4wHy5oiA27m8V3QKrs2U42bzzkX1QmAJ",
  "key4": "3RaoBycBSNGA9Y5pk5ModJYwXdLUarauZNXT7v794SY5vnRcT6mm42WtsEu7QWrg1ZJ3HiUsK2bjG6dt4sShT5Ek",
  "key5": "5PRhutdThvVuWP9AW4GnC61tyeL4uRk4jkPnafPGcVh9fbmfXMW8usS4sJtXEVDSGP6Rd1WaYdzcf8xjEXqJKwbG",
  "key6": "2wvXWezASKvcYiGXivsS5SW2vPD3KdrbMq4EXSnCeFMBuZwkd15MKLZfmvbN2xCkqnzsKkqgcZUKctAeinEmLKfa",
  "key7": "bPrYXLDd8y1jLR15mdtVY68XAHa62Soyeo5homJooUVACPbeunt4zfJwyMbVkcD9f2dYasqkhrGeMUbGVzp5EfP",
  "key8": "fCjHrT949Pu41LAxhbF7XFrBPkWJFjT3LahcnxfpUoQMoVRU8V1haHpC7EEKAAmo9rf3reqigtaVGDubjr5GCit",
  "key9": "3XprRj7dQsymhASXt4u6csnz7e1LCmxWbiMiZc1WpVqYyKrUVFc2nzbbWQ1PkK7rt5gm6XuepexNAZfCxJqoPbtp",
  "key10": "571GboGYqHsJJzLDLTT1MrNF2P7JhfyJn8STKxpzZrSQLoE4DD2XZEfySEYjKBMhror59z5hsFU63gUSpScKgLPM",
  "key11": "N1wLm8vhxp35b1WNhYRokVBL17VEyVTQf48gmrXXbDin4HZg4MARrrVQKbNfZBJkvEmHsGHLSSj19HmdfEEfaBC",
  "key12": "5nvdXDe7EKVH8zJEV5oVhfZusuDp2yZSbndq7YSnGW9x9rmhq9b8PdsNWgbvXGjUoPsjrZ1Btvti28d8ggVCq1B1",
  "key13": "24gBKk38TCASawJBieGENi3Jor2LBq3ZkYJAdUZXbkkBHMA62q6ssyTFVR4A6tj2hdhCDyTj2Rxe9qHGUjZ6ToJi",
  "key14": "4ZhYE9wJHN3d5vmLMy6DmPeLMZ53cW6FyYGrv5r14bsS8CfjTA3GSNViefwPUupRPRpK4TdsicU2z9zu6BXYUpSu",
  "key15": "2pABZhXjbwFpJYvmmDWZkDSTVtLUKbKpGw28bCXVJoCuRJXDHQTpmg1xuzVAeivmhwA5p1jeqfyJpc9VfQDoKuRa",
  "key16": "5iak2tdYWuhkfS2VdsDPS4fW5zuTnBWJJd2YjYKMq4qYyiWKpvNVdcHDyqUtjfmUnxSSNwgLuBxHJ4nUw4unCXNo",
  "key17": "3E4EdsRaGK97hnKs6woz6GRrQ3eZGn5pbA2Fr2PHAmomwSxKN1TCsECPY1E3Pq5pLvVC8UXzRAP9Hqj2EfNotZEH",
  "key18": "5DF6sHFk66XAnz2ws69jQxXoTouJr5qH4rcqnXZggBSUtXvsxTWCcLpex2Ti73N96ci3Xcn333s7dmJ7dnVzdjQu",
  "key19": "5UQgRjRu92qwnKthUu2rgmAsW848LNFqxP2wqszZMw5mC9Na2hxu2LdovZVtaGQkB4EsVGmtHDLR2qgUahRGVFHS",
  "key20": "29P2gvYzTEKk2avn5SE78bZmZSjoXWcBGfGsRH2NHp92VvTkowUBAjjUBZxby2W5mPNA51DYzzXhPDKkiemXDtyQ",
  "key21": "DhsHRK2b3JMS3ubVKMTVYQYxjB6DnbC16gjD7vzMxVPKmpkiawy397qLYKDntib2reuKzVemF6VgGqW4yB4nbwU",
  "key22": "4vzcPEHHdsbRMwd8XPf9Kap6CQtN7gPTJCD5rsoq8qZFYeR6YDV2WVxzhxDejzGimR3NToLeCfRzQxxPfa7cF93a",
  "key23": "6143LayLbcNwEqUmDVKYTno2brNkMSzmkue3iPJsNxcsmtvgQtR8MJA3MCggWCtpHZSHYBoixUC7QCeozfs21ew",
  "key24": "633c8FDqgPZnTn7mrpZsvpjRVNFnifSdcHPWMYRXgZw7V9c43A71AwVJb42D1ugXRt1gC23iMykR9yy9cBMm4X2Y",
  "key25": "4cidvbQgrFcdaPmHY6cawhaWzRqhPqh58sfAakkb774Feq4w3iGHdv1AmnjxodGJN7DJ2Ga5NMKK5C5acAHYNAW9",
  "key26": "4vSZY7kp2NX9pcciYVQ85NHRjwTiTrFWjhedRvUkABZ1SiJimX1ZvvHRKwwkYSVkgFEYQbdbJgURBqAdSDCRXTgo"
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
