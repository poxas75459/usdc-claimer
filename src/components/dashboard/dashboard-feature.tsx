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
    "4EwoGT8Vw6yBDuA8P64fMjJgPNjufSb4n39Kub2crGhD6PA5qQtQ1mBbvtiVQJYdcZ8ENtpriTfkG2ZTmAF7zw6R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22qJwfuHn6CqVmWNWridx8cCdMr38izfbu6UuS3ZcafW3vDdrp94rEeY9DBq5vsidt3Mrasrvhpo4dv6TxnhTbCm",
  "key1": "4yxHweQe4HFbQJguYzxHSZkbJuwAALHBLP9Jx96gRPyvnToG6fM4Fh5jF9dcmUgtW4FyPBiHu88hxzwVHBLw3Avi",
  "key2": "65x64dSqprLMPozaCv1UpJMX7Fp62JmwsAfnJd3RSwaf8n2hSeZ3QahuWmMsMDtmtSaUmyU4vaMJjCKtoarorRyq",
  "key3": "28svyrthyPyRaFNfAzNbQMPF4ABXCsVhQ6cYoCUB1hUFhcZUnjV6Hg9uYQzTj7zmHFNWxSaDsV4jEPt6sCEJ1o6Z",
  "key4": "4TZ8174xzCvqyMUba2oLekw2rX9UPt5REo4ScZ966NuQXwWwvrH8W52FknPnitGZwp8Afx42Qrtc31UqEvVBLgrz",
  "key5": "59qEahLSC5ekXJLqm6dZjec3GpaRNmqCZUyUSHBKUt6dTaZ8aRAsAufPwu97yMRP4oyBMDeTCDkHpgw78Rgpndre",
  "key6": "4TkabwobfEzq3pLT275xfwEEWreZUCxW88oPQrEHNYuT5VeWvpyXB6VE968XpZE7faSoD3fLRQfibC6DQPyBDw7L",
  "key7": "2cjUNiuLSL5nxotCq3BqLKtJDMrZWNZf77JUJq8Xi8nysLUsanYQRfRXpvUqyudybAx4ghg27SmRfXN5Y4Dq9VQE",
  "key8": "5CaArYM3oKHqF4kmyD98g1gQPY6GN3LJXF2Ldghh2LPe9riKzEqmyBqrXLmtyQZk2c7P9PUkPhCygqWVxFGXa4ub",
  "key9": "3uEfkgU8HP8Ui8sSkiV7LWucLpqYP9oEYMELAL35PfMDyF7hbxJJDjsh4F8uSrFh5S6yoUj1YyGvDbJPbGwx64oZ",
  "key10": "4h77yCtLtQq5ZqMd6fr19NbYkndtYFNjgULz3Ce2c7BSTtUDt66GQVpA1z1G8dvxxJo4JiGXX3BgkCurH5UNakC4",
  "key11": "5GrvpVc15Ep1mWWAERxbE99AXY3jE26BZb9XrgRTAV4QKPNQg1pP6Qi98SiDYRkSgWAK74dJLb6qW8CiE6vnE9ec",
  "key12": "3wpPVDhAijgWm6cttDgEie6cY1U27Mje7afxz4HMzLX6YWdioW9fXtrEeZbyg46eZAZ1DG5jCGvywsoRvZ6Whg6m",
  "key13": "61kWQyyqPPGTqz37sZWvYFVuq5zEgMLd89NAUANL3r4KZNi2Frb4pQccszq8vvom8BjmjvH43jkb71gkrNXkMTYc",
  "key14": "2CAKg7gphD3C2sGeuC82a5LbGss1WzXwsqGrahZYusP4HvZyG4SZ3A4pHFEGvJbahxwm2tHiTKSj35x4aEfsTXyM",
  "key15": "4aMspgesYBqwTLvbJzQ1dNRNqS1c3MFR2mXihecGnpDXRDB1dN6oASyEQa4jAHy462KwEymQksstvUtXuYiUeEYD",
  "key16": "28ZDy1nYJKT194T67VGXmAqYrqeDQTsobGtZzQrLJUhGCQtGB9iEAnL63GavtUJys4xhP1xiZsJKsjndMNccELCc",
  "key17": "4AHuHfLWircPu1aG4UufftwU1fcAVsGudCRHMqMuQJi34ghdBKeVFcowhMxhmjVN59SiikZee9GgiHjgFumm6rvy",
  "key18": "3jqQpKM7s66Tgk96vcYYGm6okcsR4iFK5KGANKd12RaeFdWRxRyWQmZyPaLeJTdgufiXjerGsLpELx5JCAMZw66V",
  "key19": "XfydHcpp7uxFDTjQ5Xktj38BzYxZUZ8ywdtpV2z9cBF8vhF4749RrjhZ67fQcWGVMagVaCYJFe3GEpM3iiyGdRg",
  "key20": "M65p1vR3gowaUTvzuHSCVrUsXkap3uYz9da2NBi8FG8FHr1ZWmVB9VFbV24sN3c3bMpV4ZfZicXEjWcvizKRFwK",
  "key21": "34oaceirRF2TdtxrRVriy4wyL7n5X5dX9LivK9MSzqHh1PJZtDrL5W1sL6m859SWDeyiAnPM4xqeMCBV2CZu6ZKN",
  "key22": "5r3jUzroTtVxLdRWvWP7UsnN1dqkxNgjgZPe2wcSig7AriK7j8ysXTejpCFR9TM4c98AoCXhiiGgGK6vgqEgJR57",
  "key23": "2NNHRvGFg5Cw1wfmn2jN4MJLNfvAH2231M7KUM9bYtNRRUj6shZRfykJFWaecApjGTxa1brcevrdvjabxkn5usdt",
  "key24": "61uRYwUqsmBwtfnwinzZvno2Z6Zm3yFrigsbWr6TiSY5YmNWrASFzCRv11cFVn5upCrcN6wDPFRkuUZ2wt5iM4BX",
  "key25": "3hU1W4dgAW5Y8Be1Q7FNRdrXUWWfN4kMzWu8NB2jJfvXW37ceBJ9BeBS6t9enpVo3BDmBzkdAXLXTJxAhRWY23Ug",
  "key26": "65yhWE384xhnQDtx1dN4j3EYhPrCGHHiPsWRG9Q42e5tGMh6UaD6V9QDDMjKGYpTzL5ePFAnuzbQKapbY5oy2L2T"
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
