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
    "ts8S87Dr3RqoYYKiZfYVH2erf5E8NCexFtc2unCVYifyCAJ9mUrR9rfwAsDj9peLLv88spsofcoee4yW2suk3nL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4B4s2oa4pHfHbWqF21TnPPKCkesoxnrU3H8tKsaMjgrP1NaH4FivD9PNXZoPDosuvot2Ys66AASb8f8hs8HDTh3U",
  "key1": "2Uh12hNntRuxdrkgvXja9Su3fAwDTe7UBQVJXFtzFaXcJ31aMNQtrCwpnkYPS4oUBAmCLyLAeeQFWaEix5tgsDCe",
  "key2": "2gPd9YrUnxEmF7MvpneD9cvYKevNP1TdjnYuiCDfps3Grzd9hCEvMD8E9GezSQBefK3C2LAGdiBQeRAMWzJADvEX",
  "key3": "4FsC221WCUKK5vNwMfTsAs2D8jwEdh736mDBQvyboVBBaTvT2mJzuxQbmBZf9xTz3Pta1ZqE6coA89pnmb6yUPGR",
  "key4": "5NNiPCT4tGWnVdaj3py1V2dUQQbAcT42ms5TiPrgyx9eL2M8E6ZBfzEKYmS9fwFQqFzGeWptXU5WJVWQPBtEBSP1",
  "key5": "dZ8sopHC5TdeMXgdF5VwWVAXfoRUhh75Xnd6bC1uzLYqk5hQq8kZ1ut3v5NNC3pSdYbMTSZJNdS69ymRC6jpaJp",
  "key6": "2wLD4RUsPqiwWDYwwa5GZT7KJFxxMSpQvVPrcB85z6wunWpKMGEZv9UjXAsR1Sm6GzM4GBkktzVqU8KAtkH77FKz",
  "key7": "4jgFDgVve4GFvzV6qYxAdp2riQBpMnfTVY82npR7RZtiFePiG6RygiRwekK6EWPM1BkRBZ69jVaqUBs8qc6WrsLs",
  "key8": "4E5Mhwotop668sERT1FdNaZcwXe1SsV8U43iSE5oTr6ciUGwkRnvPEgf9WwuPztsTCoDVnSMLQ6cjwfh6k3SvWHt",
  "key9": "5eJ6Xj5t8ZeNbKBgHQnYVDmsZ7q4YBWL4nXCr8C5vr6FNYqJ4bCh14iAJWXn7Qqv8Yt3PeswZmfYQJc3e3UZL46G",
  "key10": "3NN4AAYsPcw6JrGiJuPAMBsGzcSMFWTHiC7aXiyGJhgthNbqb88EYJFmjqbAfyx3esiQ7x8owyTcyCDx5bP1r94",
  "key11": "2q3BcMgiMc5gWMpzaSQ2D7i6NtCiJSPUkK6E8F8rrVyBJyNgxEPmYXViStLwHyReqcJBisnyxTMRGCYTFF6WbCpq",
  "key12": "3y4dub2fJ3TCmoPovPe1mY5qjdzLiACnakMg6JjtfFweNGeQ4RuTPd4ETM3vURVYZJwo89JyjCNAjXVciNhFnZiA",
  "key13": "2z8Bk4ysShzqgZ1NzcbHumky9bqBKY9qLmBefQsqRQb3GpiHsgDw7ki8334gq4K51TMjKi9dFNpcnuWPurSEyQ2r",
  "key14": "heMVnEHUs83ujqdkgD3M3UnANuyfYbE7AEsRpBbu27k722ptVqTQo8h7VY4hNDemEt1Zjpd6vSD54d35HEui9xb",
  "key15": "43EQ2jjGrvnWAwkDz8sPBrNs1Z1hkxJ4N7BroCjJ1FPevSARFkiQCV7Csw3hzYGa2Uix47DYNBLtVTtgyYseMumZ",
  "key16": "5bekN8bdQ6q5hqxgkva17zQYLVVexYXeo8BsXPkTv6QCkRLV2hmbxePhd4UcEX86FTLPfAmE6nbsjzBwWEqdT6j4",
  "key17": "vUMECxD8h31TcLQose8voB8Un3TAe5mNnTZJfXSw2XzjWc8QU6Jgsexo8uEccU9PoVFnzEvXHCoXHDGzqcEYUZb",
  "key18": "26ShD41Cq7dddAwPSRVirjKj9gBExzArzPVDjbnHtzY2Po6DxUSLBiBmgcd1bXeJDFhizDMAJS3M8UxcTrm4AKii",
  "key19": "4emUwaV8WDEeF4tMvLFXad1z9HdvSZdyopWVJbMbnaGqJzXxy1tYFGr2FUbbh3dmccptJw5xDcqpWSri5Dan7xRh",
  "key20": "33z7Yt2DUbBrrrZrvbnWLtmHKcVxb72pxBguJeBHW2mGsg9Lifu4igdpBrjGFAf6QTkB2gtNUaRSghZmwekQTqdv",
  "key21": "47CCLssEACUnSo8XKWNmcUEX8kQnt1CfsrCgpLKbDe2TcCHwQ9eVihxsdNdsuk8KWETn6AUmSMWt4QKKEknU399o",
  "key22": "4JMiUSx8GxVyKGSSYLAN47WSrs1qsgpoDBm5pLUdEq5Tk5RUCV1uQVKYxQgoPM2VaiTTyQBNTheNHbshbLptETMt",
  "key23": "2SGo5MGMixhXZESUiFzfsV9BkkmtJq9hLd7KCMGt2UNVU2YktMB3rVhq2YQonuZwQK9akdL8T2wD9v83ufA6zjGb",
  "key24": "2uXJAqwmSTwBSuG3o3yJaUoWGEsEFRvw9oanrpQCNcD8XmM9CvywhXAuCZgnXDsowmaTzMHt97CmsG1SV8WoybSE",
  "key25": "3Z4S3h377sVpaETA1oKnQUFpsU6ufXKUGqYujVAHhNrThCYK7xyeNUmBX3if5Nx3BvnU1DVBGyc7FroiUq3Je119",
  "key26": "3sAbENoncoJmTFcTZudpcPJV1nw2pEVK9D7yjkV9DBfUKaggEJd5TLZujPoKnozpiukht7aimEXxPT15wVmQnuZD",
  "key27": "639CkVPEGUkZhLo5KhNvYfa6F34ecUhXB17SxGa3M4c3QNTqtzAzbA6BP4jbykrDpm2rzAYo75JHYMke1sbe2rEF",
  "key28": "4Gz9BAaYLBCfjWvRrTL5r6dGZXCdbxm25zzVwBAebYcnmjkKxfPdzBALu34RBfkiTx7CaZRTkXpWaTaZ7s3uEkg3",
  "key29": "cZSPS4d9ThuarRRBjSvusmTyvMP8V96E2Am7bopGcDBG8U2NMfQtEwqf6ugHvrVonW6wQpUcXScuB4GqjH4NeaD",
  "key30": "W84MwaSAzPFfXGMq237E6wyPmrdCbFttGESFJg2LArLKXBZvwDwxvu7tFGYDm1izEQoJJ32YTamnFm6msDvFuEd",
  "key31": "2yCkCUrYS8ogSafoHMdkBBNGrvRtqu2kn4vCfxevptS9oLr2YetPNJR4V8wu2Pjvw5FVhTREUausFbmoSVttYefM",
  "key32": "4ci5dP53T3djR8oqCfeKd2Ur33Lzu16KHsFyEVbBYB2iYR5JcZgCBAkoXm9puweeFha6qh7QBpa3YTVExUwwcXGH",
  "key33": "37UbW3mjDzc8sYvNBJvDvwNVR79P7NFu3piTCmoKw8oK9837KTsFCEitYUWsAnu85haXvc95L2DNBLyL2iwez899",
  "key34": "3Gqez8LVGoeh3sGw7PxtH7w7sk9sgXdZ6i2YGeDoCCThdQiiTPSQEw9GcykPHYuyxCBE8uYGmX9wrRN33qHEUBLh",
  "key35": "bF2ZCeVtdVw5vjBYzdkg52LdSLAqgbRaAvH1qxuKXFmr9sqyRNz1CZxUgHPrehXoyVVBqVRT4GoGZcUSdkCitmA",
  "key36": "25cL8nzZs9GE6g6zxLRDDySTriK4w4cshhjHVec8eZfobVucbRBSRLnsupUCXFxyyh7qyyCME9A3b5aYMYvDyipt",
  "key37": "4qPNTDZoaxMbX5ZphzHvAYnu3HPoK7gD2YHxUbP9UNzLRD8ZHkcBh5FpLVatVnUtJULdVz25QPNPkJnBDCJsgWf6",
  "key38": "332JmSGix9Fp7EVHNLAbHD1eo8Kf2BPrRwcRaw7Cdkmh7rbVNxkQ1MZ4UM7AXfGZ6xdJMKuBEvGFrxrtnCMVMjYb",
  "key39": "51bZzkNnQ6Kiaq4xmFyv4yXP4a3LQTYUANhkHxQjqVbpN6kfQJrJZp8YkubSoMjvECZB2QLJLNoVjU92sva7645j",
  "key40": "DwDKLo8cBUkdjpqU2aejg2Lw7eJP5WR4TPtLjDusczssvF2QEuMbSSHRdzvcEijXWJ2YuJ76BFxgK4PVHH2qEn1",
  "key41": "2opix3YxjEe5j7zF9JPjSfg3h5S85GghNGtBwEyRtog1D6tqoEwcUjH1FbRJPK7iy3jigwCvfDb8Skry6Q7QUn5N",
  "key42": "4jfK3Qi2T4taxu1X5Dwod7kebKMJvzjkboHDwPBzqEJpCuvJys8PUjuv4cwaaUJ6C6dE8uGuQDg9DSSvY2QG1o2f"
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
