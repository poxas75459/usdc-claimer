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
    "2XSvR9QrvMbEeRKPTz3R28wGsyW3XKtCJUEsHZhZKWCmghWM4HD5wu5zCDREsYLyHFPDRs3S4RGRLyKD6qXQpEjh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PEbNyMRAsKiLyqNwf8jwhuwd4fZUxiRZezNaujvdFAqVdati9imZ21dwpxKQUoYzV4iaPhPRBLyihdpjawhdwUY",
  "key1": "2DJjvWEChGR1iEJ8Xp8i2naUGjpxm9hpG2ynPjAAhaETxxopayLavAu1KtdXrrUXcyqFF87dR2bDaZxwivcunrv9",
  "key2": "3NchCMKnyoJtP3L5Qk2VK93RXJzSNS3vXk6s5DbkfqfEKcSZrULfXSjzY3sTSfVcJeHuxHv7GbzQpKYzMTW9HvM2",
  "key3": "3sgWCC2qCt4UnbcEDwMVuA6xNU1qYTA96p3o9ZNFBH8foG6WnZ5G5jcafJm6L4CQWP41Wavss7gHofz2GdjgJLsb",
  "key4": "Vcd1zUx3PUEaFTLwER2dBHGYG8Wes66JkFAwyAnKTdLYJDHBDynkcYbvFCqazccJzbyaQFHCSwYKxVAafrrTubf",
  "key5": "5SKwhdY85vYDoBxriHPmnmjXaSPz1idhqrH5TD7bu8zqzpHNKgNRDTPif8QVShuP2zZ3RzgznSVyEnSWFhq4TxaE",
  "key6": "5xaodrCnnusDWN1zcrZjm26SAAPrhUjvQqr82pggmsbNXc1z4DMPPVwXrj33wvhz6eCwDt5PAkXnXsAZUxMnoiGY",
  "key7": "438FNs75ssWQRi5jNkoXcN1eyjtczX628eixc7L78gcVERcD9DNPDF65TnQwtVKLjvA4AWHtXWPxGruY17bczaF4",
  "key8": "5KnJASiVyFDE1rFEhL9KC56rNyw1evAFpFbpJmjaYYJBj5nBx1Sr9bvfFgjXcnFpK3Q6mcCKHm8LhrVk9eEiWKKo",
  "key9": "3eJecLqfSbi59bmoKi438Gwd7FfXhYFdfFSPrf1ikf7MEbdpPjoUuywW2B1PANYyu4TmfBXUiMCTi1mwTgpqECmG",
  "key10": "gugUZgR4TEwvfUVmq5J3Wo6RFsMoqAadpKwpKj3JpsXffzQibiKuA5g1Dd37XsUbeDZF8TAuS6F5Rk5xYK7aCdh",
  "key11": "5K3EXsfyNJ1ir9M5Bj2ykdWUVTJ3ka6xecd21udTpMsQuwkvma8qWS2WyhggpJd4xjMernr5BvZ738nFJYhkc6v6",
  "key12": "2HmruZzdALTfpncMedvQK78523sJrH9wwnC7AVV5EiAq4K4Kj2Z9A7W4eVe7Tw8ATVMguRK6pQpsQ2AAcBZr7JA7",
  "key13": "4XeyFZD1xfUfth2fFtaxb25k2ok8EeTTLVCSDBRMhtmLBzpC9NcTj7BxhWnK95H1zBK8qbtAPZm7hutd7wU2xNtZ",
  "key14": "54rd4suyLeythB83UQqS3waNJN9m9di9cnZ8bLF4a2nZcihJZmMxVaoiqWyhBYb5LtKCbR79yr2MRZYoPmSV5Tnt",
  "key15": "5y3Ws5P1hGtrQLigcYK26F8SCtQGVZWqgZXDciXVxuyDJRvc4AhMPHhcg2aFdmwbxKUpq9eSaWD9veCZ82d93LNs",
  "key16": "5pWHsVfUYZMpFU9iG3zkPHnLhrY7o1YeDKu7ykJzsbHdzJpdh3KN7XWop8LiTj2KcxTEhUtXZHZ78gXy5wGQ2aZL",
  "key17": "3QkQq3wnLtvwGZGwgAS2VbpbJwAu2siSYy2QDKJzymgbeEDkV59Q9D7Pztk15dg6UQWA4V4YzMc5WSKvdj977x3s",
  "key18": "62Y3JWbE6ENCpyayiDCqxLBeLN5cTBAfkGkBhqX96s9bp9vxWxDEgQ7MMuAD24sGNRoPJCyovdgYs2TEEZJ7D8gx",
  "key19": "4CAGTr7jCuVYzhubGRrY7Dstxv336MB323gsUZVqqM1jbZqrVimEdzrJFmbVBZb2xwPqzL3z7fgQ8mQPbsXb4on7",
  "key20": "CZV3Fu8f2aZoZDio2QhLy7no3Xgddzb1btKKVnDBZu3LNwBusHUZorarBg7qxjWoEdnRYAqraSixXVFYAV3MTjk",
  "key21": "3yi2T9jJswP3yj8YU8AzbLeDRHg34muDLbfwiNX15iGwvR2xQUjWNHt2CTa5d65wMvUuKSnqvRJGKeCrfwRmRsXr",
  "key22": "4o3s3ZHRDSkarVxy4dgG1VWdUZR978rBMpsnn9EL7NuYrQfLAGFmK2NfPMQcJydLR1HqPLVZhzN5afA2EAijRQvX",
  "key23": "5mEC9soWE8jh1oaDWxpvdvWT8Z6Nob7RQJTj2aqkge7LE8Vn34HJoa1zzD7rszskYHJxPPh9UhLZULUgYmZfHW9N",
  "key24": "2MjeQhAf4r7Je17Jrz2aUhhmxHDoBchTjmxzgu1SyqwSmv8bZMYmcukz1o2aWQnCs8nqYCkdFAGVv4jF4q59M6X1",
  "key25": "5kDyjz8W6im8Y4Qb5Zk8vgHfADtqYK4Tb86qLvdqJumDQ7oimHNkvGkeF7wP8uHNVKhTMjqJc2GEUizvU8MHQCH",
  "key26": "2hQBdZvEUs8riVEWc25SzNHDFHaX2NznspA4MzT7wtGjBFWPLUMhGLvDhQf1oPr6HYeYkwMCEU9U4Sn4yMKTjEX1",
  "key27": "uaWLLJ6ajSuvyuka1CspeKW9f3qE1PTRTH4HFtwYezYk7jPuGodmHpeqsMdrhYTXRKebCAmaPo5MtypGFRPe4jT",
  "key28": "3NNaJtpddBjuGKFRR9FFD4cFGoZZVKJsAKaC8iistTUfsBrJR7iEqYEs4y8A89RCpStRHBZJrLTgHXUPBvkWXSTq",
  "key29": "4XmzZwkMwUz3KMqceAD3Lv8vp15SNaWtV4ueYjNJsqjh96RASYsXDMg8MRA7d9Jd3CRaBnk1cK7BzEkpdbBXtV7s",
  "key30": "3xNvFck7iLvE2PkE3ajJFNgQ6ncrjcxQnwp4MpmU282Nv3FxQWCnNMz9ZMNWcorJeBUtws8qG8c9BTa8vEaPs8ou",
  "key31": "3U19QReyma96m6gSQtTV63RvqwZ28t3AJgaT6EkaaKsdSmn18YrqjikNFZv7sMAJfbQ7hZAQGshECajJqmjDri1z",
  "key32": "3GRogduSYeMAt6tpmhtyEZ5Ea4qGpsJnCGFfotgZPLBZgFLhbRtURisW3PNE4piPg5LV7qSDbxAZQAvEuQoKt5FH",
  "key33": "4y7b1vCwwtvoQ5gmJeCUfJCD8XqHCGwXnb89WVSVbK7NGZ7LtKLjoBWS47Q9ZffjyjdzM8gbHHxyfB4hJrAocozu",
  "key34": "2dLvNmbRoJnmutWb3aW2DzKBhF5eW6N5zM5wAWPqZpJjAHoDywwuH8ggF5z61pWjHPSgyQyWXFrw6Lf8Ay6TKqKi",
  "key35": "3QpYCnqsYaKZzsttk8x4PBtoEffkn5Ca1Mmme26Mn8LDmb52RshKqsQEAaE2JG6Vnm5xP1TzMiBQaYWvC9VaBBwB",
  "key36": "3mQS2naEKDyJfro1891xzYiuHxKyJPUywFKvctVKYaez2siPR1YUQ8JVwD4rYRswZumegtRYJ5iBV7f3QSNdtq1m",
  "key37": "5wJ4XRC67yyR4N6ZLhpwtzNnjZD182iT5evG58nUeVj4FhhHFQD9fFeZnkGyiRPDWjR457muVxB7yGyUnhbc5rXc",
  "key38": "2fVMZqcHbY4379oEFLCRBam3cFqBTqALmjWBj3hJp6ip98Tt69wDWKPuVziFr5TXRbT1193MKkaNjKPKkeFHTowR",
  "key39": "5EyiSiChBkU2SBfTJXjZjMRzXkvBCiVeEvJj9vmSyfEV3dcFV2iBrUvyXgyDGn5FA6d63pV8UmAr2vmptdEK2AGT"
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
