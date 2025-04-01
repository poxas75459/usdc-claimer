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
    "38K39gTjGQwwvy53h8ExgUsK49nH8Pk2dr1HxbuJU9rx9QEq9cn5hksr8oZyM1DKZRKQWSEzgVBSd12oJDu1RYWt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "toTBnhUQFZc5tDZLMHcaLcT8pFBohTTQjtxTthros3SzjyVxLrddHLw7RfHwx76KM2ZNe5kmYA2D6fnab7p1QP3",
  "key1": "5fduGvBPqKqmD4Dp3wdZCALy1nS5WpuAq6DiZ5VHdMtncEqsDUFkEazwQsv5HYMJzvxqaQsLEP22eY3HL97NcHYo",
  "key2": "2291xd15Aivth1WjPNtUXv2VHGF38YxoNqk5R7Amnj2ztiqKfdPZBtyGHzrFatKzkpB6Cp57MjytJthLhmC5qgqx",
  "key3": "62FzoYDgCBp3xDn4W9CxoxZMfqjg9cuq2znsKJ5cdKLTWa5hJMjp8K6caiWHBYNp72RPGXZJrJ2YiGwMnrJBXgCi",
  "key4": "4sb9E9GukHKznSpUAKoQuH7SNKsNvHjcfV1QmGcEdK7v9mgtN4PovvF9UPbE4MMrVFtZpC442WLPAKDXbvLQep9d",
  "key5": "592UWoVKg7qdsVcpcRD7nF4NCpTMW1gxNVMZPQMHu9X7WGcjLJ6RC94ChfYnbofT8J35b6PcQKDCzN895UR6AGmu",
  "key6": "aH7UaCJQWPfYrjjSNkvjpzXw6mDWXJUiEhU7EJ2bQjt575bkjfEHwQRshgxh3gMzwUPG7nGtaj2xvT7jsjmo4N9",
  "key7": "3hP4P2xf4cuqBo8RqbADEmx76n55hN7NYVpWj3HFGX9oMjTAL8UoXzJm9jFbAxFCWz2wdBNKsgPwW47pTioSxZLP",
  "key8": "kTqLLqQhiqvAEyRdXnNnoLdn9ZzdZGMZJsCqeRX3gJPEX7ccxyMa1DFeYTCJQ6jErQ95zSaLVwsn6fPrjtU3jmC",
  "key9": "5kqF45zadZRzoThQ4WixQMrP7Zi5T7dVwp9VjDXQjKHdt7tbtJyY5N11935teucLZNbbst99czzU675wrsHHKcyg",
  "key10": "61ssdNzKDYf2marQXPLKArXjpKiX19zjoB5DiKkL1CsRhcZBxf4mAwdR1EXj27NLDrjycBuRywZ87J9iTVNsrN6k",
  "key11": "2GrGgQspRoc3nKE1RZoF16xg6w9tz9QLs1MrTo13MXa9F7u3cAnJcKXgsf8WSUpm7HL2A8Ftjo8w4CjvhAowyss6",
  "key12": "2HLpgZctgAQ7AWD9PncvadvfgH2Ti9p7AaGDZyrh2yn1YEaZTgCWt4iaDxSX8iMY6M6aX7rLseBW5RGRxF8o3TLp",
  "key13": "48wyQMEszySo21tFE92daLT8PHEofFqAJYw5JJ6G5LdgLaMqTS5zxJJqa4iQX32YvQcnsq4yRxBrGb8ESpWcMkxJ",
  "key14": "2QCqWbHNMB86m91XUz9k8eqhdNW6Xyf3VG3fvhUYL4x5twTxmu5VH998TP5gNWyEu9UtYhEN36NKJn3YdHmRKbXW",
  "key15": "59YKSZoywukguiDU1AXHhcpJF7zS9uNPoyMATVmfRDuTpnbeabaGFREJLsrYdUc38tyqT9KgHLZswgKdC8PCcyus",
  "key16": "3Pha8fPs4aGnrHzXRpxVNyjf6jq2dZYzunJTUVBiCsoZ4Q43cS2oyPyJfm6kg7ww1i1EX91gn6r9vVYXcA5zjqL4",
  "key17": "4dHAt9Bkd9suCvFxdyWAnm4aM4Md2XppHY76xbcvmgYA556z1qEJT5CjhjkyFdmRiqtoH7h9AT1EUMNtJZ7mb5Pf",
  "key18": "nqZZnTt9dgBeTZps5PGzvJXjbrTWtmTbNwKMf5b8M1m68PTrErzaTB3GixNMdo96VT8mx4XvBMTWFYiuzSDRxgu",
  "key19": "4WG1Gp315FxBgdXPdUG2FQG5CzJ4nBSpXeivZyjRXkyNms6L4gmwkDHPW9cf6X6cXkXNquy9Fu3F9SLHABtfaGyG",
  "key20": "i3o9FpuxBgyoZxyVzWgaGRFKR9ENgWvyS3HYveSuMTc8Anq8mtqaKV1Kp2Na9hhy1YP65hD3HYWZrE8cC8319dN",
  "key21": "pgWLZK6UqFZgt4Hq5RKRgZ2ZrSLkn823KBtFNuDm6etSm2ZRq5e8nhqdoG1pJcMm8AfsegtbEYKmJXpCWXB2Apt",
  "key22": "2q7q464TBhue2QVQX4H5nXF9FqY5zsUhiKMJeuq7wseMQAeZe5sK5nqWksTgLRo9Vzy8m8ukPXMsgc7fZiMsXybm",
  "key23": "4vXbdKXPYe8eF4PTTPg3QWUmZJ577f2UquQj6t9Mv6G5zXWCK9Y7VFtwWgSn6Bk26Ynzyg2BUwoWUzA6VpGR5ctk",
  "key24": "2KcVrsUwXsfghwEgueGeifvTx5K91mQfFgLrS7CHjEtGTTVVbWSFT6LNo6mKe3SjZ4tAmfSfgMoVzP2M1EadYRNn",
  "key25": "6zvC7htChVtj33u7SKxLqwuDzLAfDJBmQaAYbKhfybnvPP7CPBkeq25L6J9LyR6bt9yFmxECHWpWFNvuR2keGRP",
  "key26": "5B9nqBz2zvPB1FnERC8koryvVfBfNNEoXTeQZrw3wBQSjgChBqvMeoU3kYRGyrNSomuUtAXQNkXqBeWvKbJWF36z",
  "key27": "2qpTzeF7Utc7pZeU5463k342YgkRT2G6NeSW8Zyq1YcQZ1PjuRWYWemoZHzmPtQe3q9YJo35zGqrW1aMfdtntHjL",
  "key28": "4SfA24sj22k415ZJSxAtM5LEViTeC33pcws4Gb4WUYhyyhGsTSY7kGXPkM6sS7mssrQMazUGDAp5pKyX9Vwey23n",
  "key29": "31Fx3NjiNDCMr9nYcTxQFJaHgWdF374UQx8BNbASKMYNxu7WwC73Ey6HGi4ifaZVWvoeEMtHo5NuiH8b27cHpfe8",
  "key30": "2hrvawGhsgUmkQv7vqtUb1QCMkELxEdDuAm3E1UroTcofoQW9Wyx1MNrsMJtknHqiw28EvvfPy2X5siC3ToX3c2f",
  "key31": "4uRTKp38Cgs5PWXPWxNUAG42ZdZGY8TGTA5KzGXUS4J7j3wUQFaXzmMPBJc33N6MisbkGdBELCfmvmUHND23kA7w"
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
