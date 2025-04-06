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
    "4BrsYrMVeyoieTyejmsCZDFSfh1iVMWHqbrmCKDsWu2rTYd425S2w5qUsJz5FmMiKvh61CLdHKgWvJDzotA5W1gu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CMNXckmjbCot1EiS4mYk8hcQTFjUhuN3zUpwf1BCka5WcWxcJ1QnYV4cVZyKQLyuDj3wPnPSz9L9hdAAjr8hUwd",
  "key1": "2BeH5QpUgEkxTNBDwdYinNxtpsi1jGV4aLTdATECeti1nXturMiKqH79bw57oKasK15RuGcf1f4REyjQffDyz2vd",
  "key2": "63tEBF1Mk5yWnBcxXVpNsSQBGhhJQHindDRHk4z6tyWLzhtZtgKDaipkpZ6LtgGwrSxi7cZKNXiBv8mAbX8S5cU4",
  "key3": "3zn1Zf2eX6x5FSp6uLzJGT6vShvj85CC5DB1SYicYEWacQF6QTsp7A9o6YovUEM4FsKfaFuCVu319C7r7Z1DiGbF",
  "key4": "nQj19XudEJ7YHHZPZanCmpVaPC57pMEBdZdC3RaM2YypEsv2JnkhLofBggyXmCczWBLVA53deunQ5K4eUfYGyt5",
  "key5": "35eWnXWh5BQfwuk4WhTFVonsGZgqtgLoTg19bs5QXfkBx5SFZdL76DMGeWp5Jgs8EDBTLdjbycWbC33rY4y5fcu6",
  "key6": "3y8asJJbJm22r9JeyzA7XazVCbyVUWH2C5nF57pYVPhEfAMktMB7p1BE8j2hE2JfoXu6kZAVaUjALANuaQRUdMAz",
  "key7": "5dPhEPAUDsv1NEySt4F8dKuCZh6zcaf5A1AokBXGe4cfT2CvmwvjNqbvdSbeoB2PdhFnMxGAYTFQ9u4QmddZQ9NX",
  "key8": "UuACpE23K7KnAWGhCapQ7QrLpX1UeDBNRNoTjqVBr73t3yRveUeTaocLV88DxxGbtrA4QixwUveTVntRq8vC4Jd",
  "key9": "3Hh4XEkg6ESN2fNRWcHstKfwuWNXCD3Bq3gUTAs6nCsvS8G8gG3Gon6oYnfxzsygMLtX8aaLq8pxFSwky3h4LFTz",
  "key10": "51qcYRsRf8trnKk6axpUCbXUuYbVt2zqHoPK8fYBMG3XxXY1pF9ty144BtyTybYTHfRvf9tEoqQniirN4GfcDPAB",
  "key11": "5AApKxU8F33V3Wgg7jJgqsDSHtUd5rTpz5RW1wfix6GkqkE6rbMdZhV5QUuDvScztuano41zt5ABc5pHk3HWS4E9",
  "key12": "4UM4c2NBLWW2vNKsYYXzRAwUsguL5fj1b27iAksQq3bbSQjhuBECzEdnGky1n4JsozqrUuAY4QPHe2ka3gtUsiH2",
  "key13": "4Hxwu3oCz4xvktE93qGPD87tygcKYayrhMG5qrWpob3EtUg5tim2y2mEzSkTtSE7xscNwo83BPbUhBuHw88vh9cB",
  "key14": "sbZdacuzqVc3kHDrTSNyxbPiP6bywHVKogyvNrqGNCC8oBpURf2AfxM1AUXJW262j4zXcndkMkCMBDCTCHHHqPN",
  "key15": "52uhCVeNHH7KwyfHHyWd1EMzscHJBp8xf7S1QLkt8wrsC8cmAho7RUdxWEVPKw6b38QbTVybJUGqCAsq8X2JxGFc",
  "key16": "41m7QZX9P8gb51nDoSMrqihLYKyxVTnEpAY6sxafswCafFbJ5CAREoHVchUpm2fVZGfnD2HaGmDqZZEr8KwyxtNq",
  "key17": "63kovo8wxA3rwfPTZ1X9wduNxcsbP9jB5TW8nGXaeSKSXyxTNr9GkCX4WBGXyVrxJ6DcdP1SrW6NC8NEQsDcxBD3",
  "key18": "4zKcsaZagx3VSARgXcpTi22uPph4bBddq9afdXJqgfXuBATHc3y14Yq1WB3f4jJXw2bA96EMCpNkfaLp6m4KAEbX",
  "key19": "3AuRkXY4ZRELDopC5VS8vBu82G6PQSRHuJeJ3GdAyYcurMPo2zFmQvp7oecVakYhcGUaKiTeJyWTQm9ZssmuKHVg",
  "key20": "4urto555kbh6MR3Uo4873zEoRGEeqdrFeXyyByyxez57EbbvoZNWQJSmgbCamkAEfCncjPDc9nkfU7xM9B8a3FAG",
  "key21": "5pTNNAgirA9FtEkpsBWJ9HbvMRgMJ33DwYkqP6vdrwDG5rvLvtqsi7qfZWnSbTDcm1RCwXfcwNKAK1j8QtSHcpsT",
  "key22": "4MZtrrLojh7STzH5RkL7QGoPMoo5Ld4nQaepki5syxTHXZhbYkhGz32C8rHocd8ceozZ1rQ7hyvYqgsF1BGCWSrY",
  "key23": "edgam2gr8twwoH1JNqWLGrua5CebPWM8UTvfnJDJxPogpUxt6q3nr5vq8Hj22uKaWti9uN8UwTq2Wa1JojCYNTS",
  "key24": "2xov6fp7ZMUjvxQgm1PwHgHcVajeeMMnXWdqw1ZSpdLFuFxgrnBCmn8JGACQ3sNevjJpymhV2UdKmfauA9ohaUiM",
  "key25": "EHdYa8WX3QYFW2QG1c2pRe9qAMzeyW5HnVK3vZkeQuB79vhwPHejnpHiJ3jT4XKk1PbrYohac49mqNop69NwNEK",
  "key26": "129j3py5zVeesAiRn6MjkCTFCHqhK84CasDhHbutjSDhmUF7BGSUHLrmg9mHRXkL533hjcbF2SHCw3HKC9dVTLT2",
  "key27": "3k3ySexFP86eVEa3QFiM5BiP1qAW7B2m7jzkggnyoxWCUwBWNvYYWMa8xYkWy3LGd8afPxybcYNPYs6BQiGAojzK",
  "key28": "2KV3MHR1QsCYmCCRXRf4Yh7djowwnzLenEdC8WVgkXg12k5unU7ShRJBrauyMLccoRJ2dNWDgQXM9d8zvMBAccmf",
  "key29": "4CbFrkrKqoAU5bXStyjToZegkZnFwF6BnaANFqWJMDdEdJucsN8JNXKKvkQbUW9ypsp7ef57cWyXDWL2UpFHwh2L",
  "key30": "KkFK7UMvTJcpAviJbgkNqHxKGAeRc4exE8h74mzC1r94aRcL6aX8iQuLTJic3QXstFkHp2TkLT3muTX2tQFHwUf",
  "key31": "5Jrt77cHLmbkDmvN6sQkrtY6dP8EbbjumkrW6b2UDNFHCva2d1txiR6eRVwcu2p5WmaBmPV4wqHnPcFi4FqviqHP",
  "key32": "3q3YdVDRrjdMhRxF9vYevMC4ixUqfpgcuVRW7qnPZ1pPbkDJsS1DFLVU44RF5XKe7eSNC5rHyNiPBanZJP4VkA6r",
  "key33": "HbGzhrFWB6UjgepLmEm4ZQ88MNfwodQbjSMhiYyxEaCYHWPni7NjrKUpkcp2qBZE3zhZgnS7NAS6bgdXoyNfkSr",
  "key34": "n275Q3eyDzoCePBv46za1gSYSuPTQ7wQGkP42ESKapNEavSKqXcjzppuW3Xj2SyqnYi5ihCoPrBJsnuVAdnegs9",
  "key35": "2P6aCzJy7ivzsbE5NBW27CX59QWMfxRPKiye1aAE3CcoxKjb958bNzaRc1gmxfK3TKTegMp1nbsgsan1mdF5RiNL",
  "key36": "25Lbp57EPg1k8B2P7SDis9ELzGLmjWJKxh8bMhzMEhkH45Cs1wnySvHTY3fU5ggHaHoYQtE8iEdM3fPjrJ2Lb2fR",
  "key37": "5QSvqanS7zsDDT3vxg2hiPgaPvHNyJ7VF33UdUJstes4x5SnR1aShU9HAgZeaY6PptW4et8uaMe5tDRs4ui9A5B1",
  "key38": "8aiTKa4jxzEQnKtxD9ouX8axiBnBo7zdzvkWBNjXvzTYxAJNK6Bz2zFrGrELFE5K635v4YK8esVeAuJLjrfb17Q",
  "key39": "mdFTbJ4KWHEJ7wf5hgsCDErNDSGN2hv5RxAA8xxrxt6ihsCrFxSMYjjYTmzvumFHw3cZrusgyascDrcMYX39WqC",
  "key40": "dK58v4FRBdrT85HeJ7Hdm2hU9cCo1aWF9Hhg55CMXuwpNGjALdemBpQLzYzzNH8rrHumYv2Dq7SYjUATQNFBCWY",
  "key41": "36SBGkaKpc2eFg2XuPgirseXCi1q6UHd5oe2gXkbUZJNyRwjcpttVf291ncDoGYLA2w9h3gPqVFeUfniR2k3rnaF",
  "key42": "3XTgdQKcWX3zcLUfNRDFd8fF4qn3k92magozhzeC81vBCqNXixHYzUbMTiddjFRyyYZSD8RKUFG3S5qDGnKNWrH5"
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
