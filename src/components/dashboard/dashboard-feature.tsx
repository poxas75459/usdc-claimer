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
    "2PRNoRoE5h2eAqGd8PSXp5P8kDo5fKN8BCdsjUoB1B7dQUPkQGjr4sa4j7uYc7tm133eJcvcm9RZJveKC853tdK1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22AqgnkH4pfHXof4nKNjXmsCuWVjFMaZaPLA83uwER29oV7p2VAwmbcoECPRob6S3PkuXdvHCswRfjZN4Rgv1rUN",
  "key1": "417TxaFv2yanJz1TVTwXy9tZMcVYpjoU7fy71Yef5McTE27PfJHSzJEd4ADbnYKq19DhSD6MxrVcjp8JVGbZPVaw",
  "key2": "uieF2mAqcYhm9fa9KjovQ5bEu39tL5EwYHBQXNLTH6YuFesXkvzUYLZ37LFwWGimfMcULvcUBVZErD1AwczjQRJ",
  "key3": "3QU4ZyajEHqihArL2LLVmmQwnNWKecJEdLoTGRGiF5C7rD6Zsn61GQq1S97ouRif8fyiSq1zctFrztyeaHMSaNSQ",
  "key4": "3f5mXwpdjwfgLV4b23DzZM283bDwXoy2a7kSYYa2m3vBLawL2z1eikatmcueDoZpAJ2Gaobu16DwXtL2W7bHCnA9",
  "key5": "2stnemHYvZ24bBf4rSKdXyM4rN6sKeeBSyu9N3Zci85Jw9jMEbeXy21cqYHAuWwr4eEW4QEkqm5X1WwuSEDzt3Pg",
  "key6": "2vb7DEq9HtfTyNxMXKn8E4kMF74PQtfKJmVgeEP4JJ3HZ6G9Qp5cFKRQT7whSZecnry8bvJvvFyp3b7wDW2JnkyS",
  "key7": "4GbdEKnazVdYdRU7txW45sTgmi31cSWiEDXuhxXRw34oYd4VtBf7weojg9E61jBSuofdhpH66fbXkA2RHoNQSpNa",
  "key8": "2q7iRmQuSANRQfxro3aVo9E2j7ugXttMPtyvymVCFxDfXK1LkBKpTe2V8xZBeuWj46vCDNXGp69qFtiyjmEShwDT",
  "key9": "oPJpU8THq4p98jTeR37gKcEgT1S1HW4YifbewccEaD9n2JQFPLnvjdPaxi53CdmqsKZtNiTcP4iwArPn5dNfUBa",
  "key10": "4f4sNqC7XXMTuQpp529RgXg2d1p8t35pxKLU23Z6jGGCLbQR7JXuLvNsqWdde2nvky7gM1xVVbUdsym6PBKRQr9P",
  "key11": "4UtQasaWX9cvGz4UqBsnJ7uHahPJyzHEGUjSwKAvLj1CFA9LvXA12kd4UvJxfBtajhrhT3xXKUTgnZurwXi1fda1",
  "key12": "3jnPxv5dQxiT54PkdPiX4NtRgmmwDFMpqajuDDmhb8XwdQgAESzNyKXJNeumJs9BQFYquGHemKfGbbWjfcLbPc7T",
  "key13": "2vx6QptpnbCCacyMmoVY3wJYmN4XLmb9dxDCLmYXPbLBLe1MjuCTWvCav6wshg1WZSwe9ugebQbMU2vpCbBzn7HS",
  "key14": "4rtzLeDQF15vxQwhvwisxDkQ8Fx4fbaQ4hHUiujPCffFevXobBqQftD36u8DNAEhAJMA5cXDFCpv96ukAwNTcwDF",
  "key15": "UjqWnZkbgHQotQnHwY6dnwWm2YfLVtNG21d7DvT7Exuqx2F3X4AJRtFEC5ykQnXQTud1hRBXswT1Bp3WhGtz53E",
  "key16": "5dMW15Z5UPLqGTJu6aSRfMCwc3hNooxeETpwh3Xt2epwEftt3st8WfkgspBVwoAuorQzM3Ux4zF3nwJzRkzaTRUb",
  "key17": "63mLdZbDU3gCGbK5PDiMVXUUzXEPEDaoXgxjhptvQRrnEopbN1vQAbjUmMB769rzwPZNcYPfkNbnqmrKPJZrofSc",
  "key18": "auzfMJQts8XzfZfR7Mt5W8KT8YEcxGbg3YUbBo61Fm9wTRMUUsNyktQSNHZUnoTmdrS9jFdN2BDHgyfxFfRvA5H",
  "key19": "3ugELtaDdzsdJ9qm3m9hkfJzWwyXaFoHL3FvXHBEdKU1uXD76kzwZtyUWTip5QGR4MuSkKGBZCTk5zbwAkEZhea5",
  "key20": "35EmkvjKQ4bcxn886wsa7PgWK3DPzwagSuZWsqp7tEfWQdzWiShLEVgBP3eL9qf7ENmjQNPxXwDoerYvDTztkAcQ",
  "key21": "vY1c43i1yD1UUCXuMuhGLnAhG3A9HcfyCrfRdBHa6SinCvmuYpcwTRQKFSbYZ4fTm6vUhSt6G4EjozT1SJU2UM3",
  "key22": "666DqvJygaHA53X6CvT9b7qXkPzRmA8cSUGvue9swU5fYfmSWz6hj1qMhW1BSigibji3z3i7UZ3gvqVxsSYwviEf",
  "key23": "46DuCHJQijceJjCNG1deRF9LfULPuRpN1Yj8mQxxwADfJ58FeZzx7zUutqibPPyhhFvuop3V7e64SRHvr5qDABFF",
  "key24": "4xPTUUjCyvXh58Mj7bMyauZAYKs2zwUczJAH6cCCJTopgoYGw6z7nm24FX65NQ26cpvmjvGQM8YbpBMxQWbKeZkW",
  "key25": "3oaAhUiKyJYUpJXR7on5Ug8argbNw1qp79WogXmSAxyVQDQ1Pq9j31HNsrqd5kGEUF1e3ZQSs6zYjEif4Qj9Dxgb"
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
