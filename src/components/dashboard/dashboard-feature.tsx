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
    "5mtbo2HxapMAn8n4z2C5Er5YFBodGbTYQgzjoKdcixstdaHr2BtuUTvcemHrmWdJ9DHLSsyxDkh7h3iPp415WdB8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jkgB9kipmMd17yCTNo8sLUGe75P5Q3NokTDw2kawfu8NY9Ed6KBQuiw1BNQ3GNNcX5KNi9fHstoWNHjbVsF328",
  "key1": "3jKfrsMhKfrxm3c3xvujrJ9osasFtiQkLCK2pYjU5DqpgeGTJ8ZG65UyaLg5emyjQYU1Q6C6oHPW1qoSmX1jsdyc",
  "key2": "5q5tkJmprz9NafhppVgz3ztfaRBztBAQ8uHYrtj5Qcgcxj537q8B9xU95TwwW9phQXTxJJSuthM87ai52vtTfP4a",
  "key3": "4PHsdEFQTnMm9f38A9y8KkmfQbSWyy1ruU5PYNLSd6bwtNAWw4Rut9pHRPZp1X5atAoQs1mmZX2K3RKp1V9YAdTu",
  "key4": "DnhEBjbwdmaw56vj1jzV1qSRqje1k1rdovPpxdgHNqVo1wgs6hwiBy5xgq1MPVJBF6mBM4vfmoBu5ccvUXkxzzN",
  "key5": "2BvfH95b3gHg9nGvk2fPy6HGrnVXxjaNeKPG8PUreLq6uF2SGyZjVrmuF4m1uyLD4qfATA5SsFk3rQCVzKpQ2EB1",
  "key6": "46CX3fzATQepwkcK5g8txeWaMtkoAFDu4c57DWijygsTpjyjiN3Xy7WNMUT9CfcaHa5KpDE1QyhwfudgjAKaZAEm",
  "key7": "4ZJ74SZJKCTaF5FdDAoVvBRaicih5A5Y4ugazXxmWWJrDUDeAZKXF5ezUJKR1RZTva3Zju3w413WubfDfJWSRJhD",
  "key8": "5NyYW7e7zjJJH15G7zxccfKtSihLzF2KdTjtTnAMG36FXXnFhBgzdXFvWpk13ZHWRKTAWWq966CT8fUsMC7DXMty",
  "key9": "29sfN4ChCaLMTQQ3v3mSJaKp9fytUPL2oz59PhpNRKmcv1oU1HQEcAPGLYMmRHgbaMimrFi6mMFJK1jbAqbzHuBQ",
  "key10": "xE3qXP9nR7oW53egPQzdBScUpoqRqowQRvJ3WYE9gjUQooobweCf5wNAUhMto5zHXWFJoqj8QZfZXokTUX43R7Y",
  "key11": "7qqhGYd7KSpW4AUh4zYh3q7QeqFyLKKi1wXGeeSHyUpxkPDNobdD7LFKJ7fzUoKm9NBrQa5SetcjFmEY7BnipE3",
  "key12": "38sKrX7cZ4xFJYQ2b8HU5z85icNWQi1ATZNbCGKaLvJn1A8RodyYPgrT8SM1DEhYEeT3Q8mcijC9HapW9wTiceXH",
  "key13": "4N9W6quiV8vic65sNh3dwVTxDSikVdiXKgPVeM2kWZmSgro2UcSBJG99AT637xeZKnb13a6i5UWex6WGYNL6DDsu",
  "key14": "5b3DskZBXusV7JUvdy9bzGe3bG76AhZFM7gtDrwxGXbFbXJmm8EwVPdkjJbwNbeCKwRjwPvSDDaBGqkvnMKv3hWd",
  "key15": "5GNaNZaYjAL2n79tbXA48sLSpd47aMAVQU4BAdYUNtU6i5RV8zLNXQfLhWRjjc2fjN6LJZqU6G3tNNF7rcZmQtkF",
  "key16": "5YPbmmkTn553KEgvyfVfjkFRzfftUtTsm3HgbGzo3aF1TSewkzWjimipWjbj6uabxVAq7JZGq5s7hrhnboYNZSF4",
  "key17": "5gWAMq4yCWZrD1RhAj1iLvr521qiNetjq4oaHp7UNfteruArGk4EBUQhi1kuP8LYpyX63xV8gKAoSnsQgVbbFf3J",
  "key18": "4F8TDZXSp7vMaujkKDhT2fMcAK95HXccHKymGexs5RrqqvoWkyBHKbVLNSzXLYaAZqpu548WJUmREbqtwFK7CuFD",
  "key19": "5nZFuWygfkCN3njHEQZgMy8w9NTBQarM7saDxbxdE6hWftcAtsdqzzZXrqYpbj81UVciqrvFKcD2XV7BUiYSJxzi",
  "key20": "3Qv4bFb7scKtUVtGeh43A8zN9acsQLSvhCEbjkGnfAZkqfZ7UM6ZkE4WPkytAQDgLpvRgcNpiyp6xJcZdsvnAr2c",
  "key21": "3n3aoZEgsaexiPjktJrDkubpVE9fFmDc2rAvQPJ3Djgu95sPbgkuVRxCft7vwckgpXXxGkyxpCyY5C36ctWfzNPa",
  "key22": "4nYmW7CVsDLgnQyWeCkpRegZXPMvLvH2bELdrW2iwcR6q4SxAmqVQ6WmR6T2p7ZkimVfECCzqhqUayj7AhUcNYS3",
  "key23": "2gXX6YzA5zGEXGmJoNQK9GRQcERwthQ8y6tY13G5fApKoH8A8CS4fCzYW35ZSVvX8Z2VvDBN7akVcMm8UcDozsm4",
  "key24": "3HXjRXAfKmqHQosNDZFjrSNwJPLmszf8uZXiXqAFd4gUsF6RoKjG4k8XwEFqBvFGtAVCwTT4q2MUnuwppBLRd3LP",
  "key25": "28CAEkqxvxzGDx2NFedLn9msKZtgkVCpjbvJqR4dpS3pEaB2ZUy7WU94fDa6yAXgwcSU4f1kEJ2kSkqPEqBiA68L",
  "key26": "2NUnL8qkD7G6PgbaY2ZpExEdKeXMMbtCXrA5QvmW29uwnooDhwVvYhphAJ4rzGLGDmw5XyRwzbsLmts1zzAw1UL9",
  "key27": "5WvjowUPoETUyV1voHGLtMWDaj7qxVdqzKo342isbzhNMN6sYF8Dc5Dav8xAyScLqMHxPWGQJbfVeNhkrNHY64Jx",
  "key28": "58HuBoRR6oDW79ZjU1321NTo2ES2iho3avGPGxYNmgR2eQw7mkvsMpHG77tH2jR9jEPCoR1sDdDJm4jGWr5eD7QS",
  "key29": "2pQVmfjzYN7Kh9fxzE6NXdg5yCT4A1icZx5cWifp5GvcinEG12kwYNN1ZpGRPtvrF3Xh2JCdqSZvwVYGmoT8z7hU",
  "key30": "3Qaq3k6Fb2rhHwGDMhRj9gtV36CWaTpoyWHeNYHjgXwLUSmxAUqrsf85ofyM6ihjjYagv8wGiswGEtieidRXtNRR",
  "key31": "37gkKNgV9YeYBmB6YsdxGWDx7U9Y3cvr1W87pZNamPJtWfrZc121ux4Gz6TVXzeUFfTAM83L4KwVWv95zwg6d2Y3",
  "key32": "3ytAv7ZXXH1CToDw5WzkKbXdCLKiBB1DeVA9y2ci9PzCYwUFbD9EHXhoPYgnfxgA8N9StAmW1AVP4Ay5EeJrThVs",
  "key33": "2iEo7aU7FZK3nPwsLw2iPPZuAUTpyLPEXuF6HaeqnTjbwsDmXZbUduvw8mntq46GhK6HK8eoLGRBGa4WpZfYftzq"
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
