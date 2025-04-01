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
    "36vH1dEK7QbLTyAoEUdEYxchZV8cbEtmi6TFPdc3vowD76BiTZXvoHh5PHk39LivtCJ4agEyKaaW8mMJz2b16RZ1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DWcpJuiQA7DHPqvCRqjpzeHZouRLXmWTnsaPySw16UJXyzrnxZ6Ujb8h1TByz98RsRZnUZLCnyN24D98DBrtMms",
  "key1": "4uE3z7eSwAn2MAtvk5oGEqtH39p1RrBwF57jwaDHuV71a53XdfcHFriQz3kLdiPKamwZoeF71xe6Fw6NV511rVmQ",
  "key2": "41LqAVXZwVBkAjPN12soAC6fi27ZDabJCRDdxkh4UjykLSaD9vNnypSfcbSr3sZRUVjCur6z1um5rtPaDFueH9TB",
  "key3": "3izJj9GxUB1oeRPWVxqNXqU5MJN7a7FxuJrhBcwe9J2pZte2dGnGq6A8DFChcZYtGBTZTHUXwM9YivqrrKrftBAV",
  "key4": "2fboP1MKDcDpX5RptnErqrE25TCKXdJMB7Cd4v7LucTUUAceECPnfEzdWRshYq56jkzDo2GwDoXJ9rHGTz1Y84tB",
  "key5": "4JuK7PJTGePgywYzzsCQW8SZaZ4NuWNHA4xDhGpjk8K88czC6n88zzc8Ewp38cgQtLZxXKt3Psq7t1GJrcqFAdq3",
  "key6": "5fA1JQYuEFiLzMhskEBo5sk38N3uLuaRC1G3PF52PLw5P2PNz4i8QDuh2x1ogtCoz1dMAJJX5r4u4fnNMEauuke6",
  "key7": "5XqygErHCgvouiQUPdcjXzkRS6pRzZp6H7awnnrUSjX4MP727icvS4pHvT2TgL6BpSEKKc231UgrWHaAf9amhdzG",
  "key8": "4hHsZvhQz5a4oyJNNqiuUHiKbeEhCyhXY6WVdxTYL6NoqAvK1s8n4MZqNYvPBnM4n5rVYoBCjqna1qDDmf9CDYuu",
  "key9": "iXbagu3cYvrJhaGDueAezHZUHJ6oi75LbBCsC3fXwYmUhhrKVnUCeEaVWHKuByoHsAJQTisuK9Xu3XEz4y3UioH",
  "key10": "mhgmKuPmV1GKFj9Ut8e9FhRbxtehT6GXeGkpZ3G33NGTCde1Q8WAfamSghXi6kTCUNcu1vgJYvtmUxN7aeHk4aw",
  "key11": "3qwJ94GishrfyKPNpLPbkP5uWfAEh5SPxc7bs5S3qfhNTqrzz3jseP2fEHrP7UsicBPvsxLr6vquKJYbA1FfZdoT",
  "key12": "3YEUKNrawyWneDW3Qoh9adarNAjfRigK8bLorzYfrFFZxBkYVzdEENaScc1GvcV5TedXMojVY4bL2FGummpuTy7E",
  "key13": "3Ua6tXrJjKsmecy6bNgTKCZnhNz4MqxLPeg6Yk5msT18uguLHopRqCyWXDHjLjRFfNjV6qgvSQiMuH2BoNXHGeoB",
  "key14": "3GwzH275Q6NSJBjzUWpbYZjP5UYq2i8XFczxy8uumfqPiabyt7fW8ZSPnnPxuGhpPsbRfk8dvU6xApKV86cHTBnw",
  "key15": "sm923rYQAf4FYx4V3UDayRA5gMs8A2c866hmnsmYmXtcoP31RyF7D6EUHBPEVqnPCwj9kcVjXyfJvLJhqqCf6ju",
  "key16": "3vxEdzWQSCS9jzBTzVeHJVN1SfzK4LgNYSSawPB5ACRdLPg9ytJeWGT8TaTHssc17Gi7FCyz5A2ekrA5wGikm6ik",
  "key17": "44AzGF8o57eyS1iLRyCFYae1efW5YhSq6beS89tLjiHdM6GKsAuT9KbG5isUrXr5sdqDEZ9JHxGZek81qMC3mfc2",
  "key18": "3D4WqxrqnVQz8uE4nbe3ZLASsCggu9EVQ7HrbHEp1xtrDQovj38zcbW3G25jNYBpmVryXSYekNR953CmNxmibaAV",
  "key19": "48AgJ6XedNiH9Tbb5g9YRrw5usoGrgSKqDySai5cbpo3jvzkppeYozhe3nPUk3qG5VLrDuY9Wb9BLgR99cS5zBuW",
  "key20": "2tJBs5PMPGReW4179tqP9a81kjKdZJk9qZYqs2n7kkU5Ny8RrBJ5s1yobXdQBnq3ZaBVS1JvofjZ8Xti7rZKR22o",
  "key21": "5aDcvvC9BUPt2nc8MTnhFaL9xYL2KYHRmf9HTtZZCsaqgWnt5qgJ8awjzd2rPJLE4XY4WWJ4bi9JmweRUQS8bbJc",
  "key22": "63xL7ZgGkq271ADhQgoein7Ep5RinBniff7DgNRP5dADXBWGNJd17iPybAqdnBiNJiwVS4jFyMw786kuUQYnReYP",
  "key23": "8fYq3CffoJr6MQcK2W3oaV1GKYu8ss6DTPRRKWLEeBYLL7B8tWbGKZGmPPFZT39izVTy9vQ7tr9cCTYwUeKW2wt",
  "key24": "5z9j1R1VZPEWckp5vJYZfDGn7w5AWep1MDHjbVukNueLESJZenZPKg59puSHW64WLmwHLwhqXYvSetKffhS94P6L",
  "key25": "39nMVhr3TYw2o43FzZsgqYdsT5K2H1Cx1P8Gfn8GVLRdyjWFqua1uhqfkbaGZT9ZhweBRY3XWcNS1kLArJiK1CMz",
  "key26": "3BZ92RGfiNrZ6gqNMcuKW5rU9EMG2Mer5yYDE3caXaLCHCj9h6BHNBYxa8h2sRau5L3UEQ7attkEo3rwgra97iVf",
  "key27": "59ojjjuG4xCRH8V5mmeqFqRHPmZwwRqCyddxFEmqHYvjfa6PSAjZ8kxdPnnwHx7xxjAJczHW3ZKvbWtVJznkTjxc",
  "key28": "4eHSD2q7kuDJZCMUkzRUCMEoQcMPDuPR7J6GvPrHGCGLiCztsrjzPi1ccNB9PUSHEScdTbVeDZ4Gu2pJQH9SnevQ",
  "key29": "54N89vEeRKMnZxAs33VhVrYcEaqKj57DNUE5Zw7SFVxD45uvMKaS7Hp7zFyP4u9c53WPw9bFmJez68wN3ZkEres1",
  "key30": "2Pderk82smxbZvbjyhSZc5p5CJ3cfapyeym8NLcTjRMZSMrMyAxfjGvrK6BVR79X11Ln5S2QPKWaUwF3hjN3ivPn",
  "key31": "4sAPGVz128MnDEDAcrbLrch4HGiy5GaDWzmmwTCsE7DUzNKpiNngfXMfn6QLv3fkwPuTErMLLNjJpkRR4ptnMvpo",
  "key32": "5psUBk2iQ6tkjP4uKtGNPw7it2xvB9v7FDh4xy3fins3j7D233KcYww7SzHVbGFBLuBEPS1149AEoALM29tAJyrP",
  "key33": "2n14MAtxtuiA74duU8d9d5hiqxPNpc2z9RSQMsvNN9JGHwhLSck1qVWmH118CcJ2dw2jnGMGBVLdfsYyKCsLe9QQ",
  "key34": "3qaY2NvEPMNtbdPD4AzVdt3PT9PYh2NBEvcES1dndUcRmJKfWvUgaak8JwbA9MXDEWWMSYd9kh5n4nNweD4GRZTk",
  "key35": "4NcsAi9QFzWiJotx3mTQfcVyuTUE3NLfisxa9ShqydAubUVMQ2vv4wpje6iHSDTCG7tykCq5WeLX2ch9cSs1u6Uq",
  "key36": "nUJobzViY54iCFnsB1nFPSoh4S7yjxt9AtwCxP2eMnCw5tEmRXJSup4DFnmBhWb7peqGYp8oyZEQH33hpzEBUkU",
  "key37": "4gAvvSCwC9sqU7xb5JitdpP2JBAZ1yx9mvxgiPWA5NMLYiz67WCE4rNbByQxQKwcCuQRZPeTLzfWCK4r1Gw4gf9f",
  "key38": "NrGE3NQeqPSW9ckN7mHLsRvihbtSDwjBVQ8eX9Coq2GpfJv6hb4s77chgo9db7jX4NVksvn95ojjdMCHEZQ1kzn",
  "key39": "2TEuCWh9fi6kFzSYgUgEM2H7KBphyahUo33A2ZfguNjWxksnrY8LqNFyLLubyAr8tJxALHoQ8cXSTcnts33qCi6q"
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
