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
    "2swpAFWmMhAVWyW7gwSj8Xmd3KFyN19JNe7cqhspQQrmoBq7W7frKkH9uu6LzhoXh1gfJPnXeFGwZHgwqzsVz875"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XqzzkkAKvTtFSqJgRDtb6rkD4LrSX3wRQoSSt7Fd4k38h2CQ133e3B4QcsiUYMZVMPrt9vafgdKjiuoXYFaiRus",
  "key1": "3aBMQ6FrSqg7v3BiHeZtj5y4eLWXfeSwB4sfqsLMo7JZpcu8NfoJWvbLuF5nc4VW3mjwDajDV1vsuhExB1bWrRvZ",
  "key2": "35nSVmwYXtDzH4tskStfyZNzoRkdh3fr63jhN8f3HYXVJYUxMS9wKEnthkWYm17Ub6v8ZZnPoh4qYQTGiwbtYQs9",
  "key3": "6Genb3N1L4Tscm3Cknp5sXD4XqNnVvHDvN1we42AUU99FCR5Ge9FxyhUymPaF9NNDFzszwJpwLTSGrx2uoWqLbi",
  "key4": "gs6DHtv7RYitMLSMKh6f4Qor5gCWduXH5ED8KRFu7z8jkFw3QVNUTUybYnP98cuu5dDtRMVeH57CqVSoBc3T49T",
  "key5": "5QCeGaLgRDU7DdqNcezEuY5AQY2JuGWp49b9YweShNB6PdTsSEbgVm7VvnjLj6LMGF1QX7Tv4APbdci9x2tTQLV",
  "key6": "2T4ckz6ScWqi5F8YcGBPrfRELcvTDKE8bmDNuqABeesik1FLCUpt5H59NNZvB1Ay55rYoUc3WDQ9Ame9FwrL58QZ",
  "key7": "5akVPsmZzAzsMC8DwzKCKwYjRSFhP4bdb9BKad6HH19n6UPrCWd6TSL5zc8jQwCjXqkMQKmPAFvftoEd3M51Juho",
  "key8": "xDXpaU53QL6kfEiVpADMm7n3cumP4Bj82fAMtvgzoUf6ogYngQmDazVLqQv9PTh8EfZ3ji6i3Awtchqq1F33sEW",
  "key9": "CnALz5wcnsNp5NfHfPPB483hUSx3FQfCeCyaS3aGpmWhieoXqdStnmartgcUzRUtNi2NPCT7GW3c79fpthF28h8",
  "key10": "YBGVLaAn3nM2x7XseYLb5Hi5vwQBU1bsjAiwy81drzhxhDTw6k2EFUsEjxAKsBySCU1BYS2KHYZLeg9DvpdRDRz",
  "key11": "3E25X2j4BpyfGSYiCoWmm4KHtyoRCTv6CL3v7ZkkBbVkQ9ATQ4wCiazDgrrx5tT8EvLyRjo6eDnHF3JLuseDqpEo",
  "key12": "gNQyTZCey9NqQHw4os6wiv6yNc5LeVeF4pSvKJzviTptm7X8HgTbfuPiV39aeeJeHcjkZPDxFdobLUHXXKLL4Qx",
  "key13": "43dGJVrHBJ7fhMwDJHippuiVfG929xKsBwN3WnVFo3Ge9NRUxfEH9WFP5fJa51i7GWVoMfKgnX2RCipumQfugs7d",
  "key14": "v3CAF4YXYkkznrhqm97v4psePiptWBvV1wkB59Z8PoNhQR8c8YARkDwcjsCsvQDSDSvac8kjTy9FsRysK3itYS3",
  "key15": "292dWXQQfT6KqHU2acaf2GzFmZ9hdMHvcz1xEiSjTjcc35T8bKqwQkShYu1MNSde1bFUpzEW81ewqAiRGei7Drab",
  "key16": "2GAjGzDqe7661wnEgF7cTXER6Xa4NPU2LQZBRT7gggoHLfyLUs1uycmReHcVHKcxgVfDYA1M7vecT5LLMFKuc9dx",
  "key17": "dvB4rX4wzHUobJYmKRy1KWUqZdo8v4LPvY9VEu6eLeCpTejwWdRC3yXDPqe2rkZjTs7LVNDKFF8rkSm3fVX4wQz",
  "key18": "4QHhbYBzLTpe6tmvkDxbxktu1tUkQ844SMzFeddsLoGZzPY5yfd9JTDxgdieWbC9gT6get6UhYdbCJNvUZ6eFWHS",
  "key19": "4QTgpgoXUR5pFsHvHh3SQfrKAwi6UZfQdr4BSYG2efbfcjkB9kXjSQ3kopwiUZb7UuL7TKGLSENBiysWJsrxnzid",
  "key20": "4388YbDK2ibtfWLRSF6rsR8iMsB8BKjV2fLGQ3nPaQAb539sfz4mLD4tjBnBiV1JNWGE3ZQEaZiCUa56fJYQSjUH",
  "key21": "3m2zLFvU2yEkKHvFN724ucq1rrHiK4NUr3VUGkGZUthLtgSvTbxh2duKsVuRKTsn1mVf3V7SCrJ8APwLv6cXy92u",
  "key22": "3dkwqg3JMGniW8YAGJsM8v5uRz9bhAZUS4G3bWjFn6NDrpk7fxsrY9EdsJCXBF7dF4thJsgMJYyK3B1PSwhX231r",
  "key23": "2Pc3RvbRhp3C9DSCq5KvsjjvCoXYXdA9RzD3xqsiWz6uZwTky6LBQKKAhgxCKNTw4vVaqjYLFnWvAEYxLnrZ3YJY",
  "key24": "3xvgK5pmG2A1PSUsHN94Df5CnrCx7WSWaxYd5QRHoiSQfzpYA3mY4DRjPxLmowk8ws3CsfLAQsuZGW2Cs6DqgYfT",
  "key25": "2LZeSkHUR4NchLpsxssa1et6oedcfPBx6ww5tfz31NDe3tTHcUf6tZLWEqa2JSUsqdzpB7nugrrqt8d5k11JSpv",
  "key26": "P4gUxGEKQpdcXaHk4dVvFtaH6GHhVurFi1ixwnviCfqpbCrBWZXPVmPDbXFmc1Ft8nbcYrondk1topVG2ags32F",
  "key27": "w8sW8PQPdfLVPVR6DVfKT4JgsQYjj91GzR1zPkoaM1SjRGo8nugsT7ytegoEcc7mSYFA6Y3283CNWtyTp7brx8v",
  "key28": "31tywEphTpNTJzRsd9xtS8XAYhmhGc9hMaFSzKkWxmAZyyUP8Wksdv2xPMRCrctSgiAwvQ3Y7Rq9Y84vLwUFsjw9",
  "key29": "4Hs32fGFb6ugQAuYLbySGJ6ARqXJqEuXAsTBiTG4mkPTDzxd8B2jBo69FTjyE3Rn1Yfnj29yabdcZgKcKgxyYTVU",
  "key30": "4TuA33FP8LbmLEAudfst5jkoD9KQHpi1pCyvSTg5zNb4D3R8bdBndbHt5HccS41iKPjKqxfWLiAfs5RxsMzDauQW",
  "key31": "4HUM8trPU3jEfyXp4oiHaNN2MYBAWaSFMLhcaXoQ93BX1RDxfYjiPq2qJEczdExnC4GKe3ARrrYYc4kyNoQGioHX",
  "key32": "2Fss8evhZFZEYGF3GU7TQeebXXQYo3pY7Pj1MPZKPGGtFUSn5iTFyreAeNv9x1yFuKpHikyPUo174Kin6sNkKwBf"
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
