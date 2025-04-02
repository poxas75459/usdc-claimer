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
    "ysNet1ztG9ZN2b9w5a9GoFrSi7s9kzsFXSPTyqrWd25CxPhhhjxEQP5bQ9isDwabSiRAmYcs9Q6ebpSaqq8PWUg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "h4LwXX6maRRnqHbgU9vdmE3UFogTz93isZU3CtZ9wzVt8hMtv3CUuMwfHELGhmZ2YXcNpgFd6oKG5jFEUNgj1xd",
  "key1": "4PYfJ7KemS9oUYpqZQRPyYJScDms1E3UnSmCM7VYy9h5KjjtQB4mka9yz9HxkysrWXs76sMjbxega1X9KbebXjEq",
  "key2": "3fzg2P14xz9PgbVRkT8trF9mF2HvadrWs1YokisQwCk4W6scjS4hzEykm53hRoTf9nmjg59YGLTLNbgFMHqxgxyE",
  "key3": "3Zt8sc7nv19rbMPyVHjFhqEYaE9bx88k6cFGPcTneZuQzM1W6yA52PqsNetw76A2M1T9yDct5JvMZMQAzsRkQvCz",
  "key4": "29G7iq45uDfaB1Lb3FioquLSfoHPoiMiZSkq6LxDNviUHMtnunfU94YoEAdVhFdVTbKLGz2YX9zKScRVbnJx4LAH",
  "key5": "3uA1D9mjK9smzdaCmQbzQragwkucQ3v9DvbKpNhbRhfZgw1n47R1DK4Q3pCfUKUW6s596ML7gEEkLnUUJ7ZHMML3",
  "key6": "v98muMm1wizXsL4MoScqqbuwE11AJsg9vQUBFqMCTz9h1sqSVjfyBmRpBgJSMdM7GFtbn6TnB7QRa7reoeYbQ2L",
  "key7": "3sWfMRYYbyYPTnNt2mj1wCVKYVGRnCBkhAoLWfSLGZDZVq3KmJNExYaAyKmdE885ETYtvezDRpyGJeWVgaE6XFbG",
  "key8": "3Aq4BReoNxCtg8crV7ojX4VB9HZwEVwPmpPx3upfY9MBu1Q2v7rgMJwfyhnov8JNvYdzsEnBREwF6Bmkfz8tRtrG",
  "key9": "2GJP1Bo5uCh2Hgy9xwbG6bsXpc3auEVRvY18od49Ek7by1QG214x6U4K1vfPxuDndQknM5m8ci7qVu6V5QJUxoTk",
  "key10": "4iAuqHhyJfi9ofo8JZTtVtc1X6qFJHsgZLFrNtoPbW9YtbE9uagrUixBcdnJ4D2FeddPNx1AsfVzL6T3rjDztiHf",
  "key11": "Woy96yFVRjv6Y8HE4LVXBgxGNdD2Ua4MUceaoabFpH6KkmpRdnGSRwTAxEpQfYpfFJdE8KWLb1thjMKT56BMMHb",
  "key12": "4FWf2WG7he6DgjQgcuJ9FmzUxUj9EWZ6Y8cmNDpu2VVpmd7vKVLs3x51Rg6PC1CBQyoNHDMNuXrZRpLff7WmRFEo",
  "key13": "37Pzzhv9mhfJbGZSaQP4tojypWTnCxJEup92eaY8j1rbWMQ1bmHu2DNUJjYavwWUMzNVpdjfCjSjZgFuaSQaryak",
  "key14": "5Rwg1x2SW7wtFd9yuxJjXr1izNcdtfMuRNfKcM31wDNFZ2cPx6ks2aba6X9NLZpTKC5Hw4PpmjdBoQ4RxqfGtemh",
  "key15": "a1G1y4VnVSBRBqQMmzf4cSuJKrChtzAfKsiieHMejTz7Atg19pePSKsahy6WjN18gEntvd9RL3PELCx39pWopD2",
  "key16": "2JxH5KVweE75p1CzWYfp3SWL4eifngs5LKN7jcKNzupi2Nvkj3oEmfBCqEbp5KYQUxkfQ677ak3QThZu1jrCgDX3",
  "key17": "3hwJPQ1SYQytAdQWczoP9bSnyadxUk8QqApVusxiwUJoYJpLzhRoEsRHnY85JhN45eqHVKkptpwummAsyxggPH3c",
  "key18": "2if77zht7P4DyYN8TEoarkEMs7bwZbi9pFaApre3yYFLZJJEpgqaqe2JgSMyRmRcRiiBRTQwQLLN331mprDmJBo5",
  "key19": "qfphx3EJBcwbUPkN4mq6E4nJm8jJKm4YAhWcSqQ8vRS9VgRk8wtXzaVzqz9CKW3pTWS7vXnZz13yDS2baJFW5jM",
  "key20": "3WhNGXNtTzjocF52y9xGpcsWMnQyTp3PqYYfxXR9KUawCw88vCyEyrQKypqtB7uBvefa6ZbjL7yNmVfKfRmz7Tus",
  "key21": "4YRUTDMAXeW1StqfbKLoER6JC5XzimzkXNpfC7w1xiuN17bVR51qh3HYu6pVfgE9AK5VZ6to1YUNmseeRshU5Cnk",
  "key22": "PmFuHiXdiVYNYfhsD6xueJ2GBKQh19AQJdJ1jy8yYFeDGYPTmGdASL1QVTnnjhXDtWAQsWZZ7pNfuTRj5YsfNgt",
  "key23": "2dVQQhwvHexHkFxLAfb3yqZpk92rULavqo7Y1WmohR3Fpt49zjecccyS4UWVV5JTctiHUjmCTHWhbHH9zu5fAf4h",
  "key24": "5MxNmWzEBvxNVyeUHoxfev4FH5V9WmjKLrK3XBrhtETyX7fohGT1wt3jQTRsX7UUji7hEWsFC2aZ4vTm6FH7z5ZD",
  "key25": "mYjwbCoK8BLJiyHsctFNFQ4UL4Rx1swXsNZrTcUa131JdzGCp79PhYpc4Gr2qdJTtTJN4ByELBYzuAmALdeeJir",
  "key26": "5bn9cPZRkuMWmRtDfFbM52jD8bbCVXqSFfeuT3xajnrHorSHCu2rY9h5JiKity8Saxzmyo2QF9sAwcGhDLgK2NT6",
  "key27": "3xBktwep8ukCnUegswWoyR3SrkAqqTUkc3aYF4j6zkaqEqYhy4VCKW2UJJVYkjXh3muAMe8SBCeBV2TL7g8SwSDf",
  "key28": "5uumASNFk65VDJFkpxpCeMZfMjF2SPJvX6jec8djkAnfEr3dQwWeYJPx6B2VjfBb9Xwu385rXobm7F5mUupr963S"
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
