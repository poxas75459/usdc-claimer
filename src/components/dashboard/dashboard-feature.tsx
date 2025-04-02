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
    "3jUxgfLGeo1tRcxfz3sCLhNUTLjewXWzzUJhnUD6VUpe7rpcvVuuU4VHPJKTAmXi51DjyWGATDPpxtdzcsXQfCZS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DsRHfX4pdDSRj6Y7oKbsFGZVEQy5UCcLD8LTRPcM1F1bpwbsqSTxa6pkKxYANUGGsUusrFwjciiVnvnudzbwLG8",
  "key1": "4vDvK84MMyRH5Dw4d5HJUxLhNT2kgK5zsj7JhdPMXX7wFTMsvYjscc8LNni29XBgun2fmNVaok9uYuA3Ypa9Kbhi",
  "key2": "hn4KQDn6onG2yKWKS4QGPitwS7zpzLgmwfcggGHiASdYVvdcMLTymZvCTPnFZZENcdf7oBuGZQusjjruDvd4C8Q",
  "key3": "4FksnfEQVccD1eWJcaZbqTTqxBfY3mj26ooXD2HWKFk3apU25QT47frzBZymR6TDxrtLegkki2MTtR4A1LxRfoc5",
  "key4": "5ij9FTNkBkMYDLWajdeG8rTwXWCCBgthoLm66c9b3WRv26kRfJpKeHqJMJmXpadAJDUM7Vq1tac8Py67wDV9vcL4",
  "key5": "XcePEtYgt7A3wbwbf3nh2ET7nmKT2gf4NfSswwr8Ne4d4qapK7pFm7TXtEjwh1kSrFP51j45nYXxx1VxSzVQW3q",
  "key6": "3DiNQZyXMmxkuQWJ3gZvSTJ7tZMqT4xU3HkRFmhn2yhNp1Vm1oWjFXMnRvJT9m7b6MfRWbBbSvsPvxKVe8fWYuH2",
  "key7": "3uBYKy78r2cxefnUsNYf7NUY8RDVbRxEM1eWWqnKq73yoMtJwr2CfgRN8ReNhtn6hxSh9rWGdGG4RYCJzSPEcgd4",
  "key8": "66hfD6hjyzojZjiLaVXdCiPXMGGQ3v9NTs2mM2x9C3PnTkipAYoiygfFAERmnUrShPEqD4JTLLwCBMSi56HDbNcY",
  "key9": "2Y8x7A6BUyJdzzVpoNm1qA763hYLyYLh9xd3xXHizKPZH5Te2i8KrwtDC51RZ2rk6rgZkvSJy4wsNW4erFmdgeSW",
  "key10": "4No19CxGBhD373UuxPJpYfM2v44fRE8iEmGS5DWFmsSEKwVKDhPxMcy9YgZK71YWWrm62UPAAZDCN42HJMPEznBC",
  "key11": "Cwzhh46chCJ37pFb4RXfqbxNXR8ZHB5tJLjYTxqfwetaUdovt1vgX6MqqBc15yvnmL7pwwd5qqtryEtZJ2hcatJ",
  "key12": "3rqPaHM5E8dbDCyLg2gcNqSES9yetAs5z89ANRuSuCeET4pgKCH5N4x3Nv5AtGKeVaZ7B1FVW3DoWALUgHQBWSZX",
  "key13": "2gkkvoi7ax3xdcBe6Pf8GNA6Rpx8dKx1yHpuDgXvxUR1mVLh2wzV2o7rsiicjTjPeWQrC1oZ7ewUPYfWJDoaSC5G",
  "key14": "2vprwE9B3WUcormVZTPt8aY8XVRoGuufLzxDUbdZcqoD2ZgxmV8raL7ud5CAXEkrJ5z9UCYmY4mMWeABctKcvJK9",
  "key15": "Fq9aK9FB79eLFpFNqWaB8iqQR2cU4vCtTa4UaK6XVNgqyPP8VMDpsMQzz4xfbhQ8usVPw5ujG4JzEuPj19tb4Mj",
  "key16": "S3LC2z7iSZ49Mgn6ge7UtxuV1muTfsb4kBorvv2VTyUDd9oU6Hi6HTnoCCuC9dUS5jkZJCidUpqDLJSMCPkaeT4",
  "key17": "2dyhVcSpQAfRSMbGjikgEsZhUJDDx2knA7XR8Bfrt5WKSWN4RuAuHu1cV7nd5TQXp3FUp8imkaa2NZSfd5LtZMZY",
  "key18": "5rqRwcg9UoE445DxFDvLThzJVsGnxzFEGEDok8czSerLJjKkXz4SEsM7g83GUAq66Rh6QW5dWdq7uuesDiSKvtny",
  "key19": "hyF7VrdZSZ9B3YJ8iXRrd1P2pQRhSC22D9yoLhSpMdvXCGk9HU91VyazLskspxznUwqttvGT25NQmcyuvxbXbCd",
  "key20": "34tphNmoLFL7fxEW88ZLB6doz9euUsyV5XM3G5VPpRmsYRULocJGoZ2hUoxApCz23SZP6x9a1q8hqk2SVNFH29Cv",
  "key21": "47XsvPcECtYmWzGJMgMVJ2jKYLHCY7xjFWB9yustGt5mTZFkC4obnWZgG399aothKccd33SHfRLkaqSXnuZLSKBD",
  "key22": "3yZvrbZ1jAdNFdYEiUrpT16URPJKUNrVLWo7LMLE7bzaFup5JQJJbJrTCKhVpgUAXZmJXfQ6YkRJNQwV5aT2faBC",
  "key23": "3FmJBXLv6ToLrhSoMo7rEbFALY9fuUKoYyK2Wy9omj7TG3dqwSR2sg4qQCVQuF4eY5jsbzn11EDuXiui6wrPFKp5",
  "key24": "5igZVyTV92rA6EyE5mPe4rk2EsvTBENdMK7KBEn7oBnRMWubQk1hNgVqcKPRfkna8hsN1LGHJiQMdzpVP3F4WfsX",
  "key25": "4GKBvgUoQJ7Yup9vWZTvra3J9vQ27qRzffJrrAjxKrvkiXciJdbennwE9dWP7KaxKQSexrQ85vgMYCA163H8xL9M",
  "key26": "2EnBX822LsHxz2nzoiYEix2V1xKcALEfRqVn4Dpvrqfkq9eGPu7gzKZutX6GFUKneFGBd5itXaRSU8mSKmRNSG2v",
  "key27": "5VW9mFWH58cgvgvGNwEDbhzxNv2kNiwr9BdX2n9hVWraKHKwxxDiD4QpXz5nA2aASpSBKu7BX3PmirTW3NDhEMsk",
  "key28": "oKbkJZ2dmYaHWTRd1GNpQeYk29dXXr6PdMi41M9wHdfTzjcgzBbTupHXojBsDE9Y3L6VAYYYQtJ8dBdi4QeU6vV",
  "key29": "3igMacmYbYjJ26LTsYu6p3WEusKnw9e6BvYhDoBR6YdY96xapBwuXKRmcvPEduAkdbEaDTMu3Bs9kW7rNYuXtRQt",
  "key30": "6RsdqwKQy73BDm65G8qj7aYXN2gZUB5eAJ1U9srbxd3E71ozSi6KApbu9t7WH33C26L8bsR8zW63fnJYePpqLBN",
  "key31": "2FeVvvJ9fwATdd5JCV8h5AGAfk5oUNdDqJSNggTWCyN4oHPy6NHqVXLMB2T41SzBp7FmupkGAc3NaXazQes7xJEA",
  "key32": "5TWedQjqdnJ8kZG1QLs1BBXjmPfrZkih37mB4rXdQr6H9KfQAVdwZKva6H2RdLUXHoFH12ugDHbu5rDNZ4mFya4i",
  "key33": "566UsbqqgXdcYzkzWJ1qAYZxAK5MgL1DNhr5gr9r6rd13H2Gp2j2Bi5CZcNTFtkN85dJCFBf7MbfifGdDpACTteg",
  "key34": "Vhi3ig8xGkdcgttP6pg9Mxokx97ZAYCZGUYS6UCT4nXVw5LY2PJVEfNhxFv2TKHirbobqNkiznN9f8wz2HPkXQj",
  "key35": "2GoZAx39PBXeSYZsQ9SDhPmMbsBwXhZc9CzHcXjTern2Gj39UhRqxdHaoUTFK8w1hZnyXEcApWwFv7496XDp1N9X",
  "key36": "35pd8nwVgsf2Tw2a5nzofN7d8MkCr4bzZxDjcALrV97wmrqGTNy3ZPBAAJA9yfYMR8J9PTDuU66xk9pvNUTVumRQ",
  "key37": "4hrYhEoT7kXRYrA3zrHtKxVeexaWxqarLyDhqH4PFAiZASPenSUD95fPriS2KV1WeuQ5aSptmr7AYXNY3xacZTda",
  "key38": "3PcQN6QR9M6fpinrLcTj8W5avjcSQ1Wg2dCqKyzFh4yLTg68sYJb6U7uvs7pjTncWPc4ZukcB9dH21fNRyvNCDZr",
  "key39": "5z7tRHB7i92ocUCFU5UVARUxFZ7E4MomKRXCkuXo8w9CbnsaVCgzJ5J9cLnvcdh3PuqhkE4ErE1PYsx2vKGx5tCA",
  "key40": "2sQmpyFFcmrZEym2SGCZR4JB8WmnfBKko1rnxvgtT3c4MajRhtaYa6pPVs3A3sM6ZsrkXaqJCxZdfxWpicVA49K9",
  "key41": "37kWkcxa5GHRckUhMfrA1uMd9FRFXfVNmGL9E4TnF1hzGzRXeYHSCn9n7RkthQPFz62EDdwhNj1eVCBYwQtWVPQU",
  "key42": "2bYjjFaKojLfcY5ayMX1CWkNVkB5FQPG4hg58TCdZR5JpemBFZXkBKZGSERDd6coxeJUJmfofgMUgoRgk5Qijh5F",
  "key43": "by8txFfoUxMc6pPe1d3gt35bLdbhPLzoDp3EXEjd2nVFD45wWwC3aw4qTV5fvpQf39DqV8ioQ6TbLKofubGDR43",
  "key44": "5YuCQet7PFeUrWqkbFCZngJ7gEuMjgdkpUxUH75gW3snLDLtHtsNtHAJaqkbon8LyEeAE5gUs8VFVFLGarzFmwFi",
  "key45": "29sUKvFucnHNYofsGNXrwNKEwF7cUUMnLZpSPUGd5cm7htFv47YzFqSDW5cLzVVGyTeqymQ8e9r1dnKy8i1E2omJ",
  "key46": "4pcZy3CKV8kouLqbKKDPDDpanNpHHQzSdCCwtNFGT5W6EoD4EKfb3tvDHLBV12NaZNQ7foiGGEyqwER2VfPTtkih",
  "key47": "65DWKscCaaW886AK4RqazXN2mVufntfoSFrCrTe88SF2Guw9As2HZyasTD388XUUi3QC4QP8dX2WXBzCNUgfviBf"
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
