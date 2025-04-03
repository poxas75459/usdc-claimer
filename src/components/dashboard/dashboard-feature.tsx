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
    "4PwFdBYoyH9onT4gYt6pgL5ceQwk26cge3eEn8kMgcg4EnwV8TurG79dwVPUPhxeXUK8g9xo5qTQyhjcXCwY3KZ9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xSrVQPnbQGx6GGDfXitaMDjMRP1iRCQ2vxhi3Lcz6Y6Ej9VnkmmrWxsLbBzHdrEFhMhEw3uGbvbLN3KjVsiUN1A",
  "key1": "2EwTT9PMNPWLzaf3gNHBLCEGDkFuX6KrbUdB6seKinH4d8nQLKB4VAkqx2Qnh7s5RQogEpoocPUWdAgoBuhDok5L",
  "key2": "2k863Kq7aUBteopgVqDc6VEMz7edpbakJtHqboAt7eJA156YHi3iurgfqi2AFoMrusnxmEzZ76xhv1AvZ9w28s3P",
  "key3": "4jtQ9TMHFKZx9YHnmwa9GgRUm2SdUbodgKgAn9fnjT2WJxYBKM5okiwmMYTLgrLx5u772ziyJzy8M5vRodRG8LcJ",
  "key4": "4F7jZFrpsa5mZY2vDB1evJY72JuJJfNz6BSY24TXVega7MvvcRbiAt7f4VUWfWcqyfijEswtMNsijKBTD5n1uCHr",
  "key5": "49Uiru6VcepaGPTji9Ke2njsdnZJGfao6SsRDkySzx54MhHrrVxgcCPNbNkfh4snVVQNxgLFC9p3cRfj7R5MU6wx",
  "key6": "4w6curdGsfbpgyieffLEZdkw3brnms68jUakyw4LxEwuND2nefsYuyT73w4MD85mZPCbR7nKB99wVPVt1RCrA6bQ",
  "key7": "5wPqbXEAk9hNPeasYq8KcJh2ZCizjeME5WW69RbHjn6ZVMWJg1mBJnmoT779yZKca7eK74WU58eiDrgJdpkUh6VL",
  "key8": "3oxJrnQXJwGqPtS11BCEPYgMquue77Hpsic7oNxun2shjbqoxePfn9vxc6NMdgcsNC7pVWdjUURvp4p7o52kssff",
  "key9": "2pFX4d2Y5tPHKn5LKWgxmYfYZRE65czoqRyqL2Qh5gPA3K9FSnHCRK64MNdRnd4i8ZmwicexoPdsYykTKwfTMGRC",
  "key10": "43EiUHrvdPLEU6bLTnjr9j9Sk5yka87fesK4hrbdu7aRW2Ydbxju3w8e4v9VtCZLo2em5HqQkSEUu8RxHvotuW2h",
  "key11": "4S8V7rTNa1BrSgCxJuUSq9zPYrSbb7cqkKNtuaPRgdmSamfWrNeXdBQVZ752rKPPSFf3u4a8nBuarLuiyh16FFia",
  "key12": "54UzWB7NLCbrq4bFqvGZdEecpTMxWaK8KwcRWJPS53bNbzf1MXEL59b8944kC3uQEN24mrsDYcMLWvfHVdMxsX2D",
  "key13": "3KNnwLiERGSSpYuPX5Pz5L3Sx7KZSTEnrFu6JMKGjGDRLZLPnjBnKi7XYebun6Y684zxiYo5T7hsQ6GF7EaBkf2w",
  "key14": "5a6Eg4Umkane97nptqfCxD2sUjPogJZri1rUHQNHnFPjoVgALJEccGrGhDcGoRRsnEcRBNj6gqba7uKY9e6pXNVx",
  "key15": "2KXZ7SD9poe8FvWmqALedJPqAmtriggxzJBVAzVmG4ERweYA3ijpuYt6LP3bcboFzmAHmXtWJp8LCfZNNtippe6U",
  "key16": "2nzBZJ6YWbTsLhH8iK517xWCpLo44qvmK1L1XPgpfjjranUKzsZ8x3ttSAP7kEn2iauvoq9cbWgov54QgwGhr6Rt",
  "key17": "4fLSf6wFUKFhqy2WPJsMa51sw1LHPronzUT38bbT5egwmFBedL84WWgtDd4e4sWbbfbidquJAq84Woxe669etsrz",
  "key18": "65uXUH7Xsffw7XEQgRopYTVa3ZmdfyLEgUAJjqVRWadWRBeuteSw1ncakLSyFV6Kfit6587ogqTaWHoB8TGHHHAy",
  "key19": "41uYoY8fV8STDopLg3G7nkNxYtrxMeFpkjeRkDwL34AVMX85qhL69DBko3xeP2xjoJ6rdW5tEdxFdPzbzVTzSvZA",
  "key20": "1PDePPb38cVjbCCZjNyR56ZD2BB8p6sLHYXA7FaWXtCmNGizoi1yzRHsJQd1WXSF8xeDD2nFDPiqJJ7hJYafti5",
  "key21": "53TrkERCZPsjNBZJiatqP8bBZn42T1e79R94D9BiGmA4fvKQVPTNbdLZzAHCQMURJ1ExR53qC4qRWthK2Jv27qcb",
  "key22": "J8xsC8zLVexYa34EiNQDCzm79D8jTPV2WiSdPHKPnnvzoFzJxjvgbLCqF1TmoYLGoaFJgSmxo8jCHLPiESJA4Va",
  "key23": "dhEXu3nFAkG1jioSG7RsXtvqqJwCVvWTNJgRS1p8hDLD2gtCkcay2jV3pLCQVg6SHzdJususKRmMm2eokrDz9cx",
  "key24": "2GzX6wFxFsH8WhvWqNGrzrTFF1DZrho3xLyM8mZWeARiCWdHk9QP4HxQUA7XG93vQYfbmxnhDHXeLdB5xY1Z3DFR",
  "key25": "2aW6DLMyYg5LKhYpnr9FrnQqifEKwj9Qi1HaYXASArdyPQ8k59hGdWGXjPvg6A7ezLGM28wHgtiYnFvLbh7KRLWK",
  "key26": "FoMW3YKS5Q6rgzkMF69BkwZxjiM5kcA445Hb6CV5KCnbwNDFEbE5L9PcDZZVCerG6aKp1bzeGjx94UkqQeR5tD9",
  "key27": "5oGdjN66oRJ2AUK3qwF7bGCAQPLPTf5u9458btFcE8cbSwS5g4bnib3bgqCgp53zM8d7UPWHK3Gomjvv3UG2Ubn6",
  "key28": "fjExowYUzjnBf3QPA9NaiH5KZhBqSeFDoDPmTvwKcmov5UA5rgoAksfH1admWDp8oDjJV7uB8DvuHh1KGBdMkQg",
  "key29": "39koM6c8MdgQNDbQNXzbdRok36tX5hgbKdZsoBAs5MZzT2JuW6aXtGEt5vYbwscfH2Zd3F1nURuLwSH5EWq9DMuG",
  "key30": "5pbpHsBqPG7ZQHnSYAr4D1GKcDYyq1naMC7ddBSmmkKWV2pZERNUwJqZnD7QvL31XGrydxCj3QvB1nbFqmxynSSK",
  "key31": "3Cs4HJzoW56a7Csnskb5gXAciTsFZ1iMjbB8o93qanNbJhbhFmXQ9qYctSu5XSYrdf3iBwW39YyoF2yunH7wjEU4",
  "key32": "4jzBfP5SLpRdjvgfZNRAHPBBySY485wqqYHV7URaBH5SwF8grUpiHRRirALaWDjgVPnrF9a1A2FnWChwVvtRmGGq",
  "key33": "5NozMRn73aQWvmqMueUJw8xGBHrCwEuZgKMuxbcuQXWXxdGJW2HFrJs5p7BSKUhXyHsrjGdedMEfnqoWTdTB7iiV",
  "key34": "2RN36P7rJFQ59XDFwNuHrKeoNXGk55stvh26t3W6KJ4BuhwNALYpZZXc33LvZP5QpEfaFh4ccmze1GrsTYUqdMve"
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
