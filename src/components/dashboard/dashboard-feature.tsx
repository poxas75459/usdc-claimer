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
    "5oKt535kvhxmcrWPbixMjhdXaga7h5WLgnGJ4LhQbfpCdZkcSTcMe4cCzPG2TWvX4ojgprWeKeQ4dxsp174fXr6q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RChZjiFxPv8fmUGQ7EyrNaJ2rrnSUmFPQ3TwRKsSLsiNrhbTqdPvRS6J7z1a3CaEeCgLVLTHvN1vAdxqsa3Tuec",
  "key1": "4NwwCNmsJsc7GNPM3yJGb7jpp3BCmBytXSWMnx41S3L83gU5V5jpbTM1s89popEJzFM1NCUxucWcKQnLCqwca6CL",
  "key2": "isqx5RtXVgQDaP8WuUePMDY4yXdtFbkbFMoZFqYat8PXSmuq12ZUiejw9c7t93s7cxsZbqQNEAAHTjYuXtxaVFA",
  "key3": "2g55visiZwoXD4y3TjiVyeS1R9Jk8KN6YrbkpzrbrKNaKSvu5FA2ryMnFadFUwkmteiAj7KcxoJbFFGwzpetSf7k",
  "key4": "3b76AUfdu55tMXu1ZinLkjwh6eaUjPBzjmSo7vgx2zMDYKS3MCDWeoUKkMSP2Rsw5THLhxMUz9URRMEJYFXbRw7B",
  "key5": "3L2N3czpjzow5TGdkEU6ruuhxrNd5qEa3Cyka8x3xPziFEFCZ9ysQmUwmXitkLA8AyxUXwaoyRsggTWYgAZW7ihc",
  "key6": "4xghptK5FBYqqAeEA21LpWFFdETE7nXFdFz5uKMZtfhFLHzGBXtW6ei1efXiFgrFMywAYSaCrAuF8KDoM1YTNVzo",
  "key7": "2SdhzCSyGXD54JTazMQxYMPE9CkH25oWXTQAkYuw55wuf8s4GPofWturx7M1c7xuGqwjkubN8bdxcqhNUrYT3X5i",
  "key8": "BX38xAfZ7821mpZfMFqHxUGrcGrGCifGuxVYoAz7N5Lc3JGWCp14Wq1bJhL7f9wvc1P8CC1miAm4cJaqJVeBbKB",
  "key9": "3cnx7fefevFNFY1pLvs4tpnWu4Mbmc3S2KHoUeA1E71uNFXjw5BbZqKeB982ZSuQN3Fkhhb8Uk9f2Cp99zVsjhB1",
  "key10": "4KCRHxYSo5wj26W3ykq1KTkJ3QgQkwsZ31AqiJ7ye6WSUWJYMUwNBzxLSs8LVuRMKAbH6VgVx4R8efbXJpgqPySh",
  "key11": "3k9mDoyobkPeektESNGXSycxrjVLTaH4NynRZHKbfbVEJnZYJwraMnPz7Grx3tzdHkuSryqa7z1hhVrUAVk1MYbn",
  "key12": "3jmD34x5cQp8Dju191mTtNJVTK7RUkP1TDzEyuTRH3zx5c4d2bGHUYi5CPeXNfB8ogU7fj3J3bG2bZuRaGV6n62Q",
  "key13": "5xtyQ4x5GTTuPTduc8q7PMuGZTGb52YMEpNUwKZzQz6Q3xprCUYQ5a3b14JMsifXEQVmYmANvJ1X8B7mT216Zgr5",
  "key14": "3qM8adCsBYS4kXnJidrYNFkjUcDAmF66TTEM5Ywck3mDZXerstgZYcqEVyyJN79YJQQkTkGyzm2Q7DDnshCkQvAv",
  "key15": "qfBSm2Y7cDjm8a1RW5r3USXXhxPK1gyVSaUgPh3bhtMiEajvSaYashL2bcdkfEXsuX7pGnb4N2MFA3XyYFLQCrt",
  "key16": "3BUmv6fwoqSAqWds1JU8XXfF8tnB6auGyA2iY83A64E2YjtX4yNv4FcPzKBayepnU4Zp8xit6WfvEJaK2n1hEBJT",
  "key17": "4Phc9fcTAwGFaMKhnnsST3SbyMgMmmvE1AFYb4xPGWfj9ZWM3ErY5Ld95B7WhTPuoiUv2vGXB6d5c91NL9PRBerc",
  "key18": "2SxCPkK9zbWkTer5tvGcwHuPmVYjE56Sth5XzLYDavLJsZKLNSaC9dCC98jaYo6BHixcTtCRrVahkUNkB7snBqqv",
  "key19": "51c1KeckQsdFLrTMUjFQ85y6uqKT7vdFNdYGm5P61ouk2cz37j3rGfJrkNMMdvsSZWoSJYtnLwZQutwY9AK5NEFt",
  "key20": "2hhkmnnrtmr5smK7yBdBq6z3pgcWRCiAmLVZD5aYLn9UA9AuKtj2VtqPSfCUgmGCsm9mySv4rrQuBUUQKUZxG5ra",
  "key21": "2Csu6PM18PesLVr8K1aqStjXU72Rdz3bEod4FL6D2y4zGsRMoYATJB1u5uafF4vt37yvkJpo1vqGZGsEssEHBCjH",
  "key22": "atEghoi4LMcwgnVCBK7iJGH48s6JrapdoZZMcQFwU4y6VqFtvgQbCM3WAyusHcJDcKaGDR391txBkSWm94HjaAV",
  "key23": "63coUtxoGqzVLj2kqThrWqVzfuZ9JX6gWUi6i58Niq4DSBXRxpgPStvb1FupGjjUsmGPStSTsfsPGQtMJ1xQCtzF",
  "key24": "38cULH6aoiDy7VpSDrPQVZW63xyUpusKzAZbs3am33NXk9bXJ8bug3dSyV45cDxKm36j8khyigvmX9aHjdq1Cbfv",
  "key25": "2woKENiTsz2LohDAtZkMPwC5EZnyWKLGQygLCzsiR3XV96toWb87tgxpyY5y6CotJi3eiABxKyPi6wqxkvyHqZHb",
  "key26": "5xMMWSsmxhE1Zn6LG3Wig6Hja3tBBWQvChLrnFX32f1taMr3VZEBboFYptbWBxnTozyoU6ta9tQ46ghTvWyL2iRA",
  "key27": "5k25WT77tfCbi3WesZ9pTYPaSXSwtPycHeE8Z648ix8msq9AYmhsHhToezCZf4TjCjjxviKqoe3N5Lbuz6UADwu",
  "key28": "21FSQzSA9BcTGUQXwLjSDShhxX4fok6mz5jTFdBcNQ34CFvvzrEbc7rgV8RWa5DPjtcLjuqWQ1xUPWB9KYaoZoWk",
  "key29": "58zpeCUtYicWHpSgRZXKXqdxpUvHgLLPXLdyQ2ohVoSnNVDznGQ6b6avaq7rmG5RMGkfJcusCFmhK6ooEe9u1NET",
  "key30": "3UreSqGvaVcKu772jrpwTr1sQkfW5qDiuy1XTPnhY6DrwTN7KA7KWjudAh6KmfDv5MqzU9CY4S7Yc43cLWaEB11Z",
  "key31": "2pu6gWsDi4EUbnBvbhHRr7sxDJxXE2EKDgK8G1oSHDNdBfzuHUpAfA9tHXKg8whhYWSPXk9DMeB9xzbzRNrw1xMc",
  "key32": "3X64ytMgw7XSWJpNZRXFPZqYvKxsLqrspDYT5GtqTfRZJ5a19Qa9uccnsuduHV8PJYVZ1nc9rFytjiHDqvwRPPvc",
  "key33": "FagTif6RjbQQmfQ9ZJ4xmmNjAig77z1K82caFadL4nWwBe9quh4WhT9CynxfCr7b2VWQU7wUDDmaQC7RTFwcohp",
  "key34": "2Ju76y7upf6rDgY22M1YAjD9XEtfURYzEN9R472bUXFJiQfkq9s7JeZ7JUX8SRNZ24yqjknGFQPzYqM4DzS4ZsTW",
  "key35": "4wRKjDxgnGCVcRtATMARCavEdcG1yfPqjMPn5PYMdNX52L5bVMWM1PFAv9SW5SmHrkvyorm7pEYKYMBkgQ8VA53n",
  "key36": "469T26JYrpxUTAHdVkZ7yp9J5FhKq3CX67xRz3j9YKJpyjMTjt5ZjS3aDQRquCih1F91KBfhn1ZD25Pr875GJVHJ",
  "key37": "65pU7Gp811hQjxBwvK9NbaxAwVNm67gB3oiWZ63XsQmeFSvw2eP7tcMhdiUFJ5qHGSo7ktzVnTJZGy12qAvGPyvK",
  "key38": "LAMmQPUcAp96twRETBULD8WUiXPKJjJL54cT2f2k1YeFD4935TngXr8urdATJUkWy6ivbkgZt5N99GDQ1eyxgs1",
  "key39": "4UTj7Xr4dutoUKEX7LSX5DLiYyo4i9QcY13S46baLPSPfPgnCPfgV2bYoxBsMN3dMdFMDtiTDXCABMC1hhq5Jejt",
  "key40": "2km5azZ1hZe2wBHjSiXv39Czh92KRXfs2WNCy33WiMDoaVckLm7eZYntusBCQ1LA1gfBQThxvGwCuSuQFJ15Z1tS",
  "key41": "4pgaamGPAjc5yLKY3mwVmb3Er5hhQNuzFtQvPErCQgGQMG6Yd3BLtigM5DGZRmcpyieAbrpzPgFWPzF68RjvLLfZ",
  "key42": "5MGmbtZHASmXoC8ZVtY1pvemVcgYTqKzWHBvm5FpZ5wDXmnEdyTtzd9xKN2vwggMRxRr9cZ6p55kstFknPZCLR5H",
  "key43": "3EiDQ2LQ2Nd1jEqAe8Q2m3kbjdB9XPgC7EWpKYgHJBgr6F5CZnM31qdA7PSBTVopwPhXMLS6AG4Xb4hTYC4zzjJz",
  "key44": "5s295CdVF4Ap7zB97PE7UJhxTfdpPgPXiJAF6mcWkXgHib6qhBYyb3TyxG1ESt56bq2Jpipxj8UAxWm7x1ZJab4j",
  "key45": "2FjWB4zH5za8hBfUKXiwdrgmizSvvHF6UH2e4AUmtLF31aNvkz5vZKe2v9eoJDM3yQ6n5ny2HFWcJnKauhkXv4bz"
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
