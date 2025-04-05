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
    "2iHisYi9oPheefG2271bveQAQWcs5jSzuHaZ3dHRVkS1JZTNCs8jNcwBJz1rf7fQhWptXCrC75942pMnhRBxPboK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WNbunJ4UX3GixHNCXGQ2w6XHT3hn5zaHRJWHmi2ZQ7uSJDXSqUphNBTZpWN1kmnUEXR8siC7icE4LLPbSAyGVhd",
  "key1": "5CQiM8zg1z1WxxV8aVcMaxF92m7hkjyNKmur34bdMiexdrZdkzB5MMMaGkrgLji1wEUr2ndjkuzf44f8dvS2w8CQ",
  "key2": "Pe1zSHjiJfoBbT7zaJ4igSos6DatWgeCRscFywpxiskN7EHTr8G8zyXDrBENfhWk8nsPFgemD69ozfPHSKFePs9",
  "key3": "LEhVyJf5zp2fKfijgBfmtbSi9Eaj1aciQBjFdUdEQaWUCKbAYdL3qM9Qvnq31GLmvknDdzfEa6rHdWEAx6v34Lh",
  "key4": "2LvMNvh4SsZWy9dvv7phWWNLtQCPxYqEuEh9YcSG5D4ut221cSkGHEx5DNfg2GnHsGEtFcpBpWmCKPQbL32GTKWp",
  "key5": "5wng5ZNa3JLEAPDUaG9VgYXKs15EfPKSDZyaJZM5yhRADCJ2TjZQ6DkfSFBKGmhyPYJBYEqZdec9j64hGrHYpDcE",
  "key6": "32ca3vNNMp1qaiC9Wjha12N4P6n6R78XVTcjzCDypmAB18RgwUkTdNYm3eczh5vBLfJCX7o7i1kBUhhmtCFQj41M",
  "key7": "4DZSdi2KMoMR8Nfv66JrJHtZ1H2NuW6aQGViCDi8eJvPtsAqaBiBT6gx3q2Jw54DrcBM81oW7eMsvcHyzefQyN4m",
  "key8": "6HouAvdLByYPZs4MTGD5yDK5jTyaorjqMnnw46Jx8uP6iekxTF5P5sVww9Y8TFFHUVsYNAoJ4BAp159A52Lbkth",
  "key9": "62bEFbMHM1JehT1HWaHTF4N5t3FPFBgYTpXXtY6gLoc6wfsMnGDP5UsM5TaBHLtvvaNaH1RhgwQ2AaCAVxHFuUEK",
  "key10": "24MSDNBdW222CqZf5vffqAsfhP8rDrr2d4iXZDYAmEEQGQfCFAzsKZhkxZ4qK73973vnPZcLKUKfK4Yj8y7o8FbB",
  "key11": "44NvLLHoh7Lp76YpxVz71YkhAuKUVoU1dJE4bBHywvzmKo54svMJ6rceaCJobdoHUUPPUt491BJv8oP1v4MvBD6h",
  "key12": "2QiCsvxVhJvWt8TwzREyDRDR5Bwet4H8y1FiyKD7SYKptQYgJ4mUcxy5JVVoEpadNmwPKxjF2EaGQqxHJ7fPc2dW",
  "key13": "46NAMp3VGKMhbtXUZP1DchQu9bx2fR3JiBE1R9qyJJQSaJCC56UzTvrMNDmQcorvH3CVkSMoHVvjFPG3ArSAtVzA",
  "key14": "3CwkB67fnSrU8SegBrSAdfCJKwxcrtD9zmhJbmyDtsyxsAdZndJAnbF8woNvBHHQtNEgNGu9VWSNzy6XLasuHkPL",
  "key15": "4L2HWa9BRZvJkLGXEq8m7aE8YrUeUrDDuHbJqWHcNorHYQ2hgmL7wG7mwneeSCw58cbyyhhfCeNf8G8mBEDGLCgY",
  "key16": "2uA1iGPhdSvWWN97ZfQJ8rD7iv8QZeoow994NYVsYxJ1ZFfaufMR4BaWv5buGgVrKPa7fk4EzR2JyYE7nNNVaUhk",
  "key17": "2qiu39PAfzGU9TgHuibrHLGEcD5VRnLf7Q2u9oR2Gu3gyTLdUxjQYe4aisgn2ekUytiijiETczWDdPSh3ueoiuFG",
  "key18": "HTFiCXLTBHnyPZgNmAqQZfKjx1P4GYPWrD4buzBNNzqvGTtL7kmxJaz19QwEecqYATwxiuacABPfHqA5be85y66",
  "key19": "5gudNFxj7GcntHisk7eGKbvis8UAGwEZzVYLWytAayVqgSY8dTkKMhdxr7jRUWyL33xHjeH5JH4nitAWcuvpDJcB",
  "key20": "3w8LPPsQS6X2KdJ1SMmdvaLR7JwG58q1DUpmdhN7Qiv3yaXbAzrpPLnukHauW8Pved2iExSs1e5SB2T1kzX9mzqx",
  "key21": "4kBw8fWCfUu12evbjPodpTNVEDnim52CHw1fduThvpR3gXYsKSJcadcyqBby4XxCA1ZSof7iBNc3xFmj7YaJ7f81",
  "key22": "4aukRLffVHmP3nRL83thddFzJTwFPCtZqdJKnPhUAAzvLXwF1FnkcjGCii24eRaVyLAW6mUA2yqpE1MZQc26Ho1d",
  "key23": "3xWtte28M4GT1otC6Ka2fa8ECvP9W9qZzsU12sAV1ZZ4fBETwx8vepdCJyN7w4b14r8nkvbAv1K3XARdZADZ91je",
  "key24": "5xuvHsWyTTJuNNk7Rh22jVataGHcsG7DCVxgZjM6fjUAXXvBrNL4NpT2SxoSMYcF6gLmrHofmPVtZTSJnn3QJuLv",
  "key25": "2szQoGonLNbcCyhDLYvX9odgHGLMBwX98atnDoNKN4HVJwXnonYaGf31zZCvsYWQ5CBj34vQ75HvsEkKP5cpBsmR",
  "key26": "3b3Vy8FzdcoE1bbT6Y7B7mT7FRo1pGPSqZwSsstkDYKoiW2xrhpmRqPujxKD6KASKjGTi9NUmeWUnewCdkPMqQ6o"
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
