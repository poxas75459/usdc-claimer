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
    "5mDg7iSBKLjEvBwg1FumvUu8gFUhH1stBjrUp2cnKhvrBFqdbWRYET5YqA3K9RK8d4rjYFTxGRjJrVYjhRx4LJ2u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4upZaKC4TaLRvykuZsiT3sHDZqsBsNdUjfPjTSJUiRYHi86VVHjAWwNgbjRuhN7YzvMKebW4q2hgpNv4oHHNsxJY",
  "key1": "57PtaTTFVV4rWW7bT9P2ibRk9trQDryuMX4HZazgf4LhJEzgnZJgLJbg6HiG4PJSprzfPMuaXX9pTVbVX2wQDeJM",
  "key2": "3sfhaidAwNSnjJihZ8uXG6MYS6WbkagL7vWEv1YS36L8SpTXUktZfQKXf7pskSSsYGh9mEXizqdaPtamFXxYyECE",
  "key3": "5M5cb1Q8BPNqLQGN8SRwWNPcky3zgYk9SQcjwd5YpomnGDXtXD3QQ2YGfXfjUyHPw86eXNA9rpCfHkQEEEeeezyD",
  "key4": "3gNrmz5CStWdrLhWS4qzYsxXYCjdh8aUV5F16zN9utrXhgJtCpN38B2smgELv4Zrear2Pn2id6bdQGxDsmJm6p2r",
  "key5": "5iBP1Vqa94NTTvp1SdHLqgLPwAY8U4e15pqZgiRphwTjFqzTvURob2athjG8uK2MWSJWYsobQDSiiQLEpEq5kcj1",
  "key6": "5buFbp4SVdQmyQ491VWo3H8H2vJJ4RSGMHZCicFhMZtpKHZQSBDiVCm5rts8f6NtT6pp3JqfpTzrT7RmJdbGHngn",
  "key7": "41xZ4ihRZ93LPfQByLsV6wstUcZGY27LnQeaNAXdJnNY1DyQqZxuzEC7AKBnhSup2BtcQ5BJFDrLbs48NTvRvLh4",
  "key8": "2AKxuJwJDYLCo8BT7BUJY4uDGbiHHigaejojLZ4CUMxtcqxBzYjuzxw6m8eRXR56ipEKUHc2p7nEA6xpypWwdsyo",
  "key9": "64pbECMbAfsRNZQohjYs1Kb99XosVEq1AKorhn8NhU9MQojFQq5WR1G6F59v9zfHTLYttfAJLHEzHgWD2Fu3sN5C",
  "key10": "49UurAYRHks4ZaVXUcJuWpkTaa6JMDmnvfm8wwEasUq6Fg5ykUTCYhdWzbzfRufF9U3YZWHFVgN2fRMRrZfcoFMA",
  "key11": "5XguJExWYk4ptKfnh9eZJDxgGZjpxkfCMWXCkdy8Y2eW6teehr2wKqSaaWB5Nh4pa8qE4nycAZq6RPvX52QKG6cQ",
  "key12": "21Ufhj42a4X8BYGXZpo7EcPdF4pS29Mw26tFR8RBJUqifuv5QKysPzyBJ6AsLXhRwHLpNEXMd94ozzgSekHyDjx7",
  "key13": "66KQ9oYmvbobSyzZhcbvS1pt6Bt3TXfMbCPrkYohmXMYmMpPj6c8yAfFKaKT427DLA8iAiyjPgEAabimqnrtf4Mx",
  "key14": "3yFksdPnUA3PJrbMg6gqn1LhyMso55nDXq7KDLQ6pz4CAEeAcbovGSTP3ZBBwQwtjRScbgVLCzsjrqDVe1K4Abk7",
  "key15": "9XkE8vXWHqPM8DFBwfmUQjaabEU6X22KA4FuamuZzanZwWpaRjXfzR4Y8vpgP1u43BwYkqb96djAkFsKLPX1rHt",
  "key16": "2EA91K9ZMBFikK2vdYnaTWvrkjPF8xetwicR3Wzcg7p9gxoVHxG94W9x31RauEcJ8LfpTzAicEcg1wDFbgGjCacw",
  "key17": "3sXG3bEB9om27Vw5uadpzQHoykUgvpgS5ZgUu4MaWfXjX5SiVG1oWFEvEcNPLxg6LaVCBwGKWjKx4s91CW3oyqGd",
  "key18": "5NwCa6Tq59hdQPPASV7jfiE7zBKcbtKXo8Y3q7SLrCkcTi2w2Db16SycVrACbcpQhHK9bYHmxYzh9suPmFHWKVnk",
  "key19": "21YCfDGbBGBi8fmeJJLPtuAfDkxFAy2rwKbEnbUd2jV6NEdnKz4cXBXPiTxeGxFpAmEV739ExrBRRbbMGCC8rUTv",
  "key20": "eJDuHMsUwW7CnGfi1t7rCjbgftT64a2JNoArJGg2irr4QGcqK3QKTmsc2tKyC6YpZnnSq8Lz98cwZRCkQ1Vp6ia",
  "key21": "66bsPLVj5mRR3VLwXpvZQ7tfTH2wJVzs63pTTJpiFkyj1eMhtDaUJcw5trZDc6QzxWyGxzscJ5MtUqcSvHT6vvYk",
  "key22": "2x1Z2vQSsTMBwD8YZNaXSRNqJFhx8UPn3APw1dMKG8ddhfR3g3d8mHbS2hEaduGoZfkdavT9ksrBFaF6NuMDKhCG",
  "key23": "QNpC4CryvDKomc8Rw2pCDjD8LLyQ8wsZw7TG7tcrhUar5vvdFRJQehvh3m6cafipgYyxMsgS7xAqMUXu5vhq7AS",
  "key24": "hd4RL6oio4X51UNQgNQC8DU1LpJtHbPKiP4Ywwxh9RsShRXW6y8BBqaK9NTtqyuKhXezp5yV2V5u1a8F7Nt6CT9",
  "key25": "5nrUV9pHcrJYxhiVA3DnFRpeGjcZZKddrQxTW9nsG84t535XZ1C4GmPR5btpFi4nme6jByUUS2v3te3DtsHmBD1r",
  "key26": "2doBm6rUXNvy9dMZMCxqTwGCU8zGGwLhbkHBSxonRSQeKbtrAoRRSoUww7FTG9iPyswLYCsUdtGKds9DGRNDarU",
  "key27": "3G53UD7BuQ3ozvVDaxc1HdxakKuM48862eYkB9gyW1mpZrXXGK9vt2PSzCSDuZ6wvio5zcEg4tAcBgwwu8AUBBQ6"
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
