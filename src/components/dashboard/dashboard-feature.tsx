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
    "2Rj5Gj6vs55PjVRRPCUBPo4hpuKx29iitsFumLEejMj1PXv5ZKuPHpWyWtNKvherScoeYNMxtaJizRzbDqC4AgYy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2B32TN1AbDUuzN8sSivCFgbw387xDtJmDBHtsZK7KLDG5hn2THPsXCKGddtmQfKXJTsTH76fVDsznLzq7L92JHR6",
  "key1": "BmNpTfzRdPgTi79Xb1Rt2m25JSkLB2qLm2q7XmKxqJ9rzdQ5HSg5RA83KHo4SjqmFhFYoFmg4Sz6VYTPijdoyg5",
  "key2": "4T94nfEe3qrwiFYoRjTLazqaDn8GUbkqSSq2D1fFmJpkDPeFAFpGZ7wh61mEx1gi5GY8aBGATPGk6uMbDdDfzCdN",
  "key3": "3cBkzDJFmPaNEPemh9VVsHf1RGi2URdPMEqVS3z6mzfXLwkDS3sEza7LKZ2pbLGBPzU8QpYwueypM2pseAqMNKBw",
  "key4": "3AEbUWQwtzvcd7GeKnGrcnRVYGs3hALWXFgV8BjPP5cxdJ9wuKCFBdaST5Lm1ZmwbhfvQ2SnPTVNgStjKvJbz5yr",
  "key5": "4VbGtqTbZLtvxfy9qpgsRqj4gc4awLyCWKUXiRePYnSuxb6i7xCRDcyhEyd6WqhxG7W6wBzAJkQJi4N7b2EmK8Vk",
  "key6": "21b48fDcJG5qHGZMhEvpxsg4NY2ZmseVLGPFGpqxxm1k2ieQuRsFQurWB1F6rsyC3RSaAXdfj9CDh1Z3eThPR9T4",
  "key7": "2ViRUajP7zq43idmfUY2FZU14qXCTqaB6F4ADLiRxMNomncaKUJXR7Bxgq2oCvz9FJKkiLjNZN3Nf1G51QQnMBmE",
  "key8": "5YNzDuKxB2xQFV2ewZWstbygLWyQA8gEbpbNiKCHXsb4PLnm6Cts4ZNMGHBemaefcbp41fQLPDuuQjuwnD5aJCwU",
  "key9": "u4ZmSY5nuR5vCu9pKVXaW11fb5ZBUZqZLghuJbBrGCoPi8fRt3aY7ksSDzPV7wSKm6BVjEUCTjGfbbnUrcd6vAy",
  "key10": "3se2X4TL8YKQn9mBVFARCMLpbuTj88tgc2fFoqHP2EMjErrsXDMeW5QN2NqpGmYCmZ3wy8dKK6Wg1xciASPSpsd9",
  "key11": "4zjc3fWyD5YMRy8LcAhssNSj952J1ceeyBELgGHmTQn9vPCVuU728MAVCmsR7KJ3hddmNB1qrmMZPdhNG2Fes6am",
  "key12": "4EgkM5MPU7aHNh8vFo5szpNvaRaBHDJSQswMPf264BmCTTMFiGf8rrXRKFK42rnNB9d8UBtmQma4AmXjFxiwsvKx",
  "key13": "5GbqXeo4vBS9ACYQrqHWFGCDNTTtqVadmJ8UASjbLCnDqsz8ZpkbmFCgna5TkSQ33vwgBjPHapttTngkeyJkbtM1",
  "key14": "5sHpXxNKZmeHqoJ2ctRg7kBG3uVdJYDUSV1ugduvY8vAb2x3wMxzhD681QLxBJz39PG41DXYYqjUDLQ57M85bTax",
  "key15": "2CRD3F1vujpkzyBnKvHcaJ8DVj1KrVt6Zuz6mmXXQqHAdkqS5Uu6ACrx1Higj8YfzTkBLrFXK7SevCvvfiBPP83t",
  "key16": "5iGUawZmjFDwcZm7LdTJ6WuRqD85rCCrLYuS2pEoVrudRGkfn5FqRXMPzR5RK8dE8tUp1Sq2AQqfyBgcPnAo2tDt",
  "key17": "cfoMr4Hwz9xeoEDjBL5pbA8TxozCRWwWvnmrJNEoYUvhRS97Qb7sqm1HcNsmDd7Wvx2eioxE3dfUhCb5pyDtxqY",
  "key18": "8GJuavKP5tuKHpt31Jas1zYhQ98hzkV4VEXXNd5PmrbJm5xp3VckRLokiT3czFZTGj2RvBbkmf2dGjygaVuDRSJ",
  "key19": "4PT5Vou2Q1LLjdPNBuaBqDkMz6QvbPVFQQpJ2QfxvY8f2c2CoSYs9tjeFppaJwXA7eTSZmLe5Dfq1mpYuUgussRU",
  "key20": "hexX8K76BeMYWerdGWQheVLACnXpB9z3fPNtypaHLeQwepTtuALKMLC9jzms7Ey2xrM2tRkMawekbALbAgaVdst",
  "key21": "376fgqYgsjXfR3V9vPLtKsirtWev7KjeP3EnZK1HeFfCiK4YuPodPFSwwGLxRmVfyavkyMU9nJyJDXgZxDJWmLjv",
  "key22": "61Zs4dj4KqzTu8hJ6iroFc25KBYqoDiaaf1FRZo8q4FEuANQFeWZRAsS2UKPAtAvUe7wZbUbGTzpshTEgTfBxJbA",
  "key23": "2qrBgj8GVKfimrtwteePRVfH9iRXkKocLacYLuefBxW7aPz3B3RRwgeJ7sRdRKM44ToGtM7BuJcYr1QRH6hKZsfq",
  "key24": "4ZZLTbAtXRvRMG9nZK9MTc5T2ipKDmWzpnz1ejBRrqzBW7Lc5wGaA6S8MEL2JcsejUEmPc9qswU1u5xvU9e7gCjN",
  "key25": "3McfnE2i3dfAeWZcGm4Db7FM94PVhHFsNbiLqpvzRvFU2csaLmwP11eDBT2FtbpHRwDWfBdXVHP1Jxch9Yijp8Fj",
  "key26": "dScLTTXU3Fn1U9YRY73NUnE61UrJNcKV51nt8z7uTQC9sng6U7ZdJMyWYtZ3BhFMFBfV3SJtHbhPPDXMFtEksuG",
  "key27": "52XeiUdrY3WynFB2vKodKovpxVKnn1EVE6gJj1VpDBDgSh6s4YB5zhVeDSTb3DVSzMifcH2WywfV31mH4jxboHHN",
  "key28": "3evp7jjZxrNWzG14yCwrGRCmbL6FiMBCRSVmdei2iX3JYsuzEuF66Lr93S2LMPp85Qo6rsij1rkDB9himSLNVg6X",
  "key29": "2ubX2noyWaMMeapJSAN2ifwR2E92AK14ooei6fteSpWeUfgrUJ3KFxc2JGeY3vM5GUCqmA9di6R9YXGZDnjMHHBg",
  "key30": "44zaQ3SS1sXCeBYme3eRd2TA7YKnSnBzLY4ib78C6fS6i9NVQsERcNYxY6p5NpeAK8Ga6GoTAW1XUNC5EQHik6WW",
  "key31": "5sbCB9o7s745XSSGmR86bB1wiVwpjPvQxFuwwAv9JvzDAL8VUWYpQ3f3xjwmMitss7U4KpaDvL77m9jagksX9hWr",
  "key32": "4MqfzEKWCbUYP1BmY8nNjoPrx18cHZsihMWos9vMxs3DZWAcuNwzdRd4EhXuox8KmgGnoWZqJivjw3Gk4wJffS97",
  "key33": "627jq6wD9GxvGMApD4P1EahGRpUFvuvknvjjyZVvNUFVgjQVejmyy1We9X3pKczJgM2oiFxENewLMQVgvto2KqCY",
  "key34": "3aP82NntiBPiQbLCX3mELP16afwoFE6hxmxBaPcrG63qq7LNHYyUR9Bxc9GsgjyAYBQ6AgoBDpWvwfJSg9reBSZQ",
  "key35": "4ffnPDZMNzUQMx5iunDWeJeswkefXFHs9pYTVzTxz3FnihYPEPcgBg1zKJhnvestpJrMAwAd5w35ZUQGQpfTjHqm",
  "key36": "3u1yc6JepBuiLTDuPZqzBHRMH8sWdL1DAZDy5zfnzRSgvn84xTn1W9YGVL3xp7kVumP4rFL4AHMUZzxdsoXPzxZF",
  "key37": "61WSdD6LwSSLXvmooi93HnqUzk3Mv2E2ps9pTUH3iHhMgJqWR7CszZsbXLfcv8NQigfm5Zcm5bpmwoDzosgsTNZZ",
  "key38": "3gHkpEARHPTEmhMJjVePnQMsztPArubpN2S2BfbSHjJcSbk77xS6e31VWAv8p1crVStmjS7dcqeARKhDPXk1MJ9X",
  "key39": "2hbCiSfbD2xH8byvqrcLzsFuB4UsneAzFpfC75dBwmoZcVdxL1fFbikBeSzf5XgUnkNqTn3Wg1TTLCY1aC7YFc6v",
  "key40": "2A1icPs6DEw1oBxLzXjac6o8mB419bUwuenmcPANBqRnLuH9xx1F52VuTgttQfYKWyyXKqa3NR1mYdeh53qozjGU",
  "key41": "3tfB52SymLR9zKX9ieW4X4EwZ296xmoX97sdySCSj1nC7rYv6g8cdRT42KpQEkQDYMu7fqSuVyWyPnS6wyUudCfm",
  "key42": "dsPx26tbRUqP3qtB94NQakGMtvtDM7SDNzE9drEZwahKg8kPVq6KEMUWqiaQ3B9H7xf65UZFhtxjbx3jobmiu6B",
  "key43": "4uAesNusWonmUWtHgEbKj2Mke5e2NZiiWDGP1WCdrRBaXMRNdpCw2W17pprA5HUgZH84dDXco9e2GcB4RdQbtZvk"
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
