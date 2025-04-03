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
    "2Y1TDzKoEz54ZP2BLzSfH5Ho856roorFMZMCNrUYhv8tCciAP9e5jcUgmpLD2poxGrQczfZ1DXoYj7a8suZzyGEJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DuhYbVXjfmkxAdLBzPun56Aapn7CW9Hrwx34ARvLW2itA55ihRcxqDinvPPaxWBDXaP4LVBAAx2VtPHHjTHdHwF",
  "key1": "3cEA539rS37Kpb42TmWi2vJsYyzVxW4tqQkysZGRudcyPVYZWjKTSb2eTrcjFFyiQCsvhwucMSVM77VSGwyTrTqC",
  "key2": "7mpCKSGSB7m6TrXGuiLfyG8VMk72wxM2DyP9NKK9wzWYW8qtS8rktQz7NpdiNRdpzzCiJAu9pyVHpGK68yK4j1N",
  "key3": "buNQLnPYML2q5HjUi41rwSKCW4TCsMKxHBVnkJWLNPhhs6WLStkQjRMeY7pMSGPA4tNBvMa3GbpTbGLwwvN511A",
  "key4": "yzAxjN7c1DG92JfAuWSMEU19y7ycFamFeaxZhJMWT3fciojWPPyfo2dhev2SCecrGy9URj289Nu9Wa3geWf5dQT",
  "key5": "3UcbkR2uu3YoCMdJaeg6Bw61ZgffW8iAsuEYNWt8gTi1noXv84XvTyjYMarjzmDNUQijUPZCaPpq7ribprhj5SMw",
  "key6": "3A2V4Qokk8BdVKSAMM8v5J7XADQCyScgNrjrteDiX4RwKTFnT995zHLCZB2yFinfQKoo9N7D1hXzYqAfzUyZwkmv",
  "key7": "mGmSeqgQ5fC7fBPWvvbvsVd7U4nedxnRUFnY6yCsdpT3vp3P1KAC8CovriEgTnjQcVxfEPeUjZ4d4tnHdkR8dqX",
  "key8": "56yyRkGUzP59bUgyA2b7gQR1mkxQvBAKnEYgq6DiSjVAMJLxjnMX6bdyuWMouWrn1chMS3KZtiK3mjg89Spm4new",
  "key9": "2X7Lzf5hrdqE4UVc2rjSZ1Ngng95Ek8vEshTghDLt3gwggxNDyoQTZRztZT5VuEyPVnxmk4wFd5ehYM1gu3zPLdW",
  "key10": "59CzJ8J5mtzrcADFkL1RzSvhJUw1mi4Swzk44pyzRGMgbgh6Cn5NJVbF9BqvZW5s15zLpyYDVDBGrKF1CGkZCanW",
  "key11": "4jFMzuNHgcQt35WJnEDkeJZYeZ6DHZwiSLLRGc65c1KcZHsBpAcp6d1VDjPdhycrVKtb6PDESanWFmxRBbkzyvAg",
  "key12": "hUJdAMLwDxMkcm26r3ed9PCcdYMDsRpZX8ACjNZueNxzVNzLDT68CTEZE1m4RCSbMwDMaDKapjASVJNJRueBpkd",
  "key13": "35RtqTNGhXwycgBoZGh3w1Z8W6Dr9bgqercy8J4o7VbP914Kc3Ff229fVzoHPHGugox7cta4BmEnZKCgNX2GK661",
  "key14": "4Lcz4y22Z7Ez8iohVd3VneCxSh38K2uEL1wmB5E1f6LjjLh5Kxw5J2jk5RT474PayhhoqhEPusRMivF5gftbBb5X",
  "key15": "2UUaMeCsnps65cnHjH4PDYVqrweko5adsfHoBapqJ4753Ngc2LTnJp7VDZAwPHCJx3C77R1Mdb7V6D2YyLPqwE6L",
  "key16": "46iKUthJyGavfjm2Tv58PT13f34XcEGi9dngsnpYwNQwNAMbsjT9SAzunr44fGkDHqnfYkiWKLLxywpTK9tDx8Zm",
  "key17": "4KFQQwaLv2hLos6NFgqq2KnnJLwEyDCVEy7Q1fpZz3LwYXeMLYchnfm9xbpTx5jteuhUXWgDAMYgEEHJYXVQssBs",
  "key18": "5x5owQg7LsjyEGheXF8ZE1FbLrY4gdxqZSYP7i71hdtHd9TGshjQFje13EMT7bRDjSxJNzWxcbAzj9JjhmxgGfBq",
  "key19": "4XUA22C55eKWNzXcPskySvaoLRSFmsNJX3YHzFe8PFikVXASyAwU2zDuzzG9cJsEumNJBG9CBEVmSxsNSsC3zoc3",
  "key20": "5dAJDv8kVLv3mg9NAR2cufM4fvJPJFrswAKmGYZvHjd5H6buEbAGUJTdqnUEgnrq9rFP3eP8Xsq8dCm8b3uGpYdS",
  "key21": "5BjVDRC3LFpu6BRiGo4XxmmUykuBzuszghgreQf6PHJESTQqCNBNs7o9LK6gK8SmBLJpSa3f7TKzpcieRF9eV2XB",
  "key22": "4ap2LojZTNM5sPb1puHF519HoDuagDJzV1vcPARxH5PWM5rbRCQeYdKpEXcb2ZRCEGraT4ybLt3bwS1jXQVmdj4L",
  "key23": "2HAVRKKCP11GZUzDwVP6G7xnPWTi3v8GCPpMbXPyHzJ9pS4WErbWqcUdAidbdjxUB8eYfvtHY4sLG5fPBuYF29Si",
  "key24": "3V4bGznpQ9rkmsxqRQ5FFcbF3D7R9tCukV7DUumqf3JSU4e1jRJkv9DbR3P76bCVRv2YSjvyYtqpXNWWfSGDP2gJ",
  "key25": "D6Hf9ZjRJZbs6NbbXqqKvUy77vscvAaVHzn8SY12FRwKs1464o3mAg18HHZcSQUKMA6a28weVh99855oSs6fz33"
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
