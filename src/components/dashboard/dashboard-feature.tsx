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
    "3CWcMFkNpUsSY2E5N8LFcYUedHLn6pzGFtQvGd6rJDeJ2KCrkrNoJAqoYFokfxLMjdPWLfJPsb4EsT1kmSbgcboo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ia2QfqFMouY9b2Zqr8AN5sRd4jRXThiRyVEVUPArQT1Wv9GnfnFncX3ppJWBNQCm1Zj9cS3TD2wVCumBx2Ssi5r",
  "key1": "5KRLHVnhsSG22a9AzhewGq52yoocaNTP8GE7Le7JFT6RHN3JJJShqW4mHLYQNki31Y9SksrzkeYy2tQCeSfHmrj7",
  "key2": "H89HXZpx15MggoQv8y7536ghxd51SpAEUiPe9swxSUk9RRoEoFe9fR2HYuo7VPsygPxhWGBit3XiMBoMqZYwXdP",
  "key3": "26UECxZnNMDJfqgRkJKPvK5wEYcv6ntm8k2wdtxD1rNoqoquyKHLgt9dANnc3FxWKnL6PkPL1KL1EY1MMYkuNHXX",
  "key4": "8cgvVn319i8w8kHzR7J7VujhDfSyE35dVUYiNhRjgGryXi6FS3iGERrBUGqwwkQ5NpZUMguNai6wqFe7ww6RfgK",
  "key5": "63EG4z4XLXzDLiGW1SVFMHGbkxJbUmrzeug5LKnppFARPbSxc3iSMNy8KTaSMtTfdexbQ9pD6Gq77CnxtDpZZUJt",
  "key6": "3Rpz2Zxf9Fer4VWp2gi7HA1zKqQPZ4P5hWQ6mCLWDXwCpG6BPgG5qhq3yLZCJJnSuK4ayG85QJMJk7tCn62DVtDX",
  "key7": "5jX6jzwuWfCMD6tgszxcUZggt3bhWNGyCZLYeUcmWHRUwH5gD8gUrAvTmHnp3CVbtyXZZWwfJUi9FeaQiCxZTozg",
  "key8": "38JSJkKZxPgg4aHiyDpTbd3TY9G1Uw7RyvPnpVLqAEwYz11XHaPcJCoi6ndKxpFpLYNgk1HVwER37ozu5ypFnt4G",
  "key9": "46jCAZhhTu7s7NbX83pZKGQp8yYm8LCquwmF2XPY7hSLRZnuNrUSaFoXNMFoZiUj7ZubP9BNbs7We7sAMFu5R286",
  "key10": "2rxZeLW5P1y4RBv1ybNdYS7Xm5BvD4DEug1umrAHeTnveZ5HeYK59AE5D6xpcSGTUaQJBSPM7dWE9LbLSFXRs8Fc",
  "key11": "xVvjjcn3ZxVAfeftYPoe7mwEZmDKsTrGWgc86DMVYgxtHW4uwEUo6Kd5aEDhYLZUGgoHLKdksiewNX4TW1xJcuG",
  "key12": "5kRZiX9dzArQn3nPHBjf1MJh6Kt1UPks5KfvhtVq4SgtD65bsD6U8eGqjQ2j47Qug8HuS7ehVm2MDwUPEceSt6J6",
  "key13": "2gosCxSSM9nH1WigmBomD5DdXGLyXHqBgaQAnBXuUDd56QUaL7TK2LcjBxozfoo8BxSGNTb4cydXyGixA8RifsP9",
  "key14": "3JgedcM9YDif3HEU7bMqz1LDL9ZRzY2Qm1Wvc9SMWEcfQdeQH6p2fxPMfqKUACaXMZ6EjJnG1HiyrrnY6or6e6bc",
  "key15": "24B2r1XXayUTD9ZbiLbQ1XrQpJHQHGEhzzZYiRxZRoNBiTXioUuTNevLJuz3Bp52BTQBAeGBNQg9GpDh68QeJKjY",
  "key16": "LyGHDPEhaEKd95WSZ1yXJ6CXQxEQvd5tLhb6DZEVhSjbraMVXEbhT1VKQF78QMEzCqDF4zSryFY8stfXG5Sa5nk",
  "key17": "5riCuSC4dKgNSpQo5xqT4kpTiDUX4oGrLi9CBQQZyRWJ171iqAncw3WGfJeZwkbRX6jNTfSb73eeMWBcgMr3dgWm",
  "key18": "5pa4mmmf37R5mCREdWgG1RdC6rPKsRcQNjQQiunfurXjLUYnhrTfe986Yomfgb68ywHKHdPNrdHs1n6ZUoK1rWie",
  "key19": "3dw3k774KYGPU9dKeQsRWUDwrawjaBifERyxfHErHEssQqGAwMbSTnPd3gUaUJiEi71ZtKGyfor7Vg6CbTAEHsjh",
  "key20": "z8Mwnt9vCjRouTE2VYQ34in7Bvy2N53Jah7rWzUjW3hCbUb4awSfbeNUvzvcvc3TadeS2p2TfmBDDhqi9iCJD75",
  "key21": "4Mexy7ezTTb6xVYzgJQVnHiYztsYtBCm8MdsufhXehzYx4pXH7p2aniB6ZmrRoG8R9yYP3ZVYAd97V6wAS8A69VY",
  "key22": "3guAfMSC966WUtzJ3gBM4A2aNDvMY6Ja7ncRkQrM5hRacTKHTJfBr6AJAx8foG8zxzZY4PprnGU9CdSf7ynsNgkp",
  "key23": "9VKF4Tg5rFFRd7gH8xFon1q1p9JSECLcLQ2zaCxfDoAachw7wWx2xw6dKaoPN2TcwbgkAx9GgRfXaxxYwaf8Uqj",
  "key24": "55ehhRMsumdh9vjyRWodsUN8Yq4or5v98CvJNfXsJttzG93KwVhZf3uXbtwcyPEC7wj8daHBLg2dQpYfxWKxaKgF",
  "key25": "329tiAHXR8ztWjenHMXc9M3Jcte9Artot8vQRrqhF3NLzaE7PP7zVtPRdguXe7UefhjV3KpbZM2hEhAyEyRoiVVX",
  "key26": "5Uzr2nBCswdrkzG4zxiFFTcyCf3mjBLVZyNMRydzcWG4RXAndZPDxRtAvEA1K8KTE25o7vNYwBvxvsSHN6yteqSy",
  "key27": "4663CZnSru53P8SMxNknbCm8Nwvg8AnEs763yNk3H7fUghsoLaK6aQx7CxjsqU5bquFXV5QaRqDVTMU3Adt3Bf7m",
  "key28": "2SDD9PHJcGFiVZDThnNMx2pYx3JaWuPQCQjcBiAfdgtbbFBBGJhNMahq3esp6uBahBimqPEKbSvxjmU2XVqPEsmj",
  "key29": "5hFxhvHxZpyFSUrMnd3vtX5jVuh656vmQsfZMUWYorQjKjcddLmsQZpDbtuRp2PqWYE5t3X6Bxfihk1GR7BumAM8",
  "key30": "46ejhkewNr8NPYMHFS2W5T4J3xcheKoquypFy5uYJrzYxgttPWFqB55NQPG3DyjhPptWx43sAj6N9eN65v9m3Dbs",
  "key31": "5e7RwdEgWWrgAfqc45kw6A694B47Zj5yJ9LJsX3pAQPatRaGsVU2DKpZYuVs3ACQXMLbFFCaMT8cHWm1Crx3qAvD",
  "key32": "4qKdScC4Z7xwwUHFUDa61Ng96KbpXzuTrAthacKmipcBuMjgYoFXFCPkQ2gGewmZRDro1qGpPPZUDfrKuVxxGokX",
  "key33": "2qR1WPGg3axx9BoW6nVX116NHY6QC8SyTsdkVW4wqEUybPsAgCBnVwPo8cvjyQ6Ugqyxg7MRBSbWuzL7ueXBQkz2",
  "key34": "3MKcGRrRwxqKDPZcz1gdYPhh6QbsRVUWNNCgErbBuzeMMLqGLh2bcRH79v39HKev9KUW22TYRTcx2rx9TU4k7kMf",
  "key35": "5jk42ckWQG3uSrXLYdUX8XuAtXCywJGfYdxkqgN8mTzT9Yin2pCpb18acG83ZywDVWo9WHm25t1qFCaxBY4WW6tR",
  "key36": "D4Lvj9rVvmxmbgs6BNPhcwUwujhZM2ZAVsNpm7rCbEH6j1aAuT5boUEiEVsePTNGqQ4aiu4xTbCDG26ee81KPt5",
  "key37": "59uBPTKbKnbUTBaVtTtmTZgoDGQhnWjJJWqhuUi2T3uGDSqicyJdttXou89hRMX3G7sieQb4C1dYrsdtAYZEUkKY",
  "key38": "4jiGZ7q3WvvRK1nU5U5R2ATkbvP8By4DMD6JpWFMdMB7aWEkFrN6CpUzs1zQAJbCMi6f9qr9eCT16SHCdokJa4yj",
  "key39": "4maC3mwAYpNyK7VypQwZHe3zKFFGPwjV8GGEFgJMhaUqgfX4ZKTtgGAqfr6iV7Qtc5VJbLyDfjnxn6aC47Wi9BqC"
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
