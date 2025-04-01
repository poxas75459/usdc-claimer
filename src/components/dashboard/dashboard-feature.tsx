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
    "2H1bKVXQEzE35B5hj4D4R26R3dSybeHjP6TJZ53qsSzhUkZceEVMZ9jMEF8ca5zRjyu94PVmzFpWdnQd2Hqu2m7D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QzueFoTzoATRDNkKuJnPQpJJhP3EwWd9Cpwn6RPtbpa8DBt2EpxkEC46yz8xiToxPnSQs9AZWSeftwNE2svf64p",
  "key1": "4xSvTTcdTWncnNYPruLQdEc2zEa9wbuF4aft8vEMoyPju9AmVzdr1YYAV3S7JoTKtV52Lf1imz22WiBBVdd6iszj",
  "key2": "5XydSKWA9MsBWFo29w74PkqPve75wbfwcSdR81AF5EuCakxJVoHLupuuVG8CWhJYVzC6aDYHbcnFgjUPtgz8HMLP",
  "key3": "aiP3ywQ9J5bdFFrY6eFLEuafueD7hi4pZdacGXbR5GJdMJo4QQK6u69Q1mEezQhVE95Nr5bGRt5Br2cTtgjdQv8",
  "key4": "3XcYjzfQXUNpFwJntXzt8Dqj4y43spEMPKAq59syLppfHzYcAjxje6TWooXYiFVrExwC1ras2CefC1kwoj4wnn9N",
  "key5": "42aaQTnqx2FF4mmJN42ngaoACZMbARScSjVYiDvZo6GdPby6JjSWK5PC3vtpo3UYKSjihQmqfBjvqA79PM66zZYi",
  "key6": "2PVX9ezRkn15RbMaya8zHTG6nEDmEhpn5yQfHCt3CEjaE91hoZLVcWjG3NwNigU4nt98mhTLEz6inK15SnfQ4VMc",
  "key7": "21Hmz4AKH4JZjJEmYykoEXJ12eybyaLjNYevB3AYoJFXi1x7a9M6yfJuhfLeEtKpkdoKNtUKLtiMo9WraJ3VNUcB",
  "key8": "vLmJj2bLbAf2kNRVotRomJxFXLVfSscAuQcZ5w2TG1UEpMpQNHqNKWcGauQCVcgXRGpBQLuPEcfFVXP71WmNesC",
  "key9": "3iDhP3EVUS5mHyPsZzrarmvZSvWv52aEXH83keWa12c8QMWG8tuBna6CCVzXDvdSmdwQrABkjQkLket9mjXzqTpp",
  "key10": "2CLD9rQRy34E2UokNVfDBrYraU7mRxxeiJkAV7N7Bv5nDzAfYmpcTR2uKswekmTkRmyVWn79MZxwTnVStQ3JspDD",
  "key11": "4GW9EJ1h1BwnthuRNGMxpzYRX2LSNZUz3JYXgVZV8pF4NQnbdHHhd67pz1qqAmecZNyCW9tikc535dFsxRzdbDA1",
  "key12": "1JvYXusJPyu78dKtS1UUaf7iVToV3oCjU53ioAGBAHDBFivWywxuRdtbESgQCSNNfErFQVidfFBy7g1hfHDfezm",
  "key13": "5Ln95xQSTUPmU78UXQFetZkSPvjG6tHwRBZ2x8xnNFvuuJXS4GcnzgAkzVzxRaiATFpJs8zNZJaws2owYtoxxs3F",
  "key14": "2ho8w7RfwPEMX4xm1ezpDbXmGNxwVKqu8FwcNLq4Qdaut8Embj68a9DbctWy95vmGxCz3DBp3RB4KW3cRZqHo7Qu",
  "key15": "558zBiahwvUbJK7LNDL7Jh39pjSCPkXnmHjTrowkBGA6xwYvnB1UBKBWyXdyPN5TQnyEhDPQzo5HgfZyEWaNrnkD",
  "key16": "5TDWx4QURoqv872rJrGS7rHACco9XqqasNzywRNYXd4bDRV2aeCDVZP2B9yGUxZ7gD3YtmWnnap51HsP2uPaFLQB",
  "key17": "JS99qnaXj9m1fGSz7FsLq4Xi6G8a5apC83nVDFuGp3pDnZrCFo4uaxUTm3MjqUW4uUNSYV9oPCLMYKTVn7BRjyz",
  "key18": "5hRj8KdnffcJe57ELAmU4B9FFiztLhhdXDwtzhPLj5YYXPYVhYex4PJofNqFK8XFN1jwAsX9oSfrGCzaAniSm7M5",
  "key19": "2UJJoh6cNSXn6PA5rqC76rA3m4TnCk2i6qfyWGv9wEnFkWP9Sxsf9uko9aAufhNYsYiVCDfttU4YP9Jf7cwzvgqV",
  "key20": "7xRkLUfUMmwDBCoEhrZDPP3P14fa5ikYnL22UheHrqdreYDGCtvzXWAast6hv47iBu5PRmnPxnoM1jG1RXAhvdc",
  "key21": "2TYXb9zSbCZWhMirGd14bKcAdYj2RBAH4qQBdWLMGqBRBu6DcGhxDNdHa42asdrWWtAmjL5VcC3SpLujfGP1aqLU",
  "key22": "5h2VH6N9NBZK1YntqvdSqHj5FcgFFZ1nA94qxvB2xLGNLqSpgAsmuXSUUkfPqBhAnw29nZe5sq3kyoMmrEvysQAg",
  "key23": "jfNjbuW1HXJUypoyAih3tuXd3Xcj7B8xABhjyz5T4rAhSPjbk1Uw4o7wBKgbuCuLZZ7eeX5CQdLyCgcvRHf8yRk",
  "key24": "49tMeS5HXgBUht8QqZvnMiwq4RRc7kZtPmfuFdjeBaApBbAxuwQa1ZQP5veTSJF6YtpVycPFkcKvWkhEGSBVxqit",
  "key25": "5xz4TKcdyDphpCmiYHggxcrGsbZz6xmNxTNM1wAdzesSMW4G4ePypz1MaE93BSqShKB8vv59WLd7Vpk4URFRkvyS",
  "key26": "3zmSJDjxRPTYGd4y1QvvQ49kBya2rS47UkLn1R384JdUQC4Xj543H8ozEnqwkv4Pzm3TXDfJG3ZzwqroUQ9w6pYp",
  "key27": "32asixZMz3MjsRD91J9xcNMNc5fAStxXFQdMxKHYH8TF3z79eVsPtud3Ftgp3mimFnHP3Pc9of2fey4t2yFS1RNt",
  "key28": "5nSMMwTDfu4GHdqBfHeRtvBf1VcDrEeK3e5ZZD7PnPfWhbmwHYqZvfj7jsaq1jiukoKEMenrW1J4fHRHJhvmMMhM",
  "key29": "FHpwNgScndkCe4UwWFwYyqMk5ydNXPJ3g38XSqnSDeoTjh8n33hKtJ8wyZahZhPNXzs2hbJRZu8ydMf4Z3Xg4FP",
  "key30": "3XPvDoxovam1jusdH9VA9Vgg89v12XDT91VRoTU5ByYYAY28pTtzuaF3x5RoJknn58Vi53rDEcMWD2863WrNdmaj",
  "key31": "224Fqo9HRND2BgL2cNU1QnmcBPXK8CWVXVoUfrp8D9WgbBzXTXTtYTDySDubV2tjzwV3kWfHDC4nbsFJcxSRtxW1",
  "key32": "224ahNZRBuL7YdQeRxPVxzaEbjxdyKKPJRbJkzdAL3Yew4keQ1gmWd2snXD3QEqdKnqcqspyjQxdB2MBAfEbBxyo",
  "key33": "2nPkn2nGHkozHzZGwTFCEiMUr4Twxg2dmwhVCP8a96UAq3JM8juXRAr51F2YrFqe6thSkbNUHoBs6eLtWuZPAfsB",
  "key34": "5c5ug3gVruk1KmK4Dfmn7zpcQwzrpiRyFUqoTunLsUFyAcEPV2iU9YBtk7d2FpUMWx1tuMG5JANRUgqy45sPunGq"
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
