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
    "nT1ZQTLbci8dzgdJEWCA6av4mwcsvHPvY6rZsx4cvDzDfdJv88q8Vd6kVHfMU1vzKuwDwvewJya5PGCqyRYwifg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZYHJu1WZNSVEmYb8e8rNgggLSKMRdQ2mEhQzTGa7rRMTjQvagP81tazx97UfzNxoLJi3E8eup9DgSr4AUqoz8UH",
  "key1": "47jxZQQH31tZWMnduDLMhGSRugu2MPG6pb8KQTPduA8QSLcpifkYGwZ9S9XR8MR5HsdQpVBNNBu4h2XRXsTnt9uJ",
  "key2": "5M7WK24iYkg48yexwhHLNE1nZRXz5o5FSBaPXob3a9iSrHDERiwqUGStGKMcxyRxLkovgA7g7s8dnXjkHR1wAcd9",
  "key3": "393HnRLVuEZCQNHYgkWcJiyzK9fMJp19n7n3igpfiwypRifpDUnYzwY4jaLwFRj1pBohQUjkf7Q9R9222CogYz5n",
  "key4": "261ZwEHsYfGDFadn93g3YDBxnh9t7Aww7RHw3rtpEHTixwHuEXsLkCZ3oYJwmz11kjYvkukakr76wbGRn2DNyYNd",
  "key5": "5xB2iU9JJMR8xHiKJVhdvCJCrNjzpae1WrzmWSNd4ej2DGRa94aSsBjzLMaA7ngDX63Z6V8TjwL3KJ5J6Cgj5RuN",
  "key6": "3xwR546LJ273GFuuUPpXUmeUymTkA6MTyKZr4DjW3mKgp6hMzYevYYqTeXtxRLUvJCmq3tYGd8XbEsdTamexgkz4",
  "key7": "47Lyx4VbEov5zmJtuMFtXQrSim3SUK7Yw3q3jkWCH2nFYR6Awo8Kqxvz1Hj89vcMTEm5XC2PCrDTBtJ76NA7ZhLP",
  "key8": "24BHuyF48WuNKAbNK8CnXj9nvC5mengT2UFeWsgaksDHH52MQeqNwNnGBXGgZKZKGLAZWnZkgv8xvQpMeos8bMg1",
  "key9": "3339e14mN8RVT6CUCRgWvsVLBiKYPaRUHg9hb9rFwyg5yT4XFiuYAaVzAEPVL17DfnSwycr8fqCNYwtVMxT1bFrP",
  "key10": "5nCmbsN4Jo1fLHzxb3jAbYXzgXbvnecLk4qEBnRVqWZPpu3BDGLpMLaSKXuRRMYaeZecF1vB3EdK3cmccmtHatZE",
  "key11": "uHNjPCJHcpfsGExGYEYenzYkjTfExdSjeJRokys7rL5ZGXtQgeBasFXd9ggrgHdwNSmDmfQhy9xYq674JE3hhpr",
  "key12": "45SeHDfifXi7KaRyJeWNMV7aDpeL65MmW7DMwCdXHWPKgzg8ovb1sRG6e3479D7LVrfbFAfPdimuyGUKhLp4KXks",
  "key13": "jo5w2aTqqog9NYLjbY8mFE1as38UFrqvXRcMbh7M38rZxjyqRzgSDJ3gByfyJKkydP7giqR8spKeycEjJS1XkUd",
  "key14": "5Sx9KfHCmoSSRHHEgTSFAETPmBWsgF8sDQUXiiFabBPoTyFojb4uJwa8bgAg3fooNuogDNFDroDsdzCK54uN8gM5",
  "key15": "4EfLqLmoayVJDf3KC5dZDaiWXcGss3WaAmwfAzJtgnGEFU9v9Muhdcv6Qo7Yg2V3xCtYJJrpsWXGa2PcxbWamMKS",
  "key16": "3KeMYNaY9FnDCDsxavP8YSF2CM6YMZwncnTJN3rkeM8FyPtrMWAdvzKwpqC1xM22vizioma547ZZ1sHtpLUSje7Q",
  "key17": "3YU5PqXKsT5xVzVvirEuC8x8EuydS1BorhXvM2oQ3PEUaJG4M7KEASKahohqsH2PoetDDgvygB1K1F35HsN3w7uQ",
  "key18": "59TPxAUCULaeCUApMJE338pXf4v7x498uedZmCsoa8B87NCx4wxgmFrHC55iqguqvGcXwp2gBJWrYbypheCj6qN8",
  "key19": "CVXdKLhR6eaR7ojQ9wGXVQjuEcncQ6oXKyERexvCBwCTSuKCYMNGZbfUupHeLodzfHCzjdApjhVqyKTS5N5AQ3B",
  "key20": "WijMdUJKXQwA2GCJrBh7VcQ9wg6YzTvD5qXpCjyPb95DPwew8S3RNuWkF1Y8BqzFEcewN8kHMoEshGzda2FFE37",
  "key21": "b1GZNsmThkoaP9fjQupPrAKYMeMv7gCx9oNX3m6tZrJfvJdDniz4TcWQ43SyUiw4sLofc94ywDDBW83roKmp1UC",
  "key22": "5TpUq8ts9xkUm9WAAZByPVgH3ShwwXLwtzQzhPRUGrZJpRMBWfHwQhskkmGvLHQ5dPg3fanuL3jRXGHb9dkhUZan",
  "key23": "nwCjm5XCLdDQwai4ycRKGEiXfisY5w7zABQddipEemvMBUUSauxcnmnQHEAYUUShwmwsRZyz8rVmPurRq7eUWxw",
  "key24": "Ztx21sKVvcSz8zuK67914vjiJRnLbiYd9P6oTKARCGBz3pFUgVf23K24nTvCU6ZpgrFA9zakhJvDqTsBQVB7tTw",
  "key25": "3zcu7H6HBQmsvv2mzCoMTSWmXUXyV8zdkMkevfsiPNss7ev3dt4JZkfLsHztf8Kx4XTKL8hcfhTT3xYf3hka1LUs",
  "key26": "myhBLwEucSRxBZ3AYGvcm98b8EdjekvuZN7zZG3H24AHtQvi4B8RsDkRKCN7cNcBG6ZzzebtE3ghxA9Nn5ykpbf",
  "key27": "5ir7rF147xbKTnSJMKX6YiqCy4jFyBw2jAR2tCuxmi7UCjUkamTKVogeTdcobFxKfyg6pprihXMBw4GMfQVGvYw3"
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
