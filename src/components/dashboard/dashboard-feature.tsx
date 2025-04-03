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
    "2PV8WSYFGCVsQafSwwyQkytg3Fu64JC1aezsyfRS91jYPuS8yMhT4wbsMYiVwz752TnZF6V7mo9mpGKYsHoiZsDZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56uboUZA6k1Q4ZoXwoHs6G3M319h6rrRyqXsw8JkzuY6ne9KPF3zKgaNFEHv367ZJxBJQv3bJ6Wv2jfmoiLmoiXG",
  "key1": "2AdwUVHW8q55DgQVW67VZiGshBFEde9t6Q8eS5Q515ckxFPQZYsDZxivuCTGJoNHyg2B5yDCqsMV88ieKvcxumMr",
  "key2": "2jNywUmiQAaPsHuSQHZVXjhgpofzybbG5CYLzUVGyrDdW1QuJbs9eTv1HrQXLxGSPbr8wRNpo8bCb5G3fe6rjjsx",
  "key3": "5iNX5orS9PsGhh4hSWiCvafy4s5aqHzM78eeSDfkdziMtyKc12E7T23nTYGS5YV6eRe12gdQjqXN5KWXNNp3T41H",
  "key4": "twoLTTiWJpLWj9oc91fFWaypkfmigzAphmC31rMdQDpKEcNM7izvVXwpE8vMmqVyxuuKVoVhgTCAWPE3TXWVkbk",
  "key5": "5BG1z1RdkXSZX9YdYLR5i97aruFNXV6jmYQRwmaK9Z1As3w4SUAiJjiSZkp49JqUTEd8GA8MqkVW3bMviXPV5Qia",
  "key6": "54tsL7EEFnpC8bjgzsXzLx3CxH8CCnnz1FJXtUuwQx2ah8m9wWzk5KKKcgoe58Ernsq7yHND6RrvG9kXrSAwDk5p",
  "key7": "4v6sSjM6dceYqgGLYiM1aV7d38jda2UmanAVzaJcTXxSxuV54BWzMbzfSJxBa21BijtimHYAJvhe1L1x1wSkDv3T",
  "key8": "5qKmQGy1BF2o6fyRkcqW8yimGtRLRSegEQuZ6yfqhxuNZgW1HwaTHNouauPRnaA3aKa67mZeVE7nQuZih5t7aPiQ",
  "key9": "b9QnjJi1svztiKjdkZT4hRi86ZL973UW3jXifHyqUon4EAwPZ1xRNiX4JnKZ3UEpAkePkTaxjqHNKQXG2jmvBqQ",
  "key10": "2ktMkwwwiocL7sk75zYkHzoosF112oGoNfr6KF9jZMJ36ivXMKuP7bZVxytFETKkk79ZY5JmCFTyvQipWy6xBh1y",
  "key11": "3muV8VcUzSLJtBNfxGWLXER8k2LVfYUtktC4wqLNevypq9gA4LYMfBhea2L9datS3aM2naqT6i47Awfyo9yvTV73",
  "key12": "4NWVHeQEKXYqgyrmZjK5HV83Kbtyvdv6mKvEoBQd1wHPcYnsrzeMHps1smyNEwXtgviWVk7fspT8yG3Rid4cUu8p",
  "key13": "3ucFzNYfxpdK3evq39xZm9CFwJjedW47KYRqEPun86zNgYKXHneYw5ccVimGnVX3QG6epZd4gi4T7dwiwfNwF19U",
  "key14": "21sSHuz6qHcxg9RY1C3cS8gux6Rn5kYjrfYSnVwbAWyhr5rhn8DskBQ4fu9gzAvFfyjzuTgS7U1PMWAE8EjgwVaV",
  "key15": "3bZ1mftqAJfNFYJmtyBDoXuZDxeAnxiUQUcRo5whrtTeA6Kfy7BuYo837gygX9VL1tHi9NJ2ywJauLJ6bxkz48ft",
  "key16": "53Z9HUpV7sNPrdz19YHuMaPYNiF6bjBNkCCvWEa7GJHRGxiMX2y2Lrhkt7PqT9CNABnDcSP8u7Ly62kEtHc9uZf1",
  "key17": "TZuZQAzNY8yyWq8sWqh6ukcHC6h9kSeKbekpVCBpz5YkNVFJkKq788AwcE2LnFgFGzmfeZHrWM1jNqbZaUqNhWm",
  "key18": "39VspsK7awVQbiGXQTenZ6UseN3tRa4LAqceRm2UpZReaYkmAWvFXY9dc85T1m8kveMcTnGfEG7NcLa4JYsCiYQ2",
  "key19": "4pMpHzCoGexLzji73j8YisjGeoSHsNFrHETFvKw1i8ADE4uaWCjdmNCbVsu9HbUfjeryQiXwFfvAuAuvyZ7KQJgn",
  "key20": "BP88mH3Ys958JQxkNfi1xX1VEYBrhpUg9UuuCJipCEtF2obMzXzwj2gLoPNiDPfBrZHCUUq6CRMMJ87ixCi9GzU",
  "key21": "52EQ9hFd4EZaPjUfWuBvs1eWmgyfM2GebaAuqPNTfUfUZTyxEG73H5jhNHHha9doCf6AkRNYdFK7aP4RyPe1VPiQ",
  "key22": "64KditSgSFJ84SRquRkM6rvLWvwDA6SXhqtLwwrjr7U3axh1RE6DFPbBU73UH27fkmzBfyhXZ6ECWXRCnUYf3ido",
  "key23": "3pyaAB7dVYvgsLZ7ich6a357URzqHSqvKcxaJKUsodZZ4uZtp5DiGgWwoDuXZ6Mtm5GJSKrSZHsTLnrSxgmWu36F",
  "key24": "5wjoTjqgzN1Yhv5eeT3z8y5VUJ9GaQ9SrUEjq7ypvy5MEoRMeGYjDi2FT7rZBTNhx6B5jz5e7YRAEh1wNAjMsD7R",
  "key25": "5CMdQPo8ZSBCNHRzwgyh9AfzKsChqy72bYrAR3kPPeAHTrravRt5tRo2WQ8Ktqzu1RCn2FBTjCRZRXzB9zsWrTKo",
  "key26": "2TXGkR4BNAJsW3wHCuhYNxuKBMGUcRwfiD2jSdWskP8g3RRqB2ZnPeNLbdjZJkaiKsi49MigodAxiGUJvzhgkf7a",
  "key27": "46DQvjW95wKo6jn7PGU5cNVCDCHp4cmB1vtxxpD1LRykZMXFYPvodQZP4AnS9b8sUXrUsSiaowcT5pg8amVJLh1t",
  "key28": "5bucYQBR7RqyCYTja3FDw1q6Ass8D33dDJLbjre2etcqhx8SQSMRDKDyWM7my3TEjYBacpxazRaoUCDnhpAWaHMM",
  "key29": "ie2uPe6FkHCqNmnWVu1mHk4cjGPCnQb1EYnBLgNv8GUoHSiMx836iLHuRBM2iWV8NqSoniBoRz1C2eKkM27M6Ws",
  "key30": "4eZki1eixTxZ3c3u7FmNFrA4F32di8mTknTj7SmRXctz2Kfak4R8iGj9BjCh64qz9Tsu2nLpAGHZNZoJvgoBtUQj",
  "key31": "foPce9NrBi6d6SZH7aHD8XNRcNzCmstDndGp3eGbxeYYsTvk9aSLT3ibE474ihk9mcqxbdNg8SBnsRPz2xk5rdU"
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
