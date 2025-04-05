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
    "3EshqigRYAWz1NzrDZwnpfohKrymcsT9TgqhFgcntMf172zQDVgKkv4T1VjvZdG8qZSoxRi75zALTd6HetBwMLXK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fA1a4G3sx9TFS3fvVKkoQwxToVSvU6WQrE1ryn7WWrNsa27hC4m4CyzfgTL6rz5WRbmB4pKGAJa7xBbu74jD2Ze",
  "key1": "DcQU5AsrcADxAAp1UySsyu77WCj6DPkdcWyCtjEbVJGivJ7yNAAST9fiq5Wpzi24s4jNUqLczBf529Y8CTw3vD5",
  "key2": "3K49rphCbPeBqMMKZAbKbckckAXZJb1VXTGHXBc7KCezAPrJRG6mFEEsSb7SRFv5Vmdph2uG2hpz5ae4DnDiALU5",
  "key3": "4xTris5bxZRn9hD55RU6gVaLEifbxtSEENw3QPRYcbyPDX7Ww95dTn2NZZQTaG4j4SaSr4JuryPt1MSchQ3gUpeD",
  "key4": "nYgLwzS51wDincMNTDZmAbm2G1nD6XemjWGvEycAFKbeiaQLwGwfnJEanELSh87mYbfnLf8FsmWWSZor5BRT2dQ",
  "key5": "5az1nQmNDk54Sjf3jNw8wdjJXd3d8mwcVfdUAxzzzGzVJUTHX1EfDuEyWotSGV2xCxrhFaMGsa2RorDGBK1XpNTV",
  "key6": "31znVLDJ5tCGRUdnmPaVWvADfFCEyR54gdxgX1GwjMMSV7rBGHLcXQez9oaHGbJRF3cVQuU7vjz8zZ6xdykw5hT2",
  "key7": "4oofctBZvnNBkwm6rxD1jJyWetZvScjFa8eXJZuS5ZvfLDy6rcXEB9gFr6AWotspv3eeJxx5WWYN81uTsknpAV1w",
  "key8": "E2pRgaZE6roedjDszcyCYYBAZpQtWbiADdiM8DSradALDjF4xsqufPS2ycXbde9dtCrhRZfkFLEAL8NWzwXCSjQ",
  "key9": "2CP64nFNvsnSZ6oA9YAeESuuKvDzZWBy4z2HRE9SGWk4mrD8ResPoF5xBdREb3qmswWLiqVy8s6tWCSA3fLPgMa3",
  "key10": "3CJ69C8tsL9zxUaqSyvHos4FJnNsTBBFtXwgmVuijzA3KmPWUh8pHpyfW7PEMiuPVaV5MmSAHD2NgwxUFTw1Wwkt",
  "key11": "3gMqSfMuxaYAH3M5AtVsaUWMeBsRZwtyH49prqzUZMafUYGHvSX2JnUaeGNR5gVtp5RhDnAAeKtVKHainpPhrPdd",
  "key12": "43Pj7HFFhta8T71PLPThv9pUnHyqmUc7DRzuDhtVZCzd6K5ZTMrTzbYBSZUzejFCSoZdB9GdAfznrniegQDmXkNz",
  "key13": "3BoNPZGjJwNpKBWmAGcYZWJgaQBm2X2DmRsi8VBij5Rx1vUfjYvnbvMw73ujKsTEYyuLDCWjQxDAXdSW5q476xUe",
  "key14": "3cY14CrT9soJ2YRVVM1ohc6yf1TBrcrfTHdcfUSebtBSMKc49CyrtM9RqShMpfpFaX3FHVhhgxfYzeMB2s62TeiH",
  "key15": "45KphyqQiue3Hk47aYcsfUMVPCn4GqWPgyyLPQaZprK6y3xVuMYreBBPA27xi8WAfTPKMGNUSt3C9xFjrH9hUR8r",
  "key16": "4ovg1cfa8j6cbAeDKVmNtfW9p6r3BzXZMJrKnFGqPbN1eS8q1WjEg9Wbgb8JYmpj37Te7PxZJhehX8PfXejq2xi7",
  "key17": "4pKsLPQ9tjSX1n5RBg3UrY476DzcvzjXST41bgb734WECPrkHeqHrGGK7nJKNZJMRj2UoFwWkcJrFKAk2348zSVV",
  "key18": "uKDgKwipPm7uTY4vKB1RJZ3XqA1WXCMy6B68Hh1hVeboB6DyGj3pM3h2mECggqdrWbexLAc4g5jcFQQTBhKgQqJ",
  "key19": "5tVtTTXT7Hsn3EZWH5XzbBNfjrdxRG9Rrc1mwYPeGxbfpB2jvDWpbp1fkpX1CayAoFTDPTDBEbKRiyBvdnM1U4LU",
  "key20": "3iVHDKGG8d2T73cqx3vyLxfaUZEu5zwAWD48zqodmaqufx67G2aCyzGiEviK3cHPnZmrNHpfEKUddcoNHpekmaUB",
  "key21": "TH1B3Rtni3Jkg1y7542CRFfBkkff2fbBizEiPnEnSvyDxUvuLB5A6Ns2vX5CqYcJcAxiYeuwNEeKx6fZKxynKcr",
  "key22": "23w3GELAwEFqozQrkhcke1WxRJbV7hUUekwjHSoqyT9uo5uYASyEWsWJH6AmHKapuJLhxEWAVxvhEqgjPR2bAZCY",
  "key23": "12523T3pgQmtJc6FEVtt6z4wUFNeZakLyCZzAXv6j6vZ57E96fRGbD84qjcCrNT9fBrhYsQ3UBwJYXjE7LGSdChM",
  "key24": "5xH8SbTJHsuGxPVCBNZiNEFwKnMeKKPjtFGWiUWWQCBoEBcStNmqdc2XXMom56tjZnsRoqpequGfNWevCzKP95zc",
  "key25": "64SayMU2LW7D6C5bT9RTzSK73N1mqrdQQCb9zXhVfnRbmGvSz8QtBT1aGVd7QNuoPB8ZmaTyJ3o7qiLLhBcKexud",
  "key26": "2vx1YykKYd6KtVgJmoEX5WrYbDyar2Q39rvY5uHCkjdrtfGGwTT9ReJVW8qUjzaByjc5DjtNRqmHWWgYBidQu5Ex",
  "key27": "565qsbCYRJxpe85qXx18hys2Aiuwo2uVBykGL99PTVMyCrHPAtmUpbYDmz1EPqJHYj9HDUSzHCv5dmK4ZBNP5MwG",
  "key28": "3ZArRdkLhy2nsrmttHymsQpCCshcyQtpAUUboehmmecZSDrxomnkbr72zAD6V4M8mrhSWqtzAU3tK5dAg5jwLRQ9",
  "key29": "43NduiaZJmG4amzYKBSoujm87egvskMofPZVHYxqj7oTiKsNe2Tm25yutXz57kDX3e32r7aQiEbbpgbfUgFoy7rP",
  "key30": "3ey3FMWU9mZxusYLALipzNnqje55HyHhMHNAEqFdMXeWBD52CHwP8q1X8BUpTmeMJP8phjHvqTB1pPAdpVL4c5tv",
  "key31": "23WzNhmCPnsznLFvdjaajkKrdXBViBdnUPnwZ5Xj4n7SJUxrmK2BNAB4siH3X3MetCVcqT5NFZCFVHb22gk96btW",
  "key32": "Mk5inXNqQXVeukjBkBA36aQmg5TwX11oWswrZB1rejjF9t2ybPjbCwe58Va2s2s86pPQt66njiHWi7gnRwwVK4u",
  "key33": "41RZhjPbhHAPjgXH3bKeKEr1VesknoS9Fm6zVWJJTnkGSzfBnen8zZGMojMk97TGbKfqZHbVXNiKQtQ2b5AgntCe",
  "key34": "5g9pY3ca9wfgygFPzuWTp3UHBJdfbQ7K61nkRMu22rXCu68MNF9okN2zxGp84gtctdHBGNuWV9JQEMHZWrqnbrWM",
  "key35": "3ZYdnkVCpM79pPJ89EyTAE6wtwdzugbFsuNERjRNVAubxvnEnNmEk8hiJW6Z8w8mm5zYxAEMKoxuV964RfhkgRuW",
  "key36": "3LpjEeSygtugTGMoRmFKAheBJsg1SFbPMJZ4MUKKat3nAWVdBCiaNuSX76rCGW5wtmXMBuaR7bEYEHbQJ7Ks3CZk",
  "key37": "5Ju9QHRA7gwWGud9YYUzdFkVKZEjsWVCyxgw6BqhyycoBC7XbPf2g4m7UUJt3KXLDu1BFhb9ynosXCdVwvRX8SLz",
  "key38": "3ESzBU6tZxpQ4GQ4mYxTz4JWX6mTdW3rWBwaEbmzdcUh9vmiRbE8NtXWVakRxaEsN6jwuV7XMTtfohHdxMRxEfUL",
  "key39": "4w3m88yPHXhm5qsKRmPLj4cQqw2ZqqRVYmzbutpv94Yqm6Z9P9eDp65as9BLcmad1YZ1pHY6ugZfE3qKRpVWoUL4"
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
