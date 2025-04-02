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
    "53s3HrYb17bG32zCVFX5y9DU8ThgiMjtjcHtNVhdnFLfePy1g9ZVATT5JmiUHdMiKQFAMWryxnZW6PR8NKMhSJeG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "672XkDS3z9iTNj1dFyHshndXQa2SjGiBVYY76mt9mh5TTELdCb5DPTcFKftVEKD4s9VWxiPdmw8EG5vki3D9gfeV",
  "key1": "2SBoGpjLrYUmiSnLz23ET5DNW1CGgcJfAAcdhHVMSPPkZVBsjiMGx2Dz2whcpM5vXjEecbdX7M6nbyQy1wtMNC36",
  "key2": "26gX7Xo7FSgJTbj9x8avnyXnvJ7Ad6mxCFuSwZtd7rMp9Fv6PYnwnMRvQMVS9m57LfroHqQQRKNi6Lj3efkaWq6q",
  "key3": "5CA3j9EVDX2e1QY7egLCdrYMGVfj7ojmBH91TFbH4AZ67DjEBnLcdGt1XpqZE9gfSCBQuLxF82M1hbmDZjb7RfYp",
  "key4": "4EoL5dnQeYhzBPNsb2e41Tru3n6tFf3DKDSc8jS4tBPKfvSnz8qWDU7BnMmNZMe6GhHqWeLuvmMisnxeGdaGnFeN",
  "key5": "2yFUtK45aKLDfgwsiek8q3y8ma5ZXJfLnDQdhq8QXKQkyWNW5ANAXWS3f31ChxbUPvCFS5ifhqNRxzjcH347wQb9",
  "key6": "4RCpS6udu8z5DebHzEpjiiSEcaQK2FLfcUTysythA5Zk5NNsLAKGQeReu7e6Sh1kBa1SWe2BJixi6wpFAci7fHRS",
  "key7": "2DJ4NQnWUBMjEmXuqyNFyZFtYGK4v6CK2JiiiNydMnuutMTpB5PFNEAPN1GjA6Y1gdj3WfFSfCwcK5sWEVNc3JMN",
  "key8": "4jFDUBBgwzatFZ3rtiVFwW2SCTwhp6EPSqTuafVA4cpxb94jMAjnuEqZsiBZUzCdLPcWr6R7mKhpxcafuWxB3rC3",
  "key9": "5s9M16RNsZdzpEkhZr1kySYoMnvPEccRpHSf25GcFe1ypMacsQtW1hQNWTsQJ5GxobRLFkvfEFKThTjkJmFtvsde",
  "key10": "4i1z5xqpiaF94GqzP1wCoVJifvfvxM1aiTXXDe66ZRgp12rhQgqv9MKnet5UjRxZbBsVkjwKEzFVRYWsNeAAuKSD",
  "key11": "4Rg59CjLNLNZYkNzhzcmsf2pwaybgdsipPeFofePbk4Vk4ENhb7GESspvnGunHz1CGsrB7BdwRjtEpbX7jRUiyAa",
  "key12": "34NhPKYL7ThCoewQf3fLqRgABQgjJtTgPr1jmUwHww39eacWgtJHTdXkGKcLDnyi3oxZB7iBrojfqm9oH2LdNdin",
  "key13": "5AeYK3fwSreKfNZfWRVtcs3mWnPFUM4cdcTXBLBoKKtmmHmXGzzDaGuFJriE89jLsCNR4cQbQR9gATWE7anNRR3F",
  "key14": "3YiG9BeUp4vzY5JnEABE4XTnw8EW5jca3G7mPAyis7X22joq8iHFe16KCtPmAf8XYVXmvXtPfptFScXHTnRS9R2U",
  "key15": "2k3XbWwHGBA4EznewEnk6yBX84V9eB9d2BA9V4iLXnCks1Qg1q7cVqvyq1sm8z2JV1Graksq6cpE91ghMBXTiYxJ",
  "key16": "64oMrR5gMQS1EgpKxgCUwSZpPkEVZf74Paah8hJ98oyFu3JtLind3WGW98VLGd7VpZjzUiX2Q8rLR2ZKK1Fb6c5g",
  "key17": "3SuvFY62nWStDo9kesocv3hiV1SWN1LvujhXR5h2VKF6LTJqme5VLK7GDDAjLejshF9Ne9hadpEv73onTyaf6dHj",
  "key18": "3KxtAqAoFjSqCdHv3JyppC8ibUuvdZ3nc6i6RsT8LRAXdFQ3TtigZJEvdSzzwTpiSdJbwKceh3kegD2xpCs5qnTe",
  "key19": "3SYFuK1hxxcYLzUH3vbVxs6Nk3a7YcDPPtud4TfWnLMbh5hrVwAPDhBRvUFefKpeYF8bqDkQvcAWorwyTpERF4TZ",
  "key20": "5SU2xdWfXynwC6ZUaXFxBkmmML6vGamRpAsjGQzwRn5z7aqKHojVLXbxRhfRn5LxtBZYjskteVtasvLpGSfZ3evz",
  "key21": "4ft4p5rEV8WSrSjSMhRxXMfDHn9Euyn9ZFyA5eiLTHKCB4deYydNH6SmSGPeVtKyXY9BERMvNFsYHitariHEd3Vi",
  "key22": "4wYUJn1CzriajzhXyHpUM8UgLeFnYK717zi69bJ8hWpCPmFqZH9xyCXjrinU5PDD7ZBAkbtqDzUNY1itGipWHt2j",
  "key23": "23tg71GjPJtJK2aW6FxARSxFsoFfdB1hkCuTmYVV28PE3j7E7RfyzZdhZPFiJQNeGau3xC69SU2Yy3nHCJoidkVZ",
  "key24": "3ib2UbqSA4FHXAJdW5dBfzwHcPR8zxCfYgS6tEpTXLVzfSdUwVeSf8MT2vzfSVS3bLvgNu7TtF66wAmzr7Kt4wtQ",
  "key25": "23LdvpoTKndQGgk4GaHT6nZdg8zXuiWQmU7wgv8sn6AYGchbsygVuB4B3LswKHANZW6Z4yrt3DtapjmjS6DFbjrr",
  "key26": "eC2gstoaBJPX7BMkuNQ5DuWarhuvUYkzuP8DyVat27N5CydMaFRt24MoVfgw6VceRXgsZMXpx1nuFrp2C3iZQuL",
  "key27": "Gzx8CD8QdfSAm419pogtz7LhVCxhoj7CuZr9iFb9b1mSw5fsm7vXVBJCRAwZhnyPUuuuB3du5yeDEVYCaUumfc4",
  "key28": "E2AfgRNMnaxotuZqHwP8LojVwwEovzQMAanYyBBdFRXc3EUqk89N8KoZ3Cepw4dRhPPMu6aESp3aTBazM4iHtbo",
  "key29": "4zhydz1eoP6sFhHgpL7R7EyuQtqpFC2praJFToYRe1HxFc2iZWA4QSwEm7zAFPRLeTgTHXpenEGvmgZ2cvo8G8F8",
  "key30": "3dM3qeRxnJAxqmJkTrjWpEXgBv5UUucRoQRMekMGY1NpG875Z8yjuyWjGajwiVu7xaw4HzigGsgrmeqTbe88UiKz",
  "key31": "3CnNaEqtbv8kShVpbtJcNEGiEoBuanFyvZk6QBsJSzAMQadEXmwPBuEakMeYTrBuUFnXukNurXy5HPxVL4G9nGXw",
  "key32": "25FieacpLDHY3N8xJa3kG4DBPne2tiZFUPWTXVv9hhFWzBuYYDSdtyVMS81aVBQpjPbLoH6TPwfxYh6RcUpyna9R",
  "key33": "37htvpsDaVBtHZmrw3micoo7CV2fwB3rtR89WJSfmqiVW1rYiDPz7BAVaG5qhSLJU2Tt5RbMGjTsYGRc96F1A91Y",
  "key34": "25PkTtuZSsVEJzDZ2LPqXzsNXkpjabf4JUzuKusX9E1JQ33aX9AGkLYS149T2zKRW4PHj9h8WpEtV4erVXEgDKES",
  "key35": "3sZLgzvDBFgSmnLqjA5E1huwRQcrGdy5afM8QTZfgqjYcZ7zS4n6JaXF4VVsTnsQ83r8Q1pVKNnXNBtk5eduZLzF",
  "key36": "3pVH7fYYsr5aCSZgHpPzi8eSwvKnCDATRYN9qckNH6WuCtTNxcZiGP7Zd2hBdVRWjSCZHKk583Pvzck3CWXnDJDJ",
  "key37": "4Pmp3FjzuC1utRFjWuoNtkbBK4n8F9hj4m5Xs8PYMBdvcutDJtqmRopzwvgaxSJCkPiVjmRyvDPM3XhksmskxKvL",
  "key38": "B3h9BBz5Uzqk8c4rSjkms7GrYRx9x56F5QM3zZiNkuNAVgRL3tuCejKYQJhRNpcxqDqmpyb2W9WCbYmpK2VLsNi",
  "key39": "2vQPQdCutx6QzJ2o27Mhn98M8SMgBkAdoe8XpRXjFySyqnskNw5MYaDpuS47ZUfJtPza5uWSz4MwSAxgzSZjqh4M"
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
