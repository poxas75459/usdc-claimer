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
    "4SKEEG1EcqYdXEdW3YZTVW8ngwcVzscv7TojDYXVZ9CzyQWkfkW8oWYna5cf5GgqwkHoJfx72REZsXFFvH6d111K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MLfCuCsWcQDApBurRx9KjoMLhJL9Emjxv7xnFgVQYhoPZgu67o21wQdXLNeW5JRgLBcBju8FowBwim4e61f2rrh",
  "key1": "64LRv5o7a9359Huk2UUp8cMHMW7xTZutuPXGyZVHFpwNKGPfadx3g6jhbXRfHBQLbtsJxQzCXsBf2QDe5wnv1XK4",
  "key2": "5vjNjhQhqJydVyRxjxyuY43RXAonPa6QHSLE7A2ZrFgsuHMZBpPMCDpdVZ2DWachHc2dRuiZgby6vcaqKaKKx8Dn",
  "key3": "hAPRH3LwBYeRhp5siUtVvnY4ShDEn16PNT1trW4Lpozw2jy5ScbimJ9xCL6CWudvCt1yzsm17F2fihCeqTMMpxJ",
  "key4": "JR7c4S5TT68ocLhN147Qgvyfvk5TenD7GKGgjoac4pCpjCASr5TqTcB7kddEC8JF3ndJGr4Mjnyowyfck5Q9g5v",
  "key5": "KYcgXMKmoJMeohramfwfWb21i9qE6qbXddpq9zW2ZbaneW7KXrm7iWtpuS5UtbwWz9BMhrNYfNpiqPBc72K3a7M",
  "key6": "4oqrKiP2CKPpJiCKNWjd9QKbTW3zexcEDiYS64tEsUaeWhcGwDfhuwgL5x8qkWhPZCf1pV7BR4uvSW7TaNyxtw4R",
  "key7": "4VXSedKtG2MzxpN4dK8Fsn4ZwU17d5J2rGYcvZA5CSjxAkkCyUbyqCGbwNgE1iKyXdKihCak2jgeyZZmu4yTAau9",
  "key8": "5cjXQoDKDbY6eARUv6wJSkvFLqEJ8eGgpAq2J3W7aSoPr55aneCnovVPvRmtKBuNowYirFbsxxi3GQJHRkR9Jkmw",
  "key9": "5LaDPzCtKDpG8KBhxAn41mYHwkUL3LLqJdsmvFwffBzPxhWrWtBZZFeHgbkoj4ZqtDhPSn4qAd2ZgCpseUL3aAY",
  "key10": "5FtX9Euf4Sbpar6YY1r7o4EiGDyi7T3S5e2CawCntAMcCTwx5G6zSUMPk5RxBgLTqoE41JwfHxQg49kGQVce89JV",
  "key11": "nfRbR1Hz5b7Vr5dqnU8MkGQmNzZdA8RkMs8om9KTipRszHLTeVTdfvMnkYUnfJpCAyQLSB9iJUqfxjQwhAcCpqb",
  "key12": "43ARNLs9aHY5zWbP3rVxv1MWHGA4zryQoNXiQwP2FnfcDV2y18NuMuPcc5ED4v799UNHiVBdwY75j65mcq3sMSFL",
  "key13": "5hs51VLzeRbNAFZ2eJC4UDGLxx798asBM2YPket2Z9zQnHFzxKWsTxEYnxBEb6PtnABQ7EpAMhNNgTkPXz21QTkK",
  "key14": "w6yTRfEvDEF3gNv4hCUxorFR33GHCQ3bJKWVeY5fFRPnFPqJw8sQn1PQD28aRkffsQqip3dYBnMemKoYmfrwCFG",
  "key15": "aJvZe5eNDREh6tTcDY3aY9vX7JK9FaqefSdhHR9zHduT6z3LbTZ3unj7yKkdvdDj9QwEw8CxprsvSMbJFi5uYQs",
  "key16": "2PmRfN1s62jeu8cGonP2FD4QHxY2q8VkSi5UcjT1zzDZiT7r4Gfg5KifD7AxYkNiPN2WDJUE4pBMqhoj43St4Rt8",
  "key17": "3T1Wqkssb2PWWrmnGgCuUGZF1NampCNjAn1eQxpNgfDWABdVvFKwf8Cs1rQPeRQSeWtgtTS1youL2tLYqtwn2rdx",
  "key18": "QJoVYvbjiVQceiPauuFiwPWGmsrxXiiS8PtT3FsJG3T8RkBReBXJTCwibnKgUa8Mkt1CueWU3knyggTWEWhXmfC",
  "key19": "4o4SzWVAKyDzmnyLM9L9kpbfMY5sAcHeBV3WQiZ4VsMsEr2h1paE5etrQEY3zSDvZf72TWVeueZMe4FvLrb2zaP1",
  "key20": "228sFpSYuFcUcpcCbf6tK7BfF5hgW2VsVakkxawHTJcX7SbQ9v4Tjr8q5N6jenGZeYygCqabTmSPBsBFsDBHiQng",
  "key21": "zCcNxga9zuYrFcCwsvRbVETVsELfyvUVZFf6EyZvHvVG2nNpLujbg9MkwXBSfJhDaSyivDm1Eq6Wr1TbDzLx14q",
  "key22": "3A87pe78K3RM5vaUxtAzm7kAzpSkMpvyJndy5pt1o2K5sWwrvpm1HPAYsiutaD86dUGqqD6Mceg84p2Ze9uDmtEJ",
  "key23": "4ox1dYB5Yj6fgaBzswH6vis7wPZ2sJbJoM4pXied3Gi9TCkc6A6QpX6gozu2UoqLPqvKrPy386HqURDcJis629MT",
  "key24": "5BVNZtUXRjp9nT59b17huRvzdrv4jWnxWNwUPSJfkJCDmoUVJuDbVWgZ6PHXWBuU2HhQbU58RS91dALzcEAyG4XJ",
  "key25": "66dGDQCn29SzpU4V8YMi72pWVvyWCPD7ghrnfqZaLvVT8oRdXRinfigpACcPw8Jy4qwnV5Z7rv3iyCN7ybuy2rWw",
  "key26": "3JFR6grrkTwbunZJN3vX4WH53zjEVoBd4BA95b72zqVfJWiPKRFpd5zbQrt5Mf9XyDDx4pAGQdzQ52SH5wL6ePMf",
  "key27": "DTkT94xiLPYCJJJqD5fPUKkEiuLyQpSiPqwovFXknLdbDZ6cTMCQ8FWkiXKyrhG7f8EbZ6BkTF7V7mszeb5Z82W",
  "key28": "4V9UVFuBK9s6TRVdvnnNnu56LFEo5L6D2xwJBG4Asou41yqDGiZTD4Q8iegghAVqAZhsi3XwzbKUaH5FbYXgVFwh",
  "key29": "fNDU2XytsXtFHz7iYwjhZRNRXwF2i7zTqNNBbsnuibeb27B8ig5EXihF812YUdJwBqAgVx944uUeE6Rp4RDDLFU",
  "key30": "7zyHU1t8d6hyDK1nbLoz3shfofgjFQmtccX4yihctfGeZwEpbcoiBXQbEmSVCNqfSRjcdJ9vWYxT4p8h1xfbbB1",
  "key31": "2g9iwxHmBXXA9mw3EChHDvNaA5ifVC2qEwqUmLAMgyPwGnmMvqQb6pX3huAfgYR6DDHbsj871iNifEtwADt8XWuN",
  "key32": "fBqooCZPBLyiHnxa7xaZ5AhbrVtc2pSavLFBm2whgnmyvCwJb5y4UfD2PPPrKYotVTtoEZ96PW7f8zoTQ8HUKUU",
  "key33": "5SxnneubTv5jEHBkG9r4vvDc47AkAdyxBTcEK4Grtg4WPuEpKFXgX2Qv5X7HvDw7kLRKx1JXJzWLQeHMT2pcyiTL",
  "key34": "293fc9PyseNfog3fmWuYUsUG75N9qu8F7iQzfEYDk8La2PUThpsJmGKZrQiE6vWfFCmy848qTs3WzGW9sYuhYLEe",
  "key35": "55zuufXp43FBDCQourHM18b9UsyBPeK37HSpyUCbTv2oCXzHdjAvFvY4YXD5HzHiUupd7o7V6qAaT1tLByoUsx5K",
  "key36": "3AcQa36xV1E5iXkubXavLVkipqhQ9HLdYERBDyo4ikSZkcvbS4cr1rM79aVqfiUWUdiRsa8WL23CKotBgmWoPNGq",
  "key37": "3VYDuBYN8NmyFTBSBizyzRTian1cya4vss95N3Pw9YxhuQcLjAG8hVt884MXZw9SX2KjBsdou25RJe7xwpthHb5y",
  "key38": "JXWdY4FP6LZYCx8kBTCeBndf44rE8Ta3ZBuhWGgFkiV6owGD61bwrQFRXhraVdZRdjVkYQDGrnMjT52AFkZ5SCU",
  "key39": "4yd38PawmPSo2GVQRRY4REhYnzUymEkFbEvwd4hxKJ5JxdbkkDv6ECH7tKjraH9KTjPq7bccEK5Y4qMxgtyqKjiy",
  "key40": "5gDsfDEthMJeksr94AX1Cm2894aHr518ePMefo6UwrpDjPqMUjJcr56yNgYY3vx558Cj22xk331sZowr4QCSNrGT",
  "key41": "2CXHpHCu2KYRrZQAX1Eko4dx1LdcMVqvZegVhEtq6NTB3ipha2NrgZqk2Dxaf43jYWhZbUQLcKdQyoMfW6VrbPZ4",
  "key42": "3EeskM8wwXXFCPNhnAozc3Tz2dxvsLKH2CGjsp7zJqCqBQJfMAdhZJibsrKAu7vUBWDT2optDZ3mF9tVNJxYGMXa",
  "key43": "3BwFYcLtSWL4D2aFmq3YbfsE8DvoeikkeyhHEUu8G4i4awfCj9PoZ7C1FAbyVDNe3Nm9pxpGiiSvBuGenFsPUd3",
  "key44": "3Z5iLNrd8GcfUckUtx9fonvKdHuzJMXNLJ2gSzyZDmJQPUPryvUknWkFYYTFGECLkhQY3a2w2WXEtuSwC7wbZiEM",
  "key45": "LQFPPrpsGYtqg6p3X18X2GNXWkpcEtN3xZuW9STA8CSNA4S4RTzQVzHf53fHmw5TYaPsEDegzEdwkAnWWTxjwnq",
  "key46": "2yMBqrY1sQEWbUKheHfnmFgRoLFXXoW65UpqA2C8Efrfhe9ToizeJCvqphPW6z3UX6bC3tmzvZ6qz7UzB4HsxitB"
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
