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
    "5gdCFgqZmmMerGRKSJPJRoahE72enbMd2bUCcFSJeJXwxJtxCo2emZSUqPjc5nGJtBBLgnUddwyB2heUiwF3KDXs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ExzBb72J8aitsJuwrKb44CkgP2tiVQqzuz9tDdZ597qeFJJ8DuQGnFkec487kcBGU75idz45SB3iZ4xd6wDBqKM",
  "key1": "2vAkYucZXXh483w7JWuACrz4HTKmF41bmCYw47G8sK1Qq9pbqm15K9ZV5CXjSpLxEEN3BeoVkbZHtRko5M3iaMh4",
  "key2": "2oDzUzFqRtaBf2V7fRS7fXuPmXfhEsqWi5Gu5oJ1Y7LGCasUxscTPxUDnzgVfRKwJAGYCRbHjRZCgThPauUKaEye",
  "key3": "4XdHBfTekwE54oHjMj2qYKgsVWouefhA7akCDA5TDzaHHNytEDxK7qNiAghbo2a7s79WMUa7ej2WtXHKzrwUnudo",
  "key4": "5NbsTNTrnR56BbdFqAQ6UXPAva5qqmENShHmkaL183YK933uYkw7ux71HWmTtpSKCJytJhCUSg43YK3sgvH1XEVu",
  "key5": "3fuqiWSavfDpiEUwdGouL3zQx6AaZ4Jy8sfh8ECpQbCguKHpVPRQpyJUXyukMMXxHB5VWUKNh9gbwvUPkaPT4n8E",
  "key6": "2nDKREvfqaT7egsUfQ1CwpSrkBBC6N8XRpVjcquF4ga8L8HpZNUMe7AemVKiynGc7SgELp8Yj7mDLM9AyZhefD7v",
  "key7": "2AxiEGC57Xw5GTfqPmshBACupJneqQgZe6RXaRFt72B1SMBJKExQVCqDNvxYtXBy11Qan9w5xCjB7azLc68AU18h",
  "key8": "4aE8VFZXc7es4oDBz5fgmTBVhz9geDJtp2oibCC7WRamF3nmLB9nLzsfYPfyKGBBh6DyervxT9yboL84uVDU6Ru6",
  "key9": "4Rc1z7TadXhtNFDDPdNqMVN3BUZozgsdNkyWntoS4EaCZK4QfRmsT2nQKWYiJUCfc5JXqABbWf4yuXRikXiXKRUH",
  "key10": "4CSMnNkwnwUXPEptBC7enCXaNYGK1ZogLawfxfRCntk4zx1Kv3E5dqbfC9SJCdeUTbieXhh4H2VvUCW7SnPEieUP",
  "key11": "5aCe9X6ELTvVMaxqHTASXLqvu6GsY3w9r21saHje4sNYDEwV9u1NHvH19RtywHevsjHTsZNqR94h18Nw3jnox7tD",
  "key12": "2Ux8hSfm1PzwkCS95sKLHfCyjdmnWdjgwuM7dTAQXWmXEJw34F213F2ukafaa1chQbDFUqpwkK6PH5H2hQzkbhQw",
  "key13": "LZSJ6RNRknT3jJGbyxUyzmwZPQVBBHLYv6sKsCRhj7TeMcqdhgVsfoYGBvqbKBLYLHNZk7pGb7Yv4to3wSWb2SX",
  "key14": "4Cz4zcVKiGDuzHp4Yztc2PqVqx9XUJPLPeyEUzqBkb4XqPULymeUZx1GKNXn6SyWLywfKAfWWVE3JPj26eCdNeQW",
  "key15": "2eFX9uzDNiFgiJxyTG1iLQKX4dRQ9LZxj6d79ibqLdbG3YM3Hg4vNt2CNdoGbMueZqup5iNPd6hrap9FwASJpXxs",
  "key16": "o7MfmweBZNvFTN7tLp9VNdtpXN21WQZz4Fmw6LoggGZoL5vFuTU9AMDvK6GFfXKcwsGaSey478kn4Tqi8Q2SqXb",
  "key17": "2frx5qyU6BTN6kGWz94J1Xdv7676pQUzgUngbGMCNn5u7gikVjEwq9ddWoBmpx3zUGxc676eRp7SGJpVshgB13N9",
  "key18": "4X1AZ3XsZyGTZSkxJTpSQDmmHAQGqvgpZ2cYGW3sKT8p5kgfqNgDtxbYdtZADu9EJsustNgTDSQT3VnQeZ67J7pq",
  "key19": "2HytsvbApCFdWCTuuTuGe3XCmUg6MjZK3nTtafvw6ta4ijBrHeNCityUdns4YLYztKRSeqKcLjgq4HzJzFZ7ryMb",
  "key20": "4sUCiCHmj14MeoBBFwtRjxuqhJb1tB8Fg5EdN8umSo8ewuK2Ez33FCT5wWJ7XZSxyv1ZQbgKFUpvSFthn2LLUxcb",
  "key21": "31tFgi2344TzYQt8JpwuWwcnVZinR6k7Tx9cVkbGqEDCXHeYCnsRwCp3YCfCGyoMj5VDuSVSuG2ZS55se4r7Lm8q",
  "key22": "tsNMjM8VmtovzPKqjyCJRPLvQamy3Gnu96HsXXKd8Y7a6J6RrmbzFcPPLhEquxHm9qZFdtx1S5qFuES78QFnDHB",
  "key23": "3VHnS7S5YZQBAs7X92X1kgVNe3G5Rzn3ZZJ9AFuSsz4AgXxACWzJNZgTX1o9uTAGR4ApNV9FrJUfN584NJnT44A9",
  "key24": "3ntyumaXdfXf2oisT7ap6yEHqwCQozgpCdRDbWTnEuKge92sR7Z5QJVKhwVJg3kwHakX9gQYQunPAxaBYokjYXNu",
  "key25": "4Q55vPgYDAvHDtpzfueSnQyVG6ckWXBPaZ2zbw5W6aS8uVkYnt1tkALzYoMX85JHVdddjrH3keEQQnjHVH7BgHj9",
  "key26": "GWXMP285uK3PouUzDEgCkk7zyP6fYQTvbDoRPMKSAm4jpVDBWDbzyU5Ag34RPfpyd3rFDZ2tiKXUKttTbkLUe2n",
  "key27": "3S4pyPJX8T38vj6d9RXK8bdWjGYwhRC6DHdD51Fe1e5NuB3PGYXigX5van9y9PBLWLtsv5WS1hNV2gYp9F2yXoKQ",
  "key28": "4jWJqUfuN99by57xCNyPHN1Cog4FBR8PteombgLCG8XKV5z8Esft2m9ZajtUC1Cg8yCDVAUKojAeBBQAtxwLyYoJ"
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
