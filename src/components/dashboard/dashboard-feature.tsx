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
    "8Sk4GrhY5bjdCiJcBzqhWfgdSRddv5nbcc2RuiekoAsf4opKSbTEzLayxzg2d16RkFfdPJ1bGarw9x8dzr4B2EQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SYE5r86xGFkbBDWfiDpkp2v6zQenm9hUVbc8UQk3CooC3nKtENSgCxXR2A9Pd8fZahuWrfTJ6BWHtFHJaEyjybq",
  "key1": "RggidauAKE7oWFrvJAjG49BPNWCMi9yAfUncpGMWR4P6kqNAxuU93wYRt1uo8xgxTwzEMu8pmrJRH6DAC1pGdWM",
  "key2": "4M5ozTz5hfsFew3Rep19XZ5dBXeLvu5v6PTte2W4DmwdYobp6N2gLyRBBBHc4wpsh4RLFfUkJc2PFJEyNTN7mt43",
  "key3": "3nkhCgybG2WCyhFcSJdm4JmXjDWYgmmgS6WZNmFmca3GBXLBZXCxxrNBJUAhmQLrCVcuhWsfXLe4QsDcygxaHLMP",
  "key4": "4eLeCQVNSDqG479etyAdUjvb46NZRvjs9d4rf4TC5SJUCcHqdr2PSg1Lh7j5b3vgiDzk3uMrRoRoeg5QG5rE5BfJ",
  "key5": "676ZJxizeWucg637x8wS4jGGwXDvCcnsmCTM8GrJGhg9hexrD9PYPVW4MG8WNNjHpAM2Bh3wCCLQXfxE27mVFMeN",
  "key6": "33cc2RzjhZJeCXRnDZd593tQWiswoCZLJj3z8SGfcWgXnX55EFxx2G1vQ9HjdYwVnqoXK56fsvGU8xfjheHW11FP",
  "key7": "FaSUXWWfKssNkn4p9y2prgTEsXUQz4zHYtUAvF4Jq4VnP5XgMQntNwW3KY9VMRbG37R8Pbb3BNPZuyyX4QMhff1",
  "key8": "2RNzdWTcRti5kGApWP1LEPMzN1e76ihVMkeukWBBxpvJseBncx8FsAYGoxhG55rcSKU8nNQMTHQwgqLejW4fg17a",
  "key9": "3zWNRxvyncQrYebbu8nyyJ2qUQhnNY5k7LPZHQ4AuBsJTUisnw8bBc5YaE7UcuggA4rsCxgC3a3MBELycwi8zGVB",
  "key10": "2mX8Jiw84TuyzxxUQo9LcZ4XcRCB5C9iE4dUL4262HCjamBpXCkXN2CtYjfADUNofuKwchx7rFMotEQnVhP9oSVV",
  "key11": "UAw1Fxzjk8M8GTTndZ8SkVfeJwLynTjJANivDKXNverjdeTK3G18LhKuQFWY8eFVvQ6GM56ks5CiuSrLqTPx7wx",
  "key12": "5cdxnixBxjxvpafYvGvtEkeyktagASbjV4oV29eVMmEcpZBdg6c2D8ihvw5vKSgYcgJQnF5zfmxzeZAgw6UH6YdZ",
  "key13": "4xCBps5sRn5rFzAE4UKeafemmPagboGgwWLStrrZMbeLAybPtFkfwCYcnowjK2qmuWT9bLBDtqgesFJwEYQD1UqZ",
  "key14": "4EaPPUrfYVpkn27ewKbXPPXwQTdoiwX9Ns1JMD41iSi2ioG6EK25kTJDUACVVTF6JBnH3n9znx84M2FrrKRAr8oL",
  "key15": "283V9j9XJfnf1xzJeEkW7qshkzKBT7s4XgL4aeDV2R99xBjWN4Jhb2MnxTSnjAMUvVWifLCgRMX5xexysSLis85m",
  "key16": "4nQX2iNZYQRrWe6YWLb2RXkYfkGPUzxD2zKxUf83viZJ73jtPaQM7EB9xMSZ67k1CTaq19Q9iJ2W5dxXoCUB7HJ",
  "key17": "3uPLwivBMpcEJ87dGu2b4MfCDY27zCDy7p8z3VZFvNcm7ccDhnkTSFaMRaViDwPjru3DksfH6DtVfzYkhp34My7W",
  "key18": "2LVDXa4vXcYLW1Tcd512zeHsze8GMaBTrXthZuvpg6DN4DDXE46GTjo5zdYYQACrXhU8oErUdpwixbDchVyBVyxx",
  "key19": "2FCALBmFSeyoqi78wv1iwTxXQ92tLgCsExNLmzP8E1vNCejSHB37ePW5Jq2CHo5VPt76pk4o3obuVDAf8cQ9mZww",
  "key20": "3wDh7aPyPe6fybkwoNKdS5M1yyFdChM42XC7xYZk8HunRxLuB8NiQTPmxhGHD6jGgLxqJdnQG2MNawVYrADZHQB9",
  "key21": "4VrhK5XkShte8ZGVuD7vkpUfrWw7qmNxyRxjFW4cs2gkbp9ZQ1TDHH7CFH8tus7MA7s1dCj5rQ1CQ94xkK7D2Fba",
  "key22": "5y9ESEu2qdpTPrgq961mYKfeEr8M75ByNAoLHmg91isteDddDcGfMRtSLdyAdBbkB175zP5a4RtMV8vvwhEmovSU",
  "key23": "5hMc1swkNnJUTqygSqxo9euMsyCwzv7PYS2uixqc23JUsdS42yDfVXmKMwqReKamwhX2o3T3CRx84Q1ZWPuicCAu",
  "key24": "751BDzLa6asSkNMVZQjJv32kGsn84JC5jp4hs5MzNNcHFbEVZ8xnwVTqnMNWPpAcZfJRDKgQLNf8AFYx6aJy7q3",
  "key25": "2gdvtKKAa6G2hiFBVVTQCgu4C7apewV6UA1S1L1TibqyV2shQnTWJDudmwzmvgx5BMKRcWo3rqinKXJDyZcXqSNw",
  "key26": "3jeutts9jPM6AA4ZVg4yVD334yZe6sLJbG6Fp1HNF8p1aYKPNG9mZWt3eis8iDao4Ty4YRW8dhru9NcHp9RB6xwY",
  "key27": "8PEm8vXNz1nqrXTLfjA9sqLrkR2g2VHmxbBqvhqtvnFd3AYVnamyf5H6NybiT22NvTc1EanVwVvx8y8uKFR3Cdx",
  "key28": "3E9KNcLKMFiXpwoWn9mkDMJaRJi8njy8kw1XoWqcpm1UTpPitVmTj72HiEoopQoSwmxWjMdFnb4WkzcoeKS5a15W",
  "key29": "nJ1aqKGuqE5YszGFH8P23b9meeiMs6TsHuVYBhr2gFUkUCWw7kvvVAsfEM7HTqPD3QTjv2kETykoAoWqNu5fsZi",
  "key30": "4S5AQooK6dcxSNcz5ky6akJ9GsNKwM1noj53GfcMb6z4FFWiZAkpM3XkwdosW6Do6KMGUTUCQj5aw68LvrZdYxZA",
  "key31": "hrnwyFYFyMBzY95iF4KKQ47KoiWYC8X6YRgsiH4mnkmmAsSa6L8tSqhnqBDwEC8DexaxsSuc2EMXKA17fYxvLkL",
  "key32": "4MkenpJr9YMdwyNwbbJbh5WknM1FbtLPRAdTQoAMGWCSBuohzJaQvkFBoEZosESjiPrfu8HPoBYUqZkDAw6U7tEL",
  "key33": "33anEKYVnaXfwcCSjKMHCfDXKyMaKBf9tG21ZKgkSPGrcyUg2pJwM5EXtkCM6rp7CfCNhcTqYX9LbF88g9RbksGE",
  "key34": "58QHXhPS5zR7ivraMQiKoeNhzAzHX8vJtU9yHWFuJ7iCteAmQGbmmScwqj6FyYW8fpeSGKsnhjUtVoCpHEszKqtw",
  "key35": "Wf7CfrQV7yBHeUMM4S8Ggfg5SBZ3KpxYhv3e1e6PsvovCKRPut2dZ4j4jT5QZpvkXWEYEKX7qxB5zaArw76ULca",
  "key36": "5mMJtkj5rvqAxQ4JzmoXGjPGp6Cy3iT8ZzBNjX3Vm3K5G8TQ63an2X8mGD4KKownG1DKh9UxTBo2ebW23SoRSnGw",
  "key37": "54JL9DeHJvWzEcdwzhSJozDAVzXJgMFEio136kAMU1iNmJhJW27PKDXUzqA5LakP2oXf19ttcL2DdHvagadcPVpc",
  "key38": "vaSjuJgugQmyYZfc6UrmEG8WSRBs7TcWsgskQLZrc7Vp3U9t1eZGmPLHKEGufGsq4qEFboTnwvWnVYz2JWqn4gg"
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
