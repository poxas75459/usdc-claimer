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
    "4ydF3V15Qh7qn3gEL4QiqjM451ZDtiCh1JERF3hjAKxqd15PjQL5rpBYCPbVFp9amULYvDq7CNW4dzM25oxwvmpF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CU95QitJRufkbXAA3JQzyGTAWYHiwpRqTP9kS6wsppV19vd3XYLjEUWCj9eKYRK69eZ7SoLMvP6f3DGQf75nsmy",
  "key1": "48xK15Kj57RPwj65hraLwCBzght2TNV6PPz6PGojA1bZXYa4q7bsDnUkTtaNBCrb6UcPjXWW9RyoUj1SVuCrjS5Z",
  "key2": "4kE4ofT9PU8LhUceic6N2KZUqox1KZto5rGhM1DMhNchh6gYXMXD8SoSdGr4jxxxaYcZuRbqkJyv9TasuTSvAsrd",
  "key3": "572n5bDXyuQGX52G4QVGV7pTcLybv4fjcNNjrqPY1UdsAKTKTAnFeoKDWWbGGQev6kiQu8qGC7gtpocKQ7oEQocM",
  "key4": "4TQMyRcfk9NUFQvCL1Nr5kxHyFz8KePk4wJwPE7fHG5t9wyz1WdShM1bFkdg3TTj7onP8dWZgot676edKqcspM7i",
  "key5": "22YrrA1DWtf6Hr4CcvcLVy1VC45EAttMoXpFB8pwJcQBtN3ct3BrW5EkGsKXe8h816umMgRfWyBSPcxBReUU5f47",
  "key6": "4LfkJoYHePV48mZW9dnyRfbWX7rkce6gfQ5xwRnxBjxbiA4iSgCm8bcDiZMLw8vMuNsqMPwdinvWTynQzQuA4u64",
  "key7": "iU8YFe4GqzMYYPVFEMSyT2dx85sfQLLdsgqT3HtZL3n1XGdfjaf5fXPXCRSRhR5GUdHmD2HXUY8R7ntNTpoTiRE",
  "key8": "hJGosFfiiS78QGM8HbqiALnn5iQUsnbTv3mHWULBpogUpWtsDMqWFiffMcrKsFoN6yrE4xBxHUNZpgwR8RezE7y",
  "key9": "3FJdQrCVkvH8y3Lt8HhXXSt5KQ7nt3xK2j2Qz9RpYVpkYe5WKmoYcmHRYzYFVNfkxPQkwY9NW3g984zDEcTGhiMW",
  "key10": "4JHohG1e1YtCf4KhG1PcM7GfkzcZaX7aS11tbohQJ3553cKDXbi4b3QgYHnMJGUErJMNsjTfJJXBXUrQSiJ2sBPj",
  "key11": "Y5PXUZUcwzUQvMZNjrToxaEziraJmsE4CrV7AiC9LS8NmU1VGCRB9SCKzW4u1xQhYqfpStDR8JjMbiPsnGZHeJs",
  "key12": "5kUweTgHBPeyCqJkJZGVfHYLgvjZuU6Qucp4fGkqe1mBFmFBrKKwNPSaMWMzKXKtAMiVAkXbya7ovWUAknyEfEUR",
  "key13": "9wvsETr5hqR5jhqEkq5s5Tae9eXk3dBc5zYS6R96gvEEHMfx2BvE9Ht5XAsihY6YfvF6yHwHYPaGvQb7SSqivzd",
  "key14": "32q5viqaaxUwqx8N3Bhwx6b6xmkVBkhMLgowvCei5JNhL6BEqzcY4m2tmsQjD5ogPJSSoFQUaJKXJfBkPLhyjsKw",
  "key15": "4z3bXsDbDH2gDnzmcupaG9B5NgovnA1CZKCNhg4hJzxCeyYTsT2TbsAB9dkuV9M8DZTbm956ibkMZzapM2brLb49",
  "key16": "5v2KZdQBvDerq8o7yXs5RWKkx6tF9ziChmPbPqSb9MuxtWXWF5LRpctGBo9hdYoq1BQpZ2vqBfkD42UjFwg39hEg",
  "key17": "aGH7i5Xp7C4tCJP5ScL4eDHAgW84ZjeZutJ4LZLQcyXdF4Er1WTbF3kKcNQzgH8P91Scqbs19xqr5pjo5NDbVX2",
  "key18": "4atxW1gg7bqeqtK4UTZjNZuGq6ZqCj6jfrDfL2ujqYGgYqTTEdfkkMrQVtK7vNjKXzZjYdT6rVTqosYjDhE6vQQ1",
  "key19": "3BgheLPh5MnZUBp8K97xq5aLhdWnQpKX2LUuvbrQ8KuAGRrxY1NEpuNWCSJScrhEzkUmyBrr4Y1HhVwikz7M2Fwk",
  "key20": "5r4GpMWQGoinRtAzHzQcFfrDpiWV6RTMp3fFbaqfxAwHtvJpU5C8D7xcP781MeWGE3mEE9g4ZEFGMxzG5zCWJj3J",
  "key21": "ncJYgyMMTuy8uRGZaxkADwRwPjEucRzjHtc9LKFXwKZyJSgWYMxNqk3cks8pYpDwRev1CBn2iw9qZ1wG8Vc8EiN",
  "key22": "FSjaPhEi8Y1n7dootzLw7PqvN4WZaxaF599kB8wDTo9qoFz6mBZRJndAvRvRpsG7rddPAEmzPBdntf5A2zJe8K2",
  "key23": "2y5bP1Cfy3JLd12cUTWJRtybxxyuv2dtGBQPnegJQrb5nYU7uA1TfcwrYcFEYJB1sBJAza9F2QzzTanqEnQFGrvu",
  "key24": "4NGxPaCzkpTaJsHo5FWzVy768WS27nCU3yQYHmkqsEMijwpCGskopwzgQWxgP8ZsbuVmA2wAStqBfHFrenBYVfHr",
  "key25": "47Uus53vRoXqj92GHBv1UzrcPdvDAqGBmMcKGJCUeVYf3mvkUPcY1wNwcVgAtaF3aDMWADfyw9jG1kukMyXiBJu3",
  "key26": "5H2YQHFogW2zND2UXtm31xaEG497zqKqGnRdMwv2APKT2zqHzPp9BpeXZh4CfTnQrjHozYXUPUQEYFVjKZG4hLkn",
  "key27": "2XnvvZ2Zni66dCS7n2NAn2uafwgoEyppTbGs9tMNLp6G85JX4JUTEux7JGpyV1YWHADER4wrYqTaoFyQhj9Ef56n"
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
