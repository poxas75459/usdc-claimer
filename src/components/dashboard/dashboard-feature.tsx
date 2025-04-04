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
    "5QfnpmJ2e5XJYZHCmphZNvBmxN2uTVgHGG4rXUJyPxZpPykxK1z3ofPBSt7qTt2V8Gqb9PEDUAV2yF3t3PdVPth9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HV1aQ1rH475oSibMRLUgx94YNL78Subnvy8Ne7TYVZYMK2RSdSBGrDJRtMLpWNdTFHm2T1yrZ271zQBL8QUtyGV",
  "key1": "2csMV1Q9Jmuo2Fwc6MEpURmuBkibaXEVNYCC9teZEhXBsLz9S2E4oW7MVPn4mSFK5nZvg5sdtaVQGoR8p9o1g9yg",
  "key2": "RFH5b8b3BZ818bzymdNjaWcwCu9DQxE2X2hfUP44GQz1NuAd8z6wRU7KFr31Tg3eQv2Mntzdco7EQSAa3j4hgp4",
  "key3": "vS7qgB4Vex2TmeZ3938ZfK4Dw3bDmjjK7KqMxGMwPjgdpjAxTzShmuvC9zNtQBmqbijpC8ALAhMh76HCWbMeeLn",
  "key4": "38nu5Uyenim1UCvQZJYhYDwzMrE7kehVhAbc9mxJUw7PuyyQPHUEWvkB5ycbNfvRZ3eyjKXA865UnazGQJZxUy6c",
  "key5": "syKMgkZ5AVPe552gj84AJW3HTx6Ur8GAWUfiwPmviqfR5rAg2HtsSdUwdww43jyyBe1yLWv7qdYvdt1ALepx32p",
  "key6": "5qCsusZneR5X1WvK2MD6xsUMEPVWDksfZug1gS2CW6L9q4DeVLesK2in5v228wU4c2RRiKKjfDFTVxxVhf4i1tBJ",
  "key7": "4kNGTgVzvZd6oiM2xa8rKFz1NsaX8SLDgC7dKWudB1Ut872Y9rRm8XVMUy1tT42YWLaPhp77hZAnZhqYQkS9YxW9",
  "key8": "rv8nvV1mvvBHCKuPCTTpLx2SDvDBNKMgHHZyFKiHqFHyePQLDT9LGrhBavkuns9BeUtF2tYB8bihvbkhyjL76Fg",
  "key9": "iJqBuWqWzzn2xkbpaabJ31TXka3AGd9UD6KkaMFtgRpWzyX6YYkHARcmFa7AFoYqcGER7gWbMCSKoL4yWpmDsLY",
  "key10": "67FQejS9CmJPyfSHxHrStLrsqFcyjyeVhjrVo6xyEbyBTfxdDiEaTBWnRocMoUksDgsWXmTviZbcDqMpb1QkMvgN",
  "key11": "21fnXCmUxcsZrDbLkGPsqQeRqnQA9eh6h5dZD4nrLfLreHX3dDg7mhLiiwtjeZvRUoX1Sk5p7TdzqVJT5rB215Rm",
  "key12": "5dou8S9PkxF5pajM6QtR7xoW5y8VoFa49RFD34jaHHo61eLg9W7mPmLgEmvoQGmCQvbCF2mbeebVgqe5iboHekfB",
  "key13": "3qffmYKbNYshwyGg9NYqhSDa2bBofr2Y4Rzgb7wuB3gyzdmKFErAwfuigf11T8GQ4NummjZaLjnN7tXzhoWHgMQt",
  "key14": "3GeLs2812pGG2S3mYZjexZKxwHJvc85UzLu8dHH7DLisPS6nqSTPTyV9AZfVLBUZcJKnDwQoy9nTGjSypZr3omun",
  "key15": "5Cgtk8k8NNRqmi4G4EBy4NLWYtZzKNRbWuJXVGhxHdBtNEngK9DZ2kPrJ7bUoVPwfSQ9S7RS4fzXduF4VTvRBCeH",
  "key16": "52VVYnPYg1QMVLJ6j6bDQZ9Jmg1um1z8PvagjsNQB519gb3J2S6FFFQUodk6jF7tHVWiDTPjGNM1q8dnWu1xxzCg",
  "key17": "5ADzQTQgZToJwC3SkYPYwH72enrdtb17fwQYRMEBMmnpCyWvikQS6ig7rHcJxpRaT7JPbvMELvUUJsrwwwUtWtcc",
  "key18": "25ccCED4L2Q6DjNuWhYJCaxSgENFvgNkNXWoshqRCdwr563fPDdaHMm5nT18znow148yKr33xFp6H9qfTnRraWNS",
  "key19": "5KGZqbmWtSVysYwY7SMF6sdYwhLcdTXCNPKHeFPXkZS9eeYvm7mPYyoEwu4RnggTmKDT4XKrWAVeGsje8eSRpJJw",
  "key20": "tRnnhoJYQ2ybVLKYMugf2HHB7tWNbtD3jGHdCUQVmJbknUixuMim71cA67gzwJ4QLbXUUKfmh24J8ZghjZE7JLe",
  "key21": "3BorXuR7P5T1npUbsF2t7bYz6DDzBxz5fWMQt26Rvat3g76zJbAzG9rU1R2jAnP9noHWPhnby6rwAeg8rDFhCvFT",
  "key22": "642gEXcbN4DAQDyorbrymccquhS8yS46eUWbwwDvmDMG13JZoW74hwd79vWGYw3zsYpboT1t7cKdwSoRNPzrZ1UH",
  "key23": "4NEcnfKryuV5NcvDkPHdxMiq9itGyDaTdUEWwhKvxP3KmjBeUZETrV8kZ3wQeJUh45nSRosMXEqqMkchx645E4T3",
  "key24": "iKj336rK1oakZ6guMsLUAtyFi1SDMbsFS7AhCVUcgZ91CQcBqx8uhjVL5fdQhw5N5Nuw3iLCLeqYBKyXuVPzEun",
  "key25": "66nFzJGRCFyYKmrScaC6x7t85oxiLkYQoQyBDq2AkoSrUxaa5Jqq3Y8ZrZCNxTSywTktnB7tNooRRh4Q18Bv4Md"
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
