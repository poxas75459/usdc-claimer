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
    "66tLX6ryqYBCizXzDTcnGUf4M4KfTzshSm1z3yF2nks29G77mT8FG58cCAoKQZU8bJdk7fmucAa48a2qHjhdEoU3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gH48kmQ9oanQPpEXpBeR5wbfGMv7ExH5Wwb72XdyeMXbLvpFQ3V19UR3H9ytnDMSQNDS961qjyoUoqMH4t35fbR",
  "key1": "25MaLbBFQBRN8vniRoLvXKu5RPekxrG2KbQTqSApkAkD7AvmoEEDBFqytYJJG35UUMq1GGJAyeURJbZv9smYyN6v",
  "key2": "22QfUuhiEUWKV3tFqngk7M1TNXuaiq6HqGCn2aerKPmSiPevosuQD8nEbiiihXXTRjNi8CdvdyTJc9g3LDPWNBoo",
  "key3": "3Q6iTxt6fxMeUb5Dz4YPWdnDDFJTxcajWTUYMi2BaEnS4HZYyuXvaw7TuAtQKLdsDE1o2kFruyHnhK1PjawRxxft",
  "key4": "4EcZDVxVeL3bZveehMVjFgAgyhsvYeEjEZxDEPPLv3LEBvhyx9SXtzV844oLwcwCan5KvvoPyYGuZa88s3cZKcwp",
  "key5": "49vqWyPWDe1jYEonkV3rsj9n8jgqbv2FyM1qrUTiaxksAtFrTthPePJk6WhPKUeH28gxVSkFdWgXRUe7TM9USvFa",
  "key6": "2Kwh1Z2oN8zAyAkNyNV67D7k7pgZzEBRSi9Nzdt3UfgHryEEGqQZhT7G9RGfSqwmytGRxNup9xQm6D8tJAHYyknN",
  "key7": "CUkMu4CXoCJyv3L5LsgEV8Msy2WjS1wtjpKcNNwbnk5dhLn2czYBaGKJCfDYmj5mA9EVL7sCEiV4WXn1v9A2MyS",
  "key8": "3B8T69xcYCm9oS2wsAfKs7z8qjYAtj9BH2JqiMYqduARzhas3ekZRiQYSfJtKRsJPVHR179CKknRN85Mvhu8rRb1",
  "key9": "ZyL3Tgk82YS1CkkLLUK4WdQLv6Xyx6oPs4bGbhVWJ2mnDnT5mnJjja5mmqCn2XwDp9fHCbDmP7XYQqLwLjSiuL5",
  "key10": "2L9FwvqopPsob83jgHjAJMCRygBwB8ySAp4vD7yWUcSavbphkrSkXJSzeCNJ2qMPC18nLnuYWSk1b42aWP3fSb5B",
  "key11": "4FeRn8gbizY6WrH9mGvWWfu2F6gTvTfV7UY8pv3fBzfjNgaGyceeZ8vqSzva7JGZgPyE3RrMmuECCAHC5H8kUhbu",
  "key12": "5W7cyviwyo7q9qZkxLHD3uTJ3K4UjbvDaMF25LvDQV5QxybuuqxtoTKdWGfhc9jgnoaM62Q3nMUyCbPyCEhDnUKt",
  "key13": "3yKmVHd4vYABQYfE63W84enoqDeLYfACbfDZHB2LjGmsi9pFca5cc7kt2pVCXXfcFFG5Zeq27rVWvMeg6VLBXrSx",
  "key14": "59Ed88VPx6B92Tfuiu4Ey1Gs5FgvCt17BkU9TRRQDQ7yqD9vBoBphfLTs74TMSZqKxQ4fvKciio2dh5ATEjxzaiD",
  "key15": "2SSzHBZdZkMEuqmALGVtbsx9J6ChNZn1BTU1DzfCa8eK4aWeL3Vv6a7H7FF2JFHnhWRd7eUeiq4q72GcK9CZmCBU",
  "key16": "5Ww8UqgFYNWUFJWvus71PHszCLsoTP7UhjcQmiycjJEKaL8pN4PMsGAvtuf75QaS3wiT76Cpgw7xGDJuga6zU2ux",
  "key17": "2cysK3E1W2bxbxMvCCqckgFcc8tCRzdKEWoeYUK8BzoZ51a2PhGenxgEdrng7dszfxaDEBH4qVE6km1zqnVjNqwN",
  "key18": "5rhvTUSwiB2gEpC7Ccme7tmTbaA14vifr2yoDySCtPEJS6UsyshZw2N7U2Wt7QtRgooaa3rPeE2Sb5r6ZeMAAzz1",
  "key19": "4gyuMFt3vsY87DDBQNLKQ5Wyb8mUDYr9mwHnfkWxAxeTaWxmKaPgFGwJzpgXQnpPBb2K8MZRBDVkkZ386j7zb3Vi",
  "key20": "3JuBvfVeS7PmhBMBvUEXhqB7u3sRDdevBFqKgNaVhP6h5BcNfZqHmRZVymbtZhUoXA1zAmq5HwVMJuJV4AuVpjvD",
  "key21": "5xwBwVmNrb73CdD6cPheqDcifZMi25Hfyt5MYWJ9wQeQU8Gdssxq7tQ3uM3Lq3ssDgAHcsv8Sj4bDLMSd2FcJqWc",
  "key22": "DBLFj8XABWrMxj9gHwa96cYdTPg7tv3bWcdPTeLbc9TtVcD3JrknLBJYSfbzNmZJmFKvqF4er4PKUnMCm4hrnyv",
  "key23": "59wZQkmKEnLHdbauMnUEDUZgkRjSquiSt7bKv1NMD98hTK3QkyajN81uQqZXgADVQ43khnzg2wwvZVRUnfHniR3v",
  "key24": "3GPNTKwWg8hW5WQ5rKHNDRpDEiH3ucArWyFSptev51jTBTkyUWY8WtBo28jHihnivaFd8yuBhDvBL2hh5bQydT8G",
  "key25": "5AzVYuxJJ5FhGQJEfRJtoCnjdneidS3n72rVzHbBHCAwEQoVE6F3CbsVUjThWY8oE1A1Jvfr8TMKoHPWk4WbvWFH",
  "key26": "LeYVSneEom6uAhRhVBv6ontHp2fMuFLBfd3sMHYfF6uHB5g9XNmHu4E1mZ7qNMEFqNxPgHh9xeRgkZkWi6q7QhL",
  "key27": "5wTncsiZQpG2Wuaw5aou8a5XVczUMNFc5Tou47Rks5D7Qy3gKyTdQBi3BvDPq2EPeb4TLTj7ZLZCnugy676oZf4q",
  "key28": "EGtYko8faj6zUBDz5TcDsJFSvV6GspUTewbVUtUVv4jLoLKfxfdKECppZHjVgz4DJU1RCzabJmfRzWBJQDZ6hUj",
  "key29": "2jNLUdyABNMepshtUggRLcB7razg7e7S1wW2AMXCrcZMhEyL9Dy33FHCjBfG8tT5n91K44JbqnZzSbVdcsmXX1Ym"
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
