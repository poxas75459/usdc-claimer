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
    "2YfqjEJJtsiEMnC6JAUhfk7nmXdk7ogGPsJaVTnRJ2dT2yyz3Gu3YcNCQ7eBAbswTmFvWLjwpkT833yTmxop22VC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HVxwUxZV4DCZzUVuK6MBpHaLzAs217NFogmhJxtFHYr3UwWWjw2Xx9Si9UJH16zMMj43MUen3npeZMJBL2JhbyY",
  "key1": "4v1YokgvgPctXP2b4U3N8g9UZDQvy2HuCJy22CNcYZdtxswgi5TEJRufkfvXPXPQsZcNjnpnTf3wByNS4oVtQE3r",
  "key2": "qrbXQfgsj7khvRq7QA93cC2SZJkVCyi5tsprqtufYJzwftsxJ4xQqC1qHFiWMcW2sTRBMGkLRSrdpPdzvfL2pH2",
  "key3": "3DQWSCe7yyikpBHxmJ5qav8eShE1iUVeE7tkkG3oWPnLa2r8gtJt1YTQKpFXBM2vuAQk3APF6KcKGfoZRmyDBG9d",
  "key4": "31Xe1DjDv2L9riz7jtK7VnpnjuvmcFDiQZoNKH8oKA1Wb7GWcdFF3WQ97wt2JhUx9GTisYVuUodDXADcKC7S6hrs",
  "key5": "2iCujhupSY7QvzmqCYQBnXk9WU9AG7RwHEpfVTu4KRMmTW7Myq11ukNK2v9yYuvwWRkvTQpRAQap7kARbxRUFQfi",
  "key6": "4PDLydyJ22wH6FRmyaUeiNkvVfEWLjwQAC7TeaqAYVJAhgJPDMS56CfeDGJNec94AsD8gmzC3h9Hk1gQCmcdJn9k",
  "key7": "5GsTE2DX6p7HAANadU7s2yQD7FP9KnUNJeBG8sVRmmR8gbEZTYwLgYyR4GC95vNx18tj1oM8skAkAB3aYvyUrAE2",
  "key8": "5T2BGDRmkBW6af7hou5oRfDtVwyhdagxDSZjzQHzDvEA6zCacRkzUoVrL97pwTHKYnDNbAE8LJGNMUScdFpnzFUL",
  "key9": "4F31YCp1Y9EhkKNKvJwpT77EzMm2KdkdkdMz3dLcujC5xiV5QempmXindzrU9GThjegxdDD8b4qg8TPEGs3bFNtE",
  "key10": "2yujFnQ1KW12GzWkZsTNzaGeWGBwyFdgp9MsXv7NjaHyc4MybpWU3ZhUYaxEFBvB1HsUw2efWm34L9mPJizuG7jd",
  "key11": "5JajTJuLeV8gTZdtpDZzgFnEMMDGBfuw4i26aJSxbBRRsed3sp33zRLd8NV15xchRN8AEk8RxvnsggfoXjsXz9LA",
  "key12": "WMp2PD6joaFjpv5fby2vAdTATj9YPoUWaxUVtsJykiZ8kee37GpgBVv7kT8d1y2Hbrs95UjohXuMyCWbHU9TV2b",
  "key13": "4zZ1tS3bvQJME668ptkbRKYqWthFywtbXgwCTPrRcVADudjh9UXNJovwnsnkPgNS7hsuzLMY9iFjMubW2aYCri1W",
  "key14": "kih5ZHDUKF7A8wV2LBZpBYcXxJ2Kx6BQoDSt11xfsyp4QUoyVJpWpDZ1mLdM9Ldjbu5qX81wc1gApBBSvWS9Axb",
  "key15": "BV7wFK94P8Qz7vLk6h9qQzJFnJDUWo4MHkrx2Q3J2zydyRTnuJKHx7z44uVMRjhYgwnakehfzhdxqdbFDSLnKoZ",
  "key16": "4AmRH8NhxhxhTaUvZGXHVJZmNaov3N6q5PiGbNnqsHDaHZHNMEMjd3muddYv1xzJQKVrMABCEfscvj8ggd3bmCCF",
  "key17": "3dMRE444WouUHcN6qHfFLW8bmpPmsaXGn9EtWoGBagZ39Lovz377Qn88JaiuYakZu7JEYGmheWDfZwEToozk3gi1",
  "key18": "ULXVDgTmniRakz781WUWxeDtyGnQZDz8TsuiR6atRM1zvKUcrCwfvNK9VMt3Z4CTd3U9i9AeUfvngyXBD1bdqpX",
  "key19": "2o96U2zqvPsBcwfCFRoGTCb8Cnd5MsJqryviigb9kidB2ofrE1AVmLeGXRsV5q4XhWwyQ2iYFjn3dh7zvHhgDytK",
  "key20": "3EZGA7178vyw9xfBLEUQ3Zb2gehEau1rjyTXdWY3FAzsJPc9xo1QNrE8tPUbdcyG9UEHjZY5SCjfwZ64XKSR9mpD",
  "key21": "4NGUpp6ksVrqaKqd2DcTDowfNKQvx3RGNuM78iSsXc38HgWxCNZ4EpDzmZwR6e4EEx5JvSq9JHSwZEjLo7czukRd",
  "key22": "2RvkZBM6E3ivbJu27UdwRSeVQEXoY4jHbZaqe9gBzMud7SifQFQiRQPAfR6PRHkvf2uFJxW2G4FhXA2gjBRTjKYi",
  "key23": "8FKTgiJbT28uQqq2KknANtgXDz9W3czYcL47YibBrsbr92z4eVRFaNzrMHTn5acJPffZ9hzKrbozfwPHEXAXjJT",
  "key24": "65KuoDpffgv9tCeQULjyCMDdUMFJ5LZvXh932uJMT7CWXSGfLpHAVQGUGiAvMHHAD5vXijVUzGxMxs21EprQF5K",
  "key25": "3TBg8YZK7yHpMt9txQ1uG9y1FuF6w22E7tb24ixdLnBfi3btrCcXLR9TkpSUmrCVx2QVqDmBTLqsSsFqJzYdLK8v",
  "key26": "i865EvD9WQXDK7U7chRqAdLYz8sdd1AsKJfSrM1WRtdqmYBnNZqoxstrw5xiBiSRksPBGnpkf7BKXkwiZSeMueJ",
  "key27": "2grAuzxD7SRhBFLQxhZW2Lf7frf6VaY7Q9Bj1ACEC3rLWQz2s2UiWrN4n1XS3YmUVE4RJuXS4k8uiPAu4r4QSuVd",
  "key28": "4WcHZzuE9cGeD26YZunezXaDvbPYCEbBsjpA4qBiW8GwwD9tPm1egHtpvpHQGhK1LqejFYdxWWc77466MrR6f5PW",
  "key29": "fnKkBw39hksjda7hnQSqef5VctNGWrbJcqYSsN382nXdqGmHH9gsNRLskEdLAqbiT3r6DNvhs16BCLRWTReq5wP",
  "key30": "4UJg2XqAXXcEA5KFABi6CdFq58yrDJXn4N7KsCra45FUNNYuaD8zh5vh9nSNrCLiH5GZzAWMRAisC6BjmcvnWYTY",
  "key31": "5p3uZivE4jNNaj1Cb3mBitxVSzoLR9bDwsZqAY2RPbickWbAumShMDAeTsi2p9V3EcmzJpFQ5BuUKXhSqEDH6etw",
  "key32": "2iJS2UD1M7PA2M9uGTZ4SQdut4Pv1LWTRL7utuGikNkv97duK7qrGMWPPVqgcAZK84KG7i8izmBuhRekTJDAe4Ea"
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
