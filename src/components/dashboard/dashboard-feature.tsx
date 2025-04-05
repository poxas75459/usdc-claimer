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
    "2hR2Tp9qtP8dNjBsNVs8hRAfw7bKqCVnFHpbxnGmNTYbeufr2VcHBsczm8W6mfTGcAunRw3CwkAwWwhLyAwzXG4T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "296XkGmdfLUKvGGg4vMi765jSnY7cMspn4rMGEHSud2bu8jJcGnJSqGj7UhjCJb49SqBUb74dNUwvQEUf36Ee2Da",
  "key1": "4hxgC7b4WTXrrCUuRKKLouNMvgvTbajmpZNSVQUyPG77vhA7YaGBqwCVqF2v4mjKqQK9y4ogTpTjCDLoa36qUovo",
  "key2": "4PL9UHYCQoJYbFHPjuicPx8up9GxPuak9BHnNNhtVuLvNA3S99F3NexR2BunVfdppNJjLydWqexSdsHvDJzidVFd",
  "key3": "3RwL1xBwPTYmidJSDzhduxBgNkT8U724SJcaLmUmFQwBnKRELWrttWdZMSWKe11t552Mkbjac1FXbVgGGCUmdYhc",
  "key4": "61MxprjYjMDNnZSo34vwdUSiagE35ZWb6fP6vonioCn9WCN473rxU89DTx5R15k6Pe4w1qzSKXywsMNqiWJHTWKK",
  "key5": "5Wafuj1EjwBUwFL8fcbE5FF2QwpfB66DRm6bSPqCsC1GEfG8Fg7DefrVB5p7n71DG2CVvaemmzxFdNZTfWQTwf4J",
  "key6": "3QJEiLrHcBfFahSfvghTxGg4hJ4xwUsx8ioRJguXrQG444AwRaTojtLsGSUBGgMj5n4WLM5X1jKzsyZq8U5iif6z",
  "key7": "23MxGkrhWFQJSo2UUAFXsczUvg7gQDXWQDmQgsqgpTrGw1XMX29u4G7P56dedz42tyU7TZ1tBa6Dkb6AYHRWSEjY",
  "key8": "5SLDcvZeEgwbkvWRF3vdsJFFuHJjiqjRxBtMRsbY6f41J8G1V5A9eRZDzJVEEYkj2ss2sCAHsTZve4Qoabx4wHxo",
  "key9": "5swrC9qX2qyNgxgNh5tuX8nNnWtNGbmXTmsYTiXAp5Tnp8odQjC82V7URehFxqxumoMDR3qJCepbi16XNEL7uiev",
  "key10": "4cm7vpCLfoA7QgELMFxDTEtwhMmDJYAVpBPMTktk98oNekhJUJ2Ws4gxvqgi3Cbsvy3N3u8SKyEHSX1MpvFZAiqJ",
  "key11": "455h6Ro6UNoadVUeYviEamftdLTP8erzRPTyQgjPwVQjukNSqbwSkvsjtft4faqFVDXdH4A3jZiYf5U5NVxsf5ny",
  "key12": "3eWf66fqnYkLKiNd1ABKjJ1u5h8h6yw7wAeMXRzTdgqnKPDcnH4StY4NERWTSEWBWc613jpjgKfkERAbJ438zw1w",
  "key13": "2uyiv33U5vxaLxmCeTreAAhfQ9VDxuvbhJM6HU8sAput73Yq7CirPoUEEYZBd9oBnqUfabZzukDZCVi3UER7jnG7",
  "key14": "2PdVCbE3bYVgY4ZjbX2xWibYKpcQmGjjBdfaKXv2hV5AG6xMpDwJzP94xgazASVA31Ywe6goY1ZoybyjfN2tGLqo",
  "key15": "2m8dafWVVwdUTnR2YnJUksc8VF4yG5fLRGLbMbNnQexbugUKa5jWhcgXJZQgm1eeqZQWQa8ubdE6MoDJ9zJeGds2",
  "key16": "489pJYcdbtpSg7v7CHdmt1S3NvmxuQh36CD24qa63onU3z7ggVV5JeLUTjEsgfGRaNjyyK5YEphoqR3dTt1hQWHq",
  "key17": "67KUrfVx8YGmqqs4esagDcFmabBo1r5rcEtBUfMg34bgx3fMSYUwBJaEZoX56i7EgzXxKyxJyzDLphJNQmnQoLSY",
  "key18": "51YuCbPrgMhwinDsr75Vwp1SpSqLLon4bgK2jS2Q3fxoN1kJJinPK455XbMEv3wAWpVxtAXKv55cU4vM2iaK2RHa",
  "key19": "3zMU2E5AwwBsC2at4CrY5qWNjMHjTikwvgtUsmSodppQMZB5Ed5WH8ZC26NTF4xygApunQ4stTUwm8y8bYa1sSuu",
  "key20": "3Z9gbfsSuzTV2S3bDuZNv9p1NWaJ4okMvDmmtHoEQRTJkMwCGJ6FGXNC3M2QqeSgLMTjgXHmS5k7dGUxHiyBipRk",
  "key21": "2MPKafv1ZSecBuDiwauTzrCsLin6wT88Xb2X84NqHuZfKnBFXbJ4HzMSKDpiMjWByTtBB9bqowqr3PJioZEnuPNf",
  "key22": "32swKdMt5pufK445T8ud6ByC2AJGRecjiCaZGZC2U3TdVmf7DwEfZg4qxmVEAKjHjQAGR4G6tmeVWhj65eMnVjYb",
  "key23": "57H2Jp9e3C5fcmyuaYut6Y2eqiKXg1vxiv5FdhFJCFmN2xLVGrH6m2RrmGYh85JH1ZFmhKQ4Jppd7aGGDtP81iss",
  "key24": "5expqibRgrofe4YgjkSmA7xjJNaWQ1Rs1gotHvWvUBeJ5ogjT23HWewi78WmEehWxw3WDKxv626GFHMCQcJAh17a"
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
