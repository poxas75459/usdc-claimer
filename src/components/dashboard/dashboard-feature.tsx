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
    "2q2cvHQ4KfwdCn7jthNQvm8VujuXum7kWv2DgYHZJMcc7DVeMmCNixmQYTkNCbf12gvigkmbD2EuTwz1ndPovLfQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YwHtTLAY5AZYUQTPNDWWvtcFBTjfbDZuqBvthhYMUqqwBvJSaNaVQaTTFqqApD2BKjpzvLYDWDFKpsdnVwwU6PN",
  "key1": "4JcwacMDi5AWJhUPEzVyRFASzjDMHsPca5aJtDiSkDZYefpkPYmfjwye6sfhVQw1QoYPuxSoeZcyoGJuqvGKBiXJ",
  "key2": "3wQWuvSU9wWfSfEyCSCyX4NGecYHj3BsSSn9dwKvhdkfhQf5kwdwe3CM1MwHPx5THdyr4z46pN6msrg61yaRav6z",
  "key3": "5BxfWCz2sN6JHcyB24Yu2vS4RxuvdUFMhPbTxJ294uY4AvuELenjuZQmZ1dnoDLmbG7twAyVPKvTsPSkFyV5zc1b",
  "key4": "5mqk8rd4hvRLvcqCCesRFa5Xg7y3dPNuF33JjsG4YHcYx1qx8zYoA1cs8CFgHwQ7yuA8ECSJ9zEeAdgPMoDH7XaK",
  "key5": "3H7NGpxCjtwcRFoAdwpEFRfPq8Ps8V9aonLHqZ3ArE824wXV7Bd5SNSWrfPNVm2ZHC8dXgmHafWBVe4hS4UowgXw",
  "key6": "3QVmwYAi1tKKTjXA64YQAFRu1472yf7Ba2WsKNJD2WM1pD9FLHgXUxBwtZkxHXMY7Ybeeze4Z83mJaan2qxyK3wQ",
  "key7": "2XLgAW2knw9D2YDj6XqTBzbAzNG62wcxri5XE4NDVhTS1p63TqRfz6VektMKQ83q53EimkAM3jRmp7KfXcfU68gW",
  "key8": "4S2qW5FY5NcjysJXLk8cscrwovQxsF3y21UzZrZUBcNp5vPaap4r9ZXhMwDgB317xmQxVtf1gq3WPb1b8ChxDgML",
  "key9": "5mR72xnJ8YyJGQXjdJUaccGWSDpJSsQWBK52tbc8FXyLSAt92Vpmu8wMeMegHgme76An2q3puBuCbemueD3iD3LM",
  "key10": "h9R9Vs2L3NNGW84paE8unQrWuF8ywL36ujQY1cHcesAmidkE7sS2hmuZmLQdu8WVWHccDVcNmCwyppYkBehPZtA",
  "key11": "4F6pqB6w7chc81JeDf44eQDMBCrT4QkiUpKsiiMxC8tQZgNrnd9iNq3bNJBzyUhxb3Gvq6evvKLqDH6zkwAXHoBq",
  "key12": "62PeAHJNUjc2Nrhkz1nqCnnW72jh92U9wCiXRokmrPDa1uVEtTqjsbGZvsvfvoGqp6hZuGsoVyJTxFC9pMSJR2rz",
  "key13": "dKCX6aqHMLqQJ6rM2ero2mG7FsJEenEMbjDhzTA3Yk6Mwgxrf9sT6ic4ZuRHPF3gr3BkC3cmaMdrcERaeaeh9zH",
  "key14": "VDDPbaj97399hofPLPMjSGdV4RC8e8XyNzeHJ1ZVtNRWkVDH6BjVgoojEyTKpeg9oZKqymXkpKrhtgHC5qwSaU3",
  "key15": "4o36aDQLqsMjiLexVoZjNEH4djWfbnc46Bwisw2DerNMuFNxA142Eu2zCpkQpaPDndbKhMKBW7n97yYbLVxcxmB6",
  "key16": "34rezCpETUcKKRQUjYwFPANt3PYxwmcP5Btp29S8Tjm2ng1V49QrY8QzRkHbEzBF4RXLYzPg3kqB3tBchgQMdHrc",
  "key17": "45mFiRpV7vp79SvFxiDawkoorRuiG4ob8dZUWpBu5B6FWpDAgGjtG1hcAb79NknrStggnXbr7ZJ6Dcp8d89owvMA",
  "key18": "rWSnuwwLFVNVxi1r5PjLuZLSSCJfHEjMC3bLb4XxSy9FqRaMKaCDkfJPY4fz1NKUQJBhaBz3sNW2hkZLdXZ211r",
  "key19": "j854bpESaVFPWdNvsLh8ED2eYwFCiVGxaXxyV2YtHc95X2FEYLQpkMCLSqAwozP5BkwpqDiyTwnGk8qjjbBBpAY",
  "key20": "2yGffMkqMqYP3xyACRf2yChf1VB13D1a9Gsetm1qK5kwcAZqPL8zxtDLyX7vNx4PMWqa84oEQbKfbDV3YZycuv2D",
  "key21": "5hWseMmnr2sic4wN3QhEL4cB6ALMTArzCjnGsS8J92trx5VdyEPCeoxtSgELjBp43WK5PmhQCvMzkrjvWJtWUzxi",
  "key22": "3sscKczThadyrMoBTFVahG7C6fgYcRJPMGoeab4VUCTAXhTXcnjBH14g7xXTu9CtLv1AcvrkFSbqng3jyvyyRpi",
  "key23": "3kPnikaJZWmWTBfzxmkd5cymgsEAWCr8M6rVzVZ9z1XKTia3eBhyNHbNiY9w5C1VRbDHzmoV3spcNWsWpNZDEYby",
  "key24": "3Fr1D1aEXVkynsPArNfkueP3VVV95wM5vyJ1fTqUd3sMV4anSYrPTak5b4EeUfQ6ndTGR4XaAJAiUCpaVCdn3xBn",
  "key25": "2tWYhgU8PanKNT4CXVrXuE6ZS4nikaLCHM9BXGjNny7hCHPLex4p3tAG5JpVbavLyBHpJZwubPCesVo9qZLgesmL",
  "key26": "uZSdWhP3d789Qv1AewpQ2WmMHfLkmeLpC92A23sCNGGtVpAHhSZiCesF5JDCJ5Byogwkkz9yDHiDGdWDazDGpr8",
  "key27": "2AMZw34t2HVT1ZhDKyGpTkEPHcGwLQT7wEj6HKZPZhh4XwfqphTUHAv8uPJD66bE2ukGnF77ZcCNBtP1ZkmieiNa",
  "key28": "5HR1UiEYbhQECsRERZJijZtp5F3aAY8BJGF93w7XBLw7WFgtCBUPiqxQLxzgZmgmZ5eERAjDFKTcooQ72B68F2tS",
  "key29": "33o9ZuM9aUeP9ZwEHpWiQVV1kg1ijrZb8DTdT4JroLiArWULnKUReLNjUM5MZBzUSAAg9F8v89f1nthNp95wK11",
  "key30": "5sEMYdNYczQYk7h9SfAaTJYd9PEh6Xyy19XvdqZguweUpQmyYYHTN5XHQW9jHEoh3dBBqCgYTPmtCBTnqW9WXAba",
  "key31": "124P2HymExYJwEb2q2vS5VwQoiXYUmccZP6FU2EYLVmhNuPsaf26AahHEdVsYfxZDbYvMDMzpuwtamdH46MbyHN5",
  "key32": "25BJzQkWRLcdf3iingZBStjgBRku59S7vDRj8FWg7WJtVbN6KKv1z3tK8UwL33xP4YWrSEiXNFwkWiUtHYmdkWF2",
  "key33": "LwmSL2kB3HUdq3DTXFie9WySwTvSUKYLMqhvnSw55eQ6uDgPoJSBf7TwF17uHHV6ecRTLfdB3e5jxW7J5JFtnDL",
  "key34": "4X4F4C5eU3e2spwAZrWyyb6AnBm1MPCZC7UGMwdydtE7eTFEQxURwqfcEZ5xJUcHjCGmRWufkGDLzZMKeHJjmqE",
  "key35": "5awCAb1whLpfKGeWa5uQqowVMqBiQXPXRkN51S5x9d9XeX4MHgQFoJyJJPiPuPEHntGuxdJf5m6B1QQYEPwHCHg7",
  "key36": "5WRnDZxS2SbhYzu4Femex7vqZ9QxyHmfXpJUCNerWpHVSRRy4jyrjcBjfbnCuRCqcTSDNijthtEhFoJvM7HrEWw5",
  "key37": "4FuP2AzrXqWYsYMcJDoJTesNEBkqE7BuLQzW1XWQ7YCefo9BpxtyBxK92CUMkY52VYQNWFjdg3kN5ctToLe7yvYS",
  "key38": "5VWZLnqJB9gnf8bWvvk5L8aGCP6X3iAUEoU2hAjDd9kAevxHRV2wjEQrDobjtMe3pigwYXrSDSp5VYC9TdU9AaVN",
  "key39": "5QvFCZsU2tYQVikJBwdgStWEn4Tq1r8GXGixRnpcjdPtkd9gH9V1wpUMBwckBemMSM1ycaMXEGbQcvrUVQyGrzwx",
  "key40": "3BBGH3KJowG9jUbL8HQhs9r6MxZeJDa6Y2N5aPK5KTBvUgnjKMaHAhCf6pxsQeqjkibAT5GrYRA6fNzHUNWPjmC6",
  "key41": "3uigLKL9TBVJc9uqa1UDtkfMmJLMZqLsbXABg2G5V8LDwD7J85sC7zgRjuswdV56sxwCj3diGQDMHfbPQurDUsUs",
  "key42": "5ZeCbuRvR4nkEQRJFQk7P4dVmTjCpYZbCqQHra9SWMgHwwGnuufQgpCYb2tAsQtNEn7cJJ85a6GnTJk26UYJ2Tk6",
  "key43": "2NjR3fN1SXYJ6dhmXxqhiP7btZ8tB3bKs6wwci3HMFNJtjBkUnJCj76bsAG95QPvLn9MQiUJK1LuardNuH1jFbCw",
  "key44": "66efsntratiPknKs3uXXidVM9KuvJptCMtpect7vrHFazoy4cZcYCbqUnLJTDKHiqxH6N1JdhYXkBhUeuXDRuspC",
  "key45": "4nMHPVPDpheAoZ1h5LBGq37Rne2pREDCsHyrPXA27Md8dF9ovv8L5MAPQHdsC5EEKQmahZsXFnPn36EFPqxAct1m",
  "key46": "MGmuRv7DEFbG7nagnHUGDrgq2fKdY8GQhhkboCWHT3iVjDoUkBnWgTG51jDRbBvQfBdPxe9TWUpUChtJ97S8NcR"
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
