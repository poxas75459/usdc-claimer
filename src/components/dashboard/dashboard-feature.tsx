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
    "3JU7AYWKP4sDJGppRwBvBsY4DLL5v5uhcNrZrbkts8GoBCYru82TdaWh4MKWF3CNk8t5PxTfP5jNkWALuoDv1ESk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "M7Upik8oxfoXzwiFWmn4nKjQkZJWA4v3Y83meD3absBqvBfXLkHWVBJ6PYLrw5vfTekifoWzu8w2Qqc1XoJ9V5W",
  "key1": "34Miw4QeiERSQiXtePYk6aJECjHvRiU59yLp2vmLGvNmRk8fkxCGG25DnsbkuD3wE96GBTZt2h2m8wnUG23UTW1K",
  "key2": "5tTpfJRBFU9jFjwKiRkwV1AbqMdpaPE9xj1vXBsK7seh8AXwtd5sw723bBbixqsBStvnLRN93RuB8wJ2HsKP9ndu",
  "key3": "46qjB1U9bkuzHqzo1Q2vpm2dKycttBY8W31cEKAzdqKohXpukdGahTTjSL1DErWyBXQ9JWT5JXbPDt1X1q5fpY9z",
  "key4": "QBTa1AYZPZdkqi7haCFCxbMwkQqZzDWa6xUjieuDnWXaE7fMxsKHG7uvaXXib4h7Z6Ce7mPA6n6ocHvMbDF8t9T",
  "key5": "3i9p7rCxc5dZ3VqjAUPpMbGJwfAfX7P7caeehUPUjXn6g162Q22dhSUh9cQj8RrftJqXjSGaYrxajhz4q5cZHWdK",
  "key6": "2aUufDevNUH5crPta8EfL9GdBjQgPxQxKLkCXdutH8VJAchjfAQmWJQnMohmqh54dF7BsUZUZQbci7cFtoTurHnx",
  "key7": "3fsB5M9yf2HRto9nxj1VjYa6jXqgnG6m4hF4UfV1fLX87CqS45ZyDTMY6c5ZbivZrDk4ugsAn35drXm7r4Hqprbq",
  "key8": "JzqRrpXqjrrX8qtvyJyHcrRHNtvQNWAV6BD3ezzMxdRQrziVALaT824zf1GFv42oSd6zsgRYE95Nb4681Gn99jB",
  "key9": "39chz5FFzz8MPzys28Mv3dKvpNNijFkFwwQuycrU16x5BTGD1f7bcSJzAsDvgxYKG3r8SgnLR4B3ezRobzV42owo",
  "key10": "5JTe9gKD3cTe1YsdEHdUYvCJ8P5cKXLFxp2fxaQJ4fvDVn4k5B4SoZg6BzpSgvkUEYGqmtS5TvGuqgQ4BFaYdbEk",
  "key11": "265oJu5xmEAzfSf2poP4UCsm24hfKL34Wr1JNSmuXqmjcjCHyvh88vpV4aAecPKwKq1Xg4YvCi3v6nD9gmZoWhcq",
  "key12": "qjFKt2BxgMPqQpaehAiujE2ENxL4zwQbqBbkBvG6epq5LLiR8Tvo76KneMLGVATDiCGfDw3jPoXSU5KQ7snRieE",
  "key13": "3iDY7wJCS8QKT4FoZ7XxLwxDezn5Qef2RYhBsoRi1oik5M6BcJPZXHHgSmu8DEpJ9gLT5pchLgjSatRRjf57easy",
  "key14": "5CQJvR2GE75PXtNFqC21AbtVD39wJSZzdRsccRhKXNSh8WYcgWT3oAyDoFsgcZzBZJr8FW2f39JxhXdHDScUnGYZ",
  "key15": "3ai36Do2NCNQCAb64CvHRUWfRtxVDmnmdbfzFH5re1udm1rPrjMKtGN84Nn5gqam3xCKpWkguu6KWHQWwvcn2qbY",
  "key16": "2ySzTcooAyBa8po49A53rv4Mc3EAvJHBBt9eawsPxKQXL8yCgFmTVcF2RkqHpowxuVgaMv6zTBJVtRy7noLwgVSC",
  "key17": "4q4uzriyDCBsM3N4xMnPAxAZiRr16JHxJ7gFxNUMmXJgqfkntbdkNXc4Y4YZFZRK53T3jua9BJmW7BAniCCuS7jR",
  "key18": "3MjBVTyxoDYV5BPipc3tjyUJ4xs7yCewPmvtRQdFe9qRvhvEACyjpsBSG17BAqhCGrsdqZ6Tq1Sz6rUAeDwpUf1n",
  "key19": "53TuJ7WgWEFczqcynvwpX45pXPffSnUogHMKS36tjyuMuwM6QgUQNmJBWxJ1XHtq7u2yoNFDqwDKTuxCfrVkh92f",
  "key20": "5TSVMbae2Yt1j5V2JhxgM9XD14xL8kv44Teo4boBdYcVz6QQ2ZFxVF9ficd66shfu9rk1j7Gqjuvnk3p9sH7v1QB",
  "key21": "2XT9NK69RGj11SzTWFNQmB62vQJeZ4wrbwD52EmsRf1tx9cqMruEE8T77gyPqrhdVNC5J6E3vZ4mdw3S2WMs9tQE",
  "key22": "4HH8UbnMU2o7vfBRpar294hQNv3wsuzu4sDmD6tCLqgwbGvy7xZWdNSZGdsxUAYQurnx2eDAvSj97etXKy1ar5EM",
  "key23": "GFqC69NRk2S6XXXfCicDhoxm4KsKNP5nCzmkv8Y4zNsTizqTJEY8YPuJLzu8mvDnjfJeYfq9U4gq8RMv4zJRpse",
  "key24": "3nL8ocuLPzFdFKrTSCzUuHwWLrVdLPWLrSScuNc9ZTfWZLJeMFbxZa8iau9eSzG5Ct1X38Zy1Emn3PVj39RYKZDp",
  "key25": "2THL1g3LiHgNB129maUXhreJ5HDkxspYZcjjhRVNP74jD2z2cBnF1ZR8PjzF62rqbgj5Nxpzf4L16J8ivTavTM2H",
  "key26": "3SGGGReMDCiE9FHPPXQ83UHrkfBkoDpqhe5wLaaaNVzu43CXKrXuHnfL4UZZ6EqUcmabQdidWi9hWnNBkEVWL56q",
  "key27": "4vyfwLM1sj1MowSiqC5hm9fMqHfkQnDGwF7AJG5JstCx4YH32TA9MTpG7WbeRmVH6XmZAHsBo3oUMsbpKFziNGdj",
  "key28": "28yg4BFkcCxtgyQS2rvdmfFHZRMJRCSXNZs1geixXDExgkWNG2miVYw57tdvcBnEeycZLZEMmPkcwehVjQ9rvR1o",
  "key29": "2TobGxNwdEG9dumSNQMjZwj9EQhCAyCbp1ZpGX4nUYnY9P1FfPLzrQLiU7gpavehFg4wT1KP6UE5yMUrnUco1mST",
  "key30": "5zy8cbPiCWt89XgKQgYvfuo3sBN1SrDocejM5wf1DQT3p4XbBwSTUSWVJJexSScsFj7nE4c9tXGzS6Yzm9SUuK6T",
  "key31": "5YLqx42ByKZwDcqJBE7TddCxPhZofVSkr5QYKqgngCpcY4SyHBq728GBZpc2EiyJos4R65tDCqZ1RkKiPCdfuqyM",
  "key32": "5uZ8FBgF7hj36L1D9oSVyYG1JiX8Y9mJCAAjKheT2NQA8TAk1E9WVb2BzQRxckQSYN2RzhLdS2dgs1aaZRigiBQY",
  "key33": "Ai6y8byF72VhFx4bgEpHC3bSTyaVKXJqnshymXudeKzaxVHSoXvz485GQ9B7urvSoP2YKxPS5KGiWmMue3eMbLe",
  "key34": "4sBnPRFRRQCi2H2PQNbJtkVyt1bYNsW9FgMK1i2sWuwCbKCXnDWfZuivR3mqDXn9qNtpnQbkw6pJCCiYu2h1JwCM",
  "key35": "37L5wqa2qkiso2mDhaZ77r4ch7KkeCnseMysRyxTNoxs6VvQj9M3USaoiLxrhjVKk8D4Q6v7yBjtzUhF2fBRjDTy",
  "key36": "3MrHFwet9vSeQYAywX1QdbFqvNsEKWFCoPvbGm7Zmmezbt6o4M8CoyCzqNi3mVAn8YbTNcNcYJAgDKF1cq52pVaM",
  "key37": "5ZQSs4ueJicinet6cHPBc58oejqxD5Dz5eVTVqmt4gB1AFYPXoUHp9ABkfhjetxxRjSKWtbQGAU5dKq1x8wcJw2M",
  "key38": "2iuCnWtG4FoF9uVScMdt492PZDUWnuidigDgrYqqNZhMtLpLZEemdyGumxXsZnZP2FTq6i5o932G9EHiiPtH94js",
  "key39": "25MEFeFV6iqWzBAxQkLsKoEfb65rrufbDutctnKZqQPP6MzBajZ1NQrFM21QyZT43JZ5gRtQYV8x4VMoJKVwdYHR",
  "key40": "28FWFvQejvawVpH2qrjBiYjQxNAMsi3YGLS44FXsWmEKxpz9ocfkhTRQjy8oBwbUQ12uPUoG5qfppPimzcgjBWhM",
  "key41": "MArr7NDNiaA5whNK6JmtxYH79EGgXs5tGimcv6S3q3z8JMWHkWaVd9en7TWFqKbiKoEwVcDcTxktsBeQJp4bdHV",
  "key42": "37Nqmx3zYqsjLGcQnBonnbxhdKvynVGtpqaJ9PsFBds5BDo8gNqBFS59dmC3MM5fTt9YDq8FR6Ufc7hLn3CKNkJv",
  "key43": "5KTWZLVF8Qq22U7DRUBQb344ehpsx5oBkyLX2tqvfUFrmoATm8pHkmK5xTVsyq5hZXwcaqRk6SSUggBA4skVYZNm",
  "key44": "4mpMo2MtnN61G3CuCbRkBtbhL3EnZB3G9GjX5SFbS1bAbxrvLiYf5dSXJvEmxLdzu8kuGsmsqKfcBmtMffvqhUPy"
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
