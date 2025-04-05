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
    "4HW67L2kj1rV5bbUmKra3vjGLxD7Bri1xx2s5pY1RH1QXXry11fKrHuV7csALR6P9gfEPA1YRk7xX6eZzNiMf5hs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64mK93RLxPSFUECrKW1oBKYYETMRwiSxCdDJJwzfVywNiRo67NngL7rUew49x3fnovEqztTJjVZe5kajzo2fVEjB",
  "key1": "jheE2ETPfUTzQmDZuakxhZspwypejS7WvQAX25vxmt5UFp8yujb3M82sbDRwbWVfFbnnBmW43XVQs23otkfmpJb",
  "key2": "mApL6w7p9vdgxU4fqJSBxn6LoabGrChSCuDCYEEbE9q5HtkRBNuKBiAVQUcaNZJFDRThgMDotueuGyBMbmjr3yz",
  "key3": "454XU82P7AvDWJ9U3aZt6vi7TTTemrbxPUm62tqmCuo2jJVimnAhs7P1qi1xRQnAdJZLLCimkY47LFQjKifejZp1",
  "key4": "2TTPm34agxn8EppSCD6RfXhNQknZuDhfZDqLQH1ha83iAP6rzyaKGZEvTf8M3QMfCtYFyZSprAkudeXfYAzY2ot4",
  "key5": "2dXfj59u8duGejYqECWdEzSdwX97mnEMv5tvsqq5Rb1KsGmHQN2udLpVb6tiqtuhc45MXyouhNksQB6jywtZ4dwo",
  "key6": "RmXyYF9PyaL4QgGewcBGcsDSG6XTXVTDfDtNajwtibBWvS9iwDEJhg4zwA4dbeypdF2c6YMNJkSSsmvVzs5PBot",
  "key7": "4w8qetS8XHQByZRdEKcBEfxFjKVw3GaM48TcjmtAKM2fRKZfAnopian1orsf2wJecqhxkeuby2VRX2Hqw56g4rug",
  "key8": "25Fr9D7Zh14sFZBZ5wfab84eNkxmQdyhaFWEofhPe2w4JF7yFe9P5NwkXv7XfRrGvUPeosiaxKGPHaTfUjZxsJez",
  "key9": "59DZzee3p3X7qJ3W6onewLvZaGgEW8z3QxktD1YRm4WdS63RfYAHtpGtfHnbBX2fLV5KcpKnn1wHjoLyRaEovXKD",
  "key10": "2ofGP8fNLWUxLXq647KRyhHh9UvQ2Qcg8KSQe5FMNpPjRGCpYCxDj849fuiL23fXqqHzntTsPZ4ok9XLkXjB5pdg",
  "key11": "5PXWXYZeiUQDU9JBUn1sFh1NK9wBgPm9rA4TvpYrCVV2VRcwfv356fu6r7EE2f3LoAFVe5XAFu2bqXxYFepr2sr7",
  "key12": "4LtsJKEBBeLNgtQWSaNDaRWodpHnLAMqnxYDgBMfKC9y7yBf5VtrWgYuMud8QhdC6s9hxRE7qR7p2TAo5LFQcY6B",
  "key13": "3nx3Dh81Fseoe9mbhfVNWQYs4eD21RE2bL2KDaGx1uCHMGg3MAfYCn8PoAC2Zb7rwsWJAjiPGLmrXMcup5NFxvwP",
  "key14": "GVQiRgMm5pEobkcyM68BcZCuXikAtJpBXYx8FeovR27awzCzgDkewrc8ZgJj9MWCKGuDKtLxTShYhSZtAecVqh4",
  "key15": "5jgiDLs8uVFXzGRe7rbV5mdcrBKnJtfPwwMhfn9EkAgTE8gGVFQmo2hJm8KRX7UJrGKKmtuuD69wKNSsRWCm79TK",
  "key16": "5wFT7WSvEnM1n2Dqstn2US9bJ2fYTZEN6bPVT9btHGbhMY3Fd1tfzfcNZpPRvrhtMTjCVoWCHhV8Rybc2uYJaXqM",
  "key17": "2S4Ko2BsXt1kotqbfzouEDCh9hvuyTCpe22uffpaoAPmKbgCTUqa9B6hJtg8aZeKUs1TwKQqCZhmSJxs2pYkjCMZ",
  "key18": "3rAbHwXszbTzVrndzXGJE1VBTS8iB3fyjKSC9jxRnDWBSLngN5QLXohUxqMxxvNqCSEH9c3PY32zefQETCvx8S28",
  "key19": "5sbQbrtHJnMszkcQGhzqa6jAhsaUXKubJcdUcjxn9TA1ywQwQcPtcd8upLXageahpfgjLavZ2KvwSeGhGpU7iyxD",
  "key20": "4wuE136Yz2L4Kjcynnfg522gfgnbSyUVQRR4CA5jjitBeq6ynJukd8ZfrnjW76ghAj7RYxBuwSdZJP32TQ3hCEzR",
  "key21": "HS3G9chX5dNnz3uNvTBqoDN9JYTVQPWfiYyMGPVUmSvtS5Rb1QoESqm4W7p39zLqUpnD62pVfpZ4Nvp18H32Dec",
  "key22": "FvTSuX4keKwCNEgSe4E1wNtsDonD2SenTmR1RiffJAcobFefvwRFtuTHtFGfvKpEVCqSQHCDGFea7TyzaR2qQSG",
  "key23": "34ZEgJ6EgQPPhw74ip6SkEWLZG9AWuJxNbeYkBZz6dBqNBd7KEWffUBPfxSvhv6EXE3mpj2DsQR1mYMaWwgQKUja",
  "key24": "3hvJ3FZ1TFJRqi8cbpFMtXTgpzYEmmuuhHtuRF7cvqiR2wcgEs8ocTNWsyzQoLnSiXyJcY3abYWfx9o9mrcmGCKf",
  "key25": "8Cf1NaX1XV1RqKVNe8RGm5qzoXaXRUwCxDFsW29FhCrPb3FAcxtoPcEzPJMDgLUDchqNERFhbwqGeZHHn6Yxet5",
  "key26": "4weqNQdPx3Rp4hJh6CK2DVKJtfpEiKUFfMWuvpU63TzsNXav7GuGoXa6sr79vzE5eVHnGC2cc6D9mxijuFQDs2VW",
  "key27": "5JPTXjjvoiAQabrdtkfuPLSWvGJzqjUcos8cusetFFdGUcLnBaKg6CA5Kces1XK6HFbSS1ifvMiLvKwbEKRTdbGt",
  "key28": "B4krbdK6CDR1M1gKrmGGQiaiACsZZjRaaxcvsxgZZ9U6AEpEDpTEWfJNgB5YUCjk1gYzzY3TMLNMjvmKygGW2Sq",
  "key29": "3YCFpMyvPbMHmzCCM4G6ayR1JdinLREdxVVNZ4RTT6bbpiFknxKifDiEXip4yiy4BbzCY4AEh3inGWimEjri4MmX",
  "key30": "3cn9NADW1NnnwCTxj7SyQDgjtezZoXYAt2aFHiDtxcVyqQoGevYKgq7Qo1AoFdGaeovxr5RCY5ygoHpBsiEJK6qh",
  "key31": "4LRua18s2fFbKPpedEQjyzY99hmPJvyxLgHkHdF5kzwQNrqRWNuS4CeaAxU38eq2tCgzfpo7MDbM66N4oTjXcYi6",
  "key32": "5Jt8bKJ6Qm8NbUfBp6pVqxnSwdQunqpkniPmqveYetAmx3PhpnzjqThgJu4x3Ygtm5Cx7HHkWb9Wpron3dE4cZCc",
  "key33": "XasyCebmokv2tTuCvqNvBHGtPbEDC1BdFsntvhCoCBbT32SLEMpVfdz6UabUTCh522HaRdWMXoUiJF2qG35DuKt",
  "key34": "554k9pu1eytyBk23Tb3DA5G74eQDBavUWSWvXvLZ47EtvdRFWLnAb611jpJ1GdsaeAuo6f2eQeSno6ot5aJLSsia",
  "key35": "iw6fkR9BjarAv6XF88QzdczKBqbqMs5C9T2HHH9xKbnWZdwPyDX1ERc2fkiYpc4MCXZKsxbuGpgvK9HRnbkDwNF",
  "key36": "5p2DwBhKJiA1qKMwoqZcKX2PYps34fxTQ8dtHFiX2V2YMHrkVsQaUG4P1vWXgR6Jo2Fvv4bYeU8yFBNBbh62zm7F",
  "key37": "4zyHvCGkku2H6u7GyWwddhwRh5aXz6PmFfBAuExrdZHbxijEwkHWRx4ptjZZEWQY17v88v6h1aSGXWnKTCJkWni6",
  "key38": "2wc6eHje4zhrAcwGcQbyXswyDrrdtpyDKorWHQufwigZDoFJpSH9ErKcEefQbZpSRxcAbWKEWBYhJwEjsr5SuA5L",
  "key39": "2stZ3KLd6LvE8iwgGTNwr8YuhqccU4XRopn38rGJ8zsp88MHGLuFGDS3zdkgaxCZZ19VWxku9uxJiXgzojTwykZy",
  "key40": "2J9byuQhJ4a7V7G4HvzXfEyfTTNSnAXSZ2LzXeia5ruNwYpGp9KDmPyi7E7wrqL8HKciJGTxqRtWSHthPrhtcuBp",
  "key41": "qhYjhrziR1kXSHmreRkj7GuzPtB94zUiH95vthhq4a2y4eqpvKPzAr3gToNDnP1M18VQWBRsxfGtdfQTwonBTRx",
  "key42": "uq7TetU7bAQLBdE5pppKCUrVZh817EmT2n8KruBVTsuSDibJ2S4K5dsoMk4Zh6QD1wtR9wu46a841hLmeXEh1Nd",
  "key43": "22rSBZbwBEUvfHyW7xfZCwL15k2vgeJ8xbWmN22t9KJbMh74zgqs5vC9DC7fWwP2pbPt22RBpjbhfNUAR1685mRn",
  "key44": "57CKYqiTUXRpviwxy9x3osGv9Wcv41TydUNzmYtFAvUzYCDZgqeWP2Aupj3V2N1VANXsQvpEvdYrfEdty77EV9m7"
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
