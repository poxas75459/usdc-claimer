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
    "gqzQ9oibKcS6AccpCGUkZm1SKyd7394vscHLXWCpjvPVSZgjrxbLKGPgMmaBYtoQegEtvUbYMmf1np9AiBFcZ1q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "214aAJ7hXf859skkHeppCiahg3Up5DNyKdhYHc1CVEEHqL4jkDTTNYoYu33bsuEPo38EaBDDcjjV22HTYnoPD3kz",
  "key1": "5YPLSzVMvQZqsqYdmgqpXkS3ggbAx7xsgrjVF1ikJjJuVaenrKQvnQabcsT5RCZKsQ8rZWMxVRq9KRPdwnKMjiqr",
  "key2": "3aMekiWRgLpznn1TDioZjuHPucqbBCayLLZMdZNU24N8zYTPLYo7Tt1jiEgQBsmEfGG2DHvtA7xHiSGryHk1RkYZ",
  "key3": "3rDc7KXhcE8Bhm92X6fuMMBJKEpb8ZMmty9krBpWCuh9iwmRMw5JK2kWrz4rXD2Ssq2Bjt65LwM7VXSM1eSjhCRV",
  "key4": "kkvHiT6Zp4uQ7VNFopTt2W9md39qpGk7i9oy1VgVgtqCrT8rdHttaTnuEtJkLHPkFxFeksdiSouFHWEmeD5DhKX",
  "key5": "5V3ZczhzyG4ZdJbE7jKubWw7vrGNuHrgPExXknufPpdat1RMmb9MywVba3HvMwk6V9rx5cvKcGnXSPbx68Xcc7AL",
  "key6": "5QUBuLC5s5NKHDmu5LSSDZ4GfVGMVuxNYU1qhCaZ5AAtattWimvyvTj3jjxvoappew1itf57QGHrSKELFdPh64EP",
  "key7": "2HYT8CzzhUVR8vvvZpPj2WovgyYpaZTeiFpfb6pd28ty9Ub7agXB9YFGcbiUVr3VZh5pebPgL5iuXD9K1AD5vtQ5",
  "key8": "2bbDcgus7KbnXGCLokErnMkmKgyngXBkDkzgyc7DiQYMvSEYcG3TVkSLzDHq1bNgDiLNe7LLmCac6vYKyk8Mb8oB",
  "key9": "5LKB18XYBqSzkBB7UZFrKZiTNvAgr1PgFDSdXWmuahpc7WYdE66XcS4BfLJ1PW7UGwQdowgzCubwu9UNh3LdyqPi",
  "key10": "jQo4qu4EYDDxGWXnUPW5ZJrbM2xGSt7p5M8UVYbwTvb5X21tSeTiopk3LsepH1o2z6kHixREPAXtACKmPBn7krz",
  "key11": "2H6vUJFQWLsZ959zAkwJ7aqQdHw5MVCahE75KZBfP6Fuxmae5MyNSHVsQX1FiyX6viyGUw4Gq3bAVzBpqdaKsp5",
  "key12": "468vXtQrXxBPdH5ptjqtkaY7qUdoqZu4DFN1BTm918T94Tu4EvmTBduzBSZ52uV8ZtkQf6nf7FMZCf7rQeZVJbhN",
  "key13": "4sVKhPB3MYebSxGk8gBSB22yXcbbBSwotFsLeQckP8CWhysKSJf443KWXqE52x11uh5yndokCuGZ1dNQSRhdfWJF",
  "key14": "5NLms5wt5EVw3FPeEF3xZ8XhfNLuDWusZFNtHoX2wqQKnJNDCBsbZamUx3qic4KR8Ccecidn9gcQQsfLq7pfojH2",
  "key15": "5EgLPGSpgCdizKr6ajpiZcgP1gKDN8LdcfbgRxELVg7z4VnrAhjgAEufofmje3R97b4SYQb5jESeg2M6hUDR1FcA",
  "key16": "NhLao8HTbi3pUmpguqKNyonMSCiZvXzKfnQrHiqRUjgHEXSQFiCRwpcAcyN7UA2hh54P3amkpCefa3YSmjSdZfn",
  "key17": "2RiACEb9C8VrXhzFaG7TmV8jcZyb29WHMr3qP8c8WdBGmjduJi5vZ65sfLQ3RFa8vGQ7XV8VdTfDwme9hvTz4UVy",
  "key18": "2LaiPxqbFQW8pMeKyzLJnnZi4AZmnowYY83jZxA1SucPSESak21iEmRU96HsvLLv23T2aFpqveNqFySwERPv7mhQ",
  "key19": "FRz8vAsybdgHZJ9YNvv2K96E6WvNk8z1isSk5geYPLk4AMUABXGXtSPGbyiJ8U6dGTYFuHmvxAex4YWAyrLaRb5",
  "key20": "X7Rr5kBVkZhqWXNag7oRmymGM1i1VRHK9cetuLq9rwtmBLexnfWYRHAY1xnFZ68eSjUt1m9EM1pL5PgaQ9Ms1PC",
  "key21": "23QediZwDvayCGmNYuHvMVtYEYST16g2Jqa571wRKxHYxDTJkacmU2ubDVhDuiA7UwTNRZZDdsEDQNpmrwFMBEjk",
  "key22": "33ebeszkHaNMKLjtDxypETPzEQnM9VNJuUtuNNXDCmPDEzNopiUsA6gvS4jwuGxW4QPda5LHA5NyCNuoW6WbcQcK",
  "key23": "4FigDJYddB1LrLJqW7mvZW4egyz5WiiymNeeW6mmzPD83GU9C7z4Y64NKrek4u2fPmdU3GGd34GBTiaz8L4FnQK4",
  "key24": "gN4kdPSA8cH11u7TpMscF4q6N6hfaeS9syza2V8VaeCTomUzxSZ6EQgMSFRfKgLHVhqNtEa88j2z19uCzutjgXD",
  "key25": "5xPMYybpj926CTzxZ7BcZEpHHVAy3ebD3uaQSLQku4FRQyoh9p84sCEUjaazh72XPizSDh9SitgMTFiQN3JuF47y"
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
