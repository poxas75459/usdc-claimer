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
    "48JhZNPHa47fyxBj7L7X9skRXk4EDnZxnnhbsbHxoZUgXdWHHNBq5fu61U7Spy2cUwKzyYpGUF85g9riq9nhvdAd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RTUoZKVYA5P1MmziKvTVtV1efmNExsaP6eVeR1JAtJsfis9Qvx75UvQrLy7AtwfkU7CUx1qqshsgfP8FKJfpTWW",
  "key1": "28DqM5dPsAxzPW3JMJxNtCCucdFLXSLmwFfbYGDLWk8AEtnK9gkUyEDL4cms91sE4u8ZYpFTQJuAz7JjxKKuQB1w",
  "key2": "5PjUHGCbcsRDnJjEeneg4MQcmVWnHUdp6uC47NALaEimJJ8ahXKakq5E44jqFF5dpM5EvqHiBwu1N78boLjbuSMn",
  "key3": "nw17DVnHndf9k6uSSw4W8mGb9FFHksU6ZyKR98VU22DfiwSYJdZzfbGandRFnWKEw5X1CqWdHneMSUerv6xtKvZ",
  "key4": "5PUED2LUwFEk4uEXRqmHiaVVAC2vxiT1KEu1bPNSfiTRYhucQwipbrmsG5Xobw61faXM5EwwLD2oyf7v864iJr54",
  "key5": "N2VXTNVDTH4jMpYR4xCkbNhjexcPiEY1PkVt8N4VoyihH8WWiHNM76ycrHzJqNPkKcNomdwrKhVSCzgguSYr2KB",
  "key6": "2hyK4yKEWRtZbuvqd6ty5cJ6weAqEyyUeZwTsJ1NHe6vnnfzn4iw5BiMJKacp6jB2vEHCN5zWrmiCsvfCoL8xuXB",
  "key7": "2eGpMh8GYz1BhWsj3os2GfmP7MM1a7qWvbxfY9zhmQiWayde2wp2nVzNQp75e2qn5vFvyL75v5HxwhNSF4foqEHy",
  "key8": "5i9w3UPRv6JNhf3wauudRpj42NoGEMe3FmhrkWmnD5UHpKnVKvYsDQjZFP8mE4gA3Do1rnxdoz9KpvCqUAFx3W1V",
  "key9": "4rghtGuHB8qxBVTJKJaYhLZCuTziEAsvc2aCpYgPdk7HFG9xf8Gk3wn6zLgLKs398d94GreyHeF7auFCVhVZGtMY",
  "key10": "2vq2j6gKqTkwzTqifaP95shdPPg3KkvAncCXd1u6q8c3NEHwqZqdxyqPyYWzN43z4W2J4fwUG8xf7xiur1dmSkTs",
  "key11": "5JzNXmK1CYvMvQKwhoPxDgYtFTtE4RMHBnNMArv1MUtnzSUxAcZEfW9CtJc8VX2Bx7gUNRkouzX2hTZfy72EBG19",
  "key12": "2kGRJydn4jQxbngxz6uBem6HoZcf72ZydAdrJKHuXjgYGcdfsE62gVJRYmrGWwf4Fa4HLQZWosepzfJ2qQPPjbeB",
  "key13": "RtQHGRdLsXz1YR1MHg5MX4BTWkeUjNme9pnP75EkMcAAwxuUzUgURFTCniq5mrfDZa43mQpbv5EW9DZNESN5rnD",
  "key14": "zDWkAY43h25jKYz3QaEW4Snc9RsxbVdNiVAcmPcgBXfbSdHkoUu9EShia4FYPMSSiyjBzXLE9iNCnxqLKn1fqZW",
  "key15": "5P575wPy3YdpcGUaT6dbu5FAevPtMxc5BNHf6MbQzGy8bjAqPXLJGcCSPcoDghLrHVXzhup27siYaNkR1y46Pcuy",
  "key16": "LfcK8rN1FDMqhsKBNahmShxRLEzk1YEf5UyUN7zbujxEP4ayyuHtRDskFyUhrMh3TfECPYibPQpf6WFERNJBU6t",
  "key17": "5nYMsiThJyN2qhfxHejDAaCjJFLzx6yBcE8AdpVGBJuxD4sjUftAArLPM9dnjjDpjoNryNh1o5oFyDH8afhFbbxx",
  "key18": "5qZ3aSgAaZMYr8U94iuLmRJsCyYRC25A9oiAuhyVNakKChKvVX7ALVLRofrLkVNFMscrkdvLTysLo3KjQUmA2CCm",
  "key19": "5wMK1jP4phbxLmB2GBp7M33JshVCNDcyfutyZ3A1UkACcypy2Leo7KB3qtguz6XwwM1wkfnh5EdymeNe5v43utqu",
  "key20": "32kjaWQ6QAPxsp3DmCsHbLbTVCqga3iZ1ctgFTFBNecoAmYqtH1xn1h31nsrA1ezV4ay4W3sJqiEyEQqmhq3AUEN",
  "key21": "4H6Kouoai973TQX5r86ydCjWUCJwHPQ1tvax9NNiJjirmt15oatcUyiz8ph7uN8YKDkxxqnRxzkaXcn9y9VAgunU",
  "key22": "2fwcZRS7WYMmnLE1j5rPvCFYyQgEYegHd45Wf56nhoLPfJkWWh5Y274AC6NXcay5hSM48CP7WgaNYEmUnDsBnxhx",
  "key23": "36CzDMNbqfqiTSUPRfJPmLLAT91GRGiQ9ePm3EcgQ9EHVJyC9q72puoJHeyhG5ZfrTV7G5DBVenqYxGL76XmCd9n",
  "key24": "2DnqCjEa8rtbUPjNXEDAPu2zGsbY6TzqXQVPL6athh4BBSSf6cxvStMzrPUPLPTbavxuhQW9fEjEHv5k63mqjh1g",
  "key25": "tMfMw7FSPXPd8aREjKemrRVrmz6JppPprnUjonb2vWcDqCcYHSpfQG9HVri3WzEYLejPzFgG7wKGDWcNGkBtSr5",
  "key26": "3xCrLQHyg2nytERDUTw6zCakMCw3wiNPXDMigm1GianULxfUEzXKWGXwHLyrx7UiyeL2oNpDeT1iiC71NLWd1fZ1",
  "key27": "WTnvdaaNrvGMm9VK94VjiPnoVW6539ULhDgsMEhKvjDvuKuKvvGfky1SWY7dDYKzsnSX4mGu8Ktes4w8qBJB7ba",
  "key28": "2KG6g3HTXE8nNbgZ35rqcg7saZNUSMnquyA9HD3uRZYe67Wcyf5vyKxM2DjJLeosFTevD5ffShDF2Hnn9MnCsBDf",
  "key29": "4gYNWubKygcTpZMjpzJcJCPr8JhTtZytwphPB4MQQCBA99RzLEKfQuG8avMF81GWKo9QggCXmzrqt2GqfsjdoLjs",
  "key30": "65tykd6AeLwxxt2GfASanr6Ved67oYnSFxJQ7WwkAbxsPp2kFPtdeGg2zrk7PA3WVbxFZf6bbAA3T3VwoHnMbBBn"
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
