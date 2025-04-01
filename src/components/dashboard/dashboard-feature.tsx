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
    "3BbEYf97sLTadbk7U7KrmHcvrkaAVkH3fM63snwLZd6anwhWLoQVqedaGQJH4pzGjpfoA1woX3T8meUBRVJbVM4Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48Pu1WwwYRRv6JKHXMidF6nCMaLX89bumWs26gait7aKAuqEyob7G5NotS8wdpKfbAsH7WYSRPaB6gBugdxQidn",
  "key1": "29KDesa4WDgDN3WYQ46JosksGRCBojKUPn2Smxz5PbmDCGrirtW9EE1RVScn6xW2CWYxjyLvjo1K4jzXfWKUwjSt",
  "key2": "2EUy1FCcWHt68fhwSPwJkBDxuHD4nj7m4UZ5rx8cbjsrjKURfDraRiC22nsMM1EsgGe2HtQKQTEz7mk5XeRop4oQ",
  "key3": "2EpJZKwuEfjvZFgnerjDvxQrijMPDzwqr3K5rDJqmSojx5WQmeBxwYG7unBvkZTfHbHULe2dyX6Zhv7MAmeodEnC",
  "key4": "5aQimgZt3nj8dJPrw7VfGUY2jgNmwHtmDfxD7HjgVB2SpYucWzKQaFJyNLxLekVrYV2dA56Z4K6Bi3xwQ42Y6nG2",
  "key5": "4U4SaSfGiED6HPA2MAXq1mBFnUMjqSUQRrCx8eGBasjqt24jqgAYbRtc3c5qkLCXQaJnQozhvoWtycZnHnuU7FyE",
  "key6": "5B4S5GYrAk16TTDx44Td4GePLgEcNZq5rbK4LHkpRk2K1q9Z8bgp2NJauibR4nJ7taEkFZvKXh5R8S9aTFREfwbb",
  "key7": "2gXpFvifyMUzstFXs6pdWMKEwzYAs7mBmVeKTo2gZAzkWWcshf5ikhCyMBKpXQQJJcG5frnURyRuHkoHzAtUNa9n",
  "key8": "382eiPwhsmBrRq4Sdp9oyxbXFhVDv1HKg3AbXCa1fSjiBhCYB5LWNBpZnHisa8f2UdUu9tZ2v7U5D25YRL4fGeve",
  "key9": "4QHq92ASB8fP81tENgWMjcKrsW4BKat4Ud2CfT8bgHENZRjcdryJnoFwFSvTvt7QnqVye8pwqQin4NUPmCE8KvQX",
  "key10": "4j1FZ5qgGEukS9sNFU9LaKhcFAH2gxDjJSDkFVjwEggcpPG7tRhyUGHbyRaep5peVdP3r6r5czzAoAZNm3hs8swo",
  "key11": "3EdkqdbXi9Aaye6nVrvPZLFu2wzkNmPXYeStwLQaQw3nVGvdSMbJozJmJgZKVnD2kCTjFWAfMRHAJfEezc2fzRiG",
  "key12": "5BYywJN9vnTMAYheNmRgkqKHabSes7JY13XbratZTzfDHYCfrdBFe8aqHswXTRvka7bRfmrieN4tVjpiZRbW923W",
  "key13": "5u4L3pvqvd6Yyja4fv3PaZnS6TvJWMJgcAgHanDNtuSVQf5WryVkWAYZE56LhULahmwY9WKgCLCd7rrtcTzSWvbJ",
  "key14": "452LC8AN4XeLspe8rEEj2Wth4K166WKzS44rrkGMfMrkpR8YdeNRtpYtWEEKHvC5A5VA9g1hFzvn5mfjj5jGATV7",
  "key15": "3M7t4zGUNGhxL9D9nkJxaLv1kCy2hmHGFazJTPEX5hjfZjapPA1PCr8DpQw8q1rc7ibzghnJtbb7jxznmwbc7GGk",
  "key16": "2ZY77HpKGE6AjGWR4kPjZ2fEw6PfPEP3eJVQMZoKcVZWJpKmZ9KrDqJmcSyNPExNqH1y1cGwZ2mdZHcgNnFkXxiQ",
  "key17": "561WsSTxDKhqN2NpZgaJVNPJu1NZj84HWpVnh4LvMh5rtE549T3Ysq7U91DXx2oSGvADd86BhZxsnPZ3nhTAfYHa",
  "key18": "63oex3hbJEFihPGpKz5AUa9goEKochhbTJUb7YTsbj8Crk8dLvzECA1mjiGCPghjcTVSwGpyxTYvMhgQhz7eu4Fh",
  "key19": "EGYSex2sZpJ1hdTJadSefMo9QGA82KyroMMbp4YvCAPghYoRRfaPoTAUWEgYqJRm7RfDVKtLk5LCaLPRpD2AnBG",
  "key20": "38ZaKHaeQHTVq6xXbAEjnJnWvRLdWTTtQpY5BoLpGet638JYyMSAD7fKVhp3gE72vG4exNqWNxTnCX1RWkUB7p3b",
  "key21": "sZywZsrXt4rTfF48TbNqNLyCUUDeGqYiVqiRBQsDMQWSMHLReaAaiQhtsv6UnKg3ibzpYNG4qUMd1fKr6wrAG7q",
  "key22": "3DoEShe3dGwox9B5pBAHiQ3yUx1zgDVJzXfnThEFnxeiUXvbToG3Wn7z68KHu5GvwVu9fDX9th9iDkpYDMgkGsgM",
  "key23": "3H3DqCD4oLgZRKDec7DEQsRB5RumcYAiHMMAfectyLSdTVA6z192wXqwTL6x9LJLnPK77gdRM92jqgFCxtJ92yfD",
  "key24": "zJ2H8HUE2Dd8jMtpHP15eWz288YAppzgzTQeHmmm1mD8Pbsz3tkGu5AuMqMeC31VwiUE2dD2Ca9JCB76JZkvz96",
  "key25": "2GdHQueXm9KHqsCYaVGzESCkePswAsd5d5eicNhNpj195dEyuVcszCTdQjCCUJGt7aRwH91hajSv7idMurypnfLt",
  "key26": "4JZ8wMx8DDxUthRp3RqmpfoD2tQZpAAUfKfVuvQ6D9eAE4njEw3tYJ68NFZ9ypB1pfMSuWeEtEVBaRsWUTjmBXxV",
  "key27": "NA8HrzWS3yGq9RFYcwXKjCsYVoCQ5gfY11pU5Rnh3MkdEg9BWhtVTTt8gFHZHcekLrKriuprikcuuconoR9WPEx",
  "key28": "2NWHdLvrdqGKmMg68Q7RCQUsWb4xzDp2y5CSet27gcCkjW783xowgrsRxM9u3dACujWBXQWmPd9EV4dKQuTenmAL",
  "key29": "5QgU77vtPm2E4c4TT6AuSSUKW2tKzBCsQcYLwFd2xxUtYdtKxydoDZsTHpFwUwC9caLVJw1cufppbEFRscWJusm1",
  "key30": "5NdmoaUJSqSZ7kG3xHkJgxRmLaCjhKAu9BmV2hWmNsZJLt1msA3jCWU3ZHcniqvrHY8DT9VChUR5Vfitob1AGfKJ",
  "key31": "5QDcGBa8DvoeQkpMKqQz9tkEjcKYhLpqZnDqaC3CAsMDkJ3LZZSgzWuMZahDYfq98ePt2XRpA4jp1yRbgphNX76D",
  "key32": "3cKx4bR9ZGKN2up4e8xAK9nyAHKQVD5pYyBBHc1CPMuapUYR3Fezh5vAgC8ShW6cnZACyUcWAvCABWaWJwQCy5jM",
  "key33": "4ArVfwiRTUPwZAzV8AGbaVzuSE2rW96yLPSR1rtFSBZi1rbFyHsUfKLotjYbNprpuG6NSzjL4cXVPCZFbKxEwZnM",
  "key34": "4s39q6UuwGnMKTK75RoKEhRR4ADPMaAhj9r6JWK9nvgsZ86XmrsxjwnqigJ1C66v9t5GwNUHXLDXR5pREjH28ZGS",
  "key35": "X4xLmLqTHjPzLiWt27fGGBVqipx7G4ZoMS9UWqjstxguHQQnaLLCxEQcqXENjMxN92MuYj75Sx1tWVwbFvwHvaV",
  "key36": "2fNqYSmi5pjfYanvrUSRW7aWB6S5gYXPXgrrfw4mdTE2iHrvCempw3rWQxuwSQHts4GFMK6LsVsWcTkDDw6HUz4a",
  "key37": "3JVXMRTBcix2tWbSFMpJx8qmrgzsX5EPipDUi8To4utN8fu8TZ9PvLa57VJDmPQMaRX5rEe1VRA4usJd2qRfHTXd",
  "key38": "4rqib1c7v1zLPdpZ8sRYi6FrTzN44GTXgdHCM7BUEJdiqa4ecuz7nray9RmUDDxputiMmwmeYgRYUtgjvVnbdMdg",
  "key39": "4boRJbAeWm6KYH1w3LYqNNYk4Bmg3sEJohWXh7PS8QEaz1X7zQRpeTXYownQNSv16gtHi9trATF4eFBSmguw15RD",
  "key40": "5z9UfRxqHoRHzmhuLyCJN2X3fT3E5u92PvKvPZuhqiLevS5qaU114ew17jpJ3kYBfR64kFB7PyU3wsjYT3pg1xoo",
  "key41": "4koYLvc7Pd4CLPrrv3i1TN9WEvxJqNa9ygPmHSiTCuJDGHApoNRpcoNAPaVh1MTtgwdZjFEFJuHvHdcM6Jcmrndu"
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
