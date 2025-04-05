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
    "4ViapdUKJ4vGs2dCBD6rwU8Br4QiEFZ8K9gBqVFJCEW5icu1Udu29Rooaoa43daWkCtaZX7g1rWF29nGywGm49Uw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oosieAigkuN7chdab1bqzXzzSdVwwiT3cRtZZybN7kSJ21JRhwqF4oo6krxNtAMEwzQZ4HccL1S2fVSaMwU4neE",
  "key1": "3VoewiwLkc2HD6rm77iAcSXYKFnGhtvj3ijRr7rynbNBskixmB8kAhH2T7MjeRtFqxQbMMMMRxiJNu8MXpMZAXxU",
  "key2": "4PdJZcWMG6mCg2vRzLTX1LKxKdxBvBeocopkE9W3kX5uSmnb5PxH18CRbqbkcoUQRLZPkHaRRuxGZJuoZcUQtzo9",
  "key3": "5Yg8fKpRD39cVhbEQNB7nKjyxCbshGEXctZmpSABAAPVKuXV6xhbnnJYruwWrhiGfURLbkfCuzSh9KB73gcSZY8b",
  "key4": "4k3QUgLhyBvQqEsoBSSbx3jHK3mznvKdzQDWgTooCvFNHxyJBb4WaEdxd6b66WinEfCB9YCDS5o1WRt5n9zRRBwa",
  "key5": "5fSU612UQyrKuNLSyM7CLvXtcsEGLhTJ6KhinvRAEF2dYJxNznEt4KdgXEhGup3RpaBvpCAQRG7i97RaDJtjd5DS",
  "key6": "47HfjmadX5TS8AVkjtJJBnYwHHnMff14cmcRjokgK9U57PjV3vJha6hq4k3BQeQJsfRVibuMiGXTVg8fR6hBTu9o",
  "key7": "3KTtCEQj6cewwG7UwryEh6fzWUzMqoxkoYnpRpTF535MgDS1L4LhMjY1Q1LTptKbx5ecFCGbibCVWRUGChGsUkHA",
  "key8": "i2A6qZEEcqrZ5kigsCAxQkutkJ139rpu4Nq1WF5TYepYinqHtnpYUxyWWMt6jbBEDpihaBtsAuKenMA3Ax9jBmn",
  "key9": "2cNUtRE3PJPAQnPwdamcB4wAS4utBpaePpDE4P6T4q1iYiUSaS3bzhD9pjn5jeDUP6wYyDmB5Lz3ATwjZ6nj7dku",
  "key10": "32KAFAxBygwVycSwk1pB2QUDyAaxSAx8SnBi1hEXwZ6C7nwgE7HLsPrbgkYYqHbAKrzYLWETjgEKftje1rcRkUg3",
  "key11": "bvtC9Wio5GrjxeN3wf8uJCJoRUCRVwkvc9Cb5PE5ZRSbNmdcndqXorae1pwQmmrGMhQo8fDdYKcYwos7RZPumqY",
  "key12": "UP7eWQZD4L4MJRNMFy1FCas77AfkYRzvbg849G4RMRcrqfpwQbwzFhmbTMx8wCGXgKmYztc7JPXXXjKsDvfMufQ",
  "key13": "2XXcqmDNJEgZfXHeHqYV9dxrtHSVmtgdxDE7frAr9Rhb7hiibB84QTtJC9UGFJiWrxftCoPryJpJ9Tyo1RDjwdc3",
  "key14": "3Cj6HyuANNBYXp6xF6zmTrxJgE2F23brRc2yLPCconajsSh2mHwz12X32tvTT1zwHkktaua5Moj5E3xBknnDtS27",
  "key15": "2MaFkr7utuWHe3Pvt2aNrtSpQKUBj6uX5HubF91UBmb8W7JK3CWofyNNdhpt4GG5zfPY2hBYSLv15EcHvtrJKkcH",
  "key16": "2g11nsJpNDadd2YrcC5YRypAigutxphGVR5p76qsh3yV5AvG5DcV8iHf2HNQAraZgLvy8rKFzWus8BAZUkRrc4c",
  "key17": "4NDZvVZCbJ8EgAeqW2wjMUqvPyVd1wdqndKX5QGdxVopB9Sie21AUxBGf7jLaGo2CfkKoG9ZztjDzN4SpuJApzTr",
  "key18": "3bp4UyHZuZn8MNUEQyJhL9LeLVLAnuveEPCoWQ49wfy1dukCYsC2y86BFRwTcdvJQwiWPdtV9tSkVfXrqKpFEdzK",
  "key19": "2wrk6DdDFuFtryUqGA94whJtBEGvGcGjA8vFSve6H1AbjcE4vaKZZXSv52kxtLFvgDcqvoCdBakg2u2Ft2FJQFoF",
  "key20": "5pYaXXvRzaep2hprMLyAPN5wEhXTNB6PnXSiaFCyY5pTozNVjKSZr3mB5FNvGLWFHiZHsNvC9WBZgD2EgKJQxUM5",
  "key21": "qobQxeseeBSSdAtd5GpqF7GZJwUNTYJsuz5NjiiWzsKegDUpuu73jFXz19VALP8ShPxBKqofkgyDdy99MNjqAVb",
  "key22": "3zrscZ7xB5unvzFgEioep9RXkUNVRjSU423iQobsK5ThNtuKiubGZSmJMkPKWmzDVKKqipCiKYrepqMWkRx6iGVG",
  "key23": "4ZjAhQY5xv3c8cWHqiY7iBfHSqG5EYHBCsaQCbW72VGnsGHRkgDps5EfAGKtXFk7oBCoChwaJpB7JJZE8MgEVVf8",
  "key24": "RGHhCipAMxmeenLhVizQkei3pcT6LuGGuSEen7akKYWKDRDrzCsBKvYSaC1GETsqh7Rt1M4hAns4ubXrpNptUNZ",
  "key25": "4rr5LGbrZTXnX8vDwTzBaQELxV1U66UzcaWCMRVfDs3TZbWm3C9dPLQcdygKEXtxjdY339GawZd9suiGPBNWeaSN",
  "key26": "2RzpQ8dzZHAan4337wwH2JUoD2G8HtyccaCGo6uceNE1ay4B5Yy9RTkShjqHN4US66F1GhL2UCLxW3bnanXFQpGe",
  "key27": "2k24crtKGbRTWaN3FJaVMV4uNU1zWfXkiCJdWdreYdx8Ac4i5opwAKrN7aQQDKJuncfdHpYmpcPFQUQHzkC2iyTM",
  "key28": "3XDqRTPP229v5s5cWgYPor3W6fFLXTP3nEfrvfEU1BEvKSUDiSNJnnDiBingG7cPKrXwZNMa6qfH8UuoFLhFRfgd",
  "key29": "4hL9QEYzvD7NkiJ75YMhqnbnF7aNGMwAd6yofkxD41EmkhqJBScXwqVCWfZ95MEzUzwjReXADMJjDspjcMq34QhG",
  "key30": "4YV2HfZnz2LWiv1aURpa3aVBrZvABQtQkTRLT1GG1xaGbsoksMkGGbQ9wcyFhaZpn29rEwUCiyHScH3aGJSz44cL",
  "key31": "2JntC7CAQp6NFNi1ajYPYXaRQc2b7XvYAvpcwSJLKFhM5EpL12XXFSqLHhqo7ruSNxhEXS6eZoHQg79iay7SYo5C",
  "key32": "4gqdQrHL1TBXrMoirNFrQS5NWYKccP9yhq5yRMEtdwdDbf8m8bf8d6JHeEPJ1X5aa6KpfBiK2SbxRkrPNcxbgBuN",
  "key33": "4KgTS6m2LrU4upKYQjCJUsnWE1aswxMso3SjdyCoAVa1ciwqU8MRV2kyEvXSqzuR8wc46u1jvHfPtVJWDw6ak5gs",
  "key34": "5Hrr1aHovjbns8JukyVP5egJebJdUjX84ipvYVQXV1oJBN3kAhs2WtUbue39frxKLSbiyMrkiQw9QFbiM2xFUfSX",
  "key35": "4biWUANQfu9ot83thuxJZETvF3mSVGmvikyGygwZfKJY3gCCGpgDyjgM6TSnm5KZSYpdoeP1Za2ZsMTWx9DPLsrP"
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
