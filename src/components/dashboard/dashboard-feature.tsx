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
    "5zgrhAivZ39fhVK42CiHf1q1of8p4D5ewGzKNfkcDN6BRLnWp4HeS2HQC7jC1bXxRtMNUoxm5vcdysHKkpFLvmHt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "E9TZHuX76vjProtrJUPFHcTmdQXgUsTxzStPLNyQR1CFH6VZbcMrNnr8EiAYhKAVDx4Vmx1Db1vdCedfxVn53YG",
  "key1": "3g1WzQGMXMp9t46zJaw3vaaLq1hcSmYxk5s57zvgkEoaKLzr9qztYpFVN26pvDfaMmLXhWpbCX1SLQJLVwGSB4d4",
  "key2": "EAvtAPv8XGzdgWxC5WEHMnMCs68G5ku48oi7CK2Y8byaGsNCW6Qx33AVN2Y36Yzee4Zh2u1Nz5t8DThTR2RNB6b",
  "key3": "2sScZpWV6VvDsZPR9B6taCZKK3BLz5jzwMNrhT5cTFcEoyPorMzKKxaHKtDKBiJDUWmwaovDVcR3dgE5dLzXnSo4",
  "key4": "rokR94qgwqpus1YzBK949yLk3Lv1K3APBejHRKmp15kj19xJmTdHiS4A18sPdTpLw2x4HfZb1Lz2kk4pRaXxtCR",
  "key5": "zAwy8rNW6dRpgBFeeQXAo8zqn5yTxVnsJeFKyXdV2iuEWYaovGQjF12ozneDFQWZgwFBdDFU3nCHk3uEp7J4gkR",
  "key6": "42zwdAdqesyaSESxMXNxruGRRxBCWBUoNYgk7NAwha3eiYS1AT7V3pJnPypyGT9SK1L43K2Ebr5jnT6u9DoUEHqF",
  "key7": "3a42DZuHLXMThX641X2EcK3pMHpcHXWiPb3R7msD4VRKLXC6z8gZjE33PxVeWGoacrcWFnrTgQjufWquXfPe6hB8",
  "key8": "2Beq8zPs1fRMNNGwNFHz6F98V7M3jm61bZavdBzMKnUHMfp5Va7k8mgRjYjvZY8qpasUr6c2GqvhmX8VbXdp3GdN",
  "key9": "4nmb5Cew1YH9ughqzigzDxCj8a4fktMQFPh7dBn8xXfCZznBPtcxdckPA1TWLxCinMnt2s6PXtunsxU8HE6xLuFk",
  "key10": "3saNaw3vfV9kvdw6vTTiYBfAoNCYkWLKsBr96DbhrpFWtmBSJghzfh1A9m7cbBeue1grk65szYaEvX4fHA6d2Fuf",
  "key11": "3JrQt4Xuk9gGRjq8kqf82CiphAvg7cLssWWAvjAgdp7rkhLQqo2scZZAvg1sBTzcU4VcfeWMXT4HZe3edFwphKZ5",
  "key12": "469tzHWBqjR17J9Dmc6ZDvHCDudbpojtT3hamD2TQb5somTSNxRwbF253ZQpbMYjuzQQFWHhdf2EXAjH5BdSYEb7",
  "key13": "3sC2V7QbdzzaiARFqEnHYhdb7cTQrH2gNjGnLjzxSJLuHWqQthLThpSwrL8N797S5vL9jBYabf83ji4Y9EKcbBRs",
  "key14": "3VVbWJPhmYGzfi56fLNKdP9LyK8gajnWhSGvDSmeSS73dXkFqHtzc1nuSkgQC5A3Au7AqKPZUHSMjTRt6ezbduVX",
  "key15": "3RYHjoCwxUQ8RjxKpXDqkb6WWaHKnzfqvQDb8uWKhE5cr2VtJaaYNx4u5GEGvew3o4Lp2VupX9AmpYQs4Pw8qyNp",
  "key16": "XNzibw2pVEnquCqaqhW5ZrYaPVGck9LihN7fHREDzQmFUiT2w2ZquDwtaHrVB4FXoE2GJQXsRaH8VjxVqQhxjT4",
  "key17": "9ewH8svnqbmt9LWVFP9yBuj2zH2TWZxdbCATmpVDoq9XFZ543zahQChoZJz6Pk8WREeAjt4yfJyt6rdRAvqLg38",
  "key18": "4Q4DvyRFRQaPBm8pQxaUd92v8B8uNPSszJw2XM2b8BR4MNeSdj7g9exWnN5iLNGb5JLdV2hAodvknWPTs7cWLVcy",
  "key19": "4wtUuEpeN3RHdL3hTozhmdGaoktcWDgipouT8PrQhm7MQJLSDAVSTDSh4tuvS9Gqk6QExTR5P13Ub83x3Py6ayZs",
  "key20": "49LGfwRR75GNN12Kkq1MZMUKewBQnSXe9hLusKQBUHhDy7M9zf4uPSAeiuQ55XfQiAeS2rdBkHPcWLq6sNpeinUJ",
  "key21": "648t1WaYevS5hHfE17ogrb8e7VJSouc7ek2y9FvTEVLvdLo3YqPpu4hLAzFYG2Azuv6XdXdwmFFk3myDUJnoXdVZ",
  "key22": "2cWQ4xSqctWgCj2SVb5Z7MH28Bxu9zAu7tbJjweJrWUSPqwq77zGG16JfcxK6Hc2nokW3zA9GgWHTDDKbMnt42pT",
  "key23": "4rYv58MmtxF6Qx97VAfiUqrNq9Cm5gyccrUunfVvfywWuyMsBgmg5D8e2XBhT6cztcfUe8bkR4QjqByJAhY89Bag",
  "key24": "5DFrHHnmhUx73Z7ZZDeCUhW9un92szEcUfPmZKRoLycJ8UKeoFEaJsJh3qzA3juiRcZRJW1pgqRwErqFCVZnas43",
  "key25": "2oR2b81Z4sAKuKK3cW3CH2F55WAWCuHHhnvnYwEt3EQ4wXnr1rjiG9APS2Zf3vXPzA6ibjQ8ntjzeV2NV1EwGJM",
  "key26": "4jxtLVKcgBqaMNY4aUbxE73tpbVLsMvErTpuKWvoshJou8rrvH2QMZjYSQ7aRvia5Xqda89FzRZM8VubjdHKHKdn",
  "key27": "4SbTp4nLdvo7VT4rPEP7ahtxvPfAtXm533f5yRG3Zj1uRgsZLCotnS13gQAvKG5ePZjbnN3Ups29vqF2adktqShy",
  "key28": "5A6Q9DGfaPHqSm6vsam43xa4EgyYnpby6EJXdhCZMvNsTWaqYpkaXsMEc48fFSX4yvPMrY6zMmoASzktVNFAggqv",
  "key29": "5cMR7aC4vXLQ8eQsYqkrctQUt62UVM6GPgYW6xGhduU7e81x98aFZwgvAepX1JdNY4B2vARhq4HPC9emp7AYDiJv",
  "key30": "2FdUyWJCLWwS5sggeWkMnhJXBqV68cKjEGbAUga2Wjr7vdFbKRAayWBdToxQ9bTNFg2WrhejEjKaGaZ6exgKNK2k",
  "key31": "4JpdLBTC5dT7ZY13HXKveQ21WUeqLZJvr5wSxU419coHbnzG64NnW5dyPwHGR4LDkheb6xQ5MjwdEtHQyvePJxpi",
  "key32": "45Lw4tXdS5wMdGQvFYE51rNiWeY5o5J6cS7QtWbm8yeBNH4JvqZE9BrPnBaLZBJsA7xZCRfkgL4VuYThXfpCu3fa",
  "key33": "2m2b6fxLHkYHmUgJfcwH8pq8sQ6V2CAKUZTnv4pGUpuNp83Cpc1vCobZyzQyBiWaB5PY9H1ppwvSoEZj5YfMQDh5"
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
