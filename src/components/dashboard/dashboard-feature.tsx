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
    "5AjhDEnVYCLYdV214Wve2KBLYj2NtgzhE6bqYNWxabywX9KoNRkVuhcsTUwt78Z5V39vwy3xmjyhNhqdQMB1MPaV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pSFbhfM3mxBVAszLxktzPuctPiYR9oHjVbtLbW1jTR46DEDPeWZs54bcWTucwdWuh4G1n6owJ4AmPCWiorQuUeA",
  "key1": "4t5B5qvJRgGhu2QXD7M8e67DP25RCtBAMtadAna7gneh5t4pSThw17j6bp2oMS2keMMy3sDQ7EKPtA23mNxEH36g",
  "key2": "1sYHbbPTrJNnraA4WeDYCUMtgw3g8dQ7qVaZXnTwc25KkRvZ4YvmCkda1arZqpjV8jaRLiHxGBuxmmr8kS75MHo",
  "key3": "5tYFcz8YnyFxkyZQGVpBEVQZiQBgo8LBLTq1gaVKTyp2NJoB7xm5DAFCUAM7QqriEjSMRuS3okx5i1maoVZfAvSS",
  "key4": "vw1WctCkgPBD43qsMHQExRveLLMiyC3PnCT2d6etMurjcPsX7HDzbkDNsqGuGtgn7BJv88VKnWjEnLTX2y7JFWn",
  "key5": "2VsevDqJmQVo3uwFexeqnEbR8HbUAALjGpbSLqXwTEefwSxmQcihrebR9BQy9J1D9dJffBg9oJudPbcH5Mg8CmWz",
  "key6": "4dJVmtC85v1uecBkvXKpS6h7MMNAfHYgGfb15LUUmThanc7JQfXqtHxWFhQmxYhGP7YWpqjNNGzzH3V5mgNHR3yN",
  "key7": "32NgAjMiX2o8oQjCy9fkrFdjMaJ7BJ3oXgrbPomvu4WXQUrKrbDdyZ2jCeSZn9FKSvdk5SvbE5trwNzBpkmedtCP",
  "key8": "47tvXJqD3tX3QhthUJtBbUmCvP88fsGBwb2NrbjVQK6jD3DNBHDiVrg64F3djXZND4Gz9EhJf79KKGeGsiELBmmK",
  "key9": "4TvH6k67mTKwmkPajUrdCGbnVnLTtGhsqRevvHwgnkHu4mekuDhEMviAcShXXWhmyJNRYUedDeWxwf8zsh4cUDjn",
  "key10": "7HHp1NnLfhgzRU3Q9d5nwSZFbFXrcBZFqSkWEXdYGmzfx8qXMEjWpLTKeVguqjKzzzPhCRV2Pu8MdAGyEwzd8H8",
  "key11": "5kMJ2PNVApLd12g1SS3NFUf6yKPqASX1dB42nvu138872HGKgSVhR62Vm9aJD2BNXDJhaXeSoyFfbdjiM24hekTb",
  "key12": "3gDm3CxjWNs5MPJpMbm161nTaKALPwDjxduiQPxV9VmWo4Vs8kknyvXrMUp9SkSuo3C3f8naF4isQvRULDdnzUrQ",
  "key13": "5WADG5Hw7WwEzrffrZ2NBtTKCZMCise4ZMgQkT1qwHncmKrmKS764oev4bdrJR2683E642SYRQsDvVFcHFVyUDAH",
  "key14": "5or9i2p8LLkm8X6sM8Nid8tuZUeUqXdknS4QtCuFQ5NPGKseLoY9WavDTkoYhCmwUqfSTmbrzqUTYGoaEYK54WR6",
  "key15": "CQ42fMS8RR7oTUMDiyohvjWmwv1vxHknNegzAaGLSb3jckRhuWQ9r1EpiuJqKAB4wuLnGVT4qEfPaTEeHLeAt18",
  "key16": "2iDxM2AvKz649bvrnrceqfG7yh7Rg6sKjc2ipd9xL35sCWhh8uVqNCDDdX6PLxsjDKHsy3mMqcWHNLvRpaSw8sxQ",
  "key17": "2FyXSYN1h4bbYcNU11VjoVLXAjPUbSBDxe3nmm4kbxRoCp5mKb52PBa5qn5nFXh2BKrqmw29kawPxo2GVVr26aw8",
  "key18": "xfAmoGFu2Gy6XcnTUV3znaV5vUNCHWKaLFxE9v6azZyYPhUmqbHYERuTzdWmX6xzBSgHbYRRJHbomdR73oWKnkP",
  "key19": "3YqzECB26LfUPzCvNbYpkMubfGkW89ZxF41jcWtoGXvFt1Qyu8LzWtLWvJCGuNYh3fA6XxcHd3Z1Bt16avGp3vAo",
  "key20": "4uPmwcYW5NWXBp9PDngCrUbApL8CZywFXf2nwpXSCEczZqmKRaE7fXyYPhPcUJaW9a9oqif2c6A7umNU3Y2bLAzd",
  "key21": "5ZhBMZMA3inGHq9QsyHVK8y2sN6Gt1sWEdzf7hxgPeNv1q8fPPXoWnXEzyxRcyaGgkmdxaZDFovjmP7Mi3Wzn1kG",
  "key22": "snyHAjM3BRjyqz9ui4557z4HGjoe7Cd1CGaUhVHjvPzuSESJ6tkHvPVxmp3gX55fquY5RWmiEDnBMAKk2nkpCNj",
  "key23": "3w3qdZAmiqS79xZED4U4E6B4Z1okNRfGHgE26WBd46hqqet7brJTvYVviD7jZpA8E6jqnWBPq2BH18vLLVL8bK9Q",
  "key24": "4ECN7stiRooSh9FMRU3kcJkbAAgKncNtsJytPfrCocgZaAoRbNrQYMYLYsfJVmiHPtCUqdCrnUiRW6BpUNT5bqYh",
  "key25": "4kHqhF2XQq5nF4KC7G1LgKfdZw3xxi85cyf8Hp5a5p2Np3J8rXFbaMxiDQ5VYEK8439izxPYcyBR42PjgmZRY7FZ",
  "key26": "56to5rXMXFL5yC5GyfECFP3TgoadutN7McZ1zQX4Z8DNXPqd28Ett6qLnqHUbx3XCe81zBa5sZYWy1KcYGLC2BCV",
  "key27": "4kGTj54USfLQtH2SGjCprdceuoSo5q9HKV9hKgt7jTtptc1RTbvYVGb5GqbgQ9Ew7sdCXtv2FqVzaBBPtnuaxo7o",
  "key28": "5RHj1zEgHYFWFdogqs3NZHVuDeUU4rfYcSaQ5JpWo8pFFNUf12ZhJ5vcrnS97W9gfL4Pc5K818PPfGrMNJJeYe1b",
  "key29": "26BDEYZMzuoHe71XNtbCndey1A1B62WJnhwDY3hCTuk48xHykHnR4S9PCGBWExeemiEJpD9b1s5gZ3WeinZq6H25",
  "key30": "5tVBbJzFDyr3bshkZpsu9jwxeJbwP4EvwJ8RCjcAP1W3W2MzWyRp3cmY9qLNwXkBVVN7e5dGh4Mfz8eh4cxPA8aq"
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
