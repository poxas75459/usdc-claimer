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
    "5AJFQ8TVzbkXg6v4fCTrNq8cV6DTniJitTZxPjB3RYqwDquiZDPFMzNg2m7bwKjPdzhxCesibTvqqfhctfDhYo7N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4U8zRxreHR5w64kGxAzGrmUDaoAco2m6SZf1UnVvHv1wqsnya3qXPjik4VrwpioDm8ksfH1akS3jymBcfqd2vkmz",
  "key1": "3HF2bPpMRaJG7FW3R1kDuerWiEcKRuSDSwKcBcZj9j3E9W2W4sR5vebQdkwsFyRqWfiZzE8PZnP2u2fVW1St3wsZ",
  "key2": "4H7Q4d5h7nprQCwPSAUAKBU8fHyYErti5G44nW7TUH8VcNNqSU2HY3UKq8bWdRvdBVgB3JJ49ovrzsX2qDyzGhSe",
  "key3": "3GHfgMiBXJ9MoyDTVEybXtcR9VAPiRg7REyPjauPjDHE92FX8t68e4LdbyPq17Li5GC6eRzmSv2ZArUEfkbkj5VX",
  "key4": "3GPnhAmEJzQURv9GaWF3aURoz1HYYqEqyfLWU4NdtcRRYqX8KxGwzLH9rJbpFXmmn9T3VyrNZCaoVmbrhFwJHEK7",
  "key5": "jT8raRTMgrPYCpZRb7QadsZ1VoyAqC1115CiHvX9FrdnAJ7F2Xk1sKiyYmTaaYy6n9gCvKxW96hujoKGr589H4f",
  "key6": "4sEKcdSdJsj4xsfWWusJvUt12uSttjo5suh72SQKT4qskKnn8ouZDM4DpHsBtfZ9caWZUEu6KKEy2hLsjd9n3rgP",
  "key7": "4VcETyNV6a9LA9Qg2jWFag2bt3r4sqdzcDBLro7qCuLY9nYWs4132yZyewYJ7QtunRrdpSmxyco7eMTYUCTKEuxa",
  "key8": "2ad8qpspanw3Tn5NzWr53uZ7fAVKpWdG6EoXHpsz9M8WJ9ypX6phnDarMDqdXbBHjXtuSaaYJ7PFjbzsrgqLHiLm",
  "key9": "3AM1WqLidGTPGKM6ttMsP6BczuGQqXSd8z4zFS8a1Da44ZaHgmqPnoqgSUQQUFXSrqJDVaVKVsjkMwMfwULwcVpr",
  "key10": "386geuCwrnAt5cNWPzhJAJVznJdL9PjJDjkJpacQeLBXnrScgATeWYLbuwvu57HRu8517sP3j6rBy6afCfcHBiHJ",
  "key11": "4jx3stbqbHxJaRkdmKCD1rnuTNGnHCAPQDjFSNftptMMsbmUAKtacnr4ChNANmwep9LQWkTvJ1nZpcufyPhtPNSX",
  "key12": "2aduB6cqjHyDkWtPD2fUH6WqxXu3iGKetNKpQmGBd7VTEh3pBx3CxiPnxf5Jye7FZBfQvqWe67eoJMMArFXDmRyQ",
  "key13": "2X8Qfa7pTcvTH7yhbeEQ7kBbqVfHfYbAgW4oNVnskP4RANbUmHJFr2CC8upRYw453jXzkaUARUzM91ZBuFozTnmH",
  "key14": "5MExwg3aEoBfYjv5VMDDx9TthR4iwQMPvhbwsBs8hn1zWoxWBCEfx7HnmfDeKVjvSw3oqwuj8eK8VRdYAmynBW9L",
  "key15": "48qcWacd3FkhuedN3nG6jPh2FQ6uqJJX4kbPMtnL72q8b3G4TPVLUqnXvx2b9ziTDKC3GyqonK3BVXQBHu5Cf6r4",
  "key16": "4HhV1JZxpuV5CjX2y1BS77ERFa9SBUhMYfMxYG6Rd7rtYUftnnrJoWBTbszCVxgX6gxanUVheZwoiR7Gtht766Mq",
  "key17": "3nBtACyT9hojPAQRDMBgViAUCS3Hakmde71EtSBqcCQBGgFVyVF6LMGXf69jPjxiBQk5rNdLiinX8k21UbFSWfFV",
  "key18": "3sJWdx7nZjSaRfSE8cTtfbJ1PLr9FXy1ccvTjqfrmAzJCeQNhUwKXnopnFyi2NzDxFesibok62bW1ZJWme3LW42h",
  "key19": "2g3rgTG7swBcTj97QWqdR2iKyWX6uDMN9ASoQjWT9TpaZqkg6XLKJ5o2qksdEb1ydZvkLFcMep1VtX8PghoytMV4",
  "key20": "42YEg9RCACzaUkCBM6JTbjLu6rNnCnS3qbBaM9ZqXP1QhJULX4LrtFsoPm3cJgVrvkNab8nxY2xo9wfMKtXrNV34",
  "key21": "G9Xh8s8ov3kJWLuXLbxGrrS3A44QbEigbFzVS2Vtq4XQNmDKzasZE6QxhonZpdvAPh2CimynJjdxgBKFkZgnUaG",
  "key22": "5rbg3KfjZ73fzb9W8vKEZKRJBtcUBe2uGmx9UEcB3fE2wLuawdx9H5V2QqBtMDXB6izRaRRVPKdnZUX2xhym7Wha",
  "key23": "cSLNVn9zyGyoAEGqna4z4FuaXV1n5njCF8WnL8ZR117C1iBAdp7aDwwbZ3WYzJ95Yx5CyaqJe3iP2EBb33ZvufZ",
  "key24": "8w5PeyLrmouej2YPj2BGA3v3GVQ6iifRUP4qGRyHpa5GVBKJbeU34EgdyMHoQ1vM7SMYs85ZXsnWyuL5N8Gk2eX",
  "key25": "3JWtWUs84iYPsZ5Qk8VqwKcpZBKbVyH8CiBbHBM7QfJzqt87rufrfb575AucGkydEKyS9zbYHDNpD9gbV3oP1qus",
  "key26": "4hwjHpMprkmBcMy3xKAYwWJXhXU1bgUpmyfKSHUMcCUG93zE18oN4PVRvdKwrDZKh7xU5yNanEBKFiMw9Ryc4AnJ",
  "key27": "4LR3aa5Y9fWPXsezmpue9y2D2XEqyLFqhPMRn5t8gDBG4XXbKcEQ1XQJfuiDdTG1Et77HQAvhrpCyAUBfBnKkmKq"
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
