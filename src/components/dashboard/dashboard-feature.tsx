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
    "qgeH7wuRfWYZTxg2hXtLXWdRAUBx4ykkrE7RNoXYBzzwjQkaEaEKeCPUXbAtG4owavDeaN8xow1sEaX9J227cAj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pJS8Zi8ZSfz75mjF53kw7LZjJQyJ8ppUEtkAJYxLmdxebi75paomrP93SVkfL6WZHBpfpvxjQ8hXjghsU9JpNrm",
  "key1": "5TgHjPsL4bziBxLKRBPQD79FqtdVWh1jV5oNVFZbBG4LScjWPvGXPaJczU2mydbtpHBMnHjCikobtazAqtN6RvGL",
  "key2": "nmv8XKBoSJpqFzm88EjnHcPEro7XuwTHHo8gciEFAhKSYV9FGHpPoLJVsr784UZ2CAR4nbqn3h4maKexvXED6HY",
  "key3": "2DZAzUYYacRZ7nHP73VbYKoT7p5q8WmvoUkguf2HxJui3cpbDhnxHuLyCsCBQcs8TV89NmkWtqAdMzPK57BT9LYR",
  "key4": "31oVVhX941SEXZJ2rRZ7wHXPJT823Z3aBvTVmUetfLwsrYvUW8xzQEj2MHwyuE5rWVZHAwqNjoXSk3H7zPegfdsv",
  "key5": "4tMPfBoKUXa4rj34v4w3j4Cz8oaj65KSNHnfvbS6AgNeyuRJZjNFLeqyPD6LWqNsXP7KhHkMsS57vYJ2i4QsMDHe",
  "key6": "2WQDtNmRY4NQjCkkLCNnsECuoV39vDbBb7ZLt9KWQsG8Kbvvc19tw26MddiwPEwZxfdxxmvbpGFiTUNsgqbjBVsc",
  "key7": "5JfmJKDHDYUeNgXpxsAhEmRNgkipm19JpefAPwBr4ajjDxXabbSycktJHyV5REazvfsBFhCUFcxFpnNQdEVRD3NC",
  "key8": "27zn5KcZ4ptH1HSxbuscgfeGvJnfXwTRRrUzh919ekELCkJ4KypcwTzVmirKkBFbGfvkAxLuj5nkTQAidocPxxVM",
  "key9": "3ZTMmrGuYNEeLjNphg6tggBgRsrtCvGPQXPhrEyJxXsgJJrAUYSccephf2pUZ6VVF1kyjhj45njYZv4DBkMr8JJ3",
  "key10": "5znzVMSMENQi4bFSbjeayCyrszRQLwapQtb8xQrjm8Dbb4ZzX28S5E9oXJRJaaVfNwJYAJaJfdTzfyx9FPqCzWV8",
  "key11": "59riGqtBGEUCGeZtaWsey4w4pu8xkGFULXfdvAS1sT1qyVKvrar56vFLUEgUzqDz3Jibt8kab4LkRAYYg25CcuPv",
  "key12": "cmRbh6EhUUV7vKk86NsJyezvxLxFVZ2gKYGNS72DfkNJzKXSgFLY1hRVhwdPgGv8VdohEKv3DPYPWRbWWoXC5So",
  "key13": "3TUKWbtRzrYWH9aTPEE53ZcRjANT1XVvEYQ1j6bcPPsV3MWBCiREGwNJJwRjX4NacbNUrciNHyMGdPmYut1YDoSX",
  "key14": "3fACVrPKcCKyTkfmjdbfXVaC3doruGBYAGtaPBqNrQSEkPAct2iecZ8XdzL1tzA4sWgb2D94msv4d4pab4A91qMV",
  "key15": "4KaMU4EC1r7hDP8umXAPmjjSDApk38DiVFKHUjBBrq7x9k1hvdRnmhTDYknKPCaiavy2YS5iHrzZMKnnP38upemb",
  "key16": "64mF8pPdcHza2bnDptW5x2iyCgm3RBFzygJM8srWj7AkJyoGBYE2SBWkydDd5duL9QuF2jE3e4yoavzkkpLQtyGM",
  "key17": "3xnsHhP4aDjBo4QutKeCCBBkGFsCQ1X5aThn6SaRm2kDJroMDehxMbCWMw28qe6zsaMmTktcuEwQv5euWyr1M3Uz",
  "key18": "39pM9rZDexNd62RTS8LR837VKQKV4Zn9EpNJF5ViVeis4a4fabScWu5pVyY4rHfXSADHDj9MbwFLPqrz1QGf8YYT",
  "key19": "evWy9CkUgUDp37wFRzCXJE7m1KVzfMVjhEf6d7mo6VBYt6XWwKxyuQudU2FhNgQpvjdK4B1kbkRKf94r4bCXhMk",
  "key20": "57Rkxi49pro9mqigY3HzMEgdttEjxFQLgRSuF8g3NryjC4HdnsmzNhRUd1fstNvHVPri9kQSftJtp4mPBhMKq3BR",
  "key21": "4hTxzUSw7HAzSGRo6Xo75Tbt9Vq15EdDdF5uQmPV7M2jh6Y8vTjq2p9pHDadJkPEu2tDUiBc1bUNYvjMrZPedB9B",
  "key22": "2Edw5LnYLXEngcvcujxd65a24Jr7UeBmJTp59mLurmbu7WhkdSBaiuHokc38TymEeCbeU3wVcyNeC3QuGcppoNMc",
  "key23": "3XAqwpaBPc2AHnyj1M22EetuDeasZhT3rExb53mA19kcjNY14hHeBvsU8mde7TQgacNBWXD4cTrZxpAL5XNY2wZx",
  "key24": "iguH4PyyzdfdyRWE48g8jxTgCY63UJikYthny5R3EitusaW9yAPaZzb4T8xofi8TPRHBgS57drLJqfaQxyNnayS",
  "key25": "2cFsFEs6SJtptFSkn3QTKwMswtpE1Y6KPKRP9bNjvztr38yo2gyMYjjEj7EHySe1zui2pWXrDJ6UvYG2bHwzhmMY",
  "key26": "2qYNYsSVX1NoRt9GX38QQr6Y4GcNWgEDauNRbNkVNwdjpGEjdjWKjWh7xcBg35YxTnqy7AY7pdhpBFzG5yZXVpZx",
  "key27": "4GLusvDPpgvQbhFzAnxyLUKCrGKz5onDxGHtHd4uh5mCBVJ6NMjM3EQrErq7tcqLcuVXT2unykuV5wcCMjwA2yUC"
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
