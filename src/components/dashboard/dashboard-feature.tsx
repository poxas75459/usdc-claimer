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
    "3yz6t1sBfN323UAPSuEhiHUu7EsjnvJgfHTmXNgRythk1Wmv4CJ9At6QqduMqvBb8n5wSTLB2fWRnxqGzDV3PoDt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FKnrY3S8tUMsosqs7GsiuTtt2j9Syi4JkRzvY1jsc2x1Ci1pKQXxTEHWszCuFs9iiVTPcFKo6XV42qxHDAbctTW",
  "key1": "5h3S1TyLLz2N2n2RR26mX5s4CNTLzKSYvfoVP1Agv7z6rH33zunKobyk55JuHD2UML4CsJtEkng32BmDxC4Jvrg1",
  "key2": "4ft1WwqiuDVNPMzBZZtSVfX4m8Mq2amFADYfBubLzvRB4WDn5GihRSd9PozApg5SX7HeSk5LgdDPTYZKn2qKVbdp",
  "key3": "3SbDPzyi8iPWR8mwMrofom1TC383Wpjg942Nx2vEBsC53cK7JNNg23kXAuP9NE1GpxRwGpKSavoQdhHzr9rKzyjd",
  "key4": "41wXzNSfPvo5GKa8NrNCRisyKE9YKseBH89Q3eHBh17D2iYA3CGaydAHr8Kfz9bUCSoWFa6nSjh3ZcZqbkncRFxk",
  "key5": "62GVFG4WE8xfQfUD6wpuhg7wThTvNdaWATs8EjfjSQTrWTjpi4HGeE9eVPCGfDm54vmqbRt14bo4SvtnjRyyzA37",
  "key6": "5MDvCCAPiyU3n2iRhbeVYMPt8F6nBMo8t7yyx5ncJnugcqZzbRZHEp1mRHTE7Voe3icrywCHSvfHRLbNa8R5XJbM",
  "key7": "66hKLEpH8GEQZsziCRCb3hKxMuLNrrz9GjVZ7ZrrGzSCWTP7zZFSM5bG2FQVCHvko8hwkT1HgmZ3Dhe7URoa5C4T",
  "key8": "5Gjucgk1WGi3fQ7ti2zjSPEPuWoLb9DHbHMW5eVwXHhnkSDNeoJmPL6Xj2bidcREkxN9ZbVJc7vp1VisJaABoUWr",
  "key9": "2r2hyYJPFW2mWdvWy3sE26jKmQe1PuayKr6F4sU8UWQvY2SZ2rK1wdCgMHizvVXYb9xcyPJncausR2uE2UZy5fbn",
  "key10": "3gEY2beY4oi9iAjWAVjWCw9BxdKj7z19Uch4UPJXUwD43eyoeQyrPLUvhcuD6iX6Ko3v7cZicXFraDAKDt9QV8rb",
  "key11": "2NcZ54ipttKeoUQsrEXPKeCDUi2dSJxk6dDvHzM9CJTngVb3fETTttm7N3mE1tZrKQqV6PHkJxAm1jegTtrQtiP",
  "key12": "4sbpwaerswHE441CrYASAY1QBwk4Q5KQHBaUeHZvqDsUay9s2x6bxad7XijJNE6eMGoVX5xpBcpTnVmofL12HL4i",
  "key13": "m8RQJHRASWMwZ9HH4sAT8zZZwBhNUh1gE86fbFsQipcriSQ6oSDtKneL2pDzb6w3NrtovTVP3rEWdNt2LXx5Gx8",
  "key14": "66ruPaAKaXtoEsCXfBpBeThbrRXn9AJhwzA8DtipbRhcfCiUbsQvb81ppq7efkHyTPp53HnF2bjPnZDzXneBmckM",
  "key15": "3JLtZpTx161DDisgVZLVCts1mg6U2SydjGsLcvNwQxv34fGua2bHPpe7PPcuG878DeAhobS7YMzPdm3SVbdHSjKk",
  "key16": "3DmuyWvvTMMjEbQpr3R3pZWuYpmpuQuA6wzmv9BmgcF2NRnXGz4eNt19fnrTdEAWPwWV4Yagsj7Sy5VwxPwG73BT",
  "key17": "4MNN445WghKDeF58BgAPUrTghhgNfkznHfdLfXGz4sy4iKp3XnkpujtrqW4pFVtrRZG6CByFeSfdAHRbrfiGj2r",
  "key18": "CDFurF59hWFE1grEeJgLJ62kEngdkz5bDCbBo18CtBbwRg1EiE7KU2QorHMyVdmCXiH3LD8SemFUBysVTrRPibz",
  "key19": "3oPoVJKcATC2ZNqkTDo7Req5amtTHErkpRH8NcHN89zZzcs8d6CFXx9bHNGi2FKbWnU1MzS7hHWctSq5eXvKam7g",
  "key20": "3HoZjBGtW2cZLULRBiquWNDc6bjs5M7B3uoJuRpuQZTTfTnrCMEdeoqYCaFgmb3KLqTqKqubUb6dm2DBRxr3sgRh",
  "key21": "fzuwXQECNxJ5qRM2o7EBmkpiVVShwWm6GXyuFWjrXfntn3dgffbLGK4myBqd4EkLMRTptywGcT3ZJVumkJujrrT",
  "key22": "5di73J95vvbtSCDcQFvwWn49YPZsYqmxwZXWyZjxP7sf4EhkoFiGaCNyD7VtG8Ta6UczqHZpQjjgRA32oUrHzzYM",
  "key23": "yXwgkEPzSyTmezeUPJjD7rKwwcciYWCzFwdWgbuxG3bB4apTKuyAesKzUpAqk8Eq3K41t7VeKUV2wfMcvmySDor",
  "key24": "5aiVzEz7VJmKfHozgCQmKK3yYAF3RN4oxbdsz9AZWzYMoBmDQW5g46y9vaFbG1PL2PrCNBiqDyGxP1zqu4ycNw5x",
  "key25": "44kXBoPAHa7jgSa53CNXzK7yYwQQZ62PnEqB1F4WkjW8tvfQnmDiPF6pKsScSH5Z1GNtUwrFYS79UfdHzJufwK3K",
  "key26": "21moxCcS9xrR5ypd9Gm8JUwc2ajzQbUhHmSUMhLrwbwuTrUfdH8nGnr36iATVH9mSp19UVvt1LtLWnyjE2rJpiYh",
  "key27": "51syXoRgbnHGs86U5PxRcE3SLn8rjci6VLzbfqpkc7XvzGBVXBNguRUPPyTSXrPoQuxZUQxGiMPxHidtCNFaCdsa",
  "key28": "zL1yRdztFuTXFe5LJ3X6oLWpi9x2jK3NfnyM5AQKpXFv4DY5shatuJXch3gM3suY4pA6VZ34MGSfHZHxah3AWxi",
  "key29": "TQMeEBJ1Vix55R7sgfHZLepbNiyQmupbL4r9DbSY5AtoRKHfZUckRfuybiy5F2gKSYoN5pT6yf4KQ2XfJqxa9Ee",
  "key30": "3tSfHTTXchezshbHLF6X2yk1bTrBHZy2izvSo2xrcQWssieWbapBibbcCeaMku4LouFVtorAuJURezY9UjRLUNJz",
  "key31": "2gP25SxbDew8YJKqLXfvwbt7ucSAggUNYkEYA1neBnNsDZAPPdzZPd8Gz8u2dvhdJ8NMPdHoAbPQGYJniawj9Mzu",
  "key32": "3AVKTq9kQcybduiuqp5UL8QaV2YZNtQLKKDb7DvRXHTiLMBWuLmQZ5RgJzv5M3P8NVs47yNcBcewV1NCbsay4Kni",
  "key33": "5KaZ4EfXBRjfKjCa3PRuXZnsfD47V4vyDEbBz4Bh2EmVWd7GWXyWaVHSjSG3fTtcCrrPvpVyfcmBKzZrJkucY1TQ",
  "key34": "3U8n254hvBtLmGHmSedjjGtEEuSn8sw73jMcoZDyV2ibhRSGpaPjaKq1jGRw2CJRfcbTLrQi11k6it5HniyJjq9K",
  "key35": "cvRuFD81FbqW1JbB8Z89bRxBQ6ZzmMCXokRGFhukcobeWztYxYKbwRUNQqAygPDtupPbBd3a3Fh9AQPvzdx51qJ",
  "key36": "3UdaRzLaxxBiPgBVkW9qTPBZ2CDPoCSisSTd6WYJ981NSPaXvpRmLbRN293VeuHMK7JAVockEiTDQZgfNqPaguuc",
  "key37": "4x7TE9rDEa8JdoDCuGF8gZxPT6Ph68mS9uR49XFXENQn3MiUkMbcsUp94hFVo7uhsZknVNy5aJNPD7PpvoR1pr71"
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
