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
    "uWEwHvhZq8nnvprb5L87ASuyCifK4HcRLxWSSu5Y8iquYJ96e6HsjuY4NuR5mRcDKJsWaawVhoEAbHxKJFWPk33"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KmqoHjhhU3TBJwP9kHvpti3x5qW764yv1D2GFUBb44aFLT8EX8ahkEAP5iHVdts5GAwCiCrx5MrUUkKteFLR8jB",
  "key1": "YQNmtyd37Z3cDZgox2sKJFRNpSCCR3vnbaLAmGJkB933SVK8MsApDkoRjYxzNBffFLJ8PyRfb1p4cvetQm62NxC",
  "key2": "58vvqoCtdL86yXh1gHdCJ6GuSeCTvqM57DBDY7bk9opiCfrszCS9Z21Jdures99jaD3fSmcxKpdiKJ1xEhovjTbo",
  "key3": "5gSTKf7YdWfmZPewtAiX8pg9NAFiGdmn2GmLdRYVtziwmFKD2q2SS3SpLRKAbVoBp6TwNwXrBqbNfd63vYbPWyJw",
  "key4": "1CZPQ1UHgJ2v7P7wRDXV9Vd9w5e2vfjc1fCnjXocaB1NAyyKdi6ESsTsmVt9sd87UQWCMx1D3TtrHtRzSMrG3iw",
  "key5": "44p5SStwoh41qCjrbYdhkoipK4c5idvpxGt7qNskRuu3YoBdRggbukBrGnjZNHdCwDuZwRCuWW9VoHdMDbzLAw52",
  "key6": "3S8xiWWJgFtdU48EQmoWioh8eYgtG8dYkZne2svaQ91iyWngdPgpuU6AouivMsk8JBdUjvcEg4rSmVUVw9DvrFwL",
  "key7": "5TF8Vykcwdma3NwaeT7KpZJGacRmn5w6eKwbwANzBHhGZ4Eukqnh7Y5ixt3oyYjB3kPqBZvDqNFcNM1E3SLf4LPx",
  "key8": "35prBL1hpwKifDpsSWcFrM1Gg69DLUyhEBj6jKxTcnV18HfE8kenjWLbvyGQs5HRA61qEXpm9xjreDjWDRGR4kJc",
  "key9": "ZDHssSRF6YCvSKrTrAyzGBpRBAwX7rbpHdJ4VZNqQqjbg76SSm9J6ZS7KwQU1WddNv8ERxMB4WGHwHWa64UNXyi",
  "key10": "42fqoti4ZLZyrcSagX2Yr5fCu7rr4PnwSaoEW7ZDxKQi51xQATCKs6MMsdGdDG7uC5iqR6qs4MNrP2Kwkbdj2CQa",
  "key11": "3NQ34sPsh5FEJc9VAVnU3vA6Q159KgUkoxzFMY3epPQfmift2kwQQ3qBQi8SBoC9F8yNng3rh7bmrx7uwi1Zt2CL",
  "key12": "241VfhMiqLUQHh9FRqojDHovVHwrGAv2HnKwPPpjMEZEcwghXNTKBoXm7kGEi4XQRJzvtbYtgoMztVYhLDrb1BsL",
  "key13": "5b8gZ7VCfk8NPuMtwz8SVQWgxYiaVeNtheGhwrhst7y1Pb7X4BxJZXtHeUN5QwUx9GbGPjr1pxGMuLPA6G8txdNw",
  "key14": "4vNEjFrfeFgV9TkFKJZZysX6rpmAMj7H6W4ymdX6BCQHEXQZLLhM9XMukjZNbDjbHPUQ8XwnMGbABTvv9bbA2shm",
  "key15": "2ytNhnFDHfXHKmkaYpFK8VZUgoTprESwEsi4wUPGGXBygEhthh7R2JVgsBDzSWnyFzdAk85qUYBwkrRXHCvzVdjn",
  "key16": "5Hv8o2cPevzgYiEoEHvqSQ4xU3VpsDa8oqGWuiwMPptfQFdxDNnScCzWa18cNz298MVypidYjA8SHWqSbWDntsZK",
  "key17": "VBQSxtvBRsBe28GtDWK1vp5CK3267A4HFvCgwjnoH7LcVhJt1PJFBtQ3Q1UeJbUcUh94qXo8bEruBUYhH7q4c9P",
  "key18": "4tLaKU55KAyYb558Ws66awubcXsPCB1HxmUF4123HakWkTkiSAYByq5Mq5neQ96nx3HJpcBFbjXmtSFn9vowYri1",
  "key19": "2ZHExn6vDPZ1sWQExE6oydaYYD2UHbfNnDfbLneppGxpz3pfiF3gABVqNYMP5WBoKgLov2xFqc7MR7sJ5FawwRJg",
  "key20": "5nMYtZm3Zve75Xw4zKNAsRw4D49rgGb4yPM9P8zt2ACVd3QbeCAPR9TuoU4nx5YRF9YaS9EPNh9cZSXTbLnkuG2c",
  "key21": "3JwdKmBgqVAehANcNe2Y4eqAFVDffFAfe4NzQS29zMyokAuegtf2n5A6MTRmUd11ZDkyQX32t7ctHEzUaTTVy3Db",
  "key22": "2LRJn2QeQnqopXFpGdKU7djprn5ar9yqhL2XQg8Asvpukq2rxYtC1YSUk6R97rUkZ4RQ1wXESTdsrVMNbCDsA4Bb",
  "key23": "4G8aqWKvBDnuQfDmymb2DRqHRDukxgkuKLoJPShrdP7Qo2dHUsC99U3PvJRx1DoDvPFMgS9Ud9RXaUP89ZJcwK59",
  "key24": "2nrFFebZy1fcS68K436UdWdheVPmcmqUQEhQJR1iNabA9NipfYFi1EtfTBvYaLuKVPJVB2pRR5w7sTLZqUcrpCW4",
  "key25": "FVWE1mtjwSwd7LG796cFutNe5nGcf4PMniF11uFkmoXrLvkHTWyiuWEwXLSAHkZf8kibLAMBcqioeTLpApChbpx",
  "key26": "2RuX4BqTs8GMqPj4PPSS4gT7HNJGEGiywtvJgrz9cx2x9uzPd6WhttHqooNbfxGKDkBicsk3eJFh3PaguvhscEAP",
  "key27": "ECyNxzu2jj7WiEwqWtr2i1BRYhxk4Lb1HUaqGMbLpUdFnpSJzRXb4Q5N7Bu9RyT2c826yXDdzpAu3qdKY6nUsiv",
  "key28": "26HJZvYqP5MhiP2dM5nPPeBc4Vfk823tcHFZCSP7kp539HymwbXXL3grBEDonGWUy5AanUDeSkwFHnkpkv3ThAU4",
  "key29": "2vw3qXpfo5jVziFQDNaYw9qNEsUEX9VTHLLAT9JdFQ1DgR2RXduYxGAj6BxqsqR6dWzcPyvnU9fB17KEK4AY7NdN",
  "key30": "4k8FkbYnqCtgShkh23RiXQqEauLUUxKcqavA2AiVtkW5dFsCdWpvWBe37CVeqYE1RdbftRzWPEScABubFRW1Gnf4",
  "key31": "5bfVFTGBDNNGrhKP9Fu1af5ysm1YxMvwE8PquqhiTE3SQ8usfccd9PDWGH57ncZYVHr1mMj1tEbyKXVa9x57wKku",
  "key32": "3rnHNFwxyoXdg65rx9BWZidfq5VYiLGnGpq6dcGp6JJkGSwZJZQ2Tj1BXBngghWqsgd3U3h9vsdvZGacyiyC3uJC"
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
