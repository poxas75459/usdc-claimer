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
    "2WWvWA8nhMJSZHhuCrHZnkHtsmPjkVJWYzbJsTVR2F9YpUP3Pb82GRUzQh8bpqPJHCYogCDd9eKzfKHwTanv5r4u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Yf6bikWTcrUgLdGhzX87cbxTFLCsJ4jsgaeUFUaKsf2vR7rT3ausrzy4WiHwWhRFtc6k8JW249qXY2rdx1mseWz",
  "key1": "2D4QFwhzfVhqXrPu8CCHq7QLnfJAqFWGPKrdLDQcsRm7CD7diZwB32UnPx18uv1NEjeZQM1FRiqf4zwSjbjdzuzM",
  "key2": "8jo8wJt7pMXLbSvyEMcwx9hDNBoLe2TRXPPVQt6QCzWgvudZ1THaNDrroZqDrhK47fKfcgAn7dPt8dKn7i5gaZH",
  "key3": "NmSKzc1wqGX7vr2ejJKUZJTZtiNmfDB944j4sq4fk18bC62mKuYkrUoQDXWZ4tM3ZQ6DwVo6VBk9h4rXBCnXH7j",
  "key4": "4bzH8F4cRQxjGp9YMGveJPyr9rHxxi2sq51Br4zyn7nzJe6TbGbwat3ziWE1awXj5jsHqd3g3tSm8D4AhsEFkeDn",
  "key5": "rPoAZfnySCB4At5Z1TjszzdcnFYcT5NLDMbVrZ23CZCzfAQZGMponT4SLBR9mSYgAnCzaqxFrAWRh1mkKivDED4",
  "key6": "BdpbMqdo4iDmySbdLYfZCxHo1UL7gRZ4hh2ggwSr3kiJ8TCBL6xekEpSQ39YQqCjqg7LsSN1XAYeRD3FQA4oUT5",
  "key7": "4mjf85tYRi1cjiJypCsf6kxfickJY9YS58jM74pE4Ldq1QiB1vHG23SoQSHYryXhAgQpL3DBN9TdtBKs1dxXwUuC",
  "key8": "bHfasj4DA5E3oWkTi7o599htcZLgAdSr4CtGcfhA8hRGzjWJCcpsy4FZMuYX6GDVpyP2RDxHnDQ3pZTQcu3Yuki",
  "key9": "4KXajqYWoRy8w25c7Uuj4i6147WpunyWD4Bz3JWjGHMFHsZ7Udiyd5kjytz6SDBL3mPq37Fv3kAFKTNQ68CmKyEh",
  "key10": "4wZRfGunZX2S7VeTuodvsqwjvRt8LUVaFTtPNjfuiR1f6yRfBivnhXCL2pYkTRRLgaRDPgTLC2P8PbFSjZbrfccB",
  "key11": "3Q8smTH7vRUfNxbFYWv5t9XpdjNFRLd6h7CP1BR9KbV1ytGRgdkVsKUMvNKSjNj5PHH3uUnr5tK8QarvQx8FUpum",
  "key12": "4wDQJsrWMFkb6cw2CkSntN9KvVN7CZaPf4DVFSdKzfuzNpyGpsH8J8pxq1XWKMfz4CrSEmuX4NtaFCgaDUFX47YF",
  "key13": "4FStFNEPsGVBAteH33SVkLyEKmdAYjvbGu5yCeNVZ7bEjoppJcxFAKAp9PRLr6p7SzffcZQPaiUuhndmoqvjsJqW",
  "key14": "54QttD6Mm2qVTWMgtxW5TJMwDsJeTR3kssCtCfs2MW2m28h91V1Dp3n22kcWxjJYaxZPs6QKLoPeu6D8LrZ6vLGv",
  "key15": "4fDA7oeL18CuZYcdyrKs9gwetwCXAdHNgzGntJ2w4adnq9pkqd7zW2azYeu4WJPwTPayo2PRCiAVChQiaPAQGFZB",
  "key16": "mgR3hfCfu5jLQ7rtUhwZrJYpE3vHrbJs3dajkBaQgGNQzy15UUGxU5htSHCi8CMpFvrT3GJLirQRpeqtTeB3hef",
  "key17": "UBKNnGZLZXvrEezJA1k9JWJ9ozCkfz8neDKbmrR7dkfCER8e3sxyqNKFg74bmf2F1JKpZEipQYHb4x82BvAQpS6",
  "key18": "49PXyKytYRWeZJiDKfv2PbqFYok254dG1ecAytR4XHJ4hsLxjuhj7hrxArAe7fNp19qypMy2KeUjDUE5XAzUtKvr",
  "key19": "5XY37hNQAuJbpdg3Uccd7w25aqADZWmSrXtA3KDsy7Z7TuygjdmZhHXEhkDYrtzSpMFyXEiwewRaqQ7e8ToqwYuK",
  "key20": "22hi9wGpSRvUAUxA3ZJe44RJHoezbWAHvbksW32NxaSPFv6zTJQE98VSrqk1hTLCbynsK2tkny1hFWsLHvAfB12x",
  "key21": "4TVK1ibvNJ6eqY9TcjZ8FF2NZjp5XD8xu7njzoxFPH9Gj1Z6yuF2VwzxKzmNg5WdQoMpQwR1ucCfonxQngxxa9Nv",
  "key22": "DM3pERJjrNcDhQH1Q2qbX3JDsYGYgm7NN1WBAYgk1BXNWenjxsSotcmrXkCfUja4XYSghERrxwMchMWSBYKTkgB",
  "key23": "2REVCNuVVQ4QsDTyC9uJzvZZkPoqXN2u8aDwoVYRLcogg86d19VtFcnKvM3CUV8a5fmfHh9Z6nCKS7XgybPyrp7c",
  "key24": "4JQpmRYuWqHjYR2jqW4aRjNWZPYyTuxySQA8J7ZbdKupbfQ2y6q8GaHkzoYLLruMU4gi9tXwUgmXWGsWHxXZ3iR2",
  "key25": "2FNmy6fSmVrYTMyRkGQ6j1aTfcgpkt9kiFXUkMdLKEHLMBr8eyyKdXDQwRn5nDxFM4kSE5QhgDrikkARrp2xdQdS",
  "key26": "2pF5NcUxmpF1E17iTwuQEjSLDWyBGmBFHL2DRFaCBFaVAbTUfnXSBfwUDAzj7VLxfPekR8B5qpVR1BXmmEkmTQ8u",
  "key27": "agyFNpLnHcxaXpHjYiS2duNboisvjgT6HWZ16KEySKmUTP97H51eFC9TYDWoVYSjJQty9GV8pYAZwwZdpyLcXB1",
  "key28": "4eeutyh338RmMnBRvZX8DdpKM5jQ874tMmqrv9UiEfwEojFKsuYbA3is93mZmMqQEpZosWcHEi2Mc21wd5fB1afJ",
  "key29": "bkC8HN38cfV7V19VAwsSxDyHVSdm8A7S7zEKBCemifDt9z3frTb98aMVMgg73Hk6rCnb2RNjd2fqQJQ5z33CEXJ",
  "key30": "cfC6vyaR7QKve2gwQTmt7e9ERqFHTyTKP9fbowAqfjrEQvjGTbWf5aEfTcY8htcBEvH8oskfPGAcmjsKJSjDjBE",
  "key31": "5Deq8RbrVPCKyVPK8G6ZrJdRWPUtqbByTWG2ZctWqWxaeB9UKZaLZJi46ggnBk9j9WVaiRetNeDqqL7RKvfA9ZWi",
  "key32": "3F5rbjhG6EuFgAcHbdTzVeWdEyc91R4tuiCGFrBTBSAJL2oYQj6qwcCt5AuLZRu6Y6oEMX55EDtcUMDD54eCFLUn",
  "key33": "2UD2QTADKye6hLB49NVF3fE6cFFvrRY4fMzeSCJUcKsvMN9RNP9CzuQReoa4xLDaVmKvGBmhRDCFEBQWspkAeJdp",
  "key34": "4NtG6PevPx7jADEUdZXfAdd97AgunwzATanRfZX5crfxbRzhtmx4nvqmrigLXvr5w3WExhbJ7GY5H644MA96e3HL",
  "key35": "22Ds6DUvV7CVDWeohXZuF5uzgufrqewDFhtLeMYvpHUFaFN1aEvuDsSFBn1icTnkD1grLgdjB5P3kwewNbMBFHbG",
  "key36": "2ucWoTpHPy1Y9fBXg4rZbwuutFbmoJfV7Euo9AtGCx5EHA5PvJG6nWK2P8MnbyzGAj5FLp48zGJ5VVbWkYyrLHii",
  "key37": "43mb4Gy3GxaiPR5dpN4NnXmgkdHEkhKWmEBZq8UGvci231CuJ6Je98jKGXWQMbPJGfahUbk9ePVk5bRkb1H9tpBq",
  "key38": "4R9BiWvoYx6PsEJTDRsxAeEUsTMyfduhzZBAiymhktpqWobLoqBUAGxDJUdi3GRae5kQcXs9T1SBakLfnefUuNH8",
  "key39": "3eJhoKSKVeYb2iqcwCZd5hqvCat2JwXA6FBG1Hq2MuKdtE6VdyB6BpZEpDUPaaBNtt82UXprhRqxWgv2oTqimT7H",
  "key40": "2wfU5SXfHRKDggUpJcB5rsJH6X4ozvwVF5docxejg9qi3KjyCWcJLPaPb9G5R1aUdpdG571SNm9azriWXaaEkb7B",
  "key41": "2ftBWSUXoJUS92fFaBESUuWFEtcZ8b8PPRNzNUSd8LqMXt9gf1mC1YkML3oyDKBWJxuZ8ViXpm8n8XN3atLH1ejU",
  "key42": "654VXWspEKWQEQqtxcxax51wVRxXVWCLhaK5inWvpNGADKDwsVBg53kX4Z8paqfpQzLTv6ASuhyS3RrDFkcYVUxq",
  "key43": "43DHGHrhx1WqGD7GDyTmLkQjgY7xzEXPDbYNXLdmBM3qsNhbkioDP81eqLX7PkkmBKyCS8Lf52KuLj3vXDHPv4jn",
  "key44": "LLk5Lxj9i9NKqv95HP55uuJn5dD2rBEPEipUcRkYURgEPAckhN8JpuQkGevW4PXrz3dNehHZ33rbuMmH7xUTKXb",
  "key45": "43ckuwAJE2DRXPZ8gdzH6QnisK3qcVA1cKjmVRNMNkgE5Uk6CttBrhiZubQMwTt9cuZPdJcGyW7SPDX7J6mch5ie",
  "key46": "59FQwcWj5g5fAbXryUeUHKMvjanjFA4wF2mAw26rBfe6ukMskuZrM6AqYdY98nse7Tn9VJJXneT7LRj4jV5W5G1X"
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
