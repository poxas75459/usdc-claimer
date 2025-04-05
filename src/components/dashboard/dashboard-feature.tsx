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
    "4FJhD13UmxspJM7pmCfGTGow13vuZPA3U1AZzdgcopGEDF21is33MGqLkDKmQ2PtLeeRFdzyPigoqdRjnWGWVhgt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fxzKC7b4gRVXZutcM4s2B1jB6iaajBcAc6z2WaKz7dgC2JAsjgbtGU1y78jJ5nudzJcfb8qESLo3mpCsk6KjKfs",
  "key1": "3ceXiyLkgfFbrhMxi5mtmnHETwpqCbuYPtbagHEiXwMkVc2YuBuPfhnU6Ve3osrR98fZayj2KpvrSQfdA7VbqAtJ",
  "key2": "2fdExW3Edh1Z1Ztw3ooCZ34CxMAvZf6y6gwqdd4APSyjPvbpqX9Gns8AVso8SoaDeVgRwHPmFwq5ZKy6i64zuzp8",
  "key3": "67bw6QZNvnCk2Mopfpm7YzvDi2XJAvB1QCDrkZM7JfyNUV5sSjAK7YC1bTyXMm9581fe18Q3vCcnLYaPtHwAKZrS",
  "key4": "3JUJWRWXccUnUDWHg9xZHG1e8Mfu84c8xippA55deoX61tTpN6UZssPJfzX44NRcrMX9DaoRn5dckNr3HD3XbdNg",
  "key5": "WcH1mKdbHewvZzCJV27izR6Bs8k8BwAgvKVYQZFfdPgdLNJi2maUrhCbRaP7QznPNLBNyCLUn5K7mCXfo6SJGS8",
  "key6": "5UkCrcYZEyZQ7cw1sjhafbzomcjj5thPSawT4rBn9LgodrXg6njCS2mfMxw85rEC88n5Wb2fJN7gVezVcAKFAxPr",
  "key7": "5oqAWMFH2szCFtnvdmo9z6ghW2PHz4NfEfhJTvy2vuxYh28rFRkXoS6wpSH3FHsMzQg8CoxUUdhH7yktUGNqFmj6",
  "key8": "TnJcH8Qq1oegJLQGmuz2nsc4uoDgpQM9hbRzJcvJWkjetDow7VMHWDxAqRyRuFL1zhYuZ7tqp5UrpPuiaZ7KV7H",
  "key9": "4c2c1b2pRJXxXPdsfdA4DRufeQGF1TdwC7HE7wbPospRYxVFRWebFMd8pjpRGFkhyjdunVz4vobhnwFNDZPWFZSj",
  "key10": "4sYJE6dKWj2rDmVdmMBAE2XCQGor22Wfo41dzpNMYbNxdtY6sV6kaYeP3mZYCF4tE7pNm394zjFPcHh5eHEwsFiW",
  "key11": "5dpyERtV271K1uPNrx4YP4EPWGB8fDNC4qcpBMMaBpUx5LsWSp4cDj4Rq3yuvoYGApfbNpx2dZVKLvWiCCmxbL9A",
  "key12": "2GK84ASUraM3YdEypo6PAU8kX6a3GeyDGmur1SEdzTfHkyiRnJYpXgjCFNaPG97zUmJUV3op7nUUV9qqc6VzWeX6",
  "key13": "3pkYkuutNMG2MeT3365Tc7WiK7QFwVnRwCKpHntC1zpmuHHGna6sb5tes7PVhdawbGAJ4kN9AHTyoh6Cje49JTBW",
  "key14": "2jK2yT1ArvHXfWVi29XpmUn4r45A4xK1mYjkKcjFozpvmpm3x8hJFWLnuwYxrPRUP6zhdf49p4FmXCEwEZzqKv4e",
  "key15": "5EeiTSiy9hJoQByXZeMk6A21QXFswvMGL5daV7Kjwdf2BXvvMwirFA4zxjRjdkZW6Qfme4HAvPAXzZJbPWod58Ht",
  "key16": "4DhbSr6YcGrzG5DyCq46uJuEDd741By8rXQscmi9dNWcom6riMVercDMwegExPaHhFnwpHyyRVpQUbLjDPqMY64v",
  "key17": "M6tfoWujFd3X2nQse2zNf9VPL4D86somuuFNnAYk4jea5XE7ozMBMT8yrQZKwGcAbkeSEFPhii9SnVh1To79yPN",
  "key18": "5H1syph1DrVzAWJg22JDvdDqGGCvfFWku2efAUrTxEDAR4HBjNX4sdryuRdNustzLLLd9TMicynvvQnGfKccJraX",
  "key19": "518dUvRktxmKdNqxXBNbWbPsjjYMgdyWdhJ9Cm7TRwnsTaAYivySBhHe3YvTDvMvVW1XRD97EcksnDRCyNvbFy5w",
  "key20": "3P2cPT2T79NqZvWftNzPf5F5HUFrYfBKKkQziCm4DTm6nB7Wqzs7SdDs9nC6tA6x2rgACznBYBXQ7ngRRHhFwAyT",
  "key21": "4FKdAFc5x8Y34uyESFKn2c34xada19SimtMLZKpZ1VqSn3B6Ku3eEsjo5stZxFshzRkWizvbvaPz2517J6hP8Se1",
  "key22": "WwMVvyc4MBNmHERqKR4GcDMxzyNuSPjG5cqWZQZGt4tFGVmLadvxLej1t7AkgYFMe248xEpdmQD5qqQanfVtKBy",
  "key23": "57nWCGokdTK5nFNBzMWiUpLcigmpbKgET9ePdeu3qPEYXamagSbev1h4cKiBfFYKvZrA6wNReZqe6acMrwGgXhNL",
  "key24": "66RSykFAFquqGo8ARmgjcPKHTDsWLmR6RiCSqaTnDZ7fNaVkGWv3azZQ3jPNPKTKtpeoRmRSxETG2qUJ5guoJSgV",
  "key25": "qoF9Yhcyv2CEiJmY6CcYFUySv49Jdq1AnSHoT9nCvr69gxkJqqZQ8HABBWxuRXXsUuNaCLCDzQJXrxCtfiMjrWG"
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
