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
    "45efBmpemTfEFYurUrFPK8nLeTuyxUUDNzCPR6k8PHfQZaZpva1a29ukFozTBPCi28xCY1gGCxwuNK4EhqFaG1Bj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ppBT8ecLUEexek3q1igRLStTHtMqUsJ7JRy3ysF3zFCeBSMHrzymqzovibbZxngp1Me7pGJvHytaRrDvxevnC1j",
  "key1": "284sn5CYXhgj1UmcbHRNTjrWr8Y5QwcVE4RxqBazb2GhMEALREiFLAyxkNmA8fbDzHuzyNNfk4yHsKqm2xjw8T5D",
  "key2": "35FvZvKJUTgHueE2zmbxhZXNidbhjutnPLX6ntHDz9gsiLnoL7LXRrMxSEKsrmeFC5D89cnZi3XBv4z38aF7LY8m",
  "key3": "4LHzxRF733ynVuvx9aUHSLyp4saugzBme9ZHvgrwEeMaSnCErkipZgeN6a6apSCJtsL4aBkV4JEjtfpw7yMZaei2",
  "key4": "4KJJumuCdPWAAKwkquS9ZmFx3LXU5AyX9n98YyQJFzwAdUv4LhXJpR4T6pNEcWE7YhbXW1wLBLpTWSqkb8qfLQ4z",
  "key5": "3RC26V8HXmxzmrMcpncGkNyDk7zqEatgqbbT1Q7ayB8WHAntLsfZ2uyEZwVdRRc3hfjorUnoAgQ33tyQjDDE8ZYz",
  "key6": "572t3Cf6TVdGHLtGSFWUUqJpk4VUNXoT6URLpPtybi6JQp2H4p4TULYSVEJ6FGYCBxk3tpQET8TPdiMKtz1zjJz5",
  "key7": "2VjF4ksCZ44XJjYZ8UMdgGj1asYi29JcM5fJWyw9PFiner6FRqPjgdMZnzboxKQtK9SdKt7zJcQyet7Y2GWh6urL",
  "key8": "5pdP8t1FByDTGkCQt77FzJcNcyDo5TN9JuDPKy6fHpcDfzg6fVaVNXyb58YVXiwnkaKiq5mPu3zm8odeW77jAatE",
  "key9": "357bT9VWQkymfhUgx8s7rXWFpjgh8QzCyPgeZgvfPd16Y7ECYbx9Sz8bTLrYvc8R6N2SngmdPwQz2joswJEvdbMv",
  "key10": "5rRAftrXhnFucEGiSi2ehydCCkrsTa54av7Bsrh3QL1CKXEGViRAoqTnrnLgd8kNc31yJAqGN4vFRu3mcQp5y5qn",
  "key11": "4rK2Ao3jNYJ3NkjtikwE5d3DoQx45rfP2zAVGUSU1jCdH5q2YSZRE9Rwrpv7BU3RtcydvwUaCo8FDViUfKJtWhTa",
  "key12": "5arfFsyJ9foxNFyk4KTDKVc3YiKe1Dj69Xh54GTyJJgCZpN8QPsrLjAYZruCM9q2YrkE8ujdZ3zFL12xaBQffey9",
  "key13": "5zND6CSKSnvi9cETqEc6XThG47dUrZGpDX2tZSu5LAX14Qqgcs7S83NZzGPScGGB3CZ4NiemWBmn7u8Fz7HwAehW",
  "key14": "46go98wxiZTgC6krC4f9GRsxDzq378BJYktDWyxrdCeQDm32EpEVLeGgXrKgrHxBSrbr5poqNm8cbh5jQFb2XDPX",
  "key15": "ECN4hAaZsonDEdt4uQc5kG4bMtvUDMXYXHTicPPcmehKJRyeeVP2swN2qwHFfwrnYNge88eW6ysbESXB3MwinwZ",
  "key16": "Gs7VP6wbrPxqMrTKJqonVShgHKq1KfCEpqrYejdAQhg4AYtQaX3521GLJv2kLwDm5xmWwZRVbHXbWdcAtSB8D9B",
  "key17": "3U94qvmcDgrHBTqCB8CGuN5yn8oTZT7vVSbSisntNkvvHqnZgvtbDL5RvmEmi71GmJve3bJHgHnTLgHD4GRujVf6",
  "key18": "5hDHKTy3sgYy8kpQt9o6YP5vhmtvk4LzcNBKhsBCkfLM17yZdBBSJCMxn4LfvUNUSpGik98ecVfrB9zqxWXgkxRf",
  "key19": "59WgBzhShXvkHGpVqyVu7SKuRaEbAH9dZwZ17zsZqjvSXD9VUMG2MqWHv25Vr3cSLErd2mXJcT1sQhSXGXSCM3Mm",
  "key20": "zNDESZigW9KyMEywxqCCgySygH1Hj5Zw3F5kPq1M9GrU2GKcNnL3txxhVZQtzY1srPNtYgFGgoZxYPNC95HTKSK",
  "key21": "4AHURffpBuMbe11mc7T7wMokDBSRHXXs45332AsZHFzUMmRG8jarAcQVy9VJz1J9HKqqE6GpH4Q9DW1s2xjJfQke",
  "key22": "2MrshmuhJsiAwG92pRJZnLcYeGnKrUH5g8vL7BKCPdqvrrotzWQd8ajSt88VQkZVmYC4n19QQW9tKQBsAHgcwTr3",
  "key23": "3HYxupz6yRNqBheYGDwfx4qvNa8fZfSDBt8j1u9HZgu8q6uvotn67nmyhw3XkHrSt9VR3ymShfAkpgygKnRGRphW",
  "key24": "5N2fYSz3vJoZz6NkRQTgSmbW2ftYBJASvmELiU44sF9BHFHYqq6kYDGqkSAmeYu9AY8gBaqrbfxYZZvsjDLrSpKX",
  "key25": "5ZY7kg7TZLv1iseJcAmgoD4sHU551rGp3frq8M6qqYDEpmP24WR69XqJGCMnyTk2kmUWbxRVZzS14c97Hwj56UFb",
  "key26": "3kbNWLCtaawmPJyRowkjNUynHiYVarWvcKEbJdjiBLLkBJxqtWjmxDb2FAh3pSUBEabT7kvVapvxwpFm2Gc1kJgG",
  "key27": "5RSmcmHc9dzxYuZY7XPz6qkScUmY8CxbQVrJUzgzwBUAdPkwMWndLcy8qbi285TaDsa4D2o5DM14KqDDwqhAGJam",
  "key28": "5fdVcSn9dFfG6jrTjcKtwvoY8wDhtEtjGEi1xCXnYwNui3sbgZdircBabHRVTmxRDR85Em1qqNKo3SF2ENdYFdRw",
  "key29": "5j7AUBeoLhd8Gswwcsgw87gWqNVwpBjbgskw2oW4jVUQwNuLu7jA453d54FZcrrMv6JuN8Q5ErftRPCiw6DA4dMS",
  "key30": "2NGbam7wmPqQ9nEJ7LoVWW3WU9J21ivm269uRaePD4pZHdT7UrrdkEoz98tkMUMiYfTdw57vtjYyC3dL7vDFdDjk",
  "key31": "2G656j6NV6MgzbtbiGcTf2C1o2MzY6tgbeZ4hsBKszea8phqP1FQL4w9KxVrRrdmeAbmcqGSW6L6KZVnbQFaxCks"
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
