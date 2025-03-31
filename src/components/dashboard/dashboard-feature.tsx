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
    "HyCVT1eZ4nR2n8Sb9YRLu1A2aKdcMqZjGLZgw2DZWFnmgHaYzwpNWqn8cXu8uua8a9EmFejUrNPMDJhFNw86K8v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Avb6Mts1g9gP4WVrLrHWH4kdaZo74BxVKNSopwssSLmKD9WjZrv6UTegkivW9iVjTizW2bx1nHymkQ8qwc5rXsm",
  "key1": "4hddXanqM2QffLjZPuF5XorSMhL3mhyNeRQSFXszvzvBmAVcmvqfh1Qwme2VURzpqkP52p71mENFqmYoFHAxvmPj",
  "key2": "5rjFQQK8Fs4h3EvDkneFSgS3JVzL9fmacXHEvQXW79J25Ut8q6JeYHnad1zXeS47MVsrzZDEqti7NvYei6Mw788r",
  "key3": "ifPwcRuQ8G9AJMYnGd2hvBsZYTEfGwHm7dnUg6HfrN7Mfwyfr9Gcjmue8tjvrHW7DjNGztSDkqtEkSjzcsURKhs",
  "key4": "2qdYJYR4VmuTDhmEJDnvM6nNyPNEfGJMHj8o6jX1yF21BCvNsTVWyrTveQv5jzAdZkLFzsAaw5sVGzaPvkjCeCwE",
  "key5": "VbgW4UAr1UA6kTKMijwkPaHjpnVociKz2ZrFhyAcKH2wMF2Ef2tU7zTXMBx86GoTrM25ZNzb16iX36ForYeEN6q",
  "key6": "2j9bbAMbq8FQ6GhLKzEQE4bpWbJh8UDmfHNoVX7BEKTNwTZNghZjinykBb5CbieQphmuSXbq8ye5RyBtMomiMaWH",
  "key7": "4U5wp6SFLxK4ymJQ7FHAZjawjEvW1Fcck7CaZivZAUyT7qQshYTa9zSwLAnyXxnvMwT8oHBy2iSeNPM2Q3NdkDyN",
  "key8": "Qm2jRNY28X2EUKMv3KLcYPuXVRa6uyZL7fWPN9FquPApyGF9uG2hdX8DyAJ147Hd4QjfgkvCJZy8x1BAqgUbNqU",
  "key9": "5LnemmDz3Z4wdk5Hj5iAUssLW6jfpCtperrs2hviksfg5f1tda36Q2Kr8zmXKkazTxiYp1bEQjuNPjSJZcZMt8Zz",
  "key10": "MwHYMJwnyAw3ymqWQao4Sc9T6SfBi9DhZf5fXLgBLdKNA7LyzaQsmM69s3GpyyDgDmXpDSwpC3EGUuouvG2uAUf",
  "key11": "2tZbFtKMoH8DuWUwDSNC4s3hPT8C5E2roQSergdsfKRiTPgB94Mx6F9KFUu2GkVCn24fuH73dLbZFmEDMwGusvEM",
  "key12": "4F7JGnWkbzDAFx5TLzwRPon1vxmYe6WLQUrkLyS2bJDZQM17ZVGoP9YGafahBStSuLM7iFM5ce7nhUJtA4mssxdr",
  "key13": "5BcrRdmGBkArHLDyFBWdkMSgQsdcXCkVWcobKiqt9dPL41BP2p86ndow8rmGXPAQe1jwmTvD9JggYVNyBPv9FAds",
  "key14": "pgm7JGmfdH6GK12bEwXnHZqLrPNnaPqzKiXQv24QMCXGiLpTXbZYK4oFrcFQ6EGf2yTk81BzTi4bkqSzrsvd38w",
  "key15": "41b8Rz6G1jHC9iEX8HFUKw6oZo8bgMEiGpLLP3DwkQqggBAN4fsy7aAs5ywGrX2EtF41JM578rwx4dwbcU8MzTUG",
  "key16": "32jQiHjka5A2gyzuohf93ojFFNrcL6cq4kW5fSuC6mF79arPadZCL5BbxQiNHTdqDkUQW29e7carnKvkEVF9t72g",
  "key17": "2KpQjEyZKQYqMoubdiJFUn3U5p8R1xscQzH17YjSLqb1yeySwrk6qUJHcmBq33F2CcynU33tdm96j1JsQ3XA28do",
  "key18": "4irAMkh8gcm5TWzTAqUJyMpj8FicF4LpWVyxzJjPENxTMWru9GhKKbMKQQ1krVh8FcCvaqZQfZoieYr4UzNe5Dxp",
  "key19": "3DnXjowHFGb49KnptKLGKDwZz6NVSuTkJcS4gPiS9pEmrSgeDn62miMs4jDjiJpY841MoujiZyBePyeS5TgWG9Bz",
  "key20": "5Z2S86jsDHiPDmPfRDTRJdRnhpyogcdXFjXw1kgzWmzoqonJwHSSURjgzX2UkutjXyETwkWVPYmMuhBYAyQAtN7x",
  "key21": "645cXphpaH6rZxYMC6zV3RL1ksxY7qC7HvoLib2eKKykcduBMYbqKJkQJrXWV4gW2NhZpBmM7kst6WzugUSzk7Tv",
  "key22": "DRWocNjyBJ9rAGDYpAGvnyVXzh1yufJGqdpGVkU2bSZkKfNrHdpXLBoEZ7FVs7wMHGUqSrykiX5896GApkFVjVr",
  "key23": "5mZapaQSRBKkAq4TTw9iR4pch9dtGrqbuombuEoWVvVj2cVA4qAKc3nihEcbaMDxews4itrDodjkH9UAzZ4U3QF2",
  "key24": "5mpSAAVs18Jjg6QCXRghjo92DohbdqUJsdJmo8sqNsM1L96L35FNanfRj7PQaaVa4TjjkngjLsPGBfDqgwrjx5Le",
  "key25": "2qUUhQ5S9bRjdv4KJKTqpEWnTJjqVQkqpqvo2undruVEyEmRmmKWi7YwYy3TrDNYQ4nX2mpyyGbYNgF4UCVwn1Hk",
  "key26": "37ymk3sDGvh5RiE1Nt4BDxKoiuFhjnxJpjKGDREF4UevrzXKQ1mVRbej3neRy9FqRzS53dGWwEfwtauiESQSFGsU",
  "key27": "3kNthsXUVFNAfJgd5McRb3hdbir6VA41RUk81sJeFwyxH3u9pXKbXjqqPcanuWVuXdpLTpkcZ4t7gp5BXLH9FC6A",
  "key28": "2aQETscBKH2SwYVCb9C5Xh6Uxn5AK44sYu9UJrToZbmAbALqscJJD4FAc78EBEBrs7rPSWGZwyDiANiTsg5SAttL",
  "key29": "2QciQRuAjuT9zWsCZX6mWgXryNkpK6VSSGePgVYSpMg93kbim5rCXLo23C4E5nxcu8d339QkWMP4b9zUr229jDdL"
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
