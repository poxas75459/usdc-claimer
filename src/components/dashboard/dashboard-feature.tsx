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
    "5FAoh76q6BUYKWkqoMc9GJHZfdk659oBF2JWUK22QUScDc5gE5oHFAo6Z9K9eM7J498j6Zhsrsj7e73kRcLN2zvs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YNLAcEKPm9GSDL3cbugCsYeoutQcjLx6PaCFA9vkr8S9g44ujYNZ2hBt4RKAMJ9KbeKshHsqA3zTbYuB49FryhP",
  "key1": "CkixUfDnyjvhfR7dT44Xr2unRfLofe935UHS6TkmUekAMeVbHWushgicmnt8fbXgFxeWUrSvENEn4EkZPqACPSx",
  "key2": "4kXGgnFxf5WP9k4cNJ7uATsWrVzpMgcn6vDAyHEpzbfyh5exS9ejBeFveXiiEpPXmxKnsBTX3XmMgn4rnBBaDXHq",
  "key3": "4qtG5VLpZm8w3DzMqVgQKd9jPP26NPNRa46ZmUfvY8T9nNUaKP3qmHjfEFBFxgozZHrQoHANV29JE6SGZqMXq2av",
  "key4": "4tz1n3At9MjQGCVPiujK7p2KedRi7VysrcfgRiTDB3GHPQPUjnAHJxnejg6R3baqg3AUv8CCRvhzi43Yz61gMZmv",
  "key5": "2bJATxtjAHZxNgz8tH9BNW4gqAVGtnwp9SQtqq1uoYby8B3zCfbS8hwXDoNGSwFLPtzDSJEqfhRQgny8JsZDLQjr",
  "key6": "3C23oSWjCnQcqijYL7VkTsEfjzyRpfeswKXCCAu9UgUtoBKDcu8FzXxhLH8jRtyp65cDPypWPm2e82jHMdj9w29s",
  "key7": "619v38BRomQZZvo4sNj8F8oBfpwQtYEFNsM6Cntue9StTuskVLcby1YcFC9hBcPavvWviXnKBvZAMDaMTBMsMBnh",
  "key8": "2zdrE7si6prfVArqGXS27geqpNiRWUwhK3EkWJuaPcetzMr4kM7cRtK9RLVRNQR5n4ChHr9Tzu6k5L8YdgvhqNqx",
  "key9": "wwCx2mmtcA17zHpgHLQugoUHGf1vvpuySJv4eoMx9MThXu2u2VpkX3NvYBU1DFvqLyVArT3P321Ueq5NJ4AAFGg",
  "key10": "3sZJoqvpdTg3BbeT2yko1a6B48bsPzQHPCaqFz8GKVHNsdef7sZ8YCHiKVz7TKdyPaLQPhYo9euckaW7WkoiQ2hX",
  "key11": "26VpfRrRDrzmsPqEwTXK1NZjFe7LAC5xBcYPrsrwmep5HPg2hCw6SES8ZJFsQVNqhr6m53chgecCW8bMDqZPCnbL",
  "key12": "Fvkmj8bWGRPyiCJ1Xe2M5EALSfgCyzAaF3SJHKHZguAhrwMGJB3b24b4QmimnXLAa3evKaRXu66UHPw7CfoTHA8",
  "key13": "55kAjSQ4rRqdnRU8fJXDDZaQBnQb1jL4Zq3z2rK9WyM8voQhg7dwB5RPojdcMGfmf3jaaWpkr7hQxwgZUCnFN2NT",
  "key14": "45mx8RYCmtMje8YrchTPEGarrycZLdZCbkhL3j7Q1r9mW5hjn61UAdyKYtE6k1fwDWBhKNsZCMNqesxkiLMtQEwJ",
  "key15": "3GQtToUPVNV8sWHucbWdJQN4Bb45uGBq62L338dLSyWuJASbgSGRKjfeauPnspm3zEQY9DqGDGoUUiKG5ycFmV3v",
  "key16": "2zm3idqAGgtXupaC4wgCpBRbJHGko6qq7wN2NG1ev8aLDimDpjvWTXuc9VVCX1h8gjAdZqgXKeFCXeWM6Aa9TCSP",
  "key17": "4upZzB2JPrZoXG8HH61wtP8zJKh2qQT1qLURez52pLPzvDbQJd2Vz8JZ4VHzVUyNsvp33AhriXR2bsk3t5RfVbsK",
  "key18": "2uY1r1yxLjeeyaDhuxpKNmXE4G8Bn16h5NDXXbUbzFBgxSUL2Xp9g2zwWt6hA8qjkAoEviJUkUqZcXoGWcVdpUQ9",
  "key19": "4578zsVvUzgFW7WdYnqe1iqtftYab3bA9uMVLHRBZJt4ryF8qYWURmu7iQ7p7vh3S7R56LATzm43PxxAqh6ZbFap",
  "key20": "4MPM41D2i1PeDSiJL3o7osGFu7ZiW3gxniQa8PCwSPTP5YaUdsYdyq8rtkAA9AnwRTiB7QermPEE7BrhiAtiUmkK",
  "key21": "yMnDFWd1BaxniJMpWgW8R4ZECjdGbp6wwsPmRp4awjJqskfRhezwQxcG5u68jicLH6Q6Rnu87WC6U19YUeATtSn",
  "key22": "5UMaXFh2TFZabCUQuj4SQFDvBSEzP7gThcg4ShNWK6jv1pn5mTbru7LMjWTakz3PXW5zY72WJZY3RPFhbfMd8Rtt",
  "key23": "3su4rTo8JVdRi15X7MLKsB5wUSFzJuL4Zc4Wx8oZvwsRDEWvPQh6PiEVKRk4TZvXPWyv6MhzGo1VaWBDFpWXGBRx",
  "key24": "fHQaQrHctpXkGmo47S8nv85VjgvFJaAX5TXfvGhNrK5NuomTi6uvWNvjXkoBziR75zQup9ffrAfWgHA6PgQCxAE"
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
