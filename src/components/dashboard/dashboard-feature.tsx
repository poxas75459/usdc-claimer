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
    "bJLuykfsugPmu3CFFExTHRUyaagr6x5CKqG2rJjaApU3v9qpp5EzxXDatLYg81KCNxiK1r8KPEkeT9uDX3uiusX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FtmzqXZuuRThpv3BrSiz9CLLbB12zXuAdayXHHsTZ3rz4hpoSLCyKL3bpe7dSjuAuDKubvNKKJeEcJpZTUa2zeP",
  "key1": "43VPdTXcatWwztaMKfidn2eSE7CaR2axkR2nvRFeUGoTULvi26hXR58fpmrU4PWjLwU6BejECxEZ85GxffrbfpFa",
  "key2": "2zUyc8PKQXy76vCCZzzExzGxeHnV2AfHhRgLCGeG1tMRtMGuVYZvJiwMtzTpUKnM5jwKGXEwrukDzEsFKsaXM3ja",
  "key3": "3rm5paFYUB9rhDGh2RF5h81ievvyPAavtyUUAbMMSXfP3HNw1CUNbrc5LdzX2fLtLyhnzrtuzH9ZmeN9seTCSECo",
  "key4": "6jXVYHSizB9Po84y51K2aixHGGuFTr7ba2bva6JmeQyok2NkyJnTqjVMcptf4taY2uFFsPLyLz7MC1LwPSJ3JE5",
  "key5": "3xjQtwHr4CafR336WpszVh5YTAbV7pWNTAi8V73AgZAACfgk7J4cNtxJqEYkF8oPfFLF8Z8HYEVtbYY1SVgSTLEi",
  "key6": "gHdnywk95oY3z1VtT9gSGzwWd9HKX5BJcctpK6MF1eEAeqEnoiPbxW3GhfSi6Srb9y35tfW1TUkH5T1uWhQf8j2",
  "key7": "3vnuEb1FfFBin5WTzc9eQh5rV9QFY4tcEhVjWmx4StwoX9eCGZLpwd1ChavSChFZZb6m7AVX5JFKD6R447eukgKy",
  "key8": "4A4kPVmj94Fo5VqdV9fyKWT47h41YbAfnKDTqMt8Rd3Gqr52BakkrBN1Kmb9JokUdvQpWyEHsCjU3SFZhM1RpSFx",
  "key9": "3c7qJudzGMbkoVgVJb6Bn2sPCxhD1jv4c73JqpCd9aKkKwZZcxNUhYcPgVrKQQbgJvtT5CqCMbcUfRqgjpE2XxiQ",
  "key10": "2FQKY3uCBW2HN8tTEz2grtZ67HT9mRqkX3GGeUJmNMk6u5JBDJ6EnMYpjzno3jx3Cp9m2MsHedv31Z3Zwvwqj3ie",
  "key11": "4DV85cw9anzkwxWktMpYftmnLNc2LgWVGYGS551s3G36quj3udPv14Q7uhmcQLz5qJdRxoiTt7QEpko6jrd7o6i7",
  "key12": "qyAvQcGZCZtzAfeaWZgbg9yD8Kpxi7Wq5paUocN631HkN6CdYiRQeTAqwna7ASw5PpC1aGVnoLkH83f1pTGCJri",
  "key13": "3QmDLETbFtoJHn5rBQiAyJViNkRxyadA22rmcFma48yjaosJM5d6AMzGdvnx4krZ4Q7k3nAJNwgxA9ExAkrADBnM",
  "key14": "nVdHuan96pk7ytSduiW8CAnvR5571Dha3wRkJcJuwtpcf4xMB6Fz7jzJok9C6hbBtWnYFx3CHCbpdHuo46bwuCr",
  "key15": "3RxcwyGZvGTyStnjj9YqgpC6h1URCaANJfZ4RvcTTrK8GCWUETXmGui4Vkd41j6BrqjeYWTLxWia3zS73wTMTQHw",
  "key16": "KkahrY5qWM3pfabZHYzhtDv9kCUnEAA5sL659jHoxpRSWm64u6msa3mhsjtdpdLryCD4bsoRuNAMiwb3cQY393d",
  "key17": "4VocrP5FpABotxWHQ1zDDKya9FBGc3qCSZYRxg5xeUyhHZp5bY9rqyszvDVitC8ofWmbs4Bv1NgFtcudSNoFe7cR",
  "key18": "2vcZVhBfudF5tFMTT3KBtCFHMNjbC71bWfg7ur5hdMHiPFsWGnAt5smci7eeQd3C8Sp2pjHLg1LTjTgXeCYdmRbT",
  "key19": "4Q7Mid71d8DZgT56PUVTSZ7xgarkfY9c9VC1GM8u5kKefJTT1nAs6hukafXRmf3d6bU9Nsiq51sm1XHx4iVnaxbB",
  "key20": "GWyGybNRfVB9k7xs5kUDbrQq6rxTt9BC9istGi2SKoVb3H3AVLQksaLJ11dQbHh54gygLaERXxCohNHwQytP6DW",
  "key21": "jk9i4niQMLGFy6EnFQoyqCnBHWUKqERiLaadbYHR5QmU9wPSe8P8ECjRC4BjFidXE5B4uLHGZTisbJPqSUv8TuM",
  "key22": "4hqfZr2WVwZmcSCocumfdhWfN5qt29wGmyYecMi4uGkYnWro2LTrFdgFTWDfTDiBtTDvtC2PF2yV6HnHVmRJCcLH",
  "key23": "5BbJWesAthC8R6qVEZLiW7mBNanYnpVecDCrSvZDAr2t63t64VMNoEsJPszB8QiaRPXBF5vD2htFA6UCZre37Xqp",
  "key24": "mrwsffJJDUiRoz8i9kFtrSnYG8xfTWtEFCq2ckpcE5i7wmE78L2zrizHQ2T3JbeofjfcqAneLa85pxWM9wQP3PC",
  "key25": "2F6qc3ExfAJ3NREecRgjBs5HCFeg3TYWRWkRLNMEd5jTUPmhHUbQUwZmvWQZgWyGM1TEyps1YNSLCGwjatPAdMMN",
  "key26": "3EnYcAGjo8F7MULrwM2pW1QPw4jAQbETF1yJ3BvjBS9HAP1985PiPyqQzAWFT3gWw7GwxXSoEiUQQQtxZBe8VEP5",
  "key27": "3ovghmNcZRs5CAdw2jnT7iXnb9RAKmaZMBvaFfGoRKHspA7qTFYGLyhgZohynBd1nB2wENaYLMK6bCkGxAUhyFLd",
  "key28": "4H3m8xUFm8efvbrYvJDuQxxdkQjdQ7Ypr7LSgWxGjXMMYUo3odJStP56oUkmsSsKkFCMx9yt6yvHMjjzjYHwMDgJ",
  "key29": "2kabgT4ngRytnVLj5ztynPHTkfdgm7sQiuFadxvphdtgrn9YCZxY1XGfCLB73qP5m5nVcKc5xLTy25rFHzGkrwGc",
  "key30": "3pTngfrrg5VBf6ddreeUTwc9y9orB6D1fq8cTA7XJ9H9XdLCUD7zNHGn8XmHUHHBKDHBtqVcZKXXxYULYXK5oWRu",
  "key31": "Z573Cy9edL9Ft7XeizL6467SGZ2j3rGK7my4rStcwPpYA1YiEHRgbUEPmwV6MSW7RPEhvPYwnRhkvSFAPaQVk7J",
  "key32": "3Y91NP4Bmuh9TMYJhdkTG7jZ9uZGCJtuCmvGdV8HV5tqJyLTUtJAXxoFAggHnZHxyHqFvcfbUrBE1BtgXfvt2FYf",
  "key33": "eokuhAx5Hp9YZkXncjuV969Lr5dM7aRRocm498vvLKzhPRM6sFjnTS9hXbsAgSgVNcpQ7UKvpnebYHUVWGbkw4A",
  "key34": "2jM3hc7UR57d4AnQ5Q3RJBe3cczoZUu5Hc31ecsNY46cdehkXEuijHbpU6ENeYn6917mj8q5V8NM7cNfzSy4JwBB",
  "key35": "2bwmEvNqDVLc35Mvvch4AdpsoLfNezykZAwmZ7ctUZ5HynWjPT1oURzKnfnUmHzpzf9x18m4NDn15zap1CmCUCou",
  "key36": "2Fc9XQcZRxrqgzDLopaAoQkrGrRCRTcfqeLrSrStJVsyg1CGd3ncgBADa8qrNZX4w8HnwKtChzXsHpPjEoU6CZq4",
  "key37": "4HgkjLP3Mm27dnDym1KxR48k3dsnN4gpyWoUBSk8EA2ddReBdKBtHHWoxqg6tBsptX4mpz6Kxq8r1FQZzAJWpHeU",
  "key38": "62x94P1nqNpUk7bnewS2vXxwGQfEcYD4zkFNWYGjFMchdufZA5MfRaSs3B9psAHVvuVLYgzw86M4MmBeB2sw69ex"
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
