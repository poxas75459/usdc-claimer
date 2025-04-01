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
    "2X8xYrVWJdwuMLwwCLzCgWCLbdD7Pn7UHGu9XQj9mKqtw2mXCaT5J4WtoBXnAG7PMsPAgh4faruUAGo6saNbCU3g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QNd3eEuzexsRSJJSvPJxmUD5qegizhAGiek7AcRwsiWe5bYvj3RAKNumPkJzLv7dJbbbSqjDtf9vLdXiiVYdosX",
  "key1": "2sLiTtgpp4yDS3fCKPMCZmRN7B1C7JjK7PG7PMj1qfjV69r2TvUsdyjQZsQFn4gdoFKtUyVYhFhBS9dfMC9yhKYy",
  "key2": "35NhA56hvjCzhdgNYrDNwjyoQq2tBt9hybd1mBCL8G5FJbeHKoXyeS9B6tXvT25Uy6yA1gqsVXjNmgzPSc7VAUPL",
  "key3": "4YiRJHX5R9Gr3SN2ecVbaiAjFUaQfpAAMSauM2dxdy328iYSo3ARwxZ23WV9RtFY9NmiD2h5Kq1kz5pBxkXiiMcM",
  "key4": "39tscjZA63fTy9uCGLtaGSYMFqPQKq6Xm2n2LkBghgSpGQbVX9FPMys8xH2jP9dDbgs8PvQiLiumyieSpQcYTGZM",
  "key5": "4qKGAbecYrYsvzeMP4wtKPncgN7BK4SJCM9dH9tUtyrHcyjA7pwpXHw5McLHvBKqgysSsBqg8Qt5N8V1hnm9aCdF",
  "key6": "3pZpL1HVzmgYhBqLesJtihzqqBZpCsEBfEWrcGH94eiuxt4bng9b1PkYX8TpxvxkpuTcAxUuwosZceVRXquvJ7NQ",
  "key7": "29Mq73mpC2raXLy6f9CXiEKLYPsUwTchHg97AsSgdkdQcV1WTvuQWnAazbEVSm24JMGVf4CN9Piuz8BqfeTea2Yx",
  "key8": "2mBhvxJZ1wzkHACLCh4ZARhucdsCcRgHYtHYTKpDLXQd5vtSUjcFp5YMC5yq57kdpmRvu2xk9fyjitorhWZYm15N",
  "key9": "3LBntG1QnLE58XEeLHEmxfrBcTGqzBBCmooJYEDb6vSxUaykSs68P8mZw1aLznh68ijem7dFKWys3qvvxTz3JLM6",
  "key10": "36gVfbkbBF4rbxPyCnEWSYBnvRKEQ8gvNgiugMJ3njnwx7HkK1wNK6LwRk8kpPs4v9BK3Fio8fjJ5srRTVDsowXe",
  "key11": "Lj6xEhA15YYMGouKPt4hwGxcHoYzzRx3vNMX4yFS9e8ngDMQfcVZtPwcM4X3CdahxBcqHJ3EGK16d7G9MUw6kpZ",
  "key12": "5GGe5xEmNMmQ9uziTbyAz2MoJfcE1KpFK7CM1VWcaFto3WcNGfSgoQf3LvskybdaC1aSAPZ36MPSBLVfKDErsE6J",
  "key13": "4MVk3CGY3AJQWFhfKiwyBJRPz6pU4D3yRxvJvUyhDSNQxWWZ7PAM534Mx6t9x5jKBAM22Fq45NrqWzDk6Pum5REH",
  "key14": "5rFXCAYxkLanR282CVHBQwzqcgAh8TAGqcAfnELSDym9YaazwrtafkxKbeAKcLvafXQZXoFfhYAuCE3NBYikXFAo",
  "key15": "5jnF3ByQsVTvcgjaQKbcDj92nKZb1xdbw3V8VmYTvcezt8eh4nToYYju9sk9rk7CMtuT2d5swHojYeTHQAq2DCTQ",
  "key16": "MAhBEhrvk3M5FEYyRv112vjkkH5e1MjU8BUmPekA3M36xCQPkmpEm1Px7gsjmFosEepunMn2FoUQPmuZRK8Qp5f",
  "key17": "5fMwNqYkCRQ24LdzWv3UVPMT1zQ2V52gbJCGwuccPEWxxfhdq1eWunTsYmzrZM9j3pJzvSzVKZUCtws5p2qPvn2V",
  "key18": "3dqF8FF1VvZ7Fu24ed4DMzderbeDVoeBNgRurhAPHSssdMXSudJHvcjpfmy2HSm6n7MYgZqDMEb8bxPoS7tCcGW4",
  "key19": "3ZA6rxJMZSfHKCepjLJEDRJDXKMFzBFC2Mpo91BCHDEjVVMHtF8ZAtEAqQYW7kt1xiLPwXdjLGGARY3PaXdkx4Qk",
  "key20": "tmtNKv34rV6Zh8esYVAbVD5sEPaBgjbTemGz97jVfHjkQsH1guzVmuCsv8CsmHCbhxJ4Yp3SS7RLfZt5HTmjKD7",
  "key21": "24VteMum1PAFxWZ5ygW62YGWVKsfKMHtRP23MoeMYbMUUAYxv8gMUEhBvoxNECKWirif9WJYVxuEJw3tgU5JSjiL",
  "key22": "2jPDxsVWn8RWMmSuXqieNgX9fSjsX1B6bsUQu7NuBAdg25cWKKycUx1bCdYTh5kvMydLMd9CxHSkvPYg13LA6nR3",
  "key23": "3DYALVcawLoq5tWHrpr6aqeJw8b5nz9CCVtpKMKRP4xYuaZUMSbrhtt6LVVrLhQQzB1Diijqe2BD1LE3pr8stcsw",
  "key24": "2ue94fmZ1BHTtfVB3bdbQaf7NL9Yp4m13sW3spDruFuurxZcJiXwhW8GNcjtvhfk6QK1iTG43vF9FtCrfKURygsU",
  "key25": "5r1aYdF115dJ7bA9ujcf3pqW7tdShbSxW2HNKXkBQXKTLaaNK4m6MYFhuZn2nw7j4vzB44DKAbzAgJWB9VtEoVaX",
  "key26": "6eNiidru3DnX2h5Pk3FTb1apQe8gobg4Gbmyu2sZKzrgC3DP4Ni3dMQz5GD1NAQUtfegtmZnjXq53mRNYDNSbcB",
  "key27": "3p62zwCMAdqgJ323rFxzchEnSmSRUzFwrEAMP4L5iGFYfa7AuAknTrLL5bkQoDjYFWTCR87W2WrvcY2vjQe7KMti",
  "key28": "24bVisWyRBSM6jBZHgGBXxjmVab9gjRH1zTJtCYa9xi98SKY4mFoL2MfnwvgLomayDLn9zPEWWcjEq8udd3DMeFo",
  "key29": "3dRwFRx26WqFFh8AAAWi7NJqG88uA6m4YNTd9CskbGU8SN7q8tbpqHKLQN7cv5yURunh7ija7QpJAmK8GP4WjeVq",
  "key30": "6137Hi1kX1i54ttinMD4e2ypmRTCStNSPZSmooPDNkpe2voY5tZesdw7yVffjwppyzAi2vg8HpLvMwJpkMFCg41U",
  "key31": "Y2CT9gbJzdedofDaVqahM7T8GdQbTsXBmUZ6SKgCzezaj8PzDrjCjzUnSZW5hmoKMyn7ZZZJncAiGJoakQJ3YUy",
  "key32": "FBEojijQBG6m6DhCpZmGbqW6AaXqz3eZdDkEumoHgQT8zpTsJqDCh8ZtEkCoPKatdmqgVTmvxmninD34uYzZmXR",
  "key33": "2nRCBB9juxBBtFicHfu5z6zFPXPHC6o59bDKQGnrfvioP5KNM7q2K5yjKVQJ9jqL9kp36aTzHQPahcEuH8U73mCz",
  "key34": "wkSG68YSEg4emJiu9LQ7NT1C4jcAhbv2fsqXdQPGBho7LSXUPY4MD2b4ksdNTCqkDdafC7cZvFAFDjwxREVGQrp",
  "key35": "5r3i7ZQZ4Ny6VPT2RJwhhd6rDWjYRvDu5vg9athgDa5BiCr8tJ6dTcjJsFMoMbfnwnKPx8jXV4AQja6dE9tc73ja",
  "key36": "5DXfEBfSgn7m1UawAZi1craLL7hg3FurBpKY856kv7sHM68bZRLoGbMAPRPcwQaioAk86JnYwcSwmkxuGPe9FE5i",
  "key37": "3GQXRWWqLhhyhoGrN2FHjShdHUHFGH7nh7o61NPZwXd2kqsecsC2tY82RzP5Md2uXk9AWiSDEgHYT9LJsE9aQnM9",
  "key38": "5kMNRPY77FmwysYn7aQ7jeaAHLEGWV7NUDB6kK9soBUuUBBbTjcf178cEaCLSjRBE4xRqAzamoRKZ7sPgvFroUCP",
  "key39": "4Jxib5i7FBsnDiLpPhy5LDLLnsmWGEZfxD9iA8nAVAxwJUojoXiV9gw24a6Uuv6WDcUi5L93T5ptPvWUNzcBxbZ3",
  "key40": "4HvC5jxVTQ6TXgRvte86XGQdmmBLc9oZCAXsx2LuwQvEDwNWaCbBbd2BuMcztSjNLTVg1b6mAxHxEmcBgngVpGU6",
  "key41": "3UCY3rrv9WYvvJWJpxX9fDjdCsdQXjqkFESnkE6N6GW3SWbEqxygLSZVzExRuqN26xaHGWYqq6vKZHWhKGHi35w7",
  "key42": "5HApFaGC3Hg13MXLsCzb7uH6eYCRJB785bX2vdjJdsDBoiVw5PDt7j4YYCC9brKYUzbEt3yR5Kd6Sz9ESLgea6XJ",
  "key43": "3jAzQAk9BYuyjfhm29L8LZ739GhrFEN81PRJNLR4pcFzFP3UfuFXEBreJf92ZARTzL8RLweMKpiAAdLaJipQb1N4",
  "key44": "bkBLsd96G9BQYKFqve6wXsqxGecasxJjKv95RMVn5UoEeiQL3wuffYDcWWtJbEk1aVhjZiKh2T5gHtzLFnsUzHw",
  "key45": "3ybykTdJAKzz2D82UWoDL8BzTEQk4pykZ7dcMCY4S8c9B6JVmBPNgjUUNTAPLNEcaMKhHyWejYYo9a8XcTzJon6J"
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
