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
    "Q4eXZuM3wEaK42DTqo8Q2vsFVvCjorUSJx6aNfEVDigrVMXCvEPDAgF9Y97iLAeZhZRntz4wDxPQpc4XSFt2k2g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MByh52m1FtTaLc4WcN93yij7HbheWsF3QSUUndfuGgkHWXdjW67wbQ7A8ifZJqZH941NkiyHMPz5C3rNg3367Lc",
  "key1": "4UUbGYnr7g9tUabHPuRj2m7yt2bsmCEEh88r4WBPfhQVajuVZy5yQyzoTs7xbkNf4mBkyhRrpH8ievjwUqXGyPhy",
  "key2": "2NwCwZt54QD5hCCDnNwyPQhRsWKvkTjqpLoFecDtVhensprZKtvarpMCMWrBsHgDM9qPTsxEmMK51EDmZSMwegWX",
  "key3": "3K8toTKf1tbREB16kFVqpd49m52tbTD4t8xJtwTYsbofVaSBd9mj365qH2w7u1v8DEWc6C47v7v41mSjo2pCeYeZ",
  "key4": "5dUhiAR18ysiyii16TP75tp4E7YRKg4vKz6iz2D8sYKA2nEmr4WwSzND4NEmHqG2oJ4gM7c4EhhgyTasrdHxfftB",
  "key5": "2h6ogLrPNzCzHewhHU7vPD8E2fSfnmm5Y3mqBMrkouhBeDrnQzajfRykFoR32gZGGq8UChDGJJ1aa7mwYesVBY4T",
  "key6": "4jZd3GJTL7vUj1ob8MusAsDWXgDE64P5U59jk8nZV1yrwPa6yYcQuW9iJ9AXPdC29hPRL43HAMMSDtQBTVWQQB94",
  "key7": "PLWjPSLcr3Bqik3P7WNfQJ7fTNRkYwvCFjuJtWLWkVYSugREkmbVh19LRPZapwvhtFL4rUtkN9YjzzygKnF1Gg5",
  "key8": "5ewW8zoaTcEBXgxVaZnAvmdU9Fbd7KsC3qp4bG616E5yferKnbkkNrvGJWPxQDWAh6Qat9H54fw2ehiTL2xznDo6",
  "key9": "23qvSGbMZT836BHEaYVoaZmAspyKeXnQe5Cfwu62L7r627RBE8wYR5Gip5w1oyPyxJTwxDk4fgWqygXgm3F9MQ1r",
  "key10": "YthN1Xwwi7hZwuo8CriUnQkbMCDz3r6SHC2frFNLySE1zyQRyTSF3SXgi3gTjqfakCatxR7Xvdbd8bwzgxMC3dm",
  "key11": "wXSgWWLiW7cdxY92PZVXgswgwcJ6VbCL27gvwuT3yMjtVX69nnsQCdVyrArZfQfycjiFADv9ebdQB5NyYoyKPp3",
  "key12": "5gFnezpGUtE34GKhtWirdJHZSk5P2F4mw3SvUyz87iEMHCjWGGVFk2B9SfpE73HkxtryVUcM2iwhaHJC7MDpGyto",
  "key13": "4LBmHAhEpdzQ5VPAkyLaBnCmMiYbCwZPQcyQk3Yqdu3Fqwt61443TyusSgnsRssZA77nEgqVioHVeeF7P6VnXuq7",
  "key14": "3SzabFaTrf75i7y5uUakYgknrUoKLY5XYWQFzpCup9yojCeTfq8WRNeccfxyNdmaZhE2AVGAuKMmCAsz5TyNRWja",
  "key15": "4fF7o6Hgy9TsfyqUajpM2M2BUzavXssVoDFWtBWZCCU4oe48dZbsTr71hxXwxNDZQMJWhVgEYHTvCdZLCc5yXbjB",
  "key16": "3K8mMzrrvbJLfD3ENhnBSZiioLRRnfurSmdcWTUAodNjPxSGCtFoMk1jRp1M1YcJEcBzqZAhUAgHpfNpbwfXH89k",
  "key17": "4byRnGxpiB4F1PBVMSKcGgU7cQ4vGyk5UAYWGNKoBFRSkzJ818cydkB3TPhD9rWhYnDcanuBanAJ7CYS7nNpkny1",
  "key18": "4sJjVtV16cuDNFwaNVDo1abqdJinAQQ3F3o6d6DQGqEgQNuMyEGtG3CotJtLnsefEcQqSBvjqHWUf9DV4ui8jdNk",
  "key19": "n9BzKZqGbYtWB6UqpYcinjT6iQqsXz5oF9Ai7EjeobQHuy8xoCCVso2wjjjmqLKJpkjRSv6zgxEqDUwUmzUfQbf",
  "key20": "3gDEGPEVbQkCsp8Z87wpvwzbkrhPfXsNkG43wbnZvRAqBRLwCAx1DZiNJ1hF49psWJuDMPKea1h2Hi5TxTu5GtQi",
  "key21": "3thfuzipo4qid1Em9XtZAB1JmA2ZDuq4sNoKKCNSSHVa7q7KDfkkG7gbSPR2ZxS99UzCg2bYo8gc6bsnQScTZge1",
  "key22": "3tzAYRxE3ADvx7KgoVBXqomoys1kc95sWJfjYKZkjcHmfzswNXcmKweamcY8ALVCDYDASg7JQSQ8h1oe2jG6s5Nc",
  "key23": "2vPHKYrUKoZimxPZFQhvJyPWiF5y79krLZ6Td2eLg2MhAkAG8GGv4pN8UsZc7TjPjkrpGfMMqEvEBLux8HJEDBm2",
  "key24": "5MrzFPjUhyUwRBuWj2a5YDNh5VVJqZtDFAXgXqSmTHFXTx3XxvSgpkenwvsa4MuAeCaYy9xk74xN4ALAsX888URe",
  "key25": "2z5w2N1igKqhcTsBMvPYiS7wax7yvC2vNKtnUdNDSJJ9FMvFdr4k5HFYe2qFxN9ZuTqigXxZh5d5J3XXpk5HafRH",
  "key26": "2rDrZqwdjHhJcitAaS6dBQBmVuQr2VLaRwZrwxKLeFN8p4VHwezrFh6dsEoLt73JnxjReSEpqvZaPbcr29gG14RJ",
  "key27": "2RaV5MPqd71Qxro5iyxd1JXqbKHDaD79oiNqnBBjBHveVBohvxpAiGpzedeuogT31gYyNeSdPV77td2T8pMf56RD",
  "key28": "4LkjbadWWKqrkxNXM6HTeZR8WagJLsuk5SqForB7WshfGpXuvxQi2rCN2ymSAhg5544Aie5ozZiZD8rMfSsGWdjv",
  "key29": "5wdCSYcrykAR9USeyzbnXSekoFEjMXAXVd8wgm6Z2DL5d8pzSxgxYZc9sLpaNqxQ5ihXiiCqpJ6WF7nKz8kd9mEz",
  "key30": "W1kHaBNn21aV4BU78btPaG18sR2q5yRwhGYw84SArTwiyXkpGXMCZvMopufs1AYJb94moHV37NjMhco6a3pBpr1",
  "key31": "3LvT8uXEXbEgFYttuJgTDnB9RX2joPBgg45cLDhydZEuY8QT14jAmDZjubwicPrvyy6Se33GJzhDkPhTsJS8ouRQ",
  "key32": "2QCDXVFSNUAGno2AY67ukrabRfp8fD16w6U7hb4nLoDvC9yHVVSNgY84HTVngfrnAQrS4TfLui3mHHjQ8rrz182N",
  "key33": "2n2m8Ewrr5CdMYm7otWSvLVKnVaFBHymbLBofn8ex2qbgs4erfmkaR2VbmwGejrJ2FNHCQEbSrd5zntEq7W7esxt",
  "key34": "5u3We28jBDQuHJUfbLt2QZwrBjyk2ttkjBXaLJt3bL3SWUCWReL8Vm6ccmE2HUzni4c5ZHTHwsovHXGDhL5GdNKp",
  "key35": "2fvxC4wCCNgYJnaZHabaNmknhQb4Z9gsjtpnHLsSSaQ9RHPy9936YnqrtQNtpJ6SEqM8sV3TQxcHPVEm7esuxixE"
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
