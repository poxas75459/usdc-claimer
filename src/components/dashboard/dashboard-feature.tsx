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
    "2c1wfCfdAEvMFnM2FWpghzJoA4r54YBN1mvZA2QfCZ1hd44rp2uLSwcpAQ96439huZ6ibnxfkUMzHTWbEDVn8wGY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QGSS5DtMU89ZFuFs4ZATsGTezdVLXiKNzNiQHvo4mr1xRwfFWru568pojChheKZFzMNUsehobVd7Lcv7Yr7Ymv8",
  "key1": "5kARETwxfoXsyaF2js6mYRtgncDCicffPXfy7EEDpzWny6R8fH2nWTo78bSqYQfLwAWmZufYcGYMph8WWVaWqBBS",
  "key2": "5HzAcGZPCkLcYxV2duHnmjbo8VzHw7voofH8wbNJGgvrEfneCtKNU1B8VdCuQLwPVDJKjMj8MBK7RpYxvTLc6UFo",
  "key3": "22BgkApAZx9Ud2ZZzZSnnAFt2Hfu4qwLS3QFkDqNYsNvrgNtpCkWEwyZKLkmHfP94LJCKcfwg29YzFmTbm3nfzNS",
  "key4": "WvDfFoexgZreziG7CC3V6Lgx1gnmuZJGFCg6R7SGxVXiHmmCVgQ2AHEmSMjm2cGXbXUpv8YJH22gdmsWbFaEUfb",
  "key5": "5vab3muTG67ChHLZ6zo4PyCWSEQodbVY7d7JzvA6hAE2Rc46BYDBDKW6MVp4514nmscWN7cWffp6ygbnDfqPB2GT",
  "key6": "2535Y8caT48UB1z6UiVvWXGLCW9uvpa3ngZwRzZKkL5rPknFaoJTRKCqJWDJaSw2u3drzLy5jC1iwPM4AQcc1rhd",
  "key7": "4sWhekavKpTvJjrNicWjkGw5hBJvcAPZZascuFeVCfrEQrvFaBmm7GDNihkCfFMhsE6ESGFqunMGR43FZzQ2uwpN",
  "key8": "5Zz4s93eob3ySaq92ri8w31fWvQ2NCCbXaKNZFmS9FBaNdKGW5JSJWrxCNNoWkt78na2KVG1LFDKh9QBV11FDugY",
  "key9": "3JzgVUuF3NWyAYCrnxoH1cbPPEqAcLbXbuAWqB6UmdMESvsv2CBtqK3x7SVduLbRHsj4L975Zr6JrfV5rzA787TP",
  "key10": "L2Ymdwr4i6qf5BLNJwpNc7NvdhKuHfaLCEhfTxwZHGV23xNEeBNvJ4FqJKQPTWcGKVLp5wf5anTdFJqn1UiVBbq",
  "key11": "5gomnJW72XemJHg6hnYDvS1jDWyW4sNZXVLZ5oCNAwL7o3VDQytyAZwtu1K5qPKtJdawxHD9KSWMNVqeEwr2j2rj",
  "key12": "29nek5QtoNcyMQ6bh78s177vWekjCnuVu6CLB86NzUycfHoS1w8WsovLjAm3oUQARk4o8SBghbjhktsUQUdWgj29",
  "key13": "2CqXj57xCwo5L2W4jSxYkxJqP2R2KoiNaiRGPxxhxuzozpcMe5d48WJpvdjoh3p9h5ZBZdMK4DnYHmW1BRr3eY2M",
  "key14": "3mcU2FWSPetSzW9MzTHDxaA2HAbhTXLwGFKgNcFpj7kghPaMSGQtg1hazK6JnknTBXcyMyWyZU5YWoVivoS8t2cs",
  "key15": "2FiWwpVoiZnXbB9JygBYaNbaGNZ55rD5y7hcH4hUhZv7js84Lwcwtekq3ghMceHEGVAhhdQ1WmsL8gWtFgCeDfcK",
  "key16": "3ftLYcf35ne7hoDPQ1sD9KKYBnV8UWSAavrRopep9CDCKbibRnmLPJxT6cEKDApJHZoY5Dpiu1DU3R1kmM6cYeTb",
  "key17": "5XbAuA7pv43sgHPid9kLnxfYEdvze35EPS6fZjE8Br7GSdBfMaF846dcYeSHAZxj3KP5p5UuBU2farwQEWrxKBC9",
  "key18": "2FbDG2AWTu2PJ6iXKuCwiZhf8H2iegZwWfN5CgdKXe2RKZYZSnzeUdstJ2vLa8VW9XaTyaxeXvy7ynUbWcQ6A1iM",
  "key19": "5jYbF6oLLinNJsNhmY6FTCrqApJDUST3bjqACqcajjbZcP7SD84R94MniJEybCqtSy9FTPh6SChK7phWp9qEfPty",
  "key20": "vBcFNZ63XRUbE5JnF5S6571qw8BYHfLF9SSjjwjCKNvPjE1Sfa7NrWZC5YS5ypeg76to8fujEzdKAqxqeZmuecR",
  "key21": "5MB8MriecVHK4W1vhn5UbKiJpe4ux43ACLN53tiW47f1kh6UPLvThAga4VSzGg2Kz2s2ccJKFmUQqgkgAtnHu2FE",
  "key22": "4z8yUWNTX4JQ6w2doNmTSDQKSeewVtZmedot7idPNsmsfeShmwdLKwHxBnuGEH5WVioZ9vYEob8Zstz54n7rMopX",
  "key23": "4jDiPLcQ1faTikQC9wyVH9jcW9udH6aW5RUFJR29UkLdZabD8HX7fp8GpRV84KmLpPwL3q7gdEk3E7CDNocxizdR",
  "key24": "UJvWg8F2TR3g7X5pPC2Kg9HHCxnvkR4Dj54Jz5AwcVo3MAefjmxBMdvTt6vUmK5N7MKEi5ibmjz3ecPF7vPxd4K",
  "key25": "2sm9Wn1XPJni8fGyS4mR4gXfqNjcRAMPzc3YVwiWbSzGiP35XTovva3kaobDEZNZtYSkEjcRDJRFXohh6tfeWim4",
  "key26": "3Chw7PkvULwEnDERPSf3LSSPZeDUKyCZT5kHd46rCNyN9mLkFq6Q85MCRW6LgFvUyW8fFWKh8o8zVdNh66y1Xcit",
  "key27": "4FJ2a9SvzFC2zRhgz8msjDCn5zkJqWraWD7Us7nZa2SEn8poSxnM9hsEMJUyszxG5zCrPsuRjpoybTTFYLYfAyhr",
  "key28": "2dXP6yYyWUMiaty6EPpm4rebwLyVmTygD7hF2oUsdMjKuRke5daZPrwVCYW5MQVLj7dafUTHTjvYL9UnyfwkBC68",
  "key29": "3TvgBPN4c9Bz5zF2k7h4xWHZVesyAKSn4PyFxma1kTDUJDp29aXYFjejQ9cfhzYmtK7hPW4uTbXHHSMce8MrCsZ",
  "key30": "5bpn2YpEcr5BC8ijoCLTngBecW77fBoWESj74bAQArA9FnVr4FDf1r8JUqNFJJwRRDar348fXYN3fFfnvRYZG1px",
  "key31": "5VZK2DtnqfBoFpKyCQ5kg5qvnybXG3mRHDQjnCV4h6oamtZZgWTJMsxRF7sC2Pf5ExQcDGFbvnrQ2Pbr6VtkYHcA",
  "key32": "5oHC8PYqYXpfKc1yZHDeSmmuJpW9Q3qU5tZrMsWwgDYF2heWehYoQdbrc7WLHi9AHPGoXzfT2j8neG4i8S3Lhwmf",
  "key33": "5AYjYdnzHQXfyxkRE1XZvQhzMsvy1EBEPh2raR3d98H7fBe2UQ7JPVLGJvPV75jq56KjwCWQUyEXf2stZqKHsB8p",
  "key34": "oNGy7kwo2wqNpr4WGFbrU31piww2qTT9M9LcV2M38gRd2rt7AiCfc3ARxTLj6aaJe39477xBPDPesRkLYa6Gxpx",
  "key35": "2nqCTks8Lb48HvjRMpZ7VkgwSqJ58tiyZmwsbtF2DDQu9WRqM6tU3kk6DgYNfRBex5zgtP66pEVXP8k3u5kTLnPo",
  "key36": "5a8gjDY5CGFUrA1kG3jLNBMMrxzVgatwS9FJxqkLKYiWLZDnNrkERy6Hzx37YTt82DM6s8oedBe1R6BQDoMCPa3m",
  "key37": "3cifgRuxGL5w5SSuivh3E2hoGjrRHYrWpbvK5zqsbGCugs6iXVQajYNrcwo4hqPYcSfrxeGbUwtBZXe66hUYFarT",
  "key38": "t7BhpKJw4pzn1jDaBmVHNdMHfrQHtxm8vmnsdcnfUkb1axMtFeQkXzELwjvffwRc8taSS8wZ8mJKjP3g9mW7cf3",
  "key39": "4APiCm1aZQHPbn3U58LsK9ybMufPm9Z1zU7AB3TkJ19YJxTYuMXTQucKXiRKc4gET93Hfh7iWsn7UUtWaaR92wXP",
  "key40": "rFkCkGwoJwAqqtg1XpudY7MabbvFysYTpiS7tsgfUdAv3VrgMe7Lm6tWfUH4XmGGm4Hbm88ZWEdUBxd9qAgim2f"
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
