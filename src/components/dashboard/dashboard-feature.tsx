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
    "2x5QXqsQWiSG4fuUonphad1XfQERDEiiB9wXr3BwuqdUQvxEnkA7Uee1qW7yzFo1LUc6V1AZkhWpcFQVAzCjCTdb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vx2NtaDnN5BoNAs2rTh6FpbqewUN7JPb9RBaDi3JxXDsgoJYR6Wzd453rMtLpZAf8YRpaJChAweHKYwHyjdrc5T",
  "key1": "3Baca5yCjajcHa7eoJ2QY2j1ivmrTRrtbfTedXYR53Y88d2BE7GCHAhrSx5s8suVexfxNBhAPuLdpFCdvBPAEy8A",
  "key2": "RwKs1JsCRJbmFuhehHSvBh8YESiNd2gob2gnDUKLu6HGW7uWTfLNywAzyz24n9Dp2pwTkXUErsZBFP4Mq3Ezveg",
  "key3": "wxUunQYpVbAkrupG5fB2KHom3k62uC6C4ytHnAgtViLtpwW24m3iE6mfVTFpRMfxk6AebFVsytpAMbck7nqiZXU",
  "key4": "3wGpbned6bnWX5WvmxgYnDK5PhmHaru6jEo5WeSBDFknxYUrvZF7wCQCVmV2Pe6JXe2B4qL39HTbWYuAXVhMkHRP",
  "key5": "2XZ86cMCVnB9tWWN8C6zFFaEuWK2L1LhBYZ9WBtgeTSZ3kM398Rfvj2DSJyfLQrhbAWqTDA4Npv8iDWQgKyso6jR",
  "key6": "5MWAydGMcL6zhgTRXFiRdxijfwe6FGKBJenhP44bcka7X2gZKFJrbrpqyB3Xr6SjcEZQ7b3Z1dTQiJ1EuMCR2ENU",
  "key7": "5tvNeH3rz9MaLf5pfbHvXbSxgxUoWBUPjPJ9fQ4FFdSJeMK6CcqZzLb7oH94VP39wvg8SZLTq6CNMG2LHXm7fhGT",
  "key8": "5nFE92W4zXEgteTGt3JgaR3kfoxGF2yyd2Vw2FqyEg7ycAmXaSSkYEwLXStpbqBdWRLtYVnyh7jsVqqjppDJQ2f6",
  "key9": "4DHkjeAEoCawjSCUJp4jry3x5TZru5qAPrk2oQVKRG496rPxqeobZSQNooS8JY5W2VmcqtNSoCtiBEZZ4WitCdGK",
  "key10": "2Leic21vsdsTA7y58c2R9fkNdqUWEAtGpyxPnSM2XFqmnWJKP7veBhsFK2ACvEp9nuoimgJ7FVjHqjFM2PjRETpa",
  "key11": "5foR4GYM7NEpBWGJf3arjuUDi3mvSNESowEuUHFv76ymfkP9HfVPFjE8ghBmfXPavHFz7YgbpntkuwwK2m3qdnx2",
  "key12": "2n1LoHx5GVmEXRxHRh2T2nmMyg9KDWoKfKnUtjxZAXigowaYMrnYqmCmbRri1ceBXDvA6qKS3JHMLrjzxufGZRPf",
  "key13": "JYoQHWosBPYM6wJiUbSSiiWGymSFNy1A476APoRiyzvvh7GWCtw87XbrCkegRtgTdE2gct51erAP3EJQxzVDjXw",
  "key14": "3v92QXDRwTxSKvRvtGYSejFTNxaoGQHFWCRXkhidMw9BaKVov31gvuwm4EU3CCtC51qj7ShV92N5XvxcLTaDffn",
  "key15": "56erYsGJEMV5Th8uMVHQnh5jAomVtcMsq1NqagcZNuvgK7sDY3bVXyQdWrcs5duX7VDkVDUNg1p8yFwZSBQHAnmk",
  "key16": "467g6GFotpu7p5yjSW5eHRWLBw4RmK1tMzi8XWPGYmhEidSLZdip64rhJTPQA2quXismitazApLvvjCn5AEaguu2",
  "key17": "XtRhYqh1jKEEWqRfM5nTpxHHKgjmoWmeZ7nHtpDHRtRybx1n1BnpjE94hNpJ1VVG9bnLofJa2ku5pTZtnK1cFFp",
  "key18": "cnuR4erZnWfYihE69xKDefSC4hUmX8ozLfvHixmXHDe6g7V7cjtRXMyoEKAMUh7MpJSyt6t6UX7sdtzs1m498aJ",
  "key19": "4u6m7knLcsuKEyDaXo7hrr6awVr9ddttM9AyGKkDZKDtSCLvmqasNUfNk8A4n2LcUswDxeYAT8HwE78STdaPpsca",
  "key20": "51hcgg8echvL13134pJZwWYoC3KygQcq356j2xxJ9CoAozF3tsFjfVZoQUAx2DexBKwyA3dkteqD9ytb6aLsfzGD",
  "key21": "5qBVCD8c3CCYnuP6yrW7SusQdfPqduQByWnXKeAuuLAzmaPipK4Wp2SeNphvc4Nvvy9c2w9hpkC3KxpaDor147vc",
  "key22": "57GybJJQ1aJobmAQEgj8NKiPQPYFb6zkTc5x5tk7PmdwTN9iaFti94BcopZwTbPb1otW4ScmBQe3k4DkKdj76RuV",
  "key23": "27c8aLV8SJb8Y4SA9dBsnMiLQzZKBJREYKEu92DEf7eyvJTqihMo5TySigYBiWfXVtkcod7dXnQKWET5mB4LDGAg",
  "key24": "5vKnwW3LnENEexfgbTEoUuG73sVNZqhNhMWRrwK3Jn6nReBnodMUiVKgvKq2yTN4MHpoRSm3ccettdDyDdAgDFD",
  "key25": "2nVgvR8Gq2yBZW5aAA8pa9EfqQnwhUg4e7DPfxMxwmdynjRVt5cepiFjT8JBTkABrP2XFonao6DCmFYpbC5Jvq8q",
  "key26": "5EjxR92aWqdhoMaJqTXRMjZmMWdkifAUSVbmBz2tejLLHZMSBM36pdKD2zRdUvta1JDUEBkVcfGFfLTkrV3Yzn7r",
  "key27": "4dXE8xMhkQvgj2eFiSync6mthEBavMsSENiDNBGbe26teAQ8q41te1D4mcQsaTkRCTKprAUs2RtQBrfCbEL3MXHE",
  "key28": "33j6eZTBiwo7GS91maikh7q6hCxTAJmgTxU27yGCsw58Eva6ctjmLDdkmynSZn9Fb6jrnjtHg7Dunj9snFYzNb5z",
  "key29": "ir9WScnbpktgGB18Y2i4p7pk59dNSDkkwEPGWRvSzFHN92dZZaWJz1NeLBwhAt4f4z4U5nHFCTu3puS1s78RUVS",
  "key30": "2Efgsis51y2NtQuNXoTFJcm5NeFWMujUJyf4kdyDU92soCx2FNrBD2424F5HmGpjxZRVYV4xn3Uav13mpoxPSg7F",
  "key31": "4nckohdCsHJNpzymx2Zdiryp4z1P7Wq5DWdFsWTRignWrkMb91Jba4GfbS8qCG9XcU2zVAJE5UPN6NDGaRXABjQi",
  "key32": "22jRwRbMDQ2Kv7rxkrErNrjtMpjJFAM7R9br4FCrSHoxzej1P6e69ZdKu1x2bJbUn47tMHgAHmM5VGxF2A2XavtR",
  "key33": "4oZQGhyZkC8TUH5WcK6JtMiBsGqkVbNnJ3ZHPNRrV58xWc2so6x2Udd6TwLrKAb6PVZwVThuNoF7ZW1VVekrDXZV",
  "key34": "2YxkerbqHi6k69rmjvgMwAFoDXkBVbdgiJhjgicG228jgrGPHdB8mQyg1fgCsUkXeXd2DyNczCF2sUnXz2ZyxL5b",
  "key35": "2H7PoUHtWnYxq98SDEZpQ5aijDsYeYP16fSt4TFoMKGoYkfT3PHPQxeG4mb8ZwozxPiAJvMM2XUdf4UYkQ3GtQ5K",
  "key36": "4TP8uaoZzBGU8F5rGPxWWfrjFvkeJYiY3d9cu76jo6YDvBYQDvCiSuUiQ5EPX43Cwp35jVKGKcomamYTxAKx4BaA",
  "key37": "mgovQK5QKJtkJrkdYuLEU75pDVChVirh8uSp4sYZ1PFNMHbU3emcY918BT4fk3toaC2NFv5HaG6kakeLLfwZAJR",
  "key38": "67g7GSjKcRPk5bnnyWopyu8ttZNiuE2CDFa3PEE71FUzBgFsTaBJR8tY5871JdjVgC8VkuMi8saHBNzmE2KoM3Qr",
  "key39": "5qWvHsAMW6yy5h2Q4z9wfC8dgf8suiWDt5ntmVjH3A9f889xSQ7SV2xmt3QSAwg42rnNmMBLw8FBiRswnARvusYg",
  "key40": "Eq1sqs3s39do2MxuDwGthSXedfT47rGrhoVrH7tha1QN2aBfYkj7EfbVmBi49UkcQdbbaTBJbuEc5NMAbfRseJ1",
  "key41": "4a7AkdgyLm7oZnB7NKUQawcgtV8KPDHKzwjbZ7fKST8tWyUrMduGJTQeLqBJsCGu7xWxfYWMCNXe7UCK5iKyJvjx"
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
