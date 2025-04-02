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
    "5AAQ17zwjjCSd2W5ZRMu3aKMhfj98766z797r4hbpJQtJ5Hy6kVR1hjbVK4Yq7oVjd7Jvx7XiagrkRqNY7ff1omn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63BaHqX1dCVhExcQaqGsR8msGDd9yipGQL8W5PFVrYrDTQEjDBXX8mMYG235g4j2GzaZfEg31FxxbfkddvvbUgCZ",
  "key1": "4m9k5hyPH6coNFkGXkMNn1rryY9Mtt6jDP59Arza1z9dxqfpXp1pYnXKB7R1uSppGDoU2UE426ycgMcKeZg2dqD6",
  "key2": "GhQQpt9zTQgUw1HQGw6miz4VBotLAT9vzJueN5oXuivS1p5EguPQwsRjBt1DwbzYTkv7a2QRos2yP5oc88fPZWD",
  "key3": "4kU9sQ9muqv1jGS4jKet4qTYZM1zDQBvtNMekPAnF9qQ9U6jZ8cvxnjXXLbvxfApXn6J9qtJqBNnorSYaqhTyNaw",
  "key4": "o9EGQg4hRZ3Sdj484TsPGsuNX5njqp1WZpSQyUixvg23RspaDVzReM2qnJAEBXVaTM3SvCvzkFiMxEzmTg7ha8s",
  "key5": "3YwGA7z7dqJAvmnJLB8WyBRdt1NkxieMVNMAR5ozNWizBaQUHSAXLmgYx78sAj2j1XcUckVQL8Rd7ZJDLSpmXHrT",
  "key6": "2SbUNHsog1bgVQBpzA36uqqaZYZomvxkNDSYfqvsXbLCraKGpbNrWtdQPDwbJ3xvGzpVHMYA2Q5jZT63thpBvyQb",
  "key7": "2KFwgcNkEHRkSbRTKWPLttTXSCBSzjxpTwCoct9vydu3nkbDvcb1xMb999u3XBqqpT64WNz4xsRwL11XqKaQFPDA",
  "key8": "FGMEuA9ekp4fjHYJD6VZHRk79qTHdKK4uNvtLXDBfjA74L9u4tvBkjAfZX6rpLjP3nVLQgZQqrhQy4oKp951ZKW",
  "key9": "Q5BrMcZ9DpmiGKLFYNZ67AnR3ryd1sD6t7ixbxWXQdb6Zk5LJ6grr9By4JTRxnfecgBicPvK4pyFzAsZiYtLadL",
  "key10": "fqvb9J242a1cH2RmtxWjYihpbYBMmezjkPAFDmHPw36Kaq4uTzgWynSPAnGMeB36bR4SVMH6suXfzLybvX7yFhw",
  "key11": "4op4zNynVwKfgBymmNdBK1bDbHcRTD79V2wSSpQigfqsjv3LNRAp26MRci3KheGQ93K8Cr5uFLyHJRXkU9oNmGc7",
  "key12": "2s64RWyzKTkSgfVvnFEEBcqVteyu3cjnssCWQPhwHe6AvTvS4EbC3EU9BgsRbZ91Dne4hSGZpEdHJxJtdieHZUk9",
  "key13": "3Pd2pZC5LeemyZzteTfxqfTKoVSkxRwvgbibkGdXB1P12hPDTywuun7wYPnCHEdsNENPqwRAivpaZBWFnHSaSW7H",
  "key14": "4L6Kbs6eg2D2sACr6XuYdjRXCsALRavvJ8RXMDsAi27zPaLSnqHf1734jds1zcQ6DH9kWeR4UjMcLRhbMdxm5iTx",
  "key15": "28SskxFPBEKEV6tHHYjyoeLLRc5kmEZUt1jhYDb6UbZ2wLYGAKWZHnw5zCkfEjqLvhNtAmxDwRmBRWXS1L8wiHue",
  "key16": "2eQf9QveCWRaufMCitkUQQcpb7VehK7DQc2GdbNE8DpxeCiXkDPVxnxVvdCLaugtn7HfKujj6Ce9Z9HBtBHMaG6b",
  "key17": "3kxqecAUSFQBfx8sTLRotkQifxgzkd27CfCA6C2nossWNwaqPcYc311Q2dGm4CuoHpwZ9ArKTuCYWTtT17BHaEsB",
  "key18": "4JqXorw9MwTQArvFARac5sVGFTHtSt72UU2HKpfThUEZ2bd7eknRznSTJTK28Q9J1D8Cxf6xBwGv4fT11e7dWXQt",
  "key19": "5u2jWiXVmCoVaQ8aTLUUfcVsYvhBCmXvK6LgRL5NYesg8eL5F6VmPkV4MjyXKR8c3uAPnXJ3CW5Y1Jqznp5FmDt1",
  "key20": "5emsyMfngtafA8RTPp2bMNruwvt4qGCQ1qA3w9rZsRQ8khtWSurAoVJf8d6JmrDS3ZjgzVFwZJCju3VZvnCpBUj6",
  "key21": "4Qi4G9cjoQ28XKgohprFHfnj1dx7i9HF6F25mEGESFwH7dTDcjyULGVzYD4S2hFYDUdFXAPWxxHeHecWdDATjHXc",
  "key22": "3qy5avbmC2xwncZLVAmH66sPKVNoq1MdFzfiuU9EgykaoK6BjjdFBHYtXXEdPhnvnGZYrj6K9xbZ5q16qkKDwjwy",
  "key23": "44qJeyoRcSJ4m2dSfTDHa4TtmMYfgunB2MHBQ8YNz8y8ooAXsFK2ohfLNaTsWUjH7jZyGajPfNBFmNPrfTauStAd",
  "key24": "5WM2H9UqyLV4zofjGvKjQCXa83CQ4n6kMEMF9WcymnwZCwjv5wSLjeR1bDZnRCLsbcT5jeLfF5SdLTBVu62yQNiG",
  "key25": "TsDhFNghUjECS833ayZg7hJaNPu1ZT4pY92ZCyB7vUGwAb2jiKWY6iXsjFzmmz1obswNCtZfeAxu3c3CiaaGtvN",
  "key26": "49GULv7raGkUgA3bSGefHYcZZgoPThbDZHJw4d9RGizfD8x7jupAeiw4nzgwxoXHRprmQFoinX9SVs2rMSDnCFUK",
  "key27": "5d9GiKwLaJ6TjKZeBp9hTXTBWGQZajPQcCUawmK2yUoNcCirTnEbVzf7gpdcBeKHwaxV6hAoS1i8bHTsD6dcZvFS",
  "key28": "5sdr6mf3N3j3g8PmLQckgy2Z9M2bM5sLPxUr9MRF6J5Uq87gEPm2EPCyQJjVVLifHAc3zLrR9XnU4x7ADu4NsxDH",
  "key29": "5cVKuJ4rmHEBp9BB9HcBr55gtLVEhG47wxr4kH96FpRWqsRahAT5uP87fYRjV5NeJHQgmKoyomQ9KQVCv9iyLkXu",
  "key30": "3VXuGZSUTXNnGkK9AQEjsUqgknm3Qo1m7PpfJzszkebe5RwxmubHdqcwFvLKU6E3y7roV38GAkwxg8rGk3cv5yKx",
  "key31": "5Bn8NvSFo7mUyZzzcbW5F64h6NajmuB7vmWucH9QnBACy41ZSQvT4mmUbvUVLyx52GXHuVFJPhxZYnaURgow93is",
  "key32": "5G8uuYLT3utvtE4HceDXGWyFCFWvTozKLd59TvKqTR3M4DYghmgDQ4bqk3SUQ1vKS5HoLfthoqZbwcDS28TgvoYB",
  "key33": "5piHwzXbv2eF6QbocDnHcJZkG5uPsm1ir4eWeMZ7FrppJPUtdoZUWMjX6jaJM4ifvwgVG5Bv2rLAt9uNsVEvXsKP",
  "key34": "3GmhUeMXQnEPgXF6H7UjwiqUFDtZgGL2yn7qiM2tHMRKJvQhS66GM3iDm1aPeXVvJywdmD8EYQfqjSb2z4XQHHbo",
  "key35": "29g1wE5wCNnA4dwvaCjgn2MfkLQiW3TLKt7nr64n6mnpNmq2HmBz4WveEtGUGfUnaKD5rUqfwgRzpmhGbMPk6CR7",
  "key36": "2kE5Qz386r9U3T67epB7Ag8hAADS7eaVAfuYwbv9d9sHFqHPG9grKCYSZuabk4fkdtqELE9grTFojdsEL3agdxZU",
  "key37": "4Dtn23atrV3bJ5oT3eVbMLcQiCDaT1rFeNBraSdBzUjibTUticEqEz63hzRgGoyXprj9CC6xbyxqBpzAKCiePSSD",
  "key38": "26Dxt9VBT8er7sPodaiamM2KAKgPeuU9hRzcrC5JdnYijWbHyT6TUgkttK6CfUhpCmediZHN5shrrDkj5riEiE6k"
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
