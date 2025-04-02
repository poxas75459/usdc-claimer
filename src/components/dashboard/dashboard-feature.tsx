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
    "WDNaTx3kk6hr75Um3f168DVEcsyT8PGgDHS4qwfb9tZwqFwTJ6kPt4RE1LBEZqka1cwkzC8jsVv8Pix7gaGQ8Q3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ypfhERSDa6VXTLvT5Vkc7PAkxeLwmMcJuCsposb4ofGQ1Jvn5amvi6JVW2xDFD6LExf5VRKnrRgstKY1X2YJaQ7",
  "key1": "2jTLYz2VUScbjsmZZitV2HuGHfL6GE6oCAah6XKV6PRAMsMHjuvqLiUeenP2uYqyUbHTdFq7PtmbeFRagcJcXuuk",
  "key2": "dF5Nq5tRfetTQuV1okC7r7t9qjLPRgSkxRfKxhf6JY14hbr7mMqCawQv4ASzG9wig2moxW5VDoRmYQRwPUmdAnT",
  "key3": "5VxozcyfzDfAyXEHtCMfpXyspwhSsZcwZXXU9vsKpafjj1r3h3xmMts1zQsAmtVVGYX8Vg5ZrEQqpoDNZKFggf8C",
  "key4": "UPoUgQZM27kYY39mDscDDzciyTSTWXxC5zyXuUw7FEqLR3ca9UmruZQcA5DN7vuM2b9CKXZgdsQcYTifUH5etf7",
  "key5": "2h7iFztuRPrZNBGwEuK66gJA46Ccf7nmP1nFiAseXzvGCXF9oo67GQHwJ5JUx4Jqg7AmupBczfWfxqyDwZsf99we",
  "key6": "5LfW3FyerL7ZYu5dQjC6bo9fp3NJ3Cxscv5QnsKeoymE5iEvczez3pBB6g88YZuZunJhJpYLFX5iKhMJoMkAn5j1",
  "key7": "46cvLWk96n8pcZydPm18mimAx1RrQtqPS8aR38kakVUTuiPb96SKXpG5vdaviY7cPXZL7zdmztvUQ3rdCUR8py2i",
  "key8": "4J8kbjLpYwghc7sGAFWbiEoVDPJc6PDWgRdYr4K8WkWodM9DnRTQZRok29fT5JXpmCHJbhcs9ref5AdjbvzSTFZP",
  "key9": "59zmmhf7na1X8gmMxzARRDJG7QRte9rGR4Bd6tuhW2qoV9aHaCDYgRSGvhxx56px6Qitu8xXKNzi646Wnr14tsMb",
  "key10": "2Yvs8X1mea7w8nnYNUcWXvK18yvHLXvixz2sw4joqSec7fJTZU1WMoJ5xcR9SrAihudtZ4jqPeKh7uzswMm2hkH4",
  "key11": "41bTYN3WKCA8mGDQdwRPKiQRuBLpGf663736nvQEVB4J5TGunKqJfgZeHhUHLTntevGkmsPKukQtKcgXWkNJj9yK",
  "key12": "3Mexzqc6truqbP5vsAzT8SNU5rnyVXBT3pY9bxG6sjDq9Z5cJsJJ4tHiKTaGoABkp66v6NuqPmor1fJG7ziVLQ55",
  "key13": "dykVwqcHxe4hZw45eNWTZXJ1FppWoEsV2SAnu8kqr9EryWTYJ5rmB1Cn4Z7vG9kF4hsoRsS4R34pYxiCkFranyN",
  "key14": "3Vycu14YMivJCSChjEqdquipPDQuT32UhHWD532UZc9FNweyCYgvNX3heqwFwNFnYu7e7aLtgkUAqSXZdjZRs4yB",
  "key15": "2NsZresr8Bnejt9HT2pXPrFZuixHjahJ434ZWekwSALhfswa1ZHaL6kbsS3SzSCxsmd5PMS27ECC7m1XCh6BZLF7",
  "key16": "rxUhi5AHS3HrAwqV2wLbKv68FChvN7v85DcJEhK8uQ3UYTMSjntFKNSE1T8oRENSk4szNyw4yNE2tCAMWaLd5Bc",
  "key17": "67DBQx6t67ACetkTxzbpd65DtdoyJhAYcKeUa1pCRRrspjrSAmBVo7DPqUuSYMsNHqE262ACARrzMggjsy9obU8h",
  "key18": "2hgiuUcFGjABb34MiUZYrAFKdxJzcWRfyRZtcNUsR2vbXff7T5zTCBFNmAjdXwieF1nSmoET5PdpyxAhHZG18VH4",
  "key19": "34Jiv4mWsow4QYHdijaFYdiBHRjqpSAyRn96LRN2rBxgNp4ehkf2cVyqvBQk1tMz4H9UVFnPbG7ymDtbhq6Yoagh",
  "key20": "sRq2dbR7uk9j41GM3zQj71FNFW78Md8m4dvrCVC56tdHKuewxLChWYXk7LBHYixsPEe8pcgro7MJMY1PjYNe4vB",
  "key21": "5b5eS285ZBw783fuvDUFPaSjK4v4E92bDxybNgSaeyCvcZsqpH3HWKKAnzWZu1FbFmsvq5ujeuizqgRShkmmJ7hb",
  "key22": "53u847vAPrkK2oZ8xagutc81yaZrcGReRhW6n5gjvVJ5N35vVw7euTGNje1H2R1kf6U4xZBYPoGppPRQECYEVWxy",
  "key23": "4jNjbLt76NotbFf3xQ1ExFVL7y26CjHKXz5QruqrS7hurFj2TBunkG4Bspihrnvu6133QoHJqMDUCsUQWHL9JvL5",
  "key24": "47aHYRAEYcMJc9CyYWuA7XSjeCXWCjrJwnTTGFTCNCeY2bpxqjMH8CM1R15AbY2fJ17JLjUKhrWGyy1VRkEYaPyt",
  "key25": "59WfQd3fhqBGbZk7kELYsYXFtdEcuEQYQJnw5ZHPGoUrjrQmK1VFsLTobuyudtEGFuvsubiPF2kjcFYimsMGq8NG",
  "key26": "4TrKgVit84UX6D7k3XKTVHCKMV7dsmxnTBg7F2v1rCEpffyhhZVfBD1N7H9U1SYXesMXeZghz39oeWdiJxGuXLYC",
  "key27": "5g8Gj2tRHFq1DA4CrNb31ZuNZa9wtn8LfhZEtNqoerjqusGEF6JFFFGrE1vdx8Hsmte3iSgWFsb4mRiM1A6za2jG",
  "key28": "3FSKaUVUbBd25hjA3CiSMrgcNq8UTq6C7jss5e6A2kgkhHo2ttLvoMRagW5eNK3wAj1cXBPNvVmsqqta8fc9gRbe",
  "key29": "42HzYqGEjzbiS7ccWYTgrRQKmqMcfwJtZ4uVu9vyLV9NK3cdHrS8x12mkjfNeGgfvrniyVJRZksntzb48yhduUgK",
  "key30": "2iLrrM86VhFqQGLXG5WyS295fYP1hfcUdVekEr6pREepxBcuUJeScBGbc1BS8p51mmbNDRi4e4yP7VNT7JhhkEyW",
  "key31": "2U3KCJKLN7hWdWSLg9AqtzYWRZPTyzL9d7aABXw43yUMbCh5dGH9VFGSm2pxBsq24DAbEJZ4ypuVrAhBCsGd3dys",
  "key32": "WynKfpP39M1Epetn5xeoKx2VWZQs6iRC7aNXBd33duvdSxW8wm5ftHxQmH1emPFLViFgrdmNFdsf7vKB4dFuo9M",
  "key33": "4feC1CdeBhEEUoYR65uDeQQNPtfT1K7BcfY5bQeKRw6g9DqXbbkFwsj8ufJTeLjNQdtKuZfavxjWUCBdUKy6UBDS",
  "key34": "5objoSF3F5SV2i1m6Eix6EuiTq228avY6bC4EFKSiR4bRTZfYudEtakJ69X828ZbAo4SBV48eKDy3kisLveKgqxi"
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
