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
    "3ZWoyL21crm7HMNkUpwupDmG2zTXvVTKwcRhHrFHX7HJb7m9dLfAb2tJ45TPHyJPC4W7fM88b3QyJiauzGja5Ed6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tvXRQkM5Fdsi8eLbqnuvkgKFEm3xaTZ4nLoBxCw4RqZWsNK2PvGofA578syp4NWBZoQRrJEgW8NSxYZWc3e96hG",
  "key1": "9xLtVy2LSrF34LkAXHMyoPRrScQJJ4sUJqZgZnXfpHYEpnsbyeZdUJwMwvpnGLVJReyvcSid4PYEb72AwVq7ugh",
  "key2": "4QyH5Sdc8Z3nSeUkAkyTQm5wPrZd7AehuQJADD8yRxpX8yD5E6CCcckyNBDucX1D34jijDr3VXEGiMcdKYjD2cJF",
  "key3": "4Em4YNSJ1i63EDV9BHnGBSfQSEHfxsckSeWJxLvp1b2S79FE52DtvyKXUPyeJM6UXcy6HpvxqQa2KNH7sA5UxJJk",
  "key4": "5Kgym3R3FCse2z7wibHRtk5XB9X5MGzvmHcecTBAH4gZwPDhUSJ9tsCovcetN1kSLr6xyj5m7NgP4HpYenBTQuxm",
  "key5": "455h8SSgNuMixaygtioZptXDv3h996BkiPfQzg96FYBGpLQRbRGbNF5t6huuBCCsPY6aPpeJoQCnoRmi3q3cCWFH",
  "key6": "3txTYiHkGMrNz1Lu3xALhsHmE58Y4cLmrNG5LPQRjoP5NHVGpDd3WSWEtLKaXqrZ51nXcoTzQZSMAFgUbNvi4BWG",
  "key7": "2Nr5CrNsiMzC1eoVzmHFvnps568DbSkQAZwFmzD6WFrL7N1Arttkjeb6fYGF2zHFXperTDndyUsJczR2ue2PmKrj",
  "key8": "BuwCmfjmuthi1BNjG47G7K1eh6PYeTeg7d1PahhPa1se3A8gQpcWkVETCWpQwXrS62VKjrnhRZhvC479276u77J",
  "key9": "5LTdcF3WvuQLwJZpLwdAejz48TKpoAvc8YfkBUyWwfczZMiCtn2CwgrPxrTuE4suYX63rMDbf33ecijNf2qQrSsn",
  "key10": "GTwRfWc3D83ac64h5nTRZqSeyzwMcmZWnrybHBcJwm1RvTeaKefEzSpUsxxGBA1bMqQ8FScSuTsfHLk83TDQFaC",
  "key11": "4VWGQ91rdRUPMonrN22Tyfj8euDegL7q7Ay2Kf7ua9E9uxduekXPS43fg6z5H7GMeMhgNCdBJ2vW7rjRYzt99CnS",
  "key12": "5EvyPbVaFj74JCa6z2BX7MM6DDBRBhS4jhb99Yq4wdRuQSyCvc5uGjjjjoLzYa2Gb3oj8d8mNZAF6Tnn78uFxMwT",
  "key13": "z4zvBD6WBpGHmryyoeZ7vPBEfFj5EPE3SxCqJcGEkFu83F7nE2VsP6hWbPYRwPgeLSdjzLxSLCJnjhQcrKogb4Z",
  "key14": "3qq4ntepTuGtZ4kVtSRYTNrLKVvSEsGrc1rSFbUVhBrsUYDNqDK1ozh3dGrgeR9PfkAE2NBrYymMBgwjMWcKZxXK",
  "key15": "2haCFfbnpnHx9Q7D6ZRn17sCQycQ7xq872bYUx5g9Bqa6P3rYLhUBGRat4dLCyvh4ceSrB2CYEafQ4yxXhdNKU77",
  "key16": "4tYAc2RfLbCdq2EbWFmLxQtBGBhLPSSiNBz41esDzVHyBVxxgR4beByKqXeqKgdkX2Dpmo4iHiHpRnzohh4TSZxC",
  "key17": "3uSgHMi2ge5dNU44AVesQbLoXqiKSTJ9PuLz2AAn6rCjwCb8HH8sQFoaPqZ21fDDiMMp5mVHe7YKpe4PSwTHyuKk",
  "key18": "ZXvahTmp2stRt2mkhe1LipcUTjMcd4cdy84G5uppe4tq76H67GjFyCUrqgi5N4cq2n4EhwkZZWNXjf9WuDw7AAH",
  "key19": "37qgAPDSLqSVq5wBPXeVCHgUD9RFVeSxRQz4h3PitXfWYxsp921BtDWcMDdcVswaS1ztcbqE7YucANqJSVSGbj9M",
  "key20": "2EnRAEVijsc2jj2HEatMzc4Qoaiewkn6cCFAaSQZpS3JUJinEzHfXZkjfKjsFKLqXJimfQnDdJwLx2Bpqfh1wK8N",
  "key21": "566StwEMptxqoFYQ7DmxwwiHYRF2LFDoGHSBKuhqd6pXbqK2qwHTzuA5dP6PbqckqhzX64nAGkfv7scFeYgaNqZy",
  "key22": "4QWqVuoxW8oWDRVfiTHnRVNeVvoihd6Rq1DWJHomRE71nGcD6uN6p4zb6p8pJmzAEL9VtgzMY9TyDyNEQHa6RgSA",
  "key23": "5Zqdc7otNCpAXMtEFjXiLer6hWVaiVNnXtu8gJUrsi6rBCPfk6UgoNYKWr3dcu9xurVp5PtXyvb6VWLJQ84ff46F",
  "key24": "5q9xAYT7Lo1uMZqB7hg5hs8iKzetjHva5Sh991bRzjTs4C8zqHo27JF5gK8sbK7QKuFaQ1AKpJAxqM5TbbqLniDk",
  "key25": "Z9x8cVhxBvCrgW336q7u9Dk15aSs8rhTKxzuxE2pqoBG9sNBrF2JWkJYkbCbfwKAmUUhD8FVDGWQ4xb8GmMfRtt",
  "key26": "4BSqfbAkawk4yDuWH5suvi1eLauXs3ELZzCHqwwRiTQWXWJQUMuD2SvF7dVjGN5TD3iGMcNg3QdWLhwUi9hh7ne",
  "key27": "4TUsSEoM8YiBzNKGMRuX7cvhc9JUrkYmkK5JFwychAUgXESWfZpJcXjka3dr1Qx3gD5hCZweNvEp3JA1N1PAZRH8",
  "key28": "HcsWvAxxQ4TcyyggfSQrmnNo1L73FSr7jKSduy5dA7Cny9vU6p2U5t5Uyewe3pKCTkXHvUNrJnaR36H7eyMiz77",
  "key29": "3aVYz1P7nKd6WtiJ6GU6jMj9SXgYXjZrT6AUPZtPSyThXHcg7bqz4XvXbEv1r7SWbLZD4mEdnCzEvHReC3pc4DCB",
  "key30": "3HJP4iXUAok3Hvf53G6nESntha7yMz5StnBtjVwyACt7mKJHVYGy5x2WMwNKZswNV9iw2NbqeYvK33ib6DbjDRAP",
  "key31": "4FtNfTsppPSCkwfBwuaR7qZW5GDGdx49CWZsZdtG3krvP7y9aERDaifRfeUUh9qxQXPhYTDzh75LbJhU8YMbWQvh",
  "key32": "3o5ZHpXE1Q7xXdqsRRgtAja38WsCDrN9GgjpeVTrCe2K1gN4HegSnixHrGawAifoCg11Li2zRvYs9PmnVLUD3qqN",
  "key33": "ayKiSJDZrA3ZPHxERzqg624LU3YqL16Zc38cALHYBVxEH6EXuiJF7sVmGFuvV3JZA1DnpbifRNAFkxMPUbP3Mpg",
  "key34": "5SoJKKB9yB6X79vYVwzuhTU5UhrqniiamBx7zU93zroT4wmx346sW6T6mrJNpX9ijU37DcCxYLYZPfm5E5NZS2nF",
  "key35": "3DVxtDnsHD9vfwxtNYkq9wFWCn62fatUitfxZwZa8RMCBT6v3WDkwrqhVfva5ZugzGV1vY687Caw3ajgnSCcG914",
  "key36": "5qv9LZxz2pgj87anBbceEcLG9NwzfudWJ2NyeFprfhXLpLNuL1EzPyxPiAfNNRwU3xCnHVfjtQxmYyksu2S2WnWw",
  "key37": "VyeF8YQypry4SrvoexCAZaaB5nZG13eToNcjUJjJLNUscQ5sD3TqPJAjrY2ZeCJ1spzd4QEJgaTS1L9TFLmzPRY",
  "key38": "46J3uDHd8ZAgEB8cuQzuhihErYshvU9j13neGbBJsCVxU7JwNeCq2XDd4JKX9xzuUYY4eTk1qgGuYW96ytcwbi6Z",
  "key39": "vzi83RMTRBZwuRrXSLEM3VGcLpGbwMRsgtZGfYEiyb5KfvJAjaRJNuuadiVNgi3STQpAJAvcf7FqnxSSLncFrXn",
  "key40": "27MdtpVXYHd7Yjv9MQtU98czsyMMBWeKJf6p2WqmPGQDammRPLCncFW8aMjFHrHG7PW9eZz2fr8MiRoBdZvXVnKK",
  "key41": "5D1BiKP2bhzDokGfxcQC8mtSj9GBmFDW7JpmkHTquotBs37HAC2piTKY2CeQxeBtGxmbAoVx3ADWWaww8qztM9m8",
  "key42": "3ZgfdLjhXTtEWGCqao11XEU7w5GyDc62v2S2dDtone1m1i9UTzEVHRfoMyZDkPC527eonuUXwHH62R9WfCGzfSBr",
  "key43": "5CzyZJkFfAonsoPNcLGH95M2UmpAfmcxsGowLZ61cofxW45bxtpzfcmDMHBt1tof4tH4YzPCqLfK4rzpYYn9aQ9e",
  "key44": "5FDLpm4oQ8Y1RB2LS4uQBgGRMHsoxhTxKoZfo9QwHTPwr3KawURUzZ1Lx8oCrHn3v6Krb4YL1jHAnGFiASugWL3X",
  "key45": "JofqeEwcyTjoSstmbhu13rUL3kNvwLRHNRTF1Z4WbmkVKuVBeqV1gWdWFYLKYUCuozc2kJKnoccQS5HSAhnzPUW",
  "key46": "44q6aVJYMrY82dexhg6G5PpgNkYBcLPHYhXXz21ZmX83SZWe2YVC7MNkmDsUD1DvLMgNVqxmUapGNkgwcbV7Ugg3"
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
