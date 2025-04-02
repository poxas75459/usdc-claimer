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
    "5wngXu4mP4bKaeJu19CK2zV64eAYzjhrS99Gx3mKL4PUyyAZpB4QySuHLJQey1yTLknTGefGjkSQ3BHednSm4MmU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UBBbQVUG86tfaDDGc2uXNobjJNzqqKqpeV5cu8j3DZzjn8yjGEW9Fwu76dcWXUwuSzt1NurzZYwwQNLoHxYchku",
  "key1": "nky4WUQ1aWfEWjnfditXgjg9TLaRmKB7kv2FC4yQ7z7o4ugPMf9KHCcgnefnagucpAiGu2AtfKVpamwb8h9gDB5",
  "key2": "2vPQmnRCQEUj1kf3tHh5S4uUoCuZCEvr9D9rDA5sb2kAdkSwc1G4iKgEEBP1whciM7A9qEXLVADGJTtu9uSJJ1SW",
  "key3": "5C7bynvzjJQLK2LduGGs86CNzszmQFwwFPuV3uBmA3PArNgX6dLzhZoyt2d9QSjt8hUZMHtjWN5KyqEtbphQDZV7",
  "key4": "62Heg9axvWhhH31mvnGjPUgEhAPYzzNYb9j4qWDLgerH3B53QkH2TaF1LRyCJ1hj67MtGYJYeodjrVuBuwhYLrL3",
  "key5": "5LegPz4C2DVbSgDGcNkkyKqZLEQVbPfkjhtTjg9RoLm2fuwJLRV88o8jtTUiHAGoC3eaSzWKhzECFTgzEowaMQa5",
  "key6": "5mVmcJxZT9gLqsZ5oxpNg3nRo2XSm4NsotAHR12sRiM8xHmKnjBTEyJzRYDNX9NUzU4fezrU1tkaLUTAYZf78v7C",
  "key7": "5CzRp3meLx9ZQctsuxsvAbu1Z6W1ZUxC5ito2bUse4oT6NuQfEbvKAN1NeFgftAHRcMyrsyrSfZ9eSTK83aW5XLL",
  "key8": "2nZuv2iFvQPsQCRydDx6LfaHY8jJWPv7hiaXf6N4tp7d42e8ESAGM1bfCrqHRoKonTdQv7yvKiu8Fc7L9D5kKU1X",
  "key9": "3ruzq2AET8QmBo7fAefrVGHm8SFowrZaDwB98RhRGQCXWCCifHznuYwDbjJqnhMCYBVXt5GHBEjtBoJvqS31t5Rf",
  "key10": "3tFceYfNo6QGrp7WQG2FBbNFyKVViUcySaMZdHBn4TGUmqKJFBQEzk5mxC32d21A54iSkUhtCPs3kpt4bvSsgCFk",
  "key11": "3vLSnGSu6weebPxMm5U8A4idDyTErQWR8EZmFKKTJxt7hiKf7EmrJLoTEJwty9Nj8Zbmz8pjHX3iVpgurE23bF4L",
  "key12": "3xGjkafXrwW9juEc1roPLgR7hUDBwjLN63dCHJPzDbpQjsAMRtvXysaKXgQJhirhwEEyDGydq15UJvzXvATGVM1w",
  "key13": "3mCBqMnwtWwB94Fdy1vCig66zWmCaihdAL5gyvgM4d1rnTMjkLjXVTu1nzS7RTcNQjYi8DLvy7aDnBV3FPufHWF3",
  "key14": "Dbr9ohbrg99LMqfZbd9Fm7BToHUduEZgB3f648E4hysgcNbcsjFnf4hwRHRgPDpr2aK61aiq3b9RzYxf3D3iKaB",
  "key15": "5vKt864XQnUd1yBJj1STLzMTgsC6kePwbe4Y6eXwyFcchM3Siyq4cPKVE1EX4zghwPZiPEmCmesdeJtfxxJf6d83",
  "key16": "22eGeWdLvkB3pXG5Kiq3HT7n8mU27uwWe6yCJW7pMX9tqMTRdsDLNZ22zAQ3Ywq5oYgrFfJxTQm2FGosrkYcaFyP",
  "key17": "SYZ15421B8o9UYy2zNmHBpMWxMu2Af1TcvfSoxknNjdbYZsaMs1qBqj5F64N2n8Ti8VFqtuJcaPPzhtTi33AbWU",
  "key18": "3KK2KUKwkqnae7R4tHWGAkvvwHsfsEZjDDyr57mngFkTMVMWtRL1tnue6o8NEaWVSuK2ABtGs1998oD3uBuoK5oM",
  "key19": "3EaV3FwVeCie4fFFVQ63HcxAKb2yMj5RWcGpRwAncN4UTcueha4XbzCnNeGTG2UBB2G9ufDBMWtk4KD32uJusrfJ",
  "key20": "26B8r9QD9rN8gXjoAWprftX59c8HpTqpS54RuyipzWVbGp7J3C5R5N6foAyEMxcjNTp3CrM5CsGG4gsC2M7jnrZz",
  "key21": "2CuNdrPWdREufv6ZA5FDzbBnq1BiErUJq9eNan2Ru5TvxBLV9h9bdy8B7HiPzfYyC3kSihd66RAu8VWhntnXLP36",
  "key22": "2g1yLVMKPevk3qvxpCLRWVZGP2QnBgmNqnbdZpMAQDqZpG9WXMRozM3m3jhNa3PdLPcrucALmxBqfzQGpUFA6h1D",
  "key23": "v5gYX2evx3vZbmxvswQQgS8TRGFh7sw1TWHsDmtnf7PW16ffbUuRqePpzwQeHNZZp2GMXtWH4j5axt8TcSkxbJF",
  "key24": "5NRzsQjZd716pwN6kpPnm5WpycddYUy1xvgn1zBhzdZruBEXEmGKbTxTfoWANizTAaFD1EPVC2nQjB8yiWuhqB9"
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
