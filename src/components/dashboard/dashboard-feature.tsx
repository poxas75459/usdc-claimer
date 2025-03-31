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
    "3CkTZioh78EmGuzdVasQSgoPozGDfWzDj4Nh2Er8Sfo8P4uVeCvgvPS4rdmxfhccGQE4kzfW8edTZnikfbatLYMp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3F6gQLCLaqaMnsJxwwWcCxekGBmrqFjMZpBhKsRLkVZfpQrxaT5kTmhJxLtKWZdRJvpvB8KDhie465kKNYRLDtLe",
  "key1": "sPiRZJnrbRGpA9YN7h9K2RAvyhXsX5LSwNh25Rz1ENLVVs3EbMKABHdH3CcyCURvDuzKPqoB7Z3jX75msFL3qDV",
  "key2": "4vKeTohstLT7Ket4zcWzXMFawhHjUJosm6N9hqY5vWib1YEq7SDLs2fbD8wJQJfvMZa6mGuUbvPT8tkoghRSwbYt",
  "key3": "5HkxbfagQN57FL2CbDv2FmntWA14Ss337mjc7eD49aAzdPcapKyJR7miA2NWPVSBLYQxxZ8t4SE94wUBsvCCLVkR",
  "key4": "5im7DYTdi8QPQZa8Jk9M3DSP2PT4prPL629azzF9zziwNXM7y8huJXYzmJjcDptQVsyu8QfcNeibY3J4Vc8Pied8",
  "key5": "WoperBwKHBABwr2B6FDsiKteSQw9B7uv6moCcewNGEn2wVkRkvDtAvmGDqA7sQgdnRC8xWqNqxFkfmV1MfzELK5",
  "key6": "3ZhakEsVfgXW5WPfJaaJEJeM3ZgbNKfstjrDfJCWEYTWic1itrKEDy9UgeVUeMBwwaXq7kEwPUs5aDNUphKmSzio",
  "key7": "bRvGmU4MhJbsYWckcWRNK4cuughUWgQNBdRU3LT6mh6dWZsZBR6HDz5SmWbNQZxQXqBb2UaFSzH6EcW4SyJeoPz",
  "key8": "5sEx8HknneFi5K5Ef112arqtxXChq2kgps4BivoCnq46gkRh8aRWqK4bUwjsFqDxHaTxDLNTsZqijMB41Yojv757",
  "key9": "3h9P6jNBs8dJE7oeReDkHmyGS88JwpNiHbLLWaEEZ2GQnBR4vEtR4Fjeora178tx2jAwBMQ46QSCxr5VXqKZFDx7",
  "key10": "4E4Jcu7LHDWtTy8TfFEUL1qhRGwm97scENVDU2GGsMhnNF5J2ThmfkY9hd8SnawbzSStbepVneVfWat9G1rKE6nj",
  "key11": "wxKisgUFkrwAi3fysfDHK5iyJpScKs81U6sCC32a18BRvMPmh9iMBMoUh5S2sLmVMfuUdtCFbmDTz4CSiNJXVrT",
  "key12": "4ivGvXRJqEQujKqUqNwyeRAcbVw3peWmRbhTjWHQDb9mCHbGL6ALzdRFsuUc88mZatFjToFUcyfauZZgF8ddbjmJ",
  "key13": "5fUCcRMnFpiJoBfB9DKSimKWwsdpHTMQTYXr7w4N8trmh3T21d34Vk6od8mNKi6B7EW8rpNeawygcycTNWd8YS8C",
  "key14": "5rPLYDBoDcUS3aQu2PvUN1X1DeS7582n8dLS44KVtakREapz8nzJJM1cLYpYMs1pYm6gBUYbXGN7aiB11BvZdSwi",
  "key15": "4QsNGh3KeChXVomvX3M3FBWS4JBJJZnBUcLPu6KxMLMi5hof13xVUTx21GFFvPhSZUm3ANM3SV1mKdDy8PvJFfiW",
  "key16": "3aSxyERF6JFmNC6n9H6JXH3qeeQHnUNij5M3C7fo3HiFYYahhWh1FZ4copzkHXFhJcEmHrKcdxtbqz6r7TPNSJvi",
  "key17": "4KgjSGyE7jRmS9uSbLo4J76ENb1YbsGfm7H8fp7Lvp873rigDWWAexch5zExvcQQEKa2NPgzcB8AxJP2uraHdVPT",
  "key18": "4g6sBAnon2xZajzhdhC8oQvsjLcmqeSBfuFmfdaffpRvRZBYGB9y1D2neU6bDGUbzbHUchJhHrg3UinbVK7iWLhK",
  "key19": "3gRPiDTL9UM2Q9qUT6CQXDjPTTqyXU9PNGF1dWzmPj8yiPCRW3j3CEeZo5R3mbNiKFnT7Ut8oQvGaJnCSRP21kLe",
  "key20": "A5rKT8i6du6PMyQJdRL9k7Lq3v2ccDRUN2ZFbydLZCEPi8H6sjop9ApL4VHBub48Z1REg8v9CWux9JF5PjAHGwD",
  "key21": "hPqcTU1NpsJVDQR2FsaWrWUGWC5MYDopzyACY8wt1pqMACPMDBXGm7YqSrV9cC3ckr5JAqEj9TwsakXKCvNvj2k",
  "key22": "2AkNGAPDHnA8MtFeUYaruKBwg6w8aTqMK5dj9T1vXHD1RqbFZgv9aHaKKsZcaiLQjC7AZqiEpjrrVjUtEmSdAVKS",
  "key23": "LL7zQxHByqBxaSBc1GgPPXzdQpMEWt1Y3ftXFLFR9FGuah3trM1zF2xkRvtAdFnUd95SbWJ5Qbyu7ZvQKE9kaU6",
  "key24": "5guZtaLxzhGSa13ePSotBKrwd91cEnEu7AhQp25M2WtheeQkaY5Fb7CER9JZgT74SzcN48pzXgb9wS7nuNdXTtvg",
  "key25": "5DQKRwt2yHz2W3hMr14ovxaYQR48RveFiEzVhcV39jsPGrFnrWF49GssvXVcPBNvpNFsss9Cgtqi442SF7NLr2ro",
  "key26": "455sionGCkuG1CJndrdL45pDdWqfLdiCg7j4311kuS1c96XrtBJ8kK4ApN6xjDBHLCX6wG6K9jMUkSBq9azW8DTT",
  "key27": "5hDa3HuBKVDzd7KACB3XgAxhxjfTA1CoR3ASXu2QKUJYFzovY4KMxX7hSPNPzPoPSU75MTxokRdbN9kCj69c1Q6f",
  "key28": "3iNjPethhBCNcxeUsVbK8fYpoNSyGQrP1V8DcPqoWmrf81ssqGEQkY52Thd7727zRknQs8SEcGm57qtg4W6uqzGd",
  "key29": "3JtReNaK4rgtPwkJeqwA7mJvFCKJXoJCwtSBkW98fgM6SAaHt4BS8gVcrfKtmvitT741gccLjbQn63GiVmKykNNP",
  "key30": "3ctSCU6JEDotNWhn71igRimt9FCCyS6AnA14zwLFxHjEjY5dWxwz8zzAaeADZhjw4AVxnpamp5VT7e8sWT88b6t8",
  "key31": "L9cNmXYrpeNQCSo7BngEubWiB7Tfga2b1qxC8kyYc99QpF2veMmD1sUkjHzUFZqVrfG5KJZjcHyJjP7dyzisaQX",
  "key32": "2fBrjJRqmAPtfPm2aL5Nb6HMobxQDYqxYCX9nrWG8Ajy3shJwuiazfBmisFa2WjKLqPmv21EpmXRBYDgNQF3o2UC",
  "key33": "2YogY41WnAT35p5QNBdLX6AF8hWXB7CJXpJpLEqV9SSdRzkcLpM2aP1jApQ6ZwzKodypRRXXruCnuV2RjHAGN4so",
  "key34": "NBbugrFkV2pWZoFFkN8EcAxe6qPh1MmDWiFfhULrxkmCxGBUCha2fsZsYaRVbPY7Z2psA9SmQF2u5EPXwd1LsgH",
  "key35": "28r2EmjyKKEF2k8xJq6uYPETrmGXhAbx1axUyK6n7VE9d945jQRzfVxcZVDTWzHhT9e8jqBTthSEEJNjpmSqbPhS",
  "key36": "3mcJvVf5L42Knx8popkuvsoVQazSBGKfHKAhpxtV7XoR2MQ9nXgpkp8JFVuCt7i53qqZ8guypvCbqGR5cwCUFPcp",
  "key37": "3RwyPqJ9dmGEKZXWZc8osmEQNLHk4ARhpFPY5E1iT8aVVrikji9m92o1zGcXWetiGEoQGq89D37oZaNWFHYXKn1c"
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
