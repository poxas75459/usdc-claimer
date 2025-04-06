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
    "SRZ53AEYJ1QDvUL5W1wFZQgXvRAC8jEjR9rwHojySpWBJUZjpg7TJ3bkH81ggTZuTPqyKn1TFWzce6GMij691GU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gcRCEyFwuZjCvxaPLihXxJvVbg4g3M9MnRyqYG2ycEg7gsaFteDPi9yDbug2tpDVKdSFAV34RGL4LTJFnxrG8o1",
  "key1": "2gEwV5xor2Bzz1mmxr1B7hY3pwGbLsDpeSQe4CRVC4msWsbr4rEDshHeSNjGgNnoWufdVaJpBcg1BomnwCYT9j1G",
  "key2": "2uxCqtkQvbCCedGxZHYeRYrvMG7tj3yEEQ3NbiKCYeep4nGmXixuQRAfwPNhzrYDiQJzsx2XsJgSPRgkqqX1AFMF",
  "key3": "2kGdZ1XaUQ5pmGDGnFDsnvRizwK6SwdKsmH6bjZGaC76ruWEgrPY8RgPgbeZvjzyoa45TN1fCxm1jLi15sS15h5c",
  "key4": "44edgXby2inRAgjpFuAgjaF2KChgJLj8ZBaTzAwFRLeaKRe2VgRqs6b6GVZaeSAynv2YdZFGfSViku5nvseP3nPg",
  "key5": "492ySGVqGnXaCrK8b2jPmaj9bq4cfRq6psAxGGGTZp569NPJg7wmdM9gifngeVeKFY2iJDF5TS3nyvZHd4UmzjpB",
  "key6": "cRW9gtFzQrggpzN1hpwxf342NaBuKptRPEGkDBKtAcKFnaEvF4DWfb5Zq5kkJ1CZ6XFLgg7Vj9HpUGLmtoyiLxu",
  "key7": "2gnKeNKPKgzbRnb2vzmXWxcdhfiohSFx2hZDjPTGELREivRWB3T3XgU8HTvokLPimpyjhoPw3j5hU7jWknpxzUX8",
  "key8": "UdbJn8LsfsSiQrMUPGZfDUNKY37zRWB7DnF5zAQ96EMmJRQ9ejVbmAcWkGMSWwDpbRi74W1NNjcVWtm7dTHr5Au",
  "key9": "5J4hCvXZ8eYfHWAwJf4rcwc5RmUq8E5JsgJAJtB4JyNmtKjoAS63Vj6cnT8KPjuHHAdF6tN2goibRdxYLaeq3c2",
  "key10": "21CaRsdCieyFNwcPsD4pocMGNng6c5vFD5ABTkyqoFQM45DMgRnXyhq36dfu1GsgMuTwtQXTmontAw9n5aoNPs1S",
  "key11": "4BSPb8LP3fUc8vsqkFawP9S4WDcuKpxMjtMk9K9b9du7d4jG9TGPwsAk8wMHnqYP7UWdTeh4SmmFoEs5xaDSjNfQ",
  "key12": "3TpSpcbvj7nDkg9XUf33SxF3G1qyAm8LKceUe5KYViB2LTQ2sL9eV6GGeVKmJ9u8t8DDYSPBn9CuW96ZTtpZSJU6",
  "key13": "3LgZvPU4XfGLyo77kmrLpjYQacYbrwFheNgbMo7t6YzcykgmmuiBBVf6Jo9yTjjvkC91y8W8x9SPkCgS58mkU2Gq",
  "key14": "gosP83y7EtYB9ds2eyJn1dAm8CLu2gBjBKyHAXBioP16kK51d7GaMEpaBfMNqmhaaK4Y3611Q6ZDfUZcmtrL75e",
  "key15": "3BYR1QQUWVxPykiYP1qSk8JDq2TqkzjU6NneLWpg1e9BHctoo1azX669vbSEWTyRLC616cHyir8NWHjYYTpde7vi",
  "key16": "2gyHhYPBYFrs5zj9BMXt1DpgStw8GNtGpwxWTiMYn9roHzB1k1EzT8xGK43LaCwEpEDUFEmeq4hX88YJEqakgGGA",
  "key17": "3SEKpPCpvP7dmJLHzi41WFbf5VCoNgzZJsZESmdWFa2LorimzXryEhDKPVY7s2zZq3PFu3WXJd4fh36qikVjyP65",
  "key18": "5J6jENccCvREKwvjeoVwDSiyaxM21YS5BdfV2bvDkbnyepnzHjDURFo9rWfEBvmr1FbhcJ1oCD28t1X1hSVmALxv",
  "key19": "3U9T19PzGKwhJELqu15UpTFZ9fZiV35VmaDu46TcTbRCbfEiYKyB427U4Ev2FwFJgKfvKgdcX85CRhQAVSivLUcj",
  "key20": "4f43uZZq1C2sKVd1UhsZKrEsARoRufhfPe8hts8ZfFB75gxoQNrfKTDfb7aHmd8SEjNwyoknRz51jDahvw6M9RMf",
  "key21": "3bvHf72LRXokbsS6VXURFKk6BZhq85uGTidCqiHVCB75qWJ3nMvUBGfCTB8QvizoQbWBXTf5Q5LLTmZz5UsW89pg",
  "key22": "5m3AEiUBjYECAQjrJrdonU6oxbCyuVZjudDtyRcykAMwKM2DZ7Sd6BTvuFrKpnpGWPBRcGhWus22Z328qD4vRJxx",
  "key23": "3QVEHh9ccondhcg63Bao2JbU6h6GEuBaAb5JxtSWD8xs7NFXMaJhJGtdv34TeZqNMQnNRt6VamZM5rSiTLkQ59VD",
  "key24": "23tCfHMMJKcxjnrH4TTF2eNh68e8LhazSskyTryv595V9LC3MkNKCQWDKjJSMJ6kXy4PHCjc81138ijMkRCsRySG"
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
