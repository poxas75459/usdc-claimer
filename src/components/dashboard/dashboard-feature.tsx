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
    "4gfWR713d78RbAeMEjy8qapMKsxHxsgSThc9NfkaeoNwEts9eLAUo4RL6FPGwKTFBVfFM5dtcHGhfPx7hkF5YSUC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KPUoU5ALjkscniipZwmd2jPUbfQefNcyfUTbjSchQDXwDFyiFHZ317njWAV4YmLnc4W6gZggdzJcPc989jVtLsW",
  "key1": "3ZMSjyNKhUrrxvcqNSbPdCRHnQ7PLKcPxuULkWRkCntYBv7qEjgEx5c3HYFoSxcZ5LcByAuXhTbN5U3V1f2q2Jzc",
  "key2": "5MhndiKgtBrfmBNYw6RztdVEn3Efi35cDYj1FSpbN5AR1UssbKtDuFSgHBeQGzyJLM2CFes8DjXefKqo8JLybFiu",
  "key3": "46o1E44Xmhcwn4YUD4uitr15Lk71xuaQD413JgeNq5q4dbUGBhVxMJAHiaLBF4G76XxNT7AXTeL4eLeT7jyy927Y",
  "key4": "5mmxyTiZzG2HQkNSBQYaqLXcqjj1Mqr5y13FF6jC7FUeAFjpweM5PCJq5WGQdyk8ZJjUHpksu47NdjtkkkQReSMU",
  "key5": "4rA8HYNrz7Qyk5kND6QgfUsCAYXjxAskNQ94ddMEuAGHBsmPkoBChdkUmqyY1vnMf9Ur6bUX2V1BJ6FNhETfonhb",
  "key6": "66YBT7EYQdbkHpQ15Y8cv51cGwsx5Lz1kzwJ2CHC6kfA3y7QjEkrkr2kSKe8G2BDgsiYBgYGjEpbBXdrDvgq4mjL",
  "key7": "3MNP2r3nt9CFBLe1HXAv9NwJQWY95ynDAiX15P7VbBwtzCEVKec4ojBa4EnbJXQP1srpxWhaDFKiT5w3hbxcRaMB",
  "key8": "224LVGSPFTnfXuJytdEqBttPY5gWsQbrGiM1cSmsKRPpfLrdem47zn8K2TgKX5Trji6g3JJ3AhaZpd3fBwQfyznn",
  "key9": "2EWSmSpYEBJXo3kqHT7Qp6aRpamuR2Cw5CCYpmnact3EhAtPWWVLnsiiNqDZxvoEJ5Hi5uM93YbF8seHZNVRhBKu",
  "key10": "4SvT4LZ4yZC63xPRFz3fh9mqHAgyQ9x3nQ2XZ6yX3JU8iB4oGndKGeQrPah65w71y2drzGhXtwRC35Yt4r5FqK5f",
  "key11": "5RvmFjPfqBkkWDBQCTkgCQeKS7hARpDsPJFLKn9JUoqjfoJ2SNcRUGMAdFiYfPgdZ2Lyeqo6KUU3cWd1h6nmuZTj",
  "key12": "38kgqTf7zL2JGvnKBLs6VW8Eq9mUF2BtPnTEXzMGT1NwE3qqjfLYuB2v97hNdsJsPEySZNuZkpk96xV9PD9gXfWZ",
  "key13": "3bUzNLm8uHzsJbtNyCD1jiSES6yQZQGEAGZJa6uCej4pWkS5XapjQkvu6Fj81NpNUKkLS26zj4TZ6TsXKb66aVFS",
  "key14": "4PPGAwnPsTP5E1D76BooFwrzdMRh6UKkRqjFEQuKHZYdAuwwcHpaHcBgmbafanvsU9tPMvFi27ZHkUssupvukvfB",
  "key15": "45bRvypJ83Hn1XiGu1noHgcdZL6dvSgCGthrtUbRfDktfwb22ASvTNVtLYc3PDrScVdVxcpYpfm4DxYDCqQNTPBm",
  "key16": "PoettFHRtqSCaactbPjwZwcYFQ4a9ZNHuoeYmh67Mcr95TkomJ2GEEofih2Jfwa4iLLU88ZAepCGqLV592rp5QN",
  "key17": "hBPeG9X1cXYQq8g29vqdeCBLa6noyxevpfZTxoXn2JBAjmE1NH9Kcw8aKxGoRExnzzkyXt7LhLQDEQsNwyQGU2q",
  "key18": "2ciVEPB77fbUmYh9XK3ykCaDctSGQ9Mk4JLyjngT5mSiWroT32e2x4V5qwZ9VUHrfe6YLru8PVsQNABigLsuWAh6",
  "key19": "2AEoVLDR37pdXninMDUQ7vMFoHwrfTuLK5EzT6oAJbXPWoSi6Z5oxELW9DAFF9Juhe3dJGdrFoQxPewYkz8iwKjk",
  "key20": "4nGom6PaTHsx4XLJANZXbnmPpApA6fHX3sUEXku97bGGVrLnPQYB1hGBKbvkqYgBikXxp1vSCmWYLvVsfzCtN5o7",
  "key21": "5s9SUG2iaKFUZ57tE3M1dN6epV5t6kZ1F4rKUPj4nbgCti7u9vW5vTbWNYJbn8ScndWzn6zbeK3UGWiKtSZZnQUj",
  "key22": "5ukAT1vPrNyZpGJYKSrxQ3A5kukC5i27UW5RgXqaNCsPfq1vBDpR4sGQBbPEqA6rbs86U8yACQPECwfsd71KkJJP",
  "key23": "2igTMkWdUe4oWxWtkumgkM24F4dhx3u5y6fvW8JfTwoDXPw7cwL5U5SkUaEFgB1xTZ5ikX9sUfEcr8r1jqmbhNna",
  "key24": "5QkYzu7KBb79JSaLuiXq4rUMve9poxeijVjuoFfXvZWgn2Jtv5YguNHhrarwhS28TfqSyVks1yQMxvaWTDGiuP1s",
  "key25": "4fTs6FoBLjiJYK2awYzEXrAYAxMigZx2vFrU6e4H4fXtgYwGJ9iNnAw2fu8zq6NCxjmbxkLcRsJNFN2Gi2YxHGnk",
  "key26": "5umbUwakLNRq2pj18YNBUq2mq6nYdRkAwV5X5go3bSbWa3GFyFH8ZZrEcktEj5wbHfW2RDPpqL7ttjxjEMBYHytx",
  "key27": "51RitxUjucBSsn3SKWFzHeowM6udFkNrk2vPx36gFuVJ6udTP1nUFjUDc7fN1b7FL8sN2HoAqT74JGjwME1dsFhW",
  "key28": "4zKRUSsbRK7wLRbvSy9U7n8Vf4jjcvheJWx6geiTM9SHvHSFAtMVZ2vSrzAEy6X3zoL1faZctCdZasH9DtZNK9yt",
  "key29": "3sQPrMYsZ9LcELsphHayS5bCUbQPMHszTsNUTyffY8GZNXh79LyUeug7UJNj275oy5Yzi9rubM2y14eqj17xTQmu",
  "key30": "5vwtDyvaSAfUkFrWRNjGQmoTSrj2kYw5j1MGuzndCcKXTkbEp5T9bGvbeTwXDmLX3Fj8JxpTwF48CdczsNS7KNPd",
  "key31": "65JKSLJ6jsUPZoPookBKbY85fjAXLKaJDMTq9VDgxRoCgoCKJtNDfFRJh23LQo6DPsQTkKy6ofx1CVuNueEo2cdK",
  "key32": "Df9Ztz1TpduTCHecJjRhbovBgNdDnpsbuV918PwKgdxo3uyMtCXPv1vMotLBQGHJp5o52mDXCVWadi4xhEKKbXM",
  "key33": "4AF34TKVKfQFRuBMVcE9icNFqiWZoZov9heNtSyNJ5UMcGK9ER6c97M5Xn2bA2sgyRTstZGUoPbCm2quWvU64UeK",
  "key34": "5kMaghgjui5iypVLasYz8HEtq3oKMyf6Mtydp44sFdckadD3ijw7f4fWUXAsVP93CNyrFMqWoGSP8VFCraXZnxsv",
  "key35": "2rVR9AbkJbRKvsoKH42aGFGEtosUHdEganRv6cQrMG2wK65jXs4JwwDX168fRLb5Kv2BguTHwFDRdJ9Gzu2xw4FQ",
  "key36": "JrwiH45pNchLMJnisCh1TFzJgrDkXMvaAMFcYD99obs6cR6utSbtULYdLKCsAwszj9qqAVcz3ENDewyGNPm33eS",
  "key37": "p6MrDRYy6rHjhtxdvoSio3AohXftDW1p5rSogBwG8z41cSs2rLxnBysaWgaUXWm92fBdZNqwphDoufkfsDs8FGS",
  "key38": "3RxFCSJHaDTEeeaqiUbGNk97DeBGJgXCRwt2sQVrhqBYuP1YjDqienFXU4sCTBhoXwv6AkTjLyuzb98uYwMZrMTs",
  "key39": "51YM5c3jtYdEAFzhGoeAaJGNUcPGyiLFg3wVtNErTnHHMYayaSYR3ePrw6MEF2JEUvQxFzY4jPgyw4JhWdTjgT3K",
  "key40": "2keUpKpS1DKKzopXoUaJR9kpqietnysPoDWQE4ChME39JEggjAYD2LKr9vyELjDW6MqeNHnXmTdFYvPxzwDpMy46",
  "key41": "5ySWTd6AUW5QMrQFAK7rNkjgj2t6bLMdVevP3G9hAcFA9hFsEAWLq2QFKvGMU9muHKAbagyhXYu9BZEArTXLmrQr"
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
