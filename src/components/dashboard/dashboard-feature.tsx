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
    "2avMsqXt4UEXDkuRctRcmW2h7NtzQvMfZ92ubgMetHchAMxsVuShKBue3cLMRobQgBgY3h6KS8eAPKFSLjeJHVGz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "J6rG7YFb7pB7JdXXwoKFVC2X64RfNLT3euokTKk6GLu57XQgCwEAaufsWYHhYyhbScfyuDqdJGf11oPs8wspuDi",
  "key1": "2fFgfkjVZ2bHLqUX9NKWsxvdCb5UW8Aqm3f7xMGBrJoRMxSLixGbFCjaWzHpNjJBNjL9sdh8waLSzLbZRKtvQZuC",
  "key2": "ftyc3z5mYsci75CcSHXY3PyLE2agoCbAzdRLQYiPH71wqn4XGyKbGmfeokteCeJmpgvZ5Mom8udwRWVAmBcajjg",
  "key3": "2znQkzd6eN68Pozo7FJDLJs3m37vczEGFVkwUpdicT9kprm2yDpuz1QV5wDcf8BNkEJpvYopnnHD7gupB771mqpx",
  "key4": "3xwVeeNhriJuxyxevcsbiJWdCtavtRXh6RRueUzNPXnoqLRiUEgz9KpV6Nxtyd6hQWxBkGB6Kw1nuuo4BdTTaW3u",
  "key5": "B8gARBGVY1WuVhpqLb98EG9J5KwSAbABSQfDcyio6yAXnfUBNNypCufEfjNsgfGDM24RWoB75ueypySyPXiXNJ2",
  "key6": "35wSK7mvKmNagSyvf4pVXdqHy3rmZZwcKZ8RU6Ctu8ebrs9XW2oDsPyz7bx6Th4g8wNuRhjfn61WNu9NPEDuJRGR",
  "key7": "5hiVSpWg9jHmaVB613CGb846wCYVgimwH5BSopagCXpRQzLXc5CwAUvLhuyZqSxmGuVn4DzcKP1TBjyi18APNRMu",
  "key8": "5YiUQgernK6jRQ1kwQREn54FSR9uG7nMn5LcXiPH5GjgVNQJxbtB5ZFz6agQyrrTvVc3EuxjvuYZHs8zBpHNCkq4",
  "key9": "3Setx4WbQSewbjCmXMVF2v3B7caaJZs6Tn5CdHtVhSihdpQofMn5wGH9dkiV4NWHfQgcuTB4s4cQYCsvviKZWke9",
  "key10": "9qxh4FFjUbwsPkgxSTTGjaBvfLvbW527Qw9DQHkiRCgPW3qDgQGk4NdJruJcqC4aHBNRtCLTV683iQKmuCyR4KQ",
  "key11": "2mviFXa1wU6BBhnJ7hM1bFBmQ5vvFWfDgfRW9Vok5aAxt7jVhhutkpjEmRCRtdwPdVr1Z1y58kXf6BQDMEPDqhzG",
  "key12": "2udQruMtVCRRHDqaqrnsG2PVfpnkKWTUeDGTri1DxHAxPL9mj4XSumH3KhLzWgob1ePBxD92iAmv59KhQ8tkraqL",
  "key13": "5RfhU1Zioo7wXKtikT9zh1QHNHkDeag5h1oBMJS57hj9iK87dmnTHeNkdeoqdoEi2wwL1w4mm4Q64N9ycQsX8Bgm",
  "key14": "2BgzFYmftCoakNpVvZbMTdFqNSy2kggoKEyB2BzTMg8VyzF6JAX1qdZCzLR2mppCtKkyYDQp2gmJTcZB1EyJyARw",
  "key15": "rbLUgZkYdpitTUppg6X3rfNHjZDHiLYA2vmRKUVRny3V3qXySn4Wyq4noZfi1XszwXKaguTtoK57iyEG4QzUZS4",
  "key16": "2Kh8MeGAN58tVVezJKHNn56RHenV5m5ziZzPPzJwZZKMFYF15cBiRH7EnXxc8XhRZqkBXDMH3NsiwubZwwbiFREt",
  "key17": "2FJzU9DYXWAYuV1ca2VfeVQbma8Fp6YpBmBFiaqSkRimfj86PPMH3ftE7x6SdWA2ZjgogphDNtyTBaVBFrfJ1qY4",
  "key18": "3z1TNcMzoPgcHH68QRhLntsZRb1YF76gQejVapD5FnKR5Tf5XLiKVjnBZLyqSTLCTTH2PsQDzqu1oW9f8d13rURt",
  "key19": "EvERJhzuCdkSr8YPKsTqPzoyQ3JPLppQ57Ar8cajtQ7gpvrbn81HTPvcgQ8SJGYEz1Uy7XqjYGwswPxtsGUMkYY",
  "key20": "3R7R3sq4Q4FMRJByie6CbuNWDWutzvgH2fNZCnvz8drmFKvVvne9hQy2gdBH6yYcRHAzgWBY7D6pGjq911rstahs",
  "key21": "2BamQNSV61r6TqirXb6UvQ8Rzf3FWZMzDx5tvRGmGi9iv1LPhwXdcEPPRp32L9iAsWkdoZ2Z2oyMMeiJgbTmTqv1",
  "key22": "4q4WFbCAKFqAjfiactBMQZ6agC9b7Yk3uFUrUksSgVPopRty3jqYeCMZaxC5wvDpGJRNSY9AHReQnxNnKbGStcuK",
  "key23": "3ZnCam5YFh2tNSMdRcg8LCPADX62hQTF82VVG5GtFWE32TDcLnYtXpZmbHeUpQa6gW9KRi5nueL4d7qJjsE6xLdn",
  "key24": "5rys17sZmuxPUC2afCqaGq7YdW6rp3ovmPacm63iLF93cUxLw4No6WvGP1wzuhdNeszBjowsrD3Hbmt1goGAdcNu",
  "key25": "2s9REXFBn5QYncyNXSFP319knCo6UptNrwxRjoBA9SozHBxs8LaBj8jXpbemDseT9peoTiZhpam2chDvogsHAmmH",
  "key26": "2F4dKqQUU2ybafBotBpWXCcXCwWhQtD9BhrLRTLYs139mmg2wESAbzgyre4FF7BBXLNaGZr1BPQCT8LAKR5zEXE6",
  "key27": "5zPiebBbuECM8SAHe78xUkcbr8GL9ruP6V5hhwrR5XR8gKx27xrTUHADVbSDihAuikmMUstuz6QBZsfEs7VwmsfX",
  "key28": "4M9XMc9qxVrdsFHtDeMrbvxpKpZqU2kiRPty9yMuqW4s8fSBwmShQCDk77LjVqujspoBv3Eyk2ekfwzbQCbV3Zwb",
  "key29": "3Ruvn4knT4VWjemnmeqEeDitWHXEBRobJk5Gv7Barpw4otv1mZyvnT3F22hFjQGipktcr1jzKsLjE4gwTZMTvudn",
  "key30": "3bhvpSwZLW7ZC6GdaDRkZE7NjuKFR94EC8pBJyNTsH6rr5t6Z4RLCzEhBbvUS7y8jGf5pRziCeUkAEFs4taG9Kcj",
  "key31": "LZjQoc3o9KiMhBF2AuuBr7ufBN4gF5EjF1cESFKsLyfaaEffRfNyyqiJ84AigwC5pXQdyBqnVrrqyNJUvR6SxHX",
  "key32": "5V2jpUiqRtN9RMgd1bHU4Tby2xdUs5w9LeeoLK9oQZLHDAwSgxC77AnnGx9ZarbDvgKdZiWW1TQ3PWJaALD5cokY",
  "key33": "3G1RZBw112JKhPypfhLjrKPWDXEowdD3TTKm1U7fdhbhJPUb1ZYtTunfCuhJ5zgEVbcmR9eEGCkmn1XtstwNBKZC",
  "key34": "2eQygyMJHUCE4HDhVwvmZeXQnyqJtkp6cwWQaS9GPsnXBFhbfWiUNVhf2YvRd78VvnbSXviFQrfBiNt7cYZQ3qFU",
  "key35": "4aADMft8mtTX5V6PFJUPREjyaaYSJZwqQFxYuvVV3wv6esXEk5rq8WHPFuUKgYF8UdbP497RW3piEohh6sakoAtb",
  "key36": "5q9cryyYHzhSmb3AiXJvuwQikjZBwRLeA1sZjHHAfb6MQFUYFCNCnbHvDPo7Knd7vkwpVmt9QELwQj6yBBTtSUke",
  "key37": "5kDcz9N4mUeRpSz5wWKLyuEbe5KWttnrP7ZowuhsuJe8ypJfuocomyK85tQNorxGRkTCKwQUGcQk4oh2X7Lqcn8v",
  "key38": "5wAXAHwGiXJYfSQ4N8pDSkoT7JsPtj5nYQJtR9epMphwU1zayT5eFi9Cz13fdS4KZU2pxWdCN6W1DP9uN7Tgeht8",
  "key39": "2VSWZpQKS3wMKBKdpk2s5stwvafKF32DVzNa52YgSgDf3dMRTNktaxdMNr61r4FR2UxQJbj1ZGhbvDi9T3sG4KFz",
  "key40": "2DQhsnuAZMvnUC8AHythbwpvThNgP8dkuvv1amQcu9Mz3wVowoEHdhLpGtHTpqkXpRDhDT92Cy45owSoDeBm8sHx",
  "key41": "5QP9ZbJUNwtyTbPAcEUibkq4bEF83Zh1dUtAmtBwFZomkS7x1w6izeqTzv4eghY675PMYkiv6LFciNjRnME5FH6W",
  "key42": "qbqPx36iEBxkCgU82yMwrqpJ5SYHSSy7zYpuB3Wg3AdgrNL6ZS57qapPQbpkkuFB4mM2rKPueXw9MEhzsspbmAJ",
  "key43": "3jmDPmMnxs2NVbWX92yx8XHQ7oJjBDvGJGXdSgVgTBfpn2qTqxPeXy7o3FdRJY7vQCLzMpctUcza7vBgA3iwtTsH",
  "key44": "3nVDL9QSBXMznJnzVc4Q9GauX5tUQNibZX2PswivTqkhQU9Ub1hBDpNZvBVtYCbSD8mEXn3D9jAxbPpt9z3tQCqU",
  "key45": "4W6sAkdfBSWx7sekJfn7cdays2HExoQkkT4fkbmGq93b9X4gP2m3J6SK8XLsN12uuBb6cRGqzfqBLoB7SXAbh2SB",
  "key46": "3NguQgHnaAmXfQvf5aHR4aoGWtbcwHtoFGBZ6inD3AYpZFvDoKc6diy9qCohbbC6szdfE5W1YzfjPMqwbnRxBpQz",
  "key47": "3xc2yTcdmzjhpoxPPsasp3NABxkN4gtr6sjeiG4LxBDrfnKcxusPYhn66BBdfnonAeZEqJeQE6WRymBgraAPaQcd",
  "key48": "4xYdVBfcGNp5XdtYDJHbT9odhgKKTrTAjnYMwvt8eUQZcgiUSho9egmNapcNDmacmxxGKyjrFLYxFHLALCu9dNPa"
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
