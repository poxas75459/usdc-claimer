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
    "5U66nVJnLoM2wBRGv4jfaFQLpzXRPfN9z5g6CxX6heiPWYZnMG1SMCCeKq7rr41HUZb9WiQPD4NPnPuvGk3HuB2B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3y6cyf2uGt4K3Zztx2VR82M4hTUm5iZ2ZpY24JZF7gh1Z4UKQAuc4ik82NjUKhN12kU248izH49tMMPSgediosmz",
  "key1": "2bc7T6GtTWK8HmBVUHmLCxjQ6DG2nEbaSMNQ5eqguhLnZEpTTDJMG7pvbo11TxDqSUTehuSF2NLsLfg3WP5PQ6vw",
  "key2": "2vRZFFNyKyxEjQFTiiPvz3tKwWMXwa9n3zY4W6FVyVWEUDmrsRXAaTBFMegTpfVw8EKUZ8BV295VJ8yR2nzkmYrB",
  "key3": "5JacU9SvDJNcwP6RGcLWDq8NUE15TFWbyxAFoW5yK3Z9NWuPayxnRNoAUSSVfK6sLtibjovaqLNbzf9mHUp4k7e8",
  "key4": "5964jrpz96me48QhBPer8LgoeFf6FtTPnCkj31VZwPznpKwe3rhu2gjSsLy5Lxv2bP6qDqyADK4tHu3oXDUaprF1",
  "key5": "jw7mh6PH5G5K4WnCNdUxnPZAhZG6aaLaSzkeWUxdxB74vQcBGRs42tfChT5rzDKNyQyY4AehLqWmH3rgng3MMpp",
  "key6": "jVs3ufmVGoHjeP83rMXwRb16yafjj73FavGs11eRTVSCqsaSeXhJrQkhKkz6BHobTRbkX74Gp4MPmgZSYN52WwT",
  "key7": "2MTzWnSTx3xHbmMLDAbksjeu5fRWyLPLjg6BqvLNARDauw3BGNfWHsVWwxG1VS72Vqwc5YqTQ7BcLPXusQd4Rs92",
  "key8": "5vynyVqcjdh7xujerhG8XpMnYtsKXy6BPLnRK7vv8FWaJG3NsUjmYVWTEudnNbSEC8stGAzHbRtK1XDnJrAFC8fY",
  "key9": "4XT96JGtKeDeU3AqoePEGcrADMTPaUM9eHt6MU3S5KaRuL2NkYGVuGqrhLyD2A5WbjyJvKcpVXuauj4UepAk35Hh",
  "key10": "FdgTZoVMth6uu5KgUKjA58kynS1ELe8qhCqd9rr3RNd31BdXKHZRsdyfBdH1BEXaNDuRpLnMTBQ18Lm5YwTcG7p",
  "key11": "3xM75Kqfs6YK6RUE4CXHj1QxbcgnVanA1vB6durT6R6fZceXth3mHYRXaLNjbAqXNbynC14qauJyJBCALwFYFdW3",
  "key12": "2orumwqYQmxGLW9fYRjGnSDmgXRsF1bQM183fcFL8nJVVN9PRbeeTT76xRt2ErwpuLiPV3wYtwGEjnHgtdoMwp6X",
  "key13": "29TKnomKcXsR6Kcakp1jwVU1JXWgYPkitocPVymHZWd6E9hnCQCVZJsC7Sb6SZBSZCb2brghNjpsYpyLQv8kThcF",
  "key14": "4mEVUphQcjik3GRFRALSnDr3eX5ZfQ8K3mCzfxYXrQLweEg4fKEQXRMBhnXaqHnzMJDfot9r8f6x9EPBKEd25aDj",
  "key15": "5AApDhGigqZ1mzwVXb6qcQBximKCMeL6aePbzqVtAh3FYRWPvsvLnzCGhKavpFYfGPFz9oLgDPhfyaai2KxXVP9F",
  "key16": "5uRqXQs7Dce6H2GD1Ldq9X4uVgfSJJipa3S9Dp3WqQNae9KQiUR9SzyqVQrXmmdSszMPvhb5rNTbXK4k1XGEoR42",
  "key17": "2Cnd5F46BkMWXsyCRgF3UZ22mTAfniAxsCCZmi3vL91wxvjGxV2x3o72H3vuK7a13DUNJuYFsWcWser7WAhrfA7C",
  "key18": "4rAWt32Xct92SG9HJYQ4LEFJUhR6f5f5ezBv1poxYP4HsjCVSibXPFh7pTiX94V1WhSKpjb913aEeKuHGsJvDAQc",
  "key19": "2kii4oufDxaZNqNtFfuhPsaN6k7T4mBPRG7Qt5BYS2B7fctR1Hd5DCxbGPfsRgjGfCFkvDjDdFRcs2WywFUju5gz",
  "key20": "58mfNW1ryCNAxCzvVrKTA1R3jUXDwF8t9L81CkJDFMbv4m7yKpszeHVnc4xSxqLAcAuwepSP6V1Sq8qnaXd5qCFf",
  "key21": "5GCYnhuAA7veyVDxcs8Y1azoWYKXAGxiJCpZmYPhbTvuXo65GuqcfN3Ba8H5k5gvNBMXwLHD7DHD3PdwcPKFbkLy",
  "key22": "5RRftte4QdPBqET6WhBXWP285yp7Ufh5XEgfF223Jrn1v6PsGVtE71KJEZXj6Q22zjt3qVr5T5hsj72FZbPP9ntk",
  "key23": "2aGVkeYqMNitbUdze2BXhirMUMfXjjtuT7YxYWCcgyb5bJzPXFZQKEAYidiFnoV415BGm4BqLdcaouxnatMX5oKv",
  "key24": "5VPueK25K1bGcT47nzvcguhuDYWWtgxiJ99T2FF8GzeXkQgdX4nuMbgArxJbgUZWv4i8wo1sVakn2o7dWCjZqevK",
  "key25": "4tgsb8dRVoC95eZ8o6UCGGa1X5tv5fSHq8mYxsyWpZG1773RFYjqd6Jp9PkCDxfbZccV6nacdsYdS2v73jsKBZ8F",
  "key26": "4W22hQimfXaL8DQdUYy8AJZCoUHELT9r85XwNqKAJU885C9jmeFqUyZopsNFTcnH2duCEKQ2yLzTF6fjiwuz9Hr1",
  "key27": "5QCKyvt7jYDf8RYnvUuujXfd1HvXGZaJqkinmTqdRSdyNhkTcxFkKraBmZzDjPcCrm372uxmYcnzb14XVtL2yhwo",
  "key28": "5Y1q95XRsxYuM4DNoHvPEDLMAtpszVEKYJnXw2hSd6CnSzpxPMzDKx26F4QnYnmREjHDJRvdrXtk9deZhRiVtu8a",
  "key29": "2pmvmSyEw5cMp1P7eds3DsmtNntTygg2XGy2N8TAqoDK3qDEYd2GeuEijVc5UZrV89CqtStCRJHqXteJ49fDk5xp",
  "key30": "3zMUHLmfTpwigG8nACsTVKaWEwgBJ8TRE6JLLmmvmEgwcKryNDQe4pS2uRCWfcdGXWjceZAk4K4ZT9aA8i3ZDaEf",
  "key31": "2r4yV8wDkNSUAyQg1p8hKQFkVd5AR1V2mFSSZ1JhbgX8a2LSgcpWr2PaQcVsW1sT7wPMhTrYWsHZcp4ZaEwo4dk6",
  "key32": "2hL66nnRMeqhPFoPTzrbwEHmKxNtTWCjf9DYaoedCeCDirpU8AW5PeZSHkjHqYKCewomxEDm7TNo4xpmdwMJxfB1",
  "key33": "2wRiWJLFpTqpvRrGZyNrdpovHqaaqJsyWCbUAcvmhaQijQzcuxiq8e1iSj2tYqCQdnotWZUSFp56UjXTW8SCxUut",
  "key34": "5x6ifLy5pwU5jTTYL6QTSWCVmehbZRYuJzYrkVGHLa3aWmczSMRDEZ6c82kDP7MP54yJa7DdKvFt8skBM52roxGD",
  "key35": "3GFAAtv9FEnmVTEvgBhmWmoQBfsetYsRBD78cU6RhFu7Jq1YN8rkpL3qHTHgUVsnoHnJ8DyxK62WsqWMYaYTwbiQ",
  "key36": "3RgfjbhF9duWM84jTubyC7YTJmBaSXbD4EuvdWv1W69HYeyXoyP85jfF4UgtrfnF24rH2F712D2pZcw8GejwV2VZ"
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
