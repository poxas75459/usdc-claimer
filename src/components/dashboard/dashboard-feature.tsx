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
    "4AuxnemPb53oKNiWnyYTHwwSDEGEjYvZBKK2WCALmai1Jd5345GFfTksFLyNz4WGwJ9qUsgRK2v4EoTsSBHDWv48"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kbw6mKmUB7KHmidFaE7yNecCCyP2o1mUocxbRVLRv5PypLA6zbDyNunxcouMhJuEJ8kSKGdNjtZC4iqfDvxsMsn",
  "key1": "36PWGBXZojgfRaJNhxgiuM3ZXCbVWJGLxGjdMubUetj4VYD3fc5pLgZMYXFNz4R4P9D6agk59oun8nk2LZWAGSan",
  "key2": "tA6VzZmoY5HmMxEhLzdkzySizsshuGhFsAUJbFmnadjErVUYpAiuqL6SE87iu1u8Ae4Ry8nEtLuAhsnb4nqKJCc",
  "key3": "4hxigSGg2aFc771yGW7qWMH2Qy6PU254fK1R3jksq1L7tSEyyM6CJWgE9USZvVKGgYyBNoQH4fK5yX56SViKfqF",
  "key4": "2KXPjKWtwiJWibRvgsLhEoopJN1h5oTRjdNvwQsKwNUJ1qPnKi3PBjpfwSqfa4caRbWGUe6CWBExehG9C3CPKKPp",
  "key5": "4KBWcsJ1uwqoyiKwHGBjCFgV8nkvW3x37wkgh3fxZMF2VxiazSbGujnssRMdsP1bEKvqKjMatvQXSrEM1ypcDKHK",
  "key6": "5w5bNGYgdrp8tfyukfSEBxF7SoggZYmnxBC5cBcZybQLDNBEvKCsrgq7ML9FYKyiY95p5mnf4J6fPBoS8mbrF1eM",
  "key7": "37Wi9JpWVtrJHnTXA5tKwKFnD2H4RdWPxVkqATaPiZncwj9B5SDm5U214PxgE4uKXcn44gaitzgEftdeULmXASDg",
  "key8": "2fy8YEhpaXd1oRaVmnD7ud2tWEe4hmF4ewNA2ZQJGvEPiyeDFUF3Q2zMX6tELZgKPj3kMGVjYtqa916cHvQmfnUM",
  "key9": "2XKiHzNHWAY8NEX8YDSfjGDV5KpGNqZaizF88dqXpbmFyPWddNVYAA486tikq4akgi6cUSxkEsXxY2e9DXrJ5MQW",
  "key10": "2FxUJttRXfGvntt4TdeHVn968jWj5HKGAa6YUA9MEpAXRFg9hoKHsDSmfxkzgecJb8MMFBLTJRdmhJ51ycERpB3B",
  "key11": "6tyKy9MbpVeEen8SzXGQJrz4tySTFvrwNJFrSEthdFAJ7BpVHLa5y3hy6q5AjPxaibAtMyR6MVJhwjoiMoBGqyH",
  "key12": "3mx8ffcE6JpAeYm9xxBpwfi9CHLpXhtizhNYedvu9JzSdcqSuPXzZz2rs2YMkhyNjf4qorsgnpXtYxzZbgx5y4M3",
  "key13": "XJXoQ7TKSMFVxntFu9tksQVAPmYMekzvBgs3SR2PW4c8G9fXC3Yov74aaz1VwVWT4D3tXFEM1DRcLt2WhZvXGTN",
  "key14": "3d2WPYEAVoVKqcnDsWD3XBCXis8tHvy4ELWPBDzFUdpNJQfmPuuZZ17wuCobbTV3ZZoeH6Up6FkGhAnvfa4hsZdc",
  "key15": "652Dvwm9aRjdpvv61ZGSjrwpcF5JYtwWuVdDtdeXtHGCQpGAMzJiQQq5STgcre7wjYxFN3VR1K3ixNwbrqSM6wtM",
  "key16": "2KybR4tKoWxjndVS73mza2tjHVws3cR4Q6gG237V1UmHV5EkYt3UTESQkFHMhi4ZgY1YTJYFm8YhD9a8DGJ1NnBf",
  "key17": "5rqgsT2FQXWHZw16Lfz8LeSWpUEosDjmgzvhP2qvrWdbQXtqChN5coWH9p1P6PW1xGnGGoBTiKmvGaQ9GrC34aPJ",
  "key18": "4hEAAC2ecoYind2zbXGJxBgoJygiLHyDNhc9UkktU9Rp8ns3CfLxQozoVkk9nHjrjFcJj6bzXRSi2hg3uEPojytx",
  "key19": "3UqmzDYZy9GPWCBVrNgyxAw5TAWcKcEPgkADL5475KmSqeb3FY5wGEQjy2vgUAhAR5LMEthzexLA69RcM7jj6WNT",
  "key20": "5uYJ3sE3whru3i46LjaRZbXs8mahcaXX4djJJhBHPka6EcJbGbZyAAxfr6BrreC1tdLKupPv4azW5uGWJMFyMy3H",
  "key21": "3ojGrNWMB5AYb1Fnd3aw4m4NLTViidieeUDHvRLRaEKBEGLEVCdsBhNgPhAMDQmezCxuyP4Kf1hLYcBtf1UCGtHu",
  "key22": "4UnyVxW8dqh2BtAyR7ea5tsXQMNv7UenyRq2WWrigZyhVWLYu4bqJ5zTn1MGPPDxgm5MTg7UpYQW1wQRk35wk9N4",
  "key23": "4kmjN4fAkd14ARd4CtHjpzve577eAsvQj9XFAgnYJtiMdK9iMUzC2rKnRojEuSzzEzTYJ8VPKRBS74APqnMTwp6W",
  "key24": "8uWsKoNQm7zcVVGkS8qcfMkFMS8v4wXtVtvHhnbAerH3AoYByagjUHv3tzkjoA3KdHPuFUugtbdxin1F6TjEyK8",
  "key25": "42Z6ntiJZ1dxBqks79YmUMCeqcWicgGg7Gn7oyFHxdtesFJQuzZCcmHnjLEwBZQx33PHnQCnxuhVhCUc1NuiRfvF",
  "key26": "4fA2BWRijXg3M3xbeAereNRhKC7fpjXMMfDPTCaLEUR6Acan9pShuafRzRSVxqkczYaWNVvLrvVicDNJ3RzPwGpP",
  "key27": "QikM7efyxkp78dNfvEgTxM4bh9LchWhqmfFzT9ZNHJ8LJhc35grdA9ZbaqMvMpCF285keSuj3Y9Ukx8CN27AKWC",
  "key28": "4qjDa4pxAAUT52Qsak6QsPrxVdGtb2jVBExqijQJC26b1tBJXAbXsKkee2tBLnvLCRrPC2EUanrAFaZidx5HhKrt",
  "key29": "5bDfTWGaJF8eSw4tEUCVnd2eh3dSUsjkKxPqBzc6PJmHjNBwVzVKgkWBcfHkgCRjv4Rzw5iLAtMj4U3na19rWavW",
  "key30": "2oz8kApd5P874GL7SaeoX7kyz225prRmXadNDnPPFr1rLJXghtoNLh3S8kzscwZe248pnfqWtuLqhUJuMAb99EGp",
  "key31": "4HG2s9sx9MAdgX1X4mTzPXCDg7Y3YqdKmxB8e8gZaFXqnRNqNonhcBcr71cditaivksfQK1tFK5cny4SrJPyBDjv"
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
