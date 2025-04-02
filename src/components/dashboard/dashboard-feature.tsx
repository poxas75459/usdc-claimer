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
    "53uGnJFYPQE1jTNDtVcJLzC1uh6PsfqXfrpkYovJuFY6h1ucQdQHLpHCEqXonjLMoR7WeSZuJd89ZA1Ru8sKKHhw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eBvwB6Cm7UTMaPGbk7SPc9QjstcmtEAcnb6K1tgmFd8PRMkPmG8ZLTPwCnuyk5bKZPiB9MaqkWjEP2YDreJ9rxR",
  "key1": "4SB8sco6zMTEPYbSBP2MstfZxBqm9yarjuFgNMis23Kqj7zVCaavwscbeHKPaeQbfakP3RwKoujNVQ1RqyLZqHFB",
  "key2": "4coK8f3qhxPXjidgD1FsgaeWbu2HP1qMakG16CB1wBm8wHt6nVEB42LA9cdxpY1nVMJeEdzUcojQUB2UTHYh5YkX",
  "key3": "2GXd9hfHAF2GKNrAJ53hyx3uVMt9fCZpvscLcMCaBw7LjSzi55b8K2tNjBmPwSwQKb4Vv4QRXxM6kQVTV862An8T",
  "key4": "29Ry1TwrWSrQGYjcuja4qfJ8NifNXK2xwfKJF1HJgM9Zb7djrPeyKR7ZkgyL6rF55v7ffSoGA7gTyt5wWs7bek37",
  "key5": "eC544MFyS6AyBQRzB3TguYhX2VNapZ8RjGr81Ta5jCzrNjzdMzk4UG8dvxuBeb6fCz4V6piZY2dWKhVKwt3RgX7",
  "key6": "5wbXfJa7BQrfXo3vqPvA6i6gb2ocYDnmCESZiyNqzfhauHCGWDWLgWzf9NCBfmcg4nTpYnKnh2dKJzY1CawwrJL9",
  "key7": "4QqQ8McwFdiKD7ZXZbjWmkaovJhWKdLoahcKcBkgwc6ntMP8SNbPsLSTxTygQJiy67SC6JETyUPw67JffZg5WD8R",
  "key8": "xbZEaBRozqhNMaA3EsJq29BheektTLkgQudjGkMtv2rqkc3kiSq8eao86h4rLuq9ec73CYsu4K25RoGzkBbRX1j",
  "key9": "kDb6TfKxPYX1wNHDSxo86fe1f7h7wzwNw98yLkxrjHuAdHJhFm8cgKfPMNzbdu2hjKZ8ch2cqBDytKsUBXrHwvg",
  "key10": "2aweXAnu4KMuNMivsdnCgepFrD4NPNMKXbcs2WTPVfHZuj5jt8CrDYNWCCQNoAErfua6f9D7yvhPtCrug9JBoXWr",
  "key11": "yxMzKmRXuuMQ6mBGAP67szRxAPtmwDkZbdThLmfYPDPx7WtiWCsi1Aho56ZD8i7AfvhafNcs344UEjachJ3aKit",
  "key12": "63XzCjAAWCyhpn5tJCdxoiAHXPwioxYwUqdSYDGZHtYmzsoGe8GSG3tcBqRhm74dvTSPcrcHXkQxKf36V5LWoBqq",
  "key13": "2pFpNHdUDbouqx2ARNueroFHHonxHSFvi7EPv8cBPeWnCm8tQMGK75KMra2BkiaUPJZAFafiBvS1vZ9gyoPkhS2n",
  "key14": "5zGzjmNFP8vWfwzMXQibFx8r49Q2GBRRmm1X5JjnMMjFBTxWzsKpRkBpAgRQAY7GJJVtqJNkPBHbm5NXsWwGFTxw",
  "key15": "5CAMcbQnTPHQjt9D1HrqAkpvtwvW6wmoXTvmAGakyAwSnGZ1rpAqHnDUvrs9czDP1rVej5hVTpBEZr6M4ZCewpeN",
  "key16": "ncoadJJ3NnMoq5uoWHMqnxzCzdNubeEjS3F2nP2v6JF6DUuk5x47xUqAFaoUaYXEYfATAqXbCQyzdEwp9MY3LN9",
  "key17": "2rPPuwwFMmhm1oPfpJ68YgYJ9FzDMYzeP47wn7Mzpujttgr7AvCB2syoVEhCVeqr8rjfXaHaVj9ZK3hm1AVLfubf",
  "key18": "5vGmG82VkghauKd32ck3FN7LFrdDM3burZA3VmAVrCorsAtvRBAhAfZzGShhfBaVxMQLm6Gews6wQ8MRSS7VjE34",
  "key19": "4vcBeRKCt6kQmRZsB2fZd69ybPZnNTEDuvNe4V6ZEjGKupULG1BvboGjbAFgPW4GyWi9MubipJ7jeBGAxv8cqQts",
  "key20": "39Gwp9vfU8KtkqUf7n8qdUJyvmmqs4NkPF7sK3uTKveQ8tGg2v9qWwPHe6ZMnfxEZc5EgecWBmhYrbVDRz88kFrL",
  "key21": "4mK1N6wfUZRp6X1PzZ1m4wx2825EsTUe9S6rEBB5wPvAQPA5XnukevHP5sxwk9YBi2ZzH8hGPJNqB7qjypSAd1vw",
  "key22": "22VrfYpp7PDLqTvkL6wptGoZR9bXrtV4nkC2HnXb3FjvF1GnYHdDcavmzc9gi67pqC1DCGgejWsbmzGb6b4s8kc2",
  "key23": "5W4HfhExcLYkRyDWVPVNU82gF5LoqgZaGeUAc1PuQ5eFebyCUwiCPoiariautCExhxzoNQAzi8e3ib1yoQEUQNqd",
  "key24": "2JBXZafwR2KhwmDcfhzorNHjZqRaEkXLmVsBfKqsfnLTmtmAtYUvHwgsB2W2uGfFhPYdV7JUigt8tQdZKHJHDib2",
  "key25": "23x5SLTjCsCASMvCo5koQib87dQ8AJ5VpZcT21tQpbnzrjHPCQasuyoaHWPRbUbNyg8ipCgrZSrG37eHpf5y75St",
  "key26": "3q7sk8Z2TGm1E9mX1KFK9YE3dPH4TGDrZo3gqxi5Ku6HEk1eWEAUEvGiDewU5K95RGSvDY4mc3zkEeCkjunx9a7m",
  "key27": "382Uv5dzHr8TMWgJ3MpVqQjbD6JBkFMGLhDf7RDYdUm7iKWnCZrW5HQeD276YdjAYYMcfziqVETKwXboSn2UZXwk",
  "key28": "4Y1jbKz6a9zNTaihycLFqES3P34FtwTGjUJah8CQFW3AQetu8gFb2sFc3KKzq93D4UQUQNC2ZSaGnVecbz5MShoZ",
  "key29": "2MX8Lghtm9sWHnbNBohsMZkum1XXRoiVZRmEJ2S9vmzvnwDrXHygJKo1prXcGqwbd3S5Xq952cg5ozoujGq4ocXD",
  "key30": "3nRZa1sWH9peyGwCcRn4AkEi8VUp2k4yUpBkitSnTdkBeLxwrFpahRWbcMoUwd9AEfUGTauoUzFRmU9UMvB4vVd7",
  "key31": "3bLb9aM6Jr3deXhoZUoFDhHFbQEgsvYGB1fqnK4aoQBt3TgNjZj6gXhvJyJpoCwEPiNsey6xhu9tLV7L7JbPARpP",
  "key32": "4eZRgaXyhJEYdKYmZzmXhij9Wsv1bbRU9zDs8rSGXXW82zTEvgZzWkzy8rofYk6Syjt5k1HEgiDsmAFqFqkphURj",
  "key33": "25Cb4brqsStdZ3z6zupNESZXcPK9V1oeZhEbjpcuiWzyt2vjidWivKBqcN2pRgobn7SG33fMgfRe1vTRviAawz3x",
  "key34": "3XWTJXNodKDCwXQaY5tLdLsNGPsJYtWipR63ZLvimEYUX66qV3WfUoiMcMAmJnFoYgPVUo3LzfHaz9RGGTC22kZB",
  "key35": "3HnqSCdnjAjpA3dsmz7aUqheGrvnx4AzmaQZAt5eoX4T7jayWZQNiTWjutPsofiXtk6vCLrfj9s5Kn3aPqKo9hb8",
  "key36": "5BzvW6ft8mG6VwE7bBxWBCwHyqsT1zZzYwE4MQhoFaeoSSh3yRGFnfCsDA5kV3x58dceWQGrgfB4kVVPMu9K3y4K"
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
