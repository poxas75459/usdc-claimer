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
    "Hu5Vcs2oWB1efCWx6sappCVnBUyZRupknhSbyfH32PiLyH4L6C1ttCK9UQ3tt8jAhgWeDMcBdXTozprBk1zUfNL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4atH2jwZcEPMCsvzCycQLLoJhBhxVaGap7gUWpbFNDSnPxBvLpz4Rd7seKr4hmkhhibj8DeyeVtsw95qJmXqFn7L",
  "key1": "5i5gJd15aR2NiJB7DNqgweNZLZEFA5NmhhoMWToTuLU7C5DBK16hLKAB37uwHuTfErJ4pbPQPSYDA3m6AEqehTCg",
  "key2": "4TkZM7JJwCVumt4hBVSVHrLa9snrDHGatCbTh9Dfpy8erdspbNVT14peXgcjUbTH56MmewryThF9XVpA7LvZSYXz",
  "key3": "61FYgLFCDWaJjLfCCFfeqHuM76YHgm8nEvDw53sRnLcej7dUgf2GKZ4fcCLAqugbRcksV5VvjavKRUGeEg4WrP9P",
  "key4": "36eqo7zCbrgECrXhYmQuVZ1bcfPntdAAxKiERvnPVYWAmVof7MP3C75UL7C7cnAwtD3YVK1WPVkuKe88kKXREc9K",
  "key5": "5nDxpNL5U8aW9ZLDxVGFujr14DKbawR4es5gzSkBDJD22M8G12dSX3VofGMmQMSMBq51gzouktbFoj6Y5WqWK3Tk",
  "key6": "43SwW1ETmBg6qHVpSREdRCAPp6dFNXqUiGWbtHf7xuGm9YGHC5CbQqvrAGmSjX62n48i2FUJ3NGLWtZZUo6nKFbi",
  "key7": "588jGXQpsXeLTt7caGCpJFZsatzJkeB832tPiAZwXvSWZZKmxQyVzVpSZs6vxnvjmkmGeshbxY1SU6rqHCP2aMxJ",
  "key8": "21NvPf8Xtg7NsyT4hjPJW6MeeJAbTDsPRyuDBWF9bT7YtPRZf6t5wKsuegMnaNLsJporj5ip39k44oKUVqfgzNDY",
  "key9": "BjLNNgCp7KxFkRaEZqnFuWt34ECBUmPb4A8fwjryXAooHHYKexphozDDreyqJdNfAmj4qhvuHcCFsmWcjeupxgg",
  "key10": "5sqz5JWhTqKkkd8JDCCytz5j6asSJCnWcp6E5faLLTMpRkBcGfrVAAoARSehuxG9SbbGHzgLxaFwncP7QzD1JCws",
  "key11": "fL6CFoDkSasyR16Dez2GXBKvtTEz4fED79dDkDJjPFptFMdaQWLkEcAGC6hJVg3WVGDV7b52LEqwk2yBwDAVJ2T",
  "key12": "C3MjHt13THwwgiiKPGKsVTUCo45ypXuMtqL1WiFDrCzzQCHySSgyC1eBPzTY9EQ3L8jnajyPgQ3KVybfyumAsyQ",
  "key13": "3w83Ym7VYLrrZEGc5355B4S1C9Lvg1r2JPb2u7KWwvf6SAubC2Ay9s8J2mh8ZJm8B7dqXfKPXb3rsYwukXdEyKcT",
  "key14": "4DFkw4EfHRebnE2sFj5aNaaEFZ1bQ2ScG98XkdwwnEEdNL3urKsdEzuXJAkNr5u8tuKJFCFfCo7AXjge6Uwuu7qE",
  "key15": "3KndRnp1kNXL9JzDSxGY4KVf3PAnfRDVKxWCGXNPiBwZcDDemvYzwJYM76P6J9dgW6b7kY95rwGwAxAhVPHp5W8K",
  "key16": "29MTmhH52qZdQ6RjuLxj7kuRU4VN2wpk9iL4k2xLWYr5w5CbSycnmmZeruLWA14f5eKMro5s2kcv7EMDZz7GWMyr",
  "key17": "314Tqgr78jV5NQDLBvHyD46R5CjbUAt4EyeywVJtvH63EKi98uEhEB7q1RhPgwALomkvNiq8X2CW34nEYktW1Hnm",
  "key18": "wC1mYM5hMSmBLuBLabCXgEmf2Z2i6AG628w8Ye8t3HUKN2nrbhqZLg54BvYpXbMUusTpYHnF6wDHDfLVheKrTid",
  "key19": "dTnDTqGrQLgRqSCoDYiRU3Xj1PM31HDCggoLTsE4i8q43LNA5fiK2XsYTkifbRB2V7dS9Gk5DS12TWYd7M5vxK9",
  "key20": "3KHWnZMmqVgPUoyi9dHEcgbYvxMVXbDehDQWJWyYfQ7aqN2CBZPrNr12teSWwYHTUPCwv5seWpg4wZWmum789Au3",
  "key21": "3CLoRTaat7kjL8sZPLuQ7tSVaGVV3fmpjvqkiD9r5aLi6xXAeyoGeXiae1LCDyew317keerFRtB24caXYpmuLD78",
  "key22": "64HKzSiPXv1bmCHdjg8rPnFb9SYH6ovBnf2aPADZbAPt7pYZxhHTsysLBKjGLuKdRhN58YwwgS8xeZoPsbYDBzUa",
  "key23": "3grmdtZYooep3bYvJHBnLsYuBEKDu5FThUQizQogvR8jnHNazLpDG2nAPJonfGWsRvAVDE9bxXDghRAhkEenY3x",
  "key24": "2G1tRBbsDTCP2ydqCgfva192G7R2DX1x1C6LjRg22ZY2jXD2a6jEYHrqnjKn1aGn6xhkFJ3cqMUNutJkkrfg3dDt",
  "key25": "65sB564b5pjpyQyiWxxd3FT8Dg72H9adfvr1afJ9e889EiFKFHwD1RyP1H4xZDXQb6rmSp7Av7Cc5WgAY1v9Nh7G"
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
