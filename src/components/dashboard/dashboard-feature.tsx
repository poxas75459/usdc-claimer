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
    "3dwR2PGCDkn5js8LTDCHynLKUTCgixuibHtrbizetzmwsckGdFDRv5g8BXnL6Mxm8Rke3K6aiHw5gmrrW4wzxvZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hXSGJnEeFbzfC3WvoDJW7FpZASwq4RyhjNFpCW69655wp7M9vb1ge1vYibGDMRFvSY81VaErEPPGgobFqX3WZ3i",
  "key1": "3s9dZpxevKvtMJddshdTtdyFpNFztPAmrfdy8duXySKeD1BmP4LrDo2Lp8Pw6yz2iQDxi5LK9qqyVUpWDt3m1EpE",
  "key2": "3LxptHTrjCq4dHBHKSvGp5urUNJ3A1CcAbK5e8FwSz2brXx7chHkVexgEmcKwy76ciTQb7V1j4VtxAXiybdUwica",
  "key3": "4FR82o3EkryUhJh5FeA7eCbJp5jZdgQysxN9ytFFNJWEqhy7sQjwVzQu1uGgaBzW7wNdyfqEjJtnxPoW784o5KpU",
  "key4": "4PvbXvkpBC87244qygn2j1HgRJdtPQdMcgKgi3oD47vdEFMgpcLS1HJs4MNgBpZYgv5rkeQU9TjvX99PrNUkVLE4",
  "key5": "bu8awwEfTJHaxjdK7Ff3muFnbqQWHwezbSFCMiQndRyDUzvMkw6AHSBysJm7minXHdgyUmdMKQ4bnt7ym8NVhbu",
  "key6": "3VNqrNX5dMmXa38ujd5GU65GtEAzpWPCvLnRQtYU1MeypfYB3p5bmHWVoDBndCHJ64yz8gjjxnePwHvKAVMX5qZi",
  "key7": "3uDL6HsDKEQJxE2QxSHzEvb3Xr9hWxedF989j5KbJHgrRHxsQhEQZsEkx5Dke5SvevkNGwMcx8yRZSEUgvemxjPa",
  "key8": "2rxZvP7EBPvcE1CGepvoM1eesTBTPP5jGxCeQZkZoZpPUe3GaZmr811xKqoigYFp8oJfCUJA6HdNs9pdQCjUspGY",
  "key9": "2da5H7Ar8fgUNuLN1Fz8j4A7EFq94QD6gkBX6i5HWmUognXvWiEhircBSjDXk2GMFMM5gr925UbDRaT2cFd1FJR6",
  "key10": "2KyfteKd7cN1RGCh8sTqYfh8bhVKKaCjdSXTMvQpyYRsPUD1sPP8H13rLUtg9kn1exAPThe9MLn8po5egePvQ78Y",
  "key11": "3Jjs8vYLaQmiNPm5tD1smS9entDpEmkCtoU8tA6Yw5bDxLiFLDjg2mQmW9KwtCB3N9bLfxVYujUnAbxyHrnk75zy",
  "key12": "bhe84XxfnNnamV5TDN3NW8cAhFDRQoErxVzvNanXf32Tq2ctSiswtKNFFdJ7MuB5RovkYkntTK8WottRiKF3Ty5",
  "key13": "5U8dmCyXbwoXxXCteZNFQSN1H9q7LGhEhQsK14Xqf53jYQcNTKayv7mDVhbRbHKfNqoqmG5cPe7QXDceKa31ZxEM",
  "key14": "4CZf8BupRvCJJ3c1Q175CtbfVQQW2d3CQUGxhAiHpvSsPLP1LjafaSeH1v1JymQRSW6AnrdT2wtsoYRDmZVnjrha",
  "key15": "3CFgPhAMFfKHyea83kb6b8A5YKsyL4NSWYAAT2ggb6cLRLZ2HZbGr9r15U8muBa2g2t23GBDAXBGGjAQWLzLSbsg",
  "key16": "2EYXVYW9aqPuPFj8iKsL2k6zveHH2uZM5axmbMpRQB39gjUdpBf1HnWqc7Gzhjo1GmVtXixiXB1NNG9v8MxnhRbw",
  "key17": "2zX6wcwE6LtzoJ5cTNWJekwDVHckMtfQrau9UADAyjLBn1wxjDKaiKuGjDmvJB5CdoyMov6qw2oWcn5t44J5AgtE",
  "key18": "2VT7Aid8jTqjM57aFGe4onvSKgLXq7qum3UX5LyXLsK5v7FyRU5v1pnzbyeb56GP7Syk5R8RJcERqBSfn1MQg3nf",
  "key19": "2CdndQZctjaERnVeoQ5xpC9swNHfdDW6bg4PpKbs1hRmBs6s24cL1JV6i6mW8GFGg95v3RMgYmnFt71yHAhZmTVw",
  "key20": "S3zqwaaAUHEfALPqRwC2ErzmnvtfFAXbyHCuwo9KPVFLbQ5Sr8qZiUdac4aHYkRoQWENjVnBs2a9jgzQoWaJpcV",
  "key21": "3DEc5vPtjFeJChV6PCkyWijkntBAXbjiv4a6f7JCr5Aq3zM3bTQn2TqSEdB6dhFay9nWU5342JH1rjUCQ78su92m",
  "key22": "4jFcKE7uUBxSyUuwbVds6mzwrA326mbYBPLvFog1hCjqMP59Z6gMmt3WviU89zJs9vXMY5vDqRgxXp8LSq7Kx9Ti",
  "key23": "2aeag9UGgnQwbMjAsHjNtahNEc51BW4PZEkTCe8ufCU3Bjc1Hkzg3e4VR5HKwzS4GbJ9cBzBHxN2eWyLnoLpUarf",
  "key24": "aVdYAsDoUXPQUUiHH6PMMMgNRfohTT2hsWPqKqk6e87M8xVnQepy5tMpU6ojL7ucaeZ2QRaEsgupdVWc8SURVfE",
  "key25": "44FBmsNeYtjQenmtD7BvyYJAERYGvsjt3DdjWiZTYd5CmFTcqf8XLugWYHkQ9UXArSQjNbz2r6UcLRiRmKs8XtJw",
  "key26": "GJfJrx1FmmZjQrVFFtguY8DwaiwUUV87qtXS414uRbAkiMvBUkH8mDhSZzhbfEZGSCpNK95VB7CujCAymjqRjAk",
  "key27": "2RiRoyMTYUQtuWj8nwPj2coDPUp55Mi23X2f44GTvnB4Apt8NNMvMeBnLTXKvyF1gAvnx3Mgr6GqWgVcF8fPzf1J",
  "key28": "56p27PkWeEtX2a7DSj2qc7gyTs1bRHPFDY2bie6DtaMGH3YBfkHaHuHh8RBLHAowoWCtQH5kPbcZbhFauu72bCWA",
  "key29": "49RUUfqEwRaau265LkuXdnQBidKtgZKcnPPXPagj4aZq4eTAsqNzxidb7t8VWPD9Kw4NwFNxCfNUiRUCVZ7s6XQ7",
  "key30": "3CZTi3VZA3KSyLs1XEZuAi5KUiSDgPtVbzSLmhSo8zYHmAZgAHB6hbi8ubfxQeYtELX6qFYkuyEinDGGxmuQkAG3",
  "key31": "2fNWZuKwfPk85b1oF3BtWs9NPWZdUhmXaHdb2UQR5fiwGFGfGVcsBkuVWL3bj76ETNRGvyC7TH56HHgmrm6VUZcR",
  "key32": "4bhZZ4PTFTDXN8BcqRdDRvkq7phoSSuD2e388GyAQJcVFfbRLzsQ7thGKjRJ1zB6ZqrKduj6K3EDka9u7Bgyrd4a",
  "key33": "y4H8NL9xEJr5EAVsdwQBJKFB2RUpbZ3L4ZiC1Z3iKT5Y3hszuuqEeR1PtPjvFgcdPzFXW58aY6hKvyubbRfRaCh",
  "key34": "5cichitGZ39FLHeVhXU3zo8duUBqwgfMM7tued4ppKEYa2Vf5otC5oUZ8rbtNUJLw8q4tgjNs7uvqs2WmDuoQkeg",
  "key35": "3ToqocPV9hY3Z8wL6T2h2mudZ3jCaHVey58wH2WLkCne78s35x4tvYbQvsMSLLspBzLNotFA3H3ktz4tFMHUBjuJ",
  "key36": "3JiSTkHX8H8XfiD3k9DHyPFAsunvuj2m7gv8RU9ecVa4Yi4VuuVsYF7Gx9nCaS3x4NVNGkxW8UF7kgdgBk9z4RTU",
  "key37": "39tALxDohGbXBvVL3dhnfdTpWGMYQn6wZghgGYcyuinPQycwL8vYQuHcP1q3cGnNZX9Q7tV2bMfzQbMMXsGqLVyz",
  "key38": "2Es3us7Rx1d5FhzNfCsc8YsP34W8Ju8FnAkoSTXgH4FCoKU4KfMbe7gDD4nptwtuM4Bt1VTYpvSXWsye6pPjnToj",
  "key39": "4LkRHUyY3akxHQKvaq8QDyvCPj46GUqMSF6zW2vukaHtozfQCbAAyW3c7LYtUU8ohG8Ch7nVtEp3qa7VHUBzCPXL",
  "key40": "tRnByq6EfGaGnVwK4wgs1SjAf9xG46xtCiGWfg2vsXfqsmpaRnngZkxfxQXspFgRLqRDCzcwJJRS8yZgY5iuzDG",
  "key41": "262Wisg3sHbSzSkmo77UP1tdv4JZzYzC7U7pL63UtDDkc7D7nd1YcsBLFERUEEvQ2fkqTvxcKYexZjqGBw7oU7tW",
  "key42": "NRwZP6AU3rqhso8hxx7Y1VMaps5hS8nQx9jqLV7wSsJTCmAnjYiz3JkGEGwTrwrcttTPK7tscm4vGbV34jFFLQd",
  "key43": "2HCWeMvZmRoWPe983YopH4AX4xJ6PQ16ua68k7f6qzMKnfFboPe3ywmmZMspz89oLXvmcV8ng87Lh9zX3UdVSTwJ",
  "key44": "3BC18hdF4CuSpDLy2grtBiYvqeK4FfhReM4t2jXHWiJGmJyAZ5m6KzdRKGhSuzQH48pcYh2kWWng8PHYEy7QBsK3"
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
