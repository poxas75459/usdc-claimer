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
    "3aaWjPu7gvmBdwYXMVDJ5inV6ZR7rgmzSq1jC7qfKEpkmx8J9J5o6JemxiAQxVN2h9w2nyR7r6VwyA2J6dfrmhYo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HxbCuHY2ivDmZGAbdCNQdyvn6xLK6bGmyzVmYLTaftqtXWr9zkUBqt7YR6JEK36damVNMZFufCzCb3rkYDiU4tE",
  "key1": "3b8Ehe6pNUoRbX7KfKR3rknQD11PEdNzXVyHjaZiXns5zevwskiheW4VaGGZ1gn6rLWyz22LwHNynjhUePwUjiGS",
  "key2": "2oJm6ZWy32LVK6JRnuBtKXSGu6nTia9gU8pDe2mpsqrYbwxbxHm1LdVDDTMNFserrR8CKTbN7yDKYfyNChCtJWA9",
  "key3": "WTQx9m3npzDjLfAfGrDZA5JuRgcWW6BrJ3nf6qjtyDXPV9Ru4veB5ot5ZRaeqZEaMZcGoHfxQGDVVZzE1SyzCqC",
  "key4": "EUEovb951YcawJ5bmiwe4Rasd1t2nrP71g2d4LpG4wdekhPjcWgMJhVbuL7UtbSN8iBJjwow1mEWXf8K5upo6qi",
  "key5": "2ax4mBHm78KBGntfQnJoFK74jsmRbC65sKY43h7y94iPjrs6zLY1ftuGvcZi2sgFioDgMqjfSbztpPozjz6kaB5v",
  "key6": "3wACMnwcMfbyqRLqi98Cfuz5NqCC2kKo2jbaYStd3fWo22n6ksgvki4nvG1SrB7czxqR6RZxq1gB57rs6jtLdHbC",
  "key7": "4BTuMoziJcXLjeyKnU1Jpv3d3T9EShGuN82DXMWVP4GSZvFhxinvYA92k2HyzgxywmPK1Q8tLe1m5HConTvLf59y",
  "key8": "4RSirRHcr5mCUMhS7VwMMGVmDeF8iYHbKGYDT2ejtvFm1LVd5xtxjrCy2pzRSnMGH9dm6R99up8jSM5nAGF6Pzmx",
  "key9": "2aRD8JMaeJbUvoikdGhsJgcoAXXKw1NFG7rYBUW2YsPxMjv5qHyAgN85s63kAoojUhLxzArvY6e483K4cGGvce8F",
  "key10": "KhHr2za52PusQwsByxtEruVXM6XjRsgqcGL3iXUAXc7zciz1FzkLbZWkbipj2obkBHPdYvwUhToik8MSfHLSC9R",
  "key11": "4AFiKYT2RxeewdvrsuRsFaoYL9uu4JCvd1YLuH3gyJWmNAt85Css8ddPwnf9bEnHvLQyLtzx4JNcRTsuHW8K1GzD",
  "key12": "41FAwJagWFkB51Nw7Y5Rbo57EBpDMn7kuYtXUE66PCeBUndipWRxho8kJHch9FrUqW8Fku96Na4YnHVrbsJjcwzs",
  "key13": "3NabgBn1mWbAKj8wzwuCqC6hsGvtR4kzqnVwqA5rZCjdPgLj5Bn4VnqiQdfTB4n8DU63GWuAqZzL2i5oydSh9YKw",
  "key14": "5kwUhPQt8knCzMNf6StrpUeBbDHbBxvU7fCdHfwiwCngyuojGEmWkDavL6xLfBNoU8U95LMkHo7JxkuTKS84QMbd",
  "key15": "jJKCKQWWiSRv5PjTT6JpvmCTLyXfr6f8RXR2GxUrxgfpzknv49a1DCEVQcQkhUKaTpa1bJEDWE7RrNLmdZfjMCr",
  "key16": "3WpqD8brSrrahVUmbf9sSjhFYGR5EKi6YCQtLDi1WrJj56VVdYyP5QmjRrdRtU6Z9K9tCGiuQikaxNhJw6DvXqPi",
  "key17": "4ACopbqyXZPbAdiMtjKqCN3XbkomGupWCZTe6Tks2rXkBmQ52Mn6sbwEXAxUfSWK6tB8M6uoh3SHQk5eGxKLwTdp",
  "key18": "dpDJu9EcDr3eZnaHQw12vWkyWGCz1JcTiEXvAQaUCHENowJifQaZVVQkFtbLSTPykr1tWErYh3ymoAYVJJSj7se",
  "key19": "5vou65gwHx76jKxM75vqvtHg7Qx8XweBf2FjXrog68oMENRkEuqeXmUCTyAihTsEzh3doYREkMXky64ZHFpJdArM",
  "key20": "gQG4C4UhPUHc5LX5EdaZJ62MM6TV6iW4KkUWNe1c599WbSD1CcznbCYKC2YbF6NBhRWzmDrVdDxdz1X3HturFve",
  "key21": "nyttcwfrBzyUa5XSma6QEGVRv3amPWJH8RXJPb6oPLMw1HVsDXcbxzAnNn7j11JdvZaqgMVV3KCP3VqyJ3Up6Gp",
  "key22": "4gmtTGWbp7mPaG8WCPcSvh7UjUvMgWZyappLuTQG1gCV3Q8JQtKwKGRNouRY3dAidYodDJyEuhf13MEs1Sa8xMCy",
  "key23": "5AuS1sJMta8dxRGfLEPDVxj1ve4v5iKp3rwvkT8XvbJadhQFDfyCP52iLohNKpuebwPQwcwzKQ1tg7qADjusH5BC",
  "key24": "krUBEXfdmWs6NS51hhtqzmveSSE9rCd1B2oJgxQMcQn2k44YFtWpC1a4yZTLpo4opL3rrKhaZtziztp86bR4k41",
  "key25": "5LviXXvNkgt9RLY2sVeVVFcWyvk3k1nANDk5cnE8UWHbAwici33XRtd87hmj4f4joAvz9SwCRmFJtV2zofzcHixD",
  "key26": "4wd6DZuwfXSdgdwzeZLJh2WChwiu9zTxrckGYPF7vgBVnmYeAqtJKW53upocw1oKXqnJB9eGNxEXvC28mrNky2WA",
  "key27": "oprrQKQhJBJyiK6JzNBFyVNQXPQmXyMGZwZ2TFex4H6N6wYZ1kyi4UfqhXXykEExWL6HMMVpro7T6XmKuHZ5ipm",
  "key28": "xMYmJZEMDP1KKe5jsZzn6WBiqB2qG1tzHMrjTEdFoacbrvUEqSP7dJNQbosXkrUgPZDvDaz11FiSrkrmB1Zmhnq",
  "key29": "2Mne1Zg1eBZuEaEtwJWHMmKWGopZwFg8XJz4zrpPXjVnHZDN8vPbnZAY62qk5EReh5tnGe3HDnCnCBNcUYx8TaT8",
  "key30": "4WvpVrbaGfdu7fLpYdYJm1AW4ncqgu81kRkaWz6cp8diDRa7f7SGDV1zSPTUWzJYv4ckJyqcy9WA5d9Ur9RDE5BB"
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
