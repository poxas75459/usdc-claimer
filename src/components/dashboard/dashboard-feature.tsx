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
    "4bmdUM6kcZ9cChYyaxVMJczkJEpGRCCiHRZSzYAe9F3TnNgKypDaaggz3uefzgYDmnH6GNEtQzyxpoLPSBWPURCU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cHmx1x8Nq5hZCn8KnnjuM3QPtW7abxEeEBJVwJKeH5ueXHtFh1awAWf6zeym2gKrbkCEKmY6KkXiPTdovftBVed",
  "key1": "3ajvoPJcMEVMwKcBi6fT9QZgeCgHpjv975KoYxNDWKn4zoBvUVbJ3XTuYa8gSYSG4V2Nw4pDR6VRoQKztf4FSNbb",
  "key2": "3fwxaPivudFRShTymUMS1uMwT27J7fxgbjmeosWkVM9M8PEudboPjy8F2FWGZ76cqCCPKnurYHMHKtpjbgtDAwkx",
  "key3": "285q179n49Tq6p4RGLLtJbuzPUgNTx7KnTP99fEiTo65d55GR1tumdnWVqt2HLs8WXitSB3j5YiY9B2LPdR2Lif3",
  "key4": "5QHJsZnEtFam2z72jV8rVvibxUEXs1MoREjYa5VJ8nDERBLnVh6NHwjSy7pqdfqJbuBCTPskDe4btaSA12eHVYs1",
  "key5": "4kaHkMvMV24P8FsKK3CKY3k45iEJ9pKUg6T3UG5ARWKAMm4wqLSp6RjWBSbDS2LXGbrMGueQFEPU4QoFHMBjyPrk",
  "key6": "5F9uYtMfviYuXSMFpEz86GQfKVEQdrSzJQma9rheGedNdyCaQs4iUVFAEm5qGK5joknik1RwVveWYmdxab4j9FRW",
  "key7": "H8tXXewGgNnizGUmVnXuAw1fXv95bv9fo2zsX8Z2h9TkfgDdo8AAU1QX1wvEmaKVu5MEjnVa5ABpynRwBF4YDZW",
  "key8": "2pQvP14yC4gzbw5WSdkTYXnE68H5dRdbNtsQQC4NujuTXFR4AsMEWsmRrs9yFaHFAEbpbeqJAVgJbDTeSTY7r3is",
  "key9": "29gjsFVP28xagypGpKCmP1hakvGq6gdzYPo2FZBptnq7Si8127koGfEf9kaRHWBt2N9EMPyoVGAs7PbFUTbzodsP",
  "key10": "5uL2A6iCDH2QorDvEncXAPW4yUwLPDmKmbkL4jr5RXoNZ5yc6opdxmvpYbkEgCjFsS5Qv3YeSEfoGVXg82p6oJkh",
  "key11": "61P2f9GqeANpBAQwjLnuu7UJpmMx3K8zwDoocdfnZvo5FuETMJnvvWr4GnN4eUdKZ4Q43fjoCBEQHzgnRyBFWXMD",
  "key12": "2ZRtJTn8ENYrd3dB3L8d3uA9PRaNGGAdfVUZMvAPaZbVt36Vo7wCK2Zi7vNBuMxJLkjWpHdi4MipEQcxY39iafL6",
  "key13": "2arRFopLsgLX8GeChxT5DF91ZPC8KuDxumn6kcWWH8ZY5PZrEaPKN4WLkou1Eoq5FMkUrmdAz53h1LRqU5y2s3ER",
  "key14": "48E1GrYRU6NnpBJHEM9enZWs7MsyhxnrrUgH368oU7xnJcRdwt8VbfJzt5QuLV2NHV3RxoSKsRyPirHJzVz1DaLJ",
  "key15": "2jNnyAxKKJLAHxJndLMNbe8m1FbqdxuM64cfWGZNYMJ26FqdwQCEQy1b47JqXzx4dju2NbfAVc1WC8NudXQGPEMV",
  "key16": "5d23s5SJdTKUqbz9oB9YfZgDZGRzcmPK5aJjnq1wQ6CaTo8cLZ2rBagNg38BijNkKHVJQhcYZ6NDYKgQWP3j78hQ",
  "key17": "2CyEettcrvW6HBQy1YfkoBYC3tke4P74pzsU9JDKkFGKsUYysA3zUtcWbhWbyqBkmXymB1U2z2nd46V4zpALjmeK",
  "key18": "3CxKqqCrisiThwCE9sosFq7Mma7Ss3DHeH8yXPdmfSRMRz1tePPFhm3nzdA8g3SeJeV31rBBH8W3tRet2p9E1CFR",
  "key19": "3H9NYdnyNcsmpK2s7rMxSNJ6ygt4VVUMoZj1aQkdPyAbjRKYfzErino9DGWQ8x5yVqroGJ4XtcRLxDK1NtYSzWtQ",
  "key20": "s4Xbfnch7z8mmQsW2AgQ3iTWBWA54VHkg8pX1FRNkmHpDYGKkFNaBwn8HwRbeRTAWjexFfctRwsMnZFu8xhP2Aj",
  "key21": "2S8vqv2ZgxgjnYMT6K1gVzickZPtN7e28sK6GHsnDCbuR91MkbwENf6dnJBdzvHTNpAzqoGFZXioE4YrrRfnhv7w",
  "key22": "4UaD86XboiukbhWYAhDckWsBhQa4WaqJEZVsMmkJzNQED6Xab5a7weNVidRRkDbDPgwZEgBvfqHqoDuhd1EdEpya",
  "key23": "2BU3NpsMtT5ZGZ3NXw4rLcvJ5oWX27dQZjfcF8gXkK5jTXBzSoMSecQCPQZxvHuqyLKkqZShD4E1FSuZtgBJeRYN",
  "key24": "SWGGEmngzQYDKLGihbzGTvZCuVkSvzZBcudpcv8jWhWRvMHF4PkMhUS1Dq9oh9U7C1DkhRDNiTRnFiXGQGCZk2V",
  "key25": "4U2sNN1ufwTvLKdggLMdd6iu92VYZ3uBwtJG4u2jYL5QGPkhKxbA1tW3sRqSQoY4nieC9KGQ3J3TN72XhkeF4ssc",
  "key26": "61jTxweNF3KyVaMS21AJ6LDUcUuMow8uEKDeV7RfrQTYCXpLXdV5kPxRwtF9UtPjb1pvFssXe26Gqp5zC2nYTWQt",
  "key27": "42ZrDUdrGv3YYViWEJSPeRGAyZGwUuM2g8hsqcb3X2zghJ52A4JjR1YyAUzFu9WDZgu4ZTVhZrki8XnvdegF1JCb",
  "key28": "2vPZUCKNpKPMVvLR5Wa9BkvvhBhUtVaAjayidfBL3sq6QQzTBPTYFSpr8g8JXeX6gU6aSLrDZpL5zHrUsjkA7mZt",
  "key29": "4P6TdEzFdSVu6uHSZf44ijf5UVCKatCouueRE9qH3kSY2ThNkJ748vZN8DP5FQPw8u62pjcCxWjnQ25SnxpEKHeA",
  "key30": "5WHqGFuUTLC8ZrmQzwnjxbRJRxvfUgCF8jSPb8AAQ6dVcE618C68VoorJbf1dWnkqrXzCQacbDKpZwX7UrXTXHj4",
  "key31": "5vp4PYdQhqRNR3mx7xzy7uVc4GP4hPr88ZK36GqcNYK4PyrwCXMfJUdUXf5LAGEE2asSYBL5N2qmUyzZiNjFKvVT",
  "key32": "SwyGdUav2YiXjtZCUQjbAfd7asr6Nv2XdX53PJe8HpPaZxEi5U9b3uzdwohDEo1NwdRrcbmSn4c2LmUx9V3Sq1f",
  "key33": "4tpP88H8ywMKzVGWafBgPYmhicSQKXk1xtP7RJuvL6UEUQVeUXboJdU4HDck2FbWhiaM3UPx9bcgjtLpA8zi8rVW",
  "key34": "2Zhrk6iPfu6ERK2spuLrH7Cmh9EtZakakSoBwva2irtNghnsTpevFz9cX11kA9Mg341JxLEYfSzxKJrEYPnNXaQE",
  "key35": "5nbmp4tf5uRrtmzUqcthyirf9oMrWWyAhiVVyVmjek36jrbAzSGfXRJTADjJnYWgHGopRYFE5ghRtXgdW18b34jn",
  "key36": "4GstKKfmggcbtYnrN9gf4ra2pRaREg4YzkcvNbVgYVdii37K3W368MbwR4BXmjxrpxcSjhgUNkVnJpvSsbuBhAai",
  "key37": "4Suz47cCEiRENDFMogX9iYuUZ8wxxeh2c3g25KPRUS22yMVUyQCkW8CnuanYthCY7BB39hobjkNUXTR95ee7cXFH",
  "key38": "5Aej4J6xSVe96aMHTporexQTc2oc8L18cpBarFkDsC2DBNQMb8GLRMUzDtQgvrtiTFHQKBW6C7VtgWakje9eiCPs",
  "key39": "3EgMiWRWEsDmYTYJENLp6n4Nf6XyUkJ41bVdxeFQJzPWPUS3eNAHoWe6DTd2rQAycrW9ob9yN2E1Ta2GkNLFwKpQ",
  "key40": "28rVJee96KkWjEZbrwkgMWasMQyLjeBRQBvEHjt1LxHvaDVdic8DkKiMtwH1V4FhDPTjMvSCvZLLJs39XSUmsKcr",
  "key41": "gpb7McFXrvmQ4ujgUR8mr5DmT4RUzkSiPFJWoAuaZht6JxBD6FYXhB9Uw6f59KkGnRnHvxsGGfLV4Wuqn4fY7F8",
  "key42": "wkN6h3DZRAj5AruEGRbDHa9US2TwNs6acY4mDi53qHDcQgdqdPpcenPckzAqf6pebxhLwCeRJJDR1EouyRFVnJh",
  "key43": "2ZtNZdYr5CB1EYhDeQApPPo1wSmn38PdcFqJpw9AzbhsfJzPLSvrr8t6i5f91GLmrVYo1qwqJiZycWHCRQ8akErE"
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
