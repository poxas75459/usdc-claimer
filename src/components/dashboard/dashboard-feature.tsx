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
    "4JS4ciG1BcMxMxNAyR54ehB3kE8somSQJbd9pfa1iwa3EpMbXQMS1Rh1gTJpEXB5q62ia76z8AeZ9XFXih6eEhXU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hj79GtVh83JCraZvc2Hot5zDJwWebuAkvYEeS7M7gvvgWksqSLRAL7ccyDuotTUdu7TheTAJ9fBEq81BoPtNxXZ",
  "key1": "Nf8fvNRSA7UxCzk9Ks7AWcq1bjrt1rfZwDvG1CzSHRUGHH69d7Ms4ysgcj1i1wis9kN5Hzd3HLHcXRtFjqwMA7t",
  "key2": "64Rk9yYdNqsQ3EBfAfqB24sZnAahQ2a48KGQw9D9EwC2fFenT3bfeVirMy79SnhwQ2B5vi4Qhi9Jn1XjvAsRf2Tw",
  "key3": "4NRF6LGtF6wTGDNXt7gsHx6TUMNyEYLWiAuZaywstFx9pAQR1dBsp7pTQC5dbUMZHk9kwWpt1ywrevw51vuTynGN",
  "key4": "41qKMNiwGMFATwfQjd2nsXZEqKZum5vTqdHhiwXET6EaZAe6iNEy6K6C7sApsgswereQ4TmFEkixR89ANhSBTQWd",
  "key5": "Ent7YXu7DCC1YW4ZQFtoTyDUoFFzQhaFLP67XTGrHSZtxLMFaQFpoANXYuqXeyoSoDPPavobiaepBnMR7RjUh5t",
  "key6": "29h5wKjUCHbDWap7hy3Urj5d5fBYqrPtGb52gPsikpHzxw6CtHbXL5XP8LYa2U9stbH2YAEW91MSMPGYYFbgdm7y",
  "key7": "5FdCYkxW9s3nWb2zkvDjQXAcu5dmddsptNyzmmgEnHTpso3HqcFH9wj2ufV6RA7GQkvMEt4A6CXGVpgy2GND6fPU",
  "key8": "tLkDYE73p6SLozMWJXkon7Lct77My8woTcGz4WTmh4RpW7Cdra2UZzPQGB6P6n8AgoGBbEVSyUS6PQr1EPMUFR3",
  "key9": "67QDDEprr3Mw4Xy1Hny5FyD1ALE17Rmrbpx5BWnoSdZPJHWSmqn9nbX8PyvR9rkyWp5MGgWNzhRXGo3xqoUKe2cs",
  "key10": "2DuQExDYqZ7kq2QmU6JnS6zdWS5eoiHXwryYdWjrrSjohRfChYNcxW2x66PMt3rGQqdbj99f5kJy3F7VZLbrFan",
  "key11": "2scCHtTiMLHzBUzEBqUfC91ytWAnQauSU4QwQCAw7hwYnRGw5PSvE72dwAuFvy6rv3Lp3VyfPZx9doGqvuUoriZ2",
  "key12": "Pa9184HCGvMYAbJn6sXi8xWpmv76jd28rovMG6F7Xc2vTpXMJpanwHNS6t2UtGJBzWaLiYmrup7oB5S9CF1gwom",
  "key13": "5YT4hsHcyoHVG73CWRSMkehhEGAuhzzEx39TPEKXRtw1dDQf5UTcyG6xBUdX9XWBg43vePcxW5cVK5jVs9hH17gY",
  "key14": "5H8BW3NBDedxegoKxRcAdwMoXBTnbu7vqzdY8B4tz3v1yQCb9mSuQGgvrY7UoaqmfUzMFqemBxLF2JqRjhXDADBK",
  "key15": "iLhDzrVKsJMAnHJspa1KW7ijrqtq28DXYR3yMnimTikhPEZj8FR8TgzSbkHNx49LzkeB8aVZHjonSAoCA8pNPSv",
  "key16": "WeeHhW5da9ijqsg9gMXYw7e9AkzzN4JKF2yaFWpnrVuihxNFQW2nLjnx3LZvwdVvhtXurWh5CAt4vtEue1MC6Cz",
  "key17": "DrAvHstpVjxKUt71cZoYz57Z6aKrhm1t6e7TuftTXYEsytjmcpnG1quTRtp2oaPvZC46CDr3evxMgUvsnxk44Xq",
  "key18": "5nLa7DH2hj2jhSKVU6KtCSBGcxJsW36751c2aWt5Aodi6nEiSVEEWAs3DUyCxDsMXzAPthLiwLVHdpoQkz3d5EhR",
  "key19": "3JioYVAmpXE21TDai89i7dMzHqWUYtBDLdDcDodo2jcuLdZ422sPmVGobW7LRYtPxS1ujswwwKXKw91MUhp9v7C",
  "key20": "4cyfhDV7fVgDikRSkuKUpMJogUTHn4BKPp1cbxPoZZ1fKQ2W7oGEJaF58Q8hkQdW8FntjTxS9qa5DLF4F36jxAee",
  "key21": "5spBxDchHfM3Wspd1uxRm567XcQFn3aUpAse14hywqT4LD64G8gqkbs2oFAmPDwCGK5r2tTN6VQQE5nSifUiwk8Y",
  "key22": "5BFCcS9kLkANx3PijsLXqbQS52NHGnu1yFaT9Jm6EWVFiV5aQxevpvEMy8BLmFyiidPTEGvkGgw72NHQBtJHQqS4",
  "key23": "5HnuowR8RsgPnEU8DpakLkxH18Tfh1xTP3mg5k5UmEsCg7hConGCp4nkrC1Ex5o7mJEUyrBpNLH6c2per2a2eyWo",
  "key24": "2Ed4oEBxGGdZygoGAirUWyjH8jXDS8UUjeAQRWQQZ1kCJDjVSRvkd8b9yAPrZfpgRf81C2nT3tgv5Vf3CCY4J73G",
  "key25": "2fmuH3n3vSryr21crAs4xtLq2HguFsUxLeK65DXq2TPn9TVSqYesfmceRuJdAqKn8c9gJVegV1oo3ro3dBc6j22w",
  "key26": "2XF6FPSgrtTN7DEK7ySML7NmiejCDaNWxixe77yRLSG3TqDNsY7oK9ii15tt9ekRP3ChJ3W5CH2jzLbnyo4ahQeV",
  "key27": "2s3UyeW9JvwTRVZJy7su3JqpeJpzE2U56GmFdWbAxAeZtt2h1mpeETHmT2tNAUG4TJasqbRW3oaE9FNXz8nkEms6",
  "key28": "Az8Vr4deg2bE3aWikT1S2QzekYxWsBkiuJZdcnLxcPncWfHwMC5MhiJeFkEcQmnNi57RvMNjkUMG4xJDhsXGcDy",
  "key29": "5ZzTWp1P5FYwfkxf1Tv6DrzL36gbfTXBopdMfFXFRQgpG42bdAt9L75QhTDGaFkZ7B4FjjGycp9b8uJd222hyNsg",
  "key30": "4fvU6TpkoGdymorXPiQU8adhh86MShoVB9WUeePJRmYff7Mwi1bZcQnrjB4StxGFEpq7nXmUAPiDG5atsXsstUom",
  "key31": "tD9qT16HuwL6iAec1ksXxnZKSCU9JkKddy76ftPh2KJkFDcFYB6XRoYsaexvfF3XktBdQVP1tJUs2akpSkcji8C",
  "key32": "5okrwudVfy1UPnQc7Q2TcerDX4LB9z8hh8wLB9aYRJjNs8rCrW2z5zqqGBWjLTgnrip56SAcchnpgFDTnFq1CKZ9",
  "key33": "AwcxkwxTD2y93gJ4Q7yxL7ogrTWkS4Q6NCDE5o1mzGthEkjopYPDgSsvfzyhKLSPudD3yauwqs3iQsHaPBA2129",
  "key34": "6Sd7YiNCP28zRWE7CA5n4hyzgiLR5Cq1e4dvG7zSCn3RcT1GPELeVZv9hwU8RNgJ6jWsHRnMk2jn7fAHzPtUaQx",
  "key35": "3wKynWKcRY4mDxEnCWqrThYogSVZgGjT3U8rjsfwEu9cD2tDvPvgHvZMZxQxEShyiB3KxyDyX5hHbKn41TvDAjNr",
  "key36": "4cdASZMdQPF8dU3thaZXUUy5vBRVQQGEhd4QabyvaX4hHWGxvrUT6c6NB1JvSqahVPbvTXYkY9x36gBVFTE11Pi4",
  "key37": "vwiQUkXitGgPELa2FPpCyJrLXy7D4uQPh9DRxWs9wJa2EpaaU18u7m9UBF9LwsJdAuChq3wP2PVmv34S24metxV",
  "key38": "36ZjyHUmokLAxXsiUjYJxgpEvWu8VdQdVq8imTvkEmskE4tFV3fUbKA7uYz9ozdGoV8KfBjirMptviTjJVXmzxmS",
  "key39": "3DDsE9t2pttQYHXTtz1iqQDTgeKjA4daLFumWdgXpSCmxf2XWpUJUiCVkvqHZQs1Mus6mg9dJtpWpriRmkuzganS",
  "key40": "1BoNRfwA86rZpbMHeqB5qnm37WDYJvvkxuC1DDgKM4BRGC95k79YhmmyqJSX7TgZKGLVDu8ra3irqGwLEEwan5x",
  "key41": "5kVjRGj73xzHZ3815p13xF9TCBALj9mGoEgVkCGsnZA41pFVBvP4M5zqDmHDnHvwnocqpeBxR27NLTUHHRWSsQux"
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
