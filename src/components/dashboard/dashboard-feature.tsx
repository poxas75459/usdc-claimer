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
    "3VhUhgdsam2Kh1AkPdjFnuPDQkNdM6vKYQH1c6ZRNrEgG8w7sTyn2TfMJWYBkCUWBGhuTazMyGYJx5EVCL5SfG5R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Cijdb9LHqzUpMKi3eBAXUvZbdFgQWpzNNZD7jExbgYWmVEFVajf9hfDWFMgJy7Gxf5c4oFPxuBtEmanJ3NU8o51",
  "key1": "CYTwy78hTCiiQSCHK2eW8QrFdhcFPzQXezR6e6E1gFt4pyhaosMzHShESCuWVkx7YXUYn6hu6rSPBEgwrUnMKhp",
  "key2": "5GuBiqsB7njkMgc1YHxwb4reNj7tkVGNtRGP5jvGdugeq8vmZh8Rtj19VLwjQCq7XWdbMTYLJZcC5h3LGYqXktn2",
  "key3": "3a6zwfqjjYzgQNNyMeDngpeisPPi61SXgHBso6cniC1ifbNZD9QMyoDRb2KPPNTM4mBp9jEAP7avzJRkBXrJfiPx",
  "key4": "Wk71H9SU9T7hDbix9vdtYaGSXjUe81CDgmgUs5bq4jt9NnqChf46LRwgLPJr6am7EQ6DxUuRmtFCEfPb2kdTQrL",
  "key5": "2wdHWESW7x6HK5EAZVPhR5Q4fab4LJ5ZEEZQrwBg8HoX5Fn2fZEMjnNm3k8S3yiWru7dNmdjsqL9cR1YvP9bSNtB",
  "key6": "29oSQnE6j9zXA1i6zmCQJKANfTziwJNJRgoaTYjPYxpWV7feRb1xcUDvmDZQHYRqp7xovdi3165MA12ohP6M5Lua",
  "key7": "3Hg6iRgkbXxmMZ3ouC7XFMskj8RzXQTpGRBDwHhg5Q8iBvxxYsYC5j5ZGznDV8oYhqpf42rA5X7Wm5hWrKuW2WvL",
  "key8": "4BeSSov765tPaUAN9b2pTEfGk3zK9sfEnd2VGD6ns7VyEGR2VYtQ1EuysdzCU4n4Nr3c3yjmw82yp6GiZ9zUBDCf",
  "key9": "4UrgY4ky2Eka4YiRi2HnFZgQPjcgAXHdbnf84xogcear4VDmo4hJzhR5bwYPDKMzcMtQagCFPhD7kr6tsFxrPHNm",
  "key10": "5FK6Xq8uagoyGnd8HcECtG1qZUsamiDb2AAEMBZYwUp9W4QyJERoo8hbnz1S3XiuGEskjXa1rECV9zhke4rdcjUj",
  "key11": "vN8kxnRH9KEaxdrW9bUAD2xMbgiUfjx4RFeDH6eZnSGmLZqciFTxxpKpZKWqQJcL2NFhhH4LzY8wwdXnzyG8jji",
  "key12": "3zqJgkBdCzRjHCzNDSanvM7gt1zRt6hvYdTvGkKBdoKfb4io2arH6vfLELiFTVJqmsLYAmHuZwKsZQnLcJYj2koL",
  "key13": "2jmFbM67bSE1XDRezKsKzXKER6hUhQjEWXaJmMDFCj8htRhad6usFJ67YMYSSZ2Uqgw7Qmp1kJZMC7TmV3ciMPpb",
  "key14": "25asMbUC1fuvXJSuEfqoRQUuZ77brguAvNZbhukVznBrFTiJQRfFGgU5MHXxgrYMfXh33QMGUstbHueLf8tPLvGx",
  "key15": "5tTcJYZbPeqRbdwta551gybYg3fv5FnTuDGp5MQb9xH51rNstaGwC2Y8JWWo1TJAMv4US1uzPPjiH9kdCUkemSU5",
  "key16": "5mrNq7CA8DJw8y5hWWoxu1bAotw1pZ75tzbGsYjJPUj4A6m6QTcTfe7dWmbsAZYSxbDoFzdyuPEqogN4XAjE4akq",
  "key17": "49DSCaMM7GgwPQXZQhHhyjBhidRgqo1HncE94j6d3jtXPJXnHVsaF8144UeKzAQgArudRKg6LGoVn3WLV439F3ye",
  "key18": "2aDA5ybzPjz3Z88yRrCkGMpqaHRojnoL9WvgbSR2PFn5T8WTdWYXwdqB6GLnTPgn8YEVXsRc1wEwexVqrGEDnYfP",
  "key19": "5CzMoVBgV2ZHtcosFA8fzUw7TD6JskXWRswJoCtk4paMtkb57LEjbgs1VFeHeZeozRUu7HQK96oVAcsqa88SyuE2",
  "key20": "NHH293B4YCJzHca1PcKyGkprP5YjcSYKqsWwmiPP2Di6BMXUdvasVqrThj1tbo3UdJyma83FEyf4ZqtbYBbYi2B",
  "key21": "5GjqfHqHWnGQDRUSgSyyZCjvSRQ3WE6syXF7MpwibycDfuCwfXrtrwaVa2BJE1duC3SqqAgqoaq38iQqWYCX6hqb",
  "key22": "3is3r1sov6ZBHm2BwT6hjCpoaNv9cjGwz3JdRsK2W8vVGscR4GdWQcxvcRurPWMxg4N5vRtNrXSjr4A8oLKwDgMz",
  "key23": "3xBsPttb5RzkBjxpP3PPDPRPacVBwgcBqcHBgUcEHtN2PNjXb1dUHcYVEuE9ZoGVL4TinviWraiGr2EQMpJipuXL",
  "key24": "uERbPXHw9eTC4sHfRF7xSAfb51H7KL445xJ6P9iG1L3MK1kbtMXTExniTQ93SWaaQ1RopM21crKVEE1zavbFwh6",
  "key25": "4aL3LZ9t73uEP6tNLLxk5YbAfZ9Hb6Hv9szZ7eWrRf5qWhJiJFpESvP6Gmcyd4VJTRgYvgoZi22xEN4iibQtXH6N",
  "key26": "SLfzZPWJLoeyyM8eMZ5CH6wBnwaWNqmiuLDokpK3cvx8VT6Lu2xRtBL41CNHhdGV1KK5VtQSks9Ku3792L1kxfD",
  "key27": "438qUNE4BxB1pdHZH5LiTrJjtdRTWRWJXojC1MCyeJAhp6FN3yQ2woSk8eafJZdRqrBnq41jzT3boiMBKR9Vim73",
  "key28": "46bxpRmc4B4s68RfgjeimQVWYKQ2SLpECEFMYmhvruWYbMdsy3xxidAC8jWrjPzXXU2LyGgar34ryE7LTA4PfANp",
  "key29": "3VCaDgvuv3Rr5ZBEKPPiKWqGBy7j4UndH1UKaeknoqR21138Z7AE2RTg99m2GZ38tbmN7ZsHv78DUiqL2CJhYJpH",
  "key30": "38PamPgHGPULx4k2QsLbrdzbedV3y8DmyfCVRcz87NB2pEXVxXD1wCF6ogyT5qSZEkPWaicvq6hSMZxHZc8GPBnH",
  "key31": "Y23ZtodPH2eL5gmUK99BXS6XBWRSc1HhuyNMuEX4iJFWLzD7sycWfBrg9WauPrz56QCRHDVMCtuT114amnP5pEh",
  "key32": "24aKuguir1KdYuBoEpV28jSwnCvjcwMGdEv47wZGoFhnG5uVMNQTRAt79hAoW2L1kygLLPvwGjUc1gJfBKtpK9J8",
  "key33": "aTTrydP7gRhBCtdeZtKcDxP6if4qQxSRo5htxiH8z9R6VvHyNvfPwsbLJHFWnDY2oh91cTmvVXbQ96g2W9oyCB3",
  "key34": "2HNbRgXiHA6jV4bZyG6EpJZnYwzE23cSEhVut5UzPqF2mSkhBZrXDd2pAWSxm1URioZtUXJYuqKStkSFWy3s3oe9",
  "key35": "3sgTZXGU4eu4a6X5Zkgqyqncc3AZhkB7iqpLYkQE7kahr9ZU8WeAS8f7SD6RpjJ3VZyWraFvmavnnsKc2yoDbjsu",
  "key36": "4DXGGz2ZgaoNQdc6SHYTSp98Ep4LE7ATd8i8FZu9DBS1L4qYuybCkBCo1dTY7tV36Y4kobYgGMArXGhmW1ULvzKJ",
  "key37": "5F9kkzEEw8stUga8NPiw9qxMThe99g1pQ8AqMBgjLzffAezN3J9etXwnSThuEGva9ZTbK8P7ihnYaRXpHzcfaKAL",
  "key38": "5qDKQLsWzip3i87STxsrj7f1T18ppU8stKh13S8VNYxrgrGqDNV1BfpgP8FnQCHCA3nAH8rxELpzU9TbtBMyCqk",
  "key39": "4SD6ngXd9PwwhrKSYEpkfqfcCZRp6VMEF2EhT3rUCVfwu3A55yedh89Y8hZEBLRC1Dd26qkuXi3THj6GtWwXQRoA",
  "key40": "FgRFuyDvFA2QaDwuhmoK7jaQPgBaUt6yrVxmbo3CiCzeoicjVAgrAhNkWnV4eyT4LEapyz4KxzKo8L5zBQyxgyx",
  "key41": "274WKNrCu1whUsHUhh1Ms48JgCR31BF5T1EdKXpMiYUEo23Dxf13qcJnF2dzGSnhP3SDk7DgkLwckMpnuwHnQjbR",
  "key42": "5JwowtweMRxtrBsny7tVvaXKBJ54DzUJbpK4BDoXdrnEV7xVqwZr4cZaFjuDXqhworwkPFMEypi8kvEoN24uHzZP",
  "key43": "5hpXHEvhqk14mo2vdABauyAcfvMmUib4MYRivEfbJjo6cejPKM57AcYWS39uMUJ44Dt4qbhpFfSf4Pok6F6rpeU8",
  "key44": "2vnktXTVkbqPGWnXKzPXrnS2T74AjeMBqXYiWWsKJPybxaYfvJQAY8xDmxrmBUNQUR9SrPoiENx4z1kQ959Gk3fZ"
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
