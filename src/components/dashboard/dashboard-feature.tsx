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
    "2sqsuXZUXydXjCViNtzTEQ9BJ1nKwUZJYLeRkZyavgBq96ijqsMhRqvS6iYBCwqrSvnCwy69rAenMkZXpRrbQtzX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sVkCCPYwavv87J8pvQ4CK1Zn9F7icMFWQoJdzDHwSC5KFvcWYRHVWvwJ6KTkUeBgh1oSHQajXGH2VUG6bAuCc7P",
  "key1": "4ERD5R9Gef9k4ZGHSXQs5CX1ELtkG5x9TXm5YxNa13Y3vY1GN12edij12ekHSyoKtvt6uSHpzKYm2cSy1Uo1fBPo",
  "key2": "7G5TzYa4KsDeuWKZSHiw6X5AyPqh2f84As4R5FMxhTVsEn5rgKDP9L62ZkP3RdgMyEGD5Zz4PE4iiYCKZrb9xnA",
  "key3": "2KG72bmsyVmBYgPFvMJAGhzsPsEMVgK1HtsKrAdgDDeBE7yfk8eXQYa5YMQHb22o5n83xyipGBNxhrCs2H638S5H",
  "key4": "rwEvpq69SKREs6CAsQoW7PZ5DjhdWGaZEZqWiFDtQ7EyqE2Sabj35pw1m1XejutVahNvbgg1qtKKAbdGz9pTDyn",
  "key5": "66Uux959BPaWsdW6G8tF9SVfh99T7So4e59UeWrX1xkGys8ZiwnPm6uh7Jk3ci46uQH1J9UGaC8RHhoS8pBJa77r",
  "key6": "Ez5Kf3jCK7gvzTCLXfhbKNXSuJkpAWp5ptxJNUe4WLT6RRSR6Pfnygni6JxUyqf3vTsvSNHsNmcHtU2WiLG66UU",
  "key7": "NmFR4EK17JXvUY9zUJNZJMpxf1i9hQkXKSKnGAB7B4UFbAsUyWQftRnXoxWZVkNbA3TzUsasrgz1vRVxjBc6q3W",
  "key8": "2ksuePWK16ufqrXoHVU29wMSvMTn4dXEJYg5RzMtibsZqKseVp9Vu87icBM7cbJqcDgQsALh4UtnPeeyKNdsEYPr",
  "key9": "u2vndh6H5N6eRcMHTHTaSn1rHj3J9wsP4yRZLJkDvHnXed3hcPs6jqLbhxtxEawbuLgZprF2yU53f6Wx41Qz3S3",
  "key10": "AWqwmiJQaUmznimT87KPkmonhFmfKQgvQ6SW7cLU7JDQ5Y35LqrFDSw6ZMBF9MRLNzWLsFZaLdEahjJWGK8JnKj",
  "key11": "4i49WaYjpW7dTAQujuBvkpnubSHDYJ2xvFphpK9VvobR2suSyj54v2HCHBuorFMWpuSpJB4HvdnQmku2HjVKrhPP",
  "key12": "39K9umiC5m3huiWCS4FGXzjrYYhijY4VqJwwyVTvz8FuyW2WSWz9yeC6gZRWVgAYJnzGL6mnWfcKZ4KHwzxCayKN",
  "key13": "5VVfRRRLRih5YFUtNFEt9fRRXMSd8WbxMZCHbPaCCKSjU2SiFYrgz6vNHo1EvarMfuJDsKSw41T8YRa7CkBVNvuu",
  "key14": "4tFi4czLVPjaDKQyviKvS8qcBwMFJEHvrUNTmxrqCTX4TTW4zFvv4WBZDqtjfjBGyg6YzTostc3rQ36BDeGPefzn",
  "key15": "s5DN83QdvoiH5kCKAtfHMYdgyye1tjfdmHHc3AteRafjNZTeSfREKhHpEJAf6Soi2vYLMu8mRsBMeiu1fDuWn7b",
  "key16": "5wY8LCUnD3Uw8VhmfSXgSNFZrybd5fzihxALLWuNVbk3U9LcSURh9aDvsC7BXWdxPji3rM13JXVgnTsJ8AA41d8k",
  "key17": "DtCo69Hx17LokmUotA5ycjAvq87Lgh8c1rL7GHHfPgeJTd4Ufg9vbd6aoGsouY27ekMoS2SASMsf6ZwcrcGLip2",
  "key18": "3hQHaSHoPYniFFk5qSAHoJD2KWHhGAj5AZLh5Js1i8ZuroYLH7ZoJKNN9JNJfE5y5pbt6GUVWpcZcd5FQMqjeYW",
  "key19": "52Q7xc7UHJm9E6FDCRFEG4b57wT94phE1qApCMTgWvDd43eMoTFxSSVXBGeRVKKBZ85tumQMUohLpNHTPueikP6g",
  "key20": "5viP5zqApp1HEVNsZKectmFVdRuuWx4uvv11Jz1J1GJG5ciwXEtgKfh5g9QvWtV3cYFo4gKQRD5HYsm7E5uJ1C6a",
  "key21": "5mp4E4nHRLMA9Y2DXVeAnWALHKmVLh1J63hYqPpfPLDAVjDbXqELsfUn3kWkdzmV6Enp6YNU5ePUXoijxiDoyrNo",
  "key22": "5eoK9YQ4yjGhSsWNH2fhJEQ8Pice5U5tbCZNRMUPWAugtw4N3LsVrAddcKyPDGZhv2NDtt8Wgo9Z7m1rhdBCVqkH",
  "key23": "5Df58nCtHdPjucbVaicnBSnWSbCXrHW7WqTxgWY8qFzkRVzktZxyBtb76UxLG9RFsUN6yJJ5XiFs46gab5rqDuMK",
  "key24": "3XiMa5Gpw17cCVxFaQ1Ypq9PkGonAZmdeiU81sbmzdRcDdo7LGMZTtKgaXJywp7rWmimEZnEZrV757wyRN4FwTtP",
  "key25": "24ojGLuN8AJwYGqqDbXUcKEYapoqMmptRhREiTH556obDsFZeqB7AkFVZLwwLoSFKpbSwXMtBa9BzS5HUapith5T",
  "key26": "3pCmEvq7t62qgcJS5XYJtL6tctKrqfUWTP6qaiW26boB8Jbgnv4GQX4BaAzMkXWCBHPHscTQ6av8h7ignXLrrQQk",
  "key27": "61SEFtVJXepu1MWGdY9M9KH1jJgRFxiBUo1yncpojjrSRf3rPMJMHCrXqn6kF8xwDC7DAmYHhG9qxtWracdSD8dF",
  "key28": "5jCxogt7fccaFUE6yGTjgoZKby1JsxuwqzFANGTCi6h6LYd8cAuzKyU3q76bummst7xz6nKnc9F7v7ditYtSNQDP",
  "key29": "4a5RtB8846hCbR5RWENhHArygAwvD2hheqtznbXdirGwn81jnVmu4diFZvQ2B3pDPvZk24Zs1KxyLJisEU332d9g",
  "key30": "YszFV5x8hzFfuVh4MKSDvZEdHYk6o3MjCAy8QfJgRPLqmfrKqjxZ13Y3M4REq2p4a7q81h9wr5nm5g9TphsTYs2",
  "key31": "4zfTzraZTt81Mxv7StD2Nhfyr3Mtd9eUQoXfK83WyaKcDmoV2BNmG7kLSi22QtkigytmDDztV6dQatHwCmdz3VpW",
  "key32": "3wcXEvdWcU2QDgyszyhoiz1eoRXWWpt5S6qDp9cLh7aS2EpwkMTbntf6vFMdtu4QgqK3xCofZByr5kBx2gUChDae",
  "key33": "5QkryfRbUrL4vB8i5pUC73sQrpw3qpxSHLwSRsAmd9Hxcg6d4PLLghHsDEVQiGtvNsYNReqp4eAp6YJadNruApSR",
  "key34": "5HoUKd5irfqnfCxDJth8MWgey7D4MLv33HLkPLKRebhGoo763YkhiNNmcWpa3iNpPj9bmZQgC8Bph2Hj2oe66jT5",
  "key35": "5s8AsMSWGFfe8ejH3nMLPQvxQNWmrchN1x1eayNDdmrPPDAnoan3GdkKzcvxgmbd5SnWu5wc4aij3sekwdXCrCkn",
  "key36": "QsZA7A6qRbyKqHXRozZgHe929ZPty1SzjAMZedR8qXNbobTMFq54kM1qbv4LaPhT9u8XBkoYDLwfubV9GPNdKHW"
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
