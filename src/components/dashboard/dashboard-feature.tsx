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
    "3qvk1LmxsS4UeM8cEftjuYoX2pZXDXoBVNmGRRkj9ozL3VvKtAKcYqdZ3mtAiEDg6DFpvjU5HPFFrXhXfqYEi4CB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9rxr7vHBXqLQxUn13WxznJL2yRtyws6NSQYx4JxwAJc35eQFGzaxw1sck1z7KxvLum34SPVUk3Mi6zxQTKepRDh",
  "key1": "52mwPErZSThBm6ckkD6EeQxqtZogtwhDii22ozzDD7tPoe5jLUsbtXtc1FPcDVA86hS9cA8ABTvhFCHVcBrs3GaL",
  "key2": "47DR7rwVWHPxpcZFenRVq98Mkf8AtFJeqzk5fYqBrNyWvnmx6XppfzurXDRLotxQGxDBsMd53Grv9bywA5bjjTo4",
  "key3": "3tcbKbnZTxKiiQ5GxpbmgymVzwSNDkTm9CvQb4KmDJrXC2QUdXeJj5PxM63ETnduXzPQBMXtq5CoagJWvZzc4k9W",
  "key4": "5yZkC91tX1a5j2wb4GfcH9hwKX7G2b8EFpT92RK1bc14cjJV1w2jKRAfy62Xn6bY5RS9eJzDHKg4u5ry85NwPBcD",
  "key5": "5B2j5Ghp5DQKT1LLFSZK6YLssf2dvgTsAa2wjNWZmpsn39QF5Wqmab1RziG2T4bd1nLAEmVLbJb32fHDVVMeBF46",
  "key6": "5sPMc4rcAH3BtX5d8b6GrjwMSamyLkjS5nk71z5wmDspWeTWWT4djrD3aYHjr4uD9aDvqm1WDwqiAkb6WFjB5nLE",
  "key7": "dLVz7Gc4y5NPqVfRTRpbBxkgHWHxWnNysXoboAubd5rJe192NaNi23qNhH1thd1KN4xT8VfU4y38Rb92aqHsgVS",
  "key8": "3KYWmfsUVnjiLyVke7brG3gk3Du1oJ58wMc63nsks6PtaJan3i53jvjukA85xD7w8Zjo39KN5BANcmz6iTNrZGWW",
  "key9": "5M3tfsUvV476mk8uvWHZV9bUacGkXWM38kd6di9fDoM5g2gR7GgFw6cHAfWU5MHUwc8rAAQLchWEKU51B733ZHbs",
  "key10": "2X8ASUZz8Uxw6ZEXEQeq1Ah8uvtVVLxCfov7upcAYFqTYdi44ABovJZRHiftizWAziEfKkRxCbQYhf8Z8cX4JZZF",
  "key11": "4cYEUGz9ryrwkcsL2Ge3NPNdfz9fHDCQr8mvPVoiofrbWd23LTy497V6fCvpPyJajduw6sJpnoTzFw4YZnorpunZ",
  "key12": "4zGC7FvouH6NcTqSwhy7rvx2noPdJQq6xQAJEPkfQQtW3HNfizn4TvWU6c1HsQSjdgsDkZDd9hnjBxHVEPFdw6BX",
  "key13": "4Zj36FqHxMD4SeredoUdhCecbFHJ2aQTMyWjroptvuwnCTBR1EkMfykmKbHcJDpEBnB28QpMHouJqi4p1cb3UcxX",
  "key14": "5fQT6zm5bHVjzT8ZWn2TC85yN5n3XFQmjLDGxnpemjY8B9Ze9E2nmqdnHJTA8b2djZuXW4KfeQQ3tPXKFUbtHjjA",
  "key15": "368mXovQHmK8aJBdJRjo1Z8x6rhfvubDi1zp959rn1KwKNGRQrzoxhPeXg6dYHdrzK9C17XWsyFquXVS3dExghcN",
  "key16": "PmyjSV69RPHKWUybAkJwHJe9w8grzgzFGxmrA2iUSn8n5B5LEaD4eWn3Kgu2MZd5TZnFKCHKmpNJ9Kf7m5tLpyf",
  "key17": "5FK5h19Q2F9v2r22EJa4YM9LMaYcSzy6AQUXYiQDxuzdAhgbW7VbaYzLzEEEdjPnV7DseVQBeHYB73SvPnwV8Jnh",
  "key18": "2NBf2UTEBcBGHV9FAJKf4VE42KByKcaeV7bQNwrsvajysoefjDcPTNNKyHepmzad7aprAP14jJucUF5r169QzVBf",
  "key19": "5SYPa6QG6BqteZgJagXc6dUHgiKxHWGcapLTTjL14mbfBdTPrrnaEc6cK81fXowP14UBAwurBueGnhMa91NjAspi",
  "key20": "3C1WjLAdw4g1DG7ZqUWzUXMdwNnL8aDEqg7X8qv7ytH4Xyv8fw4pqZ2m6Vbt3xy6VdqxuL87ZozVwf1WCos19VJh",
  "key21": "5ZuDuywRYUygQKpQvF7DEW1F82wp3PZvkRpDmh72FcZAgy336eE2cWdz39DcEnh3EGFDddtytUKCbEZgix9oRhfY",
  "key22": "45wmaGgwToReyJYVLm3THiKzEy9tR9gjGxM3443gEDazCKBB28Cc6VPJbotYMpSKoNexXPbiCMdhR7YTZbvmtcok",
  "key23": "5WQF89i438bRaSxUmtLsnAUBawF4DJmMkcU5kQ9pT31sRgEqDYSJNh1B2ufhxrHYMEin5VJkmjtoT4euq4ELAwMA",
  "key24": "2z5HBPo26fqqzf9F1bxZVK8oxEXMhe8WsV62JQoBnuzNZSaHZDsePagYTXL46GdzCA55tTgDE8KHF5ohSSuZR2Hr"
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
