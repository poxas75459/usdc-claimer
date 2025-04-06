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
    "YgBkJCZJxiv137vcE1D3gy3neR58cXJYe1YsMb7NBLVUedcjgyrvt5r5eTnMbuTQnkqnkwt7awYEYVZeSZRQab2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CM7HsUY8GoqbLBVigqeibnwFn1w3nMhJwBT65NkJLDyTH2W7eiGiRDKMEiuVRbZYZmJMJHKjGaFHpNQzmKop5u2",
  "key1": "3oGwLWUwdGFVquYYvXyGVRhKzHG7npKedXKhiaWYEmHj1kpjSTxqFn2AcZdRafZdavBUHDGpXxbizYWZCMsJGiDi",
  "key2": "KFEX5TUgwpyNg9dvKEGXTKWMZrRTue1jGwW7aTLSoFPcURxnVF95vWBnLj9k6D1hCQGfB2dXczyBHN46MVcuF4P",
  "key3": "3Y1oLfhjZwL8CBjQywz39pQN2VQbNym7GVUJagmXQmtifDrB2nTySYZAUrxmEe7T7PC9CivoWvXM5tKBHBJ4xqi1",
  "key4": "4EHDy8faypwNxt3TqJgosoAWHoWfRpZ6fad13p9BkX9wqg8XBEDLVV6B1aPVveHbmLyjLbM7Bs1B9kizyo7c2fkb",
  "key5": "31tU6NZaXRAas7r68e1iHMMcHXUU93iWaXe2iPZqef6JYVGiUo4pwB9edbugSo3ZdexS2a4noN2u2EtPTbnfSHLA",
  "key6": "3WMD4eBCnzLCnramwH6GSZSQwqXso4CHjgJUpmKFoae7MzpFhZtJCn2fnzM2LeMt7PhPKJ14ftUwyDteZ1BPPYXE",
  "key7": "ixpxEQP2oEBLRJ2XyjJf1rbWX1R1D1AKRFX4EMwXPaQALR5jjEtu4XQ9XeWGbgWB6oRZ4K5KTBu8DyWVMpcEjYP",
  "key8": "o36b4E9AWKj51RUgH3w1uce2fUU28Y84c4W178qtD5u9qdEgyy9icZSKNUPSuwY87JBL3nEQLmfYCWp3wn4MBPC",
  "key9": "5fQCnX9kAfqXnkhfc7uxz7QXXEqh6xaStdJf389qnnnK9YcE2nrN6KJhmwKpWqDfoA426MST1y5BYPpvfES4VGXe",
  "key10": "4KioCyEkNWsViLSiycbyEYzxczBEXHDgHocSefoCjqFZtzStxAEf1EJbouJr9z7udp3XSXKHhiHX5nFxvixVAzCw",
  "key11": "21GQUkxuYchyg4tG42Z8KJsXNBRDDPvsiMaoJNia147SVoxFaJE5PcXVrciLrMf9gBSLrStYjcjJa42mFAKhcFRU",
  "key12": "4Yuz8gzgR1yYw8ZSz4wxjpPMRr4K2oLutMYvi5jnfqz53io335gbJwaNEyn4AEFTsAznsmDZ32JLtkNPShtozNRz",
  "key13": "1EQkTfru6iU6i3RsaWPf5wwv7xpzvUpUpdKBvpGJ1n1Eo4mNpcUVWybsxYwzPTAjFcDqHvaaX7oeiEaERdwd5TC",
  "key14": "2iyQoEn3P6hchdRBqjbj6v5Tn9gWdaJjYFgtKwbHTteJ6HXB7pv38rZ76e8fbRuKVzwpF7MozCBAnAjGi83LLFjr",
  "key15": "36gqf5rPs7ZAH7UUgH1Hzxf8y3gq5my1PbViBqVRnMT2tZdGGndW8o4QwvuRLUUhEzDRHuBrf7Aeq5DedZ36XK16",
  "key16": "WxeHVVK6PA2B4gjQpGjjaFMDuusvfuBR5FyXLGndC2D2uVCRobt375NEzt8F9bvdodWNv1LHbZ8NpADdXvnXkcu",
  "key17": "CaSUUJVMVRDri1JssyyvLRLQ5YVvaJ3zkmsm2whPPx1SS93iyX5wrEjkGPHNNpvQyDLJiRBjq6TpqUiVztAou6P",
  "key18": "3xabKexfRFGwNTKaF1C3xDmtBwmoBhxfQhopioMQiL2CrPqwVcWVw8zrB9sc4YLxx6eudAq3LQ6uE7TsxSGYFvu4",
  "key19": "jV8YkorxpGYxE9FiR3EURbuHc9HnHeFUVx73gWvzSvY71nB8AswtQovEuwKpFvCavKkzxgXxeruHw5XpAZSXX9r",
  "key20": "2JBqiRH86KCsgrZMuxd75JmQbFJXfAdVZ9RSsegVgcpU41RNQyWAY5j99JNkaovMLZfnRLwrShJKtksHcit8DTb8",
  "key21": "3AebsQFNfdh45QpGchBNUuJe79rSKBW3Xvj9ocuWg52534LCfaGCLCJQbY22u8Yqwi4ogUVzohNiGpg4jeFxq1tK",
  "key22": "3X43ypby4Dn9FMdFGdvshg5Li6vn951VGw99Hy6R1aqpHZZbkoG3gUSwUDdeuNQP6HH2RqyGHvFQhYVrUHw3WcCe",
  "key23": "Syur4poAq3jNSGubPufst6atPRW6euLvkSXrqJG9XfQLUyFUs3XvfUJCXszw3Djai2TFBDNUVB9WDphe4n3Ffzv",
  "key24": "5rEhezgHAT9YLPmTLkMbtBM5ntMHBaaLmJYooYUusG3oKsyYt5HUeCKFfCFkiFBSdDwnensPwoNcTDkGScq8QWa3",
  "key25": "3HcStHpGFMhMLLMWTVGPRHzh1UNswuTa3gyPZVC1k2FF95rrbxS1j1JtW7TtoebzAQDu3oGratTvcqcgGnV5dBrJ",
  "key26": "3y4ifih7JsWaavoJFPn5zycJv9iXo7XzuTFjQH7STMaTJMoh3xNGLSMAKbuFujqbVypZwXUtjL94yywKHPAsuURP",
  "key27": "zUNXsPsiLSu6YJiSuhHtdjvV5XE66YCnQh1CifiYs2ef1EH7G7Vm91mY9GpGGpfm2nm5oMtpt5cYH8e7bkNPLxa",
  "key28": "5NjUUfy55GwjtSzmENvwU2ochfZzV9yFj4QAfrsRM85GC3WTsrJri3GXpn2Fb8mhwQRykTaHAEnEgxvb16qTUGMC",
  "key29": "5F7tUu7r7oTwPSaXgAQfwhzbpML8W544euwVqNkYQhpcjYgqN1DQwwpCFudcNLnm4JbKKx7ZQLnSPAvMuqJpMivg",
  "key30": "5EcnZ4kXtSet1EHZz2JwSks3kJrjmWnyNdJKkoUidezRPEdJmHQ3BBK9KAyziiWaE8mXyvrYvcunjaGdPAFKk8R7",
  "key31": "4Fx5j8i1rwtuUooKkJXqscXpCd298kUCQgf2j9PMSfLXWajjb1B9qVGwG7c4G6oDnPGqNx23USdQZ8hqtuAf5Yqd",
  "key32": "49zWjPceW62anYLCbCPknU2rTHZsJopHPaq5Fq7SJPRTrFKtPnNMdnhpuoNHdW3RpVPZ5iX2oSmfo63yEmVDkHHk",
  "key33": "5trgQodKE5umcgdCcCveaBSgnNS5AD2TDGasHGYMtaj36fHrowi7R5pfeJ5P93GLmNc4o4Je6XS93D2Ax1vVPyWb",
  "key34": "3ZGVLw449q6ur67kjVommoMvGXPXJcKL2j2eaCvYcqq3PCAavRHcKiuEQKJvSDiNt7ce9ppt1zatafYmTw9XBdSr",
  "key35": "3fj8Jp2ye45X9uET744f5Sqvwaw5bJBFAVDzaz2JUzq56C3RsTSmx1K2aPAeD4onwja4q2gHoePGgAvZw7STofay",
  "key36": "4RsNKB4tYAWyZ4cbwRk8DCdKM5RBUo2faRWXbRRmgCHMNEECUVjupBSzfADiHHy7rusqaoiAqaF5DJrNp2SrM8Gk",
  "key37": "3VLioTqYoVeckubZSkVdXoMcVct57P4nB565zQSrHuujwCJBimttGSMBhoo83WPgb8qhvfyEALt8mEpWaA6UH6E7",
  "key38": "4V8APUqp6WGkJw1RzanV18y7X1DpRGmhWMSis3Ht1hLouvhp5fsPVBoLqy8A9NxLfe3oz6pLgWYmeeHkWv9NPGkd",
  "key39": "2cLgp1TGEnU9D4McYYJMSpc15bjhwP6LDEme7USNtJbig6YtKvaVRrUeWSd1ZQkSFFUm9j3wdepmrgB1xeWTSJzJ"
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
