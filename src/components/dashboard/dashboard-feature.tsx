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
    "3jSsqdsp1oduZFNDpYJEHd7eFMTCdNHPSunX1xnR8TshekxE82Vn1FGS9WANM9Bfx2u5Yq6kXzuk1YMNeJP6ZVKS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rtJA16A4b8pC1rwgnp19eewDFNeaM3ZQofaFGP9hvz8Gd72WBJ2rRhmkq7UGwU2fvt9khdXLQTQCrdHUfwz9y4e",
  "key1": "4ikxhWMJReL7aVPdWFB7TLcW3MBVEHLnzTQm1vhWPuGJBoQyCu5htes9Yz4qDamF5mLj9TJkBJNKCmGqyELGuYCm",
  "key2": "5mFms7kdeTAhPCU4ziP6UTXvedGGdASGR2j8ETumB6ZpxckrXQ6QBgeVo5Ke6XZEgezvRkYcbLZvLSNTxYnmqLsT",
  "key3": "zaL29XpVkfg2EkHwR1xuqwnTeztnJubJgQeZE1mKGj3PKJghfkLPY9y6gfbftstJt6vzCCdcxtGCNecarhMttXJ",
  "key4": "4KxygjVgxYJXW2bgaToDEwgxJmNUp8jhPMVVTecvy6EcfzBQCenNL4NAdhHoShiha7Pn52JM3h7KrtWFy2xHktP8",
  "key5": "2FLy1uhese2hSfGtfUs8Q2Zwwgj3uAvTaFrBk9LarcV4sbGwuTnet3fzpbzgJPe6zDucrqwR3jWwWpUMtrmEkChL",
  "key6": "2UySfjRL3UQGW3hfjHodpxzbLw1ZWpktyCqeDkLHiKHTLTytWBTCCsKZU3QpiYEux2osKfLhtTtirJjk2QroCs3S",
  "key7": "65x5sqKhRWPrncpTabGjdFXe9JAaxBBnPWBoJ7sY86KXrehRTd9ZEJqRcUNN9nxYnCs2FsuNuVtsgmgVY7Rmkjit",
  "key8": "3P6VgHbar9xTbtKPabtoLDkX2TNgUHNdYtk1izFaExFTsEYdAkUqYW74gLjx4tEkPzswwNtvFB46zK1AVVoeXohx",
  "key9": "323DxLvdRhusQMuquTk1mz4zuy8yuASTZV5VxSw2s9ibj3daULTu9AG5de423uHY3qqcx8ghnKtC96CUQxx27uks",
  "key10": "5EPv4uhvT21vJph8fzFaJcPy7YqWcCQX8nrSRCqH6FwprUkVMH5guqzhwMBu6B55VxKnzai9BSW3yqFukhpjGBox",
  "key11": "25qMX4q69hNFrs5t6MsJ9zCTLfyNqZvdkJYJ3W5mycZXrj1h4MoPNyuP3wMCP7Gmv2gjy8EuVZr1iNoPY7RNA8vH",
  "key12": "4Xvg5CM6vQSvDqc6xbWMFiJ8de5HKHBuM2A378SixjGqfwgSGpmjdbhSX4HgvP6LjykMtipAsFQMZsW3nV9hSErL",
  "key13": "3yrjSSi3joigGjkgggNujG1Ktq9UXYEfudSQaHPyKtajCXuSVU8nBfGZLWHDMagyw5GXwMtHKTosvVv6pdsQ3tVo",
  "key14": "5WMoMJGhaqmNq5ASgFiLYxHfoa4bcCKKtqAFFn8rbQWrkTCBGp1ZVL2PNXdj8JSYENrZG7ZuJMAGTVPc5MBfYYcn",
  "key15": "5BfHro5NCrdNCDFMDgz9H4gMf3uCsvpTEva7ZHqV3E7CEAzwcUvQdfUmUwpeNTDNY2RW5tME2kZH3hsjmgShMbwg",
  "key16": "2GHZHR9P6F1s4AAGr92Sfmcq9eo5cSUDP4FKY9EocX1Xwy7SNDpwCDFtCEHz2U5WGrJAboA7haUczGL9TGuNKzGn",
  "key17": "4N72ziof7fXy95PE2Xkmffv2iKVa5QjBC6UKR2aMpSSh2xupxUpZeGYgAveyUTec971aTYoKgvXyK9hCYYfGZgNu",
  "key18": "sHDgcbwHMD7wXXYV2CANHZngrn7yGvHrYWnWpTcDanAN9rW9fFK3FSVqxJ5r9ejHpwyCmuEyqreohFCMqLZxwiH",
  "key19": "2TQKjMhot3FpZz2t7FRKaSow5KaZKy1hxmr57P3uSiSwpyaf7tdy6FvueyxupfRNXsmSiPQvcLZFvuX2kMSHuvZ8",
  "key20": "5wVid8thuH7HB8vWNCPQJgzXbtpRMc315B6jwiEHmJdUo1BMMcMc3zzYv6QYEDD28vZVtP3KGVFqKx9H3oV73Hhk",
  "key21": "3gUKCCaAgat4Emejdtg4YAGryemaRJ88uNG96gzyfgHbm8wLkVREFaYtoAJwe2q5Th3HRFEHaKfbd9LH1ufjA3uZ",
  "key22": "5fMzGoZ9yBo6cwgCiR1kP2yp53R5yVKs51Fb5U1bFWy8g3HcFFaV5wjWWiWD2jPvxkb1Kt5TYH5PB7kXffqHz1ak",
  "key23": "mB4t6YjEtLjaGvuCQctJ3cKHmGRtyinZTaarWeYHdk1TwVAoqSjpDZThvm6HKZdHYkozoVPYDLxDjz6bH2iHzc7",
  "key24": "58uMEvj7UGHnUR9ishB37paWEyZSrJG1LJmkNsWL7NLH5rUwgwZJXSXJpcBebruEWELLtFSKQURgc44NhFEjG2Lg",
  "key25": "WcJoiFzKXsV5QRLizC16GPEH9AbPmmJYVLGUFEmjuZQXqb3hcq5cQLQvEJxqyCFZz2YgVvCLKcS15XPCVrK3ntp",
  "key26": "2FnNUPNie79Fd1g43PLjVNLq5ggcbCXZZuF4Kzi8CPZMFHFkkqBNHJG6d55EbJXyejxdoqyD2cixtQAQ4zrzsRfc",
  "key27": "2WrnC3RihM9sq3W3eDjaVn7RNf5qwktLUmpQpSkcs3H68NFZz7tpcB2yDBoUXpYQ2PZaigvpqDcUR3nMgYA4PaAZ",
  "key28": "3sCR7mvdvPJtPDYjRqwSu5o4CnYucxM2jMx3F1kG1VvddFf2mGvDmkf1H534iVo3XLJpcSXr3fgUURYyn3r4KTpY",
  "key29": "DuMBX4zc9YprKP7cBVGLFkXn1eDdj4dikddVDSADHAuzZYSWs9Uq1HCs9FuKqjEka5ZfvvYVAYuJ1PqGEhg4tuQ",
  "key30": "MbC9EgkEzcixADTieNBcQkd4rZSaQw1srnmrXDcKkW69EwhqXnmyJyWPzuRQ93JDcZjvfC1LumXS5HRBLZH93QL",
  "key31": "2FGoMm51CCewsTGFaFdyoVatA9STtsKtN9tYrtSsiN22J938hPLQ7mZB9jv43UV8Ps5YBavxQTciW7xdS2sA5yXr",
  "key32": "2LyRHAigLtjf11VUk1kTqD4csPi9WhguM5H1Gsd8hX9jQV9kotgNDESNJpYbwgTtXGMQE2PxKqkJvVFRDDpxLPvg",
  "key33": "33m3TDAaUKN7sgigjZsKgMRUN1GmZGFdPDKvdELpZ3YxitTbGHwRbuzXvjdGHmQBwvNnmbXUAX2btf9BQFfYYY8z",
  "key34": "Q8Tz9gFSNeHB3QH3G6yYekhDuuHJBq7hjuiqQipE8bhf64dLAG6DJeKo1r8Xb3qwThdxN6Wjxh9a2beL1fidZnK",
  "key35": "28MD6UNpRnL5rUtE8T4YeQvGs4yrXVC2uy8TkRb4XMzm8Burm1UieztK6m13fYxwosaM4PxGkM58xTgUm8vYsr9d",
  "key36": "2pVCRnkUW6Sio6qhvDgnwQgM2Do8NSh3b8i8rFAjFYZN5uaQG1HHwMpBDofHLtf8BppDMfbX1feUPr7yoNnm5J6p",
  "key37": "2vyrr81M8hxGAiij3dxHqYz4qLVdpa7p6JEAyAJoJEKVCTb8DvbwCq36qc6qADF3pwWUQHDcZnnxXQHe6G9Su4yf",
  "key38": "5ouCPdqz2w9Fw3Yhmo8Jq5DJvoQLpkyVGWQxjTJeb9NYxxcziMmuGSgue63H5jTuYd5qXgp6QJAJx3ixpCZMHJkm",
  "key39": "65Xr4CodryKibUv8triU3z6wd91Z4towqsNYBTANfZ9Kk7RwE8p5DR84AvZvm75C7b6hUz88MwmoCvp6J3RRRHjk",
  "key40": "65zPTmPVT4vfFUENXb33yaTCjHNZnEVYe4UkCnV3WR8sbJvRLRK5RE2DKF1BUQC33jWjrDwS7yB2T2aoyb2TanBd",
  "key41": "tfQSYdprho237ns38Krd9ZFsLJNJWE9H7R7mMaApmaM2aDt3nhXL6oGPJ1kozEaLWT2jGVhieRqWfbMywVPtj5Y",
  "key42": "rmT44pPhCgfToXnyDhB4ys2DY1dTAeAPvzqbBHAvNrzZtcmQ5am52YHFQuFqpncUGGmHTPyAL3kfRXr3trWy8C3",
  "key43": "9EDpUUU1pS9pBcgysXaFpaznV6SgzWyQs8izoNAHcgFdngjA9pKM4eWNZsVSr9GsD2GxzCLvYX3qfjQB3q6SFLA"
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
