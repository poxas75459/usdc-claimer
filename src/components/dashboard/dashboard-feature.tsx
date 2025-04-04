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
    "5HUV83YXUmboRgkq19KjWRiXfwwyeifQKzyWeSd7Jr4BwtMnhP1mpYWEjLufWUjpwcZBZc5jZX1D8w3wfuxxNjBY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "s8B8k34aAnjnYz1oR5cqnawgGjLcnBSyEuUP5RatE1pHL7qnUx8vD8XrsaM6DvWySPCMxNeVy3f3NEgdk4Xvo6r",
  "key1": "539c5oNoABQGahdsagG1UY4GgeZxjd5CnRyNdeZLPwYGFC4eSwfGUYHvJq4Yn67zmYe9iAFLvU1p2fLcbXypJUGp",
  "key2": "4e6CqCwqkNVXboEqwRxvEvM22hGb7dyM5WU1dUxWZfv4fMwU9aLVGySmkoDN2ShqYTUFcjpRdyvesD1DYEaTP2Nr",
  "key3": "39utjq8p9UAvq8864HCXCeAMqLNwKz5B8Lwi5pEvhACf2ght4haQKsqmdcq5mTPRctVWhiQbKoJvm6VNnukTBQSc",
  "key4": "4xincPSo7Y3YFWNkMGCVmQxAwySc8TCziWwxUrU1mKpw7kNVtrYxk4WqBq6CLkndYqQUytyi9XaTtLaJcwAohEfd",
  "key5": "ShKKqeiGN6wnoaTTNXys2WU6ZQyRdkc67uA9MYUZuH395UkRmdU2gvdBbAK9hWYGFSbC4sgghDoXPPYPm6hRivA",
  "key6": "H1aHCfvFxxnjKcxZximdvGyVRj534AFRtRXVjayZWknfNhMkBQDMsqyRJWSvTeRarkJKJeGnFEb812v9SYs1zkz",
  "key7": "2JJ7QAwxDiqHvdyuLgwMdpjbq4PSZL1Pug1VHZDDiy5pQwbTuvrh61NVs57HnHkfXSvzvpNJyckuari78qa9Qa6M",
  "key8": "5k8ko5idLVD9igMkbzQxEwszuwDCbKtHhtQBSFvVQLanJtBxqcjfzWhLSwj4w3fpz4CLa8GkR7Qf62nDpJWdE9UG",
  "key9": "3Q2AzV8pYvNWT6kMbX3gTCtHncBhYiH5DTzCHNRectuGLwsTRouFjutJQQCieyTmnFzqDNPSTKJ6SgULDeBLjU5h",
  "key10": "3DZqu4nhbmeS7tRuxszsKKN4oSgALjrCVw614DyLCh9AjcDrRcXZkLw5fhgr4MNfuE6Ee7dyoueVWf8gLxCEEvx2",
  "key11": "4YJE3k5koUY5ssxW17cVsWtZ9C8ivFn79HpKQDg4bJArxWWRKwiZ5tyaqx97H6TxW3NzhB8AGByh1t71q8MVTLbH",
  "key12": "5esPQscoZKjfxQMryZHLBYKzDi2Acmqc3YoRhxUVh1rZf7AquRi5B3gNL3aktVa8H4wHJ6mtnJstcLL9BosGFCer",
  "key13": "2EqsUxXr8BmbZDvRDLNj56Km2CUTae9nwbirMNNf9zMAAUSQTi79BpvP3EU5BVMmKe8okpT166zf84G7SYQH98Uc",
  "key14": "4xTjuHXqBt1ECE2qf8mpTwiBGRFKJbWDTnPJNb2rAidtMQU3chA8jFC4NH6BEDp8fqEHpP9otPHpvkVyzqShDjqq",
  "key15": "21XFfRRDRnNQS6fGFhsBJyzZCPDdHQW6Ti8Du8JyUUftA4MvQ31sKPLKyEcB4xGq8rqcsZJDsqN3asYh2yRNEMZQ",
  "key16": "izJ4JjiDt6c5tHiLYnqggksFVaj5FCS5CMHrdv35teZcUNAABmoSChovjh7u8kamvE3EHsTkVxqbHGTSxzAabkY",
  "key17": "43dxKPH7HTjN1hWWuR8QLcxPWePyzYjaS1kanCw6Moss96yta2Vb3JftxwAvvfHQnvnBknGyJEKLPTpYQsNenbfh",
  "key18": "5pA3qd4ipgvpmqLTaoZmDM3mEjeqJ98s6Xox4deZS89MXxFcTrr87u7WhgsratRdvC5C375XXJ7rbnBdY8JnMD2L",
  "key19": "23V21nHVXfJKUD7HgNRMLYebGvU5eVxcPeYKXcLUtWrkVittWL9nvoeReL35egCswemCkgbURUnutjQ9FJrejFbV",
  "key20": "WcSzzwGyPvzTbfuvWufsz7j63ejcry2SDhayzn3VaURxoDvoGNYJ6fqidERovmj5XX8S4YJH2vx9nWhQf8fQ7rH",
  "key21": "3mMgU8HE5Z6R6LYpaH31U4dqmYpCET1zuRvB17hWkyxJG5Fktk8MvN2vrcCWnNru7swtv3KdmGnDbTfe5tthwnTo",
  "key22": "3YfdomuZ79tzJFasra7tTJN8DuTtfNTNMCELdFtwgSK4yBqnzjcaZSd8VWXTzX2FcLVu7veH3DpmaXv5bKrahFde",
  "key23": "4zW3NLKr4KAqSf1kC6xQU31rMbBgZkcn7QeF9ZSsfmsxBLQ3RHchVfhAygbDNBjXKQbrnFHdfMsPSWdhn2ney49f",
  "key24": "2MB35kUvYT76yEL2xZ6PpVKzADXF8NFU9v1xGcQ3NsNDs8oGxsvfzns8RuJibyJ4CruBJ55QmYNN1ThxaPDohCjR",
  "key25": "3FADYYvLSABPZMcMBSTYrGcNCZao5JxSJRoYoibiwXDBevJp4JKJjNqRBjbHuJ4GKvdwBdDKpfrx7np6PFsQjmUB",
  "key26": "4bAGGTZajoek4kH11yPcqEtzLuwJQnJKBcifZdFUohC7usqzWMg7GsY9nspFmCaawnfFgcuN6P58cjTBHWjrxEye",
  "key27": "5bczTS6dp41Fkxu7aBYyb9gz6CdHimGo9got3hTH6wkTnyNtsXkxnnKDKTYwoUcRE6ucsLMW1p2UEhzmpGf4F7PA",
  "key28": "48qAPRVeGLc6ppLKj5wLB2cd9Y4npW4MHz5NwfkWzSqPWkyHkTVXoJ7bUVQnvEbpCvQexLCXezCC48v38oaWakRc",
  "key29": "jVdq54c1xNG8voehUAekvCsUkpBBacfcPkiLPwjCQ8Zck4euDrKg2KoR9Pnu2Wp5cP1zHDYeiCv3DJd9vV6xaQJ",
  "key30": "4b1BLStjbApLbESGk7jw3CC8zoWMD2qiWVnxfr5MEGPSvVbeU1GzAZ4ECfZyRU6aweiEMgRnfsCrJZ3r99LU3HRQ",
  "key31": "5LwgAeFEpGTTsVxLFYc1KKTH8cuZAnbC5Z76tV6auhrDswFnKVh2XAnjsReaV1JJYYe781V3mWys1H7TS53UdX9H",
  "key32": "4K5MssQeyhvR1qL1zBsG1MXB5MjaGnv7eJtNuh9eKyFDcDjsEa6BySdXvZxuyJBKcG2QfgvPSBfssDKbtU5X4VSp",
  "key33": "2D7cbNUfkE2P3BfUfurnsnhkMuNSynG5CrKf4WKh6bUYViE4yNuroykjU9XLpkrR4SQ2nFAj1v1ASSPeDMbgWHBg",
  "key34": "2rgyFwKeoAsP8EFf9KsqHZHPo6wtAx4oR2PuV272StYZE8wrHo8uEMTva2BSXWHAJb9K4b5kx8DCezXrXn7JfJAr",
  "key35": "3ZgnZ3S6GdWTtNxspz3aJRsgUMpRwXJ5xwmPTxSEJUpVLDEpFRDhnuWuz1KXhKktw37FEJkxJAnWBFHyviF3ShZ",
  "key36": "4QV1KvmkRGvpxLSfmmZTDYAq357N9JhZiaDnRymxMb8P4nmrJviUEGMiAdQhbciepTDuJ9UsBnJPUoHsKJ6bbYGY",
  "key37": "5dYHJC2g8r6LFLzk9cu6a7ozqvet4G4StKxipAQBtbvegvrac23wzaJJQZtpe5RnsmN7tWekRDjHKqjpVfSqZXfS",
  "key38": "5ywLvWSrhgH25x4dxd19848XpXN6iFUbrecHnMRQGC5YFqg7ieeTrt9Gk8a9Lj1nHNCSp99cH9CDs6A8xYLDACH4",
  "key39": "4gk7X6RKmfuCYiaisnfYwoDndS26txKSsGEdK84Bm2GttEyGrkGZBCkdNxQLVVFYK7w5XWoEeUKxAQpvfcJCLWFg",
  "key40": "5XCPaZ8sfZ2gD8gsNejgoowRdtdiQoV6JcPADMcLkewJmVSNce3edGAfhg5PkCYtfQFb1i7m2v8yrAa8CX5FKsbf",
  "key41": "5fs2FWVWm8PdyN4BfcDKdZKYnnQStJu13F9tPms1ctopdzv55Fr2VZNvQBQY9Vueu85ZgVUrJjziYb9XFYG1ND2c",
  "key42": "4dUKHJV62XWsbf67ZhcrmCYrtXJxDNgo3qhDUCbFCEGwcenYNLwVAzZcsYaGEzVbmmbHZJfu8E8XmCxfcGv3mxP4",
  "key43": "5aYg2iY9pN8vywmQxfzBbwGAWnzvi69pTXtqBLiZahkFiBA1r3q9UH1BN6krMyPwHQ9D9FZvc5rB3uw4tW5QDPgq",
  "key44": "atFu6kTgAaraqkeK3LNWeRRvZyVHbjWBoTGrgysrXgbKpC63p3iEpREY4Ua3TWBpbNnKR7SujDtUVvhSfm4oYGy"
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
