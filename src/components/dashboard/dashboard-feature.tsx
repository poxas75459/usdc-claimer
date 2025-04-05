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
    "g4z9GoyruqirGh5ixhY2cyehmisneqdvpXFmat26JNdQDuguMrSw58bJCp13qbPNU2T4fiYTpgMDgmpdWY4zUek"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45fX9eZiNXT1SMSgpx7nJumnsTRoSAnydEsVdFZZMedwT8by866ivomPgfZWeiRwGiVLFnXEHYkf1rg81secbHD7",
  "key1": "38Mk1sEwBPeqsDVgYH1oXYiDCAd4yjZ2n7sb9NwR8qsCLah9aq8T8dzznRiGUuzdS6NYdmAepHqrwiLc2gxCd7dP",
  "key2": "2CjFPUbBNnYZaWp8zUh8x7dfjM4esJSpp4CVm8vNKLeHPAAMRPybm68P5zGPmJDWn4QHDRVrH73iLHPdZWGQPpij",
  "key3": "2bbPy6ioL3N2qArSAkMtAo9k2KUiyVsPtVK3g1pzMGwQrPcaqdU4ndrN8pFLvtJfACQuLdaWebM6MMKqAVBWXjzz",
  "key4": "4JFy7hUddbA7S4Ym26ewZmm2YV65v2GyekJ8FQwhT5P9W23KCNsZtDftghUBsaaPnueFLgqA6UJggHhGmn5abokP",
  "key5": "JRB6A4bxMgAmLXpYcASeSPVJ1dQgER7sBGCS65JQpmf3A65AHNBSJ3DMC6Jsvy2uyGFx9DKLeT5ZzL8BT8X7fb6",
  "key6": "gJV3kie6TtA3CNJw3rUuF9peEjifF8tAU4u9aL8r1hv3LMYpNQ8dr6C2yr5mvudmxsW9VvSLCmh3NdJfgXw5fB5",
  "key7": "sWESygnStVVjJRmTBcNMECV1dSCACMqD4s2gStQKK1GmriEcEk9NYzqVXnh9Wkp3dAQ9WpzvHY49GCrAyiq968t",
  "key8": "3bScwN8VBcBNdcPMWqNB9sgceCyRYtmxRM8aeenvc3zkX3s2CATmxuCi2UP7wjnAz8Hdmo7dbhMtZ47f5nBm8GsH",
  "key9": "35tR6ShVaPoMA99DKXjPTYce2x1GYsqxc5j8WMSWfqh2wzgTV8N8V8A61bfw19m3NnPwRjQnZ3aJRSxZoBsbr6x1",
  "key10": "67KfJdyCsMKPmBne5sfRXvizk9d4WcchTza4EXccfuH74yiS33AdyhUQndCzthPBbgiTEveEmAR2j9b28gpJeU2Y",
  "key11": "KNFjtSpzUFYf6bSajLYKJKhMUmcgF7KEHJXXDwuQKCMXCRGXEwjiJHSDtvpq6LCwpmcuNx5h3ryuQtSiTHixucV",
  "key12": "4qC3NjmBZoPeyswc8ztnvxmDPYaAWojxgKbidNaXYQcGZ7Luf5Xm5Q4QwvLsCYMx58C7VWMEBnPRGVcpZ9FVcP6h",
  "key13": "3KMc897FcWJmHJwEa6kL8KZkNnckFoCam2iznbW9rqgWtw1nEeevDfp2k99GWdKTRKFF2YgxELRXwpDbopLUYe9D",
  "key14": "66T8QV3XkpqMrDZgmEbh3h5qCF2YnvDFjDenpERSYZ9a41WPzvrCQkay1YGqFFsShzSoTqYVm2jE576XwwffngEj",
  "key15": "2BGJHsUZ3STk3v4Tgr2KSW5YAp9nG9cjPqWPs2SsxUqZ4NyLU5Kc6og5RYEQrjkfYarhUGcFFACJD4ZDeLC5tMxC",
  "key16": "qceseekDQdpAJJudsfwcK1yw6VeVq6exkxHdk7ZtEkkGm3LJxbVortSzKKuJdAS7jXijuWJtr8KUnCd2xZiY5L2",
  "key17": "9bXoifjczr2U3CE7zWLuAAUK6FgEagy1KxH4xe6xWC7zFR1tDHtwd5HTcniH56sGHJ3SrUmQJwwvUd4Y6zuecbV",
  "key18": "2gx1QvzPpURWXrgYMdd3RgW5oE7oKM7YTdaT7aysuQ8jQrQuFaxyaegTSKPHu55aCpCLqZQ87wvyUzXuKSK7FKR9",
  "key19": "5wshYeZCYqxUm7uCCEfio3GuGpesW35kF7fiBqPQh7MtdQms8zAq7KLc5GAR1YLLpHwPTTh6JvqcVTDbnKJ11V9T",
  "key20": "3DfJNJxKuSyr1c3Bg59GcfHLbjB6uZZtSNb37f4h6TWJA77TTeEEoo4B3Bxyk3c1osRpy58RCnLygwVC1x1eKUDs",
  "key21": "5jskb1S7xxe7g2Zpjqq8hW2NQd8wF3ryXa21nr24tKcenHUK7fiFpiNV7YVZVN6tEvcJR7DXtDKtBXkLRdWMSLcG",
  "key22": "qm8sssne7uctD2vzeksnVAVZia2oqr4SYzLxfESBjBa15FYSXmyj4nMAtELcdq7qgH6eAkTV6ZQPFAAZnXNgNNo",
  "key23": "3CkH7Hhyww41Hgr4cVfWzes2BxFZQ2UpZfEbwZMzFQfYPURyqvSNUx7smZ23BrrzkP9qQxpbhWhbQEDnFEse7gUH",
  "key24": "45GyAXkVYo41Q1mVnW3RnyHjPhB5FCSeUUYbB6pZeB7A76SetAQmoP1ZwYBtzeUvSGu2iDEnnQaZjCuaTWasJ3hN",
  "key25": "4ZszKrazeuYuF18Vuv9yiuLmNbiKuTNWWpXRshdSXvqPeBr53Nc9f9UuqMgvEWweUBDpCF8ecy6UWspBxTE1oHJ7",
  "key26": "3BdDXgUHT6TNNcpmVWiwiTadLpocGb1EKLX5rGvrqtUkPLnCtTx15ZqDjtPwYQF76gLU7KzLvtQDMgPqfCzrMZzE",
  "key27": "5EmUcDGqf9Qb6D86XzhLDrQjsDU1gWgMCRoVuqJPJbAXq3M7Yz1PjeboCBfaQ2zrugQWkDUgveCM7rs8igLXM5zu",
  "key28": "3ZpbTgDU42uKEpzbZPiMLnS76xPUv59oq8gq6nQgMjPHAHV69fZPnDyUAUsUJnLzzGCaB7ESpfe1fP3iN357pMgv",
  "key29": "2bV3d7UskoVM9eDWNADUyc5LsESBx467q8xzqc3WLJdy1uWYqwEftsWGP16RqCbb6oKXEV63KTjJAo3vTzCxczem",
  "key30": "5xmM4X4ofjCDmfNCkQady2HS98JUattQnQ2xQEwseTxzmHuFa9F9Ms3xURGVSBxRZQiwhQn6zBkghHU29zwCJcaP",
  "key31": "4Sdx8oCpPFBoeQQTvtxDE3bQNx3DiQtgVpFBuuPmBz5ieF46kuYqutxFfLReoj39etJi4wyFXevFAaxAJNHVrHjt",
  "key32": "Ru3LAMu7H1K6KqBvZ1btwSM626Mv1cKdPf4eN8SKbAfEyKMSv9Jso2iGDb2UDJBJsWdDu97YdpXSXcSr7dgoArC",
  "key33": "2mVPNG5oG2um12GTs22MRqbydyspdyo4Tu57C1n7PphSCUKxkKU9fr3ApBtnWTPgziW2zVxkp56y5zozpmLnRtnu",
  "key34": "2vkzP5eNUBXFDfxDEwzCy64HhqmLQ18Kr9DbU2GRJvYpd5XFejRbDrsGSa6yvw5NzggMR5e4eYDP76PVUrE4zAgA",
  "key35": "5y15URbLL8FJhbLsq47pWHxvTXZy3LHZRjB8bZso8WJFfTTp2fYPaGu7vbunPwwip1a1z9wPwXqmNDqsxzvrFoox",
  "key36": "2v2PT2BqFNAU4N6UwEpfcS3D5hEy8WaUesvuDRgySN238rSbGQ72wJFbRzKQzPe6aWuYMnrxcPfQ7e24sHYpS4n1",
  "key37": "5vDCps7dci2Pv4EEYRc8NFfbfftqfrJJcDt2SE9yY7aSd9yLVBpbLe83QaazPrSc8st8FcM5UY9d6D9guMjZg5Rm",
  "key38": "61kpP2eQeL4fNeHBzDy7mZSgGRnp8HF2Ehx2ZYMunjGtP9tzzVSW3mWNx4VjyAt86VzZrVRmvhbx1jFWvpRhMSy8",
  "key39": "3hsidMzqjuUWB7pQajXuMigkVXUb2JrFVF8Zy4EkDsGCGk8Wnu3anXnsuDmBYydLU8mo5mm5J4Np9qrvfZ5y979C",
  "key40": "3VjRzChWcb73WHWdbJ3PGEQbdJLbBeShiSzzPMuSa7YeMYe9P4xgJfnK5GVd2ecTQ7og1pvAaJh7YmC2kExwcoCv",
  "key41": "3gFK3nFWHsSSrnhiFgxuy7S5vw6jcwmFQ756zAibRS29xPe3WF9wcoPw8aSWC4Pz5BFq2yvivDq9Aiiw4EPLmUBt",
  "key42": "53qWcoZfwGKkAKXMUKeaNFr98CWeo1cEn4mgNiosFygrPkDurQSo44RuYu1zGM3vLi6XPK5jBWagLwqJi5KfxFX1",
  "key43": "3Jk1dhCEgvQpFZgYR3vftowUk2uTJZZxe8aexfKqggQap9TGEyh9qQbDzLdxgm4CaCyz7dDvDit6qQqpzJ8R3kYP",
  "key44": "4hbX2wjEosJreKN23UtP3Sjv78HiRBFtciCSdZAdWdj4ZLo8Uvuis2TtsAZULdL517akgofYQqmVtKpd5cAtPKgy",
  "key45": "Y21k2ZZwrP3JyHnKS1Ys2dUCt3uSPDJ52na63YW5REYMBTcEAKm2VzoWXjuYR4rp1npNdmoEhteYnRmJBiofCdm",
  "key46": "25oh6Z7yCc68qFHbB2ovnN5MAyapa8ACDyjP6kxBCeFMeuiL6eCGE1H1WEiZBKcmCqPs485QTHiUiNBB2T5rG3cm"
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
