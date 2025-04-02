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
    "2Qr8yvrV2UeN2kHgVzmgwTWic3Z8tLCsEgaueVD2tBY7V2jsoM1bTntJPbTTf2d8ddpG2GMKRZMkRpdjNpcqNN6d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hmp8L2sG17n3A4MyD9GuKW7ZHpt8qxktcW74Tf8BN843RpRauJZCZhArNCoAtk7eRewtMQ8VD15Tu69egoRgq33",
  "key1": "3nKVF6iMJDSFNi4qYi3nyJeodmisyiccvPw7yHTANvsZ2wVh9ynfaR7qffGyWBbRsfZysCL66N2dRtomJRdbYdun",
  "key2": "5USbKt8xUywTNvQScnrxGMJ8knn69uT26NH8cftjVSkii59YgbXA5H1Ma3YXNjiDRjEefdPnpkM2XANBiTYUjqrW",
  "key3": "53q9o81D9g57tZDYcvEoAYV3Y34WZz5bHdkJvDcC28yfmsq4xoNFSUHeJB7Pv7PZUVH4Kga6YKJNbW3VQsgyx6Jm",
  "key4": "4ZTecKMpbEZMNUKK3QeDwkMNKUBjHuRpwxu3v3jQ4vV79j4m2oDLsGePQgBDmgKmRM458th13pudkb8pwdQRZuGd",
  "key5": "3mhra9zCMaZfhRKTUA7XUBZY2kf1ePJsmZ4JyDYsymbjcbm4TJpkhRzfuBbA81om5JJby6EGa6XkfStqNBCXqXhp",
  "key6": "3m6aW3yger7FW1jkwzAyph1nQcdqBZVYT3Qhyxz5w7FsM8fvb5GdTHLx1qkupm9mAxUs5ML8rH51uYUgSm2UXrM5",
  "key7": "4HdvvaLdgFTkTT8QzMGYieRzVKjScCwGXBGpdnsnwjm7RcKSQFep8gYZ57jbxXnEMoxfTPzfXPyxP8fAnswUcsDF",
  "key8": "625KJVNhe2GN5K4t2BxT9SFTfhzgs27fWPoCJUtRNqVMmRAMR6ppgZaCmFyWzBsTosfSar5zRwaKxcUZ7zGR63gR",
  "key9": "4Ed3ht1n4hJtApq6YhPANTk56jeJpfccRSKo7cKw9jjHnUHUK4kH7ZfaWYrXMLEA5YtVNa1N5jovzc9u3TraW7Kz",
  "key10": "4brr87J1RbeF9YepgQ3VWw28VhgExiMGE6k4tTdVEGMf4ddti4HGrFNYnofnwQTP5zeiSDEcMJRwqqRXB5dKciYc",
  "key11": "3xYSEpnRMXr6M9Xodvv1moajwmjbxM8FRGmFNasHV5gLhK8QLcVGCEd3HPotxqmufewTycPJ9L33NrWHXwh8cqjF",
  "key12": "5csi6crznEbZDCA5ppTeTEmGFGmW7KHnCAENeEadqBrMSPeN4D85CEKPWqaJeeQw2qpMWuQMvVF43xmSBnpFuXfS",
  "key13": "5QQbeJPa8GCYMbLHmJj3T1rZ4o15FY1WGLf7Je8Cq5MkZyZeMtsGqHW4JYXKGnU7KYjUhp4Hh9yDsw5U2Ajyu3qY",
  "key14": "3EPHSGR32VdDMXJNNVvjWWyRABhoFnuJh9e1bokuiFr58bdhaVuJ45M4ohaiTZsPq9T8BjbL18N63vqMAxPFHnXM",
  "key15": "m3VY9Nfp8EyezmFyvj1DMLTEHPgD92bPm3Uo6v5yVWQT4dLn6bN7roqU3WGLtqeLA9Z9iifuz3RVPtuPH9CDugr",
  "key16": "31EnQDjnFHUWQQAXz9tUhMQ7CB2mRGrCcf1zCKv77zYMrWF3P6NEzYXfRzSt5NpdgVTQYZDxo2udkCjkmPaxYZwT",
  "key17": "3YY29L9CZFkMndEwveToAMzAMmaNGbxizqwWd9ZjjwsC4y3YghjmQGU5irYRCJXdDoCxSp2qNrhx89R6sgkdhamf",
  "key18": "2aTHyaj7zMvs8fMkcWB1BmLGFLL4tssw3dwrszd75gvtDcvjh4xJLu5iCLnZwLsUrEmmCYkCkY2GYQc7175dh19s",
  "key19": "3VM1bvT3vYADRXbT6FmTxKaWtM9zfCQvKohTykKscxXZHPzxUtga72D5nppUHa8m1PSmUVWhYqqpVKd7Gf1b36ug",
  "key20": "5HgezMc7TrsXr1QNgDJWpfttcVU2vPrFvs3q9WmN52ZHAkiCwNFdZnRBz1WEKE1icAUwhZYzJwNt2KeGM8QRPMQM",
  "key21": "3G7QPJuPJU8YBGPuiYHyi1SZdT6n4gDXPxPhKxeYyg4JcQW88UZcxd3f5Ks6xpyM51E14Uv9ftPaSyvhRvbjF9S4",
  "key22": "3m4cdJFCue6ogu7T3V2uexSbT5sLmm78mpYGs2WLRLSmXBWAF1sHrqT5SjWgPvjeJiZeU9TopP7C7Y6Wk8fmwVL6",
  "key23": "4KEiRT2khRu8jRHrj55wDXBRR7B5trvxW9w4TH24GXF6r1MohBuk3KDqRuxELQPYQhtvYqrkmMtGzndJ8puJhJ3g",
  "key24": "4k9yj3irqm1T9bMFbn6ygLvm2sr7Nomt2roUJrUmFeL6Fd1fqcd8xiZhAW74wz3iZ5Yhcugm5RhZ99KawxoyrVUn",
  "key25": "2mGr97Dtdq8rMpkVzkjP8vjzAorpwJ4EhVb3wxQLRDH6xcer8DcF3F3XcT499nU8WR4pBZV1gRnx6RtsvUFXWhZs",
  "key26": "3LoRAGNwqRcEEMmbERm6FSTw46a5RbXaEnKmSND4asMJvfGUNMxfyqQfR2zj88U2nrqWDnUx22dQXfd8dCoTkFN7",
  "key27": "3BGdDgEh8gXKaCBLRRuj8jWr6M5gPmw9GD4D2vvsgj3rGsHGRxokNysZRDaNqPpVFsKLzjazmAkh8fWuUzSrVQ6z",
  "key28": "2eJ76xAqJuC7NzeDLqKzpNpUWJhLarGL8jvd3pHx2oCzHZS89VkitGMnSe3JeKWWWkDSH1GdHDDB4YsNtaPqr1WS"
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
