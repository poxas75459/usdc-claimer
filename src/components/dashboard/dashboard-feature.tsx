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
    "5ogcA5gL9KxoJbjHeUmUYgQ49pXVUBiaPf2djXy9USdcfWLHVxU2DVpWMwxyvCgXozKn5baidApziSkRTp5bHBw6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "W7Yf1zj7916wbPr9Ae16jUYbKXuHUqgWcajFq8qQPqf7C2dU6CpTSfh7WsYnt5hNVU45MRCpGfs2GFYZyZ1LfNQ",
  "key1": "dkYEw4sH1G6PZcD27DFFQkd6c6heNSCUer7xvxEydEAXx7UncJhtRUSCJr3g81RzRxqKgmdmezG1Tfo4EF3iann",
  "key2": "2sA88SS4JQm3RCYrcgdZzvyk7cMP7Gs6jguTzYuZTRA5zsmb1s6PdjWF45v76zbJymeoPrnPAW6d8rvycPCHcUKn",
  "key3": "2UbDP6MCa8xnF1MAa3whhSq1uxgaZ64rn2uwNiBoA5X43rkUU5nXPfxjQTH1uTNR94muuCxr35mrDTvQKycyUPbr",
  "key4": "5p3EYZv65BTDCphetBZH9AN3bnMVS9Y4X179fTdFKtJWYbP31KhgSSpmu7ru7BUGQHe1kJmTJRUE5q7Rjpw54b9Y",
  "key5": "67ghfzhi8uNbjfwXWRFhDrABnYidfLzYCnN1BXqQEoWpJ66BLP2aFPrXdLx112T5M721nTkdBo8XESboWRu9EvtT",
  "key6": "54qCkbutEGTXp6vmj7N2vykFVMpw8PnhLQUai8xFpSMdkfiqpNqXLEm2ctRkNbhyjNPdneMMpLP1mKCVzKhwspwj",
  "key7": "4XPcSCnZSMdp1zfYsMMhtGs52XXrWUjsriXMbaC6YstUq1GPK7vVNjw5dppugACjgsdziPPW8jxqw8wVxwn2vWmP",
  "key8": "588EiN8YX9gi7czW4X4bkQgEv7HoGq2WNepeS6a6neKMHoVq6mkzZ4GQgsR2PZCFxtEKZsymMtiYYJXdQb23S7ZK",
  "key9": "oyH4fVXW73LuQq1szDZjAkXdMGrEMbTvke8f6w6Y1PEwho9nqtixteWjmMGDaatr4WdAdB9MZzGCUk3xuSMqyNA",
  "key10": "3Ja4TZQ5GJcSAP5WDErZ3nshYEH7GzURWpHNcmVW2CDWwrcUqeNDrfafYm3b6PrGGGhF33SHP8Y3Lg881yYXCLiQ",
  "key11": "Us1uhRB4q61e9J2Sa6aze9dN4b9H3T8dNBcpddqiH1qqLqMzNhc5jkZLjrKkUewmBV2DQnqDbEAe1o97DGo4jnK",
  "key12": "5xPGShUbr63R1vp9AcohCm2fdo3cNkZ5U3oSJaJU3C6NNFWCdc7SaGLckhKrdCnmemX4Dt1TyMSwV6LCHPaMV5QB",
  "key13": "NZ3ecipVz2YVSHCakTjGcC7zo1WmhktM5hbc1SAhsfKnUewRV3VhZT6sr7CzrtRh9ZZvypL4sThwFBvvErsRUS8",
  "key14": "2ufz7CmubDrRuKSRo7dV9nUsf9R9YHPNCKdr5DVcs9eLct3uvrDPFtb9m6ihJjn1EksRcQS7YzpL4eLydEzKPmEo",
  "key15": "3qPfVHDgegHRVveJxK39ab13Gftd3xvo4CiBq9g9yXTHhvWuCJ6enrLP6dShfcxRiKoMfyEgE9BKe43xiWqfuUU6",
  "key16": "4CambhWFaYSAEHEsFCKyqqn2t4evr8pYiu4fwL3RzEzqF18RNXLPY56o295TLnrNyghvUR9JPoPyPRD7WpRfbfNK",
  "key17": "5nWkViCaSWLJPSRtSnbvW95G9SjPowdLWwH6CsazqrCgSMhaXhgsqmuk1Vvfh5Ls3naL5VtYetK7rXoSkGrMsmux",
  "key18": "am26T4owLBKyRg2DVAd9zeErtXDAsLwY5ZoCQtLJBK8VvgAVaXuBauk9kAD4QHbfNwD2WafHh8peoc1uXCQNm3z",
  "key19": "5b14aVu5CRscQTWRzoobAqXowA4cUYGGBHwhY4VENCpKuMdcKExFva3C5jwrsXMTZPcp4ypWaaMwxYAD4SbrXqMb",
  "key20": "2qJefiVmezMkFde8af7NrkBFAqRGYK6Wh9oRGb7fCk5YcoGUM77dCFtEKhdAC1YRm3TphwGQofkseF6Vz1VJ1aTX",
  "key21": "53BFSXEaYzwQRPrHHdbhcoVPA6kd6UNbWKRL4EfZgyK3rUMo9iQQVWRek6JLthwG3HTsowRHsvJ4hDgyXsggSCw",
  "key22": "3A8n65fhNVL97fGjJT9TXqUgRUxTwa3GdzeApWwGTasTN63Y157hcFuXdXcaHEX35Q72vuLYJWUm4BRkCfNpH3uv",
  "key23": "oNQABxgqKeAUv9Wh3v5bX2ADiFGUrWWE4UEmHMrLvPvbv8o4AMtXthDF2w6xUEWa82Bcgk8iHyhHCe7fcrh1rM5",
  "key24": "3pnjmaB1qZnHZumb62WTYAywqYhNw16eGWuhjhxpPrpCLzp6QmDkCsEkJzGRswkLDP7qEkcNdma7b1WAyz27eJSD",
  "key25": "KqHn7LyyR99purBkCdxtfGQevwyveGzwUk4rNCwfkdbgTusZurk7hgYwsWpUPRThYnmEsWhqGLvXFfSC76KBySF",
  "key26": "SVjad6h3QVwhXvGZqFJekty3xmWnmFgXPw445jUCZE5ZJGVUwy7zbZN48SsbP3dTZ4cjE1ww5PU3pds5xFyDLEi",
  "key27": "667c9Nm3MtrZsirksCzroq9zEYtiDALwSMpdXR26JaYgQHEUpLQmC45JPYwxTwQ2Wy74bG3fDSPhrQC4rSPHzVnV",
  "key28": "21hW5yaDD9nueqDDY5TRTY4jcZqFEsKtq1PqbHs5PmaJcebPQ5kcKCuAHLzk7MdHi5bL4vbhS3h5cgsp4mannDr9",
  "key29": "cQw7LEf1WA3pXCqsQwJ7hNwxFuF1BJZSgL5nAXmkWai6FDy6w9Lt1Yfmcjrbu7ENY3mB3C4XMXiU3NHEP5B4GFx",
  "key30": "2yfxfySDVojPWftjTD2aQiv6LJNiYTeURzbPYTn9DZdUibBEtg17jmYbBd6ovZpott1vAJXTLrdUJ7tRUBDCrjNn",
  "key31": "4fGi2Ac1mXzHzNtM7YPpRmYVWt78sTPrudY8QLkJjzP5hLew48jYYYmHoqQt9h4BKAnxGYHYGmPD1VaQY39F3aJA",
  "key32": "ZNCFJDX2Lt9Pa8z3TmH3MmYwGmSbiWJ5FvTwiFoc5tvzVyMn4F9TveLr321gvLwJq8EbpRePAGVUJouUKGYHup8",
  "key33": "5h2ofvh7mCup5w3oKeR22BEYLoeRNJDQmBzbKPfYy4KrJG2KUfnnSZ11hqiDSgA6MwEhZbrrRErBVtwqXU5QTBWa",
  "key34": "31an2YYtjvnNVBN98EdXkL6UJDkueWVW95PVwkX7n1HDrw3u7Xpd8ZNvcDdPDfryqUNFmAyPjJeBF4kRCr7bH8v6",
  "key35": "45ndG2F6A1iP3jYGRPxTFoM9bKDKwnVoSUAmJyZeQ2HzQxpsj5cejhnLJihFEtDNXXpk9aA1QVZ8j17HyYJHQXVf",
  "key36": "5M72ZyVFxzkiQiPLX7koi4k7zzWTZubNpuoCdojoWNQ9tDRhNa4dPnK7KBZuwcC77qiCEobEXY6QG8GVoCdX8Bk4",
  "key37": "3v4ueiFWZB38Fo5wXfR6jfMZ9hRcjfZor2AnbmXtuSk4Egia3C2Gj11H6MQpNhb5HHHtFR6m4pPQNWaevkam9MXQ",
  "key38": "BzGnHN5z3z2x4rya6T8QqKKoSp3ciAgCGvNiAiAkSZ6UQoDMbUAtZxX2e5DPCK2GDJbsA6NrotUf1iVaH3Vvzc5",
  "key39": "5NKczXrzwwz6C3TyXq2uS6B8KzypXvMkZqfudd5J1QaDi91K53mFvKLzAv3nWdj15Nv37cTsPENMBLsWjB89N8c7",
  "key40": "5cRhvgSitK94pyjm4BWgMfy9yz2GDgk2eCoGZUtZyZZdfRwcshTUJqUNrEizSKejRy3scSMNcTNoHLT6xQaj64Gn",
  "key41": "3mupnKtGUnC6kriF7Af5mX67F5VWN4755Pr5tsuxc6eFRULgB4ynuWx7ZpnjnQctRuf2zpuFr7qidG6UXorSeR9C",
  "key42": "5BAksQQ53exYxuzTovm7TKT9rGZe2xQkvZ5jZyX8bCQsTBLmtQWkr8zq6752iJP8oZomkxWe5SxsNhpHsijqf5iF",
  "key43": "26PWtsq2z6YDQaxeTaEMs2EbULxVuFDbB62hCnh6TSNR2YPW291tiRnuhYU2S83DNHV7caawBe5LKbccNYRngkvC",
  "key44": "27i7cuNqyw6SUqvKBJnfFCvgZ6SenjFwA5wM1CbvwU2LzWWsRvKSZoCWFDtx9WCUMW8qhsvbgdU9aazXh5GWjGA1"
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
