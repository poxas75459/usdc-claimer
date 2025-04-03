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
    "3D96kDDnR3mdyUGuwT1tsHQ3JPDf9GCs5oPFccayhr9sTuVyHQDjEvyonJGck5jCgTBTvx4fpHZVRscgdEFq4HZu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PMQdY1BxGBsTYN8ZJ8sgZTpoCACPBuTnF6qRG3zFV9ZSvyXGsv4YFUqM82kpsUXNh6rnmFECcSVSy1Q3AQeM2Dk",
  "key1": "36mPePfBPFGsrhUwTSXwfvXv1bNQWiYundNVtkrxHvfKcXXerjARAjLv9BQXdmkJaxEvdBDoSyrUWkgYzBXf78kd",
  "key2": "2QDTck374iFVntxwysw83kCSioTe7NfrgX987nRKP6KxUJPqb4XLWJGM4EDpMHRiuNGsK6UBt6NJzxrVdnUQN3ue",
  "key3": "3Y5cPiHKudxpLSSK9dAX5uWBnJYEqQQkJT6qnxFRKdk3SygJ9NDCHMRe6WSkHdxbs2TnQ6dQ6auriH25y7vsiaAP",
  "key4": "5izSvE5jLJ7UQfbC9szhEdQ7jghMiqgVSK91TvC1pCq5bnemdDyoAVG8iVzAWmGX8QynwtqCD7i2a3s8MPDE3rKJ",
  "key5": "4UaHW2bA6Dv6Vxu3pz6evAcMWT4TyrVrBZHC4ZaY9zssCrgwgQgtZZiy7fJsPCXVgzJNSDPTHyFr9DAUgjCw2eua",
  "key6": "3dw5i4UcMQ7ayLVRBn4Ct4rEvcinj1Kpgqj2gq9JSA6juTuskoLieN9MRzPFkuN3uRNLhXsrjsjevZ914ed98Jp3",
  "key7": "4j8uxMNqzrxHfJRqvmNfwTRRNQ5jSy8DFGVrBaLvZfMCZmm6EuM6T3dhLQVFF2gHysx9dGGBMfBCqZuBZ7dsYejv",
  "key8": "3FRHENZZCRhyDippBSeEEPwaYhSzYjhJvNy8RwWuuDPSPYYZYeCDgpDLvQsb6hbN5LVoHV9XxG8TLxE23euJJyN6",
  "key9": "YFHNqscn53A4gGSPSvcDBeW4fiBDUphYxVQshuYyuHzk8GHkupkSQVehjKFScyYqQ9hk6471Mcnf8zyyZZkLpyz",
  "key10": "534oXLH8d1pgE5Sntxw6mGU5ZQ1y9b99YjypHMHqXbWNi9QGSGhX5YDMFfUQESbYz5GYt7K4RPfAg9tMhjDY1prd",
  "key11": "5EtHoMJzuKfMD3CagZ5dsp2XPAHcBtrHj7ZNhori2Pfhq4imbf7M3dBYff4iQTGoxcG1fkA98cHUn4Hgw98MMmM6",
  "key12": "MBgRQCVRF1ReDWfWSth5LLvRGiB1a5kguGssHc2yZTSfpmedEDE6rSV6MEehhzXXPrWGen6EG5cVKRPMZ9JdLPN",
  "key13": "52uRZe8Bx9L4phnQgrTsmTGnxATY4aRZQ8uKuQe3MqcVs85vVnnCaTTgjLd2DRF1zxUorXm1RCHjwyzdTNNk6t93",
  "key14": "2SsRoFKXANGxzbmJfMWCsssnca6j3i6iDNJS6RLmDV3Arn1bpnqYgvC81eTXx5bvzEcUaLab8QKfGDMac2LJKaCh",
  "key15": "4ERgnriej7zbgaSWW3MjfFwWxf4TWNM3uUCrTFBRoDqRhpHgnZ8qAUi9mgoLT7BhM2FMHbb5YgYS8DPPBiL3v4ir",
  "key16": "yjurSxgpJbqUJZ2rrEKGLQJ67VZC4vKYaetsmTAWhx8AMN33FUebJ2HotGPponFy6CuNajFppzcmMvJis4R988y",
  "key17": "5UbHZvGmEzLoeRuQpwBpMcX3AR85GwdENco3zKS34Fu48Q2Avso2GwykaxU4ZimnvZENE3PG86p7FWHDSEHrHXPn",
  "key18": "4aLvYZayKbcS69hsjCNsE6ZtmYuNEt31vrE8C9wdWC9HDWNkuVqRLLsyqSvHUTn9yEFeNxnYFTeev8Aqh6XWwM33",
  "key19": "jfCFJFZE5f82sYTdiPuow7x9tdPz2MNEoPT1kyeDz8t9J21xKFZm4iqds5ya6pNPmhchaCmUyTJnmrUDTtfb4Xu",
  "key20": "4fyDaWrtUuKmkcYF8bozCGX9XC2USD8DTiXAXXDPWxGMh7hNBDZaR3e87HsgkxbtnVp7jptSx2TRe7wmhUukdYC4",
  "key21": "FqJDAtpivMnnVynPbRvBSTRm3nCMn6p1Ln5dUgwYwjgWtS4a5exeqKVgtNoZDFPbzwF3bKhREGzEJeYXkf64azE",
  "key22": "3nMQAyQprqKXzCj9dr6mzT6sDRDrJxm1iSTi7UFqgmpoAhorfmffeNoJEzjBgrJh845UjVFhtKUThiAu2tqYrNom",
  "key23": "3nLEdL3F8Rcj7YLuCfs4wJ46td2sFk2bTHMfqkacU9Babz7ncugjCcWUS9nPZ9gasYj1METkZRo7vk5nKuCA1jrE",
  "key24": "5Fok5JhX6ugTx7pPnnphJY6uDtzT8GQSrjZuUMPMREjo2pJtorEq8zJdu7BxeaiCbRJqkud9MyE2a4YgGF5yfiks",
  "key25": "2z7RTBXwcHZXCr9m1ng8KrMVxLMntshHQWnRiCR7J9RtbBV3J94Ncc3vrYUWwSE7b8c1r3mYoGauz9WQswtAmeYX",
  "key26": "33VZ2dpwx3c7QMi1axWcqM3AG2uBAcDuNSGZct3Y9kQrPr4V7fvMtjGZCufwAaQPCc5kkShwgrbaLM8kEuwN2DYw",
  "key27": "4ZMEb7LercbjApTRW7WHT2tR9fuZwdZcHX7j4HzygrvkbMLH4BZrm8NHuDZfogAr4ZAxrvyc61qKsk3CqLpcodbP",
  "key28": "2MsV3oAs6FzTmkZ6Hsm67mcdD1vMz3gPqG81jE6bSbn35uR8tB6bV1KqCinZ8v3BK6buyDnQa5VYc6ssK6Pe16kw",
  "key29": "2fLGZxS5ZBfXoCe4sDf74aYC4YEk8AQFtnu5wS759pe8ktVmX7jGUxxDCPcjeq6kyp8nAgvJx9xkEnmmpCEVRfRT",
  "key30": "35eeyBVxoHHzMHsYGbZy2kRzsdEUUgmDX2Ju4wj12c69Tnpm42jg6NytYHfL65r6BBkS7VsiQD8FJgMhKigHxZHe",
  "key31": "241G5b67YktC6YDP86dBPBqbx9vhX5S7HXzxbzaMHFTPaCmedthSyqKdqNghtPhcDPKDLJbxbaEHYcrjjtzVcPQF",
  "key32": "2mptivd8gRCfrPN8vNNZjXruRnt71nMQ1iNAVJQaCoGhNYRA3yV4nvXHJhFa8Bp8MSQVkFZXjnFijNVk8yDsyGtq",
  "key33": "3XqHy6sdQAxeJGfdiVzBvcywibYB3G6TkRzNgqo6mKVtNaHx1zyAhumDcYicsgbJJNPVaRpDSXw5nGhxuKfQLSQc",
  "key34": "2HWbCA7y3jUJtXULZX8jz2GfSQxNDmWuHa3JzWc1dwTutyFiHBuerxAvz5qxwGK4StpQkqGiux3BjgUL1E4VPVX2",
  "key35": "1fiDTLT12TBYnxjETpStWnHxWGcppaivwvVLn5z3aE4CRMrv8DWkR4PFU8njnA6meFw2WmLeQiAkkWThVWiJj2A",
  "key36": "3tutGf7SN4eNTzAbXNYorgD94u1gvXKFcGdVfWhmTHSHv5KTT3a5s1NzonnfnsJxw6mEWJvgDm38nTGBrxiMM2UJ",
  "key37": "2Gvm7TP1iajYtFNYufRpQJwYSn6ftvAYUERP7nxVkyk4qaHWQhj3ojoFfQqAAsCHdV5gHVfmsJCDcYVwv351N8RJ",
  "key38": "V49f3eKFDAJQjSYL2De1AVkuYAxTKK8VbG1z9udp2m49EV4SFvLBjKYoaVAfi8AMSRfpuas776AjLKzrzitNMvx",
  "key39": "5AYtW61kgfQYWb4N6kuKxGNpY6bPjZqa6G8RUqpBPsgPjaGMsLDtmRL3H74eJYngvRxuwpp7mGJw1xi2nk465fkY",
  "key40": "4dYmBdqLqhPoLwu6kwAuzEeA1ZonRJBBSZgsEYZUrueZ2cXMwmSeqoq8EXNi5BtkBqMvm2fS3PFQ8XR1Kms4s84r",
  "key41": "4UuPR7bXhtBDdQfzdWx8672ZpjFCkS94nVq2uhETp3Vwp7xpgm5mFofwg3bpSVw87oyYdk2cHPZ6iMM75SGCdZzd",
  "key42": "61swWGR1kUG6mVWnzSJHo4MZUDqPAuuZBCZL752ySkK6bvRePav61FazUGapBu7h19GsSNkf6tH93igipNXE3Ek1"
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
