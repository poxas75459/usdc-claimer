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
    "4ADGMi9vWkhPKRf6JBrhx6dHuV1k18MuQphaLd4v7uxS9YMcsoc4iaA4ruAmXGitV3o6DGyUytCMo1M3moEZJcaD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BRRpqJY2okUng25q8FmxLFQcxE6fPzy8XwvSCVcVB2gfbLFUtD291zzQ2JxbM36Z2gKLKLSfunomesnpzL3dFy1",
  "key1": "5wsGvPnX7S8tHfMTL5UHQQUzymXB6eemP6cw1hpQt2sAspF1hT7tpQWVsWnG4TSAjXvkcJaC28oYWW1WrSuBECZs",
  "key2": "4PjcJrYLA3TsbmDMGmY36TTzbmxF4m6doaWqSioPM9XQ251FYyudd4qbfb2nVmgbkLUc5W3cmqCFjYLVnCTneXke",
  "key3": "tptSRzPBgGMvvKYYKwQEKNLzb7bLgTG42UicMVnwoWU5cLzmmMxjHm16sNnKfu57aPCd37PypLAuBDWjU55sVSo",
  "key4": "3oEMj3qzZMRyxWT3dNFwh8ENPPUbUhB2EiuzLUY1DRNmHsNjaoLK3C947HgTDxCxfemziAtKyDkJ1QR2pgHGKg7L",
  "key5": "2MwHX594Tmpbfr885TjWbWCgtjWvpPBey8RKBoRuGck2WQRepM1Bn9z379T1yj8FWG2KNPp79grVBv2PS82qL44U",
  "key6": "4KXSSEHV4PeECiBzL9crAPjPRJDvVqBUyAQpfFi5neKHNwasQYGWiAN27Z49ngbbJPFQSmNAoiyz8BDG5skAHB4D",
  "key7": "CWqERy7EnqTFZgadKKJU5jBdKV1WUd3vwN1WvpqQV9JWZBrC5GmjycAvkF74YfpMjGuivp9ZB9pqYDEG8cLgeCd",
  "key8": "2jcAzFkcbnoxTrNkg13szHH4H23Mwtt4DQwaSq5xujubVzfyANfAaMLuRw6hrXRFrbpgxCN3VW5aRc9VFZoC1hQq",
  "key9": "5ZCv948gGfUgga2GWM313YbyW69r9oBVNx9zH3REXmxX4MAuyKGRsHfDxMKVX2UBKNGtzDzto2kq4MpuisTKnVum",
  "key10": "5BnDWEaGn9oMmX12gUxNa8Dtc7grYzrSzdn8DDYu41Jznf96xSP2vMSzjW8Px1461D53fxSZeWAqBXv9GgcgeYVg",
  "key11": "pb1H5KWNmoq79rUP2b4utCRrF7KQB3WCtbjBYUgXYe16f3GzeCwzATcopxMVS7KcRv3pX1CCC65uMJeQxuHNje2",
  "key12": "3yfumuN4wp3SQrydDMDnbFgfQjsF4fhWtc26a2sePyB5v9cwEibDJZun1AwbaP5Vhah1Yzj1RxXvvNbZ8H3VD8vt",
  "key13": "EJrZkSbJZCLT9WHqSx5AS9nNZqsxwHgJ61bLX9PfamBZga6cugttCEVfxq9xHQwrkcurKSpB4MkTB6GmvaUgApA",
  "key14": "3bYeUEQSfrY2rsAcXdJnpGMS7pQWk7CEMtvp41biACJFMT232scx2RQeERSmvPrJUxRuNicNzGBStbFEX4TRawzs",
  "key15": "5fFJft7KQLXMevqT99pfSiWcMb61bg57HxmcJoTkKrBGywuG8yVBUwjuRYTwA3um6J893aB4HCJqYoJStTVmhrYu",
  "key16": "44NKPNKEuY4N1xwCGppxWJTMWRECKNA2BYxLS2HEdGWcARnfuHq93tVywDXnMEEVMRdn5XyKGjo2q74riuqPSRdh",
  "key17": "5xXfdTeyoA7SgE495R1EgrHK2srE9XfuHjLZmzChPQyRtT37veUJsaojZ9sE17mfiYVpqKVii21SiaNVPBEu1iEf",
  "key18": "i5UeoQniuuri5HJH6iTtnsYh5jb8NCSv7rPWS9N27WXNHUaEJaAvHecE5axB95cBk2s9JJs3t1TX3q2ddwiiEwf",
  "key19": "4XH5KCcY9zk6YH2hH6FgGuqwNMnuaf7GwBogjqjwAZXAf5Rou9ucR9Pbr4riMzwcPbNZ1hh26Gv33ynySzznwrh7",
  "key20": "49nDocutvbk85svCzUnzNZuojR3RBEWcSTyA6p5vfFbrT2sw2MZSqYEnES4ywtbchubDUW5ahZ7pDKsvGZXQJVsW",
  "key21": "5wwHtzEYrRqgHYyxNw7j5m3kzuRbrumQRZbCgo72pqFWwd5HAAbZQvoqe1CS4TbWmFpGRHS6E3x83kzrcjVqFcbD",
  "key22": "5ckDjrReyELToTnYTHbc2kDnxYRVMTxoFsEbgYdk63HyjhfABgpcbkYDTKPhHPhQpHDc9dxeXt4XMH3PEgkBovxf",
  "key23": "pxuvANtRdQ3fwoVas9kp2iuSdU1dRJ4h4ohDeHXH7vEqmshU5NQZfpEHjnzHwCj5tXp7DJkMRLvV5CXkKJRhgaR",
  "key24": "3wj9xcNdU9rPxbeov1BFvVdpz1Zw6TkvthKkzxGaiwVFCFURBj44szF8HfyKHHdgPM5xoh74ZHYVDVJjXhsndham",
  "key25": "5wrmD6NgjmWvUHLH18zCCbS3gqsmRtiCEBeA6e48wGi6gy3wU7HQa4Dp8v7ipHr7acKQFtEcTurLPDhCXAErAwKH",
  "key26": "2TWVmZZ5NZU5oSnNbTarVvzg7KmjgeMfHT3z4btcwFZrX7SuGoJeEXy3Jw5c1hGpctdKLQXzf4ZFMG5FCksZraTF",
  "key27": "2FptUtrmpJNN6jF7scYVq5KVmZVFoCnQ3PSVZpWtjUe7K8gD6ca2wB2YTJQgyWkbA6aRjkThynkaSx7NV3mUBaM9",
  "key28": "2LEPHogc2fYwSpBxvMmsacCHKLbuAWP5qfMYUjoNnu5CTdCTdkzrrue2vETL5D7Uq38nYWmsJAgNXkGRanHL6HwU",
  "key29": "3b8pvLkCzKm49Q5QbXevsTkTvxpDhkcGKWsQr3ZQePY13xDdBBU1GkD8KaDaGrzKiVq857yDhSVGyJ3osojYf513",
  "key30": "5ryAPtNFg2gg4wpVW7cn266JbdU6cUCLqMxnH3MKWT8wqFTLgFLF4wMbHZMwpDcHSV83r3VBduME25HYsHHq5vQ",
  "key31": "44RMVEk6keMM2mZXGMQL3rJrLCDfkqB58Jzqt42iKAx7e34ufUqdMXhp9ajedSaLWYxUWnurx3Jqwi8YL6YarwzP",
  "key32": "8EJ5PmzFr3K3qM1tShfMTnNAikujWWFEGsYPVTUNhYQazCXjX9nqqwtYknPjrXE95n5Y9koPU739ZjeNmFXQXtx",
  "key33": "5Ybf9ZxGdS6VmhiP5qh63oBnrpCzDZ6oGN3Ujf88uf817sLmNhmEh8ztfSeV9vpVfhZmtFhXK2pg4kBpQ5TfT3YV",
  "key34": "5JrmuL8vK244VPVVnbKVWL1cowP96337PZVvNADdeHxy3ZThJBbV9XNbHZ5uT9hPMVVoaB3Gu7icYdSiaFsAd1mm"
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
