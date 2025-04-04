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
    "2PKi31ocoghcDusg4DNDaSgFnAGrjKLZzhnWn7fcqG6sXcu6XKq4Z17CRucg25Cg8ufx3ZZkzXA2Z7hCVVxQ7i3E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5F4WZTcohpGxZCbc4Spf3kFE6pNmXyMyAYVBbYqzFhv2VJhGaayRfoeW74pVGxwQycuGCL7MYSDKzoMzuA3mGYVf",
  "key1": "5eQWCmBXN6PAdAGRCTdGWLZBbMKd8FvbKnh9ZrK87XF7kDVYsoQ8NYgLASByFEc6ZvxpDcaturaz3b7HxemDPePm",
  "key2": "4jTax65oMyx3YsbMNVeUKZbBzaqfnKzGNJcqeR3Z79Nw7hjg8a7tcRgMnpdQ1UyJNxNHTdD5uGGEbhuzuEafM16x",
  "key3": "4r53cnoYua6y5q1be2Y2i7bNpDEpdJTxxUyMzEJ333WfpazGmpcsDCo8B6Vq5YypP6VxWqRQq8BBDKXQCDYccq1z",
  "key4": "HEuhD7omA1XUyxEct66SooCZxzxNzeBZYvkcMWfJm8yjURVfu2N9c4dCFuN7ysL1y5D2xPXBu4bP8TB9AKENARs",
  "key5": "3ZQZX1DJd2YifLv5FaWKsk1QVxb4SoaaXvyPujnUvXBk4eGmjjkCeheo4crrcF9i78GE4ynpziY2tBnThJggzLyD",
  "key6": "5PYjjspTUvhqHDcmfycNVkQ8JqoScNfxLixmRcVMXGZfpJEq1jJiGFoZFkBARFXhzYkeso9CzyJQJxmQiKvfRzvR",
  "key7": "HeYRFgu6bapTC2W5BeVxmK8FMstAwsCYmVwTmZGEK6y66fFHa5BuqJrfqe4oPVAMFhypMFX5L6iZP6n4b1CgUF7",
  "key8": "4Jm17hnR6UQ8MYPru5Tiijx8fdxbtscA13FuwgckZtVvDRsdkyN6XTi8UF2jj8i7Yh7EagiEcKy1XCNnMvwAoBsc",
  "key9": "5uMGSsayzvv2N5uSh7FpvrA2bPbgwGTRABm9eMycKQYNZUiTt4RGCkr6Zw7uuLUnwjdSvmnrhK87JQC8GXVMmyev",
  "key10": "2WeraVErKVTY3LeTZzhKuYJdnitixFntzqbzXHvjaQimYVfUanNj8YJgBjViNzYizvywWEAVgphGjAKsVs4RMUqn",
  "key11": "2qMXqTBZzFqThPQtJrHfu9d6XiZPznkQ6ityi7Uzxf5v4uhcfdBfhHktD87kf3vZmer8DxKtJiTpimkSC16ovowp",
  "key12": "3STYi36uu9Yex5dPiHAcbrKK8HaFHJ4qKok5i4WuDsjWpLp5PmyJc3aPPPaD9RYcS8CwDfuujepJpGv9Q9LxRNVi",
  "key13": "5A441QEScKskwGmSUSZw3DxKVuxyFB6V43VJeThB8iyMf6pLirBnEip7FSHvCxeUoXSEmwvcsdoECt4N6n1K5b8x",
  "key14": "4Xy8Agm6uiaEBoEvaJ5pG6Vt7CTgKBsb9Qvbhp6S3Tiv43B19Veu8VQoneq2ZwSSnjLVpcb9tFL1vZVbGYbbEpP7",
  "key15": "5hx41uxzByehYDhBJcHX8fanGnknEah67mPDUMfrWkVvVxriea1tSzM2aaAXjs7MEAo7JpDBgEDRRu2a4nXRRsMb",
  "key16": "3mfywCZcnzHPiFM2yEGtodQXPfNEw5nwcxmdqW9ptrQ8ZgGkZhRiTins6rhHfikXLUBVjB8nEDHDiSAcaSFvZDwg",
  "key17": "4sjiaB7RptCZXeBTr51Czh3QBiHbMhupU8kyrfgpDJBBJ6pDidPRFKXCzMdRKXRDdYT4VhfuXwk1SWBUqcFfHasu",
  "key18": "4QiZp8Dk76m72nnbwtMfzbiJfYde4DakkDSZycykzSBDDjc3FckQTMd6neKbpZbXTanmEzzj7DYmNMZn7Tady1Jq",
  "key19": "3BCNyuYWpNSjQxgePzdS8eDo3irQqQAHrrJWFd9raGRVFjNHSWqSi6fJgVV6PL466jqVHN1W53tvkhP6qbkrmiKA",
  "key20": "3cGSL9KrxiXje3LbH6nFjzLTX5aru2dzUPggQrgGxDF73uzQ8eryBQdxVw7L6mL2hU5Q6iALuD4G3LVa2wzcSabb",
  "key21": "3aiMMQyTwZL6HyAS9x2iVkPuVQ5ZnUemdvcPXUUuYMhpicBru6S4uP4Ex4UfiPzdp1e6TgEdnoouKcrzL7foeoNj",
  "key22": "4YXEHWZYnPXBGSLzAHFYvqbSVbxJZHgDyYbjxdc5LeNTo1dQRPsHdWfxf1fAhYFC7dFQyaNEszASwyx7FGRJB9S7",
  "key23": "2HtuNbLDRagCpL26zqaqZeu1X5mNn4Ko7vW8kWfohEgBxhdHyJnPTymPU7VwvYmCXPkR7tkqhubokGs5zy1c8pc7",
  "key24": "5hCPix5GsMKPhh3BuaSrKW1LB65dNvz9Agb93oVSS5gWw87kJb1v87q3GBZjC54G55Uni6q587hQeDH3D2H1euSA",
  "key25": "3Q4HLu5tS6sZw3EQ1HKQdrFCEB6w9A1BvUDXqpixq1gjBU54Mzde3xmvu9NGc8Vz8ctWsGQ92dKibQ62HQyFmjf2",
  "key26": "2wvtMkryyqJtyZKfA2udQxqgP1MpFdVAv9iuJrv45QCqbK8yaUXrWHaPHGnfQjVqZMAVC9yKUcEE69o1EZTJQBPC"
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
