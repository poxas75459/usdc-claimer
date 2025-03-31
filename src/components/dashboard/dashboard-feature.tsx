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
    "4TjThB7VdfoYWECFYFH2CuWbb81eqzmEtowio8T3xUiuz4ZeBxdJ4nKKoTBgx8rFgCTLypaqgSgoA9hJwBqg9dbc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kECgppZD9F5EoCNPcppLxgcLLw8kxiTNaiZSYyUiLS7caQfPLfX6AFT1UcHKvxRKtEB5idNR6EqzxVRNzELcwM6",
  "key1": "4vwv3AmL66Yqg5eQLk5ZQDrTzLqXgBhCXNHut2xUtSSS1My9ycuqGgKkmfeLmBiBv3LfiZxFFUYKiqyNZawWBESj",
  "key2": "2qs2x8Z3uEJt7f313wzwAfenjqxxbyiMr84fhVHbzB5crNBZ8USFhx7WrpC396NURuj2rQCHCHRdte5YZhQXDnzU",
  "key3": "36zpd36KJWHr2nTg3oG8cdFRvSdF1tieZHo4fzHqmu3EMakST7p6XmLuZAxtpFRydPUQmd5FKVtkTGeAAwBZdPju",
  "key4": "2vrsYpe5YN2W16HTXniR1oS4wxFko4CXKumuJNPnqrrkwLPsPt2rNrfDfxms65EmQxLSnVrGwchWGaVyXbFid3dR",
  "key5": "2YZ7tcSRiYeZCgwdsLWxYEDRUynjqLMxKmZrgvUjYz4pdDUGMXFZCovqQpAfR6VtCY3R3RL1CQSnYpWgUnZbiF3x",
  "key6": "59s64yjqGRguW2FTWbqu3j5DzvN2jaxJ5QjbLw4K3Zh8eBaQKj7gvMSfbKoRbCvpbMJY9VqL8cKvwAAyiRjF2AB1",
  "key7": "27T7pH5PP3ag2ekhsjDUsbse7ifJtT1tXe6nDy5fY6ohvyKu9E4jpJCcsxi9pgyrJ4Sf2iwsiK5nSrxfCeqY7VUY",
  "key8": "62Vfb8j8eDg7hd3vdKm9mnTC2YpgeDxzUVRi929XXmGDiM37V1sAoULW2TfnznG3CHD9cmpnbw8QgdZBm7RcDwhy",
  "key9": "2SfLyA6f6uywKv8pfGcf9GbS1N99StQKGpUCGf3esuZaCB2191dVzyYFSf9WX6Ke7FyJtCVvvKtWwBkjbFuP931E",
  "key10": "5WHC7ineLVTF8KdVfHa9eTV1GdKDiVjXuTCzasuvFknBFv7gW2VjWYNrDucjq2CAKd5B4Xyf9tbedWeEJYSgHcaL",
  "key11": "3is4JHbvQbAZmkmsLNbFa3JoBscNGHF1WfoUt8cStZbSKRn192GsB3CaRXsQa2kS12rmfSTsFgcovyu7vhmcrPz",
  "key12": "388AbrPyk2H6LSZoomu1q9DAPkyJ4pfYnFyVxoP9KFCxVVuUJuodRxNMHYU4SMYeMPeYFCtNWz1LShxDLNdeKLKp",
  "key13": "2F5jsGmhZfD44Fk9JfHH9UwXRnStrqLQwrqmN9KZoLjzgxeVqxsg5opP42nxGCnuUf66FqzgZsVdQ5oSF2UAJjaH",
  "key14": "3VFTFanMLYxfUsbhuHdiJcco9d792s4w7KpBmb5bjLVWNsezvj2pbFA6dF2Yv6sZ2VSMV1hx7V245B4CL4aBagxZ",
  "key15": "2QF3jeCM2Tt8xNMJcbKiJpMSrdtGdEibrDSrkhTMhk9bk5REqNhgZXpSYQUdoyddbKf1KAUu14n6K6UQS2tQqf8C",
  "key16": "2Vp6tfYJPoQVk3m45QTsdYANCmK1RK5zhZHwvqPjpmSQ9Ncqh7Zunu7hmZiDersbGAK69CU5KT2YRdgCfCPC55Ma",
  "key17": "2Q574516r9kpoxLbxJezHVpGzQv1MbFL7tfY3hr4LqWbGDQpwh219cQL9NnQnM8FNVzF2yhYra2VRcp7mLh2KjW8",
  "key18": "4zkzyWH1q9MC54QqGemNCGhYDRYGaHkEXq5m1WxMPxKwxSyePZ3reVdhY8zABADevpWwCcCziXLirebfBxqiyhV6",
  "key19": "3nAUrgofUyEwBDNoSWrng3v3DGRdWmPiGpbSWYFM4UvvW1DdbvDZpvGceLpPbjCHvsnoNgR4G8m6s7uPtvQoW7qW",
  "key20": "4rvFYRabaxUTZ8G5WQqagnSiYSGUuFFvf9T1Q2c23kuhkLSX6w59jBGqzPwQ1RM1SHYP9Nx6V12XK5pLzhMJvF9a",
  "key21": "xAyH9Xp1cTiYYVLGWLFCSK7JoCoGzVRpih7dLFSsgZsFYKCRKkpv1boeS15sQ7VPH3LVAN1zSXjsETjcHUf7bay",
  "key22": "2urei9PcXZwjz3LpQtJLLmwMYcd2CKNJ98NcEDE9yNq76idgFokYvnyKNAmj41915LQD1Jh1oGZLVWUrNGSF4oFD",
  "key23": "5buGuZut73iF9fBQnsFEdN6wrePwGNvtULoCtFJet3wJwyZu9utfDbhSX6H6Zyh3wiih7Jog5mTEQ5yNn5eUHSfm",
  "key24": "PRRRNab8gS46SrtzNxLvdgupZPKguPDMKFRqtqcQN83oWPMnHwq56G6WzYfDYbyBFXgttUMCtHtsUbp6M6dgMJi",
  "key25": "21ztu7g2NCvkTeBAYQJMSEpCkdAvySgJshdVWPQxSadSimP7kvSh6fRdgBLFxx4xueujsM1mL4D65tE4SDbVA18x",
  "key26": "4bMwUTS9EtRwKQPsEq4WpHJkvotMd7CVL2Pxquk9c4gd2caQB8anMGsoo3ZQtcZzovFngzySmuaj4Rmod9EtCy3v",
  "key27": "5H2A3vrgx1uf21t4rQcsmFsbXG7QMQ66pPUJabxmziuNQEBFu1toBAkkaKAWT1QWfv9hgZWpwKbb9dSvrmkLwFk8",
  "key28": "3dKnVoQwxhNiB3d3hxkiwcCejDygP1SA22XjBk3xoGXeGv4Yg6U9Wg1H4QwXqhji1Uth4VTGSDxSwnkxgeei4JhN"
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
