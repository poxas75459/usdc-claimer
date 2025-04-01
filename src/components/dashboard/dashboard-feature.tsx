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
    "4KA8cGBvMvReoVNCGTivoSbMmCXaHt8TEVHFjEdFhBhHzCrZJLuVCxqWeT4vPJyvRyht5n2qNzqCd1ehGtoYH32E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9UVXjXKypvDYjTjkuwPvCeqLqXXiKxHd7WUpPFuZd8HfEmaTJmyyNBvPgEtKzr7j918DP5zCpMKzu222bYPy5be",
  "key1": "4ZomAyF9Cq7x9f2sRMaBkheWNXwQZgmN1ShzgDzcQaXL8zkEK2jBGUzLybhEZ3p7Rp6zicDYR8G4FejxxsjarMHf",
  "key2": "QiBpkqiFQUF564hQD2FBEDp9gS4yutJCpRYqnUrhgMzrZV1TtKqVkC2KHkCtAHQ7A31P93kk36jHNdLJaA5Z3bb",
  "key3": "4JiVaz5hLfLCaDUy7s4HRzDpr73vPzEpgv81XxsnnzXGbJWFivJL2XMiW8DSRUTVVaRMRdQ4ZuAc462NCCnPzJjv",
  "key4": "UpGfhh2UrzKeitycSMWS6UzTFRZLa3TcbMDUtZSuD66afrHNPZM6M2o1d1tkAKzthSFg9V1B7ZzaVRp6eVFNJgE",
  "key5": "M4PyFveFSWK5VH9QHJ3FvKaQA68n4v1fMeztVXHw4AgQDuQaeCa5HkmM4U25JzyPb5twtzjCbjrQF4pnzuhhfL2",
  "key6": "31mpEojSxXyebuVjbqyBAr6D836JKUoV7EppB2jRaN5gpmf1tmgTmYv1URoaqNpsgbwrojTa8arzLwocrnc1woyW",
  "key7": "2jUvczdMGimDshjVXPFCVfmGHLdBG1bhEeubQzWP6sbJMjDzckSeC1f5x1owVtNYksjYsLcKK4r2bApVHBPpMctb",
  "key8": "247hJgz1KMK88qntKUGL1G3GL9JC7GcEFa4ufSLBLVRa8JfkBTqDbrJ9SKyVt3BbN2sCLVTq9rTbEPqQiUV6xjeH",
  "key9": "Qk75B97HwaGjDW7uekN4aM89dLtqv4qpKamXWxWzqroB9yCkoCU3Ph7PWGpidvtkqhxpPBi6hH2Ds3Ecp7dMoi6",
  "key10": "2w6FSi9keGp8y1N6X34sQkZ9Fgtz23hL8pPdsNd6mv5VHoMKdepYrjfGvbdHF6kPNQdwtVdiapbgihTVPhHEtjG3",
  "key11": "DQ8pZQgPE8p71zoQjzB6foacTFde6Duxf8frHR97JPPKJTXgxfr3JU9A7KJ9Zsj3NPcA3UykNnXmw7fMq7upjbX",
  "key12": "4DUr8KPVpLW6D1ofmuT6zJ5j4gcY5jqSHF5XucAYsAtgphnWWaCmBaHuxjyE68R2dwHMowrLX1tLwPeyBYRCJH8F",
  "key13": "2uqbHPttNcqFg2uVo9x9LwRgE2pKHpQfeJEAYoJqHKEQLxtEVvTAzD3oZgEGJoziyVzunQuLDHmJCVhB5vtkRnkX",
  "key14": "5v4y6Lecn99XZEpPEWgNemv9SK81xS4cWyrtdzRmZDnzoNMonBDbMbwj4Y8o2BTWfDbPET7BP6ykVDofQ96vVi6u",
  "key15": "2EmTs3yLDgjfj63jWeBRAUgJuVGtPsPCx6kN7F4zukg8Pw2WKMmXJyqMvsMYm8sux76nHQSr1nXBen7iKe81888H",
  "key16": "3uurcwuGeSpZoi61jPW6x6zq4qEcyshTRemQCKSzfZFntyrERfA2daSyw1YMcZVrD1REX1dHxAraLm4AHQyhR42o",
  "key17": "5fVMSteNpq5oRTN7Ke26CPaHRdRc2yFggwAekPpA2chrg1cWFrJNwC5iHGWhxTDMHxpkkYWdkLeGzw4MYMNSaFex",
  "key18": "37yJ1Q27mYJsMWjLTe2jL8kVpcF1ZoF61RQHHLph9hAhccabHaEa7zxGvMpJ8bKnTfBkA3Fh9AWhV9EUPrBnDTJP",
  "key19": "2JmTPdAfwWbYXtyHab4nFJ3fatUQ3pWCfA7HpVuFPW9KHeCPkkpvaL7GwHsWHcRQN3WctBZTd64fHj4oFHq2gbG1",
  "key20": "5AYJCgnZD6gK8gViccs1hPx1UNQa7F2JbeMF5UCBuCt4uo9R8s9Es5P5mgA8XmeRhzTmYZET2AZ6vBLGTf6E9gYn",
  "key21": "4FF8ioXgNbKwtLB2CrLS1pkNT2bi65weNX2mqQFX5GWpdfko7H3wVo2VRCrwh6G1gs3w1sXEC1r3tPvW2xAM8rom",
  "key22": "rUyfKcBSpXZz5MLGa3ysVrGS179YhxKNfJtv1z8XS1Jk1FsbX8sJc6uQpvgrrE1PWQtn1RcN1zrXCyMAibG29MK",
  "key23": "2f9xMS2W6mo2akPmahdjTp57LNoC3ntuNjxyo5gwj6LEEgHCoxnP6x6bHdWhoc2ybzSj3gfnuSLDvgDtDmsqApAn",
  "key24": "3djUDFqSJtbr2ppvZrL1PqdSbMg93zyBB49bzyaZynFbeHg2W3UfeNqwrq57h7tR5kY2jwPSdK6eFvVJsZ6LC1Xc",
  "key25": "34vBmamtfDWkYkErhYHhLUk4WbE45Zs4mZRNbRvYVmEcz27T4kcNLqNWFpcBtKbwpG3uYD8eq9RDcCDtjcNym3ER",
  "key26": "5Kcj6VgzjcZx217yf38F7bDhNAwNz2i8nxvLrrW951VMHtBrmHyCwZbs2RLmFMeqSz6bzw3whMJ9mbfn6yoZC3fe",
  "key27": "2xCZvuPo8d1oMn9YKXB6CbEqgM3WvStfxsiwNM6s7mx8fhSKbmjSkhHS1FDMgyuqhPvhBpHZPY9NZm95WPeHst9W",
  "key28": "2cCHvNPNeDbSQPudjdxbnxntBrPyUBdT8Gz1ghniNomKfoYJT6Rx25RRVRLQH1tNPX6k1AFAkkCzLie6jJf31pFV",
  "key29": "2T5vXQSKRxCf5D9sptucneGcyZxaii77PABbohuXYgFRRASZt9AjukCB3zZ8WwwqY5mcW1heg7p3kfNsUAYrAMWK",
  "key30": "bbrZqWXEjVyuRYrPTXAoXEnwD89wkKpoYTTgoXVeRiKy1v2Tcx7GoRMfeHMx182FktEXmp6yhFUFymPQ8dsG1BR",
  "key31": "4MmNetNnmoHir4RyXcvq6F4ky3tHPYu6386KcTEyYgjUkorXLksrAe2CiUoWT4ZXXVq1pj2xS2c4Zis2PjaeoB5i",
  "key32": "2yhDcXc89Nc3yQcve3G6p9aJ9za4Y4fUJ1yFWZcwHA6DvQCRWbuHciVJpvbdP4YhobL4oeDm6h7VoDmit9X3sQPP",
  "key33": "UdESCRR7sd9v9jcak85mGnSjmW39bdRDvQYy5sd3C88RDLhvps5tijmUbnqSEuDXymE8x1DRNjqRcP75Cvc8upL",
  "key34": "5DBDJyWvZJxB89WtZ7rWKsde5QivigZpya6GbGMFSZXcutBQ8xqrQhQbwYeN3yFq2XzuX3etA6qdDHqjCrtNHeW7",
  "key35": "fagZbsU9ra2vwmYkRqUGDDLNV2p1NowWHa9hbNT1pH67nHEBKcie2QT9Eu7WR8TjDbor1VKSqw6YjFCLbQ1wr7V",
  "key36": "45tfpiTbE1UvCw3FWbaRTwqeZ6vVwEhs1RzU2FxgYvJPxAaoKk88JSdMmRhozTbMoChVTs2NKsxdmhd8HgLHMAKy",
  "key37": "4iHnj9BKL2RMQMUei5CP1TAJxofHTc3kuzKYZWe5jUCG6fFFadzEGeERZTJ3hgCJVxyi7gLMLpuyjan5XfXdYxpW",
  "key38": "2ehKLeHqHXq4XYVdr9piee6ChbXShQruw9A8UG6ky37BG5BcY4aZ2TPx1342ZAc7UrVsvbtDEm54nXLRCEwS5xs",
  "key39": "2bbyt3jAXMYoCHCwWkGEXaQ71xBuzoqkpz8F9krP6o9Hn2CnpdiTVeikcb2CmbbkHaDtmNoPfhXPXPgCHGoZURrL",
  "key40": "2fmQmNrgYSWdWJRWUSXqdz1VMQSmkPLvnLJd25F3wbWcggfq5Z6VidCyJsXcBMQtW5jnYeHWfMQ2VtnR6XigJC7L",
  "key41": "SJWfxf8SFVHTjwp9FsCKBnDNr7dN8eiQh2kSkwg29EqpKjtPXfGG225FYGZgyLxkV7osGvE7DYQJLHirSazFjZy",
  "key42": "2nBh3oQbHSWAt753qkeKGqeko8nVQRrYguEeLfEzthXiDVUHKEKP7cqo47tgCPF9aZWicbSHFUHCwD1ey6ByC7G5",
  "key43": "4pXjKmU5maqaHNEqA82zEwBGBriWHx3xLKb33WDVuFPVgNH4gRuTFmo3rcpxGUi7qqzhpbZsVwTf62i9e4mGmMGy",
  "key44": "5X66YV4pTBSWiw1nzfD3wG4TRtbxJNvg39P49q8oUdXn6gnHbAVBRnegG4HZDjA2cxdnVMX3u5tactQmR761fBmr",
  "key45": "5GN7XYBQ3W9RgE8AVDThVMpyoXrLbTCVEYUkh9HvDAt5CfBwqaQm57oBE12uYUhVug92N8ohnPFC6gsn4EJRKNzi",
  "key46": "4mNiCwrLGoFrAPXXNNse64w1Uy7RMcRn9QPLu7pJUc4Lo7AkYuKLwMm2tpLCD1DwADc2P1pMN4vXvBGwiAcbxgkJ",
  "key47": "5mN91MLQNTUoLQPjkauNH6YdNXQneALE2jD7KLMBH9nDaYuqaigJruPopF4RXib4AGJGG4HPriJhMx5GskHzDp6T",
  "key48": "3fR9pPVUiWPUDmmUb3yqH8NPbpqPkTWLRwaeoTL1b1s6pWpivnNS2JPPvGjtzUvt3mzgCohvRy4U9UKHvzEpy9Ua"
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
