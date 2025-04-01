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
    "2QxseveAg6aR2exQVNyrUqfTETC4M3pA75xQnWcsACxcn2b2nJZu6T6jz8PE9RBDysqxUd5kPMNctsm6fuBjDSfM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cNJR565QYwB93CFd8vuFtkUqbJrHnFHFLDg5K1QVPLS6PLAqVCqpZQbWz4AymBSR2vmiBA9XxyjmokoLAvYkHmH",
  "key1": "5uaVhhuNjhax9jbwYRv2BB7AhjKdg8fcatxmYxHzpVQuyrbQhDHCwS665mbywLUGdfU6w1yXi6Dgixy8KtebVfym",
  "key2": "N5DfLcgCHRHRY2quaPpCmwEoS2R9ewe5FCnpfsi3bHhZPjbbMBiJEeATies3sZzsRnxJEJnTj5qub899mkfBSyU",
  "key3": "A286TRQzCKqeAJfyyeagk5s5KH1QzeuemiHB2DmBXYYyPkQtFZiCFVTy1TP6M4cmwFXKmvd2rUHAj4hTtW8hCYk",
  "key4": "63okUgEU2NVfyoqe538WRPAZzptDCqnKbxZ3pefhMENHbjyhSiNKoAyvoL8QCYVZmCqf39fTcGHVqwjgiuq6221c",
  "key5": "49W6jaRhQ4SeQZxuBcTnB2gXnD3YCNKJiMBWV5DknC7qM2MzTFhkEoJVvigk6X6UKo3dquSP9Bsebmc8xbBrBsYt",
  "key6": "3umjgn3qMPBzuettC5tkVEef4SCSFFAaZGby6poJQc9M4atUHnBBpuNKepdF4YGdPviXizu8s5iNvEtPNJvsfavi",
  "key7": "hpohQmyRbLfYQKVyWk1MLG65kxcP25PNvjz3DVs4BNE7Ftqh6GwkMBHHPdx9PsPi9CpQsQ1PzW9Jc8iqzw5h9Wt",
  "key8": "2iajid76Y9a9Ch5Y3a4PMDFobMoxLJAbSfd4PJQUy4VrwNERtxW5H59gVYGXoXchWYRfFqz6YxNuAZuxuaJX7dJV",
  "key9": "2Z3uEJ1ff27zVbwtGPs8avTFxiK2HEAdBAM2vhuyZD1TWwjMmckXTt4ZWvVjWZXS52Srh92P79Fn99Bnz1LEPFEy",
  "key10": "21S2w7Hut7zGzF3DdxmURxGoAUrKUg3nWjtXZQDJnYDfe7CGwz5qX88dXjK5tJS5QjMmbuYNDGg1R4SRRKCY3ims",
  "key11": "5XQNQiRCnxFkrB17DxLkgstveAPZyNUyCetjZCw1CQ77e9cyUkhBBPzKMhMQ9KUXs8a8eM3tDkVygTmVC5VAzSKo",
  "key12": "2BsKK8s1wH4nLdY4xSqpd7y7Tt83KKoE8m43QVyzGwK5V31Vzpd3rRYaBtvjNhTwqDiW3TuzmwjuzgfiwDkk9wzL",
  "key13": "2huq3gv2mYVZa26jUZiM24xTn8joZvUQ79hGp3z1zrBYP1ap5PreZpzmLC2d7c6Cw6mgAJ8aR3v3UhVadSK3y5vZ",
  "key14": "3rme6NP2igmkVANQ4TRj46w8HSoiVmctMqmxgSMoWdv6gwcwKo65DQRrdyEZLVmxK4FkCKYNS7TuMc5pFaDVaokB",
  "key15": "3eRUSW9C4xHPdvpyHnJdJeymTVWmSWNT35rU2tEsf8vZSkycDHiKy31w1v4aVp7nv9jThUKRAH19E5JRyg6EmxvS",
  "key16": "29cYWiXvaW7AKCZK88jiR4UWkMB7mNwA19SRZaAnp4e8bD5B1HVSFiiaAKxSfmhv31aoA4cTJw8hTV5nm5pBihU4",
  "key17": "7HesGGPanuujiRPo3cyXJCnhffFxMx8L1CAeS79Bz34e87A42KwNkmVJRNr626XPwnebzFi2TBpAQ7vhBK1MbYR",
  "key18": "4rQks2bGBLp2S4rYbZJmJEHXnaH11ASCiHPsP4hP6RsuYd2uTU3zFBpFDR2TfRKDt6tTJpPi7N4X1cZ21zMG9DK3",
  "key19": "4UJFU7Ue6JYJCD1gMPuBCqKXGRc3cyPyvSNbp1zRMbh72g1hnW1y2T3i3HEJFUCmPAntn4oSAUHkezE8wvCJhFHF",
  "key20": "ywcxPPXWB5LCRuPb8BpbWaSLxKo2xNHAt1SiAnmdH48Nq3Wuztikc8JAkyJ8uk2hY3AMo4uNw4wFUBgRN6UCZjg",
  "key21": "u4rKqtPHwP8EeegoPP3RW9A3SQXEVwvMJftdaJGxFFgt3PyXNBhqREGq44b8jefGj6fNi9kQjQgiiFt7iuzEqNt",
  "key22": "6uzo1vi2hqj1uXsZyTzXmD56bM4t3hnvLF2iC7r5L8AczWKwu1fLvcdf3boj6YUMX9LaHrzF5oAXwmdig7Fff1p",
  "key23": "2WJ7oRE37DNyqmRbyUAZNGQUpvQggDdw944uqyyiwVZCd25cZ9CGRccwSgsA3sFCx58L2zLsJqtKVixuLBF6dLD6",
  "key24": "2Sod5hmkMaGUCUhSRXRbCAWq9ZBzn4PiXaFUahuFgyFrYQMiSNFkK2RVquxJVdkyYJ8DQo5UkhGYw3hE6MfTAWen",
  "key25": "634SXjuBLww9YWVWKjVyxDko1kSbc6EULbjkWwDpfL6L2Ls5smq2Dyu7ZmRZrzjgi85nHzCpZgC8ZrvNYUqSsMdn",
  "key26": "YHoKgaTc4pZU9dpSZvGzLRc1roqVEG4NWF9tPpD2jQ1T2kT85wts37sE1jbjBzTiWUge7DUjyQpsAMrU8TA2HSm",
  "key27": "3NumXaCsiDgkHN2fsZwf3enS3fWGkAiZkp9pUpYXynN8BW5iK8F9zhtSb5wQt9Gg1oHqCVHEzZpYXwLxWM5TEdtW",
  "key28": "421WMAYwxWyS7Uoazj7VRXmiytiAwNP4wWHnjnHiqj4L6mWV8agt9gKpUdHWnPFNdudXZuvWHRmiKQ4iDgW6t48n",
  "key29": "2cQMvcsoKCrpipoeQhGsdZzdwT31miVnyziw5rE8RNozAhrMTHAS2v6PMSo2nL8rEM7k29SsqHUL5TULseMuhuz5",
  "key30": "2gP7RsbucKr3345QCMTNQxXiGsxc43AwS4dpgTrm4gjERnc8cYJ83yQtMgG77UnWMuhgSb8GbQLgZYSJpEk4upy7",
  "key31": "98VN7DWLW4q8MFbwzLVRFxuz1pgP3fMYiiBgeHrAS7h7rNDhQmxwtu3iEgvy6m62nCV2t2Dx9tvPU4r9YbFaVge",
  "key32": "5tXwQxJc38Fb2ZE3vAiC6o77Mksyz7dFQGvsdkQqesYFLvcGC979TEbXt37U88Qpifg4LSSB2BtmiNHjActztoqc",
  "key33": "3wsY5VTpDBjfhAinJw8FxkgjY58TSud1ELbG3NByJun6zZ8GjopFJvhyth3Jcx2794Gdi23KL5WvQvoivT3ejv3G",
  "key34": "RBQFHiMDtqimJ3BicssCvwfABorY7BSqEdSRDnmepDZPzstTGNvRd1yHr4VV9KkigdA78u3Xs8JF8rwAxTjPmbY",
  "key35": "3hFXV16ZfdukCprGhWCK2UE9dmLayYpm6DuZMNh2EiUh1nYfNynsvWeFw29Q8biq4motkXhHeB8peasiHjpKLf6s"
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
