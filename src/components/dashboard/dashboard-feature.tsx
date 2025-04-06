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
    "4Xs2kydjfRioPLe4r9qCTxT1C5Jh3bWvG5v9FJCp5LdKs1PZ9qfstWWLJpWoDtwGDcmkER6a2dNqmYnFUR34SV2m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KPz13Rai96xoyTaa4W1JPWCQBrTBFx7x7Xke2pnTP4TJg6McEewgesFAWVW9y1YZrDeJJEbqcK8L7JfEwAddC9w",
  "key1": "5N4d9tJyMGNkEdbKRy2aRVGVmob8HC9ZwzGrWYJMtS7JGGLHydkf9LpJznn6fKKAKRpF8D56ntBmGn5h2Zy6N6Xp",
  "key2": "5XM8NDQBdMfFZkFZQq5igK4SjdmeCYLj4RLWB8a62nMky3JXoJUzyg9f8AUeRmveQcTDLAfzGXDEvzJFcv9doxFQ",
  "key3": "4H5FHkFbVUQmim4V6oQmW158dfreXhVYGsRZqr8i8DTbNVkAbYK7ShrUPM2nkYgJkorbZQw9AArzCoJ9rhMSa7nR",
  "key4": "TwGMvkYVQ2rXoSqxSwnFWso8f9CTV3ZVoL8HdL8fZjXTHmDcso6pb8f31LmHi38wFFvmrJdWWNuzn99d5Svnx3q",
  "key5": "118afmXJfBWaRK9T5UudE4HMXBitAAYDLN3wUoqju27BEXTXZGj3GRSQGPjDnQWieP575cN1mLSfzLX8krbnZkN",
  "key6": "MgaWd5hvFCebPRXPhsXqWNXFvCUVHhxpiEYRhNiyVvCUTy5J8eKTZLApSaAV1XpRM2TXE9pvc2fy3uvr7B64ywL",
  "key7": "2ohQnRxt1rfVrwLp1FDK6tWHjWYy7siX2n4X1sRHGtYg5inCZtRc3i5db7TWW2CWtCzQdXRjcKYJahKerpxHD4BR",
  "key8": "4qWsdgZrPeB87Zb1gEo2215SjUUWB9eLrtDgj8tdRG1ych1GBc5bbu4Tbs4kiuxmP9YBPAJ3hE66P7Ei1k9GDwDz",
  "key9": "44z9SnH2tMwbDkfnRpBucAn1opha6gM9XxHvQnQkUzhUDGikkkDvxBsVdbWJErLDJPbwqwAsVTQa2j92f2hAhog4",
  "key10": "3EBXcmrFxP7y5CrbuBxYty1yyMxzvGtqJ5s8nAMVK7xqLupkyXVuczNpHoQWAEaftaHYCg156EGWSfBAaaEV7GvA",
  "key11": "566n2LRfLHnerSbNShh8pNRqehUVue2yksFi9KPBBrjdeBBMff5K4hZYchhfMt6iXAx4j8d4WRYArPkamVzNwt9t",
  "key12": "4BRcdef2eRzpccBifNmqCEgjfPDiHTj6QZ5Z6L9UQCXko5R5M5qGVaovULzdpC58y4aTtQaWouLZMGDdkmGGYowT",
  "key13": "3rHu3VzqnRUR2WC9b4P8xEtX6xrooh9qxYWDvaWKzgDHSyFrTV1vQs7zm7MuPCunc49nfkhLaL6sJFjHWMuES2v7",
  "key14": "4DynSk2kPh7K1NovfaUXLUK3ChHDy6YphX3gmnKiy9HMxLMYXn31bj3nWMxzQjB2v1j29FhQe25gUaRL9M3foPtz",
  "key15": "bnQgyur4oagAxC4pH2QGEf5Y9gztFUHGxCH6KH7aRELT6SFZoMr43S5x92RwJuc4XqK7AYVt5UbMAwX5LcqNUCH",
  "key16": "39UwJ7nPmacT3GpvhVxKkiuLxYrt7JWY4E7v89k6T9GgidoS76mQuPWv7FAgGnvhgx8wnzTb8U7ozR62mndaV3xp",
  "key17": "66oJweU2bKKVf8nCUpD1GuqD9H1Mc1KgvCDMMCWHbarxEt5TwW9HGN5oDjxEthB2bwtBPBkmYjttMUdN89oG46vA",
  "key18": "3GQWvxCkrgcDUGBFXmBH4sCwvNKmfbNoxR36PVuctgQRqCtfczC66ABVr6tJERfyvm8mQeiW1pMExAsEUhciDjf",
  "key19": "GfmnfmtxwqQWJwEnDQAwyBxqR9Y6NnQJSARjkf5g5vvDgwDdYLToWJqQEHfMj8cdp9XuYgcheThExEu8CpZHtLj",
  "key20": "2NJHAzBb2UdfBBY4yb1bi4cNNPu3jbuPpKL3U4LnAyQDBD3ctTz2v9JNNFMTxW3TdvZ957RqAAXZZntWDWPfi636",
  "key21": "5P4wBa1JD9QPr4viFAdUECYtit5b5Nc1iZeDLnAPMYdMswcb1B3vKt1hLUAUaq8x4WgRNetjnpeY9h2moPYQvrzu",
  "key22": "3R8gJetDz5tksJRM998zcECKNpsjYiCLU9sKPFL3EaqhBp7XQfE5jj3385rDxnPpXzbb2TgyjP5MJfN12ppPScNN",
  "key23": "5CSATuigc9mxwtTidrqFF8tMAKDRcHLSiozLfz1kCT97J1BVAYhVghgW5Brd446jWTUtU3aAPEyyoMM7wAki2E8p",
  "key24": "4r5LWdMEZPF486JzJJWqiaebNiqtdP3geHTGtEAqZR5EmvmxQitqfryLP3QJkfFyGPdjFPwPiS1wrX2QbJqvV6aX",
  "key25": "2VhbrRTiASxTp2dA43oZ8AQ4NsKiTXCTssJB9YMX8KdKoDVS7vWhFedY4gg4Npjpkb3PhSD3ewcWaEKwNRFDPxRy",
  "key26": "4u7VHr2QPJQEZxtn4FmfhHh1JAN8iujm7JjWLQENzzBAEYwJVeUeiQPJ4dqTxdJ9GQw9aBFguw3uoXDPkv8RVvEq",
  "key27": "42rCKFpuqA14R8ikjfbNPp4GRxuxEqY4qt6pFxUZcejeWsJUEEs4xaHffKG9RkxripbNxmiza7e7oveW9DySSfp5",
  "key28": "5sSDvCHJq518tqZrWpAXUkhoddQH9a9vD3NYXCfqaAyghM52dp6JNvUqWNkrDFheAVJVwi2s1HhdHVFxBbYxe8VZ",
  "key29": "4NLy5WA5vVXDhgF85fiD1gY8tFHzds8Waou4Hz6ETD4CxLjFQm47MmaxtsHei35DvKWwun5BJRPBxoykqQBEcwEr",
  "key30": "59WmSTRHXAg7idt5DkxNSrwFGe1hpX9zfh46VrMeKKXd49cpagDddm7Y4xAd1JZgQqDVSz5uMRDfD5wmJSPcGYuR",
  "key31": "3cdPdGfuNF7wDKrrHoNGjEFETaqQj3NsvwwN29zFgzTwYRB2pMLgECXZdabbmb9s1QmkanxUfuaGR4TkRjAuKT1H",
  "key32": "4J7dm42XffJgtexUfS6PxqSeYqn2Y1c8UrmMHDWHQj2p5uKQf1SpcDtFcbsBjoDFN3TgL8LG23mSsWzDsd7GGNZo",
  "key33": "42JKx1GRLMB47GoPfPjyqR2zXyT6yjmAuowhQLEYvopmJzCGY9SL4prHrWSFLhU39pJGPLyWcHm4NmbSYJCkstW4",
  "key34": "4QJDvH5YecNvpFwbDGjJau3dbP8177Zs7L416sCPtrksrZaAjVYAjbWwUpmtzXmF1ikzaWyTQJs9WsQrrfx4Urgn",
  "key35": "ATL9pHMbUjc9RKEbr1qRHPx6TP28Csg1qdsFbE29g4i3CAqrwZAkV8P1tCWSAMGoJSkfAgc2vWqRAb1D5bDtPjn",
  "key36": "4WS3J9Cc5spvvjNHTLkn5xbs7UUQYR4qAvvyLMfeYQDgNZ7LK9SRuh15u3UH2M4iwBxvSiJncoJg8Vj9qKhNJQri",
  "key37": "5kELAHFVK1rqGRZ2J4C45qEyKXX5EZRKhT4AGsEVzWGgHuWvwcjwkCnDzd51K46JefXXqv2tAUEdhm6NTTRz3Vww",
  "key38": "324JYzMKZPvcxya88F3UmohbcniCvorLvzz3MeagUCFtFhJ6CB6zXSc4cvsUcXPcUQkhk9nkiVxbF2x8et1SWZ8H",
  "key39": "5VxBEwnTSgmDqgBjD1fzBV4an6rac95JJcr3mmBJhxjaMqxrgUYt4URsZqJm79GcUHo7fWdjaKP2EzViKCGQDMX3",
  "key40": "4dqU3YvH9v4qb2yePhn2yvnHXs6Kz6azrQG3Dmu7TwRG2w5HCCjPJN579CHtgzXsULWXrrYwwb77jhbgfBFjDtQi",
  "key41": "3DHciWTG7U8HiqAaxMVXHe3NhyT8HTCDqihjerZEo2mZRhVMVLEzgSSq5wenaFGRDKMrvZJxSvigeTWtHA6f5HzU",
  "key42": "45LYZx4yYt5vQhYDLSEkM8LSNe3JkQ98mJbUirPYFc3kVhx41EzENhtz5Ek4HaQiwMJeQfWLoD6aTbM5nHNx7RKm",
  "key43": "3gWKtE8oXQrGeX5krHSSNurbrfQEag8VKWRUjQah6XKgp1PcBgwhYjDECqW1F778tBXsmwUPAhXmKgfDQv2wdLUD",
  "key44": "2KCdXN8uEXgGhTLZbbPYrBtTCobGgMbmQHV6uAqexMuykJiEeAcUaHTgQYAW8NHfqiScvC69n7CqKG56HYzHAnXo",
  "key45": "3PyN3J69FA3YUm3HXjk8Yqx9cAkX3Cie9XfBi3EsWmHipeopHARA2X5JCSt965uYZuvrx9DwR3HAeJfCTQHgVncK",
  "key46": "4VeeJWDnqvffJtqWxYnH7occTmP4AifcG5NVR4uHdm244ADxNxR2vhvWiGz87eEAhK9D6QbwUE6q2dpzefMMumFM",
  "key47": "5Nu4q8KZzSV4Q5UPZvPmBDQEouW8XhYixSwKyW5xpZHPkWBmZhGjWmf7XRba2ykGhTWuvV6q9XmQShjVZXnWKCET",
  "key48": "2apqWebqZKoocMhpFeUkqytGWsFKykho5VMAaTkJdqqjBwRtWwEyv7jAFuHVDhSx1vMsyzcM83YD4FMSjXpRDD9j"
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
