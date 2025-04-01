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
    "VRVddBHqdvPUQiR8cDo4C4QZp5kB2wJuXqM349rta94Qnv3F57jM1HMW9G7iLbMFQ3hUqnHVXrwgkJS438TCcwk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WFHVpaiApHotodSP2E9tBgn3GCZrDrjpmsQrNTYxvFFNp6Gs8dZQw4S8pfhaiGUGNFofKbG47Snd8aCDNBapVP2",
  "key1": "3LmgtMCHxsWFkrART2frLXkr2hvAVYVmBie9s4h7EH7gjeTrFvqqAKuTzwJA1qarFwuL2P7yhw9n8ka9RkHntDHf",
  "key2": "2gNGNawthtZCUZNaAPedBG7F8kdotWJY6GzZn9icHERPz85dTHJB1LbLkGuU2za4K8vWDD6dFHMZwPh5rQHb75gE",
  "key3": "5maSzRUj1RNkYePdKxTJWMAtoHdHfbn9ydpqWACgQuhmR3aZNmGcNqmewuRp1SmPSDvzDtNEmHanPMcdMfujRa1o",
  "key4": "kH7HAQMYZ2dwVsUKpdcEn7z3igwetQqcXfaSAUnBPRvLRywnktsLmKUfoKj887MEEwP8rHJzzTBfpZxtD8qdLBc",
  "key5": "23EMivGb7GMfq93EUxrYwswSBm8VzBtvZPBU2bgk67wxryzZxAmv79fgXB73DoDyDJtV92BkvuzpVAjJBzvg7JBr",
  "key6": "3MVVxvmWyVQSuFqtudhzcLcThmWSjH9eH5br1dVuM972mLw5qGJSzxU26oKspzoc8SG762scLN1tMzXrNjhhsNCt",
  "key7": "2HMeT33nLNWde3bVMTGEyB3f1LPbgeYGUWsnU51J8EriAVRSroKXfH4d9U7JjuxpRgAQG3rn4ZeXuGx55rknrV6i",
  "key8": "2vkFnwJiQ1b87JTLf6vcQZcosRku6pxUKdVvW2WXE8rUBaNZvYNA7Fmm3aYtHTTZ9Cy6saxFxAJmWXfAzQcuCqdV",
  "key9": "2WzK8yRdiBsJQfDZuSjcu5eySssYKav4XQir2xtz4RWz2j46ANvES4m6r5Rf1wQfKyPn7QVSLCx4DTBqQkqS48gB",
  "key10": "2UnMomfQ9rFCXKvKE89SWPR5YjjZiBGNmEyQ3QzZkDE4ozSTcRcNUrABGXFEzB5s2RxzMvDVbVih2Xv9zWbWjEtU",
  "key11": "5TWceGi2Vatm3avorMTE5S8zaCcRP5FqeULdPPGauikcuQr72Xcx4AMh5b2jr2L4aeVuC2QwzyNQcLMdRoZw2snW",
  "key12": "29PJxTYBwMT9JXjJMVFzjjXWP98EBX7efKRgG9ashuMcm4iWERE5QcZCkpXWyTBAr5jLHy2VEmk9RyTk9b6MD72z",
  "key13": "3Aiba91rMCSkWGbVhLZhuQ5Xd8HckFN6bqETY85Aq7rJrR5NKNZMe2jFv6dSLUn6CZZvjEzVASQNW5kXzFpWqvb4",
  "key14": "2SD58QPdRMY6WobP6a7uTv4v6jqmX4BaouWreRGcR4SCcchDQGYWPMejLR1zHMaUv4LTBX8uQVKwjVcj36TGh7C",
  "key15": "CLLuGwouKTrL8V2VZ82ZbxFq4a9aRXUg6RMNYoetrU47Dg7oPhaFc3wP2ZgWFsXimGRQ3ePMb78dL171oy9SJJ2",
  "key16": "65EhzqSuLZ2rRLZyWMScmerrFrNfvAQsMypHwnPcNCr4GH5W2TTtsPvXYoD97tamH4iwT2PP9jME97wqZQxodsXo",
  "key17": "5JXrTsDzkyfSpg9Jv2dZU9jqWjVLFFmtRRktprbBT8XFDArxb93WugcxuSC2ifDGVkU9STdkvUSNWFKGEE4ygu8Q",
  "key18": "5Z7MoUDjVJsLN6QB4MivjLJEffN17me6uj1HpnRFtV9ZttVWDkFEcwy6iVeFoEj4gWquqqrd3crVLHXdACQMpxRt",
  "key19": "4vW2T2fsXHTKA2mT8KPDaLjXqghCJxyo65drK6PwFFnBZTyz2174A4k2t147zWQFD5f8Uy4N7NTBCbGvXXwnR2aF",
  "key20": "4c62fmNmy6jWBswS7SSynKSEVf7PQMpiHvd2smGHRtQDgQpznsnXHrD73Lp1EDwa8JqmRrkgKWTq59WxNFznUzkn",
  "key21": "5SNFBywCSy17s61iQaGF7RsPEaxGNzXmhYuSTqGhmd6ba8YoSA2etn16SCwujYqR7aN1teSr8DQGfsbb4zHoE199",
  "key22": "4NDK4KJJEQvtcAqLPU9mRpxh1qKdEto8mEGbJwsLB3bwZyNnKjxyMfJGJYaNxXAN6U8HEHtkPXtmNNNJq6WDBuvF",
  "key23": "4EJfE7wykiLDY2sUGW6pxYE7Rqt5zsTg9wVUCpiBhoDgu5Ju12gjDdf5BEUDqCiM717BTNzgYBDUVPw1H6hBnqTh",
  "key24": "4wurd4Bi2jTpDDG8vGXovsdys9bJx6BQnXRn7cXCD3vHsFrkycqWa4L2eF9CSTXN7WLXgMvBqPSJu3iW8A5ktcXD",
  "key25": "54WD6AXRuwfyTD8weqMvzJSQFATz599KRuC6XiLXwbzRb8HAA4idPiXASSyuh4obvjeWbexgQDFALr92V1fLNYRC",
  "key26": "4cy4C6LsG4mBpMfRdacJc3f5kjyQFWhYrnL8z1dTCPqj3XyYbzkwk7PXTPYhE2Sx89qdEDNvu9sXsr5n4JSV8Jig",
  "key27": "LJB1XyU2YuY18gSk9wj3j7DW71tehRxYyaUCcXvuxTAiSNCqcWdyWHjT2yAV9pcaVzocnv4yv21b8acUWnW7HTe",
  "key28": "3PrTEbBiYnPHGPSc78DPn5VciJ6EhxmD75vcczj2nvqx9nogCSBJC1s38XDXk7y1g95tFuCiGcpuxbPgjZDufnoA",
  "key29": "skfpcYB2LJNJf6qrNSHPsJhcG3xpU93Bef6YA2yGXuGUbTD2H96FTCD6m5i8jCdYiiR8shnXubeBo4P5Ku3Yf6V",
  "key30": "5oXR5K53MzmrHdvdxSUyWNzSDx9zqS1zHJBjk8S1JSuaq5kAsWuKWni7Q922xxbYBnrjL8jM1ENyFBN9hdTA1cM",
  "key31": "5JxFt3H5p4k1WcroEPYuVeRojr3S8Av17PnGoWh881HVqMabJYdxknTktUWYVtVjpisjcyKMmZHGBH5utU54n3MW",
  "key32": "2u42TrVFJWFLQruZ3aekWHuKfkKcRWzTGN9XGSEmF9R93TgCb74EP5JqwN4vxqvNDbhRthoNSQiVV7MAs99kKhj6",
  "key33": "3PhTpVz4xbkizpBPcMZRoaUK2TuuoPuYtSEWQz75YDgM8PTyWdd2bn4tahZd9ekJMfj3ab7xBct6XSmxJeW7Nf8p",
  "key34": "34dgd9NyVSyqjaQo1DaVRTRhyciiigt3CqEA2WSWgrEkfwcwdL5A5cEqkJuSLHP2hHDqpWv4yDKhSgP6h1pA5hVC",
  "key35": "38WorE6Qxs6aNM3qFLa3XMnj7BL7MGjEpgmnV7UCrmhhxkcYRXppjkhJUyZptx313wC83LRe8L9kn8gksR6HDhQN",
  "key36": "2SmZQDE9TMe4QFw62p2LyMWMqqgBCJ2eYX1SqUwGNmNiVupm9rbzsw5DKTZ33CktWnpBsyQnDBD5FkaXFXpzbBd1",
  "key37": "4KL52MWYvSAx91uynxqAGdQhyDRyqQcnfmNhb7jyqAFvVdN2LPo1vBM7SUVdMNfeXvHSMWyojNZ2N4Z4WEpsdxRH",
  "key38": "2FNMDzmu6VEL286DB9WtD67f5vzgWy4W4g6cN69vgBUzsEbiA9DR1UC1YJPsXMsFBqUZ7n2yLnEzyaix7Htxq395",
  "key39": "2LJUuptbCi2A1KfJn6tBvbtMBT1rssZZ1ehScBXHRasxftFmT5Q8uWNCHCJmpnrmqgJbs1FgcQ4nrFGtvTBVZM8W",
  "key40": "5kwQU9oj3h5eRMF4yPoL1qqgdrUuKDXC6FiP5qiLJtPykjyBefy2z7REh9sQycNbdyf47LXAaFsXeaDdyhKLXX2D",
  "key41": "GGB6AgxJcRcp4wqodjdddiVjhTZa6nJx5KAZE65HAxUbUpLm9zzREWjsFeRMQZSVdZqgSNwbU8tMzKMm8Zh8srJ",
  "key42": "49Lqe7fiCGw4zftr3KTaPkBAvHAUXJpRbFECz9NCx2dqHmB3oR9fVejDLF8RrEJVQ1x5cEnijEyyjgCBCWLVsaea",
  "key43": "2TnaZCSZ3CNMnAqNhokgZsXfJaSX396GeTD7rtBptg9a5z5Kyc77eirwvhLcYYbjAWo2RrsociPrCDBgSENJrTuf"
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
