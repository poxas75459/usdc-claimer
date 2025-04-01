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
    "P9cM8nYGC4vdLKYP6F4niPwxmx2Xh6fAie3ViE6dqW5sYdB2vUEMWyNr2Wp6s4eWg8i2tPz8Fw82N5L977rGxtN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45JnEU5MDtn8WciTUAGz2rYhMc3T9M7Zh3H6tt9mJTfyewyFtx23ZRgYLQK7UEMzEETtCThjrrQt2uYa2R9KJwen",
  "key1": "286xMj4sLZwQeQgTospzsPvHNmnbeFhwk39Bsi13dB3LQec7dQR9Tte7meuNsUBnJxQAvVggbDkrybVPbaSBBrE2",
  "key2": "56LBuG49UiWKk58Fb9VuZXNKBquPzBAAvoSsofo1wuxhvoQBqRGN2Gw1MYqJ8evEgJKhgnH5KKPYsT5Q96FgCZfE",
  "key3": "q1Uskrg7BtUyZKzkakD79LbQwHQhgc5ZeQGV7cuTWNN3yMY5YpQoEmrfvwfS8WiMHV6w6gAGtrh9z7pgq772MbM",
  "key4": "5T5pe17Ra6gTXiaVC6jdACTHDgEJPvEFpQEwLMsGYsf2zXUDxqPGh5M4JByeutmBkmeC7LsHAKq2sy5ySEwBtz7r",
  "key5": "3zQDNTjv8pV8X6nkUVonqCT6c2j4XcgLL79bhS8s1bLxY3iumg6uwhmMkq7vYZy1iHr7T1V284z1upKNoULEqCrJ",
  "key6": "4EPpQQr6Q7yy7SiXCHeBnNhQ6pKTsKAFH2KcecEDAY91aqbCxE5nZZCjgmAZd9sqHSXUDkYKnwfHGs4Ax1N5MHSL",
  "key7": "8oxCz8ycp2wcfd85fPbZbbZgT6hfeBxDYykmrnqpU6dcxU96yeCEihfwrJSbga4PYNYqa3qEuhQJEB2FYnRYpQj",
  "key8": "4w9rQJzihFmW1T7HoSpcsABa88zvd1jsFzKLcQYc3x9Jm8gWiYYPzSg3iz35DCfA1Kzz5cZrqDHZY6nN6NzGNKPb",
  "key9": "53AY2UNJH3sQsKnmDMJV9pnWZVLTg1YxbnuC9BBByG457S6AmUgN6yLV9drYdkwyDy2wWjShbWQzJ1Mgp2yZGcmT",
  "key10": "4yWMUmoiYGWq5L1KH6HTPbYwt4epv5Ms6VALmidc4HHQ9B58YxHVwCrgtWnhdZUz9Y25zmib7LPYGPX5BTnaoCV2",
  "key11": "2QHwDeBCTUBaTT2E6TmqP5HpAjAEbn2wWFvoc9ukcW2DVpREo1yK3EmdEu5EuDhNDNYCUU4THs5KhNhs4dBRspTD",
  "key12": "ttGUT7WFgXV3GX8aK5cg4LRAtE9Nr5skVbPJtAZ9fxc6PQoAydzfbz3MbejbSApi5Sxxm2TWYvykHcAHG99V9sG",
  "key13": "LpUo3HvzumY9dQRwjgjzWxpHZ1c7vBgRAEZpwMiFUC2CePmtmxsU27UXsXnaCTF5QpFkQTknnT15u5eWspJDXSa",
  "key14": "55p62cFP1CD8dgHAsK6aEitRr82nC6vBMsXWhY2tmx5ziEeQkd4eUvVUvQAd5pV8wPXLEHpzN1ospYyWPeS4yKnR",
  "key15": "UykVaEVf32P1FykTxS6AypFkDH4Qs4PeCyhnxmbffm3Lgwb6hcSNGxJrXSzyw7DSA9PAWaZRaWKHgW5sSh1mVBQ",
  "key16": "255KYBeL4VqgHABXi41D7hgYQnyLBBKBcHiaC7N9Chi87R1k2TBsrVw7Sk9A3X5UU7MTYagx2NeF8yQAmdtDk13E",
  "key17": "5FuTVzGddyhf58efD8UsfJnvWR7ZmxwktQnpGk1TqzARw94wtqt7NUH1CaQ1s1wnZT82KiG8SWzsgb6rubBrPmAH",
  "key18": "59z1ZD4LnPov9UyynQ8wTJDTgdCCr7zs2n5aeKAUjaBq6JidAf52vQddcLpUKJ9AcRqQVMgQdtSpr5HNrXc8UASr",
  "key19": "4K2TyQL7RNHVDh8DFdLsgnUrJFL5XRxrsLeKWwGkCFsFVpF5xhCqWEH7iMHyf71BE8pmEZuTRmSzpsuLBvdfswHo",
  "key20": "3tFtAKoEbnpx1vN2kzUs7fKQELeMUAB8bYj9GkUS9jh9E5TZQzoL5biTvCpsUsLCNkEHdknZwtxiGwae5NBMfbey",
  "key21": "kzfu2MRoaqHXYaRGtNTJbMq7ysLU791nWVG851Uf7XCvmz3rTkKLojwGQckwdHvDCr96pwsTefqutzE9MYSMjew",
  "key22": "4XrhWCtYeARt2TUX9kBpAHQcg8axgftYXYsm1Lz8vr9D8nynw1edXaV2krzkmLEH2Ga1x8cWsRGKEcuvrzUTdeoH",
  "key23": "5oBhfGamMaUvwAxURFEwkaAwQqAaqiZY1pjXVFYx5SmWh573b3vK8jmUgYsC928bp7hCQur3bp9P8tAJ6mPMMamq",
  "key24": "5yJFz6BLdgqfQ6QgLSec5RJSkrFcVQwkTqtJBtqEmaTWZpd7ZHgJMCtQsUrVVq54UZJrRkuZH8r2yZSNL2UjW9ax",
  "key25": "4CjJYM625cfduZgtuJr7a54giPZvvuFajCF4kdbn3KBLnzBKNHGJ4T45WuGrgSusxSX5enSfxamatw2cFbo7tYeA",
  "key26": "2nbQWsJkGZax6Uk3ck9PBmAnWqMwyyDMiR16W8gTd4PxJrftcFcrEvid2dz5kVZfBnEKTBDB9uGnQBXeY2CN1RQ2",
  "key27": "67jwFQrztLs7ohiFMqua9BDcCNw5tp87zC92A4ugUoiKGk5Hw5bPTi9t1atcS5hDLawXMjWMpGdoPyi33RJamhtq",
  "key28": "yYbJcHc5ynsBCr8UoGfthLgPjrgSrqD9n6J3v3tATcVXr51CUR28vfwThUwvmHppAhUwZtEfAgtW5v8eFRpcRme",
  "key29": "5V4URKHkvU98Z7mPSRNZmCPhXgQM1DF5hFnKfFdDJB2whkyi8UeqQNVqyQZgEZcfv6eWA5wbWowEjzKGjcfFSyMD",
  "key30": "a88Wyn8eWpf7ThHztNDK65eGjZ5jSLc3FxEsrAZK5nfzn3B18rx8VnsXbaausXYh1DdLbUSvvfLjwwv9TY6Rn5i",
  "key31": "2ULSLaj8HaJfUMJHQ3oQyjX6ebZ9V2uiMD4AzFzhRPn2ppsVEw1rurukaCCrpuqCF9ZyHWeDSuLdig5yAns7NCdo",
  "key32": "4GBhyj1xYfDxYER8fYffPo5MtuqRS2UaSZQKeZdY6iZG9pjRZX2FgTe8mVVT6jKoWRNSoEBANdRZhQKma7ewXzcH",
  "key33": "2TVWjtvRPJ6TL6HUUXMn4LtQhVwRowQgwYoDmwVkVXpMUjJAFDSmAcZoc1PkWmjd8aEXrBqAw9zvdsiNcfYdNVVc",
  "key34": "3V3QV3aXYNefYFBB7WfcdSXAB8tb9dgRNwkKdEXQKaJBky2KV4mz5YwZqxjBX6Q8E3DX9cuSYsF5c8mwVcbaG3Qh",
  "key35": "5DSb5B2QN6Dn5BTzpx1qf54NfQAh6bxb2q6jBAERs9YnoEr2DzNp4ZxchH74SiQ8tzro9sx4D2ktfrEU2ScKEG1N",
  "key36": "5H2njpjauzrWD7TAo1x9eo3No8fcNcq9oqFDMiDeVdwtR4bzaiirxhiNdzCX2ZUydr6XrbCr41EFvaK81LGXdJCN",
  "key37": "5RoBF9bR8r5venvGvqUSCwqVLoksfEz3Bd8oTSFmxjTrwn86gkYQR9V3PRasx1UXMrXtYRJJXxtNfa8vTBYPjrT7",
  "key38": "31gDx1LSvngBWtJB1gM1YErcZSx5Bv5kuUnZy1yMa973dby27YrcFhW8ZGHYt2vYRYgGWMjM69c88RkTkLBBgSvN",
  "key39": "4USBqEsSoXrsNNQPmjDBxFvoSzP2YyhXMCo1zcZyFWnXrXnPe5tfXhuk1NSxLpPFoKWmqCpm8mTx7ixzxR1fX3gg",
  "key40": "N2CQZ2qGzHv4ozXBKW234vuNZrvRyB67XJbyaxpzBMu9qTnVYa8ek66NWo56UAdf7bKztifDRh4TNhqRrwVya7S",
  "key41": "5fW2c99ZrvipzcmEnmsYYi2rMi76seKUfvTcnSUKDowLFKczPT1cTxD4gi7FVpvA5fCtXeztA76cAbW2D4Jgnbi3",
  "key42": "4K1UKtsdN4kEmsQH1sn64ep9ahC6G2vpKMjKf55bU3rbyMrVjkjAiHWEMSZxdtUm1YBk1UDUwfVncytkC7DvALZu",
  "key43": "3o8qmgpL2Cq4KoatvWqLzcXcFG644R43Pxh1FP4LomyaxnifgNgEZ3b3bpjyWtgqdUkrCfoghSRrcSkZ6nwgs8te",
  "key44": "3S6JLrsFexByawW3wQAEkvxjiyJMS6knvpX51yDw4uCPNKNyJWGWZXm2Fwx6V9wCSaygFM4w8y5Dht1kcqwTyUNw",
  "key45": "d2frTUsxvvU4gadLUGDG8MfEj28HJRPG5unCLxTZwy3Hd6WtivQRRmLpUSNDs7FFiJZm3nK6X49ZXn61JHBKZxN"
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
