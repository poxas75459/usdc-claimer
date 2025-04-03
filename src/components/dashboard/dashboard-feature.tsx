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
    "32qXV83h79yKUVsW1D46x9RvBaa3XqQWnVCpWYhhNWMmLoEp8cQzbtSN3Rbp8AC1Hkmfi1SmnFgvUz93UHuraSiu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28DxUy1RvZxWZG44SKnmjUu41avJQK4CbYACP1YCxNULRM46DLAPHyPckuufdV5GsEy4yuhKud7GC6SAWS7pbVvV",
  "key1": "5HwV8K2EfkGhEq5xvVgJuijgWVbgjyG2wz74k3KDXEwoByRj4v4jsvtNc1vETU9SJyv9bd2rpTg1xNioTaMsA2ZH",
  "key2": "3p1YsG2KK9YYg5vR8KoviMFSaquFPD49vfx6GwreSDBSCKUnz3qeQUwoeC1oWyFgxqrAWfB1wj6Vbs68pag3yYgn",
  "key3": "42CBDNAAh8VCqiSv7SxipUNJUpVULuAf9WzP5rCzPiijy9WKaGSabbTAPU7aaUidXEwmjv7jj3VJMgXvxVCxp5ds",
  "key4": "42S7yb7kUztYpUiKa3UJDCMuAchYxd4gJ9TitZc8H4DTZMGVuAFCNV3vTBv1WqcNY385VAN3AdWdvhd7cjYg4MkH",
  "key5": "4dEa5uCtKqRwDtV6tB4xkDXwp8FYgVrdLcgTPBh2M5anba5Eo1nh4SX1mKKSzj9sResPedfYBjxDps2JJE3qvid",
  "key6": "AwdR4tegueXYBhWAtgBDyjk56PY3y7FP4ainYNQ1PLpEExoe4PmzEmHBRxqv39QLGxVF4nfwriMhF66y31qtpyu",
  "key7": "2EUdb4izNvH3WA7iJfra9ZRr8dJn1pF2PseytDiYEZEJaknEgCL2ErwywFuouqMgmUy8wG8h8uRdnkwMaam71tBB",
  "key8": "5zoXDLcqN5wYidi7dAReNJzJkXDw1NY2Az4KATGKnZDvhFymfcQzpwMNtpE7hm1igNKjw1DqeezCbi6SskEZJPY1",
  "key9": "3eS2uYnJpzhAhrAZv1EY42TnwR2GhwoTDN8fsXoqtJviJcUQ57V8P5RSd9Kavvm4skGR7ZRFLiSvyCpp4miMYVbn",
  "key10": "2CiJ2FsLyPdi5tD8Q9zqGTUnaYXdsMZ4JEhRSNYyGGiequKm7xMGHqsczcXxM5RmBqRvZ32Fc2L2x4o7JqaHYiEs",
  "key11": "4E5SjxBGhBpAnxEk7UPh7St5z9Rzo7Q6gZDDGKNLRDG5aceFRc8pNtKH1EwaBBXhDFg4GD7vsmiwnrfmitHdom5k",
  "key12": "32Vf9V6kiuJNPatgy6btoQv4NVkDTB5zZeQuNTERAogyFDLeaNPQoxP9t8ZGUnqC5mv8mQRpW8Z9vHwRuSQtaXL1",
  "key13": "3vJ78kGy3B3hCQ9xGsWhxEhpUUTJDQJr2QCC8PbfBdC1DGCBxANsoNNPvrCWLGoAGAQejHv91NRdMUxybpVvU1No",
  "key14": "4PdpdaVnLnyqov9cfTPP9Qd2GksVYE25f8TzGhj6d7G8QRtxaSeo9HZ2hEGKXX3iTNmHT8doho9oCPSEvcCvJowu",
  "key15": "3qpsEG6PiAgVFPFsdD6HMMJEapmJMjSiFiGh7WjqhD6oiMahBqRnsHci25KTgVZxy469ad69yTKMWHp4bGUANZcD",
  "key16": "3AtAkZLdJqUx476zWqYjfbiQ6h4FVkgQr96GtEyWW4UGoQFTL5yU89BzQpcRNJkP5HAuhrCDc55yhWsor4KeagrS",
  "key17": "mgpWGanKpMKrBe9j6KsHt8GHHiHtoMdRwGpqhYi3EC9aAHXQpLYXARZAAq4qy3CYgWkZze4Doaa5vihLGiJUVu2",
  "key18": "2DMtTy6mwXvYc7KE7vMWN1CMFUEBLXBHQ3NnpF457EvK56bFaeuLgxqZZUnYgSoWc2gvNKWABYJ5acd3haju3xDv",
  "key19": "B1puDjVnCM67LPLzHcMmV1v5VWLjJpSikxrtjRkWWi1gHpVYAXXZi3WDRZPWc78HSfGDqGYj1A4knmZdHYXMQR9",
  "key20": "2ixvLeHPBaPUS6uVd29Sw8cAvdcZELQv1FecV8ALsvimD72Q5RJupCnbdr7WvRjnA75due9yvxt47xoB9hP5Sj7j",
  "key21": "5iMaH4dgPkY4EdzMq3brovyecFx1KU8KeKc8KAFZL8xWteBFUgcv7qCm67S1eSR8cX6ZhGHwkoyGGHY4BknVyDb7",
  "key22": "3GHxhvBsp7qMGRHbdCw6XJgUMFQ1KLuYUoVvA5fcyA7Ao85ZFJyAHbwSuzFYsGirGKSD5KbzFKoeFUqfWJEdmU3x",
  "key23": "3SP7kKRWnjSvFesouuuoMUKd4jP9gBBo5tJbDcE14pXQTdGz8pqwmRQVXYSLM3ESKpFZtWb9MzKeJyVRCrEaQPbv",
  "key24": "3rRZhHPtjLgZ5SKLscjEKG3T1CimChKuXyEvKyrWt2b4BeUWXnbB1kce2HFFD8iMgntLqi4M9rYNQyNjTrG5N72",
  "key25": "3HPsVJqDaTZAfiLGEwH61tABE7LZRxRKtmoAjs2C5Czi3dPh1Ud7yVEN1duNQP87Ey6B6ERzqZr3UiwBaVDY6R8V",
  "key26": "Rd9CaLA5T8X2ygRoRxvkTRmAz1aQ2B26SCPWZJeA7EUrPpMKqDcGLaFU1xxHQuakDUAuFGCHMQ8QUgXLmHDerRK",
  "key27": "5WuFLUHLg8LHgbJCjGhjyEQaXdv1rowmovMtQ6nSPBSFkt4d8J4u3Gg5hNkZGNPsUczt486c7J8P6qpy3UvoXrrB",
  "key28": "4rrf4mqD486tR2iEfr8V1M3LT8zHgFnd796sAc7bTHco798a33zB3L7fFxj7tiFfS6iuxbGtT6TBbR2QgdS3zyxA",
  "key29": "5ZeN6w7Z7cEFnDr7f71QMADarSDPaoX4oVXRmWg7MXH6Q8tC1AYFEnfHjgxncWFQqPwTuisMofGudU9JqtLe6iy9",
  "key30": "4QjQPZK7xHK8JS1m4p5LYGWioaYcxcYQrFDC8zsTCCAq2oEtoEDi5r5iWwJMszfxBkVZzAkC5ccoddVJcFoCLW6e",
  "key31": "3F6ARsNNuhaSFxKcruQixYfSks4hM1asBo2t7FwLEjcykgic2UBJccztXzWTirSLHSJjiHopGoV4a3MDagT129dj"
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
