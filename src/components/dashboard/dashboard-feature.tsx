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
    "2Lioz7VHvmDKo7Y1dxx3hkM8qfCSLT53BqGNsdzqzmYESLsCZdvDd4twQwZfaeBDwhXMuztWyvBX4qPBFFELfSed"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57nmJ58BBfsCdXojApT9Fn27LnxmLPdkfU1qQWxZEzQPNdfTr2zRiVArDGbR3dzuhQDLnQ2uoJZFxDrqfuJFwCFN",
  "key1": "4TkTB6AG6YgJFRcW2PpZV2h7KHJFgw8ajr2BZQmSXmR6MCh7nRqZgZcgWpf7WQGiMTNXHj3v6dCNCM78sJkJWwcb",
  "key2": "62XVUg8MZ7eL1GA4QxfLEkTrBCQX8hRPn9mqyemxSXnHhw8yVGMvxtHEHoTi681X5BoLAaYiM7Toyan28L5PD6zb",
  "key3": "3rZEkZudYiiACkY19dtFbcaxxZZkNnHqhPRkuhyE3RvispHsvAgszTUV3kGDGP5SbqoR3TtcSC27wWMBhZcJHjLX",
  "key4": "573L79JoSaS5pKoDh5mxWH6CKNvybKsMw9Q6TQKeNmsPt2PoPFMevxHjkYtN6JTn6qHCb82vXetWrEB1dGJW3TZT",
  "key5": "5SfNJ3RqJoKiGtCeVkWVjk6uktrW7KktLXmhjtMBPFCgFkdqREi1KeHKFoPpRT8jhQFkgDTTxqarjNPVDakJXVS",
  "key6": "44eCJqbzXtywJNn1u2TKnBwAmKEp8o1v9Q7zQBAYQ7x1JWhWQT46qPZ6NDeGRU7sjH57EyJAsnSfWEnfxrT8ufUh",
  "key7": "4wjB7stLmfWdfpwfWz5XwBmg1jDqse6n3ePQzniXHBajorGnwikxrMzv2FXHEHp9RgTyTYgvgfTLyRfGyVsGJ4bU",
  "key8": "5MYDjL2YeRAsCbdJxP22eALc3srqJyorr7YHc4QGJccshQ1TK68oA6YtRcW9YPsCmRscLs1LqxNP9fQ7PWBoWgti",
  "key9": "7iaMD32cGb63sp6tb55wyKqTKRC3AGhEMBTVC7fxabw98yh4mp7KViACcFvSYPu3R4ibt2AQauGGWRV13LGzzdX",
  "key10": "4ainwQDAhjzEeMeMBmiDpom4N8iCJYRzF5TQJMxKD1fbzxL8m65KUprts4VAhrtJ77MmChKuodU1kCQuAUY3VNb3",
  "key11": "4Qsq85CuVRjVhCMsHhP4f2ateG9MVSppaS4TUdVsvHVNkZ85JiDLN8kiR6kWMN4urGcRwVKzcHX28imP3XuaKH4W",
  "key12": "5Zwv8oUqLt6RGnNKBoPTpsa8XxxC7SFJEUNZNnaxmMrwoLmaZcUmZMXurutYzBCfYgTcDFgSEvFxtf9KxfaZw9eh",
  "key13": "3rPPbGrLSpcmaJKaEZam1ddzTkYeTJi31idUPCGQ4ih3k49B3i71AgFh5KrhUKKdaTbRrUroQT58drT6nN4bGmfE",
  "key14": "3rZHGYVc3iJcqvUbm6nDK81iYgPQJtKBhrUUu2DtbLYqVD2ahgsupHMbcGHdgKmFfb5WJtAEYG5HtLHKHWBemFS4",
  "key15": "33JK9Vu3AC4MHmX3VyXnQg8f7UPAAfp1sbBBwZuJ8oaUdjJ6hSSsYAPc2cZF8y1AeB1EUQxmup5eG2Uwir2Uxvn4",
  "key16": "4KqWsw25Ds41WGnB48XQ4QA5svKnMBaRE7FDp2sXJRibTPm8LBfNHuXbC6vCxwUBza2XHQVdQmVd1ERt2bt1G6L2",
  "key17": "4dPhohJjDMC6BYEA9YfHAuPU8iJ1icW3JKaZFUb13FwhWRzU2GaoDnZMD4Xt1wTsU5pTzrBBptKPhLp1KmrddugN",
  "key18": "3PeimNyCw4msYioSoBth3oxenD2Vd1W9LwgerLKuCR5aHtuVcGFRj5XLkU6kLMk6U7VEdNF3neVEdQFQueJ8Fzky",
  "key19": "451aDFJmGATJBTcv47ZQ5fwqsxYmceZHoSkqxxJSvySiXtVkRacHgtpv6QWQQpmhZS3XL1m673H59X4cAA5uiL2C",
  "key20": "4SZxmsRiidZpj5p3xe687TNqVsvrEd4ST12jAyAqFVuhnq7WLohBwUVD4kS3Q4nfGDrQncsFgzgSt7NpVrJ2fNSS",
  "key21": "3vRbXbTdz1Ckx4chdgd5nzGgmdRE4qpEBQcF4xwQnkKphBkruL6nxcvkdRMDUK289y31rR5Z9mCurosBM7rwZ8wb",
  "key22": "5MMszNRsmStLCxHfy5VxS5XvwVsEkwkxckhk1Cord9qdJYeXgsA5UH41PcTxFwuEenhZdoWD4NvABm8RfwMSDagD",
  "key23": "3GFhuZBoQ2SXUCDchJRmDdYna5qZtJAnW2kPAb7ym83XpgJ47NyueJFfPZuGXv9WX3e235USdgtdNgiErTC47LeE",
  "key24": "4eWcSxRRzchSM5hm77a21tm34tNev5szKxdWsVJYYkgDUZd8oLxqw9fMNdszJhahW8So9uANGmTsYiTcTQkff238",
  "key25": "5tHXJf1uJBKy8hpq79LJa88jD5kH6G4VCEePp92zJzNKucTNQUiNynJ7CjFGE93Azrtda7UdKoqacRxjHasX5Q8M",
  "key26": "4RTB83E8d5MaDaLRcdXpF4fhuioevsVEG5dPX6o8PJabQMMKsbnatvfTrNpJNtY6gQxa5aSfBrcXBUz1FgCRtvfn",
  "key27": "5PtGyk8kEX2TfGQDnHWSmoV2PV2vm2iSg2KRUG3fD5b51v9DFPNZzRNTqWET2FC8a5YBEnceFRKSFWpgC2nEkZVb",
  "key28": "3vABGjJXbHcYfE2QMd4wKnvsohMuRZ4PkPGKqPDrYfm7TCHgodK6GhzJqv9YEma7zQ4XwabV4H1TfJmbhCDQCU7P",
  "key29": "4W7vVvgbkjXtJFfMsNRAkPWB2fCQjXmPjFi7ztD1HHAg9yMYwAJGdXHztgojHR3GD36g7ujYzKgsmQ8A5yBKGTjh",
  "key30": "5gc2UxLeBYMko981Y62XiRbevyCCQi2AgjN4xDSibtkcfXm8t7KPzRhBDpCQ9BziUGjvYbT6NBwL67AhbGdXKivd",
  "key31": "2pv7paAXEkHZcVg3yzyZwMqiBAgkdBY2TrgTp4jWMv5ifXGyAN27K4XFBqgk8wYQpW3R7EMZfNASzCuYT8yUgbmN",
  "key32": "2XRL8skx2PUbFc3qixE1vkFgFUMU6BgQBLHbTh5JMZc5fvRfjBPniddCekJpMftkFHX7KSBZ63yb6phtsGZAUwE8",
  "key33": "3xPFufzDfewJ5PMRaqGA4QNEv9reAiWxtE5rhUBAZxQCTvH9RxU2gcsPNpAwvX1umGKAbjNChuuTqCYoqBHP6y8L",
  "key34": "3joL1T3uHG8TR3e4eJ4LeqSddbiSbvkD45oMETDtGU4YES39VchduN2TYFr9aitBF9CuQrU8381x9PiYwAQHczLq",
  "key35": "BaPxbRnxM3nAyxdKqhCL8RUuzF3W4ZoHw6oCoYG93SkpFwNoyCw3ANw4vXrAaRHUg8ubv6Pc1ECcKkUDRztvWMM"
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
