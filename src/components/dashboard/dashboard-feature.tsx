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
    "4Ck1Pvk8wP3BZ1D2tR7wkCAVwos35nWZTejcmaiByKJAvaspLt8wCLHZDrdQCD3YDkQkREAk9VKqxgYmWYqi4DgH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tdEfujaroXkNePdQwnF7r6nsSnrg2wh2hUHAxThJdafqjKRhxhsrMaX7SYDGVeP5rVC8Z7shtPwqbWoiQhuuM7c",
  "key1": "4JWkrpFW2EfrPEHWDGVJ3CxJQrGvLgtcLsJLKeDR69ApmiBoQC68gm31vQ6MpfPKRSWQqVKBuhx7RNhTu8GdkB2",
  "key2": "5y2nxGZS5L84ix1gasG5qvqoAP1ejNGoNy7FPQ358tDyouBheTKZS5JRNYQWsGMXSr9BaWUTL71A4jF91DetSyjm",
  "key3": "5gjwfczpQffkkBnWhVDFyBhmfUePuxenY2apPfquQ5Vbk4H2YtTUAHa7Uic181fMAMwKKUyT72AU9CbXrQWqDQGa",
  "key4": "5AY4YBiRkBEeUW9Tx8EqhsPSqedckBXywTpByvzxgLb16Nm8fakAXeso11GJ6pzzD9MT3oR2g123By728CaCnxbu",
  "key5": "5FuoERqojCupwUf85HaxnfWkDVZUw8KALyxAXEBpqG3C5CVj5gDfwTqKV76BiWHXfbyB47THqzQtx838ZrSy82MC",
  "key6": "4AKNG3aQoAaJB1nRMbsZGJ1Y9N75VDnaj9DXJuehMUv1YQ4zoq5sQy2D6Ev5HKQUk7z3z1GYfSSgq4uq6dVpWwtK",
  "key7": "2BjPS1eTPq5uEmR2c6TG5EVp4FHTSfEpVMjiB22cVgpoJCYyTXjjsXLsQd1oXJhvFKVKnyTUyZkdUzgH4HuTsmBx",
  "key8": "JDSTuR1DmBHw2Ys8D6YHUw6sBYgfEL4zqqWkjo9uxUcDxq2WmN5wG462rBJvjRa4BG7aXiishW78tJ4315Uz3dz",
  "key9": "4AaiYTrhLNT3HTE4boG1tPYaB6xUqMaJgMV5mowFp1uA7y1QaLLJdE3RkyVVGQvAPknpcAdZ8wNxzTUHaykRg9n3",
  "key10": "eW9HsixFJZ2cPSTP5oj8N6YRDZqdRrAeBroQYjh5SvgnYndM4GRr8ER8TABHyrnX7CwsA1UPtPMBrLCMGzbH7yv",
  "key11": "2ru4MG89s7FcreLqJYYJ2ALr1JRrd38ojp4r8Lmn2ZGpjjs5jPXMWtTaXruxzFHSSZzMAr2Q9Prg95sK52uKRTTS",
  "key12": "4D4aFjL8p3rGyDt61bRYW6iKENE92zTXW3wJ1Bn6VjMTVy8VKh9XM8fnBci7bSnQ13x94FDLyuupRxcJiEPGatM1",
  "key13": "4r2UDJwBCNfj2nQozSja8qmTBpTm1p8y2ZKLvufDPbzgGMtQ3o18dE257KoVJfVvmLg9YsXcHVnrWcACChX8v2qc",
  "key14": "2bgan229geW2xgyqaEMgq8ejkyACQHDbNXbqRwPMTRcZ5cUWC7RNeXP3iXtRNrgnJEnkrPpezo53NmbPqjZTqP4K",
  "key15": "4Hgi7Pdg2mFbg8JVvRnZLq9RvA4StKSACQkReGmNWza2yXmehRLiK1XrSyuwfPRiiCWL66oYUuDnRjSyLd46jfUF",
  "key16": "52F9x3L92JcjAoujFskE7d3HubQgm9MxHMythsTZg7XQTzqstU1qZKzA4tchJwqJK3WgDMDAWP6GzrVNTqZWQqrw",
  "key17": "3o41agEt6qKRGPPyEaGA5QM26Wpc4uBYZHMePgCVqai6K95css1q4D92NajLgyLa2obxEkYTwHievZx9SsDLZAg3",
  "key18": "4ANL3EYwNijSw24WG1YCwVgjPxLYR6gUjYwZ1NKfM9mwUHQx17JFKppW9JBBnxFhAC98utXDuXsHs1y46ouNTwp7",
  "key19": "4qAwV5MdurMz5o37ktZ1kSxABSQyCPjrabXgs1kVG5qvP4xda6jE9YviE9xogc2DqRHwFPstvtNSuGqrD4YbXZ4V",
  "key20": "491VLWSTCmwWS3G35Lyvupr6wATNyGpjjmGtbDZVhA6dG53vSLadd8NYWaSzwcH5kaZawS5GQbMMSFgVqWjRe88a",
  "key21": "3K7MwAu7iH9gfLisvHyB8xTsrZijBrp9eeucVfpHWjXre1R9UiXJk7kfnWioFRorFaV8aRDBwTS7JxJDYgYKFFH8",
  "key22": "QiUfJ6iw4qBYCEirwf8yG5B5xf9SmwAB79MjhXKNUemodxREkZFHjZayfk2xcQvhzsApMgdw9jbXctr1LZtrUBU",
  "key23": "2NLQUmM6kZHZFVTS1RKk3pip3SjKRFGdt8rGKfBeN6VvARQE2zgpcAohEvaSVqSVBAVbznyH9C9P7RFjbmFNDicP",
  "key24": "5BeKHjgVm6YyDKEa7wxfye6p66ieLtt82LnEGjwrrBvY1hwYecwR6eRHS8dbmrd4gzdkjpy4xrm8HmENZ4tHzqrv",
  "key25": "5ab9pZaMPLZcSadQYaqXYQ2x8eaeXJKWxqWfCspusxWuAkFgT8EZz3ddz7PZMMKDQc3TRBXSQUcvPxY58zFg6oBJ",
  "key26": "Tb4zoJZHJoJ9RxitAbBU141u3YCYZU6BSrzLGnLoWsn2a71FtkwxWvDikU1FFUKGhQ86gDF2F6Tr9JJpk9Vk5or",
  "key27": "5b5Rvu6EC3n1o8ALPv4tqejEgxEgdmi7BRCCJz8vkFEb6ajHfTF4LdTesQ9hjGUuYYWKCoYtGbtoDK3a3N8wuqCY",
  "key28": "N1gkr1wUvNZ6L7FG6FTfSH6QXfigjz8C1Gt9YNVmZH5BssCniR5DkAL3DpDaAc9iAHbEFRoUeS2s3TR8HUEwEtZ",
  "key29": "3tm9gjujTRqnqkLeyiPvozbA3qge5TxGqAb9JWixBhDjapMpgZGYTQ2xoNBUHT7JfZGm7DwVKjVYPZ7YHvseoL6G",
  "key30": "4cUmebpP8X486knBcgJTa4xfFfoi6tVbAzRCpa1TPNQ6cwGmAxoqtZv9zHPCWhktGtgDipxoCGEkWcRpxXK3G5ug"
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
