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
    "2A8kx1RVkYe3WWfPQUVo8qX9iutH1xYwdxxBfQmoVCSw1ekXusDFZBZKExSqxCv1QaRTJEhwQvxv32JKJr8a3un3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3d6hENnvpGBjf1Fi9ikh43uza66KsAqKTpgT6UwH3fbKn4pjEDeu9vJt32pRB5b2cXf5nQhG6BMvQbbqqM5QP51a",
  "key1": "5dT3KG9LwWb7HKnQMEqkErhhWjYygsgThTYqi9MzCRx9aZti4UwjZ7GmoxPxHgUcfhG5p8YpYGxYrwunqv8UiX75",
  "key2": "5vtggsLTEtRZ6tNGsJmmMCLoWX9eTsScAvndNAe22LT3rGTpnar5qCA6gunKmgLq5tAyMvELzMXey4hoXcyCQ2Qh",
  "key3": "5RBkTHVg1hhDUHUrpDZhdZeeZ6LFgwgaghLWLgZ9fHNeMrxWxsSBxtZdShTDVd1pe9AWx6BwpyBEfrMdqManf6vo",
  "key4": "4sdVCS6q9ypyit7UiifHFHesnqoiQBVgyaJ8tngNJ4YkUZnCDne6uwtezinqrbcsmkhttNrAGzH7khp9k5jQErrx",
  "key5": "3qZAqq9yut6ffp57K2VLwH1DqxvwYyHVvz89qqpTnR3fz7t2MsEGxV9pwRLLYpcR5X7741ipjpsmxna7KJcjyVBq",
  "key6": "3pbHpt7vjD7wvFBvD8zhiY31MAetH6pgRHZU31tL6Fh6LaoNm6gvZPWvHhEToWns6GUvitLG2qrmdM6z7YBvHHGX",
  "key7": "5CJ2xD27EuhUoxrZ8CetAUS5dMwW7hWL7cZEfQuBmdoAV2UKkvbyLu69chw3zZKpxDn5paqiHqVgskkA8MU2hhVc",
  "key8": "5JvkmpMUmy9PTW4WrKBQ19b89SRgDaDERKRZhi23H4Fze35v5xuR9Ds9qskjLJnsQUobBFSa77hGeJjC914v1JxV",
  "key9": "4EKrKLqXquRxUGjJSbnBwSnZENvVMNzzhBZ8yMRNSeezBtAJKQShGU4SgFudFUEZzk12KRkD7Hth4VDB5kbjWXsa",
  "key10": "pMRCeTgQQ5oPHHxvE6g4JmA8u6qiVbV6SpR7KCxfiKqgjG9qhGYh3iW4U62Gy61H19nL6qdwz9NdnTXfiFTnuTC",
  "key11": "3oPnR7d9N8judT8ht85W15jcE3govRBoJH8VdixZM21znRDWtXvr92jnE6atccTCNnsdnADYwpRzdhu8eEpnsviQ",
  "key12": "54twWrZwugfm4fKdwgPVVjNTaTT7RrAukeVa5eyzvwKYX1xhmcUUSxGKJFyQes5CKH9tMpKNLAhUkYkDDX3p5zJw",
  "key13": "2qQcP9Wgtun4gjVwCvD6jQCJqWh52XBZNhgp6LU3p215UUxLPoiB7nM6iwJqsuC6NLWkyjtBan4JduvKqkBMXrs2",
  "key14": "4Fq5yFyUZnCBbzNBubZLVvwdz7CPXzjbdtuFgxfh2cJsm6m6iD24TGcR54D4PM7UnXqa7dVsPqi66TzxH7UVwW4",
  "key15": "3f7vjxiGFSPBsED7tdbv9Qs2FdkXbFDdB4hJTfDtgFgSXL41LdPuhhtrmS2DzrUJ5WUkSBizFSa8PmGqdZwxCLLz",
  "key16": "121bUdbkkWmXADtYKrq1Eat9RX9FMxvutg9nEyjqxMG27hq5wAom1mkyEow2EWJwtYnxSSvJ7K6xHSpafS9teQz1",
  "key17": "32FJ4WZAsgKKCKJSmcPxiZp2oEZcyNBjZgCv129THupGE3Gc3J4EmNa2H1biQ6mfSDvcnuuA3ToicrRbNdDs7pK5",
  "key18": "5dCYXd4ExAhwocN2LCr8z21SNrZysGZ3cm4PKU1hHGqMf3epWF2Mq3jT6bjUKWPFpQEdqBRzjXwuXEtc52UoDswa",
  "key19": "47FNEQRRK2FRB1VXdk1aVgy18P9oi6GCCPysXaejoQFnwgcfxbRzvptpeqC16qvew5pCKEZ9YWiSUZ6CG3L6QeDy",
  "key20": "5KfgpitLKCzyPi6MuaxZ8W2HQMPdXfadsSX912ifaSLC2zVC4FdzQUZe1zxSPEseatpTLzA4Bt4RA8eQD4nyVuZb",
  "key21": "5yjQGGA4fE8AtDPbTzCUSjdMS2LqtRspQzFZCGrHaS2zhbX84vvBF6Y8ZfXiRNANBqwcu6jR2yeq1sVufmS55AZU",
  "key22": "5Qe7qgKjqdZgBqkPqTAWSmN32Ez46hLSqWp5E6h3fo2AgA33sHoXLQoQYX5MrJGaZY2Ydzc46HfGTn4ByZzCkX23",
  "key23": "r7zwn3HTJCprE9e9MvUoU2Qfdfq12PuRHxi9joXU3Q2FrtJ6JVzYzt4LMd3LU7YJAvTa2Sv8oaVF3tEP1bcKoed",
  "key24": "xqtNqZPDnQ4kqdZJXs26D3aYp5Bw3rZCNCDxA4B49e75DUN6WXgW6egnK2qVS9GeRy1ss3TDv6oZk5Rq6p4iL6Y",
  "key25": "5JppsqEH96j3TEZnbiftxkb7VvQusb246DkZongr6oMddZPsFyoLnyRmHabvLs7Z4vSToBTruJJGA5aCvMvNZWzf",
  "key26": "oJ4u5QoCfLTF4poX3V8YqBvJVboTNnJJNrkN5aoxKqofX4XANGKsrYZLqnLDpocARukdAMx81SJsPxo18WMmaL5",
  "key27": "2NKp5hxZV2QHYEHDZ6qfq9kb2fxFKF1y9hCbubMhDaT2u22ozsmM3Zvhpzx9JCPwBLttdGQ9fq4iMv7niTKsVM7b",
  "key28": "2Kjo7132GfCJyQ6jjXw2Buf79ohnjQ8pbG11XKpoSCJBBbyje42rze6RscGenBD2xzCBJwNQ3Qme6JwtheLqtmMg",
  "key29": "KLQk47b4myYxFWCeokUn9ckQkisXJ1hnFznn27uYAGrx87oiBeJeihPi26Fi7rfVrcPM1ZYxvWg3iP3CN2rzBQF",
  "key30": "Y42KH9E3xfqqV2QC9Qnd9Jre7xGmCGow8puoGXJTQr3rDSUj8DYfL4hRaXR9zhM7EiYnXBBT4osi2C4prKRhinf",
  "key31": "4BMRAGTL57cZ6foZCYwc7QFyQpvGjKjUoeRT5ZQyK2dAw7nsncpzbgoxR7gXeyTgVKrD5mQRLBCrrxyeDqS6hUqi",
  "key32": "BbVXuUFELJGvvSw8Vixw1zJR4U3cZ4yYSoozizLYjbVcfY9RKtV8UTSzRBpL9DaGBTu5NeWdw9NPeyTJt4kccsW",
  "key33": "nkLgP1EYBJcDhgfeRCqKT3Ld3MQKBTdKF12HN57bc8kenEG5CdcV9CEaZG8ikGUrxZfwyfyXT7aHxPKhCuLa1mK",
  "key34": "2GtWWdU5fyj89qurmD5wXPbaee5AeNk15mMwXjTy5TvuTN4LohuZpm2V42S9TpBrNRd1tHS41SXuCnqgVThF2NSE",
  "key35": "4SXaiiFXdFBhJ25gC7rdPodvVWo65Jteh6HMLd3eaCyJ5VnzgcAEqUBh6h3TkJ62amXDfWJyBDehswZaqEKeuzTK",
  "key36": "3Ysdwowf4Q56mBUXkA1G44CevsizruCDPC4DR2BCM8rKK3xWcFxmH2zvBFty8cm3GfmSyowKM7MP61kbTm479H8H",
  "key37": "3gc5G6d6v1V7r6QgydAQWMD6QS6MA9VC9EyTpWRiuWP9pUZEM3csNQbiek9FpJshopoNkLJc2tv73sBj1KWnkqup",
  "key38": "5vDPiciT9LGR4Q7JosKCWoT6VC9XhF75cyBfoekWCv433Cwg75Q1CaxuYuLRTzSLidGQYE5bhZ7VBZunq1c7yUrF",
  "key39": "smL8R7qTYxJq7Tn7YBjAFTj4s3tT4AhQxHuTQB7RcTXYnUAgz6epLSydVTm83ruUPfr4SzZ1kF4dYBKbvoGBTTa",
  "key40": "5fvbL4zznXdb3BUH2EtWGhibWdL45KwNiuR16ygWV91S5pS47MxpzNxwxvEWJzQ2BReGU4j3bzY4WSrkjtJTnAsi"
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
