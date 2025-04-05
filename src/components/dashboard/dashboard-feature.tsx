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
    "5XotLb31yZ8ZpknXBcdzpv9YxCwqCViPp7N6hN1zsBRAeMd8LcgEtutCPigvVH9gCAmsEMEWXBWMefsp5uwzaDfQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4611GoBj87ZMXdUS2iKxcV4BmNPPCX9RuuZH37Qo1ttu5tQaoHYdDhsZA8UKzb1YTfbyRBvZGuTqVAKshmx4VuHq",
  "key1": "1EMmM2knbgq21vkHe8QK8W27iuVtGCFnKujwr3CDsfSKxpYRbojoSuUtQK9EHQdFtbt6HM4D6mCd9iW8KKwGpUp",
  "key2": "35TK69GXuWZKTWL1jtuZEMTTqUmENjtCiuDbcq8xWHMF9Lgp1kZWNSDKmgDrJnwLqfBvk4Qen471zRphev7UYtw7",
  "key3": "4SiY2JpoXSfzTkG1i5h2grQSHCunRxeropGwoDaK8BM6brY4DdUf8U8WqWNc3TaxdFKAw2SNBCYTk2V2PN7tG1DU",
  "key4": "2DkH5SSjKX3WAm5F7EyrdpSBQFTmq8yiQNp6FvpA5UgwwoFmdEnmQiqT3obpDBLc1SMh26Ko16XLy2k2X6UwnB6Z",
  "key5": "2oTmNC9LxsyHFdCKNXCvk7eTEKomsptyeVta54QNoiV36ydR6NaqcFGth1wsgKnhcYQaiShEQw1BW3JnKATgC6cD",
  "key6": "2NwfQQEhennYnCVPFSasdsZxYtYsiZLEPV9G1HhFPpPNnpYcKwcx7EMg5k5NkjgLGzV9MzWuU5bAqwbuJQ5Pn2ab",
  "key7": "1rpqz76rkqpmNpPCz52y1ySwtiiLDRSvwnhmnAtcmZYorU4FXqmeCT3mVPcvK5Vakf7GUpBSP8F4FhDwK8PpEnC",
  "key8": "2HqyTSssrGpB4DH5UWaKEwwnpXMevN6p78XcDWajSnSWD6NozgFMK7Cnc3QTbnVFcxV6jRrgUL7jJ1G6HUqbypz3",
  "key9": "5KYfPc6dVnCxk3JQGigYPN9btavNnjeWsswk9Ci78GY1e4jK5PpbtTp5RDiksVTa7XTD9EkwfRinT48pK53ARfpd",
  "key10": "XucBxfyLrxr34y9BxhM9EA7xdAXN89asyiQ7tcyiaeymiK9h9EHaTX5fbvdWgKrU2HdP562P8LmiRgMfzRQPAyW",
  "key11": "5Pu56Rq4VYmLMWZRTqRUM9aHtdrUEpqyvNDdmX6SgQC8Vzirf3LggaEAhvyPz9zmrRiU2o2N54XuMtugdxTPomRE",
  "key12": "3aK7oyqoKNscyxSNpkcuGwDFskqENJgv1dc86fCCu7SMCGwxmuLpDds3TSLrVCg9PYiY1vT6oe6ScmPvxo6YMNK2",
  "key13": "67676J1EEPYorzZfwMsm66scforNzicdWYs2VTiR7yCf7ZeP3FYtUoAY7r4ti5Qmw834xrMb3EgJS7C2XqSsLU5M",
  "key14": "3BtPdK3rsZ5NaUq7EXhBEPqZ4C9PwHwHjavpCcex3eSpNTS1isjTygCAdCJGKrpQjXZkGdJCEfb2kQ8hhY9Jr44q",
  "key15": "2XKRztQW4j7JbjGWTzYy1d7iFJfJ3MukGXhmKaSLSMMr96UuoKodXDDugAAJzSbtGtoYpgoareLvPFSzw1Ap3CyG",
  "key16": "5E9tHgyd3uvGtZPSfYAntEwCSQsDS49rdb6hXDa3UZGZaAUyVM2EoQkWSJtzRWSru6HN7Kzbr9HwhrWA4BYecMZ8",
  "key17": "3PypSU2RkeGQa72iez3UdT5Tnn7TxscTrR2aPZLpNMgiRNp5g8wiQYkLwNBFXQw4dPQv9KGdVnqAHCnvKzZ3AMWJ",
  "key18": "2cCagN7CN7HWersLfcyZoEp59kEHQnkDW3QbyEYkzaSjWt7jb6sajzaXd5kAiD846kkE7UzEbxybdpp4aLpiHES1",
  "key19": "61HPyF8DdTYB4VjA8Hi8vo8PGoT5gC9jC2BDsKY3gZVTweiC8TUz2RzJsf6b5ecwhXe8EMQRYf2M3ZyDXUPVui8i",
  "key20": "3NMYsDQJA4uwHdoavQSU3ZD4mRc2t5T6kasGG7CHLamcXToset8VNPKo7fJMVrew8sy4wPKAaTPBtC1SpXvNq6Ya",
  "key21": "iZ7MthpyMjoJd59pK7xfALvTfdkGbN5PSL7am7bxsjrHppTCqnXSocJorwDLYXon4Ue5Eky36geVQbCKqthkBcr",
  "key22": "555xqU5qkoomqEZb1mjJufRJkEkW4CthGghJ7Qq6DoaeLdb135AUw1opmrEVFKcKHV7dG4hrLcLcGuincqdf7ank",
  "key23": "3ovbcopGEirNkQNsy5TEYR4zpWsB42yeYNaUdEJiNWvYV5wRPWAv1RKHB7HwT7WboDWL6MdiF6YiS61J38BZVPGm",
  "key24": "8tW2PF7o7sByUHiRKKuXfMMLbWsWyznNcoPbGC96pF3H1a4kZcAAEuUDGHMFCkQTnafxN8rZjhcZ7fkJBYAJnQ3",
  "key25": "w5nansvSKkE3DW7ZUDzdVSEUXcAWzJAwLMmoPZbGxTdBYZM9LkBfh1vSJbXZaZX1t8d593hDG75nZvLj7GVrDwR",
  "key26": "VfmUTNvab2VJhhHw31LjZ1BNVv3xfRJzN7LgkhSmW8vEkRDk9BuCyzGKDvdGBSH4DSn99iXEmd83ZsipgHCBSrr",
  "key27": "5U2XUbpX5syH6WAFieYBTA22L2sxXqknWKqyyzQCs5S1NN5CwEPKxEGc1Zb8NJiRMvcX9XQWAZBeAXefmt4uNXJs",
  "key28": "3snFuwb5X7SaDu6tBMiCrWZffyUsPE4cUoGY7DSXJijwmme5WBcKkNHdcjoYLRV3CUwMYWHc79ZKWKt2MHh3ZHKe",
  "key29": "37KSuqRNDvYAPPUPMkmDLLRWdgQVtsRUWJqEeLiyHz2e11EqtM3AcRcU2FrRogcwwjAMdDQJik5Nb3qSuWdM12Ug",
  "key30": "52opPLVGptLm3Ummetf9a8nUiUiCGhkWqXk8JX1YXpaPqbvJUC68rVNsJZZdCvmLM2AoLQuLYBkdsn4HAjC46qwo",
  "key31": "3rtrchr1DQMVELmEnAYxagi1QucHu7E8uMV5Z3VEL9s7kEE8AW2uQw9Ym9Focqs8unoiYLo9BNibbUToH1V7MFY2"
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
