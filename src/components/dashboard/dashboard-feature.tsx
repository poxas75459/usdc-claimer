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
    "674xxSRLQ93hUTWjKqMrfxBv2rRXRiDDAbvZirn75ruvPiA2t2R8G1dvUi8zffUJPrtvwCB8xmz3TNN1pK58YyKt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vDVGU9HpcK8AtvuAPH1UzqXr5kYFidNYn3ukAZ7GvBVMX555DgSuhCVGQD3qMMeNZmzLrAt1Vo8daxQdanmi5KP",
  "key1": "4PznsH6vETZmHF6MbNZdGSzuLX8XFGKFY95q9PGFrmo4DtLLBSuunA8mVDsaDbvg4F1udGWJdjSuGCTf5gU2n3Ud",
  "key2": "4PaUWHAFk6QB6ynBt7PWKSw937FqMgHQw4ahvoD3E63Q7Tha27GrHNZD8Xgggu67sWXGN2VD9wt8qreyVnZF14oo",
  "key3": "4tuC1yA6HhxThwjb23d2J2TDL9cEfioVP2AwapEodAojaAjZRnXvAtcmAao1cvESTGA7w4iu4hyizFrADqBt9Fph",
  "key4": "3RWshGyKAdikz6WEsiteCPRbKZU7a7bidCpWLX2oCtqoF8FfZU2ZXpuTYYPy15o1LdFo68FHGdrUpBry3Qd8BKmN",
  "key5": "3Hvc64bUmige3MUi5qtW6NtAcnX8Z9EaUnoeaLofbKaPJoPrXEAncotxst7HifG4nNXwFEScZRRkLpLhfZ9Bjs9r",
  "key6": "2tzUc6XPDRSgcnASU3EMcLAp7AVudUeq8QVeQzy45US1BEcyteEW2bpBub86pobCe7WR4QsVht7TKPS5zcgU1Vmi",
  "key7": "xvEPFdBHtDCPzNqeJtUT1bxk7j4mj5v5TQpfWYjXyAgD4AiPdYLwF6X36QRMoWZ3eTvhtpGts9vUKjQEzdrs1zt",
  "key8": "566u8UNhRa6bTcjLMmDvLbdnUNyb5TtP4g9ibpjny4GJAE9k9YUxf77EZSFSg4Ym3exLT8nZkknRNT1EASvsY2ia",
  "key9": "3qNBU1baXGzSAd6vgvZSk8c5X3YXnGuKJk8sWoM9qVuobq8LApmfeaW8uN2hzJ8XLLwad121Qsbrh8SQgjBnb9R9",
  "key10": "52jVRM6WbnVuR6i66qQgoBfFriGfMFMJQJNzYgwxK5nnPpytvVvDAWmQzV1iZAdNbCjcopynUGAVxZvWP2ZwW5e",
  "key11": "2fr5L38dw76k4dcRrtmgknrXdRBbEuZmEQHK7aii5DEfFAKwzRjxhycM7KLDHdLqRNAjgqrJBXyNGkQs2uVVjWm9",
  "key12": "63cCdygYA6s3BZGdjuXPukrdmtYX2cxXYdiMGCCJvK1VAvUBU8bsCe1QZkXniBqvznnqtqUbhrJzTrfTAuSGTvM9",
  "key13": "4Fw2G9LQ6gBdLGYVarY49jXQCdLtgZXhr2ffLbUHwXW2A1saJmJZjzGEXFybvjP3LrCHycvmQ5QFgHC5EqczipwX",
  "key14": "29PDZaXUA9gUPjSsJsnKWgp9FLRaRgGbTNfQHCnvt79w9YT6zuy6MJ9ACubUfLzQVNwL3Squv6r1jnUqfShgBmzU",
  "key15": "2addTwstmenEe4xzwzPfS1JL5jcoCshjnBTzeQMeQwkTmQcjCtyZpxtU5QMC8VkZEM3cXfPsAHV5wBTuPfzGTSTb",
  "key16": "d3vWZsS3ZiRhwNZTHjXjq7o5R8ah1WLoPLWSZ59eT7hGZyvksrmtxgaeK1nHqhHu27PWXugenyLFpZuzwu6cded",
  "key17": "5xNzqUR9wEDTiEYgfMZhpCiVoZAvGEAWvJCfcRMYsmePyhqanL84cgaYUv7uSKbjPvfmXBxm7AjaA9acKfZSKkZ4",
  "key18": "27D37V6CDVtLsDXbSH9qsS2vxG3yrwE24mnpyP7XJjfnCMn8CvEXw96a2BDtrfhwdeKhWoX68HndWqNPnWgRTL1i",
  "key19": "2Yu4L8Wt4FDJibNh1BcRrt5NrWPjgpJqe4tmMnmFqEhnhfvH3sdTuFpDWUuUcwhuc8Be4W59TRbN81d3ADzsxVQ2",
  "key20": "9MGxkyf7g4dVms8S5hdtkcAhGyhcDpEVdxNdfHjWgwaAraCRPgpPH6SNXYY5dN3ZrV4u15ijFzXpaKUiBJUG4vs",
  "key21": "2j1PkpsiUwE7DnRkYU18S3iXwHdhgmvtGugYL31hFSXovcJyHV3wsRMyaQ5LtLMBP1fgPeCUCRdzVeTZnoAQHkBd",
  "key22": "5dzwp354dmsGGgS7VLjaxuf93mDWgLvQTFz3YeowkCW24ieogygKoZJVHqQXdbw1iGJyYww1WsxGngvn933RHtDa",
  "key23": "ErH9jF5b3etjhDvU1kUbJuACFCuQmrvTjby5zVwaVmmxCPSo3nm8fHqr82yDcZp9u9NaYsX1XmEV1dVMpamghoe",
  "key24": "F9TttEXLaMUBXrgoiYF7gNiAp4qmk8SWE7RpqyQHjw2pmJbTTmh83rdicD8GyiG8XbsohABtgqowEhRRD16qYnQ",
  "key25": "2KVeAm3wwBRk3ctUGB53q3wn2iTxSYqbBU21gWLw9Pjp4g2W95q7q6weg7Ha2n5SuESRXszwbnuLa1WnNJrnAV5h",
  "key26": "QGQ7najxfxsqqvLebTBU8WzpzatrQNHs7Qmr1w6JKHD8bL9Q6zwYWM7wGKWojZXCM5bZo5yCRhs6gbv6PTEZY9F",
  "key27": "2GnQHyx3YgHBaKuJBdrjwz9LzFGS9cqBdqdjmk3JdtoUtZsPAhPw7xqW52eKa32fxfrEgPQAn9iJcG2yCMgTVqrb",
  "key28": "3Z3wfKQm9XTdQQ3fyBTYHYxXgrjRkvdZEZjLeTMPKvAqMS5WKtiH3FJu9kaDLWMma1jLETihn8bWKkDtkek1urFm",
  "key29": "2mssAmM5haRQmmhuTUtW4vLDjktWWFHiiu1gPU7Jyym4pGRFRbvbmwajS8T7wyYeas1BSdZUpaozoqtWCnrVrcHb",
  "key30": "41GX4hHXsdQ9fwnxbjNADKctXDmNc9oa4VnK4CQisSDRvC2PR3j3pDa7bsosqskLBBoEpfasKEPz7LcAk7wdKL6L",
  "key31": "5eVstXTqRa2mFXrreqFEnpMNdpCBfmWRscGxMtVuVFofCzLxbH5FM58NAZ9e5zctfZr359dEV8jHhpniz7533LUM",
  "key32": "3ss2duWK9StAQaH4p618wrzgjjx2vUAhkqXbhL74bFGaeCQznJYCTCBSETaJmkhfqgTYeiz2QhPo4kStSJSSbYBR",
  "key33": "5NmYaZtnswJSwpVgu6Y1jiGW6C1xCX3q9oFhgLD43dyhk4tTVAzrtEXcfAfnFLnhM8qf4Xq4qwgWjMXmYaqy5vU8",
  "key34": "2N9TLUdtpcRkGXFj2ruj9RwqiHvmGQfmwMCpjtfrzXo7SYEQuubs32bpP58PRPFUVewnnTbpMw2kK35ZGyJBo6fs"
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
