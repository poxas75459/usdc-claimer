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
    "4WLL2UPrYmLEW6WJRT2zaCinDFQ9aEcmkANLw6iDyvPv15wB8x4q9rjo7vMNnY92B9Ldp2wHe6nNGLgZkA3zXcq2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wLN77DgzCw1mddSmaDHQHQgcwRjna8Y7dLc2hvggpLZU8Ymn7MApmMmu972eKZZYED5aEUYvjW3TRDnLEnS84hM",
  "key1": "2hxo1hnD6csiwkmhbFRg1WJCHXr4gwNDoyXQ2AcVTVbitKGpHeMyduUpiXDJ6uiB143wdP1xxaSYcsc8XQuAizMJ",
  "key2": "3A2LGzJ4ug57f7v3CZcZvKicDELt4aLdo8uFYjieYMtL6LUPQrFmtB4Bux9jwNYW4JSF9nRAh8ZofkxNErbaqBK2",
  "key3": "5Y2nSPVq4uRi4YZ9KN6hAvjJKKjvXRbYvaaxt3x9KrptwhysVzn4PisRdneAXKA5s9Lkd9nbtSQGAjjCzWqwMcct",
  "key4": "21BJVFRX1W5ExQtoLUF25ZDTuUFZgbh4qpn3XsSoj5fBuEVe6ijnRCg4GCmF3WsiyQnjuN6NRKi5V6X5SuSNZm3z",
  "key5": "5bt7o7VTFEdrzsXxzv1DsZmQD1ULV7HPtzmYbbcsNov7kJXpiH1zZisu2qM4FEZSgz41eHUgEFhQNn4g1pS7L2aX",
  "key6": "4JrTszYhy2kVsUD23ACJpavUkgT3NJazwqMefUVF1yu5fW6kFoHJNDgLfyRox2FoCo4sUe7tkLEAtkrcavAyiLY8",
  "key7": "2aE5Zakrg7H3H2XALV5i77wZoa6wwGUWutFfkxQHNFumuE5JDUEThzp1RZ8gwqESUCf79FBkXTgKtYtiRjNHjr2m",
  "key8": "5D3YCreCQo8M7Xss2ViWHSuHsKJzYaWkWjNX5ZHZQcftSa45NbCjnuYnuctVc4m1D7zR4Qo1dNdbsBTL2bT68qRr",
  "key9": "5M3pZeb44GAeVC41VKxnjtjUxSsxXFKxttXTDth9S6YGJPs4fxrVd5fWiUtH2vzbeGKpwxcp7mkNAYNxYthzxbUz",
  "key10": "2UErXdGYngenDngJ7Uyc7stwcx8vE7zuo1pWBjWydWQXtXBQXAAbi1Ku3Q5NuiFwpqtRXS8yxFHYrxoNaGNMqEqq",
  "key11": "2HCsZfoPjDCc9Beuxxak8e3vMqPerVU5o1t1Xds1GcTs3gTd7PtkyMTQYmkWTfEibu9KpqZcTtmfJXcE6zjHoc4j",
  "key12": "2fZZFGMjdttEXLciD4PDDEaa3fkXn1Mm1XZHZsSJLKoEE5EZ9W8gJvcoK28J2ozDarsiTPgLtCVsCaJkfGVC9KL5",
  "key13": "2BhuQkQVZqs7uEQCp3GATmGMiZHAenCTSHbQEmJDH4S1rSe1sbTYv46s8hmCmrqj2xnCn53AcehpJbEEd4cYvbJ3",
  "key14": "5Fzk9qgUzzqsuSSRME3UhDC1kdJ7LauVtx2eoV5EGKa4N1aH3zBsh7pSfxrpzr7aW8zBif1rTsGcQX85MdYbnVmB",
  "key15": "5oDt5BV9SESbv796KPkXkefevsa3u3nCiuFdPn8a3FP2UNTZtTjAA1n2skdcAeHFFTs44cbrGAz5qJPgKr4h1Wwk",
  "key16": "hX3MpiR8TYo7huw5QYvTHLJQBotdZbHNSjYorhxwCcKqberLidmaX3eS9h71FziywUC6XVyiv8A5DdDwHWcx7Rc",
  "key17": "4vtrkYqLRA65ruCz4yrPTpo9gtJX6w3FKerqvErr6wQ6wy4GY4kyQa5ggdnBYDCa5kKgQjx173fB24WKkAthdpki",
  "key18": "3f6ZwkaeKURsSHvzJh8uNAQLqxQARPoxRcnSe84P7DeJ8sF6mTiDrhp4VpRQrneXcpeds4tCNPqt7RwfoxJdGeHR",
  "key19": "5D4iA9gsaQM1ShHtTpqSpTJQsRkCnenMLti2HCaVD6cfzarmVxeXEEDmDnMRwvmJBxvXzj88yMxUC4AKM4mZ8bjX",
  "key20": "4v6ovNpiTRzrCmujJqdAEkEJ5y7rJoKeiMLRirGhLito3vUVBmd7MzkJg16c22sEJ5x29eoV5nzeReyxQsZYJi37",
  "key21": "yrU5Ct3LHQPfwStuh3TNDCiAjBcdPR8eopQ5PcaZy18gCYcXeq1tn91awSQ5tsDwHPt7RgAkZ1tB663JZLpLKnb",
  "key22": "5zjCfCR4Yzu9Tnzcpq47vmzPPLGFJNLuSR1rtyaCrgykZzpE3xS1FD3X2XTemy9i54z5geHm1pPi8v9NZ1eU8LnG",
  "key23": "5CToq5t1f226vAqZp39pGfN53Rkx4CBRp1k1R1FnFVkadNzXYRNNy2rvjytT6ebDoksyeKMPWPTpcBQy2Zdi8A6c",
  "key24": "2zGyQJFf9WbYPicdo9MhMFMELgZ3uoBBz4L5qB6uSLYe5WvRALuGVo1Xa6fKEbaGY3w2JQL2rThnvBtQS7xRt1Qa",
  "key25": "3jzzUb5c6cjL1Wa64dEKX2qhZ4q8RhemuePgRdr3HT1d9hPQ9vZSHXLBRuqkcX8hCgQ4z3b4sypARx3DGdtJWeJ2"
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
