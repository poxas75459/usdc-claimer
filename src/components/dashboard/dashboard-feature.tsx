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
    "2HtELBxUYAZxeub66RYrSoRwurvDhPXmDq2bWbJJFVhHNyngcQDW8o2BtGGdGGyZ4GKZVEWYC8wiM8kzT4PJYktJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cbxvAPQFDspEHkSKWJmuoDJ8S7KbvPAsbf9BjF1Q6K8vE1tNhT9jjF5nvAGdw1CLvFd1VNVRYEiWt38T4LwExMy",
  "key1": "txbFVvSjCSbGdNqgtoqHrCxsqF3AfUFgjfw56kjCJdNxPRQeMZykasBf1P3C3EcwKLFgjZTxeqwQCFMWEdhfk4A",
  "key2": "JaC8HKvUUQuVE4QWNZkGxqWxMByYGePeyc1rgmxZKSpFjo3K63PHNKmDpryhUnTDsHTAjuZ43dUWR4x6ZkV1Am4",
  "key3": "F7tbd1pQ4C5N36LYv4M6UhdHdxFgRV7Q9yWw7BqHRLjvXiofAc2q2Zi57CuHX1uNcPScoKmyEfjAZ4T38P6h6sc",
  "key4": "2mySSFxa4c3LcjdLTR6J6vper9oqkcVwjq51mxSL3v72uPMpDPBuvUpmPwi9Ar7eVjs5MkhwXqhcwe7JXqaKQ4cd",
  "key5": "623tUWgihhECRDJa6mo8fXEBpqfCjG5LU7xGqVSG7TJZL1UbRqWdX68CT5Dfpd9QEMh4PVDP24jGPJTZtNcSb8Ns",
  "key6": "2P7Arwu39qyS9bMzi9ioKtoNQrL6YPmpKZYoyEsXzFpqwi6atTtZSwWGispM2mLbYdbT5MzS6eSyUnjsm8f1Av4a",
  "key7": "3CGh8FJzsQ2qNXX7Yhdm7heTe4w29Xqviyc4wBHJhm6ZS7xvrrL9nzuhaWWeDxcMwyr29SUn8cWyzK5RG6LZkHjq",
  "key8": "R6aEbTyG4A2h8eJY5z4NsikJBpX18zwrFLagxi7yyJJddqiAyQviahkHwF2yFN8DSy5fPy87YmkVWWFP3fapLWt",
  "key9": "4Ki8GSnxkWKy3wXmGtStLj5swEMsE3ur5CAQYLBRABrFSVo6g4oEhFhb4QS18aaGHeLdUvdgAHH5XsV73bYbDqZ9",
  "key10": "2ng9BomKLrLfoyuTN5jjbCmtymigiMBcD42vZWmTShr4TNXRNr3E96g8bzdxFWiv2hvJd6KWD3dWjXwLRQCkbvyv",
  "key11": "2SWXMxAPmLmdvgN6zhTw8mUUea2PdPRYNhTtgbYfHb4cGTSERgLUyM3H2yNkuXB2svgHLRJk5ZSGtAoiaepwCozf",
  "key12": "AxStv7gamTRL4dptddbBPVqgCsHimL3rp6RFPQLph1g3d41L3n1VcPUuHDndRG1Z3ZmQc4rUcug8PbHchhyU3Sq",
  "key13": "25DcQfYKhgLgG8odfTv7w3WpTLyYgy4bXxznRjao6KveT7g7T4UAnj9NbbcK8i7aLspbFoZ7de6gXUANXXtFtfuC",
  "key14": "2rrtAKM79yuNQFcAnzMnb99neAXxKTkv5nRc9NKAFRoHjjb8TZ8KKdFAFXs4uXWnSQku4GagrJh9hHG4EVzNvN1d",
  "key15": "8rx3TeuYQq11FFaoqzqAkTHUWTufXkKKNX2MtSeNT19znf9cP8YLgpQZ5ebeYR2F55JMGXvsrkhTdfoB44Xu5ge",
  "key16": "5jjqV2qddR3v9rZWj5ieACGExG1xnjkQccSrz3zcLNy2EPjex5KCRZrGEsMD8zxf72PzXTwPB7T4gMJSSyyCVVFH",
  "key17": "4BGKSgXZYNhhgUAf8ZxNVT6hwwS6zXBVfKkCnajU3LZqiLHasSfSXJKwQShTaeSW5tCfZaxdzgrKWjRdeNiMtPMp",
  "key18": "89JnJRrM9rv8jtRegN9LdKq4nunMZnAbnTpS4RAXCZMxYNwPrTveQJRNkSY3cPYzyGtr4SDPDkGcEAwejDYc9tE",
  "key19": "3g6NX6hbXB2wYSPJE514R3Hs5zjJxpctG1sX8F3pYFFV1JDMfzRMHe8u4GV55uP7Xhb2SrewSaXaHDLsD1fLp5NK",
  "key20": "2Lxy85v7p2qZm9pPkcrSL76K2Z51LMZYCcpsax64qfW99WP2C7tfxsozMoRiHTYqAZXRAftKVXhSXhKHXpwq8tyC",
  "key21": "F86ELRM6H5h3f5hdnw7MKdGGtpeDCuQjNhVm9TLigXjyLVzppBirv9rY1HdbagM9kH5ajpomfCA1uE8Qg49qW6j",
  "key22": "2ewbG8t3zEVPxFdPDssf8vvzU7rsA9FLmwhhEMMyrf9NZpoYsk8kvAGY5fpqEcSRhitZ3uPA58U9kCSzphqQwMmw",
  "key23": "5KKWabMMc6cZHranYuJWVnmSdPyFh8atmL6nuemqmnKckfvyjb6CxRfLwesb1cLYzxiuyR5oXsjrNW9oHY7uRDq5",
  "key24": "4kdU3HVtLSiK1n1ZqDp5kPwBABMG2C2CrQog2ApUdmLdfHpUojcYUaB9iGzAZazkLdUphvek91vPzQsGFkcHMgow",
  "key25": "2KVjkniofZUdBL34aYacLEAfSJRYS3USBd9iNyE6ooXqjAjMq91TcNJkDxAQMsc2sTAvtYAESYvsKwp6QzXDJp2W",
  "key26": "26wqeLxDWvs2ohaigkGus31GKsKgZ9eywnmq6wWnCTEiVhUVmAbCqgaBWwJQuY2HzpCLm47sAhKBjEVQysSWvEm9",
  "key27": "uTVtJoLyaF93eWMpJvT6P37X1mTJyGBi16qRjwRaBFsczvPPKNJrNU72xeMBZigx3R1c9QUpWm3FBVNpVesHouj",
  "key28": "4sVcosvXZgy2K6xw8T8i2Pq8NR4R39sNjvUREr8MMbYyiNhnBLwcqdNSXGHshnPrhGBsRv3M2dhfukz68Qymrf2g"
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
