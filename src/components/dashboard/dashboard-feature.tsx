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
    "fmrDiXP7kTckSUmXvZXUFbe32j8yfKXLUu8BfaPzQmkGUemYLu2L8oSy3ghy83kQaYpimzM3pRapdWP7RUUoy9u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MvveuwxtxEJcLgh6LWJtjAWP5aPpeYFvChPVM5EWJNTMJpRzjgLdSmH4LhpgsVA9GSNFgY9HLGmfE2xPRyUBBTv",
  "key1": "33XX8uFxyDdt6qBx3KJdeJCXCzXXkTNpW4266Rury4xvu64zrodxeRETkhzm6Fq3QEPeoULTEzfLjy9efVmzc8za",
  "key2": "2ix8jEMCba1TsA55SEthLRaeH7KrURUjDmrXcG6TSeiaJLkEBiH38uWG8foUeGgPf46Eg22HzGUuvd4RGTnvQUo1",
  "key3": "3aaeFA8EpYCPoVpDUNkNtsByXWb9MWY3vpbrzJKn12QEyAbN7mfbHV6fcqHCsybSZ6JYwhE1meCXWGi1nnmcZPKJ",
  "key4": "4joL7YNujgfLBSNmnykbV5P12AuEQWtvzqiA1ocvwLKri9KRomMAT2cNBh9YZUn6SgM8nZqe2HUzwjcAqzBTpgUH",
  "key5": "zxBGoAcdFzizTeQYNf4zD8yDNUxmsXVY7SWtKxfVeusdAqwafsuZy4ks6DFq6kykkDQEMVfAuuUzY18HJnN65Xu",
  "key6": "2afsGBM1XWh6dFJGthWWwLLw5YyY6rzfSPyn17KCD2YmL84HzLP2KUzYGZs5WvZC7RFamMmpsVfMP67JcQMqhQJf",
  "key7": "5iGjZwnJQY3Sfy5qsXK5E1V3hdy7WNJqDA9Hu1Sbh4ktGiMjLfHmBWuMeLs2fSZ863Xh93QGNgvPZrvUD14NDVon",
  "key8": "43DMikRSVThKMkyHyJUFgkhFuBZCGcimMqLjGSx7WwmcRQ5bFLWK8T8hmFsUDYPdMkFq4yuermC49DW5x39Nd29A",
  "key9": "4dpMRiUzzhg2v6vbFRKMtHxUvF3bVtjHugcjFsJDPAKYDEhsebAKX8PzFfUTx65ae7ob1rhbGE7DdLrPWBQGiTip",
  "key10": "2sbXvfPURiNX6xReQeukGakAfNCaT23wju7FE6KvPP3dNtbbBk2NprGPrBUsqJFHLtd8abWYbMVfM4qon7AKpzdT",
  "key11": "3AA4kbw4kCHFGXuNr8Bf6p7uKK7uDVtEEzG1eN44zXXa6GdYa8KAvqvq7JfmuanPTn5UEnvEYoLV1pQEpZzmMoq1",
  "key12": "3FyTtBUmRYs93fU1gY6eMfs1TFHHw17e3ak3gZjAbn62wMXdeiMhjKj6d7d7XmoykXch3WYNZqAoTbYWywZqKxDq",
  "key13": "47E4kWcC7XPZuFEAJSwYrWERyShi7NnBbKKEuPWwTaz66UHdidDjLu36LhcqmCSyTB4HYJyS1ajKVPq9926Z6E88",
  "key14": "JdPUJ1AUMxtH4Dk682dsJpUzSzFJLAnWCHFDdEHaAawhvSvSowtW1SoUiJq6phcAT6Jv4WQbd3PVucq9qQrHVRR",
  "key15": "3LCyB4ABxrGAp3ZF11tfqdcXvZ6JehWzUM11apssSSvp79pRtnK7L7eTz8gVKTuJjSSEGc2Z2yuBV1s9izi3knDe",
  "key16": "3CPdqDpCqTzhFwayVcwNEzeCHo4jsCemqX1KATTHBk4rRx6thvWbzCtTgfm4aLZjRPijKWYUJkmbpbg1J58m62Fm",
  "key17": "4Vc5Xk1qKPrdq7FCjX69qUUtk6V7BaaVKWzzonsjk7xiBsgGyBhh9tNwxBosu1zd5y8r2Hp1M8sGpYm958ezoNwM",
  "key18": "4YX5u3zk9D2ZB7MAvBSjJ4doxu1sxHb9Qu8MekH95M7qHe5TeHcdv9nHUgUccCfq9WL63bUw7rsiYSkYquKMWyMY",
  "key19": "4XMfF2Eusy8h9wzLipBVR6abYzdeocUmLs814X9YtXqFH1kZcngDcwyf5bXpaAseBmZw76SepUvmzT1a8miNJk61",
  "key20": "5thwJ6unEUczDgWPEXoPSzBN3jZwfQprhnTa43TquKNmAXSCEsPT4KQaVM2zU6HNjgEwS2gGd5PVypUmjoHqQUPq",
  "key21": "3rJe3ucBcpqX3oBVtYfeYSaD67PxqwJUXy7fzKX6NUmL7NAbSgg6JuVXevkMW2MtEcVgr1oK6d4HZNQMQkrRQ2Ut",
  "key22": "2Fhiej2AySsM54Wh1MxB7QaNPneb7JVdZULAaricwNUjRjvPLScxZNDThLpaYBeNZUjHy2DZFcfVey3KJyXACovn",
  "key23": "21FeG5u1CBfvyUa3G1joBp9JFbfdV6xFHhr4UDHppGh7dcUU5vi9BXZRJJEMkuXwC1SnL35VaeTEa1PTYfpcFCiJ",
  "key24": "5zouNWCbf5wuxwQJu7qdrsvWPerr5VKBfXmsMDdffW7N6MAUBeA1oJDZJD77LKKba3XxazX2nSP87aPSShj1KZLt",
  "key25": "4aPjjRjt1ywLxHyzYg93CzRYs2aRb8vsD6frVAueegjDkj81rQMLqpT8TD22AMhdRtDZbJeiCpVK6nXP4xLaPddi"
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
