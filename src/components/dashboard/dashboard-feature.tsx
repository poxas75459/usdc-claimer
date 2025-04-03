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
    "3dZsi2MUA7HrgtTsjFDWVJ7V7ksBcBWJEXRV7DP62fE3an24n2vXZGBGLQctNkbtdGaf9E6L9ka7WcTw9tjxBDEz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5x9AbSGqYgxMhQeMRKrDhQoUdvx6g18hPVZuxt2w4VYt6iAY1Ytn2aaJD3DjSrA8vgYinCYECFEyLxjZXJFhCtCf",
  "key1": "4brA3BatvpBWU9ewLjuQf2WU8z3URUGzrPsZvrtgTSWjSxPcQJPX8birtYcxfxCrBin778BhnM8krTGTyQnuHJA3",
  "key2": "3Ryq3g1aeMaA9RZmqfbV3G2i9TwRoDtYLTViBYkZatpNCHKhVYPsB8Nxc6im75LMDgc5wJNPAN4y7wLDvTMmWJUx",
  "key3": "3pXTL4Bd8fCMfyqzvAVwGuCHSVwHAVcQY279xkBKB5a4QmqQW5AmumZdJFfSoGsV24mGd43ozxXrg7U2yk8s2fXE",
  "key4": "3R7sJJVvHav565qCS5UXykhCQafq27WRgirbPZVd5zojiKwpLvek35gBaqbhcRct67o4ztdvzpzw7xff7XS5d2R4",
  "key5": "5u9KWmeLF9DkdYWPEifk4UcZ3UF9pznU1LSb5fnK4VGqU2iLSr7Ld1989d8XvwX2YPnYujvrPzERdwdznrqGmTsk",
  "key6": "4PCWaXhEfjhgeVGUsf2z8NMWWjr64CRXDXguSZgkgmzoFnzEfdyAjiubmhNQ8Bbno4FkJddcNA2izKGNLSG2vwP5",
  "key7": "MsKCQMasReAB7MAGojTKnVhcLuRFTnoMhCfbgEgDG3g46yVFtAePLChUfcTDycesZEY4a5uG5pDtJZ6M9Kg323u",
  "key8": "4wuwPZAWKTARdsnA4WLzGD2xkbWXpaSnez5LkQPnyip1uViVmNBjch7fSjc6uqw7L7vaWuKGUxqmTVofsGcjbzND",
  "key9": "36VHEkY5ru13KcGXM2gDuQ6RPLuxRiqm53paSDsW3vjWFnTf84Ms9QUzJi8s6bGjwZ2iBgjn8zJVPn1GxfV5RmC7",
  "key10": "58Pj2kNhwS9b2GBrWqk1ZGC2SHWeiZcTxWgSEbbrYXmyinJZ9cy8mzuDmdVMhugdZo7cepW7NVXrVPPYjQQWEK3k",
  "key11": "4mMYTNhdrLu98supLocAPhKpuFTTuFzJj4rZMqoqarJFADnKJG2Xa2hiFLMZx7j81GHLipU2hX67kfpoPKP3Do1u",
  "key12": "4BQNzfwjt8qjQo9y4KR1ZrzYAKWumcZgNdZAZCPNz8SyABCRMM6atR4xcQzAFZKMDvhGkAEQZXnoj9nXtQS6rmCv",
  "key13": "55U9GkbYmC2vm9NCAQYzwV1uRBToeotHeox5z1gF8YPYsEL494KvZyY5MpUdihiYTeA84uxkeSe2dEj8bzFtd4CT",
  "key14": "5Kc7rrxrRwKRP4wZZJPcLi7vnsnjP9WVkG8sfTASeRLrdPNaAwbCJU7auHmnbeNNc91fEMLQt58KKV69frWwgfvj",
  "key15": "2zTtDbcxxcZtJ8cm12etCteyhs8ZDy55wCcbJaKjTCZmQfDvx2qW6JUzCNV9rNxkYx7Ew4AVXWEp96qFQfsGYDDB",
  "key16": "3yZtt6bvCEDX356e2Tkb9BPqX4fSNYGWxLzpvFWjf8sbybzaqgHXz9ssyqwTiHqcjUZPGJ4to9xYKKKxYJa46spH",
  "key17": "3voQq9nrwCtE9CMmoy9yVtWFB3UmhJfsK5MiB2sZkfWf4s8NSvxVzjpbhtKLG5UNUNx4tnjMrHvcNKAFhtwCwsSu",
  "key18": "5VHDeC27fjdKzJ7HbvQ5Tmd2xhCD81cngNA16vHtz7ndKxbC8gtdSz7iorwAM5cBtxVKcVfGhw3UdzU9ufgsL1iK",
  "key19": "KR5ty7feXiUVby5Uoog7V7m9nGV9uBw3WdWuF7VxwM2UXmKTxoSA8Mh9M8EPy5XwmFLHPAEQz4za8BKSb9bFJtL",
  "key20": "28RmnmBzFsViT1EgPSg2aGAcipucEimDXpBrmWdeCm2yjDn4DbFUaPkjwKTa816ZUgBuFcvN6fZHLiQnmDTG7EB6",
  "key21": "wjMrKXAFngi1J6HNPtu6xrEBiZEZhpnNyqUGX2nixeTfF49d2b17UXMkmdsHQPVY9xYQdcLBSdAF4rHKhgXuCGi",
  "key22": "2EYXobnNbT1bRzN4hvtkmfA8o2dfeubyEhwjFKusruCmdFJMKfmkdQ2Vsa3dszhfYnvJ5LpneFqM8NRkLBsiyptv",
  "key23": "4F1J4c9ica7kM26DPMGiXWai6H6bJvukPiyE2gah15pYamanYBVgiajBVZiaW7qHAy7dVzV9hsk2dMQurqAp4woA",
  "key24": "WNDmSaQ1xrhtnhjnbXofCZZXK2X8pUPYobyz79NkmqniNtBxVsHpRc9xzwDSdKiUokFfLdE7Qmgt4BbApcGtkA6",
  "key25": "4oRDdizzGPuqf9QsZKryaxYPbkhVCFvN5ZBBtmbrAtQYmEao1hZZqTmGdZpP8Z4NzeoiHXZ8sFDicG9AnjUhd3iQ",
  "key26": "2DhkRQTeFk3NfCEEtYEH2sn8TTU2JjgueXsBsSwic8TAJKXEgH342Kwf1R54aWQVpsSxSMz5njT1eGRRUTGBpNkr",
  "key27": "5PjFdraGYxXm27PGaumcGJXPLSzMUtTxi1FMr15ExkcdsAneqkcH1gQSSVq9EWK1ybQ9cZXQZATyLz2297B9x2it",
  "key28": "3MXFMQXeNiQSYM5PtSzonnnqePhfMpnXiy217nttgeVTpqfaAZ3KvETGEV7owRZKSrCTonhJjV8nr3xm5x8Nx6aH",
  "key29": "5o4bfkTeSG56oxMCzQoxx49yKM656SFmjx1QpSMu3gG2iiogaSixMRT5rYrBpYLJb4KF2kfGMkNHKVMtC2czP75T",
  "key30": "2BNDFJJN9zQDGPmqRfcCkVMr5wTjAJoJabEVQojkzh349QhBBiuxvU5eWknePaqP8pAz8YkcfbNqc7DctVL2tSVK"
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
