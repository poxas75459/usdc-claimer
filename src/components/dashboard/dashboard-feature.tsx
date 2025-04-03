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
    "4A4RhjMkX8MuTjaptbLQvS6rMwAkFyS51FTME8WnXBibceVCwsHuUPzRvWHcS9TZ7anDKWciMNK3XoeoFySitvWU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6iS9hch8VpUZvbjUiC1NPJwhaUZorDBLHi3BPiWZQGRFmf1ed5t9jiJf1MVeiyGq1txVrPrkkyWGTfkmGQJUVJ4",
  "key1": "2DuZFgcASaqN47iaFU92ZQHTJsn3muQszVeoAvaXPBcd69zYNCWBsXttwDTCSMCZ6iP5G3dscxCMxPpYfVBUfTTJ",
  "key2": "2g25mEDHKhEWGAGqVLnmj4bmWsH3xjV6zCPjE2a7BabU1fDjYN7n7HS9DbcmcYRzQ8HM2R91gXVyu8n1WQzvCBds",
  "key3": "3bNFpcjALG3U6dHk8Zi91R6j1RaLFow6v6H4eMaX8Pwq9kkafBgkeKupmukbKaE8LmZek22PoHbkiUCEfEFAbz4b",
  "key4": "2yjwQDSYkqmaKiQ4BnkENckgWTkhJsERJxyxFMx9KZLvVxQxRrF5zWpGUbVNYBttiKW1M1Q16KoVdFPx3Pv1B1Dv",
  "key5": "2RQBYS2YrUcjWddA36Kccf6tu8Kvh8m5mT1tFJ1DudU7NNRKxQubzPYCZYpdDax5somQUZshSZnRrq99JX28ogJ2",
  "key6": "z8hXtPT7hZqXknExWsCw6RZEYkUh9exFUd6mMYUF8dpmz3y172ai2RvC7HkJwHzgQJBpGxkMsdFYgQiXJEPreHu",
  "key7": "2QN1o2TVJLspXmjJezLxkgACzsfTD6QLNShFncLe3PiH7FmsfeZeGZLztHm7iGjwFb1TX3RH1EH6hV99mU5MfmD8",
  "key8": "2Q5MiZ3SiZoUmv4mLeBtbwZ4HcnVR4AFUbNeAa1kMPDQmouMCdfimfAzyYjYRk7nNM9U3UXpqtMnmmkgCqYVut3o",
  "key9": "4McuBYgBih21pZf18uw1N17Yuv9pdKwvsWd5UfJwzchkEeqhwYdPWZYX3Kf46cjGo4vTZqiQUTE6wRvrCAkviKsw",
  "key10": "Zm3b1uFY19aGJxop5drZyKKwDSirPT3eBahBErAGet2QRn5hdao7JqS6VrGkP31wSqJg1ZcpWUVWz7K9iTiwU48",
  "key11": "3Qiy3E4YjDDBqKd6PbN1xcPp9crSZPwovi2xvVdEdyzNWsRP8Nr9DKbmYAnAGUyYVAcem2XMptArZDzhgkfdh4ki",
  "key12": "28zC6HYdMyNBBDq9a2YnbrXGEoJ9MEoVD7gq9rpuMTssoEgyrw8ByxLJQYJrgxuZaQoDBDao781RzB9vr9eDsFM3",
  "key13": "4NAeNMdTuWnyy8qzvCpTSjJpizSps3CdaZ3K5XHCSrnYJ3MgZeGQHhvSZV9eppVLPb4kyPbA7SnkVEfjeFjiLp1b",
  "key14": "2etpPnKthHwZqfTBSAgERKUnwYQtRVmvmcjFNJzNishfFQHtc3JkE8Lg9fRuCYrzPwxLhFQWHSVFQ7GFPYLrMjcG",
  "key15": "4HZvqr5dL6VYCHYet7G4SQzkwqvqBNm2MhiPGkgZ4kok4PQRJHtUFXt91bikg8WaMT8WYCWUaJsd64qmQmenZzyv",
  "key16": "3EnjB43NmcX3e3tE9pw38jzniXcT2wdEkFyBhWDXnptyPLQzKCrkQ3wRUHPHwuoWKQtTHSWyKF6NfBJtBvxNbfER",
  "key17": "2Ya3TLdWCnrKYhb7HNGdAqMC2s1cL6diPQCgY9XvYBwhwJ89RpeqXPx57wuGy8cKifTR7cRG7GZiUJ1E8v5kt9xd",
  "key18": "2PETmiDG4wVYjEomfJW3Ysiv8xg9QxujzkaBM2n4Hr5F5SEUKMeVRke2NSSN9zgMJ1pYAQubJ5rmaKqMNh61bxbh",
  "key19": "5VgJGxg9QPgMWRU9RMXBy6eBhTDfZUFAkubgHgXMNKhxCHgPV1ZoX75eXHG1TSFnPP7uUzmmvHbrtAwgM6yyJeLr",
  "key20": "4mTt2k96onVPDcgbnqysW2qhh2dsfyEs8TxQhQ5cLNx5FbHUMQs3LW3bdPLdcbZz5EF7MGHzyoHQWVvME4iZ7UUp",
  "key21": "HApbidRNzNJpmwv6DFRvf5PJDSsjD8gbMPAVuVC9XL2sK2XZqysGuerApv2FkbkGwkMcKh72r139TbSZC9RM2SW",
  "key22": "2MnmaAFTZB89LXmddb9hZcmrhai9zcjL7qwKAFFjYRTBHMXYBzcd8GX31o4GGBMH4vbk7dYzDq4gERrt4cqgfoGg",
  "key23": "2N8yKPpEjgtLLvuEZFcTUxMhfBUHMWHibb98tTA3of8SBWwrfzEzLErPWaGdRquPYLMDD4rVCwcZTqnxpRaDzBRm",
  "key24": "5qzzqZ3mbMHT6tjAQZtuNtmtQSJcpgAgEuZeHXMQLmrDFRBCFKz1VN3o3Yi62T3XEKSJ1iUikx4kD3MxtRmmNYVE",
  "key25": "7z3nvJYtV7yCt1uXNM43fJhhQwi3Fi3sFQ2bzuEqkeEBweSDWhPnTRpXNLMNwRkmCf3fPXMbEd7LtrQVKfyj8ch",
  "key26": "5R5X5FS3TopmXkZJmp6qSaT1rH1u5QwQqGA6u5LMSRycxxrdU7Ub9mrfQYUywuwvB8wMRh7PDr2UGYz75755kvJa",
  "key27": "64enWTw31n2Rxcnvth2ac312UDw27HsBgP8miCpwy6WV2oNDmHdFaAWwWehbRNePCZ2oFGTxmaJG68ad1RDsXBUD",
  "key28": "3Ld6Zn7BGv4zyrB8hZhgfDj7DYe8SQZ5zYFJcu8rX9ibgdanAfSgoQynuNKHvuLvZAruorUxtBpCwQ1cPwEygTZ2",
  "key29": "2H3Rp2EnG22Aq458pHbt64bB1U5Qsy3Xd2BEpNWRjYRNkMrFffDWAQwYdt3FLbiwGgjqwRUzLZfLKZpbdgJY7F8D",
  "key30": "4pEsqibz51vNDbmAjJiieztXU6XbpYwoMvRiBWGtRLPTVudsMH7ijT6h7Urnx1AzFQPxR7JRqSD1th4g3W3qWqXA",
  "key31": "3h77C46BqT9Tee4ok9pj3RV715UgBwCoyyiNcFNGGPFRNAnc1Pdp1wYzVPN6qYxqREjKES24Kp7pE1vN8yE9JrPK",
  "key32": "35bhGsYv78BTxvs6mvuM6vHQ7oe1WtgBDku9AMCZR4eX8CGYrc7vN6bgrqiWQFgCMEDqY23wGhrYJfoaz6hjntA5",
  "key33": "heNAcsqBuEM6YjJg1UdBJg9aZw3hJ97bCBALa3b15fk1xrpjvcrzzJ1YAzRB7P6KhPn9z9NMQN9UHJGA9AfQigY",
  "key34": "CTiRz9Z9tSARHR2MhMSS846phgKdfr2622qMzLieRG3Xmct1Uny8nusksKMvxGbNjUB9YhNWrjtM2t34BjvCL5F",
  "key35": "5makGB6AsGc9M8MGnuaNW6Xy8N69uHF1vf9eLHu5K4gcTpyMbtFEkZhMgWnRi79DSBkfbdrpKzvaLA95QfYDGHZX",
  "key36": "2wE2ne97XPYmq63B3co6WgGnu7FE2anhGGsJa4Ep9uXBeX222hFwxtppDxYZ8upUYvtnoF6QakkwXh325qCNNQNQ",
  "key37": "4u1G3PfRYVPQNcCaZiwb4G9VxY8qxFtySZ3RCkQNP2SbY6LAZvykTbx2C6NTvsix7miEuR3m7fCLRTwwe1mpn3Jz",
  "key38": "2SDE6C3Y84iHkUo1vd6FDmKtVPyFGQgN8Nv469uwyiWjgUKeRN4U8ycx3XZZG67f8AEdWzC4n6H4Lms8CbrULU4A",
  "key39": "2YwmKkfVrsZr7YsECZ9VXHGf8hMRuvfSg5t3pXBtnbcT6Rrw6pj3SpyepdP5oASihUyp1yrnCfo1u2p3ryLzw1af",
  "key40": "34Nt8XUpdwz9YUayi3ffiqJEFdz1pSn4789Pht8Ydkkx1aD9cDCYn5sSs4kWJsusHM3H66vmq26DQQyYtT6s9HtN",
  "key41": "27HHdx2rA3G8xsakwmaQgjaFDXEeLGnjQfycsAdH2bHGJKqfWEq7E6ixMzkqUzseSPm5ch9ACfSoxvcKdis6PY9q",
  "key42": "wzQCuUtKFyaUftLnquvAK8yME65b6kCg73hhRnNJLhuQBHjhzw5Y9SHJRqn1yj6Tk6Um15Zr5p8yKAqB8U8936q",
  "key43": "ZnqKas2a4AkV1ry6WM3hTbN6mLpBbP8uUF9gst5SJtohskhMEtnPZUMS2b87qqyqWEeX712zRTz8auGz3gzXpG4"
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
