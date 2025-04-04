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
    "2tcFEQL3fgDTpvTWwHBjWau4TGLiZMPDYjkHFaL1NzA3tYV4tnNzNzHBbA9qhATFta26a5hdCCzsM6YRg8QGBChi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5prkvfq9zn9jYb6LeXvPyPBJ9ow4UaXeKV4fKgFxpptzfcsrHab7mPqKgnGQwWwfKKieSu4GYw3VYphUxbeDJDkT",
  "key1": "4XEQYYfHBPAppVxJdxeanrnt2G8xaDyp53mUTw5S58DutoA47WEdgc4UaYxKjnvviqRTWyktGBgYnGzoHxeBmdND",
  "key2": "5AHB4veEvN1wdJFXsjgPG7iq8GnK1Pw1QGF9yh6EWQGgyhnv9Smwu2T9MHZ2qspk5MrXWH1qdJ2xNkjgdr2BFkok",
  "key3": "gD1C6inPZ5oy2YWifT1dbGbDuDfx7TgEcrJcpKCoYcoCqhrLkceFpCkzNtj1XRVV3z5VJfmhTRHzhJ4uWFsACbQ",
  "key4": "4D3wNHTAXQ1YCmL9Jo71s3mrFkAw16VYZdFFgckZrk8NksUJL5r7VD4gkBsmoMUJF33tHi7CDjm9ktQSJs6HN42M",
  "key5": "24Q67R59n4DFwsmJ8BEJeUkbAioDBLr6HZM2yJVL2XMuVYehTzNXKjQNnmAt1whBsppzBn5fyxftZBS36TNNxxGH",
  "key6": "RUXAuyrgyyshpUZkCSA3GdC6R1Cpy9awDrQQmRSRtqeAmqDK38FXGBPgV73ibiXSkRRTR5fMMQh4sNUaQQ8MNPZ",
  "key7": "28FByxKEdBoycrLgQe1QsVd6ZhmQcmUhCPA8me3AJ452roULLGHQ5hZQWgsB4B1RNfCZuGZFcLmHoqkZ8gYBN2Wk",
  "key8": "K9RntobFXtQGhucMcnk5bdLjFTEenVbVwXFb7kUAUj3r1QDJufqM3xM28yEdf4AAuXwYLpDQcnT3v2W1TuAt7m8",
  "key9": "3otGLaXthwC2BM29AC6S1KEdUuACZnttidh2JsVLsWtTHLpihnHobnPTzc37xyTt2eYy8xeTARNFbqqSMELoqZ9A",
  "key10": "5sCiQCRGsG1d7MsW7sbfz9TbrDpRZvr7gbvDP2LV9yWqaN5L1fm623hJamF1znWfWXZ8oV2PvabYJ6hM1Mwb8vVZ",
  "key11": "49TYtf3k5u64FRcYwyyiooDeeNFxmVVFKZiuc98DJHAbQCJXrPEDaDKHRwUYomUERYWFu9BDoxwUxzArn3XYnL1i",
  "key12": "Mtw29hAikxZKTmfNmoLJYMTs3PcSbYrewHavbYTxuoe94p5XSrqBgLBmLM5e4Zdb85eDB5dTVYRKxYrhx2Kf6F5",
  "key13": "qjcvX773wtnEuQjpzn9HUAtccBWzEFF554hp65P8qfLvLi9aWq1dChtWoDfuTpdSSFAHBQGGFAxAmr28Qp2SRCh",
  "key14": "61omgzBn28FkC5sEjaSWY6GYWwKuCDy5NEjBGerVyJXiVKV8Grkb1FtSe8NmEAuCLT9EFbgmCpZr3jddT5GMnvvm",
  "key15": "3Y92crxtgCJ6r2HRT5rqbnUnJ8EDaaGW2NG1mUS5dUeQbr4PX5NhAmueRikiCsuLpeKhiqUFYMdyxAmFTYLMqPPZ",
  "key16": "5Di8cqYCeuDY3XwCJXPfqbiWVpEYHRUeWPQ3mdSXWt4FZniHH8ocD8kk9Uj5Ubzd7xbntbAdhfWM6cLdEgraSDBg",
  "key17": "65kBCTrH8e6dEG6jf5nxbozrgqvph5jZsyXDrgyD8aLAuERFLXExAYF9UBKYXm89Hvqs5PmYgvxRQ9qXL96qcxT7",
  "key18": "4EQF3sMKNUwzyvgKFYmtLtjFz6QUF12g7cSGuoCojiWhhZiT7mHrwTr3jBofaVb1MBa6a4bwY96hy6oXDbkiUYMX",
  "key19": "2hHd8zRkqebv2tiWacqCRCP6szGbxUZU45ZTmYyP7uQ2QXvJUB1eUSNUTuGAgpbc4KWBdCHFgqPx5WxFhwQPvyuU",
  "key20": "5JUgAFeabScUHDH5Pt38ao9PVPZgKDJWYz3k3iFLmdT8Dr1LtRvEkpjerbW5VaH91Q7vHhUqamZFrHDxZz3axKHT",
  "key21": "5d1sdnGuL5ezT9dRfje7mwVK9WxPWktiGqhNk8qtHVxgooHjgCTYmaYMnUpDrsmKYzXezuQWh84a8MvzDz9Eri6a",
  "key22": "2PZ6cpiydgHxpjD63dbju5Anb24MCPEGSmuq7fx8qrE1g7oX4JQZujT2BkCNem7ik7fxw5fo9FRxaSpbSuqvvXXK",
  "key23": "6pGR3WiyqYEVYyYZ5kJSgQXhntymyrDk9fSuHTHBVUF6x9iUQ3AkLmJW41L3UPnWnXeftFPj3Swg9r1WCwHDVgX",
  "key24": "GUw4xxspYY3EiPbfXeYm7wtH7ijCK1r5gpRzaMniZ15v7GRufA9fUzyH8uoGRm75CavLmxJ1YZdB6ZZ56WKgEcR",
  "key25": "5nx6nrzpVZQYgrtg21vGKjiJdRnMQcBkcgFGu731i9X73XNzid1dywMbVfn8fFp2hQHT4WygTiR5BkkJNDUXGQDc",
  "key26": "4C7Jb6P9DSKqCr28F9eF2sVgfRgafeTZaGoMpCFRMjJ74y8Tboxx3eLz5huQdXRwFynVoym2dLwLMPqkSAchdPCT",
  "key27": "3sh4zQo2C83SdsJ2C7ozvntqLpaoKMZd3vUYodEkJJS3j5cekJkVCEHtgzj3hbjnhToGBdqp5nbvKAcViK7WZ35M",
  "key28": "3KuQp5VUJubmZkp7qooabzWaLmnqiVGua3Qpcyg6QnaZ46wf4kg3ZiY53TxESKv89uSbuwVWV4LN35eE8KLALzkS",
  "key29": "4rrKd8anr4B4p9jr648bPinmf4dkotkZhAJUdMLYvdLUwS2mAkqei3oJeazhB6EhDTNCuGmaK3TXohsRn4mrRMvU",
  "key30": "2KwF33jC7BdCAt7bBf86716iZ4iwurJwTw26Mmok88B1pyDFYJYizUHDBd5qH4HyLJacLf9JpcbZspkzefyd8Vvm",
  "key31": "mpMPcU8eRN67awWFUto4gJPNr98uMwZ8bunUPeAQc2jpPyZrTyXji2mMJj64pyxfnng1E3WApg2crJnT2VXX16g",
  "key32": "29WcmfhpN1heXJdb98HG9D7arkXx4572s89cGGpufjSv2vF6Z35muZo5KkbTj46cwwbdCytDHhdJHD9gaah7JQ3J",
  "key33": "2K9pE3NtdKVUFahBnGPTqkGVbU2E4sBc3feUrEzf6UeSuUrntEcYM2FUWQbBscyWMQpbei6tdZT4Ejvet7cid1eh",
  "key34": "PNQY2CW896JfWdZStQCUHM3hTSEEybybFH5nzSLThBsZQnCbtVNTBdsWRaWKQSD95qh3TeWZYoP1QuUnXiYSqrX",
  "key35": "4g33skywSmjoiuSsTmNxJBjVotQjRe11i6Art6x6btAX5JmN89eNk6RZU1GXvEcRBQnikenCAYPBxdrvc6kXCQKS",
  "key36": "4eUmMAnxpLDSgHQMuAd1dxDj3ztsbq5L6vfhQYt2SaZVmTUWXsxNExHcLWUYuwPnPacQQdjYswBuZ4KGoJoUdBbH",
  "key37": "5MEtzuz8dRtGyNE6M4z5xfJGaTp3D1GgQf9KMguESnevbyQy4NY3sMjz75Auh3BL6jXXUNThpTVDZ2ezgu6NRYLo",
  "key38": "4Jm32WRgxWPeDWZTczfTdezDFqVwR2sq4EkXGYGfQFG5vLPUGKpbnzPyEWd7z5krt55iYifAVyhPT2v11JTmmQrp",
  "key39": "4hx8fQFhU1KpvjrwEEptL8NfLQqw5XwcGtmwMvq62jom4AnhNfwPAJNTh4zTuwVgiqFcHfa56tEuPNtnWq7jVHK8",
  "key40": "5yRGmjw2BrNw2cqbdNZVnHZFXY6HKjrPJt5U9xqwKVt48o7dVU3kexhG7RkzixoN9cunpbZQgmnb4WAwXYHHXed",
  "key41": "2eiGqGw96pVGdeUJ45cTNFEjQ95QHbfzuXEr3c5jHZzZsvQV6y42ZtKG99hxYhfoA4qj1zqrxJgdnUSnrQSXEHU1",
  "key42": "4DQGBf45CtodsRLhccNX4rspex3C5ieaeSvVE4vkqnZpT6tZzAMzuzEDNu3QyJNdBZP5SB7AnTZmrnZYp38RsQx4",
  "key43": "iYSCUU1j43LXtHaTjYQXUNsh13R8UHYTutGFUAf4tXX8ah1UM7h31QhSPhqDo9PZhttrsKitXQK28LSTrfX4AmZ",
  "key44": "Kb4AaV96UCdYKYcUDmYfTEgTH5V5vFu6qb9kWqc8iErYZ4YiyrBww3pjRJeqK6Fd2Gkirz9PAsqKKf8UXYneKtb",
  "key45": "3fWyzQEGdxrv7ACVcHedwcaXmRMi5rbLGEC51Q9GTt1zAyihvK3ekdXv6PN3NvbCmwQRdMQp4gHkjWoptcyochmR",
  "key46": "4TQo4Bt35h1MS7btR7zjWf3rSZ1rWc6riU2HGYipM8poHTRN9LwW4qFp9u2puRtWXLAWe42rCAxSUiBxFFdQycyh",
  "key47": "5ZzTGimSNBa6PVX33tQdn56Nn3oCp1ENgG25P6tn8QbNhoeffd1Kro1YEsDwtYeNtvyb6aWS6yADXQeLATHHYwAz",
  "key48": "5PKegbHphwkidk4byQWZvvyWUNEhex5ApWoexa1wWKef8d3FvVbMSKHh1mBkAx6jqEZZfB8hLX84Ep3mHsQzE9VX"
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
