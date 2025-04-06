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
    "5vwaWQ8SfDthKURCLtSKoDz2mMAugjYpCTAknKGRdfindCsKZdQWaDoVSeLnPuGhDd7g1nGzSiU5KsStUJLQFgbi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pxqY4W412pwsByxJn87GZHxr21dwPaVnnABmEWbMwTtvWgJo9yC3Q9WfhoCnL9zX19Moz9KnsLMSHQJHzhSJRuk",
  "key1": "2uDLZEcj7vjFhjRv7UMpfSZsTBrQTx5doG4rcGgBgMksvHgi1FDjWZjgHcR9K8Apu39UEnXPgXG7CiscKPohWBwe",
  "key2": "3u3NfMrGpifA1eavLR9URNcLttWBxFrSS8WNCoHBhVHeTdTh26LLdZqGeFTGcwuFkpHNKpdgYsHq2gqPuDTVudMz",
  "key3": "48vRMHbS8TwQ8TYeud8yWJxUYWLFh7ot2nJcDZ1XgBxFWata46J7xHfR9DhJ97mqyMtYfnNqHQ2LzFpUXsej25DT",
  "key4": "2eSrnZwUJMPU6RJsveuSUkGoBgznmWNAHdLjT2gbyr92Vqh1WidDUE3s5YyhjBhq862sUebJTt4ENt4EnUZyP1xb",
  "key5": "5DK2jn2jbUu4eFR49dDoYxSdoxBMhYBeaJw9AZCAju4EC149rj2GtRf55qZipV3LGNqr3hRwUkhww3csGxZ4Qh7y",
  "key6": "2aKS85DgRXKs1HDqtvV19MKCwKmKn7HPeHuzdUr7BDBv2KbodeBnLBaqaUGLGTNZwSrw96MkJcqsTeabRbhnbE53",
  "key7": "4qgP5ipw6r8DCkbFi73TMuddwQRPVRgifFT51Eb8mVhxDVTFYZ5QvbnW3RQ33ZKDDeFqMmLir7TxZzRtAPASUFMP",
  "key8": "5JY7Qe2HHNsHjAACX6o8KcB6HAhirjyqjJomd3kMurUbzw4s9VXaRw4q4EGogBSDMd24y2wWXPf7pHQnjxKVg84S",
  "key9": "2ffKkYCx38eC5pPsCEVRYwQydLv6snRR6pjXUeokz3qyYKd6KN6tDPX254BBy5iiGN6AUucGYoeuD4V1iB1WnKG5",
  "key10": "2qdhRQ7TeohGQhCcmffMkB2h5djNwLmaZK12g7Tno9LnT9mP7YKbauN8pSBunmxPQb1Y2BXuWCErvqY3ZuWYiQhJ",
  "key11": "2PHqcW7jt7ugTUn2QtNSje91gb8HbpuxTwj1WJzp7cAWqCtVPXYsPFD8JYhDQP8Q6Ds17bHQbEAnH2TgqcStt8or",
  "key12": "2HPC8gsekiqFLXoQ7jxwKrMMaRdntCRjaCPP7KVKSHWVWysNwEGnmYBvn5W42643aujvfGaEYLgrxDtknBKddr8r",
  "key13": "3XiPbtyjbRHfBKSeENWE3RkeS9aiqrtVaZSnBvg78WHaZ1Xc4gErmLitNEHHEVgTQLa3WxitihnSRhRzNMvL1mBS",
  "key14": "2MzYDY192BBZcuLstWN6vN534cRXJPS4NAtUr1yJeKjT27vPRp49yXN8uESzcPRQjFthZtwFHzFSooVMfiks6D8d",
  "key15": "PdB89thRTsndx1ADrCVhmrfd7DDe6TisY2ReZwi2BZuH3SnF9WNC5jx9Yciiri9Xkqfn7Bz7ut3iSRf8vjUnajd",
  "key16": "4rNbCyYnsSY4UUzfUG47TbPv7nXbwoWmLKdmM2rNnpyaVKzrgifT4YKUepJRLJBstnLoiCDgAk23bcqzVpSg2oD6",
  "key17": "QSZmHhEtWAJaBW1fiJ6V8Qqan2oSWjXkDvnZURjsMuDk5bAjAuseRQqXiHCBntLYcdYiwmJ1F47NrWDyE5x4Nd7",
  "key18": "ZJXxbsQnyunvxH8KA1JbwEBscGWfZGu9CGCfXc2mChArmKbED5KHNU2Mm5YFASf2Da2HTo4T73XvRiYdBTL9ffX",
  "key19": "2G5E7VyHQeN5822JDT4ccBVz3BKygpE1JU5WrzYCifNUtLYuqKSZehbYf2tAq7TdkTBeVAfTmdKT1Vps96G84h4y",
  "key20": "HnqY85md6FUrt7pTQB9JBPjnt8mriMUsYdgR6yh2EVx2Ca1NcnpbptP3LG7DvjEUardx2EBHUgH5b2Apkvh2FFQ",
  "key21": "4oQTB98zYMRdU2cDYCoq1k2MdWUFRiQgRnSX237bTbkBYcmRiYHsgPgECajjweveU2wDVDfsUM2FuU89wtTAs4RW",
  "key22": "36XgjgKRoMgqSdipwhCtm1hzSFhhZCzJjPH3HWRb6Akc1abVG3QEtseaLF1SgTLN2LSQwzkX8trbYfQMqzoTkzo8",
  "key23": "ARovXuBUyhsMzZxKm1HAdmLZ35irVLzRyMAFcsCwJL3m13KWxxBQUMTQUP3QZUeXe2D37nsgKRvrGEdRpZfnNad",
  "key24": "ZtckxdiptCRzuoHJitfiGq9Ms9DsHSXxhdWgwiHEBLS1Dj6j1S3cASdCT82b6WwANZUtALCCLGdUdBhjDSspTKo",
  "key25": "n14sVUb1Xhy3bTviaogCqTdHoXHoZYFM5qoZS98wbz6yaZtm95TQM5PXFXLAKPY5WXHiSMJankajUnjYYJqxnjF",
  "key26": "5hLLbfcAmXV9oRDo3ng3WahyGGdwYMSiHGbW3dXRLocCxpA9yiPng96UuDvoFuSmLih8YjV1xtC8RK9EJc25pT8c",
  "key27": "2KmD4vaJeafU9aemGJWudbEWDz3TRrcbfqWPxeLeHRdSuA9e8YXmF4bqPCbhHkc41FhVRYwnsa92XccCpQCHDJwX",
  "key28": "3BTKUabRRZqWV53FUsyre89Vp3eTq5m5BARv2HzNHGiDWGZHasht4k9HsBrUd516SxJ1RHEa8yiJBaVvH8zc2XsZ",
  "key29": "4SgFw8R5msk2CrxNqXXCb5Ct4fvJipbRSkpfENfunhU63h6rTdAY5oLnkRSP3aLwY8DbGEchFmPa6K6bfxLhJEEd",
  "key30": "2qRn3nedZeNLHDwEGYbTt5FFQgPgGhQPRiPj3qQF7S4x6YRwkLHLZeYbKFrLsUP18T7ZkHbksGgVbfsk3jQis9Z6",
  "key31": "bEdtSCwiGN9zWNZifJKTq1N4stayrWqFF7symWEecmTF1tjq3UvxchWW73pLCUahyS4FZcKpAPMBCrEanfSdhCs",
  "key32": "4BkNNVEXYkcvoyGU1y2snnrC3yJX2WgYRucuNtaX3vh6vM911ew6ae4cWB5hhp11sYEev4v1PHixwvDEEKVtR5ik",
  "key33": "ejvjgU3k4PXiGQVEFfK1VDLGABgxZ9hziPvcQK19SNBcKTNz1nrPyC29znKd6VU9LRmmukMYJU62Febu3WEvNDW",
  "key34": "4uxEoPfqXGeYPiU2Jy9seEzfZGosSNgY9M59kByVXAku2rQsBE2DGUBWxpNsCanqh6uEvxWm7Qk52ADTuThynfc3",
  "key35": "3meqnktnwytAWgrU8o8Qb1XdSFNtYz3pNKoDrAq6cL47JNUdJkgBdhBMAdsyk4xS2Thk5V1VwuiNEmfpjxBToKKU",
  "key36": "9QrHERxq8SzCs4JLYhLGxcZEx8W6UW4RkN6a5W6R97Ppqg6WVfHY8F2YyGB4uUy663EHRctQpwdsdJdPNuaxfnV",
  "key37": "2jQTYe9gYh9vRx4b9w8hvz5sM4DYryf4Gzom2zzvtgTKFpbyffdfMYF8n1ze5bPqHwNqygCacgwc6vhpEdK8bZcg"
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
