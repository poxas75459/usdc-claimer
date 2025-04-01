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
    "3LPhGjL2wrMK9nDCZ3YdjrG2Qg7Nj2QoT28G77yGLcR6ZFw77tYLza8RzypprmhBkwxdhQmJUMSDSvNsdSHY3ih"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LHAvVwkxfVDTUUryBtYTVCeZ3Rh4ECttQfHw1FhXG5Hod5tsqRiPyQYcRgPBmXV9JtUWQTHiygszgk1YbhFE1GY",
  "key1": "wRsx4Ji5NxCjUxUMFt79eGnomjfG6edNyGjGMZ9DczyEgTsR1YijQnfJS2qqQMT3gzdZz9vekK9UTRbx38LxUKe",
  "key2": "yy1JaAZTCqRj8941k1yB29UwCvZnjMVXJFJ8UbR1NJ8U3kUpLtgWYybRCgKFD1kw2k9vr8uFPWESsUkiQhu8mK3",
  "key3": "3cyACmBdZRsLSkJ9nJFhELo36p19QQC2VCnqByd7zwHzbytgUGwdJvmTbuKDYFzueDvsNmbR8ggDcAaNKg5Z6xZW",
  "key4": "26MJk78btykFn8DLztxQxPHkuAM6NcWFmDh4dJPgcb4cZF5TbqdQ9teWdSsCGXL2E79eyWUDPAAvZiPXi7k8WdGe",
  "key5": "3gzFGTkHbfzvBymLtYM8W73mSwonLfRGAdFdd47rascZ8R2vsCLHX7gavyNxVVzhwMmJt4gbC8DWP1W3UiYAVrhk",
  "key6": "3PDB3XjW3hwmaN7Xna2K9W1afJBX866HQNJ79WFs6Zc628iMCynRmYfNjgdLynaXALXyXaVmXTiu95EFSGAHCXji",
  "key7": "xoBw6J7mPRt9sABH9a3SprtvfnRSZyRFvmX1wmzxz9msZ9BJka6hbx9RJZDWqST3usywiaJ5EMYRYNPn4qcD45F",
  "key8": "4cUaP21a6cxMSqyZfN3qoMrmnnesFaW4vLTofLbU7fToryzjgeYU8T9hhuHeyiPKYv9ZzhN3ArFh6MChFgMg1rTa",
  "key9": "331tGz4owGNxLhNzyv4wAHMtFoWw2kA6pTBmeR7CEHRdFbSx1pcmuWYcbn2kyrun5T8yavfdDmPKjmh5SzzdkDDX",
  "key10": "2Gej2eLMeSACqNEsR6DaxXdnEf8fFGaSarNzbWdgjZf9FDzXb4DAQrX8pv5cvawDUwyuy3xw6hY7Kb4w8HV3CLqH",
  "key11": "4XdGTH6qgZzxmDZoRCzeGFpSS94VTdz6DL2L97dDsnYuV6eNu1E4muMd1xSnsNbjV1j7ceWerLk9Q3pVFjHFFACT",
  "key12": "4vTHiviYVsBoTc4MNSZHj11YbKsfdx73KNh2vhurGCqPbALXL5VXLZzeyMxKwRzBnH6ok77PXhWyzSpA13Z3Xa1m",
  "key13": "5QwAkiKhemSaaP3xLwhpz3B479JFJVNfGSPrSvSiAYdxGMnwSo8RRTX4GArQf3U3rRSGEmYegtxQ6a4VnMRt77pk",
  "key14": "4xu6piJD28wrFCAfYio7dASvVZzbmFj3u4SY5HeZTWQAVNjY7oRNfuuAStHu5aJdXzymycf5EiTgjnyQT5CPkqhH",
  "key15": "2jRqwSawtrbj43e7TCzyJaWgyXk5yigMgxgjXW9xwV766dGmLHNntMg5xbCvQQSquS6TNUeUY9pPukaeDSAMVKof",
  "key16": "4Fc3HyctHkFGpfcXZ1bzRNjfuJNEs3X5E3vW5wCKHDNcZu4Z7PjDdQH8ojt3yzteDTsyXJfg6mDccud9ZuHqN5ap",
  "key17": "3QbNbd47AD4HTgedFRrU4ncZyxWo1PyUBm7AZeiuDkp1hvM7U7sSCXT599onfMut1UTKBCSq33VmCesY9pme1CuR",
  "key18": "4TnTonaToLCoVohecS458QXm63WgLnm754YcWHbEHtym6Q1Z8E8FnKus151WwiBzjCgNbFyh6qZZ4KVei7mqUiMJ",
  "key19": "HYPbTEk17CSeBSf9egAVaPHDzRizRWUsRzoQpdv6DYayU1fREko5ddjTpy4XjzyxLdtuBor1PpGdDBogS5PofsK",
  "key20": "Zj4M4N1T16XiUVj2ugvdwX9XABdGTrp9ayXtZcXkaXL3TxfmtvhGQ9qiakyhwjv3s6a9Mmzf1u6xC2aftwPfezu",
  "key21": "3SHfWYcd7VkHShGS3CdnaYgRAxZySFsBRxbiDtYUHpdXK2MzWaF321vbTEezPLgq6mvwDmDGGzWJSfiuAuBTcs5W",
  "key22": "3dosMxS8Wsjgie1Hukwd7985adMwuPzYUDPCNdRrunFxVUMwThLt9naaJEE2sXNW1kM4pvyXgKrRQAiyKUFReL2r",
  "key23": "62bXgWDA1N6bNV6DMazX6UqVHVhfMNxTm3VS5yzCcxF1nbYWog1jbjy1Z5ZwWi1A64ppGsG3MxPfwXPjF9HHjMjy",
  "key24": "5gmFqXLX3d2YF2R9awudrpnd7naeqz4EbMwzmNMmPXe1uXzjreGD2ErQkJLnujsdCmyrHuSaHTp3pHStYgmS1XKi",
  "key25": "3EbPdiH85xpionKDrtCCozPSFVBeSjyekM29oGowqUQXTVqD45VXhQkAFXpFBzYUi9UAFPnrjPrmD3CEpFxL39gk",
  "key26": "rAWu3tAWGM92Q6PfTxtJLE5TXkDQFNtYFBn4eGLPSyephLxWv1Fetdf45NhBHGh1Fy3mBfxjrWWQGR6FP9RpDkj",
  "key27": "22z5m1PtueuhMERWXDtkuB3snwfju7FT86gibZjhUvSVdXyQbjXJYnzsLZE7KqHjtEpSHKeMkQ7eFoM6zAWFTTby",
  "key28": "4bLXXLHFH7uSd3rQfLC4TENjAWJigMNNMBU6RnTvwQANkWSV5MW5vSMsjinjJxTLqEybfqkjTp2FBVGciVaEJBuH",
  "key29": "4yuqYgUPxKoN3daZzdXWsfE9tukPJvUZBHXhHP23NCcQivZBHR7SkyTvxMyEE49QfUL26jvyttk51aPCvJZrTJDW",
  "key30": "2KS9HsXmyVPUbxVr3nADuV9SWoeP2SSyPEpcXgMiyVaiybpXeVA9ivtgtMvmiQLi37zfTuHwUQwN4eRAUVFoGNL9",
  "key31": "2rYq5Bu1LnxReP25FRSfyFHw3ZJyqiDWgrDWxvqCsYE1mUzwzT3wAj7obYV3nvXiC5sGhkFJwWvE3DKGdDYbB7KQ",
  "key32": "34nk9uaSEpCzWrFJicAMgwbVL4F7Emx5V91w9pu1aNyBwsvF45DA6tj9xsvu4TCw6TqZej29ZyV9i6ZGpCpyXoRr",
  "key33": "3kbzpPaero32KNkrs5ts9xdCMXuu7xBXKixsAztZAGqXAUHcKwc9RnjfwBCMbhUCMDbRviSGeoBZF3QmyANpS9yt",
  "key34": "4umJ3Bxmg91K3BdcsivSyYTtqnrKQitevzbyEwMkWtZvcHzjTuTQhwbr8Db3BSM9u64tspmfwAh8wS7NsdbWAZBt",
  "key35": "4EPfEhWwZcUaLfNuiwe36W6KvsKPAqu9xs9EH1yfDsxGGrZe5iqjJ8ryb8fWkGantfvc13TinhFcfK3XbdhrgbeU",
  "key36": "3LuhojRk28RGQuWmdV7DjYLhigQi9xFtCGvibqGL5qXE1g6gaAqBZU4RB5FzaUiCJy6WMoDqJJSFyxRXnRoZ7ZTv",
  "key37": "5ju5zMVjTKFzm7iuxJqpyq4o5GT3WxGKx9MBMxQq97t6s92xjBGjjDf75sQ5csZAVENRc8Fpd4EjP85SuwNSe91r",
  "key38": "4GFpfm6nYLxLr8VoimQ5qMSpneXFJphXUxbfybQmFzyDWxUtvep8SzGJg5WxJALNPEmAc68xNKvhsVbjyyUHNYRY",
  "key39": "5c74EAMSRXqqoJLddedGMUjfU2gRzddjoyCyNQapQjyQx7EF6AFBDu12DEBDoC8GLtRH1ViVxcrTRV42sPng97cq",
  "key40": "4ct7x8pZ7Jhf8Amj4dAHwXMeEt2Bxwn4X6XJPAv1voscud7rPAjHpkUaWHJGx4XRRgb6QWit67uak2EyT1KS8Bvo",
  "key41": "UUNAAhLq6fX2oQhu2ieM1ANywj8Se5hvZFvsA9CSzmC9jifzgaHpdvQQoduyp3TpcCNUPKvU9FyucRiWAZtFJSg",
  "key42": "3wKnCp8pu9tSfgGcem8hz2tLck4ijznqqjo5UmLkz84L652G6gpUc4CV5EP98k9ppCxpyrCyT84L7Tuox7txun2U",
  "key43": "5ZJDFnTeX141pjpRykdT43obgNmRm8CDR8ZLXdFxVGBh1VTXuz7JV7UPD1wv5p5KiysCEEokKLGPouoz1C67AJAg",
  "key44": "2epvFPvokBoy1xwQS2yzzQYkZqSc38Cc6DXD1jvdvjmCphrUe2Gw5GxqLBUGXy9uKnKksCfiYst2Q72L41QBGhUm",
  "key45": "35KULfqpkvNhhLRizdqHxXoLhavXEMs7mp9zpHU72BMh2pycUoXYXj1dNnwV88BEhM8eTWZQopChjQY4iRKMaLmu",
  "key46": "5zepZmTpSa6yd7voi464TtC5UJXNAmSYQ57VY3epRh7VrbiSZC2dRfXAvVZPT2hvuYpyHd8P4sHiRWdvuJESAZTk",
  "key47": "3ux97d2uVsst8UKVGhC7z7v4jRLNVFfyMdVuzR8UmUe57bQzMddrSb1pwgUAZz8G5AiJVSEa4p9kPJfvjKKpMQww"
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
