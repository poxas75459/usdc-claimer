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
    "4wQLKh86LVbcPSVF53Q5ZaHejrpfWT3ooG61uYJGAEti7Th2yJWp8waonG3znQiqmU36tqxLX7BsuiCRfEZLgzHK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kEU8CKDBxQ4i9Aqqwx55ERks3tKZwDgibMqXYCRe9jRpENw8Hrj3YaSM146pwySTuL2WhczDfaXnzZkwm2KTBcQ",
  "key1": "2FiY1cCb7CC14ygo9heRJduUCGmxy68WgZfpBD3VtPJzgAMHfpFHTUjKw76e2gju9vgMQobFyndsqDRPBy1a71wb",
  "key2": "4GHNcJqQVTGU7okix9oi7pNE4VdFiZfBLTt2si8zkLRGuRdvpKsW1TaGxG3yvn1j6BiHuZPi4Qw1QPCqmYoaZUnG",
  "key3": "3XQkpCnfuKS2EzavnRHHx6EDbz1Fo9TNnfJn5TSYWY3y9R2oWWiisGzwFKbXRDJcPfVT7M8Xp2LxoA86dMJawFXq",
  "key4": "56RguFZBrFxjqR6ae8Vf7e7i9NEN4qeC8UKJsnL8AS7Yid7DV8rL59m4YyLPDR1cQ4wT4x6ii13vV7QxW96YEKeh",
  "key5": "3xwqEruDwWjKKQQVkYyifi5futDP4AxSiTkhUCu45mKXUgB8EftKbQEfLrvUZhrdr2nieiNGtN3LQerBDQEpzLfS",
  "key6": "3E4GbhcnK3oQsPgea3chYcWZgXrotLsHmNv39RfWMfgkZa2vXLVqZL2UN7NkqU5FN5w1U2iNStYWqZseBb589foD",
  "key7": "5NUdSwwwWTseX1nuvTHbbXsdk3NcsqtAeu1AuX27sATzse5wmhmdjCYma1XnRyMmzan99Kr6v15Q9Ac1UnFc2czQ",
  "key8": "7xZRmpvr29KEt6nKaCR6N1bNp6VWGF4VLK4XcTZ9XFfqmRUxyAtrnkiaoCy1aYgbvmWxNGE4tgtwndz468kJm2E",
  "key9": "3gF2nWBkGFwXSJUqwRpEohFaYq6v16DCmFnWpYJwVwGVxkjKBFyr9DP1LKcuwqa1t4dcNTHRrVH4HmNU1VVnLXd7",
  "key10": "5qip32x3Lbst95pfKNcq5LsDUf5RKtDwRrcqoFgw3pvn5sPkg5Xcn4fw2UJwjo22ywLe6eeT1BU3ZYtkmYrhXYeZ",
  "key11": "4SjZ8ZBjr3PU8rMPnLVyLcsq8ftuGEYUG3ptUKHXdLr7tdNm1b4QXTjRSFFGb6TXWRtkRWZt45VYo27NCsYeT4G4",
  "key12": "392R1saPE3dUuocut3k687JfN5qCxPwNZC5zLaM1bwZtoacBrBot6ovm8b8iZbBQgMb5NeQnuwgC3droLiJRQkqF",
  "key13": "3EU4N1xDtmwJ2yF7oV3wGGSvsfckuqgySdGkAhNvmWzRkA8rga35zxxhWdH2NJEsSfUEgtvhq4zfUjUfcuuU74eT",
  "key14": "63FL3BbGNQw82HcT868KgacnYvkPVqfHdLfyAgJFZQMbCurQHAhE8E623NPB7HHZq2dcHpVuVSUNZnZzM4oyJQ9A",
  "key15": "24SCtDKJGPKdibrBwD3yRdw7sxhBeZ6KMFRqVvJX2vvXNvm3kYYykHdHGTSoprx31wtW2yiFTQtx3VhkSt5ELVWy",
  "key16": "2gNhBWE7mdPpLqSJRkeGYyoMF716AX1NE3PHqZ5NdwxH5K5Cgizib6n76PRj5iQP1oLWRW4rvGradvG9jPjBRwJp",
  "key17": "XVq7CtJQF5WETWeLgGJS7BYk9gui17yg55uRFYCATxzcH3UqQmUSamWQZMtHHyc2AthWNzgp822tMMLsGsdLUCi",
  "key18": "5VYaSqDBzbhz1MdQ7bpDetd466yqYPFS6tkbfXLR3jDjPwAGCRSii55MFo6SSZ4pCqTMJbKJ6MsczXNpSEMgsKzr",
  "key19": "2ijeCW8SvfVSBqfSmqcz5ArAwpWsW2uaaLH6cSA7uDiDCmD3TTXaEEYL5HoHXCbzsM1sqWbqsvueG8b5kbMHZieu",
  "key20": "4qAeJfq642RWLHNyJyWpwzJCbb6EaHxEkexXv9DS2VvvmcL8i4jtMSgvsDYwYhqaFgcoaoU4SQxnfctXe5bfZcTv",
  "key21": "3xMeTpKTYWzYTkw4imvLWouds5SNdmd6hoSQULnZju8sjpfLkUtUapTuV7oxziKcCwv1dLyEkLTyW6bqWzz5sydt",
  "key22": "379B4PRV51m6HFT4jajSmkVUxED3rwFegoFZ3z18srj3rYYqZ99TF8K3myDuoUEygkevEmKiJrUjfbpZBWCqz228",
  "key23": "47eQABy3EdSgQjaMc1cNjCKcVCDWnFnUGbytrHnP821sX29aWB2ARRwLwgWA8ScNFWXv2rda9WVoyYU8mkeCmzw5",
  "key24": "5usmneMG4JSVfFG923RhRSU9EtqfFbMsKmgdDXq5jg45N2Z2tdwXGjx321gviNKewHB9P2j7SZ6RPnsP9xpHcgnM",
  "key25": "4C9YpVz8EHHjYTuj2h3V9crG2xQpF6mgh8E6ER5XhGMkrkJx7uaCHC4hx7rLH7NWPQfXZGdjcE4JRCFZZxfdrvXL",
  "key26": "4gmVGQZxeuNYvWzZLTRwx4iUDVz4LP6L34DWb9ZNGUTstmtMXCcGj42bxDim58BjhAfS4GZS6K1jkxAhfqewAh3p",
  "key27": "3mPLhMiroVCQTiTxvmxz1nF6x2DLmf6AFsSqdT6wpD9C9zq8SrYjeN5pMmvsftNVxY9sr9mDMdiDq5gzHxJCep5m",
  "key28": "DhU7nFMpswbWzvYHjT2WXkQbr7LhmG6HxcZgwzxTS73HUKcc6W4tKpSeCF7stFvLyzwAQiYRWGi7GCBtNuZv22J",
  "key29": "dZ7DCRG6j1DAQbVyXBj4i2ZfRXUxUdcrDzzQWBphfgBT3iuVG3S6VqSUuqgMsvGZXrbnftisjJhgGVx8qeGfPgC",
  "key30": "3ATAKbmeh7PteQFxZe44pmJ6AK9hqTUBW4hrwRU2MQE9TvaSGp7PmefSnh88JACto5fiiprWKv7z3RVXqA8aczeS",
  "key31": "5ZnEfXrXVpLFQR4wXdcufKm97bdq7U3ckEDayJm7RrSoyP8fNLjKNP5AaESMsXou7Fd7UiNubcfssWG3NnF5NyvK",
  "key32": "4G8Wh8hhnJ3E11YhHVYbveT99JBpTukuhXtCzN8iabuJe8HFZvE4aQU9tcSGHjbRPfdErtNkUtx2aCh7u5st9nhT",
  "key33": "QLitJUnrRUYQhxYge3hVomfUFrjJPG2q158DAc4qdpgq4YaXnvMP9nSQE8G521bi3Tb27m7sNVhhZHNwTWerBMt",
  "key34": "2emY9a1QkbJ5se8k3B9qD7hwtEVc5SzhuAkVJWb1xyapyiCP6PLtYze5H79vuu6xsYjxTdfsiT2WXm5L56cdTx5v",
  "key35": "5Aup3QbotQJmrwHW19Nq4zhxSaKn1oTicUMPcXiUpz6zpdPMhSg4ZWU2h8vk6MW6BgvYotyZQVqcLQeg8t98nJCU",
  "key36": "2qkXszYRhGzv28uX7nU47DiLgmKWoXFhZY3mkmUbavwL9B6148vBJVoX1JP1vmDUvZ1M8NRRrLjTCpqVp92fWu98"
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
