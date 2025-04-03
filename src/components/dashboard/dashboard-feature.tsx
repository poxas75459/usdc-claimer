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
    "3f6zPKeM3KHPSPntE6XJnbxZ6eCupQNMFfmEjcoBMMMgS6KAg6FBkyBF6tqLg5EpaWvwMitDwWVNNz9RuRojmGp6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nHTpdsoBT943P4nBdKxWx7VoGayX3obXyYkeatzAVocBwVh3s9jA2KNSh7bGeR1sXozNjuxve3Zenc4v2kLovwy",
  "key1": "64y6Y9V87itA8XcfqndecNdeymu6umC558LeU71J1hHftytVXZRNUhqFeNM96JkuxVZ6FJetjU2dDSSRiUZNyPFY",
  "key2": "3JGd77ZPEnvV3PpAhoJZrNkvJxRxzMFRunsrMM1Vk4vDr3AEyozNrgS9g8RjpmvvhuHenv975SwLFBkntkxwtr21",
  "key3": "3uRWkYqtsDi8f6VU9jRZWfftvQZTm7jeFJwmCknqqrQw9DbvHGchc8HATC9SUE7h53jVjgfjJaVSSRPFsJmH8jrd",
  "key4": "49Ax4uRPdS4XyfkBYkr8cYyQz1s7zM7fdm7hxbhtx2eduBkx8KCUSNgC23QXooAquBu1LRGrF4ZfHAXwdw158xnE",
  "key5": "2dc9p3wt7ygzGgx3F2zdVAk7XBEbwmUxpTsRtyeWF8wfBR4JtiaNEsbL8wsMAggGofGMWfvUniZYJzspTt6JbQiC",
  "key6": "4bvvWaooVxwtfxxbZrGcFWZyVmTvRmpX9GST9RqcjUWPg2mHJfC6PLaoSppBMiZ5ofKcfLHFWaHcn6cF5oiWZvqz",
  "key7": "5wNAfPEYGJ9Pe9H4MNPo9c2GnrFojKEk3o1b4uDMQc1RRmtq6FDR46PMURhppLHpCh2jiiLP69QRcVGum4vCSMkU",
  "key8": "27SNTVnRfzRzW9bdj9eyeWBLx8vJHrRm76DQXYQCc6KjRXBuYNxLhCkdCQXtp3DzY1Ls2wwTPemD1v2nmoEDWiW4",
  "key9": "2EMTpB3jeULdP84EgeoDFShx6ENknzdtMPXnBEBh8xwdSFtv6y3PjzUfnVYzWNccGpME1fg9nwcsPQwBCLADuXVH",
  "key10": "3HgGZQ7zZRRxVjp3tbALvSw3ie9SFwXn3eLRwvv3cgk4PUuCh8ZpxMJVNH38ADCJmtNVbDmsbKY4GXkz2NmfrLrb",
  "key11": "2MdB92NvoWNKcxikXLDaipZoWcqcMkBBss8RUFPXFWNWLmwL5PDdmCVbfGwsvnaMygEaRzr7442fizQ7CJn84Guo",
  "key12": "3AkXR7ThXtPkYMZ5AVSoHavF47iWTqh2wrQ45yh7LhADuKCnhsLZ7PzS8oPPoP2sUtnjfkYR7E2aUomqHSfPmYq",
  "key13": "3CKoB73xy6e23EEtQ1Gf9M4fVx3rxbjGppnhAgQFqqavQYGq6nhETToLmm3Z2VrAbN8mUpkuaDWC6jjRa83NeD6H",
  "key14": "2T3cTmb4Q53NCQZwhUWgn148UwP4oocjHmpQDRiyNK9pAmh5Tp6CrGjdneUULRkimDGk5xmkBqiyx561T9Vg2xgr",
  "key15": "2iycGgzj6oFvkE3GB5vpRjghNGNcPWYP7KZiEPpWxkNcC1mfRhFWzMqZfHkRtGXXCveBCsDxgoNuS91ZdY768Xnn",
  "key16": "twJBhMPe2JTXdZDjyRX53sfCrBVEGsyqV9TXwigz2kdai4i8gfpmnFhrqa32nh4n9cTQABsv7mapLTZGYngrR7H",
  "key17": "4er66toVdsDqhPdeWe4bWgK4JNfzn9zdeGYxRKmKtzTQfzpayAAQ14uNrgFxzbh99ZATi7JNuCdC7J8qjtdoNHoM",
  "key18": "5cT2FXQi7kM1od98HSUQSdYSeJeA1Rxa9XSuhjvNTt46RLnM9PTQx8xw8GfKYNJuDu8F6NiY1TXkwYhNpQYYfnT5",
  "key19": "5VXRdGNcnRkftZV34fDTmi2bt827HkNANfhuH8sRH23Un4he9AoGeuNJWAEQHrgaKLDXwi2M7rkX5zWtvsVcdaQ",
  "key20": "DoHJsp6rojGcqXNY5q4eB49L79wwQ9B8kuVGDFNsuAjgECswtQkSMgsQh6RWaFvxaUi2MncNb1F1mpnC3Mx7gYw",
  "key21": "9ZSRe8f1FU7mKDhg6FFrTc5jBwpPmTq22S9qBmHYLQMMyyzTdhjz6VWQQ1PE43qwaSMyAHN3y6zmuhvnqXHUkxs",
  "key22": "5JX9H23f3nQQ3cZKLe2h5h18pbtbzMbS1VEcVY612yhLCwqzaitUZ5yejVLYh5Amv27DsVivBefnKtk4iLngH9xW",
  "key23": "Kt7HR4okQToHZRzrLpZuQvUSLnFMivP8Ls3s27SND6ZPCdMZiJQV1CNZiPhuXxnuqFxB8TmkfCdxijhGoCZ1vZ2",
  "key24": "5ppHrmfpJcpAx6Y7fhPiWi3oBqWUqAjncz4FggZfUJ5orrfTqK754FyEs5iPCKx499KjYRoDYEcaU3VBpJ5Zc5Hb",
  "key25": "dgEBTBjB3ZyiSKX9mjeBUbtCbUjSY5Z3uistUMmtNwdkquCuFgQ7tRL3d5qF7XyxU3iTHdymVuVKQ7dzD2eeXDp",
  "key26": "4s8nJ8NWw6NpLz8eFyp1sAPwa1bQ431DdcpCG3bPLx6v98S2yZTeVNzmZHmqpA4LPQGE2dRPbLLDmsDtoMGT1VJn",
  "key27": "4UMegZmMLeV77UfZ53xg2Rstfbfeo8n5SyMDfpT5WVn5dspXPzV5FQQMEHnxxmnsJsw8BextMK4N7rDbZdggzhiT",
  "key28": "34bwcM1rVR2vHFK3P2tZoHLTPhnAXC6gT11JrF6EK18kdtAwstyDxSQXAYU4ksKXefifmdd21oHLqZVWvJpGnMD5",
  "key29": "5r6riQikM56ms6TcisFE9JftPwU2nhxUcwH4D7W5C4ByMQ1D62vGiy6oTYXw72mw9bQ5pHgq9Pv4qXdShe46vTUr",
  "key30": "3RLGMxPzRLgSrQuwkBnGuKwdWh4pYNsJQteskzEYbs7pbwXdLmhCRnJ3rrPAb2g6mv6upXF41VEu63Uzow9MD8jz",
  "key31": "3PMB5rQe1L18uFCS5Vwdg4bFCUEPHsqdEfT2giB9JhcqfjWvK2TYQVNDNkhxm7QduuT8ALQ2MbMkFDXqN9SDyFUL",
  "key32": "tkBUmR4a1EBc66NK2vAh8JfG4Ku8LDpGQgNP8CHE8F6FyNPBG2kgFtzchPuBVcHnDkqSiVjPHCJhngha11R6jGr"
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
