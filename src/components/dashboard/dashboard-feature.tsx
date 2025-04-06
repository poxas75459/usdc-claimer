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
    "2Td9BbyqBridtkHCy6dX8RHwyiTV2ACwSskn8hcYbksWnFckYLVYCdNKnTD47BC97Nm1u7z7fFzNXuj7qugXWZ2u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67HB4GP6ZhcQdorMtCAJ33GebWcpwiXrrLqaQc3Jm3TLg4fyCNDx7mvw85uZXjKSLauKpGw7cqFM3i9iFVM7mQQ2",
  "key1": "3XV3AeqYujdTN4EwTwQ9hGAtDHQdPnMYgLQ8Jf9QS4CnBycBMpAu3CvXeuHc2dvhWxW9yF7CFUdYti2y29A9YPTB",
  "key2": "5HRarAwyFfibVPdniz9D3g1UJXrDFezGAM4L5g62YWzBE74611HWrSsxhMocJRyxNx1Ho24oTpbySc1HJBf3gJrd",
  "key3": "3gfbSrsdK4AZUup1DVNaNp4ZPqHHoapVL6rsfd17ZHSDaEEpzmh46FZaUQbbpXvirDKUYAPfZZQ8g7TDovbPBbq6",
  "key4": "4xGLDkpuaJySc3TTEamxa8izp5jpAezzcgESSeoxFhz5s9tBSxv1Wfx29d9edQuQ8tEpd66w6g6WLRcA81hRmRik",
  "key5": "5kUjCcAwWhQZWWE2JUyfg1s9BXTMR35tN8bTtf6p17ipUg1QqTF3jPE2b9CLena5HVphzv7eH2UVair9PhNQJGUw",
  "key6": "5W8atX9C1B5ftm3h3dcSzyMeoFtKc12xfL2772wSz59dn9i559Kyk2kX1P6fAzGSE2KZZEmdweVoKdJDt5ez3JEK",
  "key7": "4iVytPdCgTVZzY5doPpwQ3z3KPD1zDNXYtRNva4WPfDBu6az5A5ehsb5Lgu5y5jHsdRYtkzdT7u8L9PewYBfg3LE",
  "key8": "5WAmqEcigk9gg1bDD98qMk69tCAX7sFsyjRHiCDkTXMEArcmi1KmxHQoYnEeJHEYSFFAdax1GK6Rzsz36USQfCn7",
  "key9": "5bxT39g8yfXgh1TyR8A6iQyHbyzvLo7RQEtbLzwEEVUd3AvotCuYHufrmcRFPHMUe3BqejYTMUanbpiwNjarBeZq",
  "key10": "2qMoRaC93nJva3Fe9gnkwrpy5GQmzXKP8DFgz8iAkF2XEZpTkwRsW769mqkrr8vTv8gPzRuMqgahnF2qex7wGcYQ",
  "key11": "5DpLFujUVQDqroRFRgDJLZurY9tPVadFyjnq8MG1dbVTe1cFxeNE72oDsDAYLbgeEoDzcqH7RkxkpkuU7xVebsWJ",
  "key12": "4MGSFMpUBRLQPZHZx8edrmEn5PafUJB9P8r2Uj1kvgaEmHsRg9tszSJVCtY7zCnsvRsB2W3yc3bVuF6VWN4SrAm7",
  "key13": "2tP1DkZXagvf9C3EcPPi9La437KbdTP55ZGH3s3EAqRLvRbQsVfjqMe8VQud9X2h1m1vwuv3B3WJnrvvKAksjPQF",
  "key14": "2n6RkJeF8AAM2fjJMgiuUygNg1k2XLJzbvMkshcM9UFu9SJnN7KRGzjuPv2p8vV71kLC36iuturrgzahLhn34ow1",
  "key15": "3v3EpWLwtjdDbwuED3wF61jqymumMkbYmAciJY5X2MEJFQ9doD9KemA8pELWkHNMdpui3gSnbH6Ei6mUwa5i7TJ6",
  "key16": "2PTNoVcvz6JU9iPDmjvFxDBxCX6mk21UsVNEEgwuiNPTTLjiCynnX4ceinBHCoYjuaRxtUKM3agKGkz5f7ewjWGq",
  "key17": "2u51G6zqBJEqBiiC6fxiJ7WxJrR995D2zweXmj2V5FH2uSHYCxmx4hrxguprmA9f7hCJmbficEr9W5k3HypvUL4y",
  "key18": "22PXcL4PcdZxczAU6etGthEKfHjnf6H2rZ2xb154kLgWwfmzjbJ6mhFTDSYUNMbp8rJDDsTDC4q35BTgiYSva7Cu",
  "key19": "2YAiRT1mVdP4drpWQAbLY9wqGBQ12gZVN7Z3X3h7zzrfteF35kLBztpy4NDTzyrqQ4FxXs7KXaKgyRu6jGKFdkFY",
  "key20": "gpGmUf77r7ie5WyvivM6xs5AFBVG9qs8ao6VBdGV3p5uLt7xQo2KQPsmMJLWo7hr8Y6XvoDQN7ggs4wG5TgbEL8",
  "key21": "3m3o9Y3PXpAbHwzhLmoqH7wXTF68YcfC54gpFHpvA1ddFseWvqfLETHMkTUfFxk3gSoo9evdhvxsyiQkuNn4puzi",
  "key22": "27Wfi2fC8bzdUTVmYCx4X4my2iK4DoNhSGhAeb3ve5CFFEKDrepRrdLqV6Bub9HUQHi5GzW2tYKvwVwfHnvpEcSt",
  "key23": "48Yzk9Azs92hC7QcMQk94yjs7FtCx6AAp7dGXCK64z6LETLMqqnisqGXLyiffa5UznYS8CjwGmTXHrFMbCmyKKCR",
  "key24": "2qYkozQaMbREwj6NCPJp5S8oujECvpP2CpYNf2To3azH4rnAycFZMUC9kYq764vjm44EjqdPqVrGFodqkpi59ZPA",
  "key25": "53ggHdR4N62NStDg2acZWu6KdGpLvgDwEBTXKxpLD1KdDjpefS6x7WpN4odk35qdVokCsLXdxvSbzxNuwsyb98QC",
  "key26": "3fTTABPzJZiRgf5pxdX9JNGv6FNvVYV6inh8b4SkrFByapaqYEUa2k2a2MJjn88YM9BwAnGTgiKXoh4MBRhBkPuL",
  "key27": "Mhhmh4XXu3qZ6zA5ZdmiSDHY46B478HJ3jTrZHF7LQQ1PwDifihmVfTzTnfZZtsrPaQk8n8igZjpj7sVyZTsLXC",
  "key28": "2rCZEXAyzfaBQXj3EShqmzLcmaWmcTdYxNuowWmFmuSxCEtYJ9SY66P88dJDLVVwYTqg6gFTyGDwi3r1isT8dB7U",
  "key29": "4jUWRxp3kyE9wCapRET26o4jk5ZDz17BfwfW6Lr9GfazkXcC2c41ba68DWWR8m3esUeBkzz87XP4JsTmCDQKZa94",
  "key30": "2LzoWMwQzW8Eeqiwjj4uzg5ZxTop2gL6amkupaQBRxS3SDtqZ9PxUT1wpF4uWqoKTRbzDq8VF1CLzKHfP27LBpAs",
  "key31": "Bi7jM98cekkEbmKebGwBUSFPPB8mD1XZ1GPWQDq9YkXkn4K5RvSCfrodaTQneb3v7o4kokiAsRwh42dVX5CnhDn",
  "key32": "jJj5tBKJR5uRY9L894EvEv5tTGW5gt7ErUDKtKKLvTUrUfChoL2YZYyPU94v65F6XCf6bkt6NmL22WpirCpfVey",
  "key33": "3ta1WjMFqNTa1MRxnxhKgPHayjGb7NXB2PcY7iXSoEzXVxhJPoKi2CpdqWDcEe5rHKCiXganCjEKvhwe9TGKhrGw",
  "key34": "5NvAgJeGVxE2A3D8XqDfcournXXomZ7YGPF8TtjtSmampU9bX7cJCwFZdQtf6ipVD6tGqt5boUPo4oYKBmnxLmTS",
  "key35": "5S6BLaWnKKqRvQpzZqMVsZ3YCabsGWQGFHvYbs8d8XXhoUzbhovKsrsQFpnU36gXPSidKFGNQ3gXwUGDwHsjuP2v",
  "key36": "4saxL3zuAWpyVtqJJsAozVenCGkmvzJPCTDvbCDp7eY3wSi99r6gkCzHEf79bbskMmd6EibrZADfaNciNSfjbdiP",
  "key37": "4BsJzLYim6YScU1y4Cw1b7DrzFiK8v82SpYgWkZXDvjmxNRYEcmPur53G8G1WK8ghi3RhJqWTkeNRofGL2WRADfv",
  "key38": "27oSWsCS8F2VEuBM8QhyAcpvq159WyPtpGrjXSQznZurMbXYhW8kDaDAmT2xnSQVZazNUBCFTX3cpSb38b3uDsuB",
  "key39": "58KcYeCzduJADwEYJoExXHVsNhrtL71tcV2Pu9nLJVwb8SQ7FNrepxvCbZTRxgSBnks9GDAUBkDJ9qSPSJjHKBYk",
  "key40": "5ZdxQGWZd7thU5HvxQojUneQUSKs6ymfLmwJFGCKFhEuAtEDXYBctJBuaWaWw6MrcwiqsjiXL26w4KbEiwsrr6xt",
  "key41": "3DjwGXG6krs92ahQBHsUjWWvh66reM5aPzkqFEXjsiDjtc4SXLk8hDUpjFL8KhvzYiy8gusd9JCyvuGvc4RGRpr4",
  "key42": "2Di2zK99z8AW47MWSDFeaJqdL4HagigV5kW33ewUoJ6mbcvmKywW3H13Tju9pxk8xPj1w2EAt2asVDS7dZQUsPGy",
  "key43": "ttzZ8HSRftrGD7TrFwujJ9CE6JnzLnXoeSdA4rNmg1fTHrVYwznKQRrzrtXbUvin1goNyQRfnVxQ3ij8H6iDP2W"
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
