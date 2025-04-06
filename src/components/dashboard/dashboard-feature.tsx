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
    "56BGm1zShKCYdzokosHpJtzNqgEzHndCAuFc9ucESVBhwqtxd1eymTm9XHpgcNj7vuELMwatGz4r39NJwjSAKQk2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45nKgaJ4WW6h8HH6nFp9QQxi8UBREy5mvswkugyRzTaHk2V71WNdC8yHyGfqSos87DBwhkkaSXrFD72U2Z4Bo5wU",
  "key1": "2Uaekac1pxsY7MBYHZf171jeZA6bCB67NuDgTFf1mJMyokXJXbNEW5bucB7u6dtKjiDys6osznYjywXp4TY78UmV",
  "key2": "2Bej28YsQ6gWRP5SsQyE3B5ZyCB3JDTGt8qjvEixQoafRRqgBxHYJyWGUh2hreeXahXjR522rvYFqjKRnRUGX7iu",
  "key3": "1s8qVeNNLq7ymytvddBiZo5YZZcWPzK39Fykj92TKLVHpLwh6PhdTyigag9t7DGMaVqGk4eS9Mp8TtWwpbLVj3o",
  "key4": "3SeEB2UsHLuBU1rct3gFrpNCwRsMCdn67N2TftCr4trTaoeHmKtWw1riHCthRMk7eS8SsXBb37wbqX1BdEkYH8zg",
  "key5": "39zYhgzXU7vTNoxz6hjcBpkpAWtNAmpZBEP67MZwJhbD1DN6iDY4ZfHCL9KSpyJmvUBmsHswUBZ6kggnCb14K8Ny",
  "key6": "45wi2d3HQwfdToDSqWYYpwYY8mZjVxC2Awd7TYXAEJg36dvxLH498uryKAyZXbsHg7Vs4Vum2ejBdYSMXbeTu8af",
  "key7": "4E4756LMjvzLyHF3f9smeRnDYbg5BhosuHo1J43gCsaA5HPy1ZPqKuwJEDCYGGLwvyMd7e1cKqkjJboqTfVDz5D8",
  "key8": "3DVmrs77n8faNykskvuTYEuyFbXmWmtKffXJKR4uzxTfizB4eZpWZR4q1oJrkxL6srxvw8EKXUSPj1sAV8Frg9PV",
  "key9": "2UXxLyqF6GjU9Vg3UJC4BGQcnZn5EA2gncAzrrA8EqnGzYkadtVyvaVhJ1Ed3m3NfumKTNgGrbRdpy7tz9Ggn1z3",
  "key10": "4wnHXeF3fNqtz1uE7sq5DWiv2dhGULqoXmAcjjcfPQCLryui8gkNHr2BzWSaaSUMUZ1pfY7Q6vbFwX3bi5RKDqC",
  "key11": "63db9HNheLfaEw1ixGk4UjdKA35ymAtF99LTJFTCgn5H9zGj1A1s8JszM2yiD3EbJABCC8gKeVHGgJ1F6ygtbagz",
  "key12": "3krcLbgPk7AnHmNrw6beSgSRojjJTMPopBrDYBtYz77xN1zzGXRrpmkf7zRw7A2g4JuS5sZY2Gjf1uZQSfGyDYsA",
  "key13": "edBqZ7rsNGrJXJ6hB4nXhVGVrZu13DnLubGm9PtBX1xuBqCnRLptLXGD3tvCyEAsJFX7F82mm67gsALGAKrftED",
  "key14": "56QUPBNTRbXYk8jJRJxVusZjMSzYKs3oyEdsnBZnSCy8sztNKYgYeZgqdRJ1KGfGAoXW4qwNzs6AVBge5DLKQ85C",
  "key15": "5pPsMvCYDi1TKi94oShC3CtLJdyNRygKdBxq7wb9UU6kCWTNmGvsZfLegvhsWrLoZ95UdAiNokTdMcu2fvP89Dn8",
  "key16": "3nUtnPYJJEt3wJGnMX3es2YosUw55qa4tpLnPYYZV45U6vGm2kiRsPf99nr8FwUARA1tdmn59dx94wpiSsxbuehE",
  "key17": "3w9QyE4owFugx2prYfmYP7qLDNVNoRiCy4EgWx3H7GnYsWjGBfgKdsKk7yc46AtSgx22vbYzxT5nATTQsmRDabpD",
  "key18": "2bGg9ksPCQFLUpV8ewNA5CmeEFH6xxUjWpj9NKF1QD2hGFcT5BPdE576STZ2oBXp1U7CENPSRvmtJbVyETbV8PS8",
  "key19": "5BuJ6KDNtStGuwBLV2KLjQTW31eb9DJfs5xXvfnRo7zR1B35sUtcEyfJAnHFxyZJX7v6brtsiqD5EtsWnR94pJgT",
  "key20": "3xZQHRXBoSpbzM9qxvsnQ4nkZhGdSmSYofVasoCtZWCSWaCo3DxiezTWzbakhnSds8vmj3fZz4uMbQoiwJKbP1ea",
  "key21": "3PZSMP7qMQGyagDb4ZEYoi26j88UVnDzss4xQFn7bRcYUPHZVxYqLXwQaLSxhfpcFdS1nL4ZP7bBH9VvESdtUSM4",
  "key22": "zn2x9YqDJahwsnN8JS6tP7YvR3bzZiKPcWkk8GSvb8msAq3K1nb6DmSaaTefyEaJjfWYTiuJqrJjXzezANBTNua",
  "key23": "3TY7PBV4Ave4CUZmSucHHVR9aMJRV7qhAfWBxgB291tBkQKcDEsYzg8sEDHGNeEeroUVuC8SK5acr7311sMUJwFf",
  "key24": "2hQ9d51HYtGPgA8iVVqPmd7ycQpEUzpLCbjzxV4a8RJXm59Kz9nytshdnfU9dXACc1KfMURbt16AVoP7gHt38fYM",
  "key25": "2JguWLEnhkFXjTM9LT9g1buMoENQ3QneFGcT5TyGZHgKY3CyWyjrDVBmtM95MaRV7W35B9bSAZg82mwKWVpVaT6j",
  "key26": "3RwcAuiiM4ap2ThUTkGXkZxhwczKuFZCyNdCY3zrxrxat54PeSQDiv3hDFZroxyECsBukERess7YdBeQ39ugj8dh",
  "key27": "2HUi83UAKFRto9sCJMu6XbcgfTPZMZ3hdPssTWdrqxpaBbaSzVkJoWJSFuaRJpdKcj6cZvQHcdrvznaz6xUbVc8",
  "key28": "2EbpXuR3XQ9Uq9ZpKQfxNGtG41qJqW5emrTp6Fp6NKEVJTEfJVEVzTao1oyMKkxj3nYoyfhPxV7sVym7EPxTeZqn",
  "key29": "xpRrWwzbt7NbWJHHLPC86k9KeGYCCpAcaWuHE8CPAwRpdzeXssV7aKJneAtebYuUWQtjJbPNuSRDd8uaCGf63PZ",
  "key30": "2BPuKeeoMtSzkTQuoKi1trR4XkFNHGXT9rbmFL7MMDW7Q3z6Xv53bnbQEBu2aHkTJKdYNcL6EGVj5xN4HKvnfXYT",
  "key31": "34SvJbtmtSP1qT4XWv2FgEwN2TKGrgWGgzckaNqGQoqx7SoaSPjWFpN4FhBeDWCFKbdNhnahbausJCvQbmAzWLd",
  "key32": "J3R7yvi9CtepsbsfEEhAxYbaTANB6LibAMQL7E3YkHq9wDePxefG1tN2JH69szciszHHgMf21PKQqdJcjfHcuT7",
  "key33": "35uk2fa8xtsiaa5gWXfeUNxieG1ejLdBWZpTrTFPfDaGRzjkuq4QdB4uWVUbbKYH6zuqVLMK2iuux8pjqKburr7e",
  "key34": "4EneNvmeBJpc9tzHrvpU6f87Awcn9sz3T7kUVEe7CbDC1xj7Db6p9RPVHorGzzQieJfPQyb7u9qGqthvGBHGPHhk",
  "key35": "3bCuJNcrvo5jE4t39QDfRncBDHvZX5oCTbGttSpWGLofGN3bgwB3ygixzUWE8snkHhzu79cn9T9DWCUYsF59YUVp",
  "key36": "5fY49W1kdwH79GVf1JWTCPwJ2ZHHZo3x48K74qx2kUsGeBDdcvScn21L1qQogBsfGmxbmz3mA4Syy2fnEebbyXBz",
  "key37": "AVNpg5EoxDqy8XfU9LkHSHSVErUPHqc5pARBbr7WCmqwR1GTLii8Ad8Z4xzaefjTbfXQ1vd5F5Ugczhw5XZVKhV",
  "key38": "2BMg5g5dLJ9Yz9dhrN3hukTgEp19XkX6ihJejnn1HZfMbDTzf8yGdNckZ2tH2hwM2L1gk7egxrrxU73kmNFE3q2L",
  "key39": "4vR45fLtyF4zcZ7pJTr1Bsgxis2B7fq3uwy3pKw4NuZ2e45KVV7xnLG4Jr2qUgYR3ws4fvkikrWS12Zwv2t7otoc",
  "key40": "59zXcBsXsE6wPemBe61EJtYA52iGTLci6AxQpv25mzfQz4YqFAZzFBqryDBcnkgU4SoHVG87qp2snGoN7tv3rTyy",
  "key41": "5o942WCZR9rQdh9s9uftiJeZmVDcx6yzfT22b6S9Rz528LQ24xXAmBMKAzMkfbEpckQTeiEt7LER5j44t5VbSFPG"
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
