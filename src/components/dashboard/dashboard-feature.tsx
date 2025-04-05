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
    "5yuTxZEm52S6JCxDPSjcdxpuigJrsKd36dpkFGv9oeMAwnk6iAtDpJnNqrnLVuTyFNNwvxvhGpPWTbjqJLby1M7j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Jgoxuq979fvRGbY3i6FnB9HmWYxxnnTEKbrKpHTJjU3ZQNymcTzn3nFjWiExstdKiBVksMbcdYSkucRXVeUMdB5",
  "key1": "67eEAigxbhvmBYWzyPpSHFa8E8hchaht5Z8gR2BNwYwrBjuos1o1BHhRmu5xUPHFJWt7sCuLhyNQYbXb2u2izyZC",
  "key2": "31wYrvPj7xTYP7Lf53b7Wtgcc51rn4RfdRKjCNbdTE8T6HhUDNQTpb3H7k8mkTFZYyhN2578zD8yi9a4HmiEq2jT",
  "key3": "5vYBPmAdUU79tkUMFME4YB91Brs4t5pvkhepKkGn1NTWoWrCMnP27uD84swa7VLQYARzsV18Yz4Z1rxxrhEa431t",
  "key4": "2prvPR4sgQFEHgEcWbzx9kPrK6hEHmehZGnZW62DueWo3yjSR9RoPgt6k1Pvwo4jL58cPfgnrBCBgP1Tv5VFYbfA",
  "key5": "4cGAbRGcpSraVLDrwbXhVW7Edduj9gueVo58pFWZDZmgW7EPfV2Vm5sgc83y55L5vuBeR47JiDccFPwazfEMAsj5",
  "key6": "ZbPyPTRVoXeJqBCpDn7CzMgtsZeNAJkUKA9fgZ2V4NqBtVnoEm4LHFKhTY7mGaZWwY6L339ZdVteHoBdhByhkD7",
  "key7": "5y8yDhUiLxJsedZdCL2QufvaYJSZ1TuFYMx6FY3MFrv7v6JBvPLMHGXmJCzDe1NRJzb1D7RoHcJUtFrYbPrrWG37",
  "key8": "xjCw6WWK4Tp4rMMW448UN8uQsqxR8CvjKa6728Y9m2EpbwNpwLmNwZoPMJnLHhR2QgWK7FHfvjUyPUHJAofD9sF",
  "key9": "8JjmkfwhxBUsx3kHJGt4tW7Lor3EtKiVBo6RaFp74YNtsNzUt42GytHdmUUZ4mxtQnTpCeJ3FFUorBKFDhnXX9B",
  "key10": "4sA7GP8GWQHiFHz8HUBdWuTyX2qxmAEc9TubMdAVAdHjuPd2fkumvGq4yrLBrXspXX46YccuCs29eNNGBiYQWza6",
  "key11": "4XzP2C3LjiAchnDsqRdoaNL3DuYFv5chTPzhToB7ttPoEh9xyHa3RiJF2QSuopX26KQMKB1Lqc7r4VoznnmoePA2",
  "key12": "2ed7rSqhgvNjysYczh7u2ejMzsDF4CVR9poc5Mv1D2FG7jmDdCvh86MkhNhP7SwM92d8sUFaKrFTbMchxtr8deYz",
  "key13": "3KnQsJXHLtVPxsT8fsT6Eax9mxnG9Dz8t3dL4jhZJksMjiGpHT6xTGADDcwimsdcmCrewFiGDrBZmMySKYhGJP6k",
  "key14": "fSQBUxJauSUcEMPrqMi1qSo2LbMayWkwJSF7hJQEdijaU4RS9FJqMN9Z7dmiAWcpuCZ9H8rHKu1FbrnfrErx9M2",
  "key15": "5kWJ36F1QQk5NwPkwidLbLQC2xrGyLKi7fBob9F3CshQ93iBBz4JB42yXayDEM8q5nmz5zuwdupBD19nes6b7mMk",
  "key16": "4syW7mb8xE5sT8fK9JrDCehadsZXxp4XQUXPE4YzhvASFE4QG2kTV1mcrxVmZW2s4oRhfykuCVCms5RLTfh4Adi2",
  "key17": "37BgVztKEwh85ZDjH7CCYgDPaAeLnjjueQcysYwxb1TSjqkQjaeySJp6j1yCHrEssDuBbJMb4VuR24MhUFKrpYYa",
  "key18": "3dAgkh3g6F9NAp2xPbJRiWjxqmuPwretJv5QoM4HtvFjQnScryhFLGCQ8eWeinfUZgN5WXoELBD1Vez96e1F8R46",
  "key19": "2tSpEhGfSKZKbWDQ9jN8neqez8aaEDHknPME7RhX9cpDgHf63GGJH6uz23ZRCxL81edZxDZkErgu6VjwXFXDUbLp",
  "key20": "4R4xidqXvVR6nvLBLEKjpmknif9eB7Q2cdtPa2kNkeNaEGDTw2neaPgis8PVNhgVuBwyfX4W58i9phawz8MgPnVF",
  "key21": "5YawdTWu3Td63PMCK39vyJGieQRhNZm4jnD6LYK6WReL1798QpyzcEu7TMtucyfjyhsrBUQoZ2snkUJ4WYGpbRVq",
  "key22": "4EyZqbyEPazpLZrBVejHELLULJAQDaZm3TEL7QP28oU9di1VMgZ4iv7RhFTgCiszofESE97iuhknjb7JPMFiUbkb",
  "key23": "4kAg7FHqood8v9WmbeB4QUGj7dB7CwHwCyQbm2hH442BHosnmQWbG531WANsT1B9CYK3uxzhHM4BssJcChKqz317",
  "key24": "W734g3RK3PfixZgA1ziLcUAbpDLwojuS62VEVuA7thcHnMGBRu4RuFKVvkn8mUS5iTDDJBCBqKvwcaLCuMNTtsQ",
  "key25": "5qxE5tYR4SeuLqjSuDp4yz7YHjG3tpxdRdUWX2KoMNYKP2rKodbKZB7mPTnUnjCi5Vap6J5UQmCkT6tUUbCN94YT",
  "key26": "34TStBhwSkwa5rQ2C3fXrhMNknzBceZJZN1n2HNG1ijNcWaeYLbyqHjKpfdWPp6hausvooExJ7AdtWvH6rTQ9g5F",
  "key27": "NQXbQNrGAnNgyWnzaRMkTMCq5KWMmaav5orkzR26RsH9JBgrGbnWs91B8gnfU8qFdXKkDEmh4pkoWc1gfJ1ZzYc",
  "key28": "2Yz9qX8B7gEF2iVWgdpz161G2vEm8UfC8y8xoXyFu8o42SzcNrNqZxHZgT9ge1VPWXX8P1CKXYjtyKwKBDERksen",
  "key29": "67FFEfdhEVMSGtLGRBVcj4CeKebxB6HABxdYjhCWkQxDg4f4KdMieyJWKfTZ1NyPZbL2PueFKVQvhy9VAQ6VHWpS",
  "key30": "3xnKoDbHQnaqcn6e4sTpHuyMGut4TcoMCH7rYwiCh6SqxNYiZSBmi8jgahN2ukjWKN528GWMhkRjZ8eYPxeSC6BG",
  "key31": "3MFShMrwagyuWjVPhznagik9YKS65V3Xf4R1xhRjV2HNnM1ZAWCPb1hHQF7ktCLujogzBZ68pTj1dN1qmsrEbuuA",
  "key32": "7ZtLyFKQGJ7pyBq6sVCRyvAUNCV1BYuQiXUwCSotwKpPgrRpFmxfXzzPDTtxYGPqaxo9DBCTxSzk5dYnRxrwAnN",
  "key33": "2xMYrfeXRnjoj4aHyGHbFRfWyWk113eWiu8FcURHXdFwnh5jTqAaXf7fhuZoz2r7NnWnmHdpQ4pvuN9tPgZBEbmj",
  "key34": "5n9Xpf9MaxGQX4Tp3zHV4sYqyjdnzbBSbh2SG6s6DFFfKaYPxJubDmTedt6z6pDKXk6gn7smknq9psVAhSLZYVBT",
  "key35": "2vUoYbqVGNJuhpRtjFtuB2etKTFDmYQDGcSeYK79xFhTX31sQGb1o1Hts4Nf6TnLfSPwB1HYMzfFDar5JRha8EFq",
  "key36": "2v8UhCK6YF98VCAKqAAX1diYcTXMpAkR3jRyyHHS4VTwSm3mkn2e6SvaFJpVm4ev6yeoKFezoYby6Mn68nS5Aiqq",
  "key37": "3kJmaVxgBRjyxojBQTL4Z9rHqP53ZhEgjN4BBQ2ddLEKfFaWEyVwq9daeMVYqw6TGVsSMXca54EGK7N3gbMAoo1H",
  "key38": "3EKEgCYfLXW1vLZ3emihzGp2dgPNuBtD9CjUHDCvL7h4YpEKZZgPgMdyfNVMZL3sawzToq3NbpbkUt6upxvvwDAf",
  "key39": "3FFt1X5omDVAVGv4uMcwtdUePksWpvrTbkRvENKaQZJfbEbqt1Xqiup1GpuPCuMxyxjw9M7Gjq3DqF2vM2zmsmvz",
  "key40": "TpEhXVbPr7vrndcu4u5sPKF6g1SiorHnm9c6AA5gEtjQr1P4Hy4ApbxukSWaMFLmmk8fzQX17HoSprsFngCw7Sy",
  "key41": "3yopU3fjZfFicpKr7BfrvS414W3qY9q6f2utn5vym27vDaQAQQVM3V4qxGSSHkhSaVXzPSzvcm3qCz6YeHNSvXgh",
  "key42": "5UhaFaavb6cNkWicddeBCnJ99f2PjRf5DLPXMzUnL2vLmVDiGmGfLVWkvu6Mqj1RBfJHzdJhVCFBji1wjy43N25z",
  "key43": "5w7C1E4CVbJ4YCAKJmw1Yve7MbbXhbTE8bm4c111YSCxW2pCbdFEhNmF9grSwqLtP55skaEsQgv53Xu2RJ3k19P",
  "key44": "G4X9JrksR53kKnWW8BqLKY5tDaFeToKFv2NjckVqPtJ71z4LWQ2F57p779UCGjJnYkJ786cLy5E9RGXxx3jDgHh"
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
