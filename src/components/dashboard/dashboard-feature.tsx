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
    "2GaeUNxx8K186217orAQd6KLRt8aST6i5YzUYfS5ixD8eczWWRrvZdACTLwyz9dx39nS1LknaZ7R3RJsPaQXUdNT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hJAGSVdAqP5whYasSvyHW9ciMFbngkuKMwBvxsYwCSCmi7Fx6YhR5yLVqpsuWKRe231Z9zMpsQAZEPJTmrqpAQo",
  "key1": "fSkKf3XUAH7zC8PseNbbmiincLghcZrndGiX4j1HJNBDRXYsVVvRRehvZdBjzqamAPSXfGUCT6osdm2K7eVTrAP",
  "key2": "3Xxq2DqDnX1fS2qMnjvXN6L1vu4MH3YZDvTJ6CaS2Pvj1RifVaBEgX7Wrd4YZLWhLTuUj3y2sbaEQPgAzudU1uLt",
  "key3": "27hu9x7DwiTCC7dZCa1HGFwtMMvPxXiL1Uj7VAV8FxgbL5ajJZDtFuJd1p1gxoMnQjMqcqnfxDyMrx8WWVB2oRFL",
  "key4": "4XLBSxB4wsmYj2gfkDYpR3rasSwrCvBXcHR9fVWZzShK1Hq4S3wNnirMzxQH5zko85QM4wWGgRpVFnpV4NyE6CmR",
  "key5": "5cjoQvvbuT2QT6xzc2jXqCREbWGrHoPCtkFjdMLkrpnpix6NjaNV24vnFdUQgkKByPJaDKaDgAaeQo96Cerprsv8",
  "key6": "5EHK3AZCpKH4VVTgB6ZFHGHnGfUH2R8mw37E493DnYxkZ44a2xMXwryX5Uo7i3xj1SxSfFh4qD4MVGCR5pR7F4X6",
  "key7": "3fqVmTds5q3FY2AQF2dzmAvRVaAFc6TEXQiKuV1Kb6c377N7fgcWVrHdn3YYz5VWWhUenq8g6ALUEmTn1bJAZVq7",
  "key8": "3mLC4MtbpmHbXyFpoqpSL6ezr29vhQPqYvewMKHchUk7sv2oQo5Rhn5HtSpv6jyDffFhMYJ4bo1E32ok7EADDQpm",
  "key9": "2NFU4zRX6woB3NWEjYdH4eHzosHvEwS3Rh3CrgqYUKUSuPv1Cm3XSqSNAbnnK95Ap1bEHeqwJysP8HvziYduhkj6",
  "key10": "4UNrK3z7VqUSj1eywWozRDPwMLbaSUfcLZWQLUUGDSTvWDZgP1348DM5auo43snLPzVpWXda3mv5MJ6iAgcLdCrb",
  "key11": "5fhKMqfpUYj4tguYyzfoCf9BG4AToANNnwhcESZq1JBgbNLewF1kojftoZfFxWHCuaMRSfwtGf1vCZC2f1z28g6Y",
  "key12": "b4NWHD6cFAjJwm5aQF6xUMvkD3hzY23dGKfL6VFNRxs8yj8DvLTZRPBGsBp3u5g97GRYMbmPUZjzYfCJypEyh3i",
  "key13": "54C6QKKPJhpcNxqAfh3nXKt8fbn8m2d42yRRxxEVHzx7mLCuZ2PrtgB6SvYRtLzJR8cwSyTiV3YQAmhy2ypk4LDo",
  "key14": "41z8cnEzYaKNehtUzdV1Ry9zWjkob4R7XwAzbtTXUMnMdNTAs51aZ5UEmXUZNbdAEjPhRbFnb2dnJv7UQw38cL71",
  "key15": "3Ltvg8uAP2digWpdKS7pi3rSLqwtEiNRNyguKLeE45s2UaJYu8UsFj7qah4xVbQ9nsMDaPRNJg9gB67mAfQwZPJV",
  "key16": "36PQWV16Qikc486WYGoeYEU2qbjHfc2DSexYMNYKwyfC9V8aup3qWHio2v9hbThtRQypFpRB1EktRN5SuvPprhBf",
  "key17": "4ypSyuguZegpRzMSWw6ATKP3fKndaQK6BnmZiemkZ2JPxpSjZjrWpCJjLChNkXVFx5XBu5hop6eWWN4UoCqiJcXr",
  "key18": "37us7FXmy9N2r3Tv2YpUAqXBXQk5J469RFPpD3bf66D3Zau5F25oRS9RR7y7i1BpzkyV8Foy3vvGMnUuBNPmizug",
  "key19": "5NPPxaQNmFRBjdcCDfjkPHcUeW58a1iDuiMFPcdRkJuT8w5abwjpW5jTAfmN5j91cZzBProPa4xXTEjw65QH7ufx",
  "key20": "5j8X4RaqhqSigYb83wAwtQ5pcg4GcCFBn91QPsaehTsHEVPkgY81Zrzp7PzCPFKzW1EDfW9qgYpe4UBDwYKGhNzR",
  "key21": "2HizZmTF7dcmfcf1b9PBcBdmHgN4vF3EkknDGAnWBL43Dme6D4nAjYhGAJEnY6w4AtdEkUkcxucJh9MFnVXs2Kb1",
  "key22": "3XjxGzizRVxEWmbNUb68x5Vj2jszeK8LpcRVwabUrNMg9hoCmem1hraEGHCtaJmZ72ZQfThhVfmSrduuowGV7g7R",
  "key23": "2PndqJcfEs8aP1mfvzmZ7Nm1GRBZxBoLPP3MGSqzhmMsBR6R7dMq99HTxo672yp9rfAoRnYoaTRHZXUxvZvEjh8y",
  "key24": "4dUyhhf2sb9HAgcA5GFn48BZkyWpvosdnu9PnNjauNFyr7mRPc16F5zatDZz2LsnvcTR6CmbHje2WYs16FMvEEoY",
  "key25": "3HPypxcACTRgMDqdontLZ6UdG4n7f2VQxzknxmD5veQJL78wLxXYFHXKy2WWgKeMSHzM18eEfXH2LRdcncN6TDsg",
  "key26": "2xFZUak7eWrHhw11gmUm4RJLYveU8FYVSUN7p7iHuVLrhC3Z7nLqAaZUckpUwFYb3KT6M2yegEWdKWcan5NePzPn",
  "key27": "3aiURStkTfXdwjpjzMNnRZzG4bTEW8fF1SRiYSTLpo5rfGSqQocmtJxa2faAXJn2MQgtXCzNNSRSyRyQdnDUKm5Y",
  "key28": "2BhzEfKGZRNTeT97DbZUX7HP31xN4ZerHSM8FgvXDnHSTd1zsd5LvUrWZaZ69x3n5LkWmk2Vm8MXEb349peBi2xt",
  "key29": "2F1nZ6rsXTFVFL3Jx8Vci4Lspmyikvdnw3o8x4rtL9qtjp9iNotyX9TGNusvhQrLpCfKoLfhYCSWRZ2kQiyDLqag",
  "key30": "5pjEzj4Ji2t9K9pAA2WcQb4PukBEZ2b2e4PD7nPDrDZnxK73J5AJ23yPBpifYg1NxUU3nFGxWtF8Z8fbJyLTihh9",
  "key31": "43tGJ8XLVX8xFfXzRDaRQ3SvpH22q4Cb3Hgr4wPLVLwT3NpPUxPzVoW8WgguNcuJSbHcwMpDxeBwPw1ELHasxDhK",
  "key32": "39Df6RuCxV4UCfrd6W1LP4JeTmw6LoDgFAQZDLTh9esugyGvw9j5zJVgpVtK349oUFpe9XzDBStqSvazPTSuFxft",
  "key33": "31vL7v2xbKePhXVaahxw8riqTrLG1FNkn5mc3eFJwsgN4tbXE1tqiUAi49P3yZUwE6jPCqA4BbWGPp7zq7Xku365",
  "key34": "5o9EjBVxedd9oLLZyrtMV4n4asvk6c5o2PmztTGc1tD939LD6PriKvNReNdwL3nB1FzdnBTzmqFh38bpkMvV3m4H",
  "key35": "3WZyNRv32PtJvX2ddz2JNDrW5Aoer3ctDnpuvE1cASKM2AuYeLwitjjiVzgGJDwTMEwLTNCEksFUe99emgKRgGRE",
  "key36": "2RphV95n1jvfAgSPkQo4T4S7Wd4hc19BEMPqavsWkSXYxufZSCyq5Mxt4QQ4JoCWximkKnQz5GLsQCgqqRrUTj9C",
  "key37": "3MTjnct9NyezBKRCYLJjUVSmP7NMmcG9GxaW5sZCBzNPoLhfqc9Gu9nSQ4pM4QaPNztKJgPytTswmQyb1QRYDNJd",
  "key38": "5coyG8EM6EgULLzVgtJkbFGqTzvEnaQivaQ52Nm8Xo9vSc3ELA4igz5ERw2jdsUxeEa23cwJQLSn9TuF4vvtfJWH",
  "key39": "3XUCXNPqoU5JyYFkvxuWnX1Br6exruxRodmLQBLncyhMyM5kfubjGX156soMUmoPgr6ZzpyDb8rZChoETEMa9L3Z",
  "key40": "4rguWpgJdEkJNZWwR5gYaVQFFUbUC1vagGcEYZah7bd31PUqY23WuVLc9PVbDW6TdAgXg1RSzPXbjaCrQ9PszJcM",
  "key41": "53kM2qEwsgWjpke6c7aLHt7Uj5s2xYF2L2RyuwQJP94VNgtfrU34nBaPpiseZMMLhR1iSMbG5ymSfuUUxd1xcMyN",
  "key42": "52WdtDAikrbbyQ9byAAEoPksdZb1oDrr6dpDxAaA9FKEDCgMWxBu3WMvKtmXm9jtHcmX3ficZxrkALGZV5V158wv"
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
