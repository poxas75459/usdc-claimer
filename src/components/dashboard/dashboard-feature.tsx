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
    "2UU1xhixRY4Gwc2HBf1DbQ27kGLk9LLDtPzAFDFHuyPxv88GoqpPxPPdqw7e4FTc7ofsSc6uPvoKBvawH6aGBqiH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TuCKzgdEhSL7e6wDq2SuC7QN1uz2Auf83XQPXMm4t3QS3xEfe7RoMnkP2SyeVpBkqG5THTVzyjBqMospX21Ujcy",
  "key1": "5bMgHDdfRmZFnZa4vuQsaEMTNArGymrvmG5tdaJiaWnPkuBTb77X2hirGUe9PxL7z4tb7iW3C3v6AukxBdkht1YX",
  "key2": "w5E5i7vz5XVTpLdXbQkDmt4yBGmBeMWUGeqrVNndrpSAWEr2UWwpxE8TmachJin9BReZh8mvDM2g5SkWNuZ8bp3",
  "key3": "4fqZF4ce88pEqy3z5G7hoMn2AnpVrS8Za9ZbrMVBjXwqtzBjENFYa4VBRZNWYo41aqwPhF4BmJ23T1guZS4pFjea",
  "key4": "49bHKpoZc2gNrpSni57rfStBrnUGLZbrNNTXcfSEgJi6yVjSKD6cG44EMxqcHyxd3Szv2YNBf44AvWUaj2MArP7a",
  "key5": "5B9a46yTDViYCh2PKUY8VnwY7qtqu19d4oA9TczhJ5NssEc9c6E2yJKejwoDUJNcnFGKEnimera3Sw8eFM77cxv4",
  "key6": "2dWAsXUKuHw6HzMVMUUrFExRNVED21b6XWW4cGf64Hf9UYPb4hpwG1K1b4GH5Zmjee9wEHRTXNQvfH6XTR5btGnp",
  "key7": "5iBRzp5u4LeQohrPDXCob19VVGbkjczqeWcvcHuBF5HnKG6aTajx6CpqHNozKwJXjNv3HRA4RVf2fJWLTCtiAL9t",
  "key8": "5ieSGLQLH34zK6FubpHZDDMqhQyU3p7s24WtyDYPjb2WHxfHsfbpXdDYS3vkS73pXfZQXKgCYEtabTpXqmEjP1Uh",
  "key9": "4xDRQHXN4MvUnqnvW23Fw9x8NQdVBVSuYVHZyNN7GEwaTdG3uXSMhkstz6nGUtnQ3PaDch4sTYeDn3UFqpAG6atU",
  "key10": "249AV7v6aZa3pbBC5gpjdpvWC2UUhfpPFRbjPgi78U4ePnQuEwqBv2kpHJvRbRrMM486F2BY54KfHYiiz4ErVciz",
  "key11": "61z7AZPpzb4DHmZyJiZzKMn4uCGR3Lm8QnPbZo2oquJytqAZoPJZCcF24fAMrq4aXmFUtHgHYDBe48PjUfW9w5D7",
  "key12": "2Tqnsv2pAkwP37MXfAzh4XXVghkByGuk4wuPtvn4MBSHGAfKZjHJZmyPvn7AvSuVr2EMJMSBQ6Hn6EqmyuJxsgYF",
  "key13": "35SwvurCMSCJbtp23a7HvoV9wZVVmvcbjgLQpzwCDsBHCe4iUqg773kuaoxcepDiMzveKVaKFjTw15gjRkeMLgdm",
  "key14": "5z7MJajDx3WMoNxtPH1FVMScDSsfSaeYtHQCvFVWmxcFhxLJZGyWMAHvZcRiNzx8YNXcsmFmeHJCNoQfUmfZMx3Y",
  "key15": "T2GswYSjnFdfvmZabXsB9q6KBWkM1X6EqBqZLp5YQzN9zC4BLutWZEB3jx1T5J8QzX5hFS1nXgb1d8A2MwiFgqC",
  "key16": "5wDXbiE9oSxPJDsefR66a1paFbaiB59gwCN2BM59wvEEEqBXFXzdyifFchcoicXXLLLKDGbficL3Rztzyknhey2p",
  "key17": "3pVxum4YTcE79LiV73ccpHk7ESbTZBjpbY877ADhQWTSHo5YYgc47y3QpTmENi2BD1FPa5PmCBrL7SuxhfZTpLjA",
  "key18": "2Ktu75TA9Uac1T8NCJv64waMFS4RzqY24FrgXmTNZVoqsvnrfSLSpidvgyVgz9zBiMkPyH3JnmGQWVVhp1wfXApJ",
  "key19": "5xUemuvmcqiFc5W4tqVqDJo59kbH7Ncgm9iRca4GybJtPnAhpRtwRrbY9zK9tqVZPyvHzvoGzcb4D9m7vaoMJqmk",
  "key20": "3eepobTuwbvCVUZ13L1uG6ySuLS78HPp5LuCUWUGvbpXi6xp6fCF11nab3j5YRSDcBws6hNwXKVKj7REvCrxjL7Y",
  "key21": "5pArQknbz6ALMgqypkAjcDEKKvq12Bo7QppUZRssgLsbz7dJASU6R8QJZDbsAuURC2zTJT6eWmboF8kW3My1NSXU",
  "key22": "3g3BDNTsLHDTsE3J1rU3oJ8UQ7fgVCtUVo4oKm4EbSK5H9CeqdaGCbFFzumrngK88j4yepCDcJfjMuL6ckqXkXqd",
  "key23": "4UrCRTCh7zYA3hvExzqJEy34vdj3RdJWq2izWsNkvSRJj3dDNWc9LTwanLFqfRpUo2VBBMZAjfmPCVmKzuUfeVL3",
  "key24": "4LFUfxSeE1f81VMkwWRTwAK4CeNPJkAVmpYoey1srVdkfdGe6uQEMdPvSQmPhvCZgaBKeqDwNcav8bXC6WvtaQjR",
  "key25": "5ZN4pBepabm1fu26Rmbb8FBoT1yTAh4JeFTprtS5LyEM355GqotD6Re2pFccGqW4YoUDM46tgQ3UcReVz6MQ3Xfs",
  "key26": "397oEeXmi6mLDJL8bBoz8ex85KmqhHxzGwfzGbfQk5tVKiqbRXbb8vCcsdxtJ6qDpNMvaF1QNkEPcfUFSrwHrzmJ",
  "key27": "25DdmRKg1hTocTAgHBFzeWTs7LTDCgAbLsH9Ruk5UhGHsE4Q3yHXjAEc4dWE24yV1b3uYMFzQt7t2vsPF3mE2fEE",
  "key28": "4BDqUheivc13ZN3VVjGehDiDGbNhwCXyVjwcEVX989yjtnttDaFRVNa6nQ5i6BBNzP9Ev9r4SAtJAGH6v3rhaWMD",
  "key29": "4pUjLY15kekXybHhEJ5ey1qKNcJBwG1eTaC8UCfJbAfnNpGNc95QQVzt5sTqhNWYHdeZhGLD2JbTwZX546zhtULi",
  "key30": "LMGi9LLeXCHfrcndmaeiefYfjdYfJa8RdBULbEGdnDSXb3gqsFhJJGhW7E4DCzzFcrSgxCDLUB7yok43NYdnuBT",
  "key31": "54mVeXQBEWbfDCF8f4yZDV2GrkS9QC1SUFTZbZMQZz3x3hPdR78rE9jMV5NThcEqpJnb4BsKXSByShGTWwYTvp3p",
  "key32": "9K9fhVSPt49J1nC9NtGDycztuDyFT7iM5Yu3RBDmFbCfD6o2SNAZktJekmVikxybcRt2dCqSYqGGYe1RB6UHNM7",
  "key33": "3JmKfohSv2ZPR8oGZRDxWG6YmoDZSeS51A714fFrnZMBx6pqq15w3myPhACaj6h11FWhn1ShzPx8LfGzrESR9mjL",
  "key34": "3NBLMFM8SwhBr7caD6jRSSbwRczNZ3dWuvK1peNviYBFR1vkzymFecHy14iT2x7kaow2u6GEFCUgrFMSVjdEjhyK",
  "key35": "e6ktod5dtocikBgp3ZykjAZGXMhttZ6q8HKoNfcPZRy6PPoqpBRKzACfmQubwnpXC3fFMktif2fMP1HkckcKs6p",
  "key36": "W6HKvDChhPL8YYSTSTgsyPc3LiT1kx5t9v8BtSnA2v6rMddR2LHWxQF1z4kst1M6joj7kbYKFZuzEGRQNbLpAV5",
  "key37": "2kRAaAYaK1KhydoqYJ5wqkm4uGLtf8U5mfX3sbh8n7evXaP4Fd8y1ffVhZhQdUgfoYi4eb74GrQkWY8dRVhYFy1M",
  "key38": "5VhrUYC4Pba3AgeZRo3iRBDiKjq62YX6fYRcEnHmXUcXhzCKWBqK2hJnsw84JXmSiuyCF2ZrCWGh8KrEGk5be3tW",
  "key39": "32ZBLTAF7Vi6pKRiXnybAqLkoM4WjETAggHcmz12GjyVX6FcHkzA1kwuqKfzJxQmVVjpqfefDD6dSUar811c7E47"
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
