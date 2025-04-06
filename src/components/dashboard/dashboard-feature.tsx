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
    "5gLnT7jjvzoagY8HjLNHSQJPTKHmDasjPPuTy9dWu1EVedUQ8mMbQzTstwN4wLbdSyeTJXMcy8DU7v9bHHemw8V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5t8pyncpmgywPNHvFBEJvuibSTFWhNZtM9mArBvnFq84hUZ8TgkfgJYeKdNQaWcc9bd8zAnQkujM9dxmHZw6BRks",
  "key1": "4nckJAbUurotPVfT36j1v4GDAvKAWtjEKXMxxQ3739jFRonQNLMLCEA44Noq86mAtqtmbumv2bV21MDHywtBLPen",
  "key2": "4xzeb3VykA8542JxGNo6eFcrC4nveKM5sxBr2os5z7cSaTumsmZe2kaNZbhHyiNc6z88WiFFspDnh82MXie9xLyW",
  "key3": "4SfP57uWHUFoPoMVkprvJH9JRxSNU7RRxF6qjQ5cRC9Hqtgy6PuSvmGVT4Ut4YrxySSgY1b3Btw9wCzdhpahsURV",
  "key4": "5a9nzayGAFpyXiAjqs3t5nUNtqfRiv6X43npYpTM37VDSizCg3wp2r4sEKvA9Pz1XhbKnbBqGWC8gw3LJ3FLoWB7",
  "key5": "24JgW4PSCQfaVw34aUvXHnSpq4Nq94SdWf2rJ1SQbowtZHcNHsyW5byFvqsXzioTEmJSCG6VaUib9noDYFk3yGKJ",
  "key6": "3V6PiHHNGDoPdynxW32xGJ3xYu96HbtmA81XCXrpvZQvAYEnwt5ngKRqr7mfFpRru3yBpi9WzS6fg6T67yZBkvyu",
  "key7": "gkg4N4UJ7yq5WMQfjkjfvDdYFx78fwXEHQbhM81djx55FjZnwTR2qbpEwUjx6mwExLNmF4VEMJagntkxCoVDDia",
  "key8": "2gVAjVs1SwAmwq2LLSjFVL3sWvNKokSdJaAa2ZXLn5b86TE1tDLWDedaHBPvQBKPwH88QCDpaijoWsPAAFCWa8v8",
  "key9": "3DxvH4kHVSARiEv1qqgA57xm7Gqsr9UaLrGS2XSxDhc4LErVFX7ySyu8VnpJX8mq9djpzr1PCwtyAM7xhyPWVfy1",
  "key10": "3N6j13cs2xNbeTA4qxk7mvuTcqJYoPAX5sq9DMHjb68a9RuhFqa7F4c47tvQvPvPAC4AkS37SiQ4Bi3CR2xho8BR",
  "key11": "66b2ywiDS8M1uJZ9X8hvT2rYjVNCZ3DEe6NdjTRA9gFvuud1NTSC6pRzqQWm3oA2SBr9DTgpvBgJ514WTYEYDUKW",
  "key12": "5sfHaEA5P4T2Qt4uv7oUKtCwMG6jUbf6XMbxbmFvFjZLFyY6tmj2C3T81Hv4on6at7Rt6JVGosdN8r2aQfihA8VE",
  "key13": "4hrvD3uAEWYWRW12jTENZ1xXGhnEtpot7oZJYfzyGaa9TpESP3jcw4e5Tx8ruPTm4H52C2TXYc9c2TJuh27BLPoD",
  "key14": "42FG5vvGTas7VX3CheEPUhWujP8CCR1KjqNnzHruTcTaA4hxDdPTTSf6DMAUPy53DPB8J1TCqbewgPQBtJnApCJK",
  "key15": "5JmNiyUdqin1wCEUJcMzcw74fNZX56SFhcWEcu3686Jr3XxMGxV4nAvmeKsBCCFvxQDWhVLgseyjUDFAzpxXi11M",
  "key16": "4cobUCrteenDpZSWCsGZFMNgueQGZEBFQyvzELP8SQn9WfmHQZ1b9N9Fa5TXENwJgjqCDCrByUuLJ1jqvsttxu2R",
  "key17": "2w4PN3hBn6oy92e4VtaBbBf7zbuXCzMkbyH7fjjbCzhMuUDFvYZUrLfQdFNheNT3HeJYQUghL6nvMPHJtexRtXLL",
  "key18": "4oajUYvRtPXY2yymgsqz6bctsjnbZV7peRGeNxnDFdbxH5XZd74HVJxUi43ymQPvDzQngeVYMp7kKR6gGscYeD72",
  "key19": "2BkWJXCAy92soeS1ffPKUjnXJXmJaMfKuWcB1sgidhaqnUrNDsJ5WF71AxpCT6FT1cYrj27TkwyxcqTvgZrAsQS7",
  "key20": "u4NWtB3HEV9PXbbVa2h3nr41J1Vg9FgkLXgY6R796Q53BGbYQxZWGNQqEc1AWW3n8Ty627vsb7PRFTyVh3dNZR2",
  "key21": "3omUrxsAJusoXn7vEYDX7cyZTVydh6xczaLct23bGDVrNTNtpTdU1qkz5DkSPLWSFFiT5hJ43vk7gFPqj9QJfzH2",
  "key22": "27okUb8YKUajnJGypxK6218yLkbX431WvqHyEyPnSS2yY6UdTJKvhP19rzagjLhmvVCeJr3LKpHcd5PeoJueNFZi",
  "key23": "2xsxzFEmkrD6K9SwL1VvW51ePJ8s9xLcPVabhvQkSpSGCssJCc9GiNXYWH82DDdMJhU6XDFHBh68QWQ3y1epDNxn",
  "key24": "39vFhzNtPEqjMi3NgBeFva6xxuXkcgKp29Jm6bpLiaBABthWaobg8qeRM7ETgToEsoSCAduyYQNHtuusQhsXA272",
  "key25": "5shAxmq1EWpBwH2TXLmoZJxBr4VtacS17zxupQHhbHqSarX3kJFoYC3xFjTwyYg5Xv6wzRCCNbwmjehtpTwzwQDw",
  "key26": "41unN6WxVuKFW3qXW2dGjYNvLhgwwrSypzXgzyqRhr9qF7c7FqAiPxMSNz1TkcwDHyi3AWqK1caqWEbZBEEVaV79",
  "key27": "GSsGhSTdKDhUZZX1292tVNHyH4kDV7otLxin475fbTJnMZZaCHk1KFU2RRWvq6JmPNRQz9Gj2sGje8TmSEb3w9z",
  "key28": "3EDrbTemh5fvm4Mx2xBJeUeMxe2exWknzzPt5pVSnHJMNP4JvBzcB1gAM2ckL73LzN3QaN7jkNJJ35VcFoH8QAtn",
  "key29": "2pXe8YC65LprEtWhS8M3SAqNRuzDUiWCbLev7euXQ6xtNxB49ntFKwQ41K279PjTo4ww3DGnv77xu6pDqVr1A7yA",
  "key30": "5myUbnD8xwfaEeL5XBXkB6FtpZRMBorfuwvHHoekAdJA18Ur9qb7zwjDh1AtCwskT1BT9teLhaKLHsXPruvrUW5C",
  "key31": "2UE7RxWMCgVauPNQZyjqSvZ8UfakH8rjiDV8uFgmmVWpUg49XmGnZNGMfDFkEh12L28V3m5XJvYenxzWpajednAE",
  "key32": "4DLu34xv6FbQcVS7o7c9wQSVrpmxdcu5i4Ca5G13xhuDy54a3xg27MkEofDALqFoYypCGyVQBkfV21tHoqexPfPG",
  "key33": "4cVmhsLqwy42rhwm3uKAuRbdAqaQ5kHyQC6zgk9Bj8SyayQU4aG5JUQ96hLoVr9Dh9KzmCaaG81FabYAtzhQZcbn",
  "key34": "3vWaPN2aZ91fT3TrFXbxu9FAYSjfU1yfNGqKCaeT123H13fPhBU2ZHZ8uuqUj9H83iHvgYkz2KjJCwWhZbPQa2T3",
  "key35": "31k2ycMeBtSBJ3GohoKHQsJuzKEKkr9vg8hy6Ez8yoJWq2v72b5k27tYAUufZF75NAhMx4Qru5hm7vhpq6DBinvG",
  "key36": "3AVGreQ26XgK1qGwGUvxi8EAA1c93S4KGDxm9k3J937mbb1P5NFVKmQoyGW4M1gTTPJVykaJN1Ewhder9v68kuts",
  "key37": "3BTJTHwEHjwiPZwEncqaBHgNVpxYvYEh9fDS8qMvGMRxk321MG29VT1szYodjjVjhq5NxBtBkVJwDCu1tRJ29Neb",
  "key38": "2fdv8E7jB44QCjwmGzcdjgEr3dPuoVPNuXSfGjkYGeHLrQxcetD9HzNGC12pzZDHduhZ9G8VYzDgSzt7urbU7Duh",
  "key39": "3MYyHdeJ8B5qzqE2NYPWADetPzdB6YHvKNhXk7sg7pN8HB9VCnhydt4SzjBoao4XGiCGmM29xT6fLCnzuFTjbMSC",
  "key40": "3vydUaUHGPCsWWjmqtz7ptNQsyHDHXieWMaptpjWHTmukKm3oBBaguwiisX3YqRin6RQParv9WyX2bci5paHCBpM",
  "key41": "5hBwuzh48jxvEET5qUjCT95EbNUHjNmFoPrxSuq8BBjp5EFxqzKg66qaAxaiecj1ocAPUZQeo4jSycWGHXVZQBa6",
  "key42": "5ABqx24XyeiRWogkEcfnc9HugGTxp9iahqHiWwdUgj6muxU2DPXkyAVpq3Xnsv7eZd8Tq7wPHetVWtvJ6DYHXu6T",
  "key43": "YHgLTLiUd5tRH3oaZsUaoZKJSNQ2uCKUh1FUamF9zLv3Jt48brfFfhMUypP5qj9bpDR3iuWjsekShr8yt3oLFEH",
  "key44": "wsU1XDqCaMC3WN9rgVwCNfhwfCc6ciBmJLXTPFrFfoQa7N3JJzuTzWLaUEmmXzWrwYjCC1ZbyNrSQ1oT6EBuY4P",
  "key45": "TrfQNNv7cM9GbrnhLoJ2oNsXTxMYfUwMUJ14zmmquGkGggwvUzN42VVrJfcMfbswB8juUhnDwBPF89xNT9Uhkch",
  "key46": "2pcB6sKoJX9j44fVwtDPJi79VovKWQ6XShPwr29beT9gtR6zq5qisKhJt53n9rUBAXM74TNAvYpAAoMLh6vc5zek",
  "key47": "2cUmZ5FoV1xDcDFkXB3Asz6iwQEr5UfXahLHZDqKQx2CYkWKgzs3HfVBRkeZPbsSb8ePdzUScKTk7AyZt1yf9Z7"
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
