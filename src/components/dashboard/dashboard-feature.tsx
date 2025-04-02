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
    "5nyPMTS24RG9NaPNaaE6ExbbZsifugFD9pUDrPL3G9Cc73TZrJuU1Yb5J5JjiRKDiv8R3kmQWCHFpp6pj8JboP8M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gau1xWNubcrLRoUxchLRUTtDYoZSXaEXQPovFqrbZYm2h2UzEai92BfqSojbtyjbotJzvpW9JUtyEBg9qTQmh6D",
  "key1": "4JRNqHWCZmcgWPawHe9dETXZj3z1WxjnY6V1VNV6AokGVXZTQpqdbS7Le6PuvBvcC4pGRxL4TMxG9VH1EjZuV1mQ",
  "key2": "3iqStGFEeCJBTwUJWQPWVMpRWEctCsg549CU6wSUjaWKtNpoi3uW93GWeKcgQQcZrLzfNddVhx4w9LTSBc4GTqFY",
  "key3": "5tA1tMRRi25Tyj1hYg4ZJ5fZuGfXcRQL74XkhFRhpbw7oUUtPAnwH7pfGQGh2X75X4ww8ztwQGfAtZh2S4mpgJuc",
  "key4": "59GVh8ChC3199UEPxB7SBD8uMBLLTfCXP5HoEV51QSA9vJA254mpnFHUETrZAyd6RYrUPr6ZhdqV5PyqaqLbp5Fr",
  "key5": "429E5vx186mNxmUtmFMruVinct5y16fvtDrqmXz77xWYRJkEDJr1tdnpkmVMc3v3Y1HZ9j5tNfZazThXD1YUJQxC",
  "key6": "3TUFAQJDQ9x7nkncBgsJdNaBrCr8dGW1PFzk99F7Wf19YFoTkSgJ5X9MSMivVo2Tb4VCUTWcn3jXVx2MDwFdknhE",
  "key7": "E8kyK5r8J263zFGRWDWJQ6UGDQ5jLMCzHjVSfsH7NPV9LbEbjLhuDQGCKH4bBZV4bP8WytqeeJ889bGRBv2r4Dn",
  "key8": "3is1AEZF33aR36JSKre2AgHX8XxQYutkSr68sKjJEywWxXhP1CvcHKg9JXjT6gPRrJ98EJoFkp2bT7ZdsuKP2a9A",
  "key9": "xVAoJsyxU4ErSoHXrXWGAq6wsnLFYA9haNKnTJfS33B47UCdNxYEBEwpp4ZNL5BCecoMUUZLi7Lm6ockoDz5VxY",
  "key10": "w1tZC5dCkmPKNBYLc8kX2RfrMMmW58Tq3UR24mHggZxw1DZ4SnfcDX7TgT5Y9UapQ3wxvYr6jWLVZpMb7KTxwoG",
  "key11": "5fDe4xpea6fGZEwbLKh1ViCfy6VJn12Yj6RJVE2mRJpGxKMrxq1cMmBCgrdAdyxxF3983HZpKBRktVGRce61hTc1",
  "key12": "5zgDeycX499bchhw4865p6Jvm2jg74shAaf3eB27DDtbnPwiFR2Xp9W38hBnCzneJANLWVqdiRgwKfZMxqMyB2bM",
  "key13": "23FYQMnpzX6zh1q6vhoYDcfn8Gb9FwhU5MKXQMRWf9jP9JbC8HtnjWkgks6YGhhqdCyxY2jZtxq9cSo3zzvAzawT",
  "key14": "2tUQ2uHduopi7frrUmshT1CFsD9RdiFbhJgJJPF1sxF9MPgnCWaoHynk7Liey9WBftJo3KTWX5ESLvmQeXrubJC4",
  "key15": "3YRnZFP7JAzeLcXyGKKGqxNdH76t1eCL3kNdLE4GPamAtUQva4nYAtDR1oNjRon3tGzvzAwy2aoLzQNt6S41hKnk",
  "key16": "3Zg6uNXkgGTBFtpyxJhC1qPk8S9z81n8trixrrjA8MxNJah1SMeujzcTndFPoRnRNxNT9oDNYABtSe8S7Hr2A6VQ",
  "key17": "2yLSwSDJVnQFtvubk9y32FmdsirUumuEQUx14xTBHnNkxJL6Avnjuamaz8dWeR9pXuGTa1zQk7wYKTuyxUFAzXiQ",
  "key18": "48SYojeWqXd6PpGirzYdn34tCihpkeuvxanfrLYUGSVvS9wx2DJBe1vcpvK46n31RM5Rd7eCW4Tztn2nzzuW5nrT",
  "key19": "4x6CycfAw1PXQ6MSFmeLcV9bnSFNSJeobq1TsKdHcbLLGQmFM8oPk999BsKacYtJBJuPS8YJP7yh2af35xGX5BKB",
  "key20": "2K6iduaXr8C3LD3NCZWFU2nzDhx9qSPdbu6yg8sQW7eKd24EZs5oYvHjxWyKh33JwruKnX4cyqitdx89uuJ6h1vA",
  "key21": "385DQi3prsxxwd8wE4AvCfSeJg7NMPCZETR8aQ2nhYoNtbRaNqP2mjgBKhBEV6kjH5bM2tvv2e21cBj1rPUaqehN",
  "key22": "UjNZt2e1sQBYXuGC4pZdgtzRL8PDo739BHvhZQzkKPPhk2zK1sDRPJcmYcQqdApPqxmETqFB2J4vnKgzhgvhyFx",
  "key23": "e1b596eH9MYz93gVPRJCQq535Mip3efC9b88isbwuy7Pd1fUrubFToBPMmKLeWw3THmWM8LZt38U2FCCfBnjZya",
  "key24": "nSTJBnsrTxc5ZRYYyKJbpoa72irdA1p2C68X9eyQwoSxSUqkrejsKEJWcu4knGSEXR6H5yLJUWmxdhajY7eXG54",
  "key25": "4t7TXfeeELkNmfdgknYjEMQgj9sbqzNvS3i9FR6CwRKgoxGCgmN2rdW1pQpVcX998ntg5pjGZiEpCrWZS9USK2B3",
  "key26": "4Mte64cieP8gSn16n1xwpBYdq3uBZiQ2idZJMdvZaCwcDPj7Un5P5vJGGNsGnsRA3mjVPsWNFMRtPGyippL3DKAU",
  "key27": "4EYccs3AXNTYqpRH1t9dDMhXRbLmBe33VG27wd78Qj4uyTXtAhHgWer7ZAz6BRtq43WkKgCUfahh4EeJZVh6YPSc"
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
