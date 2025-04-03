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
    "JYeuF3gqqD5FBQ9acic4ec3Tppvr46ZqohhkUBTmm5UbdoakmuQUDhcv1keixr5WGgGRJLtwKzw7WmgmD4oASjf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51nU7XSSCvMTmArxUzLRhGE9NLtZBWQMR1CH3f3w4S99aY1cLFdTEYDedNzjJmjSMTo8iRGYm1mrJa8JRRi7xzuG",
  "key1": "vyZvZuMCFRHWXd91ddxBMiiLao7zqkTXhuL7Df4uhE6B5Ak7TBpp7YrwHNyXidtdyfXu5P4HKHu8shptKx5VTno",
  "key2": "RzdzcwyC7gkURj94fe7hVNeSHtApV95Xvi5uTQWMNhm68TP9zwN9dLpFwAdhrJY1qopcaAMWAhM2AFG2nkyZYsC",
  "key3": "579mzeuyVMUiHYu1HdZeXv1z27nrqEnvDQfJV5URYRmPNMHzzRKHgs97wUEsx94EoyXrtfmzUfgNBnizwA9vGwhb",
  "key4": "2oHewRZE6td5fiMHi1xwSwvmKvoitxmtP19TwtRPxc5h5kUuwLDT4UsofXe6qZHHsz22Bbchkdtdmbcrh7YGeVyb",
  "key5": "28eL6W5k1qer7vRVJPc49J9NzY3eHcc16T1J5NU8raLzcJ8SHTJbuYcrEJHMNhPranRaEcrza7Pipj8W8bL3NVwT",
  "key6": "38yvvGYDMo8PbTBqx7PwdBoPcmdN3yceXY77Zw2NszP4JRNAP5qrwcy9XuNMtsSuEw9ZGaCtoqdSaqDm7aw9BwGc",
  "key7": "3onWTHfU6FBrCoSH6TkFgDFyEHH59YmHmuZPCk2Hd5QctE8Ad2XSDVeS2daEFv7Ze15Gs7quQTiWpR1BGT4nmfeA",
  "key8": "5hDV2cK6RXM1dRs6nYPLkXaAKBaNVkkPZ5gj92fxRucQuXAeS2Surc54DjsY82SCshYwqVbSnQVtu71XzGVgfupj",
  "key9": "5KAZv1jXn5YzFu8rT7xiBfAYuHr3v5dwi5zdnf11PtxTZ6V13bYTL9GjH6NeEpTQHaR4jLR3jnTMCkkw6Ruz3V7Z",
  "key10": "5JLR83H6zLgwuNBjBYX5GRMaJ3k1T3mUNUsNafbvtZbGoJMHjHBChhYp27uaeR8xMPT81c3DSxY2B2EHyec2zPDe",
  "key11": "1uuDzxjnZWG8fMPYsJLzyrNdbCWDuqTCCHa1N1n5Me8iS4TRkH4xqKpsyhUsorjSya7AYHwbyfgZ1EbQnkXK9SG",
  "key12": "34SfeSU9L9Sd3YCxcXFhpdZDYgd1w2d5RKzNHMUikM92xMKs6N5wKsJ7xnkSrcZYqfXxzGeFQcDDRS6i7Ysphux",
  "key13": "67M1MoEpsAnM8RdUU2RyBBGyV3sf1PkaDH6eFHkGWFaB3oyD2qvxkayzEA4ThguAhocLQfRzUMxCMsvYjuwcUtkf",
  "key14": "4HLBniT46nJP2dvkFrE8KJxRt4e4FG2XzbqfvdoW19aZfzoS26vWjRY7LiLtW1reHWWxTE1LaAANKm9Br3CXdrAa",
  "key15": "2yjggnzKworYqLScEEkJJGpbTVDK9ucWJ7TgspfXFUW4Vo36b1wVJWAMj3kJGpqqbEBJH4rJ4bCPpsaoCE8CYGZC",
  "key16": "5byCS5mRwQrCv6J6624nvdDy76UJNFhZkHemyQTxemDVX4RwfZb5ST2gzikyN1QsLtiXXnqHZEwkP1a4pfh5kRpJ",
  "key17": "2xxbD3ChDwN1k4NNnuR6kqWQAyTfcWMq6FMQ4aYGcL8CAN2fFVd7atC6WCMfwDJp9fs8pmTsssSviZcF38YLFT9m",
  "key18": "48GHsgQau1Vtm4tCfTqFpATjwic7nrJC6KGcN3Huv3fQDp8aJSVTiWTE16qEoUyLJn1qsGYxYtd14fqFNKA2dG88",
  "key19": "4SH2csnY1K5ZAgikBr8gJnYErarcUgUXBeDh2LGKrF4vt6dyWpHJR5GcP5pyXa2VdLeL8gPugwkBp9xvXrpeybHb",
  "key20": "2YKrK8RVPQVPhZzgaXCHc1Ra7Tx9Zo6notZjJzfWLksPYGbvf3ZFRpf68XyKssDcKpiv51ht7B8tWgwuyhudAoft",
  "key21": "4PN3xPw6xJ8x3K2pR67Bu4X7dvqrg9rp8Yew2i92yEhght1AqLsQfJWVzQBcKdeJVGfVCBJboV74UAHBEsyoP6Ze",
  "key22": "jTMEF79gE1NJgaWZrdDc9tTUCYJ3762QxS13AbBDGqX8Gnuy7DojT4Wauj1zLFMEg77RQ1rvvaRvKdLNNmxqVJT",
  "key23": "4yxsTt5aSgNeqnXryX8vm3KX9ysfBarosAuxqYfiwixXmMQu3WRjii9QMAXoES13oXNRe29W4kuNwqeUgWfhpmPZ",
  "key24": "4osr2tyraacDqbMLMPW8s6gz5bYPsEEe539HyDrJ4eksXidiubiGRwtyr2Z17wAJdSHQJUr8F7vddU8uZtpJw92X"
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
