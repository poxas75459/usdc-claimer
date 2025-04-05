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
    "3k4gwz5mNptia2xGcu24s6RVktQnFhyk6ttzATL46J6wQvJ95CgJYzso8vgzgfapeBv5Wp7ixHHe31Qa7cxd38cK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ESJMVpZhKaGLGc98pJvjcqzuAkaUGXknQd6H4wBRLTEovdMCefhnuE6sG5vbh1jzusgGzFRiWr3haMENaDg864Z",
  "key1": "3XB51UD5fkHqm5vX9T6PEi8tnLgKSAcwBRvGfuaXiVbQTubfJvSDRhbZ4aH9qdMGkCZSHbuDRKiDvbdB1s3GyRiE",
  "key2": "3CNfu9oM53DgVLkCgBPrzoB76DSYr5M65XyB3o72E7JdF3THi2oRpvS2m7ZxSFPoxNHmXegfm5Aifhc8Aj49jch7",
  "key3": "2rqaZPRrQm6F2zy17E8rkR1oz1LcR9EFmqprrzoWty2jmsmLjBGrL4scj3kWANjqFuggezSFGiRkTEB7XNoraP9B",
  "key4": "26UrJr6Mae7DGUX5AkVibnLgkhwmwW724NercMfCcbpqv2Sp1FN27e1xZBCNxNTzXUg4Mt3zqzo4fJ8qCyXcDpxk",
  "key5": "3rWq7zz8YtijGdwxd4oz4QtEPbDzJz2FoiyVd3xvg6DSjUTWRJLf3HCyGcpwsr3iQQGdR32K2zmuCd6cQVthdPZZ",
  "key6": "4RBuauHrDBYK1Ggrfy4UZuEGk83zLWtrJyTLadrKP6w65uQcVfyxa496n7xh599nwzr6X7Xg4Q1btnjkbXsbSJG5",
  "key7": "4QH6s1bbHoou5zV2onWvr8T6BoCHiiXws45imoc4BHEkoHFrk4rhL8TFyJ4RjDgopt77vYfkiyKgKGwUxk2EinPJ",
  "key8": "64CaATYbi5aTA4xzDTvkStDeWoEmCgVwENnQHXX5xegQfFFRnd2W3Fx8mKLYa5Cs6w5juHAhZbj63oESNCm43k17",
  "key9": "2EssHyC4DSHfgWsXE68ErvgVjWeDUNQJwWGvwoDcAoMsyYoysRjoHLb1nEqG4mV11BmnT7KEBAB7LW6bLb4KXRXR",
  "key10": "H5qRiyLX6ucvXb5nUW3CX8kWkSoFXoUUpXMSmZLqXTLMngSdv7NF2tjWidDPpfRePvFkHn6nXakTeoxuxSWppwp",
  "key11": "2yMYN5rsWggRy5vn991sozFBDLbHLqBa7Ch14pkned1bdFa1tKGrs9V7gfTJxrxDX98ebqgaAKpbbpZorsyrZzt8",
  "key12": "42uEYrMFGdpnRR56Hb6uYvs2d9ruf77HG15qB4ChrbTou8uJWG7d134nvGyMpBTBnELG4HTNTnjy7EpFnXwV2Kyj",
  "key13": "2F5haKqwASKYRgvPwEj9Yc1BY8V9i55vRqEL1W97omaZGChpJcbk9tawruMLZbRASXK8ro65MdoYzNgfjBAxgRTd",
  "key14": "3vHBXyiFvHdVAQhprZB3Dse7CUmHcxkQ1AtkoaFhRGPYUCk1RgAFViX6qrurrbWJyDKFTchRGsyqTVtetKBN36yu",
  "key15": "5yp8ZeZgryCEu11KfqZ9ofkteD5d8Xs4X7Q9BC83TYW3Zakom5GoGUNurbEMHa31amX11etCr1Gp83fzWkuQv4xy",
  "key16": "2psTiwU5k65AwREnSSwkaZV9YhgVCauGrF8oabUh4HkNWvvFt4Xhk9ucz48hmMgsLtAMTgqGttXAhZ8cBdqTcEvY",
  "key17": "4WdAgj3godFDdT8ABnWz7BEmiGDtwUnqdscgqcY52qHmZbr6MkHgakKJ9dahhcKVpz8MUi4LJAgYPv2DB71YrJZZ",
  "key18": "22c1tFJhweGERaSGWFu7rY2EJaNegjWeJs8RfU6gDh6ehLuzMdhLLS1G8cm7Y9ccUT69vdZ5T4ba1dkkuGLZTiNs",
  "key19": "h91FwNYpANt8g2BJKdKoaVCAYo2JuxvYryHPqTUbtaaA3KN6pGbydWkVGMbMTwkwiACswAN6JXJtgfoEnMumioZ",
  "key20": "2aTzXKZRrPozFjqhGrU6zZt4snYscjGUZJFvMW8zynjaeqGMd1Wk7MybDuLW4BQ4q5k9stkeowdARi4JXN2cpbfv",
  "key21": "5a8wj4beYXFk7NmjfzSu2y6A8SQSSiqkJq6Sq7ZcoRi7CtDGTwfPLsfRfA5LCbk7Uqzinu86naYksriqghmp5qRY",
  "key22": "ZGdmy4x4bEPsbL3AXmQxBhGjngrn6BpP4L1Qb6bAEPx4h59VfB66JLPmA9joB2pwSFCp5ayTdKS8nLitjLDfbDg",
  "key23": "5xaFF5qEDN4ZMjjm6AG7eEz1snWV9JJ8uZPA9sKvvUSBMGGeU7hBXN4cmkS14oazz71s5bcize5hjDLYMST6n4Sa",
  "key24": "5DtDjDXbX8Y84AoEF83A9rXkoXds6CgaLC5mLWi4FgsZEVA9ama3oJcxXWTjpDRpqooy25MfnnYnvsjCJaA46UXM",
  "key25": "375MU8eKSHJZNEVwBaiBVJiSsW5vCuRjCACNv3vJGaq65gCGAy91PRKS99oCT3FpCxguonpbazMPA4DUzmkkamLe",
  "key26": "2toReKGH469h2c6umxca1TW1YxJwMrUvaw9B77UnWdRFMPQ6yewTFZQSXFpQHWWfLvn7SPVBvJbYXY3BTP5iXgBC",
  "key27": "2FX6dB1Wwqcnq3KkK9nct6dmk9ejqLirAvTURumy7rLSPYPjCm1TBuRcXfW6RBU4deLXnoKRJJQWaoy7qtd5C3Sp",
  "key28": "37Nnb8azsHLZgEkeZLfazJt71gndbtfYm1K6AdrMc6u1gi6spMxB7nUHStYnt84z1yVK6BveQP4wyxQHUHex5nHN",
  "key29": "2feUnBH11P1kRUFEvZzEDQ9zURxTG3AqqzQfifUXig9HRGkoyCYd9ineY2NcvTuTnxP5czb9j2jZuRE5Q1it9fj3",
  "key30": "5cAQrKviAw8y71WJjoY2hxc4r5sG7M9EYvABD4bhHjop5NLkgKT8BXh6ogLQYyqhioQ2xKg5SAV6Lv9C35TwCs27",
  "key31": "4D9uXxCHJy2soQNW2YG95xzPsxHLEw85HApdudX2Tu8D93KFBzATXFJ7YB84fBwD865kstsXbRpcFCJm1E5mHcGN",
  "key32": "4skEb9XQTmvTNKVYkpKvJcE66AWWRdpAQQwdSa2GdSLcFYZKd2uW5H1umJtHSSwD6bu54PRG5r6zbgPxJAF3qDuY",
  "key33": "vqqz6fXS8emqWvMUSX8Q23SkSTBL9NcCWYYht3qJdQ1xYpkvz8upGyDFLGn8Wej5vSLmQog7UgoZUTa85sFEoRJ",
  "key34": "5wp7BdyxfSepGCmwuFVsbQY1g8kVXJyQ4bEY8ysua5wSgKg3noguHZNQTUqg7z86Q9hP5TUk2X2PkYk9b87os9yN",
  "key35": "67b4G2N5bX9Mm5NMxjLqKGhEkrFkbMScGas4pmueTQKXbqkwci1VCFMsBvDN9NxJkqsaDGaknAcNNGWKnwZK93Wn",
  "key36": "33cuCwGoDgzrbgBZTud2zGwsziAqfYSXrn54dBAHpCs4eYr1U21CYggbT18ZgqPnKCCJDb9vzVw7D9qUQAXdFnTE",
  "key37": "4CZQCBSJ78LBjSEzT932au9yVSpNbAsa3DP92X1oCyc23JLgwzJhuAo3rjwdMmijFSmV2W6B9vtNcTbdnYw3Ggey",
  "key38": "4U6BYbRKkhWYqntfcb4isfqeHhB7TKLVpG5VYVPPDHYhj4xa1kSQbB4jEHA9k1GgyXQJath4CSsAkMFpqP9tGMoD",
  "key39": "3YdGUoELZ55ABRBYC1P36xs82wX8bnx4UddBnEVzmAoQKPTKqmRzppaDp2SWz9CEMhZgraNKFBWx31eYL4DYCVZm",
  "key40": "5yQQB1DH4YGv2UwBZ5nFPiGuJ9iib9na8aoQQLkoAxWoYVwPB8izyhe3XsANQEr3xUynzF17Yo9bRmFR1pJFY6FN",
  "key41": "5p4ou1wfKyhnTZdBAd54JbbzCg1HAfvuG2whxS59ZwBrAUgfLNPDXg4Er1gEHjUJqJMCibKD6eTDtxpg97iCduaH",
  "key42": "3cLswpWxdbzRAQUFuMb8jgkLa93UZ4yFFpYoeDoPiKSz9McjbLgXhRFssgBUA1zcN8okDHUZRF7HLgCwW3ENgZ9S",
  "key43": "3fRrrFmjNDYTyPLFeBrHzCX7YKEYDJuCBrTus4U8PRJ415Fx1kaYnaZnc96PXUJGnbxZ7HVmhQtNvxnd1E2WSHA7"
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
