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
    "3v8Q21NvxoKAc4RfKpqMZi6yEKLjD9ZLKwQJSvT2qRpaDdtwQMhZaC6QXudjwHC3id266dcQErAE4YpXS2gxRVWo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xr5oVnwuRuBkmLeX2K9msSYrgNZgp44z8sPiWrVgE2rqBcW6t64juKUmYXNLUqJzU16V6UXtWjG1EYBwBAuY841",
  "key1": "5i4HnZhnEK5KAKokEYSy3DVdubzeSSHJGXGjMbKH8FrzX4DrXyTf5DRa22wWgvVecp5iCq1o6ZNvEvGvnPuPncTe",
  "key2": "2VrqmcmkFkxbkd6f3WGK93KKiq4y9zZ6UDmBWKvHGoLL2y2nRZvrDsAouTNuro2pS3tRCJZPd5yxxbszUKVszSUf",
  "key3": "5X4urMe1v2kDdJXykhkH6aEFveZwgFjxb5owzWHHTX9wtK7XvRyZJnLJsUE6YWhezA2fwHKVJPKB4gp4KZjFg8Cc",
  "key4": "5eZS7niePjEokih2QvJjxFYZJgFnJh4aiYuLUX5wj7V9Xk7bBtAL2brmJntYRjEepa7f2psbFJRFGHLZHne14yGx",
  "key5": "u51NW3w3iVaquM3JvsChZpyukWkxQHsEf4Hu4p4VFLhnGimr6ZicVriWXGeQdwa8V6A3bMkwm4RbxWGm2hQcYTY",
  "key6": "5ophnm3Ry58m48hKXFG1gNj51EsXjssSN4NTy7ng18T1FkHu9z2xXPj4BvDMXoALYFXkVQMaLLnxxkUd6gHoTivj",
  "key7": "5WmKBASqb47kbTu1LQmVvMkkcuQCeuMaQKiscrTBp43Djavtca2yEN8nLvrxgHUQ6iidHyjYCM4e1xu3vq3Tt7JK",
  "key8": "8aSLPVsFNLwifALp6DFTgmmM8zsznSapPMSMBuDdkLGHPULfPbumdrVNn9o966bHBtfEnHrwqaL5Vq3zA6knxbm",
  "key9": "3LNMK81C66SgkbkEvY5qrRDpfQFHNSXYFU59UT5R8TVj2xmpXh8X7HtKRhd887yzVk7yyRPH1Gpn3HSCuRQjZzY8",
  "key10": "2RUUxPHcX5i4r7pGMYAxww58QkUCnJ59qRPud1A3Dcqgf1KjfHcCDh4SbVzL9YGGgtUGtbS3pSfFJEF9U6EKwzrL",
  "key11": "3jbyL1CoAmWrHVjc1V5SbNddC57kvQbZH6THwyBrUt163FtqapxZnfEPB1b75DpHtykioMKWDWxDomch4FQTEar",
  "key12": "5vT5U2pYuubBd5SnumUA8hri88osLev92zDoRuvGeo8g3UWsw7PoSJVq1mLFcbhkn4dxJzMm7suZ7NpdQwd3UPP2",
  "key13": "3XQvknywXhy8WmLgHd77C4dhsiHnn2GYomehZRzQwLaJbwcLGnL5ExqovwMcyw6dBBhzQuFnym9pGmTVPY3mEeo3",
  "key14": "ExTpnVFpmfnC5ozRrmvGQcSHkuFo9SZXHanXvLXCnRnf28mBWrQFRtMrBW9PspMZRuiPAYVwD17ZaKf86Fmj9gz",
  "key15": "5Z87Y6xutP3bRadt4Eh8daYoxQcJeLkqJFkqyp44qybcPZU9jTYsYvtdMbN611cRtQB1zxvTzNAZ6wMhef6TsMqo",
  "key16": "5XeMAxz6Qb9eRYNjcncm3tsggw51u192zJZXkVuHakbMU45LcPydRyWJ1h2ELweebdoabCib6nWdNgr2HZyf371v",
  "key17": "3PETbTcmf4ZVZdj6QxMavWQC8v28nDDKvUimCAVSJBdjb4bpbGtS1vx1uehu5BxFAbVPED6gChafTaUYNA1bFJPq",
  "key18": "2isCSbDbLCG5Sj15fYxnKyhrzqt3Bjb95ThqfUdRuW4YD5gqPTenC4RoTh9SrMdMyLeYWF2zeUYoZP73XLpZNJ5K",
  "key19": "5mdaK3oLA8gGbtuJSK6b71b8thUh7GeWioNhjxaAjjVdqMBXHw9dKH2msPj4WCWxA9Cxrf6sDMf98z1q1sE6qoaS",
  "key20": "4ZhCwt5hpW6EMhTaPmohjckckvfybnNaipRPt2i6DC19YjwioAJNzzF9tzbGeupuQ3S4cVexTbr9U5fdVGBY6Yhh",
  "key21": "5i1AxYJ2MLwKdBxEb18eyK3EAwzZVk1vnK6nZTXhGPgm1DCHb9wfBsorf3jvChi8JjU23iK9BkSWVf3hx1FSmR6D",
  "key22": "5bxEdYZPBePAE6JehXym7VqsirbHC4raVxG2VDNX19aAPEoGX1bh9MTpVjHz2wgxURNFXHG9xzdvzv3UusivsaU6",
  "key23": "qZgkT1QUDMjF3hSBSTp5fdTUzh5CTbNmGPYisxYJzbBto48mz7wt3FU768Pt8N4n1CfNkwWNAVcXWFFte4yNTNT",
  "key24": "5maJoXPDeyjZAXCszG68pVAMz8TMjVrKcwwRsqkKdMPwAEDJVuzn6vTRcMEfsyYiYALKgtvTc2KeSNzqLC5ofLrx",
  "key25": "2aZrrjW3ZeqfuGEEw59hno4t38G5of3J1Pm9jUFbR2fBXc598yYZu1LnNDgJxUUu2cMoaexaJFxwuB4rLqBQ8ikQ",
  "key26": "5UbzgVAd9tf1ruuSHaD6jP4oLrxf8C5fda65YkSkujyAQKdvc8JQnwgCdiPFMiwmnvvNePnE63Ur7aw54GxuNeVP",
  "key27": "3BVBSUUDqrXLjUgPNUwW5g2KX6fatwAdpW5WBH6cGsmXvCJbCt2HWteBkvACV9HnxbV2P4NwbMCYw24wjLGFRSnq",
  "key28": "4GYqU9Cmuh8nzd6DvWqpwer931nvFuJvTjm8v9pJnNfRkjrcnPRdz3cZ8WF6sZM2QsvsJowtTNbhScS8n4dU23k4",
  "key29": "3BnRksmjgea9Ya9hWZ48k3YZAoy5AqauTANFwtGEFbGVVczGnXnohKx8mnG7HCPwLEpDeCntRrEZ68qKpecP1T1L",
  "key30": "4iM6pnTrSscKyUydu8jP2FVQJj5tBGKMNELxpeN6X7B1MEopPupfFA1hLM7VGQ5ERqTDMUznupWwAtA2L2RVnPE6",
  "key31": "3P1YAyRBj6BSYjqrwmsN5XskNfHtBbFPeQEhMHGtBmcdQDtQWA79L5BTDjR4NbY9ChzSbhCyk8V6GrWqFDZ4JcZB",
  "key32": "CwBr5g9ZByfbhqyV2LDGjCfDfMEkGgyCNj86kwoUp6ccgDSXSEAcXYKFGvrfP5Mih4DTmCbkGk4meMFqhunfMzU",
  "key33": "5ydaDVwF4L94YWfXqJG2mGuja5PGGGhP7EB1dQCuMHv8SnCFKyyYiRxRuokykXvEwR7zwNKDY3C3qXSv4qneHs7z",
  "key34": "3p2dQqU4aWxu5ZtJVAqwTgrKPBLb4T4C9UCPiDEXELV5xKjXXjccAvCw6MfF6xMeLV7GowRuDbqLvdKTEW3K93Z2",
  "key35": "4352YXbCMsRKrZ175etSrbB8GPSu4JebQapFSXxVRjELdZa9SF1brQNxx8bqt82U1QWhvPPP61UvwNqbqRfdKknn",
  "key36": "4h2EyT9ZgJgn4iud5JMv4oSd59BazYiDZa2E2FjNX3Gk1M1nMYPVXTNKcNNQAZzK47zEYnP9miMGWab6ZCootraM",
  "key37": "3Te96Tm6pZBmxbahBnerNz42PD17wsdkZykRMMCc4ycBFgqvSPtCyxS4pyqWxocKkaD4wTf7o4vomg5QyEhr5fvE"
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
