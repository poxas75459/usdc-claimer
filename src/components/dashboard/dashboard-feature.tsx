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
    "eLjmSmPfxWqPvRh89Drny5yw2BeiU8HV2kjrrLbxb3YNZKKSmynjP1Vf6tBE6pT8fSGY1x4bH7G4H2WcGQ5ERD2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62okG8aAdYQz3b8Za7pxKvv2evTB3PfmCTQGpXsv8apNJEyTPAWAoBYFTJWJSnpkuCkRo9eHtaUL4vsx64hXbVWH",
  "key1": "4Fb8YCPfefeiR7h1NS1SykCABosCyyBJPXM8QN8MtSLFUHZwCZziHTKRVSp5kmY8ibutuVSzyxrVaHFKxmJ5z1ef",
  "key2": "5ZzBrvu9DYFLWiFLcSbhn63BFPUhmoJJ1CQ2dhW2ctGNnuH6qngQMc4XrNzQq6cTSB4JpCqLuyyWoK4LWzSYbpMZ",
  "key3": "2LZZWMif3MZ178Q8oB4CCFyHzFFgdrJbj8pCUWUgNxE6dRDMuRbXPVwWXBngUQHxAhNfd3kJsmPu5j9eyM5A15Fm",
  "key4": "4c2Q9pfhmz3HHPZH7DvdbHZKn3Hk3x1CFY5bbfa2nVm9mzKNQNxJSckGR3hmJBLTj9CdqhjsMXQEo2YayTNo4MNv",
  "key5": "EvS37poYx9x7YwdbggVq9cYJyocoH8qEFN1HGC28AZp6Tja1oi5frn3sTcw5iEdZRc1ziJ2Ye18AYnJ17VTEhox",
  "key6": "SCHCPxNSdG1BBVD4aWrpmXL3W3DFVLYveWRiFCEfVfDco711yxBk8yd8DU6VnzazCYufCnwYrQXtki4A9hCpFRP",
  "key7": "2NjF6Fux2HkQHcVV8FXMR3de8oBbRDghxMGZrwBUdDPivAbRVWYh7ncxSqe9UaNhRAoZfCKoeyMmVY8MvUdCyank",
  "key8": "4pDkyiLYBhxTLDgmFVLEbDGvkJekuNFSCXUxgZCjpyJQE3bbYLTqRZy2QQffdwx9Wcp4P5VJ9pHZBbZWpPXk7BZ3",
  "key9": "T5rmWpvoZDCM8HE3tQHwWAEuwqESVv4SKKRw79xQsS7nSwy5AXKSoDbgVnosartpVGFpxkTGycU8KWqTeNvoC4A",
  "key10": "2Avhssr7g9d7MWbNkZ8Etobc8jkrpCMHgQmi7fLpC98h9xDYh539W7UMoTyCG3Kn8v1FCB5ZwEEf6srdB8WMcaXe",
  "key11": "4BvbDitdeMTsqRuKCtMzALK7G1dLf8z5LBT5bjMNQeCPNhAaZzbxTeJU3Zzb4S9jiMpEHuzAz3CWj9tVo2aJnVmf",
  "key12": "3x7YrGaCo3SoUCdzvvytLW6RBvteL2yRCRaWotdLQ5eNa6KbYZM8Yw9mrYfrJfehQsQLKPA7CrgWHXFWFP1DMAuT",
  "key13": "4wAAiTBTGWFmhFAxcsnP9xoTS4Q8Eox1mmULhmX4zyHpad2cbpRGq6UzK9UzgzMbLWtuLDtbEHM7tnnuBUZWTyif",
  "key14": "5tftqvRgMSW3MkHQQsJSqTVSb32uhcL67qaMkKf8s3rs1FA9ybV25cx8vpv9YvtvEFb2CDm1Rr6ytd1UZFyhDmnR",
  "key15": "VofTuTzeLtZtnoh2Xq5NUkcZnci4eAh75pTD9ioNxGTKHFX1nRPonxtsgwE2TZXUCJAJEh9quDw9s5xnmxoYQs1",
  "key16": "5WVMJXmtzAUwP7pkUrveFACWoxUYairHESp4zkkL415veLNmhVQrCs3L84C4ivPAD5YACJzfm4bw7qmkJQb69rPD",
  "key17": "53ff9vPjKvQ8Nk74LYpVm7gy9q79NdyKY1aest5A8z7xWWGCK971LzSoz59LSdLxGYBhvdrMdCEGhVSzAYxqoX8T",
  "key18": "2Ze8U9PXXCvMSnTfdCYU6w3RHN4Bsrq72CtcwfefxUgycA9j2wj1VNePATs3fUbMF8fzXfDDEyweyGXiE6T5gGLj",
  "key19": "59tqHekYWLrnru4ZsTPyeji9J1e62kSPh8ynL8QMdKeDN6FRuZ9qm8vxduPi1DdDsXqBFGFPi8LAyXq1ccE9sKs2",
  "key20": "5M3kVAHexEuLdyFNL7Ban5J1arXERtr4owohNbFg1wkjraFQwTGbckbLqprh74KtADjuvtKPd48Qn2rxPQCis7Ex",
  "key21": "3jtG6385oqv7PTuPcRgk8MYAukWMABXECBRoTYkGXqXKwwZpN1BCV8we4zkozT6LcZ9Mfc5XJU6sQT6oTozgmPo2",
  "key22": "2V27gb9hiGfJAf8uzz8TPVkcvoV96TsNkoUeGvuo8ZU6WhyKv3hpAmbBUhfXcL8JCGAzx88C4oa39RCKvrWc3mAB",
  "key23": "5qp3Ui3od5TSeP6J7N53c2D9z1KpeS9zamDwoPGoifMBS7Xdz4VLWphxBRRz16LYLY3cQ9BhtFfwmPtoewpjXSUV",
  "key24": "5isAMGJQ7o8bpsWugGi2ccvh411cEUqGrmyo41f1RDgrrzaivyaaLArhUXTeP6Bp7RiM6LZP88x8VNdHn8oLZBdy",
  "key25": "5edm5aQYTutWG2pNk5HGhQR1qQCwN9hFdm1bQJKcwRdnrvmVZUTTtraHYFYwUrbrJELGf4UF74bv3teWhELkw5Eb",
  "key26": "5dffLcrsobQFp3YDZtGt83aPWX7NSiCtSBVKMC23jbQSZJwcisiBUkB7W18UqNrNU2S2E1UgKoPz9kF1rTEtTAFQ",
  "key27": "5c9Ah3nKQapNdhFFoDHNz2dC7sMXekfeW7oTC4pNSEwvhemhRQAZNrnadu4rJ7GBaCdHCgtKSU9o3YEkWUhkF2dM",
  "key28": "5YxuMHJdp5N6DfYZdTqA4HLqpjnJ7z1WpbrQ6DVa1Ygmk7TJbnnhzGbR5oPyQEeZHTkMj6f9tdXg5gnaVgppZGZi",
  "key29": "6nexFJiFzVTv76HCnyzEer1JYWzaWRJU6N4WtPA6ikvScQD79hUQ9aqRbvBaDCJSnH1HUxUAf6EAD3iE9seoWPC",
  "key30": "3h9ueSnVDJBK8sieyN6EPk4NmFZcQ9Y2mipFgCcrYW2wzEdazLTLt9TMUZfh3mRT4XGYPuuXLDthtprK3BawiMAS",
  "key31": "5F2yurWn57XiMBcbsrZDvtJK4wxFqkKejRWfb6CUko1Zoc4mrLWQpZrtEg4e2JhLSttogTtmBe1eNpDXC9A2L5j",
  "key32": "2MP9nbT7FLTRyRAo8zGVa8crtdG7x2P8d8R85d4FGzTbEs6DMi3fxgWLRGuQMMXp6D61drE38Hz3DacFGmcGmVx9",
  "key33": "5bb2jBSBQ3gRs5ZJ1uv2ZnpJM2HmkcFv5TkLjLsV1RNnG9FTv5vMjTk9Y5KV7DKy5n5TuqoKWLMemXD7ocSp8SG",
  "key34": "uYy7o8GHArgdc6wqHEeDCQfjMNgibJ1xLrEUz9ijjKAewL7EWE8qNBQEjKYuZbACrU7fJoyaHBhy3QtAQCoZzwA",
  "key35": "hQ5AQHxw6qqzreXDac2mU97gmJ7UMf4TzVe7KzGTyqFKVgG8txaAg1yLmkXYDJVbybi73hoPpEYDtyuvhdVCaro",
  "key36": "5y9rBcDRJy2nXhRfNiM54iDwjbwcqPeRdxjyccVGLVtQCpSBYqZyn8PvVWeNsWUGF4zXtbNo2VFiMjJLUqkvxwDf",
  "key37": "22oqJ9RWSsxMZVmtRXunLQYHLGFcAUYyMtrKU1B9pKiej65pDdJWRr3wuPcBzwJuKcU8KRbWaQkoW4yk14gbuP8C",
  "key38": "3GLoTb2u4vY5f8QZ45HDZz4iE1PVvM1sDw2Ch9EJfxf82Cr6bb9SJzyH82akHhzMzsLwAdCjFfZoZQMtdKbtjVou",
  "key39": "3C36d8Woymka3NEbNDokZqjELEeYDa7XzvLucDspkWBGY6UXHQxNs2YENpDS8CxKaf2W8FUhXbvMYPhi9Sya6dhR",
  "key40": "2ZRtfN2UE3w7y9rmxXisf7wmsBwZNSnPsZo3Ya8Qxmi8m9UjY2KRYbYXd62A2LNGeutig6YTQciGnbU1rEFqYt97",
  "key41": "4TE1GG81w2qkyFRYtPNsC4cVr5sXpLL23XBVRQRA7bgavabkyjvr5EjvCx8MpHuVi6D1xKhZd5zrbVSrjnvanC9j",
  "key42": "4yugXdUUVXw19j41gQQ5c1UA1WCKfhMMVvVHpAL8iRszkdXj7MaLPh7y15EcvS7t2cV3Ew18KLC9zzvNELtpgxts"
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
