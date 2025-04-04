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
    "5Q6qhZxWUcymKomDG4g4M7ovdFwB7rw8a6fHxPd3KHKyY23PcZhL5G2cFjazeNCud1F4bMNhXsdYzxs622uN5uCi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mVe1zQJZSGawpoV2ZjzWLTZ9nQ2qEy7QLKrhbjosRFH8KYcfYndmgQNYZZxaz73FY4RpndC7Ue82uqx9Yt7wXTH",
  "key1": "4ezpbXwmZ5Nk5hYAuW5KwbnGLrmS4WPkKWTV5UBNacR1E5CbRy3hWhtgnDKgqVRPUo6CZe8LHrtaGAaojGycbhRr",
  "key2": "5eHiRL7SeFVttjhMfvVorWHsVVAyH6vCKc5rBx1JsiQsFuWUjZqmaWNE8oxDMGLmVKqbXDtbSvmUxuMQ4wZnnNZf",
  "key3": "2LiayjTNu2eSbzjSyXZaVT5huJwMFrQQpiga17y8GR6Ktsy8JthtRDfRtJSmEeaAmGoVuWqyRrPtEansCZATbqos",
  "key4": "hfL9XwXBMt3rrjjR9w2Kgnsp4t54Kn4uKnzQoBDFiwrTsCSUPr2Jur1Hmz8nX18ir1qNEQ5cC4vbJQaZjqotmjn",
  "key5": "59nB1FxMBTZbpFgJaXib3BGLFkPLN1JJhHQnijzEVjHUZ7MdcsmQwtSfEd9hzcfEyrzmxuEniT74Krv6x8GQyKaj",
  "key6": "38NTVYWBDUHG7S9Uhay6Yu1RayhPoxfSrFCu1X8iCZSX6uGFntygKy77JyXmKpui7P3WYzB71oPZyvMuRG41pChY",
  "key7": "4k6hptGxemmdnAGAxQTEViEwpuYidREULtKtBEghiJ7L1rPfp4uYnZmjrbdHrnmjCascBG8gXzRp9gseeeswfBLd",
  "key8": "5cFRnDqiyS5PooYXBvodkpogUvbFPeHztbrZUJCJrQSUnBuPArDMyS6zwf15KLKsfpzz56ummf2qaptrTM8EdJVy",
  "key9": "4xTyFtD2n1jXAJmE6kH82avw9ogx1UBnn1TxdJjTd3woGWZevZ5SYhk6a8gM2hTBxvcWfUY1pqKqbMaPsLG3U5gi",
  "key10": "3VTrAv7LnYkJrYCfbwEeJXsejzMhvm1Sftbwa9hoZ5xYH31HXdfnu1E8xrSjD3Z9mUMWDcQApKbRbtHvnrjSq9aR",
  "key11": "2fjHpVYf4Kk9tHuHRj47QFuXbwzWDEr9x2Ckk17xeS4XefkXH9f2JvnhBBSGTizwATUHRbSgryd6yEpTnXugttFM",
  "key12": "3667GpVKgDZbwQ9ufsm1KM6eFnyXBwv6S8dkVGAfW4K3FbpCMqrh66j2ytptfrJPMQUbJC2r38nhbU9RRhdxDDWA",
  "key13": "GehhUxD9NkUV8Z4ZqDWmcWfn9Mo62sCahkjcD6PL84JASQ64UK86mUxPWN4wt55K1o1nJxRe49ZMdRFZ9EUJGm8",
  "key14": "5zcbYKbExF1wx8niwyEhhFzkXkuJUpuoiM4gEWYannGSfRUicmT7mhB3mCxaeo6nH4NR22oKXpVtKfMk6P2Xq5aL",
  "key15": "27R2fajaSNwTkghugZ4sK48BSYvs14sSxcvcbRFQZ7UWr5USookX7xMqajyuPt324rgBj1Cf1XRNiv6Hkv4XpENG",
  "key16": "5TBscZX8DrdGEUh37YzhL41raDeFNVmTqTRNR3FdUyCATqN2riERCn8VcJLTdg9Hkpi4QxgEnxQqvS568n2rf5FU",
  "key17": "21yMCtirfrN8TxwfHyqiBY2QNgzGUHN6U9Q6iD9TNxJGmPfRU5Pxrs9wjb62hHYbXGmtMTQpkKeC8jsKtTku5p9v",
  "key18": "N4YdyNArq3unayzqD8jK8oX7raRrf194hAF2cPfjsfvpNY67ijycdCLjvLiRWkYJFnTWK4gWHTczz5VasycZ62a",
  "key19": "66z1AFKLMKgPW3YaFtAJAM1YHKG4habFo2xdA1tN56twSLnEnTMwgYWNSQ8AwRkYxbce5URuwBSF9RHBoDvEq56J",
  "key20": "3agNDSRViXT4xxVdRpoeGzswUo9Kmua9WixjcnP33wuA3ZJmk6yCRtYyV7TsRus4dLGosWwHMHwRHLYY2nSHDdBT",
  "key21": "5tXfPvfBGZeKKCekwmoAoVvAFAkyFNihjEncXdRLcHN3Bi3zs6nYWBxiwEquumMVoU7ghQvCLYz3aae4XS6vf9jR",
  "key22": "5hP6YutE2tcWtjqpAcGxnJww2hzgkiYvc85dxyGYQGJytbeysMDmqK7Zhszu1hCdZ8U3S2BUgvjKfsmvt9DZ7Q1f",
  "key23": "39JK2HfntVz49vP6QnekaNZ4TWYKe24bwZwRcWZkZaRaHS9aKttyUNSdfJs3CBhMNxBw9cSTJq4aR6ZtqDSFMGpK",
  "key24": "yoUq5ZxdwWq62jBMrrxnfYUVzcGczogx9XjV3jUW6No5NpumYEPzrAxxWqcUbbu1dFFjWAhk3Z8VeE72bwssKCg",
  "key25": "59iZWhrwvw89vbaigrTiXBDCrGBmbB7F2oZuTVWbdKj7zs8znrhP2sFvfEfvxYU25VXoEjrjdZcPVm3nqm8Cmt5B",
  "key26": "4GkfBS7ZUZk9zvXKTU6djbc1zejTPUKkgdjvsbL4UK3P2ck2sZZa2dG46WeWjGuvPYGsr8pGXJvdZRZSEiaWp3cK"
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
