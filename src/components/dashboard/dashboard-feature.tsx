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
    "CF9EEmzQvJz364fne8sh98nCJ8ThXx121bnpYafRhhiZFZ3JfVWidFAxz3m2THpzmmuNuZLdWX9K62qouxHj3Ww"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4X8szSZX8RKWtArqYwhvp2MYQsQCgpBM7d9MjxbLHg75ibbBRxVLFjwnR5vYnP3DLxMAtyR7SKfSTVhZcRiWzKCV",
  "key1": "2BPB15cVFM2aXSAricjvR3huCdir37X22x73VJVT3hVvemvqq9Xd89bWvGyyxD8geQZMdqr28rgSie5eLwiMAVXS",
  "key2": "2uyxnX5M75k8GJWdmPSUDBqcuQmNd72miBKC4WoiFppRqCKPKWNhcaGd1LcnF5ZF4n8KRFTgVrZzFNqw4SCGskm8",
  "key3": "2kFrxVwYStyBy3e7NYZDwcKTNpfqDTPQZZSgY7meutiHCqAK2LzPUfMZSF7wQGCD4gMwNvQSu76xxfM4L9UYnXdp",
  "key4": "2dUtWQpKxeJD5biVewBnrAgNS3m2ZsSAKbHCKqS6xWMntJQZkdiNyc6GoYYpYNCGoRGS8Z376akFUznWXFP5nD2X",
  "key5": "4QqLABg5GB8ekFJXvzRsWz2Hf6wpFiaNbdvAfeP3LpKHc32cHLu8yvTeFgDG55Q1KAUrnG9GmqWda8TLsLEDAARY",
  "key6": "2AJrY74cTX9KxUecQz5zHWaozXps1BQ72piyacXfXezwLWoYDpiLcsWqhfS7rBYHdSufCRGZ6VtDJ9zUaemzLNua",
  "key7": "5BKEiuzDygqgWzcmVtv8Kn38JtYWZVPJR9U487YXwieiDm8KSRSUMnVM37Vq935N1kCAHmuHFWHz5wyW26QC42EX",
  "key8": "GAjQVaVGCpR7kwSYq5rKAqSkKRc98Va6qLmQfLMgUTndspof4ogniRBHApnWKqFqcNAnwLFuJ1uqHxBTrNnWZB3",
  "key9": "3ecjGgvAoZQcdZ3yL1ztBmWBMyTzgfjtFTDdvnttcNCe4QwaxGmxJCuMmVb18pqEzNWaP4TpvEiDm9kzvNqCCEwW",
  "key10": "FFTJWqFFGzLXLkANsg7W36DCmm3ZX5BqzWscQGZgsti1478ronXJJHZSrFfH5HeW6ixmwi4Cniei5jqs3A9KGy3",
  "key11": "577BP8W8XRPHdkEFt5tybaoEJkkSJDYHPMGPLAGoVei91bsuJapwZjcGRhegkkEjuf1LGUzTwtJbMV6gJrdhtQrC",
  "key12": "4nfA1a5NZcuStCbTbgjkbu8YrkxyukrR6NCL95TFbesuT84j2ZXuyQLJ1XEozuT68vC2G81moozZVurRPbwQMZdF",
  "key13": "2fGzd9QAPqxU2jQzpEd5zDAHScxJxEh3Mq8q3ViiY4NF9624fpbwGYHjQEUkoQCo6FvjoyVfPfDxNy6Kk5kqSTxh",
  "key14": "5iujsfhDeQPq18n37GjkDxe6sceKfVndarJtWDuAoPLUjho2oG9MZDD2aqHQ7NdFmtD29FWPXs5iSWhwiM1JmvTp",
  "key15": "3rPP6NS9qfsk1DfHLHyL4fMT7KT7Vex2UXUzGrkZYGEwp4sGTBnbJUUtSTZjg2CiHeXeVz5jowGLGBjsweuBLcY3",
  "key16": "4GUQCKsYB57WCvE22vqD8LXLXiuS2nRsCdX9zkta7mJJZkA9GBuy3WWRroGPTWzdfKXUMc53wxL1p9QtZQqb5NwA",
  "key17": "3UagXbCRvPkSnTxCVQFtGntkXH4nLyTLoGQfhLT298BwEipXCdcdRJjBGdKcvByS3gbtuJ3agd9hwW1hX5WHTuRj",
  "key18": "5uQ14z5WZGKs5L3nLTX5MpMB4nuV48dMXQDLR1bKRUr4xDXUphyPgaWXBoDskbjEDKraJVD4kTJhXjBZ87EBX6bn",
  "key19": "58N37FnRTAST4SxYLw5nezp9P2GBvL7zNVbxfL3RmWDVtVovThzKp6QkXD8tHtiAEupJxtDEbx12hC7aNUt7SVZr",
  "key20": "61BPwPHjc5A4nDgUEDpySM7JVMo2UUXXM5QwUQdJY4samkqiwiSxribB32W3tq2Mn4LcCG3qp9GinipuQmT6Qn6b",
  "key21": "2vNXPP3mgjKheHX1QNEiRfNaJenh8EnUYrHSe5vhP7bp8vSW8tfFwUeZvEbDiZxSreQjqNMckwyHvjU9atXZkbh8",
  "key22": "yX7xGvEgTbdKnxP3kJ9HhHQkMbWCHegEPt5mSfGaG1MPAN4ryam5KSZiamjnsSQ3JVWV9sWNDahma7AtUUniFCm",
  "key23": "4B7YNFArRE4fLMGFT9c9xJ4Si3J2vJAvMtiR7dpMbgUNUEuMfBxWrpBX15EYV9TFFXmfGKuVFRnY4F6M4iBwwgFy",
  "key24": "4EYMocvqKfcA75PQDtRQNvSeVU1QqDHbb3bEdgc1Xj8Kqc1XLZRWEPjPtJQXBwtCZbRqvAVdmGcL9dKghBDPM7vG",
  "key25": "4iUrnYczrLCzZ9avk7zoJk8y514aJFwoEsZJ4LCxDwQHV3Si93RfsawzretpQeLa4UHYheEifnyRu6beZzbEAE39",
  "key26": "2sDPk3WKMiZYo1QEUGyHdk386HAcPbfeiKHQVP6FRvsd868pwPXFae4kSpSgU7TTDEkQvmcWHYJNkHnpN9yDC5w1",
  "key27": "5byoiQkbj4UMAhm7gC7U21wVKTZWByGcDo43MdVkk6KB2tj7q8V3iLZkq9k9ptXfqWSF5twbqzFXMANLZJ889BDx",
  "key28": "5HYDeFzBWBNVh2noKkAxVh2ifX2ugmPQiG8MCVaUbGhouS2LAjd4TVGffkQKFPCAgTK7zUWXN9LoxiS4HSPHEfXg",
  "key29": "2kooW1tJveQXfeynbdU5HBFqaoyoY6eYJiCvy8dS5USefFnsfWCjrE4GZiCwQg8dRhfaDbtn94V9orLWEBtJ1G5C",
  "key30": "4prAxj5nzpxASfc1k8Uz24yEZs1mivwSYWomNX8LgvH2jedQoPPAkj4ix12ep27LGf9CrWrmkx9afaBB51fx6KsA",
  "key31": "3Zght5YFkpxNvpWBJaDZSaZecjVrNdcsVdBhqwMGRaULurFuqyeFNZjEuWgbbaKSSN3NnyzbiLeJnouyVP6HLV85",
  "key32": "5583MhPpKyYh5yTnGSJ6kDjqAEqUe1edYiDpaXrxTeasCVGuaupPcRXnuyMiKNYgSLSb2t81qw35Y841sb4XP1vd"
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
