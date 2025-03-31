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
    "5a8AoLTt6f8ePPwNKTiAdGKXm1pB3S9qedAbaS1CH57YPsz64HhNStvsDVAFJxets2gm5hzEK378CyxezCzpzh9K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jrRSrErWH11G8AMFpUm64RuTyo4HwWNtVrhAs7pYqr9U4LTd2DvXP5fwZB2Nzzi3wzEqmxVrZxUotsk1iVuqCe8",
  "key1": "37otodnaikNzZzuru1RmBQ2cDg2R5F52pFXJyBKYzAz52a9tcu9Rtk1ZDdPSwX6jg6RSFGytdCCdeNzZ74cTJJWb",
  "key2": "5ZR359RBmG9TucngvbCRHwA5ympeepCruFLuKFAEVydK6cDQNy9HUNmsLeugZKDfRK8wCXJEC8fvdQxqADbXkSrp",
  "key3": "3v8n2EU39Ja43M9FhwJR176heP8EquomT4VB8pe1fH1dBvHrrtkxXg2bMAqpxscEwiS8PSP4Q5vazfSnjr8ARDgn",
  "key4": "5dBNm4jdV5auvU5iqo515xM1X8BUqkLHiwaovcjS3bKXVe6yAF5PRHpvTizPzrQvaK8Sp7dc7V2nw6cs88Lp51rV",
  "key5": "53WjEJzUtchXDS1cKezkgFo2m34fW8p51LBRBqUN6CftfyUxMZggJWjwsd4DsZEXCwroaataGdT8vG97Pphe5ky5",
  "key6": "3TJThj2ZDp6BENQB6qawhJmQrM6UUTn3og9zQfZLV4yVBcsWdMr2uxNDQKbFcJ9FVRek7WFEcsuRk4rLRYsLiK5j",
  "key7": "47LRjziiMktN68F9NbJYxt2i5LMgkqsYHaT6yXoDyifUb934XDVbf3BxsWXBHsT4xBxBgRixQVPRYPxooWsAhX5R",
  "key8": "LTYxFJfe34FBybMoknotMNK1WrsTLrmYXtkrYc4LLRrzukCNeKUXYv4VmQaZUjMNg1kbL7jej7jTXeAAXhqkgVo",
  "key9": "2KT2KSuSFdNA5vdyazCCoXWumnvLqWfn4rGJjP7z2jp68LafPyumMsZzPX9JaVhMjyaNAL6HRGCb3qYntkX4upMi",
  "key10": "4NsvFW85KuNxfW8bYn1xNbhLMKoZkw13h2o7fSymmV4srjbRcd3D4NmT5gYN8KyxUVUqXcT7yUDFNg2nPgVZbYdV",
  "key11": "5VfeoHUhcUqgbXfmuU3gdhd8V6qDrK2nVBKy3kVNvkNv84qx4CBEKffUiPG6Bukrn8Nh3HgLuUbw88ZudRjeBaeM",
  "key12": "e4UD8hY6EAAqgxSAUrs55zwfdWr21Xtv7irtUBRuTh47xXddxhDhC7bY6RnpmnRrDvRhNDoCsvZm6Krg41U3NFe",
  "key13": "59GsuPJc8RJtqYhmFbCht2fj4iGgiXYBfgpcnUWw7PnDsmuaU7AkBepKMqUpvC2fZ5ftnHMFoziGCJrTbNxKhvgz",
  "key14": "3a2GEqBHsbc9VfzsGveRnXZYMQ68e74wxVod992pNZtQQCEcuNZ6L5HQZJ9MQbHXX11Dumwtau2iUXdrmeB9ijYY",
  "key15": "2436oGmYo5xEfkNvs6XDUAESSxccuXd2j1qvc7Nqxinedi3NDjC9mLzcHPwp3ykFBeAiUFSuMmDC6ZcbjGStstzH",
  "key16": "5DQs1gBCXLTjZYrwnoj1im9GmkQikKP1PRREy1RMckdNuG8viZFBzHdupQcvvXJ5TWh8TBfhzgLJRrUwqWCwq1Ex",
  "key17": "estLJFfRRXaZgVwGJzENznzYY9UZgudnQtB23AKchg1iyWfvuXLM71GKCtA6eWcZxw4UGna11o52vvNBTmXcQML",
  "key18": "67A9p2xkaLQqnoigGj1r1KNBFZQfHgTBWcKAd6cHnRokk2UUCCQi9HqWNAJRhzH3ZrJ8NPbK2fj8uhxGvTSnM8kw",
  "key19": "3dscbJcRfgQaktQjJxQiD2pawWamXS2N5DicHe93KVZu46U98jR56r9H5RVjNrys11LicaExNqMmU4aahxBALVpK",
  "key20": "3TzZjyQpDKyrAv2Hs1WaF3bF789vCXPJxd3qfVzk52FMM9iuaEERJXdrkhnYJo3outir5Azf3MuczBw3eFJZMTAj",
  "key21": "4frYEqixJGs4ivSKCz4VtupvSczV7duyJJgZoQUBgcHeo3cBA9utp2D2AUtKtU7mNioZm2bX5w8ixnhfDzWUCXPE",
  "key22": "22BFMWuctGtWErcMAhgEo9iKPuxYRz66iwzEUKKJ1dFYJvRi2rmANYB8sTTB7m1mxEokrv6pkgXgBiL7q4CNKEJF",
  "key23": "4dw5x9AcjaxtPXd5qUEAWRFJ8DEZpoNezD6MHcRSjCESnS1SU9XJ6qLowbpLBj9rHQh8MS9NZksmb4VNN6oyXc3o",
  "key24": "5WNbJFrkvFwAqmbtmCiSwnqCbeceHXS1M1iB5BptushYNHv78zYDxo2PfuApom9CJrQhXw3hCFgQiTs9saDXxZDc"
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
