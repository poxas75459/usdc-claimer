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
    "3Jtug1k1aaS9Gu9g8RsZeAFdCEUEeZTCy9jC8KXeHTuYFhRPVhJ4L5r3eowxRwofoDAnC1PS6LLyjE6VP47tF68"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JtzPHxxoPWGhQNJbK6kjL696ghbYZvxw1TafSGJvovUbzBUQgNCx7XA2mwKUJ7oYe8SNfzgAY5Ddz8LfL1k1ryV",
  "key1": "3FCEhY936XUAs45TRnhaBEsLzvzzuKcop5EZwSpps9WG2RP7zbhuE3dhWxah3aXV1mTQvDckXtvcCEQCiTq7yiBb",
  "key2": "anCeEcNppByFmBziErFuHJJhSrDSuJwcap8t3dqwTBREqau71EM5Kawge5KuoTaEcEBZ2WyJZpQn9WcybgkXTE9",
  "key3": "7rfRQ7voKdnEYo7LzYYyKVbey6hkqPs6sRpGcpwtKpaBRNwX6CppNss7YmMjgyHBPdGKihH3nDDsjW58jrrcKfT",
  "key4": "5H3GZvWuedBfsAH6c6dpp7vwehk4uCSKTEC5EEP1bakRFEE4xAXtuZR9fBVWFfAsNu6X3VE94ise4wwRieH81Ewk",
  "key5": "62EUdhG833XjXUVBaXUiEsNpHaF5L4RALT78LcGFyb6YybvJ8srZo9sC2VNxQbM859DHeDwrZS4XS23KQbgZj7HV",
  "key6": "5AKG2YgXu2qLtFg2NBeEEUckgz16ecULcUCbRBmEXVYY7ohz1QFJPgwYAbzrWA1TBLaUa8P7kpS3AFmLRK4DVsYZ",
  "key7": "3CWWn3N7uDheCS5983hX7C82aSb2XXsQcc8L1mPazWj5bNQKuMS5JK11tpczxg4rg3JVxnpfYkEjfJEzjmSFyGrh",
  "key8": "2GpSYDKuuRiu33XZYWw1KZpq3kG4CoW1EfQ8AqkZ6thwML6EhYNow11AmT8fhksCRZXvNJCBA4HNjMsSFciCGgZg",
  "key9": "4gh6HMHof6fAPTC8bV2rD6478SLJxcj1zzeo73NfX9Pzgr9QQw784FxGvUcMHNi3dPwp2z1yJBwS8FZ9RzfNkvvu",
  "key10": "4hwJbiL3r74AdTqpXemrRgSBJ33EHC1v3zUgaW7tp7Xhds1WetUdheSHhz5zWtnCHWGeTQJ2ajTFtmVLyTWWSzbP",
  "key11": "2KbLws1hT7eraznZakzftdVjQFfitaTRyDXKF16eGwFoZAPZxXnj2oNTH3hh2XG1P6SbVcWXz5azyh5TwcAY95wF",
  "key12": "42SpKBGCp5tNip9YZmVdkryQaWnpsoHpaDEEkomJiMHLUEwu6Yth9cscCqJhwUxZ1x51UeMuqjUPRNecKmUcmXHC",
  "key13": "3h3mswE2m7uwcwyqEkoodhdAzbwr7r3d1kj2V9WbvGy4yQHi7hGtfKoEpt87YtGiDCQf4ZxsoSwQxWS2nW767tos",
  "key14": "498RQxacY3GQ38DriqpGLHFsTFK4iY77turmFGuB6FoMdWmP8KuxJDSgYBpYTMe4dgb4tZEFVtBqPy163XeTmb8x",
  "key15": "5owgiMrEEZ3jSwKUBZUhX36bxNYx9ANQyrLgefzKPqCvoWLEwQgYvASR5m7hVidQMHkmH4Zretvk2pcwJS2esBuD",
  "key16": "2PvnLMvBFAsdqsrEFVzZrPrux8oZZziUy4pe3DuDRD27k3h4udNDYFhzTnL4XypAUn5c4CN3LxEgLsuUu8zHoyLo",
  "key17": "4AGX18RcGN6no32pvSZBdduJ9pvg75xcMDTwFTEw9cfaXQzZa9TJz66y5CHzSa6axp5qEsnHSpWWoUVFcNS466Jg",
  "key18": "27o1YxvYauuZyDN9jgPNxuBrPRQu4eFzY3rhfPPfxk24RWxz6dyxbHmjiKjK5ox17ieXQhoWpZFn9VnLY6E4A4ZN",
  "key19": "3z65DneiQpu7tDH4BzaqC39xjYuqwwejvFrNEW7AiprvdR9A4Ke6nKFNQ6Mo5fNj7JUe41kfQYGhr5KLeYv9EeDg",
  "key20": "5FYjNJbTxNRb5vk8hPxFztjNSeYGgtDPrr1wvaQcHoMzTUK4rTzHFZrgr79TwKVFsKkajhm2hi9shMpmwNNZQzec",
  "key21": "3QnhREzzW9VLTwTtiCuPSUwUWRZo3odx87RBaDnLahufe5e1RQ4ftLE8jApToh5s6vfKUDkBoJLtYnfW9DAoDhEg",
  "key22": "2oRtqZ6BJTiwViGMQuu3SpmLm56D5nN3dwVgXyraMpyuoSaKsAFANSh9ZP6WJfEXXActujeSyLxZ3MVEnUz41z7K",
  "key23": "3eJgsLBrzAvPAsoVGjJVSjJXyNLJXdwqr6aT1EPVHtzmhZ8ntifnjoGNEeRntbnTgttSYWvPS73ME4m66qG8yGmh",
  "key24": "5SVXYDfdViVMXHJciZq7UQBXLiC6N9ap4p1XKFSTK7WJDKv2bzdFPGN65DRuru23LjNdSHbmbW2hUa99wgyTpVfC",
  "key25": "5GHbStDkf55STvSAa7oy1epaTqGS3Hf6w2EBrAwt2Sj6RVZ92sWPPA89h1pmLYo1r4KNnPpzQhkYdSwXWsB8GQQv"
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
