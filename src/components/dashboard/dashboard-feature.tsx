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
    "42b99TkpKuWj1qxmhoSktmeAMtWH99JPQh2SkbxMgohgbUR8W4cqwsoYFEU6Sf64GCzxFygCLFm7JCKJsbq7ASqE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vDLg9xF1bR1FdCzL3C9FjuEudLCCJjjdV4r8ncXXfAE5zpCphVikhmj9pRg2RtcW9ndw18xVXaTrzHBuMHpb7K3",
  "key1": "2TxUsZ4556ibfwLrVo8FNuguwdypPSbE7onJiC4MMpLBEfwWrF7owtfVp3Abvf8dxy78BsuZzJsuqdpHWwnnF3aT",
  "key2": "2dyaYAqzpYv2Em7B6ZEAXpeGG6MpDpnkGDkXCxWUHPden7RmnxvXLzYGXgBRrdpMFA3hUtSBnaP16f4mAet7W4Fn",
  "key3": "4W9KyejSV4YPmbXzARQPa5eajs98uLYE2wxEt3wTdbM1Uz6QNmJUEsaSzD1rwW8rFXBxYTS8XjALFkvQcTsGF1sZ",
  "key4": "4nK34NhXk4sR8vc3hgkXF2hENME3MAaKAdXG2YWt8iikZbWZ2yi4xQ12vekeNfBzebvLQGmXwzFyj1SiXePNkm16",
  "key5": "4akKCR6gBdHZN96Dn1Vq9UPijpNLcRTKTRNF2tNAeQpJJWndqwbtHyXaV6JvztzVr6X724HbH7oiJt3iPt8PKj5U",
  "key6": "4oiXjnD2U326tsZPpHTvVYw8ArSHsk2adm1Yhs8WCJGuJZfPUJupe2BKgmmKzMPDkoQUCaDn6jGfc9tyN9aCfhS5",
  "key7": "4bppsP3At5an1mMVoV1LtJVxiDUBjcsY3MWhZabaeBh6Z2wRJ3VwmBqJRM8JYAv2ArjWTAtU4iTAruyGrD2BHkYr",
  "key8": "3KQozu8vtCBwt1Gdnc5bpSgX3UVubKqLZQmzMwWhyNuu6H5Pjqj3365LvPASoa4S8MsMb3uq1CYsCLjaZCjwqEDy",
  "key9": "GXzALTwoijRU2f3P1TXXXLioRtyHYnWF4kTMp8Kmat7WSGqS1YbknoF6GUkX2kaZVdeNp3pzRieg19fuDyT87Aa",
  "key10": "4j8ukNNBd1F7sFkd1AhV3uWMknQpFL4SFe3U3ksTFGsK6qcEEhHsFB5WF8szyvTffgVPq4NTgmDQuPU6dpEVKqW3",
  "key11": "482o79p3NiCGvpUQt85cGBgzZkYKeBFCWewUVvac3XBdL5sckskWRNoDnH8vDBDvSWo8k4cpDCtQ8FQ8mEutkeXN",
  "key12": "eytRmPqoRadXVcrBMQV4wuG7NtXsvEM2ebLZEjpdkhvkgX8iDn5nc8CgMr6p1GKZxkBbirjVVGymAKt3xacEfE9",
  "key13": "YKbQBAaA5SwxmFXFjJpwQXYuxATcUduygb2JgBzZFHv6iwwbFo2Mo6ZjPuN6Ak7mUuEo3s794tapEKSGGWdKKn1",
  "key14": "66EDXvZmr7rTVqDmVjdUb3tHaEH9NZUUqRaQhF34th5dQTa39m9A2MvxECcTT7XbyuQDVS5rYY6YF1m8uiCFQXZN",
  "key15": "3FtAeSTg64JhXXaPY7XT4iUpJk4wN11r8wpjwiiA42mQS8bJiGyRCCejTHf6p5uwW9nv2j1cWZVFsQ9DNPnZjKuw",
  "key16": "3fQUftWw3KZJt49eWVf6rtfWv9S4F8gcsxmVKDL2czcTjJjNCrA7ZKbDjMJFjg9B2yvczqSaaeEVeDhGosvVTvvf",
  "key17": "2hPVvq5ycbzkXiJULoridGUxUxfX759vX21SLWF9ZfKuHf2ghFaTpxCLPpsSGJwXZe4xVQmpkSuDTooSAZ31fRYT",
  "key18": "5PcDefpHAYcWMrFL7GnhJiXKjJVwPNjPoPhkRshyJJxZCdRdHgPGPyWZwYJcgt22SzNxtgNx5r5C74AFhTmvY3Qf",
  "key19": "4iKY9t4fz11asmGjyoYrXGfBFEQBw2YRkdRBSyvHNyv4zfm8tpM8euzCqHKg9xi93YsqiTb9cxRMz7rmd9518EC7",
  "key20": "3fs5ADGpNcouSyERRDhKzYL6VU287SpBJey2eFP98KCwWCxSJ5Na3UGWUUWaYPDumBuMGgN6EoaM6AYvAsFZxEF3",
  "key21": "4mnhAnVBjH47ZwpnnUZ3bKkDXQ1tSVhdcoqgKJ8G4AdT6nN4azNkYf5Ask44Vyh77zk1yzzGN4X2GMTKZzUE1imS",
  "key22": "2A725VAm2PGqKfy8SWsXGRrNwWrsPydKyjcp6tYAdq6kCAw6WAja6gz8XM4RSfHZheRmyF5bdyo5bzeka96h4WjS",
  "key23": "2WiotWtZMT1ofkAra1Fcf5ukuuApURwKWXdSW4wyDazpWkKpJXP58Ak56YdU918d7AB6rC89dJdN3CMkwNxTmLcd",
  "key24": "3ZzAvB1NFZGvJDH9wXTGbXYdTkfruUPNd4zzpw4n5T89eX9C4CJtNS19VEkUQWzts5FzrRAGtCGVmN7sQHLh2r9v",
  "key25": "3EHvASzsVH73hBqcZD1TM7aKcu6YtSFTV5iS73fAuqU4oiEUZU7odDniPMdEfav2AW9BHQEAXGkFCZs23gEAS6VE",
  "key26": "33Bi9Wbb6CZWPGMGXYNat6oVGjSKj2hHvGiiaQ3x5VajRZhM2jXk1md5cys2dAL3Nek7a2bKrjiwC6GcZSBpPXh9",
  "key27": "4vSQi6BLAR8NnNG3Tqm1Qb16Cxs7pKe85J9eyEDdrc3rgc6V1rfRgmSU2uqbiVYQsrcCWbZiMcLkq9qho3MCd2n5",
  "key28": "4Tws49XLhT18NytmZGA7GJb1n8PeZsw3owf7E2m8NrkTs9WDG4ecwczXAXxELMgEmmnhvH2gT3wRXKSBXEMtVSQ1",
  "key29": "3xQysRwz8S4x2vzNLmLATvaop1V5iTyRnMAcKbDPUf3zByyt2m3Bp9k4fH85goNgfjrUheyxzd8oWUo7Jo9o5ss4",
  "key30": "5TKaGMUy6EP7WBsb9ShGfQHyxX7oZU61iESR7ExkEcVQWDSwBtrfVxohn7ra1yFjhapaTiREx2YLEkKoHVSPErv6",
  "key31": "4LNm1zLZRkFdUtJxTQMmrs2mvn2efRW8sLs9Bx6Sj5TCKQBDbJ6bc6BL8P3gWwPzJFyKTB8Wt8xk3xoSMKTEifRV",
  "key32": "rtdaTX9ReMxTY7dCjcTo8vwC79RK19nrqo8RpSfTcidnhoaHgt9weQSHhLh4zM5uCwC9Y2Kdhhhiu1R9CErSQGF",
  "key33": "2KBjFJRd7wx388vxFavpk5vn1eYZsyBi8AqUPEZdERheJ6iWFintXJjSP52byn4YHPAMjT5K6xzu5QbBwiWwHKwo",
  "key34": "CounH7Bf7r5yciCEr6TzepKa45F4ZTFCpd4WeV7vjQbwGadUku3tq4Bdh96s1UYViC9zBHWWW21XYBErZPpp6Nj",
  "key35": "4Z1pcuYDrazN3rtHWiQbZLkmDHFtRmkD8xJtQhixcG3n8e59YrtsaW6SrzY86PPuXjMzPRL6x8VaNMDzKWzxeURa",
  "key36": "7w2UjfMtqPnVEA8bi8HZwWMrnPYhcGMEBRhmABejkubSULjjiZ1ahqANazbiMkU4Qwa3MmquskpsBrfC68E5Xde",
  "key37": "47X48gu5vn4VWAMGfZQHNKaNCdBPZDYWFENTgzDas866s8j4AniFQNfQfRvBPWQW326NqN6aHpPFL8R33GrT2phD",
  "key38": "2zrnMp51eHZptwdNQFdZniWyyfbVAaeNBpFRbPGnuo2J5RhKBgWZpF4L1nBTVSi7T3qhr2G9pTQ75x1DmyKiYKtm",
  "key39": "4zKfNSjCr4oMBC5jLEyzVsXZNLRnrdkbUV2SdK16xpJ6iN4euTLDHyd6abqBnD2iGHWsihQhe6Vw7xL1qDXv4WvR",
  "key40": "2YEYvKZQGRRvuMS5rEoseHR5fKLat2WU8KuwP52Wjcv3UM9phr6RPSeZWBfVLCEHUrZ8MvLX1qoEc4rEAm7jQNBq"
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
