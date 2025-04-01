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
    "2yDQFCPbnz15sFEZD8Xa6U1YkpGhd1HUCLbWwtfbFKuPAJzbaAPos7B2mC4T9jTzoRsQ25ZCYzZGsJ5qbq7TZzrN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4G8qgrgk7oAKgP37AWZdrAi72tnuSq8BDmNhoM2PQWx5LLwF4hTYCoNkjT2JfzKbUK16TotCnjeyDkXRQ9VoSsNF",
  "key1": "539YYNGjNYJtUXc4P3kCEE2jmKBPAMBamHKGc7ALBbwxxfNjySTneNsHbscRSdw4zmfYAcgA6cEgnfXAo9beySD7",
  "key2": "3ZPwQjhvXzrwNbFjYw5epTdv2nqfgsmq84Docdq6AvY5ATC9pjcqFjVHsAnCNQeegpMd3LLuzU6YB7hdegeuvCKB",
  "key3": "22JwNmxP91BprHXoNLZZ3ZH49tXqe2sNYAoBhHqPhMbWeKH5LhmuzspyRsjZXnRcc63hNqimCfHc9Mux6ifjqZ4U",
  "key4": "38gQ4bhq4SyNGTUys6P52wawHuQ9CmBqeS6ah15fhNH7NkG5NLfJkRyGmNT79SndGGmJfDHB32uoNGat1UVZaPn3",
  "key5": "2jdQZyUbjtBRKZwWemUdS3MN11z2tvW22urwqyBr4VV2Dmpp5xRUN3avys9LJe1SdkyG5pRfUKRfmEMQbKKUZeAs",
  "key6": "5PY6xU2uJWSFh7VRrTYrHjPV7qvDy4YYaXRBWTo1Rt8QVx7cyubHXUUT5ttaqsHSa76uMYfFpFAC2wipMkfNY24h",
  "key7": "5rDwuV5aXueDdJjEU2cyyAkpycNhmuFs3X7zgyMk2ff1tVenWcFjz4wyAu1zA73g33eMT4qZ6HSCFxoBtqz24jXv",
  "key8": "2zNmJiXSFstLm2TwumvmK5FLTHQ3y5ce8bhphfLUZJThg1d1nutARQPa5wS3AgoZdTPtbbLRCiDFrxaocVtW62Ki",
  "key9": "5ACkocQkkgBnkHvyoPW5tSbZXkSLBJ1eSKbr85DGtA9ZtwdU89CjCC6WZRX1NV967n9b5t1BFtv2RRErRnBjGM54",
  "key10": "2kABAbBPFP2HL3NGW1dXy5fqLieooZ4zzMxTtduMA8fSvZX2dLodrVGK3eeLrikzUuLgPFjvoq2snru2ato9c6Cj",
  "key11": "JDPjmqoTTzhaKXT4VaknRhj6bkeq5PWeLVUXsY1kjc2M59ZajWVetGDH7SXpRGevVNJoderwSSDKoKeWbCTXHPJ",
  "key12": "59SoggxECdqNTuK16E23XJp3ndbd58uArembgvha7juN6CMHeUFpwAsusRNCm7SgkBP1HDreEZbCV2kJ7fFVQ1Xm",
  "key13": "486yZZL1TAcfG87A9MSSoD2H1QAnvrdAYSCWPyxR2qjos9UqkQSruqkLgKVhvXtKJvQh3R2E9PCYTXt8Qtq384Gv",
  "key14": "39sHmbghsCu25cs23WrgLJ3ThngProHC81LZwkm2L9cwicZ4rDFUyXiJ19z8Hqjsg1qK9U3bWcidMzfeNbzNEXBy",
  "key15": "5Y3fm5MFLL24dUDf5ofCH3xH8CsnLrChPWnxAgS96D9APxjSvjmc9T3GJ2nQ5QJy9EhKRXN3tqftXmKxsVKGEovy",
  "key16": "5BoKXkVa6vNcgiy2Unm9rMwXxXzxQpcqGBfu45TvLQ26ieu7oUNKtSYKFpRAEPc7pg8mJmbvuZRqqeTwEcamK7T7",
  "key17": "2ArjDLxFaVn1jGTYWL8ML6JQeKeWKu6FGZz4o9xTmLh7NnfxgrUpUWn9FFaGv6jcMhVkdRnSD779z9NiztyYCWFd",
  "key18": "2fyzgCRpAduz9uKVkztQh5CJiEjKoVqKWxm35Uf21awNtJLvTPwK4f9heCimfFdZ52CvT2wRbvR5GpKY8gXKBiv",
  "key19": "2FSFcMxzyQDkp9vaZJESa3fjDcrMGxjEMDtXHXizJS6hvkzEeKC9aUYakM3UjuP62Y3XyYcNWPiypQX3v1jG4ReV",
  "key20": "3VJQ71QZ4rpinLmqSWWXuQSxAsVasqnbH6S2VvCj5M8Bhx3fexnfEbAjH6eNb3dGuXbGfyvnVQCpR12vRyyqgjVE",
  "key21": "22GSBfJQ9q4sZAki1SGdzJ92ho7DfBEsNc4rZEtNosC3ZPEJBpH2B9xHsSt9By3w8WffSTqyf2w7qudATVDDsejM",
  "key22": "3ZKkPDpJhCV5ygmtvfPSsaYqWwXLYezodqaBQJg4rHS8aqC9BMWix7pJD9H2qM7Y5KqkdpbnH83QVD3uxtnAcUWu",
  "key23": "2uN2iXp4QwK2y3BHSES2ixNsqqBapaSj8bDdtFghwZJGPoE791HzaSydVaBHYyJsMYAdQwrmm1z8ywmCFjiynzyY",
  "key24": "RenyL9BmZDKvpUdfDkzrH5LHzmYavQsr5Ez5fL8YZHF4cFAqymdAsWuy5qgQ4eq8LJFzJFuhwWM9FHs1Wu6JSgj",
  "key25": "4xxcG9w6vRi4KNfG2LFvpNZSQav51qvL2MD43ZNrjAXFyP8XdpFbQJoTE4WPU48JC6i3QQaLiENE4e4GcnVd47PV",
  "key26": "4QzXyGiTud292eWYMYKDZX5vACv6zhq6cwWLd5pCNbmzpSCmNUEbJyV4Bkgs6bnHtZPFmyptdJ8Ns621KdAj5pzP"
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
