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
    "3zQw1UsFRt8NcKw1K6CweYKfhMy2ds3oiZQFfejNULMVU4wsVQKaFXfYfgW4P89yyp1xwHGnPT2XXGvs6yVEZxg3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BXb679EPqViyVq1xtp3p9F4d5suUbhRuyYYYCo15X73Ywix8e6Xb2p5MWdFKvhYqr5uiymh7FTTj3ZwzsuJDUwy",
  "key1": "3YVeFB7sBvnBGNKW2aJaEoRDKHV8C4YQHYGb8Dsf9BFqoskUxskif6F922EiYt4BVLUYhmQ5xhd8twE7ZA8dKkdL",
  "key2": "38VvdTHj2CUJCyCZN5ChprzyRMGgc2nVZyyzeePgzHE71EytUwHWAd1Ge54kFNmV2FdGv3NMCzQwWLionzRbhU8f",
  "key3": "27a2gx5Y6WhocJ6VdzasZ6Vy89E37NP3KpR86i6PExt1KzTnYPKvESkR2pJU3W5D1tmFqmnggncJRuSdTBAcr7TG",
  "key4": "3jzR3jrh9nquwcw91ZNAdoimCUVcYLadDmvNJ4FacYZ7HJ29QgDbkvio7VedwUum9zzkKLRYpZVYuqcADN4UWNy5",
  "key5": "3LtTvaKsNiTAZDD7znY4mHgXMLHWmh21JhRjYSChNUjqjwRxBXsXu3PrzGhCNSjTF19J7diMQUHb9wLmMf327wZc",
  "key6": "4JuZiFFAyQ2yZYb9hCJNMM2Wmc9oLE6Kz1Ez59eLiCDehsVHs2tLwpbfER9gTyY6K6XbBrABUXwMbQgDHCpfZjcA",
  "key7": "4yQkM52qoV8yHdSvKrat9VogyEgELoVGNw7VfL9Pvfizq6PB3YxxvrdhFKXdnPJwvGwPKJW8p9bMwv1Asg4MAddu",
  "key8": "44VNX6eM89T9je6jTZJxjm6uNVahfbGxcxFrLbuvkNkQW4w5UmCx66tveX6JcUJLefnkMiBAvgDmQTDZKeGkxsjQ",
  "key9": "1gzaRMR6kuFcEcaHtL5gBxNxAt2SW2CUgPvrgf8bjpMYYYjQiY6NgLVrsYbJ1qsDfHUosWFZXJCfvNr1apAHdJW",
  "key10": "5cikVRcD6ez8Q2dBFqBzh3Tg1qyHsj9ksP7wm6ropxTXZvkKqtskVV6UX2hfRjBVZbDSzAC7VTYKxubytc82KjiM",
  "key11": "tSVhkx46j9ProR81kTn4bBBRYetADxyVmrjZcTrXHGVFDsULkHEa3ho3ZgRV7XWJsBrDNZ3hRTapFYJCWRqU6uH",
  "key12": "KoJUq6m19Xoznwdq6UprBQz12uf89wacUjkAEumoF8y3WpQ9QVtuvbP2QHcVdUhcTiFe2VrbRXjFg2BLexf5WvW",
  "key13": "QTUPpbf9EB56BAW1eQtGn4TaQgYuXiiJNX4yhnezB2h7Jpbnm3fRGAgheCNMDgwo8TuKHbpFoa8dWqdBjhUJ4DN",
  "key14": "5n8RSZerVaCCDgUeUhmAPzm3qP8ipfPeQuXScVxyk1zq99jFpfUuzFsTSVgWMY9bD3kLssjNVzy3eAa5t2jdFG94",
  "key15": "5EJrxx7KyXwoyxxxz2aiQJs8rYwbwRztbi2tu3zX8zYfTQm61eLhVkrLrHs231gcqSGHWmc9mANzpB55rmk8Cj2N",
  "key16": "3iJcs5Sw9GcPkW4bMY2wzqx82uvr19pA7dxZQJXGd8B5Fv93d9sx96CSbV3VKimVcQPE4tip9STvCNFfYvqrmwcz",
  "key17": "3AmZDCfqCXeTyP6snt5uPRX2Df6hoogMeQCHuN9nzeNrqdCqzxSwezcYXFLhv6qgRwN8ZG8rR1hbaZcajTDaX6Y8",
  "key18": "3GRe11d8ZKUpGiXJcHtWWqTpFrG54RHNp2h1BdYtQ1Pyn9QQBLuV9jg4WPwaW9gozwkNjgPMwDobzr3YKsHtPbMb",
  "key19": "2fBpYKRHsFUCN5giu6Lm99c1bq2dxktPFmJaRR2PTHM37HcidxjHkac6NZbEytsLKanKLWVSbSfguREGWFyVTcf1",
  "key20": "2F4er6TgKhveq2vo8kNJGPhhfNxRDZCC9RkJNXVgXH9K2AoqTdmztDpFeLCoGHQXMZgUtHZYsfQLsFjVSJnsVoCo",
  "key21": "wBrxR6o5SKHiKGgFWqBd1xHAzKydSVUfxxXv1JVZy2USccMRruWZHSkAjDdfMFRTFkFGFtjXJtH5uX5v9CsxXow",
  "key22": "5Uopb8haS34b2eGNnTqETCUmQ3PpekcdNB1SmYhKwoxivq8eFeNfCfxfjCspePjz22TMxfKgJQAbDtCoFp3UHm1B",
  "key23": "5hReRL2YXCpgJPkLqSeZx496kwhuAh3WXoMWqXZ6FKoeNNx9D2TM4ovD1KCMToHLatioDdiMnrgBdV6yxKhJffae",
  "key24": "41kNKfVoVGR7dWVKRfkRL7h4DXV6xaZc639XrVq97SGJd1q5SvKgdiEGPH36yvShQxARQ4qVTFguW1H8PT8KE6AZ",
  "key25": "iSCzgwGBA9etjT6SherBDMB2hahAHKuC5mgWu1tt6UVmh6aHzokVtMsN8ppD3bGj8uBm42emLVugEDMtvEDhixj",
  "key26": "2fCPaKqSPESVUWCKxK7YfaVXL84NxL9Ui3McAvuo9RzQ1GuVZS7cqL3eVzpAvhtzw28TKtEXLow2yrtENQEVtcay",
  "key27": "4e8PmUnT81VzDw6VGVDAG1wrStxeK4uuML627ExzUx5xuSXRXysMj7xP8cAw484VKLoK5x6rQZP1341qzBxKmGSX",
  "key28": "uHiV3RqTPxYyKDS2h8tUDxikvhtsLbU2fG3v4uVw5UK4UPpr15Z5ADxH5PHUYoy559MLrX3Ht9Uk8bCgBsM1yeR",
  "key29": "3AyTERW2hVUZsTHx4Xerwo5YwnogBm5ySYMa1VcA2T3DCX9ydYh8qNrCy26pNTUFmoY1hdgnmkWbCXNQ1HviPGET",
  "key30": "55SruFUKHqFm3p4zwXE7rentCaGpHevVPANwEVPM2xTwzxD2NDtpDEd6LJEY7dukVrg7QxqHs2yCpQtSRWhbAG4A",
  "key31": "4wGBySyb2eAfggkdsUzVN5at8Xu7HPrM3dnDMG18pVMZN7KTGVNPYtaR5dyxddJfTTV9AN24yGFusDQmKZZkVNWh",
  "key32": "35uN2Q8uLFeU4PmYFj37tPKgf2kT7wC9G6AMDnNiDEMznWt6tXGToinz5UQwo51m8FRjMcBXG3vz4uMTGpsD9c1K",
  "key33": "fezNCLrjS4ZBAkQ4V1x1NK7oxGV4jvKu7HR1YFJM6KVpU2Fin4AhjEsWhoTBvA1SYjDZWVd2Rx3v5URqYQym2pn",
  "key34": "5mYT6zWhsS2Aibh5d8AahEebgceCJ2wGJxTCACEiJXXvCkPPU4hRdaYqxgcWoVGaS7Yq95JJN1bchvPrg9dC4YLm",
  "key35": "n4Fbin1arZmfq6jFVvEUG9SuPwiQw9P4tfLRn8FZz5spG1ZHLmyE55nxpyCLpDRDMmaTRQbtt6nVA8BVYhXqqvZ",
  "key36": "5W3sBDLoNPF9yZ9jjMooecGDLUvyDtuUoVcGT3AQ3UMnc658jvw8mzYxV2j1ot4c6TfgAw9YER6hjYx5rotEx1ZW",
  "key37": "4TqGwNeg8jwRdEdHQu234iqFS7v1uUSJEXavtn8huvQ8xZJaqvtfuSsGZvSrywFpDDbTgYG9UcC1LoaBZQJaRieN",
  "key38": "2Q283bgw7v8SSgJSFbqeoSVHQUETLzWfviA1ZrBz26gHViNSUYkXR2y5GbmFvgaMiQpwfAAnHZCES3bqa7PwJJYm",
  "key39": "3ttsm87gqGaptC5qwPD27AzufD5upchmoFTYVnzFyfgwgFaUMAJsXhRL1hv1ouEeM77yHG6usGocousQwyZYmisr"
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
