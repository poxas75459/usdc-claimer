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
    "5meYBi9VvngLtDuVcGa31JkYARWtiUU6PLCyFy9PMPfLVyC8XGjNnTJs1YuwynYBUmWf4XzcLrqHPYenyacaRXgi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36q7cRGSMD3f7wWVX7kydiCxUvn4XKGcRRQR8tM6rvLY2jzyKCqLgA6XA8AWMmKYn8eiGTyyrLVQKDSkvwZ1jxPr",
  "key1": "5DjeGfAbGLvj8CBGWT9QwriVZrgvzjf8SzTPCDjbwmBT1GUdsG2twT2mfDgcVJ9YFthKBq5jGQiJYUzUdMjgkzcL",
  "key2": "5U7gWHQEeufRjjEQ7D8PP49F89EnENZhMrT1didGRb4R7HxYfZ3P5HFYDSQXEGN2UDhsJLzpN4H5CXu8x4drXCT7",
  "key3": "2n5uU6u5MVZff5SKGKCFVfioUTdgAHMWR5v4QBVcKUPVuho17pw9UGmfr6eTrmiZDSP8Dy9ngnDtGETRH7NSLQzC",
  "key4": "3u7kGeh4KdTYNT6basQYM6DoELmfZCFeZhd32LnBezC7YGU6tJj7SJUkCkdvhqhHwLw3vrCSBaHeJjwpm4tD94dD",
  "key5": "49dzAU6W6THdPJgwWPhaEGUH3AGAaxHfhXQ1oJUGz4LQuo6q7wECYhinfFE2MDuCsGDP47yHEfqqxDpK4eCrdQAf",
  "key6": "3hgChUdo4mQB9wHTJqRVp9PJa5233iWo7LNKF9Dm1sXc6dkXRhwgdisKJayW9DZirGk9HGQhFaRyXUdVV3gfHMcL",
  "key7": "2YQfdq3jXF5kxqrNDY5TgaMwuaqPJNu81uQajx6RjbwiodzotHtuJMpp6gGUeVFqHrbjuQ2d6Ajvgj8qc9UyfP4k",
  "key8": "3CVLZJ7L4hStFqYrfySSi35JzfwV9zWacEhZWxHqs5a5j1ugUFrr5uTeBHp7ZVcHUbyWG2F2L24MAhCFbSphdtAZ",
  "key9": "3YKpnYMJVzL8nzQsmPPpLNG6XvqmjkUTZirr6RoRRc2vvXu9DrmesS2TKFG216mr3MbnQmM5encU7ZhG5VWs24dD",
  "key10": "5Y4eKobDwjjfbgxNuVm1Maseoc6YaNeKPsM9sJaq3PZXgZRLVpPjbTxR9E6fScNjv3Q23w16yz3RG5kxJNAoUuN9",
  "key11": "2RdmpJDSnqAmZBGBgoSCzgL8woa5shLpNjg8pyBsSfzPjxuN6x44WnquSav2be2QuNQ62cmDcHP5P1cHycQ3ZuMi",
  "key12": "2Zekjd9XpZActCSCjsvFw4FbTGa5Uu8aJDcfqXqTfEWdP2WqAqXKw7bVxVJ8JhkFmo65QEutKZiFwBittB7r8xdo",
  "key13": "51FjJ51zk6Fzx1aSm2VHx33mtSw7fam5EtQeosXznAvSx64oEEVxqUf62KDXiRTx4J9gK2yWWVLj2ijtbdpJBJrh",
  "key14": "66uKwkcNFkP48kgRUVME8g9uTfnMRwgzUwUJ3VJM8Mao943tQW6MmqGsrsQG7X5wA95wdXtVZdjN41TJ5TtSzXEU",
  "key15": "3mK8f6utaBadrEyt58bWpuSbfU2X8VA16JGLhQJoTo5iG5kCYNRzEY6BBxZYQrfWTc1eeAhcXV1F1kGWhdtmfMX",
  "key16": "3MeW8VZ5qoBeCojxwcZy1b23iQuc9hDS31hd5zvnSP6fjoSmicNpTSDH93SBVAxRej8xkuTpvyuS7JzqDTMSGuBY",
  "key17": "2onq139vWbG7NvykEcFZP6mRHcaNpRswffiWzG1Kc3pi7UTX6aZwRMyfqY3XUKQKVn2eGWcYbgMyMKUNYNEGaSnC",
  "key18": "4wMWNvFHhGb6xMT4tUDXT4ysXK9DzfewpUkUUgkvEQE69Ctrg2EtnqLJ5ftPSgF8iq51A71UDDKqhwxVCtzW8eJi",
  "key19": "575VgddZMFhc3iy2gAUKHmytSVhGk2TR3o6XKyodascjLhCcEhswuP4B838xJsbiqxBpd7k29kfoSnQmjVwg55fM",
  "key20": "4i46nde2yfYT6pBVQKdkxqw4jA5eNZ5KQKT12FCDqGo3eEJTULP9Rhe3EHviVUk5ucQYHd5PE9T9wcMkW44DWu4a",
  "key21": "5jXLdPRG8G1kvALXV6CffAzMXPVaDctsoHDcz1QMF38ev6MFZzmFWNzM5Ay9XE2NXLEjyYP7sTLHgBW9xa5pfriz",
  "key22": "44H8Tr63tKuDKhf5JyLB6CA1TE6owPec28ntELXAjNU1qRjGVDRGXL2zYKnsWN7Qs3Q4UCN4sWN8Vj77U7hTPP4c",
  "key23": "48Ys5aZT7jeVPVHZ68TggN8kypGw4ZC943mYpYd4GimUegXPwxaAJr8FMvG3ju9to6rzcLXTNQUqpFbsPfo9hxvN",
  "key24": "4CBbgu41oQnRznNdT5KQ1EufHqj6TkKssrQtmmnNXGDdGR5iM9ko26XWni2n3hunUsZuRa2Xg4JJXAYMQn63Qsdy",
  "key25": "61ztLmibA9NM52PCV1yS9QD1KXwBCpkAxcykRtmhsGdYqpLFyyra4ApqSVTY5yzipunzsLiQv27XanHuwGJesmMP",
  "key26": "4fuqf3fTK6tn8LXsm7qrDAfHFNUs4giXrWkqzWD84HGkmEUdPqqWWV4yK5bfmw1xG3TDqSTApbtwQVoAnGKeb2yr",
  "key27": "2VnsteYu2yU2UEaWKWtAT7xqP79MZTEMMfAhAtCq75eUzKhpEgtMUrG2Zve1jDBDmSdRJ6CftQ2GxRjyw2zYfHm2",
  "key28": "EqS7E3PZQJYMBdv64vhmuU7jws35TzvzD7DUPqvTao3i1NLb75t2Zuohdiiiik8UKCp1Uas6qQfdGt83QM6etjQ",
  "key29": "2dp5skK7jWkf7xYtT54THnTQfdG3N5HnWAJxmYowDni4rYJtj2jTRKy9EDGqkr96cEHGb72ZnA7jGoGrpAGPKToA",
  "key30": "63nYpsjF12yDDnzUFfpHhK6xxTsUDTS6i5GTiDo5D75xobHBWzjmNpUPt3yxWE1EEvA9NZAfMr2iZQGiAxpqQfhq",
  "key31": "g4H1yQHuQRoCmRnJ5rTa3VH2H3UkCTqdn71NGg7cchqcN5SewzYbPxCHf85gbqkjUqqgLxr345Pf3MBywgpcvua",
  "key32": "vgUfKeFrQdVb9YGxN2gvK4cTvNqqNBHrb2zRRMc8vRkUuVBUBnNY6NkkPhtCx6aVByaRbUrpaaZjcmxz6DwFZT5",
  "key33": "3f8VTLtuwxLdNorBB9CQCFwxMzkm82gFu8voa1BeMvu7vNzMn4F4fRUv2ug7bULxPAnYe7aDhqYRwJzpDpeGJjM2",
  "key34": "4JXZNA9zQjtejkUb6Ut56MZV28uLJPeNqfMivDtNY2YfnkBvYsuzXiEqSQ6z4bWfn81zdqsNYLXm8a48gwCzb7Js",
  "key35": "r376zXeEE3V5yPDCYdSYTpATNxYwnFCfPeYfKSW6bZy8iPhTGtyEiYLtCyRUu8GCau8SY3HKeTfbCaWPMDxNv9x",
  "key36": "3W2h4vNzLcJ48Ff1vW1CZ9cGPMR3r1QFL4BbY5ryyMiK6d3EVKAQLMhTLV1jpdo7aJ86Qr3DTzqCLqU1oMW1ikQa",
  "key37": "tvFmASiSdsxjm9SSRmBjqjz2rskMqJ3ZFvjeBMTS5D9AYrYKwoqTVbAfNuuZSbUmVx7F9hoiTLrEQ3WegxEKb7T",
  "key38": "GoTEaZfkfu9JLoocKk7g4cX7BVhW8tpMgzRRT3KpSe6kZKeCoRAFeHojwadHDs48VzBQJWjCXni7XE3pCjkPQit",
  "key39": "h54VzT1A32Hzs7NJyPWoZFKcyRr6Xk9pUavjYHn86uZdKdXhWd5xF8GFvrjEWKUMuwXiUhjC6Fg3Wkp5Fr7FcGy",
  "key40": "5Q5CY3xRudkDQUHtHhoKbuDRFaAuQYUEm9mhu2REewx1QFxEMPhmUUY8Z4jbrZeynCy4pnHDUuQr3V5xSgkni1Vm",
  "key41": "4J16BBFJbrkeNmtdMxTExh5WtfTHC2UpQ63jUYqHtcUhznhCiJDMth1oME2gS9AenRZ1pEMxGXe8mBbb2gS9VGQV",
  "key42": "67Cw3YnSzEZWhgC2UYJjy6C9vwFA43wdKJssmwJnRpEVMmDzPAA6XisWm3EKtKofZMuKhW85h9SajiB3AahNtxA2",
  "key43": "3rGMFeVXF88B8E8L6RNwyoFFRSqg58hbXPQDnEKNb8DonxFDERvbcMcQ7VHzRPnyuP41MxD4HaDLUQxuezy1rhG",
  "key44": "2mxo3EHgLaUoHy4jn215SHsw42VWTFnHLrcKBPNVh9PFKg8PinUPXvpjwCCDL5ZuTUQK7t1w6CoJDQPz9nXgZL9i",
  "key45": "TSbizupCsQukuBNJLHX5usFRheZuu3Hg7W8sDNWzJSmWCzJ2nrcd54VYHsjqTQ7BvtG95YA3oQ9KuYUVVfzRGmm",
  "key46": "4serCmvT93C6rSVkXLw726uNT3NMmndxp13tPAiBrhebXs3iRUNDM6FvbANkfpHrsK8rCXMmSQEBkZgqWi2PS5YD",
  "key47": "KgowwA81crwNWJqouVGNB5JoEWSWhJF9KCV4k9aGbcATWw9wZhbgTo5hGevVQ5ZhNsRVbYqcJ7ntc9jKvgjYxrU",
  "key48": "4KFHkeq768NfYVu2xZxxszvFjTEZGymoSiaqgDaRjwUAcqc5zvXNZuXVtMMCBH2B2GmdGEEDupantHREfw11ssKK",
  "key49": "5UKw2DixYazqmKzgFuqp6RGuMWTSEcUiNsSePkY8YiCjdJocysbqX1DpVhVpDPgE2RDRYK3BV4jeoqzSfaCuPC8K"
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
