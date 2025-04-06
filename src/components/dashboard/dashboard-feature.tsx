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
    "65DxFvmTSxkAEfJtCAVsD3TQ9eys6jz2ZiEYD8p2TuaFUa5fjKxPY3kg6fvGhs2eYYAZ4U2HkbG4Px6re5xuiPcg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yxodFfgc2aB5xy1uhVdhzmWaxf2jSBDF4L64bnvE4m4ZYER5uDia3LaZfj5zNAxFNq7iJUzUrTNhJpAe3zHSZda",
  "key1": "Bm26HrYSStoxiW5vVxJQgPMwNJq14BDpkTWJg5EUtN21y56cRJqxsxNmUARVAmyd13rMWgbqgdHztAsszPhvy5g",
  "key2": "5uvjEDeTUNdzkyWFXcaUjQUW5AD5ogDuNjWnHhpoSbtoxL1eth8xHY1dX6CYUbLyFWATZEehYEzn5PdMdpvz3Qgp",
  "key3": "2SX5ywusP9ULXqrA87NGSCBCkYLsaMRfh2jGD6NCxv4dRJhMMQTx6oYnjWmKuAZScZ2TwFoXucscWLCtJExywhhx",
  "key4": "2aG2aWGa8Y4tGRhEt8AVdcKnXmESuRtVVkLSQnNxkKYuMsKxWvmCS9MNap4xYmDsghkTeFMK1V1BJ8vqBduHC6yr",
  "key5": "2aEF4v7wxs953pMmY1dDR5c9gdxN8J9BQ5y91ujSFZEg99wZ8ATpuAcUqKJE5j8mabGBU67Q33iWNNmKyr4Wj4sz",
  "key6": "U2xdpMEuppiFAQwU8rUnYKM2DkxKEquZRYKwfUyd5nC7iGd7FcfMojnrPgpUTX32we6y2o3UFNZn85bgPGP5ZKm",
  "key7": "3JqREugN6Xi9FQqshVyLvMMwiwb8EzRcvJKhHxXgBTxoZAn2ZeGUTzi5oytUf6hjtiP7DhJzmkJP8i7bTKfnbfJ1",
  "key8": "2icJCBCycVmRbzTq94xUwGR1WUJC9NFok5UW7dWiZxgpUky1TR8h6JH8gi4vLsE9tnwr3F1RKSoN9KYnBg2rGowh",
  "key9": "4h6v7VpvWNs6ina6eFyyShyXkxdwJFx3hQNYCdkuDvLXqHtMvy5R8CgU3YmiiWrRMQ3S2R7B1rQZ4GDerg4DkaXq",
  "key10": "3FjT8LzSjPNWZJSaihGj1PUBmXEPULfhR8TePtbKFbzgqvxJw2Q1BEpReSCxibPUN9rLDcnRM6zHgVgy6MBiRBWJ",
  "key11": "2r5AB5wcj6XRi6DYbnVjUajCZ1PnX14aFDnScKsrHRLbU7z2CYo4u3BGMmP3gC5s7gaX1MWnTeB62v5Jvtw7dXee",
  "key12": "4RdmfWyBrr7Zphh8PS6Qa4o6SZnrQqtztuLX47G1btE8XRRo5qN1EuWVm4PSt9YqzVmtL9QAkcUXAEPaih3KeZfv",
  "key13": "35NFLNZSDimt2RrfZovf9UbDYXgLgAxM6Hbk2hGs3KGtkrpS1fbGqTDAwU1KbQ44AXYSSseHjJnbawnHQPnsNMKh",
  "key14": "2FJ3cXxLynMrWyE78bDaqxVjxxVoVuZxYyuGuVbNaFoDFwWtrZDAejZYnZmHZ4B1aDufRP5udJLUo3oaT7Lo1K4h",
  "key15": "4kEGr12HKduXWQKmpwp3jBrf4tnZhyccJRxLz9gvecT1Na1EbMZxo6we3ASgLWxvePCog2Jx5VzEF9zmnBrr1Mt7",
  "key16": "48nwnBdVwy1AZnwzzgmnGAvWM87EcVhdSh9j2RqBB6zN5ufDSFZtKXy8kTkPAibsDsr2wBKDN5nLcrLvq6XiFt9f",
  "key17": "5uRKFCwTLVbhr17c7ALBSh6uExQFSNAzLmrPNyVFVGacFkfdueT6zyMYh6QGp6daRzKWimHineQH6AdCiSEXfedn",
  "key18": "5zNJbXoiHHirN5JzdLH1P9PYm82Ckk1Frc2y7hFPjvQwT54cGwBd1dXS6h742E6XTDki8LJegHq3GcGuDMSizZU4",
  "key19": "4aj1pfCrSJXzo6Z1QCvVZX6J3otarVSgrzMtK56D1BezMnyzF6e2w37UVZGmQN3jbHq1PXMk79x13DdXQsymSN64",
  "key20": "57HruNN2kvymXGYvZAP2WJg2uDKSD6i19ETGsamHW6EPsAFsN4xbWcBvkM5QaMuDLcrWRKALuStszMFfJW18rTZD",
  "key21": "63UeiDpZNwf5xi3P28aFo7EA7PKzZrGFVLci4yQrag3T92HJFLeaK9vHBjwVn8ncRYEAyVjiGHvQpZNXN2THs4QD",
  "key22": "4Q9JUKwx54DME1iWumtSzEELtoP33NBVZXENiVkvzTaWbu1vBSJvKqiNhE2yBCrZq2wG7y2BMcMh5ZeMhctsBB7m",
  "key23": "3D5ivt6MF4eDEqvnyFxdpJdFC89ZJNU1GdkycwHGoYxtrXm5rNTUDVCiCT3vX74RAvfTiohLcrRuQsj1VuVGoMDQ",
  "key24": "2ciPGvCfMVmGhaLCiaJw51NdejtXKRDke4scY7L5mFxbmw3txVUoW5wTs6gjx3dx3yMfeFHG2Yc9DPtQZQi1R5RX",
  "key25": "3ESxU384bmajd6151C9rQkFAAq5jSoHsPmEqbuwxYx8AsVhB25QGnG2uR92fsWaN5p6qLeq8cqJ8Ae742dxvLvae",
  "key26": "3UNQDJrvVyxW6sZnhYYTA4wfqGPPqSfELGRjaMupF82iFF13TjoMCUqsmbG7Zh5ggTkwjf2YtdkBA69jDaE2rhSb",
  "key27": "5fqiDdTq2WsMeAi8WyDyr9L7jfMW2wtfxsxUftagdNVQPxbyftExfkLoCu4Luv5YRWYsvCGgzmpQq7EPWpMa8JYn",
  "key28": "4Vz3FTGK6BQQqHafbrLpNztm5R78XkZ15epcUer2PFCrSjGYKfai6aW5JmgjVSHDQMUBHwVYzgJJzwZ6So2XPHjo",
  "key29": "3Lc6GpGGZSY3PxT8kMLjfGbeLGe4seD9NZNmzYAbGGQFofr76KPwyed3ZCbgYENS1BqDPE2Xrm4bPZuAJArx1KBn",
  "key30": "26WFCeYnk8kJduSnVCYtR74XQWbzarTto2DSPzeAap5xVxyAivPCB1TJzunSC7Upt4VHcvm56xv8pPWge31rccXq",
  "key31": "4L8RJ6daUnnczMz2tKhcCVeR47YqfaAzoSbgGxw5bK5u5gSoxhh2ypWoegKjV4hcZ5czv7bSjowP63hkhYS1eqfx",
  "key32": "4n55qU9LysziZBManzDFrwevEAnDwfq9MhFr3SwGhhL36cznJisxgemFjQwyjRrsBuYnMhDAE8nP3uEyYnYj4Nqm",
  "key33": "2cZ197hCBgMqFxDhpVFED4YvPzNgb2oUfro7ya2trQadG9XZP5Sp6ivBrDvv6Dp9MWiyWSJKTt183n2vFwTLvtN7",
  "key34": "5hgQCnEeT3hPuzqqMb846RELbbqRPe6B682KdxxyEr7Tgpm8vZPsJNcEshTm3NCg7R6ySELVYo85EPZUPbw4TakS",
  "key35": "54X32BoS5onh23MM8fe7xuAGnrCUycowFo1RfC58CUSRgWhqsDEVpHW9mCM3LfF7kMtQTSx8wgmY7rXYwMBeX8Ux",
  "key36": "JqGoybJE71gZ6uDveJxTVbFc9vzxfRpxM7UHrb6SmWQGcye1gJtr25ApqEd5BnTq8v8brXrYuxCjM25ENpRLxxE",
  "key37": "3YPqT2vqufrFkmnZMTHQV7oAwUnTFABko5cSxESL7kJ5dihBYUgdGKNwHeAa3aKcRu7R9Mrb6vat4DiPfPuDAmSs"
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
