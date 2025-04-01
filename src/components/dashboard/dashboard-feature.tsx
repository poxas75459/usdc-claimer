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
    "5Q1L261zAWLu38xfqagqAH2nwgfjerPMqn9wF8oeb5TdrWSpjWgWs42kUC5ojNzeQD1yCusQ6JEFyx7t72hyybqA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QLSRqkQjZE4WqwJ6yePmqE9mv2FfKEW77ctBtcZtXg97V4we5VbSMVDkCwnhVntxMgmXczYZU76k6EkmByic7GY",
  "key1": "3wgbU8mLdP9zVVyRY45osvj5DCp3smkYUybeyniPjbuqSwr8HoCB2vtVJnTDuSzFfaNr3XTQkFCJLb6FNDELXuuW",
  "key2": "3kq64YJt4SvwficYXfpf3Z5nqzGHf6ohqbMbANM9Wcayx7sYcxjTYgKJnUrwUBdRnYX7AbjoTqkfwNS8NXyKFm13",
  "key3": "4tp4iQDpKPiEdHhDPE2HG94FMsWiaZDLCZCuqikn3wztU7ZzpyAsDFMQrX6Hy3JEw6FMbuPQz3f332P3WLDVogjG",
  "key4": "reMqVbV97kPe4aBBt6qn1pSPE8GUcc9qHupz7tVoHV8txYjB8GYNfWtA95YMnJUdZU5tTLC6auNbt2MTq2Q4N81",
  "key5": "55eygUUwwogengLA3VFaujK5RBxXNaXbkwLrPdCzNNtofufLpQ5n4dsAgmUMaZVP2fiHT4megQ7vLEgDQj4QJN47",
  "key6": "5DnvHM3UWuE5MgmJrBAGSiCLen5HK79td16US6DBMjyV8hPucLSXoNVnikGzaraE2uHxiBFGwvL32qHb1xByTNW1",
  "key7": "n2fk9vVP5kp6eLAx8wTyrr47pWAznVwLHZWeVVPUtdRe7FUWeajZT53cDnWrhPoBP8BghePJ5J2haiPfPFvLmpB",
  "key8": "5WLKgT1BLxem8sG86dJmGZb3d3CGME7XtchBdb1myBvBduijuKFnWGQxSHHFicy1LA4zUVg93zLQ7Kg4GyVx7kyh",
  "key9": "2k7P715YECaonDHUaWk1x2iMwLCyVGyvYUWGMZoDh3MPkVseW8xmzkQwGPiWtFZvamrsnLvczdXUtYKmP8gHqeXg",
  "key10": "2aV34ozYRveLZ3jSyButdZRdPfogeiLM53bD3WvwohU7kcEg74iRXZUscLa17DoijRFnKWjHCpp6zfJT6QyfWVLH",
  "key11": "smzyVUQvivhyLKDWPR76QMxCty9mGrFn8n487V4eJatQEGZbpRZ1MMhsx3FKt8aE6udZxHCnjFbqqSZVjPEAk5f",
  "key12": "3DmaVNLAqXY1P7Vwc8ThsK1Wstinufz3n1846V2Qa61nzeAeuJcTDAvKXxHjEJWob1fK3nhmdkwvHC5tyvF3PfFP",
  "key13": "52yoQWSv7iYzVksipWvED2gnwKyMNMqvPvaWVJ9soY2L8ok9yi35Sf2Ak1iiwDTMfEqyCYxjjiLv5aMZi7t5qyg9",
  "key14": "yLYreYN6qcBxLWYjwsDR8Z1rHYYLgtUNB4hNRtoqnnDdEmNMkWuWUxgp9Zevn15JUuW2zfaRZJnD274FsqrthFy",
  "key15": "4ktt3dAnv7Snxt94M6BNaAANrgYKQNY123i4MNDefYVb7nnV56poRcEEA8CenVXx7STwXnyNeNUG3oWmLcqahdAz",
  "key16": "2BL8K1FzAkMV3PHvKc6ap4vPun2in3k7FZcJAwxKjwVUNsuz5wh5Ri1eLLZoFDu14suYr8RX5RkzVSzR2nVDhYze",
  "key17": "4bJFSwGZfj7M8t3NWPRHXyqWeRGWULKHzTEB2eWbfvfDfDB3zUSU2PCuaW4KuunGSsBATKGCiHNHnF6g6TiyuyRk",
  "key18": "uWr4zj65tBtcdgQAxQhhnGaKdYjf9aM7giAeVbQDafTDqiPzFMxbgSBYh437wn9eNmQRx2vv7c2zeszuq2vdoFX",
  "key19": "3YHkPWCCYCBmvzFZTH1UBvfWHB29Cq7Q5b8Q5gmNx6CoUo8WtFqdgKzV6MKVh9nPnNqBr9XgB2CXUpq7GhZvNBor",
  "key20": "5xnSi17HALedr9RRvGu5dh6kdX7YBUDAfMPLAoAFudvfawJ2C3WZwruWoSQEwC8S3eFeub5PH6DE147ztJ2i8m8v",
  "key21": "2YpbPmfFRYwM4fK4pTygZiJfbjcVMv6z8aFVVQmURrs7za7uRjrpTiLGodaCxR6ZBkuH3fzJbP7Q8x3uAuvjsBDg",
  "key22": "4BiqKrieXKPVU1ALf5TgMPxA9MqR6FzHwPp6dDVZ9bf9XUrmgsAWd8dUETSjb3Knr6eyi2Ew3wB8DEyPcWTUAetw",
  "key23": "cJzmiQ8X7BaLBX7CfjzzvR9KBMre6KoLWqWDpjJdfD9ioXFyuYW1w5ppwmaVE2KM7Gvc5vzSiYkwEAecxtn7or1",
  "key24": "L3BFmiLEoFWSwZsvNoPJg5YMJVryc2ZC1DDJK4GeAzy33c25JJqEerpfWGb7iK3B1bnX19EebrfJektu8F3stoS",
  "key25": "5S2Dy531z2nE2yci4pP7uSPvXnbfNPTjUjA4G83DbAm2cDZvLwtS3Z2Ue8jjAHYAG397RMt64u4SyQxAucyug1rb",
  "key26": "4VSr26vQa9H3P9TaaoAccdJ7tjU78rxvRZcuw6EkzNc4fLGyRV86LmeotoACMjskEVQyDHHKrHQ77KyfGN6yG212",
  "key27": "RBGy2peEd8CieFPz1fQiGQrgjccjXWUqeE66YKeqouH56hFEuGJgXm95TS5CZG3G5xaFNQL5AXYPtGEEjrSuZdU",
  "key28": "5ArGrzZ4h7DGoexDzSPNN5emavikNWewnFuvxN55a5ctLQ3Fsfigd4cLaRFZmCRT6h4PMZvD3acXk8uJ7XuC3SBn",
  "key29": "3tKTvefbxqtokzeAvk4FQaL8SQDLgV3pUWoaqBSgEQfBG7TdRSRbicYHqv9WBUZQgNkrUSxgbxgGGLKKv3jQpdp4",
  "key30": "25w7QTezpdHzEHyD4kFx3nHTARMAeuYtGKVVMg7yrHEf6LmwZ4sjcYVMe4tgPGSXKxsEs45SEigbk8BcxbU7ed2b",
  "key31": "5fSjXDzuK28H2en89PsfDqUcySoQM5bVggk3uyFeGqE65Ve3WuvW4qpaJ84ahjc21TxnLKMZXxHD6ry8LU2zLFJD",
  "key32": "4deNNHhQwpdbtN9y41RaWhS4mnwM57pKSFK96aaprKzN17kmjr645MsW1EguMsTFGmvFVxihDqbxkmQmjG855357",
  "key33": "oT5WhGu4su69zb2qJueT9ZgYh72dCVU5fS4qPZkyuGnZYpxA6VmEWdftxwKaUW5DdcgENyZSRjTGb6YeSPtVTe3",
  "key34": "3zwBCeV2XDSMrHQGjHyPDKwDpxjMUHVXEaM9ni6yawDCwEQhTV87AcSacY9AGzwXm2FHu9QjAGpuZfhL9yZxsyHn",
  "key35": "5KsndaWyZkppbGHoSBXyKP4f2n9wD68ytfyLC8jr6vDC3fQMJJ68MpWJVCLcdjneF51MGxcncZUX5rZAEAYqoJES",
  "key36": "3MmWMSSbyTkfEpjA5ZEWzL4MiLuTb5X6d15eSvixVuGLQYSeX1mDWYdPWSzcZtqhLSkUccqnmn5GuWeQXfUdoaEx",
  "key37": "4XzwnG7pUwfD5MXHbQEGneZFyB363HTtFRejP3LgXTNBHzaEHXxffXP3bweh6fK5g9DCmS4PHaJnQ4KnRcTPkxVH",
  "key38": "61L4D4KVg2DrcL4K5RGzQW8XJb5T1rf1Wbk3j5LcfPaLq2n7g8kqSSaawm7mxxFCmfFovgTBG7wQK2dCaofb1de9",
  "key39": "4bowmYWCgK4VX6h9xc76a8gCfbtJ5LnoJX1b4pNmFCMmfb8LjDwpWmQovxu2cEeV8M4d1C2Rpup7Kff51fR1owfZ",
  "key40": "5Sdi6ScyymnVmeULm66PodfKVGn55Nf566F7huFhwfh66Egt1v564EuUs9rXb7oWhZQUtpqpL93iwgAbPysWmTLK",
  "key41": "2kVCGGMBMmxkmD4GBJ5Dfd3F4iiZLpSeQqFTdRB1ykuGi64DeXZTR72vtRH6yVRwqvpx3eCtMETe6dwxRtiyKvdT",
  "key42": "5wKGb5k8992DU2tG1pz39nNJmNwoKRDw9Ex1VkxpoPaPFugSfU2m1epSwSbT1h2tXMBY6Eo1bEpuRcyWvj7aDSJH",
  "key43": "627u34q4Vw4awnEHtvQ9L2sCBVMDpL7ptiaMHUrNgm7qqqoc75fJKdqBkVnEetBZ8YiMCreGHH43rURyDA9rSaCT",
  "key44": "RpoQJoa9eiFeN6FHx6qgmsoKFXWHJ6KGNojEvaMXFTu4MCDHNUSuBJoVXVq1BbD7eF4DPYptFokc23f5C4tFXuY",
  "key45": "2Q1HqfaDqEUVgZyXrcBDmsjBHPWFUcDPw32jgKHsvk1fLEDt6uxkCtYQkcj5wQJRhF9hg9ZBqERhHi7SnuV7XCzP"
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
