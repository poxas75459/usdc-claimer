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
    "X5wrdk9uBcW8r9SDqTUg6eDKJchHYbrzze2CjDHW8ZXXwa5F9obdC7FCmfQx3Uw8wFnEjPJnnufhCX6PtikrthQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rCJ31czy9bFBYUQszp3SXg1kcDq2g1yttQ5yuCjQCRErkbVvnTGuDvJpVB3b3E9D8HU9MzPiVKS13rjENvwMgYF",
  "key1": "3rpYZEQxkm6dRqx8ef7NTdRhMyJD9ovoBhyTKWmBESdeV4LZVd3tgV7dntnTSfT9Edd4VYy8QioQYSBfuNEmi2me",
  "key2": "2HBzjUQXsNqeo3h2DhHWze52HrXRy44wuY4rHCMBPqbJTVnpg9wKAwzsGM9KgjmFdm9hqC6pBQLgipQGnt47dJZK",
  "key3": "53QmvpdFfm6hNFq8mnJyRY2mYbub7cTRbfUH9aXSs9WYxh8Gkjd7HuNEbYu2RVxiz2vMEcnPRci6w9dW7rKf4XXU",
  "key4": "aadjBFB9GwJMYLAZbJgbtKDo77535x2xLKw77HJu17L7gFcPLsQDRzpRZPeri5g8VUwpo1dj1vwqGXXfd5nonnH",
  "key5": "4CZje11w8N93DUdM15d9ZVwhCsvj29Ev9dRX53bKQwp2RPDNnCgRav1Snk3ozVaE7fZU1RytJ5FvvDk2KJaw7UWr",
  "key6": "5pwwJabRor22F2Th4K2B1Z5z8ds4kZmxUN35dPuQusAs34Rg4YEqKDEQz9XYzbiPZwQiDZy3J8FVfwzjfMi16TpW",
  "key7": "3sQrMXNRWuj3m7reLDzyPCQhTjpWTtCFZr7QMQdbrs2k2SHPrSazdGJVPPkPkSG45immp8HD5NEB63sFE5X3VwD9",
  "key8": "4y7J6jzVeNaUsKWDk6t4HLxB1Q7tcvNtxkBbVdBMnY35wFJepUWAPXJ1kUaHJ4zzFoZAQEENkwnjK83ZF4csFvrE",
  "key9": "37vS8SMeQQyuePWmNFwbXJ8E4CMFdd2XxdyHJCVRCAittznkg8sPDLFVPZ7oHLResFT5iyJ497gue2jKnqp9qgah",
  "key10": "3w2YZzh6UMukgDnPix1Q125KSrNgyxcrdx7D6J8JtiYoXNxo4jjYSnG5Mo3iaD3xTRmdvem4hyFGEwGESouPsE98",
  "key11": "xfK6KAsaPGLdYyySXkWwutuFRPtM4vQDZqfpDVnoFcfe86An68YTrezN5E7qkx9SNZDNRh5v3t3D5b3pwGYMf7b",
  "key12": "4cZFCARmRFQwGpWPgYokrPW52g7anYzNcyCuCKnqrJ2GxsS7zLPFnrL3yTwpdtV3C8zVQWifWu7uewoQZ89geBsh",
  "key13": "4zR6yktMVD6fugkJXvxpMdTTQQmgzVzpAz7XaUy2rsaT4QMiPztJ7U5zH1yyUpt8DWB7BnqHgDg37EvR7KfzotMx",
  "key14": "AiYT1e6dwxqJMuuJnBpuRFwh3drRP3UQPd5LTkBBbz3wup4YVJaxodxCfNUN35fibEz214k9obfGZMXyYYysM6o",
  "key15": "7FgHfZ5mg2Adn96Gnv1zaodUAGDaaUAKpLPZCXQuiE8oCVARY74GTFTuuHhhiG4UsyNFsapPbEQ14Dq54SALC4w",
  "key16": "4f8pgUZGYhw7bGwnhNNAKHfvcq5RiUMLqVpkkvUVTjLZqJeLpaAWoCvzQWVakASLmhDrhwrL4MadbwBDcuPQMv4p",
  "key17": "2AVMFc78Uk24oJKQVCa9R3pQMJvn4qXQCVk8dgg2RHR1zjQJVsWkiD1GUhjkSs61QhiSwCy3e1YPSRPtGgmZta2T",
  "key18": "3wUrCEYvHTDHoSjytNSEkw5tFHCQSLhNZDM1wpmsT2TyJ3sYBgd5sWdLzjeNxbkYxChmd7n4DnzPrrdPXY4W5S7z",
  "key19": "2XdCj9pUFn1y3mAySY2T45oM2G4pnn2aykCvwycRrD9VpurDneCsToJ5WiQhVYL9hBbS4TtTLFUh98SvFhLfnmFN",
  "key20": "4BGEx5uPayn6r26o22X2WYo1TWXE2cGjGXVKrY1amHsWUA93vtUTKvdwgU8SBs3UuAyqZcFi3RFsVQc5DTGuho51",
  "key21": "2vMVq86rWxfXgRveSgWF1mkpna3NxNQ6NsudSSPFSP7tEtfW8QKEYrmkrMEqjWybxQVyWUVER8paaREpMRrYW9m5",
  "key22": "4W6MVv8UeWFrDuDnbKfqbLHiFEjidytP2WaRvfwEbWi5zaKCwroKNK39oxiw3EbucT1VACgYnXYUDuDm2Wx1Gcpj",
  "key23": "3XYtLbNnLz7D1MAFFNmGNH919FS4V7wFhwqkR6H4CKuPth4b5MGBEYzCPrdAss2dFrg4NUBq7ViszvrtU1ouD2N9",
  "key24": "4ATuqE8hLUTkeTm7oxHujuZiHZaUWAtmp74bWvEszWm5vcr96okdEbXV34kkbjymNouXyqRn6hkejDPYoAcWVk8j",
  "key25": "Ni2nme2kcUsgVggrjFao1Y1ajVW6kbu4mgnqc2TQsAQLzyrLcqExdWCQiWnm8i3Se8SC5TiRVWDbydFuZo79U9L",
  "key26": "7qQ6o9orQvptVizo4FYeeGkWv33SB4LRYCxUTZiVXpCzhgLQYpV58KymS3Sh4fTXXbBkDoQcF3PVbLGoweGQB3g",
  "key27": "owHALgYEhjc1zenqAUJDuX19rJB9S3NejMj6R4hZBJNb8yq8DLdCRrHfFkYekwx33SkF5wPruQ6dnVFRYGke325",
  "key28": "67TaKpJD8Vs62PgBvzLTeQMRqz9jRLhTEsf7u4aB7aKz2XWHQ92DX8K1AzsyTzZydBxGMdFQMFfKgYXuRb4G3Aui",
  "key29": "2hgSRDSZdBqvGEiZ6bbeGgWmMmdU3QWAkNikK219CCgzqQnkPHvT9tBGQiCXP8sqrEinwyw3QsrGvP3S8RqkVio7",
  "key30": "5Bt24ohMPYTBETTtPspdZY6DGt81iahf7F655jVZbMxUgrbe8GMwUeKuZ145Mo8PUVraLxY7nnwcmGYtjqnL3vwV",
  "key31": "4Wj4gsafoEYiiiFwcDKVXbUgxxJc3dij8mCNDbusQ8ZAHKHATHfCcZAXYYc39ibdWr7TvqiZwBEhLxhD5tdsj4zc",
  "key32": "5iMd6aG5qXBQgnG4m1EMy5apDnyG4fKnViuxfpfwzKZkCJK3gp9kgrR1zbVuxZWcddMLncqe25aNXxD79n7a1kyM",
  "key33": "2aE768w9xs33kUHHKkYsotcQ2UZED9beXzQ8ckcs7ekt7fA613qNEsHwApinjToVM3hJ2nxCwkT1Jtt1b6h1T5fL"
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
