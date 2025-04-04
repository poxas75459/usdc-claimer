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
    "5eLizB6xCVAuCQRXaqTmH8uEfnpksXzFpSTWtSucT85EpQMa4skC5xTr8y7PgVnh645B62HTvxoSnhy65NmCinDG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LnoKELjzq5dPUdYKiknKXzywe4PCA1uFUfsspaxhFkfxzpdZ8yvEafaqZrmNMXBGgKGbL3xXiaFbTEwuEiwBFZi",
  "key1": "5GK7Fqni8GeGJBtvYZvKiSsedxPtPwueJEYfxLszChLLS93NNWND4d61x8xkKHogEZqNKsK7zHH2gxuSgPJJUs4y",
  "key2": "45Jd1GwPfTNFD9qDKohkGwvB6fwVFTe3o9pVcvTVTqNLN2Uxg3gCpRf92AntAMZ3Ds18VYDJ9BaY1ndK7fW8DVNL",
  "key3": "2Tfjk9ZhT6CDoU4hRYWgjSfWDhX6mQBSD6FsjrgrW2AArG9HWmUhEArs7DV8XXU7kJ8zHUHsiW7ib1TAGggokghK",
  "key4": "2s5qBRKa2e2Uv1jLszXX6yT3tbVpqC7Aph6gU6iigFTjELUNuxRBVWg9XDVnVift5Kxm8znLXQhFbsMWqAy78MBL",
  "key5": "3Np4s1LfKrwTw6dnsEok3eDXNndJPUjz1aWyvGkPa8YZKZCEKfRVVPqsGaEiJouKqzZJqzFFurChT8hRB9AxvRVy",
  "key6": "5YX9bF2crymK1p7Ms7eEahtc26S61pEGwuwWKCibrDpWBsrSoPYU3AsRi36Zvam2gWuoFK4n2TNGxB4GKyyvJ8TZ",
  "key7": "2yxssBUYbQiaLnzc451nsd6fVNbqdG1Q2YdZETHfufSZD3YTQPoBPNu3V27zLRnfSSGFnirEhSbfswMVrjmGUh7s",
  "key8": "51smDxq2w8jLeqhkgeyDtwx6ruTtTeWnjqRMXoUBUHgKnoKwLn56EnUf7JMAkYD3cTu14kdV9KMJ6btzjj1Crpue",
  "key9": "3XV2dkDnHeeJSnrwfe5mFqoNsXm6MbTVPUKt8QGWY3A9E8jCvHwYLWRsTh6UY5sFw6Z8vbqwc2TTV6m8jJBjrqjA",
  "key10": "4AvM3DKnTPqWBj72tobwdyCBbnq1h4izRt3fFPx3GFq4wzf4Nmj1CH9c5kC5mpragCKqNmppK7E2PNYvTCn8h5Gn",
  "key11": "3XMUaPD7LLdg69S2TR2VVkTEhvz6o8KKLZuknzRbYLh6mbExFFf3wddQ8QJ4zzDmKRru67URK3uAWLgfvcafYi54",
  "key12": "48gJM8LawM5Y4r19HN6LpWCFxrwfQuQhNKkzqiY5P9FEY6dP2Wc9euWvcgVuZBNZ5aezoJtD7GmWX8bG47Q1gaQB",
  "key13": "4eFbqWQY4yHtqGGzaTLNfKFQtP9GtzuFaZT7eXd8ZuuZUazGhAowAaNuApeA4dSecN97Vhyp5ksG1PRA3dQW5iaY",
  "key14": "4iwWd29rBooAKGhNVrknh78VKfJ98N87rex3sBhymyfkKL7kTgDvsfvbUE53N8WP7k1B6gafa2HkNmeR7ttWkqiv",
  "key15": "58mDNzEzW8pY1mB1hZk1VVrNPa8vdVtgZvhWEvGeq9syGLid5V4qpNMhkT4VQCCaxYx5twSR9kojH9yn51VKUzXm",
  "key16": "1KTj1XkfR7Stryd5vvkaRKvrQTBtdND6QVB6fCGPAbUYkh2f3D8pegmj7dXzQ2hzUFGBpSfnyBX8moUXYcGqcPe",
  "key17": "42h6iRGrnzvzZYDE5z5m5Hij3W479VRuYZ4Xfdwkw9nx8VKtUt9bFeDQuZyFQHpY5g3nns44wkS2L3qNAdyuXdt2",
  "key18": "3iwrJ14NK8siUYx2ai2Z2LNuFSFMMwXmmXZLLFmkdxKC58iqaoZE49cVVfEH7xE1w7rB6FGeaCkm7SsRaYQ3njMJ",
  "key19": "37GbUWMjUfPmcsJCoN9mf4f9Q12ZskHpTwqkfXJWUAGELczmeRmqgDpvqUZdHz1aTLk6sWda6amJdVfYyFdpeoXg",
  "key20": "3Jp97uVeTgLWvJoCgrZxeAGWwbZJnAGaTKZTGHujK9dQQDhX8t5ZSuUrdHezWs3QrZt3h8yckgiXYzkcfsdhgGN2",
  "key21": "3Dbo3hTprumUPKwspyw5xMKqGSkSAZsw7MKhYs3JiKSc88sG69oxUiRVG1KrsYCxUU1GXuXcqCcJWrSs2uQDkNwY",
  "key22": "5UDHajiGqgrVFSSGFW17MztB4vytLU4urG6q37aYMv1R13ySY1kcUU7qes1DgUmw8EtzvVqRgKzgM8cZwLCMxZSW",
  "key23": "8ikyDgp7fDV2En3YRZGyyavjB7mpn1Zgd3atGBPMewBiky7wqoLUi5TMYWUkaBiMg9eguNmV8FqavdoeDTJWoUP",
  "key24": "Am8eEpjkcyip982kdQusuR2Jh7kMyvanvvEWweqsouNqZVBcYm2aCfdzfVmeTNPFvcgL56r1u2bqDnebSCYCppS",
  "key25": "EerJrj9iebbNePXYuzxs4xUDDFUPezZ137EYr1a3CSzg1k5gQzy5J6GCiFeJpzrZbvzpnp593rw7JVn8T1o7crK",
  "key26": "2Cfyc2S4AwK7nKvde4o91j118k58ourCKgKxRLu36zKi5SiDhFvQrRtuYfbsi7oqBVgYrJurRMe7HdNyknXHREPA",
  "key27": "2yhgnxDi5N438irwn5ot96W5f1sLMXPQjRgtwVvahDmLfbuTUTb2Cx5xSHHz5oZUuFLkuAn12k6wybDmHbntzrRp",
  "key28": "127EgTvEGcNMsNYXEbDtGEN8Fz8YcuguZKFdLv43RzWEDQwehyEhWrUVbASAz6BTnAbgbgkJ86iAbFRRn9CDRmcY",
  "key29": "3QuviRZqbcbYDw1LAo1xPJj8P2jsq7uKxjvgMPE3o9yTaTEzaAjfkM2ikFXQ2mXRgkB7FQqJMAx4X3hjrpX68jvD",
  "key30": "5huDDX9wbrHrHAucYbFECPtNMrEPhacqcvPqVvcQ3RHbvgY7m5SuC7KHdAtnNFKh2LdNAML69hsQFn1FQF7E1XPc",
  "key31": "pssFQMcJQi6GYJxKQw1qkU7WoicMHKLNp8U2LiZzJT5XY99WSigfAk1uvcNTUdetnTnhhRXSkqRGG69H4McT6cp",
  "key32": "2v6b7vC3P9iHY8ecHjx1Pn1p6AnVj7pjFvs6F8LTnzbvvAisDsTdUtsbtKijhgkpd2FsbCPNCcJfj4KJZdV5Zwqk",
  "key33": "4t1tUy9abcFrzh42o6NFrnsA6TpLHRgWBaVKPUZAgTrnE7ZhyZewXSbL7wkXBVDqvhsNoikH68fp4XPTB3Z4ZgfR",
  "key34": "uA5Pfpb6nQrUB1QnMQcjoraBXCV1ZdbzzCK3iicW3f3PYC7hXRVvDgVFdPPtjZQcq3CAbf7x14a9zzS95kkwLTN"
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
