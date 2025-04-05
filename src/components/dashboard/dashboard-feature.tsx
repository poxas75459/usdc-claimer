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
    "32mbbcbQrkK9eD1CjxCp6ES4QFCqmEVpNmBHQj2hsWVBktzVcK1Z17K9zsgvv1RqC18Ec1SLAgy9ZdE5Y7BQGrxX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TcNK2nwy8cP5A7JAaJ8rMoUDLkxsbDeMm1Abde2iAGnfN82krtmxK46fgDCKMB5V5fthjfpC8E9CB8YSXYWtuiM",
  "key1": "2rFZr1zJ7QJ49FvWFnFGyfvisQTFSAVqWx22nYceWzqmry2PXpjnD8ws3a7o3gpZtzZv6xENXfhcRpkp5Ke5qrrj",
  "key2": "5C93yzH3yvoqBxm6Dmak3FPNQoQL8vgffGu6AtPdn7ZddkYMJ3zm4SAUbEj7uH2nschwVx6P4DdfYcc8k28QYC8f",
  "key3": "46b5WpMG2ZdL8EJDbPgh8KzYooL56b4HLrarzPLU652BsZVkTREVqWyj5CxTwzsMrgPistVMRzbbd3PrJQ5AXykb",
  "key4": "52Sme9WgJQ9W81XEGL7jSQDMxYc1NsrY7eRz9nRYMi1kb59nLX2wxr9rKB3K3J6FsVgjFBSYTVHyKjttip33egFw",
  "key5": "3a6jj2Suq6J5A85UFhAogdSyAyLkrX78cCfNCKmqZ99Ct1Q7SpJvSnWV2hGWmmA4xdCZuTaKsdb7Vm6kULBRXXvm",
  "key6": "4LSRnpcBHYUoCF2pLbanNF4EGiXDf1aesn7dhoDzyQWLx4Vww7ob9kgG7ZzbZ6aZpoyNdKpsx1cN29UK2mNQQbK1",
  "key7": "3vzwS1H4CkqXSFS4xJXv7N4m5nZUvGkhD1uno4ZRzqS44xjV9xhH7pRyYoEkvcLDVJkEjxfgPP6fe1Nz9W8PY1XP",
  "key8": "45nLp2PMaBjWVVc9Vsi4H1MRzDCdFud5h8AoyDMh7w3aUBtSKXQtriFX9BmqHyzgTohMCbtZ6rQpm76mUXiQsb1b",
  "key9": "kVrHkYpMuwSdmDWy5AcAkQ4JKFoQSqzgv6BtM8mPiKmPn2h2eeGMZJjxEvh6QWcwxiqVAZyFbyaUgtf2HmhkNm4",
  "key10": "A3MGhyyYWcAFcyHAnHJosusSx5UsvkgUqZwPBEJv9xhXVaxiu9988aX85eMZzAr4HTNWk45LS7XxsByLndHn9ET",
  "key11": "48sh7ZLiFRtE7VEpKUYpq6tjV9Ct4ZH6djVtyffsrqPFtoRNyGsH5b26wq7nsJdLov23wNfV8Ht8zw2sHByRxZsw",
  "key12": "2ejF9DFYmBoqr9U4XJCWxrkoKC4vAYUuTkF6CB3GU6WeS8ehwuPcixagsRorm1a42Lxz5hTkiRoRAYi3vfzmHooP",
  "key13": "2mpSLppJXyv6KESdrtHyiDiL5zb7f5b8Sev5C1KNRjCTkZm3Zi1U8qM1FZCXQ3dN5bUd3GRqRD57H8m3TyaxV1xr",
  "key14": "2TAaB4h5gemaAa3JyWG7EgSo8tx1dHcGtL29uNm6d59R31qwnv8y3VYTe7ekJBf5VEMRNQBkcseXybFKZdMA1q4S",
  "key15": "62vpS35nXUQmuJycdhSMXCWVkhiNbSSGSQfvD8u17NMZUsAWYKQXN51jPwuhsvv9JQXvzdFdruuYH9BsqqndgQDa",
  "key16": "4Qb1VuQFYt3uVnaN44jzRe6RzPSokZ2sa1MPy9GycrGYPkFhRdfBpQsdkBvfWg6YaGTEfvRKXnb3iM3iCdH3yRjb",
  "key17": "8B5tfhJYgeUJiHaiuWkFNig6H4kBMS1bVPTTPdEeffKxmoEqSyotbPoLKSzjAVD3kjSwBgneQtkHP71JNE9b1oG",
  "key18": "5ZA8p2sZRLZmuxjQdTVQidrTgVtfKRG2SeHyypM4rBqydQx9BKMNvniB6aHzVUxqQYXgreNbpU94LuG2k5u5hL4C",
  "key19": "6LUAbBbiZKp3e6Vkdo4MJ3CR9T2XnMAqHqGfCDJnqcq3rFoYMFyeUk4UQU4cbfCesGBpcXihg23StuMwA7bCHYL",
  "key20": "65qY82nej6qFYDxGtZTtVvTEcG5DuNPsbnqRUHW1XGtmr92Yq6tnjPLbfLgLqqF4Xivx396eZBt7tM7xrKNKYks8",
  "key21": "55VZ5PDuuRP8mBCmjpscR9EtaseqAQhSzkmELMehdLew9ttn5t6rXx6ny6g8Y2wS69NKKZBSoW9BPgY8acvbD4n",
  "key22": "dZnKg532bsUh43jfGUGvM4UNEPc8qpiRVVjRmKiiafPn6ph4b4yfdiZ9KUKN1kn6efHfokL61tRCyQh3KFP8Nds",
  "key23": "5gG8gsmHS9meBuWNH7xsUhiHsMUXuSM8poTPri9gP2wSnQFccDmnBM9KQAcQwMyHsNqFF2f8m6wB8cjEFH9qoeDC",
  "key24": "2iGS9oPkcKZoZRwyniuGfPWb4nFeV3f45rWZKDNebsNvZaUJJzbYVuRph5Jd2iSTXF2ULM2nWjZsQ1AVERUWsghx",
  "key25": "pn6gG6hVdM1NndEEtJtim12NuwaKxruKXFm7S8Ay22srKQKsA8Ut3JRKcubdSZWryLngQP4UPwyiAXpLNpaU1Gf",
  "key26": "3qizd4bsKVfzikm49pFJNyZug9Hk5tCknuimpEkc1pFu3Q4HtmeFx2zoeHvVH4zP12uUQcLtEjzD7Y6PFos6UPRe",
  "key27": "2GimcgjZhKi3Q182reyfhBf4SkQbYjh1UnfsJ5pj8KnHESvEgPjVAeMGqcYiWX6aAA8pnX924bo3jj2V2LvE1aas",
  "key28": "PmtAsKuD8HihBEuGjkaGXp3W3SMMCUbEvCouwgRZyGjpJKHqGd82bYNdXo7af9jc1qhacnXcgVpZx5W4LiALiYn",
  "key29": "29bnhJQGT3oW7DJ9utykjDSfECq5YVXGspvvjHJXL9pfykbnCeCu9NkUoPPSkNf2N6t9i39LrPQbgD6j8tdYMwHp"
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
