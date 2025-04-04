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
    "4DN6es7NsCd3nF8z2Aqpe7fcnVr7AtYJ8gfpsupgWBQ2rePTCKgRgpTLFt14JCToz5LAKrKwSRSq5HPkmvfT54Md"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UR5udms9veVuT6JRW2FyzQo6b78UhJQKijfXEEPMvzwp1DU9fB6DAfHBqVYt67bkhELfNSwvJaWczqxZHKGqQb2",
  "key1": "4Z7qVyduSgFFig5sr7EyVMhsuZvkTkLy8tvfakawA2G54xQr6ZYV6EjFDyWzpu9cKnhfbtVo6pxmVgKD1TGyG6DS",
  "key2": "32JxgxGtiWCtCBm7CRK5FznP1kJfZWVAssGetmXr6S2AmxoKMULJ8TZHVe2ZDFUwLgd6Nyx3vyafMw26yNX3zcYS",
  "key3": "5jfnYMRDDXB7SxsMgTsv853yfGhTASnYGrSGwJHrkwffhzgUJP2RCj4jMxWekbAag42p662twWcbAi1ePH5mTEQX",
  "key4": "2Tk6ueu7LDQSjAeYw6znHT1a8sXWq3M2gR4c3wMD7bzPCTvyoZw4mcWGVjE5rUaDutPHL1SZXheVrBWNEwH24PL1",
  "key5": "5BwWr1YXHgsud1Ag9JwMxLygmU5f4VBpAcq9zZVw5PXhSW8LkYPudzbej1Cd3RL77mmTn8PFgPa7rUYkpydKgLLD",
  "key6": "3zawwWQudsqZwnQUQnb84RB7fPCfwzoyZmmWzyZe68aZxTyyHatJaHJkkRRvR9RpHXtoa39Ru86hXS2oJVkfDcbL",
  "key7": "3pcpGv6svdvM4Wig2PeMR9LWXLTgMvnnbRRD8yaPPSBascyNe6hJ8F8DH38RkPKhX76i63Lq3Ns3HDKiofEyx59d",
  "key8": "667PiBNt4qPN12y8ohksSiMJUvV1WmegwwttQhZ6dL2Z84V5iTPdxpD9ynwXWxQvzMxg7cd2GCMGW3Fsx2P1M6tq",
  "key9": "5ZBiD7BUi92sBbCHQTuQZAwY9f88rhHu43HahnXJd4uowM1MvVvWtMADzS6Ja1J5qtyX3BdVULxTRxDfJmjeWrTB",
  "key10": "4Ydekn3EhLubVUmh9ZahLX1pDN8tKesYFx9FZjKJ92dxFiZzWAskueETUYRhHoMoED3RWpwKk4pgQ82K83CJV7Ei",
  "key11": "5M48TQWfJPpxvyzPQStxjv5GKN6phPv71RQtDou2v4kKz6btcDgNWVqDo8zxy66XNGrhZF17EwRB3fs6nNnEBWan",
  "key12": "2wKNGLbg7o9Q4PP3NrVJoH4Qjy4G328vtkCSLWZhPDsaEYXD5AoM26Z72sf4exPxWaa8bEDhPvSsRAexzr6Fz3Zg",
  "key13": "4vuF9RAYRChexMzHBEv48hGcxwMPXPZsUjNukLZ4s9sKQTJ9xXrxSYTC3LCJN9zmoQcA6ZkpBRCL8TLrSM7Yo8Fx",
  "key14": "2yEPHVq6AiVctC3C3ubXcfWbXozaJxfics9pihzK6ZRiDeGM3J2BPVrfAKw81ZUj9xB2bhSYBLURoHqxBifJ5se4",
  "key15": "NV82n1RR3EH18iYuaj5mq2LiaDcvGp9RG2Syv1qvBpHjThqfPirKEjWSi5XmkV42od4qw7Bx9dK7e5z9taczTyM",
  "key16": "zR4e9zDr7Y3795Vih7EqbrCjBHbWD3sSPHUhynhATkzi6UfjwP7NdhBY9M4VNev99GkEuRQCVpMMubipESQZoNW",
  "key17": "VUtQwp6wcvHKdmtPLUp3wrHRHnmEyFrJ5FREEjUZMwQfnAyH98RM7UHfRMVMNRJSZaF7rWvp7ofS4RnnQr3hs1K",
  "key18": "4SV2DY9HetKgPH8PFj51LR9hxmQ8xgSQr3aDuXeYAP8znFLYCTpTb8EMri7oCoDhH7Mj9qoDgR8F6EPgHE1XNFQg",
  "key19": "5mCY39NMk8e6uH52VPuvhwYQWgS6dEgUFjw5gqhQc9fZU1sXuwQLYh5RQyUiGXxAUxmRLvnNz9nfjLNboc7BXap9",
  "key20": "2Xh9befqCykKf7THyTmA8nxNT2mTRHngTbwaZi9zRzkxSFFoGPNx8ehuBrYvDkwBUvWBHrVmEAuucWmzCnvNSpCm",
  "key21": "5BYfWNzrj5qUCnxHvRNpToB47gmSN9LD3CXJz6p9WPcUJsT5X1YXWWeXLXTSLCT9EL63QPQoMuyayx9naNp3SXYn",
  "key22": "3deQrPrKJg97fhjK836VhTmyipNVbDxtKMyrH8GWT5ruK5McySEdWx3T5S2GM31tjUMdMtuBTSpVdEb4dVdbp9ev",
  "key23": "2f5i1muDJYUdZA53Bb1PJaqMdAsG9F8koRCe8tb8hKqY89kRzok8VuNhAmPqCiYmWyrgDAVLfZEqgh5eCMJiJZeF",
  "key24": "2tTktT7tsguwQwrJ54FXAv1sQi3yks65twm66VJUTWcYX3wYtVJc2buJwGNNiTmLsww57TaLJobPm6w85eT8QXW7",
  "key25": "4NR736jjAdz2UiphGZBqFYxusbCnyarj4U5cYfTsGpcprZky8GBcX4P93uZ2jtzckQ3QqjKdbFihF1XPvjPc1dbN",
  "key26": "skmWrV9Fw6FgrNej5dyMQq6LChTqRMyy9qR7KSbDFuQnDm7JebMf44MpvNNDi56CqbstRsXNMUrJKHPb8s5tM25",
  "key27": "2y5wXyf3cajJYCgzkQmW6YARBvm7boD7CDS9Wk5NryLy6Q4MsGEzGg8k7XE3yrzg4BJ96pw6T54TbtQmSpb89ymP",
  "key28": "3UhUD1J5hnLcU2Hef5QiT1iRjEaS3nmcuXZa1MYYoLAD812f1QX3x3W8P5ABqwQSbuXnZDzxRTth8ePdf2fG6V4J",
  "key29": "uB8qM9DgWSGZjGtqSB5Jx5aGWbLdEnwpBx49YiTwRiVt7tadX4eMCK5yvd8aZLasZ2dttFJEBgWmnA36NYce8by",
  "key30": "FEREKp3kYjn7yTtxdjnEXHDjPnvwV3zG897vEc2dc1CDKDCUtRXEebVqkzMik44YDyUcgWRyuQKL91rpHjufp4Z",
  "key31": "4YJdYe1ckU5Y2MMkzTKSnDsqi6rCBjHAdQ8YBaARA8dXSJniHv8LLdhSHpoTUXmkysSK8MM34qULoa7ojPZPfVRA",
  "key32": "3ynBDoZC2vXGj53fEzGK933xn3ttqq3FZ65ujYp3KB5sKHBWGvjQjr2ZoGbvfUZBgYbb227S5yFAndrLWsWLdDMW"
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
