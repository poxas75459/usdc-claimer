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
    "4o6HYSsBonNwBnit9bDoxsCxW7bJ3L8MwxiAygwzWeqZUr4kfCemdcJ19h7hEu9AE2styKmVuHxqgRArszn9oU7Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SFqeDfqAEmoj3CvFzvqzKHE1Y1A5p4VwT6rmwwwjreArzunRdfksobQfrbMV7DZ682ncdmSTSDNNB2ydJGzsKT",
  "key1": "5RcCYqQJfDwSmsN9ijeJLpNkb76vmkDz6xPBnPUEXocG17nTtZGmAMrMxMoVQjERSKi4YA8N6STAozBwdrqdPeb9",
  "key2": "42tNK2c7NdcwaWRwHWsK5c4osXG7c76YsaTqTWjdjKfK8RwXZVk5eVFS8J6QyNN2ME1FHqxQoW1QRmTtA3MZxAmY",
  "key3": "5Ci5ZQ8E9Ci53Vv1QS2LoK5VtaZRKukCRpF8CTdYr1o5WgnvVpT5HB5gQqNNad6HPTW41u2BTL4mPEs5JapVbrLD",
  "key4": "3WaukVwWLgz8EZ4MhuJcsyKhN2cMdxbSvmVDPm4gZBQhAP1LkC4SL8aaGv4ewkEZq5rSd1MxbN6WriB1nFMUAWu8",
  "key5": "2UsXzrSCqYgaD5E5EyQouwmvXX82hpeCYvNNKPjTKgeSV8kt6dz8YpNLkmpqzXKiAtN755r2ERr7xk5L4vCLByBM",
  "key6": "65hbz9KJgb9VCMQaYPGzQeZYWtHbkvaU7MWU9wY246Ajhy3Xk1aBcrEguKQYcWEXPo3FogU9y44YXuTFJMR3kTBw",
  "key7": "2mZsbMboLmnYr3ZvdvtWgAkMWf7eD9WxA3U2Po3aXzCeufG8vkLPde8dyg6NZj1GyE9WrpeDiyUFgCCRyHfoRpPH",
  "key8": "QJ5QHRQXgzjAbTbyPufYiWb9nRpS119DqYT7hsZf5axZLw1GmQeCKJq8tLJiPh3vDEbcPPVM9H9HCKTVLxF5urE",
  "key9": "59uKst5ozeQkpqLKYJAgWMJqkHJJcW8GBHqHo4xYaokMEeTVo8UuE91K2ds546nprtUTrbN8qEei9P3sZPE7eQSV",
  "key10": "42Y4kKSHv4VjBvq5iBQC97rTqCcM4ExoRMs2KYQvpqFohoLgujcMupNpAfLoJ9DrtGv9P9eV7m1w4MxgDUoUDH7P",
  "key11": "2vyekC46XabcYfD1K2e7YACYHBL8pnaCsXYioP8RBRaQiBWexVNUQRzvxZe2kza3TLHdv8BBgj8RvEZ1mdT7RqQJ",
  "key12": "2TY5UjbSCuaAKCjfUHVY8K6dDcemfQ6XsWWzVJX8iE9Z715oh3o1YnsbvEZbYGG6ebux8bU3MWQpmkdzcGLNsAWU",
  "key13": "8qSzRynH8Vu5D7vxykohwMwenW766sNUGu5QfkfCLpLGhqLQK8jKgdoi6gSC3J2UDo1q2gPpouFuWA9Xxv9h2fa",
  "key14": "478uQwtxNmCNoXnfG2yJtzggQJrfsuPysQfqhPAjsJVMvHege2xaj52XGihMdYMZvGoBpzBjc8DpR5ykUmzfbm78",
  "key15": "5f6uc2WmUHSnKSZErYu9BRrxFUsoFj1d6kJHQfNH6otjHDeAswoTNhGaEfcFtQHu7xXcdS838o6cxmmsZevfcCUR",
  "key16": "54igL5kZUXKGeiQSXs6SQaqxxQUnQJiaX2yGG11QLUyvDAEdcnzTDQSwvTN8818LivYPgF1KZSgvVYmPPkFgJ9fr",
  "key17": "52YJQ8MxmSMVMUZqT6f8FMUhHFgRbJ5Q9MUsykEaBxG7pF2P5doqtZWDi4zd1LhVhN8LdUw6yDMUpRedrGzMHTVY",
  "key18": "52HEyS38SSH4KcmB3BnQuekwJTYexsJ5en3rbcMPm3RHLB45NuP4eLiQ53C26ui8Y4NjA73H6XaJcz5RTzyaUmub",
  "key19": "4QnnN2xQSWpRscU1dAgXMRMzRQs555sR22hc5agXJANFZKPZXTDPwzLPqyeeeN2taRkY2HqBd3eps5bswv3uhCVw",
  "key20": "4vkmqrJtCABYJQjTox4WA1EaHU3bVKxBCN9gLzB2wYaicCdEzAK4ogARVqUbdHzzTG8xQP34PH2i2MTkZU3aZBdo",
  "key21": "4CegLi21ehYekSWzMN2DTUA7dyBiDUtcaroKp8oSxKDvkT8mFCrS3LbE1N3R27kga3LaZozLHv77fLVbtJTdCug5",
  "key22": "4Udt4VP6LdUkQSSpt4DzJJzPf35VAViKxYjhehXZYMRpr5seDx1g1VPeURbyNzPQVLAUVibWvvDhsPdq4yBZ7CiK",
  "key23": "3Kr7szC4aagLjBnubd1bLn1C2q1hb1US2aXckQjVrrabtZm1VLPTK5gLfy5kuHMVJCdpzJ1L9xYsoNbTYZ3MSAbn",
  "key24": "4P3vwvkMTJPoV1aXwrmtXtPgt8ca5QrXpFdt2oqqnRSpeQ4VF9skRp9nKaFhryvXyVSHeDSsoeoM98r4K1YWkRwm",
  "key25": "4uMXsZ8q7ibQ5qTrsVXMmmiuvo5VDR1xmqoSVaSR4a7Ktxn4zj381kE3quUQunXQfdqJyFbiziVmHb8mBwYygxny",
  "key26": "U9BWWHFZE387y2xdGe8j1xu8g5cehwCupguRCa8vAuS3NcRzs316H5EcZmmu2eyFhSUj5iJSrSspaQEuEJ6d9CR"
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
