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
    "5FsUHRyRwypiw3K4LuboarjoQq3RGszsHmkUJRDDkkBLnFS558LGSnLUZu9YM8gyZqetxxsWZJy9xSPptBPqpVXn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sqdLPKdvjdu2SfgsLPk7J24eV2K3CnUn7YQr1RowW2Qwy2dDmqV7u6p14ddNtNnbDWCUBxDcix2UCHThws3AkZv",
  "key1": "DVyWZN7KEvi7hdMKKxyx8iWBvmxh3fvewjm7eywqhQTbUoQ2U4bh8gKpgBAqqNq6nSiEjKCg2uQAe4ciVcNCFhR",
  "key2": "3kp5wPjZp9EPky7t3cHNLb2aEq5VtV3Ep85RwNKh9EA9ovppMbiam41ifbf9f2JvELAxfWDnb1GwzTcuMkhF9qyS",
  "key3": "4pcq6J9s1prNF141wPSLN6jzunvC3YFHXcpiBcycT5SvbSo7djxoe4tevd7YBkAZEX8ifKsMdVxi3jEuQXkKU5t5",
  "key4": "2r5wf4DiJUAi8LoJYMZXB8nRKwaKwCUjRy2b8aJ7rxV5heXCt6WQY7wj8YRyW8mRgsJArPfpUbYstYDZPY323NtY",
  "key5": "2Jg7qxqswkZDvt6qbwVPznKEXZkXmPVLX9KRCJKq3wgx1sfm1K8yrkmsiFY9QJUfQ1Tbk8BpT3JxqgZkywAu7uns",
  "key6": "3beJzotbj6vuQdTaQax23iar1SpG9KaDpmHvtjrhgJUmQu6xgpfRLBQwkBKTGn5pHhm1jXeTCfRHy8eaVAkEp4sQ",
  "key7": "2bxkBdip5EtWGDWtfA5CHgrxRG8URiqbvUyXW17aDAEZTZbhSePT3vn69Wf72zdepsCGu8vqt5YEoMCthM6ZTMh8",
  "key8": "3GM9FFcwfDhqFAG5VmhyJahuFfayhneY8LWgt7nnAApMbsUhCA4cNUaEqj2sANMS6dvsZKXDr24j5xKYvDJejePg",
  "key9": "3UEha2DDJph2LVXazKSqBPF9vmqvaE8xSKK3kq5pFDBx5n2BQCpHWxPKMuXkc1W61pfwrrTgNm7ei2Qnjm8u5e8n",
  "key10": "3KY5nU1QFfnyU5U6Ef7dZQRqArU1RF3kndEarMBrWt7eK3JMqPXf7xwGYs5YEEH7LZJjVewnht9po1PTwoCWqMrL",
  "key11": "3BP8Lw1n4FpeDFYVubdPUMqNaoDvrzfQqXJGmcAaxeeSY81wNEW4VyRqqWUV1XoHbZ3VDydpXKim2xcEXm9VmNaV",
  "key12": "5bdXpu9bD82oeYBdChUKNxy76K1AgUT1BYMtF7S1wkkZ8XrYdeWpZ2PQwePTJi8xHFBSgJK9MGQPCCKEGcxZWYJs",
  "key13": "2t8t8X9AM9kEXhMEvhJTgGvHfEMmh8MaHt7SQZyTLgZiXsxP7Lbo2GPHRtAvffuZYSJm1bqju2AL3tjNMSg8Pfh9",
  "key14": "2ipazxEQqsiRQbQR6dM31S59wwL3YuvHRAzegGa9dC1UbW9Wm7BRdCZMjysxzTMq4uyudinrWqhK9isJnAhj6JFy",
  "key15": "2uEsxZqsBXfiACo25hLJvWrspEdHKaDUmhkoGyw6Y89mgBH8sQAxsjHpVmHDcPcD174VnEazenefc6a3VYyRhLRA",
  "key16": "4AH2hWi1KwNhTKbBDRXhxn49pTGLxegQtZ3x2vmscpJJo5GZ8b65XsThDnhdEfXUrfQbVXKa2kzCx85CU9nTs3qF",
  "key17": "2QiqZpMM9eZPrB9q7sQaTy7xDGh5wfckCKhyWJMhFwLnSHKW8oSarmF95jpJJ3zyZfRk827kyE9GbW1FojcuAn5n",
  "key18": "5Df5ACoSx5z9hioxQWjjorhMGvFXBChwCCXa9kfRmgw2GUfwGg3BMsEagq1V2eKToGe98nk7p5U3boLumFwnegjG",
  "key19": "4Z9bBut7FyBbrYUWShbnMPLdGdj9oMi7XgWEJU3bMYD9CiGtzdMVUWaWuCwwMsCbsyoxwxsDSdm6Up7rkiDgL5Yv",
  "key20": "5GjFBZQvQ6KBFqJBsEn4dcbDV8ejaMc9cbpjEm8y1DLaKLW147suyxoCJu4cVXL3AZo425QEdrFvKtQPrQjU21Cm",
  "key21": "Rt3vZV9eT3jFw2fE7SebDea1yLwwK76JoT5iMDcBxz5p4r4VeoPVELvw26dvyEAMvLho55Zk2AcAkZtcyV1Cr9Q",
  "key22": "3f2hfHu3FHJFG7DTgRb9BSSw17GBMaeWTdqMgFuWkjohMo8iMWSJmmLXvayhdFV6JVmQy3Sw5bn1CCDt5YaHj3fa",
  "key23": "ZtDidjvHb3Q8Hg3xrFwQ6bwAXGsGMuPRNm21ihCRYfKJQ51LDa9xVn9N4qFa3c1vqXG5Cv9AUqJrWLZ1CGr7VMo",
  "key24": "p2fzN8U4kBVGy1dUWUeS7Gvw8cPjhEQAjxczrZKpy2wQJC8Xga1cHHgapo8zPSy8ABq7K6PYkbYbGQ3bYtAV7jJ",
  "key25": "2L1eq76nHLsSumHkBULxZHFeWYyUtUQcesBz3hA2PNCJhszSXS1WL7FBuKNLCDjV2cJgUTcJPwkVQCpSFJcN3Hc7",
  "key26": "67UFdjupFNPb3sRKwL3CUQvVsp8LnTfsc65cWVHVPUAUtgEMzVwC6PQDRo6cNBZxqk18UBfAkhemEkY8uYWdt7dR",
  "key27": "5y8C1RP6Hq5caRoZNMqaBwpxYA83yTGd9m23W3CvvPrMC78RVsHbbRxwLSz4sqW3TEzSFeW4cTkDnfoaZWcpkjez",
  "key28": "4HZz5BQ1heNcpBXnJTGxNoJTgGxdVNTNHpQCHsHLV3z2GTGpiLQDgfM1Th7yR7fjTGnyWoVKkCw9CPakpsi6GQfc",
  "key29": "4QX7d57XCM8Mj9qjStQQm4Rbvkd2HbgKwjSy4B9dwg6z2JAezERuzm7MD35psGDri3t7gdXS15DmFvz12425aUwd",
  "key30": "5eWYNYK1kKoeRnPd9EUyb7wsHKAozn6Z1yQtLrrZGnNHGASzxbNh2cYEmDDLJNBwFDqoeFfycikhLX7EWr3VkB9s",
  "key31": "4Z7PriDes4k1aDrxw4uQkxg7uCrhLDcKaNooHo4jr5Erec1kKkxKbosgJPnYEjyY9vDQzCkGPE8AiUxvPzBogzsZ",
  "key32": "Xbm8suNY8Vmw4trf9h1wEr6B5uKEZVA7cicz8iay9rSWE8jP8sbyuwTq9ZcqvznbReZYGtoq7hBK7oWSxiuNALL",
  "key33": "2Z1kuuDExdK2oM6ZMUjwcWM5Y5ahTqnF55CLhsCz6pFFhQaBwDu6Dpo4AAgLg1miskyZcUaH9SUXnHgaFnQbXJPH",
  "key34": "2SvN6bCSVLPkqQsfWHcq28z5bbDiu9vr8XB8cMZB6tSS4Cv8K7PFe5ZF9M3inc54jfPo7xQuwua7Mhr3W58VS8BM",
  "key35": "3cpADbU1PoDgd6Vvcs4TGV7yYZhydzNLV6UjeLWhQziKXVRVZEDWqAiJtS4HuPiUwjwu2FUXuNfwoh6JYrjUo3dm",
  "key36": "K7TiyZEUVMBkSAUDJyzyqzSd1ianAtZW6VPCxaNqmCVDNpBoCxVeQmhgZiUfpYnf8rX6RNUebSmxBwRw51TVXm8",
  "key37": "L5j6T2tjVxtapQvWDcPMpe4oSQvM3o5CfKGmejfJQdYhpsT2UhU3s4nLWa7C8bF53Te3tdaKN9nbBiyvh1P2uaC",
  "key38": "3uCNYp4qzRbgTxmFS2k4f6GN45bjJuztzG2MDHqymxM2P91UwAXSpBK3w6EP4yLqoa4ogb6NXnd1pBLitXUJiYe6",
  "key39": "7Xawz4rTAdQYAXuW5WEW1oJuAeMoBxw4YDwB3itCgj7APkxsBYzTbbHPavMfpYoSXU2PA3LJn85ngMWibzhoLNd",
  "key40": "3GvSaXXXMbAyvwzJ71Xg9AErDaKG63fqm7VVBC3mC6d3bzErqxqJb9ZRxXWQEoHq4pBaJFUa4G8Kfb9ikN4x6tvc",
  "key41": "4t9HSQMATV8t4Jc9J8csRzuWPTSs4Kidi4m3T1c4n4V9b1EdZ1SofWwiXJDA3nhPUusqD3WJF9we1EiPXhiVpWJr",
  "key42": "5pnZfkvkHVi17vLrmvBPVon31DpmLti9F5kakbzibC8nUBMX3S83BFZKxcU9NuNVk6C1uBfd9R9g5yVC1NPUr78X",
  "key43": "4qpG3FTQF6c7maGMK4eLfRFLgeg2QhyVQAB3JS1W3kEyHF5Lu13fyENCGdjuC3adLvLoBe7yirpTNbX2M9Ph1Tm1",
  "key44": "7m6if4d64pczeYdNz4ugRpJeQbnaAHehjpW7MmshoSC8QsWSvue7SYym7RXmWE1xFwXhfLNLJMdNRNqtznX3bUb",
  "key45": "3b4me9YBGhBjn4hqU33x6NjqHrA3gBXmbZ1KWb6WseQyP5V252aZQKy593gFb67AMbgQUUTvBLMptY45zqxditi6",
  "key46": "54mo5CWQqsyuKi6xagD1JisYGFt1QSfddzMAVaZrA2BFNVj5QSFYD1jV8saQv3mUBG1Mb5YpYu9rJgDNFmFWRf4n",
  "key47": "3c5t8zJRdgdqbxCdWyHkVazbRJEzHV5KTGyLyUvuj3kJ1XPM3FD5V9366Redbv4u5dgm8kEK3wMEbMGRkAPpjGEX",
  "key48": "55tzxFkU447vVf3HQYCBYDaF9qLppABRLtwFqTGQhfsDqS3h3jTMijCTniZvCFNJYqf1xVDjZWB1gLPoY7NB1HVK",
  "key49": "383788FgXUhqCnn5Snp3YFvoPvdorfiFV25wkeLnjqEPY6ati5bpzUoj9b34oAVbifmz8DAJ1rsJHGqCZM4i1UCt"
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
