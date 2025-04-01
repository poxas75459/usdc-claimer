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
    "4J1cjYEieuXADLwyJuxh96sh7y2iLZAVokTdFLx9fnD9f1QopeGgMPUkTZ4qdpu5qN3z1nGa9Hk6yodUGdZmGGpm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bTdTRo2Dx6GF9fGsWk5M4qwMbNLuy1ZTz62evoPja9Ros8gLsED2qpu85bqcsaX3KZAYeWJoZNtLaLf6AG4hvun",
  "key1": "5eZUyRX7QFhaJgZJJvbbibPAqcZbjnUhiHgM727ezjPA4qmR9ZY487h7LFKq9EY6wdRK6nyy5VYnreQzeyuhvKU6",
  "key2": "5uodciYa8pbSzxAXf2wjhGvt1aw1Nz1zP1qZZYsdeR9iuDLJ3YUQ5RKSPxbfDKzoG3hGuAb97MrNmSbGSkzyWEQ2",
  "key3": "3rGp1Ru1SD84DN1mMYJBqNM88vx362RUCSpCaP7CRvNSxTxyghTYDsMaTH2XkT6Jm9oKwVNdmTqtPxkgnu599LFw",
  "key4": "4wia9zHh3RCPCDRos9kyHSNPFNvjv9pJwtMfTnTmzCBMqpjUsd9FKU8WowtutfYgMxTTnFDgnw8PRLbdstPW7tvB",
  "key5": "2K3KhRJUzi7CwppQQtEpMP6KAerSTrkgqJN45kfTpLRUeSH3gd7ZCEgWVgvdJjj55yGcE9qjL7jGQizBDYMba6GD",
  "key6": "59EN11PVFQoTcBWh9bKaqwYZiFMxJYE6PvpCjwy3U7J8D19K6DwjNwomJwSgAWwU4fey2SSx9o1JNU2C3oPXaJje",
  "key7": "5mUpgZxMbSspCnUaox4Y6aPQALn5QQzQRxf7rZbEHEgA7XDh89QmXhXmyat8REF7utzjr5yM8dzztPMPvop2tabF",
  "key8": "2cXWR2HE6jhMXMBgvpiWqPBnyH1saR1XZz8xZY5QsHMrNSCXBAhRZ5Z5AAGSRELpMkMtAXX3QX761tCSygsWNiPP",
  "key9": "5UmSG5KMdPtKkvhjkkyUHhGiA2DzxL4cC2NFo9dL8bZE4ws9adDDZW1vmC1LvVMhVjLkmJhGpxerdbM7nbJaoWFi",
  "key10": "eTN5ksaYtjYcLpdetZxjavWbv8Ff7iJBRuLAtuHuDGHBT3yTfytWowb7fii1nfowSBkakKxxGAUCTK1bCJsoqGZ",
  "key11": "4UZbVdDy7Tgfj8HBBV4v3vo1DjynT5EMDjqc8VSGCRKNag1X4xoDpySipCesgUSjVYtyfRVTUXsPD2aXEm2EFVxS",
  "key12": "a7SJyQe6sZu97ggHdLhXNwUJF1cyeLhamYX3aBVoYcP5JmBAGT3r6MueVnCCJDRRm9xXHDMG6B3iSmb43c38KWf",
  "key13": "216TtFFH5Zw9kYgvjN8J9GHjaggjAypP5aEdjXheCMYnWCCf5b2gBJxNVJJyFiLyXJCj8gMu8b3Phdy9wJE3p1ke",
  "key14": "63yTVcrFZn5gVPz7iUoPkg7tA9cGc6JgdLGBF776NqiiS55prX2LkEUuem7e8Bq37rXwRUStacTnKSJ5F8TG7wHj",
  "key15": "5uPSEAtfrWdzckDHimaG17ddCRgxktJW7ZKy5Mg9S21dfvEWzFYH9K3SEjPBsXoNLg6QvaEvpq632oidFvPYTsSj",
  "key16": "5UaXqcU53HiFn3rEw7WXaGe793rJAmcnSsntNNd6VDWKKbM3dEXsh6rUPLrckU7JeCQBcJ9dF9oaKbXLwkHnvNc5",
  "key17": "4nppAAsfEmrBRroJSQFJJVLHjJLi2xSKkaHNfcRmLvxpY3kMr1xJbWbsFhU4cHmrYuVRU2Z5vyFwSQuZTC7nX4mc",
  "key18": "4KZ4VMBkPfzchA2jGjk8yksWRPDbrSbUFsFgf2nLxjDQpWc7Sx5V59iVU47QKCnpC7P8qME2xvXVaL2V9VBCDknJ",
  "key19": "41p2axAAjF499zEkDNH88cAfmnPLaLwHQevJ1Y1vwZkkPFNycaDvdWHrxScFgrMCiAdXdMrbQzgTC8UW4g13zUAz",
  "key20": "rgs9bjBMYmNxMnsAvKuhgur3uf9RQawo233PKdBGxU8kSn1D1p6awb8yRPm64z45yVpUpjf1MY3baGLcrecy4oX",
  "key21": "61iyPazYLn8xE9drYZ6UTG3U4Fo2zJDW7hvCTA7jfjj2XaSGTGMAqoQxERtVeT5o7Spk8AqyjtAjn6JQ3MB2dHch",
  "key22": "5bdRRBhnnVr5K4QfiEBpokyakauhuh1H9j9chRZtjBSkmkbBquDopRJ8RgiBkXVyC6NhhWsv9bZbfWn2FZZR6Shm",
  "key23": "5FJc2ZP7h8eNFgTmp6dZqcsswbvKamE1u11GRAhSwWN9dXQskYGi2x9qdpGEEWgU2X6XZhyzErsJ6M6tHnbp8yxb",
  "key24": "49bajHBuMfsSRcdotVJSyPjFs4qwbFrbnoGjV4nFVyYprKaStuoWXuQNoCGkddLf1XxYXBvXAh2ENNakUnPvCdX",
  "key25": "2xGTK1fZZwrTp5oRTAaKRo987gbS1tfHsJVJxhXAapdbczWJ7DFhx5nmsLNahxM5DQGo4mSPnyet9VicMshStZ1m",
  "key26": "4UFtxhYkC1KBHcniCAKMUzJH71guK9kEUUrSH25uVix3Q2d6cxFFN8AQrUDpxmA5UhjQWKW1zWLLHBGbkzxSM1Hg",
  "key27": "3i1SifdbrTCVQYfA7WaAFA4Qp3r66RVBfjhYkyBtDbgytJrnhiumJYcGnJiBZgqcaLZaZeGfHA7oYZvqDJEAvFPq",
  "key28": "tcQtvcPJ9vouu3AE8ofqnQReTycUUPA1bEYKymQuey2fkbrnQ88EMT1f37wdnut2o1yT4PXVssY7aaVh73hYVn1",
  "key29": "4CcLWxjt41fj5DUSpwj4mkodE9AxqSLjyJz6u492Degff4gunVhuSVv9sPp9hxY9NqFFhaXTiEkusGAGSJD2MDGz",
  "key30": "MfgYbtGsmum17r4HWyXZtigNpExVXDyb1rB2o4YSpHTfeMCpHtG75a8Y5SCkavY5LuGXDfZ4x1JE1PRukJf1qY7",
  "key31": "28YTjQNfd6nqcUhbFRUPYa4bNXH5jmFpFXaj8nQdNAQWEb7XBcb3ugm7ktu41KhUKJYG8BUPefBTRT69ZBQjMeSu",
  "key32": "4U4USmX98Fs77353B4XiWxx5SFqFLRchAEgyfetwF4WuTPPJQ3rL1p7qASHRtTJkRFg5KaGpw9nqBi3AadmvMLHv",
  "key33": "4XR4wGAg72PcRfCSmgwoZ9WguHA2tRZYecka4yXmufEqUMaDZsdoE1iYLJtfBE16yfMjrpd9DJ1ttVT2AZfy3bNq",
  "key34": "5XCnFM8NytGHT1WvngKw1mNRVbsEj4BLZaRCfWiDi7s7NGYZpJMr2nDZsnVx4sKxUtwKw7TjeG91n2wweCDHmpTd"
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
