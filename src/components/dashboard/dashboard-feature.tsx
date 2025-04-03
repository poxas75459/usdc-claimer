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
    "3SJwgePyWnCh28PwYUenk9oJjiNDaKKJrBJp8RegGD3EBwH8EejRvD4wgcUVBYd8vJa6RoU9T1pQqQgWqs4TGmab"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aVJzsMfE9H15sfHo1MGeGcUDDknzuoCQr4PKrohP8Lpc12ZucjKHvArbH2aqcjWN7wybHiwDmXakVwyqbCd9gP7",
  "key1": "XuV43EmW5ddjXuqf6woTARqh4qrgRfKrwVu33LKFSMW3oePpeQdwmnfP86ykC9MvitMi3k9akg7hKcqoJbK6JVs",
  "key2": "38eEcJXVsooUe8BJKoh88HfGEpvSzvP3awyJeuR7kpnCrJ7aiRZaG9m5Tre7w68k5Jen7RgXQ37X2eRQZb8d5BWS",
  "key3": "Dg2nrpxmQGjQdAX9gsxNpNEont3JzqA8kH751xWa4vNkn37kVGYV1jCTJJuxwcW16FqTGAH9Modh9k6BR1G3ne5",
  "key4": "UjDxSbU9bSAME8aMCqo61SsL7v5hVaR6LWMAGA66VjWreTHKNUPwywSk3shgiXqM7ztEZx3dzEiGL9K4D1S4FkM",
  "key5": "sC1tHnUoocb5NepNXF4P9DbyddQNnJZBEUoLQ15wPQoMQ9dm7DLw12BwDVdgoPnu7UPuUEtFsuEYcQLxxeuzg6c",
  "key6": "5QSVASxbGTKaKTbMRFdKTdMqyafyN4HPZjaTNSGDex2AZxzQbuxjAiHmAN92MxUSecUPZaZSUpDRdkKnNdTTSEJK",
  "key7": "niAqXNTgbKWHZ8Tp4zeQ4BKN1RtmJF8cUifNrQUBAmnc4JxjJoZ8W5LbhjkFrVpWyJmW9CEELqhrsoKDJbXfeWn",
  "key8": "4pngwiJjj1WrLajzWkm5YySu4oWt6f4A1Dp2u7eon1kPNGbrnuexToLArwm8i5BULxTvVE4FjQsAqhSzDBXKbcFt",
  "key9": "2tTJCkV4DMRXKqJHXVjwV773sUKWqUGFjXEUhk97G82eM6Si52fdZyvcaZKTz6BRmhJjgZUJEyiknKaXdTr72xbM",
  "key10": "3pEA1wgjjiChaBfbPUMm1LfVffwSiugVP1eXrbq9sHmr7ijUYqh5K5CUC4QrCg4xfHSmtTN6mq7VanTS3PPvmMQF",
  "key11": "42fNxhU4a93gJ2xADiGYjHqLBVcZER1fuC3deAP4g49b193L1LyoXXafEMqkBed89c3PkgNGZAgdKEUW6kEGBgdo",
  "key12": "24F5BUjuJRoVZHY5xvWZCywWJVNLbSZP37YjrUALRubzqpeHYLHJBsX98MEHzHJZ6zzcro7GorHRLogWiqycG3tE",
  "key13": "5Rxp22n9c8qh2qR11vUHwVhCY3b24R33osGwtWFu8Hzm1EgNp6zGykixFwDumT1yVcqioc9JHLr7P51vr3e12AUT",
  "key14": "We2D7WPZXa89QfQn5HobGuzJV6RhNSNZ1M6cYEh8EL2Z567h7BFxuRyF3BifbUuaxUneuGMbGnxpxbtc1VKdhGH",
  "key15": "2BqwRK1Ppt92Jkvv4nb6Ho7y57wy1QAZB8CJGUVULGLFYbeuJ2zGAvX69ZfLpf435XiJqAGgc88YWMGrW4EkwiTw",
  "key16": "2UxARTbPZmXfptEurD8daYEfFUMVaLPwxV23ZZadUjE99xUG4uLZPJCKToqZimX6oGxm3rwN2ifHE8axWzLiQrhx",
  "key17": "4fxzfFHcbHDH2ycVcsy1LPjBnMtQffBQh1CWy6hP3rQ3vd8xePnzviGTXxsDGDibCygDQDp9gRsy9bo7vB2RZjNA",
  "key18": "5RbnJ9NEACUcLK2PhMPPQD1wEk8LKo8Vs3Rrapa3vBbWdS1v27Dh4tPTKYCmpKjDzTMWwS8pPLX5kcfM8XoQBYnC",
  "key19": "8ZVzwmbmgZyHv3WUD97cKgU12BQc15aHzCW48BjVsi1otQiUAkeJCs2ZmHiuCc3wqH5nMmk1xwnvtqYJqBiTbuJ",
  "key20": "2MyksmHp5rResPbwDWjptbbqmB2q9KNhZs3V2pwsmnezNxXR3Pt7a1jGBettDVqhNoH2AQXXQ9xB24nvwow54sFK",
  "key21": "h3tBRZbQTNsnJ7UoSrowCf7DKxmgC4EodkFiASzKvD3vwYLmJQqv3zU3M67eMq3TKo6mnwLJeDSRRfjX3yAqmCu",
  "key22": "3Hc37dsdrKWvmzsKuY8TPC5YUBeWz43n2Sx1GEfJmyAXnDi4TDXb4DMGLvUDcUcyRYqqPZ3DxPpGuBLumN3JiwKw",
  "key23": "5LGjwJzihkcpVSzseDUo8XEBcsGkYQRYNGgSeVYhrokASMpBGKUyjXxZZKisE6maDzkznuDCJJpSeKiJ7F82qPCC",
  "key24": "4MqhMPrMU3XctYsc24kkQHZQX1JF8tZj95UQ3WsrGSLdkh2bqr4AmjAnvMHgvHaVU7mA23iau2afTDGqjGhABRaA",
  "key25": "58vmiEWBCGY85XQLVaS5YTZ7avT7GoTDthLGLdpFsbYtAN7rDpZtg7c5s1Zc5tC7qFuRow679FRU98r9EpEemwTm",
  "key26": "5PwoVB5MyZTTtw2qDytDDF9JSzVAuLxo9ZNZfh4eHX3Cky9kt2uMN2MjY72ToywvuJPVAXALVjitUbhqdTh3xzUu",
  "key27": "5y4sfhTcY6n6mktjvCSpHvknCJH5osHJvVb3WEqym8xB5AAemxh9sgCh8f8MBUjTgJGXgp4PywfMb36c8Q5PME2B",
  "key28": "27x3AA5sRP6cTr7Scna6sPDkVoTPEa5j3RWDrqdDfPFKGkkaTkW2KFbCqzd5VVoR9Qw7dK53dDTZfdjpg4UjB2VJ",
  "key29": "4DUZAkQi6LqtT3xQAJTJDbmyXyWYjJ8MDANyuXFgGeqxTeAhSyhGVVBwNo1cENY3QZkqXAg1VpEK29EBcBWu9JMD"
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
