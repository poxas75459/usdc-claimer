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
    "3Mx9mdN6FCCi9eMwQ2K9UbtatKojcrQkYTam7VGoRWTUtBa1mSbdHA649FhvF8y5vLhaVPauqhN9uy6w5Ud4MNfk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Za8eSKUMuLCQcY7soZ3DAq2mu5povq4x6Y6uPU7cpaghhxJyP7NaeMqR1URVs1wc6eTrh3pr4QG1hfQ4tuVpLR4",
  "key1": "hv6bSQM1e8ygJPKTDt2n3TnEpLgtE6fPvEpv2pMNG25GR6EdNHc9MzoXsSgdAUBBWcdVXTTL8wpN4tYPmsFHv4n",
  "key2": "5t1MSQHMybdausWFHro52sKPcGdfoHfAUDKnb7JE1Zd1yQ8v1n7JcAwAHxLuqY5apMuZYCzxhqA13SxiikCKSdHv",
  "key3": "2aZLtnr9ZgxZu6TExNpiraWN9wY7Tj2Xy4uUsYzRcYbCUtj2jJXJBH7PDn5ttV5yeezLZSNqm9F2HrrUxVdKEBsN",
  "key4": "34j2jYaZUwJn2HENBdMZNQSLPBCSJr57KCrd8dWo7i45BNpeLNbzNWdLQpiJ4qubWBVfsLBFxnmr4G5pGmWxbKug",
  "key5": "2oDEgZtKUa2RsgEHT2u3x6fcxqTZJ2oE4128C96frMU9hhic4eavBqpLC4CV5P38KD68BXxLPbYFmCg963BamopJ",
  "key6": "69uCt4oBitwsMQCbi3fNURZiaaNT3gJQrm8GSAx1fV53sHJwMS3PogRYp8PVn5GJVR5xSVTE1j1fYpHa1XNgyj6",
  "key7": "5uTtSfiRTwijjN4QYXatVQHT7b79K7kUJu19qTHosFd2xy8tVf9vS7bHwsVR4reJ3vjF5fQqbsFkZSSDGestTgcW",
  "key8": "5HouPeVh7vq5YMhW4RokmhJFx7SKy692CQpPqLW6FnSNrAP7dqF1phsuUm2tBTz267ah9reu3NmXFvwuJ8AE76wy",
  "key9": "2gsXVgLy1epsHUC7fyYg2Y8Vyq8aS5eTD7RkkCioTYTYEs5yJs8qhW8nR3X3f6XsfHUKWXTY5zCZWxSYH5GD44f7",
  "key10": "7LQBz9TpBo9MdAnq9pLCt3g3QzdKnEnLiRfGsyzbxCR5pbFeGeBoBF6DgrDsfgbFGSMykPog3Dxy5r3dzRADhUy",
  "key11": "4Jwyg7q93vggYWr9FyXybPv4bwTgXQi31WpxZA9MFzgyz4UPgToWoW15Eis27FNafiwW2N9bhrwd4xiaw9L6QLPX",
  "key12": "3fhc1FKRhnuQf3tscn4dska7tJnN9Czt9Uta3hL11oE4NA8uQ2CUEeF8i4DAkBRiqQWrqRqzRsfGuhj7FkgcTuF4",
  "key13": "2hcyPzxjQCQPZ2a3XkthAyfb13WqS9K1JmA9pWLYMbSbSv1PtwVNjz6RNy2Mzh2NQG3a5UKA4sBhgpyNMsqk8UvJ",
  "key14": "41c53MZoZbYd34pfqsAsVxA2AiFuDB4XMTMpx6oYf76BfG5cgZ5Ykgwtp7VpLuV77tRhmp8cFSchqHod4KjwyfEd",
  "key15": "4ngV86jjb9xpFsMcWnjvWSPsVk3WWNE6E6nMAvgnxpVSLpYc8kLZFu6V6qYLAo8ZrCvNwVCcAJ1CHZYd6KQJTQvp",
  "key16": "3qzcCcWvMKqsctCvuqNUUVybau1qbhvHDJxTMKVcLUGaPtKM9wYqW8F2hkKh665UvSkC6TnfWQSSAAgt6nomH2JT",
  "key17": "W5GdMGJrbCK8a1Gc9Yy9ksCLtDsqbiqiFyXe1mGw5MwSPC6eGUEcG8rCBUvCJSADhoADhgNQkZ74xUrBaiDDDr5",
  "key18": "2wy4UHDRJAF4aBXvwFDcjuZGaCPfZErDzdd6P5daYmzXEgrEThGHBWhidPRLDizB2Z2QkS2x45HDB4MfQyuSST8d",
  "key19": "2dRW6oEnT6zj9bwd6iSNBghRXKsH66iNTdfT8a8RrUYHMbXMyNGdMJN1esjkZxr4a5vCMAYqcFQQxacyTQCz6WaV",
  "key20": "5QvwPF9zGaYBBfkWtDARGM6Bae1arJ77sMVrcEPmtNC2Kmn4vhCi24bzhUYmUnGneSGRBU1qHoE6MYWcbH1DPT3n",
  "key21": "4Q5Wxtwgw3gELM2bepmq5mBfZNFjzJp4VVyxVAVcmyArXDjxmLvCYicXC7MzMTQ8RnKS9i2Kpo1yPHo8pcmLcXdb",
  "key22": "4kXwCztLsqEqo9QVhiDGK6nZcNYiuqnkQUSHH4P3mXGsU6t61Ue89fwk29QLDT5vzpvCXkr7hip3iywF1nPYT89H",
  "key23": "3tYCTQ2R1qQbcg5iEmZJRyDcu1FzR4paa6Z3AQ26r8HeWJkCnVTjhETe94gSJtyh55Ep2StWeJCzZJbdmAGzLzS6",
  "key24": "35K9EdPAjoYoZZX7ijH33emYDqX41S8Bye5fYcStPdLsBGuz1S617eYGMhUd5nAdttgfnM3R4yHR4mzsq1yWZGBu",
  "key25": "2uQ6giX4Uh7tcRYJPD3ouPxBUJPdjnjJTmFKTm126VrKs3TRkKdz77ocLu9m848HBtushaNRMtk8EgMLD7V2bGYb",
  "key26": "6EtFL2ZmnVxj7pEJ9sr1ZDyE5BZpuZ6HKwDzkP3fEKqYLg3tjanein3u8pQNFUSZ5UAWeJubJ4JQSLQ5uvjQqaU",
  "key27": "JJ16C5jqWn2HdqP5PU5sE4nMXBME8zZwTSirgCHi9stdGaZ5UXd71HzLKHETDwbp3vEDhNDqxQv8QNLQArguwt9",
  "key28": "a8eEWPaLerQ2tVCuSRyzLQwxT6ccmvAZTTjTm9aJ8ZNybSgRiH3pAG8b2quENHhm9kpJ8mBxUECR2fun1T1BSCk",
  "key29": "5cJki7BadiEm8fuuirCtg8d7kieakWhKWU3LERAudJDy7J1nxqKTYYPprNvPByXgejYKNLQJpifGrhFBvMHKD4Fd",
  "key30": "3YLhaKRv5mwwjD1XZARjMSYjvhGtKAMzKWjmEtSKZzjMXAGpMUkbdxSnTtknvLkog6f8WSozojL4CaBumH4kcvFu",
  "key31": "2E8a5b3pJgSReo2DyNMWG1U52WqmyAoafizSxG6sFb6a3by4F1irWFJvQzAjQBD9sXd5TXUZkM72tHX3qgCbv5iS",
  "key32": "51nsrcSmUhdbwBW3DwEYsrTVWxxbBD8fGqoND4xKHXdJBYyrEjNyusYNqoZZA4uUC8CRoc8JStgZG7KBmhubmnv7",
  "key33": "58pAJVpYNqkpFdxWKuAXYT3zK32MAbVzeRYvpPgy7tKiLBEPWchTsp3QpT4AmrVDbjurYLujUFXHBr14uWFsBw6t",
  "key34": "3aSnqpbMwBxKVK4McsBL9Xw9W1a55Tp7ErwRSu5MEPjtzuAuFMvQgmfuanFNdgGW5hLgUmxBr5cw3QJEqBHQZRUN",
  "key35": "3xvtDY2Snh7bguNpGZANNxsDkQXFimCw4q85dfMrqPpJ4u2Pe66SBa6c5iMhjBgDmYjUtEtDREiQYKAbxS8yCBmQ",
  "key36": "5or6pdvV87YnH6m6kRu7oez7R8aGQ8LQvXPTK48s3pHGiHQbErWHKxeCcAHB2GyCsUoHs1civdvqXmvtVw2fGb3d",
  "key37": "4AjeYqEb6PuTnm1zBanUXpHMYdL9ZdJMpKAMbGYo7d97i5x9dSA3jKKYhJCUAh35W8HELFePWxE36nRMqXdCWenW",
  "key38": "2hZdjquh3A3WSud3wf7cZSeEj9nT8smfEQ9mP7ey7AJVKhLttYHYJjg7AQeeh7wsZawZs3iAfDJzL7t4o6YM9p7c",
  "key39": "5ygwQAHoxfdzVSFLvVHYSf71XmFikJ8jPRTR1Q8QSECgUKZcGbUpEqvvSnzNRQYvc7n4UgxDEjDM5wstF93SNCcZ",
  "key40": "3XZJFHiXF4Zr96W58iYbkeP7bN6eLD9X3CFS7HaMxbJQFfxjyAbB4RgxmBX3eByrPwU3eK8eZhvuY8kFqB7Q88KQ"
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
