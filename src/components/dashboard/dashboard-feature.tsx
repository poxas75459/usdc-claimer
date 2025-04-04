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
    "2bejJ4Sw9YBRjb3fBGcsjTdMMJbFaFa63LjQ53RcquGruyh8cmQgyDusJzfcWauvA1Goijy67NrFdi9W944QAmzL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GVZwgACV6Nhi9V1PBhhMshjMPTrEBRjtooE8EndAxPiJucMjADspUJ72skvXQBQq2vimXPb2UGauBHuZFTsNWL4",
  "key1": "2WMHFdjWU2qZHgDnVejXnqjqJFkFQf9ywWTyfQF1pD1ykSXy637ksjoEwQCGqCxuZpAi54SUGoU9GFUvbAdgvjwQ",
  "key2": "3mt3WzMhRL24PUXKDWK41GoW6NjSNZbc2EEiJK8stpz2N6hn3dg7bwBr3Kxvhu5UyoH4qRekkjoeSTCA3TAJ99Se",
  "key3": "28nsBMW9rYztELGJdSsmwxi55eCwXTqsY9pG9FfesRdB3sUjGSSgXzRmrDh4kqQUmEoL4SRtcb1Ly1YNwiHp62kr",
  "key4": "b4a6DJtwQNhRZWor3GF4jd1GgRWCATNUNiAasdDaN7PPHgMtNh4BSmK2jXWH9JVbvQpZdPaMLgbR3wr5aJuxnsK",
  "key5": "5Kd5cqxQuaPHhwxbN1JEGKinuxY51siFj9anzWbnPpNjbpKka8uv8FxxVkBT2iQjhvqy9bPgEBfxsvZnY7FRvw9h",
  "key6": "4jw6hvmFkciG5fUnntoc1YXAtEBrAiRp4bGLTCbkiV3bV9sJbdUzdR1VvimPYDEWUtVRPUqXwTEZ1qvg2nhQhbAF",
  "key7": "3zQq4Zr41HNAYdq3ZPR1ffr6qfdKNygGnia2cyFoNHhvidiHeZGmvb1hnBoG5tYC9c44Yq5Jhyot7QBu5YCR3rLD",
  "key8": "2DkfdCcsTMFTSBPsux1SEnyaWPqS1nf8JY1cUrGs2XhkjvpN1kM6qR4LqwW3qjeJdAmeW2GENLjpeTXDxGkan64F",
  "key9": "5uQFaSeTcSBcH9aDZjtKeLm3eurmm97CkpYvdgKgmVSdqcZEDRwjwhJPHKHb6WwJFgopPfFqotHbczPgh6xSgfuK",
  "key10": "Vvte8Psj8iH1A2rwyCMqoL7wgDpFh1XnWgaVpiupuzbFYgKF7MxwGet9zj8UFKxxs7Ey32VZc1mFQAGuwV3EYCY",
  "key11": "3DfG5hnov9btxbCBBxTcpbEzmKTgkzEF75uGQNwhHci6zdtheyhfaCjdZKnZnQehnvSHad4YhNacUw7gTTmT4dJT",
  "key12": "3RmaomoiR7wgZCPxf45Ygwn96Fh8eDBb91r6rtKMXuocxRvji8DxXjyCUnAoeLVJqg1rvBx49zVcaQoUVxxu4Myr",
  "key13": "5fATQCi7GKSfP1WUyjwSJrr4GAiBMherVcpvQACWQLod6ZFMpqh3yMhxTcepABN5p9qBRkr9tsb8NfFMTtgVtFfc",
  "key14": "2KZFH4sZnKLp2Y9hjatxZf1KsCJQVxwBcR2hqBPYT4By2n4R57m7U4YhQ8tXvcYVz6nV5JzbEoPw48w3PQU8zKiN",
  "key15": "32W7kBoEeQuxgYGn4WBqtDs6uXAyiUbvx4n98JFFkUvt1Kd89G8MhaJdY7yu8CGQPzveiJbZkPNXFMXnhSNMXJTX",
  "key16": "2R8iqzGVCfjFCNGsx5eKQiW2Drbqw8vRLzcCc7BF4UoFfdjn6PLb5VUv91tfvvkZsPTj5GXz2G6qeZHMu8ccUfZE",
  "key17": "2eZ3ZjjdpwHT73LEP9GBe8PrLQbTXwSr6LjjC7gNq6ymCKk35pAqAtA17AG3gXD8g6bqgABzZ53ty2pCTktzfJ9T",
  "key18": "2hKKBdoccLh8JbWMpkkg2jsYrm55GwPrnY5supBGpmSpj7XZeV7fC6ow1LEimXXW9VKegQ4rAv7FeHZCSgj5MoX4",
  "key19": "2YTdNQfVLfiAg1NpZTUs9YmVLQfy4Sf5aKAwci4obSZ8rygSR8NJx9Em86mojqd7qtzesNs6RU7fcELurCTFDkbU",
  "key20": "4StPRJMZxhMygvom5pZhefCvkv9bV6jemwrHDZeJimpNXoR4pobS6nmfgBMSKW6hnqBYL9rVvMYeZ4RsoFSCLzv7",
  "key21": "MAYMzHnvH9JPcQ7HAqJA2CUPA6xLhFo7c8cWPgYXYJEzfL11mkLiWKTLJE6AykvXFeysGE67Pa3u1cB4VNKizxh",
  "key22": "51svsf6aubX4dyWjfiHJkNzTgwtgrJhbHPVa7oVhXeKJUWXKC7sCeoCTfejuWMgwpQYZRWkj5kHHr2Mx6VHXGDm",
  "key23": "3arYhzEU18HBat3tsrwh2ECL8W5nCtC7TpEFDzxC54yNVzAaN11Ca5hGHv1kC1ZdW2TtuhZWQ7RPMZdz2GgKWZE5",
  "key24": "4VjyZqGEVNm1tbjEP4h6v2UmL45KMVdLXbY4FXHCETYs1JG8RZo25SztngrArUoXMdNTnWG3VJngcRtJ4ukR5AJA",
  "key25": "2VMXfWmCDbVh6icWqCLx62yQQ7oXz2XUeqkxQ9WNGhtrYgdB5DkAh58qgwjS9Yi3y69QLhNUvprF2tyWJ8EXbFwz",
  "key26": "2sexuCGuCSrFKPo7XCg68cz9N5Ab69MyjkeJzLjqGjipYwRLvyewjaTm1N94KTw5Hvr3P1SvXH4k1zrLQ79Eb1sF",
  "key27": "5MA7gc1QumQJTN3BMqod4JCWdCsApN1R2Vgx6pJiLHU5L1Zae44CxXkRqS9NGPDnG4zrqeowUL6rFTrK9k7ryAg7",
  "key28": "47oaZPpPbrTpoZSdV5PNUwD1K62tFDenhYRGDgBGip63zH2kpvQDDJvdVwGUiS4FnZH1jXtvo69mtPXvEWTbj8Ar",
  "key29": "2hDvNKLnq6a6zHmcrHw8DYyLGuEBbejWGDgS19xzFFEh3FsdofA1NGjNS2dtkNWUVDKAoE5aVrvdC76fD5CshMw",
  "key30": "31KQxg2bRg2hWfvA6QDstMMsAqk8nHFHcU5yineEGpR89TDambYDaf5fPFT6LtQ3DszNd2agPyuyjmKmtfgDSfDa",
  "key31": "2p7m8J5BENDJTBR5LdE2vBN1cmkSa6jsHk3iieHQFjYkLQ8aYHGGuJLWNGzD7hULCsMbS552wtygZAVynDomFtKz",
  "key32": "5WwVzgRC1g8UbDiYXyZJs2wDdao7BjLjqfsdn8G3JJbNYnL3hHMj83x9SU1rPzCJRjS6xv54XfeZXySdf7zg9Zdf",
  "key33": "5NBzUEGtcnRgpsvwET8PjQjXRfb8gqW5DfKtagjEeFyqKooNPWpYNrMeWsPX8SHihhRuYswQEDSXpEJvH7gdr3uv",
  "key34": "zQcZo13wdNHAc3QLtrdDceH4uf5S7eLnY1wQN1zr6HqXuG1k7xy8uv8r138r385PvRt4sVEii52LXC6DAts3bVs",
  "key35": "63fRXh8Ag2mcz2Q2hhYRRGb9K9e44UzJXgg1bF4EULkkPV3dBh3YgAfpCNamM3zdyesEZXHUkmiEsRaCCHSUd9QW"
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
