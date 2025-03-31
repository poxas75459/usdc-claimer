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
    "4YUBnMVAQY9oKPCagGqtcJM6dERYDs7wea5mm2DnAjRbs3JJWmFJUe9mKFPdgELEY3W2iU7nkDXU6Wee6gpKE5oj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FZhEMCWZf6MCgCBUfCncsVJczVQCUmacP4y6DnDvD9RWQH2QnskHXgPnRtkwLmxS2zvwaGZJtci1BMVBj92ZacL",
  "key1": "8XVuQ5eGryEvYaaQbPnzDoZM6SqB11S7geSs393Lb7Fewh4m6SxWHZuRo6cTa6a7ZLdVzyzns3nKtqsXsU3k3Hq",
  "key2": "3rDGJKghzRe3DwAkATvbQBgfU2JKm7c26h1f8Qfb9ZXmSTd7sVG976YADQv9UGn8yi9xh4hUaKMspCnJLR6dfHj7",
  "key3": "AzF3eg1xCzcQUix7WttnY8yL45K9ow71DkCohsoFDtpVQg2MxCfmo96PBWezRVa3oVKYJAsNmGDCmq6NzjM59Qt",
  "key4": "42AfTt7CNXBphhjt5ohgNECoEVWpXhhE7KvuXUyRo5gWv1uySuzjvwXed7aDYPcKz4ByYXoG9nu3bJeNAwAn84FP",
  "key5": "2HUsnnDEjqYyPHCF2Kh8hs5sBaB3gQ8qo6zjimg2UWro3naRb2DGeYCYXHA6XEnE7wjpTQK2P811sQMCyL3TyWEB",
  "key6": "61Qa6eibVjrU62V7Q9TpKb639wZbnRr9LJXETsm2Gtn2TG6E5ZU8oywhFaMBMLbYLoaGwuQ8GaLiZJXN8Lg2HFPs",
  "key7": "2hTG6pqUdz74nbBUX2qLBa8y6mNqMfqcXmCZUw29kgSkVekUToxSkRBo9JhtGWm62Swo9N6JGMYoX8kmkLxug51z",
  "key8": "5XKySMBaDBZfPiMLLi74qzf1NqntLhW1SSngCvTZZt61R6wjAYBW72n9qAKWpedkBnqMFWknijA7tF1EJbPtjDfj",
  "key9": "64HAtc4BDJkaq4LgRrUj1oUJsgw25Y3yAGojrzmkPH57FxjggZfBjEP6xYCn882sfhqGB4mHDrVuR9C3ujY4Cgge",
  "key10": "5g7kUmiXZKx2H4iBMEMFd5cu89shQKnBq4bwXHXbujFeXx2xS4j6U2VND4KWzvPNiLdC8hRBo8Fm2YrmFAq5g8iu",
  "key11": "3xcpbUm7hL2HiknAW4AvzWeCbUEx31qpcXYCTLottYUUh7vfaAR9m2oK4tUx7HR7z78EB5d6UNzzq1eXtW5XPT9a",
  "key12": "4jPJfxrDLz5SdsXQqh1ixPQtWHL7cmenfSEfXas1ibhdtkghsidDFozyo1zk2UXXoJjFiPmmPB44CmzVW9U3ZXjv",
  "key13": "3UZazFkosA3yMiCrKUk7rWn6qDQpN9axBuVxSPMMLv6WfUY8YaMkRQh7hRG8s7ZP5XB5u7n8aLTD11Qe2EPdLphP",
  "key14": "4pXi9aYfMAoXt54inBXwM2JNVhQmNL3iPGrbJWAfeeSrN4ghoqd7ZES6if3NfB3Apoid3brLQJqGKn8KySps3SFF",
  "key15": "4aDC1Fz7nDNnjUXsT9TNQZ5Riezoc9SEuewoSP5rc88DoRSnPgnXoYPHkDznPcqDbFGd1zfbT73yFGi513YCPRSm",
  "key16": "223K7YpuAq8D7HKy9wBN3JpiTNzV2ajeR7X8DSvZAXc8gP5bjt2cW1jQdrHfTEgNuiRjttEvx5bFBtDJHFxaoGqd",
  "key17": "2MNq5tJQVkgFGkLvqgvoWFoYVsch6sbbxfiv4rHP1iTQDtxwUqdFiXmk6bTFUgj5DASgLMdaNnzY9cY3KFkG3yoz",
  "key18": "4PDR7NPKjuQoUqptvP4x4eEdmvZbSJCMFUgF7eeNbFHPXCypZghRvmEhFeFytccao2MaeD45U3udctmHAyWQpb7T",
  "key19": "nVQUmrb4fBvcwJrPTSvDNtMrRir55cQpc7NbyKeH7QqBJezmdvoL8wWYKJdsfGZpQ9toRKLssbsDrWcMDNakrUg",
  "key20": "2Xda1FVQaC8ozz13sNPdPCidRYg3n89SqNYMrEY2sYJhWtqUYY8vE4yisRN8LApicbDfvVVqNnmdN3X2Lmsdfiz5",
  "key21": "AZgDMwEE7ahMDt8eGPy7bEQ9ngQ9ZDDrevVq7Wk41oMmj4BuUDLSLXU4XrDJaXsvwLNJWCVrpPbd2qgDLw8cAPh",
  "key22": "Q8eH55rGrYGtSEVfT92N2BSRJZ5KjtgKeeeafhCV1ueKdRfGS9DsR2NxZN8yJ1FBNkJztjqMwpmjts4PqJqV2NY",
  "key23": "3rYVTJ6uLnnJpHraDLaV1Re2w4W9PhxMP63k1NviqVdtzzqLWz3jg6UqQCYyWoVkW7wgw7po2QM8qggdY7QFXnKc",
  "key24": "4bqQAB1rnFSM2UUz8gQVBgQZVvqW5FASYfdmWFL2fcMZ8sxhgeCkSQeUXQw7oga4GqGGPpRSfTW4uDmsv5gVtTdN"
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
