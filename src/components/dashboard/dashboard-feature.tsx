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
    "4MoDAo49djwmWGHvLvCeWCELBDqAMzrJNxgBtPD76nJfyzd28FoJdyUqUCwHwZ3aWotZzTxyChT5cnAL5cEH6dWr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CoroTN8gv37qdUbsXePszrzb64ru57csv3hSC3PpwzyeSjpn1NhUu9JeCa2uw8tuXgsRQNN7DoZNJ1bqCjiMrTZ",
  "key1": "5ZnDqZP5ASsTGT94cQLo2Qtm7uTLQN7ZxR4gNn3huU3U4jPXQ2q2MS7He3nF3mKTxUJY4xqwgxBWYHatzHyBDpkU",
  "key2": "5rof4JpYvcQzMJf4wKHU3UCY26mo856xXtdByqKK6V5S8Aeguq8Zp6hYAYWkppWeAqeqZBf2mZoRG9iD3VXyWtLS",
  "key3": "WB5DoJB5WgSqiEdmotN4LadoWqTrAAmWA7tjZppr58j2Rn1XGJah7BbogsPRh3NtSvsmCEP6iC7GsRmuTTepBtF",
  "key4": "4skWDicfvVhzvScndBMCzbnYc2ViHmtBfRRySELAksLRxw1UcFfig6mbjs4tg4y6qh6sY2mGUHFf7QfArKNe4dwp",
  "key5": "4vFHXizbDAZVVk1wPczpGFc7QgcMvqmntfCES7e5kmon1NA3SQXtQ3x8PHG5qgmG3GA6MJC6AYsMMjMfBMqL4MW7",
  "key6": "4JfuzTkmT4tdBXJa69vTPt87KhYXwLWNpVvhW8vw5Wz18zovff7br1E9nhxuZia44xZtaZeCVZX6G1x6iV5LCksA",
  "key7": "4kwsc5Tohejmwgnat2QLSBkBiqAyWCbyeUjpU5d7Q7MgfW5T8tW5VnqXq8K1Gs9pUe1cN5Y59gTPoUzDgh4YqnMQ",
  "key8": "4XhDKxmjKSzcoGfQMChNU3orTyxViktHhRGKYfsiFqqY8tVF9oSZkJxmzHiW2KUowcu8S5WUFjCC5xo2BYHdJ65H",
  "key9": "4P6vvLzYpKq41dYq1qbWPVPYnBtrzLPPtcchip6L2F2VVD9k3f6GLKeoiD3s6vj3vtF9mCLWpyVQFcHTNU96b8SQ",
  "key10": "28Wadz5bPeta9A54SV7r16ixQnPnJHEM6YKEB3HnePG4XgCcHvLVEH1rKqu238yofB7mKasBmRgFZ8ioeEX2M9Pz",
  "key11": "4atvW6wQ7856mCe9L2QVHGY8Xi3ztbhj7gXCfsX9MXhSSLbHd1CbFB2UfEYHdwCPdeoDzczAsqZjKQwB3PF7qMCp",
  "key12": "fwNDE87MQRW62QHNnJs91AwnzhhoygdVdfFd8wgde3bpavhbHe6pLt4cuXdNNtdJ8KbMWViqgM2V2Yy9CuSCUje",
  "key13": "2jG2XPm9ap8jXP7ovNMm69361dMLqevZRSwB4f3KqSqm1RHy949VG7f9BzhFXj4yj793T5rgjqD8uetAjXvQJega",
  "key14": "EGhBbYfEXvARC825UZsSqD4UNyy4XVyvhqDW6gg1q4jzmjiX6AW71DKAQEPC4a4Tj4wKrGAHpoeUzz3hAo7hHMd",
  "key15": "qnRdsyHw6vzPuktrYygdKSiu4YB4SYvqfkbTRj2mngH7vYpKYr7TCKHxvjwjzkhRfaaAEDonnp2jSVAGXSkWV17",
  "key16": "3VbZ82bszXcTgASA4G1he3gmh1jRCWkKLk3tnuAXxUn7DGc8yLNNnSz8k1bSiPwfkKQdVpptb32DMajREendYNmy",
  "key17": "4xHrAiUMfoWSaFSskL7C26He5uSfTRNTyYKoDNsDTpbdd4xmcpPxntSBA6sZS3qKJQ65ynvsitBXaAFhLmy78tZU",
  "key18": "5GXEa1UgRhk3PzvC7jSTu7Xp9zKShSwuv1he9R54efU1HFntC46su39cDFBTxa5cUNRZNnYpCU9UGZNKwUSrJk3b",
  "key19": "5he93kmpHQKtGiJR2fCTRP8W3KEa2YDjY6bwMvMyXp1RRHRFMjc1NcvTd4R9z1eTfYX7kpYhiPt7sHgUp5KpeQH1",
  "key20": "2yZxTZX3gd4tp5DqmnbpxK77dwZq7PWVxEtM5HTGWfPx788ZDkyKoZ8wXr1fxRyiTUWcPqNjfBxALF99BqBkVLdr",
  "key21": "4KMB1vEKqKUz6p4tNpHAdz7UYD2f5KiQsMY9x8ty7BeXqKrCM75d3anguHuyLzPYeGTia71bzecmpvuJM1W6LvMk",
  "key22": "5dCMXHrvGgW546JJGWprFpm3Nc3ojfSQBV9r2WYcX2uTBtxxvtPYmnFjKsDdneNUWfxkXGzyYRV9svQ9hWHjBVth",
  "key23": "4e5rZA3ADhxJaEyBLjwojtcv7EaJfELAo3JeRwRGRu6poiEJBAfsnaYVZnu6oxSyqxm497nXJVUAqPcAaJSjfbmG",
  "key24": "2sD54rpU2h9oXeCT33WK9KMkvXaEx65QWFEURGg1b8BEBCmwZhWUWngG5cP4zxyFv62xE9BXmWusn9a9d39cPr9J",
  "key25": "3om25nCh87Pfa9yMf2s5wk8PeFvHL2MjsvccSG8JCj3op388iUM8fhnMEHG11NsXSJ3BQTWSJWRsWr8gd8BTcGuy",
  "key26": "3DLgNKtM1ivYFfJguqKyGQQ3xnKDLjM9eyvr7AZmgMmnynESVicxkqy9XWWeEeD4a9J7eYnPWGUqBFjTVLrDkjHB",
  "key27": "LtdY95fDAYkYYzubaen73hKgwAZeak5fuocCu2zVRy4t1AnNS5U1rBCYW4vJgh9fKhV1RyJSxcdRKUJmUbVMkgt",
  "key28": "5dfLtm863NrC16mdqJ5i2VrQ798ZLpNHVKoE7q9Q79z7DysMXmq1y4VzugqkesvftrFBFoNYqe6TmBegDpqaSR8M",
  "key29": "5ERMADjmuRARECMiP7GFzFvjsWWQ4eYM6DzUKy496cYeHX33AWKkv4XXbxJntF757N7Sdeavx3sCGXNHM7jrF1bd",
  "key30": "4A5Kq2HqgHvtaTo3xHGLFyBEfW5QjeUwkhmQqS1RUe9CksaRAgZTjA9L1KSrUi24EvK8LU5wyqcCcWq5BgonJzBo"
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
