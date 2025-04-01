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
    "3567wPBZXEHDwNpaGjNv4Pyn7eHuJUbpyuGWJfgygQRf8jfj52AvCFSmfa7otZEWLzw8wyDuNjzrT1QNs8SG5TNF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uadi3PUG2yfvszX5zfh4oQtom47dnKBM4b1ZSorQGhnTq3SmXaGcrBWW5ir1HFxHbHAihqWAHxwch3afXY3V86T",
  "key1": "51aZUqy8HpVDc8Qto1fuwh8sYK9pZhxvzeoLGEJtL6angupRR9QvFTD8CauGoqunigLasdsLqQWanFJyXFomGCpZ",
  "key2": "u9APNoSzRqMMvabA2pzvdLsKDv3wNBuoAV8WoJ5gpFovssxYCHXKtTbb6idTUQZvyjxPAXM5CGAx7tR5K8XrMkS",
  "key3": "4NmGmLaQxkpHjrLKJ7PaS55NdBsVNAgdiNcvYaJ4e4KmtCshrstSukRNPDrt1dQhYgc3UrfMxUcyB5KaHFQodD1d",
  "key4": "EvLLWDTeuUJnJkuuxSUFJYp12VvMH741be7CoJACj34Vynopc1CwvuikAREtKHYxtTfcXXD5EpAzBtoSumh53L3",
  "key5": "w7LLBmQhh5XBz1EqEe3Cpwe4fgMRNMqtpFW9RrHNsz7ZfLKZvUsPRa2NaFZWR86kmoi5Tt4od8HBGanYnpNhjpr",
  "key6": "4SSHe3VncyW1yR5DW2WTcnkgpFkeH5fCKCejQJmSJrB5JNnRiy7Lf9TTDyhnbh28jMLfLqDEDmU6seNnpn7wQwSE",
  "key7": "9RFi4XVegT9AAJn2QuHGcRFDM8xxzbnYZ1Dp3oyAsyN65MLSF2B8SBF8gacFXyLmyjPUWcFb4WQy5eMJ8EJehvg",
  "key8": "3gNe8FQ2Mf4VSKuUsU6WusbXMRNxwoSF5pDsv9Xt6dqisDMALQpcr9tuW7BLcUSMJ16MuzDg1qVFfXHLwjKgpAy9",
  "key9": "4jQdALsSEPjQg5uixHbjz3u5tAKqvQnsVwSVLGk6gQ7dUxmVqWfjSoL8QtvcKXqJsibZm1feKEFjf663c1WCLWPK",
  "key10": "3X1sjsGGTAM9GWN7L2Uyu5ZSx8MbLeoJDaX9SbRZTHYkUXyapsygi9qXrxtFYXUuN24DWJ6ig1uTt5e912ZG7Jfa",
  "key11": "5s1ATSJ87CHagH2gENYpuxPn2FsA9B3DeAd5xjLseaioa9CNZP9T4m9EkkkrKWEfEYJYFKWQdqHsZ8oV6MhcLRtm",
  "key12": "TPqLe4ga366CmuS7AELFRHzD9cDU1rgQmSUrfMgEev6o1CayyVf7J9jJ2THgNPerq6DMjm9HxRDaH8cJk1fP5Aa",
  "key13": "529WCkBH9km9fBVJSErngikxhhMB9nqn1dcjjM4azpd7RUsFUwHfqnD4VMrmHUUu7nKzw9LdcHkDg9p5EfBGMvLF",
  "key14": "5V3rqN23E111wVs4KFU17prCQ7VTqrHXYtP8QLJoUh3n8fPSs5cVgT7FyBUeVHEjPKntMqUDqkRezJXxvkRZt7rb",
  "key15": "522R7wrQrhDGBbxYgS6bRqgG2EcqVkh65w6NgF1w3sP5NsKC5kcei9bhrQrVYZxJ1fE3McQM4S8rvGum6qQKe7uQ",
  "key16": "8Uwp6vyvi5EnAnhLXrG3uJ3bNxmFWNSS4oehP9y5dVqGwDUaBRuG28pHtzEAheRtALVCaMKqSnjCr8EndroY2XH",
  "key17": "4JuhPGYfKwFbmHCF73VtnUSqbUbYkyC6oCsNDxNi7FyeZHEn34hWe93Cs7jjuYcwja2H5TRg8BRZZdVAraU7uE6f",
  "key18": "68jtnx54auzULaHN1WvaobvZotswrQArMZUtm6DowtwrZ93DBdatkQnMSjKShaMzucfAk7teo4YtBTB35MYYE2u",
  "key19": "5FgmmAx3c41r3beCF4P1GdGUiU7pYeDewHFEE4vRiCArCM2zHBNCx5P8z6wwHjP5d6vXWGahXSW1Zf77MnYdJeDc",
  "key20": "bRSzV3t3inUMaTWAu9SvtvsLaBNmSuaM8B2cwKMdtyyYzQdNB41ay8Vq3iDvBpxqesbTqB9rPU1q2cZnDTGzXLh",
  "key21": "JM5pEwCNjW17e2hTkuFFi3tEEy86KQu2ftc1DAE5Ym8xa6hMegamAzQxmTJ7CeN4SYt2hS81tdR2HrMmLXrN2Zq",
  "key22": "3BY1ST74DMYZaALDaNwx7p15TiMoPe4zonp3i5XySSFvKZtxCQSDj3gT53dDPNGYijwBQLR8R9gUHt5SeTZZFJjK",
  "key23": "2HSeMYeYeGo8GT692oj8PoSZ3vSacJMSrbKhoqghigQjzkBuxedffdb3vJJTtAeS5kE1fz1UsgrAKemzFXuBQgDb",
  "key24": "4ezE1KCS9Ydh462JQcPvAhw3m8Tj5YuXrqcF4K94QnNwbYD5Y6WS1wi3Ut5xdTHDRUmnZsocBPzik1wLCj2dsrMd",
  "key25": "5jdhQJ2ZrEpdnpw1EizWAttXBdnC1UdwjnTCG8PHNxYGqidM1MkdK44k2Mo9YB1Dnje6QhVPyrd2xmF6sYKG34J2",
  "key26": "XndjiRcpSxZqT11uHTNiPvDZuS4vpGmbBj1SxsJK4jviBT6hCm5K4jkfrnNnFFyKYCJcwdMws87koy61dSmzx9U",
  "key27": "zkB91cwfuZ9UTEkpuXLzAXQsqhuh9GehZ38NbKtHaJuNSYqEJvtRFRWByyPyRnt7Uwcv976G8r865Ad94wstrz8",
  "key28": "5p4J1Hk8UWZqrYuRzcNCH8F6cudYwNmWr9LSpe6BaFG6CGn4kyCCNSAXVaYDo1kssQWRe7HFECyQUwjWhL5uaGFn",
  "key29": "5WofxtHpDrzoX8nzPRAXFbM15thQVwq38pp6XisgTCBtL1oPP7XbfcDrd5otSRx4XnRctKzkaHSoQUa5JdWdnizP",
  "key30": "28536pHL3hSRAj4UYQjznhrVdMaDw25AG9wPJFsUmKpReKNpM5MUnpThTxnQzjg9cznSL1FAdsbB3FoEFUWh2c62",
  "key31": "2m7cYPxN1DGqtxzm7xnktiaLy8TBozQLKkvkZky8Lx2u7jXxYJrRUUjsKznEBoRqraF1CUevJRqNKJqo4WG4RNFm",
  "key32": "5Wxnnrgn6aVwTg7QHyngXcnoVQDBzTFc2ujHb86UdyKyZCcJGddjRyAijRfXoV6176D7wuYKjShQMAzehxF9WQDG",
  "key33": "5tyQeaa5XA5pvs2WT1yUKtYe3c9Ly9VaEa9QjCBvkZEBC2uRdvCuPtrtwwFbmPG2S4pJFUVTnjwVYA9Cx7jpWSBy",
  "key34": "5cTygY7fSH41LHKo9ANw4DLAP7SHywqV8mw1vFrEnLoNH3mRGyVKr98whCS14fTzkXVa3t8Rcu8txz8GD417vbr5",
  "key35": "3JQaqXoUzCmMhhMUkGtmZALekd1WWELkcPTFdfFaWaxKR83MVy3Rz2Xv8QnC7JLsPF1QoEK2gemUR5NiqB2TJQTd",
  "key36": "3tSiXSDRoKrfUNcZWTovsXr4xnB9CexiqPmkbKmVDGB9bMjtSjQ8NGHwk4QZavqP6Tq2du3tzhr2zBpJR2WYy1cj",
  "key37": "4hZqwJNW4sw2buQricBpEBDZQCVmUzpq2oLh9o4QnS57iTYDkwpPg2Uww8CstYVYCDvW38j2pDPaFtfiFxd2GSZH",
  "key38": "5TNw8eBkuzzYTkGg2JzB73Bxn91hNnAcn6SykbiFQyxjFe37iLy1qRgChbv9K9wweMvdADpDW76PsF1GGtewXB1n",
  "key39": "4Rq1S37WaywtE9Uh6oteSpB1rL3yR7icJiBCEver4uNVE5kmKAqturNzzSVhdcAERcZfGiRqgpzxVjnMnbfW4z5D",
  "key40": "32sgKs6Rrk76VbDQjMWojZAuWypyH4e37Rfb4QFeSLpMPhJs3ZKPHXrfhNcsTnHr8wGmnAFWFmCJE18SAqzrfJyd",
  "key41": "AMGioERYHUt3Sw8fmjuBsJYn2PPzvCJ7AqkQ45pqomfrzT1FRVMJkknV9dCkT2ArWis8F5VAWmQPkBgkKitavfH",
  "key42": "kwDZkUJTDGMqj2cH7frYg6fV491wGsoR4KVQivF3AXmXp3wqSApDVZyZVJJacAZSEq8B8tcBAf6CJ7Wvx3EFWNv",
  "key43": "28in9kYiVhYHpqbDZhQwyBVgGrCL9MnzDBmB5dDtX26nXHUx6vEpRhX7mb9fsqtU8EKKBHyeF2ezgpNGZ36gRZkR",
  "key44": "287mNdBfSXhKYuiEwJRJy2pYzUbiQWBRcAhkNDNNEnzi6FkSsUA8WhggxNoK2vg3UP6wf3c6PGxtgt8DidiqmoN5",
  "key45": "4ALe7JHSvLguYRPxqudZuiLvAQH4XocTQnuFnCn6zvTnK3sEVdmBxMCXaCqeNB8y8NU8p3pCL6QFg8R3FWxZjvzh",
  "key46": "4L5MhoprAZ8GhE6ADZcnNZsxgJDSmwUSEcC5h3N1JJK2yaV327VqfJTeCAbCmDkzSW3Uq5ixQzJA7CE5bqoEfLdF"
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
