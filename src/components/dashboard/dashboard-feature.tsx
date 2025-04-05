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
    "2zQUP6AKFUhHE3HTR2gLXjz14Cv2kFmvrNLNmP49FxmPwUG5CVfMnGBgGLDHsHYXdZAZVZAKejMW7yqoBYWE59Sc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eM9dLRN371rnsrWMiGzSt3KArWZKVCzD4qB5hWKaguEXR9FgJ42eNKZhKMX4FXHxbZSXTAAnQAtEbwxRD7AC6sz",
  "key1": "RMgKVfr12zqHW5iG6ugRgsinT81QbMhYuca4ba6trWSAxQ6H6tifSzqZYkvdSYwJRceamoej4jGqPTVZpxpAib2",
  "key2": "2i3dCmjoJEGo4aLSFw4veXNrgqrXvpqjdHpvbb7sVJ3hMYGJm2UPfnN98hVZTZ1QRzfZSHLG4tAyetSyQ6EseVks",
  "key3": "5urbixQqmniuu1uYKhSRXmNYhmYGiAwmCG6uj5ZUCSjurGVm4Zzd4aeuaPvz7rKG7bCDTioo1AoCZmt7115nFubf",
  "key4": "TrTMkXMXuyV7qKWedbRSc4LGPJD9mkaQLJzM2sn6JkxnLub3GYYFtFSgy8rSNeG3EqwFxJXdKr5nzD4fP382qsY",
  "key5": "5vaRU6zWdQaQ9TuRRgYTpTSnoNi5Hd9URxbqAmAMXhzCLduQAFWeC8nr73Gf85RtkvpdZQjQPdWA6rwNss57vCU",
  "key6": "2ESYARyU3LrnupWsEreH2J65Fsot6VTsQRGfEHVYaywi8koyq9SgUT2okb8CtYi5EQcE49FRYSJNRKMU7C5sJgKi",
  "key7": "h47dzVh6J84xsEZfEhLFpzTM3B3Dz5ho1NUcsNELco28ArgXm7Ea9FEvjnfiuXUdDwWPwUjJ98xjiRqHp9Jf9dG",
  "key8": "58eGWmyhr7jBSDAxuGte4RaGobXQF2Kzd1EV43jjwCRPHD8AdyZZTeQnpdG2WRkaVLtSJzzSyzpR5M8B9qTVCaCq",
  "key9": "4oKwX6Zy26Dy9X92vuJ7CDTnk9bGDS5Q3FtfBDBHTEFfmJLFawP7aVNtzXzKJanNZBuHjA8JY598Cdg3rJ6F5ewJ",
  "key10": "5twho4kTpoUDTZgd6772jh4udTYrLnVrimHsMC1rT9Yz3TWjMYUn2pWVwgv1TE9CVRHVthp5oWG4hGAfQTeFFqQk",
  "key11": "5TQN1HXrz7Wqo8guynX8Hjq4q6xyzyp9HJCyWUF9CDK8weDkHDeK94hGLP25hzVqVtuD3PEHNDthrwmwk5RPmHA8",
  "key12": "3e86DTeYpxZf8j2mb9xsEHkxs58rws6WD2bwrHbctUgAqeXRkz8cQgL5QJPZ4jcsQu4eBTnsCwipuEH8ATNryxVg",
  "key13": "3agvn3K4LikwBw46kvssEtbUeQVXzqX81Qq8AjS1qFeZkeVDHsTWHQ16FSXyPkUioHzwy7PzEir7wniZi6WA2GyQ",
  "key14": "2J5ydsnrE3EybdBBwJnYseyNRTcGKYtrk57VM3JJ4JUpeFJL7J7GwD1ehM7W5qh935fqzD5W8NDgv17EGvjpLfUG",
  "key15": "D4whozwkCJiMUq3WnrLyWuNmdFiGs3Gewna2Mz6UMzwSJ98QWZk4j1sChymcGmNN5nBzVVMC5WBtR1Hc9mDbQrJ",
  "key16": "eSmXwj4DNP8W71DnPPNGDLHboMg2zmt2nnFScJQn8424uQ4iu2bKzwdN7nZQiYSkn3SeV1b7nMU2GDq1GcC69Ty",
  "key17": "5rjiraj79UVzgawYLoiMeh7hwpQ4oja1XFy2fRixXumYzTbFmqtkJtcJneVC56NCN4HuYfnaUfmbNceh4E1ZHPuW",
  "key18": "4QWX9KZjisDPovEHuTK3MaP33zWVznJmFB2sZPQLQkphwQ8ZwTKnKiRKKgvKWxAAn9WoY2wXeKsMYWDAXmFtGMuj",
  "key19": "3s84ZQJ2EsMyMk3NRQDp4wNWoogA2aQC5b4Lgb28pzPQqBocozXD3ovmSs1K7MquNgJSEp2ytBZNZmzqA71SZE48",
  "key20": "5Drthkzy6hPyp1gkN8EEUQajZPjFV13aK8MgYNKaYZXT6RNzmQoFMHPp5ek1P6qJhUxSa9MBMWxeD6Q3omGD5hhJ",
  "key21": "4dGqDYTGKbZvkw35E66CwKBYSfpdC32GnspqfM55xcicFKpmhVTbxzmmUDqprvbTfanXmRexER9Fbrs5svTqeSfr",
  "key22": "4hAVGmEM1dUx6YWXtkvti3x4BAeqvio8ZCqNqfxa1LCVLCWUzuXNScBEqYoNnEnRQC23Ae8wW41WrR4GJ2KvRx1k",
  "key23": "3wL4oMndHHUjcYY5iAE1Ltnm2PhedKhU263PqUH3PMkLRV5tbLyFtheJgmcKKbDkbQtzCEz8aX75FUvbiNEioZi2",
  "key24": "fGmGRKTQAWn1vs9zytCyXDCe3fYHG5aj38WLZYCLP7upnB1VpDK88gGT1spAiRE9qWwPw3PsjdSMYvKLYJivUgW",
  "key25": "61wwKv8bVxsufTLDTrxCvgWrDjE6Hw4xP5nHqDXFZ3LjyRn6tDU1fjMUXVePDcRwGh5MptRMUhgk84dvXLpLsLSo",
  "key26": "4vdkon6UB7n5t5xQiuX5aLcoRd1o1kSsjVZ4oSYf38PFjMY2u7h7FcAMR3DKmT7jfCS2Dg55pkakjMNBzFh1wvNg",
  "key27": "3gg6VKhvv5GKzkXxQDXyWLDjrKqUgpuFYTgbndG5rMbHE8ohtrF9VaidjCQw82U9FRtTTzTfztBVgYB4SFN4YkJe",
  "key28": "4zG73KmSBAypBjpyRw3cZuk2EZVsFhHwi9Zb8ZXf5ruHEzrKPJ2Czc1bj2T8uLeKUviW3Vz4MmJjZ9u5EsM1WtNR",
  "key29": "34ZS8oyuh25rZCroruSjG1DibtD4j8gHGrzxDkM6Rx1x7vmQX8P4p5hChguVAf5nd5bBMXDrFuZAMKsVXZMGZSqs"
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
