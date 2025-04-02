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
    "4qrdQ7okoXrMrDVir7Zo1HcPWsgm8Mu5RFd428zUsGzmjMK3TNbPNzsXQG88HqRcvVCHHPY3zy3vSdJ4DmwjXUR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5S1BNewyM9DpNDkDDbYXPLFAfRMhJfsdhdmqqhYV8eMTh3Wavf6Ja3zSBUEjfGH1L48haFELzAVzwTWnQKBHEguD",
  "key1": "4jtZRxB1F6udAYy1JPaqtinLhnbALHzb5X7frqCUcpqVeYYbUDBYbyjvRKZJVn25F2nyq2FMTG6PFKRKZqmiAVNd",
  "key2": "4EEF3hc2qSaVHH779971YSmVDPAJ4Z1v6vAjeYH7tcMqZsSXxLQHUeYu89PGv5P6vCNAPQoB4qRK3peaUcs8qw2z",
  "key3": "45sXUpnSDrNpEBEbcXV1bcyUxzJnuPE1txWj8GtjRnoCqX5pJr6razKCPGrkDb5ih84LkojZe8w5bWXmTtWT6YBU",
  "key4": "3gLE2eToQjD2rAxQLSgdRNu27v4LVcXhkT3mUpCDnnz7GbFN8YJMcSB5d1ompKbXR2s9DDeDLYBdMP9Kk7mFocu5",
  "key5": "5aQ6n6RG83K2MhaMm4QRVsyDJRg5Z4VNRe474qFpeKiggKhHRCweNpgH2pgmB1muFrAmpAdYo8wsLm7rwT5Nw7Ws",
  "key6": "5EedHs4KHv8ABrt9MAVW52uusQxagJemGNwA4TEVH1y8aSBB1gF5WSQYUrr5gHENyQ5iLghNWQk2HRmxHQqinhqT",
  "key7": "5pokYJCbve3wHM62cR6RNMooxYiENd1L4m5GM13UnjTtUtiT5Y78J47oFSDkDFegoq7ZXx4nJJB8JPM1QYRxxVm6",
  "key8": "3uE7sobeBpq1N95BUoHUpK8tjtUdYU61HQ1WZigcFwMVXJmv2LQ8aj9E9jPLVSeEYPgV4sWyP7chqajCxB2f67bK",
  "key9": "5gXCeVcXgSBCVnSvDL3b2ypeZ4zm8hNCqn4d9fZyyh8BgLX9LuXRceHigxWKGVNzm4okmN6xirWSXshAerF1ERWJ",
  "key10": "4jDhsiMQjrgDx8EaKSqFyG8s691VjDwGaZ5i1aKqyeGXnmskxbmXPVS36HrZwiFfN3jm8mczB3RSXfVW9T8qj29t",
  "key11": "45zyLj1UYJ71RL8NZhGy93MJaEXM31BejsPTmbBtSgmEuExfkC1kcSbyZ5CugWEkHG5WHPuiFkpJdCnyBkTheVQU",
  "key12": "4hWCJJJnLC8Vv9Y2713QfhqAQWBF6Hfs15aeXYYzziVQM2gp2mcRg42T93fKhjeLcVaRf8B99fQDbw7gVQSxZy1Q",
  "key13": "4GZpW8Z79K1ZRksXUGtzrjGx82j4zJWCNkqHPCZK91cG1dAbVz9gVqwkXAk1ivwsnS2CTPiMmQHzqAxrebp3iKaC",
  "key14": "4yB4pz83caz4vfQoogMc9Ng7NiSxTVTNZSB6QEi57durMLKaX995q9UB1Le8HimHGkjha6vYcyqKT6SuxjGudk6E",
  "key15": "5qGkWCvEwap7iqijUkzrVAwVzWNzvyucCmFaYpptoJF8GiYfh3ZUdw39asWShfxjSXTEEVxaSZFhJwSSTuKzW9tw",
  "key16": "5AuPYqswtAF56ZWaaMaZL8BeBTQVbbdmJ585S7WgtJ2UZCYrS575tK11XjjsRthJXv6W6RkK5qLdEYtEyAmH9Du8",
  "key17": "39bJuxnBs7dj8KT9WJ8Mc3uNbAJk6tDpqei28a9VjsDpgxQcvzpWXsmwtfBVNVC79UmuZTEdx1ZhuQc5FddqtVuc",
  "key18": "3QYeMiZwfbkQ9emPVH9J7YCqvZHKhHpB2wHpSsrJf3D1bprMNo9HvXM9PGXeWiXNS2HrApHi1WhrwZehggukCRAq",
  "key19": "4FKH2sXstQSJP9c2su37S7kScVB4B4HhKPdH9R5fY1YqLALUFbCAGEEVf7wKSSR7ypoXP6Ya2w2MRwN67NUZeXZY",
  "key20": "iSFEaxGeBJXaM1k3ZvrTtT5WDSQqytwMrCMX8rzCADkpgRRzdz5uA1wQLT2z24F9GNSrcNipnXRm28SXzm7vdf9",
  "key21": "4SRmi33uUoxvMMtakMtjoh9c75vQJX2uyuJH7F7MZ4kdWZtjoEbGhbrHXGJ2nsW7YvkJWbeyFLTSa8XN1ynVbM7e",
  "key22": "53VrafpJys8GXhdFEVZePN42PnkTsbnH3m53K8Cc3WhGfJayxkQeHXzSDFYnME8zEtMTiANHZdHjJVvYb7sDbmnJ",
  "key23": "5SoLysX8HDSpYe7VAu51KEM3i8KDdxNx8rjNS7e6QDFk8yPmZTLzAmP4BHgoqJBLt88kb6jg9ngMC5maVZz1GByF",
  "key24": "13d2NCgbzXLwYEjXhDVrD3KS7zzVLsKQVEk3qmpGZBLLC3uXkDk15KxBav276v2WYBYtbquAstYY7ZLaBAYDBuP",
  "key25": "4H711ABoH1Dem5mK2MhmvQorJadZptDVBa5YdvBqvj5GtujCZaDpT19sCEmDKVQgCfz33iV39hDyPumAMQA9wp6n",
  "key26": "4Ax2niJ8en5i3zsciDgpiGcyCZmSdXYKbBhwJWodfLpnVT71zWTskwqboUkF8b6Pgsgt28HxknXmiEgMCh4Ant55",
  "key27": "3w1g5VggPaK8TjVGvn45xu4FkXcvJ2rWHb1yw3ndRkuFc6vqrJLJiDfexbwf6FvNcP5jdiY4vCneZ9AMwsCXGnqe",
  "key28": "fNQw82PDzixQ8G6AqHqYPBuyXZz28G2A9PJWy1sGK33367YSjCbkzBdi3NS6kSYpGNLwwJz9sS1R31RqqCRguEB",
  "key29": "3idz6mH8ac2TVFeztGPJmZ5WPJTxen3ugfLqG7Qex8knTCnCdxMT8XNL7SnQtnjoxUiaLEf2DW5iKPCJrrr4N5P1",
  "key30": "27Lm1bJqL5MRiKiGNXwRSSZErGoipqPkPGub86NoUuS8Cd8eitakkLrKfTVnwwLS92FMiaC5WhXLnzPZzJGpXG9F",
  "key31": "59VSoBbTQA7bjro1Pxod1cffAAZ72pPKwUBPxiMu9Gzk3aYnj7rQ6UCWMn68oTBxv8mdtWAdtEY6C4SuPxt4KPfN",
  "key32": "2z1GM89ofN8Ln7DDJ4uV7tHXQ1f9kvyUZSfob1rh6uQJze9UjPi8MYM9DpQ1s72GokSPL5atB1yVx9D5JafdmjiC",
  "key33": "4HxcfEK8xVJEmZnNpsvSPEnD87jasDbAqRordjXu1Pgzio5jHXXn2sfmRCN5JsiZaEVokwownTjvSF2y7da2ZsAY",
  "key34": "vKWmM9W3FgJQ7xCMou5taoTMjuPqiUjLu3Te9NCkpDFjoa7q3wgMkY7FiDohBrK2WgD5d9QeENyvCwPqPEfCGh1"
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
