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
    "2ue8v4PScGpwKephAL3NmUCHKyp2odKsTiNPfMqwuHZxQAXFKo2NjiH8n9qPSR3Xgcjz2WnSpGpVxc3GcSHYsfP6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "US6PB39rxsba7jD7srLLg4YT5kpLkaQBV3wg1qrtQnVg8dfvP9HzaNLQ1CsnFECCdcWszMgJmTWfiRdCfHuNDpH",
  "key1": "j5MZAXu2iiULfQ8T9iFWYt2EMgfNiDfTjph42DGgtGBu2XVwbVZ8mqngKXW6KpJvy5DrpjGvZWEB4YSdhJuCkg1",
  "key2": "54uQFcjGpHWBF1zEEyugmiavfVK9kuNDQrWxHTWntKn2awdcWJZjTpidvYo2oB4NH5Cgnyf3YjjsQ2e3z3EAUHNe",
  "key3": "4mzWQp8T36T24kpAoVxfz65Ch7nkEfkALHdkctDYKqJAA5aYf4ruvemXjpqnPK3ipXA8tmzSeUuKmRUnoFVByTjN",
  "key4": "3aUxnJbeZrP5SBNBjtf4ACnG2UwGygGDrtGTBAEU28dfooWePwsBXuL4SeaTDANL8uWBGH8wpYSWeRUqzUNjwezf",
  "key5": "57rJ5P2JFW5QpPVskxoUQkoxKiFuQ5881MBeBveKB97jcBr3yf176qU5xH2LHon7a3Apgjn43nSHcmwezrXYRL9c",
  "key6": "3K3PfCNzQ7VPwN3wMmfWwANtSEVAF6GQge8htuxw12zWF7Mxi5j4xksdX6pMUYP5fc1LQCx3VULm58D5jCgpgHKV",
  "key7": "41ueZ8T4MNU2XQsPkU5FCentPqCfTy3ARLv4snXdUFfzvPRDNiqD9u3oez247QceXVym8b8kK7NhZh1D5YArWyH",
  "key8": "48SWRuNpaGd8YaFyQpSrg3ikejBVPTVcNt85WQSW1vtwcDMmnWegCuMLez3dq3tdrtuBwef9bu9dfDbE6tvVCqNM",
  "key9": "ysDNCYY6F5PPag6P2nF4NGgKXKeCkmatZtuyFYp6aQX6BJtim5xKQX3qMtz6cLPSwunA8kVaAabMDrag3U389fT",
  "key10": "VWjht9wYYAp72qNYuMfb7hk5nLfqMu77GztYsVRqdZt5k48A4GwiWr9G41S3KS3KKqLwfgjM31jMa2RFYRubhG1",
  "key11": "3rPC1o53EnPQKmuAZmuY2eqveNb51TvFL1trTg5S32pftT8WpthF3MQp2GGq4yU1gf7cXztBnsqN97mkQJwi4WV8",
  "key12": "3cwZy9Z492Ysdj5wU3SVtEWAefP5DqzC7CzrRUcuA5ctU9tyEd55UPLnJDnNGCJTy7FWsPuRF7UMTqpmuPyVNpME",
  "key13": "5cLWjrfnnHSSpEdWTK9x4Lmo5PHFp8yCx8tWdxdWL9NR2cvvh3x2dp1h4f2XMJN2mycSVnaWX89TKD3mYaaKj42a",
  "key14": "28ZmfBxj3GCGCPCsE9y3ioZVqn8Q8XwN2XnpwGZkQexLFpNZqr5dw74TmabzqTkXtoAon5enXqstt3npuJEhZBa3",
  "key15": "4KfpH8qgR4sD6h9dPZztxbWK2iyJkWyJ5N1P7c6pvavE7ad58xDA7WankVextxX8GiS78MjVifBnoyPaR9zuQXH6",
  "key16": "4eWEk7au2FyEbBf57JmHiPyMYfdVXDF6PFHyAssr8cLM7uZ4uc3xSXLxttrgQry8opr4vpDeQ4DFNSLC7AzaM4Pb",
  "key17": "3PdVECHQfcJQgvevk1h2pn6Br3W8UTLiuX3j1T93Lt1epwmaWxTK3GWAN4YWx3x72C2Bn46sb55gXp7awHrDvPHn",
  "key18": "4dmttXnAicBM1YmgR8xvvsvpjP5gzJZ3v4iXmeHsT9QFwkhf6V76wzEsaYEEWcybW2BCc9mghD9VpBbhSzGkGaRq",
  "key19": "4auMgubMYSaTRnEGameJdsrEcTamcP7iF4baXLBrsP8DXU8zYmgZXXZKqXXzP57jzpZEDFdWcn6rf3EwG9uVfD28",
  "key20": "5cNksQfDyVX7ioebMH1sD26UXWgAmVoGTFDunTbh4AN4sPwhBDKsugiQrtG12EUZN3XFg3Nj8Bz2hGSekTZPYFDe",
  "key21": "2JL7a6sV2yVusEdCWT6P4qvHF7vuMxhch8Rn5UbEbczPVXkLtZj876YWR6DWzT3jNAuUaMqKtQHm1Bqpc6UTpZLZ",
  "key22": "3ABYxVW4FkD2JDhzfD74Xz1N96M8C21VbTWHX9hp2XwSpHYHWdu4DPtWbJc6au4nJ7M3fVARrTKxDTJDUppcxb6f",
  "key23": "4Pvwxf7czABGzGqaRzch4jUxgNxyhJa8YvaRj8HbMbtj4acRwT5EndZEgcBs222f8N74CmCZoKAp9uRQ9NKT75Yg",
  "key24": "jJEzRyYbyTEunEWtguSKBnKDkMyuYkzcaVJsw2C2XTNsUGkRora1vc4MGW6Pi388vWTPf5G2eDhB7gHc4TV8n1W"
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
