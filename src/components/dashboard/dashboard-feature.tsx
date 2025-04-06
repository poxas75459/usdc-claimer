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
    "36F4Dhg1duBEXZe51UJgDZC5isCG5uYwFot55EjNZSCh9qoVdtdokbDrLDwB222Ur8THeY6v367YLAiTaCNupCGa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dV5Xx8abu5zqDx3DuSv3hzpt9BiXLZV49XLtNmYLNihGfbW91eNT9NcamTwUXUudhidLj9HULHnHUf2PbjiHDTN",
  "key1": "4vxtf94pNWyKPmNF2o1NkVQ2xbUkaMgGoQSaD44trdwcjUppBq8A3bfYZTjh7CVjiHnYik5vnAbGRNyJvEU7A73p",
  "key2": "5AsAkSg6h3t5HbYLnTCjaQ1WAFxCapAhNuuh6pWiWT6daSZT88HxthgNWNGnAHmEh7fjscagbpf8pmMGB568a2XW",
  "key3": "2SGvkHA9w8EqvvUXZmXMRmrAeoucN8sH48S7B9VXv5smu6Qijk5qJt6H5Mm18qJm4JqwwKAso2Q4Yto4DMw1CgUL",
  "key4": "3Dn6YtBBxGcDWoS2dJskev7DnUedVWDwAKeJSQ4eF7CLBTXK9J3taCGA5WqzTxg1To8dWHJrjaHwczqFMpLyKt2Q",
  "key5": "4b8H364rNXCPh2baviDSqM44G2XeZfPLr6dkyHwgBoiPUrWj44FCZuWqY3isXqEETo8V8hC3p7T7PH1GUSMUQKiJ",
  "key6": "3UhVWgFJkXTzkFUMya7VJzPE9BqDWPvrQmjxgiXn5ebSgfGFK98cEZmqaH25ND71iCyaQuurqXYArpwo16Mbbr6",
  "key7": "59shZdb2gx5n1LfGqZeuMwLPsLQHkKbuJpwtc66Aw2KXe99Deg8Vv2Sb9ChrqGkLbAEyRfRgAm8JAGMDfovYoZQG",
  "key8": "2CfErhXXgZeLkYKwz2qUeejanxfWLRPLZtPN3LtXMakn7NEFTBuCpcmCBpPbtYpCvtSbw67ekFbiKKezgtws74Ax",
  "key9": "2URF2qM5oMfFhgthQujwx2wkx1A7oFHkmsadCeCKZCLUv74XoNAcsYt5Z7zTFZRJE3jrMASKdLBd5mTHwR3BnV6q",
  "key10": "3m5UkNAsgbn8PxiLqMsAt3Ntvt8LvwQuRifS7L7ubD1BTGLi2AVRJ7Mv9sGLGqVnsoRRbyBGwqt3RtPCx9K2r3Pz",
  "key11": "2ffRoe6dsvPxq3PoaVjkzfQg5hFZLbcS3nzbCedb4YNQq1yzyhauuLznEB1gK25ayafALKNgdEqyb4PvhGNHrFqh",
  "key12": "kPbSJ5NjkphiycTkSWSAhaYcbWuQLQBrWkvpNGayzbCBvCccCd2EWBUnUBbu5RnNZ6dazdn7wgJRFSqeccbXY6W",
  "key13": "2kbyDxy5BbzmpQPtraPfiFdB73Yppdv4nhWKmB2bGcUWHVbAih53hL5xYYSiqdQfeD58tHfi35CuUxPMpbNnbYMm",
  "key14": "5d2c3zTL3zbihLYkWjbF84ugWzUT8P6AHNQFbmJXG1HKZFBEKYRisfmyTPqqEvHCq2mfwRrLtUvubUfX8Ja9PkFb",
  "key15": "3cc7anZasqdtwFvXppVQ9RA4zfQqAgzXGBGNAheE2neVHLvzNdUVJfLs6KsV2UB6cz3SUVEqt8Wqd5haUQusUH3U",
  "key16": "5DUeMVTTKESJmtZVJmqdattycHxmPEBW5VYVaDyRat4SveJCzEHWqhb28TS4cmAQgqWzRfiyV5Qoa78KSze4Fayr",
  "key17": "3uGngwK49pqmCLvbyfPsA2wPm711skgfGDMCcfeftjJy6MQ2XkUvfQy9z8LCp21Z5Fyz5iZx1u6Wb7zzCg6Q9smy",
  "key18": "4DviERs3fB4hnfWZVTdtsge3HeRfBK74XeNDjf1T38P9MC47yJHSpNndynxz8saAxND3z9jndjbZhsVtNfk92qwx",
  "key19": "6fGPbd6eZxHG13DKjCJA1zy9VcSC3xPYf8zNd19v9szvTBp6rc9taxdYY4hKQFLQBNBQTGXL9vdRF51sxL9Y5iC",
  "key20": "GHJtQ4dCRaDJwGhDUT9unKwszrT5YuQwjobtv4ww32Hr7pUusiZFRFmvUK5jXqA4HhDm8fNk3THsWjr9xawLcTq",
  "key21": "u1N5fXjDyuT2urqDAZrDY4o3AtmmXJvRwXvT94Gb3AmD2Yppq6QKTkXM1ZhcRhRQD1u6hQuY34yUy2eMnXQH26u",
  "key22": "YrnzPkyAiF1twnur6qRJwV9XYNxqSxo91XJzf4wka3tWTuwWUABLF4ZcetGa4xvLj2vP9skNx99C7CFBQKcLneu",
  "key23": "4fMj94RUCvUopBC7HZ71ztgSoQCeLUyr7o6mXL7G8qCytLovp8QDSGSVs5RqUgjJo96cBywgCyZVQkYMYfcNAqdH",
  "key24": "H1ZinJyysekAQafAu8w9hJzcHBk4kvkN9dPaeZ8WWujCjh77ZxFvKb8LpH3mzRBsppEa2viWqrgeVSXgMqRUb5b",
  "key25": "4zGzR3VmC7c5o5E1cgfzT45CxTqDqz54csRR3P1pVFoyy8hQyJKawmCXS9bZqGmSmiAmjMMpE1rcZQM3o2r6Bq7t",
  "key26": "3VVH8uDQbfv24wCaHBjHQMQcJHWhTJF9M1hUsYaMnAMD48QeKkGhUJ68nUEjCA4vv23keB4pcAMCJ7gp9vSpTY4Z",
  "key27": "4AbxoAkPqSQE4ZUQBq9VjLt2jX3SZjV4HA1V2WvE1H6uGQq1hFTZ3RjqHKBMkCH85sG2UzNrozbg2GFZeJXvcGV4",
  "key28": "2e9XpJkVS7jeQgEJQt7UkkDQQj2wcd6tMubZCznT54g2hfCupUV2R4ktcUhkU6jtxSP2bWmTko5FQG4SAZa5a55M",
  "key29": "46iXnKdNQ4eRHBHrH9Vh9Eoc4Mndo6bnuB3Fkcy5JGK1fPTgXgavn3vQSpDYNj9gH8aX4woEzXZzYMBV7YnJVcP5",
  "key30": "3DFk9GqVHcfd8kvsQcZrVByPQn4jrjkryVH9U8hJE7pNXxezY6Ph9reHUkPHcEM1QRMyqT4SCsQDnzZ5SSX4jU8t"
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
