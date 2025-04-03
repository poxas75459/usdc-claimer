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
    "4ZKZTUuqWqBZHfeNhAWAnvJG7qyVLmvQp9VCqaaLVVX3tzRsSJPNjkV66Nnps3K9uQxiMGZjsoe2L8DfTmpZSM4N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9QZqEarhTLhnrqRTNRSnUWWUMB5YUHWhPRt5dzXQnvcnLtgbF2qWYF5JEqADvohwo6CnARkKXA27LJXE876TstN",
  "key1": "63GTCzeToaNAa7FZo4xWJToJx2tHkSLh61XMNuFT4adyxXAUC7AFSWFhYwxoCdUFGZaJhHzZZyy9LzwHtoM92Bii",
  "key2": "2jXPDNfTonJnsuUZG6trcX5sMZKdkd9vp7LFoaQwFy4wMjmLuwjAqM9emWWUhWmbyQDPYKzATGNbvYHVkdWma8WW",
  "key3": "2oMtHAMW13BKLqBjoRnigPFMDmUyJ5WPb3JNjvfjKs3WWiqPEB9cuZM3tsixH9RPaodBDiSY1LetBPo7fS6twsAN",
  "key4": "2NTb1F1irnjtoq526qgaWmDbpS3NWEYxce7AFaDq1YbAxhoysMh7aQXuWutbB4b4kkyEXamhV8YtHSAE3xLnkefR",
  "key5": "3VQHvQXLWdL2Qrzt6DaTUiD5rPfNZQS3kxd6TF7zDAycuwQvHPT8gcNbhu2LjYZbBLhxoTTjMoBEDzPyLtsyyYw8",
  "key6": "383hukdnLFd7v5XhPhTva4MVzPBxGk3NpBjGnqv3DjLHLGmW3hwuhi5dVXQ3NJfeYekkDwN2JFxQFV91SgCW19uB",
  "key7": "4oWZE8WuNakH47MjUityjDFhZYcpZ3DKZafKqar27xJbBcXmHmanmB3dfNj7P34FQsuJXabnFLeBQRJhwyQckNAb",
  "key8": "4f1P8vK3sgTuA8Qn3MDTeFq83X3Goh1CW8WpXa8satqKyrbu2bjb1BkPDeocmfECXNwfgYqJhabbs6ainVrgDfDo",
  "key9": "2HZ8XaBNdpgjfByVro8Ldwc8pj5U2Ki6v8e2FLUsr7qoFtgx9EDX5V4LWW9av8xfAVxBJ3ibJCtqe8zaqaRwryAu",
  "key10": "3kWW9pgp4zCBWFDW7XnxyGmWWzhmEkbzw1JHCrS2yipeBxPR1WTe4ppFHHdXophLju49kcLYMXVYi1noU2xx1yGd",
  "key11": "2cWNLh1zB3WvRvSzAhz2Lo4LE2iLDhCodZyVtVFKnYWW8f8q6bbZzez9uvkShSHVE4hQA5GWNP23GVN5hvd8vsXS",
  "key12": "36Zn5cckBLmvMTFDYxM32eJs9zuSd8YSksp6k19ukffUSW6SdnARAhwj4Qnm4Su83nhscDE6CR5wXTr2qn3egSQK",
  "key13": "3cd25cc1eG1yRjfykGvTmWdkzd7Rib37x3QztxLj6wFrQVpGLk6Uw1YESR74TkJu3irEPqE7mZw6HrdM14hbT7yW",
  "key14": "27M7WMvoH8bFLDxpxyyX33ZyoksUMwhZdctLjVCJZnBSRH2KeAc9TGAny7sza8NSBgZ1kJjTUPZeuZvsV4pNVnRC",
  "key15": "4GQFJsBrExB1tZQkR5dp6kvrKtT1RXxse885YsRtAq2hiAH6Zb6HsxFcyR1ATSATbsGrAV5wDKCGh49nkYGoP4jt",
  "key16": "5PBFP4LSYZcPEbMM5UCPZbEX7nomMDXD349PNTxFHeEiup6mos1CDNtSyM3nVcWqCdzLpS4cew8GqXtBkiaDbS2s",
  "key17": "599Gm8xwAMKzjp5bR5eYnbSrL6ceg2mZrsjCE3HdchV24HNLVSqZ6zgyqjHPQmk3kah8C1DHkwDvjCHYqTi1LVov",
  "key18": "pCXxjbWuvqmEpSpppYJCeXwRtujvuh5vzJgM5PX5egDArRmMuknzSyiryvFRcN9Ghem2T2iAFjq4u7cj4PEbwss",
  "key19": "Dh7WM5eR73P5EtCbW7b9oLjkP2VJU9QnSkVxTDdJsfsXriEBFCSYosSJmuUEyCzz12soGbhkToUXockhiv2qG3F",
  "key20": "73eRJVu9BtGmZYyu5gLdsGJZwnbZQrqogrktW9ZobHefPftqNfTSu1HEdL9EdCss5wn4yTdgK8Ur3wMnA77WCYJ",
  "key21": "LhVk7TFKWdowYDJ26QMA7EB3RxvnSNbJevV9wEa2dTsko1XvVyLpMGaBM3ouWoUhGTatzx5XSJJdbcCDVaAMi2H",
  "key22": "5Vpq1BWPx3jhqLKdjMgHmb8w5cURtrsYuprNGXeQkfJyCtsGTRtzFa42vgWhcE9oWS76pq6eVJY6kF8Pm8uuP7dh",
  "key23": "3xQEXcYBLPPC2RuSGYFzHSA54y8j1bvLXFHR6LxHWbSFZ1Y63TSp5W3s4WoVr2AeFujGTqdL5QCUVAUxcUNBu8iC",
  "key24": "2yzxc1eLQmjCbJ3ZmxznkJNCy6mXegNTAryUSojowskx1gv9vbaFY4A6x14c6U4TjjbUGhz5HnPe9PLBVq6UfdnR",
  "key25": "3qrBRPtfJ3iSWhQv7UBtDzfrhPbX8aMR46qbQUrCpxuUksTgEQugWqZfWrYEJicMJrcfmvujgyq13u351cMavpwu",
  "key26": "2bGQnpZwf9nDQFST4djravsfKY9hxhnDdWYJ9usJysko99EmMs1PpHEEYaK38RGzshTbtR3UUdDH4hxs5d81qEd3",
  "key27": "4q6AKaNzSaM2uZmWinWy51BR6Tmu9hJYUq1BkmqhSjreLfjpGuGk9LJpNpNNzw6YCFMwqSBu6ayRZq5a9f3igwRy",
  "key28": "48UJjefJCSmYKHe3coG6GoD47HNru8dridCHBVzGBMwSBHraEFbSwuGU65LsXGTAfdNAJRVfSy3s93PUqUCArbHy",
  "key29": "3VFdu59r4aeYhkijLnKYdAL6uDrrCRy1zGddBVp3zCBLXp6UoSDN7r98x3fMhBXjHVpVzVSo7u2RUAJT1BrhPuFo",
  "key30": "4rzLGNGMAQnL1Ux1ba6Y4XGQWzKjYiv2stK1yoo4XeGphn1M1ZeYMDUS9J7Tf9QjEPb1MR45DxDfco577ArJ2Hya",
  "key31": "FfxBoChmyL2DwEy6SkMYcvRnAL8asPRswotxuBGYQ2tzGDnZ5EdfXNHR7ddKDRNNJHZfZD5H99dpvihf9PkHaW2",
  "key32": "MHEJy7Arx3QQwjj4XjLuBp1pk5wf3Fws3KhYuY6eJrjxidWcANDFazEEB7oumK9WV1nwbiqG56cfgdgvD4PiM32",
  "key33": "4BbqYeefbWyxFpRXVEnzNnyPNcgb9en1hGsTz3WnaroaPkX5386MYwGSTRjkgWtgs6z3RHxcPP71Tq412xadeHSA",
  "key34": "jkcHR4nZt48wYiAXQ4egohgU4wG7GUj5dD1Chdoj6MUfw1NERvQZvbFVTm56iahFaRtocK3BZ2rbVMTUNdrAX6T",
  "key35": "2K9BwbzRDCjsvNPAS7M9yUmLsabPjKKk43eHiivDbEkx4KR1zsYCrzV6M789qhrNcsfsduEo4bbXf1vtgNtsSmNL",
  "key36": "3SbJFZfYRUPEJ5emnijt5Wwau64NP9izkZCHRmkLvFZXR5WTYEUbBEWgYwaWJv3fPMZursFiVkDZRXdDqc1Z6NZ2",
  "key37": "2zvWt1RvtfyHum2EYRzN1mEsdvUaFDaXn4kiz3Hj4diVWtxHY8jgXSxWrrwJvigzP2vjreFWqQY77qnWVzSuCp8A",
  "key38": "2ihZq5hpMqXaMYwk6vFZs3QtQ6Fs4HUi9UuvJCqufrv4i6YghYYNHoRaWRtbYB9vnS3vmgLm8vzt1yEWDfnqkVtM",
  "key39": "58CLFKq5jLojnHKaheu7Hqys28zdDUc1En2A6kau9Wy8SGBmohyUAZa12xVLkCZ2CbUxnMrSYS5W5GqeQ9Y9qRFG"
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
