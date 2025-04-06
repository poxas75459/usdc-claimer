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
    "3uthynZNT2m7g76ZrcaAmPwsJHexpDYA5JWQFVguDg7y4umbH5WcYD3TtA5yngVH4FtW8A1UwBs4Sib9YHrTjYHA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wUu2yJWZsAF94eh3UVkucfSfYG9pLRPSdgyfwMgX9LTc5f8F4tBdmoQ3pPdQGkmUSdzUJ4HrowSc66xMvsEentM",
  "key1": "2M7t9YewNXwqJpcs5vFHV86WqZ3phy6DtfbW4Udf7oKmDPpr32jWRnZ3c5JGQYsmwMn16ztbj2wZHxC6GeaJSNb5",
  "key2": "2kiN51GZKBedpb3kg49TupMYJnNGj3QrANiN3eFdYv4Sd7FNs9i45U1vLKF3xnKC45W8kj9DcUrL5QcADRVa2sYo",
  "key3": "5hFreCHekypgi8pbBAkr2zjXh6GkjpFhHYkWqvGguAbqnjSwvGsGYHaLZivhK8aPVo3LovgjrRg8rPZK4bEd14Gr",
  "key4": "54iRWJqtD2NNmfoDtLxxurkvfmoYmDmFygu44tb5pBvLvUQgV91pieqyRDwoQbrR8N5jv62JqvPHJ8USdZbZYuru",
  "key5": "4gmXvkoSxCrXoa6Hr8ELTS9EjvrBm5edHBuaF4zeTCPSwhDwxFN7JB86xvRDjsNpsNAh7w5XmbqXWoSAwpYPMaKk",
  "key6": "29uGP8g7nQTDAhgLhAYmkbfuS1bih8jT3stLVyVxQamPA66WmCp2tp9Rw7Xkctrckgg6KWjMLUGJuRvxCtnejakz",
  "key7": "25gsKb2TyqgBeYP1MN6ykbWJgUQVV2SDygMWyqScb2tbTvpkeyHcBQkdyfy6PPXBDc8MLTosSR1YHJCPQDRtFUvM",
  "key8": "JQQBGUw35BitrqqGfLb92dwHvz7dNYAW3df7ahxJehd5CAZpfDwsxgu7kYDFmv8stWu9WUTiina9YShSioKcVdi",
  "key9": "bD7T2ULeiRG3zA4siom5xum3R7HHcDaKz6pv1sEZQpvd7Y4tnBTahdPhY325RKzb4Crqbq4xQsvp62vtpGitA5A",
  "key10": "4ZZgzvvQGRK7qFN2XY19qgxZmkgDbhwf7o27thzZmzdHJvihyh62taUAHvkGZTHi1TNW2N2mStoCy64Co4KugZ9s",
  "key11": "4W4LiiLeey8Ddb76MteGUm9ivoUQ5hr4mcKEHurFKZYGt585MDapedPsv9P8BcpB4JQ7betShaFPkUqHohsuxsBb",
  "key12": "2gVV1gMVmidTjsbnSU1sgjiahfb56C7Vn8qEHeANE8puhbxN8fdaxBUecQBf9E46385ZuXZGsu2SLKGxpNvCQzbV",
  "key13": "46HVknrjnoQozbHabzy8b2pXvfhBNjGQAs49ABm1HscNZ4aEja3k4cEXPiX4PBkQMXdrAASe9BhBxa3NJw7naPt4",
  "key14": "2RuqanKxuaivxB9RHAT14WQUnZSH6LzrvEPJGwAAng8bKN8RKbTBPh3XHJFyfbMZiBycRoc1q3ptMYMnP28Tx2hy",
  "key15": "512YF19Zd7WiK2M4RnUud3kbUEhaSfBKG1YGjwoaqGzTdkpR4zi3R9TV6ybMTaxjHDNpvAUqucF4hxQMCoqrNkoa",
  "key16": "4kFZS1Xr8yq6wAMmXUur6ezXGa4W28jvbBumbWXhi2mPjrmkvoX9tbFxZZg8KHQcX2SS9AcpiWPVCPouqyjguGsx",
  "key17": "3hbMqVuSPDkxCCbjTWqn9QSuZJ3FFZDFTTT5rbFnGcxtmLKLDhzGAbkiZNGeFpX8xtZejk1KPvyqf9SjQiTJzYbq",
  "key18": "4vVtGL3DjTFMpPeXhueJ3dGA5cPru9BWRUnsingJHvhuvskau3gTRZgHJjN2Y9LYeEz5UWzA2G8cxQyGrMWECUkt",
  "key19": "5ktkciN9kozTCje8J4pexUyhvF3G2x8ghwRmCDfCoAn8oY3m7o7FKtcBkLnvooJbwo18g5N8xtVTqhuemB8zBP4Z",
  "key20": "3B2sqcddHstrnSFUu5diGt2tRxwcYdeaxKhY86NVf4XuibRmWtigRCKa2odpJ8aHfe8XEB44AhH3tKKvJyNtjtCn",
  "key21": "24XtnbC1ASpaduPaDtwpmFT3acYBfEQ6t1rPj4EVs8Q23mV7xynWXJYH7G7AmapJubHEjWhYNzXTHS1Da5tzRbA4",
  "key22": "uMDhqoaDNxSk1pdmav417jPeG5ncPx6dSeDbQz9dYSzYevchJEaQJMxviRDu5EtEycSrSKpqcUVJKxnBcJocPy8",
  "key23": "4GSjkAxbiqY9iF3B4UG86QY4QhQDmVSWZe1EY1YPK4fdG5PEsod1r8a8b3saHgScfmk5gcNt16gJuLv4iZXrjvsV",
  "key24": "4wbk2rrZT4p1Yn88pKaucjbUxKCiN8AHXHokrwNQJhDDh9RKiMc2AvHVhfBVe6MSzToxrxAPwvwRhCFaMNwtNL26",
  "key25": "2o2SKqjUz1goGQy7PC1VURp8siyevfzdcaLdYEeei9ZdGLNeFjxRSnWveDAYTBKKrqDfiWX7PfTtzEMXCxeSqM1s",
  "key26": "5vPxUrAQPvis9pszrhwwNPNgk3jKv8sLd4F1UJuXw8knnRij4BLEGWq7hzP5aiS7FtG3N1RUTfrbSJvMz3QDjQbw",
  "key27": "5vsbDgXZi5LNy8a1MzuWdsMrrCuW82SF527kH7GDKQrT7ijbB72wPm4NawnGCNpWzqNFrHJiTYDFjJErhGYs4Q9b",
  "key28": "2MPYHU3PxZcitbMhrC3TkVQAcnuqxgW7aCDSQhdpojeNBVpiEWYKHg4xfo1ZgH7KsyuM8LuLdnuJBX5RBgbzzgiS",
  "key29": "2sijC2YR3P6ALaZ6csNjFNnwKQUzJMWKd9q9wvdfBaTJ5GZ5bEKJ3jRj5hKXM53zsJ7bJgVz7e8tQnwQ91G5ZN6r",
  "key30": "5qQRJNwGuY8EgZteCRcdjL2pDxeHcMmMm8GT9onPLfYQpfJJhvTvxSvKZDdhW55ZgEEpTvRMZx5jmyFN4No98yV1",
  "key31": "kZEndSvWrSV64QNhXm9hdZ6TbSyFnWmz7b3BYVQQJYsGHLFTHbB41fnT6eo3oaeTFrrREWkkmLKfYURrDS4vN1j",
  "key32": "MNufSgvsS5XRDg1cmoYXVZS9XSAxZLdWM5Jnwy6CXoGqsFdS8d7F15vwbB361jRUrcM7Uey6tuHn8yMbWVMN4c9",
  "key33": "58vD49s5SKn9rmKgfpMMumbsYa82bsjN3XCEu6dDTD9TMeeWeQCarUUGNcoPdx6Jb922dM4Fy3KrqfERxhRm725T"
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
