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
    "2fhuanhfxAq4u883TKYHYEjEpRBNxLJZam99voafujoWHzLmm7rE39fAbtp86TGv76S5WUBRjpoapKweSdUawXb3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NsfriYmo8P6Mt4qTEaRb1A6EuKwiUEWya7xnPXrcnRs8AKsS2T14TdN5V3nabdYtseHxDdrxQ8BHuYqHT9hmELk",
  "key1": "2wPNaPWEXCZBhjwsAH6ZBi3TAUvq4XPCrYu9kKdXAgMoDnpf5gdmjLvUr2ELQYX9VmDWPvakV2LLyYkvHLrs7kVZ",
  "key2": "2nQ7XaeGyy6X3Z3RuUEqUMBpNUH1TZr5fdk6gKdqKXURzQFdyYXWuBcttky8Biwe927vtSjsKrP2Pgm16fHRmNpC",
  "key3": "4eq5o4MLNa9dJ7fqj13jbRQEetrTERzQFX33QTpy52c8DTNXR5EAFaViawMpkKTvreMbaR4NKePyY3zVjxTM1w6u",
  "key4": "4GCZ4sSujvcJnrrP945Jf3qJLWV4EHDBAyEtAd7xhikjb1JaeYTiZihmvs7ZjbR9dCyrPP5mb4tCTYRs3oV2KfYX",
  "key5": "2MDMT9HZq4KtUTTVDtDpSY8CKMaH9KQnZxkBhhybNAvBJnw7HmasqVjGcmCw2vsGgW16Y5Sb37pZi27GJWLiThp5",
  "key6": "8frZsXpiqyWqKwTnpem4W51Buci212dUKCUpmyyhVswvYQqZHRW6fbVA23dDhCVNp4q9kGTeDC463DS6LkC3QKd",
  "key7": "4gR1VtULcbTwX2ULTusSocPXT4sayXpyfVpefmHvEZ2caZQnA4izwV2aT5W8yBSr5xaQwkRCykRqhcuL7ERUeAWD",
  "key8": "46adDw9Jq9usrwTgiZUqG5sWS1qUAbBRLwLaVfppcY6DvHMPBbyo3Fz2nefruGsEtWkrNu99HEJRfP3C4Rfudipq",
  "key9": "33buLssCMry1ojBLF8qapejWD61uQzgCgJaPh5gDtk7w3fXxwfPdUjEUoSc3feD7h4DVwzCnMi5uPwx9rQWW9DQz",
  "key10": "36ffwraDxYysuiU2wMuVDfbR51caN5iX5oa4YhKnLzGEfcNuWuCurUtCdfhC76U9HcNoe1obTZ8PmcG1BqogFAYf",
  "key11": "4wUxih83YEfpc5p5aqJu17tXNa1frosLFQCetTGZVQ7paiBLvQmEN24fFCrorKKZUE1TJbg7gGWRfd4X42R9EstF",
  "key12": "2wL5UPpwfkVMpBcVDEcLTCZrLyoXfALvoqqS3SWgULKsGwtZSJXgmZeyN1xfiZpz3SxpuZEqNs8WCt3xt3mtzZJM",
  "key13": "fv24j7EVuHKwHoLic7DwT6VFVB5pRkpkgFUww5kGqj6Nc6rCcZZjkDpfn1tj8tWgArh4WHz4ftWeM7eiQPm5QXn",
  "key14": "3nEH9AFidGQdKb4Yz8iUiPDMeiQ9L35trvvwdwTzZ5JRRZ5oVEmNLn5RMnA3gWY1up3n1QQFYisB6CFc4UY6W7H5",
  "key15": "4H7RJT6qM9ruTQigu1GgX6NTnvaovbkj8QoonYJxSZ78TWz37VnG9MT8dyYdqmre5ydxnsFP2X2xwVeb7G2QpnAA",
  "key16": "YdLPKTzgZ9TQasCs8xFFv8Hg14M3tNvSA5PM9t2hNSr1A83FpnsPv5FJd6BywqLNFF9cyPpi4jVPAp3UPm45ThD",
  "key17": "2F8x3fga3K1JC7HHikhzeriqfK6z3xxzYP5PiunYYhbSkRRf5d1HafmgeR2KTwMgk4K26RXNwb3udKnmdppw2TZw",
  "key18": "hKttvNA64mJmwnrwUeuuWHYU5R4vwM4wumfMs578WHVsyWGPiLiVrRqFYjCk3mZu6DFTiXwRFh9NRXPdyS17RnP",
  "key19": "31vdTVqXZ1NUYrwNkLYHokcPvx5xVugZf5ZPiDovzWDPGcC9QSdzC454Hy5P4yhmfcr8MgtSsp8WB5qRhR7RPjus",
  "key20": "JPWErdYbowoHN4d5Fb4RXtFnARiHejLLnth6mCq9tAhn84ZPAQdJHwWFTEvwAKL2HkYNCMnZJfu69e6oBhwrYvP",
  "key21": "razsxoth7N9X4f42FqT59v2uxFrki6QNtpx9EEytQAsaMo9y2qnuQJgW1GgbqnMszZM6W3LzZs5BDWGxE3pJt4m",
  "key22": "4HLU2JfbuTgrSRoqEMX65565JEtDPAsRJegbJGG8puwNXMr8djsjnsV8UeGpDhWGGDkxXZJgFHyuGzVYDMQGnEcr",
  "key23": "3n2eJAkZHKYtq3CWbvG4EbV1cqNvzNQPBeNgR1aC8Mi8ZFYCGRrtrppjMCzYVpbzLCKM324RYAdntN3n6kW4QQjN",
  "key24": "4bmR2b9h5KV9pgqD7Jdvp7SH5khPsGvfwLN3MkM2QSWgaS8XQnoozgV6igu4pfnUTVQzyn1yoEqL37jXDi1kVDzM",
  "key25": "33UeKuwyzxKQ6zgFkPZZfdA2E6jWqp29HRqySzNEYmMoLSiZKT9n9pKQqQA1vJvvokUbnZhwiPd2yp17nCEuZjSh",
  "key26": "2ebvTQrEZYS7wbwCYU5cJ6EZPCbkwiKiXjnCWvH9MpvoQ2TAnmQtLA6s1ge8G5Bf1cH84YytwaZY2jSw1iuLTb6F",
  "key27": "3RnKtWc6Xg2JRevYEqpLGopugLBXLPuZuRLxJahxFGmYuHd3RjpujbnWB7qfLqr4qQpjhftBnUMEBhgFcHSwaVFN",
  "key28": "2QPzZbPX8A1mBqwXgDmt3tqmDSypp78xy1y8SzQaXKMziBTLWR6n5T37nT9BfDjN59J1reGDXNCBvUavaxvWBwGu",
  "key29": "Y7o4mAkc9xM7THJFVLE7Ft1azxKYupvwcbPtNJxzQXSUotDthTACKtwbt9dZe8XFNcan5ynDUNHKjhua3ePsMVW",
  "key30": "oAodC43FCCdKM8Zv4YyeNsodgY1uVqUBN1mMCGhmznmwq2MTChwryEURs5S7C9ytnmWqSnuh6CqwADq7SPJ2Xsa",
  "key31": "51cVEpifBbF84huP8Tg9snyBy3yLc8sYwVRc1hZycgA1xjvU9UE3FDrFG2hNuwDoR31d8W96jdvWQNptFw1wmnmy",
  "key32": "4bhgTxehQsh7qu8NJ2DRcVHugvxSvdwGvAtUBDsVWZY9s13mN8qXJYGV23J9qt99VFejsSfypVJ5T7do2vbMo9bm",
  "key33": "4D3oPKSD76uVqP9F2S7uk3CiK8DGgE4QaVQdiPruMZK2JzSfCuSdXzYz8k3vDUhJULKQnPCnXAUvTimdhw1Eu3nL",
  "key34": "49hfwc35jXeFCusRbxxyRU3NMC3WRNbZ2VeUhB7a7dc3reBxRXaMk8bCDLUH8gwDETpPcBDXSM5ev3y4ctdx8cvu",
  "key35": "4LXdbYENJQYbKFqsCQopcmHZ4NEJUPGFatrLGdCxWdB9uwhTtW6NYSDwy7pVcdduwWPzVaYbCwLtqW4cf6eV4pbu",
  "key36": "2i5EapyAYa6nfxgUrwwkTZqYVowUhxRpgMcYb8MFXBq5AXjPA9PzY8LUxxuhiSRgHd6iGAyYtQzwV7xsMPaCG5dq",
  "key37": "2kyZSZndif9HVBYAVe9owjsZnZGAH4eyyKj62NtXdnLgPriFBQ3ojfozWDrh8NQvsUrH8TbfModYuLvjyrZHpWpH",
  "key38": "4Lq2v8TcpbrCoCjUsfBZfp4SXRPHJvn84VBmWoKN7SCnqiui2zexMXhVhw8ZAJdWt3dcS7WKvpwCCaVuVbgADuyQ",
  "key39": "2Nuy15VtcxBTWmURnSDbDVLHLqaB7CYV2JEDME64AxdybaH3KrFBJHQVL8Yhs57m89rf3L8JJggo1agCxPud2XSD"
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
