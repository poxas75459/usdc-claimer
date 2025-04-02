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
    "5DgR2VUtvhL3jMmpYzhU6HVAfs3cxTy3cvXrTmYusE7XZFY9vTSmRMDycqWX4pgctbvbcUTR5siT465mnhMNCszH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JXfLJvTLytciDghBynKzGPgeqrM6s9sKAvJfFqJzXryjHe5EMjwCHmuHv7SjdagLaSeNa6NCU9zGCN4cErSbQAi",
  "key1": "3Nsjga7EptsJn63oKGXjNw3CK3gvshTjVeQnJsA1pFvigNcGDWp6CqKA8uP3aZGBqbRTwARFpXASEPP4C4VyZNca",
  "key2": "5uoxR291CiKaYQ92H4gdQ4uhXk5rJukfPqUAoyoaABFGPM1nyfQQbMgjCcNpnPDrxz5GLTEggTCPHU6fb43LFTeW",
  "key3": "42FEzKpYA7vHQor6CjAdvMcN2VfTF8EbG1CeMfSVU8cW4rygtzucBTTAuPnJktpHpiwGeQWQVoz8EDNmuoBUcmo",
  "key4": "2QEidEusJB6dtPWAjWJjDGyPzZH3Ppynq6scP8KGJcuukUyXRNepqAxn5295MskhyxZeDEiNGzxLdui7hABziA7V",
  "key5": "ZtmeHZmTLxr7Q93a93Vd5GEafnJ6x3ypZ5aGUV9M8BPhzZEjMexrTR9Fx8J6T76R8NkMx8AST12qvfAFsJGC2Uj",
  "key6": "4GY5jqFD9vmkb2UKC4SiyJEGjSqDWU5QNmzQteRrcbhhgQ91BEEnj95q7Z49Ma8QTfJx6YNqmhAEbK8rqLLmX58W",
  "key7": "2G48N2MPmrXzQ9AFpyksXDViagk2QezoqbSsgSG4ApjuXEA6r2d1ZjsFgCXd1Kb8ctvGnGYqBd7AEkUtQx6EvTPG",
  "key8": "4ie9bVeiXotzGjKfdM7reAnwMLVpVTzryMm2CnJ1WjqCK5HzCwkgCuyzr3w9Et2EgieJEHxoZAznKrESVtLkVAe3",
  "key9": "63tqxcw8C8uuh57hD5RKb16vMhFGHn5YbfM3HAH8DwbsPX7SjvvAn6ovymtZRB2VzxQYkN4YJghjx6yUYxNAobcu",
  "key10": "auyT3vTy6xtTdmTvzN1X8htuwd4181tMxV3D7B5CbasK1YXEaNoXYreSivxgtYqCXBoe94krVuojNEDURpQ4ciE",
  "key11": "4u97vU7BkpkfghZFYUFYog6AqnAjfu8Yx2fy8CSCumYm2DzLsLXQVBCFSteHnA1ogPmhZRiKjknxuVkUTJCGDpiK",
  "key12": "BdfoZLrHh2jvraTaaQ8btySJLuKBCy4s9wfu4QaLSgapUomEfcyXxbzndYnrbaagtdDEKA17jHMSwdaXPCDzSZr",
  "key13": "2o9SNu4hKanGf35Vqn5tiEbLA5qdntzdRfNi7QZjNgxzFGCGdFP4PviKQTMR8nyRYgDUfReyHtdfkLx3AVW8SgHN",
  "key14": "5kLTHCqwij3PXgz2LqnwrwfQHdNfkJ2mKNB7QRPG7mazFY8CiwhWQC3XjEvsbUDMg71sWve76rGCttVifj5dU8jE",
  "key15": "3r7dMPcav86YqKJnZbPycErgNEEML5NEXwQ7JT9YG8sDTp9ac2gH3adQZKpNDP2jnPETmSw5yapqBgKUd1KcCrYc",
  "key16": "5snPvGSve7JHw4tfdmDfWzGwhFQfoVXzsLoLssMhfKYufWYkn1N7DmXeXX9pWXGuLQ8SaS6EWm53aHg4AL2DxGyq",
  "key17": "4pC3jNep4bdbcyNy2SyAXm9De2HYX6uyy99YwKziPfSpsdjNdBRXbcuFoFpMrf1ZdeysdqJd9vesryiHsQan57H9",
  "key18": "HYNQjCVE8ym6DGsS2WZdVWUjJCgAJ9K8K2rcrgqxinZtYWZujWg5z8z2HKNkgaRXCUn9HR9BfF6ndAhCWf5KpbC",
  "key19": "2hjEzLRmgMh5TjwhV43HoDPR5UYfbPTPzCiQDqnDGuUzD3BbQH4AMtCeWadb121iwQ5Kk3wrkv7KtAWPtgznX8ey",
  "key20": "5suoEt7ZEWiGQL2PatHopFiWotCxpFf6XDhLgKT9wpqrNfF67oFSJYdiEL78cYDgLXnDUQQ6JzHsezaAGnKFNHe",
  "key21": "2Z4h78hCs9houYPuSQhKt5Kro2SpsVQxqXPAGDJb8BCoRjWaB5WRJHrzCTYW8Xk6EpV3cy9C6pZpvQNRotjNF5Jk",
  "key22": "2NoaBprBPUC752gJ7XGUdjsYmcKGW7vPkH4V744XPksE4gFKrCya7rUm6JDd3oEkhf35KtiQqLqmtBdSaQEuxhWZ",
  "key23": "4nubq8WbfWLdSaWsZ1xajw1VfN3xEMuinSpBWRbaMvYnTjMZCv7hWkas5eGwr4vtME9T3sqE4cqy8Dy2xE7VVxqL",
  "key24": "2QXdgHapjtFbev3fM2TJSqAsxSmSpYmSfL7Bj1DmZDJ1ew9eyeuhUBGFhecDySxXu1tTtVoDEmnerRqFZp9YitjX",
  "key25": "qxJf4AyB3hNVeLMiGZEMXHHravAZD47cuZ7idEBCX7vaVvh6DVUyKDuZa3xAo2Z6ApSnMsHyRC1ndqRgQG2TAgb",
  "key26": "27ahYQzz6r4yixgwPYNxr5MBiSBBLYkiCDfhHmB8XyTEkP9f6pw9ErP78vyNQdk3X6MJfacjYaRxqRfh9Hg7nBjm",
  "key27": "NcKEDYd2KzK85CvZyNiHdsiCi9gdu9qdwXPShjWAstqTLZ4oNDAdRhx38qysvk2hy3mUs1TWyBvrhWxktcBZG4U",
  "key28": "dowkTYyEQP1E4ixTfh4eUqehMAJMaubLxwJLQA4SXV3RDnUgkcgJggBFyYSAmvuJyEyWqz5HpTSifZe4kbkXVhg",
  "key29": "4tdy4wBTetGcAAA48MGKCeDAo9P8i1mtmdYP1hFWzJg1hgGbjkQBdeJZiiDKJhqJrt5MXseQRDL7uWnySm6MFoXC",
  "key30": "9knPbG9jMXskuGYmKotY4gxFUeu5Mcp4UWKxosEFxv1hxrRisGynmgX5ZfhwTnynvheN7sc5qwQGQfKdyp9xUmD",
  "key31": "3iyPEy3arjq9GerT5d72LtJDjL7w7b311Xn5aPdqYXWAfdVpEa5hT5iFAjGSeZXjnvrUVSdWUNwu6iebFHHYoPUo",
  "key32": "58M5BYB2qy7H9kMjzKq26PnK95pKjgbgb2zqNYo3wcSQmhd4M9Z4PMd76weEyz3VuvsHa5JfFBVwMLVnmKDxFwe8",
  "key33": "3tzXVk2tsj7QLEXhhbk7MsEkCejuve45DWYNYfF7ALZ4cWFrzWCzgZaZjTRcxLJBcCy4fkvRGL121AokebXoGw1f",
  "key34": "4e8E7z9JA3KFEJuFDo8UjShb1kfrFNrMDH6HqdFQz5irtG47tQMGjLtJBGq8ViJawXapsGuTyqesUJEUbhMw63yW",
  "key35": "5gLqj58Goa7zmNftpxG3YNyxrM8ffyNo96tZFYJJ9ntx4fue39Jyxj86AUaKFi3yZ6gEpbZVsU32cGfQVZNvVZ6M",
  "key36": "3an5vgS3Xvzn4umYGMUVLy4bp8vvTRfYcpqrmZebVUsbsRdTEmj2xC4MejJJPn4EaZ9Xqd6RQfwATpFxQDRaqCjW"
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
