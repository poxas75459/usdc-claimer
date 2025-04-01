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
    "3T8rELyq8u1gVzJA4TRpZsa1Y2U33kasBYTeUREYY54HSpt29QRkXCR2vnMVWYQruZpQZwzPNhdK4Rkhzin5w7E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2upSzdYfdeFCDEj7JMtyekf7BkhguzuyjXtjkbGwioXuZgGWUx8kAXybmxiSzfnjEEQMGCrGnJSiDnZN48gN4osv",
  "key1": "2gCeMQXfV7FfYudhBVZhcQe9oqFom4LGaWxsLJw6ZVsRDGKxrJkFypXXcsZvqkGz9rR72tpZjuS6KsZ27HbApTe7",
  "key2": "5oVYMFkwXKQL2M3J8B9YYBvqYKFQRM65fr8r7hLsgiatA1zQ7yZRXTHWt8AkzsyD9rQKs5pPJrYnoijpq5YjijWB",
  "key3": "55D6oE9KZiZCdsmT5GdDzL1s6pCRMANkT1sqhjJbU4w4TVLggpXjcP9MfMAPh8LDZzKKNw5ydFTFb24xbdnJZiVV",
  "key4": "3ou2L7sFmRpkEYbAiAWnYVDXEj97rzxMCmxGSZc6AN8b9WSYU3i95nkWHSn1zCM8NhNqzGNkK7NtP36byYUCbrFk",
  "key5": "2Eg778nDU7zVU19ijsU2ZXwYAWkQi3R3fat6kGc7irSvKT2aWgBmm4KbHKjNAXGP5zDADh3qGqwtBQdtcfTKLRaC",
  "key6": "3SsQkP64TJnfG2RNNKbK74DobkJMrffuFyXJC4xGSTqpDKUVcwJ4wAJGm6B27MRnbJ24L14KFbsgPB8WjEmARrrr",
  "key7": "4REozdSs9yYGTkvH9FMzyKxPDh3TeMftoLrMnJb2UbZttgh9uyiWtm1CkZkpSrDGRJmfApTzSTeyuSLBMxi19mkE",
  "key8": "38ZrQEHWGicfYn7TjauKJ6ovRqeY72gebCR2b7YzUrkWeiFGdFiMQQCTGoCcWJBVD4Vsp5TRBdj6ZVKFSV8dRgPR",
  "key9": "erUVZuJEG8J28pWdEVvPR8zTqa9iTsy3hqyXvqxLCzVdnofFsxn17jueTJemASefKRJiSQazv9LH7KPefW1U8DV",
  "key10": "2yrEbSxShake4TSF8yKQvd7NVwowk9SqjrnTNsGVeKzq8xYhxaRtSu3UhyDVLZXPwJtz7DDmv9rZr2r77ZzZUiqj",
  "key11": "rrHVWD8Q3sceDLHvVQAga5BVvk3bVVuRAhg5q4Te3Zr1Dq6SYGHXUYUcaZzzWk2dE1iYEaBdGY81PBC3TeN8qjh",
  "key12": "4kFKBBEzZMJkPVf3nGVsBnfXXsEd1F2gEn8by3LjnE3Cpb6K5bPjGTzctQ38JTv9eq1JKJcx8awX8SpfJDXEw4Bw",
  "key13": "4bLkP8Dr66qvPi9cFoWmCrWiPxEQvPUNtn7FTSJJNufWaiUsUWPhSZFo3CW14ceNfQn9cihrnqNnsV5JUMgzTgKt",
  "key14": "3L97F32ikF83rmP23PUZkdZ74qWn6C59SmXyvJBLKq2CFDCX3wVLer6SqLenWXAK9WvX9JM7aMq5PnUdHFfeqoC",
  "key15": "4uoi5Mi1UM6Q9zX8qkXmY3PPdZR1NidBgR4DsTm2EYp66JYREphtgfov2tBUbDwerCdP4PJeUdETxry48HB1Pyqz",
  "key16": "2RJicYFwkZPrba6NPP5Sxxb41EoZczXYFtJbUsJa7jRiMnSUZndypZCejVA7uB8ScE7fnJTCjrNgw2Sb3u31T8wC",
  "key17": "2USy1rAZk8M68jTJ9iDvc91NnWGF8HSvzPeVCjcwrzbWfqJ6i3PeEqwbNuX1RGCr7X91Lsvy9eRtUnW3EQbfKPtL",
  "key18": "4XcJ2iWSiJDR7jk6bFG5ieYHY4FopxMYfPKvw1gSnWe52UXUKTzAsQmbYhDeTgKpqS7nfDhqgeTan4xadzeK25ug",
  "key19": "4jTCqmbNWyfPJojuY5Z4DiFAQhRgai4oc4BZoJ1ynzGP1yhPn2imacLivKr5575UHEbumcNGFznY8V7bczb3jiwM",
  "key20": "5p7m3jamirVoDvGxyTUZve4gwQV84kqQtvHxzHYmGoHYNeV6zMGaPyu8ZgQNaVBnCBrMAovKa6YYCxLYkMoEVZ8x",
  "key21": "4Ek3p4AbFSG7u1BGJw2qRbS9aE9cJVJUuZ4ojSGAoGCt9Z8DpjnD9FRAyoQUUGeSVNppHXiQk4hk8Vxigx9wpb2h",
  "key22": "2XwxNiXQPWfNgBFyNYxgQhf4aJoy8entunpYs5dYQNfkf4uzyBoqD83sR8eTHGvzAu1o83UChVVKNU9yKFdMy791",
  "key23": "4x7n2GaS7uD7RomskTHvA9zK7if5MW3gTokCaMn5bBM2NX6oG1WZ9JRRfaQzbwt8NuziLqrKNcqz8HEYzVStqkfE",
  "key24": "3Rhk1PhZuT9CtDiG8nwv158h35FTRnQQb1TRb7uyN36U7fG7c9RoY3oiN4WxxeyhJRb6Margxn29Q8fbJ6uQHzT1",
  "key25": "nVwWKsnHNbTzpgtB73KT2XSHd9U7JSgkUoEsqGmLb6EbdRP1v3NXwNMtxjYJLjBzciVcFsGwtj3PG12BuueyJT1",
  "key26": "2LfxVBh1gEY76f8NbQ6tRWv9TGd7pyztfZG9jUPG295NWaamAfsr933UAaVveRrpkey6SZB68m4QosX33PpchTDj",
  "key27": "5i3v3HtZLMC8prz51GhQHM6dbAdXFcYicHz8baL74K1nv8xriqhgyhf2tnSUDG8Zxe4DoPGYG8W8dNSBMzxUVQY9",
  "key28": "5iJchbBshvb6BrWzd4TxXdu1qq2BLqPvuRAe8QvWNc7KhSS227DPoaS3ruFBa2asdLndLrto1z2yDHSGaSHCU4vL",
  "key29": "zwCo8Um9YeFCEdscACybQrszPNxfKX6otmBHYCrcwVyQjMbpKbUSmXc4ZFNiSdYV9f5LANL1jLMtSLXwQsgdWGW",
  "key30": "3BTRpBX6v6DVApiDxeSZLKxUhk4c5F5XSHJqU31vLvABQRKKx42E6265Jnbhknh9pQbAn1QWRnTt958ZsvRV5Kuo",
  "key31": "4dtgAiXW6dNQ5ESn3p7JQX3ZeCyG6txXBVpNUoZRk5eRe8c2dXboscMnF8VkUxuWA8pAVLFxLYBxNirxUvbxf6FT"
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
