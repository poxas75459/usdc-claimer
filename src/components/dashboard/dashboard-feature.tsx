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
    "4mgJv1vkztvPdXrYesqXQiHj2XrbsA27o1y52rhCfCVXRDh9aQFNvzuMxz1DLgqPTdbmkbr8CY6oN1aYL1uapQRU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MgwkbQ78w26ya4GGyVQaPcsghTNh1o2acFc5QtGsFbqnmtM78cRg2JFnfWTHVEteVmteCppK8SEo15oH1JJkeik",
  "key1": "Mb6UUY4VcSMUxit4zqAEibB46oYBwLuEYEjUNqARN9BpnnGrrHr46BvyTyzDooNMWnZ7cZmCwqvoMyuzkz6Rdcc",
  "key2": "89UzekAduPittWzN7ouYikqcD43SKsqqM8hzsbzJZfXF7HRCdVDRgQiWfA9q2ssxzdf9qL59vpzysGtypJbZoyV",
  "key3": "3naTp73auo3xxXVuVH5tWWBVtJzESjsfzkwC8KwRsaxYAd4aV3kmLLzAKxEWLJ2k6B3UwUz9VvbcK7y8MM4t4uZ7",
  "key4": "2AZ6f9vqfoJXGfbtA1HqBsgMvDKAidFFnvCDsCvwDpDSxqYzkWHuFHpXufws5X6vdR5xKpogjtFqrFwuk321VbW5",
  "key5": "47JCdvUd26CiGoTxv4YccyADawYpnSbLZMPDDNYo1NYmPTi9SUkKnv68YHSrApTkqNq2dYhGmP2QSBeyxgcUYrjn",
  "key6": "LLSHkigmX1pgBCcgLt6VZeYftjpacXDQCDE3dPaLvRKMdWiHxKSTMvCBaB19angSa83BTEH5rvxZySeaHQGx7du",
  "key7": "2Pd5i6TmXSyeDbsrLhoJZYzEaKHKFrQtmXEa6bFPsf8Fp8hcP1E8VJBZvejD1qTfdwny4RKfqd6hQpiFY94Mz8DE",
  "key8": "5YnGkYPFPx3g4SEchnZigWmmUC9QmpRwjmTkrSV4tWrdQj5J4WE4EdDbDhq1oBkJfEtVicPU3mgaYn7jf9WD3qav",
  "key9": "5bPK5nfdsesrMLdbs6xa1WU3eRo6zPnbR4JgZ17djwUzJDwenKAX3zEjvUcH66j2jgQaRFkrhA3UbrdZdAYsnD2a",
  "key10": "4giCABhB64WXoRmzBA1aZeuuUgsSp9JXjvSq7RSTNyqGEfLJxYDH5nwXzxrkzUvkhzDTn619VLny63pbWFHCMWdZ",
  "key11": "5khd99cH3GYYPrbPYAcX5MZNgTPkmPwuWNVf1FmGy47VSEAwkZRS1GFethurLh2s22SH81rw8iMPgcdLtZN21ZRH",
  "key12": "5KxBDPBLZRGFRbBMeus8iTAS8KpnPC4cwrjPynXmTjLNJkXAGcL814VdU4THps7sVV7UKETCdjUniVS4aKGBqn5o",
  "key13": "2896BRf8AiTrQ4K3hquugyo18bEEMv455YXcWiucsAMyAB8juAxa9uXtewDHtYMkMpPkVBj7esFe7bk6uHWDPtCC",
  "key14": "2amUQ6phFTgnfWijCbe75g2YByte7mgReDHh3K7BYMeSsH42ZMKEpBtBecWX6NztFCWz1CN9TmqfGM6vwF7kYRzc",
  "key15": "3U4CaUbuqwHDn2sZzdK2QJYDKHNZf1qanXm5uPxZVD42sQTjKfmMcTwzfWR39RkkPzUM1XNeFwwR4dmd9xf6nH4i",
  "key16": "NBgDzT6wjuANaHuooZpE8a7EicGYHwdfZPYpqfwDjrPqWhPkCd6VazA57bEFKTKZMyMAhLGrsXCrmscamQ42Du8",
  "key17": "56Da8uDCeqGq4h5iGE6cho7eMmn6UQnaWKcijAPbm2f9HRiZ3ug91M1HdtMWz84HPYF19jLjeakc4j4EqSJew33U",
  "key18": "2hAQWFLrids1ApWWb8Xd7CPFs6zukz4jNec1qesEfgXtWuj3yxP3qyBvVmrFSFYZowisodbgqc2J4NyRJ8QjJ31P",
  "key19": "5qWYweXP4BdsEUPokVUatrLnGXR1VvQ5LsXoB2T63wEDuPMrRmL8TyuRBLthDUBx2SfyUiygmrTnhJ5QnMSYxg14",
  "key20": "61sQf47ZFjzupK8KjAv3131y9tGTLVGSnmN26aHxPxQkLeJ1JdAGo4oQasNJPcMo3ajiCzx1WLWB36Z624ewGhVh",
  "key21": "4CRoDQTHwnMbezkCigo5tqBJrFdzUBC83mZnSryFHZ8dawDLXVGUF6w9exj93GD8pPVSnR3VLST2x6TR8u8YG9VX",
  "key22": "2ZfRPD8hbCreQ2AzFppo1z9qgMaLe9VsPgvuXswsV7dDSEEzgqBJUWDuxEtx3EyTKVx3AAR75UbGWut1govd95K",
  "key23": "3WF7MmrQhCSCdvTf9kz4RSSSfhzmssi6VnQ6NqwFqiKVX8jEfwWDqZQnbXmFn171URytbGJ5EHsJFyqAA8U1YrsS",
  "key24": "2P3z8xP4VWa641ZK5L2uViX1eb1Q4DzjnVi1gKFs7drQMr3ZL47Ap9KM6cKYwJM9KqBRPJgB7Y2Tqgg7vNLaiHM",
  "key25": "41dYQTC65ZQwJsM2Wsd9Fg8dZt333W5YrEfZTGkkpUDj7BV1sfRhTnJrpBZCq6XAkweCgqJQoqbWiHMdA945ezSa",
  "key26": "yEpcmqtnU4KvfnPAGUWTA7rcRHdTbDQZirG8iLpX1ShWz517D9zvziArvCFNeACCiJc9xE9CjRLapPgjqEXXHAb",
  "key27": "2ftimeNGwVScq6XenBJy3gJZRFBc14ipgEx5eogCCcpjg3cX6uAowXimQ4A7oLraCk1vXRJwVMti3vbESc5sfgkq",
  "key28": "242QsiAvXWCAobFpj5U2f4F9Vci1zKxdL1mdkvwd2AjwCnaWKZisZgCJyhFiRrdkpcEPTf8biZGMaEuaisgaZcMf",
  "key29": "5gpmvajkn1gDaMBtS3d2dUDZBgdRV9dYgmaqUEttrpQhNfJnhqff9fDbbrsSQyK5jXwu4o1usyXgVCZXJtdbQc1W",
  "key30": "4ejmWLaZSp19ybusJNY3DhUngGSi1AtWds7tJmfWZbS7kMTtJQXb7GHYHJpK6Fyn9omowbqFYAVaqaxAbBCzWKVJ",
  "key31": "2yJQSKuKPMhvLPKex9LXDb8zWj4t1mrnJDcu9EvcyEzPvqFbwvXtD1z7j2Jkc4xUiDabDMdrYkxpnABeGiW1FQUf",
  "key32": "3JpNwdgRUxg4Ls4oWwYQmqUAwn8hKHZywAv8xBBZt2eLZW2XLFp6qgqV3KUY5QYp1uLW24q39svbxv1ynZUqHp53",
  "key33": "5qJqYZ6fMrptAkpDMRuAsGVdTz9gpJNqCiiVufbZC7YPBTeZMNGapfLCJo6TZ72vVHrNSw4wsKs6Un3QFJh3U697",
  "key34": "5CQDmg8QWs6HY37s487JY92cXLVNB91RxrUpxvL3VNhzj5yu1qR84anzgELPUmYgGmGLdSAdyCuEsWLtwqu3SRRR",
  "key35": "7B4sYKDZMdfWH6e1mHuzmEGiH5ixJKBgJ64VyEYj6o5LVnQHPwz9tW3eTkQ31TdEfRNdKrTnkxSroq4XnS7oHT6",
  "key36": "4gXBnzAVJHzTFsjo68b6rXEt63Z79KPwJ9BRhB1QCmC8T42DKps68Mh8zeEcaxtGfiDmZzM2ESb7B5NwA3FDKghx",
  "key37": "2JrB2osHjM88TFa34xJ69ZoH38sZE9n3pL3vmy4cFrxJaMFxbYMoch9mJZ6LseUbAasvR6krWeqBSnBBoNaBTEZN",
  "key38": "41jdHrGPmpvaRh1bZnkkpSRF5UVsg3aKJa7UXJQbY86n1w4YeQsTj9aUdbKnoNZUkfgpGZN46C9Tu5LWoTZrWPiS",
  "key39": "fKmpdudyrJi5Aj6vyiifUZGbwuuMBTnovVRgqXyreXNzSptnSPCgBFPb7K8aQnCr4XcBBaqtCfZXvU3dtL1ERhq",
  "key40": "36awiGcF1pq5yejE33aFguxZ6GwaBxPAAfEy227J8JsQHT63LQYHWxAUvrY3iGrim6L8BLY1Z4gMGJ5zxPrFstDP",
  "key41": "4RKuNQxRa99GLopwyM4vsxnZVaapTj54Pi6Wsb13vWWAYxaQjyiooCitGX3Ng4AG2mfKiYUMUQ5XXCd5NcPFyTJb",
  "key42": "5fhmTqfU3Fk3aizB6tBXtpi4xPcTMKLUFXQ7ykgbLZUchymhTQnZnEqJqFH9c39d46ezXvkofpWhfnsPv42kWzNQ",
  "key43": "2WznUZQsAECqnMTSXTUsNArdGAupR3Rv498U3vruRLwGZowNnrD2yzHFx11Uz2JqG93EBPyy6nb79N2hD66wRgV7"
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
