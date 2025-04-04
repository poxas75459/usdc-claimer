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
    "54JazR5FDZRCvrqA2X3Q5tQG65E38uMTPJZqXjzqtNiRtzBzS2a89MAUKztDCk9ehWQjTtGqFdFX5jS5oqm429cf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53d4Xmik6phrzioeYUKTQFSFuopLGUAxYGA5FcpYgqRHGgaRJy2w66Uv6QW1s6swxYFyo2Jnvdz9Lw2zvQweLZGb",
  "key1": "3FhpeJYFFjq5gdbyoCFjLyBcbCGNs9fwFhpKPBr8GxHz98CYnwBHFwy5EueSGyiqUeEZgq8ZFGYpQXwqxBdUFz1F",
  "key2": "2jkf5Zdfq5ZupFxbgiuDYgKzPZbwMuoYkVgZdjMpb4HiCBsYXjLUpiBVQ8MKdMpRoUURP3zYiVA2s84VDZ4aZDzq",
  "key3": "cXYGruD1LbSjcht8NuhybBvqAig9L4x6jMFU2srNWeqm4wLzBAnzTQNNEkaXKHSS1ot24oRkEBwVSadEfTd8eYi",
  "key4": "75yMDvxRcMWe7pppJMunXytWwX5GgaDsrJi5JZe1dPCozbsg6iMXsLxax4k22DmUnYXcBD9bPWeU3SJwCbQuRrB",
  "key5": "3XEytxgaJ1MvxmRmFwQw5Uyj8ej9zjY2ELPrP764UiiBCK3azECaZzfEGNSbBcoxkakmDGGLqpNFjY5wGvg8WYsu",
  "key6": "4yQSVmm5BN8JSZruRedLqkKsu3P4jnZ8BFr5vUBieoyASXZJYLdeystNURTcKnzvDng8DKMq9c1CZNYsqVrw8wx8",
  "key7": "4UrbJ45gx1uYMARU9xPQPx1FMoWueubaev9UfoC4ZAMYLrvPUsNcaAvbrcDuSMZCM7GGzkBxatXLEW6fZaEYtxQF",
  "key8": "4igGUMPU3MsJdTtbq4aNC48Zk4KTBSZQsiuaizgD6QMoSSC81KXRsz9fEKTFeNhv8z3yaowXszugyQFofuiYn1tX",
  "key9": "3e4qUNUyuySAyj4yrTuPscKTSM42X6cpXw5r6r9jERVekhcjqboDMXQj32QqAWSW1x3dpYGT8jCsqQWSPBKFWyMy",
  "key10": "5MXwg5wYUAdw3X18Tb9rUKkBMphAcSwKps3pohf8ahAWuHhRZ1kJ535Uk6vfggpppyh3GaoT8dmeAmE9bTf3Xhf4",
  "key11": "4fJS33Hv4TBVkdHwhngNgZ93fonLE68fcJ5CworLcxLbfkhEwYqeFkNaSSZ25rpgvVNk459WsbNh8brkHussGJH",
  "key12": "22ELc1kttobz3Jn6agfAFuQ8DZQHAsqRSRUPCLpuCLczkaF4ZRhAMd81B25mNj1J56nXGGQawzu3ZWaAgssMyXNL",
  "key13": "5BguPjX6RadUc5G9vdoGtWqFnenuQrt6ZEBX6jhgXUkTg2WxN1ZwKiJ88nQDBrGVR4cyMWCgRZF2YfLL8Ba28Dka",
  "key14": "5tPzn4twp6s6n4LMVa5ukm7erBhS28VNHxxhWzzZjWdPah2vcYQn925KFY3QGdTFxRZ3HSgXMM7kB3jVS1ZyuUgK",
  "key15": "53Bjv5sodo1KJC5hbwbQ9SkNT4jZ2ChmdqtCbrnHYRyookegeGRhTULA9EC5VVxH7TwctiJDcZAbLk4N59xyYqwy",
  "key16": "2eDhziEd4Si6QXcWHZ2KJxGvnSa8i4tjUzWdYLXwVUV97pemJAV9S3fNHHuDQy9PFEv1HG3GxYgMZGCRxUKVp5pt",
  "key17": "65yAe1vBwvfLcQ8Ar7LbT7aqN9v1dAKkkDr9Fcjo9bdAvUKtyjmU76gToiYj6c634MCo9pbL5AHTDzvq9efJhdVQ",
  "key18": "5teuLD4HJDdwe2Chd6PnhjUEQvgFucftN4YHAFn3XP93GnnsjMmsz1mLExEt1xqmx6bb3R3qVpkKdRwxvNqh5vc9",
  "key19": "5ZE8VgXHK6MjT4of47KwpJ4ZduvirfDJTYk1pWFYPjSbaR9mWCc3KgjAsgs48XigQ6xkDKA1nWiDTGR8LqFwboLb",
  "key20": "5EMDREg9EFUWhu543VSebowg3HkG2ZgaYAsx1iBCegRh6mJWKFVyZXxciWHtRGFQDib2gEj5bZ4a6PYcE6dRvt5T",
  "key21": "5pPY1dBrQSRtahFuhK6w194WbKWNJH2annW7NBF5AGnnxrxj7FSYbow39j78Dat9MdFatadWc8Dk7sNYvYucrr3Y",
  "key22": "5dyYFGd5tNEdSZxc2eYQ7egvxHeoWNiNUW65tERigZ78h2AvZ8Qh5fBWFVkzSL9qEeCnozYtiVfZnfzxdChAdm9u",
  "key23": "4S13B2FaVcjRRpZmJhZ9THM3soGC9h9RNSLEyAGfn4jCbb23mptiGFAtiBE1eritCzWbCjVmaFZggcrQcS9LL9dy",
  "key24": "5mE4jE68iCpXovUbXB1mHWR7xRnGfVhknYwSJVrgpULaDms7FvqsJSBNjxLtaXrh766W7EX1A2D5GJjeT2ywcfvn",
  "key25": "5pUqfs8PANuJ98tCm9JcPLciuBJ7cJZjjz9X1aK2wksQDAsnSDtnHGW9cPURGTiFJsUnWTscU4eBAwK4crHJYwvw",
  "key26": "SYytMCHTKikWtStRUCNQVUD12oyViqKmB6HF47XGbQccrkdoHPPW4kwza5pxAUNboyvwX6RWMXP4FLsHCGTfM8C",
  "key27": "2tt5tKyfidwhWvG1pWz1ueoBXG8o1vb8RjU93UymJiDdE2ZjiMG6yYMykJqaJucsSQvK69Gdmk6CfhVVRWLbeENC",
  "key28": "5xdzeGmuiwmaps53KBXawYf7umDQEPFDY8JJ4CBusBF1k4aeGBN24T3GZ1t9EhGgkMN5vCWrscmwyDm8eR8AJVxH",
  "key29": "3Ty9nhD7reLH2yRt1sbGMkRf17KDTFVDMmhovpaAt5c541s5y5Y6ngbLLCerRkdCATMysdEmb62ohL5JF3QuaYU6",
  "key30": "3HuarhQqzPREpBzAYub9AnsrMiQTZdudQUY82376BftxXbKfwv14x35ygVoTXQUEhuZRxk7nX1SmYiBdqjjFWq3r",
  "key31": "3uMGk1DRL9TnvusSP7shceK2r1SrytfPVW2zykcEB3BiWeixTUoVQzbnuQ7ta5Rra7wMwFuebGB5pcoC4Cq3jDMR",
  "key32": "4EpbXaDo4GrR4NBzSU77jPJ21hpT9dCxaT6pfvCr85J4T6uDA1JCxUVc5jbjR21LcU2VngU7Ak5CvX4rQ6tCqZJm",
  "key33": "3tbkWavWPP2tK42uMQbU1CELPwDw9thfB94zanwgKj2SX9iCSsmtd6PZ1xETTrn9P4kTKGRGbHzP8PExyjUYgPzN",
  "key34": "kR6AUf5nGw1icePcGLvBtWqRQkytFLg6ZAvhp7qGvVsEGFJMhLtnZYJugRAyvDFnVRRMerwz5yHazBnA6eFrzHW",
  "key35": "21hjaboMxd2YSrxAJW8qW4fZ6wTuMzQj4mVfyZzXvJPXHUCetjHE8U8LuLvuNbVNCDBgMsfAyBV6JaFyiJdozKoY",
  "key36": "3ctqUijeRywhH9FK5JHEd1uRSQnZqP6R35fjmZTkcnsNQ4ZhjHbzty2P1GUrErx4YPgSbLQRPntPjtaA9czQgojR",
  "key37": "esgQ7Qe7wT8eKLmryG3bHfJGpHU9MsaProSoDQAVn2MBkCgVFbXRqoTNvmGxb5GNjd6zkeG3fBgX1vafZbrcTYv",
  "key38": "5fvnmqXGWTP3UVQnwRLVimLPfe5neeqPBJM6AEejdnGRSsmDZYVG5LM6WEPSDg443F7hwEaS1Uy8F92j4PiFPNdL",
  "key39": "347unc4q8GK2JX3o98n5crU7Qa2rdy6DqVqbQBRX6xRCf45nNZs3sTpdWFgDqX6ARdSH2tYdSBqnEbWd6PGjgeLP",
  "key40": "3rZbM19u88o7t6SufFGDSLBjPWN8JzQvnrrbg7piCfTD3kve6cJxMbgzmo4x5d75CWkpodLDPTPufJn2aAx9sfTY",
  "key41": "syEBHQuBNk2jSXGdideCxonM8t5NcNHiwdBwbxeGz6PDZ7yrSjGC6rfB1cyfrSanHxtrCwabRXBSLQaJ9qJ1mD9",
  "key42": "XWoC1Xeu1eoeQsGg2Eo6GqmyqYJrEmD2Xzq5NfP8PeAcAoATQkW4BrW8SzPTc8CGFQ5TeRoyVveAmGxGoZJKyAz",
  "key43": "5Qmg9fMXWP2wgc44AYDD7Gzqvg54YWfXq1hysDBYwkGs619LaoeyTPQk19JWjxVBoxe99anG31YUmHejTQJ5tEJy"
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
