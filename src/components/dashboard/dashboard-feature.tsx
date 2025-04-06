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
    "5NwTJX4uagXtaWDv9u4DLMoubf9FyvoxcssyfQ6jmfeqjN2h6C99kbjbz7ixk2dmv8HZGHVTMPbVx47XbjntCsef"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GCwCA8nvLusLxohiiD6JJwxKSra3miJiWBNS7SZ1cXiRTxvACXgc78chyAEKU3xq9J1mbPV4UnnLt9qshggaqDc",
  "key1": "yFvjrktZ93pwrCFdx7jqk68J6Y3xqcEqB24TyjjoM2CK9q2amVqu7J6fdY1VNrL8hRQv643n7sVW2hz7Rh72Hin",
  "key2": "5UUk2bpJgz8hUiSY6m9Vok96JNRBP1zP1YqhouydmHZfAYzZkPqk4PNtRneE442CszV6pCduEAt2UQo6vRG2JZjF",
  "key3": "65Q5QQ6NqJ38dHo1D1PgbytdEPVo8xrNssogt6vQQuo8GpnUyjk12rzDBsSNthsRZqiXD6bGFAxfmu6tocr7aQog",
  "key4": "4ARFQa49fVd7YLgGR8an4C2jtYjzJ35DbQ56pQSUk8nVHWFpAd1dMXdVRd4bEbGK1vGABZBDTECZ18g1MHEQiN7v",
  "key5": "4rAUgP27XTDPSFrrwjEWipgbpTiQdXW2QrddtD4dmipiEkgLoyzQLbnmkBJBRyp2z72AtDU9Rkx8dvuExMRFgq3i",
  "key6": "5bUUHhr8r5MrGVCVxAAMooicFg7j4mUk8Z7KoudLx952m7A9CN6DxFJW6zBH85fyvsi9pWQrkPFYQdTnRix2FUd6",
  "key7": "57fiFA7cCi2kxeLTtxhuCf4ZThQeo62Rmu73w9cdi8pePWfZdh9wwE6rEtYs9fjK722q1yhju1bejnkBHDVfUafe",
  "key8": "3bLQDDBgJD3u9tNZ6kBZKNKQqoRNfnLKbiYtNeFNM48CTDPVVZk1BTipoEkkZvaQwnitzH8nKPGbbsHDZ5YPh35n",
  "key9": "314fRPupjwNNVTLU8yNLzBjPt9kGUy3RZLivm7bY7ztzzHYXVTiwfFS2xeqsJttWmdx92tfjaexTnFy8tpmUq9oD",
  "key10": "4WzzYDYJrpxm1Hs1q7iMGbsvdJhE5xubpARz8kB8NC2nNMeGL1qzToPDjGYyRu9kyEzz4GotrVzLJ2qd6LZ7H9Ht",
  "key11": "3g2mmiSYtj1zbUpaRyCguCXzFPc52JzZQJiixhmhvVzgFFpANLM1icrbug3jYeqcFMT8WtjJRbqaSnNCtjaXrD9r",
  "key12": "62d1pjgGnMhhjQr2wJKq2LRyNjcu57UZBtKsXjmQLFqdKnREBVfHy36NV6Ma2G6QdE5gvFuGLbLG6HyS89W2wqfN",
  "key13": "25upEJ58Ry66PoGjha3DPi2t6biNyuuJ9fsuL9NLC6qet7YZxXFoLPRpEe9KU7P1LRnhy5b3ospxmDTEuSkrYtfp",
  "key14": "5RAp9x7DLz4XFAV24YTWe45MKkBFeWqYECSnzoAerJE9pVmqYHzUBrjHSNpfymZ8gCSP3FSFoUW2ksbc5iAF5gYf",
  "key15": "4D6zSfs4eXJt6iJ6GWX5f4BzbrgJtmhMTyNbxiv7YMSnNvZYu9BNNTFwsPYR6AMWttvdvUtnirPMcZPB6Gzk2Rob",
  "key16": "3mVQWKCLYsGmtPKp9dpByufhzS5SdvWPq1i4cBhGeBP5LmVixkVLS3dbAMjfctWvshYzBWWeFt9AWNU3R4gTef8o",
  "key17": "Nh7Zpg71iJusUhWA3YerfhWYLDpwoMzMh8h44ch85Vy49mDPT5mLxCEnZ6jSds2BtqaHXffL8yd7EvfxrDP1J4D",
  "key18": "3oHKLLENEgL3vhTqfcZxuSvcLjxiyJcJ8EZoEjXnTfUJVRatD5Rm3fm7YZevh13RssEmRjC6RUWoemJqXYZqo4gd",
  "key19": "29X5v8LH8b6H3o4p5a9A1zh3yK7LAyYRdfzoyNGgHVijBiaooVwHGFBU8KsLXdAZTTda8hzoEFDS2HzmLs6GbjRx",
  "key20": "5g7yz4JiXiXENgztLQck9aWRHF33NA1LkPDMDoNPds3km3Jjs4v2vAyAPP13CEdP5AACKZjjanb9Am5PPj7h55RL",
  "key21": "NU4KN2FFDe5nLY7D5MKEKyEER4QezKSGRvT6QH2GDrxsLgyhZLM3vDsbvZVZhie2jZijs9NT69NfPzKMfXhEgUB",
  "key22": "3R9vLR6mzA64dLRo3vXvgdoDfaiBHewM611WooKn1pDtbYWAefWreYr8Xiryv3ieLCZTxboJXdFVmM7H7ofK8LBY",
  "key23": "2zYxRGBCPziMxvm8e7paxYoQuXFXEtVREAzF47whyM8iSEr3wPsSPcAMGxTKr2qWAH8maifcBHzG9mhQxoGCPbxD",
  "key24": "4SQNYm1J6oXvsY4aJaeohvcMeZN1nuNhebHadNcCNcPgprws1mcrAw5dCgoSoFssNjakErRN66e1Nzx6LafP2zcP",
  "key25": "5umQtFDNuqgRNrsxVHYeR1k7JPU2Hp9zHzF857ikv2o3Frqf1e9fSjzdgC4QBXRRdAFQpgL9XPVP8NM5xxhCeSbf",
  "key26": "sv52deUEArneGdqM8tQbXCojnV6FqkhBEzdZeW1p9edPUPcvMdwmS1yki5CZPUDzb3YgaMW75Y8WhE1qNjJp1d1",
  "key27": "5uvkezUcEpAmKDPYLF8A2zXPBNW3a5cmeNDDQMsyH1rYbdt2HpriDzpiEYffPmDpJuqvecFf2BmnC89XrPZuW79Z",
  "key28": "2dVqQPkEudYKdgZq6dG2wk5ZXMgfagWsRS7sjsgwrcRRabh7rD9jEFtjJPuL2geDDvvAbS6YWB9hnuZs6dYLnCyU",
  "key29": "23Q8mEmyv1YDVgHCXvK3GjHGeDZBgnm2QJMveQ4mH6Jb52pK7vCE4fPy75p1iNh6uDzpDrs92zZMVazFDU5qYnWS",
  "key30": "4bpJ5F49tyTLtxwLS2BheUyYakVcWrzkkXyThHPKAZRn6cFTYHvj8EmYeiuhbB5mBmrtsNwQzkJNiVv6eh5CM4WS",
  "key31": "5V36gwTfL9tK4xgvzi67Wv6GrfpBYG1kg5Ehu5LF3vD9zP9H29CgVAehQarHAypLmcvN1m7pfB6N3np9xnauWMjK"
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
