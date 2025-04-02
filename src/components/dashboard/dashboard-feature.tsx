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
    "3BoQKG5GCjvBxvvA5A1QKJn9DwzPSXRbLvU5rNucTTvJgDu48sZe2f9VKSvjHYMbkba7DadAmgFFqqY1yHckGyax"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZcGjJ9io8G4sHgkfz3Bd557whFAPvGQbgAnyhjvtW2CPXaHxagmWiP9Y4FZuWij4DvJw4oEkUp31iZJxYLghivV",
  "key1": "BR7LUBqVJ7qspgRvEFHDoVEM7w3VsHi3GMzHPf4EWoXjS4dFtRizobX57Pi3htKJS8cWGWQeQi5AWGvGsw3SQcP",
  "key2": "4kXf4KxDFW1RhR3ff7ZQisK6q4Dq54Xw43eqHxgTjM18yFmyPFMWTi8196bdo7du5ZJpbZe41tLSX7rnDmsgDwEx",
  "key3": "3oySX9Bi5rwUXazCEDzHh6XVAiHN6JPj7UemgKoDGk7yrDhe7Rpt4BbGrxyCMdChTxqPiSXYZQjL3mhgrk1A8od",
  "key4": "4h3f4sHEsbWsz4zp9tYenwVenPdEqYWU92Doxu1mF3RhrFPGrSHhPqzTkGDTVhDxixzjqd95bAyvZ5vrFc1PCofe",
  "key5": "29WGVyBEnn9k5y1kGzb5WS5kesZBMbFhmx5s7MEMxh2Cb4mWqbUpZZw4bMUUuyksaM1VscstPynM5gE3U4VkY4ho",
  "key6": "5uzJpD4oY3rAhxkV7PuZ2sfcrjuXZKZ9wHGfN8XLXKu4aEs95SbqZck896Hstwq2ZcFcc7ty6b7b4pukLfG1PejZ",
  "key7": "duYZdKW4GutNQ4eqNBUSAaBdbVXuKMEsE8HqxQBr2b13hy2qoanztyBo2wvD2E3AMQgKd3djzj8YGvrbRXVqWnj",
  "key8": "29Wvfh6b9WggcUgKAckrBdxNExUG1gpmQfYF9iM9Ex8s9jSeEXPS8oQLXS4fu6t8Ff9aEm3dmSrFVtd8o8F8hqoa",
  "key9": "3mGP44ncXy8UJWvNdpDM9R7QYv8veQd3Ubnu6t1n4mrjz4Rus5X2hAxzPGuYvvgAdPCiXGp3qytfPjULBfmQitEa",
  "key10": "36uzetkUsyU7xmeGd2HomwCa8qQMMMsd8XnUi3Ey6up2pfRRTBVteDM3Qz1NkSAEC1P93cZ5FLMg9zaPi2RPRKZn",
  "key11": "2T7d4bmFhzRwrbGbqGBbXFNYGBhSdE241a3KwaALkffixdnXkwzRX4KzfnriA2HUC2vhhXjuQNE2oUcSeXnn6Cgv",
  "key12": "2Vr5FtfAxsk6nTt5J144J8itnCQEuPbXkyfeUcRVUr2docA1wRYxX4uFVqVLGAc5tCE4VPVCY7JcZ5YsQnvg6zGg",
  "key13": "5cV79Nx4HTKjArjTie3Cp4Hu4XfwFi8m9SdsoQKnzXKtxiQMATzZ8c9ye4pFkLTK4AyHpUhVzSPDPfBdW32xUfqq",
  "key14": "5M7qmGE9uVzf9JMVMrEYSMa1FHWUHXvLPpBbra7VXydQpDVGPoJJc3pQqfkJBgvAgd1RHTNAZBtB6Q4ZtKNC3C8X",
  "key15": "3BnxDx1MkeY3tJ9A1rpYYxS71rmKpQ9vRZbKdYfsZawUnRNDavqSBT1LVK9cCAhihyENxAUAD1AKXuUMyKnomFt3",
  "key16": "k9m42ojqDp5SZCKU2TxR2B3fDzhbfWorfoGe66TzxToNwyscbR73zvWweNhD96g5YK7KXrfVs2tWytKWpBqXd29",
  "key17": "33iAxTRHBULguUW8yCyi6nRk9uA4XkDAwfpWfuaMVyiXwHxrynmRkeRvbuSMHyesUp9RrHV99ucw3rVxME7ty2wd",
  "key18": "4gFbNzT4jzD1AAJT4CqAnb1bH9eehzT1z1xyYM1V4z556ET8UBwCWGkVjaFDJFyw3cUxopUXPvw7vNRhRjCe5mQK",
  "key19": "28XjtMPuKKnY6uHLyecrHDA58uCzcg6AgLANMNXiwSPpvxmeJvMX19sTHaebED2syTzLZymA3wRMkNTrBHghog7f",
  "key20": "4q1ABHzmCkYy2vHzgMevcYuSgzHSVPdWS9oi2RJxBNVpddjEKbWxyMJd1sC7AjaL59MuDKSa1arkyKQ9oRKWAeMm",
  "key21": "3qbxxTnRSian7RphrB5kqzdH1JP6vjiDUV5tkeE2ogyCHQp21sRJDg358TEnKDA4JdfSWZSQH5eY7vsbAZ98dStG",
  "key22": "hC3veDnHMSU1BmhZLnykqsTwZEgAPGtjRFdC7s8CS2bYSPfNLiwe1CgAhw3SkHtWBp5ztSdbndRv6KSEZAwFRHy",
  "key23": "pM8UU75PxPtd18FfC7QNgnqmNxQAmywZNgEDkCahgkdojG9iQ6TgCcP7sc3NBR19bQ4J2E9ykJpGp6Q8FxCTgqq",
  "key24": "2fUqze1Yeic3FhVCTSVBe6mNHa9QidPCHC3ReMNtxkBXCoVcNKpUyvKmp4rsSbBDJDbJiB2wT1y6wBbgDmy4kZfQ",
  "key25": "26NsVcioZ4WnpSG3gw2iQHDEQ6LffxXNEr8P6CqCvBsuakVM1vc4HmYojkEQchZKCk49GsMVz62cBFa74iA8HVe7",
  "key26": "3i1kHDBVapZLzeKn77i53Mba235wMQn9q2ptcK8rQQBqirZgEu1oG3L4MMgvQbjYRVEE9iHDDRwhD2ArYVuyxV16",
  "key27": "5ZT5ay81s1QHQfq1U72k5uGfrt7o5z74psyUup4QYBJf8d73uZpTCGCewwgEe5noXXDrBnbMVq6qg56cwJF9xSPH",
  "key28": "bUFrGurqnata4d5vLFEVwxz3kRWcbQDGMKSBMfYnRjAfMg6Vi6M3UKnCef6ge7K4D6DtrKNgU4QvxrVu1eAgyMi",
  "key29": "16M59qQZniNM9i4HHP64Ds3VMBqJZo2m31oydRgHADEdS8L2gnBdALqXbWHcbCrV31v13y2aFeFPrQZ9BkXANXQ",
  "key30": "pEz1EhEbsms8zD7AjLeYBPEinsFzVL4B3togg5rKy3iYcQ3gSqDAd2zSxaqBXF3XcmiMv58KWEvQdhsBEBHAd3E",
  "key31": "cK9znMc7LCQCMgSQwqN9ka7bfwExsdzDm7eGCkBYZKukjsXYUHokqpb2Hp85NFspvBph41T4VHYfYfJzEMREF76",
  "key32": "2swjhAGurWLtz2p7Ja87oWLd3tzTB53AmcRuqXzFSAq7r3QQE25JS73XTgEC6upugFhaZzi8cyDLkZnUAwvHkVhi",
  "key33": "4yjivkw7ZMpLJRkSgXmiaGuPEPzgMsLdG4Rk1VjiZvaqMY66NiuzatgXgUpMpizBBseEiw24gok9JAfUpaqQTsNe",
  "key34": "44s3AprGwrNR4B1CiViHgBKHAio52m8JvLQoGnk15HbSvQk8v6WdXfJJgJdnvPvFbv6jbSFbvNZjsg6ErkPyJ9SX",
  "key35": "5Uf146jCpYb1v5U1awNCWP3UeBLy9awFcPz6wbg5npwFAM1Art8vZ84m8iKmWJ2gkgMGzPShtnkjnkx5auUQxq4q",
  "key36": "uJoooyJ9pnH84S2mUxkquxfPdXXoFdNwPYg5UCVpifs1TPSko2nH8nNDebqtGLZiCfXXd3aLw688SUeoDhVgBYy",
  "key37": "3Yab59Nch2EDqHqGLQV6fF4ZAxsRdS1YnF3LQGi8zSihdJ84rV6NNiFZE74RXMm8gY6F8APx6RrQtzRRboPE9sXq",
  "key38": "61Cknx1M8akpAHbgcHB44pqy4aZ4u4WyFFCAuqAhts2rJznHN1ioKn3jxUWfya7hn9GiJXdFcT7vFDip6WwF67u1",
  "key39": "4GEnHV7yhXKsAsmL2TULAaBoGCPKo5HKTd6J78f1GvDunJZrAWnmUGCV9jrob1fWSCPvAfKzfegtfYjj3pBnsEpt"
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
