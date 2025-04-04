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
    "3pRPVk3c4mgKKqzJtfPvwn6nmKhd3FoGBpPuUGzTzZUQWY24omAP4gNoJHvFwGQweGnSPwuEJ59i7wePeNGt6GSE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5G5C2SeDXngQUeHmzqHL563moUbV7a4doSxoNwyyZiK5wegzwE6SUEyJhhgfQLZBges1KFjDDdwwP3ov6NQJkVvR",
  "key1": "7XWpHC121CcSTHtoLmnUePnkGHBqZ3m35kPNXLpkXwZVSZZfYtjcT4dSkj6DV4YVQEqUdTLFmtTNkFk81TpkAdn",
  "key2": "5cZFyHPPRxstyr1LjCZZMkCaToaLqJ5BgmJQSMMR3ShqYG7jrmpdTAWJnrVEg5RKcZCDf1HdrofTyxwcnfrLTkqs",
  "key3": "3JUBJegpKbP1sNTqY4PWELaqjXghBbHft9RWyziyUr6DtZfWPcyTf8zT5YeusDyhLXdeCcBJPpzqeDKP6QRpCt81",
  "key4": "2K4hiFzS5rhiQFCdEG9XYHL4giHjHB78hoD1H9hikH6ms2HwMfocwAyexYi5BWjeji4RCywT8FRi2ae1gWh2Z7AD",
  "key5": "N1rThk3JaYW97DNKKVsiqDDdJNRPSBeBRfZif18QVAJ7MSyVPmbSow6n8GvQARqozePDjc2EX2BchRUj22XQUuj",
  "key6": "46o5C11tJZFRMuEKWpX9qva6ehxCrWMiKdt3ebskg7EdfeHiqth6WEnLsHNNPChEKdDmgjhC1tCx3kHFcfshVh22",
  "key7": "518xD7adm6EVuKVh63EWUNniZYwzjHAttWsadPsHcuwL3J21nYPuFRtdvCywtpevi56rnFFPtw6EuoHCoaQpFPgW",
  "key8": "3h8AcozwjPCEdMYd6Uh2XzEi3JYLBSDkvtSGVJotiWs16NGRMgvYG1FEMwSqwp9DkeBHrEuiFApy6U3PDRwv24n8",
  "key9": "5QbDN2cHffBaCUYtsHfR8njdgjiMPw3ed7LLQxs7rRvvCcS7KEJRSrxmMPsfmubyz2mWGxhs4XgzyRAydmHJcnXh",
  "key10": "LtdLYDXvJsjcbbEhJBWBzGSCfTR8eLeg2f1EM2WyrCawuyKJ5UUm26CCC856sdvVXR2om6ZqiNKPcaLTac9QN8X",
  "key11": "3U66RCdbMKzzRM4TsoQpnURQEB1SxtbntoHJB8qagqSYwpgtJ6KGzSrGMMXLMFreX6umfLrdZwrFnqqEvERTTKb7",
  "key12": "5CNJsJZhsfAgDz2BVZoPonFxNrQ873VVoExbrKSxwNgoQYHB84PD8AXhGZBM1PavYimJfNeRsrGSuH7uNWm7LZLW",
  "key13": "4GafoMWs2rYfLNGJRSqgC9UGxZzRaYRhvj4ndcTQQRDXWKYzKGJaKV3Y9rRuszrRo7MiDZP1Q9S9EDU87ZYpZrTG",
  "key14": "3u2gfzSkrjBAdRYGHfcdJwHXdS6KQbsZFFf7Xxnt8aLdjH3rpxQ35zqLxWMRwrST4tHvPHFK47FwqTvndoh97yNe",
  "key15": "2H9AWwhKfGeSKhZCm5U39p8PFydFn4NfHDnrHmgxysuDDZBz8mLZ4yEPg7tpz3sESxp93AsBqbWqpj8apbbcLin",
  "key16": "4A8b2QubBFfz4sLrsJzBqMwtUwGkEmEZh8DenRfUrTGWBYiYrQQ8KgkUbNASvKoNC82mRvrcVYx6jqqDrQxYfqqe",
  "key17": "4gQDS3WfiCXhnDKHCGkYbCn7UvrTGVcix7yzggpSDKqwpDxjZXerAgkpwyh17TWU1pf4SjzCs2xFPihBihX6BwHy",
  "key18": "3Kijk5NwMmLcutZ5ttYjAV12rnHDuJPyNqYwYJrAnCuyUxCvCakcdPfgvHLG1uTfxirJC4d3s4WVsKfMoC12jcm4",
  "key19": "4AbcSpDb5Zu4ANU7kcju8aTTxuPvaZJSeim2xmFoDBVSQd6qpkDr1YyYDuYiLxWbmnydkGZCnFWwa7F6BELEKNYS",
  "key20": "cvUWsUpE7G5AMbKcaefTzZ6Z1iEXV3pEr5wp6N5VEfDHLufRoDmuD7eG61QryYDkA8soVXR7fM77pwzL6kdMjVV",
  "key21": "FHzHAHEgpYontaewuPf7Ej4AM9V27gdnB7oMUbHgDUsDM4SEb17vtbuErHzFc6JifBLvtW9AjbfWa9mYvy9T4Gb",
  "key22": "5VkMzWHkuKfGxdb1nESC9yzXxtk8SEJHpZSpPNFu8r3Ziv15ZA2k4Y2TTXeixj2m2xsPZKQa3wQqdG6oDSPESV1q",
  "key23": "YB11N45uJaiQzGrBBEk9gtm2AmVb7MR4kRE1PJgCohCqzLEGvNEgASUew7Uvmj5io2bgNTFWz8jz2wAyzp2o7rR",
  "key24": "s8J7XqcJZzfFboLCNGieiBvb3sA5LmiKqNkTFErbJftzgGvKJ2bPyKXof4xaqaTov95nXWqupzs8x9fza7bvCKQ",
  "key25": "5dgq1Wc5KxAvpkZSg9C41QNvuUVaHZQW39ynCNanufxkaZa43sZU7Sge38J5f7Wh1rWKVAyo26pTDXeisjBRXD1M",
  "key26": "4Txt6pAUwkKDuBnLXGFr8BJ3MnWWL6Y7zvSCuqULyFHZoyutBvfhZX4jjyU1a2MBoiHHYpmHNRwTbMZX69ZadmmB",
  "key27": "3Q6jaeuwUXUnY12pH7mTQ6D9ACmCnJMBGQcRwUkGGKu2FXKpmV2ZvkLBuxV6cnq7EPvx1n9Cw8TPsxQH1uVTStpL",
  "key28": "4u6jLSXquLBLsxSvdEcVGfgXUE3ZK2gXwqjmrB5RhYtU7ttpmp4VPR1RwjAYU9FLwE6aXBciVLUkh9K44AciEgpo",
  "key29": "3LCPNrYKMt8wsh6efiZQuAx56GEKXLYJMKdyd9AsjUR1Lgmyz1dXZaTcinngwtBP8NmCbL97M3yhvGfTz5fCtQHQ",
  "key30": "5FST4CkDZqkQMihm1aHqkFDgN5LQYi3g3eeJ2zv6B9nmZCrgwMjR7xDyMy1ix5GNVCvv8a6jog7DxvHVzNxpKRMR",
  "key31": "tUKrcMZaudcaQ4Ehby23TBDQxPM9Fgp7VzHf8bZ4jRYh5LMKST2pUSJU14yo7WeNNHJzP6GV4EHT8Xgh8frZnJU",
  "key32": "GrnixJ6NjDcTjg7QkV81wrC4uVDQq4moPNUsBQq8AVFicFib6WhNhjPzqBrB2nrHCFTvhFNBshDEzX4kF8AbLCt",
  "key33": "5NJCZUjbYXqBEq9cmp8x78gYb69aViHvvrCCSAZ1ayQX22G7ZvCnZCYvUSgCvTBEwV6j8T981dbR2kQk5SALj49z",
  "key34": "4VUUhEsBN2SPVhHwrrSJxGVrxgDuffHkJRvz5EuTQwMTMnuL8s8M8aYL4izgsZ93WEXNrkgwBTvEu82R2HxajaXb",
  "key35": "4NN7L6DCCZZFSpg7nUW7rd2tsiKYzt9FyiT6SkUmxuZx46gyHLBPde9W1eGZfkjWaXRcCq74dunypmg4Gaf9wW6f",
  "key36": "4nDoHioJWxkBUHpyc5sJQqr1exYHhmKHSHshFp739PMjKGXtfbnHvGA3gAAWxc3tarkoQrjdWLc5JDwqBRGZFs9Y",
  "key37": "4eHoF1hWUKkWbW8hHiTDM7TcTFFfhjqqM2Y7HSxSMzZN5jDAzS76Pp9aK8Kr3a1kiGtgM7DUM14SvrKLPCpfeJCN",
  "key38": "4mRfqfTkUB63dKVfcBCFgHRmQmWiBb2x2YnedLoLMDMVoMDDunAy7ZYiry19FahQW7uAwT7g34EkuzU1pMHpP3Y5",
  "key39": "4bLhYMZz9mUbQeFA7edRnkdz4xerK5yA5n6JCir1Lzzhws6yqX9dHFFBZbrQ6YagLH34RP9xewiuj6reNAVSGpPK",
  "key40": "rpo3d3wnUSEcNMUNAbdxHu26rpQXSDMKoXgcVt491547SQDkJeHeLB2QUDRFT3MSU7Z1ruD8rpv91Jh9YyHo1JM",
  "key41": "4b4yWQLRBZe3Fo6bfuUnVZShEpumjiiq6U5ercDodcvAe6n4BA5acbV1uXU9MVmZn9LDeeSLVgFvVLrrS27PhXvm",
  "key42": "5JPPC7sR7bkRdZc6RyXbBnJDdu8VyXrRXuZmLZW7AnyDEyFNgXFdQiFPDuXsY6HzYuATBMqttkyPcSCfuo9fDZst",
  "key43": "3ykJxqPesaiEDjWD6ns3QzcuKyxyf98tvKvoSmvSvCAjXgXUGodFsU19VDfGmiPL3YAyquE23xfZRHnDVV37rHV5",
  "key44": "3WSMxzPuHtrNQ2VPCe3DNvr5AE1DAGiujJRk6P4kBUdTbGQBFGFrTiRD5W5T34BKthSJQpPK6hRLXkSWhkKjBbjJ",
  "key45": "AccnBzLyD5mrzFz2Grtp7uQuhvjGX66gUXEPncDoeA2tPgxxhHH2MjtCmgL2NTV4RwJ56soT3QapfwS4tzc2eVz",
  "key46": "2mKjhDVpsNooFv3j4A1vK4qE7qTERnMi2p6BdGyN4ZS5fTgVzZo8A31iRburTkWJCd96Sf5JhtiyTB2f162xCv8L",
  "key47": "5rcTQ7G1WWyAt2Go8cVbm6w6FuC2ELNPe5Q3XP5aQ7eBmh9xghgmyaSFcv92q2o5qWbBV2j5Ucccm6rVbd5txRga",
  "key48": "4AtM2GU7Jnqygvp8FE5VZXJniayerSQEqskTPUzKZxxNVQMk69aX8bBf2hjbLLNqT94AvRtTx5ZJ3BXTkXPUTQTp",
  "key49": "5s641hSXtrxF4v6WRdE8sSs7Q8EMq78AU8ibiRrsmgt4UH2EVpfy7QM8ba1ntcGbFzhtwsCF5pX6zWp6i7RhEUkP"
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
