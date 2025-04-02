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
    "48kMZECASiZSiKhXipMFZrpb6D8D7Y6bm7nhsZdkKocpGVz47GmxQ5S6utLQLKN1hQwGPXocmzMfktj5QiBGwZ1H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GbF2U5orfzxGSuBJwBgV2a6EJQ8ViZzRmdYHGVe3bLnwriiVcUxbe78WzZuZwDjKW1TG3wsNnL4LBrVC4aUMH1D",
  "key1": "4Mai3ZLPEwcyfQNzwMdx2vFJzDA1XrnA5b6VhfT7xz5fUF7F7q9x29BTpoo8ojQMfwNo2pBYDw7UqAaVaD2ARt5A",
  "key2": "ZywoxWByNzNPC8JA2FCppk11z51JXXBLhjxvv9ZifP1KdGPMuuMpnswAY4H82KGmkuP1P2Cfrp3WskwgLvTL1ZL",
  "key3": "2shoBTCkgfEZtyrDbcKFyozWmas4yBjV1Mxiktm7fKXMMi2HpJc3Z2TZpS9HJRQuJTkE9SMB5sRwH4M5vARHuuFz",
  "key4": "5izoo3hmV3Sfn2wRp3YXtdiC49xHoDaVjAeM3GJFyNcrAtViDrchTagK48cczp5SZtXJ8s6CNCq7JW8KF5pHTzuK",
  "key5": "2hAfxH9moW5v5Rex576uSFw2zHW13gapuVn2UCTpGbKJPbTa7K8pYUyaepBUnz9aZD9QnDNutfiT1PDyUdpayju5",
  "key6": "ymKZVy7Pe99CQbNzQ12uwvpFvbPXG8zBS6nqZaWcdGbvsWry3LdYrt7GckBgzQCgauVHFjMXyyJUjLzZvYFnSiW",
  "key7": "387jFScZ7NwDhq9d2akdSgJXRkY5TuEDqQq8rLopP1W6Qu1cZfHLnzFf9HhPYetjG7AZfU4DhMxgLzq7RPVF4A4N",
  "key8": "5N6YnJdWr7nMKuBZWJZut6obRctUjYSJk2Ur8SXDiFYoJtPtmeZwDWDaVnBfB5DHBY6vyTds3ndsivuQurhk1dtZ",
  "key9": "3nV8xLYwYn6uCptKxMitFNVqptVVLmoYrXRGCCi9WaWUzYNQ3vLqFmw7NzAhCp96nVaPf9uJyPVC61maCTFE4Qx",
  "key10": "5X4mfsgVEMNdvstXK2iHoYiyq5kfWoQDXhV89sjmmvQ93fWxBV71evgNK5ztk9Ax7pEM5L1p2wmi3ELNzs1Vkyy3",
  "key11": "58sPqr6M8h8XdaxjeMeb174LTpdLBV5mNGR5X8chL3B7xm5GQzH76fa8mmTmWBUcvmieBz8WLTWmPRjj7ZDseQqY",
  "key12": "5CjkcTxjuKFb1bcu8vX3uSPtQ5yQhYCHW6xTRdtZq1hfKbNhiEz4fagefDybum5BvRjtJDH4uxtq3H3JhuNJCzYU",
  "key13": "3SqVxA4UxDwXRVGFw9M2G2hDCWX4MdBHxGaHjPGYEZtAkKTKZstBCkLLbJGJZN9VK175EhgN3PTRGfQpctGKkRnU",
  "key14": "2mTaiQHxefuPg8HGkbikJqPQyJVwzuqS8Bw2jhpwo3pjz9vFuZqeRvmPEYz31WuqVw8CuNzUQP2QfLdNRTA4XAgw",
  "key15": "125WV4Yjpxe3ZVTUCRLtDMqrwShJuSRvpxhHmpQqBriqvzDEUxdsKHY1T3pTipYsEN7xgowNNZe96RUNTB7uhSSY",
  "key16": "31vJGQLcQgytR4byvvxYHpNj8AVC3YGQQBcYVfaVPXnd2tv9rSmYFVPp43FbnhVsCQo6pqdYz29FLnX7VRA5oWNE",
  "key17": "63evAkC3wDJEdC1P6DMeoKkyDo6YUBq1mKG9dQdhCa1ERmdtu7PrXbwP6GZCyco7J6kFpS8gYSvxjRLyL4NVoKoC",
  "key18": "GJsCrn5uuRoaP398o22QPYkuNY3dpep95xUEhYVMApv62nzrVWRHEJSqMEzapMBzjUeCddzC3uowhfW24W7jWd2",
  "key19": "3dg6hU6KgtQA9iSd1gugsCjsXktbENbMCwCp7bg2c1kkefMsDGbECZ7pMENbxyzcdJpjHJYYDiBnorrMQEMEJ1Uq",
  "key20": "2injSgYVQfSW3Gr4qHjTpRJKbepjtgaiHEz531EVVfTi1qsume6DpA1Ew2vwSoCF1YTNmhWiZuRUR6uZVZYeyMih",
  "key21": "3uGuQmCmGXn35CSYgRYgesSqUEhQY3bSCVBP1VJrBzNKLDFSRA3ZSMBe2XYvgEve35nSpQMjnGmmSVXbFu31XNH7",
  "key22": "weskvzUP2uoKTbHG5HW6u2Eegm4Xi5iT3FwRqPajN5fAAYAWdXSSnBsz4wZQxvzyQUMSkviXYMQb1vkBRjEGj8B",
  "key23": "v98r6K5vVxvBEWNz5eE2r48GP9adpbkKFehgbA7UvSDxUywRMvMr9ck17K7rQTedkRbEVTxNg38zVem15b1r28d",
  "key24": "2TBci7BczXmcy8KV36cK2FNf2adeoDGgsq5uzCsXLJgqVb5ynUzoCRKBcvdESNp3gKyVbxdSnd9Ber9E6sXEQkoj",
  "key25": "46dj5tYn2hsiViSRbBzgezENuTRdH3KsmAtS7HQYRs8gC9LQCHFt4452qGzTcERAV4MGLwQcRSUGg4bwYKWNUwyW",
  "key26": "3tF7nZXYdP2KHVDvhkfp3TdZhr5VotHQh9vQKfdDghmbz2gExwvAvSweKc3pCovtuinhwr4sH6duZ6DrULfxPKfY",
  "key27": "3WuYJxWqL9dGmgYnWqfgVsyZ1QoyeTdfejid2DqEX9JEny9i9drJV9zK7PJu7KcQRQ4gdXjMTcMheWPEi1ikFLQP",
  "key28": "GAWHzoTsJDzgKdPLTaQqXd9G3JcqFS2FP8nCybaucR8u9A7gAMrHh3PLEMbSbk5bAM17xSxzkPyZjhiLz8AMNae",
  "key29": "3wBfNCxYpxPXaLvyDNVk3WDbBDD47U5oBTNo3nmXNeMpvQd2veAVeWEtcjCd2uqR2bdi45CnupNPeWZifaxBFUiX",
  "key30": "5cm8k4yNw8eDmHpZZ89SG3RbpMmHLQueueQ8W54G1syXVaWoCgyVyTqsbuxh1TGgR6WJetb193CizyekRy1ZBkT9",
  "key31": "51wqwMicXVteg3Myv1oauZMzU2a4GMtpceybovLAxwrYL64pndrohs7eP3TAxZh2aLAMTPWZuGKzV1M23itUJRpq",
  "key32": "4NPpKimRF1nMTT3yb7xk4Lxqg7uXuRWmTUkYHLE7DzwypxxRUp3SqpcYxoTQEwZQE3Fti74Jj3bUFX4iBGPC2aq6",
  "key33": "5dSiqGubMA8UDqPs58KBQPdn6XwMwNTVy2jf59nFqSm8aCvBofaXEkxc6KvcXX47YG5YG2ffMTXeELcnGcrfjjYf",
  "key34": "rP1Krfv8k1dCjXCmZRC53NAYWEZuaZkNfqGhRfAhfiBhpJN7o7D2toFFk5aWGPMvsSCcpfcWKauTLv1riFphnHx",
  "key35": "ju1KsSV7RVk1JwjGCkCug3ZPTDhtAc6EsZCAELMNVdLXB1UPd3oHvq5EGYs9mVyzyvazNVcNCQof7voENsxV8Ws",
  "key36": "3Q9VdT8zGsM2eVgAuX77HTeD2LTDy3EumZNiPry2piZzkNDC8P3SVj555wXYQeZ79KUVva7qbbeaJWytv2xEKTmV",
  "key37": "4QmD2qi5c3dR7x4tLLiTud1fakSmEhRZ2GqMA5EzQdXrLgMZqcQU8g5AEBMeEopzzZZYfKuQjBTQCR3AvKeFv6eH",
  "key38": "4uHHQKgMaHMDg1xBAXJaUZRG4dzwN9u7m3vwWyTgn38nJDTnrH1BixRw2F61475wvhaCp3nvCjfHJfEbnQxtwwcr",
  "key39": "iuUtnj758vMSk44seu6RT9Y29ekYFLL4Kecy2wkJWDEfKrX9aErPNpPov8JtyxCfQG2zPuvaDfdWFSGAPDzW93u",
  "key40": "3XJ7VkQbrLSv3kRPuuWSLKn5JbjXCxMXzPmmauwhGYEMEj5TQ4zpfZmxNGNyBRHTiD4qJ3aQGzYxYr6oFSVBWfWU",
  "key41": "5BNks3x7QtXg2QXvDQcDx3Fb3WKfXzv7mEL3ACSrd4boLSKBrB3sMTcET7AHwPC1fV6tdjPK266cQbufCK6C5xUs",
  "key42": "K9xfruJ9HKtrwGVSrjMzjzcAftYGkc9pzPLF2wUTjGCzPfPL2peby9PUrgdUC7FtUYZF6XMnrFb6DLBi7AZAGLH",
  "key43": "561WzbPpTnqC6PYpZHEz6hYwAdcrXdaMJtxqg5ws7om6xbF3Cy6DKrWbNZpgoBuziLL4sB8hz764jaPvhggw4JPN",
  "key44": "4faH8QEBmuBPEoMXoRm6eY8YaKCF7wMtPaYNjh2Ciyd4ychv5Uk1qGnnYVm2asL79BS4pvxrznfpmNrGRsutbkaR",
  "key45": "2FgC6RWSzCguqd6TEUL6dn2usgzZEvAtSTx9tMTX533fjETf91yDn8qqoRNZVu1ZoGSpjsbxBtyqy14PyYKcPTmi",
  "key46": "2vByTUB5Vb4JUY9sGd2W9ayR7aqRvU6zF313sdVRXcHShWgVWvjLuYjDChTtXPQkRfHEF6dwu2kVb9jBYzSQwwsX",
  "key47": "4MuTmb6Gn6oRnEEMHWsxy4hy6hSkWPN1aoubEhkBDjRTzkcJZSUQGNMxHw2TW2PJ8qoxneTNnp4tqQmEmAhcb2bo"
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
