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
    "432aWww2urTLCuFYZgpop4e2LGESj2oLpGVQiVnzgJAycG8c4MCM6ydxnpnyzn4n2qPGqkpfPCf3DXdwWZLSQFhw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bzu3FHZwyEApNJ9okFXraKkeFzBss1haP7z8D6y1scQ3vafMDkVEoGVWZ9Hd4ixsvecbarDXehT63wmoN5u2M9h",
  "key1": "2rMpdRroQBH85GisZfNKZ5bcyA3hZZVWomBZdu2Q33FMPGW9CKdHm68zszvh96QqEMry2VZUn8xZpYxLUZLQ38B3",
  "key2": "4JUoDLX9pQaLJ4i98NZv7o98Nmwv56ALx3qgikhuJMSxxqxWz6Q32xDqeWEjUSJz9Ct9epD2d3swfXiYCPZRa443",
  "key3": "425cshXrodzNACoBAiFZS6RoFqysSBEaosu7AYAEsaZRgAneAXW12sWb9a27c93JfMGfAt2oNYjTXcXg78pgRouE",
  "key4": "3kme3or51LmphcRJGEmkXHZb4y8wXJ8tMYhS7W18QsER5URYmPG7c2Ns9x7fwVgVgs7a7xSVsoPwpkTg31s7UPhc",
  "key5": "2FnxMgjkfFHJ5GV7AxZ6G8qPQBGsFCDas6tcTMVus9MNbNcHV1mrtZ595DESjex3rfsz4mdKvsR7YeobVTAz5dB1",
  "key6": "3LVrPggdBxNvAMgrC8gE5VELgnapKWGQN97Nt7hGnpCqQ5W8woRB51m1qr911s3TauCfEJayTN2QDbJSbFj8VkUL",
  "key7": "E89ehskFQ31tXQHH6r9pkDdG7sa7zEivvg4Jq3Bm4qK7wkPkkrV571Y4rdeYbg8g1Gj41YnESZVdMMeML9k3YGQ",
  "key8": "5JgBjB9eCy7BJ5wk6qRtALFPgBNw3c8nX77ihma5Un5g7Mva7faBh3HN4f85E7e5EZfF3dtH8icHx4mvH1SYbMWM",
  "key9": "6wBGBEZZnP4ggh6rxLuB65uGcPpF3f6S6xC3FieG77XYWugyhb7oCNxWJ5oVfNMj9NBZ59oKhHGf7pyUr8a49tp",
  "key10": "3xzYbKhspxaJ9f7sjJsoPD79B2RYxi4HR5p7YwLXkoeSHE2op7SRoYfyCsBwNna7XZTLC2ZvkNC9gbZoGG4pJ2t6",
  "key11": "5SspXafAnASPEUYBvvdukWQjEBL4QDqvT8dKkmfL7Bj2KCuhwJ38ExwSHwnzgz6H3FD3KaBUxbu817bMHeSTFZza",
  "key12": "3eUtpo6GvVCAZ5dn59joGdYXChjvvWPuPoWGzat4v4yqWgs5Yuu9gBS1tPXTwjRyiHdVnDnFUaGwLsaVVjEwqaFL",
  "key13": "2oR4aRJTPKgeTrBtwg5FZNQcJrr9KjVNY9Qpf1fdpogGq7w9NdXHuq1p97Kp1t1e8kB9kZFbhgd2RSs6irheFLA5",
  "key14": "5eNDFoqmdtMf6LcHrRwJZ56CjKViWkC7XeC4kRfghKETYTPcEx374voz1crRa69jsUguF7TA75bThKhLqFfBpE6V",
  "key15": "3oVxvTU4gxyNJMVmt46T76w7iUqVwhoBT37rVzkch1Z5CjhGw2GehbSaySCuRjtGUtpqtTZt6YWr29sFZhofAuKW",
  "key16": "2bnZQDw7kGy2vFcCmA7dFSacBfd55FHLZsew3Kj5EDjffxuVdri9CAwA6GFSGuA53VrYdhzek29NhhAcXwTwKzD8",
  "key17": "5BK2ywA6v5VxCjfnGPsqqnK6YuhJ9jdvpNQTVHRq8jd2UzSmiv3db3B3wnUL34YDFVZ9pePYq61xmyirb9ZinmB9",
  "key18": "3DqAC2C887ksGWb8u973hrH3J166WnjoyEUDTC2CRoBTqJuwRQzDdyiBoBzF7xz38ZMf2oAkaciGUdzi89Hsuh8y",
  "key19": "3B5uz9S88E7XXkTNM71LtTxd2U2HTEFGw4FmX97V9MCDsMo89Z7VRbp9pKddeSEAtqSbhNAJaPeapj2neV98rdb2",
  "key20": "65pNvcPGsTBmPRVkeV9k12SULeDnCAeFDM9p3Cb1BezN2i3usUUNtiMtGHzHzu5BzRTFVsv1SCZuiKGxZNJj6Tuw",
  "key21": "5qJCtEzty4AcXJCRDeg7EzupQ83Aoro6Cqk59di8auyoVX8i3CHnmcPjnMaE1b2erMSeNqd2bXPkktixph2yMV5A",
  "key22": "2XmQzZfxaUiwbw9YdfHv1uWhMDXKdPmNCcBGGhk6bU1bJ9QC2wpwJCQsaVT3mjtJH6j23kv2EYqcqBEJmDUJoAr5",
  "key23": "2NhENU3zJwfFkERTzbqk9sdQ63SKSG434Je4VMisL8dNRv5jkR7n1AgEVWLEdibmrT8ac3pD6SYQ5L2wV4LU5jVT",
  "key24": "ZsgVEhfcTbj3Gsgf1okysF39moeQq2MaGtXSDZmVnHd2R7VfpwmJiVAac3TJUbGtyAiU6HhHwTUnEdEdZ8nLuhG",
  "key25": "2bX8goE8udCEXTJnezy3QmXfigKe9rX1awbfvyvyiiYJ9mp52BFCPhDniyB1nSYKvQuNUvgLn9XHcfC8BjRkrRqQ"
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
