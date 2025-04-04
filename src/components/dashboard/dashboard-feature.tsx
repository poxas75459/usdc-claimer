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
    "4L579CaMVDnbAGZSDF4azWU1fNA72Axxp4roXoLstVXteH8LuDzECwSYVDyX75pC2kM1xmWskB7R3thZoYLG6QLA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jfB22hs89Fm8P7wpUDefhJoUTMhnsSR5JmpPKAyrmBXuzycRvn3d1oPReStmTPPkwkPFQM9wuiCn9ZCnW5xRw54",
  "key1": "jUsdxMwC9WiJqJCKtf3NXjHvnokbKyW95dv8EV2433oPi4ADqSMYdKikoUqBXe6ZASg1jJ1knKLpJ86C5neRd5j",
  "key2": "3oUcNNBwzSNEDSbrUmnMy47qGd1egV8UEc4kBzDaVSFHMsR55jV4CXH9XAMQgKaVjVEkAHuPsxhwXEm3CBf2svfu",
  "key3": "3DouVWTiGbEkNeVuKXzDubpq5kq7c8hYRiiXBVyftMpbioeJB8hwtQTFkmintA1yXBiBh9wTYzSWCGmRFi85Hkib",
  "key4": "uT7gBmMYDw7X6Spo2b6RouyK54Zq5tiEQvLFu3chdVtVmL8JfHQnGL7RZRqBYh9hEXib6u6sagotDsM4BtCo96t",
  "key5": "3HrtFuZtZLc8Sp9cXKSLZxn3iLwcVCAP5TzYCtHZ6rvgJ8k9NL8G4qCGXGz1aaWobfTm18yyr1QaTPyg2peJBR8D",
  "key6": "27ewpd5cbtDeJaLuvsTda4bFXawFDkVH6j8gSq6wXnFqys8HZWiLzeX1zMHmdepWGxdV97jnjNSYyThRSEguhyBW",
  "key7": "3SVyGFTE9w2gfwB6Z6oiUUHveEK5o5oVc9DapKzhvs7G6kbarP4hio8ycfBB71eScsdTNZB7BJgKtBHkiKZQTvFu",
  "key8": "35tADoaD3yYCZYz9qZ6yRDPHo27mbQMfJVxQ1DVp2bneNehRx95JGuP4FFFry2EKH1GdqfduHf6jw5u71mnkRy8Q",
  "key9": "2rRhb5o25AdNCAuZab6uYyCqZRaJTyTmscCUczRofhh1NY183nSEPPRuAni1SfTbrGoLWfV1Baxk1xFXheeyHTT4",
  "key10": "VFcFaVxGcoZoRJUboVYjtD4RH6UQ4SjgEXHg1rWrMv93HKGZCy1Gr7hfFude6TfNZBQrFHxPi1KudzV8vYEEi2n",
  "key11": "7p5Vzhy6gCmJXALmypcgD66kdb9aBaaYxGJw9zQEpxMo337eBJWoSkmj3TMem2LwtpM4aZpRiRpAHhYjb7DH5Sw",
  "key12": "3XZddupQ9ZdFsC2TwnGBFEBNE2bKzN4kAfynJUxMUH1BeW2yJ3LoBRS6pTvAGcGPZw5kM4cgY6zFBsiEvJMnD7cu",
  "key13": "2GWayLoDwehqx7Lw8BrWqchimK4y7UGLYVqbLgi4CiEPACEZz3grQpvPMfGDxWRTmFn9Pk5Ai9z28zBYS6t6qQ89",
  "key14": "4U6Hi4usDyqa7mcAaUL65X2qdpEyTUTniPX9mTNEVfS9aH6EskfjCikVPRzKDJeeT8dtuoxe9TWprwkVTWpZEBuY",
  "key15": "27hoxYKQnUfqiXocHAxpDvPVwtScE3Q8XzDXFvgfPCawUcqL2UbpQw2kVhLhQy7XHDekPNtge8sVRnq5Wtsnd4p4",
  "key16": "5NAUeFghZHBbUtDBo9QS7ARkB5mbhd9r64Lr2Bpq2e7XinErzMRdqNyucw7QC3DDurwNvZPqDJdkmuDVGVQ1Mnqb",
  "key17": "4NpbPKbsQydZg1JB4aPU7vQdGJ3Exe2Z8p8XQpHDDKWpRXUU7nnNxCVD7bSU2HkheSh6nT4r7zomMi3eRw7fnSgJ",
  "key18": "qty5XQSugqhmTeDQnWqj9iCUScaSUfkX8yDbpjRA9QfdkM43J36tkxe5U2jDCVbaFvyvZWwcKPNYGQxRxCvrtzs",
  "key19": "3o513LNVYHfg1Y2wNExzffkQXo6QSXPo5i65xMsVyGqzvRoPz4n1gNaUHLfpEKqjXZ2UggjQmTfFpgftpnzA5rNf",
  "key20": "53Zic2bFQ93iKFejg3rjeYYbeWBG57v7JCtrDbYR3avaDsPeTknd9XPph765iRPSwreNHdmGCva1BFAhguTznjuy",
  "key21": "MNEpeDzPdcqkHG3kTLr9ENrbtZFrTVdKv6HvofM4iZLX7p9RJpFhmgg5pxiXmrRUtSjtHXWfTs4z8mzBqJB15NM",
  "key22": "34xcLszzePtH8Tb1eohEadXX7hmxEMnSxXuMBaVM7EFKSZW17nuWe5gYooE2SHkoUgoajz5HR5s5CPjrhDJpA38a",
  "key23": "LVMNFgEUjLMM24DEHx96hcB8s4a8mtaVAiPuYSmsSd793idspB1Z9zcZsG8f3LB7nuBEFq5xdCWzkNcBV2qE214",
  "key24": "5XYEYJ5AiT4qTmMKoVCgdYHmKSbZd2zVEHU96482J1FfAm7k9SRfjjWtJNy9f2vJ83QD8MD1P32zpCErD93aEsgm",
  "key25": "553HwqWfW8ZwGsaXDKyZ5YyjccJzsn9MerP7PXhHh6UFfJgF66WNp18HyoAPi85wzKVxg4MscHFzzhqVJ8XcW7uM",
  "key26": "2zGbzYs1cKMN9uPmP2u1wkLTsjUNda2F4PguxTe7YswHRad5toNHSA9Xw3t1vCnDFxB5Bak1t377yQF2oXVPF8zt",
  "key27": "3v7e1mN8si9Cx3JYyAuNAYcio6NiWBZBojBcVeYAc7nzJXJR9HeYVUacxrhcXrLB1VjVN5HBEkseaJnWoZGP5Lpg",
  "key28": "gSjEYoF2fCUcKb7uFZuF7AbmRNSc4CZhXzBgxyoeWgjQaKa8dFoHLjdHyxEgiEpf7aVNqUnUnFfccoKEJFqmZoU",
  "key29": "zXd7i7CR7T2PqUV5i47A8sPWfNDcgvPBHfUDLAGWwCiRGdjWDnvgUWyHws7pLyVBfaRjVLr19ukc5dDq2PSgLBu",
  "key30": "65KkK7RFyk6QhJ6ukqccrVNPKjij5EQ6fwUx8jGk5NAAKHUJBrMMPDF4B39rHnedTDStAB4sJYhqFfxXMLXzXTMz",
  "key31": "218duy9AhBm36W4qoAigv2VHpDQDSvaF2ZPSmSPmDTQ4mK367g4Eb8kiUofN7YY3oaWQnXwiDGhctrG6MiS7cwTx",
  "key32": "39Sb3nxsxBs4duqVc6pRzdYDZvvoKnBzcAgSbodHZANaqkiRcSuP6fXAYjYQi7cDoCumFitRWw23xH2JYHCs1nqj",
  "key33": "XmnHSenpbs4nun9Dh8Urx69c2kNwBXDyeyARtVry55GMxiN8cs9mLTk1gfKKLZyaxpTu9UBtxigo44v1nxyg381",
  "key34": "QStaCqCfnZqycFaDYgHYcvs6cmvwHLJpeqPuX8ZQmwwVBHhfH4vuovbjX6cbVyMArb2NEEC3oiMwFUHcR2GixwA",
  "key35": "5TAwoNKxoNtkSDAZbZHHjg8FhQmzVjm4YNaL1Bq75AGtTvke4Cccth1gahA5KGZsaLn1YEbXhnC1Mhd7WYRBuRVF",
  "key36": "4njViBVeQJMpaaxa4C5CY67m79JuKQYR8EQnHCoWdS285x6wcmryghhfS2xr6L4ZcPhBThVZ3LLL6MDecj8YBXQq",
  "key37": "JayHh3cgvVZZd4CtpEPSvL3gGFRBkLKKk43Ty94VkKq6QBy67sUoXPjXFfnDS9e7HDB7SpvY2C9rDhyNLB4HaSy",
  "key38": "2sBqqCrYCLqXtP3BfP6ZZtzuWnQTrVE7bmgAou9zWBcasiHK5TSnpiws84heD47CHNP7NWEkK3MGrMDxSA6Jhcv6",
  "key39": "4oUi3jNNjMKj7kMg6LUVgWFfd8JUcSJZbQAf8Q3US8x2z2quyJjUUQWqaxuwgNHSuLkFsPorAK4xdF4i3FKKfZbC",
  "key40": "2cHrTPudHwvcywsMFE5yFxZMPiA8rtGjiUucKqjgspYFuhtf7yxTW3f5mKaHComBttKJ1GFoxy4EohhM7jUeDiq9",
  "key41": "249jFGM4NJCHpr5ZNHUvZ8E4X4uhffKqvj1YFSo2hP77uT3K6iemvscg7ZcPhB8nU4kctpASJARor6PRP19h8gDj",
  "key42": "3bMxLRNoz9b8LHCVvK7MtLfUsaeTpr6AwSY8yPgt6L1M2CpaRneem1UWWn4K5iiAMsPS6RpTfG7hH9GEzUNWgCRU",
  "key43": "2MAMhJUWV6oF8c7obypShn478Hxw9ZsvvxqfPpjN5Mg1LgDYPwSEkVxR5DdJEn231ocAxkLaXVyBniFBKbGTTfAo",
  "key44": "beuoujgCgYhvzR7zo2Uo8NxP7dZBdRMdXYfHXLEX5h18GVBDsNPtF7xWGeUXV8qm9zUWNK8AnBBGNeEXJaiiYmj",
  "key45": "237RVVroSkzVFhXG7Nxi5Etrm91NmzKaExg5hDVPPEZFppcgmp5LjEYxfUxpebkcTxp4pmMPbb7UyaiDuYRqtkri",
  "key46": "32tdDWbiWevPkhgEBpesoiNBsXEoAE92scczHzMTiDqtjXww9uMULqw5JscPMYitSEiHJJmgiaVqvsGVxmuR9R3u",
  "key47": "64tVqyqj2Woc9wgbdwaUETU5WzcLJbK6zeDtA6XdM2XXTYKBTcU7GusHgkSvZNxCYykUXrPhqc3CiyCf7Bw9tQt4",
  "key48": "3rrH1AgazCojBbLyhzKsTt7VNbpNd6vW1oQP52RoAAWq4v7qRTb5tnJeqN9mGwoWDnkqwMA6VB1iCKF6nB6wMT2G"
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
