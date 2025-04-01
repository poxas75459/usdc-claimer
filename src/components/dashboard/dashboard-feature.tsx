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
    "314U3Qw2fKkY7x3iHeSEn21NxyVqsFvyQeUu3PBRbubTs11SXNcG5H9oA43xs7FMZ7679H5k6Gqqruag1asSqZr7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kzfLqXa5j1NEHsM8TtaPtXcdnHmThNqvCbzWhrtK39jxzps52rsTmZvKdo3xza94wPWnuLZCGkyteF7jVPWB2aF",
  "key1": "5w8tgrrMqdDxoq6qEMGqFPj8HUtZnpR5knN4dYosdZ53566F1MwqCMgjfRscsBqZVr7PDb3WAd7Gze8HLM3rUpGf",
  "key2": "2idM6y9LzBdnYgwfu2x5BS24dkPS38qj7TA7tLcXUgTJebkJY7k29aZQkmTaAn4WMSsoF3YcQVfw8MgqmfCC8oBJ",
  "key3": "29CRqSLyN56cKmfA7JcCiaFBDcqWBSueaAo53obTCasMexpfwJLjeHyShn77ncaN5H5XwWvod9LamtRt3vYtDtC8",
  "key4": "4cN2UVoAjk2RcFNBx3wHE222TijmCHZjhebkc1h4BLibGaW2htve6VF24RC3VXitgLQUHyhRMgAReckUtTapuDET",
  "key5": "2iwW4eQwX5qtWHbFfKkC13rWDzJa22hEx5EgkrZJs6UZky8hrbbnFxSJ5sfiT4mt5pfwcHzb25gT2f7JLwswJurN",
  "key6": "4GHdNg3HQM9HmGNnZCawF1MYWS76fq8gqezEDzNEcBPrdibkrRu1Dha5CyrP4umeobzSZyPpt271MfDHF8DXEEt7",
  "key7": "GzTjv9Paa8Dgn6hYS6t2CWTUXBjFPy8h9axToe5nYdHiVF6yyhDFr6uwULbNm7kWXE5gLpxcp6K54XQ7Vn1RRWi",
  "key8": "4w7qRphYENcifqYh44RdorSkQWGBYNGsZNDa932VWPNKKTF4GFXeiPA9hgFZ5qf6CrVwAjawVTVhrkVdrLpAnY79",
  "key9": "yk7KNuZeDDDXw1hVFmbMcqa8H8CHq7gUAU7NtCjcqz8qTMPeufjeJwGFQdefvrHuRPJQscQ2qYhRpzoVWpvp8of",
  "key10": "3TxdJDADNgcf1JNKHUQMgPMjugNjvPuDhPyEohC9vMkjdAk6kmXQ1SUubyVEodQQaVEKwZTbAx7Sq8mor7ihWNoe",
  "key11": "23GNmTwdDrcr5ki3xPxWGJJ4VfkTNgTHzagBhLzAaM3RWMXcb5dvuTZdcbh9rFtQ2UksaXL7xzJSnFMXC96G7kKj",
  "key12": "3w9si9TKmmshvrvsYihr4CDff9497KCMjiyqBqDHZQxxWS4GcqCjD8Yj1h5sjvG1XphDXcH22ExiuGrUNJMNigdM",
  "key13": "581nyLmShfvhGqYpUqJJizCNjFDXaHytHyam2it8cwkVTweHXkfYXXy7bsrzHH1VmtrvDmKKjzdw7anJvFrdRBHh",
  "key14": "2KPhhVvygE3g9V1AhhnP7v42aLUzKbPgoDYMGKiYKPNqL1pV3q5Tfnoaw6X9vr3Y5aHFdvWMHa7zKdD2eaUqXijX",
  "key15": "HeZn56HBv1uMGnXjPHBFErvXyrhPg1Z5CAbLkQ5g9TXnFRtC61szPifyyrKGp2r6oSEQLKiNvJsBKpSZ9715Y5h",
  "key16": "GsesgNURhrqYKnCgXmR1r8uV6xv5U8JNCG5AvsQqYApW4gPwV6dPgYyztFbZXHTKmJqNYX5ed8TJUD6QEQj6XWD",
  "key17": "5heVzut1XLrdW6ZuevkppRgVaRUsu6MAXUDPG1naXNrVDQtd6o5rVc9udfJMV8h5Ks8gr8aNVhjjs8RM68KkcWTv",
  "key18": "2VQybfpdGDSAw9c9DuHEgkQ8pdThKWWXwDZdsM8isdQ58WZ9banPJxUVjXvyJQySMgJXmypuzsEvzTWdu2JGiF6G",
  "key19": "YpuN91xudH3wW36f2jzFd2x9LZQXJcf98pUKjM58Mhjfkop7nbPGShGcFM9uLY8HdGDkg4wAckLSFQ1RHP2QdR9",
  "key20": "5DkqSZZgQb1VWWX3BmM1HCSCQqxgULmgSUyFffECfH7kaghmPsn3NcnxtzPys6HDfadBNCasbgC7SxqM5q4p2NiB",
  "key21": "2YbEE3wc29AMoa4SoEQbMAMWmHMzZQr1VNRS6HLSY32NFp4DEdLpv6wKqvyu1ggi3M4nBTyA7aqgqr8JibL7upnJ",
  "key22": "64ZQHgHzfm8ViBUS3DQt7U2cGGBRYR6KK8f7qKV1GQpHvsYd9w6MLziWJyeThvhGxytFRwdcS9mD8oLt3DVRknUL",
  "key23": "5CE2TmMoriFkcxcQnPAdoChgFnGAK8CAiDYLNBdmrTH4eXVxUFqndaJNKqApkcFwcu8ZRbYmDfnZQGPc7P2ryDy9",
  "key24": "4N9yqRhzXjHxNLYnmfhtYYB76zKkpgu6vkXXgji7ZF1q3cn2iebrr2yNQEBzUDwxndSvZuhpCtoCNLmLNQtGxXkH",
  "key25": "5kEuYvjRMDuZvCcWGmQoNyinfkwpp5o96shBc5ZRwkmoFvFrTP6Ha8B6HfrYgb7xWUqLAq12gAcQhYknmSESXWPD",
  "key26": "3CWj9DCEQXcbzD8ccz6n8rv5Reo3pxYyZHMi6dgdWu3smPsqfQeKeKnRn6GCVQCMoMAoGL7kDDU6t3p6vzbvKoJs",
  "key27": "2QZAB8RKTBaTyNCYoBhZNRMwCX53BK3S4VZYrtTuBEcja98V7msG74kLsgZFg2CdaCbenmBew2Yrp9kRzTUfsu54",
  "key28": "YKAPD2TayEXSjAJmPMeDAAaPXioXVRrcEKzNSnVbSEhYhVos6y4x3GPnGLGwCra6MZvbk8YhDEciFjREPvQk3rQ",
  "key29": "3R5pKAkxi1FYEGmDFejdQUvDLe1it5iiPrW9gXHZpTgKbxnJGQAFvWcMqYCTk7djKizY2eUExVaXjRUzVQfeqDBv",
  "key30": "FqXfbd7W5xVNybqmmpiaVsiXxhKtm5VQwxcWn8sgJiHVh7yximgW9fEWnLGEtuHuhb46N3vMQFn4wULLtNmmB1e",
  "key31": "3khosAvw7MZa8Ac4YeAw58mtP4LwoGsebUzRkhZKiiyTYAKv3w1sxrK7FaevRcww9Mb4RLzRYqWc5CnG94urM7zA",
  "key32": "2w4x7KV1iVJJHFzpwXg4vzni5kgiUkU7jqP6XApYTpUezfAayBtHyjDsJmH5ertjvb1hkZtgdqjvKJnCzdund31r"
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
