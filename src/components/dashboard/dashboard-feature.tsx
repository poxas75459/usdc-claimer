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
    "51GGsNSqchWxTGHDkYLwUT5nkYdyg1tH1jtgpHxx9KfkX5xwZzXP3R2JcfVYVmRavZpiDYwkJHzF5R9mk9w4pwA2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ymUJ37f2XcN3D8XN3dso9ESUjYcDFGunjSgqPGzsM111oXoSYxpsbThx7EEpemzjJ8Y3n9vtbwQ7u5ecbTmF5Ba",
  "key1": "3HnywqcnbynKxa1rpU8p1cXSBU2aei9jrKsWuDM1AxaNkYVDvYEFDbA3eXgSJtneZzgsbAqKnJzofGcL7K2XXcXS",
  "key2": "4KdgosGwnxAARr7rmsTyci8YhbbGjwN4oR5c475dPEfJEGrbW5E4ifFMTZBheApHYrgvHTFB3voy9zUYUanh7eEV",
  "key3": "2Cksdh6y2YEtTLTKfmaNkemdp6zXUR1YgAs9vCLyzPEjAc3zJmhewf68KZvEsZEC7Z83y8QAv8EYgWnjCdcfFMoW",
  "key4": "5tqVSg9VyEDCwRBuCCbAJ3HqYN3ZqsuTDyn4DH8qBhPsJqHdxZyXBBEK81irK3YqCiHAJn81wk85ygpHbCtjGftx",
  "key5": "4UEcwZzcAbFLTqAhrr4jmBEQw3do9eTrdAEBPBGQLYs2Ud8egrnBcFJ9H8mwip9d7NVKTNQGv1BH5LAotHpQZa93",
  "key6": "4hRHGEwjNa8amvg4eSPu37wbP2P85XteP6Qugzuz6wfH3ErBDRYJwSrQ1JPcf9EreVzswuto8N8Y6qxNT1VYrr97",
  "key7": "2cYyELLioJx1QqncZ8J8aP7mAmJDhGYKgtkiZJdY9jeGtS5TvoiAs9DsiE7Ct1N1ZbMRwqLCiYfcYqubXVo8dYXB",
  "key8": "5Yixkqe88kY3jRMPriPDdYzYtmof2vPgMg5m6gdKNf5bPzpC2LKNLWfhr81CpWxVpg4ZDHPrSGRE1Pw6x8GUdi9b",
  "key9": "2ThmMTaPVkpS6pR4QXZc6kzMiiXqFVQQfJMuxuaKBwcESjNEcxVCyA7mzNkCjAFQaTbTA63dDsxwk3bYuGxf7JS7",
  "key10": "3Ez4vSG6Tvu5XwWh7MrdP1EXMYYMQo9cYQ5NziMvd46kP8QVAHTcNeQNveMwDVrDWp3bZxXt29gUTXrzdNttb1nG",
  "key11": "wUKC9oK49zm1MRAqK6hoAXa5pKEGjwoE5rEhBKjJQuZ3nyvo8s7kUvfE2ZtzUdaTSVqYDTg2S1HijA9ToHLsdKX",
  "key12": "5jCeKnsoe5ueyqKmF6VQd7pQwJdCFS4wmMPSXmMNrXwQGPEAs341rHnk1LYP5cZEmqiQzDeS4UvRhDbtJrCUZSDz",
  "key13": "YHkR2CZq4DMBjcvGdJ5Trx4hEX99SVqipbP7WRduAhUfeAyK66mryfT6Y8jFcjU9qCk8cDxBksYBEP6pFA1a56P",
  "key14": "4SLYSVxqgoiGZYcSqNZKdfiNR6bmHENa1cwEUjg7GVPmSGoHrTB6cPJgC5BGCegfsSxjNK6FGm7S5dLVZqFmTvrP",
  "key15": "45tMcmEC3bcBSQPc9ekUErhRfe6Ub2iMFLBqLMLez4AqaFs6dn7sAzHp5uamJx1Y3qwPmjRtaGFr8fdzGvWzbyj5",
  "key16": "5SjQZ9vTaYXWzDrSkTxdDZVLNMFXQocsUqv9pS8gYaGu1qhAnbCnR4qUHb4ii82kyRs96fF4pe9UV4Z3FvxGyaRY",
  "key17": "2i76BH4YTFEfwPqTeAZZyjSPjq5S6sqrXgyYwRcgUzhaYJdEULrZW8YoYuTs9EdgPWFMkx5kPR9GVoY3S37jpZUg",
  "key18": "5rTyW3NtPCixezpz4CCUFcQmvxjZRkEKx49RiM9Vw3dZQSNgVKSuq6WYuGjshcLMvCieYaPVFQvBJvwi9GwmnDby",
  "key19": "5VHG8djAjTfNa3v14tUKQpmU9Z34BQfGRYkjRRdn9zGPBHVbRFqHzHRFQ875eaYHHJxNkvNWYKhAMcS8911jR4kf",
  "key20": "tTw3x7caUPSyFYQFU2L3uG2YiDKycBMU6odzqchZUARpmRTHKKcoQpL8WzxmZPaLB4GNndhDKMg9mcZJKAbcgpG",
  "key21": "ayehsmfpaDtW7m2hhSHoMoXCRc3TS5rJhroocuDqPVRVAvy9EppGDJwDZvqEXYJGNXS5fSc4o5FV32nE58HtTuF",
  "key22": "2Y7fKcmuT4GQ7iufrxqhGVpjV2rCyi7RPNcPfrHTHuvMSdMstjRTmE7vA96epQKbTErW3r6zh8f92Msgr2yb3LR6",
  "key23": "21QXdsVyJs2WrT1XE8tbGAEy5MHwKkJeVmLPhWoj2JfyC4fLggVfgZaBrj9mSrQUQjQhvFMfM6VzTTrPrF41sVcM",
  "key24": "26rGtTyvJrqDoUjNxrS6KCDDDcd4mcthgYfJB6hxb2hLzSL9EiVqkN6nuTnshZofbtNjAftjDQU147mYWyF37jQq",
  "key25": "5QipvBGiC99MAtVggJLoPFcfLzMgzAh6p5wGJMCPpgzjP7Ks5oFkB6FqU3bBgoiMpaDbeoeeXxmGtoSWnUpxkB5g",
  "key26": "4uJyZvYfCCVsbN1eAcakrR7MEtaoaHQ8wEBiZK2VFnLHUnf4ynxs4ZmAibDbrLUnAicpiJpBpMB3wXcHgpQgrsvb",
  "key27": "2NsnBCGWeaYaRg3ELam7Exy6oTkKdmVkNf1oDfiiFquAXjS1azb5pGXtYoW6PdVhP6ELzDsk7Nxzmf3JwbLRay2W",
  "key28": "4b3gB2XScirQvuL4263uewcr5AQ499pxLWsuiRbFqFBQ77YrWTAVH2muKahkj5B5HYLc3QT5WbHjU5pN3QL6pSyM",
  "key29": "3H59RaJSsepvRYW88c1nVTUMaEt9j3mmoMFrEWvGXRVTND9VCuEs3d8Xv5PTis6wtdCbEGZ1aiGFW8FKqSa1tbpU",
  "key30": "2f423fCKLqiwijBRMyPKNadggRwX6PAhScXKLq3TqHfSYAH9gNGbfqZiQ56qceG6PYqG68cJxGCegbuHHxt68wot",
  "key31": "4bRAGRw8sSmaW8uoGrGx1FyvYtySNVGpR15Ts1BuCsTtDKSxrwkayYWXCFuVy3m4PjLDdm7FcySRgZ1LBeRdRjW5",
  "key32": "4vKt3DvA5c2QMDjxcD2NwPbATuRXCkX1Cb4eL5nujwdQbaU1pyZvnkgTFziQifPjDa6wGcgMwpKDXUBCsoZJCqXR",
  "key33": "2Xasc4X8jLM6NC1jScwProjtBB5hDSX8sHfRwgAPrYHMZusGg7jWaQRgCSj33tqMSfE8qjbKwCijE3FWYzQm7hn8",
  "key34": "62WgPuqBiXpZMB9kwfHn7Gwq1AMZCtxDKbePanxBpV4CqMfuRHgzKYSJkTKRH6vLjvXtph8K7HfnR8MVeZR69tVH",
  "key35": "5uVKigqJ98RjmMJJq6tt3APZcmQtxvsZ5cPYAtHpwnnjPTYAmmomJH97qCqDmhZvFPH3D1v2gdxKNiLCbgJa9BXv",
  "key36": "2VrCrG94rY7KEXEkhQahytD3d6umxYpmRovqjfi29syrQe8DgB8GWfRKVNTsFea6tzXM2npzUWeZfuQBHk6H47fL",
  "key37": "3eYXwH4VKaBViJ8n2vp8U1kBENkcr8Mk7Qv8hiaYWLnCz5DWNokEfPmHpHTvVw8PZe6aig1DPATdVos7g8Ya3pA4"
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
