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
    "2qFTEmqMGhDSAQqCDGYuoTJEVW6xbzd6sgzKzx7iXcZsjz1w1ce92FFpLiJsT73NkXfKcMwKgFAMBthAZJDaqiDK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bQA2kXehYXusVbuC8uXs7a89DfKJVtW32w1PGCzjb6V1u84kMFGnHg9RCrxUX3hk5P3rw1fgMDJHaU3UMrACkod",
  "key1": "3FYQvKL5WvZFFBNdvL3yziovuj6BfAbu7WXsUMHUYAvjAVbPaNrcx4kjA1hUCK6bGExEqMwwSj2TARoDUwWw1GA9",
  "key2": "5YK15bQQubEF3wixmZ2H8S922GJZJTKnBB2Jb2jnj2WbSzURAK6k9oHKRr8LCw6nXKxW139hKmEyrquKpojNSXds",
  "key3": "4WJDz8q5rooAjJzXykKN2aneQJ2jkNk1QMGq4ropVsyWKi6348HL5bVeZR2p2hYEJwkUewE1nfyncAcmjpHSEL8r",
  "key4": "2StQUc37ZSUmBU6GfUxeLnmhZX3nctqtfBWevKku2Z6URw3teCNQ7cStrLC26KQrcfsQF8oASTgYTReM9BYrdND8",
  "key5": "2zA6p3LHkXVFku78HG1if3hXswfhdkUY8djsCiWGmvuDT2P3VPD2i8qWeMgn8nzLMrKuNzTzXUyAGxnRAFmoJSYy",
  "key6": "2cuaUXRt12X636MLjdybwBT5frRnKv66S9R3E4Vxmj9rEJJywzVv9V66dS13Dh41AVsxd1oGKDRy2h8g8DJrdsZ6",
  "key7": "2FkRtGWw2cjB4oyQxHc85sjh1uo6MB9qWei5CKYv451NY4Fn2GZ2s9QBSpdpVNyvXKrKZ6ZKE2oNomwrLdU6w5uV",
  "key8": "3geu2STEGsiY9sjsp4vMVwHw2sLqtHpMkerhtsTEnRFSJ1febDnVJC4AEwLZdw2Rfj3R9zY3qK8VKhgtuVchigke",
  "key9": "2xS8p9fZSnDcVGyHu5fRCqZtKctSf3La12J3n6k2xU7wRmqxjb779wXzZRDU3JHruNMVbbyHS76b7ghuHBR7KQw7",
  "key10": "33k7LKQdU3BjQj7XsuHGEoSgMkS7Uxvz7NcsBZHJQTgh2g7K63TA5z7f13fyfFPyWGp2MprZPL1Wyz2xy9Bo2Dco",
  "key11": "25Vrk18zSDS7tYfaWNpGXUdUudbfkWz7KBJR7qvSodfpkcpPkusXU26wmCYMki4SpKiK53ZjC6tHmdM3Fc4LXp63",
  "key12": "4itgmycjb18W9npKuaBCh1PJJaD7mzy1S9mgjfUfaD5mYUhUEzup2ekMXfNZY1HySuogGeNjguUbh93WjMeMoV6b",
  "key13": "zndWR5Z48U1PgWeSp3hMxwPRKAk28ypfAy76TqEaynD6LQmzagXYu4YcLSv2P98kwk6jtJaDKmXbzGQnYHNFrV6",
  "key14": "xQjnhNAHSNivq4w6GnVUhuYEjiRtR5VKa7GuxcGXPzcsW4jxPBEWPu6Yi8qynJku65qZPniM1px8F4ezGa5fm3F",
  "key15": "2M1LGjK34AZimgLHfu9xYrAusm16rc9wdkg6E8K2PKtgsc4HQkeKY1fu8SJieQkUeyTrryHrZPSes5Nz564b7Xfc",
  "key16": "5VE5LDosDvX94RpcDXxd9ZotoS6MSqw3q412xs7fm9ydUCQDR2yvAgEZm6ri8LxhZ5D9zVAjyr3ejNVoQsWxmPXC",
  "key17": "2h4gP8FPwbKwMTmq5NEUkX9Jnp2nviLEhZQn6LcthqEWVWP1MHK8cuV5UVpF8FRs4Wy7JCpak8CQioQjvgEhDw7A",
  "key18": "3qS5aZGRrYY8emvii19S2Eamoyj3sEbZQdn8enTutjyBjUjUz8aArWtQi1YPBu6aXG8Sg11Eb3PzQC5Zu8z3koT4",
  "key19": "2irLKieFM2ikfw98bxJ3aCEwg7ZPq68MjnWJSky3B7xsHRPUcqnREw734sMqKm7fMGZyW2tt8ECdpEBaj1z9EVzo",
  "key20": "4kt8kF2rETEXifKELx9WvqZEY8ESGEnHzUoygmKCZsLmapbCmZb4sSX6PVQNNm7xjmXHcw5kw75ge8mQPL77proj",
  "key21": "2t7CLyHzMtQbDSHgg5wuBvErwSMvSb1QY91SYgmjEZCq8PDMXNXGQkcLF6iqkayPd6UGbdxeVKG1E2GA796PH7q7",
  "key22": "4NMUw1bywyaSiLNheHsa79FotRrfr1DRQCcgNYdB7FUPkFjq2ggPj8Q95mVTqNZogHj4EZeDmiiuZng416GhC6Kj",
  "key23": "evF1uJpu7MqinDs6oPpAM1YXYe8zLwuGZZ3Rw3dHCE4Z9ZpVBk667xzxxGLrDmrgohd3mWW7ACiyxizQ1NEwELi",
  "key24": "2zvC65MvM7TxPNBm6NhR2D5gBY61fQnF4w8d28rx5VA6c8MopZtmK2c6F6jPgSSboQt4CXnn13UG8h1CdRiKrner",
  "key25": "64yfokKdEo1G6NEtSFg7adf3oPrtmzAnbxVZVrakSbEGSC4QXVXZEVpznKfXF2H2aJdBH4EQgNdRk57CvYksGzU4",
  "key26": "xy87hXn3smne7zPLaqhwj9SfTU5uQbZbLCmFFpj1HCEqwj5NZwEP67M1bD8Lto3ta8E62opqhYYgR1nhye6czuV",
  "key27": "39Y97XeymfU4yLymPeCqNC6YhDdpuVv1dGoti4XFgbRZdrLwnWJ3QDo8nG3SeYB9X8sMeLn21iFkjpSk3KP1SP1o",
  "key28": "2hdZq7ZZAjJ4fk2P2uBeeD7zNqofAsGzqHQ6hUWvYkfSVUfTkCX1LLA7yw2bxQCQymhEXRhrBnoD6CMmhmHmMtso",
  "key29": "2JLmtFRtSVXN8nyQPxaSDapvK866Cma47wBQFcbuXwbnFZD9WGNJxmvk6HWWZ5X8mkscEdfyxkfJ5KjD7bH3yGBJ",
  "key30": "oQdB1uNXgLMbAZw5xtwQXaAtUhchbGYqgpxkfQGNuveR5uvauwwVahhEZiprFJfhws9FVAEoKtCR9pF6npyoVKu",
  "key31": "3Lh4141RkmebaMuD29y5kpoMEEUqxB97qT2xs7mL2zyxLcBBPDhu6tJeJZiSJvwf3MPzWPEQjfqP2aBhHTjAKpRE",
  "key32": "3ZVkcTktQxNfG53KeHuPw3ycWruqHQRmnWRTqPyrufBLJAHAXHXpQx1Xmbb3S3h1Wn3daBhhkf45UHxEQSv1f3Ag",
  "key33": "5uCZQ8wgLkoPYpg5ANxLXLWje8w9mkxq29pQDozmKnyXWc5ALcWoZxhMCtNvgZaHSYZBU3XpjqBz1FsjgK6mm8GF",
  "key34": "5zdHTtJ2vdApeooA2RhqUsvpRHmBhmPmQAk9qvu6DiUSXYoTrzhxPbSd9XRzr2ULMx5rAvvqSki37eJYyYp2ag8q",
  "key35": "5Q56bG6327HvtnbJV9sN6PcP7mkyQWaSZmaDhEt7UPdhS4iaMCi1zjhqYiXv92GHy8drM8eECNWErMtYKSgpmrUY",
  "key36": "4UMenLTYWJqPpDdkjMg65QEeRi93o9EHXPYEvrZibKabACa4fARfKdSy8ZFjtLcxTtb2dDKA5rLDxRnsrf1fVZSX",
  "key37": "59z5h34AkxNK4xEkTX82r4De46QWnpvPYdpAqx41KsjxJqceiRSMw269KzL6yEmYHKTZwaJiwQaSeveoYrjFXDgm",
  "key38": "38amCeacZfpfZojNTxUUW8raVryLguKHUuNe7woqzEeySVirRJs1efVQHLcje2GnfQzZrbjFuVVwdxgaUeAQPB4d",
  "key39": "5v11NYn8JyMrjvshRzBf8RiCZ4AeERnPk87GxHhzRpTJdBLyieMGocJvuEsVzKnm1o5Fn5u3gGrFXhAtDkkfZDrr"
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
