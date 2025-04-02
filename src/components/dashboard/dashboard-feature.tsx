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
    "ZqQBNmVqTKLnTpsATeRtrB8NYoF1dxqHezfg6LeZkTYTjKTMrHwmkv2Mfk19FRykdvZozofRZ6FVMCJQazGA2dU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZPVaq4iBGMtpVitiQTQmbBra7BtYjSQRjJdB1Lnkkrs9XLybXC7ARGQEtY6YScitSgXUoEMkSgn4VBpfo3Pp2ce",
  "key1": "3xcar5huWhmjo96yRSqn6ZNys7rnEwXj9o7JiKPjZve6FMbP5PjZQr3LWj13thM8NHXh5iMrAkE4sfpSft2utro6",
  "key2": "4WBshbSgLzYyUW9m1UyVtEhoA6uH7Toj2yBaAxcdXvQ2tsBy2amA9UfHpHx37a3J3LtuKEUayNj93wSB15F1i1hL",
  "key3": "5PCggGzZzJhQphSkriemXtYnYxiqQA4ekuhw4WTkdNFKdKi8EMk44KfRK9o2hbVauLuGP63CJsTfmVbixi7CCnGn",
  "key4": "2ZNo1JcMGy3QMnnUBNjEEnRcb6gTG4oi9jjSJX1rKEGURCuV9Drp6tdAE3fj2pkyeXxYCXmG75fTDX5tj89A3qya",
  "key5": "42ccCSKLJcP4sZBdNujymwg2cmgM6Ah64UHzWAuUZfr2JmqqJtaizyeZ3eRM2gC5H2N6QtTczF8CpZWyNLQW2L7u",
  "key6": "5YwD9R4cp8QYrYj2xSqn8bixtnm5cS2euvDq3Szuwqt1a9N9k6FWBdG8W4GSbwWdBBQAjTdNJyoCd9PL8RjPM7PL",
  "key7": "56wm5vLNbqVWjGKLidYmR9927cckCzXxpUX8eajtcc5mj7YzxANgPsEeK7mqjfDWK1YPVVR9zfUsf2HGTQYYEUHu",
  "key8": "Ug9P27U5PYzhkKbDriMDixEubDpwd8HF3Vw1tnMmQAdN316qn8APYTbL79CNMXoA8NUA4jKvrG5JkaPTRzAdYC4",
  "key9": "78oCdHTef8xArbPmUn71SomZ5ZJRSnDVBJwjr1iYuTQGopcDho6yJj65exj9GQQxVA8WgGRBSC9FnjKcdd75eaC",
  "key10": "xiuhZ8s6sTLqRNXUK1gWXxGE8TW1Qjy4jr1ee9WrVH25jRu44A2LgWo8Yeer39NkTuWGEzs1XB35Xg9nGcYfLB1",
  "key11": "2S2ygq5HzEdh3UyKF39fxNtmSW6WxCYNii22hSXvxi3t228ZXhvGzKwtCmJ8vP1T2zHz6TAoojQkYVyjueioK6gJ",
  "key12": "5Srndww9gtKCDjSoCR6Mbo4q9QvCyfd15oDLMj6Wbxpyxkuy1jTpUy2aUjGJbczJ3FgZi1fHLMDRygmcdxCPEYD6",
  "key13": "5qA55LuK5cs2j2LKmPDCc4vmxwyk8SZ9zKXrKJvrHhcAwc3icPGeMXA6hhqTnEEhodENZfNVr77CaVRwjtpPkV4q",
  "key14": "3b1PCab3g8KHtzdo6oZt5ErJVvhZ755nu4VGGj7T72AtWiGF2Q9WNf5gt79G9pmLTfp3Z5TEPiVu1EmuTeHj6iNF",
  "key15": "2Da7MtjoksZycXH9PqzHn3ku3G5uXLkWcd4rF73jDNY7RrEyJguChxxHYbHsyGUd7jJFPgcPgRVDUhGiF9pmcrcA",
  "key16": "2x1yHye9HLivDaRhmm2jigRvRLdGv5fDPF4xmDXcfSdXrNM4PRYhYhYZb5QsNunKPrsbBxR8esBopKn35NRYgnh8",
  "key17": "5BWss7rwoz7JddmTmN5yRZxjAhvvLfUUgSvWSzKXBgw3x28KRsLwkEhs2fykwj1YF54EDQB6FD3X13JvqW4Z5msz",
  "key18": "3vFMwBtwaaE5PAxL9HFY3nKHHZw2J6ce1jbvtk7S7boy3FXQKfDdT51oUZrCq3zDUbhLGjjsDLzpaxLjfZUgVJ5J",
  "key19": "4RQuvnVHWTUbECVnhLnLMvJmoP1LZLUt79WcY5dEVt5jphYGERnEdMhspNBMSgKQv5nBKsdHjJwA3Pea6TyiECJT",
  "key20": "ubktF9XfwrSMKu86dtwfQ653GspNBLsaScU6uidK9dKiWawdK274zfry91wwHHn8n6jYwR59GHuABaqBwLk4ttx",
  "key21": "JXBvMhcVSoWMV1JYppXSM2PbnqZsNnFcEdioVvr4SurBwS1MBSdDQKo16yxWdm6z3LPsr5QkVP8yTHE2zY5vbJ5",
  "key22": "2rid5B3ooJgXuv9jiPJZQTYtk2vi6FyzRWheXnwBxQXzdim6eQZSFSqigzpNKivM1aUmrgnMXNE8XomGTjuwVM7G",
  "key23": "3hJ1S9fsKoZSBQai86Zy1b4Fooq8QBAyyeyhfxAorNc4vdgQA58kWKfKsnBSvziark1q8LQf7xEXkdZARBA6KNnn",
  "key24": "4QeNq6xTkkJ7usJcgwqwdETxuAadvny3rDb7xCPPyF1voCuVduutADCEZBHhoucgyjw3YLc5SRWaKWtDLWadM6f4",
  "key25": "4v9XP9Lq2yx6UczTpYx8osJ6XEwYojrkSsJLfeHT2m78Thv5eMMS3Rhj3sgqzQHaN2b7PccGntFxBPpgAi7zpsnS",
  "key26": "2nU5f1ZsksQLcQDzhw2dLEBVL7PgqhjKhZhYy3auX1KngZXHhwm1E8ZEFjaFV1yTdUQepVXSM1XisSU21BZ9ibA1",
  "key27": "eCp6RHK8xqFmS5U76GymmqPrUCWpnNfg4zsarjLKdnS8vsj3mtafqjU3UNfBhbNk1B7LNndxW9uMsTt8qwkTVJy",
  "key28": "2t6EgB58TKXHuGwn3o8RmKrcioZPG26DKbtDwevTu3yyPu28d9VwuviepkipgHq7nkjXSs1YTMWDFAnXBYy9KEW9",
  "key29": "4nT9ka7EPyqQWPRUbtf9G9fVXJFJkjHvJa3DuLFKnqy97FhqY1goUJ39fj7hTzGd1JeSeZr9WALcrK8CzUVc7bro",
  "key30": "4SZ5znu1kL6VPR4vK9FZreMNMEXjeYAo6PFpDmKwVMTxvdDneSyT8VHaXgy6ucCBx1SnK1bwoupjW5Uatfa3z4Vs",
  "key31": "3c2Ch2c8Fv8YVPEjMVUkdY5xvsCVctsNuqC2CDXD34eM8kkad96iv614cgJANzyfhmvrwFq3AaH53p4zcTbFtYYC",
  "key32": "56AbW8n8utreGnRonEoqh9bYYhyu4T2qpyfvZhApNRd84xnpKciZH8zbs7am3E5HS2nDoFx1Pzc9nXTVMWm1fHJZ",
  "key33": "4fpNBXJp9FYvz6wJAV5m7xUg6sa3PAnXbmu83wgCp2oCFhZDpUWNYdMMqC9mmoRYYCadYue75DShXBnZwmAvJGri",
  "key34": "57EBsCmSessw4EXkBGRRhWRt3Aze7gRypWYoF82kf6zrCYZrCvgU6b6fW5DtuBUhgQTqcV2qGcQ4LEKNpGXoayou",
  "key35": "8DRcAS6cEvKGXj5xoMGEJqWhWmrEoDChe4MuKVZvv2KJoq8LsRqqrCX8iZbM8Kaizpx1non4hacHbMLs1yNkBZM",
  "key36": "5HNoXCYMw51PnbbCsSzSVMhUagm6Y1cX2tHygtzqEFkgUvrYZH1U1U9CuEcti6AsFn55tmbC6UqP6FhqYLGV1bn9",
  "key37": "2RDyGT8HKVC3XMRwL7xdvkjjKKiV321k4JjTNqQWodwmR1QvUUtjjTGTZXG3NHusdVCHzA1cJsf4H9B5ohdV2ia",
  "key38": "5UocgzA5dY1jzYSVVj2cJRp8c19WVtigxu6TnwBqqA5eaZz5PKYBn5GuzsGLnKhQxcYsxsoUEE86zn5mxFSTG9wT",
  "key39": "24C9wzgVQAE7bHAuLG1wduCNYq9er1X7BUTnrDHbXJU3h4ot8qzLqxv2fHckC8KS1JhejhND6kWqP2fQqEAX3HgM",
  "key40": "3NXYt8aSa2YF79whGXpZNRdxKocp6gHZABCCvV4BWBdkdzDsU7XuZ9Z2zUhp7RY6P8pJkMuzfg2w38BGvsaaRnxy",
  "key41": "55W4URAigiw4duYLxyenEMtmZZnMArBKcLz7Ccb62UcAVuuDGuxHsVJztKJ3TjDP6ch4mzUoDbwZ1Aj8rxLfD29n",
  "key42": "4cmHxsqzbiV6QDxDsv25FZfuWMYRfQZ2ToHXqp1UhE1FSdi1rEBQCCDwGU28DdfQuHQ63riXxPZd1x6HteLbJbeG"
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
