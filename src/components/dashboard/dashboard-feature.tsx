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
    "4EoaLkVpNav8Dj8in7y74ymL3tVyEQP3zcP9aeYRrYvoe2c9f2DAFDQoFgJDgiGPEpQRvNrVkD4mjLrts5UhsZ3g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hTfa9aySYBfzLAtyaCXpobhL8GFirRFAEgqzW3YEFjNfSVxGu4D21jrrRFnV47HWBXw3eknJHbtKLspGr98WaCF",
  "key1": "26aMUBn8RZ8zftmxUEpFRgLwvKtHdptSJdRRkdArUSY3d75QrREvyBnXXBQsmWBu8jkvMzveLyh9TX1XVygBB5oA",
  "key2": "65wUKNXfh3VUQBxEvtTXobAE31wN7dUJB2ErcvdHAgcsZmNfbzZhMDDYfKXJSQZ8ucsoP8YPUGVzU95aPMMmyTND",
  "key3": "hS194vpod9XD4wEzRHqjNuLYw8L9C5HJYmKGxHntdeD6HN2S1cFHn4m7NANb7UHqMpEhTdFLPQjUts2NzBP6VGd",
  "key4": "5wNb974pteVG5X8eRvLiTTv6aJDYJCsRjsoC5ok4U39nD2uG3ZZ1JsXXoGP33TY1xQdr27ahQAQam1hAwnNHNXNm",
  "key5": "4YmMC9r7uUFAij5Ydibqq15HVixfC3vcCPd7snhB1fHDhe9KibmeoQ1uUb8MHWyzm3ajYXrfGNBSL9zPaDKPBmWA",
  "key6": "q2jfpWQAT138k93vYvZaHdTAtFd64m455j4giPtxrxqrwztF8JYD4LPUPsJkkZstLB9aENG3UjjofcHw8wCe176",
  "key7": "64njiTChtqFy4SYjttkjjpfm5oyJVQ13tdD1ew6YDMmwfRB6Phqq3AEHouqSbnXVX1soV3rNtRcjaoCQMn6qbB41",
  "key8": "RbAGHRVdxLYU49qzGNbbpdGx4C31W4AY3LGh42zjQfSYNLD35dVykouus64D9ywSRXgjZ6Sq5VnnXMm3R2PtGk7",
  "key9": "63twhWwk2R2stT441AZ5dazPABgamxjKY6GgXTgH6FzpxAu86azrxaz7rdLQw2pbqnMLJYijffhT8vLKVAnTeSeZ",
  "key10": "4Q57ML8pMCgLAXoQZx1MwfeGSZBC36P91phc6FytAWTc5hF7awsJV8RVRnEiCTRLuoLcjwMaWqL31U9fwZxN6wQj",
  "key11": "3Rq5dh6EcTa9yYVFYsJXKwKTJcTagEKc1AZSnkxHwKXgAazBQh1N7Zgp637mFRMZF1vgRmPETUCxtiURRX3BbHfX",
  "key12": "3jxn3uwvkBKMhfFdfXYQqZKYSx7eSHDJrHL9e6MEn5VNsXDLN37AdePobD3yafXux6unMcsH1F7KzUxRdJvby8bk",
  "key13": "4qDPxqwKq5iDkKdNEgw6QqkchSnpHz9CePJnWFiEAvmmHC2rnp9LWJCokmYvGuZdAiJVS1dJMataWZrd4J3JMBdo",
  "key14": "cpFHt5sb6WMDkJWNu5C6S1oFzEy8Vgf4pyobA89cmZVhuULNrDB3SoFf3wJSQ2eYUZJBAsr4dN3FidVwdzpHRtz",
  "key15": "KEUhx2csTnzKLLdTppPwSMfRd92mPHEsLgE6fbAPLvQgMiVJUrwgSzqjDZ1RaSJdWYyiauNZUS75QrBot2766w2",
  "key16": "3LVZGrHceVcdGVVMVqWHWPzhPUNjJF2D96hiiXft78zGLg7K5z9ySgQ5DfKnxJCWiv9H9MQ1k9FG7x5hKeR9Nxii",
  "key17": "5X3UCWH6m124GEerRqH1uM2kUouvp2hjFbu2SgrthjgP7wNttkKKVvfQGtFGQXnWVoLZ3KYMoDH3TkEBZoS5cto9",
  "key18": "52MZxBR7yw1JSqRPYQSzKZFBkkS5iUQtH8HDadfdJBGcL2bdxw2K87GbjrvcmBVQjK58kaaDfpqi4VuNf9LdqxqK",
  "key19": "5kNB2nRmBnWVdHDG5C1QUSnU5sFLNL9J5wBW5uKj7ukNGREwgqXZVqP5D5otk7ok4Xe4QLoh8Nng4e2eByKrHyXk",
  "key20": "4cxM7QT6qmVx4Jm811NmA72bqmayf7FxmrqpjjuRMvtfNsH7ReVAzd2yG4hAzBaCsjkpJdqY1LfQrmaXVgx4YV9X",
  "key21": "52nDdiKBiGUrSdqm3ekMZ4iPpSpQv2nshaCLoRjv3mDufP42dBebXQgJhYKhmnZQyKeQAjbL54E1xqRYWw9dGZxC",
  "key22": "R8v4LcUtxnfVUZRDENj6qqK7RYGvHyMvrXurae2i7z4KACf566vP58SKfrWBTqj4YWyBjPGcn82eHrBTEF21XaL",
  "key23": "3mGusgTsGyKh1dtQ6zVWxi76DamHp1Lvk1mCNZHUuZPnxQT2oexLQMaZVonnjty6YVWnLuwn1MkkhhWyv5nGi14U",
  "key24": "x5c5JfV8MP22GMeLrSRwp34oq4zVWsZ6yfEuouEQWJ2QGNKHCUe6aMDBebTkDrNZC1CTpGEi9BucV4AV1o7UxgT",
  "key25": "RFvbK8jQm47DoXoAMxvewi6yaFF5bgUnsDGNqmPmDMnD4xJZ5YUGTF2ns1DJMB6Pn5n9t55izcDn3oabiHXuNZb",
  "key26": "5UZKdABAwxn7WkFjLZh8fc2kzkJGnA2PQAMfBGd6XqZzYGHipfN4g8AMMU2DD2zpu3PTj7LEtAqkZDqJsg2giH74"
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
