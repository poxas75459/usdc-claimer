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
    "2qBgY9Ucjwqw8B8sbcZZ29K8fhHrRqD7BYcVeUk1PNQH9PiZq2ymWhTkkqokEXSPRXn6f1uw4CGi2nsT6xGgEizq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Km7QUwcGbxvg98YF28ELyo14277vFPtUmQhBVx5BhLx7eyV6KcF85n4EzXi4dgPT5BvSYjfGPyEafx33GA8j3B2",
  "key1": "4rvMkQ5GVUC8UVZmPoEWW1vUjAXPqqskghvGJwRTHJnHdeQ5XUy4MVAyivfhVPwhJngAZqBpUsH9uEHWG9pngTEA",
  "key2": "3VgizzV9E3H8PzTV4TenR4DWwxbo1Ju9SfSM3JkKgsQMUtRSXGcZHNZT1wea3fhKRmxXCF8obWuJemeKhKE4GBXQ",
  "key3": "61XNvXDNFCFoCaT8bH2DKxLFvH76UGaeKWYfZYHAxN8Td8soyM2Ma8qtCEKv6NtSC2D8nZv1h3xyQBpwUDDX7jw3",
  "key4": "g1MbK2eWxM1BCQgA24GEkDqg7f2wmkEVFZDVrQ8nzXz7U4Cb21uQyxp3ySqq2aGGQFuc8aJc2ehnJDmWU7THy4J",
  "key5": "5qomvffVjv5vqZGTQLFriLxCzPwgR2cnK9kv1p9PHbbRFMUeqrcjJ53eHUA5eLB4B83zUx1ftAiBBN4jC1pvBJ11",
  "key6": "HKBsNiymvc9XUgNAiFQunpHiyUfec1nRpH9qSyRGVtijfssgyLyA1JnoiBTv895QGibe2KVVaKGz694VBSLDfFD",
  "key7": "VcErAVBcMdDJAAgD2rVXxHg6X7WjjEB5WifvFc2LhcGtguQhN6NhF9yamDD3JhYsoo1az4dajSStXgsvBdMB53V",
  "key8": "4jQw6epDgHRZ7pdLLiLpdW71Y5W4jusakXTdXNWBkzpEu7SDyYNWFwE9keb1UmNq1K8JXSnpCtEHKFWnqa2GhrRt",
  "key9": "2eVVVwwjPGduBsWBoxhFsRND3GTbWNyNfy17KYijSudAXN6njP3jbPMNa846bEbqX75TooaPxxsdCMygnJNnC4rN",
  "key10": "3pXtAGSTGDk94sbJkVm3s7Ho5REzjS1TVPk9ipC5UEjNCLH3eKW99cZ1vSCKaM5naX7sbbvs3oZqaBBWV2zgw45n",
  "key11": "cnSTWe249YvNWfWZo7NJendNu3baDtaiTe6NGiK8CTu2AbbDNCnfPsuh8igxgmRWv3EbJ8jJGyPEsvRTCQ7Sz2A",
  "key12": "4Eubuwn8bTMM8QJXYodjUBzXBwAF1rB3xEJzD54wawC5vS2PKPd12xD3yLhj7MmvJ6684qKqfxu8ZU7Jv8hbbK6",
  "key13": "4LGjJM2PWYNnyrnxBt42ojqSVbRZ9YGGLzuAANE9F3UquEAPDHEmvDHojqtUtkqp2Qhu1d3cJjc4RpwLfXFvDUKt",
  "key14": "43CTBugfu4wcb2yHTHYtf2GGr7of4b56xZEBEysdSDUbbxSM9XRb8ED81HjipRKNxDFE44vBqeuimpRp7ZDBRjRm",
  "key15": "2ECukABiWDK6Ac4outjGgSpQp26sThhd485Tz2bb8HNdUq2Da1XWvb719neckLXLMp7FwPnMZ1GtdGftMvSchU3d",
  "key16": "2kmPh9w7BhJDPfMPLRXoSSmr8hVyNNd3ryU3mFigArBMefyCCDMURQQV4tN3zN7Dv6jQoaUQZvDTvEY7V47VxdKZ",
  "key17": "2gEPVhri2Rt2bF8TXN5EuXYhLqJgDDqfeWHjKopE1byx5seSvtr9obnrZhqWgQG1UcSe4Md4HjJVLTb1iB8uEWTU",
  "key18": "4VQr9RtsXjkxzqWmhdVV2Z63tsMo6jBLs4uHCDXTeKyd3RWNHnMhB4ST7i9xmezZM2E42XcBkqGg9mKZE2uufPjj",
  "key19": "5bgZC9NfmpM9BKDfzTRkVPvh419a9s6rHPvbCd6rJY6uNCfDToZpUSpt3KEjV45x6Jg5QT4wbkLKH2PniCX9XyFZ",
  "key20": "42AY3Nx1GUujKQPxZdntBStm4m9EMafSRDSbffuoPLxvMCXYz1PpFnAC9uYmkMThDGCtLxXaqBwcn2LGC6FeocKR",
  "key21": "25DsjWE8kknBUN2V2W1VqzeTEiGo7Rfut56NhcCjDfQJgrqqtQ8pzVpyZvVVMkdz2JSvRsP8ArzESqVcHiubnxVL",
  "key22": "4oPUKjxA5WGG4ziTwevqNfM3Pmr5KQVKHUGMfTqPzwcVx8pzFCVBuiEFSiTYKjzfwf3kyBwwm7zCGwNKsSyxjEBN",
  "key23": "5rLrnsofyXRzth9Sg23Tj5hpxJvpukxNqjABnFiWwwSD14rUax2MXh85thVPX89P7QCgMG8BWDjgCof7JshxJbrr",
  "key24": "2SvHURt1AoGjdBbM1xQLSSr8dBQZCFjBzTu3KNZR9fftXXYkYA9fc71rjNEMUPxgTUXXfdaRKZMGSZk2ZfhTWFR4",
  "key25": "3Ji6PMGSyuSv2japzXLUtpXDsaT6DExT4UaRsiKtKLhjwjNT2JvkzczmWY2U9u911BfsWiuy2GecBYYuf4zgvbE",
  "key26": "2Qa7q5qPrzumpx3QZ5hhS3o8auQzT9teDNddZ6p2WzR6Cc7kpMwKWW1SFmGLXrPgdKd5PHJpntdYmu2a71jApRUx",
  "key27": "5zR7QTLN39KtidNXKgaW8D6wzWXtPhZX4BTP3knGHaeQccQ53FxUJ3MVyzf4on5aqZWnN3D1ztm9Vi1JpNe8BUMf",
  "key28": "2CAmZvRE7HdgFEZF4CWbXPwx19tSG8VHN4rhmYvTCeKBj1CBB9VAA8heg2XqZ68C1CcfcAz23eRsFk4VgU75ZUKv",
  "key29": "3g2ZT4eU1v5JLomXPZyNKdwzzfzXs4YuU5yc2BQGpjQG5NWm7KZVnurs78u9vK914MaCioJuNvA31u2MCt8fc12h",
  "key30": "4kdw81kUnbEg1H8bHaPVMsF5mv3GDUSDq9haD8uWMadPLJ6LKVaQRasb6oYT3NizqDnxwimKTzq4kw1P734ULk7p",
  "key31": "w4evqjytaEMbxkLpz5sf1QDD7MifGEsFVu5YRF7uyATasbnfQnnxggcdmi7NwsjU69Z4VuFQw6ERKHUQtVqEsHW",
  "key32": "3nxgVaw4vt7AJgByRU4DXUnBnkFPHBWvqdZ9xWGqczcmLk5DB78MLZSC5kvs6kbRZE6MQfurpr1YxehCDhGf3NGW",
  "key33": "36JSZszYHvsjYwTUgDdNxeCQ74YcZ4HJFbToPAgkxE5mLLWy9wxgPEuTgU7eQ3ABsT4tUqqN11bH6FvmrBMBEYh9"
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
