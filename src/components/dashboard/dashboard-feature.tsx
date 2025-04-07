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
    "4y9MYQ8nZaAHVv3wE87d7vZRvK3am1VeeMYDEzHivhaSuSFHtBW6DFRVQ42V3byv1Y3zVprGfXaNM5rscZxHu46v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bpU3sYiJhJ5ZQNAbCiECgqmXvbEjGXTToSddpZrr77tprUCk5JzsxkAsLd12DwJ4qy69jcRjusSZpNTgVKfguMS",
  "key1": "2WjGJXSwSbaed79mTRx7nhRafbQ38xNEAqjc5vcHo1qWWjeAGF1m4GoXauaGcPxBEDPqEsykG6EaCxuqD2qA9W6",
  "key2": "3TAg32zQGYHQAG9RrKaKWGevZHXRkU4Sdue9hHKHGmS9tWvwY1MkAw5SqubeQ6M3snEt49PcxQkM4MeeHbUPZkuU",
  "key3": "4RJU3w8jsTJSRe96kjvU2JQtcuwkNUBKjREqXQuRL1DGKHsTot9Wewgivg2yBnnhTEHKXi5woaduD8WCPVwAW2Ub",
  "key4": "53xJsPs4mAuqF9ufX9ntGwxSEFHgb8nmWuP5icYzVnjW7A9nxf1gTvGPd6EPd1Urgp1v9pUmJf7Hktcyx7NcXMHW",
  "key5": "2GLLKTXGAV7rshb8SRK8io7L8Lh5wEtDKDU2pQz5iPvzSZAdx22aTECkWmLA76BHXsdjHnmyKGL3oAVizFRobQwS",
  "key6": "37tCBD4v56cWmZobDyTxRYz8vUUC1j5UR1jW2pikN1Y2RCbt4kBfVgyL2WBpF3LS35RLVcLdP9HRkX5t39zDvhZ9",
  "key7": "5ULDS5HyzjZ87fHu99PGqEixDKFdqKkUXuD2nGqiFeQrkCZNnpwmQE8L9eQHDwZhMTcULvsiojjZ6y8ZS6tN5XEp",
  "key8": "TWoJXevYZPzfHkr7wEbHA3anZU4S3i3xiC2rMtni6jVQSBeBT66uayqSTaFREWq6gGscVEn27tvumbdK34gdcDJ",
  "key9": "5TjgEXvLrq8WgBj3AdUnHibMHUUckAJ71zWeipvp55NMYmFgoJEqp3xShcBsPsH3i5Vhdq52HhxwzRmfSzsUGenz",
  "key10": "4m8yqKG3shF5SSBuwLwXZyTVprkvMgEXADQbe8hgmsQA8uNvEdSGNFU3sbQBUE2pFLDGtkE8TKe1Tc3PgKWM5uvt",
  "key11": "4KnAruNfV8hh9Bs198ED3kgpSqo7fgKdmd6Y2NnAzTw5ThDmcNQvBqQjVud7dHYGQp7r7AmwS9zKeuKKLWrE1v7R",
  "key12": "442eyfdFbKT25JgvCaykBqRGqKsQe5JbkpXcdCS6fkYqxEV8i6vKydUp4Dub49p3ZgXWNS3VE9E3ihQAWTiMDG9W",
  "key13": "5aNYCErv19pYcrVUyzJEePsUDgdgQBaDxUy5EqZ8jvk64WxLK1LwUMvmL1rkoLcDBmeirk9EEuBvfRn7pM9urvdK",
  "key14": "2FAumSChpHqEU2ZnWkGjgAhhAA7S6GS1HnoLuaCJb2q6esJJumVh8837Kgt2PfmU1uwyULerrDjUi6VrCMT7XJJE",
  "key15": "5Yqj6fQZNo5Mjhz8rCfL6pjGrocgock6tuLeTDqTCr3NtaREZKSMaRMiXSYxSNZpRUQvJAzzUEAU8fFjGodzTiNr",
  "key16": "XvQXL5vtesZHvhJBgWovtDQB4qaqACLXyrjt1L3zCEN3zamGe6U65PXMttiTX8Qmw8PtCrpo4BbEEEYDAvDDQCT",
  "key17": "5ydPA6xsimzcgMPHDGCrbk3EjNtQmDRVT9y3awQTURpQ3vuwhmSq7APkzk4V2FfdfwcwFL53PbZtDR6KT1EvvuJu",
  "key18": "2CKkp7qtFKsLtyshaRZBM2PetNtjBhZuWK3rmWoYPqRioa82Kvotvr2R29DEyhWbYiG444Tuhfi5LvCF9JMjk7zA",
  "key19": "wrZ4ATfZ4Zwit3LmB5dcyYDbsDoDdUjxJPdEYBufXapAgfirUAkoyuoEX4amsExW7fCbDaHNVq5gtxiYWbQJBeW",
  "key20": "4t6o4t1no9frdx4wqHCS5Qqv5RayYxEa9R2U1UuJnR9XQenPAJ44mxts8JrA5WhBxtQ6wFDgm1UaVz3uS7qyMHe1",
  "key21": "44n5877Bm9nfrHTNNzQNYedKVnLk3CLffndATjxxYLzpAxv17MeJ2zfdZ5CvF46dDhf8LuVoua4S8n97MdBG4PkS",
  "key22": "44R4Q1kfoktzgZP5UT55YauwZYH3gW4oQaYcYkXszKtqkLNqcnPzVaxJj4wd8Uiz5WghFn7tLMGzyFjWf3MeKict",
  "key23": "554c8S7Dfp8s62oRCHfefbkyQx45teqengiFda7eP2H7B2xwHevqkHv4ddRhy3227BUboF9F5t8YgQpA5uKJnfAf",
  "key24": "5KhYe8ERWGLGUeNL2EcvdS9bDuqqGQbWQASTDJkSPCWuV8AY99BBMsusdA1BHVyFgqKFoFEZedPrQyCLUTKLk63n",
  "key25": "nejAMLJQWCzSjUjnxRvnHFuTwrPzG7vovp7jx7rGEr6AF4AgMtVZ8VhAHm8veAjF8DPVXMRGtPdMGAqNubYVvnd",
  "key26": "21u8oAJFRbtLgpK5gbGJ1TJrAMemgebM4jRqnxqzuQ1K7M29Zx4cLVFNgeEctYJFnRFsvYSFwiMbNsiZJZSQaSVt",
  "key27": "5t5ZansYNTHhMsMjNrsX9v9MqMkq5WjVUSMZjR29ijRGuBptHD3bX94UaCaBwYk9TRB6cTnaurtGUkeprpVQvDgb",
  "key28": "3gvZngyp5nuMUgiL4WLYtLWv3aiB3n248hcEcpxrq3w1z8jBLyGgwdtVRDdYpjTrAzG29ystLVHhhzyFfbyjj5dF",
  "key29": "2QvKKHYmrukd5coXYfCSStiriGtoa2LUcWEYfjEHdiWRYnRy889AsTa85FgjrxPMpMF67PHTcDXW94VwjVZqTS2h",
  "key30": "5LYzcKTjcfb48nMo9Dp8NQUPFTgXZ856HQnp93gKfcKDyZYbpP3kBLPgf7RxiZAdSDXH1AwkkoT9SFPnPqb6oAf5",
  "key31": "4ypmp9T74XH1LhdHJ9EboNia7mbZfmxQVPFNZJhoNa9omeTSqPSs735owZzGNPPdNSYAaPhGzMfUPD9EJCJ2auiA",
  "key32": "2T5rrfwh9TPBF7kwJrdY98EbiifkzkwkWkMiHuJ8aWbiinx6WxeP6msbSkEoiBrdojRMZAcvrU1S6zQAiWxuBJyB"
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
