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
    "56H9XhKLGcPgHwnE4WPZvT36E36AJnfGbyt3w4L9YMw5v9MgFCSUTArCcqgmZCRdo91YYeo5uQPEVibcJ62Jj2ca"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wc94S4Qm9bejnAR1hGTqSMd9cBto1j7ESbLfQFMQnANifZioiAvEp8isYHUpzdtZZHTByvCNR1SSr63ZSJ3bNau",
  "key1": "4AkhPUCo5AK7Kw3a2BAKFGMQuCrjWpA5vU9mFLs5YBP1kdta6CGnGR1u2vGEeVdjorGMt1JDKqnLkt5QXx3aknwb",
  "key2": "4DSUzkZdmtZ6ubWXcpog65LoCTfWTfAX41RkFxsYdMWXSWCGJJEddCbcpKUbUmeQnpTgrThdg2gWygerYGp6Xoi7",
  "key3": "3vQusR1dqD7roPwzgQ6AUh4AkkYRD2pusZnjaqx1yRA6Xpdqsc686MW2YGcEvgYB52RHxR8mPiW68DENTjiZ54RQ",
  "key4": "3XdXgVjCt26Z5fXtdxxf6XByNxTnrmjNXnLJUhUmUbNXuseLZGdnhMcWtriUqxU4NL9CzeBCCNffcn6XZjR1Sxtg",
  "key5": "3aXHDMyg8ZamkrckRaipeP1RvNoU9fZ1oGuMWTGWdDi9aaqty7cuTeXKqmwumt6BsHQ4WcULL1D5cozsaHnqMwFz",
  "key6": "2v1vh1RkQEHLnVgnPjwMupnoeAopTrs23fgFq9JyNbz67yVt7Ef1sMhTiZ8EyyX7kwvBKwmN7zcHsZBcX3YDbPpk",
  "key7": "38FsLqaiVFNvyiZ7Jjw3eWVMfqiuxYbadYz8kYudQ7umxcBq1uN1A6oG4ZxqaK69iVAGcs6vQyQXSLntKKGvYYqk",
  "key8": "3sj3As2BVwjEBAdZRbFxFNCqTDZYeK6kUgwLtr1JHM8C8dRzgnadpzivc5SzYU6x3icUFewDAxykrGkGDvwE27sc",
  "key9": "4S5uoRNQmaYuLhw96rAVx7N586FPpogbRShpugkzuwkcbxbZDkcSKCnGgtxiFuHytfWDqftKABBABws135ZgVo8A",
  "key10": "2uRB46aN1ErDFauuiwNKVE3csCxqbpKVJL1JdYM1zMujLAy5nz9VFGpZoU1oK6DweeFW9VCdcqWXwXT5CSAkuv8W",
  "key11": "3juFyKARPF8vYypaEjR2fFwQy9Hw8X3Zq4WR1WmoHuegwdQb2mNJy2ets8F3HFhWKWCbaaZ1ZEWLoEjGmj9kM2La",
  "key12": "41r8iNC4nG7yCgkVz7a8xxJCcnFQs7LDy1XCQAsbA5KHvYSMRGm3hrodCn4Xj5BzuGdkFCaSeB9PkZgNtQXHV9JJ",
  "key13": "3SKwvZ57HMZQapDA9C5C6p66RtrcJSLoxnh5oRW7BNWhBRwoihWr2JCg6Toz1a773rvFPAPSeLrRUPD63JMURMW2",
  "key14": "5PcmFCucKQTDhzxxKyd1KecfXhdXBhaquM1bvjQNHeyTqa32GmeCTUpKSRRdctMNTEKjN71rE4sZ2swDUKA24ZS3",
  "key15": "4eEZKwFg2sWU4Lbsezto1mxr178KQAiSQpmekqvY6J4zEsng4wXknbyHVjVcbWv9pqFm3B8umLtKio3vd5LCeZcK",
  "key16": "4rC6gKBEr36N46PCvGLwpKY3JX2n2747AMndhCEW2aUaHXsmoFNcsSosQm1XVWbpzzZKxcFeTVDdPtBACAQSV4jc",
  "key17": "4jPoeHMqYE5ckobJSYH6RWoCub1bTh4yXz12aQZiGoarqR72aKTwp1EX2thfYaQCNq52UTnqM3RU82JPHnD33M97",
  "key18": "2rvUJjyPYACeP6Sd8pLn3eggCB46L13RA9PwyWb9XiGjysLsLivqF7mWbqj2vdNyrnhJz7LU7TtZxXsW3ShVVBCF",
  "key19": "CuxjiXUE2urb2gQkefEB7uXqmdCcD62SkBdF4kGnVmSk2D2QuN79oKSsSmZKN7bKjF5YaYobRAQiX5LLpK4gZQJ",
  "key20": "5C3LZk1CKzgGAuYTw2dJoZSYMPLYjj8ykJBc1x1pZSPMx9MiABPkeD47PeX65UbnxtKos2YmeFpeaRQr6z3Qr2YC",
  "key21": "5oVmNLRMRtGb2UjCEA2qhT3Q8p78Za2N4xS1W1bjTu37ZZP7mNofYAjim5pF7DNPm2fCR3PpeuqCYJ9duvzypBGB",
  "key22": "3vJaLTcQYmFKk7iG29KMhuhEiuZQfVbakbwoEChHDvxrYUtZZFHAvYKs13tcPHk5g5Xu6g3rtghbL7Lt5sPT5fpk",
  "key23": "3zGQUPJGdViL9FuUVLJWMoiHDJKoSqtXeVREfn9K4uwTK6mLPjMKerXtmhdW5od6N3ExbSXaQFpWcpsNo5CMZLQ4",
  "key24": "4Dx5bguezPhWq4N2M3oqRJyvaVBnx2XSvMoRjhEjkbfBEW5gSqQUqtNkn74YGY41fceupoJ2haLL6YV5mMqRapte",
  "key25": "4SqBggMtpi5riYQk95QrbsXEzK7RXJyLdFrqYXXBBR92ocjbRHZBsgwuJ1kVY8QVs9VQYifPUmDTfzxJfinrZUfo",
  "key26": "43KNKi2ESFmNdVYurB7gkvTyUDzC2Zc5HR5C2P3xYacKAMjGEBiA2dtwgz8ewKTh2rdARHDiaP1aowcYVBSjyEHe",
  "key27": "2wxhz6GTomeq5DPQQ5zYSqruqSaHga18h1MChS3z8PtuWFjVZuywWsj1NbDXzhk5sokLe95tQJCZYSfx2KvjaHbo",
  "key28": "HK3cvCNfgHCb74ueYRvGGGEBcBfLbdjkrMi8pBVm8cCyFLYcEnubVPnV4R91HvL7Utt4Gcpgxi3uiRa79vC1MS8",
  "key29": "25zfqWv4MA9UBhAsRWKHF3LVUkGzDuAAXriWvdR98LciK27ajVWTPrsCLZc3pcEff4ekzpuyhR9CoNszsimvHzNu",
  "key30": "3nnxBc75jTfcSJrzrjALCQWxeNNkh9Cg78nXLA2BpF7ByVcArsQXyfu9meGRazbZWM1EsCTfxTB1k79nHUifbZCM",
  "key31": "54hKzeLMQ42YB4ENSjjkvWydt9eWEb2KhBSePdhBXQX55JtPfV2sUQFxDoAvg41wFFuDCb7MB3FH32SKp48ccBpt",
  "key32": "53URDw1Dfr5T86Lx8jkkTD9WvhDwxQjb9hAUwxHJZbcuVNdskiXP1ocgLzfzBZ3MqcxoKpmW7cHaVu1PZmyTfzUT",
  "key33": "2H5GLUqMQC4DEdgcsGzvTyUMZsL99Tg49CUNxLWdg4E3CkMqAEeKaUzF72YQVTi4vZj8PTxZrooJrGdCJXX8pxYT",
  "key34": "5rh6Y8etfSPsnAUadv4gJGqJKTXAKDaDCzxwpgMu6WWgJFCbApDF8CJsKEqJWY3SzQ8zQvCEEry2YzFqpV2v3Au1",
  "key35": "4NedVftqLKJmRK1Z8EVhsEQLpnHcGpctnH42R9Gb919g1cxWY3CVrr8i5TagHj7JL8GwRoF9z5xcoUSZY6HnAkYR",
  "key36": "2AKJHBnP2ncqxiu76NAdSi3FjU8bSBkd5sBAATC76xckdhtWw25FS1qV8Bexmj7T4tGbHjUEGFyZMjvsfxubLrtE",
  "key37": "KyFA72UUZJRrK71258tMkSmaWcJyEht2qfXyHG9cQw4z1xXDENk1NrPLcYkM97A2AThavpFKgZb2Fp2DqJLS6Kf",
  "key38": "4N89QyPBKD7yWdWzCWz2o61wjWziAt3sDogr8urnjGbbJms4uxSxacfc1Gt7k6aYSyg2grKHSAUvky9aj4s4DNkE",
  "key39": "4gZ9DbbshhLEkXPXtDQTgWGDWyny1p5G2tuUikBdWcbGJ6KtvQtGqL3zPHM28boXvmfcSyFN5gGSzfFV9nuqAoY6",
  "key40": "4fc3LP6d3dZpcfrXB2d5e2aq4HT2jaSSBQjgeRvbySUqmkbUKdeXMeW58Lt2CoDvnbxGcnSneTN5VQeTMNcbgR7w"
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
