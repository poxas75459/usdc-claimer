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
    "4xS9ZfR8APRDkwmFyJkfjktsg7HoixBcAJoSsozKMXCerGdjMe1o92otMyqsvK9qUqp9NPmfRAM5QPGBqRXe1Kv5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YTdar8PVCWPNY7bSppKQLJNNxdtKA8jMZe3j1X3usWeenELKXgDNSWf8NMftKuAFuhvzRA3qMkLzi5FEKN88UsL",
  "key1": "4DXMY3T8VbWHMKKES2QD1op4jkabrhaxrDLXWrmsrHaMpj24KVKRR6Z4db2SAWU4JmkaEv7jHKQKkVq1oGxkio3w",
  "key2": "2Czmh81x6u26XYWgrFAu9y3P8YkKRqpZnU51vY9Y8QpLxQ235CVQjJQUaziVSoYd7D9vKVHcrwQzGssehZhGkPw",
  "key3": "5ooPhRULwZadXrLgep5rm1NTNSkfrpjcVR4cfTP8UYTLwGBAvzUC6yEsTvyLbnTQVYVv5m6G89AzifbjbShHiiNy",
  "key4": "63kU2Qyf7z3CjBtSc4nXd7UNkx1SMTU6n9SSwwf5k72z37VZV4QtMA2fpR4qRBRFwLgdoGakq1uNco8CsopDdc8J",
  "key5": "3aLbvTZyGBv2oXdVm15iy9ypbPC6nxtTQdFoC17EE1C7d8hLhqpNbpBkuGEvXTPsS5z8tfLcv26F5nMCatNaWtYR",
  "key6": "3t9xqcNRJuqiBGHuWnsHpPd43TsvNbuUmspuQ4ijKumtp6JVKsdrYBzvpixJmi1TwudFq5W5XK817RVzzwEH7Qo1",
  "key7": "36cPy51mbfxzdcaw3Bk5D9tP1JmeN7dSQPAgJ5s4yCorC7vCNMTdP92Yf1vdGJ7wNmUXGbjAzaVZ4H5nkuMQGG76",
  "key8": "4pBoZHogEU31dgHUpdet1ydAAGkfyadMS9qWJmnR19FLxaQ2DEgi2QSHqw8GPehfVKyHvs83B1DU523XewXT8b2c",
  "key9": "4LoeTLnmcMtgGEory2MiHyTbihajZUMrAao3qLSshhbAP6cV2FZmXFt3GtJP3d2h1MXGCosJhBMzyfYToMCbScGS",
  "key10": "4LGoYNn9KeWxnSj2KtHw9E6pJ11hT5jkeBZHUpABSJxumtCKKnJkZekAKjyAv7bgpTASi2A9nZSzKHKCiLAkADyt",
  "key11": "2Ajc8ur5Cb32MJhNzhSaJYcSXgWx5VLGKj1mvF2427GrBxfB946NV8paCg4z6u7hcxSJ7rpwrigw2sV9SRvDP64",
  "key12": "5cqT1wT24wKfm8T7oK3gyzB1a5T5pu425uFUfNAmDDWGZ2GGqDrv2BsZ6gtFM6m59UzTwAooXtKUSPgATBnyjV8G",
  "key13": "5RhTUMogiWfNxLAPNPkak3uJpzqvyaV9aqjNAwg41kPhcxhTegpMbQNZywbRuN8hfpYcw1odjKgJUEzAdvf7vP4e",
  "key14": "3uS7Y4rNuMQ8n6cNfJrrvQPxd3ZfjAtVYc37KiXmu6NSNwxyqGd4ckRjjdsaNi6YPNi8qgvLRMtusMtdpivcf6Zb",
  "key15": "4Q9i3k2wmAnRRo2kwTpFpcpu7ZiaDsRt1KpMbqLEXWHDAHRaCBvkmATYN4qS4BwV9JPjpsSwFWXVrwgXTkjoccBW",
  "key16": "4Vun5PSJ3tkWCJxLzcqv3W3BSKGC8XV3qiCsLgEA6NEwWDtBJ2ud3AT6Vjjd2rggzf9aYe3WtFqXgwLad9s59R4",
  "key17": "5jRVfN8nP1sd93JJmPXj8RiexJrmnerDWhEacoYbc7s7jprYbcumPrLEq9fLHq398of9M2fdiBLSvjYgZiLumvwT",
  "key18": "5VmadrQMD2nrhnUYe3LN1TGA3ggy2sfEKjDByES3iB28vVoH5PFyaUbJxSkJ2EgnURu9cjLJ2i3ZoirwQmMjmRyp",
  "key19": "2NRZ6m3Avfigi9hZh9HBnN4E6TgiDFiZu7oTQnAGdbXkooiQH1ngZAbiV2mHodhA6WFXNcdxhwhFMPRC3xbk82K4",
  "key20": "4ogsCtK27uFVgzpwD99TTVh8pye24LhyCHB6jpuRVQ3kmCmHirnBmkaWPE28GGrtyTD4YVXqtxRcaoum1K7QDTsL",
  "key21": "4aWjoCSau72g6AXLiNSrdJ18wQGpaTeqHemzcqsw2FfWRSuCzMHTmaB74umm6rmJvadsETzqL3sjZf46Cd5TuuNU",
  "key22": "3JwonwvrtCBUzN5P8WhqH6T4HK3v1Gi5WbW2B1XupqU1KYk3HZjTWeoj8BihCv2RBtri2Fgq4QrxNwvNhay7LSf8",
  "key23": "nCoPBjYBvhNrC8Xe88V7QbM7xnpNJgv95kwWBxp93zenRtTZQUkyzAC6JUeUv3hWpDui3fAYaTnkFgPUZriFqxN",
  "key24": "qgtTdsVqRVLhXUhkQwiBVJBC7CNPBSKVTTGpxFqVSWsMjodndavRdAe8eV3KbzJquH11Kn1McP4keRrEoiDgEEo",
  "key25": "5YYAA7i1HmykHZsyNkfTcjTyYhv6Z8qoMAxKZrmQe9nxfGfbkzHa8FsrFynt9Ukj4qxGvyE2JV4iWqvzAMWA6ddT",
  "key26": "2GUs7hsjJK3hVBFKEZLLH2zDPn4Kh4u1wSPMk5Hp11LWU5ZeiEdpWSNX28e2CWPeoAaBC7joAUvArqmVGBLntLkN",
  "key27": "3RD3ZVL8B1BcYepTo4JHPuKDuk9yYupqaSnGjw6HVTViwgDWDkz8XKzA3uBZtjN1jXvbw71iC275bWGuBfMC136a",
  "key28": "APdavidxiAXHjXuDdoHBLmuUPVrQy2ayFLvJCqf3jesRNBXjN15bMJyt25XVAh6btDQjakWSR74Hv25Mkp1ZC29",
  "key29": "frSxVZsrVngSXRyfCmez8etfXqUM8MPdWAxRCiYeAuieBuCH6Grzt5YGq82UpazBg2P5Q2sT8GkpDPd6ckc6Eep",
  "key30": "4Twhcs88zmvFbUPDLUzmpotAi6kC2QucpPm6tB3Nyp38n64C1bYjVLcp8oVm6z1bJpC9uuVp7xcuNUqhKkRZ5Dys",
  "key31": "4VP2mVA7cVvtSMDNYQiHs9ZLc48pdoiAhRcZBN6Yjffy1eH9NKWW6vdSCN4WB53BJhUyF2uqQMgcKKEmfDTV7mdB",
  "key32": "4rzvPx6enzb7T4c7fYrgVHfL3i1HfZ4RWkb1LmHmUKi9YGQtFyRKzwvWwUoNULzpudCzvbaSY7ngXj6fqWSPb1F5"
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
