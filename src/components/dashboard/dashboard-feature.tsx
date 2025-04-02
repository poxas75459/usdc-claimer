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
    "457CjgUC9eewKPhiZ7qdmzup9D9Gx4TZRGr4THLKLDLQWUuzaaf5zvNTW3YdpDMyvqE4ZCWExHssHoPumJDVZewY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wp7UkZKCAsxpr7XtX49BtDbQAnR93kJZzaD8ArLqB8HGZDSGLG518FWpUjnQKaCCm3ez2oMvCZJJASHAp9ny8gn",
  "key1": "4vw3vKsZ49CfMmT3qgBiugtacfGGXe9NnKo35MD9mZJUtzWirZBWg1goSv4GgyDwp3XNNt7DiNuvtSy5oNGRLa74",
  "key2": "5VtQs6QjSa1NDw65pGoEtxsm8RXfvEJJDWZSmgHzNxxQSKrRNjKdsym51PzEsfV4e3B2NVQ2p6jw8gKtK1Gw9mPn",
  "key3": "5hujrG8QjwXJx9ekDVotFNPVecz9jVC4b2en4jwudP5RHfU6KthRpggkky6sm5Nue2qox1VUSrFhdGx5kZbwnFNY",
  "key4": "5y2ntGqwsp2332SRRKej4K2aVKR1wRjbeMS7FhLFwfs2m6yyncwToexcVLX9MTg562cienBTwxQcbfaDr61BB3AW",
  "key5": "5NYutpRkaNtMKz6iAWqs3SneWeWya1wxUT1fmqy7uErALo9LwLqP6Q53kaiTLCRuDqCFRNAPpZCuKyRtd5BXDZyu",
  "key6": "2iaVAPAUNNVV2PWUPwyTGPXMnEUnCDTB3bwKtFdengEyZaifmKVJfnWniAQLhDcr56UYj2qWQPVPJTTWymtCV5cR",
  "key7": "wRtqMSzERq2ewjp9VoYgRv782UAe5eZxMxaj4AAZQ1VqVXw98Hdk8ZWFyxQEy55ypgjp1XWqo72nncCYrrevMT7",
  "key8": "4WNU4vvg9kYuRUvMvUCNYCVbzVdeLYGkyGiCjgNiLQ96AwTpyqkwkmbe3J414geynvjUTVJArcEzKZXn2frcp1rU",
  "key9": "2kVX1NJDC5mbZWUdNsun1q7CaVvr1E5qgySBKUbsjp4yPVfgaqg3aGpsr8EDRe9CuShv4WFAoxiBitDZ2C9Ccub",
  "key10": "yf3q1wNRLZg4fV2q6KnDuDgQfwtSfRtN5JLWb84x5dJpYcLyYwtG7g9iJttQRhY7KrAYW97QEJQDQgAhpfnon4h",
  "key11": "2FzVk1K6k3TDF72GtFrGmD4ebFkt4npJnGqgWEnARZH6SXUpobdauFZQPZpQnXBsun5xoj3yzAEFxUp553JtAkca",
  "key12": "3YiTndX5kMN4rhLSm4ykC4DDxSMesLDJivHakBDD9pNb1o11NaFQbpc8CqwACE8Qj41dro4bHm6nVPAASqgseWgG",
  "key13": "2xkg1A4pCMTiokUsAhDw119WxQSKNHsWpNRZMjgvA9bvS6kySKREUZvp6qx1yBDnyzznvasLBc99aQjZqNVWT15",
  "key14": "3QFQX1ZFK6543eKtrYUMhNRiyz8S7gPF9NeFqBVgM3xpV7xq3AavMGAKrxbABLVXhzd8dXLkepDMGvYE5iReQSpr",
  "key15": "2ATCmxKonH2L2Sq4zZ2pD8RGsBgyn6iheziuGWSXrPCrBNgxZzGuux529wJYw94JXu31DmmBBUMmYnuG1wzHLERU",
  "key16": "cv3WyFzCmmGm7McHxfbFvb9emDZZVQ3gxqqRFWFskqoh76wDoXoc88wukfUezmBDtRVXJyFBgNvk5rdzwwXSPRD",
  "key17": "52mbEpDrNkGebrPXy9Qc3bZsGRoYhHzVBVDvMdjX4Y3oXehapNdt4J31sQkQsesNWQFm6VXFif4G2dd9BTWfziyg",
  "key18": "4mSuFhJMtgMdLxXjTq1tKwrbApRkzqexaheUDibH7JSg1B7RcTF3Jn8QT2gAfTyEEnppidsy22jnRpAS8Jvfh9Tp",
  "key19": "49XDYQuv47762ByHTFuwXhnRjuWoBCgsmSLrWbikXiDjX3JwhW2FCXjrnvWg3gGfijCp7Y3DCGbEnXpZFGHLvGwJ",
  "key20": "51yNrgbN2HHgByZSrjLks5AsF8nLTA6XMgXxRcvXSLSbf8DXY1nXfo6WEag7NX3gX8m3DuF3rR2g3puck9Efur35",
  "key21": "4srhM3FkqtMYu15qKqfX3WWRynjiJtCn6cM5F99kr7iLgAsjX88BiapBWvvxPStLxZJedDfSHjCFEcqMnJBM7M3q",
  "key22": "3Fe1nGNmyrBbJq1pZnfUzLD7aVjT1EJCFWubZL2pkPHmoDJgaR84hCGcdBSE6fGYaMNmCbve1EmvDdTN5khh5HKc",
  "key23": "J5ccNzKCPvwxfrWFKrLFz12gyeZZW7TyHYKo99JzXrXZ9FiMfcEGUdioz69zx5CTwkVCG4XaosR6zkP26MBiPZD",
  "key24": "21BrcmRm8ebSvTdzcaWCqgZJpCy8Epm7YBKCXhhDCMDcQfVHhELLpLN8qDRKgnCvJLGVrAdyxCXYUqvxBx3HkFwK",
  "key25": "3SWsCcRXtmRvWwx1wb2FxL1PRjJS19uHep6MKqBKY3F2AQcVKazv44Nnox2GWUvm741sFSN96Ld11dzSRXhvq24Q",
  "key26": "4t7QPyGHBKWQ1oHi5YEmu6GCCheJKxA9JnNV3YaaBXQUkTYRCxupVV5YavGDH924KsM9YgjhpuSxsjFiqRBwSV2w",
  "key27": "SzFZSQYQLwCNLDfFmPDHNUnWar4GqPiJDZKwyc6mMJGKuHabsZNPe8akussnZL8yvxwG2SiXg4t42rz8iqVcrwT",
  "key28": "5NdMXiuZfLw6TppwTpXCu9ePrhqePhrtydPnP9PLrqvYLgkAmsxT1heM99yaT7683GS5DjtczNM8pVR8q12g4iDk",
  "key29": "533HHjVAZER4LccpfZMuej98HZCnhrVzEM83Y44oWyzKTCoy4kDyMxPLMJCmbGMZJWxX7CUw6z5SuTV9D9uL93ys",
  "key30": "242fW9taevGHyjQkooSRmRyMg5gGcTgLN9qYbyNNocCHBSHUsKm7ZF1wFQnkRJiAQMmStkPf79uCTFNCwzYZ8ztd",
  "key31": "5XxJN5UmmrE8mDaAh2ZP66dSQrTfFYwxfCdUhfGtEsa7mkZ9sPM3iqrvyPfrPTrPsceybV7dCj4GsXwU9PdSpXk1",
  "key32": "S8Ch8e17Q77786AXXtrk5GaJ2pPWeEBZ9F1411L7hKPdcMWzZnFL9W6rwmCxotomtuaDiCcvXb7uNHvEht3xWeC",
  "key33": "3pfAZALNMCybC3skqGcZEZP1MsQvgmmazfj4o7xQatwrsZVibKyhqNPzDspKLRHbDLymoL8uEhGAKrn6avX9LU4g",
  "key34": "6468AyKA9ziRmF52rqMNwb8RYMKp1uET1g8A5kbFQkyZfTxb12qmJmnmkqfFrKfYFkduWxEqwAK3S8y5NCCKZLYa",
  "key35": "2dm5mBJwcKwrnqBtEF4Sek793T1jfNcDXB6R3fH5yMPtHojKddcv6AtymQnyBd7RPrF4MdSu6VNxksDrdqUpnJgX",
  "key36": "CxTtBB9Mnn6Mu8UH17dnVDvyYnXcA2Yd4t8s1L4HNxHWSX4CSRFYPtQ98TyxaiNSFRZgnHDGZmeTdKfYSxAraUp",
  "key37": "3LC7LVh7i3bG9qid8XHm58k2kddnPxHeNHMtwhGGCXASSthRYycnwGRfJvDB3aJ9PHcYfwzV4dh5JMwQb5FieyyM",
  "key38": "4neQZTz8H7D8ZnDmmnEutsA5ZBvEZKiXAY5jem6UTDCc58Lp627NwKQqPnNv9yAbhjZMyq4VFEYirLpwQfopaS71",
  "key39": "3h58yMwsENwCoeTpfzTDH1XUgwxASbcxG9nboMXRMzc7pbDvJfKizBWK8GsQSVtV6fowzeSAoGK7eXdHdJ6fU9n8",
  "key40": "64Rai7WMcQNwdEYM2KWmz47np6RAD3qsPfHCT8kRq1cJE7ritAiWNvRYQizuQuDHYkuABKdrkkg976Bv6Vp6dVJ1",
  "key41": "2G6NwSPtr2Z6hYfqVrZco3wTvQjueLFnPaQA8aLwkmy6Y4tMzk1Sgosyi8yU39ohWLAVTzKBLjpSzWWvRqny3mi4",
  "key42": "2bSwji9nCCWtEn66UPo3JVWDzc7DSbKD43B7hCXqUD2frhDcKvv4eqBQWyjZYu3FMXr4EvLtGDzw5uGWgBAGDe2X"
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
