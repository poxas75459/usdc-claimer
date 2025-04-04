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
    "3fQEte2zEZUAtuRCxR1JXJaqsSsS2KMMQyHvBNk1AkmPHR9g6uacoYy6Zmbw6eoJHonNQRkLr1aMfXjBfXuYbCr5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "H5xZyei3ASrKyUgXWo4VZJdoEu1n4kWudPmsGtGewmN7wcWGbGr8A3biHC2CBRP4HLB1Qk5FMgdZoSzQzeC1iAz",
  "key1": "vtm8VCPauocdChtn7K7DzJhst9ai4bPnfXMYMjZCS2oGBBuKPMs1hyMnfa5LPUQJmTF8ntUrHgXcZBqnc1XihMN",
  "key2": "2zUUifDXukYFYvm8MWNFR9a3B3yACZ3B486zgUTWxM6Ckiv2xE8iN97uVbHUVw75DSduGkdjNX8kWxeMAVzqfn94",
  "key3": "2ZVheG9H8hydYSnWfYMUVYtVpoPqEFae9tB5uD6Ac8UTJW5ZKvedFScgv4eRjVcWcJ8g55bUJR2jPd8cEK7oaDnA",
  "key4": "3JQWDBQNfmNKngfpc38wjnGeE4DFBuuW5gjVLCAPJPAPYxny47ZsPL3XpA3SDTgwLuRZ1M4AK9G77CaBxNxCCfJT",
  "key5": "476TFoT9GSp3obN1bym3zJWTRsCEqXcfhDK3MYDmAL9pgYJCqidWkL1vaEkq1sPPSMbtt18Zed1mopBdR1UT6VDD",
  "key6": "63j5FoXm5XEfZoPp3BQqEVwphVna2GNNqpX3MkdJm7bCD8U5LLThKQz1t1wsXUZoC8arpg1rVAGAwZAnBgfypvZR",
  "key7": "245GfShQcDXYNWK9ngEUD9cPdnQoxwvNr3dsDR1fMiRBWRWTH2kAZhd4xPPpG2ACUkJrnukNxhzxcxtq2NDLVjsc",
  "key8": "49DLnci6zCzqMdVVtVudWeniWdozNEzAn8fjkt4ytP7Nz9RQNmX1tEcnmAUaeAQty6WTfG1oopumsqSLUUfGbVVz",
  "key9": "KEjcJfPhJgTLnrkyZb6DTzwUwsT8PXka57j2cs67MZtmBTUy27RJUfVcczTj9hdDsoSbDZ3uarSSbmDmRcUV1CX",
  "key10": "25XQH8isUXtjBLE82hC82J5knhnLoVJt9BWVDkmY8wA2ndf1X4KdRe6cxbYFf2hQxpg7H8C2PASdVyFNrru3iLkV",
  "key11": "2Eb6vK95pJPSurGAVC2C2tkSaFGRerWaqRYXLdUF9DQpwBrpmGPMNJ3eCHfyunYA12Bebniiw49e6hTo88iA88jn",
  "key12": "4fHtdrkV454AKFx5LuyjojhD7FVr8gY6DPEJGWtosnDnKwVRbAzqkZfhKWhEDeQuvhFY6bCREMv2RLgRG7b3xdh1",
  "key13": "5PLjyfoLu33hSoTXu9dajaL2piUJGDdbiZT8FLjWpaRxhAQbYKRD9DAYHMGAaD1LaiPvHPsBXztxo76jdoGhbzS6",
  "key14": "5W3p9BZk5jCJ7ztmHdyg4M94hTTBZpJ6jtZ6Lzyom42iU2HPFUZxf1ehb5LV84ZwJ6kz4tbGCnEpAnUHJQX73x71",
  "key15": "2qjENnPoAqvd9N9DSQVpLp8F46k7uvHYd1DJRusdPavE5uUznp2bxv6X1W6eoGqjJMKEzKtAokQT879pEvNLWYv8",
  "key16": "5qHaHVXKHPTFue7XWGFfwiUciGYe7MmwcQQymedi169YbDCxy1YC5a5D73pzb86vQmmPYGgeL8PGf7FsehpbNmcL",
  "key17": "52PEFdZmKPSn4SXY6TBY1ajctbvoifaDTbaQv2ggt8brfoSKus4YVkM3FWPi5RDBx3j21Jug3tdJ9xFBL5oknJJ4",
  "key18": "5tv7SBdtrnvKm36Nv8CLt2NtuPb4nAJsZNY2b4p4MPvEfac49kRc42EJpftb8FrRuZ6ddgnfhD5F2uUstMcJQKR7",
  "key19": "2aAqVD7aaZuyxLFo1QAVqoWdMWaTXfAFcKJyx8pD6oQZicjK9erQCYg4PS4ZnGk3ibnkQYVwcxBAUKX1GCGSBkVu",
  "key20": "2Y4mULwmjhZJn5uQr8oYijPCEGMjk79bHUEsWsrCoFEKcwLXcYi41vHowaeWuSTfEBrUkEnTJWjCZA4Ju6bcUGsp",
  "key21": "26ahkRz8yetNsdo77NLqY3jHxgeDmq6Ee3rUJsa8UHxbY9uzNHHosCQGS7Qqq9tYPrEpenbYrKuw2vU1MefwEBjQ",
  "key22": "qmBZdrJe9F2EKnwPookSn1JZd8mk8ebnfZTYJFnNVKMyEcnAy9uUNaE479VjCaimgmWjsokVWUW8NSpCCgQmG5g",
  "key23": "3xb57dc1JkLcXs7r8uVnYoqFjCiiwVAoL8JTrwcM7WkajPBNdESPo89F2EzHZS4m1aw9cFHQdHxzXN5RB1NJtwYs",
  "key24": "4xB5jtRHWypR3xhqQ6Z6PrNmnNqz5w2Rm4Gn8pVr5p37bPXoGoi1wPL5PKp8A5Kig4XaCN4rKcMm7p4gBMifZmeu",
  "key25": "sr5youTwgejG5Ce7jQsaqs6cFqcgHraVeCcN93hFtwtBcGn67RC5kX5uo1MTrvfELCmp1HPibkt67pp2RqyQPxK",
  "key26": "3jyS4Qy3msZxRMtw85vZosusXmEmKgiBN1K6KfgBZ79ZBCmYWZUsRR9hJ4WTQB82W8w5kSUtzwhWBcXWmEgXPtPA",
  "key27": "rWhCxu2zJkXQKXtrEJdNP6ofNNfqSMnP6SKgA4GKsjqwVRF7TqrtXwfH7iynY8VpeWYUuT2cdjnf1DtCHtUbUU4",
  "key28": "5fXJbi7pD66U87HrdKUgaF9Q4PkpUAcusFvRP3wzsHV4hma5Fu6uu52ZxGK5C4vMFcw4PDYhPo4zL7MEMtQzEH45",
  "key29": "2dyjHch3vjGdaFr7yexvUwb5HEtAgguZWo41sbMKzKHwCvQaNgp541ZKzasfPZjU4Z337njS2WQTvtQexf7sUrnZ",
  "key30": "NKSMtoJq9YjNj1Zn29KhuPXCGAkRy1v8mtp5sofRhrWvsTrk7sV6CDnW9sNZkyypksrxRTNfX79RDqA1ahBTCPR",
  "key31": "335cht7xXX2sL2KtaxXd2QPBvW2s5hSNPTLoc5XfShGZyMmEwFiZgw8egrgDngGzrswpXpFeFejtKYmx4NXoERUD",
  "key32": "3mz26Pe1BzLbLwaJdoWVVGoCvC9ukRrYnMVbY5Fw34JFWrwfQiD2Y4KWUguBUeVkqFQhWi7VZDPVSoeFigaKnjwg",
  "key33": "42w1WWp3UUUhmm558qBKCcgvRXDhAqjzfCuhEd8YtRARshtcn4FNfdW7iazm5ZywRyD2TE8aipn6YBEkxojhb2bd",
  "key34": "2BdfpM4EFnm857Bv6Rb59sQweG6XUQWaTPgPZLhrhDzF8z2pMW9Z9LtZD5UMJCW8XVSnAtbUQfJMr2xJEr5P3tNh",
  "key35": "1ry4ftgUA6dUmfg6wBguEFdSaUfQkRi4cAhJ4tzDgeZsokTf3zhVRunKReytuVh6esULWDhXyrMX3k66VBhYpL7",
  "key36": "EfqQCyuQJtnfy7xGaHGkVnyDvf9yW3i2WDs6UeS4QmydemjNmh7afUQkBEQ2u5Fe8hQcj8DoJ6QSb5ZKgZBc2a7",
  "key37": "5sTNjjjsZLSFi6SZ6dVu1hciqToqXbFf8oMxx4HZJzn2NkiwdGRyfpoSnkKPGFTyUj5s1q1fEi9U1qjDAvj39wm9",
  "key38": "2HoCih4NfaSqPr7RG98wt1efwsbS8cUGergdT6XL7gvQHJn1gtHJtVem8viqCn3Yc8SThMtN8VgqmndRzfLf11wr",
  "key39": "jNkFiywSXwJaReUcVtHpEvsxP5asPZaFMGdvYeDgPBbFiQKiHecMd5Cz1cxNLDqaWq482vwjGFyoiYrWPEthaYN",
  "key40": "ainM4XbfeahiNiJV9CzgMZHGYKfccUVg6irZjYZRy8RDfn2wEbuvGCKHHLmqJ48zPqJXkLe8KFABTYnkoZQdpLU",
  "key41": "cP9gnVvy78zg7XbU6Etck7YpS3EDJiNgeQXbYZgn9xLai8t2wJMNZZuNhLGzURSn9qZqG5zLcqGKR97uE5e3c9v",
  "key42": "59CrgRX4zyoHFfwkvrRMkoNUMY7fTXckcYUpNSD1NGRKHaG9sQUkJFjkdq8nUEFg4vktZRFyWxN2CaCLHo81dUNu",
  "key43": "2JBnvMhnLmGEY9at3zHDVGEN1in94xtC7e5jczKDBo3QCVzPVnMLNFiZVH5ZmyNuKGjJbqpttipSYGWgRN6s96nv"
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
