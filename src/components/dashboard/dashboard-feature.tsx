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
    "2aXYweFDuaJ7p8HxA26YNGSNe4hja87LtgZwg8Mg2AWuTYD7gSREA3oUs2eDpPQUjy8DUqsDSrRc8x1bPGpT9Nua"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DuaKNEnV6jaSNKiE4Jy5iejoMfE6Ay26hw6rHDbdiNFFiUfAr5Cf5G8Ka5sb1V2KRnKGrTkrGjeWN7EHNuwpYJN",
  "key1": "hweuigjnbKYpijg9DLRJnM9RLsPLWskcrwd84tiKDZWc9UJKDB5KZ8XXU6jo9TGdSEFw71YpJs9qT8Vq4oMMWSk",
  "key2": "3HrPfrZ9yK4jbPgg6VUXixurHzGSSCBsr5wZwy9tVcf4YNYgwPtXenxc1Bj9DwZXehKwZeq8tfrEfh59RMQVkL59",
  "key3": "3271TwyWbvTmaA1eKS2rM9FLZ6BQwvKvH6f7YaNEk7H8GF8Z75mFAAr5fVSh7xLgjM71B24Ed4DEN4yUYPJTSS5Z",
  "key4": "2eGp3g6gX3T9vKBjVqZvBu3hF8iZF5JHuh5cpMAiF3u4rAKWHPWqmHipGMAGQZVA6YHs8Xqo8K93Fsj2of91UwNn",
  "key5": "23QyCsvzyKwHHrgRL82DfsZbqzmgfE5wtkxJMSwBEo5jbHoL7v4orgk1QtPxhCaEu1oJ3Ww7x33PnbNwDa882aLb",
  "key6": "25aES9128a13Lrf1bSDoC9dmx5EgkxqAoHVJeBdxuHjUs9R37dMMCqmgGJVqMhztSVrWMyJsWrwosKrixXJfoJ8T",
  "key7": "64pDKBhqCEcLpBk3K2EB5Z9e1MRyuViPCrWHMyfUdSwB7557oZcGh1Yq9erR8dFTSqaJbJSPhJprVjSUGxAK49V",
  "key8": "2miRWy3aUXF9i1apwytNPDi2wbRChsXuYN9HDStoBZjkbnBV1b75NUeeXfE8zdqdYGuJKWgF3S6ENaKnJxVwq1Sq",
  "key9": "3xUtteqh4cb3SSQMpX4deci7unCP8aJ8rMnnzkjfTdLPR8uP6ZwdfR7ueNRrM8YKscDfmwZ94WZcngsqfpM923JM",
  "key10": "41zzTwHUX2UQVmYJMQY255tQM4f1iBCFm2BUftHcehkeWch6pTmGHLzKuky4pGPdUXYwhGAuVhkxRzj63ZcF1ts9",
  "key11": "5Me7EYcSog6CJGv4dzJPcR8fm2s8oDGX9diPiG6CCqKamp87iXcEacKwiuwfSkC7Yssh1PpfbMaxSvN6Nvw72VmX",
  "key12": "3BZk5Zd5SViRDGyMYzWAXECqEWgSj5QMrWe8Ggsjd9Et4TStq5AzcAkcKpf2D6NyHTAfhhGkJvd12S6MLAf4E8BA",
  "key13": "4K4z53vjAM5KGCt8R8KqzYNGLcc3X1UgnF8Rky8o7ezHczEH6WxnfqkMD9gciYMpbequMcTXNzyKC54TFaGTRnHt",
  "key14": "51EQf9YGuDKwkTYLoqLqkJ1779Q21pogYnNgUWAT54bXQ9t35suaEj9XUrcdrFCAgdA94KB1SS78t5TsxwMFnroN",
  "key15": "5GCWMY4fFZCE5iSQ4T1yMDcjoszJvzP49todiv7w3b85ymbYgzPShyYyvgHLxbNNZDn2RrCoufzN6JEccM6kX4NP",
  "key16": "5jXc7Lp7UMtwbHCFrmnrUNZWNYZcByvtHV3Y2V4dSEVmKqaCA5qhjLWz623JfwSsaWxTszxW48XLnnauNQWFsD6M",
  "key17": "2WrSbxK2gqTgEdqXWSedjkQFCTzBX7dbXwVtyAzkcw2GQ4zJH2QMCiFimnnziqX5sRYEdhiRcxkR3DXHY7q4ei5f",
  "key18": "2ME5DThxqgaaQDa81sEskZh7USTw4pop6rADJzv6Ggm5CjVGiwbpNFSky25yqGNUZ3957AqLMXT96Lf7c86GdHpQ",
  "key19": "4LKUvjrhK9zxSTnoUCN3L2TK89yF7prRGxetA8wuzfLsqAPK6xKoZJ3qLHRsZ3T6c5xtgJmiJnNh7CJMtoFgBQ1K",
  "key20": "nDWsck12v6ENeFW84tG2xrEbT3zoCTnPiduTvRaz2AzhyoGS3nufXqspfSAMvWRzVcDGPagFV6orf2WwRh52Bc9",
  "key21": "5AFXeViuLmEGk2yD8AastkfzDM5QBWa11wS2dr6Bhi52gX93KwrZ1DKLTGH3rteQYL2oz6Jq3pMrVwbv4brSssKZ",
  "key22": "xXx2R6HbDqdNANCFxJ7A2FFqtWYH2H2cXCwyFDqvCJFrC2y3BZhZDa6fF5Mqk9AMUMsqLJFBq6AkYyxf5wyBZUR",
  "key23": "3QDoMFHGy3jiEMaNufcv3wkqYe2cXvevp9KV4nQwcSuFMdFa36BkKU7Gnv6dRv8zXK8BaTgC9pp56KcdrsemsEab",
  "key24": "5MqxmX6Pf3jTgGB9QaCh5fWrWJNWpqqNERCRnXYnCjcWcFUTh7YhN9mwbFycU5g1tWB7QaDcDPDCGPTbztZnVUdC",
  "key25": "5SkZuxDVdMEYuSZa8614c97AkZ4VwCyEVX8azkbRxZNKcg23aHQxBMJ8rhEay4sTQasdt93DVmZ7NpoX6UPZRXv6",
  "key26": "4eurrxBhfL5NJ4iEQGVs2fjoj71qCKQXv7KFAwfCJuJva5jzEYkJDEnC4V3xBLw9nJG8yGCQSFjj6GC5VgFm6PaK",
  "key27": "TNbzGRauiTnYzVMFVZ51W9SNvoLFCdQnAbGYNJbGYke5PYtroTqFB3RMBYZpwnnvS3wfWJpZPeDKQUXtPtETeNz",
  "key28": "3aGxBckoyVQg7B35C3wU5EFoyUqpmFVKB57yh1SrrohDoAu7ssk4jrojVqCmUZj5fG8pmTji3h1Uh9JmF7M4ZVhA",
  "key29": "4oADFf7taSxVe45rg9vskvQpCAtfkiocm6TksxAHg9DBeaLAHNTQ9wXcjLXn8eY91MbDVXRuw2ezVsdRYQSuhJDF",
  "key30": "qahK98ywfySppLhGsSBD5bPeLGMQuhu1nMjyLoLoqQ9wenHqhtiBUWeN6xTEBmsuc6j5vemMHoDRFXkbQDZ2CTy",
  "key31": "ThMiGFrcyU5uAVkKKCw4CnNEPW3W2jfN3KfTUUwEFbC2s3BDaZvyZLKAPBLMyZ2xo5SnkfqjVUVydfnCCdKMQtS",
  "key32": "3xDxBut9GAV2v5Qw9JsPThjvNvoC2qCUANLxzXonmJfgPNKs3hDzxUEuDjSEWcZKmmsBmubCEttNX4iwg2axGUZj",
  "key33": "6562eqzQUtutXBY67UYjbALwy4dAFX2jd2X1WbsyTvgW79r7Zs16TixsWmGX6fhyLgo9FiTu4ugY9bWYpGhqJboi",
  "key34": "4XD1iC4Lhhst29dYjcuynRVq4Zvw2HFo1wsDQtKJizJyqL3arxAAM3dtMuJ7NUvKHfzLTUki6udFZEVL6JEpZ2Mr",
  "key35": "3WsUZ3TvE9vbvq2iBAuzGuZtxeDuwUEhyEF9vE9ZgZ9hB63MWdJdWMXe6nkqQWQpyZfeFYn76nbYX5onw6DcgixC",
  "key36": "GJDY4Cmqbrd1pgYBMRAehhm8AdP8CAKgEtuuuLbxhcTCD2oPN7R5L1n7CPQ5gtX8jtXDMYyvx2ousR7dxUrsPGp",
  "key37": "ax8HbNDHKYv2KkfzLQQ3FUmnaR1H7mrSv8ehy4eQEpojNwSkfz1rMPBpxprSKAE8ukxBkUBvdTpthn3TzxrnEn4",
  "key38": "28W3Lpiu45YHETW3zA2qqcMW4FKPyqorPmspdnvYNEcTKJhZKWwz7pe5VbGzzVYxmsCGeoUJR7BBRrdCSztDvKGf",
  "key39": "28Gn4QwMEuPam1GRG1v15gAGQwQgdQnSQpzrfeRiDjcjhN86kHfgQLguWEF7rNSwCiSZwH6F4TxFN9xEFLXVDReX",
  "key40": "3Fyne61DGgzam5EL4xKPQsMyKo5Mpp6pmpbSMtW7SknXUfDJiTeGUSXSU4z45J5bop7QbWrdvbw6g2b3yXLUEQ6k",
  "key41": "nvXPnvzugV19g1VxHVUhHCymAvK3wusp7DfgHLddbZjiWDvD6RTd7Xuh1Q8bta3TM7hH4B1wdmtbqLX58LXwcuh",
  "key42": "hudN2QkVubnJYbTDZSoDEdZHfgSe3A8TjPat3wasKLvdRnWuawnh3j9rZWVMecTJUbN7Jn4Y7h5iCbPt2Yz5paT",
  "key43": "46y7Dkqq9UTxQ4H9hSj8oFRn6zbZ8MTwSqn23JsUW8qSyAT3uq5gJTVLkEkFJsWR4NxNJwE7y7AKRRBeYnm3wRee",
  "key44": "3Lxm8qUG2WALYbt1EmB3Lzeb7Tq8fdBgaBEcC3YNXJEpabdyHWdW1vMZTRnsPsyCmRwQNfcVr44N18iRYCF5qkuA",
  "key45": "2pb2BuTCX23JQBe6NVRBm2YPvCSJS4byD5vGYiEqpULG57DGbzMWiCBpy3jzYP3MaYUSMEH7RJrXcHJbC4jFLsik",
  "key46": "2YJUC5e84c5UxVyCpb1SWhr2EU685JstahoY5hS8qvKdWxzPeYP1TqidvHKvH5fW6L22xUGE4dXGeRPjUUDCxdWd",
  "key47": "4vGdhsWV4i5etVWAxcd3Ku3b3xSSDAn83yub9nwneA2MqYx2D5Jt4kgpr8afjk1qijCdUn9yDC1WmLXibCmriyC2"
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
