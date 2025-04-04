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
    "5SaHa8rGaLsYrvdbP3RA4aeju2mtdaD4xwuhN5NdS9LZBL6nhEQ791STHDpeZtTjiyoLhnPWC5XyYCeBtFXdFrJK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fS4DcUsdkf5SZv2um7Y9rR5us3KMHQDmdKHT3JASeYMYdJLDDrDL7RbWr7TXRmb35p1TLyMyrgW37paMrSKxkJ3",
  "key1": "2x4o65nMUjAvbv78auBMzz5ggcjgibBuvYapLhfQaGfXu4ceHFzKe3UAnekTWXKfiLUkqo1Zc5bfZAPqYrVQ7cJ3",
  "key2": "59GdBuGs4LRzv8v7sesmUWJuTr6h3LRZdMvrJh5XQoaudcJTfbQwx5qbT8U961V8LhpaJSeZmLCN7SQ3mWsirEVa",
  "key3": "5iTwUBiJuBP289JQXPQEeeN4of8JnbppvNPxsM156xcyqqufcS3yW4JDxmqAcuLSJxCPRsN9gL89woCyZ1d7J7Tg",
  "key4": "5Vt1nLRdEJfNo4FChbTKU5V9jGHLMdVgJkM2r5sMUcAFgUuCHM8EqQtDs4EuJ5mwvcGqB22UPJ6kWeNNK92euevw",
  "key5": "3wWuqShYeXwDKsPKyE6ryMqEdxsEMM3DCYgT8iu6q8r5y98t22x1jPVYigdsZeZRLDoqkwAxnxR7ZL7iJWRE9Ybw",
  "key6": "5bPM3id96b8HQ93AeazpbuBkQw9g2CE4Yns4iChxF6pfdtxUeS29EUSjJskmaagQYqUd7zXohJPAihXzBZzSqanV",
  "key7": "4HtRbD1nJJJAwSizUBj8cmSk9cEoXcxsR4sw1rmWY9qPHEtRyRuujC8y5koC6MCZqzCSYWXk29z8rGzFEtdC1dnR",
  "key8": "5UwngSDApNDSGRct63RNVHVM9AjaQwWPVLQpj1aHjQC6SfQh1LqGUCtcZ8VjCfCKKF6CrnwngAc8y4TWu1MeQSyS",
  "key9": "49QfPtd6f9RoBuURPAA5TXXzBTUHvD5qfB9RgPiTwBjBQ5P1sPWeDEXtCheqREAjaTEjGBikSxvQgzZx1pxqCwc8",
  "key10": "2NNnhh8uACUSmpSCfPjsbwWFjoaTTKVNnxK5HceiMAYsdNJ8HjdUcwHXs96wfVKk7TVgKmZhZJ7VgAXVe4tAYYkb",
  "key11": "3usNjQKeHyrxYTBiLkkbFnfCEj6PZBmKeb5NcLS8V8DudWJUwouQYMD4wvyFJBzd76b3iKefsHepgsE1uNpgqU5h",
  "key12": "41aGUa7wMoBUYTucQdqaneGmW6oLo2F8ukeBmQGdJs4d72SPMSeUiMEsxZNrnCLbUo7QCKAQNMQVNASESbemgpQp",
  "key13": "3KBJybjt6coA61CpxniqrbMP5cEhjPtnMLuvvtKYQ2j8RSGrB8qiZfTTLtFkScuMJkhdTEvhLN9pC2KUdaLJtN14",
  "key14": "2Zw38x9QFXzBadCaHYtwPQ95FghV3RM8bvs5RnJGxcUr1L12cTyogDY66tsH1KU1e8p8EF8zEt8BqWcnu2ZxD4fA",
  "key15": "44Mz4e4fLQu37rRHacC9mdn85P36Mcq8wzyaPjephZ5EXoMXg538f7v7zafyEUfPVR89TfGfr6VufKQgYnsiFuvY",
  "key16": "C7kRBPbhc1tTmiUkq5tGv3zrDQMJYjYtuWP8i8qH71vwkQaCiDU3X3cqnD6DxePnaV6wGH9dvAvtmphZ2sj1dSM",
  "key17": "3ZefWRb3QuwcFwYfEaco4A96DHfYAqW8z7PNnmJBHyn8sXSY4YPyU8WPsw11EGYAwzSmWEw9WrD63j2osaYZhYiu",
  "key18": "4Spp6UHQNHSHnXsTe6c3srSP3dz1FP4HR4Xx7jzb582MjLnCzMV9n3YKyCbBnnFdoZSEhjQGFhEmpHKraJxq18Zi",
  "key19": "3Rfy41hkPHgYXwiHFo3XUH9aKkWzdEoR8uK1uQjzYKCpMDphTjicuKCb29BTxBT4grLvfru7tCc4xEpsM8WDvxmb",
  "key20": "4HM55fJB3UDnAqorvKwJvVD7E1QfcyZ1sxpXu4CPeH7VS5tHWKhuKmGQ1YJ1HDGMowv9HifaBRXkiquAvqVDhZVS",
  "key21": "2odSdortQmNRMhAjdNpyDeLLwgfv4tMCJCGx6QhRPrYUTdewyjkPdC7mHTLgTRybajvj8HFCGy3oSV8UeW8aXFqk",
  "key22": "2mYxuc1D9ytNDPMpo2MWt8CquqqnzanpRAPVUjgvE2hSGK6cf7hNFYrpNddqqJK75kPENqrrtwfmLbukyuy2Tfsn",
  "key23": "BpWpVhu922vo4SRdnHLpcpxN9xyevbeLazmBakUtxNtiYLh8vrVkp5HUbZcBD2PbEmGK7Zy6aPSEhiH4vgZ6SCm",
  "key24": "5seHWAK4jJT4XyVeFjKFQGv3U2mxSb3MNgqtaEWYfwNMFLFF4AcV8JnQZEVsA28KX1Qbh4EAhn5tUstcBSVsjW1S",
  "key25": "4bnfjHqPpg2hyw63eaZCp6KEB2gq2bWa631e9jMhetgK4MEU8dQ5s3WEZUjzH339gxXWxqq24NZ8JU2nj3bfD8dy",
  "key26": "8gknVuNZEPmfGcArNMzxT2F9CnG4DyR1jtG4xsRNSyjVbRqsLWorfxVJJhRLZTKojX1u7fLx1fETdE69uFWUzyn",
  "key27": "4HKvLYbitffZsFD7Sv7ofiSiXJgBhSH7Pv8Nc447WematLD3Q65AKwxUfSJoT93SPJ6NoHQ6fyTfgo46kXrrwgb4",
  "key28": "4Yw7Ykwk78pgcHoWJsDyFbktbfkoHkzkNnEpdxevisTU14rSBMh6J9HxUeDfWgsqwCToyxXgusEKc7SjB663nVsf",
  "key29": "3mFNi36NFdb7bht4Qg37VXumgLrBCRrrkZndYwLZwbR4tYsy7SYZQAmDoo3kCsJHb9a5KUmArRnYMJsmVMEPJcAM",
  "key30": "5f1vqp6NHiaZ6MtLkxk5aYUgW3up8APVZc14GaJjHKVG6UzJxit3RdLqc8BJeLnYGbUrf5BBjSnjZYzZg6BQcUF",
  "key31": "3RHeAgaHid69K9rzE9auStwKQajQg6K8TKb2LiL6sbax7wrzMxkHvTMVKqECN11fxK5VfWHQPNuJsNvc1vdFi4Lp"
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
