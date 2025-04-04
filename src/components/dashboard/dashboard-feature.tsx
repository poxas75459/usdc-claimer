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
    "2fB4tugBC6skgf3E6CANEbsL9PyfzCHfMsxBCKQSxy5AkVHKKDWkzSTL5CDsaoDqDYtTyee9dKiAPnF4zYXhtVd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ngm3pC5V3uWpe7a3btATcBWXJhAtxzj97M5zH7JxLA7GzMVqTK2VJ2tvovgWNRS7SwdRu1Nsa88NnQyaPJPA2wi",
  "key1": "aM8dry5LazZD7UHmPDJe63kmqEqTWvT9RNmd1uxBpg1QCCo24ZL3rcPr6CGwPjFsTxhDf36JcYKHmADVPmi7pPd",
  "key2": "3JwQsjpxP8WiCUtZGw7RbSGupJmuYZdMpQ8wF5LjTKm8xJo3SdQzsgtfsJn3UKU8v4SLjyiRcLZ22H5KHabMebiX",
  "key3": "2AMUvH5zGdkcph5FUDajHKFUdUDDujWiSprmMENtnvLjUnutmLYzCwUR7SjjYSH1j7xxSXvGJkujQywVwcMoXoek",
  "key4": "3ZDbeehPhPjpd4QmupFdgPjDiW6BoHiHYWhVpwNBAvxToVGiPLQwDoAZSpyEVFJ45do8rGVVE5cb9d7agpfgmgjT",
  "key5": "PvES8rSrB3qogEHX7WGjHwPtZs1W2mxkqK41w7tyjuVkSacgU8B8vvsp6Ziy8DL6e3yVSNTMRUzVgR2DRvxfCWP",
  "key6": "2VepPdAneXq5sRjnepes26dsD2Syax7nwPcKEntssMPWKF3wSY5Fr3pxYZVaXLEoetSNkqcmkZ5MTGrTVuqTmtRJ",
  "key7": "TRKdBDrWPAXfpXxU5stnre6pPpuaprvza7QavqXYpfFeduz2zHGkvMZRZ4xa3yiHYbQnAFwLBbVi47y5txeicbZ",
  "key8": "5g32mhJyc63G84VvkDooZkvvVws9LnQUa2o121XcthvXHSmtH5R9BaMurNzuEJDiRV37NKevnUHYyHmB5gEJnocZ",
  "key9": "4nrzByss8uDqYSHGqe8UbfxmVS7cxKKYQUW2x7fQv1PRojiS4EsKzXKj2orNmF6ShuyHXHWC28hUX4fPKgYrVRM2",
  "key10": "5LiSGxDiY82ZCdW7ikTocn2hYXF44FMiwUnLQh8tmSXf3fgu8KNdVvKMxidhT1irUZFkQ1Kno2sLawpXskMPxeBq",
  "key11": "25ucY5aq77dbehxnZEvM99uTYJDNRGfv7A8D3vaejsuWP3XgJBX1qf66jNt5eexRfTgikqqXG3JedfuRZeoLBfDK",
  "key12": "4dyvk1PGUDnL6eM3RvJz2ZjvjW4k61uUeBzqZGfyje12mRuyVVMVVW7kRoPzr9hwEQzSRFbu8acDiSnBvYVCD7Hr",
  "key13": "43ipTNHzmRzkX9CD6eequ8L8iJTen3X7HZRXYdVeYfdyFDVzSHA5FZ4d2eXpBbPaUweBNDqw5p29jgu2f2G8dUb9",
  "key14": "5J8M12wfDmrsze23pdtCRq4dphrXYi7jUGF3eTDJFKP23wgHjkkwK9zm4i3CsiDqrfwv9WHAu2ZoYnLa9sZfJpY5",
  "key15": "4GvkQfVSwyoTKeXYVgDmLT8nfZDWDJcbvrjjEBSNQwTx6sgBr3FcJHVgFtZd35xJiRQpNBUm4GwRNW62RaedYrcy",
  "key16": "ZFGcTyoCWVt5wB2NCjjCggwzBDYjJoaoqXHYPQhVWUp4HUvYvywb1x67XbA2diCAfP6mxpJ4FLznqQL6DTmaiZf",
  "key17": "3Xu3cHs3RbEeXdzGknAVGGowQtcDLUhHLgWZrtfgfKc9z6dp4ijpYdwKC3meQUzPTEXyuiE9RXboCWYUFMscX4bM",
  "key18": "38AegRSwX97saVVbLJyw1knTqfbWXGw41u7PSxeUt6UnXp3VcjcDSpyk2jRDsAwycv17LkHJ6fqkcF7MG4GQsy9J",
  "key19": "4UKqXBhnnaUFbvq2AyyxREYNcsSgt9zV1sTcx72Gqn55FfyR5WBHwoJdPjRYRJLBCuYjF694HRTqiTkW4JbPhJiL",
  "key20": "o18nEWSmeQZksaSReX7KtyRknJtgiUUVe3NmGV99Ve5BkJYEVAKWjd6YTFoBtwYUMJWdzypWnanCKybHxJKkf6y",
  "key21": "3pCcCLVw2sfmaYLBUraFwujNgswmkiZbqMt6NREiUvxaNRhican29g3x5oppaiiiiCvfr1GFuaoBq76D2WUqVm2D",
  "key22": "5D9z8PLdQMLwayLq5b8bTeYnUrLmPnvLD4EFUZDn1vvG9FbVdwe3g9KD8CNWJ9hh8wLjuci5QGMGE8t8YWNAE5dg",
  "key23": "4xjpXbQzkEvYiCjC2W3GGZfsb59Q8pei5nsp8UaUbsPafsEJFLixyNEWWcMk7ZzqGjwL99AouYDohf1dsDNueq6G",
  "key24": "5FtmDzECFVXHwcP6m3uWiLBLv4LFg2xNcBYveu7s5r8FdgZLCqgac6jBsk7kLKx7wPY9xqWUCDws8rmEpk6fxSvu",
  "key25": "3vMpTei9TFSAvGshS72ZEqQAyqnTbDTcoxQTz1svvNS3GnRhihGPG79q3Kdn9tBreR3cuQCuGChG5tsEKeq3YJLe",
  "key26": "2k7JjgoYCbNLCtzDJ9pz3GwGoDgWBEPsENwumhXmYrG7iU6JWgBwR9kN9DjH4HmYJGVqpd7Qaa3zRE9iTqUVZvKr",
  "key27": "nmDowusrSRGFeubTg14KHFbDF7idWNBBsKy447NiARcDpgNQWL9TwswLiZP1s95fVFrYoqad2n5wRPbQ1LbgGaM",
  "key28": "5atEGdkCqhQ9YnnUSK1kbYeCN68d12jgLk3sg63YeefzNGTjeavEg7Z5Vn7eoi732ydo88nkZw6CuzhUJ9aqGVvi",
  "key29": "5jmY7eLtghCtA2xTkUma3U7571YuHX6oEL2aEnvvyPw1NUXGgQJwJStpiaMK4pw5sE98TY7SwUEc6uUbEDw2yp7x",
  "key30": "5vH1KVFpUWeA78A6QzVPayUzrnfa3dC4tngRVfvBiTuEXvhLnBkTgc6FZZbYpuYzwkvXQBd59orVAavTtAHbU3x3",
  "key31": "gxyLGxhcaoPtFLgEgoKGHRrW1KQVQU8Q9KazZtRoiKQhUSQwkiNogWjRKt5BXKvRXvYcUJRNaBgTsK1KewDEgbk",
  "key32": "3mgQp1oqohg9ZBVapfmPBn2zpft8G7ZGCfvTf1b3yZzTWrwR2DV4EeYsARMiZmJccLKbEvPT5ZvDjdhYgVQR98Se",
  "key33": "4du1W1AJQ5ghb4QnCLtjjMUF5SCxe2smLu16KAp41R6AJVwXS2is1pF1WknVBotX3FrZ5nPZwxFYdVd1ZXHBGyXb",
  "key34": "319uUJhf5PmzjsmTmru1rwXKyHdjQMCNciJ2Bxmaa5WY4ixRCEYV5p28d4HW4vH9fAuV3cFg51mKuubjzgqY55kL",
  "key35": "52YeGy2HzW3BoMPdg5w18GqHFCAA667utXBb5Cb4mr1i129n2vCLfisP3774fepPEuzh6WAgKrbEekAvUUPJ5D5",
  "key36": "ADmXdshNgEbAC1VpVekuV4GKzbowYN4xUrLon7TVsSYaxds7QNkni8kkWGqUgLeXpJgzRZtf99WP72BSi1YRvta",
  "key37": "gFizactow4txLNZCLSYkPXFwR5xMWEppV7JV41dZX25XuuYuwKVpymqNHD5g8MRvsvK8BxyMtMQHre9a5Tjo6jm",
  "key38": "3pvHWvaEVeLoB4nmCW8ZbmZ7LaP8V6UTEJSvasuXBEoyeBSYXVcWFoj8QLeFgiwkprwyNCkv9Q5bmQ8Q2xUc4rCU"
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
