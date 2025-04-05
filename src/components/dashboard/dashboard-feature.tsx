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
    "5RnLbyBGAe1dtMcWRE1ha7oBD9Y5ZwgEDbDX47y2BFCdTXTcdZQAtrSYvof98kfPL8n3iB7BYsatmq8wwACykub8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jKusFG6k2C8U2fgba32nA4epxRrLhsZS9CfZ8i4FfQv7THvLChXQsRnqGYH8Duk9yyaMs6soy5WCKCB7AkhcSEY",
  "key1": "ndTMsPHHzmgdcPXF8RrAZbs6SBJ9mPAHuCMbjoQei6VLSK3CNQywrSt1i6szmZeYnRgq8wamyiVXrQyyiSBNLjM",
  "key2": "3TKFUycr6iiG88ps6bGMcqpKKnZvvczPQnjtRYpJGQtR3zXqJyK678GNMHirwvkCgQg1YUUBp5dTUdRth3QWBTJZ",
  "key3": "48MtcJdmMMCarGQjR7vcaaPRRjFaytMPDPRVBAenvJWkoE2j9ibAtKjRCaNtq4BHKJThMGVtg58JUoFpvx12HxG3",
  "key4": "2PfXaGUX7Cik3XQGtRwtcW6WyKag9cYD8uRWmdjLZo9SPbt8JCwbYRRjzx73ZHwrSWixh7Bm6BcNsPPQEt7eqhWM",
  "key5": "4uHHYL2mZhcoMUmbcfcJzRaWUw7enawmxbiH3hJ2CjFKd8qoe7s4f8zYWvBYUER5oepc9j6LJ5h4gvXAUsehucM8",
  "key6": "2ru8oZVr1dYiof2hSnxfP9ejn71CnxGJzpf99yCT2bGSAebpTwcXYQtjWeUjX2g9QPup9EwNL8Bi5D5MVDfLUGpf",
  "key7": "3mjRgf9MeukP92n4LyPGFkDEBkt2DZZosxFbErqHJjpzJBDBbPW2hbS9acdxAmyCe7f4qn8KfK1DMhowUaxxr2Ty",
  "key8": "35vD6JijGvVwGnevAaWbULv2Gg62mxqJhd5jUHWHPaN4i3GCvMWTin2MBvENtPPtJR2oPJ4V8cwmkZiAjFat3iVK",
  "key9": "3Dcj3yW2x8faW72W3QwPt2y3TeieGGJNLk3zTiiTdbvJKNi1Wu7SLhgHU7LVeZZ4D2BvzRxEf6WJqijDUCTw2hq3",
  "key10": "x9g8tqnDHzZF7mvxPBdY9X9KfWS8Vxsy2JNKbqRUBvaCuhZnVavSpuWeTaJiJ6FKdfHE1rHNyWRNQHMEJShvKiE",
  "key11": "5pH44rmxbvYgH6y43mkk3kDrKZxEp1mZStZhme4ibqFd8qaVmZD3MkXEayEc1xTb9tYMqHzLGw7i3Cv6Kzg381a8",
  "key12": "5u3JUJSDg5qxNcsd4BCiG1NYEzZYwSDppFbocPKpBoudQTj8SE6kFm1HkfcCRYHZXQnyRrNnp6VwYLqZMwKgjdnh",
  "key13": "3eCmbZwUB2kBX2oQsMSynBqwvjFQ5mxojuawz4HTGuuLc8m7UDnyYs8mb5rU67CugwfcrNrm3fdnyDbex9KXvnyn",
  "key14": "66Z8iRPyYzvWh951LqRc73GqS9VeZaAFgPCTw7ygLZ7uTBJDShgkgchxMgBCxdpoWq4bHJDJpd4steyrdovWrDth",
  "key15": "2wS2tDoFSs7urmQ1LcwVKkS5QWNB69uoAD7oMfGT38vSWCmtLircs3dAw2RVsJVYjjJzSZiEiCsi4Yqxw52jAmbr",
  "key16": "2CQqifurW3YEMCjK7KTJy8XK4hPymQKWrmZkvTFUhzLN4gLhozuFKnAFWpHFFE4mVAJRxwPw3RxBhMEeAchDJozB",
  "key17": "34joZwr7zv1f1d4s1fw9ASzVPgST5yy6kxzvBNoasj3RpuCtZJzgTGPc7sG5QgwKeAgLG2LDkDebwthK2SzF13yk",
  "key18": "53cFh8zhQZ7PvbpjyCVx4inskkedj2cYjkDk8SRWc64xwz41UkD9mexxAGwb8AZg9PqSQ4GTme3J3gZVKn242NWm",
  "key19": "4tAXdXtz6sgga2bMMDoUiQe5iyduWzet4Ww3E9uXFdhUJhTh82axhLeECU4tBndB1kMmvu4LL8GcVQyMMjh7xFze",
  "key20": "2z41bWmHngFXsXSt56YvdzAsoHbqQxh7G75Y1kopb1kVF6zHNUf2LwmE6e46UR7WRD84WY1HMgDnsVxkUwBi3Fnz",
  "key21": "5kwMPkH8qqbYM48sbSKAWTykb2dJXCBd8h8vNTrZymziMFC2encJJC9cTgGRw7iAHpkwst2dvhYwBmpxCmBnxPrq",
  "key22": "3c8iwKUUhhQR5xDAVnEgq7EUjvYDSWviyEPEgKdZXp2n4CBiVWEH6Wx67FFNyFz91wFjDVSKDjjKYDaii6hYdkm6",
  "key23": "4rVSfyw31aYB5VTHgNJWUpECnuBxr4pzz6siN6xX1F8EwHGAnCcmkAuTSr7souKJLK8ayGT4YbQDQJPGy3sA455G",
  "key24": "5H9LVcbHWccxn22pgHHMvBgCHjbjwtqdpWiBrufcnxa3ivsVS53N9J4LENRrjiNixPPov7Hq9s1qvxbWm14Qw23g",
  "key25": "2R8aZ9gp5TM55bbpH69JEzq1sJM9YLea1WqkFEaNKMWH5fLUkXXV2wJVRRiDZeTFGqvqugw3m9Z3UjgGBQdBJ9qD",
  "key26": "2RqtAcCiFJGYh8JfkorM7WAdzZ8wS8dTnPCDTqLhCtAtyhWC8GycmARywZDkmUkBoeQwYva63PM25zpqVpimV1wV",
  "key27": "5WkqU42PR9Hsg4D4euoaEb7m4gjCEVoQH38KPSmuLomghcW44e52YfzX29NEEBsTBhX7gNUYfv5iWyrAb4zDDEQa",
  "key28": "3ELfusspdZhMcUwKEeaeEfmYCJnReFjsdZ9NhoBwgvPn1iXtuR4BdnnHbAeH585dvaXQiC3sWXUE33aVVWT2Humn",
  "key29": "3Fw2Swhz4nsiqVUFAtHgqrrL6cRovegx9nUZCukKWHSTuRZf2yNn87DXqg44fN3M7UHxM9dPEp4cE9Ph4u37Zfts"
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
