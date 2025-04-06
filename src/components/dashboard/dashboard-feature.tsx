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
    "Z4mR8jZpqPxrwKcFsCsrkor4j78yqVhToZqwg8Kjoy4hEmA56Sh4Tw29QT9AKdQCEi9G5FkmQwT8PbisksbYt6g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jAntUXwhXsh9cLvoxDj3JFn4HNa9wVXFYBJ1Nm9UxRbQZCw1dr8XPZZLPEPMzqukGZCFnvtCAGe4x9RwnxvPsof",
  "key1": "4dqsmVnqUsu1XUpJu3tnLN4bevzCcFAv5nHb8G9Zbzw5vXMjUXCycJUqzGKAMBxy25UTtMtLexCP6M3u6pjbdp5p",
  "key2": "4mZHnPZvqrtfUziFVeqmjUUjFeDwdccGDuXV414FbajtPArkT28dPrQNrbg96CRD5MyNvBQ8U7Fm2NZpx39PdMey",
  "key3": "K9Kx1KfrZ3MFoJxCZhb7dCBRzZXyd6fWbrm5oDk6UhfCg7MtFpLmQtZqhkcpHQ1acUryVJ91SSwhyEqBHEDhk8e",
  "key4": "5VHeQerv6FxoReDNZQnZxNrJMceYpgD9qUpTc9iFAbxTFP8SsHV4CAspt7SrqvwH1xNBK6FG1U6ScZNLTgz9YijK",
  "key5": "5N3u2BaPzzWqaL6pGa1g6VLHqw3gXeG6VpuNEwR3kG6M6mfGfy2D7qPJ6WVi3XSGZneWzcCRhcFyiavmAuATBfLY",
  "key6": "46s69WGqeWnqJ66gQi2bkz2hyDk4psACPMCV3tQjvJJsZJ77EfqheXRNN3A9A5kZmJxKJqQStgtnMVx4nu5auddj",
  "key7": "KoR1S6ViTRJ22snQVDTJT6TH46w1iKCETmUtMmz6mj5sCMhFXfTyiwKqKkGp5tWVHt45Ts5kEVNNVwMqbKZrfug",
  "key8": "3qqRGrRYEUy6BP3wngvE4dQqhAdxPqoz2jKr8hiZNe2m3KcDeNTifkETxLLAcsYvHBtjDTTUFxEgjmXnnvcmWQno",
  "key9": "5kyjaasQuZgHAshFmtUdojugQqYGnf4apvbqWgPAA9JiLWk6Jcten6Ub4Z4PQcHkrtNYwGj9iNBPJLTmkXqekWvo",
  "key10": "2F5EsR4QdAu7Z3pE5rUpGcXJDH14ht9c9QLdgA2ZHDzwcgDc8NMShpMzZRHzjXgMhB5VifMLyzobT7NaJoXhveNh",
  "key11": "5nF9ZMwTE9iMPS59T3zxXqMizkVCZDayFgTzWEV8w5Gn5aHXdn8NvkCuCc5afw7Axen8HYNdbPRoBKKs45uKZD9w",
  "key12": "2deFDCxZjpEMU5vSsrXdDiN7s3QVqzp35iKpBzzeJkEPceoM9PBsDqfAHhBNfrSVhgAwpfQ7AdGEJoZURAnFHhQ3",
  "key13": "34iEaWxcchZgiKNmfr33E6iREm5bRULssR1E6jySp8xj36ZkREyHJ2nBKJWwR5eQBaA53JVyGdYBo67NrV7kZtko",
  "key14": "4v8VCViigpgWoGCs4XnRTRvMNzC3oGALoZXxxzio2mhZwZrvQVCpbmd2iTSB7Ka581QMD9DbcJZp8D9w4jGZQaA7",
  "key15": "9rt53pkuZmazasxLv3L8C8dmJj6gywcfvNcMdTu7ESqtUDBjBYCP7tKUfnRntedD5gvPNdxpPptPQU3F9gZpuHy",
  "key16": "59WtvYRsP4quj5Xn31YnJbVWf8oxcHNcV3d5ZoNb8xXTgrUX5qvzpqwTMZSWhgcvLRv69gyRDmjpneovx6PjWQ1C",
  "key17": "5BmEhGDaWgcDYfwYFed5FP8b3c8GVMdXZvjecRXcuPsKHNoHWXp1P3HWbWJ2CQ2mRWprhrjzqTYBgsWEKSS72qwr",
  "key18": "F7JWicAk6fQxZYqrRCvqU4wL1RA6ciPURezdiut9nLr3vRRaDU6TUMpjpZxkYsxQipMDUzxbTbtYjCzfVT7aYsP",
  "key19": "34LwWYPnW9yh3Es4VBEXzmhiHcr4RLWSTjDvAdeoRbFj17DzQ7WBSF9vMNMgf88YCt5S7Tm3hWKsfK6JZYhSSfup",
  "key20": "3LCLL8AX2huyK4EgjoZ14Mu7vszqqZDgQ5jrHCDQYZQVgSeyZ8hT9ymZN3VGB97RWT9Fu6od2NM2vte9chVvwvBU",
  "key21": "3XvT8vD9kJchH3AHsUttyjJAoefdxsZu1wU4jdN8CHDwmUU27dHLjM75jnk7VXg74TtRHYmfHdMPT3uSchVtc9B",
  "key22": "2RcsXxZ7gNwa7QmqYEUp5vK3sKjQRpXqwcTnAUwZJ1S6ZYS6B5W2bNduaLbssGJEcFjq6hs9393SNCn8XD86awpH",
  "key23": "3tSchsNnHMqXyrHLt5JxWP68KgW625UmKZZFDARwdRgeXucpuGtkPLcd78U2EvV6biTP4Eo2rjYhGoXjBkLUyAnA",
  "key24": "5wCDBaGbcpTuSkc45BXBLvv1aPCGpKuLSYzuS5TyoznzB8CfZ7Gmy8QVLTpy54GpcCk8zC3jLmNHxQJHi3uF7PiW"
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
