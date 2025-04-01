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
    "21umvMaVcNtriwrM69cmutJPr8U6rbdrbbicbnhcmEqF26uUxfveHYP2AYFNKkAYYczYx9ivMv3hZoeHK8tQ4efx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kp3PWsUKtekXf53TihB7ne2o1B44rZtt7wMzNzbMNjfnGeb5yqhih3sSN3MMhw4GKmkT7cimkzQpH51s6aRSjQp",
  "key1": "kLmBhJamfCLmm3ijVjPoN3R1dr64gS9dza8QP4z9Y5TZD2d1eHCH5c38U3Dw4uqvg7iaZVucgixyVxJRybfFXxd",
  "key2": "2R3jtQVyT4D9xmEDQFjGxeLTeQqsWb4kjznynkyAL2Yugf5KGMYFy1SRXqD8pRNgKWmCzikLVyveHwYw92q4sm4t",
  "key3": "J8kwA9nK2g2UKehAW6ezqYcxcdiJdJozh386gVakVAGcMZxTTZ7VTDANhVBiqEhYEF8GpuwgMMSSsRYy9Josgo2",
  "key4": "uMmf2UU9Pkh4BG4vPQDGK2NFxzw73w7WF7kXWf65a31wPRmLyxkFXh3cW2kwjnwHSUUV3gdztboECztkBt4z9oH",
  "key5": "4G97JoVA6aWBrNZggwYfEz5VthccZj7egVCGnxxotoTov19qRZZRzojL787MAg6KGwLu9DrHaJZReffBD8jdW5Co",
  "key6": "3cG3mjF6NbQGGtdLjPoygAxDVdgpwABYHLUJam7mprHGiY3NuF9EGLJeAuWyexoB1bYY84EdgkMq2yehmRtmymdz",
  "key7": "okbs8ycBF5jx1F7cP1Cs1N9Cnqp9NKLkEviKZxQdmD3E3h3KUQPEuWofjyuEyCTbat58UwWdMzr16wP7vGuTFb7",
  "key8": "2RwtgnwTkSmse51ik8MAymk3s3suH3bcH6BRvEct6a74gZj3jk2A7uAnRBenE8iur9a67erif4r9WFX3niHrjky5",
  "key9": "b27hc2WWhCJLK7WVm7hRqbLden1wy47LGkDvZgogPd9ft5MMV3gFUiTXWrcmS4oP6ETnUdwKzABW58FfkQQqeUZ",
  "key10": "2Z1q8cFoUCM4JiDb4kNhZwH1GjAtAWdBKJqr7Uc6xvfqzvXDKyfiBiDbYZyUxGa6Gy1PEGWkWhMTES9sSLfNoqrH",
  "key11": "Pq6GjyaFB11Szb39dWUYKFy3xuP3ZMmuai86aZNvARJJMhLsvGECkyK8WzYuaD4W3Va9viwGC7tff5YmnCPfsEU",
  "key12": "2KpHutntHDJc8yjjSQyF94DSFqN4KoKz2v19jBKNQ7rrMpcifRgrt4yfCnxSWi4WkampGcoBUydqAvQgqh9tVpNA",
  "key13": "5w8r4zUwgWMoimnB1FF85mtCgVBpE3XTRtDquA1DFfA8NiRdqcXXiedK7cN4yCFJ5zCgmxQ7oSMSDLRuZsoK1pyt",
  "key14": "5EGAiaYMBg3Z73sufUYjWmRrYVUsF85GLYhTKoZPMoWzaDmieTPjdaDAFY8K6t6MXXxFsEQsQHj2PnqpigE9D2hQ",
  "key15": "3WNmEW8C5HMLdGmh3VDpbu5DDqt4tuZ7ifNuRozCCPsHXRZatWMxmSciXqj9VHSqGwNXVxFYjC5fcvEc4gXC9TJy",
  "key16": "gEqW1xGpxXWjyKhabkTTpZcAgXJUkG6ka6cJFUGjSMpV2VH6HgtartmfZPJfGuJWaHwThwn3dj6boZdjMCwT1Qf",
  "key17": "4jbMzbB9HBrLPASKvNEAh4a9pDdfKYrhmWxr6i5vHjiMAhMwNZcbDvX8dxBSQWkgFBmGfj34jRPo49j2zbo7P2NZ",
  "key18": "XRY9iDGyUJ9Dc1UtpZkueRnW67NUZUmQrfftGd8VsMCYjuWNGFL6EXSPNTvHLEwgYYnwdsHaccXkwyi41crCwCD",
  "key19": "29mR2UYtsBNTPoKE74ixrvH2AdisGKrARMUJMUuqHRGZviJteraFxDgLXsvndL4X5uXeWarDPfUpRGKCFQBCiaEK",
  "key20": "ccrXsp6zUmR5SZz7o2BqygdjsFwgcF2HpbY7VVjeSS9zN5TCEUUfJV52NTY8sAR2bKJmVhQs1EKEzkG8brYW2UN",
  "key21": "4MVDWN1vS8SwfsRRAZiCFdKEqWQoZociRdoRH8rygBujiXtAg7YcJSS1vaE3JPM5aAsQRKJ43LGZnwMkBsiuP75C",
  "key22": "SdJZ17GrbU6g2DLryi4uThu8mdwf2Ri7MdUdwf8hJFMe81b3oRgbjYY4pBmeL5WRqFcAPAn6JSeftge7gFvGeiN",
  "key23": "3coY9Q4PfEqDrDdh4KvEPMRDhXya15zQwXVDSsnWuVHSav2bqdJto7s5ReLHVdqHcBNNkyWs5Au2ndPZedSZyBrG",
  "key24": "2xR3cSosS9iYekA9Xz2vepC7BSoXr2RZLgZe3S9ZahHKAGoqvnkgrX5YFLdSakW1pgFaMcyt72sa7j6tiZ4UAssJ",
  "key25": "4QXvVrbtWY4VrnbZU3gi7QFhEa8ofGFVt5TmLDrQ7nSsjvjzghxZDXHTpbnqQYcF2jrCuwYeC9yeeBXeTubP1AAQ",
  "key26": "QTyB5xDRto9c58Uf8SRtaWNb5oxZW1QTBDimRffRUsh8N9ixyqtn1yqU2rb6EfC4qs8P45TFqYbskjWpajZxwPb",
  "key27": "4e6PmWqhWaeNq2KyKJ4RHDGRdg6t5Lu8q5xRFctZCdWiiXxsAQ3K5C1yUGMLJ23QmTxHyQP5qxoXLNcVrsYNDQFL",
  "key28": "4X2Vpjo3nyXRfjjifNosUL7f3ohZh4qR8MTffp247F4ajrQ7TteabyY7WS2XXXeQNtwAAgBnFZFm6g8n4C8u5QML",
  "key29": "2rrDaKQmmbLXnuhUo98YZrtvC4u8WJEHM9xADXGREEEqY5rPcKt8zJGwMKA7GMnKrbo5D8Zvsq4Z6NBmmFHYWYcs",
  "key30": "4aEpQEmVf4Hm7q3MSMU6rPPPuaZhyBWpMohH1QdZ5j6Et1SUi6Y8vnVeoZqFNNfEEyKE9if8Gj4tQwc1fhnXWBCD",
  "key31": "4MQhozwPVNV9GZpUL57PgV78LuvfFHsw8xC7boB6zyivLKhL1QVLYXZESJMcVMTxvru1WFtum6vm8KfYpoxi36RN",
  "key32": "2Y9TuWfazkbNqwvFamZHwLEMuHPnZftkKhAUtQKq57pMnJqTsRAhqAkrUQQobgqwmbj7pEXkzq2JiXty34iiiTB",
  "key33": "4ESDtNX4o9wU6BALxYsgt1TNtiTNYLxhjRjV1y2DN6ECLSxhNA2nBuwM4wCr5XHNC7WbGtGQPmFoTCCPFCL87Bs2",
  "key34": "5PCZJt3P3wowxoSAwVRgBnEmw6b3A2LeSWGqXKiESa8PEpxYLdP9bKpXnKQ9crc3kDLj4aR6s9Qgw41e8BFzLVVU"
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
