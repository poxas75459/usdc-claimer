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
    "8NTJQPBtxxjNwKxsadiXnk2SzZxvrA8Jm3LqYDWpqCzy35LapzbjmmaMC2VSpNctcG1EeNwsx3DXHJ2UXbjtD4L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BbGPKem3YZbwfdsPzP6rYYrmEfNTaqz2yQh8MQTwgAJ3rBVXAypGGzDrhAerV7LGH3irKJJzb7dBbs7Wc4E8LT9",
  "key1": "4WseZM8FXSjucGE26wizbmCHwMK8TrAwDWfM3TLLH1VWwV1ssZ5E4BZAzj4nGam3izEc49sTgtTP7ox15XBPdUoD",
  "key2": "2ZFUQooqABqv9tFU5ee5qRumRny2tGMNitdzQvaFT2bQPtWRoQTygKqr56ia3MjD6FRBd63VfvaET38X2bJnfHBN",
  "key3": "5ps7Yezkp2jBDTUTC6KAZRboEK1wKpxoZ8PTQkZGXaNE6a6rXCpwKEf1AB9y6iPVTZgZxwnNJeTMFUTHSmAdK3Th",
  "key4": "66xho2NupbRnsLJwDGiLZv2rfJEPN9VUmLBiCNjbaPpV78U2tZiwEkSQtvmMfwpfu91y1FuzSdrtaWukpQbEjuVB",
  "key5": "2NoxK6QmkvysbTHKEwV6pQ8R61o1Y2AQjVbaxisv8cDuuANgCX9yjaeAqMwMgXC2aoBT8GwXLd7sbjxskju278h3",
  "key6": "2pzsamrpZXvzWRZQvDfEdR2rRQ2WAzk2qrYiAQUidz31d6qLvDLc7H6WREkczxuW36KpnsDSVC3qhRRXeb1VDL9S",
  "key7": "3kHH5id6WQYE3zbxdZHe1K5d1vS3WbebNaVacc92NXGsoKQeWQ4qvy9p3jabJWXauBTU9SxJwBYVnpK9q3cbPCEo",
  "key8": "5X6rC4wQn719cUzsJtotBqszxXvHAjnrPHTv2Xb6pDQE5f7yWiycsGE27ndsYwHPjbaHeW9ka1D6iDo1SmKvnu2r",
  "key9": "gHNLJPXvhBBqqMKPVJNX8cgxGGZSMa2i1u66Gp4Y5ZWhLGCAnik9XJDXBPZBfyqnGzvHUUhe8vMR4eJs6zYBiE9",
  "key10": "ctUGPCjNcG4jDWf94MgHfAYLQnE7WkqoMwXKCpJF5zqNAzWRWmJMea1RNG6qPnoLNFYQHBntWYkwdczQuUWn7Zz",
  "key11": "hKbTxMm4ppvHJH76j5ZNNb8XHjXu57vhBGjs5gCc8K7vz3a2dEWDjM6NZDUMCPzTsRfE79h7d39tUGAkTScMhWs",
  "key12": "4fZMhzTVvDWLF9aeTuwup4hiamJdtpXqnhGaL9MdwxfS8rfPT3tj8heegFcccEy8F3uDcToFnoxv25dZLQVAxc74",
  "key13": "2uLHRMzo9bJLt9pb28uAPdwqHKN1xxYCV7SV6frmNCYxYxMhQVEy6WYG4RGSpTbcDrZ3jqwfgkWV9fksR7rm9j37",
  "key14": "MGDQMeGx8XuHAx5rrhREF9rMGvxen39jaVydKkHHrp7sFbXNCZ8osgKWzpYiMFkcQVkABhmukoVXN6ES4wLAEwy",
  "key15": "3CpGg9dHTDg7Fm72bhZtH1gCxmjFR2aPNErwsynYVaKDVqtyHN6aB53wDND1WB5zxUEtKEGtZQWZbStKdPMrsLbv",
  "key16": "2sqNN6jfYBSbSm2RbnkfwR8kfbmCqh4rJhhSmtdvYPFRJMesUW2bQYeuDYbJyhB8Czzmeb537kUGaBik1LQRzTGG",
  "key17": "4W7tM484ZatcNDFYPVnw5qCE3izHtkAAv7ZA3R4UDkxSnwGaDivsXTv7Q8BHKB3xi2cxUBJy28B65h4wZBtXMQqB",
  "key18": "dEu5Y6DtojJgE81CWGu8X2nVA4bUx6h6eSzmwBu7D6WQ2hy7K22kX7iHA7nzr1ScnRaP7jFjv9dZVgLKDsiA4w8",
  "key19": "4hoG6p4eJVwrLgCngh8r9gW9zZaNbuYCbXGBHQYFmPHo3GDuE6gyNyx9BCkjmv92VZ12ANxXs1jgodYzJdvKkJYb",
  "key20": "5T4JcedhjWgX1wQYR3aUDoSBXMBpK4pTWVibyQeaQRV8jV5hYNDwkK4T4NV3GARG8C1xqKPG2P1W4L8kdPj9ao6m",
  "key21": "4hbREzu9cenzTzvJqEbh5fZhnKX7G81pNPrjGGWMgmKtZFK4NyXZbcZgwFEVyivQukjg63Qxstyf1Z5VNp71bKyS",
  "key22": "gjbfSxPrcMPyefHevtzKQTVWWcCbcLfDtuwDMxWDguY3wo2UzwAVhBirp2Nagh6Q3QwZjrqf5UWzq3zQYDET3iK",
  "key23": "3sUq6TmrkGgVs3mSQpoaWuS8vYmaVXEiWLp6REprfZd7v2aQgwjLNZvXh3vqPDVKFw8Tkxbdn7RLLojSTUPvAp4z",
  "key24": "5JawpJ2uVSUaTn14GgQXocHLPxmToq7RL5RBY9bEU1NME6hvoYZi1GQA39DXhjhwDorjr8XndC8rLAhfsgi1cGyv",
  "key25": "V5K5HJcpBYwSiojsEcVwP3Csc75auekC4FXajN59HFM54McmkBvLk9rh2q7RywDAVMHpmwxCWXkugvUs33oc6o8",
  "key26": "JpaYB1qgDmKyZ4RtT4xmT49itFgixjavq2AhAuN93C3BHidMiGKowG1bccc28EUaTz4kboVcejFfqdBei76FtJG",
  "key27": "NHbUrN9U2m4pFW3vxWikJcaSzjTS1UBCTLuFKxCK2D6j39xj5cTsEAC2RaPg29tcSNrF8bhbGg4FzfMcf2xmqpd",
  "key28": "5yCcS9XCyj8GWWfPfnruyw49gh8ZhabMMepDeXsyZLuVt9HzZZyjME3ZQnafNxcLXnxK21GaJBwaCkbqAaeahDAg",
  "key29": "3q2F36MjBjs1LBM1uwotmdLr1FXRrWcb555EMi2EZgv2wMazKoKK5cw24oRfm8BT55CDMKHyGc6z3bnVCp7Uuf3C",
  "key30": "425xWvNKf5n4LoZLaz6VNJNvNdtjr1vhEGB4YogUgCWZgDbMVxi1o1a9vYHuC88BRF7kaFGVeRgDUQWTKqRiNgLw",
  "key31": "2rgv88LMJFTyda3wCrFppezxJw61bQzjyPvk5BEYC9DjxSEabLWBBqEgkwvCueJMyGCbhjiFrAkCzmirJtxZMtdC",
  "key32": "5qZVpB4BXiXfxdfvesCuXiQbEau2rfAshhzzq3sHFZpJT9UJn9Yy83r663LKSEvXDpyC1yx6Ugh8Wovj6dsa7rYV",
  "key33": "37B711tCdtBwUFGLdP3uUnQsigR88wunpcRngVtYAEf5XXrCDXkNvAqtDGFaFx71Wygszg524ffQR6nFXcvxsVjR",
  "key34": "2EVmhdgiGn7CG763DhmeENZbxqoTesLPtfqjxpA1iZGvnQ43oFVx6CJHX24j1iEmDrSaK38JWc6WKVXi7oXKF6o",
  "key35": "2pyKcpxEyV96wxxEMvsH4joGbvkWEKiLp6hZV5KSuwWSfjEPUNQKccehQU8ndxpiec1G52E3Hn8a2ACZ1aJ5JNUB",
  "key36": "4ybPLYJopq3snkP4dY5TczEhCbxCZxtGgaVkp7RCgtQh6CHhsBJ1BDTm5Vne4VJSdoGioF2H5HNZ5V9wAFafRu5P",
  "key37": "57vqn76FpQ3wtUbMsBGQbDtMhNML2HLYhwUDxwhboRQ7aYcLM3sfg5ptVuazdscDm6H97MJdfeUtMpGgENfJ7kS9",
  "key38": "3sLjK1QYv84Piz7ihv1rgc2KP9gCUNo4C8CY6siD2TgHn2YUwXpxD4pkUkmjh47EQPfyuzmMnKrQjNnu7ccHgFZ5",
  "key39": "uBLuKyrZQqQA6ERKDS7DxsGzctdcBmFQYnZ4qRAb7D5YQsSh1G6LLBPjWJmvWwtVfY5nyFQYLF7PQUcFatDVVq8"
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
