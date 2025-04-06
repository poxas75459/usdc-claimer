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
    "43R3UWucUnCL1yVey11GPkPrQnzQArFpRE93zJqSaNVacuqRjusQ66q2jmorFG9ab4JLinT9Tamy3UMiLuiTAXsi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59hmVmSeFfk6o6sF4NBPE6etoGGdRSEJkHTdaaVwMFotkM8ZkCrBGDC1dJtvwKQv75NuJPYnRKk2ztT2UWasEq1V",
  "key1": "3KwCsXa7bEi3JxdfJwmA7bfCn2jNjpMAKErWhMF3ZNuyppTTczpXieg1uQcDbPc8bNqrrn7YLaXnLpY8FrcX931N",
  "key2": "3Lxp1DzG2tDenWyKVSUTm8ZUQ2BkMGzd9RFekb3VajW57dXrfdvQWDwqFDyKW8B1GJgqamfQnqQwjTrgPc7njesq",
  "key3": "EjqanUH6VDSNjNTinN6NFCVaAW2d6o6w8CSraUkFKoRy8fjEArhayGvfgi6fNdDx7Uk3ropBrouGA81p9Wg4CZi",
  "key4": "NWx8G6wK9tw4JCwkVDJNQsQjf1sj8Mbd5WWMAUUXphiSDHCk5aAo3DeKvhVBDQu3nkAdKPZZNjvB99bSuE6Gk2Z",
  "key5": "4VGwT8Qj2Dyjyp5NbRciydTUFaG1qAc8bbntUPbb6QuxD858zjGvAvbZtTWH6LAQbVzUEoVwkrLfW197PD9gzh1R",
  "key6": "3bKmTD2PidziBTQWmXQ69k2p91E5jVBXQLqwTYQEGXo4kCiVMFYstUYpkf32C4empM7jdUevWZsaqH78e1qrdzTx",
  "key7": "5PJkf8TU3P9RGP8KZpXR6oCHht6o4cENryH9GHUdc99LhsniS3F5VBqZmWpfTsoasgpvAJ8TvXV6T18aq4pXN8iu",
  "key8": "5P4cpg41FzHhuUtRsLogFw99WwYgkKws4MgeAxg3tJiuzTZET6yDWxix84Y4cPhj4LV1w9LzUJA2fdqXNf9xGPh5",
  "key9": "3guQnkoGmvLUBnyGG8E9CQYamrp8p5T5ouib2PgRfrsNwvNqkHFYRa67bneGNb9fEkKcoh1gQSRHdtq1RCZbQpxB",
  "key10": "5LEhhvbWzDumnU5TZiEHmQRXMUnTnZhLNj4ZKwxwoXUcXpqD8NJ4dn5dcF7oK33J6fmo5UQe5VhDwLyhuVEgayTe",
  "key11": "4duLzpsgcBnH1dWMFqKVKQv9Eswgi2LxzWSRYrZKLKsJ1CpGgtUZ5C7JKHaQPuLHGnd8ejRmhHjfh9G7QVRKJDpw",
  "key12": "2En963PHm2agtsCRERsDY7oVDtvHdzqM4Sy8JbwpWq4Y3ouYzrfkFu26swUmDXrEsB2wjUfLVYZ2Hp9TLXmRqtjL",
  "key13": "5qXsSLBLFkHAxZbLnjz4qHy1LBsbwwgbodqyftSQhfuFDijxi4H2FTDUPaw8uEB9Lzch13PHcgkBYNhyt7ySYZ3A",
  "key14": "teKSdZymUohpLCCLudAA1pXdKof9Af5aFwrz5DRAzLkkxYLPuJokVTYUHAsShJvzfBDjyPFLBku9GcFzn5FuTJM",
  "key15": "3VRUFoNRdwZWE2XVAgMc4zB5R6FF18JmRLtxqWjEnsUpHe2K3FV4jBfBN9uBbg8gtUvARdS9t7R3zzYBdF2h5euK",
  "key16": "28gaoHRxnio8R2JAWgkLqecDaUfzBH3L2CWoLBb4ZLky5ADpVTnsYGQMTmeCC6qExQC9X7ekWPjFeQxN414yfTYD",
  "key17": "45myEkSweH1QYz52pccpFGfqSMR6trv5XMCFJFdua8TXXUXoaAHe1RngXsEWNzS427WAAft7JGoATYqJr9brAr59",
  "key18": "dN8eCkuWVhND9HaHpt11V421pXpHWMzpUN2EfGb9j7pQSgMVfy7E795mGmkVK7vqVN3wPKP8m1tBN5NMU3RTgkM",
  "key19": "3X2QxUgmWaBeNU7XEhRBFvAvymrCzxmpaWC7tN3XVA3GCw9YuBaUENSbk9Juaiy88Mkcco9Hf3evZSm1Hgnhk51R",
  "key20": "3KNgsRxUo71XY7UdcQkmjL7qeHnh4DxDZqQoaD8SncZFg1f9y9smtvixHFMRbK43uwtKzwVPB6SHAYLKZX62LHgY",
  "key21": "2UqjQT9F5jEH8AEnJscWRiv9Ubo3PjjEKm2KnYTuigcJaR7RB15a4Ub9ErLxxTxWWbZh9Mvfbh4sezb2wLdWPkL9",
  "key22": "3hkCVGqPfeK1eTyahT9AR9XkSef9VvAFUpAvtaQEV69MPBQ4fckASWSbfiXGzCJ8DufCaVgJxqaVgQittocnmFG2",
  "key23": "jgCG1gTHmidpdDSunqbzC9kL1zmpG9shojAEC75neqpCWtVz8ptsXKeDY5ecMKHybcLKWc4pBY5xu2tAccgKYVA",
  "key24": "2wJHD5uu1bk5mnMSoevufgrY5wTJM3ZAwH4uaoUGoLRtvvdf6faiA1rhJnX1K7Q6KB1S5gkvJ1EbGNngdkvrDFuq",
  "key25": "2sMYCMWpBQMnp78SzutKvvy5JMWWYsJiFHbk5V9GDEsss5xjpdSajyA4tTL1kRpUodz3BWNb5JSwsNoFRAYaeMEm",
  "key26": "3sscC7cfZQWb5bgd6LKxKpkwRzMPvQ5hecuCD7kvT7jKPowawB8LvMFma5fXk8E2idDAt1GKBcCGdsRk1PK9QaHu",
  "key27": "S4rnscA1aVozwZ745euRgntRKpQkVEWfhE9rYgTFmM2xFSqcNgJ8roy4gUmH2KzwRYcxyuWkqffH54MF7LDWdoh",
  "key28": "3YgD8xH776gLMXfi3y5LQyaZFf8FZzyLynZtRG8uWX19DLo88eR587xxT2fTiXa7bPtB9vB566wQH17dH5Ek3qWR",
  "key29": "nTYS2tzKqYtSc1QTTuu3RwH38Afwm13GNFwcmWU49Up3rZBbrMwQZTwcSFHn9mqVkxAketuSk91qXHTgeYFv9zt",
  "key30": "668GyZWa9G9jboCZnYn6i4BH8UvbnnRhgyFsz6VMSMpRbYsGzoU8Uk6jdJDiHKgZxup6qDLvJAFMFFHwmDxemCrT",
  "key31": "5oxCDVDj9KZfRHpTwQEvnwouiVM2PfqRhNfVg4sx5qbapUifG9JpkrPRR6dvkJjuBobsCAd7Tk4Ju1p9XTfLeGR7",
  "key32": "4bJp5khx5Pfy4gywM8XXENA1KEPzazwDX6d6oqzPM4841Fwcs8aMD91vGoY5ERyQdkb6QSKwjFYw1Xm2ycbG4Eny",
  "key33": "4fQjqWwyBjum3PyaMEmxCHNKTo4A39sXvb7gqxRY6zwtv5bJa12xs6yLZzyk3QQxA8839pfqh3j219PLhBLVvLpi",
  "key34": "wiRFb5Wjy7D9pg32MJte7a115ggSZzgWJwAaashetT9NsGnBuS69WbUKwFcBEtRXKgq4o363jpdtbSViPVr7ANZ",
  "key35": "57kRjsBtaMGPhcsuterskQBSeY7WKwgwWqY6fiJguzgqwccHH2mLvYHw7vbpPkNgsWVzQcgqEu7CLppkHHg5hR6e",
  "key36": "3gMNm4KfVTDopMx4WDt7GqYn5h2vJMRP7riH86ziqL5b7HfYmv1HmRC9kKWhYFBVoXAxR6YQEju6fwA4bKWEsMsz",
  "key37": "KhX1dQsraP5YUh3RUDcxRr1KrpNd4u4yojBw6e2n5MHeroGswVyvpC5qjLdo7D4SWHa6Kt8a9vG6MWpdUvmU7MN",
  "key38": "5yht1A4KkktBZ15vs76Lq9VqWVenpbda6ypXjQSFmHu3zRPZQLErxq7H1GUHSPP6PvxYFFTgirBsTfNZ8TWTrRfx",
  "key39": "5PsoHfGjRLvve13NckpSWjC8rEVbJxfoHyCpQoVJKraXtTtdhqYuda519UmL3nQqwST18S8rfC2zXN4ho9azw5hS",
  "key40": "2S764V73ppKpYWjLQr6MFUxdYqnytdLhxLeeumhs7zjH4tw14GdfvXvdgFsP35ZxTxYZRzQhLTJt4ifLudswCYCZ",
  "key41": "5ySz93QSZmuWB4FTWGqPneFyqeBkSe1td5ZxjwFHVDLW8t3Qx3wVFPsAincQGdrTJuq1kP3ZBbLdPSrpDCTYr1bx",
  "key42": "4vEfJ6ZnLom5dQKxhsaG5SNgQ8HssdpE6TyFegZ1g3DgGu7Sott9W4akfLMSp2A4rT5f41ggVM6b4dMyeLNkqm2S"
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
