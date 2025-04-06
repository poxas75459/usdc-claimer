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
    "5rJeF4rBpHZ5fdFP56D6eomXWghoyrikvqrxocL3YZYyRu8VtgFXGoC7BsBD6Z2iVywH2UQk5WkNLP9eJN1hfpNT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5S3yLhtKPvVf2k3fax4f5HgQamxkeYUhHHZARHRue2aQTuHcN8e8e55cT2ijKbhJXdgGP6QSvVQUacAD1oZ9whox",
  "key1": "2h3QHCVFjkd7t2VXtG5E3thUgMEavzVtLHXH2aTBLTFeioxXpb7xsuujZDezvU6qbKRhBjWFo3bGLfa5QXQHkY6d",
  "key2": "5WYC4SUk59Laes7UkPHoorZFG6pH1hSgKNQNLyRmT7rcQwgszAqHBKJFd7gfeVZ3RMiTdgooSXv2NB9RQCKvN8kx",
  "key3": "HJPvPNx37WFNr7Jer5vD2jMN56xuFUZLqWcHWHU8XdthGLJenyccBX2q8s5WApwG4X1Pg8wTBi7t11NB8VRyXgs",
  "key4": "4YhMv3mLPRcqCdojRT2DFRT4wQSrqGNjGeRbcUnYP87Z8UQ32ifqKFdUTFWsMFKVWKGvBe3dfFKZba5Ss2Rep2TV",
  "key5": "C6rth7mmbPmRgApq5rBKUJZQs7TwmXxarjhvzTSyBRZ8opHEg1Yy7NmWVrRANLaTKi7cfCveeKmfKTBWJvQ2qe4",
  "key6": "cjbd12RBpREk2cWQiYtPtYe9qGgZqFmt4x4SWimTkNhTtx5xw582xDkW6HeBFsMmthjX3BfQ1S5eEKrbHBHBZ3V",
  "key7": "3XCUpMN7YVJyfAixcNVYZQVTNMmATQiX7xiyMTAoJ3P3ywjWuSHMT5XAcUsGuP6D9gew757Ktb8Cgcu8EGzvcu2w",
  "key8": "3VPFgpjAAEc49ZA6eST1KvYrGtEoTSUeQ5PV2ZXHiepEqrv8N1mUVSUFV6hdUy3A7k9S6sTrqPmFxXg6Kk9Fxq93",
  "key9": "5PFKjJrcT42o6gSbNgwAPZiz13RNGS6PHfUf266SXopP7aKmqAM9G4Q5oPFLXQM1tMUqZmz437fa9s5hNqYLsbnX",
  "key10": "LeBEHsDtijTCsD7L4ivc5RHNYiF3mBNNySX1gJLNzNYWqZdi73ZSmEnorwsk2xs7cgciVp82UbZKYqF8MwHQh2v",
  "key11": "3VaeLseVtwfyVQEgBV5njk9kGFLsmvQvcn98xTDt2MZm15S3ch523HJSpzFTsRu1Q8SzzLMvJtq9aB3XEJ4SxNSX",
  "key12": "dCGTqj5evUBjT9n9TEYSkwLpf4XZt9ZaErGoFqdfAvkRPGCqq9nHo7xHVMLnoetkNPmEHCdjtK2a4Kd98QDPLFQ",
  "key13": "9pnu7DdLxGR2rucQaXTqsvhYiScfeQ7wZZrTxB1fefgTxbXjbBzcZycxQxpk72WVq6tQkJkNm7XrRMakmMbRjdD",
  "key14": "41Kqyg4MgMcwKiK143b65xucYH5fpB6wM2HFt2AJMRTNg6qvxtg6ddWMmf94pYC71j1A7UxFNrTK6kPkAtikkYaL",
  "key15": "5gTNPYdoCAxFcfBZkkiGwQ5SVyR1vBfN3z1LEVZVXVQGvBGNG8yyQRvGEkfn5RB1DxdddbiBtvEVPc9gqL3mgGz8",
  "key16": "55VcwVrAW2FmvMK4bU9nX2JwfrxCtQvs7kdktdsoJgqWqCt7CVUD7dzwLgvGarGceGEHkekD1Ft1zrsDkiHqvkFd",
  "key17": "5WsseQfx6aMhtu1Fij5515L8KpBSxbLmFwunYWyX8RprzTXibDgMKY5YHJYiaKqV5H7CiprKnqTBw5Xf7BE3BNLP",
  "key18": "5ajAZP18GHBG34z1EKqSgqaaV47D1RBzR4UX35DFpKiVsTAKt4aPDeTGMdqHS6DiN1HDEWsSYGbbtPjRQXmKnKss",
  "key19": "4qpmrvUGxnwZ1WeN1PYF4SfyzeoYjyEWS5py8WUzgQykaoXmZGu8DnQBPDraoLHChyaHP7g3Hfrm5BhTenk4xkEj",
  "key20": "2ZBxGCsurj5yJqz4CeasRYTCC996Pbwx6x4ZXhxsRiEsJ5ix73QRYLWrc8p75nwA7eA75k6y6sEPFmHvAcxFV4Xs",
  "key21": "VhSTjbvdhzAxPdvGbVFC2oTKF6rTmtoPtMNZfCbL7GA3z5HKKc2bKLG9HUXj6fHNKZdXtmUvGQhzhBMxX5zmQ9J",
  "key22": "EWeHFBD4dDmdYEQiVwezjAqmRFTS9kmsP7XP3oZZD8rUjRbtjYYsqanYsGu5733wXYdbKoSNfND7Q3qRLGATs9i",
  "key23": "5dkLx2hdPMSmFDqXYuJXkPLtzRCvXtbzMCufSNzSN2PveNCqYR8NUWXmonfTJaCo1uZefC1M8nK3YX9wtWwoWhq",
  "key24": "31M5oGMkus6tB4iRfVfpsJ8hLPHx2cRBQoLR2RdvHFUF5o7yDmFikzrEErfV6M5zg7Ar3JQusJiaXzcgr4DfGgNp"
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
