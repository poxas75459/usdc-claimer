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
    "5VMbGo3pCn4pK5ozAk4ABLqgjMiaZwW4Rj3mMvNn7bKv4BTPPXkkCQBpKVNSqSuVHpenT442xnzKfnKwq5HqYdPV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JEtJnQhBNe8hrLYmTwgwct9xaZFqNBY33VLDSSADMX5nGpsHAXiL9rRANYNJK8a9ayuiSGpTbsfsDnTHKcWAPMQ",
  "key1": "58LjhaQSr7rzxdafv5Uv8MVp3T1GEq3KfFaPEo8tKeR8fESBcU2jSKQKMoX7HcSeK4ezs79692hXf49zvwsbqF9U",
  "key2": "5WjPAfPbRBRnYgL9wU4VtHq9dRtHQus2gdUsy74iquZmgpeqhNvb4An6Ej9PkvH8vHfqTv3GZf67vBwPKmVbJEW",
  "key3": "dYgQaHRFEnqkv6rHUsKKu6T2TGoc6MjetMn7SJBtC4UfBZ96b9J6uPQELXNBx1hB6f5dJdifiiPUtFVaniwTE4d",
  "key4": "2m8Er9cvKU6VzFbpWs4WzZW8PT2PqyV4G1sxzw9ysHLGVXXGiCHAJfRWksgkcX5b2bNsFhJUp5gKZDRdr5T3zyx2",
  "key5": "3Hq4YHWX9XrN9M2yiGyyh3M9ja9Htn7FJ6nydTVzEsXRdcyGHfo1N3qj3nsMd5fft1gQtPHq9bZNQU2vBx288TXz",
  "key6": "2faGEhVg6a4h4nussmsxhpRzGYqfZLmvxBQxAtsr9DLeEzg4NuruMVdNg85Cab5JS8stBsyUtHc5u3KPYkznutvp",
  "key7": "67fBRWpAxRqMtqxWRTzQVwYyCoJ4sXLaj9TbGGFL9e7TZsKiBYjZ99ocZbWV7nvjZ9DNea7x27UmoZQzAiFdtpw4",
  "key8": "4c4FaPJn9QbNsgnF6Z5C8bPMjkrgMbKUAidqwDoV23VT8RfeV89RiSimSTEkY6dJWqnESGYfmy9HMShfpNjaYZ46",
  "key9": "3uqyN7QfztX4o3rXZdiQwvrGQohjdzWtH7vgZNJbhCQSyuZMqBpdjo7pzr8kt1976wF9kj2ndv1KFbYRcyK8s5JP",
  "key10": "27fKYVWAnT5F3MMeBo4NSpyY224kedDywHaHhL6oqJnFnm57ScrXv769HQwnTpKJsheLBYrySsFP9AR9zK8DoGAQ",
  "key11": "2QWDdGoj885GpfEQxnacPSpQhGNDu48mXWZd9LbR3eJibRBpPBaMmDnLFa8JTnK65CZvhdz8vwbWqccgMwcEtohc",
  "key12": "2QsEB8yH9r1gvpQ6N2o1PyAAnScSHhFSHkdhnESvjQBSSFktorhpwvb6SmDzUqSv1JiF7dR2xwJ5fBAmdmSZegUZ",
  "key13": "5AXep7JWg8Tkoq1B5UJpkGzHb9ZZSihe6N43yYxiPDdxnQs6EESb2c8tQq5JqxazNjFKg1Z5z7mXk2UV97eBMWiG",
  "key14": "3bAYKnxYEzHzSojDU2DKyjexFNtXUm8jD1tHnTBGAzJ5ydu2cKBJEAqWB4Njq31R7t5V6EC3nHqEcx45FXHcoTxp",
  "key15": "2CX4zXYQ74thc7wArr5N7cX79AvPb4Zf9xvNYZrj3UctfWtbsfeF26ZNTxs2e9E39nGPSYYque3PGXso34jFdkNA",
  "key16": "CZeozqW1pAU2v5okiycZvMBAvpsLupRv6CyriT9byNpuXsCLTBnyQWM7KSw17PA9uEN6SbZzZXdD3W2rL2wTphD",
  "key17": "2k11QYDM4PVqVL7GuAU7sqq8nGrbGq8ocfxCGTdnEifnZXZTZ9CGRYFJjnRUPv4o1qhCiNVmXX3eAKoTFSPnDeyS",
  "key18": "5HT5tjaHm72bTxZaS2mpbn4c2vm1F1YyYSSqC4GLhcXUo7M2ZZbrjNdbdi1XYjbdjwhFiTXuejHLAKKfFx8DGkhZ",
  "key19": "3ZEkaQZPs9BCQzViUP8snGHmZnyMgaRSfKDorGwNNj6gDemeACS28TEyaD5epT9oaQKWxABDZbiNumt8ravrTkZf",
  "key20": "5MU9DRgBW8V148qpXyrwqi6XEr9gEkMzBrKF9ykq5LvHAyfvBoUnQgC449KNhstE4znJzGs7HFwUpgg4Nd3PVWgP",
  "key21": "419CV2V2ZoHuEun9F9zPDSsjzLcv4AzPojna8t4dq6X8iyRG9rtQdL4SobMrsFXt35iGomxYKDhx5XHzZP8LvKag",
  "key22": "3EtkQo2p1E8eFw1gwyV23kgRZhoKV8AnU8Y5JE7sosMKDozJLGN7sb35b1oZgLLCoVGbPY5UncCTdu8dLn2FbjkE",
  "key23": "4rDtyLtMw4sbqhgQodWnsraXJkbqcnJerMB6WKykBxA29pqg6AL28xe6LCvrcz2HWHD3hnW4TjZKtXNCojCJrgvL",
  "key24": "FintHdWiCm6fEwpQ3YTmV7TG8uddDwyNsgNQQCgVzzS3xYX26MsL92Lg74SMX55htSEm9xbvHuw1uwG7EMZHsDT",
  "key25": "TaBgFZqjsnJFbPqMCXEF1bFTkkz4DtozQstR3SC1ZYRR5x6RWvwtzozSKwMvgTDp78YP27fcic9i6GQhGkPXU7E",
  "key26": "61yKaE9HoiJi7C33t838SNrUQCN7XpLAe9dFgtPGawhepfM8FWoCETEnj6mfokE2w2D7YXfU6R7rcjYfs4yuhmy6",
  "key27": "5bXEpjSQ4t1NZ1H3rCd1YK1aNBAsRjZCKVZwYj85TJnvq6D1UuoLfH5uNGZjLqBEMzEZsFCFsmKmNq6xADwDkWtT",
  "key28": "5sqbHfzs6fXsfUhjTYdyAhVk6CC9uDw7kuc7QhNRZAagBgqoVcCZkWCBCzRB8J85ufLr967ucBmjDMrC9nE9Ko8J",
  "key29": "2iVK36XxeEZ6Qg9MduAvJq64jeiq8Ei4eN1b6qdA4ATNqp8SGZDBMyfZonMyzu4WGSZtfzSukbYrFaspEPhs4mUu",
  "key30": "23ka2BSDuq8DmupuWaVTQRu2TWt8nRnfkfGyzDUygJn93xth2jsMPGRh6jNRa2JshEnCcp8WwZs56oErrqK5aShe",
  "key31": "5UFoqnDrB2FDdZnChcV5iaKPbqC3gmJFKvUfvyDBdwi3BJ6q2a9xdvWFNdr8hV3SJweZD5exRvqgvJYZk9N2JQ1R",
  "key32": "YDEwsu7G2GvFVyFabrjkZZW972Uvr9bQJyVu84LbqxaRVeR7Dp8cx3qrMP7AvX11svehuq3ZV6mKkaS22B9n3hQ",
  "key33": "4Y4CgXZTjUH5sLxeAFDHvCt2P1bPgdnnmUEisMF4sH8iXGtKk6Qz4Xb5JNFuPpbArNwZaogesEAM2zfAQ273CqEg"
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
