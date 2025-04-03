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
    "taUry9719Ru89oRuqN2tYvPCr47o4uEnbTF6pEj9UcNPk3EAd5J8BgjQ5ZVVSoSrE9uZRM53RkiBqoNcr6M98x5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cVKkL4FypQoBrcr1kuiR3Sa7hSvyicJBm7phHVjwJHLG43aWETGN4QNircscrBVhKJNmPNsqXKTydyfZ5bC3eyV",
  "key1": "3FoD5xyVDv6eiTo8rk8arkNsYspEC9SR9UBRHcx4VVhDLJzXJ2j67d6TpwoHKWEp3qQxogHJYhiTb8nDtZPieeRf",
  "key2": "46bp8K8QPnHsdirXjfUZCArRZUXucfQbgoRrwGkspmu7WPZCBvFy3bRtteQhGYRnFdJMj1W2w6zkDTuv5VMQHuVo",
  "key3": "33thD7GEN3U7hG8AFKy2o4jE1KfgRudjt8ySZaoqT1EgvRbzdf3YPuygyLrq3wJoQNXNSjxpdzP9FnqWjZvYsikv",
  "key4": "ZBVLYPXWTu5nM1c5HqGkwSLTSaVUMTiRZQeqSGEceM4yeptnPmiTuiCGznBkxdbDEnxGcoPfYCth25sRiS8YNgo",
  "key5": "JrGrRsu3d3TAF9KmgLrtuPCda7DKyBBZEF4vsxin1UmkoHBxgzfGJYaje5CCVCUxDnnL9q5WCrQo2XYmBz8TTgd",
  "key6": "2XT7ucN3PMGRdsdSojMdWAzY1qTvcpXY6kyNErZKxtsnDn3LbrjFHPawdDNHK7KBhqDPFA3DqJCkZZVtBtBtY8hV",
  "key7": "47jtVeBgaqJCh44jQy6NFnwttonrsrmjPXczH8UJbKCDhkCpgwsde7sDx67rcxs3mmoa1xpnKLMu42ZQT2V1os85",
  "key8": "4Nr5AVxLz5BQvzi7sD2jQzdonJqXEVjUJnwNbiTSJqzbqoZGNPJQLAh8Qmms5vfRN6fmwdFqc6fHXgEvznEQcnpJ",
  "key9": "4CLrbUZeMGM5RebjHS9KbXyZKceTGriPAs44KfmXWryq8H7GrBB8eDuGDVRun8FwCMWUR8X4rgt5hjQnThVNJupj",
  "key10": "2ra8zt83pRCYaBxVduVYRtorFkxkhJm8wXqxAraXaWjwrKQxJmP46JJosghqofaF1fYnUZfypg9hzo9iFb2fnAB4",
  "key11": "2i3e5SpCeTCZCD4db3giu21HRDWera5X4vfW3L9epJehLaBrmbNXfodQvGHs61k9APoc4CD2XZZ4Qdzhw3dE4vFT",
  "key12": "4rg4Zvs37iEQo89ZiwNXvy4yEffcn4pJ4WYfhk44m1dKKiApFgpFCgJqgsAMuFk7s5kgxfB67ErEH2rbmEc2ghZq",
  "key13": "5za541ckU8CYYw81Ptt4PgP1iecnazJKm8NKzV4i3gtn3LMHL9bwH7FaCaJYrwaWrFrcCTTWgerUtaZmwE7CQCCm",
  "key14": "22H3ii9ThGTfHYbavgFJ8GQdd4Jm7h13P29tNsVQ5TSBFTG5qzK4BcEgNNNJGGTcjBJ8h3nWqBPKg6jp9XYWgDej",
  "key15": "5Y6RL6F7scmyZMfT5nbuiss31oTdPg6ZCMF2YuX3jNuMW41TWdVDtvvo2kQcAyW3xeJybYFqxxKFkzRHecbnpfuc",
  "key16": "5G5SbRy3K3q5SQzhmams8C8LcL1HciYwQnANg1ZLcMBVSMwumU75588f1ZM2CwjehriQnqKXZga2EmAbBq8WZZ9V",
  "key17": "3U88A3A4ESEWfH7mQmzq5YjFp91DZhTyZXA34TptEZL2NFSgKNcEQTYnmDTurF246pG9GxAdgWsja1uJ7evyEp9M",
  "key18": "7F9EkWZk9EsRRHPNwPwJk1C25J2Tdg5YCuCyvXV6EAEoU9XGf5GAVkiB3GYg7izVnf3WDVyGMZmn7tWPtRPKJrS",
  "key19": "4H9SeHBRNjYNXkwHZc5PfE5HcFPdVKioZyWp5M6vt1U6U4LQCi8tveR6jtsG7EQEaicu14GRyqCx3CYvVuyyGXkN",
  "key20": "5hyghEt8jeWoMkBYAbFL1oy2XvDYWSXSsYdsrdE85oFz7EmUHX4aaUJD9iVkRRciZ5SDSYGz3gH8TZ37QssCRUMu",
  "key21": "2TBocJxWqV2Xtgz3Ui73v6b6mXoQwVpzEq6kqA6V5L9oBXiUPqUq5XuV3qjerYWSiSdmnLFqjqV5PRc49RJzxL1r",
  "key22": "5f8WR5LqYZJrctumGTkG3sfjk4nZbCmuCjPr2AuprwWtzdYb52veVVx8Qg4hNXmU1Cw6SmcvneKiMCNhJAgJWeYp",
  "key23": "27CdhgPaMkJnLgL9inTqYgzQXKNvLChU7VDUvUReuvCJ5aZndCkyztgdc2f1Q7BskoDw37vqmDo13R1eCjaNhwUh",
  "key24": "5HfrNw9Y4CGdwL9b1x7zhhG1Tj5qaTaANm2fMR2XuXcyYVjuDYVasWfS2wZYiwRZFUGEARvCEWZQHATyBxSVDEwz",
  "key25": "5vF8uVjh5GUF5iELWDoUvE6KKMW8KathSLwT62bd7pjvHbhH8xarMUipybmzFPYqtqGRkFSratcBy4aXV28HbYrV",
  "key26": "5jTJAvuPyFcs8yFsXoZijg9RQvdDdRFV8JSYhmVfNduQqPzrt9ioL194PYNGapPtgeg5Zc1uw3FALU34WMcjryJD",
  "key27": "3WqQ7s3C6e2tEU6mJfWKLNrHTFrfd9rz9wFSk7Jc8iMNWYfFCdUuFFLivAeFA5Ty2MseV7Qp4SHjGJiY4txgsiQ5",
  "key28": "3hPfTL2hzHRxAejkdm61yMVU2oMW78dWyKcPTFQeGS5km3VrrWVpMb8yRyuBkxZ1ptdYSKPyBxx3isU1HpcS4UwM",
  "key29": "54hagTbsyJoq4wsaJLD6jx5bpCQxTkkaCaMzmCuMtJSrPDADpVMmvAWz9g4DMgugbsQvtm13cC16LusatDPoj3MT",
  "key30": "3pterCVfA4hzAxevgcfz78W5ySfKSYkdmsEiaJv3Rz32uKGCegFGwiSFacAKDKh5fs859w1W6B9WPNNCVtWmTfqd",
  "key31": "pWbvVG4Pt1sYaajuvMA9chKyUnNP8UCH5b55wnmfKTD1T6BQA4cGd1LXUUx4nGDEWWUBHfzvKnV1s7beV5yt6kn",
  "key32": "244e1LvkYiFfr6oNh8b9J8RnNE7CF2PiDxktBGZfpcMFDCMu5yZvMjgmfWtun2KKxJJtZdzeeo8CexuXRVbCMRkS",
  "key33": "2zZotha5wFzc4uB2wcmGx2kWQsQMdvgj5Uh8n6rK1QgDWYjtMDnjBymj4JcN6i7CWepUX56WoUMvfX2UFhjHZkVS",
  "key34": "5wcbKM9iedFWACxEtQthzRx3jnjvc7sXCRX35FSinXPb8wujGsoiQxTbfiv5njfAYP7rJuyaqourFqgE7L52cm9j",
  "key35": "3Y2K6SNUAnBLoJeZF6cLaWnUFLaBfVNMWFdtdDZ6eCyyHcidaRCQUaidzsJHvUdTkR1FCauBQarn9PwUsHEU4uY4",
  "key36": "38kMWzdUyHcmqJ3NswzaWPPPj6fKiuT3g6i9kjn7jFWP68P65tT72FLy9r6rsGbduTLxWLsDfdEiFZLAyDFHyyKE",
  "key37": "4j5MUN8TRKmBNP2moe1JU1gMqfXTjtYv6Df3m2Deg8ewdX6c7b6Q6bMjW9i2E7cYdyPssu8CSPsHNnnAzuKYzUbp",
  "key38": "5FqxFsnwizRsMD9BRmEF5Xj8A83Aqm1uNQ2s4yDnCCXhT4kkwHAd2VQBMs93JYVJ3xveoumrXojMHch1WiXVb2Yx",
  "key39": "QL6DM12sJKisqC4Wzse3yrabN5nY3w6gsiZBpQ179ehkZQYz1zhSixUXdvm6Fcs8tnfcFB26cSpgRoyRmU79ZhT",
  "key40": "3sh1cz4SSqGuW5RUy94FDRcKY4cm5CVbUn1B7XqXnvttFoqbr6TH4SWcQfG4Tjk4UVP5GQ8FhdQ5orAF1U6qNXnU",
  "key41": "3wnvx7m968azdzUMFsmymQPasZegafztNXfbHYbFLSiJ8MCGJutbqBKvC9GnaSRrzJ2pKUkTWH4ioxiki28z8Kk",
  "key42": "32CUuUnMP5S9iAJs4XujYahWkfZymdpWZ3DioGZgReJs7D5B4PLTSvCRTuxpTUaaP6AzSpCn2SNcRu6xPyVXrKY1",
  "key43": "52BfvbFxXjtLfqMbUYfxcCLJKXQofqYcEWz4dR2TqWcX8YkPFfDXnCqCcd7QVbnZvgmXzcELJwJyjHwr3fYjH1hN",
  "key44": "5PDjYy1LEyUPJVBfzu2N3JGrTAHbk52zdgwXxi6AnNFhtnr3Yu8JkYYHoi7bxwrt5pjZFVvZ9L4eiJL9Gdq1SDv3",
  "key45": "5RwzjFsCQX6pnT4rSEX3Dn4coNdHa2L8QFGztKR6dj3BRV2DJNzR6BKFqH4o43dwa4CxBdSAAUDNk81hUmWjSM4u",
  "key46": "63Q8SvZ5pYj18gXAYXeE3rY3hNY1YSxbt6r8Z6yYd1hJiXw422MWKZKxxbv1rG1L8GaEp5c1x45PwyTTnm6AFNs2"
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
