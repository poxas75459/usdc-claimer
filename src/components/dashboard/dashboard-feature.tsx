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
    "3fnwTeTu2tW8tQFhTmuBBzFxEHSVsPg2Dc2UkPfScc5h7md6Hqq9RPNk7jBWgMHgJoC3dVvw7RceQuqVWCVDjsN3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mernRG1L4qAWLJfoZngWJGYh7TMKffLVGSeiv1i56bmxrnUzL9zQ3dcgNWQhcDjkupGe9QPr8RAhnc2dmvsZEbh",
  "key1": "4ECKdsHvmxBrhGf1W7TZKRzX8dW2Raq6r5YvtSbowCSesPGaa38voV7tQqWsvxExNqVvXumGNrcxtL4gsDV8Hr1L",
  "key2": "3BYGb7XqsKTtGnBAeYHEYLUBrnpMcFgeXBkFib59BQt19B4hrduzNMkRh188cTVN24BRBjWwMSSmQ1Biy7ToWksL",
  "key3": "1Ypn9KN1VWuZS7B2CkNJAHoA2aUdVpW5JkQ6PGJR8JmjYyRnkML5uEhMwu5ZWWKqhp98o6hRc4YvyMiwETGgsHH",
  "key4": "38TrWDivCgyoXQhgPvRKWagaMDuvjczK49HCPQNaKXxNHsTStibwsXQd1AvkdZHWWsL6xzrc9fpN5hMg1BJwoxfB",
  "key5": "gB9LrK1ywwb2SqLabEExzZV6DwzV6dP9BMnMxGvkf7wDWtttHtzhJCcxnGBnMggVuSWaEXasLwcSDYeUmriHuoE",
  "key6": "4fCmCYXF3Y6AftDVArjmyAEATyssSoax5rHGTcB42DFaBjTmmcXC9t8qDQCPaMQG7XCfEMFWy7BnJPaUfLK3zHai",
  "key7": "33ebox5wa43SetVeV6z2xMd2AxwjxmkFduHVuNUgEpkvk9Yw8z1geNVXKmLvgiZrDHXprTdEteTptNVt6yvko1GS",
  "key8": "2XYeo49cRHPaZa1ws2BhDfoMd9TbySACE3hWPr4hoiuqxbXmMuB22KcJy4sYGoEUb6gRQsU5qmbr1c3LQjXot5ZH",
  "key9": "3WAgYWDEcyj1FdYznA862SdqHRp4sfBKNeoYNpRPLSZWpgoNfnRxRUevZBbj7YfaLEBnMeip8YSW2avZMdWsiXCS",
  "key10": "3KkqK91XyhnhcJjaPv8524F8tnoVBL1iiHYiUSUn7Qo2djGdFFVBw4XaHWm88hathBmvgG3WKWcCZfZpnoCntJ5e",
  "key11": "48KsjbfQYiSXFjn31yRuexZEQvoa17CmKcmMxGNX81XVvCgC7KJGUK9jyjdTmYj5WkcJaKLNZASzYvZyHZ3wskDM",
  "key12": "8RHiFHEDan54pkUc6W6NiFqhquJ7Z2U934nKTLH5WXBdMXCquTqLmcWDYdDad1xHAW51hNEuZiVgAWDLnVwXDfr",
  "key13": "5tSpVjQXxGfvhREDgDmKwZgMcrj9mB5AEqcszahDjDFQgdW5iHxh5RzUqknDoprXsJ7AHLdzf6NY8kouw77rTszg",
  "key14": "2rPdVtb2zNaMAPYPUoo8ntbkyExfrjc47WnUbkxKbt9JCXhWM4B5DEQTiy8xZRKGEVWhRx2TfPRyWq66yPX2gLUF",
  "key15": "3wyNaGsBREkP9QFU6CAaYKSD8EPMgi3nXoJsVEZsoZ5cC4XbwP4aF7Ma1R9ZZB2fwWvAPU4FkaUcCLnqFBaYsdKm",
  "key16": "4cjPttBhyD5aTtuzxXyHNb36hmw6o8hDX7QDMmr1DcnFhsWfgLaR2L6zcqP36ctgMqDM4dqHSpLWGyUcBzxTwRmR",
  "key17": "3GikinVPE7iwuXenzMCpraLPqCQaUULqU46fwpyrPjMpvH7kkkzxkkrQhNdUNjcaAdLk4D97Wt731M2WubUuviZo",
  "key18": "2fJniM2V6HoesHwSTrmRuuKoQzeSiZrcjFgTRZ9ee8PsJBDqn6ev1oHrg1KBukGbTZq21gnLEqQ4dQuevj3n7pqm",
  "key19": "4wgR3NSTpEvHafdPKK2cc857d6XALzsESdckrH7qNk1cywBpXhGbtApgUPqk3v4zE8ZpBCCx6XHCkqnYvseuhntD",
  "key20": "xcU6ya6aBx14KMcj82APTS9dFsvpUAEebxY7kQpcUMXjq4VEfHBiGY6PYYY9vLkWaUG74ju51LfrgGK1mbhEC5x",
  "key21": "5dGHM95Y2BAfm4BDTHi6ZN7EvH4uv3jwcJ8y1B7MhBiJ78kNs8i78a1sZuwJdquK761pUtcLHgxgPBbsozoHfwJu",
  "key22": "3PSEyKBupEjpwG9GaVFUEKnT4Gd7cY1DKDkBrz4bTtSJkw5aTwJnd9mLS395q4dvL3MRjht5SYigxZfrd8xgLHp5",
  "key23": "3d1C4ooR4XmSe8AZ7mLhZYHoxyznzA7vhoPAZoBoiUhwMd2QWPQDpgdgizooA8Bor4xeMErommKd5H66rxk2kGkc",
  "key24": "3a968wZ1YpXFKU9agV9PVm3EQaArKvRmwqdyt6NF1ts78FPpmA5SeriAJaKrX91zxb5fT1Cpi1aae6JnTwaHWEEB",
  "key25": "5vR3BbytUB5juoL4eDQsB7G3KCccLuGCMLMNqGD8vxivjp3jbtwbV7oPkKMaaYkaSc7RbQsVPBGnnRFWbV5RCD3T",
  "key26": "5hGQiN2AQsq84AX4SaJ6ZhF5SSxG2bF6WwmcT86i6aExjHiyS56LpddZgWUbNJD8CohxxCbE1prouGa16MiPR3jx",
  "key27": "5ZWLZ37H2kmM4wkc4oh74b5CVxzJMB42Z3rDpoSh6cbT1gyPjeb8ztvzTerBzbxRcLFFhgC77SsUysg4xN3NYahT",
  "key28": "4j3Kq8iHx1VRw1uL12wv9QW1cmsbjZFpNCQm2GvyNfgUeDP8Jyi1JKbw9847f4Q8LiSY6K3qGoQRyD9qTzbHsr5A",
  "key29": "3FVanAgzxUBiZzCdjDpBT6zZPVBpCoEmctZVVxEaLwG6StUs7DBrcHWP1ZMbzwQiRSGYxCjvEMyC7DQes4ETfGPE",
  "key30": "2dERpQC45U7uxTcq83KHseVoviLHqy6WMVxEUav7dBTuGTpVr4VYcqrZ7s5hQaXFenQX9t7yfnY8JERSxA2oyMcK",
  "key31": "xLv79RLgUD9cxum2dhsJz1DH8JS6KtvLBsn5LHPWMWEW8iQ4GLdVRSe2ttNfnfo6GdAhQGTcpwhCLHZ5D1wcN57",
  "key32": "5NdYNcZW2UPDe8FTgftuQta9f668Zg47gp1f7q2VuJin8eKXTmgZDr4DD5zyNKpGewUy9AxD9qTBMVGjsJr3di5u",
  "key33": "614ZwzogJrTdXkCnEziT9nbPij7nMfnR1B61iCB7MoZqmBEzs7gfrNRGSm41TRPaVmUWpPC3yKzSxwxkKfNFs2Z6",
  "key34": "3Zp6wYfqDPXf817WYEuX3totHWKHxqhrydN95ozAza6iWSE73B12ASAEonqr157MFKjsQuQqqqC5Uz5661DyCucq",
  "key35": "3GAYUETFHxzatXm12teXGv3x5vfUkzMLdv6XsPLy4AmxsxS41y6fS4hoaTUV9rhXhuaK8ByU4JWWw1mn9sPyiWqP",
  "key36": "4eZrzLNWbUjgemsc5W9qcLdX3xPCDNcwHFE5rdp7x28BtJXZtQ2njPCQW9mZdSsbMM3EK8n2tvXBk3MJLJwTRgbh",
  "key37": "4foetwARBVm4jKqpUcayd61epQnR9mUv7TAqKKdjAUCWpkBqW1FqBjTbJjmPNRcRgXmJmWpawETuR95EStF9tHQT",
  "key38": "3dcJimBGRmXj4RfAURe57F1xFmokrrXQUG8XDcstCAybWGna8puW5GsA8K4wdupdRBvG9Q7dvBtz6gB6taq8PUKG",
  "key39": "HsJHoBmnwzYFoDQWuKecugM14J19zbFFFNYMsfbv456XsVKKHrurzXYNp9zkWGSHZPcaipQv7sFYhrfXg9e2CAe",
  "key40": "5weDE89F41yBXtHFQ9eRzvNyBTFRFutmMGBiVtZkrtr9QwefhPFdLAyPKVtAAuZvt228fVcWK7SV5oGnxsKxaFKZ"
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
