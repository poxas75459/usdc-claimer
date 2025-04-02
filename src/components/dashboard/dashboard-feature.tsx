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
    "3Q1MeBYcmkuBAf41WGDYZmwhJQtyYz7mmtCfYaCqL4hnZfk2k9zy9TY3DRvQ4qjgFPM67i8GozsEwxajv3BHJR3F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZREMVgiLruec5i7U89CxLJWJwPG4KywFW2NpSNEUVgUCDE5YQaWzCjxvq2ZK6mnCYC5UmsFaLfwE4pQEjf8vggf",
  "key1": "7qJwwdSb4ueUmBRAJrS98GjiGYBva8CpZu1vuqZzg32LjtcSwMomydkWj1RCot39jmoJ1cpRD4N3xVGMHGRs5qQ",
  "key2": "4KK5JWnu2oRbo3jzMRkGvgJNrBYxTjQzHHCHvdagVjKzeAyEGGF5sM6FgrfVCseeb3NTgr8FpXH5djREnL7CwAQe",
  "key3": "Jv8B19HwkRjsd8VnMdGRbQiwheqfoiR5BEhLGT1CBkUACJBbrfXpwPMtT57Hb2GBLyuQwS8KWZKHhXPTWPkDgha",
  "key4": "4tZ98abe53Qa7dEk7xh7hvJusXSbuC1t3UcRTf8zHEYWa4cfFb5hHP9HXreK3YetXy5ChPGLp5owNLY6QutSHPZH",
  "key5": "6BSNAJSezDiJ5FkDz1xnaBGGtzF8fzNYkGn57MfdZ7M891WKYrhLERLQM77qcu5ub53PKNuf4XAJtD5PeYU7U3M",
  "key6": "37AoRq4FZnPiPjpF846jryViyj8mTwAfTfgdxeVhbULNuL5KLeLemtvDVeFWWcDYgkYhZYE3wn1fiZ7CF8gGTe72",
  "key7": "4VPuP8aDxYLEAVEFPurQhzEpsRTKjrActCHoC3jErA5b2vhNcrtZ6SRx2tb4xHRuwiwSUrWGxKBvNKnkrfAARuU2",
  "key8": "33ReyeYV9Fe5aGATM9e2hdzWYMGobkMUYZRjbZr6xV6h997zAtXQj7Z9chtZBQ1nuNc5d16nsmTGUfhhGCEa4jmU",
  "key9": "DTyBMEXYkFp7hreXBXxXBvwbwPiomdnt2DeEVXamm2ULnXvji5JEdAihRaWz6ZfkMa3faZYLUChmSqpZ8W8nE12",
  "key10": "2QgZ3XVPu2YJjoDj9tafaEVyEz9oPygrgkqycgZc4fv9mdcCHU13Am6poZkA9uU7beDiLauNvwHXYoey24R227v8",
  "key11": "5GFAn2ioTCHJMsNir4mX2W2ykKRCegbc9MSjRxdKmuc6MqjYTF3FQcTav5JX6ZndYwzfwc2H8tdbQCwnEVRWY2N8",
  "key12": "5JCH24aXWeXMTgyiZ2SmFpTV6bK4Hri2BUHLTWEDybSQsNGySN9XVzF15wu12KBp561iXBYrbhYAn94iyJkapNYi",
  "key13": "3bUQDJRAqTYHg6V414SedpJJcCLTsvnnGHgWqcAqR3qpzkM9xUXZbSHUGLNfUdGZEGTydAaKBAaN5XqjRasWBxLh",
  "key14": "5Zi8ByZjb7BUQs1F91v8hczkeDSuxmZchFdZM72kBd3pbtzFHDtDDRWUEZTjkcTJ658knUanNXCT6mQk4KSrofji",
  "key15": "ugoRRjLqE8kd2efLT957KcDRBF2vxcnc5FwVXFftk4UuS1Dp3mH8Z9T43UzXSnjbqHFwcveprpnGWUs7Sz3J7b6",
  "key16": "2PC667b2nRTRGUbmgReoTcQmVwkGW7e97Kg4dj3eTBSmtTJehoQZd8crpZpK3xDJBPUp4pRKohnhVpLAfDH2jv6j",
  "key17": "2aFbmB2LnapWyTqMozSHXANyjjD9mJwXcFBWxbiaiMKBaQaFrNA5qQ3HypDURhr87cNFxJqYVWTea386UHRjjGPj",
  "key18": "4EkwZZMGcXmdGsLEZB1yZSatM5joCTfjTSpGMptAKZoywL5mkr6kdAmGMg8iv1YqhVXo4zAfJ1neZo7a3h3sqsZA",
  "key19": "64bkXajaVH4frSedaiLSHL6QnyiDJs7vnsNaTBr7h8cwkN9y8HYcLKeqBpD3w44s5K8D8M1tasvuSH4tQEKxcTXE",
  "key20": "4LDdfrnENcSid9KJhSYxcByc1sUpEDdE9QdeCJVcWfYdJYtuvEBDDYQiMs45fXrJrT4M1uzxqXqDgWpvFXoqB4CE",
  "key21": "2VJQg5u8toSoWRupCynMTTjnKF1bPJet1mJdKA6rM6CBD4Sz9Mh9BxBbETpYsYvXiCVBvkuRsSAbwGWz4u29Auza",
  "key22": "23LihijyHfoVjwfFtksdhcV57ho6DnuyUhGL8i6TwC8MW6YUAs1M2M5Au6jghP652szXmD6XW24LXrvF7zE5P7rA",
  "key23": "4ymUmUi2HrmEz2L5jppvNzzGnxsHp4N2FviWmmwCEXnEmjTDvxgenzK4yovrcMXstMW3CZLqfAqkQzNuygVsZmh6",
  "key24": "43k6WBexjreCLFKC4kwJEi55X4TpaxHFMjmKJ3s1KDd4JgKRhbJdYeevW7LGVMRqeTBjgwQ2Xgnkb4MP1yktMwpP",
  "key25": "5HnMo1CNGFfN2jVcDtQbvj8dQhmkpk8mzjkewBuHXiEJzvHgjvXW4Xj6aDipS4mrMFLqF4JUx4c1WwDHcSkKVQxY",
  "key26": "5dSHvXnaBz7sn5onFTdvWrEJCw664RipYKrUBegzrbZ8UaCZU5PddNZsu2VhNW9VXjrSs8tBKid9DZwC5jRmhAnE",
  "key27": "RYpCUJXtUc1jacz4mkakoSwAoxM7fjppfKLdXwcUFKi5Xu2Vjb4wsRujZuf2dWphKcg3aA7PQ3SRjCDp8GZjFcx",
  "key28": "5r2Vczff3uhekCEN2gZNCR1d4jFz6JxejucQ4SU7KvWBbC48eWj35BwUW4VUHSZ4ABZZMpf8uym7SPYtUpjJ3bei",
  "key29": "3DseBckadSXNhJg4NFpSf4q1Gm3bZcyy4eFqsgsS9YjteVZXc9Xb2S2Nn7GYontX6t7XBriFT73P4WPu3fds9q6b",
  "key30": "4x9oSwfFqALFs4TY73s1xwUrzfgDrT1DJmucY8RyfNHbXTomHM1sXiW3nKBpvNYPeRyCa1zzK7gAExXVfghn2vsN",
  "key31": "4ibPwYXfsu9FzReUgbu1R5xuvs3eKN4WieHhF8bACgBdoxVDwE8GNkLcf9p5qBSLyxxP2e7PWcgwuD7T2UGL6iaT"
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
