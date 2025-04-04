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
    "3dEVQbJtgPdcSYV536GybQ33o2sPEWrcWS1tc6Wcw138E9dEFnZ75LpUawvkmEVn8Nqq1ayHfEHRNra9fApcTkdy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cobGcA8s2edP9eoBFGUVYXTEgQuzY5jef2GbriTd8qn6kXLLkWrb8f7VtUgLT8mUnauEamAdTecgZQExsTwF2gL",
  "key1": "3ZYimpoM1PpU1kMJwfUPMxmPGPfT5AAJHEgxm8n5UTM2k8bLCEj4E26wJ9SHtUuTT68zBop9LcNZZ41j9SAuKAEP",
  "key2": "2Y3n1ftW8n2uLprjve5HLrS6qMjdoh82xsrZmBwefttLMqtzQT5drxSCBVk3xSUgFLX6gpGnYXJmfBrzd1E6SQ58",
  "key3": "2ThnaobUL7qPLcWi2PwXepeWUcFsKSJUi72kqcDBPiDghbrgHXv2wTEyFHNE1eWZuJEyauu1BWVzKuWhVJ3B4dWB",
  "key4": "Ej1w5QDxMhb5UPJcY2qQS4BowFHnTFWkCzUkckDMLDzzFhWfXkipbfBnafAMpSYUYJDQc4RWoDj2TuQWaSrMVrv",
  "key5": "4VCbLXkjiJD9wjy4nY2a28k4jBoJ6HzeAMPZaUutBR9RRz9MaDt2nsGBgjuAxCjn8DehMVLoz2bAf6xg7fFjBL3m",
  "key6": "5mURdGd5onnJpM2sXajtuRatA6HSukhhmWj6srBctq8cVBUGXVKdryCgDto616NEACnTkpkgsh3DgXwERHfHyaSS",
  "key7": "47Npcsh1T51zE9rkdMJJRW5hUXD5vGYfdw5hr3G6QsXm4Y2RzTTMrbfgsFp1iobeTWuks5ydj97tgJEFs38LBAv9",
  "key8": "2kBmuNFbxPus2mr7NNntL7QDzuajSAZg7kWgYhFzrML3dZQ2V57XdZPcWJhsdaHmZxyLokiN25SWgZJG2b4UH6vS",
  "key9": "63yhZGYic5EoUUA12HwXv4mes9T2o86rNpyeJ3QTDGWpVbig3LVFE5LY4oGAMCJV4kL5qyq3HuwYXLMsCcez3daD",
  "key10": "5eYrogVNuPZauBRvjh1go6wgEEwx8H7NkGUGsoxkUZRES8CoAKDfZFPzhBjWerqv92pFn91HAcgxSH3ufx1JWaok",
  "key11": "Xe6WqkGqx4nF4Zyzm7vvTGcjVnBmiLZCRoCZKavNvNi7QRjbWEwQUVnSD82se8HXUL1PecWa8rjZyHBhzV8rCg1",
  "key12": "3FpBakH8N2yLb6Bkq6A8H9EeFkRyDtWJY6tN7V2zULWVtqBAUXsnCKqULqcbqfbUvfMbgxJgJ2rZ8QShmXBJSfpx",
  "key13": "5ASsY8oBYbKPfVJnhU3e92AdPAXwZ3gbQLGFEkwLc9fBEsdnSaCVHPAJj5Gsr9uza8DNyHon9fnBYQaoVn2DuQv1",
  "key14": "4YaRsw1C4tKEVpPkiMnRZPhrZhYYXLCQFZpY2eYH3akYxjgUrhYVPzeLmy38RNqTDdHP5DhdSXHsy92hta3BwtUz",
  "key15": "f56PE1DPc9bDKdSD4S1H5ox6ug3psFqxBrXM6sKpTyCo1ZXM8WaGAnc1HQ9jB1nd7DN1WMmhVWwsZB6z45nXdnR",
  "key16": "4ZxAnxumrYoviYg1a4F5CgVuK1TPyUaz7n7WwPSp5JhFy832v48Ci7R4RQdaXjQfiMpKaLCbMYt4xFvwdZgn6DpP",
  "key17": "3SaqM6JST6ji8WbMkF2jr7wXBXz12Nf9c7BdsbPaEz81AVbhZbttWrBs84gHUVee8wYW2jBxHWr7Q8nLuuwhuZV5",
  "key18": "4GcXfL8vu2BveF3Gwwmukqudz5cjjVbxJagbKJTczQdFNHAHFNYzMhPerZV8F7Q6FYzKsaa1fSMWEoiq7G57Swmd",
  "key19": "4q8VLT7UKW7YxLKsiMviPbtrravRP364zTrT87aAxoCvmtxK3aSxTVKeJKKrxt9kQdeNeuXENhPd4z5odaadT3bU",
  "key20": "2jMFnJYWzkUieF7LTiuNbvVaAg1oCRvtJTLmzkwaYy1CgAym9FSJxdRVPUpbhYd9J5JuY9PYES875LWLJPsPXsr5",
  "key21": "29Nx3ToCGAoLCdk3qVJqk6oWBejX1S63RKyj6N1iw7DwUht5AtqvL8174MGkJccNKh413wci5mgcuuczGC8nA925",
  "key22": "3biPjfMpCQF2LT2SmWmQWjZzcxEGwtPhmgzYME6vF8cXm8ay6rQ43duRScn8SJ75NUvFWBbfJEtNqQg6kqshT2GT",
  "key23": "3K6wjaSabkvArgaguL9Ld4VhCkH5N1sh9iNEL7cLRUAPdMuXwnGV5JDcL7qMERMKnacAsBHPSJJ6brrNCUCYs68h",
  "key24": "3MFQWxSTkzYHZSQtE1maTkEKnJUVRTYzVt5vLgMZuiXnjeRjYmvMvCXFxqxardeYzC66viVKMBd483yvgW1mn1aU",
  "key25": "4B2wCxVg5FfryDVDghChSTyyYwWZaL8KFM5tqqArXoPLEDzZUCcw6LkAPh6rR2m3Dd6JEeiDJCrwaXahYm1voVC8"
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
