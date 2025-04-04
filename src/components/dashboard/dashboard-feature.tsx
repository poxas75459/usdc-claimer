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
    "49X1gH3vQQjXjLDnQYKuzoQcbTnZS7mXSp4e6VjT3JUx8Z57Sa4i9i6XPPZx1hXYJ94cECjkwLDQHBcRXJTtJXF8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yLyceowCW8ft4iwyNWU8FJ3TvZNkTNQmUQkeZ11LAKbGNHFmXF9jss5hw18cS4pwvjxPzM5TXHVtahDX68S8s57",
  "key1": "PM8jvKoKpxh6VGZmZ5TXYtigpcoqLJTRicghSLXoyLvXNBRkUBVJStper93Se5YHuRJPF8xp5mvr69i9L978gmD",
  "key2": "3uQou2LSq4Gtakk1BAhE4R4979q7MePZMam8ApyYLPK5qdHgAgV9SmCEXq35CGkXaxUkaUVH3vaSc8g6KFY89Anu",
  "key3": "2ouDYyRADTN26roir8diibToUfLLapRa5oUq7aizbRSzWqZDso8U8rX9hvtJMtk9DGFfbw5g1zg3FrpcL1fMxGwF",
  "key4": "gzR2btRA7WZx6oTTMSJQVXPvRgCpnoV7oF1F1ucRvgzMcTAPevJFc35LfNv8nLdLZHmXSa6tDjpiNSMAz1FS8WG",
  "key5": "2WSVm5ZEQWiPWdm628X4mU3rEi1A9XKzecyHgy81rWLfZV2Rrg5sscE6GuEtxTftsiYSwwBYcZuBbvtKkGuHffEz",
  "key6": "58SjMPY3S1CKP18CUVcJGiN2Y1BEAFGa42XeMqrraRAJjuKXDPSiasjB1LurcEySEyLn1s5vGg3ZGkCiH7PvGuXG",
  "key7": "5TEtf6pyhL3xvUmtt6n77pkoecWonvFUDv2z1sEvvUk5k4ybWEWdTNEJyaRqSA8qzk4qfvnmzrhzGmxoqspkow78",
  "key8": "A3UUhZB8ToD6VEjsA8W9UfkPc2mVrcig5jMwVCBFFZDxUURLNJfktsFc5pht8TjGN4UfKdBZ8xQr9LyVsbQtjph",
  "key9": "3bLugMzxou7fNQKMf7uTEcUpySbgsJKvGRrz3MLTKUNtY1vsVQLuoAGMWyWMAkPuqtjG6QwF4c3oqYnfGx42u4h7",
  "key10": "2HNh4q3tEdZDkTXxGgkx9AS9SpyfDi1PdWhxzL5Rq61fMDMhCxVXJy9gHwa64x8hjBMBKwy14Qoq9rNAwLeE2BJL",
  "key11": "4Kbhr3iaCdrejKSuHv1n9JHpHNvV2R42tLcdXJHusECD9W78WgBcMEqLSR9fqSBEL2zBiRTzPRkxTC7Uy6p4bjh7",
  "key12": "2n68PUsYqVgcnynAxHdVJKoAkLn3oD5djTPDAUekvc3Zw4bohmxdsS2tnwAMSvV6AcDenMkkRq6aZTC3a8a5zPUu",
  "key13": "4scCirAbWXbfic6zZhSAkzesM9VDqJExL2vKCsugPb1vVCUdJyrU9Bcavgjnwk2bW41nbwvJB5N6e2VpEYBkS693",
  "key14": "5aFNXynTECB126hYkufmsadqcSCB6XnZKz98m5Wnouo9bcZbs9j5LbaMUdH64sAMC9kNrov1zX28QJZ1Bkyrg5rt",
  "key15": "4YeAC2ej5aFCzCMwB4wXF4WfPu5VjsmtAob8KrgqbcpCiSHQJhdbzJBwbtR4ZtTQTgsaCefMq12EhoZgJkmmHvya",
  "key16": "qAAdBAnP3MEqQyEGBDmamaFK7byxPq97aq9vXoVpMMo61aB2mah8RTntr6ZuqcviAzAMVUfNK4hmRLUkT3r33wD",
  "key17": "5nLTuc9xhxhh5KPULr2bQSZNdbFnRksL5xkzSPZQ9au4HpSwe2iqiHmKbEXBbUtaSPUQyEzSBTkzuJvZYCxjMqEo",
  "key18": "55ZuzZ5yLzrsQXa1JEA1v4wcDyhWMbvFGoxX8kS1teRRu39q2gPtqyoWPptoPYg9AxXbo7hzFW7agDgFGnALZ8pK",
  "key19": "3pXxhaM9QigTrfFh2yAA5dH8WZauPxPLkFQ47JBASdFqJx9MesbiratM1Yb1jSspyhTX9t5fd7bViJgKoFKUije6",
  "key20": "3y8Dfvz7nAvnbTns63Ha1f8x1hK261srigcZDkidhXRSKSi4q6XUsuGquxybyJnFSHxL9hXXCXkCPfipJaTehW6f",
  "key21": "9qt59drNVpxMTQmHsM6NpdG2eAHHiWwhSQdMVtY6EEbdoYCtkVZEP41rVNy3jR2eJBY3kETvGguidAUEFZh4uWa",
  "key22": "jjqi9uY3cjuokk8nYwySFMF6YisqyoBwsjTS1LDCesGKzYUxjseoV3j6QAxRGf4AfHJkC9bAdoLPLvShyUwHVbD",
  "key23": "5eGTdaDyjQD6KAsiSxFha3Y5Dax3mWpZwVyyeWTBbKDAEYdnJN64RdgDUpQ4KKKoQi49eoBHfqwXGE3JcEuQEu5b",
  "key24": "2SVbSSyBZCTpU2V1hZnT9H9yWFLi5jVA9nbv5rp3LGTBBGb13tng58VoxkKxdatTdfsFPn9n4hycRC1g8VkDgWnt",
  "key25": "62t5QRKuaMihLQmqMN67y9kmiZgJFYTffJx93zkBjgQckMpxK3R6NVgYJwH8HaUf7q8XDaUWL6HcxiNpDbiW73DV",
  "key26": "2xqwWqbWkf4WxmnKAKNVGrjYee2zvsxCd3T4eCDb2Cv42V8DMeDEA9WTNQknGRoypsUUiBA862YvWA7oBk3u3tVJ",
  "key27": "397zFTzqdCs6kfsVnwcKsKqvccFT9Zk7kGWY1FNc1sYYL8arawAeM6g6nRxZ16c1vkHVvMVqjcqY1d7M5p2WrQHR",
  "key28": "5W2vDm95qLwEAh5tnbwypX9aRpJ9CJP6zq1fxXUMJXRuEEdrRttrVzXnGjAuTW5nLhaCVfdeLWUQPAhJfirZyf1q",
  "key29": "5km6P2eqGBvhAhrqS9pfo5LWLuYTs74NgbNn4XmoDGcCNE6RSqwNoBz3w9tvnngBpSnqv1mQyRWbA3vp9N5DRfRK",
  "key30": "28qoBJZLHD9iaEgV9wtmQQeGBa9UqvawWwJ6oJeWqcfXEzgCeEwywwxER3uAGRv6rFm8d1bbYpnit1kE6pEseAHj",
  "key31": "sm2hvaeuHPHedwMzFxYzs5CzBCrguyQiLyML5nCS199SpYywwusRuqVCMZzL2sycEqBjy5Ywo8JE3qkQ5sU914R",
  "key32": "3A3UqEG4C13zLThTX44NvE87do2dUTEZbSYAnPvjhxsUAtJ9GZZ7sK6zNX5i3MEFDzimmt6jSX9W3ZDESSTEkMX2",
  "key33": "2gagFGKCo7945BxQcx5dJWqEnmqFwnDoU23YCoLHtZ2HxLQg6ssrTCMpRXTn7k1EgnvdMEEZYDxHTxJ1B16XjQpe",
  "key34": "4UDhP1EBtG4v9NsbESnKySWzQ4UfLLAmhyEEn5LqCGdj86afsByrJaT41JXxPGBuLZdo4ModcFzTuKMc7vhr4Nwd",
  "key35": "5C9jKBm4VN9Zhs2XUpLTqa2jLtYN6sW5sgoRysZdbg5ogq3H9ATsGkx9NT4wrgiYAu8CZ5UJAVsqU7WqaHzebXMM",
  "key36": "4RkyxwxbqqMHFUSMWH1N19sgQhRSTN8dqdrG4wWmrkyCSjDpT2ye7t7pk4qabBxCNYuBtTJggGNPGBsC7EUpzrPv",
  "key37": "31p1YCv7RASTjjHLBCo4tZBZegX34UXXXDvpcqxemSHVXAbcBs62rNEdcuAB14pbCv7ncGQdmb5CTu9E2uwPfHv1",
  "key38": "2caKFWvccx6b3sbybNQyGFpebC6nsoQvZWyCxg3KSbiKZKfH63EBJE2eZVtS9nrzCXqPYcan7oMEn8BM9iRU9hGc"
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
