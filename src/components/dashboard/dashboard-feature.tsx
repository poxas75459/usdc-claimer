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
    "388UMJgJ4jLeA2vjH3AqsbihtcjcnX83favQy27bKWh6iKbKmtygY5rJVVF9TGFPTy1PqiGr9fVAvhwHUdUd2m5Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31iP1rK9XaWwwck4ii7SsPTh15B7DH8K9QiHJoVBf2S6rre3xwfyqcKK4UhQaua7ZvQFmX2evTY1vZ5CTxC3T5RF",
  "key1": "DwhfarMTzcpdcmCAK84EYwRmNDziG5XQyvSjarxzPPpaMVCC2nrzfvUwLD4bWa8CUyrY4692BRWqZAZzN1UfkFa",
  "key2": "54Fhog6GG1y4WDUrszaQ92XVCAxfoYysWXmWdm69MbdFQvtgp1XJdDvboY4sVGW3HqWqHvfAquNraG2zgt9JE2QG",
  "key3": "5eWdCHpb8NiimcwpoS4c1omQeaGcdJ6NynJP4sMLLTgLUcsCi9FF8irvRq2HYDmdSuXTnmeFuXAWy64xc4t7UfA7",
  "key4": "5o4Wy1CCuZUQWJ3xnv7NYdFFk4pjHDibLjNCsmh41xRM3SLiguewnn3WiCtbiRCsbuCd9JCuzKie9ndf9DuhAsLA",
  "key5": "64ogpzNS2Lry3mU8BgGC24zcQuCKcRDojXAwmM1UxxA9GokcVi8s3qxEY6nPxJbyoTBuEZxid1bwop4wuLsvvqp",
  "key6": "4VQZ8oNswEVLu8QLKxXf9Bk8cBYQdnf9tMHXQS5WPJp9XgurwYrv8mMig51RJVd5XUt1fAympNG1rq6b4fJPFXBE",
  "key7": "4N3yzWuCouyRqc3dfMuYLDNx1sPzGqwdjiZ9McFY5f4WLvq3bDcpZGUhxH4kbHaxLqBa9ZjkFMq1FwEhNc4uBKNx",
  "key8": "1Q3fv3bvwJ9Ur3hf6io7NNuxKpHMAKmfopDGmLKZVk1NZ2XW46fzUtJWwdLkwJAHGHA3K8Jwqdt6HaiaDtbMWGG",
  "key9": "64Sss97pNXDNAmBw7cVu72oWzqJLNm5fVnvNHMBGhKWCdzffXc8itmz7XZPbuzmkaGXvKaufkGQd6EwcrMpmWaWr",
  "key10": "2cN8sJpGEKCgBBCVe4DtWXBU6WCh9k7Hpjg8qCQXJtaRbmxWvkckKLBftu9rLWdP7bHzj7xLX9WEYFJXhF2oBVuC",
  "key11": "53pWipqEREtmvcjojzAedyQEzciPe2yHFhr8EPwvDACcmrFHL4QmcqrqhVJPgC1vNZwt7fnmbL6A2kuEq69ZHLjp",
  "key12": "4ja2MsxTYufMdE6tFFjQpinHz1a9QuVmfSbqW1756BQhxo9YFkg9s22Mq9zZNhtiBTgbxAwU6Qh6pLkmVSw9JF6C",
  "key13": "zan3BmEvV6oWKCAU8y1ouNCic6LMZv8mh7WeWVpparMwx3oAvkYWKtwwvuuPXSco5oMobbVP5sr2qqUhtv8FB1V",
  "key14": "oKqnupLgydXNCzRKQ9thar3E7BAEwFW6nCuPkZNQfw7sa5KxjTKmhgc621pBNrp5eUh46wudDmrMowGesEboVWU",
  "key15": "3m5pSFQH1FqoVWNM7UNi4h9SgcQp4oUYriBrccqC68GP4uq7cEYrij1Kr8UVKmEfhberieFvpQDhmPjwmniK5EDF",
  "key16": "49hxBqrBTZt1mufXWQ7b1THH9UWPNswGNLR9UbEJVyoHL5PAutiidhQQoeNzLJyjKpV1fBW7fERyAa97YXenaHxf",
  "key17": "38s4KNRFyzMB2apVrZ4KqeZR8PipUTUewBxXKrsLJZEq1YkCpAhSex6WgGW9qqjBfpk9uNtvNs7aYq2wnS591Zo9",
  "key18": "5aVvnL4bKiGW64jPR78NNWb1G7LtnfsYBdAyhauWgpV4X3CShFbJWsKVG6R2u8TUSjQPFBSMLLk5aFVMWkGmaXRi",
  "key19": "omFckKjtEL1qR9pHFNE91ETYEnPqxYd79JPaLmosqYUT5Zbru39Vcey9n1DJjqrhWm3mCXUnRa18DxidKCxRXG5",
  "key20": "2mSuNJackxYPLgaz77dHThUFULne22dDWBVjiPY4i6NkCqPxftZabXuRZcYZFosNcwDPaMCAo9rZMLcz4ALix31y",
  "key21": "2aWfHVdamWry9G2cqk6PDoRxtwP3Ra4Kf97RHeC4azyXmB3pMYvg7a5XnPjWaCVpH2HEJkRybMtEDJ3E7JbNLNiD",
  "key22": "EmGT3ByxYCiFDc9az7h2Y1E3DT2Y9cSG2Az8p567ygraRAzr75rNw4Lss5xhcEnyRgLQkMCJeByPcBiiHC34ZcG",
  "key23": "47WvFpiMttnb4zBxRH1hmBjEL7ohasWTEghRCyqTgUQs3acuFZ4qSmgm5MRPLZKME5Y8iZMy8hhHyo44aDZdzTij",
  "key24": "51B142jD9qaCDjTQqL6krQAo2KYdtSpxSeE7aHSFrDfysdkouzKtcLfvyBmHud4M5sjy3j4s3EbFdAnkWLoAJGMU",
  "key25": "3VYdjB43BJS2xYQosb89JKES5d9aaxGcRqk8M1W2h6J8UbcDrgse3tKj3x793V3gRZ8qWsHoiBrutDkpZBTzSPVW",
  "key26": "49WXAXtv415qxQZ252GAodAch2y2cEsKrigXEXFTMmt5BdzrnsxmwmTVKPes2Kf3ZUwcGKrEM1cCnxf4uTsbsdpA",
  "key27": "5Jad8xS4LF79Cey6qX7AS3kP3d1Ebbjk1biHhW2tYFhCgXgiQtVEv3R5vzoGJKCZ5U2TDdX3g2mGoNi2P1KMTRrw",
  "key28": "5QH9Cc6qXxCwDpxxJraFKs925QkoBidu5grmCGcGtKaSuzrZBCrErHfpj7e1NJWmeiM8UdCqJjDyUeuCmrBe8roP",
  "key29": "YQHJxhdskQH36994Q1Dy7Ty8u2S1qtG4VX3DvFSEchDxTcDPmYeQsrQmZiqgQzCnU1Q7QoBVdCq4TvWzanCHe2c",
  "key30": "2nTHGqSTD7hUY7G4kgY8FKMJAZdBDZhP1erDoeVJcYnsersDUtpY6T1RQqiFK7xqn9XJiUb5AZtYYVzikJcY2hXD",
  "key31": "4urV6pFm3TEv1jfUm9SdUZvz8Sip5yEsCBkBP2DfaUKmnRcQ13PGeTJ1aAGAmYs2xme12SNGQBzB1KiHif1zTezU",
  "key32": "5xRtz2RYqoekHL5eH4d7zoGnz7FAaaJ618js6KnPLx42eksrcHiahSjt2RMn8fjNFtMcu2kSTUatKQ4ogYRApK3u",
  "key33": "5pjYBUjFN17eatiPaJEGqHHZu7Bu4meJrtSXKjUEsyNXfhxyydqq54JFE4bSPf3cuDQqfVkZ5T5XNd5dzpAxvBYR",
  "key34": "2paNkk2GXdXso1FDDCPgEcLURL7Fcow4o2D6aTJJCgZCz6oS7P7hVNZboyZ1FmYBcBt2JQprTivGoQVeonkxiSdQ",
  "key35": "GbRcPFH4ZjUmABq2XjNn2gSaiTwVYTD6SJ3sQRe13TxsaPhkWT142R42riqyZVxJcVkmshsN4Pi4STXCz8RccA7",
  "key36": "2efWjLgtt84oVSk22qEdCnEre4im6aMbAnKJvnta1AKZXQCdF18Nbb7NzyFooLmMA9VYoHj2n4MYQdWSsV3TsgHh",
  "key37": "3KL5iswz5DF4Dkv5fGPz3zD449ttT1kZnu1itsLkMUa4knqVKJvhiHccZxLn1oyeNx1vHuaQLVwegM6A5PwsfxuS",
  "key38": "4X7P6ZnXZgTsqrEUhXoyuAQArDCUtE2gZunwSr7CKNa3eMipkRgmtFDebnsVqetRzrEZVKN6rTRbL3pC7QLub6AK"
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
