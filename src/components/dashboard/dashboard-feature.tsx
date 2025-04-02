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
    "3qhCNdwRZrUdQsdSAzfRs6T3Z2W6UcNBg2iphZstfBaqB3xDfWETidYiWff3WrR4g4W4ZjEjshLfv4kQydUjcW69"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TU9F4GivnCuPJnoros5s4uAcasdBYTMAA3NJsoEtgqczxiRbTpK96TefsBGcvstGaYsTT5ecJkJxhKa4YqGNVvx",
  "key1": "4y7wsFN21gvXc5JZXH5VdF2CRWAtvfr35QxMgy23j5znRDS4qj6hz4VHQ9Ere5gkCxhydTytf8Eocyms6z63n7wy",
  "key2": "2zWimf7QgVxEiWB9Uyw4RU8WbvAGpuKTdq22Ehtf2EjNu2xez9p9P2E6s4QXPuhzShbQZgHywT3nUTHzUY149Ewz",
  "key3": "35DjJDWkuB7XHZb5wD7w136oeDGeQqiZQA1NfNTHynS5Wd7rKbSbCn9FF6J3uQoXGXm522euiVWfmwSGL2YnW9Ye",
  "key4": "4kox6r2N9mUmGE24eeBTmjXhsrNDrhy2XqRinvexouuXmRV2kjVpn21RtpTHC9XaJAgPPr6sWG2BFNwwGzCa8kDm",
  "key5": "59qLzfbEDE7ADXypafN3ouyphhRHxh4uUiZevPpBnJ4LmwLXwVPWjdwxgKSzj4s1EckaCjQM1m7NrXzZLAtvvF8x",
  "key6": "48ftPSa9jZ2d7HYCjgeuJZqa5CEEHeQorpUje3h9dGqrP1z4wQjjt7jGzhA8C1UdYihEt1nk5onE5nRmGStojbpC",
  "key7": "i19jHKGNo4319xrsnP8NirUV5wuV6xVmyVujMuFxTPJHjG9h4b6PhQUpbN5HWSyybnLM1rjHEj1hJG2rphxS13M",
  "key8": "53aeHJ6gtBKk8wryMJWiAPxGc4xu85AgaPsZUmv3MqFLgS6Zr82xj97rwzxqdFtaHPLrf16jjJ7kCrxh7ujXUisK",
  "key9": "LhJM9LwGFE6jts6rHjkr1BMcnWVv8UreakZAaJGyTaouoU7dfkVgZePy1Le1akhunbczQQdFzU4uR6QG4eU5Zst",
  "key10": "43yYrRv1kCLUVrYAbTTAXAUgJBPtYANzU6QekRkhRRWARFyUprQx4bBqjzoogDxjib6msRCyfSUEviXYkgygAQ1p",
  "key11": "46NB67crXBDzguxKx16mX9MPDtJiJvLhDUmfJ1UTDmUTYEYjvttnDxgbXqYA8jPdncWXssj9j9NrbVKP3kcNhYyN",
  "key12": "568XkzmaLgB5Z9boYLVuTBUSewGdmCJJFzyLmQcnjtMKkC4MQ1HmbpB6b9g895t9obV1zex7ZDHbyBpqMyXko4bc",
  "key13": "RTtc5WABarRkftLJGfQdsmiipCC9exUq6v7iGbtfRbgLjxZvZtHYEQUCTz8aG18DNFsAWM7pENLZfZUAGZBc4S9",
  "key14": "3FZwE2SQZaJEqgAov56Ywd9cCSmsg1jD6LLj2iyS5AnxvgVo1U93vSxgzUF45tDUF7RWy6w9pNudZqmU96VAs6MY",
  "key15": "2RnJ12MQ7h4WgCnv2fbhnC7pyqCenXmDufgKyWJaSaf6LnrFkuCtiKQkbx1NCJ8KwMPiKMVBP2RntZs9CYYzPxo3",
  "key16": "54HpU9HYiFpwWMDimwURt6UtoGd6Hrp3T8otTsnDkya53FpBmeSBB5gvRovx3t1mYptLBSNN1g55xG4okWgJ5Lt6",
  "key17": "57tGEHeJenfRpbP5cgzfUrit4WKXg59yLEruDa7PQFoNbQts8ENq1jpQfxCM8MbbkR7iPRjxEMKGw8Y7c5oXJXsD",
  "key18": "58nrHHK4urS5cvmNGS8g5YJ9oS12yPEJ5LxfVLmpdNNmgvWCAQGwVf3YXQpfdUrHTcUTxLkoAatFeMd7ZbmPvKfn",
  "key19": "3PbFgd4n3f7vTCfasqd7LyL8XFv5TMh7uqhtLVHvdPii7X8v33jqZsGdmSd3dQeDZ5u8C3rhHHJe5SGB4b2rw6BG",
  "key20": "2s8rtD8Sssdh4EmeHy7wYrvgVJVcjk6fWp6bLyTAW5HfKTMBXBJS1RoLbVKBK3Fs26pkRjLeNWoPkpuTJNAbQnGV",
  "key21": "23GBiAS9ikduBnUkTJ5Jqw5jBcWBqPgvNLu5TTpwJFTsYiutCHf6Swyot7DbecCegwJMdg6g32gCBiQczKMS6v2W",
  "key22": "4frVcAdcvqYmEq128FzDPMtRMAc3NWoLTHU14iMvkr3BSKjjT7PgdtTxw1ACtEUZrx4o4m2TwhtEGYbTeAMX96v3",
  "key23": "2E9a1MWnErCBCyzvBdF3uvRLRs71VPgse7tCvzm8Em8zsEGuioxBZckvxx8iZBFi6rkqsS6sD3bkkP2tZMxymZz8",
  "key24": "4bAYKakTnNWjL215AChN7qK1XccycEBBZpD1yspAmQmnxzKaMsJNUt4nM9fC7pVbGP3pfb5n5P4HaGKxP8fAvQW3",
  "key25": "3XuZHQmuJrGgwuU3jPyDxrbqErvMXBHxiQ8DPK9U1QjBhiukVsY89V2qMgMfjvXAVYwtDHrXh5hJU8XnD9p1Y7SP",
  "key26": "65YJHu6Mh4kmWpJSLwQVHtXPYkUU8TH54xhnbQxPSYs17gFzbqrRZhvoz9YUtBNH4dmsEksJ1rrAswhpFtDqUnGt",
  "key27": "36i3zDUDo1gLZAzGjnZtks6QUtBmFNDhsVBYPSudAbFKqyivASj9Sq1Nm3KpwMfduLs5XXNFN7GRGNyGff1uXx26",
  "key28": "5sYArr4chzL446eSpFSf1BvZi5EjA3Vs1dU2U35tQkxNaTM5BKTmGSUj5hpipaBL6HsBnDkgfew7XWbjrQ1wa6hX",
  "key29": "46dGm1SFdmagYPqoZfdi4EepuU3ESMoGGn8P1EXET35rraUWySH3NsWXEPbicqdj2cduG2b7BszR3UBZeUYmk3FA"
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
