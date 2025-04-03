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
    "4SQNEV7tZv78kqqe34hXNa9iqTCigPrXVuogFvdwDRNCftHJD2sb1TEF9JYvz383k7kFC2TDRf7oN6ziCYaRPgys"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ckggwThQbbTdTkExxH7vNsrXdMPFH6qdTqFmr7viFfFeX5GYpwuJx1sSw7cSc97ruKKivV23Y2LMMQG54p1PET9",
  "key1": "2hftGYXJgsoZCD2GEZADTg8xnzdnRc2aH2kWVGv4cewNzp79rAs4gPtWmeQsRWsC8M7YHAYppVmw9mL7RWejdVh7",
  "key2": "4tCHVKyVhaf42fy96yufUU58Y7ifhinSe5M4qh4gpE9b1MaPWshp4nfX7wC7tzbtuB38pog3ZzoEnsdcNJsaxAJp",
  "key3": "VvZsdzGxgVq4iR9YTSKsCJ78B3wBzgwmr4TGrL45akEjS3wSfavaBGk6WGDPY9Wpzbu1kbafwLBGnjWVLyzCr4J",
  "key4": "6AQa1mDAdF1XZcrs9vepioCnUwn9RGEvcUXdcxBh2YQXiqYb9CFdS7WL2tgDQ4U9tyTpuQwbkp3cATLCxLXiHvQ",
  "key5": "44ZuXCzR3R114ppYAaCCDcP5fTpSBKENnUy6gCUXeuVyXq1TR5zXvgK3NktC6zC7z4t3vGwq8T5JRc66As4VXyuW",
  "key6": "4ud5g5o57nErtk1gucNGonR6qyEvRVFiEAJxLf6m6xqsQF1eUbAwn3kcePoaHhh3FuqgvAarcKQYrqGVx4NBRw11",
  "key7": "453FYZJ9NBEad4iGDgHX7MMkKc9oiSbcFbacXp72ruzn94JeHcBFAaigqkJH478dScroJj4jX7j2ZtNKwBwvbZgd",
  "key8": "3A6EogPwuuDXygQXyHpNzgwuRdXJ6QBEyfYWpThMhuLFfr3knymfrcrjDyuvAkxooMqeWi3PoR5QCb2z86GsL9Eo",
  "key9": "5bwaPp14qKJBPZ7v9eT4mLyfYTuwEhuSfi4FAJonZFcsyYNghs8NCWHBQJgqYqTo84QrFPh5JTUeuJTsNrMHpddv",
  "key10": "3zvgjSREACboxrzwbZCySRn2hswzN76xH9RvXWwozXSLMUdBzsKZ6Y4gdn2ZarZJMiceMiBGJnM9SddXqLdFCx1B",
  "key11": "4gcbPpEcARnsTZ3RH4Yeip87LzEQN3WPePxMwatS8pL2zYt61EGfZqZgvFRCekjSGk1BniUFuozDszzkoRx49bum",
  "key12": "4V4szicr883m4HSrn7pPP5B3ADiuhdJ9vnqfke296L3Wfqa7iLB2JiDpd7tESZvovUq4Uv6YbGTy1gzJjetVHzVc",
  "key13": "4oHHRqg5FZnLy52eMfrfYTXs1rtgquSo7djiS74rLBY8VHjf1sbbp2aCxrrw2Ls7qhV6p9MS1s6LbZPasdYhsbFg",
  "key14": "2sbEPjNAaQz5Vxji6dVSkrbNC6t182xTDYEjyahFt94voWuxsS3oAKimuY64Fx3nfkxio9U31BTVUbH8UMoSx6Q7",
  "key15": "3o7VHSNzTWj6R325PCghEwhGoBGjPR7EeNfxCX9ko8pMs131pp67z5uQJN4vMmwFn4BsfHiXHLKksMdrQmNuNRMT",
  "key16": "2Vmk5kMxfVZRyYPMgRKK5LBuwBEnycDACnjTcjjFN9G8NK3umdn9inKKrdH1b2VBchwpEEshZLw7ZXrkmTC9hKtp",
  "key17": "3WRE7gXYajuB5HZVsrZnCVsKZN964mKHzgiUquHPBUH3zweMDCU1k86jATYqF8FY8whsPdcGTsKG5GTcFudYH7gQ",
  "key18": "dX21Pp1NYpTqzhA9F1KYh1r7RgZVyugnoJEf2oHK7mheEGBxkULABVd7DXVeSb4nbB1oypHtP5oKprSNy1p5Z63",
  "key19": "mpJeaHo6By3VGLUgverN8U1LdfgHmW1jMo9XAXp7XPaAo1VsQxsdQtEwTEkVorFHBDFN9NaNgZAcws3m8QAGAWz",
  "key20": "2oW7b52fzvPoAngCoKSTfn7dPq1revdXjruyQQAiSenwZiZxB8ciZ5XWZMXkM87soA5hx9iYGTEKBZZy9cGZpkXF",
  "key21": "5N1WYVXo9Dptv5UQZe822v39Z2vqeAeZwhRnFpB1tXDCJfN5otySpMEYrH9fNHjLsZiZv6V471oiuLMhgWCyk7p8",
  "key22": "4neyhPWzdfsGURLPZE3nrNZLWV9GBHVaRVvNcpa5HmMCr9ov8Uhjs1WnamVPBcnsur1AmgrsVS629ZjsHzrRAHhT",
  "key23": "5dpimbZ8DyggNnccjt4cEcns3dAr7G9aMaKM8z4wYVeXgi9fhM4JiNGB2dfMZiFyxFhiKQBwa2Zydn7B1QwTpmzn",
  "key24": "5PrTiSuhbveokx4ZWygm8HpGmA2J5d28QDCWYeSxHS7UdTZbne7XDTAqZzicFuqs3bqzgDvqjBxscRj9xvSveCym",
  "key25": "DhP22nZdaKDSC9gKfs4Y7rYmVxY229eVc9pVCp7H8XkGuUT6ZFotBJsSzHVPweVNG8xjFLRoD7z85mCR6Ta2of7",
  "key26": "ttxZyEBXSXXhPYBYu3dYyKi7dScvtE3moUwiduaPHqUivURRLPrsLGa6JBkL9MdPXHdvPgXpoNub7kDnm4zTNdz",
  "key27": "J41Hzem1myFScXHVA16eXqEvVcn5KfdPHJjrj3ne1BqYD1SvSAanuR4qptfPsy5TFQBJXSsQ5yDN46YuWeupwgW",
  "key28": "44592fWtAvMnQePqzvJMyf4Q1Dw1cfFdaKvrU5PySdZdToa9gSF9uFWmUhnwGx4Y2X8ByhnsczZsiyB9dozbrpus",
  "key29": "6jWDKaMbc9Nqu8j45XEbMLWkoMyb4CBy84jC1pi1jv2w8eGoKLBCgGW3yUzcyhLM1dV85A7FJCWhgNu2bWgc3J9",
  "key30": "sNapz3eYweWQwAj33FBmyUBLoBwPoh9FZVKtQ4b2R3hR7rCGgvZxaJnPk3qka29Vpc5uQRqGmKbBnqrX3421Btj",
  "key31": "5WEZbZW2SKqD5jutyTFQqg8eW7k7FnMNeC4hts9FZVgyJh8QdCTLGpkVazo6W4PQPbfA7W6GXrZSYZ136buCmjqq",
  "key32": "5VwQrGdgvMXjzAssGv167Q7k6P6JmKcQUv37HnKSVNGQpzyqKFuvQnQo3B8eFBQtnsYkfgBeVmJdnJ1G3GbmcjqJ",
  "key33": "4Medim3LUQK7QBHUL8oxyVtDcSGYtBymhMskzuKZZEhXHFB27mxkJphc3CN988PKPs64e1tgYHFVpsF52KpmwskC",
  "key34": "3mmFJaeoyUiTkBTJWKSooj33ej3WE3x4RX7K7PuUiXfaXCgmV4pyaCgbEZQWW1wUKB1Ug9T68WuNFSPyt259TeHB",
  "key35": "3Zvr5Hg3HaqMVqcrXNUisxfLJU19sUQ9xHRikB7cL1yhYAjKAXRDcKDgVkWVyzTSXBaZHq2dbLV9yQPz1tPdkg7q",
  "key36": "62REWzVGb9ipmbTSKsbe2uQsm5dyuhXmhnPhw2waCMUG4pmJeeRgjGCStSEq2Hefur5QzgfCpSsAGojqQWZq7FRH"
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
