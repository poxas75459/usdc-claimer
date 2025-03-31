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
    "5VLaFwWfYYDrxdGYkyUGR3RtrJK8NUpj7Z5pp4j2TT3uHG7sBxPKMRRgM4EubPXz5XyXuDjagLkpjUSJFZLmvzbw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7gqmdpVQkYs5Pjydvk4Bk5EsGxcRtC2HWoGXt632hskpa9h1e7fXoXkbBkubdhGFbvJAJbBnh3zfVPU6WFY1EvC",
  "key1": "33G6vJkdNxcso3LMgcF2vG61jPpDi87LNxbpeTt4Y1d3jGnKukimPZviCHzgaSo5tEGaKshRqhCG3fSipLxxFDxg",
  "key2": "52SP5WUL23mTtNFQx4Ey8vjrrChy8eY1bPxX3RqCRx2qhbHdMLfHMQyHPeKysWuRgcB5x7pGbbLcMoKpVMGEjPRt",
  "key3": "CYwFDxRNaoR3m8uMeyypsrgg6CzW9VMVwXaro1xFuwbgC1aDvF5mhqzqnqUUWV6nCN8AHCjfq6M5qur9214yRo7",
  "key4": "61pPBjiW48HsS44BCDYLcyrFQRM6kyepKLqnpfnFAcUcaRok4a4miBMFk9UXL4tnpJQ5wDWvEqxAeqTPmMKBu1j",
  "key5": "4TUAMwgoPDhQLrDxLuh8hUBTZm9bnNGEqss5jqvkghgtuQYDzf5GLjiSHr4pdHWrPHgTyrMpPnjLoDewrP4NRSz2",
  "key6": "GbctwHYdNXqseHx7HGvkTCutPX4fBVCYLZqb5jAxpKGBDDqKWLLRqE57qPPTEu7U69kBufj2efSPvL3RxdoyTjh",
  "key7": "23Bxwncb3bngGSsfLKFUf7UrWJRMGa5r6HJresNfSNDsgzUc4a2Vv4sSfwTF5XtZYTguSMTceAXiqTZpz4StjK3Y",
  "key8": "t8RgguM2K5t9v5prPit2txEazeauH6AS3HH3iS5MnZngxcQagQmeU6cWJwqeYNQgG6T5kD295789EyFiykX1Vrg",
  "key9": "4hc1zjUrJvBta7cywAmck4UBTCvHZ1SNfYmx4SF2BEqkswi91ZCQZdkhUnkc3SMVk5oZn44gKSpfGw5bS7rppfxU",
  "key10": "Tfwgwnrxf8bnkaB8MCTXkJPtyqTfWwt8qtNo9iTApVnhu5rwRMse8VWK8oApHRVAf5Dw2ewprSppo5Xd9ztnacG",
  "key11": "4qo6Gypft1n3kkqsuSc5MhTPNqTtwxtWMCGS4HFo5vqfLZbL64ramLXnQtTwUTGwfqk11kJ1qWGRgHGgdHSeKNPC",
  "key12": "48aHgipMtnar2YBeHp7SZBtEZhnYwKfFoD5rYkCLb9fsHwrxCXdKKZrDnoe7Jq1yj7NCopdKQNWARbR65DsESZsw",
  "key13": "5brpr9Jf2Tei1auJnDHCfbJpCoAUVNpTJ6VSipUeUHr7w5DR7E4539QWmrxnxXXn7rUJ2B5vcSd96SNgxETP9Ljt",
  "key14": "3AWRXEjFjivp7VbMgvJYrCeJJNeNhPz7ZLJFe3ZL8Xu4GgyBMtroCFyvXxYttcB6anRLcRaie3rcPD3cpfX8C4u9",
  "key15": "2tWVoAmabQNuJP4Vs2uA1wHhy3RJPN4r28odqBxZMrNHX3KJRtfsmnofKmULu9FgZPLsZxvQGnfBF3cAiCQWfsDf",
  "key16": "41nZaP9wC53PHegEFf6bbkTySEVHbpDBuPZRYyAsd17vs5JPN5D3iGEmiBfh2oRGqbNdQ3AedyHhU6MMFEnBQy4G",
  "key17": "4UvRovDgMWzVWRDNHaJLbXQprqJ8c5p9ijy8Cnte7RDaCP4NJpn8CvHezWQpGVYKBfNF1TFL6LHzc7ESxNBAm1p",
  "key18": "5fAqBeqooCf9u82tvw9SJ8vzqUMCiT2rY7X6VSD7BBqHuJpmzvMzZiDPegiqBjJekwjHfKFwnK8tbqaSmLQYzm9x",
  "key19": "53TtbXSf289ZMq8K6M3no1vSGMf1H1zDxwLPgjhxc2q8AgAN4dB2aWuhUbfNJw5fbV2um68aWz31hSWiuthwwC8r",
  "key20": "5JwRLu4GAwuaQDAvi3nhagoTn5XvhyPFRSjBahuK2Ri7sxW3Kw21zuPhh3ZUnfApH7wAHh243xgymA5Eqnv4WSyo",
  "key21": "YHfEGnLKRjwMcvnxYNAPb9jHsqUxqbahnZDzJjbKvL8Y4foq7kJkoLcyT21ndASSg4gbhv9htVXQTb7t9cDpqni",
  "key22": "36c4efvEqSXpHiPhzDZurGCt98PkMVdqyNrCmp7p28PRwFkVxqTtaHFSftaA5fujFZHBDfSWgmoPvxeePonSc59G",
  "key23": "4d24sm3oPAaTMx9en85VczhGpYmRMSwmzWLjqw5mSBLd5erDFMQUTei16Ro8Gw7iPWDdsd6ukt8zUbdQR8WVZRQv",
  "key24": "vvpbpWC3eWL2cVCAph1hegbKvksEBMBzBySPx3pJJTYrdKyRSmEtPW2rEL1wKtqGzLvtLKVskKgvN86r3cEpvJu",
  "key25": "2EcYpZJpCLxXZoZqoZr4faNCdtQeBJ7s1Eosxrr6mn6BuDUd7QwhDxguK4ZGDDwWLHAFc3pEERSLRA79BYhwtfcW",
  "key26": "4V9kr1hjDSFmdNGqhEhpFa7ikDhvDajngKqnWMUBihdeh1kmoobVcfp922vXeYobVhVsA2kzexdQsqtJ1WzrbFUa",
  "key27": "3o35LS2mMqHT27e8oasAmAVpvhyTZ33jH3AScAvUE7G6ia8D6PywTBp51WhbL9u34iVAM2gPVx481p3SaNzqe4gU",
  "key28": "43yDmVeAzmvhuA38NWJ4Arn12TLGTv9Q2hAjjcMQWGCAygfrWJwNgq4NknxUg2WBrxaufcMYw3YgRVR4ZthUfhpC",
  "key29": "2Wzm1VfckBrjh4zaAJZjAaLHnvXRzZysxiJtDxTpxpQYGyP5Q6LTCAfp6aChur1gLS97h5nijqQ6ZgdchpNd4ReX",
  "key30": "3qwaN1ByCzMp5NAuyvAknqNsRWEAZkJQRwz52YuF7qnjzc8SZoVyn49TdFEQXfNNtqCtuLNitKAypyhrD6b8GqtJ",
  "key31": "3xZ4z1JjHraCMTu2ANeLYsrscGTASVTMxWQMmBjpp2yt8H1QgKttYKTChAxwhN7QYvzYnZHTHbM1dYJNVWByAcke",
  "key32": "54eYjTAS7PyA9SRLnP9XLv8rDg2jixbh4XLYqcbDQEvF2bLPhwH9zBWxDGicmpP1muES28Tj24w4VNyZuVAQEDwr",
  "key33": "aBqvHAJiyJ8TmBn9QSrD8MTYv2kvDq8G7WneGfkoZg49ZJ5JeFoxPftZxu2M48cbZ59UZz5iDCqVQfEKszRvWRr",
  "key34": "5NF8Gwb5FA3sVn4k4YkLPkDRu7CBdsN9cwsS9u9mHrEZBGByNnPSr5qsLfM2iGGG5SZHDVYDDDebvGwCvEkPMcQV"
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
