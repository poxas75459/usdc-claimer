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
    "3PLfdFgKhiByB1vSaR2tVWPojiLkXw5MSzdFATMoLYZQGzFhma7f8q1GLJvZceEq5N926vtthC1xCcNesYBKb2De"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RQhgR2Jg4MrfqCFmYe26j1QHFugydWQVHW55GKHm4mcMggStB5RkLtoG2H5ztANnzzXj4Te7WYppw5m2NrJAMRC",
  "key1": "5vmMGrUnHywHAMXyzCvP888WAySASH9s1z9BPVPegBgw7PT6pt3B8SdxCRc2c3xvScS7DpZgahAjiMDAb3KR2wM1",
  "key2": "5cJ37ABgMUbJfy4AbaP5XrLEdoF2M6jCJwVzYC9pnm7bAeeYMEmag35HJoQfPcWN1foVTgEBKRnBkX9G2hMDAC2F",
  "key3": "SjmpBfMsyZzZ4MKXCyvCDs8aGEjGTh4wEMEDaUDsetG8kWQ44ACE8CVnB79txtmqoMLVrAtmHG1zUU2vVd5aiPR",
  "key4": "DswXXq8mZQHCc5azkicKPDn11WsUPbW6CmmtZjGNRrBGY1PZH61iF4KtdQedpzYWn2LmpHmaYhrf8dzxW2aWGw2",
  "key5": "4Tc9XKPCZFw3ugqA4wUHcVLDEnpHmjQ8BTPZwGq9xkM2QHmMuVhkecRg9UXLes1c5BzoDhTeJpighSxPGsMzXSJh",
  "key6": "5N8PyTzfHiriFsL7QTMArXN7vtnjdPefJTb6nbsNAUH6jQKzn7eVF82RYptJrm9JvhgMXWocF8zYBeNknooqbaJN",
  "key7": "4DzPe37cBKkePePYq4PXzjA6o7GShz8ThUEiFQexN3f68VdSqHD8ojhG18nN3NQ5szpNWnbe5mvyW8rPb3rKxt2k",
  "key8": "3PvdxUDWHHt9mnftkjCHmNdViJe9BACiAAKrHBG41qAS6KDk9TFAcyNZvQqi6GZXA77qod65uE6BvEixkBrQ6JEo",
  "key9": "3uZai4JUt6akq4Fgts9ruhEtyJd385aJkqaaGNCNTK1jPNiBRhcD8ivGrUfAyQRTCE87NmtgWxsDXyTMkK9UwuoV",
  "key10": "LokioGQt2SUp415P1q4EqY398siyvdxbV137tBgXxW7f17Pdwb1CdndV1wzQdc8qnFEjzaL86kXETkQSBm7uGMk",
  "key11": "28F1QcU6yV1CG763vNUPH6BHJy31FpcMdwhZdSfkDNxGFUoDrhyYTofHa81xNQ1VsBPjQe5srjXbKPfJrG9uSryR",
  "key12": "5qLyuTQPDyDjrxzgMdzyBXQijbAippc9ZqzwoDYazDeuwzA6dpcgWdC5Q4pAeUziefXstw6VTtvtvqkYR5NiYyF2",
  "key13": "4HRtbE3AM4UfYxHp6yPjPmMcNrRhBTJQnBv9Hbtxw1JC44mMLKCqh5qRQfka88xHjJY4snr5MSmvtFf8LwakRqpE",
  "key14": "5n3aS14eFhsT9HYU4vghPrJ9NH8rBo5srqRFyTSwBVsu94Yr5kfH495sDfaFndMnwjCHfwmji7pdf9fP4VtWdzXV",
  "key15": "49qvefk4EFtnbCot53xMZM9r2YGwJABhQ2QVNyhDA9S2yJfmYwaTHyfKPN888mkaf9jgmaHQgYTkYwwuXocVS2ge",
  "key16": "3YWXYKcx3DabbZse1CsCqjj4u5NADkswkwySJ2sZorDKnVY5nr6Jnrdy1U4EgsywqyxgE8hwAqt7BzgE77gGppqB",
  "key17": "3NKYghDWTZWvmHCXuUQ8M14qGuCtf7k4wzsgvsNR532KbULWp4A4GHMVxpAtAKqPKi78wpLmeXrKPw9wRwaBFA8X",
  "key18": "5vTzenV3RuztGg1kERRzomi59Fe5TGdoKjH4aWwMJYFE4rhJjoN8Yv11YdNq6v2AnidqhGTJnTjzqmp8wWv8ghZg",
  "key19": "4FmTXs81Kro5inpEgArbMmvRx1KeMLQmneyHCcMeswSHm5UL8LfSGev7dRFuKbQRjKFKFS1eCdZSr6QChrkWzSP4",
  "key20": "3muFETM7HFoEXvZDRrnvp6fyhGpBpD1oXP9ULxgbYQXMgGxEqx5R3sTb2DNvaYGZiyPtPXXP49qXWHJncDPujqVZ",
  "key21": "3tbbCJSJRCfM1cKdBoNLWxcyzRXVrSCnx7xunfYUUE3u2FWj33y1HX7uQDuoDgfu9iDtzD5tqvZFWr1ZArvkUepA",
  "key22": "U8VjKcThpXCdb1ak5hy9cHQNQRUtg8XJULcBrA2GFFrBPehPge5yeHDRrTmrkMcsaRUV2ZZKeFnU7AMsTAbfxp4",
  "key23": "PyTpxUJ9mt5qM9tszuWLQ2Hxv8R8BU822DS8xyD5bU1KzWddkDTAsVmo7hTGfBFFZampdtQD4efm5vwwWFNUbf2",
  "key24": "2NHDak8cJHefWDE47UHjDhfK2MJu6x3SJUjwwt4ULGGK7tyHEQAGwezci4KL1gDSMNonGv6bKTig85bCeFPb4F9e",
  "key25": "4kLKYs4snCGHpQ34WYeadHedbW19ixE8KHM2MQy75nzaYghDpwNRWsXhwgqny9VvaXUEMiaHoUgnV6JvsnyPhyWy",
  "key26": "4766hZLLz4bS37MADchBd3xGV8egGjJFk5EeFTtYqqJi5H6rqHrAzCNSdBzBdMsG24iyxddZV2f1pXdXhNNfqyXH",
  "key27": "5GNpiw8iUFZHawEYG2y5TezEXWoPK9hKrk1KQzPDBCuGfQGBvJ2bmbrBxPJxMUYAHd8seKPumWekdbRrYbDqp82X",
  "key28": "2Jrb2RfRwh2P58XarQA2FkxjzHSUGPdEDxfvh7HfhynBftabEuiwxUDYt2tecSn2bgvCbEiqF2M32TmhzGpbLqzY",
  "key29": "4FKtacSWTBuaGzp4FXtXo7RepStLgtvsaYRqxZbqHMQk7fVQunbiW3TUNU5RwyyPCL6wPXKHjAMLX43DiCBU1YDc",
  "key30": "YEcGYuqdeH8CuVq95kVhBLkQnXjqGkkmdCWvXWwihPgLoUacRzuVAPfKSFppTa7h7L75umcLwH5ddN1eiUbKbW6",
  "key31": "4GZyvfTzYUPV5rt4zZjgR1qk37cZSQWEJaUp1JpWR6Mf4hhhLqEEaARXe6nV4shmd6TkwBVSmXRpTeATFegGJopi",
  "key32": "2KfUs61LJMJfLRLo5R25mxQK9FhqMhZQnES2vkoaRbArPXiUxEZeyqMs1BHaWjddLAvjSYSQKuA9xotXCh1JGmDt",
  "key33": "3wkMaYEBHqgy1RXBJEyLxoxxC5YNTE2gVWdGYbNpJm8RTDuCUJqJkGFoikZP4TJvcBiPQrrXNxZEMwtzPRXNASiM",
  "key34": "3HtsMYt4zk3a52HKPUSETfFksR5s4YEDqXxUvBtV8S6wTLXwd6uHbyZiU1Q6nCdUjvMK2gcvKaY8Z3Nmzb1Rzu83",
  "key35": "4oVw7Syea1wuixbZJc5znE2MHxeiRJxMDj1z2YD2rxveM9MH2GRdP5BSwhJw8Jd8cZsewjPWkz3SfH3ENqcy29oD",
  "key36": "3JioKaA3ozQfpSiQvZmXiT4M5ps41CY5gbTSRfsNEibMqcu8BMGRdHSFxyvNWj9xVacWMG4HNFCFyW8u1njh26sc",
  "key37": "2jcoGo2seCHCbgTWhJ8C6pKR9XBw1oJMUA8r3yF7wWcmNz4Pv8DKehw8WTuopZ8twzzqDqh6ZtYjQiPkJfoBu3y8",
  "key38": "2aX7NyyY3HoHLeGKkc7ieyskCv85GMHEwX4TxSBVmdpSYuxZgSFRgwnFvDtXSUNmGWH1V3HdDFnh5bTMKaf5mriW",
  "key39": "2bhGmjy18iPFeAhNs6iXTuv2F3HbyUjky2Z3JwqKTm4D9QkFEf8ecHCyGUJdopynP1VPfxGAdsyiZNwatQuTRUVR",
  "key40": "388CMfWXj5UCjDrtxBE7xFcJgsA4PRPmzFbcpp469K3KFD7nw7vQcgF4hStmkAmSYXyuWRLyYunRyxuL4hPrSqNt",
  "key41": "2TW2pXwc9rE8pqpLtST8PdHKbfmYayAZCvEqZUhWrxFA8VcB8YHi166jYF5ALnKYCU4TpmjkSFVFdRAPjoQdviDR",
  "key42": "3iSonMi2GS9mtMu5Rb1CeeMjnK5qkKYSFSUzrKzW4AZrxsihCG5AN8ZSw1RZLZ9QQX3x2dknWmPCWQLhzfaWDHi"
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
