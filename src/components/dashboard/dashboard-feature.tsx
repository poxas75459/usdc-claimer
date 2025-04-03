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
    "UyduKicNA7gPEoVp69nhU2xeXr46kQAiLSrmr736Fj8XYUAnEG3P9HKE8ZaTg1HtprDJdXYedBuyYQEdJcGtPdq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tLX9bPsM6hyLa8HikRSzXPmKj5NtM1WJtyEepm2Au4bx18u5hV6WvvLfACKzpSqwkUdD6HwaAwbkYwNcGAsuypF",
  "key1": "dQQaocr3YoR55fTz9moMjxs5MxZ5QmhZsNrh7uaHRTUWR9MfH53NUtqsc18YfYKsTJx5MrZawXNRgPgeUpHHgUu",
  "key2": "k5ZQjFiidNo3wwEay4GPN8yLjAnbPicSD5QU2bS83uyLxkgAnyZvLk36W4twXb1we75Th3uYC7CnhwsWLoHuAKu",
  "key3": "cupKhx2fTiVpkmTHKVwJm1Xhyxa8YpZYGRjY7ZfDzzp6M9NJMbAzggUvmxBF126KSckYkDEskg1bmQTG5SeRzYp",
  "key4": "2zJCNrTp16wmvR4wx4YayHSb4wpKVvNp3V2AoSzREiX1CubUSvoCNtGCQmYDtQozQrFgnRRVediDvgA1fDbHJayV",
  "key5": "Vb9zNf8aMrPKs7xTZEAXZN76DPwxzRKrzmW2jh6RnBWFdn32bA4Svquygpdi37AS6RVNX3LgSdTvwaE5yo5KDSU",
  "key6": "TVQsVfiqKwidDF83TX4vjeJ2gCBPVdKux7BMLg8J23WUc6Pnv4Z9vyQnNb2XvoXcAZgH3BHVEtbrBid13Ho8ovQ",
  "key7": "37EJZKyY7ypJyFkKuUdPzF8p3tatXpjW2NNQ5VG4PTDDpwBNPxoj6jnFVz289M3oZTffMFmvGA9m8fTgxbjZzEXE",
  "key8": "5vWBGU6eKkfzNhk4WtNfCCpmN2m2RTW1vKrKXnnj7heTx5KSmvNnRcmD8QJNGmj3fnpQUXBG7HStmH9K9Enye3PP",
  "key9": "5XFCKDxJom5FAuSbSW7QHzVKBBGw9maGBFsW4XNCeiyy3FabupfsVJroLfiKceMbMjT1MCdLERzMDMWep6te2nVZ",
  "key10": "QZKzCV1bQ2KX2yeTwAPXqHkd1ZqDctn3o9Qcgd8sy5Fp3PYwzxGU14B3zyHQahpniazhhDbqA8QGuAwDUjSUtH6",
  "key11": "3u649dX8NKKmFLRuy9fFYrXUFtyySqy3PvLrorEowJ3hEM1BDTbvFKARUkE9wCEcmAJ8xWrCSMSpM1NvHySEQDjY",
  "key12": "hJYnFE36x1Xcmh58eCMSBR7K1zpjdWduVGNFGDN9F38pigishyGaa7BQ168kwmfxtYmxSEkuHupgBJZiY8nJxpK",
  "key13": "3CMzLUoX1xjwNqvVXcbTMhTE8gBihEr4kSts23uT2xgZPLhEpTvRQN5drBJ89Pd7QkAjBcpZCXCKBs6HQEiBaah5",
  "key14": "2kci1REJcws4knaJrKYrmnKgSi39zZuE9qEqTbZGr4AxAkp8e97pS9XCsH2TSCDhi4Rxr5MTPTtSXa3XhqJZHCEC",
  "key15": "3UVgZGLTwMyqsAZohXz4F5EDoPbLRef6BSqhxbKeB9g61rHkz6npB3PGfR1HP4ukg4KXfzEuATJjST7qRDTUtxXb",
  "key16": "2MCRnq7XZzyEnyG4SXbGwKH8TaLagP9RCZpW8D7Ev5BQzbkD5DZZ9urNJXW5dbBbLSo8FwfGBhN3BWnZmAxUmc2F",
  "key17": "4MFCwnbNej3KHY5cuqfsRJJtqnSVT23HyvaVqtYPAHbKzRpLvHcpUtYMP5tdHRvyaPAEznpivcicx9LCQ3WGCQis",
  "key18": "5oFCHTAt7VmtzMmPLwpzDCvC66jsLaJ9j3ZvJ5t5ESoFYTag8M5cgQqYnKxn9Fa8Lpw8jnnzezFN1UMivGKQSV4u",
  "key19": "2MFhvwDRGWSYnuYjrfAeB1X6E4gb2Uw44WG32vsAUbzCgSAn59ZnYtvAuV4C2cBBfGcbAMfSk5HN7YdpaRk5Ynje",
  "key20": "4R5GgEKA5AmGZ5BmtgdriHe3Tg5RJWwT5o8kHigkpvetE9i32PiPo6XSqvKosD5iMAspe8oq6TpxRLWHNoERow5E",
  "key21": "3AhHxZDBoBfyq2QtvgHPKgFLMzoJgt16ttLDsUx5fPz2rqDtsiNhbQZHkq1V4fdu2ahSDDd4zEPxRCZ2mKqngJwU",
  "key22": "4g7RwYPdL5Vz33f33YtqNUfnguMPQ34Q9pRhwtT41eBPfjxXBVygeZJphRuDp64xepJ3MhJBeeDMLUJPBxEmSuVr",
  "key23": "5fh2FipjpMTFxdmZfdtaVDJTuoJrMp4sWaa7JZBHkUdTejLnKzNGWNQ1EPnTFSDrZdakmEoE6siKx9NCndCZzYLr",
  "key24": "64dw53hTC7Agbst1fFUeqypGMC77wWGN9hDoqjujjNxPWAf8wT4aSgLQ2Dg3W6r3rSLYSYb27cggB7VBYPQkheAF",
  "key25": "2Grk6tQFmxFG5WQ6JYJ43bmrGw4szVkqFS9pDaub8ZxBvTfJrhxvBjXrsQwrxZXB3kmcBo4xCNFCQar3ZXdZy5rQ",
  "key26": "2yRafj584X2zSEACHLqFJajNGavFwSHtPLezwFXFoKqYqUKSsMeK8sTCmWfbupoH226QiLZmvt34XuqkzKw5Z9no",
  "key27": "FEqRP83y2AGMA4ze7s2i6c2La59KfTLjBujqEDd4EqkNyUD2fkbGJ8ipiUKjYQ2XMdQLu8SL5yt4SRBvDnF13G9",
  "key28": "3A1L3WRnACGkvGeWr25uyHrq1RtjpbotaEu39yw1SxBoLpnneXAXbp91h8AgAhGgpKpFSAmN2DaAGN9Jeyhxpmoq",
  "key29": "5S5iGunUdZF2din7p73RPUHX4Y4LUUtPVeDqkBC1ZiYfXZ5HXzD4dQak3ftSQYZQQG2Q4GBSTHhzDuPxg6XqKBZJ",
  "key30": "5hbXTDZHAwNRZhyShWTX9sSLKdPvDfYcXGuJS3QLiPrakgs6Z7wx9FBWShZC2GB1zvj62wtB9ZrNwW3ivXUR14Bt",
  "key31": "K2Wg8ZSnKftYt5tUPLqqiSEQVsC9nqyzBaDZ53dJTfaYviB5cJFTs4UxMmyeejsV2ShPiG1njhUcEoiwbiwgJCF",
  "key32": "2i754EbfrB1s8ZDu4omjnkqb5evPmQHd295iFTi4rLxMPD7F2SGQ4k9ALaathAZkMLQpHZDFJqzXrL1oNbM2HnHh",
  "key33": "3qyJMMwmcG7o2FqtzzmsUV9Q4q721QSebxUdh8EDzWiSG4XwzoikunhAwDcm1TTxEaPHdLvtvzxJTaZL2QN66fvv",
  "key34": "3CzaWELNn1k3Ti8xLaTwo53XAzdhica3zzALMZar3q1dWTesUJJoM5EJoW1rjLmVEb5Qz7X5PHfSpXcq1VnuwmRL",
  "key35": "4aT9MXZDTEuQrjrfUjpPWQ5h5FE7iFMUKLvC33fsXoPpWeaDpbHxmmY2gqYrz32Dcy3qmhbrPHWw2Uib7quSr9V2",
  "key36": "aYS8bv5EgkxHNrqet9h7rmyUza71Ya3Q8YANvFM58V1ECv9YHHSgDgjf92d8iB9T92742mEAXCQdbft2kyBkhBN",
  "key37": "2RduNmxad2TLgfZ3as854SnddmYfRRTcPS6CF9Z53TBHV7pNcZeGoLTp4VnSM7mrtnkZCqVYSnsW4t92fXzA9ox6",
  "key38": "3TDgCcGrssewhTYdRAFcfBvzhtyHgyE3iT7Az4fPn88xWq56bdGWkvAhdNBuq1Z4E9CfuDi5Gv6KkMFUazm95hkH"
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
