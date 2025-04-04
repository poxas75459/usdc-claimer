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
    "ATqsgNRyQMhfon7bi8wDJRiRs3MJQykFkvLtvCFzdZgzuwBjzaV3n64XARxrBuatjTUTWMvMJA5xqEibx9uMKKR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eq8fY6wpJN4P4zpgwn18SDvbs7yr7VF4PzLyUJTGQJYuKgoZovQFevW1X636WeYHZo1pW9kYhv9ovjeebZRCqVS",
  "key1": "2ZnnrnG2oCx66RNqrtTUoL7Z45D4vMM5ujYahpKXvZNvpLAs4rxQdGoNGPzQSnUydqk4LPvRQaGwGvpkJ3r5cZV",
  "key2": "NqaNQgU5EdxybMZpnop63n8htHzX2Mc7ZFXrdGpsyG3oL3rg6fsyc469ueUrkbyjzFEaYZoYfc8iYZTUk9PBfMp",
  "key3": "4jSXS5BrcbZBN3M3C82JdqQonJ3MpUBFJRYhTgn4zGQgfKTwbXTKQf7EWZwFmr56zjKBRtMSnrUqQQee2GVYxjHE",
  "key4": "5hTWBqWg64nCH8sKNh969oC6Zv13rJXcvSF3nJZEufDwEPBsttccyufyeZzyQgDKTrXTZoE23eMvf3h6JLErBT9H",
  "key5": "5vGA1PTKLoQAvCq9RRzej2XQGaa1oMX5ahsBEd84ZEZ62Tto589jK9cg819nc4awsX3PFpBE5sGiLFCxAXRv5eeT",
  "key6": "gKjRFpiFeVtPvoZNMvTDxdPmiKq6ThJXQNv12SW3UHNeZYPmWJvw86hA6BUbf7kjPsLtoh4ceNaEaxjeXqkxmUK",
  "key7": "5vPF3rpeLdS2ZTsrUuu3RnBahKs4WQTQYEuiXrQTvjFGN6H6gW2UQ1FpCgPzgJaBrQVSXKEA5QhYxixgWmptXTvV",
  "key8": "2FahvCtHLLdtAQG3db3NJdPVQLhifABasrsnC6PhfW6xYzhMdYdSXpkosVjkyJxdv9Q3NNVLK2zWCYXoCyCvTaE9",
  "key9": "dR7tzZLxLAFjjNwivHzzqtLLn5qmAwm4SNDPNviLz2f5BN6xy2qBvFUoy487yeTA1Ai6TetpmE4Usj6sda9bHd1",
  "key10": "2TkPUhcnxEdmQixGcuMBjUHE5C2jagBveCyFXtoUWH7QjqY6jtMWteaU4HX67fqjtdSjckDn3rpCNfee9wbtfLp6",
  "key11": "3H5b42LHQFNGmJJZnBTi2tu54ANkZw45Aj5VkeBeYjd3jSzswUE8541r7FKA64zq6AJhqnTc5mL8cFzqckr8ha3N",
  "key12": "4V2A7rjAHmrdjahgV9vNNXAfbrDJLYrCaJXpEsVcri6fgYs4QyJDcymJcY3oZhyjMVc5PnyStCF3Hme4EtFZ3TPk",
  "key13": "JFt5HfRVPK5iSxchznfSeRLgmwN8GFN4r7nDTawZapRZj21CUtwXdqMjwJMbFwXFrkuG9tq9nLXADi7S6eNMzJr",
  "key14": "PtkWDCb1TyY3WmYrRffz6B8sgqKme2ZhyYTZDy8W9xgNGPvZD63mDngA9U8Yx8SMQQt7gbkzmkeQUZXMvee7puu",
  "key15": "2ygTv7DVf9WTfsddtHYJH14Pn4KUNtWiwM684fC3DQAeVgupYNGe4rzMnt9dAbhDmsfHp1iCqgLUmmB1yGYr5EFt",
  "key16": "4zYgMk7W6VPpyUtfcibbA6csB869qtMxEf3G6MkqtMcWZmwgNrTYXxnTDz1esHYVKKsWaijkBorVeaBqpFKxuiJQ",
  "key17": "5S59De4PD3Juzw3GTyfgqrp6ZWULrYiU76PQbnAfyMwr4fUwVPb8YPEuER6tjQyodd41uVzC2z1YKauDU4UvpgRG",
  "key18": "2pbganu5r2LxgSmPBd14PZebDaafa6JhpAvzUEUxYRiRZY6TzCP6gQtJ52o2R1gbkcWxMwuc7BgyMJGDRpErAvyj",
  "key19": "4QuoxYKkwViP2Hr8TcdTUAtMcQqvSqkyeEZ6e8DQtQVC3MLpRE58WJGbLSUMPppAUkd31KU6xZfzk4d2zjknqo3k",
  "key20": "2VdDZhxGPKttJ848vLYf34YfRi8HDkQvFZHVEu4NPvtbXnAcoDjJi2q3b1uYkGzGLadNrLvtVeCfQBd2Pr3JtDcA",
  "key21": "5QHJZcavkaMgQYtSRpypNZS5XZRNUcHoGRCZJJif12tmdMuUvJVQxfPWxoDH2i9qijPMfitGqkcffP78iDFe5kQX",
  "key22": "2ydZqRK5MXk3NVygV43wWa94tdxzfzMgWxvez2NsUbE68RDeLCdM3yGqndQNqUtdx7XwpscYXqKxEXikSyD5jBSf",
  "key23": "eKAtHyUEp66QB5fSSovvVUjiKNFLegYXPYSAdyWcorBEYU8RKQF2uJ26TPiPw6SGC4apqTtKYUWqFyfG7uj4uwA",
  "key24": "4d7S4gBpvwej3nyu5oa3swVffBhNUHTNzGBRM2qWj892GNVr2sjdzGrqLErw9jt97hrLmJEudxFHYgkoNCCB2hsm",
  "key25": "4QDQP8p8R3rJ5p6M8HFk72kG6bmkzVmbTPCD4BKCxuHHxWL5fV4osqDU5uQjZrbV9vUdn2E2UYz55vX3SN2oKHev",
  "key26": "YGYhEPXLs1b7rLVuhd283dCgvaFe9UVK9DgSitprZ1S5Wa937qqVbMZMPYao1Xu61WvvfpUZFaR6AFrzsNgNHyf",
  "key27": "4sQacDTv7yiJ3CBJvh9PrskrjeXMtMBywTK9izczUDrVdW2mLTPAufmpWGztZG1dBNVMmYMXNnQVRrZNSXTX8kkP",
  "key28": "5oCWAW4HYmJTyGGFUPVLHxYMqjEHuX8KEsdAAqNebpqtNixVqtbjJ84uE2o8CNoM2ucG3z63tPjkEuam5jHwHj71"
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
