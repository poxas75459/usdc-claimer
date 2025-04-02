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
    "4ySUiKkiJTEt2DkDY38G3MFFhhoc9frNGQgn6oNSKmeYtQqSzqWaaFete17UC9SGmhCzmz5iiKfxE12BH3gXpnmS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66GHjswCzqHqwNRETnGuSATaoCub4cKZPNrPaEy1gdeAFifGiM8sZCa3degi6YeSbpYkABEobU11vCwnzrtGTfpW",
  "key1": "2fWQiRdCcaakBA4vQNPrVxEvixJvg2t4s6nhPvURu4HUnAq2dSKG8qNDCZdm8f22Wkr1Pn8DF9iyHSbiJfgvpxFU",
  "key2": "54FjQ4vnruJmBDGbqno2UUKDSKR83gBGZh9oRyKYeFzQ1UFU9Ls5qujEBBF5ky2PLJs9ZRfFeifrcFziVW2emYzs",
  "key3": "5e1Vy1irSg6qpyawjiqgZTQhkA3adf8LcNdiGjvt258YS6iPRf47F6dstjhLE1rUxkJEF2prqsKm7ifxmm8FAH3x",
  "key4": "4WAeGUA9Aebp2TQN7QcvA9hk895Xou6PizGLXF1mSLY4yTfUUMJ9R6AL1vTArRWacGTwWLZuRv2MyRCvS2h1CitL",
  "key5": "58kT9HFnvNHoj3rjdRvLLFGoYwREYer3zibddQMqq55wXbUfTUwLe2RRX9ocqF5ozRa3uRXscE6eFKeNmynZVpGL",
  "key6": "57Fe6u9q8qgUbmxQaPmzHhGaudAXUWYyVHnR5J5cYsHXHvT5nQLmdv5jFsARwmJ2SYAUEcBgaFPZG6KhKmdLj43k",
  "key7": "42v3X7z4CB5ZVcYMeWQj15emg5uAMb5YnbvgaUNV5cemh7YcUFLGS9xan9Dc9oSZ9JqpdMYdRCyYuStMnsoWcQKc",
  "key8": "5LeZx5URHd4cm4D9wP9iaan5SzGjCVeEdf6YSEgU22PDctUkgujDXKJ3Ecd7VPMqA8aj3t3F9kgQpjgoWfJMe5gv",
  "key9": "2f6iNHgXRj2XkwJdrob2Vmm4cYwx9CmhhmLTZPeYDhLxgfRibjn53Yh9prpUBPfESz2pBa1EXJSidXNAhtqoFGZi",
  "key10": "3mZ1nsSh71KiJcHPaKJWaF2es1xWnU5k5DtkGZZR1i8Mi8zGqcHb4DqV21iosTQMRz97rCZeUaKadNiaf9hAS2gD",
  "key11": "5zUzQs8GiQYHco9AD27LZepLHYMeBZqukhBYBxQBqjKn2CJkeTLewF8oTuWKPHZzrXR1cvBuGRxH3kF6bw5A3Umn",
  "key12": "37U4aX9sXXA6XEiZkSXHuE3VujNhxdNR7msDP24HjQeo7k1A5W4YoAMxtNhZ1VFjMfeoJDF2jHhbL9ZwAFKddsZQ",
  "key13": "M96KiFpvB5RnNfT64okxyHBNxTURSqNMB4BzTugqir3UvzXJN6bwULkDsD6CiUpTXAUqaaP5MVbPRwfcPRNWAPj",
  "key14": "Q8uv13Uxo3s7HRPzLfkXvknZWVrbg2SFaaEdzgPmyjBpbXHNuHK1MUZRTSgQy1Ps2CMjhLXyRSfJrfJUGtfiV52",
  "key15": "2EcvkqKDumSb5bYUsWg5UZePzLCBfw74npaLc1VhLqcTczzC3gpjfHtbDEdoj1gaarQg4kNiZR8UTG5t89naxN2C",
  "key16": "2kgQy1qNxbY2SiM1NfAFfYC9AwMUwGNvUoZ3c9tX48fEzdAUpXVLBktZ97x4bUnFUuvfxrrDQHieqPYYGqAKeQyi",
  "key17": "352hp3gb3CxdnhaAYbAwwXMMpYdgrTNH3JtTZdaoQWn7eVoWgNU34FimpJc9BEgtPMVXdChAbSxoFT3a9dQkENAq",
  "key18": "3wYneWnRFsBhzaQrjjtHe2bksm773RoArQqGs34ZnuKpVKbin51vQ8EugKgtRLDYecG4pEXiPFdKWDtCjjnNCDro",
  "key19": "2fv9mLBFj34S151h5eCe56HDMf7PvgM57zuYg79gYyAUnPyfixcnVrNVNJw8sZWJPXt451yiFGs8SsmzwfYVUmdC",
  "key20": "4Gsqbhy766pgyjGRT1LNWdbdqbK89duVpAf5NxCjHN3Nz5qjd32AH5knTaE1Qvz7gx4peCc2P5XNNA3AFv2haz9S",
  "key21": "cFLEWMUcwVKaeoVWnmdszyqE7fzGe13uBRnbfW7FKk7m4TcVsjznAp7S4UzN87cPUwS6c9Tbs3njMKEV32yjwC5",
  "key22": "38F5TxeCo5nvasmTfpzsPLGdF33mn1SoMKv1Vr1Yi9Y4H5eUWMU3ww47KuDdjwicyP4DHAGTHZ1MXrRBiSALt7uW",
  "key23": "KPMwcgAA5w2v91ZaA7epsXpJp9RRaKTaoXqNdqCZEPPXezGBGto2PCrEK2t2wghxvNRZWRxGWPtJnNenrDGBE4E",
  "key24": "4hAmi9yMr3gasGCffAtznAajiNP9NvLciZiPTmUJPA1cwHLDQW97nXNC9vFdgMsofxg2ZZU7PknVBBdvfFUJSgPF",
  "key25": "4PiZe1iRgVDNbQ34zPqUMQv9jV68K8aTfMP2BqAfj1Qyb1E6MGmpqJV9wnjMjTF42456G6Cpus62BtLoW9W6wWoq",
  "key26": "5Av6jVc3FHgNUeUjKGg2bUMBZBUHQu8yYu7MyL9QFeU9p6Ldwz4UyAFtUB14EKciFTrmLDywBp1xeocg4KjMDYUr",
  "key27": "bjAByXkwkBEgapRVKqRWhnq6GZ8XjGJuTtJWu3uFQvYSi6UJTaKhd3G78e9ZnRDitmEip6k45Ezro58ZNrAXYm9",
  "key28": "5GMVmHmrLbUuRjhhURaMpNQtVcVjCyP1xPiQo3mQs8dAHUmKY32S5Cs7MoJ29hwQBjXWzzxn4wQUEQ1MupN5xE5y",
  "key29": "5pAUM7PdTJGF45xi2tcvkQVsLiusYGxArSut7YCNizu7QwmJ38UhWyDaD2fLB3crdpynDYozwxzBP23poaXMcSzg",
  "key30": "61LkHtudbnGqX4fD9rvv8ikreBkMWGG33qUxvDVdG4ZPprWbYpjZBj3ys8sQ62kDCbPY4JN3v9RYXwRCmFp3Phth",
  "key31": "46kznc4tPfK2MRcxJX5gibLFSSrQvidfCvbigSavcMrVn7GQMrE66AW7XFQxyBbDes8aUpqaQSwSExowNXKqesk1",
  "key32": "221ZYtKr18hChp9aHjB2n52cFYgSJ33KdkkoRGy6bCR97rzd4Ps2fsxpkMAKK9qX25e5Ki7SzHd5WLJsmGF9no3D",
  "key33": "4nJF3t8JHm9pjsSmkJDogvgJbnJidkMtGE2xUdvYPSg3642TZpw156CoWWcdjRxcYn3cie8AQG6XAxjF4RKJ8UZS",
  "key34": "E9YPLnASnci1Wanq1BGWfgfdM2VoJbBdxLYXnyMGBCcTMQoqYAwepBTHLSmVgj8fbB675CiaHpPnZn6kGaMWmXq"
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
