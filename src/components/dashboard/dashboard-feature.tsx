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
    "5k83DsWLoCZhvHWT9BwCF9sjAxBUrHDvHeHAcRNoFf8aUs5XCkbuTuekWbCWpaCgg7BGT4n4hUK7w92j2xAzyXRv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Yi2gSdyE8aQaNoisbwFyxYdH5xipKTUa2mGk5MR9yaSHbKaSzcvPW3rGXrvh8aBP3aTQeRm8D9fAzN1HK1mDRC4",
  "key1": "5jvFeQguSVGJPYgPWLYFbhLwmFW1AMyRWT4ARM5uyzBdUTwXeVhLP2wcghYLmN2zPzmYtt1Gq6YncPLcgWUpdwiW",
  "key2": "5ePxzb3tLwpJ96ao1KFjZzWThXV9yJJMstu697BXSe45EwowsyP9AKcCmPLj6qcC1mYLSrUFptJr4ihRtius5nJn",
  "key3": "42Gdz5DKhNGpWot2HXvwgyuZkf7rGyijF7tt3dNHQ4z246AxWwkVhQ4X41mAmZNCFiFxhz2qaDrCtx9GMiE8wSKv",
  "key4": "63LLBLhB1rijHtNKYr1UBgaDUN5GsFuXg1pikXYucGKnW4d7EMYiX31fcZb8E3a617e9W71h2T3ivyotzT93vaYo",
  "key5": "2ch9Q2Z2Gusw1J7PL7B7kAB6myYS4YJeU6cU7TLXvKcQTEAnqZTfk1qRxzft5gU4U2YaxT23ztTndxx4ZyaPUP7E",
  "key6": "3gyuLUijMqvRKbMwUNyfVvvF6c2aUYVsdxm5dCq2sjw6hygPBeBuzEQHGKkWnoVktmsCGjMfrENv4jNZo8ZAy6vi",
  "key7": "4551RYtATFw9ZGDVJbKoVBkDuqSvxzDRsnNuhTqagC93ioP7JpfTGAPUS6VgsB7JPBXj6Wvt1umafL7shbKHmESx",
  "key8": "5xfKgFRatdTLKwpHNVdG3CPQqWcVp6VJsnySnKXQaASmrin3bMSZEEbx1Fcfqzvi6h4y8vM4tGTZ2EoTCihoTkri",
  "key9": "61EeEJGQ9EH5Df8R3hymM7ygQEJZ7TiCkZHAEjjNu4x6VtFyiBULfJT7RqVof68muhtwo9DGZTiXTxZG3MPJNfG4",
  "key10": "53bNyhyMWBtG2vk8JJdq96JDdHXNRW3yA96KL6jc6Wp7BH3JnzXP91hzxVbRuk3nsGS2aAGwfj7tVy2oDwr6SigL",
  "key11": "2zyLnaxUCy2mLJbN8tZxbv4t8RBYKsPBEqoxZ8iV3i4LEy4Su2etuxEE6tUkfCSMmyjh4kcG3xdNdXqiD2CHWtqh",
  "key12": "3nQuJbZnaNLJzKrfdT5krFLxwDEDb6QFbeSPL9CpaZGsBb5duXYtLMyKUjNbCc2fEYYu5ES6Mm17aaU6gqWmXWby",
  "key13": "5pz2u7mBe6jnyF4bfENu1n22KUjite5tnzfLuCpkPx4L6g8k3136kEFGFqR6rYE7kkvZDxSPTy15k3nez52aEHGA",
  "key14": "JH5buLhvJbA42bVPCmDmP2Mbd12U72b6rGtc53C6ENmap4W7Mb63c1pP8WQ5Yz757KdK97e7pRSD8gEsuhhoEBH",
  "key15": "8yqNFeLYx1xgji9wz2ty2Wj3CUJYKZH6EKgwjXnfLg2vhNGahj8DvWwQZkQU3qM7Wm1zFS749G61VvxM87w5fqy",
  "key16": "3cBD3E3LgRZ5ijNzhLViFsZx3JAY8dAexBPxKmdygjZAn4qWuk24jaKoq3y5UL32kJNMT4PdMyzYLnGKpGYgVriW",
  "key17": "5oLZs2vTDF9H8wpZYGVUdjw4Zm1PQ611TeT5WWosNC5jUs2ghGRdL7xaut72qMzavPoXYz8XpMNRjtbCw2zuvrGi",
  "key18": "2dit9Uc9B5Hje6zgURc5HgbgpkAy5e4XcrRqft6e2g6R1xSDmtyXhtHfwHCrehHYZdi42Sgd6KnXdjRdYdnKuH8Z",
  "key19": "2FSf2r6ZwZwXLXKdS1WpmjptUvxjDCcVQ5h4SVv8TsU6j6ixTfhVJSNomn5Xgmm2z2Aidso1LHm8KfBbuCqqdJA1",
  "key20": "22bRku36HUPsQFjL4Vqa7XoiB3KZj66uSXyY6WstChPSe6PwQajqjq5Pre5znBVGfPzUapwh6F8iFMCVFRd53TxQ",
  "key21": "5RbTQantweooWNvbTriHSmGqKJajBWNDHKdyw2dTGwsZ7NYppkEG4SC7FCyaVgZCPrSfn3mkiaMgjyEAQDLSzu3v",
  "key22": "5pXo8SCn7v62tZFEBwu8f3ahdPoiTvRkqFmN7Fbr4eqBWpduQ4R93tDpH9b99PiG2saEUXq6UFBpd4CHsFcfUvuA",
  "key23": "3nLo3EnNCUmqvHjsAtG2y143N38M8zfQ5HowadVCukQNSXGjQH7yVyPBhfnbcGzsyb8KXWkrw7iqdv31WFcKtFcc",
  "key24": "2oP2CLuxMgRrMxwCmaWeWFkXCVpScv65Szgr6gj9hUEu7NE6sdFs5vazY6pisxDnkN8bksHquWVhTfBFoEVgPRxp",
  "key25": "3hdXRrZWCriS5vwtz7BDeH7HX3gp1fjXWGzchoQud4tNaEKLfkon7YDH8f12REanuNQThgqNkwVZbZjaBQg3WpW7",
  "key26": "2JE72aN3PMFdzoViwzigUFu54Yg5wkpH4uZcAy3udWipPWmt6K5ftFoiNK22HriJN4LD1eNWotSytqpoyTTJ4o42",
  "key27": "3KkN3fh6nydduCsfm7P1ptSB3BpwHB4moazjyd4MVMkeJpScmT5VXrbCfgryYQESrm1JesXxB8TxzATmPFpzyCWD",
  "key28": "xpoPPTAKhkM5QEXxwU3RAGbJxb1HvDLgzPm6EtaaraRv9JHvYETXJAjUNS1epyHwALfUVdycNPQCpzUWp27PaQ6",
  "key29": "51kq4zZesZ5g7uorjconff7driS8si1GeJYepzarbM8wwFZCDx66WavRy6gVS4AwzX9bcuBKXWTn3rjDFTyJ8zwB",
  "key30": "4kvqa3C61aCcc4ZC7QVziB9cnD6aoBHvBtevUPBgtgq2N2jSGWaT2mAvV3rbZb2JXuqYPfvxqxcb5vopDdKTZNEU",
  "key31": "5mVsDGCHzrkMi7u8Wa9AXACjFWYTcU5AWqDWzu323now9DHfZ7KSFDipS7HWgy1ok6xhDFdJmHsmahgL5grziPbu",
  "key32": "5Eb4eRZAoT4os32A4yTVmKhCBVg1G9qZ4Xz9VXwTt2osL7GEYGH5JUCzRqC9zy19cYmfqodJ2QMbttW59JRzb9dd",
  "key33": "2khmAczVRLh7EmiAPdQMQbFN2AoX1v73UcZJYs7cu8YVmgZwuapKET1hi4FUf6jY2MqirkhvVM9g1aGHACfrBXVR",
  "key34": "9EZE3N88G1Z7fNEHNNAbiWF4tfAqaKdCMCANni5unTe3wiFLncXZsgzntjMfgnqHv939bxoBts2z5VhrpjHtJka",
  "key35": "5uaNLvpVYnT5kmnRJnJXBMLsmr8dTJg3cYrp6WkkRKYT2Eh6XrAdqpkiUkCxcJoWPqni4uUNrvGatK7j7rLi36y3",
  "key36": "63RPjzR2uArufXH844BQ9GiuFv5373UxxyvyN39JT1vmP4Tdof9JTPrYrryCuyWUBtjriRiBynFhkeChSfDFDvMj",
  "key37": "2FmupZDXf9Sd3LbGrfX6ZTbNhfJXbfJpzHTFE9PywiGjrrUVWPkpj7vSddJ3ZGGW6fLYzAQJy48GayWivfCVrwzK",
  "key38": "2J2H2cDJtDcUT7QL2fFAcvZ9LRdnQfxAnTHiZW6R7cv5gvUKEayVEjLPPc4uzqZadve8TTbaY2a99eG1LeDXwRbB",
  "key39": "2tKBcnmMF8TuCGu7ksBBgbtHZ5EF9kDkZeEVX7YHCqD8e3pNAMcyr2BmgWw4YRFguiHBKniufEGfQnXaXD76RPtN",
  "key40": "4PcaRgPZzabVLqaPdAnxajFugrEFJ7VbohMzg1VPcrbFxMiMeA23pgpYVNEdqzKPPrpncec59Qv2742ddCNNVKRQ",
  "key41": "3vton4UYNUdyAfcbDrd9nL2xXnsWnyTcJrzP46ysU9NVrKtGLkDcXkhx8DLqCL1T8JLujp8Zd335jyzonqgtMkL2"
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
