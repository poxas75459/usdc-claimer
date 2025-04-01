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
    "2yj5qEWWSsUuEymQTq1ScKTTsR5AHoeMikSFt2XTPFKGuDPbat6KEB7YkbPuM6CvbN3CRK4qXvmyAYVHwhpAPji7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2q8WjeUMyA2N1BZLgfPGMSRDFZzQj9T72N2zPYK6Da4mv1ntWHX1Pf9vhog9kPnpXZack51t3k6VLq81FfwDvGz9",
  "key1": "wqhkZmiiemuRET6KfQU4eDqFwNPHfmwY9SftSr5tjAHtZsAxzTMnamzdSJrxjzFdkFW8v7rJsRPHQy17aLHBaPD",
  "key2": "2nsd23MBRmNBiDkKvFgE9oegoon4MTXzCDNH26uV6kkym64TLfcG4DqAXHWCf6oRLo5rASQrJFvFt6eo3RQe2hVv",
  "key3": "MfrnBDnYus4eJpaQr8qQfSY2bZDzdsCM9yFvTUdYhH6BBrBswekuvx8AUBNXu5xoms21vDTtP7zNNZG2saaKdm4",
  "key4": "5J7Vo9tj9YLBz2XQB3dJopqrMkC1kR2ffR2QaykyL5d4iJ7uKdqHjk85HSXJz56GY7CSsxeuASi5N5xgeoCyVgJv",
  "key5": "3itYzJ1BG54mrz9i3zqHb8g2Pzsw8WgqdDDfUgVfxEgt3K3vMFHWnTVKaBkKqcmuc7pTHmm1Mt1LNhbXZyDMZGam",
  "key6": "Y2kTwMDKx7NWsxX7M6YUTHFCZ7s5H1LgVfKkK6hN12swEPP91RYbfegZZgmKkcdz8N3iiuu8APKAJ6mu8pGgjcG",
  "key7": "4dmEj2rf93TPEJE88jLfxABQYvnYEU9sYZhmuJNv99nEam2sC5jnJUc4tuYLHrnRhZWDTRdZKK7YfLwckCjeu7oA",
  "key8": "4KYXhDAS3pTyHVc2sWBMKtbVk1oSgfXk59hMytJzHVwrbGazaCDofEVEUShQdTGKABGbNfKtVFX3MsdfxDFhoghC",
  "key9": "9KaeP11ZAt5BujTTRFaj1H3HLpYn5WLkgpAGC2qxWhJQB7YNVkYLDPsqR4AvPvKbU9Tx3MAuEQmorJZCLmo5V55",
  "key10": "66ebm2QT3MHDg6skkR35jSKuTk8KRhtnvR1opqhqPDBCx9Hd6cVZBik9nZoSCTFPNAcqj4sAhvjdTA7KFMfdX7Rh",
  "key11": "5tqdMZSQ2ECgCYMNAYsHRLAExc3iTpWcVSV5fqMnh6HqTLfwyf7qiBwa3zkxpmNznQVvVSMmGh6wcAAB64DoGtac",
  "key12": "4217sEJxWX9UuidR8zvjJnAnBwQBZdVJyW1uCFikzJMocqSZh4HuLd6cSfopDNev94U97kMvakwbFCXLGYRnyHNg",
  "key13": "53eHh2nJP3q9BeshVazNRo13JqsBeEDQKUtTaq4FWHMX5TZBeknQCwp74HjsBk94nqcFJRx51GN2M8YtzHuofveJ",
  "key14": "5j1irGN8PWMxF6PhfeHgJbTtFx8nznpTfCm8m3RjY46GyEEkaG4oaDdDUMGGV1U8BU9BXRCC8XesJUoHc3tBjxat",
  "key15": "3hVPeMxJiFo5Ve4VMC36pcpN5ehPXCBnT6tBr1SpHngaZai9Z1UUJTTXVa1yemG4QmbifpchCP9uYvWHoVyZAszK",
  "key16": "4UqzpycBkny86uunQKayS53Nx8h8uyN2VftmQHUS9L4MrXYUTnjEW9DgMz8AJY87HxWTNQxHCoNNoHKehLBD7AP8",
  "key17": "T2js6u69uh4znweSjrxuzzMrS9UmGNRRXWyvd1C4Ed8bzWKhhfjiGpmJSn9zXSisTGZDhpSSW1MWNR164MJtTRm",
  "key18": "3tg7LRGDw5s7Rpdq2TaX51qJuyecXZips9vty3H6brmkEAjxieqkgShEodKy46kTXGJ5QT81oDTmft6wDp8NTb1L",
  "key19": "3SuruAKhg4zZAy2o8C4BHbaJEWSqaJzTTzgy3aZYGuNcmBeGjs1d6FS1BVtReDLdnyEMEVbZyQCPYu3ohWaPBAp6",
  "key20": "4pf5b5yDGxQtdyKnQvJQSfjqfdmVmBAvvztkNik7nkzZmZQLtoV1PyJ4YFh9MJhhABH8T39QpmVy8X782wjMDqnh",
  "key21": "2PmL9Myp59EtbR7sgz4JGhs4Y6g1u8qqacpHEZNhPt3RAPHWNSaDWJk5XxHfN18iZ4qzpHPhQmfSSkwoofiw6JJZ",
  "key22": "2oHn1na9NHAHgRXfHD1dhU36hK9X2XazRTcvHDuxU856F7Ea3HkxwZFb5MJkfpCAed8grcwp4suj8iNA37QY34pW",
  "key23": "4o7XHqRPUKiS8HBGzpoetJQaxrZs3avPrd1RTTsZojajeQc2dEWGFisWwVJmXmX4vTQfUPmPiwwBKw3JuD5ToL7d",
  "key24": "2pEuucnuUDrXwKw4uoFXCA5EDgQhybrJCYf7M7KGPRppUp59y8BN4tmHznLvdM6D7jdjHra7iH8U4SuxqYhQEPa8",
  "key25": "38gP3BSkTr3n2vZfGw3QgBmom4vsq416swJCDHHwcQ3AF2KEfuMBKmtRQdwcpEykiABLH2tZeMxQk8wttGRaXoS5",
  "key26": "5pKKEyEK7FVLtJw2XdC6FaC1c8F1HjTHciZbyvoNPJsnyDagTSQ6JJUhZezD3fvzf7vZnm15DcJxAdT6WeemReCC",
  "key27": "CCmWujog36rdbjkEJ63taV1MTWyeuZo4VQWeLUbhU8LwFVC2sd1hNFqQFsQYnxKUNyF379RztncyPmXVoGFyLiw",
  "key28": "3SGiTqpPfwa1zp63pqP3khF2NGiEDqrjHPHppExW8XsnsGyQfd6t4y5szeq7szuCeiZgSisP7dV9p5DYkrANFskw",
  "key29": "4FkqM9Ts1nVyXFX3pySyhpCKDC9zoEU9eit8YwHtkv2iD88QoSP7TQXXxybn6icuY4CgncabPGnWBrtQe6xy8bT7",
  "key30": "2HWKNDaHtrwWGbHHe2aU5roUwD3JYSVLcSnEKuq7t3UAKFrsZ1zqhNVkEjSVfWud5NEdG4Lv9EsktWwRHsnkcQPu",
  "key31": "zSHuEuvAgacE6VxEs89WHXwKKx6XQWG6FAuVxJAYaw8RGr6FDP1NuEV7dLdCZqDucGTshhpp1kLdk3GeTty7Mws",
  "key32": "2Q65wUxJDSDMHFnYp4xYD2TLmTtHT3bXVUGbadYeBhMymgYakVmnrYCft4sgHgwSw5ii55xXDAhXk5d3Y2FAWnED",
  "key33": "2sCCiyv7Xu8WGD13cwcze5hw4AbSo6kAsvkTua1dNN9RkmnPBLERsJb88h8YDCQ8GYagD2tCTK9ARcpZrkRZRsXJ"
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
