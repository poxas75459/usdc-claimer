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
    "2QCxTrU6VYi3PwvCi4z8eu7mbAsSRTBDvUJQhnpy5xcYnHAfxnqgcx3BGdhdSMVocDqaLtqsJ61bV99j36Xoc9zi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EBn1NapvJzKEaGMSJC5uzHVZa2SXM2QciN2j6rLiNsRjeZJYF2fjVNkcnxtFe4ohYyNf7d7oZ9nroHHtNoUctQe",
  "key1": "5U1Yg4cLuuHfmTATyFZ96H2rzgzyxvtsXfTM1Wk2stb2jCHVoQszd2gCvL7Z6eQ9W6dNmnFvMqxmNa1fVpxrZzGZ",
  "key2": "3itvP9syKAqgBNStbzcG4V7qFw51L3zBTaTijE5aqY5fPmpxPTUP9dA1BuqHeKubPEzZmNqbGm51vfvVj8MFE1Fc",
  "key3": "3KEyQxBi6PeJPuUH6mP3KV8iAH3tx42cJhnawdteehjFTjAoQdg58XDUd18o4nFKLUYt8KESeT47y3fnuyCJXkw9",
  "key4": "4cR95kwyFVFFAK8NDgg42zEYfFLu2v2dCusd6SnBRqFLMQt3UVKpCMzVuQYRG5tMVbMwEQrGzidMf1iVtzBHQnMk",
  "key5": "4EUz98jKXtQ2cMu4T1vYLE2yFGdmizYWPmVuTPDK35KBmp7uCZJf7q98kUbQHN6j7Vy86zetbdN661Q3FwWY9Lzy",
  "key6": "3F7D63roKUJRi919XKNAc8kbVYr8nf626MavCbw84Kb4Y7dAWTMAiaZ6N6PKSUy2bMkYUHkzVXhveyYU7VRMksUs",
  "key7": "5CJpR8Mynv4sfKqesET1p5aWCXZdiv2YNgtgD3AeGcbncP1C8cM1tvEcGibJFySPKrz34R2QN6N1wwoCnVC4hBhD",
  "key8": "3E1NRNSs4Exn5qWdUxmvsQqTN9MbxbuZ1YPfE36CbjeXEbC7LwomoJFJfWMKzdMrH8EV7Qr2idvupgX4odzK5E8e",
  "key9": "4i2xjd5U3nt76zFwFw4oTN3oXNvAY2kXX5r6Scgi31J27j5aKmy7izWMgYogwNMfkDAZQhmJqKtJfsWo7sfg3uqP",
  "key10": "51VZSbPgCx9S8E2P3f4Lg2X1AEQ3E9n1vrZevTCgAfujSneVBsRnFcXbFBYPZmukYK4yWnb1FnCVPuV6grpjyADM",
  "key11": "5PgUHn9JdSAfZoXMdVTWytyMUo3ipVxpckFdUpWyfvPh8k52d9GJZVjd8s9YDcnv9RMdTRNtG8dxF4K3bp7EKqme",
  "key12": "5Kc3sjKHEQHrwxJrnJRVbn5djs4icuJ55pWo1yXpu4ZdpTQGcKPnVrX83wQz4qjYHsxcWVfv3RvZ8bfwZeR5XF1Q",
  "key13": "2gHscpmbdSeEJcA91Se7CzudCZnw3WxSfMg51Cnegunf1SeBwXjAYSY6Z8MqDmiRELawUgSpLHqRjN7xVpQG1CcT",
  "key14": "36r2HSYxstukAgcZFYxXYmEg4p5DD1C2iUr4Xz3gFhUvKU7gmgQpWMiNLfcrLrvsuUx2zcYhJ2BnQhzrB5BDw2J7",
  "key15": "3FVaBGXRwfsCymhaE5fhhgt8RVRLE7SeUNzHbXpX89qqYutDXt2HkPQwTDVmvfnKnymkBMBdtpJQXJFNkuzQiphj",
  "key16": "5W3NUnqCb8vZPaAfHhPDNSAV7eSBfXw6LQVE7RcZWB9Jwa3FHndKViA9VtXAwLww8nHJA5osuBUuGJmx49dMmYmk",
  "key17": "2yZe27nBCqTxC5xz66Uu61bf1YuRffvsfqVazaKxLcfb98u5qKPNdDedFnjnTDHJgCLyQhWJC3zJk9HkP9DiP57D",
  "key18": "uzbb44McXvF9NPzCXbJzHj8GdoBoYv33ffeejsULkw4TSaPGrbdD3JJp1H2EaA6dKfRwQcRJg5rmtbcie1vsA5L",
  "key19": "3wnLtusb8wE3Eo4pX1L8HmhZzG9yKyf3KzvWxS74fdLHqhnQDxTBWANkynprYcAmdnCNK7zYH8bCSgoTPsnzxbkj",
  "key20": "2R2C8wCGqdsy6ZkqwvgbfFx7HjTJtQ4jmTcB69wLumKEXyjU7YBV2xjBpU165hRpxTsPogcx1noCDooppYXk9gxS",
  "key21": "2pU918ggxTRk27cvsQ9GiENMrdG29qKrjyXuvJZCSyEB9dcFfVVGTj8pVQ2TKqJNTxRRsqKAashoDokVxvYeENFY",
  "key22": "4CKWHH1CKiXov4rfTsv4cVRuhge4RVcc3atigmeo1e1fFZGhKs9QUPWmBET1KvemAcciFXVGwfciS1XqfyRFr5zB",
  "key23": "PCT4P8H2Uuo1QExng8hbLmPMzjoiVpZ9YkEs4npVixWr5U5Rtdwm1VX4E7YWyAw4d13pSNchEwhbmdbEYcLFmFD",
  "key24": "45Z2NQh3dE2u81mqksccjQ96qBxVnAsNKyd1rySViHLeAehqxNvUFCanPkQmvjvQRXDv28YQqFtBXj1azJYMHhxJ",
  "key25": "4NXfYWtHh2KBxjPSGQhmNPwshCnxSK9rucQU5WyXrJvoeoRoxCavvLtFcKerRNcb5mmXeDphDNgghWNGjB85RGz3",
  "key26": "FaBxMeHfe7gRy51oCfiRFVbkNwXsxDkmBv6Y3VRM6iQvxF5thtfnR2konQbJghxTkq3XQ4r42ZukK1NyBZJtZRT",
  "key27": "4rZbKXgizcJwy52r1wmDM66wZBKAiX1M3SpurtnF1beCrL89tE1gkCHKseV3SggfAJD2E6ASii1BT6BDeEEamhEt",
  "key28": "5q67ZFAM7FDTTozPka6U5Wnm1Zc5czaApXi3G5hw6eN4EpH6JV6wecvckG2y9kyoHa68nAuLpw1Dc9vk9oJAqSzb",
  "key29": "5Rmg8fX8jU54yTBEnKRf9XEh9cLVQg3t2gHdR4p4CXa7g17qkPUVL5QKzrdDwsLSr2VAxNBpddnrduz5jA7vLDH2",
  "key30": "4pYFsbfMPWJNY9nJ1hr7A7WfxSuEPHTroibcDRQK5SkyqAEHrBSSaWoahiUYg87RVATGPyZtQ4vPZSkE3gyyQaYC",
  "key31": "638oo2dG2WC7vFu49mDRZ53SEcAxRjaTxwSSagMDLgNvoWwZRTRSphL56m1Z2RyxLATNN48A7bYymFMJxZtm9uhk",
  "key32": "3HasbpENuaQcRsKGLFMs7WXKv3tQCjJts8K9qpM7bC5wVRxQ3sVXMuwgCqppYCdbVbnqHHkmy9sJDBFdMKzzdmAp",
  "key33": "5Ru4kreNLPpmQLDpFYSQnzMSCCJxhhDKxs1kSzrpc5jCkqq8xncXgns8bBXxpvanKzyH77dSssFmpnATCk43uEUn",
  "key34": "4wSj2zF1nigmVRwjsgLjFCo5SeKANMJZrDwWrYnGTxFn3DLEYU8YfpAXBfdrBJg85ZD26X5nAiFz1yRGA4tqd3A5",
  "key35": "gSnBiH1Qr11BfH4zqnFp4jLCeRsKDRmZj2JKHifCFCtfCJuAJRCdeV28p3cqb25As4ztdhpeRp8V987GAu4fXho",
  "key36": "4pvtxxruvWg3YmVM3vsAyCRe8v2NMbi2orRCmWoRFQLiWuwmuaNmcWVobxeD4XyBy3dzCwRjHviBh5Aw8B3ema7s",
  "key37": "Ftx4t6qmjfUVvNNGW8YwMMzbdifJzRztLgBSus64u2GdoVB86M9sb7ua7g34MzaBZPpoMivqxLBkFjw7yA9fRwZ"
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
