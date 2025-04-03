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
    "5eJWYy6C4NkmS9xXAeZb9664vZBuxRcCHDy6X5ZFn88RMrsPb4dWJDWBh36w9L9cpBDtirHJFFm4SpmoAbpXG2yH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bkMut4FHNp4naALzyzpo7fgHZ9aomGoPFYeJpgPZxoHGw3QXsVroGrCjMSwFoAKLiPtQkBiCNEZM6EAYVrt5VV4",
  "key1": "3Xfy5ZM3KVLT97AjpTmVrRndJmnxTbD2Ce3fHNupvh2p6WRfudTZnLMy7dAL7f7Ym8g6UTyC7dwaXTQxux2PWCoi",
  "key2": "4WfksGgaFVzaC1r9ZHw1Z5Sh4uQCzJ4VPyzWmURMZfqtkU7FGFXoW2rej8ycAr5bgzLVbeHPy8ve4Zev6c2V8bGW",
  "key3": "2ZJyF6B6wh7gkkaXQjmrC6SFFYHMBLhB7VZd2u5sqrSLvPQvAAkFbxKbKrTNjZz7gvXJT3VEATQpjrK7zjE98h5q",
  "key4": "ERyJWdhhwotsZ6K3g3nUmy8ujcyJpRXFckzKQ2uMdbyHm9a1n6z1M2BFnHNDjjA2gMSXhbEmV5vj8Ac82FhbwaG",
  "key5": "5G6MjZ6XKvL9ovpeJHeUtXSU1sKQJtCKSpcEHjVq1A7Qj29zGRW3GkyFhtT8SBNLvy9tXVatx5FrDBvaErDPzJTV",
  "key6": "65U1zc5w2XWX9bKKrxmGRSt7zWBYycAmYbfxzoZpAx5Ff9RMWwmXLhqaQJd98yKvphkMtMCdWs7RK2PDdLQhPnNn",
  "key7": "3oN9FKBS765snaAV6sVPQn7h9sPA1cXJBw55tce2vLduk2bQhLefJEpAhd55Vec72HBa7AY6rJaY534zviNdiSNJ",
  "key8": "4vQWPEj3S254xuqc6h8uGHHYDt9riTpMHqKq6tz7pwFXr2r8k2rLTjKr5yGXLb7rCYzd5ud7mcDcEGpfqEBx8meW",
  "key9": "3ATR3PvkVisJeUH7QtZn3osD7qgyKoysExCgs7PzVAQdpYRq4xuKzHmtqsLM5sUZQ2bfPxrhK3MzNPEZsN8Bgqh9",
  "key10": "5ddGJwgRppCZh1xV6MTPeWX9zjLkw4Abo3HRyNCRxWrYvRr9B5Eay3Wzf85aucR7xWPzTSgmEicGU9B8eZQ6XEq3",
  "key11": "39F8GiANoA5AVGhAcxU3q1AVcZi4zskmRD8kMyrQfaasjPUUWSnbSgauJhpKLFgtEiou144snFAm7SF65FWiktfY",
  "key12": "DiUJNyaBLSxXJ4tzEucZX6VMoPMk7iaL4S9vj7CfYf6fXY1HjGaZDbLeqkMeRm7VHBNqvk1WxSxTmD7H1qxKc1m",
  "key13": "5bzipFRtV2kSBAZfiiuQCrGT4diQTujiX85vt6rdYevQX1jkvzzXHwp62JEqf1obmmdgSsjyYqhZVyLmGjAwLrB8",
  "key14": "5iwssAAoQN1tns1jKTcVt7SAn4vzaxPs61sqwPKsjoNXrPrtbFhwkYvzVMdoddvbkV4AkQLm42kax5dN7YqZ7ci7",
  "key15": "8P87yghfcG9KDw8mCmjkmK736dCdqVXJw2cBp9Mz2ciephmEs7i3zwwpWnnYyjHz9Hrk2Qq2BPaDqjDQzzVpKih",
  "key16": "28HiJFhA1GxxknmsKrBP5xuhBBjLvXZc9C1VrPVdFrD7a6ywrdB86Nc16KAk8e5um37mAsT2cX3sq8xwGKxWjqfk",
  "key17": "33onu4p3gZnnAZGtzXv4wUMz9iATdxdbbtsGUhhCfWwrJmQJaRSaUtWsh4gokKEH9HZqjNSdr8PKTVCdVCb9icjz",
  "key18": "5DhZ4W4k1fbyjxv1gDjYiS8YzB7AeWTNaRpge1uK28QVNXSXpaicyTdrsvXiCbzR4UACsvaN2fkg44T7Fnux7Hzt",
  "key19": "4czragwYcHNMN911uiJLfurNaBXvV5A7MnkqaS3J8n2HztkK3W3o7JiLRHB8p56Gbc2BYnpf7YDDvJuBDzsfak47",
  "key20": "2q9zW4PaP65uPf8PaJJ38EkhbkKuKQL5BovmLGzrAZSfhDsjXAAuRHkrfFYRfPorJyjfyYX8RT5hedgY63zDHjru",
  "key21": "2bokvVitHtwakWUoRKj7gfxSRD8EkzXpiYZ3HH1r635sfHmzD9g2tQEwDd5UJ2JdejWxy3bT5mGQ4oVYFj8wDYk6",
  "key22": "5D6Wemfqa2Ke58SiZ73sufs1ChQhPQ2ULuFr6ExHAzrHsmY7FSMNsTZu7Ux83xh5MTrLv5XZHCfWEvmtFQSuJw5H",
  "key23": "2PLqNEWKCTEJVJpsJjtnwo3jucdZD92n3pigKHpC62sqgJq3yhM1MF3hNjcy7dZdQHgFbmw2Wqj3MFUxUvDzB6Qv",
  "key24": "5B6pRSkCsm4fPvJ8xwk48cuubmGm4N1dg1i5894vWhbGkjxZ9cwgxaJZFmVQWfhtjNd6XBR2q2TgbUyth7ubhQdn",
  "key25": "43ZBhVhPcEGdTGMK6FCADZDwt4JVfD2BjKJGMAf4zdQBrAbosBfQnk2sNkUHf92cPUifSFomcjUoAhpC2o9pWucf"
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
