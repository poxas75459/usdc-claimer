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
    "38rCfWLifJ1ghYFDHuJhRUjsy1NZkMaSUp4DNFzLctp3Zg6vQZnVmQfhJtrKhyUB17BYh1c7F3gMYWByctMQMktp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UbFJfEAxhyFmSMwTX76MaYU7kMJh8mpRELcz1cSRsZHRZB86VJ64mKdxCd5MPk23sm8BpsPMt7x3LGCzqEsYwoq",
  "key1": "4jYPgeYHRCvzY6WHXPpCiXDbXGgXK1B2SLWk2S6LAjPYvgNiF3PzgtXQeUpLnTAFykCWiQZ8A7wyj9CV6zSWRR1k",
  "key2": "5VUSQpE7Wv284bokPEXsBYn22v1X6h6QEaUUmaNKAcN8gVQFt154PzVEzQVNXfZgBDnDhiWizE145YbQMGrBY7Ln",
  "key3": "J3C2B1HVGqeD4Dpi8gYSaQYiH9sVjfMT3KZLgJHhrHcSjpb8aadUczcshHBDgPTKx7WNFA5qfwxoCh9gqUkYyBS",
  "key4": "2rMEq99An7YHLUKFHfYx6yeMvKh5YhnFX5ucTqAudWXvtxnf4Hu7USkdgKWjB2Sy7YW4BD3LVm1ZFkTaoBV2hEqx",
  "key5": "2Y54RHZyF1jKvgyAkDn6jRRo25EazAzKWzF4gDBtjiKLbvnfT9QwZ59EaA69UYky3BEemNU3iS8rh1TMVUnKuWca",
  "key6": "4AfWtnLMK1gnRYARMvFD91s7NGFukTArm5tXY8t31tBXZ3W9DxZ5K4GqiGC3ft7EpKL6emfmCLr68MFGUn1VfriX",
  "key7": "4qCbCnMo7Z8JuGQxJQ2hrYCHwunjhbEMhZ4bpoTi6Tds2kcqmfMRQv5aZhYR6CwK9QGQ41owcGRKGqPhYBoFisrr",
  "key8": "jGBtKL4WQky1qbNke3G7Bkct9Pp6eswbnB1dDHhM1yN48UAif4MtM6atcJkLZbDyVK7w39XPoT8HvPQUExzvizb",
  "key9": "4uLCzQwNdcumtpn6Gvhv92zmuwQ2PemSQKk5j1sx8hREYxtqWhrJS9UbLU1t6v1NY8d2zjfELWhVeW7NaWdZeV1k",
  "key10": "2RbyEt9asoNaGTAvuo32sg9Svp2via5tKiRZSuEdgskxKyWNck64FmhvLL8WpCpkL69SHdZFECaioi4bADvGJx62",
  "key11": "2iFBatmtYBeRjLWMLdKZc6VwytGnRE9H95J8KZjiz15CTGVu4Y4y383sP2dpgPAH3piE57WTvvEZm6rYWWK8szPg",
  "key12": "cE2zCdLZ2fEJi3zaZqJrx2cjfHVnLa7srQTbJquLLUkTfLLg7r9ReT57QD5yHTJWdTJjYaopT5rNgDpz2w2WNam",
  "key13": "64fdjnFAEoBY64sD56KDYoCviGixW5bxsZc7FhNct81skTuasvxJGTgq8YzY2izVJ7dSrwiPRUS2zNRpu3YypJ1u",
  "key14": "2dk8S9S1djZrgeQZATsW7kAvmi7k3dDVoKHxfz5sMhmU6ZwGYXiyLMjtDF6fR6BKKvPYXQukAergUDLchqnX9N6o",
  "key15": "4igPuY6ZdJVkNBBUgJ73a5BTyEAa7xFBrdQP2iiwmQe1PHmhQVakMKK879vFGobUZ4D9zz3JqfuB8ehFp3RwLaN2",
  "key16": "63P1aMvx9kkMccRFgxWUaeYMD7j2xYw2cPJANAM8kHF1bGfbvwMqrM8yFAMWXYaNu4dLoGgNx82PeKM6SWjPN3VE",
  "key17": "3k5UoLyQjmnbYV4vjjaqnno1Gg5o7E7WsCgcqS4nkg9M7XsL6H9Am99UdwNkX1ew8SutCxUEPRbijNRnEQLTdkac",
  "key18": "5aF9MKprNuNMEcN4mW1UqrofeAoRStn8N26P3fQhYWtmJ1KW1EaV4gjuTb5Egc4pRBzNhhFUEjiB4kt81RAXMyy7",
  "key19": "3WCKzqhzKYzwywMgu6C2qM8FGDgM52UCPLdzNGCy1Wy9gEByAVVxzXua26yfWV865AyKFt4S98MsAhNBavAJ4D19",
  "key20": "5CWX7fP5FUzWELuva182oPovXn6vd5SkYb9Q2JNFFzDZwLZXWVBGhgW1VSAGGdLdQvfocA2vSVJordHNCVrHbP91",
  "key21": "2pdocYGJKocJiJfmyjbwgDxEUp6D7ZBq7nHF14yYz4Km5HQPiNtor3MLwEkVR6StzcgNE3kDVrGadAkiS7LoH94E",
  "key22": "FxDSBztRTgVLwNYvA2ajzXhPrSY4pH3LsszMiUwm2dnruKtKKDQTxU3U9jCDTcSBZqYBKo2uC4qKww2PrWVxpGZ",
  "key23": "4Nf87EDVkwJ3KjbykYrjbY7qqkGgrFCDzbXV9CpQLQCFLF4TjeFeEGjcy9izzo2LqqB4MWbyckKAYDgbybFQg7S6",
  "key24": "3ccDkFJoYBP14X9KacQUdiArsBzs7XGWNBCYJE5NXcB9vyZrcX1dKKdeEpiMqzVsP1MTHTs8RsufknaFkBm8DLhn",
  "key25": "2wyedbfXUxTv6N45Ki9DCKNrqXCXEdrfBrctdHCYn9kr7aExkBjdrSnhXhxf2RDCqW65dxatBZxbosm1CBgFM1mf",
  "key26": "5LtjKFUJExrTvhKxqVnwuxuF7PhvXo87dsCTJf2v32tWiEpeVqfmqDUeBDvqu1u2yyqxkqaisgETb9xp7JoH7ckL",
  "key27": "HtH7e4i3UXypnaZWqaZKPQ8SAa2MzWDQUQYStvuzfggLeqMFwi5Y21bgTbVDjQC3McbkpMXRLb6tsXtLrUc6N3p",
  "key28": "3Ede8krHn4RFEAvWzuon2hvqtEQf7ji1koaG2xKTXAoQ2hqFCYtC8acDsZg5SWThwytqAT9eYpq6hqcoWUtYmvXY",
  "key29": "DSVaU7zhte4H6gxEDSNemTDfBbFZw5YBgiyXvbGsBSyRWAKE95zpCYfoagTFg94yrUNSBCGVBX35WXbSP5siek7",
  "key30": "5JC9zxPx2i29nwcEgUjigBZ8htzrRrJ94HBJxDr6Fcn7r5fz21T22PoeAK75Lpg91vhPiVE95V6YmrcJWV2JhXJD",
  "key31": "56KhA7JwvSJ3Tsmy5CSw5yj1XGYfLJQZStREUjKZ8ZJw4c2zEG7DaH7mtUJt31oxRhCoersitRDs7tUmWja45Swu",
  "key32": "2g3MfBisSmtVFC1mWQoz54kmThdhdpKikLARg6Ug6Kfb9gks55vU897vXN4RwLxDFs3H76bpxcUZ1Ftjx8KM984A",
  "key33": "41kEHVp39Ndtp2mjQwUNge4BvCxLpQq3VaqwynvJ8rjZ4bYmbmdjAdzSnTYP5jMmMNCaNEo2uS33SZQ3k4QF5v4W",
  "key34": "59rP34iZTxRpEtiPW3Hhu9pCNkTCXxcpYxqxMxfYNmshHMMLf6Y93wUD1Vxza4Eu3itvAyGvdbdkgtRGrXGEjLS3",
  "key35": "38YXed5H4K4kQKzt8qW5EfREG2ckLVQt4X6hkJXHTERaCjZXRuiaExGa9HcXb3koRcLuqDqQ89CuKPiUXCTntEjk",
  "key36": "4hpy8mpnPgG1ew4BsoWoAEvEVYbXhSUbr9663CQUBkf2voTwhjgss2Ah6jXzL6D1z2MQHeYiLqBy36hVrFfHG1A8",
  "key37": "2uvGxq7MYkcvpq7TraGgJmy44B6nnDsPP6dRaTMmbKTGcvq67hXUuMUv984vpdUHX7Q6cnMhTBv2GcU4EvCoonVu",
  "key38": "4K8Vj5dqbbozUin5qEgepLsf7eyBTaLUSqN6dDNNAatdRgL69ztpyUveLkPyfrt5y5GQpRb4oYqogVPLcHoN8sku",
  "key39": "3TwJzhdze1U3Mjw9QDW4kdnbb8n1zRKwDpXG2UcZChbWgFXZKqhpp32S5xYLBtgRiYzEfJRibnM2fCBKiUpTfqhB",
  "key40": "3txMidBQxAV4DUBUfqJsh27sxmncV6kFiwhiKJ4UK6LkPnJgM4qViDg6Ucq6mC3QTKt8p7s4AyspMt3Lzz355YHt",
  "key41": "4ou3XXyWgMt5oEmVy5sZ2J6ZDdaKeCpNcAJVwrrMYEDg2WZKXqsj1DoKeMkuD5KjYQpwp3Z3uTNMLeBE2Wpy6pNa",
  "key42": "3tqJgbsh9jUrfmpgofcQz5vrtPg6GjSsJnaCupCwFEQP1p3Ky6wHPYR1euprywb1Y8wJoku3wF61ca1q4kvBsPjw",
  "key43": "2afS4tYdLSVYTzcs42kjTaDUSgfU1emQPK6sv14XAWqjHFK5JijHpUGbmX5gvnB96WRBPCqMCqLfVvVe7NrVAYft",
  "key44": "3QBBSqMQYm7WyXvLaVg9yRcHS9JusSm4oFfnh4S6dPu3seLZdmjvLRZVKfdpxt3heTegyeKMtJDZHksSawPANZGX"
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
