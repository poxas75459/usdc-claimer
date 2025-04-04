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
    "59HsxbU4Q7yrSdoBgTafGTH1SoCtMv1jTCy8aumCdtYoHvxxkTRobKrqoxtu5k24CxLqMPDAbBGGURVtMSwvpZMD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SKn7FsZhNzGywTtLFpXWEFnPFGJhoVzpKpGS1yooAMCdqMrhuL7Ky1UEL8wPAghb3UHfBUBYHrYyTqmyW9EEgbC",
  "key1": "2Lv6B2YTt7PSpD7GDDhN1F7yxfKkToEUqJDyPsxAoqAwf7UCZCLCXZz9QPPZjC5ZwDY1jUGrHhQ2k5bmRaiBeCCU",
  "key2": "3ArVftyBdCGCKgMeVBsB6R1xMWSyQvjKWakU4AK2V6TMtBqpiCCcdGpUGGmNmrt4zbRN5UqxSEs2g1sKFWu7wU9",
  "key3": "2SumrJZsBH8z98tT5qaS2zvBTmVaRMvdHZLRcQRSD5JVRwXGz5VohYL4uBomCYSkMKbhh2EGDUDopNiCYhgfFtVf",
  "key4": "BptEZNo8dy2c31iQqgRisShick73NB1CGA1jRkCEQmg1BTSNQN3ZmJNXFKvZxcj5178VSdZmYf2iFXLj3fzZhiq",
  "key5": "j6rS1QFxbbpfkdXzZ9bap3CBd1kZR9EHrEmtWSV8hnnitdb6uT5NmdkPhDY8VdewWZhaMLscYMAdixEtxHWZTyn",
  "key6": "2ZMjoWNWBt7e37LdSodsWEqQxCGxkjKnxggSnq3thjsotNv9RTrg5nbued2rzoFHVbQfzSKS1DLC5ZvezXmssvxH",
  "key7": "XTUzVvLpDDskxFpyD4SSLFqPoruyfEshL6yLM9M9jGwZ3EGyDFaRCMUwYefUrjJeGVbGV7HcnsHsXKe2FqQTFjD",
  "key8": "2cXbhC6bpLWvtzPxumd6H4ES8WMgkeVkzFFXRoTiShVkUKUSCmDZgRZ5QaqmcxmTTx8SZMczX2NL8MBF5Bc9zCL",
  "key9": "2Yz3r8bFjNUcycGHiHQjQRnSbTiWQFMXZEv5SsYY7deCfY1GkgDBCHPKaE98UJ4qMyZR9mbGpeqVaBGdAt21bppu",
  "key10": "5Gb68mSpzRmw6g2VmjfWDJiVerXbefQ8MB8eS1C5u5z46ccFEGEMgborHxD4bUYB4V9sRJv1eoCeckHCL12MiMA2",
  "key11": "5Z3dxJA97b31tgNpyTWR6nHnT5xgNQxJqkvPsk1h3MpdiKMvPAmciMojHjuMdVu1MzCdAQk5KQf84KA16ASpYk1E",
  "key12": "44PJzV5BaLonufzMs1Q5FM1c3QXPdWC23rsX2RJoJGWYRtdAXcGFr3TxtLieGeHquvRram8JKa86LipMmLqXRQzW",
  "key13": "47BBZvjcnwE8HbrNkU8dNGqCs4ecsLJW2oR1qS7RQbQnZPDfNz47edp2TavcZfVGPn5xxLU8bwvxZT7fft5A1RLa",
  "key14": "3GynkAmfYxqo1iag4yTrVn2C5mHiz98wMajpfvPW75h8RaeycqiiJvgLYkBrgkY7DLyfP181Uu7XbHZuqaTwi8aw",
  "key15": "3y8jUryufTcKhdoSL6B5GUMYat9zamAkdLxkgcdtXdii8VuNd4BAgeyBKpxSTebB89TDYLsqhDoWxtkcxezYZmFu",
  "key16": "4J8oGrKnim2rmr2VK7f6g7wiTZjWhw8S4KBLCgP6f67MgXKLhxJuMgghG16P7Yuhn4Wkis5Kc1SvQg8qU7a42aCq",
  "key17": "dyvUVxgcCbjmSBn4U1krSb13wMJcGyZgqoLBzEUmKBCtWsxiSHrdW97XrKFn2LfaE1o43sWoebvKys5r8a2NMd2",
  "key18": "5djKQpApD2GskHnQMM3iijLY4DnRn8nqjTWRr65jTVNtHrn4bxPHTRbyyLCwRt1BYBkAeysDVAx3Bd5EZtSAtLKS",
  "key19": "5iECbeW3wu4YAjiAbSH39GeHHNVEXR6iNB1smBfV4DfgWHd8CPLAg8d4k6yReGkCmR76LmHUcBJuayujBbaGLduV",
  "key20": "364fKP2ZuK58vWHEfMU3STmNXU4cMUroobWggCgynvS3WhNgPCjGVMXPLYngngJMS17LphpFPiihoJWBGahAp9TZ",
  "key21": "5WvKAXPWrBn1axh5yE83GrhWoKZFisCaASJPYARjganWCshoApMKaQGqUZYdT1sFKDBppqq9JD5D9nvz8pvhK5Di",
  "key22": "3YiptcB8CBu1Gz1FkrC42dNzusVRRpsyVc1Qr7UiabfDT5i9q2rXNFVK2JRVMsteKAX7NMRZZAt8YSMnetRw1NxU",
  "key23": "En4v5cs74eGjn5WTzrrvLskwMw8nL8so73Hy7nhpKWLPwhvsKN7Dn7KiFywzzYeMdHCkhBeMAGZThsoF5Z9r4U6",
  "key24": "2ZHE4MSPTUd11aQQrPZdSNGnrkiSiQ4hidfiBHimEzksgKETCZc2jK1L17wmXxH9DfGmnymqWYLRp8dLzuFQ1AZ8",
  "key25": "3WX3r1ZYtmrYwaQRDyTXm7yEQ3Y8xtEErLr9bTTpbpKrP59LbgMYsbvVLMx9Yu6ETvpjmQCByvjtBfifkhsRvVdV",
  "key26": "4nfGwyWYm5hfx56n2qm57hf4pZKVdCQvtyY8Yie3qQWKEk8n8AXHZnLm9ZBgRpei1kzgnTrR1Pcv3evxn9EjAjLB",
  "key27": "4qPiTFeDtJz1Y7JrmGRcjuwusQndGob5fAzvRsNhwN3fahadpCaMK8BjR3hv9SiwjnF94LuVHdQtHeETMoGx7ZHc",
  "key28": "4FwA5cQG2k8RdF3NyCMbe6Acr72moe8heR9hRCoEB2j8ndk5WTNvZ3PSNejJ6b8F1Bano8npFwkDE9hhGbpCNFuq",
  "key29": "54CBxLWSDbyZQCf8fFUNkb3G21iecgp8xSJjBTt65SzKP3oC9HY7ENz1TfYuCtsB2YeH6e3KXzP8cShyGJv8MUiJ",
  "key30": "MD2bwD3KzYqDSQuwWGyjsTv4o8aFmfBGCmYjDU2JejR5JwGY8btKvw6hDwvUB29iPZTwszJz9BgeT72qkrRRA22",
  "key31": "3SuVnLV9FuuxYvNdw76jKctTfJM8cXNbobGSryr6PRTCMYBkYuWHGuMEDgm98omwJjte2VRgjkgMRSoRDV9tGKtT",
  "key32": "4DUX6coxG9ctEqVinyzQPs4gV9X2Apc2bgpmn8Afc9r5hP8wfT8pAMuB1w7EQcB68Sn8VkUAtvB62hLvVAjWKdo7",
  "key33": "2ouue6PJ3xzX35Gjpe4kTeezvpAbAos6DBkARTSXK8cM7Y6W2M4UeWLKqAAg4XLm2V9oL7yYtEFhJmgPrn1psf28",
  "key34": "3JfyTQ8guPYWDQTDLJfWFKTAA7Q4d1FgYjjJtfoeUxm2VwwzDPGgJafsTracYD1c5KZvT4zSCy3rQ9PYXKBWBtAM",
  "key35": "5KguRy5Y4pDEA7mkjUWCzaZEDGG3yyJhoFibV3zgtWbUL1a6QWY1DMn3Sj143KRFAWJWcKBgwWtsdfDSKkubakSV",
  "key36": "27gNMker1KCv4aefF8efzWcY44x3nesDyMpn73sgMUBNN5wD3EhGygoaUsk7nfWRu4JiDrtwxQ44PhKpTJhWGd8o",
  "key37": "4hYRFRXqkdwfoJ9uaYkSiNZW75ovNgq5VmeocKr4GCftLaaspefWYFjv99g2XV4n5bqknbfVU3fhHePjhE1kSfNW",
  "key38": "4HZPFZovjUzvLnHCsPvdxhg2QTKv5mL6VtjUwy9ixRF9LGGFbX5GtepByT62FEQqxWF63TrYN6AzXEf9TYKtZbA4",
  "key39": "HfiFQp4izVNovs7sFNL92c5547jUVwMvTuLLREpJH4Be8emB1GVaPgphoNA7bwSD81gxfTuxibDm8cqqzG756Vw",
  "key40": "4SQoazC6cZu9a1pwsaJ4L3WdSvYvFExW1MYaGbZhSs85oHSvxZtVzfTELF5aQyiw2CfrYHfwVMJVxooKUAwWyHBt",
  "key41": "3PWmkx4PssAp5U15xgzBGBtXMB9R7MM7hypkAyqPoBjKSEbiQBYZEKwSzRdFZQqtsKBKKPWikUg1CyZ5qQmopCWG",
  "key42": "p5s7Vf36EudsmiP8Ra3NTi2ZgcTqrD6ywn7YHAcLuhbo2DiWQBuRTa51qL8cmARZWmkRh7bfuwTsfhFeg9oRY1C",
  "key43": "6618oQossnouqQT2hQVBEtiNRpCnU72oYeZobJd65dKX1ACufrymAzjvTwAU5FXvoRNchyavQnohHwsZkUfLC2VG",
  "key44": "56dJq3j8hN54uJ8bx6KdtHYhns2k9QgwBVZoXZDUAAbbpJ6Y14QQmvKs2jY352o2n64mFK91HGdBS2uGZUfwc3fq",
  "key45": "5UKNM1F6xVuBMD6byLt7P9HuYsDt118JWpxYU2Kna8uZtLKeAraMpXQNggwpeAmR2vVZ4Kb2228jeLPafBS5jiHG"
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
