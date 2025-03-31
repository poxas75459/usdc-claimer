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
    "DUPYeTXgTGbEaWmc1vayzxQh8ZFEanDKfEm1UPZErkvFko7KMGNVrjjRVRyHnYyovjmwWPTQakzC27czTLSbmgH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35CqYof3QUgtAZ7WGCv7SvTnABE46M2irA3XYN9AUvMhrSkkCxX27ffjeTLkSvYYwy3Y4mkJ2S1esoUnodtuqZpa",
  "key1": "5MLfQkJXE1xxkJYKLNR4wv5U6hDgzF6DZj2T39EKUXE4V8fHBW5dGEg9dRrw3pJweqm8tpBjoYyoHKyoV2tib42H",
  "key2": "TjwTPi1bpEbcetyXZaVoPA65BjjfSw14BXnKCkHu3MRC8zrJL6jE1bWv5XjsyKPeUx3mhqUhiGf1AMr8tyZidEu",
  "key3": "5zQ9eReqG5JMpaRcZSrjvhL275Tyc5YFoSp1ALzPLAQebkDpzNHi8a8LAH3qjQ7CTv4ob78aK4FmciQVc5y42h8t",
  "key4": "3vFGpXcrKdk7PfQ13wTPfFQuDZCHeWLAQPkPZ5vADFGZ7iKZitxGiauWhL1TGSXFSUpUwE6HKxanufkm6VnC4wot",
  "key5": "3EkSDoeCkKbigJnJf6ygD5x7KM5Wrqipjyn1LLcTdNo5iMeUUYhAgM5CgkjW47ERiCsvGSLX7xxiLDYdcden8KBf",
  "key6": "6MxfsHRnSuYjai1kt9R4wYD1u14X4bfYqSMmT8HjYehgJ8bWXRk759ftEpjrRSuypejvgSExPhMPdcCpTogXzCS",
  "key7": "4xr2rbQSsdci85ahXEC4jT5BA5kGU9fou12FSgHKMx8oqKiqTHfghNrEvk4mz8HnqA4KMJWypD2trc68VvhEdDho",
  "key8": "2ZkJjSjvMxT1kEHup1FpoP2nQjZD7QPetVZ6UbX4UPYS23SzAnNcy9x6dseAH4p5FuTRr2jFG4t5kdYBHwr92fFk",
  "key9": "321xhYh5niEcQ4xcxTcT8UsZhk24DyqBs1ix5CHFf2RVPuvAu8B1vrkYDcTiErDYivmpQacoGBPYSLte5wt7Gdj1",
  "key10": "5uY2ss9fjQBsZjVUZaY9bBDbUEBBsSGMnuvngaeHTz6TvLBCLxG1gS5V5JQyNEmhdrvHsBx3iuY69GZnyq2oGgcQ",
  "key11": "28voWhMW7FmmEMzzUhj9CJemAJFhNXMEamokSDYjcyvkX2HycBpdVLZeF2ByDJ2hgbwaVXjUdhZc8braEMrBYvUh",
  "key12": "3YdZMDoAuCRi4s6LMm9F1bDCNbxVAryXToBP5WHkhmVqNbdAQm6EVC8wbTt5dso5JRvqLJ7SDEt924AdGAkfgZ6h",
  "key13": "5A1V84GypS4C4NX8RPPo93iAvRLMkruvqAT6HwjJaXDrzYqQMEyhq5Xm3EkdHSiDLRdgx3w12iaLKNf2mF6abJgJ",
  "key14": "48qCKZTyQN6ihx5xTYN39Uz1Muh2kUtFFwuiLu9nFruvmHd4TD8YsfXDVjDr3hnDtEXHxzuks1DscUFTEfk4Yn9x",
  "key15": "4CNbiuJ2t5eYK6briLbDfr9EuXPrahkYCVW6EkamdLJ9QTukLEhRK7kkVxjNG1PPnpjQ1msXkfQfFG1ek2gpPncL",
  "key16": "4FTJDkkBXjrhUzRiZEuNAssaoa3kdH5tc5EywBrGHwzrVaXMDtzSHd3CNTe8R1hCsdwpCfqxCqCF2kV11uLUSYtE",
  "key17": "5uoLpztW3iV6oQagpHZGzpZFqXKqaZDpLzPZ3ZCrogN6EsErodavtQuG8mgy3auGfjvPPbTWoDPEmmso62HEK1K",
  "key18": "43eLjmygyPbhpwue7NWofanAW4LCYJ5bxSkoqG3iASMwFZw1u3BbpEmjM3EhCNSyobCjZkzUiAxy6b2FYJbDyNN2",
  "key19": "2wtVXVfXyGvRKwTHuSfBRLadfFgAX3bEZoVwJVH8eZqZaB4o5ubxGXwP7eY6hMLecKJTR5kqgL4U3XvZa44UwbhP",
  "key20": "38qDU2q1TGYSisSJAeDNzTcuaJJ7PrnWYctfBXYCBSTbj9bUwCtNuFJ7ymtNHLFQhiAFgiNoPsHideXCK3HeYKdZ",
  "key21": "2WHqbCTNcroScA6qwwe7syLzFAC4rTDYi8hg9nkkpRPXBAKKfLMkr2GEVhyXPpH2jyTmJhCkQSpAwQnxbURpEUh1",
  "key22": "4ZgW1N4n7xG1DEd15Fd2i86QQk7UHmYGiYVfB5FcQ1Z3n2KHt8wuithPwCeJtsctgd48BdgucLqLEEL8nUZzC5Lj",
  "key23": "3VthEaUCwD9nwhd4JnjGUrcKmuALaJ6wy99q4snBpG2WuX1Y7CSyyHyaKU2SvLxN1BkHpPpoGbmvcsKwkyUceKox",
  "key24": "446Pq9EXXHXzij3UwDDqg9aFananxGjGcsiSCZE6zxMmr8s7sUpzYDC4nVz6pjBNRYVJYbVCQYbUiYiJdibifx8U",
  "key25": "2Cvay9sXXHxF5hzCdHBkrJ3S9KVsAMsGG5d37WtJvTEVKNK1i6AwiNVV35GmCWdf4dzqt9E18HUnwfazfrq9MgL4",
  "key26": "3n1GbGfvHrp3MAwcCnhDHtLxQTiPHY7KFYmpJkArhD1DjsBij6pWxAQKohr6fKtML2oh65YXhjXEnY4zdf36Not",
  "key27": "2yhmg6bFoaK5iWBmyt1L1FBvvk8WSY8MF6ShzYAy6qk1cGLuRFpsLPUBeD6ABh1JqqrEKGxCtpCVMpAPCRUu8auT",
  "key28": "5jfKUkb5z2w7zpAixYeXRo8M7qY7yrJisupHLoN55ee5MeFccq3cj3bZTBnFCUqgFR7gpSyvhtQ8JkWFMVusrJZN",
  "key29": "5hZPTcjapq5GbaA7kvpHnfQXM1dgJPTZ4422fWVJcdRfXGq6dNEb9vNuScYmAj6mip5xx5oiB5rivN1hfjTVk8PR",
  "key30": "3merUBVspmCvcs6hHaxFnSyJw2hdnXUX5CimRy2qc4uuG8kCxpAEHp7w8dQJj4X2mVPzAZqKpHpwb4czFPSH2vHa",
  "key31": "4W5wsPZAhg4duV7QhPbKP5tr5vP3gT623YeJp9hxjMJRpb3EbMV7PNx3Towmavnh2Cyo1b7aave7EyJKv9czrZBL",
  "key32": "SxJGbUJRNRWrJQVLMwTRp7aPFb5XRzCUJ9TiD9tfNVbgHNPbdw8Q7zVfGWNg4MM1tNr2fKhRXsUpuHreFgB6kbK",
  "key33": "3ouiMdmrpTRupPhfbqFwkPXyf77cVpiMVZtYf5LJrRp8DnNsYB9vSWecPphcU6j9ZC3EUm9kZM4NZYRfai1BngDF",
  "key34": "4k5NPnNyauCRZwHvZTTQkjCjtQSwnXU6ioiFYK8H8o2KVCT9QBK9HAbGDoWXyooKCMszD9uzAKXRgXVh6R6QaH6p"
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
