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
    "2QdmJS181wD4vPFazHzPtvh85gW91eeCZAgK7tEbUG7TwjDWR3HZ4XRU5vQVCiFCv98wu9Atd3hpLGq7nzyLua22"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bmt5YuuU2HnuPStJ6wvv1qTt2ERWspZgzpzfCy2yWDasSazx9nQfW9hH1k7u6TDS74EZk6NtP6iPNkmrwaLhKVi",
  "key1": "3icd9mZTB9LcEduhv85S6myExmjGSfWBBCwgLjXiziYCuRM8f5aAJZWvLhMU9qykPgEEnxMAJTJm9s4Ev9imyfmB",
  "key2": "rjxpvq64Bx4rcSaut5HhT8UHWrMQ4WUf4TawQ37i31zHEDuUCNsgvJrUvEe7ziFqfDnGzAAhwvc1eJ4De6mXotv",
  "key3": "5R8yegThEz4oRQrLyZCte7UvgBrcoYYtK3w2pkLNS8K5uF8jak9pWk1Lo6VzwYQcx39ZwHvUMKRbHidmbjnV121f",
  "key4": "5SLhFCX9B3Z6q3HqzpVNjeutokPB4iPKhJd3ihLEhNqyd3H81m1DLf7FoEimnsSy9dZRP5JzmtFXsC9kxF8oaKFE",
  "key5": "2TyhUvahPF85YkbMHuEZJixmZTQr86udSh28M1q5cgisTXXzYJjUb54EjQXAwd6pNXuv3q2mtvPXKkkLE3X4jEB5",
  "key6": "3Q2heVx7sECsgCiRNCW73rXgusbUe4aY3YASSuACRWFhSmWVjLJd2tjkEvvSNoqSDA2pKj5YDkt1vmAgKqYgsPsu",
  "key7": "AzYFsNDmCuULWKQ41oGuSB4ugcTuQGgJNeKDqD56jmLYR6DCUg8YpLKakLBCh8P34eH7PAjbn9EgjX7rnHaB7YN",
  "key8": "5zxJ4S7XCKJK4iK4ATgvhsq2NHK514VnoSuT5FjRt6erdvF8AE7CUHgoBJuwLAo2121rdL1yzJwrQ3EW4q1uqSp3",
  "key9": "3Cg3UtnWm29FQWeX1iL4dxmxLAoTgeX7qkecKdXqQXWttyzSgFxTMrYKvCbY92uqxcwfQKAX2eJBpADQZVoFtSfy",
  "key10": "2kjo5EpsL5q1PUKtqkxQPpPC5W11Ez3EtQzfGUzbVmqTDqKnG5osdfSva7yKz1mKBvqBuBDMJH4ytqe7XnCYHxsH",
  "key11": "2QTCmYsa6gCnosL1EALJdnGuh4jRq7VzrJ6N7MxVTi7iPmkWipxpVLHBtYv9jTr2RPLHQnkvG7sgpr4W9PyH8KWg",
  "key12": "56BMAAQJS8NfoPrYpCpNtyFsCymQvRK4rYxbs3Bjg6vzFtzbsrY1KFn73r8FGyDrFbsUBJah87AfagUQnKtHmb6n",
  "key13": "4XtE7cYXmD4vnafWTSk5WthVgpadmxHWczY9P67oEEpJCEYYtJB79HsMJidGpkSq8fxfXiBQk9UjdKFZRox74Ypo",
  "key14": "5C5HLnVXhNktdRrpQo8uuVnbGq4KrVUzeBmz3evCbwdVaSXPF7VPf83oibYNCYdYdSAqqRLM8FKHrusU2737okuH",
  "key15": "3rPWVV51kweuAi4uhRQQBEe3dRtsujchSf3eZJoeTB9cDXKGo2ZEe7HwA8Ubwg5Lp4F6tyaeWwBmDU4X3HB2oauB",
  "key16": "3Ro5bktqU9FwDTwGHKSWsCFLQtWipTVgCU4oygREJmJsPsYTdEZaTmXwECc19BX4BmXL3rozoveqBfkVWLWx732g",
  "key17": "3u4adSmubkXremUXWqRt7nqpEDHdccgmE7a9NbbYsHDZSjFzP5eTnKBb6CVzscS4nHPR3U3BTc4z4DeS4AobiBFU",
  "key18": "4bQaGJYJBRQivrz7PjAXVoDNA6paYsDCaVhFxn4nrpmyNVXMzuw4zMveYAEwLxLiHsomNiHtEADzUdh7vWVeQY6s",
  "key19": "473zHmvncTtjF5ML9aGDig8D7dsjVfazusSomKGGEfsxAVTHfiFdcfPoQ19Ud9MMg5NYSaGrFYj9HzNEqB4Ewytg",
  "key20": "3QnoXuyxyzMumHQKctVpgquMkK3fbHJm6RkNLtwUPqZeLB3qzk65zJYyicS8pstYPGmUEX3U4tLULLotDrxUt9ky",
  "key21": "3YbrgqDzbvU2ykyyJUbA6YnQ41nRKWFZBoAcu8dThQyXssxPHuhFCCCcZvibvD2a1ToqEnKSeeKuALAXZZZKkiZG",
  "key22": "N6gYmYUCyZA3SwVFtmk5DgD51hRQN14nera2RkvotnsqzPUorUkyN8u9MjEYiEyEHP3vKzj6aVtW5atWV9MXgFS",
  "key23": "3WQZjsXJHkWT6qDT9rindRTXQzVJYTGiUbkBUVEqy5C8MM6o943Nhkedms1knZHuJHkdx4yCjvsXhgnKL2D7xaFv",
  "key24": "3sMDS7NfSJQ8ujhdXBByefAfqj6GT9HpiTT3fEFGkTNzGAi1dPN7cLWh47r5rvUpcD9cQgUw96zxecLV4tcgyvCV"
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
