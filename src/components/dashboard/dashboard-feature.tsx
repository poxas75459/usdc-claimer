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
    "2rtHaUGKMwDu7taJaqFfXNtt3oc3tac51PVxR7KjfW89K9Svc7t29gFk2TLNK1iVc6aEPKMAp79rB6L2y8ybndU7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UjLB5xZxuMreQsDE8Rmu8LED3scfYQh62QhPtUtdGao316MnTmv7bt4n5hwrMNKeANu1jcYxSykoHhJhHU7U5Rt",
  "key1": "3iKYdXCQDfNk18gSaKMHTFt5uHVdqoHtb7QL5n9oYNgebhmWgf8U8ccFpC8WvxePwXCpH3JLHxRueDSL8SuXYkUh",
  "key2": "3cCKYhP4SLn48HSCMnpkMJb1VuU33nRDznUh84S5LeiD1PWcCGxkWnhqz9NeCdeQwMSLb7SF2XrnPFbauXJAF59u",
  "key3": "2LaAMCeL2zwWfW7oKXoLQQ2LqAnoyXGRLCetzwgFCPrDtdMBFL67wQB41gyo1UtjpahBTWvyTZsWnXQJTchHQGMV",
  "key4": "5TXYYQLtyDiDz2Y9Kf1NqHZDaVyBhT4pwcNwBvNd4k5noJeRbD15DKoghXvRaHz3iS8aYa6wkeKqicguReHCZwH8",
  "key5": "3ywxvEjstrtLpvPYLfpHp962xNWCGeqT1KbnsX86sDLWFjw6n5nfANcpkjcdcgAdTyd2TsjQ427PFchYo8v8vhHc",
  "key6": "4xDWxqujrAm7KpA3S2ubG3Uvgp9miT8sJUtuJz7jaEGPu7YnVRRWi71Tj9fcumgyRjaqcQudnhUoX1q8MGYA8cs3",
  "key7": "5iGvAB7unQ2jewAqrAHkTV93vUoAeDZ6A5DbdvnhFDx4FrLtMzX8mt2qLxPkpfmd6v8BbR4gKfq5HaV1ZxgNfEEY",
  "key8": "3hh41Wd1eqTKiATwGtUXwEJxhronba9zUpBh9YWn8iH6ctmrJFFQQq1vEbkt5u5rNfEkJNMxjZAA3wsM1mdDWuSz",
  "key9": "4BrPmQ6jWRLuh2iDuRtVP4C2uMGp5mjxPdzKNVHeCjJGSZ59bsr4W3jYKFHpupgcJDNJftj4mG7QADcudD6rc6hQ",
  "key10": "4voqKzkuY2iDKhhB4r1WLS2UYJAS9p2QbLVxzt2MJZZsKiTyWQqzx4ce61Vid8ZzKXA1isgM3fVAYBiJSwuSfK3T",
  "key11": "2Bu6NmUCRrAF82pvhf9SeHhyUkr7LMYtNbueZiGbz6c6HZYzGF4sb235tqbMzUS8HttCY7wjx3QAHqjSGGq3nXFY",
  "key12": "rWmsyy4LTLWAREBKvxJzwR7XpkDfYtaMbmtJqtVhLYaHR8skpdnnweoGxZFyFnH4NnoR2iXVxHN6DtRwwuTQZRe",
  "key13": "DJ7Q1c9PFNbdSH9T2mWeZFwnCvHoc9tRvVJyd264j62H6XoEtPo75iB5f1maJEr75ueu9Vg7RiSaS1jTRV2YwSk",
  "key14": "3mMav9Kc4e8pkFTY57HeNWYkQ1PyK3zunzWjm7grxQYoaTvqi1S4YwnpiZtygBoMdBhooU4jb3xmKiUDdgmpAasA",
  "key15": "gpR5iTWZe4fDWeBfTa6dSguCDu2Y3dwk2Cp2ZhkHn89LeFRy8DP44LofQ2wCgankHDe8KnrXhgwn9kisp7mWmSf",
  "key16": "61ajaEV8E6kAxuhbgyacge2RDUgCq4ZRWwra2dmhx2e2KQecC9dj86Fq5fxyFta9KodVh8bcLuQVxPSBZYCvz81e",
  "key17": "4UFrM8qneDiWg9cP8xmLvUikXtCATSPtb2atYQp7eQE9iYogohPTEVY59axEYhLuj2tjNDiB1wenvXkAWHNTGShB",
  "key18": "2qBXXD4ZurtjynWtBUsPGdxhvZRmSpecUGi3cpZz1YwUpJeWAbSufaeVMzYXJfuwxHRexjagn8FFvpTj23Ffui6c",
  "key19": "2sbmm7Y6hzsgBDHH6fnPoa6mtDrNNr4KqGHNi9NJH9Mes9uYEVVHK7uFB1hRbuodjTG3uyqguwpZmaPnVXmwv5AU",
  "key20": "4kf6c9QwD57GzcsKj1QufzyMsknEEu6QdhNzdwpv7U5EYzLi9o2AVUHEBFtQeJG8XJSZK6dEvdueFs5CJQHod1dC",
  "key21": "4g2e6JNFUWyz6pfmyV7YxLv5UPsMkDZC1AdmuKru2YLNiVDvmFSFsowDTiYjuvj2sxKrMtbWL6xR4BkcWmy9thnw",
  "key22": "2iSpB2qptMHUginmAxtrukfQ8KKAqeZ1SLrDoHKVwjSA3QyRBLucV6rgsZTPX85qxQ3J4zF5iNnQfQUymgDdokY",
  "key23": "2FDXRgWw7PTnrpJpXBBZTdXz9a3K431mqRSFq947rLFW4tFzcHW6yoUz8GonenVRRFqmJVruLXd7ncyvTbkgigzk",
  "key24": "vrwFsXumwVM1D4daf7XQzWLM6pA58zeUuE7E6t69UPSHZCuKUFNv9GfUYoF41QJ57Ptbt63ytH8qpu9UzuFhi14",
  "key25": "TENwEjwQpyTvC33b7yibthiXnEPtRoozLb6jdWppdU85cBxrJGu9HFN6b6uHEP3hryad9BPBnDEQSJn7fif5Gur",
  "key26": "z5c4pY4U5FvPLHh36iXw9NzNmMA17nFU4bWDoaEuVqERutPf1gFQcCoSLJQ6PXsqhEcixXocVZHwGGfoMAQCPiP",
  "key27": "28xAEq7cJjL9RA2aBzjFE6awNjFt36mpZpudYWndfmckkVDB55TGQEpAJhV2jp8ZUrJVpHskoFRxuA4wuYTVaDsz"
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
