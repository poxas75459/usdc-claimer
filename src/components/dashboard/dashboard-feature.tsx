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
    "ZrQ5PSfdaqYF6apnV1stnSQUs4szS3fFvEJoZCth76sMYHMAybEqWt4AmLXfEVKHa4Nc6LsAjPv6KdXpL1m7RPX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zz2FcKu737Aruin95AUi2athsBbhdBuR3HQwyZ4Lr182q4RRqiyWQRKeD31rx56kEnVtXVMRoJiaXQSYstMNDok",
  "key1": "4TwzR3FobUyB7KPyoHo69FRXWzsrUDVJUJt9ucr7NLdoYqLYXcD7H1fbBV7pBfzSMMSewyBvgGeAdrafUnvCKyYF",
  "key2": "5tRisL6JnmspBN62p5ocobbUDTLikQMCU7zpFEY8CgQwW8A5EPoKrwfyiMeqwhLYJB8DrezVjVLipFmoEidDaPeC",
  "key3": "3KFPnjinCiEvNk8Ecd6ZJhTiK2YgXJa56q32adujGREU7Ttp4mZPCUbHv1ShN4ejErKYxAvM462Qo6z3QKzgdr6n",
  "key4": "2DJewLeJwkZxGpcVutwaPVuucLR4NKJw9S6ZWFRjrMoWwnxQQK1PzqVee3FE8BrXbmpnGm9ZL9m3R7SC6mXvDHBk",
  "key5": "5tm5ew7i4NNCLYUzrjiiD9efN2syKoV66CH1i8wpMHgAxZGuBEpYMXzovcxQpRCaQUb27ZPjGgdghaW2Yvy5qBHH",
  "key6": "9eU52Qj1VD3peVQqEgA397xmboi6CzhmKvwmpc4KREZj3ihSgMNrxYYeyx5tQwMhyf4MCjJeBKnExXUrCGT1n1T",
  "key7": "4X3opDYkHkT9xBASWLstZpMN5mrx31HKsKzghRunBAcTU2RpSN22ETkQvqyyi7efXdTqBp46rFn4b2tMTBmTu6rd",
  "key8": "24oW2VHtTkcCeAAsiWdfoDzTBLF4rKqDacz19Nqk7BJrdfHXNXUvenUoS1vqciYEwS4Qz4jUrxTEx8o3D5A4PKKu",
  "key9": "5R8qG8Kp6bkkR6v1DYQMc5EejCEb5h7bZxfLRZtNhbPPk2Ut5rmWjVfFouL787BizDZKudAT2T5snBADJPTRxAkt",
  "key10": "4qcAo39jAuR9wgVCxYVzDQumrv6t53UQA3vWFe7BHnpuHGyNvEtUTGYcNBpE4TPzfrMyfErdPMmRSW8HvNg9R2fQ",
  "key11": "62ALcrKXubtuBiszrgtTa3wZ2gSooYwAz6SPnRKhnzH9xENmNToaRafbWSZfFsyfwvKJri9Jc9K2TMFtTBbYEnfH",
  "key12": "2cY7nKKNaxaJ6orwb7asS9yCQm1JMoFBVyDB5SG4Jytt6LasB8qAkyvTc8fcNu1bHQ9rU1VCKW9PhWXcoZWf82Wx",
  "key13": "Cq5A3PxgBg6LKJg5vL13RJEPVq1rjp9es7j45hk3FrW12fiE5H2anC4vYhZejzXo7cM8oPpAurMVQAB1Nd56esm",
  "key14": "5Z8X1A1a4LpxbgSfaxE3tiH7S9k2jX4D6131Kx3kbS3GmhVsPu2Sfrq8T5T1V9CGgVbfRHbgrPp1mtAnUwa3rVWe",
  "key15": "21teKxrQ8721BSqDrDsaUfW9WBxsSq3GhLN4mVofyTFeYndF3z7BgUBvmfM8duUWoCec5UxaqE7VA9Z5NhESZiYt",
  "key16": "2Verv27jiEu9vzAUHGEJBbSHXdugPuDTcwQBhziFW98XHy3yc28fxpnTsSy1BPGHysk5WrrdFSM8U7hkEyWiU2Ko",
  "key17": "56wPa1pCLqK7NimJvrL9mMg9JKpZDVoRxeE3QYymYqXvFwnMmMC6PeBS1rH9zJ8eXmXXw5LGis6y3QoDaH3vsKAY",
  "key18": "5TtqM9Kc5xSf7bYNTGWPAdBzgibCBh8PYkebLm2q81CAUAFxaXVVsoqVrjLT23FUSimVpqUjGbZn9nSPg5bksw6p",
  "key19": "2yoqx5HJtsuoniGcD9tNwcGFHDKWpgX3auuRCDufwXa5WNVapNTAM3WAYzheQJg6Zr2YZvub9V8RVGNu7F6L31Ro",
  "key20": "6GSN6MkndPmpwZcR4VcZtKxPWkKZn5TKv6grGXg7jzcddcuXQjgVgTa3o43BmCrXDzekaWcmP1RXmeny9gZNUHx",
  "key21": "B8uPvjEMs971VnmLxT1N7qjcTPdCkNK3ysYVMTA7ca5gxdBJ2Z1TvJg1FNicbs7h5NxowrMDcrnpbxyumLSvDoP",
  "key22": "5JvBCSqZ9Kk7yUHJooR4cYwUjfLixobiAvoa2dcNJspggN5uiyxG8vdaA9eEGoEkwah6dyXiTDv3ZHb1P93ECZaM",
  "key23": "5dUGmFUDpeZ4wHYTJqAtDVRQgb4ib5tyCq7CirX6WbR3a7AyNpbPa41sfwgDAgXRGmgPExunT85LCMXQ5Ea5gKRw",
  "key24": "59KUhkpcGHTM5bNdHcHHSwaRyZPTsJ7xFUGYezCUHP5HwZKHYuQ7VjzFdPp59WWkRbMXZe24kUxwZLhzFHcQtPNt",
  "key25": "3Cj3fF8bDrgTqDUZDgsqFA6Wzsi5BGK7hq2DXFowtAzHPjowjr1Z7Th6xrJMZvGhqyQxVVLDggLxbY8Sise7JV4R",
  "key26": "2VEsd3KkD68Udnmu6E7QyviWowrRZJBiepj5GsEJ6zAi1mWeGCaKmGnsLBzvQxod31xXLhLYLYfpsCxZLMRb96NS",
  "key27": "2NkNp4q6xaC5M6AuA2BbrH1J2hEtYMNogHzyZcXDco16SqAsJQzVYVYNMeL27PzDC4zESiUELQDTpiXCcvoF6Jnh",
  "key28": "3FttwDrtXgo25Spz22mPEVuBwPm5Hm4QSoZXjpdNnrKWEwkf7KQeQHP8NbdmT2Lqv6BdJiJg5S9A7bsiSLyY34Lf"
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
