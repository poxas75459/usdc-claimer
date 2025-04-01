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
    "5316JteFBGeS2wiRoK5srsj1XPt7Hz4CWKwJr39i8kbvaLm5FxFVgPDVWFwcaHn87rJEzfChcKS3UzwdrhHy558F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XHNoqGHAyf7dmrmCEiNr91WCJxQkDebauwjcoLh5cASSeFzDsUX5WEBbCnazXjAJJHJPxrPfzY4LC2rNvmuBX3o",
  "key1": "8QcNKBZHtGnaydveEwVguvbk7tuVpgJ9zRCDg9uCXGpo1QT5byAUSV1o8HeBeStW3wD3Fif8mw9UEZEW7E2LTHj",
  "key2": "52gmBFM58H4nu4Byd1bDXvFrbw3kAg4Wcw96dg6iQY67ghULkYfWJQFwLHaiyxXJrEn9AH94nCZKCX1D5RuZScpi",
  "key3": "2gyHk96xuZ6qSExqSsedeDeuMo1kcMf1DYY2p4UA9NWTA5auPHKQDiwt2WduA2aHRrLNK2S7jQvGPGsUq7rg2zgf",
  "key4": "c7SR18V4LS98MA7casVERZWWrbfbkPNvrLHVVw3cU5YXig4mAMFKrRd9dGoGyQgStbBfLqjA9WDTsWju3y7m8HP",
  "key5": "5sHnBq8D4uXidVsYxsXFy75Da9K1sjmKT1QpH4jhGNrUnSVrunaG2Sndu7r61E8WbV1MmP2SUZg3rqtaGQgDi18c",
  "key6": "3M7gmX3GkS5SU4ZQXYkTweNxMiT2piAM4JsYBvsydnEacZ9XyU22qzSY2dSAW1yrUa5gBwNr27skkBxK2zpXtFX2",
  "key7": "NsQLQigkNgHVCk2kggfTvyM8AbZHWgeiN34BPQjJ6UC8aWR4UD6J4PLyeqPNAt9wsks6CPszTk31HbHBvWzTL5U",
  "key8": "2ey4RF4rWQ7vm18H4k8gn9MGd3JZmSY9ETQxyiBv3Ctc3wPnaUibJRJhuEqM8ojHjhMAohzzV4aWLVgUwfHuEH28",
  "key9": "5JfgYnXHPAJQ11cnjGVXvdFkLnGQgkR6bt132MjPgrGfGvx8kLJ8eiSJ9YeMVKW9C3Abm4x2BTbroeL4iDEfGRM6",
  "key10": "4CXisE4hdWHgBFaSvYkiH67pzX2iK6zETRNNqHQ6LyYRpaoLGCN1EpJaeH5RddS12bmBM32RboiJry1R85ejPouk",
  "key11": "4KGV6SJNpqcRWCXyheyikFTRrke2fXmocu69YGw6CR8YZid3oXJpu4sPZU5fntWtoHxEbUwM48c1999wCAJMMXQE",
  "key12": "2tXMtYZ95Kt9fJYwga8Wb4FdHw9mL2NB7npRwzoCry8x99A5VDgaActAndJM2M2KPGbTrD5sg3xgdTwGWxfWrPtt",
  "key13": "2Ye8yngXzDjNEesBZq7fqv7mY87iCvKCY3m4rRWzFjwB66Tdh9FD5bKFXtmDD7mEQoUmhaX4pwqLFMSNBXJVVg7e",
  "key14": "49pVjv2kakkZf6N3geCxViovGrT97yidRnhTcFvHK1p1oVJePjADd8TSBGh1wJqrmbap4qKj7KNt6vVNao1UczXp",
  "key15": "3Y24WYeKkokKqUbPMn551xFoVnatuNk1EYHen9J7TC9qC3yo4kJNW22aCQsHGQbuDYWYMx5WZpsjP3vteUtBqpzu",
  "key16": "2HBLL8h8QYt8wuJDXksDbiwSEBNH95UHtbX4DfC9ozrKC4EcmUy2ECyEhnAHhYDVZDBTEqCTqyhyFzHL8cA21K54",
  "key17": "4Byw1WuMiJjaAv3zxjDQfDTAFbWSjegmAsCwKcwKogo4iyfnGmo2X7jSEjiog6dLkFarev4uHm8fiSZH5FJLmjWZ",
  "key18": "4wgt5tSya9oDvoqFqyWAocXNvwz7QSx7fvbYosiBiNhtMJPVMamALukDtmpMpLAgv8Ks3kQxwx1htfCKfobEEypf",
  "key19": "ayPmbWPPc11wBZKvqfbNKvngJxgnxNu9ReWk8K7yMUn3xRHyhjTWWqzFXibxvtMy3fgiJUcoDVABaEKKVKhosK3",
  "key20": "4PUE5nmaTgCXD4ecoowLfjMYmX6EverMUVMnKpcecxapZh1BVCpi4bNBSZoqfXSu99Degqj4a3YwZ86TSo3cJ5iD",
  "key21": "5ujS1rkjukpqvF439nbnLWAYwxXWaboxXzmueVoCeEDhJw9i28C2faZxArykZrUM5Vr9j9h6sRkHgNM6DriVtmQe",
  "key22": "3wp9FkETv1sVs7wszbg7xin7ydVcfHRjjCGyfT9rSC7aanmyk9Szjmrr2qZp1LL8WAMVwtaNxj7HdKSsgm9ea9UH",
  "key23": "q3ZLw1pFZAVh4bEgzNk1Q9L9YqggAsTdgEcwyEke7n4ReemjDQEfmrjUNqNwav8BVhJdmeUYyepdorzLcRX5t9E",
  "key24": "2zTUgDvqkaCzXdnEiVif8AoSvZoCJjyd5AXiUM3R5bjN2gLDTBxyGhihtKpZkecAw51MC2SRuZQLQrchSeKzRZKT",
  "key25": "SHkoaEmuyFUdAATRzeGoYXazFzKbjDmkTyAW1gswoLuD1Ymg6kv8RJzCGyKG9YvCG4vMH2TxrEnnSfZV3dnpF4u",
  "key26": "Z5C3vybuwB8nPo8RzyUqHt5FFEMxKA3enrzZmi6XXZbi9HQb9mb247Zh3JPV27No7WuofU3pjEg46fwH1yoaJMG",
  "key27": "yi4s5Y9Zvn7gfstbAGvANATdUwK14BB3ps7cTCzAwCwoQphnaxv6kScLNeW7FcMsWv8JfFrNit6azkrnUru9Wi2",
  "key28": "3sPyRi1MzdxG1chPeVUkHhWRzQsdGXg5n5VKCm4aiQSSMsWnTdhqWAkZ7d64ms1hKNWiCxXX7gBdNWq3mLjxWawn",
  "key29": "4RApZcCXcETbQ35HYxMGMMmypsdQMQB2s3hPsBi5U5rfDX1hnwa32VkVgEZezLhGx4U8cGXmM8pQYH9U2LtpU9Jm",
  "key30": "SnTLQB6vAUTDHuC6nyv7GvAZk79dPx39kEt4uXiLrVgdTesvH7SKC3PwfNrcB9HawjuYhTe18nSYqX1gHuungaN",
  "key31": "3wYv879L8Ax7dwG4pSrVSfmU5ohzpVdgQwZ88yR7rP6EXYUxVRDDaXkLVFuta8DmD9MBNAMDKcSUoPytPDfRu3p6",
  "key32": "5uc9BukQ3rCmTagDdvaUqifR243fhfn6vFv1k1R2zrEuR75nw3fPWgU4NMVjB1a1n7stn2sg73VMqejVPsnESLBG",
  "key33": "5nayX7oa1NY8Pdm1EdYnXm3pVmq762dEj8Sp1iNJAo98q61mVcb79DfJKaqUBYkeSqE91vu3H8TKdjJrH4vB99Mb",
  "key34": "2C7jMRH3g2bUAXc4BsNJ1xheUNUM5695LhDBRgjbEgbKUe9dPfwgFYvgiCDC1RgQLjwghbvfRfQ9mcQyzbnKyRRY",
  "key35": "2wJkL8g6GdmGHemVUTcwLZprjetQPKfFxbgxfi1DZ7ET6yHHnPXq4TKggYGXe54zkY87GkWYzUb1DR2c3Esj4tkn"
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
