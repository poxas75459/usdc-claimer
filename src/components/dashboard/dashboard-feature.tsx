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
    "5GvwrVCTGj5Zt7QnzqNRWrAiBJPruxzhmoaeAoLSGHUG9XMCTxuWhA1cMrT5Fq9t3Z6nCmCXkY12V6NfrpuG3TD1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53ZNvueiHMmPywn3t5G3nWSyjRzYnYYWX5Lu9akSXMGuFeWhTavRwaUBqvWnFwvS9Pk7jCXNWDP9LYTTz18oeACw",
  "key1": "31G4MJ74BN7YiidnkWKGmiAjmLt9aL6kcw9zg6usNHezjDib2rmQj3zeNi1R7WpeFbQ6WeXm1voTqbPX57ts8sYv",
  "key2": "4p6vsE7RAZMt7ksYVTpGm47oYPkMkngE8LfbsYmHPnVia8f9BycDHY3oA8pAMmQAcnHA1BFHmk43M4uBWzirrWyM",
  "key3": "5vvXLCYoSMMiMbTRnUfpNqUA6h82J4Xiux8ZFPrrjAnJdJaZcTEs2JF8b1HjymxLuDHJsTpyVc21Pz4AZ5XW2K7a",
  "key4": "25qP2B77AdcMUZuyE9H8oCCayrgfqfFyKAAwBoTMZcRMJbt4RD8PFS3wG81QeAvFkEWMwLQCaRDNVhnkJW6dGE1n",
  "key5": "3xgfA96eA14fjVaCMsRCJ52MTgghmD5HZ2jLZmiVgJ3F3emKBstnRSVVwpCpf6WjS4cUJjrtwV1qen4nYjzwMtaF",
  "key6": "8UvYp9umz7RQdh9SjN4zaVMoyn8gz2vm37Qmh17bhGQBiSg1kbF1R9qgzRVuRoUeCBSVjkUQwZ7WFA5tx4KBDKN",
  "key7": "4GdZLdJYLD4kKA92TRUgm3FdGphwhZk6mmD6mG4zXgHt3ydeySp92tt6nJb7qteHMy3sas6XHJCmWVYnbMDSoP6S",
  "key8": "3zu5PFD6FsscRDVwmb7ndq1eFqf7TUYUZJsxkTZdcSBip22fbHwAEF1A5DjCguicSc6JFUm5BcHJiMT8xnoSG5Hy",
  "key9": "5EYEmcN1rCiXnoZeDc6FWSsSCP8cG6eyA2kX1jsqL1xdRmawUp2DBYcGA8jmpc6pGS44RDaajy724oJuPPMjMhSA",
  "key10": "37BGeVkbeYr5AJkfsdbmR2ekcZ1NMKjKjo38Rpz4k74BrcTBHEfCdqtUvcJfHv8n56gEgbzGzV1hQ9DFBCqodkEa",
  "key11": "5pXqsi4Z3majjGyofAnNfX7NVEuCfj2DybW1sLc15KDyrYybXFwBN7S3wafPTUJQeBppCnuYynUYV9rcscCHyxRQ",
  "key12": "tDvj6BfxawH1Z71d76aUkhw8Jd5E11H9n3dQwAsWkzsDyaR1g1Ri9NPbJzg7HZRZWbMrbcZhHfzmLedFi5wbJ6t",
  "key13": "4gsYHXbR2HUB9xVsZzZTTBn2Bnmqf1wfiXAnSWu8CsdZFvWojgSQ4gd1vLF3njFJY15sy5hq43mXATUeo2VprjrV",
  "key14": "3XaqGwEDuWWGy2jASekzyRrkZbf6SaMibguaZU1tHH2KsXqQYTzeEZKeCsaw2N9SdSnFVuZH2efJGCREunH1C4aG",
  "key15": "2e4195AyHePnvpd2d7TKKtgH7j6mj6Pozy59aHERraa2uLCsdNZWr9vDeM2bFt4bgMPnH8mwZQ6ScsZnUZvKN4tH",
  "key16": "4JV5aFcxoPX5YZNZo4vMzwHEAaFwujijqAq77t6f4QKLbXSZTtx96cPEK8uTPqfUpmaXSZigzoPfguxBv1Tgcfnf",
  "key17": "t1ETf7cgXY69WAvYTbR91CDZ97Y9ZTHPyyoLhvj5aSDx1ddHiZC3LHyNbpm7HKX5zYaQEN3uJMXM7o773spiwv9",
  "key18": "5D1918PVNcBeVQootjTwJFzTMthRpcp6FnVhMsrwzyogv5DvZjKTc3KmrTbTwM3Z4dbm9CPddgqJuX4xoMk3PgpW",
  "key19": "4MZ69DDUFZHcmAwtV2BaUvKHBjfRr6DME5BePhW2557c6h7qaXtQVByJQFUCQuZQ4WwWjV1bLohHQovSrEaXfNoY",
  "key20": "22AvjVEY9YQgt9AUR77aKjVY6hWS6HWGzfS5QZCtAkqsV7AcTGrCmWkfdZ2AEMuHjPFrFz1AcD9iwxusNxXjSJVd",
  "key21": "6779qNsF7NAC3As3h8kjRAg195ofXhJmX7HZQQcPwzCHtwq4RvQXnSCwhJ398dsR1nSPLrCh1jiPX1qx8WQKngn5",
  "key22": "59nxMPHCth3S2dCSL724igM551392efSfC7nn4WCzMCFsPhiuNqXA41FhJitXL7vQvXzf152vGpgmXb3iwcXEq1P",
  "key23": "26S3ExbWCYeN6oiFbaBkPaZyvGg8Ydk9dNNfaRmAW7o2EzawYYARHhVtQTh9Z1DPFYRopLgMw9ahSiBx7tgzV5yD",
  "key24": "3R5XPctgB8nG8xriphjav1aUqBtLvgcYJr7o9n8aBrXVaXY4BZMVXWvPpXMPC17X15T69y6gAGRRFffysXeBPcdq",
  "key25": "5fPJPtAqbn3opt7VGdFH9DUnujjz22TcUVJ4upfMHK1vEjbqYbMg45vpD5RhwDUUoMV94tuDt9NEToYdtpSJ1jNM",
  "key26": "3qePrbNZbbMyUGmHt7R5US9jc8GehwiX2JSw1AFSeqXzj7iJG5VbFUTMkVij4ZrKreGgVPuf28y923ymKcbgZVmK",
  "key27": "3UdYgXYXzY79eREEejJhQ9aYCHFqivHmqfk8VjMfUW84HDKjYwV6WhwrhHiJGXHgVNhNjojVPEr6dWtRwebwUkGi",
  "key28": "5zNWnK3iFovNfeAetagWfk1JzuUhK5jGy1CcifaGcSTiuVpv4LeNRinHe5nzVTymUHs83S6BDmpUTv7D7BNLzxVb",
  "key29": "3MED9XkA8pTQYYU6VdwZzBrHqVS7zLeXMjA1C38qSaZbsrr9yJwjSnnR4royKs6JebYVnt3HToPe8x6tKTwiUVDh",
  "key30": "2yzkKUGAwYQMPbe647pMpLQ8CsYxprnn3CMS4UsFcCEQBoe15KZWQBk6PJhWQv1CNePNjqFg3oMg6Z4iCc1Mn47R",
  "key31": "63rUWWhUhxLRK32h1KH2ALcKd6hQo67CT9CLsLXeAnMsk7DC6Ykj8jne6Pd81wGFdGDyrEk68nLuMWfLRHLPyZGW",
  "key32": "wtwuRLMD6HftrfyA7oWyUNi6NNyc4B6uqz55np9p5bZzNvZMR5drftPRa2FCiVwbMYdXn7tpiBb76P1VUpmvUxH",
  "key33": "5TTdd35ob3MFBtp5oKmiMbsUTA4d3NkCByH8aXdQZ3hdSpuFQpGhAELaD4k7QSWpxGQVAFYj9srw5xVVKroZAJ4",
  "key34": "4GWCumDwmFczKN5ZhotPWQy3AGLcZTCGjg3cf3ogmCRZQRTEQwJ3uUK1BLyLpqMGCUwS3hNT1pDwu7BvcRXWWhsJ",
  "key35": "4Ldbo3V3ipgwvnPDaGEAABDgNBzpEVMxvEQAJzCBumbdirSEPjwBGmZEhGTbysbAJZndFWb6qsoc1snVxCuTVnuf",
  "key36": "tfWEceHdsSpCJewj2Bz5XmsZvPzRuxawFcFy9W5yyzePW2v77uxmuzJG8isZPuDqjqREYwSDxVPKg48pk7aukEX",
  "key37": "59K8JiFrmT63R9QxLEn3XhatWVEWt9dnHnxsiGyeJoS6rGsHCNdaEofwmPn7mNFZTzrFcekVcyLrTckjxzvaeRGs",
  "key38": "4JzR5N2j9MApRtansAbasc2J9fkDGiEGog4gALfftt6ZBUv723EXfBcsn48RGuLKqxZPVCfDu2Mc1XQFH8shuAkh",
  "key39": "8REcTxSpGpkWAtrzVCq9yHRAucUWh4V1kFpPLqLiwB5brqR2vU86R7W9pYxyMWZVGDihApey58EnTpM1PouXnVm",
  "key40": "36DP8w1xGuYwatHyvyQJKg94p2a1QV1jkCZtCJz3UMshFUs55tFtEPNV6HA3wa811ARpzSNV5FAwLW3vEjqEYCRW",
  "key41": "44AZFt9Juou58EZjA7S5LZcSVd2ot4cfByA1enxxymCTSPHazWGgpb5W7kvq1BUWri6R6Nbtdaf2h96KF5Y561c6",
  "key42": "5a7i4N73nQEqfNoASpfN2Zw8Hs7etKL4os5uYZq513UyV1SjyJzbXrr37k15TSQJ1NxsXfbxpjzwubyXi2gqAjdx",
  "key43": "g68MKYEt9iNUSXgg3yjmFbNrn6wnPjd53JxHbYy66fACCcXs8cTndQfdD67MpD6q9LDSBMXTxnaQ7YwDzESrgEF",
  "key44": "3psoNrwADU34cyeamVnQ23AAnA6NiYeyuBnuGUDL7fUNMmUpjkXcEVNEBf4mssJjUdGv3TVwSTnsaxQbg7vEjuLC",
  "key45": "3inZ8Jt88iHAZRWtgMfg98kfQ53JNhHYkNnHEgePFF4Pokzafzstyb5Lrqd2RUritK9HjCoNx5Ak66ZJgurMGJNc",
  "key46": "ik2HEuycyULtqbMx6uzeD3McRGdgACQ9aqerQL9uYFKnmpMMuDvnM4gbdH2xeHTuXPM19QobMfWdeSEM6qEv9jn"
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
