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
    "5bTHKsEGdq6gJZhWa19e5QJbdukeNeFC9PtJ2gxmfPf86C4pYtu5fH8WJ3A3eigxhxH1KbAovTkoVtGP1Dhao7ay"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Aem64dMnFdyyVeJHvEPLUL11ekssNwQ1WyhDh4SzmB3rQQzRdAMG1iJ9QxQFJXoYZ7ZLWEnQe4SMiwFvaWqAWgf",
  "key1": "4ndW4rbakiru3TYd17LW9ghpYdXueQSEbBm3Sx8NRrAqgNTfkVLEpjrvBqHfrt2hJeuK8yuyXk9CjvAzEWuvbEYu",
  "key2": "4WPdutacStu1cGX1oN5qNzMxgzHHtaUhbt2wVdsjb1hbty7HeoDEWqmfTm2n3qHKMDsT9pW5A9rDdrTifjZPDuQP",
  "key3": "XFwmtVY8oFrZdrfqT47QJuR2TCmue4LgSFVKpmofaRiyUxSAMx1dUsDwuXSt7bEgvgCimGFRXja6SSixFXyvepy",
  "key4": "jNaaa9HKERxBGmMuRCYSs17hP2d7fd9MzCcaVGJPgBDTFbdVqDnf3cwHQfPFuKjbKVkWHgPmvzp7WWBTGb41Rfr",
  "key5": "LPBnx1VTWUaitu6x8En4ULDZpfQfu1RTwdniEvc9XceqxfoD3rskDgHbRMZoDvRmD9qfJGXt8ES1YkZdk5bMf4S",
  "key6": "3sutswafa67XBwiGnihvd1Ao96LprZabQ5mP5QrJervWSBgRTYpu9hmPuUtZpHbbqGQszTryv5FLS8WpdRue8sUM",
  "key7": "5oojoXkG8fE5TAn4MNthPMVx4fBDE8tpp9qzqTyGUpxFJi5hVdzrH5zR9ngad9ebT7GUC3aA2vfQnn2oyTfbYfpC",
  "key8": "2aPQWw2neFZVN8sicGFX8Y4LCsf8BmipRhEMLd3YUFHjbXLVZq1SqNa2YePsTpMDVgtkZWvYDXphRkzX6g6kLFJP",
  "key9": "2VRJrQyLoGLyL4ZSCUGms1a3EfBGgBsLT9939cUPujNFZ6xxn3gbT5d4s5Dp2YGyxPCnp8GMo1P5e86SZKG5WVF9",
  "key10": "51TDjYY8NV38uzG1NybJsTShEVnZTTcQyVaAxL9uE9k1bFq2bBFZNCEhFZowiJRAVpNssXTo4pk63rM2kaWuMF9F",
  "key11": "4H767y5AFqHpqEAxPEvSxo4EzdaKALmxjF5zYKFPhXq2ozZezByQJQB6MNLQpmXXrUNU2FaY8oWWXbh8UnVUMnA8",
  "key12": "5pVQ8pqPYTXNBzUKrBxfb33wQWLGc8ZTUiP6rTD6y5dC8tc691BXCW57b3mmogjcL5z3D6QJFvbVRQLw4vKQtVJS",
  "key13": "2SvVQNp1uup4DsoCtPa4XCG74YGLptNfzJJRfA6wazB2SXnid4mA9Y5h8P3us5sjKgoj6qGbuzFS2okYU9S6ETUG",
  "key14": "2LtcFSuymxHksrzAbzMaJmEvCn3fEA2tKQeVFHVxaNrNfGHmFZ2RaycMzKFEDkHJondVEpqXzuBzpL6KBXsAovBj",
  "key15": "UHeETcNxgBeKtsnxFLt4TAuSKb1SuAWPj3tKPq3fUFFvWh2Rshj8ug7pKG4Xuh93pekAjMuEPbohznRq5bs6ZNZ",
  "key16": "4d7mL1ijjnCo115cuFmMCpbB7fv3sPSNTuJXe4bX5MHuMRfzUrsYGmuAYaLdfVmJG8xbi8w3KkLWbVjgJBzVVwmf",
  "key17": "5AipDhuGdL9ZMKLLAD5uPr4tjkKt9tWyZdbEdzwYQHUnKibooJZVXpZQk4EH5C7sWpXxr4R61ogVKb9ZCnNQjX37",
  "key18": "33QAsaN2qAjjYbbq7N9UczALzNHpjUN1wZZQHmfJKxM7SyKKS9fxjGDyszLCjaniF9LuNGEroHZ9Wts5PJLNyFqc",
  "key19": "46HLoVsTwNGUcQirwMpciwAXWYE3aP9BhXzb9KJYLS6qGuLyTrVfkb2N3yZivnnfD5qJo79xcd4tLXqxZ8Y3gLXV",
  "key20": "4Wbx6K9qqMBogZu2BmFcF9ofSfa5uRT61cmNwtUWLfFMhw84ZcBStpD8cJLVrVuaHvv3rUuuThGQWPp4UreazYc5",
  "key21": "G8j8ukn1yDjJ94eMPm8hWm9U67CPDbXiexx2ksrNSRALKzfSwn8XSWcTTub5uMUW3EdLXFF8vkE3qMUhgH5MDqd",
  "key22": "QvjGTWdjBaLwgeMG2JMZM7Vz6p3bB6h1RGkW9rgFj27iGKv3yK9ekmuqMwwGk7AXQLcpyJUZLLtDyaW2hk2Fi2M",
  "key23": "51jBPYzTqZzywzAgjzADKg41osjKe9cvSADs4ghNn89dtfH8meiaJdGaN8ZYuww8kBDFPevqSAEtEznDJ8QJdV1z",
  "key24": "2qHdJ6UfgSzQzNvGhWdtGFS8saQwTmaMJ811xvLRAuf739jfR7qktmrB9CUrKZdbMEvFqy5J3R7UCY9okCfsEyQo",
  "key25": "2dfpcRMDjC5K5erUto1teLLSr3y5hggUpT2AAKhNRngMet8oUmyA9wrdWvEoii1PSzdgEHgxThrJJd31eSEWmCS7",
  "key26": "3U3vytquCRbdiEeUSNxoGvFf1SXfdrRZzyrGdvXcJJmaXqT5yfj5cihySzRTF3Sym1Tre6N46L57sJaLrgvjDo2y",
  "key27": "R4SGEdCGGYR6dGmyGfKrwgs9GGp2wkzif54nNYpCWp76cSspshR7YHMtC7tJ2NYg2jyoGty6xdagxQY4iVLBgYj",
  "key28": "5FsRm7Abm2LzyTq6SCaPUA4GABh35DTFrGTtHrzSybbgwQoncFV6aLV1p9i2GEZTn2DnxGpvWVxEBSyH4WRqWSFL",
  "key29": "5mbsJQm2qsmFCSdtaTuWHUC9qEKdiP1Sd8Roeoji6ppVsWAukCxiZdMkrKJtNc62NSpbwocfxFRQrNBxXFhQ9goY",
  "key30": "2fbCEnmHMUc7hDwfhphByXTnb7xNJHxEC4vFDM5jM2GPs1BLJJFHf3Hg1Rw6nZitn8Ub2z6F6jCk85rggvps4Taf",
  "key31": "3HYFnuheQoncrkYPevAU1wt7jCkzutYkgMchYcNey1aWw3xJTtAoxaHWE1UbD7pJVwyu38GjVLhCfA5DMbubTbnL",
  "key32": "5dYu38FVGyMmgmVwNHfprQi4NV866Rickh9j3EuE26BPn4Dfec16ug4yh13mN3tnGPZEMRnRDhHWf59Ua6j76z3b"
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
