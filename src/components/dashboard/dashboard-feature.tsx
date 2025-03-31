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
    "4YxnnNk43UG9stFGMmTw2naWR8mxAa1Juca3FwGR9TnWJ1BHjWvbH5K9ZfykW6HVx42targVorgAduMFeiEFm4kx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qwRmvPbyMszLYhF7zzXUT5BCSKc1LYPzULSKXRk5TBP8zCYYm29xxvtYZdoM4iqi64bnY7gTJQuT8MdCfGpeDYe",
  "key1": "5YHEHMGqicBv5NaRwQzHAbwZhs2ZXwcBhWidp9NtyKEJ4dG7rEj5pEfhYSigHg6dbk8r2xKFhdHznirFdNDKFqDK",
  "key2": "928vqwp1feqfKCnSD8BZfiSASBpLmX3gwXNMM5Lyr9horTVMT4Quh6rPADCmK5sW6EgMqMPPbYdYEMfR1jkYbjB",
  "key3": "4VwwR4CVrFykMvwvGXrdv24eb4ZLPdx8sfiUXpqLMzDTsoRLTBk6v3e3h6CF3bekxM1LJr3mbszaz9Wr4Cj7e3DA",
  "key4": "3NyUBPUzWeVJMx2SyLzCy98ACgXvHn89a58HuVL4SME77obTWkAWgLaW6JwfHNgJrT99sDW72iEV6WXqKyPycF4d",
  "key5": "5oqmmSNjrBYaZzkSeEwbvmgc7odyU7GCSGgiPekjAGxMhMA528EXupkdYa1pBLjuAcmqjeunRShr5bTspbGYimV6",
  "key6": "4mkKGqqecauGTngaTNy7683t4WMN8CfWJT8YDkqSkSRGPahLrEi74nDeto7b9cAidhvode4DEmMazX45ptBMV9uM",
  "key7": "xZbUzZmQooi1vaNjCGSepmo1eYVqYfXAjzQJUvFHJuEMjpd6y87sToRbxEaqD3o1BLodkQQaMsjREgFpZUgR1t4",
  "key8": "3u8dtr9xZxHmSVzp9ffLLauG6tbvfbsrrdWCANw1wGrKPQHwm56zzgsQraajGTai4TunX5vtpsT7dMfJYpMyQfNp",
  "key9": "2tAgXy9riHek6qL2FZJcBDn9GHBaTUDNg8jmnNJRVUS9cxkteF51fCCbVjw8h4W5HNSN1c8eZyXgdhca8rkGfiDa",
  "key10": "2WcLDyycVEiruMmBsYmEzku1Y9ARFT5EyeHtDaYjN2siYbsrtCk8NvMCdXHDqJSQvofms7uEMRrP9B9ymsmucoVq",
  "key11": "5ARto5WYFthHB5mfyVEG6dxJBsaDzCa11yGpD4tcjRSyGm3txvwL3pUxfan74ME9JEzWaSLcYHGMV525pUwp7RM6",
  "key12": "4CyTvtmsh6FT6j8cpLJyokPCYKxxdFFZieghZ6RFMuSnrWcjvcrvKrRs4NNwS9KaqdGAEY4MsXrTcQFJTYqSoEuZ",
  "key13": "4yB4XgprLRB7yrdfRszKnnr5qX7yYt86AbvXUmezN3VtGzJoDvkffLvQWjZQZoB9Wt65rBVDxK8pSS164PWo3L6H",
  "key14": "4bXccc4jBPh4vxFD8ePpKXFC8J4LjohxTq4r5VUNXhJSbSE8aBCMWmxanqsXRKT5wRtZp6z6W21HHtFNSPuTXHxm",
  "key15": "4cmoM2VF6EWNkDkpBcBhg1auonacfC7sa3xXGfqi9GzzCJD7nxyT77oqNwPzsjVapTCA7y27ntsddMswtzyeyXYd",
  "key16": "2dnZJDhbi8SQCabCFxbz44wnQZU1L4Ymumj9BTkMct6MJoN9vasVHu1TQx8K7G8XWT6oXJYoRZ43uqnfRZcYfLG9",
  "key17": "56EobpnW9No6bnfsZyPb1pcHT2aQqPthHcGybPYC7f3PuUyMaP56J2v1HYFJMYkcCzGau3G92NC4KYrp3hp5teeU",
  "key18": "57ND1ogtTviTQV9Q1GT2EeSMANYLU1VHNz2ivEaCeiK29j3KQfyayMLgMRnWgqVRzcGpwEBD6mQabUzxRiQGXJM8",
  "key19": "3KVrS8Bcszt3Za2Ey9GWLZPcYTDNRLJ9ynMaQdxijLpApWxMjn2sGWTVtErpV7FSLudrhCSru3KTNyQeJJkbqny",
  "key20": "sVHsKN2oWpiMCxogXMNh9RS1sisqJAzzjPnfWCRpnaexpb3BhQGexYWkTvfiBjQUM8vmePwPUFYygt56sgK6SYY",
  "key21": "42zAwCwCxhNdWaGTVw1iSmCQUqNCH3egRbmUM2RtsU55xW7wd6zTeBHYKRCa8BQn1aJgFYBPBeLtz1En4p6NHTNJ",
  "key22": "4AfLwDa1BQmWa5xbxyHSJejVTS93zXnMvFgY75wGnE7qkysbmizEFWcorK1RmJRBo5zmnYpsTPxqRnEjEgjqacjR",
  "key23": "xd5C3GY6cxKcGm9C4m25ygyynPZARv3GJhGNhKZVJqs6GKignm8cGXLpVimEmUyEWpVPh4RSN2CLNnkFYU5Fg9o",
  "key24": "3CxmWoG5q4BF6eLAdK2sToYd2sFoykbk1ctJpPsLsY4aXRZsg47HxbrsGzHP8eNNUT3VzTwXYKd3B2deFTtWP5jK",
  "key25": "3Y337SQvQiCKf4tBPdBgd3xRGtPrmscxx1HxpbxA1dVdmuCe6dPYBzGEtksymv3aZFAgiE7kpy6BDNFhcoVh2EUV",
  "key26": "61y9nXsGf1WMjzsXrKVTV5q6Sjkm4rYx1XsvhqLWPs7LQhne3vrKpJwBD14p9sBaqJEq1D7RWzSqmdUdLQgL6nGP"
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
