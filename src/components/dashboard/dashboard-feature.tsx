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
    "FKu2yztqUDHJbCgbernz9rMoXn3JEbbT7ZwK9vmofyRS2Zq1Vd9pHMXENc1pQXsYB4921pyKfjRDLtmXSADkYMx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Q6NG8S2hp1vgVMpNt3a34yu2x6hQG1xaxDBkBxe3ctRpQzCzvxFdLzTTe4AaMraK1DLTjDC9iJrkuQT9b1ERruX",
  "key1": "jhPMtUcE7KcsCx68nFvLNnBJeyyFGNrGBvvTMY2qgoaY8s54DScxkZAkWtHjrpiZ6NThYi1bgHDAGHvEgN3F8mA",
  "key2": "5JHV3fLzZEqRM5WAZorv79gKDN5mNBoTJJaS11k7Mk21iko7enJaMW5wYQT2RrVwz1tGmd8YVhxw94q1nTU6A6zc",
  "key3": "21LCwXEHzzgevTpzUgmEean8ybhaenk9n9rR7r7fjHNnCCupMMiCc6j5NwNMQykENWViHJZeBqkcL7xLwvumQ3Nt",
  "key4": "3pVdurUrMJBirD5dxrrkmNxTiV8utuJujqJKPikkbqimX46QmDqZDKAC3fXXebkcg4oJ2E3S6ghyMxpDK9mHrD8X",
  "key5": "5FU8kyHFpm5mYkbW7eTk5qDtRBozdYNXnsgMN5tvy1XusvxN1eXdruoiYrNSXdGz6RPDoeNFnkrxSHHai2cgWL4C",
  "key6": "4wqjr1v2drdytm8bp3NXJjdhWVAG9GzFFcvrdmFi12Dkxkfxd1R42t2dfn6egeLbTMc1SgdkXGNsidzyee4jKTRi",
  "key7": "3k7rszNVH3vDbQFYxPr57zsP78WA5vKE5tfNFsHWPpGVsh4Q6go2i5hoPbEspA2NLCzNNpyaEFjvPXecMNfiaZKV",
  "key8": "3cRCHz2cmeDZ4DmWobQNK7NWCg9cSAwNsrTJAzBr4GuGoV95F8w2gdzcpPDtRKiWZeWrD3W42sgH4a6dHM1KvDNY",
  "key9": "MByZbPoQbKyqthLyCdrrWPwvrZK4MGsR5k6MW7EpTKnTT7Zofyug6dAKZak2HrYVmSPyYFKpdfDGaF3hkVhFZLe",
  "key10": "3rzUw8Qa5nYyZbra9miGC5AgDZhUC2FuVmEexJRbdQD5Wr99Pxo8jzsf3Siuh445GufGrPUJAaWfnRrkDawkHheN",
  "key11": "2KDZ2dLss8C6MKYTKjQd5XvsW7hfnvmkffRJTHpSDwpRkfY6XbzraBgBqCPZXbzrievvo5ryRtjjfEnRWonrjZ5e",
  "key12": "3jeirM6D2aYck2TmdQcuFNuKtT4VCokhWTuURVWF38a2VnQsYR88iaT8AJ8Gy2domPQNMTLWwq62GKfUANUCF3ka",
  "key13": "2SdHX8HfkgNybRSUbu6Qip3wueAhXpiz3bq54K9gm17JHFaG4yW87PGMnZdEHk8bdHRdJxB2gvj3hrxTMjZSQcAo",
  "key14": "46R4PLtqcFqJrZhL9u3obuYid3RH3YeswETU2LzAXa82vDCgpJnCLCPxwmngToJVWo6VD6JQDYEFc8GgzNTMqU3T",
  "key15": "5CwkdGwXQyHWnofxcHr1BHE3c67rgqfm4vEikHwgeuDrqEbPFVhZXUwpBXo78WmavZCe92tBvMAhmbEKYaDzphdJ",
  "key16": "5h2k7118LfTj59kRWMhhraFHpwxkXMvYJVM2TQ9Qxyz7M2cprnuVzuB3FqY2U4JNG8bx5aWHr1q2S3yr6h8hoz8Z",
  "key17": "3GjvEKkBoHvrkjGa2KehCEPRkNHJFd6NrEKdPGLkvpKa8Z9m2qdFkCdKdsXRtD9Bq7GVGzoNvrzrVPNWUXzqqCz9",
  "key18": "AVQHfyr2gVCH99gwLb8v4dPUvkEMgxgPUDmjmnWbWXnBbQfYKaFw3L37r5RSb13AoGVpoDMJXwz874cBCAnqJ3B",
  "key19": "zVjY9VSuGqRqADopqrYQf3kAwvYWHsPkPnerVzMhsg5Gg2F7urvauk8ABhWE9BsCmucpwSr83eoZVQKRLUEwaaM",
  "key20": "2z84d3Poj1NFKdxP7LQvHKikFLFxbX3xp3DBvFdZKaK7SVttvHLxhMSXuG2yeYtqKd6Nw69zosCXgBKqr4pyPUTD",
  "key21": "4QqCHFyFSsY77uoBLW3km4SmM5qxfBSXecoCwtkqaFNGYT99z5j42kQxaqYDz5uNKh3xKyzUR9G1SK9XptSH4mm7",
  "key22": "293wR4nBE2up3PiQhcPfhbRFQZgCTz46c3BsKkcaY8owPcrHx8HTgVQRwiMW6wV9yeDRBYx1JpHPmZwhoiL3SngF",
  "key23": "2B3cyXpTgCz3aRyxywZYqMusDsNJMMfYaiuENsfAtoaS2i8BK7g6sc7BzXVdfz8LqkZuqysJU4WMvhPZtj7e3L6u",
  "key24": "duQ59QBugbr2u6rRATuiZuDGYUTHTXRvT5RxVpK8VvK5t4pcyKSwJaaFCYPwo6BLJVKuJ9huXXbwYVwK3EPbBSx",
  "key25": "5HDnWxGXhrLsfPNxNSHdZhYGxwugsk1Hv58jeaevFC4nNDucFz3GXzi4Vt9Yog26ZhLgL6y8SufQWxJzh5bXZWGh",
  "key26": "5AFtauBH6JFgaViMWqKyVYQzXZKFvN5bQ7k9pFtz4VGohTfGyPrHKfV832RUWfejxq4TDAZ2YxN4YcHTc7GrRyxF",
  "key27": "3FS2F74qcf7BB5SJ1cVqang238mmE2pPPkvj79fMRN1PLy4BDzyqE8thVGUsKtSgpRQoE7RGPjAxi8s9k41sktvx",
  "key28": "42xG9b2fEa6SPq6BroVAFAaurrWckcAbcqpNgNcq1HNqQ1rvwW1z3WEq1GciUzYfV8NWLaE18TbgLPvJRc7msUQ2",
  "key29": "uGV7kWmsdQMVCqzq4fVQmEFLuTN22S1hR4U8GtJN7z5uzhENMqkTzwtTwqKdtXyPED8dZC8Tk9Q2KTpzBmkzeKa",
  "key30": "5KfYvofriLnuzgPwfFKQzfpKvAcG2cbNjXQLZ1ywjidW5PzVg4cdMqojUyrec9jvWq2AvCHEWjHmiAq8jfnzhkCY",
  "key31": "3Z6WpPhRM3rHhBWncvAMEC1XuPsaDhUkg5fY5SkRKRApAA3TpkSdt2vnmvwDLurLG8x8vESuH5v4qPFHyLydWdFM",
  "key32": "5rj6TPq6kajMSLsUCNi3TwjDXCoy64UK6Y7gEh99thbMt535fXGdJnzSk5Lf5VXPqJN6A7fVA2zNzvnDfazqZU4U",
  "key33": "3epR3X7tzEAo2m2RDwaAwm7YXFoaTzgW9Tf7aASnL2ESjVcKEHbiBrqqymwJhMD2vLd3tAQCUCXFNXKP848SmRhP",
  "key34": "2s8WsKpkYJFJwoLypVQYV8or9JU7sW6YosBnsUdpFW2yrLx9pkP3u5NjG6rVDohh9s9MBUUmyRgyN5aNiWdcWAVC",
  "key35": "SALY1Tgdy7vJTCwDf9mphC81JQBMg6W1rZrQEKkD3zUWPhrPxtiqrMd5DFHbWwx8ChDTdifuGtpCZ2c8RSX8aAB",
  "key36": "4trmc46YB9mYwV6ZzNbEuvinGyR4K4HTwPrWZXkM768q4QfmmB7WfPsjhoGFJEnEuBjpKRrNR1JnToWw6vCjdqJj"
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
