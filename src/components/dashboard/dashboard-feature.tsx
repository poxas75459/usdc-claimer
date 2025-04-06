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
    "5trh7FPeQeuPtYmJiqTaMM6vMuzhzs4jnYvNbZfoZubNvNxHZ2eQJAWE8ciy2M8WHqAt311J81iUy61fmS9iswU8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EBJseGoCiLTuM5WLJepJYj6jDNsfyZwu8rcyqYZQbUvoaTJpqWDLiiMAjwt74QUzM11rKUsma9QTMSDyYc5MHFw",
  "key1": "3zv5tUTmDtxzda4pzea9cDvDEBaEMWEb4KqwrHNg3xMfPjeMnFSN5VWmA7ypiqVXBTnCiaPeeFpd43CVjqhZwqEC",
  "key2": "2ea9r8u3YujTTzK7DYLcJKVtJ7mtKRbeUGDuwy5Puax4JRB7cdu3YBA4GgMmyV8H8Hf6UJd2ZLh4TmjeLM4uJe2d",
  "key3": "2aP6BzVbKRLYYT49q5ncbbyjaw3TofuN6e7rPYjNLSKXsd8W9HvxUWF7fXQkF8GBrZYeGhPLxNmNPWFx4rZkDFcx",
  "key4": "66np5jLPHZv5ScFt5oNtLLxHatZAeneFsajByf5euQHvjmcYPKujqoTgmgSuWmkHuJL2yKaLqdYizMqycdRY9WpF",
  "key5": "tDEhFdP2FiKPDMNnHEoc31WXps7oAeXycGrKspgzDwrMuJnYo4s2P5duadHxV2mtGToUdZ5FKWiPQPxPLd4zEVU",
  "key6": "59ijGWYt4ikm49M89GZ4AmMR6q6SPFcZfmh9PmGAGEjBzJm2Q6vubFsUSDsDMWWHPnXke9ytPm1EfWavMsviQ2rV",
  "key7": "Enbshvdr9gb7VdYT6M8S4WsE2MZFeEdmWpVXnu1f8Yzyk29dpmQcLsr7gTaRxnoS3VeaRbHNqqwDL6zVUKuRsqR",
  "key8": "oqkSbUmdJGAGzyheEbjpkU7pmrHRGBE3Ywm4DucwtiGTSTYSpYYPNQkbBfodrDxgMFeK4GoFyZv9jCC5sLRcqar",
  "key9": "2LxmEc7i5272VWR5z9KWbYdv2qVSvZR8DBSnK94H5KWyWbFRPWYKAnoXnJRTv9d8rPL81aHoRWp3zHfPG9XCuNBR",
  "key10": "3sUe524qnoTjcTGFh8gkf7poe5Bo7hedHnC4zVDonnf6vr1Bco9SkbPMNutP5pELFD34Bes55a2yiAhYP5Q9EhJ2",
  "key11": "55EoVuSaAwdbb26tKqULRoVg31a7FmRRuR31R6HA4Bdj8XDbWY69Pb2A2uQnWK5f1CxTbiPYgq1RnusaTu8TK2UW",
  "key12": "3a59nGKET1yCMatM2ukzWkXzwguMap6sFicP3Mv8vseNsxy7omBo3XWQ4mF88jw6CCU7PYPgCEGwoZnqNt8TmvQk",
  "key13": "4fQquTjMinvSR6sYNkVSpLtt4seVX8WE8FM4tTMj77x1qEDvAbvaomQGHJyKZCZoVqTrYGzSgNNY6haAokj5xaSe",
  "key14": "4TXWTJnLECxcjqB9emGZdoBQASAsHYKBvKXjBZ1CJMsa3YQoPWBWKa7FzeSjtiBH1YU8eLUHf8xeuQBtFTZMxtcF",
  "key15": "3ER7oFZ2ZBbkxiuuLxUwh5s9oVjDiMvoetE6pe7nWzyXnm5axap7uRe4q4X3toTWqQqaemyTnLmr1FvwKrjCZ9RT",
  "key16": "3zxbbttwMVFCYWB7yEnBFeFmZCbj7GPr7k2t7JQQhQCDThhkMoPiF9kDafyPdZfprVPxLDcUmu2jPWYbt1LXi1pF",
  "key17": "2pAU4ydn6iEHR59FRy6do1AnLcoj7Q8ToGyZJ9QzNjB7mgw6pruWhWpzgtV3FRzsF13mvj6n2JGn3WTzTmnqq2Qi",
  "key18": "in2jytXkqArFyMdbFK9qZwtEFQtMB5B5DsCKHXiikkFuTq5wkCAshDGiwRhEWhTZcpv7MWW5CZ3HH8ahhJmG3Qc",
  "key19": "4euuGp2Wg3odm7VxJzDrRxHwiE9ShaXskj2Yi8bxbS2nyzXYPmE68SLM1bN2qvFmB9puKL1SFnwRMan2XvdLKJG7",
  "key20": "4P8zeM5aLAYYFGwPwv7rKCMgpSwk8NgwwRziHDjS2XiWLdWmGRRy2tChF7BbWFGS96Mz1JtjuodbsUHWYbbWyEGa",
  "key21": "2wKwWs1HnDyLy9KYTNvUjQX93qi254SSUEubcbjt7u2jxUdR7PvnTgMmpFaZkcriLJ9Sh1Wzkok8AHs1Dmc71s8r",
  "key22": "4mcYWgrfEThj9HtgZPCJb4wcFDm95p7eL2LZMbPG998sBN69K7j8bEGhoCifMBCY5d7HbKvFWkWgEemkqRAkqA78",
  "key23": "4KBifA4yV5KUj4tCv2ssQQnPEvwKoTv4L3wfQge8rnVVBrRQqecY59LdBnSWffYT3kAKtYnh52R1UzRbmkwavWfc",
  "key24": "4jJUkZ4TDc4y6teWc5g2wcfYSXHFQiqkN9CZBWiMjAKXNjtpVSs95FxXwMP3KHMJFNSvJCanTVDQiCDVqvtviqmp",
  "key25": "RJ3f4JbF4tTCauVVX9qvpes5JEshUyF7RCtPcazNzt7b6unLdnfjajZG8X8cXwjt34UZgUra8pFEzvfvzawcX6n",
  "key26": "eEdu1ZtqxDzvhzwaP5TrZeYHgiYWHpz4WsrbsSUU1zXvZPTyiC4Py3vQMgonM9YPEgVEntU4hcWjhc1JnzY6pPL",
  "key27": "2eTA5M1EHXsLmpfHpb8rcnZ35ewZz6XKXQtGnVLEbxiweo6doijnabKNAnEBjZLPd5ftvNL5MM3RpCCPSs6hJuPq",
  "key28": "4PrDqesfmADx7FnZFKP4yiqjF5BzQ7mmoJ34Y1kCoW5nyVmRmKJngT9ij386Xu8bc82AHsqoF4igFoNMUu2w9Yfi",
  "key29": "5ncmXB1x5KmeFBRuod7g9cVRujVUwXYiJkgaemycqXUrhwtN8fBt3xxPB31S1BUBryLn1RQ8Wra5QF8j1isWoZLn",
  "key30": "4U5CSUYpn9SQnwSZ7G62HnEZESE8CAkaBJGnJtvRLHueQj4YkqZ5mZZUiMjBcYJnhaKL95gBCtCwqDeiZGkvsH3v",
  "key31": "4UmLFCQ3yVdPxveLZCEv2p161gyswSCzB6vPpSHeXEYmsNoofN8xW4TmReuQCYazRxgGYX9xEujDbcFEdncqGpV8",
  "key32": "5o8P151tKS7jhEhPhnNhZbUZUHfPihVeirPsht4dkmK8kAyEcW3P1Siuz7djm6k9C1GLqwEZ88kkhu5x3eC7qLTk",
  "key33": "2KLMfyo9vZvEC6ZcedsqHTDJggHZqPtq8gEbXz4s1LW3P4F92dvyU6tRbB946zoqo1RCkKyKaoHGgJj6H3SzwPzL",
  "key34": "5ScwVAN4oQZ4qYkYcnXERgf1wsiV4q8L7kGgZQCN3Rxm6XjFfZNuWzYiPcjocpNnqWPLDUZMWQ2TSMz7KgTvzt6L",
  "key35": "PGjEHanSb6t2ARe7DSRJdNYjRzEkuoufVFCdExduZEkLA6rjuxYppn7VoeAHVe27EiQfTrALFtjPKdxsHuhX6zP",
  "key36": "4rdhDZDjuoGJGVUXtUQbG6NbGQHbQQDhmQqV11raZs8xSKZs2FWFJ78R1kg2tzBn4e3vAKGnbupbXzVrKPpyRjv3",
  "key37": "43RRYXQiwUHTcTAjMip9Qk7eH8F8sxcZZXpHoUvYMqogKqBSQfhx7YsZWxz2FE8YeitnLvvAevSaiq2Tg7jYzU4u",
  "key38": "49uCLzuSr3MPTvhTotsyzF2gkxsK5jN4Wr7JiCVLgfMgzkW4v7fCHUNCFV1aNJmQoVdi6yxTDa3KiXgHB3MRScaf",
  "key39": "3K6kn71uEZu9EurEhQmBvLYJuuGvFP3e2f9SpHf8KVeggiq1se4tuoaTWqAeqAwNoyKYcFbfitMEA4kPrXD6Pj6m",
  "key40": "4oyQoEdwj4NjGTYaWDyaTyhvACf5yuVXDycshJw5U1fgJKYFFuSKf8rUVK17eXd8Q8Yr4XnzTdHAKQcfjHog6aFg",
  "key41": "3Ap8dcQPys7CQ2BTr5Y2XVSKsQkwWUPM7eTVp8j6qiCREXJMW9FTs7qNuaSyCdMkfbrchz39EVuontMZwY18erYh",
  "key42": "JwRfw4uh9TnCRuZcKf9sVDHRrmscaU7Ts6kwfwsDTZvXq3wuTmZS1zoNCNwqhXYp9EZFE1yjvLroxFnth27zdnP",
  "key43": "3Qcm395n4Yig7e8qFLmmsnx4Ykdcg9bSHSte5DfjVeHsLxzyjgjCN87x78RkWCcFotVjQMYLAHbavZi7UNfftJxw",
  "key44": "2MWY2L7Ny8GaXiALBD7SFi2ULfEDpg1tqSrJApZzEnRsp8kaXh1s7GMAbnr7vbMAYAPwyXiURXNVZyYFoWxGJ6kz",
  "key45": "4LqkmfAYjLZFEd57abHX171yFU3HgXTrPZ4yL8iRC5pnFSbrqtTRyAmLaV7y17Y71oc1uNoVMqwpdaey27wMwmmP"
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
