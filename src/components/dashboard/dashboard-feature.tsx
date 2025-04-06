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
    "5PbvvFdGT4JRdfzZ6Em6DBuwakgZ9JSxvqNmr13r4Ab4V1PB1ebBHW545fY2NmXou3WjNn8DPoZvtvJLCKq3SxYX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ji3jwmbYVDSQLyn8mm9QaTRbQ1cELQbb4HuFFCAgysQFZop2dcxjVdBXaaFk6EDvD2raLMoAFEEQx8oPARKyciu",
  "key1": "2J6VsisrisKtbeEVgFN9VnHocjyyiWhYmMYN83dsojbXxxt5SXzoJZKzRoZcWuDnnHRa833hv8gV4qzejXkXtZpW",
  "key2": "5QvwpscpMkYFKxAZ8oqUrLC8aaLoGkSBpwvdLsFgzUVhbvHSjg1MMMPoWfTTt4VAwRDShUTTHYcB1daWZuMUpNc4",
  "key3": "61XxAGzyHZvM2htr4LqXzP8C5etMdjXuMkBR6Cph6G5pReDz8iEkkV9dvNZHdJRxc28gw6N2rsfjQ69sb6vK3Enu",
  "key4": "u7H1ES1aNBv1fkm5BjNBKR8dow1RyvfCoxQVGvcP8fX3rZmjyYt9Prgw7mjzX2zx47QuAJh6dqTet393kSUihre",
  "key5": "2o6GZpwFUg7cBQ9ph3D1smKsRNSdBwZXDScwo896cALwJH4sBrJkxwemBxT8h1kX8SNqtucnMPJreUajjJApofDH",
  "key6": "2nCpS2KeYzS8ooVZEkCo897y9g81kpLwtBYu8Yzn5tUHxQJRhSMWLj1AZu1MJcdcYC65xdBVbY1cT9iA6qcGqWAh",
  "key7": "61D956KQeAiy12YRMhrmuRTyAdgvAoYv78JNxAqD7WCTrhUBxb6YqwHrjLeRMGc7czf3uPE3wnqRXkdfhDecFDbE",
  "key8": "4AxNFZ6quAuVbMb4C6Ksaaexfj6xY8wAjW2ckCBqxyzetXAfBxA4teGnxK5WFa7ndAjGSPTPsY37F9PAjfgVDAVW",
  "key9": "3WoXcKMASU2gKcQJvU6Nh5jTZCAVdrVLgu5w5u47P7aMqGawpWEFU8YC6SBdHSDbHJRk86QzEwCptZn5tii7PVc2",
  "key10": "5csK6X3A1RC2qtVB1UcLzDLJaevjhC8xTpspRvtyJMAp9ytotT1sDxsNcSTy4KqpsNqeEqD4EGCknefPBRgf5Ydw",
  "key11": "KUetK3yTWpkQMT91Z3ptm3UfgiF7JrTMkNhqnbNWtEqLfdAhjApvfqj5rWPC1JekvNNGKNoUd4UzJx5BaJDhoRf",
  "key12": "4dtPpYDBfgTPHfN1U6e8YNT4xBabyShGJ6udnr7XreoQpdgV5gzDnzUrdoAvhUHQpUaMA8Ff6GPW3iRvnETcFRQr",
  "key13": "4Tk84qx7eqKMnhimfyuLmD22k3hUrDG8NDLhBJZNx6drTpTtApv3HKhELQRnzoWA5AcgPpb4DayE6YvxvmP96YpM",
  "key14": "2JxMeQMcFPe6XHWwHvk8epXasj95jkk7wUy8nnRRfDQu83sqjYcPHkEZM4HSZ8tLNvXB78TPZ9SWeFxuuAyCaAMj",
  "key15": "NenA99YX3TSroo1jrBV5VVLqNVuMYBACEXPnz6w9i39rk4bYwdv8WtWrxNtzqAvP418gXGtjU3LdPn8AHbhspiy",
  "key16": "4aoRoiWN5HxpyLQ72UrVHg4eNyYFMFMzooxhcnUiPQ5Ry7NQiJbN4NpLgzed2ptagM5EGsoyPUeLcSyXftW2Fyoh",
  "key17": "3iPaS9X7ZS2v6XLKoAXJ3CMGYgSLL5y9RQC2TBBE29o1BS2Ey55158bYDvVSSpgk61cjftSvRvfH51sufhfVmGhv",
  "key18": "4WSApo8Nq9bvDjm1qpowLezJAX2BEbiCxm7Dx2576uSHCJpCsMDpCk8v5s42r5ewG1ywSBRJUWjhqLHaWtnAqen4",
  "key19": "34Wy7QWEzYtbL2q4Vx6EUM8RmkgqpqXe1SDKryejHmMWZxrZsykMxHReZ3TSFnMkx1rAe2DcSFUjbb3iuWkqZx6v",
  "key20": "2zk7oopv6d3U5csW1EgXojigcTPfqyHcNX6rvEp1u1jceBeRk4hAzxE2mWNRkvw3MELRntA3NhnJL12c9JJ2oUdf",
  "key21": "2EESyKM7QUm2LFiL6njaTGiJUEZaxkSXd7L8t8TEjTyE3gGkPsutpXQJVeMEhGFEaNupo3qyHNoJeQAgvmRuHkjh",
  "key22": "4o5LJHTJ7V8KKLZwiD5zhqKG7qMSpWVyd47HfEeyCRuLLbdbzoypHhRFXdjJEy88y5yN54jKcgKj3gjozge6Fiwm",
  "key23": "5fSnWvM8rS2w8iY9irQJK2EJTdeBKzKyYLV6uGufbx1boWCxJrKcnhGmH5na58nu89UKF59jBmnbY1RAf2KrRCVn",
  "key24": "3zPJWJaAQfJSAJMvCCiUqu9qsciQse4oAxFTHgaPCMnDms6YdGzsQNX7RX9DWffrXUFGrXJvQyf7GUmDtUPewTnx",
  "key25": "3Kxc7FpytQ4MRDHVBHMre3tmUKAGwTufPD8u2c3GPdbjFKX2vpibheG4smqS9FwrPP6RsLqkCLoZWhooLRxnAZZ4",
  "key26": "WibBNxKnQCeVGsu36PCoVp1xNLHH3rQtie8QQ7zUAhTQBdTUKE1UVXcVv6xzZYjuANNKDKCH55TEjABLt5giYjz",
  "key27": "RT1LyGTQZrY5kSEqD17HxJHQpYPnsYRYdwiLLBg9mJQZuTDwTgar87C4bW39p1KcnNpFk64FdJQMA6FAGYdgeS3",
  "key28": "5N6mt75BZXkDWCpkCfJGehKsj5piJxJMYNCxM6sG7uZSAwqayMwo3926ZkpSJg2DU7ScWo4Y2BjfV2BYYJRqWM2P",
  "key29": "3LSTj8v2PxWuqzJPeSjCFsXpCedtNTjQVzGkxkmxYzFHPCCX5XEHcXvooCMfNCU1g2PkXWjoWu7Z5Wfoi1Q8DRZT",
  "key30": "5gCbKLYkq122QjeaaEP9XeZMAYUQvUKsdDfArVcvZLMrBNWGejuDwZNt4dGcE6hTLEnzDmgHMZYeHSV4cQ9R7TD5",
  "key31": "4HxqVZa5UWJgWLmCjtn3MssEmCFeVEaHXDzbaAxUz6fYCj5Yj2fHzXCkpxjbTVgHA7ospGYrThZbcAXC1fJoMpjs",
  "key32": "4EBDzu58LX6CYrikidkuE65NPCXm2YCvcrYwdiSgZrn98T1kjoZQ9pXo8mdb1VBYVSkz2Xo4T6fm7DDD9sT6TBDh",
  "key33": "6rSsJSWyKyWy5wjQw5Hut2ZCdm3siRj3SgZomrzJxGtYLEgjPRUBW7os26Ej1rREy3dvCy2D8YVCm3DSZpa8Pnz",
  "key34": "qWmVpzjvaNWszdwNUh1t2sTgd3U4HUbY8hpVUs22wf85Lt4F5rXxBFrE5dMXigbyYJuyhNaKDy6HumW6XU4sPqq",
  "key35": "33Tmy8EGLxYT1oSSmCLL43An1HFoeMtq7ktugN98dM7vPAiR4Sin6aZwRBL56jAXRcbrMXcfCZUVcBCSgg55u36u",
  "key36": "4eri5ocw1AiUuPqmByyKbYjDEUn5nUZo3KaiPHR7C7eddmtVsw911WSzydJ4NRLn7wkS1H4pxtJqguyyzmCoo2qv",
  "key37": "3SksEWeP8cuKy9f4Jzj1Q8r46Jsx8VWUpHCfFjznZYiSFffswdWMD8XQHJYdQeC4io6QPojGfczMJUP6cQDvX2Bs"
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
