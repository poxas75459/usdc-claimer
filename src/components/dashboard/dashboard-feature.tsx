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
    "2TBW6hEnTv5Cw1eHzeL1zxbDY833fXnADb9v2KAJ6G7NJvw49FFQBAskyL4H79tiBiMjsrXM5ix17me7S1z215pw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JRYXde8NzURitD2bhbokzPDnGYyF2stSJibNTbCyYGFkiWLh86xSTezBc73vHtZj1DZ5UQAigCYpJS8hDVapQjw",
  "key1": "2V3a3K7FLQttxYjTL37TW5V6xdEeRg5qDV677amX9nf1n9vhW58CSpw37iZHcCjA5Uhe161vmH4KFfPdZdA7UZgJ",
  "key2": "39BYHeRUutrgUL7hgFPCVgVeLcynkGNnWAYjfwqLAw8ApVHdmJe58v8hAGG1Q37PRyds1eeobUBAzPkww7ZGnaPM",
  "key3": "C4X6TXtY4Q9p6oAMhw7N9B5EHgKPUfLuZ2kuogH6idxWQDt9SJgAZhRCQoutZFAHGbBMF428M86TkAcmZusbLyf",
  "key4": "4BmMMr7KAdhAx7ax3zTaNyjBxgdxKVU8AtFbSiDJdAoH8Cs2pBAXNsgPUoJQ2CfaBA1Q8WRFKAGZJ7gvCB2GgVkw",
  "key5": "46tjFMg71Tzi9aGz7Vm1o9J2eQg2AKTmQ2H5PLJL7MNVHgRzA5LQe45wPqK9cTBHBqfy7h8wz4ztxwPiR2gXBZ7C",
  "key6": "5Dw23iWpcEHprMZoj3tGUhC5n3ocrk1idnZxG22aWH3K8Jm7abT6DCChNQ9DWZdneS9YxTjquks5Qw9eAJW8rG5f",
  "key7": "5Ctuy7WHG9j15vxgHWUvALC2gH4o5dotTTterZeZ8mhi5REu9KxTcZS19hz5Qa5hWyTSoR3witRN4VXZMKPyTUni",
  "key8": "5TNd3rPYCV5g7EVNTU9NyNnM4i8ucMvRThaDNdQQ1pXtQnyVbyjEJVk2v9i4aFQ4VmWq23cBKdExCgeWL7eNdwBD",
  "key9": "WAfMErky7nZ2LyLkAW5nG3CboA5EpEF7f5oQu1PPCCBFboEXS1Hbz6WJfkK7knZLnH4VvWrrNRWyFedWs9iELxv",
  "key10": "3zFhMWZsxvZ4L9HWC6f3rPnPS74MYcThXMvYGc86dD6xcECuckgAFN8WbwqURcoZaYzPgd8uoVxi7HxYiq839B4e",
  "key11": "U9fY9UfwTFHpJVdFQS84jBg3YApaW7esMRDkKprp5m3BeAaSqhkYKVweMukDJmCtrnyaQw7wCTi2bRVrwLjgGgh",
  "key12": "42GHETKjKdtdJnQP8dXbZ721poZpj8zZ1JN75wvaYYGxzqqjDRKYNJ4GDzyUpEhM9bQP2F3sJG9BHtB3649wANUV",
  "key13": "3Uz3Qs64Sis8yGBFMkNDAGK1jUSrTDdTtRiJY6q23tQaYQcxtbQ9BgdvFqwvPReiUJ3nfmGX3tkJn4BP2uWP1Wd7",
  "key14": "3iUK82qAxdZ9YxiPdpbUJmsMDJX2oPxU36B6d9Wh1okgqjNQJo4p24sviygngdRKQ53KiUyhpHDmYQJT5jCrKEKz",
  "key15": "j4eoFMS5fP7enqH4awjJ92dwp2nFuVrFQ8rxgqQ8pbDaBG7Kho1Mzz1BAFUXza2z9koe9qGx4euvvUL3pV3SPcB",
  "key16": "2zTu3TXBToCuFjKsBPhoqLyWepok1V8E926RU1RyTpdfj1cD2goxTNW94LJeurLAeARF9nn973uxrnMc3qxm25cU",
  "key17": "2PrxcPbhKjHdzDTCG4a6u5GoVVmaf6MKE4UR3vR37duH2owAN1DuQjjKukHE1FN2JqCj3esv2S3dYW8qFDYm2gUW",
  "key18": "38W3Q5LJpiBRkGXDGdr81eoczi5z6NnkaLtRX5TGXD1e8zq7wWso9r6yAacFwwVFyu3We53B3UpgKkeerdJoyCba",
  "key19": "5eVcWrC2yPKhUP3HnyVW9oiNjQkpG2FfM1HxJLmR7em7WJqze9UKf8Rei7VwkQFnGvZabNqtMwyGjMFRpw14eMT5",
  "key20": "NUsCZ4XXoRwC1oshRUXzGtDBqyBcohDzvEw6TebmBA9iqChGqjQfB37Jf8U45fyRkw39fSMmGpgJABBYjscTpbu",
  "key21": "FiXrCVEd95KanZRbxWmWwVPT4ZoneqiyySbJM7XMjBxSAi6yAujnt3UndodQ6GNfQA7kehGQYbvSMUhyiQqAsmc",
  "key22": "4sNYMjTaL6LQHYMhv2Rhk3MKDExdpLGvkrmUJnZqM96AW6aJBQkZZqyx3XWNXiGncPUgGScq3CUe512ocNxopXPJ",
  "key23": "2iDNJdgau7e9iLhXsJMrQvPWZM6yoxsQthAFscUeqnWPB4VQZ6bxiDyAb37r5MNdFfiAsNfWGJmoN11a3CDaGi7C",
  "key24": "2NxtKNCkDjTjpkvnJW2XhdBp2SXdnbtCTgLcrxviHBi6oqsWA1U268RhHP7YQknwRwRrFFv9b3bGNvcxP4YhDmsX",
  "key25": "jr317Gat98meJuhhsMJGK2ev6BfhUocbWcK9zKkqsMZAXdqpi2HhnxCU6ghTeczaYGtkXR8Rh6Xq2qNTWtcD8i6",
  "key26": "4NBTKfmrh87p7c52foWMydyctUd9dsfrQfD8KHTJZQ1jXh12waBFk8UGFd6BkdWrJ4QSKNsU676SzyApxTMyVSFG",
  "key27": "4ydPTtf4cxQj6frA59WTA4yvNqo7Rh2acix7jQrmjTbCXsLDBSbTNs5xvm7FKMXB7VZwZVJQbWpjsos66hcjaVcR",
  "key28": "3TZtcJnihhghAkCLoWMUDFubZPZkUdDb4fzdQrFVk2XUFpX8FqkCkWHndSWnHM954HovsNDcLYGV5B6bXDsW59E4",
  "key29": "55WYJJjxd36bpmB5R6Vx7oDFgxRFJnc1x1xg257MMbjjgru5scZcD4ZPpEdTbk8rhwZgfoGyrJsxLgByX4MHSCUs",
  "key30": "3h6k8jd5D78JtxMYD5VvBA1kPp78CoVnYr7KYqc797YuF8YpDWdLPUXWb6BX7MG454wefyEikufXeiM2sBBazYNo",
  "key31": "m3o8da1HUncXYrKfmyvvicFsaRUAQH5TYuTczBTcw4B8Eq1gARercvWhtGZpa4vUirQcmUbU33oU3Q3WUvYfJZL",
  "key32": "ZLCh2ozfxKigK1stbNot52JmQr6KP3RNybBhk1bRXu4PmH7Jy5Ycm1EJYg3SrreibB1SixuA8FYnNZH4mZh9WRE",
  "key33": "5mMuMeaJnbcnb8HR5tSH3WHn4uN4oNbkzmUNkFvMX7oF193CtaYiobGy9shrjhnRWNK172eeaHsoiCkDCpivJmgs",
  "key34": "3ED2FiqqogAe3qQUHr27nwAiH5wREjxGrznqEgPVcPbUxkzLBZJfQu8b8seAPYAABoJP1e6AxuZcVtUVRdrxiMs7",
  "key35": "3FdFs6GBqbRjtiz6ZPr8e3NMQBfEmEuyJ28EXeaznsCUWqdTCvUPxDwr4RFio8bHDm64dkav9DdayQwaUPzEKWT1",
  "key36": "wecvFx8jSxvUGfiFEXonLWr1A8oshYVJPAubgXxuYY6bYyp9vmgBmGPJGnZFQ2gNptxvvWi4u33jeJCQ3i1uDmz",
  "key37": "33e8HnHBkc1dBNeiBvCzBAKvwRZ45qiwife1TGpP5zf64hWsFYTrWyYLMXpDgC1RHp64oCkCA39ABjGehHz5mbNu",
  "key38": "3LPKtRGWbb8neMSuKUZwkMGYQtKhtVtGCYbv3C5pYi5W9LDzgXTQPMQ5t7f3DmfbVfPGUwyWP6H3doAMqHvDi1Ni",
  "key39": "2eCxSMYjFuSgV4JfyinF8MQEMEvxPF6irmZi2qFG3uPmwFwoKL7FrBT7ZGnjYPPGCXBYQFuvnD9wWXdzQVny9MVS",
  "key40": "5hN41HsN2LYnNJFWEJ5cMZfQcGh1zLpbCkiFp9krGMjLwpYmEpP6aon68HHwPGALhqrqMVBejVWQo2XjuBYst1P6",
  "key41": "5EyqpEbWn5xSJkczgLgPwW3Xp8fVn534LqyQNbWPmp8sH1oPe9Dm6XfxHrnUgHpCGBm35vsFPLBHEkuSw7DtNvJn",
  "key42": "4wQhP2YUEVXX4XF1cuoLSeDTRG7YVL5RVwwhimvP74J2R6DR8Q2fzERZ87yUVPBBPp1fvcSZor2GaYJ7zH7SR1BN",
  "key43": "3ddeHBzfH6sF8xnmvnjTsVv2wgKN2RL1MbdWwNZgzw3U6ShwcU6MEjK9SNxixJnunoMsiPhX1GN2kwizTbpUkB9p",
  "key44": "5nPZ1p8kHiprhwBFjVeSB9hs55aSszmSynfVpzqynvh8gyzp9nSExEfni1RWSQFC8dwLT55AJCbXySh6mq1fELKQ",
  "key45": "289FrtPDXxnDzM6fKNesKzmJVvFGSaeyViBA8SusHQMCrjd36g7Y47jG87uNLuUHnefARk1vEC6z1pB4gACR7tFZ",
  "key46": "5rDVGCYvrGTduGPaYQSLztL54BKgHg34eR7oVsMaQpMELLjf8xo4GAJvcWAv9xvNcNcsz89hCheS7Q7un4pMXJrR",
  "key47": "5MxhJDbophGqMrCPUqn9jEDoF3BW9dJ6RdPMDcMmvz2tuPqxhaBZqN4SjyCCN9Kkbt8EjZGmY66q5sJD2ZWcqKvY",
  "key48": "2AjZfEB4UkyNANZfqDbU1SvZkLwq98JdX6vs5AXYRUwJw3vtBgmYPU6emR699nxYUUj3dgzNDwW7tMyPKfmk6Ax2",
  "key49": "2Eqx65ezXV1gi81DaSd25AAD9FJZyXk55gZPQ4hDiNd36woqx4UdiNJBNJSehMiMmARx5Mr5d8tMngsLH7qhfKfc"
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
