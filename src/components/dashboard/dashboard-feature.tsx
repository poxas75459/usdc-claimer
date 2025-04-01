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
    "4whWL9uKaoYDTaNXBxirL1qgPxZj9fXR5BFnnT5Zz3jv6zaQvJUNwmyvZ8VxKDsb9NervLeY3ePB3LsPiQkdw8Zr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fMPv7LirbFvUjRJTKT1BStwGgyyLEKAa2jeiYFA7NWujUqAPUzBpcyfQ8U6MiEjzBwzvpE75GK7darZZfKTRLWy",
  "key1": "5L5fu6HhBWT7XXEb68TXzrow8HhN6jmMKpBWBCjLYNBNGkTCHGHkD8SWYuEggnqoT5U76C2c6GYsF9S9sZYBo2Gr",
  "key2": "5wnvKBHCqPEZSTRp5xBKHhoqc89Vadktr4yFZhmHZRdVkWLyepvHbo513o9KRPXAqMXRFXWjiGLcUYUn1XousyM9",
  "key3": "5kYp9fxu393MyPe1sCUgL9eaxZGz2jSJHQJFJVhk8wspFAoMwzAApbGkrwCyUYaQSV4qduoeWXnKKr5oRqsGnixE",
  "key4": "5hfwvpmKzPdtxWopb3NYtQChg1ujvph1tptTWa7HL3C1orCfgxXSwA2pZtheePveYYtW2vdUNYWrB2izuvNCWLqK",
  "key5": "4kazpUgV2vA17cehBeBaZ2gCjxncT5Dvni44vpYFx8NXAu2x8tBh6TwsrBB3di7xXwoCf9Ga53t9a9H3ht7iTpdv",
  "key6": "3eH3T4hw49MzjGGZCcT7fgMVcPJhU8dj2vFKqckBvL5ZJNvv2mDtzDZXyDH4Hie5XJwMbGVj49Py15siaLhDNFMb",
  "key7": "2viWMtcs22XRo9XJ8qtjYiyKFmixb4ViekWZiHDUhPGTyJEQKGYBmjmUofPTHVThMdYNpMJ7xqvuqV4L73x6GPr",
  "key8": "2EeFo67GzGeDDQik5foSbLnwRh9ZWwShDmZAKRXxSHFVhVLqHhRxg7tHQ7bApJucWNnfv7v64fCZsYKmqmeKT2mA",
  "key9": "5rUwh9fbYF7dZkDAmV5G3Tw7Qt7ULGLdC6kR8aNGPBWCsDpzaEkQhfzpv992edVwgKKdz1tU26rSuxxmvgzUpDiR",
  "key10": "3pV9DDARFk1SKc6e5xA5P8xGZHmPTNQ3sw8qjJGbRL2mXw4BHdVdutJS3QWAKSt3cva6KnaVFoV2NiKqbpVSYcCn",
  "key11": "3AaKm6F8GX8uPL1byZ3AmkcKnDDssG7tqdVDBhKiiZ5LwogLgZQ55dnW932Tde7UktU7KK7ZqXSSf66UfsezvCiJ",
  "key12": "4hpbW9oPJnDyHPwNsWTKuSmi71gNPzRqHGmJfHbrJxF3AaSUPx1JHt4FEiYeUd5s1mKx4jjEdXkLwdzsNXmtPPj9",
  "key13": "65PK7MBRuUnUgUP37PoWMkZ2T461NkDmTrtDQx59tKKDuH4wCazGXHRgWB5pnjFhhVrLmxf5Q1Smf2SARKi4RyqH",
  "key14": "55ocQda1vAz6eCJrLCoVJRnoi2sjD8E34zi68ad8JLkp7UMSA4xKYbEMZFZBMEdjEMLhceKQRkJ7uSiQUmjdzaHg",
  "key15": "HzLUwN2xAYoGscooK5DQ565Jf5BP19i3Z7nHQ74UFyQ1xgioQTdY9qMU7iwU8G975VkfAWnF5kUi8iUhG5YwdmY",
  "key16": "43CnR9dg8WadDS9VocCsb8caeDWpMqDd9VrUE6ek9ojwSsFwzfb1wvtR69UorsULuhTBwzQZ6nVotVWg8wSJxUvR",
  "key17": "LdLW3ujVYtzCqFQBpSD6yueMMqp98bQDsVcyzFyffjjGKG3GLbbdoJ1xbs9re23wPD7ufwNBpv3GNWTcCaeSAPN",
  "key18": "epASvhYgWbatQgNsXKB1E1qC5n8aNhsxyssPPe677xFDP4zjijDz4trXd7896TcJyy4S2z9qaaxrk8gJseBk9vT",
  "key19": "2UJsDQW2sGtSmoNZEnLmsy5PPorDvHaMkHPTwGLQW8PxWqMC3a8CFC9X6NHuf7SVkGUzoNgZ6NDb7XwSf6h1md9Y",
  "key20": "3cLFiL3oCjXdyyrivjd3T5gptfDdHs1pe4PJdXFA7X48X4PE5A6ThjgqbjHZgCEjxB88Mb2QL7km7oA9Nv7J6Xp6",
  "key21": "4AnoyPrsRgpFppt5Xb9pWBBM4ZuwGJeJmf9iffqHnPoxhuCp6wb3udehdqGUQBCqrDskeJhJ6UdU8YJmHXhGhax7",
  "key22": "mVW2mR191JavTfJTEkmheVcS3Ff8SApuFX12MXbbfU79oFr4LqcUT1DMmzT1Pu5XhsocZ8yhMcCrWdJry3yzWij",
  "key23": "4WWFY7kLQ1188zYq5NkJYmZZN2FCtEjSiQ3oA94yQYcRseG4XhSUKE9QeYYaKsu95f4jJS58GKqkKV7mc2AjynL3",
  "key24": "5VW78F6jXj4oW4WJjBFHiDtvzbZyRNvBRpsK53yrM1hiZXTdYtsurp56niLFLYnyrgCjLatrxEXsv4UrJqa4wsv1",
  "key25": "5Tw3padqZJe5vbHHgwLhU8Q7axt2Rse7qmH9x4GJtHQkBvnrvVsE5JH1rimphgNrzzt2bBJX5Q5GbiZp3MjMHxZb",
  "key26": "5SAPmyD1M4HtwC84tfidoB5xXbumpPrXi1nJGiEer8HV1L8L1JSewz6tsF7gjtJNoYocjtLrKTNjWecL4GvNbQ2B",
  "key27": "vzPrCZZuvok7ZRSfBtu1Tn1FZR7jM21b7HyhiqM7PGAo6NLVoxi9zyLSHv6AnT4QHQki3xApRf5ZXMkruRXUYGW",
  "key28": "36kGiaDeZC9MgbrGVKDkQPXNzpcyKJEM6V1TV4F9GJrQSAYwbrKM8qGeYJT2wjUkxxzKPcmcwoLGKTnqvoy5qyCe",
  "key29": "2h3KVcTRiubbvXzyRfTGaLsofWrzaYjytzsDDjWFBgcJCAa53yv6Hi8zbN2ZXxkfUMpoYGqzViz64B8p9ns7fVuo"
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
