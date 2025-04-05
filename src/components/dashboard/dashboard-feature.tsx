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
    "3NBjZH9HTV2Tx9ajS7SWCeLHUzMSLWHW4ZtUVKy1U9yHwKmdgVCosCV5TYvBGqP14iKPMBrmAgzUYvmusYy1mYgL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39NqJWmcL2Eo9dsUAuZbMDJqjESc2VEikRq4WcJDfjgeWhnbmhcn5he9g8pjrRALRGLMAqvLxkcgyd5aJLkXJD4X",
  "key1": "4ZuowWNw4CMBwTQpSqU2DD1m2U8Q6pZ5Pe4984w8GcdzpP1DCiC7rfZg2jzkkyvt4hv9n4adPrmXWYixDLcwfmuX",
  "key2": "5BHeQWAWD7BcbF4s6nRDuhJn9LTWxBo3CVGQa1npbofAxRuodg48fbJBW2bwxyZ3LFDkWfYer8X65Z8bj7ZxEf5T",
  "key3": "3oJixDHkYJrxP979ADCthNT2xCeEcp3EbCucPBXXaT7EJNrZ9ixHMnqrqkQooNvtEHH15iq7isKzsvCewpdBDZnN",
  "key4": "4V6R2spob6VTnkoXjZw448VyFxd47N37MEiQiE7Y3wTj3RNgL8xVH76ziREoXRmWEzevHAqAZxsp7iKsqYQRDTTb",
  "key5": "3CndRYfuE23YUEKAtU7FdtfWhBb7rMwvqpDbFEUKQcrWcieRnmokuJTaiLxCKSoZzA5bpuGYUc3SYTpS3XXgCfGD",
  "key6": "2fC93kGhn45avdoec2kA77TBDnPWo5KwJM6fyCdzVvbv9zvtC9Fkj3mBSFWYw4Tivcs7JnLbCq23QS2Rt4qJ35T3",
  "key7": "4rgDcgNGge34o9dwzwgarexT9J4YATU477bmnvrqwXmwxb1pgcL17hZcsUj6HBGdZvyo7FUuWXXSfHiP5mSExWm3",
  "key8": "3zo1WsRMVXF8HWwFWptUUpPpvS8uaUFnVcRSvFPf2Zp7aADcMRadGiizvGay1JiYSxyoeiGaySps41KoR611wKeS",
  "key9": "5sW9UiRomVcKfvpHgCV3ADv25hdDd5qRjRhvP9CVm6NBX1C8bBxdeHHr1bYnsDS4VLJvBfNbPvVKHSrqDRqUmEaL",
  "key10": "2GobkquWZPj67VGGfGsz2j6aYLrYZhu3SQ5fwk9z82TKVRqfCuRPH7LpvW4QLMCYA7uA2heA8DwZnmfxDrDew6bm",
  "key11": "5dLJoh4vWzUnzTcbCMxCGUhs5zuyV1vSRmbu5wJZnmN5QBQYmB4v3EVcaije4Ltya6E4bWRoVTjP1ypd3ovXWnb5",
  "key12": "4vt7KNoHNsPhfWV1nNAsTddMWjvAL8dthQjYKDbDqDhuNAvXevvVFGv6r1rvgv67sQZdvu7Lekw1Y7VyMnotuSao",
  "key13": "3w5hbAMjBoDnwbU2WbasCjUeHuotvkePe2aZwSch9dhEpBuuvHk1wh7aZsEo2PCHYWKMPfYdMW3fUMfbbmfvZjSa",
  "key14": "2U4ysddtUha2VRaoo1GBBiqKvAnpzLbTx5Tm31sabyG1GJcVVJyg24FwdZScq5tmavwppAqPqHT3TADKE6En7adT",
  "key15": "2XvMRUnb4RJGbJS1eXce8494BoU4uqEHc4DYf7sqQxNzyKeHhvSLZpZXiJkp8KHkZ9uG8TZ1unjcGZecZvvxC7kE",
  "key16": "49KwpCkDG4HtUkDgcuhpC7seB2pus1deLLJbeEUfGS9kFrrb1oXSV5qTrDQYgX5J66ZZTvffr678ex4i8PDp52dv",
  "key17": "yB2dpxfJ5Y4kVU367766aZdke4d2D65uFwWYiqdczgsK2HqhDFbnvtpiVaPwiokk3iCnVkRxP2hFR1ejPY42dKS",
  "key18": "2EtoZH37ghf8SzyivUEm5d6WVmUPXucDmpf7hCqGJEPJRQDn3DbT6ZxhobKpYiZB5V3zTCwDpfAH3eLTN58e9DX5",
  "key19": "2BqXSJauSs1HxE5k5f5UR1DYZf8tDNukSvrQX8LhuyEFwxr5RGK8a1R2LTfNjczdKR131fF8dLadeGQobRfNHbGm",
  "key20": "5eGrPQwbecuPDWx8iaaDt5Fe9BTCRZ8czUcAWowATeRCo9WkNGe6zvYFTUsz8VYLigK9ZXUmwDheA3shPbQYtXcK",
  "key21": "2RKTWyEmi3yXJThaty2XVpsxi7jfrh8SnLp3poVLy8pCf2sUJmp15sxbKXZ2Hw1QQSTK7ZYR3YCcwDyJgNvy7UMS",
  "key22": "3sCGexXABGnthf58bfknu1kkyGE6hM9RNiX28kXJoLiqtN5Rf3hF7hK9AkwkiqKMWbptCnHr5Ej7BgNxpDu4pNu4",
  "key23": "3pZYwPqWj9asAAc4tfCj9xfrtHkMejkxBXW9gm3g8DeT28tMXm3p6LRKf96qunaJc1rzP2rSaG3NLJdSEmifP14o",
  "key24": "4oQ8yC382Ns1HWhKopz3SBeagZQPaUyagSXFRiZKCVCx1CEgFrcjvkc25J1TwPVkLmsZjFCuBh8UoxjMCNJA3L79",
  "key25": "5ncQmWZtm3VLoWrXJdY5R23VHFBz2cS1Q5eHswzkhfLnKqvABTzbYKBwq8K5SkQ8yhdbr46R4WCM4MBcAmevVrhr",
  "key26": "5hRZjWgeAbyjwtJY4826t4NxWzZ6VW4VnkS76oEA23NW9jiGSoLso8pfVw6bV39XW4UcBG5hLMUQfKkxELoTQqBS",
  "key27": "2YdXeunnd7XxikcrAStryTSAuvJtiZ4Jx2TZfvqxtWeCy36y7iNito458fpnUSrmpfrX4EY3w4PjBQKCx8WY4wVb",
  "key28": "44J3rZnAwBoZvWcz5Vz36hQGWwKwYBa5WDHxwXy7VVfEXd4LWQSrVjWXE3kuaHCexNtzhus6oYsviH1zXFXpuJnf",
  "key29": "2dtbJa5PVtM22YKf1q7WCJ4NXvoMCDNZ5FdER12cjAeV6W149rirc1RXhR832TC9f4e7zmtkTx9a6AmGcvd3CrW1",
  "key30": "3Tws5mEAi9jRrFs1m8k9SKUSCcpHG5Cb2n4KSiKsqpLjaxZNneD9EzsM4oMfuRi7wyZ5p8Atu2x2yBzqB3z7zZhg",
  "key31": "5fWP5NNzHWJ2Joa5KiF7TbGwMu1L2BMTPJ2xv54HMnzp2rDvVdLcnGs1tG2ja35hqhjYfL3WsKz2nDS4BrPMpZ5x",
  "key32": "5bejd6qagXEEzryASdhsvxcqBrsmQQPo78euadFrkemztirSZXJR9GKAdMTWpjdR3a3ecnHYTnVwERC2Yvs5NwGn",
  "key33": "23hihws9qe2ari9mJsBsoenrx5KiBLDmwJqMtW9kjjVB7ZoehFtwpYypfigsYutHnNhCkHcWDdx9LukwFhbtHE2a",
  "key34": "21mUYxWtjosoKhtD3fJMrBuXduhNpnXRp82JF4TCAa5Eg6Kx6NQPQz1pJyU4k7PKTngFAE4Ya4aF2JgupxckHYPn"
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
