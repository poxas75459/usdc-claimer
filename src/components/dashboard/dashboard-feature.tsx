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
    "5uC1UfUheXkufjxrhJnvLaxxkzmceTEr5tBdxhLK7jG546ifSwmQ4aTPYCoYG5jjn5yoJtMAJQEWzYx6PuLPKARd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hoED8xpoU3PrmCBLf3vcfYkazEGFY3Yuf1qEGb9xyvXeC44b8BpREtkFeLVZksXaH6zwmXEaxqXjjeVZzxuBzMX",
  "key1": "aCyDXMpfj4MfMUnvbsbdzbqPTFXJfRHnMgqx1AHr7sVprwLEFg5dVuqY9geShGo2g2EMTj9UunRAcEfyDnwvLsA",
  "key2": "2mhP1rnQ59mxf1JcqJ46Y6DngqVK4gWWuJNghsUnMjyBkv3C3LqHHMTnfkUHLk53yJcThjKNHxKX5fce5DJbzVQG",
  "key3": "2Ffu92yfzp4aC8PiybBNQKccivxGGx4wRNoyLcDzwbX9xGn7ZGMpEYVd9e7KrNX59ftV8Ve54PPPoLHveWbMe656",
  "key4": "38n5WjZb8mT3JbDBptfKPXgdXqtxigVHuy8qG1pUG73FcbHzoAusBeJzudUGUd7PUS8n29B8p2WkjjyhCFBgZ6qh",
  "key5": "4Rhj1UL3MzSTtutNEaJEGmdMczZpaSEArsWqswb7SEBrMX5WbXC6LQbwiV5JiUzBnfvbZ2q2DcCSY77oJ4puToxT",
  "key6": "22SiAtPi46GUHRapop48n8kVfAHmSN1EWCsveN2qL4ZEStbGHQVAcmbFokJzUD6KWhEDYV5AjX5ghBZMmPPZM4R8",
  "key7": "3TL7uPBsudSrewqo8LNhzUgwtMUk2Hu1NhDXryq2BK3trofVPDLboUQSaiiRTEKrZuPefuFjw81yZybAncz2ZPuG",
  "key8": "4tjRDSEcpaT72yMFoRStYXwY7xA8pPXHZQ3ffDWNshX7rhMQnZpwGsMVxQJrbHhKngEPHQZNscXDLZtWLsd8GD6i",
  "key9": "4LxxmiVLnX6kd3RXg6MK6Ka7CqSZpU3PGbTVJPbXUgGhAknvSRpvNEM51FWpat9kFve6aua7W2AWUEPVAxjrMQkf",
  "key10": "2G86vTS5n1Pr5cH7hkQTsgUH64wKZ5CNAC4wokyZSYVw3J9YwPH53njPpJriarywXFUWBEderFd2vDFMzrXxJgCx",
  "key11": "dpEjySJZKdGfgTyqcyo3DvjPxxP1wbdb5iuL1GEX2Y3cRbe4fr6TPWLbjCf7i8tXTXwy6mJF4FrcECTURfuazu9",
  "key12": "2bK5N8td9mJZfTzRx2bkBqTjzAe6L3yVpghkGxUnYoVqDPGfkwNcirKE3PC2FnccV6kMTj2SVWb2grEjWpSewGtd",
  "key13": "4u654cxSfwQzW62ojW2gGaH6KVujzTbVXVqj4HHB56vTSU67AihUhAMkEDWTRLcLicbQHarE2PWchj74C148Yp9k",
  "key14": "GShZBxqtCSH8ANgseu8DKPRCadabwZYfoSFpAmKprmY4UVeCcyN2HJXr88fLRTSGATs8cb2MTMFrzWRdmbT9yE6",
  "key15": "33dhj1DEgU3dYM7V497Edj7vjZrkYrNuTpVCp9yEoasCXnFKXT8Gg9yUMRm9CkV1VYvwR3Yuu2GDf2PtYmNHtsXM",
  "key16": "5ebpturuhtSU9gjqfzzyRs3jn2cg2jo6UtPmSbRMzXXJ9SR4U92J8MkJ8VX9m9SzCxrACZgWXzMruHpRatH94ifo",
  "key17": "2pAt1S3Zj7wcyuj5M8tYddt6urSEnPMBJ2egRdUKNPaTDuGjYpERzUPeGfSLoZo31v513AinXPM2LaTRMooGrvuy",
  "key18": "2dPF5C5N9Bc82M28Mgw3sv2JsveXg4675Hf36ijtVcBkiD94TX74FFo11J1JoEz9JN1uPzbFwqZkFDLJgsKM7Sps",
  "key19": "2L5GKwcedniC55wbaJ3HaaPmZXijVZwjaQmGFRd8hcbrJYBw9Yn9G8KYhUVfSTziMPs2wLQPUAMo69QJGdpoLcJB",
  "key20": "cmwDutFyALFWBedihhRYu3X4dcAGH12pEREmFPqpb19kHiate9p9QJkLgBumZrwd8iBkQ9QaRUa7SYaAgUnYGLG",
  "key21": "3jm9pRi9vEPaREs7JoU8iRVaFijJirrB4sZ4Fg7VXkWD2W5aNzkjte3n33D3RMmaJmhpHmX1UqxqZYNWM1xv7BGA",
  "key22": "5sz5eRJ9asgnGK4XzvP4FtnR8HuDjqByGe1HLtReAadeChH5ii8aozCr8wZEyNcWChEddYzep2yAHXbpNXq9PHd5",
  "key23": "3dMiJQ8qe2KUCXtvhuY9rxozWfxCqEMdbpGwzgobxEaSXToVchi8DVGgUxbdUZedg8uTQqcWwxZWsPjVkUaC8xo9",
  "key24": "4q3WZMewmwhbysL5Cy94Lrz9J5chU51AouZ1gifFVtudiUvBDnWtyvZhPFsXbvfVXKN5SSZNZ1vcWokQo365Pxsn",
  "key25": "3GATEEv8P1kT6WQXsKWUWL8wLn2CW7uE2Xzrc1YTpFovuCUFkVa6txv1vfV2EmzVQhDiwkTKDts7k8HHWMuGkYxC",
  "key26": "2sadS31dvAqXRTdfaMxebz5b4vVweVM7AevQz2cj4DwKBqxoAK5VfB5f4kEZYYxCF4QDgDBD1MuyvM1DsP72bqyV",
  "key27": "4XSqmJQkCsEyMis68AztTvE2PsLjP7esD4JY6e4s9CWXTersuvvtHPB5cdV67dCtjapQ3bFfmfF8YBGuPr7NMfLa",
  "key28": "jvjroiBLCDRrpQWHLrmtusWFKcjexgqNaHg5GcEcXa3k5Dotb2HANYDxeoUBvs4dAXyP7HvCDfct79vvY6vGtoW",
  "key29": "eg58auVHMdbLUwqUyVGxog3chWUs4EepcHM1pF71yvoSvq5UAEdeEJXkTER5UvG6RDjiYjfZENgy41btTh9oVAp",
  "key30": "3q1uufbEwErqDUGvH7bPQ2aDVc6pETPzehjDsDWn1xgFsocjEZEF2N38dMNGvzZb6o2SLRXB6eMtNms6uCcnWWPz",
  "key31": "zTXw71jXgpMTrTWWsPrghfa71KrUKisKJKhN5NZDdga2HLwnpddFMc5i1Y3MwuSGnvE9aAmSJAbKpARhFXfEyQN",
  "key32": "3tN2XJqMeZPy5ojB1w7mw4C4xiaNBHc4jKq16dikSos2q7zA8g4mHWnmt8Y8jo6RTgRP2h3P8sSGXuvJGmixq6Fw",
  "key33": "VmHryC8NvL7P4aQu9n7iqTEGPPWYAY921YV1R5HAMC97BSWZnghzoP8xorBYQgtRaeeWR7EhRavkH7x4aSjKctP",
  "key34": "3YxGnopYhXHbiLVjXyoXEkkiQu46peX5ry4XKfGRDXTzK2nNaoziMdrPnsaAaGxLzkeeDAFap7pDw3Wzr4J7797X",
  "key35": "3r9fsnkEPzSV4jzPzLVAK8hcwf9BLw2ncegZXyNNnAQQyDMRMSrtgC76qSu8pSjrMdDHNVa2o2L4zqxPFbUyFn9c",
  "key36": "3BBCeFQ8y7U77EK3s4m5ZiPhwSAeJq9PwzTzFFAxzhzSdrbw8zcAbShfmoKFcHBoRtxn6XdHixX23nT6L1p7f9at",
  "key37": "4odfy8SBE8Mia1SEbnU4fjvXqjdJZmbrDQnDncBLFozhc98DTcaS6Y6Lu51boLGnmrnCjUveM1ThTz6MYRqdeRpg",
  "key38": "21vdtYd9ycnAVsKF1LhcorN854jrNDGksn5pL1XsFioZB5Fu5zxMWAgsZ56uyndoDSfDHT6aVoqSdS5mKzr2ws7n",
  "key39": "4WbEixj28fbKcj9rkY5KXNdmn3BDzrsajEsKhhbHF283ATyvUJKPghoywQA8X3EVRn6UPbmzVExqTh25sBb5WfBS"
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
