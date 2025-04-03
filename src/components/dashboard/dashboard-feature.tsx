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
    "gxvumx8owS9GxaD2hxKrnLMtMGn8g6pf98saQQPHWonW6QzK19iTSqt9dD2eoUS8CRNB4AEqmYkshmaW1jFtjc7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26HY5eA73KGxQbwZqSxzMmy9TE6G5mQiUwfAbXjnhEBnGurZS6VxEv3FdzZS1kiL8f1unvhgacVC9KNQp7M8J8VT",
  "key1": "2b7RoMRQ27pnzjTe3VaDupnNtM4Y1QuXsM585m9m96Fhjp4yY1oveDRyaUywQLVriRdHuNTPZjAMxfr3U72zRs6c",
  "key2": "2gwz8WBYRtqZExLJF55PJLKvomL55RVpNmMH6H1NaEZKqUeBoRMJRJLc5BEKTpkSFeTGjwf8AQHNo35CBVv7yUT6",
  "key3": "2iGoqxGmvoCdeCUptBwPbJejPnTY4BjTeqEbRRcMMZh6Y2hFqpnkwu7ayiNhNYNFaVXXA4wDYozXc83FfGSiXqHj",
  "key4": "4hq95Bk5hLGHaVDwEcPGDAusBBoiDJzEuHa2T9gp8S4LJoJUx2uGm2E9w4NUYjdn9A2oRcGxvo9VHdzMEzXkqcu2",
  "key5": "KnDssGAx2sjsAsMZsMJ3MWe4DHs8DfKA5hALkWsMUEpb9fQQ6mKTCCW1WKV6A9X3NaHMpcx42V5LKfz4S68pxiM",
  "key6": "2UPNxiUFhBV4d7Z7XjEyv3azpUsixRDAh57cy1LJ2HNGUAGmxdQB4wdsbLiCJGJFGq4RrCZTVD4disFq4VCiUENA",
  "key7": "2vFriZK5zX1YciQ7ug5phNQFzvHnP9RqznhTHEWorpa8W23hRz5drfDzz7dTwhQEVacYGaUhudKPbGXzAhS6hw39",
  "key8": "2ojwSCF32n3mtS5DetqBXwtFs6g8h9NWp4geFohUkn3scyujofTRQQ5kCgHttG4cyU3BSmpCceVNo6YrgRr7st99",
  "key9": "2vPNUxHhaC3R9dW79wwfSiCasb4pb38jVrF8aq87rNYiFJDSnC1ZRSoRCumHrE5u58WEZUieCLuSeHhEYPZdGsWu",
  "key10": "4RQVUZpyRhET7ga43y5FRWDzMuhppxfusPq3SvaGUWttAdUGhmHokRsniAh5rZA36jD16dmGuwSSLt28awBpdzUf",
  "key11": "5Azcb5HduTajwVDa821emQmw8UMtd92m8H2DFGbaz9RP2CFFiFpGFzuXL2KrYqWrL5phjS2HFi3tryZrEudsJMQT",
  "key12": "2Vut82JFRhXvkb18KiZrg3qLPnWLDfuFZXNg6oA4N9yTDYSGFWZovykFT59iw1Na8Dc3yw4biR6N7wCiYneE3ss9",
  "key13": "WqgFFnQYo4JS154Z2rTt2pcyFzJRe4Y62JhAUb6A1eoCiQX5J2FdtPGv85BbDq5RkNDJ8HxofcR1rNGxnRAT7Je",
  "key14": "3akrijUvGJV5z7G6dJ59n7MZe7NRFPhkBkEogacCsTry8yXqNLwE8jDnMzug138AdUsWzZ9kokgdhd2oy3Uw3RKd",
  "key15": "3xiy55dRS1SLTnutJBaskxdSvQNFUaBKF1uwqUZLRXswHJLY5CKoKTfmndNK2iKovQ4WM3MxB2EEibdJA7xbFRb3",
  "key16": "4sm7bm7kKiERGZRynkYK6uyP4jd5iUqjUSDsy6mVjLiFd8cWrmAncPL5XRDsNAbGJGB7ptYR4TNAsYy9AJFHX58C",
  "key17": "fPP5LjYYu9sjMLXrfGPMEPh96e87TpDYP6Esxh9qUgb2p5CoUAWK97E4msL1yAUBqgaxZyP53Gm84WGKxHcyBNS",
  "key18": "388iy25wJLfZ9CGNaef2zLSuEWGb3EHXCkb5X5gFwhumYJFsbdrppYDaY7wpM8TUGYM6CPEFawg68XJtLMA1xrKo",
  "key19": "666jrEurDH6Yok8HED2JJPBm71fpfcQtYGCs6dy4ahah6DShPM7RyeuejA7HXFiWAhQkUmDRSijxdTKzerHidjN1",
  "key20": "mnZT9gR3jeZGVxvyAWLRg7jWNcNfmZjSBaKaTPCGx14SVhPjJHbksu9b3iTvXvsQtVJQpfCH9KgAMT97MGHqid1",
  "key21": "2rUHrPuww9tSL694TVbAFatrBzs71xLXudhQ4JrXuLGszDvWJK3JXZf6zLFXoicSqbb6XBiHMyvw2DhFb6D74ifc",
  "key22": "2DttM6gRaAZus4GKWp2Mt13vA3Y1fsUoi19QvBHdqsnhmVBA7rUANErcoDgA1KsdtgA5ctuFVP8FtaQx8y47jQEh",
  "key23": "5gt8xQgtPfH9VMa28rQB76CVhWPDAuTGr9U7ZyxH2itMsvHoQKgPduNdJM3nwTZw4dYudahv5hNvFP7grihWs9Pu",
  "key24": "3JdUTwfPmcPRnXFzcpBBWPMiSBxqQtm12XWRVHGxDawtbArZv6GJvY3PzVHzeApC8fYsmmK5vgkJVcR3eDw41rvt",
  "key25": "2fK8g8peFwQ1MrzJ4vbaejs54RcRaNmEv9cf1swxKwMfxKcA9MqtfFvjuewhePVDx26LsDL9q6RDTuVwxksmSbHr",
  "key26": "9TuGwNXDgGTy6V5eAn4rK7wPeaF5HN3H9vuR4BzFhiUyii1iPstpxHHioWJyBdx7PQBXYXtjyTzkiw3QA6kTB1m",
  "key27": "hPWKeyt9y3MXVYtgkrfLXsmX8BUgGwdMjLZYcEaTYEMfdoRYAiZEMKSLyqwNF5E27inCneXb1TNUKrcMrJ5S19J",
  "key28": "xFKq23jQ9Kh5Gv49ZQj9i7ffaHTotFGaynsRemNby7ZNrL2teaMt5CpTWF1RiDDgwJWKXZ1wDvpDTockEG3dG7k",
  "key29": "4tzaUodMzSJLBkjNo5Uuk246Bzx8EDcffYn5rczkkSbVxNCMMJkebsoCk6ixEMJZDYJP78o23joCexbxjwy9vcFG",
  "key30": "2ztfihWLKwciSBT1Rv7Pfj625F56dgGSLq3cWRMphYkZ4VAaLtmPmgZHriAbjhT5yHAhMdoZBmBCAap1WhU7CwzU",
  "key31": "ZQWJY9PWKM9rUeph85NSQiVGNH6omSKzK7GeHbM1GiJKgkNWaLij2i76ChaCGeEsJMHaqRY1bPeoEodqqJFfyku",
  "key32": "4imtCnE8DH8fS3Lnpg7shqLKajiM3vDNCQFU1NJd1ctTM6s1sRuFnNWfdBFecDUCAGRBxCG2bneQe8pPsZvVM3m6",
  "key33": "4MBsB3cTUWEMRRcii3rSNLfRwm9hEFB6dnPL1QKgULj7H5PcQcAtubB1kea1qzB2T2CQeAhSmdB3aE929n6iWzgX",
  "key34": "tUQ1Gpng4wX2oojXR5ZBBwbpfunX4Sipy6vJ7iAw85aPu5FHMsJ9gBM8XwwCHA7dUcvBGXRKuyjBstkYgiAarai",
  "key35": "4CRneXwcV2v492bNNbZm29Q6AAk5csEiyhwYZ9sWswjDhQHMNJbQgR83pf4qtJJ6efgqeVvq6fduDCi42U6QG4eK"
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
