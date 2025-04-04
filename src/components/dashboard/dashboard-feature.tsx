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
    "5LDqnq6EuVX7teDsP9kk71SkRoDQcwCHFGAvZcMXYXyh9Mi88McRTTyL9PDr2Q1dqBqt1C824FeU2NyD5FUNY3dM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ch1dxNnGumhfKk6tXn1JgtcaYvsZt8dXBy1q1U7wKpM94RKtNQWpLVmwwBuomnGyu1x6Nu7dhhbX5hG7LteiDbC",
  "key1": "3fS37mGak4W198wfa47FdUbqDyXQ2Vt5e3cyNoq59kf8Tsi98hduJSLBD9hAz7xys1ta6QM5UBv3hzRvuX34ZhVL",
  "key2": "2eP3nPtS4QiTdSBXHguAtvP6syend6DYhCTSYqbF68uYr5QYbpMryPWP5tFdcg1kWMGFBq2AnRDAV8GQLoteA5MJ",
  "key3": "4v27PtYatHJTE9n3j9kqs8gLMbmwJZmpD1x3kZC9Sr9uahNUNy7qidGVQK5DRkVRwqoeeFasrusim6Loqdeac3pG",
  "key4": "2rX41KLQp3nd2nQQ4tyvTN1LocABn5TdnSznwQx9wwAWbpc9LHLVEGUTEK8kpQDi1rhpSAyqjQkCUSAuoFMHkgvv",
  "key5": "4Q1zrosUSxLkRDsFGj2Dtnzs4BfKyRUHWgtvcr8Lw5nnAZ614MVHoVs5pghAzZwydY4USrHArNBSZHDJKy1MJKe",
  "key6": "5gSG8zGrEztLCTPmAYpULAZirF4yuMYPwJ3SLsaSxooSNEhgSrQhmCfWcJ3D2ctCMRAr995hAE33R7fFrw2KbaVf",
  "key7": "SPjW9MoKMVfAqtV7dALYrQ7fiQP61wdfjhRPaZCxsNo7dPtHJKTBsCiLdKpLHBzLgb6rBV2NDzrR45VkEqFNakW",
  "key8": "5dGi99o8PkTAx1SYmERr4ZuHHM5EQpQX4qgzHDe8hrixCx5pf7zqNizBWVFkQSwXQPBh74Nnxu9TZrVw3ad4wDjY",
  "key9": "2PLgujA8CukBDUuchrE8Un1CQNR97N4yKXcwYUyykU7tzfhj8FKyFhZTBrC1BzM7LgAZ5guYWZtSaapUS4DneGUu",
  "key10": "4xhN4qKiYacXVEdNappxT7pJUzPtPJM5GLKgevCE1ysny6GF9Yar7tDuhXzDy46PSMSqw22W77y9ebyQuBVpbzqZ",
  "key11": "4S7s9R5mDPWxX43bB6fqKuUMkVr5vtLwYcN5n4kUDsrbUu97ZMmdJ9QMtAXgG9V4GXwdgJf7ehCFwY64Y4bi6RRg",
  "key12": "5pdAng8SNm5hgLk3fntUpw3qFpDYRKQJW3D8ztARUa2ndUcRSJmowctbq7pMG1bJzMSr4aXfTGDS4cPkXxa6igVv",
  "key13": "3z7G1ZbEF9Cvgzqsmtwgr2zbdpjzcnN2z3JtrrYKwBDUpqARkKZzzkmF4MoPHAQfvpfNNwAMKftFidRH6mnX2xj7",
  "key14": "3bq6trX685aPFJeRu5rhgBLmE5Z5jE1GAhrwBjeVtN7BQToNTQVRsaAfE7cKHLEtozhJH6vJR35QhZyk7QhEGQdW",
  "key15": "3TaPYx5aKPVpguQzm9RkctGUHE5BpVvumw22DSj4CjmgbqhiRRSHzZMbw3kU3iU19NgmZDt8CeJb5joU7Up1RPeb",
  "key16": "pnb8QY9Av6NS9m8BBjaiNctKD2zxr72EXKdAMcYCN6Cy9RuVe17FWX2mcUcGbNtmonXmCPhpWGG4AmkzfZ9QEjU",
  "key17": "21eZcTFpEsoAkYudm5QcFNerEJVjCq9ysw2fqX8x65WuviWBc26tCVZARvi3GNvq3ge7yJXbXa8s5AJro2QRW62A",
  "key18": "2bsZsrfetR3zvdpojyxkezUVPitKkegorYqcMykfZgAwoBJgqEeXsyanRkdkhDyPNcx4pmKAhdpo2FrEFUVMNpiM",
  "key19": "5x1abbo14yxjSQb4aCD54hatbS44b2AiQGrobCmhrDfLhby6qREX8JCg4aeprA1rhcoBvM4o2YMZ9hTsBDV8xFSU",
  "key20": "4zDbpSdzsUkNNGrfqhLXfv6gDPALWXFCh2SyyMFheLVzpstdgH3p5bb4iSNEVK5EHuRj1a7fSvpwCzA5sFiAQTT4",
  "key21": "5kVMrcHSkU25SgdM2QepssXo4RvbEbcnQtgcAArj1hhNKZQ1sqxkw7ZwomNaek1s75nEiNvKiNNNw2ctMbkWK829",
  "key22": "3UKoNAHkrCD43wzDnorDXY654mQCPtNSukgsfmy2wBGBwriMHxnVwDxnSJEjx6mD1ZKnXg2SGwVckpjkjVngEuU2",
  "key23": "3qm8gbyzgBcunZ1r3TttSp6WavwpPSSDKjxCciZyTLBD4B1aL8Md365hxbEeNiB5zRMzxbQ92ECw7kRjDrUyJZ4u",
  "key24": "32JGXVbzRJCPKU69oh7YdfdfYVkCUwmhppRHLjhs2GpUyYHT8FSTjXHxwisV6p5yuWqw2ZLT3t3yVtanVpeueKdj",
  "key25": "2acKkC7rDVSsRzxXWQfogg4aGSZtPCrevhSSE6hwEbRo3VCE7hps3jpQ9Dc1Zz6ZMBTX8ED5dso7NvmAgbQMWu7K",
  "key26": "5dMWgMBPnLXAunCGVqVGmiikigt7isMzBHPdZYtkJkCYptsTY3pYFkSf5cVRHjQCntKmoYXkgCWW22eFs6a7yVKb",
  "key27": "5xdeuZDwCxX8x3y2mj2kUhxazAZxxe1QAuAXeA4pbfVHvwpjoVuGgNJZVFfwWY4rTBRrgXZUo4NEtLrsxQKW4RPu",
  "key28": "2q2suLt1G4RGQ6eEv8tFs7t34gWRZG5cPYKWsdX1ccBBFMqJkRHBMV5roXVYhAnLvAJ2rAubxpu98CiozXDVVsmz",
  "key29": "51MMTgmmrXsR1d6f9kbPrtZYy5aBGRAaXt3ac9NdjTtr3zz4zDucao4a29xKfpUeAvBqUH3PsiDtYscod7pzXbVH",
  "key30": "3AN2T1WZDCRAdDtH84pSLKgCNRfjfr5HbJLmEnRRour8M6JfbXyyMLcWN68ewtgfccMHNRgCNtxGBEorpSsoxzgd"
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
