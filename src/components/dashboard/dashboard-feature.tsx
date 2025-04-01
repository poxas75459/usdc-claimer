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
    "3zgVPTNqUw2wEEmhb8fZV8TMdDNrkYyMaKdua3WJeDnoXpNWazZ8aoWJsDKy4EkUMjgtPWJujdfDuFo3Fw97UXw6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tWarSj1MadUkrX9WRvXsez3xctArd3PPtkREbaQRrucrRH1afQJf5EeM3VJBdyKDQgeKmxmxhVMk3BmyiK561ta",
  "key1": "eh73L7MepXjH5b32TLRBgpVSr3kbuz9ey5unXeGA9qLMyhGhsSVTzk4NyQxgGkxHsgYY3hZQE8X7ikBatS2g2A4",
  "key2": "4To2YGQDzfmUcauXSXbVudZsoKUQrJ46HxRB8eXNaqimT3ARC3c8pQxcQk6uR19jHKUanL17xzJYSYtDu2ytMJeF",
  "key3": "4e3aKverCWrswqV8zJuov9eRPBtjKAti3sqHJgPmBZf5cdMzhrY6CV9kKcKijJu3d6mQednjGKAE2Cnbrjyzoper",
  "key4": "UbbzHUnQz2iveN3A7SYtisYsrbpmtLJnZsMoJEoA1k29gmuj26TJDzJj2wLmLNaWGFybRxuMJkca7iU9Ap1PRjC",
  "key5": "XLA2wDJbfZzEjYR79zhhRPvQ3paHuTfxuMh9LeqmUn1KXyny5LXp1EaTB9vQDBsT7MFRpR7VKSnxHTzdBSvNEid",
  "key6": "2miSVvS9KkpHKc2HK6pc31GGPrQuch7RCPtqiMcwSYvvxT26HEvpj7zCanc4opvmUeL2oAMECXn4LikSz3nhK5kU",
  "key7": "5PepdWfdoZu5gaJpTHkFDbZ87zXtuAoeYgreChePSwvbbPvNpGzPzPVPkpUWYFeVHptdSMAXoa1HqaZ8KoZyQcwY",
  "key8": "3Zi9ntkUAbj1vajzekUCvgVLxkBmvbVxAkPw6AbDiE49uyrBoGVNMQUhQqgzKc9opGFuZVQsm38uXsHCnsSScdkd",
  "key9": "5bsppFQmJX39xYnojKNA6gUqC4yt873fGvVVmCAjzNBEKKfKWoUxczoG9orm6Tg8CcgE1bpsq3DMpwTyhkr1QFcc",
  "key10": "3L1mPsgK2AYMUEwZYe4q4eT6yWR4bFHv9XT93NvzEiDDgaaC8aSC7vBvzDdqAzexJ15PTsxFCBSvAAYwJ2RhDTcm",
  "key11": "SLUtEEkRkFCx8MY4C6AE8wmY5X5c9YLCXoFhGjrcWB6A58Jr9ikPvJFn9UkfqVXmes5GL1exgnpdDUwgSkWF552",
  "key12": "yciJafHthfoqcp7566qAT1je7gqP8ksz5H4uisQU1nZsL597FkdQssWipPqDyS57G2iiYFoM3UsJLUFoA5jftp9",
  "key13": "t1AsKyRB7YN9N4TpyzBGfQrr7kUgnGoHux6Yg9RBpYYpmnwm4hsnmYbEb5ZfKtGYbVJbfyUzdi4th4dX1G9bDVf",
  "key14": "26vpSqPw8wb98izycwF5JLTkUXE5sG9jXXXhnCMnFGSdmRUoEab3vVEvRFyb4C25x2t775nrLSybCVZJkLrpNSF8",
  "key15": "5jQ2Jagut1MLvpcWPYF3TgMCvETAVXPTZdQ5w1idZR8ueuc94kyvzNTTdEySJUB1EwLoAnCLHR6y8B4HtQJpnSYS",
  "key16": "59eLBTmgYsMwY4fgmEkppLQDh9Ncb1RC457QqZ58uGFckNPwjcQBWfzogAgFyShiWY5rBpyk4m5Lui8jh9gqPUcn",
  "key17": "3fqBF8MqXNz2YUmQ3vinSJbiwzauK3ixvFbvm3ySbZoaDHbHkMhjw8M3edByT1o9mC21B7b7ZaZfJtZbhLDP2bUk",
  "key18": "4GxqZ41RPSh1dNHBm7QBxemHZ3SnwUD21o3Hck77S6mUXUG9kpFtk8n1REkUFiimZaJKSurqKAggJvzHTV3rKN4B",
  "key19": "2vabmM3ZHw3vJQQyXHLQWEvB9ErsBee96kXFouVkxRsKRchbCU7FaRWLxk9eHCbW9NrtKMg4HwHB44tjH73rgtJB",
  "key20": "66U138FRoeHx8NvQ9ihfX67h767pw58yE6wwhcofDDZf6UeFoqvBYqGbMeNpnmWcHBNutsDGSJiVDVrRkysw2C4y",
  "key21": "2MUq4e8hDHYiPPK8qsEJjNcYashk7XbYKKcyqJZvz895kPcXFAeWSsRZDswp2F9FB2DQHyAP7tuPmumYCbxCNosD",
  "key22": "2TVGvJM6Wb5VfFGtGh7YsArxJkS3h3R1jUKFDVKCs5nprUWt8C8EBxwjJhWqDiKj8nK1cP5VNYyv1edTzXbWYJLG",
  "key23": "3W7D6dwvgqPkctpxBCzgWPGx9jTBbkUKSmMsEJtDwVrhRDvtonXqfVgmKyH6CRVUth41tzv1CHBBaBYxM4gfRnJz",
  "key24": "5hsMkMceFuBHxtuBPkdtm7LjM5jdWCNdguWQNpVYvmBrpekpCNRCWoqnDRj7kijSkUbE9nN9HYfUrzN77sKJdCws",
  "key25": "3TW9xJTwepRN1QPWdjEHuktXDhr2uZNVwuBXofBZ6S6cec17chyYq86pNh7QRFm2tX9NWcdFnewpDwCmfFaZ2ZmQ",
  "key26": "xGUhyDvZsHuNuN3SsKGpEUevC6h8NjuZwAmj56zvPqPN9uiVVGMhnQmWX4WkPXqpPN6RfnoiLqLN41czkyPwtLC",
  "key27": "3VrMhfaujfu4hAiXySi6f1zudA9ucnF6a364PLW3K5tpQxQGPVpQRaSmEsF9YVcQ1ofDiKagPk6TrrDcWKJR87AM",
  "key28": "dmyrWLk2woCm7a9Zw5FX52uqarjHaMkEpcrNpvD1iaBYcicTQ4nz62AgRXqT3PDiZq7eXWhZLrhY1vjRzdByMc1",
  "key29": "rXNnYNpbnEAS7ZrBpEsHCSayEtrBH8jNxY5pDKWxfPGsinxPYPxocHWg3n4qhBpDMQcPT7zGMpbmqAGA2KNf1fT",
  "key30": "4sCt2Cx61WRxENT5Ei3FmRTHfK7qYQEDmX8XvdGMdUkNmFFxwZJrMJLrkzRpUjZGao1ec9UR7aVvRm3fc8jRqJRX",
  "key31": "5VfXTHgNnZeHSDBdxCEub892FaSqUasfA4XW5poVyvJ8hjMTK1EmMvXmvjAgG2mnF3AcQHtvy9Dpt5barVWwY2s1",
  "key32": "4Nk83FnsPimyNinu5Mxbu97nzaruX4Tzp4xyaeW4Q7ydy9sCxFE9BMQzoJkm4HirEsdLErUKyUsLaQnBZLNgvnhw"
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
