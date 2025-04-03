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
    "4A9jTimykzdDUoQB3PEinwYeqCV7naDVnaHgTyKquvKtoDiENqEZarLJrWkzaXxfaY74zjDBMED4spJmAJtBrjwN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xMwSMFN5N588ziwM7qeu7rCubePGRGw5FGrHmyGTqWkPCf51ZEywEPSoacVLTyCjtqHY9FvgayKTELPKGBqVfV9",
  "key1": "559RojyEoMrtdjRXxqK9TCnZGgcdHjD8TZQC49b1N6Pnm3TWwVnQDmhYyjsHbUPCZZab4NDre1SEKCzQxV2i3F2h",
  "key2": "zeeRdnrAQM2HUaxQCDDHjGixcdB7UwpVcQPwhVPLKbq4n2WbA7XWagfYH1cCR7C8iuSunrjYP6q4jKrqZCSEwyo",
  "key3": "5fbSGQ1Wd44oPvGJ314w43Zd7KqnBnBVZyVd96nwVzBg3yqpP87H85nG3sQsoonxPgiSh7EGUXxrTAfQzJQVM3aE",
  "key4": "4WiJeqX3H21zF7zLSSs7237V6qPg8PUSVmetE3Gr3Cu6KdGUQaLeMAnqLevFCj4bnUrTn6hxQaJY5ygEeGAe4Cyr",
  "key5": "4gGm9yY38s3G8u848Y43BXv56fGnMZAoaJ4jJdToLRhM7bwKNGj5QHJbMbwiDKbfhcWZCW6QnqxTuQCykV6yN3Ty",
  "key6": "2s9Pq62CWujasv8s2uHSvotiZYQ9C5AC9d5x8giwFXJ4oWiQgd5yUMB7DbnhwaJXTNbFxUFK9B3zKEo8F1Fy61Xs",
  "key7": "4zMxDVrA37up18BkibvwPu9yvzsxW8vykmhfrqaiTagMusMPYseeaHH5VQDuTiNSwT72DqxZtu18wUaaqeJrygu8",
  "key8": "3C8QaotucsLuecAqR7VpqbbhkH6gG4HsiGVHsk3NLAbDoyZYvDPEHmQPzCYmDmm96Cn9S1rwjcs9V1NC6WDvQhvW",
  "key9": "54UARC3ujW3oxv7dkC2a8S5ZrzykX9NrUTV5pY4Amy4NQHugH5KPkTKVKvT3f4Vjht25LFYk5D6r1XPrur1fYDCU",
  "key10": "3BCAAa9DjjA7DcK5urqsbDHXd1JXrW3hrgx5ySwAWvvsQhoZu4kuvndtouTkVyTQ3uDoZQj7gQtF8vPmJEKX9efj",
  "key11": "2cmQSUr4vuxNCBVURTQ97MbvzFCpGUU3EpnmzFiXT6MwYrHHbTDnSxvMZ3wuzk7PcyUr9r9n7j1gpLJ11kYKLSLj",
  "key12": "3rZUBhHN6PxrHEVzBUU1WtvgsEBn4Jt8G1H76BANtiyrPJyE6AME6Rn2veg9vZKCjv5UPpva3tXXcpsbu6t2hH8q",
  "key13": "7FQBNvS6tosrb7hqmyBJg5HcCqU17VBHMt6W1Ug8LAYutnpkbw7N8qKeuhZmh9uARCKJZXSQ81AZgBQURDaMqnV",
  "key14": "4agzJUUopfu5dnGM7D7PGXgDAuBU9wP2VPk8ukRUfMa14zDYsLtdB2AubYjrfRhPKQrFdsMvRzhoBTMDfgFRtebb",
  "key15": "5QFFv3MkBbmpvyFsEEMbYw3cKBG3XJn9EmRegMsERVuSzYojKtEvKHioFUvWisR8LCuFrpxyeP92vcRUYQvjMA9d",
  "key16": "sC7pCBKvCB2LdoXRUgDCDs8adrFrJQroepHxZ4rPDcRgnJLtqrgBZJ29fbyxnYPweJNDF9mCCVqgNoSoZ3DmSFr",
  "key17": "4XDG8VeXjysyy5Eq9bS77XKitCvCqGgWDAShkGWsygH6zGCkNCM3sDJ3H3mjoEDJg5gn9RZw8gS8Uo16PZyEjYjA",
  "key18": "5H9JHhigyAyf8Cps3U2SQJ1gNuoUN26Vrc5LzegXLJpNzA5LsCgZsJhAt8WS3Dok1gGs4Nv22bUATMa5cdUWSHSr",
  "key19": "4sn4JGepobWBMnR9WZT8diDadfJFKE47Nu84yHKmmPzSXrFysFZsCjkZF4EVeQSbNrMFapjF5iTvtv6s3ef5ae25",
  "key20": "5NMNLPznbhBNC6XpJzk8x1pvxaV7Q4c1SQKDWc8KKNnQ1WkHuXKQHLau7wVZxQHgLA6XD7pLvujBDyG82kqujU6d",
  "key21": "4JE9YoRWrn5hBexbNm1LspoPSsnEmebDR1ev9ThDRuLVvjUWJe9jkGs1FPiquJHuUcPzQECoYyYagLRktiQ492bF",
  "key22": "kVjF8bn8zkixMY7mZbAwiMBGmFoaxcCcJ813taGeiamRStPfB3127YjDV4uFFGXx9hePGLCQzdH2JTieFnEFjzs",
  "key23": "3KY9JoFWqinL4VRVe1MqGstfo24JSJcppy281XQnAvvd6yCm3Cq8QAiLYDMwbPv53FmpVWBogcwR59VJR2ZVDhGR",
  "key24": "4m2wR2QNQFQeZkUh4gh4weogRb4XUtTM83AM5m3cr9SNfjPesENvTXSafew8rQGrrUX1LGLHiGYh2fCXWeD6S43W",
  "key25": "5sgeqvriCxa28K3FPTRKMVUhJEuaJXMxZDTp5LHhjy2Ucmtiqw3DZ1n25Y2yHnoQfZCVYt39PmcArnWAXG9fstgY",
  "key26": "2ReMpdcsrJo2EJCd2pPYxvpG1AfXnkts1DaduHr3tuNqVYb5kBB8feU9Fdn72xFP9uQrZ6kaADx5A1rjFLsqixYi",
  "key27": "4eyJgBZy3MLkwPqtMPnrGqwvFakXcaMGAxUWHPEsqMcYiWkrqE9DnjhEnBj1iWNJJ7KxvdQLshwdXVu7UR7NhBM2",
  "key28": "3YfZJN6wKk3wQHhj98cANqZqzfm4DiZw6hTkQXbqz25SzEFpNYVRLJLmYBFWUh3w1TCxYD2XesqWuDvJ7wopWhEL",
  "key29": "4CxNGnYXSLsSSaGvP2bNCdFcDAsFazBvwwiEgn7qcf2XYmaYBdSZNG8Zs4n3Q1g87Cwfu3Pp7eAxThixnD5u1Q4B",
  "key30": "p4YvLsZmerbzs63Vt6XFs96NW7H3AF1R3gqmE8xU5CWRHzkQXq1tbQSg8Hp152SzBGYcsP6hwFR1EUydaWW4o4H",
  "key31": "FL2gfvxVABvA3Q59tqV2Cx1at1kt42i4iY53QZfNt8oXYvxThwngorSLg2EU5nkmNtamWb6QPV35Jx1kqDfvnSf",
  "key32": "2NoKPAgrqZ6Jh93EjshJdms3qdtD3bARkXvWfeK6z8nZ3gsKDX8QUwy1GGzwmrUwgDuZUKdVT6PS8Cxj3kzbdXtT",
  "key33": "3fSAmnCAFfLJb7xWecNxuQQ1FErYT4M423CPKZrigfnU81Nc8Aqjt2nYi1NbGqEccKThxkHr8Kga4io1SVTLUUMW",
  "key34": "5xHMB181mAQckzFfCzGtdo3RWeXXFtZPqHWn6tBZkrytA4HKKErDJbNrmHEorSLVZmrpWtJ621kkewZidKSrjiWd",
  "key35": "4wneg3DEfaaiGHULqBi6sSBzq2ZeXpgjDTmaKZMh3pmESp4KWCGvvcnwo8Mj9RmCe5XaMw1q4Cv9tN2rTUCAd8Ev"
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
