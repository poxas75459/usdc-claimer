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
    "mF5c5Uaf3gJEPpbkqpHBjKuG9DxGqas1SguKgwbF43wgqyRVkPNDtG1pzr5VEEbRwXcXWqHzVUgX5Taekk6EmHP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36kWt8nx4W4jm3rMmPKGbKNbg6bNGYybj5R24ttZtks74j2atZUMnbWBKjHNYnUswkh7pDrbqooiSBpBxgVXsNaY",
  "key1": "yT7rqo9hJdxgjriZe2E4819Ncs7FmVvEn3GzRRgQfH497QMBYP8jrpdMuoL5LEFveKpUmPtdPWbZdGWTmhdn24g",
  "key2": "41h8QXiSPcGkrGC76DqWejPsH2SVtVA2NJjiCZpUTqrBmryEtw3c7Hq7WDS8Sw5JWxfNvW4oUyQiFLRACekhuYu4",
  "key3": "4YAqE6itkHNRdtGzSASCPRVSYc5AenLt38va1oioj5GrctYUo77efw7tW6Ui5niPwUszRopyqPxeMKCUhaaUfNf4",
  "key4": "5iAbhgmYePbn2aEDibjPKCxrseCge2kuehq25eDonHGCqMUf2FQjwnqpr27WSQh9qkTgqd9nHMcwi7LjLtxb6KJL",
  "key5": "5HBV6zAo84nuZ1V44ubpM2Hu3S31FEycxNMhjPTXSdmTKZuUSMbvcCzoe8YKLvHm2mvksXpsRE5TrQQgTYuBAsnq",
  "key6": "4ZgG84UwfZckH2JpRRVPAvo4DNh9bRfY9JoozAkkTAf5haQEasRM8qSDEFVUnoXhXV4TzoJji8or7JhjL8fCwZxK",
  "key7": "43dWPyrahn7zK9L2k4Lwaa3j9ATUgySjUyTLNA54nXaUbw1Hr2r3P8aRbSonQRUPEvtmM7LH2oLo6NqiWDksitEk",
  "key8": "2pQS8RGDP526kr66BHQyQC8FD1DzcENbmJbEGzXZWnpopybJEGo2X1wVAaVUM6X5NbAb3BLpJwASxUcfBCV8wxdi",
  "key9": "4YC5isohJQQKYryFCPc4pUrNHKQbjrHaTSRFRc9Z8LKDY7dRmtz6MDdU816TuRuL8ZyW3dZW9QxeWUconi6PobjC",
  "key10": "4RQX7HCqMVGqqy8tpgwG9FRTBQ6TweaQ4N916VsibLjzm2VYrY4Dj5cGxcTQpTaZVDcEJaE8n5BAKcXzcnN392XF",
  "key11": "21LcKBiG9PFeE19UmZaBiWvcQuEKDAaxCEBQ8J51VEv9LjfBXazKzvL4ZfSnQCY5TaJGCT7VEvhMoet5pkUMvBqw",
  "key12": "ruESQRWZ6XuC6gcH69axG4t12s2qprNFgr7utgmPwo3NaE6JAqBPYWhmSAvCC2BDss5T6XinZBZjFYWrWGzdZCT",
  "key13": "2qkPx4VxE7WWH3voKweD4dXRYaC2xdmkEGqa3uHxAS7ZUZ6c7ieowxFpzmVwpWejZnCWccKh9Z1iWYRrPsKozqJs",
  "key14": "41we8HxfprHzEGEJpmKnLLA59LGueKCJMJTnpxyV22whPNarV3v9kdCrPQh218UEBpG64RJbLVH7QDQCAwH4Vr65",
  "key15": "4jCTBJViUHSb6tur6EVF5U5HBT61QisjYFbbVj7rH4MoEhB84tPhxvenEQem4eGdCzgUnx3jv3SHSfiggx7X34r5",
  "key16": "VnbN2Vxnh5ywYEUb59odb4UNgU8W8W879cJnELbvrZToyEMKGMSSUXWnXYSZAEvnPw38VgThUsuFS4XRdvCTdab",
  "key17": "3YBY8Vdm6f5rqfQGTcUxYPyo1tWAunkVVB8uRiiuNAYd9wXX22VjXKKm3RU8tzkqHyLFLTjCc7PjX9mAd8jrbcwc",
  "key18": "35es6f7MQuhr7skNK4Joy76KxUo11H4fud5igDsYyAeni4DhXhpF1EobqbuVR1Qp6wf79Vf72P1Z9ve2sVkaTsra",
  "key19": "2FRzVy1v8G3FkWCJu4P3nax5nvK41cRkFzdVUyWGEG45XxNQhxmjYBebRMveoBDfS2xefdrYGJ4eJyRZdrVaZCNt",
  "key20": "47LcxfaguCQ2yMgL1A8EgQEaYia7HQLme5AoCekCtcTFCSaeiWENzT4vgQ3V6WnNjrsyK4zjoYc1YaXX2Uf51hEL",
  "key21": "2h963swA89dFk89MzrCXi5nqmvDSJi814RC9va3oM9MyzdwiV1MLAcMG3rnbFB3SneJxwo6rQmKWVrD91W4xCX5L",
  "key22": "LevMbUYG2ReqA3MH2NYASgc5EAB7BZq95VqzpNRkGXmr35DcjpyLvoj4gJX7SbiRWomgFgjsNpJaCsfo5QmYZnJ",
  "key23": "4PhVMnE37fnysunF79fsgQPDRngFty2cZdDfGPR2MRWamG7rE31DbuzL82zT6weDYedvxxFuxLKp8hicM78VXyV7",
  "key24": "5zANrQpnHB9kDm3YWsqATiDha18ufM5YsVccAV1q8XYvS8UbfJJYcfF5WBhAvwzmxDmL8NbuXzF8asnZBgcmidmw",
  "key25": "2avpMTtAioxc3Ydj4wc4wRmigrK2Gt6YSVYTinvEHYnCu6yzDy5TGgicgiCztYetsSREwZvnJfzwE3u7ATXVi62E",
  "key26": "3eSn1YUYVnMoFfTS848j7PPMkkakuVms9bqxUiPKA6R4ZAVCS2SPWCpmpy6Aodnnto4qPdiobzeySLy3p1Ub4NNA",
  "key27": "4Mk2eARxWBZ92bic8EFUYFwbhkFshanjyUVawECVvVidAoEFXpxGH3cDUtajHtkUQUe2AALWjeY2bFbhYamofGDi",
  "key28": "Cbm85GEdLnenJdwZCGcbBNPU9ZUACyxfAUx6VW1Deh727SJwQEJCUDA4tnqrAawsHTAsuHiafSQ6FtPhhJgiZnA",
  "key29": "4jx8T5oW6EAad9EY2KLgbo6Nb3racwEbzAkcorBaQHXAweHVcEMZJXuUr83dabg7asR5rSZGZeeeCD3PTfXo1uWo",
  "key30": "5tMfSy8LE5vysKE6grQ39vfBod2DovseCx7ExceTufjBW6FuxfJpQRjJMpKxGdukZUC34KaNiPSSYpQFG1MH5LJh",
  "key31": "3citsS3MPYsp3aKQR5g9eu31o4np18UeqRtKyuRQbydoqWGxBrW53ohMQ1CGnAjizARpNGLvkdCrguua2MPJFn4c",
  "key32": "vhLuuGboYrgCtMkKj6MomLGhdgY5DmP37aKoikkhMjE93A1U4Zi79ecPJNF1UHEGhC6g44ZddUrX94B3UVRCFT1",
  "key33": "2FEmrTqWCAAg9dNrnmyQwyrKt44QzaMPkhyP21Kg2FSixveZ8mHM6wi5ZQtUKz1hesfCdS2oJySDGESLWftKGLk4",
  "key34": "2bNjTUvQJBx1H7BJCMmwF6X43xZvghRs4F4cdAZoBSQ3gVoQVCiQr7BVca8ckr7jeMeZSyoBiTf1PYp1vbhMfYGR",
  "key35": "5NkDiY2FTAeSfDgjjN2hp7qdc4a9khXHADAV4EXqENPmzbpkn2SmQDSHut2S619uifoaGYSEqeuSeFu4FjzmMWCp",
  "key36": "nf4oz34qFLWzj96LCUfAQZYb8vwyf3G97UfoQMJh3ehuHgnVDXcakiJvF1fE65erRw2sWTfWfmtXEQCPPsW7CtT",
  "key37": "5mvn3GF7vEqVCLRnGjoh5Nxup3DEL28xRWDvMtVsa9PcVYXHHzMnffmxp1BYeYFGPbXosHgFVQh8HiGYVYDZUyQb",
  "key38": "35pGGkBBeEPG6y8GkwotR8mLxy3nWzcV2VyhKDrWPRp6gMsmRPEuNHgPsSUihE9RECNTvCXmN2Nr7yyMq86RRt9V",
  "key39": "5jkrJrE4aSJKF8edrMEeB8uPkrvr5mJBpU9KHQffgsSmXprdRqJdZPsJaEyjJ3fvD9Q835V5dHYyA9uoqgu6oEHS",
  "key40": "3CjPWSV8fnetMWikzdMrfAm12PqSfDr9ZWd7G3FX5Fq19XXZ8DWAB25hM1YzWMRk3qkyqk2nPn6gfYsV4fFS3MhH",
  "key41": "3Jv7PqC1uM55zE9hpjpg5ftUveNKksePTq3NwRv56eBWTGcvVFzdQ8iudxQC4zhw7q6oXRet6fwoxmKbqC86vCAY",
  "key42": "5WWHtkaTi6wCxP5r1oERgh2RW2J9trS7gTgzWxXhRFriaJj2ZGrDxCmQoC5E1kcdBG8jumtBymHNSnydBvY6VyvH",
  "key43": "2ycNb6rwq6EPPEwxXcmVTtsWd9oRzQjKeTSryDNbtKAFPM4xyBzEJwShWWQZorsANyzHFJXZdERFZctRGp8UTQCd",
  "key44": "33qWP2QMut8Letbumpp19XWHhgkKKZFGMQtvda7oma247N5Uw1KaLazVyGjcsU5XTvQ3e4XGpTj9uWzYDkvZtUcb",
  "key45": "59ey8NvADqCJnVku2G3WWwuyMevzRpbNBCGppaX9uB1zXsoqetrx7MHk8mYnt1eho6ebVYddwVk64fytUNh3PrbQ",
  "key46": "D2C2RvmpA3Th1hqByDDxaHFV8R6SsU6S1qujd6UNugur5YK2o4yeQrXbNR2ePvDm8TPDfdYCQJeFEHXsSZCUiPm"
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
