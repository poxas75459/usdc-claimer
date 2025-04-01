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
    "5WaL2R2dfwQQQi6JMqhdqfEsXFDMN8hL7Ue325rMdNXGriwL2YviBEbBHNx8TP6VtZzzdyvfLkkJ9niifdDfUrHK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Js15HAnbwqK4DSjfGHYwfK88u22Bwsm5bFxvPBd19hukD6K9mWTxVvfb5VpvspSSCteq11hNi4MMSmXkVrR2CVK",
  "key1": "5HykThu15nCsNxM6bYjdMGzYqbtv1QczdfQrf7fhjqTiBC5QQNAq2qsjgrdMUckkNXwfnuryWefErDL5NBqErcao",
  "key2": "5HBcRMjVDxsBubMRK7g1g1fBvzmCRS6UhdvJbeuzzztndzdoLSRycA7tGGCJp4M5MeaCXxDwRi8kbh44qmLcGM89",
  "key3": "8WPnd5oRSmuvhCPnLAEskp3pLgzCSq4fuzCpGiKdDvT1ZFXGbeHeU8cvV1Zu9WNPjkzGHESEQnrhKJqfXiFGXRP",
  "key4": "3pxWU8SkipPvHopVB8Y12P8UwvZ2RknY3nsHvTSpca44hQCrtd3jUSMzfwy2rT6pM66XceJUjeEtdDQqEyeE4dUx",
  "key5": "NiXw2M7YzNBMEcJkVN6qD6FcuSaQSQRTC9qQ1sYaUYbJXLS4skUNmZ5c9tHMNcMJbfxMBfmLmMxc41YSPJ6ukFh",
  "key6": "3fSxGaD81BMJtWqgjsGRrrpaQ8YPye89DtNdHwxgVA521xMvBgXSPjddR4N66txdWbNCAmGJDa4karJA2uR4bdB6",
  "key7": "413ExEFqB37AS8yq44dAdoCFfyf3ZoDviCX3WnHWouuXuQjW1GjPinbi1HUP5kQMmC2oMLMNb4xeU5nuQy5KyeZ9",
  "key8": "2BbVYqrr7mC5gEARtiTqPcjd6jUnvX91wB5yWS3sHRE16diqwBvfzgC5NuyjcAKqmB1HEWkNgzmRuVpshxhX1tnU",
  "key9": "4KjpEKDqrvEHoPLxPiZnbVutz5i25UeWYe3z3QGStAM7MKQit66GmjmJiq3DRonKMRch87kNQsrh44MS4pLJWixM",
  "key10": "HdPyr4SgLwucoMHt8xEN2xZB1zGKbK3urqsn7qLhPDVUvgKo6LVKrUCemuyjv2pHsbHWdBWPXTef921HVd1sMXY",
  "key11": "2oYfccFjJ537FVva51wwYn4vr6cmaVmJN9bA6jejRnctiEtsiaVCAL8wremsDzLoLuDVDUAAvsGJLJaNTHL96vQu",
  "key12": "5ng3VaMrZAkP3z9kZcoF7GjJQGR6TLXpPwPypd24zG62jQLTCkagjm6kgBWBikWeXT4ep8rS3ZwiBrDpq2oUbfTZ",
  "key13": "4iiDJ8Rb4JSBPMNamqVHT89KNW7rQjHs3zTSR3V9KafJyCjvyXvnCyGStfBoaPC3zGLzKmpKYbAAr1ecoikbBV5g",
  "key14": "4WwvdfeY78HrhY93m4eSn4NZ64AH7BKdx17PjKhVN5rt3Jg7di3aQKbUv8RgHGvtWq7e55SmpoJpYH2a9THZ8sQn",
  "key15": "2f16nYGVFAzodSRXh72Ljj8D6tpZ4Gc6HS2yfA8WB3XZh686kbudqWVpbaChHjba9Q2TW67KrjDFLnWbibUUv3oZ",
  "key16": "3RapJckynDJCvDyukV6FtfRfSDdks7p8pbVPVPScVXHboQeqDrfJ4cjptzw6ASXfG4WTSxSE3EtpTM8uFBktnaVw",
  "key17": "T19nNPK3deKSqqjATJ8y1JfsiKLYZBgLWy3pobk9eaGx7VhTmvC5CR1pZmSWmmpo4Xkftgn6BZQStbKqUq1hvkF",
  "key18": "4njiLVCw9nScKZc5tMvnapGeZhwz3zFThRm64Lgko7mt8R6ReiNAmkGowbKet8RXgfXmySdKN3oL45TXmpc5DNS4",
  "key19": "5XSVMva7GMQV8aCfCPbVc6t6syFsZPFEsWCgjMpmcVMb5EmH8FQGye3pGrE7394vntj2RrZKcBPrHMYYU1BAwQSR",
  "key20": "2HcMWZvXvcs1LVinsrDLx8a9ytUzj9cjW2Tzv3JtM6RHRZrGTJ2BdEGQhdZz9Rrt5ajQBWguyzg6BEkz7vUgUS8j",
  "key21": "3qZXDHGpkW83LzWeUXPTF6pr2EE5KgMu43bexCFjxz9ovHCiE5m163mAW7o5wz1rwLUHpGSs3k9YouqPb3F8qys9",
  "key22": "4vWeWbGCUMn1Gz3NMamN4v6tqzEtQXFH71J8AdTsAWQ9Ufh7EtanDfStgUaPnVAX43vAkmeAehQegBtfgKETfmvM",
  "key23": "4CM7v816ALsrxsJEAZPLxGwc4mSBLauHaxpvSo47o9EX147gBxN4dx2QQDdGXmfT8LKC3XaSDDnNUZmZcXR187iq",
  "key24": "H34mSWoTMME2Aa1zJ3UYhgBnZwLFamxFsVNt9VumuPpqamowg4ZVj55JjSqeUTXoCi5jV6KUMsSswhjzR9dkQQy",
  "key25": "Wq6Q6W283N2c1FVGEpbTnqpRv1sL8BT1NMN9TnwCE2vwd25HeXt9Dny4pmJsP2SczT3NkNntZsKpfR8pf8WSMRi",
  "key26": "3hEUxajvDiTDqqcHbav9NnSuTVhr7WUkD3jTwmV58oJ3bWdauUB5bjevis791Wbhq44ntZzY6fDmuU3Pjj9yqRM",
  "key27": "23cJ3pkjzHWWX43f2ZzeRQM2EfAtQbrBzNyM7PoDU9Cw3oAGXYuno4iQimmoAgcaBBKFmwQbduWiSPkTbqqczsYJ",
  "key28": "2K541zDMZWVVSAhQkTFgoDshwjsiVcmPnx1hKUhGJxyAmqSXRBy844vivBqzYMVDFJiUCqtWzK9HgS96AqrSsHYP",
  "key29": "5zMEhZaRJLJbfEAXVKbZi7xAeZ6KhS51WdRvaco9mnfNuV7FCDrE4mUCWshLNbGgpE2tjDwuGJKQ5tqoX4Bbh9en",
  "key30": "4RLzqStrZ98xeRJVxPi7UKTVvoHEJucy3HTtrvGYHYyTubKpdPcgfwzpUHRBXLAVwrqSGn82JwuvYYwXHFtdAWKk",
  "key31": "4GF1CcUEd6LoiQ5v6bygJwGh45uTpiHno5y5fvsHcbh29QuzgKUhLLHgwpdHhVB6yUNQ4TL7JrkRwJVxpLiCM8pr",
  "key32": "2hkDyvjNXrTLN7Xj64eysSLeuKoSYhtrwvRc6JFYeNJmzqJAcVsyftmREsMZxYFhQNpCskce67yVzXV5xhk2oMP5",
  "key33": "5p5PdTAbSY583TWtnL3Bfx8FWJcNE7ZwRRcxP83q3u3cjXtTi41q6nvspzdsYE5U7LSaVR5TqjFaU6KSwmBqbh1C",
  "key34": "utxXhGHqDaToBo2XhKyebTGeQtL2PHRZm35r4XM8K5UiB7ZK8Vcjrsm94VScWhPqSHAtS8Wu4gws2KYvgZgMUBg",
  "key35": "yo9wCUFD9xoaqGK8K37G5ReCgNyychLcZrc3c3bLB9dqLuMprfuwLexCmVjh8Y1k77FS48XjtjcdrscAssY1W6Z",
  "key36": "4Gbs9pGVaHnrB9f98qEKrb85mYx4XRuiwNDDGPg25CkKE2cab7mz2syvzmsZxF9xAruvzYoLuJjaHC98b1thZ15T"
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
