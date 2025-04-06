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
    "ygQsamB5KBCvgipcCM5j8DkxjFNFto4bBNPppBLoniUEhMuQJaZg9HJadw5PUUEuQtX5LPx3XzhJpHABYT8dQyE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZYBfk6dtPCj3CjUSu7UTJocMmuW6ZVSnRgeZgkBsBrKXJD4ZaUugHcnYR2mhTshGHP7ZQEZ1SbEuigx1XZSsN1v",
  "key1": "5qstTAHHdY2VNXpoX7VWA3ct4bCyfQjeify96jRcCCd6G43ru55vo1DSejYeE9u3mmqYGCZ5v3CCg3mUwDe2nYKY",
  "key2": "3jiez7MkYqPV84Fnf8WDYEzpYLZHM3DzvRGe1w8Hxp9gqjsWZoJ1P6drXyyGMdjPbZkm7PfPoUFNpFc2SXutKqVa",
  "key3": "4vbV98rdvstiKUhiHSJsG3nr8isd9FpURxQESw1sPbqfQFb2HrSCipHgT7SGSZjJNSsQQ42faozt2DMkcJEoyyfi",
  "key4": "2LQxJ8L6qX7Pk3f8TXxupNaHRHWQTX2A55eTejhZyCVD6r6HFaLuEpZqdoLp1E6P5Gh29EAyDNke9vndMqSVsqWP",
  "key5": "5AEcedPmL9yXX74n2EV4nZRmhNei1kqtnE5uwgEVgSg5sE75sF7TdhkTod3PfpkqarvMjrVuHN54qWa77jJ8Eo2y",
  "key6": "2GDPfEuXkikeCihGQ2z5ettn7oV3JN1aqd511AAoHjjc8DcsHeq5gQF5C2bMGYCQKJML8GthtLAiJW5A5D7HXrnh",
  "key7": "4yVdzCR7Qu7AsEYbYht3W4ZdbuKTobyUcrHk6QxiJiQcbRtYNB6dXNK8tPetnQMhUqoeSjz39pV5pt6YbKGPbUNP",
  "key8": "2f64PnrS7ee2cEUFjeg4X4nsJckQHVRV6BzW7b2BQXsKAAG9k9Fj7BhTzkAgPUDLCYpsEJPYux32CL5Rj9ETgYGR",
  "key9": "3TEHzvoyKFvuFgMZpchpPbk2cudG1RRfdmjsB9fpghWBisgfNSBo3y2QshDZaY9AST4jLVqdWRpDtAjJSgU3f2Yg",
  "key10": "5zGV3kfWsw6PxgxShUahJV4BNhfR8FbDsTdVBhoJW8z8j8mnW8Coxjy6nwcFrAH9uP5Lcm2k5HUNsS9rkDG449xe",
  "key11": "kFWeNeKL4DsbsZWYafCPtJHq1gteUamqD3M3x6VazaPSnQZcwVq2AaG52mYhUi8iU1SaKzi7q8BEb1XkjZWQ9gM",
  "key12": "3udagfsWvbGctaidQJtahaYgMfhEnxdGVVNGNyM7unmWG1cB6YHc9DfYdytqjMNNuV3Eu4HwwfnrQTWMKcqkGfMQ",
  "key13": "P273HkcQ1sSK4sN9GuF5wTXmHYeoqhWqzK21FtyZRbLxhsb2J6xnAqFMRNFbczNzxNAHK2PVQeawKJZjEVpPH3n",
  "key14": "42E6nWVHZji3KQxHLzxPWcgQXuFGuHnMUSQZRD5PMnVrovkwqCtrwpEM3qv6rHryKVwDFahR81G5iSKw4axDcdDw",
  "key15": "3BGtJAUF73GLEMEjguX7MSnGZWiFPzmJ8RKFpDiBwrkqqWbkLUMbERue9YLwNFrWjyKcBLE537XrPk5RZqPdcRzN",
  "key16": "2Pzc7n9LBfScdtmMsunTnhym1Y72DGZDAbnsTMaALpqvbKVa4oLrTSQpKkQMdrkgwBkRJpqREb3Mmyyt5rwoxdV3",
  "key17": "3FFE8QGfgz6M2BeT63qdAcf2Dcy6zyYFbnRrz3NbyieFeh2bQxBw2z1H36TQgKbSuWDVtFbEWQHL1zJH7aMPZxaj",
  "key18": "C8hYjMvSFpw2DB5r42vbXE3kNwLeFhjRYVZETRSPvATev6aWRA7J46iEVFkkhYt4BxA3ZiwNjZpLEGTLUgKMBJb",
  "key19": "2inZPvwdLBm98wwiZiPZCjxvjmYmN9YVAjZjzS3GjNKghPyXdkWYk1zGpf22GQJuxWLJKKXwCExcWhvNTWqz9u9e",
  "key20": "TjA12mNSfBoS1dDjCBsc2pg56R9Q7VUjdcy4zVStrHoiHe9mLXkvp4dz6Z2jCTxPbKgmXbsoZsUNdR9VcSwdues",
  "key21": "2PD4KW9fVy62CE3Jb6Ya5qQihFRYYabDykPEXjMdwVMnBsTz9mc2FEvjqNx1Ynz1HsZbFPF1qneatVUv3BWZiZJH",
  "key22": "3ARTrQ9Q59EBCFGZPJrg3d1TX3fDroJuMNNHxjHeWv8QNEsQ4XUYNFW2TN36W8bxNi7WwRugW6U9sxjWzEgzZQzN",
  "key23": "2WKfFEMru4EojbopqeWtuTq3PAd3YxB18mjAfasbkg7vjd6BjgjUiVPWaWwoMkdApdZ5mmnZ2pnH55GCZ8gFVFPo",
  "key24": "2GFqzSTrrEJ5J2kk6M1JhqMaymQfht715ke4Ti3iaZufq8JQLPZVdVnY2sDunRQMREuAsampvLkxecrCfoJciVY4",
  "key25": "D1mb4PJ5PQtJRLCG9RFxc3LyyuFrruwHBn9u33jnBmTnQeireMWJcs3r8BedP9T5sYjSG7tjx8SzpMPnU9F4LhR",
  "key26": "26bqNK6jmH7ejQyMpw6o2T8J2NaoMKP8YApjcKNhvsAphMBRxCpEYZ7GDUWVx85QyVyaKLJcDT2UYL1Ao4f5Hcvr",
  "key27": "43LGxC3ZsYRP7B77bYxjBCnba66KgXzDALamjiyEWKuRPqejbpwGGapg1odfXc7Z8D4iFdzz71PYX1sJJPUR9bW6"
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
