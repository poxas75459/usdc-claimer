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
    "2N63PgA4iiKXYPWHYg1RSMV8oiqWNkgcNBkGt6tBNjii4ZrpTZVn83UqvkrkAgdz8i2Am34DHVD6pMsqZY2VMoTq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kX1ek9ZRSURVEfpE5ogYxwSyjU9h18csmTT1ihge37wQ9NDiyucXCroheLhrYywLWeFwXUKepMcGCf3STUZF6Rk",
  "key1": "3ABqKa2bYHZFRQaeGC1tFmsyxP8UpWqH235HxSjh6M4rQwmTbhBmJmrV8cJiXrmx5s1KbV7zQMQapryeuaG9wgR9",
  "key2": "4RXsAr2cbGmyVP5XBXTca2dswM4MwLctGeQHTvHSZZt7G2ayEQQgDDy3UNNHorTXpiG63cSPHDjsQc7MHCYP6s4b",
  "key3": "3SduyrsEodbFp9GgLAhQTzLLNwR8quxK6NE21Byetdx9SenyWhT7EzbRsaws4b1jZpCYj9eY4GsQSt6hFmAs4THK",
  "key4": "54xscCaw8myHB76s6rrkVvM3a6wE1TTzw9XeYZwNar9DGTsbvxRoqLM7rfqRUcozYAQk3JK18wHFHk4S2JGbqhUf",
  "key5": "4stVPdCPJpMCnSdeuVB39LcahZxEjhUZ14nTu9BoDQsDnkp4HUT4fdRMJk1dkccjeBnpzZJBaPRkUhpN28gRK6Tj",
  "key6": "3JoDAthreUKaU8soSzdJqA6KVuDAndZoMSL9pjicfbrhzeVBaz869AgPJUkcrRueSbsUPB3EoADfSu7xcsdMMd1G",
  "key7": "3PUjUyAZ5j5WVh8vvBFCnUQFXcwxVg7T3Q6TFmPKQMNv9eD4JzqMYQjZeL89oyTMavCY2BaNWQ3jwWMh6Ex2ToeZ",
  "key8": "3W3kybr8ZiVgrif8dxHovEv11VUXeciNJ3orGMghsDNM8mLjushZKH8sjBmAnnNuscTPYLuLfxeB1xUL9ev2JPy2",
  "key9": "3omwjJh6HSRqRRUwPCfE5edE18phpJSodpFa6Ar9GvJwW75rNznddEiuik4nSaexGGw3q1yxYcfSbwVH3oGLU16p",
  "key10": "3DpF932dFJSzNELh99t9WkT8T8gEG4AdPmRzGY392PP6KVdwKnrNF5zeTKg24DGodKriJYTfkWjkjW9kV1EgF4LH",
  "key11": "KuD3EWpiHzdnRCM1xrWRQK1eQrL5Sktvyrf9wX2eDDFsKLdb2ZB2JHJh2PZytYVrjzPG9ThkUFddqqBsiU1rsJd",
  "key12": "2g7GFPEVWPsefJJStNqYzcRAuqT7TbRCbGH5DS5ARVWnerUFSHF4posCd1r6SNM3JZgQS5NnkkLUjZvHtwDaDcHy",
  "key13": "nFg5inuKhan7BznvUPyDUtZLViAK2hN6EuYyEDJ5CzZEoqBcH6UWDpGEiPBb7vmkeiUER9oEfVarQ1QDLnVn4RG",
  "key14": "2cpW5RNegZNYJMmdrZfrsjphtcpJ78GTf53DfpA6ejcAi9M7LEq93Vgvx4gDZfVHhCixZ13Riv4t1o2YyZD5RBkn",
  "key15": "5psKfLFnZ3E386AT6mUS1bGTzJ9f4PHZwPrKQsxt6FYNeAoqVadKqHUwzDW8nUmCKdFSwrJx53CJzmYMeDpmmRp9",
  "key16": "3DxDdSEAbwfMZigembQGeq2d9XTWm6Yg5sedrp1id1S6u3348ScdzoN6FKpobC2QGvdGiSqZbatcTEjnMTe3g7Y4",
  "key17": "29X12soyrc44QAPecuboNgnbrCwngNZmsb5ghj8ktXcJNAKuLN5QxstYRprAxQ176NJGUpYVqCD5SjeMcyavnQVf",
  "key18": "5LrPi9PZh8NYd6PdvHCd7PYvN1xJTZu8EaexqRks2Yu6t4cJY5HtEYirRN3PjnLuxHWo4Nea6shqDEukhnH4bP5b",
  "key19": "2djsHBKuLj3d8J61486BNRUZfCv3Yj2KJKVGUQ6WHnyF7auZnhuPTo8B33Lnu8snAXmPNqEqz7zA4mNqVPydXiRh",
  "key20": "5chKsGzL8NYDVa3hSMjbWBFsJeFLRjnUbZ2UtyT6yfQGa2mu6o1FezcsHkRNMTGQSYaRCdJDc45Cz6DLiEPHxgC6",
  "key21": "2NaiAg6uuS7o3NfsseJXi7j2LZ3zf7gUSGA4f49LhS6MMgN1YBncCUDyya9TmHPjRR4dT5FDBiS5mknjq8hMjVQZ",
  "key22": "3sfqi4856SKUKAXMiTxcyd4agvhAh9TTFBoBfrbaPHh7hLkNmobcerxMor8hcM9J5nemCD3qZzPjy6TAteTxm18F",
  "key23": "tCCCCXymrXMtvfRFgtTXSMx3mNjwkNqvbD8yBsQtxWuf7z2nAtvd5wMGvcLMYTJQjjA4d5LsEHweseqHgFPFTyC",
  "key24": "35EN7NXvCffCaWXg63wbb8vXL9emKnUxFkebQVoq9ik2X4guwc2mV3rmGtBppbyzaDn3aPgjuz4jZDafYifxknA7",
  "key25": "5VqzBSbkL6MtndtLvFE7giBqPbSK9Uxdxz6LjCe9j5KhQXooZhwmqVKbf3xSsUrN9NDbWqSi2KKL8QN8qGbQSdxD",
  "key26": "451oMNbGWTczE4VdzYgf8ffDJzKVXMf767bR5yzFJtWavPzoPu3dLvr8nriFbaBeFcNdv1VxwyyJDU1TPsVArULq",
  "key27": "5ciYUJLKPzR1P4Gf2FK9LJVRMKTsEbWk4pw19BE6bsLHAGgvCkvexgwYBmVqMnzLpMAFNMX5zfQFBbriPHTuo2oj",
  "key28": "4ihXUQnxJTegcDS5tq7paobmwbEHn8J3FrWfLj7uAWCgwTBpvyhRG5B33hM6MaiitMimpq5EmX8RwNC59C9YUp74",
  "key29": "3x8TvhMY5MLpL6SXUPCKDkyXvBaLyUJYTVYxNfYMBWuceV6g5s9VmVeytc4KCMJqgNntWXjefvAEir4JQFb8646m",
  "key30": "QM3a8AS4QpW79PLcMPePcKMUsxuvDjCwLjRNHmsJAaoGkxu9NBASFddHu5FyVeepb2J242HhWg4LFHdHqnjKQEt",
  "key31": "2573gFadB5HZ6nLVJpkqV1Pjx9p9Xzzjf2nCVwPz2Z3rfpRHqozEVLd6En7briUKoQJkBMm3MjMkBAqLhXm4CCHJ",
  "key32": "jN6W4hc8Pb1ASQmo8E3isveaoqHxCuHTczNxZPwy1vobVckanA948kqu1NN5bZ8r69HyHnCGbVmnpTgzzad7fJk",
  "key33": "3Cz1GQt6HJSB76zgo6ZsMTHK92xNPevdNpQEhReFpLWao3DuHJFMeND9CgtiVLUFZoTMUboUWWecq4Q5f8pZjs5K",
  "key34": "4jo7RubSqzm5H9EJTBk28HPaomAGHr1UVa7dHvNmXnrnkEDbP7ymmjC1h5RF1Sp3PpRLRXKrKp8qRrhFM7qBKBqh",
  "key35": "5MUDvXuiTEmRm4VtQpvuyppFZ6FmZeiTVvkkETxzrViTCNEZDouhZwyis8vhAXFB7ZfPuv5S136WN3D8tdkbFUm6",
  "key36": "MFW5yad1coHNTCXrZgkhixuHHeNStmm9fPdTSNRYZuavBtTzK1154EKSQriboL5dL7bCh4ZvCwhmxBdm9KVKrka",
  "key37": "39Rfaeb2tkzpyVjgLNWW3rxQNut6dX2YVenV5hsVn9ih7d15cGTVcyRiX6YeLh8W4zVrm158yfVkLSkAyfYNHCSr",
  "key38": "3D7fWrGVMNRm1VqZofrDWS84t51pMHEws9QRxdd88fSAQSQVbdng94zH6jthqRC5XZag3u39mYBtXdYN5wc92P5P",
  "key39": "ogmAj6aCJNL3Z1w8dqFt1HqVecYSn7V1m6YVnV1rL5UENGtZ8pmiZA4KmepKXk6BEG458JYJec88gBw9Yrd8WUP",
  "key40": "5pEeoaohw13C2KyxBay45rfU3nrPXq2tPGqXmWap7hPuu7oBVdPTGgW14Y4BBpwpJSGvyzYVq1Uazw8ABtaKb6rk",
  "key41": "4GeYuGskt9rMRThTwBWL3niasyxVv9SNuYfCzyRhKi1yE2zJvGaAPEpcQhQoBGFajStu7NvgXaHWMuv2sctdb1so",
  "key42": "3g9EBm55fd947vFv2j2dAdzUKMS1nPHRersJpiGaBH1cUfXsDn8w6ZC6mKsQLERbLJ94N4L4Ep9LCvthcYWGnAsW",
  "key43": "29vwzyoRLoMr2Nw2nnKEEfC9JDpcCwgyspBhfYc2rBe8bChHBximB754XujKHEXocmJfB4Vr3EzBEnzPL7eTfhFZ",
  "key44": "5DyH2bZekvWsoi4KJHwMB43L9CwjVZCZPAXHsV7C5EbyALeSh5YGWQpPbZPm8wEDAP2rrZbjoHKkFb8MWafMz1cF",
  "key45": "5cL6RijmJtSZvnuMVPNfrybMNMScgGgMMXbTx53UvDcsJtQ6viSiYRQS2oRTSLDKuQfZ4pNK1UdW8uGouqtNS7Dc",
  "key46": "5G2wL935gJeBBg2eXPZoV6eJdGX3fSAaspubwpKcL7Gjxj85GCgoUA3QQc8RnJMEsZMkkQ7rWQC9hRtS4Ab4UeVc",
  "key47": "5sph9cFFPSp6PBw2aJdqMVTX6a5QMqt723k7q4AxuacZb66mxro9Cyys9F9WFkAt6bTpPU5RG65rA41iQZGHcU8o",
  "key48": "1AaLvPUtcizJ9kgBsKzm822jGwJmEYwtzXitWmpLuZPp2MfWYLu9CEcZ3sbCpAV22hjraHYJeZLoz5BkgMArn6q",
  "key49": "2oHkeSx16CtRT98VJp5VhcqRi1vgkvtTTy1uqiN2Hjt9sjYtjJo6evg4D4DABXgcZe6GEt6A8fkZzzGgsDQybvpX"
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
