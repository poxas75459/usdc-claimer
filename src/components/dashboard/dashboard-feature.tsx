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
    "52qr3F4LXdBD14XFXm3og6qPMvxiRaD8Gj11YC5UQhyHxVDHtywNkwnnHT1jWK8QwCsDKz7ai3vaYyaJtGJ6dEnB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4P2Epm4y1zEAqg5fLg9NCAsAUXSnQaYeMyB4fm2givMSCfLDmXcFPv24P59gcvJFtvh5MYXwSBf22kcm6rgyKWkd",
  "key1": "3EoZjcPpzn3V3MedMVaj4BY4mJfw1PtTMU5bNaDu864qJssmBt269sShqpWXnkt1hGPvDwYgjiY4Aw3YRth2kFif",
  "key2": "5gstMz8Y7VSbx4RzNDUuASPWEW7Yy8CsULeVALFu9FW2Vg45if3ccB353pJ1R5CdfcSV5Kk8SkwVi1wv9kx61bZV",
  "key3": "2C9eSxxKvS4xLKNMMRLYv5umxec3vS9kpiuej5xAMqcVL56EXn7QRZEDHsB9DVcqvsXdHkKr5mgcG6YJ2bVUrEFA",
  "key4": "64XyAcWCJsttQFxKRirodczdn3Ug9yZB5kFY6EqWnESxDukq2XZPyr4pcJPpQYY9wvGU26yDL984son6ehpbruiH",
  "key5": "4FUoUUmP9XasHmFWLpiNfzmqAABv3GnjbjPLGFGR46H6xna2vNjMTA6GaBxN8J2epFaUMrVCkAj3gV5RhjLNgpru",
  "key6": "4A3KdaZ4MKaeTK441S8Msr3TSSJwtpvd9RDoiTybcnX77SnhdcJQVERQvJ4PGC8BvazdFBRxGE7UuvsSE42qS27m",
  "key7": "U3nK23qTbvSZkp8QFp5DozwM7Ky3Cwyz4A9Y7mgoma9jdGgZMxa5WCyx5Wt3n1xoEQBKfwUCr3KRXaJbadu5Bwe",
  "key8": "474XLQhngMGMqJDbdYMGTYTqrWu5xqtByjDmiEriTXr28PuFwPbzwNNiHXmRGLEWhXLTP4FEc5KzmLWhum393vfv",
  "key9": "2L9BQBj4mcs67QX7ZLfY3rnG8s4DdW2EsLhrFqq2n5qDEFGtiC2ZGEueTp8zB94faqf8tPDkpzyRAxbj71HbucJA",
  "key10": "RWHN6U3zcMk9PiieFvBFie1PmyPE3Xk6DpyHHFnE4HUPBU3qKK4xWy1ATWXgNA2vp3tWTNoRXzsxLYrdD2BqsLT",
  "key11": "nY4jeB7mquvFXKXMUWgeMm4uzmbaHT4FQc92zHF8uo48eV3snW4Q9sWcY5rGH7c1ogtUzQMUHnSZVBxwePfmGZY",
  "key12": "2iMKamgX3chJ7eSUKeCLd4Lv4o7PguoQH6C4NFerzeWaHUzr6nJ9LbW22i8U1JSg2a8ZWQDWUhNi6dnuMqTLjcd4",
  "key13": "4WZbwAMtUt7fT6dmUCXQbu1wztAfYv9ZayWa2SyjguGzkPYbNDqscARRoujpNsUSprHB4foWA3vimH4983G6q24E",
  "key14": "5kZkwt7S1iTWHSsNN6wnBaRET1hffQDVAaUyZQzN3WTdPQALpPvFZDtRovoUmfhKiGuC7tYtSL2c5TG2Fe63cPoB",
  "key15": "x5QvoCvGxUxSdiuUqdn5XDgA1oxFwaJe5GJfFNMwdknvy3uFo5AWy5bTrK2ihWXrrdVK23KWPRPKrRW9QaLzhJv",
  "key16": "e9AnHLZcPnBYG3ktHJS2Q2b6228wcfGbwvsWDMuJnh1XcPHthKLhKo11Htm6w2McphH47rFEhoVxjtststsrVLE",
  "key17": "5ywar29hDQ44niyUipN5ZekK9TDMfuQgKvDADYfGFevC7GSqvv8vzSrkyMGE64q4FCD1hHsvQ15eScJ96mZSpHid",
  "key18": "5foQNfx9SWY3fuBpoqUF42hMK2FbGjAQe6EN7UYoaWLTyHMvaSHHKSAQP8WwrArXnHBjdq433rrdy9gkyVZppW1Y",
  "key19": "5PTU7tWFedG4NBmYSFkXDy3eh2CFWN9JAT4f3KnVhiAzyEJXu8GSa6S3nuSWoi9x1zN5vNVTVqYEJtW1tZTLCUVa",
  "key20": "3YorciTBYhd2vYyLmwFy5pd73Vu1WQ8Q56mJ9wZh5zbYXX7AyrQJo68oACWHpFcNvZu8CAugKid7zpsKyottd1PC",
  "key21": "2YZAGqy1rhzejwpP9UjFBkWwNs3Q6yB4ni1qa9i7XaVbyu2VKzRVYC8MNrqxRB1vEujyaY2LRji5zy6cd8GAGpgN",
  "key22": "5eZDSxM5ZNKjLKhsg3u4fPWemaphjyKg1ifzM11X8JfNxdpEZRJX1GsLVxGRKEY3bT98ZqqyMuEBBTrTCgSWgP61",
  "key23": "2w38oZZgSC5G8cASi8XKBANAsqfokYrqKmYNnVVfTLnmY75Q5ghi2YJKWVXNbHZ7q1gzaYFDkmedmaC28zvNmpav",
  "key24": "HUFZiyD8kza6wsZXZg2Ln2RSuq1rvWLSZJhfyUiQb17whgR9acUVNDtNhZ9ZszHSW5tamFvKV38hjhDwtKiVrkz",
  "key25": "37nPAhxuS7VrMkmLRWhYkj7Z9bDcVuiRCZYMrQmYGAc4QLnWT44EC8oBxqRxvuomU51nytaLEMkVkgg2kF3MDqUX",
  "key26": "KtMdVTNZkhPRzzroj98NhKJB3pJf2fUSCDvRUMFJEgS68mnKWbG3N81zJaEtvu5YRHXxrP9ebX7FbBe2DAbJmAS",
  "key27": "GjUnkEKDQBLU1QsbHtap8RmZPAdt4Jvwe7a2HHrCvmY1UmtqXjA9cJYtBNsyZxdYoQP1HfMShvQ45FxCayhZwTZ",
  "key28": "3FTtXbRE9ZqzpjLiPSgQFggBv5QCXR4MfDhKJHiMTVoDwanjkC8xvNMDVbL6erZVcstTSqQ4KMJ76GAqxovLBy25",
  "key29": "2WqjBnSanWgCWJWPMHiA6JtjhMK8fhNVidryamet67TbQTzjfm8hrmssgC1c7J46o6TYa8kfoBT6LDPJhwHvSqg9",
  "key30": "2aLauzZ2H1n2ZEgUmYpFzGooAzhYa24kTfxhsmgzmzZB6ERwTECwh37eRbsysDyxegS7H1M2dSVibGEZssCij4D5",
  "key31": "4MSxSRYrzuDbVWMVvnEhRE3e2LWNNBW6i92UpbbN3dzoH7SxaRes9NFdWUTrSyfWUUd49bdXJY12yrtk4ThiJo8G",
  "key32": "4Td6DfdAYJ1FXpHCsV3ceHx1XmM7BdX551zdHqP1j2JKVArKdvLvTCPagLB2yJCuMbWrWt7n9qLFPhmVeKaRKoqE",
  "key33": "5x4LEMNuGauhA9y5VRr7y57dLngyen8RYnK38qga6g4Hdkb7nB7e9ppyD3Rpf1mvRDjuo3UkRHaH8LdJoW8uPr38",
  "key34": "4p8eZLqHLvsj7zYFnq9n8XKS1BEpHqxkjVtzNzhW6aRBXqya5FV7Azj3X1afGZtinR77j5eT4jMvgZRuE2WP1nes",
  "key35": "5HYkn9jRW1WnKcYR6ryUHCDBQuswCtEsjUR8AdVTWFWwyoEWJoPpCjjLW9ACwLHkoFJop2qHByW86mHHyoXis1aN",
  "key36": "Ba7xnnJy5KEoZnsDrvBeZCU8RWfBoypdAYRRL9YfcbHNDauRzxBdYonY6YQBHmTAMNj9X7NLhqLdRuoTU4FKweR",
  "key37": "46BuDAo2VmMJx1rcegt9PQvxntxU1KhbduBQKu5fUTgFjMtNPkNnWgSj214zbhJ91bdy9BAor5tKsi7U3A59Nkcd",
  "key38": "gwrPYcq4iyJ8X67zmGbw6LZA5RAi9qtbPmTSJfWZ5nG8gfXPAcPNBWxMG9tM87ptJSUmco7Vd58r61pv5w5N5Ty",
  "key39": "432VUMXG98pFUzAkzNR64JMJZgRxtDadTG2raLfdcbJ6szy9y8SVZMAs8xpKzT78PywikKuKNaBioMmwEk39XFem",
  "key40": "Aoe46XVxfWicYn3Gwi4nrmy41Ayj315LSG7rk4y6QP3p1JN2RH5R794q9Ha67g7qrd9xb2Ns4LjU2BgrciicRS1",
  "key41": "496Hzd9BrZCRxQW85Kdbe4h3q5CiMoyZASHNvRpKgkBLzPQZKvjPTdgPwRnF9AE4VoiQH8sefY4uB4PPPRPPoJWm"
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
