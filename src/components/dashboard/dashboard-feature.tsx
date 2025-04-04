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
    "4S4sHxWNrRpKRZktqwuvP1yvNbZic1u5hCfz8auGx7gvgRvKqk3CP2dm38gwF2qtthbAqmWJKrpDbPweb1hbjSst"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TPfTGdxeBr1ckN4cETwf89TUXh6Kxi6WWNwmYwtG79Kiob4hKFUQYG2okUCZBfD8pYQgFN4a1XirNAhCSy93VgJ",
  "key1": "FahG7AayhJAq84Nbu8FAVwHYQUNQyUFwT9xc8XBNAKgk9XwCx7yJmKTzXcHCjMSimeLAQc1m8GDFoBa1CgDUeqf",
  "key2": "4z6YztWeTPPm33hf5yGMmUceroymUXm1YrcizfqktGKkrf1JFwX5LpLADwQm1xTgU7u3diF8aHLwWeh6GUacP4QN",
  "key3": "5mP6kKiG3eAjEVTCFRGaEGzJfEYk93xWDtTYcvXatSA2QwauGH4rgv7FtcdfeN7gYF8nTHT6ZeFqLLyHFGcZRh5A",
  "key4": "4NpZzVhwPcEyCZfazWe2phdFchQDNYsaUNhXWt6Xpet3XPXs21b1zwxtZ5Jbki1w4VdgfqR2NE2yhNTKfReQm1dn",
  "key5": "5Q7KmP9kJTm9romzzbQZznx37fG9xjdREWCgpomW1vAygshN8VxfSgkwQAJqtgEg3fqRekCYM7roxUJPu5z3aYhs",
  "key6": "27Ph1dj8xddEypRGtHvXPzy7qoam3NDFrcJcnd6SzoWQsT86PE5dJMPnGf8hVYw2dWa6NME7VUvE2rLS2fB4tf5g",
  "key7": "5Nq6AzD3QYyddG5g7HaGY1y1GMydWvNuNSh3QRZnFGfXoVKgrUi83xK6Yn9bRNs9WUiqRrM448omVUzP4rA1d1X2",
  "key8": "4w5SPmM2oUXWVQyDZdi7xSXKhW8GRuvGrU8qkSNorhsQSMn5eyA52a5wuQt4h6wAGB5a5hJpYZ8RvaLtcRSj8Jpc",
  "key9": "4KRoLFeTxQz8v5zHgSyVKqvRUCsJTyEaVVeVShAanRpFJiLcs7zKNhPkFVp92CiLuBZxN51ic78SVSzxHqACfy2t",
  "key10": "235rrvPyWMA377G6gpudaTNVZZwQzBtJ32MxGVdj85q6BEFHU11CAeWzeQ3YyK4eif1wZ7pkt9aK8SV1W2Y5JXb7",
  "key11": "5QS6igJMAXnWQwu4sKZ4bwRX1T2kDasrbFEaFy8kqxWkbhRUAvp17si5iekFMbpY9xWJpfQChcQKAy1e2eDZW5FV",
  "key12": "56GfGhfEbnDznDGC1UuN9gom5NLxLNNjBw9yfPA1r78PoiS2W7QNuavS3MoQRrtRV7MopfhttmxVrNME7thqLGs5",
  "key13": "o99DbrGZykqoXTw8Cre2pqVU3LjHne9aAJEi7Jy3BzG4FC3mM7CeD4u2oK19UtcoMZBUSscNY9wBzk2wK1MzztY",
  "key14": "3qriiPCgfumATSdiFQqztXKpG5nt6ZXffxVisvjohQJCcrke6pYVwFU8sLp8RTT5CYknFvmCaif857BUMZeGEFnN",
  "key15": "3sB4poP8mB65LEAHfhfn9xsBnDzseYa6yHtk6q8SXiy2HERAieiN34rDTjTEaz7YGEDwg4EeQxanEFKUcFBtykVP",
  "key16": "btUPocvZVykFWbYLWgA1ZK1athevpMYnd4Dh7rVFCqcjs5Mxso57TXBsfeZeY7Qh6svPNswjrawAGckVSSivdK7",
  "key17": "4riERYTRkum3VZjFZkpe3GmoyJYRvcRe4QLJYYMdMnjFwcjACn4ARxaced33ZZBLnrBvHvwzn6k45j5ZaMP9bTDj",
  "key18": "2es7GXaHh2EgiftURWFYT9toAQyEzR9CSk4XTAkCs1t6scWHW33F6Cywuzh1nuCVHW1kYkgdqJN6VBrdAuHwkVUv",
  "key19": "5EN42kwmCvL2XTons9wnMy62SwKCgGj28T9nkbUadwngWGBYYyVX4o3FDPH11Xj55DvRjvUfzWaqRfPLrzkNNJ35",
  "key20": "35q8SYCQ7qBXaiBip37oTWURPYXC79hc6R83FQ98hsB9tQFKBrG4Hcxh7cbEfhYY1mqsrkNvjSLoXtx4YrPuiQ18",
  "key21": "4cxc1KJJEYF2Fi1gKmqgfPqq6Cugh4iEy7t3ed8vmPUP3DnTYGfLjVbQbNbxzo8MhsWu9g9K8z2zYLRKuopGe7QW",
  "key22": "59fsu7qFGh1Udd9zZuga7ncbrDR7KNEoo489z6EHnqPhWFw6e6RnQmtzzmZp6ueBmMojUWLzVi4HP5J7D7NZWKBK",
  "key23": "51D856sPqzY663rq3p4m9SGGuVdeJArFbGXLiSVuzA4gLEVvwNhAwPEWMCaLEdttnRaJ3mGUXV9Z2EUutVhZV3qp",
  "key24": "3fF5s3GKp52x9Fv6hojQYX4XUx8wb4RhQ6kn61a56TuFKn5LfbewtkEvaMHKqiimRM35TcYkDkxh8cohNqCVQyRy",
  "key25": "36MwGsSQs3tf3ymokaTXxUnmuXADieQqyQ8cHgdBA932RZhbrPKa1PrWpmHUPoPJN5fAL2AFjeBsc4QPT52ndvn7",
  "key26": "4JTLT8in11fFwqL6Ankp1PU95m32Qpjhjq6kxe8DMGkUmkJPob9GzHiLZ4v7CpxXx8ECA18jhiavEwDLLjrjNDd",
  "key27": "36pMbGTYtZrVz8VpVCch9CRFL4LsuxdZEKvxnoePFQd4CBBHWFgUecPzV5xU8eXp5Rcfy4J7H7UY4dyFyD9JoESe",
  "key28": "647XagMEnrsak7cpBLi5LdGeW3aeJ4irxQG3fmbzeNdtyZWJbBfhMYeK4Ty1FCDmeVS2u1yotpF85J1XztkCLKjL",
  "key29": "5Rwbu8JcTWnMbPbhergVdH5mwxRG38AMPYPxQo3MAsqBRJQwctHxZX3a3Un1hUiJBPnQXKMq6zpBKM9GjDAE4cvk",
  "key30": "5T1kpHp2jyq26CwBasJqG8auVrro2nigzwZZMBXmBbH4uE5FhohSUrvgnA72Ut31P73Xa8P9bMXmdtPdvRiKAFvX",
  "key31": "4Ji8BNDPeU448Mc9N87Yf47YQ5Sszqj482pCUGWk2QaTewwm8zM8wAgdkrkbt43V3htt88CsihUJ19ZqytY4UrGS",
  "key32": "3uUnvPEBNkewoYEE7QUKirtagERR8HCYoAJ13x7vDRqfoRZPhTpnpmjVbc9ndeUCWYGqEyqyNeMrXDPtQyR6YkWJ",
  "key33": "5RTka3wMN9A4Y96YWu4U9Wyf9QwRgRxpbUWnDGu8qMUvnEAH68jg5rGdQMTZfxMbZduxVSCyRsvfaLs5XJmZkDMf",
  "key34": "5FPPtfqexWHFasthAasUjTzdod1FufVC863uC4GgYK5aW4pp7THBg2fmjCVQ8E6f651TxzfxATcCaC43ewqM5W6x",
  "key35": "2kQwrPwCaUP6hyTGcuXhfR8hfaDqL7bbMxL41yp3ZiMrUdbSgtYFjUddcxQqmsdDc3ChVg5T5XmeiMp1aAnKR2Ai",
  "key36": "2tacJTdtYU9dsjaJuFT1b8Au5NfD7RxxGLr2aydXr8jiBNjaMRwPLE9m1qdYHAvjjmQBcDbeaKgFGHqd1zYpL1Eb",
  "key37": "ENiokzaCcR1bfC25jpLLNde8V1VXBVBkZrXA4DHwxXruL6iHfQrp6Ao19FhKbPRpi1JSec1ymjXWj2XW9iBzPpp"
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
