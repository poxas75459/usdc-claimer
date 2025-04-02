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
    "2V4LtALDENqY7pnzPT6t8PvWBiebK1LtYb9twwRU4bSPw3vp2w9nY8xs5H9B5E4HW7QxneucpFiXXZh4QugqodDp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iicpVkDGmPbg2kVFLFEwTsysQLJEQzpdbHk59zimvboVeFy8gue3VYEPic1VVZpc7CLXcxVNEBkK1gHD6oR38Eu",
  "key1": "2PfLWRfJZuH449EB1m8cgNYrWNw2ASzugemp7FJpeUWwhwehb3o99Uoa5AjvTXihNisSo5oxJbaWPj8zh4zKuCDd",
  "key2": "5s9d2GP1ZkDr9vvFW7ZVZgMCU8qRoY9isKUxVULTyFqfB2ib41ouSJJ5Zhyj8ULgreCetY4hJ6MrppQhrVsy2Q3d",
  "key3": "4SfVbq9sBqbAeoDUVKjuNrPL5EB1Ppd9n7SEjuaeu9w7RmuJUQZvSgDECGkEEvzxHYHqrW6rixhJ6SeiEXNxzLRx",
  "key4": "4vnNNoBigv4kB24UJpjXnLmMuQ58ZGSw56UURNkqPAxYyn3dM4mKYp8jW3eiJbH2iZyHc3biSMnPRzULdQY7FA7B",
  "key5": "5Wq8aP9kb4qDZupRa3TJtwg87Z5VytvSUFCAMxyS1qahBJGGrhUk8pkU8drRTKPwdnX5CxniSRyYQTHohRzPRdcf",
  "key6": "2Wy4jzh7QKXxkVyxaJPAgfLx1rFKW1SzA3HrAdnW3nqiQhb6Dv9yFarkwYxi9JoTjPTmPUFwhsf4pBhwEcftNF3u",
  "key7": "6dFkoRwViNjfTqtuq7n5APHZCgAd7Aq5LRf7hjkLaDth6Sn4S2Dj2KLG5UQsNJYnsTJDXseoHX3ocFEPzsvagfe",
  "key8": "5PAgqXj3nC2nLN8qP2ok4GJYgZkQg52jJu1WaYhhFU5oQ7gTKoC5fWSTZwc6GsmtzsASVnLRMExZB1YbbWgdug74",
  "key9": "63EKdENjUt3PmQoPCiG8nh77jHqQBACTM3hhKm5EjwzsMsxwmts4TS8bS6GU8HsfnEMdQGuvD7DQhXnAekxJsndw",
  "key10": "5qVppt9AzrnZNu8uVX58zauxtZR7rmg3xwjm7a1FGwcKbWUbWJPkgQbJRq7WSgGdckBht3yUp7Crjqj8Wsk8GfJJ",
  "key11": "4yg1oLJ6rZKoqC9h6WBk3aE6Sr2C5pnbvu6BP9S7VKEGJkAPm9EfvVitLnBe388Ji6wx7yv2eGBWg781Y8ySnETd",
  "key12": "5qAGmwo4kw2PmodSYqkJ7o7RLn2KHDnYbaBbssXayidkpfiBkepJBK5mctThGEf8Krag239z8jiqQdJs4g1qQ2qY",
  "key13": "6ohR4TyK8qUsyEEmZQQd4L3sBWMHxbKMtZNotSC1EahLeTM384aE1SNCaFuWE3xkWmgGqwFRBHJteaaRS7ULATx",
  "key14": "VZzwGvihY1cZcUvtFCbW7z7Tqk3XJ9A1oYkggAts1joe6cLyg3Rqpdi1Je5yK3XUhb2B5vXoytg6W38D5dM5vjf",
  "key15": "3tLoSx6XZnuWU9PvhTD7Xf4c756C2LyVrTsPvuoPxLwz3fd42afSxoqbBkfGQGZ5w2wEj6S8eJVunx2X2oRkkDGC",
  "key16": "35zdJGPnqFHgynLnkgmbibjsmEc3nksa81JaoPQoUx7XViAQn4PGmKu4D3r3cJWWuC2hhie1igC8fY18eYCg5x3X",
  "key17": "39UZ1n4St7hWSHshSJ6QHbnauD1fBTZUfQnqoBrHYdf6qvVSJmjbysKipRtQ1BBxpXxGrU2Lv9sXZdLHiWpRZTRm",
  "key18": "3SX2sUTJa14ToWvCAQu2HUfuhwXrW7QD2C1ipkgWUYK8yrWzjicpwD7vnooRn7Lvb9qtCUHWQ9KpXAchKFFSjjzX",
  "key19": "2EaQKcLe4AGz3rH6j1Hc3EviHhK6BFLFbjk9PR3QnzrfsBTPXczgvJfsqDN4mSHFm41m9hmh3Se3WV6KiHtLUWPR",
  "key20": "3D7F89tuD7AF1C4C4LknwPnCkMvrs9Wos7PgdDchPv9BgJp1prMjNhrmBDuNPsjPjLfhr7WiX3CqWCBTsjHnaTJQ",
  "key21": "43QGjV8jPsr4DPJAr4GBfVzdAax4BvTYm2Fq6iccyUQMvVBbYaem892wDbyAhuobc2ot2hghU4iCD8kQ7ZnRcPhn",
  "key22": "5WHH8tACVvtFoNAUiSeue4LVhWtQdHPsXF2W6vpTuqF13Nm3LU6AR6f1aRbGMpsuxtXRMvs6gNk6ArK3rP6UwgGR",
  "key23": "5K84ZpB1aQvo7wkRj8ftNChVZ8pwY3FsmK3Uv8sNs1ZQH4RaAz4MMmDR6iToggHFZtYxV7KGs6htEDdfp28GdXuE",
  "key24": "23Sx86nrBLKxTqXyJJGWxB9D31k8wCXqqVTPTQY5bf1uXPGBzVx7PBjqLqYCYja19WiW7eYvNN2LrY7YVPuH8SUr",
  "key25": "o25mFYuh63Dczgbu6HekZMBk48BxYdmEcj3r1jxH9FsTQQQGDQFzRd2tQhK4txVkS4bkdRnkW5xrtHzkhUY59Nb",
  "key26": "61sTdboAx6cUubUiYgLxyCyqEfuRCB3y9zxKNrpJJv2SdPw87eS9c9eZLRTigVVDWeTa7XPPFqa9w8DfArVzTVyW",
  "key27": "iGxfTfXjehLiNi1QKW1HKCihdwMpdRgwWvuheyuGemm6q6j5Yax8ruxs6uDWjz2K4BFHbhHRPY1HTbXasRyJwot",
  "key28": "4F2CT868MNS1ehBVCbeoVNFjXcL3AbGUvCkdT2u9kpA6LDQEpuDjRhSUESMLSAGcTQYaFKnvE38rC4G8Q7E3ge4N",
  "key29": "GDvzpTusvSDfBxKtsLacJeLKFF2qSBs4kCYz5193HZHQ11RD4xpH934GACzBe6qozR5CctLV7ZPFnMu7Bddk47h",
  "key30": "chvHyLdjxiQ5LYNxFz2ZZkvgPWJ59xBMnijNHVrJTtyzQUnsjDLKdk9egqY6JvVy3q1wi6qKHMEonMPYu4xYiPJ",
  "key31": "4aNs1g5xTB1KVJVCqiR56nu3zvpFdwkitLfRPTMnBb8bmGMvbWvAvGV4b8DP8af85CzjuAtsUryTtYQP1BiTaNJC"
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
