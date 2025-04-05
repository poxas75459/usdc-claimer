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
    "2baYHVj6rQ1Mj6tjFGJLn28YPX5iiBninjouo8YtAew4SWMPzuFwZYqt7FsjWzzNzGAZahkj3Sb995PhqzuWcfQQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DBrmXP4MCK8BhdxC1EesQLcEj5RBmsRuxJMVBxcj3mk5kTysiiZQDe2NqejxiSzsxKYZGB8UxwCCVjugK57rohJ",
  "key1": "fsXsN1QH7uDWbKSSuEsWXXJ1C9GtH9XTdPWUbaPkT6goiWNpSXcWYAwBB2MNrtvoL6aH15KjMnfpbz2pPPZ2xbp",
  "key2": "5DvxHVUo27KVAD3YxWsMNPEqnyPPF5a9vyKguix5iQagg12Y2h7FhYdEwnDCVJybE8EziTaenmvL4PC1EdMEfont",
  "key3": "4EFv24PFR4x2qRXB3db9zLPurWb2jgVgM37a8qdSeCztTd6fHiPjT1hiawG4H2YfJf6W4ycYDCQGH7Pv4jbxwUwH",
  "key4": "2dzkuQsVNdzakuFdQigFo7mjJ2y9FqaksVwsKUdCLNceWaRMrpFx9xt2LSfciQ1ZVJWFypn8qQTPDMpyyZvrqLKc",
  "key5": "66DAoPV62HKbH5yxTL33PamcJv4Y4BhccaK4tAv58nNxmvUZJcFhLtxo7nVQLQL6FNMEfcVTxQuEahrPqtdtwChH",
  "key6": "51wCAze2ZRPLwLJY5Z9ys4aAuibLwv13FgVvJkdLVN2uyJDHLN44BabMx8s4DFnvS7VhSv9pEQnHSZ9m8mNBPBDd",
  "key7": "5VARw3KdEaXpEZ6Ud2kGVFRLJBhh7S4H2bvKVvmu9mHjwxh5k44iyUCCQNurKn5e2HSFfiaAxGFqvjPmzvGmiRAc",
  "key8": "4c6JF63oMSrpUhu5E1zxUjG9MpipBarZJtzRnZh25f3cNyYVGGx2JGfnvb1g23s27fuNyd9E6imsEhq19aVVFhNc",
  "key9": "3MmovKqy4Fw8Bss2TGmr8PbusaXZk7hQRr5d8qGEvwEZqcdBnPzZ4Rx5cCg8gjuRXgHjRAfKLgjNnSHexhR6dd8F",
  "key10": "2gLJQsPnR35gorSz8ejrYLFwg19GkusCwsbfTYmZki5x1ycsZCoVotRzyeiqoaLgYRG4pmLVCSWUEcRM8LarCrB3",
  "key11": "51qWhuUGj8dbpbwxaDeD8V3YUW6rZET5rkdEe3wuwdSj4Z7eB8peBAxdLu21P6CekJQ1ambH8LwRFfAEjJxeDsCp",
  "key12": "42fNtbsbn6fCSoZKPY6e2ZnLuVjboXWrBC6nkdsoA44kda1uPBSk21fycLjkq3Wsr4ZGnwkH2BAM12eYhqjwGFF7",
  "key13": "SsPtoh45v2fRAF3rF4TM2Wdz4WRmw3oJskobuEw7ULBr1uXtDSs6YM8kjm4vKB2bL8Q3jjLfFVv7occFqpbfb7L",
  "key14": "4Q3AAdyLpW3paopp83or1S3MJdcgTK4eUzXLeuJCsMKCWJeiqNDZqtBFHyhneQZXGgaKzG7BjyA5ey4QTDKko5xG",
  "key15": "3gR7LHLtwFwKp1HE1MpkdfRVkEKUqFz7hF9gmewM7KvgzZ5XvUktoeoYjioEjX7NjooDHV7nTesPtUkQxxCw7F8T",
  "key16": "3WQ2cd9vX4ocTmdS2GPovAQSUnk6gAHjeC6EPsWJFT1K6jaxqULrMNHq4YyqsP1LA65pYQW7FdkWTiMfwwieGyWh",
  "key17": "5eQRXjdqXKYA9sUy7R2oDRj6bH46swvGLudgK95b2c6KqfXPRZzbAvKbsZcvtqvrXkZn6EGfWhYkgFuxRUynGcrL",
  "key18": "2EVPayFrectCsRW4TgDR9y2phNbq6D3wKYnXm35vzQWF6rBEnTeM5D4Nv4sBTB4kqM7QBU1paYiAxHFW51bJTmE",
  "key19": "549eKjBxz9hF2bL3ep7buQ8uFDiz1E7EoiYdaBEH1biHfnwJAmSqGXD1VEQpGqf9LRk3v7y49XA9gPQnmMX9txLQ",
  "key20": "396kZJkxo2w56gRKGBcnENDSZp4Fr9RkQQmpoi9U6Vz7MTsxYhphxUTQPETqhK8hNm45qaqMfPN1bsUUwbuUBSjh",
  "key21": "uPXKM3fCACH6K2VqpC3aC3uFzVCQuYhtr2qfQhGged62m25E95qm1RgyhRmoGgoa396oJGY6wjRcT7R6888LUu2",
  "key22": "4ECwij7AGGrKrHx3mMz4zQeAjWb8xXUyUP8TK5PsJkkbuAL72DzabhuSQAXtbiWY7g3QeZZvZbb3cp7wkPQutJUX",
  "key23": "2iy2k5enJoijEALRB5w4Kaxq4cJP2t1KGqSD93FTUgWGaGSdwrkMr78KxLEzgVwceahSH2hd2VFwFTbHiuZcsPGm",
  "key24": "x3pPppMGChv9SVczNr6vfhLen3Fmn6UDqyeash4DEZMVdaGYJJGZ5zcGqSvqUkzYKdaqeLfAA6Lz5dCZQr7ok2c",
  "key25": "2hEouPjpu914oXhRFLPU5LBid1pNLVpgkvUGc7J42TjXQJnMpNpshU9WnHXuqVi5tRXiBZbEeCPV9cxeiSUP9pjy",
  "key26": "5axKTWMakaeNJ3xUgRnUPcF5UkbjBMvv5BESv42VJUw5u8iPieRaRutYJM2QBhLmgvfUfxsPjm3UriKFRX5wGGzz",
  "key27": "3Za2NtpZe8U637Pme9GQreyoNYPmyhz9MQTDecQgZpyktuVWB8d6g7VRhiGRkPYsb43ndYP7rByJCfuW6eL3qtQh",
  "key28": "3txqZCqMv1Wq2oqmrsHRHSrACoPkcecr3BgstDFw5YfstWGA5dDQgwbDmyqLaKZQcALb64b3P1oUUjhMN5fk19JG",
  "key29": "5GQmvDwif9TGKTG1qeBcLaqC3f9TzGvouvXFHnxkQPzdU9nuhcrwuGd4THLjVA8h1VRcUAU6v9D34tdNnNteqctE",
  "key30": "41hfdwopbSm7AgbTvG8yRpNW7z2TtJiDhEyxZJFQjLsrN5Rs3nR7TVbEyZWHv1TbiNT2j4NeBKhQyxzLRwbuS2F4",
  "key31": "2J22njuoFHqrpvyPJads9wLVVddeo6Ks2TFnhUcw8FTyU5FcpLeFHwgop6RChU5uDecPVvscM5NZZ1SnKcM5UJie",
  "key32": "4xFVhsD1cWcSwS43oHW6gRi4XhfTnwk77XgZsdLiMPtT72xuR9JTM4FG2U7AK1VwWndLEb1XxRGj7jH1K5vyEVAD",
  "key33": "2wkc1UUq8BcTW7zcczWqVqNUXxKPfqjnYi9Edf81SJ1gQufGonQY46AsEPMrh1VJJwm3rTjzmcUyty6jfxMLgBhv",
  "key34": "RzvSNEFcNMs9JPFHXjpdcQCvz8TvigxmRYmo4YVerTLJzRUwRPujWicwxVKEtCg56hjHPLEVQkAK7FrvcYCx9hX",
  "key35": "VgkLvM6e7oGW7Azuyo7p1hpgGzTqMNsNDJin9cRB5bGJpiioJcEAEuHsn4vzu9HPURnyMuHEfwZUy5ZaUcKV98J"
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
