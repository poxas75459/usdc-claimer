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
    "213Y6n8fStnQUhj8CV7Cig6ZNh5cHALQPUwzq7h3jzYhCGcrC7Lc5fFz9TsqhXnBP2cRXcM4jH2KZ8P8uyhGsftk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KmQT9LFN5htN4zjKBWEp6wgBfE86MA1dgChTR9Ut28NniAyMxrungiqNqmXUF5xcexvqLM7GPiYeR9opyHjAPdN",
  "key1": "4T8DkveF84cvGpkUGb89XhoRnsCuoLYrrionSvEBSCoZhS7JQaLh1v2vCiwWwNUCeXHXy2kEToenvXmsGnA6zsGp",
  "key2": "4EbBrGrSCsHePobXsHaY8wN6McGb5eVWAPbGBh6KH8NLrjeCC9qb3APPFCXm5BtzJ3u8CeMYKFa8X4avUzuLqaD2",
  "key3": "2qwzAyhSwtdPHKASqcsJrjKXrXj4BfYo3asiJeXFvB4j8E73aBwWqLsJRiPmwBvBVFXujh4ta7ARRuiPWEFhLGUY",
  "key4": "5nxsLaCYJpJ3ACZUVoEbjPT99CQvQygTMrX5ZLQRcLqqphrGSTpcqJfndcyxLTQn2QkDDY1f3HLJoqd4ZLQJ3Kt5",
  "key5": "34z4YwAMheEbgbcaE8oBUPsREnjdS1S3P2gvvGJXbfP1CRiKcR6wokBvs3tYNq23xQ4FWK8FyirQ8tvJrm4e1916",
  "key6": "3DHYghWkmDBtWbAuFCDEYYEmviShGrB8VJJoBWCwhLqYdsxxbrDEU5DiaPWRYT9GQwc7MuosoL4KvxVDzN3FvkDp",
  "key7": "EXDqpWv6tX8Sg6yXpLEKFNksC3X1EX7jMoZJN5MmEoDgR6b1hx9EDBwtRbHNi1jhxTYidrb2FxXDkbpLE8UGVUv",
  "key8": "4wzwodnKSdmNTeA82jJ5MwxRnFSHYzoTkoAC6yCtussL8XErUXNsPpqu53Qk6REwpbYk7KUVdCm4MRPikTKK8jyK",
  "key9": "2cs8dF7dCApGBsenDKoZk1Hq62f5sKjYcCKRrrXb8w3qYXgjWfLP3X3HZGdxX4evHMaHSM2cbkDQNS3yajuZ2mgf",
  "key10": "54iF5RtWw57rp7cpJTtsng795uuHTSKwQkbYiU6n3mFoNGTSfurhtAvGGJk1zmq3W6zGToySLFpKSHZmnBUBdeS7",
  "key11": "HEzRT7zvVFtWQqrBn4JCi8PPCwkeeH5NxUkU9eetLudxC8p2cqcmDJiLqpLMjr2c23tSLrbr4UboC2Wm586H8aw",
  "key12": "43PPM3MFjYn1C6aELfQSAgFKQjS1tCieXLwxmQGN2AzpYKXHFWmUksda3isTjcpqCHRdUVMmWBhq4eJrxpb37t8h",
  "key13": "4Xs45cQrsuTuc9FMDnpTeg8ZwW8kkgHNnWnFdNbPzR5Vxvm4zULfMpH872qjjQzcyNdxqgcvnwG51u8YPsfDoUfu",
  "key14": "CbyH6N4A1kA8Be1ds7FF2JYjVeD7HN72uEkKRhfakZMjr4dFHfKnid4iJcN8vQYwGMVchosvzq6zo6NpZrCdQEs",
  "key15": "5QSFBCqna3K78njvgiJwW1FmjBusemPzbV7PPdQdZzPuy1PbdAevFHJ4Td4chkP8LHZBUs7TxchYrg7YSmAwxRcK",
  "key16": "z4srQxFAEiMmTpMQa4Phk6e7qiwzkFoBjYaP4z2sgMRoF3wQhw3n2Whem3JWonPhRmGQt3eFc1jnGcMaoQiyPQS",
  "key17": "2GtKZVcT8G4K9SMhpN5qdtznbn3kBGhMaLn2Q9eAqqFtEdQsdjCWxSVuLDkS4ijSKsuKN8L4BENNZJV8QVhxNxQG",
  "key18": "4njCnkFNFdJxNHvJrfwJNTS2ngs6nFdqtb6vrVeV54LRkD6kBhRjwn1KcfySSB5VrGUgXmMs4btBnnNpXpQryVk",
  "key19": "VFfRSbKtSsvHnrTDG6GytsrMAgHT9itcQZ91KsNHmZHS8RS8rfZzY5sejQKG54JZNWqfPHKmEsvJKHnsNk8mksm",
  "key20": "3D59FC8Kjvre9rT8EuaFCgVebFoJNYuW1HbGDvhiWS6fKEfww4T8gU6NYaLdc7myYF2DRL4vC5DCKssAjemBQppT",
  "key21": "37LoAFqQyQ1sWZP2WKbf1XUTZuRwGnCcjTMCtLdoDKVNcy1UsD6DavXSSEXMrSvuWn81CpJ5R5k1Zis4VNJDYp8V",
  "key22": "RhYzLYF2FvhPHK7WumZmaj6Ey6jxA8LCLPCdoXWqFRd7Xhjhr2GHibmzywS4HHg4DuVwghLSutwVjL6hVybi8bJ",
  "key23": "kAxWM7dqCEyQFbopvnktfdXtfuZgLHLXC2Ff55jruWWn6DC2aJiCq7CvEgwZ9GqqVpLrHnEkosQhg5PEfEukfua",
  "key24": "2DKxY5eWDRMGbdnLdYaPvMJJPoRptqKCQMGfb8poF7aZyrweXEBjwZW9MoumQFAhi3sV2dXgrMsm1tH8V5cdqU3E",
  "key25": "3od9g6nkoaiuNgyRF3FBWU27N2D6shZrVv7gNhqbDyVR8mniwKtbo6649qfxjETZvrdZKWnoavJ1Ey6AQzAtaJ5z",
  "key26": "3fGafbGsLNfNwWthiTevGerUGsYRfaeuZrucuTHM538ht9SreWkD6V823Bgjq1YQxWHEoimdseqm73s7s4nndsy9"
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
