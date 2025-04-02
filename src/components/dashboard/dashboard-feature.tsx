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
    "2otfSBMyzBGZeQ9yVMJM26tyuWWYoxTFLJKEthSDbdCE6diyC7HAGXA8WQ96oRZxbUJD6t9xqJk2CXTyrACc2R3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38cMX77QNUT74ZRa7AVFaxUxcqbVm9ajdc5vtFUsCPdnUpePDwxxFx6uEVRtqMb7XsR1kTApMjEzjAeeEmQs4iy3",
  "key1": "3GE3SePdWx8b3Do5ZzVD1EgnE6RvmtFrFGEpxkSQGNHni8v93MmiUJzGoFRM4qnzbKvDbxahnXPUXewmXaxWGsng",
  "key2": "4ADmNdZEi5GZ9ETMuw2J8FkZtv5V4gwjRNcfzpcxNvAa9LMWK8vjanqeJnQUPj5wVrn5VwJirgVvPxHDwWdsz1u1",
  "key3": "4WBaw4urzxmxYAaseJMDYh6QZc2ffqYy98nQR4hNFXQmkqACrYeAkofwzZeFzvQnNWPcQPXd68Z7GrFg9Tho8Sz2",
  "key4": "528AU9sfrW66WLdcSUj3ZZs4JdpoDBbXHoqK7BoPx7xJ2ofoBcQNJd4HFPBXi51RzpT6U5ofUFHkdLtPUC59LD89",
  "key5": "52jyLQbW2iH7s2b5ztWsYgiv97JD1tcdgPVEoT3zmwso7393up3rYjW9WWhRZquZ3VbKpBNCwegwedBSSjjkLPgd",
  "key6": "2Ps8jQfoXtqukobecLnWEBE5q45PregtDm9u8e2mPkW73z2TUfzYcwrHTQDj9jFzrRypjFQdWyVVnR7NdZiyhHFU",
  "key7": "3paCTiZxKf4x8CJgrKi2tEFUucWRPzk5zkagydK23BpX33CkezuZrCMv73eRLZaPdnAny8MGisQAXSFAMMV6B2Jy",
  "key8": "2DyqPrCwZ4ucuQwPn363empAGwrkRRH3JPZspPJu8Ghr7veqATFEdbyjjgKFcLVZDXY1AA68bWQzkKk2ATE9VDre",
  "key9": "2pEj7NeRTNoNRqsZxEBJHqHyDWiRUfD6oEU5pjAZcbBMHsGqxAyMkicmottM5my5yusUhhQ5UbwhQvDG4TN3toPT",
  "key10": "2L8NPFbyDYij6Ryr7rkFMKWZHVo8zoSe8ubmSi7uBTUcF4HsStpw7tFqiyimzirciEdREF9JJwrBFSFiogjKrNhe",
  "key11": "3cAuqePYc9djc8K4H4aXNdjbrDpjKFfBThH4PqmEXd5fJkfCZtBAPNL35P7pqL9VR37tXuYE5bTCG63dSFYDf7Vw",
  "key12": "3piqhyA4UhU7owyNte9E8ew5SDCHBUd5PesuPbjhLSy5x7R6EmegWZ4r68nnoNUfN471FgHWDXVyosAXvqqR9KZE",
  "key13": "63Uaanz54NhKWxabznQSLEdAhUrNYKigQLGSoQM2qPbN9TQtQyppf9xU2n8jiHGpd1YM2RtBkaT5uaGGRxpNPKSC",
  "key14": "KcByFQr9coDqso8yXA2zsi59AjzdTV1SS32aTsM24qQmzZxiTpHXimQeTXWQHzVS1qAvQp38mVLkvHYHsnjXDtc",
  "key15": "hQLgQriUPHThZv6pcQX8f93qzXvsfN2bTC5TSco5e2ir4EqvipE2DgCQDvygtjVfkYmguQm7sgG6aF3fYbuEUBt",
  "key16": "2oQbxYhBaQmvMGWHBD9ZBU7EE3fmQb2tA362P6dfEbT1MsNyyTzFNhvZi8SMkC1hoyVxqAzDxpxMnCGayk5HNUkL",
  "key17": "26CEsgpDPKvNZdCyguNMPaS46LwenwtXqgSUYkpJ3AtZCEBwnmUw4dL8P7iNRasYELyzWnVzzy2iwaE3kh1o2Yrd",
  "key18": "2uJR7EBKAh7jr1BF7zPS7kjrSZcrL8Gyxmqia4cNaHMV1QZhqAynzkNXb8SfG381RqDiY31H7VcNb5RyVX9Q8DWQ",
  "key19": "3S96W7GzNRW9TgmFrz6VQoKC468qkSLNhcszn2GEKyaVNUE68BfzPr7sm2WVmzmdxURCfa8dcZyXnmpV35ZBvfae",
  "key20": "bwu6rm1pMthjE211PDrN92KS4ioEYLc3z24FxF9bzm1fJDbUM5Q8yDEjbj86LwUn6HjMS1uY5eiYgMq5dEqViKF",
  "key21": "4teL8Wbw7GU6AN4EUTa28JLGQNAj1gV1xn8hNbioVPa4xeK3rtgcG8FmnZCjP2YXjDWiJbDQU78tjTtGCBVTTmvm",
  "key22": "67YCjPwGvqcQbUkGwc9einM7JXJQipSw5CLkYV9Puz1grmY2MvFNiJcti9BqsGtAoZWAttUzrFN6H9sxPacf2F5g",
  "key23": "Z2ZHjzycoxBd3Unje2T5FkgEzCS4nd75r2rvWt2dDfvNj1SPoTsy9NzAPXKzVqgPHxxfkbWK8f4poZP5hvtQ2pJ",
  "key24": "3Py3uUvcdvWNZF4Mrwb81MtPaWWBzu9GWMaWkxoWbLz8Byy4kBeCWARzfTAJGfc434gZtoGip3U5rBghaseTAYQ6",
  "key25": "5Vah5P5PHfSrqqzGhXLfSWPMCtNn7MMwT8dDPovsJ3e1jJef4Wh2euajudWVmpMPKQVwyVqJpVTsDc57Z13jKAL8",
  "key26": "q4k9rNdSeBAMuX534pBHB6CsXHmHFk5P5reqWkLXBwiXpCaCRuZi8As9EJgCee3vRQNpLG1Q67Yv7t54G3m9J6Q",
  "key27": "JS5aQjTwrez5KocCnL1LDbGpVPzBdPNWy1AsPEJHsV8Qq2BSEE1tdgmtZjWQaLidmtxW2SVFEhqs3wpwGa3r4KQ",
  "key28": "5Ss5LsybM3hSxxptmFNGdjxV4Cp3KSZJewUu7MWafocZKRP1w3c5DzUk4scvXwUdumsdU7wzctMSV5ryvNngJTZr",
  "key29": "3U2Z4g5Nsr41ypCrQZQoHRpztjWok7oSfQUKB2h8h68BM9dCDcNk4Zk5LWGot2ZY7RJWnHhndF6vCVZ42j2xdWJL",
  "key30": "3hTqBMScNbJ2bSNFrhk2yYz3WqHwnte1W3BbjtVc6a8MXG9NeJdtUJZS93VuEk2V2NtWWPiqn7uBjgvxnjkbgF4X",
  "key31": "4p7vfHKDhJahwhMhs7Zm3N4pwW62SGtLCYXq2krTrh9hgKuFwbLXBRCUpL5djYAmT5wrZsyNpHK3Tuv8AfsbAX9k",
  "key32": "4PS4JD4EbWzWdWYxcoSb6MK7PfDFGJBNiFdU6R8nn56ykgbD96BzZE8bB2HLhGWvzMB83qcni76nCZeaNwV8gkC7",
  "key33": "fLwQd27pNYBKNgKmFiCrm2S1Te3WbWV6TAXoAUVQhBTwGxF4iHWnXXVgYBctyUvsxkK4gz43aDMa5Qq6ATdd6d9",
  "key34": "2GV2LMGWBxtxGRs36aX5mewEfZYRyRmX67JnSuB6zde93CyyfZtSEWAJ2yFfz5xF8C2Zf8MFCz2imQqgWWbA8Qod",
  "key35": "2V6K2HSY7iDmtVwY378SEHcFSEd6eMcMEV6G4fw3ofunWg7CYzLtGAxAf5QQX5veZqxLiHK88tNyXFJQaw4Zerob"
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
