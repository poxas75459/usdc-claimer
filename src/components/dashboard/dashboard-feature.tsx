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
    "2hAx1upUs1QiViTmawUqw6STqZ4mJxKpXdxjnWFWLebvH7qnyioYtBPcu3k1EPoAwXiop5sqSZyRhsALWuRePpmF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yYV9AJ7SpHR8vgQepQT9kieU1xcXXcmZERnSkuYicjxdCUzVkB8qYdNrxA56tk7LDAEBfgRxRie5M7XQEmQc5bv",
  "key1": "5V9mUpJbvzobi9FF1whpLNXaJtmXst5mLXvukMt2SAQrakZj4RfGfwJMYRshzCikXQ212BuAgoAf7jMXVJVGBJRa",
  "key2": "2yuu6T3wem3x6aWAnNf92Votq1uiwj1KuhE6WFcYq8yo4PcsmsKfkxx2w1TxzSC6eC3bANhkWXm7LWGLmNSQgVFo",
  "key3": "3wxF3eMcNuYWhLKRCSYbjfuNVn5hiqUJDAb2xE5rKUii2g8st7MS1NVQoWpxXJ2gW64oB3aWgT5zgDWoEQuDZi9c",
  "key4": "zftyQwPtBGXuZSK1qML3Z4ReSdHg8GhHKUZB6qpNZRchiEKRntMEtbWrfTPqm5F189R4SrLnT5ZkVwnnDkHExHy",
  "key5": "27z9m3syNMvWQUcvbTBeBQxuvfmP27BMLsX4Psk9TqKPGKmQ64nivPhyRcJc7SazU2MgdH3Fd3Kb19GEaeDjYbir",
  "key6": "64EJic5duLm66gdJbK75nU6eKnxTjuUjJtaBVcTjiE9h2ZEtMjDb27iodF6uQ3VLBb2faEv7rD2Bkv37vgka3HjZ",
  "key7": "51rXLn8qmWmK6cJHpevx1rMuY2GZfgfUkErXgaetmCo7m3H7mea87Nu3t8r5pgDLBmSQfF7Bto2VyYCmxmAKBGvv",
  "key8": "2e827jZqRSeM4KLbkec3S9uSFRVeMRSVPJa5L2oHGk6Q5fryPy1cf7SMmaNgKGT1HaFjVewBmKkWFBzaWSip4uib",
  "key9": "5Q83aMFBLmzzid4q4raYCbbZUbKTeEQ7a1XDnZT1x9QpUum9DWtiwcHjbyT5So9pNVWAWzfyLXCt2HHQbcq22n1y",
  "key10": "4eQL5v4esbPAyToLgLPxFW1CMbJG6kTsc18oDLSvhr64oQkkDC7Vta96cnHv5FhotiK1CkRfWtX6PbiehUCBHN2q",
  "key11": "2iF3tzX8TGQC189P4AYg7sqYu2pyU5uFMDznkJjeWRm228vqfgtQnwqhoKA92ayEqpgmaDvEMie3ej8a8Q84suX5",
  "key12": "oKjxzaTY2JbZn2PboaAnxAdomxrbJsqKFYt9JmnAeeeh5tK6CWkiqk1j8HhJALtWyNrWPuQPdwfXQU6wKQj48RU",
  "key13": "2AW7NosnjnEcKfVMkyi4qgppvritK8WEb4aai29qQznF6HZa9iniWs5hV1ekWGMwngf18eKjfdGeNEuYpeb9QQVK",
  "key14": "MD3hEiqG3ecWdmaiJZowf3fAkVPTdGeDTq4u9qHoVcmVwZHJmeb1ZbfG7tqVV6YYGDsfWHEK311PMPPR7GhmuGu",
  "key15": "4bxLeou6MViMWE3xCVWzbSGkwLdbNaB6o5yrxvsaZK38CH3v75ibG4Jfm9mestmzE7DzRhYV3HswCi4qhPEeD9wy",
  "key16": "4YRKVmJaXS2FShdWq2aosAtKzzwjUCBjs9oCU3LnVimXpA3ZVhHcniB8MP42hKZsm2WojGjxXSgiwC7Yu84uTjzP",
  "key17": "sT4DZJeZPc8XWPmc1Zb1SmfxSKbymxy8km4gWPnJqpkrUSAryr9KzxqDcshwEFpjm1JGwhYuHchQpL6JxdGeEUK",
  "key18": "583rJcouARPuMsbTbWVrJq4qDNqPVedXc9CaPPHgn7g8bAuoLkjo9bjL524njnCP7Kdidkn1BuabY8fBf4LBq9Ne",
  "key19": "26HijxnumN9HdXPGDCRvQoHStbthfMyL9AVrA8Uqt9t9Hq9LiS77qvaaD8v3uztrc1ThbcE2XNC5bL9jjARHbKNq",
  "key20": "PNrrfFd3yzvYZFxyFBPuiizXfaLHLWF2apxooSXd3zwtL2Gu99LNzVwVfm3UnTmSjN9jxQB1Et1UvjQAKiobngi",
  "key21": "5WYNSEoMVeZ1sYcAnNFdg3aXuzng9rEAUiRuiWsLXeGcVMpD5rQZjGo2S1gXqLAat6LgU18hy5hCTNRqcYmX2dh8",
  "key22": "5HMdzT6DnJmht7RwBwh7hcE27zUVtnwaqw7uDWzbUgb5zEXBaAsXnaAohSQ43zFFYeH6qAhmzeTxttQQ9qy4sV89",
  "key23": "4bNoDobrDwopNpn6hmWgnopvCR82UUZxsPxN6i4MxcCSi9EuLPZUP6zbkkR7GjZj1F2meY37PZiQf9Le7xEGejJA",
  "key24": "3ES71FxsW9QZ6m4HVDoXmCoJ5gXejWgASYmDsAtReBfA5SFpJaQEr9oognj5BWWfGsRHKqQ4ko4f8zZwfbShuCaL",
  "key25": "3QT9wL8UvbuV52saHi1aX1Dh4VPCrw1hY3NgqunogpX5SVwgZyaZ8hSyi9uSXtEeU8N1aUUtHthbFFJdBC4FJgxv",
  "key26": "54bhiTjQRgEzUwYchL66fgbEmKfRrZQjzinrvYGexxN8Rc1yWZn14TsPMcr4RwksnqFpGWvUTM2fVLqoVm18Rx7G"
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
