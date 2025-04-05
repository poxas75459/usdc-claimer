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
    "52aWUj4cPsNZNniVptBHQwMVmyjm9Kf3dYc8iEjdomnsnSDxAKXLWz5rmVN3SkNRi4aZu5CDMiistYJCTG6pkcDF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Eu5yb9XNES3iZ6F2N795S7ufZbucX1F8yBTvKZJwcjMdQ5HE8mJC24yngx48toAA6RA5Ywk1NvWz4FsEJ9Yyv23",
  "key1": "STLeABwRL939YhyKvDRG79h2sBWEgTy5dp5Yb84o2AdyuEviZHuv3Xe5xjCxRzPtBJnG3VmAwp3WtUhSF1YXWnM",
  "key2": "3qWoFHH3qvKWSF99bLywZcEmvcyKhJdyyzYShAKGRs2nKtfxwhgNkK5Z34VZ9EwsLZ7LJmiAEa9zdS42ew2H35u6",
  "key3": "3icUKmSn1Qw6KPLA8mowLTiyjKCJjCARqxyxaXcqZkFY6GS2QxuVJmEdhhgDWpnYK2aYJw4rBE4SZnpnysLP6hQ5",
  "key4": "5xcp3yUF6FzdXXBenFbqjszaGwqt7rqZMnpx7yBSto2nD8jho5pNGMUei9FY86kf1rpr11csyBEQUTJmKfqkg9ez",
  "key5": "2vaGoAU1QdVFfFWeAmdJzu6gVMeNM6uMMmADTsFTLYWR9L4H6y1ZimnqDn84rH9RSTmTq6A8VxeA7Yq5PyuM3xSM",
  "key6": "5VJvtk6YkcTRgDFjRUF6vkDb3ha3vW1nzJrZFSbK4AEuvvbN5WbZoXHhXsidahYfA1o2rQucYR8Z5EVXTtW9fg2x",
  "key7": "5eaB6AF3QHjFTN5d85p7GoBukDMkdWMyxtRWSpfb2W35Ggzuhz8QGFKHZLA9hRVyMeRA1k5NG4JhPi8epBXA2Ms7",
  "key8": "5Quoi5yikqwEm6sqHTUJNSmormVDBNjoPTZyN6UmrQ8PRSXPNB96udS84mpWijmfpXCJv7pMqgYAxUrYyQpVHYxe",
  "key9": "2sQKncTUkajjCcoHfBB42KdUcme7x79f9sRk4cuiYUNogXebKDEKuX1SjYxJpXcQTVM4p7UpqdqNFuWZoG9rXUPc",
  "key10": "55n7c9Pa9XEgouHUFnn3XvJhz22FY2UJME3sYpkqrdnAbPsSBTsMHbjVbSrhyshrVJ1s8UD7yueHHygerhRWrV19",
  "key11": "2NcJCJkpdhU19n2yYTZhsd9KzTJzXyBDbrGkcKqMA1Ck1mVrCovCHQVYtu72rnfkoct4zTSYCTa9uncd3wVJ1rgF",
  "key12": "4qBWdASBqeabyuNYRW8Yvk7gZ6Liy4E17LcNrhHTb3Pf5LNUfQwfKmwJXwjPeZZvzbKhDsHbLcFiUaNaVmKDW1QL",
  "key13": "3pdexuEnewLY4Xfao51b4vknRh4MaStSAwVd3fBEo2URQ5NdLALZKxLwkYdXVNkSvAMihVrF6sboYzkEd1zVukZD",
  "key14": "5AvYKFkmiGxDsdE6y48R4FqdpwmF8NihpfGAq9wDxBcssJqMzkJkZFWt9FpAHAb797XXRireTKSgih2iHuaMSWt4",
  "key15": "3vTdZVjwQNaN7LRVALbZnLidKCXhSwYxMrf8cPTy2C2RXRkqzGeYvHc8nFkE9FPVd1hDFc8qrW5LawXSJoqESo8j",
  "key16": "5nLAbkSwENg98zPvguemcfAePeyxTYxK1DAD1YdUUQG4wDDwhWEhLTnnTmKUNu29H5pZ5o3Y1mPCyHB7y1XGv9jB",
  "key17": "Jy3pmJ2LdLUzNhUU6YYbRGmCj33YBav9snZwGdEXY9Ae74yJhcnYqxtZfAXPai5FjcKwsi5iA1S1CEg3QvFdSWK",
  "key18": "5a6XyszvQ4S5JJUPG3iY5WYH1dxCSM5q1PXczMYhT7fZ7wg1qhcfgk3jNWn7u2wiJZnRrdD1BsaceqbaX5xCVAeW",
  "key19": "36M2HqtTTx9BWVFJAZKJTjDtZKdbxvyban9a39WEMsGbVU3QWg3UxPUZd64fFp1oUqSNXtN26vZ2yBtijyaMpp2M",
  "key20": "3V75MhvCwozeUjTLkwDPPbUhQAqS4MHx9vCr4haJB6Zg7TAqs6HuKhyhyw93NMgZVPhDd5fncqktjcc4uUgVp4o9",
  "key21": "4bEtavFxkFvYThXBu7CzJ9RqFbftu4djYk8rgTf633eU3Hq7fNKVGTUf9CLxYyK1WdW2zQciqaYy8q2Bhps74acA",
  "key22": "5UrDmrr7TKngCMwxy9jYtt5iWhVesbaMAv4z4JcPcJ8qzWby2EKSqRhSq1GQZEStvLMu6AjoU3wj6kYMRbKwWJJF",
  "key23": "4ji67DHjmMxepn17C96jHB1KQh3ibDGzy6CgjgEKtdKoKhiJf2rVankzCRZzFPQXiGh54F2TnFmqNuwi9uP6HVGX",
  "key24": "2Cy8z9kcTVVhnps8j4sq4uubGeGRWQbax13NoC6gMzLavcQ2yrNgdjvJn1acrrsPa6rwbqjQzw8m1yL16fVAxtfK",
  "key25": "Jf4KVDmUPQ3fftVvMZs8aCaX7wby1zSkifAv2PstW1rNyEZg4iTnyjibKvmqZT6z3rbbPiy2YAHGXtr8QazcGDV",
  "key26": "35xqYMzcEYqo9KZnLj25csEi9QZTZMN4hP3VQ4tuNngvAnZBoUEPMq9zzUNjtUTWtq2vHYJZiE6VJ32NCSAnGtKP",
  "key27": "5f2NNq3RtvaMfoWbFG4AB5g9FoyjzbQsKeiFfitnQV1x9Fqb36VZHgsXnZAis62yMyoG7naJ5YqnLhPrZtBS6RHH",
  "key28": "591JP6X9aCMh6F2aeEQtYCrDpinoZvbPbuUXug84A1BuHcQ9hcce9v2A3RFiGUMVKPLrBDvzRKus1Mbmucyunf4V",
  "key29": "5coEFjjh8V9m8w6rLj4gou6iTECXAn4BHXxuBEzSWjXFzCpSmT7U5oSVHJGKJrHVpVJzxaYQ92CHRTvW9xjL8wNh",
  "key30": "3Cm1zyX3i7JPtKr8sLYQqmqf2z9Rq9XL8n85SpN2fJn9pqzcZ5he9wDqA6Y2b9oz3sXZTzfzcqVZ4yiFXy2w7AtB",
  "key31": "35s1L3wjxLcWmt8BSyEQNyDpDt2Nxm2AvF5EQBTG1FmDBjMZ8qWkPZ39K3KXcF7E1emPKhFeJ671MJRHG7aBDq2o",
  "key32": "2gjJdSPLKdpCNMYGeZGdYiL3aq8xQyC9MAAQSNU297Cbgpky3dSkvANKsUU9tuCazZXnQ6A5fW8vXtZ9a9xno6KQ",
  "key33": "3rGWkxY3Y2DGfQFLeSVdC2LnbfVnKCSnNeQzCmJsaqnxb1eguUj6Q2zesKPnYsZG6rE5kE5V2q8y99kCxMpH6G78"
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
