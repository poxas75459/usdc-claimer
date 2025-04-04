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
    "yLEWVZRekBkoP2GaY5BNHorCSwzKewuXLUJmGWEbhScu8jZ1XLH8MMMbpHqHKzXaMy4zLkBfEVamoL8bU2MkM2i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LCKP8pFr5uRZ3Yu8iWBcjitcgJBm9Kkdi1YL1YNe4a5Ynx34yQzQ47AwpeAeaNbrqJf6cNTrELyuCU1zDJwpkah",
  "key1": "3HTjx2kY8N62Lv2mGfbTFnckQV3wqEbp3MBKXr1HH4js5JnWFdwnCLhko1oCoBuPuUYF6uGVVaoLcgtnVT1Cuhaw",
  "key2": "4vwXBpDad3NV5QzpUkJGSxmWTzozbPvyk6garFVsoqio5oxMhMbRwu9oBnVLQE1g34ueAjeZTpzovuESdQPhtjmD",
  "key3": "5vfMr6zGGqUW7TWvQ2r93A5JciH9kpDQc6cEn7ec6JSnrC9KLj37vKdfpdWbP6uC4LXbJSH6C5LrRo6eTeR3dMz9",
  "key4": "9QCZy92XTZwqKjegMtmByY9FgonEXkYxh4ovxsXGHv9cgYeTjVsLGcVf7W7jLjSBonTj4A6ckcsouWs5sayq7tT",
  "key5": "546vWV5pLjQJzNEN2GApbeuhZtE5hPjsfrxTseaN2XKfa8q1WowKzJjWis8cJrw6JfYATg59P6ipos6iaGV5mkJU",
  "key6": "4r7tFZpGi3reLyCVLzvcSvdEXezaSALZ2cv8eeKVPCaqnM1kc5XiQetS5PpR57Puk2sFq6srUPwFg94guqXhYRW",
  "key7": "4CLY1aD3Rt5M7HAny8zitDiZDj9mE4vXduJh81Kgp5fg2k3gB8XswTmLg25U7d1kYERzZvCp3bUVmSK5hytqqqtk",
  "key8": "2hf5J1J8qjXEDzTumBgnaheDQS9qmobkDmbkqjM8NXzNQeMDB8JQHmC8gzjozHYb373wuLUxenan7hVAMwBMWNH",
  "key9": "NxCg5wrq2pshReXYWmKa8riEmwHA9A7QciHMB1U7Lw7qErBgNx3ywQeLTV34UHhEW44AmG9KSCxfHfoFz6Rh3Lz",
  "key10": "4p9MeyQ87GNDLi6HFYYCWzGnzQuiX5kJYJbkiDnm5iXUSiadQPthGtFkfjbTVv48RJuX6d8nASQCZtzh2yVvmLmh",
  "key11": "5nFJm6WhC61obgk2RRZYnXDrB4f8GqcRRip4BbTYaE8N6xTteNFzj3eb4mxJQfMTtTMBqvk9ui9vEHXaG8MyeSvB",
  "key12": "3GD82ev45sZ8UuZWt95Fi2epkfLc2MoarfxgMFhPvFcU7FHYYLswn9vZMVXMBeyLTcknYk7qxVmLn8xgPVQ7avgJ",
  "key13": "32qM1JpENpDfYY45FsEMneR7CjJFFK3C5X6YaxiJiZaKiz42VRTTRgfuY7jAjjAfDLvtFmNzfDhkcJrvpJfCZcYW",
  "key14": "fprAp2ysQEtTvrRMZPAuA55UhBBU9Ewwf4WxjCtmyQu6NKPcXEg7ukRHiKJwfKfRcq7kq5AwuuwgfNkjfZAKWsN",
  "key15": "QQoa7ydRCMd1Z8kJs6Cgp2CqFQrsHH96awGr91dbp9B6dVK36BPVPG8excncHqwcQvqpf9gVUNiRMsfYKFCtHw5",
  "key16": "5ieqz7MreNarsobkwLuRGytGQsjahocq7igezVkH9Ppg5oKCJrqagCA5UbeKzCUzFeVNgFcQ5a5dwBqa5bw6w83R",
  "key17": "2BXFBboitgtZuySpMnJWWnyB5uK9fRbr7HQTvA3AvtsHLw2EB6xTAEETM7rw6DwSRUa2hBxwMZFwwGbAESkWwqtL",
  "key18": "3cvk1XfD97ADArjfJN4HBq5VzVs9DCP6wVtGDmFHfpn9Lxf4P7YWpjzCW53E1wHnATooVVKR1D9RXUWPaHUprkCV",
  "key19": "jXyXDdhwcZi46M1uCfNVosRgTQaRzv6cP31T1nwixVHY3nyiiwnxHDQw2sdjxd59ATuz3sRCrXNZGjPvruaJtN7",
  "key20": "5yGFRuESWHmgUx4cjbB1HrX5t6SjBnVuZv4eZo64As6UZv5aZ32P4JLFsRCM6MHwkLmEaABYdSovriqkHTeLzjEr",
  "key21": "51fVWeuyJJzSK53bsjwwhUptJrEnA9b6rttiR85MJEZEf7hrq9GnL8CWmCkwAzN2Hzwi8v2S7XLmkVPtg2mxN8C4",
  "key22": "4FiNHvii8oayahFCMGHXT3PanC6ruA7din9YGP4DbVDrgDgNG2cbGUWo57i24kRvWcsCDfJtGMgWJ6eFaJCrMQgD",
  "key23": "3Ve1HJieis7CnnBuEVF5Ppra5GCpHywLQPSN16rDaiXHbVkhQT8Dwb1fXSUJDdDXMxBekYWh8gta3RikgrDQz2Ad",
  "key24": "2SDamAe3qWboaNR1fUh5HVkeqkegL54vJWuFNuyYqRjCmxzZh3UHwu8WHKSkTkxYSqEau4ZgJRfBxEBXr3BCrNZ1",
  "key25": "5QRynrdeD1Ags8kLvzW2BmCB16p1GbWTutQxN1YxZ2YeCc9LzBHX57bXJsgVyjifUteUH5qh5WxC2jJpFJ1fiDGR",
  "key26": "upHHiVCUDYSzQ73YJALmh3psHXYmduizdDijJDopXnWsKuyYi4V5whSZDDJcpqVEuJMAwFmtaFpJooZm1uGa1XY",
  "key27": "3j7cDMm4a51TkgSPk8K9gVAvThDu9Psf9vPwm7JRoBdv2zJjQCiuqGG1KHiwJjfi2rNLfJhNvgvCwuoCKrSmrW7D",
  "key28": "2JcSSA2X1FnSXQJDun5kewECSoyVeVytA1hnziARDGvFNYYBLcE9uhKKBMUr49GTsFX16DcheZSTb4yUatt8kHFw",
  "key29": "4jmhVyjiq5duyDCqVr5vNrKtGGm8BAbyxXNdQwmcbxQ3x7yY9CrKAfgRGk6Zay1J792aRzs35DYG5ofjWEdz5L4L",
  "key30": "2QEwqP5hE1btYhpTcBkrzAWoqQjMvdhMvvWY5k4p9BvfWuqhAHuz5o4ot6oJmCV3x6K5deqdiGWLNmRvZHfZPBLu",
  "key31": "3rgVwvawfwyK8aZGCCnuqyAB4gJP41YdTFasv7vzt7s3v92FshSvnfNhi3BMbx2FrULPL9eyBcmg4ZnUuEDQiabx",
  "key32": "N8BDGaaDfaRQP1YCPrLcrs3rMusVvRupqJEfVt1LE7Lcjjy4Y4h4Ht3tbmAVqyyjrbc2erbGNEzZHMhJV4tJu5P",
  "key33": "3WyBfBwmbhS29r43aGB86jJkm9FAqzgZ37yFdbNQNwNmswnW5V1aGAQ8VzwJz2DAo8EUM3adXPF9Da5SxPTBofgZ",
  "key34": "51387L1XKaGLHu7hQANsPop5P347FgkpRHQy2HSpe6zjhsLUptPKTv4Bgkjon9vNjRuEwes7qZdzCecS9cVZCiUF",
  "key35": "5S6AavPngVP92yHGsB1acGHe2vP73m29tUmkgXP18dJGR2jG2Me4ejxyJr5BbU4fWEWQtAHUHSGGvsx7rfdQcFu9",
  "key36": "2bTBKbNzu5WYCHiKZt4eFAyqLF69A5NvFcBi8thXqXRq1xGyQUvp9Goc9Gpv36uznu5gd7oJrgzAhanEzEGqao15",
  "key37": "519Hdx4PVtjRiSYuqWzbxvAc41Mo416zxh6LB4QaVJvd4evufPd8y5D6NTETW6WXXLnbwQABu1ZSUvPzsRzywtGn",
  "key38": "5J39ddPitGahdNzP4auREyGtPkc5xpfiRALBRYbQR2WkfvJsys4SqGV5PuSjDPuc5T6XH2QTyrSqShwSgjY1cX5C",
  "key39": "46ganwzWG2mjPhKnTtbeen7wLwE1bBfLWcQRh2LxgDx7HqbcPkVF5mSWZnmTx7r9LtUjKY2wTj4fVqi8v5noqSPi",
  "key40": "oKq3uEqqs335Ckz2Uv7FvyDka6JkLiW7BwCEC2M8WLx3pUaTX9nUEAWykBmDYBg4MyhBiFhaE1x49Dsr15ELzwR"
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
