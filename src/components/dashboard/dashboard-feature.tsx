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
    "3c6ikxFbG4qxNNtYryD8i6Wy5sWuHX7HGnjqpvr3kRng3g8LresVMo3teKx5PpW3Q6qcqbvEqPYysmjyPWna9Us6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uCcKSynGWWhh4fD8Gircyh4GqqGvtr2wPYtUqWTqFxv3sChfxMaDDbwRe9Zvne3eb2LQYGhR1xFdbd5DjcknKgq",
  "key1": "5KQg8p33NCQMYiU4wbigSXzek4DZmoT18jdCsx7s7o3rjMHZHiEMZjaZJbtPnwCKC7F2i89dTzXSQHV3Bj94nUED",
  "key2": "2SmqH1Z3P9xCHrgTorZ7b1bWTUjSxh43Pa1G9ja7kYP1WTEBs7e3U3iwgvQwJp33gL8ALy1BwjETCeXhmfPxEYXj",
  "key3": "28u2Yb6U7HuJjoNp4Zu8vDCeNCvbNaYavoxgaiSvBZHy5JanaaHsrTYURdYVEvGhUiUHnbYHiYhdLbCJDeGygTtZ",
  "key4": "5nFGGfVdVBVTBuSSm8uNG4rrETou1iTEXtqqN9LkVZ8VygnKJWDxNfY6LGUHPirHk85zqPfSn9HfL8PFoS71MZV1",
  "key5": "534uNDSzk76wMrFaEopuyWjA2p1zW1RfR7xiAMYNLWBhSVrTMx8bq6eSm2fyB3xPc3184UwyU2XecssZU7avfyQJ",
  "key6": "4pQPQijZKCQSKGzk7FXeVBWcPpgFPQnUKVDhjmFoPixCqiu1bfjqkmLsTXetmwc2VLiz1rhDjzpTteSBrD18y7pX",
  "key7": "2tGnHV5GBQREqapemUEQg3BX3eRiWubWQ9JmeP5YKWZQtYqDJ1RTKf8KVHXKRXfyM7nZJJ4QJxdrkdmxasxa6XZi",
  "key8": "43pjTYCDdVkYBaEpSRCvKKrC3s57osUKHEAkfRab93dLBWH9WCcJ3kNyePiK5DvsVSBzDiShJm4TXWo4Qy8YV1yw",
  "key9": "5jm24YzytjVyzibN44vwtzyYAzJACu4Gbf4HaLdgRWZme5imzQ1TBGoNq5WGc2uyn3iSyAYo4SHDtSbMeKMeyA5L",
  "key10": "3nJVtNwSVAbGd2pAC25hJ3Ay9jb78oTu51URBA9yWH2DAbTjHn7B9pzHE2DUEbaQpEcSD7cvQ4gGjusQgGz8YP3k",
  "key11": "5ZjEGVgeNhV56iAnr7dvKnidsdZuf1F5wPQnSFzAbKa8m13D2S2Q6x9Fkp53NftqDKwmkt6MXdZvi7uJ6JNnqNor",
  "key12": "2uJU1gCnuWJ83LrsYx6d49uwHnwfAyUFS7cxiJ52gU1ufPcEbdbNWNEeFa13ZjAxD5sEwV5uuy4HjUG4YhwMrkJA",
  "key13": "25wD2q6Pia7r3AgpA9RPdc6Rm3sASwF4BYKCmgCVzEfSzwWr3sv2ciwwVtEji6UyDojGF7gsB3xkCSgH3eaKdRGr",
  "key14": "xcFuBFAfx4KA9K5NdrDtN7jfUapq5PQ4LTT42YzxVp3sqjR87mkT7MJ2TF73pQRqt8CKancwKX6o9iLswq9SkLY",
  "key15": "3UWV3AxbjJUJp48YYq7BypqgxZDQ7uELVkRfAFzfLpRArqBfU2d61BdHqyS2qwLHQa3hVg3ek5hUKi7Kcio5vNtb",
  "key16": "aBbX5adLLfyrpTp5S2y1jkFJsq2miMpzTMweqoxtAxRLE13MgH3ea7siA8UGevmJ1zMMoFYwuvvMB98caQwbJFa",
  "key17": "5eUw3aEFQQTrQMBSwNsVuRoPvQt8Bf8ArWBJ4mqXd6d6sSjkTALdeJ7ZRnYZFmiMPo4YDnxv3bptNHURKccNhHmi",
  "key18": "4xLjYkPoB4icehuwXyaPJhQTxp6rsCgFwDnvVxF6LD3ikEhGKMpk3LjwicFxXTEq81bCiCeLLHSbk2GtwqgJxBSY",
  "key19": "38BLkg16mty5pfdxAXVdPeWHLhNv58CD8fxYj1UTLqrzJDGySk71Lvjz4oX1h9xdpmURoGGaDxuxKkRgAHJERUDv",
  "key20": "2QRZr88AwvyujXqAGb7FNnCaAKiUML7oCJNktfCa5i8Rnk4E81b8daKDv4EkQ9kxKXsL1NYfRzqYStV23cEsHoEp",
  "key21": "3QLjA23tzp13cgnx3665zM7oKy3xZ7QqZ4h4Jsax1sVQ5iQPg6ic6FaPukSxdRcF192qxwU4CAcdKV1n955HJrLP",
  "key22": "3vKYtsGpXBiyDT8GdDRmEGwP8MpvA5WGoZxbNAmtWUWDJUuhtjzVicvSzKrynm4bDhs3zpCNDm5uoo9tTfHcNgKg",
  "key23": "53nSpgfTcLK5V6rS3HTcrUbxaexX8qn4vzHDGPqfvzqv8K5iteNY6Namas2Uy5mg9DzL6EqNE3ACpuyUoT7UqArj",
  "key24": "5wZe3ATn8HC8yfdVmMVYUjmdJM9nUPaK6nn5VUsAhRP5KPmToW8CG7CJkmmj65ShNSXD4Vw7Rtqgs3nCzBh7KwP3",
  "key25": "cEe4CFSAHYbEeCy65bdyKTK8nfmr3gHRz7h6uAm6NgzeVBqoGRxCBmGW62JgJwHNbvpnNuBfoqw93jJGSuRbFQj"
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
