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
    "fTEERjNFjsoWFgHYpAT9y8sC3Ac9EeFmkYfEjBfQtGxcejmVM8vvNhYrPkJVfox2R8NCFd7uEuRzXdHsKrre5YA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PzPPxLPQenCgnme4w1TE71LH34S599D19nS3LiySgfqyETe3hBkr2YR2tauLsZZT3t41pComxJe4WTmrmTe1uhd",
  "key1": "633CJ1i8hXnZamha2cm9F5Eb7Z8gMBRhThUGDM9usnMxTNixGMk9MvKgN89J8Nahoftzfi4wn6KizC9TFECLNNje",
  "key2": "4GtdvKA6PYfAqP218Ka2EpRus6QQPEoZNP7nr13PXJrph4npNyuGpbBG5wthcCZ3CPdnBUoLUFgb54nPCQShJ4qN",
  "key3": "4MFL2CccTzonRaWD2gxVLb8YE5vmEoSJMqaa8FpqBice3rRP41ykYwRWVGGzTbLRnsLNoV5RKTRQKjYMC811KWeG",
  "key4": "453wYcxzFHxx2ABfVE5v3B8KckzopYx1u5avg4ibLAWqomSYoocnweJCR5xoyS2U1KM9x8mcPFTmqzECQaZpE43y",
  "key5": "5a68x1GWw99EdEo2JM3SCrUbgJRuKmynodEAv8K3syhNGC2ecJuU2CeY1GUsaQnKsKCSJi5JAB3c8iaekQx5deTA",
  "key6": "2V7QaSfZCwm82kKF9rWfHyhNaEMuaNLZ2G1UXLnKqgNTyT6y1zgdwLpsVC2keAwcgbVQNjHYLGAZ7Z8Qtmfp3ntE",
  "key7": "4B5WoeTaZzzkzPuvLaCieRuNVgrThitR1fUWDPssys3vKvNGMp8kZc8ozj7Sw3S3PSUMGX6E89NW4scmydJ3e8Vt",
  "key8": "3JrAuQ2kMd8APXnYR1WvBFQchPHLqRyrwGuocXJhQv6SFPKUKiPJdnDXeR9vxigqAb1GGqsEmLh9jzA3Bq5gvEcn",
  "key9": "WkQoiz8AtNiyYYia8VoodsrDTsmrmio5hgJbUadonz9jMF4d7ntaVoRrocuVTWez8vRhm7rLps1KoYhUkopk9xg",
  "key10": "2q684Hu1kAa4rBxz9qM1wtSVuf7kat4XKbGvMZwmnsxcdGMVntbuwi3oMhF1R2J1dDct2JB7dm72bGqHyAbgDjuf",
  "key11": "3bQAtYEkMii6aExUWPqgezbUHZ92DoLEdAkybPW3cC2hhRojGKMMfcmHqN6amRNrdR5QHAHFuxBbVNoAZaM1Tk3d",
  "key12": "33oP2t3b8EMJkvzbjKWDSMAzVnfNSME5xa8YAK5kPNvqcBpiAx6K9VxXggxM45Tc6zGoenSa8nzavps4Q88L4soQ",
  "key13": "4mpzkG9ribCeuCxrZZvux6k2RoMekWReqDbkZ2htLrhjbgsFWA4kdRBid2ujhqVugscTvxhwfZYLXUaGG1AeMsr3",
  "key14": "3qiMpy9KAo853DowsW5FYeHVGjvZxyDKWsUnPhtXAi2A4z8fy4gU5MpQgF1Z8DnWMWEtL3F1ZyaH74QKnLj8L44U",
  "key15": "4WyeYdwZ3RFtCcRNzQcyesmcKA3eAVWESXBKKEd7hJaXeM1PTti2XuphBYqUN7BaFEzTpYGSA7pwj7RDWmqW98Xu",
  "key16": "3cExLQQgedPVgYMYM5SSuubozohfPsSNG6obHiyuHWF1Udox16jhFvN2AVze5AHQU4XaAgSCc9VRPunWuNPVCHQR",
  "key17": "4KLWYmhbZdR5rET1C2gKW1cWpqorrXn57FpGTiDaCtmWfwr2nNA8MHjZo2vAKvECiAXd6Yux736SMjN7stg5UJEt",
  "key18": "3eoyYWQWeGWKm9nVi6r7b87cSPwnZPoEJBMYKSMoLWhHDpTfkguyceqDRhLJYLmzYvRhWbtiipLro7WQ9jdqPGoZ",
  "key19": "2ak8euVP1AP1VUhdWyAoXxEZpLR5Yb4R3xhHBFgPn8yNkBG3RLosxLhqj5QkXmi6KAWYueLup25C84uMSxnyH1Dd",
  "key20": "2mzq1ie4U38eJW8CoJasYn2rMzZFs9GDy9i1dxAPqoSEd2GfHFXHSkUnvsF86XUvDaDUPuPT2FCsbm6t2JBzKfNi",
  "key21": "5nS99z7qxUoTnAF96abtccnp3SX2afBhMBnAVgaYvyF52n2jmXL6VqhTPcHnvP1m2cQtC5xaKG6tdQiA3BkMNYZh",
  "key22": "5h8protCBSgorE1EPwTg6vjzTtDYY3Ay1VbMMYKZEwAGpVmS2MeLg5ozKvX3cixdd11NFBQEpxkBZCxWV6nwQakm",
  "key23": "4GsxjRKrb72MQ3W167p9fV9B2GpxGnYvGujeFMg2dtpv3gLXGsAWjNZiab79Ch9gZ9Yooej6o2nS5RXfn7aGA5ra",
  "key24": "3P75vLJqxKX49ZsMizuSyXRe9RuZ8J4moGBznTiq2FZRJV8ymyd3H7LSNAsfgfb8gknaBobUjSBVJcYtTbpFKqU1",
  "key25": "VVNVVK18kNnJ75pwvrny1YSeozX1ST7R5ZuPsAneKYuAy9wDRqafDtFc8MH6W1t3LGDLwjKqhJ1XSxUkzjpbU64",
  "key26": "5j7KG6nwSiEMDJmu5WdSe76hEbkiN1sUKCXMtNjyKZvFA8qjB9igDmnnMdb91FY7cW8z3Z6EFZT7s6zFSoutsv4Q",
  "key27": "2Nb1eCJuPf21ADDy3JEPhHZV8inEuJ5k8ahdYHvcHGTgsZZvSBKAfukCh1s3QXqXwn76es9HiPGwXbLPFEZQ6VEx",
  "key28": "5HXF8eKRraCRYtWUHFLM2KrY2eVFPogpFBTYKP6NFunTafHZbdbMUEkDCBaKoi6fDhyZdGZaSXaPSYH44bo4Rvio",
  "key29": "3pKwEe8Krr5c2jeUXYDzxLVZFcu4LYS8HzAbc5TjetrvM28zvjhCMbjH7uggfZhTgtBmnUwbF7AvwJCS8QpW3mva",
  "key30": "TPHympQov3pXvnsR7eduivPWZTQGBX1FZ6UJbn7xnYuUJZteSHArwzdmuqEAtkUrrUvkydrw27Ub9YjmDfGubML",
  "key31": "T5VskoKxA9PQtEeLfBQ2xUoFMB44V9uSnqt4zZ46k7WoHcrCRF89ueB5cNVdF5EvrhnkwfHzLxkc5MXopRqGByx",
  "key32": "4RamRqjThMAAJ9BnwSQnPMvtobyCUGR4cRMS5fDFj3dh3sMsrwvEfDmfBVUdvQDAALv7yrxKCeJSCC3Ck8z5GTZ2",
  "key33": "4nYDjtFCDq2135YXpdHhC1F1DvxkBRWQMdmuMBdNzoBThMhEjexeZRk8RQxkMY9pkffwpGxnHTaiKYcz1TcmY9CN",
  "key34": "5Cvaf9W6zHSYoM24pwdyN4vLrtTqgkCVZnproMCHXycpcX2JbRCBUNCDvA19eEreypoLMRL57eUtKmWkiXS32xQ8",
  "key35": "5tWasbddDxR4h8xi9RbsC9t83kzNUp5EuKykRqMqwz5yYWkgV7K31zVfed6puUbo2GuLqJ5H7XYmwYPbx8v31PJc",
  "key36": "4aV9Hwgkj15JdBuoncRcBfV2D1ppP53sSGoB9QmfRE8cwPqJEyovTMKptU2FdGCfPHf8du67A86dyxW4Yns8W9nE",
  "key37": "5gBDR1k33NSCwamtPeFhXFLNTDik4TEvorvtVHDLMAab3KAun5WK7dRpdbKeBggFQDC16xYyePbbNo5w3XA21Qyr",
  "key38": "2SVF4HkQDfiMHH4yFfqrAoYVhazPrgFsXRH5bZMCnaTdsg7CyhZJ6NK8BikpXuNogdLx26AgN7iRzuYt18W2urnB",
  "key39": "61oALLzMdmBTe219wCHRYQBEc1FgonRuzEf9AZT8NXUTF15WgRhPagHqZjz6C39VGRo2iYDKPj8UcowQQ7Zvnws9",
  "key40": "rcrdqKY9LoQg82ZdseN7mTFPjuJ9u3QNUJdSeSYkr1jZszfHH5jBTzQxsdZhRDba78s2XbmAX5gj7CXcLx679K6"
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
