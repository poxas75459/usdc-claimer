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
    "2BHbsVszVTPDUsjRRS6KGUgYg7ViqcDjWDPg59pWZfc8AE9G38HsqT8E2fRGg8vrPxwqHUuBo4RHxHXXSmSizLkw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GyaPVVfoVPmrVWPjiAt6ezcTrmAQtgpT6iZhJa28G5kcjz6QK5oPKLRtYYBbCYKVBQmfJ6obWbbFPtZiTuRaPrg",
  "key1": "2hiV8qzfruuakiGPoHDwPmYfjvp4gmpSEiJMp3U1DY7pSctAvS2biBqJcVGauwuvtKRS4qPxWigY5zJjgRnMCiNM",
  "key2": "2JTsqs4VMBPFHSWcgfwp5PGec84LKrUcTVd1vNqvAV9veNpTYssxjZMvMCNpybe6g8czkteMWJthx2PLFAiRnn5i",
  "key3": "PsyFAuDjoZBjukUHVNBnMzydoYPGRiwQHSXBVzV62us99muVz3gRaffUi3qmLxidzXkyqGs1hWUupgWDqgwMRhS",
  "key4": "25X44M1PDgQN29eiuxxPqg3LeHRue4eAbE5aacyUzzEah7pG1CdyvfujhAhpgmB3k2iiYPY1gzyoAtG1cwfmiRwB",
  "key5": "3v78bmwJBkp8hgC3pYsAjei1kJbmHmSb8SQRwD36y1FfHB9Gr9zMAYtYgFfhCtD9cBHWNGZbxYoM2FTabiDxpN98",
  "key6": "2Z5JeUJGP75J1HLgM27162eGwWPw6ah8UBRWDxBsCV64XfLDxWvtVo2A4xnvpTkd4fERNT2NcA6B5ze4pyG6Pztp",
  "key7": "5och4s6je4vf2UhDVELihAnfxCEGJTaNmUvNqjt1RZqAEebmoXiryQJ32qi4juSzH6GMgeVxdWBBzeVaAhwjKTyo",
  "key8": "2qfV3ri7ds4SpB3uEGyAdCbtfNR8esXdBZR7KsUPXvCRsbpWmcGneu2nrnzhDYyrqujRW1ZvSwFLPBLMPEjFM8PZ",
  "key9": "5LSyJXtHNepXezdmH6s85NVo2JJErzrrQLCccDsnsMEvR1BaLnr83wZpdr9ida6LbiHg2G2YCjRpmxPaepMbN4VK",
  "key10": "Qfx48wvUULSNjnQJ9GG87GRZD2s8GGy8vFqiuwVb8MNNscsGC5uvvBZBCe3GzGvLcJyJHBpWh14J3AovurkjtMv",
  "key11": "3ny2gdaW4NsHSphbH4gkjVjSjTNW7kR2NMYzrdmKDwgudFcSQDMF7Lt92XGmchNGXqTxmtY2bn7JWntK4S7h18fJ",
  "key12": "4MJ7g9Qq7c7MTfY9S8DahgyMRyfvS3aE8g3Vwzz4UPX5zJe7L9AQjQJ9TY5jAR6E147QoK1pr71ELBDgQrKPPkyJ",
  "key13": "2QPJoGtmRQHDHJZrZPVKnHPgQRJfRAfQFd6RZ5HevWwXyZ45C3o6oG8bcCoN6mXxCmLwrgJN6LSeCDRxakZ36fCZ",
  "key14": "2eGCBHYS7X5ENcffh3PQkr6HEjGzNisFCFNhwxHJLyaAFsLNmqopP4WwnLDYWBmFqcK9FM4GTZ6CEYVfWRXFBFX2",
  "key15": "4Sb1Bh2rhGPyH8MvEEWgxwmNJFEUMfKbjfpfoFjAV3Resi5HSMcN84MUr1jTgsHJwQFQDLLyD7zZFE1QTkRCzuYx",
  "key16": "4iBEdd4AHNy2L7UuBtT1wyhvtBvqN7iamhSrKGsstnBe4XBME3E27oTuwV7nNt2F54Vw9KLoh1tuKVm1R5exU5xo",
  "key17": "fnXD5bqH6bWiBJHFWwtZxBYmvCGFdKWL69EF94zEKhXJkp25NvT31uuXgGCXUKCoSKnTWAwsegKkggoFq3wsQ6s",
  "key18": "2CSMxujoRRuvT8ToMgWkcVQgUbhQ6TW6rVunnCSmhPJGJrH11ZwyWbEVYQtZuw2AURmGVobcqhHkTvDVt3CcqbfP",
  "key19": "2eaVzDpkdNiKZiLY2qWUQ8JYeYSy8VJVUcVLSNFQzMBsmEjDxES6ZF7hESy7AxbWRjKwzVdxG62fXZnKgcFowtg5",
  "key20": "2EZ1xfwFWNFmkgLb1aFoqoVfK5oCUDuJfhmGD8EYkpSj3r3FkWCA7B9ae3sMLbth1x8JnMFe9G7usECGuQGa6KpM",
  "key21": "5FPf3M8EW4kGbSQVzLfoJBhasE1rDPcrxdnrgT5AVcCXYgTPhqu55bdXaAy4YBEKSX5DFPhqqQztBCvDveJpZWC4",
  "key22": "5X8TTjzfevFJydB7AncmdFBZiFuCcHV9HsbsW6wATK2PrxKJ7b9qZ4jQ9i4kU4Ppet7uem4psuSXD4ySwbzv55s8",
  "key23": "58mhRsHhbt9p3vsW9sRRduqJcViqRenXsh4zfXhVQFoqhEoujjTeNtfAKvL9uygBKbwVt3aboJZdxbPfHtGjbRFb",
  "key24": "2MXtajFn6z3xLJ1VUxGqVYu3BajF5Lt2whxgSuME9zp9sqXyQjPCBHrsfqDpVB2SULnE7cScG1NiAHiooYphi9GQ",
  "key25": "QZy54HZeBjDncY2xkY224nBE3Ur1actwez9BcCXxxioAGEXTsQkDHfTsBnx8b579poKB571W1QvwjZnNWab5kUo",
  "key26": "5bGnFubzFHKtaCSvgaB11xvZmAGYY239TxYTR1Z3Zvy5EtmN23xqTBbrJfMvj7TmUCSj9E31vAHxj8DZXU9G8NDh",
  "key27": "3TRVwkebGjhSM3c7P6vXE31EkpHymeXNYh6s7xbkvqPATdYCmP9jjM6MM9yJxxgLu8Uo5XqwZQGWDXbwgmJn7m1i",
  "key28": "4PFD5y1B24Pd7fN7iJqFppi37evxZ9HzjGngVQcDfXuA1p5znBRHSU184WLk4e61gfxS63oFGUMXGSoYDKfZcfTV",
  "key29": "5W1bspaeztMpitSEpkRkBGZ7FST9sHwq14NJ7utPBKsvSA3Ym8aewFrrVz9wr6jYhczKggah5DY9hBdW4nq8cidU",
  "key30": "5te7uB4mXWVby25mXdDXaBFksDs6aByxcCiHEL3DTZtq3nXRH48RNJs9Lnr7BFxdpdzGq4LdksezfDng9JufCSMx",
  "key31": "hrUydenwBoU9jkJBMVkCGnCAbLrC1dhEaNvYfywBmSWbHWvkDyg9WvZqea7pUjiuJC1BfrBs9RhqwoErAJRgkPv",
  "key32": "2t9XSZvQfkpV4ND3BzhQkBLj9Uz2e7YRrke4ztZc72LcFRPvBnCVf5wtBfMe2gkWLnzWBVX6uTq8NgBKuuUbVPJH",
  "key33": "3JkXmy2iaRQpyZrUnQk34eGn2rNcXFhDULmB1UCM8ixJqiAdkN1EY5T8yVJe1rdx8MWfg1bSqW24fAzbkfxwsdgi",
  "key34": "5j3ndbGVgSfnFgfhwTnJ9SUpG3N4fNggk6DkjmxsdHKwsBEvzkqiEdcedJd4BNeQtWPwt83DYtuAi1CPMd5HSEq9",
  "key35": "4yR8Q9AqUzU7yWvkxEySh7G51hFAp92Y8r6Es57QeYkXstYf5QspP5fCK8E1raLK7MEd5ZGwPDgW4eQicVTBPfLp",
  "key36": "3k5SgmmiwevH9u1uoN7Mx29b6nQwpQ6hnHhQcfaf5BwgvDigqGKo65EsPV33Q7Pwa9j1jaNdqMoLu3zkEfEDDyWX",
  "key37": "5u9jVH6iC531PX3ankQGk2YidPxrPU76Q3bgCr33pc3JpATrGBECWPFYzcDHZkCwev4xxFpfw9GmEVc1J1ehdUsc",
  "key38": "2R9gqkVnErGGBFzq9YpYeUN8xAfMjZvMUXFUL6PvCnbWuZjhozby8S3CiRJLDNmmXd1ogGJtsDa7esdzZk7MrYaK",
  "key39": "2wPbFHCq9Dbzz4ztyUQmNbNpnkcuLES2ZofZ11H8B4jRDNmATdWNSDVpPEfNyTJUnfSH1dJ6kfh2GN3grGH7kkkL"
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
