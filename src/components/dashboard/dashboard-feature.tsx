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
    "4aMgE2StuCqkGtRxGhhY7VEuFczQvNARrmK8MC4JMJsZiEj8pX3Vi6sgnAjuHC21EauVSkVLgf95pnSwM6wn5TkE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JkKBNYg39MZqMDggergd6dT47qXdiLNTy1pxYFaZhXm7UfMtQpBcFSYcfs8828fW68Uw5PEAkaBDCkz3LU5syeD",
  "key1": "3ur9xcRBo3GMKUQSnLRT6TDA2wu6nWeg35X2qDutArpbkwk278hb5mGN8SSfRuMx9nhpoeWT1TyJerJ6XQwN2EgM",
  "key2": "5Dj6M5EpPNzHLXc9VwixXfgbNQ9SJFbtudbtXDSsmVd4xwgN8Njkg6g3JUQr4GzuSRGgqjWZx9pm1o5gsf7Jh3x",
  "key3": "5A3ZahzNct4L2B3jcrsAoos3KZmwSBsFUovauAPcz8TNokQUQ5e78DE5HFf9h5qn9HySm4RxxZNVsKoLAgLA4fo6",
  "key4": "3G12rvydTB6UTPHJa3P7z8o4tB29GkZCyNiCcgTwRVPq7BWsxirjWGedX4mKFg1WK7g852oz3pVMYne1o7Qft6cZ",
  "key5": "57nrGxaenbA6vR2mKbiYqinffPv1VJvAsSCwdcGU8M3rDUWvmNyFghDokW4aP64TiRmWFTGUjRmPsVcTP9dkvkfV",
  "key6": "2CGQrZRXs3fQve9V24KEqnepFJhAejf7bCPLws4WmeeajhtwhaDad77sTMrxY2f3FToae9eJWnfE1tNu1jXmsLcK",
  "key7": "3TiTNPTDJyg5XXiP4r5eJZY2dVShYihf8eToiZoTZ49Xfz43gBA3ayYp7C4DfNov6UD2ePYJYRAKe86GSBbKyxwi",
  "key8": "2jah39hcR2iZKkVQYQHRJdYeNnpb4jkFwqGwxDNsDUjt2d1wCpjBDF5XhX8FsCoCctJP7jX4rjUgppgvGiSTetmi",
  "key9": "39JiDtA9Bt8Y6xNJusgAQqoQRsqiN2JDgTuC3a5qBzQdowSLVrFkjepDH8XURpLEthH2YinVfxFW6WsjkyXSUTyU",
  "key10": "67eSYTmMb52kCE9GdqghGmWffNWRb4urVWmLPGvKZZgnZGJNavfbKXsBdHF5z21aotDSQN6Vxn4x7uS8y4jboMx9",
  "key11": "5ZdfBUFyauWnUCcohKsmn51F6Hn3cQMZsPXvGnnRbPBE1db7N7KBeMz6c5LjG5kdAxDSD9P3iYQYgNNFKrRYiGp1",
  "key12": "3s64txsUvkJGy3mLrr47Z1o5vrc6scDF7ehadVQA73ayCU31LqgdZqu1gfjmR3ZHFiFuTSzRDfjxitSJvwu5X7rS",
  "key13": "23eztkMAGYQSCz8Q3UrPKUEVTijMdmeLRcZ12cbsTQWjXSSeusgE6syVubq8oVoSYupByuKB2kNA8LgTWxMyM8aJ",
  "key14": "48dXcecc5S4Y6hnPcJYD9cdNbL87dCw6nSjNaawNyBVyWVgFUtWHeDcncNkCEtBjUvTr4UEh8aPoifZpSEc8dz9A",
  "key15": "2aCPxzGSjhhTB7WrnM3wUtqtB7P3UugwGvjFR8o5hS6J7ggBkFcegQcnPfDJ5T5kdW4Wct5BR5vXFpDgJmRiiQh",
  "key16": "4niUokgC9gbLSYx4cr8r1AHQEA2pnjLupLAbGimHKVqJRGn9PQmgkCe16D8YGqveccgFVQtRg96pBHfQGFwBBVo3",
  "key17": "4zMgMNQk3seHXX8FYprVeJgq167yQNNP4ugAZbxjEkmHLQcmorgkdttPEgmFay9JxJf2CqnACy3imMYFoeupdGLD",
  "key18": "47peuFzhcFakJK8cAcwwWj9H87Y4vZaEc3y4JaC3LdCDuhhNEHWP6RKLZJ29XSMu8VGzQ5mrVAQ2sDLJKWDynvPi",
  "key19": "57mQKDNb3ksLzpmJ12NjPy1Qk4vULe6DZ7ypVs7YYLaCNpN19TycKfN6YgesDgjqpXtxX53Ncf5SCpxcaBSH6AxH",
  "key20": "3DEG7dnEh66HB9Lgt1as7De1P55siNYjLhnna6AHSmiiPSdfJbpWQCCmvShJjG57esSQmSDgT1UynEs1jeTvfjXn",
  "key21": "4s7QUKX7iBytk5w89e4DG5PbuLnQe6ZFWe8aEXoaRKi2wVBcDFbVU2PJJ4Fc9Jh719eXuaohordjHtdCKJK41hwx",
  "key22": "33G1wvCCno5qH89JZrguEqksGxbcpXrDtQ4dRxJ3Bt8ozcNCSTe5614qiFrPG8meqm6sBSGVajFSm9r2fnG9zPnb",
  "key23": "422Kedt3fUnHaFC3B1K4BEwTr1B6HTpT6qpBDamnToVRc9RZV8m5Q8xN43saep9Pzu1ntMQ3qLXJnqnKtsr9KQeF",
  "key24": "24xLsg8mBHopg64qHK6n8eJTpi4P2xJtUaR9TuFtZTDeQpcGew2t6qvHFoE74GcqbxqtYrBWQDeaHJ3sWjxiBdDR",
  "key25": "4Cfb46UdsbvpvHzkMeHEKRjGzkNrxBNEpJjda7rRN49To4VGuaF8Nwn67HZPUCfYXoztqeY8DF4NPSz9eA7K4SKN",
  "key26": "5p4Ro32XiQA9NFtjLWAwiDaCnaa4NYBPaf8T2nACKjLuRcXUxgZUKAY1Sx2MkPh5MZrpwzpen9TEN3BaP4VdBZNg",
  "key27": "ViKndaMod1cgcaSRrtfUht8q7UNqT32R7T6qvy3KSitqr3SeTHXYSRyPBANEmQD1f8vpmj2XzitMae3ujV3iPuB",
  "key28": "2dXFp1jUesxNRt2TXkoCPcmYrY8ZhzHXrNJEki2DwskcEj4Dkm7RzEGuqZJ38Wdj3j8gAcMz7USUjRBk2m2c9MMJ",
  "key29": "2vkY7wJRXH9iZLCPWVbTik1T5MsX4fUNdwk91GbfBXXVY7QEMBgEM9Ub9AAHRDhdzVXuCbdT2e4iSpeqAYpsGNfC",
  "key30": "26Ycmycr3DuX6HFjdQZGS63rhabDQWGDaF3y3KiNgwmzNpJRuqhW2yip6EPcjepM1Hkn2NDhjeEeUi4oNCAdfQHB",
  "key31": "63aqyYT4hdk8wG7Nxtsf7C5qZwFW9VCbWnKZ9igJakUPemZeG9E4PfiG2eAQnFYeefp2BxoxnoZTCi9EyWW1gnMu",
  "key32": "5buHR6ewQnGxSSvrkkg9fHceUzjFqTgqgw3BWVNefSRqo6deYHA8LqzsBQk2sYEfiJE2zfPH9bMWr21jQQZrzAXb",
  "key33": "4GwEtE8G5nD3pcwJdEdbUj9efzKva8UAsWvRTzj4Mu1XTr8DgCPAEezUw6uWiKfGHNFmcshpa5Yn6rYomXMxoA6r",
  "key34": "42QhoSb9QjQMDeykve52vcMo9G7B6eHvGmkq5M8y3M1w6TReX2MdA3qAeDaCR69PU6UE8HqjuHXLGYbhqZD3VPyA",
  "key35": "3HsJjhX5o2e6R5e9W6kXFpfskKEZYWnV6dbczbxWGU37VSFi6hkdGRSigmBXQqGK2zXcziyEKyZRBUCaE4XupvWA",
  "key36": "2e2ceStpWDJMMgCzRcQiJ7tibGP2NS6kTEUNUfuStzwB5fzqAVGc4gEAB2Qy8Lp6hUNN6q2QZVmxwJFRHB8ikYcx",
  "key37": "4j6L3m6qhTcVqXmMZ5ZPuAh7o57LhjYRGnkiBdHRNRxUUjruvye2y6qNxS8umUMsRuSgmyV7MnNTic6DWSpGjPAf",
  "key38": "567Dfw2Co8CzLKacVPCGng9GuZqC6vcUDjLdoXwwcGGA3Ks3wDsdNyiwt31qWcTCGbZMAdV6xie8HQrf7HY7UoKK",
  "key39": "51q15nKgU4Xvx84WMGEJQk4JgQvdFUuMMvEvtXR4PYop1eGhZP1n2kqFVF2V7m9ouvhSLvuGmfToJbLxna6tnEed",
  "key40": "VntovLdrgEzVHjTBqJ7DTqPLzPfeALJ49jyxXBikqkxYn3Grtv3dFNPeeXsihkocnWURYHQeL7cgJBcuZLymPAz",
  "key41": "2SATZmurLvy7xuaxd9gimBzMeET8Q8bLS1miNEzPmmDagYY4Z1AX4LJG5uATqjwJPx76svnA3Ki4KvcrVWp3jLoq",
  "key42": "DreYgUTfa7oP1Nbo18eWWNGGLFTUaaPCdfnExnru2DAM92MUFiUowtJL91bhSV6NM8VtAiKBZFqztm9KqkLLg6T",
  "key43": "CwEDZd1h58KdshpQwPVnn6vj97ki9duADEDk4YvDbB7hTLRTe4RXynU28Lz8zYLVqTuTvWVJAdSCVPxkeNWtewL",
  "key44": "3tMtcmMi7VjnrP8ZX4P69oofEGD4T2gqGXp3ZGsujtpFumi44UQmpW2CvjcavukneHFR82pAa1HqhiAW3MvNMsrx",
  "key45": "uCnMDa8mMgbT93fCgnJerzU6NBXgAKrjpDrH7zvLmz726W4P3SP1DfsCLcjKRNpXHHwbaRPfySajHih1nz67XSu"
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
