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
    "3nn4p5WqoPm6GMZpGFG6xRZcViDPAm4U5pozbhbpWJC7eFz4y8FjdtcALVEU1dopVc5ES5A68oNiVJapVR5YohqE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qQHrQee1eGPP9fh6RVnMF2UhkPWoc2fxKR3tMX1zPBawrAkEkXLXkRYCJYZSCygmpWPn7KGJfJEUPzvreWKXhkq",
  "key1": "27or7ieKzurDP3JSnkgEQHQkqvzVsim5Z6vnfT6KpTd1rPDVAJ5ahEWbuv9s3DnczG8w7KQJGArdYLcKqGewNPtk",
  "key2": "3KWDRytffR9ZBhAKMyeNRzTREniuxhFXeencVmjkPNaDpeD8rQajRPBjY7P77uZvgtAuB8VTQm2qG1HSwjeJbdgQ",
  "key3": "M5N3ZyYwiN1MZZYddsuiRD9YE91za3Nbr3jL7PQg8kcauK4w5rJE6dddqASUhZiYMAtvk1HqSQbooMoe9MYB8dc",
  "key4": "22LE7Y7MjrcNnFXGVdBDDu5ML2ZF4Qy4TjrFy7sfNXYHY9jiX6VFQt4WH6ZHmPeonyyv8t1g4gaayyp5QVbw85XL",
  "key5": "4736h5Xvah2YH1VeniD1LzrhotfvYMFfGjw8z97HtASxTS5tatRBRy7chzfgJvezyjd1jCYXx8YhwHV5dfSAPMji",
  "key6": "61x8mhV9wmJoiMTgdxc4Y42LjiCAxZDDgDnvyULtfjRLTr9nyPuXnWov5a21t6iy5hMeTYYTw9jawZE79U32bC18",
  "key7": "HsJaFoGYDeBWn93T2y4JZdinrJa1xD87XnTdWGYmovcqvTct1UgWPG9BEh9C4Lad7GzDnsNH4gi8qr96vekfVSQ",
  "key8": "Bjk48pDw1EAp5im8iH2TsthmK5Ugs17ex28i3T6vTtppDXdA7DebeDbqEDNWDPFxhG6kGUcCyLMWUn6Sbhz8u3K",
  "key9": "4x138Db7YaujNLfKKeBVbSRusD16h5hDsUtdn6AAhesbU9fQu2j8ieTZ3NWeTwkCrPj6PhuUmUSowxPbqpQiaM3E",
  "key10": "4MZPnL9UqHXQ4vhyqvxUE6jyjUrVd8v6eKmb8DNRJQ64C2HLPd3HrcP9G31vuJ1Ap5s8f28uoD3o7s2bTw3pvbfK",
  "key11": "NQobMwesKA6ep7HC6RNhNhFEhhJJHExaK6mH8S84mqiCc9wFfmce33T7A3D5H7T3vshtLhDX4DATot6oNqpwkeg",
  "key12": "4MMdKauet3vcKJRvQ23AJaz2Fe94wZCvGhG6V5znsqV3gRxHxyfRgpVyBHaHXgxVa16BxcZ5ZBMVMqrq3p2LKLWm",
  "key13": "4RHLMTLWEpuvhYPrxx2u3V5N5HMxXYHYMWseU8XLma3wTe1gjTBECBvnZ7sggRXvFWzpzMwDY5159RQAufvJnfco",
  "key14": "5fPFDiH99inj5YM25Svv1BqLhPnrEBcnvMyP1Jpw9kT9vRoXgAvjEsS6yYpLm4foYPNeKxFKuCKQ88uZkpVaqkLc",
  "key15": "4KvJQy7cfEzb1VWzh4aEBpgsF9jUxPRzy2P2h3tj66XvaSM9NfWmsWFiUsynELWndsy11WMKyVcoZ1twxJSUX1Sm",
  "key16": "2yAQMF46KmT8Si1Tes458wSVjU3R6acdZGi1E8tJew57q3kCjZbNx5T3BQtrKnrBmsVVhtfpXYk8F9RL928zDCau",
  "key17": "5UEWaR7c7TKvnXzN4rfP3D3PrMW5Y4EwE7pha6yu1GooiiuHSuMUsp1VYf2Xg5yhFTNXBWNb6UcrVPrAMkAAXsrx",
  "key18": "4BSKLx8yQxxqdFtS93eepcSbotHAz81w39mcKbCwiXCAB9khhE935r4WPg486Eb51Guw48m6MYWXzZbv2vPAjEKk",
  "key19": "3WTK3zvz7KBjEiayZP7m9nRBBNNeeY5Z9BqzYFrAQ5xiJHTrhEiEZNGcCBofaUQ88meHaepL5b2nkyb5VpweYrVp",
  "key20": "ojFeigvUwUtgqKiRm7WAwraT4GKTLB26WvwizMTB9P7vwB4Ajs9YKg4jXfLAWgFsteu3NQ1qzHwcnvZFiFUDjWB",
  "key21": "4ePxZ5DiMXcN8WbQGrSAjfWSeZFcDiogTwTCt5hHkqNSMrq91dwDXzYqv5LPxjk18pZHwJFkaoXCiKEZ8vs4B52E",
  "key22": "2Hd2RBBuekrpWEuDtNphevGufzst6hpKiTZkYVtEbhkX6cnGwV9wSabhgcbzQ6AEX7Uphe1GFzJVnvuHS7viYBYJ",
  "key23": "3Qtk1DdwM8QaiH1JkEjEfYj71y57JTdeooJkD75aFLNq3NTwEWfscm8kM4RKpRXTyqnMaTaBYfcGHUKWm3RYL6Y3",
  "key24": "27LJ4TYSTf5sb4fnLyzoZdUeKioP4sQtiBKsb5C9oFMAiBo2URLtY4T1cELWsYUsKLq3sYvTkzmMzj2DD4gknBD9",
  "key25": "2omAhitMT61kxpv26BH2Vrky2yMhNNRnGagjRV6FUzD8BomJLSEVGncCn7mWJ3Ww5n2P2XuC71e4zFZYLiFC98rp",
  "key26": "7A1kgQ8QFNKrve1yXajeoZiaxErrEBtPhjtxrxxM2ifiweZ7WDZGxfwsR9soW6q4ViiGRwUKarUkCeArnJ3KmzP",
  "key27": "67QRWb43PqLN224QrDHmL3sEmcpwNyS9kLimpDmZJiQLEMUk9uSuzAKCK5vbZzFcNDwetHAGxEadoQjiLhnaGe1K",
  "key28": "f5Q45zHyVpkFoWNpzBDojC6H8Lv8t99g3k3NNGHBLi1o2jhx2uCifZqH9pdNEysqHx7QaVtDxERpKKgy1avP7EV",
  "key29": "2Z9o8YjnfgkQ1bT57YQ3twjLe2jMBiZnNKToP4TyjNvWbDwG9F13aGemqvwz14cgkdviHvXHnsNXa5XvBnTZWfSx",
  "key30": "3hFTSsV4Wd3F1vP8rug2ua8TsX8Eoe8AWB5XpNTZURcSorv2nUaEzQNmKpmvbb8g4pwFr5W78xH3unhz97dsJQcs",
  "key31": "4hoQ82jDFYgBkttBoHNahmge1ZH4i51u2fWPQWo9ECKEF3BAQEtTUuaC8z2dvNkFbUhg4GaziQnpsApffU45aTaY",
  "key32": "4ui1mfg62E5wE3FBsgu3xvdT5fq7w5gvxd7HK11mcmBUovxvBmnZQ73zkX1WhNW8HzveWGwhjqBPZrrGqhtJJbSi",
  "key33": "2MrcEA1SDYLHq3WvHrJb3DMVDUatBnEjKte9xUWmmq22D9nyNA1JfvgaiVc2Foe91R2LDQHrZ9D2ehSVSiVs48oa",
  "key34": "TBoLpvjLfhZj4zofoPvkGCGwsyDR6QGL481FBueNVRDfho7sKZf1zCfAvnA9sQtydRY21oMXofQX7K3GHpLBuSn"
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
