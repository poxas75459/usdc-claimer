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
    "2KTPr5dWoQCq1R8AoSvbh54ceB5tyKa5LWqnoeocXzsBvSJVF8x1apR1nvihMcbmxNkXZEJMTcpEoJBBx3LsZJLc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3agpeJPXemNWvrrkxMMU1R6P2KaVdY2JiHJeeyBQzUuTCGSJMdqeN42CKD8weuqXhALRkgHWbZiyiNiziLejfaCk",
  "key1": "48MjZQto2PYMSSmTLTrjCdJSEsASgtNg57ujgfFpnteJMp7ZsSgEcUfNdED326MT5qcdwHmeAAFAJ3SXCU2nEnRV",
  "key2": "2xdY372Sm8c6464geoPq9Lk3phC13XUtvePghLZpHc68km5pW8FDTe86K2ZNx1z5161PPuae1zh9QECudwgCoUoK",
  "key3": "3t4BuXFhDRGo8AaHAbhvDxUHbSMisMGjwPVR8qSWccGBRUahrP6rSV979c4uPiMKTEwDPvYEeUSZa52HwCb1KqAm",
  "key4": "2HtLtso9H5s6ZDiQUMzVhZDizug7C8WbWhJVunwLAhD4Bgkqq5QtGSrxMGvVwqcuc8SMGE7yzs4asJ292u1pAkDM",
  "key5": "3Hbm731uhvRuYybmD2svposmpHbQkrrxeBXy99KACUJGbwkZ2BpvMoviUw9AT3og53BfzGd8Z6ZrZ85Br2RPN4oD",
  "key6": "4A7vCnALGzoRDBaJzfhnWyWscpUzzv8d5KYFgjDZe3kCKWK9jP5yEb34P2LaZESuUwfBaKPvwimCKCa2L1MtcSNC",
  "key7": "5fcTCnQWd4stu2bv9SRuCbk2AkVaWBrhPXWQFAazmaN8FG2Lj6tob2F3UYrvCgiTVHsaYWeGHeCoXqDbhNVnMwhn",
  "key8": "2WCZKMp5VuvcR5bSruUMjLBUK5jSkqHYfHhm5imNbHeepuCveUk73HiBakApR7qjj4zt9SX3cpYWwmM1TcFj8ViS",
  "key9": "4hGQiasGUHgjayG1w6WiyPKJ8eH9hw8asQY1denvtDixXpoxG9Vhm2rGWVW5ad1bYUbuRTcbY4CS289oXqq7reo2",
  "key10": "5ucKMn2E7TLoEUhrcM33GcV59Mnm9bQV7bXcq333fWFpktL61C9zbCEQ1ppMW1SfCHQePUeCW9AFTv4vk16JN1CA",
  "key11": "2zGnzzfZBz2rfJsJSSYkPnVnaMzAKnbx3zGAwCcUb35QGCN3KZLDNXV2j5gLL2chAVeXu57rSSvMZR8GWUMN7QoP",
  "key12": "4PB62tuYMnxnw66ZmfggKiuuBh8DFS5BhFVDr2UxGXdFsUXjVmLFjb8Sr8L3Qkkc4eHmRNz1k5rkKgqXYbyBX1sH",
  "key13": "3PkN6mebRVTUJVf6royCr8S7c78PHVfdAfQW1sTmYohhzha2yckwhTZ6V5hd92ri1krwxQqdKHaPo7yS6urNQX4g",
  "key14": "35suCksxSu83Vjy3NgBmGMFVZMx9jbrGAzB37HBWwaWRJ2Wz3W1n53oxTaWiwhcB2KLKhKRRpbxpqaeCZFVpr1bq",
  "key15": "5EAaCty31tpBigM5FbtUqiTqGBpoPjZoihQ1t7zRGJW8n8vEcfHQWRM5q4Z8v2dpZ4WwiafUJEKtmtUB3zLjVChQ",
  "key16": "26HWzcgMGCADaXFydZ8d3D96GCVsBfMdTHinT7ypyFKNABqXheDDqH7PkJ1Ci3h7NCioLyod3v84z7frQozAdvgE",
  "key17": "Qm9DYk6KmujrRyCjwijmrkUPdiWYgTSfA6Qw4FfZCyTyDtXD6ndWMFE93tBawYZ3CE3yYxEkLt5tkDL53WjFtDg",
  "key18": "ioZDFc3QsaFZWQJB2ZJhvFygNNbsVeemcMerZpTgMgSjW5DmmH8MDP6vDaW9vJELyb9c7KiT6MYf2cr2Unmt2zc",
  "key19": "2U14XLsewkcP78VrW5ty2pZ7ud79PgKGMmwLsnGdpKbRdociRJjA6Ut5kDfHCLMsoTwrjjAAtw4NshDeHcFqTk33",
  "key20": "33FxzdU6o92SYBDury6mgjw3ALRyMNm8HCaU6eofzZ5dobewBcge5oPZDigUGgYPLTXt1JF6CVZVfTyHYAaTHj7i",
  "key21": "3Xj7HbCSrDdTZaAp15mUahKVRA3778owiAdmLjuUPJJ3rzHRG4jzXHxMTboGf48Hg5x8pUa5jM8t8suZw7sEQDEw",
  "key22": "5xUBK93ihQx5R23PMr9fqyDp5uRhbyYMzP5obPbncQagSwhqdBNhqgBs5GeC8ijDC6GLuvRj5E6EwYxvDq6iFter",
  "key23": "4DTSi91dKQjBXoY8CeERaDmwdKv6JAusFMcxfSV9zxQYJg6EuLfsSGDZUwixFKKbgMTUBMZ2WR3f5Le7vWGLTf9c",
  "key24": "2dSEvyhaE2YkqqWD6YAr5JSZKXfitixWCQ81uHgjw6M36HM4Pf5AB2AcBnmkWTJdALfGzjuMnjbX553iDD2KR5UQ",
  "key25": "3iVUiDDRZPodhUhicrqQydf9mjZtPqBDQYziSP5wJGkuL18ZFvnufH2Jgw57uLf8Bfwb6sNDMHVaoBXzf24QNzE6",
  "key26": "47nSv2DM9JzGZtj5bP75fcRQcLRC7XZFgRDE61iyzqwwc2uAzr2Kv5NpvPngUSnG2tGSbFrhpuuKkVwKt8ENsDXJ",
  "key27": "5ajmUKx3NajZc7inSD7jbzXWSV9kerP1SkaorYH1vYKdJdwu6KB7WthqWNmSgwg4dxFWPLoBy1MSBvpAK3GPUGdz",
  "key28": "4P3YiMHkpZR7J4Arb9rHvvbRBfNYpvL7JASCB6sGbrw1pwCUCoKJRKqt7jF7JQE83T5P2BMNEbQHJ4pBKqzSRYdK",
  "key29": "2M5xqYnwDs7CPQ2XyWw9JmBUs8VmGDKdjoJ176Wrto49cQRCXJPu2a8Ly9UuX7ofE4RVTbkbTXKVqbz3NBJAzM7y",
  "key30": "CCm2y4mJLwKpbX3zs8m3pg4yx9roiVx9yjdcaQEKZcMBphMr4qfKVp1kEwCdBZk6zCoXVTWCLbxAA2NjasoLq7Q",
  "key31": "4RwkHFeXweDCZTaWPWnzyNpq1bqVFMmJ2fuckxd2U9MVWMk5frVtoEU3ncuNQRBWT93oPyAX6nGsJ2QxgZTno74d",
  "key32": "5hXfJLzBmzU82Bvq5sbc3gC5sWY1PXgjNnQeRHznzu6xqe5ozBP4pnza161qUnSFhhGWBLkPzvZWhp96p763jwLF",
  "key33": "3RzFADrCU93w3Q1LD8GJUZdAM6L1HNsghHdkmfiyTbC5C25qGjt2YtGWKHveXUtWJC1D1pLQgASJPZaeBhVXNtNi",
  "key34": "4vsX3GrCMTH6jTmbjj5uRi8iax66QNjpFQen4fFEYj1YLCp3XdoBHhFRvbGdtnBJPa3RyP2Zrx19ogYJ1H7mQxVK",
  "key35": "3duKr9jd1xQ7PJBmnrhhTaZck1yjfVFmJxcuyzPFUstjsYPHB5P4kaXnrT9RUhpHurPakjyE511zN4nW9QiH2oR"
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
