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
    "pLW5riAkeQwqzQF2ZecVnLNnwj2xUskPbwoGa7RJFjpiWbDvgdr4quLdd7U3ka88MzF7Gt8atCdciocnFexqRrd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sX1KKuQr3u1NpSbxgqboikdvuoGA1WBQgAMng2tqXUHgyFeEeqLPqsYnwUYrxM57W2ExNxsrhmYRD6YsdjRsnk3",
  "key1": "husMyGUiiddgKs3KRMkeRSEkobafQqEUnswMx8rDEd63bPYXZ3Yc6NVVPoikKCdK3cGfUSV4f8WhLuhJq7jeocK",
  "key2": "5Q4ghsiZ36sCjvDSkh9m5jQQmeaeUoHazHHxVv8Y3H3sPjHYpK8TuBZcwRfYbaApnnDf7Vh6yV8apudWNSyeCr99",
  "key3": "5fFAxhixoJuir577TCzvL2kfWr19wsehZLHFdjLoZRTiowGHf5t4tufXYCo6yeEa5UnYNf87QNF5oj1RA78Exoip",
  "key4": "5dinN7mFruSLZwtVJZWJknpJMF8zpVWcySMtw7abpbxs8Tv3JcVvURd5AkY6d9G2MKGGDL825emkrUyaGckcKR7y",
  "key5": "3vNaaTt1XzNxcHsmJsqHGiR5tRpo38KQTo6VCEWUbwgRTaXdp8mWcfVPgDikeKMKS1fJ2Sp7nW7AjomEBtk9krnq",
  "key6": "536gTTmcxyyMjPEpmHpF12LKGQzD133QyaELjZU4BgTPz6RELvo3PC3HYDjR8VEgvCCJHA921GCW2F3hfaZM6FGg",
  "key7": "4qX2LzmDdjhGWDLd85EnMqPp3FJQnDNwXHWSTHoQwHKdpWzKZ4eVT8CZB5Gd5s2TJp41aUr4mzy3KT2w2nuaPwsG",
  "key8": "7fy7b8UU19aYc57aMdfzUXmRea8eW4piUdwDMshMUCw4NVcUyhgAJs22mxfZU4fkMjDt5PVZ3iLvcLtr2UjZFhv",
  "key9": "XxWBg2ViuUNo9WcphguPzpXCz3vkqScR7Njf1nfRXozjDyqjxjFRyXoX7388h6p5v2H8iV5nByLe5wL1FJzdMC9",
  "key10": "2DfAaAHNUBKTvrwVyTHZpzdFTay5jZeVa5FcH5m4LEQVDuEyiHJjng3ZJoCr8Ge5Negsgk6Fx8LRHiBZYmGJDQhf",
  "key11": "5AxCgwwcERbC5mVVbhwFh6Ab3qV8yDBiDH57D7hDcJuienbV3yhfpNQ4DXvTYBw6GsBrxsRArgKdDZGSnwTiqzxX",
  "key12": "3NXxLskMBFrBfhsQDGVvgAXmbku6aAK5Dkcpr1DAMNXHStbtV7HwM9yn2bYPfYo4txmkkzgMdyFQuJV93Zx8b9rC",
  "key13": "474JWPGH9fGU1gFfD62qBz6ttaA9Y8GNLBpPztcb2YCi72za1mwTsKfUVwz1ytsQUZqhxVbMUyGsCoUqyTd5CuQ9",
  "key14": "5vs7cVrHzZf2MoB4jFzwS1SThhThpG5AGZ5C2SThGBfX2YvSuMzsq6YPVaPoxmkpcKPzywhf6CjVXRUT7QqTsEYQ",
  "key15": "3ovtKktckR7NpaxnS19C4Rvjc8iKumDATxGSwgSE9Zgaq3qqav2ZFcDe7PPt7bTBBEy9UxLWeVELDbzn3YMu6t8K",
  "key16": "UmotcvGNvfdYjKT86VKAeEY2jKpMx4j43vfS38uLLoAKYHqSXttPFhn6oJgUmtarP64KXyBYCoa3R7pz3LmHrGB",
  "key17": "4JPm1oyEMMSWCvp1DWfn7zCHbasCqNNoVgtapL3S7iBygjYfharKpYJxxkSwRyMV3XmaRYkjRvoCUq8YbchGG6Uy",
  "key18": "5UnYxeT1hQk9zEieErLL5La8h6ZWoWvXfy5KsNRHjKW6sYj6Ec2JY6wioHwh6wcAiKKSTL6Yv2c9f2HAhbUPP2TA",
  "key19": "5sryHyvVT1N4PkdYRdsm4Rj2RtBuUpZvA9yMbA58o7Qd1MXeZ9FgRcDfccruDiy2txpXee9xnSccW4HMP1zocub5",
  "key20": "dwVPhKemKfB7ePitiBzTscbVH3pZZMDdANfUS8KYP53ECq9Yw6zpsnZ4ZVwRzzUktqQgPFbTuEjFMAbLj48YnPS",
  "key21": "2eGhpCYxMHLuNVKM6fVJYCwunMCujLnfjiaYYXawZJgNKFNhBE9Cxsthn4DqfWqgAKoCwKqXQc3xaHEHWNbfcAVq",
  "key22": "dSzWcWJt2hZTiXRdHvCeFha72QANtmJxDGUocWw3EzSdgKtkZqFB5ZwvvHoUdCHkG6G461uHv1uPisU9e2L6Zqv",
  "key23": "ZtRkJxeqWMJoF9rfh2uNLRuoYN2WvheaAm4h1eAhQFdiJ6jUGm2ScCfDheLnAyTh6YKKWa5Ai4HyQj56zoWQ7WV",
  "key24": "4UzK1LHyE16UMdFnrb6hn5DcqcJYnCwCXcSmnXmMM4jWj1YhNAmHULLLU6LCjnGqfuPhf7UvPDDTDXMpYzB6LSsK",
  "key25": "2cMNKD632rsBvs3Joi61jkPRF9fU4QU2k7XHNaNzYoHFxgg3ecRQbeQbgJCcanNyGHXawiVWSNfUxe3CXoTDrCBj",
  "key26": "2SmqEiEg9sqZQKeWtqgmh4VXtCdrAodiTAexpGCqMKDz7DRbg7z9brrJ28sAoJBKdkNjKLKr59e9RgSCwa6pZgL9",
  "key27": "5SpYBtn4nw26ynwqw4WssM8H1AKCoY6HHeyL7CXVZQyRp3x15XgodfzQyydeST8nxEzRKPWPqMZi7PknYtjXtRwe",
  "key28": "222QCNANNP9PAUZWURQHD9EjucXyUJRnc7UHrT1CVyC4vRFVTckBQNX1DCuYRkjs7kATpTax2LJKT67Lro2BBvLn",
  "key29": "5aAx4Sa7gQh1xoJGPsDNVabhhU8kEmEQVq6iEHxgvF6Bh2bTAHLvkJD1uPBaKR8ivgN4PKDjHeUnWCLdyJEHrafS",
  "key30": "3EKSd6raAWVWsL1PyXgMhKbgSsFwpSZWNC6jSZEHP3v43xxvDqeuFghSLequFFqGpBjTXxJaYAQ2h2TYePyDSAzq",
  "key31": "4XmsSJEhZRD7gUxxpgHcvvq7vpVojZfH4SEnK2bDktNVsKk7Gv1AsCNyd2iMEoCbSyMu5e4AuqyQ4ANx2jJzEH1d",
  "key32": "2XwWMvq2gvQ69AmHELi2QurMMkL9dxCbUcdtZb8mQrggyc2S8jtAzH9cAstUDnNNpi5DpZ52Eg72B9DyGainUNj1",
  "key33": "2KPLFXZgbo7nNSCde2Mqgp2fFV7emwwEgrFneqhgDs9d2MSmmdiJr6kwopm2WWKUACBsqcVAgYuD8Wbb1mWk5tgQ",
  "key34": "21edFMpame41xpKjwSCXDvszoKohktw3B1hyYvp37TwdXgsy128v3FiCpNhaBWVCFVodnVnX8bFSCvY82K8QrNcU"
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
