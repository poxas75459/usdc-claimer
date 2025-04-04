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
    "2hMwyMtGYQVhJTqYTqKGSmfq1wbb5kge7kDmTQtxecRZ1N2iYBycEzKoU5jj8zp1sAyf2PguBGa8jB8kuQfx6mj5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "122PG4JsY28d49KfwQKSmqfpfvHrybQ9VCon2vgstfgBHXwdYZFRmfLb5xBJjXYkHA1DJv54HTRB4wJsjH37KFEa",
  "key1": "2Ey8wh5MSVkrxmvQHcCmvJ7wZQx1Q4dd47TFBUfdJgQmZTSPsA7w48ViqJ3duesK3LkGs2CuVbVunXrfC38m7qnh",
  "key2": "5wphPE6D7oe9aXa6L5AUpSmqvmsixSUWJkSCSebUhDf3TYKAeekL7HhXq4dnc7qzL3GEu5UKJkHY9t8ujuh1xHLJ",
  "key3": "55o7Mu6oo5AVJycnW3Uyj7QgRB8PGBxidHXFF3t3oxpDGq1U9SZqKQu3gKg1tyLo2rx8nkNVEgEYTWBxVopeLhVD",
  "key4": "3x1SwnnowkXNoxYgqohgGXrjku8cAHuq4XtA9T2tAL6nMSieQUepp3b3o4vuhRvzBqAw5mRvUtNTtMQQaV3zZiA6",
  "key5": "3mPEor1YyDkxU8Gy8RTuNbrmhVHpDjJ8HvEKHkmzfSXf8Vpr78Y1GSBLgRM23Pz6orTYAnZAnKCYXCB7xUCnY2Le",
  "key6": "3MFCoFKJjoFkX1m4xrc7GXULCwsfNFhex2hSrq3s3AyRs5kVqFuDXggxuNHrKfkrhV9HsVN2Ki3AvT1aAh6zX9DA",
  "key7": "2X7Lu8rbQWKWLB31VD5DnRZy5Nif1Ur5AxLrNnPZFQjc65yyD7ihj2nYh2UPTGbQ84tnpRjuVsMWxJVQbWLBhoxZ",
  "key8": "2uefY2rP4YY1j1EVtHHowazFYA2DgaB1mFpRwDQTUX8GGxb5DvkXZU31qdxcwQjYVz8XEbEzpEYv152EpSmv5eZL",
  "key9": "2RCbEVHY9MfiXM1jXrNR761mNYFP5uLyppWAt8SKhF4dwNNyzeLqmAozBAZYrGm7VmJFXauiSC4tG7q35KhfaXXs",
  "key10": "2y6qrEJWxASHiUbFLCVUUa4ymhm58esjom68HUDJWPMQgKqhsUGwQgfLMJD7NbqxtejA1hU31SyGLgz96ihoJzsA",
  "key11": "3AT2xEspPFuBoCHGRXjQNJ27Lc6uxtpYwacUMbUvnKyXs5ePmhBjWkSNyyFrnvNDPFLrtdTFTQVRRbUFxNZAS7hG",
  "key12": "5trWE7twfPkgzQhxJxJAoyjuVMfSk8nzubuMC6jYqR9THrUQaiGQ3Xf92DHty7bt2ZboMEbWinYUcFeQZiULwCc6",
  "key13": "3baL3EUi5VxbhQ9bYmWr6DBhw4e72KgWG7BpCi8zR9JuLy1dAbgteKkkhpRQ5XpjdaHAPwwAftpwUCh6PVxTRX55",
  "key14": "4hnCXi8GQQaneZr6T1XLNck5cZLGwRvpyYbv9t3NkfohRsX4FFpCwGKw5NRQBFB7DnKkCkGRPhWvZW6ZpTWxZq9w",
  "key15": "4Y8Sqa58KJoBDmEzjsDFMmFoyGr5yduhV514ubYc1AW3qbr3uvNKZSQUgqZAW1KeedGQFY7n2Vgxqy1y1SoReQjw",
  "key16": "5jzrYukowKBQoYTojz7qURQ8kZDLdX3Ltuyo5kDtMPHiHPTNfZhrYNanwV2r16fCmGojyajipnUVEnePEUmk6DZ8",
  "key17": "4Py3HJRMJ7bR8zTHUB8EzzRDqhhYTRoby6RAKtFdXP4jM6aW4mgmbnKbwVdtTxxDYhwF93D3BfdjuFQiqWhNc1u6",
  "key18": "5zMxhpBRs6EjxL6Fh6x2cZPpEAR9nMM6D9ThF9z75KpP7PkpWdm1XF15Xq9gRbPZJAVH9z5yo674TkzhWZFU7U1A",
  "key19": "5CeNtkREKQsVoytgH4sPS5ubWUTXaiR5Hfy1hxhFBhFLEvQ1cC2HDCDbVdioU4AigH5MDZHy7ts98fgfDDemGbGk",
  "key20": "3VfhfLzY58kx1w7wXiYCUaKrXY4G6pLdRK7VbpEafNnKaV6N1Cn4jcyxYqMVYTCeMM4b2scz97hqoT4KFNPoTQqu",
  "key21": "3ciiGymbwFosMhTaUdzXBRSJnntXYfpknTcjXgbMbs6mshqmFdoSp9uyMcrgeuCATovUrnPe32KzqajGx4zMzSeU",
  "key22": "2rgYxrC6zzjL97Z9xbqq7FSS9MnsTHCHaWV5JUdrBuMrmXXcJ45qp84yrFKUB9tsAm13aMLxVZVZoT2hVFdEBufV",
  "key23": "2tEuKd2ydJUFr4SzivCzs3ZnLBC9W6HT6cUxCRoQtZVZTc5UrThxzoSVFX3FFahKM13Na1tJ2zDCVzAbJNYXzrns",
  "key24": "4coCFxguUo5h5jZnMWvxXTk8zWo2fwf4S9bwPbvBzpQKRE9UjehhXBj7ShZDgWnajQ9Pc2L84pDF5t7CAK36sxtZ",
  "key25": "2jW2CnAjKro73ZPCLn1HnHZXkqPscWxCSqWCNBk3NyHuXs9PDYDdNbt6Nfmszbq6rMjeXzHtAUdnfF4FXMi77PAY",
  "key26": "YC58dTx3yE1ojdJJHbXKrjTyM3PFjyFrAXqnhTChhorYmyyyfL4qTdALdXeVw8E3Jq1q8QZ689Hrgu7aGPySVVj",
  "key27": "3wAwSudkuAhJbDMiaeFTFgbfwwBH5RSJrLM5dmP6mHWitmb4uk3xCKCGZ4B2hMBBA2cpvu1ijYJ8zkNuEYMY7Tpv",
  "key28": "5drKUtgLRnLcKrk6PxQYP5Aq6U7iKk3xyaRFoBcJb6GwmNqRp3wEmVdMCYboqwGXzth9A7NQp6ogseKftoqL8Tz2"
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
