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
    "YP4VBrCsDcrZysYzs8phqkdrSA9iA8iDDDhAfwXnL7Zka6c3LSKi5CxR9V7hKMxWYWtf84i3VwTqkZm3FTP8MzS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zxQvtjUTZXWY16gtqQHSKYcQcc7btanQ27cUkiCT4xW2HxJQC5xkH6FXuzzp48XEpEotKxJDk96FHE82TM1i5MM",
  "key1": "5PL2nSQTF7kUtJnjWgSKHm8ttsALzepcfytSTxxrSYJyjfCkmi8CMjKch16i3WyFnN3gyg8vfKLiECvyH5eeWi23",
  "key2": "656Sm7cQ8JkJMGYpRGGrYL4jYh4cBjGbULULv1tupo6L6cJh4WcTdoEw9Vzg5Tbzp94nM9PBCVBF7UeFMNnrLtia",
  "key3": "28WijcfhR45qXv5S6yCPzzcj6zbZqgtJDerzmSsktgdhCBt6ezC9Nmdo66XuSoVWMSrnVBeSf7irWi1qmVE8Djg6",
  "key4": "22QrgwbTEwQHxkKPwUQpynXUsVwFB9Y2Tp22v6yYFqd1U5JTHXMNeea59qhharWBotL8mjMkh2HMfByXUwY6FDVg",
  "key5": "2N88gPkaUCxfQJUP9PEGfsCHzSzMZd74JqaWu1nFXJqRc2nJUAgEq2aNwSmZ4a7i2wy2P3jcG46YCmSHj5R1DK6M",
  "key6": "5msaFxykgSg5RE2CwJRk7vYSMzRL7LBofTrRZbw2Sj8QFJLwBvF1xGfim36vVFVmsutaLRWxXfTygrzpRsPLqw2d",
  "key7": "5H2BbVZvqQHsBZNGvwEXky1AkAM2cNbYW3tcBgT3ikfF7imrbSyBQ8rL2nY9ZJVZoDm1Z6njuc7NSP1qD3YiAYQD",
  "key8": "bDPqufLuGatYSE15rtwuie2mYnWBP6rd5TCx2Y2zucaNmruaMwNN1VWVMTJbSrgk9u5prciYLT2eP2g5H4nWJnJ",
  "key9": "2tQpsNiNpzJRFaU1nEwuHYskKtRTyiEcsBWTkbFv2Vgu2TVNjN7zk73s9gWdHVrwNq74XYdqrXrWEtdguB8LJKQo",
  "key10": "3mj8aMUT3GQnV2K8UHhGRcNoNxpp5dYaZSwAgj9Aya6a5afns2nyjS6tv7Cgx2jRGimHA6LwvauaiUK69X4DrKJP",
  "key11": "5HfVAHMyc4jHmc89p9kSriqQTRk4otDuGRG71CqRzUZRa9xAmLNZnC2mbhmiFkkNaV5HJ3oVyawQXdPBTfMuACyh",
  "key12": "5PL1aqp6bATbvuDUKKLNUdfz3CXyJgg6jRXwdkskJkKNUXyupXfNiCiSmqcts7prJ6jpVyCnTJpfnqDJ8iFCtHAH",
  "key13": "4XJsxb97nowMjVKNc9Djvoejb4a2DBxNuRA4m2CrhSaefYZRZaDHPCJBk9Mc4dKYMM2CyWNJyGWb9Zjj6QKQfHju",
  "key14": "2RvHv5oBNFGg3gtDW1B5SyXDtwyJggxCaQN8VeBVeHk2CiL3BhcbJYAGLZyfX74CGc2N7AaKhFcZWxLb4bCbqTZe",
  "key15": "4guL7nmgNZBQ85jZimzKACxodawdAUafwzDnHp9qsaPRHsk8uSJpMgjNYa7XRHQ9qKCJ9dhmHbAxPzFD3m1UJrZe",
  "key16": "47TagB19HZADgmeUMsVYU5LtvCNatVCher8sQ8dirA9h7Cm5T2NuDVqFTVx71ny7z3VQyEcEqX8DR8yyJdan7dy7",
  "key17": "4REqKrSmkyHVrcfVqc3t6T3nNQWRicr6GxWTKvYJemSfqGepap9itYsPCm4hmP6KxoCbCcFMYVdmJ6YBLoCfV5iE",
  "key18": "3AvfFgVxw1GvpMhquqwdfHrByMYwvtHNZVm6QE6wwE4PsNJ7WXqyL3MpL1EdDcZdw3efKz3348dAvKgMqKZ75wFV",
  "key19": "5dQ1p77EZxFdb2N45RRQRWMuAr4Bmox7Hx8ztMoHCyiMZtehqKnctQVFW7cLW4JXQgVR8HbDpMdAyripqTmzB7wL",
  "key20": "38HKCdHoswEw4bpz1fziBhwoDMfkijAoVnJ5TNN3rreZocpwEYBFjmuH9wag5AJejUwmn5gTLB9CeoqdRG15uGbK",
  "key21": "3WmrNQeLnDUmXbpqmnyrLYt8PRBVB4UCzc189iQ7a3caUfmHWVx7FfJvzhqVYFau3NdyUFhkXrDgSz8P35qyseFh",
  "key22": "3CJ4NJocyFD5rMKKJ67MAHqMqMennQiNGtUPaZhEQiLMTArNzXzGeBnMpm9aoFUMMvZLn7Wh5kTqNSQTprtNiyJb",
  "key23": "4Pufko1hXS8JXMEKTCFqiz5WXMQNt4bJHBwwBqdS7JRDhS14hKDBhnY78WKgSvW8yfvkkBmT5Vs48aP329Nhw3fa",
  "key24": "4zFG4aMYM3rUhuD8p7ojpGpxpnGqvr3gfCSTwXryZmsQRczJVKApFMoZGMuMsNgaSaHcxcWKRghxV5FtE6NnvFLt",
  "key25": "41vJTR1uwmKsRkerEfWbG1XfFcpPUoqiM8BD1sTi2b9mbuxpr4ka1uodRbACfR9aqnhHhDoMRUWXE4mKZPcfwAMx",
  "key26": "2SY9Qensgchskqw8A2HsRVSm99GPyyaMTGFRqJqb76Zz6tNhsC9sRkzJqjHkzWKEvfJMGxCAmUpvXdGry4Wckpg9",
  "key27": "qUWEZoqjZuE3g2gPcxwbjrxUGDncQUHGjBpF2ZmYZFvzvp96uzVyCRLnUhNPBHS55pj7rET4vpRpf77a4XQGbao",
  "key28": "47PKcibNBzUkuriCfXxAxjFk7wwCvez698uMugMhPcbPgD9UFMGHamZZVJY2GxyV8yxCABvqGkisT2eUBHQoEd7n",
  "key29": "3D7VmoGPQdnFjWT3SjoEzrfSwBdk33M3sR6ZFWUtssE1HZuRqvy2oiDd7Y6PZwTZ1gFMyA6WZTiX6QERW85gF8YW",
  "key30": "4YeK5HqhBdFNx1WeuMTbwe7tAkDP8cJLAZFM8eBGiX3o4SsVt1Ck5T3AAHSY1gL2pzqCB4XUJJXDjRcHia11jzHE",
  "key31": "3L3MK9ohxcJGp2uE8juawcvsmWX88FYJ74qw8QWNf2CW3mNYfv4XE63NdGtqfDBXDbc2YyzT3o5PEq3v3v8S6znL",
  "key32": "4S1RS6Mwvx11h7k1j3q1X4RR4EYToZJHRoD4wcS7H6T11P2a2RSMfeALipbFvq9hx38DYQKC8CRYMyK666Sz1cGP",
  "key33": "2KFqudmWVD977PZdVn1UBgfP3632kNCq314QgMWpWpfe2ZrbYzvc8Ph1jkE58qBiTeSy8rf2Gk8M2XG41j7j8L4o",
  "key34": "5BWiwvVo8beSsA4LawPLhWDmMkJPxt54eLj6HZPvsScTemi1b4SU86nft2XWPpNewZ2cPib1CrZXAFFTbahSEGHT",
  "key35": "5p8m2ePRREG3k5p8bwD5e19DWesG4ZJTz37B7MvgFRhprT5KhpKsiB5xXRAuqfAsXrK1mVWzaxguMXNuLgPtNUEU",
  "key36": "5w5bvWqms8fkJpiBgRhn6hA4qUTSNfHCDjWsUEXsrFAXj3qiEg1RkHSzn9TGHbkFdjqHXra2WLugrFSp21VRoAXV",
  "key37": "447wHvKxSxqEk64A9sUCu6zdYHwYFk8LVhZUPzfNgsTgWwBWeSi8MLmhiyJv6zWKGMvm6ySfhx93K4jXkuK24fGv",
  "key38": "58sZBn6ExUUqEzWufvMKYsYuud6STxi7LzgxKsdDYqS2qVThhCNxLqYgiiJKCxpHD94XUDECu7RQnFJApwP4eEX4",
  "key39": "4bWxQY8Pehy9kh24iVskKEw7hfk1q1vy1YEqSMpZG8y2zLFnsH4Y4pAu9ckEDgYQTawHvhs8dYJhg2VwHv8sBLLW",
  "key40": "4T6M2sFNdQANEY2kKXDgxMqKDmvNzmZog1S4MzRcrHSU5hgn9Nc6m4Tq2t3ENPCWE2YSaPPP24YjTZ21hd9Cs9Kb",
  "key41": "3Ui5Lx8vfDTgtU1Mr7P7YU4S54FPMXNZa6HWopqxb23qM271fg7tRHFCV4xZtyq3qWuYyQPypyp1n2PtWAyePk3L"
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
