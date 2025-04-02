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
    "4uUotLrPL5aMYJx43UHtqQTRbWo798dag5ThkBthtcGzadfJTqf4F1aKTjpPk7LqYDVzveoZMdRCbociWDfRTQci"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pmsRYKMo9cQbggSyVTeN7wM3KCrxF5pQAWYkLvjV5hLi4QZDp5hcUn3v1kLP55apVQapJj48XRwdZkhvbwMbmV3",
  "key1": "K56QsQeXwmqwvn8kZWLY2JuWL9D77q43G52B6P5wWY2Kg271fHX7F9JbvBoBncMnhvDai7MDXtNfS7HYqERmnN2",
  "key2": "32GQCSarRnbBcDpePq7Sh5Kmh5m4TayFTnuxonWCkTeZkHfmA41yyzesAFiot5SKrCFhYaxMCypkLMLUVf3DyzPP",
  "key3": "58HcJcypfPrSzpQTd5tQpBXXpkGZrRFMfpkn98uK8zkaFQ2dRVSBkUZt2wdqSDCqdcSpC1zBiKweowpnKkMNYyrR",
  "key4": "24taJ6SyDW7KEz7t4aq4eYQZLbZETuUDYjr7diBzBh7j5L58gJgiMcHVJiZugi3cqaFLsz4g1EwYtj5g8ZCsQjeG",
  "key5": "25XXUfjTcTf8mvakLkvBG5D3SgeiDb4uocu6k7zxijdxLAdBTBA3PqvwECXZeSpATsimR2uniZM9BB5BhdGKdyZB",
  "key6": "3nePuhAARQYws2r1mJ1bNDAJGMsKTefmHNVNGNmVXkbdg9K69YEcCDjnTSpqcgbxS5dnxjtjMptZU3fyuQjrkE1Z",
  "key7": "2A143bq6jyk4vbQiCBG1qh8ihzAXyj8jshrhkKFPUAh6FZp1qitcjEoUzJLrEQCippf16v28cuGrQPbSTfEFv7Aj",
  "key8": "vvtokrWVEpNyQYckBoJYgBAn7xUrQRsxYX2KCZ6VMJu7CTQE7iTJcaMsj5EA7Nwoi3RcxAWTsqqT93fbMDucG3Q",
  "key9": "2daLb412p13GqDMwqmFm7ea54UoRvkr8UyPr7p8KXxE4oHUZrsW3KQAVkFFumNPpCVj8gmC7CjP8S83g1PcmUUWm",
  "key10": "2GFcAZjNnb45KDHWWwh2RPvwk4whpoWK1R9GV2zy6fRkGp3fVy9jaN2vDzCeYS75esHerLzqQG1NPrcNWy9xnW6w",
  "key11": "3C68WVnxtkqf6DEGzaJGvUuPLPSTxF4EdLfPtDfNhK3XDs4UeaGiK7XVjsuyPeWrdUrgqxeXYryeeqEyTjoq9e5n",
  "key12": "2aQZ6w3L67GjuwJhoXkyAT6rNjqFVdFKr3bSeGMqoserd1uWKx4fnvFTNX6Zbydhu2nTmdkTUd3z4bXvjWbUuX9b",
  "key13": "5GmCR5Xwqxxw2gCKnW1xW2S415PxzzRQKf7odC5w7X5ytHP7qo3jXoT3WPUQR2frEGoyBeWsWVTffXTPYB2Y16w2",
  "key14": "4iUuRGNU1h4FLeotghRHQK4DBLgKK3hvEj6Nj855VGWpmx9gF8bTP1iW1PsxK6q99HFRfRo9zD434FJGjViX2wZo",
  "key15": "7Axo8ywngSbzqtDXPY8opFBqSs5JzMkoucvA997vKjyrWB2K2J9debQiEEWXVJ98GBQv4azHxW1aQAPbeBSu4ss",
  "key16": "2cr4VXTnXDhHe7aKExAWryCdtK7oWCzndqEPZG7uQXJo4QzwzpsNcUgHtU3ZBxnVsh2d2d9sCVzWwKJkTzZf3FsU",
  "key17": "994qK3KdRf1yHqa7xDJiT9fTDHNuBi8Q9bG72iqeg14VJhFX99TGUREKE4Y2xA2mbAikpsCT5WfzMZP8FNto5kT",
  "key18": "3jdzayZfYVTgtukeutfAJvBnTDfNv4AWn5RFrAKLefhGZBXUXd4n34gWdRd6Sbu3tWNYWULJixpZCq8ETbiSmHLk",
  "key19": "64f6qFKnhod7qipFWCJKC5wJ7DCbtnrKWV2mkrvq7cHqWqR7861avmtfUkMHFokxxrNdqSD6jsxBkuPHeYc8kgQ1",
  "key20": "2SnZXnguckk53BRsMuDT7FxijGsDS7SoEjm4Y8JtG7VRXHWDm7oY5RhBYntMN3rSB81r2AwtxPJmG1DQ7ggrVNV6",
  "key21": "3Jc3snea1py2hhFYJN1WseN22wmZoGMip3SLpiz7ehj7HL92Vd3LAYpY5VhrwhHWjs7dTeL8f8S4FZrDJ7kiS7Mk",
  "key22": "44wVptffZJAYCHcKVUa33jXPYmqK7J2wxmjuvL2kbvHoKAaC57ktGfGa7FyWBGQ8K1WEiVZ37PweLzCBY78cuNwr",
  "key23": "5Y6AnqTUSfy52Qr4b1QQCcZGjZT4C6wZuQ7yxCKXLrYK8hTSpyEH4ahzwDnTmmgttACWEnoLJSgQrQVWgQuN1aff",
  "key24": "59EbtqypXXwcdGZmazfYBNAyK9sMP1rozQyJ4AiTxEecv6U1ABjYghhSnTSBPFGtEaeL9iMnbPPBq6gaWJ15H2EK",
  "key25": "3JPb4MHFvSFr1DfbeoKJK5sj9XNQ93BjzxSVEZVBMomTzfRAt5RFuRdCwczJoZPn2Wabak5BGPeBxspMQjtiZs6D",
  "key26": "3pmhcwWLKYrKJwpTi87JfZwohaeyxKhSk3wtB8tckmXuZoAWKzueiXGkNo7AhRVdwF89TiP1ZmQwXAUmcvkDc4fG",
  "key27": "3bJHSFXYHD7eXNSmpcqDTj19khMGENJNscJM11wTTC9wrk1euKn3U4KaQhVtZyxh6tjcqNxZia3iFAXLXfgHUafs",
  "key28": "2JRr1mymerTbpViB8BwJhRnaGeWyhtDQqSzgzKYhpj3KUa8r4U2yK42rRunxGtj2xkhNEP39fDukoYG7baHYBMg4",
  "key29": "4trE7M9k14B7Q61zzUbberDARewGSCzQuicYrXrSk1odeLGSev1mrRzAhiMHaCMFmUMxcTi5z6AcXXinSQGosNze",
  "key30": "2rewdVgYN7iufYvNn83ZYBWo6cyn7sK89BqZJc4NzDKQvnFtAdqvAhsXZ6SXnEANLgXHRyUk21ne5pGkpnZoGGnx",
  "key31": "4hyg1J8PkjZitNAAG7CT1ZdVp7qBKxLnBnRhwYTBFKCqoxLrqE9Sf3gRLH7iTtWVcWkX1i9kmRBsHBSEQBrVRurR",
  "key32": "4HrbbhhvFAqp6Xo4upMabySvj38LTJzDNrBtQuLJBWbG5vNShKRdeHKMv6weKyeJBRXhEQV4PjrYt2adVMcExvFQ",
  "key33": "2X1mtedzAm6ey6fQ5uXrJFBLtz3YahCUY2BrTid3UD75TBANAgDxv2HaMGmNtSHv6b93QpoYtcy2tbb8Rt2yiLPU",
  "key34": "43seDMsNieSiq8ETWEfcimGBecSxf22FRnh5NTKJgomcJruxt9p6i863585gkzsWy1Tdt8dbvmQLiBMQYJnC1UqY",
  "key35": "4yS2JqzYSV84pm2dXY9NJ7b4j9Xk9bz1awGYpNFhQ3AoJ9FXjxQcY8sgrJqYn1eHDapwknmomMdpqZSPP74psYzy",
  "key36": "3tUyjGX7euKiWBUuDPwjyzAvUXYV9vQHEjyY3eCoFgvPtWczM4kqdF4vcz8FFamxPR296u4n2HwDnnsHMyWqDvKs",
  "key37": "5xGQMDoCYe1m8rofuf6BjoKJqtFhEtXvZmdT1pCzL89oCoKHxVvqWhM5dvHecFT73AmtynRdzELSNmpb6mcMEL89",
  "key38": "VtzRFUGxLi2K8pEcjiXQNoMNGhqMGqwFEn2KFkJGFhuT8mP9vaxN8pq4FW9MAV5Xu6sWXEd4LrZ64UoZmaoYbzq",
  "key39": "4wF3SBNj7zMrT9wHX87kM92VAsBqmRGktgqtym7RF43RFzLJcKXPMXk3D3tL3wHZHg3CvyRX4N7QGdBVQM8WMUe8",
  "key40": "2R4nZpp87dBqQYRoqSG5aEpXGkjrUZxp8aSTyrnTSdoDSkqB6pJSijwp5djMb4FhQo8VNjeeS6xnG5xg4u535SU7",
  "key41": "4jubygeJ4fJiBV8tqkiP5VskykyfEiLK8cq7VdaMBPD7UJDR5ze86hp994x4rUMGAGnMSZt5dvWXT4s4MTSdjY7T",
  "key42": "2ERbEnj6QvYbs5we6yYVAboUp5ND16MsAxdT652zyi5qUx1uoLwrajeakXySrQeCvzHAKqjKtAFEA3TxUw5wP956",
  "key43": "WJQYp7mu5XLTPH5YPB9Bs6aYkRT4fBi6UsPyrGNZovsTHji1J7ZQZffHH5xsirqP8MHx3YDGUv8FX4aYVomWCfo",
  "key44": "37GFV8MWmdCv32FHDrpJc3nuXJKic54bxy9aT7g6XQsX5J9hx6tQq89BR3BYfPfXTEadnFna3Ha7bCMjZdBTjqW7"
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
