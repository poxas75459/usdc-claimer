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
    "3zMGP1rViXkKR4LeTU7JCihSF7ATKxhfvDoaf9MWj9HEYWCoNdJA5RhdPeppXJrMhimJHUMGFvQsNmKcxznijkEB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QEFS3eL1geb63nYXd2mEVWGkyFDbi2MrpA5uv4pjZg7g5ix721NusASKmp3CQiqj4bNjtpfxrZ7JS9KTvtJKWN6",
  "key1": "zQ1U21L5R5XdRVoc4gkdbKL1b1JLnoGvretigUbsz2nnqPKkfYD9tSiCMDqeyjN6QAFxdMru9YYa454q1yRuWiA",
  "key2": "4u6PCZakdqvWYsXrYcXDKuBvRaMQEZAXH3y5a4sq5SshkXvH1kWAQzQthwripmbug3j9RAVj1sucf2X58hHvii3Y",
  "key3": "2kmTpU2s3NYx2zdEEVq1vbLHVe3cQRptiiTtv8MLCMxd7QAV7MpHvmjjtXcBj8JTSWLQpx8tJ7HVzvjaLxb9sjgX",
  "key4": "5tqDcGvQTRcN4W3ydzWefeYfNfBvqiYZ9K2Wg8a2SbGDUka7MJsK4U2BvLf4DkLxRHZ7yg97Y2sMg83eTMhzfuWd",
  "key5": "4RNKqPisJkYfPJZUfAPoE1K8kkUyBAdvrLu6NU9C2iUT8jTeiQY9jMGNvSNjjcYEFgdarhhyHp2iGBek4pgCDdHt",
  "key6": "4p3LAzBNb9ymvJBPnypQ7wzpR3bukVS52PYU4GYgEKi792rUBmyQCcVCoQkSHizzJudZquVMd9NGavaJtb4amWp2",
  "key7": "46gD7JdkuS1wk9ncJxTXDBVDMk5KUPu4SYmGzi4GuLyhNHPY785bU159HHAzFse6RUTwdoEAyKu8VDyCoJJDH7Lu",
  "key8": "4TXu5QkovX6rs8rVJbtiJsxnkzsMwkYpevP1FhmWqShzrxmjjCJ5s8vv8AAKibr2FBGRE8Q11JtnzLcxA72WKfWQ",
  "key9": "5SEtGana5o5bBZq44agFBbBa4gsyoGMAcHazLws2itmzma21kVHMVDfUqDTgHAB5PZAnFzhB2hmvZfzxzuqNN8Rv",
  "key10": "3DcTRoo6FpPaojBoTGM1S599bMeQ9nMB7jdYCmKAqjJrMcVPWafC8cXQwPKVfnzjEJxVwy7s6RFQSGbu8eUdeMHB",
  "key11": "2m8FQbWnTrDT1a3htHkJkuCSD2TaT3TV5RZwvzUbZuq9L8VfF5h3pp9uXZwLeHogQmPEuMUANPTsPhfhjANCJKws",
  "key12": "znNfrRYR5RTdPEB9yFe9qk7XQUKSvaoBW3djVJQYTMe4qBJsYat21DPw8UPrdiQPFyt6CHbsuZ4tETYgvip2cMF",
  "key13": "WuuAmHygem1gSa24ShiresijKgSHMTNShdnX7vtiwdStjFnHtRzRgt8o6z7ZbivP9gQCjEnnqTEJA9CRQC2wQxo",
  "key14": "AVXtsZnbnh4jXuG1DpFvXvSQdwwHn7dLaunrN7wxWcTaukfbWvYPskiE2xvrseL2teuimFqi1mcgQk318AMT4kv",
  "key15": "EKJtLUy323r1D4wLmUb9tKXptcAoun4QrjYjqNhpQbfqmTio943kjjsRv8zajdsxWTkoWmcuJhQs2dYuBuvce3v",
  "key16": "2d1xB5V7uQH9TQPk693MXbV4npZMDifZLsBsUs1cANPMheEbgdKGc3Yds6woZo5ZvfNtE8E1tAZ4SfPq62TnzuhC",
  "key17": "3m4hK3ofgBt3zBFf2SBLw1mR1d9DU86Jr9YqLyhr7o27gwyYWSbNGTV8BkftX8QCpDUJBk93Dj5j3KBde24wY1UB",
  "key18": "2nm68e2oTfimnTHAw3F7CTEXzNsrRxGsT65itfWQGV4ACTcvqXEDq5XTMypM8FQFQ4tbbkZqxnzaAk9Y8eLTQhmU",
  "key19": "3UjrKpkyDir9Nhka5aJYK9y8ZntoieNA3U5J54cXZJSdQ96qkibukt6SxuFfnix1KotLtviTq4YFZob5bvFtCJnE",
  "key20": "4US3oAm7zKhoxMR5kNNuxnUfjKmBhWUqf4gg7J9MJZ8c65fRhup2Hhp7r5tX83WSmE8jPt1s7iRugwEWEczKPok6",
  "key21": "2Bs5Eq1PjCrqEWRz2j75BQ7LU41Jq2W76UGkkuCm11XrqNq279egDGvrmCkkEJkvxhxhU5ZzvTvjFFbCkXA7Tvzm",
  "key22": "4sXSp4FYHUwkQNGxhzNQNfUn2V6P8qBSbnUBEkCc4gT3dQmHNg7Lw6FeYzNPDtAwfJ3wrsWnePa2TVehtDxtyCf2",
  "key23": "3kJqeSwVUP77ZA434EoEAgA5Hjsad8ecfE7ytrm4Djp2sx69i9MnMsLXdtUx2me9Hcds5tyEiNNnUBDCQQohXhoQ",
  "key24": "4GHszu8YT8cKWDSGd2expWSV278GrJ17uFnwtndMVx2JiRRkSQ2RGa2pe9CKtpg5RDqMu21SNALQmwGiw1JsBmpE",
  "key25": "2s9CuqGqsUZAEiHNXHZqebVFVeVwgM9JPa6tBZF9yZRAWykgas4n6JcHLC2obfoMbiC3JDQUDVSnr8g7JxL67MJt",
  "key26": "2GGJDU3aN7cfTCvakfDpMuMXg5V577gRLdZRo3LJgyhKXs2Er3vSxM87YupzfjdihdqoRDoyyqKnCz8G3Ki5pWw4",
  "key27": "41Tx9tB4a8MJqBGf4MNE6jhuMivAkXF4ZTqY4S37VHq9SDfJgfeU2NQJzEWeRKG8KBgX3cphfK6opeWe7mQonLhU",
  "key28": "79P5BvNUPcgT39gRuTi4GbVvaLxkmZxmsNTvP2Mni8NESNrB3RYBVCotRzHRKn7VY9k5Urov1FjQiHXCp3iYNmX",
  "key29": "2PkWsye5HWWQ8RfpN95TspuNciPpqcFi7hgnqRWZPdqnhP5MyDhR7ZJ7pPzrpYJjN8Upujk2CESUpP6quFSczzzi",
  "key30": "4eEqSg8xeSECLLvgQSPZpxe5ZaeLTx6R1VYYNDFyQPqwjxFqfon64Yg2ALfZmCsup9BmjKGKCEiZmZYY5Xue59VV",
  "key31": "39P96QU7edBBMLHjtBkW6zL1cKThgeL993FnxdhqUdRZNA6yupskz8RcQdT9JyJWdtjr5ERCB5wSBqTzt8CTbJvd",
  "key32": "5PuP94i3xkWzWKspVqbxmg3zx3o4dpdRBp8bqMaQd9U7TYXEsUjFEXnpVsKfwqkjMJ9avELq8m7pED2RSqoq9kPh",
  "key33": "4r4XSEerqZRMQ2CL2F29mCNDrVBfm4MYT1xSBsE8t8Ea6tuH2Uw8eG4X6GuLBsnX5bSkSgQx1wtCXT7KoNG9L4bQ",
  "key34": "2sjCvZ69JYNsVmahJmUtWSu7KwxUJb6FFVM9iHtCs2MCUwGwTsRXZWwUEnBgFyxG21p4PeuEpiGWBntFugRwVtZP",
  "key35": "3oRA98ah8PKWihQBy2mDPZ5ZMzkqjGfMaX7snZR1jwwqdgB92DnkHmpHoa6Hs8E2EobammEYotNMrruFhViaENtf",
  "key36": "3JykkQEzhpKGGJTz5dqfPFeLzACzcDkxqVM8LrehBo2fAGAnGuJHbzuksz9Zh8PsAQgzGvpF6i8H6cezYn3tdM9H"
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
