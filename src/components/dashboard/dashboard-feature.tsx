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
    "4KyPQNk582uMuWDvHjfctUXxxtQYSx4aHF2thHRKdPaxYjtssYLhZ6VgKCW7uvJwmYcyk2EaeC5uiQFTyWu2TvJ8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39TUPbJNvzw7jpviDYPvK8zWrT9ZF6efHfyJZxFdZdRFkrzvA6Gv6uKByJmmddxd83BMq84F9d9rbrQRrT1uhybJ",
  "key1": "NQSLqM3A3oxzjmJCz5GAPZ1fnD9om5XwxvVjeyCmpxu3BTEbwSpTfsyTA57WZikwPMUCxdJv1cRjuupujQeQqDV",
  "key2": "3Vq9VNerdAmH86Ft16Bd8TrDpqK1bfuU4XxQw7SJm4t2tZT7DpHXWMdFC5vz4ToQfu6izRqHfJLAw49JnKVeC9oW",
  "key3": "2souvbJgTdJTurw48d1Apqm4RqRNQ64dKZUxLz7MBDXkCREnSYGNpcR7CQWMSQpcJdsWxTDz7VTqfTfXvJ6FS9Sa",
  "key4": "MVCb4Cvv6J8HLgSovBAMUsTdDgTaRwWZhnZEUo432Jiffhi9tdCGJuexjxqFWwnU7H5XPJrinfF1Nk7uZzKzNde",
  "key5": "YSBBEaJ3w4uL2nqAaiaKs5kYPXDSJVpLxQGMDSD2h4Xh86Gu6Ziers2q9Quaaw9CxfeSLMYxqJVZmNSW3WhAf7w",
  "key6": "4mZXcDCPRBaCWAAMRPefDb3puDhKxBKZZquvbQBkEDowVZ3ardtZAp4Zr6RHdBCDtBwVnQbu1yxTZfaVJWNcLfZC",
  "key7": "23FKxBi3tdg19cWoV1otPQTgKd1nF4LkFouyg6TThDmS24pRiDy121XVyXFSjDHHqVMmbUTyaLoUNfWeGAZXu2B4",
  "key8": "2Z8xNwS8eXEFb2YvD53UFEd6ig6c4SpUMeWD8Xic1bRdc1zRGhjfwV5VWbU2qS76ATc8V7HeguThiit4UK6G6ftE",
  "key9": "3msrk3WX6WsMnd2KdwGN66m1DJ4ycLfEA5qHTZYAcgCiG3be9kemi35Z5gghFQ7weT1Zx6RUkdCyHdfp3qzaQ2R",
  "key10": "5fpqc4zthAVUFGNxZA1NwKgUvDCp2QKkzesjDZBfDp9Nt9RV2Gw6K9rBTuZgHUhho6eEuoeuAVNZTZV8ikGpMBBY",
  "key11": "2qUDSHcMcMZNENp7wKxT6SCpUaEazheNxCsJDiB5TuhXzwFQfL1fAimSXLc1xfCgM76xpcc75S6U5aohabNXiFPu",
  "key12": "31tjmsj13U6QEZdJUn4B5Nxi2XP51HCTPRUBpbqxgmrfgxYP2feXx2TV569ohf6QyXH4qqPKu1buBHjshZV258qv",
  "key13": "2LXzZqbqLVvAz7TKNRxsh2z5qeGGLt1J4zdT5ZAnz1KNGiePtSzuMpVg67Kp22zaDtB9vHMsJp4dBmJNQAfsj7Tc",
  "key14": "483B6CyRqC7Q2AAjMUGXhzTGKUmwZnpcJxhFXPHfzwBD8WwqHKxTuHmJVGBfm7SwajNT6kJxwqzLM5P6hXh6LU5b",
  "key15": "5MGnPdxNfxJcPfC7qtMqCtUjxqyi7nvBfV75QAQd1uDbN88qMMoVnE9fVJwsCPHfg7J5foNDUt9eZqiZYgHmUvaj",
  "key16": "62P9i8JbS29M57pZMeJwrVfZrN4RWF95uzfT8tRdjVU8aWi5X5ufA2qNwB3HX28YL1EcytALnyzujMDTuGVAwVmm",
  "key17": "3xquJNAeMjS8yRQ1t7DGLkh51VyRBB8B5JFKC1Anm3wYhEqYqkaLgsLt2zXSbPtesJnVaVtFHfsBLixxFzGjVV9s",
  "key18": "Sg61NCEyJjVjnerVnc7ZdJcYsyHNPekxMbr2DQHS38kA3KdxDUQHLKWy1kACfdYuoMS9YAFccCwK1dcQHHfxZXQ",
  "key19": "2KnFNbwmTGDefzwmNbqqfShvMT28SgT6kABmESdP6s4CcXoHgSWXkQuxr5dzEm5TZ4toWFwjFLvhbSFNAgKfpRak",
  "key20": "UQ6Nu9L1tdRTU9xTqvxA2PshhkoWErgwXgJN2TY6YGeynY2jwKkztmmM3Uuux9Su3327Geim9xiknVgDuTXZRcR",
  "key21": "4DD6JmotKaBJwfqZWivEKVj2ajfQSatHv7U7voVkXNRJPVukRCgrCHo1Q3EbZho2x5PomZB5nEkPsWGUS1kuFbW3",
  "key22": "2Jz1EDqCQrfoPyjB4P2LvJrdNpwydBEfESBKsGxsN6M8A82rBadxSL3VCAQsMd72jxVb8fwdubN4MvB1GkDiXwjK",
  "key23": "59e9WVZnxDmEt8x4tt45FZXBM6NSgviihJkxEq65ZjiLcNi4syyK8DtiiL47hvwmE7E9FdtPPvcbDNETEEtU7wLk",
  "key24": "ANWxSnr9ZXg6sjjUMZdQTyaWhZZpdHCkZFtqpawFyBzPWN574JjD8ZLdXXaLiibF4Nhrze8J4yRDUppgyMHG5wx"
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
