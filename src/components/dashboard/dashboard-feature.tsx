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
    "5AyYWs7eadEwG36zLBBXesTqfsbdoPG6d9jyAkHGevugA4wHyj1DVe8ye15EA9e9qGL8TP73UNNNEqZQECmVpURd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5egXhW7cqr35aQTUxH6KSyrrYiHr5aTySPvb8NvZTHRqFuroqafsSwCJgm6RdEdxZNkF34kdjYhC4VhUm4AfbFJw",
  "key1": "3tM96Kr8e4PvbYYFZxrwcxSqUFoTuAtgLufsTA5oPfoHgTL8DbuzCd1XJhD8jKGh9sJ16DoDEDDcLVpYt6fysRzx",
  "key2": "Dj9PNbmkWKRmRC9GACUmH5FDQX6ZJdzQ3xfn8QHVq8cFaDFbFp7GbtQjKaKhzSz8pfN4nsnSDQvgTCYfmHaRinZ",
  "key3": "ezG5R9nuahVSurVbsWwAFmcNyBs62bM6kMWvFwkhHJSRmFnJ1FAgfpA5SWr9apRf83VCWyUqwKJESnQ7AaRG7bn",
  "key4": "kfZCttCeXpQbnVj9F6cUY1hVNFERqarW8u11okVFnCo6tVjzZ16YkQ3DAq2LjVnbsjGs5qxCuUJLnRsScAHLFt1",
  "key5": "5qsT7Cse1xFqeHijDadnAH7PYUYQwAYKbUUUFn8yMuXc1dB4bFc8D5ResHeRUwJZbNEhDs2Y7f9WoqLpjfXe3FfM",
  "key6": "2NkEDpXH15THVHBibDZWof66GEoSjeEzZVjDffnDxLCXW5ZbgpY9vaJNZuKjc8P33D69aCdxzemWW9WxWeQYvPPH",
  "key7": "WE9jtqRLH2jBxRL3uR12Xbq2oNd5EZ1RUbBH6WSaTewAL6iF7yoBAJFnL4aUyqggRoh4jq2aEXvmq95iMB9oHhR",
  "key8": "7jEb6J2z6EzG3MnAUUmNv8LKEgc9G45AkoFXFi5GoMaKSPxesnsKKCydQR7fWRYp6V4kpinXvQp6mJgourZ6hXx",
  "key9": "GqnQUgkhJu9RkbKGKyieS7bQo4CueC1SbVSXpk884qazMVs538QNJFJ2E54JbF6AiMqupaiEtWuWF3dMdA4tZVf",
  "key10": "36jDfBZZFcwCHqmuv7w18PyjJ52GcSLSnTT8PaE2uk9mbJqmerHuQ8dfJcdRkqYJhZXqKG1JurJWXQ1d2MVPzAJK",
  "key11": "3MBdMGLxekqUjxxyBpnULuywnCVSgf8FangoYHwDt1dXujYdSasCqS1aV6CXB1fhdd2N4Aztzi7B6Hr2y6Fo5wXt",
  "key12": "5GF7oLpf2TRSiaJM1qUq7R18cqxsUBkX9412LyimbpsyFS6uNq46ikmJBnYZy4ZksAYR4QeFyx9gT5nMrmTFmRyJ",
  "key13": "5EA7aUmB2LkSuYR3zNPQsGGE5ioJBD2SfsqpMGF5xrrVcLj2Gmc7d5WctGxMvtB954bichrCnZVT4izWTsQNzWyy",
  "key14": "5RocyGH3vToe7SpFPTUJgcXbM3mXdeqvpQZqXj97VWk6aLCsiWxXxhMhXKVmQwLtqtebaa8CgzDeswhMjt4RRoZh",
  "key15": "5meBocwvwk6DsFWf8XNCp7UfE76PxfnTE3H7qmwsqGJR7BjXFiGPoEx1YN5djbJYW1BKkTxkeHRr8gZbDLhi9qzw",
  "key16": "2bxpGNTUo1piwh2nKq49QTTXMsf7x6iFcA11FFSabTYGY32vbipiFG8JqfUd1HiZmEBRZMAdo4xSdqtKmgiEz829",
  "key17": "5Arrb4rtms7zCKVFcjtrnwmqQ9gMABBoTdWskDxWv9UrPM9VebsQvszjoFsimWX2FAQhQ1MJ741h4GbBNCZgY49x",
  "key18": "2ECQtQvqwkRxw9yJew8ZZLQmyStbhYSastHdsCemMzTn1sEqbsesvAVyWLwHQakwsga1qs8mnrNbuqMkcWSVJjs9",
  "key19": "5G95ncd2tMujWwfyRiaQfWWjCtPLhbQpW461TAhmZPf7v3ihfjPZufz3gYPu5hkD7pmVKuzfhqaMWoLjapgppyBE",
  "key20": "65fvZLVtFD4TwMj5GK1cSc7a5oz9iQBQF7LdPJNsY2EPxSCZM9avLmiD6R6xnqMRKQtjxzxxQAVJBWgvsWNWBenP",
  "key21": "3uxd4eaJbSjpCAWhYPhSopqF7hWzWTstfsdHcXY3xk4XoNLW15R4eHGjyM6YK9n7k33Xj2T7ccJxqLiAoPGm3eA4",
  "key22": "5RB136acLeF1mopNjD8NFsbUrRWRimpWX3w2ucgZkwH8nLYRgFTceVjaJTCt6wQbTLJUMRqc9CsVhiEuNLvupCcg",
  "key23": "3pPXTYgDSaJFbuGFJLLxuU9SX1YbSvN4MRJWRJaXaVfARuxhEuSkD8fdExXCZTTqFz7rFJjNwWwCBGmABN8edYAq",
  "key24": "2bSx4wqJG8c5kZ15xBKTpXtqxcxomGgyQKmErUjVjiUybspT1yFRaeTPnvmwojKzPaxxRvEbzpsU6eZHLX64phXW",
  "key25": "NiSnuwzEQ6zRpiF4ZM5dr8W7x4mpwMTQvrRT2AAW3rpzWPFz1vRH9hNcTwE45TQhnNbAxVPj7Act8XNsxzA63zU",
  "key26": "3rzhGcK1P7PaERMitjRBpgLGGJBgD4AEodmw6VcNF7ZDVNyFT4CukxJLzWSQVQRKGuJfZU3dCpiYwehC8Zy4K3Rv",
  "key27": "3cvjquF9dwzWLrxK2qr9SqAeWpj5zko1NQe4Gfhsm8QbGDFADE71t1dHdby9eZT7LgMyrEnt2SPTeUnXahmB4AjE",
  "key28": "2dxdYUkPWFVZHSprhW6ERyGtzT4XpySsshvuKb49a4Y5Wy55TsaPx9pnHMwyPHAvVoJ7pCt1x73z4EJ8he8XvUnu",
  "key29": "51Bmv7HcaBqqAC9kcxcjvYtSCHMnJBxGzHN5EHN5LnDs36BzdS1t9KSVwjy93awGqrpHzAzKPwajmAC1yPUPNtzf"
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
