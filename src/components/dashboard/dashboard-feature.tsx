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
    "5m5AegcnSVjRer5iDM3noUq2tjeqCmiwhrPSzkwvgrvGmbf4w3Z8Nvy79hTEwL7xsLrCjiNcEpGXW7gEBDXs9XQN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JRdpHdgUDnh3EjJSNXqSWATRQvoEVMD7JoMmHKjwfGDd51HQCZrqufqmWN11m6vWAT4BaQjqi2cm5BFeKfqpn3",
  "key1": "5K8fCcMsYWAN6F6feDPg4vyxxs14fi6nXFY2Nz9N3pLiQMbFN7h6bz16XtsBi8wKhV6NZ2GGgGfQy17EQSsEg2db",
  "key2": "KdCW5YxMi9bPmgU6XLy8SzBWAswriph6MKTDmMW4LdvNyRQYWwKhrLMLecJtijeQz2TRZJ1gejM565eD2D6ViGq",
  "key3": "uuH2EvpWj16H9XxTcZS34rHTC2V5DtqdT7AWMSa3V2khtsRqA5sAc6KGnSwDfKwmwT1BgnUj8GarW2HaBnX9MJW",
  "key4": "MkP1KunejPpNFeMfyV96EvGgdKQLeZpf4YHPYxdmqVPFgzfx6JKqU6t3QEhXLg5zvNQT6hTRiQCXWv5QzMFFJJy",
  "key5": "cwjEj5BBfEm77zxe2voWK2BFmQdKWecGtHHWxpXA8aZu6Kkk2G9rSRMspbvd1HbrrofGLn6QTzkzJcL4GCFm6Cv",
  "key6": "5a4MioLsVxmeZSZo95YuXvpozFbKSxs9iqmfzzYQWWk9HjsDEyM7Qju6wAhCCspw2uMYGdfwxShqGwTV5SVLCydZ",
  "key7": "i5An3sqhDoCQE183WDdvFaHPDVdBpB4mjLkXobr6iNqTuqggxDMDtJvDD6Nnx6WzcV7rJsa9z6WmSQxvPyUkC2K",
  "key8": "5sMm5GTSvR4keEmhQgd3g2KzvZHaUe1dWUfHaE28HcpEeMBpF5h3CAWW7u8mG3bo55RLMcBdx3HkA2FpwHQ7KY6Y",
  "key9": "3nzDLs3CeZJYrytbGJtPW9woSV8QnLp5CQTcM6YZYzobSKtCunPEAJM9WpidbTE6cbyNx55bFrAttME5d6PMvcb",
  "key10": "62VmLXQeWqhDz6DwmF3W7prHr1rqVeXSvZa6qGb9kWjWrTNdQ5jE2n6D6Sv59xwgZfjZKh58t2RBYfT6qb9mLEvh",
  "key11": "2bVhfEEkN8M8L6aY2HuEz7eHt9H7fGRmFkbJT6s3Dko1XgZvLyZ7hXS5QQK47sBnfbyM3EzMTQN6V9FMjrVwJQtA",
  "key12": "5ewptma8MLrxRCR1z6QZrhkBqr7zyjvqLZLUZ8Rj77jBYe1WacQ4kHmu5Gsp8VCbokYEdjUjwscXu9kDr7QxCR3D",
  "key13": "3g8mVu7tSYqRM5HdaTbpafxhBx26e3dMt7hnkK3qe3fHQkv1fEjY6e9k8En9oAWH6v2c9rsM7ieQjDzx4URDKkqU",
  "key14": "5Fe8C3MDA3MfteKrcgtkjK4Fty9yBB5pvMbna9QTVFcyv5229d9Ybj9CxVmy5Pktz5NHbHhYPRtW7ijLibK32PvD",
  "key15": "2A9jDcEYYb9wNCxD226Wt2KAuts3UYyQbY2YviiFnViDhTBoAMjM8eoR1Xc1CryqdXDkYtZXL6a4zLtdSdayvxjT",
  "key16": "5jRTtrPtGF6nF8icviEN32EHVAWSUUwRRQgR5SC1nU8gZWCMpQBZ6yxcbo2eYTZFZTScVDnWSLSBzuQSzPux5WJ",
  "key17": "4jS9wxGR8ctarcAQFQytnzeBim6YDet9H4TWxxN2MMV2hf1RYdzTz7YzSCgArwpYUgT2MuY6U3tsR5DGyi6Y4T98",
  "key18": "4C19bv4LSJR6w5WV9fQnCKMnFUuDTdDVZpniRvEEDc9oYbe5LrLGdZUWCoeo7vPB4Xi6kaFkaocvwHzMR8XZVpSE",
  "key19": "9yBgvLDWaxprqrJFrqcj9dptvwGYiyuKymp8aHMcE2w9p9HLhTKx5AjGPNteByhP2vXPUNN1LamTbLQy27SJ5SN",
  "key20": "2m12amUtvQPAtSzpxbpkbVWmfkRvzMp99uvvUNphjzVEMzuYak8rJgg4rK6m5gtiDfb2ZJTkfWDigkuYpMgTf6Wg",
  "key21": "2ytvTwZG8EhdhVwp3ARHbbMKrfiaqz8DCDMDGQ8uDjQYDSpvUmgtYHxGE7tQMeF39JYZAMvm84NyKfxNhiuueomh",
  "key22": "2DHz1s9zbYQNbB8gEF3hD6L2eP4mUv3o56W1VJbkXrfCFyYe6Pa6r8vftJePmVdSumzx6TAjKTBXEjswdQAWC72f",
  "key23": "5xmHvUAtyhSQGcbrYe8M4UeungpZzRLepSKhdZqeGhaNGv53kRqhQqsHvsRmnKeSSoqGg9UCawrpg5PctDNQRbdZ",
  "key24": "Dr6gDFXH44VNkYJBGXdFmfJSDRZyjgpjDpf5gRuVRsd8zNmE4kbyjFShQLfrMJeDyvWu5Tged7v7ZrL7aDTs36P",
  "key25": "2eSc8LJ51Nu2bRsVNWmJtK1ii1qCc5P1dedqgouf2552HgxeMgsQD6bzrqGJHC3g8JxYzs6uCWbVpC3LxDeBk5tr",
  "key26": "qLhX9WWbEFf3W3ave3hqFf3cE2vkeN5EAoXoVDSEAfeWLSfdNY5HQYAaX81ZjQ5miLPMBpXtA3FEjtUUfy2sJE3",
  "key27": "4PAkFQXuDDgzUicxyCcwU6Cajvod3K2D2s1KKoo8Q1tmZRFtJ23PM6UN8e6aqSjyVpBKzDTHxBg1rqm4FPV3hg5d"
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
