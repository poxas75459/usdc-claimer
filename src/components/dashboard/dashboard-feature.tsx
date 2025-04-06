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
    "2vYggpQQuFt5EZhDXRU1gVwrYpLzCJFVsBwTEYUSYKnppERNMWzjwRmQ2HaHi6nBXWBo8H5JiwJMGYVn6yt8umdq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "T4geDWAWiWkmRgadLjiGFjpDmi52DJurKCVupYpUisgYbaBzjQgdNFqqzRbknvFc1z7m27G1m1D1SNTfnKxH8AM",
  "key1": "5xZHJBiVL97BqW5Qm7L6HLc37Sy8QE27ZnAusVrbVGRdbfbqoSTKesVmLgAf8qfYWSFWNQRJymDqFha3biEutJDF",
  "key2": "2RfRiSDLZtRPcKJwa3roKjz8sjnYZiPdSiUd17uA9SU13ffrnDzVFsscq764UvVZR5VpcRefJyMjVSLeqLMPcC2N",
  "key3": "2dcQPjT4sLJg5acjrhDSsqUMdTsvaCbCnepf5th9X33G8WBitStRZmjyZRNw5JmAvyti31oo2t1Erp2Q3v3jabxD",
  "key4": "3UvZxPcUVg9RmTDXoJiR8THmZQidYyB3BetP8mLLcDEZWWhhk1EvnLyFQ8PUvMguGGvkcHdVVNMBNr1PuD5L2XAh",
  "key5": "4pRy8VHFTWh9PzA7ybAXpCqSoZdmqkeVJeAkTNLU9C5Fo9n2CLJQQLnKT7SQ4U4PLhiXPNStVRcHb7iVkaNaVx5U",
  "key6": "66bBTaeeCQnzoREg1nQyobwqiNfNewogadW6mMmuUvQJQhvEcRwGaj29RzZTAag43F3QAZu4Jxioa5AsL45gTcYv",
  "key7": "5Cy7WygDMTeBEWFF517Nf4x8sTtowePS3D3X8p4UUC9vzYmJqgpZTt961RotTDfwxUcNEkHguBzBuLof4rfmZn78",
  "key8": "tiggVNbiyFFkngEULVXUKB4u99G2z9oanAtpXuJPYKKMYcHWXdvq4pz66mgtfH6SKmjNHvz1zsMBBoAFX9EmeH4",
  "key9": "2JFtdQHXKszZWdTNTZ1DhV145wxuzNB9hvUpDWmRBCntsKQJJGoTg7M6CfkeYCxpDn3GSPoQj9PcaYbrf5qiXL5x",
  "key10": "5t2fjTwEajF5TB5FGgURtKrkkFw26ts5XZT1WTAn98kV9eAEbkQ9MdZENR4HzzBumM2WERNSML6SLM1DR1iu6u38",
  "key11": "2cXp3g1jEEtDYPVar1c4itkqsYV2JM2VPTyzdhBuHWE8hhQfyjwLm7H7tKWjFYfuNs6c3mZdu846EvvcAqtyxJbj",
  "key12": "2RhzxRpZdp8oQHRTQTTXeGF9zuY2oQChQ87Ci9dKZ6qVTZFYabJpvNE5d7hy7EFgMpVbJe2bmt34st5xkpwfzG4B",
  "key13": "3J4wcyojsrsK4ivh3MPZ8i2EEdPe13NesfnTVPLfBdn8SYtrm3Cc7NNCpAgfgtE3De5ayyFUbArTtd4NnBURyE14",
  "key14": "2vXiWMx5qkrYr16Dekf5prXRhbredgasTnrpcpDHfHkt9vDStvMqrGS1M7e84EiSAE9gVUPe9JT1LNGumn5XjgDM",
  "key15": "476FYL2JkqtJZDhUAc7P7voY5mRDeM2x6XBEfYMRvriBfcoG4eKD5TfcmR1DqjCGj8dq1d9KeYTdhFp6RB1CjT76",
  "key16": "3P51BsvqFyoRYwb2NMq4co5STYyyWxdnFHRBPkHeceUVW1vd3hY2sZmaKE4aLNcHUUxtvx4MFRYyt2ojYCfuZg6J",
  "key17": "3ys54kz7TmyfX9nosmTKp5nNJ5KppzeQup7puoLsRwJ6rsJtEzmLC4hWGcG2E5dszjvLjHREqBy13Z9rzPdR69tv",
  "key18": "2iw1itDwQW7zcG3pjwXMzauszq7zGrPRhjRHudME25Umh2V9Q9zxHxvkwJWoduT3Pq5Kq1LRwoxmQnZFbXpkygWd",
  "key19": "2me5acWfMdCiFL9L8tEgYHLvAaVy2qS9MpDAEXiKBGixLm9dU81rLNyUNKKC3FE1H8CZ7dZQ2EqW8425tPpWWnXZ",
  "key20": "555ZSdLhqj5HoTxjMxC5WdrCKBvPuX5J2f2in3jyYLN6MziVkAJcgiTgFpvNBgzF5d7YbNccPb42hR1qA6rkijbL",
  "key21": "61yX74hPXWxM8QTYntjrEd4tkRbPt4YhCuKHPDWDv2bSQt5cYf1iVT9MGWejWXZaKMEqZ2z3yp9SMpE4tmjM53XQ",
  "key22": "3q17LQ4qdu7MGhBB1sVfe71RiLyatAb8VPxUhmz1gVujpQFeLfrAcss23hhA3PgqQbxnh8zuF9sKSHJN4vyxBLP",
  "key23": "3EzSi44wrcnuZnkkqVR5mFAbLR6Bg3Uo78GFWGKqQBmeHUQFmQoVonZeBssuJoZzWG3DySt4ewrtjTSsctriALYR",
  "key24": "2g2ds5DnvZ4vpttJ1GQemBNagxVPHgNdgc51DMsrzgWhQK31YuQ4Q7LLgeqxduoTBM2bEEoq5gsoaeSNLwK4EJQT",
  "key25": "x1G1s8bfRz2L1nEA9KrjUp3iGsCGePYpg4btf9CzW1kxC4GEEukdnZSshecdmuQ48gB6DdhAdgNEg5QSjoixpnR",
  "key26": "5Nsunnthgw3Mh7HSVza5fUt9x8mLHtESJGURYdbSpgKJXGQvoQtvhFDg8CkSioqiMwbFiBzDb2tvpPvvEXCVSZE5",
  "key27": "yeaeoD1h79BSMbQwyfSkAxz3YPPYRgCXCrRFDwL5TM69eAoNw9KujA3VQAmdByNCjnmptduzE2XCvkC3VP9SQ7f",
  "key28": "4UAeZ6iKasRaJp6AQR8FuKW7rprNyAVPJpNxFFV2ns3bStQYAGqB8dRuhx9ebbTWp3e41tVwQpdfHsaJ5ZDZXqGK",
  "key29": "45BBDhmZhbwiATMDHkXXtT36SXS4P4ttaqdr8NDSovZtWu4wBHSQ5y72GXkK5PUrv8eMJxbznHKk6N8cqKufevPj",
  "key30": "5DKFhh4tRmtjMT9vRJj76F3vCRbUqpgrGYy1uC6vVZGiRLMwQW4gxDny12Yp9tKZTE5sJBHtYYYrSQjAHByrTMLa",
  "key31": "4LUuced41Hh4ZFzNXsdkNRivJNoizf9c4n5d1x5jhXLaKYRmJstfXzmRcYsfNPzcir9TyNSiZMu1MbwXf8CacoK1",
  "key32": "4KH3YzFUonTdLKoTvM2KYfdptYtiaA8Nx5Ct5TXM7HbYWoQ9XutxzPmypnxZMGqSeGkfgsHXEokdNiRcYmb8FJK9"
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
