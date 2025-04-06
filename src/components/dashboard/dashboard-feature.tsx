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
    "BbjjUwwL1fmTYMUndyaQ7nWkB7F7Hz2q5nzWQqKfqNMzbH5NKgtdoSBPy4mT81DYsTsUu8fukAcEiBBNVQUL2DD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5updazeRF1hzE31s1Zp6iSt7vqMzqLkSfcTkUfSqQxRNAELrLMxbaFJ1uD1Nmv2iq2kfvc5zfeayrtsBg8P24vJa",
  "key1": "5vkbPeAcpZQ8dZj4znSNTDAZL3fEHZTrxUApUkDgvDPJQjnndAsmwbTxB3Z33PPKioND5LbVQm9P2HsXJBWB3FiA",
  "key2": "5WaXQebNRWJzVWteN8GEGgKWMAeKkB6i8BVoU44LTeGRMAL2aUs4q7DqAr9wxhUaFUCC5PFmE3HifKNmrLtGtKkK",
  "key3": "2fFrbkac3eR56ACkzMJzooTeGLzTR45uVsqNxSTrzg9LWunybqR4vUYkNfZwJX9ESvZwyc7yNn9cZhE4bXS8DTpk",
  "key4": "AJuiZWdpDKtj7wGW1hF77uHcbeRNucHzHCtTnfxBGj6LCxqsoNNZ4tFLFu9oVJeBFZW2rKpyQxiyH968qCj72DW",
  "key5": "63GztMT99hJCnbutV8Kr8nXPwuS8ppX2m4ZZbgm8okC12eMNnn1BWiVrD9hrfiRQoefoPuzXREo4dxLisBBNdcbA",
  "key6": "21FxVUTVeeXr7mYurVspxaxoSG3cQHMnqYAvYFCus24BZQz5nK4d4JPzTH8jw8vLzfrcbVA5KV7FxhdANjucn737",
  "key7": "5fuCDdhh7qJb8o4YHBLvj5pVBmqo5aPrP3DpM2J6KaM1UNmWqnoTYzYhcJJ23UJcNj9GEMzMvHNc9hEzX42JdBBz",
  "key8": "iuXhkMSsNMVQN6sHPdL6D3kNbLgdJQREfskCRV11MPoUZgJ3aMGd3UKhshPDxS69ZwT2cifSoBpRHQ99ckNspT2",
  "key9": "2Dg4dHsDfo3GsrZZ7gh2bMRRmqu2Ce8NBR3jmXbwyvbq9qLKxhMVSHbnqRMr8dKp2CQrHBVnCQ5gE8KW7FgwW5SL",
  "key10": "SGUcNFqwTWRUQLpN5AQxtsHS1yt75gH9j9Xrk5ijzCsbV3YekZfFxW1CVKNipEneeakNHCBFWs8KUdX8J38t51i",
  "key11": "5T8xTZYeiAoMbHrwkE5wXsi4PuRF7bU98haHVQe9AanUegGmiB6FSrZLLWhPAx8ArDpbCftJZrEeAYMAyHJoV5MJ",
  "key12": "yJXxRkFGk1uFuYn7vjzuqxHuPCZycX5VAbV8izAJm87aRsQ58bGiZ8XupHwBgwTbgrH8a4t62uwdVRjDJkkDHu9",
  "key13": "7SeNAyqdrW1szfa1cNwUwufbmsLJqBRGeDP8s9ypNCfhcoXeyLi2cknKgQnpajBnnypq4rmF3xzJ6DBDeSovoK8",
  "key14": "47TGSD2ZHxC2AQpMrz5ia1H654kLZL6GZNhKDEbeTZXff8gT6HM2J3FfEXBpNbmdx61CtCjgZC6V7zedV5JTmLxY",
  "key15": "5PKhBf2bq8JxdZPiSTbagoxpQ7QZHFARK8c6A9ry5cxEKEWjbzs5WnhLbJvuxdjozufDJgp7Pjwqt6iyAPHaeope",
  "key16": "3ayHUB7cB1oN9K3H4xCU8zW7XnZBfy4FRh9h4Qv8mQHc6LWYmQq3Dja8rMLyRLsjPQqwugRDmc7Nj85HqmAXyLVL",
  "key17": "2RNFutAKK9JbkuVtjXKqvcv3if579skFUeK2AQJXiTXEYLuv4ZX9UHsJRkdnHFAcJKXHWXGqeazy5A74MTJ3EGRM",
  "key18": "65xVU2iA2i74KkuD6ULdFWeSEav6Vs9s9NxEu8Z7gKJqk2ot5ipqzvGxYKo8T3xju6CAyK8QtwcKaYnpftKdxh7u",
  "key19": "3jLpSvGMhfBAK5Wtyy3iQiHYHN12cnmmyHcPdEd4wyH6sr6Kx8CPtfZ4XSMymzpsGjiGmt9DX1kNgVYB18JC3ZHw",
  "key20": "2yd1WZsqb5FJW2tQSQaTjAoTdkXmQuWp2n3Ti4cm68D5kQ9Tm16d3aHhqLaReHH1b3tdBnh1QQEtwmuHUX335no5",
  "key21": "2VfM1EmfCJSBzujTAKEEccvkLPnLqLZLx2XmrYBrZtrk7ZY5M4xSFTGcAzcMs4opeUVejEn485pEAAreoUUF1GFx",
  "key22": "4pBDZ5ZAGQQZ5i6ZLuAonhirzvKwC6TEoScLUji79USWLonKpqfMLrJvm3ywKtd8JyTxcJUXwL9L9NB3x49JGrFY",
  "key23": "5CcfG9xD3ptPkruJASLfgqfY7azx2AhzhL6Lt6jkxsrE8yQ9RNtkmy5zxbmJLJ1yRAp6s4WH8xvCpYPkhy1A9TQt",
  "key24": "3nQq5Zmj7TagAtSQEQbh6TsLEHv3AxnNLHpQGc3KfWgXsvm3hQyCpcGsBJcKXURu5tpuEySjzyXeddKZVQVVkzzs",
  "key25": "57BXvRGxmq4zmMU2SxyKhm9NpD6KkjmBtxoPidQT8rDRbKy3rP2idzucxzW6cBmKABtBSxWHLM5drmv4Rkxg2PA5",
  "key26": "5sw4M3G7KhusGfaB2Z5NAy32qG6WvUszA1DH1sBCh3KG54FMV5trLy579sir5MNiDKTNPibBMpe8dVioWHLQ2oom",
  "key27": "3toecv5Fa41tYW3ccJqno7rEv1VnKfe5rwx49xhBnrh7FouqCqS47ao7fKd5bnZLHgfpH2vjmxWGB97a3f1AmEDN"
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
