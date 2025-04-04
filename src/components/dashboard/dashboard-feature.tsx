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
    "665e5S4tLBoLYq5cBjSp54rVSkhgzpuhJH2ZPKbRfgqwUBUEmZsT2Y8Afs3mExzH3BaSfoWUER99sYYhnDWE7XoS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BxZnbPY9rh1M8UnhfU69xNGR4aTtRKoiUqNXVxaRXwZtKLt5T3pnzKFLu1Dp3uAK8PLEodMX1zQ8piUYaKKZmUE",
  "key1": "5rmPXBFkU1UUpnuzyom8Vmqppt7ji8VGEQT6CxT2P62HJScgAsjGpAKMPZVctAjbMEU7cXpD1YEE6Lmepoa4AqXL",
  "key2": "2Us8dPEgyh3nuUV3QR3yXMqYHPuC2wYPKJDxJDz5WozCj2CK193rP5gdfagiBJgJtYT8j9RKHQr1uSgp6RDmS4CM",
  "key3": "2vpDjm149aSj2TRM5rtb8JCrSKPMQiAvjWhGvMbeXt14XwaNoygvwiscdUEpFpZBpMshTfGEkTMhauqT4AJzyy8n",
  "key4": "4DC2bcW7iSNiBmvVMM827JspLBdHeAsqNGJBnPCHGJgQ6Lz2i9nFaw4yhfogFMPPrEByiazEFfewhZHHLPRgSRGn",
  "key5": "jhwiNiJn4DTveiUfs4hYSZ1SZHnJ74mLuwDBW7ToQ4haFLJB9pXsZqZxM6ds4CNHqoE8VVWyNgaGrF1TmoFagZT",
  "key6": "5m9LiYhKmKynFMtPtN7uBzfT4wUPVmQBJRKJVyp1G3df6j5UDfsJGhorSx5PEcFiv7nmvEVBDsYRn8Uxqj6m3P9j",
  "key7": "7MCE6spejjydtxybQHfeSz29Z7basgN7MGE1YEdttwqDT21FH6j84UnptJwSLm4XQtLHQ5BQ5menwYRaWMTWm7s",
  "key8": "2UAzAJMEbiRYwm5Dn7pP6iQug8LKxou2dwSftyX2GU2ygrbGowyKhA9nZopcawRmHjopJrt6M4XkprvfuwWv3uEc",
  "key9": "8r6TMREM9dTDVJqVk4jsWfAwS6cWXWp8xF8PyDjXp1Rte11hPdUBBGJJZhf1mnsjzhbTn1bV6ypizMXxZ1c5SdP",
  "key10": "4tdH72nrDnRWNBwGL5k8QThBzVAFfqrxrP7vE7bMSstnrdLfmpoHsfTCCer6hQ6tAEwWRVnonuBPG7udMwv5Eozi",
  "key11": "5CWCzdMfeX5oAHXy35NnixRqUUXVw6vaFkG35MGJJE9U33sEstoGvqwNxYj7qQFeYYazrF9UBtAp9yaHTpTY9uSx",
  "key12": "2X1qTF4KZMKLVJd5r1FM5UR25nV8C7f3SUiaB337TURxjvvDnWnskLq3scq7yoVV9HKFh5W2fyBYPvYggs4t3qbF",
  "key13": "QMLmsN1NN6LMjjdFgCetLbbLG8BiLpKpgtgpSFLGxTSnN2T6CGXr7e92cxHd1KoG56UeLSS6e2y3jfpFqHG4an5",
  "key14": "4WxXMUfLQ5Vu3QcHVytBZjcpo9V7wrGtASPriCnNcPaekPfuH8yayGfBG7dn7rJvtXbwFRjuUWxDXaaJSEpN2EEF",
  "key15": "5HWaMN4nZBp9U2iUK8F6JJAshbhbY4LzZt17X1tJo65mKZUQNx5uyZyp5HmRGaMKHCDPCTiDnGmTMKMwYMGmQxsF",
  "key16": "3bZni2UgRRA8M64zPBZkXnoeELSMdUGHpZRZnH4QevktsKPmmjvwVSj87rp213GP6DqMHEueYaVmjUR919uKDrKX",
  "key17": "642MKFAm17FufvM66sPAiXbc9XdUDzHyppRb7HBAxtRRCWzJmn2zg8rhmN59s9H9z8VDPuyfynFAnfTyVg69dtQi",
  "key18": "4eDHhzMybvKoJGFDZt62doJ8nktFqtwooe8DAytj2cbFHEWng8EzfzK1xtLSRHUdvfsQkT9CEcJS1QW7CYEYSbuu",
  "key19": "4jtDbsABpTmucYALePDEk1Qc3KiL3zGw29oqD1ZLc7dqgPePCGwHK95sDXE9jS69suyVRfd5G9Jra1FxCV2rLXPX",
  "key20": "JEqSaNvYp1K2HVPLMvqrxStqdiTWbP7VENMgGt4VejgWLQUSpMH7S9La8VGETji37HYjfH4XBPek5aBBEz7yNHz",
  "key21": "4DWzZJX44TjngpvUAjwgnqT4noZZaxituopfw5x432vMw5ffwZZBj15K54w3RQVScmbHWgCV9cjC6cux7qKLHN14",
  "key22": "5n939JvDDwSAPCJpPrUAgDYH96xgf29vVXsqUTUtMr2g5SCF8aiGiChqbMGKDiq4wzwiDsFvkL68bwYFL7uBimvJ",
  "key23": "242XbHLweZuJR9VFsz3NEPcyhZxb9EQjLrdBZESqnn984AtXo525PKwJWiL2ayPBcfc3fJZY7Pdm2Fe7pXyaxWXc",
  "key24": "9C3HK1EG2ohRMgyAB3FWvoNrBcyZXwzzXVisV1omZW5yKnVq81oQ2ycoaNJpGxuiEjFs84FvCxUhvRjRuG4aZhJ",
  "key25": "Wr3D1VQKhHPdd69ed9kN5b7p9duRu18Qu7aXYcad7zVHeLam746hqaENhi8zpGSSAbkTJpc3CGrckq36qTw5q1v",
  "key26": "5KqJtFAv8axEgVQNdCLyugm2h9Nfo13SkoYsvZZFhoKiQMfgS13zVMWCzHA3vfR7fGbUzENmqryP1rTWKNCD6Qk7",
  "key27": "2EDAV7hrVtq2RUpNp5og1WWgKwSc7xtLK5cr136RSQWXdjZcLeW5f8LU77HZ4E8i9LF3Mr55pEutjFB3ouZf8jhv",
  "key28": "67kzZ7CNgZFgpWraJhaYTfNU6TMsgSWBiZ6rXnoBNSa7whcziH5ecSo1kkueLygh6WEtdRepi4skEMWZC5hNNqmh",
  "key29": "GeLBKCwS6uwo3265mH4DGEpZux1RPJxQFQhWCv28VNx8ULktiz2A7HqeQ5nPbnm4g5CL88LWJZCm1BWue9D1D2k",
  "key30": "51LE9YnWeLh1rSUz95qKEAV5BSs9Jver7Da9VjY3QdF1JZQrXedqCzhPbEYf5oBvwuDVmc1fs8rM1mtdGPvrt3jR",
  "key31": "3a2Ab31fGWqHffWrcECXs4awuJcLgsGJnNvEtsCNjdv7gqE6TAa5vTxmUvp3SGKp8dAzjpHhDQc3orzMpc2dkfzG",
  "key32": "msGyVhDLPXqYcmhFTaGf5gZhUGrRpFito8h7wSnbeYQ9DEUhMiNwzyQpm1dVy1hoEwGXhXocstjhzwpmuLQheCr",
  "key33": "3pWh5mB2gLW9xeH5VEbTDL9ypKZEyU395f6gBcS8r9ofUKzYBrzYzvXXkZEL6aZnwjNkrX2eQz8MfReYMCr1iAeR",
  "key34": "3iyjKXELgdDJB3tMWsGoJGKjURA6YeyN1uMAP71UwZ3u8kRwLdTgznJtPQPFf6KW2DCQDPPdDTempXBe7RRXv6cf",
  "key35": "5uh2tmZd1MZnWZmHvrxYzA2mCotuM38Fxn1g8hVo2wuEcJURVE9CckMLLBdxn1XSD1fR1pM6dJR5pZfwWM9jFnDr",
  "key36": "4oecZqcbWYwMjz1n3PtSrcE2dKWbRUjbBB9vFon1iXYNBkydSbZUdRAvjVE8j8QS2SbtgBjGPmV3idKDoX7PPqEE",
  "key37": "xEmq6Lp3CDFuPBXU21z6Vd7rr7rstLQHHsWS771MbTnvUZa9Hb2D1TY96cetS71hFvwLQmc9D7Qk5U1Eivuk44f",
  "key38": "4ffxi2rpK36RJwoXkmHnjQ8up64cHdH6cjHc5qnpzYk3cNzB8qLs2KGqjkok179PHBfwR82qAuqvHUznJ2X83tSi"
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
