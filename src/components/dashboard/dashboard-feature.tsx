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
    "4M5Ft6UXZkZx5fVaqsxE3vncH9gXTumcPWdvUqvcrHsTKq6VFg2KbfwWEptCtX9ftgDaLekrUJXx8x3HHGkj2dfe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cyjFwojoYDEkkQXPvAKmdWCHF7huqsTwuVD7XA5afBpkrcgcdem82a5LpER4mSDsDiQK2rZHa3vqduUUqyNPrw6",
  "key1": "3qc29eiwBJygtaQ1R5TWkGjvZfre3GLD1NPZq4gXbvS4Cq7ZGA4WzPc5tKpGmFAWxtiMDqDhdowVwbSpDcjD8jan",
  "key2": "2v4LYAgri1fqzuSozFWRggUpBaqAXn4o72YesU46z7V3MAZ1fCqLGa7hR5j4rXCGrMeCVngcE8CcEQUY5XoDF8gn",
  "key3": "3hwGVN4fcvDCofS2cyMSzXiqt83bMJ69E2j8HFg8PJxYTrsLn1NKVPXteyrCaqLK9tg2Cc3ooAUVA6fTU94zfcTz",
  "key4": "5cxFxpwxyF8TcqK35T9VEM7H11TfXiBFHKbdsRFuN7V9VDiiH9xnqvRJKcg53ECsHcmzDRNepa3T1vw5SLq2NksS",
  "key5": "3EcdugYqMuSAtazKVtHM9fDc5TNUQixrpUDWWXxqv3BxDMEujq2BbEswaUcrLX5cyfmWqmoVW879MqAr9FmfruMA",
  "key6": "27SXjAtEGjQQkcWNpnVnGVqMecxbhyo2qpXUUnphNeo8mv5vAek7bHq5WjBNyYUPj68oq59m2aq6PKPgsu5qov89",
  "key7": "ZMkZpbgzBkYa9qhgnGEu8r5SoCwiRYaWfE3ExBHc6mvbC6Dd6QFtJHjwjBkUNhSWSMoS3KycuhDvHBnsHQqqjzn",
  "key8": "4TnPTBYpU618vJupTRk169DfNkguKWMkkYPcJuKLaZyUv2mQJTVWPL3VXhjVccY3ana5Z4kU2XZBw3iZSx8wEhjR",
  "key9": "AyK5jZqubpuUBg4VtTt74pDjRgUsPYUMLeGy7yamXd3tXT5c1gj72LtY2gJD1c4xfPMPGDqBPGsEx3s9AQj3dbi",
  "key10": "5SYGjs3h36oV2Yyw4MQGckXvrnMqaj4KhNyGUsv9iZYguajW88Tuqmo62dMbXNtqxsbVj82yKaoVbUokvbHVriCn",
  "key11": "2AjPYyrKyMtYWNzi6gsrCWWQ7sneN6n3AaAkxniCLo4A2rTmaVchWmJLmnJZjgJ2UvhXRDGXDYcWxTCoLh7NUamu",
  "key12": "2ip5sWPeYu7e1q4pXwr93dUaASgrkDmZ2mTmyu5nrPaTiKfBVNAsukoxj59rXrk3i981ZoMz3SY1DSt3z1YRGZHo",
  "key13": "4FHeaBbYivamyCjumYoZuDqUrD4g5Chpinz4bHJXD3ABtfqUVS8TKRqoxbKbKV73cTLHZ3eyLG1WPSiT24a2gaUa",
  "key14": "HnqykdxEKhDeRrTG6EBLHHYXPRCv3SXsWdtc7SdxsjtvCeKx5kcfUF9awtSSAyvCtNjCXzv8purZn3B5MBE4TzT",
  "key15": "3gFKtFkx1vXU9ZDBhm8Mz5owjMB1kd9vVuAav7gHEidnKDG2FAhoeCFAwEBoGnravATLJZX3kzwq9A8s5X5jiWgC",
  "key16": "2BsjC19z4Z2uPTWFozq7YvTRky8Kmk6gtnp1VoLrxp9GX3q5TiEZbc9QzUANb7pogKNB3FojKsd7nqUVt4KZB5of",
  "key17": "2vXHw4zPn6FTfboA5X2h3LUKyN4qPxJ9Mxa4bmUvKd4wAdFCFBexWdPzuRAxueqrbHGbVZmr7d6QQTns4ugL8yx4",
  "key18": "5AwgaCYvzYcE6eyRHDHX1VT6bHBTm3wYcA2GQpUFELtnniFEDJgiaA1CdPSxK8RcqFwmpnY6G5oa7GKPURoqGoc2",
  "key19": "4dxwNvz3nyZYDJynnJnvFj6YpG4RWLFiMsAX4efxbDyNtp3Yo6cj9XTF9AsHzK9HvyArPNzy6vVars72n9L9xCrJ",
  "key20": "2VJGQLGK7oVaXwiED8X56yQbjkCmu4Shy9xEKwSmtG73mVwEnQoqNnE3Twnzjikwi46y2hikHsVaneQc7Y5Hgn3T",
  "key21": "5TFM1Mc8HGNNTmtZDWz7hkvjRu7MzDqGSKAxGkeKoJ8ktcgFmw4yF7KkXoZijew86tTVkeg2Dg6mQiuJHTUcqm4P",
  "key22": "3Xi8n4tVRKdV9NWHtiGdq3iietefwc6gQjUxMy1rHMDyMW7nAd3YG6z3uLW1zrm44wrAtT8wMgUvhywKkDkBd1zh",
  "key23": "2fmYbXc8dHnN9GXorUL7bHGNSysqPvpg25p1XTe48gooU11biA7Uo6525zf8hNTmXbZK3mpu6fM9KpepJYU1FQh8",
  "key24": "Wi74KfwxrWsEvMHzfW69GkGRZm29oaG22wci1KnQ7cjoorUTEVGus2L8SfRa3HUuExaSqHXofLeyQEdLkDytfKo",
  "key25": "WisweFzs9zPsGehFbKWPRfBWQLA7chZpbKmE1HtWSoBnAELTbb3NdWNVCCdYdTMpy6k4S3udxmg9BTRrz2ixjuX",
  "key26": "26Js2W4t1qJ6Ay7xNSq3Jc7yTAfxytUJNRDS1zH7avd4Hnzt98USMRUMq9LrzNvKTUoM4FdxNewuG4obj1EmBJm8",
  "key27": "3JMna53HRH9czhukn2nVSkyAD2SYT54oFd7rh3hSPt1upXUeduCx23zF3AcD47EPV2jHXVs3s2iPUiLiRnVRRi42",
  "key28": "2K5qcHeZx23g5zA7RkHc92zoUnVSXrTsbhXn9p5jS5nYzYaftkMxVgrFunhVjVcucoUdEa1nqFAs8Rtpu6ebWZf9",
  "key29": "22PEsTTNoMRL22KqHQfos6ZpwwSpVPUJB3p1qD68y5zcjkXA6zf7Z95a3sHqeqSabzyR8vkxU99qwTq817ePou4E",
  "key30": "5ozMhn2fzTdeUbk4DJ1NXeWG1vfsbaGPr6VnMW43t3h3UVyFhGzt4yUuvMsiiTQb8VggKsYjvaW5TF9uWzE4xhEV",
  "key31": "3SXA7nKeyWiHFbn4wz1aegHNFF7jLJRZdS3cKLf1UkUzihVkvuayEEkTKwcK1A6juUrxZ12TfMC98xyDnMwqWTvB",
  "key32": "4NC2nmWJg7GLhsgg2HSu1WVvVFw3gM55s74wiuXWTx1aHnjMKD9frpbSmb2DRwgpnicBrpqqcvNMh3FHUxD9c981",
  "key33": "3LVM5znp4XpbYtua2usBfGtPAg952r5o3Cp3TjXAr4LaGYwLmMvAuDjsW8LJpFYZeACmguaPRMEjM7WEdzrZiR7J",
  "key34": "3eEuK9k57TukgEzZ6deUc7CT58Bp6n7P8cjYSvn2eNCzy11Pr36gtANiaSBDfsrbEWDjXNDD3x19BWzFLKvBr87U",
  "key35": "4CQedqEFoZQoL1fRTxbrpXbEHubLWwVAf8JLCJ5dd9fxaXg76dpEigH4SP5sAmSXk7gnWbfLEExCwy1YGNBgRBgZ",
  "key36": "33gQVyzR42EmyWuJ4SqZEYP4vXm6VM8qHDHCXTtVGM5cyzctx9UFD6JLhVmGTtizQCsoCtQFuD4p53BR9L9bctY9",
  "key37": "suryj7S39CDLNEdAo1XN4CXy7oV9gtj7rV1FpAQQeN4qgy7hbbp6EwDjb7tYmZ2weSAq7TJSdDQoc2zXZnwHXEY",
  "key38": "DiEayevWbLpAtUe3niWwsV2eyacCTSuJBrQGaLwnqdkr6iTUacivvqae5KrzrWMbfwE2TmNKcNFaHX8TbA72zA1",
  "key39": "4qfTT5tBzSxZCSQA77tsE4uPQ3TAzb9jKJTL2uKexBVzz8Ums1bTtAVJJKGGSm4NNhq3xM9URE9GKa3QFiJ1UwAS",
  "key40": "2GXczCUVgAz1FNLomnYVNTdR95VhXJjzfhhBmHEVJKtxUxUDiHiyCoRJxuzwR5Ex96AFpfVeG2csdxQcniYdNaWs",
  "key41": "UHPY6Bo6fUdfPbcdKQUtCewWu6AMSWxHPK49DDz1h1VxEB3jbKoop4hEs8BaKhMuqGjoUj9AYXTVPDohvDtFC82",
  "key42": "5fVj8pj7cfGZ5E1jGCg2gqgx8kF8JrqCSAdawScQmaSEHokyfwxZkguNdRwT2s61fgk4grQCuyZscNKhzdbmSwje"
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
