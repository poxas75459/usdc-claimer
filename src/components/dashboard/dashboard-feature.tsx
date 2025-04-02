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
    "5JLXwM8wFHwT94igvT5yWaPJqLimZEpJ7joVXxcBX3En6imTdq2eu1cGXfAep941J4BwrUXVajWz44YfGMztsFjR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zmqTKK8t4TSnPRiFYqv8quKdP6AXc7p9tdYNTBg9yqcFoFR4HC6FGX9qYKYmRV5podz9ttdDKmUhRkrHZWRJnLK",
  "key1": "5SGQa4fKRHVXE44rvZKxz5jcaH763zgmFUxmmoTaUPcrFfSeToThfEntvhPawyKb8fqp8JBvKTa6eK3PhCEtn75V",
  "key2": "3Kwunwp8ZvLrgXKU56dUYAZrFUhqRJmqznywfRs1WePRiWP5fpwHrviKeqfYnNx7xMnahgueexSeJ1f4gVBA3JaB",
  "key3": "nDYyMYy5FQXb52VEerSGPQfEr9Wztgh4eyXTeB8FAuk7ts7wp786n86S7S9foyxaPqg57dZv7bJzH2tTwHSqqfg",
  "key4": "4AJ2yAUG1V1meDcT631km6ysnrqQXWrL8nUZHVqnRjxSkDJzEC66D3rfSDBUA1vkVLL2mECxQD7c4pMnaVTnr2Am",
  "key5": "4V3FPerP3qy7wYVZ16txVA11m3ujFoA5hNM8Kwh8AMBpA44p1ZBT8aQSPvaVRseN62JFWDcwabjNULW2TGQXfkr9",
  "key6": "28gx24ams88oMEjRTKs9y2tzq3G8N1Qgs96amE1EsKWFo32bbuJu7ngPkZjg9TDZVVGmVjr9jMXicV1L2uuN2492",
  "key7": "41FxaPxgTbExSV6waFFPAorrEaEsDjtSeMmjSy1dkVi4WCjZ54H1KhzfJSf3wyE8scky6BwV8G7riSRFvDAwqDUr",
  "key8": "3cWePchRVyFfB54cXb17Waa1896FYEjTQ6mQoNyWcQ3NPHKxCMWXKhgADUGZArSbFY4Akg1jK5bL1M6W7SHmYW1Q",
  "key9": "B99YyaGtaYfQEroKMSf3mMDq5RU5DukZRMY3JLmTBXXPsEMwHbWjE8QESq9X6uaE8abfRUEPYurD5jxbgFypdmj",
  "key10": "2QkoPr4sfYyMYhZFYSd6XedFL9j8C2MzxkEDcZmHMDnTfmtGdLProh5XA63ByHotFdhvPtSaHeDXiPitjyYeiNLU",
  "key11": "YLZb9dCV3HEuoWQRwt9ZfzhYrzKHVyN8h6j6m7vx78ER2TZNjk8vyC8Uun2W4WriVCwEZ7AmaYAP1gKYwQNwL8P",
  "key12": "5Rm5kJRBbD6quWQffwMnyn3eLQgDJ7ZK2JF65Yh3YUdqng6vf6dWrLQB4XoK2Wy3f481Gsb91HpLvoTeKh7ScRWb",
  "key13": "5CgifyKrKZFsJn4xJRmLhh86BGBxyEuzAguTJ8MMTk82xoexGAq5Eh8366PnURrLufgApfYr4poXVxTFWoRedWYu",
  "key14": "3nwZ3gPBF9XK3AUCEc7ujMTYj1RfFUVaP9xroKiHXT9HSLmXUTQA8rxThvChMeuXuLsMWg3zr5VvnexPQd1hondt",
  "key15": "4qF1SL73t1XrjeXtdypeDUFazeTRfriy5aLUkJRkn7XrUv133PaW1HmgpR5txDXSfhDFxCaETagc741o12mp7Gbs",
  "key16": "2mcEqqMhCDtvBMuQqpHAN57gixAUhgbmz2qJJGdzReJW1zFw8SdVBeUbscpMCAYmK8a1HdnnYaHyes1ik4W2fDmR",
  "key17": "2cHr3o5V3uHGWFr9x4Tp8bGLG2gehFr3jvMqy2ekjVBfirqS48jbNFQmm5FAHre6BWKg8z2AQzQAjAYNU7qGq6d1",
  "key18": "48yxmeYBtXZvjNvtTLs9FaQRiCrci6aoxYUSTvsMhL8NLX1a9dSLro3sckXGLn8QQf29J8T289TyjHRXSuGEWLh6",
  "key19": "3YCZHvKkeyofsTRmhWhRWuAtVZvSp19FNhKGEWA9X5aomsQxSvUei1BG5QMtuxhp2mZuNwfgyBAxCxARyvagVizW",
  "key20": "Z4iS376YcQPgDvfa3QXrPK3m3cpHzXUAcyC5Kcw3bREGpwfrYEwmcFKdmZcuKNsURX7RQ7LXG6iQey7AfEkEywA",
  "key21": "4AGHnY9GD9F9pN3HLWGrvwzdYUC2RrtgUeJfyMn7HLQGyzFRQg9t17MyKrhxqw8RrLX8SYyShoAxeABTDGHLDE82",
  "key22": "5kkfKjELDiP4SQ48e7bUruCvpeoGVj1xTaLFj3kHBjTftUsJEJYrmbUboWcwJHZqTc34cUkupfDmkBMzW8UTBVvC",
  "key23": "3UmSnMFV2go6SA1uHbhdfxT8Ta3Ti7fPrQkmJo3FDN8eiQxAo5uAms6vDw8bz3nH8WEmebxc9HVVV7APca31kMA4",
  "key24": "bNcCadPjhcybQSkrkjzBn8rRPThMdGwhNwGDZEmfrVC8a3bW9HiuKCPxPNaKP7PeenvGXz8TJckxBSTU9Jtixy3",
  "key25": "3gzqco3Z6vmt1s6rCLKcjobqKDxUBJBbjUESpy5Kv9Pk2LEKqyhMynBM9r7iZ6ns1zv37ujcT6HowkcP4BQuZNSS",
  "key26": "5XdCdhebXKzCeLaHBMoU7AjFMDP9rbAwdnr4ozJ6f1WWTjQgyg9ssJqAXzTuC9peM8FTBgQa4Cqj2Xme5bPGU5yo",
  "key27": "57CZu1PyfJ52rj4AKX5QyYMJFGzT3D61s7s2YNkAa92U7dJpXj3XfXiE5Mf8WcbCNqPc45CrCAwfhGV8XDBioc8H"
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
