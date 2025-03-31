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
    "4MC2pRSj1qU3Xz2b66tJDCAKcQXg4u6Gcxir2GavbzfCGjBq6hdyrPncPPzWML6YX8zoWU4xU7myy4vPKT6UZws8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ThkdVirE59rDrmoczi6qTf633YaUYcvfDHmQVWjKHqmZ3BSEmZu1yGPzAHM5rnyEp4udDJQsnPMo7Y22TWiURmC",
  "key1": "2ofXqSvYspQoayHPcw4f2hAx8LfkDdSGKJEKJTfYkZqMREoxzmyeUpUhxcJiNVoBzJMWwteaCNELnKAo8uiki1XV",
  "key2": "42BWiZgkuxyiZ1NJzJkopntH7wNpqbwfgmAi2iZkqSfJ6pLSoygd2bS5KZaijUGy3nJTefFRgdGHgXTK4mpqL2ix",
  "key3": "2aA5FAoBgQ9Z97ShdMTKAyzUEegi3yxmhZgCTXvuGtfc6LTncP5cTBqknmCovfNqtLhwPgboE15QdqmxvCSJx9C1",
  "key4": "8n3wRmF3u2bACBsz4Z7xCMxqQ1FdRtjgiTFEowey7TtMArPWWk54y3UJjWDx4d6aji7jmfL3VVcywXfPqcEPJU2",
  "key5": "3oQuThLvQWunU7XJBFtYKtp72d62BpBTZJgfKefmA8TPHMmaEzprvM1DE5VNobBvA57n8gD1W3czYaFNeQctE5Nr",
  "key6": "4uRssZdvRpcbz2DsjfKj8GrCyRTE4wVc4vHMJuZMHaTb6DTPDxCCXCqAUr8t7HugACffxyLESJquZE8fZ5zJHdeS",
  "key7": "44XvxY47xdBTzHtpc1ppcMnz6B2PTCPir7STVsr82HgUAC9nNPSijZHcsUKFHSadSrGBb3MLA8jehRpPkKcds72q",
  "key8": "3XgzRBVxsjmcrjVsyVYbYG2DPzaPbMsPt4tx2khWBH94cnGGMfYBvvKNzuubD3LFidad27HKDK3277wYxwJDiPeg",
  "key9": "2WnjVjV1riLNvvN6rRc2cThK1VdAJ1vL9USdbhJzLEi77EVZiREUKcoQgV29hPyVUYzoG8u9ToZiLUPZt4vBbU9K",
  "key10": "3mdVa6Ef7GuonTkxRX393cqpj34Thipfz3K8at8sCGr57pUZ4Dbh9uyetQ27f6z1DbynpRBkTNzdpNKhFHkfxooQ",
  "key11": "YQougkiBfRt95QbB8PKubJuzBqxvCBYD3eDKWyij8epPYBVnEh8XW11gvtgpQviPqaF3Y7PjJsUQzgTuwV7LYSN",
  "key12": "Kn7EG84ySLHT2VNjnBKwMTifjv4yvUHZYWZj4ZvgDW6pYNXkkPN21QQLBmyrSRiNpkZ7CCmc1zXgtG9nxFCQYCf",
  "key13": "2eBwRpPdFEau8JP528pskbnJUvDobGEZ9oMzPDfNzYmjGgLWotgGKwP2Mc3rPM1UKK3dNtZKhvsDNynhEAyafdb1",
  "key14": "64jM4thDQpzFY6usq5RN6XCRo4oN2FCBTGbMGAFzYX8Xd7v55wi393BvKGrTGYvYMP4z9xw8HAS3KNXeT2D3FRSc",
  "key15": "26X62KDQixSjMP9bpWkgyqHQYXuEHi5SFwsocNgPSS2zGKn4ijPa61PiW2wxaK94cTSHkS4qF5epnot7jczMxLkj",
  "key16": "2qpVijZc4rmoudKHLVnQ6JSTzNaV77An4ESbpRQBE1JtErgzm6c7wUYpWw44hRvuBQ7VBUZ1eh3N6ehk5AE88BoT",
  "key17": "YsM3gSwPZXM8JxLhQ9TdDDB12JCjy2sAt4t1CrrsbMK27jRaNbCB7HRuiVtGs2Lz6b96fxNEQwGG3Z9CQMd7RNY",
  "key18": "Hyn1ndoK2EqpEtvDfEG7SSR3dTAnbE1QU757YpcrvnjU5fugxgqi2U4Y1PzU3AQd7J5rKZzp5hbbkFb22XePnCw",
  "key19": "2JnFenk8tHfiHFaNNBvAq8Jd74knZqwzEAVj8FomLMF1roe6DDVo4cE1yVbsk1eWMJfr3nizmA7tD5FDpJfYysuK",
  "key20": "KinwE6NdzRBrtMaAoXmAqhxqrS3PhocywW3r25oXKXYDiwmrxYaRNZYyBFWiowVnAJx58dShsyuXxjNkanMUFiA",
  "key21": "4FFufypCzJMfq28rfoMs189tX9bVRWfwkxFeMQLdLXzbZj2cEgbP3aco4yUtTugMTy6fLzLDGW1DmrWcamzDVxE7",
  "key22": "4yQCY3AuiF2Raupmf4WVfHnu4ubzMa1hzb5PQcUhrTuCfdJmiJzp3JT9JATEpQ42ov4bqygt337SsHeLuwcoyk5q",
  "key23": "2a7Dx7nk4HNJyMWisRjmPVSU5Q5QLFqhGhCNVtNvFWqKE4VFUXqfg21UP255w1bJGRzMXeHpyCemyk9ZwAjLgWZb",
  "key24": "35BaS53StmDAdU4pTo4ChSFL4ox8UMmsRXvaKGM8iWcJnFYQrxcFKUBYrMAXSEttj4N9vLxfGi1iuMcRt63CdYFG",
  "key25": "5g2sLLQke2j1qt8P9n3GnwAs6KQjdhxWmpJ1jLPnZyphPvb7rC2VoHqPiM31Qd9WGkVoXgWBqMAa1mcj7RskrB4v",
  "key26": "2mrubxQ6EwrjH3Z9QqwNVw5XyN6QxoLRe7zs5ysj7kTywtLXts8JNbGFBsaAm38DvCZqYKcAVec7MSQRdG1N93KT",
  "key27": "2pzicwNSHVQiKcipWWusPkfDmL54MbWzt9wW6dFyNjbzwZ3wx7QwfsfQLbJm7D9tBv5WPofUvCqdXd2htHhpZbP3",
  "key28": "5kq47dtt2VMhxoi19gvR647TpUwDghcDG1b8QASXJBLm66royPgKM8Ac4jkAZDUj9Yg8fENaSdaMueZcZBQzDbxa",
  "key29": "4c9ZFXEwicHU7c9kc1FibmDr3gm1eeuUPFC9PmL6tHiP1HMVJWssbwXQNEDBpAY7XqSbDYhQ7HNgZydLz2DPGr8f",
  "key30": "43r6vxC52CsirwWYge37GhCsFpYQMqPKEZ6Z4i343gN2DPmKn8eiEwCVB6zpSkit6RZdzf3YTeNFmqAcABk7rSsb",
  "key31": "5HXuyFsPpfHvoRrgbk62ysaTVRRC3yZVCdejK7cgBwnCKsV1xRs2YeHU78K3tY9HEMsr5DpVGDwxSZg9ijh8pD1y",
  "key32": "48PujLhLZPaK8QHGyNFmnQUZ2gxoa3n3UgWF2FYqyNZy1BpAh9p6UrgYZQy55rqaqswSkkdV7vVVuDvt2vthMGmg",
  "key33": "2JgdmVoXVDnRKj97mZ5uEFdhrNzS8u8s5KCbJ2QC3B296EfFbxKRveJeZHVWC8fnWCRFGL3dNxFrp6YV76RZaAMo"
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
