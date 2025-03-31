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
    "29zyHZRF546jMD33yCUCJET6e8JmA3LWMxT8YWvkJRJbwELLZCbmbZce2APVMGJ61ZpoJEsKubb9795hGLqmshFC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jvyV4BA8PPdu6MpkkpqoNkhtrnysQwqE1igEqmg4UvLwb82o2xQRPVvx22LAPqKgZ4p88csza8eejKpgTn5yZgH",
  "key1": "4gcYpsSLpMjDAjaerB5o55yGyeJHYtBWoJzE8ZnwukKKF8BxXYpA5w2rt4MoV6JXw5pBeKhnpiXFpfEBswCZAnjK",
  "key2": "2dispMWNQumVQTMkZX6XPwWAU8HBjqS6EsywxrEHdWaAyJMEYphjPB5cpEUXRfRuMtzvxXKoJjcRGtgMWuzZQNZr",
  "key3": "35gFrmRZo8meVXUXmLFNrHBwQUU13vfaVFd7KaBMCrYQzBbUwu5nwxmG9KwkeNEW6PVYrUwYEvySVAeu6SQjJWuN",
  "key4": "5W2dUbEKuXr1azWFf4LjgJ5JR67NZD7CLfpm5wYXNXa8JU8Q1MY5514PLwEeMEdVzCqizjkt7AcX46Kyhstfia2u",
  "key5": "4p392fhzKYvLGjsuxE1yofC2kNZzdbXyEdrV3LJz1G69vRj2pygmo1tSoWwryzEj2fw1Vc5Zy1YG4sfqCg7Lvzo1",
  "key6": "2dW7v5R9GPwRB7SLkWKoT92XNghone9ST1NDDLi1GXAbCPb5ccFRGUSFWE5TSTyP7HC5D5qApadK7QAZHWshACGc",
  "key7": "5SPYqmdJS9s1ejbx4F8nExEa7rpFzgDr39JjEbnk8LLEZ6ceuYuBhX4EPUN55aTtms7g7HYFzC9msZWd6i4oVekD",
  "key8": "5Xtg4cUaBdwc15NXMGqEhskExqy3gbZepLdMkvwVYohp4in56ik773iFvBTGVTLHXwq7VFdnkCQsPZund4W9d9Cu",
  "key9": "MNtzsR4CB3TWrEpZfptBrtv1FhxL4ZaR83Gd8K7hpsTski68ojGEk7U27E6dxdAfygdZUVTiyhbMNDfY2TjpBW3",
  "key10": "4mWUEv84uPvJd4DaPVz7dc7rDXQZpTr8Sp2xoqJkVLMMZ7JEg4EkXz2nQiUtyGupvGvYVSYVW7j6VEVWsMEDccQ6",
  "key11": "2MpuwhKqXZbKtPrcFvbMptemfwTX9JKoyyK9koJPCdXxgzTjLeQnWcxLV6jUhLnfYe2iGtUnwXBjdghL1rCJizxv",
  "key12": "31nx4n9Thp36xuaFHHb7hfwQdpHXach2Qt6ModfDqtD4t7Di8Efd9CK3F2T64LbWBEQixxH5Cc5govJkyTvSKEq8",
  "key13": "32WjGqmHK4hNv7ig2PmgoewsHWzf8NVuG2TYXx2pNDHpG3GpHxWETNyco47D21x4LXq9tLbf7uLd41fdW7e6WgLk",
  "key14": "4cpqhcJNESswzpVfsuHHqrhtU7YujbTGVt7w2uEjFUQo7iJDtgXDgF528xn1sR3mFXNUpFDiC4sUbFHqSe9VMKk4",
  "key15": "3RcqZWuW5Zz6Fj9C4foNgYdudrD7cVvQNVbrXaTiTE6fPBruVeaZ2d8paEsDAuhMrR7WmSFBb2HY5CEEtjfE2umu",
  "key16": "3gQ7RsEPGB7v5yesxNaUa5GS3eD2xqYSTRXLcnnkD5dCeBUCAXnykP31cfuMruNUnZQQEZCJYXs4wynE4GNsurVe",
  "key17": "5cqW8NXQj7HSBiCrK88k9siNcMnjEQ9DbaVHaV8iSPtsqioGjtRZGne62SoHrZ5VdEGEJ1dxqRM9reWsd2oA6YhK",
  "key18": "2X27Fno7ouuXoTc73Ge4myyaW9y5BMcmZppQvV2ixkDEZ5zuVTwhoUyk1hEkzamZATQvGWTof3fo9XXomFTBQYNH",
  "key19": "bCdXnZCenPR2947EePJb9hS8sV9oNzA5R8ku8u4vpiMLLVinXECoYMrkb2Zs4sXoWmd2HsuV3WvSpmfARnMQcDi",
  "key20": "5vU74XeN8qNbUjSkCo6raUecj3cFWUAQwqzUcqaTAMeWePgsMQSzsExf5wyc8DwVPgPM1szWb8ePUqQT375g65tC",
  "key21": "7MkYmQYE3tSAXw9QEQexNCbbnQvNXoarD2CJ8G7ABjs5KbujnQRRhVWM9UGjvutVKDVhTukBEUSeNB8nuAqEdin",
  "key22": "5NCsR577tQ3pfkzEywF9tAfzid51RdR8s6nEzJSZajHwosMvt6t5Eue2dVQtXr5ff5pdN1VeDmn5hHdxQEWzi2Wy",
  "key23": "3vVsK92bUEsfpN5Shi7LYRkTxYKsmtr18qes55GAQ7v8wuvdEFTg6AHz6tUTWiG9jbfRGdnFSiwz8aA2B2mnP3Eu",
  "key24": "5U6RDtYHdej5qXcrNHDFXEzkWdtw2m8Hvhin5G4RJ5mukLP7H55fivQTjhKqA7AR5wYxJfVba1KQQJPLtBofa8gs",
  "key25": "3SWnRDGSrCDfaRFLSdthwPoUsHtPNFjXU83VTUEotVribtVviyq1NbMyeGQqhB1RvT9u38yNLkb8GBkHLtCo5wKn",
  "key26": "4UA46H7Xy9exaQMwBPZAK8DBCAghVcvPVV9GzqsaZ5DRoU7oMUgdaCv4sN2Z8nYoD1jPJEMjVHYKe7oiqqDGaZMq",
  "key27": "oAUf4yGAhpWsu7RQgAFKDSN6TqTgD4o55m6AMd7LUjb6bHXh2gEtudTmP8bMZrHHGsTbQzj57DBXR3Cu5QK2SEL"
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
