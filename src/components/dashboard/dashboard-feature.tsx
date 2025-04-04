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
    "4tRX3c9RLqdYopCS53Vr77A4FTDtXVoMadtV56LNoEuR8mXpLNpXq8y5qy5LLf89jnCnXPkMZTLYiLzHk3MTMQAq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cxGK9VgTHWPr1CKMZq9WC8rL2uKXYFsRVdc7mH9kU3iMiNQX85LmD1mB1TBnfGZ7KU63sQjHr8pYzwny6JtXxBs",
  "key1": "2GSP63aVdLBgETzT1FCVoEd6PGJznDPGMfgEaKrUmRNqevJcHkows282DFUTQ4GN6PTP2koSzez4TWMuXNgEB1qa",
  "key2": "4YapQQrkfQtfmZsDGhFURe3deL5Zx7hyE8GerVsiRLTZ69RhrQiibtCmah7e64zQMs61zX6XHRthXXMqaz6qa83r",
  "key3": "4bsYssAEuK8wgKXNq9VymA1CUzRfzWKVJGAahw3RbtScnjCqwMyCJXSdBWML4MxFRBCBpQsa5wMVfxJsuRnuCGBK",
  "key4": "2fEpLUH13teJdegkYGfe3tYVhoppbaLHZGpMRQAtvenvD3sMzE5V7eJmaDUnM8iKv6Bw2fiDNwgMDaCuL3mEG6bN",
  "key5": "YvtsQLgDyf45BTWqB5qTsaZnuZr8xFsWo3JtRJT2ADNqs9NwAfMFDg8oeWkb5jcT595EQeeh2mpN1jj63oB47S9",
  "key6": "sDxnwwnf5gSuhmhJxzkwcxqwKqBYBpo2WVU8Wfybnhv3Gz36zcENXgFLAP51E7LhPiiCMUrA9KduHzY5qNPZPvB",
  "key7": "3vTMVknpPvSQKXecE5DRUtvZK9PkjGDY2kNWGMrmt1oGZE9TJfVrfi5z8WZ876WAMCXsZAELKcQoMW6HBWxhN73B",
  "key8": "5dG4KnB2fRU8TwkYTNzzcHFxus9EeH37E7wjScKn11V89zW2TpaWnB7ZUS5tVhfgD3a1ZX2axmzhFPGMf9fp8D72",
  "key9": "4G7WytoS2W6GCJB7asZBXC4LuaGdc5C3V6SGWYLi1q7WQ9vQsWg3GDyLWiYJWwzkpHJwnmYNKWQafgrWUoJjAeFh",
  "key10": "QvN8BPUU8xYBPPELQmqSKUv1ETc4W8gxYfiE3KreJDC7RFjZcY7zYtR9CshxonDJujE9PtFrio7zJPoBSi2eSHJ",
  "key11": "3FFPHiGunbBWXEYthec6LawzEMn7KBw8MF6Ky4oo64hWscPjTM8mFeBSz5zrN6pUZCuC4HP1mmM3n65h39ht8JA",
  "key12": "4EGQ8Ft8wd3gP8aAfgCSMmhPSifJbyChjNweYwRWYAPSsXN1QLAJdyduyuxRkZGDL8ESJhvgcsdWPd5CeJ7FvR5Z",
  "key13": "4Pg2QSiC49z4TtfycphPnW76bY9Xjh3DZLnwQMypg6GKn2cWbZ37ath49MDMNvKk18FnLKgKwWnuwrsdAsiKax71",
  "key14": "44Yk8rdPCatGGDABk1oCGPX3mXpKed2DBFQTPu2PT6F6KvzfkgUb3Add9ujMhzpbwPDtwEr7F1BKACGuM3YkJUHo",
  "key15": "d2K46BZ5qyhKXsZRFWAijfPVA1XPwdme312U4qVEt91LQkooZURESFVdqRa7XUJwnNVTvzoNJAbG8KQXRqwUHS8",
  "key16": "5z2Jv4dmHJPUxBfJ8Gc8h43jxRJNxhag6hSkPc87sAX7MJahaXPdCCLzoZn6VN2D4TpiYVFpBjPeBs7gwGp1Zsx1",
  "key17": "5bsgNJnkTRZ9s4hox6eoeSikDrrYWxtTPrCfftiukM9y5HHPtPfP1e88cfePvPNmDvBBmY9R46DF1d61rADWrFE6",
  "key18": "5yDHDDTcNf8rXRxEtRgfyK2txqxhr5boG1fPy8rdRBYZT7NtqJuD5kzx2X54KwySHGumq8pFzYNnYunKgCx6mYs9",
  "key19": "wLYbZrpuBMRQsGJQEMbN76eoMyZg8C3WMZdi3fYjrRkUL1aPavnVg5rxUpE4KRUHPehhy22NJ22n32Ai951NoQu",
  "key20": "5pYkdVf4x73QWbbTVS1iNngBsVVQ3Cup84twMq4of2Yhj6b5cdRRV3sc834t7rQbW8hE4JVbJNqzq6BNuS4RQUqP",
  "key21": "JmvJ3wdH3agG1vAMk5uUCS8nD1QdBBwUpRoxjjoPMvXqPoKqqxa7D1xB9e9kfS7aynYTE5Yi9754nSKQwepZP7j",
  "key22": "5fne7VZJFt1DRXeQLUJmxWBp25dxpNua2bgpVQzEUeLMk6HbHmTUsbpEK99BxEeCFkpMeUYJVuS41E3sqEZ5PFMh",
  "key23": "3r59wkgAGcHnaEJ2JZh7hU6pa3YyFnuvQbGoZcVPjGXRPi5UywTR3jZT56ALSSp3BqMmryFvGiXgTt4S81UmjoSu",
  "key24": "5p1s6ErpsnXDDeVwqXEhBhAzb17xoiRzhLyB9t39wHAbihGfQ4KMiu1tgJUtufZyhvQuE3zNJhPpMscd3nMwLvUt",
  "key25": "29DZghPENDMi7J2QagGHPSCqQMjb4kLcu19uP2Ss2ACdaPp67vcQhGfjceBr6KYrsGGmJzGGGxNdC7PFgGHodrtf",
  "key26": "4cUVZSBdrm6zFZp1UEeqhLKr7TGSUXQ3c8f2ZboNhzCSCKV1n2LwAhcEVrfwqdtbSSZJw7qKcRux6mPQi48ftFVV",
  "key27": "2KffnjpX1FLN7X2y2mB3dJys2LpWecwA1DeNoJpCtnGfK9xJL5fyT3cDf3DFpnzvW2Ts5DbAubZtB4ZnFhCrxYDH",
  "key28": "5VMRVmGEz8JpQQYUseVwz1HMJpMHu9xuVSTs6iHdShJ1NqyHgu5ZkyfnHRDkW9JtBXSjuEjGFt9eNNgH5zdU4Nji",
  "key29": "3B3WiwfNZLrpBfeaQmmoSZbrUdWV82j8LVZrNknBKoRpdDWvACeVwFfWSmEPkNgSUgR64N9zFyP2s8krSyRovcbq",
  "key30": "zN3xvxqJDQ7EaKFfB7dqSPBqsR7vqvi18f1jayftQ1pCrunbKYkbG2eRad4qBm9tj73wxxFz4NmtCygtURE44ZY",
  "key31": "4FNJjZLJ3xg7d7uQr26B9deAbskvqsjmrhcESRzdFCoafxmJqgbHnmRr3GQjKqB9F11ZG34CREiXxkt78xaiupKw",
  "key32": "5LuwkbUv1HyiP5iTg1Xc9K9L6zypuYpYcM3my4EXiZRgiCiGBMga1nVPyr6UvJMX8EsQapK5gaqjkTciAP1ap9Ca",
  "key33": "5CYwHLYZXMKfpo1VRfFQb7HDyUfFawNJWZPWgqAaroSsTYZVG2PDXGpydxVsBsd5XLdngj5BF3XSpTbwVNzu23sh",
  "key34": "5FovR2Nm6oCKNjFLbewjgaegU5mjzgM9V2zpdkqeZJDwhvbKTotKQ7k6ABBL2YUrUSbz4mwZC2LhJbBiQao7o6Rm",
  "key35": "4sujdYaTZMCgw6iqvHUv1ChuXSgTvP8bP6VpapCLJUhuu7Zuiy2XsQJxeq5H9eDMyNAZiXeA3sv7Wmh9ThrqSgqt",
  "key36": "4VSYJaB9eSfvrrZ7KUzzz9aBe313584BbvwpYk8RPADjvx3uvzctXP9rNVRDSDtCgy7oPasKijLXvUJ1o71WAZtV",
  "key37": "3U3S6iEMfmBD1K7DDR4WHxpYpeto7wz4t573UWNz9USrWGdH4TYG3w9CuYQo9F521fpg36AvTxYZ4ynvzimsTvcx",
  "key38": "4C5UCacPxpHmBhojqEU8ShHZtCE3BHyJYmMWNWC5VwTyt7GWaM7bEot5Y3JeaLT2Amd8ePwTcUvaS1xF3bDw4S6A",
  "key39": "3M7isaYcf17Asn5GkGDb8pYxatasbCFJFbsoH6ghgH1wrPEYBVxppzTT4VELuqSRqeR5ZKa1A3cBgnyqhBcnQaUx",
  "key40": "3Yc9W6Xm9CLNWzeiaftfJNaj1H23jTqmfwSfZd73NeqNaALAmE5oUdAo5wKNMEyinAqH3G4Nq9Ddqq4mQr5vAZuH",
  "key41": "3pTg3tNYyDdYb8UyUHz18NtyWwrZX4o4GSt28jyJg1zHNs5UKShwixiYuXrcQhsjw8nFFv8FV1QeUFEnZdVKk7yZ",
  "key42": "5ocX6ZgnrgtStRenFWW2XqkSb5dpBLnVvBTqvddqKPuwLogkTTuEBeJ78k4qzmUyxWDDo1xXzzrCi6TsmSyujB8c",
  "key43": "2igNExH88RQ6PjXDeC2m5gCMtmzXoNW1zBmgSy35DV6zFTRb19TNzbEFxWqxFpZ2pGtrpSSw2EtShfzt5ugLRB4e",
  "key44": "2CHDRRvjdi3BaEDTnC3LPknE3ALAjXNeS2hSbmjMaRJgTaM13jAuK1KsoJBJL5icLpC3fSNyn2AcjtjkAGFD2vkK",
  "key45": "jsBSK7cNLYrayirKUQQnvmzw9U7V3tGMs9nRKcYnrdxiQaidSgKJU9ufSPm1p5jdrt54c2Ro4TwD5WvocwNMn82"
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
