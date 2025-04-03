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
    "363mLxHrVDa1Ldj42H2FktDGCCGQKFBUSfT828fjLE3tthUavPaUGPEdEgmTd9mCyWgSWi1KDhqBjPNmFHWSzThn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nryC7PEVSi5uv6KzYw6DFD3oQbpaRrhLSrx9LfBpEw3uKFuYa1AUMVUhq15ovamoyqppVKNrgH9sqeSmja5WfCg",
  "key1": "2WWxfVqsctBu3LMrryCf5y5HCphbs7GBPZGBgaGvzbaqAW8rAqmswALHvm4Hw7pSTMemRmasVMS1Wd6YFazKjvy6",
  "key2": "KtZDaSoK4Aqum4r6XGgrQP2hoV4dMmLrAFpVWsqjKLSq2UYvsnYYNp4qMsMADfk1cd3JVpDP8wBUM326Udm2KXB",
  "key3": "zvkfhRPQFrEEHYaSZFMbq7wqgTQ8osPM3cF3fGWmF3Y1TiTzpypvCnxBuozeYWuBfsDLHL23wLT9Jqg2CSMoKwv",
  "key4": "jqQ9esXVP7Mtg7S3xiyzM6wekUK1Dz71MyCK5ybQg3TWyJb7fVBJ7NEKH2skVUsswsM7Tp8S6wPAq74XWJSdLjU",
  "key5": "5zSRtgGGhq1svxET5E7GxG8fEWTqkFXLYPF35gJkfL8GcgrYokqhosPuBzsACMAZrbTT7cviZpMqr4PXSPR8aJSH",
  "key6": "rKbkMgpDgUCkGzog6aQ8E1ZNZxg6PM99xRnJqYdgsJzZHgkX713VZSR6pdbxEroCMZCNoLjBmqmPnCBQ1YhAfJk",
  "key7": "PPc6ApoD7Xtsxs5BL15rjnc7D54WxXZpZxobRU1b11DuiiuyaFxaZ9JDVg9eTVZ1wThNHddti3dNDFDYkMqbzWd",
  "key8": "3uvkkCJkCQF7ocXYWwb5PUYbHM4vYzKffaTVMCMVmeGshSfp1dXMqxSCRQoGWq7No2BxhofPvXnzpZWbZLJgDsCR",
  "key9": "5hcmNseMizr6p8WkZpwmTim4GJvLXpbcM7oVci8g2oymnfRw7D8yrt3PJVAkJeeTx3X91aRKsE9DUF3ecRvifj7e",
  "key10": "2RZaaHojzWqJ4tUTNiWC6UWPL7bf8oY6jSS3irSWo8B16dbbioExfB7akvyr7kyTxVhN7rVzXBT7vEAZWE7xMusP",
  "key11": "5h3WFgrozTzh2hu8Gm2zGQKEoP3bnah7Cx3JB9sESRCj4vp3dpCAn6xPyz4mNKYKcYC4By9a87z58FEV4hAMQ6Hm",
  "key12": "4AzwJoNX4hxsiGuFyzrEZXjvHZdjgXs4zdMsDPijiScu5KDh7iZBPzLxqQQcdW2Z6SoEyKeSq9EVFniyKcTNhVF9",
  "key13": "3Xy5Zit8tFv7Jqg84gjUM6JyMaWJFF1NfVPnZ9jydjnxH4mJLRVJxbXDkKdFevyMz96a5WDnqYbi43QPkpJ4xzyo",
  "key14": "5e9ZFFmefK3zU49utPMRNhL7SzCMNtugRDw4jo8SzywyadBK8qks6URh4o6cFfjo3sGuY24sqqW3BJZEXzRBphqM",
  "key15": "59XQhSUisqTgPxowEHU4SkTvuL8V8BCR36FcXxPnbm4PkwxkDzeEotCQfu5pY1z9qsEmxLnmdtSyJs8i89xDTkzw",
  "key16": "6NsdmBJ2PuusjaSWFQjmW1Xr2d2pgw7vLFSpbD1v6QRVhEEEh9zQxPZUaijMu2p3TGNKw6M3PbpjmA86APCep47",
  "key17": "5zQn7x9wAZ1jAXfHkXvGc29CiP2bYE1JJXPnPW4EYTSLusucJYBZ8XRHhaHg3vWwv7qjnvB342sBAQpniNZd7fCv",
  "key18": "5dQbTiHhkjJgMc7rZn4mDD6kbH1BZcndN6EsYdiui7rjv6TyZ35TyHQh7ukdMUY3kNoKyvpsQ8qNBbadtApAat9e",
  "key19": "2A6jVPBLikQRFebcLmypP5he3ZtSrNkG5qe4LryQna8KGf12ksWSBFL7auQHGDYcTBPRQFG43f7Nv6QzWxwAVS1i",
  "key20": "31GTbMqAMCEpdy2NCnBS7jcoU8F8aKi1tNbTivA2P1gNL5ysWB4QMRJPbtTA2PbvQNALEzkyPHeeegVKXnZgDS6t",
  "key21": "63y449iY2WeNzEgYUjvFp3zMMvDkxKL9LXhMLQnbkvogGjiuMEQF38yjcpcwKT8uKnEbgUp1fy15stoovjPr4W82",
  "key22": "81ssp3HA7vE5NMRCfL1rXYVUdHz2kTJGwD4Ynu6ignV9B2Boj4vidf5mSYbeRt7ozZR5rbgnqix4uJtHV7WVhcr",
  "key23": "5MoaWBWMLLz7UJMKgM9QhFuro2seQhZU9vx8rwTgKPhYA8XnfDUA353av5YPS3TE9CUa3ttcTCsEcL2cZubDTrV6",
  "key24": "34fTDRxygeYK1Rem5M8TpgkNQ54v8ZtxsrTikX7kps63c7BCFSm8qnR4yYNn7w2AVFPjEjhkJVUHqS22Ju9abY2q",
  "key25": "4mVHRUcVrZqkAQg92DzQMEDAiAdEykg5iE7YkC1imzw5nWpkUNesk7esJivJoSeKpUgGgFCRRrMvau3Nmss56Y8c",
  "key26": "8nk9VdrrjY4fAKvTp1EtSDEUcgrx9Gff37iLEWG94nj7BRNx6MUx9ypY9EwdEFDU46mTHmhYtpn7rj5Q3R4RsjH",
  "key27": "3SyKncTJegALeE3udHe67rs5hjiCTGRpk2vid4ZKMr4wzMh75vn659f1erqX4Rm9hdCXinnuUeZiwiqUrfTeaZNr",
  "key28": "2Lb8oCRojkd2ZQRG9PhCL58NWfHFnP8v71NFNT9XkUpd1wcFT5SFkvoMoNoprHcWoVNgiErfHkXYDdn6EB2yL4gg",
  "key29": "5DJLpMMfktbbayfehaeo47eVHEea5e5F17iw1bUbU9rm6n1DMyB7yadNo58nDXEabXyYJixVioPiK9JzYmZqTJ32"
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
