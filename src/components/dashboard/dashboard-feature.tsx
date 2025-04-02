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
    "fG8S8AG3vG59YVAxnSNuPPt4Sgd8M1CucX4DJok4qQ8ABhZVfZdnwUGK8Y9xGAB1Rqp8YoLtsYE3MXqU7o5w7ub"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RLHbbkFSmZGuJ5HSywCvYhJ6vEPK7GLR2Xv8UogswW79hMNy28LZP5Q5DPc3mGajpwJDkftS8Am9a4G9gJ3prLK",
  "key1": "3rbV8PLG5zSCGgwboyt5Fr5qorwdNHbYCpYpiANCHV2rdRpnFS7orukUJJPbyDmZXu7mc4wEbwxnJukChZGAdK8c",
  "key2": "35ztWjCYWqxi9tVZS7MZi3mryNeqTMWP4Ca7AJxG5jv7w573NvVE5LP9ncK78N8w5yst4dN8h1QCuXz1223Dc1HT",
  "key3": "etxyYbSsSpoGoH6CCpWUKNKPER7FWnK9NuEyqE9xotNsTgLqC3KFhyVXrhcURuescoEzNKvvrBUPjGc1fTm9ppz",
  "key4": "5Si7EQCj2XBxnM4gLPsrDngvUfM17hpNvNbem77U8su45ZztVtHWLjw9ptCzAHQeyXDDLyFLGc3eDQBuC7LQ2UZs",
  "key5": "23HCmAG1JjMgTdZzM6Hjgarpxso2P1YGUUBUafFmRSz2MjJqwd2zUvFUDHs7fwq3dnHuwtNqQ1pN6ePTAjVbK4LW",
  "key6": "5ubJmm8GQnrGefvz3dzceDt98isUkCEz5x6fvF2ZzQKHPBcQcbGRAnHtGgdkpTV6QphPZ4UWengakDdxQG9qo6KE",
  "key7": "2j3F4M79VY1zGU7Zekuo71cuN56gokQLKSXsaGc7wjrwiqUC2WgHbLsHRTxazRerkibs3WUZcEwEzboMrqMCZrDU",
  "key8": "2qLXywWgqGR7tuWN8iGjaydAGkYc6oDa16J95FHw4NeSwcT1E5aKJBrChcSHQqwEdbvvhvGvCgJeMyQNAwMqSvZh",
  "key9": "5UjkwNZdRYDajnWcWWbKWQqXqMqqmsYS3xWbVjSmKXb8zg1p4T78Qqj8oozCVSELs5fFEnXLaJDmrbFTsVJghVjj",
  "key10": "2JEtGJrb8o6zq9r3HWuxV6KQGqtrNhrL4aHqdURJnA1gPT1TT4VbkLgV7GabR5iKcThtEcrWHaURVfR2to1AZJYr",
  "key11": "2LAdrGnKe53qaNEKj3VnBGhq16wxgqDBiuv2GfEF7A9aRPvnk7HN4BsoyFj8PYBYy7QPknffHuneJG2zbtkhwapp",
  "key12": "2LagBdwkf5oUCc7ZYXWiYGEVTSmwuxcHrbPgCLiexdnvZnQXkjoVJtV4F7SEXnDvq5vEeyHysPa7iWiBPScHGsqL",
  "key13": "4KqDszbmhWis3cg8yP8m2F8dyDvN9BmyHoUuhpnYhhrXkhUBUBJnC5NfCe4hB54Q3cWK1V4f2HpCVXu5VdsWsGsL",
  "key14": "rvPAdxvW44FNntD3VrComiPJcR96JgJhkL6FXWpsVWJqEnB8nxEYWZ29L3uEyvwkiYCCuYoy8zaiJMz11NdBdLb",
  "key15": "5PXsFZD5YCvh7fHfjSC4Cc2wXMqHJkZcsQSYz9pb9P8RH9YyL9nRL1hcmTPH6wLe5hcohDqKuiGFvfWRBM9D1im7",
  "key16": "3J5vNmzAsX6ypbNnzJHWYYVkn2bFZE3YzvWUDJwzjQQF8CcPxauvo4ggkfoyjxHKvk2mPFAEz8SewcVxRPWp3X91",
  "key17": "4NTLMeG65yGiwj7xsaqT2fxGFpJW6mfqVjKkhD2LHojsJMHyCP151wiEAGgSwML3ijatuvHowJ2YqVjW4jiJneVf",
  "key18": "4tC97fsVH67bv23r3yXjm7cs1B3XLwpqhvoXyPgFq9ZRFeGyqMtjgp2ogb4fZFniqMxKkm13Q76Zqri9Vk3WbB5g",
  "key19": "5RPo1Axw5D62rqsTv33fqJ1bbG23D762PVLwFwQdXxQYBTKJN4fKYsk4NjsU4BkiGbdMNKrJup2tgy1Fz3WV4mYp",
  "key20": "5om7pqWDbJc5Ve1GaQ9XVAmvYLKBhP4MoAtypPkCNcfCsXaMhHVskcGXLJ8asVJT9uU6Zc2NM4epscwx73XXB4pC",
  "key21": "5oQ7xNZnHJTZ8h4L46BV5eJgRTy6bXXqfx8qKVyy2Gf2c5UG5oG7VXtqo3ye9LrV787AokbSzvDjnnJzExTbq9un",
  "key22": "2rZJYsaEP4tEFMpz1Jv7255d99FwUG84ryCVYmEWG6ZVHwNtgR9it5zKy77pq3hRsEZdqsuJdwzsqEcZTRGDiPgJ",
  "key23": "5jvJzj4A9v72boq6P1oeMZyU4WUJmMk5to7yrj5KGcnD5wvrtj8LWN6Kf1Tp2JRfzfzwZefZeQrDPNofpm1WVpcN",
  "key24": "3ypZEdE8YWnz7qdS4kn81CEz9RDH89pnjPp6XrkCnCsizy5yNt7ccp3wWszPKHWG5hQF7UZuc2KWbD5xqdPGGv9m",
  "key25": "5UQGyDmxSLwyvWYxkbT5FHa9BGhoKxfnRsWTjVkCs1nLjLPAGjVCm2mjAtTqsPNSVmcpnVMc8nw1iyCRGwWeT1LY"
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
