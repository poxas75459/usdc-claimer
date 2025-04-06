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
    "yC77FJoSrUt8CMomkmKx4sRYXMFDRAgAN1754hbPLxFLPe5pSAAURFXeYHCN9MiRbdpziRKCwFa5fSoiyH4SKfM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rBpHZQkYDu3wwjmqQ3hJ9DvCjF5bQ1TBmVHfi6fAZoVkBaU4GmjeL18sSXmRSoNJYUUZ1fbrdQGAgVLj9wKUz8j",
  "key1": "3iE965RQmEMogJQkqiyoBSKVBAPqiyhsNQ7AAVbYsMKj364HYYJ5q4DcKCJVydjHvXka9PMrsRyqAJzYubF5wFTb",
  "key2": "3xQGTWHZhsb8MKpPFxpUxAJDxSDKhxeGBVA23fSaNHvgj59x3JPgMEJam8nQwsjBU8P9qEKjpKqZKttb2Q7ENiKT",
  "key3": "2Z2eFFoNKHmSBF3ANaBvJX4vaoN3J8yHNR3vAkPv8kTudq9KR2SEFtC57vsaMVgAtSWnr7CJN9wnU5FKppkxawWc",
  "key4": "2UYgCKdT9UcC6TDxwtJ8d97rKLcaJrPhLvsY5PRC5UMM6BPXcKFy8AEMBFwPU5xC6152k79fc4ksnQcRYbJE4UKN",
  "key5": "2m4spGrZSUuWsGQDPn3i5Zdp3BXsmmBgc2EMhwZGzHhN364U8Bxdqhj2qCWM7atTW5rDgQnqX9sJW5kxdTB1pfH7",
  "key6": "2bhn2F9rYWGBGXAY8qD4y92j9F5pnYLvKtjKfscXymVtbTyXHpmaxhEvKGe4Pzvd9kQCHSJkr83N7BUSSHBJe9jo",
  "key7": "pv54taKdQSjqmTVEaWMYeHs3QNfZ48rbihK1Wz5cKzGPBAoUYKhBDimPzGxaYeeUV15ryFjdC9fmPgDXk4wAH6R",
  "key8": "33Fk77GtVSE7D3JpaP2BnMmMfgPi5ARbqq8AaihhsNwbq8AfQ6RmLKjP6VxZ2ndWGBJXPdYoHWAWZjGKxf6rT7YD",
  "key9": "4F53f9QSqsnju7ifRAuS5XggaDTYr3ekzURsW6DU5q1wNi8twwynBm1enkfVQbn6FR159qRRQk6EJNxcBJtKzoHr",
  "key10": "5zXYjZ9L6QRX6Hr3mpB7C3d15LWDVxnYiCmaEPpF83XfCmHPKzKvrNPGrw53ZCBdVrP63Gx6JUgrG1uq3t7T6bMj",
  "key11": "5LHJsFL8WAT1fbS3yqFqFWEiE55tYojUPMR6BwWx9AhVoiYmpXXuuD7dGjw1CASYwUrZeg5kS4EdsGx3B9HYAA7w",
  "key12": "3MKBVHdymbHsEhqffTgPNh25PLiHX3EoKAcuPTepUcXcqjkghoY4Ad7bmMv4ACoeo99o3avhPTzMdEL4y1ouNg5j",
  "key13": "2n8FoM78CCox2Eg9ECcNgdMdMPuL1ZGkcsTRYHteTbSBEtw11WS2qRPYP279V9NqTTsaJ1tiGxCHJaFa389U9Ajg",
  "key14": "5w9p37rLvHYYYn8moCeuhyZDdrmmEFhu3svgcnUtVejcknRZyxbsNghSZN7Y9hub7DPnLvWThSWAafjCeR5V4yjy",
  "key15": "49DGeoXf6V5B5tLgy6SSP8cTQnbii8MFfwVC21V6PrWoch6bK6gp1nDQJ1szuq1oTHW1tJe1oHqyCpc8155fVkP7",
  "key16": "DjCcrzUtLiqujaVaix23uDwb8HsRJyXaJQUu4cpkcysbWg7HPhNR28bHuKzrpKqZ1ZMvAtgRqNtXfJMkGHanZJX",
  "key17": "2ZJuqT5Jpr8YpR7YibLj1S2j45EbvxLvVrBs3X4pJMkW35q73dF5Uco7XowpnY1pEhynkCP4nrqRv4Lq9jdn8NwN",
  "key18": "35a5J6BCsgWcQRA5NC992VB8wJ6z5Gv7kUwqnqRwbnZ4fBinQFXfKUuppmmzfhcVNu9eihRFxbhTWLHL6Xckzm2Q",
  "key19": "5t4d1S2AHv1m2ikGaysHz4WFxjLKvyM2wDGbJojLr8CNLddZAKLQfhNG7GEVJQiPPz4LA3RxXsVvkzNeb9cc6zXJ",
  "key20": "j5CNBLCRdykQA21n7cok7ahsokhjX5W7JJVN8qQbfK5E5ny2fxRNwqjfqUG9itwHpK4k76sJoKRd2W9j9dauFjT",
  "key21": "Kx8eaMmyYnJkEbU6ZDUaTWRTaFXsrdbjdjzw2DEGgdDTUAZuPaznPFDwMixPdpR9VWQPvViE9EM8cMDhZpCjrsx",
  "key22": "3Xdkje9QrU1tHVTuAW6nTK2h6zWozPTNCP6uRbMEA34N5dmz1wK7aDz8csCdp6P2PZRT43LCawjytJVh2wo8yQtX",
  "key23": "5LhUi6QbYZhEaVAGKRK3EBgcXD8Nw78mCxGztk1BEnsSNYj9cHm661a27hMtznZutN5mCbXV3UgM4759H3YdDuvt",
  "key24": "3kogE5swaJ9nZJDYhviT1wD6TZG8L4m3P9gKTKq2QrujH7yAzGztmxYgbUMwoc9wNNqWD7c5ErDwJysu7Kn1vQYy",
  "key25": "38vBVKe6LGZeFbQhBTE6roKkHL9dgdySjomrFVCyrKPgZSg1DuNuv1dizYCPUd3TaRdtu6MKfpZUdT8oArPcqQp3",
  "key26": "66BgGpCqUomvD752zmis5MG6WLQ2GXpVGaw43UU2CuUVwMPaidX77t6yxRju759vhgSV1Wr5JEVYhBjfr6qpAiD5",
  "key27": "4Li64iyhNStoGXAWECzJe2q5VT1j8V2qR2RW3ipf5aDLYboPMEuWs35JZDGKiBhph8BMUGte2grTrU3kYYKroAMk",
  "key28": "3wzRQKCVoivaMExie1nfFn5QYXv2RCCoYNhk6gCbUFjbb5BF9qxviMVHVmjpTx2PLCP6x3Bxen95u861cCSZHaaK",
  "key29": "3ss4nTou5Zfxqq76QXgGP4Yz6LgFGHJkBqCXrmaA4FgoFC9rFMDp4Th53gpPSwowV9gTrJ4zA51shsWmkvgMf3D4",
  "key30": "3khT3eKA218nyBxF8o1S6GmqhVwCxCL58kAjotSEBoiqySHHsCW9DSqgNELPfX1mHHATS4Tv7UgaezFx3yMCmb5w",
  "key31": "5WsRqsbqHHD2fijF5ZpN6Z4Z95Rq4PF58HWKggWh8rQGn83QkNqrH43bVFKyV95QPC5EABRexwxiwb9kjDN1hKUg",
  "key32": "1xoDXQ3z1visoY2Rc4kbN9or7cr8hZsZN5RgbSocUuJwBaaSmcsGrsFcoNk5C9wm7d4cGW3RhzwtPkVRpFoWQLZ"
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
