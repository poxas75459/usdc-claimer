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
    "4ejhf4qN46fGw1PRnetQhS8B1vuU43gd1yW1E9TNPQa6kLRdCYoGkDVH66LAzWDiKyzkoh5eKjyrFRBJQb7w2Hon"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sN8r7FYhJu1a5PiSPRYvK2TbYoEcYAUtGQ5XWG4n3rmD3EYZiNHpYBg3xeKzxDmNGia6bi6eRF7wrDn5BAbhiVa",
  "key1": "4GRhVD975kKv3fM94WZ7XJNU5WjU4QST8YYzc85Smt6yT8kJo1imtPpu3553KXb4BJaBb6D35Gxs2eR77S9WN5mN",
  "key2": "2pShgBtLUwcrBSuQSiw6YjgJqsQj9Y9S6vA1GtZeD3HATd7MYBo6AjVTpMgDX7QTDnin9UEtnjruT2kFbfJAHfqm",
  "key3": "4yh6YVAa4MQS7AeKzifrqCPGQ47zANma5LxX92Z6EeFF33u5nskbcw7Gn8PV9Fa1BfapUkCNJq8pcKg1nJKMtS7d",
  "key4": "dqYfv7LSCmoe3eqrPndUT5mwawwsw3gte4YbFMhYmWzDBW6NZaZ6byPdhtZP2GiT8MnDqwUJP7fk6CBZywKxf32",
  "key5": "dDH4uj3npGLWe54AJbtSPqxz5MbAwWhm4JLD62wE2QfpDBMxDZYGkThrbP1W5iPojdft5dbdPLVt7RRHJvMNZJ4",
  "key6": "3akbZSD3yW7pmGXv8bYqH1xXzCtDyuRJF4Rw1XbS8td1zH5VhZzXmGXPW4SyE1TBKfvmvXMEXZVvumiyTPwarHa",
  "key7": "2j98n8vPihD7jLJxunfB8cZXZYTx3gQeR4cuL7TFddZDDdNiHRxSjezBBx2wNPLPt8BwNddSHZs8od5sEXbf3HyZ",
  "key8": "5XgtHvQBHRWuR1hjmdFUQmYC3Wr2gzLf57CRt8XyasPbbUHv3uRxghyb1kWqGQnRS4zSEfMKW5LEsieBY98jCua8",
  "key9": "vHyUqXPcyBEqFLHERrCNVJxYGi3eX1bgwkyjSe5Rg1KyDr8AhjCF4QtMeN1niMPoVWHwCAG7Wwywxw2MWtDSoGN",
  "key10": "4oSzwD5gkyK1ohBicKnY1nKWddTuZbCpMSQ5R91c6nr8vY5uNBkihm7oHrBkmhix5rNAzm843o2Ut8hvwcEeDrAd",
  "key11": "SKoneNjPomZBRzZHbbKn48yrQjSKhC2tVWE89QtrW5KtffAtdNErDaqahJvcnWM2nE3gtKFuW7UdPCdQ3CRQoLG",
  "key12": "33P6b9S1raBinCE6kxMrxozdhGd4itCmhiUFD3Ar3jJqnhwXwCCa7Rcovd4GoUe1DW3K7dYP6WuDV3vTZyfdEXNf",
  "key13": "3jWsSwvqawP9Faf4hFYPLSAoaZbrT28jJMLVokfdmQfY4VN7XaQLzVFFs1hBKuoG8FrMLEGkArN3LuGTvjS7keJW",
  "key14": "3GjqYXoUwxnLrHtV5SikxQwxj6KLLdB6pwMnhFQv7Eb2hZzz6ErgHiL3H3xCBom4k9RrTX39j9zs9BDfW9o6CysG",
  "key15": "dUtrYCZgRhgLCMzcMYoyEhxMYougF48eD9Lg9KL3AwqHpUXmdHCqA5QiLgYHv2MgWtxNYUgV45BTCqPbt1MEUNC",
  "key16": "3TxSzNjDfz9pSk469sQ7w49N8eobfBBKSWrh6JnfhPsBKgxh9TRLJ5hurbnF4pACwYKNh28xa3BYzZEULCatCuPT",
  "key17": "rDgHRws9pQLBz9jgK9GfdP4NDEWwDPuchz3z7bnxCfBZNe9D8VRv3wuphPeiFn3KD2httytjEL5NpF46rUcKSe2",
  "key18": "3fabx4sGGjPXqNNnk1eSq7z6J32cu6CJkvQtct8ZqvBKXfvftsvegWTcSah5mEvjq5EnnAJ5BwpD9qkr9wtRUFFv",
  "key19": "3BBNn2pQJjE1VZRPK735sVEEGjBxYxoCu3t6W9nYrFPxq5znfNK4RQ17oBYHW9XQ2jSuQHTFg3oPgNz3zaTjpy1U",
  "key20": "5NzaS8cNwx97iqwSorMe5q2H333kfJ5nXSRsPoYMftCkKx4HXJCLiPZNYSbFwyquhc9oJ9GGwdgsbMNXPxB6Wg42",
  "key21": "M8yumnzNoMpwqPVBApbcsW51bFMoJcsNfwMYSLQv528twHkTeaJv4qaGZ8aGuoNCDq6nH4Psh3tHvC5GzxBdGzc",
  "key22": "3eVX3WPuPMmahmeEpNrQAPrkxRExxVsjkVheRHMHbvoZ82sg3hMv6cretGtvaY3TRiedmWiWEKCnwWZzKRzqEK1T",
  "key23": "5c8RWrA9zjXN6e8jqE9r8MKJDa8soBkjGXYSTUTeFp7SA42s7rxroGqtjTS6YZQLMBg1mnS3PfpFyU8UNi9RpRcy",
  "key24": "3Euj1kL6jdKvZGHa6fnqFGkGZxUt3puBvcny9wrfBMbUAqSotdkm3B6NuM4cNmiJ6WY8jjPGiHyEQnf2KMm2dB15",
  "key25": "za4ngRe3sQmpx83PWejioHRLjDrU3w8CtZW8qEQermizNBRYYY2kjbhhs6WDcJgxj6tBgfQr93WsueGQ3qNcipb"
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
