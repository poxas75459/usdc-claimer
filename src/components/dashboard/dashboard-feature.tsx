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
    "5xLEoHSBZcvswS87tzDeHVj6VuVxhCs7t4Tw84xMVNG3rNpqvLgSAfKdzPLzxVxbD2jd2DsokZrrzTdopSLTNoNr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34bqnHkX6yPkJA9vK3JhpaoXh3LS1VRXD1XE624ENepVf5ENBC2KRoXUrSZw84jx2anFcvhFL5m8276SFi5V2HC6",
  "key1": "2weAvTfZhykXzoktJJXEQFr6Djj6ghbbLMHSqNLGwPj3pBBYHJV9KPMHbNUbjwDRHDU5gZ4FCTnbaBwyo7KyWC7J",
  "key2": "bWUJom5Ek8cxGVQ26bTHzWhTSgqEJiecJ8GK1xW8DYLEkagk45tuFCFuTri6CEBr4s9SYLGWYnkg1C2XiGdM2oN",
  "key3": "2ZUQrj8KEgVqasHq3X5ZuzohRQsSqoriq8H7xPbu5zY6YkVetpy6M68SWnZn9ggdkNYpgYLma6BNhsjFZKmL9Z8E",
  "key4": "657QjuGSCiDxWi39Rwyo63cmxxjuZ98G6igi1VqVCkckKhB6ZWomHZdKBGVodmuAUbFESNWSHgtsvMvcFGsUjcim",
  "key5": "3UtLCV7qRf5rQiB9FzxJPcPFuqtJLCWbqQCWg3Pb4T3dTGNKmKoQgv2y7HPcSTE4WYLzxDmKkvQnS22PAHhVGK4s",
  "key6": "5CzyufhzUKzmsf384XtF412Lwa8bxn1hap8FC4m63bEM36JEYW4bunxyq43dBnDdeTwKCUhuUiDaU6pZBaJzwx2T",
  "key7": "2wHnum4gXQaqU15bYvzsv92PyuoTnsdGF6bAvFcJGUUQ4MhkUYWy5nT5bLc8N9mwovNYHS8C1JjbjT5MdJTMZykR",
  "key8": "4Ahwhkut2MaK3RPJSvbieeb1MHXYhSRqRjnemfZnsRcoFF9AiLnFCMuAoNuKwtHadXXmQY4W77zgvbJJzoVTb8xF",
  "key9": "4vXfF346xVL6xb469jDmJFAHfum5K1JAwHGgZgZZW7urMtLBzeLywwReYnRK2LHZM6tWTRDudxYVKG9YH3Y65DL8",
  "key10": "3ZaxZrzPiV7hZZFyvjRovbpW1aaBJGx5BdMLTWNE4zccsUvWZYdRZfeN9dQSXffDHixuSdzcWusJo6zwEwPBDNgR",
  "key11": "3znv4RPRmD8DzgTyEyc8yURUmx89UnC5WMCU1AxWdWemi8G4FV99xVTKhfsmMyaDsXcJFed9PDHwwXQGKdiUxvnt",
  "key12": "5vmn8bq7CBvQVfGqV5XQNLckhDU2QMHupjLUhviWD9TecZefznk5GN46d8iEBgpxN3KJW821A4RZ9ot9CVgEDBQH",
  "key13": "4SXFLDej3vzHK3PxjyP86S9e2RiQgcT9rV8QiwhUSMStey9foTsXtiTRBfCwK9d1iRuonkg22pDstMnrjGkjBKEK",
  "key14": "5myvMhp7DhznFWNoDnyiFQSAUEfBdU7MTRbpU8GX8FHRDaBcxyUJ8ApFbxdJJbdy7hrHYtWMYYPEJYVzh1JkuxBP",
  "key15": "2ga2RdjBg2eP5v1cF932L4bmeGk94PNixcYpuQcWvZUs3UG2XvKbDtTX12Qx6tM7wjJubwaaWyaDtgiDDQeDjJEg",
  "key16": "5Uzmft9BVnaWjL8CPTp3hbkkoaVSJcTEKcMo4yeV8t9KW4xHpnZ9gvMRWLc8Y7LNJ4kckGaVhMwurKfxifCphwv1",
  "key17": "624r44oe1TJzXCjSWmohonxKwGM3WS4ava3fN3dS8gtkmCBQFo3sSAa2XbcJdNcGoipHSgoc7qREEvXN8D8MsvNo",
  "key18": "3zCMAZQ1ikw5muuRbyXYDkztYqLToE3oBnpW3GHMdysK47iYhKdQvHEFK1bxu29tyjPQtgGkZjFYsGGUGUm5Khed",
  "key19": "2HNpZ84TkFTRVVBPwyDsfkYK88KcKeMjPbK5FLNzDqjwpDEezTwnyHYJKAtpsU5wcMDogNMmFzmxWHQ8GWz5MGjB",
  "key20": "5E6b5EPUzS2UEqfW4T1JWHw4cW4Ajq84MBodVUinbAfohqDE1FUr7qYKR2PqXhTZ5c5LMYkuM7FBEg4uqrzKHNFc",
  "key21": "54LmpboNQvEkV3eF3MyZMx3uRyYEfqiPFx2wZfDBtsJ8zKRbcUTJEhXZgLd4u8S3ZxTUNPQx5Ef4nEZhoYAwnm85",
  "key22": "4ZWaFXZbQyTEYgtYNq2G1ctbePiB4CxgxioCAhpaXUUPGsXFMsYSwkkGz7JXRaujrVhQJUQ91GnUbdeH2iiLd4nd",
  "key23": "46Y61psgCohGE7He6yQ523ADiMG1cUJ4aYujePG5wYrg4dkMj4ro1r8t1fFA1mgCt4DSHsHLjAfcVubQqYFkCLYR",
  "key24": "5qp3RwejYofhWaPEMofKCyhW7Gevn7w7rfV25By7yy4ThC1zRbSSN7gCHQzutPEjSng1zDWczorpZDoFBAUffKNN",
  "key25": "3odxSgEtyYwui6cxF5d88kY2Wiwfk2NPi9n9dPTSNxMNK9WCy6U3KhjGCrzdY7dJMvaN25j5KyNFtSZbvLQtiSYG",
  "key26": "2ArWcMeKq9TZksCVeqbxFG1V1Nr6ggeDmW5iBK8doAG6xuwXsNm2gR8gXyfBP7bvYDJq1HAtd6NWAnzShBhzjeHd"
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
