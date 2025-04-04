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
    "4fff3yJa6tTfWkYu1vmFFjP2Pw8oKdYgWaZMdWQTY9XDKHVvbqxbPtiqFL5s6fPLujXvpAimz6UwsRG5dwVUYDDq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZxAHErpwrDL8Aeeo9eAE6Xam47wzrjCZi8EHaZJWuC88L7x9C674Q277UacTCzVwK7syVa5F6DAtwYUgdpgbbCm",
  "key1": "49MUXwpsvofsa5bLtUu9VcRUmapfr1Z43gykgpjApPioYoqXrdaFk2nN3H6BicRbFpQTPy3Z2iio9sEQbhkN5qAM",
  "key2": "48pEpGkWRdUBhCBPDufTQpS5XscTMVveaRcw1fq8iAB6tes6QWUqyCCPWsYsU3TNdhrbbgAvCkfseJXV3uLdnYWt",
  "key3": "3BEiNGojkc58WtgNTV4BBE3o5g5m2sHcRDAYM7NXqeaihXB77zZYRhwVT4sCicv6Csp3wUYZ2XSX6zANPYhY9KP5",
  "key4": "3zBFKX1KM5dRLyTaQr8PFRZ438oQRdtneTA9iezwZ1cR7xSjy2u68JocN3tpJRhEVP81zdPQtGsB2Ff64XH149GN",
  "key5": "3GxX1VrVQJbbwhxUEmooECYiuAXf95HY8NAY3S8xurx6SeAebL1Ht1RtNLGXRdvyMrRfeYjAwhZydAGvbrhfkhtd",
  "key6": "2mqou9XKGEBiH28Bu58DKTHef6UJ9bSmvegkW5NtA8euFb1AXC3QbkH37d8sQkgTUzGyCof6kTbsSEFsdGDRG6ed",
  "key7": "2E2DDAiYNpCUEBfYwbhb4FikittjnJArdxe9vZzmcSF4uyXxsvEY7JkLPFkraimyUdZG6Nji6LuAMsTuP3zpeKGk",
  "key8": "4kV7M9Fii9iuxP7WV2UNow7gGLCEDCBz69kqj8RpKGkDVJ8Yuyiskh1HGhSVSPxEpA1aumCQYAebwinS6sNsHgSo",
  "key9": "idHm95RksWZhExShowmUuWxFyA1NmyYpDXiZWF173aTTwV3swDvpNAv7YYdB1mbxJcwmSL2JethUFEy8GBqXGtk",
  "key10": "5Fg91CTQDtKWXcwJRWPPCZtPKTLXf8zqMxYeMp7WuVi4WPBCFv27Fb8Yzqo8boN3Ev5bgZNzuJbPdNpHerz9c7cM",
  "key11": "2GsskiUAimNgZvYuPD8cUNdyLFnTCaNwLyGRhUrcgY29kaRythaLxFu3oPAPCJy69py3TxNQJhvy2wHgMSBP3t7G",
  "key12": "4YVCUKzvzn4KvQNiurmKWdizoHgYwtuKz4QtRfxAsuEahoAwhi4UjQgTCMZ9TEb58f6NyxufHxSZghutAz6BvviR",
  "key13": "5eDZH1bo5uBXsBGgXE7NKXocF8wSCUuuaWoUSTJ8XWtQdMp2PxZbj1rm1w1UnK6Pf7axsvrLZXzc2hx19FD6HMeH",
  "key14": "5MAUwHfm2fXB9kepiScLPD7jgsAxQFbTwTHypQmLbzvpfRT2h5iRfEbHXE3xtdRGMYz6gB7TrqSVVdXUJGkiPf6c",
  "key15": "42VM2qUG6FcuumxpL3Mfr4tB3HZmXy5zKTND7PZ2Y52xiFk2acAHkJ8YsMZweN9zak3Ja8a455d2vjyz9dT1TLwu",
  "key16": "3D6MRJ9jnHANYCgEXNQcfZiQuRpGW7ETp3yJZvdShijY2gqjHYxzUiZiAcCbbqs2we7e3BU1XzDcYom6R69am3Mt",
  "key17": "NxkinGVjZVqoNyf1j7MrzkwvKQrbMBaq1RfTVEvoYAcVe5Tf4mYErXGaRwZdaP4FPaRrGtozivo2r6paS9yUyjB",
  "key18": "aQS9wqjGSyKZFnotnVLx2zirciXgax7sdWJTiFfzLWdBZLZx5StyU1YEm1wiVMNQFKFqEP5faPoWuzVDrgn45qS",
  "key19": "37ciier7jPJdcSD2Ci11ErVTtVZP6qBRwmBqrhNnhjfDFVUvmwfbFSjWkNRftv8ceGZooAMhZVdv5fLq17KdJbCU",
  "key20": "5Yq6zmNVG12ysVfyNHyxDLjZQUJJCuerJ2pntrF8oV67w8wzhVWwrVk9dB2uYPVrM1hz6zvTxMY7KGfC4Z4Mhmxf",
  "key21": "2jLJv3YDDNVisfxmEZmAupbG8XjmfSfjtQsWP2NGrJ8exiPYQBiSWAA3k9onf9CxvVzNevbYhodiqvxvXTVxBuLs",
  "key22": "44KCdYxMgAVPGQioHq8uB7G7svNHSC98UiKpf9vNoiHQrgq2yKB5qLDpLLbeKB1BZG2MEFBPEod95GCJR1Hh6P7g",
  "key23": "1sMhfp2FSjy8SDx1zK2SJcB8PZgxXTzBveN3kxKa9MtVHMQWaFvYCb9zVAUMtih9NCGQAbu2fwq4fJb5zJC7eyf",
  "key24": "5K8KMSQrRgRwZNa2rTXhbnNGH2XTZRiegB9cPV8Wvzgxg8UJNcfEkmAm2Ts27A4JAhZu7TRmuEcbRtS5CzoPnf9c",
  "key25": "3NbknurMAQu6QvN4yjifjzwqKtCHWRrePN74SAeshXHWxchjK5Nk4XJbMV5n6GbUoQyDrZRnQZZmmP6CdCGwXMvj",
  "key26": "24LuxGwm6XoZj7dRFLBwc8D6445wwGdb9LyAQv18gTC1Z6eGYbDH4G5jCCBCM5ygqzqWnR9pHYQMweajYHqD1B2q",
  "key27": "3CrfJrjqmSY4B4k3ab34pno2PY9fiwYQFyHUCz2E8cUj32GUttm2Jj5k35zE4aUYQXDMHJgZbzjF7DtvhPRjBFGE",
  "key28": "4hAyKSeutHeFA82wHpuzUbKz35nnLeE97zjVcfE56QVoUinb7YffR6if7hBf5YpUTYJqSe95AHugcU9Fhn2Sutmt",
  "key29": "5tyUi72TUymMPLnKBXAcf7F6oniVF6xgwm5v2nzYERqmXsgMKhW52HHvwB7Tq6u8aiszsqZkz7qce7mU2Psk6SkA",
  "key30": "5KLdaKa6ALfoc1DeY68soL5owrG1pGikpJj59TcUJgG4wbD9aspR29ftUogWY683rUaJVFpGD4NkiXSaBBXS8YJc",
  "key31": "viYb4WZqME5kNGoUZ6rww7cU2cPSNv2wsP9bFiXcN3anKVXdwzp2QeJ4Ptu85qBEH99ewjQjYzgU2PgPayrRK1s",
  "key32": "3GfyxmASHTYxyUic98o3LVbwkJc5y3N765SVyzSRGWnPfJvpAZ4EoSWXhSDSGEBKSToq6JErVzdWX2DC6CZ2VKjB",
  "key33": "3hD95Pq3B8QYYtG1SHjQGk9duTztVJ93Ym881G8sk3w54ETTf9K9etQvN56PUbj9q61k3AAfMBBafkaTE3uhDftZ",
  "key34": "596ocs73d6idH3FEqtro4asCBEhqM9oVmwwKNjHBK1Hv4Wrfehb9XPCFN9YbtehoBLsBesFaBytiJV72FSrszgbE",
  "key35": "5mcpd6sxVB5ZdWDdngntBWY3RkRhMJVLL95er5dS8B1BJkAvrJC8YPqphRrYQGR1wtTmBSmRhcC9qWqSqMYjvNBh",
  "key36": "5zyRoDD9gt21GNy7cusXF6UtysRv1XQXwrC53AbDhLxKGqjNVbrgUVEQpJVaCZF2NF2BNjpK8PSTgDTsdF61hGDj"
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
