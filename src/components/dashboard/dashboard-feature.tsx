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
    "5L3N3UTZfvP4duTLFoHnicj6BJY621PT7jdMrUjpqUjpvDUwgfsyDsrq8MgfK79aoknJcSALdhVnHp6WEKU4eQhE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53u1AApunBAFXa1jTZSUnvGHe7YnmFnYzQTVJzyLt3SmFXDdZcNmjW7ArCPNNzDAqKhABm85R3zbhJFcnnLHHw1",
  "key1": "2BB7YaJbz8fcTpgaLSkp6FFX47F2uVjdFa7bkriqaap81jzkmkNhzRJF5uuhzAWexSTqbUF2Jwiz9cBHU1jt6Gfk",
  "key2": "Vq6gvincmgSaNwMS9hA2wb7Tq2K1Z1HXb8gcU8CqKpN3vdcZJyh6HFuKdWPr3QSGcCwxNWbgxXY5XHCuDpQysua",
  "key3": "5RW8hmrmwTUoKDZgfFqgC7YYuL37bRr7wn3rXVtNNyZp6pKHEyMnXhSP9iDJ6Ndkg8vpcoe44yWtEw3kUzvcvZ23",
  "key4": "3TDGGvgBsL31mCFxWmZkNT1C1Z3fyVHndbkP5uoHJ6PNzshAWZtb4WBUJYQtzu1h5gi7XMoNCLBPZM6AQHcrkc1V",
  "key5": "4yRdbC7iNdqCe27TkHpRWhFEJsgwdGnELEt61X3MH1GXwUNVgRCeFMPQMjfP9J2AnY4RBVQXRqVyDGmuWuVv4MAU",
  "key6": "2MPG7ge5AavHccLh55M56LmysDUpBK1U7jRNwV62rVYx3wKjjvhnLePC3WAdvXTn4xBbWd3soXaW9N73NztD9EZs",
  "key7": "2Y3KZp62CqPB8iNQp3DS4RXMAyhBPHjxoisveL1eP7zxhFg1TxGyCDmZbjmN6rjYJDof7NhhhBKrLLnKEmXfdtD6",
  "key8": "3vZJKRsKxoSWZD7YhumT7ah2A3KfoSjm44Lek72ZoZnPaowgdobW1tYPyaJkg85McDjpr6ENGzD7K3xvoTk8oCWb",
  "key9": "4LSLwEVUgBBFiCG462ZP45t4QDDCFyyFtM2W37poxm8bE1CeJWPdLyrwFaxamgG6CrkFz7wJLKwXqKFx28X8rcLe",
  "key10": "7qDP65azPGzxAe3uMyJGMJf32jzKLMM1GNUWqcFvZtbUGEJ5s4JPV5jSaXFuZMguUx4edgj21wKvRWuupWtUC36",
  "key11": "3GoHcuQPpvrknxLDCLtCNTqr9XrHYvJn3xdzVXEhr4EmLaeC9os7Xh2Tw21qAnAFCNNrPuEKwu2jhtGRKhYLZakL",
  "key12": "4MXPw9RSQgHbeaYi8NvPsoA2S5QbBQKyV4Xb1cpa6HZKPrTcgPwY1EFDd4BbkkEJ3fJ9S5hqbyXwBrTHRbwFrsqf",
  "key13": "3ztbfUjC7TJtW9N3YGHjVN6g41uvy5xkyZK8a9BTaGjRLaj1YaTTHzaSfqQWooyt5BeQBRF87Y5knbSxUKhwxhjA",
  "key14": "3m8C5qvKzARd249EDXWiuwdtevuetXPkNMymYAqHJpqXU5fdWjLz23c8kSpWxyez25axw725zEeNhNWzwong5MHw",
  "key15": "5thawNqMpfV4jLMtrhyZGJoAp8sKdMus8gLc88gzd57TkQx6jWdm5GPYjhfTam4ukk7xMz3mdUuq13jChEJLSjsj",
  "key16": "2cAH9cJFQbbxAxqBjNwPeM4uVHk5zy1zLT11CSqenGPC9A5GzeDi2RVx8pXxKHZkxWTFwBnz3AYeQxMNBUSK3BHA",
  "key17": "32e9Fce8GWTBEFueSdCyqbK382LKUqwoDc8BVuEFNPgCDUZtfm33e6qdB8qMWXSrZpT2M5YAS1WdJkeEdDsSVd3A",
  "key18": "tv24xkwvZiJZiT9ZnMJsHK2UBueB5wxZe85Z4PBeoFZRJmRDKAV5qyV6M5vR3zYeQSU6WfEMa2bzVfAFP4rZREM",
  "key19": "2oHFGf42pG2PEaxb1UjTSuEuvqye5ABDrbSyuhTfBXyZ6pZN4s5NETrhV69RqjPKyJmCPinoo5Hd5PobZVJZjVWc",
  "key20": "45ahVSCtCzYCZdW5kP7N2xgXFJqBLzkHAq4MfZfiCG7dTd6CJoYctPkiet6pab3RRHpMagJzMFQCz5P6Hu5eBqkq",
  "key21": "2D7H5dGn1waQmVZsSiVGJS2nrAMumkPtPwvY1G2JKMu34BGxyqCrWJh2Wnwf1yj7xL3AgcACYQd7Jxvib2Ks9oMr",
  "key22": "id3rJh8JibudCg9qKwRGaLKzhwkQwFaXseyS12YG7NKCWV591j1mDdn8CMc4EhwmryMqSzwK7LpfvAM54Eh6FYp",
  "key23": "3uYAQrJEfda3DLCFsPbrh4Kd9uyfLexnjSESrgU4FUEzs6c9cmcvEzbSCfso67yYTYaVo9EvkpUvFeTo7SqF4iSj",
  "key24": "44H29khaqLZR1wCYbeCi5D6QdLseBQCQ3twdoXymzJaU2e1Kd3aa5H6wQ1TRhCEDDHQPGD2F6X21tch5Zcmtcpio",
  "key25": "4MNUNefQ4vGVfZwHrs2eCHQ89h9wMhWW5yUkvZipQEHGBxnKsDjHxGP2FRktXGGUTHBMApiNgA458WAUjMgo69Ly",
  "key26": "R1svTGUXnrqru7T7yDn1csstqRrFPorvUWR4t3fZCjvQuBDE656Pt8DxzQmRzhMFqzCxMC6QwZDEZHoDEBm76kw",
  "key27": "3KfUe9b5ando2XYNwXMcCV2RoMx4TuCmaXhRj2adYFHV9givmnG3BpCwUxAcW5xCxKfZ3NF7QHsEQPK4dZ1kcUsV"
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
