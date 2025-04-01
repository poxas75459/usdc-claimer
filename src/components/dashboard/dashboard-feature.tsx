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
    "UrTuMeHxBSjVBbg6dHjKuSwYfQuduQJ2c37iB97Ybx6Lh4fJbCADg6VN9SGq6aGsjqWjysqKogQCGHBh2Sk8rT9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fCoKFCWHAQ7tiv62CyPdQw4figBvvMk67h1ftt7TFH45X4zu5YjcmAiqEfwFrV7mwFqdNuFagFfwn6WC3qr7znK",
  "key1": "5F8cRhzvAcojmQH9iYbXGK44Asbu89j7nzGXVSHvSfRnCdLNAS62SgsSD8UxHmon3wVUVWYGgertnRDT6NY8mDgn",
  "key2": "32HRFrCrE6MTLGTUi1gtCWLcSAaS3rpvH5CUCHZZrsTxdQSBbUbpq6oZwJgcwe8C8SBZhXdfHf9ZtJJwZwc4Joto",
  "key3": "3WZEFKVP7mG1LDnEPSvvNfRphkXFdZ4tbVFstm4HVG9h7CpEwmKPeL6Ubzt2PHaMmrpsoqQ3Yk4JwKiVBbrxv9GT",
  "key4": "2vATNRn7dL8ufcGEkc2jWgRw7E8A8fsjJZ2Gc5QA9zB6s7K14AgXF2BxCnQ4oeknJYgFva8gcKASi1QExfG3zsh9",
  "key5": "VRmJmi3Hp4iL81JrTbAzaBfjBh18qkuB7vf96C6F6zoKyRh8xzwkzZHvRbsZoUSKdL9NK5ivUG61ZchZz8qWM4r",
  "key6": "mhvkCuvtFfpGSaXsoFjbx1p9M2v8fiAYqdNawM1jkCHJG3ia6CQ4YDBD5H2W9zskBAMjmSgP2HGngLNDwJU88Qe",
  "key7": "5aYuvCzF4wuVrhHqHaZNtGLmq5VBa3869ZN7Z71irg1zAp6io5kq3YrcBbs6c3UUZRmeSAr9W1eqMt7QSa1cZi8x",
  "key8": "4YBJesezWU6imSqLwirAas7qR6qLKqSHH742UFJuovacqzfgHiUE6X6LcMPZF2GzMzgn5izVFyj2unnyNB9STaGe",
  "key9": "3Wrezb3jVSiXGGtUt5jqanJ8zpGRSmAg84QM9yv6se9rnuJTHktGSp26SfDSpp5hBndiNYWjMrzE8qT4Ce6KyiWh",
  "key10": "2JXm9VynC9mcrRzthKgZmB7LPLBZTms5y5eM1MHfEBnRc1UJV9JhqvFpCwbMLyn3GqN9DGFYmFz2zzgaDbkPofrG",
  "key11": "2NhJmXsCfn5JKRqwUYTJooQdRdscNsk45KhMLqbDAK3771bLXPHkMg2Ls4HmE6q7rL2RGCs7Ar5xE2KL9L3BdJF6",
  "key12": "5RCCmtf67gBdWYD17w4RjE2mbYpMNsQ6YUU4SeCApDuDSiiBFx7HgGii7a4StCkSWhwPUUKzPbeUXf5niCputvct",
  "key13": "31qcwsGVgvg85LfZUt8p4WECXhTMJNqdbP2KuVM9TX8DhqwaT11kTjcUPfN6SnbBFptByCybNGhMtUBhBrJJj4cs",
  "key14": "4zDQgbEVzvdesfLbo2n76oTEMGSS76PK2jkrKsd5Z68vDFdrDzthhWUXZwNSzTEyi9E3nQRm7VCxMaSx1xPBCo7u",
  "key15": "4bZMyohkUgqGh4AakNuoHxsS8XPD8V88NtUhN9Fsn8boKTN91vBxWteq9kWaDDFuyzxYHfDJav6JU7drrYMxPU6y",
  "key16": "2bb85sUWsLnnGakALKwtHWb9sx8eTxDZgwQTCDcaeELJ5z4CNAuECMcdJgH693R3vmL6Cxjionipk1BeJs2Z8eUf",
  "key17": "2TM2XK9rT4jxLMLcfGpUk3jxWb3Dw7EStRykFqxShQWAb7xFdu22U5ZisixPYAGR32RbNcmGGHo8uCP4As5dfe2Z",
  "key18": "4DadnUbm8j81YWg6eg9J3zFgT3uw2sEqoT4Zie8iSdTydDtaaNiaQYb9VbF3tdFE578HwkXfboXp1paWrpjiZP4T",
  "key19": "tLhsUeBuWYQaU62eRgS4tcs4MzTN6sKFe3GaLTUS3PXcv6KezRfDgCu3idtqVKsUFZtNrdR136ei8oihQ4UcFm5",
  "key20": "41dWLn96K3amGYUcZ62WWw9avAd3KYUYxRPa3CDVjYEc1P2iKLqwFV4qFG19zKEHiRKyYiGqU7VCq3Y9bMXz1SL5",
  "key21": "3uUPkpWoJrPm3kB7N91T996aTeh1KTkv2bCegKVjYgr7g7shMDAk3YRRCzbp9dtKmUZ8ixywK5KNifX9RdcjbcJb",
  "key22": "4CaL8z7cBd83wTBxmicq8CYkXwigCzfS788PEuYV5rBEEG1DjUwpqSfHMv7UA9y8sYaRJ2cw5hiYTLCjbYFrN4So",
  "key23": "2cbZdQFWH26F28YbyfPtUJi3AFjU9V3SM879kKRU5VirFnaweoBpCqSaVsQf2LVu1vBrfkXdW7wVrCJEGuM6tHAr",
  "key24": "48rMRdcsth1io4tU2U5SVPcq7QdVfThLFNTPYyV7Rc9MPK9kFBh1jD6gWAGCp8tALy313zbdu9oCR79uGMdih2QD",
  "key25": "562rH3mKFeTMf5tW9Buec3W5AyVXrJP5Mz6y8zE2sEYtcGEzyd4xc26DMPevbETeDF5nQppAWNG2uBSQvZAwT93R",
  "key26": "2shwMUfmSAUpTZJcyArW9Y1VvNmf2Jk9TaGoN1a6W2qQuiBFoFqGzGE5DfGFmkwKHMYhRNgAdAicRkifzydX6AXv",
  "key27": "5pKTTjjq7ZN9e7aBzJJMovo5D6hMAdApeR55LbRsHrH7ghfCHkH7hN3tjBsp3DsaiBoQH8G9Bea1y18iUqrSK2UX",
  "key28": "2nAHMxM36FwMKnzX5PWfCgoUpw5nFrUWZHSm7Wrx7dQqVGxUvKookPS5TviAGqwr6Qagmq39CoFLqoZTRWf4sySz",
  "key29": "3HUWPbGt73tmXvkhzpqtrmXk9zb5buwzdzncb78A6jAP9Zs7x38BRPcLibNRjGVqLYeEEbKeWrMdQtTeQXffSVon"
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
