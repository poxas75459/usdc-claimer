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
    "2qVp4SdrYYBCrQJmH3w2E2X6kR5Mg7YsDyLMkCS2a6ocBugjS89aBs5QXHkSaQgcUHfahGANLmKxHZYUZbCZRGys"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NHUXbNPeD6ieoYxr3PUFaeCQ7jHHkwoS5chbUQ64ywMzk5dffSWKpoCfdwDtSp3RBRmeBLqxTgmKdEiR68Qs6CB",
  "key1": "Aq73QEZ7T7ctYmU1p8QsV8ANLdEkS7qCv6dufajqf72CDtgaMC8gUvwzXPnshVuPXFZr45nPMYKQmHPKZXEpsi4",
  "key2": "47nfATm6EwwAg3iJuYW2rcNB8KxJAku5xs3R1L4J8FDnjjFUjRgPrSk9utdxEMnSsg8nvUrScb3d97mikMhJGm28",
  "key3": "39ietK8ETPpyt9ubvjH4vGut5iKDC6gpvCN75ehSyHpGeKKSF1YoGgPNZwK1Q6z8Y2GTQkZrxN7suihmcRN1AQfu",
  "key4": "4oJLvSnZrFncf6fEGWLYF2ra8E2GmnavHQ5NHj4mVxxRsCcFRUJP173BF6sh81WNfuboanYM1xNuHS9AbdHfn1rB",
  "key5": "4f36n1Heq4RUY29EjxPA1uZFZoMJ4buPFFHQe1SfAxKvYpqXyRFXo3YyVEX8jDfYJ5RyNnbDr6YL9VF6WArHyePe",
  "key6": "25dSsjJshbwDX9RNHozPJS6cSiDJ8vaKF8AQLnc17syz4gF47LFwoPH2NS6MnTcGCQjBk8Gp8MXL6BqMsG93Qz6L",
  "key7": "2Y2HhxT7K2TjhVcJaabJnjPaHSnKrQ53t1jqrvRcuqLKDFnL8LDt2sE6gbwSS3e4btYWS2MJk3wbgnbXAQw5yMru",
  "key8": "8MaUsHtS55CPYF47VN9EKHZscZxSAfL9ja8JgpGq1ZE35GtESxuyJqRWoXvehTy6a9t4PFiyqyaQP4WW82ij7pm",
  "key9": "2V8jYpVsAtrEc1XjfGHP4xZMEaEpHjKjzzpL5cwFDtS7wzhJRgDoms41qkrS6HiR5qUeSVXDHGutND3dXxh1vtHP",
  "key10": "R7wgajEn1MSdyunbCRsLWWpsYeroeXjyDpVz4akiMYppD7VvUN1z3eUfAQqBXd1VMAHa3mpsazGnHA4HcrYvoy7",
  "key11": "3sQbRhCEPFHXXaVDwoMfpqyXkWmkjRJhH9kGebXDuKegJkoCE76XPPHKy4ZWU2oz43JoPmZEDNFDMLppqDxCo47s",
  "key12": "4VNMa67ZMc5S6TKGTYKojGZ8bvzZJftykLouw7b3ic65oomVSAbonn3PGs29So5gxVfoezicX12t9Cj8kw3ip6b7",
  "key13": "2pSRNECUB97Qu8Z1kP8gWc2Y5L1v29XFpDAZ6v3278XRZd46itxhKkcRLmcjcF2ei2MXDokEk2RyxAEuTo4Ksy31",
  "key14": "3bNXJpDVWTGK1GdCGQf2Nx4aN48Uu44Umf7A164rh2hsrfNStJVkRVh2QmKizZ4F2qGxuUW4zaQbRaTM9wj8D3Dc",
  "key15": "5SvA9FKaZgVKkLH3oDPJGdLgif6RucnzDc3Dw4C7o9eFdHEN6pyvZKmGfrgMMk5YhzMKCHU932G6FetmQhERZE6m",
  "key16": "2mGBP8LTLQmNwdmS1jMC7JUbCjw6B5NHuCS2PYoBcwbmC7fd5uG6Cjw3S2sEWUzHH8nmJTmLVYrbDdo3KTTmR4nB",
  "key17": "viEiEsN2Y29zSgwo2eEr9iE75UeJ1y858cSeLdWiR7fZ1TExwhnDGMft6TrnRcpFBuezJxX2jJgtP4Wrz6yxpRw",
  "key18": "4RDJo1QDiQmounnr74XwZPwUHC7hiXdBGmsH8zZ8xdhJPJcgaeZjmgXmYNHYVYpYAt8VGdBK4qU9kzbDGETZux6S",
  "key19": "2gfHbAqKkeqNYCzh5SDWrpY3aG3xpJ99K5Y1MgWLapqbikbN9BpGtLddv8X5asHGp2DnSARkMk23yhj461aHw21P",
  "key20": "4hsRzag5vpP26vGfLET2ZdQymRWmB4qoTye1sNQp58hBYhjz5872gQVAFJEP1PVB1LLyBTwXoXPgG9GXYw6zTqWF",
  "key21": "3g7ZSeCmxZ5FVcUkJKPNCz5zGbpCY8ttDonvK5m49AX1DiUgodR7xXVKfdRY61bwF1yesRrp6E2cQLZmPBGoroxs",
  "key22": "3wYLSCekKEPQyWmy2hH85A3tieWVQZ7po2ojGAf3ZcB5zDLWMUTkYoCm7bXjocdTm2TK6rHgorZmKZUUVHSjH4K2",
  "key23": "4mqmEtyxodw45qea3WejaFpBjkwdThAeNYxax56iAG1W2b4KMReCCHviHAc1N6BGNeFiEYADjr7XmNhkSiZEv4g7",
  "key24": "5DcX4ydBsXHewhNXWDgPuZ4o1UE7WESYozZ9W2eY19C8MTPsLSC1ivhXkuVR3RdjJrXN9LJw9HX4ZhLfAHUqaxkn",
  "key25": "2usAwHycdtB1RrJgdw1cKNuD9e9NZLgt63bNVfnJAt9Z88ycWokDmkXzz9rn2XM9ZMdvrkjuJ6aCphisyiUkivip",
  "key26": "3u3jAdhtszj7gzicGkQiFnVRJa1FaGdZngUT8sGz3X1NaNRJoi41JMN7LjrVhvGwzmXxwow5voTQkpu68GeCTDKZ",
  "key27": "4Bg4DPxjPCPtR29mZ4afGk8j7zsowxKNiDcM171v9bzKCgszuYWkScqrdVWnipMi3Gxvpp6WV7hy4eBUTRZqXSyR",
  "key28": "3zXARNgacbBZJXARkuTtt79P724PYHW6Rnxa43v9CWaWj5Hx4QaXFrA1Vnbfa2iigsuw9ZRRnnWHuWeVijP5UUrV",
  "key29": "PsJ7zKmoQGsX5Mc39VvH4Y9JdHsvZf992SeYr1v8FispQVWp3hJZG9BGdTg9rMGtpDsSm5Gn2R81STkpx1h3T9c",
  "key30": "2RhgFiEgQzAQGjwdSz1WX8tgPDeb6YJK3EfBD88VchJBvSmQMS8HgaVNusRYSkLzYVfCwuFQaWk1T5ZKeck5PV7x",
  "key31": "2xdNqvG53o6bfCS67fArQcAh9UBFCHtAWHXwNPV3eiCD9mk5pT7ubR2sf8mrFyT6UFbczN86ZnMdqSftLrfvYHHt",
  "key32": "5tPYyFYAbwNvejiQZ5A1H7rHqBK4ffzFKZ4g5t9VwsLGB6EM19JwokkNTXfQ92h7C8LPZiz4QsLG8nP51V4TTCs3",
  "key33": "2JiT9n7ysuXWB3Xd1ydxgffen1CkmniT6cjTC1o4PZN7M5i58K3GhxhPM2bARDSUBBCNXq2BSNS54C3Z72aoCVJB",
  "key34": "5je7hwPxdq16c6Eh7hA6vVVbHyoJ6LZ4k12SV6v7fKoz4QLqSUPTeYpjX7oRVWV4pftvKAUYuJ5DL29B6B8RvzXc",
  "key35": "3vndSemcf9peHYYtxWntXRbBhG1u5dJs1GvmbEV2oVqJy5mgtAt4YUnJTqUbvefht4hvbDfLfe5wrENhnGegfzia",
  "key36": "211UskZRTEUqaQ6NZjR3JGvoLRKUYY1PgyGsRUwY8wxMqxHeT2nhYCDkUp1rEJpAKBSx4UEET4drvVocEcvyGuiZ",
  "key37": "HsR18nXCytkduFc9sqgC2wCbVkrYci44qrAv1oDeAbw5sA9EkzMyqkQ9V3cABy4vRBSmY6zjG75n7BCJ3FgvB3u"
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
