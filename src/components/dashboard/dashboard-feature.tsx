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
    "ZKmz6bJqLYRQ4CmSzYx3SjHKtxDmfjDadDxZDrEBQV9UfoNzHSebJYnijoyZCe2FVBSmP4h4myvSTtNuXU1s2t1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QoDwHJADXtCc9BHeRxsoJUd6XPJc4BBTCzJxGjyaAsJQRRhMdTfiK5iwiV6d3P24xqRb6ifohJtWQtpBELQRaYp",
  "key1": "3s6Fvq9izWaGZUaEYWWfnn82BWZpxW3XGwT2RCDQUqjCa2q16iYWKYUDVxHmKUfnM232C42dzW651wKhdcgcNaPU",
  "key2": "3NomQTQLs8HR1mNKApSvQ7aYsTQYpuEyMibCa3h6g8BMoawfuyRJFMUtjgjgqygFuqXCWfXd1tA1NThYD3QRw7KV",
  "key3": "3VDV3DwaTFzo8Q7Ni4JLASWzwHXNwFaX2GMYgesBqb4PPxGTRPikR6ASSrnMsNEsxv2z2a58BjK8869246rzCSYW",
  "key4": "tvfmwsyHPVJjyUAb1Rmrh7uAM3CXV8gy1611kM3ipqvoWNPqMYhfJaeJuFVd1BwrKywjChWk1RKAWobWvfEGkKJ",
  "key5": "3bD71YCJY7czU2BbzzPGSDkCbkEUpS6Nf8YxssFKpYnTgK2PGbWx2BQT1SfFZAagX3ks4Shk9tmJpjoa58NUiZFe",
  "key6": "2QJYhqh1WsiYb4YsY2qmVciS6FiNfiQkqf9rETDzsKTeisXZKBuhyorUpcqr6Y4fwWbG5ZWQqvAYmnNx2NPqD8sK",
  "key7": "wm6VfV9R163hHnNyergomP2WnvZuuW2htjQU5FQbf9PUMEUjecfaVQe564uKLMXzqq4ko5rBzBvFjrM7D5k9Wtd",
  "key8": "4EB2z7pB3YD5fN3XiqLyLA3mS9Xp9TB89K48kND65huB8F9zTc8cH1EcYNk9RSQ3z7EFNN2ErFxEnoniVj6SSM2R",
  "key9": "Pe1pK3KqZTwGEySzwC4BVQ3anzWkkGWemVFRj65dyb183AzMGJaqqUeNnjH6oyTN7m7jZr8bDvcNfnfFU1LfyRR",
  "key10": "7ZK1hKMsYKjkaCgHwsCfWqBktXpC3KwdMPeUPNbJcQG196hNFXwyJrUFEackUyzDUyA83KveFziVrcQF2bS3Due",
  "key11": "5LUKqm1SBpKDjsqfJgWh9JEp6Mv4AqEpKfHzb2u6xWdDgK5JN3mkqU1Gyqxr74YhiKuMxGr4Xy2CuHPgwSSetmuH",
  "key12": "5NV4stSvRSdQa6wD4tdNtWHkveCuf4gWqRAmLtTY3e2EaxmhqAjReFSmmr3jgSt1saqDVJ7GTspGgVDbkkfzv7nc",
  "key13": "2wTGZUDYJEfnB1wrr4bL6RNhG4LHqnRZ7XrETrJpKy5AESN7BLz7iakSyXeScKHHnEb4MFb4YRjFKGjHwEf6bkWq",
  "key14": "3qsqHkau5JK7yH6WT9fqVQiyxLPxaJnscY19QhtuXSfcpYWUcyJ4JunBHL7nVVuxeFY6KAscWb5Tmx9gYSVEdS16",
  "key15": "2fXRqwLzSbwE1YUKvDKnvHMEVBmod8FTQ8FdwaLEpEhL333oBTieUHAbSdUUzmLZjddLgJoxaPzRijHrF8HKWNMP",
  "key16": "3bZUMoUr1naYdbvByf9unt1utbk6RkvTHJWYfcwnxvkWw5XNjp9WrDwqgNm59uFFMeRxKwdGqFfXj267qzCV73QV",
  "key17": "33E84dCzhJVKzrwChkPw2GWpw5GxvqtCxmsUufmWnsvk8nJgYTcj7zDR7tbgH7Y6zrBRf2vCAJ7iYKfRKFwHCr2q",
  "key18": "2osRiPB5ErHm1Fx77S7G4xicyNJng7LAVQA3An5urv13rSUh1JQGGF7PXbcuigQLCbEwpsr4mrjaCLmXPJx64Xst",
  "key19": "5uQza4BAzmNhbS6UNJeEPgV6mAyCzLzLfQJGRb9YyfX7UwTxeAYTAXZ8Dr8SncTJZ7bwNMb2iPxjJSE6JmhhdPyi",
  "key20": "6KwxMykYs5NLAGMz55rqG2FpqjvJcQqvfxGNo44uP8YXeeWuLrr6g6rAqNzmV9fU9dF6nSYet2JqWoQfwXBjGsu",
  "key21": "25HLVbCe4YacDivpD5EHXk5cfTW9fMo6VLoXUxNgUHnScAhDqz4FZGsuLhKTP5ErfKHkCPj6pwgKa6E5jMRhYnCk",
  "key22": "2WcGevamixYcZmjZieE6oYRQzDpKJm8nWzv7kY1e5GuDLwASxnNv5dn9uxyFnstNVkLrAXmMSZvVXMHUQ3yfE5Yc",
  "key23": "3ogzs3ci92oTnqEBFAh926UE6Ppp5vuiriidYe6WUGkDotdhN1iN4JxRvrHjHbUDUck6HM2froatEMKA2UD5HEv",
  "key24": "iWpEiv7vnQE5n4ptx52DFsfkf8GNkt4bxpU4buXX3Td8HY98v8Ufw3QMwoJwSSG6sENzLbXongtXJ5usXQcY3yP",
  "key25": "2QG9eUYhTYJHSiMsDSXtPVN96hx1KvcQNkZ5yWC92WjTEiWcuukGPfZmT7NFurQGfPDeXDQuY5GcYiA6HYR9x194",
  "key26": "2LWztEuU8TghnRZnp9EvAtmaZT8T8mHtAxPZz9XHH3hcaWcRZcpGkURUUU5bTuEjoyzso2Q4CizJCQhUY9rPa7Ne",
  "key27": "31AAxFaptaZzYPrSsmFTHAVKmfkgE5bCFbS7C4PaGVGDFjAmmPAizEFLhJPgyeaBSK1Sp9SU1qkcw1dU3vFKYei5",
  "key28": "2kX3xtxtsp9MQpzwCaffdrf4Wxm4XA6FBm4YiYa1NqvTV9MYu9tb34oybUjgF1uWxwsLtPxkGaqQLmbQWxd3FCKm",
  "key29": "ewa5aSSdVUEDAT4h8RCEh1Aa7ZPyBX7MYpaLdubbAz8UPBdtop3nKeTpQQS5XNazDLYjTm4Zd9Q6im1jo4zcd5h",
  "key30": "5d3v6faPjkUBexmmmqSTAJeG9Fw6JcVr9cAisfVwqtE4EuaSfhyakneh7eAk1fD6SZLMhcg5S1CQ4E3xJ7oDMikj",
  "key31": "bF1W2mVDFxVFLBxAagcnZNLM7hz4QVoQNyArGUs8eL8LkimZBCChVQLNWfydkVm7N5ydjDrhEm3CUBamAwJPwXv"
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
