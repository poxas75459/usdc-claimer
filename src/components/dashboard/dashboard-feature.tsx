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
    "2T7hffZhwbr6QQTRwfWfWhrwT8qctbfW29GmHMMrU1mYMsagRYk1cdFSfZwxz3dQtPQcwioYAkyH1SFPNkv43xMJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mqC1f9DWAwsfwyPpuEgJrn8G3rSoVTnqM8yyiWhPpgXrnnicpyNT9RZyXNXiinPNK1XoUTJoqEoj4dWFRfYpRzJ",
  "key1": "3G3s6rGwCqiBbkJ5DWxTaRc8BrdBY9BvMZqW9o3m4fuV7vsuDnMSdTrWWq6XHqVRMnRN7h8BBtmX561tTC9YLUC5",
  "key2": "2fpPHBYcwP7gXAq2Xrd8rB7xWRZYHzwLja8kByfaK3oXdFMbUZ3nqBZjVVaTiFJztmCC2d2rTy1wFHVsbkcqUPnT",
  "key3": "4ECDUULPcZ1SAS9yGRKWXYPckbdaoyEEyeZW6KKGDVyqco5HYyUoqAazRYnNqKeQjTaxFruRA7i7CmNmDCLfz7FG",
  "key4": "5x3jqMu2K1Tno4yuxHG6gEWF55YkdtjJZdn3cB91m18Grg9JYCjDja4wDMq2fRczsi69GuPRxvoW7V9i26ABs6S1",
  "key5": "3WrPabpf78bMsQ47vvopqCYxgGmV1JtUQ9653xuTCmqEPv1o4NbgKyKGLamF8nsJVaNpVbP48ETHctvStAvmRN1H",
  "key6": "2r5hUkdi55DS9pkCPztnPiWUTAAmrTxf3uT597ZZzAnDX5F5U1uxeQEQJrxgnXZ5wFvyRFiDhEuad3f7XJvLrnGq",
  "key7": "4phH8aGJsDMn6uSFLsDQrnktiwkmooE1S6sXuWo6WwAUUDxb4odELn3jccuE9JKR6ei619VJgNbGNMxUv73Jco4i",
  "key8": "KvN53tkuTaLBbunkWWmrXfcifbHPonWrTqC2TsrZo6v2LZe27UGoHsQb8yMTa4mShMPvuCxcA5qnp6skYrDvYhw",
  "key9": "4P4B9tcT969Mfn3QcmQDB7GEpEpqVhZzLx2SPCvYzwBPK8e814vz3uzaZLktfw8Xhwrj86v2zJxbJW1widBfz4jh",
  "key10": "4gka5BQFdmg6UmnJXd2tBbsYJhm7eGQ1M8bKcsr8vooZGhQhn4bgqZVxkMS8ETchegE79SU3mW5xyDPSnJv3P5Hf",
  "key11": "9xQML1eJrrtudSac4GQPprf2buBnbxopWfZxRACFikdepG51RXJpLrPqKczNy5gaKy4b7jPsR6wusEwzz7GzV18",
  "key12": "2DLWNuSWFsjXdxJPKtvmbBqtykjcxM7QK9e2YMDxKLEuAtGegAjhreT5qZMBPdY9pXgZGvGQCpj2piHKBPdUgu2J",
  "key13": "2dcDwz9u9e4u4LjJwZ5UWYqyLbGYgJArG1ozQhm3ZmMyHGCi6gGdbCsKg8CCNdfbFSYvka6kwehkJDQU5JyoH2VA",
  "key14": "4ajUaLT8opuEfVMGEtP7UM7gz4w797zwQojQs4bXCNRN2De8Q5uP5JaJauko93xFZLhpVj6hjP5B3EKpdkpx4rre",
  "key15": "3uWRZfmFPKQRkoHya9uHyYk5cKjZC9GQ9GK5UDdBmKh8it63nRhAprLZkViG3dGH8aWZ9hjxB7RGWJgjTgayfFdC",
  "key16": "2mKqFmorHTjteEsQ9PBsydp9G6ij22H3aC66XXsbFn7yTFbmcB6Ahq9TeJpG6RwT7tZScHJC1HHDEFccvLYkCFZe",
  "key17": "4E3YHUmmSVdMGxHsKAB6WWQvVv9xNip1BGzDNu9ifHTXcPJpyUF4knDUh5FprmiEWQXmdPJsezKtPESe4keWRSqf",
  "key18": "2S2zym6xx5e2uLmn44aWR1waMzeeeUZT8fVDX9tEPSyZCoUAGhvR6znay7sfBcjzhQEE2Hvsp5CvtibbAXB7fjtd",
  "key19": "5gZ4opSUAZKMSH9R7HrWNKBSPkRZyeUSv5UoPHUgnVMb5AqNESFnLjuNcDVeyhChRRYssVvxcMWs6gqox3jkYERo",
  "key20": "3WdAvF5XjxoVGFkiThdf2EzbzrPJ6jgvpCRYAeVzhu7qFHXhEd3PhnZvz2G1NH5ETqM61ZkQKh9quNyPfkJL4kY3",
  "key21": "3UnKBs23DGGE3oTm8VvrczpnDLrrbTe9GLdcgA6Rn7gG1tfDoWNzhyQgoDTpYMBa8xzEVxMsJq8WWR2qDt2W72VT",
  "key22": "4C9fT4nSoYXBECm2qS6KF6rEFuhFzym1j4YjwYhRUqFphu7USamDTrt8KqBK3wVEbqLHErispU5UJ5Lb8UTqMfXU",
  "key23": "5TJSUuSJubUSMLc9oNBQB7gd7NN4MAgzKWirWMP5d66V7KLeGJrYXuY6R4mZYv1Vrh3F7cMyG4i2QBWyNwvCGJFy",
  "key24": "4TiTYoHNrX4Am3KQZ85FYkNqmJD8iJHtErx6y82q3gRS4sYsb7hJir4aEjdwbRRTkUbJ8L9U9xuBsfRPD3DXoihG",
  "key25": "62d1cvRHNDBT43Fqo4BzE7fMY4CHsi3dkvZ9jTp5P2qtdn3STu1Rbd3bmscwVCSYGNpmewViC6yTaX8mpUVT9p19",
  "key26": "3auWRa28oC5BH3YdEfZHPpV2NWpeWF5Wfa4tcAYb7oA4qWmC8aF2PZnEkJLYsk4Y55codrSokntZaMiEzSMGJ7Pb",
  "key27": "45jXceTj8LC3YVVGeVHmZktu9bAjWiD4nkqFMyPMqtxRpfkqEucWNvreXHjSUUZeZfXdGTAfNDrABAiEHLbmg8Hu",
  "key28": "4nEqKX9FfcM1NrCg6QbMqf6yKWq2mHzXj2nQFao6EjPNLBqBzxh2UGGfqpNuuiNXxuxL83f7UsL7qDhs6J6ZWybz",
  "key29": "5US3kqxaVc5RPcwsXZ41zFvro7tnMSh4xczAjdiUYNdLCpzLWAi2BwiRecppNsBPqKCHwxcfj5v28kQzCycx9TZr",
  "key30": "2m5293UX21CiBZXmjGa5Axx4phn76Rsd1WGGkubVp8fnDm5GfEqu8x1E7MiVxCY9pXEgq7ERMJVFmMsGHNFosVVj",
  "key31": "vUrv1mHgVQbh5teDnAmWgX7FCpmUHxFm5jcjRdX2p4sPY77tZCxkQS3Wq9GigqaFNsawhzExih6V4jmcJdEocFc",
  "key32": "2KdyoSq7gPGPw2PaggHFEDXRUbKGhydZpM1Rt6raeH3MUo7qBo6Mdn3dEtVaSLdZG9WpDe9PAZNnVTZjP4RAikid",
  "key33": "54J71jwprRuJzzBFPCv8GEiBPxcxtZJ6S8m9FAVaUuUnbWUBm9wPFGeapEQ2qHncLSrghjkGbQ6TsHNgckde5fUx",
  "key34": "32EQwiu99Jxv8mbmV4nwt6vysvXSXga97isVYoFfDXRZM96cR7449J388H2mam4iTN7MTibvUM41U1Yp2uwZKYmf",
  "key35": "2XFZYusk1HWfX6iT2sS2AQX9pL3MzAzeGqQfx9mEFbUp2Zhqitme26FeXMpXJEmEKdpxeX49gunfVtnZ6rmRs9KC",
  "key36": "2ZcTBxqHusCDQWSTfSMwqay2b1zVWuvoWYWfLLm59iDdcQNMM2fzBbtutbAiuG3ku8RiyjNuX1HXXiHTBh9qTgh2",
  "key37": "5dSRht9KVsRB5XzGbBPdkpLW5kAQe2mF6GhkAXTmqcrwW2upXej4Nt8o8a9NBZn7b6unN69ZnttvVPVB8VumUwMw",
  "key38": "NeRK7KmcHW73CkBW9vrrZswi53yc8Fwvpo6o1a9ARH5NS9A99BVVLSS3nAyCNZGzsz5hkxYMnvmKKji5w7PQnrW",
  "key39": "65wf5cKgePn9b3ZXUkjifSLbhfkvWEJ75QHm5nocXpC7bWRiaXogfoQKVk8mNPxZjfDXXN94YF5V1EcqkqJzbEoZ",
  "key40": "2qCWdSisUs4gYoHbUD27ZSbUS4t645EYi5RsRpNYnTvSwtZM8shBGkWu9hPuqy876iJRLifKmnzETifH7XWSMwuE",
  "key41": "5vMwviF1gnSPqZNDTUXD442GCVDLuKTwaLg7ozYSbVVYWwtzBCr2CymFDhsgxvy9F4mhS1DHJod7PDkCMKTJj5c7",
  "key42": "4ML5eaz1fLFyigWMEtjZKvkzWcwQRWcwythCfB445MLFkzi3CHSbviTeajfBYYsfNNpcLBasYcUpLtEAaoLZswGR",
  "key43": "3UUEqGXcL86pPmh9JwUUAHoZWqw45FYUBN1uQecRDCY3SZt5koSfjS1TbmUt3dtERbpeGr9PPoJSfDok53JWaNaY",
  "key44": "6iKmUkxzuwNiMgdLhR5fyfWq7mdsMTmufnukdyH2cUxVqYukR9t4sWBQxCAHXUhgwgtjmVpeV6i2WD3PaxTMMNo",
  "key45": "548VgSr66S4w6oKdcY6HXrD8RnspTZM5p4Q8SWT6uyCTnXpgM4ewiD1hVUnrJJg4f8DS8bUidA34EcxksEHuUXQ5",
  "key46": "5NUBPQun2dJB4AV2EEmb3c1Pf2swoTVnjANEvp94Q6LsYn6a6Q4taZB4rDdaWe4zk4Z9wALGSWMB3CxSKMMaTUwT",
  "key47": "RAj6R7SMM78YS1ujzhHPUX7ivEkdfx1F7eXt8MJ2agtSECdajGHeaBDYsf8qcseav6dJkYf6aKNDHgdinmRuuBp",
  "key48": "7sL1q8fyHUvi9czMF6XExacFgNS28tfcs3kyGW2NpMGsvm6nQjY72T769MiL9k63hN7a9S9ajerpARwGRL9JHsj"
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
