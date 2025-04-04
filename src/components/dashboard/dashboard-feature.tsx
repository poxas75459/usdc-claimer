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
    "TCXswudsXWi8X3oKCfw27cMkbBjTLgfzdDwR1isAtacvE552cS8Xy1RkoUKmpxjtyMjK34WSKd8gWFTbRBpqWsg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5e1edZR2WLkagJtNf2bvDrfZeWVX4P3s4jtvXvm1ZA46vh9djiSnqNw7QRfLrKeSj8BHjFFZcuCt4zuLr3HEGyHK",
  "key1": "dCuHKSyQ48oRS18DWm732qrXFwq41sxBK8jPSyV8JEtTHXSv5HRr3j6iA4qaGAV8ASxgkWXGrkxyaxhq1tuq26v",
  "key2": "45c2qBjyQmQwoxaovvcVYP5G49TWPtVsDFzi7JsyAMa4T6qeJezq1bn1qtHykbEQAJ7Wmp2kYaggMXQgXENRqfmY",
  "key3": "4ViYfwT4vUnMgwSxC62ndkdQGD5D1iZ29vM9uPCYSvfdQR5oH6BhmkL1XAdmWvdpTqenD5gycA193deAFjPH7Jha",
  "key4": "496gD77521RSeUAnCfvWkwRp77wzbRGgg5jg9z6qTwD2ZxTfd7bGpKTTX8zGNknSghjyh5EQbmvmWcnXufsCRnpj",
  "key5": "61EDC9s6Mqzyj9D9CuBw9ij7o7iwbDEZ9smfwEWapJ5hfuQyupjBp5RS9h6WFh343nfUjtSo28WEQvfby4vdCKKg",
  "key6": "4NZd8vu6ZvwUupqPKMhHDR1rPmDA5voxG2yuAWbLBUkjV48z8htivBonThqEjWXueFtb1ZHvPqdyqPnRzNVHvvVM",
  "key7": "28xsCjvE45fbjQyVq7JfUQ87PXhBQ6YMR1Dna62Z9pB84cwLUhxv5bSgv9ztn8Uj6xVQxcqsbD6vSKhp5eUDjQfp",
  "key8": "34kh5hwSFnh811WK6ViY8skbmfHhwWq5Mg5RQDcF2iVHgMLvCzfMvNRcbqRhz3UHGLNdCxkA9qUpCDoVohZ4YLa8",
  "key9": "2BwzU1dMjeEFSgwcn2B5wdXDt6rX5UR2qNC4X1tHebsPrPvnzg9HJAZDZkrLVPriu9QD8XfwfLjhhuQPxYG6Pez",
  "key10": "44XvFWCfZYKs7Khmxajmkj5ebor3p35Y2XeUfrrrLnykRLnQWjF8Qqz41PiWebK8EQknAvUQ2vTLT9it4feZmK6w",
  "key11": "4YepdCqZjGVMk5pgrdcb3PS1DaVuAJs6ipYaXRp3ptDYNEApyaZUz7WtiHmYgdMJ7dz7D1Cy6MY55cvc8z8mayuu",
  "key12": "5KVCedijMNnp1B4e6UStiNKFi5SFNvBSWzeCbPiQXqq3kVKqTLWpsydA598aSx9MoVS6EdLhZTnRtz1UrGCH1Gb2",
  "key13": "5RuiA1FiHE2P1VHNqAzc9bofoTdVvoKA1tbK98zmMqWg5xhHEndKXb6jz5m3kjsUfhH8E75Zy6UhA7QASUS2iBZj",
  "key14": "2aCGwoXuN7RjymBC4ppNLx6qsuc3iXUdjjcpYt8vBSo3hazH2H31NYB8GYyNjbH685G7woUi5Be3vTzC3f1Z23XT",
  "key15": "mjtRPd2yMYAFVWw4uJ7sxCoEpKwzbmrwqvi3JpEYUHwFdCL9MsUixG1pQwFshrC7MyXuLctiNViJEcREPKPgaSR",
  "key16": "5KD6JWfRywV6X2YsS9sq5HX6v7n9AnkXbbjSkoyysSyCrpE1DZEYGCrkDdspRo3QbvGa6pXYQmAb8ZGuaZuoEZGM",
  "key17": "2U8vcA35ybHPupUGoALianHBSGWer5eQrEYiEatoQJzHUiPHRbfn2SYHAaAAJnXB4DxNKPcZ2JAu4WR9MCEWzTqg",
  "key18": "4rG7e3sp3mdREREnne4YQBKBmdVek1TKVXPXZ191cmSNjuaAec4QN3U6F3QgvkffwJHCL9Xi7A2d23qVybmLNH3X",
  "key19": "4a4JLsVCBkCMjp6yLsxS2D7257ePwdpQ9HvjkPp4xmF9ZVgQzH8yKELYzvJVq6rPM46daArrTwfmJvFyCuFDpLWJ",
  "key20": "TA3AEyJffbx7WLn5p3BTEJY6u9897tdpTMETRNSN2sYxyGx2mxtTUmwj1Eh7pYsgHrMsaP6UfeJaJpXRG46xjqD",
  "key21": "3Kmi9x7tYGr2zWgyzNf13hU2oCXTv2upPt2X8KLJjgm7TL3B8iVfBm2EtNmZCPtCkuPttn7Mc4ufdfyAeDvxbWHU",
  "key22": "2u6xYJABDMQ1uKyD3K4fDCX7U75rALCYaHrJLajV1CiuS8Mk9YpUnLcBTyzoec6D5hsDVmVJ9bUzJqE5Uty3RT5w",
  "key23": "gBp9BpfziiH4GsLWCpQbT1jUY8zWygbryvCDh9mrRm9NXAUs6FFT9R6CZDnH2Pn9et2f78FFGYSGGGVUbozdBf7",
  "key24": "3sWCz5dTxA8qFZGEyNiFq8EYepoWheYkZiidjs5hcZeqk69RkhyboiD3A57taW7uMZgLUtkS7rzMmb4GFaVvsCSB",
  "key25": "3zjFEFigpfsRw7L82frRbnKygCQqqJXUke8xGiadT4ZkgAhyuXHmPzaoS3A39NvHrU3y61ZHTktzrJfJUbmAywAB",
  "key26": "2ssbX2xNm7DPPwFXPyF1zdUrpv1Gy8UMeVXtYiu4MUs3RR1qhFVHoEGZbxqsz68ajug8TyDT2YwUf46A4PwZJxbj",
  "key27": "Ca9Wx53cRMSncjck3HVJsx1RLPDwA4w8fXXdPPx8RsWqtkRwA87DR7N1Naveb133jj2oWPFWvPkuJfUExqxF1sU",
  "key28": "3E7wFT97TFoEEp12kqRw3E6DUjy1KqGHiBiVVyC9br75aiR2dDh6DpeedTPqnB5GirjCbyHMqBxRtMkgiwpXRRSa",
  "key29": "38gDLjUrir77HLmUcfzKdK1GcSSjD7SnuLMxj4i2RDcGc8htQAyr5ci3uxWhj8c5GbUY3AWBeUMDF1y2KzLaCEWT",
  "key30": "dRKPVejBwH3UpJSYYBWgYKthU9KwYvZpHe1cLEvR7D1v5xeKQ6EfqaMDUBZ8vv4AQVhpM62BY2dPd6mkjF3fXqd",
  "key31": "4uwsZTrAa7KzyJsZASM8NrMBSaJnk1XSZAyW2kLVBJeaDkUiFDBFYLv6GskDskc7da2UAjnBRX5UngBW31iAxy3i",
  "key32": "2kseCn6yyfNHuBo3Smo97eueLskCW3SVdvhRnuz1TRgmacdZsApBx8u98HQkrSnsYcio55gZvNBmKKp5Dur7kmuJ",
  "key33": "3Fu6cMS4CxVjKvuWzbvyhDXjEsTBtm4xWcYNNK4TRF27KBcNtv1ebYFtEgshNGJAKjXqerF3NSxMqBpbc3GPeTmv",
  "key34": "66xndBTtrUbjaEA4oYeuF3Zib7CYKp2KiTBKaJRZ5NHTZXc1yc6kio5rhxXLRDDWwCmiLtDd67MXioP3jdFK4unJ",
  "key35": "AyQmKuzUmkYb8upLMw4FLnZG4NbnWuZzu8Tpa3bfPpTYn8Mkx4gySEa4b5ZAFv8M1mVv7LJs1WJsbp4MtfoQ3Lm",
  "key36": "3DKn39Au6w584doRyNwEE3jBaXMkz3HfFa3SBP2yNzZ3coSvCsKQAHGf8fEGjJY8Ts1oFyRmMUVY6pQubHXRoGZB",
  "key37": "3Yx3s2n9xCs9QsKfAAYhPZfwuW4tEjuYUrSv8ioQ7h474QKM1xXrH2MRCawFS7zHsHP7LJd4jfvPqMD7fjkE2QFQ",
  "key38": "2YR6Ds9QGRG6rt1pkvc4PR9YsMhrrzJTypYjCwrEeKhRMNke7WKUhgVPC9ifUouQB7BpGrnaASeCmSyVFLAq13c9",
  "key39": "2Ymf8Dtr7DFiS5Vc75AhSjuT8G7hmAYXq3B2nZyZUVxNvpuRGuJGB1DbLioq3DQanYGr5x7RFsgdX1FhcstMRbYV",
  "key40": "HKY3fySgRZ9xgcBfSigdaxZmvu33K8uFqshPdTATChFaFhtD8dKZL9fSLaLf6NoyJxVLdF5rTzVaNCpPxWqkQd2"
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
