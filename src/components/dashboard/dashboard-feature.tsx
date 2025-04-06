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
    "2o1FpHYwBXRmVa3wTBdHbkVR94wcD5Gbea3npHrJBnJdW1VekYPZzYKyzTiqqMEfPvaSVXNdWUf2gWfou3hRrDrj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gMwft87xybg2Cdvc8FkiagqJnta1QrEj5jo5t4rUShzDUY8CXqYu2NNnWaCqdXYr8NJZCyabkexF19vk7QTWygy",
  "key1": "Ys5dh5ginATTTFKWkXdHzvn2KDi6tpqPWAvuxVXmb6xUAe3a4LJ5R8AZKtiTekrZMZNBrkhRPks9ecmh7bCpZNF",
  "key2": "Pyet8ypqUUD7So8mCvPHzcMPn2NkQsxKv31M1PFYKAm33Fif3K1JwS7WUW6xXw8Wm9KfSSXBwUvpfRxQUFTcmSn",
  "key3": "4hhjX3wEFfLNuQqwEAPWhpryMn8VhSunn4pFiu3FAnGh15fnAutMw5uc7X3hoMDDmJNJs7oK2Neuo79QiKNvQJvv",
  "key4": "2s4h3jwjk62huqzjPEoio9hRRftnFqR3TFq8zkCFbjXiSLPFowzdmUAHBVeeatBrtaStTLthQuU36DMTL5PrgaCA",
  "key5": "Zpi1c32RZJqVVvHNZjwdHJR9ggyUDVJY34g5hm1vZwfuiVoGeN9zdVo7NGWEDBEZtTgsLfGnLs1cs3qGD5RiK58",
  "key6": "3SpYN6qsvKuGHYNPSza1UFRGJhXwyfBynXnsVvYHk6aPYj8oYyc1YueV6XyReMiqmccYEoMbUb758ojoy3cN28qR",
  "key7": "3pEXwEDwzirWdfBiFcnBUJv7cxWgZz8CPafcfNoAx2aaGCF4oH9Jz2Cx29d1JpBTR7UmuHa7DHx4wWdmPc67EFcu",
  "key8": "4w948Q7XqqR9AAyRxHwmYQ1gySYgwDLrKJ9HxW2kekgVkSPyn8ZgqxNpP5fJpA9swaB3JjRZoVoHVHLk5mpjQVoZ",
  "key9": "4aLS1McxBwJjRpzgUdBwzej8gnJMFMmc2z9qQMNPCgSR6NmRVfuDLJmVq98U3ZmKCA2jxhvKnRvoum2cnqf4H24D",
  "key10": "c5Hmyp6NCMWntEhT49GGwPFscaEV1YCPUGxT5c8p9h3H3L5uzomUhwgqnhwn2BtizHLAtrMqrfxzeCrRhRAqjQ2",
  "key11": "2oeGwjX1VMZwPRz8326tMxZCNXLi21Pjmdss8EzfbaHSxpnw3dyotkSSQvS82uKFQUZZS7kaa2zxG3X7rteFW5Eg",
  "key12": "rkx1MD4tgbvR4KTEgFAZphvpLEi3A4NQJ8WCL2NcJzJMQF7C5gBzEKa9nPdtgHkLpL2vevSAf36RUqzGPTBmn2b",
  "key13": "47pYj8AJkpubNJhhEQVon5eQreHqFitY6qGUbwSkYpsGtwFdjfQJ9PT5FFQSwmm67zBqaysAiYdnarBQvcUw8UeG",
  "key14": "fBFP27kzNzzLGfdSoi9BCPo7TLCgWG7VY153n4QB2qrFMMeSWN5Au3rKWep1qDhg6agUGEJ9eZpC8cbTiGT2yfj",
  "key15": "2toXqT9nHuiEuQKVWNXmnfH8Lt3a1MYC3T14AjZyFZU7KwPSt6tSBU63SBKoh2wQPBCtfZqjpGGL1RbS1i8Z9BUo",
  "key16": "35foSE1VPbzshi2daD1s6v4D2CvQmTdJQZmWByYgoCArpyhasi4NGk7kMPfVK149dQhdYkABbwAx155nfsrntVGn",
  "key17": "2PE7nZRdiEyDv8TwLL7YAKA3mmBfVgMvV9fvJgeg9PCYuJ3PwWozDiBd138K4X8mSF6WKHAcnqCXtFcqPERT5o9i",
  "key18": "2ThxZcdz4v8vKZ9mN3VjhLqRKEoE6qhYqNdSZUuWFjc37MfxUi1gz3k5w735oEtcJXiLBnXRKfZUkMPCMroeYJwt",
  "key19": "5DuF7UQiNJUqKGAvPrVhjf2nBUega6t6UzMqjsvFM6SjpUqgvADajvs5NArUJaEjRvJ38Dkx6KX13RVBeYieDLT9",
  "key20": "389xHHeujS44fZYhX45cwePGdSQsPfYgmxUeUy9eAEFv1U4RcD4t3woYQGjGJNNvZ2b1QremHnqAvhUbKfY2Kuha",
  "key21": "5YgHWHYp93L2GVgXQdqFEBtYqAFinscuEusC6kDxM66vvquxrj4oQrUA5x6uxNud9ZJedPdsykG5YSDptZadmxZZ",
  "key22": "48oNddoua9K9GWco2o3MmDEfzwR9w6t49ZBJBijpSs8UGyZpHDKtdKUyDxgHLxafx8ij82QiEMBFNqCEKixktDxj",
  "key23": "Af7VyyY239ppc4K72PgmQ3B56QeVhy7q6nxoWtsbhRzkZ8WJuhx5f7fPZ3ounHXwXQ1hpwp6VteGe7LRPmWV4zZ",
  "key24": "4EC4Fy7weVB1p33yaTGjXScSD8a2DfhBmQgLPc8fKRgMB68QRosVrf3wXnWi4cAtWJFRsGADHFDJUWeBgQ2TzVy6",
  "key25": "F5YiKCauPbe3j7ZGaxMkX5oUsMVtNPRpQFYqLgi1AXTFXBksm4EsBUJtxQ7KwNmboskUs2KrhginFazzcFAjGEn",
  "key26": "27xmzMcGspjayPKmKG3WNeq4xeJkKzdLp4SHAkywkYDdPLJhVK3tstZDnasaz4gYfr5NNJNpLqU7JtT8XHkAgQ4p"
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
