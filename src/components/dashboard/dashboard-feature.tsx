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
    "pEoj6U4hVZW3VjfeRj6vcXtAm8KhxEPQHnX7WLf7KSDTVL7cXCSVWDrVLwSBWCFm7iaFtgpzSeLLgAzwD35Sy8d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zMbtpKBrZuxpAdGc1nE7Hnb6ufJrUZMzdePBg25rs7adNQwui3PUz88rhQ3ke63fsWB57NZeSUX53xM87CTD7Fb",
  "key1": "67Ht8CgqHnxXgvWCEU68zC4uNymC1NbkvYBpFEokm8kPugjPRQE9aHBpQb8FTvum9A381WtEzjm1iWZ4v9edZGWH",
  "key2": "4RVtEFgwkHjKdQEqNWYZxugbWTxmHko2GzzqS52YJHd8bRc1CFvBBECE9sHCvswyUn9nZ8eHmuEgsRdKj9cXJfdJ",
  "key3": "5nGeCg4ViUafzu2vFBPz5FMUJCQe8buHoCA9N4VjRTrj9ir67N3DTfMkcs4tuowVH3WJEuzSP7suzJdrzahcViqJ",
  "key4": "3o4N1GqgAH8R5GmKrrXbBdFED5FLBZw6ws9u8mSwxmG5cmcS6Djbh3zudFSSzcJuG7t9L5JWYTD9f91UHiwLaFqz",
  "key5": "3kyQdju2JYbdngdFuwFbDUg8hGsLdiPqxnN1br2vJ9w6EnqU9N9GRVpAfMfDpyb7ZUrCUZ4DvtFZ7eXQRygkSc6K",
  "key6": "2vvwqSYJuN6BVYKVpF7Zc3L6YjHVe1x35WPKqTUxEkyYxaEmEVHdpsSxzSLkoAMZ9xBjcyWKa4V3z8XCdPnRBrq5",
  "key7": "3RcxvvYBNrxLXcvPfLg49NJxbb93oNUHn8mkQ5BxeLpxEMWKuBpcsYZtBS8AzPL5Hwrom1zn5p6gTbqp85MUdmas",
  "key8": "4imHFyVKYGQmABE2owvBNiNFLkppNprPgLY3w99ggKo5Xqmtbhia2TDwD8bGo7g2t5nK8cc9THEwfkXHAHG8K8MP",
  "key9": "5Spxv22dQoRNE1zgFWJvFiptvxM2HFkt3QdXeYwi64fFneRdooVjaPBaoYHxJUUNLxMMh4CAirD9VE5bifGJBJ8U",
  "key10": "5W7TPikLuRd5fgfFAv7n5uuiXwEZYssvkZmRWafLzFwqTpFQvYbs6NrpxMayBLEkbvsjXtRUzBENCaLkcGRJofs8",
  "key11": "3SGQKdd5YwJ8ovZQVbxiLAdtA7Qt59aKt7nwrd7ZCXtXT5ZySLM99J9xYBGkwU9hRCEKcaTednorWA1d8SFseomF",
  "key12": "25FxL1y6hCkG1cujJqoEGfrejEunUZ7syLskjYzZH772gzusuN4WTsheeeNnpeQQfDe8RVdZeFHWTY5ic3jzYnC8",
  "key13": "2wD8QDXj7Spf6NVN2TeBocVwEvCPVP4rEa7wmuJDGjZRmvzyj3ELKvKXQxk7eFAbPBrGuQM9WYrC2YbkoQeVEfhG",
  "key14": "3JUCP8NPQjZ7m7HnuYUS7z2PcKinVo9CxJ1CGnzmHEUpLSem9t9i2L7vHzRfEqLhsbgR8FRfX74ZN8cHXYzg4N8q",
  "key15": "5wjoW4V5z2u9BqEso35a1H8DfQe8jLGf9pH7nR97VwG3WBGbARASmWNt4oEU1Jk9nGwNaCTmds4yEGR5ndchCBXj",
  "key16": "5j4SBKeSJfpFQqXpzg74sJ3wwp7gkRdAvrRSxBVwjaDAZKE1ZjqhKg7LXDyPuP7tPoz85hGQW7qsfxZSKqXXBtr4",
  "key17": "5BoDA9SXVVZF4Z1bqV5HXxfUW3UVALEdX5zKg35M9X4xAxFhzB3pkA6YxsspmDwvQXRNfNcv2WkBzo5eKPqdauoA",
  "key18": "4KTu6u7abkmoTAkDUnXnxkBoSF3MTZ82Lckd8iRBNMPCXzpqnSpArPey82rbrji1FcFwASDh71AcUeVbKdr2qNAe",
  "key19": "5wSJ3LDgEkZgdsRZ2mrpP9Trvkd8p9ieLwwM8wiagtvWLwkzMWSJD8Zc5CKb7aeMkHjNzRLHqztrXJVa2BBAiSik",
  "key20": "nmod3s1aBnDGCVv2b7fDCS27zQqyUcvP6FDk18ktJJZDns9suLY8DJLhcmUS1zqDAo9hbnhF3QbeUZxcYVxMwyx",
  "key21": "5ZUdMkzn9LJUEwFUQJti6GZrVSYTcbsmnJBi31BScaPagnr4Y9k7mvGZy3coiqzDqEZjo5EWozRV2i3mxj7HSfub",
  "key22": "5fprmATCP8AKMNh62WYNpQtTmNS8mpCYsLcG9asmEdtwzdKidHQcpaRDo7iX8oadEW83LRRk54PZsvfafdwB4aav",
  "key23": "5Ysa5eRYcUwH8bKaLTsBG1G2bsFqWJ8XRy1dbMBqnekvesu4xMmJc26AAeRYXTLxazpNwJ5VhojTGAaVLToHx8yr",
  "key24": "nYQo1c9vDynzbCtgLnP815iTg6ocXU5c1HysJdAVPEprcyLQ3mRFD6tTeisbPKC4sL1Bo612E4CLnZA45Z1qWwG"
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
