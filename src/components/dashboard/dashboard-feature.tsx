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
    "53gnreFV7N9htUvDrkahwXymErHKx5t5TmxqU8DZUPEKW2rrqUB8dNwpoqL7TwHnpJDJz3qQwsgXBoPpY1GPgWoS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yWssfrDpo5gxSDYoGfyZp7aamSmB3TiQwDipc2pv2gCdBwk4fmbJEKCPaTuKjh193GHzDuc3UpmAiy8znnHtof",
  "key1": "4BNe72PgtzJWgsTj2Wm8YJegUhaJPQ8Gx8HZgrLxuuegRW2P67QUf3ADjze6R7SVuEPECpenQ7A8HpTaN1XuDY2x",
  "key2": "3TxiunJvH9NGRZadkij7XNMeb3DTiHsN7mxYn74UrM4CQ8hk8hYzmEur6FnauHLUVrVhTE4jobRk6WwsBJQPgv8p",
  "key3": "4CaUW66gGVWVqSAZSrZseEagtvVu4Jdfh3q9W2PQXZsSkcDvBRm28Z7134aJyLViJ7XXS9uSx1JEAMDxp9GnZvf6",
  "key4": "4Ak9k9yhg7oM9HkMhahhFmHFjExys22gFBUwErGPmigr5seTxqPPXFkGuXEDfHq7Xt3EdXSwrdFKDe8p9AAuwwTh",
  "key5": "4JAL9JnVGwfT4oFgTf4kPX47T52Gq3zJF7m3Bp8CugEN2KNdef2LuSa3pU8aAWnYxgdmQmxF7D4BhT7EuFqMeJH8",
  "key6": "5YJkF6yB3RmaEwDv6NABBbohBaCjy7nPpWKFPg7K6TuxsuRapEvBn9UxoTvVWoZTbDy7mCc9AyDMd3oz8bVooboR",
  "key7": "wi8zFVdg2QsQBmfa58wSGyyr7xJoP4DoTnS2JmjkuNzZPX2MsvXayeQ7D9mdLUF9eCYjYby9a3niUL6yWLQzC9T",
  "key8": "28FshdhhBFwrKv7PMkwQFdA98rzVZrWiRpo3xjh5bjC6nSUJHGxK4cZScfGZqRAivuBz3i7JHMwfBu9f6PJet1LB",
  "key9": "5q1Ne95ert6qfgJJdKr9R4NV4uiX4SYesMYivthFcqMmqkwhURTtF5TLHMDx67G2UPJmDahYF7vpT4bkY7jgbCva",
  "key10": "4VRJrvBbBk7MAmn8AGUPUubU4phnn4wxaRy5jGkKL9PmrhG8addwCc6YmJ9pu14AKE2b2iBAWHejga4Rc9jTW5B6",
  "key11": "4uKXsd2UQihojjFCUo9FpaTRiRckocAox2HMuv62rhimd1rFX4Gz4qWeETw98tF4a6tpJdpn5xnXJYniioqFCJCw",
  "key12": "5FB9grD1tT9PuJ69bbPLqWWmC34Uoq71m1yK1qzycgLmvtvCWyr2P25XGup3FTsZZzrkK7D39JfPcTbGVbPrw7ce",
  "key13": "2kPgU1ETWrRREKEBWXdAtV7c4TvsBFJ8D1S9fdHxb2Q5qYT1fLP8RQHHHb4W2F1jhPGUiEkRQxZN7Z9ikUU6WvsS",
  "key14": "2NG4ob4voywQ8UZoEmzkKTKiuXKwkxyPq5ErnyUxcms9aCa5XBfKyLc1GPvdGdscwxPb1vQCVBsyM7RSJ9p9mh2T",
  "key15": "256xavsvDfCBy5zXGm5mCP9WwX9dVjUQ55L9hHSLiXNE2ZSR8dGarRvZDjJxeHX4AyTuwziV9fiaLtLN6KDRxXGs",
  "key16": "2wTWzXPck3M8B4TyDD72PwHyoAJjXydY3aFJNk1zsPdq9tbpHC6ej5dmDeovxULyQqJfmWURtqAXpVuf9ZF23BBe",
  "key17": "3GGtfRuWr9KCo59Ub6y9GphEE22oqiBtKcQksMU7cbVJVsFR8Q24WQh9VAkNhkMDW1TfqceSx15c1kG8xUdXYAuN",
  "key18": "nVFyuXJPQ2V1qqaqfsD5zkTSmWUic9rFRTepVAgXVoSmT2RvQCTqW61a1LskvHtvgAowQqtLkMpkJLiH4RDFBqt",
  "key19": "5YnogmmxjSfaJmnyDxT9QGJHUJbLPXBgJ4DeBfuDSc3Qc25aaTFqC9zLcumG9ct7JP6tE5v9eGi3G5BfEHAPgh9z",
  "key20": "3buqQUrNke5pyDYYTP8DH9cdUGay5FCKMm1jetLuvmTtXK4WZAx4fvp3PU232r7ZD7GBAQZEs9sEoEnNbnx5JHmi",
  "key21": "2Kq997hDftLqKbQSncw2cejia6fv4BVpNUqcThqTDQgCXxYD3QJBNuCKCf1nP5x9mvya9rBMU4DaLDGQ2xuuE42L",
  "key22": "w53MJhF2mQKcViRj9CCS6AipvMmD6qiwWsjwTBqkTuGgcMLNvZ1119EEQDEk6jYaFMxn42bSxof1Zo1WdVm9A9e",
  "key23": "54cj9zHpTo46wZM3tB8D4whJ5Uuy6EBVDdFrZfWMs4Tp2d7miaCT6zcZyDqPf9VJNkirtX9H4N1ki63ST4QMXRwy",
  "key24": "jdqRC5raAWsEJiYhSri9ywDtfKYeBCuFwqBUHMPZ3RQHXmpm66ug2LM4ktmTY2jpcVGmkLGbUWTFWrvPg5A2qUs"
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
