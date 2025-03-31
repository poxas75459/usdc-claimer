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
    "2QFLFFLxR8kaBfKgNjXkAWdD2U77Wq75kXBGu6dBT9LfnBcAUjsQGoVBqbDJYdyn2vxoD3qgg1Gm4gznfZUgM1gH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UwezH7y6PhAcFLA5rXarucSPPqnyWTpqDVHeygqM1Nw6LVayAE3rdKxRmWAP4Sarn2yMqeoBnZQeJUtDmsqsmR",
  "key1": "2ojJvCThkmVCwnwyzAczCvbzRCzAEiyuFxTzD8jWpffHfpsP8TaHmt5CJ29x5zBt3YZqcK5JNoW1REws4v2QVbf3",
  "key2": "2ggEXn9VH7vxameE6aMCWu9BarXDeniMvr94YRhQoSFQL1NR6rpNgXNbTMGAns8dVcXXa49vLt4cgitQXYUH87ja",
  "key3": "3BFhkaBcae8vid4n2rHFkMyuHH5qmVh4b1AATssngbMTRF5HmcB645WZ6K2RfvVywX84szNPrtqeKvj7t8ALLSA",
  "key4": "yjJoBJxGaZnTNTxZSsFr88BsGQowJjsA6XTPdbYCw5k66hMXjYpkejttt6vg2QJ5f2Jmm1zi2uSUwoxAmaP8k3z",
  "key5": "AgmbJZG3EEQzZs8Mh2iK2SQK4fCTDr6cNAiLBbygEWyuSC5HofK8GBAWhHZRQAKcXTwir9HKtNszY2STATfp4P9",
  "key6": "3xMyBoBhFUomHHBMUwuhXewMWNQ9s7Qpo5yU8SWh5JUwwAsrSY5HYDRQMFUEtUafKQrcVKNUDcdDE4N3ZppPkXx8",
  "key7": "5TpZKhb4SDwBLCuCD84nMrvG1NjwmoBkQNBxDiEMdYAHoZgRtfv21QWhyD9PChK5exCzXbM74EJmY8beG3nMQoSb",
  "key8": "3qpcYYpz7CKmq6fE6SJ2BrMJbcpfMysqgLCkwfh2wjdE5FQ2KRkckXu3kCTGYMZExqGveUaPdZp5jXCDJqtqhhgf",
  "key9": "BPda9Q5p6H7iViAnP5tax6FhH7szESz9G4bB9Az5jTu6A5QU3ckdjk4ups6d7ru81oEVDs6v4Q5MknRnbu9eB9Z",
  "key10": "4h1usZ9CjfD9YTc2rV8x4ZzmLHaBnJR5kpke5BywjNKKSA6nR238QyPkm75JaG3U1VV6NrDYTfNLkuEW3R4HpYWC",
  "key11": "omSDVR1WLMChfiaEjegHUdXdKxowiRBFskMtSpjh4TFtNA7JVhAQgwZmumBRkuYJwQBLEBwbjykjyJf3HQoC74n",
  "key12": "4kmEAgCfFgVoUkKgGqAz7bTwt89Ntk55QdtJWpDZyKMmHuhXwqpKL7W9hwtTsT9KGRqbUvUwW8DcSwVJsi7a5Yge",
  "key13": "3uE4VY3CS7bwPSzzhMtUNzQvP4TwwuG1fvvezb5fRgtD9oR12k4HgXxRiDVHG59Jp7CUyRCxBzkVxH9uDvNKqcjH",
  "key14": "2CGh854Yy6C7GV9VEV2fPMmqCMrRFd2McGAifGc49ge6D6gQof4fy1iQmm8wuCATjeQdPrRTFTdvohdhfzZBgRm7",
  "key15": "5kfkmaaJPgAzCan12k4ZKcrZ6sBczTCRLi3ZEjB7v4e7ZZ9AyoX62A5fjX93E7UJgnFP1DvCfS33NzTn4ujY9tof",
  "key16": "5pMaAe2A7GTRNhjaZWLofmx7RcDzoBR5aszcPdgJ6Mt9EwU7vBCtZ62MdtEcSD8qTAaWbnpvPyVTPkQ52aWbUWT",
  "key17": "dXnnfL6c7q9FKLDk3hdMbL7mSi7HZW1pLKoSSQuh3eya6PcCqprjErMYUHstvS1BqnWvB4wnWN9uswRroBcs1ec",
  "key18": "43qXUPzSnANdSxWcVUfgnCHbaiw8hDPBbUUPntFSVJNThg8bm2T7cQr87Qf2GpTg6FCAnN1Qwaat6Sro8Nrx5Y5G",
  "key19": "2tbz67s6oAs53aWEYwimnrvQNWJKejXhNu13QyBwbnonHnfDMZBzkhyrRDrpZEEPF42BDQN21uJpjJEp7agei43o",
  "key20": "5oXWTaqE5KeCHu6bfSYycETLh8nnYBPKZyEaErtciMEeBMU18MF999VpnNfVhNzffgnPmhvzP7qsBTTeNKpxJTDV",
  "key21": "nUbbHJM1ST2ZjoTNdDQx5WB8DhofnkANMtfUDCQGaHBgBjoxY2mbNCRDGnPK5xgprcwmzhH6xjcAnjz4GFcucqy",
  "key22": "5gEP9pTzjbnT8GDybVFJtQH3i26469RAxMXgsFikYkr2z1EKwbtt8cudrEeP19YcWCQ4rHcq7wVuuArFNjSSCiXK",
  "key23": "5zwREKzv2zkuMbtk6yPAPEbukMFyGcDL9Y6n5mTfrAZ38MvctdNm8Ta6AAYabryyiHdQEmUk93goDDK7ApJewDCK",
  "key24": "22F8PzvCMpufmHFdXBR3GmkLQ94dwndsp3mgbFuXkm5yqAkWzrDw8LnWTbbFEBjArbLqnBipNcztnWi1JbJMFNHo",
  "key25": "25ehJ7gCtpWvgcDX5rMRmjbcRcnrKuY9gmVUZuZwfPhZqL2ezMddkBZwRp8AkLTYfBAWS4ypGoThAJ8Q5sr3MFDo",
  "key26": "39w1v74o2VcEv3uSgGPi1Z16vbTyd4X8JWDW2eoFYoPjNRww3xEhWPRShdASarwwYDLPs2Wa8usdSfN8AH9jmTDX",
  "key27": "4g5pFHKsGTGEieRfZEVJ1VzHn2BtK9LcrU8XCiC54Rx89ZEbMEQ7wnUVdPV6ZPfP2ugZQWt4wUknY4acFaSwpWsK",
  "key28": "64EwYtksGbYw8r5fhjsNUt1cgCCkWBzvQ6L5nziLWXjPS9SPpvaC8feikLMLfzeoGBGZvv5q3CqSsgxw9BCGAN4h",
  "key29": "UWvXUeTTZ3c6aUByKMe97MTEqgHzfxYrUU9wEnf7ZgKtP1CWPL1g7AsQuFVovKTTSLVe5Aoz7V2tWENLB7M1CSP",
  "key30": "g761knyW9WE72GkJ2W6YgYUKhqAkSuoKTUzhM5SajXy7KU5PVWKhBeDmit3UwG1KsXxfSVr2oPV2VPPMSkBbJC5",
  "key31": "2tHLex2BbRDn7L9grg48xPQz9ysVsB2uTGV3UcCZzFVJ2duFR25Tq5DaMHP8rMbjUi8sbzLWybs97rVYE94ST41d",
  "key32": "iZtPtdgtacEtEv5eHinw2EVBeQC6aNLwzrFo1iRRoAx2J594WQafWxX8xvEiA2XMkaY25a9KXTV6VXj69gT4tKq",
  "key33": "4nw2BQyUAzT1KhVaFUS34zwQga4hfoLVWyxaMyq4mfbPbJfZAofVDdHBYqBmHnUuTnGgwBukm675EzesH5w6cYLU",
  "key34": "aYB74Gt9xQBktKvGSdcKztCjS9oBB1Thwxn82hjTPEZKCnWazpJ6D7jewmk8Zx7xpy4sYvDDVCrmx46bzgmpscA",
  "key35": "5cvKTMjYYd2W9V4ymGAXtWpQsuVbRU2W9SVsitU3ay6qmYUP233pbRPCX1mSUrafv9t6LhhMQW59GsGDXBdi87sm",
  "key36": "4bPHYVWvYUiVkUEoaEjHzs67TLirP8vBUynmn2uNpNeNuwEeVtexgfmDCQcLVcuqytcCSfBSKFUKAcrrsXGTABC9",
  "key37": "2wsT6pad6bomZgTC6gW3tAPPmDcsoFTSrjCPH8rdcRZ9m96tDyEMmbivSbkxx252T1XGfFATFphSxfyM4aZxkgKH",
  "key38": "R5xgugs3WQDQoXnegRfwaLHZc2arGhEFs3yzYguZ9F2RVqdfU27FUgbuydWHQ9E5gXHUMQb677fKhS9jZHoTiwb",
  "key39": "3nJNe21UGgtZH9aCmzCrbaANwKfmRoHxZAJTndNAPYp25Rkh8s8x4g8eAiD5WM7dvBxL5mLSnHTM4Yw6imVwGDyx",
  "key40": "2azoRgaD5E4sFJCitvzA8zGaS6cvkTCzyR3LnmhLZGFH2DSDExR25ebmYr2JXKjGtsRLDUq7BuKBwe3hYV13RmNG",
  "key41": "5kxrBy5N2ppyqfXV3keWKX8kD2znc7vKfFS5sd62eQiF7JyiiHgGcABiaKcoZHvxosya4F6qyPq9ETUv3qpe5Bzg",
  "key42": "2XukxCMyYBkZVG9W6VuuKPN7SweFL7pJq6PpNidQvcfsvwXja91UWYncafQPq52S1ZB6vnGVFzw3Atdj5GSGLR9e"
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
