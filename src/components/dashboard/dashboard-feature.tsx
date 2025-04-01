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
    "3WZu5NubHLFQBW6e6kfFvs5u2scvtH8WzHmB3Mv1mtXmxu79bQmEBL6WZ4HbmAftP2EQPK4yCqtRn5BZmzZ4ajLB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dVmncgf2KACFEB5NhDVbzaJnb6A3GkuqJ7bjTxym59qMT1qvcwT1SxBWMPNNguf5o6tYXG4BvD7B9w649BKrw6g",
  "key1": "2Byr3V35noHpVvkjydHkx8Jdp4xq1vbcumAddcrdyqYX5wyJ9pR2PwQ77a9g8N46QxUX7a8zrJUbAoKJkkdVCwT1",
  "key2": "2aabpFdDxuqaSJ7sFeWDm8WVoZRieVM8uWDjgCA4Pj8PRHE5fYtQKYfPirMCCqNETVhGfNtjVEHBQhFDBnbhRcJ5",
  "key3": "3Zs5oxjUBVGN5ryFdHV9Qeotj3wKyBh8MYWt7W44rgYsLTZurajV6Reg8Hbn3TYwRSMSyoXyrgQsLUbpcTex4SqL",
  "key4": "45Ktus9fnC2DSNgS8P1vMkLkdN1oJUDWKX97vfC9qSFHFxqHHrTNqy1XrVkkmCxpHUEa49BawvzYysPi3Fw2RuGg",
  "key5": "5j4Vu3bukTYMTgkxXStHQXk8fNj7BnzccK291Jk1yJGgJ4HQWZtnE5yGFip3zfa5UanmcyqJbDjY6nG3eseBgqau",
  "key6": "5Rkv7rxfGehiL2Rb1q9cBvFjGeqSkbAxB4eG8ibt9qgGY9xjFix2kpEMhXrudot8cm85ZXjgBXyLczJsFGHhKSFo",
  "key7": "3Eq38CJ4ZhKyY8BVvuubXziC3kWF9ydZtFq9R1o53jjU9yGhN2ktSxkktP1HYej7AroThcJDjrzh2rQnTY4Xa1rb",
  "key8": "5aJQY6MKGV2kwr55P6rwmgrZQ55YAc9xsRkUs3vVRipynkkXJ9TWnoGmoSvSwMZPy4RP84qeNxBnQHxzL5hEm1Pn",
  "key9": "YjEJrbpceANXU6rcmAh7MBDMNiS5VVawbT8qbAHZbC7cNT6G6UkYFWp4QpioBx86pMCy3uuZcUcJfkukZCqwXxe",
  "key10": "3ocqNZspSRQJUMGrDAddjywHMvt6YN6VEU4fAjryYWiArvwtdUV5pH2aQDxCsQQ8rES5DpYUwwN4MWRg23CY7axE",
  "key11": "4uX2tjnuJfHxk7ehWPD3NABbiVUpJnNEne3UKZg79z3ufyh6u6jFBVo93Uun3TCuQBEr1yt8MDf77sT6oPAGgpXw",
  "key12": "2jc64MaEWNGuc6gGNT6X4cZvDLJjjMSkQxfeXvzNbfd1Wwq6DRwnjaCNyDLpnQdXHJgM2t3Ak7ComwCsUkujJk2N",
  "key13": "67iiQf38FSAcXf8f2g5eB8tWuqH6hRwUSAhwRDYBvzELViFtoC6BkN7RNn1yikzJ6qgM8PWJLsN5suLqZ94rXTc2",
  "key14": "qUVfjNPDwKs9zHCDkohUUuUSvAh8D7yfMtP4VoP9EDApm2LTtqv5UEmREWknPxT9pkW4Z5HpcjqaPG3FQCScnfE",
  "key15": "282HQZUUJVudGN8pKpJQcqCaKnwNN3TjMeukXjn3m38VUpY3G2KjnHmdRDuq1o6FEK43QmZU1aMSkXApnd1PWZhv",
  "key16": "5kAXqtya7aLZygJS1WowekWDjtDVkfxfVeMQEo2qMVH1q1ipYWsvALLoiFPkHVUaShBV54CHtuTdrAL3mHXhUoxa",
  "key17": "27c4w42vCgYKSEo7S22AeamPdPoqizwHv7SyM5UUk45dxoFEyNQjVoUwPzehELmKD3sjuU8Hv4WibqkYaXcmwF1u",
  "key18": "368UECeGQpdjtvHMxNhQQjz4zkK3bk2VVMnPT5zHnLoQE3KdAQ84GEJaCL4JmXCt8VJwrMXjq5LbsKpAmTQaKoYH",
  "key19": "VpuZnEDKgPHnqq2DgNA5apVcP1tjdM17cMfdc7bjgD77kRgvixtLMM5BQZFgbShhUcgpJGJ7rine56MNXA1eTW6",
  "key20": "23YVtxiy9vPDdqjwesGKpyYGHoSgzv1dGLDhcqb9enM2dUvZkwa7CH8qqDaVq7zqttaebFxUbgtd8efQBiZGMTm9",
  "key21": "3eWVDYFEoBqfZA8qA2B11GAcV4PtBvbDeEWVeS5VUN9iT73KLpWABzPNjdjcGN17fvVEVcGmcpirq2psEg11CWhq",
  "key22": "36adLGpxk5kcWqgW7dbe3JLpdNxPco3is9cNkUw5XsrJTXzbNaumoYjLFmpCA34GScNiyKnhtoqTFKEftq2vefAQ",
  "key23": "wtSNtRkkrGMcgBhjtxf8MmXgBshXMJxBfZ8pGEsy38PkGqL5DzJ25EqNGk5hRQuTfwucRLY1cPvtxkSft2RNLnS",
  "key24": "KySsAnRiNmVzwU4ZVKYpNeffiwZNWEn3w771LUWbRLND5ZfEEB7Nek8pEgm4XNyZype1WP12bvABFr83j9m6n9S",
  "key25": "2WgHB1L66JCFnokoGu7MTsnszs5n5AiADky3eauM3GMbBG8nLxUCR9JRrY7KrMxa6nMfugLHbNK1EMTaoPJvBGmv",
  "key26": "3hMJdou6gNohghhm8LBJtg8FQeUuJXLXj2eUC984V6h5Z9YJxAmGDDTqhQ4ZX1EGJegVNsKyoaZ5aScheKAWsjKj",
  "key27": "5fUpw7r9MrhPWL6cdGNu1wtnjhox6sNsbw1Ce7qQEMTpcyBfBCNWupd6LGkfw9ecJPEKdp1vCm7EWCdHi4C7tde5",
  "key28": "2g3TtKP7aVJunJnK3Mzk6Xg5Dk472JZdXyvsttY9ZSXPYzJLpSTcEBBphXfF6KF1UN2i6i7nDQztPC2vvSeqdra6"
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
