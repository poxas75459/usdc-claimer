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
    "aRFXd6gBSwYoq1bPXRq1YhRchCau8C5EzR91a2hwtjbSVuQU7YXbbza5usx1Jrkhk5XR1TGbbKuCQekmGk5xG3i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Atw4R8xoRNUMS4UtK2uLQta4nKXkGyid49qacd9dEqmFiHefA2e5DfReBU2LZXQjevKQHbKZFM8JadUhvpkgLM2",
  "key1": "2yL9qq5VFBE2fyHsC4yaJ8dNzjc1dJaUVUqDX1ne7rrvBxLQEux8x4akZGmziqdFhScRnKqKwXFo1AEq31u1EshJ",
  "key2": "2sLiJtcvZR12SoPfAecyYyXtqgR8ECjVkTM7YnFwr5pczwchV3WgYoYYGGHefoYMT3bP3Y2fdST7ZoKAGzfyAbXH",
  "key3": "57E8TYRL2h2DBsDaAa7aCKU3gWNWE1D9WuSv73x7ptqqWfZqwS71AZdAvG8qkehHp6PL2gipKENds5DF3sTeyguo",
  "key4": "65orpeaffsWr3vvXsXrH3AWJJVapDFGASTEEyD8g6GUkaPmHXg4EDJEUuwQEAzrdSubZYxoTADkYtKAuXUsu6VJB",
  "key5": "5gByp8DXe5jQnqWuNEJUy8ZGDtqqdNLD28ChhbK5aj2Mo2F31LAYr9iKb2qEbgydVHFbVgB4bXRHaCpAyPgJSUyb",
  "key6": "2CSqbq85ksNKUesYBVk3Sjnwx5ZQR4K8d9uuNdc8sKwyu6g8sPnimXNxc6pcG5p6NjW1a5eWjZUSQHnz778DAbAz",
  "key7": "3nS73ay1ZtLTtuUZLwqPR1NZimSauY7rA2rHH9UeTfUX4i349NM4R7kA7PqnwEg5hS2oyvxEF9FJTRxra1sMvaVm",
  "key8": "ZbWSw5fK7qzi9W7AjCmRsgX46FviKV8s9Gr5uTi24JoreTEuS5Y4R4RneoHtfb8m1XM1FQod8Kvyptioz1DWgVc",
  "key9": "3iP5uChxRJVdkSDu5WQcMkExv6xhFjKznNqpTz1kdY9fGpSnXoLt6FAhLYLSHVUQ6VbLKvGB3fBpbQWe8cyjMg99",
  "key10": "4FCR3FCtaz1CGYLtU7g6FTnNFgwpyAhQpaucpfQ3swzKDhSh1xXgsUcC84tJfjN2WYB6zkx4rYps5w8gCmzxgrMG",
  "key11": "5Aky4E9S1QuLNVBsD1wNm3LCtsNMJioFGMML4KDfaizAQ2CyYk5CutiVCdgzcQyfiEy1gXn11tJfpG7awxGHJXv1",
  "key12": "4DcbGsm38Gaam3mnP9CgJB5HTvRMiieTSa5Xf2TamqhspRxYAQJjYuUibq1ZVdBj1XGtnbUK96oatbBXcW4ADBYP",
  "key13": "3mEo8Q3inKNX5MSCWq3yHYpZ3Wn3dtjh3WuEvsbobDhYpgkdyniMuBgUobFi9XZq62ie51YCdm3GHwccVEWTVEQx",
  "key14": "5J7HDftBBkekgxLAa29zxmvNhDZ36p1h6aRqHobRZkpsYKSGzTDh1rwAgBgGenGeok87oR1hUNGMBN7BWm1aZxSU",
  "key15": "49sq84qrexzrBUjewLREUoXPsVHubLQGo4uE6hbppg3U1u7pN4E1ZfXR3Kd47ARk9SBribsq9xNJ7g4V7y2qKTbb",
  "key16": "4GPYYXb11kiEHSXc2SLNLZJnaGFv3znfTaQr391LZbQzVgATUwn4PsBcdz9zi7orR4qNQKTwYeswA9d3vDzSyzuy",
  "key17": "CKJPPTjFwFNWjPpNjbiD1ksSexYqa9AnPfjvFJePZk6XdajWeUiH8N3RJEHkeXtdthL7d69DsuFR8c6XEN5TXCj",
  "key18": "8GUr6jn5Nyv1oemxoTBUau3V1nf1dRbDeS4FZdj52BJeXJforDNML6GtThLGrPQsr953dCphwVMVZzKGoWHcVWr",
  "key19": "4Z5L57hAJ2wKURUtw6WtSdSpKGHi1c1rApkJUdAoUBupuepJsZJVB3JHkmjwxouF2kHgqptaimeNq51CMAtXmdFn",
  "key20": "5tf5kFZ76HrzTSU5J8deJRniVVVAyZZzKAABFPBHQNQkvHYDWU6fEQtCKDErEaGwSpDyB2MvqG3En2xJ2oNHVbRL",
  "key21": "4qBZUfngqvaMYAgLsMePcXyam6QKi22jSqyvM7oR7L5MXDHyYAzdpnSxi4QH6jre77t6VGMKNweTJEk8o3Q7AXEk",
  "key22": "2ghx81bU17x7TBXmG4vPJVGD3ciHvPSrpR6Rg2NMR1Uoon8BsUAzoY62s5gvWp6eJR7EFTRHyskcZpuPvpRTjB1F",
  "key23": "kbW9xTYf1xkkwiyzyHYXJSh1NhM7CkQBnHPydS7GqiyXUzHsym9Nf8bV7pVAHZw9ZPovCYX91aK19h53iW3H8cr",
  "key24": "4crpwUaMqGtP1wp777A6DU3EBLh3EZskMFdcThv9Ls5a4baY2oNMXhpLWd62rEzT6eb8f6evaMQt2NnMkLhXKW5g",
  "key25": "2yoAAveoTjXDLSbVQ2EkWSCTKk7T5c2aQmHT5mg9mZB3RwERyo7ZgyFczodQZCtdsAmDcEvE4dMLSKNjybrkQjb6",
  "key26": "3CT6e9wwzyAFYDiBauc6CTSJEagBXpE4YBiWCWfqumqbkpEBcqK87HPyyDPqMiQGS85Wfmd3s96XEBE6MHmrhHzz",
  "key27": "RVQRsqk55Qd23e8f5cRT6791qzHa28JqMQjuyiMNBFfJ5QMkWt2kmZ2SyKdMCRRLKzVWzLSTZyZC8c5w2r5FjzC",
  "key28": "2fubEpTqNn6XtvTmFEB61HwPGXYsMfbyedaqN7Ad4tJqoTD1kX4EzJVupC99XtYcRJ9hbR9Kf8q89iYbF5hkg95v",
  "key29": "g4whXbEM9Jyg4fS9KVBD5fafKwqC5S8wEb3nhUqmmZD9NMDPp9fuBfPmFCSZcWmhKH4Gin6VwJw3wwPbhwr34kD",
  "key30": "2KF6Li4gyaSjrmdE5T2pL9kAFDTinYKmjTTrfEvJ3xTE8pJtb9L2ATdhXJesegKZVqYWi3QPtofpHLQ2tJP8YLGW",
  "key31": "6vnfSbqyscBapphddFPLbFiimpkvbTaWCnenZYT1TB7vW2gis53K5iV9qvGM3YKzFY4WGcJFp9kw8bJhkaFR9WX",
  "key32": "36D6kbW4nJNbpSxoSWMYib3n1RHg434NVAbtnzZLUXPzXC6yoD2EZftXNcb9DNkDgrhFttTYAhSLhLhYnGqpng19",
  "key33": "5juw2dDh7pihgaoU6TW6ggBqnEczdW89pZ2QDdH5ohfXcjftBUSytwtkcnEPQBkAMNxW5QqNemZNEJYbS9nt93Pr",
  "key34": "4kccfxjxBPgfWJ1PtBexEZZqnG13cedoMSXdPK1pHipBuRRwJ5G5Loiben8Z7cbSTShmAggEQoAQ8rBX72Yi4n2B",
  "key35": "4Npq4zvXpeV9eDyUcnU1H4DVEMgXEBnoxQTZkif49AE51TgMgtFhZn1g8N1i6sH1aiaxMitabofqE4Ww2fWUrov6",
  "key36": "41hgquKnSZX8MxZL2g5scv3BjnC13RAyZKBwn5u7Azaeg6dguDttqoLi4mQyXW4vuxC9FdQyTDJRiKTusUh8npPN",
  "key37": "2UzSeeHFP3QTAw4XGWvvmDjfiHb3XwqGmoCVuUfrQA2CsdAyGeNfLfrzof29DTPY1bqG8HT3EK8dWC76JkVAbtsR",
  "key38": "2mqvHcVHLK9rgAcWGwJoHKpHXwdVYwd1SUPbxLULykXfxky5jUCywvbsQeTJdfPJ1ghCX3a9mENFLK7Likmt7Lzi",
  "key39": "5yV52EFPhWFhM4oFn7Hr7AB8ZvyxDiBR8axKnhRnZuT2juU5gqF9FDGtDbxeGnAzvowTEJfjCa146T7jMnPHnos2",
  "key40": "4XkSiAFUaTM3tWbYigLUtx16czu6QyUb3uEjwUvMT7oJiWQPUv4N3KEvGFq8mWxyB8GNDD4mix1eE9RkxFmYSSov",
  "key41": "r3ZnPe2Hcg4enrMCUsfi3HHU5dtTBAULAmwQ6rBGtVP95CNkJQSxVWcvBV1YXzw5AvCcKEYRazZU11PWCnDfick",
  "key42": "4oSsBsSQMim5ny2wLuF11LseBP3n1kg5VRSbdgzUrZuVjHHMGvAvZxxo2yxo22WY61BaFnqyb4uoRJU7Apo6u9J5",
  "key43": "3f5HJxbtuMGa5dTRk6FzAwVqqWhixCCwm9oTvwfT5oBRuoEgq6SXShM4bqXs51iuR5QNmhmTPfN7Hg59ztvzcWhx"
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
