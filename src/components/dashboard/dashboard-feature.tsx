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
    "3ZzHPdD24n3apuYEYLSftt7RvWGbM52UBGMmfiM9qCaqimpjaBgtAR5PAo5NMpPJDxrEuXSqp4hTVE2gBwoixQWc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oCwRXYQzmNqWAbNyHJaWUmDYTBQjXcernMBPYiZyPqdrf4W7sKWs3PQwmZPfG9yMWFqd6w74C3i8WvXKnPcw7JT",
  "key1": "S2arvRwnfZiE5ctFTRZLAfFEmkwcYYqvKCwim4nw9yaEvaHvoCQxg6REKBA5m3PJx6fYTh1KjUUSs9dcUQC3ozu",
  "key2": "4ruPkBEMSNZ7whvaUH5oGMRg11PpQiJmE4Ed157Wr2nYPSKB5YarVofgswaxyk835tDGMyREB1dbNzinTNhVtdf6",
  "key3": "2mUwpKCDM45TjDBW2kw2x44mQRvpLA47pvWNk7Eh1eF4rZfaqiGin35HSDjMdKpfdNo8v9XFtzZYuzTiANfxZoG2",
  "key4": "38WvMseLGnYQCRgvk8MyJtYCKPvRWxKVhJn1sX5DbmpyB51cRYswTw2P7Gt8TR4AqhVrkC1ZrdmkW6iDd7WJXGKp",
  "key5": "2UQR7wxhpQTHfvaRMCHqhEVwVBLMeZahTk7PbGNaamvJ38AgJUgdoyyxwhiQj5Tz7x9EG1duaoqxZwSVsAf44CTp",
  "key6": "4sxxuuT62iAP3GrwEfUHAZbLjQAgwZUTxX8zzRXLT5M1S6W5U3cgUjHNe5hRhAeU7x2ya3JZ4u8pAM7UaSYcbwbj",
  "key7": "3kFm1Ni88R3cbS9xnbmmWzVVSdZuwJsW2dzJyHSQtVwwShYoqbug9M1xbQ3psuPxL3nKraGQStzLGXFHdMdSQZ1B",
  "key8": "5W8QT2yeX3XWs33y41tgM4svPT9HkWweyqELW8iuWWr1iwM7bURT3TLE8SoM2rJt9p24GmdZVyGFYcWQZATgRrZk",
  "key9": "4sReC78WEhpydtVxN3U8t8SEFFBiktCjYhYAZeykHbesqhQCUWoSTCPiLMsz6sEZdvZ3vyimFQ5nQzUAd6pJ4Nrd",
  "key10": "4LjPr36RBPY7aERFVZNo35mCce3WP6eeqkw4aDHN3dPgQRZfJB7Fkp8UN4e6XmQ8nDNDABxi1yn8gjwrkeCvfTkH",
  "key11": "5NpHe4k4KLLdQWStS2UcAtERfL1Nyw2ha4rMFFQQYN1sT94Ugkg3RE15Nvgx5zCD3RMGhpRhjSnjSWRbrPLJ6oij",
  "key12": "4unzeb6Xm9QtrnFb5dhLzfbB1BJEJz2NWwhvNdxdSYDnA8roPbt8g96fNodZpN6HtJdJNNLXa8W31KEeHFknyQ8Y",
  "key13": "3grzauTzz4EDzvmWBJNT1gufVMikvgcovs5FeJ5RY4xnpwwEnzQH7pn2U12npTv8YxYJTupNNpnCZWTaBqCBtT7J",
  "key14": "5kmnzChHu5U2ZHEk4uZyGvTZYX18CMriCddpxmskrJPhpRgYMdAvFounxbkXppHy1tPqUt84Ym9eTTGzBXjQrQCo",
  "key15": "Ynyn3SzeTg6QRfniqmHKAKiwMabxGFzyXTmwgUJ7osBxyiZoeZ7SBpPaC2uqfYtqMEmmSadMhRRjLwrENKkgP3t",
  "key16": "4apPdbMdBfyrpNqujauv9yCnGJVhzL6rL9vfiSNXTTUcsyyXpffNMBFPLgTTmEPuKVBgXcUjnDxM2sfaeqWzxngd",
  "key17": "5FVMQUz1LATKnRacwsUQKZrgCLRADENNJy8rYUL9TcWtiUBd5TrkVPshzLeULSHE6xrtYrSKugcCdikVeHHBKKpP",
  "key18": "3AoGLjBvXsenrV24cXLMteW6WRHoqfd6cHsTSBMnWYE8BDsPpFq2wx6zrmttUaDuMyuKVo8PMijxoczfU3BqKKpP",
  "key19": "3L36DgTikExHsfS2n5nYyKHCPM2WzKSeB7K1GQp19cRASseH9US4eSEHkUi5HPbA1LxHNdAMdgReoisp2d55tbj6",
  "key20": "43unn2fhEAR2iSyDW11Zzqjb85Qg847bDBGokS8XWNGM4UJx1qBnt87i9657355b7y6Us9ecuiNDkKPzRbZ1VWqn",
  "key21": "4aT1aCnG5dbKQ2QY9RVzBcv7EoBLXEuXq9e9L2aNxchpJi95s3gEftAfNKFk34f5Ax7yVeXguBHXmkZ49pBhYQyf",
  "key22": "2b1wGzvHsTfZpAJZv6kQf1x9iTzKTi6mSUgy1T5p9QU28GdHuD5Brxi1KM5Q4L1SQHuBTosGtC5GeERfnTerBnSj",
  "key23": "4vPeDtjs5ViLxSokN3FdCUkTQu5XzPGk9UckTSeinA39NJpB1nSuPnpoKhfXiEasLY6WTigp7MwwnnZdptANhheD",
  "key24": "4fjxFY6R1CqQgd5o8yG2bHoffJbgTBmYdYnPkGE7bYovcjZgUp7CXhnuEsa4GQUu9zAyDizPRUD1GKoBHEZWoMqH",
  "key25": "5EbpnVJx9jHaPgkBt2FVzRsb58SsV7aEjvFLJ82ETHkzZLwDhiaSZUETbUKuXNgyS7pqSRUDPF6Q2RZHaJshMboF",
  "key26": "4jktaxU7MWQvs194FAhcZtpSywgt5aZDpH6Cq8jg2ekMZyt7PyyP7GFZnSKZhYx2RPSE6eS323JojPUeheVPXPWE",
  "key27": "4Jx8vrbmh2hf5FMwXDwXh3L1hHVwETL6ix9XCBH4MKUuXSfa2fWyEw7Qbe4WdHazHraLGueqsTewGBtfmsgo5Jvm"
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
