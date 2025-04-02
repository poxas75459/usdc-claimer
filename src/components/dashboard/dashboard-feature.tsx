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
    "3gGaCUMDhtzJJoFiiokfwA8fCo7P5tBoD8HGUN1rwPPPNmQ4tfE5sAu9DzJNBcJFev8x7hNuh4GCn5AKMeiKns9i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PuLnNL1Yq3eG6JtB84thWSL69VWRx9opNXU1GiNNvj8FzoBiNcTN5WkwW7YnSD7VGsYdnDBjEZHC7tzTpJgqmoq",
  "key1": "4GQETxjoYZzVKUkdNum78WmvXicRXH4i5fRYiCzNjgrG1YPJug5VLVEw9tnmiCZTbGYSpVQCN9BpM9jFH4Y21kKY",
  "key2": "2Pa2uYU3qW4iJaDohdz82moogXGeFrh52YJHsidhnKEauzfu679U4RzvL1EDYpbG1CrjnZWrARb7GEdbLbrM3aoB",
  "key3": "7Dp1bDRfmwr5BY25nr4qbhx1nkQHapWxgHtXc9a6x3ccYYAB4UGxyyJKkZp19YQ8pQF5sLkvEAig9VFzQxEvyBu",
  "key4": "5prBPPdVNNJMmYn5xxZKwvz4zsRPrV4sHMjbRyK1787wJuZyz7GKZx1y5XFTbtxsAXfHZZaiqZSEW4hZSxeBRwdD",
  "key5": "4DxTfGVLn19ccTDLHB3t1FM8U21sfxj3oWh91s4k7FMDa1o9PHyypeG43BRZcmX7jkvYaU8szJs826xLSoodnqx1",
  "key6": "4j2B8F952jZwWZPAXptDc4nmrtuG4bCkLghKEwadL1PPyHjQKHCCrqwLGK62Ubgu1uMStV54YzmcHja9uGezxVB7",
  "key7": "qyYZK8L4nCVKcQemNDCYfQKaRQvQftw1icAYVnV5x3QJ9deqDE92TVq54Kd3b5TSYUx4xnzBMLvUQqGbYmS3u31",
  "key8": "5nPb3w7xngCQh6zsnZjjFfkE8FX7tX4eMwZPtTRsQFtnMZCUmkrcsGGtCzZx8uh5311T5fhUqk5f9cuJbxQtoAjv",
  "key9": "BVr9jpXFYw9bC3nm3rkMfzX7b2JBb3wM4fUt5U2WeQwrDFcgbv5eeEy6Yw2kWhJUn65AewScz39bwdPfyyHtfko",
  "key10": "5X9xmRjS71cvfXPRKxU9XX4wVP6h6Efq8KsFAEYFAQdgMVv4hRDtEdLw2JjruqzLqumf7sJSu4aXY2WG7Mueo2Xv",
  "key11": "2nUZeoN2CLrZp2uCXfXiTkLQM7m3DtmepTxaiP7sT9bLYctDWvdqutsdLGdqMadtfnTzcByGFKWDq9CMfQ4KMhtv",
  "key12": "4pBjNvnMjJb8P9GyA2qXspevyEFP585Rbrx2viqNFWEvpDL9RkLV5HprVAiRhh9R9z6278B5vyQxA5DvwV7nwauy",
  "key13": "xaxWNC4tfggR58pHArajh4Tr2yhXuhDYsiLrNB4xi4xVLXHKzvJCF2akRKhoC8vYnr8KYufiV2oPaPsT3qu2VCJ",
  "key14": "CAwdhcTsYp9V3qCTfndR57BUT3Ek7qZ7EFDoRFD8vhyF52BTSeUVwcVkGDiQGrtLoZCywYqzmZYWQPvm132tVqy",
  "key15": "2Xpq5Le4G648TtN8YH5G3Goe8UunnLjoxmSELqAC89k3B5ioLUeftA4Gt9SgB2WnBxaNjwyVxR6tCnoNKhQsaaD7",
  "key16": "47cCmCtZZbqJYjVvZ5obP65Fgy67p5RVuxM49vguUnWwvraqtyTxg2WkjFixR4ovTWX7BzELXr3amLS5owLqz2Ux",
  "key17": "Q1KZZugKRTYhYPVfEREtEk1c4tSsC48214f1xMeCBj14hRWY8uM9BnprUUqkdm6Mz2KuYeDoa5UP2diTtFQxN66",
  "key18": "2xwuAubtrbKhLx1iJKHCXsS34rGQVhJ7Xz8yxc1ruwecdBm1DgumhHtBZd3sEaL4pdsa4dz5nDkciVcvFNk7CUBF",
  "key19": "3ERtTejQMnWsX8Jz38tYfjJMEG2PJiC4kFXoCBm4YocpE6JiGVG5fUjCzF4oKFvGp8n8tkqaeh6FpK8JnLH3snkg",
  "key20": "4D1VfSpZNn1gjLqhJ6A6sQu4yBTKrEf3uHxXdWpUivZ1Xq5mGwy2yhbYyDJhfMJq7PSwqjd8Xh8vAhdfQ1TuXcJr",
  "key21": "5xzf8QqsdjBK46HMThuMbznYrWRwyMfckhreAT4Nj2BPpM1HMm1JX1pqmJp2W2vMsKmek8mYeTeXEX18Y9m5W7yx",
  "key22": "38kePaK7kCFzaWxzQ9VEwJ2cuYn2XgWZDcgnKVVUEhDjCHS17UsBvJeSCKfR12mWCu6MzDjCUwxLpkbMr3RiTBvs",
  "key23": "2jdU2BFFf7BRJNgXoNMoxFQsTLiMHEtiHurFSxu2d6GEMGJ8ZopL5y3wAfUvVKkG2jiG35y5qXoC59KiKeaHmhAj",
  "key24": "2wC2ic5KQGPNf6ZWeuBV3vJGzArQYengQKGehaVrTvkKS7hQSETnvcviyouuZVCHtq53DcwStV6WLAcsmY1a8xuJ",
  "key25": "5MHWVy7Gp95TGt8Z5FpCe3kXQPSp3uFtYQpuTbhXh5sfF3EBXEcSLoqZSpGBvsQ3ZKmGSDgteq9CCR8ByFx61w1u",
  "key26": "2ENwoxf2ybSdyV6jDBH2fRRc9zJ9dt6HFQkS6eT1DD54H2yJmTdhGVPX23R1Bf1Hocg8zTynPS4JewjVPM6AxXzu"
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
