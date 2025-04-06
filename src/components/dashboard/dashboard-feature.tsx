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
    "3wX5qSFpCVucFnwJhNfEDen4YHdcciV8AT5CpzurR4B6ZCx4yQmduRonZn7EiJfQDyA1D4mAxxMJ6uqLTBgoeK5G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GcykrQVvbKesjNRRfSTQNrbjMiy3pB2qndueJEnS53irh92h88iWT61rSvi6WnUoZKDkvtHHcZAX1eV4hjjuC4A",
  "key1": "5Swaj5hMubXsKadbjgtgfMa6P9fRA1r2yEidgR7EuzJLqDEHgTuTkNCi8Wa64RA1kuvojdGrezJ1SQDJpxsEXKc",
  "key2": "3PDRhZrU3MNAkkWvEJnNiJdtdNcFB1WGNn86tPrpCgHueHiAX1jcVddWWhLLy51if1HT2S6avqwW7i4EHE8C5yNL",
  "key3": "3yfXzJ3V5hQSgYCw4aSLcuErMDuozjyUX1Hfq5vVF8poYdX6D3uumZ7edyvcdn72FPCsBzwNiFor2BJ8NmmVT51z",
  "key4": "3JBr9SsHtrcYCyr1uhuARtnSuNF7apKkkNAZaGBjy3zo1qYtDyuD4c57HVFczNH1HF7s1QZDhWGYXmwb37aK9WMW",
  "key5": "5XMYfbrBMPS4Z8H6oASdpUS1EC3yLn6tDzAAhqAM34dm13tkZdHaVkB6pCFS3oLsFPf8da14LpnxnfaYECNopMyJ",
  "key6": "3f5QPFDNrkxZh7t53p4x76aVsCksF6EGdbsnhaxQQNJ872hHdGPybQHjHUpbPJ9FsL2Sd2LSgzjqb5wxnaku5srW",
  "key7": "3BaUtgkyQHmsnoBYiwPe5JJ5Acp2r6ek1tgWgMNj3fs3K4H3F66FQXxAF39nBRo5cPsngGWTLd3oBXvCByQjwfqm",
  "key8": "3AE7mjBy2AHxvxpCz3FxsfV5rw4eiCukQSMSxyLDbhAeWZq1RCPNShJLmHjKij6Z3kNC2km2Y755wjNGoKpaeHaM",
  "key9": "5WgwtuJkMZ6FauxGLCmsWCemLkYYDLpSeatdJ7ScwzwCobokTM1fVV9jeWbxcgBkNCHPDTYxsNtQqoVrdD6Y8fDx",
  "key10": "3NKPRgPmZDc2fwVJNyZTF2ag25PaVU69pXTChQ9XPY1Tsej9RghAjhuV4Z85W3oJafv4GeqKh4NzLRXtYCp9hCup",
  "key11": "59iHuJw58FcVDtxheGrHkjy9krGpWmKYizATrdUfRizGFWYyjhayFcfjsSam7t4dr5UbiMhibQfbcLmuy28ZL2p9",
  "key12": "h1TzepLwQw988mdvqruazJvzPc35JD9KvucfioNKMmUiBzWe935g9CSpoWBQrQMW3xfmVL2dsJ2tjoapWv46ehL",
  "key13": "33AiqiZkFJpQNbxtKJ5DTVcLtxTjDcsPdj6DYusLUo7XSiQskYJpFVtkeDNVTnifcZHt4FsAW1713oVJSkrSdjer",
  "key14": "42penRLXqdhmFkWJWhyvhxyopAPfEf3y2CfMkububZ6PezRFW5vCFABqzpQ8YE6LntFNrUMPwijVf8mgk7R8ijrs",
  "key15": "2Refu2QAjpJKz4pCNUAstgtgUvxijvjN6cPDimzwRCXC3tKSYxsDL6byW2tayjsa6FkyKyZcU2xVRxdvGTZr325e",
  "key16": "xgiWxPRAGAiTjfiEpAXxETuntX6kXk79VRwYGYjxXtTDnq6Tv6sdwL3FsefLjEeKUaQoD8rfxjZVgGGPmqEQNzn",
  "key17": "5CU2yXZdmshDrar6LzqTijCSdNNTY2a6aQuQSqDREfmyCkuYNKjV4n5fmHyqBpSTePrB9eiUTUST2UXT27fDMxyU",
  "key18": "4tFC8mZWxt13nVrgLc1dD9pZLqgzUJYDcZDeTUDS9CFvYAF1BDceFRHkEjGT1njLk76aAM3htwqf5TDiZwpbLDRh",
  "key19": "2jjkGSwxD4SxKMhTeSZsT4KxAknHQKZP3DavhsGbk5A8yEicDotGgHgz78JfiG9aPMv11f5zmYXGt648WHXiEuH9",
  "key20": "1p4ubu57mQ5SiEFfomKsmPuzFKiimcPiURomheLWVgJFC92ahxdXV1Kp46EuG5wmaWbk8AmdNx59uftcbAtDeTp",
  "key21": "2WYTo4MBQgs6fcGMipCoRfnL1PMdW18arDmyCCrmrGLVsrdgZVJfo3V6pX7oJoGHqq75fbsiadFwcqbrSvKCSRM5",
  "key22": "43YtNrZYfTQoKuSxV1GwyAF2dE1DY5sMMUVsCYY7ocZFVLeA7Pfh7PDoFKiF1Xg84XtM5SFBRzQC97UFeP7t3jp3",
  "key23": "AbSv2fQfc3bAubWKZTKzdhZP62gHN5VADxNjEJBYvS5FQnyCxbNkriERFtL4xKV57PDVUnZ94HTyyq1koSvKGqJ",
  "key24": "3kvkvKjcmVkuibTtp9FNRP6E1hxdhC8f3M98EjDhHyYSVjdK8XCoo3zJrzXFcUwQhcqAuTZTK1mztQCkbFmxCyxM",
  "key25": "3Vi9ve3QCFujS1RReDw7Hq2w3R7KMCYji7ipBDXzFaBcyCvRsYYwJ7SKG9KoiyoFTnnpDuBQkAwiFhKCv6FNNcab",
  "key26": "5BriTqGRnofuq1hiFsYzsipnuaRjLcgcwsA69ZvbRc28mCgJ2G9Hm9QLya56K3Y2qdDUWnX1GxePiB5jGB5PdxEc",
  "key27": "2CTXPLG3z1m7znHWc9qp2Uux1ZGpj6NUmULUrJeUxfrxYbYSJk8usk6EDygAAVDiMbsP9ybKDxQMfD2bV9878ed2",
  "key28": "2rpk6Ckc7UJg3v9iHYHeZ4DNc6JiWFc1trysw3uMYcryegfATQKAK3N8Yo2RX6cCcwiXuBiAA6ViuvqJm6DyZpa6",
  "key29": "2efezRHYKgNgvp21mZHLXUgNrJjhfJWdzRcL1jsck2qG18rZnRgReRYiWioWE6KZgUhSN3BTrSNKNo61j8qBoQDP",
  "key30": "4jgd3ZxQ4ReRfSST3peFEnkQm2aDT3xfoVUUN3fT3wDyVoVCpRVWt4fX4PQF7rVWTci1AZUTEVTwrcZdVXEdf79a",
  "key31": "3wF1Mi8Kioerr6V1qk7FzzCv2wDB6n82h16rsmxZ2snhxESHh8mCdGXgDVf32RGFD7FWUovKjSDumzy7KRhRZqYZ",
  "key32": "1fBwnKAENje7Mc27RLSze6s9F4SwLg3G68Cch4NiT1NMvZMHwJ76VmBvQksNYN7iRh1s1pc7mrfqtYTP4tGHDmw"
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
