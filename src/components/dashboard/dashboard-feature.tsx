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
    "mEmXCaNX5pmwtNpyEJNfno2hSit9MU9AFmzkuShU9wBzCGM7fZaFqUztuj8zuyxssChwb3LrP2kAdpoU3A8vB3o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3b2gQpYK4UdRh4AtRx49WQGV6ARhAquwcm7HXytppev8umbifdBGzK2yK4LE9K4fe23FMdChWvnZZwpxTjfJNFS4",
  "key1": "4SBUDrWtFy5EzFR74ffx2qAyJUpnjdABuZqRHrdgUUYx4ewtSthAB2xuE9CCvyq5zTF7iwTdzLSpmyvsqzv8TaHP",
  "key2": "4cWpixqPx6CbM5vMGw5TC2DCKvkDpv8tAVnuaNuL1QGgj9gK4EijzLyvYpmTer4u91JXk4PmA8YMNFyiSyd6qDWP",
  "key3": "5UBNz7UWiJ9cRmfX82qDw65Kq8fLLbfBA52yR5Xk6y24hoib6s8wafXk4fA6cydZbd9hApz81BGx7Vh55mVhQvtV",
  "key4": "2YppfS1skx12rdqym3FYBqu88jZWcmjkCQvwSyfY484zQ4AewMhDSVDqnM6aw7fa9dLQGYJQfJtuyfzhh64fQcUJ",
  "key5": "54PshnR9NZ9YwfsVyhu2obkm1M74MDVLgvAaaznx6sYKcXePyipdr7sEmBJ5FXpSqv1KEfvYYcX8zkJBujR4UJK6",
  "key6": "4oRKJioYP7KFw2haqfbGqUHTn4y9FSMCXrd7FVpYZz6r933dijczwdmVkZGXecix2FwEJh8Nb6t3MP8deHyhdset",
  "key7": "428116fakfsUsqoo394qYHWPVNgq3vpeGwkJJ2jbcYcVBi4vM3SATaBy3L6ZCu4Uf3PpY7Xip4stMGCsLbL4EaXh",
  "key8": "3rRxBf6mfXkd5WVpiziGhyxNhaf4eCm3GvvASnDzQpHSaqTHPD7ici8njuvhWQ2utz1jBe1sfsnNXs1UeDaim7DV",
  "key9": "2gJU6xN3U3mJokzW15eXhRGAP1dAGMcf7Ao7cxe6wcpQHhR3nTEGT5LKA6QtiNPv3aSTmUUsaRH6gYG2pahGNGai",
  "key10": "56foQycK6HRPqzgK3szjjeukMY1XoXUK139HtYs4gmYss5vsxXpHTodUfahysh8hVuQJzZ3Z2VtxYbQToNJoEJaz",
  "key11": "5uaYvPtdewy19EgYdtBCFpKB6MVpdQZX48rZ8zAdKTVLEiUJYXEuF1TVmCGeRu17gaL8Srv4zRvJRJrHNLDbdd9K",
  "key12": "3mVw9Lhi7k6ixDX1u9yuvpovSHNxzdXEJNnLeQtJgjmMKrrRXX7jubecx1f5F92bz12e2pkXvDif1UEDTeEXy3BD",
  "key13": "2mviKhF9sGCxD6i1MCA9GNd6yGyfRUjzyEHQmcVzKwvYNi31dnze1gprff7xpFeW47sc9n82mpQ5RGr1n7daJpUd",
  "key14": "5rszu48Q9xBC6JJZv8Rs7oVxpwcsk1Kk1fkLwZVs5WiiE2pK1hUzb2d3VzzKF5bLSJsftRu9ydRH5Gp2N9UTNNh8",
  "key15": "4EFtTmFoTdWDQsGTt9wWxF5XXaFY4z7aQuFUktpSo9e1r9b6V32tcMMsZj227qbXahjeuEpGEMVYYsyvmM4hrDv9",
  "key16": "2dovbbc7CvfHwBwS31Q1dFozs34aMC5fFmLCKqGGG1iSoetUmPEEyRsq92RMDa7mYmW7h9ceuQLpfNHFUjSyMGok",
  "key17": "4MKmTbohvWKkeG2LccKJx3hggqFKkPUwEMU3qEcp9NkksdjdeksQN5h89hwiZ3f3vwR37DWcoHuBEi4NsrQxHPKL",
  "key18": "4gatYAsowbd4AB7yKZG3gAfQTNiYj3w3mcn5Wbi3sXzSFyAmWzoc7ktVLRhPf28eDfVLqdqTXq5g4sD4qVhZ9LEJ",
  "key19": "467S5KKwzg4CTTR8YCDaSZLeCW2k5aoX5odHbL2FedQcxpsoaiiTV2MfteNnNurtyFgeA6g2BVW7Wjn2SgkGPV8x",
  "key20": "4ymuWqqWsxpSo9ZhzWFZ5JtVhwRTFWiAZhs1H65qiq8a5AjTS21ot5u9mD4CCSq5f9PVxNpMGBvSS6g6e4CpfiYL",
  "key21": "4NhXfrp5Zk4Er5HRSNDW6MYV48fC4AkPgSVBWP2GQEi73niHHWJcqWfAZCBLXECo9CWvHXSQHHshjCuFx6zW2e9v",
  "key22": "5tB1fiCNmKSPKUKwJZ311WXm925j5uaM51t4RH7BXKvjfvrUGr7rP7pxb4NugrHeK6oSjzoVapYyqzUeLsk7cFRR",
  "key23": "2bqLdE64BLSkAwdqeBAS88ic4cADz7uUtFzmpwCD9QEKDG8FCCQKpzdnmSGFgHcwQFL6y6L5ngS6UWJ3oRnqdkvP",
  "key24": "2gZ7HDQXyUC1k8kXzArZ7GRYUaQncQv1cCq4N6wDXijCrVfUtB4j3RTkh1wGcCnVeEA5nToB7MUCmBFJDeMkGDGm",
  "key25": "5PNPEQ4jNcz3qTLVj6YGFBGdQQNvhPrehiPK8cnFdKBMLSHWYAHXzFdmYdDj4y3NFRHqyh7KYKAYqCXXnbFUXNn1",
  "key26": "2g1X64VW645HKb1bdEPgcX5wh6i2U5uDLBNDrU2eukKuZaj7iNXa6p4DcJPpLcFMZuYzyyW9saWLiM8HpAEid93T",
  "key27": "5Fq24MCnLAHAcnmfi7eqfQ4MyQWXjx633LxbbUyfZ6AFoyxhJL3Bf7JL15EtioQydkH2SsJQ2bToLzesDjYbvFNR",
  "key28": "3xERfQdSzyrDoF3bUGTSSf9oT8hn9E6enfNsLPoqAAJQt1SPEFh84KDrqfjtzwFN7R7EvwmeZW6sbrTZaAuwUUtd",
  "key29": "3pBeHXETftB2fDR8J3b87D53KdLFHPrPnXeLEYG3qsBsZfJoMHHgVwvCcZkM5SwTndoF9t4tpqUxVEF28BK2DmoP",
  "key30": "5s8wKubBqGCSwXMRdu5TpcoH2qahorWnrkDXR6L88cD3Z34Edma6XoBseVhyNUf9kqP2A3iBB1u7XMWv2R6kDoay",
  "key31": "3suxCvh3HyuSPaQaThCX8zMjdnbQboQWNsYiP3PkTtnEHrUbdNbE9jqVLozfNjc7YsXoRSAwfAqECYSac5Mup4rZ",
  "key32": "DxfxAHJ15FNoDaCKxNsMLyKHeVD8hecvGQpkW5ZNhrWb4r5SUwq34HVoMD7u2FF3B4tPkn7H84rDbFAkscZpXqe"
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
