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
    "yiZEaP9PUdXk7w5SfhijiCcvwCmfWaofnqkusdqUuMYyMqKUepvdgrk1P9bFSjVLYFVqXumSBTHMvMPZhebcTad"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "634nim5tKwd37t4cDaU98gPi29yj9UzM8PKzhDpBJyXzSwfokNax8ryL3WHL7HWiEPa6uQs8dZXoWZ2wQYgq8K3g",
  "key1": "23822cHQEsmn4YDaghMJd3rTp5YQKsd3bGWjd3Jr7SewscWc6wA1RXKakdKsxRc5334ee67VgtALDmub8CvKTg7r",
  "key2": "2fwUscafeREbmcndkU8A9dYWCTNxbfZxHar7GNm1rEeemPGqrYASMkbQPHm1d4U9cfHYiYNP2PSABoUrL1LTikZr",
  "key3": "VHEjqVcFBtuPBZrgaf7QwpXDEhAtCEciAMTwQdU9SFwJgkhR1uoRSTm1hVayHkSMGXD4X5ye5MwvpuH1wfDzWgH",
  "key4": "DqbdDd5DrTJVD8563jwK6Pdq8Bq56xxrDMosNXz88j4dUVFk7LgD3Py74qssF1i7TARgZWfdXtipwk9xFH8cx7g",
  "key5": "2JBQBTtiqeSSV3cBvMfasxufRFZuW8qQ7SRbsfiBd12TSxAWJToUU3pJrjmWfVE1nP7HNg1MC3NnHRyYfLCULxCE",
  "key6": "3bqrWX4v1hZyKfh7DRm2LXLdA6eEXS2vDxbDvBadn39CtdPoMh7q7ynjT1wsXwCGASFQxwLRiPLELbJYEF4BKN7p",
  "key7": "24N1Yr7jzvg9m1FF1w6LXur1vMfirkLHp4fU3MBnojkbWj396SWrTH5eY1bkjS9YQd3tFiLvGmYoBduKA5Yf7CVg",
  "key8": "4fK5bddV1dmpEyR2KAmyX8t3MDUQGJ4Kh4TDEksBxDrZnCzKho792KN5UVajuCH7aKqSde3RUjV5BQfnSr7711W",
  "key9": "5BkgEAhrUccH6FSUgS8XuyDxWrA5tvDwKe4MTyM16GNhbj1ptoBxrupgJMaNhhdAx1RxogQkhL37hSSu2T5vUc4r",
  "key10": "5Z59Uv72Dgu1SqWxawwhZZwb1NQwrJyuQrQLwGtYx44vNbUFShL2YvvRaEwKxgMA9VcKkcyRAsYj3zmcLmgw7Xbm",
  "key11": "5K6KtHuJdy8CT2knYSazuR5CsCUB99qah1k7sLW4CihNxe7iz2QTTS2FDsNKacS8GLktZRwv45Kt6eBd8tgYaHCs",
  "key12": "5FGXnfbbYhneXpvCzuAvy7vM2MaLVarjgEo5QiDqCNohSs3XKYsNWgZthhEuENEobUYyJh7i3fvWxhVgdUaiPHqf",
  "key13": "2LPXYiHuWi44YYeKNjLp3h9H9FqJjNN4RnQaweoSUcRsyFiarAqrKuVLGHguPTmnruUqgC2wjsui7peKoXgZHRdH",
  "key14": "3r1MBVAAjzy3gNEDyU9Kyw9wqXUEqTtb8wPuboiztD8W7muFUauUmeqkwnFFNcWGwhsXBNZDbeA7gZoUHr7fwLDx",
  "key15": "mmBVjYbkdBAx5e3KegY9zfJKkHe4V2zuVQff5Ssf3EKfggaC5VxjB2v6EZmKsNy1TFM55ha8twErT2BCrwcBv3x",
  "key16": "2u4LgWwVpgYYaxA9NLZU9h8HVHQZCKx6MWjSsjk2vZxhesnqtLdeNB6Ext9aUnE76cppEB9o27iPzGXpBQULejfH",
  "key17": "6n2R61uTVp6cpHEnf1HTfeqVtyh7xQ9nRVqwWK4vAwfmXuqfNPFkLGTcwuxxXRRiTvnAUvRHMNfKFfdmLo6dRPS",
  "key18": "4ZjoQ3pW18d13ohYaTVDm6rt2WnFGYSZsixhRP6rrXQc1BisPd5aZM5Z2BPVio3cWDcryUjYscuSEgtucLAtGYKX",
  "key19": "5iDbKwFXVnL5WYqa1o9vUKTmJjpT8nfZKJpCDtxKbSPHGiHR2JecLYBPjrVegWVLKQx9us2Z7Hsu4xeAGBbqoRYm",
  "key20": "4WLg9TNQFSVjEdHK24me5Kw3E2G76uA6somGA8LRP3sGp5A6qVC7DYGQGJXBLHHr5KUjt7nznmV17Hj8i4xJ6N1k",
  "key21": "4gkjswqSfnVBf1Mfpi7pGNuMhWfwj3ne8gckYZPjVfpSvuNuJ5Wq7Urr7DQNkoW2HoZtqz7RkDNRXiZa1PwqF2Y3",
  "key22": "4fw2H3CqtaVBV3SjLSrsdXKwJ4CChjbBgqZvKm9oyn4wSczp7ayo7KR1K5NjE99WNS1uSwyzRwe9QVHfsDRzvzBV",
  "key23": "4WQhWkJCYwWsRQZbGV5ECGJN5je6QEXgXQg9SbRYzk9bxtKtGyhLrpGHepmWJT836p2sZydr6DfdhGeyQU6xXNdH",
  "key24": "jt18ftAZruMqZ56gviP4b62wswKfciSECUNLA5WtjYSDTPw6iTdJuDfWp9dHdkmjWGMiA3VNzuR4w6RGwzfMXcL",
  "key25": "CrHEjCswVPs2rvL2kak736nWMrVZGFkynNBw7Dz2fo2hi5yceyyYHDVLnywSAMULqyFLP1KJd4SjrNXXGuUCxsD",
  "key26": "4Ea38rzVf6tArsQbfXpmVixPgtroWo4Rnp7ztFXTnS2dBP98pwkvNkVn6PW6PPmGN3TA7upGeoCMGqx1xycPVMAg",
  "key27": "28xnHG3TjrnMGzsUXEtspZiajHkRVZLAu8EJNqmxm7aX3CDSEcQSiGVLtQWPcTaeXko1uBGSdHYzBn7TuM51uiEe",
  "key28": "4KiXcS3BKXH5nfghkM9CtAHks6LqCspgAbv6NzZvZPD6qwnVmMmbf6UUpQSXi9JjFoF7ohMoR8gSf8fBAM7j6dJ7",
  "key29": "2kowjrz3Cwg6CPrGjDZXpQkxwhEJZpkTrxmdntbHD43v6ViC3zZBwq7nzBFnuWWqsDDQYu7KaKojfoWhEd6HrWnv",
  "key30": "2Xm84Nb83vF3HDBjNBW2G56CQXzQUPiwkFqkqBcqtdwkLZYFAvoFq4RZcXLuHoQZ4HehFjhqEXwvAc2X7hNUQJRW",
  "key31": "4UYXwHBPZv8KBGMC2iKLLYqm1kRj64ujQugVu8aw3p5XqG95K2WF6QJkTEMvKwwc7RpM3kAx1rcgTkrfE6i6R1KR",
  "key32": "2Q3rXPrwsmQZCXBd6tHLmWQoFJ3DEKpy2QnDbd7iW9D2qWGwVQgZfcDNSdYRobtEqZx969L8TjpvXg95qfGuqncP",
  "key33": "3xgSbQJWUWTUrSmQx49eTKYKgNepADxuxpH5dSM4syEVg9Skp86zh4fJV3r6QZktdoe4RELY16SvY9uY1WG3uH7D",
  "key34": "38vm1FCZXRzJdvoyiVGQZBrYVS5CBijSpu8QdrUhTHvpYDtR5t5oNMbfNioZxA9CxcKGw9Xm4QMHLkeapDSVGLh9",
  "key35": "3d57dNSUuXjrGtKQYLJmhSWGePBXqTvu591NGiknpm3RRRnpLpo7aKXm2A4xKyAV4XWJRE7RvM1hWB8JiAb95jPn",
  "key36": "xWMtvXMH2bzUkmkn2ehqfuXPcFS3kNUEjdwatZU9kVFTzt8r7AwQnrbkz2XtRySrExDgcEctuPE1uByhbuhoWTN",
  "key37": "3vRN979QQYbeNsPTbELyYAuH8Hx2sM2uE2XVWo7m2NsLzXqCtVFPW1vmEFi4xd4NpFxZnUU4uZcFT41hyMY57Vjh",
  "key38": "3h7cmzJyf5wiUP1Qzqg6VJxoJwfY4WH5cPpShCyRBCEPwCA2SnNWLv9rSkhNN49zLNjBPA8ko8FcZ5yCgCBK6azW",
  "key39": "2j9ve5wLTZ7fnnQTHJVDAYbQovMMdUUNDypByJr6eviaNcj1781CTDuU4xJp6X3YfuuQz6U683byisR32X6La2aQ",
  "key40": "2b6MHSxb6spY4xE2tN2XAaVp7FMr83YpkFdwk12RDygz66fG3CSTg16pBAv5CRJDqdYztb3Yn4DKrPhERRD6mxa2",
  "key41": "N1dW28prqEfYpGSF4fiBEfgjMw5k7Nc2nra7y1EjTD34n6GJJrpv13qKC8oVh3DPe7mcCZBYomXFg5LLzrDU3W7",
  "key42": "5a68vJLD6H9DMtgS4L349gjqt847QkxihJYcVNWrrgDH5oBxefEAttq9Jyzof3xwvh5Y6thr2aa8Z9S5kjyu3BjV",
  "key43": "2nwystXpQBd8rcMU1Nb9afZYF6cSK2yhF4AjnmNnTmp8xeqwVs8PBEPofYi2mzhWhwUSTbChKLjpXFbPYwvPmntD",
  "key44": "3CZw4t3gZgvERnu4nrvihfLfUtvCWQmZVoqArbDDZfPqYuNub67oAYWmHFNqP7d5QwNE3JN1Tzpc9EbTKX1gjVFo",
  "key45": "5wXLKnEC4MhmZkVQVFMBJgR11pxXjdsUwMYzykNVLJFUAr12DGvRcrPUYEKq2d1DT8bxVejU6C7zFra61c53wmQN",
  "key46": "2ahjonPBwpXjTEsvX2UsfbZacT33558jwzbP5XM6YmVD1x9bSQLbd7zf6TcGevsBybMRUfyiCar4SmtRtRwFXjxg"
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
