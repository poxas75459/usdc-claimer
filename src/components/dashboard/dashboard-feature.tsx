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
    "3nRMphi9M5uHz3KzvWzt9idegYysMDkTer1MPHfWXe6DqCVCFWyubYsWE3Qt158NWpjHRPp3zjw59q26uGFJTXY2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oy1zKUWc4RHoPcFwdZCkhPewo8oCzdC5UDe8kM7LKFWxveybSxPQwdoGi4fsfZBBv9QRaqCNEc27so7VN6swDaE",
  "key1": "64MWuSHt9ndh4hX6aFdWksovDfNTRchtb9CydevNJi1De5xEFhb6xorQv3kQLHmvJ4FvQaKiNoLYH3cL52ryL1To",
  "key2": "2AGfbReNwR5Ntx5Dzo9s6mm6aB47bNiQps1RikphVu8DMN4N6oiywwEER4P4skXVpNkUrBfoQA9Ee6wdMdasBoDd",
  "key3": "3Xk76hKwTPs2ZXN6jvddQ6mfgCW3jjrspj4WWr12NTwFE55QQMkWTb3r9gxtmEc7hztixQqwDRQkkYUozGj87xsz",
  "key4": "2MfgGEEok4TSXVA2Ew8xgDt255FomavbrAMjM1zJLz7icqDzDKvtisJkKwxig34cZaYNPAPexVauiZufnJMdLPz9",
  "key5": "5GBEn6EcM6aNFoC96GSjjdnDsY1dtadGJxDGe2VgotiPPRZXj1gpBbec4s8yWPo458SNabFRSWmYBhNLjDvw2jhV",
  "key6": "4aDCq979K5vYZU4P2RdqMuXZ6Lrb4S469xyFRrtwjCDkfbftRb1PvgT6u8xU4MuWQm7fhdWBtJ9cR5dCteH2aCcH",
  "key7": "5ZGpiwDBbkFFg5HViPf8FHWhd6hsjXXNyKSyerUdifHbpDAqmY2jAiZanLANWyL5kaSsasKdxdEygLBrEVfN9Ad8",
  "key8": "4PeT9oTg8UwbSPLzepYceXi2hzY4ZPHoEeVzDjMVwPWC3fnSiPD1o3FdNaa6YunKzHyLgrFoxBcnEvuqC5Fr5DZR",
  "key9": "3Qya5uPfpQeq6jKn94KMxMsuA8bxX9N75hC53uX9xuBqeHsESgr2bBNT56vxk2vfPzsPTMbXMiihLCpzhe9MNJuL",
  "key10": "2Uy1LKbEThSqshUjwBVn9VZfBFxuwebDu8H7vzpmTo9aiJN8n9uEEpqt8QCJTHLcezwxPQTJsXZcuzb6x79fGeKP",
  "key11": "45cszbux3WoxLvmbRZVM4n7AUHHENPVvrdj7EYP4xPsx7Hz6r8b7xRqq7fPwwKPXbqeYku3nATBwr8wnPfoGRCL8",
  "key12": "4We3eLq6pmjH1mMBX9zDAhyGbVj7Xme1P3EFz9TqZDXKKZeS6x2Nops83pVLcPYijJ2ZfYf7ECJh7HHw8nNpRUB4",
  "key13": "2ncqfeagHLMFnW3f9z3UC4CLjdXRnaKLt4zjpTKoQT8xYvLMH2PqP8niLf5tEsF4Uw26atv7D9BRnR42Li78CnTH",
  "key14": "3j8Rm9eCJSUhmB6sBymoLoDaeBzVNbJ8GoZin8saQqn8B79MbPyTbGKWW5D4TiREC13F85jkmHZKbDf2NyrqvKii",
  "key15": "5eajRDMBkoAGBmBAL9QREDXVCKTLLaQnXvQDLnj8LejDp4nLjY8juKXqUFmX9R9jgzxRoKz5gPmJpbPFLoBMsqkz",
  "key16": "5mWS7a3tfjo2WyiouNrDfokTJrzb4W3RSbELqP7cZYqGft2Xj9pmhuHVmCfAQUC7YTLQAooJLyf6Rudm1EMuQh1N",
  "key17": "8KdETZbQ4MQQjpY1fXXL4ksKQkkDboq3AEabb8mRCSabbqvSvfKGPA9LH297WkohBuCVXDaseMruJFEnSawo1S2",
  "key18": "5azrwLvNWK3xicV7wFCybG5znUXLFgMfu9NyF4YVwT6fYqWFsFLmWkTZZq73QieXx2XFr2GAP1ffBegsFKGuwNHu",
  "key19": "4t6BT1cdR3MpnvfiosctnA3zQXnsMiwspR1LeRpuS2z5unfuZ9ELXvBZEfz4QAoPjDXNfnVa5HBi1PaWmCHNjSTY",
  "key20": "4rzg2hVH9csTDc1KNw2mMTJqsCZYbGVU76b38yRkGv3psEHhnxgpN9CNu11KGpTNjAjSxToKZJgRQFJA2CQgZjnh",
  "key21": "3nPDmBMWJHPjRUGdyVSBj7UQoqr7n9hnmaQtvUxVAxiWpxXPGknZt1qjWeoRVvCEjbKhL1GftLWtSWnapexppF6R",
  "key22": "3UoNkw4RTyCvnYJTHbGdKqsT6VGakPkeWkGK8CTZcQr5QCg31gm6CjLiMUNN7CmecNY7UDLm3nKUzRuAU6agEbmr",
  "key23": "HwKUxou5V2tLdbyJB1GaVchbwRuEVbTquLBgwt79ib9D3c6ZjuZkunLW7yLqMMNmXwv7Gpx14boKoBbEbfZYmQY",
  "key24": "49Q8F9UAnPrM3sXVWqF3fNdoNUVtE6TMFM8ZJfiH5F1SnBHZrQUd45Ez24QwXaC9JndtrxxDVxWjQNSPcukSePSr",
  "key25": "5E7R2r46wDDmp212KWs2RxY6wdNT5u6qdBmj3YH9147LXNPnd8v4wXmCKwWi2Xpm3krYvPp9PbCU11YgZa3jW1sP",
  "key26": "5xsQXNEm44UeR6d3QNn2st5QsQFLNEhxS49psDgGRULj5EVyPJug43MPhBQUBKn33Q7jkwrS48fNoid597G5Gt63",
  "key27": "kS4s3kxXSGNuEzHdfT13HavkHawMqAXXH4wavAxaUZiPWbqY9PD1w2pXBmf7mcrherFZKKmx7ffwgrkZfRWivzv",
  "key28": "3KSQUJHR4z5AVnc2g5LwYq3H2KkwxpRPrMXH42SgGtWTVSrXazN6dXUoNVZuqqgWFVvTmrYHESDuSvmtFYh12qZj",
  "key29": "3DtTJhRh2n6x5xScZnaQRdNoEwibqtTuo1DjNnNusCj6wdbzTN52CLqpcR1hCTy9ZhsTFt7QTUdtN3xuhNYfjep9",
  "key30": "5NAQUedqCLCmwM2ujqfdXt4oXRLDXopU2nANrmDMZV1xqW6wWHNiJLzetU9GAEdTQYabm5C8HyywttVv7HUduGUh",
  "key31": "2WAVGTZMPMzsBDbVzx2xnRDTA8EER343hUBhFrTjrXEwp3dHD4CdkmunMf2QeAWMVJLgqf12xUiXc4Pr4qrMtVYZ",
  "key32": "2D7og8porauccCxXUZEcazZS1ypLTBmNzzYLoSPVRP3YiGvhLvVV9aRfjpcxRpbtEiEkKvq7pnWVziPs4VKPxcFC",
  "key33": "3xL4TqHzbYJyN6kCSKnxj9e6YVmQHJgusb4KpDcZZo1Z97JSYFftJNYA4J2riUTTET1HBHYTCxfAwPBBcpFngTJ4",
  "key34": "2wpTLKqVDm48hxZuEK1Pw1q1KzzYhxiZaAAMhrfhV5C4uL5fcUC3FDsowDzapFosN6C1YYtZ1CbFu7g2nBhjohDB",
  "key35": "L3unNNt5EtM3U1nKj5PecUHavKeHKr8QhBGwKBeosasN1p1YNnn7HTaEbHXPRzs77rqoLNazL9rRL7WnUnFxbrz",
  "key36": "3bRR8vQ2MAKmUo9KMAuxFtnjqYRPtc7JGxf9PwN4UdLuuUvuRoLma2V3LKrDDxLuYdXqCeKzi4iXJ3f9GvWEd3yW",
  "key37": "3wjfCNCs6THwiivLjRHjxoYaFNYnFUnoYU3BFyaN5oAueE2XgnYcRZxEVtskXH5QDyzAozap1yTGYqigbcjYDvYD",
  "key38": "4tkDXkyFujSuDh3YrLLabQ1CWM4mLWecnLjgmcQtgmnqx3EfAsP99LBpen8N8ptKMhL7jdjRB8NNdveqxM1PSEe9"
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
