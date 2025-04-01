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
    "5Voi1P17PVPTaUgzdN9y9jUFfyqB2QswvxvsqBCSk7t51Fk3tuBXqWGEWyUzWiVktQG7GNL1T67cTshtmijZ3eY9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NBPznmheRXA3Xssez6rGtHsKSevkPk5dbXTSCb8CeAMAq3krCDiVCgynQR1yN2JamrpSD9NZJmos9jnYkLUSFtr",
  "key1": "mYDSDZ1vBrpLQF3gfDbyYzjs5dzvs2pf77FdwVc8mCvY2a5piiyzgZ51vTqcdXSNMWYc3t7n2GU3hQS9zHTxuuE",
  "key2": "3FQDEo5WdTXoCJBVRV89f8VHSyP1M2JZdjDNBo6y5qX2XBky5Hf6UwnAsXiffs1BPX6G6fhRc3er9YzN2deNSVjb",
  "key3": "2HJLcoCKzmuHjBnS1v6xjD531VgnDauSzgiPciDTUNAGiiYkgpCcUgdnz3EPLVq3ghwdGHxumEaRcybXuzALh9uU",
  "key4": "3xYpVuhYohwtLAuWkQoVyYGYMQtDf2e7KjBUg8ghpYm46RFHss7YGLsxnj558xu9BAvbk7BWwTtcFYvCkvAAcr89",
  "key5": "2z8HNgPJk7zM2EV6FNKP7y9FXGeiFDecunvCBXPjivn85u9VFh5uW4hdwRgU1mnSaMojQsJbXfcgcsEHbWjnmjNH",
  "key6": "5VjUs8xtvi3F4WrCGMHo9LcaqvBpUmEH1cnonK3miTSZ8z3t5NxdA4E6WYF1w2bZkEgsWLjCrMaauTUM6pRqZKEE",
  "key7": "3JQ8rtmm3APrrGjyfMBqyYuGNQJGTuhAqx5PgfC1de8nwfzu1nPZ1U9vommLZ8Cird58qv4YLkRpcXJWwbvEkgxA",
  "key8": "2AQTfcTa4vH5GTvtqGWmz2A4sT6JT8ystbXqmb5M2aGgKxJQiBpEqaRVdU5a6wy2VSfu2sUpaWd6dZCo1K6GStwN",
  "key9": "4gGYFo8MC1Aw1xWHzLCMW1iyXUgBBEfV4g6x7Z9uAHWkG6cucjvUjPJiyz8rcGKKBsYj6so9YzFrjsAPsZAUEwwx",
  "key10": "3pTuJAGXoC3gnuG6TQfA3zkkStNJo8SK87N3MttTYUVAjjCu9yg13tkA9PNvdAD99czgbFr6s25i3SMYBShJcZit",
  "key11": "3G4hXp2Jz3Bd8c3xjh69zBsuPk3JGarAuK5tgWAguMdTJpdTZAkvYaF8sZ4nrMj37Vuk5TPS7aDCRFZaJGGj6Rr8",
  "key12": "3Uy4HcEm5qhh3KgngSYozsnzVqoLxdreT6N71JnwriSiVRPoE1sce3jmCKDhLvFNAVXvzCMqMQiV6uoY5csYrha5",
  "key13": "352sRZ5PPkPfRdGGYtpa3fzFD2zJvuen84ddMfqKx4agZiRHY2pQRMHfLgw1pbVkDQPkw9YZV5rys5vgSmp6CK4e",
  "key14": "5nBq9njktnxcDVYFEPrEKGX4XhQpY2ea3gHFTkLWV3oJxds4EeSHmtASRF8aX9VmPCXuaMUzoH8Jbdiz54zUE3DW",
  "key15": "coX7G3oT16XMmjanA5mXkw5P9tTHCp3VK8vNiHiCkhHwZQf3yhW2PcBSRDJjEJ5EweSpkeXoTQMfNDbPpwwobkM",
  "key16": "3P1APcotKMgsJDcEyCCEhkJ3SpE4kaNrb9joYwTRx8VbYTGqNEoz8GfqnAZWUVQrMhBLAJ5eV4qWLraczBYepui4",
  "key17": "5sCbTUhDjS1n7m5VXJBHFUEm8cfnYJmgAXDwz7beZi5nAGztcCZQ2EUhFAvHYk7njN8iFjt9ub3Qh1hGqgx7NtDd",
  "key18": "4JvJstFpW1ixenxM8PQWRLunnJwEspX95HnNATjxyUcVKQHGn8cxmZcXDWphEhR4Cmq76zge35CBDEmvcHuCuD8d",
  "key19": "2kCF68x8FizunJs1BLuhFgFZXzZvVZodhetuM8J5ytq5JhRANipZRkkE5o1Vhydv9y2wJ6PECq9c5T5mZ7jATZ1k",
  "key20": "2JQ2iEwrqSP6j4naUex8uehCmJesPZMBVqxur8iGrabxAEEvbYs7hER6SHPsN39yVCZ36LiG6avCDMG28E6k2CZf",
  "key21": "478yhgemmUqJpdpMs5H8zBf7xz4k73ctbe2L8EpHKcv1E5FCxvJkWgxUPyj8dJ2fJ1jztHqD9DAZProRGP6BCRLf",
  "key22": "3sZX6BjmYuB86djAJcTFjRSoK5WmF37KeWaQ84YhnS5mLRynonobYVg2vZjoJTEzR69hEmqBmYRFcckEY68zTf6x",
  "key23": "mC9szL5gJwiUQtYkwHdcWfpaa1xE6bfyMt9dBLERLbkM3Lcrmbgg6YvxCu3x3Qk5uiTySZRcn6tM4qbUB3MriSY",
  "key24": "5qgTKcfw9qwQVMjE6Tm691KuFMyAH9cS8jS8XJGkhaFzTMZFizEiaKRadqCM6xMGhhTJ65mtgn1Ead8DdotVzufJ",
  "key25": "5vdMcUGeMZkjcATHQyRACFEAv9bcvxQ6YsVpFwYkNKPcaNb4RFXMHR8mEuUa7dYf8Lakt2MgkqbEqu9NS5nDukzG",
  "key26": "cEWSVNf2Q9M2jCJ3XQ2pkX9jBP2Vcnt7LfCCp9twBMWGpAp7DcYTXoia31xxLA9sFrtffiRKk2kdd1u3xvLtExr",
  "key27": "gaE9NMuPkv3nXoSU8mAghpRkKEfGEkxyxTfdqXsJdtvEdktYBb1DNsQNiAwWTrZyhZ5JvomCftbsm5zwsu3R3Gw",
  "key28": "5jkrGXHegrvd8peDLenMTrsQrKwTFgDYHu19WrhBwE19rDcNLVzrCwdQbR4oUELfRe2vTtXEVpd5Qcd8GmAfL75w"
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
