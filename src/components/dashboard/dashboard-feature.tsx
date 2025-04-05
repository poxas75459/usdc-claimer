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
    "5AYy66dMDGmH1wQyshNdy3AnuBWN58CXXYuRzYh6ordGAdRTWye7K5cct9KP4Ug9694XmnE1wEq63LCST6oMEBzr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41yvWeGnz5kvGsvTXSJh5HazrPbYzH13kRKTaBUYoR1XE26XVcwzfme6SfBS5w8Vkx7r8Gtn6zmsVxJMEKQDYPxN",
  "key1": "ehtb9pRcD8fLfBy9SCUJKbLebJCamDPgHxW7YLZGmMS9CiQmTaxf9YD89rYXSd1asiMN5wKYE4nvPUdjpRGnSkT",
  "key2": "2ozKQCA2N3ZfvPMzZx23XMrWSKh3K4cXFpdvbm5Cakh14ZgCUFfE4JJC1KBrh7yaKCgYKPHtRV65JZ24FadcgfE",
  "key3": "Dt3asUSqfMrS7tW7fWhZqZncRKhwsRFWdsYNeLbt9yoq6pMs6qrakdwGbgGRqsaheyScpXXHxZ3c8RjWzXegvNv",
  "key4": "4ZnwtpBEjfK6xx4yN7VMff2ANn7BrhZEAugjS7M6TVxEuyZdehsg6qq3TLVrSnx534Ngyw1gT4aJaAGmxFyj28Pw",
  "key5": "3s24KCndgQmuWPnj5SosrW58YjLY48ogK8UP961EXoW3TM82nJn7ggpERD85pNnCQtTT7e5mmpLe4Z1YpB2jWYic",
  "key6": "5M5F5V7Tk4YhdaSVePKXCwiJEkYL6ztt1ZUrfZf1w7gvNqUaroyMwUPao6tR4JZM6hH7c4H3J4LuEVm4UtkSi1Sp",
  "key7": "3zAHm6A5mvte5LCR2zB4kQhej8oUpbZ9tLfvEKTaqmGXQftVfcvZmnDtCow5X7aKc2mP8FVQfXA8GUow5T8YGiim",
  "key8": "2LoNMs6f3fz6vNjKskNSUtQ6SKZBFyWX6v3Buy8pZC8Mh76X5nCotHy2UhAK4G9u4MeYp32dLd5q2mDGonLQCdpT",
  "key9": "3WtHvD3VsntBJVhUYEXaqDdPWN1qcKMRDDKX2deFH1dgCHCspqpFRWhLkBYsQrzVBYjj9NJuWaBpuBPQdVpN1yTM",
  "key10": "5LYLhQVVNC78BuTEPzqA7cDo83AKZc3yk53eXMsAJiFfotdgaYQozyvv9dM8oYDd8QC7LiN9D6zyWih4jiqfDUHh",
  "key11": "2zce3ZWCCviDyCa4kuVqp9jWLAH44SiUpyP4PiaH8bf8Yk2vLpjy2GTuisH8ZRYvxvWiM7mW1BEdPTQRNBB3jS76",
  "key12": "5fqYvojxuN1GMfSVziKAt32hy5eTqquERPGXXFimV7WSp6J5qkA8uGduCHPa47Fdh6MJ6RfKGuqKAkimnGnw3KGa",
  "key13": "57QF36oAakCVmBw463mjprGrKfNfgJVHmVMqvoDYNBweS9R1RZn6A85wH3bpxTbGqCjc7jYeknMDMiC2NjYDtzz4",
  "key14": "2hHb1dpzbsJuiwcS61VwFhJ1aB5oc6jeT9X7xivWYbp6JmwmwFam8E1gHYDY1mkjQJopGHhovMSNTSNwhhs2BLaH",
  "key15": "HBnkXthUedDmLmF8TLuqcbaTCMQV1ewNUu6EduXNJPxoh8vKUeLFjPm748q3upYAZSVAfNeo73KY3avBCqsLYgZ",
  "key16": "3AzHuQW73K27WhmboQvD9g8r6AfNDRZvZzJNCmd67oSsgfRvhdmi2ExAgRoLQZKeMXac7qm7jjEbxChuGk8Wvh1c",
  "key17": "xf24erLVQb1mVoxUaTL8dzmSLYAmYgXRjc1pUUTkgRobBHgeAQFhxLJwdCs9pM9pskGWBie8upDSWt9SeBfBSkS",
  "key18": "2QfKYtFTKgAKtfqRazXRd2fi8VWuCbaGfGcXPhj5ANU8g9h26JJ4ds9F5XZtrFjLKdoBtbrwgZXs11k5oqtGqXUz",
  "key19": "4GacServbi4p4UFa9Zb6G7QGpibkyQnLTpxVHGLxQR9ibVmqV5D8iDPHBxC7kQUQms9B2WwhuMzmYKaZsuBLdG64",
  "key20": "2pGTpcsRpXNthDX8WutLviJY37MY2CaM8Yq1UzaTeAVWjrUPzCwPxfF89b7vMDmNh9Cn4rcyWK1z1SPDC5TohEPY",
  "key21": "3RRKekREa3TxrZDgrLgTpofJ4B3VXrsckuU1DJDySqwFuCdJY38RnunZhwGo991YDEUmYVJL1JcN3c1EmFCeV6JJ",
  "key22": "4UgBgdgqoPwLQXecr2RoJA3iyypPWNvrHGJEez1unrSW4JUnpYTs9Z5UTdmUL21MZHJsz1M9jHmR3Dzsmo6UHDR4",
  "key23": "4eujFYqjvfUT8brkVcUWfpe9zC9sPzREoqpxCfyYEWVXsGKnrB9EMWPGKpfH4HuS7KucnjDUCdsynHcoGyUkk9Em",
  "key24": "4eLWdyBrhzYeRkK5Ume6miyX2CEP4FZGxE7SDq9wdLvVLoK8VxLBbKEmTasVpBLKaXiDFpykAmMEuj84uSBnNF4Q"
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
