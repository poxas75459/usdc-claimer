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
    "sgjZ2XJ4kf2WkiXEdt1FSaUwg9iSWXSxeVg2Ew8cRX14FDxCHJ6XjGtL45KRpvcNrwTv7qwnuM3SR3v9qZTa19k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QiiBJBnrsW4kj95xb5k7mu6RCsotThGE1q2sSVLuoSKkYDbkeSvTJZmQKKhHciZ2XiU2CECGPtVeLDeuJx6Udri",
  "key1": "3NAaYvznaTToi1UMic8MwQC66zie9JngwMfWjuCeYrzF7g68j2Htjj1xkyhhSkaXALikaTjMJLpfmRRMokxy4eKL",
  "key2": "2GNtoTXUaLih9QG4xuwzHho4pQhi8tmxwUsDEGfm2PiboJVUaLP2ZZXVSz3wemp2TcJ7bSUWMwcFA7kBA9keoY1T",
  "key3": "5GYgqqnB76bppoivtmbPpHxbcC3J9jjF3WSd8qXSCgEYtUtK87asWRe4C33ZKQk5h1Ad6x2qKfZKkdNcDWcwHx4R",
  "key4": "fgPSqVkPJ3yyy2fxQZMMLfQnn7L7S5iAf3VuX564nzL1tgPRP5jTnSznFQJseSQYMbB4xErV2dd8vFvaiSprEWj",
  "key5": "5Fbe3to7TLDC1BBXKyHmi9kyGobPRmESq2rahwHWYdccXdDxGJSvYPzVZvfLyskCs7FbVg1VZQrzia8EJ2tpDM49",
  "key6": "4abgFj8uW1uMCCDzGjtipZS8edymQtn78PmJFUuo97qjwZpDWMdzhAfy85CUEi2FabZ4r2ih4tKtzN9RFzxQLDAp",
  "key7": "5eLm3Mqe32ixGSRPK7AXMu4dzDLCBaVsrBNbE7zY3mmMWyvYEE7wche1VZvs85ZteYseTXZr7suziURPwcZpLANX",
  "key8": "2QDtdCC8BL3CekUcXrTa7qAcKFA5Suqen5fo8mgvtaMqzVChtSeHRgEEMZ3T1bRcM7WfGKciU9HM9D7m2VyGJian",
  "key9": "CttJF4agKKbfqH92PV97yp9YtTkkzWUHCJnEx2bFFhJ61tcJ1p8KDfEQnsffLqAgEtsPz9iJk1uqJe93aV3v6ay",
  "key10": "2XtQquTsHFNx7M7x5ZRZVzayGzskm1WSqFHsCwQF5JphtkY3XCGxhbV1SYYEnE5eysBUHfJYfxEYPXHSxYekLTif",
  "key11": "2bGHNUmDmouJqYH4eptpVGWN4XUuwUvv7En96usuWzLgsU7Zb6cyF4JMpxyKEwBX4XAhVVGex4WeRkis4cmESm1b",
  "key12": "nA8ZuRz37QnhfmRA6SFRWqwAJ3uo4rJ1U48BMWnHZtqBYnjNUc5smuGazGCQHkbVu2XQ3gZnSjj72bjiDbHDn9m",
  "key13": "V9PKsHCFaPfajEfyr6dTS1cfp4Lf4w5Xa1q4UUBRa2hsdzL1U2QY85hwnxg2Eq7f3BqwPznwCFrKALkwuzAifv5",
  "key14": "qc4hQHrsYdfh7XWUY91okakQjvxw8KDyULUU544ufh8ckVQmUk8pDfvtQzLAdmXF1fwqZfSVsS21R8SmCvAZH9x",
  "key15": "4vm7xjfY6A5oUe752QtBb4os9b1wuWAeDnirbUvFSZZmdmUtnbqS3FrSasMmaCpgi7RNYzrMBBjXHeyQZzdqZ3FV",
  "key16": "4vVnCE4eB71mgREU2AJgKBc7JpePmHGi6M4j97XtDWFUmb51zTyYH5ehXN2b8cqbrMPfxaVWxCimpPqsUTgTCay2",
  "key17": "3vMYVEJf72Cszsz8gJKiupkbaVU2ED4Tv3wucNF166mMLVLbKXuCkuparfPNQeXfV6KXp5QKYnaKQk3E6tUNKpV8",
  "key18": "hAEZktBr5vNWbBCSaL22c3J3sJocN8s8Vf9eHmcZT3qGCqRM4fB6FJvkZ1JsSTCF7VvYnzgnrJvTQxzy6b16iR7",
  "key19": "3V7Hnb6D6WCDsMczpDEcipWDZ2n9Nt4UxT7GaX4aC4b4kRHdfb2RnApNQDZb1LCDqbEuq8KyspXT3MSdqazdSs4S",
  "key20": "2RLeZkAYZARQ2PPUZM8L4TB8dBP4EBnpP2AsMdVG2LmWnJ6DkjaZX9gepWQsKLoSbfV4Gi68LoPFL8ZppvWncKzS",
  "key21": "3uQ83qscDr5gXGFRCZrif9NXrZei2i5Jo7oDbTDMbL3BBvLQhC5m9hwCKP453wDJY6GfeDgbBdJAw6xWMYrGzGW4",
  "key22": "4uQic1Vh9hsGw9h7Q57TkmBaPoCVaGJeRPFB9iP1SHv3LfKYVNfJsGKUKJ3nprN6VnMYz5HW3TcwNoQZ5YSFUh7X",
  "key23": "HKWea6qiVqBieUt49oU7w9jZftgfWSRVeTKWd7Y3B6owF5yuVGcNyrYSa2K3Rjkz4HY57oDstSnVcNTdr22fjek",
  "key24": "3ircJB9mJeHwEpYrPxT85MPJA5q5rPXTRTqSCvqoeqX3vEC8Wiqa4AHT2hDpSpxTqfAd6pbn6JgbNQpB9dEgpDZD",
  "key25": "4Vf4FUrqNbyj9eZyEXseG2wpfEMwoFhq8ysJY1EiW8nx6bpUVhfWgCpnnv2FJbcCjr2M7yYtmHSysSMGT8U96jkK",
  "key26": "5KUULASbaFrxrd9pAGqjcQX3SFCfHQ5HnzacKEnY1gPM6BYrUrtJXb3WA53rUufaz94ZsdGhJ38XKhvkiyD9SQS8",
  "key27": "5L2w1JuLcKCzXzZ7numViiZvGMwmhCEoZtvHN2GqyPbBZmBrw4orVQ6yB6wozNGUfkgRWXBvPSPo3U6vwqBueLnD",
  "key28": "64V7zE3fJCsvEWAkeSyzEWkeqwA3v91WHA7tnsnhE7CtMLfwa8J6MeW1RfMu5pkNJVG1VNiyxFtxhDMG1aRPi7te",
  "key29": "3ZK7TefQXSNQeGV9nH4brypbghQ2eV5WitaeK1Tt6h3GHwDwppopABR9irwA2z7wzzAUj4NxkUL6B66uJsah4drd",
  "key30": "dgu7ndzi7co3orAJssNzhohggWEaLQKZUbyZujbyU4TJjcVk1mhiSa7Tn8LSwa5ZRPiyMB7R18zGpH4dWJw3rh7",
  "key31": "Yphy53Ba6DPJY7kj86j9bxtVe97M3ojCwH2H3PBZg5JUVxUZUwm68WdMZtxpPKSy2mPhsQTSNhY6WmVoMjsEZvh",
  "key32": "2dhPUGqvGwfBEJj42SftZTd2GbgWiNLAjUkqXw26ypmdLvD4TWDh57MXS2AqEZjS4KYbm2fwSAozz4FfXZWGhwEY",
  "key33": "4mF1EF9AYjQxSAj6QFZb5qniPqb6kq4P58CciKgrtmvCcvq6E3UnqTZnfzZb3iobNxRMcvqpqY3EMx1YALtacXuq",
  "key34": "36Yw9RcAmetv8u8GFUqx7npM3adAkk4GAPd1Yck2m5h8zx7nh6iiG9pm5TkgMVDN1KmaDjuRKY8R51Q2Wvnh61fc",
  "key35": "2JxhhdPKUURBQx4ARAeCCwemsu234mBrEQMdPS296GUhUVq3EPABbtHp4AEs9CTysiT7e7w6uRW2uevjpW67upgz",
  "key36": "KVgBKiHk5MH6tFAfoWTgyK2nmQ5NDR5wYc9NMTW5vRZZsMWkpeeLcbozmHL3S3pFjyGTLCRtPAp4pBn13DWg3kS",
  "key37": "3zfbQYqtBLFWkuw3tJRWGxkRDGnpUXJ2aQ4HtUxagVhBebuyjS1ZNKfQUKjRtKM5iKgPHuqXNTHjbWBW4PjuiTV9",
  "key38": "61VSaNC98gS31c5rZ5RACYsvAef6qUVhs47QHzGhy4CJkyEdj4eAy5ScPJABb1yHgmnXfyZYvgEB3LYD2nm9Yubp",
  "key39": "49DWHcoqh6AjcCMWV1jc9eRzqobv7DGSMAbz1cXZrZFSEa6kEHvD1J1PhEYGbJV3fyiWhvYWtBYCzZHqKrP9bmuy",
  "key40": "65AkACfcmvkxwMSoNHT4tD6ksJ5ffF7krnwBNSFL21yeRLnngXdcxByFQYvamin8CKijKM7NCuBSQnMD8US35KBL",
  "key41": "4fgJpvJYbVZbuyc8UY3AJint8VztMrFx7Gract8fzeM4rLbEYP6osyZt8xrtvWuuNZqqZybA1Ww6NVMbkkp31yt9",
  "key42": "4zefqVPGq3zj21VxxJyknG8LCsxBg6DHtuzW86bL7t1F8WanKHStUE9Fzdo3kfEcZk65ZmyRC9nWa6j7Lxcv8S11",
  "key43": "3B2x7p4oxbxRiWT1HM2Jg5S1bE9KWEtnMjf3exrfSMAUtQvrbk5ypoDUq9cBWKBdwKkHE8Ke89fQkjGM9VGdDGu1",
  "key44": "23KYXWXVjpGD29cUB1VauUXQ4JM69bzqSgBs2wmSkk2fPXuiqrVNDJctNy6hDpe3Yo82qPcqBnT6vWB1Fr7XMsWD"
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
