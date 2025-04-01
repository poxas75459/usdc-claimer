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
    "4u3c2b8kSKj81voNvv14q198WsXz7ExQrtdvsf1iY6B7KTkPNgdmtYHQ1WKJr2MFMzgeKubUgPG5YUSiYDH6f9Qi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yVTRPAccA6BxWKKkZFF2JmcnsXxp4b8W28mQqCVu8Ud3cmFLrjDr2RTV57YFvJGWues9bfZCQBfeCP5EyCjnP3Z",
  "key1": "5sP8inW8FnUhcUrgVX8FyvoC3uB5dzpkaSte7mTXjyyJsojX6KayEAayZAVMpPjTL6hypBDoGwoABrgYiXamJKaZ",
  "key2": "AcoyhCVoeYEz6kb5wpvkBuddHCzPMUJs7S2wSMNyrBVVfUz184v4ekxdmYGC4K8xnaLmC4SYnASwNP1rAHzb7EL",
  "key3": "41UZMo8XPspkSnYa3wbP6H9KV8LC3fLCy5AkEHZDEsA7ppG7wrkYziVwPc3uZ8pF9amDoed3SNgifkV7TBtM9VbC",
  "key4": "WYTHSAWRvY7MvsVFvT5hadBFaPgJMYj4Fray3BM18LCR6yinoDMGFfVrW9cUEuaCdor2ET6v2BAHtWF9thbGZRn",
  "key5": "3VbSQNA3FSEpcqc9yfs2WowXnSy8K7Uea68tEPG8XiGc1YMjtVyXBHYNKe17brdQm4v1CvCt6cvwGwKE91NyJgVj",
  "key6": "3NDaV4x3RdF6z3eaWC9mZZhk1GeGFwSMr8ZsnvEJz6FzhWYKLJzNeuHB6jd5wQQNuszXpczvDe8NfjkpnTXN6UHV",
  "key7": "45tAzZuZdSG93dWkRg5MqTukuJyYARj6BitkV7XrNFSSrEisK2EQXdu92z5heBcHFcAbatjR1mydWqXFTQvGEQqH",
  "key8": "5AkRQde6giVKkr3Fbx6qVLCWvujxSsBsf9DvopiAvB5XWzY6Gcp9K7g8iRB85zJbTNPARrERRvjcCB737LghD4Tb",
  "key9": "3DYdK3sA38DzN8KCeX3w8h4g6WGxA8WL3jvHdB4HVmwhnxcviZSWDXdnURtwHnwgDB7udx7eiUarqaKo4ZYjJ4NM",
  "key10": "4KU4S3dGtZMQKBZfW4zuFqXoEnhAk6kMCfeXwwDyBRjwgcqUTD4MB5vmKw4YrbCb4MaXQJL2Nz9paMGTbBw81Dh9",
  "key11": "5T7u5VbkDL7pr1jX7HU5P3QX3UgsWEaYRmiqZnngN1WJKSa9sShnD3DXaafLGLN4ESYbzzYcREyyB5kkBBo9mDV6",
  "key12": "22L21ggQPX7cWToaV7kHUB5w4kbJfvJWMhAigXYvE4DT918pMSGsDAYJV3GVZ5mJGHy13A5Jwp9rZZ9schEegMv3",
  "key13": "BHNjA3x3kWerS2pt4gkqU7opYxXwwaYqQsM6gX37aXMrTGevTxXzTz7E4R5FnCoUMuUsSSRNbH9ikXSVZ4oagX3",
  "key14": "5j2UZ1dhfSUFR93Tdf3LNVHNB9oY3Chu1hPmLdWeK8VG5X1JDvFDfifDfmL2xkyQeCo8Qwx1zKqLWzZYvJLdk8xX",
  "key15": "2osP5kje9Q3XeSHzHd5QjiQaEBijGCas2UYsPMNjJtLYpryET4LdagiN3jfahrhERbGJb1NXTfkyn55qxiAfnZNh",
  "key16": "rExktvRBgnhvGXAhaENpJDfEnHry9yhqpi6NE3q3vVgcaatPpVw5iFwaCF2q7tTa5MQnFvf4J3kdpUjzc29mbEP",
  "key17": "Eu8axM4NPT9ot9K9xrhj8xBNH9KMhU2ADs5cySt4V77guprrZGPKgiJRqxRU73kTa691P7ehXiBtso4BUmYCjeF",
  "key18": "43Qg4EPAuF28tByvaLLpo8N9K6PJwzmoxMkuzxtZoZaVuSDRY9DcMTmD4PDFmdG4Wmq7qo6BXcq1XywPBLsoRDZG",
  "key19": "4qB8SBJkVL6i2eBKaxtmQCReR7EEk91RB3vbwLtR2Q1sgzKN5rVsRsPw9FQ7AY8DR2QNhGZwnicS79TbMo5QYc2F",
  "key20": "4tNkArNwDXtDAJd9HpDfdRteMXoN7YPyCAtvExqXECRKcqCFr6RWHpyzcgsWuopjoCRvZ6UhECPN4wDNGPW7yxFJ",
  "key21": "zLeBtwzDPrejydLpxZMASUZa4mziUHZ45i2mGrCMEafATLxCy1zGJP6W17T71e35TNuvjRzCGbZFwR2xehn16s8",
  "key22": "67bGk5mFF1RUC5bY2qCmW8mE5phZH4UWNR8q1YDJyxCUk4GsLmXyyXgqxeh8FKXchSvbFi6eAi4H5mvDFpKZGwoH",
  "key23": "5KQkQQuxw7ky1v7EHzBVFX2JVY7aBMiRx6rKxc6nBRCW5CxiA3UM3RLL64smLc8xpEhnwGAmSXRvnvaYEPCSinvz",
  "key24": "3UZ96FfHmXAiS4vRd57v7PrGzL9AvGKpfKUkgJgcwbR8sSPK83Hv7j13AhDCF68ki8cJxwAzjwN1r2LJNCxVTXCA",
  "key25": "mTbNyw7XAvWKLJkKjBLbtTpSiiKYzgyXvhPLaYwyvtfvGcZc6nb17frLk6NwRbRHADuiz9HrmDoeyNUrgdQgbfp",
  "key26": "5LhxZHmVfiXpZf4VxBWXqeS1tnqZTWFehEEbdEsFDSk2PuMc23RckEz4LFRQ465i6tQjdwMr1n7o3RKod3Gxar9d"
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
