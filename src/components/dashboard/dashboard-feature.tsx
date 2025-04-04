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
    "5JyjV7hkpqP26KWAgpaHRzGsZmKcmFz9g5gEVVhC8yQL4Y2x4yL31BzXQHRqFFnDhPP3YqKCgxEZ7uV9cqpddsd4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Qc29ooAniq1kApXs5wJp91mZAqts4tBqDXWWLEcF5rYNjzNrh3igau4MEAPp4uKFP94xzJUcdJnyh768VHjksve",
  "key1": "34VyyrDVZnKCWte6B2PNMqQhxGpzPro8pEU9tLiP8Ue2aKddg7ogartYtVcAUzFfHvmsKCp8QNm8UnraPnEjPfur",
  "key2": "2QqiiH9h47fGzgxQ49RRhMTsjt1iSoj2Leh524BKJo6hHS2oW1di3mi5K9gCJddwncghU1WRGVwuL6o1KrQ2uCwQ",
  "key3": "4NR3EqH8F6eQ3rhEfscPZoCjeRvEXK5XGhAyiArYBZzECHJuTHqsXBXunszNjyHAjPAFi75iZkC7Fw9c6SXnmqrU",
  "key4": "5aNz8h9XXz3rkZmzQhquMCit8FnpHV2V27cwaw9bWcZzS2EKbsbJpuaiVB9JWaAiNC8DGT3Q9gJ68ckWi4swj7yk",
  "key5": "2f8sMGcwtoTHUUoyxhG8GhzR4DB6Wx1k6if4yfULna5xWbWtLirmTfi77QDPcAMGyNddWXRdnnxqbiRxuxaSsuVs",
  "key6": "3V1k2HpnVQHspwdQGVCzvG7kuDKe5278e6kQkMmbYFHeLH62deQ7Thp4hRhg6BKUu7fpoQGUDtX5W32HvyxC3BGb",
  "key7": "4TDRHRZV3DDz9Ndczg74fbrSWDdMLwGyRyJzaKMGvvPQV2NRJzFiesohiEqRVkTtv6qZxoQVX5PhavxTgovwN4S",
  "key8": "596HafSqKwfJ9eCm9YtDa5aPGHckeje3sQmiUM2D8PURzJRtH35rEsPATgMdEUDiP9q4DeeLX5ZqD9B5KFuyQqRD",
  "key9": "5zdbnHVcRT14wFx5RJYVNyFg8Ut73BL6nTeSkgP2zMt5AVgZt2pmuA2XP3KdA3HHhs3sA69zKLyt6eEB2SKc6A73",
  "key10": "57N38UZde83KUmf9zDXJ7kr3oNdoBH9rih4EQwx2ffQwmt1xd7AUH3oN6pNuKsg3PjDQa1b8s59JudRKy6u59EC5",
  "key11": "BE8Ab2pGYLEPW4YDeqvXvJNqV2sYbE4tKCRSrFk1Mm9xeLrrdehsfufBUwDejYr9BFoFnijSpa9BP7ZzkGo477R",
  "key12": "3nvcdox7xSceZXBDDcVRPro3CNfu4AiQrZG7cZE83imF7iGZyyyuNyz7z7CFXLhT8TNzkKqDajTRxoMZ8JTAToWv",
  "key13": "32KBvvcodfAweH7j6a6ycmWuNd833vPckvDwmqWv4Zynfy8iiFTiVZ8eTMNexVenJHZzeyq8zZG7RpQwrYPbwgHw",
  "key14": "2BNS779eeiRPkk5WwdEKo6Gamhuc43kSaW38GD2hLvH2gyFDrWt81SY7gx4RD2W9dD7Uh8ZLnJK3r4fB1raATWx9",
  "key15": "5HD1zLv1xY5MZcEPAsz7n15pS2phfxzajd2wNrsxsrFoaQ45q1Gzwqrnfwu3gPZqjmBhBqyBEdaCewibfJtMH5U2",
  "key16": "4kjZ2iSGL3K3vXRhMv1eAyyb9vrTQeeF9MK25L4y44t4bpbnJoGxFFVqixjf8rs9sZbtsSwww2C6EXBrxtj8B9bw",
  "key17": "8Y8KyHKtMufhRHA8UHCisWMbMrWSYPWNZ861mFDx89NtkPV6mmB6efoKkaP5nz64ATMjn3BMtFX89idCUSXxPXG",
  "key18": "2H2ZbpXiwnBATz3wQ1cqyZcR3AwnPT8GiE83RpFZNPVoq3jmuCbojx1VmSyvfWo6vCXsq5P7MpK4cam1ZBrZj2zw",
  "key19": "3DCkpcWh1gpxWAG7nHvTUP5LQBFHMUF4egjJuMtMxVkqxKBEH5uhaxCxSqFyQCW43xqn8KUDTeiW5uJHeM1f6ZCx",
  "key20": "NhWuPeVsfuR3U7FvwWgcopdM777XEsa6kw4u4pis3j9JLUJaCbCb1svN2fekGD89jUzRFcvDtBWPxAbko2QqEEw",
  "key21": "3hem4D5dPkSNtdLqqAtP5VtgNYZdbBEiQzRUTgWfV8z9KWuzjcUzvjrcU8XNCYeVjoCQRvC43H7WmA8M1MqqPGD2",
  "key22": "2T9oc7n2wQVUSGW1hBa9Z3EvQDQCcw67fktSHet5bRZSqE34kwvp9QUb1Vskop8CvUJnjgaZcHg1jgTwdTccvAe2",
  "key23": "sJZLG71wCmtjQ4pDgCnu5zBoKhW8NF3YwQQJ57GCtNFiKDdLpF7ULBEp2JDZ5csY2SqNvvrio7yzjCZhNh3EPkd",
  "key24": "3rBpUiiPuvYEhP54WjfVfPFeKGVfSoxL7cQwXCKHKD5NTFyhtpsTfmRQmYsjQYGsFEwfRaPNNdHGS3WNBrhb4ppH",
  "key25": "38gAWG5q1UoW2vfT4r147vZMDvuzKxXvS5AezPgqoNTog6rimCEknuno9T42JjTAP8kWpnU1rh2XDACQg8YnRqPR",
  "key26": "QjeQ3NRsSBNVxLwu23PTgjgzUZs23kPnkL21DTyGZqsmf86NnqnVXCd4ffeBL4G8jzSTbDCohi6dyNkApHXRLv9",
  "key27": "Lw8k6PJEAuhpGWiGLNJXYKe4uywb647FuasAJjJ73RDKScsNLZj6CLyv3MdaDSkbxoC7oT6U4qYxzGYSX3tN1CJ",
  "key28": "2YJFvEj6CdbZGSW88oS14owKWhVK4om3yig1H7GA9wcreQDuw9778cLajoRmGRyfgwJ1veEkG1DR5ey6Mt563WiZ",
  "key29": "4gs8JrUEWgRjEztSombFRxuuZdhExoUG1oPnXxWufoPvwynp2z3mh5M6am6jDeuJD8RjJJZMJyoBEDup8gTzgXY7",
  "key30": "3kD3sUgipDnH1XNwevaocgBXoh6xgHg4YWTFHttb7tExL8YmahKubnuyRDWiMYJzoCRAf8oBaTTJvNoNe5s1TGFm",
  "key31": "3LGxVj2RdNHD12bYeKskWAuRrJm66X8RkcTtFisWWe5CiVjRLgnxnLHwybbmG18J1Mtoa2iZURf5oQbzo9YK8uAr",
  "key32": "4K8EPW6GGzbZS1H1Ugzj4xZByzPmatSMjivFTfg74FFqEZtb4f7BvtZrDRpBXPcLq1LEvKBJ9hLp7QSGnsYtCSDX",
  "key33": "zASHMLsPqBZvd316spTNp53ctXXgq8BAJgLMBd8abrcarTgiwW7mDGz3Me6QLyLy67nvL27k7tu4EmJtw5twgou"
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
