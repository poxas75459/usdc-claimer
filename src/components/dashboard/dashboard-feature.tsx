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
    "4Kah7Xz3DYVSonMBtqzByGmohcmhLVZVQvqRpSPyyeyT5GV13iM9mfb4PjzwH2pfD4wMLXu5vNckzDpgyHrfmMit"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jVsiFW2rrq3NnUyDzV8d2xKHbRKGQQXbXvBwcST6RRvmheh8fgR9qiSv1xKoK4ingPWRVyBQNsD6b3C9xpx9Zeg",
  "key1": "A6A7MRUX18ducdGEgDWEq2VxjXdFQiKtDRytEKBFkwD43E5xZMAPTgREhHiyEGbs8hnZhRUQ544JSaXx7SU1X7U",
  "key2": "3zjhvzQ6noCoyQpjzZhqnP7TaiZwpuBvkj681xkTE8or5dcbno5FEiatxDS8qsc1ssF41AfqhraoPQRfU3mnpcFY",
  "key3": "2heD9JYhcnaLuhB3aHb6rJ7Ew8q1kJ4b665KtuW4DWEfNdoFsA4RCCesVTC5eAz11WQxS3rNs6u981GKZrS9sxhp",
  "key4": "555ZgTNAegUSLPC3C8x2Qsp8n2GpS1wGDiBEXNqY64kzy1zSWtmqcBFWxpusRy5HHKqmSeBfarwbuX4qfxuzDiRA",
  "key5": "5skMUCqzmgxJNRHNta2XzamxzL3RYk64ed3PjBZpkR2CKC1MbKJboYTxfW1seZUhaXtWYAH7HNgdQ22dZTPY3SiH",
  "key6": "Mgt9yaU3GKceV3HwUao3TamDoBW2eb7n2jP2rrMqFuRGv76Ae24shv4iGkShMdbAm44zetGz92tk4SFcXH3wriL",
  "key7": "NtmQNXttB4BrqmxLZvj4hwwZ4vaNJCdFBbREH1EfsNiC6kX7uS9QA6ZSWcDYdDoTMBtHNKWY2b8onUamqht8cpw",
  "key8": "Evc7d4ehkHQ6MbPpByo5Fvimm4i8wgURMeCmPv83G9S1c7TdwJN7UjafT5YKb3JYn98ET86AXZC6k1FvL6wj4gr",
  "key9": "1vLnDA56ycW6AFvrkBW5tmqMUepkjL8wmUsuE1ooS2uq922Gj1gQLzxH31fwkfPJfDdnCfrxsmWqiCvbd3ezhq6",
  "key10": "ztULZxWWgqA2rMxRDc4uZ6XzygQxQTk7HcTmY6psaRNTjHz5UMWayqcikniUcCo45JCjskRK5bFu43dvLj28TxZ",
  "key11": "2iSyA4dYxCxuCMTikoVpdqSmV8KAkGjsSfvYqrJjHZcwo5ea1HQYxgDqcpmjYYiwGwbBma8RT41372iPFJnmGcmq",
  "key12": "4oJULpUaUE9HeqWYJr34dqh5TeHxMgi38uVMVJuKqsmRRPmqdCA7aQ13d9dmykTEo2Ag9atbp5eGweJ4duYcDGg3",
  "key13": "4wDfGP4jdyNDkyGzVKMfowGKdDUVcY5J422GLZTKP6Qf1MyaLrbwQRhiriuV9DLDDhG43iiXFVWqf9Zrz1z8gLSm",
  "key14": "TD3mWmSvJauHnqY2p5zx5ves45Umw5PCn6GXxYjYWH4nXwrX6cYjnA27TYWGaEpcm6fR4FeKLtLCE6X5ZU1SSrY",
  "key15": "yWZnnXGWSAsHgUvTBz8T3a4818zGdQYtoqym3NtYHLnRJ7wMTihy23WHzjS4QeaXDJDQMf755npG9R9jREvk3CD",
  "key16": "4KzfXibNnqWKHv61AnsrNUK8RhdjBodruv8rruwUcV7fAy6uYqrCkmbBsPjRkxPVzTGWWdbNc4iiaEfC61nxxiv4",
  "key17": "3VpvjMs1SGLDjZJ4DgiMhp3BnCkhZcXW5hk1a4qdL7KauLZLwfaFBLPdwVqadJmBCthsJq7uA4GtvCf3TpUkGzA2",
  "key18": "77ft7Wu7tBtMJAZ7uPcMKYpxcWN5MT4ntg3vgwST4zro47eQnQvBnrn43Jz5BQs61MTTa64LAoYmVf8n8SAupQW",
  "key19": "5mGq4vm1EVrx98MXZf4h5NagbwyMinCVXEoqsZVTG9EJkcu7EuGX2WTFaaYeMmHjHH3sQbiVK85V5Vp8nYDDT1xb",
  "key20": "4dphg2SAYUik8eYZyfQzhV8hTSmzs8QzBeYX822F3ZXpP5q1rPwLeQB9Vw4VYXa5Wnm7ziqiK3S7fRbv3NVzuu6",
  "key21": "66RiyY5z8tKyqyDsT6VE4mmnzsgjtYntRQHhnbK55tTuuuVyueQD1DAxsVaxs17ZtnUCDQ17vbBkWmcB6ivzTVC1",
  "key22": "53rPbDWB61TbYcWWTvPeRx2RxAgd9ABT8LwPyEAXKszGSv9r3cesaP99UH3c3LE53YYdVkujjguUy4xk4Z4UXS2y",
  "key23": "2hFRbzmAUvrJceiUuMKMtzLVYmTRZTZZpWDit5D8hL65UDcoNJhfpZCuPWkjSnVTWvoqsvi9geLjfctwjaGatrjM",
  "key24": "o9oFGMo9ZHwxBoQzToL8oJyJtjaZdr9vZhqXr5FDZUeDD65Guj93UfPxJtGt6MvYHvp8QASmzMDKbhXN29oi2nT",
  "key25": "52rCoxDbAUeoV1iKgo9RhoUq52bQdCxMncDwyjnn9PgM82MUgonAAvXR7pK2Au8Pr7fJn6Q4QMQJM8yXUPpn3DiZ",
  "key26": "3rcz9SFtBcigQ24t2Yj5u1oub5HLCkwLGRAvrQdz2EkYMNn5fPj5QRULuVqEYiuvFxi3mpnT9PdUBiWLykkRwZHF",
  "key27": "3CUknB2oBWBmX2UZgZWKDobqYMwz1nuuHEbBeEZMViH57KnrwMpnPrra6XnVvpZqsKN6XnwqnUdMjsXz4XqkSYHo"
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
