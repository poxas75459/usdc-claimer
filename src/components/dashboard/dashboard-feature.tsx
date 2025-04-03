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
    "4KfWCVAdF5rRzUsYKXpDqst1EFSGhgq4817QudUPYeU1tbcWWqxVvgXn4zNvDun9sjgrWKJ6TucYqbUkhq9LKWkG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "V36QEpyZnafahXnXnaoui22G6bZEKRoz6iu2LaUJ2pTV8hi82FKnZsVJ2deviFPWWPUD2mHeTxMQbkbGwhrsGVg",
  "key1": "4joftmTpxHFZqvwd93MvrXBfLKJ2m7ksQdagmR14am2RZ2UimA2AUZrHHX3yX2cM8H9zS4QtwcnakT8HJtVq2vZy",
  "key2": "4PXuEuqgNS41gLk1B9F87yiz7dfeqDDfCAC6KksT9ERSBiGBjPuwAtap8irmQNsmepc1nKyJrUfTKQjPgoCtoLTY",
  "key3": "23EARZrk8DHrp1wqjnkwZotaFvCBEozvh4kxjmsrhCTc61yW81yjd8NmW3gp2Uoidxvq6U3sG12xDiynXebJrcTF",
  "key4": "4JzfiVzJs9PbGNtHgDtFDRLNdfva5C54EDmSSPsYWqdAQFZTSCaWEYLLTrtq4F6F8Fsa8EdD7qRYJhZYyyJLsvoo",
  "key5": "3QAET9SjToKEzrhogA4u6Ng9QppSerAKd27faQYrXxjo81aWiPoZx5yXbod3w5iopP7pT13BdV6QZoZZ8Rwr4jfs",
  "key6": "2vUX6xbt1q4fU26xuZ3K3ddVcwW83kNwJSc2zpvUV4jtMXRphrVuYuwjvt64Gu3h2hKwrNPysbrhxtzSrSHEyDCd",
  "key7": "3SRCX9xspkYDsQGM2aDU6EYdBTtgbSbeGKQQL4GnAR8u2GrLAvaZZRXxFLWxwZVLrrSBDF64wybVBZ9pLYkjbhdj",
  "key8": "9gbMYtmCwoND4m1VbfWWQmS36F3nHgqxvAVaudCWte69iFYCyQCJkTUPXt9yruuE6Tbi1UGto9fs8na454257Eq",
  "key9": "26bGasGcf4PWmiBt2ZVkzPMMSKP5VJPCjvVJp7K4doQ4tK3SvupZC3dT1sHvAXRL2pkDusnz4suRukZWzYGGRnTc",
  "key10": "3RJR7Qh2tSgfTJn5qVHmeKX11E7zGoSKgX9HAppuLRUwU7ycgL3SnGBd2FKCWg4bxCRugUK2Ypj3jbwSdPgC7Hn1",
  "key11": "3K9XUuWuZzNCUFxEY4t6bAUMimppi6hxbBzxLmGYqrtPGeZfCsgYe4o9RdDKk9q1MgtTV24RqFHzQHxUQEntoB8H",
  "key12": "5GkvN68fijyr8oqcJwdmB8abVYMq6AuYYX8BM5CPBw4UMZwWmdmBrYFG3FiDHhmYZ6JHJPCRvQsLHoLGgxvbHbmc",
  "key13": "38DCDKK6WDcvGSWJctzQSTqUtbYupgLaEuH6RdoW7jnfxFpQULsSg4ZE6tu2SwB6iGYqre7mMcQKXnMJf9SG7VL3",
  "key14": "5nnktZbJ4VaLHSsEooTAHUDmEvUD3tBWXj1XhhFNNcE1QpMz3jZM7VyW4ffK1op6M27hHqdN63wi6RHyHEDwq6bM",
  "key15": "rZEUvYLK7AuL5CQ3a3omVSTRkaETuC8kE9B3CL1Zdu8qTSgwJX3rzs6Z67Y4nuugnemn5uVzBfaGK1AKnh6Cadx",
  "key16": "4R4dEF2jx8itWLfRKhX47dhHbgvvsm1XTgAtxeNfqk296tfAWR2G8sVmTVpFGFpCRKwU8u83NjdM5CT3GMwxgUoZ",
  "key17": "4VU9iyUMHvbyQSxhXxquexh2kdCC4rcvM5sn5HHYZ9uxBaNhix4XBwYjs23MY3WVMQf1HKdE4AbN4CRXUUNasRcf",
  "key18": "RiqpNC9mbTwZbgsHebMXjbDqxh9F1zvG3v7jJtPui9GzhoPdVdjp9JCbmpNXNrjkgUyRqouRxyBMvGckBtKhhtd",
  "key19": "35Rd34BFrJ8bGTpzt9oZm1MwV6QJKET92AW51z3dnH2Yrich5DhMK8pv7NNMzdMgjgrdLrbU2L5u2ZWjcfZG9yyD",
  "key20": "5rvbCN8saQ3hdEHHqLjknAjbZJut2rAr9zwo9c3jHdgoDtr9gtCVVFr3VzSKS9wvrnSNDsfdbp33ptw95HEz4juw",
  "key21": "4NWpXs65UXKfnn3CraBTS28UPMsG4YCoKNAMoFirvtReRhVoqHFs6LqVWt1PCNDV1zTJj7CMbyCGojR6KKPBUBCG",
  "key22": "454M8Qat27BMeP9QXSE7rd96Pzn1T9fZciA634m2nvnbNx4SRWM1rNfWGx7Xo2qfhtqXBq5ZYNaFFU59YM1bX4wC",
  "key23": "24hPeG6HC4ag1yFKxkZjYFn3VLYkrAKTdm8CS5zAN1wR7hZKUawMab2LzFDvr4p1iDAyQ4PZqQxWssoGtwhiQSDJ",
  "key24": "4aBQVYsHx9hDVhbohtQqhyPCDpPCRKW6RFaswtAQECegXotuWVHYRZ5yFscRHTnrFm7jqKo4KoUSC9aLqK8ny6us",
  "key25": "62wCHUoNZYTYJigB3ooJFp97fB3rpd4Xit8RyXJNsgtAxVjg6spzUC6y1yuxeTevCskdQfWJQ1B2rFudckXC6pg4",
  "key26": "2ZNKdjn58xrgPy4741qZqeDooMF5WRdwq5Y3uD36GztC42eJMs32QjCz8ZyagaBd4TKjKimFpQJVYmJz27uYw21F",
  "key27": "3VJZWZttByCuGozgAthGFzaLk8MtcjH3BCmZSBPA26Qw3QdiLfUGKbQhnqohUdtPcUALyvXZbkeFuMAyAm5UMrt9",
  "key28": "55T2inuTkieka9xGif4hz77sbpqerDr2g5uFXsvGjC5dVrJS2PPBQAmNGHPVvxWf4KQte8MrUeqvP18WT2f6sV62",
  "key29": "3CZyJqCxgViNriHQYVRiqkieUoerT8Lx8XxeCKGcPDf6vBWAg2x4EkzMZVDJVaLhhyzofrKxJzm6KMduzjsKBKcn",
  "key30": "3whAh5db4AThDU6ThV4NnRGoVQyun5Vdw7SwtHvgeQc5ArRBNdj35r5ZYqQa28GMQzWssPvx8NwrPAxyp1au8W6X",
  "key31": "4a6sH9RsokLrWPeW384zQjEqwfqV3YAe62fRue1UuMPoJfpH6XhCUeT4FuRTi4LcNJ22cDoGNH3GjHH26MgjtVQT",
  "key32": "m9vhxfzNDTtCStLqNY7PYbvZQVCq3msfkY74u4W8CmTCQdVKi12vSuxBwkCVrkSq5Z66Afvn6Xrg2TJUBpnm1i3",
  "key33": "3DXV3nLyfxmhASGo3GcFfw2UsFvBGpD7Tgnt9XCPmLCium4FRpyhL2zLJgNm8BgWnAcJX3DLBUTEP8cH7xXhdLL5",
  "key34": "3SE9xVaJMQ9XRPpyKTtLRRFS2b3hMiq3ReNhhqjMQhHvmhp2PnNxdt45Xwj6rih3udBeaCMqjeB7zwJBsu4FDW3f",
  "key35": "49bUTAA8UJs9nMA9YEvoqKfHNKZwwEVzB3QKEz81b8rP5QPZzgfcNv3xVGfFhuff6cR2GvZZQcRw4Nyi1QirspnJ",
  "key36": "5TA6GxEMGg42KRSXzoa6DWSjGTjMYH2ZZtBSFNwvtkdnYy4G6wyrGZUVJUBCLWjHGQa5HYxWasLqpn4nyiG3kjG3",
  "key37": "iwYRQuuM9VbZSqLHz1Rcn5YPNphGzE75eSC6mwHgryS64qTqyDHCrGctU1RDSxPy1TgYwrZP5XhEmSyxisZQyuX",
  "key38": "3JxB2nuunVFez4g3x1uibRTWgQzBh8TteiTWKmVWEVM9pwioMg1XbtSNH8RjK5pMsGd6h8DQCqwuwwkobpxp31wh",
  "key39": "3AkQrnYEyCU7XksjiT1vzWbRBdqxGSp9YZqUxmZNTaSoEWzx2NLe1xwWgRjiK7pqKyTNa1DnKodX1XvL91JbWgky",
  "key40": "g7xHPPeqxiYrxGccKhsfAbDAdvNNtFQpX63gim16E3VP2noSqGYQvQPVeXASaJouc2Uz4bNme2kYjVt7q1FgoJq",
  "key41": "2srvoF4cWfXH58smxxbafp3zCpXXwDWeuNH2zRrpKMaPFGAaCEj47eD5yod6dgwoK6uvMCDcmSbd8vhtjwPyVfdh",
  "key42": "35VPzVvkwmsrUHwMkxiFZ771x1oK7yFnofjUqrjMFcGioWkGmT6pSMghG4MtWWzJR8y4ogk37CoJQWNZjMVMUw2Q",
  "key43": "23xGwaCrmmqyYkbL3PpgFH5ayJDfUh9tEvPTeJtPAAaKkxQC2oTTzgHm5MXN1A13MVzSPNMf2n77b9k9vqKJrjeD",
  "key44": "5AyQmdw7EDaL6NmZfMY8B32B8DzLXHUX4kwsXWBuZqTfDTPjVuiCpAxmfaQpWsebscidJFPb1FMWPaUoz3vj56tV",
  "key45": "4yB5S8qjViG2zi64LN5f1PNgM97cX6eUNyqARdSChV8XuppWcCNpbkyZKzjRqdoHY7WmGc7ruJKjt5BiUJDFtpGD",
  "key46": "2TVHsRXLMWNsujjgrXrvVB9ELte76Xc413mQ9ntiRYTQ56fiGQKeenRHBsYt67nN8tBMtiAbZqxvH17b15JkUofD",
  "key47": "4Sc2VCgPPt5XMud7hCKKw6Q8L18qzDRxfkBSTSw3PvbE3zaBKjVT8g2GvU9wf7eHYzaa78FGLTZrYu4bTuh3h5AL",
  "key48": "3qU39XvD9tLGDuAnqSx287eCppU7tXVZgUniwrzqerfY5UKupL21VJun5TEh2YTPCd37SmcfR89bb1GAdvu2XPSK",
  "key49": "5q6jDhKuiiD9VHTQan1Wze76dskAic6qugBpWu7n5h93mFDatkTNEdjndQiVZBfSx7gC3nti63dxGeKoyw86Eg7Z"
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
